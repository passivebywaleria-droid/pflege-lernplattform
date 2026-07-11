import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MagicSignupForm } from "@/components/auth/magic-signup-form"

// Pilot-Signup (passwortlos, ≥16). Wird vom Play-then-Gate aus verlinkt.
export default function MitmachenPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Kostenlos weiterlernen
        </CardTitle>
        <p className="text-center text-sm text-muted-foreground">
          Ergebnis + Erklärung sehen und deinen Fortschritt speichern.
        </p>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<div className="h-64" />}>
          <MagicSignupForm />
        </Suspense>
      </CardContent>
    </Card>
  )
}
