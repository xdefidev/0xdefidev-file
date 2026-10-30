import Link from "next/link";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import SeoHead, { SITE_URL, ogImageFor } from "../../components/Seo";
import Breadcrumbs, { breadcrumbSchema } from "../../components/Breadcrumbs";
import AddToCart from "../../components/AddToCart";
import { FadeIn } from "../../components/motion";
import { useContact } from "../../components/Contact";
import services, { getService } from "../../data/services";
import { categories } from "../../data/categories";
import { resolveCopy } from "../../lib/service-copy";
import { formatUSD } from "../../lib/format";
import { siteConfig } from "../../site.config";

export async function getStaticPaths() {
  return {
    paths: services.map((service) => ({
      params: { service: service.slug },
      locale: "en",
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const currentLocale = locale ?? "en";
  const service = getService(params.service);

  if (!service) return { notFound: true };

  const copy = resolveCopy(currentLocale, service.slug);

  return {
    props: {
      service,
      copy,
      translated: copy.translated,
      category: categories.find((c) => c.serviceCategory === service.category) ?? null,
      ...(await serverSideTranslations(currentLocale, ["common"])),
    },
  };
}

export default function ServicePage({ service, copy, translated, category }) {
  const { open } = useContact();

  const name = service.name || copy.name || service.slug;
  const description = copy.usedFallback ? service.description : copy.description;
  const path = `/services/${service.slug}`;

  // Only index a locale that actually has copy. Otherwise Google lands on a
  // page whose <title> is the raw key `service.<slug>.name`.
  const noindex = !translated;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
    ...(service.price > 0 && {
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}${path}`,
        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
          .toISOString()
          .slice(0, 10),
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: service.price,
          priceCurrency: "USD",
          valueAddedTaxIncluded: false,
        },
      },
    }),
  };

  const faqSchema =
    copy.features.length > 0 && description
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: copy.features.slice(0, 5).map((feature) => ({
            "@type": "Question",
            name: feature,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Included as standard in our ${name} engagement.`,
            },
          })),
        }
      : null;

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    ...(category ? [{ name: category.label, href: `/categories/${category.slug}` }] : []),
    { name },
  ];

  return (
    <>
      <SeoHead
        title={`${name} | ${siteConfig.name}`}
        description={description?.slice(0, 300)}
        path={path}
        image={ogImageFor({ title: name, subtitle: description?.slice(0, 150), badge: category?.label })}
        locale="en"
        hreflang={["en"]}
        noindex={noindex}
        schema={[serviceSchema, breadcrumbSchema(breadcrumbs), faqSchema]}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs trail={breadcrumbs} />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
          <div>
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                {category?.label ?? "Service"}
              </p>
              <h1 className="mt-3 text-headline font-bold text-ink text-balance">{name}</h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-subtle text-pretty">
                {description}
              </p>
            </FadeIn>

            {service.youtube && (
              <FadeIn delay={0.05} className="mt-8">
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-surface-border bg-surface-sunken shadow-card">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${service.youtube}`}
                    title={`${name} walkthrough`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </FadeIn>
            )}

            {copy.longDescription && copy.longDescription !== description && (
              <FadeIn delay={0.08} className="mt-10">
                <h2 className="text-xl font-semibold text-ink">About this service</h2>
                <p className="mt-4 leading-relaxed text-ink-subtle">
                  {copy.longDescription}
                </p>
              </FadeIn>
            )}

            {copy.features.length > 0 && (
              <FadeIn delay={0.1} className="mt-10">
                <h2 className="text-xl font-semibold text-ink">What&apos;s included</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {copy.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-surface-border bg-white p-4"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100">
                        <svg
                          className="h-3 w-3 text-accent-700"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed text-ink">{feature}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}

            <FadeIn delay={0.12} className="mt-12 rounded-2xl bg-surface-sunken p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink">
                Need something different?
              </h2>
              <p className="mt-2 leading-relaxed text-ink-subtle">
                Every engagement starts with a scope conversation. Tell us what
                you&apos;re building and we&apos;ll come back with a fixed quote.
              </p>
              <button
                type="button"
                onClick={open}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Talk to us
              </button>
            </FadeIn>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-card">
              <p className="text-sm font-medium text-ink-subtle">Starting from</p>
              <p className="mt-1 text-4xl font-bold tracking-tight text-ink">
                {service.price > 0 ? formatUSD(service.price) : "Free"}
              </p>

              {service.price > 0 && (
                <p className="mt-3 text-sm leading-relaxed text-ink-subtle">
                  {service.externalUrl
                    ? "Starting pack price. Larger packs and custom sizes available."
                    : "Fixed starting price. Final quote after a short scope call."}
                </p>
              )}

              <div className="mt-6 space-y-2.5">
                {service.purchasable && service.price > 0 ? (
                  <>
                    <AddToCart
                      item={service}
                      label="Buy now with crypto"
                      className="w-full"
                    />
                    <button
                      type="button"
                      onClick={open}
                      className="w-full rounded-xl border border-surface-border px-5 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-brand-300 hover:text-brand-700"
                    >
                      Request a quote instead
                    </button>
                  </>
                ) : service.externalUrl ? (
                  <a
                    href={service.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-xl bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    Open {service.externalUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")} &rarr;
                  </a>
                ) : service.price === 0 ? (
                  <Link
                    href="/free-tools"
                    className="block w-full rounded-xl bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    Open this tool
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={open}
                    className="w-full rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    Get a quote
                  </button>
                )}
              </div>

              <ul className="mt-6 space-y-2.5 border-t border-surface-border pt-5 text-sm text-ink-subtle">
                {service.externalUrl ? (
                  <>
                    <li className="flex items-center gap-2">
                      <Check />
                      Self-serve via Telegram bot
                    </li>
                    <li className="flex items-center gap-2">
                      <Check />
                      Verified fomo holders, no double sends
                    </li>
                    <li className="flex items-center gap-2">
                      <Check />
                      Withdraw remaining balances anytime
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-2">
                      <Check />
                      Crypto checkout, no account needed
                    </li>
                    <li className="flex items-center gap-2">
                      <Check />
                      Source code and full ownership
                    </li>
                    <li className="flex items-center gap-2">
                      <Check />
                      Post-launch support included
                    </li>
                  </>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

function Check() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-accent-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}