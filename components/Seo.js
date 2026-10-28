import Head from "next/head";
import { useRouter } from "next/router";
import { siteConfig, ogLocale } from "../site.config";

export const SITE_URL = siteConfig.url;
export const SITE_NAME = siteConfig.name;
export const LOCALES = siteConfig.locales.map((l) => l.code);

export const DEFAULT_OG_IMAGE = siteConfig.ogImage.url;

/**
 * Build a per-page OG image URL from the dynamic /api/og route, falling back
 * to the service's own artwork when it has one.
 */
export function ogImageFor({ title, subtitle, badge, image } = {}) {
  if (image && /^https?:\/\//.test(image)) return image;

  const url = new URL(siteConfig.ogImage.url);
  if (title) url.searchParams.set("title", title);
  if (subtitle) url.searchParams.set("subtitle", subtitle);
  if (badge) url.searchParams.set("badge", badge);
  return url.toString();
}

/**
 * Central head tag manager.
 *
 * `noindex` is the important part: a page whose translation is missing must
 * not be indexed, otherwise Google lands on a page whose <title> is the raw
 * key `service.some-slug.name`. Callers pass `translated={false}` when the
 * current locale has no copy, and we emit a noindex + drop that locale from
 * hreflang.
 */
export default function SeoHead({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  locale,
  hreflang,
  noindex = false,
  schema = [],
}) {
  // Fall back to the route locale so pages that omit the prop still emit
  // correct self-referencing canonicals and og:locale on /zh, /de, etc.
  const router = useRouter();
  const activeLocale = locale || router?.locale || siteConfig.defaultLocale;
  const isDefaultLocale = activeLocale === siteConfig.defaultLocale;

  // Canonical must be self-referencing per locale. Without the /{locale}
  // prefix, every localized homepage canonicalizes to the English root and
  // Google deindexes the whole locale cluster as duplicates.
  const localeHref = (code) =>
    code === siteConfig.defaultLocale
      ? `${SITE_URL}${path}`
      : `${SITE_URL}/${code}${path}`;

  const canonical = localeHref(activeLocale);

  // When the page is untranslated we advertise only English plus x-default,
  // rather than claiming alternates that do not exist.
  const activeLocales =
    hreflang ?? (noindex ? [siteConfig.defaultLocale] : LOCALES);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow"}
      />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={String(siteConfig.ogImage.width)} />
      <meta property="og:image:height" content={String(siteConfig.ogImage.height)} />
      <meta property="og:image:alt" content={siteConfig.ogImage.alt} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={ogLocale(activeLocale)} />

      {activeLocales
        .filter((code) => code !== activeLocale)
        .map((code) => (
          <meta
            key={`og-alt-${code}`}
            property="og:locale:alternate"
            content={ogLocale(code)}
          />
        ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={siteConfig.ogImage.alt} />

      {activeLocales.includes(siteConfig.defaultLocale) && (
        <link
          rel="alternate"
          hrefLang="x-default"
          href={localeHref(siteConfig.defaultLocale)}
        />
      )}
      {activeLocales.map((code) => (
        <link
          key={code}
          rel="alternate"
          hrefLang={code}
          href={localeHref(code)}
        />
      ))}

      {schema.map((item, index) =>
        item ? (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ) : null,
      )}
    </Head>
  );
}