import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users, schools, loginTokens } from "@/lib/db/schema"
import { hashMagicToken } from "@/lib/auth/magic-link"
import { createSession } from "@/lib/auth/session"
import { SITE_URL } from "@/lib/seo/site"
import { eq } from "drizzle-orm"

// Öffentlicher Endpunkt (middleware apiPublicPaths enthält "/api/auth/").
// Wird aus der Magic-Link-Mail per GET aufgerufen.

/**
 * Nur interne Pfade als Redirect-Ziel zulassen (Open-Redirect-Schutz).
 * Muss mit genau einem "/" beginnen (nicht "//", nicht "/\").
 */
function safeNext(next: string | null): string | null {
  if (!next) return null
  if (!next.startsWith("/")) return null
  if (next.startsWith("//") || next.startsWith("/\\")) return null
  return next
}

function redirectTo(path: string): NextResponse {
  return NextResponse.redirect(new URL(path, SITE_URL))
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token")
  const next = safeNext(request.nextUrl.searchParams.get("next"))

  if (!token) {
    return redirectTo("/de/login?error=magic_invalid")
  }

  try {
    const tokenHash = hashMagicToken(token)
    const [record] = await db
      .select()
      .from(loginTokens)
      .where(eq(loginTokens.tokenHash, tokenHash))
      .limit(1)

    // Ungültig / bereits benutzt / abgelaufen → freundlich zum Login.
    if (!record || record.usedAt || record.expiresAt.getTime() < Date.now()) {
      return redirectTo("/de/login?error=magic_expired")
    }

    // Token einlösen (einmalig).
    await db
      .update(loginTokens)
      .set({ usedAt: new Date() })
      .where(eq(loginTokens.id, record.id))

    // User laden (wurde bei /request angelegt).
    const [user] = await db
      .select({
        id: users.id,
        role: users.role,
        schoolId: users.schoolId,
        language: users.language,
        subscriptionStatus: users.subscriptionStatus,
        isActive: users.isActive,
      })
      .from(users)
      .where(eq(users.email, record.email))
      .limit(1)

    if (!user || !user.isActive) {
      return redirectTo("/de/login?error=magic_invalid")
    }

    // Subscription-Status (Schule kann bezahlt haben).
    let subscriptionActive = user.subscriptionStatus === "active"
    if (!subscriptionActive && user.schoolId) {
      const [school] = await db
        .select({ licenseType: schools.licenseType })
        .from(schools)
        .where(eq(schools.id, user.schoolId))
        .limit(1)
      subscriptionActive =
        school?.licenseType === "paid" || school?.licenseType === "pilot"
    }

    await createSession({
      userId: user.id,
      role: user.role,
      schoolId: user.schoolId,
      locale: user.language,
      subscriptionActive,
    })

    // Zurück in die Situation (next) — NICHT /dashboard, sonst greift der
    // EinstufungsGuard und leitet Pilot-Schüler auf /einstufung um.
    return redirectTo(next ?? `/${user.language}/lernen`)
  } catch (err) {
    console.error("[magic/verify] failed:", err)
    return redirectTo("/de/login?error=magic_error")
  }
}
