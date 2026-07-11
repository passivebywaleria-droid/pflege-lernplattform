import { Check } from "lucide-react"

export interface PhoneMockupLabels {
  appTitle: string
  appSubtitle: string
  question: string
  scenario: string
  optionWait: string
  optionCorrect: string
  optionPulse: string
  feedbackTitle: string
  feedbackBody: string
  nextButton: string
}

/**
 * Statisches Smartphone-Mockup: zeigt einen fachlich korrekten Screenshot-Zustand
 * aus CE 06 (Reanimation — Schnappatmung erkennen, ERC-Leitlinien 2021).
 * Reine Darstellung — nutzt bewusst NICHT die echte Step-Logik (step-renderer).
 */
export function PhoneMockup({ labels }: { labels: PhoneMockupLabels }) {
  return (
    <div
      className="mx-auto w-full max-w-[320px] rounded-[36px] border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-3 shadow-xl shadow-[var(--lern-accent)]/15"
      dir="ltr"
    >
      <div className="rounded-[26px] bg-[var(--lern-bg)] p-4 text-start">
        {/* Fall-Kopf */}
        <div className="mb-3 flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--lern-accent)] font-[family-name:var(--font-newsreader)] text-sm font-semibold text-white">
            R
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-bold text-[var(--lern-text-primary)]">{labels.appTitle}</p>
            <p className="truncate text-[10px] text-[var(--lern-text-tertiary)]">{labels.appSubtitle}</p>
          </div>
        </div>

        {/* Fortschrittsbalken */}
        <div className="mb-4 flex gap-1" aria-hidden="true">
          <span className="h-1 flex-1 rounded-full bg-[var(--lern-accent)]" />
          <span className="h-1 flex-1 rounded-full bg-[var(--lern-accent)]" />
          <span className="h-1 flex-1 rounded-full bg-[var(--lern-accent-bg)]" />
          <span className="h-1 flex-1 rounded-full bg-[var(--lern-accent-bg)]" />
        </div>

        {/* Frage */}
        <p className="mb-1.5 font-[family-name:var(--font-newsreader)] text-lg font-semibold leading-snug text-[var(--lern-text-primary)]">
          {labels.question}
        </p>
        <p className="mb-3.5 text-xs leading-relaxed text-[var(--lern-text-secondary)]">{labels.scenario}</p>

        {/* Antwortoptionen */}
        <div className="flex flex-col gap-2">
          <PhoneOption text={labels.optionWait} />
          <PhoneOption text={labels.optionCorrect} correct />
          <PhoneOption text={labels.optionPulse} />
        </div>

        {/* Feedback / Erklärung */}
        <div className="mt-3 rounded-xl border-[1.5px] border-[var(--lern-accent)]/40 bg-[var(--lern-accent-bg)] p-3">
          <p className="mb-1 flex items-center gap-1.5 text-xs font-bold text-[var(--lern-accent)]">
            <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
            {labels.feedbackTitle}
          </p>
          <p className="text-[11px] leading-relaxed text-[var(--lern-text-secondary)]">{labels.feedbackBody}</p>
        </div>

        {/* Weiter-Button (statisch) */}
        <div className="mt-3 rounded-full bg-[var(--lern-accent)] py-2.5 text-center text-sm font-semibold text-white">
          {labels.nextButton}
        </div>
      </div>
    </div>
  )
}

function PhoneOption({ text, correct = false }: { text: string; correct?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-xl border-[1.5px] px-3 py-2.5 text-xs ${
        correct
          ? "border-[var(--lern-accent)] bg-[var(--lern-accent-bg)] font-semibold text-[var(--lern-text-primary)]"
          : "border-[var(--lern-border)] bg-[var(--lern-bg-primary)] text-[var(--lern-text-secondary)]"
      }`}
    >
      {correct ? (
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--lern-accent)] text-white">
          <Check className="h-2.5 w-2.5" strokeWidth={3.5} aria-hidden="true" />
        </span>
      ) : (
        <span className="h-4 w-4 shrink-0 rounded-full border-[1.5px] border-[var(--lern-border)]" />
      )}
      <span>{text}</span>
    </div>
  )
}
