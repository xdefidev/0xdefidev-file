import Link from "next/link";
import { siteConfig } from "../site.config";

/**
 * Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted by
 * each page so the markup and the structured data never drift apart.
 */
export default function Breadcrumbs({ trail }) {
  if (!trail?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-subtle">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={`${crumb.name}-${i}`} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-slate-300">
                  /
                </span>
              )}
              {crumb.href && !isLast ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-brand-600"
                >
                  {crumb.name}
                </Link>
              ) : (
                <span className="font-medium text-ink" aria-current="page">
                  {crumb.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Builds the BreadcrumbList JSON-LD graph for a trail. */
export function breadcrumbSchema(trail) {
  if (!trail?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      ...(crumb.href && i !== trail.length - 1
        ? { item: `${siteConfig.url}${crumb.href}` }
        : {}),
    })),
  };
}