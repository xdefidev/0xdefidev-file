export function formatUSD(amount, { decimals = 0 } = {}) {
  const value = Number(amount);
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatCrypto(value, maxDecimals = 8) {
  const num = Number(value);
  if (!Number.isFinite(num)) return "—";
  // Trim trailing zeros but keep enough precision for small coins.
  return num
    .toFixed(maxDecimals)
    .replace(/\.?0+$/, "")
    .replace(/^0\./, "0.");
}

/** Truncate a crypto amount for display without losing meaningful precision. */
export function truncateCrypto(value, significant = 6) {
  const num = Number(value);
  if (!Number.isFinite(num)) return "—";
  if (num === 0) return "0";
  const magnitude = Math.floor(Math.log10(Math.abs(num)));
  const decimals = Math.max(0, significant - 1 - magnitude);
  return num.toFixed(Math.min(decimals, 12)).replace(/\.?0+$/, "");
}

export function formatCoinLabel(ticker) {
  const map = {
    btc: "Bitcoin",
    eth: "Ethereum",
    ltc: "Litecoin",
    sol: "Solana",
    "trc20/usdt": "Tether (TRC-20)",
    "trc20/usdc": "USD Coin (TRC-20)",
    "erc20/usdt": "Tether (ERC-20)",
    "erc20/usdc": "USD Coin (ERC-20)",
    "solana/usdt": "Tether (Solana)",
    "solana/usdc": "USD Coin (Solana)",
    doge: "Dogecoin",
    bnb: "BNB",
    "bep20/usdt": "Tether (BEP-20)",
  };
  return map[ticker?.toLowerCase()] ?? (ticker || "").toUpperCase();
}