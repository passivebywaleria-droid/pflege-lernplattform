import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { dailyActivity, userStreaks } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq, and } from "drizzle-orm"
import { z } from "zod"

const dailySchema = z.object({
  datum: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  minutenAktiv: z.number().min(0),
  xpVerdient: z.number().int().min(0),
  sessionsAbgeschlossen: z.number().int().min(0),
  stepsBearbeitet: z.number().int().min(0).default(0),
})

export async function POST(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const body = await request.json()
    const parsed = dailySchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const data = parsed.data

    // Upsert Daily Activity
    const existing = await db
      .select({ id: dailyActivity.id })
      .from(dailyActivity)
      .where(and(eq(dailyActivity.userId, auth.userId), eq(dailyActivity.datum, data.datum)))
      .limit(1)

    if (existing.length > 0) {
      await db
        .update(dailyActivity)
        .set({
          minutenAktiv: data.minutenAktiv,
          xpVerdient: data.xpVerdient,
          sessionsAbgeschlossen: data.sessionsAbgeschlossen,
          stepsBearbeitet: data.stepsBearbeitet,
        })
        .where(eq(dailyActivity.id, existing[0].id))
    } else {
      await db.insert(dailyActivity).values({
        userId: auth.userId,
        datum: data.datum,
        minutenAktiv: data.minutenAktiv,
        xpVerdient: data.xpVerdient,
        sessionsAbgeschlossen: data.sessionsAbgeschlossen,
        stepsBearbeitet: data.stepsBearbeitet,
      })
    }

    // Update Streak
    const heute = data.datum
    const gestern = new Date(new Date(heute).getTime() - 86400000).toISOString().split("T")[0]

    const streakRow = await db
      .select()
      .from(userStreaks)
      .where(eq(userStreaks.userId, auth.userId))
      .limit(1)

    if (streakRow.length > 0) {
      const streak = streakRow[0]
      let newStreak = streak.currentStreak

      if (streak.lastActivityDate === heute) {
        // Schon gezählt
      } else if (streak.lastActivityDate === gestern) {
        newStreak = streak.currentStreak + 1
      } else {
        newStreak = 1
      }

      await db
        .update(userStreaks)
        .set({
          currentStreak: newStreak,
          longestStreak: Math.max(newStreak, streak.longestStreak),
          lastActivityDate: heute,
        })
        .where(eq(userStreaks.id, streak.id))
    } else {
      await db.insert(userStreaks).values({
        userId: auth.userId,
        currentStreak: 1,
        longestStreak: 1,
        lastActivityDate: heute,
      })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error("Progress daily error:", error)
    return NextResponse.json({ error: "Speichern fehlgeschlagen" }, { status: 500 })
  }
}
