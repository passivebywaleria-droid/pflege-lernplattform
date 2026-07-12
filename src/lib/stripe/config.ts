import { z } from "zod"

/** Stripe Price IDs — aus ENV laden */
export const STRIPE_PRICES = {
  schoolYearly: process.env.STRIPE_PRICE_SCHOOL_YEARLY ?? "",
  // B2C ≥18: Auto-Abo, 14,99 €/Monat (recurring).
  individualMonthly: process.env.STRIPE_PRICE_INDIVIDUAL_MONTHLY ?? "",
  // B2C 16–17: Einmalkauf 30 Tage, 14,99 € (one-time, kein Abo).
  individualOneTime: process.env.STRIPE_PRICE_INDIVIDUAL_ONETIME ?? "",
} as const

/** Zugangsdauer eines Einmalkaufs (16–17). */
export const ONE_TIME_ACCESS_DAYS = 30

/** Freemium-Grenze: so viele Situationen sind ohne Bezahlung spielbar. */
export const FREE_SITUATION_LIMIT = 3

/** Mindestalter für ein Auto-Abo (darunter: Einmalkauf). */
export const ADULT_AGE = 18

/** Anzeige-Preis (muss zum Stripe-Produkt passen). */
export const DISPLAY_PRICE_EUR = "14,99 €"

/** Checkout-Input: Schullizenz oder Einzellizenz */
export const checkoutSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("school"),
    schoolId: z.string().uuid(),
    studentCount: z.number().int().min(1).max(500),
  }),
  z.object({
    type: z.literal("individual"),
  }),
])

export type CheckoutInput = z.infer<typeof checkoutSchema>
