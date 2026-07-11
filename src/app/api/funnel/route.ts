import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// Öffentlicher First-Party-Funnel-Sink (Play-then-Gate).
// DSGVO: nimmt NUR anonyme Event-Namen + unkritische Props (situationId, soft…)
// entgegen. Keine User-ID, keine E-Mail, kein Klartext. Aktuell reine
// Server-Log-Aggregation (Zeitreihe folgt bei Bedarf).

const funnelSchema = z.object({
  event: z.enum([
    "gast_start",
    "step_fertig",
    "gate_gezeigt",
    "gate_weggetippt",
    "gate_konvertiert",
    "account_erstellt",
  ]),
  props: z
    .record(z.string(), z.union([z.string(), z.number(), z.boolean()]))
    .optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)
    const parsed = funnelSchema.safeParse(body)
    if (!parsed.success) {
      // Ungültige Events still verwerfen (kein Angriffsvektor, keine Fehlermeldung nötig).
      return NextResponse.json({ ok: true })
    }
    const { event, props } = parsed.data
    console.info(`[funnel] ${event}`, props ? JSON.stringify(props) : "")
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: true })
  }
}
