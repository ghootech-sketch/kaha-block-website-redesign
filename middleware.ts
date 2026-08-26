import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return;
  }

  const pathnameHasLocale = pathname.startsWith('/en') || pathname.startsWith('/id');
  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/id${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|images|assets|.*\\..*).*)',
  ],
};
