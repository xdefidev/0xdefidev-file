# Translation glossary & rules

You are translating `public/locales/en/common.json` for the XDefiDev website
(xdefidev.xyz) — a Web3 / blockchain / AI development agency. This is technical
marketing copy for developers, traders and crypto project founders.

## Absolute rules

1. **Never change the JSON structure.** Same keys, same nesting, same order as
   the English file. Only translate the string *values*.
2. **Preserve every `{{placeholder}}`** exactly as written (e.g.
   `"startingFrom": "Starting from {{price}}"`). Never translate the text
   inside `{{ }}`.
3. **Never leave a string empty** and never leave an English string untranslated
   (except where the rule below says to keep it in English).
4. **Write natural, confident, native-sounding copy.** Do not translate word by
   word. Native technical writers write this, not machines. Short sentences.
   Concrete claims. No fluff, no hype adjectives, no exclamation marks.
5. **Keep the professional tone.** The English is direct and specific. Match it.

## Keep these in English (do not translate)

**Product / brand names:**
Solana, Ethereum, Base, Robinhood Chain, Uniswap, Raydium, Orca, Meteora,
Pump.fun, Pinksale, TON, Telegram, Discord, WhatsApp, Slack, Jito, IPFS,
Stripe, PayPal, n8n, OpenAI, Anthropic, Vercel, Netlify, AWS, GCP, Azure,
Docker, Kubernetes, Terraform, Foundry, Hardhat, Next.js, React, React Native,
Flutter, WalletConnect, Aerodrome, PancakeSwap, Curve

**Technical acronyms / standards (keep as-is in every language):**
ERC-20, BEP-20, SPL, AMM, DEX, CEX, KYC, AML, OTC, IL, P&L, RPC, CI/CD, VPS,
SaaS, API, REST, GraphQL, RAG, LLM, AI, PoS, PoA, NFT, DeFi, Web3, UX, UI,
DevOps, CRM, TP/SL, MEV, IC

**Common loanwords already used in the target language's tech writing:**
When a term is standard in the target language's developer community (e.g.
"dashboard", "frontend", "backend", "wallet", "smart contract", "block",
"validator", "staking", "liquidity pool", "slippage"), use the term the local
community actually uses. If the local community uses a transliteration or the
English word, keep it.

## Service names (`service.*.name`)

Translate these naturally — they are product/feature names shown as headings.
Examples of intent:
- "Solana Volume Bot Telegram" → keep "Solana" and "Telegram", translate the rest.
- "Fix WalletConnect Relay Error" → keep "WalletConnect", translate the rest.
- "Volume, Holder & Rank Bot — Solana and Robinhood Chain" → translate the
  descriptors, keep the chain names.

## Lists (`service.*.p.list`)

Each item is a short feature bullet. Keep them sentence-case fragments (no
trailing period in English — match that convention in the target language).
Keep them punchy. Do not expand them into paragraphs.

## Product / brand context

- The company is **XDefiDev** (never translate this name).
- Contacts are Telegram, WhatsApp, Discord, Email — keep those product names.
- Currency shown is USD. Keep "$" formatting when it appears.

## RTL note (Arabic)

You are translating into Arabic. The app sets `dir="rtl"` automatically on the
`<html>` tag for this locale, so you do **not** need to add directional marks.
Just write natural modern standard Arabic (فصحى) appropriate for a tech
product — not dialect.

## Verification

After writing your file, run this from the repo root and fix anything it
reports:

```
node scripts/validate-locale.mjs <locale>
```

It checks: valid JSON, no missing keys, no empty strings, no untranslated
strings identical to English, matching `{{placeholders}}`, matching array
lengths. It must print `OK <locale>` before you finish.

Also cross-check against the English file yourself: every service slug that
exists in `en` must exist in your locale with a non-empty `name`,
`description`, `p.description` and `p.list` array.

## Output

Write the complete translated file to:
`public/locales/<locale>/common.json`

Do not create any other files. Do not modify the English file or any code.
