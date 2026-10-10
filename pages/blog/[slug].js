import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import SeoHead, { SITE_URL, ogImageFor } from "../../components/Seo";
import Breadcrumbs, { breadcrumbSchema } from "../../components/Breadcrumbs";
import blogs from "../../data/blogs";
import { siteConfig } from "../../site.config";

export async function getStaticPaths() {
  return {
    paths: blogs.map((post) => ({ params: { slug: post.slug }, locale: "en" })),
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) return { notFound: true };

  return {
    props: {
      post,
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}

/**
 * Minimal inline renderer for the stored post bodies. Handles headings,
 * unordered lists and paragraphs — enough for the current content without
 * pulling in a markdown dependency or dangerouslySetInnerHTML.
 */
function renderContent(content = "") {
  const blocks = [];
  let list = null;

  const flushList = () => {
    if (!list) return;
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="mb-6 list-disc space-y-2 ps-6">
        {list.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>,
    );
    list = null;
  };

  for (const raw of content.split("\n")) {
    const line = raw.trim();

    if (!line) {
      flushList();
    } else if (line.startsWith("## ")) {
      flushList();
      blocks.push(
        <h2
          key={`h2-${blocks.length}`}
          className="mb-4 mt-10 text-2xl font-bold text-ink"
        >
          {line.slice(3)}
        </h2>,
      );
    } else if (line.startsWith("# ")) {
      flushList();
      blocks.push(
        <h1
          key={`h1-${blocks.length}`}
          className="mb-4 mt-8 text-3xl font-bold text-ink"
        >
          {line.slice(2)}
        </h1>,
      );
    } else if (/^[-*]\s+/.test(line)) {
      list = list ?? [];
      list.push(line.replace(/^[-*]\s+/, ""));
    } else {
      flushList();
      blocks.push(
        <p
          key={`p-${blocks.length}`}
          className="mb-5 text-[1.05rem] leading-relaxed text-ink-subtle"
        >
          {line}
        </p>,
      );
    }
  }

  flushList();
  return blocks;
}

export default function BlogPost({ post }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.image ?? `${SITE_URL}/og-default.png`,
    datePublished: post.date,
    dateModified: post.updatedDate ?? post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title },
  ];

  return (
    <>
      <SeoHead
        title={`${post.title} | ${siteConfig.name}`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        locale="en"
        hreflang={["en"]}
        image={ogImageFor({ title: post.title, subtitle: post.excerpt?.slice(0, 150), badge: "Blog" })}
        schema={[articleSchema, breadcrumbSchema(breadcrumbs)]}
      />

      <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumbs trail={breadcrumbs} />

        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
        >
          <svg
            className="rtl-flip h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Back to blog
        </Link>

        <header>
          <time
            dateTime={post.date}
            className="inline-block rounded-full border border-surface-border bg-surface-sunken px-3 py-1 text-sm text-ink-subtle"
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          <h1 className="mt-5 text-display font-bold text-ink text-balance">
            {post.title}
          </h1>
        </header>

        {post.image && (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-surface-border bg-surface-sunken">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        <div className="mt-12 rounded-2xl border border-surface-border bg-white p-6 sm:p-10">
          {renderContent(post.content)}
        </div>

        <div className="mt-12 rounded-2xl bg-surface-sunken p-8 text-center">
          <h2 className="text-xl font-bold text-ink">
            Building something similar?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-ink-subtle">
            We&apos;ve shipped {siteConfig.founded && "200+"} projects since{" "}
            {siteConfig.founded}. Tell us what you&apos;re working on.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact-us"
              className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Talk to us
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand-300"
            >
              Browse services
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}