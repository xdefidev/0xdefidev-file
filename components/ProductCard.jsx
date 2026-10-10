import Link from "next/link";
import ProductThumb from "./ProductThumb";
import { formatUSD } from "../lib/format";

/**
 * Card for source-code products shown on category and listing pages.
 *
 * Products are rendered as a `<Link>` with the add-to-cart button mounted
 * inside, mirroring ServiceCard, so the whole card stays clickable while the
 * button handles its own event. Products carry a fixed price, so the card
 * shows the exact figure rather than a "starting from" range.
 */
export default function ProductCard({ product }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover">
      <Link
        href={`/products/${product.slug}`}
        className="flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
          <ProductThumb
            src={product.image}
            alt={product.imageAlt ?? product.name}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="transition-transform duration-500 ease-smooth group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-accent-600 px-2.5 py-1 text-xs font-semibold text-white">
            Source code
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold leading-snug text-ink text-balance group-hover:text-brand-700">
              {product.name}
            </h3>
            <span className="shrink-0 text-sm font-bold text-brand-700">
              {formatUSD(product.price)}
            </span>
          </div>

          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-subtle">
            {product.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-surface-sunken px-2 py-0.5 text-[11px] font-medium text-ink-subtle"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
