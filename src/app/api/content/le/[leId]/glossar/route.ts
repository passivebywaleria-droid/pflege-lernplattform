import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { glossarEntries, lerneinheiten } from "@/lib/db/schema"
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

  const glossar = await db
    .select()
    .from(glossarEntries)
    .where(eq(glossarEntries.leId, le.id))
    .orderBy(asc(glossarEntries.sortOrder))

  return NextResponse.json(glossar)
}
