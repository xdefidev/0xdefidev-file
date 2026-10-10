/**
 * One-off authoring script for the English service catalogue.
 *
 * Fills in the entries that were placeholder text ("Description for X") or
 * had an empty feature list. Run once, then delete:
 *   node scripts/author-service-copy.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const target = resolve(here, "../public/locales/en/common.json");

/** slug -> { description, longDescription, features[] } */
const COPY = {
  "solana-volume-bot-telegram": {
    description:
      "A Telegram volume bot for Solana that trades your token automatically to build real volume and holder trust, without you watching charts all day.",
    longDescription:
      "Volume is the first thing buyers check. Our Solana volume bot runs from a dedicated VPS, executes configurable trade cycles against your liquidity pool, and spreads activity across many time windows so the pattern looks organic rather than scripted. You control trade size, frequency, wallets used and the target volume per day, and every wallet is funded from your own pool so no capital leaves your ecosystem. A live dashboard shows each cycle as it runs, and you can pause or retune the bot at any time.",
    features: [
      "Runs 24/7 from a dedicated VPS or your own server",
      "Configurable trade size, frequency and daily volume target",
      "Spread across multiple funded wallets for natural-looking activity",
      "Live dashboard with per-cycle history and P&L tracking",
      "Supports Raydium, Orca and Meteora pools",
      "Anti-detection timing jitter so cycles do not look machine-identical",
      "Emergency stop and adjustable slippage guard",
    ],
  },

  "pump-fun-clone-development": {
    description:
      "A production-ready Pump.fun-style launchpad with fair-launch mechanics, bonding curve trading, and creator fee automation.",
    longDescription:
      "We build Pump.fun clones that keep the mechanics that made the original work: a fair launch, a bonding curve that prices each token, and automatic creator fee distribution, without copying any trademarked branding. The launch flow, anti-bot protections and liquidity migration are all implemented from scratch so you can operate it on your own infrastructure and your own domain. You receive the full codebase plus a deployment walkthrough, and we can additionally host and maintain it for you.",
    features: [
      "Fair launch with bonding curve pricing",
      "Automatic liquidity migration at curve completion",
      "Creator fee distribution wired to your wallet",
      "Anti-bot and sniper protections built in",
      "Creator dashboard with live token analytics",
      "Solana native, built on Anchor programs",
      "Full source code and deployment walkthrough",
    ],
  },

  "telegram-mini-app": {
    description:
      "Telegram Mini Apps that open inside the chat, with wallet connection, TON and Solana support, and Telegram-native payments.",
    longDescription:
      "A Mini App loads inside Telegram with no install and no app-store review, which makes it the fastest route to a crypto product in front of an existing Telegram audience. We build Mini Apps with Web3 wallet connection through Telegram's in-app wallet, TON and Solana payment support, Stars and crypto payments, referral tracking, and a responsive interface that works on both mobile and desktop Telegram. Because everything runs inside Telegram, the friction between tapping a link and completing a payment is close to zero.",
    features: [
      "Runs inside Telegram with no install or app-store review",
      "Wallet connection through Telegram's in-app wallet",
      "TON and Solana support with Telegram Stars payments",
      "Referral and affiliate tracking built in",
      "Responsive from phone to desktop Telegram",
      "Bot back-end with admin panel and user analytics",
      "Smooth back-button and close-button handling",
    ],
  },

  "pinksale-launchpad-clone": {
    description:
      "A complete launchpad platform with fair launches, presales, vesting, and automated liquidity handling for token launches.",
    longDescription:
      "Launchpads are how most new tokens find their first liquidity. We build Pinksale-style platforms covering the whole launch lifecycle: fair launches that deny bots, presales with tiered allocation, vesting schedules that release tokens over time, and liquidity locking so buyers can verify funds are not pulled. The admin side handles fees, pools and user management, and the buyer side stays deliberately simple so conversion does not suffer.",
    features: [
      "Fair launch and presale flows with anti-bot protection",
      "Tiered allocation and whitelist support",
      "Vesting schedules with automated releases",
      "Liquidity locking with a verifiable proof",
      "Fee distribution between creator, platform and treasury",
      "Admin dashboard for pools, users and reporting",
      "Deployed to your own infrastructure and domain",
    ],
  },

  "solana-casino-platform": {
    description:
      "A white-label crypto casino built on Solana with instant deposits, automated withdrawals, provably fair games and a full admin back-office.",
    longDescription:
      "A complete casino platform running on Solana settlement: deposits credit automatically within seconds, withdrawals process without manual approval, and every game outcome is provably fair so players can verify results independently. The white-label build means your branding, your edge percentage and your game list, running on our battle-tested engine. The admin back-office covers players, wallets, withdrawals, bonuses and reporting, and responsible gaming controls such as deposit limits and self-exclusion are included by default.",
    features: [
      "Instant automated deposits and withdrawals on Solana",
      "Provably fair games with on-chain verification",
      "Full white-label theming: your brand, your edge, your colours",
      "Admin back-office for players, wallets and reporting",
      "Responsible gaming tools: limits, self-exclusion, audit logs",
      "Multi-currency support including SPL tokens",
      "Anti-fraud monitoring and withdrawal risk scoring",
    ],
  },

  "telegram-sniper-bot-clone": {
    description:
      "A Telegram sniper bot that detects new liquidity pool launches within seconds and fires your configured trade the moment the pool opens.",
    longDescription:
      "Sniper bots exist because the first seconds of a new pool determine the entire trade. Ours monitors new pool creation across Solana, Ethereum and Base, confirms the pool is initialised and not a honeypot, then executes your configured buy within seconds. You set the amount, slippage, wallet and the conditions that trigger a trade, and every execution is logged with the realised entry price so you can measure whether the strategy is working.",
    features: [
      "Detects new pool launches within seconds",
      "Honeypot and rug-pull checks before every entry",
      "Configurable buy amount, slippage and wallet",
      "Multi-chain support: Solana, Ethereum and Base",
      "TP/SL and partial take-profit automation",
      "Trade log with realised entry price and P&L",
      "Telegram alerts on entry, exit and pool events",
    ],
  },

  "pos-blockchain-development": {
    description:
      "Proof-of-Stake blockchain development: consensus implementation, validator tooling, staking economics and network deployment.",
    longDescription:
      "Building a proof-of-stake chain means getting the hard parts right: slashing rules that discourage downtime without punishing honest restarts, stake unbonding that resists long-range attacks, and checkpointing that finalises history. We implement the consensus layer, validator and node tooling, wallet integration, and the staking reward economics, then deploy and monitor a live network. You receive the full node and validator source, deployment automation and monitoring, and documentation your own team can operate from.",
    features: [
      "PoS consensus with slashing and downtime penalties",
      "Unbonding periods resistant to long-range attacks",
      "Validator node tooling with metrics and alerting",
      "Staking, delegation and reward distribution",
      "Wallet integration with address and staking screens",
      "Genesis configuration and chain deployment automation",
      "Monitoring, alerting and fork-ready upgrade path",
    ],
  },

  "poa-blockchain-development": {
    description:
      "Proof-of-Authority blockchain development with fast finality, validator governance and permissioned network controls.",
    longDescription:
      "Proof-of-Authority suits consortium and permissioned networks where a known set of validators should make the fast decisions rather than an open economic auction. We implement the authority rotation and staking logic, the block production schedule, and the permissioning layer, then deploy the network with the tooling your operators need. The result is sub-second finality with an audit trail that maps cleanly to real-world governance, which is why it is common in supply chain, trade finance and institutional settlement.",
    features: [
      "Sub-second block finality",
      "Authority set management and rotation",
      "Permissioned accounts with role-based network access",
      "Validator governance and on-chain voting",
      "Full node and validator source code",
      "Genesis, deployment and network upgrade tooling",
      "Integrations for existing enterprise systems",
    ],
  },

  "testnet-evm-blockchain-development": {
    description:
      "A private EVM testnet for development and QA: Solidity deployment, low-latency RPC, block explorers and CI integration.",
    longDescription:
      "A shared public testnet is slow to get transactions into and unsuitable for repeatable automated testing. We deploy a private EVM testnet inside your infrastructure so your team controls block time, chain state and reset behaviour. It comes with fast RPC endpoints, an explorer for transaction debugging, pre-funded test accounts, and a CI hook so tests can deploy contracts against a fresh chain on every run.",
    features: [
      "Private EVM-compatible chain inside your infrastructure",
      "Low-latency RPC with automatic instamine for tests",
      "Block explorer for transaction and event debugging",
      "Pre-funded test accounts and faucet",
      "One-command chain reset for repeatable test runs",
      "CI integration for automated contract test suites",
      "Foundry and Hardhat compatible",
    ],
  },

  "cryptocurrency-casino-development": {
    description:
      "Provably fair crypto casino development: slots, crash, dice, blackjack and roulette with crypto deposits, withdrawals and a sportsbook module.",
    longDescription:
      "A casino platform has to satisfy two audiences at once. Players need to trust that outcomes are not manipulated, which means verifiable randomness committed before the round and revealed after. Operators need real-time control over balances, withdrawals and risk, which means a serious admin back-office. We build both sides: a game engine covering slots, crash, dice, blackjack, roulette and live dealer tables, provably fair commit-reveal randomness, multi-currency crypto settlement, fraud detection and withdrawal risk scoring, plus an affiliate and bonus system.",
    features: [
      "Provably fair commit-reveal randomness players can verify",
      "Slots, crash, dice, blackjack, roulette and live dealer tables",
      "Multi-currency crypto deposits and automated withdrawals",
      "Admin back-office with real-time player and balance management",
      "Fraud detection, withdrawal risk scoring and audit logs",
      "Sportsbook module with odds and settlement engine",
      "Affiliate system, bonuses and loyalty tiers",
    ],
  },

  "centralized-crypto-exchange-development": {
    description:
      "Centralised exchange development with a matching engine, custody wallets, KYC/AML, liquidity tools and a full trading front-end.",
    longDescription:
      "A central exchange is two systems that must never disagree: a matching engine that is deterministic and fast, and a custody layer that holds customer funds safely. We build a high-throughput matching engine with price-time priority and self-trade prevention, cold and hot wallet architecture with automated rebalancing, a complete KYC/AML and sanctions-screening pipeline, maker-taker fee tiers, and the trading front-end with charts, order books and position management. Designed for launch and scale, not a demo.",
    features: [
      "High-throughput matching engine with price-time priority",
      "Cold/hot custody wallets with automated rebalancing",
      "KYC/AML onboarding and sanctions screening",
      "Spot and margin trading with maker-taker fee tiers",
      "Liquidity pools, market making and OTC desk support",
      "Trading front-end with charts, order book and positions",
      "Admin console with risk, compliance and reporting",
    ],
  },

  "decentralized-crypto-exchange-development": {
    description:
      "DEX development with AMM pools, liquidity provision, yield farming and non-custodial trading across EVM chains.",
    longDescription:
      "A DEX puts the risk and the reward with the user, which changes the engineering entirely. Liquidity has to be safe against impermanent loss and sandwich attacks, the routing needs to find the best path across pools, and the contracts need to be auditable by the community. We build concentrated and constant-product AMMs, router and aggregator logic, liquidity provision and staking positions, farming and rewards distribution, and the front-end for swaps, pools and analytics, deployed on the chain you choose.",
    features: [
      "Constant-product and concentrated liquidity AMMs",
      "Router with multi-hop and best-path routing",
      "Liquidity provision positions with fee and IL analytics",
      "Yield farming and rewards distribution",
      "Anti-sandwich and slippage protections",
      "Non-custodial swaps across the supported chain",
      "Swap, pool and analytics front-end",
    ],
  },

  "token-development": {
    description:
      "Token development: ERC-20, BEP-20, SPL and other standards with safe deployment, vesting, tax controls and liquidity setup.",
    longDescription:
      "A token is small in code and large in consequence. A bug in the transfer logic, or an owner key that can mint without limit, destroys trust permanently. We implement the standard you need with the security properties that matter: capped or renounced minting, pausable transfers, optional transfer taxes with hard caps, liquidity lock, and vesting for team and treasury allocations. You get the audited contract source, deployment on your chosen chain, and liquidity setup with the burn or lock addresses published so buyers can verify.",
    features: [
      "ERC-20, BEP-20, SPL and chain-native token standards",
      "Capped supply or renounced mint authority",
      "Pausable transfers with optional tax controls",
      "Team and treasury vesting schedules",
      "Liquidity lock or burn with a published, verifiable address",
      "Deployment to your chosen chain with verified source",
      "Audit-ready contract source and tests",
    ],
  },

  "nft-marketplace-development": {
    description:
      "NFT marketplace development with minting, listings, auctions, royalties enforcement and creator royalty splits.",
    longDescription:
      "An NFT marketplace has to handle the unglamorous parts well: creator royalty enforcement that cannot be bypassed, gas-efficient batch operations, metadata storage that does not rot, and fraud filtering for stolen art. We build minting with allowlists and supply limits, fixed-price and auction sales, bidding and offers, royalty splitting and enforcement, IPFS-backed metadata, and the browsing, filtering and profile surfaces buyers expect. Creator dashboards and collection analytics included.",
    features: [
      "Minting with allowlists, caps and public sale phases",
      "Fixed-price listings, auctions, bids and offers",
      "Creator royalties with enforcement and splitting",
      "Gas-efficient batch minting and transfers",
      "IPFS-backed metadata with pinning",
      "Fraud and stolen-art filtering",
      "Creator dashboard with collection analytics",
    ],
  },

  "nft-minting-website-development": {
    description:
      "A dedicated NFT minting site with wallet connect, allowlists, live mint progress and on-chain verification.",
    longDescription:
      "A minting page has one job: take a buyer from landing to a successful mint as fast and as reliably as possible, without a failed transaction that costs them gas and loses the sale. We build responsive minting pages with wallet connection, allowlist gating, live supply and mint progress, multi-phase sale structure, quantity limits per wallet, and clear confirmation states. On-chain verification lets buyers confirm they received what they paid for.",
    features: [
      "Wallet connection across injected and mobile wallets",
      "Allowlist and allowlist-plus-public sale phases",
      "Live mint progress and remaining supply",
      "Per-wallet quantity limits",
      "On-chain verification of mint results",
      "Mobile-first responsive design with low-friction UX",
      "Gas-aware UX that avoids failed transactions",
    ],
  },

  "white-label-crypto-wallet-development": {
    description:
      "White-label multi-chain crypto wallet development: secure key management, transaction signing, swaps, staking and push notifications.",
    longDescription:
      "A wallet handles the highest-value operations in the product and has the smallest margin for error. We build white-label multi-chain wallets with secure key generation and encrypted storage, transaction signing with clear human-readable confirmation, fee estimation, token balances across chains, swaps and staking, biometric app-lock, and push notifications for inbound and outbound activity. The white-label layer means it carries your brand throughout while the custody and signing core stays hardened.",
    features: [
      "Secure key generation with encrypted local storage",
      "Multi-chain support with unified balance view",
      "Transaction signing with human-readable confirmation",
      "Built-in swaps, staking and token issuance screens",
      "Biometric app lock and PIN protection",
      "Push notifications for inbound and outbound activity",
      "White-label theming throughout the wallet experience",
    ],
  },

  "amm-dex-uniswap-clone": {
    description:
      "Uniswap-style AMM DEX development with liquidity pools, swap routing, fee tiers and analytics.",
    longDescription:
      "An AMM DEX needs correct pricing under arbitrage pressure and acceptable slippage for ordinary swaps. We implement constant-product swap logic, multi-hop routing, fee tiers, liquidity provision and position management, and front-end interfaces for swaps, pools, positions and analytics. Contracts are written for auditability and follow established interface patterns so wallets and tooling interoperate, which matters more than novelty when you are competing for liquidity.",
    features: [
      "Constant-product AMM with configurable fee tiers",
      "Multi-hop routing for best execution",
      "Liquidity provision and position management",
      "Slippage protection and price-impact warnings",
      "Analytics for pools, volume and fees",
      "Standard interfaces for wallet and aggregator compatibility",
      "Auditable, well-documented contract source",
    ],
  },

  "fix-walletconnect-relay-error": {
    description:
      "Diagnose and fix WalletConnect relay errors: session pairing failures, unsupported chain mismatches and connection timeouts.",
    longDescription:
      "WalletConnect is the single largest source of 'the wallet does not connect' support tickets, and the cause is usually one of a narrow set of misconfigurations. We trace the actual session lifecycle to find whether the failure is an expired relay, a project-id or chain mismatch, an unsupported chain on the wallet side, or a stale persisted session. We fix it and add the guards that stop it recurring, usually in a day, with a written explanation of what was wrong.",
    features: [
      "Full session lifecycle tracing to isolate the root cause",
      "Relay endpoint and project-id configuration fixes",
      "Chain allowlist mismatch correction",
      "Stale session and cached pairing cleanup",
      "Connection timeout and retry handling",
      "Wallet-side support matrix verification",
      "Written explanation and prevention guards",
    ],
  },

  "ai-cryptocurrency-application-development": {
    description:
      "AI-powered crypto applications: on-chain data indexing, market analysis, anomaly detection and trading assistants.",
    longDescription:
      "AI earns its place in crypto products where there is too much unstructured data for a human to read: millions of transactions, thousands of wallets, or a market moving faster than anyone can analyse. We build the indexing layer that makes that data usable, then the models on top: wallet behaviour clustering, wash-trading and anomaly detection, risk scoring, and LLM assistants that explain on-chain activity in plain language. Delivered with evaluation so you can see how it performs on your data, not just a demo.",
    features: [
      "On-chain data ingestion and normalised indexing",
      "Wallet behaviour clustering and entity resolution",
      "Wash-trading, anomaly and fraud detection",
      "Risk scoring models with explainable signals",
      "LLM assistants that summarise on-chain activity",
      "Market analysis and alerting pipelines",
      "Evaluation harness with real-data benchmarks",
    ],
  },
};

const path = resolve(process.argv[2] ?? target);
const json = JSON.parse(readFileSync(path, "utf8"));

if (!json.service) throw new Error("No `service` key in locale file");

let written = 0;
for (const [slug, copy] of Object.entries(COPY)) {
  const entry = json.service[slug];
  if (!entry) {
    console.warn(`  ! no existing entry for ${slug}, creating one`);
    json.service[slug] = {};
  }

  const hadPlaceholder =
    !entry.name ||
    String(entry.name).startsWith("Description for") ||
    String(entry.description ?? "").startsWith("Description for") ||
    String(entry.p?.description ?? "").startsWith("Detailed description for");

  json.service[slug].name = entry.name && !String(entry.name).startsWith("Description for")
    ? entry.name
    : slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  json.service[slug].description = copy.description;
  json.service[slug].p = {
    description: copy.longDescription,
    list: copy.features,
  };

  if (hadPlaceholder || !entry.p?.list?.length) written += 1;
}

writeFileSync(path, `${JSON.stringify(json, null, 2)}\n`, "utf8");
console.log(`Authored copy for ${Object.keys(COPY).length} services (${written} were placeholders) -> ${path}`);