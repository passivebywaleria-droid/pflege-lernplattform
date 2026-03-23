"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type Difficulty = 1 | 2 | 3;

interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: number;
  caseTitle: string;
  patientName: string;
  patientAge: number;
  diagnosis: string;
  questionText: string;
  answers: Answer[];
  explanation: string;
  merkeSatz: string;
  crossRef: string;
  difficulty: Difficulty;
  topic: string;
  userCorrectRate: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    id: 1,
    caseTitle: "Fallbeispiel: Stoffwechselnotfall",
    patientName: "Müller",
    patientAge: 78,
    diagnosis: "Diabetes mellitus Typ 2",
    questionText:
      "Frau Müller klagt über plötzlichen Schwindel, Schwitzen und Zittern. Der gemessene Blutzucker beträgt 55 mg/dl. Welche Maßnahme hat absoluten Vorrang?",
    answers: [
      { id: "a", text: "Traubenzucker oder Fruchtsaft sofort verabreichen", isCorrect: true },
      { id: "b", text: "Schnell wirkendes Insulin injizieren", isCorrect: false },
      { id: "c", text: "Arzt informieren und Anweisung abwarten", isCorrect: false },
      { id: "d", text: "Blutdruck messen und dokumentieren", isCorrect: false },
    ],
    explanation:
      "Bei einer Hypoglykämie (BZ < 70 mg/dl) ist die sofortige Gabe schnell resorbierbarer Kohlenhydrate die Erstmaßnahme. Traubenzucker (Dextrose) oder gesüßte Getränke erhöhen den Blutzucker rasch. Erst nach Stabilisierung des BZ wird der Arzt informiert. Insulin würde die Situation lebensbedrohlich verschlimmern.",
    merkeSatz:
      "Hypoglykämie (BZ < 70 mg/dl): immer zuerst Kohlenhydrate geben — dann erst Arzt informieren!",
    crossRef: "CE 04 – Gesundheit fördern | Kapitel: Stoffwechselerkrankungen, S. 312",
    difficulty: 1,
    topic: "Endokrinologie",
    userCorrectRate: 81,
  },
  {
    id: 2,
    caseTitle: "Fallbeispiel: Postoperative Komplikation",
    patientName: "Schmidt",
    patientAge: 65,
    diagnosis: "Zustand nach Hüft-TEP (2. postoperativer Tag)",
    questionText:
      "Am 2. postoperativen Tag nach Hüftgelenkersatz bemerken Sie eine einseitige Rötung, Schwellung und Überwärmung am rechten Unterschenkel. Woran denken Sie als Pflegefachperson zuerst?",
    answers: [
      { id: "a", text: "Tiefe Beinvenenthrombose (TVT)", isCorrect: true },
      { id: "b", text: "Allergische Reaktion auf Verbandsmaterial", isCorrect: false },
      { id: "c", text: "Muskelkater durch Physiotherapie", isCorrect: false },
      { id: "d", text: "Lokaler Sonnenbrand durch Fensterlicht", isCorrect: false },
    ],
    explanation:
      "Nach orthopädischen Operationen besteht ein erhöhtes Thromboserisiko. Die klassische Virchow-Trias (Gefäßwandschaden, veränderte Hämodynamik, Hyperkoagulabilität) erklärt die Pathophysiologie. Einseitige Schwellung, Rötung und Überwärmung sind Leitsymptome der TVT. Sofortige Arztinformation und ggf. Dopplersonographie sind notwendig.",
    merkeSatz:
      "Virchow-Trias: Gefäßwandschaden + verlangsamter Blutfluss + Hyperkoagulabilität → TVT-Risiko immer postoperativ im Blick behalten!",
    crossRef: "CE 05 – Perioperative Pflege | Kapitel: Thromboembolieprophylaxe, S. 445",
    difficulty: 2,
    topic: "Chirurgische Pflege",
    userCorrectRate: 68,
  },
  {
    id: 3,
    caseTitle: "Fallbeispiel: Demenzbedingte Verhaltensänderung",
    patientName: "Weber",
    patientAge: 82,
    diagnosis: "Demenz vom Alzheimer-Typ (mittelschwer)",
    questionText:
      "Herr Weber ist tagsüber ruhig und orientiert. Ab ca. 17 Uhr wird er jedoch zunehmend agitiert, unruhig und desorientiert. Dieses regelmäßig wiederkehrende abendliche Muster — wie bezeichnet man dieses Phänomen in der Fachsprache?",
    answers: [
      { id: "a", text: "Sundowning-Syndrom", isCorrect: true },
      { id: "b", text: "Morgensteifigkeit (Morgendyskinesie)", isCorrect: false },
      { id: "c", text: "Hyperaktives Delir", isCorrect: false },
      { id: "d", text: "Agitierte Depression", isCorrect: false },
    ],
    explanation:
      "Das Sundowning-Syndrom beschreibt die typische abendliche Zunahme von Unruhe, Verwirrung und Agitation bei Menschen mit Demenz. Die genaue Ursache ist multifaktoriell (Störung des zirkadianen Rhythmus, Erschöpfung, Reizüberflutung). Maßnahmen: ruhige Atmosphäre, Orientierungshilfen (Kalender, Uhr), vertraute Routinen, ggf. Lichttherapie.",
    merkeSatz:
      "Sundowning ≠ Delir: Sundowning ist chronisch und vorhersehbar, das Delir ist akut und fluktuierend — Unterscheidung klinisch wichtig!",
    crossRef: "CE 07 – Menschen mit Demenz | Kapitel: Verhaltensauffälligkeiten, S. 198",
    difficulty: 2,
    topic: "Gerontopsychiatrie",
    userCorrectRate: 59,
  },
  {
    id: 4,
    caseTitle: "Fallbeispiel: Wundversorgung",
    patientName: "Klein",
    patientAge: 45,
    diagnosis: "1. postoperativer Tag nach Appendektomie",
    questionText:
      "Sie führen einen Verbandswechsel an der Appendektomie-Wunde durch. Welche Reihenfolge entspricht den aktuellen Hygienerichtlinien des RKI korrekt?",
    answers: [
      {
        id: "a",
        text: "Hände desinfizieren → Material vorbereiten → alten Verband entfernen → Wunde inspizieren → neuen Verband anlegen",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Material vorbereiten → Verband entfernen → Hände waschen → neuen Verband anlegen",
        isCorrect: false,
      },
      {
        id: "c",
        text: "Verband entfernen → Wunde reinigen → Hände desinfizieren → neuen Verband anlegen",
        isCorrect: false,
      },
      {
        id: "d",
        text: "Unsterile Handschuhe anziehen → Verband entfernen → Hände waschen → neuen Verband",
        isCorrect: false,
      },
    ],
    explanation:
      "Die korrekte Reihenfolge folgt den Hygienerichtlinien des RKI und KRINKO. Vor jeder Tätigkeit am Patienten steht die hygienische Händedesinfektion. Das Material wird steril vorbereitet, bevor die kontaminierte Wundumgebung berührt wird. Nach Entfernung des alten Verbands wird die Wunde auf Heilungszeichen (Rötung, Sekretion, Dehiszenz) inspiziert.",
    merkeSatz:
      "Händedesinfektion ist IMMER der erste Schritt — auch wenn bereits Handschuhe getragen werden! Hygiene hat Priorität.",
    crossRef: "CE 02 – Hygiene & Infektionsprävention | Kapitel: Verbandswechsel, S. 87",
    difficulty: 3,
    topic: "Hygiene & Wundversorgung",
    userCorrectRate: 43,
  },
  {
    id: 5,
    caseTitle: "Fallbeispiel: Fiebermanagement Pädiatrie",
    patientName: "Lena",
    patientAge: 0,
    diagnosis: "Fieber 39,2°C (Säugling, 6 Monate)",
    questionText:
      "Baby Lena (6 Monate) hat eine Körpertemperatur von 39,2°C. Die Mutter fragt nach einer geeigneten physikalischen Maßnahme zur Fiebersenkung. Welche Empfehlung geben Sie?",
    answers: [
      { id: "a", text: "Lauwarme Wadenwickel (nicht kälter als 2°C unter KT)", isCorrect: true },
      { id: "b", text: "Eispackungen an Leistenbeugen anlegen", isCorrect: false },
      { id: "c", text: "Kaltes Vollbad (ca. 20°C Wassertemperatur)", isCorrect: false },
      { id: "d", text: "Alkoholwickel (Isopropanol 70%)", isCorrect: false },
    ],
    explanation:
      "Lauwarme Wadenwickel (Wassertemperatur ca. 2°C unter der Körpertemperatur des Kindes, d. h. ca. 37°C) sind die schonendste und leitliniengerechte physikalische Maßnahme bei Fieber im Säuglingsalter. Eispackungen und kalte Bäder können zu Kälteschock und Krampfanfällen führen. Alkohol wird perkutan absorbiert und ist bei Säuglingen absolut kontraindiziert.",
    merkeSatz:
      "Alkoholwickel sind bei Kindern KONTRAINDIZIERT — perkutane Resorption kann zur Alkoholvergiftung führen! Lauwarme Wadenwickel sind Mittel der Wahl.",
    crossRef: "CE 11 – Pflege von Kindern | Kapitel: Fiebermanagement, S. 523",
    difficulty: 1,
    topic: "Pädiatrische Pflege",
    userCorrectRate: 74,
  },
  {
    id: 6,
    caseTitle: "Fallbeispiel: Kardiale Lagerung",
    patientName: "Braun",
    patientAge: 70,
    diagnosis: "Herzinsuffizienz NYHA III, akute Dyspnoe",
    questionText:
      "Frau Braun zeigt Zeichen einer akuten Dekompensation ihrer Herzinsuffizienz mit ausgeprägter Atemnot (SpO₂ 88%, Atemfrequenz 26/min). Welche Lagerung verschafft ihr am schnellsten Erleichterung?",
    answers: [
      { id: "a", text: "Oberkörperhochlagerung (30–90°, je nach Verträglichkeit)", isCorrect: true },
      { id: "b", text: "Flache Rückenlage (0°)", isCorrect: false },
      { id: "c", text: "Bauchlage (Prone Positioning)", isCorrect: false },
      { id: "d", text: "Trendelenburg-Lagerung (Kopftieflage 15°)", isCorrect: false },
    ],
    explanation:
      "Die Oberkörperhochlagerung senkt durch die Schwerkraft die venöse Vorlast (venöses Pooling in den Beinen). Das Herz muss weniger Blutvolumen pumpen, der Gasaustausch verbessert sich durch günstigere Lungenmechanik. Die flache Rückenlage würde die Vorlast erhöhen und die Dyspnoe verstärken. Trendelenburg-Lagerung ist bei Herzinsuffizienz kontraindiziert.",
    merkeSatz:
      "Herzinsuffizienz + Dyspnoe = Oberkörperhochlagerung + Beine herabhängen lassen (Herzbett-Lagerung) → reduziert Vorlast sofort!",
    crossRef: "CE 06 – Kardiologie & Pneumologie | Kapitel: Herzinsuffizienz-Management, S. 289",
    difficulty: 1,
    topic: "Kardiologie",
    userCorrectRate: 77,
  },
];

// ─── Helper Components ────────────────────────────────────────────────────────

function DifficultyHammers({ level }: { level: Difficulty }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 3 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-4 h-4 ${i < level ? "text-amber-500" : "text-gray-200"}`}
        >
          <path d="M11.42 2.58a.75.75 0 011.06 0l1.415 1.414a.75.75 0 010 1.06l-.354.355 1.415 1.414a.75.75 0 010 1.06l-5.657 5.658a.75.75 0 01-1.06 0L6.823 12.126a.75.75 0 010-1.06l1.414-1.415-.353-.354a.75.75 0 010-1.06l1.414-1.414-.353-.354a.75.75 0 010-1.06l2.475-2.476zM3.75 13.5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H3.75z" />
        </svg>
      ))}
    </span>
  );
}

function DifficultyLabel({ level }: { level: Difficulty }) {
  const labels: Record<Difficulty, string> = { 1: "Leicht", 2: "Mittel", 3: "Schwer" };
  const colors: Record<Difficulty, string> = {
    1: "text-emerald-600 bg-emerald-50",
    2: "text-amber-600 bg-amber-50",
    3: "text-red-600 bg-red-50",
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[level]}`}>
      {labels[level]}
    </span>
  );
}

function PatientCard({ q }: { q: Question }) {
  const isInfant = q.patientAge === 0;
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-5">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-blue-600"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-1">
            Patientendaten
          </p>
          <p className="text-sm font-semibold text-gray-900">
            {isInfant
              ? `${q.patientName}, ${q.diagnosis}`
              : `${q.patientName === "Lena" ? "" : q.patientName.startsWith("H") ? "Herr " : "Frau "}${q.patientName}, ${q.patientAge} Jahre`}
          </p>
          <p className="text-sm text-blue-700 mt-0.5">
            <span className="font-medium">Diagnose:</span> {q.diagnosis}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({
  current,
  total,
  answered,
}: {
  current: number;
  total: number;
  answered: boolean[];
}) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">
          Frage <span className="text-teal-600 font-semibold">{current + 1}</span> von{" "}
          <span className="font-semibold">{total}</span>
        </span>
        <span className="text-xs text-gray-400">
          {answered.filter(Boolean).length} beantwortet
        </span>
      </div>
      <div className="relative flex items-center">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <button
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all duration-200 flex-shrink-0 ${
                i === current
                  ? "border-teal-600 bg-teal-600 text-white shadow-md scale-110"
                  : answered[i]
                  ? "border-teal-600 bg-teal-50 text-teal-700"
                  : "border-gray-200 bg-white text-gray-400"
              }`}
            >
              {answered[i] && i !== current ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-teal-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                i + 1
              )}
            </button>
            {i < total - 1 && (
              <div
                className={`flex-1 h-0.5 mx-1 transition-colors duration-300 ${
                  answered[i] ? "bg-teal-400" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatsSidebar({
  q,
  flagged,
  onToggleFlag,
}: {
  q: Question;
  flagged: boolean;
  onToggleFlag: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Statistik
        </p>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-500">Richtig beantwortet</span>
              <span className="text-xs font-semibold text-teal-600">{q.userCorrectRate}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-teal-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${q.userCorrectRate}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">aller Lernenden</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Schwierigkeit
        </p>
        <div className="flex items-center gap-2">
          <DifficultyHammers level={q.difficulty} />
          <DifficultyLabel level={q.difficulty} />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Themengebiet
        </p>
        <span className="inline-block text-xs text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full font-medium">
          {q.topic}
        </span>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Aktionen
        </p>
        <button
          onClick={onToggleFlag}
          className={`flex items-center gap-2 w-full text-sm px-3 py-2 rounded-lg border transition-all duration-200 ${
            flagged
              ? "border-amber-300 bg-amber-50 text-amber-700"
              : "border-gray-200 bg-gray-50 text-gray-500 hover:border-amber-200 hover:text-amber-600 hover:bg-amber-50"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={flagged ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          {flagged ? "Markiert" : "Markieren"}
        </button>
      </div>
    </div>
  );
}

function ExplanationCard({
  q,
  isCorrect,
  selectedId,
}: {
  q: Question;
  isCorrect: boolean;
  selectedId: string;
}) {
  const selectedAnswer = q.answers.find((a) => a.id === selectedId);
  const correctAnswer = q.answers.find((a) => a.isCorrect);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`rounded-lg border shadow-sm overflow-hidden mt-5`}
      style={{
        borderTopWidth: "4px",
        borderTopColor: isCorrect ? "#059669" : "#DC2626",
        borderLeftColor: "#e5e7eb",
        borderRightColor: "#e5e7eb",
        borderBottomColor: "#e5e7eb",
      }}
    >
      <div
        className={`flex items-center gap-3 px-5 py-3 ${
          isCorrect ? "bg-emerald-50" : "bg-red-50"
        }`}
      >
        {isCorrect ? (
          <>
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-emerald-600"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-emerald-800 text-sm">Richtig!</p>
              <p className="text-xs text-emerald-600">Hervorragend — diese Antwort ist korrekt.</p>
            </div>
          </>
        ) : (
          <>
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-red-600"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-red-800 text-sm">Leider falsch</p>
              <p className="text-xs text-red-600">
                Ihre Antwort: <span className="font-medium">{selectedAnswer?.text}</span>
              </p>
            </div>
          </>
        )}
      </div>

      <div className="bg-white px-5 py-4 space-y-4">
        {!isCorrect && (
          <div className="flex items-start gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm text-emerald-800">
              <span className="font-semibold">Richtige Antwort:</span> {correctAnswer?.text}
            </p>
          </div>
        )}

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Erklarung
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{q.explanation}</p>
        </div>

        <div className="bg-teal-50 border border-teal-100 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 text-teal-600"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Merke:</span>
          </div>
          <p className="text-sm text-teal-800 font-medium leading-relaxed">{q.merkeSatz}</p>
        </div>

        <div className="flex items-start gap-2 pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"
          >
            <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
          </svg>
          <p className="text-xs text-blue-600">
            <span className="font-semibold">Literatur:</span> {q.crossRef}
          </p>
        </div>

        <div className="flex items-center gap-3 pt-1 border-t border-gray-100">
          <DifficultyHammers level={q.difficulty} />
          <DifficultyLabel level={q.difficulty} />
          <span className="text-xs text-gray-400 ml-auto">{q.userCorrectRate}% Erfolgsrate</span>
        </div>
      </div>
    </motion.div>
  );
}

function SummaryView({
  score,
  total,
  flaggedIds,
  timeSeconds,
  answers,
  onRestart,
}: {
  score: number;
  total: number;
  flaggedIds: number[];
  timeSeconds: number;
  answers: Record<number, { selectedId: string; isCorrect: boolean }>;
  onRestart: () => void;
}) {
  const { locale } = useParams();
  const pct = Math.round((score / total) * 100);
  const minutes = Math.floor(timeSeconds / 60);
  const seconds = timeSeconds % 60;

  const getGrade = () => {
    if (pct >= 85) return { label: "Ausgezeichnet", color: "text-emerald-600", bg: "bg-emerald-50" };
    if (pct >= 70) return { label: "Gut", color: "text-teal-600", bg: "bg-teal-50" };
    if (pct >= 55) return { label: "Befriedigend", color: "text-amber-600", bg: "bg-amber-50" };
    return { label: "Verbesserungsbedarf", color: "text-red-600", bg: "bg-red-50" };
  };

  const grade = getGrade();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 px-8 py-10 text-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-bold text-white">{pct}%</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">Quiz abgeschlossen!</h2>
          <p className="text-teal-100 text-sm">
            {score} von {total} Fragen richtig beantwortet
          </p>
        </div>

        <div className="px-8 py-6 space-y-6">
          <div className={`${grade.bg} rounded-lg px-5 py-4 text-center`}>
            <p className={`text-lg font-bold ${grade.color}`}>{grade.label}</p>
            <p className="text-sm text-gray-600 mt-1">
              Bearbeitungszeit: {minutes}:{String(seconds).padStart(2, "0")} Minuten
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-emerald-600">{score}</p>
              <p className="text-xs text-gray-500 mt-1">Richtig</p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-red-600">{total - score}</p>
              <p className="text-xs text-gray-500 mt-1">Falsch</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-amber-600">{flaggedIds.length}</p>
              <p className="text-xs text-gray-500 mt-1">Markiert</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Fragenübersicht</p>
            <div className="space-y-2">
              {QUESTIONS.map((q, i) => {
                const ans = answers[i];
                const isFlagged = flaggedIds.includes(i);
                return (
                  <div
                    key={q.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                        ans?.isCorrect
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <p className="text-xs text-gray-600 flex-1 line-clamp-1">{q.questionText}</p>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {isFlagged && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 text-amber-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {ans?.isCorrect ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 text-emerald-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 text-red-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {flaggedIds.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-amber-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm font-semibold text-amber-800">
                  Markierte Fragen ({flaggedIds.length})
                </p>
              </div>
              <p className="text-xs text-amber-700">
                Fragen {flaggedIds.map((id) => id + 1).join(", ")} wurden als Wiederholungsbedarf
                markiert.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={onRestart}
              className="flex-1 bg-teal-600 text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                  clipRule="evenodd"
                />
              </svg>
              Nochmal üben
            </button>
            <Link
              href={`/${locale}/demo`}
              className="flex-1 bg-gray-100 text-gray-700 text-sm font-semibold px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                  clipRule="evenodd"
                />
              </svg>
              Zur Übersicht
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function Quiz3Page() {
  const { locale } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [flagged, setFlagged] = useState<boolean[]>(Array(QUESTIONS.length).fill(false));
  const [answered, setAnswered] = useState<boolean[]>(Array(QUESTIONS.length).fill(false));
  const [answers, setAnswers] = useState<
    Record<number, { selectedId: string; isCorrect: boolean }>
  >({});
  const [showSummary, setShowSummary] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!showSummary) {
        setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
      }
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTime, showSummary]);

  const q = QUESTIONS[currentQuestion];
  const flaggedIndices = flagged.map((f, i) => (f ? i : -1)).filter((i) => i !== -1);
  const score = Object.values(answers).filter((a) => a.isCorrect).length;

  const handleSelectAnswer = (id: string) => {
    if (!showExplanation) {
      setSelectedAnswer(id);
    }
  };

  const handleConfirm = () => {
    if (!selectedAnswer) return;
    const correct = q.answers.find((a) => a.id === selectedAnswer)?.isCorrect ?? false;
    setIsCorrect(correct);
    setShowExplanation(true);
    const newAnswered = [...answered];
    newAnswered[currentQuestion] = true;
    setAnswered(newAnswered);
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: { selectedId: selectedAnswer, isCorrect: correct },
    }));
  };

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setIsCorrect(null);
    } else {
      setShowSummary(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(null);
    setFlagged(Array(QUESTIONS.length).fill(false));
    setAnswered(Array(QUESTIONS.length).fill(false));
    setAnswers({});
    setShowSummary(false);
  };

  const toggleFlag = () => {
    const newFlagged = [...flagged];
    newFlagged[currentQuestion] = !newFlagged[currentQuestion];
    setFlagged(newFlagged);
  };

  const getAnswerStyle = (answer: Answer) => {
    if (!showExplanation) {
      if (selectedAnswer === answer.id) {
        return "border-teal-500 bg-teal-50 shadow-sm";
      }
      return "border-gray-200 bg-white hover:border-teal-300 hover:bg-teal-50/40 cursor-pointer";
    }
    if (answer.isCorrect) {
      return "border-emerald-500 bg-emerald-50";
    }
    if (selectedAnswer === answer.id && !answer.isCorrect) {
      return "border-red-400 bg-red-50";
    }
    return "border-gray-200 bg-white opacity-60";
  };

  const getCircleStyle = (answer: Answer) => {
    if (!showExplanation) {
      if (selectedAnswer === answer.id) {
        return "border-teal-500 bg-teal-500";
      }
      return "border-gray-300";
    }
    if (answer.isCorrect) return "border-emerald-500 bg-emerald-500";
    if (selectedAnswer === answer.id && !answer.isCorrect) return "border-red-500 bg-red-500";
    return "border-gray-300";
  };

  if (showSummary) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Link
              href={`/${locale}/demo`}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-teal-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clipRule="evenodd"
                />
              </svg>
              Zurück zur Übersicht
            </Link>
          </div>
          <SummaryView
            score={score}
            total={QUESTIONS.length}
            flaggedIds={flaggedIndices}
            timeSeconds={elapsedSeconds}
            answers={answers}
            onRestart={handleRestart}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link
            href={`/${locale}/demo`}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-teal-600 transition-colors flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Übersicht
          </Link>
          <div className="flex-1 min-w-0">
            <ProgressBar
              current={currentQuestion}
              total={QUESTIONS.length}
              answered={answered}
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                clipRule="evenodd"
              />
            </svg>
            {Math.floor(elapsedSeconds / 60)}:{String(elapsedSeconds % 60).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Question Column */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {/* Question Card */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  {/* Card Header */}
                  <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold">
                        {currentQuestion + 1}
                      </span>
                      <span className="text-sm font-semibold text-gray-700">{q.caseTitle}</span>
                    </div>
                    <span className="text-xs text-gray-400 bg-white border border-gray-200 px-2.5 py-1 rounded-full">
                      {q.topic}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="px-6 py-5">
                    <PatientCard q={q} />

                    <p className="text-base font-medium text-gray-900 leading-relaxed mb-6">
                      {q.questionText}
                    </p>

                    {/* Answer Options */}
                    <div className="space-y-3">
                      {q.answers.map((answer) => (
                        <button
                          key={answer.id}
                          onClick={() => handleSelectAnswer(answer.id)}
                          disabled={showExplanation}
                          className={`w-full text-left border-2 rounded-lg px-4 py-3.5 transition-all duration-200 ${getAnswerStyle(
                            answer
                          )}`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${getCircleStyle(
                                answer
                              )}`}
                            >
                              {showExplanation && answer.isCorrect && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-3 h-3 text-white"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                              {showExplanation &&
                                selectedAnswer === answer.id &&
                                !answer.isCorrect && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-3 h-3 text-white"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                )}
                              {!showExplanation && selectedAnswer === answer.id && (
                                <div className="w-2.5 h-2.5 rounded-full bg-white" />
                              )}
                            </div>
                            <span
                              className={`text-sm leading-relaxed ${
                                showExplanation && answer.isCorrect
                                  ? "text-emerald-800 font-medium"
                                  : showExplanation &&
                                    selectedAnswer === answer.id &&
                                    !answer.isCorrect
                                  ? "text-red-800"
                                  : "text-gray-700"
                              }`}
                            >
                              <span className="font-semibold text-gray-400 mr-2 uppercase">
                                {answer.id}.
                              </span>
                              {answer.text}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex items-center justify-between">
                      {!showExplanation ? (
                        <button
                          onClick={handleConfirm}
                          disabled={!selectedAnswer}
                          className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                            selectedAnswer
                              ? "bg-teal-600 text-white hover:bg-teal-700 shadow-sm hover:shadow-md"
                              : "bg-gray-100 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          Antwort bestätigen
                        </button>
                      ) : (
                        <button
                          onClick={handleNext}
                          className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
                        >
                          {currentQuestion < QUESTIONS.length - 1 ? (
                            <>
                              Nächste Frage
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </>
                          ) : (
                            <>
                              Ergebnis anzeigen
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </>
                          )}
                        </button>
                      )}

                      {showExplanation && (
                        <div className="flex items-center gap-1.5 text-sm">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full font-medium text-xs ${
                              isCorrect
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {isCorrect ? (
                              <>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-3.5 h-3.5"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                +1 Punkt
                              </>
                            ) : (
                              <>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-3.5 h-3.5"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                0 Punkte
                              </>
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Explanation Card */}
                {showExplanation && isCorrect !== null && selectedAnswer && (
                  <ExplanationCard q={q} isCorrect={isCorrect} selectedId={selectedAnswer} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="w-56 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24">
              <StatsSidebar
                q={q}
                flagged={flagged[currentQuestion]}
                onToggleFlag={toggleFlag}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
