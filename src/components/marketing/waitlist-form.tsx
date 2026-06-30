"use client"

import { useEffect, useState } from "react"

interface WaitlistFormLabels {
  emailLabel: string
  emailPlaceholder: string
  cta: string
  ctaLoading: string
  privacy: string
  successTitle: string
  successBody: string
  successDownload?: string
  errorGeneric: string
}

interface WaitlistFormProps {
  locale: string
  source?: string
  /** Optionaler Lead-Magnet-Download (z. B. /early). Ohne pdfHref → reine Warteliste. */
  pdfHref?: string
  /** Welcher Lead-Magnet versprochen wurde. Default: Karteikarten-PDF (für /early). */
  leadMagnet?: string
  labels: WaitlistFormLabels
}

type Status = "idle" | "loading" | "success" | "error"

export function WaitlistForm({
  locale,
  source,
  pdfHref,
  leadMagnet = "karteikarten-pdf",
  labels,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("") // Honeypot
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  // UTM-Attribution: wenn keine source als Prop kommt (statische Seite),
  // aus der URL lesen — so bleibt die Landing statisch cachebar.
  const [autoSource, setAutoSource] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (source) return
    const params = new URLSearchParams(window.location.search)
    setAutoSource(params.get("source") || params.get("utm_source") || undefined)
  }, [source])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          language: locale,
          source: source || autoSource || undefined,
          leadMagnet,
          website,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        setErrorMsg(data?.error || labels.errorGeneric)
        setStatus("error")
        return
      }

      setStatus("success")
    } catch {
      setErrorMsg(labels.errorGeneric)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border-[1.5px] border-[var(--lern-accent)] bg-[var(--lern-accent-bg)] p-6 text-center">
        <p className="mb-2 text-2xl">🎉</p>
        <h2 className="mb-2 text-base font-bold text-[var(--lern-text-primary)]">
          {labels.successTitle}
        </h2>
        <p className="text-sm text-[var(--lern-text-secondary)]">
          {labels.successBody}
        </p>
        {pdfHref && labels.successDownload && (
          <a
            href={pdfHref}
            download
            className="mt-5 inline-flex items-center justify-center rounded-full bg-[var(--lern-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4C6A52]"
          >
            {labels.successDownload}
          </a>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Honeypot — für Menschen unsichtbar */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <label htmlFor="waitlist-email" className="sr-only">
        {labels.emailLabel}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={labels.emailPlaceholder}
          disabled={status === "loading"}
          className="flex-1 rounded-full border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-5 py-3 text-sm text-[var(--lern-text-primary)] outline-none transition-colors placeholder:text-[var(--lern-text-tertiary)] focus:border-[var(--lern-accent)] disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-[var(--lern-accent)] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--lern-accent)]/25 transition-all hover:bg-[#4C6A52] hover:shadow-xl disabled:opacity-60"
        >
          {status === "loading" ? labels.ctaLoading : labels.cta}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-[#C96B5C]" role="alert">
          {errorMsg}
        </p>
      )}

      <p className="mt-3 text-xs text-[var(--lern-text-tertiary)]">{labels.privacy}</p>
    </form>
  )
}
