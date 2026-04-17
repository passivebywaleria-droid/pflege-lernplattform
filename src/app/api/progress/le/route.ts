import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { userLeProgress } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq, and } from "drizzle-orm"
import { z } from "zod"

const leProgressSchema = z.object({
  leId: z.string(),
  gesamtXp: z.number().int().min(0),
  abgeschlossen: z.boolean(),
  letzterScore: z.number().int().min(0).max(100).optional(),
  naechsteWiederholung: z.string().datetime().optional(),
  sessionProgress: z.record(z.string(), z.unknown()).default({}),
})

export async function POST(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const body = await request.json()
    const parsed = leProgressSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const data = parsed.data

    // Upsert: Insert or Update
    const existing = await db
      .select({ id: userLeProgress.id })
      .from(userLeProgress)
      .where(and(eq(userLeProgress.userId, auth.userId), eq(userLeProgress.leId, data.leId)))
      .limit(1)

    if (existing.length > 0) {
      await db
        .update(userLeProgress)
        .set({
          gesamtXp: data.gesamtXp,
          abgeschlossen: data.abgeschlossen,
          letzterScore: data.letzterScore ?? null,
          naechsteWiederholung: data.naechsteWiederholung ? new Date(data.naechsteWiederholung) : null,
          sessionProgress: data.sessionProgress,
          letzteAktivitaet: new Date(),
        })
        .where(eq(userLeProgress.id, existing[0].id))
    } else {
      await db.insert(userLeProgress).values({
        userId: auth.userId,
        leId: data.leId,
        gesamtXp: data.gesamtXp,
        abgeschlossen: data.abgeschlossen,
        letzterScore: data.letzterScore ?? null,
        naechsteWiederholung: data.naechsteWiederholung ? new Date(data.naechsteWiederholung) : null,
        sessionProgress: data.sessionProgress,
        letzteAktivitaet: new Date(),
      })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error("Progress LE error:", error)
    return NextResponse.json({ error: "Speichern fehlgeschlagen" }, { status: 500 })
  }
}

// GET: Alle LE-Fortschritte für den User laden
export async function GET() {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const progress = await db
      .select()
      .from(userLeProgress)
      .where(eq(userLeProgress.userId, auth.userId))

    return NextResponse.json(progress)
  } catch (error) {
    console.error("Progress LE GET error:", error)
    return NextResponse.json({ error: "Laden fehlgeschlagen" }, { status: 500 })
  }
}
