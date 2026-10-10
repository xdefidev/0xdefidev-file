import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const localesDir = resolve(here, "../public/locales");

const locales = process.argv.slice(2);
if (locales.length === 0) {
  console.error("Usage: node scripts/validate-locale.mjs <locale> [locale...]");
  process.exit(1);
}

const flatten = (obj, prefix = "", out = {}) => {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v !== null && typeof v === "object" && !Array.isArray(v)) {
      flatten(v, key, out);
    } else if (Array.isArray(v)) {
      out[key] = v;
    } else {
      out[key] = v;
    }
  }
  return out;
};

const enRaw = JSON.parse(readFileSync(join(localesDir, "en/common.json"), "utf8"));
const enFlat = flatten(enRaw);

let failed = false;

for (const locale of locales) {
  const issues = [];
  let raw;
  try {
    raw = JSON.parse(readFileSync(join(localesDir, `${locale}/common.json`), "utf8"));
  } catch (e) {
    console.error(`${locale}: INVALID JSON - ${e.message}`);
    failed = true;
    continue;
  }

  const flat = flatten(raw);

  for (const key of Object.keys(enFlat)) {
    if (!(key in flat)) {
      issues.push(`MISSING KEY: ${key}`);
      continue;
    }
    const val = flat[key];
    const enVal = enFlat[key];

    if (Array.isArray(enVal)) {
      if (!Array.isArray(val)) issues.push(`TYPE MISMATCH (array): ${key}`);
      else if (val.length !== enVal.length) issues.push(`ARRAY LENGTH ${val.length} != ${enVal.length}: ${key}`);
      else val.forEach((item, i) => {
        if (typeof item !== "string" || !item.trim()) issues.push(`EMPTY ARRAY ITEM [${i}]: ${key}`);
        else if (item === enVal[i] && locale !== "en") issues.push(`UNTRANSLATED ARRAY ITEM [${i}]: ${key}`);
      });
      continue;
    }

    if (typeof val !== "string") {
      issues.push(`NOT A STRING: ${key}`);
      continue;
    }
    if (!val.trim()) {
      issues.push(`EMPTY: ${key}`);
      continue;
    }
    if (locale !== "en" && val === enVal) {
      issues.push(`UNTRANSLATED (identical to EN): ${key}`);
    }

    // Preserve ICU-style interpolation placeholders
    const ph = (enVal.match(/{{\s*[\w.]+\s*}}/g) || []).sort().join("|");
    const ph2 = (val.match(/{{\s*[\w.]+\s*}}/g) || []).sort().join("|");
    if (ph !== ph2) issues.push(`PLACEHOLDER MISMATCH (en="${ph}" got="${ph2}"): ${key}`);
  }

  const extra = Object.keys(flat).filter((k) => !(k in enFlat));
  for (const k of extra) issues.push(`EXTRA KEY (not in EN): ${k}`);

  if (issues.length === 0) {
    console.log(`OK   ${locale}  (${Object.keys(flat).length} strings)`);
  } else {
    console.log(`FAIL ${locale}  (${issues.length} issues)`);
    for (const i of issues.slice(0, 40)) console.log(`       ${i}`);
    if (issues.length > 40) console.log(`       ... and ${issues.length - 40} more`);
    failed = true;
  }
}

process.exit(failed ? 1 : 0);
