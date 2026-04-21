"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import {
  createInitialState,
  starteEinstufung,
  verarbeiteAntwort,
  naechsteFrage,
  type EinstufungsState,
  type EinstufungsErgebnis,
} from "@/lib/einstufung/algorithmus"
import type { EinstufungsFrage } from "@/lib/einstufung/fragen"
import { useLernFortschritt } from "@/hooks/use-lern-fortschritt"
import { useLocale } from "next-intl"

// --- Konstanten ---
const BLAU = "var(--lern-accent)"
const GRUEN = "#6B8F71"
const ROT = "#C96B5C"
const TEXT = "var(--lern-text-primary)"
const GRAU = "var(--lern-text-secondary)"
const HELLGRAU = "var(--lern-bg)"

const STORAGE_KEY = "pflege-einstufung-progress"

// --- Persistenz Hilfsfunktionen ---

function speichereZwischenstand(state: EinstufungsState) {
  try {
    // Nur speichern wenn Test läuft (nicht willkommen, nicht ergebnis)
    if (state.phase === "sprache" || state.phase === "fachwissen") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        state,
        gespeichertAm: Date.now(),
      }))
    }
  } catch {
    // localStorage nicht verfügbar
  }
}

function ladeZwischenstand(): EinstufungsState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null

    const { state, gespeichertAm } = JSON.parse(raw) as {
      state: EinstufungsState
      gespeichertAm: number
    }

    // Zwischenstand nur 30 Minuten gültig
    const MAX_ALTER_MS = 30 * 60 * 1000
    if (Date.now() - gespeichertAm > MAX_ALTER_MS) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }

    // Nur laden wenn Test lief (Sprache oder Fachwissen Phase)
    if (state.phase === "sprache" || state.phase === "fachwissen") {
      return state
    }
    return null
  } catch {
    return null
  }
}

function loescheZwischenstand() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignorieren
  }
}

// --- Hauptkomponente ---
export default function EinstufungPage() {
  const t = useTranslations("einstufung")
  const router = useRouter()
  const { profil, loaded, setEinstufungsErgebnis } = useLernFortschritt()
  const locale = useLocale()
  const [state, setState] = useState<EinstufungsState>(createInitialState)
  const [gewaehlteOption, setGewaehlteOption] = useState<string | null>(null)
  const [zeigeErklaerung, setZeigeErklaerung] = useState(false)
  const [animDirection, setAnimDirection] = useState(1)
  const [hatZwischenstand, setHatZwischenstand] = useState(false)

  // Redirect wenn schon eingestuft
  useEffect(() => {
    if (loaded && profil?.achsen) {
      router.replace(`/${locale}/lernen`)
    }
  }, [loaded, profil, router, locale])

  // Zwischenstand laden beim Mount
  useEffect(() => {
    const gespeicherterState = ladeZwischenstand()
    if (gespeicherterState) {
      setHatZwischenstand(true)
    }
  }, [])

  // State bei jeder Änderung persistieren
  useEffect(() => {
    speichereZwischenstand(state)
  }, [state])

  const handleStart = useCallback(() => {
    setAnimDirection(1)
    setHatZwischenstand(false)
    setState((prev) => starteEinstufung(prev))
  }, [])

  const handleFortsetzen = useCallback(() => {
    const gespeicherterState = ladeZwischenstand()
    if (gespeicherterState) {
      setState(gespeicherterState)
      setHatZwischenstand(false)
    }
  }, [])

  const handleNeuStarten = useCallback(() => {
    loescheZwischenstand()
    setHatZwischenstand(false)
    setAnimDirection(1)
    setState((prev) => starteEinstufung(prev))
  }, [])

  const handleOptionClick = useCallback(
    (optionId: string) => {
      if (gewaehlteOption !== null) return
      setGewaehlteOption(optionId)
      setZeigeErklaerung(true)
      setState((prev) => verarbeiteAntwort(prev, optionId))
    },
    [gewaehlteOption]
  )

  const handleWeiter = useCallback(() => {
    setGewaehlteOption(null)
    setZeigeErklaerung(false)
    setAnimDirection(1)
    setState((prev) => naechsteFrage(prev))
  }, [])

  const handleErgebnisSpeichern = useCallback(() => {
    if (!state.ergebnis) return
    loescheZwischenstand()
    setEinstufungsErgebnis(state.ergebnis)
    router.push(`/${locale}/lernen`)
  }, [state.ergebnis, router, locale, setEinstufungsErgebnis])

  // Loading
  if (!loaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--lern-bg-primary)]" role="status">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#C4877F] border-t-transparent" />
        <span className="sr-only">{t("welcome.loading")}</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--lern-bg-primary)]" style={{ color: TEXT }}>
      <AnimatePresence mode="wait">
        {state.phase === "willkommen" && (
          <WillkommenPhase
            key="willkommen"
            t={t}
            onStart={handleStart}
            hatZwischenstand={hatZwischenstand}
            onFortsetzen={handleFortsetzen}
            onNeuStarten={handleNeuStarten}
          />
        )}

        {(state.phase === "sprache" || state.phase === "fachwissen") &&
          state.aktuelleFrage && (
            <FragePhase
              key={`frage-${state.aktuelleFrage.id}`}
              t={t}
              state={state}
              frage={state.aktuelleFrage}
              gewaehlteOption={gewaehlteOption}
              zeigeErklaerung={zeigeErklaerung}
              onOptionClick={handleOptionClick}
              onWeiter={handleWeiter}
              direction={animDirection}
            />
          )}

        {state.phase === "ergebnis" && state.ergebnis && (
          <ErgebnisPhase
            key="ergebnis"
            t={t}
            ergebnis={state.ergebnis}
            onWeiter={handleErgebnisSpeichern}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// --- Willkommen-Phase ---

function WillkommenPhase({
  t,
  onStart,
  hatZwischenstand,
  onFortsetzen,
  onNeuStarten,
}: {
  t: ReturnType<typeof useTranslations>
  onStart: () => void
  hatZwischenstand: boolean
  onFortsetzen: () => void
  onNeuStarten: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex min-h-screen flex-col items-center justify-center px-6"
      role="main"
      aria-label={t("welcome.title")}
    >
      <div className="mx-auto max-w-lg text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl"
          style={{ backgroundColor: `${BLAU}10` }}
          aria-hidden="true"
        >
          <span className="text-4xl">🎯</span>
        </motion.div>

        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {t("welcome.title")}
        </h1>
        <p className="mb-3 text-lg leading-relaxed" style={{ color: GRAU }}>
          {t("welcome.subtitle")}
        </p>
        <p className="mb-10 text-sm" style={{ color: GRAU }}>
          {t("welcome.duration")}
        </p>

        {/* Feature-Punkte */}
        <ul className="mb-10 space-y-3 text-left" aria-label={t("welcome.featuresLabel")}>
          <FeaturePunkt icon="🧠" text={t("welcome.feature1")} />
          <FeaturePunkt icon="⏱️" text={t("welcome.feature2")} />
          <FeaturePunkt icon="🎮" text={t("welcome.feature3")} />
        </ul>

        {hatZwischenstand ? (
          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onFortsetzen}
              className="w-full rounded-2xl py-4 text-lg font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
              style={{ backgroundColor: BLAU, boxShadow: `0 8px 24px ${BLAU}40` }}
            >
              {t("welcome.resumeButton")}
            </motion.button>
            <button
              onClick={onNeuStarten}
              className="w-full rounded-2xl py-3 text-sm font-medium transition-colors"
              style={{ color: GRAU }}
            >
              {t("welcome.restartButton")}
            </button>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="w-full rounded-2xl py-4 text-lg font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
            style={{ backgroundColor: BLAU, boxShadow: `0 8px 24px ${BLAU}40` }}
          >
            {t("welcome.startButton")}
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

function FeaturePunkt({ icon, text }: { icon: string; text: string }) {
  return (
    <li className="flex items-center gap-3 rounded-xl p-3" style={{ backgroundColor: HELLGRAU }}>
      <span className="text-xl" aria-hidden="true">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </li>
  )
}

// --- Frage-Phase ---

function FragePhase({
  t,
  state,
  frage,
  gewaehlteOption,
  zeigeErklaerung,
  onOptionClick,
  onWeiter,
  direction,
}: {
  t: ReturnType<typeof useTranslations>
  state: EinstufungsState
  frage: EinstufungsFrage
  gewaehlteOption: string | null
  zeigeErklaerung: boolean
  onOptionClick: (id: string) => void
  onWeiter: () => void
  direction: number
}) {
  const achsenAntworten = state.antworten.filter(
    (a) => a.achse === state.aktuelleAchse
  )
  const frageNrInAchse = achsenAntworten.length + (gewaehlteOption ? 0 : 1)
  const istKorrekt = gewaehlteOption === frage.richtig
  const weiterRef = useRef<HTMLButtonElement>(null)

  // Focus auf Weiter-Button wenn Erklärung angezeigt wird
  useEffect(() => {
    if (zeigeErklaerung && weiterRef.current) {
      const timer = setTimeout(() => weiterRef.current?.focus(), 400)
      return () => clearTimeout(timer)
    }
  }, [zeigeErklaerung])

  // Keyboard: Enter/Space für Weiter wenn Erklärung sichtbar
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (zeigeErklaerung && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault()
        onWeiter()
      }
      // Tastenkürzel 1-4 / A-D für Optionen
      if (!gewaehlteOption) {
        const idx = "1234".indexOf(e.key)
        const letterIdx = "abcd".indexOf(e.key.toLowerCase())
        const optionIdx = idx >= 0 ? idx : letterIdx
        if (optionIdx >= 0 && optionIdx < frage.optionen.length) {
          onOptionClick(frage.optionen[optionIdx].id)
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [zeigeErklaerung, gewaehlteOption, frage.optionen, onOptionClick, onWeiter])

  const progressPercent = (frageNrInAchse / state.maxFragen) * 100

  return (
    <motion.div
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -50 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-screen flex-col px-6 pb-8 pt-6"
      role="main"
    >
      {/* Header */}
      <div className="mx-auto w-full max-w-lg">
        {/* Achsen-Badge */}
        <div className="mb-4 flex items-center justify-between">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: state.aktuelleAchse === "sprache" ? `${BLAU}15` : "#9B7EA615",
              color: state.aktuelleAchse === "sprache" ? BLAU : "#9B7EA6",
            }}
          >
            {state.aktuelleAchse === "sprache" ? t("axes.language") : t("axes.knowledge")}
          </span>
          <span className="text-sm font-medium" style={{ color: GRAU }} aria-live="polite">
            {t("question.counter", { current: frageNrInAchse, total: state.maxFragen })}
          </span>
        </div>

        {/* Progress Bar */}
        <div
          className="mb-8 h-2 overflow-hidden rounded-full"
          style={{ backgroundColor: HELLGRAU }}
          role="progressbar"
          aria-valuenow={Math.round(progressPercent)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={t("question.progress")}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: state.aktuelleAchse === "sprache" ? BLAU : "#9B7EA6" }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Frage */}
        <h2 className="mb-8 text-xl font-bold leading-relaxed sm:text-2xl" id="frage-text">
          {frage.text}
        </h2>

        {/* Optionen */}
        <div className="space-y-3" role="radiogroup" aria-labelledby="frage-text">
          {frage.optionen.map((option, idx) => {
            const istGewaehlt = gewaehlteOption === option.id
            const istRichtig = option.id === frage.richtig
            const istBeantwortet = gewaehlteOption !== null
            const buchstabe = String.fromCharCode(65 + idx)

            let borderColor = "var(--lern-border)"
            let bgColor = "var(--lern-bg-primary)"
            let textColor = TEXT

            if (istBeantwortet) {
              if (istRichtig) {
                borderColor = GRUEN
                bgColor = `${GRUEN}08`
              } else if (istGewaehlt && !istRichtig) {
                borderColor = ROT
                bgColor = `${ROT}08`
              } else {
                borderColor = "var(--lern-border)"
                bgColor = HELLGRAU
                textColor = GRAU
              }
            }

            return (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => onOptionClick(option.id)}
                disabled={istBeantwortet}
                role="radio"
                aria-checked={istGewaehlt}
                aria-label={`${buchstabe}: ${option.text}`}
                className="flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all"
                style={{
                  borderColor,
                  backgroundColor: bgColor,
                  color: textColor,
                }}
                whileHover={!istBeantwortet ? { scale: 1.01, borderColor: BLAU } : undefined}
                whileTap={!istBeantwortet ? { scale: 0.99 } : undefined}
              >
                {/* Buchstabe */}
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                  aria-hidden="true"
                  style={{
                    backgroundColor: istBeantwortet
                      ? istRichtig
                        ? GRUEN
                        : istGewaehlt
                          ? ROT
                          : HELLGRAU
                      : HELLGRAU,
                    color: istBeantwortet && (istRichtig || istGewaehlt) ? "white" : TEXT,
                  }}
                >
                  {buchstabe}
                </span>
                <span className="text-sm font-medium leading-relaxed sm:text-base">
                  {option.text}
                </span>
                {/* Korrekt/Falsch Icon */}
                {istBeantwortet && istRichtig && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto flex-shrink-0 text-lg"
                    aria-label={t("feedback.correct")}
                  >
                    ✓
                  </motion.span>
                )}
                {istBeantwortet && istGewaehlt && !istRichtig && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto flex-shrink-0 text-lg"
                    aria-label={t("feedback.incorrect")}
                  >
                    ✗
                  </motion.span>
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Erklärung */}
        <AnimatePresence>
          {zeigeErklaerung && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 overflow-hidden"
              aria-live="polite"
            >
              <div
                className="rounded-2xl p-4"
                style={{
                  backgroundColor: istKorrekt ? `${GRUEN}08` : `${BLAU}08`,
                  borderLeft: `4px solid ${istKorrekt ? GRUEN : BLAU}`,
                }}
              >
                <p className="mb-1 text-sm font-semibold" style={{ color: istKorrekt ? GRUEN : BLAU }}>
                  {istKorrekt ? t("feedback.correct") : t("feedback.incorrect")}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: GRAU }}>
                  {frage.erklaerung}
                </p>
              </div>

              <motion.button
                ref={weiterRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={onWeiter}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full rounded-2xl py-3.5 text-base font-semibold text-white"
                style={{ backgroundColor: BLAU }}
              >
                {t("feedback.next")}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// --- Ergebnis-Phase ---

function ErgebnisPhase({
  t,
  ergebnis,
  onWeiter,
}: {
  t: ReturnType<typeof useTranslations>
  ergebnis: EinstufungsErgebnis
  onWeiter: () => void
}) {
  const dauerMinuten = Math.ceil(ergebnis.gesamtDauerMs / 60000)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex min-h-screen flex-col items-center justify-center px-6 py-12"
      role="main"
      aria-label={t("result.title")}
    >
      <div className="mx-auto w-full max-w-lg">
        {/* Confetti-Emoji */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl"
          style={{ backgroundColor: `${GRUEN}15` }}
          aria-hidden="true"
        >
          <span className="text-4xl">🎉</span>
        </motion.div>

        <h1 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
          {t("result.title")}
        </h1>
        <p className="mb-8 text-center text-sm" style={{ color: GRAU }}>
          {t("result.duration", { minutes: dauerMinuten })}
        </p>

        {/* Zwei Achsen */}
        <div className="mb-8 space-y-4">
          <AchsenKarte
            t={t}
            label={t("axes.language")}
            farbe={BLAU}
            ergebnis={ergebnis.sprache}
            levelBeschreibungen={[
              t("result.languageLevels.1"),
              t("result.languageLevels.2"),
              t("result.languageLevels.3"),
              t("result.languageLevels.4"),
              t("result.languageLevels.5"),
            ]}
          />
          <AchsenKarte
            t={t}
            label={t("axes.knowledge")}
            farbe="#9B7EA6"
            ergebnis={ergebnis.fachwissen}
            levelBeschreibungen={[
              t("result.knowledgeLevels.1"),
              t("result.knowledgeLevels.2"),
              t("result.knowledgeLevels.3"),
              t("result.knowledgeLevels.4"),
              t("result.knowledgeLevels.5"),
            ]}
          />
        </div>

        {/* Zusammenfassung */}
        <div
          className="mb-8 rounded-2xl p-5"
          style={{ backgroundColor: HELLGRAU }}
        >
          <h3 className="mb-3 text-sm font-semibold" style={{ color: GRAU }}>
            {t("result.summary")}
          </h3>
          <p className="text-sm leading-relaxed">
            {getZusammenfassung(t, ergebnis)}
          </p>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onWeiter}
          className="w-full rounded-2xl py-4 text-lg font-semibold text-white shadow-lg transition-shadow hover:shadow-xl"
          style={{ backgroundColor: BLAU, boxShadow: `0 8px 24px ${BLAU}40` }}
        >
          {t("result.startLearning")}
        </motion.button>
      </div>
    </motion.div>
  )
}

// --- Achsen-Karte ---

function AchsenKarte({
  t,
  label,
  farbe,
  ergebnis,
  levelBeschreibungen,
}: {
  t: ReturnType<typeof useTranslations>
  label: string
  farbe: string
  ergebnis: import("@/lib/einstufung/algorithmus").AchsenErgebnis
  levelBeschreibungen: string[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-2xl border p-5"
      style={{ borderColor: `${farbe}30` }}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold">{label}</span>
        <span
          className="rounded-full px-3 py-1 text-xs font-bold"
          style={{ backgroundColor: `${farbe}15`, color: farbe }}
        >
          {t("result.level")} {ergebnis.level}/5
        </span>
      </div>

      {/* Progress */}
      <div
        className="mb-3 h-3 overflow-hidden rounded-full"
        style={{ backgroundColor: HELLGRAU }}
        role="progressbar"
        aria-valuenow={ergebnis.score}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label}: ${ergebnis.score}%`}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: farbe }}
          initial={{ width: 0 }}
          animate={{ width: `${ergebnis.score}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs" style={{ color: GRAU }}>
          {ergebnis.fragenRichtig}/{ergebnis.fragenGesamt} {t("result.correct")}
        </span>
        <span className="text-xs font-medium" style={{ color: farbe }}>
          {levelBeschreibungen[ergebnis.level - 1]}
        </span>
      </div>
    </motion.div>
  )
}

// --- Helfer ---

function getZusammenfassung(
  t: ReturnType<typeof useTranslations>,
  ergebnis: EinstufungsErgebnis
): string {
  const sl = ergebnis.sprache.level
  const fl = ergebnis.fachwissen.level

  if (sl >= 4 && fl >= 4) return t("result.profiles.expert")
  if (sl >= 4 && fl <= 2) return t("result.profiles.languageStrong")
  if (sl <= 2 && fl >= 4) return t("result.profiles.knowledgeStrong")
  if (sl <= 2 && fl <= 2) return t("result.profiles.beginner")
  return t("result.profiles.intermediate")
}
