import { NextResponse } from "next/server"
import { z } from "zod"
import { db } from "@/lib/db"
import { classes, users } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq, sql, count } from "drizzle-orm"

const createClassSchema = z.object({
  schoolId: z.string().uuid(),
  name: z.string().min(1).max(255),
  ausbildungsdrittel: z.number().int().min(1).max(3),
  teacherId: z.string().uuid(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
})

export async function GET(request: Request) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth
  if (auth.role !== "admin") {
    return NextResponse.json({ error: "Kein Zugriff" }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)
  const schoolId = searchParams.get("schoolId")

  try {
    let query = db
      .select({
        id: classes.id,
        schoolId: classes.schoolId,
        name: classes.name,
        ausbildungsdrittel: classes.ausbildungsdrittel,
        teacherId: classes.teacherId,
        startDate: classes.startDate,
        endDate: classes.endDate,
        isActive: classes.isActive,
        createdAt: classes.createdAt,
      })
      .from(classes)
      .orderBy(classes.name)

    if (schoolId) {
      query = query.where(eq(classes.schoolId, schoolId)) as typeof query
    }

    const allClasses = await query

    // Schüler-Anzahl pro Klasse
    const studentCounts = await db
      .select({
        classId: users.classId,
        count: count(),
      })
      .from(users)
      .where(eq(users.role, "student"))
      .groupBy(users.classId)

    const countMap = new Map(
      studentCounts
        .filter((sc) => sc.classId)
        .map((sc) => [sc.classId!, sc.count])
    )

    const result = allClasses.map((c) => ({
      ...c,
      studentCount: countMap.get(c.id) ?? 0,
    }))

    return NextResponse.json(result)
  } catch (error) {
    console.error("Admin classes error:", error)
    return NextResponse.json({ error: "Laden fehlgeschlagen" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth
  if (auth.role !== "admin") {
    return NextResponse.json({ error: "Kein Zugriff" }, { status: 403 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Ungültiger Body" }, { status: 400 })
  }

  const parsed = createClassSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validierung fehlgeschlagen", details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  try {
    const [cls] = await db
      .insert(classes)
      .values({
        schoolId: parsed.data.schoolId,
        name: parsed.data.name,
        ausbildungsdrittel: parsed.data.ausbildungsdrittel,
        teacherId: parsed.data.teacherId,
        startDate: parsed.data.startDate ?? null,
        endDate: parsed.data.endDate ?? null,
      })
      .returning()

    return NextResponse.json(cls, { status: 201 })
  } catch (error) {
    console.error("Admin create class error:", error)
    return NextResponse.json({ error: "Erstellen fehlgeschlagen" }, { status: 500 })
  }
}
