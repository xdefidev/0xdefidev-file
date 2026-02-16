import { NextResponse } from 'next/server';

// Force English locale for specific routes (no translations)
export function middleware(req) {
  const { nextUrl } = req;
  const { pathname, locale } = nextUrl;

  const exempt = (
    pathname === '/services' ||
    pathname === '/services/' ||
    pathname.startsWith('/categories')
  );

  if (exempt && locale !== 'en') {
    const url = nextUrl.clone();
    url.locale = 'en';
    // Redirect so navigation reflects correct locale behavior
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Apply to all paths so we can selectively handle inside middleware
export const config = {
  matcher: ['/((?!_next|api|static|.*\\..*).*)'],
};
