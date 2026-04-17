import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { contentSteps, lerneinheiten } from "@/lib/db/schema"
import { eq, and, asc } from "drizzle-orm"

/**
 * Maps DB contentSteps rows to ContentStep frontend shape.
 * Key renames: session → phase, lernzielId → lernziel
 */
function mapStepToFrontend(row: typeof contentSteps.$inferSelect) {
  return {
    stepId: row.stepId,
    phase: row.session, // DB: session → Frontend: phase
    stepType: row.stepType,
    bloomLevel: row.bloomLevel,
    kompetenzbereich: row.kompetenzbereich,
    quellen: row.quellen as string[],
    track: row.track,
    modus: row.modus,
    lernziel: row.lernzielId, // DB: lernzielId → Frontend: lernziel
    themenblockPhase: row.themenblockPhase,
    tag: row.tag,
    patientId: row.patientId,
    xpValue: row.xpValue,
    difficulty: row.difficulty,
    displayFormat: row.displayFormat,
    imageUrl: row.imageUrl,
    imageAlt: row.imageAlt,
    audioUrl: row.audioUrl,
    bildkategorie: row.bildkategorie,
    contentC1: row.contentC1 as Record<string, unknown>,
    contentB1: row.contentB1 as Record<string, unknown> | null,
    question: row.question as Record<string, unknown> | null,
  }
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ leId: string; session: string }> }
) {
  const { leId, session } = await params

  const le = await db.query.lerneinheiten.findFirst({
    where: eq(lerneinheiten.leId, leId),
  })

  if (!le) {
    return NextResponse.json({ error: "LE nicht gefunden" }, { status: 404 })
  }

  const rows = await db
    .select()
    .from(contentSteps)
    .where(
      and(
        eq(contentSteps.leId, le.id),
        eq(contentSteps.session, session),
        eq(contentSteps.status, "published")
      )
    )
    .orderBy(asc(contentSteps.sortOrder))

  const steps = rows.map(mapStepToFrontend)

  return NextResponse.json({ session, steps, total: steps.length })
}
