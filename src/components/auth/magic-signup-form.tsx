"use client"

import { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"
import { useLocale } from "next-intl"
import { KeyRound } from "lucide-react"
import {
  magicRequestSchema,
  magicLoginSchema,
  type MagicRequestInput,
  type MagicLoginInput,
} from "@/lib/auth/validation"
import { trackFunnel } from "@/lib/funnel/track"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/**
 * Magic-Signup (Pilot) — passwortlos, minimal: E-Mail + Spitzname +
 * Geburtsjahr + ≥16-Bestätigung. Fordert einen 6-stelligen Login-Code an,
 * der IM SELBEN Tab eingegeben wird (kein App-Wechsel → Gast-Fortschritt und
 * Session bleiben im gleichen Browser). Rückkehrer wechseln in den Login-Modus.
 */

/** Was zum erneuten Senden eines Codes nötig ist. */
interface PendingSend {
  email: string
  endpoint: string
  body: Record<string, unknown>
  isSignup: boolean
}

export function MagicSignupForm() {
  const locale = useLocale()
  const searchParams = useSearchParams()
  const next = searchParams.get("next") ?? undefined

  const [mode, setMode] = useState<"signup" | "login">("signup")
  const [pending, setPending] = useState<PendingSend | null>(null)

  // Code-Eingabe-Schritt
  if (pending) {
    return (
      <OtpCodeStep
        pending={pending}
        next={next}
        onBack={() => setPending(null)}
      />
    )
  }

  if (mode === "login") {
    return (
      <MagicLoginForm
        next={next}
        locale={locale}
        onCodeSent={setPending}
        onSwitchToSignup={() => setMode("signup")}
      />
    )
  }

  return (
    <MagicSignupFields
      next={next}
      locale={locale}
      onCodeSent={setPending}
      onSwitchToLogin={() => setMode("login")}
    />
  )
}

/** Signup-Formular (neuer Nutzer). */
function MagicSignupFields({
  next,
  locale,
  onCodeSent,
  onSwitchToLogin,
}: {
  next?: string
  locale: string
  onCodeSent: (p: PendingSend) => void
  onSwitchToLogin: () => void
}) {
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MagicRequestInput>({
    resolver: zodResolver(magicRequestSchema),
    defaultValues: {
      language: (locale as "de" | "ar" | "tr") ?? "de",
      next,
    },
  })

  async function onSubmit(data: MagicRequestInput) {
    setServerError(null)
    const body = { ...data, language: locale, next }
    try {
      const res = await fetch("/api/auth/magic/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      const resBody = await res.json().catch(() => ({}))
      if (!res.ok) {
        setServerError(
          resBody.error ?? "Etwas ist schiefgelaufen. Bitte versuche es erneut."
        )
        return
      }
      onCodeSent({
        email: data.email,
        endpoint: "/api/auth/magic/request",
        body,
        isSignup: true,
      })
    } catch {
      setServerError("Netzwerkfehler. Bitte versuche es erneut.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="spitzname">Spitzname</Label>
        <Input
          id="spitzname"
          type="text"
          autoComplete="nickname"
          placeholder="Wie sollen wir dich nennen?"
          {...register("spitzname")}
        />
        {errors.spitzname && (
          <p className="text-sm text-destructive">{errors.spitzname.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-Mail</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="du@beispiel.de"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="birthYear">Geburtsjahr</Label>
        <Input
          id="birthYear"
          type="number"
          inputMode="numeric"
          placeholder="z. B. 2007"
          {...register("birthYear", { valueAsNumber: true })}
        />
        {errors.birthYear && (
          <p className="text-sm text-destructive">{errors.birthYear.message}</p>
        )}
      </div>

      <label className="flex items-start gap-2.5 text-sm">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
          {...register("consent")}
        />
        <span className="text-muted-foreground">
          Ich bin mindestens 16 Jahre alt und stimme der Verarbeitung meiner
          Angaben zum Lernen zu.
        </span>
      </label>
      {errors.consent && (
        <p className="text-sm text-destructive">{errors.consent.message}</p>
      )}

      {serverError && <p className="text-sm text-destructive">{serverError}</p>}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Wird gesendet…" : "Code schicken"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Kein Passwort nötig. Du bekommst einen 6-stelligen Code per E-Mail.
      </p>

      <p className="text-center text-sm">
        <button
          type="button"
          className="font-medium text-primary underline-offset-2 hover:underline"
          onClick={onSwitchToLogin}
        >
          Schon dabei? Einloggen — nur E-Mail nötig
        </button>
      </p>
    </form>
  )
}

/**
 * Rückkehrer-Login — nur E-Mail. Antwort ist bewusst neutral formuliert
 * (verrät nicht, ob die E-Mail registriert ist).
 */
function MagicLoginForm({
  next,
  locale,
  onCodeSent,
  onSwitchToSignup,
}: {
  next?: string
  locale: string
  onCodeSent: (p: PendingSend) => void
  onSwitchToSignup: () => void
}) {
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MagicLoginInput>({
    resolver: zodResolver(magicLoginSchema),
    defaultValues: {
      language: (locale as "de" | "ar" | "tr") ?? "de",
      next,
    },
  })

  async function onSubmit(data: MagicLoginInput) {
    setServerError(null)
    const body = { ...data, language: locale, next }
    try {
      const res = await fetch("/api/auth/magic/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      const resBody = await res.json().catch(() => ({}))
      if (!res.ok) {
        setServerError(
          resBody.error ?? "Etwas ist schiefgelaufen. Bitte versuche es erneut."
        )
        return
      }
      onCodeSent({
        email: data.email,
        endpoint: "/api/auth/magic/login",
        body,
        isSignup: false,
      })
    } catch {
      setServerError("Netzwerkfehler. Bitte versuche es erneut.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="login-email">E-Mail</Label>
        <Input
          id="login-email"
          type="email"
          autoComplete="email"
          placeholder="du@beispiel.de"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {serverError && <p className="text-sm text-destructive">{serverError}</p>}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Wird gesendet…" : "Code schicken"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Kein Passwort nötig. Du bekommst einen 6-stelligen Code per E-Mail.
      </p>

      <p className="text-center text-sm">
        <button
          type="button"
          className="font-medium text-primary underline-offset-2 hover:underline"
          onClick={onSwitchToSignup}
        >
          Neu hier? Kostenlos mitmachen
        </button>
      </p>
    </form>
  )
}

const RESEND_COOLDOWN_SECONDS = 30

/**
 * Code-Eingabe — der Nutzer tippt den 6-stelligen Code ein. Bei Erfolg
 * navigiert die Seite hart zu `next`, damit der Player im selben Tab neu lädt
 * und den Gast-Stand mergt.
 */
function OtpCodeStep({
  pending,
  next,
  onBack,
}: {
  pending: PendingSend
  next?: string
  onBack: () => void
}) {
  const [code, setCode] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [cooldown, setCooldown] = useState(RESEND_COOLDOWN_SECONDS)
  const [resendHint, setResendHint] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Cooldown-Countdown fürs erneute Senden.
  useEffect(() => {
    if (cooldown <= 0) return
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000)
    return () => clearTimeout(t)
  }, [cooldown])

  // Fokus aufs Code-Feld beim Betreten.
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  async function verify(currentCode: string) {
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch("/api/auth/magic/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: pending.email, code: currentCode, next }),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(body.error ?? "Code stimmt nicht.")
        setCode("")
        inputRef.current?.focus()
        return
      }
      if (pending.isSignup) {
        trackFunnel("account_erstellt", { next })
      }
      // Harte Navigation → Player lädt neu, /api/auth/me ist jetzt authentifiziert,
      // Gast-localStorage wird gemergt.
      window.location.href = body.next ?? next ?? "/"
    } catch {
      setError("Netzwerkfehler. Bitte versuche es erneut.")
    } finally {
      setSubmitting(false)
    }
  }

  function onCodeChange(raw: string) {
    const digits = raw.replace(/[^0-9]/g, "").slice(0, 6)
    setCode(digits)
    setError(null)
    // Automatisch bestätigen, sobald 6 Ziffern eingegeben sind.
    if (digits.length === 6 && !submitting) {
      void verify(digits)
    }
  }

  async function resend() {
    if (cooldown > 0) return
    setResendHint(null)
    setError(null)
    try {
      const res = await fetch(pending.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pending.body),
      })
      if (res.ok) {
        setResendHint("Neuer Code ist unterwegs.")
        setCooldown(RESEND_COOLDOWN_SECONDS)
      } else {
        setError("Erneutes Senden fehlgeschlagen. Bitte versuche es später.")
      }
    } catch {
      setError("Netzwerkfehler beim erneuten Senden.")
    }
  }

  return (
    <div className="space-y-5">
      <div className="text-center">
        <span className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <KeyRound className="h-7 w-7" />
        </span>
        <h2 className="text-lg font-bold">Code eingeben</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Wir haben einen 6-stelligen Code an <strong>{pending.email}</strong>{" "}
          geschickt. Gib ihn hier ein — bleib einfach in diesem Fenster.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="otp" className="sr-only">
          6-stelliger Code
        </Label>
        <Input
          id="otp"
          ref={inputRef}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={6}
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          placeholder="••••••"
          className="text-center text-2xl font-bold tracking-[0.4em]"
          disabled={submitting}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
        {resendHint && (
          <p className="text-sm text-[var(--lern-accent,#6B8F71)]">
            {resendHint}
          </p>
        )}
      </div>

      <Button
        type="button"
        className="w-full"
        disabled={submitting || code.length !== 6}
        onClick={() => verify(code)}
      >
        {submitting ? "Wird geprüft…" : "Bestätigen"}
      </Button>

      <div className="flex items-center justify-between text-sm">
        <button
          type="button"
          className="font-medium text-muted-foreground underline-offset-2 hover:underline"
          onClick={onBack}
        >
          E-Mail ändern
        </button>
        <button
          type="button"
          disabled={cooldown > 0}
          className="font-medium text-primary underline-offset-2 hover:underline disabled:text-muted-foreground disabled:no-underline"
          onClick={resend}
        >
          {cooldown > 0 ? `Erneut senden (${cooldown}s)` : "Code erneut senden"}
        </button>
      </div>
    </div>
  )
}
