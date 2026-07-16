import { Suspense } from "react"
import { MagicSignupForm } from "@/components/auth/magic-signup-form"

// Pilot-Signup (passwortlos, >=16). Wird vom Play-then-Gate aus verlinkt.
// Lern-Design statt shadcn-Card — gleiche Optik wie der Situation-Player
// (Dozentin-Feedback 2026-07-16: Seite wirkte fremd zu den Steps).
export default function MitmachenPage() {
  return (
    <div className="rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-6 shadow-sm">
      <h1 className="text-center text-xl font-bold text-[var(--lern-text-primary)]">
        Kostenlos weiterlernen
      </h1>
      <p className="mt-1.5 mb-6 text-center text-sm text-[var(--lern-text-secondary)]">
        Ergebnis + Erklärung sehen und deinen Fortschritt speichern.
      </p>
      <Suspense fallback={<div className="h-64" />}>
        <MagicSignupForm />
      </Suspense>
    </div>
  )
}
