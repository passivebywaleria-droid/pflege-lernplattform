"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Brain, Check, ChevronRight,
  Shield, Zap, Award, Volume2, ArrowRight,
  X, Clock, Mic,
  GripVertical, Play,
  Users,
} from "lucide-react"

// ─── Color Palette ───
const BLUSH = "#D4A9A2"
const ROSE  = "#5A7D60"
const MAUVE = "#A06B63"
const TAUPE = "#BFA48E"
const OAK   = "#B09179"
const SAND  = "#D4C3B2"
const BONE  = `${ROSE}08`
const SAGE  = ROSE

// ─── Sections for sticky nav ───
const SECTIONS = [
  { id: "quiz", label: "Quiz & Abfrage" },
  { id: "zuordnung", label: "Zuordnung & Sortierung" },
  { id: "wissen", label: "Wissen & Erklärung" },
  { id: "dialog", label: "Dialog & Kommunikation" },
  { id: "reflexion", label: "Reflexion" },
  { id: "freitext", label: "Freitext & Dokumentation" },
  { id: "bilder", label: "Interaktive Bilder" },
  { id: "berechnung", label: "Berechnung" },
  { id: "audio", label: "Audio & Sprache" },
  { id: "szenarien", label: "Szenarien & Fälle" },
  { id: "zusammenfassung", label: "Zusammenfassung" },
]

export default function DemoStepsPage() {
  const [activeSection, setActiveSection] = useState("quiz")

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1d1d1f]" style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif" }}>

      {/* ─── Sticky Navigation ─── */}
      <nav className="sticky top-0 z-50 border-b border-[#E5DFD6] bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl overflow-x-auto px-4">
          <div className="flex gap-1 py-2">
            {SECTIONS.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setActiveSection(s.id)}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
                style={{
                  backgroundColor: activeSection === s.id ? `${ROSE}15` : "transparent",
                  color: activeSection === s.id ? ROSE : "#86868b",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Header ─── */}
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold">Step-Typen Katalog</h1>
        <p className="mt-2 text-sm text-[#86868b]">
          33 Step-Typen der Pflege-Lernplattform — statische Mockups, 11 Sektionen
        </p>

      </div>

      <div className="mx-auto max-w-5xl px-4 pb-20">

        {/* ═══════════════════════════════════════════════
            SECTION 1: QUIZ & ABFRAGE
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="quiz" title="Quiz & Abfrage" subtitle="Multiple Choice, Wahr/Falsch, Swipe, Blitz-Quiz — die Basis jeder Lerneinheit" />

        {/* ── L1: Multiple Choice ── */}
        <VariantCard label="L1" name="Multiple Choice" description="Klassisch: Eine Frage, 4 Antworten, eine richtig">
          <div className="py-4">
            <p className="mb-4 text-sm font-medium">Was ist ein Dekubitus?</p>
            <div className="space-y-2">
              {[
                { text: "Ein Druckgeschwür der Haut", correct: true },
                { text: "Eine Infektionskrankheit", correct: false },
                { text: "Ein Knochenbruch", correct: false },
                { text: "Eine Herz-Kreislauf-Erkrankung", correct: false },
              ].map((opt, i) => (
                <button key={i} className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all" style={{
                  backgroundColor: opt.correct ? `${ROSE}08` : "white",
                  border: `1.5px solid ${opt.correct ? ROSE : SAND}`,
                }}>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold" style={{
                    backgroundColor: opt.correct ? ROSE : `${SAND}40`,
                    color: opt.correct ? "white" : "#86868b",
                  }}>
                    {opt.correct ? <Check className="h-3.5 w-3.5" /> : String.fromCharCode(65 + i)}
                  </div>
                  <span style={{ color: opt.correct ? ROSE : "#1d1d1f" }}>{opt.text}</span>
                </button>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L1c: MC Statement Card ── */}
        <VariantCard label="L1c" name="MC — Statement Card" description="Aussage in großer Karte, Antwortoptionen darunter">
          <div className="py-4">
            <div className="mb-4 rounded-xl p-4 text-center" style={{ backgroundColor: BONE }}>
              <p className="text-sm font-bold" style={{ color: MAUVE }}>
                &ldquo;Ein Dekubitus Grad I zeigt eine nicht wegdrückbare Rötung.&rdquo;
              </p>
            </div>
            <div className="flex justify-center gap-3">
              {[
                { label: "Stimmt", icon: <Check className="h-4 w-4" />, selected: true },
                { label: "Stimmt nicht", icon: <X className="h-4 w-4" />, selected: false },
              ].map((opt, i) => (
                <button key={i} className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold" style={{
                  backgroundColor: opt.selected ? `${ROSE}08` : "white",
                  border: `1.5px solid ${opt.selected ? ROSE : SAND}`,
                  color: opt.selected ? ROSE : "#86868b",
                }}>
                  {opt.icon}
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L2: Wahr / Falsch ── */}
        <VariantCard label="L2" name="Wahr / Falsch" description="Schnelle Entscheidung: Stimmt die Aussage oder nicht?">
          <div className="py-4">
            <div className="mb-4 rounded-xl p-4 text-center" style={{ backgroundColor: BONE }}>
              <p className="text-sm font-medium">&ldquo;Ein Dekubitus kann nur am Steißbein entstehen.&rdquo;</p>
            </div>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold" style={{ backgroundColor: "white", border: `1.5px solid ${SAND}`, color: "#1d1d1f" }}>
                <Check className="h-4 w-4" style={{ color: ROSE }} /> Wahr
              </button>
              <button className="flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold" style={{ backgroundColor: `${ROSE}08`, border: `1.5px solid ${ROSE}`, color: ROSE }}>
                <X className="h-4 w-4" /> Falsch
              </button>
            </div>
          </div>
        </VariantCard>

        {/* ── L3: Swipe ── */}
        <VariantCard label="L3" name="Swipe-Karten" description="Tinder-Style: Wische Begriffe nach links (falsch) oder rechts (richtig)">
          <div className="py-4">
            <div className="flex items-center justify-center gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${MAUVE}10`, border: `1.5px solid ${MAUVE}30` }}>
                <X className="h-5 w-5" style={{ color: MAUVE }} />
              </div>
              <motion.div className="rounded-2xl px-8 py-6 text-center shadow-lg" style={{ backgroundColor: "white", border: `1.5px solid ${SAND}` }} whileHover={{ rotate: 2, scale: 1.02 }}>
                <p className="text-sm font-bold" style={{ color: MAUVE }}>Dekubitus Grad III</p>
                <p className="mt-1 text-xs text-[#86868b]">Verlust aller Hautschichten</p>
              </motion.div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${ROSE}10`, border: `1.5px solid ${ROSE}30` }}>
                <Check className="h-5 w-5" style={{ color: ROSE }} />
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-[#86868b]">Falsch | Richtig</p>
          </div>
        </VariantCard>

        {/* ── L142: Blitz-Quiz ── */}
        <VariantCard label="L142" name="Blitz-Quiz" description="10 Fragen in 60 Sekunden — Wissen unter Zeitdruck abrufen">
          <div className="py-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-full px-3 py-1" style={{ backgroundColor: `${ROSE}08` }}>
                <Zap className="h-3 w-3" style={{ color: ROSE }} />
                <span className="text-[9px] font-bold" style={{ color: ROSE }}>BLITZ-RUNDE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full px-2.5 py-1" style={{ backgroundColor: `${MAUVE}10` }}>
                  <Clock className="h-3 w-3" style={{ color: MAUVE }} />
                  <span className="text-[11px] font-mono font-bold" style={{ color: MAUVE }}>0:38</span>
                </div>
                <span className="text-xs font-bold" style={{ color: ROSE }}>7/10</span>
              </div>
            </div>
            <div className="mb-3 rounded-xl p-4 text-center" style={{ backgroundColor: BONE }}>
              <p className="text-sm font-bold">Wie viele Dekubitus-Stadien gibt es?</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["3", "4", "5", "6"].map((opt, i) => (
                <button key={i} className="rounded-xl py-3 text-center text-sm font-bold" style={{ backgroundColor: "white", border: `1.5px solid ${SAND}`, color: MAUVE }}>
                  {opt}
                </button>
              ))}
            </div>
            <div className="mt-3 flex justify-center gap-1">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="h-2 w-2 rounded-full" style={{ backgroundColor: i < 7 ? ROSE : i === 7 ? `${ROSE}40` : `${SAND}40` }} />
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 2: ZUORDNUNG & SORTIERUNG
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="zuordnung" title="Zuordnung & Sortierung" subtitle="Matching, Sorting, Categorize, Sequencing — aktives Verknüpfen von Wissen" />

        {/* ── L4: Matching ── */}
        <VariantCard label="L4" name="Zuordnung (Matching)" description="Begriffe der linken Spalte den Erklärungen rechts zuordnen">
          <div className="py-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                {["Dekubitus Grad I", "Dekubitus Grad II", "Dekubitus Grad III"].map((term, i) => (
                  <div key={i} className="rounded-xl px-3 py-2.5 text-xs font-semibold" style={{ backgroundColor: `${ROSE}08`, border: `1.5px solid ${ROSE}30`, color: ROSE }}>
                    {term}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {["Nicht wegdrückbare Rötung", "Teilverlust der Haut", "Verlust aller Hautschichten"].map((def, i) => (
                  <div key={i} className="rounded-xl px-3 py-2.5 text-xs" style={{ backgroundColor: BONE }}>
                    {def}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-[#86868b]">Ziehe die Begriffe zur passenden Erklärung</p>
          </div>
        </VariantCard>

        {/* ── L5: Sorting ── */}
        <VariantCard label="L5" name="Sortierung" description="Elemente in die richtige Reihenfolge bringen">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Sortiere die Dekubitus-Stadien von leicht nach schwer:</p>
            <div className="space-y-2">
              {[
                { pos: 1, text: "Grad I — Nicht wegdrückbare Rötung" },
                { pos: 2, text: "Grad II — Teilverlust der Haut (Blase)" },
                { pos: 3, text: "Grad III — Verlust aller Hautschichten" },
                { pos: 4, text: "Grad IV — Schädigung von Muskeln/Knochen" },
              ].map((item) => (
                <div key={item.pos} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: BONE }}>
                  <GripVertical className="h-4 w-4 cursor-grab" style={{ color: SAND }} />
                  <span className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: ROSE }}>{item.pos}</span>
                  <span className="text-xs">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L6: Kategorisierung ── */}
        <VariantCard label="L6" name="Kategorisierung" description="Begriffe in 2-4 Kategorien einordnen (Drag and Drop)">
          <div className="py-4">
            <div className="grid grid-cols-2 gap-3 mb-3">
              {[
                { title: "Intrinsische Faktoren", items: ["Alter", "Diabetes"], color: ROSE },
                { title: "Extrinsische Faktoren", items: ["Feuchtigkeit"], color: OAK },
              ].map((cat, i) => (
                <div key={i} className="rounded-xl p-3" style={{ backgroundColor: `${cat.color}06`, border: `1.5px dashed ${cat.color}30` }}>
                  <p className="mb-2 text-[9px] font-bold" style={{ color: cat.color }}>{cat.title}</p>
                  <div className="space-y-1">
                    {cat.items.map((item, j) => (
                      <span key={j} className="inline-block rounded-lg px-2 py-1 text-xs" style={{ backgroundColor: `${cat.color}15`, color: cat.color }}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {["Druck", "Mangelernährung", "Scherkräfte"].map((item, i) => (
                <span key={i} className="cursor-grab rounded-full px-3 py-1.5 text-xs font-medium shadow-sm" style={{ backgroundColor: "white", border: `1px solid ${SAND}` }}>{item}</span>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L20: Sequencing ── */}
        <VariantCard label="L20" name="Sequencing" description="Schritte einer Pflegehandlung in die richtige Reihenfolge bringen">
          <div className="py-4">
            <p className="mb-3 text-xs font-semibold" style={{ color: MAUVE }}>Bringe die Schritte der Wundversorgung in die richtige Reihenfolge:</p>
            <div className="space-y-2">
              {[
                { step: 1, text: "Hände desinfizieren", done: true },
                { step: 2, text: "Handschuhe anziehen", done: true },
                { step: 3, text: "Alten Verband entfernen", active: true },
                { step: 4, text: "Wunde reinigen" },
                { step: 5, text: "Neuen Verband anlegen" },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: item.done ? `${ROSE}06` : item.active ? "white" : BONE, border: item.active ? `1.5px solid ${ROSE}` : "1.5px solid transparent" }}>
                  <GripVertical className="h-4 w-4 cursor-grab" style={{ color: SAND }} />
                  <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold" style={{
                    backgroundColor: item.done ? ROSE : "white",
                    color: item.done ? "white" : item.active ? ROSE : "#86868b",
                    border: item.done ? "none" : `1.5px solid ${item.active ? ROSE : SAND}`,
                  }}>
                    {item.done ? <Check className="h-3.5 w-3.5" /> : item.step}
                  </div>
                  <span className="text-xs" style={{ color: item.done ? "#86868b" : "#1d1d1f", textDecoration: item.done ? "line-through" : "none" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 3: WISSEN & ERKLÄRUNG
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="wissen" title="Wissen & Erklärung" subtitle="Text, Flipcards, Reveal, Vergleich — Theorie anschaulich vermitteln" />

        {/* ── L9: Erklärtext ── */}
        <VariantCard label="L9" name="Erklärtext" description="Strukturierter Fachtext mit Hervorhebungen und Glossar-Verlinkung">
          <div className="py-4">
            <h3 className="mb-2 text-sm font-bold" style={{ color: MAUVE }}>Was ist ein Dekubitus?</h3>
            <p className="text-xs leading-relaxed text-[#86868b]">
              Ein <span className="font-semibold" style={{ color: ROSE }}>Dekubitus</span> (auch Druckgeschwür genannt) ist eine lokale Schädigung der Haut und des darunterliegenden Gewebes. Er entsteht durch anhaltenden <span className="font-semibold" style={{ color: ROSE }}>Druck</span>, meist über knöchernen Vorsprüngen.
            </p>
            <div className="mt-3 rounded-xl px-3 py-2" style={{ backgroundColor: `${ROSE}06` }}>
              <p className="text-[9px] font-bold" style={{ color: ROSE }}>Merke</p>
              <p className="text-xs text-[#86868b]">Druck x Zeit = Dekubitus-Risiko</p>
            </div>
          </div>
        </VariantCard>

        {/* ── L11: Flipcard ── */}
        <VariantCard label="L11" name="Flipcard (Karteikarte)" description="Vorderseite: Frage — Rückseite: Antwort. Zum Einprägen.">
          <div className="py-4">
            <div className="mx-auto h-40 w-64 flex flex-col items-center justify-center rounded-2xl p-4 text-center" style={{ backgroundColor: BONE, border: `1.5px solid ${SAND}` }}>
              <span className="text-[9px] uppercase tracking-widest" style={{ color: TAUPE }}>Fachbegriff</span>
              <p className="mt-2 text-lg font-bold" style={{ color: MAUVE }}>Dekubitus</p>
              <p className="mt-3 text-[9px] text-[#86868b]">Tippe zum Umdrehen</p>
            </div>
            <div className="mt-3 mx-auto h-40 w-64 flex flex-col items-center justify-center rounded-2xl p-4 text-center" style={{ backgroundColor: `${ROSE}08`, border: `1.5px solid ${ROSE}30` }}>
              <span className="text-[9px] uppercase tracking-widest" style={{ color: ROSE }}>Definition</span>
              <p className="mt-2 text-sm font-medium">Druckgeschwür — lokale Schädigung der Haut durch anhaltenden Druck</p>
            </div>
          </div>
        </VariantCard>

        {/* ── L12: Reveal ── */}
        <VariantCard label="L12" name="Reveal (Aufdecken)" description="Inhalte schrittweise aufdecken — erst nachdenken, dann sehen">
          <div className="py-4">
            <div className="space-y-2">
              {[
                { question: "Was sind die 4 Dekubitus-Stadien?", revealed: true, answer: "Grad I: Rötung, Grad II: Blase, Grad III: Tiefe Wunde, Grad IV: Knochen sichtbar" },
                { question: "Welche Skala misst das Dekubitus-Risiko?", revealed: false, answer: "" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl" style={{ backgroundColor: BONE }}>
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-xs font-medium">{item.question}</span>
                    <ChevronRight className="h-4 w-4 transition-transform" style={{ color: TAUPE, transform: item.revealed ? "rotate(90deg)" : "rotate(0deg)" }} />
                  </div>
                  {item.revealed && (
                    <div className="border-t px-4 py-3 text-xs text-[#86868b]" style={{ borderColor: `${SAND}60` }}>
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L14: Vergleichstabelle ── */}
        <VariantCard label="L14" name="Vergleichstabelle" description="Zwei Konzepte gegenüberstellen — Gemeinsamkeiten und Unterschiede">
          <div className="py-4">
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              <div className="grid grid-cols-[minmax(60px,auto)_1fr_1fr] text-center">
                <div className="py-2" style={{ backgroundColor: BONE }} />
                <div className="py-2 text-[11px] font-bold" style={{ backgroundColor: `${ROSE}10`, color: ROSE }}>Dekubitus</div>
                <div className="py-2 text-[11px] font-bold" style={{ backgroundColor: `${OAK}10`, color: OAK }}>Kontraktur</div>
              </div>
              {[
                { label: "Was?", a: "Druckgeschwür", b: "Gelenkversteifung" },
                { label: "Ursache", a: "Druck + Zeit", b: "Immobilität" },
                { label: "Prävention", a: "Lagerungswechsel", b: "Bewegungsübungen" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-[minmax(60px,auto)_1fr_1fr] border-t text-[11px]" style={{ borderColor: `${SAND}40` }}>
                  <div className="px-2 py-2.5 font-semibold" style={{ backgroundColor: BONE, color: MAUVE }}>{row.label}</div>
                  <div className="px-2 py-2.5 break-words hyphens-auto" style={{ backgroundColor: `${ROSE}06` }}>{row.a}</div>
                  <div className="px-2 py-2.5 break-words hyphens-auto" style={{ backgroundColor: `${OAK}06` }}>{row.b}</div>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 5: DIALOG & KOMMUNIKATION
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="dialog" title="Dialog & Kommunikation" subtitle="Gespräche üben, Rollenspiele, Fachsprache — Kommunikation trainieren" />

        {/* ── L10: Dialog ── */}
        <VariantCard label="L10" name="Dialog-Step" description="Gespräch zwischen Pflegekraft und Patient nachvollziehen">
          <div className="py-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm" style={{ backgroundColor: `${ROSE}15` }}>PK</div>
                <div className="max-w-[80%] rounded-2xl rounded-bl-sm px-3 py-2 text-[11px]" style={{ backgroundColor: `${ROSE}08` }}>
                  Guten Morgen, Herr Weber! Wie haben Sie geschlafen?
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <div className="max-w-[80%] rounded-2xl rounded-br-sm px-3 py-2 text-[11px]" style={{ backgroundColor: BONE }}>
                  Nicht so gut. Mein Rücken tut weh, besonders am Steißbein.
                </div>
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-bold" style={{ backgroundColor: `${SAND}30` }}>Pat</div>
              </div>
              <div className="flex gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm" style={{ backgroundColor: `${ROSE}15` }}>PK</div>
                <div className="max-w-[80%] rounded-2xl rounded-bl-sm px-3 py-2 text-[11px]" style={{ backgroundColor: `${ROSE}08` }}>
                  Darf ich mir das mal ansehen? Ich möchte die Hautstelle kontrollieren.
                </div>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L129: Rollenspiel ── */}
        <VariantCard label="L129" name="Rollenspiel-Dialog" description="Du bist die Pflegekraft — wähle die beste Antwort">
          <div className="py-4">
            <div className="mb-2 flex items-center gap-2 rounded-full px-3 py-1" style={{ backgroundColor: `${MAUVE}08` }}>
              <Users className="h-3 w-3" style={{ color: MAUVE }} />
              <span className="text-[9px] font-bold" style={{ color: MAUVE }}>ROLLENSPIEL: Du bist Pflegekraft</span>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold" style={{ backgroundColor: `${SAND}30` }}>Pat</div>
                <div className="max-w-[80%] rounded-2xl rounded-bl-sm px-3 py-2 text-[11px]" style={{ backgroundColor: BONE }}>
                  Schwester, ich habe Schmerzen am Rücken. Es brennt so.
                </div>
              </div>
              <div className="pl-9 space-y-1.5">
                <p className="text-xs font-bold" style={{ color: ROSE }}>Was sagst du?</p>
                {[
                  { text: "Darf ich mir das mal ansehen? Wo genau tut es weh?", good: true },
                  { text: "Das wird schon wieder. Nehmen Sie eine Tablette.", good: false },
                  { text: "Ich informiere sofort den Arzt.", good: false },
                ].map((opt, i) => (
                  <button key={i} className="w-full rounded-xl px-3 py-2.5 text-left text-xs" style={{ backgroundColor: "white", border: `1.5px solid ${opt.good ? `${ROSE}40` : SAND}` }}>
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L152: KI-Patient Chat ── */}
        <VariantCard label="L152" name="KI-Patient Chat" description="Chatte mit einem KI-simulierten Patienten — übe Anamnesegespräche">
          <div className="py-4">
            <div className="mb-2 flex items-center gap-2 rounded-full px-3 py-1" style={{ backgroundColor: `${MAUVE}08` }}>
              <Brain className="h-3 w-3" style={{ color: MAUVE }} />
              <span className="text-[9px] font-bold" style={{ color: MAUVE }}>KI-SIMULATION: Anamnesegespräch</span>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${SAND}` }}>
              <div className="space-y-2 p-3" style={{ backgroundColor: `${BONE}40` }}>
                <div className="flex gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold" style={{ backgroundColor: `${SAND}30` }}>Pat</div>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-sm px-3 py-2 text-[11px]" style={{ backgroundColor: "white" }}>
                    Guten Tag. Ich bin wegen meiner Hüfte hier.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm px-3 py-2 text-[11px] text-white" style={{ backgroundColor: ROSE }}>
                    Seit wann haben Sie die Beschwerden?
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 border-t px-3 py-2" style={{ borderColor: `${SAND}40` }}>
                <input className="flex-1 bg-transparent text-xs outline-none" placeholder="Deine nächste Frage..." readOnly />
                <button className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: ROSE }}>
                  <ArrowRight className="h-3 w-3 text-white" />
                </button>
                <button className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: `${OAK}15` }}>
                  <Mic className="h-3 w-3" style={{ color: OAK }} />
                </button>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ── L138: Fachsprache-Übersetzung ── */}
        <VariantCard label="L138" name="Fachsprache-Übersetzung" description="Alltagssprache in Fachsprache übersetzen">
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
                    <span className="flex-1 text-[11px] font-semibold" style={{ color: ROSE }}>{pair.fachsprache}</span>
                  ) : (
                    <span className="flex-1 rounded-lg px-2 py-1 text-[11px]" style={{ backgroundColor: "white", border: `1.5px dashed ${ROSE}40`, color: "#86868b" }}>Tippe hier...</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L139: Abkürzungen ── */}
        <VariantCard label="L139" name="Abkürzungen entschlüsseln" description="Was bedeutet RR? BZ? i.v.? — Pflege-Abkürzungen lernen">
          <div className="py-4">
            <div className="grid grid-cols-2 gap-2">
              {[
                { abbr: "RR", full: "Blutdruck (Riva-Rocci)", done: true },
                { abbr: "BZ", full: "Blutzucker", done: true },
                { abbr: "i.v.", full: "???", done: false },
                { abbr: "s.c.", full: "???", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl px-3 py-2.5" style={{ backgroundColor: item.done ? `${ROSE}06` : BONE }}>
                  <span className="text-sm font-bold font-mono" style={{ color: item.done ? ROSE : MAUVE }}>{item.abbr}</span>
                  <span className="flex-1 text-xs" style={{ color: "#86868b" }}>{item.full}</span>
                  {item.done && <Check className="h-3 w-3" style={{ color: ROSE }} />}
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 6: REFLEXION & SELBSTEINSCHÄTZUNG
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="reflexion" title="Reflexion & Selbsteinschätzung" subtitle="Reflexionsfrage, Konfidenz-Check — Metakognition fördern" />

        {/* ── L17: Reflexionsfrage ── */}
        <VariantCard label="L17" name="Reflexionsfrage" description="Offene Frage zum Nachdenken — keine richtige/falsche Antwort">
          <div className="py-4">
            <div className="mb-3 flex items-center gap-2 rounded-full px-3 py-1 w-fit" style={{ backgroundColor: `${MAUVE}08` }}>
              <Brain className="h-3 w-3" style={{ color: MAUVE }} />
              <span className="text-[9px] font-bold" style={{ color: MAUVE }}>REFLEXION</span>
            </div>
            <p className="mb-3 text-sm font-medium">Was würdest du tun, wenn ein Patient die Lagerung ablehnt, aber ein hohes Dekubitus-Risiko hat?</p>
            <div className="rounded-xl p-3" style={{ backgroundColor: BONE }}>
              <p className="text-xs text-[#86868b]">Denke über die Situation nach. Es gibt keine eindeutig richtige Antwort — wichtig ist deine Begründung.</p>
            </div>
          </div>
        </VariantCard>

        {/* ── L18: Confidence ── */}
        <VariantCard label="L18" name="Konfidenz-Check" description="Wie sicher bist du dir bei deiner Antwort?">
          <div className="py-4">
            <p className="mb-3 text-sm font-medium">Wie sicher bist du dir?</p>
            <div className="flex justify-center gap-3">
              {[
                { label: "Unsicher", selected: false },
                { label: "Etwas sicher", selected: false },
                { label: "Sehr sicher", selected: true },
              ].map((opt, i) => (
                <button key={i} className="rounded-xl px-4 py-3 text-xs font-medium" style={{
                  backgroundColor: opt.selected ? `${ROSE}08` : "white",
                  border: `1.5px solid ${opt.selected ? ROSE : SAND}`,
                  color: opt.selected ? ROSE : "#86868b",
                }}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 7: FREITEXT & DOKUMENTATION
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="freitext" title="Freitext & Dokumentation" subtitle="Freitext, Pflegebericht, Lückentext, Fehler finden — aktives Formulieren" />

        {/* ── L20b: Freitext ── */}
        <VariantCard label="L20b" name="Freitext-Eingabe" description="Offene Texteingabe — KI bewertet die Antwort">
          <div className="py-4">
            <p className="mb-3 text-sm font-medium">Beschreibe in eigenen Worten, was ein Dekubitus ist.</p>
            <div className="rounded-xl p-3" style={{ backgroundColor: BONE, border: `1.5px solid ${SAND}` }}>
              <p className="text-xs text-[#86868b]">Mindestens 2 Sätze schreiben...</p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[9px] text-[#86868b]">0 / 150 Zeichen (min. 50)</span>
              <button className="rounded-xl px-3 py-1 text-xs font-medium text-white" style={{ backgroundColor: ROSE }}>Absenden</button>
            </div>
          </div>
        </VariantCard>

        {/* ── L19b: Lückentext (Cloze) ── */}
        <VariantCard label="L19b" name="Lückentext (Cloze)" description="Wörter im Text fehlen — ergänze die richtigen Begriffe">
          <div className="py-4">
            <p className="text-xs leading-relaxed">
              Ein Dekubitus entsteht durch anhaltenden{" "}
              <span className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs font-bold" style={{ backgroundColor: `${ROSE}15`, color: ROSE, border: `1.5px dashed ${ROSE}` }}>Druck</span>
              {" "}auf die Haut. Besonders gefährdet sind Stellen über{" "}
              <span className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs font-bold" style={{ backgroundColor: `${ROSE}15`, color: ROSE, border: `1.5px dashed ${ROSE}` }}>Knochenvorsprüngen</span>
              . Die wichtigste Prophylaxe ist der regelmäßige{" "}
              <span className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs" style={{ backgroundColor: `${SAND}20`, color: "#86868b", border: `1.5px dashed ${SAND}` }}>???</span>
              .
            </p>
          </div>
        </VariantCard>

        {/* ── L127: Fehler finden ── */}
        <VariantCard label="L127" name="Fehler finden" description="Text mit absichtlichen Fehlern — markiere die falschen Stellen">
          <div className="py-4">
            <p className="mb-2 text-xs font-semibold" style={{ color: MAUVE }}>Finde 3 Fehler im Pflegebericht:</p>
            <div className="rounded-xl p-4 text-[11px] leading-relaxed" style={{ backgroundColor: BONE }}>
              Patient Herr Weber, 78 J., hat einen Dekubitus{" "}
              <span className="rounded px-1 py-0.5 font-bold" style={{ backgroundColor: `${ROSE}20`, color: ROSE, textDecoration: "line-through" }}>Grad 5</span>
              {" "}am Steißbein. Der Patient wird alle{" "}
              <span className="rounded px-1 py-0.5 font-bold" style={{ backgroundColor: `${ROSE}20`, color: ROSE, textDecoration: "line-through" }}>6 Stunden</span>
              {" "}umgelagert. Die Haut wird mit{" "}
              <span className="rounded px-1 py-0.5" style={{ backgroundColor: `${SAND}30` }}>Hautpflegeöl</span>
              {" "}versorgt.
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs" style={{ color: ROSE }}>2 von 3 Fehlern gefunden</span>
            </div>
          </div>
        </VariantCard>

        {/* ── L153: Checkliste ── */}
        <VariantCard label="L153" name="Checkliste" description="Praxis-Checkliste: Alle Schritte einer Maßnahme abhaken">
          <div className="py-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-bold" style={{ color: MAUVE }}>Checkliste: Händedesinfektion</span>
              <span className="rounded-full px-2 py-0.5 text-[9px]" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>5/8</span>
            </div>
            <div className="space-y-1">
              {[
                { text: "Schmuck ablegen", done: true },
                { text: "Desinfektionsmittel in die hohle Hand", done: true },
                { text: "Handfläche auf Handfläche", done: true },
                { text: "Rechte über linke Hand", done: true },
                { text: "Verschränkte Finger", done: true },
                { text: "Außenseite der Finger", done: false, active: true },
                { text: "Kreisende Bewegung des Daumens", done: false },
                { text: "Fingerspitzen in der Handfläche", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ backgroundColor: item.active ? `${ROSE}06` : item.done ? `${ROSE}06` : "transparent" }}>
                  <div className="flex h-5 w-5 items-center justify-center rounded-md" style={{ backgroundColor: item.done ? ROSE : "white", border: `1.5px solid ${item.done ? ROSE : SAND}` }}>
                    {item.done && <Check className="h-3.5 w-3.5 text-white" />}
                  </div>
                  <span className="text-[11px]" style={{ textDecoration: item.done ? "line-through" : "none", color: item.done ? "#86868b" : item.active ? ROSE : "#1d1d1f" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 8: INTERAKTIVE BILDER
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="bilder" title="Interaktive Bilder" subtitle="Hotspot, Bild beschriften — visuelles Lernen" />

        {/* ── L26: Hotspot ── */}
        <VariantCard label="L26" name="Hotspot (Bildklick)" description="Auf dem Bild die richtige Stelle antippen">
          <div className="py-4">
            <p className="mb-2 text-xs font-semibold" style={{ color: MAUVE }}>Wo entsteht am häufigsten ein Dekubitus?</p>
            <div className="relative rounded-xl h-44" style={{ backgroundColor: BONE }}>
              <svg viewBox="0 0 200 160" className="h-full w-full">
                <ellipse cx="100" cy="30" rx="20" ry="18" fill={`${BLUSH}30`} stroke={SAND} strokeWidth="1" />
                <rect x="85" y="48" width="30" height="50" rx="4" fill={`${BLUSH}20`} stroke={SAND} strokeWidth="1" />
                <rect x="70" y="98" width="15" height="45" rx="3" fill={`${BLUSH}20`} stroke={SAND} strokeWidth="1" />
                <rect x="115" y="98" width="15" height="45" rx="3" fill={`${BLUSH}20`} stroke={SAND} strokeWidth="1" />
                <circle cx="100" cy="95" r="8" fill="none" stroke={ROSE} strokeWidth="2" />
                <text x="120" y="95" fontSize="8" fill={ROSE} fontWeight="bold">Steißbein</text>
              </svg>
            </div>
          </div>
        </VariantCard>

        {/* ── L30: Label Image ── */}
        <VariantCard label="L30" name="Bild beschriften" description="Anatomie-Bild mit Beschriftungsfeldern — richtige Begriffe zuordnen">
          <div className="py-4">
            <div className="relative rounded-xl h-44" style={{ backgroundColor: BONE }}>
              <svg viewBox="0 0 280 160" className="h-full w-full">
                <rect x="40" y="15" width="200" height="30" rx="2" fill={`${BLUSH}50`} stroke={ROSE} strokeWidth="1" />
                <rect x="40" y="45" width="200" height="35" rx="2" fill={`${SAND}40`} stroke={OAK} strokeWidth="1" />
                <rect x="40" y="80" width="200" height="35" rx="2" fill={`${TAUPE}30`} stroke={TAUPE} strokeWidth="1" />
                <rect x="40" y="115" width="200" height="30" rx="2" fill={`${MAUVE}15`} stroke={MAUVE} strokeWidth="1" />
                <text x="260" y="35" fontSize="8" fill={ROSE} fontWeight="bold">Epidermis</text>
                <text x="260" y="67" fontSize="8" fill="#86868b">???</text>
                <text x="260" y="102" fontSize="8" fill="#86868b">???</text>
              </svg>
            </div>
            <div className="mt-2 flex gap-2">
              {["Dermis", "Subkutis", "Muskel"].map((w, i) => (
                <span key={i} className="rounded-full px-2.5 py-1 text-xs font-medium cursor-grab" style={{ backgroundColor: "white", border: `1px solid ${SAND}` }}>{w}</span>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 9: BERECHNUNG & SCHÄTZUNG
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="berechnung" title="Berechnung & Schätzung" subtitle="Medikamenten-Dosierung berechnen — klinisch relevante Mathematik" />

        {/* ── L133: Dosierungs-Rechnung ── */}
        <VariantCard label="L133" name="Dosierungs-Rechnung" description="Medikamenten-Dosierung berechnen">
          <div className="py-4">
            <div className="rounded-xl p-4" style={{ backgroundColor: BONE }}>
              <p className="mb-3 text-xs leading-relaxed">
                Verordnet: <strong>Ibuprofen 400mg</strong> alle 8 Stunden.<br />
                Vorrätig: Tabletten a <strong>200mg</strong>.<br />
                Wie viele Tabletten pro <strong>Tag</strong>?
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-xl overflow-hidden" style={{ border: `1.5px solid ${SAND}` }}>
                  <button className="px-3 py-2 text-sm font-bold" style={{ backgroundColor: `${SAND}20`, color: TAUPE }}>-</button>
                  <span className="px-4 py-2 text-sm font-bold" style={{ color: ROSE }}>6</span>
                  <button className="px-3 py-2 text-sm font-bold" style={{ backgroundColor: `${SAND}20`, color: TAUPE }}>+</button>
                </div>
                <span className="text-xs text-[#86868b]">Tabletten / Tag</span>
              </div>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 10: AUDIO & SPRACHE
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="audio" title="Audio & Sprache" subtitle="Vorlesen, Nachsprechen — Pflege ist ein Sprechberuf" />

        {/* ── L16: Audio ── */}
        <VariantCard label="L16" name="Audio (Vorlesen)" description="Fachbegriff hören und korrekte Aussprache lernen">
          <div className="py-4">
            <div className="flex items-center gap-4">
              <button className="flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: `${ROSE}15` }}>
                <Play className="h-6 w-6" style={{ color: ROSE }} />
              </button>
              <div className="flex-1">
                <p className="text-sm font-bold" style={{ color: MAUVE }}>Dekubitus</p>
                <p className="text-xs text-[#86868b]">[de-KU-bi-tus]</p>
                <div className="mt-1 h-1.5 rounded-full" style={{ backgroundColor: `${SAND}40` }}>
                  <div className="h-full rounded-full" style={{ width: "45%", backgroundColor: ROSE }} />
                </div>
              </div>
              <Volume2 className="h-5 w-5" style={{ color: TAUPE }} />
            </div>
          </div>
        </VariantCard>

        {/* ── L31: Sprechübung ── */}
        <VariantCard label="L31" name="Sprechübung (Whisper)" description="Fachbegriff aussprechen — KI prüft die Aussprache">
          <div className="py-4">
            <div className="text-center">
              <p className="mb-2 text-sm font-medium">Sprich diesen Begriff laut aus:</p>
              <p className="mb-4 text-2xl font-bold" style={{ color: MAUVE }}>Thromboseprophylaxe</p>
              <button className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: `${ROSE}15`, border: `1.5px solid ${ROSE}` }}>
                <Mic className="h-6 w-6" style={{ color: ROSE }} />
              </button>
              <p className="mt-2 text-xs text-[#86868b]">Tippe und sprich</p>
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 12: SZENARIEN & FÄLLE
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="szenarien" title="Szenarien & Fälle" subtitle="Branching, Risiko-Assessment, Kompetenz-Check — komplexe Entscheidungen" />

        {/* ── L23: Branching ── */}
        <VariantCard label="L23" name="Branching Scenario" description="Deine Entscheidung beeinflusst den weiteren Verlauf">
          <div className="py-4">
            <div className="mb-3 rounded-xl p-4" style={{ backgroundColor: BONE }}>
              <p className="text-xs font-bold" style={{ color: MAUVE }}>Situation:</p>
              <p className="mt-1 text-xs">Du entdeckst eine nicht wegdrückbare Rötung am Steißbein von Frau Schmidt (82 J.).</p>
            </div>
            <p className="mb-2 text-xs font-semibold" style={{ color: ROSE }}>Was machst du zuerst?</p>
            <div className="space-y-2">
              {[
                { text: "Hautstelle dokumentieren und Arzt informieren" },
                { text: "Lagerung sofort ändern" },
                { text: "Abwarten und morgen nochmal schauen" },
              ].map((opt, i) => (
                <button key={i} className="w-full rounded-xl px-4 py-3 text-left text-xs font-medium" style={{ backgroundColor: "white", border: `1.5px solid ${i === 0 ? `${ROSE}40` : SAND}` }}>
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ── L155: Risiko-Assessment ── */}
        <VariantCard label="L155" name="Risiko-Assessment" description="Braden-Skala ausfüllen — systematische Risikoeinschätzung">
          <div className="py-4">
            <div className="mb-3 flex items-center gap-2">
              <Shield className="h-4 w-4" style={{ color: MAUVE }} />
              <span className="text-xs font-bold" style={{ color: MAUVE }}>Braden-Skala — Dekubitus-Risiko</span>
            </div>
            <div className="space-y-2">
              {[
                { category: "Sensorisches Empfinden", score: 3, max: 4 },
                { category: "Feuchtigkeit", score: 2, max: 4 },
                { category: "Aktivität", score: 1, max: 4 },
                { category: "Mobilität", score: 2, max: 4 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg px-3 py-2" style={{ backgroundColor: BONE }}>
                  <span className="w-36 text-xs">{item.category}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: item.max }, (_, j) => (
                      <div key={j} className="h-3 w-6 rounded" style={{ backgroundColor: j < item.score ? ROSE : `${SAND}40` }} />
                    ))}
                  </div>
                  <span className="text-xs font-bold" style={{ color: ROSE }}>{item.score}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl p-2.5 text-center" style={{ backgroundColor: `${MAUVE}08` }}>
              <span className="text-xs font-bold" style={{ color: MAUVE }}>Gesamtscore: 8 / 16 — Mittleres Risiko</span>
            </div>
          </div>
        </VariantCard>

        {/* ── L159: Kompetenz-Check ── */}
        <VariantCard label="L159" name="Kompetenz-Check" description="Abschluss-Assessment: Zeige was du gelernt hast">
          <div className="py-4">
            <div className="mb-3 flex items-center gap-2 rounded-full px-3 py-1 w-fit" style={{ backgroundColor: `${ROSE}08` }}>
              <Award className="h-3 w-3" style={{ color: ROSE }} />
              <span className="text-[9px] font-bold" style={{ color: ROSE }}>KOMPETENZ-CHECK</span>
            </div>
            <div className="space-y-2">
              {[
                { skill: "Stadien erkennen", pct: 92 },
                { skill: "Braden-Skala", pct: 78 },
                { skill: "Prophylaxe planen", pct: 65 },
                { skill: "Dokumentation", pct: 45 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ backgroundColor: BONE }}>
                  <span className="flex-1 text-xs">{item.skill}</span>
                  <div className="h-2 w-20 rounded-full" style={{ backgroundColor: `${SAND}40` }}>
                    <div className="h-full rounded-full" style={{ width: `${item.pct}%`, backgroundColor: item.pct >= 75 ? ROSE : item.pct >= 60 ? OAK : MAUVE }} />
                  </div>
                  <span className="text-xs font-bold" style={{ color: item.pct >= 75 ? ROSE : item.pct >= 60 ? OAK : MAUVE }}>{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </VariantCard>

        {/* ═══════════════════════════════════════════════
            SECTION 13: ZUSAMMENFASSUNG
        ═══════════════════════════════════════════════ */}
        <SectionHeader id="zusammenfassung" title="Zusammenfassung" subtitle="Session-Summary, Feedback — Abschluss und Ausblick" />

        {/* ── L23b: Summary ── */}
        <VariantCard label="L23b" name="Session-Zusammenfassung" description="Was hast du heute gelernt? Überblick mit Stärken und Schwächen">
          <div className="py-4">
            <div className="mb-3 text-center">
              <p className="text-base font-bold">Session abgeschlossen!</p>
              <p className="text-xs text-[#86868b]">CE 05 — Dekubitus-Prophylaxe</p>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: "Richtig", value: "14/18", color: ROSE },
                { label: "Zeit", value: "12 min", color: OAK },
                { label: "XP", value: "+120", color: MAUVE },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl py-2.5 text-center" style={{ backgroundColor: BONE }}>
                  <p className="text-sm font-bold" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-[9px] text-[#86868b]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-1.5">
              <div className="rounded-xl px-3 py-2" style={{ backgroundColor: `${ROSE}06` }}>
                <p className="text-[9px] font-bold" style={{ color: ROSE }}>Stärke</p>
                <p className="text-xs">Dekubitus-Stadien sicher erkannt</p>
              </div>
              <div className="rounded-xl px-3 py-2" style={{ backgroundColor: `${MAUVE}06` }}>
                <p className="text-[9px] font-bold" style={{ color: MAUVE }}>Üben</p>
                <p className="text-xs">Braden-Skala — Kategorien verwechselt</p>
              </div>
            </div>
          </div>
        </VariantCard>


      </div>
    </div>
  )
}

// ─── Helper Components ───

function SectionHeader({ id, title, subtitle }: { id: string; title: string; subtitle: string }) {
  return (
    <div id={id} className="mb-6 mt-16 first:mt-0 scroll-mt-16">
      <div className="mb-1 text-xs font-semibold uppercase tracking-widest" style={{ color: OAK }}>
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
        <div className="flex h-7 min-w-[28px] items-center justify-center rounded-lg px-1.5 text-[9px] font-bold text-white" style={{ backgroundColor: SAGE }}>
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
