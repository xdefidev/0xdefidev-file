import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import SeoHead from "../../components/Seo";
import { FadeIn } from "../../components/motion";
import { useContact } from "../../components/Contact";
import { formatUSD, truncateCrypto, formatCoinLabel } from "../../lib/format";
import { siteConfig } from "../../site.config";

const POLL_INTERVAL = 12000;

/**
 * Live payment status page.
 *
 * Order state is written by the CryptAPI webhook; this page only reads it.
 * Polling pauses when the tab is hidden and stops once confirmed.
 */
export default function OrderPage() {
  const router = useRouter();
  const { open } = useContact();

  const orderId = typeof router.query.orderId === "string" ? router.query.orderId : null;

  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(null);
  const [now, setNow] = useState(() => Date.now());

  const timer = useRef(null);

  const fetchOrder = useCallback(async () => {
    if (!orderId) return;
    try {
      const res = await fetch(`/api/orders/${orderId}`, { cache: "no-store" });
      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ?? "We could not find that order.");
        return;
      }
      setOrder(data);
      setError(null);
    } catch {
      setError("Network error. Retrying…");
    }
  }, [orderId]);

  useEffect(() => {
    if (!orderId) return;
    fetchOrder();

    timer.current = setInterval(() => {
      if (document.visibilityState === "visible") fetchOrder();
    }, POLL_INTERVAL);

    return () => clearInterval(timer.current);
  }, [orderId, fetchOrder]);

  // Countdown resets if the order's updated_at changes.
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (order?.status === "confirmed" && timer.current) {
      clearInterval(timer.current);
    }
  }, [order?.status]);

  const copy = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      /* clipboard blocked */
    }
  };

  const elapsed = order?.createdAt ? now - new Date(order.createdAt).getTime() : 0;
  const EXPIRY_MS = 60 * 60 * 1000;
  const remainingMs = Math.max(0, EXPIRY_MS - elapsed);
  const remaining = `${String(Math.floor(remainingMs / 60000)).padStart(2, "0")}:${String(
    Math.floor((remainingMs % 60000) / 1000),
  ).padStart(2, "0")}`;

  const status = order?.status ?? "loading";
  const confirmed = status === "confirmed";

  return (
    <>
      <SeoHead
        title={`Order ${orderId ?? ""} | ${siteConfig.name}`}
        description="Payment status for your order."
        path={`/checkout/${orderId ?? ""}`}
        locale="en"
        hreflang={["en"]}
        noindex
      />

      <div className="mx-auto w-full max-w-2xl px-4 py-12 sm:px-6 lg:py-16">
        <FadeIn>
          {confirmed ? (
            <div className="rounded-2xl border border-accent-200 bg-accent-50 p-6 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-600">
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <h1 className="mt-5 text-2xl font-bold text-ink">Payment received</h1>
              <p className="mt-2 leading-relaxed text-ink-subtle">
                Thank you. We&apos;ve sent your receipt and delivery details by
                email. If anything looks wrong, reply to that email and we&apos;ll
                sort it out.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-surface-border bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-warning-500" />
                <h1 className="text-xl font-bold text-ink">
                  {status === "pending"
                    ? "Payment detected, confirming…"
                    : status === "loading"
                      ? "Loading order…"
                      : "Waiting for payment"}
                </h1>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
                Send exactly the amount below. The page updates automatically once
                the network confirms it.
              </p>
            </div>
          )}
        </FadeIn>

        {error && !order && (
          <div className="mt-6 rounded-2xl border border-danger-200 bg-danger-50 p-6 text-center">
            <p className="text-danger-700">{error}</p>
            <Link
              href="/services"
              className="mt-4 inline-block text-sm font-semibold text-brand-700 underline"
            >
              Back to services
            </Link>
          </div>
        )}

        {order && !confirmed && (
          <FadeIn delay={0.06} className="mt-6 space-y-5">
            <div className="rounded-2xl border border-surface-border bg-white p-6">
              <div className="flex items-center justify-between border-b border-surface-border pb-4">
                <div>
                  <p className="text-sm text-ink-subtle">Order total</p>
                  <p className="text-2xl font-bold text-ink">
                    {formatUSD(order.amountUsd, { decimals: 2 })}
                  </p>
                </div>
                <div className="text-end">
                  <p className="text-sm text-ink-subtle">Expires in</p>
                  <p className="font-mono text-lg font-semibold text-ink">{remaining}</p>
                </div>
              </div>

              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="font-medium text-ink">
                    Send exactly {truncateCrypto(order.cryptoAmount)}{" "}
                    <span className="font-normal text-ink-subtle">
                      {formatCoinLabel(order.coin)}
                    </span>
                  </dt>
                  <dd className="mt-1.5 flex items-center gap-2">
                    <code className="flex-1 overflow-x-auto rounded-lg bg-surface-sunken px-3 py-2 font-mono text-xs text-ink">
                      {truncateCrypto(order.cryptoAmount)}
                    </code>
                    <CopyButton
                      onClick={() => copy(String(order.cryptoAmount), "amount")}
                      copied={copied === "amount"}
                      label="Copy amount"
                    />
                  </dd>
                </div>

                <div>
                  <dt className="font-medium text-ink">Deposit address</dt>
                  <dd className="mt-1.5 flex items-center gap-2">
                    <code className="flex-1 overflow-x-auto rounded-lg bg-surface-sunken px-3 py-2 font-mono text-xs break-all text-ink">
                      {order.address}
                    </code>
                    <CopyButton
                      onClick={() => copy(order.address, "address")}
                      copied={copied === "address"}
                      label="Copy address"
                    />
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex items-start gap-3 rounded-xl bg-warning-50 p-4">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-warning-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
                </svg>
                <p className="text-xs leading-relaxed text-warning-900">
                  Send only {formatCoinLabel(order.coin)} on the correct network to
                  this exact address. Payments below the network minimum, or on the
                  wrong network, cannot be recovered.
                </p>
              </div>
            </div>

            <p className="text-center text-xs text-ink-subtle">
              Order reference{" "}
              <code className="font-mono">{order.id}</code>
            </p>
          </FadeIn>
        )}

        <FadeIn delay={0.1} className="mt-8 text-center">
          <button
            type="button"
            onClick={open}
            className="rounded-xl border border-surface-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            Need help? Contact support
          </button>
        </FadeIn>
      </div>
    </>
  );
}

function CopyButton({ onClick, copied, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="shrink-0 rounded-lg border border-surface-border bg-white p-2.5 text-ink-subtle transition-colors hover:border-brand-300 hover:text-brand-600"
    >
      {copied ? (
        <svg className="h-4 w-4 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
      )}
    </button>
  );
}