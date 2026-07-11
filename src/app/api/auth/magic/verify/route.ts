import { NextRequest, NextResponse } from "next/server"
import { timingSafeEqual } from "crypto"
import { db } from "@/lib/db"
import { users, schools, loginTokens } from "@/lib/db/schema"
import { hashOtpCode, OTP_MAX_ATTEMPTS } from "@/lib/auth/magic-link"
import { createSession } from "@/lib/auth/session"
import { magicVerifySchema } from "@/lib/auth/validation"
import { eq, and, isNull, desc } from "drizzle-orm"

// Öffentlicher Endpunkt (middleware apiPublicPaths enthält "/api/auth/").
// POST { email, code, next } — löst den 6-stelligen Code ein und erstellt die
// Session. KEIN Redirect: der Client (Code-Screen) navigiert selbst zu `next`,
// damit der Player im selben Tab neu lädt und den Gast-Stand mergt.

/**
 * Nur interne Pfade als Redirect-Ziel zulassen (Open-Redirect-Schutz).
 * Muss mit genau einem "/" beginnen (nicht "//", nicht "/\").
 */
function safeNext(next: string | undefined): string | null {
  if (!next) return null
  if (!next.startsWith("/")) return null
  if (next.startsWith("//") || next.startsWith("/\\")) return null
  return next
}

/** Zeitkonstanter Vergleich zweier Hex-Hashes gleicher Länge. */
function hashesEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "hex")
  const bufB = Buffer.from(b, "hex")
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)
    const parsed = magicVerifySchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      )
    }

    const { email, code } = parsed.data
    const next = safeNext(parsed.data.next)

    // Neuesten offenen, nicht abgelaufenen Code dieser E-Mail holen.
    const [record] = await db
      .select()
      .from(loginTokens)
      .where(and(eq(loginTokens.email, email), isNull(loginTokens.usedAt)))
      .orderBy(desc(loginTokens.createdAt))
      .limit(1)

    if (!record || record.expiresAt.getTime() < Date.now()) {
      return NextResponse.json(
        { error: "Der Code ist abgelaufen. Fordere einen neuen an.", reason: "expired" },
        { status: 401 }
      )
    }

    if (record.attempts >= OTP_MAX_ATTEMPTS) {
      // Zu viele Fehlversuche → Code verbrennen.
      await db
        .update(loginTokens)
        .set({ usedAt: new Date() })
        .where(eq(loginTokens.id, record.id))
      return NextResponse.json(
        {
          error: "Zu viele Fehlversuche. Fordere einen neuen Code an.",
          reason: "locked",
        },
        { status: 401 }
      )
    }

    // Code prüfen (zeitkonstant über die Hashes).
    if (!hashesEqual(hashOtpCode(code), record.codeHash)) {
      await db
        .update(loginTokens)
        .set({ attempts: record.attempts + 1 })
        .where(eq(loginTokens.id, record.id))
      const rest = OTP_MAX_ATTEMPTS - (record.attempts + 1)
      return NextResponse.json(
        {
          error:
            rest > 0
              ? `Code stimmt nicht. Noch ${rest} Versuch${rest === 1 ? "" : "e"}.`
              : "Zu viele Fehlversuche. Fordere einen neuen Code an.",
          reason: "wrong",
        },
        { status: 401 }
      )
    }

    // Richtig → Code einlösen (einmalig).
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
      return NextResponse.json(
        { error: "Konto nicht gefunden.", reason: "no_user" },
        { status: 401 }
      )
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
    // EinstufungsGuard. Der Client navigiert anhand dieses Werts.
    return NextResponse.json({
      ok: true,
      next: next ?? `/${user.language}/lernen`,
    })
  } catch (err) {
    console.error("[magic/verify] failed:", err)
    return NextResponse.json(
      { error: "Etwas ist schiefgelaufen. Bitte versuche es erneut." },
      { status: 500 }
    )
  }
}
