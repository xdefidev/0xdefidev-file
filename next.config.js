// Slugs that moved from the services catalogue into products. They are
// existing source code rather than scoped engineering time, so their old
// URLs must keep resolving — they were indexed and are printed in the
// sitemap. Next prefixes these sources with the active locale automatically.
const MOVED_TO_PRODUCTS = [
  "pump-fun-clone-development",
  "amm-dex-uniswap-clone",
  "pinksale-launchpad-clone",
  "telegram-sniper-bot-clone",
  "solana-volume-bot-telegram",
  "volume-holder-rank-bot-solana-robinhood",
];

module.exports = {
  poweredByHeader: false,
  async redirects() {
    return [
      // www → apex (canonical host). Vercel also handles this at the domain
      // level, but the redirect here covers local/preview environments.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xdefidev.xyz" }],
        destination: "https://xdefidev.xyz/:path*",
        permanent: true,
      },
      ...MOVED_TO_PRODUCTS.map((slug) => ({
        source: `/services/${slug}`,
        destination: `/products/${slug}`,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  optimizeFonts: true,
  images: {
    domains: ["ik.imagekit.io"],
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: [
      "en", // English
      "zh", // Chinese (Simplified)
      "es", // Spanish
      "hi", // Hindi
      "ar", // Arabic
      "pt", // Portuguese
      "ru", // Russian
      "ja", // Japanese
      "de", // German
      "fr"  // French
    ],
    defaultLocale: "en",
    localeDetection: false
  }
};
