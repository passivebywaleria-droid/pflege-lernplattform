import { NextResponse } from "next/server"
import { z } from "zod"
import { db } from "@/lib/db"
import { schools, users, classes } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq, sql, count } from "drizzle-orm"

const createSchoolSchema = z.object({
  name: z.string().min(2).max(255),
  bundesland: z.string().max(50).optional(),
  contactEmail: z.string().email().optional(),
  licenseType: z.enum(["free", "pilot", "paid"]).optional(),
  maxStudents: z.number().int().min(1).max(2000).optional(),
})

export async function GET() {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth
  if (auth.role !== "admin") {
    return NextResponse.json({ error: "Kein Zugriff" }, { status: 403 })
  }

  try {
    const allSchools = await db
      .select({
        id: schools.id,
        name: schools.name,
        bundesland: schools.bundesland,
        contactEmail: schools.contactEmail,
        licenseType: schools.licenseType,
        maxStudents: schools.maxStudents,
        stripeCustomerId: schools.stripeCustomerId,
        createdAt: schools.createdAt,
      })
      .from(schools)
      .orderBy(schools.name)

    // Schüler-Anzahl pro Schule
    const studentCounts = await db
      .select({
        schoolId: users.schoolId,
        count: count(),
      })
      .from(users)
      .where(eq(users.role, "student"))
      .groupBy(users.schoolId)

    const countMap = new Map(
      studentCounts
        .filter((sc) => sc.schoolId)
        .map((sc) => [sc.schoolId!, sc.count])
    )

    const result = allSchools.map((s) => ({
      ...s,
      studentCount: countMap.get(s.id) ?? 0,
    }))

    return NextResponse.json(result)
  } catch (error) {
    console.error("Admin schools error:", error)
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

  const parsed = createSchoolSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validierung fehlgeschlagen", details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  try {
    const [school] = await db
      .insert(schools)
      .values({
        name: parsed.data.name,
        bundesland: parsed.data.bundesland ?? null,
        contactEmail: parsed.data.contactEmail ?? null,
        licenseType: parsed.data.licenseType ?? "free",
        maxStudents: parsed.data.maxStudents ?? 60,
      })
      .returning()

    return NextResponse.json(school, { status: 201 })
  } catch (error) {
    console.error("Admin create school error:", error)
    return NextResponse.json({ error: "Erstellen fehlgeschlagen" }, { status: 500 })
  }
}
