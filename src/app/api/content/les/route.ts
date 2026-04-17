import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { lerneinheiten, ceUnits } from "@/lib/db/schema"
import { eq, asc } from "drizzle-orm"

export async function GET() {
  const les = await db
    .select({
      leId: lerneinheiten.leId,
      title: lerneinheiten.title,
      titleShort: lerneinheiten.titleShort,
      zeitrichtwert: lerneinheiten.zeitrichtwert,
      sessionCount: lerneinheiten.sessionCount,
      status: lerneinheiten.status,
      ceNumber: ceUnits.number,
    })
    .from(lerneinheiten)
    .innerJoin(ceUnits, eq(lerneinheiten.ceId, ceUnits.id))
    .where(eq(lerneinheiten.status, "published"))
    .orderBy(asc(lerneinheiten.sortOrder))

  // Map to LeManifestEntry shape
  const manifest = les.map((le) => ({
    leId: le.leId,
    ceId: `ce-${String(le.ceNumber).padStart(2, "0")}`,
    title: le.title,
    titleShort: le.titleShort,
    zeitrichtwert: le.zeitrichtwert,
    sessions: Array.from({ length: le.sessionCount }, (_, i) => `s${i + 1}`),
    hasGlossar: true,
    status: le.status === "published" ? "geprueft" : "rohmaterial",
  }))

  return NextResponse.json(manifest)
}
