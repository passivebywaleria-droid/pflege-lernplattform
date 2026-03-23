"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Bell,
  Search,
  ChevronRight,
  BookOpen,
  Clock,
  CheckCircle,
  TrendingUp,
  Flame,
  ArrowLeft,
  Settings,
  BarChart2,
  Home,
  Layers,
  User,
  X,
  Check,
} from "lucide-react";

// ─── Animation Variants ─────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// ─── Types ───────────────────────────────────────────────────────────────────

interface ModuleCard {
  id: string;
  ce: string;
  title: string;
  description: string;
  progress: number;
  lessons: number;
  done: number;
}

interface QuizAnswer {
  id: string;
  text: string;
  correct: boolean;
}

interface TableRow {
  datum: string;
  modul: string;
  score: number;
  bestanden: boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const MODULES: ModuleCard[] = [
  {
    id: "m1",
    ce: "CE 01",
    title: "Pflegeprozess",
    description:
      "Systematische Planung, Durchführung und Evaluation pflegerischer Maßnahmen nach dem Pflegeprozessmodell.",
    progress: 80,
    lessons: 8,
    done: 6,
  },
  {
    id: "m2",
    ce: "CE 02",
    title: "Kommunikation",
    description:
      "Professionelle Gesprächsführung mit Patienten, Angehörigen und dem interdisziplinären Team.",
    progress: 55,
    lessons: 10,
    done: 5,
  },
  {
    id: "m3",
    ce: "CE 03",
    title: "Rechtliche Grundlagen",
    description:
      "Haftungsrecht, Schweigepflicht, Dokumentationspflicht und das Pflegeberufegesetz (PflBG 2020).",
    progress: 30,
    lessons: 6,
    done: 2,
  },
  {
    id: "m4",
    ce: "CE 04",
    title: "Hygiene & Infektionsschutz",
    description:
      "Basishygiene, Händedesinfektion, Schutzausrüstung und Umgang mit multiresistenten Erregern.",
    progress: 95,
    lessons: 7,
    done: 7,
  },
  {
    id: "m5",
    ce: "CE 05",
    title: "Medikamentenlehre",
    description:
      "Pharmakologie, Verabreichungswege, Wechselwirkungen und sichere Medikamentengabe im Pflegealltag.",
    progress: 15,
    lessons: 12,
    done: 2,
  },
  {
    id: "m6",
    ce: "CE 06",
    title: "Notfallpflege",
    description:
      "Erstversorgung, Reanimation, Schockmanagement und Erstmaßnahmen bei akuten Pflegesituationen.",
    progress: 0,
    lessons: 9,
    done: 0,
  },
];

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question:
      "Welches Modell bildet die Grundlage des Pflegeprozesses in Deutschland?",
    answers: [
      { id: "a", text: "Maslow-Hierarchie", correct: false },
      { id: "b", text: "AEDL-Modell nach Krohwinkel", correct: true },
      { id: "c", text: "Henderson-Modell", correct: false },
      { id: "d", text: "Orem-Modell", correct: false },
    ] as QuizAnswer[],
  },
  {
    id: 2,
    question:
      "Wie lange müssen Pflegedokumentationen nach deutschem Recht mindestens aufbewahrt werden?",
    answers: [
      { id: "a", text: "5 Jahre", correct: false },
      { id: "b", text: "8 Jahre", correct: false },
      { id: "c", text: "10 Jahre", correct: true },
      { id: "d", text: "15 Jahre", correct: false },
    ] as QuizAnswer[],
  },
  {
    id: 3,
    question:
      "Welche Händedesinfektionsmethode ist laut WHO-Richtlinie empfohlen?",
    answers: [
      { id: "a", text: "Nur Seife und Wasser verwenden", correct: false },
      { id: "b", text: "6-Schritte-Methode mit alkohol. Desinfektionsmittel", correct: true },
      { id: "c", text: "Handschuhe ersetzen die Desinfektion", correct: false },
      { id: "d", text: "Desinfektion nur bei sichtbarer Kontamination", correct: false },
    ] as QuizAnswer[],
  },
];

const TABLE_DATA: TableRow[] = [
  { datum: "18.03.2026", modul: "Pflegeprozess", score: 92, bestanden: true },
  { datum: "15.03.2026", modul: "Hygiene & Infektionsschutz", score: 88, bestanden: true },
  { datum: "12.03.2026", modul: "Kommunikation", score: 61, bestanden: true },
  { datum: "08.03.2026", modul: "Rechtliche Grundlagen", score: 44, bestanden: false },
  { datum: "04.03.2026", modul: "Medikamentenlehre", score: 78, bestanden: true },
];

const WEEK_BARS = [30, 55, 80, 45, 95, 65, 40];
const WEEK_LABELS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SegmentedControl({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="inline-flex items-center gap-0.5 bg-zinc-100 rounded-lg p-1">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
            value === opt
              ? "bg-white shadow-sm text-zinc-900"
              : "text-zinc-500 hover:text-zinc-700"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function Badge({
  children,
  filled,
}: {
  children: React.ReactNode;
  filled?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-medium ${
        filled
          ? "bg-zinc-900 text-white border-zinc-900"
          : "border-zinc-200 text-zinc-600 bg-white"
      }`}
    >
      {children}
    </span>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
  delay: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
      className="bg-white border border-zinc-200 rounded-[10px] p-5 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-500">{label}</span>
        <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center">
          <Icon className="w-4 h-4 text-zinc-600" />
        </div>
      </div>
      <div>
        <p className="text-2xl font-semibold tracking-tight text-zinc-900">{value}</p>
        {sub && <p className="text-xs text-zinc-500 mt-0.5">{sub}</p>}
      </div>
    </motion.div>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-zinc-900 rounded-full transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

// ─── Toggle Switch ────────────────────────────────────────────────────────────

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
        checked ? "bg-zinc-900" : "bg-zinc-200"
      }`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`max-w-5xl mx-auto px-4 py-10 ${className}`}
    >
      {children}
    </section>
  );
}

function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-6"
    >
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900">{title}</h2>
      {sub && <p className="text-sm text-zinc-500 mt-0.5">{sub}</p>}
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function OriginDemoPage() {
  const { locale } = useParams();
  const [navTab, setNavTab] = useState("Dashboard");
  const [moduleFilter, setModuleFilter] = useState("Alle");
  const [progressPeriod, setProgressPeriod] = useState("Woche");
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifPush, setNotifPush] = useState(false);
  const [notifWeekly, setNotifWeekly] = useState(true);
  const [notifPref, setNotifPref] = useState("Täglich");
  const [settingsName, setSettingsName] = useState("Anna Müller");
  const [settingsEmail, setSettingsEmail] = useState("anna.mueller@pflegeschule.de");
  const [saved, setSaved] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[quizIndex % QUIZ_QUESTIONS.length];

  const handleAnswer = (id: string) => {
    if (answered) return;
    setSelectedAnswer(id);
    setAnswered(true);
    const isCorrect = currentQuestion.answers.find((a) => a.id === id)?.correct;
    if (isCorrect) setQuizScore((s) => s + 1);
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    setQuizIndex((i) => i + 1);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const filteredModules =
    moduleFilter === "Alle"
      ? MODULES
      : MODULES.filter((m) => m.ce === moduleFilter);

  const maxBar = Math.max(...WEEK_BARS);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      {/* ── Top Navigation ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          {/* Left: back link + logo */}
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/demo`}
              className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Zurück zur Übersicht</span>
            </Link>
            <div className="h-4 w-px bg-zinc-200 hidden sm:block" />
            <span className="text-sm font-semibold text-zinc-900 tracking-tight">
              Pflege-Lernplattform
            </span>
          </div>

          {/* Center: segmented nav */}
          <nav className="hidden md:block">
            <SegmentedControl
              options={["Dashboard", "Module", "Fortschritt", "Einstellungen"]}
              value={navTab}
              onChange={setNavTab}
            />
          </nav>

          {/* Right: notification + avatar */}
          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors">
              <Bell className="w-4 h-4 text-zinc-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-zinc-900 text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center">
              <span className="text-xs font-semibold text-white">AM</span>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden border-t border-zinc-200 px-4 py-2 flex gap-1 overflow-x-auto">
          {["Dashboard", "Module", "Fortschritt", "Einstellungen"].map((tab) => (
            <button
              key={tab}
              onClick={() => setNavTab(tab)}
              className={`flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                navTab === tab
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* ── 1. Dashboard Section ────────────────────────────────────── */}
      <Section id="dashboard">
        {/* Welcome */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-sm text-zinc-500 mb-1">Donnerstag, 19. März 2026</p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Willkommen zurück, Anna
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Du hast heute noch keine Lerneinheit absolviert. Los geht&apos;s!
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          <StatCard
            icon={Clock}
            label="Lernstunden"
            value="24"
            sub="diese Woche +3h"
            delay={0}
          />
          <StatCard
            icon={CheckCircle}
            label="Abgeschlossen"
            value="12/30"
            sub="40% des Lehrplans"
            delay={1}
          />
          <StatCard
            icon={TrendingUp}
            label="Quiz-Score"
            value="87%"
            sub="Ø letzte 7 Tage"
            delay={2}
          />
          <StatCard
            icon={Flame}
            label="Streak"
            value="5 Tage"
            sub="Weiter so!"
            delay={3}
          />
        </div>

        {/* Progress Overview Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="bg-white border border-zinc-200 rounded-[10px] p-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-sm font-medium text-zinc-900">Lernaktivität</h3>
              <p className="text-xs text-zinc-500 mt-0.5">
                Tagesübersicht deiner Lernzeit
              </p>
            </div>
            <SegmentedControl
              options={["Woche", "Monat", "Gesamt"]}
              value={progressPeriod}
              onChange={setProgressPeriod}
            />
          </div>

          {/* Activity Bar Chart */}
          <div className="flex items-end gap-2 h-32">
            {WEEK_BARS.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full flex items-end justify-center" style={{ height: "100px" }}>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(val / maxBar) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
                    className={`w-full rounded-t-md ${
                      i === 3
                        ? "bg-zinc-900"
                        : "bg-zinc-200 hover:bg-zinc-300 transition-colors"
                    }`}
                  />
                </div>
                <span className="text-[10px] text-zinc-400 font-medium">
                  {WEEK_LABELS[i]}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-zinc-100 flex flex-wrap gap-x-6 gap-y-2">
            <div>
              <p className="text-xs text-zinc-500">Gesamtzeit</p>
              <p className="text-sm font-semibold text-zinc-900">5h 42min</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500">Bester Tag</p>
              <p className="text-sm font-semibold text-zinc-900">Mittwoch</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500">Lerneinheiten</p>
              <p className="text-sm font-semibold text-zinc-900">14 Module</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500">Ziel-Erreichung</p>
              <p className="text-sm font-semibold text-zinc-900">81%</p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t border-zinc-200" />
      </div>

      {/* ── 2. Module Overview Section ──────────────────────────────── */}
      <Section id="module">
        <SectionHeading
          title="Module"
          sub="Alle Lernmodule nach Kompetenzbereichen (CE)"
        />

        {/* Search + Filter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 mb-6"
        >
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Module durchsuchen..."
              className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-0 placeholder:text-zinc-400"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["Alle", "CE 01", "CE 02", "CE 03", "CE 04", "CE 05", "CE 06"].map(
              (f) => (
                <button
                  key={f}
                  onClick={() => setModuleFilter(f)}
                  className={`inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
                    moduleFilter === f
                      ? "bg-zinc-900 text-white border-zinc-900"
                      : "border-zinc-200 text-zinc-600 bg-white hover:bg-zinc-50"
                  }`}
                >
                  {f}
                </button>
              )
            )}
          </div>
        </motion.div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredModules.map((mod, i) => (
            <motion.div
              key={mod.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="bg-white border border-zinc-200 rounded-[10px] p-5 flex flex-col gap-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between">
                <Badge>{mod.ce}</Badge>
                <span className="text-xs text-zinc-500">
                  {mod.done}/{mod.lessons} Lekt.
                </span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 mb-1.5">
                  {mod.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">
                  {mod.description}
                </p>
              </div>
              <div className="mt-auto">
                <div className="flex justify-between text-xs text-zinc-500 mb-1.5">
                  <span>Fortschritt</span>
                  <span className="font-medium text-zinc-900">{mod.progress}%</span>
                </div>
                <ProgressBar value={mod.progress} />
              </div>
              <button className="w-full py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors">
                {mod.progress === 0 ? "Starten" : "Fortsetzen"}
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t border-zinc-200" />
      </div>

      {/* ── 3. Lesson View Section ──────────────────────────────────── */}
      <Section id="lektion">
        <SectionHeading
          title="Lektionsansicht"
          sub="Interaktive Lerninhalte mit strukturierten Textblöcken"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-zinc-200 rounded-[10px] overflow-hidden"
        >
          {/* Breadcrumb */}
          <div className="px-6 py-3 border-b border-zinc-200 bg-zinc-50 flex items-center gap-2 text-xs text-zinc-500">
            <BookOpen className="w-3.5 h-3.5" />
            <span>CE 01 — Pflegeprozess</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Pflegedokumentation</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-900 font-medium">AEDL-Modell</span>
          </div>

          <div className="px-6 py-6 space-y-6">
            {/* Lesson meta */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Lektion 4 von 8</Badge>
              <Badge>~15 Min</Badge>
              <Badge>Theorie</Badge>
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
              Pflegedokumentation nach dem AEDL-Modell
            </h2>

            {/* Intro paragraph */}
            <p className="text-sm text-zinc-600 leading-relaxed">
              Die Pflegedokumentation ist ein zentrales Instrument im Pflegeprozess. Sie dient der
              Kommunikation zwischen Pflegefachkräften, der Qualitätssicherung und dem Nachweis
              erbrachter Leistungen. Das AEDL-Modell (Aktivitäten und existenzielle Erfahrungen des
              Lebens) nach Monika Krohwinkel bietet eine strukturierte Grundlage für die Erfassung
              und Dokumentation von Pflegebedürfnissen.
            </p>

            {/* Callout box */}
            <div className="border-l-2 border-zinc-900 bg-zinc-50 rounded-r-lg px-4 py-4">
              <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-1.5">
                Merke
              </p>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Das AEDL-Modell umfasst 13 Aktivitäten und existenzielle Erfahrungen des Lebens.
                Die vollständige und korrekte Dokumentation aller AEDLs ist rechtlich bindend und
                schützt Pflegefachkräfte vor Haftungsansprüchen.
              </p>
            </div>

            {/* Ordered list */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 mb-3">
                Die 13 AEDLs im Überblick:
              </h3>
              <ol className="space-y-2">
                {[
                  "Kommunizieren",
                  "Sich bewegen",
                  "Vitale Funktionen aufrechterhalten",
                  "Sich pflegen",
                  "Essen und trinken",
                  "Ausscheiden",
                  "Sich kleiden",
                  "Ruhen, schlafen, entspannen",
                  "Sich beschäftigen",
                  "Sich als Frau/Mann fühlen",
                  "Für sichere/fördernde Umgebung sorgen",
                  "Soziale Bereiche sichern",
                  "Mit existenziellen Erfahrungen umgehen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                    <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full border border-zinc-200 text-xs font-medium text-zinc-500 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Key terms */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 mb-3">
                Schlüsselbegriffe dieser Lektion:
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AEDL-Modell",
                  "Krohwinkel",
                  "Ressourcenorientierung",
                  "Pflegeplanung",
                  "Pflegediagnose",
                  "Evaluation",
                  "SIS",
                  "Pflegeprozess",
                ].map((term) => (
                  <Badge key={term}>{term}</Badge>
                ))}
              </div>
            </div>

            {/* Second callout */}
            <div className="border-l-2 border-zinc-900 bg-zinc-50 rounded-r-lg px-4 py-4">
              <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-1.5">
                Praxistipp
              </p>
              <p className="text-sm text-zinc-700 leading-relaxed">
                Bei der Ersterfassung empfiehlt sich das standardisierte Informationsblatt (SIS),
                das seit 2017 im Rahmen des neuen Begutachtungsassessments (NBA) eingesetzt wird.
                Es ergänzt das AEDL-Modell um eine ressourcenorientierte Betrachtungsweise.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Vorherige Lektion
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors">
                Nächste Lektion
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t border-zinc-200" />
      </div>

      {/* ── 4. Quiz Section ─────────────────────────────────────────── */}
      <Section id="quiz">
        <SectionHeading
          title="Quiz"
          sub="Teste dein Wissen mit interaktiven Fragen"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Question card */}
          <motion.div
            key={quizIndex}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white border border-zinc-200 rounded-[10px] p-6"
          >
            {/* Progress + meta */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Badge>Frage {(quizIndex % QUIZ_QUESTIONS.length) + 1} von {QUIZ_QUESTIONS.length}</Badge>
                <Badge>CE 01</Badge>
              </div>
              <span className="text-xs text-zinc-500">
                Richtig: {quizScore} / {quizIndex}
              </span>
            </div>

            {/* Progress bar */}
            <div className="mb-5">
              <ProgressBar
                value={((quizIndex % QUIZ_QUESTIONS.length) / QUIZ_QUESTIONS.length) * 100}
              />
            </div>

            {/* Question */}
            <p className="text-sm font-semibold text-zinc-900 mb-5 leading-relaxed">
              {currentQuestion.question}
            </p>

            {/* Answer options */}
            <div className="space-y-2.5">
              {currentQuestion.answers.map((answer) => {
                let style =
                  "border border-zinc-200 hover:bg-zinc-50 text-zinc-700 cursor-pointer";
                if (answered && answer.id === selectedAnswer) {
                  style = answer.correct
                    ? "border border-zinc-900 bg-zinc-900 text-white cursor-default"
                    : "border border-zinc-300 bg-zinc-100 text-zinc-400 cursor-default line-through";
                } else if (answered && answer.correct) {
                  style = "border border-zinc-900 bg-zinc-50 text-zinc-900 cursor-default";
                } else if (answered) {
                  style = "border border-zinc-100 text-zinc-400 cursor-default";
                }
                return (
                  <button
                    key={answer.id}
                    onClick={() => handleAnswer(answer.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-left transition-all ${style}`}
                  >
                    <span
                      className={`w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                        answered && answer.correct
                          ? "border-zinc-900 bg-zinc-900 text-white"
                          : answered && answer.id === selectedAnswer && !answer.correct
                          ? "border-zinc-300 bg-zinc-200 text-zinc-400"
                          : "border-zinc-200 text-zinc-500"
                      }`}
                    >
                      {answer.id.toUpperCase()}
                    </span>
                    {answer.text}
                    {answered && answer.correct && (
                      <Check className="ml-auto w-4 h-4 flex-shrink-0" />
                    )}
                    {answered && answer.id === selectedAnswer && !answer.correct && (
                      <X className="ml-auto w-4 h-4 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback + next */}
            {answered && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 pt-5 border-t border-zinc-100 flex items-center justify-between"
              >
                <p className="text-sm text-zinc-600">
                  {currentQuestion.answers.find((a) => a.id === selectedAnswer)?.correct
                    ? "Richtig! Weiter so."
                    : "Leider falsch. Schau dir die Erklärung noch einmal an."}
                </p>
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  Weiter
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Score sidebar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="space-y-3"
          >
            <div className="bg-white border border-zinc-200 rounded-[10px] p-5">
              <h3 className="text-sm font-medium text-zinc-900 mb-4">Deine Statistik</h3>
              <div className="space-y-3">
                {[
                  { label: "Richtige Antworten", value: `${quizScore}` },
                  { label: "Beantwortet", value: `${quizIndex}` },
                  { label: "Genauigkeit", value: quizIndex > 0 ? `${Math.round((quizScore / quizIndex) * 100)}%` : "—" },
                  { label: "Beste Serie", value: "4" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0">
                    <span className="text-xs text-zinc-500">{stat.label}</span>
                    <span className="text-sm font-semibold text-zinc-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-[10px] p-5">
              <h3 className="text-sm font-medium text-zinc-900 mb-3">Quiz-Reihen</h3>
              <div className="space-y-2">
                {[
                  { title: "Pflegeprozess", count: "10 Fragen", done: true },
                  { title: "Hygiene", count: "8 Fragen", done: true },
                  { title: "Kommunikation", count: "12 Fragen", done: false },
                  { title: "Rechtliches", count: "6 Fragen", done: false },
                ].map((q) => (
                  <div
                    key={q.title}
                    className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0"
                  >
                    <div>
                      <p className="text-xs font-medium text-zinc-900">{q.title}</p>
                      <p className="text-[10px] text-zinc-400">{q.count}</p>
                    </div>
                    {q.done ? (
                      <CheckCircle className="w-4 h-4 text-zinc-900" />
                    ) : (
                      <span className="text-[10px] border border-zinc-200 rounded-full px-2 py-0.5 text-zinc-500">
                        Offen
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t border-zinc-200" />
      </div>

      {/* ── 5. Data Table Section ───────────────────────────────────── */}
      <Section id="ergebnisse">
        <SectionHeading
          title="Meine Ergebnisse"
          sub="Übersicht aller abgeschlossenen Quizze und Lerneinheiten"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-zinc-200 rounded-[10px] overflow-hidden"
        >
          {/* Table header */}
          <div className="px-4 py-3 border-b border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-zinc-500" />
              <span className="text-sm font-medium text-zinc-900">Ergebnis-Verlauf</span>
            </div>
            <button className="text-xs text-zinc-500 hover:text-zinc-900 border border-zinc-200 rounded-lg px-3 py-1.5 hover:bg-zinc-50 transition-colors">
              Exportieren
            </button>
          </div>

          {/* Desktop table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                    Datum
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                    Modul
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                    Score
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                    Status
                  </th>
                  <th className="text-right px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                    Aktion
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_DATA.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors"
                  >
                    <td className="px-5 py-3.5 text-sm text-zinc-600">{row.datum}</td>
                    <td className="px-5 py-3.5 text-sm font-medium text-zinc-900">
                      {row.modul}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-zinc-900">
                          {row.score}%
                        </span>
                        <div className="w-16 h-1 bg-zinc-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-zinc-900 rounded-full"
                            style={{ width: `${row.score}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      {row.bestanden ? (
                        <Badge filled>Bestanden</Badge>
                      ) : (
                        <Badge>Nicht bestanden</Badge>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button className="text-xs text-zinc-500 hover:text-zinc-900 underline underline-offset-2 transition-colors">
                        Details
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table footer */}
          <div className="px-5 py-3 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between">
            <p className="text-xs text-zinc-500">{TABLE_DATA.length} Einträge gesamt</p>
            <div className="flex items-center gap-2">
              <button className="text-xs border border-zinc-200 rounded-lg px-3 py-1.5 text-zinc-600 hover:bg-white transition-colors">
                Zurück
              </button>
              <span className="text-xs text-zinc-500">Seite 1 von 1</span>
              <button className="text-xs border border-zinc-200 rounded-lg px-3 py-1.5 text-zinc-600 hover:bg-white transition-colors">
                Weiter
              </button>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="border-t border-zinc-200" />
      </div>

      {/* ── 6. Settings Section ─────────────────────────────────────── */}
      <Section id="einstellungen">
        <SectionHeading
          title="Einstellungen"
          sub="Profil, Benachrichtigungen und Präferenzen"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Profile form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white border border-zinc-200 rounded-[10px] p-6"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
                <span className="text-sm font-semibold text-white">AM</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">{settingsName}</p>
                <p className="text-xs text-zinc-500">Pflegeschülerin · 2. Ausbildungsjahr</p>
              </div>
              <button className="ml-auto text-xs border border-zinc-200 rounded-lg px-3 py-1.5 hover:bg-zinc-50 transition-colors text-zinc-600">
                Foto ändern
              </button>
            </div>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  Vollständiger Name
                </label>
                <input
                  type="text"
                  value={settingsName}
                  onChange={(e) => setSettingsName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-zinc-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-0"
                />
              </div>

              {/* E-Mail */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  E-Mail-Adresse
                </label>
                <input
                  type="email"
                  value={settingsEmail}
                  onChange={(e) => setSettingsEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-zinc-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-0"
                />
              </div>

              {/* Institution */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  Pflegeschule / Institution
                </label>
                <input
                  type="text"
                  defaultValue="Pflegeschule Musterstadt"
                  className="w-full px-3 py-2 text-sm border border-zinc-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-0"
                />
              </div>

              {/* Ausbildungsjahr */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">
                  Ausbildungsjahr
                </label>
                <select className="w-full px-3 py-2 text-sm border border-zinc-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-0 text-zinc-700">
                  <option>1. Ausbildungsjahr</option>
                  <option selected>2. Ausbildungsjahr</option>
                  <option>3. Ausbildungsjahr</option>
                </select>
              </div>

              {/* Notification preferences */}
              <div className="pt-2">
                <label className="block text-sm font-medium text-zinc-700 mb-3">
                  Benachrichtigungsintervall
                </label>
                <SegmentedControl
                  options={["Täglich", "Wöchentlich", "Nie"]}
                  value={notifPref}
                  onChange={setNotifPref}
                />
              </div>

              {/* Save button */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handleSave}
                  className="px-5 py-2 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  Änderungen speichern
                </button>
                {saved && (
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5 text-sm text-zinc-600"
                  >
                    <Check className="w-4 h-4" />
                    Gespeichert
                  </motion.span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Notification toggles */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="space-y-3"
          >
            <div className="bg-white border border-zinc-200 rounded-[10px] p-5">
              <h3 className="text-sm font-medium text-zinc-900 mb-4">
                Benachrichtigungen
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "E-Mail-Benachrichtigungen",
                    sub: "Lernfortschritt & Erinnerungen",
                    value: notifEmail,
                    set: setNotifEmail,
                  },
                  {
                    label: "Push-Benachrichtigungen",
                    sub: "Neue Module & Quiz verfügbar",
                    value: notifPush,
                    set: setNotifPush,
                  },
                  {
                    label: "Wöchentliche Zusammenfassung",
                    sub: "Lernbericht jeden Montag",
                    value: notifWeekly,
                    set: setNotifWeekly,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2 border-b border-zinc-100 last:border-0"
                  >
                    <div>
                      <p className="text-xs font-medium text-zinc-900">{item.label}</p>
                      <p className="text-[10px] text-zinc-400 mt-0.5">{item.sub}</p>
                    </div>
                    <Toggle checked={item.value} onChange={item.set} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-[10px] p-5">
              <h3 className="text-sm font-medium text-zinc-900 mb-4">Lernziele</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-zinc-500">Tägliche Lernzeit</span>
                    <span className="font-medium text-zinc-900">30 Min</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="120"
                    defaultValue="30"
                    className="w-full h-1.5 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-zinc-900"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-zinc-500">Module pro Woche</span>
                    <span className="font-medium text-zinc-900">3</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    defaultValue="3"
                    className="w-full h-1.5 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-zinc-900"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-[10px] p-5">
              <h3 className="text-sm font-medium text-zinc-900 mb-3">Konto</h3>
              <div className="space-y-1.5">
                <button className="w-full text-left text-sm text-zinc-600 py-2 px-3 rounded-lg hover:bg-zinc-50 transition-colors flex items-center justify-between">
                  Passwort ändern
                  <ChevronRight className="w-4 h-4 text-zinc-400" />
                </button>
                <button className="w-full text-left text-sm text-zinc-600 py-2 px-3 rounded-lg hover:bg-zinc-50 transition-colors flex items-center justify-between">
                  Datenschutz
                  <ChevronRight className="w-4 h-4 text-zinc-400" />
                </button>
                <button className="w-full text-left text-sm text-red-500 py-2 px-3 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-between">
                  Konto löschen
                  <ChevronRight className="w-4 h-4 text-red-300" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-200 bg-white mt-10">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-zinc-900">
              Pflege-Lernplattform
            </span>
            <span className="text-zinc-300">·</span>
            <span className="text-xs text-zinc-400">
              Generalistische Pflegeausbildung · PflBG 2020
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/demo`}
              className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Zurück zur Demo-Übersicht
            </Link>
            <span className="text-zinc-200">|</span>
            <span className="text-xs text-zinc-400">Origin UI Design System</span>
          </div>
        </div>
      </footer>

      {/* ── Mobile Bottom Nav ────────────────────────────────────────── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-zinc-200">
        <div className="flex items-center justify-around px-2 py-2">
          {[
            { icon: Home, label: "Dashboard" },
            { icon: Layers, label: "Module" },
            { icon: BarChart2, label: "Fortschritt" },
            { icon: User, label: "Profil" },
            { icon: Settings, label: "Einstellungen" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setNavTab(label)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-colors ${
                navTab === label
                  ? "text-zinc-900"
                  : "text-zinc-400 hover:text-zinc-600"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[9px] font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Spacer for mobile nav */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
