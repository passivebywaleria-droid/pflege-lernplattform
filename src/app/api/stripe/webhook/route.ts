import { NextResponse } from "next/server"
import type Stripe from "stripe"
import { stripe } from "@/lib/stripe"
import { db } from "@/lib/db"
import { users, schools } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get("stripe-signature")

  if (!sig) {
    return NextResponse.json({ error: "Keine Signatur" }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error("Webhook-Signatur ungültig:", err)
    return NextResponse.json({ error: "Ungültige Signatur" }, { status: 400 })
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutCompleted(session)
        break
      }

      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice
        await handleInvoicePaid(invoice)
        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionUpdated(subscription)
        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionDeleted(subscription)
        break
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice
        await handlePaymentFailed(invoice)
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook-Handler Fehler:", error)
    return NextResponse.json({ error: "Handler fehlgeschlagen" }, { status: 500 })
  }
}

// ── Event Handlers ──

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const metadata = session.metadata ?? {}
  const { userId, type, schoolId, studentCount } = metadata
  const customerId = typeof session.customer === "string" ? session.customer : session.customer?.id

  if (!userId || !customerId) return

  if (type === "school" && schoolId) {
    await db
      .update(schools)
      .set({
        stripeCustomerId: customerId,
        licenseType: "paid",
        maxStudents: studentCount ? parseInt(studentCount) : 60,
        updatedAt: new Date(),
      })
      .where(eq(schools.id, schoolId))

    // Schulleiter-Status auch updaten
    await db
      .update(users)
      .set({
        subscriptionStatus: "active",
        updatedAt: new Date(),
      })
      .where(eq(users.id, userId))
  } else {
    // Einzellizenz
    await db
      .update(users)
      .set({
        stripeCustomerId: customerId,
        subscriptionStatus: "active",
        updatedAt: new Date(),
      })
      .where(eq(users.id, userId))
  }
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
  const customerId = typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id
  if (!customerId) return

  // User mit past_due → active
  await db
    .update(users)
    .set({ subscriptionStatus: "active", updatedAt: new Date() })
    .where(eq(users.stripeCustomerId, customerId))
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const customerId = typeof subscription.customer === "string" ? subscription.customer : null
  if (!customerId) return

  const status = mapStripeStatus(subscription.status)

  // User updaten
  await db
    .update(users)
    .set({ subscriptionStatus: status, updatedAt: new Date() })
    .where(eq(users.stripeCustomerId, customerId))

  // School updaten (falls vorhanden)
  const quantity = subscription.items.data[0]?.quantity
  if (quantity) {
    await db
      .update(schools)
      .set({ maxStudents: quantity, updatedAt: new Date() })
      .where(eq(schools.stripeCustomerId, customerId))
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const customerId = typeof subscription.customer === "string" ? subscription.customer : null
  if (!customerId) return

  await db
    .update(users)
    .set({ subscriptionStatus: "none", updatedAt: new Date() })
    .where(eq(users.stripeCustomerId, customerId))

  await db
    .update(schools)
    .set({ licenseType: "free", updatedAt: new Date() })
    .where(eq(schools.stripeCustomerId, customerId))
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const customerId = typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id
  if (!customerId) return

  await db
    .update(users)
    .set({ subscriptionStatus: "past_due", updatedAt: new Date() })
    .where(eq(users.stripeCustomerId, customerId))
}

// ── Helpers ──

function mapStripeStatus(
  status: Stripe.Subscription.Status
): "active" | "canceled" | "past_due" | "none" {
  switch (status) {
    case "active":
    case "trialing":
      return "active"
    case "canceled":
      return "canceled"
    case "past_due":
    case "unpaid":
      return "past_due"
    default:
      return "none"
  }
}
