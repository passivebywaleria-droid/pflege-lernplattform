import { z } from "zod"

/** Stripe Price IDs — aus ENV laden */
export const STRIPE_PRICES = {
  schoolYearly: process.env.STRIPE_PRICE_SCHOOL_YEARLY ?? "",
  individualMonthly: process.env.STRIPE_PRICE_INDIVIDUAL_MONTHLY ?? "",
} as const

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
