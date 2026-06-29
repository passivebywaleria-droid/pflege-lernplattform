import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { db } from "@/lib/db"
import { waitlistSignups } from "@/lib/db/schema"

// Öffentlicher Endpunkt (siehe middleware apiPublicPaths).
// DSGVO: speichert nur E-Mail + Sprache + Herkunft. Server DE.

const waitlistSchema = z.object({
  email: z.string().trim().toLowerCase().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  language: z.enum(["de", "ar", "tr"]).default("de"),
  source: z.string().trim().max(80).optional(),
  leadMagnet: z.string().trim().max(80).optional(),
  // Honeypot: echte Nutzer lassen das Feld leer, Bots füllen es.
  website: z.string().max(0).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)
    const parsed = waitlistSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      )
    }

    // Honeypot getroffen → so tun als ob alles ok ist, nichts speichern.
    if (parsed.data.website) {
      return NextResponse.json({ ok: true })
    }

    const { email, language, source, leadMagnet } = parsed.data

    // onConflictDoNothing: doppelte E-Mail ist kein Fehler (keine Enumeration).
    await db
      .insert(waitlistSignups)
      .values({ email, language, source, leadMagnet })
      .onConflictDoNothing({ target: waitlistSignups.email })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[waitlist] insert failed:", err)
    return NextResponse.json(
      { error: "Etwas ist schiefgelaufen. Bitte versuche es später erneut." },
      { status: 500 }
    )
  }
}
