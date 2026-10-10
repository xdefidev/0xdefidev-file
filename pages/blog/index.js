import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import SeoHead, { ogImageFor } from "../../components/Seo";
import Breadcrumbs, { breadcrumbSchema } from "../../components/Breadcrumbs";
import { FadeIn, Stagger, StaggerItem } from "../../components/motion";
import blogs from "../../data/blogs";
import { siteConfig } from "../../site.config";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function Blog() {
  return (
    <>
      <SeoHead
        title={`Blog | Web3, Blockchain & AI Development Insights | ${siteConfig.name}`}
        description="Practical writing on Web3 development, blockchain infrastructure, AI applications and the engineering decisions behind shipping them."
        path="/blog"
        image={ogImageFor({
          title: "Blog",
          subtitle: "Web3, blockchain and AI engineering, written by the people doing the work",
        })}
        schema={[
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blog" }]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${siteConfig.url}/blog#blog`,
            name: `${siteConfig.name} Blog`,
            url: `${siteConfig.url}/blog`,
            publisher: { "@id": `${siteConfig.url}/#organization` },
            blogPost: blogs.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `${siteConfig.url}/blog/${post.slug}`,
              datePublished: post.date,
            })),
          },
        ]}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Blog" },
          ]}
        />

        <FadeIn className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Notes from the build
          </p>
          <h1 className="mt-3 text-display font-bold text-ink text-balance">Blog</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-subtle text-pretty">
            Practical writing on Web3 development, blockchain infrastructure and
            AI applications &mdash; the decisions, the trade-offs, and what
            actually broke.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post, index) => (
            <StaggerItem key={post.slug ?? index}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-sunken">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-surface-sunken">
                      <span className="text-sm font-semibold text-slate-400">
                        {siteConfig.name}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <time
                    dateTime={post.date}
                    className="text-sm text-ink-subtle"
                  >
                    {formatDate(post.date)}
                  </time>

                  <h2 className="mt-2 text-lg font-bold leading-snug text-ink text-balance group-hover:text-brand-700">
                    {post.title}
                  </h2>

                  <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-subtle">
                    {post.excerpt}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 border-t border-surface-border pt-4 text-sm font-semibold text-brand-600">
                    Read article
                    <svg
                      className="rtl-flip h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
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