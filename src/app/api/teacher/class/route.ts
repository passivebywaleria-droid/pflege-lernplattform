import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import {
  users,
  classes,
  userLeProgress,
  dailyActivity,
  userStreaks,
} from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq, and, desc, sql } from "drizzle-orm"

export async function GET() {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  // Nur Lehrer, Schulleiter und Admins
  if (!["teacher", "principal", "admin"].includes(auth.role)) {
    return NextResponse.json({ error: "Kein Zugriff" }, { status: 403 })
  }

  try {
    // 1. Klassen des Lehrers laden
    const teacherClasses = await db
      .select({
        id: classes.id,
        name: classes.name,
        ausbildungsdrittel: classes.ausbildungsdrittel,
        schoolId: classes.schoolId,
        isActive: classes.isActive,
      })
      .from(classes)
      .where(eq(classes.teacherId, auth.userId))

    if (teacherClasses.length === 0) {
      return NextResponse.json({ classes: [], students: [] })
    }

    // 2. Schüler der Klassen laden
    const classIds = teacherClasses.map((c) => c.id)
    const students = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        classId: users.classId,
        language: users.language,
        sprachLevel: users.sprachLevel,
        fachwissenLevel: users.fachwissenLevel,
        isActive: users.isActive,
        createdAt: users.createdAt,
      })
      .from(users)
      .where(
        and(
          eq(users.role, "student"),
          sql`${users.classId} = ANY(${classIds})`
        )
      )

    // 3. Fortschritte der Schüler laden
    const studentIds = students.map((s) => s.id)
    const progress = studentIds.length > 0
      ? await db
          .select()
          .from(userLeProgress)
          .where(sql`${userLeProgress.userId} = ANY(${studentIds})`)
      : []

    // 4. Streaks laden
    const streaks = studentIds.length > 0
      ? await db
          .select()
          .from(userStreaks)
          .where(sql`${userStreaks.userId} = ANY(${studentIds})`)
      : []

    // 5. Zusammenführen
    const studentsWithProgress = students.map((student) => ({
      ...student,
      leProgress: progress.filter((p) => p.userId === student.id),
      streak: streaks.find((s) => s.userId === student.id) ?? null,
    }))

    return NextResponse.json({
      classes: teacherClasses,
      students: studentsWithProgress,
    })
  } catch (error) {
    console.error("Teacher class error:", error)
    return NextResponse.json({ error: "Laden fehlgeschlagen" }, { status: 500 })
  }
}
