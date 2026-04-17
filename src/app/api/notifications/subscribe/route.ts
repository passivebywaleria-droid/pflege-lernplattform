import { NextResponse } from "next/server"
import { z } from "zod"
import { db } from "@/lib/db"
import { pushSubscriptions } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq } from "drizzle-orm"

const subscribeSchema = z.object({
  endpoint: z.string().url(),
  keys: z.object({
    p256dh: z.string().min(1),
    auth: z.string().min(1),
  }),
})

export async function POST(request: Request) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Ungültiger Body" }, { status: 400 })
  }

  const parsed = subscribeSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Ungültige Subscription" }, { status: 400 })
  }

  try {
    // Upsert: gleicher Endpoint → updaten
    const existing = await db
      .select({ id: pushSubscriptions.id })
      .from(pushSubscriptions)
      .where(eq(pushSubscriptions.endpoint, parsed.data.endpoint))
      .limit(1)

    if (existing.length > 0) {
      await db
        .update(pushSubscriptions)
        .set({
          userId: auth.userId,
          p256dh: parsed.data.keys.p256dh,
          auth: parsed.data.keys.auth,
        })
        .where(eq(pushSubscriptions.id, existing[0].id))
    } else {
      await db.insert(pushSubscriptions).values({
        userId: auth.userId,
        endpoint: parsed.data.endpoint,
        p256dh: parsed.data.keys.p256dh,
        auth: parsed.data.keys.auth,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Push subscribe error:", error)
    return NextResponse.json({ error: "Speichern fehlgeschlagen" }, { status: 500 })
  }
}
