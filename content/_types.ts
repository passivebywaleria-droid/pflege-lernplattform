// Shared Types für alle 55 Lerneinheiten (CE-übergreifend)
// Erweitert aus content/ce-05/_types.ts — Wahrheitsquelle für Content-Pipeline v2

// 8 Erlebnis-Modi (aus le-erlebnis-konzept.md)
export type ErlebnisModus =
  | "story"          // Dialog, Branching — Leitfall lebt
  | "challenge"      // Timer, MC mit Streak, TrueFalse-Swipe
  | "puzzle"         // Crossword, Memory, Fillin, Cloze, Matching
  | "entdecker"      // Text als Carousel — Info-Karten
  | "sortierstation" // Sorting, Categorize
  | "schreibtisch"   // Freetext, Reflection
  | "praxis-sim"     // Branching mehrstufig, Hotspot
  | "checkpoint";    // Selfrating, Summary

// Adaptives Track-System: Pflicht vs. Vertiefung
export type LernTrack = "basis" | "vertiefung";

// Phasen im Adaptiven Themenbogen (specs/ADAPTIVER-THEMENBOGEN.md)
export type ThemenblockPhase =
  | "BRÜCKE"           // Phase 0: Vorwissen aktivieren
  | "SZENE"            // Phase 1: Emotionaler Einstieg
  | "ERKLÄRUNG"        // Phase 2: Kernwissen vermitteln
  | "CHECKPOINT"       // Phase 3: Verständnis messen (Score A/B/C)
  | "ANDERS_ERKLÄRT"   // Phase 4: Anderer Blickwinkel (Score B/C)
  | "STORYTELLING"     // Phase 5: Konsequenzen zeigen (Score C)
  | "PRAXIS_DIALOG"    // Phase 6: Gespräch mit Praxisanleiterin/Arzt
  | "PATIENTEN_PERSPEKTIVE" // Phase 7: Wie erlebt der Patient das?
  | "ANGEHÖRIGEN_BERATUNG"  // Phase 8: Angehörige beraten
  | "PFLEGEPLANUNG"    // Phase 9b: Pflegeprozess üben
  | "ANWENDUNG"        // Phase 9: Wissen in neuem Kontext
  | "REFLEXION";       // Phase 10: Eigene Haltung, Transfer

export interface StepOption {
  text: string;
  isCorrect: boolean;
  explanation: string;
  explanationB1?: string;
}

export interface MatchingPair {
  left: string;
  right: string;
}

export interface FillInData {
  sentence: string;
  options: string[];
  correctIndex: number;
}

export interface TrueFalseCard {
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface TimerQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface MemoryPair {
  a: string;
  b: string;
}

export interface CrosswordWord {
  word: string;
  clue: string;
}

export interface CategoryDef {
  name: string;
}

export interface CategoryItem {
  text: string;
  correctCategory: number;
}

export interface HighlightSegment {
  text: string;
  isError: boolean;
  reason?: string;
  reasonB1?: string;
}

export interface DialogOption {
  text: string;
  patientResponse: string;
  score: number;
  feedback: string;
  textB1?: string;
  patientResponseB1?: string;
  feedbackB1?: string;
}

export interface DialogPhase {
  context: string;
  speaker?: string;
  vitals?: string;
  options: DialogOption[];
  contextB1?: string;
}

export interface ReflectionData {
  prompt: string;
  placeholder: string;
  systemPrompt: string;
}

export interface HotspotZone {
  id: string;
  x: number;
  y: number;
  radius: number;
  label: string;
}

export interface HotspotData {
  imageUrl: string;
  imageAlt: string;
  instruction: string;
  zones: HotspotZone[];
}

export interface ConfidenceCard {
  statement: string;
  statementB1?: string;
  isTrue: boolean;
  explanation: string;
  explanationB1?: string;
}

export interface ClozeBlank {
  id: number;
  correct: string;
  distractors: string[];
}

export interface ClozeData {
  textWithBlanks: string;
  blanks: ClozeBlank[];
}

export interface SequencingItem {
  id: string;
  label: string;
  imageUrl?: string;
}

export interface SequencingData {
  instruction: string;
  items: SequencingItem[];
}

export interface SliderData {
  instruction: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  correctValue: number;
  tolerance: number;
  explanation: string;
  explanationB1?: string;
}

export interface SummaryData {
  reflexionRueckbezug: string;
  kernaussagen: string[];
}

export interface SwipeCard {
  statement: string;
  statementB1?: string;
  isCorrect: boolean;
  explanation: string;
  explanationB1?: string;
}

export interface SwipeData {
  instruction: string;
  cards: SwipeCard[];
}

export interface FlipCardItem {
  front: string;
  back: string;
  backB1?: string;
  category?: string;
}

export interface FlipCardData {
  instruction: string;
  cards: FlipCardItem[];
  shuffled?: boolean;
}

export interface RevealCard {
  id: string;
  label: string;
  content: string;
  contentB1?: string;
  icon?: string;
}

export interface RevealData {
  instruction: string;
  cards: RevealCard[];
  revealMode: "free" | "sequential";
}

export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  descriptionB1?: string;
  icon?: string;
  highlight?: boolean;
}

export interface TimelineData {
  instruction: string;
  events: TimelineEvent[];
}

export interface ComparisonColumn {
  label: string;
  icon?: string;
}

export interface ComparisonRow {
  criterion: string;
  values: string[];
  valuesB1?: string[];
  highlight?: number;
}

export interface ComparisonData {
  instruction: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
}

// === NEUE STEP-TYPEN v2 ===

// LabelImage — Beschriftungsbild (Anatomie beschriften)
export interface LabelImageLabel {
  id: string;
  correct: string;
  position: { x: number; y: number }; // Position auf dem Bild (0-100%)
  distractors?: string[];
}

export interface LabelImageData {
  imageUrl: string;
  imageAlt: string;
  instruction: string;
  labels: LabelImageLabel[];
  mode: "drag" | "select";
}

// Diagram — Zusammenhänge-Diagramm (Flowchart, Mindmap, Cycle, Comparison)
export interface DiagramNode {
  id: string;
  label: string;
  labelB1?: string;
  imageUrl?: string;
  highlight?: boolean;
}

export interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
}

export interface DiagramData {
  diagramType: "flowchart" | "mindmap" | "comparison" | "cycle";
  instruction: string;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  interactive?: boolean;
}

// CarePlan — Pflegeprozess üben (Problem→Ziel→Maßnahme→Durchführung→Evaluation)
export interface CarePlanStep {
  phase: "problem" | "ziel" | "massnahme" | "durchfuehrung" | "evaluation";
  prompt: string;
  promptB1?: string;
  options?: StepOption[];       // MC-Auswahl (frühe LEs, Bloom B2-B3)
  musterantwort?: string;       // Freetext (späte LEs, Bloom B5-B6)
}

export interface CarePlanData {
  patientName: string;
  situation: string;            // Kurze Patientensituation
  situationB1?: string;
  steps: CarePlanStep[];
}

// All Step Types
export type StepType =
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
  | "summary"
  | "swipe"
  | "flipcard"
  | "reveal"
  | "timeline"
  | "comparison"
  | "labelImage"
  | "diagram"
  | "imageInteraction"
  | "careplan";

export interface ContentStep {
  stepId: string;
  phase: "s1" | "s2" | "s3" | "s4" | "s5" | "s6" | "s7" | "s8" | 1 | 2 | 3 | 4 | 5 | 6;  // String für v2, Nummer für Legacy
  stepType: StepType;
  bloomLevel: 1 | 2 | 3 | 4 | 5 | 6;
  kompetenzbereich: string;
  quellen: string[];

  // v2 Felder — Pflicht für neuen Content, optional für Legacy-Kompatibilität
  track?: LernTrack;           // "basis" = Prüfungspflicht, "vertiefung" = Bonus
  modus?: ErlebnisModus;       // Erlebnis-Modus
  lernziel?: string;           // Lernziel-ID (Format: "{ceId}-{leId}-{topic}")
  themenblockPhase?: ThemenblockPhase;  // Phase im Phasen-Bogen

  // XP per Formel berechnet — Override nur wenn nötig
  xpValue?: number;

  // Adaptive Metadaten (optional — für Sequencer)
  difficulty?: 1 | 2 | 3 | 4 | 5;
  alternativeStepTypes?: string[];
  prerequisiteStepIds?: string[];

  // Illustration
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
      feedbackB1?: string;
      isCorrect: boolean;
    }[];
    musterantwort?: string;
    bewertungskriterien?: string[];
    satzanfaengeB1?: string[];

    fillin?: FillInData;
    trueFalseCards?: TrueFalseCard[];
    timerQuestions?: TimerQuestion[];
    timeLimitSeconds?: number;
    memoryPairs?: MemoryPair[];
    crosswordWords?: CrosswordWord[];
    categories?: CategoryDef[];
    categoryItems?: CategoryItem[];
    highlightSegments?: HighlightSegment[];
    patientName?: string;
    dialogPhases?: DialogPhase[];
    reflection?: ReflectionData;
    hotspot?: HotspotData;
    confidenceCards?: ConfidenceCard[];
    cloze?: ClozeData;
    sequencing?: SequencingData;
    slider?: SliderData;
    summary?: SummaryData;
    swipe?: SwipeData;
    flipcard?: FlipCardData;
    reveal?: RevealData;
    timeline?: TimelineData;
    comparison?: ComparisonData;
    labelImage?: LabelImageData;
    diagram?: DiagramData;
    careplan?: CarePlanData;
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
  sessionCount?: number;           // Sessions = zeitrichtwert / 5
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
