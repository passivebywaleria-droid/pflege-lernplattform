import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { stripe } from "@/lib/stripe"
import { STRIPE_PRICES, ADULT_AGE } from "@/lib/stripe/config"
import { requireAuth } from "@/lib/auth/require-auth"
import { db } from "@/lib/db"
import { users } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

// B2C-Pilot-Checkout. Auth-pflichtig (middleware verlangt Session-Cookie).
// Alters-Weiche: ≥18 → Auto-Abo (subscription), 16–17 → Einmalkauf 30 Tage
// (payment, kein Dauerschuldverhältnis). Führt `next` durch, damit der Schüler
// nach der Zahlung zurück in die Situation kommt (nicht ins Dashboard).

const bodySchema = z.object({
  // Interner Pfad, zu dem nach Erfolg zurückgekehrt wird.
  next: z.string().optional(),
})

/** Nur interne Pfade zulassen (Open-Redirect-Schutz). */
function safeNext(next: string | undefined, fallback: string): string {
  if (!next || !next.startsWith("/")) return fallback
  if (next.startsWith("//") || next.startsWith("/\\")) return fallback
  return next
}

export async function POST(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    raw = {}
  }
  const parsed = bodySchema.safeParse(raw ?? {})
  if (!parsed.success) {
    return NextResponse.json({ error: "Ungültiger Body" }, { status: 400 })
  }

  try {
    const [user] = await db
      .select({
        stripeCustomerId: users.stripeCustomerId,
        email: users.email,
        name: users.name,
        birthYear: users.birthYear,
      })
      .from(users)
      .where(eq(users.id, auth.userId))
      .limit(1)

    if (!user) {
      return NextResponse.json({ error: "User nicht gefunden" }, { status: 404 })
    }

    // Alters-Weiche. Ohne Geburtsjahr konservativ Einmalkauf (kein Auto-Abo für
    // potenziell Minderjährige).
    const currentYear = new Date().getFullYear()
    const isAdult =
      user.birthYear != null && currentYear - user.birthYear >= ADULT_AGE

    const price = isAdult
      ? STRIPE_PRICES.individualMonthly
      : STRIPE_PRICES.individualOneTime
    if (!price) {
      console.error(
        `[pilot-checkout] Stripe-Preis fehlt (${isAdult ? "abo" : "einmal"})`
      )
      return NextResponse.json(
        { error: "Zahlung ist noch nicht konfiguriert." },
        { status: 503 }
      )
    }

    // Stripe Customer upsert.
    let stripeCustomerId = user.stripeCustomerId ?? ""
    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name ?? undefined,
        metadata: { userId: auth.userId, type: "individual" },
      })
      stripeCustomerId = customer.id
      await db
        .update(users)
        .set({ stripeCustomerId: customer.id, updatedAt: new Date() })
        .where(eq(users.id, auth.userId))
    }

    const origin =
      request.headers.get("origin") ?? "https://carovia.de"
    const locale = auth.locale ?? "de"
    const back = safeNext(parsed.data.next, `/${locale}/lernen`)
    const sep = back.includes("?") ? "&" : "?"

    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      mode: isAdult ? "subscription" : "payment",
      line_items: [{ price, quantity: 1 }],
      success_url: `${origin}${back}${sep}checkout=success`,
      cancel_url: `${origin}${back}${sep}checkout=canceled`,
      metadata: {
        userId: auth.userId,
        kind: isAdult ? "pilot_abo" : "pilot_einmal",
      },
      locale: locale === "ar" ? "auto" : locale === "tr" ? "tr" : "de",
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("[pilot-checkout] failed:", error)
    return NextResponse.json({ error: "Checkout fehlgeschlagen" }, { status: 500 })
  }
}
