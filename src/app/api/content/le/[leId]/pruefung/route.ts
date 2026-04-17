import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { examCases, examPatients, lerneinheiten } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

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

  const exam = await db.query.examCases.findFirst({
    where: eq(examCases.leId, le.id),
  })

  if (!exam) {
    return NextResponse.json({ error: "Kein Prüfungsfall" }, { status: 404 })
  }

  // Resolve patient data
  const patient = await db.query.examPatients.findFirst({
    where: eq(examPatients.patientId, exam.patientId),
  })

  return NextResponse.json({
    caseId: exam.caseId,
    patient: patient
      ? {
          patientId: patient.patientId,
          name: patient.name,
          alter: patient.alter,
          geschlecht: patient.geschlecht,
          diagnosen: patient.diagnosen,
          steckbrief: patient.steckbrief,
        }
      : null,
    titel: exam.titel,
    schwierigkeit: exam.schwierigkeit,
    bloomRange: exam.bloomRange,
    zeitLimitMinuten: exam.zeitLimitMinuten,
    phasen: exam.phasen,
  })
}
