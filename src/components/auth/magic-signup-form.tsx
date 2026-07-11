"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"
import { useLocale } from "next-intl"
import { MailCheck } from "lucide-react"
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
 * Geburtsjahr + ≥16-Bestätigung. Fordert einen Login-Link an.
 * Rückkehrer wechseln in den Login-Modus (nur E-Mail).
 */
export function MagicSignupForm() {
  const locale = useLocale()
  const searchParams = useSearchParams()
  const next = searchParams.get("next") ?? undefined

  const [mode, setMode] = useState<"signup" | "login">("signup")
  const [serverError, setServerError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [sentEmail, setSentEmail] = useState("")

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
    try {
      const res = await fetch("/api/auth/magic/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, language: locale, next }),
      })
      const body = await res.json().catch(() => ({}))

      if (!res.ok) {
        setServerError(
          body.error ?? "Etwas ist schiefgelaufen. Bitte versuche es erneut."
        )
        return
      }

      trackFunnel("account_erstellt", { next })
      setSentEmail(data.email)
      setSent(true)
    } catch {
      setServerError("Netzwerkfehler. Bitte versuche es erneut.")
    }
  }

  if (sent) {
    return (
      <div className="space-y-4 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <MailCheck className="h-7 w-7" />
        </span>
        <h2 className="text-lg font-bold">Fast geschafft!</h2>
        <p className="text-sm text-muted-foreground">
          {mode === "login" ? (
            <>
              Wenn ein Konto mit <strong>{sentEmail}</strong> existiert, haben
              wir dir einen Login-Link geschickt. Der Link gilt 30 Minuten.
            </>
          ) : (
            <>
              Wir haben dir einen Login-Link an <strong>{sentEmail}</strong>{" "}
              geschickt. Tippe darauf, um weiterzulernen. Der Link gilt 30
              Minuten.
            </>
          )}
        </p>
        <p className="text-xs text-muted-foreground">
          Keine Mail bekommen? Schau im Spam-Ordner — oder fordere den Link
          gleich noch einmal an.
        </p>
      </div>
    )
  }

  if (mode === "login") {
    return (
      <MagicLoginForm
        next={next}
        locale={locale}
        onSent={(email) => {
          setSentEmail(email)
          setSent(true)
        }}
        onSwitchToSignup={() => {
          setServerError(null)
          setMode("signup")
        }}
      />
    )
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
        {isSubmitting ? "Wird gesendet…" : "Login-Link schicken"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Kein Passwort nötig. Du bekommst einen Link per E-Mail.
      </p>

      <p className="text-center text-sm">
        <button
          type="button"
          className="font-medium text-primary underline-offset-2 hover:underline"
          onClick={() => setMode("login")}
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
  onSent,
  onSwitchToSignup,
}: {
  next?: string
  locale: string
  onSent: (email: string) => void
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
    try {
      const res = await fetch("/api/auth/magic/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, language: locale, next }),
      })
      const body = await res.json().catch(() => ({}))

      if (!res.ok) {
        setServerError(
          body.error ?? "Etwas ist schiefgelaufen. Bitte versuche es erneut."
        )
        return
      }

      onSent(data.email)
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
        {isSubmitting ? "Wird gesendet…" : "Login-Link schicken"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Kein Passwort nötig. Du bekommst einen Link per E-Mail.
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
