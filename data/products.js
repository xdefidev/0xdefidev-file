/**
 * Buy-now source-code products.
 *
 * Products are distinct from services: a service is engineering time that is
 * scoped per client, a product is existing code delivered as-is with a
 * commercial licence. They are kept in their own collection so category
 * counts on /services are not skewed, and so they can carry `Product`
 * structured data with a concrete `availability`.
 */

export const products = [
  {
    slug: "casino-rivemont",
    name: "Casino Rivemont",
    tagline:
      "Professional crypto casino platform with 16+ games, provably fair, full source code.",
    price: 1200,
    currency: "USD",
    purchasable: true,
    license: "Commercial source code, one project",
    delivery: "Full source code + setup guide, delivered after payment",

    youtube: "I4ym7cJuheA",
    heroVideoId: "I4ym7cJuheA",

    image: "/images/products/casino-rivemont.webp",
    imageAlt:
      "Casino Rivemont crypto casino platform showing the game lobby, live bets table and 16+ games",
    ogImage: "/images/products/casino-rivemont-og.jpg",

    stack: ["Laravel", "Node.js", "WebSocket", "Redis", "Provably Fair"],

    highlights: [
      "16+ built-in games out of the box",
      "Provably fair and fully verifiable by players",
      "Crypto deposits and withdrawals with no blockchain node required",
      "Built-in affiliate system",
      "Sportsbook module that works with free APIs",
      "Professional finish compared with Stake and Roobet",
    ],

    features: [
      {
        title: "16+ ready-to-play games",
        body: "Slots, crash, dice, blackjack, roulette, plinko and more, all shipped with the source code and configurable from the admin panel.",
      },
      {
        title: "Provably fair, verifiable by players",
        body: "Every outcome is committed on-chain before the round and revealed afterwards, so players can independently verify no operator interference.",
      },
      {
        title: "Crypto deposits and withdrawals",
        body: "No blockchain node setup required. Deposits are auto-credited and withdrawals are handled by the platform, so you can operate without running infrastructure yourself.",
      },
      {
        title: "Affiliate dashboard",
        body: "Track referred players, revenue share and conversions from a dedicated affiliate panel your partners can log into themselves.",
      },
      {
        title: "Sportsbook with free API coverage",
        body: "Pre-wired to free sports data feeds, so you can run a sportsbook section without paying for an expensive data provider.",
      },
      {
        title: "Admin and back-office",
        body: "Full control over players, wallets, games, bonuses, withdrawals and reports from a single admin interface.",
      },
      {
        title: "Laravel + Node.js",
        body: "Laravel handles accounts, wallets and the admin; Node.js handles realtime game engines over WebSockets. Both are mainstream, well-documented stacks that are easy to hire for.",
      },
      {
        title: "Pre-dates modern AI-generated output",
        body: "This platform predates the current wave of AI-generated code and was engineered by hand, which is why the finish holds up against established operators.",
      },
    ],

    faqs: [
      {
        q: "Do I get the complete source code?",
        a: "Yes. The full Laravel and Node.js source is delivered, along with a setup guide so you can run the platform on your own infrastructure.",
      },
      {
        q: "Do I need to run a blockchain node?",
        a: "No. Deposits and withdrawals are handled for you, so there is no node to configure or maintain.",
      },
      {
        q: "How does the licence work?",
        a: "The purchase covers one project you run commercially. You may modify the source. Redistribution or resale of the source itself is not permitted.",
      },
      {
        q: "Is this the same code as in the video?",
        a: "Yes, the walkthrough video shows the running platform you receive.",
      },
    ],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export default products;