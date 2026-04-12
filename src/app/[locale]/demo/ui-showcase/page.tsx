"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { BlurFade } from "@/components/magicui/blur-fade"
import { AnimatedCircularProgress } from "@/components/magicui/animated-circular-progress"
import { Marquee } from "@/components/ui/marquee"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { Ripple } from "@/components/ui/ripple"
import { SparklesText } from "@/components/ui/sparkles-text"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { PulsatingButton } from "@/components/ui/pulsating-button"
import { ShinyButton } from "@/components/ui/shiny-button"
import { FlipWords } from "@/components/aceternity/flip-words"
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect"
import { FocusCards } from "@/components/aceternity/focus-cards"
import {
  BookOpen,
  Brain,
  Heart,
  MessageCircle,
  Star,
  Trophy,
  Flame,
  Check,
  ChevronRight,
  Sparkles,
  Stethoscope,
  Shield,
  Home,
  GraduationCap,
  BarChart3,
  User,
  Zap,
  Award,
  Volume2,
  ArrowRight,
  X,
  AlertCircle,
  Lightbulb,
  Clock,
  Target,
  TrendingUp,
  Mic,
  MousePointer,
  PenTool,
  GripVertical,
  Type,
  Eye,
  Image,
  Headphones,
  Camera,
  Play,
  Pause,
  SkipForward,
  FileAudio,
  ZoomIn,
  Layers,
  Wand2,
  HelpCircle,
  Send,
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Bell,
  Settings,
  Lock,
  Unlock,
  Crown,
  Users,
  Gift,
  Calendar,
  RefreshCw,
  Smartphone,
  Wifi,
  WifiOff,
  Download,
  Share2,
  MoreHorizontal,
  Globe,
} from "lucide-react"

// ─── Color Palette (Beige → Rosa, 7 Abstufungen) ───
const BLUSH = "#D4A9A2"   // Zart — hellstes Rosa
const ROSE  = "#C4877F"   // Primary — Dusty Rose (Hauptfarbe)
const MAUVE = "#A06B63"   // Deep — tiefes Mauve
const TAUPE = "#BFA48E"   // Neutral — warmes Taupe
const OAK   = "#B09179"   // Warm — sandiges Braun
const SAND  = "#D4C3B2"   // Subtle — heller Sand
const BONE  = "#EAE0D5"   // Background — warmes Creme

// Aliases (SAGE → ROSE, RUST → MAUVE für bestehende Referenzen)
const SAGE = ROSE
const RUST = MAUVE

export default function UIShowcase() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1d1d1f]" style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif" }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#E5DFD6] bg-[#fafaf9]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <span className="text-sm font-semibold tracking-wide" style={{ color: SAGE }}>UI SHOWCASE</span>
          <div className="flex gap-1 overflow-x-auto">
            {["Hero", "Stats", "Cards", "Progress", "Text", "Quiz", "Nav", "Feedback", "Badges", "Buttons", "Wissen", "Medien", "Input", "Extra", "Labor", "Magic", "Vision", "Experience", "Steps"].map(s => (
              <button
                key={s}
                onClick={() => document.getElementById(s.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:bg-[#E5DFD6]/50"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-6 py-8">

        {/* ═══════════════════════════════════════════════
            SECTION 1: HERO VARIANTEN
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="hero" title="Hero-Bereich" subtitle="Erster Eindruck — wie begrüßen wir den Schüler?" />

        {/* Variante A: Minimal Clean */}
        <VariantCard label="A" name="Minimal Clean" description="Ruhig, professionell, Behance-inspiriert">
          <div className="flex flex-col items-center py-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E5DFD6] bg-white px-4 py-1.5 text-xs font-medium" style={{ color: OAK }}>
              <Sparkles className="h-3.5 w-3.5" />
              Adaptiv. Persönlich. Pflegefachlich.
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Pflege lernen.{" "}
              <span style={{ color: SAGE }}>Besser als mit Lehrer.</span>
            </h1>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-[#6e6e73]">
              Die komplette theoretische Ausbildung auf deinem Smartphone.
              KI-gestützt, adaptiv, in deinem Tempo.
            </p>
            <div className="flex gap-3">
              <button className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]" style={{ backgroundColor: SAGE }}>
                Kostenlos starten
              </button>
              <button className="rounded-full border border-[#E5DFD6] px-6 py-2.5 text-sm font-medium transition-colors hover:bg-[#E5DFD6]/30">
                Demo ansehen
              </button>
            </div>
          </div>
        </VariantCard>

        {/* Variante B: Animated Flip Words */}
        <VariantCard label="B" name="Flip Words Hero" description="Dynamisch, wechselnde Begriffe zeigen Vielfalt">
          <div className="flex flex-col items-center py-12 text-center">
            <div className="mb-4">
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">Lerne</p>
              <div className="h-[3rem] flex items-center justify-center" style={{ color: ROSE }}>
                <FlipWords
                  words={["Pflegeprozess", "Kommunikation", "Ethik", "Dekubitus", "Anatomie"]}
                  duration={2500}
                  className="text-3xl sm:text-4xl"
                />
              </div>
              <p className="text-[#6e6e73] font-normal text-2xl">wie es zu dir passt.</p>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm" style={{ color: OAK }}>
              <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> 11 CE</span>
              <span className="flex items-center gap-1.5"><Brain className="h-4 w-4" /> KI-Tutor</span>
              <span className="flex items-center gap-1.5"><MessageCircle className="h-4 w-4" /> DE/AR/TR</span>
            </div>
          </div>
        </VariantCard>

        {/* Variante C: Text Generate */}
        <VariantCard label="C" name="Text Generate Hero" description="Cinematic, Text erscheint Wort für Wort">
          <div className="flex flex-col items-center py-12 text-center">
            <TextGenerateEffect
              words="Ein Schüler. Ein Gerät. Die komplette theoretische Ausbildung."
              className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl"
            />
            <p className="max-w-md text-sm text-[#6e6e73]">
              Besser als mit Lehrer. 11 Curriculare Einheiten. Adaptiv. Persönlich.
            </p>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 2: STATS / ZAHLEN
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="stats" title="Zahlen & Statistiken" subtitle="Wie zeigen wir Fortschritt und Erfolge?" />

        {/* Variante A: Number Tickers */}
        <VariantCard label="A" name="Number Ticker Leiste" description="Animierte Zahlen, clean und minimal">
          <div className="grid grid-cols-3 gap-6 py-8">
            {[
              { label: "XP heute", value: 240, icon: <Star className="h-5 w-5" style={{ color: OAK }} /> },
              { label: "Tage-Streak", value: 12, icon: <Flame className="h-5 w-5" style={{ color: RUST }} /> },
              { label: "Richtig", value: 87, suffix: "%", icon: <Check className="h-5 w-5" style={{ color: SAGE }} /> },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E5DFD6]/50">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold">
                  <NumberTicker value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-xs text-[#86868b]">{stat.label}</div>
              </div>
            ))}
          </div>
        </VariantCard>

        {/* Variante B: Circular Progress */}
        <VariantCard label="B" name="Kreisfortschritt" description="Visuell stark, Behance-Style">
          <div className="flex items-center justify-center gap-8 py-8">
            <AnimatedCircularProgress value={73} gaugePrimaryColor={SAGE} gaugeSecondaryColor={BONE}>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: SAGE }}>73%</div>
                <div className="text-[10px] text-[#86868b]">Session</div>
              </div>
            </AnimatedCircularProgress>
            <div className="space-y-3">
              <StatRow label="CE 01 — Ausbildungsstart" value={73} color={SAGE} />
              <StatRow label="Sprache (Deutsch)" value={85} color={OAK} />
              <StatRow label="Fachwissen" value={61} color={RUST} />
            </div>
          </div>
        </VariantCard>

        {/* Variante C: Minimal Bars */}
        <VariantCard label="C" name="Kompakte Balken" description="Platzsparend, Dashboard-geeignet">
          <div className="space-y-4 py-6">
            {[
              { label: "Pflegeprozess", value: 92, color: SAGE },
              { label: "Kommunikation", value: 78, color: OAK },
              { label: "Ethik", value: 45, color: RUST },
              { label: "Kulturelle Pflege", value: 30, color: ROSE },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-32 text-xs font-medium">{item.label}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#E5DFD6]/60">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="w-8 text-right text-xs font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 3: CARD STYLES
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="cards" title="Karten-Design" subtitle="Wie sehen Themen, Sessions und Features aus?" />

        {/* Variante A: Focus Cards */}
        <VariantCard label="A" name="Focus Cards" description="Blur-Effekt — Fokus auf aktive Karte">
          <div className="py-6">
            <FocusCards
              cards={[
                { title: "Pflegeprozess", description: "6 Schritte nach Fiechter & Meier", icon: <Stethoscope className="h-5 w-5" style={{ color: SAGE }} />, color: SAGE },
                { title: "Ethik", description: "4 Prinzipien von Beauchamp & Childress", icon: <Shield className="h-5 w-5" style={{ color: RUST }} />, color: RUST },
                { title: "Kommunikation", description: "Schulz von Thun, Peplau, Aktives Zuhören", icon: <MessageCircle className="h-5 w-5" style={{ color: OAK }} />, color: OAK },
                { title: "Kulturelle Pflege", description: "Leininger, Transkulturelle Kompetenz", icon: <Heart className="h-5 w-5" style={{ color: ROSE }} />, color: ROSE },
              ]}
            />
          </div>
        </VariantCard>

        {/* Variante B: Glassmorphism Cards */}
        <VariantCard label="B" name="Glass Cards" description="Behance-inspiriert, transparente Karten mit Blur">
          <div className="grid grid-cols-2 gap-3 py-6">
            {[
              { title: "Session 1", subtitle: "Was ist Pflege?", progress: 100, color: SAGE, emoji: "🏥" },
              { title: "Session 2", subtitle: "Pflegeprozess", progress: 73, color: OAK, emoji: "🔄" },
              { title: "Session 3", subtitle: "Kommunikation", progress: 30, color: RUST, emoji: "💬" },
              { title: "Session 4", subtitle: "Ethik & Moral", progress: 0, color: ROSE, emoji: "⚖️" },
            ].map((card) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-black/5"
              >
                <div className="absolute -right-4 -top-4 text-4xl opacity-10 transition-opacity group-hover:opacity-20">
                  {card.emoji}
                </div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: card.color }}>
                  {card.title}
                </div>
                <div className="mb-1 text-sm font-semibold">{card.subtitle}</div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#E5DFD6]/60">
                    <div className="h-full rounded-full transition-all" style={{ width: `${card.progress}%`, backgroundColor: card.color }} />
                  </div>
                  <span className="text-[10px] font-medium" style={{ color: card.color }}>
                    {card.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </VariantCard>

        {/* Variante C: Minimal List */}
        <VariantCard label="C" name="Minimal Liste" description="Apple-Style, ultra clean">
          <div className="divide-y divide-[#E5DFD6]/50 py-4">
            {[
              { title: "Was ist Pflege?", session: 1, done: true, color: SAGE },
              { title: "Der Pflegeprozess", session: 2, done: true, color: SAGE },
              { title: "Kommunikation in der Pflege", session: 3, active: true, color: RUST },
              { title: "Ethik & Moral", session: 4, color: "#86868b" },
            ].map((item) => (
              <div
                key={item.title}
                className={`flex items-center gap-3 px-2 py-3 ${item.active ? "bg-[#E5DFD6]/20 rounded-xl -mx-2 px-4" : ""}`}
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.done ? <Check className="h-4 w-4" /> : item.session}
                </div>
                <div className="flex-1">
                  <div className={`text-sm font-medium ${item.active ? "font-semibold" : ""}`}>{item.title}</div>
                  <div className="text-[11px] text-[#86868b]">Session {item.session} · 22 Steps</div>
                </div>
                <ChevronRight className="h-4 w-4 text-[#86868b]" />
              </div>
            ))}
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 4: PROGRESS DISPLAY
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="progress" title="Fortschritts-Anzeige" subtitle="Session-Progress und Kompetenz-Übersicht" />

        {/* Variante A: Top Bar */}
        <VariantCard label="A" name="Progress Bar (aktuell)" description="Einfach, bewährt, top of page">
          <div className="py-6">
            <div className="mb-2 flex justify-between text-xs">
              <span className="font-medium">Session 1 — Was ist Pflege?</span>
              <span style={{ color: SAGE }}>7 / 22 Steps</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#E5DFD6]">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: SAGE }}
                initial={{ width: 0 }}
                whileInView={{ width: "32%" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </VariantCard>

        {/* Variante B: Segmented */}
        <VariantCard label="B" name="Segmented Progress" description="Jeder Step sichtbar, Duolingo-inspiriert">
          <div className="py-6">
            <div className="mb-3 text-xs font-medium">Session 1 — Step 7 von 22</div>
            <div className="flex gap-1">
              {Array.from({ length: 22 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 flex-1 rounded-full transition-colors"
                  style={{
                    backgroundColor: i < 7 ? SAGE : i === 7 ? `${SAGE}40` : `${BONE}`,
                  }}
                />
              ))}
            </div>
          </div>
        </VariantCard>

        {/* Variante C: Circle + Steps */}
        <VariantCard label="C" name="Kreis + Segmente" description="Beides kombiniert, Premium-Look">
          <div className="flex items-center gap-6 py-6">
            <AnimatedCircularProgress value={32} size={80} strokeWidth={6} gaugePrimaryColor={SAGE} gaugeSecondaryColor={BONE}>
              <div className="text-center">
                <div className="text-lg font-bold" style={{ color: SAGE }}>7</div>
                <div className="text-[9px] text-[#86868b]">von 22</div>
              </div>
            </AnimatedCircularProgress>
            <div className="flex-1">
              <div className="mb-2 text-sm font-semibold">Was ist Pflege?</div>
              <div className="flex flex-wrap gap-1">
                {Array.from({ length: 22 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: i < 7 ? SAGE : BONE }}
                  />
                ))}
              </div>
              <div className="mt-2 text-[11px] text-[#86868b]">
                Nächster Step: Pflegeprozess nach Fiechter & Meier
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 5: TEXT ANIMATION
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="text" title="Text & Feedback" subtitle="Wie zeigen wir Erklärungen und KI-Feedback?" />

        {/* Variante A: BlurFade */}
        <VariantCard label="A" name="Blur Fade In" description="Sanft, professionell, nicht aufdringlich">
          <div className="space-y-3 py-6">
            <BlurFade delay={0}>
              <div className="rounded-xl bg-[#E5DFD6]/30 p-4">
                <div className="mb-1 text-xs font-semibold" style={{ color: SAGE }}>Erklärung</div>
                <p className="text-sm leading-relaxed">
                  Der Pflegeprozess nach Fiechter & Meier umfasst <strong>6 Schritte</strong> und bildet die Grundlage professioneller Pflege.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.3}>
              <div className="rounded-xl border border-[#C4877F]/20 bg-[#C4877F]/5 p-4">
                <div className="mb-1 text-xs font-semibold text-[#C4877F]">Richtig!</div>
                <p className="text-sm" style={{ color: "#A06B63" }}>Genau — Informationssammlung ist der erste Schritt.</p>
              </div>
            </BlurFade>
          </div>
        </VariantCard>

        {/* Variante B: Kein Effekt */}
        <VariantCard label="B" name="Ohne Animation" description="Sofort sichtbar, null Overhead">
          <div className="space-y-3 py-6">
            <div className="rounded-xl bg-[#E5DFD6]/30 p-4">
              <div className="mb-1 text-xs font-semibold" style={{ color: SAGE }}>Erklärung</div>
              <p className="text-sm leading-relaxed">
                Der Pflegeprozess nach Fiechter & Meier umfasst <strong>6 Schritte</strong> und bildet die Grundlage professioneller Pflege.
              </p>
            </div>
            <div className="rounded-xl border border-[#C4877F]/20 bg-[#C4877F]/5 p-4">
              <div className="mb-1 text-xs font-semibold text-[#C4877F]">Richtig!</div>
              <p className="text-sm" style={{ color: "#A06B63" }}>Genau — Informationssammlung ist der erste Schritt.</p>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 6: QUIZ / MC FRAGE
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="quiz" title="Quiz-Fragen" subtitle="Wie sieht eine Multiple-Choice-Frage aus?" />

        {/* Variante A: Clean Card */}
        <VariantCard label="A" name="Clean Card" description="Klar, strukturiert, aktuelle Version">
          <div className="py-6">
            <div className="mb-4 text-sm font-semibold">Welcher Schritt kommt zuerst im Pflegeprozess?</div>
            <div className="space-y-2">
              {[
                { text: "Informationssammlung", correct: true },
                { text: "Pflegeplanung", correct: false },
                { text: "Evaluation", correct: false },
                { text: "Durchführung", correct: false },
              ].map((opt, i) => (
                <button
                  key={i}
                  className={`w-full rounded-xl border p-3 text-left text-sm transition-all ${
                    opt.correct
                      ? "border-[#C4877F]/30 bg-[#C4877F]/5 font-medium"
                      : "border-[#E5DFD6] hover:border-[#D1A9A5]/50 hover:bg-[#D1A9A5]/5"
                  }`}
                >
                  <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold" style={{ backgroundColor: opt.correct ? `${SAGE}20` : `${BONE}`, color: opt.correct ? SAGE : "#86868b" }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* Variante B: Pill Buttons */}
        <VariantCard label="B" name="Pill Buttons" description="Runde Optionen, Duolingo-Style">
          <div className="py-6">
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: OAK }}>Frage 7 von 22</div>
            <div className="mb-5 text-base font-bold">Was bedeutet &quot;Dekubitus&quot;?</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { text: "Druckgeschwür", correct: true },
                { text: "Blutvergiftung", correct: false },
                { text: "Knochenbruch", correct: false },
                { text: "Lungenentzündung", correct: false },
              ].map((opt, i) => (
                <button
                  key={i}
                  className={`rounded-2xl border-2 px-4 py-3 text-sm font-medium transition-all active:scale-[0.97] ${
                    opt.correct
                      ? "border-[#C4877F] bg-[#C4877F]/10"
                      : "border-[#E5DFD6] hover:border-[#AE6965]/40"
                  }`}
                  style={opt.correct ? { color: SAGE } : {}}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* Variante C: Swipe Style */}
        <VariantCard label="C" name="Statement Card" description="Wahr/Falsch als Swipe-Karte">
          <div className="flex flex-col items-center py-8">
            <div className="w-full max-w-sm rounded-2xl border border-[#E5DFD6] bg-gradient-to-b from-white to-[#fafaf9] p-6 text-center shadow-sm">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider" style={{ color: RUST }}>Wahr oder Falsch?</div>
              <p className="mb-6 text-sm font-semibold leading-relaxed">
                &quot;Der ICN-Ethikkodex gilt nur für Krankenpfleger, nicht für Altenpfleger.&quot;
              </p>
              <div className="flex justify-center gap-3">
                <button className="flex items-center gap-1.5 rounded-full border-2 border-[#A06B63]/20 px-5 py-2 text-sm font-semibold text-[#A06B63] transition-all hover:bg-[#A06B63]/5 active:scale-95">
                  <X className="h-4 w-4" /> Falsch
                </button>
                <button className="flex items-center gap-1.5 rounded-full border-2 border-[#C4877F]/30 px-5 py-2 text-sm font-semibold text-[#C4877F] transition-all hover:bg-[#C4877F]/5 active:scale-95">
                  <Check className="h-4 w-4" /> Wahr
                </button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 7: NAVIGATION
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="nav" title="Navigation" subtitle="Bottom Tab Bar, Sidebar oder Top-Tabs?" />

        {/* Variante A: Bottom Dock */}
        <VariantCard label="A" name="Bottom Dock" description="Mobile-First, wie Instagram/TikTok">
          <div className="py-6">
            <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-[#E5DFD6] bg-[#fafaf9]">
              <div className="bg-white p-4 text-center text-xs text-[#86868b]">[App Content]</div>
              <div className="flex items-center justify-around border-t border-[#E5DFD6] bg-white/80 px-2 py-2 backdrop-blur-xl">
                {[
                  { icon: <Home className="h-5 w-5" />, label: "Start", active: false },
                  { icon: <BookOpen className="h-5 w-5" />, label: "Lernen", active: true },
                  { icon: <Brain className="h-5 w-5" />, label: "KI-Tutor", active: false },
                  { icon: <BarChart3 className="h-5 w-5" />, label: "Fortschritt", active: false },
                  { icon: <User className="h-5 w-5" />, label: "Profil", active: false },
                ].map((item) => (
                  <button key={item.label} className="flex flex-col items-center gap-0.5 px-2 py-1">
                    <div style={{ color: item.active ? SAGE : "#86868b" }}>{item.icon}</div>
                    <span className="text-[10px] font-medium" style={{ color: item.active ? SAGE : "#86868b" }}>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Variante B: Floating Pill */}
        <VariantCard label="B" name="Floating Pill" description="Schwebende Navigation, modern">
          <div className="py-6">
            <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-[#E5DFD6] bg-[#fafaf9]">
              <div className="bg-white p-4 text-center text-xs text-[#86868b]">[App Content]</div>
              <div className="flex justify-center pb-4 pt-2">
                <div className="flex items-center gap-1 rounded-full border border-[#E5DFD6] bg-white p-1.5 shadow-lg shadow-black/5">
                  {[
                    { icon: <Home className="h-4 w-4" />, active: false },
                    { icon: <BookOpen className="h-4 w-4" />, active: true },
                    { icon: <Brain className="h-4 w-4" />, active: false },
                    { icon: <BarChart3 className="h-4 w-4" />, active: false },
                  ].map((item, i) => (
                    <button
                      key={i}
                      className="rounded-full p-2.5 transition-colors"
                      style={{ backgroundColor: item.active ? SAGE : "transparent", color: item.active ? "white" : "#86868b" }}
                    >
                      {item.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Variante C: Top Tabs */}
        <VariantCard label="C" name="Top Segmented" description="iOS-Style segmented control">
          <div className="py-6">
            <div className="mx-auto max-w-sm">
              <div className="mb-4 flex rounded-xl bg-[#E5DFD6]/40 p-1">
                {["Lernen", "Üben", "Prüfung"].map((tab, i) => (
                  <button
                    key={tab}
                    className="flex-1 rounded-lg py-2 text-xs font-semibold transition-all"
                    style={i === 0 ? { backgroundColor: "white", color: SAGE, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" } : { color: "#86868b" }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="rounded-xl border border-[#E5DFD6] bg-white p-4 text-center text-xs text-[#86868b]">[Tab Content]</div>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 8: FEEDBACK / TOAST
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="feedback" title="Feedback & Toasts" subtitle="Wie reagiert die App auf richtige/falsche Antworten?" />

        {/* Variante A: Inline Feedback */}
        <VariantCard label="A" name="Inline Feedback" description="Direkt unter der Frage, mit Erklärung">
          <div className="space-y-3 py-6">
            <div className="rounded-xl border border-[#C4877F]/20 bg-[#C4877F]/5 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C4877F]/15">
                  <Check className="h-4 w-4 text-[#C4877F]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#A06B63]">Richtig!</div>
                  <p className="mt-1 text-xs leading-relaxed text-[#C4877F]">
                    Genau — die Informationssammlung ist der erste Schritt. Du erkennst die Struktur des Pflegeprozesses sehr gut!
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-[#A06B63]/20 bg-[#A06B63]/5 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#A06B63]/10">
                  <X className="h-4 w-4 text-[#A06B63]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#A06B63]">Nicht ganz.</div>
                  <p className="mt-1 text-xs leading-relaxed text-[#A06B63]">
                    Guter Ansatz! Evaluation kommt aber erst am Ende. Zuerst sammeln wir Informationen über den Patienten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Variante B: Bottom Sheet */}
        <VariantCard label="B" name="Bottom Sheet" description="Slide-up Panel, Duolingo-Style">
          <div className="py-6">
            <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-[#E5DFD6]">
              <div className="bg-[#fafaf9] p-6 text-center text-xs text-[#86868b]">[Frage darüber]</div>
              <div className="border-t-2 border-[#C4877F] bg-white p-5">
                <div className="mb-1 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#C4877F]" />
                  <span className="text-sm font-bold text-[#C4877F]">Super gemacht!</span>
                </div>
                <p className="mb-4 text-xs text-[#6e6e73]">
                  Informationssammlung steht immer am Anfang — so lernst du den Patienten zuerst kennen.
                </p>
                <button className="w-full rounded-xl py-2.5 text-sm font-semibold text-white" style={{ backgroundColor: SAGE }}>
                  Weiter
                </button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Variante C: Sandwich Toast */}
        <VariantCard label="C" name="Sandwich-Prinzip" description="Loben → Korrigieren → Ermutigen (VISION.md)">
          <div className="py-6">
            <div className="mx-auto max-w-sm space-y-2">
              <div className="flex items-start gap-2 rounded-xl bg-[#C4877F]/10 p-3">
                <span className="mt-0.5 text-base">👍</span>
                <p className="text-xs leading-relaxed"><strong>Guter Ansatz!</strong> Du hast richtig erkannt, dass es um die Reihenfolge geht.</p>
              </div>
              <div className="flex items-start gap-2 rounded-xl bg-[#AE6965]/10 p-3">
                <span className="mt-0.5 text-base">🔧</span>
                <p className="text-xs leading-relaxed"><strong>Allerdings:</strong> Die Pflegeplanung kommt erst nach der Informationssammlung — zuerst musst du den Patienten kennen.</p>
              </div>
              <div className="flex items-start gap-2 rounded-xl bg-[#A58B71]/10 p-3">
                <span className="mt-0.5 text-base">💪</span>
                <p className="text-xs leading-relaxed"><strong>Weiter so!</strong> Beim nächsten Mal achte auf die logische Reihenfolge. Du bist auf dem richtigen Weg!</p>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 9: ACHIEVEMENTS / BADGES
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="badges" title="Achievements & Gamification" subtitle="Wie feiern wir Erfolge?" />

        {/* Variante A: Streak Banner */}
        <VariantCard label="A" name="Streak & XP Banner" description="Oben auf dem Dashboard, kompakt">
          <div className="py-6">
            <div className="grid grid-cols-3 gap-3 rounded-2xl bg-gradient-to-r from-[#C4877F]/10 via-[#A58B71]/10 to-[#AE6965]/10 p-4">
              <div className="flex flex-col items-center gap-1 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#AE6965]/15">
                  <Flame className="h-5 w-5" style={{ color: RUST }} />
                </div>
                <div className="text-lg font-bold leading-tight" style={{ color: RUST }}>12</div>
                <div className="text-[10px] text-[#86868b]">Tage-Streak</div>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A58B71]/15">
                  <Zap className="h-5 w-5" style={{ color: OAK }} />
                </div>
                <div className="text-lg font-bold leading-tight" style={{ color: OAK }}>2.450</div>
                <div className="text-[10px] text-[#86868b]">XP gesamt</div>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C4877F]/15">
                  <Target className="h-5 w-5" style={{ color: SAGE }} />
                </div>
                <div className="text-lg font-bold leading-tight" style={{ color: SAGE }}>87%</div>
                <div className="text-[10px] text-[#86868b]">Richtig-Quote</div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Variante B: Badge Shelf */}
        <VariantCard label="B" name="Badge-Regal" description="Gesammelte Abzeichen, Sammelkarten-Feeling">
          <div className="py-6">
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: <Star className="h-6 w-6" />, label: "Erste Session", unlocked: true, color: OAK },
                { icon: <Flame className="h-6 w-6" />, label: "7-Tage-Streak", unlocked: true, color: RUST },
                { icon: <GraduationCap className="h-6 w-6" />, label: "CE 01 fertig", unlocked: true, color: SAGE },
                { icon: <Award className="h-6 w-6" />, label: "100% Score", unlocked: false, color: "#86868b" },
                { icon: <Volume2 className="h-6 w-6" />, label: "Sprechprofi", unlocked: false, color: "#86868b" },
                { icon: <Trophy className="h-6 w-6" />, label: "Prüfungsreif", unlocked: false, color: "#86868b" },
                { icon: <Heart className="h-6 w-6" />, label: "Empathie-Held", unlocked: false, color: "#86868b" },
                { icon: <TrendingUp className="h-6 w-6" />, label: "Aufsteiger", unlocked: false, color: "#86868b" },
              ].map((badge, i) => (
                <div key={i} className={`flex flex-col items-center gap-1 rounded-xl p-3 text-center transition-all ${badge.unlocked ? "bg-white shadow-sm" : "opacity-30"}`}>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: badge.unlocked ? `${badge.color}15` : "#f0f0f0", color: badge.color }}
                  >
                    {badge.icon}
                  </div>
                  <span className="text-[10px] font-medium leading-tight">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* Variante C: Level Up Celebration */}
        <VariantCard label="C" name="Level-Up Modal" description="Feier-Animation nach Session-Abschluss">
          <div className="flex justify-center py-8">
            <div className="w-full max-w-xs rounded-3xl border border-[#E5DFD6] bg-white p-6 text-center shadow-xl shadow-black/5">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: `${SAGE}15` }}>
                <Trophy className="h-8 w-8" style={{ color: SAGE }} />
              </div>
              <div className="mb-1 text-lg font-bold">Session abgeschlossen!</div>
              <p className="mb-4 text-xs text-[#86868b]">Du hast &quot;Was ist Pflege?&quot; gemeistert</p>
              <div className="mb-4 flex justify-center gap-6 text-center">
                <div>
                  <div className="text-xl font-bold" style={{ color: OAK }}>+120</div>
                  <div className="text-[10px] text-[#86868b]">XP</div>
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: SAGE }}>87%</div>
                  <div className="text-[10px] text-[#86868b]">Richtig</div>
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: RUST }}>12</div>
                  <div className="text-[10px] text-[#86868b]">Streak</div>
                </div>
              </div>
              <button className="w-full rounded-2xl py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95" style={{ backgroundColor: SAGE }}>
                Weiter zu Session 2
              </button>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 10: BUTTONS
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="buttons" title="Buttons & CTA" subtitle="Call-to-Action Stile" />

        {/* Variante A: Rounded Filled */}
        <VariantCard label="A" name="Rounded Filled" description="Voll gefüllt, Poppins-Medium, Warm Triad">
          <div className="flex flex-wrap items-center gap-3 py-6">
            <button className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95" style={{ backgroundColor: SAGE }}>
              Lektion starten
            </button>
            <button className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95" style={{ backgroundColor: RUST }}>
              Prüfung starten
            </button>
            <button className="rounded-full border-2 px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-[#E5DFD6]/30" style={{ borderColor: SAGE, color: SAGE }}>
              Überspringen
            </button>
            <button className="rounded-full bg-[#E5DFD6] px-6 py-2.5 text-sm font-medium text-[#6e6e73] transition-colors hover:bg-[#d8d2ca]">
              Später
            </button>
          </div>
        </VariantCard>

        {/* Variante B: Soft Rounded */}
        <VariantCard label="B" name="Soft Rounded" description="Sanftere Ecken, leichter Schatten">
          <div className="flex flex-wrap items-center gap-3 py-6">
            <button className="rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#C4877F]/20 transition-all hover:shadow-lg hover:shadow-[#C4877F]/30 active:scale-95" style={{ backgroundColor: SAGE }}>
              <span className="flex items-center gap-2">Lektion starten <ArrowRight className="h-4 w-4" /></span>
            </button>
            <button className="rounded-2xl border border-[#E5DFD6] bg-white px-6 py-3 text-sm font-medium shadow-sm transition-all hover:shadow-md active:scale-95">
              Demo ansehen
            </button>
            <button className="rounded-2xl px-6 py-3 text-sm font-medium underline decoration-[#86868b]/30 underline-offset-4 transition-colors hover:text-[#1d1d1f]" style={{ color: "#86868b" }}>
              Mehr erfahren
            </button>
          </div>
        </VariantCard>

        {/* Variante C: Full-Width Stacked */}
        <VariantCard label="C" name="Full-Width Mobile" description="Volle Breite, mobil optimiert">
          <div className="mx-auto max-w-sm space-y-2 py-6">
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99]" style={{ backgroundColor: SAGE }}>
              <BookOpen className="h-4 w-4" /> Session fortsetzen
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[#E5DFD6] bg-white py-3.5 text-sm font-medium transition-all hover:bg-[#E5DFD6]/20">
              <Clock className="h-4 w-4" style={{ color: OAK }} /> Karteikarten üben
            </button>
            <button className="w-full rounded-2xl py-3 text-sm font-medium text-[#86868b] transition-colors hover:text-[#1d1d1f]">
              Dashboard
            </button>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 11: STEP-TYPEN — WISSENSABFRAGE
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="wissen" title="Step-Typen: Wissensabfrage" subtitle="Alle Quiz- und Abfrage-Formate aus LE-01" />

        {/* MC */}
        <VariantCard label="1" name="Multiple Choice (mc)" description="Klassisch — 4 Optionen, eine richtig, mit Erklärung">
          <div className="py-5">
            <div className="mb-1 text-xs font-semibold" style={{ color: OAK }}>Pflegeprozess</div>
            <div className="mb-3 text-sm font-semibold">Welcher Schritt kommt zuerst im Pflegeprozess nach Fiechter & Meier?</div>
            <div className="space-y-2">
              {["A) Informationssammlung", "B) Pflegeplanung", "C) Durchführung", "D) Evaluation"].map((opt, i) => (
                <div key={i} className={`rounded-xl border p-3 text-sm ${i === 0 ? "border-[#C4877F]/30 bg-[#C4877F]/5 font-medium" : "border-[#E5DFD6]"}`}>
                  {opt}
                  {i === 0 && <span className="ml-2 text-[10px] text-[#C4877F]">✓ Richtig</span>}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* True/False */}
        <VariantCard label="2" name="Wahr/Falsch (truefalse)" description="Schnelle Ja/Nein-Entscheidung">
          <div className="py-5">
            <div className="rounded-xl border border-[#E5DFD6] bg-[#fafaf9] p-5 text-center">
              <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: RUST }}>Wahr oder Falsch?</div>
              <p className="mb-5 text-sm font-semibold">&quot;Florence Nightingale begründete die moderne Krankenpflege.&quot;</p>
              <div className="flex justify-center gap-3">
                <button className="rounded-full border-2 border-[#C4877F]/30 bg-[#C4877F]/5 px-6 py-2 text-sm font-semibold text-[#C4877F]">✓ Wahr</button>
                <button className="rounded-full border-2 border-[#E5DFD6] px-6 py-2 text-sm font-medium text-[#86868b]">✗ Falsch</button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Swipe */}
        <VariantCard label="3" name="Swipe Cards (swipe)" description="Stimmt/Stimmt-nicht — Anticipation Guide">
          <div className="py-5">
            <div className="mx-auto max-w-sm space-y-3">
              <div className="rounded-2xl border border-[#E5DFD6] p-4">
                <div className="mb-3 text-center text-sm font-semibold">&quot;Pflege ist ein eigenständiger Beruf.&quot;</div>
                <div className="flex justify-center gap-3">
                  <button className="flex items-center gap-1 rounded-full border-2 border-[#A06B63]/20 px-4 py-1.5 text-xs font-semibold text-[#A06B63]">
                    <X className="h-3.5 w-3.5" /> Stimmt nicht
                  </button>
                  <button className="flex items-center gap-1 rounded-full border-2 border-[#C4877F]/30 px-4 py-1.5 text-xs font-semibold text-[#C4877F]">
                    <Check className="h-3.5 w-3.5" /> Stimmt
                  </button>
                </div>
              </div>
              <div className="flex justify-center gap-1">
                <div className="h-1.5 w-6 rounded-full" style={{ backgroundColor: SAGE }} />
                <div className="h-1.5 w-6 rounded-full" style={{ backgroundColor: SAGE }} />
                <div className="h-1.5 w-6 rounded-full" style={{ backgroundColor: `${SAGE}40` }} />
                <div className="h-1.5 w-6 rounded-full bg-[#E5DFD6]" />
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Matching */}
        <VariantCard label="4" name="Zuordnung (matching)" description="Links ↔ Rechts verbinden, gefundene Paare oben">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Ordne die Definitionen den Organisationen zu:</div>
            {/* Matched pair — floats to top with green border */}
            <div className="mb-2 flex items-stretch gap-2 rounded-xl border-2 border-[#C4877F]/30 bg-[#C4877F]/5 p-2">
              <div className="flex flex-1 items-center justify-center rounded-lg bg-[#C4877F]/10 p-2 text-center text-sm font-semibold text-[#C4877F]">
                ICN
              </div>
              <div className="flex items-center text-[#C4877F]"><Check className="h-4 w-4" /></div>
              <div className="flex flex-1 items-center justify-center rounded-lg bg-[#C4877F]/10 p-2 text-center text-xs font-medium text-[#C4877F]">
                International Council of Nurses
              </div>
            </div>
            {/* Unmatched — equal height boxes side by side */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                {[
                  { text: "WHO", selected: true },
                  { text: "DBfK", selected: false },
                ].map((item, i) => (
                  <div key={i} className={`flex h-14 items-center justify-center rounded-xl border-2 text-center text-sm font-medium transition-all ${
                    item.selected ? "border-[#BFA48E] bg-[#BFA48E]/10 text-[#BFA48E] ring-2 ring-[#BFA48E]/40" : "border-[#E5DFD6] hover:border-[#A58B71]"
                  }`}>
                    {item.text}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {[
                  { text: "Weltgesundheits-organisation", selected: false },
                  { text: "Dt. Berufsverband für Pflegeberufe", selected: false },
                ].map((item, i) => (
                  <div key={i} className={`flex h-14 items-center justify-center rounded-xl border-2 px-2 text-center text-[11px] font-medium leading-tight transition-all ${
                    item.selected ? "border-[#BFA48E] bg-[#BFA48E]/10 text-[#BFA48E]" : "border-[#E5DFD6] hover:border-[#A58B71]"
                  }`}>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2 text-center text-[10px] text-[#86868b]">1/3 Paare gefunden</div>
          </div>
        </VariantCard>

        {/* Sorting */}
        <VariantCard label="5" name="Sortierung (sorting)" description="Halten & ziehen zum Verschieben">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Sortiere die 6 Schritte des Pflegeprozesses:</div>
            <div className="space-y-1.5">
              {["Informationssammlung", "Problemerkennung", "Zielsetzung", "Planung", "Durchführung", "Evaluation"].map((item, i) => (
                <div key={i} className={`flex items-center gap-2 rounded-xl border bg-white p-2.5 transition-all ${
                  i === 2 ? "border-[#BFA48E] bg-[#BFA48E]/5 shadow-md scale-[1.02] -translate-y-0.5" : "border-[#E5DFD6]"
                }`}>
                  <GripVertical className="h-4 w-4 shrink-0 cursor-grab text-[#b0b0b5] active:text-[#6e6e73]" />
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white" style={{ backgroundColor: SAGE }}>
                    {i + 1}
                  </div>
                  <span className="text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 text-center text-[10px] text-[#86868b]">≡ Halten & ziehen zum Sortieren</div>
          </div>
        </VariantCard>

        {/* Categorize */}
        <VariantCard label="6" name="Kategorisierung (categorize)" description="Begriffe in Gruppen einordnen, Drag & Drop">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Ordne den Kategorien zu:</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border-2 border-dashed p-3" style={{ borderColor: SAGE }}>
                <div className="mb-2 text-center text-xs font-bold" style={{ color: SAGE }}>Grundpflege</div>
                <div className="space-y-1">
                  {["Körperpflege", "Ernährung"].map((item, i) => (
                    <div key={i} className="rounded-lg bg-[#C4877F]/10 px-2 py-1.5 text-center text-[11px] font-medium">{item}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border-2 border-dashed p-3" style={{ borderColor: RUST }}>
                <div className="mb-2 text-center text-xs font-bold" style={{ color: RUST }}>Behandlungspflege</div>
                <div className="space-y-1">
                  {["Injektionen", "Wundversorgung"].map((item, i) => (
                    <div key={i} className="rounded-lg bg-[#AE6965]/10 px-2 py-1.5 text-center text-[11px] font-medium">{item}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              {["Mobilisation", "Blutdruck messen"].map((item, i) => (
                <div key={i} className="cursor-grab rounded-lg border border-[#E5DFD6] bg-white px-3 py-1.5 text-[11px] font-medium shadow-sm">{item}</div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* Memory */}
        <VariantCard label="7" name="Memory (memory)" description="Paare finden — Fachbegriff + Definition">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Finde die passenden Paare:</div>
            <div className="grid grid-cols-4 gap-1.5">
              {["Dekubitus", "Druckgeschwür", "?", "Thrombose", "?", "?", "Kontraktur", "?"].map((text, i) => (
                <div
                  key={i}
                  className={`flex h-16 items-center justify-center rounded-xl text-center text-[10px] font-medium transition-all break-words hyphens-auto px-1 ${
                    text === "?"
                      ? "border-2 border-[#E5DFD6] bg-[#E5DFD6]/30 text-[#86868b]"
                      : i < 2
                        ? "border-2 border-[#C4877F]/30 bg-[#C4877F]/5 text-[#C4877F]"
                        : "border-2 border-[#BFA48E] bg-[#BFA48E]/10 text-[#BFA48E]"
                  }`}
                >
                  {text}
                </div>
              ))}
            </div>
            <div className="mt-2 text-center text-[10px] text-[#86868b]">3 Züge · 1/4 Paare gefunden</div>
          </div>
        </VariantCard>

        {/* Crossword */}
        <VariantCard label="8" name="Kreuzworträtsel (crossword)" description="Fachbegriffe per Hinweis finden">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Pflege-Kreuzworträtsel:</div>
            <div className="flex flex-col items-center gap-3">
              {/* Grid — real crossword layout */}
              <div className="inline-grid gap-[1px] rounded-lg bg-[#c8c5be] p-[1px]" style={{ gridTemplateColumns: "repeat(7, 28px)" }}>
                {(() => {
                  // P F L E G E (row 0, cols 1-6) — horizontal "PFLEGE"
                  // R           (row 1, col 5)
                  // O           (row 2, col 5)
                  // Z           (row 3, col 5)
                  // E           (row 4, col 5)
                  // S           (row 5, col 5)
                  // S           (row 6, col 5)
                  const cells: Record<string, { letter: string; number?: string; filled: boolean; active?: boolean }> = {}
                  // horizontal: PFLEGE at row 0
                  const pflege = "PFLEGE"
                  for (let c = 0; c < 6; c++) {
                    cells[`0-${c + 1}`] = { letter: pflege[c], filled: true, number: c === 0 ? "1" : undefined }
                  }
                  // vertical: PROZESS at col 5
                  const prozess = "PROZESS"
                  for (let r = 0; r < 7; r++) {
                    const key = `${r}-5`
                    if (cells[key]) {
                      cells[key].number = cells[key].number || (r === 0 ? "2" : undefined)
                    } else {
                      cells[key] = { letter: prozess[r], filled: true, number: r === 0 ? "2" : undefined }
                    }
                  }
                  // mark some as user-entered (green), some empty (cursor)
                  const entered = ["0-1", "0-2", "0-3", "0-4", "0-5", "0-6", "1-5", "2-5"]
                  const cursor = "3-5"
                  const rows = 7
                  const cols = 7
                  const result = []
                  for (let r = 0; r < rows; r++) {
                    for (let c = 0; c < cols; c++) {
                      const key = `${r}-${c}`
                      const cell = cells[key]
                      if (cell) {
                        const isEntered = entered.includes(key)
                        const isCursor = key === cursor
                        result.push(
                          <div key={key} className={`relative flex h-7 w-7 items-center justify-center text-[11px] font-bold ${
                            isCursor ? "bg-[#BFA48E]/15 ring-2 ring-[#BFA48E]" : isEntered ? "bg-white" : "bg-[#fafaf9]"
                          }`} style={{ color: isEntered ? SAGE : "#86868b" }}>
                            {cell.number && <span className="absolute left-0.5 top-0 text-[7px] font-semibold text-[#86868b]">{cell.number}</span>}
                            {isEntered ? cell.letter : isCursor ? "▌" : ""}
                          </div>
                        )
                      } else {
                        result.push(<div key={key} className="h-7 w-7 bg-[#c8c5be]" />)
                      }
                    }
                  }
                  return result
                })()}
              </div>
              {/* Hints */}
              <div className="w-full rounded-xl bg-[#fafaf9] border border-[#E5DFD6] p-3 text-[11px]">
                <div className="mb-1.5 font-bold text-[#1d1d1f]">Hinweise:</div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[#6e6e73]">
                  <div><span className="font-semibold text-[#1d1d1f]">1 →</span> Beruf im Gesundheitswesen (6)</div>
                  <div><span className="font-semibold text-[#1d1d1f]">2 ↓</span> Systematische Vorgehensweise (7)</div>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 12: STEP-TYPEN — TEXT & MEDIEN
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="medien" title="Step-Typen: Text & Medien" subtitle="Erklärungen, Dialoge, Karteikarten und mehr" />

        {/* Text */}
        <VariantCard label="9" name="Erklärungs-Text (text)" description="Carousel-Cards, SVG-Bilder, DisplayFormat">
          <div className="py-5">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wider" style={{ color: OAK }}>Thema: Pflegeprozess</div>
            <h3 className="mb-3 text-base font-bold">Die 6 Schritte des Pflegeprozesses</h3>
            <div className="mb-3 rounded-xl bg-[#E5DFD6]/20 p-4 text-sm leading-relaxed">
              Der Pflegeprozess nach <strong>Fiechter & Meier</strong> gliedert sich in 6 Schritte: Von der Informationssammlung über die Planung bis zur Evaluation.
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                <div className="h-1.5 w-6 rounded-full" style={{ backgroundColor: SAGE }} />
                <div className="h-1.5 w-6 rounded-full bg-[#E5DFD6]" />
                <div className="h-1.5 w-6 rounded-full bg-[#E5DFD6]" />
              </div>
              <span className="text-[10px] text-[#86868b]">Karte 1/3 — wischen →</span>
            </div>
          </div>
        </VariantCard>

        {/* Dialog */}
        <VariantCard label="10" name="Patienten-Dialog (dialog)" description="Chat-UI, Antwortoptionen, Patienten-Reaktion">
          <div className="py-5">
            <div className="mb-3 space-y-2">
              <div className="flex gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#AE6965]/15 text-[10px] font-bold" style={{ color: RUST }}>P</div>
                <div className="rounded-2xl rounded-tl-sm bg-[#E5DFD6]/40 px-3 py-2 text-xs">Schwester, mir ist schwindelig und ich fühle mich schwach...</div>
              </div>
              <div className="flex justify-end gap-2">
                <div className="rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-white" style={{ backgroundColor: SAGE }}>Ich messe jetzt Ihren Blutdruck und Puls.</div>
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C4877F]/15 text-[10px] font-bold" style={{ color: SAGE }}>Du</div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="text-[10px] font-semibold" style={{ color: OAK }}>Wie reagierst du?</div>
              {["Vitaldaten erfassen", "Arzt informieren", "Abwarten"].map((opt, i) => (
                <button key={i} className={`w-full rounded-xl border p-2.5 text-left text-xs transition-all ${i === 0 ? "border-[#BFA48E] bg-[#BFA48E]/10" : "border-[#E5DFD6] hover:bg-[#E5DFD6]/20"}`}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* Flipcard */}
        <VariantCard label="11" name="Karteikarten (flipcard)" description="Vorderseite → antippen → Rückseite">
          <div className="py-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex min-h-[100px] flex-col items-center justify-center rounded-2xl border-2 border-[#E5DFD6] bg-white p-4 text-center shadow-sm">
                <div className="text-xs font-bold" style={{ color: SAGE }}>Dekubitus</div>
                <div className="mt-1 text-[10px] text-[#86868b]">Antippen zum Umdrehen</div>
              </div>
              <div className="flex min-h-[100px] flex-col items-center justify-center rounded-2xl border-2 p-4 text-center shadow-sm" style={{ borderColor: SAGE, backgroundColor: `${SAGE}08` }}>
                <div className="text-[10px] font-semibold" style={{ color: SAGE }}>Definition:</div>
                <div className="mt-1 text-[11px] leading-relaxed">Durch Druck verursachte Schädigung der Haut und des darunterliegenden Gewebes</div>
              </div>
            </div>
            <div className="mt-2 text-center text-[10px] text-[#86868b]">2/6 Karten umgedreht</div>
          </div>
        </VariantCard>

        {/* Reveal */}
        <VariantCard label="12" name="Aufdecken (reveal)" description="Verdeckte Karten nacheinander aufdecken">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Was weißt du über den ICN-Ethikkodex?</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { title: "Pflege & Mensch", revealed: true, text: "Grundbedürfnisse respektieren" },
                { title: "Pflege & Praxis", revealed: true, text: "Evidenzbasiert handeln" },
                { title: "Pflege & Beruf", revealed: false },
                { title: "Pflege & Kollegen", revealed: false },
              ].map((card, i) => (
                <div key={i} className={`rounded-xl border p-3 text-center transition-all ${card.revealed ? "border-[#E5DFD6] bg-white" : "border-dashed border-[#E5DFD6] bg-[#E5DFD6]/20"}`}>
                  <div className="text-[10px] font-bold" style={{ color: card.revealed ? SAGE : "#86868b" }}>{card.title}</div>
                  {card.revealed ? (
                    <div className="mt-1 text-[11px]">{card.text}</div>
                  ) : (
                    <div className="mt-1 text-[11px] text-[#86868b]">Antippen</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* Timeline */}
        <VariantCard label="13" name="Zeitstrahl (timeline)" description="Chronologische Darstellung von Ereignissen">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Geschichte der Pflege:</div>
            <div className="relative ml-4 border-l-2 border-[#E5DFD6] pl-6 space-y-4">
              {[
                { year: "1860", text: "Nightingale gründet erste Pflegeschule", color: SAGE },
                { year: "1953", text: "ICN veröffentlicht Ethikkodex", color: OAK },
                { year: "2004", text: "Pflegeweiterentwicklungsgesetz", color: RUST },
                { year: "2020", text: "PflBG — Generalistische Ausbildung", color: ROSE },
              ].map((evt, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-white" style={{ backgroundColor: evt.color }} />
                  <div className="text-[10px] font-bold" style={{ color: evt.color }}>{evt.year}</div>
                  <div className="text-xs">{evt.text}</div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* Comparison */}
        <VariantCard label="14" name="Vergleich (comparison)" description="Zwei Konzepte gegenüberstellen">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">ICN-Definition vs. WHO-Definition</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl p-3" style={{ backgroundColor: `${SAGE}10` }}>
                <div className="mb-1 text-xs font-bold" style={{ color: SAGE }}>ICN</div>
                <p className="text-[11px] leading-relaxed">Eigenständige Versorgung und Betreuung von Menschen aller Altersgruppen</p>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: `${RUST}10` }}>
                <div className="mb-1 text-xs font-bold" style={{ color: RUST }}>WHO</div>
                <p className="text-[11px] leading-relaxed">Umfasst Förderung der Gesundheit, Verhütung von Krankheiten</p>
              </div>
            </div>
            <div className="mt-2 rounded-xl bg-[#E5DFD6]/20 p-2 text-center text-[10px]">
              <strong>Gemeinsamkeit:</strong> Beide betonen ganzheitliche Versorgung
            </div>
          </div>
        </VariantCard>

        {/* Diagram */}
        <VariantCard label="15" name="Diagramm (diagram)" description="Flowchart, Mindmap, Kreislauf als SVG">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Pflegeprozess-Kreislauf:</div>
            <div className="flex items-center justify-center py-2">
              <svg width="200" height="200" viewBox="0 0 200 200">
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const labels = ["Info", "Problem", "Ziel", "Plan", "Aktion", "Eval"];
                  const x = 100 + 70 * Math.cos((angle - 90) * Math.PI / 180);
                  const y = 100 + 70 * Math.sin((angle - 90) * Math.PI / 180);
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r="22" fill={`${SAGE}15`} stroke={SAGE} strokeWidth="1.5" />
                      <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle" fontSize="9" fontWeight="600" fill={SAGE} fontFamily="Poppins, sans-serif">{labels[i]}</text>
                    </g>
                  );
                })}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const nextAngle = (angle + 60) % 360;
                  const x1 = 100 + 48 * Math.cos((angle - 90) * Math.PI / 180);
                  const y1 = 100 + 48 * Math.sin((angle - 90) * Math.PI / 180);
                  const x2 = 100 + 48 * Math.cos((nextAngle - 90) * Math.PI / 180);
                  const y2 = 100 + 48 * Math.sin((nextAngle - 90) * Math.PI / 180);
                  return <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={SAGE} strokeWidth="1" opacity="0.3" />;
                })}
              </svg>
            </div>
          </div>
        </VariantCard>

        {/* Audio */}
        <VariantCard label="16" name="Audio / TTS (audio)" description="Fachbegriff vorlesen und nachsprechen">
          <div className="py-5">
            <div className="flex items-center gap-4 rounded-xl border border-[#E5DFD6] bg-[#fafaf9] p-4">
              <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-sm" style={{ backgroundColor: SAGE }}>
                <Volume2 className="h-5 w-5 text-white" />
              </button>
              <div className="flex-1">
                <div className="text-sm font-bold">Dekubitus</div>
                <div className="text-[11px] text-[#86868b]">[de-ˈkuː-bi-tʊs] — Druckgeschwür</div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#E5DFD6]">
                  <div className="h-full w-[60%] rounded-full" style={{ backgroundColor: SAGE }} />
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 13: STEP-TYPEN — REFLEXION & INPUT
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="input" title="Step-Typen: Reflexion & Input" subtitle="Selbsteinschätzung, Freitext, Timer und mehr" />

        {/* Reflection */}
        <VariantCard label="17" name="Reflexion (reflection)" description="Offene Frage, Satzanfänge als Hilfe">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Reflektiere dein Lernerlebnis:</div>
            <div className="rounded-xl bg-[#E5DFD6]/20 p-4">
              <div className="mb-2 text-xs font-semibold" style={{ color: OAK }}>Was hat dich überrascht?</div>
              <div className="rounded-lg border border-[#E5DFD6] bg-white p-3 text-xs text-[#86868b]" style={{ minHeight: 60 }}>
                Ich war überrascht, dass...
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Ich war überrascht, dass...", "Mir ist aufgefallen...", "Das wusste ich noch nicht:"].map((s, i) => (
                  <span key={i} className="rounded-full border border-[#E5DFD6] bg-white px-2.5 py-1 text-[10px] font-medium">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Confidence / Selfrating */}
        <VariantCard label="18" name="Selbsteinschätzung (confidence)" description="Aussagen mit Emoji-Skala bewerten">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Wie sicher fühlst du dich?</div>
            <div className="space-y-3">
              {[
                "Ich kann den Pflegeprozess in 6 Schritten erklären.",
                "Ich kenne den Unterschied zwischen ICN und WHO.",
                "Ich kann einen Pflegebericht schreiben.",
              ].map((statement, i) => (
                <div key={i} className="rounded-xl border border-[#E5DFD6] p-3">
                  <div className="mb-2 text-xs">{statement}</div>
                  <div className="flex gap-2">
                    {["😟", "😐", "🙂", "😊", "🤩"].map((emoji, j) => (
                      <button key={j} className={`flex h-8 w-8 items-center justify-center rounded-full text-base transition-all ${j === 3 && i === 0 ? "bg-[#C4877F]/15 ring-2 ring-[#C4877F]" : "hover:bg-[#E5DFD6]/50"}`}>
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* Slider */}
        <VariantCard label="19" name="Slider (slider)" description="Schieberegler für Einschätzung">
          <div className="py-5">
            <div className="mb-4 text-sm font-semibold">Wie wichtig ist dir Teamarbeit in der Pflege?</div>
            <div className="mx-auto max-w-sm">
              <div className="relative mb-1 h-2 rounded-full bg-[#E5DFD6]">
                <div className="absolute left-0 h-full w-[70%] rounded-full" style={{ backgroundColor: SAGE }} />
                <div className="absolute left-[70%] top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: SAGE }} />
              </div>
              <div className="flex justify-between text-[10px] text-[#86868b]">
                <span>Weniger wichtig</span>
                <span className="font-semibold" style={{ color: SAGE }}>70%</span>
                <span>Sehr wichtig</span>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Freetext */}
        <VariantCard label="20" name="Freitext (freetext)" description="Offene Antwort, KI bewertet">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Erkläre den Begriff &quot;Pflegeprozess&quot; in eigenen Worten:</div>
            <div className="rounded-xl border border-[#E5DFD6] bg-[#fafaf9] p-4">
              <textarea
                className="w-full resize-none rounded-lg border border-[#E5DFD6] bg-white p-3 text-xs"
                rows={3}
                placeholder="Deine Antwort hier..."
                defaultValue="Der Pflegeprozess ist ein systematisches Vorgehen, um Patienten zu versorgen. Er besteht aus mehreren Schritten..."
                readOnly
              />
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] text-[#86868b]">Min. 20 Wörter · KI-Feedback</span>
                <button className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white" style={{ backgroundColor: SAGE }}>Absenden</button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Branching */}
        <VariantCard label="21" name="Branching Scenario (branching)" description="Entscheidungsbaum mit Konsequenzen">
          <div className="py-5">
            <div className="rounded-xl bg-[#E5DFD6]/20 p-4">
              <div className="mb-1 text-[10px] font-bold uppercase tracking-wider" style={{ color: RUST }}>Fallbeispiel</div>
              <p className="mb-3 text-xs leading-relaxed">
                <strong>Frau Schmidt, 82 Jahre</strong>, wurde gestern operiert. Sie klingelt und sagt, ihr sei schwindelig. Was tust du zuerst?
              </p>
              <div className="space-y-1.5">
                {[
                  { text: "Vitaldaten messen", icon: "🩺" },
                  { text: "Arzt sofort rufen", icon: "📞" },
                  { text: "Patientin beruhigen und hinlegen", icon: "🛏️" },
                ].map((opt, i) => (
                  <button key={i} className="flex w-full items-center gap-2 rounded-xl border border-[#E5DFD6] bg-white p-2.5 text-left text-xs font-medium transition-all hover:bg-[#E5DFD6]/20">
                    <span className="text-base">{opt.icon}</span>
                    {opt.text}
                    <ChevronRight className="ml-auto h-3.5 w-3.5 text-[#86868b]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Timer */}
        <VariantCard label="22" name="Timer-Challenge (timer)" description="Zeitlimit für schnelle Antworten">
          <div className="py-5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-semibold">Schnellrunde!</div>
              <div className="flex items-center gap-1.5 rounded-full px-3 py-1" style={{ backgroundColor: `${RUST}15` }}>
                <Clock className="h-3.5 w-3.5" style={{ color: RUST }} />
                <span className="text-xs font-bold" style={{ color: RUST }}>0:42</span>
              </div>
            </div>
            <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-[#E5DFD6]">
              <div className="h-full w-[70%] rounded-full transition-all" style={{ backgroundColor: RUST }} />
            </div>
            <div className="rounded-xl border border-[#E5DFD6] bg-[#fafaf9] p-4 text-center">
              <div className="mb-3 text-sm font-semibold">Wie viele Schritte hat der Pflegeprozess?</div>
              <div className="flex justify-center gap-2">
                {["4", "5", "6", "8"].map((n) => (
                  <button key={n} className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#E5DFD6] text-sm font-bold transition-all hover:border-[#C4877F] hover:bg-[#C4877F]/5">
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Summary */}
        <VariantCard label="23" name="Zusammenfassung (summary)" description="Session-Rückblick mit Ergebnissen">
          <div className="py-5">
            <div className="rounded-2xl bg-gradient-to-b from-[#C4877F]/10 to-transparent p-5 text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${SAGE}15` }}>
                <Trophy className="h-6 w-6" style={{ color: SAGE }} />
              </div>
              <div className="mb-1 text-base font-bold">Session 1 geschafft!</div>
              <div className="mb-3 text-xs text-[#86868b]">&quot;Was ist Pflege?&quot; — 22 Steps abgeschlossen</div>
              <div className="flex justify-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold" style={{ color: SAGE }}>87%</div>
                  <div className="text-[10px] text-[#86868b]">Richtig</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold" style={{ color: OAK }}>+120 XP</div>
                  <div className="text-[10px] text-[#86868b]">Verdient</div>
                </div>
              </div>
              <div className="rounded-xl bg-white/80 p-3 text-left text-xs space-y-1">
                <div className="flex items-center gap-2"><Check className="h-3 w-3 text-[#C4877F]" /> Pflegeprozess — verstanden</div>
                <div className="flex items-center gap-2"><Check className="h-3 w-3 text-[#C4877F]" /> ICN-Ethikkodex — sicher</div>
                <div className="flex items-center gap-2"><AlertCircle className="h-3 w-3" style={{ color: RUST }} /> WHO-Definition — wiederholen</div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Selfrating */}
        <VariantCard label="24" name="Selbstbewertung (selfrating)" description="Eigene Leistung einschätzen">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Wie bewertest du dein Verständnis?</div>
            <div className="space-y-3">
              {[
                { text: "Grundlagen der Pflege", rating: 4 },
                { text: "Pflegeprozess", rating: 3 },
                { text: "Ethische Grundlagen", rating: 2 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-36 text-xs">{item.text}</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4"
                        style={{ color: star <= item.rating ? OAK : "#E5DFD6" }}
                        fill={star <= item.rating ? OAK : "none"}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 14: STEP-TYPEN — EXTRA (nicht in LE-01)
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="extra" title="Step-Typen: Extra" subtitle="7 weitere Renderer die noch nicht in LE-01 sind" />

        {/* Highlight */}
        <VariantCard label="25" name="Fehler markieren (highlight)" description="Fehlerhafte Textstellen antippen">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Finde die Fehler im Pflegebericht:</div>
            <div className="rounded-xl bg-[#fafaf9] border border-[#E5DFD6] p-4 text-xs leading-relaxed">
              <span>Patient wurde </span>
              <span className="cursor-pointer rounded bg-[#A06B63]/10 px-0.5 text-[#A06B63] line-through decoration-[#A06B63]">
                sitzend
              </span>
              <span> gelagert zur Dekubitusprophylaxe. </span>
              <span>Die Vitalzeichen waren </span>
              <span className="cursor-pointer rounded bg-[#E5DFD6]/50 px-0.5 hover:bg-[#A06B63]/10">
                unauffällig
              </span>
              <span>. Die </span>
              <span className="cursor-pointer rounded bg-[#A06B63]/10 px-0.5 text-[#A06B63] line-through decoration-[#A06B63]">
                Hautrötung
              </span>
              <span> am Steißbein ist ein Dekubitus Grad </span>
              <span className="cursor-pointer rounded bg-[#E5DFD6]/50 px-0.5 hover:bg-[#A06B63]/10">
                1
              </span>
              <span>.</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-[10px] text-[#86868b]">
              <span className="inline-block h-2.5 w-2.5 rounded bg-[#A06B63]/10 border border-[#A06B63]/30" /> Fehler gefunden
              <span className="inline-block h-2.5 w-2.5 rounded bg-[#E5DFD6]/50 border border-[#E5DFD6]" /> Noch prüfen
            </div>
          </div>
        </VariantCard>

        {/* Hotspot */}
        <VariantCard label="26" name="Hotspot-Bild (hotspot)" description="Bereiche auf einem Bild antippen">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Wo entstehen Dekubitus am häufigsten?</div>
            <div className="relative mx-auto w-48 rounded-xl border border-[#E5DFD6] bg-[#fafaf9] p-2">
              {/* Simplified body silhouette */}
              <svg viewBox="0 0 120 200" className="mx-auto h-48 w-auto">
                {/* Body outline */}
                <ellipse cx="60" cy="25" rx="18" ry="20" fill={`${BONE}`} stroke={SAGE} strokeWidth="1" />
                <rect x="40" y="45" width="40" height="60" rx="8" fill={`${BONE}`} stroke={SAGE} strokeWidth="1" />
                <rect x="25" y="50" width="16" height="45" rx="6" fill={`${BONE}`} stroke={SAGE} strokeWidth="1" />
                <rect x="79" y="50" width="16" height="45" rx="6" fill={`${BONE}`} stroke={SAGE} strokeWidth="1" />
                <rect x="42" y="105" width="16" height="55" rx="6" fill={`${BONE}`} stroke={SAGE} strokeWidth="1" />
                <rect x="62" y="105" width="16" height="55" rx="6" fill={`${BONE}`} stroke={SAGE} strokeWidth="1" />
                {/* Hotspot markers */}
                <circle cx="60" cy="100" r="8" fill={`${RUST}30`} stroke={RUST} strokeWidth="1.5">
                  <animate attributeName="r" values="7;9;7" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="60" y="103" textAnchor="middle" fontSize="7" fontWeight="600" fill={RUST}>✓</text>
                <circle cx="50" cy="160" r="6" fill={`${SAGE}30`} stroke={SAGE} strokeWidth="1.5" strokeDasharray="3,2" />
                <circle cx="60" cy="30" r="6" fill={`${SAGE}30`} stroke={SAGE} strokeWidth="1.5" strokeDasharray="3,2" />
              </svg>
              <div className="mt-1 text-center text-[10px] text-[#86868b]">1/3 Stellen gefunden</div>
            </div>
          </div>
        </VariantCard>

        {/* Cloze */}
        <VariantCard label="27" name="Lückentext mit Wortpool (cloze)" description="Wörter aus Pool in Lücken einsetzen">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Fülle die Lücken aus dem Wortpool:</div>
            <div className="rounded-xl bg-[#fafaf9] border border-[#E5DFD6] p-4 text-xs leading-loose">
              Der Pflegeprozess nach{" "}
              <span className="inline-flex min-w-[80px] items-center justify-center rounded-lg border-2 border-[#C4877F]/30 bg-[#C4877F]/5 px-2 py-0.5 text-[11px] font-semibold text-[#C4877F]">
                Fiechter & Meier
              </span>{" "}
              besteht aus{" "}
              <span className="inline-flex min-w-[30px] items-center justify-center rounded-lg border-2 border-dashed border-[#AE6965] bg-[#AE6965]/5 px-2 py-0.5 text-[11px] font-semibold" style={{ color: RUST }}>
                ???
              </span>{" "}
              Schritten. Der erste Schritt ist die{" "}
              <span className="inline-flex min-w-[80px] items-center justify-center rounded-lg border-2 border-dashed border-[#AE6965] bg-[#AE6965]/5 px-2 py-0.5 text-[11px] font-semibold" style={{ color: RUST }}>
                ???
              </span>.
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["sechs", "Informationssammlung", "Henderson", "vier"].map((word, i) => (
                <span
                  key={i}
                  className={`cursor-grab rounded-lg border px-3 py-1.5 text-[11px] font-medium shadow-sm transition-all ${
                    i === 0 || i === 1
                      ? "border-[#E5DFD6] bg-white hover:shadow-md"
                      : "border-[#E5DFD6]/50 bg-[#E5DFD6]/20 text-[#86868b]"
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* Sequencing */}
        <VariantCard label="28" name="Sequenzierung (sequencing)" description="Drag & Drop — Schritte in richtige Reihenfolge">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Bringe die Pflegeprozess-Schritte in die richtige Reihenfolge:</div>
            <div className="space-y-1.5">
              {[
                { text: "Informationssammlung", pos: 1, correct: true },
                { text: "Zielsetzung", pos: 2, correct: false },
                { text: "Problemerkennung", pos: 3, correct: false },
                { text: "Planung", pos: 4, correct: true },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 rounded-xl border p-2.5 transition-all ${
                    item.correct ? "border-[#C4877F]/20 bg-[#C4877F]/5" : "border-[#AE6965]/30 bg-[#AE6965]/5"
                  }`}
                >
                  <GripVertical className="h-4 w-4 shrink-0 cursor-grab text-[#86868b]" />
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white"
                    style={{ backgroundColor: item.correct ? SAGE : RUST }}>
                    {item.pos}
                  </div>
                  <span className="text-xs font-medium">{item.text}</span>
                  {!item.correct && (
                    <span className="ml-auto text-[10px]" style={{ color: RUST }}>↕ tauschen</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* Fill-In */}
        <VariantCard label="29" name="Lücke mit Auswahl (fillin)" description="Multiple-Choice für eine Lücke im Satz">
          <div className="py-5">
            <div className="rounded-xl bg-[#E5DFD6]/20 p-4">
              <div className="text-xs leading-relaxed">
                Die Pflegeausbildung in Deutschland dauert seit dem PflBG 2020 insgesamt{" "}
                <span className="inline-flex items-center gap-1 rounded-lg border-2 border-[#C4877F] bg-white px-2 py-0.5">
                  <span className="text-[11px] font-bold" style={{ color: SAGE }}>3 Jahre</span>
                  <Check className="h-3 w-3 text-[#C4877F]" />
                </span>{" "}
                und ist als{" "}
                <span className="inline-flex items-center rounded-lg border-2 border-dashed border-[#86868b] bg-white px-2 py-0.5 text-[11px] font-medium text-[#86868b]">
                  ▼ wählen
                </span>{" "}
                Ausbildung konzipiert.
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["generalistische", "duale", "schulische", "akademische"].map((opt, i) => (
                  <button key={i} className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-all ${
                    i === 0
                      ? "border-[#C4877F]/50 bg-[#C4877F]/10 font-semibold"
                      : "border-[#E5DFD6] hover:bg-[#E5DFD6]/30"
                  }`} style={i === 0 ? { color: SAGE } : {}}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* Label Image */}
        <VariantCard label="30" name="Bild beschriften (labelImage)" description="Regionen auf einem Bild per Drag oder Auswahl beschriften">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Beschrifte die Dekubitus-Prädilektionsstellen:</div>
            <div className="relative mx-auto w-56 rounded-xl border border-[#E5DFD6] bg-[#fafaf9] p-3">
              <svg viewBox="0 0 160 120" className="mx-auto h-32 w-auto">
                {/* Simplified bed/patient side view */}
                <rect x="10" y="60" width="140" height="10" rx="3" fill={`${BONE}`} stroke={SAGE} strokeWidth="0.5" />
                <ellipse cx="30" cy="45" rx="14" ry="12" fill={`${BONE}`} stroke={SAGE} strokeWidth="0.8" />
                <path d="M44 50 Q80 55 130 55" stroke={SAGE} strokeWidth="6" fill="none" strokeLinecap="round" />
                {/* Labels */}
                <g>
                  <line x1="30" y1="33" x2="30" y2="18" stroke={SAGE} strokeWidth="0.8" />
                  <rect x="10" y="8" width="42" height="12" rx="3" fill={SAGE} />
                  <text x="31" y="16" textAnchor="middle" fontSize="7" fill="white" fontWeight="600" fontFamily="Poppins">Hinterkopf</text>
                </g>
                <g>
                  <line x1="80" y1="49" x2="80" y2="30" stroke={RUST} strokeWidth="0.8" strokeDasharray="2,2" />
                  <rect x="60" y="20" width="40" height="12" rx="3" fill="white" stroke={RUST} strokeWidth="1" strokeDasharray="3,2" />
                  <text x="80" y="28" textAnchor="middle" fontSize="7" fill={RUST} fontWeight="600" fontFamily="Poppins">??? Drop</text>
                </g>
                <g>
                  <line x1="120" y1="49" x2="120" y2="80" stroke={SAGE} strokeWidth="0.8" />
                  <rect x="95" y="80" width="50" height="12" rx="3" fill={SAGE} />
                  <text x="120" y="88" textAnchor="middle" fontSize="7" fill="white" fontWeight="600" fontFamily="Poppins">Ferse ✓</text>
                </g>
              </svg>
            </div>
            <div className="mt-2 flex justify-center gap-1.5">
              {["Steißbein", "Schulterblatt", "Knöchel"].map((label, i) => (
                <span key={i} className="cursor-grab rounded-lg border border-[#E5DFD6] bg-white px-2.5 py-1 text-[10px] font-medium shadow-sm">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* Speech */}
        <VariantCard label="31" name="Sprechübung (speech)" description="Whisper STT — nachsprechen oder erklären">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Sprich den Fachbegriff laut aus:</div>
            <div className="mx-auto max-w-sm rounded-2xl border border-[#E5DFD6] bg-gradient-to-b from-[#fafaf9] to-white p-5 text-center">
              <div className="mb-1 text-lg font-bold">Dekubitusprophylaxe</div>
              <div className="mb-4 text-[11px] text-[#86868b]">[de-ˌkuː-bi-tʊs-pro-fy-ˈla-ksə]</div>
              <button className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95" style={{ backgroundColor: RUST }}>
                <Mic className="h-6 w-6 text-white" />
              </button>
              <div className="mb-3 text-xs font-medium" style={{ color: RUST }}>Zum Sprechen tippen</div>
              <div className="rounded-xl bg-[#C4877F]/5 border border-[#C4877F]/20 p-3">
                <div className="mb-1 flex items-center justify-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#C4877F]" />
                  <span className="text-xs font-semibold text-[#C4877F]">92% Übereinstimmung</span>
                </div>
                <div className="text-[10px] text-[#C4877F]">Erkannt: &quot;Dekubitusprophylaxe&quot; — Super ausgesprochen!</div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 15: IDEEN-LABOR — Neue UI-Möglichkeiten
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="labor" title="Ideen-Labor" subtitle="Neue UI-Konzepte die wir noch nicht haben — Inspiration für die Zukunft" />

        {/* 1. GitHub-Style Lernkalender */}
        <VariantCard label="L1" name="Lernkalender (Heatmap)" description="GitHub-Contribution-Style — Aktivität über Wochen">
          <div className="py-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-semibold">Lernaktivität der letzten 12 Wochen</div>
              <div className="text-[10px] text-[#86868b]">127 Stunden gelernt</div>
            </div>
            <div className="flex gap-[3px]">
              {Array.from({ length: 12 }).map((_, week) => (
                <div key={week} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, day) => {
                    const intensity = Math.random()
                    const bg = intensity > 0.8 ? SAGE : intensity > 0.5 ? `${SAGE}80` : intensity > 0.2 ? `${SAGE}30` : `${SAGE}10`
                    return <div key={day} className="h-3 w-3 rounded-[2px]" style={{ backgroundColor: bg }} />
                  })}
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-1 text-[9px] text-[#86868b]">
              Weniger <div className="h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: `${SAGE}10` }} />
              <div className="h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: `${SAGE}30` }} />
              <div className="h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: `${SAGE}80` }} />
              <div className="h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: SAGE }} /> Mehr
            </div>
          </div>
        </VariantCard>

        {/* 2. Radiale Kompetenz-Spinne */}
        <VariantCard label="L2" name="Kompetenz-Spinne (Radar)" description="Stärken und Schwächen auf einen Blick">
          <div className="py-5 flex justify-center">
            <svg width="220" height="220" viewBox="0 0 220 220">
              {/* Background rings */}
              {[80, 60, 40, 20].map(r => (
                <polygon key={r} points={[0,1,2,3,4,5].map(i => {
                  const angle = (i * 60 - 90) * Math.PI / 180
                  return `${110 + r * Math.cos(angle)},${110 + r * Math.sin(angle)}`
                }).join(" ")} fill="none" stroke={BONE} strokeWidth="0.8" />
              ))}
              {/* Axis lines */}
              {[0,1,2,3,4,5].map(i => {
                const angle = (i * 60 - 90) * Math.PI / 180
                return <line key={i} x1="110" y1="110" x2={110 + 80 * Math.cos(angle)} y2={110 + 80 * Math.sin(angle)} stroke={BONE} strokeWidth="0.5" />
              })}
              {/* Data polygon */}
              <polygon points={[90,70,55,40,80,65].map((v, i) => {
                const angle = (i * 60 - 90) * Math.PI / 180
                const r = v * 0.8
                return `${110 + r * Math.cos(angle)},${110 + r * Math.sin(angle)}`
              }).join(" ")} fill={`${SAGE}20`} stroke={SAGE} strokeWidth="1.5" />
              {/* Data points */}
              {[90,70,55,40,80,65].map((v, i) => {
                const angle = (i * 60 - 90) * Math.PI / 180
                const r = v * 0.8
                return <circle key={i} cx={110 + r * Math.cos(angle)} cy={110 + r * Math.sin(angle)} r="3" fill={SAGE} />
              })}
              {/* Labels */}
              {["Pflegeprozess", "Kommunikation", "Ethik", "Recht", "Anatomie", "Hygiene"].map((label, i) => {
                const angle = (i * 60 - 90) * Math.PI / 180
                return <text key={i} x={110 + 95 * Math.cos(angle)} y={110 + 95 * Math.sin(angle)} textAnchor="middle" dominantBaseline="middle" fontSize="8" fill="#6e6e73" fontFamily="Poppins">{label}</text>
              })}
            </svg>
          </div>
        </VariantCard>

        {/* 3. Kanban-Lernboard */}
        <VariantCard label="L3" name="Kanban-Board" description="Themen als Karten in Spalten: Offen → Aktiv → Fertig">
          <div className="py-5">
            <div className="grid grid-cols-3 gap-2">
              {[
                { title: "Offen", color: "#86868b", items: ["CE 05 LE 2", "CE 07 LE 1"] },
                { title: "Aktiv", color: OAK, items: ["CE 01 LE 1"] },
                { title: "Fertig", color: SAGE, items: ["CE 01 Intro", "Einstufung"] },
              ].map((col) => (
                <div key={col.title} className="rounded-xl bg-[#fafaf9] p-2">
                  <div className="mb-2 flex items-center gap-1.5 px-1">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: col.color }} />
                    <span className="text-[10px] font-bold">{col.title}</span>
                    <span className="ml-auto text-[10px] text-[#86868b]">{col.items.length}</span>
                  </div>
                  <div className="space-y-1.5">
                    {col.items.map((item) => (
                      <div key={item} className="rounded-lg border border-[#E5DFD6] bg-white p-2 text-[10px] font-medium shadow-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* 4. Wort-Wolke */}
        <VariantCard label="L4" name="Wort-Wolke" description="Fachbegriffe als Tag-Cloud, Größe = Häufigkeit">
          <div className="flex flex-wrap items-center justify-center gap-2 py-6">
            {[
              { word: "Pflegeprozess", size: "text-lg", weight: "font-bold" },
              { word: "Dekubitus", size: "text-base", weight: "font-semibold" },
              { word: "ICN", size: "text-sm", weight: "font-medium" },
              { word: "Ethik", size: "text-base", weight: "font-bold" },
              { word: "Thrombose", size: "text-xs", weight: "font-medium" },
              { word: "Fiechter & Meier", size: "text-sm", weight: "font-semibold" },
              { word: "Dokumentation", size: "text-xs", weight: "font-medium" },
              { word: "Hygiene", size: "text-lg", weight: "font-bold" },
              { word: "Prophylaxe", size: "text-base", weight: "font-semibold" },
              { word: "PflBG", size: "text-xs", weight: "font-medium" },
              { word: "Vitalzeichen", size: "text-sm", weight: "font-semibold" },
              { word: "ABEDL", size: "text-sm", weight: "font-medium" },
              { word: "WHO", size: "text-xs", weight: "font-medium" },
              { word: "Kommunikation", size: "text-base", weight: "font-bold" },
            ].map((item, i) => (
              <span key={i} className={`${item.size} ${item.weight} transition-colors hover:opacity-70`}
                style={{ color: [SAGE, OAK, RUST, ROSE][i % 4] }}>
                {item.word}
              </span>
            ))}
          </div>
        </VariantCard>

        {/* 5. Stimmungscheck / Mood Tracker */}
        <VariantCard label="L5" name="Stimmungscheck" description="Täglicher Check-in — Wie geht es dir heute?">
          <div className="py-5">
            <div className="mx-auto max-w-sm text-center">
              <div className="mb-4 text-sm font-semibold">Wie fühlst du dich heute beim Lernen?</div>
              <div className="flex justify-center gap-3 mb-4">
                {[
                  { emoji: "😫", label: "Überfordert" },
                  { emoji: "😕", label: "Unsicher" },
                  { emoji: "😊", label: "Gut" },
                  { emoji: "🤩", label: "Motiviert" },
                  { emoji: "💪", label: "Stark" },
                ].map((mood, i) => (
                  <button key={i} className={`flex flex-col items-center gap-1 rounded-xl p-2 transition-all ${
                    i === 3 ? "bg-[#C4877F]/10 ring-2 ring-[#C4877F]" : "hover:bg-[#E5DFD6]/30"
                  }`}>
                    <span className="text-2xl">{mood.emoji}</span>
                    <span className="text-[9px] font-medium">{mood.label}</span>
                  </button>
                ))}
              </div>
              <div className="rounded-xl bg-[#C4877F]/5 p-3 text-xs" style={{ color: SAGE }}>
                Super! Dann lass uns heute eine extra Challenge einbauen 🚀
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 6. Onboarding-Stepper */}
        <VariantCard label="L6" name="Onboarding-Wizard" description="Schritt-für-Schritt Einrichtung mit Progress-Dots">
          <div className="py-5">
            <div className="mx-auto max-w-sm">
              {/* Step indicators */}
              <div className="mb-5 flex items-center justify-center gap-2">
                {["Sprache", "Erfahrung", "Ziel", "Fertig"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ${
                      i < 2 ? "bg-[#C4877F] text-white" : i === 2 ? "border-2 border-[#C4877F] text-[#C4877F]" : "border-2 border-[#E5DFD6] text-[#86868b]"
                    }`}>
                      {i < 2 ? <Check className="h-3.5 w-3.5" /> : i + 1}
                    </div>
                    {i < 3 && <div className="h-0.5 w-6 rounded-full" style={{ backgroundColor: i < 2 ? SAGE : BONE }} />}
                  </div>
                ))}
              </div>
              {/* Current step content */}
              <div className="rounded-2xl border border-[#E5DFD6] bg-[#fafaf9] p-5 text-center">
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: OAK }}>Schritt 3 von 4</div>
                <div className="mb-3 text-base font-bold">Was ist dein Lernziel?</div>
                <div className="space-y-2">
                  {["Prüfung bestehen", "Wissen vertiefen", "Sprache verbessern"].map((goal, i) => (
                    <button key={i} className={`w-full rounded-xl border p-3 text-left text-xs font-medium transition-all ${
                      i === 0 ? "border-[#C4877F] bg-[#C4877F]/5" : "border-[#E5DFD6] hover:bg-[#E5DFD6]/20"
                    }`} style={i === 0 ? { color: SAGE } : {}}>
                      {goal}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 7. Glossar-Popup */}
        <VariantCard label="L7" name="Glossar-Tooltip" description="Fachbegriff antippen → Erklärung als Popup">
          <div className="py-5">
            <div className="text-xs leading-relaxed">
              Bei der Pflege eines Patienten mit{" "}
              <span className="relative inline-block">
                <span className="cursor-pointer rounded border-b-2 border-dashed px-0.5 font-semibold" style={{ borderColor: OAK, color: OAK }}>Dekubitus</span>
                <div className="absolute -top-[72px] left-1/2 z-10 w-48 -translate-x-1/2 rounded-xl border border-[#E5DFD6] bg-white p-3 shadow-xl">
                  <div className="text-[10px] font-bold" style={{ color: OAK }}>Dekubitus</div>
                  <div className="mt-0.5 text-[10px] text-[#86868b]">🇩🇪 Druckgeschwür · 🇹🇷 Basınç yarası</div>
                  <div className="mt-1 text-[10px] leading-relaxed">Durch anhaltenden Druck verursachte Schädigung der Haut.</div>
                  <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-[#E5DFD6] bg-white" />
                </div>
              </span>{" "}
              ist die korrekte{" "}
              <span className="cursor-pointer rounded border-b-2 border-dashed px-0.5 font-semibold" style={{ borderColor: OAK, color: OAK }}>Lagerung</span>{" "}
              entscheidend für die{" "}
              <span className="cursor-pointer rounded border-b-2 border-dashed px-0.5 font-semibold" style={{ borderColor: OAK, color: OAK }}>Prophylaxe</span>.
            </div>
          </div>
        </VariantCard>

        {/* 8. Drag-to-Connect (Linien ziehen) */}
        <VariantCard label="L8" name="Linien-Zuordnung" description="Linien zwischen Begriffen ziehen statt Drag & Drop">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Verbinde die passenden Paare:</div>
            <div className="relative">
              <div className="grid grid-cols-[1fr_60px_1fr] items-center gap-y-3">
                {[
                  { left: "Dekubitus", right: "Druckgeschwür", connected: true },
                  { left: "Kontraktur", right: "Blutgerinnsel", connected: false },
                  { left: "Thrombose", right: "Gelenkversteifung", connected: false },
                ].map((pair, i) => (
                  <>
                    <div key={`l${i}`} className={`rounded-xl border-2 p-2.5 text-center text-xs font-semibold ${
                      pair.connected ? "border-[#C4877F]/30 bg-[#C4877F]/5 text-[#C4877F]" : "border-[#E5DFD6]"
                    }`}>
                      {pair.left}
                    </div>
                    <div key={`m${i}`} className="flex justify-center">
                      {pair.connected ? (
                        <div className="h-0.5 w-full rounded" style={{ backgroundColor: SAGE }} />
                      ) : (
                        <div className="h-0.5 w-full rounded bg-[#E5DFD6]" />
                      )}
                    </div>
                    <div key={`r${i}`} className={`rounded-xl border-2 p-2.5 text-center text-xs font-semibold ${
                      pair.connected ? "border-[#C4877F]/30 bg-[#C4877F]/5 text-[#C4877F]" : "border-[#E5DFD6]"
                    }`}>
                      {pair.right}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 9. Donut-Chart Fortschritt */}
        <VariantCard label="L9" name="Donut-Fortschritt" description="Mehrere Fächer als Kreissegmente">
          <div className="flex items-center justify-center gap-6 py-5">
            <svg width="140" height="140" viewBox="0 0 140 140">
              {[
                { pct: 92, color: SAGE, offset: 0 },
                { pct: 78, color: OAK, offset: 25 },
                { pct: 45, color: RUST, offset: 50 },
                { pct: 30, color: ROSE, offset: 75 },
              ].map((seg) => {
                const r = 55
                const circ = 2 * Math.PI * r
                const segLen = circ * 0.22
                return (
                  <circle key={seg.offset} cx="70" cy="70" r={r} fill="none" stroke={seg.color}
                    strokeWidth="12" strokeLinecap="round" opacity="0.8"
                    strokeDasharray={`${segLen * seg.pct / 100} ${circ}`}
                    strokeDashoffset={-circ * seg.offset / 100}
                    transform="rotate(-90 70 70)" />
                )
              })}
              <text x="70" y="65" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1d1d1f" fontFamily="Poppins">61%</text>
              <text x="70" y="80" textAnchor="middle" fontSize="9" fill="#86868b" fontFamily="Poppins">Gesamt</text>
            </svg>
            <div className="space-y-2">
              {[
                { label: "Pflegeprozess", value: 92, color: SAGE },
                { label: "Kommunikation", value: 78, color: OAK },
                { label: "Ethik", value: 45, color: RUST },
                { label: "Kultur", value: 30, color: ROSE },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-2 text-[11px]">
                  <div className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
                  <span className="w-24">{item.label}</span>
                  <span className="font-bold" style={{ color: item.color }}>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* 10. Tagesplan / Timeline */}
        <VariantCard label="L10" name="Tagesplan" description="Strukturierter Lernplan mit Zeitblöcken">
          <div className="py-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-semibold">Dein Plan für heute</div>
              <div className="rounded-full bg-[#C4877F]/10 px-2.5 py-0.5 text-[10px] font-semibold" style={{ color: SAGE }}>4 Blöcke · ~2h</div>
            </div>
            <div className="space-y-2">
              {[
                { time: "09:00", title: "Wiederholung: Pflegeprozess", duration: "30 Min", icon: "🔄", done: true },
                { time: "09:30", title: "Neue Lektion: Kommunikation", duration: "45 Min", icon: "📖", active: true },
                { time: "10:15", title: "Pause", duration: "15 Min", icon: "☕", pause: true },
                { time: "10:30", title: "Quiz: CE 01 Gesamt", duration: "30 Min", icon: "🧠" },
              ].map((block, i) => (
                <div key={i} className={`flex items-center gap-3 rounded-xl border p-3 transition-all ${
                  block.done ? "border-[#C4877F]/20 bg-[#C4877F]/5" :
                  block.active ? "border-[#C4877F] bg-[#C4877F]/5 shadow-sm" :
                  block.pause ? "border-dashed border-[#E5DFD6]" :
                  "border-[#E5DFD6]"
                }`}>
                  <div className="text-[10px] font-mono font-semibold text-[#86868b] w-10">{block.time}</div>
                  <span className="text-base">{block.icon}</span>
                  <div className="flex-1">
                    <div className={`text-xs font-medium ${block.done ? "line-through text-[#86868b]" : ""}`}>{block.title}</div>
                    <div className="text-[10px] text-[#86868b]">{block.duration}</div>
                  </div>
                  {block.done && <Check className="h-4 w-4 text-[#C4877F]" />}
                  {block.active && <div className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: SAGE }} />}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* 11. Notification Center */}
        <VariantCard label="L11" name="Benachrichtigungen" description="Push-Notifications und Erinnerungen">
          <div className="py-5">
            <div className="mx-auto max-w-sm space-y-2">
              {[
                { icon: "🔥", title: "Streak in Gefahr!", msg: "Du hast heute noch nicht gelernt. Nur 5 Minuten reichen!", time: "vor 2h", urgent: true },
                { icon: "🎉", title: "Meilenstein erreicht!", msg: "CE 01 zu 50% abgeschlossen!", time: "gestern", highlight: true },
                { icon: "📅", title: "Wochenplan bereit", msg: "Dein neuer Lernplan für KW 15 wartet.", time: "Mo 08:00" },
              ].map((notif, i) => (
                <div key={i} className={`flex gap-3 rounded-xl border p-3 ${
                  notif.urgent ? "border-[#AE6965]/30 bg-[#AE6965]/5" :
                  notif.highlight ? "border-[#C4877F]/30 bg-[#C4877F]/5" :
                  "border-[#E5DFD6]"
                }`}>
                  <span className="mt-0.5 text-lg">{notif.icon}</span>
                  <div className="flex-1">
                    <div className="text-xs font-semibold">{notif.title}</div>
                    <div className="text-[10px] text-[#6e6e73]">{notif.msg}</div>
                  </div>
                  <div className="text-[9px] text-[#86868b] whitespace-nowrap">{notif.time}</div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* 12. Accordion FAQ */}
        <VariantCard label="L12" name="Akkordeon / FAQ" description="Aufklappbare Fragen mit Antworten">
          <div className="py-5 space-y-1.5">
            {[
              { q: "Was ist der Pflegeprozess?", a: "Ein systematisches Vorgehen in 6 Schritten nach Fiechter & Meier: Informationssammlung, Problemerkennung, Zielsetzung, Planung, Durchführung, Evaluation.", open: true },
              { q: "Wer hat den ICN-Ethikkodex verfasst?", open: false },
              { q: "Was bedeutet PflBG?", open: false },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-[#E5DFD6] overflow-hidden">
                <div className={`flex items-center justify-between px-4 py-3 text-xs font-semibold ${item.open ? "bg-[#C4877F]/5" : "bg-white"}`} style={item.open ? { color: SAGE } : {}}>
                  {item.q}
                  <ChevronRight className={`h-3.5 w-3.5 transition-transform ${item.open ? "rotate-90" : ""}`} />
                </div>
                {item.open && item.a && (
                  <div className="border-t border-[#E5DFD6] bg-white px-4 py-3 text-[11px] leading-relaxed text-[#6e6e73]">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </VariantCard>

        {/* 13. Lernpfad-Map */}
        <VariantCard label="L13" name="Lernpfad-Karte" description="Duolingo-Style — vertikaler Pfad mit Stationen">
          <div className="py-5">
            <div className="mx-auto flex max-w-xs flex-col items-center">
              {[
                { title: "Was ist Pflege?", status: "done", icon: "✓" },
                { title: "Pflegeprozess", status: "done", icon: "✓" },
                { title: "Kommunikation", status: "active", icon: "3" },
                { title: "Ethik", status: "locked", icon: "🔒" },
                { title: "Recht", status: "locked", icon: "🔒" },
              ].map((node, i) => (
                <div key={i} className="flex flex-col items-center">
                  {i > 0 && <div className="h-6 w-0.5" style={{ backgroundColor: node.status === "locked" ? BONE : SAGE }} />}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold transition-all ${
                    node.status === "done" ? "bg-[#C4877F] text-white shadow-md" :
                    node.status === "active" ? "border-3 border-[#C4877F] bg-white text-[#C4877F] shadow-lg ring-4 ring-[#C4877F]/20" :
                    "bg-[#E5DFD6] text-[#86868b]"
                  }`}>
                    {node.icon}
                  </div>
                  <div className={`mt-1 text-[10px] font-medium ${node.status === "locked" ? "text-[#86868b]" : ""}`}>
                    {node.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* 14. Skeleton Loading */}
        <VariantCard label="L14" name="Skeleton-Loading" description="Shimmer-Effekt beim Laden von Inhalten">
          <div className="py-5 space-y-3">
            <style>{`
              @keyframes shimmer {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
              }
              .skeleton-shimmer {
                background: linear-gradient(90deg, #e8e2da 25%, #f5f0eb 37%, #e8e2da 63%);
                background-size: 200% 100%;
                animation: shimmer 1.5s ease-in-out infinite;
              }
            `}</style>
            <div className="flex items-center gap-3">
              <div className="skeleton-shimmer h-10 w-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="skeleton-shimmer h-3.5 w-3/4 rounded-full" />
                <div className="skeleton-shimmer h-3 w-1/2 rounded-full" />
              </div>
            </div>
            <div className="skeleton-shimmer h-24 rounded-xl" />
            <div className="grid grid-cols-2 gap-2">
              <div className="skeleton-shimmer h-14 rounded-xl" />
              <div className="skeleton-shimmer h-14 rounded-xl" />
            </div>
            <div className="skeleton-shimmer h-10 rounded-xl" />
          </div>
        </VariantCard>

        {/* 15. Bottom Sheet / Glossar */}
        <VariantCard label="L15" name="Bottom Sheet" description="Von unten hochschieben — Glossar, Filter, Optionen">
          <div className="py-5">
            <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-[#E5DFD6]">
              <div className="bg-[#fafaf9] p-6 text-center text-xs text-[#86868b]">[Lern-Inhalt darüber]</div>
              <div className="rounded-t-3xl border-t border-[#E5DFD6] bg-white px-5 pb-4 pt-2 shadow-xl">
                <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[#E5DFD6]" />
                <div className="mb-3 text-sm font-bold">Glossar</div>
                <div className="space-y-2">
                  {[
                    { term: "Dekubitus", def: "Druckgeschwür durch anhaltenden Druck" },
                    { term: "Prophylaxe", def: "Vorbeugende Maßnahme" },
                    { term: "Anamnese", def: "Erhebung der Krankengeschichte" },
                  ].map((entry) => (
                    <div key={entry.term} className="flex items-start gap-2 rounded-lg bg-[#fafaf9] p-2">
                      <span className="text-[11px] font-bold" style={{ color: OAK }}>{entry.term}</span>
                      <span className="text-[10px] text-[#6e6e73]">— {entry.def}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 16. Prüfungsmodus */}
        <VariantCard label="L16" name="Prüfungssimulation" description="Countdown, keine Hilfen, echtes Prüfungsgefühl">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-2xl border-2 border-[#AE6965]/30 bg-gradient-to-b from-[#AE6965]/5 to-white p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#A06B63]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: RUST }}>Prüfungsmodus</span>
                </div>
                <div className="rounded-full bg-[#AE6965]/10 px-3 py-1 text-xs font-mono font-bold" style={{ color: RUST }}>
                  23:45
                </div>
              </div>
              <div className="mb-1 text-[10px] text-[#86868b]">Frage 12 von 30</div>
              <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-[#E5DFD6]">
                <div className="h-full w-[40%] rounded-full" style={{ backgroundColor: RUST }} />
              </div>
              <div className="mb-3 text-sm font-semibold">Nennen Sie drei Prophylaxe-Maßnahmen bei Dekubitusgefahr.</div>
              <textarea className="w-full rounded-xl border border-[#E5DFD6] bg-[#fafaf9] p-3 text-xs" rows={2} placeholder="Antwort eingeben..." readOnly />
              <div className="mt-2 flex items-center gap-2 text-[10px] text-[#86868b]">
                <AlertCircle className="h-3 w-3" /> Kein Glossar · Kein KI-Tutor · Keine Erklärungen
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 17. Lehrer-Dashboard Karte */}
        <VariantCard label="L17" name="Lehrer-Dashboard" description="Klassenstatus — wer braucht Hilfe?">
          <div className="py-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-semibold">Klasse 1a — 24 Schüler</div>
              <div className="text-[10px] text-[#86868b]">Heute aktiv: 19</div>
            </div>
            <div className="grid grid-cols-6 gap-1.5 mb-3">
              {Array.from({ length: 24 }).map((_, i) => {
                const status = i < 4 ? "green" : i < 16 ? "oak" : i < 19 ? "rust" : "gray"
                return (
                  <div key={i} className="flex h-9 w-full items-center justify-center rounded-lg text-[10px] font-bold text-white" style={{
                    backgroundColor: status === "green" ? SAGE : status === "oak" ? OAK : status === "rust" ? RUST : "#c8c8cc"
                  }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                )
              })}
            </div>
            <div className="flex gap-3 text-[10px]">
              <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded" style={{ backgroundColor: SAGE }} /> Prüfungsreif</span>
              <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded" style={{ backgroundColor: OAK }} /> Auf Kurs</span>
              <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded" style={{ backgroundColor: RUST }} /> Braucht Hilfe</span>
              <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded bg-[#c8c8cc]" /> Inaktiv</span>
            </div>
          </div>
        </VariantCard>

        {/* 18. Spaced Repetition Karte */}
        <VariantCard label="L18" name="Spaced Repetition" description="Karteikarten mit Wiederholungsintervall">
          <div className="py-5">
            <div className="mx-auto max-w-sm">
              <div className="mb-3 rounded-2xl border border-[#E5DFD6] bg-white p-5 text-center shadow-sm">
                <div className="mb-1 text-[10px] font-semibold text-[#86868b]">Wiederholung · Intervall 7 Tage</div>
                <div className="mb-4 text-base font-bold">Was ist eine Kontraktur?</div>
                <div className="text-xs text-[#86868b]">Tippe um die Antwort zu sehen</div>
              </div>
              <div className="flex gap-2">
                {[
                  { label: "Nochmal", color: RUST, days: "1 Tag" },
                  { label: "Schwer", color: OAK, days: "3 Tage" },
                  { label: "Gut", color: SAGE, days: "7 Tage" },
                  { label: "Leicht", color: SAGE, days: "14 Tage" },
                ].map(btn => (
                  <button key={btn.label} className="flex-1 rounded-xl border border-[#E5DFD6] bg-white py-2 text-center transition-all hover:shadow-sm">
                    <div className="text-[11px] font-semibold" style={{ color: btn.color }}>{btn.label}</div>
                    <div className="text-[9px] text-[#86868b]">{btn.days}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 19. Animated Score Counter */}
        <VariantCard label="L19" name="Score-Animation" description="XP-Zähler mit Confetti nach Session-Ende">
          <div className="py-6 text-center">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider" style={{ color: OAK }}>Session beendet!</div>
            <div className="mb-1 text-4xl font-bold" style={{ color: SAGE }}>
              +<NumberTicker value={240} /> XP
            </div>
            <div className="mb-4 flex justify-center gap-4">
              <div className="flex items-center gap-1 text-xs"><Check className="h-3.5 w-3.5 text-[#C4877F]" /> 19/22 richtig</div>
              <div className="flex items-center gap-1 text-xs"><Flame className="h-3.5 w-3.5" style={{ color: RUST }} /> Streak +1</div>
              <div className="flex items-center gap-1 text-xs"><Clock className="h-3.5 w-3.5 text-[#86868b]" /> 34 Min</div>
            </div>
            <div className="mx-auto flex max-w-xs gap-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex-1 rounded-full py-1 text-[8px] font-bold text-white" style={{ backgroundColor: i < 8 ? SAGE : BONE }}>
                  {i < 8 ? "★" : ""}
                </div>
              ))}
            </div>
            <div className="mt-1 text-[10px] text-[#86868b]">Level 8 — Noch 60 XP bis Level 9</div>
          </div>
        </VariantCard>

        {/* 20. Dark Mode Preview */}
        <VariantCard label="L20" name="Dark Mode" description="So sieht die App im Dunkelmodus aus">
          <div className="py-5">
            <div className="overflow-hidden rounded-2xl bg-[#1c1c1e] p-5 text-white">
              <div className="mb-3 text-sm font-semibold">Session 1 — Was ist Pflege?</div>
              <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-[#2c2c2e]">
                <div className="h-full w-[65%] rounded-full bg-[#C4877F]" />
              </div>
              <div className="mb-3 rounded-xl bg-[#2c2c2e] p-4 text-xs leading-relaxed text-[#a1a1a6]">
                Der Pflegeprozess ist ein <strong className="text-white">systematisches Vorgehen</strong> zur Planung und Durchführung pflegerischer Maßnahmen.
              </div>
              <div className="space-y-1.5">
                {["Informationssammlung", "Pflegeplanung", "Evaluation"].map((opt, i) => (
                  <div key={i} className={`rounded-xl border p-2.5 text-xs ${
                    i === 0 ? "border-[#C4877F] bg-[#C4877F]/10 text-[#C4877F]" : "border-[#3a3a3c] text-[#a1a1a6]"
                  }`}>
                    {String.fromCharCode(65 + i)}) {opt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 21. Story / Reel Format */}
        <VariantCard label="L21" name="Story-Format" description="Instagram-Stories für Micro-Learning, wischen zum Weiter">
          <div className="py-5 flex justify-center">
            <div className="relative w-52 overflow-hidden rounded-3xl border border-[#E5DFD6] bg-gradient-to-b from-[#C4877F]/10 to-[#A58B71]/5 shadow-lg">
              <div className="flex gap-1 px-3 pt-3">
                {[100, 100, 60, 0, 0].map((w, i) => (
                  <div key={i} className="h-0.5 flex-1 overflow-hidden rounded-full bg-black/10">
                    <div className="h-full rounded-full bg-[#1d1d1f]" style={{ width: `${w}%` }} />
                  </div>
                ))}
              </div>
              <div className="px-5 py-8 text-center">
                <div className="mb-1 text-[10px] font-semibold text-[#86868b]">WUSSTEST DU?</div>
                <div className="mb-3 text-sm font-bold">Florence Nightingale senkte die Sterblichkeit von 42% auf 2%</div>
                <div className="text-[10px] text-[#6e6e73] leading-relaxed">
                  Im Krimkrieg 1854 revolutionierte sie die Hygiene in Lazaretten.
                </div>
                <div className="mt-6 text-[9px] text-[#86868b]">← wischen →</div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 22. 3D Card Flip */}
        <VariantCard label="L22" name="3D-Karteikarte" description="Echte 3D-Drehung — Vorder- und Rückseite">
          <div className="py-5 flex justify-center gap-4">
            <div className="flex h-40 w-56 flex-col items-center justify-center rounded-2xl border-2 border-[#E5DFD6] bg-white p-4 text-center shadow-lg">
              <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: OAK }}>Fachbegriff</div>
              <div className="text-xl font-bold" style={{ color: SAGE }}>Anamnese</div>
              <div className="mt-3 text-[10px] text-[#86868b]">Antippen zum Umdrehen ↻</div>
            </div>
            <div className="flex h-40 w-56 flex-col items-center justify-center rounded-2xl border-2 p-4 text-center shadow-lg"
              style={{ borderColor: SAGE, backgroundColor: `${SAGE}08` }}>
              <div className="mb-1 text-[10px] font-semibold" style={{ color: SAGE }}>Definition</div>
              <div className="text-xs leading-relaxed">Systematische Befragung eines Patienten zur Erhebung seiner Krankengeschichte</div>
              <div className="mt-2 text-[10px]" style={{ color: OAK }}>🇹🇷 Anamnez · 🇬🇧 Anamnesis</div>
            </div>
          </div>
        </VariantCard>

        {/* 23. Pomodoro Timer */}
        <VariantCard label="L23" name="Pomodoro-Timer" description="25 Min lernen, 5 Min Pause, strukturierte Sessions">
          <div className="py-5 flex justify-center">
            <div className="w-64 text-center">
              <div className="relative mx-auto mb-4 flex h-36 w-36 items-center justify-center">
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 140 140">
                  <circle cx="70" cy="70" r="62" fill="none" stroke={BONE} strokeWidth="6" />
                  <circle cx="70" cy="70" r="62" fill="none" stroke={SAGE} strokeWidth="6"
                    strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 62 * 0.68} ${2 * Math.PI * 62}`} />
                </svg>
                <div>
                  <div className="text-3xl font-bold font-mono" style={{ color: SAGE }}>17:04</div>
                  <div className="text-[10px] text-[#86868b]">Fokus-Phase</div>
                </div>
              </div>
              <div className="mb-3 flex justify-center gap-1.5">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-2 w-8 rounded-full" style={{ backgroundColor: i <= 2 ? SAGE : BONE }} />
                ))}
              </div>
              <div className="text-[10px] text-[#86868b]">Pomodoro 3 von 4 · Pause in 17 Min</div>
              <div className="mt-3 flex justify-center gap-2">
                <button className="rounded-full px-4 py-1.5 text-xs font-semibold text-white" style={{ backgroundColor: SAGE }}>⏸ Pause</button>
                <button className="rounded-full border border-[#E5DFD6] px-4 py-1.5 text-xs font-medium">⏭ Skip</button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 24. KI-Tutor Chat Widget */}
        <VariantCard label="L24" name="KI-Tutor Chat" description="Floating Chat-Widget — Fragen jederzeit stellen">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-2xl border border-[#E5DFD6] bg-white shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ backgroundColor: SAGE }}>
                <Brain className="h-4 w-4 text-white" />
                <span className="text-xs font-semibold text-white">KI-Tutor</span>
                <div className="ml-auto flex items-center gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C4877F] animate-pulse" />
                  <span className="text-[10px] text-white/80">Online</span>
                </div>
              </div>
              <div className="space-y-2 p-3 bg-[#fafaf9]">
                <div className="flex gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px]" style={{ backgroundColor: `${SAGE}20`, color: SAGE }}>🤖</div>
                  <div className="rounded-2xl rounded-tl-sm bg-white border border-[#E5DFD6] px-3 py-2 text-[11px] max-w-[80%]">
                    Hallo! Frag mich alles zum Pflegeprozess 👋
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <div className="rounded-2xl rounded-tr-sm px-3 py-2 text-[11px] text-white max-w-[80%]" style={{ backgroundColor: SAGE }}>
                    Was ist der Unterschied zwischen Pflegediagnose und ärztlicher Diagnose?
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px]" style={{ backgroundColor: `${SAGE}20`, color: SAGE }}>🤖</div>
                  <div className="rounded-2xl rounded-tl-sm bg-white border border-[#E5DFD6] px-3 py-2 text-[11px] max-w-[80%]">
                    Gute Frage! Die <strong>Pflegediagnose</strong> beschreibt Reaktionen des Patienten. Die <strong>ärztliche Diagnose</strong> benennt die Krankheit.
                  </div>
                </div>
              </div>
              <div className="flex gap-2 border-t border-[#E5DFD6] bg-white px-3 py-2">
                <input className="flex-1 rounded-full border border-[#E5DFD6] bg-[#fafaf9] px-3 py-1.5 text-[11px]" placeholder="Frage eingeben..." readOnly />
                <button className="flex h-7 w-7 items-center justify-center rounded-full text-white" style={{ backgroundColor: SAGE }}>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 25. Emoji Reactions */}
        <VariantCard label="L25" name="Emoji-Reaktionen" description="Schnelles Feedback zu Lerninhalten geben">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-xl bg-[#fafaf9] border border-[#E5DFD6] p-4">
              <div className="mb-3 text-xs leading-relaxed">
                <strong>Fun Fact:</strong> In Deutschland gibt es über 1,7 Mio professionell Pflegende — mehr als Polizisten und Feuerwehrleute zusammen.
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-[#86868b] mr-1">Reaktion:</span>
                {[
                  { emoji: "🤯", count: 42, active: true },
                  { emoji: "💡", count: 18, active: false },
                  { emoji: "❤️", count: 7, active: false },
                  { emoji: "🤔", count: 3, active: false },
                ].map((r, i) => (
                  <button key={i} className={`flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] transition-all ${
                    r.active ? "border-[#BFA48E] bg-[#BFA48E]/10" : "border-[#E5DFD6] hover:bg-[#E5DFD6]/30"
                  }`}>
                    {r.emoji} <span className="text-[10px] font-medium">{r.count}</span>
                  </button>
                ))}
                <button className="ml-auto rounded-full border border-dashed border-[#E5DFD6] px-2 py-0.5 text-[11px] text-[#86868b]">+</button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 26. Session Mini-Map */}
        <VariantCard label="L26" name="Session Mini-Map" description="Überblick über alle Steps — wo bin ich gerade?">
          <div className="py-5">
            <div className="mb-2 text-sm font-semibold">Session 1 — Übersicht</div>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 22 }).map((_, i) => {
                const types = ["T", "Q", "T", "D", "Q", "M", "T", "Q", "S", "Q", "T", "B", "T", "Q", "R", "T", "Q", "C", "T", "Q", "F", "★"]
                const done = i < 12
                const current = i === 12
                return (
                  <div key={i} className={`flex h-7 w-7 items-center justify-center rounded-lg text-[9px] font-bold transition-all ${
                    done ? "bg-[#C4877F] text-white" :
                    current ? "bg-white border-2 border-[#C4877F] text-[#C4877F] ring-2 ring-[#C4877F]/20 shadow-sm" :
                    "bg-[#E5DFD6]/50 text-[#86868b]"
                  }`}>
                    {types[i]}
                  </div>
                )
              })}
            </div>
            <div className="mt-2 text-[9px] text-[#86868b]">
              T=Text · Q=Quiz · D=Dialog · M=Memory · S=Sorting · B=Branching · R=Reveal · C=Crossword · F=Freetext · ★=Summary
            </div>
          </div>
        </VariantCard>

        {/* 27. Tier-List / Priority Ranking */}
        <VariantCard label="L27" name="Tier-List / Ranking" description="Begriffe in S/A/B/C Stufen einsortieren">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Wie wichtig sind diese Maßnahmen bei Sturzgefahr?</div>
            <div className="space-y-1">
              {[
                { tier: "S", color: MAUVE, items: ["Sturzprotokoll"] },
                { tier: "A", color: RUST, items: ["Hüftprotektoren", "Nachtlicht"] },
                { tier: "B", color: OAK, items: ["Handlauf prüfen"] },
                { tier: "C", color: "#86868b", items: [] },
              ].map(row => (
                <div key={row.tier} className="flex items-stretch gap-1.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-black text-white" style={{ backgroundColor: row.color }}>
                    {row.tier}
                  </div>
                  <div className="flex flex-1 items-center gap-1.5 rounded-lg border border-dashed border-[#E5DFD6] bg-[#fafaf9] px-2 min-h-[40px]">
                    {row.items.map(item => (
                      <span key={item} className="rounded-md bg-white border border-[#E5DFD6] px-2 py-1 text-[10px] font-medium shadow-sm">{item}</span>
                    ))}
                    {row.items.length === 0 && <span className="text-[10px] text-[#c8c8cc]">Hierher ziehen...</span>}
                  </div>
                </div>
              ))}
              <div className="mt-2 flex gap-1.5">
                {["Bettseitenteil", "Physiotherapie"].map(item => (
                  <span key={item} className="cursor-grab rounded-md border border-[#E5DFD6] bg-white px-2.5 py-1.5 text-[10px] font-medium shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 28. Wochenrückblick */}
        <VariantCard label="L28" name="Wochenrückblick" description="Zusammenfassung der Lernwoche mit Trends">
          <div className="py-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-semibold">KW 14 — Rückblick</div>
              <div className="text-[10px] text-[#86868b]">31. März – 4. April</div>
            </div>
            <div className="grid grid-cols-5 gap-1 mb-3">
              {["Mo", "Di", "Mi", "Do", "Fr"].map((day, i) => {
                const mins = [45, 60, 30, 0, 52][i]
                const h = mins / 60 * 100
                return (
                  <div key={day} className="text-center">
                    <div className="mx-auto flex h-16 w-full items-end justify-center rounded-lg bg-[#fafaf9]">
                      <div className="w-5 rounded-t-md" style={{ height: `${Math.max(h, 5)}%`, backgroundColor: mins > 0 ? SAGE : BONE }} />
                    </div>
                    <div className="mt-1 text-[9px] font-medium text-[#86868b]">{day}</div>
                    <div className="text-[9px] font-bold">{mins > 0 ? `${mins}m` : "—"}</div>
                  </div>
                )
              })}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-xl bg-[#C4877F]/5 p-2 text-center">
                <div className="text-base font-bold" style={{ color: SAGE }}>3:07h</div>
                <div className="text-[9px] text-[#86868b]">Lernzeit</div>
              </div>
              <div className="rounded-xl bg-[#A58B71]/5 p-2 text-center">
                <div className="text-base font-bold" style={{ color: OAK }}>+480</div>
                <div className="text-[9px] text-[#86868b]">XP</div>
              </div>
              <div className="rounded-xl bg-[#AE6965]/5 p-2 text-center">
                <div className="text-base font-bold" style={{ color: SAGE }}>↑12%</div>
                <div className="text-[9px] text-[#86868b]">vs. letzte Wo.</div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 29. Swipeable Card Stack */}
        <VariantCard label="L29" name="Karten-Stapel" description="Tinder-Style — Karten vom Stapel wischen">
          <div className="py-5 flex justify-center">
            <div className="relative h-44 w-56">
              <div className="absolute inset-0 rounded-2xl border border-[#E5DFD6] bg-white shadow-sm"
                style={{ transform: "rotate(4deg) translateY(8px) scale(0.95)", opacity: 0.5 }} />
              <div className="absolute inset-0 rounded-2xl border border-[#E5DFD6] bg-white shadow-sm"
                style={{ transform: "rotate(2deg) translateY(4px) scale(0.97)", opacity: 0.7 }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 border-[#E5DFD6] bg-white p-5 shadow-lg">
                <div className="mb-1 text-[10px] font-semibold" style={{ color: OAK }}>Karte 3 / 12</div>
                <div className="mb-3 text-center text-sm font-bold">Was bedeutet &quot;Aspiration&quot;?</div>
                <div className="text-xs text-center text-[#6e6e73]">Einatmen von Fremdkörpern in die Atemwege</div>
                <div className="mt-4 flex gap-6">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#A06B63]/20 text-[#A06B63]">
                    <X className="h-5 w-5" />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#C4877F]/30 text-[#C4877F]">
                    <Check className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 30. Vergleichstabelle */}
        <VariantCard label="L30" name="Vergleichstabelle" description="Strukturierter Vergleich mit Zeilen und Spalten">
          <div className="py-5 overflow-x-auto">
            <table className="w-full text-[11px]">
              <thead>
                <tr>
                  <th className="p-2 text-left font-semibold text-[#86868b]">Kriterium</th>
                  <th className="p-2 text-center font-semibold rounded-t-lg" style={{ backgroundColor: `${SAGE}10`, color: SAGE }}>Grundpflege</th>
                  <th className="p-2 text-center font-semibold rounded-t-lg" style={{ backgroundColor: `${RUST}10`, color: RUST }}>Behandlungspflege</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Durchführung", a: "Pflegekraft", b: "Pflegefachkraft" },
                  { label: "Verordnung", a: "Nein", b: "Ärztlich" },
                  { label: "Beispiel", a: "Körperpflege", b: "Injektionen" },
                  { label: "Delegation", a: "Möglich", b: "Eingeschränkt" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#fafaf9]" : ""}>
                    <td className="p-2 font-medium">{row.label}</td>
                    <td className="p-2 text-center">{row.a}</td>
                    <td className="p-2 text-center">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </VariantCard>

        {/* 31. Audio Waveform */}
        <VariantCard label="L31" name="Audio-Wellenform" description="Visualisierung der Sprachaufnahme">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-2xl border border-[#E5DFD6] bg-[#fafaf9] p-4">
              <div className="mb-2 text-xs font-semibold">Deine Aufnahme:</div>
              <div className="flex items-center gap-3 mb-3">
                <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: SAGE }}>
                  <span className="ml-0.5 text-xs">▶</span>
                </button>
                <div className="flex flex-1 items-center gap-[2px] h-8">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const h = Math.abs(Math.sin(i * 0.5) * Math.cos(i * 0.3)) * 100
                    const played = i < 24
                    return <div key={i} className="flex-1 rounded-full" style={{
                      height: `${Math.max(h, 10)}%`,
                      backgroundColor: played ? SAGE : BONE,
                    }} />
                  })}
                </div>
                <span className="text-[10px] font-mono text-[#86868b]">0:03</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-[#C4877F]/5 border border-[#C4877F]/20 p-2">
                <Check className="h-3.5 w-3.5 text-[#C4877F] shrink-0" />
                <span className="text-[10px] text-[#C4877F]"><strong>94%</strong> — &quot;Dekubitusprophylaxe&quot;</span>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 32. Fortschrittsberg */}
        <VariantCard label="L32" name="Fortschrittsberg" description="Bergsteigen-Metapher — wie weit bist du?">
          <div className="py-5 flex justify-center">
            <svg width="280" height="160" viewBox="0 0 280 160">
              <polygon points="140,10 260,150 20,150" fill={`${SAGE}10`} stroke={SAGE} strokeWidth="1" />
              <path d="M30,145 Q60,140 80,125 Q100,110 110,100 Q130,80 140,75" fill="none" stroke={SAGE} strokeWidth="2" strokeDasharray="4,3" />
              <path d="M140,75 Q155,65 170,50 Q190,30 200,25 Q220,15 240,10" fill="none" stroke={BONE} strokeWidth="2" strokeDasharray="4,3" />
              {[
                { x: 30, y: 145, label: "Start", done: true },
                { x: 80, y: 125, label: "CE 01", done: true },
                { x: 140, y: 75, label: "CE 02", current: true },
                { x: 200, y: 35, label: "CE 05" },
                { x: 245, y: 15, label: "Prüfung" },
              ].map((cp, i) => (
                <g key={i}>
                  <circle cx={cp.x} cy={cp.y} r={cp.current ? 7 : 5} fill={cp.done ? SAGE : cp.current ? "white" : BONE}
                    stroke={cp.done || cp.current ? SAGE : BONE} strokeWidth={cp.current ? 2 : 1} />
                  {cp.current && <circle cx={cp.x} cy={cp.y} r="10" fill="none" stroke={SAGE} strokeWidth="1" opacity="0.3">
                    <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                  </circle>}
                  <text x={cp.x} y={cp.y + 16} textAnchor="middle" fontSize="7" fill="#6e6e73" fontFamily="Poppins">{cp.label}</text>
                </g>
              ))}
              <text x="252" y="12" fontSize="12">🏔️</text>
            </svg>
          </div>
        </VariantCard>

        {/* 33. KI tippt Effekt */}
        <VariantCard label="L33" name="KI tippt..." description="Typewriter-Effekt für KI-Antworten">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-xl border border-[#E5DFD6] bg-[#fafaf9] p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: `${SAGE}20` }}>
                  <Brain className="h-3.5 w-3.5" style={{ color: SAGE }} />
                </div>
                <span className="text-[11px] font-semibold" style={{ color: SAGE }}>KI-Tutor</span>
              </div>
              <div className="text-xs leading-relaxed">
                <span>Der Pflegeprozess ist deshalb wichtig, weil er </span>
                <span className="font-semibold">systematisches Handeln</span>
                <span> sicherstellt. Ohne ihn würde Pflege </span>
                <span className="border-r-2 animate-pulse" style={{ borderColor: SAGE }}>willkürlich und unkontro</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full" style={{ backgroundColor: SAGE, animationDelay: "0ms" }} />
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full" style={{ backgroundColor: SAGE, animationDelay: "150ms" }} />
                  <div className="h-1.5 w-1.5 animate-bounce rounded-full" style={{ backgroundColor: SAGE, animationDelay: "300ms" }} />
                </div>
                <span className="text-[9px] text-[#86868b]">KI schreibt...</span>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 34. Neumorphism Style */}
        <VariantCard label="L34" name="Neumorphism" description="Weiche Schatten, geprägter Look">
          <div className="py-5 rounded-xl" style={{ backgroundColor: "#e8e2da" }}>
            <div className="mx-auto max-w-sm rounded-2xl p-5"
              style={{ background: "#e8e2da", boxShadow: "8px 8px 16px #c5c0b8, -8px -8px 16px #fffef8" }}>
              <div className="mb-4 text-center">
                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{ background: "#e8e2da", boxShadow: "inset 4px 4px 8px #c5c0b8, inset -4px -4px 8px #fffef8" }}>
                  <BookOpen className="h-7 w-7" style={{ color: SAGE }} />
                </div>
                <div className="text-sm font-bold">CE 01 — Ausbildungsstart</div>
                <div className="text-[10px] text-[#86868b]">Session 3 von 8</div>
              </div>
              <div className="mb-3 h-2 overflow-hidden rounded-full"
                style={{ background: "#e8e2da", boxShadow: "inset 2px 2px 4px #c5c0b8, inset -2px -2px 4px #fffef8" }}>
                <div className="h-full w-[38%] rounded-full" style={{ backgroundColor: SAGE }} />
              </div>
              <button className="w-full rounded-xl py-2.5 text-xs font-semibold transition-all active:scale-95"
                style={{ background: "#e8e2da", boxShadow: "4px 4px 8px #c5c0b8, -4px -4px 8px #fffef8", color: SAGE }}>
                Weiterlernen
              </button>
            </div>
          </div>
        </VariantCard>

        {/* 35. RPG Charakter */}
        <VariantCard label="L35" name="RPG-Charakter" description="Gamification — Schüler als Charakter mit Stats">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-2xl border border-[#E5DFD6] bg-gradient-to-b from-white to-[#fafaf9] p-5">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl" style={{ backgroundColor: `${SAGE}10` }}>
                  🧑‍⚕️
                </div>
                <div>
                  <div className="text-sm font-bold">Pflege-Azubi</div>
                  <div className="text-[10px] text-[#86868b]">Level 8 · 2.450 XP</div>
                  <div className="mt-1 h-2 w-32 overflow-hidden rounded-full bg-[#E5DFD6]">
                    <div className="h-full w-[60%] rounded-full" style={{ backgroundColor: OAK }} />
                  </div>
                  <div className="text-[9px] text-[#86868b]">60/400 XP bis Level 9</div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { stat: "WIS", value: 72, label: "Wissen", color: SAGE },
                  { stat: "SPR", value: 58, label: "Sprache", color: OAK },
                  { stat: "PRA", value: 45, label: "Praxis", color: RUST },
                  { stat: "ETH", value: 83, label: "Ethik", color: ROSE },
                ].map(s => (
                  <div key={s.stat} className="rounded-xl bg-[#fafaf9] border border-[#E5DFD6] p-2">
                    <div className="text-[9px] font-bold text-[#86868b]">{s.stat}</div>
                    <div className="text-sm font-bold" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-[8px] text-[#86868b]">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-1.5">
                {["🏅 Erste Session", "🔥 7-Tage-Streak", "📚 CE 01"].map(badge => (
                  <span key={badge} className="rounded-full bg-[#E5DFD6]/50 px-2 py-0.5 text-[9px] font-medium">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 36. Swipe-Galerie */}
        <VariantCard label="L36" name="Bild-Karussell" description="Medizinische Illustrationen durchblättern">
          <div className="py-5">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-[${BONE}]">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#fafaf9] to-[${BONE}] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🫁</div>
                  <div className="text-xs font-semibold" style={{ color: ROSE }}>Lunge — Anatomie</div>
                  <div className="text-[10px] text-[#86868b]">Illustration: Servier Medical Art</div>
                </div>
              </div>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} className="h-1.5 rounded-full transition-all" style={{
                    width: i === 1 ? 16 : 6,
                    backgroundColor: i === 1 ? ROSE : SAND
                  }} />
                ))}
              </div>
              <button className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xs shadow-sm">←</button>
              <button className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xs shadow-sm">→</button>
            </div>
          </div>
        </VariantCard>

        {/* 37. Lernstreifen-Kalender */}
        <VariantCard label="L37" name="Streak-Kalender" description="Monatsansicht — welche Tage hast du gelernt?">
          <div className="py-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold">April 2026</span>
              <span className="text-[10px]" style={{ color: ROSE }}>🔥 12 Tage Streak</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-[9px]">
              {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map(d => (
                <div key={d} className="py-1 font-semibold text-[#86868b]">{d}</div>
              ))}
              {/* Empty cells for offset + 30 days */}
              {[0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map((d, i) => {
                if (d === 0) return <div key={`e${i}`} />
                const learned = [1,2,3,5,6,7,8,9,10,12,13,14,15,16,17,19,20,21,22,23,24,26,27].includes(d)
                const today = d === 3
                return (
                  <div key={d} className={`flex h-7 items-center justify-center rounded-lg text-[10px] font-medium ${
                    today ? "ring-2 font-bold" : ""
                  }`} style={{
                    backgroundColor: learned ? `${ROSE}${d > 20 ? "30" : "20"}` : "transparent",
                    color: learned ? ROSE : "#86868b",
                    ...(today ? { boxShadow: `0 0 0 2px ${ROSE}` } : {}),
                  }}>
                    {d}
                  </div>
                )
              })}
            </div>
          </div>
        </VariantCard>

        {/* 38. Wissensrad / Spinning Wheel */}
        <VariantCard label="L38" name="Glücksrad" description="Zufällige Themenwahl — spielerischer Einstieg">
          <div className="py-5 flex justify-center">
            <div className="relative">
              <svg width="200" height="200" viewBox="0 0 200 200">
                {["Pflegeprozess", "Ethik", "Kommunikation", "Hygiene", "Recht", "Anatomie"].map((topic, i) => {
                  const angle = i * 60
                  const startAngle = (angle - 90) * Math.PI / 180
                  const endAngle = (angle + 60 - 90) * Math.PI / 180
                  const x1 = 100 + 85 * Math.cos(startAngle)
                  const y1 = 100 + 85 * Math.sin(startAngle)
                  const x2 = 100 + 85 * Math.cos(endAngle)
                  const y2 = 100 + 85 * Math.sin(endAngle)
                  const midAngle = (angle + 30 - 90) * Math.PI / 180
                  const tx = 100 + 55 * Math.cos(midAngle)
                  const ty = 100 + 55 * Math.sin(midAngle)
                  const colors = [ROSE, OAK, MAUVE, TAUPE, BLUSH, SAND]
                  return (
                    <g key={i}>
                      <path d={`M100,100 L${x1},${y1} A85,85 0 0,1 ${x2},${y2} Z`} fill={`${colors[i]}30`} stroke="white" strokeWidth="2" />
                      <text x={tx} y={ty} textAnchor="middle" dominantBaseline="middle" fontSize="7" fontWeight="600" fill={colors[i]} fontFamily="Poppins"
                        transform={`rotate(${angle + 30}, ${tx}, ${ty})`}>{topic}</text>
                    </g>
                  )
                })}
                <circle cx="100" cy="100" r="18" fill="white" stroke={BONE} strokeWidth="2" />
                <text x="100" y="102" textAnchor="middle" fontSize="10" fontWeight="700" fill={ROSE} fontFamily="Poppins">SPIN</text>
              </svg>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 text-lg">▼</div>
            </div>
          </div>
        </VariantCard>

        {/* 39. Split-View Vorher/Nachher */}
        <VariantCard label="L39" name="Vorher / Nachher" description="Slider zwischen zwei Zuständen">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Dekubitus: Grad 1 vs. Grad 3</div>
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-[${BONE}]">
              <div className="grid grid-cols-2">
                <div className="bg-[${BONE}]/50 p-4 text-center">
                  <div className="mb-1 text-2xl">🟡</div>
                  <div className="text-xs font-bold" style={{ color: OAK }}>Grad 1</div>
                  <div className="text-[10px] text-[#86868b]">Hautrötung, nicht wegdrückbar</div>
                </div>
                <div className="p-4 text-center" style={{ backgroundColor: `${MAUVE}08` }}>
                  <div className="mb-1 text-2xl">🔴</div>
                  <div className="text-xs font-bold" style={{ color: MAUVE }}>Grad 3</div>
                  <div className="text-[10px] text-[#86868b]">Tiefe Gewebeschädigung</div>
                </div>
              </div>
              <div className="absolute inset-y-0 left-1/2 flex -translate-x-1/2 items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg border-2" style={{ borderColor: SAND }}>
                  <span className="text-[10px] font-bold text-[#86868b]">⟷</span>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 40. Masonry Grid */}
        <VariantCard label="L40" name="Masonry-Grid" description="Pinterest-Style — verschieden hohe Karten">
          <div className="py-5">
            <div className="columns-2 gap-2 space-y-2">
              {[
                { title: "Pflegeprozess", h: "h-24", emoji: "🔄", color: ROSE },
                { title: "Ethik & Moral", h: "h-32", emoji: "⚖️", color: MAUVE },
                { title: "Kommunikation", h: "h-20", emoji: "💬", color: OAK },
                { title: "Hygiene", h: "h-28", emoji: "🧼", color: TAUPE },
                { title: "Anatomie", h: "h-24", emoji: "🫀", color: BLUSH },
                { title: "Recht", h: "h-20", emoji: "📋", color: SAND },
              ].map((card, i) => (
                <div key={i} className={`${card.h} flex flex-col items-center justify-center rounded-2xl border break-inside-avoid`}
                  style={{ borderColor: `${card.color}40`, backgroundColor: `${card.color}08` }}>
                  <span className="text-2xl mb-1">{card.emoji}</span>
                  <span className="text-[11px] font-semibold" style={{ color: card.color }}>{card.title}</span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* 41. Floating Action Button */}
        <VariantCard label="L41" name="FAB-Menü" description="Schwebender Button mit Schnellaktionen">
          <div className="py-5">
            <div className="relative mx-auto max-w-sm h-40 rounded-2xl border border-[${BONE}] bg-[#fafaf9] overflow-hidden">
              <div className="p-4 text-xs text-[#86868b] text-center">[Lern-Inhalt]</div>
              {/* FAB expanded */}
              <div className="absolute bottom-3 right-3 flex flex-col items-end gap-2">
                {[
                  { icon: "📝", label: "Notiz", color: TAUPE },
                  { icon: "🔖", label: "Lesezeichen", color: OAK },
                  { icon: "🤖", label: "KI fragen", color: ROSE },
                ].map((action, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-medium shadow-sm border" style={{ borderColor: SAND }}>{action.label}</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full text-base shadow-md" style={{ backgroundColor: `${action.color}15`, border: `1px solid ${action.color}30` }}>
                      {action.icon}
                    </div>
                  </div>
                ))}
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl" style={{ backgroundColor: ROSE }}>
                  <span className="text-xl rotate-45">+</span>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 42. Konfetti-Feier */}
        <VariantCard label="L42" name="Konfetti-Celebration" description="Party-Animation nach Meilenstein">
          <div className="py-5 flex justify-center">
            <div className="relative w-64 rounded-2xl border-2 bg-white p-6 text-center shadow-lg" style={{ borderColor: BLUSH }}>
              {/* Confetti particles */}
              {Array.from({ length: 20 }).map((_, i) => {
                const colors = [ROSE, OAK, MAUVE, TAUPE, BLUSH, SAND]
                const left = 10 + Math.random() * 80
                const size = 4 + Math.random() * 6
                const delay = Math.random() * 2
                return (
                  <div key={i} className="absolute animate-bounce" style={{
                    left: `${left}%`, top: `${5 + Math.random() * 30}%`,
                    width: size, height: size, borderRadius: Math.random() > 0.5 ? "50%" : "1px",
                    backgroundColor: colors[i % colors.length],
                    opacity: 0.6 + Math.random() * 0.4,
                    animationDelay: `${delay}s`,
                    animationDuration: `${1 + Math.random()}s`,
                  }} />
                )
              })}
              <div className="text-4xl mb-2">🎉</div>
              <div className="text-lg font-bold mb-1">Meilenstein!</div>
              <div className="text-xs text-[#86868b] mb-3">Du hast CE 01 abgeschlossen!</div>
              <div className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>
                <Trophy className="h-4 w-4" />
                <span className="text-xs font-bold">+500 XP · Badge freigeschaltet</span>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 43. Prüfungsreife-Ampel */}
        <VariantCard label="L43" name="Prüfungsreife-Ampel" description="Grün/Gelb/Rot Indikator — bist du bereit?">
          <div className="py-5">
            <div className="mx-auto max-w-sm">
              <div className="mb-4 text-center">
                <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-full" style={{ backgroundColor: `${OAK}15`, border: `3px solid ${OAK}` }}>
                  <div className="text-center">
                    <div className="text-xl font-bold" style={{ color: OAK }}>74%</div>
                    <div className="text-[8px] font-semibold" style={{ color: OAK }}>FAST</div>
                  </div>
                </div>
                <div className="text-sm font-bold">Fast prüfungsreif</div>
                <div className="text-[10px] text-[#86868b]">Noch 2-3 Themen wiederholen</div>
              </div>
              <div className="space-y-1.5">
                {[
                  { label: "Pflegeprozess", pct: 95, status: "ready" },
                  { label: "Kommunikation", pct: 82, status: "ready" },
                  { label: "Ethik", pct: 61, status: "almost" },
                  { label: "Recht", pct: 38, status: "not" },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{
                      backgroundColor: item.status === "ready" ? ROSE : item.status === "almost" ? OAK : MAUVE
                    }} />
                    <span className="w-28 text-[11px]">{item.label}</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ backgroundColor: `${BONE}` }}>
                      <div className="h-full rounded-full" style={{
                        width: `${item.pct}%`,
                        backgroundColor: item.status === "ready" ? ROSE : item.status === "almost" ? OAK : MAUVE
                      }} />
                    </div>
                    <span className="text-[10px] font-bold w-8 text-right" style={{
                      color: item.status === "ready" ? ROSE : item.status === "almost" ? OAK : MAUVE
                    }}>{item.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 44. Lern-Duo / Peer Learning */}
        <VariantCard label="L44" name="Lern-Duo" description="Gamification — mit einem Partner lernen">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-2xl border p-4" style={{ borderColor: SAND, backgroundColor: `${BLUSH}05` }}>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold">Wochen-Challenge</span>
                <span className="rounded-full px-2 py-0.5 text-[9px] font-bold" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>3 Tage übrig</span>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-1 text-center">
                  <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ backgroundColor: `${ROSE}15` }}>👩‍⚕️</div>
                  <div className="text-[10px] font-bold">Du</div>
                  <div className="text-lg font-bold" style={{ color: ROSE }}>340 XP</div>
                </div>
                <div className="text-xs font-bold text-[#86868b]">VS</div>
                <div className="flex-1 text-center">
                  <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ backgroundColor: `${OAK}15` }}>👨‍⚕️</div>
                  <div className="text-[10px] font-bold">Lern-Partner</div>
                  <div className="text-lg font-bold" style={{ color: OAK }}>285 XP</div>
                </div>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-[#fafaf9]">
                <div className="flex h-full">
                  <div className="h-full rounded-l-full" style={{ width: "55%", backgroundColor: ROSE }} />
                  <div className="h-full rounded-r-full" style={{ width: "45%", backgroundColor: OAK }} />
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 45. Tages-Zusammenfassung */}
        <VariantCard label="L45" name="Tages-Wrap-Up" description="Ende-des-Tages Zusammenfassung mit Empfehlungen">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-2xl bg-gradient-to-b p-5" style={{ background: `linear-gradient(to bottom, ${ROSE}08, ${BONE}30)` }}>
              <div className="text-center mb-4">
                <div className="text-2xl mb-1">🌅</div>
                <div className="text-sm font-bold">Guten Abend!</div>
                <div className="text-[10px] text-[#86868b]">Das hast du heute geschafft:</div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="rounded-xl bg-white/80 p-2 text-center shadow-sm">
                  <div className="text-base font-bold" style={{ color: ROSE }}>45m</div>
                  <div className="text-[8px] text-[#86868b]">Lernzeit</div>
                </div>
                <div className="rounded-xl bg-white/80 p-2 text-center shadow-sm">
                  <div className="text-base font-bold" style={{ color: OAK }}>+120</div>
                  <div className="text-[8px] text-[#86868b]">XP</div>
                </div>
                <div className="rounded-xl bg-white/80 p-2 text-center shadow-sm">
                  <div className="text-base font-bold" style={{ color: TAUPE }}>85%</div>
                  <div className="text-[8px] text-[#86868b]">Richtig</div>
                </div>
              </div>
              <div className="rounded-xl bg-white/60 p-3 text-[11px] mb-3">
                <div className="font-semibold mb-1">📌 Morgen wiederholen:</div>
                <div className="text-[#6e6e73]">ICN-Ethikkodex — du warst bei 60%, eine Wiederholung festigt das Wissen!</div>
              </div>
              <button className="w-full rounded-xl py-2.5 text-xs font-semibold text-white" style={{ backgroundColor: ROSE }}>Morgen-Plan anschauen →</button>
            </div>
          </div>
        </VariantCard>

        {/* 46. Interaktive Checkliste */}
        <VariantCard label="L46" name="Pflege-Checkliste" description="Schritt-für-Schritt Handlungsanweisung abhaken">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Händedesinfektion — 6 Schritte:</div>
            <div className="space-y-1.5">
              {[
                { text: "3-5 ml Desinfektionsmittel in die Handfläche", done: true },
                { text: "Handfläche auf Handfläche reiben", done: true },
                { text: "Rechte Handfläche über linken Handrücken", done: true },
                { text: "Finger ineinander verschränkt reiben", done: false, active: true },
                { text: "Daumen separat reinigen", done: false },
                { text: "Fingerkuppen in Handfläche kreisen", done: false },
              ].map((step, i) => (
                <div key={i} className={`flex items-center gap-3 rounded-xl border p-3 transition-all ${
                  step.active ? "shadow-sm" : ""
                }`} style={{
                  borderColor: step.done ? `${ROSE}30` : step.active ? ROSE : SAND,
                  backgroundColor: step.done ? `${ROSE}05` : step.active ? `${ROSE}08` : "white",
                }}>
                  <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                    step.done ? "text-white" : ""
                  }`} style={{
                    backgroundColor: step.done ? ROSE : step.active ? `${ROSE}20` : BONE,
                    color: step.done ? "white" : step.active ? ROSE : "#86868b",
                  }}>
                    {step.done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                  </div>
                  <span className={`text-xs ${step.done ? "line-through text-[#86868b]" : "font-medium"}`}>{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* 47. Leitfall-Karte */}
        <VariantCard label="L47" name="Leitfall / Patient" description="Patientenvorstellung als Steckbrief">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-2xl border overflow-hidden" style={{ borderColor: SAND }}>
              <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: `${ROSE}08` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-xl" style={{ backgroundColor: `${ROSE}15` }}>👵</div>
                <div>
                  <div className="text-sm font-bold">Frau Helga Schmidt, 82 J.</div>
                  <div className="text-[10px] text-[#86868b]">Station 3B · Zimmer 214 · Tag 5</div>
                </div>
              </div>
              <div className="p-4 space-y-2 text-[11px]">
                <div className="flex gap-2">
                  <span className="font-semibold w-24" style={{ color: OAK }}>Diagnose:</span>
                  <span>Schenkelhalsfraktur rechts, Z.n. TEP</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-24" style={{ color: OAK }}>Risiken:</span>
                  <span className="flex gap-1 flex-wrap">
                    {["Sturzgefahr", "Dekubitus", "Thrombose"].map(r => (
                      <span key={r} className="rounded-full px-2 py-0.5 text-[9px] font-medium" style={{ backgroundColor: `${MAUVE}10`, color: MAUVE }}>{r}</span>
                    ))}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-24" style={{ color: OAK }}>Mobilität:</span>
                  <span>Rollator, Unterstützung beim Aufstehen</span>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 48. Zitat-Karte */}
        <VariantCard label="L48" name="Zitat / Quote" description="Inspirierendes Zitat als Design-Element">
          <div className="py-5 flex justify-center">
            <div className="max-w-sm rounded-2xl p-6 text-center" style={{ backgroundColor: `${BLUSH}10`, border: `1px solid ${BLUSH}30` }}>
              <div className="text-3xl mb-2" style={{ color: BLUSH }}>„</div>
              <blockquote className="text-sm font-medium leading-relaxed italic mb-3">
                Pflege ist keine Sentimentalität. Es ist eine Wissenschaft und eine Kunst, die eine ebenso große Hingabe erfordert wie jede andere Form der Arbeit.
              </blockquote>
              <cite className="text-[11px] not-italic font-semibold" style={{ color: MAUVE }}>— Florence Nightingale, 1860</cite>
            </div>
          </div>
        </VariantCard>

        {/* 49. Mnemonic-Karte */}
        <VariantCard label="L49" name="Eselsbrücke / Mnemonic" description="Merkspruch visuell hervorgehoben">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-2xl border-2 border-dashed p-5 text-center" style={{ borderColor: OAK, backgroundColor: `${OAK}05` }}>
              <div className="mb-2 text-2xl">🧠💡</div>
              <div className="mb-1 text-[10px] font-bold uppercase tracking-wider" style={{ color: OAK }}>Merkhilfe</div>
              <div className="text-base font-bold mb-2">
                {["A", "T", "L"].map((letter, i) => (
                  <span key={i}>
                    <span style={{ color: ROSE }}>{letter}</span>
                    <span className="text-[#1d1d1f]">{["ktivitäten des ", "äglichen ", "ebens"][i]}</span>
                  </span>
                ))}
              </div>
              <div className="text-xs text-[#6e6e73]">Die ATL beschreiben die grundlegenden Bedürfnisse die Pflege unterstützt.</div>
            </div>
          </div>
        </VariantCard>

        {/* 50. Fortschritts-Ticker */}
        <VariantCard label="L50" name="Live-Ticker" description="Echtzeit-Updates anderer Lernender">
          <div className="py-5">
            <div className="mx-auto max-w-sm space-y-1.5">
              <div className="mb-2 text-sm font-semibold flex items-center gap-2">
                <div className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: ROSE }} />
                Gerade aktiv in deiner Klasse
              </div>
              {[
                { name: "Ayşe T.", action: "hat Session 3 abgeschlossen", time: "vor 2 Min", emoji: "🎉" },
                { name: "Max K.", action: "lernt CE 01 — Ethik", time: "gerade eben", emoji: "📖" },
                { name: "Fatima A.", action: "hat 7-Tage-Streak erreicht!", time: "vor 15 Min", emoji: "🔥" },
                { name: "Jonas M.", action: "übt Fachbegriffe", time: "vor 30 Min", emoji: "🗣️" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-xl border px-3 py-2" style={{ borderColor: SAND }}>
                  <span className="text-base">{item.emoji}</span>
                  <div className="flex-1 text-[10px]">
                    <span className="font-semibold">{item.name}</span>{" "}
                    <span className="text-[#6e6e73]">{item.action}</span>
                  </div>
                  <span className="text-[9px] text-[#86868b] whitespace-nowrap">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            FALLARBEIT & PRAXIS-SZENARIEN
        ═══════════════════════════════════════════════ */}

        {/* 51. Fallarbeit — Mehrseitige Patientenakte */}
        <VariantCard label="L51" name="Patientenakte (Tabs)" description="Mehrseitige Akte: Stammdaten, Anamnese, Befunde, Verlauf">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-2xl border overflow-hidden" style={{ borderColor: SAND }}>
              {/* Tab Header */}
              <div className="flex border-b" style={{ borderColor: SAND, backgroundColor: `${BONE}50` }}>
                {["Stamm", "Anamnese", "Befunde", "Verlauf", "Pflege"].map((tab, i) => (
                  <button key={tab} className="flex-1 py-2.5 text-[10px] font-semibold transition-all border-b-2"
                    style={{
                      borderColor: i === 1 ? ROSE : "transparent",
                      color: i === 1 ? ROSE : "#86868b",
                      backgroundColor: i === 1 ? "white" : "transparent",
                    }}>
                    {tab}
                  </button>
                ))}
              </div>
              {/* Anamnese Tab Content */}
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: `${SAND}80` }}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ backgroundColor: `${ROSE}10` }}>👵</div>
                  <div>
                    <div className="text-sm font-bold">Frau Helga Schmidt, 82 J.</div>
                    <div className="text-[10px] text-[#86868b]">Aufnahme: 28.03.2026 · Station 3B</div>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold mb-1" style={{ color: OAK }}>Hauptdiagnose</div>
                  <div className="text-xs">Schenkelhalsfraktur rechts, Z.n. Hüft-TEP (30.03.)</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold mb-1" style={{ color: OAK }}>Nebendiagnosen</div>
                  <div className="flex flex-wrap gap-1">
                    {["Diabetes Typ 2", "Hypertonie", "Osteoporose"].map(d => (
                      <span key={d} className="rounded-full px-2 py-0.5 text-[9px] font-medium" style={{ backgroundColor: `${BLUSH}20`, color: MAUVE }}>{d}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold mb-1" style={{ color: OAK }}>Allergien</div>
                  <div className="flex gap-1">
                    <span className="rounded-full px-2 py-0.5 text-[9px] font-bold" style={{ backgroundColor: `${MAUVE}10`, color: MAUVE }}>⚠ Penicillin</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold mb-1" style={{ color: OAK }}>Sozialanamnese</div>
                  <div className="text-[11px] text-[#6e6e73]">Lebt allein, Tochter kommt 2x/Woche. Wohnung 2. OG ohne Aufzug. Vor Sturz selbstständig mobil mit Rollator.</div>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 52. Fallarbeit — Entscheidungsbaum */}
        <VariantCard label="L52" name="Entscheidungsbaum" description="Verzweigter Fall — jede Entscheidung hat Konsequenzen">
          <div className="py-5">
            <div className="mx-auto max-w-sm">
              {/* Situation */}
              <div className="rounded-xl p-3 mb-3 text-xs leading-relaxed" style={{ backgroundColor: `${ROSE}05`, border: `1px solid ${ROSE}20` }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">🏥</span>
                  <span className="text-[10px] font-bold" style={{ color: ROSE }}>SITUATION</span>
                </div>
                Du kommst in Zimmer 214. Frau Schmidt sitzt im Bett, hält sich den Kopf und sagt: <em>&quot;Mir ist so schwindelig, Schwester.&quot;</em> Ihr Gesicht ist blass.
              </div>
              {/* Previous choice */}
              <div className="flex items-center gap-2 mb-2 ml-4">
                <div className="h-6 w-0.5" style={{ backgroundColor: ROSE }} />
              </div>
              <div className="rounded-xl p-2 mb-2 ml-4 text-[10px]" style={{ backgroundColor: `${ROSE}08`, border: `1px solid ${ROSE}15` }}>
                <Check className="inline h-3 w-3 mr-1" style={{ color: ROSE }} />
                <span className="font-semibold">Deine Wahl:</span> Vitaldaten messen
              </div>
              {/* Result */}
              <div className="rounded-xl p-3 mb-3 ml-4 text-xs" style={{ backgroundColor: `${OAK}05`, border: `1px solid ${OAK}20` }}>
                <div className="text-[10px] font-bold mb-1" style={{ color: OAK }}>ERGEBNIS</div>
                <div className="grid grid-cols-3 gap-2 text-center mb-2">
                  <div className="rounded-lg p-1.5" style={{ backgroundColor: `${MAUVE}08` }}>
                    <div className="text-xs font-bold" style={{ color: MAUVE }}>85/50</div>
                    <div className="text-[8px] text-[#86868b]">RR</div>
                  </div>
                  <div className="rounded-lg p-1.5" style={{ backgroundColor: `${OAK}08` }}>
                    <div className="text-xs font-bold" style={{ color: OAK }}>98</div>
                    <div className="text-[8px] text-[#86868b]">Puls</div>
                  </div>
                  <div className="rounded-lg p-1.5" style={{ backgroundColor: `${TAUPE}08` }}>
                    <div className="text-xs font-bold" style={{ color: TAUPE }}>36.2°</div>
                    <div className="text-[8px] text-[#86868b]">Temp</div>
                  </div>
                </div>
                Der Blutdruck ist deutlich zu niedrig. Frau Schmidt fühlt sich noch schwächer.
              </div>
              {/* Next choices */}
              <div className="text-[10px] font-bold mb-2 ml-4" style={{ color: ROSE }}>Was tust du jetzt?</div>
              <div className="space-y-1.5 ml-4">
                {[
                  { text: "Flachlagerung + Beine hoch", icon: "🛏️", hint: "Kreislauf stabilisieren" },
                  { text: "Sofort Arzt rufen", icon: "📞", hint: "Notfall melden" },
                  { text: "Infusion vorbereiten", icon: "💧", hint: "Volumengabe" },
                  { text: "Abwarten und beobachten", icon: "👀", hint: "Verlauf dokumentieren" },
                ].map((opt, i) => (
                  <button key={i} className="flex w-full items-center gap-2 rounded-xl border p-2.5 text-left transition-all hover:shadow-sm"
                    style={{ borderColor: SAND }}>
                    <span className="text-base">{opt.icon}</span>
                    <div className="flex-1">
                      <div className="text-xs font-medium">{opt.text}</div>
                      <div className="text-[9px] text-[#86868b]">{opt.hint}</div>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-[#86868b]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 53. Fallarbeit — Pflegebericht schreiben */}
        <VariantCard label="L53" name="Pflegebericht schreiben" description="Freitext-Dokumentation mit KI-Feedback">
          <div className="py-5">
            <div className="mx-auto max-w-sm">
              <div className="rounded-xl p-3 mb-3 text-xs" style={{ backgroundColor: `${OAK}05`, border: `1px solid ${OAK}20` }}>
                <div className="text-[10px] font-bold mb-1" style={{ color: OAK }}>Aufgabe</div>
                Dokumentiere die Situation mit Frau Schmidt. Beschreibe: Was hast du beobachtet? Was hast du getan? Wie hat die Patientin reagiert?
              </div>
              <div className="rounded-xl border p-3 mb-2" style={{ borderColor: SAND }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold" style={{ color: TAUPE }}>Pflegebericht</span>
                  <span className="text-[9px] text-[#86868b]">28.03.2026, 14:30 Uhr</span>
                </div>
                <div className="rounded-lg border p-2 text-xs leading-relaxed" style={{ borderColor: SAND, backgroundColor: "#fafaf9" }}>
                  Pat. klagte über Schwindel und Übelkeit. Gesichtsfarbe blass. RR 85/50 mmHg, Puls 98/min. Flachlagerung durchgeführt, Beine erhöht. Arzt Dr. Weber informiert. Nach 15 Min RR 100/65, Pat. gibt an sich besser zu fühlen.<span className="border-r-2 animate-pulse" style={{ borderColor: ROSE }} />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[9px] text-[#86868b]">47 Wörter · Min. 30</span>
                  <button className="rounded-lg px-3 py-1 text-[10px] font-semibold text-white" style={{ backgroundColor: ROSE }}>KI-Feedback</button>
                </div>
              </div>
              {/* KI Feedback */}
              <div className="rounded-xl p-3 space-y-2" style={{ backgroundColor: `${ROSE}05`, border: `1px solid ${ROSE}15` }}>
                <div className="flex items-center gap-1.5">
                  <Brain className="h-3.5 w-3.5" style={{ color: ROSE }} />
                  <span className="text-[10px] font-bold" style={{ color: ROSE }}>KI-Feedback</span>
                </div>
                <div className="text-[11px] leading-relaxed space-y-1.5">
                  <div className="flex gap-2"><span>👍</span><span><strong>Gut:</strong> Vitaldaten korrekt dokumentiert, Maßnahme beschrieben.</span></div>
                  <div className="flex gap-2"><span>🔧</span><span><strong>Verbessern:</strong> Ergänze die Uhrzeit der Nachmessung und ob eine Anordnung erfolgte.</span></div>
                  <div className="flex gap-2"><span>💡</span><span><strong>Tipp:</strong> Nutze das ABEDL-Schema für strukturierte Dokumentation.</span></div>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 54. Fallarbeit — Pflegeplanung */}
        <VariantCard label="L54" name="Pflegeplanung erstellen" description="Strukturierte Planung: Problem → Ziel → Maßnahme → Evaluation">
          <div className="py-5">
            <div className="mx-auto max-w-sm space-y-2">
              <div className="text-sm font-semibold mb-1">Pflegeplan für Frau Schmidt:</div>
              {[
                { step: "P", label: "Problem", color: MAUVE, text: "Sturzgefahr aufgrund von Schwindel und Hypotonie nach Hüft-TEP" },
                { step: "Z", label: "Ziel", color: ROSE, text: "Pat. stürzt nicht. RR stabilisiert sich auf >100/60 innerhalb 48h." },
                { step: "M", label: "Maßnahmen", color: OAK, items: ["RR-Kontrolle 3x tgl.", "Mobilisation nur mit Begleitung", "Klingel in Reichweite", "Nachtlicht einrichten", "Flüssigkeitszufuhr dokumentieren"] },
                { step: "E", label: "Evaluation", color: TAUPE, text: "Nächste Evaluation: 30.03. — RR-Trend prüfen, Mobilität einschätzen" },
              ].map((item) => (
                <div key={item.step} className="rounded-xl border p-3" style={{ borderColor: `${item.color}30`, backgroundColor: `${item.color}05` }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg text-[10px] font-bold text-white" style={{ backgroundColor: item.color }}>
                      {item.step}
                    </div>
                    <span className="text-[10px] font-bold" style={{ color: item.color }}>{item.label}</span>
                  </div>
                  {item.text && <div className="text-[11px] leading-relaxed text-[#4a4a4a]">{item.text}</div>}
                  {item.items && (
                    <div className="space-y-1">
                      {item.items.map((m, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px]">
                          <div className="h-1 w-1 rounded-full" style={{ backgroundColor: item.color }} />
                          {m}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* 55. Fallarbeit — Verlaufskurve */}
        <VariantCard label="L55" name="Verlaufskurve" description="Vitalzeichen über Zeit — interaktives Diagramm">
          <div className="py-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-semibold">Vitalzeichen-Verlauf: Frau Schmidt</div>
              <div className="flex gap-1">
                {["24h", "3T", "7T"].map((t, i) => (
                  <button key={t} className="rounded-full px-2.5 py-0.5 text-[9px] font-semibold" style={{
                    backgroundColor: i === 0 ? `${ROSE}15` : "transparent",
                    color: i === 0 ? ROSE : "#86868b",
                  }}>{t}</button>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 320 120" className="w-full h-28">
              {/* Grid lines */}
              {[20, 40, 60, 80, 100].map(y => (
                <line key={y} x1="40" y1={y} x2="310" y2={y} stroke={BONE} strokeWidth="0.5" />
              ))}
              {/* Y-axis labels */}
              <text x="35" y="25" textAnchor="end" fontSize="7" fill="#86868b">140</text>
              <text x="35" y="55" textAnchor="end" fontSize="7" fill="#86868b">100</text>
              <text x="35" y="85" textAnchor="end" fontSize="7" fill="#86868b">60</text>
              {/* X-axis labels */}
              {["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"].map((t, i) => (
                <text key={t} x={50 + i * 50} y="115" textAnchor="middle" fontSize="7" fill="#86868b">{t}</text>
              ))}
              {/* Systolic BP line */}
              <polyline points="50,35 100,30 150,28 200,65 250,45 300,40" fill="none" stroke={ROSE} strokeWidth="2" strokeLinecap="round" />
              {/* Diastolic BP line */}
              <polyline points="50,65 100,62 150,60 200,85 250,72 300,68" fill="none" stroke={BLUSH} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4,3" />
              {/* Pulse line */}
              <polyline points="50,55 100,52 150,55 200,42 250,48 300,50" fill="none" stroke={OAK} strokeWidth="1.5" strokeLinecap="round" />
              {/* Alert dot at 14:00 */}
              <circle cx="200" cy="65" r="5" fill={MAUVE} opacity="0.3">
                <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="65" r="3" fill={MAUVE} />
              <text x="200" y="78" textAnchor="middle" fontSize="7" fill={MAUVE} fontWeight="600">85/50!</text>
            </svg>
            <div className="flex justify-center gap-4 mt-1 text-[9px]">
              <span className="flex items-center gap-1"><span className="h-2 w-4 rounded-full" style={{ backgroundColor: ROSE }} /> Systolisch</span>
              <span className="flex items-center gap-1"><span className="h-0.5 w-4 rounded-full border-b-2 border-dashed" style={{ borderColor: BLUSH }} /> Diastolisch</span>
              <span className="flex items-center gap-1"><span className="h-2 w-4 rounded-full" style={{ backgroundColor: OAK }} /> Puls</span>
            </div>
          </div>
        </VariantCard>

        {/* 56. Fallarbeit — Medikamenten-Check */}
        <VariantCard label="L56" name="Medikamenten-Check" description="Welche Medikamente bekommt die Patientin? Interaktionen prüfen">
          <div className="py-5">
            <div className="mx-auto max-w-sm">
              <div className="mb-3 text-sm font-semibold">Medikation Frau Schmidt:</div>
              <div className="space-y-1.5">
                {[
                  { name: "Metformin 500mg", time: "morgens", type: "Antidiabetikum", warn: false },
                  { name: "Ramipril 5mg", time: "morgens", type: "Antihypertensivum", warn: true, warnText: "Cave: RR-Abfall!" },
                  { name: "Clexane 40mg", time: "abends", type: "Thromboseprophylaxe", warn: false },
                  { name: "Ibuprofen 400mg", time: "bei Bedarf", type: "Analgetikum", warn: true, warnText: "Interaktion mit Ramipril!" },
                ].map((med, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border p-3" style={{
                    borderColor: med.warn ? `${MAUVE}30` : SAND,
                    backgroundColor: med.warn ? `${MAUVE}03` : "white",
                  }}>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm" style={{
                      backgroundColor: med.warn ? `${MAUVE}10` : `${TAUPE}10`,
                    }}>💊</div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold">{med.name}</div>
                      <div className="text-[9px] text-[#86868b]">{med.type} · {med.time}</div>
                      {med.warn && <div className="text-[9px] font-semibold mt-0.5" style={{ color: MAUVE }}>⚠ {med.warnText}</div>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl p-3 text-[11px]" style={{ backgroundColor: `${MAUVE}05`, border: `1px solid ${MAUVE}15` }}>
                <span className="font-bold" style={{ color: MAUVE }}>Frage:</span> Welches Medikament könnte den Blutdruckabfall bei Frau Schmidt verstärkt haben?
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 57. Fallarbeit — Übergabe / Schichtprotokoll */}
        <VariantCard label="L57" name="Schichtübergabe (SBAR)" description="Strukturierte Übergabe: Situation, Background, Assessment, Recommendation">
          <div className="py-5">
            <div className="mx-auto max-w-sm space-y-2">
              <div className="text-sm font-semibold mb-1">Übergabe an die Spätschicht:</div>
              {[
                { letter: "S", title: "Situation", color: ROSE, content: "Frau Schmidt, 82 J., Zi. 214. Heute um 14:30 Schwindel und RR-Abfall auf 85/50." },
                { letter: "B", title: "Background", color: OAK, content: "Z.n. Hüft-TEP am 30.03., Diabetes Typ 2, Hypertonie. Nimmt Ramipril + Metformin." },
                { letter: "A", title: "Assessment", color: TAUPE, content: "Vermutlich orthostatische Hypotonie, ggf. Medikamenten-Interaktion. Nach Flachlagerung RR auf 100/65 stabilisiert." },
                { letter: "R", title: "Recommendation", color: MAUVE, content: "RR-Kontrolle um 20:00, bei erneutem Abfall <90 syst. → Arzt informieren. Mobilisation nur mit Begleitung." },
              ].map(item => (
                <div key={item.letter} className="flex gap-3 rounded-xl border p-3" style={{ borderColor: `${item.color}25` }}>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white" style={{ backgroundColor: item.color }}>
                    {item.letter}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold mb-0.5" style={{ color: item.color }}>{item.title}</div>
                    <div className="text-[11px] leading-relaxed text-[#4a4a4a]">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* 58. Fallarbeit — Angehörigen-Gespräch */}
        <VariantCard label="L58" name="Angehörigen-Gespräch" description="Dialog-Simulation mit der Tochter der Patientin">
          <div className="py-5">
            <div className="mx-auto max-w-sm">
              <div className="rounded-xl p-2 mb-3 text-[10px] text-center" style={{ backgroundColor: `${BLUSH}15`, color: MAUVE }}>
                📞 Anruf von Tochter Frau Müller
              </div>
              <div className="space-y-2 mb-3">
                <div className="flex gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px]" style={{ backgroundColor: `${BLUSH}20`, color: MAUVE }}>👩</div>
                  <div className="rounded-2xl rounded-tl-sm px-3 py-2 text-[11px]" style={{ backgroundColor: `${BONE}` }}>
                    Hallo, ich bin die Tochter. Wie geht es meiner Mutter? Mir wurde gesagt, sie hatte einen Schwächeanfall?
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <div className="rounded-2xl rounded-tr-sm px-3 py-2 text-[11px] text-white" style={{ backgroundColor: ROSE }}>
                    Guten Tag Frau Müller. Ihrer Mutter geht es jetzt besser. Sie hatte einen kurzzeitigen Blutdruckabfall.
                  </div>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px]" style={{ backgroundColor: `${ROSE}20`, color: ROSE }}>Du</div>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px]" style={{ backgroundColor: `${BLUSH}20`, color: MAUVE }}>👩</div>
                  <div className="rounded-2xl rounded-tl-sm px-3 py-2 text-[11px]" style={{ backgroundColor: `${BONE}` }}>
                    Oh nein! Ist das gefährlich? Muss ich kommen? Was hat das zu bedeuten?
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-semibold mb-1.5" style={{ color: OAK }}>Wie antwortest du? (Empathisch + informativ)</div>
              <div className="space-y-1.5">
                {[
                  "Beruhigen: Werte haben sich stabilisiert, Ärztin ist informiert",
                  "Erklären: Was bei Blutdruckabfall passiert und wie wir reagiert haben",
                  "Empfehlung: Morgen Besuch möglich, telefonische Updates jederzeit",
                ].map((opt, i) => (
                  <button key={i} className="flex w-full items-center gap-2 rounded-xl border p-2.5 text-left text-[11px] transition-all hover:shadow-sm" style={{ borderColor: SAND }}>
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>{i + 1}</div>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 59. Fallarbeit — Risikoeinschätzung */}
        <VariantCard label="L59" name="Risiko-Assessment" description="Braden-Skala / Sturzrisiko — interaktiv ausfüllen">
          <div className="py-5">
            <div className="mx-auto max-w-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-semibold">Braden-Skala: Dekubitusrisiko</div>
                <div className="rounded-full px-2.5 py-0.5 text-[10px] font-bold" style={{ backgroundColor: `${MAUVE}10`, color: MAUVE }}>Score: 14 — Risiko!</div>
              </div>
              <div className="space-y-1.5">
                {[
                  { label: "Sensorisches Empfinden", value: 3, max: 4, desc: "Leicht eingeschränkt" },
                  { label: "Feuchtigkeit", value: 3, max: 4, desc: "Selten feucht" },
                  { label: "Aktivität", value: 2, max: 4, desc: "Sitzt gelegentlich" },
                  { label: "Mobilität", value: 2, max: 4, desc: "Stark eingeschränkt" },
                  { label: "Ernährung", value: 3, max: 4, desc: "Ausreichend" },
                  { label: "Reibung / Scherkräfte", value: 1, max: 3, desc: "Problem" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 rounded-lg border p-2" style={{ borderColor: SAND }}>
                    <div className="w-28 text-[10px] font-medium">{item.label}</div>
                    <div className="flex gap-0.5 flex-1">
                      {Array.from({ length: item.max }).map((_, i) => (
                        <div key={i} className="h-3 flex-1 rounded-sm" style={{
                          backgroundColor: i < item.value ? (item.value <= 2 ? MAUVE : ROSE) : `${BONE}`,
                        }} />
                      ))}
                    </div>
                    <div className="w-6 text-center text-[10px] font-bold" style={{ color: item.value <= 2 ? MAUVE : OAK }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 60. Fallarbeit — Wunddokumentation */}
        <VariantCard label="L60" name="Wunddokumentation" description="Wunde beschreiben, Foto markieren, Verlauf">
          <div className="py-5">
            <div className="mx-auto max-w-sm">
              <div className="mb-3 text-sm font-semibold">Wunddokumentation — Steißbein</div>
              <div className="grid grid-cols-[120px_1fr] gap-3 mb-3">
                {/* "Photo" placeholder */}
                <div className="relative rounded-xl overflow-hidden" style={{ backgroundColor: `${BLUSH}10`, border: `1px solid ${BLUSH}30` }}>
                  <div className="aspect-square flex items-center justify-center text-3xl">��</div>
                  <div className="absolute bottom-1 left-1 right-1 rounded-lg bg-white/80 px-1.5 py-0.5 text-center text-[8px] font-bold" style={{ color: MAUVE }}>
                    2.5 × 1.8 cm
                  </div>
                </div>
                {/* Details */}
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex gap-1.5">
                    <span className="font-semibold w-16" style={{ color: OAK }}>Grad:</span>
                    <span className="rounded-full px-2 py-0.5 text-[9px] font-bold" style={{ backgroundColor: `${MAUVE}10`, color: MAUVE }}>Grad 2</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="font-semibold w-16" style={{ color: OAK }}>Größe:</span>
                    <span>2.5 × 1.8 cm</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="font-semibold w-16" style={{ color: OAK }}>Wundrand:</span>
                    <span>Gerötet, leicht erhaben</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="font-semibold w-16" style={{ color: OAK }}>Belag:</span>
                    <span>Kein Belag, sauber</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="font-semibold w-16" style={{ color: OAK }}>Exsudat:</span>
                    <span>Gering, serös</span>
                  </div>
                </div>
              </div>
              {/* Verlauf mini-chart */}
              <div className="rounded-xl border p-3" style={{ borderColor: SAND }}>
                <div className="text-[10px] font-bold mb-2" style={{ color: OAK }}>Größenverlauf (cm²)</div>
                <div className="flex items-end gap-1 h-10">
                  {[5.2, 4.8, 4.5, 4.5, 4.1, 3.8].map((v, i) => (
                    <div key={i} className="flex-1 rounded-t-sm" style={{
                      height: `${(v / 5.2) * 100}%`,
                      backgroundColor: i === 5 ? ROSE : `${ROSE}40`,
                    }} />
                  ))}
                </div>
                <div className="flex justify-between text-[8px] text-[#86868b] mt-1">
                  <span>28.03</span><span>02.04</span>
                </div>
                <div className="text-[9px] mt-1" style={{ color: ROSE }}>↓ Tendenz: Wunde verkleinert sich</div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 61. Fallarbeit — Patienten-Aufklärung */}
        <VariantCard label="L61" name="Patientenedukation" description="Patientin etwas erklären — Sprachübung">
          <div className="py-5">
            <div className="mx-auto max-w-sm">
              <div className="rounded-xl p-3 mb-3" style={{ backgroundColor: `${ROSE}05`, border: `1px solid ${ROSE}15` }}>
                <div className="text-[10px] font-bold mb-1" style={{ color: ROSE }}>🎯 Aufgabe</div>
                <div className="text-xs leading-relaxed">
                  Frau Schmidt fragt: <em>&quot;Warum muss ich diese Strümpfe tragen? Die drücken so!&quot;</em><br />
                  Erkläre ihr in <strong>einfacher Sprache</strong> die Thromboseprophylaxe.
                </div>
              </div>
              <div className="rounded-2xl border-2 border-dashed p-5 text-center" style={{ borderColor: ROSE }}>
                <Mic className="mx-auto h-8 w-8 mb-2" style={{ color: ROSE }} />
                <div className="text-xs font-semibold mb-1">Sprich deine Antwort laut aus</div>
                <div className="text-[10px] text-[#86868b]">Whisper STT erkennt deine Sprache</div>
                <button className="mt-3 rounded-full px-5 py-2 text-xs font-semibold text-white" style={{ backgroundColor: ROSE }}>
                  🎙️ Aufnahme starten
                </button>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg p-2" style={{ backgroundColor: `${ROSE}08` }}>
                  <div className="text-[9px] font-bold" style={{ color: ROSE }}>Verständlichkeit</div>
                  <div className="text-xs font-bold">⭐⭐⭐⭐</div>
                </div>
                <div className="rounded-lg p-2" style={{ backgroundColor: `${OAK}08` }}>
                  <div className="text-[9px] font-bold" style={{ color: OAK }}>Fachlich korrekt</div>
                  <div className="text-xs font-bold">⭐⭐⭐⭐⭐</div>
                </div>
                <div className="rounded-lg p-2" style={{ backgroundColor: `${TAUPE}08` }}>
                  <div className="text-[9px] font-bold" style={{ color: TAUPE }}>Empathie</div>
                  <div className="text-xs font-bold">⭐⭐⭐</div>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 62. Fallarbeit — Ethisches Dilemma */}
        <VariantCard label="L62" name="Ethisches Dilemma" description="Keine richtige Antwort — verschiedene Perspektiven abwägen">
          <div className="py-5">
            <div className="mx-auto max-w-sm">
              <div className="rounded-xl p-4 mb-3" style={{ backgroundColor: `${MAUVE}05`, border: `1px solid ${MAUVE}15` }}>
                <div className="text-[10px] font-bold mb-1" style={{ color: MAUVE }}>⚖️ Ethisches Dilemma</div>
                <div className="text-xs leading-relaxed">
                  Frau Schmidt möchte unbedingt allein zur Toilette gehen. Sie sagt: <em>&quot;Ich bin doch kein Kind! Ich will das alleine schaffen.&quot;</em> Sie hat aber Sturzgefahr. Ihr Wunsch nach Autonomie steht gegen Ihre Fürsorgepflicht.
                </div>
              </div>
              <div className="space-y-2 mb-3">
                {[
                  { principle: "Autonomie", icon: "🗽", arg: "Patientin hat das Recht auf Selbstbestimmung", color: ROSE },
                  { principle: "Fürsorge", icon: "🛡️", arg: "Sturzrisiko ist real — Schutzpflicht", color: OAK },
                  { principle: "Kompromiss", icon: "🤝", arg: "Begleitung anbieten, Klingel-System vereinbaren", color: TAUPE },
                ].map(item => (
                  <div key={item.principle} className="rounded-xl border p-3" style={{ borderColor: `${item.color}25` }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-[10px] font-bold" style={{ color: item.color }}>{item.principle}</span>
                    </div>
                    <div className="text-[11px] text-[#4a4a4a]">{item.arg}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: `${BONE}` }}>
                <div className="text-[10px] font-bold mb-1" style={{ color: TAUPE }}>Deine Position?</div>
                <div className="text-[10px] text-[#86868b]">Es gibt keine &quot;richtige&quot; Antwort — begründe deine Abwägung</div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 63. Fallarbeit — Kompetenz-Matrix */}
        <VariantCard label="L63" name="Kompetenz-Check" description="Welche Kompetenzen trainiert dieser Fall?">
          <div className="py-5">
            <div className="mb-3 text-sm font-semibold">Fall &quot;Frau Schmidt&quot; — trainierte Kompetenzen:</div>
            <div className="space-y-1.5">
              {[
                { kb: "KB I", name: "Pflegeprozess", pct: 95, skills: ["Informationssammlung", "Maßnahmenplanung", "Evaluation"] },
                { kb: "KB II", name: "Kommunikation", pct: 80, skills: ["Angehörigengespräch", "Patientenedukation"] },
                { kb: "KB III", name: "Intra-/Interprofessionell", pct: 70, skills: ["SBAR-Übergabe", "Arzt-Information"] },
                { kb: "KB IV", name: "Recht & Ethik", pct: 60, skills: ["Autonomie vs. Fürsorge", "Dokumentationspflicht"] },
                { kb: "KB V", name: "Wissenschaft", pct: 45, skills: ["Braden-Skala", "Evidenzbasierte Prophylaxe"] },
              ].map(item => (
                <div key={item.kb} className="rounded-xl border p-3" style={{ borderColor: SAND }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-bold rounded px-1.5 py-0.5 text-white" style={{ backgroundColor: ROSE }}>{item.kb}</span>
                    <span className="text-[11px] font-semibold">{item.name}</span>
                    <span className="ml-auto text-[10px] font-bold" style={{ color: ROSE }}>{item.pct}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full mb-1.5" style={{ backgroundColor: BONE }}>
                    <div className="h-full rounded-full" style={{ width: `${item.pct}%`, backgroundColor: ROSE }} />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.skills.map(s => (
                      <span key={s} className="rounded-full px-2 py-0.5 text-[8px] font-medium" style={{ backgroundColor: `${TAUPE}10`, color: TAUPE }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* 64. Fallarbeit — Fall-Zusammenfassung */}
        <VariantCard label="L64" name="Fall-Abschluss" description="Kompletter Rückblick nach langer Fallarbeit">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-2xl overflow-hidden border" style={{ borderColor: SAND }}>
              <div className="p-5 text-center" style={{ background: `linear-gradient(to bottom, ${ROSE}10, white)` }}>
                <div className="text-3xl mb-2">📋</div>
                <div className="text-base font-bold mb-0.5">Fallarbeit abgeschlossen!</div>
                <div className="text-[10px] text-[#86868b]">Fall &quot;Frau Schmidt&quot; · 12 Stationen · 35 Min</div>
              </div>
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl p-2" style={{ backgroundColor: `${ROSE}08` }}>
                    <div className="text-lg font-bold" style={{ color: ROSE }}>87%</div>
                    <div className="text-[8px] text-[#86868b]">Richtig</div>
                  </div>
                  <div className="rounded-xl p-2" style={{ backgroundColor: `${OAK}08` }}>
                    <div className="text-lg font-bold" style={{ color: OAK }}>+280</div>
                    <div className="text-[8px] text-[#86868b]">XP</div>
                  </div>
                  <div className="rounded-xl p-2" style={{ backgroundColor: `${TAUPE}08` }}>
                    <div className="text-lg font-bold" style={{ color: TAUPE }}>5/5</div>
                    <div className="text-[8px] text-[#86868b]">KB trainiert</div>
                  </div>
                </div>
                <div className="rounded-xl p-3 text-[11px] space-y-1" style={{ backgroundColor: `${BONE}` }}>
                  <div className="font-semibold mb-1">Was du gelernt hast:</div>
                  <div className="flex gap-2"><Check className="h-3 w-3 shrink-0 mt-0.5" style={{ color: ROSE }} /> Vitaldaten-Überwachung bei Hypotonie</div>
                  <div className="flex gap-2"><Check className="h-3 w-3 shrink-0 mt-0.5" style={{ color: ROSE }} /> SBAR-Übergabe strukturiert durchführen</div>
                  <div className="flex gap-2"><Check className="h-3 w-3 shrink-0 mt-0.5" style={{ color: ROSE }} /> Ethische Abwägung Autonomie vs. Fürsorge</div>
                  <div className="flex gap-2"><AlertCircle className="h-3 w-3 shrink-0 mt-0.5" style={{ color: MAUVE }} /> Medikamenten-Interaktionen — wiederholen</div>
                </div>
                <button className="w-full rounded-xl py-2.5 text-xs font-semibold text-white" style={{ backgroundColor: ROSE }}>
                  Nächster Fall starten →
                </button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* 65. Bonus: Patienten-Perspektive */}
        <VariantCard label="L65" name="Patienten-Tagebuch" description="Perspektivwechsel — wie erlebt die Patientin den Tag?">
          <div className="py-5">
            <div className="mx-auto max-w-sm rounded-2xl border-2 border-dashed p-5" style={{ borderColor: BLUSH, backgroundColor: `${BLUSH}05` }}>
              <div className="text-center mb-3">
                <div className="text-2xl mb-1">📖</div>
                <div className="text-xs font-bold" style={{ color: MAUVE }}>Helgas Tagebuch — Tag 5</div>
              </div>
              <div className="text-xs leading-relaxed italic text-[#4a4a4a] space-y-2">
                <p>&quot;Heute Morgen konnte ich zum ersten Mal allein am Bettrand sitzen. Die junge Schwester hat mich ermutigt, obwohl ich solche Angst hatte umzufallen.&quot;</p>
                <p>&quot;Mittags wurde mir plötzlich schwarz vor Augen. Ich hatte solche Angst. Aber die Schwester war sofort da und hat ganz ruhig meinen Blutdruck gemessen. Das hat mich beruhigt.&quot;</p>
                <p>&quot;Am Nachmittag hat meine Tochter angerufen. Ich hoffe sie macht sich nicht zu viele Sorgen...&quot;</p>
              </div>
              <div className="mt-3 rounded-xl p-2 text-center text-[10px]" style={{ backgroundColor: `${TAUPE}08` }}>
                <span className="font-bold" style={{ color: TAUPE }}>Reflexion:</span> Was sagt dir dieser Eintrag über Frau Schmidts Bedürfnisse?
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 16: MAGIC UI + BILD & AUDIO
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="magic" title="Magic UI + Bild & Audio" subtitle="Dezente Animationen, Bild-Interaktionen, Audio-Zusammenfassungen & Rückfragen" />

        {/* ── L66: Marquee — Fachbegriffe-Laufband ── */}
        <VariantCard label="L66" name="Fachbegriffe-Marquee" description="Dezentes Laufband mit Fachbegriffen — Magic UI Marquee">
          <div className="py-4">
            <Marquee pauseOnHover className="[--duration:25s]">
              {["Dekubitus", "Thromboseprophylaxe", "Kontraktur", "Aspiration", "Pneumonie", "Exsikkose", "Dysphagie", "Obstipation"].map((term) => (
                <div key={term} className="mx-3 rounded-full px-4 py-1.5 text-xs font-medium" style={{ backgroundColor: `${BLUSH}30`, color: MAUVE, border: `1px solid ${BLUSH}` }}>
                  {term}
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="mt-2 [--duration:30s]">
              {["Bradykardie", "Tachykardie", "Zyanose", "Apnoe", "Ödem", "Aszites", "Ikterus", "Anämie"].map((term) => (
                <div key={term} className="mx-3 rounded-full px-4 py-1.5 text-xs font-medium" style={{ backgroundColor: `${SAND}40`, color: OAK, border: `1px solid ${SAND}` }}>
                  {term}
                </div>
              ))}
            </Marquee>
          </div>
        </VariantCard>

        {/* ── L67: Typing Animation — KI erklärt ── */}
        <VariantCard label="L67" name="KI-Erklärung (Typing)" description="Text erscheint wie getippt — Magic UI TypingAnimation">
          <div className="py-6">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: `${ROSE}20` }}>
                <Sparkles className="h-3 w-3" style={{ color: ROSE }} />
              </div>
              <span className="text-xs font-semibold" style={{ color: MAUVE }}>KI-Tutor</span>
            </div>
            <TypingAnimation className="text-sm leading-relaxed text-[#1d1d1f]" duration={30}>
              Ein Dekubitus entsteht durch anhaltenden Druck auf die Haut. Besonders gefährdet sind Stellen über Knochenvorsprüngen — zum Beispiel das Steißbein, die Fersen oder die Hüftknochen. Stell dir vor, du drückst deinen Finger fest auf deinen Arm...
            </TypingAnimation>
          </div>
        </VariantCard>

        {/* ── L68: Sparkles Text — Lernziel erreicht ── */}
        <VariantCard label="L68" name="Lernziel erreicht ✨" description="Dezente Sparkles auf Erfolgstexten — Magic UI SparklesText">
          <div className="flex flex-col items-center py-8">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: `${ROSE}15` }}>
              <Trophy className="h-7 w-7" style={{ color: ROSE }} />
            </div>
            <SparklesText className="text-lg font-bold" sparklesCount={6} colors={{ first: ROSE, second: BLUSH }}>Lernziel erreicht!</SparklesText>
            <p className="mt-2 text-xs text-[#86868b]">Du verstehst jetzt die 4 Dekubitus-Stadien</p>
          </div>
        </VariantCard>

        {/* ── L69: Animated Gradient Text — Session-Titel ── */}
        <VariantCard label="L69" name="Gradient Session-Titel" description="Sanfter Farbverlauf-Text — Magic UI AnimatedGradientText">
          <div className="flex flex-col items-center py-8">
            <AnimatedGradientText colorFrom={ROSE} colorTo={MAUVE} speed={0.5} className="text-xl font-bold">
              Session 3 — Prophylaxen verstehen
            </AnimatedGradientText>
            <p className="mt-3 text-xs text-[#86868b]">Heute lernst du 4 wichtige Prophylaxen kennen</p>
          </div>
        </VariantCard>

        {/* ── L70: Pulsating + Shiny Buttons ── */}
        <VariantCard label="L70" name="Animierte Buttons" description="Dezent pulsierende & schimmernde Buttons — Magic UI">
          <div className="flex flex-wrap items-center justify-center gap-4 py-6">
            <PulsatingButton pulseColor={ROSE} duration="2s" className="rounded-xl px-6 py-2.5 text-sm font-semibold text-white" style={{ backgroundColor: ROSE }}>
              Weiter lernen
            </PulsatingButton>
            <ShinyButton className="rounded-xl px-6 py-2.5 text-sm font-semibold" style={{ color: MAUVE }}>
              Wiederholung starten
            </ShinyButton>
          </div>
        </VariantCard>

        {/* ── L71: Ripple — Themen-Auswahl ── */}
        <VariantCard label="L71" name="Ripple-Hintergrund" description="Dezente Wellenanimation als Hintergrund — Magic UI Ripple">
          <div className="relative flex h-48 flex-col items-center justify-center overflow-hidden rounded-xl" style={{ backgroundColor: `${BONE}` }}>
            <Ripple mainCircleSize={120} mainCircleOpacity={0.12} numCircles={5} />
            <div className="relative z-10 text-center">
              <GraduationCap className="mx-auto mb-2 h-8 w-8" style={{ color: ROSE }} />
              <p className="text-sm font-bold">Wähle dein nächstes Thema</p>
              <p className="text-[11px] text-[#86868b]">3 Themen verfügbar</p>
            </div>
          </div>
        </VariantCard>

        {/* ── L72: Bild mit Zoom & Beschriftung ── */}
        <VariantCard label="L72" name="Bild-Zoom & Beschriftung" description="Anatomie-Bild mit Zoom-Geste und beschrifteten Punkten">
          <div className="py-4">
            <div className="relative overflow-hidden rounded-xl" style={{ backgroundColor: `${BONE}` }}>
              {/* Simuliertes Anatomie-Bild */}
              <div className="relative mx-auto h-56 w-full max-w-sm">
                <svg viewBox="0 0 300 200" className="h-full w-full">
                  {/* Körper-Silhouette */}
                  <ellipse cx="150" cy="60" rx="25" ry="30" fill={`${BLUSH}60`} stroke={ROSE} strokeWidth="1.5"/>
                  <rect x="130" y="85" width="40" height="70" rx="8" fill={`${BLUSH}40`} stroke={ROSE} strokeWidth="1.5"/>
                  <rect x="110" y="88" width="20" height="50" rx="6" fill={`${BLUSH}30`} stroke={ROSE} strokeWidth="1"/>
                  <rect x="170" y="88" width="20" height="50" rx="6" fill={`${BLUSH}30`} stroke={ROSE} strokeWidth="1"/>
                  <rect x="132" y="155" width="15" height="40" rx="5" fill={`${BLUSH}30`} stroke={ROSE} strokeWidth="1"/>
                  <rect x="153" y="155" width="15" height="40" rx="5" fill={`${BLUSH}30`} stroke={ROSE} strokeWidth="1"/>
                  {/* Hotspot-Punkte */}
                  <circle cx="150" cy="160" r="8" fill={ROSE} opacity="0.8"><animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/></circle>
                  <text x="175" y="163" fontSize="9" fill={MAUVE} fontWeight="600">Steißbein</text>
                  <circle cx="140" cy="193" r="6" fill={MAUVE} opacity="0.8"><animate attributeName="r" values="4;8;4" dur="2.5s" repeatCount="indefinite"/></circle>
                  <text x="155" y="196" fontSize="9" fill={MAUVE} fontWeight="600">Fersen</text>
                  <circle cx="120" cy="110" r="6" fill={OAK} opacity="0.8"><animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite"/></circle>
                  <text x="80" y="106" fontSize="9" fill={OAK} fontWeight="600">Ellenbogen</text>
                </svg>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[11px] font-medium" style={{ color: MAUVE }}>Dekubitus-Prädilektionsstellen</span>
                <button className="flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-medium" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>
                  <ZoomIn className="h-3 w-3" /> Vergrößern
                </button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L73: Bild-Vergleich (Vorher/Nachher Slider) ── */}
        <VariantCard label="L73" name="Bild-Vergleich Slider" description="Zwei Zustände vergleichen — z.B. Wunde Tag 1 vs. Tag 7">
          <div className="py-4">
            <ImageCompareSlider />
          </div>
        </VariantCard>

        {/* ── L74: Bild-Rückfrage — Was siehst du? ── */}
        <VariantCard label="L74" name="Bild-Rückfrage" description="Bild zeigen → Schüler muss beschreiben was er sieht">
          <div className="py-4">
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              <div className="h-40 flex items-center justify-center" style={{ backgroundColor: `${BONE}` }}>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-xl" style={{ backgroundColor: `${BLUSH}30` }}>
                    <Camera className="h-8 w-8" style={{ color: ROSE }} />
                  </div>
                  <span className="text-xs text-[#86868b]">Klinisches Foto: Grad II Dekubitus</span>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" style={{ color: MAUVE }} />
                  <span className="text-sm font-semibold" style={{ color: MAUVE }}>Was fällt dir auf?</span>
                </div>
                <p className="mb-3 text-xs text-[#86868b]">Beschreibe was du auf dem Bild siehst. Achte auf Größe, Farbe und Tiefe.</p>
                <div className="rounded-lg p-3" style={{ backgroundColor: `${BONE}` }}>
                  <p className="text-xs italic text-[#86868b]">Ich sehe eine Rötung am Steißbein, ca. 3×4 cm. Die Haut ist intakt aber gerötet...</p>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Mic className="h-4 w-4" style={{ color: ROSE }} />
                  <span className="text-[10px]" style={{ color: ROSE }}>Oder: Sprich deine Antwort ein</span>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L75: Bildergalerie mit Rückfrage ── */}
        <VariantCard label="L75" name="Bildergalerie + Quiz" description="3 Bilder durchblättern → Frage zu einem davon">
          <div className="py-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {[
                { label: "Stadium I", desc: "Nicht wegdrückbare Rötung", color: `${BLUSH}40` },
                { label: "Stadium II", desc: "Blasenbildung, Teilverlust", color: `${ROSE}30` },
                { label: "Stadium III", desc: "Vollständiger Hautverlust", color: `${MAUVE}25` },
              ].map((img, i) => (
                <div key={i} className="min-w-[140px] flex-shrink-0 rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
                  <div className="h-24 flex items-center justify-center" style={{ backgroundColor: img.color }}>
                    <Image className="h-8 w-8" style={{ color: MAUVE, opacity: 0.5 }} />
                  </div>
                  <div className="p-2">
                    <p className="text-[11px] font-semibold">{img.label}</p>
                    <p className="text-[9px] text-[#86868b]">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl p-3" style={{ backgroundColor: `${MAUVE}10` }}>
              <p className="text-xs font-semibold" style={{ color: MAUVE }}>📸 Welches Stadium zeigt Bild 2?</p>
              <div className="mt-2 flex gap-2">
                {["Stadium I", "Stadium II", "Stadium III"].map((opt, i) => (
                  <button key={i} className="rounded-lg px-3 py-1.5 text-[11px] font-medium" style={{ backgroundColor: i === 1 ? `${ROSE}20` : `${BONE}`, color: i === 1 ? ROSE : "#86868b", border: `1px solid ${i === 1 ? ROSE : SAND}` }}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L76: Audio-Zusammenfassung ── */}
        <VariantCard label="L76" name="Audio-Zusammenfassung" description="Session-Inhalt als Audio-Player — zum Hören auf dem Weg">
          <div className="py-4">
            <div className="rounded-xl p-4" style={{ backgroundColor: `${BONE}`, border: `1px solid ${SAND}` }}>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${ROSE}20` }}>
                  <Headphones className="h-6 w-6" style={{ color: ROSE }} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Session 3 — Zusammenfassung</p>
                  <p className="text-[11px] text-[#86868b]">3:42 min · KI-generiert</p>
                </div>
              </div>
              {/* Waveform */}
              <div className="mb-3 flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: ROSE }}>
                  <Play className="h-4 w-4 text-white ml-0.5" />
                </button>
                <div className="flex-1">
                  <div className="flex items-end gap-[2px] h-8">
                    {Array.from({ length: 40 }, (_, i) => {
                      const h = Math.random() * 100
                      const played = i < 15
                      return <div key={i} className="flex-1 rounded-full" style={{ height: `${20 + h * 0.8}%`, backgroundColor: played ? ROSE : `${SAND}`, transition: "height 0.3s" }} />
                    })}
                  </div>
                </div>
                <span className="text-[10px] font-medium text-[#86868b]">1:23</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <button className="rounded-full px-2 py-0.5 text-[9px] font-medium" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>1×</button>
                  <button className="rounded-full px-2 py-0.5 text-[9px] text-[#86868b]" style={{ backgroundColor: `${SAND}40` }}>1.5×</button>
                  <button className="rounded-full px-2 py-0.5 text-[9px] text-[#86868b]" style={{ backgroundColor: `${SAND}40` }}>2×</button>
                </div>
                <button className="flex items-center gap-1 text-[10px]" style={{ color: ROSE }}>
                  <SkipForward className="h-3 w-3" /> Kapitel
                </button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L77: Audio-Rückfrage (nach Audio) ── */}
        <VariantCard label="L77" name="Audio-Rückfrage" description="Nach dem Hören — Verständnisfrage zur Audio-Zusammenfassung">
          <div className="py-4">
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              <div className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: `${BONE}` }}>
                <FileAudio className="h-5 w-5" style={{ color: OAK }} />
                <div>
                  <p className="text-[11px] font-semibold">Du hast gerade gehört:</p>
                  <p className="text-[10px] text-[#86868b]">Dekubitus-Prophylaxe — Die 5 wichtigsten Maßnahmen</p>
                </div>
                <Check className="ml-auto h-4 w-4" style={{ color: ROSE }} />
              </div>
              <div className="p-4">
                <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>🎧 Was war die wichtigste Prophylaxe-Maßnahme?</p>
                {["Regelmäßige Lagerungswechsel", "Hautpflege mit Creme", "Schmerzmedikation", "Bettruhe einhalten"].map((opt, i) => (
                  <div key={i} className="mb-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs" style={{ backgroundColor: i === 0 ? `${ROSE}12` : `${BONE}`, border: `1px solid ${i === 0 ? ROSE : "transparent"}`, color: i === 0 ? ROSE : "#1d1d1f", fontWeight: i === 0 ? 600 : 400 }}>
                    <div className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold" style={{ backgroundColor: i === 0 ? ROSE : SAND, color: i === 0 ? "white" : "#86868b" }}>
                      {String.fromCharCode(65 + i)}
                    </div>
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L78: Audio-Diktat (Fachbegriffe hören & schreiben) ── */}
        <VariantCard label="L78" name="Audio-Diktat" description="Fachbegriff wird vorgelesen → Schüler tippt ihn korrekt">
          <div className="py-4">
            <div className="rounded-xl p-4" style={{ backgroundColor: `${BONE}` }}>
              <div className="mb-4 flex items-center justify-center">
                <button className="flex h-16 w-16 items-center justify-center rounded-full shadow-lg" style={{ backgroundColor: ROSE }}>
                  <Volume2 className="h-7 w-7 text-white" />
                </button>
              </div>
              <p className="mb-1 text-center text-[11px] text-[#86868b]">Höre den Fachbegriff und tippe ihn ein:</p>
              <div className="mx-auto max-w-xs">
                <div className="flex justify-center gap-1.5 mb-3">
                  {["T","h","r","o","m","b","o","s","e"].map((letter, i) => (
                    <div key={i} className="flex h-8 w-7 items-center justify-center rounded text-sm font-bold" style={{ backgroundColor: i < 6 ? `${ROSE}15` : "white", color: i < 6 ? MAUVE : "#ccc", border: `1.5px solid ${i < 6 ? ROSE : SAND}` }}>
                      {i < 6 ? letter : "_"}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-1 flex-1 rounded-full" style={{ backgroundColor: SAND }}>
                    <div className="h-full rounded-full" style={{ width: "66%", backgroundColor: ROSE }} />
                  </div>
                  <span className="text-[10px] font-medium" style={{ color: ROSE }}>6/9</span>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L79: Bild-Sequenz (Ablauf als Bildfolge) ── */}
        <VariantCard label="L79" name="Bild-Sequenz" description="Schüler ordnet Bilder einer Handlung in die richtige Reihenfolge">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Bringe die Schritte der Händedesinfektion in die richtige Reihenfolge:</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { step: "3", label: "Handflächen", icon: "🤲" },
                { step: "1", label: "Desinfektionsmittel", icon: "🧴" },
                { step: "5", label: "Daumen", icon: "👍" },
                { step: "2", label: "Handrücken", icon: "✋" },
                { step: "6", label: "Fingerspitzen", icon: "☝️" },
                { step: "4", label: "Fingerzwischenräume", icon: "🖐️" },
              ].map((item, i) => (
                <motion.div key={i} className="flex flex-col items-center rounded-xl p-3 cursor-grab" style={{ backgroundColor: `${BONE}`, border: `1.5px dashed ${SAND}` }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <span className="text-2xl mb-1">{item.icon}</span>
                  <span className="text-[10px] font-medium text-center">{item.label}</span>
                  <span className="mt-1 text-[9px] font-bold" style={{ color: ROSE }}>Schritt ?</span>
                </motion.div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L80: Audio-Pflege-Situation (Hören & Analysieren) ── */}
        <VariantCard label="L80" name="Pflege-Situation hören" description="Audio einer Pflegesituation → Schüler analysiert was passiert">
          <div className="py-4">
            <div className="rounded-xl" style={{ border: `1px solid ${SAND}` }}>
              <div className="rounded-t-xl px-4 py-3" style={{ backgroundColor: `${MAUVE}10` }}>
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4" style={{ color: MAUVE }} />
                  <span className="text-xs font-semibold" style={{ color: MAUVE }}>Pflege-Situation anhören</span>
                </div>
                <p className="mt-1 text-[10px] text-[#86868b]">Dialog: Pflegekraft Ayşe bemerkt etwas bei Herrn Weber</p>
              </div>
              <div className="px-4 py-3">
                {/* Mini-Player */}
                <div className="mb-3 flex items-center gap-2 rounded-lg px-3 py-2" style={{ backgroundColor: `${BONE}` }}>
                  <button className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: ROSE }}>
                    <Play className="h-3.5 w-3.5 text-white ml-0.5" />
                  </button>
                  <div className="flex-1 h-1 rounded-full" style={{ backgroundColor: SAND }}>
                    <div className="h-full rounded-full" style={{ width: "45%", backgroundColor: ROSE }} />
                  </div>
                  <span className="text-[10px] text-[#86868b]">0:38</span>
                </div>
                {/* Transkript-Auszug */}
                <div className="mb-3 rounded-lg p-2.5 text-[11px] italic" style={{ backgroundColor: `${BONE}`, color: "#555" }}>
                  &ldquo;Herr Weber, Ihre Haut am Steißbein sieht heute anders aus. Ist das neu? Haben Sie Schmerzen?&rdquo;
                </div>
                {/* Rückfrage */}
                <p className="mb-2 text-xs font-semibold" style={{ color: MAUVE }}>Was sollte Ayşe als nächstes tun?</p>
                <div className="space-y-1.5">
                  {["Dokumentation + Arzt informieren", "Nur beobachten, morgen nochmal schauen", "Lagerung ändern und Creme auftragen"].map((opt, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-2 text-[11px]" style={{ backgroundColor: i === 0 ? `${ROSE}10` : "transparent", border: `1px solid ${i === 0 ? ROSE : SAND}40` }}>
                      <div className="h-3 w-3 rounded-full" style={{ border: `2px solid ${i === 0 ? ROSE : SAND}`, backgroundColor: i === 0 ? ROSE : "transparent" }} />
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L81: Bild-Annotation (Auf Bild zeichnen) ── */}
        <VariantCard label="L81" name="Bild-Annotation" description="Schüler markiert auf einem Bild Bereiche mit dem Finger">
          <div className="py-4">
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              <div className="relative h-48 flex items-center justify-center" style={{ backgroundColor: `${BONE}` }}>
                <svg viewBox="0 0 200 160" className="h-full">
                  {/* Vereinfachter Rücken */}
                  <rect x="60" y="10" width="80" height="140" rx="20" fill={`${BLUSH}40`} stroke={ROSE} strokeWidth="1"/>
                  <ellipse cx="100" cy="15" rx="20" ry="12" fill={`${BLUSH}30`} stroke={ROSE} strokeWidth="1"/>
                  {/* Markierung vom Schüler */}
                  <circle cx="100" cy="125" r="14" fill="none" stroke={ROSE} strokeWidth="2.5" strokeDasharray="4 2" opacity="0.8"/>
                  <line x1="115" y1="120" x2="160" y2="105" stroke={ROSE} strokeWidth="1.5"/>
                  <text x="135" y="100" fontSize="8" fill={MAUVE} fontWeight="600">Steißbein ✓</text>
                </svg>
                {/* Tool-Bar */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full px-3 py-1.5 shadow-sm" style={{ backgroundColor: "white" }}>
                  <button className="rounded-full p-1.5" style={{ backgroundColor: `${ROSE}20` }}><PenTool className="h-3 w-3" style={{ color: ROSE }} /></button>
                  <button className="rounded-full p-1.5"><MousePointer className="h-3 w-3 text-[#86868b]" /></button>
                  <button className="rounded-full p-1.5"><X className="h-3 w-3 text-[#86868b]" /></button>
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="text-xs font-semibold" style={{ color: MAUVE }}>Markiere die Stelle mit dem höchsten Dekubitus-Risiko</p>
                <p className="text-[10px] text-[#86868b]">Tippe und zeichne einen Kreis um die Stelle</p>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L82: Audio-Tagebuch (Reflexion einsprechen) ── */}
        <VariantCard label="L82" name="Audio-Reflexion" description="Schüler spricht seine Reflexion ein statt zu tippen">
          <div className="py-4">
            <div className="rounded-xl p-4" style={{ backgroundColor: `${BONE}` }}>
              <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Was hast du heute in der Praxis erlebt?</p>
              <p className="mb-4 text-[11px] text-[#86868b]">Erzähl in 1-2 Minuten: Welche Pflegesituation hat dich überrascht?</p>
              <div className="flex flex-col items-center">
                <motion.button
                  className="flex h-20 w-20 items-center justify-center rounded-full shadow-lg"
                  style={{ backgroundColor: ROSE }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Mic className="h-8 w-8 text-white" />
                </motion.button>
                <p className="mt-3 text-[11px] font-medium" style={{ color: ROSE }}>Antippen zum Aufnehmen</p>
                <div className="mt-4 w-full rounded-lg p-3" style={{ backgroundColor: "white", border: `1px solid ${SAND}` }}>
                  <div className="flex items-center gap-2 text-[10px] text-[#86868b]">
                    <FileAudio className="h-3.5 w-3.5" />
                    <span>Letzte Aufnahme: 1:23 min — Gestern</span>
                  </div>
                  <p className="mt-1 text-[10px] italic text-[#86868b]">KI-Transkript: &ldquo;Heute habe ich zum ersten Mal eine Wundversorgung gemacht...&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L83: Bild-Memory (Bild ↔ Fachbegriff) ── */}
        <VariantCard label="L83" name="Bild-Memory" description="Bilder den passenden Fachbegriffen zuordnen — Memory-Spiel">
          <div className="py-4">
            <p className="mb-3 text-xs font-medium text-[#86868b]">Finde die Paare: Bild ↔ Fachbegriff</p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { type: "img", label: "🫁", flipped: true },
                { type: "text", label: "Pneumonie", flipped: false },
                { type: "img", label: "🦴", flipped: false },
                { type: "text", label: "Dekubitus", flipped: true },
                { type: "text", label: "Aspiration", flipped: false },
                { type: "img", label: "💧", flipped: true },
                { type: "text", label: "Exsikkose", flipped: true },
                { type: "img", label: "🫗", flipped: false },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="flex h-16 items-center justify-center rounded-xl text-center cursor-pointer"
                  style={{
                    backgroundColor: card.flipped ? (card.type === "img" ? `${BLUSH}30` : `${ROSE}15`) : `${MAUVE}`,
                    border: `1.5px solid ${card.flipped ? ROSE : "transparent"}`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {card.flipped ? (
                    <span className={card.type === "img" ? "text-2xl" : "text-[10px] font-semibold px-1"} style={{ color: card.type === "text" ? MAUVE : undefined }}>
                      {card.label}
                    </span>
                  ) : (
                    <span className="text-lg" style={{ color: `${MAUVE}80` }}>?</span>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] text-[#86868b]">2 von 4 Paaren gefunden</span>
              <span className="text-[10px] font-medium" style={{ color: ROSE }}>6 Versuche</span>
            </div>
          </div>
        </VariantCard>

        {/* ── L84: Audio-Quiz (Geräusche erkennen) ── */}
        <VariantCard label="L84" name="Geräusche-Quiz" description="Klinische Geräusche erkennen — Auskultation, Atemgeräusche">
          <div className="py-4">
            <div className="rounded-xl p-4" style={{ backgroundColor: `${BONE}` }}>
              <div className="mb-4 flex items-center justify-center">
                <div className="relative">
                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${ROSE}20` }}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Stethoscope className="h-8 w-8" style={{ color: ROSE }} />
                  </motion.div>
                  {/* Sound-Wellen */}
                  {[1,2,3].map(ring => (
                    <motion.div
                      key={ring}
                      className="absolute inset-0 rounded-full"
                      style={{ border: `1.5px solid ${ROSE}` }}
                      animate={{ scale: [1, 1.3 + ring * 0.2], opacity: [0.4, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: ring * 0.3 }}
                    />
                  ))}
                </div>
              </div>
              <p className="mb-1 text-center text-xs font-semibold">Welches Atemgeräusch hörst du?</p>
              <p className="mb-3 text-center text-[10px] text-[#86868b]">Tippe auf Play und höre genau hin</p>
              <div className="grid grid-cols-2 gap-2">
                {["Normales Vesikuläratmen", "Rasselgeräusche (RG)", "Giemen / Brummen", "Stridor"].map((opt, i) => (
                  <button key={i} className="rounded-xl px-3 py-3 text-[11px] font-medium" style={{ backgroundColor: i === 1 ? `${ROSE}15` : "white", color: i === 1 ? ROSE : "#1d1d1f", border: `1.5px solid ${i === 1 ? ROSE : SAND}` }}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L85: Marquee Glossar + BlurFade Zusammenfassung ── */}
        <VariantCard label="L85" name="Magic UI Kombi" description="Marquee-Glossar + BlurFade-Zusammenfassung + Gradient-Text — alles zusammen">
          <div className="py-4">
            {/* Gradient Titel */}
            <div className="mb-4 text-center">
              <AnimatedGradientText colorFrom={ROSE} colorTo={OAK} speed={0.4} className="text-base font-bold">
                Session 3 abgeschlossen!
              </AnimatedGradientText>
            </div>
            {/* BlurFade Zusammenfassung */}
            <div className="space-y-2 mb-4">
              {[
                "✅ Dekubitus-Stadien I-IV verstanden",
                "✅ Prophylaxe-Maßnahmen gelernt",
                "⚠️ Braden-Skala — nochmal wiederholen",
              ].map((item, i) => (
                <BlurFade key={i} delay={0.1 + i * 0.15} inView>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs" style={{ backgroundColor: item.startsWith("⚠️") ? `${OAK}10` : `${ROSE}08` }}>
                    {item}
                  </div>
                </BlurFade>
              ))}
            </div>
            {/* Marquee mit gelernten Begriffen */}
            <Marquee pauseOnHover className="[--duration:20s]">
              {["Dekubitus", "Braden-Skala", "Lagerung", "Prophylaxe", "Stadium I-IV", "Hautinspektion"].map((term) => (
                <span key={term} className="mx-2 text-[11px] font-medium" style={{ color: TAUPE }}>
                  {term} ·
                </span>
              ))}
            </Marquee>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 17: VISION-BASIERTE LERN-UIs
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="vision" title="Vision-basierte Lern-UIs" subtitle="Direkt aus VISION.md — Zwei-Achsen, Strategiewechsel, Wochenplan, Prüfungsmodus" />

        {/* ── L86: Zwei-Achsen-Einstufung ── */}
        <VariantCard label="L86" name="Zwei-Achsen-Einstufung" description="Sprache × Fachwissen — adaptiver Einstufungstest (VISION: Testen, nicht Fragen)">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Lass uns testen, was du schon weißt!</p>
            <div className="mb-4 rounded-xl p-4" style={{ backgroundColor: BONE }}>
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full px-2 py-0.5 text-[9px] font-bold text-white" style={{ backgroundColor: ROSE }}>Frage 3/8</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" style={{ color: OAK }} />
                  <motion.span className="text-[10px] font-mono font-bold" style={{ color: OAK }} animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 1 }}>4.2s</motion.span>
                </div>
              </div>
              <p className="mb-3 text-sm font-medium">Was ist ein Dekubitus?</p>
              <div className="space-y-2">
                {["Ein Druckgeschwür der Haut", "Eine Infektionskrankheit", "Ein chirurgischer Eingriff", "Ein Medikament gegen Schmerzen"].map((text, i) => (
                  <button key={i} className="w-full rounded-lg px-4 py-2.5 text-left text-xs font-medium transition-all" style={{ backgroundColor: "white", border: `1.5px solid ${SAND}` }}>
                    {text}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-3" style={{ backgroundColor: `${ROSE}08` }}>
              <p className="mb-2 text-[10px] font-bold" style={{ color: MAUVE }}>Dein Profil nach 8 Fragen:</p>
              <div className="space-y-2">
                <div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span>🗣️ Sprachkompetenz</span>
                    <span className="font-bold" style={{ color: OAK }}>B2</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full" style={{ backgroundColor: `${SAND}60` }}>
                    <motion.div className="h-full rounded-full" style={{ backgroundColor: OAK }} initial={{ width: 0 }} whileInView={{ width: "65%" }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span>🏥 Pflegefachwissen</span>
                    <span className="font-bold" style={{ color: ROSE }}>Fortgeschritten</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full" style={{ backgroundColor: `${SAND}60` }}>
                    <motion.div className="h-full rounded-full" style={{ backgroundColor: ROSE }} initial={{ width: 0 }} whileInView={{ width: "80%" }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} />
                  </div>
                </div>
              </div>
              <p className="mt-2 text-[9px] text-[#86868b]">⏱️ Antwortzeit: Ø 3.1s — schnelle Antworten = sicheres Wissen</p>
            </div>
          </div>
        </VariantCard>

        {/* ── L87: Strategiewechsel — KI wechselt den Weg ── */}
        <VariantCard label="L87" name="KI-Strategiewechsel" description="3× falsch → KI wechselt Erklärungsstrategie (VISION: 6 Wege zum Ziel)">
          <div className="py-4">
            <div className="space-y-2">
              {[
                { attempt: 1, type: "Multiple Choice", strategy: "Standard-Frage" },
                { attempt: 2, type: "Erklärtext + MC", strategy: "Erklärung vorher" },
                { attempt: 3, type: "Bild + Zuordnung", strategy: "Visueller Kanal" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg px-3 py-2" style={{ backgroundColor: BONE, opacity: 0.6 }}>
                  <span className="text-sm">❌</span>
                  <div className="flex-1">
                    <span className="text-[10px] font-semibold">Versuch {step.attempt}: {step.type}</span>
                    <span className="ml-2 text-[9px] text-[#86868b]">{step.strategy}</span>
                  </div>
                </div>
              ))}
              <motion.div className="flex items-center gap-3 rounded-xl px-3 py-3" style={{ backgroundColor: `${ROSE}10`, border: `1.5px solid ${ROSE}` }} initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
                <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: `${ROSE}20` }}>
                  <Wand2 className="h-4 w-4" style={{ color: ROSE }} />
                </div>
                <div>
                  <p className="text-[11px] font-bold" style={{ color: ROSE }}>Versuch 4: Alltags-Analogie</p>
                  <p className="text-[10px] text-[#86868b]">&ldquo;Stell dir vor, du drückst deinen Finger 2 Stunden auf dein Knie...&rdquo;</p>
                </div>
              </motion.div>
            </div>
            <div className="mt-3 rounded-lg px-3 py-2 text-center text-[9px]" style={{ backgroundColor: `${MAUVE}08`, color: MAUVE }}>
              🧠 Die KI hat 6 verschiedene Wege — jeder Versuch ist ein anderer didaktischer Ansatz
            </div>
          </div>
        </VariantCard>

        {/* ── L88: Sandwich-Feedback ── */}
        <VariantCard label="L88" name="Sandwich-Feedback" description="Loben → Korrigieren → Ermutigen (VISION: Nie negativ, nie frustrierend)">
          <div className="py-4">
            <div className="space-y-2">
              {[
                { emoji: "✅", title: "Guter Ansatz!", text: "Du hast richtig erkannt, dass es um Druckstellen geht.", color: ROSE, bg: `${BLUSH}15`, delay: 0 },
                { emoji: "🔧", title: "Allerdings...", text: "Es ist nicht das Knie, sondern das Steißbein — weil der Patient liegt und dort der meiste Druck entsteht.", color: OAK, bg: `${OAK}08`, delay: 0.2 },
                { emoji: "💪", title: "Weiter so!", text: "Beim nächsten Mal achte auf die Lagerungsposition. Du bist auf dem richtigen Weg!", color: ROSE, bg: `${ROSE}08`, delay: 0.4 },
              ].map((item, i) => (
                <motion.div key={i} className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: item.bg }} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: item.delay }}>
                  <span className="mt-0.5 text-lg">{item.emoji}</span>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: item.color }}>{item.title}</p>
                    <p className="text-[11px] text-[#555]">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L89: Warum-Erklärung (Alle Optionen) ── */}
        <VariantCard label="L89" name="Warum-Erklärung" description="Jede Antwort erklärt — richtig UND falsch (VISION: Nicht nur 'Falsch. Richtig ist B.')">
          <div className="py-4">
            <p className="mb-3 text-xs font-medium">Welche Prophylaxe verhindert einen Dekubitus?</p>
            <div className="space-y-2">
              {[
                { letter: "A", text: "Regelmäßige Lagerungswechsel", correct: true, why: "Richtig! Druckentlastung ist die wichtigste Maßnahme. Alle 2h umlagern reduziert das Risiko um 80%." },
                { letter: "B", text: "Thrombosestrümpfe anziehen", correct: false, why: "Das wäre richtig bei Thrombose-Prophylaxe. Dekubitus entsteht durch Druck — Strümpfe helfen hier nicht." },
                { letter: "C", text: "Mehr Flüssigkeit geben", correct: false, why: "Flüssigkeit hilft bei Exsikkose-Prophylaxe. Indirekt schützt gute Hydration die Haut, aber das ist nicht die Hauptmaßnahme." },
              ].map((opt, i) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ border: `1.5px solid ${opt.correct ? ROSE : SAND}` }}>
                  <div className="flex items-center gap-3 px-3 py-2.5" style={{ backgroundColor: opt.correct ? `${ROSE}10` : "white" }}>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: opt.correct ? ROSE : TAUPE }}>
                      {opt.correct ? <Check className="h-3.5 w-3.5" /> : opt.letter}
                    </div>
                    <span className="text-xs font-medium">{opt.text}</span>
                  </div>
                  <div className="px-3 py-2 text-[10px]" style={{ backgroundColor: opt.correct ? `${ROSE}05` : BONE, color: "#555" }}>
                    💡 {opt.why}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L90: Spaced Repetition — Karteikarte fällig ── */}
        <VariantCard label="L90" name="Spaced Repetition" description="Karteikarten mit Fälligkeits-Intervallen (VISION: 1-3-7-14-30 Tage)">
          <div className="py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold" style={{ color: MAUVE }}>Heute fällig: 12 Karten</span>
              <span className="rounded-full px-2 py-0.5 text-[9px] font-medium" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>3 neu · 9 Wiederholung</span>
            </div>
            <motion.div className="rounded-2xl p-5 text-center shadow-sm" style={{ backgroundColor: "white", border: `1.5px solid ${SAND}` }} whileHover={{ rotateY: 5 }}>
              <p className="mb-1 text-[10px] text-[#86868b]">Tippe zum Umdrehen</p>
              <p className="text-lg font-bold" style={{ color: MAUVE }}>Dekubitus</p>
              <p className="mt-1 text-[10px] text-[#86868b]">Was ist das? Nenne die 4 Stadien.</p>
            </motion.div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {[
                { label: "Nochmal", color: MAUVE, interval: "< 1 Min", bg: `${MAUVE}10` },
                { label: "Schwer", color: OAK, interval: "3 Tage", bg: `${OAK}10` },
                { label: "Gut", color: TAUPE, interval: "7 Tage", bg: `${TAUPE}10` },
                { label: "Leicht", color: ROSE, interval: "14 Tage", bg: `${ROSE}10` },
              ].map((btn, i) => (
                <button key={i} className="rounded-xl py-2.5 text-center" style={{ backgroundColor: btn.bg }}>
                  <p className="text-[11px] font-semibold" style={{ color: btn.color }}>{btn.label}</p>
                  <p className="text-[8px] text-[#86868b]">{btn.interval}</p>
                </button>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L91: Wochenplan ── */}
        <VariantCard label="L91" name="Wochenplan" description="5 Tage geplant, Themenwechsel, Freitag = Wiederholung (VISION: Wochenstruktur)">
          <div className="py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold">KW 14 — Dein Wochenplan</span>
              <span className="text-[10px] text-[#86868b]">KI-generiert</span>
            </div>
            <div className="space-y-1.5">
              {[
                { day: "Mo", topic: "CE 04 — Gesundheit fördern", status: "done", sessions: "3/3" },
                { day: "Di", topic: "CE 04 — Vertiefen + Fallbeispiele", status: "done", sessions: "3/3" },
                { day: "Mi", topic: "CE 04 — Komplexe Fälle + Schwächen Mo/Di", status: "active", sessions: "1/3" },
                { day: "Do", topic: "CE 02 — Neues Thema (Abwechslung)", status: "locked", sessions: "0/3" },
                { day: "Fr", topic: "Wiederholung — Spaced Repetition", status: "locked", sessions: "0/2" },
              ].map((d, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ backgroundColor: d.status === "active" ? `${ROSE}08` : BONE, border: d.status === "active" ? `1.5px solid ${ROSE}` : "1.5px solid transparent" }}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg text-[11px] font-bold text-white" style={{ backgroundColor: d.status === "done" ? ROSE : d.status === "active" ? ROSE : SAND }}>
                    {d.status === "done" ? <Check className="h-4 w-4" /> : d.day}
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-medium" style={{ opacity: d.status === "locked" ? 0.5 : 1 }}>{d.topic}</p>
                    <p className="text-[9px] text-[#86868b]">{d.sessions} Sessions</p>
                  </div>
                  {d.status === "locked" && <Lock className="h-3.5 w-3.5" style={{ color: SAND }} />}
                  {d.status === "active" && <ArrowRight className="h-3.5 w-3.5" style={{ color: ROSE }} />}
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg px-3 py-2 text-center text-[9px]" style={{ backgroundColor: `${OAK}08`, color: OAK }}>
              🔁 Freitag = Wiederholung der ganzen Woche — Schwächen werden automatisch eingebaut
            </div>
          </div>
        </VariantCard>

        {/* ── L92: Tagesstruktur (8 UE) ── */}
        <VariantCard label="L92" name="Tagesstruktur (8 UE)" description="Ein ganzer Schultag — Session-Übersicht mit Abwechslung (VISION: Nie langweilig)">
          <div className="py-4">
            <p className="mb-3 text-xs font-bold">Guten Morgen! Dein Plan für heute:</p>
            <div className="space-y-1">
              {[
                { ue: "1-2", type: "Erklärung + Quiz", topic: "Dekubitus-Grundlagen", icon: "📖", done: true, active: false },
                { ue: "3", type: "Fallbeispiel", topic: "Patient Herr Weber, 78 J.", icon: "🏥", done: true, active: false },
                { ue: "4", type: "Sprechübung", topic: "Fachbegriffe aussprechen", icon: "🎤", done: false, active: true },
                { ue: "5", type: "Karteikarten", topic: "Schwierige Begriffe von UE 1-3", icon: "🃏", done: false, active: false },
                { ue: "6", type: "Kreuzworträtsel", topic: "Prophylaxen (Abwechslung!)", icon: "✏️", done: false, active: false },
                { ue: "7", type: "Branching Scenario", topic: "Schichtübergabe simulieren", icon: "🔀", done: false, active: false },
                { ue: "8", type: "Zusammenfassung", topic: "Was hast du heute gelernt?", icon: "📊", done: false, active: false },
              ].map((session, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg px-3 py-2" style={{ backgroundColor: session.active ? `${ROSE}08` : "transparent", border: session.active ? `1px solid ${ROSE}40` : "none", opacity: session.done ? 0.5 : 1 }}>
                  <span className="text-base">{session.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold" style={{ color: MAUVE }}>UE {session.ue}</span>
                      <span className="text-[9px] rounded-full px-1.5 py-0.5" style={{ backgroundColor: `${SAND}40`, color: OAK }}>{session.type}</span>
                    </div>
                    <p className="text-[11px]">{session.topic}</p>
                  </div>
                  {session.done && <Check className="h-4 w-4" style={{ color: ROSE }} />}
                  {session.active && <motion.div className="h-2 w-2 rounded-full" style={{ backgroundColor: ROSE }} animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L93: Prüfungsmodus ── */}
        <VariantCard label="L93" name="Prüfungsmodus" description="Zeitdruck, keine Hilfen, keine Erklärungen — wie in echt (VISION: Prüfungsvorbereitung)">
          <div className="py-4">
            <div className="rounded-xl overflow-hidden" style={{ border: `2px solid ${MAUVE}` }}>
              <div className="flex items-center justify-between px-4 py-2.5" style={{ backgroundColor: MAUVE }}>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-white" />
                  <span className="text-xs font-bold text-white">PRÜFUNGSMODUS</span>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5">
                  <Clock className="h-3 w-3 text-white" />
                  <span className="text-[10px] font-mono font-bold text-white">42:18</span>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-3 flex flex-wrap gap-1">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="flex h-6 w-6 items-center justify-center rounded text-[9px] font-bold" style={{
                      backgroundColor: i < 7 ? `${ROSE}20` : i === 7 ? ROSE : BONE,
                      color: i < 7 ? ROSE : i === 7 ? "white" : "#86868b",
                      border: i === 7 ? "none" : `1px solid ${SAND}`
                    }}>
                      {i + 1}
                    </div>
                  ))}
                </div>
                <p className="mb-2 text-[10px] text-[#86868b]">Frage 8 von 20</p>
                <p className="mb-3 text-sm font-medium">Nennen Sie drei Risikofaktoren für die Entstehung eines Dekubitus.</p>
                <div className="rounded-lg p-3" style={{ backgroundColor: BONE }}>
                  <p className="text-[11px] italic text-[#86868b]">Tippe deine Antwort ein...</p>
                </div>
                <p className="mt-2 text-center text-[9px] text-[#86868b]">⚠️ Keine Hilfen · Kein Glossar · Keine Erklärungen</p>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L94: Prüfungsreife-Indikator ── */}
        <VariantCard label="L94" name="Prüfungsreife" description="Grün = bereit, Gelb = fast, Rot = noch nicht (VISION: Prüfungsreife-Indikator)">
          <div className="py-4">
            <div className="mb-4 text-center">
              <div className="relative mx-auto h-28 w-28">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke={SAND} strokeWidth="8" />
                  <motion.circle cx="50" cy="50" r="42" fill="none" stroke={ROSE} strokeWidth="8" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 42}`} initial={{ strokeDashoffset: 2 * Math.PI * 42 }} whileInView={{ strokeDashoffset: 2 * Math.PI * 42 * 0.28 }} transition={{ duration: 1.5 }} viewport={{ once: true }} />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold" style={{ color: ROSE }}>72%</span>
                  <span className="text-[9px] text-[#86868b]">Prüfungsreife</span>
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              {[
                { ce: "CE 01", label: "Ausbildungsstart", pct: 95, status: "🟢" },
                { ce: "CE 04", label: "Gesundheit fördern", pct: 78, status: "🟡" },
                { ce: "CE 05", label: "Alte Menschen", pct: 62, status: "🟡" },
                { ce: "CE 08", label: "Kritische Situationen", pct: 35, status: "🔴" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ backgroundColor: BONE }}>
                  <span className="text-xs">{item.status}</span>
                  <span className="w-12 text-[10px] font-bold" style={{ color: MAUVE }}>{item.ce}</span>
                  <span className="flex-1 text-[10px]">{item.label}</span>
                  <span className="text-[10px] font-bold" style={{ color: item.pct > 80 ? ROSE : item.pct > 50 ? OAK : MAUVE }}>{item.pct}%</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-[10px]" style={{ color: MAUVE }}>⚠️ CE 08 solltest du wiederholen bevor du in die Prüfung gehst</p>
          </div>
        </VariantCard>

        {/* ── L95: Lehrer-Chat mit Kontext ── */}
        <VariantCard label="L95" name="Lehrer-Chat mit Kontext" description="Lehrer sieht was der Schüler gerade bearbeitet (VISION: Chat mit Lernkontext)">
          <div className="py-4">
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              <div className="flex items-center gap-2 px-4 py-2" style={{ backgroundColor: `${MAUVE}08` }}>
                <Target className="h-3.5 w-3.5" style={{ color: MAUVE }} />
                <span className="text-[10px]" style={{ color: MAUVE }}>Kontext: CE 05 LE 02 — Dekubitus, Step 14, 2× falsch</span>
              </div>
              <div className="space-y-3 p-4">
                <div className="flex justify-end">
                  <div className="max-w-[75%] rounded-2xl rounded-br-sm px-3 py-2 text-[11px] text-white" style={{ backgroundColor: ROSE }}>
                    Ich verstehe nicht warum Lagerungswechsel alle 2 Stunden. Warum nicht 4?
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: `${MAUVE}15` }}>
                    <GraduationCap className="h-3.5 w-3.5" style={{ color: MAUVE }} />
                  </div>
                  <div className="max-w-[75%] rounded-2xl rounded-bl-sm px-3 py-2 text-[11px]" style={{ backgroundColor: BONE }}>
                    Gute Frage! 🙂 Nach 2h beginnt die Gewebeschädigung. Bei 4h wäre der Schaden oft schon da.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 border-t px-3 py-2" style={{ borderColor: `${SAND}60` }}>
                <input className="flex-1 bg-transparent text-xs outline-none" placeholder="Nachricht an Frau Müller..." />
                <button className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: ROSE }}>
                  <Send className="h-3.5 w-3.5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L96: Fehleranalyse — Warum falsch? ── */}
        <VariantCard label="L96" name="Fehleranalyse" description="KI analysiert WARUM der Schüler falsch antwortet (VISION: 4 Möglichkeiten)">
          <div className="py-4">
            <div className="mb-3 rounded-xl px-4 py-3" style={{ backgroundColor: `${MAUVE}08` }}>
              <p className="mb-1 text-[10px] font-bold" style={{ color: MAUVE }}>🧠 KI-Analyse deiner letzten Antwort</p>
              <p className="text-[11px] text-[#555]">Du hast &ldquo;Kontraktur&rdquo; statt &ldquo;Dekubitus&rdquo; gewählt</p>
            </div>
            <div className="space-y-2">
              {[
                { type: "Sprachproblem", prob: 15, desc: "Du verstehst die Frage — Sprache ist nicht das Problem", icon: "🗣️", active: false },
                { type: "Begriffsproblem", prob: 70, desc: "Du verwechselst Dekubitus mit Kontraktur — beides hat mit Immobilität zu tun", icon: "🔤", active: true },
                { type: "Konzeptproblem", prob: 10, desc: "Du verstehst das Konzept Druck → Hautverletzung", icon: "💡", active: false },
                { type: "Geraten", prob: 5, desc: "Antwortzeit 8.2s — du hast nachgedacht, nicht geraten", icon: "🎲", active: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ backgroundColor: item.active ? `${ROSE}10` : BONE, border: item.active ? `1.5px solid ${ROSE}` : "1.5px solid transparent" }}>
                  <span className="text-base">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold" style={{ color: item.active ? ROSE : "#86868b" }}>{item.type}</span>
                      <span className="text-[9px] font-mono" style={{ color: item.active ? ROSE : "#aaa" }}>{item.prob}%</span>
                    </div>
                    <p className="text-[10px] text-[#555]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl px-3 py-2.5" style={{ backgroundColor: `${ROSE}08` }}>
              <p className="text-[10px] font-semibold" style={{ color: ROSE }}>→ Nächster Schritt: Vergleichstabelle Dekubitus vs. Kontraktur</p>
            </div>
          </div>
        </VariantCard>

        {/* ── L97: Tages-Zusammenfassung ── */}
        <VariantCard label="L97" name="Tages-Zusammenfassung" description="Das hast du heute gelernt — Themen, Stärken, Schwächen (VISION: Am Ende des Tages)">
          <div className="py-4">
            <div className="mb-4 text-center">
              <p className="text-lg font-bold">Geschafft! 🎉</p>
              <p className="text-[11px] text-[#86868b]">8 UE abgeschlossen · 4h 12min aktiv gelernt</p>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl p-3" style={{ backgroundColor: `${ROSE}06` }}>
                <p className="mb-2 text-[10px] font-bold" style={{ color: ROSE }}>📚 Gelernt heute</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Dekubitus-Stadien", "Prophylaxen", "Braden-Skala", "Lagerungstechniken"].map(t => (
                    <span key={t} className="rounded-full px-2.5 py-1 text-[10px] font-medium" style={{ backgroundColor: `${ROSE}15`, color: MAUVE }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl p-3" style={{ backgroundColor: `${BLUSH}15` }}>
                  <p className="mb-1 text-[10px] font-bold" style={{ color: ROSE }}>💪 Stärken</p>
                  <p className="text-[10px]">Stadien-Erkennung</p>
                  <p className="text-[10px]">Risikofaktoren</p>
                </div>
                <div className="rounded-xl p-3" style={{ backgroundColor: `${OAK}08` }}>
                  <p className="mb-1 text-[10px] font-bold" style={{ color: OAK }}>🔄 Wiederholen</p>
                  <p className="text-[10px]">Braden-Skala</p>
                  <p className="text-[10px]">Dokumentation</p>
                </div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: BONE }}>
                <p className="text-[10px] font-bold" style={{ color: MAUVE }}>🌅 Morgen wartet auf dich:</p>
                <p className="text-[10px] text-[#555]">CE 04 — Fallbeispiele + Wiederholung Braden-Skala</p>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L98: B1-Sprachförderung-Step ── */}
        <VariantCard label="L98" name="B1-Sprachförderung" description="Einfache Sprache + Glossar + Vorlesefunktion (VISION: Sprachkompetenz Achse 1)">
          <div className="py-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full px-2 py-0.5 text-[9px] font-bold text-white" style={{ backgroundColor: OAK }}>B1</span>
              <span className="text-[10px] text-[#86868b]">Einfache Sprache aktiv</span>
            </div>
            <div className="rounded-xl p-4" style={{ backgroundColor: BONE }}>
              <p className="mb-3 text-sm leading-relaxed">
                Ein <button className="font-bold underline decoration-dotted" style={{ color: ROSE }}>Dekubitus</button> ist eine Wunde.
                Die Wunde kommt durch <strong>Druck</strong>.
                Wenn ein Mensch lange liegt, drückt das Bett auf die Haut.
              </p>
              <div className="mb-3 rounded-lg p-3" style={{ backgroundColor: "white", border: `1.5px solid ${ROSE}` }}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold" style={{ color: ROSE }}>Dekubitus</span>
                  <button className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px]" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>
                    <Volume2 className="h-3 w-3" /> Anhören
                  </button>
                </div>
                <p className="mt-1 text-[11px]">= Druckgeschwür, Wundliegen</p>
                <div className="mt-2 flex gap-2 text-[9px]">
                  <span className="rounded px-1.5 py-0.5" style={{ backgroundColor: `${SAND}40` }}>🇹🇷 Bası yarası</span>
                  <span className="rounded px-1.5 py-0.5" style={{ backgroundColor: `${SAND}40` }}>🇸🇦 قرحة الضغط</span>
                  <span className="rounded px-1.5 py-0.5" style={{ backgroundColor: `${SAND}40` }}>🇬🇧 Pressure ulcer</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 rounded-full px-3 py-1.5 text-[10px] font-medium" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>
                  <Volume2 className="h-3.5 w-3.5" /> Ganzen Text vorlesen
                </button>
                <button className="flex items-center gap-1 rounded-full px-3 py-1.5 text-[10px] font-medium" style={{ backgroundColor: `${SAND}40`, color: OAK }}>
                  <Mic className="h-3.5 w-3.5" /> Nachsprechen
                </button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L99: Anticipation-MC (Brilliant-Prinzip) ── */}
        <VariantCard label="L99" name="Anticipation-MC" description="Erst raten, dann lernen — Neugier wecken bevor die Erklärung kommt">
          <div className="py-4">
            <div className="rounded-xl p-4" style={{ backgroundColor: `${MAUVE}06`, border: `1.5px dashed ${MAUVE}40` }}>
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" style={{ color: MAUVE }} />
                <span className="text-[10px] font-bold" style={{ color: MAUVE }}>WAS DENKST DU?</span>
                <span className="rounded-full px-1.5 py-0.5 text-[8px]" style={{ backgroundColor: `${MAUVE}15`, color: MAUVE }}>kein Score</span>
              </div>
              <p className="mb-3 text-sm font-medium">Wie viele Menschen in Deutschland bekommen jährlich einen Dekubitus?</p>
              <div className="grid grid-cols-2 gap-2">
                {["ca. 5.000", "ca. 40.000", "ca. 400.000", "ca. 2 Mio."].map((opt, i) => (
                  <button key={i} className="rounded-xl px-3 py-3 text-xs font-medium" style={{ backgroundColor: "white", border: `1.5px solid ${MAUVE}30`, color: MAUVE }}>
                    {opt}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-center text-[9px] text-[#86868b]">Rate einfach! Danach kommt die Erklärung.</p>
            </div>
          </div>
        </VariantCard>

        {/* ── L100: Lernprofil-Dashboard ── */}
        <VariantCard label="L100" name="Lernprofil" description="KI merkt sich was funktioniert — Bilder vs. Text vs. Analogien (VISION: KI lernt Lernstil)">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>So lernst du am besten:</p>
            <div className="space-y-2">
              {[
                { method: "Bilder & Grafiken", pct: 92, icon: "🖼️", note: "Du verstehst visuelle Inhalte sehr schnell" },
                { method: "Fallbeispiele", pct: 85, icon: "🏥", note: "Praxis-Kontext hilft dir enorm" },
                { method: "Alltags-Analogien", pct: 78, icon: "💡", note: "Vergleiche aus dem Alltag funktionieren gut" },
                { method: "Definitions-Texte", pct: 45, icon: "📝", note: "Abstrakte Texte sind schwieriger für dich" },
                { method: "Audio / Vorlesen", pct: 70, icon: "🎧", note: "Auditiv funktioniert als Ergänzung" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl px-3 py-2.5" style={{ backgroundColor: BONE }}>
                  <div className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span className="flex-1 text-[11px] font-semibold">{item.method}</span>
                    <span className="text-[11px] font-bold" style={{ color: item.pct > 75 ? ROSE : item.pct > 55 ? OAK : MAUVE }}>{item.pct}%</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full" style={{ backgroundColor: `${SAND}60` }}>
                    <motion.div className="h-full rounded-full" style={{ backgroundColor: item.pct > 75 ? ROSE : item.pct > 55 ? OAK : MAUVE }} initial={{ width: 0 }} whileInView={{ width: `${item.pct}%` }} transition={{ duration: 0.8, delay: i * 0.1 }} viewport={{ once: true }} />
                  </div>
                  <p className="mt-1 text-[9px] text-[#86868b]">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-[9px]" style={{ color: MAUVE }}>→ Zukünftige Sessions werden mehr Bilder und Fälle enthalten</p>
          </div>
        </VariantCard>

        {/* ── L101: Meilenstein / CE abgeschlossen ── */}
        <VariantCard label="L101" name="Meilenstein-Feier" description="CE abgeschlossen! Feier-Animation, Badge, Zusammenfassung (VISION: Meilensteine)">
          <div className="py-6">
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="mb-3 flex h-20 w-20 items-center justify-center rounded-full"
                style={{ backgroundColor: `${ROSE}15` }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Crown className="h-10 w-10" style={{ color: ROSE }} />
              </motion.div>
              <SparklesText className="text-xl font-bold" sparklesCount={8} colors={{ first: ROSE, second: BLUSH }}>CE 01 abgeschlossen!</SparklesText>
              <p className="mt-1 text-xs text-[#86868b]">Ausbildungsstart — Du hast alle Lerneinheiten gemeistert</p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {[
                  { value: "12h", label: "Lernzeit" },
                  { value: "89%", label: "Richtig" },
                  { value: "47", label: "Karteikarten" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-xl py-3 px-2" style={{ backgroundColor: BONE }}>
                    <p className="text-base font-bold" style={{ color: ROSE }}>{stat.value}</p>
                    <p className="text-[9px] text-[#86868b]">{stat.label}</p>
                  </div>
                ))}
              </div>
              <button className="mt-4 rounded-full px-6 py-2.5 text-xs font-semibold text-white" style={{ backgroundColor: ROSE }}>
                Weiter zu CE 02 →
              </button>
            </div>
          </div>
        </VariantCard>

        {/* ── L102: Streak & Motivation ── */}
        <VariantCard label="L102" name="Streak-Motivation" description="Tage am Stück gelernt + Wochenziele (VISION: Durchhalten über Wochen)">
          <div className="py-4">
            <div className="mb-4 flex items-center justify-between rounded-xl px-4 py-3" style={{ backgroundColor: `${ROSE}08` }}>
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5" style={{ color: ROSE }} />
                <div>
                  <span className="text-lg font-bold" style={{ color: ROSE }}>14</span>
                  <span className="ml-1 text-xs text-[#86868b]">Tage Streak</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold" style={{ color: OAK }}>Längster: 21 Tage</p>
                <p className="text-[9px] text-[#86868b]">Weiter so! 🔥</p>
              </div>
            </div>
            <div className="rounded-xl p-3" style={{ backgroundColor: BONE }}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-bold" style={{ color: MAUVE }}>🎯 Wochenziel</span>
                <span className="text-[10px] font-medium" style={{ color: ROSE }}>2 von 3 LEs</span>
              </div>
              <div className="flex gap-1">
                {[true, true, false].map((done, i) => (
                  <div key={i} className="flex-1 h-2 rounded-full" style={{ backgroundColor: done ? ROSE : `${SAND}60` }} />
                ))}
              </div>
              <p className="mt-2 text-[9px] text-[#86868b]">Noch 1 LE diese Woche — dann schaltest du das Kompetenz-Badge frei! 🏆</p>
            </div>
            <div className="mt-3 grid grid-cols-7 gap-1 text-center">
              {["Mo","Di","Mi","Do","Fr","Sa","So"].map(d => (
                <span key={d} className="text-[8px] text-[#86868b]">{d}</span>
              ))}
              {[1,1,1,1,1,0,0, 1,1,1,1,1,0,1, 1,1,1,1,-1,-1,-1].map((day, i) => (
                <div key={i} className="flex h-5 w-5 items-center justify-center rounded text-[8px] mx-auto" style={{ backgroundColor: day === 1 ? `${ROSE}20` : day === -1 ? "transparent" : `${SAND}30`, color: day === 1 ? ROSE : "#ccc" }}>
                  {day === 1 ? "✓" : day === 0 ? "·" : ""}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L103: Praxisphase-Modus ── */}
        <VariantCard label="L103" name="Praxisphase-Modus" description="Kürzere Sessions, Theorie-Praxis-Verknüpfung (VISION: Praxisphasen-Integration)">
          <div className="py-4">
            <div className="mb-3 flex items-center gap-2 rounded-full px-3 py-1.5" style={{ backgroundColor: `${OAK}10`, border: `1px solid ${OAK}30` }}>
              <Stethoscope className="h-3.5 w-3.5" style={{ color: OAK }} />
              <span className="text-[10px] font-bold" style={{ color: OAK }}>PRAXISPHASE — Chirurgie, Woche 2</span>
            </div>
            <div className="space-y-2">
              <div className="rounded-xl p-3" style={{ backgroundColor: BONE }}>
                <p className="mb-1 text-[10px] font-bold" style={{ color: MAUVE }}>🏥 Heute auf Station</p>
                <p className="text-[11px]">Achte heute mal auf Dekubitus-Prophylaxe bei deinen Patienten. Wie wird gelagert? Wie oft?</p>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: `${ROSE}06` }}>
                <p className="mb-1 text-[10px] font-bold" style={{ color: ROSE }}>📝 Reflexionsfrage</p>
                <p className="text-[11px]">Was hast du heute auf Station gesehen? Welche Pflegemaßnahme war das?</p>
                <div className="mt-2 flex gap-2">
                  <button className="flex-1 rounded-lg py-2 text-[10px] font-medium" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>✍️ Schreiben</button>
                  <button className="flex-1 rounded-lg py-2 text-[10px] font-medium" style={{ backgroundColor: `${OAK}10`, color: OAK }}>🎤 Einsprechen</button>
                </div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: `${SAND}20` }}>
                <p className="mb-1 text-[10px] font-bold" style={{ color: OAK }}>🃏 Quick-Review (15 Min)</p>
                <p className="text-[11px]">8 Karteikarten zu Wundversorgung — perfekt für die Pause</p>
              </div>
            </div>
            <p className="mt-3 text-center text-[9px] text-[#86868b]">⏱️ Praxis-Modus: Kürzere Sessions (30-45 Min statt 8 UE)</p>
          </div>
        </VariantCard>

        {/* ── L104: Lernzeit-Nachweis ── */}
        <VariantCard label="L104" name="Lernzeit-Nachweis" description="Stunden pro CE/LE, aktiv gearbeitet, PDF-Export (VISION: Lernzeit-Dokumentation)">
          <div className="py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold" style={{ color: MAUVE }}>Lernzeit-Nachweis</span>
              <button className="flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-medium" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>
                <Download className="h-3 w-3" /> PDF Export
              </button>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              <div className="grid grid-cols-4 gap-0 px-3 py-2 text-[9px] font-bold" style={{ backgroundColor: BONE, color: MAUVE }}>
                <span>CE / LE</span>
                <span className="text-center">Stunden</span>
                <span className="text-center">Aktiv</span>
                <span className="text-right">Status</span>
              </div>
              {[
                { ce: "CE 01 LE 01", hours: "4:12", active: "3:48", pct: 91 },
                { ce: "CE 01 LE 02", hours: "3:35", active: "3:10", pct: 89 },
                { ce: "CE 04 LE 01", hours: "5:20", active: "4:45", pct: 89 },
                { ce: "CE 05 LE 02", hours: "2:15", active: "1:50", pct: 82 },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 gap-0 border-t px-3 py-2 text-[10px]" style={{ borderColor: `${SAND}60` }}>
                  <span className="font-medium">{row.ce}</span>
                  <span className="text-center">{row.hours}</span>
                  <span className="text-center" style={{ color: ROSE }}>{row.active}</span>
                  <span className="text-right text-[9px] font-medium" style={{ color: ROSE }}>{row.pct}% aktiv</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[9px] text-[#86868b]">📊 Gesamt: 47h 22min gelernt · 42h 10min aktiv · Export für Prüfungszulassung</p>
          </div>
        </VariantCard>

        {/* ── L105: Offline-Modus ── */}
        <VariantCard label="L105" name="Offline-Modus" description="Lektionen herunterladen, im Zug lernen (VISION: Offline-Modus)">
          <div className="py-4">
            <div className="mb-3 flex items-center gap-2 rounded-full px-3 py-1.5" style={{ backgroundColor: `${SAND}30` }}>
              <WifiOff className="h-3.5 w-3.5" style={{ color: OAK }} />
              <span className="text-[10px] font-medium" style={{ color: OAK }}>Offline verfügbar machen</span>
            </div>
            <div className="space-y-2">
              {[
                { label: "Session 5 — Prophylaxen", size: "2.4 MB", downloaded: true },
                { label: "Session 6 — Fallbeispiele", size: "3.1 MB", downloaded: true },
                { label: "Session 7 — Pflegeplanung", size: "2.8 MB", downloaded: false },
                { label: "Karteikarten (47 Karten)", size: "0.8 MB", downloaded: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ backgroundColor: BONE }}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: item.downloaded ? `${ROSE}15` : `${SAND}40` }}>
                    {item.downloaded ? <Check className="h-4 w-4" style={{ color: ROSE }} /> : <Download className="h-4 w-4" style={{ color: TAUPE }} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-medium">{item.label}</p>
                    <p className="text-[9px] text-[#86868b]">{item.size}</p>
                  </div>
                  {!item.downloaded && (
                    <button className="rounded-full px-3 py-1 text-[10px] font-medium" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>
                      Laden
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between rounded-lg px-3 py-2" style={{ backgroundColor: `${ROSE}06` }}>
              <span className="text-[10px]" style={{ color: MAUVE }}>📱 5.5 MB heruntergeladen</span>
              <span className="text-[10px] text-[#86868b]">Sync bei Verbindung</span>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 18: ONBOARDING, DASHBOARD & GAMIFICATION
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="experience" title="Onboarding, Dashboard & Gamification" subtitle="Erster Eindruck, Lehrer-Sicht, Belohnungssysteme, Micro-Interactions" />

        {/* ── L106: Willkommens-Onboarding ── */}
        <VariantCard label="L106" name="Willkommens-Onboarding" description="3-Schritt-Setup beim ersten Öffnen — Rolle, Sprache, Ziel">
          <div className="py-4">
            {/* Step Indicator */}
            <div className="mb-4 flex items-center justify-center gap-2">
              {[1, 2, 3].map(step => (
                <div key={step} className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: step <= 2 ? ROSE : `${SAND}60`, color: step <= 2 ? "white" : "#86868b" }}>
                    {step < 2 ? <Check className="h-4 w-4" /> : step}
                  </div>
                  {step < 3 && <div className="h-0.5 w-8 rounded-full" style={{ backgroundColor: step < 2 ? ROSE : SAND }} />}
                </div>
              ))}
            </div>
            <div className="text-center mb-4">
              <p className="text-base font-bold">Was ist dein Ziel?</p>
              <p className="text-[11px] text-[#86868b]">Damit wir deinen Lernplan anpassen können</p>
            </div>
            <div className="space-y-2">
              {[
                { icon: "📚", label: "Ausbildung bestehen", desc: "Ich will die Theorie-Prüfung schaffen", selected: true },
                { icon: "🚀", label: "Vorwissen auffrischen", desc: "Ich kenne vieles, will aber sicherer werden", selected: false },
                { icon: "🌍", label: "Fachsprache lernen", desc: "Ich kann Pflege, brauche aber die deutschen Begriffe", selected: false },
              ].map((goal, i) => (
                <button key={i} className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all" style={{ backgroundColor: goal.selected ? `${ROSE}08` : "white", border: `1.5px solid ${goal.selected ? ROSE : SAND}` }}>
                  <span className="text-2xl">{goal.icon}</span>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: goal.selected ? ROSE : "#1d1d1f" }}>{goal.label}</p>
                    <p className="text-[10px] text-[#86868b]">{goal.desc}</p>
                  </div>
                  {goal.selected && <Check className="ml-auto h-4 w-4" style={{ color: ROSE }} />}
                </button>
              ))}
            </div>
            <button className="mt-4 w-full rounded-xl py-3 text-sm font-semibold text-white" style={{ backgroundColor: ROSE }}>
              Weiter →
            </button>
          </div>
        </VariantCard>

        {/* ── L107: Lehrer-Dashboard ── */}
        <VariantCard label="L107" name="Lehrer-Dashboard" description="Klassenübersicht — wer lernt, wer braucht Hilfe, wer ist prüfungsreif">
          <div className="py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold" style={{ color: MAUVE }}>Klasse 23A — 18 Schüler</span>
              <span className="rounded-full px-2 py-0.5 text-[9px]" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>Live</span>
            </div>
            {/* Quick Stats */}
            <div className="mb-3 grid grid-cols-3 gap-2">
              {[
                { value: "14", label: "Aktiv heute", color: ROSE },
                { value: "3", label: "Brauchen Hilfe", color: MAUVE },
                { value: "8", label: "Prüfungsreif", color: OAK },
              ].map((s, i) => (
                <div key={i} className="rounded-xl py-2.5 text-center" style={{ backgroundColor: BONE }}>
                  <p className="text-lg font-bold" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-[8px] text-[#86868b]">{s.label}</p>
                </div>
              ))}
            </div>
            {/* Student List */}
            <div className="space-y-1.5">
              {[
                { name: "Ayşe K.", status: "🟢", topic: "CE 04 Session 3", pct: 78, flag: null },
                { name: "Max S.", status: "🟢", topic: "CE 01 Session 7", pct: 92, flag: null },
                { name: "Ahmed R.", status: "🔴", topic: "CE 05 Session 2", pct: 34, flag: "Hilfe" },
                { name: "Lisa M.", status: "🟡", topic: "CE 04 Session 1", pct: 61, flag: null },
              ].map((student, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ backgroundColor: student.flag ? `${MAUVE}06` : BONE }}>
                  <span className="text-xs">{student.status}</span>
                  <div className="flex-1">
                    <span className="text-[11px] font-semibold">{student.name}</span>
                    <span className="ml-2 text-[9px] text-[#86868b]">{student.topic}</span>
                  </div>
                  <span className="text-[10px] font-bold" style={{ color: student.pct > 75 ? ROSE : student.pct > 50 ? OAK : MAUVE }}>{student.pct}%</span>
                  {student.flag && <span className="rounded-full px-1.5 py-0.5 text-[8px] font-bold text-white" style={{ backgroundColor: MAUVE }}>{student.flag}</span>}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L108: Badge-Sammlung ── */}
        <VariantCard label="L108" name="Badge-Sammlung" description="Alle verdienten Badges — CE-Meister, Streak-Champion, Vokabel-König">
          <div className="py-4">
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: "🏆", label: "CE 01 Meister", earned: true },
                { icon: "🔥", label: "14-Tage-Streak", earned: true },
                { icon: "📖", label: "100 Begriffe", earned: true },
                { icon: "🎤", label: "Sprecher", earned: true },
                { icon: "⭐", label: "Erste Prüfung", earned: false },
                { icon: "🧠", label: "Alle Prophylaxen", earned: false },
                { icon: "👑", label: "Semester 1", earned: false },
                { icon: "💎", label: "Perfekte Woche", earned: false },
              ].map((badge, i) => (
                <motion.div key={i} className="flex flex-col items-center text-center" style={{ opacity: badge.earned ? 1 : 0.3 }} whileHover={badge.earned ? { scale: 1.1 } : {}}>
                  <div className="mb-1 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl" style={{ backgroundColor: badge.earned ? `${ROSE}12` : `${SAND}30`, boxShadow: badge.earned ? `0 2px 8px ${ROSE}20` : "none" }}>
                    {badge.icon}
                  </div>
                  <span className="text-[8px] font-medium leading-tight">{badge.label}</span>
                  {!badge.earned && <Lock className="mt-0.5 h-2.5 w-2.5" style={{ color: SAND }} />}
                </motion.div>
              ))}
            </div>
            <div className="mt-3 text-center">
              <span className="text-[10px] text-[#86868b]">4 von 8 Badges freigeschaltet</span>
            </div>
          </div>
        </VariantCard>

        {/* ── L109: XP-Level-System ── */}
        <VariantCard label="L109" name="XP & Level-System" description="Erfahrungspunkte sammeln, Level aufsteigen, Belohnungen">
          <div className="py-4">
            <div className="mb-4 flex items-center gap-4">
              <div className="relative">
                <svg viewBox="0 0 60 60" className="h-16 w-16">
                  <circle cx="30" cy="30" r="26" fill="none" stroke={`${SAND}60`} strokeWidth="4" />
                  <motion.circle cx="30" cy="30" r="26" fill="none" stroke={ROSE} strokeWidth="4" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 26}`} initial={{ strokeDashoffset: 2 * Math.PI * 26 }} whileInView={{ strokeDashoffset: 2 * Math.PI * 26 * 0.35 }} transition={{ duration: 1.2 }} viewport={{ once: true }} className="-rotate-90 origin-center" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xs font-bold" style={{ color: ROSE }}>Lv.7</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">Pflegefachkraft in Ausbildung</p>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-2 flex-1 rounded-full" style={{ backgroundColor: `${SAND}60` }}>
                    <motion.div className="h-full rounded-full" style={{ backgroundColor: ROSE }} initial={{ width: 0 }} whileInView={{ width: "65%" }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  </div>
                  <span className="text-[10px] font-mono" style={{ color: ROSE }}>1.840 / 2.800 XP</span>
                </div>
                <p className="mt-0.5 text-[9px] text-[#86868b]">Noch 960 XP bis Level 8</p>
              </div>
            </div>
            {/* Heutige XP */}
            <div className="space-y-1.5">
              {[
                { action: "Session 3 abgeschlossen", xp: "+120", time: "vor 2h" },
                { action: "5 Karteikarten wiederholt", xp: "+25", time: "vor 3h" },
                { action: "Streak-Bonus (Tag 14)", xp: "+50", time: "heute" },
                { action: "Erste Sprechübung", xp: "+40", time: "vor 1h" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-1.5" style={{ backgroundColor: BONE }}>
                  <Zap className="h-3 w-3" style={{ color: ROSE }} />
                  <span className="flex-1 text-[10px]">{item.action}</span>
                  <span className="text-[10px] font-bold" style={{ color: ROSE }}>{item.xp}</span>
                  <span className="text-[8px] text-[#86868b]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L110: Push-Notification Preview ── */}
        <VariantCard label="L110" name="Push-Notifications" description="Erinnerungen, Streak-Warnung, Lob — wie sie auf dem Handy erscheinen">
          <div className="py-4 space-y-3">
            {[
              { title: "Guten Morgen! ☀️", body: "Dein Lernplan für heute: 3 Sessions, 1 Wiederholung", time: "08:00", icon: "📚" },
              { title: "Streak in Gefahr! 🔥", body: "Du hast heute noch nicht gelernt. Noch 2h bis Mitternacht.", time: "22:00", icon: "⚠️" },
              { title: "CE 01 geschafft! 🏆", body: "Du hast alle Lerneinheiten abgeschlossen. Weiter zu CE 02?", time: "16:30", icon: "🎉" },
            ].map((notif, i) => (
              <motion.div key={i} className="flex items-start gap-3 rounded-2xl px-4 py-3 shadow-sm" style={{ backgroundColor: "white", border: `1px solid ${SAND}40` }} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <span className="mt-0.5 text-xl">{notif.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold">{notif.title}</span>
                    <span className="text-[8px] text-[#86868b]">{notif.time}</span>
                  </div>
                  <p className="text-[10px] text-[#555]">{notif.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </VariantCard>

        {/* ── L111: Fortschritts-Landkarte ── */}
        <VariantCard label="L111" name="Fortschritts-Landkarte" description="Visueller Lernpfad — wie eine Spielkarte mit Stationen">
          <div className="py-4">
            <div className="relative">
              {[
                { label: "CE 01", name: "Ausbildungsstart", done: true, y: 0 },
                { label: "CE 02", name: "Kommunikation", done: true, y: 1 },
                { label: "CE 03", name: "Intra-/interprofessionell", done: false, active: true, y: 2 },
                { label: "CE 04", name: "Gesundheit fördern", done: false, y: 3 },
                { label: "CE 05", name: "Alte Menschen", done: false, y: 4 },
              ].map((station, i) => (
                <div key={i} className="flex items-center gap-3 mb-1">
                  {/* Vertikale Linie */}
                  <div className="flex flex-col items-center w-8">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold" style={{
                      backgroundColor: station.done ? ROSE : station.active ? "white" : `${SAND}40`,
                      color: station.done ? "white" : station.active ? ROSE : "#86868b",
                      border: station.active ? `2px solid ${ROSE}` : "none",
                      boxShadow: station.active ? `0 0 0 4px ${ROSE}15` : "none"
                    }}>
                      {station.done ? <Check className="h-4 w-4" /> : i + 1}
                    </div>
                    {i < 4 && <div className="h-4 w-0.5" style={{ backgroundColor: station.done ? ROSE : SAND }} />}
                  </div>
                  <div className="flex-1 rounded-xl px-3 py-2" style={{ backgroundColor: station.active ? `${ROSE}06` : "transparent" }}>
                    <span className="text-[10px] font-bold" style={{ color: station.done ? ROSE : station.active ? ROSE : "#86868b" }}>{station.label}</span>
                    <span className="ml-2 text-[10px]" style={{ opacity: station.done || station.active ? 1 : 0.5 }}>{station.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L112: Konfidenz-Kalibrierung ── */}
        <VariantCard label="L112" name="Konfidenz-Kalibrierung" description="Weißt du wirklich was du glaubst zu wissen? Selbsteinschätzung vs. Realität">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Deine Selbsteinschätzung vs. tatsächliches Wissen:</p>
            <div className="space-y-3">
              {[
                { topic: "Dekubitus-Stadien", confidence: 90, actual: 85, match: true },
                { topic: "Braden-Skala", confidence: 75, actual: 42, match: false },
                { topic: "Lagerungstechniken", confidence: 60, actual: 78, match: false },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-3" style={{ backgroundColor: BONE }}>
                  <p className="mb-2 text-[11px] font-semibold">{item.topic}</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-24 text-[9px] text-[#86868b]">Du denkst:</span>
                      <div className="h-2 flex-1 rounded-full" style={{ backgroundColor: `${SAND}40` }}>
                        <div className="h-full rounded-full" style={{ width: `${item.confidence}%`, backgroundColor: TAUPE }} />
                      </div>
                      <span className="w-8 text-right text-[9px] font-bold" style={{ color: TAUPE }}>{item.confidence}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-24 text-[9px] text-[#86868b]">Tatsächlich:</span>
                      <div className="h-2 flex-1 rounded-full" style={{ backgroundColor: `${SAND}40` }}>
                        <div className="h-full rounded-full" style={{ width: `${item.actual}%`, backgroundColor: ROSE }} />
                      </div>
                      <span className="w-8 text-right text-[9px] font-bold" style={{ color: ROSE }}>{item.actual}%</span>
                    </div>
                  </div>
                  {!item.match && (
                    <p className="mt-1.5 text-[9px]" style={{ color: item.confidence > item.actual ? MAUVE : ROSE }}>
                      {item.confidence > item.actual ? "⚠️ Überschätzt — mehr üben!" : "💪 Unterschätzt — du weißt mehr als du denkst!"}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L113: Glossar mit Suchfunktion ── */}
        <VariantCard label="L113" name="Glossar-Suche" description="Alle Fachbegriffe durchsuchbar — DE/TR/AR/EN mit Audio">
          <div className="py-4">
            <div className="mb-3 flex items-center gap-2 rounded-xl px-3 py-2.5" style={{ backgroundColor: BONE }}>
              <Target className="h-4 w-4" style={{ color: TAUPE }} />
              <input className="flex-1 bg-transparent text-xs outline-none" placeholder="Fachbegriff suchen..." defaultValue="Deku" />
              <span className="rounded-full px-2 py-0.5 text-[9px]" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>248 Begriffe</span>
            </div>
            <div className="space-y-1.5">
              {[
                { term: "Dekubitus", b1: "Druckgeschwür, Wundliegen", tr: "Bası yarası", ar: "قرحة الضغط" },
                { term: "Dekubitusprophylaxe", b1: "Maßnahmen gegen Wundliegen", tr: "Bası yarası profilaksisi", ar: "الوقاية من قرحة الضغط" },
                { term: "Dekubitusgrad", b1: "Wie schlimm die Wunde ist (Stufe 1-4)", tr: "Bası yarası derecesi", ar: "درجة قرحة الضغط" },
              ].map((entry, i) => (
                <div key={i} className="rounded-xl px-3 py-2.5" style={{ backgroundColor: "white", border: `1px solid ${SAND}40` }}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold" style={{ color: MAUVE }}>{entry.term}</span>
                    <button className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: `${ROSE}15` }}>
                      <Volume2 className="h-3 w-3" style={{ color: ROSE }} />
                    </button>
                  </div>
                  <p className="text-[10px] text-[#555]">{entry.b1}</p>
                  <div className="mt-1.5 flex gap-1.5 text-[8px]">
                    <span className="rounded px-1.5 py-0.5" style={{ backgroundColor: `${SAND}30` }}>🇹🇷 {entry.tr}</span>
                    <span className="rounded px-1.5 py-0.5" style={{ backgroundColor: `${SAND}30` }}>🇸🇦 {entry.ar}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L114: Vergleichstabelle (KI-generiert) ── */}
        <VariantCard label="L114" name="Vergleichstabelle" description="KI erstellt automatisch Vergleich wenn Schüler Begriffe verwechselt">
          <div className="py-4">
            <div className="mb-2 flex items-center gap-2">
              <Wand2 className="h-3.5 w-3.5" style={{ color: MAUVE }} />
              <span className="text-[10px]" style={{ color: MAUVE }}>KI hat erkannt: Du verwechselst diese Begriffe</span>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              <div className="grid grid-cols-3 text-center">
                <div className="py-2" style={{ backgroundColor: BONE }} />
                <div className="py-2 text-[10px] font-bold" style={{ backgroundColor: `${ROSE}10`, color: ROSE }}>Dekubitus</div>
                <div className="py-2 text-[10px] font-bold" style={{ backgroundColor: `${OAK}10`, color: OAK }}>Kontraktur</div>
              </div>
              {[
                { label: "Was ist es?", a: "Druckgeschwür", b: "Gelenkversteifung" },
                { label: "Ursache", a: "Druck + Zeit", b: "Immobilität + fehlende Bewegung" },
                { label: "Prävention", a: "Lagerungswechsel", b: "Mobilisation + Bewegungsübungen" },
                { label: "Risikoskala", a: "Braden-Skala", b: "Keine Standard-Skala" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-t text-[10px]" style={{ borderColor: `${SAND}40` }}>
                  <div className="px-2 py-2 font-semibold" style={{ backgroundColor: BONE, color: MAUVE }}>{row.label}</div>
                  <div className="px-2 py-2" style={{ backgroundColor: `${ROSE}04` }}>{row.a}</div>
                  <div className="px-2 py-2" style={{ backgroundColor: `${OAK}04` }}>{row.b}</div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L115: Lerngruppen-Ranking ── */}
        <VariantCard label="L115" name="Klassen-Ranking" description="Anonymisiertes Ranking — motivierend, nicht beschämend">
          <div className="py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold" style={{ color: MAUVE }}>Klasse 23A — Diese Woche</span>
              <span className="text-[9px] text-[#86868b]">Du bist #4</span>
            </div>
            <div className="space-y-1.5">
              {[
                { rank: 1, name: "Schüler A", xp: 840, you: false },
                { rank: 2, name: "Schüler B", xp: 720, you: false },
                { rank: 3, name: "Schüler C", xp: 695, you: false },
                { rank: 4, name: "Du", xp: 680, you: true },
                { rank: 5, name: "Schüler E", xp: 590, you: false },
              ].map((entry, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl px-3 py-2" style={{ backgroundColor: entry.you ? `${ROSE}08` : BONE, border: entry.you ? `1.5px solid ${ROSE}` : "1.5px solid transparent" }}>
                  <span className="w-5 text-center text-xs font-bold" style={{ color: entry.rank <= 3 ? ROSE : "#86868b" }}>
                    {entry.rank <= 3 ? ["🥇","🥈","🥉"][entry.rank-1] : entry.rank}
                  </span>
                  <span className="flex-1 text-[11px] font-medium" style={{ color: entry.you ? ROSE : "#1d1d1f" }}>{entry.name}</span>
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3" style={{ color: ROSE }} />
                    <span className="text-[10px] font-bold" style={{ color: entry.you ? ROSE : OAK }}>{entry.xp} XP</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-[9px] text-[#86868b]">Anonymisiert — nur du siehst deinen echten Platz</p>
          </div>
        </VariantCard>

        {/* ── L116: Swipe-to-Rate (Schnellbewertung) ── */}
        <VariantCard label="L116" name="Swipe-Bewertung" description="Nach jeder Lektion: Wie fandest du es? — Schnelle Daumen-Bewertung">
          <div className="py-6">
            <p className="mb-4 text-center text-sm font-medium">Wie fandest du diese Lektion?</p>
            <div className="flex items-center justify-center gap-6">
              <motion.button className="flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: `${MAUVE}10`, border: `1.5px solid ${MAUVE}30` }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ThumbsDown className="h-7 w-7" style={{ color: MAUVE }} />
              </motion.button>
              <motion.button className="flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: `${SAND}20`, border: `1.5px solid ${SAND}` }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <MoreHorizontal className="h-7 w-7" style={{ color: TAUPE }} />
              </motion.button>
              <motion.button className="flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: `${ROSE}10`, border: `1.5px solid ${ROSE}30` }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ThumbsUp className="h-7 w-7" style={{ color: ROSE }} />
              </motion.button>
            </div>
            <p className="mt-3 text-center text-[10px] text-[#86868b]">Dein Feedback verbessert zukünftige Sessions</p>
          </div>
        </VariantCard>

        {/* ── L117: Tages-Begrüßung ── */}
        <VariantCard label="L117" name="Tages-Begrüßung" description="Personalisierte Begrüßung mit Tagesplan-Vorschau (VISION: Tagesstruktur)">
          <div className="py-6">
            <div className="text-center">
              <TypingAnimation className="text-xl font-bold" duration={40}>
                Guten Morgen, Ayşe! 👋
              </TypingAnimation>
              <p className="mt-2 text-xs text-[#86868b]">Tag 15 deiner Lernreise</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl py-3" style={{ backgroundColor: BONE }}>
                <Flame className="mx-auto h-5 w-5 mb-1" style={{ color: ROSE }} />
                <p className="text-xs font-bold" style={{ color: ROSE }}>14</p>
                <p className="text-[8px] text-[#86868b]">Streak</p>
              </div>
              <div className="rounded-xl py-3" style={{ backgroundColor: BONE }}>
                <BookOpen className="mx-auto h-5 w-5 mb-1" style={{ color: OAK }} />
                <p className="text-xs font-bold" style={{ color: OAK }}>3</p>
                <p className="text-[8px] text-[#86868b]">Sessions heute</p>
              </div>
              <div className="rounded-xl py-3" style={{ backgroundColor: BONE }}>
                <Target className="mx-auto h-5 w-5 mb-1" style={{ color: MAUVE }} />
                <p className="text-xs font-bold" style={{ color: MAUVE }}>CE 04</p>
                <p className="text-[8px] text-[#86868b]">Fokus</p>
              </div>
            </div>
            <PulsatingButton pulseColor={ROSE} duration="2.5s" className="mt-4 w-full rounded-xl py-3 text-sm font-semibold text-white" style={{ backgroundColor: ROSE }}>
              Jetzt starten →
            </PulsatingButton>
          </div>
        </VariantCard>

        {/* ── L118: Bottom-Tab-Navigation ── */}
        <VariantCard label="L118" name="Bottom-Tab-Navigation" description="Mobile Navigation — 5 Tabs wie eine native App">
          <div className="py-4">
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: `1px solid ${SAND}40` }}>
              {/* Screen Content Placeholder */}
              <div className="h-32 flex items-center justify-center" style={{ backgroundColor: `${BONE}` }}>
                <span className="text-[11px] text-[#86868b]">App-Inhalt</span>
              </div>
              {/* Bottom Tab Bar */}
              <div className="flex items-end justify-around border-t px-2 py-2" style={{ backgroundColor: "white", borderColor: `${SAND}40` }}>
                {[
                  { icon: <Home className="h-5 w-5" />, label: "Home", active: false },
                  { icon: <BookOpen className="h-5 w-5" />, label: "Lernen", active: true },
                  { icon: <BarChart3 className="h-5 w-5" />, label: "Fortschritt", active: false },
                  { icon: <MessageCircle className="h-5 w-5" />, label: "Chat", active: false, badge: 2 },
                  { icon: <User className="h-5 w-5" />, label: "Profil", active: false },
                ].map((tab, i) => (
                  <button key={i} className="flex flex-col items-center gap-0.5 relative" style={{ color: tab.active ? ROSE : "#86868b" }}>
                    {tab.icon}
                    <span className="text-[8px] font-medium">{tab.label}</span>
                    {tab.active && <div className="absolute -top-2 h-0.5 w-6 rounded-full" style={{ backgroundColor: ROSE }} />}
                    {tab.badge && (
                      <div className="absolute -right-1.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full text-[7px] font-bold text-white" style={{ backgroundColor: ROSE }}>
                        {tab.badge}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L119: Coach-Marks / Tooltip-Tutorial ── */}
        <VariantCard label="L119" name="Coach-Marks" description="Interaktives Tutorial — zeigt dem Schüler die wichtigsten Features">
          <div className="py-4">
            <div className="relative rounded-xl p-4" style={{ backgroundColor: BONE }}>
              {/* Fake UI Elements */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold">Session 1</span>
                <div className="h-2 w-24 rounded-full" style={{ backgroundColor: SAND }} />
              </div>
              <div className="h-16 rounded-lg mb-3" style={{ backgroundColor: `${SAND}30` }} />
              <div className="flex gap-2">
                <div className="h-10 flex-1 rounded-lg" style={{ backgroundColor: `${SAND}30` }} />
                <div className="h-10 flex-1 rounded-lg" style={{ backgroundColor: `${SAND}30` }} />
              </div>
              {/* Tooltip Overlay */}
              <motion.div className="absolute top-2 right-2 w-48 rounded-xl p-3 shadow-lg" style={{ backgroundColor: MAUVE }} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
                <p className="text-[10px] font-bold text-white">📊 Fortschrittsbalken</p>
                <p className="text-[9px] text-white/80">Hier siehst du wie weit du in der Session bist. Grün = geschafft!</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[8px] text-white/60">2 von 5</span>
                  <button className="rounded-full px-2 py-0.5 text-[9px] font-bold text-white" style={{ backgroundColor: `rgba(255,255,255,0.2)` }}>Weiter →</button>
                </div>
              </motion.div>
            </div>
          </div>
        </VariantCard>

        {/* ── L120: Empty State ── */}
        <VariantCard label="L120" name="Empty State" description="Wenn noch nichts da ist — motivierender Einstieg statt leerer Seite">
          <div className="py-8">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full" style={{ backgroundColor: `${ROSE}10` }}>
                  <BookOpen className="h-10 w-10" style={{ color: ROSE }} />
                </div>
                <Ripple mainCircleSize={80} mainCircleOpacity={0.08} numCircles={3} className="!absolute !inset-[-20px]" />
              </div>
              <p className="text-base font-bold">Bereit für dein erstes Thema?</p>
              <p className="mt-1 max-w-xs text-xs text-[#86868b]">
                Starte mit einem kurzen Einstufungstest — danach wissen wir genau, wo du stehst.
              </p>
              <ShinyButton className="mt-4 rounded-xl px-6 py-2.5 text-sm font-semibold" style={{ color: ROSE }}>
                Einstufungstest starten
              </ShinyButton>
            </div>
          </div>
        </VariantCard>

        {/* ── L121: Error / Offline State ── */}
        <VariantCard label="L121" name="Offline / Error" description="Kein Internet? Kein Problem — Offline-Hinweis mit Optionen">
          <div className="py-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: `${SAND}20` }}>
                <WifiOff className="h-8 w-8" style={{ color: TAUPE }} />
              </div>
              <p className="text-sm font-bold">Keine Verbindung</p>
              <p className="mt-1 text-xs text-[#86868b]">Aber du kannst trotzdem lernen!</p>
              <div className="mt-4 w-full space-y-2">
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: `${ROSE}08`, border: `1px solid ${ROSE}30` }}>
                  <Download className="h-4 w-4" style={{ color: ROSE }} />
                  <div className="text-left">
                    <p className="text-[11px] font-semibold" style={{ color: ROSE }}>2 Sessions offline verfügbar</p>
                    <p className="text-[9px] text-[#86868b]">Session 5 + 6 sind heruntergeladen</p>
                  </div>
                </button>
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: BONE }}>
                  <RefreshCw className="h-4 w-4" style={{ color: TAUPE }} />
                  <span className="text-[11px] font-medium">Erneut verbinden</span>
                </button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L122: Settings / Einstellungen ── */}
        <VariantCard label="L122" name="Einstellungen" description="Sprache, Theme, Benachrichtigungen, Datenschutz — alles an einem Ort">
          <div className="py-4">
            <div className="space-y-1">
              {[
                { icon: <Globe className="h-4 w-4" />, label: "Muttersprache", value: "Türkisch", color: MAUVE },
                { icon: <Volume2 className="h-4 w-4" />, label: "Vorlesefunktion", value: "An", color: ROSE },
                { icon: <Eye className="h-4 w-4" />, label: "Sprachniveau", value: "B1 (Einfach)", color: OAK },
                { icon: <Bell className="h-4 w-4" />, label: "Erinnerungen", value: "08:00 + 20:00", color: TAUPE },
                { icon: <Smartphone className="h-4 w-4" />, label: "Offline-Daten", value: "12.4 MB", color: TAUPE },
                { icon: <Shield className="h-4 w-4" />, label: "Datenschutz", value: "DSGVO ✓", color: MAUVE },
              ].map((setting, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ backgroundColor: BONE }}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ backgroundColor: `${setting.color}15`, color: setting.color }}>
                    {setting.icon}
                  </div>
                  <span className="flex-1 text-[11px] font-medium">{setting.label}</span>
                  <span className="text-[10px]" style={{ color: setting.color }}>{setting.value}</span>
                  <ChevronRight className="h-3.5 w-3.5 text-[#ccc]" />
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L123: Wochenrückblick ── */}
        <VariantCard label="L123" name="Wochenrückblick" description="Sonntag-Abend: Was lief diese Woche? Visualisiert und motivierend">
          <div className="py-4">
            <div className="mb-3 text-center">
              <p className="text-base font-bold">Deine Woche 🎉</p>
              <p className="text-[10px] text-[#86868b]">KW 14 — 31. März bis 4. April</p>
            </div>
            {/* Activity Heatmap */}
            <div className="mb-4 grid grid-cols-7 gap-1.5 text-center">
              {["Mo","Di","Mi","Do","Fr","Sa","So"].map(d => (
                <span key={d} className="text-[8px] text-[#86868b]">{d}</span>
              ))}
              {[85, 120, 45, 90, 60, 0, 30].map((mins, i) => (
                <div key={i} className="flex h-10 items-end justify-center rounded-lg pb-1" style={{ backgroundColor: mins > 0 ? `${ROSE}${Math.min(Math.round(mins / 120 * 40) + 8, 50).toString(16)}` : `${SAND}20` }}>
                  <span className="text-[8px] font-bold" style={{ color: mins > 60 ? ROSE : mins > 0 ? OAK : "#ccc" }}>
                    {mins > 0 ? `${mins}m` : "—"}
                  </span>
                </div>
              ))}
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Lernzeit", value: "7h 10min", icon: "⏱️" },
                { label: "Steps bearbeitet", value: "142", icon: "✅" },
                { label: "Richtig-Quote", value: "74%", icon: "🎯" },
                { label: "Neue Fachbegriffe", value: "23", icon: "📖" },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl px-3 py-2.5 text-center" style={{ backgroundColor: BONE }}>
                  <span className="text-base">{stat.icon}</span>
                  <p className="text-xs font-bold" style={{ color: ROSE }}>{stat.value}</p>
                  <p className="text-[8px] text-[#86868b]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L124: Bookmark / Lesezeichen ── */}
        <VariantCard label="L124" name="Lesezeichen" description="Wichtige Steps markieren und später wiederfinden">
          <div className="py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold" style={{ color: MAUVE }}>Deine Lesezeichen</span>
              <span className="text-[10px] text-[#86868b]">6 gespeichert</span>
            </div>
            <div className="space-y-2">
              {[
                { title: "Dekubitus-Stadien I-IV", ce: "CE 05 LE 02", type: "Erklärung", saved: "Gestern" },
                { title: "Braden-Skala Auswertung", ce: "CE 05 LE 02", type: "Tabelle", saved: "Vor 2 Tagen" },
                { title: "Lagerungstechniken", ce: "CE 05 LE 03", type: "Bild + Text", saved: "Vor 3 Tagen" },
              ].map((bm, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ backgroundColor: BONE }}>
                  <Bookmark className="h-4 w-4" style={{ color: ROSE, fill: `${ROSE}` }} />
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold">{bm.title}</p>
                    <div className="flex items-center gap-2 text-[9px] text-[#86868b]">
                      <span>{bm.ce}</span>
                      <span>·</span>
                      <span>{bm.type}</span>
                      <span>·</span>
                      <span>{bm.saved}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5" style={{ color: SAND }} />
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L125: Zertifikat / Abschluss ── */}
        <VariantCard label="L125" name="Zertifikat" description="Digitales Zertifikat nach CE-Abschluss — teilbar, exportierbar">
          <div className="py-4">
            <div className="rounded-2xl p-5 text-center" style={{ background: `linear-gradient(135deg, ${BONE} 0%, white 50%, ${BLUSH}20 100%)`, border: `2px solid ${ROSE}30` }}>
              <div className="mb-2 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${ROSE}15` }}>
                  <Award className="h-6 w-6" style={{ color: ROSE }} />
                </div>
              </div>
              <p className="text-[9px] uppercase tracking-widest" style={{ color: TAUPE }}>Zertifikat</p>
              <p className="mt-1 text-base font-bold" style={{ color: MAUVE }}>CE 01 — Ausbildungsstart</p>
              <p className="mt-0.5 text-xs">Ayşe Kaya</p>
              <p className="mt-1 text-[10px] text-[#86868b]">hat alle Lerneinheiten erfolgreich abgeschlossen</p>
              <div className="mt-3 flex items-center justify-center gap-4 text-[9px]" style={{ color: OAK }}>
                <span>89% Richtig-Quote</span>
                <span>·</span>
                <span>12h Lernzeit</span>
                <span>·</span>
                <span>04.04.2026</span>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <button className="flex items-center gap-1 rounded-full px-3 py-1.5 text-[10px] font-medium" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>
                  <Download className="h-3 w-3" /> PDF
                </button>
                <button className="flex items-center gap-1 rounded-full px-3 py-1.5 text-[10px] font-medium" style={{ backgroundColor: `${SAND}30`, color: OAK }}>
                  <Share2 className="h-3 w-3" /> Teilen
                </button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 19: NEUE STEP-TYPEN
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="steps" title="Neue Step-Typen" subtitle="Interaktive Lern-Steps — Pflege-spezifisch, abwechslungsreich, didaktisch sinnvoll" />

        {/* ── L126: Lückentext mit Wort-Bank ── */}
        <VariantCard label="L126" name="Lückentext + Wortbank" description="Drag-Wörter in Lücken ziehen — aktives Formulieren statt nur Auswählen">
          <div className="py-4">
            <p className="mb-3 text-[11px] leading-relaxed">
              Ein Dekubitus entsteht durch anhaltenden{" "}
              <span className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs font-bold" style={{ backgroundColor: `${ROSE}15`, color: ROSE, border: `1.5px dashed ${ROSE}` }}>Druck</span>
              {" "}auf die Haut. Besonders gefährdet sind Stellen über{" "}
              <span className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs font-bold" style={{ backgroundColor: `${ROSE}15`, color: ROSE, border: `1.5px dashed ${ROSE}` }}>Knochenvorsprüngen</span>
              . Die wichtigste Prophylaxe ist der regelmäßige{" "}
              <span className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs" style={{ backgroundColor: `${SAND}20`, color: "#86868b", border: `1.5px dashed ${SAND}` }}>???</span>
              .
            </p>
            <div className="flex flex-wrap gap-2 rounded-xl p-3" style={{ backgroundColor: BONE }}>
              <span className="text-[9px] font-bold" style={{ color: TAUPE }}>WORTBANK:</span>
              {["Lagerungswechsel", "Medikament", "Verband"].map((w, i) => (
                <motion.span key={i} className="cursor-grab rounded-lg px-2.5 py-1 text-[11px] font-medium shadow-sm" style={{ backgroundColor: "white", border: `1px solid ${SAND}` }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {w}
                </motion.span>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L127: Fehler finden ── */}
        <VariantCard label="L127" name="Fehler finden" description="Text mit absichtlichen Fehlern — Schüler markiert die falschen Stellen">
          <div className="py-4">
            <p className="mb-2 text-xs font-semibold" style={{ color: MAUVE }}>Finde 3 Fehler im Pflegebericht:</p>
            <div className="rounded-xl p-4 text-[11px] leading-relaxed" style={{ backgroundColor: BONE }}>
              &ldquo;Patient Herr Weber, 78 J., hat einen Dekubitus{" "}
              <span className="rounded px-1 py-0.5 font-bold cursor-pointer" style={{ backgroundColor: `${ROSE}20`, color: ROSE, textDecoration: "line-through" }}>Grad 5</span>
              {" "}am Steißbein. Die Wunde wird{" "}
              <span className="rounded px-1 py-0.5 cursor-pointer" style={{ backgroundColor: `${SAND}30` }}>täglich</span>
              {" "}versorgt. Der Patient wird alle{" "}
              <span className="rounded px-1 py-0.5 font-bold cursor-pointer" style={{ backgroundColor: `${ROSE}20`, color: ROSE, textDecoration: "line-through" }}>6 Stunden</span>
              {" "}umgelagert. Die Haut wird mit{" "}
              <span className="rounded px-1 py-0.5 cursor-pointer" style={{ backgroundColor: `${SAND}30` }}>Hautpflegeöl</span>
              {" "}versorgt.&rdquo;
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[10px]" style={{ color: ROSE }}>2 von 3 Fehlern gefunden</span>
              <span className="text-[9px] text-[#86868b]">Tippe auf die falschen Stellen</span>
            </div>
          </div>
        </VariantCard>

        {/* ── L128: Concept Map (Begriffsnetz) ── */}
        <VariantCard label="L128" name="Concept Map" description="Begriffe verbinden — Zusammenhänge zwischen Konzepten visualisieren">
          <div className="py-4">
            <div className="relative h-52 rounded-xl" style={{ backgroundColor: BONE }}>
              <svg viewBox="0 0 300 180" className="h-full w-full">
                {/* Verbindungslinien */}
                <line x1="150" y1="30" x2="60" y2="90" stroke={SAND} strokeWidth="1.5" strokeDasharray="4 2" />
                <line x1="150" y1="30" x2="240" y2="90" stroke={SAND} strokeWidth="1.5" strokeDasharray="4 2" />
                <line x1="150" y1="30" x2="150" y2="140" stroke={ROSE} strokeWidth="2" />
                <line x1="60" y1="90" x2="150" y2="140" stroke={ROSE} strokeWidth="2" />
                {/* Knoten */}
                <rect x="100" y="12" width="100" height="30" rx="15" fill={ROSE} />
                <text x="150" y="32" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Dekubitus</text>
                <rect x="10" y="75" width="100" height="30" rx="15" fill="white" stroke={SAND} strokeWidth="1.5" />
                <text x="60" y="95" textAnchor="middle" fontSize="9" fill={MAUVE} fontWeight="600">Risikofaktoren</text>
                <rect x="190" y="75" width="100" height="30" rx="15" fill="white" stroke={SAND} strokeWidth="1.5" />
                <text x="240" y="95" textAnchor="middle" fontSize="9" fill={MAUVE} fontWeight="600">Stadien I-IV</text>
                <rect x="100" y="125" width="100" height="30" rx="15" fill={`${ROSE}15`} stroke={ROSE} strokeWidth="1.5" strokeDasharray="4 2" />
                <text x="150" y="145" textAnchor="middle" fontSize="9" fill={ROSE} fontWeight="600">??? ziehen</text>
                {/* Verbindungslabel */}
                <text x="95" y="58" fontSize="7" fill={TAUPE}>hat</text>
                <text x="200" y="58" fontSize="7" fill={TAUPE}>hat</text>
                <text x="158" y="90" fontSize="7" fill={ROSE}>führt zu</text>
              </svg>
            </div>
            <div className="mt-2 flex gap-2">
              {["Prophylaxe", "Schmerz", "Wundheilung"].map((w, i) => (
                <span key={i} className="rounded-full px-3 py-1 text-[10px] font-medium cursor-grab" style={{ backgroundColor: "white", border: `1.5px solid ${SAND}`, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                  {w}
                </span>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L129: Rollenspiel-Dialog ── */}
        <VariantCard label="L129" name="Rollenspiel-Dialog" description="Du bist die Pflegekraft — wähle die beste Antwort im Gespräch">
          <div className="py-4">
            <div className="mb-2 flex items-center gap-2 rounded-full px-3 py-1" style={{ backgroundColor: `${MAUVE}08` }}>
              <Users className="h-3 w-3" style={{ color: MAUVE }} />
              <span className="text-[9px] font-bold" style={{ color: MAUVE }}>ROLLENSPIEL: Du bist Pflegekraft Ayşe</span>
            </div>
            <div className="space-y-2">
              {/* Patient spricht */}
              <div className="flex gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full text-sm" style={{ backgroundColor: `${SAND}30` }}>👴</div>
                <div className="max-w-[80%] rounded-2xl rounded-bl-sm px-3 py-2 text-[11px]" style={{ backgroundColor: BONE }}>
                  &ldquo;Schwester, ich habe Schmerzen am Rücken. Es brennt so.&rdquo;
                </div>
              </div>
              {/* Antwort-Optionen */}
              <div className="pl-9 space-y-1.5">
                <p className="text-[9px] font-bold" style={{ color: ROSE }}>Was sagst du?</p>
                {[
                  { text: "Darf ich mir das mal ansehen? Wo genau tut es weh?", good: true },
                  { text: "Das wird schon wieder. Nehmen Sie eine Tablette.", good: false },
                  { text: "Ich informiere sofort den Arzt.", good: false },
                ].map((opt, i) => (
                  <button key={i} className="w-full rounded-xl px-3 py-2.5 text-left text-[11px]" style={{ backgroundColor: "white", border: `1.5px solid ${opt.good ? `${ROSE}40` : SAND}` }}>
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L130: Prioritäten-Matrix ── */}
        <VariantCard label="L130" name="Prioritäten-Matrix" description="4-Felder-Matrix: Wichtig/Dringend — Maßnahmen einordnen">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Ordne die Maßnahmen in die richtige Kategorie:</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { x: "Dringend + Wichtig", color: ROSE, items: ["Arzt informieren"] },
                { x: "Wichtig, nicht dringend", color: OAK, items: ["Pflegeplan updaten"] },
                { x: "Dringend, nicht wichtig", color: TAUPE, items: [] },
                { x: "Weder noch", color: SAND, items: [] },
              ].map((cell, i) => (
                <div key={i} className="rounded-xl p-2.5 min-h-[70px]" style={{ backgroundColor: `${cell.color}08`, border: `1.5px dashed ${cell.color}40` }}>
                  <p className="text-[8px] font-bold mb-1" style={{ color: cell.color }}>{cell.x}</p>
                  {cell.items.map((item, j) => (
                    <span key={j} className="inline-block rounded-lg px-2 py-0.5 text-[9px] font-medium" style={{ backgroundColor: `${cell.color}15`, color: cell.color }}>{item}</span>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-2 flex gap-1.5">
              {["Wunde versorgen", "Bett beziehen", "Dokumentation"].map((item, i) => (
                <span key={i} className="rounded-lg px-2 py-1 text-[9px] font-medium cursor-grab" style={{ backgroundColor: "white", border: `1px solid ${SAND}`, boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }}>{item}</span>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L131: Pro/Contra Abwägung ── */}
        <VariantCard label="L131" name="Pro / Contra" description="Argumente für und gegen eine Maßnahme sortieren">
          <div className="py-4">
            <p className="mb-3 text-xs font-medium">Patient lehnt Lagerungswechsel ab. Was spricht dafür, was dagegen?</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl p-3" style={{ backgroundColor: `${ROSE}06` }}>
                <p className="mb-2 text-[10px] font-bold" style={{ color: ROSE }}>✅ Pro (Lagerung)</p>
                <div className="space-y-1">
                  <div className="rounded-lg px-2 py-1.5 text-[10px]" style={{ backgroundColor: "white" }}>Dekubitus-Prophylaxe</div>
                  <div className="rounded-lg px-2 py-1.5 text-[10px]" style={{ backgroundColor: "white" }}>Fachlicher Standard</div>
                </div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: `${MAUVE}06` }}>
                <p className="mb-2 text-[10px] font-bold" style={{ color: MAUVE }}>❌ Contra (Ablehnung)</p>
                <div className="space-y-1">
                  <div className="rounded-lg px-2 py-1.5 text-[10px]" style={{ backgroundColor: "white" }}>Patientenautonomie</div>
                </div>
              </div>
            </div>
            <div className="mt-2 flex gap-1.5">
              {["Schmerzlinderung", "Selbstbestimmung", "Haftungsrisiko"].map((item, i) => (
                <span key={i} className="rounded-lg px-2 py-1 text-[9px] font-medium cursor-grab" style={{ backgroundColor: "white", border: `1px solid ${SAND}` }}>{item}</span>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L132: Wortwolke erstellen ── */}
        <VariantCard label="L132" name="Wortwolke" description="Brainstorming: Was fällt dir zu einem Thema ein? Freie Eingabe">
          <div className="py-4">
            <p className="mb-3 text-xs font-medium" style={{ color: MAUVE }}>Was assoziierst du mit &ldquo;Dekubitus&rdquo;?</p>
            <div className="rounded-xl p-4 flex flex-wrap items-center justify-center gap-2" style={{ backgroundColor: BONE }}>
              {[
                { word: "Druck", size: "text-lg", weight: "bold" },
                { word: "Haut", size: "text-base", weight: "semibold" },
                { word: "Schmerz", size: "text-sm", weight: "medium" },
                { word: "Lagerung", size: "text-lg", weight: "bold" },
                { word: "Steißbein", size: "text-xs", weight: "medium" },
                { word: "Wunde", size: "text-base", weight: "semibold" },
                { word: "Prophylaxe", size: "text-sm", weight: "medium" },
              ].map((w, i) => (
                <span key={i} className={`${w.size} font-${w.weight}`} style={{ color: [ROSE, MAUVE, OAK, TAUPE][i % 4], opacity: 0.6 + Math.random() * 0.4 }}>
                  {w.word}
                </span>
              ))}
              <motion.span className="text-sm font-medium" style={{ color: ROSE }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }}>|</motion.span>
            </div>
            <div className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2" style={{ backgroundColor: "white", border: `1px solid ${SAND}` }}>
              <input className="flex-1 bg-transparent text-xs outline-none" placeholder="Noch ein Begriff..." />
              <button className="rounded-full px-3 py-1 text-[10px] font-medium text-white" style={{ backgroundColor: ROSE }}>+</button>
            </div>
          </div>
        </VariantCard>

        {/* ── L133: Rechenaufgabe (Dosierung) ── */}
        <VariantCard label="L133" name="Dosierungs-Rechnung" description="Medikamenten-Dosierung berechnen — klinisch relevante Mathematik">
          <div className="py-4">
            <div className="rounded-xl p-4" style={{ backgroundColor: BONE }}>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-sm" style={{ backgroundColor: `${MAUVE}15` }}>💊</div>
                <div>
                  <p className="text-xs font-bold">Rechenaufgabe</p>
                  <p className="text-[9px] text-[#86868b]">Medikamenten-Dosierung</p>
                </div>
              </div>
              <p className="mb-3 text-[11px] leading-relaxed">
                Verordnet: <strong>Ibuprofen 400mg</strong> alle 8 Stunden.<br />
                Vorrätig: Tabletten à <strong>200mg</strong>.<br />
                Wie viele Tabletten pro <strong>Tag</strong>?
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-xl overflow-hidden" style={{ border: `1.5px solid ${SAND}` }}>
                  <button className="px-3 py-2 text-sm font-bold" style={{ backgroundColor: `${SAND}20`, color: TAUPE }}>−</button>
                  <span className="px-4 py-2 text-sm font-bold" style={{ color: ROSE }}>6</span>
                  <button className="px-3 py-2 text-sm font-bold" style={{ backgroundColor: `${SAND}20`, color: TAUPE }}>+</button>
                </div>
                <span className="text-xs text-[#86868b]">Tabletten pro Tag</span>
              </div>
              <p className="mt-2 text-[9px] text-[#86868b]">💡 Rechnung: 400mg ÷ 200mg = 2 Tabletten × 3 Gaben = 6</p>
            </div>
          </div>
        </VariantCard>

        {/* ── L134: Tabelle ausfüllen ── */}
        <VariantCard label="L134" name="Tabelle ausfüllen" description="Leere Zellen ergänzen — strukturiertes Wissen abfragen">
          <div className="py-4">
            <p className="mb-2 text-xs font-semibold" style={{ color: MAUVE }}>Ergänze die fehlenden Zellen:</p>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              <div className="grid grid-cols-3 text-[9px] font-bold" style={{ backgroundColor: `${MAUVE}10`, color: MAUVE }}>
                <span className="px-2 py-2">Stadium</span>
                <span className="px-2 py-2">Tiefe</span>
                <span className="px-2 py-2">Merkmale</span>
              </div>
              {[
                { stadium: "I", tiefe: "Oberhaut intakt", merkmale: "Nicht wegdrückbare Rötung" },
                { stadium: "II", tiefe: "???", merkmale: "Blase, Teilverlust" },
                { stadium: "III", tiefe: "Bis Subkutis", merkmale: "???" },
                { stadium: "IV", tiefe: "???", merkmale: "???" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-t text-[10px]" style={{ borderColor: `${SAND}40` }}>
                  <span className="px-2 py-2 font-bold" style={{ color: MAUVE }}>{row.stadium}</span>
                  <span className="px-2 py-2" style={{ color: row.tiefe === "???" ? ROSE : "#1d1d1f", fontWeight: row.tiefe === "???" ? 600 : 400, backgroundColor: row.tiefe === "???" ? `${ROSE}06` : "transparent" }}>
                    {row.tiefe}
                  </span>
                  <span className="px-2 py-2" style={{ color: row.merkmale === "???" ? ROSE : "#1d1d1f", fontWeight: row.merkmale === "???" ? 600 : 400, backgroundColor: row.merkmale === "???" ? `${ROSE}06` : "transparent" }}>
                    {row.merkmale}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L135: Entscheidungskette ── */}
        <VariantCard label="L135" name="Entscheidungskette" description="Schritt für Schritt: Wenn X → dann Y. Pflegerisches Vorgehen als Kette">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Was machst du zuerst? Bringe in die richtige Reihenfolge:</p>
            <div className="space-y-1">
              {[
                { step: 1, text: "Hautstelle inspizieren", done: true },
                { step: 2, text: "Fingertest durchführen", done: true },
                { step: 3, text: "Stadium bestimmen", done: false, active: true },
                { step: 4, text: "Dokumentation erstellen", done: false },
                { step: 5, text: "Arzt informieren", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold" style={{
                      backgroundColor: item.done ? ROSE : item.active ? "white" : `${SAND}30`,
                      color: item.done ? "white" : item.active ? ROSE : "#86868b",
                      border: item.active ? `2px solid ${ROSE}` : "none"
                    }}>
                      {item.done ? <Check className="h-3.5 w-3.5" /> : item.step}
                    </div>
                    {i < 4 && <div className="h-3 w-0.5" style={{ backgroundColor: item.done ? ROSE : SAND }} />}
                  </div>
                  <span className="text-[11px] font-medium" style={{ color: item.done ? "#86868b" : item.active ? ROSE : "#1d1d1f", textDecoration: item.done ? "line-through" : "none" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L136: Lückenbild (Beschriftung ergänzen) ── */}
        <VariantCard label="L136" name="Lückenbild" description="Bild mit leeren Beschriftungen — Schüler tippt die Begriffe ein">
          <div className="py-4">
            <div className="relative rounded-xl h-48" style={{ backgroundColor: BONE }}>
              <svg viewBox="0 0 280 170" className="h-full w-full">
                {/* Vereinfachte Hautschichten */}
                <rect x="40" y="20" width="200" height="30" rx="2" fill={`${BLUSH}50`} stroke={ROSE} strokeWidth="1" />
                <rect x="40" y="50" width="200" height="35" rx="2" fill={`${SAND}40`} stroke={OAK} strokeWidth="1" />
                <rect x="40" y="85" width="200" height="40" rx="2" fill={`${TAUPE}30`} stroke={TAUPE} strokeWidth="1" />
                <rect x="40" y="125" width="200" height="30" rx="2" fill={`${MAUVE}15`} stroke={MAUVE} strokeWidth="1" />
                {/* Labels */}
                <line x1="240" y1="35" x2="270" y2="35" stroke={ROSE} strokeWidth="1" />
                <foreignObject x="170" y="6" width="70" height="20">
                  <div style={{ fontSize: "8px", fontWeight: "bold", color: ROSE, textAlign: "center" }}>Epidermis ✓</div>
                </foreignObject>
                <line x1="240" y1="67" x2="270" y2="67" stroke={SAND} strokeWidth="1" strokeDasharray="3 2" />
                <foreignObject x="170" y="56" width="70" height="20">
                  <div style={{ fontSize: "8px", color: "#86868b", textAlign: "center", borderBottom: `1px dashed ${ROSE}` }}>???</div>
                </foreignObject>
                <line x1="240" y1="105" x2="270" y2="105" stroke={SAND} strokeWidth="1" strokeDasharray="3 2" />
                <foreignObject x="170" y="94" width="70" height="20">
                  <div style={{ fontSize: "8px", color: "#86868b", textAlign: "center", borderBottom: `1px dashed ${ROSE}` }}>???</div>
                </foreignObject>
              </svg>
            </div>
            <div className="mt-2 flex gap-2">
              {["Dermis", "Subkutis", "Muskel"].map((w, i) => (
                <span key={i} className="rounded-full px-2.5 py-1 text-[10px] font-medium cursor-grab" style={{ backgroundColor: "white", border: `1px solid ${SAND}` }}>{w}</span>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L137: Zeitleiste ordnen ── */}
        <VariantCard label="L137" name="Zeitleiste ordnen" description="Ereignisse chronologisch ordnen — Geschichte der Pflege oder Krankheitsverlauf">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Ordne den Verlauf chronologisch:</p>
            <div className="relative pl-6">
              <div className="absolute left-3 top-0 bottom-0 w-0.5" style={{ backgroundColor: SAND }} />
              {[
                { time: "Tag 1", text: "Aufnahme, Hautassessment", placed: true },
                { time: "Tag 3", text: "Rötung am Steißbein entdeckt", placed: true },
                { time: "???", text: "Ziehe hierher", placed: false },
                { time: "Tag 14", text: "Wunde verheilt", placed: true },
              ].map((event, i) => (
                <div key={i} className="relative mb-3 flex items-center gap-3">
                  <div className="absolute left-[-13px] h-3 w-3 rounded-full" style={{ backgroundColor: event.placed ? ROSE : "white", border: event.placed ? "none" : `2px dashed ${ROSE}` }} />
                  <div className="ml-2 flex-1 rounded-xl px-3 py-2" style={{ backgroundColor: event.placed ? BONE : `${ROSE}06`, border: event.placed ? "none" : `1.5px dashed ${ROSE}40` }}>
                    <span className="text-[9px] font-bold" style={{ color: event.placed ? OAK : ROSE }}>{event.time}</span>
                    <p className="text-[10px]" style={{ color: event.placed ? "#1d1d1f" : ROSE }}>{event.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <span className="mt-1 inline-block rounded-lg px-3 py-1.5 text-[10px] font-medium cursor-grab" style={{ backgroundColor: "white", border: `1.5px solid ${SAND}`, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
              Braden-Score erhoben (Tag 7)
            </span>
          </div>
        </VariantCard>

        {/* ── L138: Diktat → Fachsprache ── */}
        <VariantCard label="L138" name="Fachsprache-Übersetzung" description="Alltagssprache → Fachsprache: 'Wundliegen' → ?">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Übersetze in Fachsprache:</p>
            <div className="space-y-2.5">
              {[
                { alltagssprache: "Wundliegen", fachsprache: "Dekubitus", done: true },
                { alltagssprache: "Blutpfropf im Bein", fachsprache: "Thrombose", done: true },
                { alltagssprache: "Lungenentzündung", fachsprache: "", done: false },
                { alltagssprache: "Austrocknung", fachsprache: "", done: false },
              ].map((pair, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-3 py-2.5" style={{ backgroundColor: BONE }}>
                  <span className="flex-1 text-[11px]">{pair.alltagssprache}</span>
                  <ArrowRight className="h-3 w-3" style={{ color: SAND }} />
                  {pair.done ? (
                    <span className="flex-1 text-[11px] font-semibold" style={{ color: ROSE }}>{pair.fachsprache} ✓</span>
                  ) : (
                    <span className="flex-1 rounded-lg px-2 py-1 text-[11px]" style={{ backgroundColor: "white", border: `1.5px dashed ${ROSE}40`, color: "#86868b" }}>Tippe hier...</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L139: Entschlüsseln (Abkürzungen) ── */}
        <VariantCard label="L139" name="Abkürzungen entschlüsseln" description="Was bedeutet RR? BZ? i.v.? — Pflege-Abkürzungen lernen">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Was bedeuten diese Abkürzungen?</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { abbr: "RR", full: "Blutdruck (Riva-Rocci)", done: true },
                { abbr: "BZ", full: "Blutzucker", done: true },
                { abbr: "i.v.", full: "???", done: false },
                { abbr: "s.c.", full: "???", done: false },
                { abbr: "HF", full: "???", done: false },
                { abbr: "SpO₂", full: "???", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-3 py-2.5" style={{ backgroundColor: item.done ? `${ROSE}06` : BONE }}>
                  <span className="text-sm font-bold font-mono" style={{ color: item.done ? ROSE : MAUVE }}>{item.abbr}</span>
                  <span className="flex-1 text-[10px]" style={{ color: item.done ? "#555" : "#86868b" }}>{item.full}</span>
                  {item.done && <Check className="h-3 w-3" style={{ color: ROSE }} />}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L140: Simulation: Vitalzeichen ablesen ── */}
        <VariantCard label="L140" name="Vitalzeichen ablesen" description="Monitor-Simulation — Werte ablesen und interpretieren">
          <div className="py-4">
            <div className="rounded-xl p-4" style={{ backgroundColor: "#1a1a2e" }}>
              {/* Monitor */}
              <div className="space-y-3">
                {[
                  { label: "HF", value: "92", unit: "bpm", color: "#4ade80", normal: true },
                  { label: "RR", value: "145/88", unit: "mmHg", color: "#f87171", normal: false },
                  { label: "SpO₂", value: "96", unit: "%", color: "#60a5fa", normal: true },
                  { label: "Temp", value: "38.4", unit: "°C", color: "#fbbf24", normal: false },
                ].map((vital, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[10px] font-mono" style={{ color: vital.color }}>{vital.label}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold font-mono" style={{ color: vital.color }}>{vital.value}</span>
                      <span className="text-[9px] font-mono" style={{ color: `${vital.color}80` }}>{vital.unit}</span>
                      {!vital.normal && <motion.span className="text-[9px]" animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>⚠️</motion.span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <p className="mb-2 text-xs font-semibold" style={{ color: MAUVE }}>Welche Werte sind auffällig?</p>
              <div className="flex flex-wrap gap-1.5">
                {["HF", "RR", "SpO₂", "Temp"].map((v, i) => (
                  <button key={i} className="rounded-lg px-3 py-1.5 text-[11px] font-medium" style={{
                    backgroundColor: (i === 1 || i === 3) ? `${ROSE}15` : "white",
                    border: `1.5px solid ${(i === 1 || i === 3) ? ROSE : SAND}`,
                    color: (i === 1 || i === 3) ? ROSE : "#1d1d1f"
                  }}>
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L141: Formulierung bewerten ── */}
        <VariantCard label="L141" name="Formulierung bewerten" description="Ist dieser Pflegebericht-Satz korrekt formuliert? Bewerte und verbessere">
          <div className="py-4">
            <p className="mb-2 text-[10px] font-bold" style={{ color: MAUVE }}>Bewerte diese Dokumentation:</p>
            <div className="mb-3 rounded-xl p-3 text-[11px] italic" style={{ backgroundColor: BONE }}>
              &ldquo;Patient hat heute schlecht geschlafen und war müde.&rdquo;
            </div>
            <div className="space-y-1.5">
              {[
                { emoji: "🟢", label: "Fachlich korrekt", selected: false },
                { emoji: "🟡", label: "Verständlich, aber nicht fachlich genug", selected: true },
                { emoji: "🔴", label: "Falsch formuliert", selected: false },
              ].map((opt, i) => (
                <button key={i} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-[11px] text-left" style={{ backgroundColor: opt.selected ? `${ROSE}08` : "white", border: `1.5px solid ${opt.selected ? ROSE : SAND}` }}>
                  <span>{opt.emoji}</span>
                  <span className="font-medium">{opt.label}</span>
                </button>
              ))}
            </div>
            <div className="mt-3 rounded-xl p-3" style={{ backgroundColor: `${ROSE}06` }}>
              <p className="text-[10px] font-bold" style={{ color: ROSE }}>Bessere Formulierung:</p>
              <p className="text-[10px] text-[#555]">&ldquo;Pat. berichtet über Ein- und Durchschlafstörungen. Wirkung der Schlafmedikation unzureichend. Tagesmüdigkeit beobachtet.&rdquo;</p>
            </div>
          </div>
        </VariantCard>

        {/* ── L142: Schnell-Quiz (Blitz-Runde) ── */}
        <VariantCard label="L142" name="Blitz-Quiz" description="10 Fragen in 60 Sekunden — Wissen unter Zeitdruck abrufen">
          <div className="py-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" style={{ color: ROSE }} />
                <span className="text-xs font-bold" style={{ color: ROSE }}>BLITZ-RUNDE</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div className="flex items-center gap-1 rounded-full px-2.5 py-1" style={{ backgroundColor: `${MAUVE}10` }} animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                  <Clock className="h-3 w-3" style={{ color: MAUVE }} />
                  <span className="text-[11px] font-mono font-bold" style={{ color: MAUVE }}>0:38</span>
                </motion.div>
                <span className="text-[10px] font-bold" style={{ color: ROSE }}>7/10</span>
              </div>
            </div>
            <div className="mb-3 rounded-xl p-4 text-center" style={{ backgroundColor: BONE }}>
              <p className="text-sm font-bold">Wie viele Dekubitus-Stadien gibt es?</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["3", "4", "5", "6"].map((opt, i) => (
                <motion.button key={i} className="rounded-xl py-3 text-center text-sm font-bold" style={{ backgroundColor: "white", border: `1.5px solid ${SAND}`, color: MAUVE }} whileTap={{ scale: 0.95 }}>
                  {opt}
                </motion.button>
              ))}
            </div>
            {/* Progress Dots */}
            <div className="mt-3 flex justify-center gap-1">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="h-2 w-2 rounded-full" style={{ backgroundColor: i < 7 ? ROSE : i === 7 ? `${ROSE}40` : `${SAND}40` }} />
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L143: Schätzfrage (Slider) ── */}
        <VariantCard label="L143" name="Schätzfrage" description="Wie viel, wie oft, wie lange? — Slider zum Schätzen mit Auflösung">
          <div className="py-4">
            <p className="mb-4 text-sm font-medium text-center">Wie oft sollte ein immobiler Patient umgelagert werden?</p>
            <div className="px-4">
              <div className="relative mb-2">
                <div className="h-2 rounded-full" style={{ backgroundColor: `${SAND}40` }}>
                  <div className="h-full rounded-full" style={{ width: "33%", backgroundColor: ROSE }} />
                </div>
                <div className="absolute top-[-6px] rounded-full h-5 w-5 shadow-md" style={{ left: "33%", transform: "translateX(-50%)", backgroundColor: ROSE, border: "3px solid white" }} />
              </div>
              <div className="flex justify-between text-[8px] text-[#86868b]">
                <span>Alle 30 Min</span>
                <span>Alle 2h</span>
                <span>Alle 4h</span>
                <span>Alle 8h</span>
              </div>
              <div className="mt-2 text-center">
                <span className="text-base font-bold" style={{ color: ROSE }}>Alle 2 Stunden</span>
              </div>
            </div>
            <div className="mt-3 rounded-xl p-2.5 text-center text-[10px]" style={{ backgroundColor: `${ROSE}06` }}>
              ✅ Korrekt! Laut DNQP-Standard: spätestens alle 2 Stunden
            </div>
          </div>
        </VariantCard>

        {/* ── L144: Lernkarte mit Eselsbrücke ── */}
        <VariantCard label="L144" name="Eselsbrücke" description="Merkhilfe: Mnemonic, Reim, Akronym — zum Einprägen">
          <div className="py-4">
            <div className="rounded-2xl p-5 text-center" style={{ background: `linear-gradient(135deg, ${BONE}, white, ${BLUSH}15)`, border: `1.5px solid ${SAND}` }}>
              <span className="text-[9px] uppercase tracking-widest" style={{ color: TAUPE }}>Eselsbrücke</span>
              <p className="mt-2 text-lg font-bold" style={{ color: MAUVE }}>D-E-K-U</p>
              <div className="mt-3 space-y-1 text-left max-w-[200px] mx-auto">
                {[
                  { letter: "D", text: "Druck vermeiden" },
                  { letter: "E", text: "Ernährung optimieren" },
                  { letter: "K", text: "Kontrolle der Haut" },
                  { letter: "U", text: "Umlagern regelmäßig" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg text-[11px] font-bold text-white" style={{ backgroundColor: ROSE }}>{item.letter}</span>
                    <span className="text-[11px]">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-center gap-2">
                <button className="rounded-full px-3 py-1.5 text-[10px] font-medium" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>
                  <Bookmark className="inline h-3 w-3 mr-1" />Merken
                </button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L145: Pflege-Bingo ── */}
        <VariantCard label="L145" name="Pflege-Bingo" description="5×5 Grid mit Begriffen — streiche ab wenn die Definition genannt wird">
          <div className="py-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold" style={{ color: MAUVE }}>Pflege-Bingo!</span>
              <span className="text-[10px]" style={{ color: ROSE }}>4 von 5 in einer Reihe!</span>
            </div>
            <div className="grid grid-cols-5 gap-1">
              {[
                { text: "Dekubitus", hit: true },
                { text: "Kontraktur", hit: false },
                { text: "Thrombose", hit: true },
                { text: "Pneumonie", hit: true },
                { text: "Exsikkose", hit: false },
                { text: "Aspiration", hit: false },
                { text: "Obstipation", hit: true },
                { text: "Dysphagie", hit: false },
                { text: "Apnoe", hit: false },
                { text: "Zyanose", hit: true },
                { text: "Bradykardie", hit: false },
                { text: "Aszites", hit: false },
                { text: "⭐", hit: true },
                { text: "Ikterus", hit: false },
                { text: "Ödem", hit: true },
                { text: "Anämie", hit: false },
                { text: "Embolie", hit: true },
                { text: "Sepsis", hit: false },
                { text: "Ulcus", hit: false },
                { text: "Stenose", hit: false },
                { text: "Hämatom", hit: true },
                { text: "Fraktur", hit: false },
                { text: "Luxation", hit: false },
                { text: "Infektion", hit: true },
                { text: "Allergie", hit: false },
              ].map((cell, i) => (
                <div key={i} className="flex h-11 items-center justify-center rounded-lg text-[7px] font-medium text-center leading-tight p-0.5" style={{
                  backgroundColor: cell.hit ? `${ROSE}20` : "white",
                  color: cell.hit ? ROSE : "#555",
                  border: `1px solid ${cell.hit ? ROSE : SAND}40`,
                  fontWeight: cell.hit ? 700 : 500,
                }}>
                  {cell.text}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 20: NOCH MEHR STEP-TYPEN
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="steps2" title="Noch mehr Step-Typen" subtitle="Kreative Lernformate — Puzzle, Simulation, Wettbewerb, KI-gestützt" />

        {/* ── L146: Puzzle (Bild zusammensetzen) ── */}
        <VariantCard label="L146" name="Bild-Puzzle" description="Anatomie-Bild in 9 Teile zerlegt — zusammensetzen und beschriften">
          <div className="py-4">
            <p className="mb-2 text-xs font-semibold" style={{ color: MAUVE }}>Setze das Bild zusammen:</p>
            <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              {[
                { filled: true, content: "🧠" },
                { filled: false, content: "" },
                { filled: true, content: "👁️" },
                { filled: true, content: "🫁" },
                { filled: true, content: "❤️" },
                { filled: false, content: "" },
                { filled: false, content: "" },
                { filled: true, content: "🦴" },
                { filled: true, content: "🦶" },
              ].map((cell, i) => (
                <div key={i} className="flex h-16 items-center justify-center text-2xl" style={{ backgroundColor: cell.filled ? `${BLUSH}20` : `${SAND}15`, border: cell.filled ? "none" : `1.5px dashed ${ROSE}40` }}>
                  {cell.filled ? cell.content : <span className="text-xs" style={{ color: ROSE }}>?</span>}
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-center gap-2">
              {["🦷", "🫀", "👂"].map((piece, i) => (
                <motion.div key={i} className="flex h-12 w-12 items-center justify-center rounded-xl text-xl cursor-grab shadow-sm" style={{ backgroundColor: "white", border: `1.5px solid ${SAND}` }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  {piece}
                </motion.div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L147: Gesprächsführung bewerten ── */}
        <VariantCard label="L147" name="Gesprächsanalyse" description="Dialog lesen und bewerten — Was war gut? Was könnte besser sein?">
          <div className="py-4">
            <div className="mb-3 rounded-xl p-3" style={{ backgroundColor: BONE }}>
              <div className="space-y-2 text-[11px]">
                <div className="flex gap-2">
                  <span className="font-bold" style={{ color: ROSE }}>PK:</span>
                  <span>&ldquo;Herr Weber, ich muss Sie jetzt umlagern.&rdquo;</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold" style={{ color: OAK }}>Pat:</span>
                  <span>&ldquo;Nein, ich will nicht. Das tut weh.&rdquo;</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold" style={{ color: ROSE }}>PK:</span>
                  <span>&ldquo;Das muss aber sein. Kommen Sie.&rdquo;</span>
                </div>
              </div>
            </div>
            <p className="mb-2 text-[10px] font-bold" style={{ color: MAUVE }}>Was ist hier problematisch? (Mehrfachauswahl)</p>
            <div className="space-y-1.5">
              {[
                { text: "Keine Erklärung warum umgelagert wird", selected: true },
                { text: "Schmerz des Patienten ignoriert", selected: true },
                { text: "Kein Angebot für Schmerzmedikation", selected: false },
                { text: "Patient wird nicht nach Wünschen gefragt", selected: true },
              ].map((opt, i) => (
                <button key={i} className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-[11px] text-left" style={{ backgroundColor: opt.selected ? `${ROSE}08` : "white", border: `1.5px solid ${opt.selected ? ROSE : SAND}` }}>
                  <div className="flex h-4 w-4 items-center justify-center rounded" style={{ backgroundColor: opt.selected ? ROSE : "white", border: `1.5px solid ${opt.selected ? ROSE : SAND}` }}>
                    {opt.selected && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span>{opt.text}</span>
                </button>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L148: Satzbausteine (Drag Sentence) ── */}
        <VariantCard label="L148" name="Satzbausteine" description="Wörter in die richtige Reihenfolge bringen — Fachsatz formulieren">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Bilde einen korrekten Fachsatz:</p>
            <div className="mb-3 rounded-xl p-3 min-h-[44px] flex flex-wrap gap-1.5 items-center" style={{ backgroundColor: BONE, border: `1.5px dashed ${ROSE}40` }}>
              {["Der Patient", "zeigt eine", "nicht wegdrückbare"].map((w, i) => (
                <span key={i} className="rounded-lg px-2 py-1 text-[11px] font-medium" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>{w}</span>
              ))}
              <span className="text-[11px] text-[#86868b]">...</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Rötung", "am Steißbein", "Stadium I", "entsprechend"].map((w, i) => (
                <motion.span key={i} className="rounded-lg px-2.5 py-1.5 text-[11px] font-medium cursor-grab shadow-sm" style={{ backgroundColor: "white", border: `1px solid ${SAND}` }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {w}
                </motion.span>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L149: Spot the Difference ── */}
        <VariantCard label="L149" name="Unterschiede finden" description="Zwei Bilder vergleichen — was hat sich verändert? (Wundverlauf)">
          <div className="py-4">
            <p className="mb-2 text-xs font-semibold" style={{ color: MAUVE }}>Finde 3 Unterschiede zwischen Tag 1 und Tag 7:</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Tag 1", items: [{ text: "Rötung 4×3 cm", y: 40 }, { text: "Haut intakt", y: 70 }, { text: "Warm", y: 100 }] },
                { label: "Tag 7", items: [{ text: "Rötung 2×2 cm", y: 40, changed: true }, { text: "Kleine Blase", y: 70, changed: true }, { text: "Normal", y: 100, changed: true }] },
              ].map((side, i) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
                  <div className="px-3 py-1.5 text-center text-[10px] font-bold" style={{ backgroundColor: BONE, color: MAUVE }}>{side.label}</div>
                  <div className="relative h-32 flex flex-col items-center justify-center gap-2 p-2" style={{ backgroundColor: `${BLUSH}10` }}>
                    <div className="h-12 w-12 rounded-full" style={{ backgroundColor: i === 0 ? `${MAUVE}30` : `${BLUSH}30` }} />
                    {side.items.map((item, j) => (
                      <span key={j} className="text-[8px] cursor-pointer rounded px-1" style={{
                        color: (item as {changed?: boolean}).changed ? ROSE : "#555",
                        backgroundColor: (item as {changed?: boolean}).changed ? `${ROSE}10` : "transparent",
                        fontWeight: (item as {changed?: boolean}).changed ? 700 : 400,
                      }}>
                        {item.text}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 text-center text-[10px]" style={{ color: ROSE }}>1 von 3 Unterschieden gefunden</div>
          </div>
        </VariantCard>

        {/* ── L150: Empathie-Skala ── */}
        <VariantCard label="L150" name="Empathie-Skala" description="Wie empathisch ist diese Aussage? Slider von 'kalt' bis 'einfühlsam'">
          <div className="py-4">
            <div className="mb-3 rounded-xl p-3" style={{ backgroundColor: BONE }}>
              <p className="text-[11px] italic">&ldquo;Frau Schmidt, ich sehe dass Sie Schmerzen haben. Darf ich Ihnen helfen, eine bequemere Position zu finden?&rdquo;</p>
            </div>
            <p className="mb-2 text-[10px] font-bold" style={{ color: MAUVE }}>Wie empathisch ist diese Aussage?</p>
            <div className="px-2">
              <div className="relative mb-1">
                <div className="h-3 rounded-full" style={{ background: `linear-gradient(to right, ${MAUVE}, ${OAK}, ${ROSE})` }} />
                <div className="absolute top-[-3px] h-5 w-5 rounded-full shadow-md" style={{ left: "78%", transform: "translateX(-50%)", backgroundColor: "white", border: `2.5px solid ${ROSE}` }} />
              </div>
              <div className="flex justify-between text-[8px]">
                <span style={{ color: MAUVE }}>Distanziert</span>
                <span style={{ color: OAK }}>Neutral</span>
                <span style={{ color: ROSE }}>Einfühlsam</span>
              </div>
            </div>
            <div className="mt-3 rounded-lg p-2 text-center text-[10px]" style={{ backgroundColor: `${ROSE}06`, color: ROSE }}>
              ✅ Sehr empathisch! Schmerz wird anerkannt + Hilfe angeboten + Autonomie gewahrt
            </div>
          </div>
        </VariantCard>

        {/* ── L151: Finde den Fehler im Bild ── */}
        <VariantCard label="L151" name="Fehler im Bild" description="Pflegesituation als Bild — was ist falsch? (z.B. Hygiene, Lagerung)">
          <div className="py-4">
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              <div className="relative h-44 flex items-center justify-center" style={{ backgroundColor: BONE }}>
                <svg viewBox="0 0 260 150" className="h-full w-full">
                  {/* Bett */}
                  <rect x="30" y="50" width="200" height="60" rx="4" fill={`${SAND}30`} stroke={SAND} strokeWidth="1"/>
                  <rect x="30" y="40" width="50" height="20" rx="3" fill={`${BLUSH}40`} stroke={ROSE} strokeWidth="1"/>
                  {/* Patient */}
                  <ellipse cx="130" cy="75" rx="50" ry="20" fill={`${BLUSH}30`}/>
                  {/* Fehler-Markierungen */}
                  <circle cx="70" cy="95" r="12" fill="none" stroke={ROSE} strokeWidth="2" strokeDasharray="3 2">
                    <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <text x="95" y="100" fontSize="7" fill={ROSE} fontWeight="bold">Bettgitter oben?</text>
                  <circle cx="180" cy="60" r="12" fill="none" stroke={ROSE} strokeWidth="2" strokeDasharray="3 2">
                    <animate attributeName="r" values="10;14;10" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <text x="155" y="48" fontSize="7" fill={ROSE} fontWeight="bold">Kein Kissen?</text>
                </svg>
              </div>
              <div className="px-4 py-3">
                <p className="text-xs font-semibold" style={{ color: MAUVE }}>Tippe auf die Fehler in der Pflegesituation</p>
                <p className="text-[9px] text-[#86868b]">2 von 3 Fehlern markiert</p>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L152: Chat-Simulation (KI-Patient) ── */}
        <VariantCard label="L152" name="KI-Patient Chat" description="Chatte mit einem KI-simulierten Patienten — übe Anamnese-Gespräche">
          <div className="py-4">
            <div className="mb-2 flex items-center gap-2 rounded-full px-3 py-1" style={{ backgroundColor: `${MAUVE}08` }}>
              <span className="text-sm">🤖</span>
              <span className="text-[9px] font-bold" style={{ color: MAUVE }}>SIMULATION: Du führst ein Anamnesegespräch</span>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              <div className="space-y-2 p-3" style={{ backgroundColor: `${BONE}40` }}>
                <div className="flex gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs" style={{ backgroundColor: `${SAND}30` }}>👴</div>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-sm px-3 py-2 text-[11px]" style={{ backgroundColor: "white" }}>
                    Guten Tag. Ich bin wegen meiner Hüfte hier.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm px-3 py-2 text-[11px] text-white" style={{ backgroundColor: ROSE }}>
                    Guten Tag Herr Weber! Können Sie mir erzählen, seit wann Sie die Beschwerden haben?
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs" style={{ backgroundColor: `${SAND}30` }}>👴</div>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-sm px-3 py-2 text-[11px]" style={{ backgroundColor: "white" }}>
                    Seit ungefähr 3 Wochen. Besonders beim Treppensteigen...
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 border-t px-3 py-2" style={{ borderColor: `${SAND}40` }}>
                <input className="flex-1 bg-transparent text-xs outline-none" placeholder="Deine nächste Frage..." />
                <button className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: ROSE }}>
                  <Send className="h-3 w-3 text-white" />
                </button>
                <button className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: `${OAK}15` }}>
                  <Mic className="h-3 w-3" style={{ color: OAK }} />
                </button>
              </div>
            </div>
            <div className="mt-2 rounded-lg px-3 py-1.5 text-[9px]" style={{ backgroundColor: `${MAUVE}06`, color: MAUVE }}>
              💡 Tipp: Frage nach Vorerkrankungen, Medikamenten und Allergien
            </div>
          </div>
        </VariantCard>

        {/* ── L153: Checkliste abhaken ── */}
        <VariantCard label="L153" name="Checkliste" description="Praxis-Checkliste: Alle Schritte einer Maßnahme abhaken">
          <div className="py-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-bold" style={{ color: MAUVE }}>Checkliste: Händedesinfektion</span>
              <span className="rounded-full px-2 py-0.5 text-[8px]" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>5/8</span>
            </div>
            <div className="space-y-1">
              {[
                { text: "Schmuck ablegen", done: true },
                { text: "Desinfektionsmittel in die hohle Hand geben", done: true },
                { text: "Handfläche auf Handfläche", done: true },
                { text: "Rechte über linke Hand (Handrücken)", done: true },
                { text: "Handfläche auf Handfläche mit verschränkten Fingern", done: true },
                { text: "Außenseite der Finger", done: false, active: true },
                { text: "Kreisende Bewegung des Daumens", done: false },
                { text: "Fingerspitzen in der Handfläche", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ backgroundColor: item.active ? `${ROSE}06` : "transparent" }}>
                  <div className="flex h-5 w-5 items-center justify-center rounded" style={{ backgroundColor: item.done ? ROSE : "white", border: `1.5px solid ${item.done ? ROSE : SAND}` }}>
                    {item.done && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span className="text-[11px]" style={{ textDecoration: item.done ? "line-through" : "none", color: item.done ? "#86868b" : item.active ? ROSE : "#1d1d1f", fontWeight: item.active ? 600 : 400 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L154: Analogie-Brücke ── */}
        <VariantCard label="L154" name="Analogie-Brücke" description="Komplexes Konzept → Alltags-Analogie → Zurück zum Fach">
          <div className="py-4">
            <div className="flex items-center gap-2">
              {/* Fach-Konzept */}
              <div className="flex-1 rounded-xl p-3 text-center" style={{ backgroundColor: `${MAUVE}08` }}>
                <span className="text-[9px] font-bold" style={{ color: MAUVE }}>FACHLICH</span>
                <p className="mt-1 text-[11px] font-medium">Dekubitus durch Druck auf Gewebe</p>
              </div>
              {/* Pfeil */}
              <div className="flex flex-col items-center">
                <ArrowRight className="h-4 w-4" style={{ color: SAND }} />
              </div>
              {/* Analogie */}
              <div className="flex-1 rounded-xl p-3 text-center" style={{ backgroundColor: `${ROSE}08` }}>
                <span className="text-[9px] font-bold" style={{ color: ROSE }}>ANALOGIE</span>
                <p className="mt-1 text-[11px] font-medium">Finger auf Arm drücken → Stelle wird weiß</p>
              </div>
            </div>
            <div className="mt-3 rounded-xl p-3" style={{ backgroundColor: BONE }}>
              <p className="text-[10px] font-bold" style={{ color: OAK }}>🔗 Verbindung:</p>
              <p className="text-[11px] text-[#555]">Genau das passiert bei einem liegenden Patienten — nur über Stunden. Das Gewebe bekommt kein Blut mehr und stirbt ab.</p>
            </div>
            <div className="mt-2 text-center">
              <p className="text-[10px] font-semibold" style={{ color: MAUVE }}>Hast du die Analogie verstanden?</p>
              <div className="mt-1 flex justify-center gap-3">
                <button className="rounded-full px-4 py-1.5 text-[10px] font-medium" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>Ja, weiter!</button>
                <button className="rounded-full px-4 py-1.5 text-[10px] font-medium" style={{ backgroundColor: `${SAND}20`, color: TAUPE }}>Nochmal erklären</button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L155: Zahlen-Schätzung mit Feedback ── */}
        <VariantCard label="L155" name="Zahlen-Schätzung" description="Wie hoch ist die Prävalenz? Eingabefeld + Abgleich mit Fakten">
          <div className="py-4">
            <p className="mb-3 text-sm font-medium text-center">Wie viel Prozent der Pflegeheim-Bewohner haben einen Dekubitus?</p>
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex items-center rounded-xl overflow-hidden" style={{ border: `2px solid ${ROSE}` }}>
                <input className="w-16 px-3 py-2.5 text-center text-lg font-bold bg-transparent outline-none" style={{ color: ROSE }} defaultValue="12" />
                <span className="px-2 py-2.5 text-sm font-bold" style={{ backgroundColor: `${ROSE}10`, color: ROSE }}>%</span>
              </div>
              <button className="rounded-xl px-4 py-2.5 text-xs font-semibold text-white" style={{ backgroundColor: ROSE }}>Prüfen</button>
            </div>
            <div className="rounded-xl p-3" style={{ backgroundColor: `${ROSE}06` }}>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-lg font-bold" style={{ color: ROSE }}>8-12%</span>
                <span className="text-[10px]" style={{ color: ROSE }}>← Richtige Antwort</span>
              </div>
              <p className="text-[10px] text-[#555]">Deine Schätzung: 12% — Sehr nah dran! Laut DNQP liegt die Prävalenz in deutschen Pflegeheimen bei 8-12%.</p>
            </div>
          </div>
        </VariantCard>

        {/* ── L156: Vernetztes Lernen (Querverweise) ── */}
        <VariantCard label="L156" name="Querverweise" description="Dieses Thema hängt mit 3 anderen zusammen — vernetze dein Wissen">
          <div className="py-4">
            <div className="flex items-center justify-center mb-3">
              <div className="rounded-full px-4 py-2 text-xs font-bold text-white" style={{ backgroundColor: ROSE }}>Dekubitus</div>
            </div>
            <p className="mb-2 text-center text-[10px] text-[#86868b]">Verknüpft mit:</p>
            <div className="space-y-1.5">
              {[
                { ce: "CE 04", topic: "Ernährung & Hautzustand", link: "Mangelernährung ↔ Dekubitus-Risiko", pct: 85 },
                { ce: "CE 05", topic: "Mobilisation", link: "Immobilität ↔ Druckbelastung", pct: 72 },
                { ce: "CE 08", topic: "Schmerzmanagement", link: "Schmerz ↔ Bewegungsvermeidung", pct: 45 },
              ].map((ref, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ backgroundColor: BONE }}>
                  <span className="text-[9px] font-bold rounded-full px-2 py-0.5" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>{ref.ce}</span>
                  <div className="flex-1">
                    <p className="text-[11px] font-medium">{ref.topic}</p>
                    <p className="text-[9px] text-[#86868b]">{ref.link}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold" style={{ color: ref.pct > 70 ? ROSE : OAK }}>{ref.pct}%</span>
                    <p className="text-[7px] text-[#86868b]">verstanden</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L157: Schritt-für-Schritt Anleitung (Guided) ── */}
        <VariantCard label="L157" name="Guided-Anleitung" description="Praktische Handlung Schritt für Schritt lernen — mit Bildern und Erklärung">
          <div className="py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold" style={{ color: MAUVE }}>Verbandwechsel — Schritt 3 von 7</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 7 }, (_, i) => (
                  <div key={i} className="h-1.5 w-4 rounded-full" style={{ backgroundColor: i < 3 ? ROSE : `${SAND}40` }} />
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              <div className="h-36 flex items-center justify-center" style={{ backgroundColor: BONE }}>
                <div className="text-center">
                  <span className="text-4xl">🧤</span>
                  <p className="mt-1 text-[10px] text-[#86868b]">Illustration: Handschuhe anziehen</p>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-bold mb-1" style={{ color: ROSE }}>Schritt 3: Sterile Handschuhe anziehen</p>
                <p className="text-[11px] text-[#555]">Öffne die Verpackung ohne die Innenseite zu berühren. Ziehe den ersten Handschuh an der Stulpe an.</p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 rounded-xl py-2.5 text-[11px] font-medium" style={{ backgroundColor: `${SAND}20`, color: TAUPE }}>← Zurück</button>
              <button className="flex-1 rounded-xl py-2.5 text-[11px] font-semibold text-white" style={{ backgroundColor: ROSE }}>Weiter →</button>
            </div>
          </div>
        </VariantCard>

        {/* ── L158: Wahr/Falsch Kette (Speed) ── */}
        <VariantCard label="L158" name="Wahr/Falsch Kette" description="Aussagen schnell als wahr oder falsch einordnen — Ketten-Modus">
          <div className="py-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1 text-[10px] font-bold" style={{ color: ROSE }}>
                <Flame className="h-3.5 w-3.5" /> 7er Kette!
              </span>
              <span className="text-[10px] font-mono" style={{ color: MAUVE }}>+140 XP</span>
            </div>
            <motion.div className="rounded-2xl p-5 text-center" style={{ backgroundColor: BONE }} initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
              <p className="text-sm font-medium">&ldquo;Ein Dekubitus Grad IV heilt in der Regel vollständig ab.&rdquo;</p>
            </motion.div>
            <div className="mt-3 flex gap-3">
              <motion.button className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold" style={{ backgroundColor: `${MAUVE}10`, color: MAUVE, border: `1.5px solid ${MAUVE}30` }} whileTap={{ scale: 0.95 }}>
                <X className="h-4 w-4" /> Falsch
              </motion.button>
              <motion.button className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold" style={{ backgroundColor: `${ROSE}10`, color: ROSE, border: `1.5px solid ${ROSE}30` }} whileTap={{ scale: 0.95 }}>
                <Check className="h-4 w-4" /> Wahr
              </motion.button>
            </div>
            <div className="mt-2 flex justify-center gap-1">
              {["✓","✓","✓","✓","✓","✓","✓","?"].map((c, i) => (
                <span key={i} className="text-[10px] font-bold" style={{ color: c === "✓" ? ROSE : SAND }}>{c}</span>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L159: Pflegeplanung (PESR) ── */}
        <VariantCard label="L159" name="Pflegeplanung (PESR)" description="Problem → Einflussfaktoren → Symptome → Ressourcen strukturiert erfassen">
          <div className="py-4">
            <div className="space-y-2">
              {[
                { label: "P", full: "Problem", value: "Dekubitusrisiko", color: MAUVE, filled: true },
                { label: "E", full: "Einflussfaktoren", value: "Immobilität, Inkontinenz, Mangelernährung", color: OAK, filled: true },
                { label: "S", full: "Symptome / Zeichen", value: "", color: ROSE, filled: false },
                { label: "R", full: "Ressourcen", value: "", color: TAUPE, filled: false },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl px-3 py-2.5" style={{ backgroundColor: item.filled ? `${item.color}06` : BONE }}>
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold text-white" style={{ backgroundColor: item.color }}>{item.label}</div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold" style={{ color: item.color }}>{item.full}</p>
                    {item.filled ? (
                      <p className="text-[11px] text-[#555]">{item.value}</p>
                    ) : (
                      <div className="mt-1 rounded-lg px-2 py-1.5 text-[11px]" style={{ backgroundColor: "white", border: `1.5px dashed ${item.color}40`, color: "#86868b" }}>Tippe hier...</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L160: Lernspiel: Wer wird Pflegeprofi? ── */}
        <VariantCard label="L160" name="Wer wird Pflegeprofi?" description="Quiz-Show-Format mit steigendem Schwierigkeitsgrad + Joker">
          <div className="py-4">
            <div className="mb-3 text-center">
              <p className="text-base font-bold" style={{ color: MAUVE }}>Wer wird Pflegeprofi? 🏆</p>
              <p className="text-[10px] text-[#86868b]">Frage 6 von 10 — 600 XP</p>
            </div>
            {/* Schwierigkeits-Leiter */}
            <div className="mb-3 flex items-center justify-center gap-1">
              {[100,200,300,400,500,600,700,800,900,1000].map((xp, i) => (
                <div key={i} className="flex h-5 items-center justify-center rounded px-1.5 text-[7px] font-bold" style={{
                  backgroundColor: i < 5 ? `${ROSE}20` : i === 5 ? ROSE : `${SAND}20`,
                  color: i < 5 ? ROSE : i === 5 ? "white" : "#86868b"
                }}>
                  {xp}
                </div>
              ))}
            </div>
            <div className="mb-3 rounded-xl p-3" style={{ backgroundColor: BONE }}>
              <p className="text-xs font-medium">Was misst die Braden-Skala?</p>
            </div>
            <div className="space-y-1.5">
              {["Schmerzintensität", "Sturzrisiko", "Dekubitusrisiko", "Ernährungszustand"].map((opt, i) => (
                <button key={i} className="w-full rounded-xl px-4 py-2.5 text-left text-[11px] font-medium" style={{ backgroundColor: "white", border: `1.5px solid ${SAND}` }}>
                  <span className="mr-2 font-bold" style={{ color: MAUVE }}>{String.fromCharCode(65 + i)}</span>{opt}
                </button>
              ))}
            </div>
            {/* Joker */}
            <div className="mt-3 flex justify-center gap-3">
              {[
                { icon: "50:50", used: false },
                { icon: "📞", used: true },
                { icon: "👥", used: false },
              ].map((joker, i) => (
                <button key={i} className="flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold" style={{ backgroundColor: joker.used ? `${SAND}20` : `${MAUVE}10`, color: joker.used ? "#ccc" : MAUVE, border: `1px solid ${joker.used ? SAND : MAUVE}30`, opacity: joker.used ? 0.5 : 1 }}>
                  {joker.icon}
                </button>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L161: Mindmap erstellen ── */}
        <VariantCard label="L161" name="Mindmap erstellen" description="Zentrales Thema → Äste hinzufügen — Wissen strukturieren">
          <div className="py-4">
            <div className="rounded-xl h-52" style={{ backgroundColor: BONE }}>
              <svg viewBox="0 0 300 180" className="h-full w-full">
                {/* Zentrum */}
                <circle cx="150" cy="90" r="28" fill={ROSE} />
                <text x="150" y="94" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">Dekubitus</text>
                {/* Äste */}
                <line x1="122" y1="90" x2="50" y2="45" stroke={MAUVE} strokeWidth="2" />
                <rect x="5" y="30" width="85" height="26" rx="13" fill={`${MAUVE}15`} stroke={MAUVE} strokeWidth="1.5" />
                <text x="47" y="47" textAnchor="middle" fontSize="8" fill={MAUVE} fontWeight="600">Risikofaktoren</text>

                <line x1="178" y1="90" x2="250" y2="45" stroke={OAK} strokeWidth="2" />
                <rect x="210" y="30" width="80" height="26" rx="13" fill={`${OAK}15`} stroke={OAK} strokeWidth="1.5" />
                <text x="250" y="47" textAnchor="middle" fontSize="8" fill={OAK} fontWeight="600">Prophylaxe</text>

                <line x1="150" y1="118" x2="150" y2="160" stroke={TAUPE} strokeWidth="2" />
                <rect x="105" y="147" width="90" height="26" rx="13" fill={`${TAUPE}15`} stroke={TAUPE} strokeWidth="1.5" />
                <text x="150" y="164" textAnchor="middle" fontSize="8" fill={TAUPE} fontWeight="600">Stadien I-IV</text>

                <line x1="122" y1="100" x2="50" y2="145" stroke={ROSE} strokeWidth="1.5" strokeDasharray="4 2" />
                <rect x="5" y="133" width="85" height="26" rx="13" fill="white" stroke={ROSE} strokeWidth="1.5" strokeDasharray="4 2" />
                <text x="47" y="150" textAnchor="middle" fontSize="8" fill={ROSE}>+ Neuen Ast</text>
              </svg>
            </div>
          </div>
        </VariantCard>

        {/* ── L162: Lerntagebuch-Eintrag ── */}
        <VariantCard label="L162" name="Lerntagebuch" description="Kurzer Reflexionseintrag: Was habe ich gelernt? Was war schwer?">
          <div className="py-4">
            <div className="rounded-xl p-4" style={{ backgroundColor: BONE }}>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold" style={{ color: MAUVE }}>📓 Lerntagebuch</span>
                <span className="text-[9px] text-[#86868b]">04.04.2026</span>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="mb-1 text-[10px] font-bold" style={{ color: ROSE }}>Was habe ich heute gelernt?</p>
                  <div className="rounded-lg px-3 py-2 text-[11px]" style={{ backgroundColor: "white", border: `1px solid ${SAND}` }}>
                    Die 4 Stadien des Dekubitus und warum Lagerung so wichtig ist...
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold" style={{ color: OAK }}>Was war schwer?</p>
                  <div className="rounded-lg px-3 py-2 text-[11px]" style={{ backgroundColor: "white", border: `1px solid ${SAND}`, color: "#86868b" }}>
                    Tippe hier...
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold" style={{ color: TAUPE }}>Mein Ziel für morgen:</p>
                  <div className="rounded-lg px-3 py-2 text-[11px]" style={{ backgroundColor: "white", border: `1px solid ${SAND}`, color: "#86868b" }}>
                    Tippe hier...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L163: Fallstrick-Frage ── */}
        <VariantCard label="L163" name="Fallstrick-Frage" description="Absichtlich verwirrende Frage — testet ob Schüler genau liest">
          <div className="py-4">
            <div className="mb-2 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" style={{ color: MAUVE }} />
              <span className="text-[10px] font-bold" style={{ color: MAUVE }}>ACHTUNG: Lies genau!</span>
            </div>
            <div className="mb-3 rounded-xl p-3" style={{ backgroundColor: BONE }}>
              <p className="text-xs font-medium">Welche Aussage über Dekubitus Stadium I ist <strong style={{ color: ROSE }}>FALSCH</strong>?</p>
            </div>
            <div className="space-y-1.5">
              {[
                { text: "Die Haut ist intakt", trap: false },
                { text: "Es zeigt sich eine nicht wegdrückbare Rötung", trap: false },
                { text: "Es liegt eine offene Wunde vor", trap: true },
                { text: "Die Stelle kann schmerzhaft sein", trap: false },
              ].map((opt, i) => (
                <button key={i} className="w-full rounded-xl px-4 py-2.5 text-left text-[11px]" style={{ backgroundColor: "white", border: `1.5px solid ${SAND}` }}>
                  {opt.text}
                </button>
              ))}
            </div>
            <p className="mt-2 text-[9px] text-center text-[#86868b]">⚠️ Viele Schüler überlesen das &ldquo;FALSCH&rdquo; — Training fürs genaue Lesen</p>
          </div>
        </VariantCard>

        {/* ── L164: Sprichwort / Redewendung ── */}
        <VariantCard label="L164" name="Pflege-Sprichwort" description="Pflegefachliche Redewendung erklären — Sprache + Fach verbinden">
          <div className="py-4">
            <div className="rounded-2xl p-5 text-center" style={{ background: `linear-gradient(135deg, ${BONE}, ${BLUSH}15)` }}>
              <p className="text-lg font-bold" style={{ color: MAUVE }}>&ldquo;Vorbeugen ist besser als Heilen&rdquo;</p>
              <p className="mt-3 text-[11px] text-[#555]">Was bedeutet dieses Sprichwort für die Pflege?</p>
            </div>
            <div className="mt-3 space-y-1.5">
              {[
                "Prophylaxe ist wichtiger als Therapie",
                "Krankheiten sind unvermeidbar",
                "Heilung ist immer möglich",
              ].map((opt, i) => (
                <button key={i} className="w-full rounded-xl px-4 py-2.5 text-left text-[11px] font-medium" style={{ backgroundColor: i === 0 ? `${ROSE}08` : "white", border: `1.5px solid ${i === 0 ? ROSE : SAND}`, color: i === 0 ? ROSE : "#1d1d1f" }}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L165: Bewertungsmatrix (Rubrik) ── */}
        <VariantCard label="L165" name="Selbstbewertung (Rubrik)" description="Bewerte dich selbst auf einer Kompetenz-Rubrik — ehrliche Einschätzung">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Wie sicher bist du bei diesen Kompetenzen?</p>
            <div className="space-y-2">
              {[
                { skill: "Dekubitus erkennen", level: 3 },
                { skill: "Stadien unterscheiden", level: 2 },
                { skill: "Prophylaxe planen", level: 1 },
                { skill: "Dokumentation schreiben", level: 0 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-3 py-2" style={{ backgroundColor: BONE }}>
                  <span className="flex-1 text-[11px] font-medium">{item.skill}</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map(lvl => (
                      <button key={lvl} className="h-6 w-6 rounded-full text-[8px] font-bold" style={{
                        backgroundColor: lvl <= item.level ? ROSE : "white",
                        color: lvl <= item.level ? "white" : "#86868b",
                        border: `1.5px solid ${lvl <= item.level ? ROSE : SAND}`
                      }}>
                        {["😕","🤔","😊","💪"][lvl]}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-[9px] text-[#86868b]">Die KI vergleicht deine Einschätzung mit deinen tatsächlichen Ergebnissen</p>
          </div>
        </VariantCard>

        <div className="py-12 text-center text-sm text-[#86868b]">
          Ende der Showcase — 20 Sektionen, 31 Step-Typen + 28 UI-Varianten + 165 Ideen
        </div>
      </div>
    </div>
  )
}

{/* ─── Image Compare Slider Component ─── */}
function ImageCompareSlider() {
  const [position, setPosition] = useState(50)
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
      <div className="relative h-44 select-none" style={{ backgroundColor: `${BONE}` }}>
        {/* "Vorher" Seite */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-1 h-16 w-16 rounded-full" style={{ backgroundColor: `${MAUVE}30` }} />
            <span className="text-[10px] text-[#86868b]">Tag 1 — Grad II</span>
          </div>
        </div>
        {/* "Nachher" Seite (clippt) */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <div className="text-center">
            <div className="mx-auto mb-1 h-16 w-16 rounded-full" style={{ backgroundColor: `${BLUSH}40` }} />
            <span className="text-[10px]" style={{ color: ROSE }}>Tag 7 — Heilung ✓</span>
          </div>
        </div>
        {/* Slider-Linie */}
        <div className="absolute top-0 bottom-0 w-0.5" style={{ left: `${position}%`, backgroundColor: ROSE }}>
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full shadow-md" style={{ backgroundColor: "white", border: `2px solid ${ROSE}` }}>
            <span className="text-[10px]" style={{ color: ROSE }}>↔</span>
          </div>
        </div>
        {/* Drag area */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <div className="flex justify-between px-4 py-2 text-[10px] text-[#86868b]">
        <span>← Vorher</span>
        <span>Nachher →</span>
      </div>
    </div>
  )
}

// ─── Helper Components ───

function SectionHeader({ id, title, subtitle }: { id: string; title: string; subtitle: string }) {
  return (
    <div id={id} className="mb-6 mt-16 first:mt-0 scroll-mt-16">
      <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest" style={{ color: OAK }}>
        {id}
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-[#86868b]">{subtitle}</p>
    </div>
  )
}

function VariantCard({ label, name, description, children }: {
  label: string
  name: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-[#E5DFD6] bg-white">
      <div className="flex items-center gap-3 border-b border-[#E5DFD6]/50 px-5 py-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold text-white" style={{ backgroundColor: SAGE }}>
          {label}
        </div>
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-[11px] text-[#86868b]">{description}</div>
        </div>
      </div>
      <div className="px-5">
        {children}
      </div>
    </div>
  )
}

function StatRow({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-44 text-xs">{label}</span>
      <div className="h-1.5 w-32 overflow-hidden rounded-full bg-[#E5DFD6]/60">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
      <span className="text-xs font-semibold" style={{ color }}>{value}%</span>
    </div>
  )
}
