import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import SeoHead, { SITE_URL } from "../../components/Seo";
import ServiceCard from "../../components/ServiceCard";
import Breadcrumbs, { breadcrumbSchema } from "../../components/Breadcrumbs";
import { FadeIn } from "../../components/motion";
import { categories } from "../../data/categories";
import servicesData from "../../data/services";
import { resolveCopy, getCommon } from "../../lib/service-copy";

const PER_PAGE = 9;

export default function ServicesPage({ services, locale, categoryMap }) {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  // Pagination lives in the URL so a page of results is shareable and
  // survives a refresh. Previously it was client state only.
  const page = Math.max(1, Number(router.query.page) || 1);

  const copy = services.map((service) => ({
    service,
    name: service.name || service.slug,
    description: service.description,
  }));

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return copy.filter(({ service, name, description }) => {
      const matchesCategory = category === "all" || service.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        name.toLowerCase().includes(q) ||
        (description || "").toLowerCase().includes(q) ||
        service.slug.includes(q)
      );
    });
  }, [copy, query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);

  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  // A search resets paging, otherwise you land on an empty page 4.
  useEffect(() => {
    if (page > totalPages && page !== 1) {
      router.replace({ pathname: "/services" }, undefined, { shallow: true });
    }
  }, [page, totalPages, router]);

  const goToPage = (next) => {
    router.push(
      { pathname: "/services", query: next > 1 ? { page: String(next) } : {} },
      undefined,
      { shallow: true },
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const usedCategories = useMemo(
    () =>
      categories
        .filter((c) => copy.some(({ service }) => service.category === c.serviceCategory))
        .map((c) => ({ value: c.serviceCategory, label: c.label })),
    [copy],
  );

  return (
    <>
      <SeoHead
        title="Software, AI & Blockchain Development Services | XDefiDev"
        description="Explore XDefiDev's development services: custom software, AI and LLM applications, n8n automation, cloud and DevOps, APIs, web and mobile apps, plus smart contracts, DeFi protocols, dApps, and crypto exchanges. Fixed pricing for startups and enterprises."
        path="/services"
        locale={locale}
        hreflang={["en"]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: copy.map(({ service, name }, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name,
                url: `${SITE_URL}/services/${service.slug}`,
              },
            })),
          },
        ]}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
          ]}
        />

        <FadeIn className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            What we build
          </p>
          <h1 className="mt-3 text-display font-bold text-ink text-balance">
            Software, AI &amp; blockchain development services
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-subtle text-pretty">
            From custom software and AI applications to workflow automation,
            smart contracts, dApps and crypto exchanges. Fixed starting prices,
            production-ready delivery.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services"
              aria-label="Search services"
              className="w-full rounded-xl border border-surface-border bg-white py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition-shadow duration-200 placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
            />
          </div>

          <div className="relative sm:w-64">
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                goToPage(1);
              }}
              aria-label="Filter by category"
              className="w-full appearance-none rounded-xl border border-surface-border bg-white py-2.5 pe-10 ps-4 text-sm font-medium text-ink outline-none transition-shadow duration-200 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
            >
              <option value="all">All categories</option>
              {usedCategories.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </FadeIn>

        <p className="mt-5 text-sm text-ink-subtle" role="status" aria-live="polite">
          Showing {visible.length} of {filtered.length} services
          {query && ` matching "${query}"`}
        </p>

        {visible.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-surface-border bg-surface-sunken px-6 py-16 text-center">
            <p className="text-lg font-semibold text-ink">No services match that search</p>
            <p className="mt-2 text-sm text-ink-subtle">
              Try a different term, or tell us what you need.
            </p>
            <Link
              href="/contact-us"
              className="mt-6 inline-block rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Request a custom project
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map(({ service, name, description }) => (
              <ServiceCard
                key={service.slug}
                service={service}
                name={name}
                description={description}
              />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav
            className="mt-12 flex items-center justify-center gap-1.5"
            aria-label="Services pagination"
          >
            <PageButton
              onClick={() => goToPage(current - 1)}
              disabled={current === 1}
              label="Previous"
            />

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goToPage(n)}
                aria-current={n === current ? "page" : undefined}
                className={[
                  "h-9 min-w-9 rounded-lg px-3 text-sm font-medium transition-colors duration-200",
                  n === current
                    ? "bg-brand-600 text-white"
                    : "border border-surface-border bg-white text-ink-subtle hover:border-brand-300 hover:text-brand-700",
                ].join(" ")}
              >
                {n}
              </button>
            ))}

            <PageButton
              onClick={() => goToPage(current + 1)}
              disabled={current === totalPages}
              label="Next"
            />
          </nav>
        )}
      </div>
    </>
  );
}

function PageButton({ onClick, disabled, label }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-lg border border-surface-border bg-white px-3.5 py-2 text-sm font-medium text-ink-subtle transition-colors duration-200 hover:border-brand-300 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-surface-border disabled:hover:text-ink-subtle"
    >
      {label}
    </button>
  );
}

export async function getStaticProps({ locale }) {
  const currentLocale = locale ?? "en";
  const en = getCommon("en");

  const services = servicesData.map((service) => {
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

  const categoryMap = Object.fromEntries(categories.map((c) => [c.serviceCategory, c.label]));

  return {
    props: {
      services,
      locale: currentLocale,
      categoryMap,
      ...(await serverSideTranslations(currentLocale, ["common"])),
    },
  };
}