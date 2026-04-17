import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { STRIPE_PRICES, checkoutSchema } from "@/lib/stripe/config"
import { requireAuth } from "@/lib/auth/require-auth"
import { db } from "@/lib/db"
import { users, schools } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export async function POST(request: Request) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  // Body parsen + validieren
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Ungültiger Body" }, { status: 400 })
  }

  const parsed = checkoutSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validierung fehlgeschlagen", details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const input = parsed.data

  // Rollen-Check
  if (input.type === "school") {
    if (!["principal", "admin"].includes(auth.role)) {
      return NextResponse.json(
        { error: "Nur Schulleiter können Schullizenzen kaufen" },
        { status: 403 }
      )
    }
    if (auth.schoolId !== input.schoolId) {
      return NextResponse.json(
        { error: "Schule stimmt nicht überein" },
        { status: 403 }
      )
    }
  }

  try {
    // Stripe Customer upsert
    let stripeCustomerId: string

    if (input.type === "school") {
      const [school] = await db
        .select({ stripeCustomerId: schools.stripeCustomerId, name: schools.name, contactEmail: schools.contactEmail })
        .from(schools)
        .where(eq(schools.id, input.schoolId))
        .limit(1)

      if (!school) {
        return NextResponse.json({ error: "Schule nicht gefunden" }, { status: 404 })
      }

      if (school.stripeCustomerId) {
        stripeCustomerId = school.stripeCustomerId
      } else {
        const customer = await stripe.customers.create({
          email: school.contactEmail ?? undefined,
          name: school.name,
          metadata: { schoolId: input.schoolId, type: "school" },
        })
        stripeCustomerId = customer.id

        await db
          .update(schools)
          .set({ stripeCustomerId: customer.id, updatedAt: new Date() })
          .where(eq(schools.id, input.schoolId))
      }
    } else {
      const [user] = await db
        .select({ stripeCustomerId: users.stripeCustomerId, email: users.email, name: users.name })
        .from(users)
        .where(eq(users.id, auth.userId))
        .limit(1)

      if (!user) {
        return NextResponse.json({ error: "User nicht gefunden" }, { status: 404 })
      }

      if (user.stripeCustomerId) {
        stripeCustomerId = user.stripeCustomerId
      } else {
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
    }

    // Checkout Session erstellen
    const origin = request.headers.get("origin") ?? "https://pflege-lernplattform.vercel.app"
    const locale = auth.locale ?? "de"

    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      mode: "subscription",
      line_items: [
        {
          price:
            input.type === "school"
              ? STRIPE_PRICES.schoolYearly
              : STRIPE_PRICES.individualMonthly,
          quantity: input.type === "school" ? input.studentCount : 1,
        },
      ],
      success_url: `${origin}/${locale}/fortschritt?checkout=success`,
      cancel_url: `${origin}/${locale}/fortschritt?checkout=canceled`,
      metadata: {
        userId: auth.userId,
        type: input.type,
        ...(input.type === "school"
          ? { schoolId: input.schoolId, studentCount: String(input.studentCount) }
          : {}),
      },
      tax_id_collection: { enabled: true },
      locale: locale === "ar" ? "auto" : locale === "tr" ? "tr" : "de",
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Checkout Fehler:", error)
    return NextResponse.json({ error: "Checkout fehlgeschlagen" }, { status: 500 })
  }
}
