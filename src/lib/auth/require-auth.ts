import { NextResponse } from "next/server"
import { getSession, type SessionPayload } from "./session"

/**
 * Auth-Guard für API-Routes. Gibt Session zurück oder 401-Response.
 *
 * Usage:
 *   const auth = await requireAuth()
 *   if (auth instanceof NextResponse) return auth
 *   const { userId } = auth
 */
export async function requireAuth(): Promise<SessionPayload | NextResponse> {
  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 })
  }
  return session
}
