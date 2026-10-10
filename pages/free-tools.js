import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import SeoHead from "../components/Seo";
import Breadcrumbs, { breadcrumbSchema } from "../components/Breadcrumbs";
import { FadeIn, Stagger, StaggerItem } from "../components/motion";
import { useContact } from "../components/Contact";
import { siteConfig } from "../site.config";

const TOOLS = [
  {
    name: "Solana Volume Strategy Modeller",
    description:
      "Model daily volume targets against real pool liquidity. Projects wallet funding requirements, slippage impact and detects cycle patterns that read as machine-generated, before you pay anyone to build it.",
    status: "available",
  },
  {
    name: "Wallet Tracker & Analytics",
    description:
      "Track any wallet across Solana and the major EVM chains. Balance history, token holdings, activity summaries and linked-wallet clustering, with no signup required.",
    status: "coming-soon",
  },
  {
    name: "Impermanent Loss Calculator",
    description:
      "Correct maths for Uniswap v2 and concentrated v3 ranges, with break-even including fee income rather than IL alone. Compares Uniswap, PancakeSwap, Aerodrome and Curve.",
    status: "coming-soon",
  },
];

export default function FreeTools() {
  const { open } = useContact();

  return (
    <>
      <SeoHead
        title={`Free Crypto Developer Tools | ${siteConfig.name}`}
        description="Free tools for crypto developers, traders and project founders: volume strategy modelling, wallet analytics and impermanent loss calculations. No signup required."
        path="/free-tools"
        schema={[
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Free Tools" }]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "XDefiDev Free Tools",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          },
        ]}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Free Tools" },
          ]}
        />

        <FadeIn className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            No signup required
          </p>
          <h1 className="mt-3 text-display font-bold text-ink text-balance">
            Free tools for crypto builders
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-subtle text-pretty">
            Small utilities we built for our own work and decided to share.
            Everything runs in your browser, and nothing here asks you for a
            wallet connection.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => {
            const available = tool.status === "available";

            return (
              <StaggerItem key={tool.name}>
                <article
                  className={`flex h-full flex-col rounded-2xl border bg-white p-6 transition-all duration-300 ease-smooth ${
                    available
                      ? "border-surface-border hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
                      : "border-surface-border bg-surface-sunken"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2
                      className={`text-lg font-semibold text-balance ${
                        available ? "text-ink" : "text-ink-muted"
                      }`}
                    >
                      {tool.name}
                    </h2>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        available
                          ? "bg-accent-100 text-accent-800"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {available ? "Available" : "Coming soon"}
                    </span>
                  </div>

                  <p
                    className={`mt-3 flex-1 text-sm leading-relaxed ${
                      available ? "text-ink-subtle" : "text-slate-500"
                    }`}
                  >
                    {tool.description}
                  </p>

                  <div className="mt-6">
                    {available ? (
                      <Link
                        href="/services/solana-volume-bot"
                        className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                      >
                        Open tool
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={open}
                        className="inline-flex w-full items-center justify-center rounded-xl border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
                      >
                        Notify me
                      </button>
                    )}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn delay={0.1} className="mt-14 rounded-2xl bg-surface-sunken p-8 text-center">
          <h2 className="text-xl font-bold text-ink">
            Need something specific built?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-ink-subtle">
            We build custom tooling, dashboards and internal tools for crypto
            teams. Tell us what you&apos;re trying to measure.
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

export async function getStaticProps({ locale }) {
  return {
    props: { ...(await serverSideTranslations(locale ?? "en", ["common"])) },
  };
}