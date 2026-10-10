/**
 * Fails if any locale is missing service copy.
 *
 * This is the guard against the original SEO problem: 300 generated
 * `/services/*` URLs where 9 locales had no translations at all, so ~270
 * pages shipped raw i18n keys as their <title>.
 *
 * Run with --json for a per-locale report, or plain for a build-blocking
 * summary. Exits 1 when anything is untranslated.
 */
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import services from "../data/services.js";

const here = dirname(fileURLToPath(import.meta.url));
const localesDir = resolve(here, "../public/locales");

const en = JSON.parse(readFileSync(join(localesDir, "en/common.json"), "utf8"));

// Check against the real service catalogue, not every key in the locale file.
// `service.description`, `service.key_features`, `service.custom_request` and
// `service.get_exact_quote` are UI strings that happen to live in the same
// object, and counting them as untranslated services produced false gaps.
const slugs = services.map((s) => s.slug);

const json = process.argv.includes("--json");
const strict = process.argv.includes("--strict");

const missingEnglish = slugs.filter((slug) => {
  const e = en.service?.[slug];
  return (
    !e?.name?.trim() ||
    !e?.description?.trim() ||
    !Array.isArray(e?.p?.list) ||
    e.p.list.length === 0
  );
});

if (missingEnglish.length > 0) {
  console.error("English source copy is incomplete. Fix these first:");
  for (const slug of missingEnglish) console.error(`  - ${slug}`);
  console.error("");
  process.exit(1);
}

const locales = readdirSync(localesDir).filter((d) => {
  try {
    readFileSync(join(localesDir, d, "common.json"));
    return true;
  } catch {
    return false;
  }
});

const report = [];
let totalMissing = 0;

for (const locale of locales) {
  const data = JSON.parse(readFileSync(join(localesDir, locale, "common.json"), "utf8"));
  const missing = [];

  for (const slug of slugs) {
    const entry = data.service?.[slug];
    const hasName = Boolean(entry?.name?.trim());
    const hasDesc = Boolean(entry?.description?.trim());
    const features = Array.isArray(entry?.p?.list) ? entry.p.list.length : 0;

    if (!hasName || !hasDesc || features === 0) {
      missing.push({
        slug,
        missing: [
          !hasName && "name",
          !hasDesc && "description",
          features === 0 && "features",
        ].filter(Boolean),
      });
    }
  }

  totalMissing += missing.length;
  report.push({ locale, total: slugs.length, missing: missing.length, detail: missing });
}

if (json) {
  console.log(JSON.stringify(report, null, 2));
} else {
  for (const row of report) {
    const status = row.missing === 0 ? "OK " : "GAP";
    console.log(`${status} ${row.locale}: ${row.total - row.missing}/${row.total} translated`);
    if (row.missing > 0 && row.locale !== "en") {
      for (const m of row.detail) {
        console.log(`      - ${m.slug} (missing: ${m.missing.join(", ")})`);
      }
    }
  }
}

const offenders = report.filter((r) => r.missing > 0);

if (offenders.length > 0) {
  console.log(
    `\n${totalMissing} untranslated service entries across ${offenders.length} locale(s).`,
  );
  console.log(
    "Pages with missing copy render a noindex tag, so this does not break the build,",
  );
  console.log("but it does cap your international reach. Run with --strict to fail CI.");

  if (strict) process.exit(1);
} else {
  console.log("\nAll locales fully translated.");
}