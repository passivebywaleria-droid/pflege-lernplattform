"use client"

/**
 * PlayGate — soft-Gate für Play-then-Gate (Pilot).
 *
 * Erscheint für nicht-eingeloggte Gäste im spannendsten Moment: nachdem sie
 * die 2. Frage beantwortet haben, ABER bevor sie das Ergebnis sehen. Der
 * Sunk-Cost (schon geantwortet, will wissen ob richtig) treibt die Konversion.
 *
 * - soft=true:  einmal wegtippbar ("Später"), danach greift es (soft=false)
 * - soft=false: verpflichtend — kein "Später" mehr
 *
 * Framing (VISION.md): nie Paywall. Kostenlos, um Ergebnis + Erklärung zu
 * sehen und den Fortschritt zu speichern.
 */

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Check } from "lucide-react"
import { trackFunnel } from "@/lib/funnel/track"

interface PlayGateProps {
  locale: string
  situationId: string
  ceId: string
  /** true = "Später" verfügbar (soft); false = verpflichtend */
  soft: boolean
  /** wird beim einmaligen Wegtippen aufgerufen (nur wenn soft) */
  onDismiss: () => void
}

const VORTEILE = [
  "Dein Ergebnis + die Erklärung sofort sehen",
  "Deinen Fortschritt speichern — auf jedem Gerät",
  "Kostenlos, ohne Risiko",
]

export function PlayGate({
  locale,
  situationId,
  ceId,
  soft,
  onDismiss,
}: PlayGateProps) {
  const nextUrl = `/${locale}/lernen/situation/${situationId}?ce=${ceId}`
  const registerHref = `/${locale}/mitmachen?next=${encodeURIComponent(nextUrl)}`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="play-gate-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-md rounded-3xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--lern-accent)]/12 text-[var(--lern-accent)]">
            <Sparkles className="h-6 w-6" />
          </span>
        </div>

        <h2
          id="play-gate-title"
          className="text-center text-base font-bold text-[var(--lern-text-primary)]"
        >
          Stark — du bist mittendrin!
        </h2>
        <p className="mt-1.5 text-center text-sm text-[var(--lern-text-secondary)]">
          Deine Antwort ist gespeichert. Erstelle einen kostenlosen Account, um
          dein Ergebnis und die Erklärung zu sehen und weiterzumachen.
        </p>

        <ul className="mt-4 space-y-2">
          {VORTEILE.map((v) => (
            <li
              key={v}
              className="flex items-start gap-2.5 text-sm text-[var(--lern-text-primary)]"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lern-accent)]" />
              <span>{v}</span>
            </li>
          ))}
        </ul>

        <Link
          href={registerHref}
          onClick={() => trackFunnel("gate_konvertiert", { situationId, soft })}
          className="mt-5 block w-full rounded-xl bg-[var(--lern-accent)] px-6 py-3.5 text-center text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
        >
          Kostenlos weitermachen
        </Link>

        {soft ? (
          <button
            onClick={() => {
              trackFunnel("gate_weggetippt", { situationId })
              onDismiss()
            }}
            className="mt-2 block w-full rounded-xl px-6 py-2.5 text-center text-sm font-medium text-[var(--lern-text-tertiary)] transition-colors hover:text-[var(--lern-text-secondary)]"
          >
            Später
          </button>
        ) : (
          <p className="mt-3 text-center text-xs text-[var(--lern-text-tertiary)]">
            Nur noch dieser kleine Schritt — dann geht&apos;s weiter.
          </p>
        )}
      </motion.div>
    </motion.div>
  )
}
