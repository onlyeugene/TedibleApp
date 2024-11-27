import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  authPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check for both production and development cookies
  const sessionToken = 
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value ||
    request.cookies.get("next-auth.callback-url")?.value;
    
  const isAuthenticated = !!sessionToken;

  // Enhanced debugging for both production and development
  console.log({
    pathname,
    isAuthenticated,
    sessionToken: !!sessionToken,
    isAuthRoute: authRoutes.includes(pathname),
    isPublicRoute: publicRoutes.includes(pathname),
    isAuthPrefix: pathname.startsWith(authPrefix),
  });

  // Allow all requests to auth API routes (/api/auth/*)
  if (pathname.startsWith(authPrefix)) {
    return NextResponse.next();
  }

  // Redirect non-authenticated users to login for protected routes
  if (!isAuthenticated && !publicRoutes.includes(pathname) && !authRoutes.includes(pathname) && !pathname.startsWith(authPrefix)) {
    console.log('Redirecting to login page...');
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();

}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/|assets/).*)",
    "/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)",
  ],
};
