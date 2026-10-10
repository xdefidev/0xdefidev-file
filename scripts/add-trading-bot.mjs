/**
 * One-off authoring script for the multi-chain volume / holder / rank bot
 * service and its dedicated category.
 *
 * Run once, then delete:  node scripts/add-trading-bot.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";

const LOCALE = "./public/locales/en/common.json";
const SERVICES = "./data/services.js";
const CATEGORIES = "./data/categories.js";

const SLUG = "volume-holder-rank-bot-solana-robinhood";

// ---------------------------------------------------------------------------
// Service copy
// ---------------------------------------------------------------------------

const SERVICE_COPY = {
  name: "Volume, Holder & Rank Bot — Solana and Robinhood Chain",
  description:
    "Grow volume, holder count and unique-wallet rank on Solana and Robinhood Chain. Three independent boosters, atomic execution, and one-tap recovery from every wallet.",
  p: {
    description:
      "A single bot that runs three independent boosters so you can shape the metrics your token needs at any moment. Volume runs atomic buy/buy/sell cycles for depth and turnover. Holders funds fresh wallets to grow the holder count. Rank fires micro-buys to build a unique-wallet footprint that reads as organic adoption rather than a single cluster. Each booster runs on its own schedule and its own wallet pool, so you can lean on one without touching the others. Solana executes through atomic Jito bundles with anti-MEV protection; Robinhood Chain routes across Uniswap v2, v3 and v4 with the pool auto-detected for you. Every run reports live metrics, and every puppet wallet can be swept back to your main wallet in one tap.",
    list: [
      "Volume booster — atomic buy/buy/sell cycles across configurable intervals",
      "Holder booster — grows holder count with freshly funded wallets",
      "Rank booster — builds unique-wallet count with micro-buys that read as organic",
      "Solana execution via atomic Jito bundles with anti-MEV protection",
      "Robinhood Chain routing across Uniswap v2, v3 and v4 with automatic pool detection",
      "Variable speed control and configurable wallet counts per booster",
      "Live results and metrics reported after every run",
      "One-tap fund recovery from every puppet wallet back to your main wallet",
      "Each customer gets a dedicated wallet — funds never mix between users",
    ],
  },
};

// ---------------------------------------------------------------------------
// Category
// ---------------------------------------------------------------------------

const CATEGORY = `  {
    slug: "trading-volume-bots",
    navDescription:
      "Volume, holder and rank generation bots for Solana and Robinhood Chain with atomic execution and full fund control.",
    serviceCategory: "trading bots",
    label: "Trading & Volume Bots",
    badge: "trading",
    metaTitle: "Volume, Holder & Rank Bots | Solana & Robinhood Chain | XDefiDev",
    metaDescription:
      "Volume, holder and rank generation bots for Solana and Robinhood Chain. Atomic execution, three independent boosters, live metrics and one-tap wallet recovery.",
    h1: "Volume, Holder & Rank Generation Bots",
    intro: [
      "Token metrics move in stages. A new pair needs turnover before it needs depth; a thin holder base suppresses trust; and a low unique-wallet count reads as a dead token. These are different problems, so our bot treats them as three separate boosters you can run independently.",
      "We run the bot on your own VPS or ours, with your wallet as the only source of funds. Solana execution uses atomic Jito bundles with anti-MEV protection so trades land as intended. Robinhood Chain trades route across Uniswap v2, v3 and v4, with the pool detected automatically rather than hardcoded. After every run you get live metrics, and you can recover funds from every wallet in the cluster in one tap.",
    ],
    heroImage1: "/categories/blockchain-development.png",
    heroImage2: "/categories/defi-nft-development.jpg",
    ogImage:
      "https://ik.imagekit.io/hp2oyifpf/polywrap-uniswap-demo.png?updatedAt=1745273698271",
    faqs: [
      {
        q: "How are the three boosters different?",
        a: "Volume runs atomic buy/buy/sell cycles to build turnover and depth. Holder funds fresh wallets to increase holder count. Rank fires micro-buys to grow the unique-wallet count. Each has its own schedule and wallet pool, so you can run one or all three.",
      },
      {
        q: "Which chains are supported?",
        a: "Solana, where trades execute as atomic Jito bundles with anti-MEV protection, and Robinhood Chain, where routing works across Uniswap v2, v3 and v4 with the pool detected automatically.",
      },
      {
        q: "Do my funds stay under my control?",
        a: "Yes. Every user is provisioned a dedicated wallet, funds never mix between accounts, and you can recover funds from every wallet in the cluster back to your main wallet in one tap.",
      },
      {
        q: "Can I control the speed and wallet count?",
        a: "Yes. Both speed and wallet count are configurable per booster, so you can run an aggressive schedule or a slow, conservative one and change it at any time.",
      },
      {
        q: "Will this get my token listed?",
        a: "We can only speak to on-chain activity: volume, holder count and unique-wallet count. Exchanges evaluate much more than that, and no tooling can guarantee a listing. We will not claim otherwise.",
      },
    ],
  },`;

// ---------------------------------------------------------------------------
// Apply
// ---------------------------------------------------------------------------

// 1. Locale copy
const locale = JSON.parse(readFileSync(LOCALE, "utf8"));
locale.service[SLUG] = SERVICE_COPY;
writeFileSync(LOCALE, `${JSON.stringify(locale, null, 2)}\n`, "utf8");
console.log(`+ locale copy: service.${SLUG}`);

// 2. Service entry, inserted before the closing bracket
let services = readFileSync(SERVICES, "utf8");
if (services.includes(`slug: "${SLUG}"`)) {
  console.log("= service entry already present");
} else {
  const entry = `  {
    image: "",
    status: true,
    price: 1500,
    youtube: "",
    slug: "${SLUG}",
    category: "trading bots",
    purchasable: true,
  },
];`;
  services = services.replace(/\n\];\n/, `\n${entry}\n`);
  writeFileSync(SERVICES, services, "utf8");
  console.log("+ service entry: data/services.js");
}

// 3. Category
let cats = readFileSync(CATEGORIES, "utf8");
if (cats.includes('slug: "trading-volume-bots"')) {
  console.log("= category already present");
} else {
  cats = cats.replace(/\n\];\n/, `\n${CATEGORY}\n];\n`);
  writeFileSync(CATEGORIES, cats, "utf8");
  console.log("+ category: data/categories.js");
}