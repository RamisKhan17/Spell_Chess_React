import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const protectedRoutes = ["/home"];
const publicRoutes = ["/login", "/sign-up"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;
  const session = await decrypt(cookie);
  const isLoggedIn = Boolean(session?.userId);
  const isRoot = path === "/";

  // Redirect unauthenticated users to /login
  if (!isLoggedIn && (isProtectedRoute || isRoot)) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Redirect authenticated users to /home
  if (isLoggedIn && (isPublicRoute || isRoot)) {
    return NextResponse.redirect(new URL("/home", req.nextUrl));
  }
  return NextResponse.next();
}

// Add this at the absolute bottom of the file
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
