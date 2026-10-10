import Link from "next/link";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import SeoHead, { ogImageFor } from "../../components/Seo";
import Breadcrumbs, { breadcrumbSchema } from "../../components/Breadcrumbs";
import ServiceCard from "../../components/ServiceCard";
import { FadeIn, Stagger, StaggerItem } from "../../components/motion";
import { useContact } from "../../components/Contact";
import services from "../../data/services";
import { categories } from "../../data/categories";
import { resolveCopy } from "../../lib/service-copy";
import { siteConfig } from "../../site.config";

export async function getStaticPaths() {
  return {
    paths: categories.map((category) => ({
      params: { slug: category.slug },
      locale: "en",
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return { notFound: true };

  const currentLocale = locale ?? "en";

  const categoryServices = services
    .filter((item) => item.category === category.serviceCategory)
    .map((service) => {
      const copy = resolveCopy(currentLocale, service.slug);
      return {
        ...service,
        name: service.name || copy.name || service.slug,
        description: copy.usedFallback
          ? service.description || copy.description
          : copy.description || service.description,
        translated: copy.translated,
      };
    });

  return {
    props: {
      category,
      categoryServices,
      ...(await serverSideTranslations(currentLocale, ["common"])),
    },
  };
}

export default function CategoryPage({ category, categoryServices }) {
  const { open } = useContact();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: category.label },
  ];

  return (
    <>
      <SeoHead
        title={category.metaTitle}
        description={category.metaDescription}
        path={`/categories/${category.slug}`}
        locale="en"
        hreflang={["en"]}
        image={ogImageFor({
          title: category.label,
          subtitle: category.metaDescription?.slice(0, 150),
          badge: "Practice area",
        })}
        schema={[faqSchema, breadcrumbSchema(breadcrumbs)]}
      />

      {/* Hero */}
      <section className="border-b border-surface-border bg-surface-sunken">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Breadcrumbs trail={breadcrumbs} />

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <span className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                {category.label}
              </span>
              <h1 className="mt-6 text-display font-bold text-ink text-balance">
                {category.h1}
              </h1>

              <div className="mt-6 space-y-4">
                {category.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-lg leading-relaxed text-ink-subtle text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#services"
                  className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  Explore services
                </a>
                <a
                  href="#faq"
                  className="rounded-xl border border-surface-border bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  FAQ
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="flex justify-center">
              <Image
                src={category.heroImage1}
                width={560}
                height={560}
                priority
                quality={85}
                alt={`${category.label} services overview`}
                className="w-full max-w-md rounded-2xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 border-b border-surface-border bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeIn className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-headline font-bold text-ink">
                Services in this area
              </h2>
              <p className="mt-2 text-ink-subtle">
                Fixed starting prices. Pay with crypto or request a quote.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-700 hover:underline"
            >
              View all services →
            </Link>
          </FadeIn>

          {categoryServices.length > 0 ? (
            <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryServices.map((service) => (
                <StaggerItem key={service.slug}>
                  <ServiceCard
                    service={service}
                    name={service.name}
                    description={service.description}
                  />
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <FadeIn className="mt-10 rounded-2xl border border-dashed border-surface-border bg-surface-sunken px-6 py-16 text-center">
              <p className="text-lg font-semibold text-ink">
                We take custom projects in this area
              </p>
              <p className="mt-2 text-sm text-ink-subtle">
                Tell us what you&apos;re building and we&apos;ll scope it.
              </p>
              <button
                type="button"
                onClick={open}
                className="mt-6 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
              >
                Contact us
              </button>
            </FadeIn>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 border-b border-surface-border bg-surface-sunken">
        <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeIn>
            <h2 className="text-headline font-bold text-ink">
              Frequently asked questions
            </h2>
          </FadeIn>

          <FadeIn delay={0.06} className="mt-8 divide-y divide-surface-border overflow-hidden rounded-2xl border border-surface-border bg-white">
            {category.faqs.map((faq) => (
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
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600">
        <div className="mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white text-balance sm:text-4xl">
              Ready to build?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-50 text-pretty">
              Send us the brief and we&apos;ll come back with scope and a fixed
              quote within 24 hours.
            </p>
            <button
              type="button"
              onClick={open}
              className="mt-8 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              Get your custom quote
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Other categories */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center text-xl font-bold text-ink">
              Explore other practice areas
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {categories
                .filter((c) => c.slug !== category.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/categories/${c.slug}`}
                    className="rounded-lg border border-surface-border bg-surface-sunken px-4 py-2 text-sm font-medium text-ink-subtle transition-colors duration-200 hover:border-brand-300 hover:text-brand-700"
                  >
                    {c.label}
                  </Link>
                ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}