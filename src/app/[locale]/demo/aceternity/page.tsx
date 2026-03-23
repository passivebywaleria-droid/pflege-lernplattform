"use client"

import React, { useState, useEffect, useRef } from "react"
import { useParams } from "next/navigation"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import Link from "next/link"

/* ── shadcn-glass-ui ── */
import {
  MetricCardGlass,
  StepperGlass,
  RainbowProgressGlass,
  SparklineGlass,
  CircularProgressGlass,
  ButtonGlass,
  BadgeGlass,
  CardGlassRoot,
  CardGlassHeader,
  CardGlassTitle,
  CardGlassDescription,
  CardGlassContent,
  CardGlassFooter,
  TabsGlass,
  InputGlass,
  NotificationGlass,
  InsightCardGlass,
  ProgressGlass,
  SeparatorGlass,
  SliderGlass,
  StatusIndicatorGlass,
  CheckboxGlass,
  SwitchGlass,
  AlertGlass,
  AlertGlassTitle,
  AlertGlassDescription,
  SegmentedControlGlass,
  SearchBoxGlass,
  SkeletonGlass,
  ThemeProvider as GlassThemeProvider,
} from "shadcn-glass-ui"

/* ═══════════════════════════════════════════════════════════════════════════
   FlipWords
   ═══════════════════════════════════════════════════════════════════════════ */
function FlipWords({ words, className = "" }: { words: string[]; className?: string }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const i = setInterval(() => setIdx((n) => (n + 1) % words.length), 3000)
    return () => clearInterval(i)
  }, [words.length])
  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span key={words[idx]} className="inline-block" initial={{ opacity: 0, y: 20, rotateX: -90 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} exit={{ opacity: 0, y: -20, rotateX: 90 }} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
          {words[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   TextGenerate
   ═══════════════════════════════════════════════════════════════════════════ */
function TextGenerate({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ")
  const ref = useRef<HTMLSpanElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <motion.span key={`${w}-${i}`} className="inline-block mr-[0.25em]" initial={{ opacity: 0, y: 8, filter: "blur(4px)" }} animate={vis ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ delay: delay + i * 0.05, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
          {w}
        </motion.span>
      ))}
    </span>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   InfiniteCards
   ═══════════════════════════════════════════════════════════════════════════ */
function InfiniteCards({ items, direction = "left", speed = 35 }: { items: { text: string; author: string; role: string }[]; direction?: "left" | "right"; speed?: number }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden">
      <motion.div className="flex gap-5 w-max" animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }} transition={{ duration: speed, repeat: Infinity, ease: "linear" }}>
        {doubled.map((item, i) => (
          <div key={i} className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl bg-white border border-[#d2d2d7] p-6 shadow-sm">
            <p className="text-[15px] leading-[1.47] text-[#1d1d1f] mb-5">&ldquo;{item.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#6e6e73] text-[15px] font-semibold">{item.author[0]}</div>
              <div>
                <div className="text-[15px] font-semibold text-[#1d1d1f]">{item.author}</div>
                <div className="text-[13px] text-[#6e6e73]">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */
const modules = [
  { icon: "🩺", title: "Pflegeprozess", desc: "Systematische Pflegeplanung, Bedürfnisanalyse und Dokumentation.", progress: 78, ce: "CE 01" },
  { icon: "💬", title: "Kommunikation", desc: "Professionelle Gesprächsführung mit Patienten und im Team.", progress: 55, ce: "CE 02" },
  { icon: "⚖️", title: "Recht & Ethik", desc: "Pflegegesetz, Haftungsrecht und berufsethische Grundsätze.", progress: 40, ce: "CE 03" },
  { icon: "🧴", title: "Hygiene", desc: "Infektionsprävention, Händedesinfektion und Hygienemanagement.", progress: 92, ce: "CE 04" },
  { icon: "💊", title: "Medikamente", desc: "Arzneimittellehre, Verabreichungswege und Dosierungsberechnung.", progress: 30, ce: "CE 05" },
  { icon: "🚨", title: "Notfall", desc: "Reanimation, Erstversorgung und Notfallkommunikation.", progress: 65, ce: "CE 06" },
]

const testimonials = [
  { text: "Die interaktiven Module haben mir geholfen, komplexe Pflegeprozesse wirklich zu verstehen.", author: "Lisa M.", role: "Pflegeschülerin, 2. Lehrjahr" },
  { text: "Endlich eine Plattform, die den PflBG-Anforderungen gerecht wird.", author: "Prof. Dr. Andrea K.", role: "Dozentin für Pflegepädagogik" },
  { text: "Unsere Bestehensquote ist von 74 % auf 92 % gestiegen.", author: "Thomas R.", role: "Schulleitung, Hannover" },
  { text: "Ich lerne jetzt auch unterwegs. Die App ist so gut aufgebaut.", author: "Murat A.", role: "Pflegeschüler, 1. Lehrjahr" },
  { text: "Die Praxisszenarien sind extrem realistisch.", author: "Sarah K.", role: "Pflegeschülerin, 3. Lehrjahr" },
  { text: "Als Schule konnten wir die Plattform nahtlos integrieren.", author: "Dr. Michael W.", role: "Pflegeschule Frankfurt" },
]

const quizQuestions = [
  { question: "Welches Modell dient als Grundlage für die Pflegedokumentation nach AEDL?", answers: ["AEDL-Modell nach Krohwinkel", "Roper-Logan-Tierney-Modell", "Orem-Selbstpflegemodell", "Henderson-Modell"], correct: 0 },
  { question: "Was gehört NICHT zu den Vitalzeichen?", answers: ["Blutdruck", "Haarfarbe", "Puls", "Temperatur"], correct: 1 },
  { question: "Welche Hygienemaßnahme hat die höchste Priorität?", answers: ["Mundschutz", "Händedesinfektion", "Handschuhe", "Schutzkittel"], correct: 1 },
]

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE — Komplett weißes Apple-Design
   ═══════════════════════════════════════════════════════════════════════════ */
export default function AceternityDemoPage() {
  const { locale } = useParams()
  const [quizIdx, setQuizIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [activeTab, setActiveTab] = useState("theorie")
  const [searchQuery, setSearchQuery] = useState("")
  const q = quizQuestions[quizIdx]
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  function handleAnswer(idx: number) { if (answered) return; setSelected(idx); setAnswered(true); if (idx === q.correct) setScore((s) => s + 1) }
  function nextQuestion() { if (quizIdx < quizQuestions.length - 1) { setQuizIdx((i) => i + 1); setSelected(null); setAnswered(false) } }

  return (
    <GlassThemeProvider>
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif" }}>

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 h-12 flex items-center bg-white/80 backdrop-blur-2xl border-b border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto w-full px-5 flex items-center justify-between">
          <Link href={`/${locale}/demo`} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors flex items-center gap-1">
            <span>‹</span> Übersicht
          </Link>
          <span className="text-[13px] font-semibold text-[#1d1d1f] tracking-[-0.01em]">PflegeLern</span>
          <button className="text-[13px] text-[#0071e3] font-medium">Anmelden</button>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════
         HERO — Weißer Hintergrund mit Gradient-Text
         ═══════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative bg-white overflow-hidden min-h-[85vh] flex items-center">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 max-w-[980px] mx-auto px-5 text-center py-20 sm:py-[120px]">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-[13px] font-semibold text-[#0071e3] bg-[#e8f4fd] px-4 py-1.5 rounded-full mb-6">Neu: Adaptive Lernplattform</span>
          </motion.div>

          <h1 className="text-[40px] sm:text-[56px] md:text-[80px] font-semibold tracking-[-0.015em] leading-[1.05] text-[#1d1d1f]">
            <TextGenerate text="Pflege lernen." className="block" />
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#0071e3] via-[#007aff] to-[#5856d6]">
              <FlipWords words={["Interaktiv.", "Adaptiv.", "Spielerisch.", "Effektiv."]} />
            </span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-[17px] sm:text-[21px] text-[#6e6e73] leading-[1.47] mt-6 max-w-[680px] mx-auto px-4">
            Die erste adaptive Lernplattform für die generalistische Pflegeausbildung nach PflBG 2020.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 px-5">
            <button className="w-full sm:w-auto px-8 py-3 text-[17px] font-semibold rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors">Kostenlos testen</button>
            <button className="w-full sm:w-auto px-8 py-3 text-[17px] font-semibold rounded-full bg-[#f5f5f7] text-[#0071e3] hover:bg-[#e8e8ed] transition-colors">Mehr erfahren ›</button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10 px-4">
            {["DSGVO-konform", "Server in DE", "Kostenlose Testphase"].map((t) => (
              <span key={t} className="text-[13px] sm:text-[14px] text-[#86868b] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34c759]" /> {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
         STATS
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] py-16 sm:py-[100px] px-5">
        <div className="max-w-[980px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-[60px]">
            <p className="text-[#6e6e73] text-[15px] sm:text-[17px] mb-2">Unsere Zahlen</p>
            <h2 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.003em] leading-[1.1] text-[#1d1d1f]">Vertrauen durch Ergebnisse.</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "30", label: "Lernmodule", sub: "CE 01 – CE 06" },
              { value: "1.240+", label: "Aktive Nutzer", sub: "+18 % diesen Monat" },
              { value: "500+", label: "Quiz-Fragen", sub: "Expertengeprüft" },
              { value: "92%", label: "Bestehensquote", sub: "+18 Pkt. über ∅" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-2xl p-5 sm:p-7 text-center shadow-sm border border-[#d2d2d7]/50">
                  <p className="text-[13px] text-[#6e6e73] mb-1">{stat.label}</p>
                  <p className="text-[28px] sm:text-[40px] font-semibold text-[#1d1d1f] tracking-[-0.02em]">{stat.value}</p>
                  <p className="text-[12px] text-[#86868b] mt-1">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
         MODULES
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-[100px] px-5">
        <div className="max-w-[980px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-[60px]">
            <p className="text-[#6e6e73] text-[15px] sm:text-[17px] mb-2">Lernmodule</p>
            <h2 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.003em] leading-[1.1] text-[#1d1d1f]">Alle CE-Einheiten.</h2>
            <p className="text-[17px] sm:text-[21px] text-[#6e6e73] leading-[1.47] mt-4 max-w-[600px] mx-auto px-4">Strukturiert nach PflBG 2020. Jede Kompetenzeinheit mit Theorie, Praxis und Prüfungsvorbereitung.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod, i) => (
              <motion.div key={mod.ce} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#d2d2d7] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-[14px] bg-[#f5f5f7] flex items-center justify-center text-[24px] sm:text-[28px]">{mod.icon}</div>
                    <span className="text-[12px] font-semibold text-[#6e6e73] bg-[#f5f5f7] px-3 py-1 rounded-full">{mod.ce}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#1d1d1f] leading-[1.2] mb-2">{mod.title}</h3>
                    <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.47]">{mod.desc}</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-[13px] text-[#6e6e73] mb-2"><span>Fortschritt</span><span className="font-semibold text-[#1d1d1f]">{mod.progress} %</span></div>
                    <div className="w-full bg-[#f5f5f7] rounded-full h-[5px] overflow-hidden">
                      <motion.div className="h-full rounded-full bg-[#0071e3]" initial={{ width: 0 }} whileInView={{ width: `${mod.progress}%` }} transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }} viewport={{ once: true }} />
                    </div>
                  </div>
                  <button className="w-full text-center text-[15px] font-semibold py-[10px] rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors">Modul öffnen</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
         FEATURES
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] py-16 sm:py-[100px] px-5">
        <div className="max-w-[980px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-[60px]">
            <p className="text-[#6e6e73] text-[15px] sm:text-[17px] mb-2">Plattform</p>
            <h2 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.003em] leading-[1.1] text-[#1d1d1f]">Warum PflegeLern.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: "🧠", title: "Adaptives Lernen", desc: "KI analysiert dein Lernverhalten und passt Inhalte automatisch an.", span: true },
              { icon: "🤖", title: "KI-Feedback", desc: "Sofortige, detaillierte Erklärungen nach jeder Antwort.", span: false },
              { icon: "🏥", title: "Praxisszenarien", desc: "Realistische Fallstudien für die tägliche Pflegearbeit.", span: false },
              { icon: "📊", title: "Lernfortschritt", desc: "Detaillierte Analysen zu Stärken und Schwächen.", span: false },
              { icon: "📱", title: "Mobile-First", desc: "Optimiert für jedes Gerät — Smartphone, Tablet, Desktop.", span: false },
              { icon: "🔒", title: "DSGVO-konform", desc: "Server in Deutschland, höchste Datenschutzstandards.", span: true },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={f.span ? "sm:col-span-2 md:col-span-2" : ""}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#d2d2d7]/50 h-full hover:shadow-md transition-shadow">
                  <span className="text-[28px] block mb-3">{f.icon}</span>
                  <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#1d1d1f] mb-2">{f.title}</h3>
                  <p className="text-[14px] sm:text-[15px] text-[#6e6e73] leading-[1.47]">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stepper */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 sm:mt-16 bg-white rounded-2xl border border-[#d2d2d7]/50 p-6 sm:p-10">
            <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#1d1d1f] text-center mb-8">Dein Lernpfad</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2">
              {[
                { num: "✓", label: "Grundlagen", desc: "Pflegetheorien & Modelle", done: true },
                { num: "2", label: "Vertiefung", desc: "Praxisszenarien & Fallstudien", done: false, current: true },
                { num: "3", label: "Quiz", desc: "Wissensüberprüfung", done: false },
                { num: "4", label: "Prüfung", desc: "Examensvorbereitung", done: false },
              ].map((step, i) => (
                <React.Fragment key={step.label}>
                  {i > 0 && <div className="hidden sm:block flex-1 h-[2px] bg-[#d2d2d7] mx-2" style={step.done ? { background: "#0071e3" } : {}} />}
                  <div className="flex sm:flex-col items-center gap-3 sm:gap-2 text-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold shrink-0 ${step.done ? "bg-[#0071e3] text-white" : step.current ? "bg-[#0071e3]/10 text-[#0071e3] ring-2 ring-[#0071e3]" : "bg-[#f5f5f7] text-[#6e6e73]"}`}>
                      {step.num}
                    </div>
                    <div className="sm:text-center">
                      <p className="text-[14px] font-semibold text-[#1d1d1f]">{step.label}</p>
                      <p className="text-[12px] text-[#6e6e73]">{step.desc}</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
         LESSON PROGRESS — Timeline + Gauges
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-[100px] px-5">
        <div className="max-w-[980px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-[60px]">
            <p className="text-[#6e6e73] text-[15px] sm:text-[17px] mb-2">Lerneinheit</p>
            <h2 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.003em] leading-[1.1] text-[#1d1d1f]">So lernt man heute.</h2>
          </motion.div>
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 sm:gap-10">
            {/* Timeline */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-0">
                {[
                  { title: "Einführung in das AEDL-Modell", desc: "Monika Krohwinkel und die 13 Bereiche", lesson: "Lektion 1", status: "done" },
                  { title: "Kommunizieren können", desc: "Verbale und nonverbale Kommunikation", lesson: "Lektion 2", status: "done" },
                  { title: "Sich bewegen können", desc: "Mobilität, Lagerung und Transfers", lesson: "Lektion 3", status: "done" },
                  { title: "Pflegedokumentation", desc: "Systematische Pflegeplanung nach dem AEDL-Modell", lesson: "Lektion 4", status: "current" },
                  { title: "Vitale Funktionen", desc: "Vitalzeichen erheben und dokumentieren", lesson: "Lektion 5", status: "upcoming" },
                  { title: "Prüfungsvorbereitung", desc: "Zusammenfassung und Prüfungsfragen", lesson: "Lektion 6", status: "upcoming" },
                ].map((item, i, arr) => (
                  <div key={item.title} className="flex gap-4 pb-6 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[13px] font-semibold shrink-0 ${item.status === "done" ? "bg-[#0071e3] text-white" : item.status === "current" ? "bg-[#0071e3]/10 text-[#0071e3] ring-2 ring-[#0071e3]" : "bg-[#f5f5f7] text-[#86868b]"}`}>
                        {item.status === "done" ? "✓" : i + 1}
                      </div>
                      {i < arr.length - 1 && <div className={`w-[2px] flex-1 mt-2 ${item.status === "done" ? "bg-[#0071e3]" : "bg-[#d2d2d7]"}`} />}
                    </div>
                    <div className={`flex-1 rounded-xl border p-4 ${item.status === "current" ? "bg-[#f0f5ff] border-[#0071e3]/30" : "bg-[#f5f5f7] border-[#d2d2d7]/50"}`}>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-[15px] text-[#1d1d1f]">{item.title}</h4>
                        <span className="text-[12px] text-[#86868b] shrink-0">{item.lesson}</span>
                      </div>
                      <p className="mt-1 text-[13px] text-[#6e6e73]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sidebar Gauges */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-4">
              <div className="bg-[#f5f5f7] rounded-2xl p-6 text-center border border-[#d2d2d7]/50">
                <div className="relative w-[120px] h-[120px] mx-auto mb-3">
                  <svg width="120" height="120" className="transform -rotate-90">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#d2d2d7" strokeWidth="8" />
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#0071e3" strokeWidth="8" strokeLinecap="round" strokeDasharray={2 * Math.PI * 52} strokeDashoffset={2 * Math.PI * 52 * (1 - 0.62)} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[28px] font-bold text-[#1d1d1f]">62<span className="text-[14px] text-[#86868b]">%</span></span>
                    <span className="text-[12px] text-[#6e6e73]">Gesamt</span>
                  </div>
                </div>
                <p className="text-[13px] text-[#6e6e73]">CE 01 — Pflegeprozess</p>
              </div>

              <div className="bg-[#f5f5f7] rounded-2xl p-5 border border-[#d2d2d7]/50">
                <p className="text-[13px] text-[#6e6e73] mb-3">Lernaktivität (7 Tage)</p>
                <div className="flex items-end gap-1.5 h-[48px]">
                  {[20, 45, 35, 60, 50, 80, 72].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-sm bg-[#0071e3]" style={{ height: `${(v / 80) * 48}px`, opacity: v === 80 ? 1 : 0.6 }} />
                      <span className="text-[9px] text-[#86868b]">{["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"][i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[{ label: "Theorie", val: 78, color: "#0071e3" }, { label: "Praxis", val: 45, color: "#5856d6" }].map((g) => (
                  <div key={g.label} className="bg-[#f5f5f7] rounded-2xl p-4 text-center border border-[#d2d2d7]/50">
                    <div className="relative w-[60px] h-[60px] mx-auto mb-2">
                      <svg width="60" height="60" className="transform -rotate-90">
                        <circle cx="30" cy="30" r="24" fill="none" stroke="#d2d2d7" strokeWidth="5" />
                        <circle cx="30" cy="30" r="24" fill="none" stroke={g.color} strokeWidth="5" strokeLinecap="round" strokeDasharray={2 * Math.PI * 24} strokeDashoffset={2 * Math.PI * 24 * (1 - g.val / 100)} />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[14px] font-bold text-[#1d1d1f]">{g.val}%</span>
                      </div>
                    </div>
                    <p className="text-[12px] text-[#6e6e73]">{g.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#f5f5f7] rounded-2xl p-5 border border-[#d2d2d7]/50">
                <p className="text-[13px] text-[#6e6e73] mb-3">CE 01 Gesamtfortschritt</p>
                <div className="w-full bg-[#d2d2d7] rounded-full h-[6px] overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#0071e3] to-[#5856d6]" style={{ width: "62%" }} />
                </div>
                <p className="text-[12px] text-[#86868b] mt-2 text-right">62 %</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
         LESSON CONTENT
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] py-16 sm:py-[100px] px-5">
        <div className="max-w-[680px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
            <div className="flex flex-wrap gap-2 mb-5">
              {["CE 01", "Lektion 4 / 8", "In Bearbeitung"].map((t) => (
                <span key={t} className="text-[12px] font-medium text-[#6e6e73] bg-white px-3 py-1 rounded-full border border-[#d2d2d7]">{t}</span>
              ))}
            </div>
            <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] leading-[1.15] tracking-[-0.015em]">Pflegedokumentation nach dem AEDL-Modell</h3>
            <p className="text-[15px] text-[#6e6e73] mt-2 leading-[1.47]">Monika Krohwinkel · 13 Aktivitäten und existenzielle Erfahrungen des Lebens</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[16px] sm:text-[17px] text-[#1d1d1f] leading-[1.47] mb-6">Das AEDL-Modell wurde von <strong>Monika Krohwinkel</strong> entwickelt und ist eines der meistgenutzten Pflegemodelle im deutschsprachigen Raum.</p>
            <div className="bg-white rounded-2xl border-l-[3px] border-[#0071e3] p-5 sm:p-6 mb-6">
              <p className="text-[15px] text-[#1d1d1f] font-medium leading-[1.47]">AEDL steht für &laquo;Aktivitäten und existenzielle Erfahrungen des Lebens&raquo; und umfasst 13 Bereiche.</p>
            </div>
            <h4 className="text-[19px] sm:text-[21px] font-semibold text-[#1d1d1f] mb-5">Die 13 AEDLs</h4>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {["Kommunizieren", "Sich bewegen", "Vitale Funktionen", "Sich pflegen", "Essen und trinken", "Ausscheiden", "Sich kleiden", "Ruhen und schlafen", "Sich beschäftigen", "Sich als Mann/Frau fühlen", "Für Sicherheit sorgen", "Soziale Bereiche sichern", "Existenzielle Erfahrungen"].map((aedl, i) => (
                <motion.div key={aedl} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="flex items-center gap-3 py-1">
                  <span className="w-[24px] h-[24px] rounded-full bg-[#1d1d1f] text-white text-[11px] font-semibold flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="text-[15px] text-[#1d1d1f]">{aedl}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 text-[17px] font-semibold rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors">Weiter lernen</button>
              <button className="px-6 py-3 text-[17px] font-semibold rounded-full bg-white text-[#0071e3] border border-[#d2d2d7] hover:bg-[#f5f5f7] transition-colors">Quiz starten ›</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
         QUIZ
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-[100px] px-5">
        <div className="max-w-[680px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-[40px]">
            <p className="text-[#6e6e73] text-[15px] sm:text-[17px] mb-2">Quiz</p>
            <h2 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.003em] leading-[1.1] text-[#1d1d1f]">Teste dein Wissen.</h2>
          </motion.div>
          <div className="rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] p-5 sm:p-8">
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-[6px]">
                {quizQuestions.map((_, i) => (
                  <div key={i} className={`w-[32px] h-[4px] rounded-full transition-colors ${i < quizIdx ? "bg-[#1d1d1f]" : i === quizIdx ? "bg-[#0071e3]" : "bg-[#d2d2d7]"}`} />
                ))}
              </div>
              <span className="text-[15px] font-semibold text-[#1d1d1f]">{score}/{quizQuestions.length}</span>
            </div>
            <p className="text-[13px] text-[#86868b] mb-1">Frage {quizIdx + 1} von {quizQuestions.length}</p>
            <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#1d1d1f] leading-[1.3] mb-6">{q.question}</h3>
            <div className="space-y-3">
              {q.answers.map((a, idx) => {
                let style = "border-[#d2d2d7] bg-white hover:border-[#86868b]"
                if (answered && idx === q.correct) style = "border-[#34c759] bg-[#34c759]/10"
                else if (answered && idx === selected && idx !== q.correct) style = "border-[#ff3b30] bg-[#ff3b30]/10"
                else if (!answered && idx === selected) style = "border-[#0071e3] bg-[#0071e3]/5"
                return (
                  <motion.button key={idx} className={`w-full text-left rounded-xl border ${style} p-4 flex items-center gap-3 transition-all ${answered ? "cursor-default" : "cursor-pointer"}`} onClick={() => handleAnswer(idx)} whileTap={!answered ? { scale: 0.98 } : {}}>
                    <span className={`w-[28px] h-[28px] rounded-full flex items-center justify-center text-[13px] font-semibold shrink-0 ${answered && idx === q.correct ? "bg-[#34c759] text-white" : answered && idx === selected ? "bg-[#ff3b30] text-white" : "bg-[#f5f5f7] text-[#6e6e73]"}`}>
                      {answered && idx === q.correct ? "✓" : answered && idx === selected && idx !== q.correct ? "✗" : String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-[15px] text-[#1d1d1f]">{a}</span>
                  </motion.button>
                )
              })}
            </div>
            <AnimatePresence>
              {answered && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6 flex justify-end">
                  {quizIdx < quizQuestions.length - 1 ? (
                    <button className="px-6 py-2.5 text-[15px] font-semibold rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors" onClick={nextQuestion}>Nächste Frage ›</button>
                  ) : (
                    <div className="text-center w-full py-6">
                      <p className="text-[28px] font-semibold text-[#1d1d1f]">Quiz abgeschlossen.</p>
                      <p className="text-[17px] text-[#6e6e73] mt-2">{score} von {quizQuestions.length} richtig</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
         TESTIMONIALS
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] py-16 sm:py-[100px] overflow-hidden">
        <div className="max-w-[980px] mx-auto px-5">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-[60px]">
            <p className="text-[#6e6e73] text-[15px] sm:text-[17px] mb-2">Stimmen</p>
            <h2 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.003em] leading-[1.1] text-[#1d1d1f]">Was Nutzer sagen.</h2>
          </motion.div>
        </div>
        <div className="space-y-5">
          <InfiniteCards items={testimonials.slice(0, 3)} direction="left" speed={40} />
          <InfiniteCards items={testimonials.slice(3)} direction="right" speed={45} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
         PRICING
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-[100px] px-5">
        <div className="max-w-[820px] mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-[60px]">
            <p className="text-[#6e6e73] text-[15px] sm:text-[17px] mb-2">Preise</p>
            <h2 className="text-[32px] sm:text-[48px] font-semibold tracking-[-0.003em] leading-[1.1] text-[#1d1d1f]">Transparent und fair.</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { plan: "Jahresabo", price: "149", unit: "€ pro Schüler/Jahr", highlight: true, badge: "Empfohlen", features: ["Alle CE-Einheiten", "Unbegrenzte Quiz-Versuche", "KI-Feedback", "Fortschrittsberichte", "DSGVO-konform", "6 Monate Kündigungsfrist"] },
              { plan: "Monatsabo", price: "17", unit: "€ pro Schüler/Monat", highlight: false, badge: "Flexibel", features: ["Alle CE-Einheiten", "Unbegrenzte Quiz-Versuche", "KI-Feedback", "Fortschrittsberichte", "DSGVO-konform", "Monatlich kündbar"] },
            ].map((p, i) => (
              <motion.div key={p.plan} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className={`rounded-2xl h-full ${p.highlight ? "bg-white shadow-lg ring-2 ring-[#0071e3]" : "bg-white shadow-sm border border-[#d2d2d7]"}`}>
                  <div className="p-6 sm:p-8 flex flex-col gap-5 h-full">
                    <span className={`text-[12px] font-semibold px-3 py-1 rounded-full self-start ${p.highlight ? "bg-[#0071e3] text-white" : "bg-[#f5f5f7] text-[#6e6e73]"}`}>{p.badge}</span>
                    <div>
                      <span className="text-[40px] sm:text-[56px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">{p.price}</span>
                      <span className="text-[15px] text-[#6e6e73] ml-1">{p.unit}</span>
                    </div>
                    <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#1d1d1f]">{p.plan}</h3>
                    <ul className="space-y-3 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[15px] text-[#1d1d1f]"><span className={p.highlight ? "text-[#0071e3]" : "text-[#6e6e73]"}>✓</span>{f}</li>
                      ))}
                    </ul>
                    <button className={`w-full py-[12px] text-[17px] font-semibold rounded-full transition-colors ${p.highlight ? "bg-[#0071e3] text-white hover:bg-[#0077ed]" : "bg-[#f5f5f7] text-[#0071e3] hover:bg-[#e8e8ed]"}`}>{p.highlight ? "Jetzt starten" : "Kontakt"}</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
         CTA
         ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] py-20 sm:py-[140px] px-5">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="text-[36px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.015em] leading-[1.05] text-[#1d1d1f]">Bereit, Pflege<br />neu zu lernen?</h2>
          <p className="text-[17px] sm:text-[21px] text-[#6e6e73] leading-[1.47] mt-5 px-4">Starten Sie noch heute mit einer kostenlosen Testphase für Ihre Schule.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 px-5">
            <button className="w-full sm:w-auto px-8 py-3 text-[17px] font-semibold rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors">Kostenlos testen</button>
            <button className="w-full sm:w-auto px-8 py-3 text-[17px] font-semibold rounded-full bg-white text-[#0071e3] border border-[#d2d2d7] hover:bg-[#e8e8ed] transition-colors">Kontakt ›</button>
          </div>
          <p className="text-[13px] sm:text-[14px] text-[#86868b] mt-10">1.240+ Schülerinnen und Schüler · DSGVO-konform · Server in Deutschland</p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white border-t border-[#d2d2d7] py-5 px-5">
        <div className="max-w-[980px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#86868b]">
          <span>Copyright © 2026 PflegeLern. Alle Rechte vorbehalten.</span>
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/demo`} className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Übersicht</Link>
            <span>Datenschutz</span>
            <span>Impressum</span>
          </div>
        </div>
      </footer>

    </div>
    </GlassThemeProvider>
  )
}
