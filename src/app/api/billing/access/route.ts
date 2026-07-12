import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth/require-auth"
import { getAccessState, canOpenSituation } from "@/lib/billing/access"

// Auth-pflichtig (middleware verlangt Session-Cookie). Der Player fragt hier ab,
// ob eine Situation geöffnet werden darf oder das Paywall-Gate greift.
// GET ?situationId=…  → { hasAccess, freeUsed, freeLimit, begonnene, canOpen }
export async function GET(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const state = await getAccessState(auth.userId)
    const situationId = request.nextUrl.searchParams.get("situationId")
    const canOpen = situationId
      ? canOpenSituation(state, situationId)
      : state.hasAccess

    return NextResponse.json({ ...state, canOpen })
  } catch (error) {
    console.error("[billing/access] failed:", error)
    return NextResponse.json(
      { error: "Zugangsstatus konnte nicht geladen werden" },
      { status: 500 }
    )
  }
}
