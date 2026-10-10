import { NextResponse } from 'next/server';

// Service and category pages only exist in English. Category content is
// authored in `data/categories.js` and services fall back to slug-derived
// names, so serving them under another locale produces raw i18n keys.
const ENGLISH_ONLY = [/^\/services\/?$/, /^\/services\//, /^\/categories\/?$/, /^\/categories\//];

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