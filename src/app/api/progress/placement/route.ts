import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { placementTestResults, users } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq } from "drizzle-orm"
import { z } from "zod"

const placementSchema = z.object({
  sprachLevel: z.number().min(1).max(5),
  fachwissenLevel: z.number().min(1).max(5),
  details: z.record(z.string(), z.unknown()),
})

export async function POST(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const body = await request.json()
    const parsed = placementSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const data = parsed.data

    // 1. Placement-Ergebnis speichern
    await db.insert(placementTestResults).values({
      userId: auth.userId,
      sprachLevel: data.sprachLevel,
      fachwissenLevel: data.fachwissenLevel,
      details: data.details,
    })

    // 2. User-Profil aktualisieren (Zwei-Achsen)
    await db
      .update(users)
      .set({
        sprachLevel: data.sprachLevel,
        fachwissenLevel: data.fachwissenLevel,
        achsenLetztBerechnet: new Date(),
      })
      .where(eq(users.id, auth.userId))

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (error) {
    console.error("Progress placement error:", error)
    return NextResponse.json({ error: "Speichern fehlgeschlagen" }, { status: 500 })
  }
}
