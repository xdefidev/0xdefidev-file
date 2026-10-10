import Image from "next/image";
import { siteConfig } from "../site.config";

/**
 * Product thumbnail that falls back to a black plate with the brand wordmark
 * when no artwork exists yet.
 *
 * Kept separate from ServiceCard's illustration fallback because products are
 * sold as-is: a generic stock illustration implies a screenshot of code the
 * buyer does not have, whereas a plain wordmark reads as "no preview" without
 * making a claim about the product.
 */
export default function ProductThumb({
  src,
  alt,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}) {
  const isExternal = typeof src === "string" && /^https?:\/\//.test(src);

  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt || `${siteConfig.name} product preview`}
        className={`absolute inset-0 flex items-center justify-center bg-black ${className}`}
      >
        <span className="select-none text-lg font-bold uppercase tracking-[0.2em] text-white sm:text-xl">
          {siteConfig.name}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt || ""}
      fill
      priority={priority}
      loading={priority ? undefined : "lazy"}
      unoptimized={isExternal}
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  );
}
