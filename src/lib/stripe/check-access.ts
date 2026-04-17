import { db } from "@/lib/db"
import { users, schools } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

/**
 * Prüft ob ein User ein aktives Abo hat (direkt oder über Schullizenz).
 * 
 * Reihenfolge:
 * 1. User selbst hat subscriptionStatus === "active" → true
 * 2. User gehört zu einer Schule mit licenseType === "paid" oder "pilot" → true
 * 3. Sonst → false
 */
export async function hasActiveSubscription(userId: string): Promise<boolean> {
  const [user] = await db
    .select({
      subscriptionStatus: users.subscriptionStatus,
      schoolId: users.schoolId,
    })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1)

  if (!user) return false

  // Eigenes Abo aktiv?
  if (user.subscriptionStatus === "active") return true

  // Schullizenz?
  if (user.schoolId) {
    const [school] = await db
      .select({ licenseType: schools.licenseType })
      .from(schools)
      .where(eq(schools.id, user.schoolId))
      .limit(1)

    if (school?.licenseType === "paid" || school?.licenseType === "pilot") {
      return true
    }
  }

  return false
}
