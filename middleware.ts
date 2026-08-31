import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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
  
  // Skip public files and api routes
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    pathname.match(/\.(.*)$/)
  ) {
    return applyVercelRobotsHeader(request, NextResponse.next());
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return applyVercelRobotsHeader(request, NextResponse.next());
  }

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  const redirectResponse = NextResponse.redirect(request.nextUrl);
  return applyVercelRobotsHeader(request, redirectResponse);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
  ],
};
