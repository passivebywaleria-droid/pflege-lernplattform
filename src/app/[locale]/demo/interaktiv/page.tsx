"use client";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, Reorder } from "framer-motion";

/* ================================================================
   TYPES & SELECTOR
   ================================================================ */
const questionTypes = [
  { id: "hotspot", label: "Hotspot", color: "from-rose-500 to-pink-600", icon: "🎯", short: "Bild antippen" },
  { id: "branching", label: "Szenario", color: "from-violet-500 to-purple-600", icon: "🌳", short: "Entscheidungsbaum" },
  { id: "sequencing", label: "Sequencing", color: "from-amber-500 to-orange-600", icon: "↕️", short: "Reihenfolge" },
  { id: "slider", label: "Berechnung", color: "from-cyan-500 to-blue-600", icon: "🔢", short: "Dosisrechner" },
  { id: "dialog", label: "Patient", color: "from-emerald-500 to-teal-600", icon: "💬", short: "Dialog" },
  { id: "cloze", label: "Lückentext", color: "from-blue-500 to-indigo-600", icon: "📝", short: "Wörter einsetzen" },
  { id: "triage", label: "Triage", color: "from-red-500 to-rose-600", icon: "🚨", short: "Priorisierung" },
  { id: "matching", label: "Zuordnung", color: "from-teal-500 to-emerald-600", icon: "🔗", short: "Verbinden" },
  { id: "confidence", label: "Wahr/Falsch", color: "from-purple-500 to-violet-600", icon: "⚖️", short: "+ Selbsteinschätzung" },
  { id: "calc", label: "Perfusor", color: "from-orange-500 to-red-600", icon: "💉", short: "Mehrstufig rechnen" },
  { id: "crossword", label: "Kreuzworträtsel", color: "from-sky-500 to-blue-600", icon: "🧩", short: "Fachbegriffe" },
  { id: "memory", label: "Memory", color: "from-pink-500 to-rose-600", icon: "🃏", short: "Paare finden" },
  { id: "categorize", label: "Gruppen", color: "from-lime-500 to-green-600", icon: "📂", short: "Symptome sortieren" },
  { id: "highlight", label: "Markieren", color: "from-yellow-500 to-amber-600", icon: "🖍️", short: "Fehler im Text" },
  { id: "millionaire", label: "Millionär", color: "from-indigo-500 to-blue-700", icon: "💎", short: "Quiz-Show" },
];

/* ================================================================
   SHARED
   ================================================================ */
const FeedbackBanner = ({ correct, message }: { correct: boolean; message: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    className={`mt-5 px-5 py-4 rounded-2xl text-sm font-medium flex items-start gap-3 ${
      correct
        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
        : "bg-red-50 text-red-700 border border-red-200"
    }`}
  >
    <span className="text-lg mt-[-2px]">{correct ? "✅" : "❌"}</span>
    <span className="leading-relaxed">{message}</span>
  </motion.div>
);

const PrimaryButton = ({ onClick, disabled, children }: { onClick: () => void; disabled?: boolean; children: React.ReactNode }) => (
  <motion.button
    whileHover={!disabled ? { scale: 1.02 } : {}}
    whileTap={!disabled ? { scale: 0.98 } : {}}
    onClick={onClick}
    disabled={disabled}
    className={`px-6 py-3 text-sm font-semibold rounded-2xl transition-all shadow-sm ${
      disabled
        ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
        : "bg-zinc-900 text-white hover:bg-zinc-800 hover:shadow-md active:shadow-sm"
    }`}
  >
    {children}
  </motion.button>
);

/* ================================================================
   1) HOTSPOT — Dekubitus
   ================================================================ */
const hotspotZones = [
  { id: "hinterkopf", x: 50, y: 6, r: 5, label: "Hinterkopf" },
  { id: "schulterblatt", x: 37, y: 24, r: 5, label: "Schulterblatt" },
  { id: "ellenbogen", x: 25, y: 40, r: 5, label: "Ellenbogen" },
  { id: "kreuzbein", x: 50, y: 48, r: 6, label: "Kreuzbein" },
  { id: "ferse_l", x: 42, y: 90, r: 5, label: "Ferse links" },
  { id: "ferse_r", x: 58, y: 90, r: 5, label: "Ferse rechts" },
];

function HotspotQuestion() {
  const [found, setFound] = useState<string[]>([]);
  const [ripple, setRipple] = useState<{ x: number; y: number; ok: boolean } | null>(null);
  const allFound = found.length === hotspotZones.length;

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (allFound) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const hit = hotspotZones.find(
      (z) => !found.includes(z.id) && Math.sqrt((x - z.x) ** 2 + (y - z.y) ** 2) < z.r + 4
    );

    setRipple({ x, y, ok: !!hit });
    setTimeout(() => setRipple(null), 600);

    if (hit) setFound((prev) => [...prev, hit.id]);
  };

  return (
    <div>
      {/* Progress dots */}
      <div className="flex items-center gap-2 mb-4">
        {hotspotZones.map((z) => (
          <motion.div
            key={z.id}
            animate={found.includes(z.id) ? { scale: [1, 1.3, 1], backgroundColor: "#10b981" } : {}}
            className={`w-3 h-3 rounded-full transition-colors ${
              found.includes(z.id) ? "bg-emerald-500" : "bg-zinc-200"
            }`}
          />
        ))}
        <span className="text-xs text-zinc-400 ml-2">{found.length}/{hotspotZones.length}</span>
      </div>

      <p className="text-sm text-zinc-600 mb-4">
        Tippe auf alle <strong>Dekubitus-Prädilektionsstellen</strong> in Rückenlage.
      </p>

      <div className="relative mx-auto bg-gradient-to-b from-zinc-50 to-zinc-100 rounded-2xl p-6" style={{ maxWidth: 320 }}>
        <svg viewBox="0 0 100 100" className="w-full cursor-crosshair select-none" onClick={handleClick}>
          {/* Body silhouette - more detailed */}
          <defs>
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d4d4d8" />
              <stop offset="100%" stopColor="#a1a1aa" />
            </linearGradient>
            <filter id="bodyShadow"><feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.15" /></filter>
          </defs>

          <g filter="url(#bodyShadow)">
            {/* Head */}
            <ellipse cx="50" cy="8" rx="9" ry="8" fill="url(#bodyGrad)" />
            {/* Neck */}
            <rect x="46" y="15" width="8" height="4" rx="2" fill="url(#bodyGrad)" />
            {/* Torso */}
            <rect x="35" y="18" width="30" height="32" rx="6" fill="url(#bodyGrad)" />
            {/* Arms */}
            <rect x="22" y="20" width="13" height="7" rx="3.5" fill="url(#bodyGrad)" />
            <rect x="65" y="20" width="13" height="7" rx="3.5" fill="url(#bodyGrad)" />
            <rect x="18" y="27" width="7" height="22" rx="3.5" fill="url(#bodyGrad)" />
            <rect x="75" y="27" width="7" height="22" rx="3.5" fill="url(#bodyGrad)" />
            {/* Hands */}
            <ellipse cx="21.5" cy="51" rx="4" ry="3" fill="url(#bodyGrad)" />
            <ellipse cx="78.5" cy="51" rx="4" ry="3" fill="url(#bodyGrad)" />
            {/* Legs */}
            <rect x="36" y="50" width="12" height="34" rx="5" fill="url(#bodyGrad)" />
            <rect x="52" y="50" width="12" height="34" rx="5" fill="url(#bodyGrad)" />
            {/* Feet */}
            <ellipse cx="42" cy="87" rx="7" ry="4" fill="url(#bodyGrad)" />
            <ellipse cx="58" cy="87" rx="7" ry="4" fill="url(#bodyGrad)" />
          </g>

          {/* Pulsing hint zones (not yet found) */}
          {hotspotZones.map((z) =>
            !found.includes(z.id) ? (
              <g key={z.id}>
                <circle cx={z.x} cy={z.y} r={z.r} fill="rgba(239,68,68,0.08)" stroke="none">
                  <animate attributeName="r" values={`${z.r};${z.r + 2};${z.r}`} dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>
            ) : null
          )}

          {/* Found zones */}
          {hotspotZones.map((z) =>
            found.includes(z.id) ? (
              <g key={z.id}>
                <motion.circle
                  cx={z.x}
                  cy={z.y}
                  r={z.r}
                  fill="rgba(16,185,129,0.2)"
                  stroke="#10b981"
                  strokeWidth="1"
                  initial={{ r: 0, opacity: 0 }}
                  animate={{ r: z.r, opacity: 1 }}
                />
                <motion.text
                  x={z.x}
                  y={z.y + 1.2}
                  textAnchor="middle"
                  fontSize="4"
                  fill="#059669"
                  fontWeight="700"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  ✓
                </motion.text>
              </g>
            ) : null
          )}

          {/* Click ripple */}
          {ripple && (
            <circle cx={ripple.x} cy={ripple.y} r="0" fill="none" stroke={ripple.ok ? "#10b981" : "#ef4444"} strokeWidth="0.8">
              <animate attributeName="r" from="0" to="12" dur="0.5s" fill="freeze" />
              <animate attributeName="opacity" from="0.8" to="0" dur="0.5s" fill="freeze" />
            </circle>
          )}
        </svg>
      </div>

      {/* Found labels */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        <AnimatePresence>
          {found.map((id) => {
            const zone = hotspotZones.find((z) => z.id === id)!;
            return (
              <motion.span
                key={id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium"
              >
                {zone.label}
              </motion.span>
            );
          })}
        </AnimatePresence>
      </div>

      {allFound && (
        <FeedbackBanner correct message="Alle 6 Prädilektionsstellen korrekt! Hinterkopf, Schulterblatt, Ellenbogen, Kreuzbein und beide Fersen." />
      )}
    </div>
  );
}

/* ================================================================
   2) BRANCHING SCENARIO
   ================================================================ */
interface ScenarioNode {
  id: string;
  text: string;
  vitals?: string;
  choices?: { label: string; next: string; correct?: boolean; feedback: string }[];
  ending?: { correct: boolean; summary: string };
}

const scenarioNodes: Record<string, ScenarioNode> = {
  start: {
    id: "start",
    text: "Frau Müller (82 J.) klingelt. Sie klagt über plötzliche Atemnot und Brustenge.",
    vitals: "SpO₂ 89% · Puls 110 · RR 160/95",
    choices: [
      { label: "Oberkörper hochlagern + O₂ vorbereiten", next: "hochlagern", correct: true, feedback: "Richtig! Oberkörperhochlagerung entlastet den kleinen Kreislauf." },
      { label: "Erst Arzt anrufen, dann abwarten", next: "abwarten", feedback: "Erstmaßnahmen sollten sofort beginnen — parallel zur Arztinformation." },
      { label: "Beruhigen und Wasser anbieten", next: "wasser", feedback: "Bei SpO₂ 89% müssen sofort pflegerische Erstmaßnahmen eingeleitet werden." },
    ],
  },
  hochlagern: {
    id: "hochlagern",
    text: "Oberkörper auf 45° gelagert. Atemnot bessert sich leicht.",
    vitals: "SpO₂ 91% · Puls 108",
    choices: [
      { label: "O₂ Nasenbrille (2-4 l/min) + Arzt informieren", next: "o2_arzt", correct: true, feedback: "Korrekt! O₂-Gabe bei SpO₂ < 92% und Arzt verständigen." },
      { label: "Vitalzeichen nochmal messen und dokumentieren", next: "messen", feedback: "O₂-Gabe hat bei SpO₂ 91% Priorität. Erst versorgen, dann dokumentieren." },
    ],
  },
  o2_arzt: {
    id: "o2_arzt",
    text: "O₂ läuft. Sie informieren den diensthabenden Arzt. Wie geben Sie die Informationen weiter?",
    vitals: "SpO₂ 92% mit O₂ · Puls 105",
    choices: [
      { label: "SBAR-Schema: Situation, Background, Assessment, Recommendation", next: "end_good", correct: true, feedback: "SBAR ist der Standard für strukturierte klinische Kommunikation." },
      { label: "Frei schildern was passiert ist", next: "end_ok", feedback: "SBAR stellt sicher, dass alle relevanten Infos strukturiert weitergegeben werden." },
    ],
  },
  abwarten: { id: "abwarten", text: "Während Sie telefonieren, verschlechtert sich der Zustand. Die Patientin wird zyanotisch.", vitals: "SpO₂ 86% ↓↓", ending: { correct: false, summary: "Bei SpO₂ < 90% sofort Erstmaßnahmen einleiten — parallel zur Arztinformation." } },
  wasser: { id: "wasser", text: "Frau Müller verschluckt sich und hustet. Die Atemnot verstärkt sich.", vitals: "SpO₂ 87% ↓", ending: { correct: false, summary: "Bei Atemnot kein Trinken — Aspirationsgefahr! Richtig: Hochlagern + O₂ + Arzt." } },
  messen: { id: "messen", text: "Wertvolle Zeit vergangen. Die Patientin wird unruhiger.", vitals: "SpO₂ 90% · Puls 112", ending: { correct: false, summary: "O₂-Gabe bei SpO₂ < 92% hat Vorrang. Erst handeln, dann dokumentieren." } },
  end_good: { id: "end_good", text: "Per SBAR: Situation, Background, Assessment, Recommendation übermittelt. Arzt kommt in 5 Min.", vitals: "SpO₂ 94% ↑ · stabil", ending: { correct: true, summary: "Perfekt! Hochlagerung → O₂ → SBAR. Frau Müller ist stabil." } },
  end_ok: { id: "end_ok", text: "Arzt fragt mehrfach nach — einige Infos fehlen.", vitals: "SpO₂ 92%", ending: { correct: false, summary: "Versorgung richtig, Kommunikation verbesserbar. SBAR hilft bei vollständiger Übergabe." } },
};

function BranchingScenario() {
  const [nodeId, setNodeId] = useState("start");
  const [history, setHistory] = useState<{ nodeId: string; choiceIdx: number; correct?: boolean }[]>([]);
  const node = scenarioNodes[nodeId];

  const choose = (idx: number) => {
    const choice = node.choices![idx];
    setHistory((h) => [...h, { nodeId, choiceIdx: idx, correct: choice.correct }]);
    setNodeId(choice.next);
  };

  const restart = () => { setNodeId("start"); setHistory([]); };
  const correctCount = history.filter((h) => h.correct).length;

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-1.5 mb-5">
        {history.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`w-8 h-1.5 rounded-full ${h.correct ? "bg-emerald-500" : "bg-red-400"}`}
          />
        ))}
        <div className="w-8 h-1.5 rounded-full bg-blue-400 animate-pulse" />
      </div>

      {/* Vitals bar */}
      {node.vitals && (
        <motion.div
          key={node.vitals}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 bg-zinc-900 text-white rounded-xl px-4 py-2.5 mb-4 font-mono text-xs"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {node.vitals}
        </motion.div>
      )}

      {/* Scenario text */}
      <motion.div
        key={nodeId}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm text-zinc-800 leading-relaxed mb-4">{node.text}</p>

        {node.choices && (
          <div className="space-y-2">
            {node.choices.map((c, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.01, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => choose(i)}
                className="w-full text-left px-4 py-3.5 border-2 border-zinc-200 rounded-2xl text-sm text-zinc-700 hover:border-violet-300 hover:bg-violet-50/50 transition-colors"
              >
                {c.label}
              </motion.button>
            ))}
          </div>
        )}

        {node.ending && (
          <div>
            <FeedbackBanner correct={node.ending.correct} message={node.ending.summary} />
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xs text-zinc-400">{correctCount}/{history.length} korrekt</span>
              <button onClick={restart} className="text-sm text-violet-600 hover:text-violet-700 font-semibold">
                Nochmal →
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

/* ================================================================
   3) SEQUENCING — Händedesinfektion
   ================================================================ */
const desinfektionSteps = [
  { id: "1", label: "Desinfektionsmittel in die hohle Hand", order: 1 },
  { id: "2", label: "Handfläche auf Handfläche reiben", order: 2 },
  { id: "3", label: "Rechte Handfläche über linkem Handrücken", order: 3 },
  { id: "4", label: "Finger verschränkt ineinander reiben", order: 4 },
  { id: "5", label: "Außenseite der Finger auf Handfläche", order: 5 },
  { id: "6", label: "Daumen kreisend in geschlossener Hand", order: 6 },
  { id: "7", label: "Fingerkuppen kreisend in Handfläche reiben", order: 7 },
];

function ImageSequencing() {
  const shuffled = useRef([...desinfektionSteps].sort(() => Math.random() - 0.5));
  const [items, setItems] = useState(shuffled.current);
  const [checked, setChecked] = useState(false);
  const isCorrect = items.every((item, idx) => item.order === idx + 1);

  return (
    <div>
      <p className="text-sm text-zinc-600 mb-4">
        Bringe die <strong>hygienische Händedesinfektion</strong> in die richtige Reihenfolge.
      </p>

      <Reorder.Group axis="y" values={items} onReorder={checked ? () => {} : setItems} className="space-y-2">
        {items.map((item, idx) => {
          const ok = checked && item.order === idx + 1;
          const wrong = checked && item.order !== idx + 1;
          return (
            <Reorder.Item
              key={item.id}
              value={item}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border-2 text-sm transition-all ${
                ok ? "border-emerald-400 bg-emerald-50" : wrong ? "border-red-400 bg-red-50" : "border-zinc-200 bg-white hover:border-amber-300 cursor-grab active:cursor-grabbing active:shadow-lg active:scale-[1.02]"
              }`}
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                ok ? "bg-emerald-500 text-white" : wrong ? "bg-red-400 text-white" : "bg-zinc-100 text-zinc-400"
              }`}>
                {checked ? (ok ? "✓" : item.order) : idx + 1}
              </span>
              <span className="text-zinc-700 flex-1">{item.label}</span>
              {!checked && (
                <svg width="16" height="16" viewBox="0 0 16 16" className="text-zinc-300">
                  <path d="M4 5h8M4 8h8M4 11h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </Reorder.Item>
          );
        })}
      </Reorder.Group>

      <div className="mt-5">
        {!checked ? (
          <PrimaryButton onClick={() => setChecked(true)}>Überprüfen</PrimaryButton>
        ) : (
          <>
            <FeedbackBanner correct={isCorrect} message={isCorrect ? "Perfekt! Korrekte Reihenfolge nach EN 1500." : "Nicht ganz. Die richtigen Positionen sind in den Kreisen markiert."} />
            {!isCorrect && (
              <button onClick={() => { setItems([...desinfektionSteps].sort(() => Math.random() - 0.5)); setChecked(false); }} className="mt-3 text-sm text-amber-600 hover:text-amber-700 font-semibold">
                Nochmal mischen →
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ================================================================
   4) SLIDER — Dosisberechnung
   ================================================================ */
const sliderQuestions = [
  { question: "Verordnung: Metoprolol 100 mg.\nVorrätig: Tabletten à 50 mg.", unit: "Tabletten", min: 0.5, max: 4, step: 0.5, correct: 2, explanation: "100 mg ÷ 50 mg = 2 Tabletten" },
  { question: "Infusion: 1000 ml NaCl 0,9% über 8 Stunden.\nTropfgeschwindigkeit bei 20 Tropfen/ml?", unit: "Tr/min", min: 10, max: 60, step: 1, correct: 42, explanation: "1000 × 20 ÷ (8 × 60) = 41,7 ≈ 42 Tr/min" },
];

function SliderQuestion() {
  const [qIdx, setQIdx] = useState(0);
  const [value, setValue] = useState(sliderQuestions[0].min);
  const [submitted, setSubmitted] = useState(false);
  const q = sliderQuestions[qIdx];
  const isCorrect = Math.abs(value - q.correct) < q.step;

  return (
    <div>
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-5 mb-6 border border-cyan-100">
        <p className="text-sm text-zinc-800 whitespace-pre-line leading-relaxed">{q.question}</p>
      </div>

      <div className="px-2 mb-2">
        <input
          type="range" min={q.min} max={q.max} step={q.step} value={value}
          onChange={(e) => !submitted && setValue(parseFloat(e.target.value))}
          className="w-full h-3 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-cyan-600"
        />
      </div>

      <div className="flex justify-between items-end mb-6 px-1">
        <span className="text-xs text-zinc-400">{q.min}</span>
        <motion.div
          key={value}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <span className="text-3xl font-bold text-zinc-900">{value}</span>
          <span className="text-sm text-zinc-400 ml-1">{q.unit}</span>
        </motion.div>
        <span className="text-xs text-zinc-400">{q.max}</span>
      </div>

      {!submitted ? (
        <PrimaryButton onClick={() => setSubmitted(true)}>Überprüfen</PrimaryButton>
      ) : (
        <>
          <FeedbackBanner correct={isCorrect} message={isCorrect ? `Korrekt! ${q.explanation}` : `Richtig wäre ${q.correct} ${q.unit}. ${q.explanation}`} />
          <button onClick={() => { setQIdx((qIdx + 1) % sliderQuestions.length); setValue(sliderQuestions[(qIdx + 1) % sliderQuestions.length].min); setSubmitted(false); }} className="mt-3 text-sm text-cyan-600 hover:text-cyan-700 font-semibold">
            Nächste Aufgabe →
          </button>
        </>
      )}
    </div>
  );
}

/* ================================================================
   5) VIRTUAL PATIENT DIALOG
   ================================================================ */
interface DialogOption { text: string; patientResponse: string; score: number; feedback: string }
interface DialogPhase { context: string; vitals: string; options: DialogOption[] }

const patientDialog: DialogPhase[] = [
  {
    context: "Herr Weber (74 J.) sitzt im Bett, schaut verwirrt. Gestern Hüft-TEP-OP.",
    vitals: "RR 135/80 · Puls 78 · Temp 37.2°C",
    options: [
      { text: "Guten Morgen, Herr Weber. Ich bin Ihre Pflegekraft. Wie fühlen Sie sich?", patientResponse: "Morgen... wo bin ich? Ich hab Schmerzen in der Hüfte...", score: 3, feedback: "Sehr gut! Freundliche Begrüßung + offene Frage." },
      { text: "Herr Weber, ich muss Ihre Vitalzeichen messen.", patientResponse: "Ja... machen Sie. *schaut weg*", score: 1, feedback: "Zu direkt. Erst Beziehung aufbauen." },
      { text: "Können Sie mir sagen, wo Sie sind und welcher Tag heute ist?", patientResponse: "Äh... im Krankenhaus? Ist heute... Montag?", score: 2, feedback: "Orientierungsprüfung gut, aber erst nach Befinden fragen." },
    ],
  },
  {
    context: "Herr Weber gibt Schmerzen in der rechten Hüfte an.",
    vitals: "Schmerz: ? → Erfassung nötig",
    options: [
      { text: "Auf einer Skala von 0-10: Wie stark sind die Schmerzen? 0 = kein Schmerz, 10 = schlimmste.", patientResponse: "So... eine 6? Es zieht und sticht bei Bewegung.", score: 3, feedback: "Korrekt! NRS mit klarer Erklärung angewendet." },
      { text: "Haben Sie Schmerzen?", patientResponse: "Ja, natürlich hab ich Schmerzen!", score: 1, feedback: "Zu unspezifisch. Standardisiertes Instrument verwenden." },
      { text: "Zeigen Sie mir genau, wo es weh tut.", patientResponse: "*zeigt auf rechte Hüfte* Hier. Ziehen und Stechen.", score: 2, feedback: "Gute Lokalisation, aber Quantifizierung fehlt." },
    ],
  },
  {
    context: "NRS 6/10. Verordnung: Ibuprofen 400 mg bei Bedarf (max 3×/Tag). Letzte Gabe: vor 7h.",
    vitals: "NRS 6/10 · Analgesie 7h her",
    options: [
      { text: "Ich gebe Ihnen jetzt das Schmerzmittel. In 30 Min schaue ich nochmal.", patientResponse: "Ja, bitte. Danke.", score: 3, feedback: "Perfekt! Bedarfsmedikation + Wirkungskontrolle angekündigt." },
      { text: "Erst vor 7h etwas bekommen. Versuchen Sie eine andere Position.", patientResponse: "*verzieht Gesicht* Aber es tut wirklich weh...", score: 1, feedback: "NRS 6 erfordert Medikation. Schmerzäußerungen ernst nehmen!" },
    ],
  },
];

function VirtualPatientDialog() {
  const [phase, setPhase] = useState(0);
  const [messages, setMessages] = useState<{ sender: "patient" | "pflege"; text: string }[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [typing, setTyping] = useState(false);
  const [showFeedback, setShowFeedback] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const current = patientDialog[phase];
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing]);

  const choose = (opt: DialogOption) => {
    setMessages((m) => [...m, { sender: "pflege", text: opt.text }]);
    setTyping(true);
    setTotalScore((s) => s + opt.score);
    setMaxScore((s) => s + 3);

    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { sender: "patient", text: opt.patientResponse }]);
      setShowFeedback(opt.feedback);

      setTimeout(() => {
        setShowFeedback(null);
        if (phase + 1 < patientDialog.length) setPhase((p) => p + 1);
        else setFinished(true);
      }, 2500);
    }, 1200);
  };

  const scorePercent = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  return (
    <div>
      {/* Vitals monitor */}
      {current && !finished && (
        <div className="bg-zinc-900 rounded-xl px-4 py-2.5 mb-4 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400 font-mono">{current.vitals}</span>
        </div>
      )}

      {/* Chat */}
      <div ref={chatRef} className="space-y-3 mb-4 max-h-72 overflow-y-auto rounded-2xl bg-zinc-50 p-4">
        {messages.length === 0 && !finished && (
          <p className="text-xs text-zinc-400 text-center py-4">Wählen Sie eine Antwort, um den Dialog zu starten.</p>
        )}
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex ${m.sender === "pflege" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
              m.sender === "pflege"
                ? "bg-emerald-600 text-white rounded-br-md"
                : "bg-white text-zinc-800 rounded-bl-md shadow-sm border border-zinc-100"
            }`}>
              {m.sender === "patient" && <span className="text-xs text-zinc-400 block mb-1">Herr Weber</span>}
              {m.text}
            </div>
          </motion.div>
        ))}
        {typing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-zinc-100">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-300 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-zinc-300 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-zinc-300 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Context */}
      {!finished && !typing && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4">
          <p className="text-xs text-amber-800">{current.context}</p>
        </div>
      )}

      {/* Feedback */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4">
            <p className="text-xs text-blue-700">{showFeedback}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Choices */}
      {!finished && !showFeedback && !typing && (
        <div className="space-y-2">
          {current.options.map((opt, i) => (
            <motion.button key={i} whileHover={{ scale: 1.01, x: 4 }} whileTap={{ scale: 0.98 }} onClick={() => choose(opt)}
              className="w-full text-left px-4 py-3.5 border-2 border-zinc-200 rounded-2xl text-sm text-zinc-700 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors"
            >
              {opt.text}
            </motion.button>
          ))}
        </div>
      )}

      {/* End */}
      {finished && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
          <div className="relative inline-flex items-center justify-center w-20 h-20 mb-3">
            <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
              <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="3" />
              <motion.circle cx="18" cy="18" r="16" fill="none" stroke={scorePercent >= 70 ? "#10b981" : "#f59e0b"} strokeWidth="3" strokeLinecap="round" strokeDasharray={`${scorePercent} 100`} initial={{ strokeDasharray: "0 100" }} animate={{ strokeDasharray: `${scorePercent} 100` }} transition={{ duration: 1, ease: "easeOut" }} />
            </svg>
            <span className="absolute text-xl font-bold text-zinc-900">{scorePercent}%</span>
          </div>
          <p className="text-sm text-zinc-500 mb-4">
            {scorePercent >= 80 ? "Hervorragende Kommunikation!" : scorePercent >= 50 ? "Gute Ansätze, Potential nach oben." : "Hier gibt es Übungsbedarf."}
          </p>
          <PrimaryButton onClick={() => { setPhase(0); setMessages([]); setTotalScore(0); setMaxScore(0); setFinished(false); }}>
            Nochmal spielen
          </PrimaryButton>
        </motion.div>
      )}
    </div>
  );
}

/* ================================================================
   6) LÜCKENTEXT
   ================================================================ */
const clozeTemplate = "Bei der Aufnahme wird zunächst die {Anamnese} erhoben. Dabei werden {Vorerkrankungen}, aktuelle {Medikation} und {Allergien} erfasst. Die {Vitalzeichen} werden gemessen und im {Dokumentationssystem} eingetragen.";
const clozeWords = ["Anamnese", "Vorerkrankungen", "Medikation", "Allergien", "Vitalzeichen", "Dokumentationssystem"];
const clozeDistractors = ["Diagnose", "Therapieplan", "Entlassung"];

function ClozeQuestion() {
  const allWords = useRef([...clozeWords, ...clozeDistractors].sort(() => Math.random() - 0.5));
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [bank, setBank] = useState(allWords.current);
  const [checked, setChecked] = useState(false);
  const [selectedGap, setSelectedGap] = useState<string | null>(null);

  const gaps = clozeTemplate.match(/\{(\w+)\}/g)?.map((g) => g.slice(1, -1)) || [];
  const parts = clozeTemplate.split(/\{(\w+)\}/);

  const placeWord = (gap: string, word: string) => {
    if (checked) return;
    const prev = placed[gap];
    setPlaced((p) => ({ ...p, [gap]: word }));
    setBank((b) => { let next = b.filter((w) => w !== word); if (prev) next = [...next, prev]; return next; });
    setSelectedGap(null);
  };

  const removeWord = (gap: string) => {
    if (checked) return;
    const word = placed[gap];
    if (word) {
      setPlaced((p) => { const next = { ...p }; delete next[gap]; return next; });
      setBank((b) => [...b, word]);
    }
  };

  const correctCount = gaps.filter((g) => placed[g] === g).length;
  const allPlaced = gaps.every((g) => placed[g]);

  return (
    <div>
      <p className="text-sm text-zinc-600 mb-4">Tippe auf eine <strong>Lücke</strong>, dann auf das passende <strong>Wort</strong>.</p>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 mb-5 text-sm leading-[2.2] text-zinc-800 border border-blue-100">
        {parts.map((part, i) => {
          const isGap = gaps.includes(part);
          if (!isGap) return <span key={i}>{part}</span>;
          const word = placed[part];
          const isCorrect = checked && word === part;
          const isWrong = checked && word && word !== part;
          const isSelected = selectedGap === part;

          return (
            <motion.button
              key={i}
              whileTap={{ scale: 0.95 }}
              onClick={() => word ? removeWord(part) : setSelectedGap(part)}
              className={`inline-flex items-center min-w-[90px] mx-1 px-3 py-0.5 rounded-lg border-2 text-sm font-medium transition-all ${
                isCorrect ? "border-emerald-400 bg-emerald-100 text-emerald-700"
                : isWrong ? "border-red-400 bg-red-100 text-red-700"
                : isSelected ? "border-blue-500 bg-blue-100 text-blue-700 ring-2 ring-blue-300 animate-pulse"
                : word ? "border-blue-300 bg-blue-50 text-blue-700"
                : "border-dashed border-zinc-300 bg-white/80 text-zinc-400"
              }`}
            >
              {word || "___"}
            </motion.button>
          );
        })}
      </div>

      {/* Word bank */}
      <div className="flex flex-wrap gap-2 mb-5">
        {bank.map((word) => (
          <motion.button
            key={word}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const gap = selectedGap || gaps.find((g) => !placed[g]);
              if (gap) placeWord(gap, word);
            }}
            className={`px-4 py-2 border-2 rounded-xl text-sm font-medium transition-all ${
              selectedGap
                ? "border-blue-300 text-blue-700 bg-blue-50 hover:bg-blue-100 cursor-pointer"
                : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
            }`}
          >
            {word}
          </motion.button>
        ))}
      </div>

      {!checked ? (
        <PrimaryButton onClick={() => setChecked(true)} disabled={!allPlaced}>Überprüfen</PrimaryButton>
      ) : (
        <>
          <FeedbackBanner correct={correctCount === gaps.length} message={correctCount === gaps.length ? "Alle Lücken korrekt!" : `${correctCount}/${gaps.length} richtig.`} />
          {correctCount < gaps.length && (
            <button onClick={() => { setPlaced({}); setBank(allWords.current); setChecked(false); setSelectedGap(null); }} className="mt-3 text-sm text-indigo-600 hover:text-indigo-700 font-semibold">
              Nochmal →
            </button>
          )}
        </>
      )}
    </div>
  );
}

/* ================================================================
   7) TRIAGE
   ================================================================ */
const triagePatients = [
  { id: "a", name: "Patient A", desc: "78 J., bewusstlos, Atemstillstand, kein Puls", correct: 1, category: "Sofort", color: "bg-red-500" },
  { id: "e", name: "Patient E", desc: "55 J., Zungenschwellung, Stridor, RR 85/50", correct: 1, category: "Sofort", color: "bg-red-500" },
  { id: "c", name: "Patient C", desc: "62 J., akuter Brustschmerz, Ausstrahlung li. Arm, SpO₂ 93%", correct: 2, category: "Dringend", color: "bg-orange-500" },
  { id: "d", name: "Patient D", desc: "30 J., V.a. Unterschenkelfraktur, peripher durchblutet", correct: 3, category: "Normal", color: "bg-yellow-500" },
  { id: "b", name: "Patient B", desc: "45 J., Schnittwunde Unterarm, leichte Blutung, stabil", correct: 4, category: "Gering", color: "bg-green-500" },
];

function TriageRanking() {
  const shuffled = useRef([...triagePatients].sort(() => Math.random() - 0.5));
  const [items, setItems] = useState(shuffled.current);
  const [checked, setChecked] = useState(false);
  const sorted = [...triagePatients].sort((a, b) => a.correct - b.correct);
  const isCorrect = items.every((item, idx) => item.id === sorted[idx].id);

  const categoryColors: Record<string, string> = { Sofort: "text-red-600 bg-red-50 border-red-200", Dringend: "text-orange-600 bg-orange-50 border-orange-200", Normal: "text-yellow-700 bg-yellow-50 border-yellow-200", Gering: "text-green-600 bg-green-50 border-green-200" };

  return (
    <div>
      <p className="text-sm text-zinc-600 mb-4">Sortiere die Patienten nach <strong>ESI-Triage-Dringlichkeit</strong>. Dringendster zuerst.</p>

      <Reorder.Group axis="y" values={items} onReorder={checked ? () => {} : setItems} className="space-y-2">
        {items.map((item, idx) => {
          const correctIdx = sorted.findIndex((p) => p.id === item.id);
          const ok = checked && correctIdx === idx;
          const wrong = checked && correctIdx !== idx;

          return (
            <Reorder.Item key={item.id} value={item}
              className={`px-4 py-3.5 rounded-2xl border-2 text-sm transition-all ${
                ok ? "border-emerald-400 bg-emerald-50" : wrong ? "border-red-400 bg-red-50" : "border-zinc-200 bg-white hover:border-red-200 cursor-grab active:cursor-grabbing active:shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  ok ? "bg-emerald-500 text-white" : wrong ? "bg-red-400 text-white" : "bg-zinc-100 text-zinc-400"
                }`}>{idx + 1}</span>
                <div className="flex-1">
                  <span className="font-semibold text-zinc-900">{item.name}</span>
                  <p className="text-xs text-zinc-500 mt-0.5">{item.desc}</p>
                </div>
                {checked && (
                  <span className={`text-xs px-2 py-1 rounded-full border font-medium ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                )}
              </div>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>

      <div className="mt-5">
        {!checked ? (
          <PrimaryButton onClick={() => setChecked(true)}>Überprüfen</PrimaryButton>
        ) : (
          <>
            <FeedbackBanner correct={isCorrect} message={isCorrect ? "Perfekte Triage!" : "Rot (sofort) → Orange (dringend) → Gelb (normal) → Grün (gering). Atemweg vor Kreislauf."} />
            {!isCorrect && (
              <button onClick={() => { setItems([...triagePatients].sort(() => Math.random() - 0.5)); setChecked(false); }} className="mt-3 text-sm text-red-600 hover:text-red-700 font-semibold">
                Nochmal →
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ================================================================
   8) MATCHING
   ================================================================ */
const matchingPairs = [
  { left: "Bradykardie", right: "< 60/min", id: "brady" },
  { left: "Tachykardie", right: "> 100/min", id: "tachy" },
  { left: "Hypotonie", right: "< 100/60 mmHg", id: "hypo" },
  { left: "Hypertonie", right: "> 140/90 mmHg", id: "hyper" },
  { left: "Tachypnoe", right: "> 20 AF/min", id: "tachypnoe" },
  { left: "Hypothermie", right: "< 36,0 °C", id: "hypotherm" },
];

function MatchingQuestion() {
  const shuffledRight = useRef([...matchingPairs].sort(() => Math.random() - 0.5));
  const [selected, setSelected] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const handleLeft = (id: string) => { if (checked || matches[id]) return; setSelected(id); };
  const handleRight = (right: string) => {
    if (checked || !selected || Object.values(matches).includes(right)) return;
    setMatches((m) => ({ ...m, [selected]: right }));
    setSelected(null);
  };

  const correctCount = matchingPairs.filter((p) => matches[p.id] === p.right).length;
  const allMatched = Object.keys(matches).length === matchingPairs.length;

  return (
    <div>
      <p className="text-sm text-zinc-600 mb-4">
        Klicke links einen <strong>Begriff</strong>, dann rechts den <strong>Grenzwert</strong>.
        {selected && <span className="ml-2 text-teal-600 font-medium animate-pulse">→ Wähle rechts den Wert</span>}
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {matchingPairs.map((p) => {
            const matched = !!matches[p.id]; const sel = selected === p.id;
            const ok = checked && matches[p.id] === p.right; const wrong = checked && matches[p.id] && matches[p.id] !== p.right;
            return (
              <motion.button key={p.id} whileTap={{ scale: 0.97 }} onClick={() => handleLeft(p.id)}
                className={`w-full text-left px-4 py-3 rounded-2xl border-2 text-sm font-medium transition-all ${
                  ok ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                  : wrong ? "border-red-400 bg-red-50 text-red-700"
                  : sel ? "border-teal-500 bg-teal-50 text-teal-700 ring-2 ring-teal-200"
                  : matched ? "border-teal-200 bg-teal-50/50 text-teal-600"
                  : "border-zinc-200 text-zinc-700 hover:border-teal-300"
                }`}
              >{p.left}</motion.button>
            );
          })}
        </div>
        <div className="space-y-2">
          {shuffledRight.current.map((p) => {
            const usedBy = Object.entries(matches).find(([, v]) => v === p.right)?.[0];
            const ok = checked && usedBy && matchingPairs.find((mp) => mp.id === usedBy)?.right === p.right;
            const used = !!usedBy;
            return (
              <motion.button key={p.right} whileTap={{ scale: 0.97 }} onClick={() => handleRight(p.right)}
                className={`w-full text-left px-4 py-3 rounded-2xl border-2 text-sm font-mono transition-all ${
                  ok ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                  : used && checked ? "border-red-400 bg-red-50 text-red-600"
                  : used ? "border-teal-200 bg-teal-50/50 text-teal-600"
                  : selected ? "border-zinc-200 text-zinc-700 hover:border-teal-300 hover:bg-teal-50/30 cursor-pointer"
                  : "border-zinc-200 text-zinc-500"
                }`}
              >{p.right}</motion.button>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        {!checked ? (
          <PrimaryButton onClick={() => setChecked(true)} disabled={!allMatched}>Überprüfen</PrimaryButton>
        ) : (
          <>
            <FeedbackBanner correct={correctCount === matchingPairs.length} message={correctCount === matchingPairs.length ? "Alle Grenzwerte korrekt!" : `${correctCount}/${matchingPairs.length} richtig.`} />
            {correctCount < matchingPairs.length && (
              <button onClick={() => { setMatches({}); setSelected(null); setChecked(false); }} className="mt-3 text-sm text-teal-600 hover:text-teal-700 font-semibold">Nochmal →</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ================================================================
   9) CONFIDENCE RATING
   ================================================================ */
const confidenceStatements = [
  { text: "Insulin ist bei diabetischer Ketoazidose (DKA) kontraindiziert.", correct: false, explanation: "Falsch! Insulin IST die Primärtherapie bei DKA." },
  { text: "Die Lyse-Therapie bei Schlaganfall muss innerhalb von 4,5 Stunden beginnen.", correct: true, explanation: "Richtig! Zeitfenster für systemische Thrombolyse: 4,5h." },
  { text: "Bei Herzinsuffizienz mindestens 3 Liter pro Tag trinken.", correct: false, explanation: "Falsch! Trinkmenge auf 1,5-2 L/Tag begrenzen." },
  { text: "Subkutane Injektion: 90° bei Adipositas, 45° bei schlanken Patienten.", correct: true, explanation: "Richtig! Winkel an subkutanes Fettgewebe anpassen." },
  { text: "Heparin und Marcumar haben den gleichen Wirkmechanismus.", correct: false, explanation: "Falsch! Heparin → Antithrombin III (sofort). Marcumar → Vitamin-K-Antagonist (verzögert)." },
];

const confidenceLevels = [
  { label: "Unsicher", emoji: "😟", value: 0 },
  { label: "Eher unsicher", emoji: "🤔", value: 1 },
  { label: "Eher sicher", emoji: "😊", value: 2 },
  { label: "Sehr sicher", emoji: "💪", value: 3 },
];

function ConfidenceRating() {
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<{ correct: boolean; confident: boolean }[]>([]);

  const stmt = confidenceStatements[idx];
  const isCorrect = answer === stmt.correct;
  const finished = submitted && idx === confidenceStatements.length - 1;
  const totalCorrect = results.filter((r) => r.correct).length;
  const overconfident = results.filter((r) => !r.correct && r.confident).length;

  const submit = () => { setSubmitted(true); setResults((r) => [...r, { correct: isCorrect, confident: (confidence ?? 0) >= 2 }]); };
  const next = () => { setIdx((i) => i + 1); setAnswer(null); setConfidence(null); setSubmitted(false); };

  return (
    <div>
      {/* Progress */}
      <div className="flex gap-1.5 mb-5">
        {confidenceStatements.map((_, i) => (
          <div key={i} className={`h-2 flex-1 rounded-full transition-colors ${
            i < results.length ? (results[i].correct ? "bg-emerald-500" : "bg-red-400") : i === idx ? "bg-purple-400" : "bg-zinc-200"
          }`} />
        ))}
      </div>

      {!finished ? (
        <>
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-5 mb-5 border border-purple-100">
            <p className="text-xs text-purple-500 font-medium mb-2">Aussage {idx + 1}/{confidenceStatements.length}</p>
            <p className="text-sm text-zinc-800 leading-relaxed font-medium">{stmt.text}</p>
          </div>

          {/* True/False */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[{ label: "Richtig", val: true, color: "emerald" }, { label: "Falsch", val: false, color: "red" }].map((opt) => (
              <motion.button
                key={String(opt.val)}
                whileTap={{ scale: 0.95 }}
                onClick={() => !submitted && setAnswer(opt.val)}
                className={`py-3.5 rounded-2xl border-2 text-sm font-semibold transition-all ${
                  submitted && opt.val === stmt.correct ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                  : submitted && answer === opt.val && !isCorrect ? "border-red-400 bg-red-50 text-red-700"
                  : answer === opt.val ? "border-purple-400 bg-purple-50 text-purple-700"
                  : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
                }`}
              >{opt.label}</motion.button>
            ))}
          </div>

          {/* Confidence */}
          <AnimatePresence>
            {answer !== null && !submitted && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                <p className="text-xs text-zinc-400 mb-2">Wie sicher bist du dir?</p>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {confidenceLevels.map((c) => (
                    <motion.button key={c.value} whileTap={{ scale: 0.95 }} onClick={() => setConfidence(c.value)}
                      className={`py-3 rounded-xl border-2 text-center transition-all ${
                        confidence === c.value ? "border-purple-400 bg-purple-50" : "border-zinc-200 hover:border-zinc-300"
                      }`}
                    >
                      <span className="text-xl block mb-1">{c.emoji}</span>
                      <span className="text-[10px] text-zinc-500">{c.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {answer !== null && confidence !== null && !submitted && (
            <PrimaryButton onClick={submit}>Überprüfen</PrimaryButton>
          )}

          {submitted && (
            <div>
              <FeedbackBanner correct={isCorrect} message={stmt.explanation} />
              <p className="mt-2 text-xs text-zinc-500 italic">
                {isCorrect && (confidence ?? 0) >= 2 && "Korrekt + sicher = solides Wissen! ✨"}
                {isCorrect && (confidence ?? 0) < 2 && "Korrekt, aber unsicher — du weißt mehr als du denkst!"}
                {!isCorrect && (confidence ?? 0) >= 2 && "⚠️ Falsch trotz hoher Sicherheit — gefährliches Halbwissen!"}
                {!isCorrect && (confidence ?? 0) < 2 && "Lernbedarf, aber gute Selbsteinschätzung."}
              </p>
              {idx < confidenceStatements.length - 1 && (
                <button onClick={next} className="mt-3 text-sm text-purple-600 hover:text-purple-700 font-semibold">Weiter →</button>
              )}
            </div>
          )}
        </>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
          <div className="text-4xl font-bold text-zinc-900 mb-1">{totalCorrect}/{confidenceStatements.length}</div>
          <p className="text-sm text-zinc-500 mb-2">Korrekte Antworten</p>
          {overconfident > 0 && <p className="text-xs text-red-500 mb-4">⚠️ {overconfident}× überschätzt</p>}
          <PrimaryButton onClick={() => { setIdx(0); setAnswer(null); setConfidence(null); setSubmitted(false); setResults([]); }}>Nochmal</PrimaryButton>
        </motion.div>
      )}
    </div>
  );
}

/* ================================================================
   10) MEHRSTUFIGE BERECHNUNG
   ================================================================ */
const calcSteps = [
  { instruction: "Patient wiegt 176 lbs.\nRechne in Kilogramm um (1 kg = 2,2 lbs).", hint: "176 ÷ 2,2", correctValue: 80, tolerance: 1, unit: "kg", explanation: "176 ÷ 2,2 = 80 kg" },
  { instruction: "Verordnung: Heparin 18 IE/kg/h.\nBerechne die stündliche Dosis.", hint: "80 × 18", correctValue: 1440, tolerance: 10, unit: "IE/h", explanation: "80 kg × 18 IE/kg/h = 1.440 IE/h" },
  { instruction: "Perfusor: 25.000 IE in 50 ml NaCl.\nBerechne die Laufrate.", hint: "1.440 ÷ (25.000/50)", correctValue: 2.88, tolerance: 0.15, unit: "ml/h", explanation: "25.000/50 = 500 IE/ml → 1.440/500 = 2,88 ml/h" },
];

function MultiStepCalc() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const current = calcSteps[step];
  const finished = step >= calcSteps.length;
  const numValue = parseFloat(input.replace(",", "."));
  const isCorrect = !isNaN(numValue) && Math.abs(numValue - current?.correctValue) <= (current?.tolerance ?? 0);

  return (
    <div>
      {/* Progress */}
      <div className="flex gap-2 mb-5">
        {calcSteps.map((s, i) => (
          <div key={i} className="flex-1">
            <div className={`h-2 rounded-full mb-1 ${i < results.length ? (results[i] ? "bg-emerald-500" : "bg-red-400") : i === step ? "bg-orange-400" : "bg-zinc-200"}`} />
            <p className="text-[10px] text-zinc-400 text-center">{s.unit}</p>
          </div>
        ))}
      </div>

      {!finished ? (
        <>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-5 mb-5 border border-orange-100">
            <p className="text-xs text-orange-500 font-medium mb-2">Schritt {step + 1}/3</p>
            <p className="text-sm text-zinc-800 whitespace-pre-line leading-relaxed">{current.instruction}</p>
            <p className="text-xs text-zinc-400 mt-2 font-mono">{current.hint}</p>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <input type="text" inputMode="decimal" value={input} onChange={(e) => !submitted && setInput(e.target.value)} placeholder="Dein Ergebnis"
              className="flex-1 px-4 py-3 border-2 border-zinc-200 rounded-2xl text-sm font-mono focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-lg"
            />
            <span className="text-sm text-zinc-400 font-mono font-medium">{current.unit}</span>
          </div>

          {!submitted ? (
            <PrimaryButton onClick={() => { setSubmitted(true); setResults((r) => [...r, isCorrect]); }} disabled={!input}>Prüfen</PrimaryButton>
          ) : (
            <>
              <FeedbackBanner correct={isCorrect} message={isCorrect ? `Korrekt! ${current.explanation}` : `${current.correctValue} ${current.unit}. ${current.explanation}`} />
              <button onClick={() => { setStep((s) => s + 1); setInput(""); setSubmitted(false); }} className="mt-3 text-sm text-orange-600 hover:text-orange-700 font-semibold">
                {step < calcSteps.length - 1 ? "Nächster Schritt →" : "Ergebnis →"}
              </button>
            </>
          )}
        </>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6">
          <div className="text-4xl font-bold mb-2">{results.filter(Boolean).length}/{calcSteps.length}</div>
          <p className="text-sm text-zinc-500 mb-4">
            {results.every(Boolean) ? "Perfekt! Perfusor: 2,88 ml/h." : "Korrekt wäre 2,88 ml/h."}
          </p>
          <PrimaryButton onClick={() => { setStep(0); setInput(""); setSubmitted(false); setResults([]); }}>Nochmal</PrimaryButton>
        </motion.div>
      )}
    </div>
  );
}

/* ================================================================
   11) KREUZWORTRÄTSEL
   ================================================================ */
const crosswordData = {
  grid: [
    // 10x10 grid: null = black, "" = empty cell to fill
    // Laid out for 5 words intersecting
    [null, null, null, "D", null, null, null, null, null, null],
    [null, null, null, "E", null, null, null, null, null, null],
    [null, null, null, "K", null, null, "P", "F", "L", "E"],  // row2: PFLEGE (horizontal)
    [null, null, null, "U", null, null, null, null, null, null],
    ["A", "N", "A", "B", "O", "L", "I", "K", "A", null],       // row4: ANABOLIKA? No... let me use real words
    [null, null, null, "I", null, null, null, null, null, null],
    [null, null, null, "T", null, null, null, null, null, null],
    [null, null, null, "U", null, null, null, null, null, null],
    [null, null, null, "S", null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ],
  words: [
    { word: "DEKUBITUS", clue: "Druckgeschwür durch Immobilität (9 Buchstaben)", dir: "down", startRow: 0, startCol: 3 },
    { word: "PFLEGE", clue: "Berufliche Betreuung von Patienten (6 Buchstaben)", dir: "across", startRow: 2, startCol: 6 },
  ],
};

// Simpler crossword approach — flat word list
const cwWords = [
  { word: "DEKUBITUS", clue: "Druckgeschwür durch Immobilität", dir: "↓" as const, row: 0, col: 0, direction: "down" as const },
  { word: "ANAMNESE", clue: "Erhebung der Krankengeschichte", dir: "→" as const, row: 0, col: 0, direction: "across" as const },
  { word: "VITALZEICHEN", clue: "RR, Puls, Temperatur, SpO₂", dir: "→" as const, row: 2, col: 0, direction: "across" as const },
  { word: "PNEUMONIE", clue: "Lungenentzündung (Fachbegriff)", dir: "→" as const, row: 4, col: 0, direction: "across" as const },
  { word: "EMBOLIE", clue: "Gefäßverschluss durch verschleppten Thrombus", dir: "→" as const, row: 6, col: 0, direction: "across" as const },
];

function CrosswordQuestion() {
  const [answers, setAnswers] = useState<Record<number, string>>(
    Object.fromEntries(cwWords.map((_, i) => [i, ""]))
  );
  const [checked, setChecked] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const correctCount = cwWords.filter((w, i) => answers[i]?.toUpperCase().trim() === w.word).length;

  return (
    <div>
      <p className="text-sm text-zinc-600 mb-5">Trage die <strong>Fachbegriffe</strong> ein. Alle Wörter kommen aus der Pflegeausbildung.</p>

      <div className="space-y-4">
        {cwWords.map((w, i) => {
          const userAnswer = answers[i]?.toUpperCase().trim() || "";
          const isCorrect = checked && userAnswer === w.word;
          const isWrong = checked && userAnswer !== w.word;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl border-2 p-4 transition-all ${
                isCorrect ? "border-emerald-400 bg-emerald-50" : isWrong ? "border-red-400 bg-red-50" : "border-zinc-200"
              }`}
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                <p className="text-sm text-zinc-700">{w.clue}</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  value={answers[i]}
                  onChange={(e) => !checked && setAnswers((a) => ({ ...a, [i]: e.target.value }))}
                  onKeyDown={(e) => { if (e.key === "Enter" && inputRefs.current[i + 1]) inputRefs.current[i + 1]?.focus(); }}
                  placeholder={`${w.word.length} Buchstaben`}
                  maxLength={w.word.length + 2}
                  className="flex-1 px-3 py-2.5 border-2 border-zinc-200 rounded-xl text-sm font-mono uppercase tracking-widest focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
                <span className="text-xs text-zinc-400 font-mono">{w.word.length}</span>
                {isCorrect && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-emerald-500 text-lg">✅</motion.span>}
                {isWrong && (
                  <span className="text-xs text-red-500 font-medium">{w.word}</span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5">
        {!checked ? (
          <PrimaryButton onClick={() => setChecked(true)}>Überprüfen</PrimaryButton>
        ) : (
          <>
            <FeedbackBanner correct={correctCount === cwWords.length} message={correctCount === cwWords.length ? "Alle Fachbegriffe korrekt!" : `${correctCount}/${cwWords.length} richtig. Die Lösungen sind angezeigt.`} />
            <button onClick={() => { setAnswers(Object.fromEntries(cwWords.map((_, i) => [i, ""]))); setChecked(false); }} className="mt-3 text-sm text-sky-600 hover:text-sky-700 font-semibold">Nochmal →</button>
          </>
        )}
      </div>
    </div>
  );
}

/* ================================================================
   12) MEMORY — Medikament ↔ Wirkstoffgruppe
   ================================================================ */
const memoryPairs = [
  { a: "Ibuprofen", b: "NSAR / Analgetikum" },
  { a: "Metoprolol", b: "Betablocker" },
  { a: "Ramipril", b: "ACE-Hemmer" },
  { a: "Heparin", b: "Antikoagulanz" },
  { a: "Insulin", b: "Antidiabetikum" },
  { a: "Amoxicillin", b: "Antibiotikum" },
];

function MemoryGame() {
  const [cards, setCards] = useState<{ id: number; text: string; pairId: number; found: boolean }[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [found, setFound] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const allCards = memoryPairs.flatMap((p, i) => [
      { id: i * 2, text: p.a, pairId: i, found: false },
      { id: i * 2 + 1, text: p.b, pairId: i, found: false },
    ]).sort(() => Math.random() - 0.5);
    setCards(allCards);
  }, []);

  const handleFlip = (id: number) => {
    if (locked || flipped.includes(id) || found.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setLocked(true);
      const [first, second] = newFlipped;
      const card1 = cards.find((c) => c.id === first)!;
      const card2 = cards.find((c) => c.id === second)!;

      if (card1.pairId === card2.pairId) {
        setTimeout(() => {
          setFound((f) => [...f, first, second]);
          setFlipped([]);
          setLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLocked(false);
        }, 1000);
      }
    }
  };

  const allFound = found.length === cards.length && cards.length > 0;
  const restart = () => {
    setCards(memoryPairs.flatMap((p, i) => [
      { id: i * 2, text: p.a, pairId: i, found: false },
      { id: i * 2 + 1, text: p.b, pairId: i, found: false },
    ]).sort(() => Math.random() - 0.5));
    setFlipped([]); setFound([]); setMoves(0); setLocked(false);
  };

  const pairColors = ["bg-rose-100 text-rose-700", "bg-sky-100 text-sky-700", "bg-amber-100 text-amber-700", "bg-emerald-100 text-emerald-700", "bg-violet-100 text-violet-700", "bg-orange-100 text-orange-700"];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-zinc-600">Finde die <strong>6 Medikament-Wirkstoff-Paare</strong>.</p>
        <span className="text-xs text-zinc-400">{moves} Züge · {found.length / 2}/{memoryPairs.length} Paare</span>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {cards.map((card) => {
          const isFlipped = flipped.includes(card.id);
          const isFound = found.includes(card.id);
          const pairColor = pairColors[card.pairId % pairColors.length];

          return (
            <motion.button
              key={card.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleFlip(card.id)}
              className={`aspect-[3/2] rounded-2xl border-2 text-xs font-medium flex items-center justify-center p-2 text-center transition-all ${
                isFound
                  ? `${pairColor} border-transparent`
                  : isFlipped
                  ? "border-pink-400 bg-pink-50 text-pink-700"
                  : "border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100 text-zinc-400 hover:border-zinc-300 hover:shadow-md cursor-pointer"
              }`}
            >
              <AnimatePresence mode="wait">
                {(isFlipped || isFound) ? (
                  <motion.span key="front" initial={{ rotateY: 90 }} animate={{ rotateY: 0 }} exit={{ rotateY: 90 }} className="leading-tight">
                    {card.text}
                  </motion.span>
                ) : (
                  <motion.span key="back" initial={{ rotateY: 90 }} animate={{ rotateY: 0 }} exit={{ rotateY: 90 }} className="text-2xl">
                    ?
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      {allFound && (
        <>
          <FeedbackBanner correct message={`Alle Paare in ${moves} Zügen gefunden! ${moves <= 10 ? "Hervorragend!" : moves <= 15 ? "Gut gemacht!" : "Übung macht den Meister!"}`} />
          <button onClick={restart} className="mt-3 text-sm text-pink-600 hover:text-pink-700 font-semibold">Nochmal →</button>
        </>
      )}
    </div>
  );
}

/* ================================================================
   13) GRUPPENZUORDNUNG — Symptome → Krankheitsbild
   ================================================================ */
const categories = [
  { name: "Herzinsuffizienz", color: "bg-red-100 border-red-300 text-red-700" },
  { name: "Pneumonie", color: "bg-blue-100 border-blue-300 text-blue-700" },
  { name: "Diabetes mellitus", color: "bg-amber-100 border-amber-300 text-amber-700" },
];

const categoryItems = [
  { text: "Beinödeme", correct: 0 },
  { text: "Dyspnoe bei Belastung", correct: 0 },
  { text: "Gestaute Halsvenen", correct: 0 },
  { text: "Produktiver Husten", correct: 1 },
  { text: "Fieber + Schüttelfrost", correct: 1 },
  { text: "Rasselgeräusche", correct: 1 },
  { text: "Polyurie", correct: 2 },
  { text: "Polydipsie", correct: 2 },
  { text: "Wundheilungsstörungen", correct: 2 },
];

function CategorizeQuestion() {
  const shuffled = useRef([...categoryItems].sort(() => Math.random() - 0.5));
  const [remaining, setRemaining] = useState(shuffled.current);
  const [sorted, setSorted] = useState<Record<number, string[]>>({ 0: [], 1: [], 2: [] });
  const [checked, setChecked] = useState(false);

  const handleDrop = (catIdx: number) => {
    if (checked || remaining.length === 0) return;
    const item = remaining[0];
    setRemaining((r) => r.slice(1));
    setSorted((s) => ({ ...s, [catIdx]: [...s[catIdx], item.text] }));
  };

  const correctCount = categoryItems.filter((item) => {
    return sorted[item.correct]?.includes(item.text);
  }).length;

  const restart = () => {
    setRemaining([...categoryItems].sort(() => Math.random() - 0.5));
    setSorted({ 0: [], 1: [], 2: [] });
    setChecked(false);
  };

  return (
    <div>
      <p className="text-sm text-zinc-600 mb-4">Ordne jedes <strong>Symptom</strong> dem richtigen Krankheitsbild zu.</p>

      {/* Current item */}
      {remaining.length > 0 && !checked && (
        <motion.div
          key={remaining[0].text}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="bg-zinc-900 text-white rounded-2xl px-5 py-4 mb-4 text-center"
        >
          <p className="text-xs text-zinc-400 mb-1">Symptom ({remaining.length} übrig)</p>
          <p className="text-sm font-semibold">{remaining[0].text}</p>
        </motion.div>
      )}

      {/* Category buckets */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {categories.map((cat, catIdx) => (
          <motion.button
            key={catIdx}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleDrop(catIdx)}
            disabled={remaining.length === 0 || checked}
            className={`rounded-2xl border-2 p-3 min-h-[120px] flex flex-col transition-all ${
              remaining.length > 0 && !checked ? "hover:shadow-md cursor-pointer" : ""
            } ${cat.color}`}
          >
            <span className="text-xs font-bold mb-2">{cat.name}</span>
            <div className="flex flex-col gap-1">
              {sorted[catIdx].map((text, i) => {
                const item = categoryItems.find((ci) => ci.text === text)!;
                const ok = checked && item.correct === catIdx;
                const wrong = checked && item.correct !== catIdx;
                return (
                  <span key={i} className={`text-[10px] px-2 py-1 rounded-lg ${
                    ok ? "bg-emerald-200 text-emerald-800" : wrong ? "bg-red-200 text-red-800 line-through" : "bg-white/60"
                  }`}>{text}</span>
                );
              })}
            </div>
          </motion.button>
        ))}
      </div>

      {remaining.length === 0 && !checked && (
        <PrimaryButton onClick={() => setChecked(true)}>Überprüfen</PrimaryButton>
      )}

      {checked && (
        <>
          <FeedbackBanner correct={correctCount === categoryItems.length} message={correctCount === categoryItems.length ? "Perfekt! Alle Symptome korrekt zugeordnet." : `${correctCount}/${categoryItems.length} richtig.`} />
          <button onClick={restart} className="mt-3 text-sm text-lime-600 hover:text-lime-700 font-semibold">Nochmal →</button>
        </>
      )}
    </div>
  );
}

/* ================================================================
   14) MARKIEREN IM TEXT — Fehler in Pflegedokumentation
   ================================================================ */
const docText = [
  { text: "Pflegebericht 14.03.2026, Nachtdienst:", error: false },
  { text: " Patient ", error: false },
  { text: "Hr. Schmidt", error: false },
  { text: " (Zi. 204) war die ganze Nacht ", error: false },
  { text: "unruhig", error: false },
  { text: ". ", error: false },
  { text: "Um 02:30 Uhr hat er geklingelt weil er Durst hatte", error: false },
  { text: ". ", error: false },
  { text: "Blutdruck war normal", error: true, reason: "Ungenaue Angabe — exakte Werte dokumentieren (z.B. RR 125/80 mmHg)" },
  { text: ". ", error: false },
  { text: "Patient hat gut geschlafen", error: true, reason: "Subjektive Bewertung — stattdessen beobachtbares Verhalten beschreiben" },
  { text: ". Temperatur ", error: false },
  { text: "etwas erhöht", error: true, reason: "Ungenaue Angabe — exakten Wert dokumentieren (z.B. 37,8°C)" },
  { text: ". ", error: false },
  { text: "Medikamente wie immer gegeben", error: true, reason: "Unvollständig — Name, Dosis, Uhrzeit und Applikationsform angeben" },
  { text: ". ", error: false },
  { text: "Verband am rechten Bein", error: false },
  { text: " sah okay aus", error: true, reason: "Keine Fachsprache — Wundzustand beschreiben: Rötung, Sekretion, Geruch, Größe" },
  { text: ".", error: false },
];

function HighlightQuestion() {
  const [marked, setMarked] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState(false);

  const errors = docText.filter((s) => s.error);
  const correctlyMarked = docText.filter((s, i) => s.error && marked.has(i)).length;
  const wronglyMarked = docText.filter((s, i) => !s.error && marked.has(i)).length;

  const toggle = (idx: number) => {
    if (checked) return;
    setMarked((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div>
      <p className="text-sm text-zinc-600 mb-4">
        Markiere alle <strong>fehlerhaften Formulierungen</strong> in diesem Pflegebericht.
        <span className="text-xs text-zinc-400 ml-2">({marked.size} markiert, {errors.length} Fehler vorhanden)</span>
      </p>

      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-5 mb-5 border border-yellow-200">
        <p className="text-sm leading-relaxed text-zinc-800">
          {docText.map((segment, i) => {
            const isMarked = marked.has(i);
            const isError = segment.error;
            const isCorrectMark = checked && isMarked && isError;
            const isWrongMark = checked && isMarked && !isError;
            const isMissed = checked && !isMarked && isError;

            if (!isError && !isMarked) return <span key={i}>{segment.text}</span>;

            return (
              <motion.span
                key={i}
                whileTap={{ scale: 0.97 }}
                onClick={() => toggle(i)}
                className={`cursor-pointer px-1 py-0.5 rounded transition-all inline ${
                  isCorrectMark ? "bg-emerald-200 text-emerald-800 font-medium"
                  : isWrongMark ? "bg-red-200 text-red-700 line-through"
                  : isMissed ? "bg-amber-300 text-amber-900 underline decoration-wavy decoration-amber-600"
                  : isMarked ? "bg-yellow-300 text-yellow-900"
                  : isError ? "hover:bg-yellow-100 cursor-pointer"
                  : "hover:bg-yellow-100 cursor-pointer"
                }`}
              >
                {segment.text}
              </motion.span>
            );
          })}
        </p>
      </div>

      {/* Legend for after check */}
      {checked && (
        <div className="flex flex-wrap gap-3 mb-4 text-xs">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-200" /> Richtig markiert</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-200" /> Falsch markiert</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-300" /> Übersehen</span>
        </div>
      )}

      {!checked ? (
        <PrimaryButton onClick={() => setChecked(true)}>Überprüfen</PrimaryButton>
      ) : (
        <>
          <FeedbackBanner
            correct={correctlyMarked === errors.length && wronglyMarked === 0}
            message={correctlyMarked === errors.length && wronglyMarked === 0
              ? "Perfekt! Alle Dokumentationsfehler erkannt."
              : `${correctlyMarked}/${errors.length} Fehler gefunden${wronglyMarked > 0 ? `, ${wronglyMarked} falsch markiert` : ""}.`
            }
          />
          {/* Show explanations */}
          {checked && (
            <div className="mt-4 space-y-2">
              {docText.filter((s) => s.error).map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <span className="text-amber-500 mt-0.5">→</span>
                  <div>
                    <span className="font-medium text-zinc-700">&quot;{s.text.trim()}&quot;</span>
                    <span className="text-zinc-500 ml-1">— {s.reason}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button onClick={() => { setMarked(new Set()); setChecked(false); }} className="mt-3 text-sm text-amber-600 hover:text-amber-700 font-semibold">Nochmal →</button>
        </>
      )}
    </div>
  );
}

/* ================================================================
   15) MILLIONENSPIEL
   ================================================================ */
const millionaireQuestions = [
  {
    question: "Wie heißt die Skala zur Einschätzung des Dekubitus-Risikos?",
    answers: ["Braden-Skala", "Glasgow-Skala", "Barthel-Index", "Norton-Skala"],
    correct: [0, 3], // Both Braden and Norton are correct, accept both
    correctIdx: 0,
    prize: "100 €",
  },
  {
    question: "Welcher Puls gilt bei Erwachsenen als Tachykardie?",
    answers: ["> 80/min", "> 100/min", "> 120/min", "> 60/min"],
    correctIdx: 1,
    prize: "500 €",
  },
  {
    question: "Was bedeutet die Abkürzung 'SBAR' in der klinischen Kommunikation?",
    answers: [
      "Situation, Background, Assessment, Recommendation",
      "Symptom, Behandlung, Auswertung, Rapport",
      "Standard, Befund, Analyse, Richtlinie",
      "Screening, Bewertung, Aktion, Reflexion",
    ],
    correctIdx: 0,
    prize: "2.000 €",
  },
  {
    question: "Bei welchem SpO₂-Wert sollte eine O₂-Gabe eingeleitet werden?",
    answers: ["< 98%", "< 95%", "< 92%", "< 88%"],
    correctIdx: 2,
    prize: "16.000 €",
  },
  {
    question: "Welche Lagerung ist bei Lungenödem indiziert?",
    answers: [
      "Flachlagerung",
      "Oberkörperhochlagerung mit herabhängenden Beinen",
      "Trendelenburg-Lagerung",
      "Seitenlagerung 30°",
    ],
    correctIdx: 1,
    prize: "1.000.000 €",
  },
];

const prizeColors = ["text-zinc-500", "text-zinc-600", "text-amber-600", "text-amber-500", "text-yellow-500"];

function MillionaireGame() {
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const q = millionaireQuestions[qIdx];
  const isCorrect = selected === q.correctIdx;
  const answerLetters = ["A", "B", "C", "D"];
  const answerColors = ["from-blue-500 to-blue-600", "from-orange-500 to-orange-600", "from-green-500 to-green-600", "from-rose-500 to-rose-600"];

  const confirm = () => {
    setConfirmed(true);
    if (!isCorrect) {
      setTimeout(() => setGameOver(true), 1500);
    } else if (qIdx === millionaireQuestions.length - 1) {
      setTimeout(() => { setGameOver(true); setWon(true); }, 1500);
    }
  };

  const next = () => {
    setQIdx((i) => i + 1);
    setSelected(null);
    setConfirmed(false);
  };

  const restart = () => {
    setQIdx(0); setSelected(null); setConfirmed(false); setGameOver(false); setWon(false);
  };

  return (
    <div>
      {/* Prize ladder */}
      <div className="flex items-center justify-between mb-5 px-1">
        {millionaireQuestions.map((mq, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
              i < qIdx ? "bg-emerald-500 text-white border-emerald-500"
              : i === qIdx ? "bg-indigo-600 text-white border-indigo-600 ring-4 ring-indigo-200"
              : "bg-zinc-100 text-zinc-400 border-zinc-200"
            }`}>
              {i < qIdx ? "✓" : i + 1}
            </div>
            <span className={`text-[9px] mt-1 font-bold ${i === qIdx ? "text-indigo-600" : "text-zinc-400"}`}>{mq.prize}</span>
          </div>
        ))}
      </div>

      {!gameOver ? (
        <>
          {/* Question */}
          <motion.div key={qIdx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-2xl p-5 mb-5 text-white text-center"
          >
            <p className="text-xs text-indigo-300 mb-2">Frage {qIdx + 1} — {q.prize}</p>
            <p className="text-sm font-medium leading-relaxed">{q.question}</p>
          </motion.div>

          {/* Answers */}
          <div className="grid grid-cols-2 gap-2.5 mb-4">
            {q.answers.map((ans, i) => {
              const isThis = selected === i;
              const isRight = confirmed && i === q.correctIdx;
              const isWrong = confirmed && isThis && !isCorrect;

              return (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => !confirmed && setSelected(i)}
                  className={`px-3 py-3.5 rounded-2xl border-2 text-left text-sm transition-all ${
                    isRight ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                    : isWrong ? "border-red-400 bg-red-50 text-red-700 animate-pulse"
                    : isThis ? "border-indigo-400 bg-indigo-50 text-indigo-700"
                    : "border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  <span className={`inline-flex w-6 h-6 rounded-full items-center justify-center text-xs font-bold text-white bg-gradient-to-br ${answerColors[i]} mr-2`}>
                    {answerLetters[i]}
                  </span>
                  <span className="text-zinc-700">{ans}</span>
                </motion.button>
              );
            })}
          </div>

          {!confirmed ? (
            <PrimaryButton onClick={confirm} disabled={selected === null}>Letzte Antwort</PrimaryButton>
          ) : isCorrect && qIdx < millionaireQuestions.length - 1 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <FeedbackBanner correct message={`Richtig! Weiter zu ${millionaireQuestions[qIdx + 1].prize}.`} />
              <button onClick={next} className="mt-3 text-sm text-indigo-600 hover:text-indigo-700 font-semibold">Weiter →</button>
            </motion.div>
          ) : null}
        </>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
          {won ? (
            <>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5 }}>
                <span className="text-6xl">🏆</span>
              </motion.div>
              <p className="text-2xl font-bold text-zinc-900 mt-4 mb-2">1.000.000 €!</p>
              <p className="text-sm text-zinc-500 mb-4">Alle Fragen korrekt beantwortet!</p>
            </>
          ) : (
            <>
              <span className="text-5xl">😓</span>
              <p className="text-lg font-bold text-zinc-900 mt-4 mb-2">Leider falsch!</p>
              <p className="text-sm text-zinc-500 mb-4">
                Richtig wäre: <strong>{q.answers[q.correctIdx]}</strong>
              </p>
            </>
          )}
          <PrimaryButton onClick={restart}>Nochmal spielen</PrimaryButton>
        </motion.div>
      )}
    </div>
  );
}

/* ================================================================
   MAIN PAGE
   ================================================================ */
export default function InteraktivPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "de";
  const [activeId, setActiveId] = useState("hotspot");

  const active = questionTypes.find((q) => q.id === activeId)!;

  const components: Record<string, React.ReactNode> = {
    hotspot: <HotspotQuestion />,
    branching: <BranchingScenario />,
    sequencing: <ImageSequencing />,
    slider: <SliderQuestion />,
    dialog: <VirtualPatientDialog />,
    cloze: <ClozeQuestion />,
    triage: <TriageRanking />,
    matching: <MatchingQuestion />,
    confidence: <ConfidenceRating />,
    calc: <MultiStepCalc />,
    crossword: <CrosswordQuestion />,
    memory: <MemoryGame />,
    categorize: <CategorizeQuestion />,
    highlight: <HighlightQuestion />,
    millionaire: <MillionaireGame />,
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href={`/${locale}/demo`} className="text-zinc-400 hover:text-zinc-600 transition-colors text-sm">
            ← Zurück
          </Link>
          <span className="text-sm font-semibold text-zinc-900">Interaktive Fragetypen</span>
          <div className="w-14" />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Type selector — horizontal scroll */}
        <div className="mb-6 -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 pb-2" style={{ minWidth: "max-content" }}>
            {questionTypes.map((qt) => (
              <motion.button
                key={qt.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveId(qt.id)}
                className={`flex flex-col items-center px-4 py-3 rounded-2xl border-2 transition-all min-w-[80px] ${
                  activeId === qt.id
                    ? "border-zinc-900 bg-zinc-900 text-white shadow-lg"
                    : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
                }`}
              >
                <span className="text-xl mb-1">{qt.icon}</span>
                <span className="text-[11px] font-semibold">{qt.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active section header */}
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className={`bg-gradient-to-r ${active.color} rounded-2xl p-5 mb-6 text-white`}>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl">{active.icon}</span>
              <h2 className="text-lg font-bold">{active.label}</h2>
            </div>
            <p className="text-sm text-white/80">{active.short}</p>
          </div>

          {/* Component */}
          <div className="mb-20">
            {components[activeId]}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
