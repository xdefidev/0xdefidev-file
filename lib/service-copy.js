import { readFileSync } from "fs";
import { join } from "path";

/**
 * Server-side access to the locale JSON.
 *
 * next-i18next resolves translations on the client, but a page needs to know
 * *before* it renders whether the current locale actually has copy. If it
 * does not, the page emits a noindex tag instead of shipping a raw key such
 * as `service.foo.name` as its <title>.
 */

const CACHE = new Map();

const LOCALES_DIR = join(process.cwd(), "public", "locales");

export function getCommon(locale = "en") {
  if (CACHE.has(locale)) return CACHE.get(locale);

  let data;
  try {
    data = JSON.parse(readFileSync(join(LOCALES_DIR, locale, "common.json"), "utf8"));
  } catch {
    // Unknown locale: fall back to English so the page still renders.
    try {
      data = JSON.parse(readFileSync(join(LOCALES_DIR, "en", "common.json"), "utf8"));
    } catch {
      data = {};
    }
  }

  CACHE.set(locale, data);
  return data;
}

/**
 * Resolved copy for one service or product, plus whether the requested
 * locale actually carries it.
 */
export function resolveCopy(locale, slug, { kind = "service", fallbackLocale = "en" } = {}) {
  const primary = getCommon(locale)?.[kind]?.[slug];
  const fallback = getCommon(fallbackLocale)?.[kind]?.[slug];

  const useFallback = !primary || !String(primary.description ?? "").trim();
  const source = useFallback ? fallback : primary;

  const translated = Boolean(primary && String(primary.description ?? "").trim());

  return {
    translated,
    usedFallback: useFallback && Boolean(fallback),
    name: source?.name ?? "",
    description: source?.description ?? "",
    longDescription: source?.p?.description ?? source?.description ?? "",
    features: Array.isArray(source?.p?.list) ? source.p.list : [],
  };
}

/** Localised page strings with the same fallback contract. */
export function resolvePage(locale, key, fallbackKey, fallbackLocale = "en") {
  const primary = getCommon(locale)?.[key];
  if (primary) return primary;

  const fallback = getCommon(fallbackLocale)?.[fallbackKey];
  return fallback ?? null;
}