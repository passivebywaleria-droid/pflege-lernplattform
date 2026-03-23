"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"

/* ═══════════════════════════════════════════════════════════════════════════
   Mock Data
   ═══════════════════════════════════════════════════════════════════════════ */
const USER = {
  name: "Sarah Müller",
  initials: "SM",
  kurs: "PfK-24a",
  ausbildungsjahr: 1,
  streak: 12,
  lernzeit: { heute: 18, ziel: 20 },
  sessions: 14,
  avgScore: 78,
}

const COMPETENCIES = [
  { id: "CE01", label: "Pflegeprozess & Pflegediagnostik", progress: 73, sessions: 8, total: 12 },
  { id: "CE02", label: "Kommunikation & Beratung", progress: 45, sessions: 5, total: 10 },
  { id: "CE03", label: "Gesundheitsförderung & Prävention", progress: 22, sessions: 2, total: 9 },
  { id: "CE04", label: "Recht, Ethik & Beruf", progress: 60, sessions: 6, total: 10 },
  { id: "CE05", label: "Pflegewissenschaft & Qualität", progress: 10, sessions: 1, total: 11 },
]

const WEEKLY_ACTIVITY = [
  { day: "Mo", min: 22, done: true },
  { day: "Di", min: 31, done: true },
  { day: "Mi", min: 12, done: true },
  { day: "Do", min: 25, done: true },
  { day: "Fr", min: 28, done: true },
  { day: "Sa", min: 18, done: false },
  { day: "So", min: 0, done: false },
]

const LEARNING_PATH = [
  { title: "Was ist der Pflegeprozess?", status: "done" as const, score: 92 },
  { title: "Die 6 Schritte im Detail", status: "done" as const, score: 85 },
  { title: "Informationssammlung", status: "current" as const, score: 0 },
  { title: "Pflegediagnosen stellen", status: "locked" as const, score: 0 },
  { title: "Ziele formulieren (SMART)", status: "locked" as const, score: 0 },
  { title: "Maßnahmen planen", status: "locked" as const, score: 0 },
  { title: "Durchführung & Dokumentation", status: "locked" as const, score: 0 },
  { title: "Evaluation", status: "locked" as const, score: 0 },
]

const CLASSMATES = [
  { name: "Lena K.", initials: "LK", sessions: 18, avg: 84 },
  { name: "Tom B.", initials: "TB", sessions: 16, avg: 79 },
  { name: "Sarah M.", initials: "SM", sessions: 14, avg: 78, isUser: true },
  { name: "Mia R.", initials: "MR", sessions: 12, avg: 82 },
  { name: "Jonas W.", initials: "JW", sessions: 11, avg: 71 },
  { name: "Anna S.", initials: "AS", sessions: 9, avg: 76 },
]

const REVIEW_TOPICS = [
  { topic: "ABEDL-Modell", strength: "weak" as const, lastPracticed: "vor 5 Tagen" },
  { topic: "Vitalzeichen-Normwerte", strength: "medium" as const, lastPracticed: "vor 3 Tagen" },
  { topic: "Pflegeprozess 6 Schritte", strength: "strong" as const, lastPracticed: "gestern" },
]

/* ═══════════════════════════════════════════════════════════════════════════
   Radial Progress (clean, AMBOSS-style)
   ═══════════════════════════════════════════════════════════════════════════ */
function RadialProgress({ value, size = 56, strokeWidth = 4, color = "#2563eb", children }: {
  value: number; size?: number; strokeWidth?: number; color?: string; children?: React.ReactNode
}) {
  const r = (size - strokeWidth) / 2
  const c = 2 * Math.PI * r
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#f1f5f9" strokeWidth={strokeWidth} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeLinecap="round" strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c - (value / 100) * c }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   Zeitwahl Sheet (clean, professional)
   ═══════════════════════════════════════════════════════════════════════════ */
function TimePickerSheet({ onSelect, onClose }: { onSelect: (min: number) => void; onClose: () => void }) {
  const options = [
    { min: 10, label: "10 Min", sub: "Kurze Wiederholung" },
    { min: 15, label: "15 Min", sub: "Standard", recommended: true },
    { min: 20, label: "20 Min", sub: "Vertiefung" },
    { min: 30, label: "30 Min", sub: "Intensiv" },
  ]
  return (
    <motion.div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-t-2xl sm:rounded-2xl p-5 pb-8 sm:pb-5 w-full sm:max-w-sm shadow-xl"
        initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-zinc-300 rounded-full mx-auto mb-4 sm:hidden" />
        <h3 className="text-lg font-semibold text-zinc-900 mb-1">Lernzeit wählen</h3>
        <p className="text-sm text-zinc-500 mb-4">Wie viel Zeit hast du heute?</p>
        <div className="space-y-2">
          {options.map((o) => (
            <button
              key={o.min}
              onClick={() => onSelect(o.min)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-colors ${
                o.recommended ? "border-blue-200 bg-blue-50/50" : "border-zinc-200 hover:bg-zinc-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-zinc-900">{o.label}</span>
                <span className="text-xs text-zinc-500">{o.sub}</span>
              </div>
              {o.recommended && (
                <span className="text-[10px] font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">Empfohlen</span>
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   Main Dashboard
   ═══════════════════════════════════════════════════════════════════════════ */
export default function DashboardDemo() {
  const params = useParams()
  const locale = (params?.locale as string) || "de"
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [dailyGoal, setDailyGoal] = useState<number | null>(null)
  const [tab, setTab] = useState<"home" | "learn" | "ranking" | "profil">("home")

  useEffect(() => {
    const t = setTimeout(() => setShowTimePicker(true), 1000)
    return () => clearTimeout(t)
  }, [])

  const maxMin = Math.max(...WEEKLY_ACTIVITY.map((d) => d.min), 1)
  const totalWeekMin = WEEKLY_ACTIVITY.reduce((s, d) => s + d.min, 0)
  const daysActive = WEEKLY_ACTIVITY.filter((d) => d.min > 0).length

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200/80 sticky top-0 z-40">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <Link href={`/${locale}/demo`} className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="inline -mt-0.5"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <span className="text-sm font-semibold text-zinc-900">Pflege-Lernplattform</span>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            {USER.initials}
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-5 pb-24 space-y-4">

        {/* Greeting + Streak */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-xl font-bold text-zinc-900">Hallo, {USER.name.split(" ")[0]}.</h1>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-sm text-zinc-500">{USER.kurs} · {USER.ausbildungsjahr}. Ausbildungsjahr</span>
            {USER.streak > 0 && (
              <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                {USER.streak} Tage in Folge
              </span>
            )}
          </div>
        </motion.div>

        {/* Tages-Fortschritt + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="bg-white rounded-xl border border-zinc-200 p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-medium text-zinc-900">Heute gelernt</p>
              <p className="text-2xl font-bold text-zinc-900 mt-0.5">
                {USER.lernzeit.heute} <span className="text-sm font-normal text-zinc-400">/ {dailyGoal ?? USER.lernzeit.ziel} Min</span>
              </p>
            </div>
            <RadialProgress value={Math.min(100, (USER.lernzeit.heute / (dailyGoal ?? USER.lernzeit.ziel)) * 100)} size={52} color="#2563eb">
              <span className="text-[10px] font-bold text-blue-600">
                {Math.round((USER.lernzeit.heute / (dailyGoal ?? USER.lernzeit.ziel)) * 100)}%
              </span>
            </RadialProgress>
          </div>
          <div className="flex gap-2">
            <Link href={`/${locale}/demo/lektion`} className="flex-1">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
                Weiterlernen
              </button>
            </Link>
            <button
              onClick={() => setShowTimePicker(true)}
              className="px-3 py-2.5 rounded-lg border border-zinc-200 text-sm text-zinc-600 hover:bg-zinc-50 transition-colors"
            >
              {dailyGoal ? `${dailyGoal} Min` : "Ziel"}
            </button>
          </div>
        </motion.div>

        {/* Wochenaktivität */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-white rounded-xl border border-zinc-200 p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-zinc-900">Diese Woche</p>
            <p className="text-xs text-zinc-500">{totalWeekMin} Min · {daysActive} Tage</p>
          </div>
          <div className="flex items-end gap-1.5 h-16">
            {WEEKLY_ACTIVITY.map((d, i) => {
              const isToday = i === 5
              return (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                  <motion.div
                    className={`w-full rounded-sm ${
                      d.min === 0 ? "bg-zinc-100" : isToday ? "bg-blue-600" : "bg-blue-400"
                    }`}
                    initial={{ height: 0 }}
                    animate={{ height: d.min > 0 ? `${Math.max(4, (d.min / maxMin) * 48)}px` : "3px" }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.04 }}
                  />
                  <span className={`text-[10px] ${isToday ? "font-semibold text-blue-600" : "text-zinc-400"}`}>{d.day}</span>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Kompetenzübersicht (AMBOSS-style Learning Radar) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="bg-white rounded-xl border border-zinc-200 p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-zinc-900">Kompetenzübersicht</p>
            <p className="text-xs text-zinc-500">Laut PflAPrV</p>
          </div>
          <div className="space-y-3">
            {COMPETENCIES.map((c, i) => {
              const barColor = c.progress >= 60 ? "bg-emerald-500" : c.progress >= 30 ? "bg-amber-500" : "bg-zinc-300"
              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[10px] font-mono text-zinc-400 shrink-0">{c.id}</span>
                      <span className="text-sm text-zinc-800 truncate">{c.label}</span>
                    </div>
                    <span className="text-xs font-medium text-zinc-500 shrink-0 ml-2">{c.sessions}/{c.total}</span>
                  </div>
                  <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${barColor}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${c.progress}%` }}
                      transition={{ duration: 0.7, delay: 0.2 + i * 0.05 }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Lernpfad CE 01 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-white rounded-xl border border-zinc-200 p-4"
        >
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-medium text-zinc-900">Lernpfad</p>
            <span className="text-[10px] font-mono text-zinc-400">CE 01</span>
          </div>
          <p className="text-xs text-zinc-500 mb-4">2 von 8 Lektionen abgeschlossen</p>

          <div className="relative">
            <div className="absolute left-[11px] top-3 bottom-3 w-px bg-zinc-200" />
            <div className="space-y-0.5">
              {LEARNING_PATH.map((node, i) => {
                const isDone = node.status === "done"
                const isCurrent = node.status === "current"
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 + i * 0.04 }}
                  >
                    {isCurrent ? (
                      <Link href={`/${locale}/demo/lektion`}>
                        <div className="relative flex items-center gap-3 py-2 px-1 rounded-lg bg-blue-50/70 -mx-1 group">
                          <div className="w-[22px] h-[22px] rounded-full bg-blue-600 flex items-center justify-center z-10 shrink-0 ring-2 ring-blue-200">
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          </div>
                          <span className="text-sm font-medium text-blue-700 flex-1">{node.title}</span>
                          <span className="text-xs text-blue-500 group-hover:translate-x-0.5 transition-transform">Starten ›</span>
                        </div>
                      </Link>
                    ) : (
                      <div className={`relative flex items-center gap-3 py-2 px-1 ${!isDone ? "opacity-40" : ""}`}>
                        <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center z-10 shrink-0 ${
                          isDone ? "bg-emerald-500" : "bg-zinc-200"
                        }`}>
                          {isDone ? (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6L5 8L9 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          ) : (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7.5 3.75V3.125A2.5 2.5 0 002.5 3.125V3.75M3.125 3.75H6.875A1.25 1.25 0 018.125 5v2.5a1.25 1.25 0 01-1.25 1.25H3.125A1.25 1.25 0 011.875 7.5V5a1.25 1.25 0 011.25-1.25z" stroke="#9ca3af" strokeWidth="1" strokeLinecap="round"/></svg>
                          )}
                        </div>
                        <span className={`text-sm ${isDone ? "text-zinc-700" : "text-zinc-400"}`}>{node.title}</span>
                        {isDone && <span className="text-xs text-emerald-600 ml-auto">{node.score}%</span>}
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Wiederholung empfohlen (Spaced Repetition / Learning Radar) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          className="bg-white rounded-xl border border-zinc-200 p-4"
        >
          <p className="text-sm font-medium text-zinc-900 mb-3">Wiederholung empfohlen</p>
          <div className="space-y-2">
            {REVIEW_TOPICS.map((t, i) => (
              <Link key={i} href={`/${locale}/demo/lektion`}>
                <div className="flex items-center gap-3 py-2 group">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${
                    t.strength === "weak" ? "bg-red-400" : t.strength === "medium" ? "bg-amber-400" : "bg-emerald-400"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-zinc-800 group-hover:text-blue-600 transition-colors">{t.topic}</p>
                    <p className="text-[10px] text-zinc-400">{t.lastPracticed}</p>
                  </div>
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                    t.strength === "weak" ? "bg-red-50 text-red-600" : t.strength === "medium" ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"
                  }`}>
                    {t.strength === "weak" ? "Unsicher" : t.strength === "medium" ? "Auffrischen" : "Sicher"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Klassen-Vergleich (dezent, nicht Leaderboard-artig) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-zinc-200 p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-zinc-900">Klassen-Vergleich</p>
            <span className="text-xs text-zinc-500">{USER.kurs}</span>
          </div>
          <div className="space-y-1.5">
            {CLASSMATES.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.35 + i * 0.03 }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${c.isUser ? "bg-blue-50/70" : ""}`}
              >
                <span className="text-xs text-zinc-400 w-4 text-right">{i + 1}</span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  c.isUser ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-600"
                }`}>
                  {c.initials}
                </div>
                <span className={`text-sm flex-1 ${c.isUser ? "font-medium text-blue-700" : "text-zinc-700"}`}>
                  {c.name}{c.isUser ? " (Du)" : ""}
                </span>
                <div className="text-right">
                  <p className="text-xs font-medium text-zinc-700">{c.sessions} Sessions</p>
                  <p className="text-[10px] text-zinc-400">Ø {c.avg}%</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Übungsmodus */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="bg-white rounded-xl border border-zinc-200 p-4"
        >
          <p className="text-sm font-medium text-zinc-900 mb-3">Übungsmodus</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Lektion", sub: "Neuer Stoff lernen", icon: "book" },
              { label: "Karteikarten", sub: "Begriffe wiederholen", icon: "cards" },
              { label: "Blitz-Quiz", sub: "60s Zeitdruck", icon: "timer" },
              { label: "Prüfungs-Modus", sub: "Wie im Examen", icon: "exam" },
            ].map((m) => (
              <Link key={m.label} href={`/${locale}/demo/lektion`}>
                <div className="p-3 rounded-lg border border-zinc-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 group-hover:bg-blue-100 flex items-center justify-center mb-2 transition-colors">
                    {m.icon === "book" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.667 12.667V3.333A1.333 1.333 0 014 2h8a1.333 1.333 0 011.333 1.333v9.334M2.667 12.667A1.333 1.333 0 004 14h8a1.333 1.333 0 001.333-1.333M2.667 12.667A1.333 1.333 0 014 11.333h9.333" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-blue-600 transition-colors"/></svg>}
                    {m.icon === "cards" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="3.5" width="10" height="7" rx="1" stroke="#6b7280" strokeWidth="1.2" className="group-hover:stroke-blue-600 transition-colors"/><path d="M4.5 3.5V2.5a1 1 0 011-1h8a1 1 0 011 1v5a1 1 0 01-1 1h-1" stroke="#6b7280" strokeWidth="1.2" className="group-hover:stroke-blue-600 transition-colors"/></svg>}
                    {m.icon === "timer" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="9" r="5" stroke="#6b7280" strokeWidth="1.2" className="group-hover:stroke-blue-600 transition-colors"/><path d="M8 6.5V9L9.5 10M6.5 2h3" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" className="group-hover:stroke-blue-600 transition-colors"/></svg>}
                    {m.icon === "exam" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2h8a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1zM5.5 5.5h5M5.5 8h5M5.5 10.5h3" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" className="group-hover:stroke-blue-600 transition-colors"/></svg>}
                  </div>
                  <p className="text-sm font-medium text-zinc-800 group-hover:text-blue-600 transition-colors">{m.label}</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">{m.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Bottom Nav (clean, iOS-style) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-zinc-200/60 z-40 pb-safe">
        <div className="max-w-lg mx-auto flex">
          {([
            { id: "home", label: "Home", d: "M3 9.5L8 4.5L13 9.5M4.5 8.5V13.5A1 1 0 005.5 14.5H7V11.5A1 1 0 018 10.5H8A1 1 0 019 11.5V14.5H10.5A1 1 0 0011.5 13.5V8.5" },
            { id: "learn", label: "Lernen", d: "M4 2H12A1 1 0 0113 3V13A1 1 0 0112 14H4A1 1 0 013 13V3A1 1 0 014 2ZM6 6H10M6 9H10M6 12H8" },
            { id: "ranking", label: "Klasse", d: "M4 14V8M8 14V4M12 14V10" },
            { id: "profil", label: "Profil", d: "M8 8A3 3 0 108 2A3 3 0 108 8ZM4 14C4 11.79 5.79 10 8 10C10.21 10 12 11.79 12 14" },
          ] as const).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 transition-colors ${
                tab === t.id ? "text-blue-600" : "text-zinc-400"
              }`}
            >
              <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
                <path d={t.d} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[10px] font-medium">{t.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Time Picker */}
      <AnimatePresence>
        {showTimePicker && (
          <TimePickerSheet
            onSelect={(min) => { setDailyGoal(min); setShowTimePicker(false) }}
            onClose={() => setShowTimePicker(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
