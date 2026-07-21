import { db } from "@/lib/db"
import { situationFortschritt } from "@/lib/db/schema"
import { eq, desc } from "drizzle-orm"

/**
 * Letzter Situations-Fortschritt eines eingeloggten Nutzers — für den
 * „Weiterlernen"-Rückweg (session-aware Landing, SPEC-PILOT-FLOW Kante 7).
 * Retention-Hebel Nr. 1: der Rückkehrer muss ohne Suchen zurück in den Flow.
 */
export interface LetzterFortschritt {
  situationId: string
  ceId: string
  isComplete: boolean
}

export async function getLetzterFortschritt(
  userId: string
): Promise<LetzterFortschritt | null> {
  const [row] = await db
    .select({
      situationId: situationFortschritt.situationId,
      ceId: situationFortschritt.ceId,
      isComplete: situationFortschritt.isComplete,
    })
    .from(situationFortschritt)
    .where(eq(situationFortschritt.userId, userId))
    .orderBy(desc(situationFortschritt.updatedAt))
    .limit(1)
  return row ?? null
}
