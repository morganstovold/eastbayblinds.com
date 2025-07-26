import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/admin")) {
    try {
      const sessionCookie = request.cookies.get("better-auth.session_token");
      
      if (!sessionCookie?.value) {
        // Log for debugging browser compatibility issues
        console.log(`Auth middleware: No session cookie found for ${request.headers.get('user-agent')}`);
        
        // Add a header to help identify cookie-related redirects
        const response = NextResponse.redirect(new URL("/auth/signin", request.url));
        response.headers.set('X-Auth-Redirect-Reason', 'missing-session-cookie');
        return response;
      }
      
      // Log successful cookie detection
      console.log(`Auth middleware: Session cookie found for ${request.headers.get('user-agent')}`);
      
    } catch (error) {
      console.error("Auth middleware error:", error);
      console.error("User Agent:", request.headers.get('user-agent'));
      console.error("Request URL:", request.url);
      
      const response = NextResponse.redirect(new URL("/auth/signin", request.url));
      response.headers.set('X-Auth-Redirect-Reason', 'middleware-error');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
