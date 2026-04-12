// Shared Types für alle 55 Lerneinheiten (CE-übergreifend)
// Wahrheitsquelle für Content-Pipeline v2 — CE-übergreifend

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

// 3 Säulen der Pflegeausbildung (wie I Care: Anatomie, Pflege, Krankheitslehre)
export type ContentTag = "anatomie" | "pflege" | "krankheitslehre";

// Organsysteme für Themen-Übersicht (Metadaten auf LE-Ebene)
export type Organsystem =
  | "herz-kreislauf"
  | "lunge"
  | "niere"
  | "gi-trakt"
  | "nervensystem"
  | "bewegungsapparat"
  | "haut"
  | "immunsystem"
  | "endokrin"
  | "sinnesorgane"
  | "reproduktion"
  | "blut"
  | "psyche";

// UX-Varianten für bestehende Step-Typen (Phase 3)
export type McVariant = "standard" | "anticipation" | "bildgalerie" | "audioStimulus" | "fallstrick";
export type MemoryVariant = "text" | "bild" | "mixed";
export type TimerVariant = "standard" | "blitz";
export type SliderVariant = "numeric" | "empathy" | "estimation";
export type TrueFalseVariant = "standard" | "chain";
export type SelfratingVariant = "standard" | "rubrik";

// displayFormat-Varianten für Text-Steps (specs/CONTENT-QUALITAET.md F1)
export type DisplayFormat =
  | "mnemonic"     // Eselsbrücke/Akronym visuell
  | "analogy"      // Alltags-Vergleich (Split: Bekannt ↔ Neu)
  | "beforeafter"  // Vorher/Nachher-Kontrast
  | "procontra"    // Pro/Contra-Karte
  | "quote"        // Zitat + Kontext
  | "news"         // Nachrichtenmeldung
  | "diary"        // Tagebuch-Eintrag (Ich-Perspektive)
  | "glossary"     // Glossar-Deep-Dive
  | "checklist"    // Aufzählung mit Häkchen-Symbolen
  | "stepbystep"   // Nummerierte Schritte mit Icons
  | "scenario"     // Situationsbeschreibung mit Rollenangabe
  | "crossref"     // Querverweise zu anderen CEs/LEs
  | "interview";   // Frage-Antwort-Format (Interview/FAQ)

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

// ImageInteraction — Vorher/Nachher, Layer-Reveal, Zoom+Pan
export type ImageInteractionType = "beforeAfter" | "layerReveal" | "zoomPan";

export interface BeforeAfterData {
  imageBefore: string;
  imageAfter: string;
  labelBefore?: string;
  labelAfter?: string;
  startPosition?: number; // 0-100, default 50
}

export interface ImageLayer {
  id: string;
  label: string;
  labelB1?: string;
  imageUrl: string;
  defaultVisible?: boolean;
}

export interface LayerRevealData {
  layers: ImageLayer[];
  baseImageUrl?: string;
  instruction?: string;
}

export interface ZoomAnnotation {
  id: string;
  x: number; // % (0-100)
  y: number;
  label: string;
  labelB1?: string;
  description?: string;
  descriptionB1?: string;
}

export interface ZoomPanData {
  imageUrl: string;
  imageAlt: string;
  maxZoom?: number; // default 4
  annotations?: ZoomAnnotation[];
}

export interface ImageInteractionData {
  interactionType: ImageInteractionType;
  instruction: string;
  instructionB1?: string;
  beforeAfter?: BeforeAfterData;
  layerReveal?: LayerRevealData;
  zoomPan?: ZoomPanData;
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
  | "careplan"
  | "audio"
  | "speech"
  // v3: Neue Step-Typen (Phase 2)
  | "wordorder"       // Satzbausteine in richtige Reihenfolge ziehen
  | "calculation"     // Dosierungs-/Rechenaufgabe mit Zahleneingabe
  | "tablefillin"     // Tabelle mit Lücken ausfüllen
  | "errorspot"       // Fehler im Text finden und markieren
  | "matrix"          // 2×2 Prioritäten-/Eisenhower-Matrix
  | "conceptmap"      // Konzept-Knoten verbinden
  | "chatSim"         // KI-Patient Chat-Simulation
  | "estimation"      // Zahlen-Schätzung mit Auflösung
  | "crowdPoll";      // Umfrage mit Seed-Ergebnissen (Mentimeter-Stil)

// === NEUE STEP-TYPEN v3 (Phase 2) ===

// WordOrder — Satzbausteine in richtige Reihenfolge ziehen
export interface WordOrderData {
  instruction: string;
  words: string[];           // Durcheinander-Wörter
  correctOrder: number[];    // Richtige Reihenfolge (Indizes)
  hint?: string;
}

// Calculation — Dosierungs-/Rechenaufgabe
export interface CalculationData {
  instruction: string;
  formula?: string;          // z.B. "Dosis = Verordnung / Stärke × Menge"
  correctValue: number;
  unit: string;              // z.B. "ml", "Tropfen"
  tolerance: number;         // Absolute Abweichung
  explanation: string;
  explanationB1?: string;
}

// TableFillIn — Tabelle mit Lücken ausfüllen
export interface TableFillInCell {
  value: string;
  isBlank: boolean;
  options?: string[];        // Dropdown-Optionen wenn isBlank
}

export interface TableFillInData {
  instruction: string;
  headers: string[];
  rows: TableFillInCell[][];
}

// ErrorSpot — Fehler im Text finden und markieren
export interface ErrorSpotError {
  start: number;             // Zeichenposition Start
  end: number;               // Zeichenposition Ende
  correction: string;
  explanation: string;
  explanationB1?: string;
}

export interface ErrorSpotData {
  instruction: string;
  text: string;              // Text mit eingebauten Fehlern
  errors: ErrorSpotError[];
}

// Matrix — 2×2 Prioritäten-Matrix (Eisenhower/Triage)
export interface MatrixItem {
  id: string;
  text: string;
  correctQuadrant: 1 | 2 | 3 | 4;
}

export interface MatrixData {
  instruction: string;
  axisX: { label: string; low: string; high: string };
  axisY: { label: string; low: string; high: string };
  items: MatrixItem[];
}

// ConceptMap — Konzept-Knoten verbinden
export interface ConceptMapNode {
  id: string;
  label: string;
  fixed?: boolean;           // Vorgegeben oder vom Schüler zu platzieren
}

export interface ConceptMapConnection {
  from: string;
  to: string;
  label?: string;
}

export interface ConceptMapData {
  instruction: string;
  nodes: ConceptMapNode[];
  correctConnections: ConceptMapConnection[];
  availableLabels?: string[];
}

// ChatSim — KI-Patient Chat-Simulation
export interface ChatSimData {
  patientName: string;
  situation: string;
  situationB1?: string;
  systemPrompt: string;      // KI-Instruktion für Patienten-Rolle
  maxTurns: number;          // z.B. 5
  evaluationCriteria: string[];
}

// Estimation — Zahlen-Schätzung mit Auflösung
export interface EstimationData {
  instruction: string;
  unit: string;
  correctValue: number;
  tolerance: number;         // Prozent-Abweichung
  funFact: string;
  explanation: string;
  explanationB1?: string;
}

// CrowdPoll — Umfrage mit Seed-Ergebnissen (Mentimeter-Stil)
export interface CrowdPollSeedResponse {
  text: string;
  count: number;
  highlight?: boolean;       // Besonders markieren (z.B. häufigste Antwort)
}

export interface CrowdPollOption {
  id: string;
  text: string;
  textB1?: string;
}

export interface CrowdPollData {
  question: string;
  questionB1?: string;
  inputType: "choice" | "freetext";
  // Für "choice":
  options?: CrowdPollOption[];
  allowMultiple?: boolean;
  // Für "freetext":
  placeholder?: string;
  placeholderB1?: string;
  // Seed-Ergebnisse (Variante B — später durch echte DB-Daten ersetzt):
  seedResponses: CrowdPollSeedResponse[];
  totalVotes?: number;
  // Didaktischer Hinweis nach Abstimmung:
  fazit?: string;
  fazitB1?: string;
}

export interface AudioData {
  audioUrl: string;
  audioLabel?: string;
  transcript?: string;
}

export interface SpeechData {
  speechType: "nachsprechen" | "erklaeren";
  zielwort?: string;            // Typ "nachsprechen": "Dekubitus"
  aufgabe?: string;             // Typ "erklaeren": "Erkläre dem Patienten..."
  aufgabeB1?: string;           // B1-Version der Aufgabe
  bewertungshinweis?: string;   // Für KI-Feedback: Was soll der Schüler sagen?
}

// CrowdPoll — Umfrage mit Seed-Ergebnissen (Mentimeter-Stil)
export interface CrowdPollSeedResponse {
  text: string;
  count: number;
  highlight?: boolean;
}

export interface CrowdPollOption {
  id: string;
  text: string;
  textB1?: string;
}

export interface CrowdPollData {
  question: string;
  questionB1?: string;
  inputType: "choice" | "freetext";
  // Für "choice":
  options?: CrowdPollOption[];
  allowMultiple?: boolean;
  // Für "freetext":
  placeholder?: string;
  placeholderB1?: string;
  // Seed-Ergebnisse:
  seedResponses: CrowdPollSeedResponse[];
  totalVotes?: number;
  // Didaktischer Hinweis nach Abstimmung:
  fazit?: string;
  fazitB1?: string;
}

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

  // 3-Säulen-Tag: Anatomie, Pflege oder Krankheitslehre
  tag?: ContentTag;            // Pflicht für neuen Content, optional für Legacy

  // Cross-LE: Patient-Referenz (für Fallverläufe + Prüfungsmodus)
  patientId?: string;          // Verweist auf ExamPatient in _patients.ts

  // XP per Formel berechnet — Override nur wenn nötig
  xpValue?: number;

  // Adaptive Metadaten (optional — für Sequencer)
  difficulty?: 1 | 2 | 3 | 4 | 5;
  alternativeStepTypes?: string[];
  prerequisiteStepIds?: string[];

  // displayFormat für Text-Steps (CONTENT-QUALITAET.md F1)
  displayFormat?: DisplayFormat;

  // Illustration
  imageUrl?: string;
  imageAlt?: string;
  /** Dozentin-Hinweis: Was soll der Schüler auf dem Bild sehen/verstehen? Wird als Grundlage für Bild-Generierung genutzt. */
  bildhinweis?: string;
  /** Referenz zu Bild-Nr. aus Unterrichtsentwurf §9, z.B. "BILD 5" */
  bildRef?: string;
  /** Bildkategorie bestimmt Generierungs-Strategie und angehängte Qualitätsregeln. */
  bildkategorie?: 'szene' | 'anatomie' | 'prozedur' | 'geraet';
  /** Pfad zu Referenzbild (z.B. aus Servier Medical Art). Gemini erstellt daraus eine Illustration im App-Stil. */
  referenzBild?: string;

  // Audio (z.B. NotebookLM-Zusammenfassung)
  audioUrl?: string;
  audioLabel?: string;

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
    // UX-Varianten (Phase 3)
    mcVariant?: McVariant;
    memoryVariant?: MemoryVariant;
    timerVariant?: TimerVariant;
    sliderVariant?: SliderVariant;
    trueFalseVariant?: TrueFalseVariant;
    selfratingVariant?: SelfratingVariant;
    // Flexible Felder für verschiedene Step-Typen (Content-Generator nutzt diverse Strukturen)
    [key: string]: unknown;
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
    audio?: AudioData;
    speech?: SpeechData;
    // v3: Neue Step-Typen (Phase 2)
    wordorder?: WordOrderData;
    calculation?: CalculationData;
    tablefillin?: TableFillInData;
    errorspot?: ErrorSpotData;
    matrix?: MatrixData;
    conceptmap?: ConceptMapData;
    chatSim?: ChatSimData;
    estimation?: EstimationData;
    crowdPoll?: CrowdPollData;
  };
}

export interface GlossarEntry {
  begriff: string;
  erklaerung: string;
  erklaerungB1?: string;          // B1-Erklärung (einfache Sprache)
  uebersetzungTr?: string;
  uebersetzungAr?: string;
  uebersetzungEn?: string;        // NEU: Englisch (Brückensprache)
  uebersetzungVi?: string;        // NEU: Vietnamesisch
  uebersetzungTl?: string;        // NEU: Tagalog/Filipino
  uebersetzungBs?: string;        // NEU: Bosnisch/Kroatisch/Serbisch
  uebersetzungUk?: string;        // NEU: Ukrainisch
  uebersetzungRo?: string;        // NEU: Rumänisch
  ausspracheAudio?: string;
  istB1Alltagswort?: boolean;     // Markierung für B1-Alltagswörter (G2)
  vorsilbeNachsilbe?: string;     // Wortzerlegung z.B. "hyper- (zu viel) + -tension (Druck)" (G5)
}

export type KarteikarteKategorie = "fachbegriff" | "fakt" | "handlung" | "assessment" | "recht";

export interface KarteikarteVorlage {
  id: string;                       // z.B. "le08-kk-01"
  vorderseite: string;              // Frage oder Fachbegriff
  rueckseiteC1: string;             // Antwort (C1-Niveau)
  rueckseiteB1: string;             // Antwort (B1-vereinfacht)
  tag: ContentTag;                  // "anatomie" | "pflege" | "krankheitslehre"
  kategorie: KarteikarteKategorie;
  pruefungsrelevant: boolean;       // true = Prüfungswissen
  quelle?: string;                  // z.B. "I Care Pflege S. 342"
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

  // 3-Säulen-Tag: Organsysteme dieser LE (für Themen-Übersichtsseite)
  organsysteme?: Organsystem[];
}

// === WISSENS-TAB: Artikel-Format (AMBOSS-Stil) ===

/** Ein Abschnitt innerhalb eines Kapitels (Text, Tabelle, Bild, Warnung, etc.) */
export type ArtikelBlockType =
  | "text"           // Fließtext (Markdown-ähnlich, aber als Plaintext)
  | "tabelle"        // Datentabelle (headers + rows)
  | "bild"           // Illustration mit Alt-Text
  | "warnung"        // Hervorgehobene Warnung (z.B. Refeeding-Syndrom)
  | "merke"          // "Merke!"-Box (Kernaussage)
  | "rechner"        // Interaktiver Rechner (z.B. Energiebedarf)
  | "querverweis";   // Link zu anderem Kapitel oder anderer LE

export interface ArtikelBlock {
  type: ArtikelBlockType;
  contentC1: string;
  contentB1?: string;
  /** Tabellen-Daten (nur bei type "tabelle") */
  headers?: string[];
  rows?: string[][];
  /** Bild (nur bei type "bild") */
  imageUrl?: string;
  imageAlt?: string;
  /** Querverweis (nur bei type "querverweis") */
  zielLeId?: string;
  zielKapitelId?: string;
  /** Rechner (nur bei type "rechner") */
  formel?: string;
  einheit?: string;
  /** Quellenangabe für diesen Block */
  quelle?: string;
}

/** Ein Kapitel im Wissens-Tab */
export interface ArtikelKapitel {
  kapitelId: string;              // z.B. "le08-kap-01"
  titel: string;
  titelB1?: string;
  tag: ContentTag;                // anatomie | pflege | krankheitslehre
  geschaetzteDauer: number;       // Minuten zum Durchlesen
  bloecke: ArtikelBlock[];
  glossarBegriffe?: string[];     // Fachbegriffe die in diesem Kapitel erklärt werden
}

// === FALL-TAB: Case-Based Patientenverlauf ===

/** Eine Station im Fallverlauf (z.B. "Tag 1: Aufnahme") */
export interface FallStation {
  stationId: string;              // z.B. "le08-fall01-st01"
  zeitpunkt: string;              // "Tag 1", "Woche 2", "Monat 3"
  titel: string;
  titelB1?: string;
  situationC1: string;            // Was passiert? (Fließtext)
  situationB1?: string;
  /** Welche Kapitel aus dem Wissens-Tab sind hier relevant */
  relevanteKapitel?: string[];    // kapitelId-Referenzen
  /** Steps die an dieser Station bearbeitet werden */
  steps: ContentStep[];
  bloomRange: [number, number];   // z.B. [1, 3] für frühe Stationen
  freigeschaltet?: boolean;       // Default: nur erste Station frei
}

/** Ein kompletter Patientenverlauf */
export interface Fallverlauf {
  fallId: string;                 // z.B. "le08-fall-kramer"
  patient: ExamPatient;
  titel: string;
  titelB1?: string;
  stationen: FallStation[];
  /** Fokus-Tag: Welche Perspektive steht im Vordergrund */
  fokus: ContentTag;
}

// === PRAXIS-TAB: Simulationen ===

export type PraxisUebungType =
  | "dialog-sim"      // KI-Patient Dialog
  | "pflegeplan"      // Pflegeprozess schreiben
  | "beratung"        // Angehörigen-Beratung
  | "sprechuebung"    // Whisper STT
  | "prozedur";       // Handlungsablauf üben

export interface PraxisUebung {
  uebungId: string;
  typ: PraxisUebungType;
  titel: string;
  titelB1?: string;
  beschreibungC1: string;
  beschreibungB1?: string;
  bloomLevel: 3 | 4 | 5 | 6;     // Praxis = mind. B3
  /** Steps die diese Übung ausmachen */
  steps: ContentStep[];
}

// === ERWEITERTE LEKTION (5-Tab-Modell) ===

export interface LektionData {
  steps: ContentStep[];
  metadata: LektionMetadata;
  glossar: GlossarEntry[];
  karteikarten?: KarteikarteVorlage[];
  /** Wissens-Tab: Strukturierte Kapitel */
  artikel?: ArtikelKapitel[];
  /** Fall-Tab: Patientenverläufe */
  fallverlaeufe?: Fallverlauf[];
  /** Praxis-Tab: Simulationen und Übungen */
  praxisUebungen?: PraxisUebung[];
}

// === CROSS-LE PRÜFUNGSFÄLLE ===

/** Patient der in mehreren LEs vorkommt (globales Register) */
export interface ExamPatient {
  patientId: string;          // "pat-ahmed-01" — global eindeutig
  name: string;
  alter: number;
  geschlecht: "w" | "m" | "d";
  diagnosen: string[];        // Wächst über mehrere LEs
  sourceLEs: string[];        // ["le-01", "le-06", "le-12"]
  steckbrief: string;         // Kurzbeschreibung für Prüfungsmodus
}

/** Eine Phase im Fallverlauf (z.B. "Tag 1", "Nach 3 Wochen") */
export interface ExamCasePhase {
  phaseId: string;
  zeitpunkt: string;          // "Tag 1", "Nach 3 Wochen", "6 Monate später"
  kontext: string;            // Situationsbeschreibung
  kontextB1?: string;         // B1-Version
  sourceLE: string;           // "le-01" — woher das Wissen stammt
  steps: ContentStep[];       // 3-5 Steps pro Phase (MC, Freetext, CarePlan, ChatSim)
}

/** LE-übergreifender Prüfungsfall (wie PflAPrV schriftliche Prüfung) */
export interface ExamCase {
  caseId: string;             // "exam-ahmed-mobilitaet"
  patient: ExamPatient;
  titel: string;
  schwierigkeit: "mittel" | "schwer";
  sourceLEs: string[];        // Alle LEs die der Schüler bearbeitet haben muss
  phasen: ExamCasePhase[];
  bloomRange: [number, number]; // z.B. [4, 6] — nur höhere Bloom-Level
  zeitLimitMinuten?: number;  // Optional: Prüfungszeitlimit
}
