import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users } from "@/lib/db/schema"
import { verifyPassword } from "@/lib/auth/password"
import { createSession } from "@/lib/auth/session"
import { loginSchema } from "@/lib/auth/validation"
import { eq } from "drizzle-orm"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = loginSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      )
    }

    const { email, password } = parsed.data

    // Find user
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email.toLowerCase()))
      .limit(1)

    if (!user) {
      return NextResponse.json(
        { error: "E-Mail oder Passwort falsch" },
        { status: 401 }
      )
    }

    if (!user.isActive) {
      return NextResponse.json(
        { error: "Konto deaktiviert" },
        { status: 403 }
      )
    }

    // Verify password
    const valid = await verifyPassword(password, user.passwordHash)
    if (!valid) {
      return NextResponse.json(
        { error: "E-Mail oder Passwort falsch" },
        { status: 401 }
      )
    }

    // Create session
    await createSession({
      userId: user.id,
      role: user.role,
      schoolId: user.schoolId,
      locale: user.language,
    })

    return NextResponse.json({
      message: "Anmeldung erfolgreich",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        language: user.language,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { error: "Anmeldung fehlgeschlagen" },
      { status: 500 }
    )
  }
}
