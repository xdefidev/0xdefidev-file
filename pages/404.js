import Link from "next/link";
import SeoHead from "../components/Seo";
import { categories } from "../data/categories";

export default function NotFound() {
  return (
    <>
      <SeoHead
        title="Page not found | XDefiDev"
        description="The page you were looking for does not exist."
        path="/404"
        noindex
        hreflang={["en"]}
      />

      <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col justify-center px-4 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          404
        </p>
        <h1 className="mt-3 text-display font-bold text-ink text-balance">
          We can&apos;t find that page
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-subtle">
          The link may be out of date, or the page may have moved. Here&apos;s
          where most people were heading.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Back to home
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-surface-border px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand-300"
          >
            Browse services
          </Link>
          <Link
            href="/contact-us"
            className="rounded-xl border border-surface-border px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand-300"
          >
            Contact us
          </Link>
        </div>

        <div className="mt-12 border-t border-surface-border pt-8">
          <h2 className="text-sm font-semibold text-ink">Popular categories</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                className="rounded-lg border border-surface-border bg-surface-sunken px-3.5 py-2 text-sm text-ink-subtle transition-colors duration-200 hover:border-brand-300 hover:text-brand-700"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}