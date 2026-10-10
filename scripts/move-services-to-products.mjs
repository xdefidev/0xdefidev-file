/**
 * Move clone/volume-bot services into the products collection.
 *
 * Services are engineering time scoped per client; products are existing code
 * delivered as-is. These six are shipped source code, so they belong in
 * `data/products.js` where they can carry Product structured data, a fixed
 * licence and a real product image.
 *
 * Idempotent: skipping slugs that are already products.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

const MOVE = [
  "pump-fun-clone-development",
  "amm-dex-uniswap-clone",
  "pinksale-launchpad-clone",
  "telegram-sniper-bot-clone",
  "solana-volume-bot-telegram",
  "volume-holder-rank-bot-solana-robinhood",
];

/** Remove the object literal that contains `slug: "<slug>"`. */
function removeObjectForSlug(src, slug) {
  const marker = `slug: "${slug}"`;
  const at = src.indexOf(marker);
  if (at === -1) return { src, removed: false };

  // Walk back to the line holding the opening brace of this object.
  let start = src.lastIndexOf("\n  {\n", at);
  if (start === -1) return { src, removed: false };
  start += 1; // point at the two spaces before {

  // Brace-count forward from the opening brace to its match.
  let i = src.indexOf("{", start);
  let depth = 0;
  let end = -1;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) { end = i; break; }
    }
  }
  if (end === -1) return { src, removed: false };

  // Consume the trailing comma and the newline that followed the object.
  let after = end + 1;
  while (after < src.length && /[,\s]/.test(src[after])) after++;
  if (src[after] === "\n") after++;

  return { src: src.slice(0, start) + src.slice(after), removed: true };
}

const servicesPath = resolve(root, "data/services.js");
let servicesSrc = readFileSync(servicesPath, "utf8");

const removed = [];
for (const slug of MOVE) {
  const res = removeObjectForSlug(servicesSrc, slug);
  servicesSrc = res.src;
  if (res.removed) removed.push(slug);
}

writeFileSync(servicesPath, servicesSrc);
console.log(`removed from services: ${removed.length}/${MOVE.length}`);
for (const s of removed) console.log(`  - ${s}`);
const missing = MOVE.filter((s) => !removed.includes(s));
if (missing.length) console.log(`NOT FOUND (already moved?): ${missing.join(", ")}`);
