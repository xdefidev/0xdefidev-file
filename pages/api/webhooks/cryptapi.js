import {
  verifyWebhookSignature,
  parseWebhookPayload,
} from "../../../lib/cryptapi";
import {
  claimWebhook,
  updateOrderById,
  getAdmin,
  isSupabaseConfigured,
} from "../../../lib/supabase";

// The signature covers the exact bytes CryptAPI signed, so body parsing has
// to be disabled and the raw stream read by hand.
export const config = {
  api: { bodyParser: false },
};

/**
 * POST/GET /api/webhooks/cryptapi
 *
 * Three independent checks before any state changes:
 *   1. RSA-SHA256 signature over the raw body (x-ca-signature)
 *   2. nonce must match the value stored when the order was created
 *   3. uuid idempotency, since CryptAPI retries from 6 minutes onward
 *
 * Always answers "*ok*" on success so CryptAPI stops retrying.
 */

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > 1_000_000) {
        reject(new Error("Payload too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

async function notify(order, status) {
  const url = process.env.ORDER_NOTIFY_WEBHOOK_URL;
  if (!url) return;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        event: `order.${status}`,
        orderId: order.id,
        email: order.email,
        amountUsd: order.amount_usd,
        coin: order.coin,
        cryptoAmount: order.crypto_amount,
        txid: order.txid_in,
        items: order.items,
      }),
    });
  } catch (err) {
    // Notification failures must never block the order update.
    console.error("[webhook] notify failed", err.message);
  }
}

export default async function handler(req, res) {
  // Method check first so a misconfigured deploy still returns correct codes.
  if (req.method !== "POST" && req.method !== "GET") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).send("*error*");
  }

  if (!isSupabaseConfigured()) {
    return res.status(503).send("*error*");
  }

  let rawPayload;
  let parsedBody = {};

  if (req.method === "POST") {
    const buffer = await readRawBody(req).catch(() => null);
    if (!buffer) return res.status(400).send("*error*");

    rawPayload = { headers: req.headers, payload: buffer };

    const text = buffer.toString("utf8");
    try {
      parsedBody = JSON.parse(text);
    } catch {
      try {
        parsedBody = Object.fromEntries(new URLSearchParams(text));
      } catch {
        return res.status(400).send("*error*");
      }
    }
  } else if (req.method === "GET") {
    // Only used for local testing; production uses post=1&json=1.
    rawPayload = {
      headers: req.headers,
      payload: `${process.env.SITE_URL || "https://xdefidev.xyz"}${req.url}`,
    };
    parsedBody = req.query ?? {};
  }

  // 1. Signature.
  const verification = verifyWebhookSignature(rawPayload);
  if (!verification.valid) {
    console.warn("[webhook] rejected:", verification.reason);
    return res.status(401).send("*error*");
  }

  const payload = parseWebhookPayload({ query: req.query, body: parsedBody });

  // 2. We must be able to identify the order.
  if (!payload.orderId || !payload.nonce) {
    return res.status(400).send("*error*");
  }

  let existing = null;
  try {
    const { data, error } = await getAdmin()
      .from("orders")
      .select("*")
      .eq("id", payload.orderId)
      .maybeSingle();

    if (error) throw error;
    existing = data;
  } catch (err) {
    console.error("[webhook] order lookup failed", err);
    return res.status(500).send("*error*");
  }

  if (!existing) return res.status(404).send("*error*");

  // 3. Nonce must match what we stored at checkout time.
  if (existing.nonce !== payload.nonce) {
    console.warn("[webhook] nonce mismatch for", payload.orderId);
    return res.status(403).send("*error*");
  }

  // 4. Idempotency. A confirmed order stays confirmed even if a later
  //    webhook arrives for the same order with a different uuid.
  if (payload.uuid) {
    try {
      const claimed = await claimWebhook(payload.uuid);
      if (!claimed) {
        console.log("[webhook] duplicate uuid, ignoring");
        return res.status(200).send("*ok*");
      }
    } catch (err) {
      console.error("[webhook] idempotency check failed", err);
      return res.status(500).send("*error*");
    }
  }

  const nextStatus = payload.pending ? "pending" : "confirmed";

  // Never downgrade a confirmed order.
  if (existing.status === "confirmed" && nextStatus === "pending") {
    return res.status(200).send("*ok*");
  }

  try {
    const updated = await updateOrderById(payload.orderId, {
      status: nextStatus,
      confirmations: payload.confirmations,
      txid_in: payload.txidIn ?? existing.txid_in,
      crypto_amount: payload.valueCoin || existing.crypto_amount,
      updated_at: new Date().toISOString(),
    });

    await notify(updated, nextStatus);
  } catch (err) {
    console.error("[webhook] update failed", err);
    return res.status(500).send("*error*");
  }

  return res.status(200).send("*ok*");
}