"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles, Check } from "lucide-react"
import Link from "next/link"
import { trackFunnel } from "@/lib/funnel/track"
import { DISPLAY_PRICE_EUR } from "@/lib/stripe/config"

/**
 * PaywallGate — B2C-Monetarisierungs-Schwelle.
 *
 * Erscheint, wenn ein eingeloggter Schüler die (4.) Situation über die
 * Freemium-Grenze hinaus öffnet und keinen aktiven Zugang hat. Kein
 * „Zahlwand-Schock", sondern Erfolgs-Framing + klarer Wert.
 *
 * Alters-Weiche (isAdult, aus /api/billing/access):
 *  - ≥18: Auto-Abo, „jederzeit kündbar"
 *  - 16–17: Einmalkauf 30 Tage, „kein Abo, keine automatische Verlängerung"
 */

interface PaywallGateProps {
  locale: string
  situationId: string
  /** Interner Pfad, zu dem nach der Zahlung zurückgekehrt wird (die Situation). */
  next: string
  isAdult: boolean
  freeLimit: number
  /** „Vielleicht später" — zurück zu den freien Situationen. */
  onDismiss: () => void
}

const VORTEILE = [
  "Alle Situationen — jeder Fall, jedes Thema",
  "Alle Lerneinheiten und Fragetypen",
  "Dein Fortschritt bleibt gespeichert",
]

export function PaywallGate({
  locale,
  situationId,
  next,
  isAdult,
  freeLimit,
  onDismiss,
}: PaywallGateProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const shownRef = useRef(false)

  useEffect(() => {
    if (shownRef.current) return
    shownRef.current = true
    trackFunnel("paywall_gezeigt", { situationId, isAdult })
  }, [situationId, isAdult])

  async function checkout() {
    setLoading(true)
    setError(null)
    trackFunnel("paywall_konvertiert", { situationId, isAdult })
    try {
      const res = await fetch("/api/stripe/pilot-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ next }),
      })
      const body = await res.json().catch(() => ({}))
      if (res.ok && body.url) {
        window.location.href = body.url
        return
      }
      setError(body.error ?? "Checkout konnte nicht gestartet werden.")
      setLoading(false)
    } catch {
      setError("Netzwerkfehler. Bitte versuche es erneut.")
      setLoading(false)
    }
  }

  const preisZeile = isAdult
    ? `${DISPLAY_PRICE_EUR} / Monat · jederzeit kündbar`
    : `${DISPLAY_PRICE_EUR} für 30 Tage · kein Abo, keine automatische Verlängerung`

  const ctaText = isAdult
    ? `Für ${DISPLAY_PRICE_EUR}/Monat freischalten`
    : `Für ${DISPLAY_PRICE_EUR} freischalten (30 Tage)`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="paywall-title"
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
          id="paywall-title"
          className="text-center text-base font-bold text-[var(--lern-text-primary)]"
        >
          Du bist richtig drin — schalt alles frei
        </h2>
        <p className="mt-1.5 text-center text-sm text-[var(--lern-text-secondary)]">
          Du hast schon {freeLimit} Situationen gespielt. Mit Vollzugang lernst
          du ohne Grenze weiter.
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

        <p className="mt-4 text-center text-sm font-semibold text-[var(--lern-text-primary)]">
          {preisZeile}
        </p>
        <p className="mt-1 text-center text-xs text-[var(--lern-text-tertiary)]">
          Server in Deutschland · sichere Zahlung über Stripe
        </p>

        {error && (
          <p className="mt-3 text-center text-sm text-destructive">{error}</p>
        )}

        <button
          onClick={checkout}
          disabled={loading}
          className="mt-5 block w-full rounded-xl bg-[var(--lern-accent)] px-6 py-3.5 text-center text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] disabled:opacity-60"
        >
          {loading ? "Wird geöffnet…" : ctaText}
        </button>

        <button
          onClick={onDismiss}
          className="mt-2 block w-full rounded-xl px-6 py-2.5 text-center text-sm font-medium text-[var(--lern-text-tertiary)] transition-colors hover:text-[var(--lern-text-secondary)]"
        >
          Vielleicht später
        </button>

        <p className="mt-3 text-center text-[11px] text-[var(--lern-text-tertiary)]">
          Mit dem Freischalten stimmst du den{" "}
          <Link href={`/${locale}/agb`} className="underline">
            AGB
          </Link>
          ,{" "}
          <Link href={`/${locale}/widerruf`} className="underline">
            Widerrufsbelehrung
          </Link>{" "}
          und{" "}
          <Link href={`/${locale}/datenschutz`} className="underline">
            Datenschutz
          </Link>{" "}
          zu.
        </p>
      </motion.div>
    </motion.div>
  )
}
