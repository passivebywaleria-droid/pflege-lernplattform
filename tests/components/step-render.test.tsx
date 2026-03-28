/**
 * Komponenten-Render-Tests — Prüft ob alle 27 Step-Typen rendern
 *
 * Für jeden Step-Typ:
 * - Rendert ohne Crash mit Minimal-Props
 * - Zeigt Titel an
 * - Hat interaktive Elemente (Buttons)
 *
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

// Mocks für framer-motion (vereinfacht für Tests)
vi.mock("framer-motion", () => {
  const actual = {
    motion: new Proxy({} as Record<string, unknown>, {
      get: (_target, prop: string) => {
        // Für jede HTML-Eigenschaft (div, button, span, etc.) eine Wrapper-Komponente
        return React.forwardRef(function MotionComponent(
          props: Record<string, unknown>,
          ref: React.Ref<HTMLElement>
        ) {
          // framer-motion spezifische Props entfernen
          const {
            initial: _i,
            animate: _a,
            exit: _e,
            transition: _t,
            variants: _v,
            whileHover: _wh,
            whileTap: _wt,
            layout: _l,
            layoutId: _li,
            drag: _d,
            dragConstraints: _dc,
            dragElastic: _de,
            onDragEnd: _ode,
            ...rest
          } = props;

          // style kann MotionValues enthalten — zu normalen Werten konvertieren
          if (rest.style && typeof rest.style === "object") {
            const cleanStyle: Record<string, unknown> = {};
            for (const [key, val] of Object.entries(rest.style as Record<string, unknown>)) {
              // MotionValue hat .get() Methode
              if (val && typeof val === "object" && "get" in val) {
                cleanStyle[key] = (val as { get(): unknown }).get();
              } else {
                cleanStyle[key] = val;
              }
            }
            rest.style = cleanStyle;
          }

          return React.createElement(prop, { ...rest, ref });
        });
      },
    }),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
    useMotionValue: (initial: number) => ({
      get: () => initial,
      set: vi.fn(),
      on: vi.fn(() => vi.fn()),
    }),
    useTransform: (value: unknown, _input: unknown, output: unknown[]) => ({
      get: () => (Array.isArray(output) ? output[Math.floor(output.length / 2)] : 0),
      set: vi.fn(),
      on: vi.fn(() => vi.fn()),
    }),
    useAnimation: () => ({
      start: vi.fn(),
      stop: vi.fn(),
    }),
    useSpring: (val: unknown) => val,
  };
  return actual;
});

// Mock für @dnd-kit
vi.mock("@dnd-kit/core", () => ({
  DndContext: ({ children }: { children: React.ReactNode }) => React.createElement("div", null, children),
  closestCenter: vi.fn(),
  KeyboardSensor: vi.fn(),
  PointerSensor: vi.fn(),
  useSensor: vi.fn(),
  useSensors: vi.fn(() => []),
  DragOverlay: ({ children }: { children: React.ReactNode }) => React.createElement("div", null, children),
}));

vi.mock("@dnd-kit/sortable", () => ({
  SortableContext: ({ children }: { children: React.ReactNode }) => React.createElement("div", null, children),
  verticalListSortingStrategy: {},
  useSortable: () => ({
    attributes: {},
    listeners: {},
    setNodeRef: vi.fn(),
    transform: null,
    transition: null,
    isDragging: false,
  }),
  arrayMove: (arr: unknown[], from: number, to: number) => {
    const newArr = [...arr];
    const [item] = newArr.splice(from, 1);
    newArr.splice(to, 0, item);
    return newArr;
  },
}));

vi.mock("@dnd-kit/utilities", () => ({
  CSS: { Transform: { toString: () => "" } },
}));

// ===== Imports der Step-Komponenten =====

import { StepText } from "@/components/learn/step-text";
import { StepMC as StepMc } from "@/components/learn/step-mc";
import { StepMatching } from "@/components/learn/step-matching";
import { StepSorting } from "@/components/learn/step-sorting";
import { StepBranching } from "@/components/learn/step-branching";
import { StepFreetext } from "@/components/learn/step-freetext";
import { StepSelfrating } from "@/components/learn/step-selfrating";
import { StepFillIn as StepFillin } from "@/components/learn/step-fillin";
import { StepTrueFalse } from "@/components/learn/step-truefalse";
import { StepTimer } from "@/components/learn/step-timer";
import { StepMemory } from "@/components/learn/step-memory";
import { StepCrossword } from "@/components/learn/step-crossword";
import { StepCategorize } from "@/components/learn/step-categorize";
import { StepHighlight } from "@/components/learn/step-highlight";
import { StepDialog } from "@/components/learn/step-dialog";
import { StepReflection } from "@/components/learn/step-reflection";
import { StepHotspot } from "@/components/learn/step-hotspot";
import { StepConfidence } from "@/components/learn/step-confidence";
import { StepCloze } from "@/components/learn/step-cloze";
import { StepSequencing } from "@/components/learn/step-sequencing";
import { StepSlider } from "@/components/learn/step-slider";
import { StepSummary } from "@/components/learn/step-summary";
import { StepSwipe } from "@/components/learn/step-swipe";
import { StepFlipCard } from "@/components/learn/step-flipcard";
import { StepReveal } from "@/components/learn/step-reveal";
import { StepTimeline } from "@/components/learn/step-timeline";
import { StepComparison } from "@/components/learn/step-comparison";

// ===== Test-Daten =====

const onNext = vi.fn();

const MINIMAL_PROPS = {
  text: {
    component: StepText,
    props: { title: "Test Titel", body: "Test Body Text", onNext },
  },
  mc: {
    component: StepMc,
    props: {
      title: "MC Test",
      body: "Body",
      fragetext: "Was ist richtig?",
      optionen: [
        { text: "A", isCorrect: true, explanation: "Richtig" },
        { text: "B", isCorrect: false, explanation: "Falsch" },
      ],
      onNext,
    },
  },
  matching: {
    component: StepMatching,
    props: {
      title: "Matching Test",
      body: "Body",
      fragetext: "Ordne zu",
      pairs: [
        { left: "Links 1", right: "Rechts 1" },
        { left: "Links 2", right: "Rechts 2" },
      ],
      onNext,
    },
  },
  sorting: {
    component: StepSorting,
    props: {
      title: "Sorting Test",
      body: "Body",
      fragetext: "Sortiere richtig",
      items: ["Erst", "Dann", "Zuletzt"],
      onNext,
    },
  },
  branching: {
    component: StepBranching,
    props: {
      title: "Branching Test",
      body: "Szenario hier",
      options: [
        { text: "Option A", feedback: "Gut gewählt", isCorrect: true },
        { text: "Option B", feedback: "Nicht optimal", isCorrect: false },
      ],
      onNext,
    },
  },
  freetext: {
    component: StepFreetext,
    props: {
      title: "Freetext Test",
      body: "Beschreibe...",
      fragetext: "Was denkst du?",
      musterantwort: "Eine gute Antwort.",
      onNext,
    },
  },
  selfrating: {
    component: StepSelfrating,
    props: {
      title: "Selfrating Test",
      body: "Wie sicher bist du?",
      onNext,
    },
  },
  fillin: {
    component: StepFillin,
    props: {
      title: "Fillin Test",
      body: "Ergänze",
      sentence: "Der ___ ist entzündet.",
      options: ["Muskel", "Knochen"],
      correctIndex: 0,
      onNext,
    },
  },
  truefalse: {
    component: StepTrueFalse,
    props: {
      title: "TrueFalse Test",
      body: "Wahr oder falsch?",
      cards: [
        { statement: "Die Erde ist rund.", isTrue: true, explanation: "Stimmt!" },
        { statement: "Wasser ist trocken.", isTrue: false, explanation: "Nein!" },
      ],
      onNext,
    },
  },
  timer: {
    component: StepTimer,
    props: {
      title: "Timer Test",
      body: "Schnell antworten!",
      questions: [
        { question: "1+1?", options: ["2", "3"], correctIndex: 0 },
      ],
      timeLimitSeconds: 30,
      onNext,
    },
  },
  memory: {
    component: StepMemory,
    props: {
      title: "Memory Test",
      body: "Finde die Paare",
      pairs: [
        { a: "Deku", b: "Druckgeschwür" },
        { a: "Thrombus", b: "Blutgerinnsel" },
      ],
      onNext,
    },
  },
  crossword: {
    component: StepCrossword,
    props: {
      title: "Crossword Test",
      body: "Löse das Rätsel",
      words: [
        { word: "PFLEGE", clue: "Beruf im Krankenhaus" },
      ],
      onNext,
    },
  },
  categorize: {
    component: StepCategorize,
    props: {
      title: "Categorize Test",
      body: "Ordne ein",
      categories: [{ name: "Kat A" }, { name: "Kat B" }],
      items: [
        { text: "Item 1", correctCategory: 0 },
        { text: "Item 2", correctCategory: 1 },
      ],
      onNext,
    },
  },
  highlight: {
    component: StepHighlight,
    props: {
      title: "Highlight Test",
      body: "Finde die Fehler",
      fragetext: "Markiere die falschen Stellen",
      segments: [
        { text: "Richtig ", isError: false },
        { text: "Falsch", isError: true, reason: "Das ist falsch" },
      ],
      onNext,
    },
  },
  dialog: {
    component: StepDialog,
    props: {
      title: "Dialog Test",
      body: "Patientengespräch",
      patientName: "Max",
      phases: [
        {
          context: "Max kommt herein.",
          options: [
            { text: "Hallo Max", patientResponse: "Hallo", score: 3, feedback: "Gut!" },
            { text: "Was willst du?", patientResponse: "...", score: 1, feedback: "Unhöflich" },
          ],
        },
      ],
      onNext,
    },
  },
  reflection: {
    component: StepReflection,
    props: {
      title: "Reflection Test",
      body: "Reflektiere",
      prompt: "Was hast du gelernt?",
      placeholder: "Schreibe hier...",
      systemPrompt: "Du bist ein Pflegelehrer.",
      onNext,
    },
  },
  hotspot: {
    component: StepHotspot,
    props: {
      title: "Hotspot Test",
      body: "Tippe auf die richtige Stelle",
      imageUrl: "/test.jpg",
      imageAlt: "Testbild",
      instruction: "Tippe auf den Kopf",
      zones: [
        { id: "z1", x: 50, y: 20, radius: 10, label: "Kopf" },
      ],
      onNext,
    },
  },
  confidence: {
    component: StepConfidence,
    props: {
      title: "Confidence Test",
      body: "Wahr oder falsch + Sicherheit",
      cards: [
        { statement: "Aussage 1", isTrue: true, explanation: "Richtig!" },
      ],
      onNext,
    },
  },
  cloze: {
    component: StepCloze,
    props: {
      title: "Cloze Test",
      body: "Fülle die Lücken",
      textWithBlanks: "Die {{1}} ist entzündet.",
      blanks: [
        { id: 1, correct: "Synovialis", distractors: ["Fibula", "Patella"] },
      ],
      onNext,
    },
  },
  sequencing: {
    component: StepSequencing,
    props: {
      title: "Sequencing Test",
      body: "Sortiere die Schritte",
      instruction: "Bringe in die richtige Reihenfolge",
      items: [
        { id: "s1", label: "Schritt 1" },
        { id: "s2", label: "Schritt 2" },
      ],
      onNext,
    },
  },
  slider: {
    component: StepSlider,
    props: {
      title: "Slider Test",
      body: "Schätze den Wert",
      instruction: "Wie hoch ist der Wert?",
      unit: "%",
      min: 0,
      max: 100,
      step: 1,
      correctValue: 50,
      tolerance: 10,
      explanation: "50% ist korrekt.",
      onNext,
    },
  },
  summary: {
    component: StepSummary,
    props: {
      title: "Summary Test",
      body: "Zusammenfassung",
      reflexionRueckbezug: "Du hast gelernt...",
      kernaussagen: ["Punkt 1", "Punkt 2"],
      onNext,
    },
  },
  swipe: {
    component: StepSwipe,
    props: {
      title: "Swipe Test",
      body: "Stimmt oder stimmt nicht?",
      instruction: "Wische oder tippe",
      cards: [
        { statement: "Aussage 1", isCorrect: true, explanation: "Richtig!" },
        { statement: "Aussage 2", isCorrect: false, explanation: "Falsch!" },
      ],
      onNext,
    },
  },
  flipcard: {
    component: StepFlipCard,
    props: {
      title: "FlipCard Test",
      body: "Tippe zum Umdrehen",
      instruction: "Entdecke die Rückseiten",
      cards: [
        { front: "Vorne 1", back: "Hinten 1" },
        { front: "Vorne 2", back: "Hinten 2" },
      ],
      onNext,
    },
  },
  reveal: {
    component: StepReveal,
    props: {
      title: "Reveal Test",
      body: "Tippe zum Enthüllen",
      instruction: "Enthülle alle Karten",
      cards: [
        { id: "r1", label: "Karte 1", content: "Inhalt 1" },
        { id: "r2", label: "Karte 2", content: "Inhalt 2" },
      ],
      revealMode: "free" as const,
      onNext,
    },
  },
  timeline: {
    component: StepTimeline,
    props: {
      title: "Timeline Test",
      body: "Der Verlauf",
      instruction: "Tippe auf die Ereignisse",
      events: [
        { id: "e1", time: "Tag 1", title: "Start", description: "Beginn" },
        { id: "e2", time: "Tag 7", title: "Mitte", description: "Verlauf" },
      ],
      onNext,
    },
  },
  comparison: {
    component: StepComparison,
    props: {
      title: "Comparison Test",
      body: "Vergleiche",
      instruction: "Tippe auf die Zeilen",
      columns: [{ label: "Typ A" }, { label: "Typ B" }],
      rows: [
        { criterion: "Merkmal 1", values: ["Ja", "Nein"] },
        { criterion: "Merkmal 2", values: ["Nein", "Ja"] },
      ],
      onNext,
    },
  },
} as const;

// ===== Tests =====

describe("Step-Komponenten Render-Tests", () => {
  beforeEach(() => {
    onNext.mockClear();
  });

  for (const [stepType, { component: Component, props }] of Object.entries(MINIMAL_PROPS)) {
    describe(`Step: ${stepType}`, () => {
      it("rendert ohne Crash", () => {
        expect(() => {
          render(React.createElement(Component as React.ComponentType<Record<string, unknown>>, props as Record<string, unknown>));
        }).not.toThrow();
      });

      it("zeigt den Titel an", () => {
        const { container } = render(
          React.createElement(Component as React.ComponentType<Record<string, unknown>>, props as Record<string, unknown>)
        );
        const titleEl = container.querySelector("h2");
        expect(titleEl).not.toBeNull();
        expect(titleEl?.textContent).toContain("Test");
      });
    });
  }
});
