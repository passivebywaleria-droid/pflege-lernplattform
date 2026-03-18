import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

const SESSION_COOKIE = "pflege-session"

const publicPaths = ["/", "/login", "/register", "/reset-password"]
const apiPublicPaths = ["/api/health", "/api/auth/"]

function getSecret() {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error("JWT_SECRET is not set")
  return new TextEncoder().encode(secret)
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow API public paths
  if (apiPublicPaths.some((p) => pathname.startsWith(p))) {
    return NextResponse.next()
  }

  // Allow static files and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Allow public pages
  if (publicPaths.includes(pathname)) {
    return NextResponse.next()
  }

  // Check session for protected routes
  const token = request.cookies.get(SESSION_COOKIE)?.value

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    const { payload } = await jwtVerify(token, getSecret())

    // Role-based route protection
    if (pathname.startsWith("/teacher") && payload.role !== "teacher" && payload.role !== "admin") {
      return NextResponse.redirect(new URL("/home", request.url))
    }

    if (pathname.startsWith("/admin") && payload.role !== "admin") {
      return NextResponse.redirect(new URL("/home", request.url))
    }

    return NextResponse.next()
  } catch {
    // Invalid token — redirect to login
    const response = NextResponse.redirect(new URL("/login", request.url))
    response.cookies.delete(SESSION_COOKIE)
    return response
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
