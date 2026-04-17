import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { userLernzielMastery } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq, and } from "drizzle-orm"
import { z } from "zod"

const masterySchema = z.object({
  lernzielId: z.string(),
  stufe: z.enum(["unbekannt", "versucht", "vertraut", "sicher", "gemeistert"]),
  richtigInFolge: z.number().int().min(0),
  gesamtVersuche: z.number().int().min(0),
  gesamtRichtig: z.number().int().min(0),
  bloomMax: z.number().int().min(0).max(6),
  naechsteWiederholung: z.string().datetime(),
})

export async function POST(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const body = await request.json()
    const parsed = masterySchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const data = parsed.data

    // Upsert
    const existing = await db
      .select({ id: userLernzielMastery.id })
      .from(userLernzielMastery)
      .where(
        and(
          eq(userLernzielMastery.userId, auth.userId),
          eq(userLernzielMastery.lernzielId, data.lernzielId)
        )
      )
      .limit(1)

    const values = {
      stufe: data.stufe,
      richtigInFolge: data.richtigInFolge,
      gesamtVersuche: data.gesamtVersuche,
      gesamtRichtig: data.gesamtRichtig,
      bloomMax: data.bloomMax,
      naechsteWiederholung: new Date(data.naechsteWiederholung),
      letzteAntwort: new Date(),
    }

    if (existing.length > 0) {
      await db
        .update(userLernzielMastery)
        .set(values)
        .where(eq(userLernzielMastery.id, existing[0].id))
    } else {
      await db.insert(userLernzielMastery).values({
        userId: auth.userId,
        lernzielId: data.lernzielId,
        ...values,
      })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error("Progress mastery error:", error)
    return NextResponse.json({ error: "Speichern fehlgeschlagen" }, { status: 500 })
  }
}
