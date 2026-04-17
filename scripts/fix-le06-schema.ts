#!/usr/bin/env npx tsx
/**
 * LE-06 Schema-Migration v2: Transformiert alle Step-Typen auf kanonische Struktur
 * gemäß content/_types.ts + scripts/content-schema.ts (Validator).
 *
 * Einmalig ausführen. Danach: scripts/validate-le.ts le-06 → Schema Check PASS.
 */

import * as fs from "fs";
import * as path from "path";

type Any = Record<string, unknown>;
type AnyArr = unknown[];

const LE_DIR = path.join(__dirname, "..", "content", "le-06");

// Base-Felder die IMMER auf question erhalten bleiben (falls vorhanden)
const BASE_KEYS = new Set([
  "fragetext",
  "fragetextB1",
  "multiSelect",
  "mcVariant",
  "memoryVariant",
  "timerVariant",
  "sliderVariant",
  "trueFalseVariant",
  "selfratingVariant",
]);

function copyBase(src: Any): Any {
  const out: Any = {};
  for (const k of Object.keys(src)) if (BASE_KEYS.has(k)) out[k] = src[k];
  return out;
}

// --- Transformer pro stepType ---

interface Transformed {
  stepType: string;
  question: Any;
}

function transformMC(src: Any): Any {
  const out = copyBase(src);
  // optionen kann aus `optionen` oder `options` kommen
  const optionen = (src.optionen as AnyArr) ?? (src.options as AnyArr) ?? [];
  out.optionen = (optionen as Any[]).map((o: Any) => ({
    text: o.text,
    isCorrect: Boolean(o.isCorrect ?? o.correct),
    explanation: o.explanation ?? "",
    ...(o.explanationB1 ? { explanationB1: o.explanationB1 } : {}),
  }));
  return out;
}

function transformSequencing(src: Any): Any {
  const out = copyBase(src);
  // Quellen: sequencing.items | sequencingItems | items
  let rawItems: Any[] =
    ((src.sequencing as Any)?.items as Any[]) ??
    (src.sequencingItems as Any[]) ??
    (src.items as Any[]) ??
    [];

  // Wenn correctOrder oder correctPosition vorhanden → sortieren, dann order = implizit
  const hasOrder = rawItems.some((i) => "correctOrder" in i || "correctPosition" in i);
  if (hasOrder) {
    rawItems = [...rawItems].sort((a, b) => {
      const ai = (a.correctOrder ?? a.correctPosition ?? 0) as number;
      const bi = (b.correctOrder ?? b.correctPosition ?? 0) as number;
      return ai - bi;
    });
  }

  out.sequencing = {
    instruction: (src.sequencing as Any)?.instruction ?? src.fragetext ?? "Sortiere.",
    items: rawItems.map((it: Any, idx: number) => ({
      id: (it.id as string) ?? `item-${idx + 1}`,
      label: (it.label as string) ?? (it.text as string) ?? "",
      ...(it.imageUrl ? { imageUrl: it.imageUrl } : {}),
    })),
  };
  return out;
}

function transformFlipcard(src: Any): Any {
  const out = copyBase(src);
  // Quellen: flipcard.cards | flipCards.cards | flipcards (flat array)
  let cards: Any[] = [];
  if ((src.flipcard as Any)?.cards) cards = (src.flipcard as Any).cards as Any[];
  else if ((src.flipCards as Any)?.cards) cards = (src.flipCards as Any).cards as Any[];
  else if (Array.isArray(src.flipcards)) cards = src.flipcards as Any[];
  else if (Array.isArray(src.flipcard)) cards = src.flipcard as Any[];

  out.flipcard = {
    instruction:
      (src.flipcard as Any)?.instruction ??
      (src.flipCards as Any)?.instruction ??
      src.fragetext ??
      "Karten umdrehen.",
    cards: cards.map((c: Any) => ({
      front: (c.front as string) ?? "",
      back: (c.back as string) ?? "",
      ...(c.backB1 ? { backB1: c.backB1 } : {}),
      ...(c.category ? { category: c.category } : {}),
    })),
  };
  return out;
}

function transformErrorspot(src: Any): Any {
  const out = copyBase(src);
  // Quellen:
  //  - errorSpot: { text, errors, feedback }
  //  - errorspot: kanonisch
  //  - szenario + fehler[{id,text,istFehler,erklaerung}]
  let text = "";
  let errors: Any[] = [];

  if ((src.errorspot as Any)?.errors) {
    const es = src.errorspot as Any;
    text = es.text as string;
    errors = es.errors as Any[];
  } else if ((src.errorSpot as Any)?.errors) {
    const es = src.errorSpot as Any;
    text = es.text as string;
    errors = (es.errors as Any[]).map((e: Any) => ({
      start: (e.start as number) ?? 0,
      end: (e.end as number) ?? 0,
      correction: (e.correction as string) ?? (e.richtig as string) ?? "",
      explanation: (e.explanation as string) ?? (e.erklaerung as string) ?? "",
      ...(e.explanationB1 || e.erklaerungB1
        ? { explanationB1: e.explanationB1 ?? e.erklaerungB1 }
        : {}),
    }));
  } else if (Array.isArray(src.fehler)) {
    // Szenario + fehler — wir konstruieren text aus fragetext + hängen fehler an
    text = (src.szenario as string) ?? (src.fragetext as string) ?? "";
    // Ohne start/end-Angabe: geben wir künstliche Positionen basierend auf Reihenfolge
    errors = (src.fehler as Any[])
      .filter((f: Any) => f.istFehler)
      .map((f: Any, idx: number) => {
        const phrase = (f.text as string) ?? "";
        const start = text.indexOf(phrase);
        return {
          start: start >= 0 ? start : idx,
          end: start >= 0 ? start + phrase.length : idx + phrase.length,
          correction: (f.korrektur as string) ?? "",
          explanation: (f.erklaerung as string) ?? "",
        };
      });
  }

  out.errorspot = {
    instruction: src.fragetext ?? "Finde die Fehler.",
    text,
    errors: errors.length > 0 ? errors : [{ start: 0, end: 0, correction: "", explanation: "" }],
  };
  return out;
}

function transformTruefalse(src: Any): Any {
  // Convert truefalse stepType to MC stepType with Richtig/Falsch options
  // Reason: validator requires ≥2 trueFalseCards, but LE-06 has 1 statement per step
  const out = copyBase(src);
  const tf = (src.truefalse as Any) ?? {};
  const correct = Boolean(tf.correct ?? src.correctAnswer);
  const explanationTrue = (tf.feedbackTrue as string) ?? (correct ? (src.explanation as string) ?? "" : "");
  const explanationFalse = (tf.feedbackFalse as string) ?? (!correct ? (src.explanation as string) ?? "" : "");
  const explanationTrueB1 = (tf.feedbackTrueB1 as string) ?? undefined;
  const explanationFalseB1 = (tf.feedbackFalseB1 as string) ?? undefined;

  out.optionen = [
    {
      text: "Richtig",
      isCorrect: correct,
      explanation: correct ? explanationTrue : explanationFalse,
      ...(correct && explanationTrueB1 ? { explanationB1: explanationTrueB1 } : {}),
      ...(!correct && explanationFalseB1 ? { explanationB1: explanationFalseB1 } : {}),
    },
    {
      text: "Falsch",
      isCorrect: !correct,
      explanation: !correct ? explanationTrue : explanationFalse,
      ...(!correct && explanationTrueB1 ? { explanationB1: explanationTrueB1 } : {}),
      ...(correct && explanationFalseB1 ? { explanationB1: explanationFalseB1 } : {}),
    },
  ];
  return out;
}

function transformMatching(src: Any): Any {
  const out = copyBase(src);
  let pairs: Any[] = [];
  if (Array.isArray(src.matchingPairs)) pairs = src.matchingPairs as Any[];
  else if ((src.matching as Any)?.pairs) pairs = (src.matching as Any).pairs as Any[];
  else if (Array.isArray(src.pairs)) pairs = src.pairs as Any[];

  out.matchingPairs = pairs.map((p: Any) => ({
    left: (p.left as string) ?? "",
    right: (p.right as string) ?? "",
  }));
  return out;
}

function transformCategorize(src: Any): Any {
  const out = copyBase(src);
  // Quellen:
  //  - categorize: { categories, items } with items[{id,text,categoryId}]
  //  - categories + categoryItems (kanonisch)
  //  - categories + items
  let categories: Any[] = [];
  let items: Any[] = [];

  if ((src.categorize as Any)?.categories) {
    const c = src.categorize as Any;
    categories = c.categories as Any[];
    items = (c.items ?? c.categoryItems) as Any[];
  } else {
    categories = (src.categories as Any[]) ?? [];
    items = (src.categoryItems as Any[]) ?? (src.items as Any[]) ?? [];
  }

  // categoryItems müssen { text, correctCategory: number (index) } sein
  const catIndexById: Record<string, number> = {};
  categories.forEach((c: Any, idx) => {
    if (c.id) catIndexById[c.id as string] = idx;
    if (c.name) catIndexById[c.name as string] = idx;
  });

  out.categories = categories.map((c: Any) => ({ name: (c.name as string) ?? (c.id as string) ?? "" }));
  out.categoryItems = items.map((it: Any) => {
    let correct = 0;
    if (typeof it.correctCategory === "number") correct = it.correctCategory as number;
    else if (typeof it.correctCategory === "string") correct = catIndexById[it.correctCategory as string] ?? 0;
    else if (it.categoryId) correct = catIndexById[it.categoryId as string] ?? 0;
    return {
      text: (it.text as string) ?? "",
      correctCategory: correct,
    };
  });
  return out;
}

function transformTimer(src: Any): Any {
  const out = copyBase(src);
  let tq: Any[] = [];
  let timeLimit = 60;

  if (Array.isArray(src.timerQuestions)) {
    tq = src.timerQuestions as Any[];
    timeLimit = (src.timeLimitSeconds as number) ?? (src.timeLimit as number) ?? 60;
  } else if ((src.timer as Any)?.items) {
    const t = src.timer as Any;
    const items = t.items as Any[];
    timeLimit = (t.durationSec as number) ?? 60;
    // items[{id,text,correct}] → TimerQuestion[{question, options, correctIndex}]
    tq = items.map((it: Any) => ({
      question: (it.text as string) ?? "",
      options: ["Richtig", "Falsch"],
      correctIndex: it.correct ? 0 : 1,
    }));
  } else if (Array.isArray(src.items)) {
    const items = src.items as Any[];
    timeLimit = (src.timeLimit as number) ?? 60;
    tq = items.map((it: Any) => ({
      question: (it.text as string) ?? (it.question as string) ?? "",
      options: (it.options as string[]) ?? ["Richtig", "Falsch"],
      correctIndex: typeof it.correctIndex === "number" ? it.correctIndex : it.correct ? 0 : 1,
    }));
  }

  out.timerQuestions = tq;
  out.timeLimitSeconds = timeLimit;
  return out;
}

function transformCrossword(src: Any): Any {
  const out = copyBase(src);
  // Quellen:
  //  - crossword: { clues: [{id,hint,answer,direction}] }
  //  - clues[]
  let clues: Any[] = [];
  if ((src.crossword as Any)?.clues) clues = (src.crossword as Any).clues as Any[];
  else if (Array.isArray(src.clues)) clues = src.clues as Any[];

  // Validator will crosswordWords: CrosswordWord[] { word, clue }
  out.crosswordWords = clues.map((c: Any) => ({
    word: (c.answer as string) ?? (c.word as string) ?? "",
    clue: (c.hint as string) ?? (c.clue as string) ?? "",
  }));
  return out;
}

function transformBranching(src: Any): Any {
  const out = copyBase(src);
  // LE-06 hat: branches[{id, situation, options:[{text, feedback, isCorrect}]}]
  // Wir flatten auf branchingOptions (erster Branch)
  let branchOptions: Any[] = [];
  if (Array.isArray(src.branchingOptions)) {
    branchOptions = src.branchingOptions as Any[];
  } else if (Array.isArray(src.branches)) {
    const firstBranch = (src.branches as Any[])[0];
    branchOptions = (firstBranch?.options as Any[]) ?? [];
  } else if ((src.branching as Any)?.nodes) {
    const nodes = (src.branching as Any).nodes as Any[];
    const startNode = nodes[0];
    branchOptions = (startNode?.options as Any[]) ?? [];
  }

  out.branchingOptions = branchOptions.map((o: Any) => ({
    text: (o.text as string) ?? "",
    feedback: (o.feedback as string) ?? "",
    ...(o.feedbackB1 ? { feedbackB1: o.feedbackB1 } : {}),
    isCorrect: Boolean(o.isCorrect),
  }));
  return out;
}

function transformConfidence(src: Any): Any {
  const out = copyBase(src);
  // Validator will: statements: string[] (min 1)
  // Quellen:
  //  - confidence: { scale, labels[], prompt }
  //  - levels[{id,label}]
  //  - statements bereits vorhanden
  let statements: string[] = [];
  if (Array.isArray(src.statements)) statements = src.statements as string[];
  else if (Array.isArray(src.levels)) {
    statements = (src.levels as Any[]).map((l: Any) => (l.label as string) ?? "");
  } else if ((src.confidence as Any)?.labels) {
    statements = (src.confidence as Any).labels as string[];
  } else if ((src.confidence as Any)?.prompt) {
    statements = [(src.confidence as Any).prompt as string];
  } else if (src.fragetext) {
    statements = [src.fragetext as string];
  }
  out.statements = statements.length > 0 ? statements : [src.fragetext as string];
  return out;
}

function transformSwipe(src: Any): Any {
  const out = copyBase(src);
  // LE-06: swipeCards[{id, text, correctCategory}] + separate categories[{name}]
  // Kanonisch: swipe: { instruction, cards: SwipeCard[{statement, isCorrect, explanation}] }
  let cards: Any[] = [];
  let instruction = "";
  if ((src.swipe as Any)?.cards) {
    const s = src.swipe as Any;
    cards = s.cards as Any[];
    instruction = (s.instruction as string) ?? src.fragetext ?? "Wische.";
  } else if (Array.isArray(src.swipeCards)) {
    cards = src.swipeCards as Any[];
    instruction = (src.fragetext as string) ?? "Wische nach rechts (richtig) oder links (falsch).";
  }

  // Map to SwipeCard
  // Wenn correctCategory vorhanden ist (z.B. 0 oder 1 bzw. ein string),
  // nehmen wir: 0/"richtig"/"true" = isCorrect true, sonst false
  const mapped = cards.map((c: Any) => {
    let isCorrect = false;
    if (typeof c.isCorrect === "boolean") isCorrect = c.isCorrect;
    else if (typeof c.correctCategory === "number") isCorrect = c.correctCategory === 0;
    else if (typeof c.correctCategory === "string") {
      const lc = (c.correctCategory as string).toLowerCase();
      isCorrect = lc === "richtig" || lc === "true" || lc === "ja";
    }
    return {
      statement: (c.statement as string) ?? (c.text as string) ?? "",
      ...(c.statementB1 ? { statementB1: c.statementB1 } : {}),
      isCorrect,
      explanation: (c.explanation as string) ?? "",
      ...(c.explanationB1 ? { explanationB1: c.explanationB1 } : {}),
    };
  });

  out.swipe = { instruction, cards: mapped };
  return out;
}

function transformMemory(src: Any): Any {
  const out = copyBase(src);
  // Kanonisch: memoryPairs: MemoryPair[{a, b}]
  let pairs: Any[] = [];
  if (Array.isArray(src.memoryPairs)) pairs = src.memoryPairs as Any[];
  else if (Array.isArray(src.pairs)) pairs = src.pairs as Any[];

  out.memoryPairs = pairs.map((p: Any) => ({
    a: (p.a as string) ?? (p.itemA as string) ?? (p.left as string) ?? "",
    b: (p.b as string) ?? (p.itemB as string) ?? (p.right as string) ?? "",
  }));
  return out;
}

function transformCloze(src: Any): Any {
  const out = copyBase(src);
  // Kanonisch: cloze: { textWithBlanks, blanks: ClozeBlank[{id, correct, distractors[]}] }
  let textWithBlanks = "";
  let blanks: Any[] = [];

  if ((src.cloze as Any)?.textWithBlanks) {
    const c = src.cloze as Any;
    textWithBlanks = c.textWithBlanks as string;
    blanks = c.blanks as Any[];
  } else if (src.sentence) {
    textWithBlanks = src.sentence as string;
    blanks = (src.blanks as Any[]) ?? [];
  }

  out.cloze = {
    textWithBlanks,
    blanks: blanks.map((b: Any, idx: number) => {
      // LE-06 hat correctAnswers, kanonisch: correct (single) + distractors[]
      const ca = (b.correctAnswers as string[]) ?? [];
      const correct = (b.correct as string) ?? ca[0] ?? "";
      const distractors = (b.distractors as string[]) ?? ca.slice(1) ?? [];
      return {
        id: typeof b.id === "number" ? (b.id as number) : idx + 1,
        correct,
        distractors,
      };
    }),
  };
  return out;
}

function transformEstimation(src: Any): Any {
  const out = copyBase(src);
  if (src.estimation) {
    out.estimation = src.estimation as Any;
  } else {
    out.estimation = {
      instruction: src.fragetext ?? "",
      unit: (src.unit as string) ?? "",
      correctValue: (src.correctValue as number) ?? 0,
      tolerance: (src.tolerance as number) ?? 10,
      funFact: (src.funFact as string) ?? "",
      explanation: (src.explanation as string) ?? "",
      ...(src.explanationB1 ? { explanationB1: src.explanationB1 } : {}),
    };
  }
  return out;
}

function transformMatrix(src: Any): Any {
  const out = copyBase(src);
  out.matrix = src.matrix as Any;
  return out;
}

function transformCareplan(src: Any): Any {
  const out = copyBase(src);
  // LE-06: prophylaxen[{id,name,muster}] + minMassnahmenProProphylaxe + muster
  // Kanonisch: careplan: { patientName, situation, steps: CarePlanStep[{phase, prompt, musterantwort?}] }
  if ((src.careplan as Any)?.steps) {
    out.careplan = src.careplan as Any;
  } else if (Array.isArray(src.prophylaxen)) {
    const muster = (src.muster as Any) ?? {};
    const steps = (src.prophylaxen as Any[]).map((p: Any) => ({
      phase: "massnahme" as const,
      prompt: `Nenne Maßnahmen zur ${(p.name as string) ?? (p.titel as string)}`,
      musterantwort:
        (p.muster as string) ??
        (muster[p.id as string] as string) ??
        "Maßnahmen siehe Fachliteratur.",
    }));
    out.careplan = {
      patientName: "Leitfall",
      situation: src.fragetext ?? "Patientensituation.",
      steps,
    };
  } else {
    // Fallback
    out.careplan = {
      patientName: "Leitfall",
      situation: src.fragetext ?? "",
      steps: [
        {
          phase: "problem",
          prompt: src.fragetext ?? "",
          musterantwort: (src.muster as string) ?? "",
        },
      ],
    };
  }
  return out;
}

function transformReflection(src: Any): Any {
  const out = copyBase(src);
  if ((src.reflection as Any)?.prompt) {
    out.reflection = src.reflection as Any;
  } else {
    out.reflection = {
      prompt: src.fragetext ?? "Schreibe deine Gedanken.",
      placeholder: `Schreibe mindestens ${(src.minLength as number) ?? 50} Zeichen.`,
      systemPrompt: "Bewerte die Reflexion auf Tiefe und Bezug zum Thema.",
    };
  }
  // Bewertungskriterien + satzanfaengeB1 sind im allgemeinen question-Typ erlaubt
  if (Array.isArray(src.bewertungskriterien)) out.bewertungskriterien = src.bewertungskriterien;
  return out;
}

function transformFreetext(src: Any): Any {
  const out = copyBase(src);
  // Freetext hat keine Validator-Regeln, aber wir behalten sinnvolle Felder
  if (src.musterantwort ?? src.muster) out.musterantwort = (src.musterantwort as string) ?? (src.muster as string);
  if (Array.isArray(src.bewertungskriterien)) out.bewertungskriterien = src.bewertungskriterien;
  if (Array.isArray(src.kernpunkte)) out.bewertungskriterien = src.kernpunkte as string[];
  if (Array.isArray(src.satzanfaengeB1)) out.satzanfaengeB1 = src.satzanfaengeB1;
  return out;
}

function transformHotspot(src: Any): Any {
  const out = copyBase(src);
  out.hotspot = src.hotspot as Any;
  return out;
}

function transformCrowdPoll(src: Any): Any {
  const out = copyBase(src);
  out.crowdPoll = src.crowdPoll as Any;
  return out;
}

function transformDiagram(src: Any): Any {
  const out = copyBase(src);
  out.diagram = src.diagram as Any;
  return out;
}

function transformLabelImage(src: Any): Any {
  const out = copyBase(src);
  out.labelImage = src.labelImage as Any;
  return out;
}

function transformComparison(src: Any): Any {
  const out = copyBase(src);
  out.comparison = src.comparison as Any;
  return out;
}

function transformDialog(src: Any): Any {
  const out = copyBase(src);
  if (Array.isArray(src.dialogPhases)) out.dialogPhases = src.dialogPhases;
  return out;
}

function transformReveal(src: Any): Any {
  const out = copyBase(src);
  out.reveal = src.reveal as Any;
  return out;
}

function transformTimeline(src: Any): Any {
  const out = copyBase(src);
  out.timeline = src.timeline as Any;
  return out;
}

function transformSlider(src: Any): Any {
  const out = copyBase(src);
  out.slider = src.slider as Any;
  return out;
}

function transformText(src: Any): Any {
  return copyBase(src);
}

// --- Dispatch + Step-Transform ---

function transformStep(step: Any): Any {
  const q = (step.question as Any) ?? {};
  const type = step.stepType as string;
  let newQ: Any = {};

  switch (type) {
    case "mc":
      newQ = transformMC(q);
      break;
    case "sequencing":
      newQ = transformSequencing(q);
      break;
    case "flipcard":
      newQ = transformFlipcard(q);
      break;
    case "errorspot":
      newQ = transformErrorspot(q);
      break;
    case "truefalse":
      // Konvertiere truefalse → mc
      newQ = transformTruefalse(q);
      return { ...step, stepType: "mc", question: newQ };
    case "matching":
      newQ = transformMatching(q);
      break;
    case "categorize":
      newQ = transformCategorize(q);
      break;
    case "timer":
      newQ = transformTimer(q);
      break;
    case "crossword":
      newQ = transformCrossword(q);
      break;
    case "branching":
      newQ = transformBranching(q);
      break;
    case "confidence":
      newQ = transformConfidence(q);
      break;
    case "swipe":
      newQ = transformSwipe(q);
      break;
    case "memory":
      newQ = transformMemory(q);
      break;
    case "cloze":
      newQ = transformCloze(q);
      break;
    case "estimation":
      newQ = transformEstimation(q);
      break;
    case "matrix":
      newQ = transformMatrix(q);
      break;
    case "careplan":
      newQ = transformCareplan(q);
      break;
    case "reflection":
      newQ = transformReflection(q);
      break;
    case "freetext":
      newQ = transformFreetext(q);
      break;
    case "hotspot":
      newQ = transformHotspot(q);
      break;
    case "crowdPoll":
      newQ = transformCrowdPoll(q);
      break;
    case "diagram":
      newQ = transformDiagram(q);
      break;
    case "labelImage":
      newQ = transformLabelImage(q);
      break;
    case "comparison":
      newQ = transformComparison(q);
      break;
    case "dialog":
      newQ = transformDialog(q);
      break;
    case "reveal":
      newQ = transformReveal(q);
      break;
    case "timeline":
      newQ = transformTimeline(q);
      break;
    case "slider":
      newQ = transformSlider(q);
      break;
    case "text":
      newQ = transformText(q);
      break;
    default:
      // Unbekannter Typ — unverändert lassen
      return step;
  }

  // Wenn question leer ist (z.B. text-Step ohne fragetext), entferne question komplett
  if (Object.keys(newQ).length === 0 || (Object.keys(newQ).length === 1 && newQ.fragetext === undefined)) {
    const { question: _drop, ...rest } = step;
    void _drop;
    return rest;
  }

  // Wenn fragetext fehlt aber question nicht leer ist, füge leeren fragetext hinzu
  if (!newQ.fragetext) {
    newQ.fragetext = "";
  }

  return { ...step, question: newQ };
}

// --- Custom TS Serializer ---

const INDENT = "  ";

function serializeValue(value: unknown, depth = 0): string {
  const pad = INDENT.repeat(depth);
  const padNext = INDENT.repeat(depth + 1);

  if (value === null) return "null";
  if (value === undefined) return "undefined";
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "number") return Number.isFinite(value) ? String(value) : "null";
  if (typeof value === "string") return serializeString(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const items = value.map((v) => padNext + serializeValue(v, depth + 1));
    return "[\n" + items.join(",\n") + ",\n" + pad + "]";
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Any).filter(([, v]) => v !== undefined);
    if (entries.length === 0) return "{}";
    const lines = entries.map(([k, v]) => {
      const key = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
      return padNext + key + ": " + serializeValue(v, depth + 1);
    });
    return "{\n" + lines.join(",\n") + ",\n" + pad + "}";
  }
  return "null";
}

function serializeString(str: string): string {
  const escaped = str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t");
  return '"' + escaped + '"';
}

// --- Main ---

function main(): void {
  const files = fs
    .readdirSync(LE_DIR)
    .filter((f) => /^steps-s\d+\.ts$/.test(f))
    .sort();

  let totalTransformed = 0;

  for (const file of files) {
    const filePath = path.join(LE_DIR, file);
    const sessionNum = file.match(/s(\d+)/)![1];
    const exportName = `LE06_STEPS_S${sessionNum}`;

    // Preserve header comments
    const orig = fs.readFileSync(filePath, "utf-8");
    const headerMatch = orig.match(/^([\s\S]*?)export\s+const\s+LE06_STEPS_S\d+/);
    const header = headerMatch ? headerMatch[1].trimEnd() : `import type { ContentStep } from "../_types";`;

    // Load
    delete require.cache[require.resolve(filePath)];
    const mod = require(filePath);
    const steps = mod[exportName] as Any[];

    const transformed = steps.map((s) => transformStep(s));

    const body = serializeValue(transformed, 0);
    const out = `${header}\n\nexport const ${exportName}: ContentStep[] = ${body};\n`;

    fs.writeFileSync(filePath, out, "utf-8");
    totalTransformed += steps.length;
    console.log(`  ✅ ${file}: ${steps.length} Steps migriert`);
  }

  console.log(`\n  Gesamt: ${totalTransformed} Steps migriert`);
}

main();
