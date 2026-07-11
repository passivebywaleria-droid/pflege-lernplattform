import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users, loginTokens } from "@/lib/db/schema"
import { magicLoginSchema } from "@/lib/auth/validation"
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
// Rückkehrer-Login: nur E-Mail — verschickt einen 6-stelligen Code, WENN ein
// Konto existiert. Die Antwort ist in beiden Fällen identisch (Anti-Enumeration:
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

    const { email } = parsed.data
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

    const mail = otpCodeMail({
      code,
      spitzname: existing[0].name ?? undefined,
      ttlMinutes: OTP_TTL_MINUTES,
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
