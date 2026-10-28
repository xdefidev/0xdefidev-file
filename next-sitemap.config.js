const { siteConfig } = require("./site.config");

// Locale prefixes that are not the default English locale.
const NON_EN_LOCALE = /^\/(?:zh|es|hi|ar|pt|ru|ja|de|fr)(\/|$)/;

// Paths that only exist in English (mirrors middleware.js ENGLISH_ONLY).
// Localized variants of these redirect via middleware, so they must not
// appear in the sitemap as soft-404s.
const ENGLISH_ONLY_PREFIXES = [
  /^\/services(\/|$)/,
  /^\/categories(\/|$)/,
  /^\/products(\/|$)/,
  /^\/blog\//, // blog posts only; the /blog index stays localized
  /^\/privacy-policy(\/|$)/,
  /^\/terms-of-service(\/|$)/,
  /^\/cart(\/|$)/,
  /^\/checkout(\/|$)/,
];

function isEnglishOnlyPath(path) {
  // Strip the locale prefix to get the "logical" path.
  const logical = path.replace(NON_EN_LOCALE, "/") || "/";
  return ENGLISH_ONLY_PREFIXES.some((re) => re.test(logical));
}

module.exports = {
  siteUrl: siteConfig.url,
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  // Components used to live under pages/components, which made every one of
  // them a real route (~50 indexable URLs of blank markup). They now live at
  // the repo root and cannot be routed.
  //
  // Patterns are globs, and every page is emitted once per locale, so
  // `/cart` alone does not exclude `/zh/cart`. `**/` covers the prefix.
  exclude: [
    "/api/*",
    "/components/*",
    "/404",
    "**/404",
    "/cart",
    "**/cart",
    "/checkout",
    "**/checkout",
    "/checkout/*",
    "**/checkout/*",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/cart", "/checkout/"],
      },
    ],
    additionalSitemaps: [],
  },

  transform: async (config, path) => {
    // Drop localized variants of English-only pages (they 30x-redirect).
    if (NON_EN_LOCALE.test(path) && isEnglishOnlyPath(path)) {
      return null;
    }

    let priority = 0.7;

    if (path === "/" || path === "/en") priority = 1.0;
    else if (path.includes("/products/")) priority = 0.9;
    else if (path.startsWith("/services")) priority = 0.8;
    else if (path.startsWith("/categories/")) priority = 0.8;
    else if (path.includes("/blog/")) priority = 0.6;
    else if (path === "/services" || path === "/products") priority = 0.9;

    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    };
  },
};