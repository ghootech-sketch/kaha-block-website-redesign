import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { legacyRedirects } from './lib/redirects';

const locales = ['id', 'en'];
const defaultLocale = 'id';

function applyVercelRobotsHeader(request: NextRequest, response: NextResponse): NextResponse {
  const host = request.headers.get('host') || request.nextUrl.hostname || '';
  if (host.endsWith('.vercel.app') || host.includes('.vercel.app')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public files, next assets, videos, and api routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/videos') ||
    pathname.startsWith('/api/') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/icon.png' ||
    pathname === '/favicon.ico' ||
    pathname.match(/\.(.*)$/)
  ) {
    return applyVercelRobotsHeader(request, NextResponse.next());
  }

  // 1. Check legacy WordPress redirects (handles both trailing slash and non-trailing slash in 1 hop)
  const normalizedPath = pathname.length > 1 && pathname.endsWith('/')
    ? pathname.replace(/\/+$/, '')
    : pathname;

  if (normalizedPath in legacyRedirects) {
    const destinationPath = legacyRedirects[normalizedPath];
    const destinationUrl = new URL(destinationPath, request.url);
    destinationUrl.search = request.nextUrl.search;
    const redirectResponse = NextResponse.redirect(destinationUrl, 308);
    return applyVercelRobotsHeader(request, redirectResponse);
  }

  // 2. Handle root path redirect to default locale (/ -> /id)
  if (pathname === '/') {
    const destinationUrl = new URL(`/${defaultLocale}`, request.url);
    destinationUrl.search = request.nextUrl.search;
    const redirectResponse = NextResponse.redirect(destinationUrl, 308);
    return applyVercelRobotsHeader(request, redirectResponse);
  }

  // 3. Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return applyVercelRobotsHeader(request, NextResponse.next());
  }

  // 4. Redirect non-locale path to default locale path (e.g. /products -> /id/products)
  const destinationUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  destinationUrl.search = request.nextUrl.search;
  const redirectResponse = NextResponse.redirect(destinationUrl, 308);
  return applyVercelRobotsHeader(request, redirectResponse);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|_vercel|favicon.ico|icon.png|images/|videos/).*)',
  ],
};
