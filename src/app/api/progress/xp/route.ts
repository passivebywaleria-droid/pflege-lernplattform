import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { xpLog } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { z } from "zod"

const xpSchema = z.object({
  xpAmount: z.number().int().min(1),
  source: z.enum(["step", "session_complete", "streak_bonus", "daily_goal", "mastery_up", "exam", "flashcard"]),
  referenceId: z.string().optional(),
})

export async function POST(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const body = await request.json()
    const parsed = xpSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    await db.insert(xpLog).values({
      userId: auth.userId,
      xpAmount: parsed.data.xpAmount,
      source: parsed.data.source,
      referenceId: parsed.data.referenceId ?? null,
    })

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (error) {
    console.error("Progress XP error:", error)
    return NextResponse.json({ error: "Speichern fehlgeschlagen" }, { status: 500 })
  }
}
