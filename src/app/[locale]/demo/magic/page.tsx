"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  motion,
  useSpring,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

// ─────────────────────────────────────────────
// MAGIC UI COMPONENTS — all inline
// ─────────────────────────────────────────────

// 1. ShimmerText
function ShimmerText({
  children,
  className = "",
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  return (
    <>
      <style>{`
        @keyframes shimmer-slide {
          0%   { background-position: 100% 50%; }
          100% { background-position: -100% 50%; }
        }
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #71717a 40%,
            rgba(255,255,255,0.9) 50%,
            #71717a 60%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer-slide 3s linear infinite;
        }
      `}</style>
      <Tag className={`shimmer-text ${className}`}>{children}</Tag>
    </>
  );
}

// 2. NumberTicker
function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, {
    stiffness: 60,
    damping: 20,
    duration: duration * 1000,
  });
  const display = useTransform(spring, (v) => Math.round(v).toLocaleString("de-DE"));

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, value, spring]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

// 3. AnimatedGradientBorder
function AnimatedGradientBorder({
  children,
  className = "",
  innerClassName = "",
  borderWidth = 2,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  borderWidth?: number;
}) {
  return (
    <>
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes rotate-gradient {
          to { --angle: 360deg; }
        }
        .agb-wrapper {
          background: conic-gradient(
            from var(--angle),
            #3b82f6,
            #8b5cf6,
            #ec4899,
            #3b82f6
          );
          animation: rotate-gradient 3s linear infinite;
          border-radius: inherit;
          padding: ${borderWidth}px;
        }
      `}</style>
      <div className={`agb-wrapper max-w-full ${className}`}>
        <div className={`bg-white h-full w-full ${innerClassName}`} style={{ borderRadius: "inherit" }}>
          {children}
        </div>
      </div>
    </>
  );
}

// 4. OrbitingCircles
function OrbitingCircles({
  items,
  radius = 120,
  centerContent,
  size = 320,
}: {
  items: { icon: string; label: string; color: string }[];
  radius?: number;
  centerContent?: React.ReactNode;
  size?: number;
}) {
  return (
    <>
      <style>{`
        @keyframes orbit {
          from { rotate: 0deg; }
          to   { rotate: 360deg; }
        }
        @keyframes orbit-reverse {
          from { rotate: 360deg; }
          to   { rotate: 0deg; }
        }
        .orbit-container {
          animation: orbit 12s linear infinite;
          transform-origin: center center;
        }
        .orbit-container-slow {
          animation: orbit 20s linear infinite;
          transform-origin: center center;
        }
        .orbit-item {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      `}</style>
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Center */}
        <div className="absolute z-10 flex items-center justify-center">
          {centerContent}
        </div>

        {/* Orbit rings */}
        <div
          className="absolute rounded-full border border-blue-100"
          style={{ width: radius * 2, height: radius * 2 }}
        />
        <div
          className="absolute rounded-full border border-violet-100"
          style={{ width: (radius + 60) * 2, height: (radius + 60) * 2 }}
        />

        {/* Orbiting items — inner ring */}
        {items.slice(0, Math.ceil(items.length / 2)).map((item, i) => {
          const total = Math.ceil(items.length / 2);
          const startAngle = (i / total) * 360;
          const delay = -(i / total) * 12;
          const rad = (startAngle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          return (
            <div
              key={`inner-${i}`}
              className="orbit-container absolute"
              style={{
                width: radius * 2,
                height: radius * 2,
                animationDelay: `${delay}s`,
              }}
            >
              <div
                className="orbit-item"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
              >
                <div
                  className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center shadow-md`}
                >
                  <span className="text-lg">{item.icon}</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Orbiting items — outer ring */}
        {items.slice(Math.ceil(items.length / 2)).map((item, i) => {
          const outerRadius = radius + 60;
          const total = items.length - Math.ceil(items.length / 2);
          const startAngle = (i / total) * 360 + 30;
          const delay = -(i / total) * 20;
          const rad = (startAngle * Math.PI) / 180;
          const x = Math.cos(rad) * outerRadius;
          const y = Math.sin(rad) * outerRadius;
          return (
            <div
              key={`outer-${i}`}
              className="orbit-container-slow absolute"
              style={{
                width: outerRadius * 2,
                height: outerRadius * 2,
                animationDelay: `${delay}s`,
              }}
            >
              <div
                className="orbit-item"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
              >
                <div
                  className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center shadow-sm`}
                >
                  <span className="text-sm">{item.icon}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// 5. Marquee
function Marquee({
  items,
  direction = "left",
  speed = 40,
  className = "",
}: {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}) {
  const duration = items.length * speed * 0.1;
  return (
    <>
      <style>{`
        @keyframes marquee-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
        @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .marquee-track-left  { animation: marquee-left  ${duration}s linear infinite; }
        .marquee-track-right { animation: marquee-right ${duration}s linear infinite; }
      `}</style>
      <div className={`overflow-hidden ${className}`}>
        <div
          className={`flex w-max ${
            direction === "left" ? "marquee-track-left" : "marquee-track-right"
          }`}
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// 6. BorderBeam
function BorderBeam({
  children,
  className = "",
  active = true,
}: {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}) {
  return (
    <>
      <style>{`
        @keyframes beam-travel {
          0%   { offset-distance: 0%; opacity: 1; }
          80%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .border-beam-card {
          position: relative;
          overflow: hidden;
        }
        .border-beam-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.5px;
          background: linear-gradient(
            var(--beam-angle, 0deg),
            transparent 40%,
            #3b82f6 50%,
            #8b5cf6 60%,
            transparent 70%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: beam-rotate 3s linear infinite;
        }
        @keyframes beam-rotate {
          to { --beam-angle: 360deg; }
        }
        @property --beam-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
      <div className={`border-beam-card ${active ? "" : "before:hidden"} ${className}`}>
        {children}
      </div>
    </>
  );
}

// 7. Particles
function Particles({ count = 30 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 10, -10, 5, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity * 0.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// 8. Ripple
function RippleButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const nextId = useRef(0);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = nextId.current++;
      setRipples((prev) => [...prev, { id, x, y }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 700);
      onClick?.();
    },
    [onClick]
  );

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{ left: r.x - 10, top: r.y - 10, width: 20, height: 20 }}
          animate={{ scale: 15, opacity: 0 }}
          initial={{ scale: 0, opacity: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      ))}
    </button>
  );
}

// 9. AnimatedBeam
function AnimatedBeam({
  fromRef,
  toRef,
  containerRef,
}: {
  fromRef: React.RefObject<HTMLDivElement | null>;
  toRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [path, setPath] = useState("");

  useEffect(() => {
    function update() {
      if (!fromRef.current || !toRef.current || !containerRef.current) return;
      const container = containerRef.current.getBoundingClientRect();
      const from = fromRef.current.getBoundingClientRect();
      const to = toRef.current.getBoundingClientRect();
      const x1 = from.left + from.width / 2 - container.left;
      const y1 = from.top + from.height / 2 - container.top;
      const x2 = to.left + to.width / 2 - container.left;
      const y2 = to.top + to.height / 2 - container.top;
      const cx = (x1 + x2) / 2;
      setPath(`M ${x1} ${y1} Q ${cx} ${y1} ${x2} ${y2}`);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [fromRef, toRef, containerRef]);

  if (!path) return null;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
      <defs>
        <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={path} fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
      <motion.path
        d={path}
        fill="none"
        stroke="url(#beam-grad)"
        strokeWidth="2"
        strokeDasharray="60 200"
        animate={{ strokeDashoffset: [260, -260] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const MODULES = [
  {
    id: 1,
    ce: "CE 01",
    title: "Pflegeprozess & Pflegediagnostik",
    desc: "ATL-Modell, Pflegeplanung, Dokumentation nach SIS",
    icon: "🩺",
    progress: 75,
    color: "from-blue-50 to-blue-100",
    accent: "bg-blue-600",
  },
  {
    id: 2,
    ce: "CE 02",
    title: "Kommunikation & Beratung",
    desc: "Professionelle Gesprächsführung, Validation, Biographie-Arbeit",
    icon: "💬",
    progress: 42,
    color: "from-violet-50 to-violet-100",
    accent: "bg-violet-600",
  },
  {
    id: 3,
    ce: "CE 03",
    title: "Rechtliche Grundlagen",
    desc: "Haftungsrecht, Patientenverfügung, Datenschutz (DSGVO)",
    icon: "⚖️",
    progress: 60,
    color: "from-emerald-50 to-emerald-100",
    accent: "bg-emerald-600",
  },
  {
    id: 4,
    ce: "CE 04",
    title: "Hygiene & Infektionsschutz",
    desc: "Händehygiene, Isolierung, RKI-Richtlinien, MRSA",
    icon: "🧴",
    progress: 88,
    color: "from-sky-50 to-sky-100",
    accent: "bg-sky-600",
  },
  {
    id: 5,
    ce: "CE 05",
    title: "Pharmakologie Grundlagen",
    desc: "Wirkstoffgruppen, Nebenwirkungen, Medikamentengabe",
    icon: "💊",
    progress: 30,
    color: "from-rose-50 to-rose-100",
    accent: "bg-rose-600",
  },
  {
    id: 6,
    ce: "CE 06",
    title: "Notfallmanagement",
    desc: "BLS/ALS, Erstversorgung, Schockmanagement",
    icon: "🚨",
    progress: 55,
    color: "from-orange-50 to-orange-100",
    accent: "bg-orange-600",
  },
];

const PARTNERS = [
  "Charité Berlin",
  "Universitätsklinikum Hamburg",
  "Klinikum München",
  "BG Kliniken",
  "Diakonie",
  "Caritas",
  "AWO Pflege",
  "DRK Schwesternschaft",
  "Johanniter",
  "Malteser",
];

const TESTIMONIALS_ROW1 = [
  {
    name: "Lena M.",
    role: "Pflegeschülerin, 2. Ausbildungsjahr",
    text: "Endlich eine Plattform, die sich an meinen Lernrhythmus anpasst. Meine Noten haben sich deutlich verbessert!",
    avatar: "L",
    color: "bg-blue-500",
  },
  {
    name: "Thomas K.",
    role: "Pflegelehrer, Berufsfachschule",
    text: "Die KI-gestützten Rückmeldungen nehmen mir so viel Korrekturbedarf ab. Ich kann mich auf das Wesentliche konzentrieren.",
    avatar: "T",
    color: "bg-violet-500",
  },
  {
    name: "Schule für Pflege Frankfurt",
    role: "Schulleitung",
    text: "Die Bestehensquote unserer Schülerinnen stieg im ersten Jahr um 18%. Eine klare Investition.",
    avatar: "S",
    color: "bg-emerald-500",
  },
  {
    name: "Mia R.",
    role: "Pflegeschülerin, Abschlussjahr",
    text: "Die Praxisszenarien haben mir geholfen, mich auf die OSCE-Prüfung vorzubereiten. Super realitätsnah!",
    avatar: "M",
    color: "bg-rose-500",
  },
];

const TESTIMONIALS_ROW2 = [
  {
    name: "Prof. Dr. Andrea S.",
    role: "Pflegepädagogin, Universität Witten",
    text: "Wissenschaftlich fundiert und trotzdem leicht zugänglich — das Gleichgewicht ist beeindruckend.",
    avatar: "A",
    color: "bg-amber-500",
  },
  {
    name: "Jan B.",
    role: "Pflegeschüler, 1. Ausbildungsjahr",
    text: "Das Gamification-System hält mich motiviert. Ich lerne jetzt täglich, obwohl ich vorher gar keinen Spaß an Theorie hatte.",
    avatar: "J",
    color: "bg-teal-500",
  },
  {
    name: "Marianne L.",
    role: "Pflegedirektorin, Klinikum Stuttgart",
    text: "Unsere Azubis kommen deutlich besser vorbereitet auf die Station. Das entlastet das gesamte Praxisteam.",
    avatar: "M",
    color: "bg-indigo-500",
  },
  {
    name: "Carla T.",
    role: "Praxisanleiterin",
    text: "Die Lernfortschrittsberichte helfen mir gezielt zu fördern und zu fordern. Endlich sehe ich den Stand jedes Schülers auf einen Blick.",
    avatar: "C",
    color: "bg-pink-500",
  },
];

const QUIZ_ANSWERS = [
  { id: "a", text: "Hygienestandards nach RKI einhalten und dokumentieren", correct: true },
  { id: "b", text: "Sofort die Station verlassen und Vorgesetzten rufen", correct: false },
  { id: "c", text: "Warten bis der Arzt eine Anordnung trifft", correct: false },
  { id: "d", text: "Die Wunde täglich zweimal reinigen ohne Dokumentation", correct: false },
];

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────

export default function MagicDemoPage() {
  const { locale } = useParams();
  // Quiz state
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [rippleTerms, setRippleTerms] = useState<Record<string, number>>({});

  // AnimatedBeam refs
  const beamContainer = useRef<HTMLDivElement>(null);
  const beamFrom = useRef<HTMLDivElement>(null);
  const beamTo = useRef<HTMLDivElement>(null);

  const handleAnswerClick = (id: string, correct: boolean) => {
    if (quizAnswered) return;
    setSelectedAnswer(id);
    setQuizAnswered(true);
    if (correct) setQuizScore((s) => s + 1);
  };

  const handleTermRipple = (term: string) => {
    setRippleTerms((prev) => ({ ...prev, [term]: (prev[term] ?? 0) + 1 }));
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setQuizAnswered(false);
  };

  // Partner marquee items
  const partnerItems = PARTNERS.map((name) => (
    <div key={name} className="mx-8 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-blue-300" />
      <span className="text-zinc-500 font-medium text-sm whitespace-nowrap">{name}</span>
    </div>
  ));

  // Testimonial card renderer
  const renderTestimonialCard = (t: (typeof TESTIMONIALS_ROW1)[0], i: number) => (
    <div
      key={i}
      className="mx-3 w-72 flex-shrink-0 bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <p className="text-sm text-zinc-600 mb-4 leading-relaxed">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white font-semibold text-sm`}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-800">{t.name}</p>
          <p className="text-xs text-zinc-400">{t.role}</p>
        </div>
      </div>
    </div>
  );

  const testimonialRow1Items = TESTIMONIALS_ROW1.map((t, i) => renderTestimonialCard(t, i));
  const testimonialRow2Items = TESTIMONIALS_ROW2.map((t, i) => renderTestimonialCard(t, i));

  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-2">
          <Link
            href={`/${locale}/demo`}
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors group shrink-0"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="hidden sm:inline">Zurück zur Übersicht</span>
          </Link>
          <div className="flex items-center gap-2 min-w-0 overflow-hidden">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="font-semibold text-zinc-900 truncate hidden xs:inline sm:inline">Pflege-Lernplattform</span>
            <span className="ml-1 text-xs bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-full font-medium shrink-0">
              Magic UI
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="hidden sm:block text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
              Anmelden
            </button>
            <AnimatedGradientBorder
              className="rounded-xl"
              innerClassName="rounded-xl px-3 sm:px-4 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors cursor-pointer whitespace-nowrap"
              borderWidth={1.5}
            >
              Kostenlos starten
            </AnimatedGradientBorder>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden" style={{ contain: "paint" }}>
        <Particles count={40} />

        {/* Background gradient blobs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            PflBG 2020 zertifiziert · Jetzt in der Beta
          </motion.div>

          <ShimmerText
            as="h1"
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6"
          >
            Die Zukunft der Pflegeausbildung
          </ShimmerText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Adaptives KI-Lernen, das sich an jeden Schüler anpasst. Evidenzbasiert,
            DSGVO-konform und vollständig auf die generalistische Pflegeausbildung
            nach PflBG 2020 zugeschnitten.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <AnimatedGradientBorder
              className="rounded-xl"
              innerClassName="rounded-xl"
              borderWidth={2}
            >
              <RippleButton className="px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl hover:opacity-90 transition-opacity">
                Kostenlos testen
              </RippleButton>
            </AnimatedGradientBorder>

            <AnimatedGradientBorder
              className="rounded-xl"
              innerClassName="rounded-xl"
              borderWidth={2}
            >
              <button className="px-8 py-3.5 text-base font-semibold text-zinc-700 hover:bg-zinc-50 rounded-xl transition-colors">
                Mehr erfahren →
              </button>
            </AnimatedGradientBorder>
          </motion.div>

          {/* NumberTicker trust signal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-8 justify-center text-center"
          >
            <div>
              <div className="text-3xl font-bold text-zinc-900">
                <NumberTicker value={1240} suffix="+" />
              </div>
              <p className="text-sm text-zinc-500 mt-1">Pflegeschüler vertrauen uns</p>
            </div>
            <div className="w-px bg-zinc-200 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-zinc-900">
                <NumberTicker value={47} />
              </div>
              <p className="text-sm text-zinc-500 mt-1">Partnerschulen</p>
            </div>
            <div className="w-px bg-zinc-200 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-zinc-900">
                <NumberTicker value={92} suffix="%" />
              </div>
              <p className="text-sm text-zinc-500 mt-1">Bestehensquote</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — PARTNER MARQUEE
      ════════════════════════════════════════ */}
      <section className="py-12 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <p className="text-xs text-center text-zinc-400 uppercase tracking-widest font-medium">
            Vertraut von führenden Pflegeeinrichtungen
          </p>
        </div>
        <Marquee items={partnerItems} direction="left" speed={35} />
        <div className="mt-4">
          <Marquee items={partnerItems} direction="right" speed={28} />
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — STATS / NumberTicker
      ════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <ShimmerText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
              Zahlen, die für sich sprechen
            </ShimmerText>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Evidenzbasierte Ergebnisse aus echten Pflegeschulen in ganz Deutschland
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 30, suffix: "", label: "Lernmodule", sub: "Vollständig nach PflBG 2020", icon: "📚" },
              { value: 500, suffix: "+", label: "Quiz-Fragen", sub: "Klinisch validiert", icon: "❓" },
              { value: 92, suffix: "%", label: "Bestehensquote", sub: "Über dem Bundesdurchschnitt", icon: "🏆" },
              { value: 24, suffix: "/7", label: "Verfügbar", sub: "Auf allen Geräten", icon: "⏰" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <BorderBeam
                  className="rounded-2xl border border-zinc-100 bg-white p-6 hover:shadow-md transition-shadow"
                  active
                >
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-4xl font-extrabold text-zinc-900 mb-1">
                    <NumberTicker value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-lg font-semibold text-zinc-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-zinc-400">{stat.sub}</div>
                </BorderBeam>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — BENTO GRID FEATURES
      ════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <ShimmerText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
              Alles in einer Plattform
            </ShimmerText>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Modernste Technologie trifft auf pädagogische Exzellenz
            </p>
          </motion.div>

          {/* BentoGrid */}
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(6, 1fr)",
              gridTemplateRows: "auto",
            }}
          >
            {/* Large: Adaptives Lernen — col-span 3, row-span 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-6 md:col-span-3 row-span-2 bg-white rounded-2xl border border-zinc-100 p-8 shadow-sm hover:shadow-md transition-shadow overflow-hidden relative flex flex-col"
              style={{ minHeight: 360 }}
            >
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  KI-gestützt
                </span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Adaptives Lernen</h3>
              <p className="text-zinc-500 text-sm mb-6 max-w-xs">
                Die KI analysiert Ihre Schwächen und erstellt personalisierte Lernpfade
                in Echtzeit. Kein Schüler lernt mehr dasselbe.
              </p>

              <div className="flex-1 flex items-center justify-center">
                <OrbitingCircles
                  radius={90}
                  size={280}
                  centerContent={
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🧠</span>
                    </div>
                  }
                  items={[
                    { icon: "📖", label: "Theorie", color: "bg-blue-100" },
                    { icon: "🩺", label: "Praxis", color: "bg-violet-100" },
                    { icon: "❓", label: "Quiz", color: "bg-rose-100" },
                    { icon: "📊", label: "Analyse", color: "bg-emerald-100" },
                    { icon: "🎯", label: "Ziel", color: "bg-amber-100" },
                    { icon: "⭐", label: "XP", color: "bg-sky-100" },
                  ]}
                />
              </div>
            </motion.div>

            {/* KI-Feedback — col-span 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              ref={beamContainer}
              className="col-span-6 md:col-span-3 bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              style={{ minHeight: 170 }}
            >
              <AnimatedBeam
                fromRef={beamFrom}
                toRef={beamTo}
                containerRef={beamContainer}
              />
              <h3 className="text-xl font-bold text-zinc-900 mb-2">KI-Feedback</h3>
              <p className="text-zinc-500 text-sm mb-4">
                Sofortiges, individuelles Feedback auf jede Antwort — wie ein persönlicher Tutor.
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div
                  ref={beamFrom}
                  className="flex-1 bg-blue-50 rounded-xl p-3 border border-blue-100"
                >
                  <p className="text-xs font-medium text-blue-700">Ihre Antwort</p>
                  <p className="text-xs text-zinc-500 mt-1">
                    "Wundversorgung nach Standard..."
                  </p>
                </div>
                <div className="text-zinc-300 text-xl flex-shrink-0">→</div>
                <div
                  ref={beamTo}
                  className="flex-1 bg-violet-50 rounded-xl p-3 border border-violet-100"
                >
                  <p className="text-xs font-medium text-violet-700">KI-Feedback</p>
                  <p className="text-xs text-zinc-500 mt-1">
                    "Korrekt! Ergänzen Sie noch..."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Praxisszenarien */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-6 md:col-span-2 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-white"
              style={{ minHeight: 180 }}
            >
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-bold mb-1">Praxisszenarien</h3>
              <p className="text-blue-100 text-sm">
                120+ realitätsnahe Fallstudien aus dem klinischen Alltag
              </p>
              <div className="mt-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="flex-1 h-1 rounded-full bg-white/30 overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: n <= 3 ? "100%" : "40%" }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Lernfortschritt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-6 md:col-span-2 bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              style={{ minHeight: 180 }}
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">Lernfortschritt</h3>
              <p className="text-zinc-500 text-sm mb-4">
                Detaillierte Auswertungen für Schüler und Lehrkräfte
              </p>
              <div className="space-y-2">
                {["CE 01", "CE 02", "CE 03"].map((ce, i) => (
                  <div key={ce} className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400 w-10">{ce}</span>
                    <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${[75, 42, 88][i]}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                        className="h-full bg-blue-500 rounded-full"
                      />
                    </div>
                    <span className="text-xs text-zinc-400">{[75, 42, 88][i]}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gamification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-6 md:col-span-2 bg-white rounded-2xl border border-zinc-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              style={{ minHeight: 180 }}
            >
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">Gamification</h3>
              <p className="text-zinc-500 text-sm mb-4">
                XP, Abzeichen und Streaks halten die Motivation hoch
              </p>
              <div className="flex gap-2 flex-wrap">
                {["🔥 15-Tage-Streak", "⭐ 2.400 XP", "🏅 Anatomie-Profi"].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-1 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 — MODULE OVERVIEW
      ════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <ShimmerText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
              Alle Lernmodule auf einen Blick
            </ShimmerText>
            <p className="text-zinc-500 max-w-xl mx-auto">
              30 Module decken alle Kompetenzbereiche der generalistischen Pflegeausbildung ab
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODULES.map((mod, i) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
              >
                <AnimatedGradientBorder
                  className="rounded-2xl h-full"
                  innerClassName="rounded-2xl"
                  borderWidth={1.5}
                >
                  <div className={`bg-gradient-to-br ${mod.color} rounded-2xl p-5 h-full`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                          {mod.ce}
                        </span>
                        <h3 className="text-base font-bold text-zinc-900 mt-0.5 leading-tight">
                          {mod.title}
                        </h3>
                      </div>
                      <span className="text-2xl flex-shrink-0 ml-2">{mod.icon}</span>
                    </div>
                    <p className="text-sm text-zinc-500 mb-4 leading-relaxed">{mod.desc}</p>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-zinc-400">Fortschritt</span>
                        <span className="text-xs font-semibold text-zinc-600">
                          {mod.progress}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-white/70 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${mod.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
                          className={`h-full ${mod.accent} rounded-full`}
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedGradientBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 6 — LESSON PREVIEW
      ════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <ShimmerText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
              Interaktive Lerneinheit
            </ShimmerText>
            <p className="text-zinc-500">
              Erleben Sie, wie eine typische Lernstunde auf der Plattform aussieht
            </p>
          </motion.div>

          <BorderBeam
            className="rounded-2xl bg-white border border-zinc-100 overflow-hidden shadow-sm"
            active
          >
            {/* Lesson header */}
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">CE 04 · Lektion 3</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">⏱ ~12 min</span>
              </div>
              <ShimmerText
                as="h3"
                className="text-2xl font-bold text-white"
              >
                Händehygiene nach WHO-Richtlinien
              </ShimmerText>
              <p className="text-blue-100 text-sm mt-1">
                Fünf Momente der Händehygiene · 6-Schritte-Desinfektion
              </p>
              {/* Progress bar with BorderBeam effect */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-blue-200 mb-1">
                  <span>Fortschritt</span>
                  <span>3 / 8 Abschnitte</span>
                </div>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "37.5%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-white rounded-full relative"
                  >
                    <div className="absolute right-0 top-0 h-full w-4 bg-white/60 blur-sm" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Lesson content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Introduction block */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-zinc-600 leading-relaxed">
                  Die Händehygiene ist die wirksamste Einzelmaßnahme zur Verhütung von
                  nosokomialen Infektionen. Die WHO definiert{" "}
                  <button
                    onClick={() => handleTermRipple("5-Momente")}
                    className="relative inline-flex items-center font-semibold text-blue-600 underline underline-offset-2 cursor-pointer hover:text-blue-700 transition-colors overflow-hidden"
                  >
                    <span>5 Momente der Händehygiene</span>
                    <AnimatePresence>
                      {(rippleTerms["5-Momente"] ?? 0) > 0 && (
                        <motion.span
                          key={rippleTerms["5-Momente"]}
                          className="absolute inset-0 rounded-full bg-blue-200/50"
                          initial={{ scale: 0, opacity: 0.7 }}
                          animate={{ scale: 3, opacity: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                    </AnimatePresence>
                  </button>
                  , die für alle Gesundheitseinrichtungen weltweit gelten.
                </p>
              </motion.div>

              {/* Callout box */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  <div>
                    <p className="font-semibold text-blue-900 text-sm mb-1">
                      Wichtiger Grundsatz
                    </p>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      Händehygiene mit Händedesinfektion ist der Händehygiene mit Wasser und
                      Seife in klinischen Situationen <strong>immer vorzuziehen</strong>, sofern
                      die Hände nicht sichtbar verschmutzt sind.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Key terms */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-sm font-semibold text-zinc-700 mb-3">Schlüsselbegriffe:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Nosokomiale Infektion",
                    "Händedesinfektion",
                    "6-Schritt-Technik",
                    "WHO-Leitlinie",
                    "MRSA-Prävention",
                  ].map((term) => (
                    <button
                      key={term}
                      onClick={() => handleTermRipple(term)}
                      className="relative overflow-hidden text-xs bg-zinc-100 hover:bg-blue-50 border border-zinc-200 hover:border-blue-300 text-zinc-700 hover:text-blue-700 px-3 py-1.5 rounded-full transition-colors"
                    >
                      {term}
                      <AnimatePresence>
                        {(rippleTerms[term] ?? 0) > 0 && (
                          <motion.span
                            key={rippleTerms[term]}
                            className="absolute inset-0 rounded-full bg-blue-200/40"
                            initial={{ scale: 0, opacity: 0.8 }}
                            animate={{ scale: 3, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                          />
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-zinc-400 mt-2">
                  Klicken Sie auf einen Begriff für eine Kurzdefinition
                </p>
              </motion.div>

              {/* Steps */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid sm:grid-cols-5 gap-3"
              >
                {[
                  { n: "1", label: "Vor Pat.-Kontakt", icon: "🤝" },
                  { n: "2", label: "Vor aseptischer Tätigkeit", icon: "💉" },
                  { n: "3", label: "Nach Exposition", icon: "🩸" },
                  { n: "4", label: "Nach Pat.-Kontakt", icon: "🚶" },
                  { n: "5", label: "Nach Kontakt Umgebung", icon: "🛏" },
                ].map((step, i) => (
                  <motion.div
                    key={step.n}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.07 }}
                    className="bg-zinc-50 border border-zinc-100 rounded-xl p-3 text-center hover:bg-blue-50 hover:border-blue-200 transition-colors"
                  >
                    <div className="text-xl mb-1">{step.icon}</div>
                    <div className="text-xs font-bold text-zinc-700">Moment {step.n}</div>
                    <div className="text-xs text-zinc-400 mt-0.5 leading-tight">{step.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Nav buttons */}
              <div className="flex justify-between pt-2">
                <button className="px-5 py-2.5 text-sm text-zinc-500 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors">
                  ← Vorheriger Abschnitt
                </button>
                <RippleButton className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl hover:opacity-90 transition-opacity">
                  Weiter →
                </RippleButton>
              </div>
            </div>
          </BorderBeam>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 7 — QUIZ
      ════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <ShimmerText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
              Quiz-Modus
            </ShimmerText>
            <p className="text-zinc-500">
              Testen Sie Ihr Wissen mit unseren klinisch validierten Fragen
            </p>
          </motion.div>

          {/* Score */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-500">Punkte:</span>
              <span className="text-2xl font-bold text-zinc-900">
                <NumberTicker value={quizScore * 100} duration={0.8} />
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">Frage 1 / 10</span>
              <div className="w-32 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                <div className="w-1/10 h-full bg-blue-500 rounded-full" style={{ width: "10%" }} />
              </div>
            </div>
          </div>

          {/* Question */}
          <BorderBeam
            className="rounded-2xl bg-white border border-zinc-100 p-6 mb-6 shadow-sm"
            active={!quizAnswered}
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-blue-700">Q</span>
              </div>
              <div>
                <p className="text-xs text-zinc-400 mb-1 uppercase tracking-wider font-medium">
                  CE 04 · Wundversorgung
                </p>
                <p className="text-base font-semibold text-zinc-900 leading-relaxed">
                  Frau Schmidt (78 J.) hat eine chronische Wunde am Unterschenkel.
                  Welche Maßnahme ist bei der Wundversorgung <em>primär</em> zu beachten?
                </p>
              </div>
            </div>
          </BorderBeam>

          {/* Answers */}
          <div className="space-y-3 mb-6">
            {QUIZ_ANSWERS.map((ans) => {
              const isSelected = selectedAnswer === ans.id;
              const showResult = quizAnswered;
              let cardClass =
                "w-full text-left rounded-2xl border p-4 transition-all duration-300 cursor-pointer ";

              if (!quizAnswered) {
                cardClass += "bg-white border-zinc-100 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm";
              } else if (ans.correct) {
                cardClass += "bg-emerald-50 border-emerald-300";
              } else if (isSelected && !ans.correct) {
                cardClass += "bg-rose-50 border-rose-300";
              } else {
                cardClass += "bg-white border-zinc-100 opacity-60";
              }

              return (
                <motion.div
                  key={ans.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * ["a","b","c","d"].indexOf(ans.id) }}
                >
                  <RippleButton
                    onClick={() => handleAnswerClick(ans.id, ans.correct)}
                    className={cardClass}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                          showResult && ans.correct
                            ? "bg-emerald-500 border-emerald-500 text-white"
                            : showResult && isSelected && !ans.correct
                            ? "bg-rose-500 border-rose-500 text-white"
                            : "border-zinc-200 text-zinc-500"
                        }`}
                      >
                        {showResult && ans.correct
                          ? "✓"
                          : showResult && isSelected && !ans.correct
                          ? "✗"
                          : ans.id.toUpperCase()}
                      </div>
                      <span
                        className={`text-sm ${
                          showResult && ans.correct
                            ? "text-emerald-800 font-medium"
                            : showResult && isSelected && !ans.correct
                            ? "text-rose-800"
                            : "text-zinc-700"
                        }`}
                      >
                        {ans.text}
                      </span>
                    </div>
                  </RippleButton>
                </motion.div>
              );
            })}
          </div>

          {/* Feedback + next */}
          <AnimatePresence>
            {quizAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`rounded-2xl p-5 mb-6 border ${
                  selectedAnswer === "a"
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-rose-50 border-rose-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">{selectedAnswer === "a" ? "🎉" : "💡"}</span>
                  <div>
                    <p
                      className={`font-semibold text-sm mb-1 ${
                        selectedAnswer === "a" ? "text-emerald-800" : "text-rose-800"
                      }`}
                    >
                      {selectedAnswer === "a" ? "Richtig! Gut gemacht." : "Leider falsch."}
                    </p>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      Die Einhaltung von Hygienestandards nach RKI ist die Grundlage jeder
                      Wundversorgung. Die korrekte Dokumentation schützt sowohl Patienten als
                      auch Pflegende rechtlich.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-3">
            {quizAnswered && (
              <button
                onClick={handleReset}
                className="px-5 py-3 text-sm text-zinc-500 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors"
              >
                Nochmal versuchen
              </button>
            )}
            <RippleButton
              className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all ${
                quizAnswered
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:opacity-90"
                  : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
              }`}
            >
              {quizAnswered ? "Nächste Frage →" : "Antwort auswählen"}
            </RippleButton>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 8 — TESTIMONIALS MARQUEE
      ════════════════════════════════════════ */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <ShimmerText as="h2" className="text-3xl md:text-4xl font-bold mb-4">
              Was unsere Nutzer sagen
            </ShimmerText>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Von Auszubildenden über Lehrende bis hin zu Einrichtungsleitungen
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          <Marquee items={testimonialRow1Items} direction="left" speed={60} />
          <Marquee items={testimonialRow2Items} direction="right" speed={50} />
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 9 — CTA
      ════════════════════════════════════════ */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedGradientBorder
              className="rounded-3xl"
              innerClassName="rounded-3xl"
              borderWidth={2}
            >
              <div className="relative bg-white rounded-3xl px-8 py-16 md:px-16 text-center overflow-hidden">
                {/* Decorative background OrbitingCircles */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                  <OrbitingCircles
                    radius={160}
                    size={520}
                    centerContent={null}
                    items={[
                      { icon: "🩺", label: "", color: "bg-blue-200" },
                      { icon: "📖", label: "", color: "bg-violet-200" },
                      { icon: "🏥", label: "", color: "bg-blue-200" },
                      { icon: "💊", label: "", color: "bg-rose-200" },
                      { icon: "❤️", label: "", color: "bg-red-200" },
                      { icon: "⭐", label: "", color: "bg-amber-200" },
                      { icon: "🧠", label: "", color: "bg-emerald-200" },
                      { icon: "🎯", label: "", color: "bg-sky-200" },
                    ]}
                  />
                </div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full mb-8"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                    Keine Kreditkarte erforderlich
                  </motion.div>

                  <ShimmerText as="h2" className="text-4xl md:text-5xl font-extrabold mb-6">
                    Bereit für besseres Lernen?
                  </ShimmerText>

                  <p className="text-lg text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed">
                    Starten Sie noch heute kostenlos und erleben Sie, wie adaptives KI-Lernen
                    die Pflegeausbildung revolutioniert. Für Schulen ab 149 € / Schüler / Jahr.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center mb-12">
                    <RippleButton className="px-10 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl shadow-lg shadow-blue-200 hover:opacity-90 transition-opacity">
                      Jetzt kostenlos testen
                    </RippleButton>
                    <button className="px-10 py-4 text-base font-semibold text-zinc-700 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors">
                      Demo vereinbaren
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-6 justify-center text-sm text-zinc-400">
                    {[
                      "✓ 30 Tage kostenlos",
                      "✓ DSGVO-konform (DE-Server)",
                      "✓ PflBG 2020 zertifiziert",
                      "✓ Kündigung jederzeit",
                    ].map((item) => (
                      <span key={item} className="flex items-center gap-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedGradientBorder>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-100 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="font-semibold text-zinc-800">Pflege-Lernplattform</span>
          </div>
          <p className="text-sm text-zinc-400 text-center">
            © 2026 · Alle Rechte vorbehalten · DSGVO-konform · Hosting in Deutschland
          </p>
          <Link
            href={`/${locale}/demo`}
            className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors flex items-center gap-1"
          >
            ← Zurück zur Übersicht
          </Link>
        </div>
      </footer>
    </div>
  );
}
