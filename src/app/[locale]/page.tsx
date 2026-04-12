import { useTranslations } from "next-intl"
import Link from "next/link"

export default function LandingPage() {
  const t = useTranslations("landing")

  return (
    <div className="flex min-h-screen flex-col bg-[var(--lern-bg-primary)] text-[var(--lern-text-primary)]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--lern-border)]/60 bg-[var(--lern-bg-primary)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--lern-accent)] text-sm font-bold text-white">P</span>
            <span className="text-lg font-bold">Pflege-Lernplattform</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="#demo"
              className="hidden text-sm font-medium text-[var(--lern-text-secondary)] transition-colors hover:text-[var(--lern-text-primary)] sm:block"
            >
              Demo ansehen
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-[var(--lern-text-secondary)] transition-colors hover:text-[var(--lern-text-primary)]"
            >
              Anmelden
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-[var(--lern-accent)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#B07A72]"
            >
              Kostenlos testen
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pb-20 pt-16 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-[var(--lern-border)] bg-[var(--lern-bg)] px-4 py-1.5 text-sm text-[var(--lern-text-secondary)]">
            Für Pflegeschulen und Pflegeschüler
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Theorieunterricht, der funktioniert — <span className="text-[var(--lern-accent)]">auch ohne Lehrer</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--lern-text-secondary)]">
            Die adaptive Lernplattform für die generalistische Pflegeausbildung.
            KI-gestützt, mehrsprachig, mobil. Für jedes Sprachniveau, für jedes Wissenslevel.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/register"
              className="rounded-full bg-[var(--lern-accent)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[var(--lern-accent)]/25 transition-all hover:bg-[#B07A72] hover:shadow-xl"
            >
              Kostenlos starten
            </Link>
            <Link
              href="#schulen"
              className="rounded-full border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-8 py-3.5 text-base font-semibold text-[var(--lern-text-primary)] transition-colors hover:bg-[var(--lern-bg)]"
            >
              Für Schulen anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Problem/Lösung */}
      <section className="border-t border-[var(--lern-border)]/60 bg-[var(--lern-bg)] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-[var(--lern-accent)]">
            Das Problem
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-center text-2xl font-semibold leading-relaxed sm:text-3xl">
            Lehrerausfall. Heterogene Klassen. Sprachbarrieren.
            <span className="text-[var(--lern-text-secondary)]"> Und 30 Schüler, die alle auf unterschiedlichem Niveau sind.</span>
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            <ProblemCard
              emoji="🏫"
              title="Lehrerausfall"
              problem="8 Unterrichtseinheiten ohne Lehrer — was tun?"
              solution="Jeder Schüler öffnet die App. Die Plattform plant den Tag."
            />
            <ProblemCard
              emoji="🌍"
              title="Sprachbarrieren"
              problem="B1-Schüler und Muttersprachler im selben Kurs"
              solution="Zwei-Achsen-System: Sprache und Fachwissen getrennt messen und fördern."
            />
            <ProblemCard
              emoji="📊"
              title="Kein Überblick"
              problem="Wer braucht Hilfe? Wer ist prüfungsreif?"
              solution="Ampel-Dashboard: 30 Sekunden — und Sie wissen wo jeder Schüler steht."
            />
          </div>
        </div>
      </section>

      {/* Features für Schulen */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-[var(--lern-accent)]">
            Was die Plattform kann
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-2xl font-semibold sm:text-3xl">
            Gebaut für den Alltag an Pflegeschulen
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="🧠"
              title="KI-gestützte Didaktik"
              description="Die KI erkennt, WARUM ein Schüler nicht versteht — und wechselt die Erklärungsstrategie. 6 verschiedene Wege zum selben Lernziel."
            />
            <FeatureCard
              icon="📱"
              title="27 Aufgabentypen"
              description="Multiple Choice, Zuordnung, Kreuzworträtsel, Fallbeispiele, Branching Scenarios, Sprechübungen — nie langweilig, nie gleich."
            />
            <FeatureCard
              icon="🌐"
              title="Mehrsprachig (DE/AR/TR)"
              description="Fachbegriffe auf Deutsch, Arabisch und Türkisch. Glossar mit Vorlesefunktion. B1/C1-Sprachumschalter."
            />
            <FeatureCard
              icon="📊"
              title="Lehrer-Dashboard"
              description="Ampel-System: Grün/Gelb/Rot pro Schüler. Klassenübersicht in 30 Sekunden. Prüfungsreife auf einen Blick."
            />
            <FeatureCard
              icon="🎯"
              title="Adaptives Lernen"
              description="Zwei Achsen — Sprachkompetenz × Fachwissen. Jeder Schüler bekommt andere Aufgaben. Automatisch angepasst."
            />
            <FeatureCard
              icon="📋"
              title="Lernzeit-Nachweis"
              description="Aktive Lernzeit dokumentiert. PDF-Export für die Prüfungszulassung. Pro Schüler und pro Klasse."
            />
          </div>
        </div>
      </section>

      {/* Demo-Bereich */}
      <section id="demo" className="border-t border-[var(--lern-border)]/60 bg-[var(--lern-bg)] px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--lern-accent)]">
            Jetzt ausprobieren
          </h2>
          <p className="mb-8 text-2xl font-semibold sm:text-3xl">
            Eine echte Lerneinheit durchspielen
          </p>
          <p className="mx-auto mb-10 max-w-xl text-[var(--lern-text-secondary)]">
            2 Lerneinheiten mit je 8 Sessions × 22 Steps.
            Interaktiv, adaptiv, mit KI-Feedback.
          </p>
          <Link
            href="/lernen"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--lern-accent)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[var(--lern-accent)]/25 transition-all hover:bg-[#B07A72] hover:shadow-xl"
          >
            <span>Demo-Lektion starten</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Lehrplan-Abdeckung */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-[var(--lern-accent)]">
            Lehrplan
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-2xl font-semibold sm:text-3xl">
            Alle 11 Curricularen Einheiten — Schritt für Schritt
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <CERow nr="01" title="Ausbildungsstart" status="verfuegbar" />
            <CERow nr="02" title="Zu pflegende Menschen in der Bewegung" status="verfuegbar" />
            <CERow nr="03" title="Erste Pflegeerfahrungen" status="geplant" />
            <CERow nr="04" title="Gesundheit fördern" status="geplant" />
            <CERow nr="05" title="Kurative Prozesse" status="geplant" />
            <CERow nr="06" title="In Akutsituationen sicher handeln" status="geplant" />
            <CERow nr="07" title="Rehabilitatives Pflegehandeln" status="geplant" />
            <CERow nr="08" title="Menschen in kritischen Lebenssituationen" status="geplant" />
            <CERow nr="09" title="Menschen bei der Lebensgestaltung leiten" status="geplant" />
            <CERow nr="10" title="Entwicklung und Gesundheit" status="geplant" />
            <CERow nr="11" title="Menschen in besonderen Lebenssituationen" status="geplant" />
          </div>
          <p className="mt-6 text-center text-sm text-[var(--lern-text-secondary)]">
            CE 01 und CE 02 sind spielbar (LE-01 + LE-06). Weitere CEs werden laufend ergänzt.
          </p>
        </div>
      </section>

      {/* Preise */}
      <section id="schulen" className="border-t border-[var(--lern-border)]/60 bg-[var(--lern-bg)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-[var(--lern-accent)]">
            Preise
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-2xl font-semibold sm:text-3xl">
            Transparent, fair, monatlich kündbar
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Schullizenz */}
            <div className="rounded-2xl border-2 border-[var(--lern-accent)] bg-[var(--lern-bg-primary)] p-8 shadow-sm">
              <div className="mb-2 inline-flex rounded-full bg-[var(--lern-accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--lern-accent)]">
                Empfohlen
              </div>
              <h3 className="mb-1 text-xl font-bold">Schullizenz</h3>
              <p className="mb-6 text-sm text-[var(--lern-text-secondary)]">Für Pflegeschulen und Bildungsträger</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">149 €</span>
                <span className="text-[var(--lern-text-secondary)]"> / Schüler / Jahr</span>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                <CheckItem text="Alle CEs und Lerneinheiten" />
                <CheckItem text="Lehrer-Dashboard mit Ampel-System" />
                <CheckItem text="Schulleiter-Übersicht" />
                <CheckItem text="Klassen-Verwaltung + CSV-Import" />
                <CheckItem text="Lernzeit-Nachweis + PDF-Export" />
                <CheckItem text="Prüfungsmodus" />
                <CheckItem text="DSGVO-konform, Server in Deutschland" />
                <CheckItem text="Monatlich kündbar" />
              </ul>
              <a
                href="mailto:info@pflege-lernplattform.de?subject=Schullizenz%20anfragen"
                className="block w-full rounded-full bg-[var(--lern-accent)] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#B07A72]"
              >
                Schullizenz anfragen
              </a>
            </div>
            {/* Einzellizenz */}
            <div className="rounded-2xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-8 shadow-sm">
              <h3 className="mb-1 text-xl font-bold">Einzellizenz</h3>
              <p className="mb-6 text-sm text-[var(--lern-text-secondary)]">Für Selbstlerner und Pflegeschüler</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">14,90 €</span>
                <span className="text-[var(--lern-text-secondary)]"> / Monat</span>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                <CheckItem text="Alle CEs und Lerneinheiten" />
                <CheckItem text="Persönliches Dashboard" />
                <CheckItem text="KI-Feedback und Erklärungen" />
                <CheckItem text="Glossar DE/AR/TR" />
                <CheckItem text="Spaced Repetition" />
                <CheckItem text="Prüfungsvorbereitung" />
                <CheckItem text="Monatlich kündbar" />
              </ul>
              <Link
                href="/register"
                className="block w-full rounded-full border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] py-3 text-center text-sm font-semibold text-[var(--lern-text-primary)] transition-colors hover:bg-[var(--lern-bg)]"
              >
                Kostenlos testen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust-Signale */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-4">
          <TrustBadge icon="🇩🇪" title="Server in Deutschland" subtitle="DSGVO-konform" />
          <TrustBadge icon="🔒" title="Keine Tracker" subtitle="Keine Werbung" />
          <TrustBadge icon="🗑️" title="Löschrecht" subtitle="Jederzeit löschbar" />
          <TrustBadge icon="👩‍⚕️" title="Von Dozentin geprüft" subtitle="Fachlich korrekt" />
        </div>
      </section>

      {/* CTA + Kontakt */}
      <section className="border-t border-[var(--lern-border)]/60 bg-[var(--lern-text-primary)] px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Bereit für besseren Theorieunterricht?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-[#a1a1a6]">
            Lassen Sie uns gemeinsam herausfinden, ob die Plattform zu Ihrer Schule passt.
            Unverbindlich, kostenlos, persönlich.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:info@pflege-lernplattform.de?subject=Schullizenz%20anfragen"
              className="rounded-full bg-[var(--lern-accent)] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#B07A72]"
            >
              Kontakt aufnehmen
            </a>
            <Link
              href="/lernen"
              className="rounded-full border border-[#424245] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-[#6e6e73]"
            >
              Erst die Demo ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--lern-border)]/60 bg-[var(--lern-bg)] px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[var(--lern-text-secondary)]">
            &copy; {new Date().getFullYear()} Pflege-Lernplattform
          </p>
          <div className="flex gap-6 text-sm text-[var(--lern-text-secondary)]">
            <a href="mailto:info@pflege-lernplattform.de" className="hover:text-[var(--lern-text-primary)]">Kontakt</a>
            <span className="cursor-default">Datenschutz</span>
            <span className="cursor-default">Impressum</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProblemCard({
  emoji,
  title,
  problem,
  solution,
}: {
  emoji: string
  title: string
  problem: string
  solution: string
}) {
  return (
    <div className="rounded-2xl bg-[var(--lern-bg-primary)] p-6 shadow-sm">
      <span className="mb-3 block text-3xl">{emoji}</span>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="mb-3 text-sm text-[#C96B5C]">{problem}</p>
      <p className="text-sm text-[var(--lern-text-secondary)]">{solution}</p>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-[var(--lern-border)]/60 bg-[var(--lern-bg-primary)] p-6 transition-shadow hover:shadow-md">
      <span className="mb-3 block text-2xl">{icon}</span>
      <h3 className="mb-2 font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--lern-text-secondary)]">{description}</p>
    </div>
  )
}

function CERow({ nr, title, status }: { nr: string; title: string; status: "verfuegbar" | "geplant" }) {
  const isAvailable = status === "verfuegbar"
  return (
    <div className={`flex items-center justify-between rounded-xl border px-4 py-3 ${isAvailable ? "border-[#6B8F71] bg-[#6B8F71]/5" : "border-[var(--lern-border)]/60 bg-[var(--lern-bg-primary)]"}`}>
      <div className="flex items-center gap-3">
        <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white ${isAvailable ? "bg-[#6B8F71]" : "bg-[#86868b]"}`}>
          {nr}
        </span>
        <span className={`text-sm font-medium ${isAvailable ? "text-[var(--lern-text-primary)]" : "text-[var(--lern-text-secondary)]"}`}>{title}</span>
      </div>
      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${isAvailable ? "bg-[#6B8F71]/10 text-[#6B8F71]" : "bg-[var(--lern-bg)] text-[var(--lern-text-tertiary)]"}`}>
        {isAvailable ? "Spielbar" : "In Arbeit"}
      </span>
    </div>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6B8F71]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <span>{text}</span>
    </li>
  )
}

function TrustBadge({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <span className="mb-2 block text-2xl">{icon}</span>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-[var(--lern-text-secondary)]">{subtitle}</p>
    </div>
  )
}
