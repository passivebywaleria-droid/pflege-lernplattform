import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users, schools, sessionLogs, dailyActivity } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq, count, sql, sum } from "drizzle-orm"

export async function GET() {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth
  if (auth.role !== "admin") {
    return NextResponse.json({ error: "Kein Zugriff" }, { status: 403 })
  }

  try {
    // Gesamt-Zahlen
    const [userStats] = await db
      .select({
        totalUsers: count(),
        students: sql<number>`count(*) filter (where ${users.role} = 'student')`,
        teachers: sql<number>`count(*) filter (where ${users.role} = 'teacher')`,
        activeUsers: sql<number>`count(*) filter (where ${users.isActive} = true)`,
      })
      .from(users)

    const [schoolStats] = await db
      .select({
        totalSchools: count(),
        paidSchools: sql<number>`count(*) filter (where ${schools.licenseType} = 'paid')`,
        pilotSchools: sql<number>`count(*) filter (where ${schools.licenseType} = 'pilot')`,
      })
      .from(schools)

    // Lernaktivität letzte 30 Tage
    const [activityStats] = await db
      .select({
        totalMinuten: sum(dailyActivity.minutenAktiv),
        totalSessions: sum(dailyActivity.sessionsAbgeschlossen),
        totalSteps: sum(dailyActivity.stepsBearbeitet),
      })
      .from(dailyActivity)
      .where(
        sql`${dailyActivity.datum} >= current_date - interval '30 days'`
      )

    // Aktivste Schulen (letzte 30 Tage)
    const aktivsteSchulen = await db
      .select({
        schoolId: users.schoolId,
        schoolName: schools.name,
        totalMinuten: sum(dailyActivity.minutenAktiv),
      })
      .from(dailyActivity)
      .innerJoin(users, eq(dailyActivity.userId, users.id))
      .innerJoin(schools, eq(users.schoolId, schools.id))
      .where(
        sql`${dailyActivity.datum} >= current_date - interval '30 days'`
      )
      .groupBy(users.schoolId, schools.name)
      .orderBy(sql`sum(${dailyActivity.minutenAktiv}) desc`)
      .limit(10)

    return NextResponse.json({
      users: userStats,
      schools: schoolStats,
      activity30d: {
        totalMinuten: Number(activityStats?.totalMinuten ?? 0),
        totalSessions: Number(activityStats?.totalSessions ?? 0),
        totalSteps: Number(activityStats?.totalSteps ?? 0),
      },
      aktivsteSchulen,
    })
  } catch (error) {
    console.error("Admin stats error:", error)
    return NextResponse.json({ error: "Laden fehlgeschlagen" }, { status: 500 })
  }
}
