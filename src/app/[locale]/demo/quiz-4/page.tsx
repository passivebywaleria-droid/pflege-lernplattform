"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type ChallengeStatus = "idle" | "partial" | "correct" | "incorrect";

// ─── Constants ────────────────────────────────────────────────────────────────

const HAND_STEPS = [
  { id: "s1", text: "Handflächen aneinander reiben" },
  { id: "s2", text: "Fingerzwischenräume" },
  { id: "s3", text: "Daumen einzeln" },
  { id: "s4", text: "Fingerspitzen" },
  { id: "s5", text: "Handgelenke" },
  { id: "s6", text: "Einwirkzeit abwarten" },
];

const CORRECT_STEP_ORDER = ["s1", "s2", "s3", "s4", "s5", "s6"];

const VITALS_LEFT = [
  { id: "v1", label: "Blutdruck" },
  { id: "v2", label: "Puls" },
  { id: "v3", label: "Temperatur" },
  { id: "v4", label: "Atemfrequenz" },
];

const VITALS_RIGHT = [
  { id: "r1", label: "120/80 mmHg", matchId: "v1" },
  { id: "r2", label: "60–100/min", matchId: "v2" },
  { id: "r3", label: "36.5–37.4°C", matchId: "v3" },
  { id: "r4", label: "12–20/min", matchId: "v4" },
];

const NURSING_PROCESS_WORDS = [
  "Informationssammlung",
  "Erkennen von Problemen",
  "Festlegen der Ziele",
  "Planung der Maßnahmen",
  "Durchführung",
  "Evaluation",
];

const HYGIENE_STATEMENTS = [
  {
    id: "h1",
    text: "Einmalhandschuhe ersetzen die Händedesinfektion",
    correct: false,
    explanation:
      "Falsch — Einmalhandschuhe ersetzen die Händedesinfektion nicht. Vor und nach dem Tragen von Handschuhen ist eine Händedesinfektion erforderlich.",
  },
  {
    id: "h2",
    text: "Händedesinfektion dauert mindestens 30 Sekunden",
    correct: true,
    explanation:
      "Richtig — Die hygienische Händedesinfektion erfordert eine Einwirkzeit von mindestens 30 Sekunden (WHO-Empfehlung: 20–30 Sek.).",
  },
  {
    id: "h3",
    text: "Sterilisation tötet alle Mikroorganismen einschließlich Sporen",
    correct: true,
    explanation:
      "Richtig — Im Gegensatz zur Desinfektion, die eine Keimreduktion bewirkt, tötet die Sterilisation alle Mikroorganismen inklusive Sporen ab.",
  },
  {
    id: "h4",
    text: "Ein einfacher Mundschutz schützt vor allen Infektionen",
    correct: false,
    explanation:
      "Falsch — Ein chirurgischer Mundschutz schützt die Umgebung vor Tröpfchen, schützt den Träger aber nicht vollständig. Für Aerosole ist eine FFP2/FFP3-Maske notwendig.",
  },
  {
    id: "h5",
    text: "Arbeitskleidung muss täglich gewechselt werden",
    correct: true,
    explanation:
      "Richtig — Berufskleidung in der Pflege muss täglich gewechselt und bei mindestens 60 °C gewaschen werden (Hygienerichtlinien).",
  },
];

const POSITION_OPTIONS = [
  "Oberkörperhochlagerung 30°",
  "Seitenlagerung 30°",
  "Flache Rückenlage",
  "Bauchlage",
];

const PROGRESSIVE_STEPS = [
  {
    id: "p1",
    info: "Blutzucker (BZ) = 280 mg/dl",
    infoDetail: "Normwert: 70–100 mg/dl (nüchtern)",
    question: "Ist dieser Blutzuckerwert normal?",
    options: ["Ja, im Normbereich", "Nein, zu niedrig", "Nein, zu hoch"],
    correctIndex: 2,
    explanation:
      "Dieser Wert ist deutlich erhöht. Ab 126 mg/dl (nüchtern) spricht man von Diabetes mellitus. 280 mg/dl ist eine starke Hyperglykämie.",
  },
  {
    id: "p2",
    info: "Symptome: Durst, Müdigkeit, häufiges Wasserlassen, Acetongeruch",
    infoDetail: "Zusätzlich: trockene Haut, Sehstörungen",
    question: "Was vermuten Sie?",
    options: ["Hypoglykämie", "Hyperglykämie", "Hypertonie"],
    correctIndex: 1,
    explanation:
      "Die Kombination aus erhöhtem BZ und den klassischen Symptomen (Polydipsie, Polyurie, Müdigkeit, Acetongeruch) weist auf eine Hyperglykämie hin.",
  },
  {
    id: "p3",
    info: "Patient ist ansprechbar, aber sichtlich unwohl. BZ seit 2 Stunden unbehandelt.",
    infoDetail: "Keine Insulingabe bisher",
    question: "Welche Erstmaßnahme ist erforderlich?",
    options: [
      "Sofort Insulin injizieren",
      "Arzt informieren + BZ-Kontrolle",
      "Abwarten und beobachten",
    ],
    correctIndex: 1,
    explanation:
      "Korrekt! Als Pflegefachkraft informieren Sie sofort den Arzt und führen eine erneute BZ-Kontrolle durch. Die Insulintherapie ordnet der Arzt an — eigenständige Injektionen ohne ärztliche Anweisung sind unzulässig.",
  },
];

// ─── Utility ─────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Progress Dots ────────────────────────────────────────────────────────────

function ProgressDots({
  total,
  current,
  statuses,
}: {
  total: number;
  current: number;
  statuses: ChallengeStatus[];
}) {
  return (
    <div className="flex items-center gap-2 justify-center mb-8">
      {Array.from({ length: total }).map((_, i) => {
        const status = statuses[i];
        const isActive = i === current;
        return (
          <motion.div
            key={i}
            animate={{
              scale: isActive ? 1.3 : 1,
              backgroundColor:
                status === "correct"
                  ? "#2D8A4E"
                  : status === "incorrect"
                    ? "#FF6B35"
                    : isActive
                      ? "#3B7DD8"
                      : "#D4C9B8",
            }}
            transition={{ duration: 0.3 }}
            className="w-3 h-3 rounded-full"
          />
        );
      })}
    </div>
  );
}

// ─── Challenge 1 — Step Ordering ─────────────────────────────────────────────

function Challenge1({
  onComplete,
}: {
  onComplete: (correct: boolean) => void;
}) {
  const [items, setItems] = useState(() => shuffle(HAND_STEPS));
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<ChallengeStatus>("idle");
  const [checked, setChecked] = useState(false);

  const handleClick = (id: string) => {
    if (checked) return;
    if (!selected) {
      setSelected(id);
    } else if (selected === id) {
      setSelected(null);
    } else {
      // Swap
      const idxA = items.findIndex((it) => it.id === selected);
      const idxB = items.findIndex((it) => it.id === id);
      const next = [...items];
      [next[idxA], next[idxB]] = [next[idxB], next[idxA]];
      setItems(next);
      setSelected(null);
    }
  };

  const handleCheck = () => {
    const isCorrect = items.every(
      (it, idx) => it.id === CORRECT_STEP_ORDER[idx]
    );
    setStatus(isCorrect ? "correct" : "incorrect");
    setChecked(true);
    if (isCorrect) setTimeout(() => onComplete(true), 1800);
  };

  const handleRetry = () => {
    setItems(shuffle(HAND_STEPS));
    setSelected(null);
    setStatus("idle");
    setChecked(false);
  };

  return (
    <div>
      <div className="mb-6">
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Aufgabe 1 · Sortieren
        </span>
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          Bringen Sie die Schritte der Händedesinfektion in die richtige
          Reihenfolge
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Klicken Sie eine Karte an, dann eine andere — sie tauschen ihre
          Plätze.
        </p>
      </div>

      <div className="space-y-2 mb-6">
        {items.map((item, idx) => {
          const isSelected = selected === item.id;
          const correctPos = CORRECT_STEP_ORDER.indexOf(item.id);
          const isCorrectHere =
            checked && status === "correct" ? true : false;
          const isThisWrong =
            checked &&
            status === "incorrect" &&
            item.id !== CORRECT_STEP_ORDER[idx];

          return (
            <motion.div
              key={item.id}
              layout
              animate={
                isThisWrong
                  ? { x: [0, -6, 6, -4, 4, 0] }
                  : isCorrectHere
                    ? { scale: [1, 1.02, 1] }
                    : {}
              }
              transition={{ duration: 0.4 }}
              onClick={() => handleClick(item.id)}
              className={`
                flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all select-none
                ${isSelected ? "border-blue-400 bg-blue-50 shadow-md" : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"}
                ${checked && status === "correct" ? "border-green-400 bg-green-50" : ""}
                ${isThisWrong ? "border-orange-400 bg-orange-50" : ""}
              `}
            >
              <span
                className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0
                ${isSelected ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-500"}
                ${checked && status === "correct" ? "bg-green-500 text-white" : ""}
              `}
              >
                {idx + 1}
              </span>
              <span className="text-gray-700 font-medium">{item.text}</span>
              {checked && status === "correct" && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto text-green-500 text-lg"
                >
                  ✓
                </motion.span>
              )}
              {isThisWrong && (
                <span className="ml-auto text-orange-500 text-xs font-semibold">
                  Pos. {correctPos + 1}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {status === "correct" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4"
          >
            <p className="text-green-700 font-semibold text-sm">
              Perfekt! Das ist die korrekte Reihenfolge gemaß WHO-Standard.
              Jeder Schritt aktiviert andere Handbereiche — erst nach allen
              Schritten ist die Desinfektion vollstandig.
            </p>
          </motion.div>
        )}
        {status === "incorrect" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4"
          >
            <p className="text-orange-700 font-semibold text-sm">
              Noch nicht ganz richtig. Die falsch platzierten Schritte sind
              markiert.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3">
        {!checked ? (
          <button
            onClick={handleCheck}
            className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            Reihenfolge prüfen
          </button>
        ) : status === "incorrect" ? (
          <>
            <button
              onClick={handleRetry}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Nochmal versuchen
            </button>
            <button
              onClick={() => onComplete(false)}
              className="px-6 py-3 border-2 border-gray-300 text-gray-500 rounded-xl font-semibold hover:border-gray-400 transition-colors"
            >
              Überspringen
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

// ─── Challenge 2 — Visual Matching ───────────────────────────────────────────

function Challenge2({
  onComplete,
}: {
  onComplete: (correct: boolean) => void;
}) {
  const [rightItems] = useState(() => shuffle(VITALS_RIGHT));
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);

  const matchColors = ["#2D8A4E", "#3B7DD8", "#FF6B35", "#8B5CF6"];

  const handleLeftClick = (id: string) => {
    if (confirmed) return;
    setSelectedLeft(id === selectedLeft ? null : id);
  };

  const handleRightClick = (rightId: string) => {
    if (confirmed || !selectedLeft) return;
    const next = { ...matches };
    // Remove any existing match for this left item
    Object.keys(next).forEach((k) => {
      if (next[k] === rightId) delete next[k];
    });
    next[selectedLeft] = rightId;
    setMatches(next);
    setSelectedLeft(null);
  };

  const handleConfirm = () => {
    const correct = VITALS_LEFT.every((v) => {
      const matchedRight = rightItems.find((r) => r.id === matches[v.id]);
      return matchedRight?.matchId === v.id;
    });
    setAllCorrect(correct);
    setConfirmed(true);
    if (correct) setTimeout(() => onComplete(true), 1800);
  };

  const getMatchColorIndex = (leftId: string) => {
    const idx = VITALS_LEFT.findIndex((v) => v.id === leftId);
    return idx >= 0 ? idx : 0;
  };

  const isMatched = (leftId: string) => leftId in matches;
  const getMatchedRight = (leftId: string) =>
    rightItems.find((r) => r.id === matches[leftId]);
  const isRightUsed = (rightId: string) =>
    Object.values(matches).includes(rightId);
  const whichLeftUsesRight = (rightId: string) =>
    Object.keys(matches).find((k) => matches[k] === rightId);

  return (
    <div>
      <div className="mb-6">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Aufgabe 2 · Zuordnen
        </span>
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          Ordnen Sie die Vitalzeichen ihren Normalwerten zu
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Klicken Sie links einen Parameter, dann rechts den passenden Wert.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Left column */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Parameter
          </p>
          {VITALS_LEFT.map((v) => {
            const colorIdx = getMatchColorIndex(v.id);
            const color = matchColors[colorIdx];
            const matched = isMatched(v.id);
            const isActive = selectedLeft === v.id;
            return (
              <motion.div
                key={v.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleLeftClick(v.id)}
                className={`
                  p-4 rounded-xl border-2 cursor-pointer transition-all font-semibold text-sm
                  ${isActive ? "shadow-md" : "hover:shadow-sm"}
                `}
                style={{
                  borderColor: matched || isActive ? color : "#E5E7EB",
                  backgroundColor: matched || isActive ? `${color}15` : "white",
                  color: matched || isActive ? color : "#374151",
                }}
              >
                {v.label}
                {matched && (
                  <span className="ml-2 text-xs opacity-60">
                    → {getMatchedRight(v.id)?.label}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right column */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Normalwert
          </p>
          {rightItems.map((r) => {
            const usedByLeft = whichLeftUsesRight(r.id);
            const colorIdx = usedByLeft
              ? getMatchColorIndex(usedByLeft)
              : -1;
            const color = colorIdx >= 0 ? matchColors[colorIdx] : null;
            const isCorrectMatch =
              confirmed &&
              usedByLeft &&
              VITALS_RIGHT.find((rr) => rr.id === r.id)?.matchId === usedByLeft;
            const isWrongMatch =
              confirmed && usedByLeft && !isCorrectMatch;

            return (
              <motion.div
                key={r.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleRightClick(r.id)}
                animate={
                  isWrongMatch ? { x: [0, -5, 5, -3, 3, 0] } : {}
                }
                transition={{ duration: 0.4 }}
                className={`
                  p-4 rounded-xl border-2 cursor-pointer transition-all font-semibold text-sm
                  ${selectedLeft && !isRightUsed(r.id) ? "hover:border-gray-400 hover:shadow-sm" : ""}
                `}
                style={{
                  borderColor:
                    isCorrectMatch
                      ? "#2D8A4E"
                      : isWrongMatch
                        ? "#FF6B35"
                        : color || "#E5E7EB",
                  backgroundColor:
                    isCorrectMatch
                      ? "#2D8A4E15"
                      : isWrongMatch
                        ? "#FF6B3515"
                        : color
                          ? `${color}15`
                          : "white",
                  color:
                    isCorrectMatch
                      ? "#2D8A4E"
                      : isWrongMatch
                        ? "#FF6B35"
                        : color || "#374151",
                }}
              >
                {r.label}
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {confirmed && allCorrect && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4"
          >
            <p className="text-green-700 font-semibold text-sm mb-3">
              Alle Vitalzeichen korrekt zugeordnet!
            </p>
            <div className="grid grid-cols-2 gap-2">
              {VITALS_LEFT.map((v, i) => {
                const right = VITALS_RIGHT.find((r) => r.matchId === v.id);
                return (
                  <div
                    key={v.id}
                    className="flex items-center gap-2 bg-white rounded-lg p-2 border border-green-200"
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: matchColors[i] }}
                    />
                    <span className="text-xs text-gray-600 font-medium">
                      {v.label}
                    </span>
                    <span className="text-xs text-gray-400 ml-auto">
                      {right?.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
        {confirmed && !allCorrect && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4"
          >
            <p className="text-orange-700 font-semibold text-sm">
              Einige Zuordnungen sind falsch — die falschen Paare sind markiert.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3">
        {!confirmed ? (
          <button
            onClick={handleConfirm}
            disabled={Object.keys(matches).length < 4}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Zuordnungen bestätigen ({Object.keys(matches).length}/4)
          </button>
        ) : !allCorrect ? (
          <>
            <button
              onClick={() => {
                setMatches({});
                setConfirmed(false);
                setAllCorrect(false);
              }}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Nochmal versuchen
            </button>
            <button
              onClick={() => onComplete(false)}
              className="px-6 py-3 border-2 border-gray-300 text-gray-500 rounded-xl font-semibold hover:border-gray-400 transition-colors"
            >
              Überspringen
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

// ─── Challenge 3 — Fill in the Blank ─────────────────────────────────────────

function Challenge3({
  onComplete,
}: {
  onComplete: (correct: boolean) => void;
}) {
  const [blanks, setBlanks] = useState<(string | null)[]>(
    Array(6).fill(null)
  );
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);

  const usedWords = blanks.filter(Boolean) as string[];
  const availableWords = NURSING_PROCESS_WORDS.filter(
    (w) => !usedWords.includes(w)
  );

  const handleWordClick = (word: string) => {
    if (confirmed) return;
    setSelectedWord(word === selectedWord ? null : word);
  };

  const handleBlankClick = (idx: number) => {
    if (confirmed) return;
    if (selectedWord) {
      const next = [...blanks];
      // If blank already filled, return word to pool
      const old = next[idx];
      next[idx] = selectedWord;
      setSelectedWord(old);
      setBlanks(next);
    } else if (blanks[idx]) {
      // Remove from blank back to pool
      const next = [...blanks];
      next[idx] = null;
      setBlanks(next);
    }
  };

  const handleConfirm = () => {
    const correct = blanks.every((b, i) => b === NURSING_PROCESS_WORDS[i]);
    setAllCorrect(correct);
    setConfirmed(true);
    if (correct) setTimeout(() => onComplete(true), 1800);
  };

  const stepColors = [
    "#3B7DD8",
    "#8B5CF6",
    "#FF6B35",
    "#2D8A4E",
    "#F59E0B",
    "#EC4899",
  ];

  return (
    <div>
      <div className="mb-6">
        <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Aufgabe 3 · Lücken füllen
        </span>
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          Ergänzen Sie die 6 Schritte des Pflegeprozesses
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Wählen Sie ein Wort aus der Wortbox, dann klicken Sie auf das
          passende Feld.
        </p>
      </div>

      {/* Flow chart */}
      <div className="flex flex-col items-center gap-1 mb-6">
        {Array.from({ length: 6 }).map((_, idx) => {
          const filled = blanks[idx];
          const isCorrectHere =
            confirmed && filled === NURSING_PROCESS_WORDS[idx];
          const isWrongHere =
            confirmed && filled && filled !== NURSING_PROCESS_WORDS[idx];
          const color = stepColors[idx];

          return (
            <div key={idx} className="flex flex-col items-center">
              <motion.div
                whileTap={{ scale: 0.97 }}
                onClick={() => handleBlankClick(idx)}
                animate={
                  confirmed && allCorrect && filled
                    ? {
                        scale: [1, 1.04, 1],
                        transition: { delay: idx * 0.15, duration: 0.4 },
                      }
                    : {}
                }
                className={`
                  w-full max-w-sm px-5 py-3 rounded-xl border-2 cursor-pointer text-center font-semibold text-sm transition-all
                  ${!filled ? "border-dashed border-gray-300 text-gray-400 bg-white hover:border-gray-400" : ""}
                `}
                style={
                  filled
                    ? {
                        borderColor: isCorrectHere
                          ? "#2D8A4E"
                          : isWrongHere
                            ? "#FF6B35"
                            : color,
                        backgroundColor: isCorrectHere
                          ? "#2D8A4E15"
                          : isWrongHere
                            ? "#FF6B3515"
                            : `${color}15`,
                        color: isCorrectHere
                          ? "#2D8A4E"
                          : isWrongHere
                            ? "#FF6B35"
                            : color,
                      }
                    : {}
                }
              >
                {filled ? (
                  <span>
                    {idx + 1}. {filled}
                  </span>
                ) : (
                  <span className="opacity-50">
                    {idx + 1}. Schritt einfügen ...
                  </span>
                )}
              </motion.div>
              {idx < 5 && (
                <motion.div
                  animate={
                    confirmed && allCorrect
                      ? {
                          color: "#2D8A4E",
                          transition: { delay: idx * 0.15 + 0.2 },
                        }
                      : {}
                  }
                  className="text-gray-300 text-xl my-0.5"
                >
                  ↓
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Word bank */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Wortbox
        </p>
        <div className="flex flex-wrap gap-2">
          {NURSING_PROCESS_WORDS.map((word) => {
            const isUsed = usedWords.includes(word);
            const isSelected = selectedWord === word;
            return (
              <motion.button
                key={word}
                whileTap={{ scale: 0.95 }}
                disabled={isUsed || confirmed}
                onClick={() => handleWordClick(word)}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-all border-2
                  ${isUsed ? "opacity-30 cursor-not-allowed border-transparent bg-gray-200 text-gray-400" : ""}
                  ${isSelected ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md" : ""}
                  ${!isUsed && !isSelected ? "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:shadow-sm cursor-pointer" : ""}
                `}
              >
                {word}
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {confirmed && allCorrect && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4"
          >
            <p className="text-green-700 font-semibold text-sm">
              Sehr gut! Der Pflegeprozess ist ein systematisches, kreisförmiges
              Modell — nach der Evaluation beginnt der Prozess von vorn, solange
              Pflegebedarf besteht.
            </p>
          </motion.div>
        )}
        {confirmed && !allCorrect && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4"
          >
            <p className="text-orange-700 font-semibold text-sm">
              Nicht ganz richtig. Prüfen Sie die markierten Felder.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3">
        {!confirmed ? (
          <button
            onClick={handleConfirm}
            disabled={blanks.some((b) => !b)}
            className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Pflegeprozess prüfen ({blanks.filter(Boolean).length}/6)
          </button>
        ) : !allCorrect ? (
          <>
            <button
              onClick={() => {
                setBlanks(Array(6).fill(null));
                setSelectedWord(null);
                setConfirmed(false);
                setAllCorrect(false);
              }}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Nochmal versuchen
            </button>
            <button
              onClick={() => onComplete(false)}
              className="px-6 py-3 border-2 border-gray-300 text-gray-500 rounded-xl font-semibold hover:border-gray-400 transition-colors"
            >
              Überspringen
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

// ─── Challenge 4 — True/False ─────────────────────────────────────────────────

function Challenge4({
  onComplete,
}: {
  onComplete: (correct: boolean) => void;
}) {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>(
    Object.fromEntries(HYGIENE_STATEMENTS.map((s) => [s.id, null]))
  );
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (id: string, value: boolean) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setExpanded((prev) => new Set([...prev, id]));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const allAnswered = HYGIENE_STATEMENTS.every(
      (s) => answers[s.id] !== null
    );
    const correct =
      allAnswered &&
      HYGIENE_STATEMENTS.every((s) => answers[s.id] === s.correct);
    if (correct) setTimeout(() => onComplete(true), 1800);
    else setTimeout(() => onComplete(false), 1800);
  };

  const allAnswered = HYGIENE_STATEMENTS.every((s) => answers[s.id] !== null);
  const correctCount = HYGIENE_STATEMENTS.filter(
    (s) => answers[s.id] === s.correct
  ).length;

  return (
    <div>
      <div className="mb-6">
        <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Aufgabe 4 · Richtig / Falsch
        </span>
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          Bewerten Sie diese Aussagen zur Hygiene
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Entscheiden Sie für jede Aussage, ob sie richtig oder falsch ist.
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {HYGIENE_STATEMENTS.map((stmt, idx) => {
          const userAnswer = answers[stmt.id];
          const isOpen = expanded.has(stmt.id);
          const isCorrectAnswer =
            submitted && userAnswer === stmt.correct;
          const isWrongAnswer =
            submitted && userAnswer !== null && userAnswer !== stmt.correct;

          return (
            <div
              key={stmt.id}
              className={`rounded-xl border-2 overflow-hidden transition-all ${
                isCorrectAnswer
                  ? "border-green-300"
                  : isWrongAnswer
                    ? "border-orange-300"
                    : userAnswer !== null
                      ? "border-blue-200"
                      : "border-gray-200"
              }`}
            >
              <div className="p-4 bg-white">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-gray-700 font-medium flex-1 leading-relaxed">
                    {stmt.text}
                  </p>
                </div>

                <div className="flex gap-2 mt-3 ml-9">
                  <button
                    onClick={() => handleAnswer(stmt.id, true)}
                    disabled={submitted}
                    className={`
                      flex-1 py-2 rounded-lg text-sm font-semibold transition-all border-2
                      ${userAnswer === true ? "border-green-500 bg-green-50 text-green-700" : "border-gray-200 bg-white text-gray-600 hover:border-green-300 hover:bg-green-50"}
                    `}
                  >
                    Richtig
                  </button>
                  <button
                    onClick={() => handleAnswer(stmt.id, false)}
                    disabled={submitted}
                    className={`
                      flex-1 py-2 rounded-lg text-sm font-semibold transition-all border-2
                      ${userAnswer === false ? "border-orange-500 bg-orange-50 text-orange-700" : "border-gray-200 bg-white text-gray-600 hover:border-orange-300 hover:bg-orange-50"}
                    `}
                  >
                    Falsch
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      px-4 py-3 border-t text-sm leading-relaxed
                      ${isCorrectAnswer ? "bg-green-50 border-green-200 text-green-700" : ""}
                      ${isWrongAnswer ? "bg-orange-50 border-orange-200 text-orange-700" : ""}
                      ${!submitted ? "bg-blue-50 border-blue-100 text-blue-700" : ""}
                    `}
                  >
                    {submitted ? (
                      <span className="flex gap-2">
                        <span>{isCorrectAnswer ? "✓" : "✗"}</span>
                        <span>{stmt.explanation}</span>
                      </span>
                    ) : (
                      <span className="text-blue-600 font-medium">
                        Antwort gespeichert — Erklärung nach Abgabe sichtbar.
                      </span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-xl p-4 mb-4 border ${correctCount === 5 ? "bg-green-50 border-green-200" : "bg-orange-50 border-orange-200"}`}
          >
            <p
              className={`font-semibold text-sm ${correctCount === 5 ? "text-green-700" : "text-orange-700"}`}
            >
              {correctCount} von 5 Aussagen korrekt bewertet.
              {correctCount === 5 && " Ausgezeichnet!"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Auswertung anzeigen ({Object.values(answers).filter((v) => v !== null).length}/5)
        </button>
      )}
      {submitted && (
        <button
          onClick={() => onComplete(correctCount >= 4)}
          className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
        >
          Weiter zur nächsten Aufgabe →
        </button>
      )}
    </div>
  );
}

// ─── Challenge 5 — Visual Diagram ────────────────────────────────────────────

function PatientBed({ position }: { position: string | null }) {
  const is30Deg = position === "Oberkörperhochlagerung 30°";
  const isSide = position === "Seitenlagerung 30°";
  const isProne = position === "Bauchlage";
  // Default = flat

  return (
    <div className="relative w-full max-w-xs mx-auto select-none" style={{ height: 120 }}>
      {/* Bed frame */}
      <div className="absolute bottom-4 left-0 right-0 h-6 bg-amber-200 rounded-xl border-2 border-amber-300" />
      {/* Mattress */}
      <div className="absolute bottom-8 left-4 right-4 h-5 bg-amber-100 rounded-lg border border-amber-200" />

      {/* Body */}
      <motion.div
        animate={{
          rotate: is30Deg ? -15 : isSide ? -90 : isProne ? 0 : 0,
          y: is30Deg ? -10 : isSide ? -5 : 0,
          scaleX: isProne ? 0.9 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute"
        style={{
          bottom: 28,
          left: "50%",
          translateX: "-50%",
          width: 90,
          height: 20,
          backgroundColor: "#93C5FD",
          borderRadius: 10,
          border: "2px solid #60A5FA",
          transformOrigin: "right center",
        }}
      />

      {/* Head */}
      <motion.div
        animate={{
          y: is30Deg ? -26 : isSide ? -24 : -22,
          x: isSide ? -30 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute rounded-full border-2 border-blue-400 bg-blue-200"
        style={{
          bottom: 42,
          left: "50%",
          marginLeft: 30,
          width: 22,
          height: 22,
        }}
      />

      {/* Legs */}
      <motion.div
        animate={{
          rotate: isSide ? -80 : 0,
          x: isSide ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute rounded-lg bg-blue-100 border border-blue-300"
        style={{
          bottom: 28,
          left: "50%",
          marginLeft: -45,
          width: 40,
          height: 18,
          transformOrigin: "right center",
        }}
      />

      {/* Angle indicator for 30° */}
      {is30Deg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-1 right-2 bg-green-100 rounded-full px-2 py-0.5 text-xs text-green-700 font-bold border border-green-300"
        >
          30°
        </motion.div>
      )}
    </div>
  );
}

function Challenge5({
  onComplete,
}: {
  onComplete: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const correctAnswer = "Oberkörperhochlagerung 30°";

  const handleSelect = (opt: string) => {
    if (confirmed) return;
    setSelected(opt);
  };

  const handleConfirm = () => {
    if (!selected) return;
    setConfirmed(true);
    const correct = selected === correctAnswer;
    if (correct) setTimeout(() => onComplete(true), 1800);
  };

  const isCorrect = confirmed && selected === correctAnswer;
  const isWrong = confirmed && selected !== correctAnswer;

  return (
    <div>
      <div className="mb-6">
        <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Aufgabe 5 · Bild erkennen
        </span>
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          Welche Lagerungsposition ist abgebildet?
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Wählen Sie die korrekte Position für die dargestellte Lagerung.
        </p>
      </div>

      {/* Diagram */}
      <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 mb-6 shadow-sm">
        <PatientBed position={selected} />
        {!selected && (
          <p className="text-center text-xs text-gray-400 mt-2">
            Wählen Sie eine Option, um die Lagerung zu visualisieren
          </p>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {POSITION_OPTIONS.map((opt) => {
          const isSelected = selected === opt;
          const isCorrectOpt = confirmed && opt === correctAnswer;
          const isWrongOpt = confirmed && isSelected && opt !== correctAnswer;

          return (
            <motion.button
              key={opt}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect(opt)}
              animate={isWrongOpt ? { x: [0, -5, 5, -3, 3, 0] } : {}}
              className={`
                p-4 rounded-xl border-2 text-sm font-semibold text-left transition-all
                ${isCorrectOpt ? "border-green-400 bg-green-50 text-green-700" : ""}
                ${isWrongOpt ? "border-orange-400 bg-orange-50 text-orange-700" : ""}
                ${isSelected && !confirmed ? "border-blue-400 bg-blue-50 text-blue-700" : ""}
                ${!isSelected && !confirmed ? "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:shadow-sm" : ""}
                ${!isSelected && confirmed && !isCorrectOpt ? "border-gray-100 bg-gray-50 text-gray-400" : ""}
              `}
            >
              {opt}
              {isCorrectOpt && <span className="ml-1">✓</span>}
              {isWrongOpt && <span className="ml-1">✗</span>}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {isCorrect && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4"
          >
            <p className="text-green-700 font-semibold text-sm">
              Korrekt! Die Oberkörperhochlagerung 30° wird z. B. bei
              Ateminsuffizienz, Aspirationsrisiko und Herzinsuffizienz
              eingesetzt. Der Oberkörper wird um 30° angehoben — nicht mehr,
              da sonst Druckstellen am Steißbein entstehen können.
            </p>
          </motion.div>
        )}
        {isWrong && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4"
          >
            <p className="text-orange-700 font-semibold text-sm">
              Nicht ganz. Beachten Sie den angehobenen Oberkörper im Bild.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3">
        {!confirmed ? (
          <button
            onClick={handleConfirm}
            disabled={!selected}
            className="px-6 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Antwort bestätigen
          </button>
        ) : isWrong ? (
          <>
            <button
              onClick={() => {
                setSelected(null);
                setConfirmed(false);
              }}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Nochmal versuchen
            </button>
            <button
              onClick={() => onComplete(false)}
              className="px-6 py-3 border-2 border-gray-300 text-gray-500 rounded-xl font-semibold hover:border-gray-400 transition-colors"
            >
              Überspringen
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

// ─── Challenge 6 — Progressive Problem ───────────────────────────────────────

function Challenge6({
  onComplete,
}: {
  onComplete: (correct: boolean) => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepAnswers, setStepAnswers] = useState<(number | null)[]>([
    null,
    null,
    null,
  ]);
  const [stepConfirmed, setStepConfirmed] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const handleAnswer = (optIdx: number) => {
    if (stepConfirmed[currentStep]) return;
    const next = [...stepAnswers];
    next[currentStep] = optIdx;
    setStepAnswers(next);
  };

  const handleConfirm = () => {
    const step = PROGRESSIVE_STEPS[currentStep];
    const answer = stepAnswers[currentStep];
    if (answer === null) return;

    const confirmed = [...stepConfirmed];
    confirmed[currentStep] = true;
    setStepConfirmed(confirmed);

    const isCorrect = answer === step.correctIndex;
    if (isCorrect) {
      if (currentStep < PROGRESSIVE_STEPS.length - 1) {
        setTimeout(() => setCurrentStep((s) => s + 1), 1400);
      } else {
        setTimeout(() => onComplete(true), 1800);
      }
    }
  };

  const step = PROGRESSIVE_STEPS[currentStep];
  const userAnswer = stepAnswers[currentStep];
  const isConfirmed = stepConfirmed[currentStep];
  const isCorrectAnswer = isConfirmed && userAnswer === step.correctIndex;
  const isWrongAnswer =
    isConfirmed && userAnswer !== null && userAnswer !== step.correctIndex;

  return (
    <div>
      <div className="mb-6">
        <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Aufgabe 6 · Fallanalyse
        </span>
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          Analysieren Sie den Patienten Schritt für Schritt
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Jede richtige Antwort schaltet den nächsten Schritt frei.
        </p>
      </div>

      {/* Step progress indicator */}
      <div className="flex gap-2 mb-6">
        {PROGRESSIVE_STEPS.map((_, idx) => (
          <div
            key={idx}
            className={`flex-1 h-1.5 rounded-full transition-colors ${
              idx < currentStep
                ? "bg-green-400"
                : idx === currentStep
                  ? "bg-blue-400"
                  : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Steps so far */}
      <div className="space-y-3 mb-6">
        {PROGRESSIVE_STEPS.slice(0, currentStep + 1).map((s, idx) => {
          const isPast = idx < currentStep;
          const isCurrent = idx === currentStep;
          const ans = stepAnswers[idx];
          const confirmed = stepConfirmed[idx];

          return (
            <motion.div
              key={s.id}
              initial={isCurrent ? { opacity: 0, y: 16 } : {}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`rounded-xl border-2 overflow-hidden ${
                isPast
                  ? "border-green-200 bg-green-50"
                  : "border-blue-200 bg-white"
              }`}
            >
              {/* Info block */}
              <div
                className={`px-5 py-4 border-b ${isPast ? "border-green-200" : "border-blue-100"}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      isPast
                        ? "bg-green-500 text-white"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">
                      {s.info}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {s.infoDetail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Question + options */}
              <div className="px-5 py-4">
                <p className="font-semibold text-gray-700 text-sm mb-3">
                  {s.question}
                </p>
                <div className="space-y-2">
                  {s.options.map((opt, optIdx) => {
                    const isSelected = ans === optIdx;
                    const isCorrectOpt = s.correctIndex === optIdx;
                    const isWrong = confirmed && isSelected && !isCorrectOpt;
                    const showCorrect = confirmed && isCorrectOpt;

                    return (
                      <motion.button
                        key={optIdx}
                        whileTap={{ scale: 0.98 }}
                        disabled={confirmed || isPast}
                        onClick={() => {
                          if (isCurrent) handleAnswer(optIdx);
                        }}
                        animate={isWrong ? { x: [0, -4, 4, -2, 2, 0] } : {}}
                        className={`
                          w-full text-left px-4 py-2.5 rounded-lg border text-sm font-medium transition-all
                          ${showCorrect ? "border-green-400 bg-green-50 text-green-700" : ""}
                          ${isWrong ? "border-orange-400 bg-orange-50 text-orange-700" : ""}
                          ${isSelected && !confirmed ? "border-blue-400 bg-blue-50 text-blue-700" : ""}
                          ${!isSelected && !confirmed && isCurrent ? "border-gray-200 bg-white text-gray-700 hover:border-gray-300" : ""}
                          ${isPast && !showCorrect && !isWrong && !isSelected ? "border-transparent bg-transparent text-gray-400" : ""}
                        `}
                      >
                        {opt}
                        {showCorrect && <span className="ml-2">✓</span>}
                      </motion.button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {confirmed && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className={`mt-3 text-xs leading-relaxed rounded-lg p-3 ${
                        stepAnswers[idx] === s.correctIndex
                          ? "bg-green-50 text-green-700"
                          : "bg-orange-50 text-orange-700"
                      }`}
                    >
                      {s.explanation}
                    </motion.p>
                  )}
                </AnimatePresence>

                {isCurrent && !confirmed && (
                  <button
                    onClick={handleConfirm}
                    disabled={ans === null}
                    className="mt-3 px-5 py-2 bg-blue-600 text-white text-sm rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Antwort prüfen
                  </button>
                )}

                {isCurrent && isWrongAnswer && (
                  <button
                    onClick={() => {
                      const nextAnswers = [...stepAnswers];
                      nextAnswers[currentStep] = null;
                      setStepAnswers(nextAnswers);
                      const nextConfirmed = [...stepConfirmed];
                      nextConfirmed[currentStep] = false;
                      setStepConfirmed(nextConfirmed);
                    }}
                    className="mt-2 ml-2 px-5 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Nochmal versuchen
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Results Screen ───────────────────────────────────────────────────────────

function Results({
  statuses,
  onRestart,
}: {
  statuses: ChallengeStatus[];
  onRestart: () => void;
}) {
  const { locale } = useParams();
  const correct = statuses.filter((s) => s === "correct").length;
  const total = statuses.length;
  const percent = Math.round((correct / total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{ backgroundColor: percent >= 67 ? "#2D8A4E20" : "#FF6B3520" }}
      >
        <span className="text-4xl font-black" style={{ color: percent >= 67 ? "#2D8A4E" : "#FF6B35" }}>
          {correct}/{total}
        </span>
      </motion.div>

      <h2 className="text-3xl font-black text-gray-800 mb-2">
        {correct === total
          ? "Hervorragend!"
          : correct >= 4
            ? "Sehr gut gemacht!"
            : correct >= 3
              ? "Guter Anfang!"
              : "Weiter üben!"}
      </h2>
      <p className="text-gray-500 mb-8">
        {correct} von {total} Aufgaben gemeistert · {percent} %
      </p>

      {/* Per-challenge breakdown */}
      <div className="grid grid-cols-3 gap-3 mb-8 max-w-sm mx-auto">
        {statuses.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className={`rounded-xl p-3 border-2 ${
              s === "correct"
                ? "border-green-300 bg-green-50"
                : s === "incorrect"
                  ? "border-orange-300 bg-orange-50"
                  : "border-gray-200 bg-gray-50"
            }`}
          >
            <div className="text-lg mb-1">
              {s === "correct" ? "✓" : s === "incorrect" ? "✗" : "—"}
            </div>
            <div className="text-xs font-semibold text-gray-600">
              Aufgabe {idx + 1}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col gap-3 items-center">
        <button
          onClick={onRestart}
          className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
        >
          Nochmals versuchen
        </button>
        <Link
          href={`/${locale}/demo`}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm underline underline-offset-2"
        >
          Zurück zur Übersicht
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Quiz4Page() {
  const { locale } = useParams();
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [statuses, setStatuses] = useState<ChallengeStatus[]>(
    Array(6).fill("idle")
  );
  const [done, setDone] = useState(false);

  const handleComplete = useCallback(
    (correct: boolean) => {
      const next = [...statuses];
      next[currentChallenge] = correct ? "correct" : "incorrect";
      setStatuses(next);

      if (currentChallenge < 5) {
        setTimeout(() => setCurrentChallenge((c) => c + 1), 300);
      } else {
        setTimeout(() => setDone(true), 500);
      }
    },
    [currentChallenge, statuses]
  );

  const handleRestart = () => {
    setCurrentChallenge(0);
    setStatuses(Array(6).fill("idle"));
    setDone(false);
  };

  const challenges = [
    <Challenge1 key="c1" onComplete={handleComplete} />,
    <Challenge2 key="c2" onComplete={handleComplete} />,
    <Challenge3 key="c3" onComplete={handleComplete} />,
    <Challenge4 key="c4" onComplete={handleComplete} />,
    <Challenge5 key="c5" onComplete={handleComplete} />,
    <Challenge6 key="c6" onComplete={handleComplete} />,
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#FFFBF5" }}
    >
      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b border-amber-100" style={{ backgroundColor: "#FFFBF5" }}>
        <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href={`/${locale}/demo`}
            className="text-sm text-gray-500 hover:text-gray-700 font-medium flex items-center gap-1"
          >
            ← Übersicht
          </Link>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Pflege-Quiz
          </span>
          <span className="text-sm text-gray-500 font-medium">
            {done ? "6/6" : `${currentChallenge + 1}/6`}
          </span>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 py-8">
        {/* Progress dots */}
        {!done && (
          <ProgressDots
            total={6}
            current={currentChallenge}
            statuses={statuses}
          />
        )}

        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <Results statuses={statuses} onRestart={handleRestart} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`challenge-${currentChallenge}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                {challenges[currentChallenge]}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer hint */}
        {!done && (
          <p className="text-center text-xs text-gray-400 mt-6">
            Aufgabe {currentChallenge + 1} von 6 · Generalistische
            Pflegeausbildung
          </p>
        )}
      </div>
    </div>
  );
}
