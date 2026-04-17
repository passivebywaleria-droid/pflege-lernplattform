import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { userSchwaechen } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { z } from "zod"

const schwachenSchema = z.object({
  leId: z.string(),
  begriff: z.string(),
  fragetext: z.string(),
  richtigeAntwort: z.string(),
  falscheAntwort: z.string(),
  naechsteWiederholung: z.string().datetime(),
  intervallTage: z.number().int().min(1).default(1),
})

export async function POST(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const body = await request.json()
    const parsed = schwachenSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const data = parsed.data

    await db.insert(userSchwaechen).values({
      userId: auth.userId,
      leId: data.leId,
      begriff: data.begriff,
      fragetext: data.fragetext,
      richtigeAntwort: data.richtigeAntwort,
      falscheAntwort: data.falscheAntwort,
      naechsteWiederholung: new Date(data.naechsteWiederholung),
      intervallTage: data.intervallTage,
    })

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (error) {
    console.error("Progress schwaechen error:", error)
    return NextResponse.json({ error: "Speichern fehlgeschlagen" }, { status: 500 })
  }
}
