import { NextResponse } from "next/server"
import { z } from "zod"
import { db } from "@/lib/db"
import { pushSubscriptions, dailyActivity, users } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq, sql } from "drizzle-orm"
import webpush from "web-push"

// VAPID Keys aus ENV
const VAPID_PUBLIC = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? ""
const VAPID_PRIVATE = process.env.VAPID_PRIVATE_KEY ?? ""

if (VAPID_PUBLIC && VAPID_PRIVATE) {
  webpush.setVapidDetails(
    "mailto:info@pflege-lernplattform.de",
    VAPID_PUBLIC,
    VAPID_PRIVATE
  )
}

const sendSchema = z.object({
  type: z.enum(["reminder", "custom"]),
  title: z.string().max(100).optional(),
  body: z.string().max(255).optional(),
  userId: z.string().uuid().optional(),
})

export async function POST(request: Request) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth
  if (auth.role !== "admin") {
    return NextResponse.json({ error: "Kein Zugriff" }, { status: 403 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Ungültiger Body" }, { status: 400 })
  }

  const parsed = sendSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Validierung fehlgeschlagen" }, { status: 400 })
  }

  if (!VAPID_PUBLIC || !VAPID_PRIVATE) {
    return NextResponse.json({ error: "VAPID Keys nicht konfiguriert" }, { status: 500 })
  }

  try {
    let subscriptions: { endpoint: string; p256dh: string; auth: string }[]

    if (parsed.data.type === "reminder") {
      // Alle Schüler die heute NICHT aktiv waren
      const inactiveUserIds = await db
        .select({ id: users.id })
        .from(users)
        .where(eq(users.role, "student"))
        .then((allStudents) =>
          db
            .select({ userId: dailyActivity.userId })
            .from(dailyActivity)
            .where(sql`${dailyActivity.datum} = current_date`)
            .then((active) => {
              const activeSet = new Set(active.map((a) => a.userId))
              return allStudents.filter((s) => !activeSet.has(s.id)).map((s) => s.id)
            })
        )

      if (inactiveUserIds.length === 0) {
        return NextResponse.json({ sent: 0, message: "Alle Schüler waren heute aktiv" })
      }

      subscriptions = await db
        .select({
          endpoint: pushSubscriptions.endpoint,
          p256dh: pushSubscriptions.p256dh,
          auth: pushSubscriptions.auth,
        })
        .from(pushSubscriptions)
        .where(sql`${pushSubscriptions.userId} = ANY(${inactiveUserIds})`)
    } else if (parsed.data.userId) {
      // Einzelne Notification
      subscriptions = await db
        .select({
          endpoint: pushSubscriptions.endpoint,
          p256dh: pushSubscriptions.p256dh,
          auth: pushSubscriptions.auth,
        })
        .from(pushSubscriptions)
        .where(eq(pushSubscriptions.userId, parsed.data.userId))
    } else {
      return NextResponse.json({ error: "userId für custom benötigt" }, { status: 400 })
    }

    const title = parsed.data.title ?? "Zeit zum Lernen!"
    const notifBody = parsed.data.body ?? "Du hast heute noch nicht gelernt. Nur 15 Minuten machen den Unterschied!"

    const payload = JSON.stringify({
      title,
      body: notifBody,
      icon: "/icons/icon-192x192.svg",
      url: "/lernen",
    })

    let sent = 0
    let failed = 0

    for (const sub of subscriptions) {
      try {
        await webpush.sendNotification(
          {
            endpoint: sub.endpoint,
            keys: { p256dh: sub.p256dh, auth: sub.auth },
          },
          payload
        )
        sent++
      } catch {
        failed++
        // Abgelaufene Subscription entfernen
        await db
          .delete(pushSubscriptions)
          .where(eq(pushSubscriptions.endpoint, sub.endpoint))
      }
    }

    return NextResponse.json({ sent, failed })
  } catch (error) {
    console.error("Push send error:", error)
    return NextResponse.json({ error: "Senden fehlgeschlagen" }, { status: 500 })
  }
}
