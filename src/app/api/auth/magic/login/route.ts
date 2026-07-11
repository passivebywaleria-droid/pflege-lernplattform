import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users, loginTokens } from "@/lib/db/schema"
import { magicLoginSchema } from "@/lib/auth/validation"
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
// Rückkehrer-Login: nur E-Mail — verschickt einen Magic-Link, WENN ein Konto
// existiert. Die Antwort ist in beiden Fällen identisch (Anti-Enumeration:
// verrät nicht, ob eine E-Mail registriert ist).
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)
    const parsed = magicLoginSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      )
    }

    const { email, next } = parsed.data
    const stubbed = !process.env.BREVO_API_KEY

    const existing = await db
      .select({ id: users.id, name: users.name })
      .from(users)
      .where(eq(users.email, email))
      .limit(1)

    if (existing.length === 0) {
      // Kein Konto → nichts verschicken, aber identisch antworten.
      return NextResponse.json({ ok: true, stubbed })
    }

    // Einmal-Token erzeugen; nur den Hash speichern.
    const token = generateMagicToken()
    await db.insert(loginTokens).values({
      tokenHash: hashMagicToken(token),
      email,
      expiresAt: magicTokenExpiry(),
    })

    const url = new URL("/api/auth/magic/verify", SITE_URL)
    url.searchParams.set("token", token)
    if (next) url.searchParams.set("next", next)

    const mail = magicLinkMail({
      verifyUrl: url.toString(),
      spitzname: existing[0].name ?? undefined,
      ttlMinutes: MAGIC_LINK_TTL_MINUTES,
    })
    await sendMail({
      to: email,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    })

    return NextResponse.json({ ok: true, stubbed })
  } catch (err) {
    console.error("[magic/login] failed:", err)
    return NextResponse.json(
      { error: "Etwas ist schiefgelaufen. Bitte versuche es später erneut." },
      { status: 500 }
    )
  }
}
