import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { praxisUebungen, contentSteps, lerneinheiten } from "@/lib/db/schema"
import { eq, asc, inArray } from "drizzle-orm"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ leId: string }> }
) {
  const { leId } = await params

  const le = await db.query.lerneinheiten.findFirst({
    where: eq(lerneinheiten.leId, leId),
  })

  if (!le) {
    return NextResponse.json({ error: "LE nicht gefunden" }, { status: 404 })
  }

  const uebungen = await db
    .select()
    .from(praxisUebungen)
    .where(eq(praxisUebungen.leId, le.id))
    .orderBy(asc(praxisUebungen.sortOrder))

  // Collect all stepIds to resolve in one query
  const allStepIds = uebungen.flatMap((u) => (u.stepIds as string[]) || [])

  let stepsMap = new Map<string, Record<string, unknown>>()
  if (allStepIds.length > 0) {
    const steps = await db
      .select()
      .from(contentSteps)
      .where(inArray(contentSteps.stepId, allStepIds))

    for (const s of steps) {
      stepsMap.set(s.stepId, {
        stepId: s.stepId,
        phase: s.session,
        stepType: s.stepType,
        bloomLevel: s.bloomLevel,
        kompetenzbereich: s.kompetenzbereich,
        quellen: s.quellen,
        track: s.track,
        modus: s.modus,
        lernziel: s.lernzielId,
        themenblockPhase: s.themenblockPhase,
        tag: s.tag,
        patientId: s.patientId,
        xpValue: s.xpValue,
        difficulty: s.difficulty,
        displayFormat: s.displayFormat,
        imageUrl: s.imageUrl,
        imageAlt: s.imageAlt,
        audioUrl: s.audioUrl,
        contentC1: s.contentC1,
        contentB1: s.contentB1,
        question: s.question,
      })
    }
  }

  // Build PraxisUebung with resolved steps
  const result = uebungen.map((u) => ({
    uebungId: u.uebungId,
    typ: u.typ,
    titel: u.titel,
    titelB1: u.titelB1,
    beschreibungC1: u.beschreibungC1,
    beschreibungB1: u.beschreibungB1,
    bloomLevel: u.bloomLevel,
    steps: ((u.stepIds as string[]) || [])
      .map((id) => stepsMap.get(id))
      .filter(Boolean),
  }))

  return NextResponse.json(result)
}
