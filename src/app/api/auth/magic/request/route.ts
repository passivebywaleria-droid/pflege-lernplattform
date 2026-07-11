import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users, authIdentities, loginTokens } from "@/lib/db/schema"
import { magicRequestSchema, isAtLeastPilotAge } from "@/lib/auth/validation"
import {
  generateMagicToken,
  hashMagicToken,
  magicTokenExpiry,
  MAGIC_LINK_TTL_MINUTES,
} from "@/lib/auth/magic-link"
import { sendMail } from "@/lib/mail/send"
import { magicLinkMail } from "@/lib/mail/templates/magic-link"
import { SITE_URL } from "@/lib/seo/site"
import { eq } from "drizzle-orm"

// Öffentlicher Endpunkt (middleware apiPublicPaths enthält "/api/auth/").
// Signup + Login in einem: fordert einen Magic-Link an.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)
    const parsed = magicRequestSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      )
    }

    const { email, spitzname, birthYear, next } = parsed.data
    const language = parsed.data.language ?? "de"

    // Pilot-Regel: nur ab 16. <16 → freundlicher Stopp, KEIN Datensatz.
    if (!isAtLeastPilotAge(birthYear)) {
      return NextResponse.json(
        {
          error:
            "Schön, dass du dabei sein willst! Der Pilot ist aktuell erst ab 16 Jahren. Schau bald wieder vorbei.",
          reason: "under_age",
        },
        { status: 403 }
      )
    }

    // User anlegen ODER bestehenden per E-Mail wiederverwenden (idempotent).
    const existing = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, email))
      .limit(1)

    let userId: string
    if (existing.length > 0) {
      userId = existing[0].id
    } else {
      const [created] = await db
        .insert(users)
        .values({
          email,
          name: spitzname,
          birthYear,
          language,
          role: "student",
          // passwortlos — kein passwordHash
        })
        .returning({ id: users.id })
      userId = created.id

      // E-Mail-Login-Identität hinterlegen (idempotent gegen Race).
      await db
        .insert(authIdentities)
        .values({
          userId,
          provider: "email",
          providerAccountId: email,
        })
        .onConflictDoNothing()
    }

    // Einmal-Token erzeugen; nur den Hash speichern.
    const token = generateMagicToken()
    await db.insert(loginTokens).values({
      tokenHash: hashMagicToken(token),
      email,
      expiresAt: magicTokenExpiry(),
    })

    // Verify-Link bauen (next wird durchgereicht, um zurück in die Situation zu leiten).
    // Die Verify-Route liegt außerhalb von [locale] → ohne Locale-Präfix.
    const url = new URL("/api/auth/magic/verify", SITE_URL)
    url.searchParams.set("token", token)
    if (next) url.searchParams.set("next", next)

    const mail = magicLinkMail({
      verifyUrl: url.toString(),
      spitzname,
      ttlMinutes: MAGIC_LINK_TTL_MINUTES,
    })
    const { stubbed } = await sendMail({
      to: email,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    })

    return NextResponse.json({ ok: true, stubbed })
  } catch (err) {
    console.error("[magic/request] failed:", err)
    return NextResponse.json(
      { error: "Etwas ist schiefgelaufen. Bitte versuche es später erneut." },
      { status: 500 }
    )
  }
}
