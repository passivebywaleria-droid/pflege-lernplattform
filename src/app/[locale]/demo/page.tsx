"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const designs = [
  {
    title: "Origin UI",
    href: "origin",
    description: "Border-driven, Zinc-Palette, segmentierte Controls",
    gradient: "from-zinc-100 to-zinc-200",
    tags: ["Minimal", "Border-focused", "Neutral"],
  },
  {
    title: "Aceternity UI",
    href: "aceternity",
    description: "Spotlight-Effekte, 3D-Karten, bewegte Borders",
    gradient: "from-violet-50 to-indigo-100",
    tags: ["Spotlight", "3D Cards", "Glow"],
  },
  {
    title: "Magic UI",
    href: "magic",
    description: "Shimmer-Text, Number-Ticker, Orbit-Animationen",
    gradient: "from-blue-50 to-cyan-100",
    tags: ["Animated", "Shimmer", "Particles"],
  },
  {
    title: "HeroUI",
    href: "heroui",
    description: "Gradient-Buttons, farbige Schatten, Premium-Rundungen",
    gradient: "from-sky-50 to-blue-100",
    tags: ["Gradient", "Colorful", "Modern"],
  },
];

const quizzes = [
  { title: "Duolingo-Stil", href: "quiz-1", description: "Gamifiziert mit Herzen, XP und Streaks", color: "bg-green-500" },
  { title: "Kahoot-Stil", href: "quiz-2", description: "Wettbewerb mit Timer und Farbblöcken", color: "bg-purple-600" },
  { title: "AMBOSS-Stil", href: "quiz-3", description: "Klinisch mit Erklärungskarten", color: "bg-teal-600" },
  { title: "Brilliant-Stil", href: "quiz-4", description: "Interaktiv mit visuellen Puzzles", color: "bg-orange-500" },
  { title: "Quizlet-Stil", href: "quiz-5", description: "Lernkarten zum Umdrehen", color: "bg-indigo-500" },
];

export default function DemoOverview() {
  const { locale } = useParams();
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center">
              <span className="text-white text-sm font-bold">P</span>
            </div>
            <span className="font-semibold text-zinc-900 text-lg">Pflege-Lernplattform</span>
          </div>
          <span className="text-sm text-zinc-500">Design-Vergleich</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            UI Design Vergleich
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Vier verschiedene Design-Systeme als vollständige Pflege-App-Demos.
            Plus fünf Quiz-Varianten im Vergleich.
          </p>
        </motion.div>

        <section className="mb-20">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">
            Design-Systeme
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {designs.map((d, i) => (
              <motion.div
                key={d.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link href={`/${locale}/demo/${d.href}`}>
                  <div className="group relative border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300">
                    <div className={`h-32 bg-gradient-to-br ${d.gradient} flex items-end p-6`}>
                      <div className="flex gap-2">
                        {d.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium bg-white/80 backdrop-blur-sm text-zinc-700 px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                          {d.title}
                        </h3>
                        <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </div>
                      <p className="text-sm text-zinc-500">{d.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">
            App-Konzepte
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <Link href={`/${locale}/demo/dashboard`}>
                <div className="group relative border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300">
                  <div className="h-32 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-end p-6">
                    <div className="flex gap-2">
                      {["Lernpfad", "Kompetenz-Radar", "Spaced Repetition"].map((tag) => (
                        <span key={tag} className="text-xs font-medium bg-white/80 backdrop-blur-sm text-zinc-700 px-2.5 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">Dashboard & Gamification</h3>
                      <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                    <p className="text-sm text-zinc-500">Lernpfad, Kompetenzübersicht, Zeitwahl, Klassen-Vergleich, Wiederholungs-Radar &amp; Übungsmodi</p>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Link href={`/${locale}/demo/lektion`}>
                <div className="group relative border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300">
                  <div className="h-32 bg-gradient-to-br from-emerald-50 to-teal-100 flex items-end p-6">
                    <div className="flex gap-2">
                      {["Sandwich-Methode", "Fallbeispiel", "Sofort-Feedback"].map((tag) => (
                        <span key={tag} className="text-xs font-medium bg-white/80 backdrop-blur-sm text-zinc-700 px-2.5 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">Demo-Lektion: Der Pflegeprozess</h3>
                      <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                    <p className="text-sm text-zinc-500">Session 1 · Einstieg mit Reflexion, kurze Wissenshäppchen, MC-Fragen, Sortieren, Zuordnung, Fallbeispiel &amp; Ergebnis</p>
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              <Link href={`/${locale}/demo/interaktiv`}>
                <div className="group relative border border-zinc-200 rounded-xl overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all duration-300">
                  <div className="h-32 bg-gradient-to-br from-rose-50 to-amber-100 flex items-end p-6">
                    <div className="flex gap-2">
                      {["Hotspot", "Branching", "Virtual Patient"].map((tag) => (
                        <span key={tag} className="text-xs font-medium bg-white/80 backdrop-blur-sm text-zinc-700 px-2.5 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">Interaktive Fragetypen</h3>
                      <span className="text-zinc-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                    <p className="text-sm text-zinc-500">Hotspot, Branching Scenario, Sequencing, Slider-Berechnung &amp; Virtual Patient Dialog</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        <section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quizzes.map((q, i) => (
              <motion.div
                key={q.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              >
                <Link href={`/${locale}/demo/${q.href}`}>
                  <div className="group border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-3 rounded-full ${q.color}`} />
                      <h3 className="font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                        {q.title}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-500">{q.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
