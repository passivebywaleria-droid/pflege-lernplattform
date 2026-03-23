"use client"

import React, { useState, useCallback, useMemo, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"

/* ═══════════════════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════════════════ */
type StepType =
  | { kind: "intro"; title: string; subtitle: string }
  | { kind: "selfrating"; prompt: string; phase: "before" | "after" }
  | { kind: "reflection"; prompt: string; placeholder: string; keywords?: string[]; keywordFeedback?: string; genericFeedback?: string }
  | { kind: "content"; title: string; body: string; highlight?: string; funfact?: string; mnemonic?: string }
  | { kind: "mc"; question: string; options: string[]; correct: number; explanation: string; peerPct?: number }
  | { kind: "freetext"; question: string; hint: string; modelAnswer?: string; keywords?: string[]; keywordFeedback?: string }
  | { kind: "sorting"; question: string; items: string[]; correctOrder: number[] }
  | { kind: "matching"; question: string; pairs: [string, string][] }
  | { kind: "fillin"; sentence: string; blank: string; options: string[]; correct: number }
  | { kind: "truefalse"; cards: { statement: string; isTrue: boolean; explanation: string }[] }
  | { kind: "timer"; questions: { q: string; options: string[]; correct: number }[] }
  | { kind: "case"; title: string; scenario: string; question: string; options: string[]; correct: number; explanation: string }
  | { kind: "summary"; points: string[] }
  | { kind: "result" }

/* ═══════════════════════════════════════════════════════════════════════════
   Lesson Data — Session 1: "Was ist der Pflegeprozess?"
   ═══════════════════════════════════════════════════════════════════════════ */
const STEPS: StepType[] = [
  /* 0 — Intro */
  {
    kind: "intro",
    title: "Der Pflegeprozess",
    subtitle: "Session 1 · Was ist der Pflegeprozess?",
  },

  /* 1 — Selbsteinsch\u00E4tzung VORHER */
  {
    kind: "selfrating",
    prompt: "Wie gut kennst du dich mit dem Pflegeprozess aus?",
    phase: "before",
  },

  /* 2 — Vorwissen aktivieren */
  {
    kind: "reflection",
    prompt: "Was f\u00E4llt dir spontan zum Begriff \u201EPflegeprozess\u201C ein? Schreibe deine ersten Gedanken auf.",
    placeholder: "Meine ersten Gedanken zum Pflegeprozess sind...",
    keywords: ["plan", "struktur", "schritte", "ablauf", "systematisch", "patient", "ziel", "pflege", "dokumenta", "qualit"],
    keywordFeedback: "Du hast schon wichtige Aspekte erkannt! Der Pflegeprozess hat tats\u00E4chlich viel mit Struktur, Planung und Systematik zu tun.",
    genericFeedback: "Danke f\u00FCr deine Gedanken! Lass uns gemeinsam herausfinden, was der Pflegeprozess genau ist.",
  },

  /* 3 — Mini-Input 1: Definition */
  {
    kind: "content",
    title: "Was ist der Pflegeprozess?",
    body: "Der Pflegeprozess ist ein systematisches Verfahren, um die Pflege eines Menschen individuell zu planen, durchzuf\u00FChren und zu \u00FCberpr\u00FCfen. Er wurde in den 1950er-Jahren von Ida Jean Orlando entwickelt und ist heute die Grundlage professioneller Pflege weltweit.",
    highlight: "Systematisch \u2013 Individuell \u2013 \u00DCberpr\u00FCfbar",
    funfact: "Ida Jean Orlando war eine US-amerikanische Krankenschwester, die ihren Ansatz durch Beobachtung von Pflegesch\u00FClerinnen entwickelte \u2014 sie wollte verstehen, warum manche Pflege wirkt und andere nicht.",
  },

  /* 4 — Verst\u00E4ndnisfrage MC */
  {
    kind: "mc",
    question: "Was beschreibt der Pflegeprozess am besten?",
    options: [
      "Eine einmalige Beurteilung des Patienten bei der Aufnahme",
      "Ein systematisches Verfahren zur individuellen Pflegeplanung und -\u00FCberpr\u00FCfung",
      "Eine \u00E4rztliche Anordnung f\u00FCr Pflegema\u00DFnahmen",
      "Ein Dokumentationsformular f\u00FCr die Pflegestation",
    ],
    correct: 1,
    explanation: "Der Pflegeprozess ist ein fortlaufendes, systematisches Verfahren \u2014 keine einmalige Beurteilung und keine \u00E4rztliche Anordnung.",
    peerPct: 78,
  },

  /* 5 — Mini-Input 2: Die 6 Schritte */
  {
    kind: "content",
    title: "Die 6 Schritte des Pflegeprozesses",
    body: "Der Pflegeprozess nach WHO besteht aus 6 Schritten, die sich wie ein Kreislauf wiederholen:\n\n\u2460 Informationssammlung\n\u2461 Erkennen von Problemen & Ressourcen\n\u2462 Festlegung der Pflegeziele\n\u2463 Planung der Pflegema\u00DFnahmen\n\u2464 Durchf\u00FChrung der Pflege\n\u2465 Evaluation (Beurteilung)",
    highlight: "Kreislauf: Nach der Evaluation beginnt der Prozess von vorn!",
    mnemonic: "Eselsbr\u00FCcke: \u201EIEPPE\u201C \u2014 Information, Erkennen, Planung (Ziele), Planung (Ma\u00DFnahmen), Execution, Evaluation",
  },

  /* 6 — L\u00FCckentext */
  {
    kind: "fillin",
    sentence: "Der Pflegeprozess besteht aus ___ Schritten und verl\u00E4uft als ___.",
    blank: "6 / Kreislauf",
    options: ["4 / Einbahnstra\u00DFe", "6 / Kreislauf", "8 / Checkliste", "5 / Pyramide"],
    correct: 1,
  },

  /* 7 — Sortieraufgabe */
  {
    kind: "sorting",
    question: "Bringe die 6 Schritte des Pflegeprozesses in die richtige Reihenfolge:",
    items: [
      "Pflegeziele festlegen",
      "Informationen sammeln",
      "Evaluation",
      "Pflegema\u00DFnahmen planen",
      "Probleme & Ressourcen erkennen",
      "Pflege durchf\u00FChren",
    ],
    correctOrder: [1, 4, 0, 3, 5, 2],
  },

  /* 8 — Wahr/Falsch-Karten */
  {
    kind: "truefalse",
    cards: [
      { statement: "Der Pflegeprozess endet nach der Durchf\u00FChrung.", isTrue: false, explanation: "Falsch! Nach der Durchf\u00FChrung kommt die Evaluation \u2014 und dann beginnt der Kreislauf von vorn." },
      { statement: "Jeder Patient wird im Pflegeprozess individuell betrachtet.", isTrue: true, explanation: "Richtig! Individualit\u00E4t ist ein Kernprinzip des Pflegeprozesses." },
      { statement: "Der Pflegeprozess wurde von Florence Nightingale entwickelt.", isTrue: false, explanation: "Falsch! Er wurde von Ida Jean Orlando in den 1950er-Jahren entwickelt." },
      { statement: "Die Informationssammlung ist der erste Schritt.", isTrue: true, explanation: "Richtig! Ohne Informationen kann man nicht sinnvoll planen." },
    ],
  },

  /* 9 — Mini-Input 3: Warum ist er wichtig? */
  {
    kind: "content",
    title: "Warum ist der Pflegeprozess so wichtig?",
    body: "Ohne den Pflegeprozess w\u00E4re Pflege zuf\u00E4llig und nicht nachvollziehbar. Er sorgt daf\u00FCr, dass:\n\n\u2022 Jeder Patient individuell versorgt wird\n\u2022 Pflege messbar und \u00FCberpr\u00FCfbar ist\n\u2022 Alle im Team die gleichen Ziele verfolgen\n\u2022 Die Qualit\u00E4t der Pflege gesichert wird",
  },

  /* 10 — Denkfrage */
  {
    kind: "freetext",
    question: "Stell dir vor, es g\u00E4be keinen Pflegeprozess. Was k\u00F6nnte auf einer Station schiefgehen?",
    hint: "Denke an Teamarbeit, Dokumentation und Patientensicherheit.",
    modelAnswer: "Ohne den Pflegeprozess k\u00F6nnten z.B. wichtige Informationen verloren gehen, Ma\u00DFnahmen doppelt oder gar nicht durchgef\u00FChrt werden, und das Team h\u00E4tte keine gemeinsamen Ziele. Die Patientensicherheit w\u00E4re gef\u00E4hrdet.",
    keywords: ["information", "dokument", "team", "fehler", "sicherheit", "ziel", "kommun", "vergessen", "doppelt", "qualit", "chaos"],
    keywordFeedback: "Sehr gut erkannt! Du hast wichtige Risiken benannt, die ohne einen strukturierten Pflegeprozess auftreten k\u00F6nnen.",
  },

  /* 11 — Zuordnungsaufgabe */
  {
    kind: "matching",
    question: "Ordne jeden Schritt der richtigen Beschreibung zu:",
    pairs: [
      ["Informationssammlung", "Daten \u00FCber den Patienten erheben"],
      ["Pflegeziele", "Gew\u00FCnschten Zustand definieren"],
      ["Evaluation", "Ergebnisse bewerten und anpassen"],
      ["Pflegeplanung", "Konkrete Ma\u00DFnahmen festlegen"],
    ],
  },

  /* 12 — Timer-Challenge */
  {
    kind: "timer",
    questions: [
      { q: "Wie viele Schritte hat der Pflegeprozess?", options: ["4", "6", "8"], correct: 1 },
      { q: "Wer hat den Pflegeprozess entwickelt?", options: ["Nightingale", "Orlando", "Henderson"], correct: 1 },
      { q: "Was ist der letzte Schritt?", options: ["Durchf\u00FChrung", "Planung", "Evaluation"], correct: 2 },
      { q: "Der Pflegeprozess ist ein...?", options: ["Kreislauf", "Einbahnstra\u00DFe", "Checkliste"], correct: 0 },
      { q: "Was kommt vor der Zielsetzung?", options: ["Evaluation", "Problemerkennung", "Durchf\u00FChrung"], correct: 1 },
    ],
  },

  /* 13 — Fallbeispiel */
  {
    kind: "case",
    title: "Fallbeispiel: Frau Weber",
    scenario: "Frau Weber, 82 Jahre, wurde nach einem Oberschenkelhalsbruch auf Ihre Station verlegt. Sie kann sich kaum bewegen und sagt: \u201EIch habe solche Angst, dass ich nie wieder laufen kann.\u201C Sie weint h\u00E4ufig und isst wenig.",
    question: "Was ist der erste Schritt im Pflegeprozess, den Sie nun durchf\u00FChren?",
    options: [
      "Sofort einen Mobilisierungsplan erstellen",
      "Informationen sammeln: Gespr\u00E4ch mit Frau Weber, Akte lesen, Beobachtung",
      "Pflegeziel festlegen: \u201EFrau Weber kann in 2 Wochen gehen\u201C",
      "Evaluation der bisherigen Pflege durchf\u00FChren",
    ],
    correct: 1,
    explanation: "Richtig! Der erste Schritt ist immer die Informationssammlung. Erst wenn wir genug \u00FCber Frau Weber wissen (ihre \u00C4ngste, ihren Zustand, ihre Ressourcen), k\u00F6nnen wir sinnvoll planen.",
  },

  /* 14 — Zusammenfassung */
  {
    kind: "summary",
    points: [
      "Der Pflegeprozess ist ein systematischer Kreislauf mit 6 Schritten",
      "Er wurde von Ida Jean Orlando entwickelt",
      "Die Reihenfolge: Sammeln → Erkennen → Ziele → Planen → Durchf\u00FChren → Evaluieren",
      "Er sorgt f\u00FCr individuelle, messbare und nachvollziehbare Pflege",
      "Der erste Schritt ist immer die Informationssammlung",
    ],
  },

  /* 15 — Selbsteinsch\u00E4tzung NACHHER */
  {
    kind: "selfrating",
    prompt: "Wie gut kennst du dich jetzt mit dem Pflegeprozess aus?",
    phase: "after",
  },

  /* 16 — Ergebnis */
  {
    kind: "result",
  },
]

/* ═══════════════════════════════════════════════════════════════════════════
   Confetti
   ═══════════════════════════════════════════════════════════════════════════ */
function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 1.5 + Math.random() * 1.5,
        color: ["#0071e3", "#30D158", "#FFD60A", "#FF9500", "#BF5AF2", "#FF3B30"][
          Math.floor(Math.random() * 6)
        ],
        rotation: Math.random() * 360,
        size: 6 + Math.random() * 6,
      })),
    []
  )
  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, x: `${p.x}vw`, opacity: 1, rotate: 0, scale: 1 }}
          animate={{ y: "110vh", opacity: 0, rotate: p.rotation + 360, scale: 0.5 }}
          transition={{ delay: p.delay, duration: p.duration, ease: "easeIn" }}
          style={{ position: "absolute", width: p.size, height: p.size * 0.6, borderRadius: 2, backgroundColor: p.color }}
        />
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   XP Toast
   ═══════════════════════════════════════════════════════════════════════════ */
function XPToast({ xp }: { xp: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed bottom-6 right-6 z-[90] bg-[#FFD60A] text-[#1d1d1f] px-4 py-2 rounded-full font-bold text-sm shadow-lg"
    >
      +{xp} XP
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════════════════════════ */
export default function LektionDemo() {
  const params = useParams()
  const locale = (params?.locale as string) || "de"

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, unknown>>({})
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [xp, setXp] = useState(0)
  const [showXPToast, setShowXPToast] = useState(false)
  const [lastXP, setLastXP] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [selfRatingBefore, setSelfRatingBefore] = useState<number | null>(null)
  const [selfRatingAfter, setSelfRatingAfter] = useState<number | null>(null)
  const [streak, setStreak] = useState(0)
  const [hideBar, setHideBar] = useState(false)
  const lastScrollY = useRef(0)

  // Auto-hide top bar on scroll down, show on scroll up (TypingClub pattern)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (y > lastScrollY.current && y > 60) setHideBar(true)
      else setHideBar(false)
      lastScrollY.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const current = STEPS[step]
  const progress = ((step + 1) / STEPS.length) * 100

  const awardXP = useCallback((amount: number) => {
    setXp((x) => x + amount)
    setLastXP(amount)
    setShowXPToast(true)
    setTimeout(() => setShowXPToast(false), 1500)
  }, [])

  const next = useCallback(() => {
    setShowFeedback(false)
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }, [])

  const prev = useCallback(() => {
    setShowFeedback(false)
    setStep((s) => Math.max(s - 1, 0))
  }, [])

  const handleAnswer = useCallback(
    (correct: boolean) => {
      setTotalQuestions((t) => t + 1)
      if (correct) {
        setScore((s) => s + 1)
        setStreak((s) => s + 1)
        awardXP(10 + (streak >= 2 ? 5 : 0))
      } else {
        setStreak(0)
      }
      setIsCorrect(correct)
      setShowFeedback(true)
    },
    [awardXP, streak]
  )

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        // Only trigger next if no textarea focused
        const active = document.activeElement
        if (active?.tagName === "TEXTAREA") return
        // Find the main button and click it
        const btn = document.querySelector("[data-main-btn]") as HTMLButtonElement
        if (btn && !btn.disabled) btn.click()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f7] overflow-x-hidden">
      {showConfetti && <Confetti />}
      <AnimatePresence>{showXPToast && <XPToast xp={lastXP} />}</AnimatePresence>

      {/* Top bar — auto-hides on scroll down (TypingClub pattern) */}
      <motion.div
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#d2d2d7]/50"
        animate={{ y: hideBar ? -80 : 0, opacity: hideBar ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            {step > 0 ? (
              <button
                onClick={prev}
                className="text-[#0071e3] text-sm font-medium hover:underline flex-shrink-0"
              >
                ← Zurück
              </button>
            ) : (
              <Link
                href={`/${locale}/demo`}
                className="text-[#0071e3] text-sm font-medium hover:underline flex-shrink-0"
              >
                ← Menü
              </Link>
            )}
            <div className="flex-1 h-2 bg-[#e8e8ed] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#0071e3] rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <span className="text-xs text-[#86868b] font-medium flex-shrink-0">
              {step + 1}/{STEPS.length}
            </span>
          </div>
          {/* XP + Streak bar */}
          <div className="flex items-center gap-4 mt-1.5">
            <span className="text-xs font-semibold text-[#FFD60A]">{xp} XP</span>
            {streak >= 2 && (
              <span className="text-xs font-semibold text-[#FF9500]">{streak}x Streak!</span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            {current.kind === "intro" && <IntroStep data={current} onNext={next} />}
            {current.kind === "selfrating" && (
              <SelfRatingStep
                data={current}
                value={current.phase === "before" ? selfRatingBefore : selfRatingAfter}
                beforeValue={selfRatingBefore}
                onChange={(v) => current.phase === "before" ? setSelfRatingBefore(v) : setSelfRatingAfter(v)}
                onNext={() => { awardXP(5); next() }}
              />
            )}
            {current.kind === "reflection" && (
              <ReflectionStep
                data={current}
                value={answers[step] as string}
                onChange={(v) => setAnswers((a) => ({ ...a, [step]: v }))}
                onNext={() => { awardXP(5); next() }}
              />
            )}
            {current.kind === "content" && <ContentStep data={current} onNext={next} />}
            {current.kind === "mc" && (
              <MCStep data={current} showFeedback={showFeedback} isCorrect={isCorrect} onAnswer={handleAnswer} onNext={next} />
            )}
            {current.kind === "freetext" && (
              <FreetextStep
                data={current}
                value={answers[step] as string}
                onChange={(v) => setAnswers((a) => ({ ...a, [step]: v }))}
                onNext={() => { awardXP(5); next() }}
              />
            )}
            {current.kind === "sorting" && (
              <SortingStep data={current} showFeedback={showFeedback} isCorrect={isCorrect} onAnswer={handleAnswer} onNext={next} />
            )}
            {current.kind === "matching" && (
              <MatchingStep data={current} showFeedback={showFeedback} isCorrect={isCorrect} onAnswer={handleAnswer} onNext={next} />
            )}
            {current.kind === "fillin" && (
              <FillInStep data={current} showFeedback={showFeedback} isCorrect={isCorrect} onAnswer={handleAnswer} onNext={next} />
            )}
            {current.kind === "truefalse" && (
              <TrueFalseStep data={current} onAnswer={handleAnswer} onNext={next} awardXP={awardXP} />
            )}
            {current.kind === "timer" && (
              <TimerChallengeStep data={current} onDone={(s, t) => { setScore((prev) => prev + s); setTotalQuestions((prev) => prev + t); awardXP(s * 15); next() }} />
            )}
            {current.kind === "case" && (
              <CaseStep data={current} showFeedback={showFeedback} isCorrect={isCorrect} onAnswer={handleAnswer} onNext={next} />
            )}
            {current.kind === "summary" && <SummaryStep data={current} onNext={next} />}
            {current.kind === "result" && (
              <ResultStep
                score={score}
                total={totalQuestions}
                xp={xp}
                locale={locale}
                selfBefore={selfRatingBefore}
                selfAfter={selfRatingAfter}
                onConfetti={() => setShowConfetti(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   Step Components
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Intro ── */
function IntroStep({ data, onNext }: { data: Extract<StepType, { kind: "intro" }>; onNext: () => void }) {
  return (
    <div className="text-center py-12 sm:py-20">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0071e3]/10 text-[#0071e3] rounded-full text-sm font-medium mb-6">
        <span className="w-2 h-2 bg-[#0071e3] rounded-full animate-pulse" />
        CE 01 · Lerneinheit 1
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
        {data.title}
      </h1>
      <p className="text-lg sm:text-xl text-[#6e6e73] mb-2">{data.subtitle}</p>
      <p className="text-sm text-[#86868b] mb-10">ca. 20 Minuten · {STEPS.length} Schritte</p>
      <button
        onClick={onNext}
        data-main-btn
        className="px-8 py-3.5 bg-[#0071e3] text-white rounded-full text-base font-semibold hover:bg-[#0077ED] active:scale-[0.97] transition-all"
      >
        Lektion starten
      </button>
    </div>
  )
}

/* ── Self-Rating ── */
function SelfRatingStep({
  data,
  value,
  beforeValue,
  onChange,
  onNext,
}: {
  data: Extract<StepType, { kind: "selfrating" }>
  value: number | null
  beforeValue: number | null
  onChange: (v: number) => void
  onNext: () => void
}) {
  const labels = ["Gar nicht", "Wenig", "Etwas", "Gut", "Sehr gut"]
  const emojis = ["😵", "🤔", "😐", "😊", "🤩"]
  return (
    <div>
      <StepBadge label="Einschätzung" color="purple" icon="🎯" />
      <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] mb-2">{data.prompt}</h2>
      {data.phase === "after" && beforeValue !== null && (
        <p className="text-sm text-[#86868b] mb-4">Vorher hast du dich bei <strong>&ldquo;{labels[beforeValue]}&rdquo;</strong> eingestuft.</p>
      )}
      <div className="flex gap-2 sm:gap-3 mt-6 mb-8 justify-center">
        {labels.map((label, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className={`flex flex-col items-center gap-1.5 p-3 sm:p-4 rounded-2xl border-2 transition-all ${value === i ? "border-[#0071e3] bg-[#0071e3]/5 scale-105" : "border-[#d2d2d7] bg-white hover:border-[#0071e3]/40"}`}
          >
            <span className="text-2xl">{emojis[i]}</span>
            <span className="text-[10px] sm:text-xs text-[#1d1d1f] font-medium">{label}</span>
          </button>
        ))}
      </div>
      <NextButton onClick={onNext} disabled={value === null} />
    </div>
  )
}

/* ── Reflection ── */
function ReflectionStep({
  data,
  value,
  onChange,
  onNext,
}: {
  data: Extract<StepType, { kind: "reflection" }>
  value?: string
  onChange: (v: string) => void
  onNext: () => void
}) {
  const [submitted, setSubmitted] = useState(false)

  const matchedKeywords = useMemo(() => {
    if (!value || !data.keywords) return []
    const lower = value.toLowerCase()
    return data.keywords.filter((kw) => lower.includes(kw.toLowerCase()))
  }, [value, data.keywords])

  const feedback = submitted
    ? matchedKeywords.length >= 2
      ? data.keywordFeedback
      : data.genericFeedback
    : null

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div>
      <StepBadge label="Einstieg" color="purple" icon="💭" />
      <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] mb-2">Deine ersten Gedanken</h2>
      <p className="text-[#6e6e73] mb-6">{data.prompt}</p>
      <textarea
        value={value || ""}
        onChange={(e) => { if (!submitted) onChange(e.target.value) }}
        placeholder={data.placeholder}
        rows={4}
        className={`w-full p-4 bg-white border rounded-2xl text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/30 focus:border-[#0071e3] resize-none text-base ${submitted ? "border-[#30D158] bg-[#30D158]/5" : "border-[#d2d2d7]"}`}
      />
      {!submitted && (
        <p className="text-xs text-[#86868b] mt-2 mb-6">Es gibt hier kein Richtig oder Falsch — schreibe einfach drauflos!</p>
      )}

      {submitted && feedback && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 mb-4 p-4 bg-[#0071e3]/5 border border-[#0071e3]/20 rounded-2xl"
        >
          <div className="flex gap-3 items-start">
            <span className="text-xl flex-shrink-0">💬</span>
            <div>
              <p className="text-sm font-semibold text-[#1d1d1f] mb-1">Rückmeldung</p>
              <p className="text-sm text-[#1d1d1f]">{feedback}</p>
              {matchedKeywords.length >= 2 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {matchedKeywords.slice(0, 4).map((kw) => (
                    <span key={kw} className="px-2 py-0.5 bg-[#30D158]/15 text-[#1d1d1f] text-xs rounded-full font-medium">
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {!submitted ? (
        <NextButton onClick={handleSubmit} disabled={!value?.trim()} label="Abschicken" />
      ) : (
        <NextButton onClick={onNext} label="Weiter" />
      )}
    </div>
  )
}

/* ── Content ── */
function ContentStep({ data, onNext }: { data: Extract<StepType, { kind: "content" }>; onNext: () => void }) {
  const [showFun, setShowFun] = useState(false)
  const [showMnemonic, setShowMnemonic] = useState(false)
  return (
    <div>
      <StepBadge label="Wissen" color="blue" icon="📖" />
      <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] mb-4">{data.title}</h2>
      <div className="bg-white rounded-2xl border border-[#d2d2d7] p-5 sm:p-6 mb-4">
        {data.body.split("\n\n").map((para, i) => (
          <p key={i} className={`text-[#1d1d1f] leading-relaxed ${i > 0 ? "mt-4" : ""}`}>{para}</p>
        ))}
      </div>
      {data.highlight && (
        <div className="bg-[#FFF9E6] border border-[#FFD60A]/30 rounded-2xl p-4 flex gap-3 items-start mb-3">
          <span className="text-xl flex-shrink-0">💡</span>
          <p className="text-sm font-medium text-[#1d1d1f]">{data.highlight}</p>
        </div>
      )}
      {data.funfact && (
        <div className="mb-3">
          <button onClick={() => setShowFun(!showFun)} className="text-sm text-[#0071e3] font-medium hover:underline">
            {showFun ? "▲ Wusstest du?" : "▼ Wusstest du? (antippen)"}
          </button>
          <AnimatePresence>
            {showFun && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="bg-[#F0F0FF] border border-[#BF5AF2]/20 rounded-2xl p-4 mt-2 flex gap-3 items-start">
                  <span className="text-xl flex-shrink-0">🤓</span>
                  <p className="text-sm text-[#1d1d1f]">{data.funfact}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      {data.mnemonic && (
        <div className="mb-3">
          <button onClick={() => setShowMnemonic(!showMnemonic)} className="text-sm text-[#FF9500] font-medium hover:underline">
            {showMnemonic ? "▲ Eselsbrücke" : "▼ Eselsbrücke (antippen)"}
          </button>
          <AnimatePresence>
            {showMnemonic && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="bg-[#FFF5EB] border border-[#FF9500]/20 rounded-2xl p-4 mt-2 flex gap-3 items-start">
                  <span className="text-xl flex-shrink-0">🧠</span>
                  <p className="text-sm text-[#1d1d1f] font-medium">{data.mnemonic}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      <NextButton onClick={onNext} label="Verstanden" />
    </div>
  )
}

/* ── Multiple Choice ── */
function MCStep({
  data, showFeedback, isCorrect, onAnswer, onNext,
}: {
  data: Extract<StepType, { kind: "mc" }>; showFeedback: boolean; isCorrect: boolean; onAnswer: (c: boolean) => void; onNext: () => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [shakeWrong, setShakeWrong] = useState(false)

  const doAnswer = () => {
    const correct = selected === data.correct
    if (!correct) {
      setShakeWrong(true)
      setTimeout(() => setShakeWrong(false), 500)
    }
    onAnswer(correct)
  }

  return (
    <div>
      <StepBadge label="Frage" color="green" icon="❓" />
      <h2 className="text-lg sm:text-xl font-bold text-[#1d1d1f] mb-5">{data.question}</h2>
      <motion.div animate={shakeWrong ? { x: [0, -8, 8, -6, 6, 0] } : {}} transition={{ duration: 0.4 }} className="space-y-3">
        {data.options.map((opt, i) => {
          const isSel = selected === i
          const isAns = data.correct === i
          let border = "border-[#d2d2d7]"
          let bg = "bg-white"
          if (showFeedback && isAns) { border = "border-[#30D158]"; bg = "bg-[#30D158]/5" }
          else if (showFeedback && isSel && !isAns) { border = "border-[#FF3B30]"; bg = "bg-[#FF3B30]/5" }
          else if (isSel) { border = "border-[#0071e3]"; bg = "bg-[#0071e3]/5" }
          return (
            <button key={i} disabled={showFeedback} onClick={() => setSelected(i)}
              className={`w-full text-left p-4 rounded-2xl border-2 ${border} ${bg} transition-all ${!showFeedback ? "hover:border-[#0071e3]/50 active:scale-[0.99]" : ""}`}>
              <div className="flex items-start gap-3">
                <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${isSel ? "border-[#0071e3] bg-[#0071e3] text-white" : "border-[#d2d2d7] text-[#86868b]"} ${showFeedback && isAns ? "border-[#30D158] bg-[#30D158] text-white" : ""} ${showFeedback && isSel && !isAns ? "border-[#FF3B30] bg-[#FF3B30] text-white" : ""}`}>
                  {showFeedback && isAns ? "✓" : showFeedback && isSel && !isAns ? "✗" : String.fromCharCode(65 + i)}
                </span>
                <span className="text-[#1d1d1f] text-sm sm:text-base">{opt}</span>
              </div>
            </button>
          )
        })}
      </motion.div>

      {showFeedback && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-4 rounded-2xl ${isCorrect ? "bg-[#30D158]/10 border border-[#30D158]/30" : "bg-[#FF3B30]/10 border border-[#FF3B30]/30"}`}>
          <p className="font-semibold text-sm mb-1">{isCorrect ? "✅ Richtig!" : "❌ Leider falsch"}</p>
          <p className="text-sm text-[#1d1d1f]">{data.explanation}</p>
          {data.peerPct && (
            <p className="text-xs text-[#86868b] mt-2">📊 {data.peerPct}% der Lernenden haben diese Frage richtig beantwortet.</p>
          )}
        </motion.div>
      )}

      <div className="mt-6">
        {!showFeedback
          ? <NextButton onClick={doAnswer} disabled={selected === null} label="Antwort prüfen" />
          : <NextButton onClick={onNext} label="Weiter" />}
      </div>
    </div>
  )
}

/* ── Fill-in-the-Blank ── */
function FillInStep({
  data, showFeedback, isCorrect, onAnswer, onNext,
}: {
  data: Extract<StepType, { kind: "fillin" }>; showFeedback: boolean; isCorrect: boolean; onAnswer: (c: boolean) => void; onNext: () => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const parts = data.sentence.split("___")

  return (
    <div>
      <StepBadge label="Lückentext" color="green" icon="✍️" />
      <div className="bg-white rounded-2xl border border-[#d2d2d7] p-5 sm:p-6 mb-5">
        <p className="text-lg text-[#1d1d1f] leading-relaxed">
          {parts.map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i < parts.length - 1 && (
                <span className={`inline-block px-3 py-0.5 mx-1 rounded-lg font-semibold ${showFeedback && isCorrect ? "bg-[#30D158]/20 text-[#1d1d1f]" : showFeedback && !isCorrect ? "bg-[#FF3B30]/20 text-[#1d1d1f]" : selected !== null ? "bg-[#0071e3]/10 text-[#0071e3]" : "bg-[#e8e8ed] text-[#86868b]"}`}>
                  {selected !== null ? data.options[selected].split(" / ")[i] || "___" : "___"}
                </span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>

      <div className="space-y-2">
        {data.options.map((opt, i) => (
          <button key={i} disabled={showFeedback} onClick={() => setSelected(i)}
            className={`w-full text-left p-3 rounded-xl border-2 transition-all text-sm ${selected === i ? "border-[#0071e3] bg-[#0071e3]/5" : "border-[#d2d2d7] bg-white"} ${showFeedback && data.correct === i ? "border-[#30D158] bg-[#30D158]/5" : ""} ${showFeedback && selected === i && data.correct !== i ? "border-[#FF3B30] bg-[#FF3B30]/5" : ""} ${!showFeedback ? "hover:border-[#0071e3]/50 active:scale-[0.99]" : ""}`}>
            {opt}
          </button>
        ))}
      </div>

      {showFeedback && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-4 rounded-2xl ${isCorrect ? "bg-[#30D158]/10 border border-[#30D158]/30" : "bg-[#FF3B30]/10 border border-[#FF3B30]/30"}`}>
          <p className="font-semibold text-sm">{isCorrect ? "✅ Richtig!" : "❌ Die richtige Antwort ist: " + data.options[data.correct]}</p>
        </motion.div>
      )}

      <div className="mt-6">
        {!showFeedback
          ? <NextButton onClick={() => onAnswer(selected === data.correct)} disabled={selected === null} label="Antwort prüfen" />
          : <NextButton onClick={onNext} label="Weiter" />}
      </div>
    </div>
  )
}

/* ── Wahr/Falsch Swipe Cards ── */
function TrueFalseStep({
  data, onAnswer, onNext, awardXP,
}: {
  data: Extract<StepType, { kind: "truefalse" }>; onAnswer: (c: boolean) => void; onNext: () => void; awardXP: (n: number) => void
}) {
  const [cardIdx, setCardIdx] = useState(0)
  const [results, setResults] = useState<boolean[]>([])
  const [showResult, setShowResult] = useState(false)
  const [lastAnswer, setLastAnswer] = useState<{ correct: boolean; explanation: string } | null>(null)

  const card = data.cards[cardIdx]
  const done = cardIdx >= data.cards.length
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-15, 15])
  const leftOpacity = useTransform(x, [-200, -50], [1, 0])
  const rightOpacity = useTransform(x, [50, 200], [0, 1])

  const handleSwipe = (answeredTrue: boolean) => {
    const correct = answeredTrue === card.isTrue
    setResults((r) => [...r, correct])
    onAnswer(correct)
    setLastAnswer({ correct, explanation: card.explanation })
    setShowResult(true)
  }

  const nextCard = () => {
    setShowResult(false)
    setLastAnswer(null)
    setCardIdx((i) => i + 1)
  }

  if (done) {
    const correct = results.filter(Boolean).length
    return (
      <div>
        <StepBadge label="Ergebnis" color="green" icon="✅" />
        <h2 className="text-xl font-bold text-[#1d1d1f] mb-4">Wahr/Falsch abgeschlossen!</h2>
        <p className="text-[#6e6e73] mb-6">{correct} von {data.cards.length} richtig erkannt.</p>
        <NextButton onClick={onNext} label="Weiter" />
      </div>
    )
  }

  return (
    <div>
      <StepBadge label="Wahr oder Falsch" color="orange" icon="👈👉" />
      <p className="text-sm text-[#86868b] mb-4">Wische nach rechts für WAHR, nach links für FALSCH — oder tippe die Buttons.</p>
      <p className="text-xs text-[#86868b] mb-4">Karte {cardIdx + 1} von {data.cards.length}</p>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={`card-${cardIdx}`}
            style={{ x, rotate }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(_: never, info: PanInfo) => {
              if (info.offset.x > 100) handleSwipe(true)
              else if (info.offset.x < -100) handleSwipe(false)
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative bg-white rounded-2xl border-2 border-[#d2d2d7] p-6 sm:p-8 min-h-[200px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          >
            <motion.div style={{ opacity: leftOpacity }} className="absolute top-4 left-4 px-3 py-1 bg-[#FF3B30] text-white text-xs font-bold rounded-full">FALSCH</motion.div>
            <motion.div style={{ opacity: rightOpacity }} className="absolute top-4 right-4 px-3 py-1 bg-[#30D158] text-white text-xs font-bold rounded-full">WAHR</motion.div>
            <p className="text-center text-lg font-medium text-[#1d1d1f]">{card.statement}</p>
          </motion.div>
        ) : (
          <motion.div
            key={`result-${cardIdx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl border-2 p-6 ${lastAnswer?.correct ? "border-[#30D158] bg-[#30D158]/5" : "border-[#FF3B30] bg-[#FF3B30]/5"}`}
          >
            <p className="font-bold text-base mb-2">{lastAnswer?.correct ? "✅ Richtig!" : "❌ Falsch!"}</p>
            <p className="text-sm text-[#1d1d1f]">{lastAnswer?.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3 mt-6">
        {!showResult ? (
          <>
            <button onClick={() => handleSwipe(false)} className="flex-1 py-3 bg-[#FF3B30] text-white rounded-full font-semibold text-sm active:scale-[0.97] transition-all">
              ✗ Falsch
            </button>
            <button onClick={() => handleSwipe(true)} className="flex-1 py-3 bg-[#30D158] text-white rounded-full font-semibold text-sm active:scale-[0.97] transition-all">
              ✓ Wahr
            </button>
          </>
        ) : (
          <NextButton onClick={nextCard} label={cardIdx + 1 < data.cards.length ? "Nächste Karte" : "Weiter"} />
        )}
      </div>
    </div>
  )
}

/* ── Timer Challenge ── */
function TimerChallengeStep({
  data, onDone,
}: {
  data: Extract<StepType, { kind: "timer" }>; onDone: (score: number, total: number) => void
}) {
  const [started, setStarted] = useState(false)
  const [qIdx, setQIdx] = useState(0)
  const [timerScore, setTimerScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [done, setDone] = useState(false)
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!started || done) return
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setDone(true)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [started, done])

  const answer = (i: number) => {
    const correct = i === data.questions[qIdx].correct
    if (correct) setTimerScore((s) => s + 1)
    setFlash(correct ? "correct" : "wrong")
    setTimeout(() => {
      setFlash(null)
      if (qIdx + 1 >= data.questions.length) setDone(true)
      else setQIdx((q) => q + 1)
    }, 400)
  }

  if (!started) {
    return (
      <div className="text-center">
        <StepBadge label="Blitzrunde" color="red" icon="⚡" />
        <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] mb-3">60-Sekunden-Challenge!</h2>
        <p className="text-[#6e6e73] mb-6">Beantworte so viele Fragen wie möglich in 60 Sekunden.</p>
        <p className="text-sm text-[#86868b] mb-8">{data.questions.length} Fragen warten auf dich.</p>
        <button data-main-btn onClick={() => setStarted(true)}
          className="px-8 py-3.5 bg-[#FF3B30] text-white rounded-full text-base font-semibold hover:bg-[#FF453A] active:scale-[0.97] transition-all animate-pulse">
          Los geht&apos;s!
        </button>
      </div>
    )
  }

  if (done) {
    return (
      <div className="text-center">
        <StepBadge label="Ergebnis" color="green" icon="🏆" />
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">Blitzrunde geschafft!</h2>
        <div className="text-5xl font-bold text-[#0071e3] mb-2">{timerScore}/{Math.min(qIdx + 1, data.questions.length)}</div>
        <p className="text-[#6e6e73] mb-6">richtig in {60 - timeLeft} Sekunden</p>
        <NextButton onClick={() => onDone(timerScore, Math.min(qIdx + 1, data.questions.length))} label="Weiter" />
      </div>
    )
  }

  const q = data.questions[qIdx]
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <StepBadge label="Blitzrunde" color="red" icon="⚡" />
        <div className={`text-lg font-bold ${timeLeft <= 10 ? "text-[#FF3B30] animate-pulse" : "text-[#1d1d1f]"}`}>
          {timeLeft}s
        </div>
      </div>

      {/* Timer bar */}
      <div className="h-1.5 bg-[#e8e8ed] rounded-full mb-6 overflow-hidden">
        <motion.div className="h-full bg-[#FF3B30] rounded-full" animate={{ width: `${(timeLeft / 60) * 100}%` }} transition={{ duration: 0.3 }} />
      </div>

      <motion.div
        animate={flash === "correct" ? { backgroundColor: ["rgba(48,209,88,0.1)", "rgba(0,0,0,0)"] } : flash === "wrong" ? { backgroundColor: ["rgba(255,59,48,0.1)", "rgba(0,0,0,0)"] } : {}}
        transition={{ duration: 0.4 }}
        className="rounded-2xl p-1"
      >
        <h3 className="text-lg font-bold text-[#1d1d1f] mb-4">{q.q}</h3>
        <div className="space-y-2">
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => answer(i)}
              className="w-full text-left p-3.5 rounded-xl border-2 border-[#d2d2d7] bg-white text-sm font-medium text-[#1d1d1f] hover:border-[#0071e3] active:scale-[0.97] transition-all">
              {opt}
            </button>
          ))}
        </div>
      </motion.div>

      <p className="text-center text-xs text-[#86868b] mt-4">Frage {qIdx + 1} von {data.questions.length} · {timerScore} richtig</p>
    </div>
  )
}

/* ── Freetext ── */
function FreetextStep({
  data, value, onChange, onNext,
}: {
  data: Extract<StepType, { kind: "freetext" }>; value?: string; onChange: (v: string) => void; onNext: () => void
}) {
  const [submitted, setSubmitted] = useState(false)

  const matchedKeywords = useMemo(() => {
    if (!value || !data.keywords) return []
    const lower = value.toLowerCase()
    return data.keywords.filter((kw) => lower.includes(kw.toLowerCase()))
  }, [value, data.keywords])

  const handleSubmit = () => setSubmitted(true)

  return (
    <div>
      <StepBadge label="Denkfrage" color="orange" icon="🤔" />
      <h2 className="text-lg sm:text-xl font-bold text-[#1d1d1f] mb-2">{data.question}</h2>
      {!submitted && <p className="text-sm text-[#86868b] mb-4">💡 Tipp: {data.hint}</p>}
      <textarea
        value={value || ""}
        onChange={(e) => { if (!submitted) onChange(e.target.value) }}
        placeholder="Deine Antwort..."
        rows={4}
        className={`w-full p-4 bg-white border rounded-2xl text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/30 focus:border-[#0071e3] resize-none text-base ${submitted ? "border-[#30D158] bg-[#30D158]/5" : "border-[#d2d2d7]"}`}
      />

      {submitted && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-3 space-y-3">
          {/* Keyword feedback */}
          {data.keywords && (
            <div className={`p-4 rounded-2xl ${matchedKeywords.length >= 2 ? "bg-[#30D158]/5 border border-[#30D158]/20" : "bg-[#0071e3]/5 border border-[#0071e3]/20"}`}>
              <div className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0">{matchedKeywords.length >= 2 ? "🎯" : "💬"}</span>
                <div>
                  <p className="text-sm font-semibold text-[#1d1d1f] mb-1">
                    {matchedKeywords.length >= 2 ? data.keywordFeedback || "Gut erkannt!" : "Gute Überlegung! Vergleiche deine Antwort mit der Musterantwort."}
                  </p>
                  {matchedKeywords.length >= 2 && (
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {matchedKeywords.slice(0, 5).map((kw) => (
                        <span key={kw} className="px-2 py-0.5 bg-[#30D158]/15 text-[#1d1d1f] text-xs rounded-full font-medium">{kw}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Model answer */}
          {data.modelAnswer && (
            <div className="p-4 bg-[#f5f5f7] border border-[#d2d2d7] rounded-2xl">
              <p className="text-xs font-semibold text-[#86868b] uppercase tracking-wide mb-1.5">Musterantwort</p>
              <p className="text-sm text-[#1d1d1f] leading-relaxed">{data.modelAnswer}</p>
            </div>
          )}
        </motion.div>
      )}

      {!submitted ? (
        <NextButton onClick={handleSubmit} disabled={!value?.trim()} label="Abschicken" />
      ) : (
        <NextButton onClick={onNext} label="Weiter" />
      )}
    </div>
  )
}

/* ── Sorting ── */
function SortingStep({
  data, showFeedback, isCorrect, onAnswer, onNext,
}: {
  data: Extract<StepType, { kind: "sorting" }>; showFeedback: boolean; isCorrect: boolean; onAnswer: (c: boolean) => void; onNext: () => void
}) {
  const [order, setOrder] = useState<number[]>([])

  const addItem = (idx: number) => { if (!showFeedback) setOrder((o) => [...o, idx]) }
  const removeItem = (pos: number) => { if (!showFeedback) setOrder((o) => o.filter((_, i) => i !== pos)) }
  const checkAnswer = () => onAnswer(order.every((val, idx) => val === data.correctOrder[idx]))

  return (
    <div>
      <StepBadge label="Sortieren" color="purple" icon="🔢" />
      <h2 className="text-lg sm:text-xl font-bold text-[#1d1d1f] mb-5">{data.question}</h2>

      <div className="space-y-2 mb-4 min-h-[60px]">
        {order.map((itemIdx, pos) => {
          let bg = "bg-[#0071e3]/5 border-[#0071e3]"
          if (showFeedback) bg = itemIdx === data.correctOrder[pos] ? "bg-[#30D158]/10 border-[#30D158]" : "bg-[#FF3B30]/10 border-[#FF3B30]"
          return (
            <motion.button key={`placed-${itemIdx}`} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              onClick={() => removeItem(pos)} className={`w-full text-left p-3 rounded-xl border-2 ${bg} flex items-center gap-3 transition-all ${!showFeedback ? "active:scale-[0.98]" : ""}`}>
              <span className="w-6 h-6 rounded-full bg-[#0071e3] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{pos + 1}</span>
              <span className="text-sm text-[#1d1d1f]">{data.items[itemIdx]}</span>
            </motion.button>
          )
        })}
        {order.length === 0 && (
          <div className="text-sm text-[#86868b] text-center py-4 border-2 border-dashed border-[#d2d2d7] rounded-xl">Tippe auf die Schritte in der richtigen Reihenfolge</div>
        )}
      </div>

      {data.items.filter((_, i) => !order.includes(i)).length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {data.items.map((item, i) => {
            if (order.includes(i)) return null
            return (
              <motion.button key={`rem-${i}`} layout onClick={() => addItem(i)}
                className="px-4 py-2.5 bg-white border border-[#d2d2d7] rounded-xl text-sm text-[#1d1d1f] hover:border-[#0071e3] active:scale-[0.97] transition-all">
                {item}
              </motion.button>
            )
          })}
        </div>
      )}

      {showFeedback && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className={`mb-4 p-4 rounded-2xl ${isCorrect ? "bg-[#30D158]/10 border border-[#30D158]/30" : "bg-[#FF3B30]/10 border border-[#FF3B30]/30"}`}>
          <p className="font-semibold text-sm">{isCorrect ? "✅ Perfekt! Die Reihenfolge stimmt!" : "❌ Nicht ganz. Die richtige Reihenfolge ist:"}</p>
          {!isCorrect && (
            <ol className="mt-2 text-sm text-[#1d1d1f] list-decimal list-inside space-y-1">
              {data.correctOrder.map((idx) => <li key={idx}>{data.items[idx]}</li>)}
            </ol>
          )}
        </motion.div>
      )}

      <div className="mt-4">
        {!showFeedback
          ? <NextButton onClick={checkAnswer} disabled={order.length !== data.items.length} label="Antwort prüfen" />
          : <NextButton onClick={onNext} label="Weiter" />}
      </div>
    </div>
  )
}

/* ── Matching ── */
function MatchingStep({
  data, showFeedback, isCorrect, onAnswer, onNext,
}: {
  data: Extract<StepType, { kind: "matching" }>; showFeedback: boolean; isCorrect: boolean; onAnswer: (c: boolean) => void; onNext: () => void
}) {
  const shuffledRight = useMemo(() => {
    const indices = data.pairs.map((_, i) => i)
    for (let i = indices.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [indices[i], indices[j]] = [indices[j], indices[i]] }
    return indices
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [matches, setMatches] = useState<Record<number, number>>({})
  const [draggingIdx, setDraggingIdx] = useState<number | null>(null)
  const [hoverTarget, setHoverTarget] = useState<number | null>(null)
  const leftRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Also support tap-to-match as fallback (especially desktop)
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null)

  const handleLeftClick = (i: number) => {
    if (showFeedback) return
    // If a right item was NOT being dragged, select this left for tap-matching
    if (draggingIdx === null) setSelectedLeft(prev => prev === i ? null : i)
  }

  const handleRightTap = (rightIdx: number) => {
    if (showFeedback || selectedLeft === null) return
    setMatches(m => ({ ...m, [selectedLeft]: rightIdx }))
    setSelectedLeft(null)
  }

  const handleDragStart = (origIdx: number) => {
    if (showFeedback) return
    setDraggingIdx(origIdx)
    setSelectedLeft(null)
  }

  const handleDrag = (origIdx: number, info: PanInfo, ev: MouseEvent | TouchEvent | PointerEvent) => {
    if (showFeedback) return
    // Find which left zone we're over
    const point = { x: 0, y: 0 }
    if ("touches" in ev && ev.touches.length) {
      point.x = ev.touches[0].clientX; point.y = ev.touches[0].clientY
    } else if ("clientX" in ev) {
      point.x = (ev as MouseEvent).clientX; point.y = (ev as MouseEvent).clientY
    }

    let found: number | null = null
    leftRefs.current.forEach((ref, i) => {
      if (!ref) return
      const rect = ref.getBoundingClientRect()
      if (point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom) {
        found = i
      }
    })
    setHoverTarget(found)
  }

  const handleDragEnd = (origIdx: number) => {
    if (hoverTarget !== null && !showFeedback) {
      setMatches(m => ({ ...m, [hoverTarget]: origIdx }))
    }
    setDraggingIdx(null)
    setHoverTarget(null)
  }

  // Remove a match by tapping the matched right text on a left card
  const removeMatch = (leftIdx: number) => {
    if (showFeedback) return
    setMatches(m => { const copy = { ...m }; delete copy[leftIdx]; return copy })
  }

  const allMatched = Object.keys(matches).length === data.pairs.length
  const usedRight = new Set(Object.values(matches))

  return (
    <div ref={containerRef}>
      <StepBadge label="Zuordnung" color="blue" icon="🔗" />
      <h2 className="text-lg sm:text-xl font-bold text-[#1d1d1f] mb-2">{data.question}</h2>
      <p className="text-xs text-[#86868b] mb-5">Ziehe die Beschreibungen auf den passenden Begriff oder tippe zum Zuordnen.</p>

      {/* Left side: drop zones */}
      <div className="space-y-3 mb-5">
        {data.pairs.map(([left], i) => {
          const matchedRight = i in matches ? matches[i] : null
          const isHover = hoverTarget === i && draggingIdx !== null
          const isSel = selectedLeft === i

          let border = "border-[#d2d2d7] border-dashed"
          let bg = "bg-[#f5f5f7]"
          if (showFeedback && matchedRight !== null) {
            border = matchedRight === i ? "border-[#30D158] border-solid" : "border-[#FF3B30] border-solid"
            bg = matchedRight === i ? "bg-[#30D158]/5" : "bg-[#FF3B30]/5"
          } else if (isHover) {
            border = "border-[#0071e3] border-solid"; bg = "bg-[#0071e3]/5"
          } else if (isSel) {
            border = "border-[#0071e3] border-solid"; bg = "bg-[#0071e3]/5"
          } else if (matchedRight !== null) {
            border = "border-[#0071e3]/40 border-solid"; bg = "bg-white"
          }

          return (
            <motion.div
              key={`drop-${i}`}
              ref={(el) => { leftRefs.current[i] = el }}
              onClick={() => handleLeftClick(i)}
              animate={isHover ? { scale: 1.02 } : { scale: 1 }}
              className={`relative p-3 rounded-xl border-2 ${border} ${bg} transition-colors min-h-[60px] cursor-pointer`}
            >
              <span className="text-sm font-semibold text-[#1d1d1f]">{left}</span>
              {matchedRight !== null ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-1.5 flex items-center gap-2"
                >
                  <span className="text-xs text-[#0071e3] bg-[#0071e3]/10 px-2 py-1 rounded-lg flex-1">
                    {data.pairs[matchedRight][1]}
                  </span>
                  {!showFeedback && (
                    <button onClick={(e) => { e.stopPropagation(); removeMatch(i) }}
                      className="text-[#86868b] hover:text-[#FF3B30] text-xs p-1 transition-colors">
                      ✕
                    </button>
                  )}
                  {showFeedback && (
                    <span className="text-sm">{matchedRight === i ? "✅" : "❌"}</span>
                  )}
                </motion.div>
              ) : (
                <div className="mt-1.5 text-xs text-[#86868b] italic">
                  {isHover ? "Hier ablegen" : isSel ? "Jetzt rechts tippen" : "Hierher ziehen"}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Right side: draggable items */}
      {!showFeedback && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-[#86868b] uppercase tracking-wider mb-2">Beschreibungen</p>
          <div className="flex flex-wrap gap-2">
            {shuffledRight.map((origIdx) => {
              const isUsed = usedRight.has(origIdx)
              const isDragging = draggingIdx === origIdx
              if (isUsed) return (
                <motion.div key={`drag-${origIdx}`}
                  initial={{ opacity: 1 }} animate={{ opacity: 0.3, scale: 0.95 }}
                  className="px-3 py-2 rounded-xl border border-[#d2d2d7] bg-[#f5f5f7] text-xs text-[#86868b] line-through">
                  {data.pairs[origIdx][1]}
                </motion.div>
              )
              return (
                <motion.div
                  key={`drag-${origIdx}`}
                  drag
                  dragSnapToOrigin
                  dragElastic={0.8}
                  dragMomentum={false}
                  onDragStart={() => handleDragStart(origIdx)}
                  onDrag={(ev, info) => handleDrag(origIdx, info, ev as unknown as MouseEvent)}
                  onDragEnd={() => handleDragEnd(origIdx)}
                  onClick={() => handleRightTap(origIdx)}
                  whileDrag={{ scale: 1.05, zIndex: 50, boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-3 py-2 rounded-xl border-2 bg-white text-xs text-[#1d1d1f] cursor-grab active:cursor-grabbing touch-none select-none
                    ${isDragging ? "border-[#0071e3] shadow-lg" : "border-[#d2d2d7]"}
                    ${selectedLeft !== null ? "hover:border-[#0071e3]/50" : ""}`}
                  style={{ position: "relative", zIndex: isDragging ? 50 : 1 }}
                >
                  {data.pairs[origIdx][1]}
                </motion.div>
              )
            })}
          </div>
        </div>
      )}

      {showFeedback && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-4 rounded-2xl ${isCorrect ? "bg-[#30D158]/10 border border-[#30D158]/30" : "bg-[#FF3B30]/10 border border-[#FF3B30]/30"}`}>
          <p className="font-semibold text-sm">{isCorrect ? "✅ Alle richtig zugeordnet!" : "❌ Nicht ganz richtig. Hier die Lösung:"}</p>
          {!isCorrect && <div className="mt-2 space-y-1">{data.pairs.map(([l, r], i) => <p key={i} className="text-sm text-[#1d1d1f]">{l} → {r}</p>)}</div>}
        </motion.div>
      )}

      <div className="mt-6">
        {!showFeedback
          ? <NextButton onClick={() => onAnswer(Object.entries(matches).every(([l, r]) => Number(l) === r))} disabled={!allMatched} label="Antwort prüfen" />
          : <NextButton onClick={onNext} label="Weiter" />}
      </div>
    </div>
  )
}

/* ── Case Study ── */
function CaseStep({
  data, showFeedback, isCorrect, onAnswer, onNext,
}: {
  data: Extract<StepType, { kind: "case" }>; showFeedback: boolean; isCorrect: boolean; onAnswer: (c: boolean) => void; onNext: () => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [shakeWrong, setShakeWrong] = useState(false)

  const doAnswer = () => {
    const correct = selected === data.correct
    if (!correct) { setShakeWrong(true); setTimeout(() => setShakeWrong(false), 500) }
    onAnswer(correct)
  }

  return (
    <div>
      <StepBadge label="Fallbeispiel" color="red" icon="🏥" />
      <h2 className="text-lg sm:text-xl font-bold text-[#1d1d1f] mb-3">{data.title}</h2>
      <div className="bg-white rounded-2xl border border-[#d2d2d7] p-5 mb-5">
        <p className="text-[#1d1d1f] leading-relaxed text-sm sm:text-base italic">&ldquo;{data.scenario}&rdquo;</p>
      </div>
      <p className="font-semibold text-[#1d1d1f] mb-4">{data.question}</p>

      <motion.div animate={shakeWrong ? { x: [0, -8, 8, -6, 6, 0] } : {}} transition={{ duration: 0.4 }} className="space-y-3">
        {data.options.map((opt, i) => {
          const isSel = selected === i; const isAns = data.correct === i
          let border = "border-[#d2d2d7]"; let bg = "bg-white"
          if (showFeedback && isAns) { border = "border-[#30D158]"; bg = "bg-[#30D158]/5" }
          else if (showFeedback && isSel && !isAns) { border = "border-[#FF3B30]"; bg = "bg-[#FF3B30]/5" }
          else if (isSel) { border = "border-[#0071e3]"; bg = "bg-[#0071e3]/5" }
          return (
            <button key={i} disabled={showFeedback} onClick={() => setSelected(i)}
              className={`w-full text-left p-4 rounded-2xl border-2 ${border} ${bg} transition-all text-sm sm:text-base ${!showFeedback ? "hover:border-[#0071e3]/50 active:scale-[0.99]" : ""}`}>
              {opt}
            </button>
          )
        })}
      </motion.div>

      {showFeedback && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-4 rounded-2xl ${isCorrect ? "bg-[#30D158]/10 border border-[#30D158]/30" : "bg-[#FF3B30]/10 border border-[#FF3B30]/30"}`}>
          <p className="font-semibold text-sm mb-1">{isCorrect ? "✅ Genau richtig!" : "❌ Nicht ganz"}</p>
          <p className="text-sm text-[#1d1d1f]">{data.explanation}</p>
        </motion.div>
      )}

      <div className="mt-6">
        {!showFeedback
          ? <NextButton onClick={doAnswer} disabled={selected === null} label="Antwort prüfen" />
          : <NextButton onClick={onNext} label="Weiter" />}
      </div>
    </div>
  )
}

/* ── Summary ── */
function SummaryStep({ data, onNext }: { data: Extract<StepType, { kind: "summary" }>; onNext: () => void }) {
  return (
    <div>
      <StepBadge label="Zusammenfassung" color="blue" icon="📋" />
      <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] mb-5">Das hast du heute gelernt</h2>
      <div className="space-y-3">
        {data.points.map((point, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}
            className="flex items-start gap-3 bg-white rounded-xl border border-[#d2d2d7] p-4">
            <span className="w-6 h-6 rounded-full bg-[#30D158] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
            <p className="text-sm text-[#1d1d1f]">{point}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-6"><NextButton onClick={onNext} label="Ergebnis ansehen" /></div>
    </div>
  )
}

/* ── Result ── */
function ResultStep({ score, total, xp, locale, selfBefore, selfAfter, onConfetti }: {
  score: number; total: number; xp: number; locale: string; selfBefore: number | null; selfAfter: number | null; onConfetti: () => void
}) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0
  const radius = 54
  const circ = 2 * Math.PI * radius
  const offset = circ - (pct / 100) * circ
  const labels = ["Gar nicht", "Wenig", "Etwas", "Gut", "Sehr gut"]
  const triggered = useRef(false)

  useEffect(() => {
    if (!triggered.current && pct >= 75) {
      triggered.current = true
      onConfetti()
    }
  }, [pct, onConfetti])

  return (
    <div className="text-center py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-6">Session abgeschlossen!</h2>

      <div className="relative w-40 h-40 mx-auto mb-4">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="#e8e8ed" strokeWidth="8" />
          <motion.circle cx="60" cy="60" r={radius} fill="none"
            stroke={pct >= 75 ? "#30D158" : pct >= 50 ? "#FFD60A" : "#FF3B30"} strokeWidth="8" strokeLinecap="round"
            strokeDasharray={circ} initial={{ strokeDashoffset: circ }} animate={{ strokeDashoffset: offset }} transition={{ duration: 1.5, ease: "easeOut" }} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-[#1d1d1f]">{pct}%</span>
          <span className="text-xs text-[#86868b]">{score}/{total} richtig</span>
        </div>
      </div>

      {/* XP earned */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD60A]/20 rounded-full mb-4">
        <span className="text-lg">⭐</span>
        <span className="font-bold text-[#1d1d1f]">{xp} XP verdient</span>
      </div>

      {/* Self-rating comparison */}
      {selfBefore !== null && selfAfter !== null && (
        <div className="bg-white rounded-2xl border border-[#d2d2d7] p-4 mx-auto max-w-xs mb-4">
          <p className="text-xs text-[#86868b] mb-2 font-medium">Deine Selbsteinschätzung</p>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-xs text-[#86868b]">Vorher</p>
              <p className="font-bold text-[#1d1d1f]">{labels[selfBefore]}</p>
            </div>
            <span className="text-xl">→</span>
            <div className="text-center">
              <p className="text-xs text-[#86868b]">Nachher</p>
              <p className="font-bold text-[#30D158]">{labels[selfAfter]}</p>
            </div>
          </div>
          {selfAfter > selfBefore && <p className="text-xs text-[#30D158] mt-2 font-medium">+{selfAfter - selfBefore} Stufen verbessert!</p>}
        </div>
      )}

      <p className="text-[#6e6e73] mb-2">
        {pct >= 75 ? "Sehr gut! Du hast den Pflegeprozess verstanden." : pct >= 50 ? "Guter Anfang! Wiederhole die Lektion, um dich zu verbessern." : "Nicht schlimm — Übung macht den Meister!"}
      </p>
      <p className="text-sm text-[#86868b] mb-8">Die nächste Wiederholung wird automatisch geplant.</p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href={`/${locale}/demo`} className="px-6 py-3 border border-[#d2d2d7] text-[#1d1d1f] rounded-full text-sm font-semibold hover:bg-[#f5f5f7] transition-all">
          Zur Übersicht
        </Link>
        <button onClick={() => window.location.reload()}
          className="px-6 py-3 bg-[#0071e3] text-white rounded-full text-sm font-semibold hover:bg-[#0077ED] active:scale-[0.97] transition-all">
          Nochmal üben
        </button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   Shared UI
   ═══════════════════════════════════════════════════════════════════════════ */
function StepBadge({ label, color, icon }: { label: string; color: string; icon: string }) {
  const colors: Record<string, string> = {
    blue: "bg-[#0071e3]/10 text-[#0071e3]",
    green: "bg-[#30D158]/10 text-[#30D158]",
    purple: "bg-[#BF5AF2]/10 text-[#BF5AF2]",
    orange: "bg-[#FF9500]/10 text-[#FF9500]",
    red: "bg-[#FF3B30]/10 text-[#FF3B30]",
  }
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${colors[color] || colors.blue}`}>
      <span>{icon}</span>
      {label}
    </div>
  )
}

function NextButton({ onClick, disabled, label = "Weiter" }: { onClick: () => void; disabled?: boolean; label?: string }) {
  return (
    <div className="mt-6">
      <button data-main-btn onClick={onClick} disabled={disabled}
        className="w-full py-3.5 bg-[#0071e3] text-white rounded-full text-base font-semibold hover:bg-[#0077ED] active:scale-[0.98] transition-all disabled:opacity-40 disabled:pointer-events-none">
        {label}
      </button>
    </div>
  )
}
