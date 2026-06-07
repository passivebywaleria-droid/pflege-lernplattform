#!/usr/bin/env npx tsx
/**
 * Content-Deep-Validator (Stufe 1)
 *
 * Vier Pflicht-Checks pro Situation:
 *   U — Unerklärter-Begriff: Begriff wird in Anwendungs-Step verwendet, aber im
 *       User-Flow vorher nie definiert.
 *   S — Sandwich-Verstoss: Feedback verletzt Anerkennen → Korrigieren → Ermutigen.
 *   F — Frage-verraet-Antwort: Sortier/MC verrät die Lösung im Frage- oder Body-Text.
 *   B — Body-Scan: Fachbegriff im body/options/fragetext, aber nicht in glossarBegriffe.
 *
 * Usage:
 *   npx tsx scripts/content-deep-validator.ts ce-02 frau-m-nacht-sturz
 *   npx tsx scripts/content-deep-validator.ts ce-02 --all
 */

import * as fs from "fs";
import * as path from "path";

// ─── Typen ──────────────────────────────────────────────────────────────

type Severity = "HOCH" | "MITTEL" | "NIEDRIG";

interface Finding {
  ruleId: string;
  severity: Severity;
  location: string;
  message: string;
}

interface SituationReport {
  situationId: string;
  totalSteps: number;
  findings: Finding[];
}

interface RawStep {
  stepId: string;
  stepType: string;
  phase: number;
  isKern: boolean;
  rawBlock: string;
  glossarBegriffe: string[];
  bodies: string[];        // alle body-Texte (C1+B1) und context/transition
  feedbacks: string[];     // alle feedback-Strings (feedback, feedbackKorrekt, feedbackFalsch)
  fragetext: string;
  sortItems: string[];     // bei sortier/sequencing
  patientResponses: string[];
}

// ─── Konstanten ─────────────────────────────────────────────────────────

const PHASE_FILES = [
  "phase-informieren",   // 1
  "phase-beobachten",    // 2
  "phase-planen",        // 3
  "phase-durchfuehren",  // 4
  "phase-evaluieren",    // 5
  "phase-dokumentieren", // 6
];

// Alltags-/Schulwissen, das ein Schueler zu Beginn der Ausbildung mitbringt.
// Echte Pflege-FACHBEGRIFFE (DNQP, NRS-2002, PIM, GLIM, ABCDE etc.) NICHT hier rein.
const ALLTAGS_WHITELIST = new Set([
  // Mensch / Anatomie / Rollen
  "patient", "patientin", "pflege", "pflegekraft", "pflegerin", "pfleger",
  "arzt", "aerztin", "aerzte", "tochter", "sohn", "ehefrau", "ehemann",
  "enkelkind", "enkel", "enkelin", "vater", "mutter", "eltern", "familie",
  "kind", "kinder", "saeugling", "baby",
  "person", "rolle", "team", "kollege", "kollegin", "stationsleitung",
  "schueler", "schuelerin", "lehrer", "lehrerin",
  // Anatomie (Schulwissen)
  "hand", "arm", "bein", "fuss", "fuesse", "kopf", "ruecken", "bauch", "knie",
  "huefte", "hueftgelenk", "schulter", "hals", "becken", "wade", "kniescheibe",
  "ellenbogen", "ellbogen", "kniegelenk", "schultergelenk", "ferse", "zehen",
  "zeh", "finger", "daumen", "brust", "ruecken", "wirbelsaeule", "rippen",
  "haut", "haare", "haar", "auge", "augen", "ohr", "ohren", "mund", "nase",
  "zunge", "zaehne", "zahn", "lippe", "lippen",
  "muskel", "muskeln", "knochen", "blut", "herz", "lunge", "lungen",
  "magen", "darm", "niere", "leber", "gehirn", "nerv", "nerven",
  "gelenk", "gelenke", "blase", "gefaess", "ader", "arterie", "vene",
  // Vitalzeichen + Basis-Medizin (Alltagswissen)
  "blutdruck", "puls", "temperatur", "atmung", "atem", "atmen",
  "schmerz", "schmerzen", "schmerzhaft",
  "fieber", "schwindel", "wunde", "narbe", "blutung", "blut",
  "diagnose", "diagnosen", "therapie", "behandlung",
  "medikament", "medikamente", "tablette", "tabletten", "spritze", "infusion",
  "infektion", "entzuendung", "entzuendet", "schwellung", "roetung",
  "krank", "krankheit", "krankheiten", "gesund", "gesundheit",
  // Allgemeine Pflege-Begriffe (Schulwissen / Sprachgebrauch)
  "pflegen", "pflegerisch", "krankenhaus", "krankenhaeuser", "klinik",
  "station", "ambulant", "stationaer", "praxis",
  "bett", "bettkante", "bettrand", "zimmer", "fenster", "tuer", "stuhl",
  "tisch", "schrank", "lampe",
  "morgen", "abend", "mittag", "nacht", "tag", "tage", "uhr", "uhrzeit",
  "minuten", "minute", "sekunden", "sekunde", "stunde", "stunden",
  "wasser", "tee", "kaffee", "essen", "trinken", "schlucken", "kauen",
  "fluessigkeit", "nahrung",
  // Konzepte & Prozess-Sprache (kein Fachvokabular)
  "ziel", "ziele", "problem", "probleme", "loesung", "frage", "antwort",
  "aufgabe", "aufgaben", "schritt", "schritte", "regel", "regeln", "tipp",
  "risiko", "risiken", "risikofaktor", "risikofaktoren",
  "gefahr", "gefahren", "ursache", "ursachen", "folge", "folgen",
  "kontext", "grund", "gruende", "zusammenhang", "zusammenhaenge",
  "lernen", "verstehen", "erkennen", "wissen", "kennen", "denken",
  "spueren", "fuehlen", "sehen", "hoeren", "merken", "achten",
  "assessment", "beobachtung", "beobachten", "beurteilung", "beurteilen",
  "untersuchung", "untersuchen", "befund", "befunde",
  "kommunikation", "sprache", "uebersetzung", "uebersetzen",
  "gespraech", "gespraeche",
  // Bewegung
  "stehen", "gehen", "sitzen", "liegen", "drehen", "wenden", "aufstehen",
  "bewegung", "bewegen", "mobilitaet",
  "rechts", "links", "oben", "unten", "vorn", "hinten",
  "innen", "aussen", "mitte", "ende", "anfang",
  // Zustand
  "ansprechbar", "wach", "muede", "schlafen", "schlaf",
  "angst", "freude", "trauer", "sorge", "stress", "ruhe", "ruhig",
  "vertrauen", "respekt", "empathie", "wuerde", "scham",
  "ja", "nein", "vielleicht", "manchmal", "oft", "selten", "haeufig",
  // Hygiene-Basics
  "hygiene", "sauber", "schmutz", "dreck", "haende waschen",
  "handschuhe", "schuerze", "kittel", "maske",
  // Pflege-Alltag (kein Fachvokabular)
  "dokumentation", "dokumentieren",
  "uebergabe", "uebergeben",
  "pflegeplan", "pflegeplanung", // diese sind so allgegenwaertig dass sie als Alltag gelten
  "pflegebericht",
  "evaluation", "planung", "massnahme", "massnahmen",
  "aufklaerung", "beratung", "anleitung",
  // Allgemeine Verwandtschafts- und Settingbegriffe
  "angehoerige", "angehoerigen", "tochter", "sohn", "ehefrau",
  // Settingsbegriffe / Akte
  "patientenakte", "akte", "akten", "ordner", "checkliste", "protokoll",
  "leselampe", "nachtlicht", "klingel", "klingelknopf",
  "rollstuhl", "gehhilfe", "rollator",
  "prioritaet", "prioritaeten", "vorrang",
  // Allgemeine Pflegeworte
  "pflegestandard", "pflegestandards", "standard", "standards",
  "leitlinie", "leitlinien", "richtlinie", "richtlinien",
  "kontrolle", "kontrollieren", "messen", "messung",
  "anweisung", "anweisungen", "verordnung", "verordnungen",
  "zeit", "zeiten", "zeitpunkt", "zeitraum",
  // Hilfsmittel / Setting (Alltag)
  "bettgitter", "haltegriff", "haltegriffe",
  "physiotherapie", "physiotherapeut", "physiotherapeutin",
  "ergotherapie", "logopaedie", "psychotherapie",
  "verbandwechsel", "verband", "verbaende",
  "pflaster", "kompresse", "tupfer",
  "verschreibung", "rezept",
  "krankenkasse", "krankenversicherung",
  // Allgemeine Pflege-Schritte (Alltag)
  "anziehen", "ausziehen", "umdrehen", "hochziehen", "absetzen",
  "tragen", "halten", "stuetzen", "anlehnen",
  // Allgemeine Pflege-Kontextwoerter
  "schicht", "fruehdienst", "spaetdienst", "nachtdienst",
  "visite", "stationsarzt", "oberarzt",
  // Generische Pflegeworte (Komposita aus Alltag)
  "pflegeprozess", "pflegedokumentation", "pflegeziel", "pflegeziele",
  "pflegemassnahme", "pflegemassnahmen", "pflegeintervention",
  "pflegehandlung", "pflegehandlungen",
  // Allgemein-medizinische Begriffe (Schulwissen / Alltag)
  "trinkmenge", "essmenge", "nahrungsmenge", "menge", "anteil",
  "haeufigkeit", "frequenz",
  "verlauf", "verlaufen", "messbar", "messwert",
  "inkontinenz", "kontinenz",
  "sturz", "stuerze",
  "husten", "huesteln", "huster",
  "koerperpflege", "ganzkoerperpflege", "morgenpflege", "abendpflege",
  "ernaehrung", "ernaehrungsprotokoll",
  "ernaehrungsberaterin", "ernaehrungsberater",
  "schmerzsignal", "schmerzaeusserung",
  // Pflege-Auf-/Pflege-Daten-Begriffe (banal)
  "pflicht-elemente", "pflichtelemente", "pflichtelement",
  "ursachenhypothese", "vorbereitung",
]);

// Sequenzwoerter, die Sortier-Loesungen verraten
const SEQUENZ_WOERTER = [
  "erst ", "zuerst ", "als erstes ", "zunaechst ",
  "dann ", "danach ", "anschliessend ", "anschließend ", "im naechsten schritt ",
  "zuletzt ", "am ende ", "am schluss ",
];

// Negativ-Marker im Feedback
const NEGATIV_MARKER = [
  "falsch", "leider", "nicht richtig", "fehler", "stimmt nicht",
  "leider nicht", "✗", "✕", "fail",
];

// Anerkennungs-Marker am Anfang
const ANERKENNUNGS_MARKER = [
  "richtig", "gut erkannt", "stimmt", "genau", "perfekt", "exakt",
  "ja —", "ja,", "ja!", "super", "klasse",
  "guter ansatz", "gute beobachtung", "gut beobachtet",
  "du hast", "du bist", "fast", "nah dran",
];

// ─── Helfer: Files lesen + parsen ───────────────────────────────────────

function readPhaseFile(dir: string, phaseFile: string): string | null {
  const p = path.join(dir, `${phaseFile}.ts`);
  return fs.existsSync(p) ? fs.readFileSync(p, "utf-8") : null;
}

function splitSteps(content: string): string[] {
  // Splittet bei "{ stepId: " — aber behält den Rest
  const parts = content.split(/(?=\{\s*stepId:\s*")/);
  return parts.filter(p => /stepId:\s*"/.test(p));
}

function extractStringField(block: string, field: string): string {
  // einfacher Fall: field: "value"
  const reSimple = new RegExp(`${field}:\\s*"((?:[^"\\\\]|\\\\.)*)"`, "s");
  const m = block.match(reSimple);
  if (m) return m[1].replace(/\\"/g, '"').replace(/\\n/g, "\n");
  return "";
}

function extractMultilineField(block: string, field: string): string {
  // Komplexer: field gefolgt von Backtick-String oder multi-line "..."
  const reBacktick = new RegExp(`${field}:\\s*\`([^\`]*)\``, "s");
  const m = block.match(reBacktick);
  if (m) return m[1];
  return extractStringField(block, field);
}

function extractArrayField(block: string, field: string): string[] {
  const re = new RegExp(`${field}:\\s*\\[([^\\]]*)\\]`, "s");
  const m = block.match(re);
  if (!m) return [];
  const items = m[1].match(/"([^"]+)"/g) || [];
  return items.map(s => s.replace(/"/g, ""));
}

function extractIntField(block: string, field: string): number {
  const re = new RegExp(`${field}:\\s*(\\d+)`, "");
  const m = block.match(re);
  return m ? parseInt(m[1], 10) : 0;
}

function extractAllFeedbacks(block: string): string[] {
  // erfasst feedback / feedbackKorrekt / feedbackFalsch / feedbackB1 etc.
  const out: string[] = [];
  const re = /(feedback(?:Korrekt|Falsch|B1)?|feedbackC1)\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    out.push(m[2].replace(/\\"/g, '"').replace(/\\n/g, "\n"));
  }
  return out;
}

function extractAllBodies(block: string): string[] {
  const out: string[] = [];
  const re = /(body|context|transition|musterantwort|aufgabentext|kontext|fallbezug)\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    out.push(m[2].replace(/\\"/g, '"').replace(/\\n/g, "\n"));
  }
  return out;
}

function extractSortItems(block: string): string[] {
  // sortier-Steps haben items: [{ id, text, ... }]
  // ich extrahiere nur die text-Felder aus dem items-Array
  const out: string[] = [];
  const re = /text:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    out.push(m[1].replace(/\\"/g, '"'));
  }
  return out;
}

function extractPatientResponses(block: string): string[] {
  const out: string[] = [];
  const re = /patientResponse\s*:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    out.push(m[1].replace(/\\"/g, '"'));
  }
  return out;
}

function parseStep(rawBlock: string, phase: number, isKern: boolean): RawStep {
  return {
    stepId: extractStringField(rawBlock, "stepId"),
    stepType: extractStringField(rawBlock, "stepType"),
    phase,
    isKern,
    rawBlock,
    glossarBegriffe: extractGlossarBegriffe(rawBlock),
    bodies: extractAllBodies(rawBlock),
    feedbacks: extractAllFeedbacks(rawBlock),
    fragetext: extractStringField(rawBlock, "fragetext"),
    sortItems: extractSortItems(rawBlock),
    patientResponses: extractPatientResponses(rawBlock),
  };
}

function extractGlossarBegriffe(block: string): string[] {
  const out = new Set<string>();
  const re = /glossarBegriffe:\s*\[([^\]]*)\]/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    const items = m[1].match(/"([^"]+)"/g) || [];
    for (const it of items) out.add(it.replace(/"/g, ""));
  }
  return [...out];
}

function loadSituation(ceId: string, situationId: string): RawStep[] {
  const dir = path.join(process.cwd(), "content", ceId, "situationen", situationId);
  const allSteps: RawStep[] = [];

  for (let i = 0; i < PHASE_FILES.length; i++) {
    const phaseNum = i + 1;
    const content = readPhaseFile(dir, PHASE_FILES[i]);
    if (!content) continue;

    // Heuristik: kernSteps vor optionaleSteps
    const kernIdx = content.indexOf("kernSteps");
    const optIdx = content.indexOf("optionaleSteps");

    const allBlocks = splitSteps(content);
    for (const block of allBlocks) {
      const stepIdMatch = block.match(/stepId:\s*"([^"]+)"/);
      if (!stepIdMatch) continue;
      const offset = content.indexOf(stepIdMatch[0]);
      const isKern = optIdx === -1 || offset < optIdx;
      allSteps.push(parseStep(block, phaseNum, isKern));
    }
  }

  // Sortier: erst nach Phase, dann kernSteps vor optionaleSteps, dann Datei-Reihenfolge bleibt
  allSteps.sort((a, b) => {
    if (a.phase !== b.phase) return a.phase - b.phase;
    if (a.isKern !== b.isKern) return a.isKern ? -1 : 1;
    return 0;
  });

  return allSteps;
}

// ─── Term-Liste aus CE bauen ────────────────────────────────────────────

function loadCETermList(ceId: string): string[] {
  const ceDir = path.join(process.cwd(), "content", ceId, "situationen");
  if (!fs.existsSync(ceDir)) return [];
  const allTerms = new Set<string>();
  for (const sit of fs.readdirSync(ceDir)) {
    const sitDir = path.join(ceDir, sit);
    if (!fs.statSync(sitDir).isDirectory()) continue;
    for (const phaseFile of PHASE_FILES) {
      const p = path.join(sitDir, `${phaseFile}.ts`);
      if (!fs.existsSync(p)) continue;
      const content = fs.readFileSync(p, "utf-8");
      const matches = content.match(/glossarBegriffe:\s*\[([^\]]*)\]/g) || [];
      for (const mb of matches) {
        const items = mb.match(/"([^"]+)"/g) || [];
        for (const it of items) {
          const clean = it.replace(/"/g, "").trim();
          if (clean.length > 2) allTerms.add(clean);
        }
      }
    }
  }
  return [...allTerms];
}

// ─── Normalisierung ────────────────────────────────────────────────────

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[§°]/g, " ")
    .replace(/\s*\(=?\s*[^)]*\)/g, "")
    .replace(/[(),.:;!?]/g, " ")
    .replace(/-+/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

// Hat `text` einen der `terms` als WORTGRENZEN-Substring?
function findUsedTerms(text: string, terms: string[]): Set<string> {
  const normText = " " + normalize(text) + " ";
  const found = new Set<string>();
  for (const t of terms) {
    const nt = normalize(t);
    if (nt.length < 3) continue;
    // Wortgrenzen-Match (left+right kein Buchstabe)
    const re = new RegExp(`(?<![a-z0-9])${nt.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}(?![a-z0-9])`);
    if (re.test(normText)) found.add(t);
  }
  return found;
}

// ─── Check 1: Unerklärte Begriffe (U) ──────────────────────────────────

function isExplainerStep(s: RawStep): boolean {
  return s.stepType === "inlineWissen" || s.stepType === "text";
}

function getDefinitionMarkers(begriff: string): string[] {
  // Definitions-Pattern: Begriff direkt gefolgt von erklärenden Markern
  const nb = normalize(begriff);
  return [
    `${nb} =`,
    `${nb} ist `,
    `${nb} bedeutet`,
    `${nb} heisst`,
    `${nb} —`,
    `${nb} – `,
    `${nb}: `,
    `**${nb}** =`,
    `**${nb}**:`,
  ];
}

function isBegriffDefinedIn(begriff: string, step: RawStep): boolean {
  // Definiert wenn:
  //  (a) Step ist Explainer + Begriff steht in glossarBegriffe
  //  (b) Body enthält Begriff mit Definitions-Pattern
  const inGlossar = step.glossarBegriffe.some(g => normalize(g) === normalize(begriff));
  if (isExplainerStep(step) && inGlossar) return true;

  const allText = step.bodies.join(" ").toLowerCase();
  const normalized = normalize(allText);
  const markers = getDefinitionMarkers(begriff);
  return markers.some(m => normalized.includes(m));
}

function checkUnexplained(steps: RawStep[], terms: string[]): Finding[] {
  const findings: Finding[] = [];
  const explainedSet = new Set<string>(); // normalisierte Begriffe

  for (const t of ALLTAGS_WHITELIST) explainedSet.add(t);

  for (const step of steps) {
    // 1) explainedSet UPDATEN aus diesem Step (vor dem Check, weil Definition + Anwendung im selben Step erlaubt ist)
    for (const begriff of step.glossarBegriffe) {
      if (isBegriffDefinedIn(begriff, step)) {
        explainedSet.add(normalize(begriff));
      }
    }
    // Auch Begriffe die *im body* mit Marker definiert werden
    for (const t of terms) {
      if (isBegriffDefinedIn(t, step)) {
        explainedSet.add(normalize(t));
      }
    }

    // 2) Bei Anwendungs-Steps: prüfen ob verwendete Begriffe erklärt sind
    if (isExplainerStep(step)) continue;

    const checkText = [
      ...step.bodies,
      step.fragetext,
      ...step.sortItems,
    ].join(" ");
    const usedTerms = findUsedTerms(checkText, terms);

    for (const t of usedTerms) {
      if (!explainedSet.has(normalize(t))) {
        findings.push({
          ruleId: "U-01",
          severity: "HOCH",
          location: `phase${step.phase}/${step.stepId}`,
          message: `Begriff "${t}" verwendet, aber nicht vorher im User-Flow definiert.`,
        });
      }
    }
  }

  return findings;
}

// ─── Check 2: Sandwich-Verstoesse (S) ──────────────────────────────────

function checkSandwich(steps: RawStep[]): Finding[] {
  const findings: Finding[] = [];
  for (const step of steps) {
    for (const fb of step.feedbacks) {
      const fbLower = fb.toLowerCase();
      const fbStart = fbLower.slice(0, 140);

      const hasNegativ = NEGATIV_MARKER.some(m => fbLower.includes(m));
      const hasAnerkennung = ANERKENNUNGS_MARKER.some(m => fbStart.includes(m));

      // S-01: Negativ ohne Anerkennung am Anfang
      if (hasNegativ && !hasAnerkennung) {
        findings.push({
          ruleId: "S-01",
          severity: "HOCH",
          location: `phase${step.phase}/${step.stepId}`,
          message: `Feedback startet/enthaelt negatives Marker (z.B. "falsch", "leider") ohne Anerkennung am Anfang. Auszug: "${fb.slice(0, 100)}…"`,
        });
      }

      // S-02: Reines Zaehl-Feedback ohne pflegerische Erklaerung
      const isCountOnly = /^\s*\d+\s*(?:von|of|\/)\s*\d+/i.test(fb.trim()) ||
                          /^\s*(richtige antwort ist|loesung):\s*\d+\s*(von|of)/i.test(fb.trim());
      if (isCountOnly && fb.length < 80) {
        findings.push({
          ruleId: "S-02",
          severity: "HOCH",
          location: `phase${step.phase}/${step.stepId}`,
          message: `Feedback ist reines Zaehl-Feedback ("X von Y richtig") ohne pflegerische Erklaerung. Auszug: "${fb.slice(0, 100)}"`,
        });
      }

      // S-03: Anerkennungs-Floskel ohne Substanz
      if (fb.length < 60) {
        const isFloskel = /^(guter ansatz|gut gemacht|prima|toll)[\s!.,]*$/i.test(fb.trim());
        if (isFloskel) {
          findings.push({
            ruleId: "S-03",
            severity: "NIEDRIG",
            location: `phase${step.phase}/${step.stepId}`,
            message: `Feedback ist Floskel ohne konkrete Begruendung. Auszug: "${fb}"`,
          });
        }
      }

      // S-04: Feedback erklärt nicht das RICHTIGE — bei feedbackFalsch fehlt eine "weil"/"deshalb"/"richtig ist"-Erklaerung
      // Heuristik: feedbackFalsch ist >100 Zeichen aber enthaelt keines: "weil", "deshalb", "denn", "richtig ist", "korrekt ist", "stattdessen", "stattdes "
      // (nur fuer feedback-Strings die nach Heuristik eine "falsch"-Antwort sind)
      if (hasNegativ && fb.length > 60) {
        const erklaertRichtiges = /weil|deshalb|denn|richtig ist|korrekt ist|stattdessen|tatsaechlich|tatsächlich|eigentlich|der grund|begruendung|begründung/i.test(fb);
        if (!erklaertRichtiges) {
          findings.push({
            ruleId: "S-04",
            severity: "MITTEL",
            location: `phase${step.phase}/${step.stepId}`,
            message: `Feedback signalisiert Fehler, erklaert aber nicht WARUM/WAS richtig ist (kein "weil", "deshalb", "stattdessen"). Auszug: "${fb.slice(0, 100)}…"`,
          });
        }
      }
    }
  }
  return findings;
}

// ─── Check 3: Frage verraet Antwort (F) ────────────────────────────────

function checkFrageVerraetAntwort(steps: RawStep[]): Finding[] {
  const findings: Finding[] = [];
  for (const step of steps) {
    if (step.stepType !== "sortier" && step.stepType !== "sequencing") continue;

    const allFrage = [step.fragetext, ...step.bodies].join(" ").toLowerCase();

    // F-01: Sequenzwoerter im Frage-/Body-Text
    const sequenzCount = SEQUENZ_WOERTER.filter(w => allFrage.includes(w)).length;
    if (sequenzCount >= 2) {
      findings.push({
        ruleId: "F-01",
        severity: "HOCH",
        location: `phase${step.phase}/${step.stepId}`,
        message: `Sortier-Frage enthaelt ${sequenzCount} Sequenzwoerter (erst..., dann..., zuletzt...) — verraet die Loesung.`,
      });
    }

    // F-02: Klammer-Annotationen in sortItems mit Erklaerwoertern
    for (const item of step.sortItems) {
      // Klammer-Inhalt extrahieren
      const klammern = item.match(/\(([^)]+)\)/g) || [];
      for (const k of klammern) {
        const inner = k.slice(1, -1);
        // Heuristik: enthaelt Pflege-Logik-Wort
        if (/risiko|gefahr|prophylaxe|prioritaet|priorität|kontext|grund|zusammenhang|aufkl[aä]rung/i.test(inner) && inner.length > 15) {
          findings.push({
            ruleId: "F-02",
            severity: "MITTEL",
            location: `phase${step.phase}/${step.stepId}`,
            message: `Sortier-Item enthaelt Klammer-Annotation, die die Logik verraet: "${k}"`,
          });
          break; // pro item nur einmal melden
        }
      }
    }
  }
  return findings;
}

// ─── Check 4: Body-Begriffe nicht im glossarBegriffe ──────────────────

function checkBodyVsGlossar(steps: RawStep[], terms: string[]): Finding[] {
  const findings: Finding[] = [];
  for (const step of steps) {
    if (step.bodies.length === 0) continue;
    const bodyText = step.bodies.join(" ");
    const usedTerms = findUsedTerms(bodyText, terms);
    const declared = new Set(step.glossarBegriffe.map(b => normalize(b)));
    for (const t of usedTerms) {
      if (!declared.has(normalize(t))) {
        // Nur gemeldet wenn der Begriff "wichtig" ist (in der CE-Term-Liste)
        // und dieser Step ist Explainer (sonst Doppel mit U-01)
        if (!isExplainerStep(step)) continue;
        findings.push({
          ruleId: "B-01",
          severity: "NIEDRIG",
          location: `phase${step.phase}/${step.stepId}`,
          message: `Explainer verwendet Fachbegriff "${t}" im body, aber nicht in glossarBegriffe gelistet.`,
        });
      }
    }
  }
  return findings;
}

// ─── Main ──────────────────────────────────────────────────────────────

function validateSituation(ceId: string, situationId: string, terms: string[]): SituationReport {
  const steps = loadSituation(ceId, situationId);
  const findings: Finding[] = [
    ...checkUnexplained(steps, terms),
    ...checkSandwich(steps),
    ...checkFrageVerraetAntwort(steps),
    ...checkBodyVsGlossar(steps, terms),
  ];
  return {
    situationId,
    totalSteps: steps.length,
    findings,
  };
}

function main() {
  const ceId = process.argv[2] ?? "ce-02";
  const sitArg = process.argv[3] ?? "--all";

  const ceDir = path.join(process.cwd(), "content", ceId, "situationen");
  if (!fs.existsSync(ceDir)) {
    console.error(`CE nicht gefunden: ${ceDir}`);
    process.exit(1);
  }

  const terms = loadCETermList(ceId);
  console.log(`Term-Basis: ${terms.length} unique Begriffe aus ${ceId}\n`);

  const situationen = sitArg === "--all"
    ? fs.readdirSync(ceDir).filter(d => fs.statSync(path.join(ceDir, d)).isDirectory())
    : [sitArg];

  const reports: SituationReport[] = [];
  let totalH = 0, totalM = 0, totalN = 0;

  console.log("═".repeat(70));
  console.log(`  CONTENT-DEEP-VALIDATOR — ${ceId.toUpperCase()}`);
  console.log("═".repeat(70));

  for (const sit of situationen) {
    const r = validateSituation(ceId, sit, terms);
    reports.push(r);

    const h = r.findings.filter(f => f.severity === "HOCH").length;
    const m = r.findings.filter(f => f.severity === "MITTEL").length;
    const n = r.findings.filter(f => f.severity === "NIEDRIG").length;
    totalH += h; totalM += m; totalN += n;

    const icon = r.findings.length === 0 ? "✅" : "⚠️ ";
    console.log(`\n${icon} ${r.situationId} (${r.totalSteps} Steps) — ${h} HOCH, ${m} MITTEL, ${n} NIEDRIG`);

    // Zeige max 8 Findings pro Situation als Preview
    const topFindings = r.findings.slice(0, 8);
    for (const f of topFindings) {
      const sev = f.severity.padEnd(7);
      console.log(`   ${f.ruleId} ${sev} ${f.location}`);
      console.log(`            ${f.message}`);
    }
    if (r.findings.length > 8) {
      console.log(`   ... +${r.findings.length - 8} weitere (siehe Report-Datei)`);
    }
  }

  console.log("\n" + "═".repeat(70));
  console.log(`  ${ceId.toUpperCase()} GESAMT`);
  console.log(`  ${reports.length} Situationen, ${reports.reduce((s,r) => s+r.totalSteps, 0)} Steps`);
  console.log(`  ${totalH} HOCH, ${totalM} MITTEL, ${totalN} NIEDRIG (Σ ${totalH+totalM+totalN})`);
  console.log("═".repeat(70));

  const reportPath = path.join(
    process.cwd(), "content", ceId,
    `deep-validator-${new Date().toISOString().split("T")[0]}.json`,
  );
  fs.writeFileSync(reportPath, JSON.stringify(reports, null, 2));
  console.log(`Report: ${reportPath}`);
}

main();
