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
    // `category` mirrors the old service category so /categories/[slug] can
    // list products alongside services. Keep it in sync with
    // `serviceCategory` values in data/categories.js.
    category: "casino",
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

  {
    slug: "pump-fun-clone-development",
    category: "dapps",
    name: "PUMP.fun Clone on EVM and Solana",
    tagline:
      "Production-ready Pump.fun-style launchpad with fair launches, bonding curve pricing and creator fee automation.",
    price: 300,
    currency: "USD",
    purchasable: true,
    license: "Commercial source code, one project",
    delivery: "Full source code + deployment walkthrough, delivered after payment",

    image:
      "https://ik.imagekit.io/hp2oyifpf/pumpfun-clone.png?updatedAt=1727082514946",
    imageAlt: "Pump.fun clone launchpad interface with bonding curve chart",

    stack: ["Solana", "Anchor", "React", "Node.js"],

    highlights: [
      "Fair launch with bonding curve pricing",
      "Automatic liquidity migration at curve completion",
      "Creator fees wired straight to your wallet",
      "Anti-bot and sniper protection built in",
      "Full source code on your own infrastructure",
    ],

    features: [
      {
        title: "Bonding curve fair launch",
        body: "Tokens price along a bonding curve from the first buy, so nobody gets a pre-mine advantage and the launch cannot be front-run by insiders.",
      },
      {
        title: "Automatic liquidity migration",
        body: "When the curve completes, liquidity migrates to the DEX on its own with the lock parameters you configure — no manual step, no window where funds sit unlocked.",
      },
      {
        title: "Creator fee automation",
        body: "Creator fees are wired to your wallet at the protocol level and settle continuously, so you do not have to claim or reconcile anything.",
      },
      {
        title: "Anti-bot and sniper protection",
        body: "Per-wallet buy limits, launch-window throttles and honeypot checks block the sniper bots that normally drain a fresh launch in its first blocks.",
      },
      {
        title: "Creator dashboard",
        body: "Live token analytics covering holders, volume, curve progress and fee accrual, so you can watch the launch without sitting in a block explorer.",
      },
      {
        title: "Delivered as source",
        body: "You receive the full codebase and a deployment walkthrough. Run it on your own infrastructure and your own domain — no branded trademark assets are copied.",
      },
    ],

    faqs: [
      {
        q: "Which chains does it support?",
        a: "Solana natively via Anchor programs, plus EVM chains through an equivalent Solidity build. You choose the target when you order.",
      },
      {
        q: "Do I get the complete source code?",
        a: "Yes, the full front-end and contracts plus a deployment walkthrough so you can run it on your own infrastructure.",
      },
      {
        q: "Can I change the branding?",
        a: "Yes. It ships unbranded so you apply your own name, logo and colours. No third-party trademarks are included.",
      },
      {
        q: "Is there an ongoing fee?",
        a: "No. It is a one-time purchase covering one commercial project. Hosting and infrastructure are yours to run.",
      },
    ],
  },

  {
    slug: "amm-dex-uniswap-clone",
    category: "exchange",
    name: "AMM DEX Uniswap Clone",
    tagline:
      "Uniswap-style AMM DEX with liquidity pools, multi-hop swap routing, fee tiers and analytics.",
    price: 400,
    currency: "USD",
    purchasable: true,
    license: "Commercial source code, one project",
    delivery: "Full source code + deployment walkthrough, delivered after payment",

    image:
      "https://ik.imagekit.io/hp2oyifpf/polywrap-uniswap-demo.png?updatedAt=1745273698271",
    imageAlt: "Uniswap-style AMM DEX swap interface with pool chart",

    stack: ["Solidity", "React", "TypeScript", "viem"],

    highlights: [
      "Constant-product AMM with configurable fee tiers",
      "Multi-hop routing for best execution",
      "Liquidity positions with fee and IL analytics",
      "Slippage protection and price-impact warnings",
      "Auditable, well-documented contract source",
    ],

    features: [
      {
        title: "Constant-product AMM",
        body: "The core x*y=k swap math with configurable fee tiers, implemented to the established interface patterns so wallets, aggregators and tooling interoperate.",
      },
      {
        title: "Multi-hop routing",
        body: "The router finds the best path across pools instead of forcing every trade through a single pair, which matters most for long-tail tokens.",
      },
      {
        title: "Liquidity position management",
        body: "Providers can add, remove and rebalance positions, with per-position fee accrual and impermanent loss reported against simply holding.",
      },
      {
        title: "Slippage and price-impact guards",
        body: "Traders set a tolerance and see the price impact before confirming, so a thin pool cannot silently eat the trade.",
      },
      {
        title: "Pool analytics",
        body: "Volume, fees, TVL and pool composition surfaced in the front-end so providers can decide where capital earns the most.",
      },
      {
        title: "Auditable contract source",
        body: "Contracts are written for review rather than obfuscation, with deployment scripts and a README covering the whole flow.",
      },
    ],

    faqs: [
      {
        q: "Which chains does it deploy to?",
        a: "Any EVM chain — Ethereum, BNB Smart Chain, Polygon, Avalanche, Base and others. The contracts are chain-agnostic.",
      },
      {
        q: "Can I add my own fee tiers?",
        a: "Yes. Fee tiers are a configuration value, so you can offer the standard tiers or define your own.",
      },
      {
        q: "Do I get the front-end too?",
        a: "Yes, the swap, pool and analytics front-end is included alongside the contracts and deployment scripts.",
      },
      {
        q: "Is this audited?",
        a: "The source is written to established AMM patterns so it can be reviewed. A third-party audit can be arranged as an add-on if your launch requires it.",
      },
    ],
  },

  {
    slug: "pinksale-launchpad-clone",
    category: "dapps",
    name: "Pinksale Presale Launchpad Clone",
    tagline:
      "Complete launchpad platform with fair launches, presales, vesting and automated liquidity handling.",
    price: 500,
    currency: "USD",
    purchasable: true,
    license: "Commercial source code, one project",
    delivery: "Full source code + deployment walkthrough, delivered after payment",

    image:
      "https://ik.imagekit.io/hp2oyifpf/Copy%20of_Black%20and_Yellow%20Dark%20Gamer%20Survival%20YouTube%20Banner.png?updatedAt=1724719521891",
    imageAlt: "Presale launchpad platform showing tier allocation and vesting schedule",
    youtube: "M98xybTnuoY",
    heroVideoId: "M98xybTnuoY",

    stack: ["Solidity", "React", "Node.js", "PostgreSQL"],

    highlights: [
      "Fair launch and presale flows with anti-bot protection",
      "Tiered allocation and whitelist support",
      "Vesting schedules with automated releases",
      "Liquidity locking with verifiable proof",
      "Admin dashboard for pools, users and reporting",
    ],

    features: [
      {
        title: "Fair launch and presale flows",
        body: "Run either a fair launch that denies sniper bots or a structured presale with staged pricing, both wired to the same admin controls.",
      },
      {
        title: "Tiered allocation and whitelists",
        body: "Allocate by tier, gate by wallet allowlist, and let buyers verify their own allocation before a single transaction is sent.",
      },
      {
        title: "Vesting schedules",
        body: "Team, advisor and partner tokens release on a schedule you define, enforced on-chain rather than by a promise in the whitepaper.",
      },
      {
        title: "Liquidity locking",
        body: "Liquidity locks with verifiable proof, so buyers can confirm funds cannot be pulled at the same moment you can.",
      },
      {
        title: "Fee distribution",
        body: "Fees split between creator, platform and treasury automatically on each raise, with a report you can reconcile against.",
      },
      {
        title: "Admin dashboard",
        body: "Manage pools, users, allocations and reporting from one panel, deployed to your own infrastructure and domain.",
      },
    ],

    faqs: [
      {
        q: "Do I get the complete source code?",
        a: "Yes, the full contracts and front-end plus a deployment walkthrough so you can operate it yourself.",
      },
      {
        q: "Can I run it on my own domain?",
        a: "Yes. It is deployed to your own infrastructure and domain, unbranded so you apply your own identity.",
      },
      {
        q: "Which chains are supported?",
        a: "Any EVM chain, plus Solana as a separate build. You choose the target when you order.",
      },
      {
        q: "How does the licence work?",
        a: "One-time purchase covering one commercial project. Redistribution or resale of the source itself is not permitted.",
      },
    ],
  },

  {
    slug: "telegram-sniper-bot-clone",
    category: "telegram bots",
    name: "Telegram Sniper Bot Clone",
    tagline:
      "Detects new liquidity pool launches within seconds and fires your configured trade the moment the pool opens.",
    price: 600,
    currency: "USD",
    purchasable: true,
    license: "Commercial source code, one project",
    delivery: "Full source code + setup guide, delivered after payment",

    image: null,
    imageAlt: "Telegram sniper bot trade execution interface",

    stack: ["Node.js", "Telegram Bot API", "Solana Web3.js", "Ethers.js"],

    highlights: [
      "Detects new pool launches within seconds",
      "Honeypot and rug-pull checks before every entry",
      "Configurable buy amount, slippage and wallet",
      "Multi-chain: Solana, Ethereum and Base",
      "Trade log with realised entry price and P&L",
    ],

    features: [
      {
        title: "Sub-second pool detection",
        body: "Monitors new pool creation across Solana, Ethereum and Base, confirms the pool is initialised, then fires your configured buy — normally within seconds of the pool opening.",
      },
      {
        title: "Honeypot and rug checks",
        body: "Every entry is screened first: sell-side tax, ownership renouncement and liquidity depth, so you are not buying into a pool designed to trap you.",
      },
      {
        title: "Configurable trade parameters",
        body: "Set the amount, slippage, funding wallet and the conditions that trigger a trade. Save presets per strategy instead of retyping them per shot.",
      },
      {
        title: "TP/SL and partial exits",
        body: "Take-profit and stop-loss run automatically, with partial take-profit levels so you can scale out rather than all-or-nothing.",
      },
      {
        title: "Realised entry price logging",
        body: "Each execution logs the realised entry price including fees and gas, so you can measure whether the strategy is actually working.",
      },
      {
        title: "Telegram alerts",
        body: "Entry, exit and pool events push to Telegram as they happen, so you never have to watch the bot to know what it did.",
      },
    ],

    faqs: [
      {
        q: "Which chains does it support?",
        a: "Solana, Ethereum and Base at launch. Additional EVM chains can be added on request.",
      },
      {
        q: "Do I need to run my own server?",
        a: "Yes, it runs on a VPS or your own machine. Setup is covered in the included guide.",
      },
      {
        q: "Do I get the source code?",
        a: "Yes, the full bot source plus a setup guide, delivered after payment.",
      },
      {
        q: "Can I use my existing wallet?",
        a: "Yes. You point it at any funding wallet you control, and the bot never holds your keys.",
      },
    ],
  },

  {
    slug: "solana-volume-bot-telegram",
    category: "telegram bots",
    name: "Solana Volume Bot Telegram",
    tagline:
      "Telegram volume bot for Solana that trades your token automatically to build real volume and holder trust.",
    price: 400,
    currency: "USD",
    purchasable: true,
    license: "Commercial source code, one project",
    delivery: "Full source code + setup guide, delivered after payment",

    image:
      "https://ik.imagekit.io/hp2oyifpf/SOLANA%20Volume%20Bot%20on%20Telegram.png?updatedAt=1735771535130",
    imageAlt: "Solana volume bot Telegram interface showing trade cycles and volume target",

    stack: ["Node.js", "Solana Web3.js", "Telegram Bot API", "Redis"],

    highlights: [
      "Runs 24/7 from a dedicated VPS or your own server",
      "Configurable trade size, frequency and daily target",
      "Spread across multiple funded wallets",
      "Live dashboard with per-cycle history and P&L",
      "Supports Raydium, Orca and Meteora pools",
    ],

    features: [
      {
        title: "Runs 24/7 unattended",
        body: "Executes from a dedicated VPS or your own server on a schedule you set, so volume keeps building while you are away from the chart.",
      },
      {
        title: "Configurable cycles",
        body: "Trade size, frequency and daily volume target are all inputs, so you can match the behaviour to your pool depth instead of guessing.",
      },
      {
        title: "Multi-wallet distribution",
        body: "Activity spreads across several funded wallets so the pattern reads as many participants rather than one account trading with itself.",
      },
      {
        title: "Live dashboard",
        body: "Each cycle appears as it runs, with per-cycle history and P&L tracking so you can see exactly what the bot did and what it cost.",
      },
      {
        title: "Raydium, Orca and Meteora",
        body: "Supports the major Solana venues, and every wallet is funded from your own pool so no capital leaves your ecosystem.",
      },
      {
        title: "Emergency stop",
        body: "Pause or retune the bot at any time, with an adjustable slippage guard that halts execution if the pool moves against you.",
      },
    ],

    faqs: [
      {
        q: "Do I need to know how to code?",
        a: "No. Configuration happens through the Telegram interface and a small settings file, and setup is covered in the included guide.",
      },
      {
        q: "Where does it run?",
        a: "On a VPS or any machine you control. It is delivered as source, so you choose the host.",
      },
      {
        q: "Does it need a Solana node?",
        a: "No. It works against public RPC endpoints, and you can point it at your own if you prefer.",
      },
      {
        q: "Do I get the source code?",
        a: "Yes, the full bot source plus a setup guide, delivered after payment.",
      },
    ],
  },

  {
    slug: "volume-holder-rank-bot-solana-robinhood",
    category: "trading bots",
    name: "Volume, Holder & Rank Bot — Solana and Robinhood Chain",
    tagline:
      "Grow volume, holder count and unique-wallet rank on Solana and Robinhood Chain. Three independent boosters with atomic execution.",
    price: 1500,
    currency: "USD",
    purchasable: true,
    license: "Commercial source code, one project",
    delivery: "Full source code + setup guide, delivered after payment",

    image: null,
    imageAlt: "Volume, holder and rank booster dashboard with live metrics",

    stack: ["Node.js", "Solana Web3.js", "Jito", "Uniswap SDK"],

    highlights: [
      "Three independent boosters in one bot",
      "Atomic Jito bundles with anti-MEV protection",
      "Uniswap v2, v3 and v4 auto pool detection",
      "One-tap fund recovery from every wallet",
      "Dedicated wallet per customer — funds never mix",
    ],

    features: [
      {
        title: "Volume booster",
        body: "Runs atomic buy/buy/sell cycles across configurable intervals, building depth and turnover without leaving the pattern readable as a single loop.",
      },
      {
        title: "Holder booster",
        body: "Funds fresh wallets to grow the holder count, so the number climbing on your explorer reflects many distinct holders rather than one splitting into many.",
      },
      {
        title: "Rank booster",
        body: "Fires micro-buys to build a unique-wallet footprint that reads as organic adoption instead of a single cluster moving in lockstep.",
      },
      {
        title: "Atomic Jito execution",
        body: "Solana runs execute through atomic Jito bundles with anti-MEV protection, so the cycle lands as one indivisible event rather than getting picked apart.",
      },
      {
        title: "Uniswap v2/v3/v4 routing",
        body: "Robinhood Chain routes across Uniswap v2, v3 and v4 with the pool auto-detected for you, so you do not have to hunt for the contract address.",
      },
      {
        title: "One-tap fund recovery",
        body: "Every puppet wallet sweeps back to your main wallet in one tap, and each customer gets a dedicated wallet so funds never mix between users.",
      },
    ],

    faqs: [
      {
        q: "Which chains does it support?",
        a: "Solana and Robinhood Chain. Solana executes through Jito bundles; Robinhood Chain routes across Uniswap v2, v3 and v4.",
      },
      {
        q: "Can I run the boosters independently?",
        a: "Yes. Each booster runs on its own schedule and its own wallet pool, so you can lean on one without touching the others.",
      },
      {
        q: "How fast are funds returned?",
        a: "Every puppet wallet can be swept back to your main wallet in one tap, at any time, from the dashboard.",
      },
      {
        q: "Do I get the source code?",
        a: "Yes, the full bot source plus a setup guide, delivered after payment.",
      },
    ],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export default products;