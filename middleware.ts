import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

    // 1. Add 'x-pathname' header for canonical URL generation in layout.tsx
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', url.pathname);

    // 2. Smart Redirects (Optional: Add specific logic here if needed)
    // For now, we rely on the custom 404 page for missing routes.
    // Example: Redirecting 'sitemap.xml' if it was requested incorrectly?
    // Usually Next.js handles sitemap.xml automatically if generated.

    // If we wanted to redirect all UPPERCASE to lowercase (good for SEO):
    if (url.pathname !== url.pathname.toLowerCase()) {
        url.pathname = url.pathname.toLowerCase();
        return NextResponse.redirect(url);
    }

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (images, etc)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
