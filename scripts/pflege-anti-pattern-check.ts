#!/usr/bin/env npx tsx
/**
 * Pflege-Anti-Pattern-Check — regex-basierte Schnellprüfung
 *
 * Sucht in allen content/{ce}/situationen/**\/phase-*.ts und patient.ts
 * nach typischen Pflege-Anti-Patterns aus
 * `.claude/rules/pflege-konformitaet.md`.
 *
 * Schnell + günstig — fängt offensichtliche Pseudo-Empathie und falsche
 * Pflege-Slang vor dem teureren pflege-validator-Agent.
 *
 * Usage:
 *   npx tsx scripts/pflege-anti-pattern-check.ts             # alle CEs
 *   npx tsx scripts/pflege-anti-pattern-check.ts ce-02       # nur CE-02
 *   npx tsx scripts/pflege-anti-pattern-check.ts --json      # JSON-Output
 *
 * Exit-Codes:
 *   0 — keine Anti-Patterns gefunden
 *   1 — Anti-Patterns gefunden (für CI als FAIL)
 */

import * as fs from "fs";
import * as path from "path";

interface AntiPattern {
  id: string;
  severity: "HOCH" | "MITTEL" | "NIEDRIG";
  regex: RegExp;
  beschreibung: string;
  empfehlung: string;
  /** Wenn diese zweite Regex auch matched (im selben Treffer-Kontext), wird der Treffer ignoriert */
  ignoreIf?: RegExp;
  /** Treffer in einer FALSCH-Antwort-Option (score: 0/1) überspringen — dort sind
   *  gefährliche Aussagen gewollte Distraktoren mit korrigierendem Feedback, kein Fehler. */
  skipInDistraktor?: boolean;
}

interface Match {
  file: string;
  line: number;
  text: string;
  pattern: AntiPattern;
}

/**
 * Anti-Patterns synchronisiert mit `.claude/rules/pflege-konformitaet.md`.
 *
 * Wenn du hier Patterns hinzufügst, ergänze auch die Regel-Datei.
 */
export const ANTI_PATTERNS: AntiPattern[] = [
  {
    id: "AP-LICHT-INDIREKT",
    severity: "HOCH",
    regex: /(indirekte[snr]?|gedämpfte[snr]?)\s+Licht|Licht.{0,40}gedämpft/i,
    beschreibung:
      "'Indirektes/gedämpftes Licht' bei Sturz/Notfall — verhindert Verletzungs-Inspektion (DNQP, ABCDE).",
    empfehlung:
      "Volle Beleuchtung für Inspektion, ggf. nicht direkt blendend. Nicht romantisieren.",
  },
  {
    id: "AP-SCHOCKMOMENT",
    severity: "MITTEL",
    regex: /kein\s+Schock(?:moment|gefühl)/i,
    beschreibung:
      "'Kein Schockmoment' ist Pseudo-Empathie — Patient nach Sturz IST in Schreck-Situation.",
    empfehlung:
      "Beleuchtungs-Wahl fachlich begründen, nicht emotional kosmetisieren.",
  },
  {
    id: "AP-NRS-OK",
    severity: "HOCH",
    regex:
      /NRS\s*[4-9](?:\/10)?[^.\n]{0,40}(ok|okay|im\s+Rahmen|nicht\s+schlimm|im\s+grünen\s+Bereich)/i,
    beschreibung:
      "NRS ≥ 4 ist moderater bis starker Schmerz, nicht 'ok'. DNQP Schmerz: dokumentations- und interventionspflichtig.",
    empfehlung:
      "NRS-Wert ernst nehmen, im SBAR erwähnen, Bedarfsanalgesie ansprechen.",
  },
  {
    id: "AP-ICH-FUEHRE-NUR",
    severity: "HOCH",
    regex: /ich\s+führe\s+(nur|allein|die\s+Bewegung)/i,
    beschreibung:
      "Kinästhetik nach Hatch/Maietta = Patient bewegt sich selbst, Pflege begleitet. 'Ich führe' ist paternalistisch falsch.",
    empfehlung:
      "'Sie machen die Bewegung, ich begleite und sichere. Sie sagen das Tempo.'",
  },
  {
    id: "AP-HEBEN-ZIEHEN",
    severity: "HOCH",
    regex: /(ich|wir)\s+(ziehe[n]?|hebe[n]?)\s+(Sie|dich|ihn|sie)\s+hoch/i,
    beschreibung:
      "Heben/Ziehen ist kinästhetisch falsch (Pflege-Rücken + entmachtet Patient).",
    empfehlung:
      "Patient bewegt sich selbst, Pflege sichert seitlich am Becken/Rumpf.",
  },
  {
    id: "AP-UNTER-ACHSELN",
    severity: "HOCH",
    regex: /unter\s+den?\s+Achseln\s+(greifen|nehmen|fassen)/i,
    beschreibung:
      "Unter den Achseln greifen → Risiko Schultergelenk + Pflege-Rücken.",
    empfehlung: "Seitlich am Becken/Rumpf sichern.",
  },
  {
    id: "AP-SAGT-OHNE-ZITAT",
    severity: "MITTEL",
    regex: /[Ss]ie\s+sagt:\s*"(?:\s|\\n)*$/m,
    beschreibung:
      "'Sie sagt:' am Zeilenende ohne folgendes Patientenzitat — User rätselt was gesagt wird.",
    empfehlung:
      "Direktes Zitat in '...' einfügen oder 'sagt:' weglassen.",
  },
  {
    id: "AP-MIN-WARTE-OHNE-RR",
    severity: "HOCH",
    regex:
      /(\d+\s+Min(?:uten)?\s+(?:Zeit\s+)?gegeben.{0,80}(?:Orthostase|Schellong)|Schellong.{0,40}\d+\s+Min)/i,
    beschreibung:
      "'X Min warten' für Orthostase ohne RR-Messung ist KEIN Schellong-Test.",
    empfehlung:
      "Schellong-Standard: RR liegen → ≥1 Min sitzen → RR sitzen → erst dann Aufstehen.",
    ignoreIf: /RR.{0,40}\d+\/\d+/,
  },
  {
    id: "AP-HUEFTE-SCHUETZEN-VAGE",
    severity: "NIEDRIG",
    regex: /schützt?\s+die\s+Hüfte/i,
    beschreibung:
      "'Schützt die Hüfte' ist vage — was konkret? Hand auf Trochanter? Bein abstützen?",
    empfehlung:
      "Konkretisieren: 'stützt das linke Becken und kontrolliert die Hüfte'.",
  },
  {
    id: "AP-SIE-STATT-DU-PFLEGE",
    severity: "MITTEL",
    regex: /\b(Nehmen\s+Sie\s+sich|Sie\s+müssen|Bitte\s+Sie)\b/,
    beschreibung:
      "Anrede an LERNENDE muss 'du' sein (nicht 'Sie'). Patienten werden gesiezt, Lernende geduzt.",
    empfehlung:
      "An Lernende: 'Nimm dir', 'du musst', 'Bitte du'. Patient-Sätze bleiben Sie-formuliert.",
    // Ignoriere wenn der Satz innerhalb eines Patient-Zitats liegt (von "..." umschlossen)
    ignoreIf: /["„].*?(Nehmen\s+Sie|Sie\s+müssen).*?["""]/,
  },
  {
    id: "AP-GLUECK-VOR-ASSESSMENT",
    severity: "HOCH",
    regex:
      /(Sie\s+haben\s+(ja\s+)?Glück\s+gehabt|nochmal\s+Glück\s+gehabt|ist\s+ja\s+(nochmal\s+)?(nichts|gut)\s+(passiert|gegangen)|halb\s+so\s+wild)/i,
    beschreibung:
      "'Glück gehabt / nichts passiert' VOR abgeschlossenem Assessment ist Fehlinformation — Verletzung (z.B. Fraktur, intrakranielle Blutung) noch nicht ausgeschlossen. Rechtlich/ethisch problematisch.",
    empfehlung:
      "Erst vollständig untersuchen (ABCDE, Schmerz, Beweglichkeit), DANN beruhigend sprechen — und nur was gesichert ist.",
    skipInDistraktor: true,
  },
  {
    id: "AP-BETTGITTER-BEIDSEITIG",
    severity: "HOCH",
    regex:
      /(beide[ns]?\s+Bettgitter\s+(hoch|oben|rauf)|Bettgitter\s+beidseitig\s+(hoch|oben)|beide\s+Seitenteile?\s+(hoch|oben))/i,
    beschreibung:
      "Beidseitig hochgestellte Bettgitter ohne Einwilligung/richterliche Genehmigung gelten als freiheitsentziehende Maßnahme (Fixierung), § 1831 Abs. 4 BGB (seit Betreuungsrechtsreform 2023; vormals § 1906 BGB).",
    empfehlung:
      "Einseitiges Bettgitter (Patient kann selbst raus) ODER richterlicher Beschluss + dokumentierte Einwilligung. Bettgitter ist KEINE Sturzprophylaxe.",
    // Ignoriere Frage-/Diskussions-/Rechts-Kontexte (Lehrinhalt ÜBER die Fixierung,
    // keine Empfehlung): "?", Paragraph-Verweise, kritische Rahmung, Kollegin-Szene.
    ignoreIf:
      /(\?|§\s*\d|BGB|richterlich|Betreuungsgericht|Einwilligung|Genehmigung|Anordnung|\bKEINE\b|keine\s+Fixierung|gilt\s+als\s+Fixierung|Lifestyle|Kollegin|möchte)/i,
    skipInDistraktor: true,
  },

  // ── Stage 3 / W4: domänen-spezifische Anti-Patterns (korpus-belegt) ──────────
  {
    id: "AP-2H-LAGERUNG-STARR",
    severity: "MITTEL",
    regex:
      /((?:2|zwei)\s*[-\s]?(?:h|stunden)[-\s]?regel)|((?:starre?s?|pauschale?s?|feste?s?)\s+(?:2|zwei)\s*[-\s]?(?:stünd|stunden)\w*)/i,
    beschreibung:
      "Starre/pauschale 2-Stunden-Lagerungsregel. DNQP Dekubitusprophylaxe: Für jeden Gefährdeten ist ein INDIVIDUELLES Intervall festzulegen und bei Zustandsänderung anzupassen — 2-stündlich ist nur der orientierende Startwert (Finger-Test), keine starre Regel für alle.",
    empfehlung:
      "Individuelles Lagerungsintervall statt starrer 2h-Regel; zusätzlich Mikrobewegungen. Quelle: DNQP Dekubitus (Gebrauchsanleitung Expertenstandards).",
    // Korrektur-/Aufhebungs-Kontexte (Lehrinhalt ÜBER die obsolet gewordene Regel)
    ignoreIf:
      /(aufgegeben|aufgehoben|abgelöst|überholt|obsolet|veraltet|widerleg|nicht\s+mehr|individuell|Finger-?Test|Mythos|Startwert|gilt\s+nicht|\bvorbei\b|\?)/i,
    skipInDistraktor: true,
  },
  {
    id: "AP-DEKUBITUS-MASSAGE",
    severity: "HOCH",
    regex:
      /(massier\w+|massage|kräftiges\s+reiben)[^.\n]{0,30}(gerötet\w*|geschwächt\w*|prädilektion\w*|druckstelle\w*|dekubitus|gefährdete[nr]?\s+haut)/i,
    beschreibung:
      "Massieren/kräftiges Reiben gefährdeter oder geröteter Hautstellen als Dekubitusprophylaxe. Belegt obsolet: schädigt bereits geschädigtes Gewebe zusätzlich (I care / DNQP 2017: „Massieren oder kräftiges Reiben der Prädilektionsstellen hilft nicht gegen Dekubitus“).",
    empfehlung:
      "Keine Massage gefährdeter Stellen. Stattdessen: Druckentlastung, Bewegungsförderung, Hautinspektion. Quelle: I care Pflege (DNQP 2017).",
    // Korrektive Rahmung (verboten/kontraindiziert/widerlegt) ist Lehrinhalt, kein Fehler.
    ignoreIf:
      /(verboten|kontraindizier\w*|no-?go|obsolet|widerleg\w*|schäd\w*|nicht\s|kein\w*|vermeid\w*|tabu|hilft\s+nicht|\?)/i,
    skipInDistraktor: true,
  },
  {
    id: "AP-DEKUBITUS-HAUTMYTHOS",
    severity: "HOCH",
    regex: /(franzbranntwein|eisen\s+und\s+föhnen)/i,
    beschreibung:
      "Franzbranntwein bzw. „Eisen und Föhnen“ der Haut zur Dekubitusprophylaxe. Belegt schädlich: Alkohol entfettet/trocknet die Haut aus; Föhnen ist wirkungslos und erhöht Infektions-/Verbrennungsgefahr (Pflege Heute).",
    empfehlung:
      "Keine hautschädigenden Rituale. pH-neutrale Reinigung, bei trockener Haut W/O-Emulsion. Quelle: Pflege Heute (Pflegerituale-Warnung).",
    ignoreIf:
      /(verboten|kontraindizier\w*|no-?go|obsolet|widerleg\w*|schäd\w*|trocknet|nicht\s|kein\w*|vermeid\w*|tabu|\?)/i,
    skipInDistraktor: true,
  },
  {
    id: "AP-OPIOID-ATEMDEPRESSION-MYTHOS",
    severity: "HOCH",
    regex:
      /((?:angst|sorge)\s+vor\s+(?:der\s+)?atemdepression)|((?:opioid\w*|morphin\w*)[^.\n]{0,50}(?:beschleunig\w*\s+(?:das\s+)?sterben|sterben\s+beschleunig\w*))/i,
    beschreibung:
      "Opioid-Mythos: Aus Angst vor Atemdepression Opioide vorenthalten/zu niedrig dosieren bzw. „Opioide beschleunigen das Sterben“. Belegt falsch: Bei Titration nach Schmerzreduktion ist eine Atemdepression nicht zu befürchten (Schmerz = physiologischer Antagonist); Untertherapie ist der eigentliche Fehler (Palliativmedizin Aulbert).",
    empfehlung:
      "Opioide nach Wirkung titrieren; sachgerechte Dosierung verursacht keine relevante Atemdepression und darf bei Tumorschmerz nicht vorenthalten werden. Quelle: Palliativmedizin (Aulbert).",
    ignoreIf:
      /(nicht\s|kein\w*|Mythos|Irrtum|falsch|unbegründet|widerleg\w*|Titration|titrier\w*|sachgerecht|physiologischer\s+Antagonist|\?)/i,
    skipInDistraktor: true,
  },
];

const CONTENT_DIR = path.join(process.cwd(), "content");

function* walkPhaseFiles(
  ceFilter?: string
): Generator<string, void, unknown> {
  if (!fs.existsSync(CONTENT_DIR)) return;

  for (const ceId of fs.readdirSync(CONTENT_DIR)) {
    if (!ceId.startsWith("ce-")) continue;
    if (ceFilter && ceId !== ceFilter) continue;

    const sitDir = path.join(CONTENT_DIR, ceId, "situationen");
    if (!fs.existsSync(sitDir)) continue;

    for (const sit of fs.readdirSync(sitDir)) {
      const sitPath = path.join(sitDir, sit);
      if (!fs.statSync(sitPath).isDirectory()) continue;

      for (const file of fs.readdirSync(sitPath)) {
        if (
          (file.startsWith("phase-") && file.endsWith(".ts")) ||
          file === "patient.ts"
        ) {
          yield path.join(sitPath, file);
        }
      }
    }
  }
}

function checkFile(filePath: string): Match[] {
  const matches: Match[] = [];
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  for (const pattern of ANTI_PATTERNS) {
    // Multiline-Suche im ganzen Inhalt für Context
    const allMatches = [...content.matchAll(new RegExp(pattern.regex, "gi"))];

    for (const match of allMatches) {
      if (match.index === undefined) continue;

      // Optionaler Ausnahme-Check
      if (pattern.ignoreIf) {
        const contextStart = Math.max(0, match.index - 100);
        const contextEnd = Math.min(content.length, match.index + 200);
        const context = content.slice(contextStart, contextEnd);
        if (pattern.ignoreIf.test(context)) continue;
      }

      // Distraktor-Check: gefährliche Aussage in einer score:0/1-Option ist
      // ein gewollter Lehr-Distraktor (mit korrigierendem Feedback), kein Fehler.
      if (pattern.skipInDistraktor) {
        const optStart = Math.max(0, match.index - 300);
        const optEnd = Math.min(content.length, match.index + 600);
        if (/score:\s*[01]\b/.test(content.slice(optStart, optEnd))) continue;
      }

      // Zeilennummer berechnen
      const beforeMatch = content.slice(0, match.index);
      const lineNumber = beforeMatch.split("\n").length;
      const lineText = lines[lineNumber - 1] ?? "";

      // Code-Kommentare überspringen — dort wird das Anti-Pattern oft DOKUMENTIERT
      // (z.B. "// Anti-Pattern 'ich hebe Sie hoch' muss bewusst werden"), nicht angewendet.
      const trimmed = lineText.trimStart();
      if (trimmed.startsWith("//") || trimmed.startsWith("*") || trimmed.startsWith("/*")) continue;

      matches.push({
        file: filePath.replace(process.cwd() + "/", ""),
        line: lineNumber,
        text: lineText.trim().slice(0, 120),
        pattern,
      });
    }
  }

  return matches;
}

function main() {
  const args = process.argv.slice(2);
  const isJson = args.includes("--json");
  const ceFilter = args.find((a) => a.startsWith("ce-"));

  const allMatches: Match[] = [];
  for (const file of walkPhaseFiles(ceFilter)) {
    allMatches.push(...checkFile(file));
  }

  if (isJson) {
    console.log(
      JSON.stringify(
        allMatches.map((m) => ({
          file: m.file,
          line: m.line,
          text: m.text,
          patternId: m.pattern.id,
          severity: m.pattern.severity,
          beschreibung: m.pattern.beschreibung,
          empfehlung: m.pattern.empfehlung,
        })),
        null,
        2
      )
    );
    process.exit(allMatches.length > 0 ? 1 : 0);
  }

  console.log(
    `\n${"═".repeat(78)}\n  Pflege-Anti-Pattern-Check${ceFilter ? ` für ${ceFilter}` : ""}\n${"═".repeat(78)}\n`
  );

  const counts = {
    HOCH: allMatches.filter((m) => m.pattern.severity === "HOCH").length,
    MITTEL: allMatches.filter((m) => m.pattern.severity === "MITTEL").length,
    NIEDRIG: allMatches.filter((m) => m.pattern.severity === "NIEDRIG").length,
  };

  console.log(
    `Funde: ${allMatches.length}  (HOCH: ${counts.HOCH} | MITTEL: ${counts.MITTEL} | NIEDRIG: ${counts.NIEDRIG})\n`
  );

  if (allMatches.length === 0) {
    console.log("✅ Keine Anti-Patterns gefunden.\n");
    process.exit(0);
  }

  // Gruppiert nach Pattern
  const byPattern = new Map<string, Match[]>();
  for (const m of allMatches) {
    const list = byPattern.get(m.pattern.id) ?? [];
    list.push(m);
    byPattern.set(m.pattern.id, list);
  }

  for (const [patternId, matches] of byPattern) {
    const p = matches[0].pattern;
    const sevIcon =
      p.severity === "HOCH" ? "❌" : p.severity === "MITTEL" ? "⚠️ " : "ℹ️ ";
    console.log(`${sevIcon} ${patternId} — ${p.severity}  (${matches.length}×)`);
    console.log(`   ${p.beschreibung}`);
    console.log(`   ➜ ${p.empfehlung}\n`);
    for (const m of matches.slice(0, 5)) {
      console.log(`   ${m.file}:${m.line}`);
      console.log(`     ${m.text}`);
    }
    if (matches.length > 5) {
      console.log(`   ... +${matches.length - 5} weitere`);
    }
    console.log();
  }

  console.log(`${"═".repeat(78)}\n`);
  process.exit(1);
}

// Nur bei Direktaufruf ausführen — nicht beim Import (z.B. durch den Drift-Guard-Test).
if (process.argv[1]?.includes("pflege-anti-pattern-check")) {
  main();
}
