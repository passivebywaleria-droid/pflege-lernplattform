import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { fallverlaeufe, lerneinheiten, examPatients } from "@/lib/db/schema"
import { eq, asc } from "drizzle-orm"

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

  const faelle = await db
    .select()
    .from(fallverlaeufe)
    .where(eq(fallverlaeufe.leId, le.id))
    .orderBy(asc(fallverlaeufe.sortOrder))

  // Resolve patient data for each fall
  const result = await Promise.all(
    faelle.map(async (fall) => {
      const patient = await db.query.examPatients.findFirst({
        where: eq(examPatients.patientId, fall.patientId),
      })
      return {
        fallId: fall.fallId,
        patient: patient
          ? {
              patientId: patient.patientId,
              name: patient.name,
              alter: patient.alter,
              geschlecht: patient.geschlecht,
              diagnosen: patient.diagnosen,
              steckbrief: patient.steckbrief,
            }
          : { patientId: fall.patientId, name: "Unbekannt", alter: 0, geschlecht: "d", diagnosen: [], steckbrief: "" },
        titel: fall.titel,
        titelB1: fall.titelB1,
        stationen: fall.stationen,
        fokus: fall.fokus,
      }
    })
  )

  return NextResponse.json(result)
}
