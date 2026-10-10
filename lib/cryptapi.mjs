import crypto from "crypto";

/**
 * CryptAPI (BlockBee) server-side helpers.
 *
 * CryptAPI requires no API key and no account: you give it the wallet address
 * it should forward funds to, and it hands back a unique deposit address per
 * order. It signs every webhook with a 1024-bit RSA SHA256 key.
 *
 * All calls here are server-only. Never import this from a component.
 */

const BASE = "https://api.cryptapi.io";

export const CRYPTAPI_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC3FT0Ym8b3myVxhQW7ESuuu6lo
dGAsUJs4fq+Ey//jm27jQ7HHHDmP1YJO7XE7Jf/0DTEJgcw4EZhJFVwsk6d3+4fy
Bsn0tKeyGMiaE6cVkX0cy6Y85o8zgc/CwZKc0uw6d5siAo++xl2zl+RGMXCELQVE
ox7pp208zTvown577wIDAQAB
-----END PUBLIC KEY-----`;

/** Source IPs CryptAPI sends webhooks from, for optional allow-listing. */
export const WEBHOOK_IPS = ["51.77.105.132", "135.125.112.47"];

/**
 * Currencies offered at checkout.
 *
 * `minimumUsd` is a floor we enforce in the UI so a converted amount can never
 * fall under the network minimum — CryptAPI silently discards below-minimum
 * payments and the funds are lost. The live per-coin minimum is re-checked
 * server-side in createPayment(), this table is only the UI default.
 */
export const COINS = [
  { ticker: "btc", symbol: "BTC", name: "Bitcoin", minimumUsd: 15 },
  { ticker: "eth", symbol: "ETH", name: "Ethereum", minimumUsd: 10 },
  { ticker: "ltc", symbol: "LTC", name: "Litecoin", minimumUsd: 2 },
  { ticker: "trc20/usdt", symbol: "USDT", name: "Tether (TRC-20)", minimumUsd: 10 },
  { ticker: "trc20/usdc", symbol: "USDC", name: "USD Coin (TRC-20)", minimumUsd: 10 },
  { ticker: "sol", symbol: "SOL", name: "Solana", minimumUsd: 2 },
  { ticker: "doge", symbol: "DOGE", name: "Dogecoin", minimumUsd: 2 },
];

export const getCoin = (ticker) => COINS.find((c) => c.ticker === ticker);

/**
 * Resolve the forwarding wallet for a ticker from CRYPTAPI_ADDRESSES,
 * formatted as `BTC@1H6ZZ...,ETH@0xabc...`. Tickers are case-insensitive.
 */
export function getForwardAddress(ticker) {
  const raw = process.env.CRYPTAPI_ADDRESSES;
  if (!raw) return null;

  const wanted = String(ticker ?? "").trim().toLowerCase();
  if (!wanted) return null;

  for (const pair of raw.split(",")) {
    const [key, value] = pair.split("@").map((s) => s.trim());
    if (!key || !value) continue;
    if (key.toLowerCase() === wanted) return value;
  }
  return null;
}

export const isConfigured = () =>
  Boolean(process.env.CRYPTAPI_ADDRESSES?.trim());

/** Random unguessable nonce stored against the order and checked on webhook. */
export const createNonce = () => crypto.randomBytes(24).toString("hex");

const withTimeout = (ms) => AbortSignal.timeout(ms);

async function request(path, params = {}, { timeout = 15000 } = {}) {
  const url = new URL(`${BASE}/${path}`);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, String(v));
  }

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: { accept: "application/json" },
    signal: withTimeout(timeout),
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`CryptAPI ${path} failed with ${res.status}: ${text.slice(0, 200)}`);
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`CryptAPI ${path} returned non-JSON: ${text.slice(0, 200)}`);
  }
}

/** Network + minimum-transaction info for a coin. */
export const getInfo = (ticker) => request(`${ticker}/info/`);

/** Convert a USD amount into coin units. */
export async function convert(usdAmount, ticker) {
  const data = await request(`${ticker}/convert/`, {
    value: usdAmount,
    from: "USD",
  });
  return data.value_coin;
}

/** Base64 QR code PNG for a deposit address, optionally embedding an amount. */
export const getQrCode = (ticker, address, amount, size = 240) =>
  request(`${ticker}/qrcode/`, { address, size, value: amount });

/**
 * Create a unique deposit address for an order.
 *
 * The callback URL permanently pins the forwarding address, so it must be
 * unique per order. The nonce is embedded in the URL query string and echoed
 * back unchanged on every webhook; the handler rejects any callback whose
 * nonce it does not recognise.
 */
export async function createPayment({ ticker, usdAmount, orderId, nonce }) {
  const address = getForwardAddress(ticker);
  if (!address) {
    throw new Error(
      `No forwarding wallet configured for ${ticker}. Set CRYPTAPI_ADDRESSES.`,
    );
  }

  // Guard against a converted amount that falls under the network minimum.
  const info = await getInfo(ticker);
  const minimumCoin = Number(info?.minimum_transaction_coin ?? 0);
  const coinAmount = await convert(usdAmount, ticker);

  if (minimumCoin > 0 && coinAmount < minimumCoin) {
    const err = new Error(
      `${ticker.toUpperCase()} amount ${coinAmount} is below the network minimum ${minimumCoin}.`,
    );
    err.code = "AMOUNT_BELOW_MINIMUM";
    throw err;
  }

  const callback = new URL(`${process.env.SITE_URL || "https://xdefidev.xyz"}/api/webhooks/cryptapi`);
  callback.searchParams.set("order_id", orderId);
  callback.searchParams.set("nonce", nonce);

  const data = await request(`${ticker}/create/`, {
    callback: callback.toString(),
    address,
    pending: 1, // notify on first sight, before confirmations
    post: 1, // POST instead of GET query params
    json: 1, // JSON body
    confirmations: 1,
    convert: 1,
  });

  if (data?.status !== "success" || !data?.address_in) {
    throw new Error(`CryptAPI create failed: ${JSON.stringify(data).slice(0, 200)}`);
  }

  return {
    address: data.address_in,
    coinAmount,
    minimumCoin,
    callbackUrl: data.callback_url,
  };
}

/**
 * Verify the `x-ca-signature` header.
 *
 * For POST the signature covers the raw request body, so this must be called
 * with the untouched bytes — never a re-serialised object.
 */
export function verifyWebhookSignature(rawBody) {
  const signatureHeader = rawBody?.headers?.["x-ca-signature"];
  if (!signatureHeader) {
    return { valid: false, reason: "missing_signature" };
  }

  let signature;
  try {
    signature = Buffer.from(signatureHeader, "base64");
  } catch {
    return { valid: false, reason: "malformed_signature" };
  }

  try {
    const verifier = crypto.createVerify("RSA-SHA256");
    verifier.update(rawBody.payload);
    const valid = verifier.verify(CRYPTAPI_PUBLIC_KEY, signature);
    return valid
      ? { valid: true }
      : { valid: false, reason: "signature_mismatch" };
  } catch (err) {
    return { valid: false, reason: "verify_error", error: err.message };
  }
}

/**
 * Parse the incoming webhook body into a normalised shape.
 * We requested `post=1&json=1`, so the payload arrives as JSON in the body
 * and our own order_id/nonce remain in the query string.
 */
export function parseWebhookPayload({ query, body }) {
  const src = { ...(query || {}), ...(body || {}) };
  return {
    uuid: src.uuid,
    orderId: src.order_id ?? src.orderId,
    nonce: src.nonce,
    coin: src.coin,
    addressIn: src.address_in,
    txidIn: src.txid_in,
    txidOut: src.txid_out,
    confirmations: Number(src.confirmations ?? 0),
    valueCoin: Number(src.value_coin ?? 0),
    valueForwarded: Number(src.value_forwarded_coin ?? 0),
    fee: Number(src.fee_coin ?? 0),
    price: Number(src.price ?? 0),
    pending: Number(src.pending ?? 0) === 1,
  };
}