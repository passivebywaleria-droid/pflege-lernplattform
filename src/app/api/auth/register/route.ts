import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users, schools, classes } from "@/lib/db/schema"
import { hashPassword } from "@/lib/auth/password"
import { createSession } from "@/lib/auth/session"
import { registerSchema, mapRoleToDb } from "@/lib/auth/validation"
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

    const { email, password, name, language, role: uiRole, schoolCode } = parsed.data
    const dbRole = mapRoleToDb(uiRole || "schueler")

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

    // Schulcode validieren (optional)
    let schoolId: string | null = null
    let classId: string | null = null

    if (schoolCode) {
      // Schulcode = schools.id (UUID) oder ein lesbarer Code
      const school = await db
        .select({ id: schools.id })
        .from(schools)
        .where(eq(schools.id, schoolCode))
        .limit(1)

      if (school.length === 0) {
        return NextResponse.json(
          { error: "Ungültiger Schulcode" },
          { status: 400 }
        )
      }

      schoolId = school[0].id

      // Erste aktive Klasse der Schule zuweisen (falls vorhanden)
      const activeClass = await db
        .select({ id: classes.id })
        .from(classes)
        .where(eq(classes.schoolId, schoolId))
        .limit(1)

      if (activeClass.length > 0) {
        classId = activeClass[0].id
      }
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
        role: dbRole,
        schoolId,
        classId,
      })
      .returning({ id: users.id, role: users.role, schoolId: users.schoolId })

    // Subscription-Status: Neue User haben noch kein Abo (Schule könnte aber bezahlt haben)
    let subscriptionActive = false
    if (user.schoolId) {
      const [school] = await db
        .select({ licenseType: schools.licenseType })
        .from(schools)
        .where(eq(schools.id, user.schoolId))
        .limit(1)
      subscriptionActive = school?.licenseType === "paid" || school?.licenseType === "pilot"
    }

    // Create session
    await createSession({
      userId: user.id,
      role: user.role,
      schoolId: user.schoolId,
      locale: language,
      subscriptionActive,
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
