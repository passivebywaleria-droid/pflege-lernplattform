import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { lernSnacks, lerneinheiten } from "@/lib/db/schema"
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

  const snacks = await db
    .select()
    .from(lernSnacks)
    .where(eq(lernSnacks.leId, le.id))
    .orderBy(asc(lernSnacks.sortOrder))

  return NextResponse.json(snacks)
}
