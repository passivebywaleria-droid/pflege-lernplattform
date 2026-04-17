import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import {
  userLeProgress,
  dailyActivity,
  userStreaks,
  sessionLogs,
  stepResponses,
  userSchwaechen,
  placementTestResults,
  users,
  xpLog,
} from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq, and } from "drizzle-orm"
import { z } from "zod"

// Batch-Sync: Ganzes localStorage-Profil auf einmal hochladen.
// Idempotent: Existierende Einträge werden aktualisiert, neue angelegt.

const syncSchema = z.object({
  // LE-Fortschritte (Upsert per leId)
  leProgress: z.array(z.object({
    leId: z.string(),
    gesamtXp: z.number().int().min(0),
    abgeschlossen: z.boolean(),
    letzterScore: z.number().int().min(0).max(100).optional(),
    naechsteWiederholung: z.string().datetime().optional(),
    sessionProgress: z.record(z.string(), z.unknown()).default({}),
  })).default([]),

  // Tagesaktivitäten (Upsert per datum)
  tagesAktivitaeten: z.array(z.object({
    datum: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    minutenAktiv: z.number().min(0),
    xpVerdient: z.number().int().min(0),
    sessionsAbgeschlossen: z.number().int().min(0),
  })).default([]),

  // Streak
  streak: z.object({
    currentStreak: z.number().int().min(0),
    longestStreak: z.number().int().min(0),
    lastActivityDate: z.string().nullable(),
  }).optional(),

  // Einstufung (nur speichern wenn vorhanden)
  einstufung: z.object({
    sprachLevel: z.number().min(1).max(5),
    fachwissenLevel: z.number().min(1).max(5),
    details: z.record(z.string(), z.unknown()),
  }).optional(),

  // Gesamt-XP (für User-Tabelle)
  gesamtXp: z.number().int().min(0).optional(),
})

export async function POST(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const body = await request.json()
    const parsed = syncSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const data = parsed.data
    const userId = auth.userId

    // 1. LE-Progress Upserts
    for (const le of data.leProgress) {
      const existing = await db
        .select({ id: userLeProgress.id })
        .from(userLeProgress)
        .where(and(eq(userLeProgress.userId, userId), eq(userLeProgress.leId, le.leId)))
        .limit(1)

      const values = {
        gesamtXp: le.gesamtXp,
        abgeschlossen: le.abgeschlossen,
        letzterScore: le.letzterScore ?? null,
        naechsteWiederholung: le.naechsteWiederholung ? new Date(le.naechsteWiederholung) : null,
        sessionProgress: le.sessionProgress,
        letzteAktivitaet: new Date(),
      }

      if (existing.length > 0) {
        await db.update(userLeProgress).set(values).where(eq(userLeProgress.id, existing[0].id))
      } else {
        await db.insert(userLeProgress).values({ userId, leId: le.leId, ...values })
      }
    }

    // 2. Daily Activity Upserts
    for (const day of data.tagesAktivitaeten) {
      const existing = await db
        .select({ id: dailyActivity.id })
        .from(dailyActivity)
        .where(and(eq(dailyActivity.userId, userId), eq(dailyActivity.datum, day.datum)))
        .limit(1)

      if (existing.length > 0) {
        await db.update(dailyActivity).set({
          minutenAktiv: day.minutenAktiv,
          xpVerdient: day.xpVerdient,
          sessionsAbgeschlossen: day.sessionsAbgeschlossen,
        }).where(eq(dailyActivity.id, existing[0].id))
      } else {
        await db.insert(dailyActivity).values({
          userId,
          datum: day.datum,
          minutenAktiv: day.minutenAktiv,
          xpVerdient: day.xpVerdient,
          sessionsAbgeschlossen: day.sessionsAbgeschlossen,
        })
      }
    }

    // 3. Streak Upsert
    if (data.streak) {
      const streakRow = await db
        .select({ id: userStreaks.id })
        .from(userStreaks)
        .where(eq(userStreaks.userId, userId))
        .limit(1)

      if (streakRow.length > 0) {
        await db.update(userStreaks).set({
          currentStreak: data.streak.currentStreak,
          longestStreak: data.streak.longestStreak,
          lastActivityDate: data.streak.lastActivityDate,
        }).where(eq(userStreaks.id, streakRow[0].id))
      } else {
        await db.insert(userStreaks).values({
          userId,
          currentStreak: data.streak.currentStreak,
          longestStreak: data.streak.longestStreak,
          lastActivityDate: data.streak.lastActivityDate,
        })
      }
    }

    // 4. Einstufung
    if (data.einstufung) {
      await db.insert(placementTestResults).values({
        userId,
        sprachLevel: data.einstufung.sprachLevel,
        fachwissenLevel: data.einstufung.fachwissenLevel,
        details: data.einstufung.details,
      })

      await db.update(users).set({
        sprachLevel: data.einstufung.sprachLevel,
        fachwissenLevel: data.einstufung.fachwissenLevel,
        achsenLetztBerechnet: new Date(),
      }).where(eq(users.id, userId))
    }

    return NextResponse.json({
      ok: true,
      synced: {
        leProgress: data.leProgress.length,
        tagesAktivitaeten: data.tagesAktivitaeten.length,
        streak: !!data.streak,
        einstufung: !!data.einstufung,
      },
    }, { status: 200 })
  } catch (error) {
    console.error("Progress sync error:", error)
    return NextResponse.json({ error: "Sync fehlgeschlagen" }, { status: 500 })
  }
}
