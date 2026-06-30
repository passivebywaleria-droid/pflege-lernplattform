// Zentrale SEO-/Marken-Konfiguration.
// Domain an EINER Stelle: Env NEXT_PUBLIC_SITE_URL überschreibt, sonst Default carovia.de.
// Beim Domain-Wechsel nur die Env (oder diesen Default) anpassen.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://carovia.de"
).replace(/\/$/, "")

export const SITE_NAME = "Carovia"

export const SITE_TAGLINE =
  "Die ganze Pflegeausbildung lernen — auf einem Gerät."

export const SITE_DESCRIPTION =
  "Carovia ist die adaptive Lernplattform für die generalistische Pflegeausbildung: Prüfungswissen, Fallbeispiele und Karteikarten — verständlich erklärt, fachlich belegt."

// Öffentlich indexierter Wissens-Bereich ist deutschsprachig.
export const PUBLIC_LOCALE = "de"

/** Absolute URL für eine /wissen-Seite (immer de, kanonisch). */
export function wissenUrl(slug?: string): string {
  const base = `${SITE_URL}/${PUBLIC_LOCALE}/wissen`
  return slug ? `${base}/${slug}` : base
}
