import crypto from "crypto";
import { createPayment, createNonce, getCoin, isConfigured } from "../../../lib/cryptapi";
import { createOrder, isSupabaseConfigured } from "../../../lib/supabase";
import services, { getService } from "../../../data/services";
import { getProduct } from "../../../data/products";

/**
 * POST /api/checkout/create
 *
 * Body: { email, coin, items: [{ slug, kind: 'service' | 'product' }] }
 *
 * Prices are resolved server-side from the catalogue. The client never sends
 * an amount, so a tampered cart cannot change what is charged.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function buildOrderId() {
  // Sortable, unguessable order reference.
  const ts = Date.now().toString(36);
  const rand = crypto.randomBytes(5).toString("hex");
  return `ord_${ts}_${rand}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, coin, items } = req.body ?? {};

  // Validate input before touching config or the network. A malformed
  // request should fail with a useful message regardless of whether the
  // provider keys are present.
  if (!EMAIL_RE.test(String(email ?? ""))) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }

  const coinInfo = getCoin(String(coin ?? ""));
  if (!coinInfo) {
    return res.status(400).json({ error: "Unsupported payment coin." });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Your cart is empty." });
  }

  // Resolve every line from the catalogue and reject anything unknown.
  // Prices are taken from here, never from the request body.
  const lines = [];
  for (const item of items) {
    const kind = item?.kind === "product" ? "product" : "service";
    const entry = kind === "product" ? getProduct(item.slug) : getService(item.slug);

    if (!entry || entry.purchasable !== true || !(entry.price > 0)) {
      return res.status(400).json({ error: `Item "${item?.slug}" is not available.` });
    }
    if (kind === "service" && !services.some((s) => s.slug === item.slug)) {
      return res.status(400).json({ error: `Item "${item?.slug}" is not available.` });
    }

    lines.push({
      slug: entry.slug,
      kind,
      name: entry.name ?? entry.slug,
      price: entry.price,
      qty: 1,
    });
  }

  const amountUsd = lines.reduce((sum, l) => sum + l.price * l.qty, 0);

  if (amountUsd < coinInfo.minimumUsd) {
    return res.status(400).json({
      error: `Minimum order for ${coinInfo.symbol} is $${coinInfo.minimumUsd}.`,
      code: "AMOUNT_BELOW_MINIMUM",
    });
  }

  if (!isConfigured()) {
    return res.status(503).json({
      error: "Crypto checkout is not configured yet.",
      code: "NOT_CONFIGURED",
    });
  }

  if (!isSupabaseConfigured()) {
    return res.status(503).json({
      error: "Order storage is not configured yet.",
      code: "SUPABASE_NOT_CONFIGURED",
    });
  }

  const orderId = buildOrderId();
  const nonce = createNonce();

  try {
    const payment = await createPayment({
      ticker: coinInfo.ticker,
      usdAmount: amountUsd,
      orderId,
      nonce,
    });

    await createOrder({
      id: orderId,
      email: String(email).toLowerCase(),
      amount_usd: amountUsd,
      coin: coinInfo.ticker,
      crypto_amount: payment.coinAmount,
      address_in: payment.address,
      nonce,
      status: "created",
      items: lines,
    });

    return res.status(201).json({
      orderId,
      address: payment.address,
      coinAmount: payment.coinAmount,
      amountUsd,
      coin: coinInfo.ticker,
      symbol: coinInfo.symbol,
      minimumCoin: payment.minimumCoin,
    });
  } catch (err) {
    console.error("[checkout/create]", err);
    const tooSmall = err?.code === "AMOUNT_BELOW_MINIMUM";
    return res.status(tooSmall ? 400 : 502).json({
      error: tooSmall
        ? err.message
        : "We could not start this payment. Please try again.",
      code: tooSmall ? "AMOUNT_BELOW_MINIMUM" : "PROVIDER_ERROR",
    });
  }
}