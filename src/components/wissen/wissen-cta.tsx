import { WaitlistForm } from "@/components/marketing/waitlist-form"
import { SITE_NAME } from "@/lib/seo/site"

const LABELS = {
  emailLabel: "E-Mail-Adresse",
  emailPlaceholder: "deine@email.de",
  cta: "Auf die Warteliste",
  ctaLoading: "Wird gesendet…",
  privacy:
    "Kein Spam. Jederzeit abbestellbar. Server in Deutschland (DSGVO-konform).",
  successTitle: "Du bist auf der Warteliste!",
  successBody:
    "Wir melden uns, sobald es losgeht. Bis dahin: dranbleiben — du schaffst das.",
  errorGeneric: "Etwas ist schiefgelaufen. Bitte versuch es nochmal.",
}

/** Conversion-Block für /wissen-Seiten: kurzer Pitch + Warteliste. */
export function WissenCta({ source }: { source: string }) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="mt-12 rounded-3xl border-[1.5px] border-[var(--lern-accent)] bg-[var(--lern-accent-bg)] p-6 sm:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--lern-accent)]">
        {SITE_NAME}
      </p>
      <h2
        id="cta-heading"
        className="mt-2 text-xl font-bold leading-tight text-[var(--lern-text-primary)] sm:text-2xl"
      >
        Lern die ganze Pflegetheorie — verständlich, adaptiv, prüfungsnah.
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[var(--lern-text-secondary)]">
        {SITE_NAME} erklärt jedes Thema in deinem Tempo: einfache Sprache,
        Fallbeispiele, Karteikarten und Übungsfragen — fachlich belegt. Trag dich
        ein und sei beim Start dabei.
      </p>
      <div className="mt-6">
        <WaitlistForm locale="de" source={source} labels={LABELS} />
      </div>
    </section>
  )
}
