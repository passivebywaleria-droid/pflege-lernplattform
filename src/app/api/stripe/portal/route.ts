import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { requireAuth } from "@/lib/auth/require-auth"
import { db } from "@/lib/db"
import { users, schools } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export async function POST(request: Request) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    let stripeCustomerId: string | null = null

    // Schulleiter → School Customer, sonst → User Customer
    if (["principal", "admin"].includes(auth.role) && auth.schoolId) {
      const [school] = await db
        .select({ stripeCustomerId: schools.stripeCustomerId })
        .from(schools)
        .where(eq(schools.id, auth.schoolId))
        .limit(1)

      stripeCustomerId = school?.stripeCustomerId ?? null
    }

    if (!stripeCustomerId) {
      const [user] = await db
        .select({ stripeCustomerId: users.stripeCustomerId })
        .from(users)
        .where(eq(users.id, auth.userId))
        .limit(1)

      stripeCustomerId = user?.stripeCustomerId ?? null
    }

    if (!stripeCustomerId) {
      return NextResponse.json(
        { error: "Kein aktives Abo gefunden" },
        { status: 404 }
      )
    }

    const origin = request.headers.get("origin") ?? "https://pflege-lernplattform.vercel.app"
    const locale = auth.locale ?? "de"

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: `${origin}/${locale}/fortschritt`,
    })

    return NextResponse.json({ url: portalSession.url })
  } catch (error) {
    console.error("Portal Fehler:", error)
    return NextResponse.json({ error: "Portal fehlgeschlagen" }, { status: 500 })
  }
}
