import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/admin")) {
    try {
      const sessionCookie = request.cookies.get("better-auth.session_token");
      
      console.log("Middleware - Admin access attempt:", {
        pathname,
        hasCookie: !!sessionCookie?.value,
        cookieValue: sessionCookie?.value ? `${sessionCookie.value.substring(0, 10)}...` : 'none',
        userAgent: request.headers.get('user-agent')?.substring(0, 50),
        origin: request.headers.get('origin'),
        host: request.headers.get('host')
      });
      
      if (!sessionCookie?.value) {
        console.log("Middleware - No session cookie, redirecting to signin");
        return NextResponse.redirect(new URL("/auth/signin", request.url));
      }
      
      console.log("Middleware - Session cookie found, allowing access");
    } catch (error) {
      console.error("Auth middleware error:", error);
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
