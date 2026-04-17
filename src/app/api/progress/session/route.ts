import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { sessionLogs, stepResponses } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { z } from "zod"

const stepAntwortSchema = z.object({
  stepId: z.string(),
  stepType: z.string(),
  correct: z.boolean().nullable(),
  gewaehlteOption: z.string().optional(),
  freitextAntwort: z.string().optional(),
  zeitMs: z.number().int().min(0),
  bloomLevel: z.number().int().min(1).max(6).optional(),
  fehlerKategorie: z.enum(["raten", "konzept", "sprache", "verwechslung", "fluechtig"]).optional(),
  lernzielId: z.string().optional(),
})

const sessionSchema = z.object({
  leId: z.string(),
  ceId: z.string(),
  session: z.string(),
  startzeit: z.string().datetime(),
  endzeit: z.string().datetime().optional(),
  aktivMinuten: z.number().min(0),
  stepsBearbeitet: z.number().int().min(0),
  stepsGesamt: z.number().int().min(0),
  score: z.number().int().min(0).max(100).optional(),
  xpEarned: z.number().int().min(0).default(0),
  track: z.enum(["basis", "vertiefung"]).default("basis"),
  isComplete: z.boolean().default(false),
  antworten: z.array(stepAntwortSchema).default([]),
})

export async function POST(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const body = await request.json()
    const parsed = sessionSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const { antworten, ...sessionData } = parsed.data

    // 1. Session-Log speichern
    const [log] = await db
      .insert(sessionLogs)
      .values({
        userId: auth.userId,
        leId: sessionData.leId,
        ceId: sessionData.ceId,
        session: sessionData.session,
        startzeit: new Date(sessionData.startzeit),
        endzeit: sessionData.endzeit ? new Date(sessionData.endzeit) : null,
        aktivMinuten: sessionData.aktivMinuten,
        stepsBearbeitet: sessionData.stepsBearbeitet,
        stepsGesamt: sessionData.stepsGesamt,
        score: sessionData.score ?? null,
        xpEarned: sessionData.xpEarned,
        track: sessionData.track,
        isComplete: sessionData.isComplete,
      })
      .returning({ id: sessionLogs.id })

    // 2. Step-Responses speichern (Batch)
    if (antworten.length > 0) {
      await db.insert(stepResponses).values(
        antworten.map((a) => ({
          userId: auth.userId,
          stepId: a.stepId,
          sessionLogId: log.id,
          correct: a.correct,
          gewaehlteOption: a.gewaehlteOption ?? null,
          freitextAntwort: a.freitextAntwort ?? null,
          zeitMs: a.zeitMs,
          fehlerKategorie: a.fehlerKategorie ?? null,
          stepType: a.stepType,
          bloomLevel: a.bloomLevel ?? 1,
          lernzielId: a.lernzielId ?? null,
        }))
      )
    }

    return NextResponse.json({ sessionLogId: log.id }, { status: 201 })
  } catch (error) {
    console.error("Progress session error:", error)
    return NextResponse.json({ error: "Speichern fehlgeschlagen" }, { status: 500 })
  }
}
