import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users, authIdentities, loginTokens } from "@/lib/db/schema"
import { magicRequestSchema, isAtLeastPilotAge } from "@/lib/auth/validation"
import {
  generateOtpCode,
  hashOtpCode,
  otpExpiry,
  OTP_TTL_MINUTES,
} from "@/lib/auth/magic-link"
import { sendMail } from "@/lib/mail/send"
import { otpCodeMail } from "@/lib/mail/templates/otp-code"
import { eq, and, isNull } from "drizzle-orm"

// Öffentlicher Endpunkt (middleware apiPublicPaths enthält "/api/auth/").
// Signup + Login in einem: fordert einen 6-stelligen Login-Code an.
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

    const { email, spitzname, birthYear } = parsed.data
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

    // Ältere, noch offene Codes dieser E-Mail entwerten (nur der neueste gilt).
    await db
      .update(loginTokens)
      .set({ usedAt: new Date() })
      .where(and(eq(loginTokens.email, email), isNull(loginTokens.usedAt)))

    // 6-stelligen Code erzeugen; nur den Hash speichern.
    const code = generateOtpCode()
    await db.insert(loginTokens).values({
      codeHash: hashOtpCode(code),
      email,
      expiresAt: otpExpiry(),
    })

    const mail = otpCodeMail({ code, spitzname, ttlMinutes: OTP_TTL_MINUTES })
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
