import Link from "next/link";
import ProductThumb from "../../components/ProductThumb";
import { useContact } from "../../components/Contact";
import AddToCart from "../../components/AddToCart";
import { FadeIn } from "../../components/motion";
import products, { getProduct } from "../../data/products";
import { formatUSD } from "../../lib/format";
import { siteConfig } from "../../site.config";
import SeoHead, { ogImageFor } from "../../components/Seo";

export async function getStaticPaths() {
  return {
    paths: products.map((p) => ({ params: { slug: p.slug }, locale: "en" })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getProduct(params.slug);
  if (!product) return { notFound: true };
  return { props: { product } };
}

export default function ProductPage({ product }) {
  const { open } = useContact();
  const productUrl = `${siteConfig.url}/products/${product.slug}`;
  const socialImage = product.ogImage
    ? `${siteConfig.url}${product.ogImage}`
    : ogImageFor({ title: product.name, subtitle: product.tagline, badge: "Source code product" });

  return (
    <>
      <SeoHead
        title={`${product.name} - Crypto Casino Source Code | ${siteConfig.name}`}
        description={product.tagline}
        path={`/products/${product.slug}`}
        image={socialImage}
        locale="en"
        hreflang={["en"]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.tagline,
            url: productUrl,
            image: product.ogImage
              ? `${siteConfig.url}${product.ogImage}`
              : undefined,
            brand: { "@type": "Brand", name: siteConfig.name },
            category: "Casino software",
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: productUrl,
              itemCondition: "https://schema.org/NewCondition",
              seller: { "@id": `${siteConfig.url}/#organization` },
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: product.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero banner */}
        <FadeIn className="mb-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-surface-border bg-black shadow-card sm:aspect-[2/1] lg:aspect-[21/9]">
            <ProductThumb
              src={product.image}
              alt={product.imageAlt ?? product.name}
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </FadeIn>

        {/* Hero */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-800">
                Source code
              </span>
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">
                Laravel + Node.js
              </span>
            </div>

            <h1 className="mt-5 text-display font-bold text-ink text-balance">
              {product.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-subtle text-pretty">
              {product.tagline}
            </p>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-ink">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-sm font-medium text-ink-subtle">Built with</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {product.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-surface-border bg-surface-sunken px-3 py-1.5 text-xs font-medium text-ink-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Purchase card */}
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-card lg:sticky lg:top-24">
              <p className="text-sm font-medium text-ink-subtle">One-time price</p>
              <p className="mt-1 text-4xl font-bold tracking-tight text-ink">
                {formatUSD(product.price)}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-subtle">
                {product.license}. {product.delivery}.
              </p>

              <div className="mt-6 space-y-2.5">
                <AddToCart
                  item={{ ...product, kind: "product" }}
                  label="Buy now with crypto"
                  className="w-full"
                />
                <button
                  type="button"
                  onClick={open}
                  className="w-full rounded-xl border border-surface-border px-5 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-brand-300 hover:text-brand-700"
                >
                  Ask a question first
                </button>
              </div>

              <ul className="mt-6 space-y-2.5 border-t border-surface-border pt-5 text-sm text-ink-subtle">
                <li className="flex items-center gap-2">
                  <Check />
                  BTC, ETH, LTC, SOL, USDT and more
                </li>
                <li className="flex items-center gap-2">
                  <Check />
                  Instant delivery after confirmation
                </li>
                <li className="flex items-center gap-2">
                  <Check />
                  No blockchain node to run
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Walkthrough video */}
        {product.heroVideoId && (
          <FadeIn delay={0.1} className="mt-16">
            <h2 className="text-headline font-bold text-ink">Walkthrough</h2>
            <p className="mt-2 text-ink-subtle">
              A full tour of the platform you receive, exactly as it runs.
            </p>
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-surface-border bg-surface-sunken shadow-card">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${product.heroVideoId}`}
                title={`${product.name} walkthrough`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </FadeIn>
        )}

        {/* Features */}
        <FadeIn delay={0.12} className="mt-16">
          <h2 className="text-headline font-bold text-ink">What&apos;s included</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {product.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-surface-border bg-white p-6 transition-all duration-300 ease-smooth hover:border-brand-200 hover:shadow-card"
              >
                <h3 className="font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* FAQ */}
        <FadeIn delay={0.14} className="mt-16">
          <h2 className="text-headline font-bold text-ink">Questions</h2>
          <div className="mt-8 divide-y divide-surface-border overflow-hidden rounded-2xl border border-surface-border bg-white">
            {product.faqs.map((faq) => (
              <details key={faq.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink marker:hidden">
                  {faq.q}
                  <svg className="h-4 w-4 shrink-0 text-ink-subtle transition-transform duration-300 group-open:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-subtle">{faq.a}</p>
              </details>
            ))}
          </div>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn delay={0.16} className="mt-16 rounded-2xl bg-brand-600 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to launch your own casino?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-50">
            Buy {product.name} for {formatUSD(product.price)} and get the full source
            code, or talk to us about white-labelling it under your own brand.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <AddToCart
              item={{ ...product, kind: "product" }}
              label="Buy now with crypto"
              className="bg-white text-brand-700 hover:bg-brand-50"
            />
            <button
              type="button"
              onClick={open}
              className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact sales
            </button>
          </div>
        </FadeIn>
      </div>
    </>
  );
}

function Check() {
  return (
    <svg className="h-4 w-4 shrink-0 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}