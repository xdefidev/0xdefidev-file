import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import SeoHead from "../../components/Seo";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useCart } from "../../lib/cart";
import { getService } from "../../data/services";
import { getProduct } from "../../data/products";
import { formatUSD } from "../../lib/format";
import { siteConfig } from "../../site.config";

/**
 * Coin list is duplicated from lib/cryptapi.mjs on purpose: that module is
 * server-only (it reads env and does privileged calls), so the client gets
 * its own static list. Keep the tickers in sync.
 */
const COINS = [
  { ticker: "btc", symbol: "BTC", name: "Bitcoin", minimumUsd: 15 },
  { ticker: "eth", symbol: "ETH", name: "Ethereum", minimumUsd: 10 },
  { ticker: "ltc", symbol: "LTC", name: "Litecoin", minimumUsd: 2 },
  { ticker: "trc20/usdt", symbol: "USDT", name: "Tether (TRC-20)", minimumUsd: 10 },
  { ticker: "trc20/usdc", symbol: "USDC", name: "USD Coin (TRC-20)", minimumUsd: 10 },
  { ticker: "sol", symbol: "SOL", name: "Solana", minimumUsd: 2 },
  { ticker: "doge", symbol: "DOGE", name: "Dogecoin", minimumUsd: 2 },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function hydrate(line) {
  const entry = line.kind === "product" ? getProduct(line.slug) : getService(line.slug);
  if (!entry || entry.purchasable !== true || !(entry.price > 0)) return null;

  return {
    ...line,
    name: entry.name ?? line.slug,
    price: entry.price,
  };
}

export default function CheckoutPage() {
  const { items, clear, ready } = useCart();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [coin, setCoin] = useState("btc");
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const lines = useMemo(() => items.map(hydrate).filter(Boolean), [items]);
  const total = lines.reduce((sum, l) => sum + l.price, 0);
  const selected = COINS.find((c) => c.ticker === coin);
  const belowMinimum = selected ? total < selected.minimumUsd : false;
  const emailValid = EMAIL_RE.test(email.trim());

  const canSubmit = lines.length > 0 && emailValid && !belowMinimum && !submitting;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (!canSubmit) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout/create", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          coin,
          items: lines.map((l) => ({ slug: l.slug, kind: l.kind })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ?? "We could not start this payment. Try again.");
        setSubmitting(false);
        return;
      }

      clear();
      router.push(`/checkout/${data.orderId}`);
    } catch {
      setError("Network error. Please check your connection and try again.");
      setSubmitting(false);
    }
  };

  return (
    <>
      <SeoHead
        title={`Checkout | ${siteConfig.name}`}
        description="Complete your purchase with cryptocurrency."
        path="/checkout"
        locale="en"
        hreflang={["en"]}
        noindex
      />

      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Cart", href: "/cart" },
            { name: "Checkout" },
          ]}
        />

        <h1 className="text-headline font-bold text-ink">Checkout</h1>

        {!ready ? (
          <div className="mt-10 h-64 animate-pulse rounded-2xl bg-slate-100" />
        ) : lines.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-surface-border bg-surface-sunken px-6 py-16 text-center">
            <p className="text-lg font-semibold text-ink">Your cart is empty</p>
            <Link
              href="/services"
              className="mt-6 inline-block rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Browse services
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-6">
              <section className="rounded-2xl border border-surface-border bg-white p-6">
                <h2 className="text-lg font-semibold text-ink">Your details</h2>
                <p className="mt-1 text-sm text-ink-subtle">
                  We send the receipt and delivery link here. No account needed.
                </p>

                <label className="mt-5 block">
                  <span className="text-sm font-medium text-ink">Email address</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(true)}
                    autoComplete="email"
                    required
                    aria-invalid={touched && !emailValid}
                    aria-describedby={touched && !emailValid ? "email-error" : undefined}
                    placeholder="you@company.com"
                    className={[
                      "mt-2 w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-shadow duration-200 focus:ring-4",
                      touched && !emailValid
                        ? "border-danger-500 focus:border-danger-500 focus:ring-danger-100"
                        : "border-surface-border focus:border-brand-400 focus:ring-brand-100",
                    ].join(" ")}
                  />
                  {touched && !emailValid && (
                    <p id="email-error" className="mt-2 text-sm text-danger-600">
                      Enter a valid email address.
                    </p>
                  )}
                </label>
              </section>

              <section className="rounded-2xl border border-surface-border bg-white p-6">
                <h2 className="text-lg font-semibold text-ink">Payment method</h2>
                <p className="mt-1 text-sm text-ink-subtle">
                  You&apos;ll get a unique deposit address and QR code for the coin
                  you pick.
                </p>

                <div className="mt-5 grid gap-2.5 sm:grid-cols-2" role="radiogroup" aria-label="Payment coin">
                  {COINS.map((option) => {
                    const active = option.ticker === coin;
                    const tooSmall = total < option.minimumUsd;
                    return (
                      <label
                        key={option.ticker}
                        className={[
                          "flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all duration-200",
                          active
                            ? "border-brand-500 bg-brand-50 ring-1 ring-brand-500"
                            : "border-surface-border hover:border-brand-300",
                          tooSmall ? "opacity-50" : "",
                        ].join(" ")}
                      >
                        <input
                          type="radio"
                          name="coin"
                          value={option.ticker}
                          checked={active}
                          onChange={() => setCoin(option.ticker)}
                          className="sr-only"
                        />
                        <span
                          className={[
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                            active ? "border-brand-600 bg-brand-600" : "border-slate-300",
                          ].join(" ")}
                        >
                          {active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold text-ink">
                            {option.symbol}
                          </span>
                          <span className="block truncate text-xs text-ink-subtle">
                            {option.name}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>

                {belowMinimum && (
                  <p className="mt-4 rounded-lg bg-warning-50 px-4 py-3 text-sm text-warning-800">
                    {selected.symbol} has a network minimum of{" "}
                    {formatUSD(selected.minimumUsd)}. Your order is{" "}
                    {formatUSD(total)}. Pick a cheaper coin or add an item.
                  </p>
                )}
              </section>
            </div>

            <aside className="h-fit rounded-2xl border border-surface-border bg-white p-6 shadow-card lg:sticky lg:top-24">
              <h2 className="text-lg font-semibold text-ink">Order summary</h2>

              <ul className="mt-5 space-y-3 border-b border-surface-border pb-5">
                {lines.map((line) => (
                  <li key={`${line.kind}-${line.slug}`} className="flex justify-between gap-3 text-sm">
                    <span className="min-w-0 truncate text-ink">{line.name}</span>
                    <span className="shrink-0 font-medium text-ink">
                      {formatUSD(line.price)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-semibold text-ink">Total</span>
                <span className="text-2xl font-bold text-ink">{formatUSD(total)}</span>
              </div>

              {error && (
                <p
                  role="alert"
                  className="mt-4 rounded-lg bg-danger-50 px-4 py-3 text-sm text-danger-700"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className="mt-6 w-full rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {submitting ? "Creating payment…" : "Continue to payment"}
              </button>

              <p className="mt-3 text-center text-xs leading-relaxed text-ink-subtle">
                You&apos;ll confirm the exact amount on the next screen before paying.
              </p>
            </aside>
          </form>
        )}
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale ?? "en" } };
}