/**
 * Sync service catalogue copy from English into every other locale.
 *
 * Notes:
 *  - This does NOT call a translation API. It seeds each locale's file so the
 *    structure matches English, and leaves `""` for any string you want a
 *    human or a translation service to fill in. Empty strings are treated as
 *    "missing" by the page, which then falls back to English and sets noindex.
 *
 * Usage:
 *   node scripts/sync-locales.mjs --seed     # create the structure, empty strings
 *   node scripts/sync-locales.mjs --fill <file.json>
 *
 * Run `node scripts/verify-translations.mjs` afterwards to see what is still
 * missing before shipping.
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const localesDir = resolve(here, "../public/locales");
const enPath = join(localesDir, "en/common.json");

const args = process.argv.slice(2);
const mode = args[0] ?? "--seed";

const en = JSON.parse(readFileSync(enPath, "utf8"));

function localeFiles() {
  return readdirSync(localesDir)
    .filter((d) => d !== "en")
    .filter((d) => {
      try {
        readFileSync(join(localesDir, d, "common.json"));
        return true;
      } catch {
        return false;
      }
    });
}

if (mode === "--fill") {
  const target = args[1];
  if (!target) throw new Error("Usage: --fill <translated-common.json>");
  const translated = JSON.parse(readFileSync(target, "utf8"));
  const locale = args[2];
  if (!locale) throw new Error("Usage: --fill <file.json> <locale>");
  const path = join(localesDir, locale, "common.json");
  const existing = JSON.parse(readFileSync(path, "utf8"));
  existing.service = { ...(existing.service ?? {}), ...(translated.service ?? {}) };
  writeFileSync(path, `${JSON.stringify(existing, null, 2)}\n`, "utf8");
  console.log(`Merged ${Object.keys(translated.service ?? {}).length} entries into ${locale}`);
  process.exit(0);
}

let created = 0;
for (const locale of localeFiles()) {
  const path = join(localesDir, locale, "common.json");
  const current = JSON.parse(readFileSync(path, "utf8"));

  current.service = current.service ?? {};

  for (const [slug, entry] of Object.entries(en.service)) {
    if (!current.service[slug]) {
      current.service[slug] = {
        name: "",
        description: "",
        p: { description: "", list: [] },
      };
      created += 1;
    }
  }

  writeFileSync(path, `${JSON.stringify(current, null, 2)}\n`, "utf8");
}

console.log(
  `Seeded service structure for ${localeFiles().length} locales (${created} new entries).`,
);
console.log("Fill in the empty strings, then run verify-translations.mjs.");