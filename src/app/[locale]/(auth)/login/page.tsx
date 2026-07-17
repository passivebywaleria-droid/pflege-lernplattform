import { Suspense } from "react"
import Link from "next/link"
import { MagicSignupForm } from "@/components/auth/magic-signup-form"

// Login = passwortlos per E-Mail-Code (wie /mitmachen, nur im Rückkehrer-Modus).
// Lern-Design statt shadcn/Glass-Card — gleiche Optik wie der Situation-Player
// (Waleria 2026-07-17: Anmeldeseite wirkte fremd zum Rest der App).
export default function LoginPage() {
  return (
    <div className="rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-6 shadow-sm">
      <h1 className="text-center text-xl font-bold text-[var(--lern-text-primary)]">
        Willkommen zurück!
      </h1>
      <p className="mt-1.5 mb-6 text-center text-sm text-[var(--lern-text-secondary)]">
        E-Mail eingeben — wir schicken dir deinen Login-Code.
      </p>
      <Suspense fallback={<div className="h-40" />}>
        <MagicSignupForm startMode="login" />
      </Suspense>
    </div>
  )
}
