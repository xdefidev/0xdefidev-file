/**
 * Catalogue of purchasable services and source-code products.
 *
 * Prices are USD numbers (not strings). A service is only purchasable when
 * `purchasable` is true and `price > 0`; everything else is presented as a
 * "starting from" quote handled through the contact sheet.
 *
 * Descriptions and feature lists live in `public/locales/<locale>/common.json`
 * under `service.<slug>`. Entries missing from a locale fall back to English,
 * which is why `getServiceCopy()` prefers English over the raw key.
 */

export const humanizeSlug = (slug = "") =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export const serviceName = (item) => item.name || humanizeSlug(item.slug);

const services = [
  {
    image:
      "https://ik.imagekit.io/hp2oyifpf/Dark%20Blue%20Red%20White%20Generic%20News%20General%20News%20YouTube%20Banner.png?updatedAt=1724719432697",
    status: true,
    price: 300,
    youtube: "jnL-70RXVII",
    slug: "telegram-mini-app",
    category: "telegram bots",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 600,
    youtube: "",
    slug: "solana-casino-platform",
    category: "casino",
    purchasable: true,
  },
  {
    image:
      "https://ik.imagekit.io/hp2oyifpf/Layer%202%20blockchain%20(1).png?updatedAt=1724719658061",
    status: true,
    price: 1500,
    youtube: "Ynn_hBBORUY",
    slug: "pos-blockchain-development",
    category: "blockchain",
    purchasable: true,
  },
  {
    image:
      "https://ik.imagekit.io/hp2oyifpf/Layer%202%20blockchain%20(1).png?updatedAt=1724719658061",
    status: true,
    price: 1500,
    youtube: "Ynn_hBBORUY",
    slug: "poa-blockchain-development",
    category: "blockchain",
    purchasable: true,
  },
  {
    image:
      "https://ik.imagekit.io/hp2oyifpf/Layer%202%20blockchain%20(1).png?updatedAt=1724719658061",
    status: true,
    price: 500,
    youtube: "Ynn_hBBORUY",
    slug: "testnet-evm-blockchain-development",
    category: "blockchain",
    purchasable: true,
  },
  {
    image:
      "https://ik.imagekit.io/hp2oyifpf/create%20crypto%20gamble%20games%20website%20with%20blackjack%20dice%20crash.png?updatedAt=1724719749080",
    status: true,
    price: 1000,
    youtube: "E4fIL4SjEXk",
    slug: "cryptocurrency-casino-development",
    category: "casino",
    purchasable: true,
  },
  {
    image:
      "https://ik.imagekit.io/hp2oyifpf/CEX.png?updatedAt=1724719582998",
    status: true,
    price: 2000,
    youtube: "",
    slug: "centralized-crypto-exchange-development",
    category: "exchange",
    purchasable: true,
  },
  {
    image:
      "https://ik.imagekit.io/hp2oyifpf/polywrap-uniswap-demo.png?updatedAt=1745273698271",
    status: true,
    price: 1500,
    youtube: "",
    slug: "decentralized-crypto-exchange-development",
    category: "exchange",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 100,
    youtube: "",
    slug: "token-development",
    category: "token",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 1000,
    youtube: "",
    slug: "nft-marketplace-development",
    category: "nft",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 500,
    youtube: "",
    slug: "nft-minting-website-development",
    category: "nft",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 1000,
    youtube: "",
    slug: "white-label-crypto-wallet-development",
    category: "wallet",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 100,
    youtube: "",
    slug: "fix-walletconnect-relay-error",
    category: "dapps",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 1000,
    youtube: "",
    slug: "ai-cryptocurrency-application-development",
    category: "ai",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 0,
    youtube: "",
    slug: "solana-volume-bot",
    category: "free tools",
    name: "Solana Volume Bot",
    description:
      "Advanced tools to increase token trading volume, build trust among holders, and attract new investors. Boost your token's activity on the Solana blockchain.",
    purchasable: false,
  },
  {
    image: "",
    status: true,
    price: 0,
    youtube: "",
    slug: "wallet-tracker-analytics",
    category: "free tools",
    name: "Wallet Tracker & Analytics",
    description:
      "Monitor any wallet address across multiple EVM chains and Solana. Get real-time alerts for large transactions and comprehensive portfolio analysis.",
    purchasable: false,
  },
  {
    image: "",
    status: true,
    price: 0,
    youtube: "",
    slug: "impermanent-loss-calculator",
    category: "free tools",
    name: "Impermanent Loss Calculator",
    description:
      "Accurately calculate potential impermanent loss for liquidity providers across different AMM protocols (Uniswap, PancakeSwap, etc.).",
    purchasable: false,
  },
  {
    image: "",
    status: true,
    price: 2500,
    youtube: "",
    slug: "custom-software-development",
    category: "software",
    name: "Custom Software Development",
    description:
      "End-to-end custom software development: architecture, backend, frontend, databases, and deployment of production-grade web and cloud applications built for scale.",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 1000,
    youtube: "",
    slug: "web-application-development",
    category: "software",
    name: "Web Application Development",
    description:
      "Fast, secure, and accessible web applications with modern stacks like Next.js and React, complete with authentication, payments, dashboards, and admin panels.",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 1200,
    youtube: "",
    slug: "mobile-application-development",
    category: "software",
    name: "Mobile Application Development",
    description:
      "Cross-platform iOS and Android apps using React Native and Flutter, from UI design to app store deployment, including in-app payments and push notifications.",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 2000,
    youtube: "",
    slug: "ai-llm-application-development",
    category: "ai",
    name: "AI & LLM Application Development",
    description:
      "Production-ready AI applications powered by LLMs: custom AI agents, RAG pipelines, semantic search, fine-tuned models, and integration into your product workflows.",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 1000,
    youtube: "",
    slug: "ai-chatbot-agents-development",
    category: "ai",
    name: "AI Chatbots & Agents Development",
    description:
      "Intelligent AI chatbots and autonomous agents trained on your data, deployed across websites, WhatsApp, Telegram, and Slack to automate support and sales.",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 500,
    youtube: "",
    slug: "n8n-workflow-automation",
    category: "automation",
    name: "n8n Workflow Automation",
    description:
      "Custom n8n workflows and business process automation that connect your apps, sync data, and eliminate manual work with reliable error handling and logging.",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 1000,
    youtube: "",
    slug: "cloud-devops-engineering",
    category: "cloud",
    name: "Cloud & DevOps Engineering",
    description:
      "Cloud architecture, CI/CD pipelines, containerization with Docker and Kubernetes, infrastructure-as-code, monitoring, and cost optimization on AWS, GCP, and Azure.",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 600,
    youtube: "",
    slug: "api-development-integration",
    category: "apis",
    name: "API Development & Integration",
    description:
      "Design, build, and document REST and GraphQL APIs, plus integration with third-party services, payment gateways, and payment providers like Stripe.",
    purchasable: true,
  },
  {
    image: "",
    status: true,
    price: 147,
    youtube: "",
    slug: "fomo-holders-boost",
    category: "trading bots",
    name: "FOMO Holders Boost",
    description:
      "Airdrop your Solana token to fresh fomo wallets via Telegram. Verified holders, deduplicated across campaigns, batch sends with on-chain reporting. Packs from 500 wallets.",
    externalUrl: "https://fomoboost.app",
    purchasable: false,
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export const purchasableServices = services.filter((s) => s.purchasable && s.price > 0);

export const serviceByCategory = (category) =>
  services.filter((s) => s.category === category);

export default services;