import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { situationFortschritt } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq, and } from "drizzle-orm"
import { z } from "zod"

// Situations-Fortschritt (pro User + Situation).
// GET  ?situationId=…  → gespeicherter Wiedereinstiegs-Zustand (oder null).
// POST                 → Upsert; wird auch für den Gast→Account-Merge nach
//                        dem Play-then-Gate-Signup genutzt (localStorage → DB).

const situationProgressSchema = z.object({
  situationId: z.string().min(1).max(100),
  ceId: z.string().min(1).max(20),
  currentPhase: z.string().min(1).max(40),
  completedPhases: z.array(z.string().max(40)).max(12).default([]),
  currentStepIndex: z.number().int().min(0).max(200).default(0),
  isComplete: z.boolean().default(false),
})

export async function GET(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  const situationId = request.nextUrl.searchParams.get("situationId")
  if (!situationId) {
    return NextResponse.json({ error: "situationId fehlt" }, { status: 400 })
  }

  try {
    const rows = await db
      .select({
        situationId: situationFortschritt.situationId,
        currentPhase: situationFortschritt.currentPhase,
        resumeState: situationFortschritt.resumeState,
        isComplete: situationFortschritt.isComplete,
      })
      .from(situationFortschritt)
      .where(
        and(
          eq(situationFortschritt.userId, auth.userId),
          eq(situationFortschritt.situationId, situationId)
        )
      )
      .limit(1)

    return NextResponse.json({ progress: rows[0] ?? null })
  } catch (error) {
    console.error("Situation progress GET error:", error)
    return NextResponse.json({ error: "Laden fehlgeschlagen" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const body = await request.json()
    const parsed = situationProgressSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      )
    }

    const data = parsed.data
    const userId = auth.userId
    const resumeState = {
      completedPhases: data.completedPhases,
      currentStepIndex: data.currentStepIndex,
    }

    const existing = await db
      .select({
        id: situationFortschritt.id,
        isComplete: situationFortschritt.isComplete,
      })
      .from(situationFortschritt)
      .where(
        and(
          eq(situationFortschritt.userId, userId),
          eq(situationFortschritt.situationId, data.situationId)
        )
      )
      .limit(1)

    if (existing.length > 0) {
      await db
        .update(situationFortschritt)
        .set({
          currentPhase: data.currentPhase,
          resumeState,
          // Einmal abgeschlossen bleibt abgeschlossen (Wiederholung
          // degradiert den Zustand nicht).
          isComplete: existing[0].isComplete || data.isComplete,
          completedAt:
            !existing[0].isComplete && data.isComplete ? new Date() : undefined,
          updatedAt: new Date(),
        })
        .where(eq(situationFortschritt.id, existing[0].id))
    } else {
      await db.insert(situationFortschritt).values({
        userId,
        situationId: data.situationId,
        ceId: data.ceId,
        currentPhase: data.currentPhase,
        resumeState,
        isComplete: data.isComplete,
        completedAt: data.isComplete ? new Date() : undefined,
      })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error("Situation progress POST error:", error)
    return NextResponse.json(
      { error: "Speichern fehlgeschlagen" },
      { status: 500 }
    )
  }
}
