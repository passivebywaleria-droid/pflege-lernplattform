"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Brain,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Flame,
  Heart,
  Home,
  LayoutDashboard,
  Lock,
  LogOut,
  Play,
  Settings,
  Star,
  Target,
  Trophy,
  User,
  Users,
  Bell,
  Moon,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  Award,
  MessageSquare,
  BarChart2,
  Stethoscope,
  Activity,
  Pill,
  Clipboard,
} from "lucide-react";

// ─── Utility ──────────────────────────────────────────────────────────────────

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── Chip / Badge ─────────────────────────────────────────────────────────────

type ChipColor = "blue" | "purple" | "green" | "orange" | "red" | "zinc";

const chipColors: Record<ChipColor, string> = {
  blue: "bg-[#006FEE]/10 text-[#006FEE]",
  purple: "bg-[#7828C8]/10 text-[#7828C8]",
  green: "bg-[#17C964]/10 text-[#17C964]",
  orange: "bg-[#F5A524]/10 text-[#F5A524]",
  red: "bg-[#F31260]/10 text-[#F31260]",
  zinc: "bg-zinc-100 text-zinc-600",
};

function Chip({
  children,
  color = "blue",
  dot,
  size = "sm",
  className,
}: {
  children: React.ReactNode;
  color?: ChipColor;
  dot?: boolean;
  size?: "xs" | "sm" | "md";
  className?: string;
}) {
  const sizes = { xs: "text-xs px-2 py-0.5", sm: "text-xs px-2.5 py-1", md: "text-sm px-3 py-1.5" };
  const dotColors: Record<ChipColor, string> = {
    blue: "bg-[#006FEE]",
    purple: "bg-[#7828C8]",
    green: "bg-[#17C964]",
    orange: "bg-[#F5A524]",
    red: "bg-[#F31260]",
    zinc: "bg-zinc-400",
  };
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full font-medium", chipColors[color], sizes[size], className)}>
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full", dotColors[color])} />}
      {children}
    </span>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("w-full h-2 bg-zinc-100 rounded-full overflow-hidden", className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-[#006FEE] to-[#7828C8]"
      />
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function Card({
  children,
  className,
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-white rounded-[14px] shadow-sm",
        hover && "hover:shadow-md transition-shadow duration-200 cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
}

// ─── Gradient Button ──────────────────────────────────────────────────────────

function GradientButton({
  children,
  className,
  onClick,
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 font-semibold text-white rounded-[12px]",
        "bg-gradient-to-r from-[#006FEE] to-[#7828C8]",
        "shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30",
        "hover:opacity-90 active:scale-[0.98] transition-all duration-150",
        sizes[size],
        className,
      )}
    >
      {children}
    </button>
  );
}

// ─── Flat Button ──────────────────────────────────────────────────────────────

function FlatButton({
  children,
  color = "blue",
  className,
  onClick,
}: {
  children: React.ReactNode;
  color?: "blue" | "red" | "purple" | "zinc";
  className?: string;
  onClick?: () => void;
}) {
  const colorMap = {
    blue: "bg-[#006FEE]/10 text-[#006FEE] hover:bg-[#006FEE]/15",
    red: "bg-[#F31260]/10 text-[#F31260] hover:bg-[#F31260]/15",
    purple: "bg-[#7828C8]/10 text-[#7828C8] hover:bg-[#7828C8]/15",
    zinc: "bg-zinc-100 text-zinc-700 hover:bg-zinc-200",
  };
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 font-medium text-sm rounded-[12px] px-4 py-2",
        "active:scale-[0.98] transition-all duration-150",
        colorMap[color],
        className,
      )}
    >
      {children}
    </button>
  );
}

// ─── FilledInput ──────────────────────────────────────────────────────────────

function FilledInput({
  label,
  type = "text",
  defaultValue,
  placeholder,
}: {
  label: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-zinc-700">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={cn(
          "w-full bg-zinc-100 rounded-[12px] px-4 py-2.5 text-sm text-zinc-900",
          "placeholder:text-zinc-400",
          "focus:outline-none focus:ring-2 focus:ring-[#006FEE] focus:bg-white",
          "transition-all duration-150",
        )}
      />
    </div>
  );
}

// ─── Toggle Switch ────────────────────────────────────────────────────────────

function Toggle({ label, description, defaultChecked = false }: { label: string; description?: string; defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="text-sm font-medium text-zinc-800">{label}</p>
        {description && <p className="text-xs text-zinc-500 mt-0.5">{description}</p>}
      </div>
      <button
        onClick={() => setOn(!on)}
        className={cn(
          "relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#006FEE] focus:ring-offset-2",
          on ? "bg-[#006FEE]" : "bg-zinc-200",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200",
            on ? "translate-x-5" : "translate-x-0",
          )}
        />
      </button>
    </div>
  );
}

// ─── Accordion Item ───────────────────────────────────────────────────────────

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4 border-b border-zinc-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="font-medium text-zinc-800 text-sm">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-zinc-400 flex-shrink-0 ml-4"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function Skeleton({ className }: { className?: string }) {
  return <div className={cn("bg-zinc-200 rounded-[14px] animate-pulse", className)} />;
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

function Avatar({ initials, size = "md", gradient = false }: { initials: string; size?: "sm" | "md" | "lg" | "xl"; gradient?: boolean }) {
  const sizes = { sm: "w-8 h-8 text-xs", md: "w-10 h-10 text-sm", lg: "w-14 h-14 text-lg", xl: "w-20 h-20 text-2xl" };
  const rings = { sm: "ring-2", md: "ring-2", lg: "ring-[3px]", xl: "ring-4" };
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-bold text-white flex-shrink-0",
        gradient ? "bg-gradient-to-br from-[#006FEE] to-[#7828C8]" : "bg-gradient-to-br from-[#006FEE] to-[#7828C8]",
        sizes[size],
        rings[size],
        "ring-offset-2 ring-[#006FEE]",
      )}
    >
      {initials}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const modules = [
  {
    ce: "CE 01",
    ceColor: "blue" as ChipColor,
    title: "Pflegedokumentation & Assessments",
    description: "Strukturierte Dokumentation, Pflegeprozess nach AEDl, rechtliche Grundlagen",
    progress: 72,
    lessons: 12,
    done: 9,
  },
  {
    ce: "CE 02",
    ceColor: "purple" as ChipColor,
    title: "Grundlagen der Pharmakologie",
    description: "Arzneimittelkunde, Verabreichungswege, Wechselwirkungen und Sicherheit",
    progress: 45,
    lessons: 18,
    done: 8,
  },
  {
    ce: "CE 03",
    ceColor: "green" as ChipColor,
    title: "Wundversorgung & Verbandstechnik",
    description: "Wundheilung, Verbandsmaterialien, chronische Wunden und Dekubitus-Prophylaxe",
    progress: 100,
    lessons: 10,
    done: 10,
  },
  {
    ce: "CE 04",
    ceColor: "orange" as ChipColor,
    title: "Grundpflege & Körperhygiene",
    description: "Vollwäsche, Mundpflege, Haarpflege, Lagerungstechniken nach Kinästhetik",
    progress: 20,
    lessons: 15,
    done: 3,
  },
  {
    ce: "CE 05",
    ceColor: "red" as ChipColor,
    title: "Notfallsituationen & Erste Hilfe",
    description: "Reanimation, anaphylaktischer Schock, Krampfanfall, Notfallmanagement",
    progress: 60,
    lessons: 8,
    done: 5,
  },
  {
    ce: "CE 06",
    ceColor: "zinc" as ChipColor,
    title: "Kommunikation & Beratung",
    description: "Pflegeberatung, Validation, Gesprächsführung mit Angehörigen und Patienten",
    progress: 0,
    lessons: 14,
    done: 0,
  },
];

const results = [
  { date: "19. März", module: "Wundversorgung", score: 94, passed: true },
  { date: "17. März", module: "Pflegedokumentation", score: 78, passed: true },
  { date: "14. März", module: "Pharmakologie Basis", score: 52, passed: false },
  { date: "12. März", module: "Grundpflege Lagerung", score: 88, passed: true },
  { date: "10. März", module: "Kommunikation & Validation", score: 71, passed: true },
];

const quizAnswers = [
  { id: "a", text: "Rumpfrötung, Blasenbildung und vollständiger Hautverlust bis zur Unterhaut" },
  { id: "b", text: "Rötung, Blasen, Nekrosen und Knochen- oder Muskelbeteiligung" },
  { id: "c", text: "Grad I: nicht wegdrückbare Rötung — Grad II: Blasen — Grad III: tiefer Gewebsverlust — Grad IV: Knochen/Muskel" },
  { id: "d", text: "Nur oberflächliche Hautrötung ohne weitere Stadien" },
];

const faqItems = [
  {
    question: "Was ist der Pflegeprozess nach AEDl?",
    answer: "Der Pflegeprozess nach AEDl (Aktivitäten und existentielle Erfahrungen des Lebens) ist ein strukturiertes Modell nach Monika Krohwinkel, das 13 Bereiche des menschlichen Lebens erfasst. Er umfasst Pflegeassessment, Pflegediagnose, Pflegeplanung, Durchführung und Evaluation.",
  },
  {
    question: "Welche rechtlichen Grundlagen gelten für die Pflegedokumentation?",
    answer: "Die Pflegedokumentation ist gesetzlich vorgeschrieben durch das Pflegeberufegesetz (PflBG), das SGB XI und die jeweiligen Heimgesetze der Bundesländer. Dokumentation muss vollständig, zeitnah, nachvollziehbar und fachgerecht erfolgen. Aufbewahrungspflicht: 10 Jahre.",
  },
  {
    question: "Wie funktioniert das Bewegungskonzept nach Kinästhetik?",
    answer: "Kinästhetik ist ein Lernkonzept, das die Bedeutung der Eigenbewegung für das menschliche Leben betont. In der Pflege werden Bewegungsmuster des Patienten unterstützt statt übernommen. Pflegende lernen, wie sie mit minimalem Kraftaufwand sanft und gelenkschonend mobilisieren können.",
  },
  {
    question: "Was sind die Stufen der Dekubitusentstehung?",
    answer: "Nach EPUAP/NPUAP gibt es 4 Kategorien: Kategorie I (nicht wegdrückbare Rötung), Kategorie II (teilweiser Hautverlust/Blase), Kategorie III (vollständiger Hautverlust ohne Faszien), Kategorie IV (vollständiger Gewebeverlust mit Knochen/Muskel/Sehnen). Zusätzlich: Nicht klassifizierbar und Tiefer Gewebeschaden.",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroUIDemo() {
  const { locale } = useParams();
  const [activeTab, setActiveTab] = useState<"alle" | "aktiv" | "abgeschlossen">("alle");
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [navActive, setNavActive] = useState("dashboard");
  const [showSkeleton, setShowSkeleton] = useState(false);

  const filteredModules = modules.filter((m) => {
    if (activeTab === "aktiv") return m.progress > 0 && m.progress < 100;
    if (activeTab === "abgeschlossen") return m.progress === 100;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F4F4F5] overflow-x-hidden">

      {/* ── Back Link ─────────────────────────────────────────────────────── */}
      <div className="bg-white px-6 py-2 border-b-0 shadow-none">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`/${locale}/demo`}
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-[#006FEE] transition-colors"
          >
            <ChevronRight size={12} className="rotate-180" />
            Zurück zur Übersicht
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          1. NAVIGATION BAR
      ════════════════════════════════════════════════════════════════════════ */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-[12px] bg-gradient-to-br from-[#006FEE] to-[#7828C8] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Stethoscope size={18} className="text-white" />
            </div>
            <span className="font-bold text-zinc-900 text-lg hidden sm:block">Pflege-Lernplattform</span>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
              { id: "module", label: "Module", icon: BookOpen },
              { id: "quiz", label: "Quiz", icon: Brain },
              { id: "profil", label: "Profil", icon: User },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setNavActive(id)}
                className={cn(
                  "inline-flex items-center gap-1.5 px-4 py-2 rounded-[12px] text-sm font-medium transition-all duration-150",
                  navActive === id
                    ? "bg-[#006FEE]/10 text-[#006FEE]"
                    : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800",
                )}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-[12px] text-zinc-500 hover:bg-zinc-100 transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#F31260]" />
            </button>
            <GradientButton size="sm">
              <Zap size={13} />
              Jetzt upgraden
            </GradientButton>
            <Avatar initials="ML" size="md" />
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════════
          2. HERO SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden py-20 px-6" style={{ contain: "layout" }}>
        {/* Decorative blobs */}
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#006FEE] rounded-full blur-3xl opacity-[0.07] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-[#7828C8] rounded-full blur-3xl opacity-[0.07] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-40 h-40 bg-[#17C964] rounded-full blur-3xl opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Chip color="blue" dot className="mb-6">
              Jetzt in der Beta — kostenlos testen
            </Chip>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight mb-6">
              Die smarteste Art,{" "}
              <span className="bg-gradient-to-r from-[#006FEE] to-[#7828C8] bg-clip-text text-transparent">
                Pflege zu lernen
              </span>
            </h1>

            <p className="text-xl text-zinc-500 leading-relaxed mb-10 max-w-2xl">
              KI-gestütztes Lernen nach PflBG 2020. Kompetenzeinheiten strukturiert,
              adaptiv und gamifiziert — für Auszubildende in der generalistischen Pflegeausbildung.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <GradientButton size="lg">
                <Play size={16} />
                Kostenlos starten
              </GradientButton>
              <FlatButton color="blue" className="px-6 py-3 text-base rounded-[12px]">
                Demo ansehen
                <ChevronRight size={16} />
              </FlatButton>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-zinc-500">
              <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-[#17C964]" /> Keine Kreditkarte nötig</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-[#17C964]" /> DSGVO-konform (Deutschland)</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-[#17C964]" /> Alle 30 Kompetenzeinheiten</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. STATS CARDS
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Clock, color: "blue" as ChipColor, iconBg: "bg-[#006FEE]/10 text-[#006FEE]", border: "border-[#006FEE]", value: "124", suffix: "h", label: "Lernstunden gesamt", sub: "+3h diese Woche" },
            { icon: BookOpen, color: "purple" as ChipColor, iconBg: "bg-[#7828C8]/10 text-[#7828C8]", border: "border-[#7828C8]", value: "12", suffix: "/30", label: "Module abgeschlossen", sub: "4 in Bearbeitung" },
            { icon: Trophy, color: "orange" as ChipColor, iconBg: "bg-[#F5A524]/10 text-[#F5A524]", border: "border-[#F5A524]", value: "87", suffix: "%", label: "Durchschnittlicher Score", sub: "Ø aller Quizze" },
            { icon: Flame, color: "red" as ChipColor, iconBg: "bg-[#F31260]/10 text-[#F31260]", border: "border-[#F31260]", value: "14", suffix: " Tage", label: "Aktueller Streak", sub: "Persönlicher Rekord!" },
          ].map(({ icon: Icon, color, iconBg, border, value, suffix, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className={cn("p-5 border-l-4", border)}>
                <div className="flex items-start justify-between mb-4">
                  <div className={cn("w-10 h-10 rounded-[10px] flex items-center justify-center", iconBg)}>
                    <Icon size={20} />
                  </div>
                  <Chip color={color} size="xs">{sub}</Chip>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-zinc-900">{value}</span>
                  <span className="text-lg font-semibold text-zinc-400">{suffix}</span>
                </div>
                <p className="text-sm text-zinc-500 mt-1">{label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. MODULE GRID
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">Meine Module</h2>
            <p className="text-sm text-zinc-500 mt-1">Generalistischer Pflegeberuf nach PflBG 2020</p>
          </div>
          <FlatButton color="blue">
            <TrendingUp size={14} />
            Alle Module
          </FlatButton>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-0 border-b border-zinc-200 mb-6 overflow-x-auto scrollbar-none">
          {[
            { id: "alle", label: "Alle Module", count: 6 },
            { id: "aktiv", label: "Aktiv", count: 4 },
            { id: "abgeschlossen", label: "Abgeschlossen", count: 1 },
          ].map(({ id, label, count }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as typeof activeTab)}
              className={cn(
                "relative px-3 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap flex-shrink-0",
                activeTab === id ? "text-[#006FEE]" : "text-zinc-500 hover:text-zinc-800",
              )}
            >
              {label}
              <span
                className={cn(
                  "ml-2 text-xs px-1.5 py-0.5 rounded-full",
                  activeTab === id ? "bg-[#006FEE]/10 text-[#006FEE]" : "bg-zinc-100 text-zinc-500",
                )}
              >
                {count}
              </span>
              {activeTab === id && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#006FEE] rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Module Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredModules.map((mod, i) => (
              <motion.div
                key={mod.ce}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
              >
                <Card hover className="p-5 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <Chip color={mod.ceColor}>{mod.ce}</Chip>
                    {mod.progress === 100 && (
                      <span className="flex items-center gap-1 text-xs text-[#17C964] font-medium">
                        <CheckCircle size={13} />
                        Fertig
                      </span>
                    )}
                    {mod.progress === 0 && (
                      <Chip color="zinc" size="xs">Neu</Chip>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold text-zinc-900 text-sm leading-snug mb-1.5">{mod.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">{mod.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                      <span>{mod.done} / {mod.lessons} Lektionen</span>
                      <span className="font-semibold text-zinc-700">{mod.progress}%</span>
                    </div>
                    <ProgressBar value={mod.progress} />
                  </div>

                  <GradientButton size="sm" className="w-full justify-center">
                    {mod.progress === 0 ? (
                      <><Play size={13} /> Starten</>
                    ) : mod.progress === 100 ? (
                      <><Trophy size={13} /> Wiederholen</>
                    ) : (
                      <><Play size={13} /> Fortsetzen</>
                    )}
                  </GradientButton>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. LESSON CONTENT SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center flex-wrap gap-2 mb-6 text-sm">
            <Chip color="zinc" size="xs"><Home size={10} />Home</Chip>
            <ChevronRight size={12} className="text-zinc-300" />
            <Chip color="blue" size="xs">CE 01</Chip>
            <ChevronRight size={12} className="text-zinc-300" />
            <Chip color="zinc" size="xs">Lektion 3</Chip>
            <ChevronRight size={12} className="text-zinc-300" />
            <span className="text-zinc-600 text-xs font-medium">Pflegedokumentation</span>
          </div>

          <Card className="p-4 sm:p-8">
            {/* Lesson Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Chip color="blue">CE 01 — Lektion 3</Chip>
                  <Chip color="green" dot>Aktiv</Chip>
                </div>
                <h2 className="text-2xl font-bold text-zinc-900">Pflegedokumentation</h2>
                <p className="text-zinc-500 mt-1 text-sm">Rechtliche Grundlagen & strukturierte Erfassung im Pflegeprozess</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Clock size={13} />
                12 Min. Lesezeit
              </div>
            </div>

            {/* Content */}
            <div className="space-y-5 text-sm text-zinc-700 leading-relaxed">
              <p>
                Die <strong className="text-zinc-900">Pflegedokumentation</strong> ist ein zentrales Instrument der professionellen Pflege.
                Sie dient der Informationssicherung, Kommunikation im Team, rechtlichen Absicherung und
                der Qualitätssicherung. Eine vollständige, nachvollziehbare Dokumentation ist rechtlich vorgeschrieben
                und bildet die Grundlage für alle pflegerischen Entscheidungen.
              </p>

              {/* Blue Callout */}
              <div className="bg-blue-50 border-l-4 border-[#006FEE] rounded-r-[12px] p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#006FEE]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#006FEE] text-xs font-bold">i</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#006FEE] text-xs mb-1 uppercase tracking-wide">Wichtiger Hinweis</p>
                    <p className="text-zinc-700 text-sm">
                      Nach §113c SGB XI sind Pflegeeinrichtungen verpflichtet, ein einrichtungsinternes Qualitätsmanagement
                      zu führen. Die Pflegedokumentation ist integraler Bestandteil davon und muss für mindestens
                      <strong> 10 Jahre aufbewahrt</strong> werden.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Der <strong className="text-zinc-900">Pflegeprozess</strong> nach Monika Krohwinkel (AEDl-Modell) strukturiert die
                Dokumentation in sechs Phasen: Assessment, Diagnose, Planung, Durchführung, Evaluation und
                Berichtserstattung. Moderne Pflegesoftware unterstützt diesen Prozess digital.
              </p>

              {/* Warning Callout */}
              <div className="bg-orange-50 border-l-4 border-[#F5A524] rounded-r-[12px] p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F5A524]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#F5A524] text-xs font-bold">!</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#F5A524] text-xs mb-1 uppercase tracking-wide">Prüfungsrelevant</p>
                    <p className="text-zinc-700 text-sm">
                      Im Examen werden häufig Fragen zur korrekten Formulierung von Pflegeproblemen,
                      Pflegezielen und Maßnahmen gestellt. Achte auf die SMART-Formel bei der Zielformulierung.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Terms */}
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-3">Schlüsselbegriffe</p>
                <div className="flex flex-wrap gap-2">
                  {["AEDl-Modell", "Pflegeprozess", "Pflegediagnose", "SMART-Ziele", "SIS®", "Pflegebericht", "Assessment", "Evaluation"].map((term) => (
                    <Chip key={term} color="blue" size="xs">{term}</Chip>
                  ))}
                </div>
              </div>

              {/* Success callout */}
              <div className="bg-green-50 border-l-4 border-[#17C964] rounded-r-[12px] p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#17C964] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#17C964] text-xs mb-1 uppercase tracking-wide">Praxistipp</p>
                    <p className="text-zinc-700 text-sm">
                      Das Strukturierte Informationssystem (SIS®) hat in vielen Einrichtungen die klassische
                      Pflegeplanung abgelöst. Es reduziert den Dokumentationsaufwand erheblich und fokussiert
                      auf individuelle Risiken und Ressourcen des Pflegebedürftigen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="mt-8">
              <h3 className="text-base font-semibold text-zinc-900 mb-2">Häufige Fragen</h3>
              <p className="text-sm text-zinc-400 mb-4">Klicke auf eine Frage, um die Antwort zu sehen</p>
              <div className="bg-zinc-50 rounded-[14px] px-5">
                {faqItems.map((item) => (
                  <AccordionItem key={item.question} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>

            {/* Lesson Footer */}
            <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <FlatButton color="zinc">
                  <Download size={14} />
                  PDF herunterladen
                </FlatButton>
                <FlatButton color="zinc">
                  <FileText size={14} />
                  Notizen
                </FlatButton>
              </div>
              <GradientButton>
                Zum Quiz
                <ChevronRight size={14} />
              </GradientButton>
            </div>
          </Card>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. QUIZ SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="max-w-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-zinc-900">Quiz — CE 03</h2>
            <Chip color="orange" dot>Frage 3 von 8</Chip>
          </div>

          <Card className="overflow-hidden">
            {/* Gradient top border */}
            <div className="h-1 w-full bg-gradient-to-r from-[#006FEE] to-[#7828C8]" />

            <div className="p-6">
              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <span>Fortschritt</span>
                  <span>37,5%</span>
                </div>
                <ProgressBar value={37.5} />
              </div>

              {/* Score display */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <div className="flex items-center gap-1.5">
                  <Trophy size={14} className="text-[#F5A524]" />
                  <span className="text-xs text-zinc-500">Punkte:</span>
                  <Chip color="orange" size="xs">200 XP</Chip>
                </div>
                <div className="flex items-center gap-1.5">
                  <Flame size={14} className="text-[#F31260]" />
                  <span className="text-xs text-zinc-500">Streak:</span>
                  <Chip color="red" size="xs">14 Tage</Chip>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-[#7828C8]" />
                  <Chip color="purple" size="xs">Schwierig</Chip>
                </div>
              </div>

              {/* Question */}
              <div className="bg-zinc-50 rounded-[12px] p-4 mb-5">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-2">Frage 3</p>
                <p className="text-base font-semibold text-zinc-900 leading-snug">
                  Welche Aussage beschreibt die vier Kategorien eines Dekubitus nach der
                  EPUAP/NPUAP-Klassifikation korrekt?
                </p>
              </div>

              {/* Answers */}
              <div className="space-y-3 mb-6">
                {quizAnswers.map((ans) => (
                  <motion.button
                    key={ans.id}
                    onClick={() => setSelectedAnswer(ans.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={cn(
                      "w-full text-left p-4 rounded-[12px] border-l-4 transition-all duration-150",
                      "bg-white shadow-sm hover:shadow-md",
                      selectedAnswer === ans.id
                        ? "border-[#006FEE] bg-[#006FEE]/5 shadow-md shadow-blue-500/10"
                        : "border-transparent hover:border-zinc-200",
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                          selectedAnswer === ans.id
                            ? "bg-[#006FEE] text-white"
                            : "bg-zinc-100 text-zinc-500",
                        )}
                      >
                        {ans.id.toUpperCase()}
                      </span>
                      <span
                        className={cn(
                          "text-sm leading-relaxed transition-colors",
                          selectedAnswer === ans.id ? "text-zinc-900 font-medium" : "text-zinc-700",
                        )}
                      >
                        {ans.text}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Quiz Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <FlatButton color="zinc">Überspringen</FlatButton>
                <GradientButton className={selectedAnswer ? "" : "opacity-50 cursor-not-allowed"}>
                  Antwort bestätigen
                  <ChevronRight size={14} />
                </GradientButton>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. ACTIVITY / RESULTS SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900">Letzte Ergebnisse</h2>
              <p className="text-sm text-zinc-500 mt-1">Deine Quiz-Historie der letzten 14 Tage</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSkeleton(!showSkeleton)}
                className="text-xs text-zinc-400 hover:text-[#006FEE] transition-colors"
              >
                {showSkeleton ? "Echte Daten" : "Skeleton zeigen"}
              </button>
              <FlatButton color="blue">
                <BarChart2 size={14} />
                Bericht
              </FlatButton>
            </div>
          </div>

          <Card className="divide-y divide-zinc-50">
            {showSkeleton
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="p-4 flex items-center gap-4">
                    <Skeleton className="w-16 h-6 rounded-full" />
                    <Skeleton className="h-4 flex-1 rounded-full" />
                    <Skeleton className="w-12 h-6 rounded-full" />
                    <Skeleton className="w-20 h-6 rounded-full" />
                  </div>
                ))
              : results.map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 flex items-center gap-4 hover:bg-zinc-50 transition-colors rounded-[14px]"
                  >
                    <Chip color="zinc" size="xs" className="flex-shrink-0 w-20 justify-center">
                      {result.date}
                    </Chip>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-zinc-800 truncate">{result.module}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className={cn(
                          "text-sm font-bold px-2.5 py-0.5 rounded-full",
                          result.score >= 80
                            ? "bg-gradient-to-r from-[#006FEE] to-[#7828C8] text-white"
                            : result.score >= 60
                            ? "bg-[#F5A524]/10 text-[#F5A524]"
                            : "bg-[#F31260]/10 text-[#F31260]",
                        )}
                      >
                        {result.score}%
                      </span>
                      <Chip
                        color={result.passed ? "green" : "red"}
                        dot
                        size="xs"
                      >
                        {result.passed ? "Bestanden" : "Nicht bestanden"}
                      </Chip>
                    </div>
                  </motion.div>
                ))}
          </Card>

          {/* Average Row */}
          {!showSkeleton && (
            <div className="mt-3 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#006FEE]/5 to-[#7828C8]/5 rounded-[12px]">
              <span className="text-sm text-zinc-500 font-medium">Gesamtdurchschnitt</span>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold bg-gradient-to-r from-[#006FEE] to-[#7828C8] bg-clip-text text-transparent">
                  76,6%
                </span>
                <Chip color="green" dot size="xs">+4% vs. Vormonat</Chip>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. PROFILE / SETTINGS SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-6 pb-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Profil & Einstellungen</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Left — Avatar Card */}
            <Card className="p-6 flex flex-col items-center gap-4 text-center">
              <div className="relative">
                <Avatar initials="ML" size="xl" />
                <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-zinc-50 transition-colors">
                  <Settings size={12} className="text-zinc-600" />
                </button>
              </div>
              <div>
                <p className="font-bold text-zinc-900 text-lg">Maria Lehr</p>
                <p className="text-sm text-zinc-500">maria.lehr@pflegeschule.de</p>
              </div>
              <div className="w-full space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500">Level 7 — Fortgeschrittene</span>
                  <span className="font-semibold text-[#006FEE]">72%</span>
                </div>
                <ProgressBar value={72} />
              </div>
              <div className="flex flex-wrap justify-center gap-1.5">
                <Chip color="blue" size="xs"><Award size={9} />Top-Lernerin</Chip>
                <Chip color="orange" size="xs"><Flame size={9} />14-Tage-Streak</Chip>
                <Chip color="green" size="xs"><Trophy size={9} />3 Badges</Chip>
              </div>
              <FlatButton color="red" className="w-full justify-center">
                <LogOut size={14} />
                Abmelden
              </FlatButton>
            </Card>

            {/* Right — Settings Form */}
            <div className="md:col-span-2 space-y-4">
              {/* Personal Info */}
              <Card className="p-6">
                <h3 className="font-semibold text-zinc-900 mb-4">Persönliche Daten</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FilledInput label="Vorname" defaultValue="Maria" />
                  <FilledInput label="Nachname" defaultValue="Lehr" />
                  <FilledInput label="E-Mail" type="email" defaultValue="maria.lehr@pflegeschule.de" />
                  <FilledInput label="Schule / Einrichtung" defaultValue="Pflegeschule am Klinikum" />
                  <div className="sm:col-span-2">
                    <FilledInput label="Ausbildungsjahr" placeholder="z.B. 1. Ausbildungsjahr" />
                  </div>
                </div>
                <div className="flex justify-end mt-5">
                  <GradientButton>
                    Änderungen speichern
                  </GradientButton>
                </div>
              </Card>

              {/* Notifications */}
              <Card className="p-6">
                <h3 className="font-semibold text-zinc-900 mb-2">Benachrichtigungen</h3>
                <p className="text-xs text-zinc-400 mb-4">Steuere, worüber du informiert werden möchtest</p>
                <div className="divide-y divide-zinc-100">
                  <Toggle label="Lern-Erinnerungen" description="Tägliche Erinnerung zum Lernen um 18:00 Uhr" defaultChecked />
                  <Toggle label="Quiz-Resultate" description="Benachrichtigung nach Abschluss eines Quiz" defaultChecked />
                  <Toggle label="Neue Lernmaterialien" description="Wenn neue Lektionen verfügbar sind" />
                  <Toggle label="Wöchentliche Zusammenfassung" description="Lernstatistik jeden Sonntag per E-Mail" defaultChecked />
                  <Toggle label="Promotionen & Angebote" description="Angebote und Neuigkeiten zur Plattform" />
                </div>
              </Card>

              {/* Preferences */}
              <Card className="p-6">
                <h3 className="font-semibold text-zinc-900 mb-2">Lerneinstellungen</h3>
                <p className="text-xs text-zinc-400 mb-4">Passe dein Lernerlebnis an</p>
                <div className="divide-y divide-zinc-100">
                  <Toggle label="Adaptives Lernen (KI)" description="KI passt Schwierigkeit automatisch an" defaultChecked />
                  <Toggle label="Audio-Ausgabe" description="Text-to-Speech für Lernmaterialien" />
                  <Toggle label="Erklärungen nach Quiz" description="Zeige ausführliche Erklärungen nach jedem Quiz" defaultChecked />
                  <Toggle label="Gamification" description="XP, Streaks, Badges und Ranglisten aktivieren" defaultChecked />
                </div>
              </Card>

              {/* Danger Zone */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <Shield size={16} className="text-[#F31260]" />
                  <h3 className="font-semibold text-[#F31260]">Gefahrenzone</h3>
                </div>
                <p className="text-xs text-zinc-500 mb-5">Diese Aktionen können nicht rückgängig gemacht werden.</p>
                <div className="flex flex-wrap gap-3">
                  <FlatButton color="red">
                    <Lock size={13} />
                    Passwort ändern
                  </FlatButton>
                  <FlatButton color="red">
                    Lernfortschritt zurücksetzen
                  </FlatButton>
                  <FlatButton color="red">
                    Konto löschen
                  </FlatButton>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          COMPONENT SHOWCASE — Extra Patterns
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">Design-System Komponenten</h2>
            <p className="text-zinc-500 text-sm">Alle HeroUI-Patterns auf einen Blick</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Buttons */}
            <Card className="p-6 space-y-4">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Buttons</p>
              <div className="space-y-3">
                <GradientButton size="lg" className="w-full justify-center">Gradient Button</GradientButton>
                <GradientButton size="md" className="w-full justify-center"><Star size={14} />Mit Icon</GradientButton>
                <FlatButton color="blue" className="w-full justify-center">Flat Blue Button</FlatButton>
                <FlatButton color="purple" className="w-full justify-center">Flat Purple Button</FlatButton>
                <FlatButton color="red" className="w-full justify-center">Flat Danger Button</FlatButton>
                <FlatButton color="zinc" className="w-full justify-center">Flat Zinc Button</FlatButton>
              </div>
            </Card>

            {/* Chips & Badges */}
            <Card className="p-6 space-y-4">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Chips & Badges</p>
              <div className="flex flex-wrap gap-2">
                <Chip color="blue">Blau</Chip>
                <Chip color="purple">Lila</Chip>
                <Chip color="green">Grün</Chip>
                <Chip color="orange">Orange</Chip>
                <Chip color="red">Rot</Chip>
                <Chip color="zinc">Grau</Chip>
                <Chip color="blue" dot>Mit Punkt</Chip>
                <Chip color="green" dot>Online</Chip>
                <Chip color="red" dot>Offline</Chip>
                <Chip color="orange" size="xs">Extra klein</Chip>
                <Chip color="blue" size="md">Medium</Chip>
                <Chip color="purple" size="md"><Trophy size={12} />Mit Icon</Chip>
              </div>
            </Card>

            {/* Avatars */}
            <Card className="p-6 space-y-4">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Avatare</p>
              <div className="flex items-end gap-4 flex-wrap">
                <Avatar initials="ML" size="xl" />
                <Avatar initials="PF" size="lg" />
                <Avatar initials="AB" size="md" />
                <Avatar initials="CD" size="sm" />
              </div>
              <div className="flex items-center gap-3 mt-2">
                {["ML", "PF", "AB", "CD", "EF"].map((init, i) => (
                  <div key={init} style={{ marginLeft: i > 0 ? "-10px" : "0" }} className="relative">
                    <Avatar initials={init} size="sm" />
                  </div>
                ))}
                <Chip color="zinc" size="xs">+12 weitere</Chip>
              </div>
            </Card>

            {/* Progress & Stats */}
            <Card className="p-6 space-y-4">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Progress Bars</p>
              <div className="space-y-4">
                {[
                  { label: "CE 01 — Dokumentation", value: 72, color: "blue" },
                  { label: "CE 02 — Pharmakologie", value: 45, color: "purple" },
                  { label: "CE 03 — Wundversorgung", value: 100, color: "green" },
                  { label: "CE 04 — Grundpflege", value: 20, color: "orange" },
                ].map(({ label, value }) => (
                  <div key={label} className="space-y-1.5">
                    <div className="flex justify-between text-xs text-zinc-500">
                      <span>{label}</span>
                      <span className="font-semibold">{value}%</span>
                    </div>
                    <ProgressBar value={value} />
                  </div>
                ))}
              </div>
            </Card>

            {/* Skeleton States */}
            <Card className="p-6 space-y-4">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Skeleton Loading</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-3 w-3/4 rounded-full" />
                    <Skeleton className="h-3 w-1/2 rounded-full" />
                  </div>
                </div>
                <Skeleton className="h-24 w-full" />
                <div className="grid grid-cols-3 gap-2">
                  <Skeleton className="h-8 rounded-full" />
                  <Skeleton className="h-8 rounded-full" />
                  <Skeleton className="h-8 rounded-full" />
                </div>
              </div>
            </Card>

            {/* Tooltips & Callouts */}
            <Card className="p-6 space-y-4">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Callouts & Info</p>
              <div className="space-y-3">
                <div className="relative group inline-block">
                  <FlatButton color="blue">Hover für Tooltip</FlatButton>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Das ist ein HeroUI Tooltip!
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900" />
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-[#006FEE] rounded-r-[12px] p-3 text-xs text-zinc-700">
                  Info-Callout mit blauer Hervorhebung
                </div>
                <div className="bg-green-50 border-l-4 border-[#17C964] rounded-r-[12px] p-3 text-xs text-zinc-700">
                  Erfolg-Callout — Aufgabe abgeschlossen!
                </div>
                <div className="bg-orange-50 border-l-4 border-[#F5A524] rounded-r-[12px] p-3 text-xs text-zinc-700">
                  Warnung-Callout — Bitte überprüfen
                </div>
                <div className="bg-red-50 border-l-4 border-[#F31260] rounded-r-[12px] p-3 text-xs text-zinc-700">
                  Fehler-Callout — Zugang gesperrt
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FEATURE TEASER
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F4F4F5] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Chip color="purple" dot className="mb-4">Alle Features im Überblick</Chip>
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">
              Alles was du für deine{" "}
              <span className="bg-gradient-to-r from-[#006FEE] to-[#7828C8] bg-clip-text text-transparent">
                Pflegeausbildung
              </span>{" "}
              brauchst
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-sm">
              Von der ersten Stunde bis zum Examen — strukturiert nach PflBG 2020
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Brain, color: "blue" as ChipColor, title: "KI-Tutor", desc: "Adaptive Lernpfade, die sich deinem Wissensstand anpassen" },
              { icon: Clipboard, color: "purple" as ChipColor, title: "30 CEs strukturiert", desc: "Alle Kompetenzeinheiten nach PflBG vollständig abgedeckt" },
              { icon: Activity, color: "green" as ChipColor, title: "Echtzeit-Analytics", desc: "Lernfortschritt live verfolgen und Schwächen identifizieren" },
              { icon: Users, color: "orange" as ChipColor, title: "Schullizenzen", desc: "Für Pflegeschulen: 149€ / Schüler / Jahr — inkl. Lehrer-Dashboard" },
              { icon: Pill, color: "red" as ChipColor, title: "Pharmakologie-DB", desc: "Interaktive Arzneimitteldatenbank mit über 500 Wirkstoffen" },
              { icon: MessageSquare, color: "blue" as ChipColor, title: "KI-Chatbot", desc: "Fragen stellen wie bei einem Tutor — 24/7 verfügbar" },
              { icon: Globe, color: "purple" as ChipColor, title: "Mehrsprachig", desc: "Unterstützung für internationale Pflegeauszubildende (DE/EN)" },
              { icon: Award, color: "green" as ChipColor, title: "Zertifikate", desc: "Nach Abschluss von CEs offizielle Teilnahmezertifikate erhalten" },
            ].map(({ icon: Icon, color, title, desc }) => (
              <Card key={title} hover className="p-5">
                <div className={cn(
                  "w-10 h-10 rounded-[10px] flex items-center justify-center mb-4",
                  chipColors[color],
                )}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-zinc-900 text-sm mb-1.5">{title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white py-20 px-6 overflow-hidden" style={{ contain: "layout" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#006FEE]/5 via-white to-[#7828C8]/5 pointer-events-none" />
        <div className="absolute top-10 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-[#006FEE] rounded-full blur-3xl opacity-[0.06] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-24 h-24 sm:w-48 sm:h-48 bg-[#7828C8] rounded-full blur-3xl opacity-[0.06] pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative">
          <Chip color="blue" dot className="mb-6">Jetzt kostenlos starten</Chip>
          <h2 className="text-4xl font-bold text-zinc-900 mb-5">
            Bereit für smarteres Lernen?
          </h2>
          <p className="text-zinc-500 mb-8 text-lg leading-relaxed">
            Starte noch heute deine kostenlose Testphase. Keine Kreditkarte erforderlich.
            Alle 30 Kompetenzeinheiten sofort verfügbar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GradientButton size="lg">
              <Play size={16} />
              Kostenlos testen — 30 Tage
            </GradientButton>
            <FlatButton color="blue" className="px-6 py-3 text-base">
              Für Schulen anfragen
              <ChevronRight size={16} />
            </FlatButton>
          </div>
          <p className="text-xs text-zinc-400 mt-6">
            Bereits über 1.200 Pflegeauszubildende nutzen die Plattform ·{" "}
            <span className="text-[#17C964]">DSGVO-konform</span> · Server in Deutschland
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          9. FOOTER
      ════════════════════════════════════════════════════════════════════════ */}
      <footer className="bg-white">
        {/* Gradient line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#006FEE] via-[#7828C8] to-[#17C964]" />

        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-[10px] bg-gradient-to-br from-[#006FEE] to-[#7828C8] flex items-center justify-center">
                  <Stethoscope size={15} className="text-white" />
                </div>
                <span className="font-bold text-zinc-900">Pflege-Lernplattform</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Die adaptive Lernplattform für die generalistische Pflegeausbildung nach PflBG 2020.
              </p>
              <div className="flex gap-2 mt-4">
                <Chip color="green" dot size="xs">DSGVO-konform</Chip>
                <Chip color="blue" size="xs">Made in DE</Chip>
              </div>
            </div>

            {[
              {
                title: "Plattform",
                items: ["Dashboard", "Module", "Quiz", "KI-Tutor", "Analytics"],
              },
              {
                title: "Für Schulen",
                items: ["Schullizenzen", "Lehrer-Dashboard", "Reporting", "Onboarding", "Support"],
              },
              {
                title: "Rechtliches",
                items: ["Datenschutz", "Impressum", "AGB", "Cookie-Policy"],
              },
            ].map(({ title, items }) => (
              <div key={title}>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-3">{title}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-zinc-500 hover:text-[#006FEE] transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
            <span>© 2026 Pflege-Lernplattform GmbH · Alle Rechte vorbehalten</span>
            <div className="flex items-center gap-4">
              <span>Hosting: Hetzner Cloud (Frankfurt)</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-[#17C964] rounded-full" />
                Alle Systeme aktiv
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
