import { NextResponse } from 'next/server';

// Pages that only exist in English. Category content is authored in
// `data/categories.js`, services fall back to slug-derived names, products
// have no translation layer, and legal/cart/checkout are EN-only — serving
// them under another locale produces either raw i18n keys or a soft
// duplicate with a wrong canonical.
const ENGLISH_ONLY = [
  /^\/services\/?$/, /^\/services\//,
  /^\/categories\/?$/, /^\/categories\//,
  /^\/products\/?$/, /^\/products\//,
  /^\/blog\//, // blog posts are EN-only; the /blog index stays localized
  /^\/privacy-policy\/?$/,
  /^\/terms-of-service\/?$/,
  /^\/cart\/?$/, /^\/cart\//,
  /^\/checkout\/?$/, /^\/checkout\//,
];

export function middleware(req) {
  const { nextUrl } = req;
  const { pathname, locale } = nextUrl;

  if (locale && locale !== 'en' && ENGLISH_ONLY.some((re) => re.test(pathname))) {
    const url = nextUrl.clone();
    url.pathname = pathname.replace(/^\/(?:[a-z]{2})\//, '/');
    url.locale = 'en';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|static|.*\\..*).*)'],
};