"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { StepImageInteraction } from "@/components/learn/step-image-interaction";
import { StepLabelImage } from "@/components/learn/step-label-image";
import { StepDiagram } from "@/components/learn/step-diagram";
import { LottieFeedback, FeedbackOverlay } from "@/components/learn/lottie-feedback";
import type { FeedbackAnimation } from "@/components/learn/lottie-feedback";

// ─── Demo-Daten ───

const DEMO_SECTIONS = [
  {
    id: "beforeAfter",
    title: "1. Vorher/Nachher-Slider",
    subtitle: "Vergleiche zwei Zustände durch Ziehen",
    color: "#0071e3",
  },
  {
    id: "layerReveal",
    title: "2. Schichten aufdecken",
    subtitle: "Anatomische Schichten ein-/ausblenden",
    color: "#30D158",
  },
  {
    id: "zoomPan",
    title: "3. Zoom + Annotationen",
    subtitle: "Bild vergrößern und Details erkunden",
    color: "#AF52DE",
  },
  {
    id: "labelImage",
    title: "4. Bild beschriften",
    subtitle: "Anatomie-Strukturen benennen",
    color: "#FF9500",
  },
  {
    id: "diagram",
    title: "5. Interaktives Diagramm",
    subtitle: "Zusammenhänge als Flowchart/Mindmap",
    color: "#FF3B30",
  },
  {
    id: "lottie",
    title: "6. Lottie-Animationen",
    subtitle: "Mikro-Feedback für richtig/falsch/Streak",
    color: "#5AC8FA",
  },
] as const;

type SectionId = typeof DEMO_SECTIONS[number]["id"];

export default function VisuellDemoPage() {
  const locale = useLocale();
  const [activeSection, setActiveSection] = useState<SectionId>("beforeAfter");
  const [feedbackType, setFeedbackType] = useState<"correct" | "wrong" | null>(null);

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "var(--lern-text-primary)" }}>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[var(--lern-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--lern-border)]/50">
        <div className="mx-auto max-w-2xl px-4 py-4">
          <h1 className="text-lg font-bold text-[var(--lern-text-primary)]">
            Visuelle Step-Typen — Demo
          </h1>
          <p className="text-xs text-[var(--lern-text-secondary)] mt-0.5">
            Alle Bild-Interaktionen + Lottie-Feedback
          </p>

          {/* Tab-Navigation */}
          <div className="flex gap-1.5 mt-3 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
            {DEMO_SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 ${
                  activeSection === s.id
                    ? "text-white shadow-sm"
                    : "bg-[var(--lern-bg)] text-[var(--lern-text-secondary)]"
                }`}
                style={activeSection === s.id ? { backgroundColor: s.color } : {}}
              >
                {s.title.split(". ")[1]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Section Header */}
            {DEMO_SECTIONS.map(
              (s) =>
                s.id === activeSection && (
                  <div key={s.id} className="mb-6">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white mb-2"
                      style={{ backgroundColor: s.color }}
                    >
                      {s.title}
                    </div>
                    <p className="text-sm text-[var(--lern-text-secondary)]">{s.subtitle}</p>
                  </div>
                ),
            )}

            {/* ── 1. BeforeAfter ── */}
            {activeSection === "beforeAfter" && (
              <StepImageInteraction
                title="Dekubitus: Gesunde Haut vs. Grad IV"
                body="Vergleiche die gesunde Hautstruktur mit einem fortgeschrittenen Dekubitus Grad IV. Ziehe den Slider um beide Zustände zu sehen."
                instruction="Schiebe den Slider nach links und rechts um die Unterschiede zu erkennen."
                interactionType="beforeAfter"
                beforeAfter={{
                  imageBefore: "/images/demo/haut-gesund.svg",
                  imageAfter: "/images/demo/haut-dekubitus.svg",
                  labelBefore: "Gesund",
                  labelAfter: "Dekubitus Grad IV",
                  startPosition: 50,
                }}
                onNext={() => setActiveSection("layerReveal")}
              />
            )}

            {/* ── 2. LayerReveal ── */}
            {activeSection === "layerReveal" && (
              <StepImageInteraction
                title="Anatomische Schichten des Verdauungssystems"
                body="Erkunde die verschiedenen Schichten des Verdauungstrakts. Schalte einzelne Schichten ein oder aus."
                instruction="Tippe auf die Schicht-Buttons um Strukturen ein- oder auszublenden."
                interactionType="layerReveal"
                layerReveal={{
                  layers: [
                    {
                      id: "schicht-1",
                      label: "Übersicht",
                      labelB1: "Gesamtbild",
                      imageUrl: "/images/demo/verdauung-uebersicht.svg",
                      defaultVisible: true,
                    },
                    {
                      id: "schicht-2",
                      label: "Oberer GI-Trakt",
                      labelB1: "Oben",
                      imageUrl: "/images/demo/verdauung-oberer-gi.svg",
                      defaultVisible: false,
                    },
                    {
                      id: "schicht-3",
                      label: "Unterer GI-Trakt",
                      labelB1: "Unten",
                      imageUrl: "/images/demo/verdauung-unterer-gi.svg",
                      defaultVisible: false,
                    },
                    {
                      id: "schicht-4",
                      label: "Gefäßversorgung",
                      labelB1: "Blutgefäße",
                      imageUrl: "/images/demo/verdauung-gefaesse.svg",
                      defaultVisible: false,
                    },
                  ],
                }}
                onNext={() => setActiveSection("zoomPan")}
              />
            )}

            {/* ── 3. ZoomPan ── */}
            {activeSection === "zoomPan" && (
              <StepImageInteraction
                title="Niere im Detail"
                body="Erkunde die Niere mit der Zoom-Funktion. Tippe auf die blauen Markierungen für Details."
                instruction="Doppeltippe zum Vergrößern. Nutze +/− oder ziehe mit dem Finger."
                interactionType="zoomPan"
                zoomPan={{
                  imageUrl: "/images/demo/niere.svg",
                  imageAlt: "Niere — Querschnitt",
                  maxZoom: 4,
                  annotations: [
                    {
                      id: "a1",
                      x: 35,
                      y: 30,
                      label: "Nierenrinde (Cortex)",
                      labelB1: "Äußere Schicht",
                      description: "Die Nierenrinde enthält die Glomeruli — die Filtereinheiten der Niere. Hier beginnt die Harnbildung.",
                      descriptionB1: "Hier wird das Blut gefiltert. Der Urin beginnt hier.",
                    },
                    {
                      id: "a2",
                      x: 50,
                      y: 50,
                      label: "Nierenmark (Medulla)",
                      labelB1: "Innere Schicht",
                      description: "Das Nierenmark besteht aus Nierenpyramiden. Hier wird der Harn konzentriert.",
                      descriptionB1: "Hier wird der Urin eingedickt.",
                    },
                    {
                      id: "a3",
                      x: 65,
                      y: 45,
                      label: "Nierenbecken (Pelvis)",
                      labelB1: "Sammelbecken",
                      description: "Das Nierenbecken sammelt den fertigen Urin und leitet ihn über den Harnleiter zur Blase.",
                      descriptionB1: "Hier sammelt sich der fertige Urin.",
                    },
                    {
                      id: "a4",
                      x: 20,
                      y: 60,
                      label: "Nierenarterie",
                      labelB1: "Blut rein",
                      description: "Die Nierenarterie bringt sauerstoffreiches Blut zur Niere. Ca. 20% des Herzzeitvolumens fließen durch die Nieren.",
                    },
                  ],
                }}
                onNext={() => setActiveSection("labelImage")}
              />
            )}

            {/* ── 4. LabelImage ── */}
            {activeSection === "labelImage" && (
              <StepLabelImage
                title="Harnwege beschriften"
                body="Ordne die Fachbegriffe den richtigen Strukturen zu."
                imageUrl="/images/demo/harnwege.svg"
                imageAlt="Harnwege — Schema"
                instruction="Tippe auf eine Markierung und wähle den richtigen Begriff."
                labels={[
                  {
                    id: "l1",
                    correct: "Niere",
                    position: { x: 30, y: 25 },
                    distractors: ["Blase", "Harnleiter"],
                  },
                  {
                    id: "l2",
                    correct: "Harnleiter",
                    position: { x: 40, y: 50 },
                    distractors: ["Niere", "Harnröhre"],
                  },
                  {
                    id: "l3",
                    correct: "Harnblase",
                    position: { x: 50, y: 72 },
                    distractors: ["Niere", "Nebenniere"],
                  },
                  {
                    id: "l4",
                    correct: "Harnröhre",
                    position: { x: 50, y: 88 },
                    distractors: ["Harnleiter", "Harnblase"],
                  },
                ]}
                mode="select"
                glossar={[]}
                onNext={() => setActiveSection("diagram")}
              />
            )}

            {/* ── 5. Diagram ── */}
            {activeSection === "diagram" && (
              <StepDiagram
                title="Pflegeprozess — 6 Schritte"
                body="Der Pflegeprozess ist ein systematischer Kreislauf. Tippe auf die Schritte für Details."
                instruction="Erkunde alle 6 Schritte des Pflegeprozesses."
                diagramType="cycle"
                nodes={[
                  {
                    id: "n1",
                    label: "1. Informationen sammeln",
                    labelB1: "Informationen holen",
                    highlight: true,
                  },
                  {
                    id: "n2",
                    label: "2. Probleme erkennen",
                    labelB1: "Probleme finden",
                  },
                  {
                    id: "n3",
                    label: "3. Ziele festlegen",
                    labelB1: "Ziele planen",
                  },
                  {
                    id: "n4",
                    label: "4. Maßnahmen planen",
                    labelB1: "Was tun wir?",
                  },
                  {
                    id: "n5",
                    label: "5. Maßnahmen durchführen",
                    labelB1: "Pflege machen",
                  },
                  {
                    id: "n6",
                    label: "6. Ergebnis bewerten",
                    labelB1: "Hat es geholfen?",
                  },
                ]}
                edges={[
                  { from: "n1", to: "n2" },
                  { from: "n2", to: "n3" },
                  { from: "n3", to: "n4" },
                  { from: "n4", to: "n5" },
                  { from: "n5", to: "n6" },
                  { from: "n6", to: "n1", label: "Kreislauf" },
                ]}
                interactive
                glossar={[]}
                onNext={() => setActiveSection("lottie")}
              />
            )}

            {/* ── 6. Lottie ── */}
            {activeSection === "lottie" && (
              <div className="space-y-6">
                <div className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-6 space-y-6">
                  <h3 className="text-lg font-bold">Mikro-Feedback</h3>
                  <p className="text-sm text-[var(--lern-text-secondary)]">
                    Lottie-Animationen ersetzen statische Emojis bei richtig/falsch/Streak.
                  </p>

                  {/* Animation Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {(["correct", "wrong", "streak", "levelUp", "loading"] as FeedbackAnimation[]).map((anim) => (
                      <button
                        key={anim}
                        onClick={() => {
                          if (anim === "correct" || anim === "wrong") {
                            setFeedbackType(anim);
                          }
                        }}
                        className="flex flex-col items-center gap-2 rounded-xl bg-[var(--lern-bg)] p-4 active:scale-95 transition-transform"
                      >
                        <LottieFeedback
                          animation={anim}
                          size={anim === "loading" ? 80 : anim === "streak" ? 48 : 80}
                          loop={anim === "loading" || anim === "streak"}
                        />
                        <span className="text-xs font-semibold text-[var(--lern-text-secondary)] capitalize">
                          {anim === "levelUp" ? "Level Up" : anim}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Try Overlay */}
                  <div className="rounded-xl bg-[#0071e3]/5 border border-[#0071e3]/20 p-4 text-center">
                    <p className="text-sm text-[#0071e3] font-medium mb-3">
                      Tippe auf &quot;correct&quot; oder &quot;wrong&quot; um das Fullscreen-Overlay zu testen
                    </p>
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={() => setFeedbackType("correct")}
                        className="px-5 py-2.5 rounded-full bg-[#30D158] text-white text-sm font-semibold active:scale-95"
                      >
                        Richtig testen
                      </button>
                      <button
                        onClick={() => setFeedbackType("wrong")}
                        className="px-5 py-2.5 rounded-full bg-[#FF3B30] text-white text-sm font-semibold active:scale-95"
                      >
                        Falsch testen
                      </button>
                    </div>
                  </div>
                </div>

                {/* Zurück */}
                <a
                  href={`/${locale}/demo`}
                  className="block w-full text-center rounded-2xl bg-[var(--lern-bg)] py-4 text-sm font-semibold text-[var(--lern-text-primary)] active:scale-[0.98]"
                >
                  ← Zurück zur Demo-Übersicht
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Feedback Overlay */}
      <FeedbackOverlay
        type={feedbackType}
        onDone={() => setFeedbackType(null)}
      />
    </div>
  );
}
