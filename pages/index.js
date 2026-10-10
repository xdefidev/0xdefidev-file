import Script from "next/script";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import SeoHead from "../components/Seo";
import CarouselFn from "../components/Carousel";
import AddToCart from "../components/AddToCart";
import { FadeIn, Stagger, StaggerItem } from "../components/motion";
import { useContact } from "../components/Contact";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { purchasableServices } from "../data/services";
import { resolveCopy } from "../lib/service-copy";
import { formatUSD } from "../lib/format";
import { siteConfig } from "../site.config";

const PROCESS = [
  {
    title: "Discovery & strategy",
    body: "We map your goals, users and technical constraints into a clear scope, architecture and delivery plan before any code is written.",
  },
  {
    title: "Architecture & prototype",
    body: "Our engineers design the system, pick the right chain and tooling, and get a working prototype in front of you early so risks surface cheaply.",
  },
  {
    title: "Build",
    body: "Contracts, backend and frontend are built in parallel with tests and reviews as integral parts of the work, not an afterthought.",
  },
  {
    title: "Audit & launch",
    body: "Security review, third-party audit, deployment and monitoring. We hand over documentation your own team can operate from.",
  },
];

const STATS = [
  { value: 200, suffix: "+", label: "Projects delivered" },
  { value: 8, suffix: "", label: "Years building" },
  { value: 16, suffix: "+", label: "Games shipped" },
  { value: 10, suffix: "", label: "Languages served" },
];

const CHAINS = [
  { name: "Ethereum", file: "/eth.svg" },
  { name: "Solana", file: "/solana.svg" },
  { name: "BNB Chain", file: "/bnb.svg" },
  { name: "Polygon", file: "/polygon.svg" },
  { name: "Avalanche", file: "/avax.svg" },
  { name: "Base", file: "/base.svg" },
  { name: "Fantom", file: "/fantom.svg" },
];

const FAQS = [
  {
    q: "What does XDefiDev do?",
    a: "XDefiDev is a full-stack software engineering studio. We build custom software, AI and LLM applications, n8n workflow automation, cloud and DevOps infrastructure, APIs, and web and mobile apps — plus smart contracts, DeFi protocols, dApps, and blockchain platforms for founders, startups, DAOs and enterprises.",
  },
  {
    q: "Can I buy source code directly?",
    a: "Yes. Our products section holds complete platforms delivered as source code with a commercial licence, priced at a fixed figure and payable with cryptocurrency. You get the code and run it on your own infrastructure.",
  },
  {
    q: "Which blockchain networks do you work on?",
    a: "We build on Ethereum, BNB Smart Chain, Avalanche, Polygon, Fantom, Base and Solana, as well as custom EVM-compatible networks. That includes Layer 2 solutions and bespoke Layer 1 chains with Proof-of-Stake, Proof-of-Authority or Delegated Proof-of-Stake consensus.",
  },
  {
    q: "How are smart contracts secured?",
    a: "Every contract follows a security-first process: threat modelling, code review, unit and integration tests, gas optimisation, and a third-party audit from firms such as CertiK or Hacken. We also apply reentrancy guards, access control and upgradeability patterns to reduce exploit risk.",
  },
  {
    q: "How long does a project take?",
    a: "A simple token or contract can ship in under a week. A full dApp with wallet integration typically takes three to eight weeks, while a custom network or institutional exchange runs for several months. We work in weekly deliverables so you always know where things stand.",
  },
  {
    q: "How do payments work?",
    a: "You can pay in BTC, ETH, LTC, SOL, USDT, USDC and other major coins through a hosted checkout. We generate a unique deposit address and QR code per order and confirm automatically once the network settles. No account required.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#service`,
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/logo.png`,
  logo: `${siteConfig.url}/logo.png`,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  priceRange: `${siteConfig.pricing.min} - ${siteConfig.pricing.max}`,
  description:
    "Full-stack software engineering studio offering custom software development, AI and LLM applications, workflow automation, cloud and DevOps engineering, API integrations, web and mobile applications, plus blockchain and Web3 development.",
  areaServed: "Worldwide",
  foundingDate: String(siteConfig.founded),
  sameAs: [siteConfig.contact.telegram, siteConfig.contact.discord],
  makesOffer: [
    "Custom Software Development",
    "AI & LLM Application Development",
    "Workflow Automation",
    "Cloud & DevOps Engineering",
    "API Development & Integration",
    "Web & Mobile Application Development",
    "Smart Contract Development",
    "DeFi Protocol Development",
    "Crypto Exchange Development",
    "Source Code Products",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function Home({ featured }) {
  const { t } = useTranslation("common");
  const { open } = useContact();

  const product = products[0];

  return (
    <>
      <SeoHead
        title={`${siteConfig.name} | AI, Software, Automation & Blockchain Development`}
        description="Custom software, AI applications, workflow automation, cloud infrastructure, APIs, mobile apps, and blockchain solutions for startups and enterprises. Buy source code or hire our engineers."
        path="/"
        schema={[serviceSchema, faqSchema]}
      />

      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="ga-init"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{page_path:window.location.pathname});`,
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-surface-border bg-surface-sunken">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(37,99,235,0.10),transparent_70%)]"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-3.5 py-1.5 text-xs font-medium text-ink-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              {siteConfig.founded}&nbsp;&nbsp;&middot;&nbsp;&nbsp;200+ projects delivered
            </span>

            <h1 className="mt-7 text-display-lg font-bold text-ink text-balance">
              Engineering for the next decade of the internet
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-subtle text-pretty">
              Smart contracts, AI applications, workflow automation and cloud
              infrastructure &mdash; built by engineers who have shipped in
              production since {siteConfig.founded}.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/services"
                className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-700 hover:shadow-card-hover"
              >
                Explore services
              </Link>
              <button
                type="button"
                onClick={open}
                className="rounded-xl border border-surface-border bg-white px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-brand-300 hover:text-brand-700"
              >
                {t("getInTouch")}
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs text-ink-subtle">
              <span className="font-medium">Built on</span>
              {CHAINS.map((chain) => (
                <span
                  key={chain.name}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5"
                  title={chain.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={chain.file} alt={chain.name} className="h-4 w-4" />
                  <span className="hidden sm:inline">{chain.name}</span>
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-surface-border bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="text-3xl font-bold tracking-tight text-ink lg:text-4xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-1.5 text-sm text-ink-subtle">{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured product */}
      {product && (
        <section className="border-b border-surface-border bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <FadeIn className="overflow-hidden rounded-3xl border border-surface-border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              <div className="grid gap-8 p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
                <div>
                  <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                    Source code product
                  </span>
                  <h2 className="mt-5 text-3xl font-bold text-white text-balance lg:text-4xl">
                    {product.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-300 text-pretty">
                    {product.tagline}
                  </p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {product.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-slate-200">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:bg-slate-100"
                    >
                      Watch the walkthrough
                    </Link>
                    <AddToCart
                      item={{ ...product, kind: "product" }}
                      label={`Buy for ${formatUSD(product.price)}`}
                      className="border border-white/20 text-white hover:bg-white/10"
                    />
                  </div>
                </div>

                <div className="aspect-video overflow-hidden rounded-2xl bg-slate-950/50">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${product.heroVideoId}`}
                    title={`${product.name} walkthrough`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="border-b border-surface-border bg-surface-sunken">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeIn className="max-w-2xl">
            <h2 className="text-headline font-bold text-ink text-balance">
              What we build
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-subtle">
              Ten practice areas, each with the depth to take a project from
              idea to production.
            </p>
          </FadeIn>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <StaggerItem key={category.slug}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-surface-border bg-white p-6 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
                >
                  <h3 className="font-semibold text-ink group-hover:text-brand-700">
                    {category.label}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-subtle">
                    {category.navDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
                    Learn more
                    <svg className="rtl-flip h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured services */}
      <section className="border-b border-surface-border bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeIn className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-headline font-bold text-ink text-balance">
                Popular services
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-subtle">
                Fixed starting prices. Pay with crypto or talk to us about scope.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-700 hover:underline"
            >
              View all services →
            </Link>
          </FadeIn>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-surface-border bg-white p-6 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-ink text-balance group-hover:text-brand-700">
                      {service.displayName}
                    </h3>
                    <span className="shrink-0 text-sm font-bold text-brand-700">
                      {formatUSD(service.price)}
                    </span>
                  </div>
                  <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-subtle">
                    {service.displayDescription}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-surface-border bg-surface-sunken">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeIn className="max-w-2xl">
            <h2 className="text-headline font-bold text-ink text-balance">
              How we work
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-subtle">
              A predictable path from first conversation to production.
            </p>
          </FadeIn>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="h-full rounded-2xl border border-surface-border bg-white p-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-subtle">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Showcase */}
      <section className="border-b border-surface-border bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeIn className="max-w-2xl">
            <h2 className="text-headline font-bold text-ink text-balance">
              Recent work
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-subtle">
              A sample of the platforms we&apos;ve built and run.
            </p>
          </FadeIn>
          <div className="mt-10">
            <CarouselFn />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-brand-700 hover:underline"
            >
              See the full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <FadeIn className="text-center">
            <h2 className="text-headline font-bold text-ink text-balance">
              Common questions
            </h2>
          </FadeIn>

          <FadeIn delay={0.06} className="mt-10 divide-y divide-surface-border overflow-hidden rounded-2xl border border-surface-border">
            {FAQS.map((faq) => (
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
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-50 text-pretty">
              Send us the brief and we&apos;ll come back with scope, timeline and a
              fixed quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={open}
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors duration-300 hover:bg-brand-50"
              >
                Start a conversation
              </button>
              <Link
                href="/services"
                className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              >
                Browse services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const currentLocale = locale ?? "en";

  // Surface the mid-range services rather than arbitrary ones.
  const ranked = [...purchasableServices].sort((a, b) => b.price - a.price);
  const picks = [
    ...ranked.filter((s) => s.price >= 1000).slice(0, 3),
    ...ranked.filter((s) => s.price < 1000).slice(0, 3),
  ].slice(0, 6);

  const featured = picks.map((service) => {
    const copy = resolveCopy(currentLocale, service.slug);
    return {
      slug: service.slug,
      price: service.price,
      displayName: service.name || copy.name || service.slug,
      displayDescription:
        (copy.usedFallback ? service.description : copy.description) || "",
    };
  });

  return {
    props: {
      featured,
      ...(await serverSideTranslations(currentLocale, ["common"])),
    },
  };
}