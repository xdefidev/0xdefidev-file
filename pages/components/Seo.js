import Head from "next/head";

export const SITE_URL = "https://xdefidev.xyz";
export const SITE_NAME = "XDefiDev";
export const LOCALES = ["en", "zh", "es", "hi", "ar", "pt", "ru", "ja", "de", "fr"];

export const DEFAULT_OG_IMAGE =
  "https://ik.imagekit.io/lzgpc48la/Yellow_Bright_Business_Idea_Tutorial_Youtube_Thumbnail_n186Tgza0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665836822605";

export default function SeoHead({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  hreflang = LOCALES,
  schema = [],
}) {
  const canonical = `${SITE_URL}${path}`;
  const localeHref = (locale) =>
    locale === "en" ? `${SITE_URL}${path}` : `${SITE_URL}/${locale}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {hreflang.includes("en") && (
        <link rel="alternate" hrefLang="x-default" href={localeHref("en")} />
      )}
      {hreflang.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={localeHref(locale)}
        />
      ))}

      {schema.map((item, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Head>
  );
}
