// Shared Types für alle Lektionen in CE 05
// Alle steps.ts Dateien importieren von hier

export interface StepOption {
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface MatchingPair {
  left: string;
  right: string;
}

// Fill-in question data
export interface FillInData {
  sentence: string;
  options: string[];
  correctIndex: number;
}

// True/False card data
export interface TrueFalseCard {
  statement: string;
  isTrue: boolean;
  explanation: string;
}

// Timer question data
export interface TimerQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

// Memory pair data
export interface MemoryPair {
  a: string;
  b: string;
}

// Crossword word data
export interface CrosswordWord {
  word: string;
  clue: string;
}

// Category data
export interface CategoryDef {
  name: string;
}

export interface CategoryItem {
  text: string;
  correctCategory: number;
}

// Highlight text segment
export interface HighlightSegment {
  text: string;
  isError: boolean;
  reason?: string;
}

// Dialog phase data
export interface DialogOption {
  text: string;
  patientResponse: string;
  score: number;
  feedback: string;
}

export interface DialogPhase {
  context: string;
  vitals?: string;
  options: DialogOption[];
}

// === NEUE STEP-TYPEN ===

// Reflection — Offene Reflexion mit KI-Feedback (Nebius)
export interface ReflectionData {
  prompt: string;
  placeholder: string;
  systemPrompt: string;
}

// Hotspot — Auf Bild tippen
export interface HotspotZone {
  id: string;
  x: number;  // % von links (0-100)
  y: number;  // % von oben (0-100)
  radius: number;  // Hitbox-Radius in %
  label: string;
}

export interface HotspotData {
  imageUrl: string;
  imageAlt: string;
  instruction: string;
  zones: HotspotZone[];
}

// Confidence — Wahr/Falsch + "Wie sicher bist du?"
export interface ConfidenceCard {
  statement: string;
  isTrue: boolean;
  explanation: string;
}

// Cloze — Lückentext mit mehreren Lücken
export interface ClozeBlank {
  id: number;
  correct: string;
  distractors: string[];
}

export interface ClozeData {
  textWithBlanks: string;  // "Die {{1}} greift die {{2}} an."
  blanks: ClozeBlank[];
}

// Sequencing — Bildbasierte Reihenfolge
export interface SequencingItem {
  id: string;
  label: string;
  imageUrl?: string;
}

export interface SequencingData {
  instruction: string;
  items: SequencingItem[];
}

// Slider — Schätzfragen / Berechnungen
export interface SliderData {
  instruction: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  correctValue: number;
  tolerance: number;
  explanation: string;
}

// Summary — Rückbezug + Ergebnis-Screen
export interface SummaryData {
  reflexionRueckbezug: string;  // "Jetzt weißt du: ..."
  kernaussagen: string[];
}

export interface ContentStep {
  stepId: string;
  phase: 1 | 2 | 3 | 4 | 5 | 6;
  stepType:
    | "text"
    | "mc"
    | "freetext"
    | "sorting"
    | "matching"
    | "branching"
    | "selfrating"
    | "fillin"
    | "truefalse"
    | "timer"
    | "memory"
    | "crossword"
    | "categorize"
    | "highlight"
    | "dialog"
    | "reflection"
    | "hotspot"
    | "confidence"
    | "cloze"
    | "sequencing"
    | "slider"
    | "summary";
  bloomLevel: 1 | 2 | 3 | 4 | 5 | 6;
  kompetenzbereich: string;
  quellen: string[];

  // Optionales XP-Override pro Step
  xpValue?: number;

  // Optionale Illustration inline
  imageUrl?: string;
  imageAlt?: string;

  // "Wusstest du?" Collapsible-Element
  wusstestDuDas?: string;

  contentC1: {
    title: string;
    body: string;
    fallbezug?: string;
    glossarBegriffe?: string[];
  };

  contentB1?: {
    title: string;
    body: string;
    fallbezug?: string;
    glossarBegriffe?: string[];
  };

  question?: {
    fragetext: string;
    multiSelect?: boolean;
    optionen?: StepOption[];
    matchingPairs?: MatchingPair[];
    sortItems?: string[];
    branchingOptions?: {
      text: string;
      feedback: string;
      isCorrect: boolean;
    }[];
    musterantwort?: string;
    bewertungskriterien?: string[];
    satzanfaengeB1?: string[];

    // Fill-in
    fillin?: FillInData;

    // True/False
    trueFalseCards?: TrueFalseCard[];

    // Timer
    timerQuestions?: TimerQuestion[];
    timeLimitSeconds?: number;

    // Memory
    memoryPairs?: MemoryPair[];

    // Crossword
    crosswordWords?: CrosswordWord[];

    // Categorize
    categories?: CategoryDef[];
    categoryItems?: CategoryItem[];

    // Highlight
    highlightSegments?: HighlightSegment[];

    // Dialog
    patientName?: string;
    dialogPhases?: DialogPhase[];

    // Reflection
    reflection?: ReflectionData;

    // Hotspot
    hotspot?: HotspotData;

    // Confidence
    confidenceCards?: ConfidenceCard[];

    // Cloze
    cloze?: ClozeData;

    // Sequencing
    sequencing?: SequencingData;

    // Slider
    slider?: SliderData;

    // Summary
    summary?: SummaryData;
  };
}

export interface GlossarEntry {
  begriff: string;
  erklaerung: string;
  uebersetzungTr?: string;
  uebersetzungAr?: string;
  ausspracheAudio?: string;
}

export interface LektionMetadata {
  leId: string;
  ceId: string;
  title: string;
  titleShort: string;
  zeitrichtwert: number;
  geschaetzteLernzeit: { c1: number; b1: number };
  kompetenzbereiche: string[];
  bloomStufen: number[];
  voraussetzungen: string[];
  leitfall?: {
    name: string;
    alter: number;
    beruf: string;
    diagnose: string;
    setting: string;
    kernproblem: string;
  };
  glossarCount: number;
  quellenCount: number;
}

export interface LektionData {
  steps: ContentStep[];
  metadata: LektionMetadata;
  glossar: GlossarEntry[];
}
