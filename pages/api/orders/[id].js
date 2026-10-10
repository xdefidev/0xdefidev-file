import { getOrderById, isSupabaseConfigured } from "../../../lib/supabase";

/**
 * GET /api/orders/[id]
 *
 * Status polling for the payment page. CryptAPI's webhook updates the row;
 * this endpoint only reads it so the browser never needs write access.
 */
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;

  // Guard against arbitrary ids reaching the database.
  if (!id || typeof id !== "string" || !/^ord_[a-z0-9]+_[a-f0-9]{10}$/i.test(id)) {
    return res.status(400).json({ error: "Invalid order reference." });
  }

  if (!isSupabaseConfigured()) {
    return res.status(503).json({ error: "Order storage is not configured yet." });
  }

  try {
    const order = await getOrderById(id);

    if (!order) {
      return res.status(404).json({ error: "Order not found." });
    }

    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({
      id: order.id,
      status: order.status,
      amountUsd: Number(order.amount_usd),
      coin: order.coin,
      cryptoAmount: Number(order.crypto_amount),
      address: order.address_in,
      confirmations: order.confirmations,
      txid: order.txid_in,
      createdAt: order.created_at,
      updatedAt: order.updated_at,
    });
  } catch (err) {
    console.error("[orders/get]", err);
    return res.status(500).json({ error: "Could not load this order." });
  }
}