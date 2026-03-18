import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users } from "@/lib/db/schema"
import { hashPassword } from "@/lib/auth/password"
import { createSession } from "@/lib/auth/session"
import { registerSchema } from "@/lib/auth/validation"
import { eq } from "drizzle-orm"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = registerSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      )
    }

    const { email, password, name, language } = parsed.data

    // Check if user exists
    const existing = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, email.toLowerCase()))
      .limit(1)

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "E-Mail-Adresse bereits registriert" },
        { status: 409 }
      )
    }

    // Create user
    const passwordHash = await hashPassword(password)
    const [user] = await db
      .insert(users)
      .values({
        email: email.toLowerCase(),
        passwordHash,
        name,
        language,
        role: "student",
      })
      .returning({ id: users.id, role: users.role, schoolId: users.schoolId })

    // Create session
    await createSession({
      userId: user.id,
      role: user.role,
      schoolId: user.schoolId,
      locale: language,
    })

    return NextResponse.json(
      { message: "Registrierung erfolgreich", userId: user.id },
      { status: 201 }
    )
  } catch (error) {
    console.error("Register error:", error)
    return NextResponse.json(
      { error: "Registrierung fehlgeschlagen" },
      { status: 500 }
    )
  }
}
