import Link from "next/link";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { formatUSD } from "../lib/format";

const FALLBACK_IMAGE = "/background-illustration.png";

/**
 * Service card used on /services and category pages.
 *
 * Rendered as a <Link> with the add-to-cart button mounted inside, so the
 * whole card stays clickable while the button handles its own event.
 */
export default function ServiceCard({ service, name, description }) {
  const image = service.image || FALLBACK_IMAGE;
  const isExternal = image.startsWith("http");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover">
      <Link
        href={`/services/${service.slug}`}
        className="flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-sunken">
          <Image
            src={image}
            alt={name}
            fill
            loading="lazy"
            unoptimized={isExternal}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
          />
          {service.price === 0 && (
            <span className="absolute left-3 top-3 rounded-full bg-accent-600 px-2.5 py-1 text-xs font-semibold text-white">
              Free
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold leading-snug text-ink text-balance group-hover:text-brand-700">
              {name}
            </h3>
            {service.price > 0 && (
              <span className="shrink-0 text-sm font-bold text-brand-700">
                {formatUSD(service.price)}
              </span>
            )}
          </div>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-subtle">
            {description}
          </p>

          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
            View details
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

      {service.purchasable && service.price > 0 && (
        <div className="border-t border-surface-border p-4 pt-0">
          <AddToCart item={service} label="Add to cart" className="w-full" />
        </div>
      )}
    </article>
  );
}