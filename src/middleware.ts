import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"
import createMiddleware from "next-intl/middleware"
import { routing } from "@/lib/i18n/routing"

const SESSION_COOKIE = "pflege-session"

const publicPaths = ["/", "/login", "/register", "/reset-password", "/demo", "/lernen", "/dashboard"]
const apiPublicPaths = ["/api/health", "/api/auth/", "/api/ki-feedback", "/api/ki-chat"]

const intlMiddleware = createMiddleware(routing)

function getSecret() {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error("JWT_SECRET is not set")
  return new TextEncoder().encode(secret)
}

function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(de|ar|tr)(.*)$/)
  return match ? match[2] || "/" : pathname
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow API routes directly (no locale prefix)
  if (pathname.startsWith("/api/")) {
    if (apiPublicPaths.some((p) => pathname.startsWith(p))) {
      return NextResponse.next()
    }

    // API auth check
    const token = request.cookies.get(SESSION_COOKIE)?.value
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
      await jwtVerify(token, getSecret())
      return NextResponse.next()
    } catch {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  // Allow static files and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Strip locale prefix to check if the underlying path is public
  const pathWithoutLocale = stripLocale(pathname)

  // Allow public pages — let intl middleware handle locale
  if (publicPaths.some((p) => pathWithoutLocale === p || pathWithoutLocale.startsWith(p + "/"))) {
    return intlMiddleware(request)
  }

  // Protected routes: check session
  const token = request.cookies.get(SESSION_COOKIE)?.value

  if (!token) {
    const loginUrl = new URL("/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  try {
    const { payload } = await jwtVerify(token, getSecret())

    // Role-based route protection
    if (
      pathWithoutLocale.startsWith("/teacher") &&
      payload.role !== "teacher" &&
      payload.role !== "principal" &&
      payload.role !== "admin"
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    if (
      pathWithoutLocale.startsWith("/admin") &&
      payload.role !== "admin"
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    // Authenticated — apply intl middleware for locale handling
    return intlMiddleware(request)
  } catch {
    // Invalid token — redirect to login
    const response = NextResponse.redirect(new URL("/login", request.url))
    response.cookies.delete(SESSION_COOKIE)
    return response
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
}
