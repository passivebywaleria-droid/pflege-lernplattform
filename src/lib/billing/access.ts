import { db } from "@/lib/db"
import { users, schools, situationFortschritt } from "@/lib/db/schema"
import { FREE_SITUATION_LIMIT, ADULT_AGE } from "@/lib/stripe/config"
import { eq } from "drizzle-orm"

/**
 * B2C-Zugangslogik (Freemium → Paywall).
 *
 * Aktiver Zugang liegt vor, wenn:
 *  - Auto-Abo aktiv ist (subscriptionStatus === "active", ≥18), ODER
 *  - ein Einmalkauf noch gültig ist (accessUntil > now, 16–17), ODER
 *  - die Schule eine Lizenz hat (B2B-Fallback, bestehend).
 *
 * Ohne aktiven Zugang sind die ersten FREE_SITUATION_LIMIT (3) *distinct*
 * Situationen frei; bereits begonnene bleiben immer zugänglich.
 */

export interface AccessState {
  hasAccess: boolean
  freeUsed: number
  freeLimit: number
  begonnene: string[]
  // Für die Paywall-Anzeige: ≥18 → Abo, sonst Einmalkauf.
  isAdult: boolean
}

/** Distinct situationIds, die der Nutzer bereits begonnen hat. */
async function begonneneSituationen(userId: string): Promise<string[]> {
  const rows = await db
    .selectDistinct({ situationId: situationFortschritt.situationId })
    .from(situationFortschritt)
    .where(eq(situationFortschritt.userId, userId))
  return rows.map((r) => r.situationId)
}

/** Lädt den vollständigen Zugangs-Zustand eines Nutzers. */
export async function getAccessState(userId: string): Promise<AccessState> {
  const [user] = await db
    .select({
      subscriptionStatus: users.subscriptionStatus,
      accessUntil: users.accessUntil,
      schoolId: users.schoolId,
      birthYear: users.birthYear,
    })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1)

  const currentYear = new Date().getFullYear()
  const isAdult =
    user?.birthYear != null && currentYear - user.birthYear >= ADULT_AGE

  // Pilot-Modus = kostenloser Early-Access: keine Paywall. EIN Flag steuert den
  // ganzen Pilot — derselbe Schalter befreit auch vom Einstufungs-Guard
  // (einstufungs-guard.tsx + lernen/page.tsx hören auf NEXT_PUBLIC_PILOT_MODE).
  let hasAccess = process.env.NEXT_PUBLIC_PILOT_MODE === "true"
  if (!hasAccess && user) {
    if (user.subscriptionStatus === "active") {
      hasAccess = true
    } else if (user.accessUntil && user.accessUntil.getTime() > Date.now()) {
      hasAccess = true
    } else if (user.schoolId) {
      const [school] = await db
        .select({ licenseType: schools.licenseType })
        .from(schools)
        .where(eq(schools.id, user.schoolId))
        .limit(1)
      hasAccess =
        school?.licenseType === "paid" || school?.licenseType === "pilot"
    }
  }

  const begonnene = await begonneneSituationen(userId)

  return {
    hasAccess,
    freeUsed: begonnene.length,
    freeLimit: FREE_SITUATION_LIMIT,
    begonnene,
    isAdult,
  }
}

/**
 * Darf der Nutzer diese Situation öffnen?
 * - mit aktivem Zugang: immer
 * - schon begonnene Situation: immer (kein Aussperren aus Bezahltem-Gefühl)
 * - sonst: nur solange die Freemium-Grenze nicht erreicht ist
 */
export function canOpenSituation(
  state: AccessState,
  situationId: string
): boolean {
  if (state.hasAccess) return true
  if (state.begonnene.includes(situationId)) return true
  return state.begonnene.length < state.freeLimit
}
