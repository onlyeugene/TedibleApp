import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  authPrefix,
  authRoutes,
  publicRoutes,
  defaultRedirectPath,
} from "./routes";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the user is authenticated
  const isAuthenticated = !!request.cookies.get("next-auth.session-token");

  // Check if the requested path is an auth route
  const isAuthRoute = authRoutes.includes(pathname);

  // Check if the requested path is a public route
  const isPublicRoute = publicRoutes.includes(pathname);

  // Allow all requests to auth API routes (/api/auth/*)
  if (pathname.startsWith(authPrefix)) {
    return NextResponse.next();
  }

  // Redirect authenticated users away from auth routes
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL(defaultRedirectPath, request.url));
  }

  // Allow authenticated users to access protected routes
  if (isAuthenticated) {
    return NextResponse.next();
  }

  // Allow public routes for everyone
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Allow auth routes for non-authenticated users
  if (!isAuthenticated && isAuthRoute) {
    return NextResponse.next();
  }

  // Redirect non-authenticated users to login
  return NextResponse.redirect(new URL("/auth/login", request.url));
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
