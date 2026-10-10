import Link from "next/link";
import SeoHead from "../../components/Seo";
import ProductThumb from "../../components/ProductThumb";
import Breadcrumbs, { breadcrumbSchema } from "../../components/Breadcrumbs";
import { FadeIn, Stagger, StaggerItem } from "../../components/motion";
import { useContact } from "../../components/Contact";
import products from "../../data/products";
import { formatUSD } from "../../lib/format";
import { siteConfig } from "../../site.config";

export default function ProductsPage() {
  const { open } = useContact();

  return (
    <>
      <SeoHead
        title={`Source Code Products | ${siteConfig.name}`}
        description="Buy production-ready source code you can run yourself: crypto casino platforms, launchpads, bots and trading infrastructure with crypto checkout and instant delivery."
        path="/products"
        locale="en"
        hreflang={["en"]}
        schema={[
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Products" }]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Product",
                name: p.name,
                url: `${siteConfig.url}/products/${p.slug}`,
              },
            })),
          },
        ]}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Products" },
          ]}
        />

        <FadeIn className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Buy now
          </p>
          <h1 className="mt-3 text-display font-bold text-ink text-balance">
            Source code you can run today
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-subtle text-pretty">
            Complete platforms, delivered as source code with a commercial
            licence. Pay with crypto, get instant delivery, run it on your own
            infrastructure.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <StaggerItem key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <ProductThumb
                    src={product.image}
                    alt={product.imageAlt ?? product.name}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="transition-transform duration-500 ease-smooth group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-800">
                        Source code
                      </span>
                      <h2 className="mt-4 text-2xl font-bold text-ink group-hover:text-brand-700">
                        {product.name}
                      </h2>
                      <p className="mt-2 leading-relaxed text-ink-subtle">
                        {product.tagline}
                      </p>
                    </div>
                    <span className="shrink-0 text-2xl font-bold text-ink">
                      {formatUSD(product.price)}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {product.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-ink">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-surface-border pt-5">
                    {product.stack.map((tech) => (
                      <span key={tech} className="rounded-lg bg-surface-sunken px-2.5 py-1 text-xs font-medium text-ink-subtle">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.1} className="mt-12 rounded-2xl bg-surface-sunken p-8 text-center">
          <h2 className="text-xl font-bold text-ink">
            Looking for something specific?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-ink-subtle">
            We also build custom platforms from scratch. Tell us what you have in
            mind and we&apos;ll scope it.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Browse services
            </Link>
            <button
              type="button"
              onClick={open}
              className="rounded-xl border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand-300"
            >
              Talk to us
            </button>
          </div>
        </FadeIn>
      </div>
    </>
  );
}