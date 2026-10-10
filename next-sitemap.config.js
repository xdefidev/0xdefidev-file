const { siteConfig } = require("./site.config");

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