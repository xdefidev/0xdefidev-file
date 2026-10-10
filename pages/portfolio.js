import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import SeoHead from "../components/Seo";
import Breadcrumbs, { breadcrumbSchema } from "../components/Breadcrumbs";
import { FadeIn, Stagger, StaggerItem } from "../components/motion";
import { useContact } from "../components/Contact";
import portfolio from "../data/portfolio";
import { siteConfig } from "../site.config";

export default function Portfolio() {
  const { open } = useContact();

  return (
    <>
      <SeoHead
        title={`Portfolio | Web3, DeFi & Blockchain Projects | ${siteConfig.name}`}
        description="A selection of DeFi, NFT, exchange, casino and blockchain infrastructure projects delivered by the XDefiDev team since 2018."
        path="/portfolio"
        schema={[
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Portfolio" },
          ]),
        ]}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Portfolio" },
          ]}
        />

        <FadeIn className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Selected work
          </p>
          <h1 className="mt-3 text-display font-bold text-ink text-balance">
            Projects we&apos;ve shipped
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-subtle text-pretty">
            DeFi, NFT, exchange, gaming and blockchain infrastructure. Some
            client names are under NDA, so we describe the work rather than the
            client.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, index) => {
            const inner = (
              <>
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-surface-sunken">
                  <Image
                    src={item.image}
                    alt={`${item.name} project screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-semibold text-ink group-hover:text-brand-700">
                    {item.name}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-subtle">
                    {item.description}
                  </p>
                </div>
              </>
            );

            return (
              <StaggerItem key={item.name ?? index}>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
                  >
                    {inner}
                  </a>
                ) : (
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition-all duration-300 ease-smooth hover:shadow-card">
                    {inner}
                  </article>
                )}
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn delay={0.1} className="mt-14 rounded-2xl bg-surface-sunken p-8 text-center">
          <h2 className="text-xl font-bold text-ink">Want something similar?</h2>
          <p className="mx-auto mt-2 max-w-xl text-ink-subtle">
            Tell us what you&apos;re building and we&apos;ll tell you honestly
            whether we&apos;re the right fit.
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
              Start a project
            </button>
          </div>
        </FadeIn>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}