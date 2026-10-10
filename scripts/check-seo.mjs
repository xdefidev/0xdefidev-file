/**
 * Post-build SEO regression guard.
 *
 * This is the check for the exact problem that made the old site rank badly:
 * `getStaticPaths` emitted `/services/*` for all 10 locales while only English
 * had copy, so roughly 270 indexed pages shipped a raw i18n key as their
 * <title> ("service.custom-software-development.name").
 *
 * Two things are asserted:
 *   1. No rendered page leaks a raw `service.<slug>...` key into its HTML.
 *   2. Any page that does leak must carry a noindex robots directive.
 *
 * Run after `next build`:  node scripts/check-seo.mjs
 */
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const BUILD = ".next/server/pages";

if (!existsSync(BUILD)) {
  console.error("No .next/server/pages found. Run `npm run build` first.");
  process.exit(1);
}

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (full.endsWith(".html")) acc.push(full);
  }
  return acc;
}

// Matches i18n keys that escaped into the markup, e.g.
// "service.custom-software-development.name" or "service.get_exact_quote".
const KEY_PATTERN = /(?:"|&quot;|>)\s*service\.[a-z0-9-]+(?:\.[a-z0-9_]+)+\s*(?:<|"|&quot;)/gi;
const NOINDEX_PATTERN = /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i;

const files = walk(BUILD);

if (files.length === 0) {
  console.error("No prerendered HTML found in .next/server/pages.");
  process.exit(1);
}

const leaks = [];
let noindexed = 0;
let indexed = 0;

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const hasNoindex = NOINDEX_PATTERN.test(html);

  if (hasNoindex) noindexed++;
  else indexed++;

  if (KEY_PATTERN.test(html)) {
    KEY_PATTERN.lastIndex = 0;
    leaks.push({ file: relative(BUILD, file), hasNoindex });
  }
  KEY_PATTERN.lastIndex = 0;
}

console.log(`Scanned ${files.length} prerendered pages.`);
console.log(`  index:follow  ${indexed}`);
console.log(`  noindex       ${noindexed}`);

if (leaks.length === 0) {
  console.log("\nOK - no raw i18n keys leaked into any page.");
  process.exit(0);
}

const exposed = leaks.filter((l) => !l.hasNoindex);

console.log(`\n${leaks.length} page(s) leak a raw i18n key:`);
for (const leak of leaks.slice(0, 25)) {
  console.log(`  ${leak.hasNoindex ? "[noindex]" : "[INDEXED!]"} ${leak.file}`);
}
if (leaks.length > 25) console.log(`  ... and ${leaks.length - 25} more`);

if (exposed.length > 0) {
  console.error(
    `\n${exposed.length} of these are indexable, which is the exact SEO bug this guards against.`,
  );
  process.exit(1);
}

console.log("\nAll leaking pages are noindexed, so they cannot be crawled.");
process.exit(0);