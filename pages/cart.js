import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import SeoHead from "../components/Seo";
import Breadcrumbs, { breadcrumbSchema } from "../components/Breadcrumbs";
import { FadeIn } from "../components/motion";
import { useCart } from "../lib/cart";
import { useContact } from "../components/Contact";
import services, { getService } from "../data/services";
import { getProduct } from "../data/products";
import { formatUSD } from "../lib/format";
import { siteConfig } from "../site.config";

const FALLBACK_IMAGE = "/background-illustration.png";

/**
 * Resolve a cart line to its catalogue entry and current price.
 *
 * Deliberately uses only data/*.js and never lib/service-copy.js: that
 * module reads the locale JSON with `fs`, so it cannot be bundled for the
 * browser. Cart lines show name, price and image, which the catalogue
 * provides directly.
 */
function hydrate(line) {
  const entry = line.kind === "product" ? getProduct(line.slug) : getService(line.slug);

  if (!entry || entry.purchasable !== true || !(entry.price > 0)) return null;

  return {
    ...line,
    name: entry.name ?? line.slug,
    description: entry.tagline ?? entry.description ?? "",
    price: entry.price,
    // Products without artwork fall back to a brand plate rather than a
    // stock illustration, so the line never implies a screenshot the buyer
    // is not getting.
    image: entry.image || (line.kind === "product" ? null : FALLBACK_IMAGE),
    href: line.kind === "product" ? `/products/${line.slug}` : `/services/${line.slug}`,
  };
}

export default function CartPage() {
  const { items, remove, count, ready } = useCart();
  const { open } = useContact();
  const router = useRouter();

  const lines = useMemo(
    () => items.map(hydrate).filter(Boolean),
    [items],
  );

  const total = lines.reduce((sum, l) => sum + l.price, 0);

  if (!ready) {
    return (
      <div className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6">
        <div className="h-8 w-40 animate-pulse rounded-lg bg-slate-200" />
      </div>
    );
  }

  return (
    <>
      <SeoHead
        title={`Your Cart | ${siteConfig.name}`}
        description="Review the items in your cart before paying with cryptocurrency."
        path="/cart"
        locale="en"
        hreflang={["en"]}
        noindex
        schema={[breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Cart" }])]}
      />

      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Cart" },
          ]}
        />

        <FadeIn>
          <h1 className="text-headline font-bold text-ink">Your cart</h1>
          <p className="mt-2 text-ink-subtle">
            {count === 0
              ? "Nothing here yet."
              : `${count} item${count === 1 ? "" : "s"} ready for checkout.`}
          </p>
        </FadeIn>

        {lines.length === 0 ? (
          <FadeIn delay={0.06} className="mt-10 rounded-2xl border border-dashed border-surface-border bg-surface-sunken px-6 py-16 text-center">
            <p className="text-lg font-semibold text-ink">Your cart is empty</p>
            <p className="mt-2 text-sm text-ink-subtle">
              Browse services and source-code products to get started.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/services"
                className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
              >
                Browse services
              </Link>
              <Link
                href="/products"
                className="rounded-xl border border-surface-border px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand-300"
              >
                View products
              </Link>
            </div>
          </FadeIn>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <ul className="space-y-4">
              {lines.map((line) => (
                <li
                  key={`${line.kind}-${line.slug}`}
                  className="flex gap-4 rounded-2xl border border-surface-border bg-white p-4"
                >
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-black">
                    {line.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={line.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span
                        role="img"
                        aria-label={`${siteConfig.name} product preview`}
                        className="absolute inset-0 flex items-center justify-center text-[9px] font-bold uppercase tracking-[0.15em] text-white"
                      >
                        {siteConfig.name}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <Link
                      href={line.href}
                      className="font-semibold text-ink hover:text-brand-700"
                    >
                      {line.name}
                    </Link>
                    {line.description && (
                      <p className="mt-1 line-clamp-2 text-sm text-ink-subtle">
                        {line.description}
                      </p>
                    )}
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-brand-700">
                        {formatUSD(line.price)}
                      </span>
                      <button
                        type="button"
                        onClick={() => remove(line.slug)}
                        className="text-sm font-medium text-ink-subtle underline-offset-2 hover:text-danger-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="h-fit rounded-2xl border border-surface-border bg-white p-6 shadow-card lg:sticky lg:top-24">
              <h2 className="text-lg font-semibold text-ink">Order summary</h2>

              <dl className="mt-5 space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-ink-subtle">Subtotal</dt>
                  <dd className="font-medium text-ink">{formatUSD(total)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink-subtle">Processing</dt>
                  <dd className="font-medium text-accent-700">Free</dd>
                </div>
              </dl>

              <div className="mt-4 flex justify-between border-t border-surface-border pt-4">
                <span className="font-semibold text-ink">Total</span>
                <span className="text-xl font-bold text-ink">{formatUSD(total)}</span>
              </div>

              <button
                type="button"
                onClick={() => router.push("/checkout")}
                className="mt-6 w-full rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Checkout with crypto
              </button>

              <p className="mt-3 text-center text-xs leading-relaxed text-ink-subtle">
                Pay in BTC, ETH, LTC, SOL, USDT or more. No account required.
              </p>

              <button
                type="button"
                onClick={open}
                className="mt-4 w-full rounded-xl border border-surface-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                Questions? Talk to us
              </button>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { locale: locale ?? "en" } };
}