/**
 * Content-Linter — Prüft alle steps*.ts Dateien auf häufige Fehler
 *
 * Checkt:
 * 1. Kein Markdown (**) in Content-Strings
 * 2. Icons müssen echte Emojis sein (kein "test-tube", "alert-circle")
 * 3. Pflichtfelder pro stepType vorhanden
 * 4. B1-Texte vorhanden bei bestimmten Step-Typen
 * 5. Keine leeren Strings
 * 6. stepType passt zur Union in _types.ts
 * 7. Bloom-Level zwischen 1-6
 */

import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "fs";
import { join, resolve } from "path";

const CONTENT_DIR = resolve(__dirname, "../../content/ce-05");

// Alle Content-Ordner finden
function findContentDirs(): string[] {
  try {
    return readdirSync(CONTENT_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory() && d.name.startsWith("le-"))
      .map((d) => d.name);
  } catch {
    return [];
  }
}

// Alle steps*.ts Dateien in einem Ordner finden
function findStepFiles(leDir: string): string[] {
  const dir = join(CONTENT_DIR, leDir);
  try {
    return readdirSync(dir)
      .filter((f) => f.startsWith("steps") && f.endsWith(".ts"))
      .map((f) => join(dir, f));
  } catch {
    return [];
  }
}

// Datei als Text lesen
function readFile(path: string): string {
  return readFileSync(path, "utf-8");
}

// Alle String-Werte aus einem Objekt extrahieren (rekursiv)
function extractStrings(obj: unknown, path = ""): { path: string; value: string }[] {
  const results: { path: string; value: string }[] = [];
  if (typeof obj === "string") {
    results.push({ path, value: obj });
  } else if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      results.push(...extractStrings(item, `${path}[${i}]`));
    });
  } else if (obj && typeof obj === "object") {
    for (const [key, val] of Object.entries(obj)) {
      results.push(...extractStrings(val, path ? `${path}.${key}` : key));
    }
  }
  return results;
}

// Erlaubte stepTypes
const VALID_STEP_TYPES = [
  "text", "mc", "freetext", "sorting", "matching", "branching", "selfrating",
  "fillin", "truefalse", "timer", "memory", "crossword", "categorize",
  "highlight", "dialog", "reflection", "hotspot", "confidence", "cloze",
  "sequencing", "slider", "summary", "swipe", "flipcard", "reveal",
  "timeline", "comparison",
] as const;

// Pflichtfelder pro stepType
const REQUIRED_QUESTION_FIELDS: Record<string, string[]> = {
  mc: ["fragetext", "optionen"],
  matching: ["matchingPairs"],
  sorting: ["sortItems"],
  branching: ["branchingOptions"],
  freetext: ["fragetext", "musterantwort"],
  fillin: ["fillin"],
  truefalse: ["trueFalseCards"],
  timer: ["timerQuestions", "timeLimitSeconds"],
  memory: ["memoryPairs"],
  crossword: ["crosswordWords"],
  categorize: ["categories", "categoryItems"],
  highlight: ["highlightSegments"],
  dialog: ["patientName", "dialogPhases"],
  reflection: ["reflection"],
  hotspot: ["hotspot"],
  confidence: ["confidenceCards"],
  cloze: ["cloze"],
  sequencing: ["sequencing"],
  slider: ["slider"],
  summary: ["summary"],
  swipe: ["swipe"],
  flipcard: ["flipcard"],
  reveal: ["reveal"],
  timeline: ["timeline"],
  comparison: ["comparison"],
};

// Prüfe ob ein String ein Emoji ist (nicht nur ASCII)
const EMOJI_REGEX = /^[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u;
const TEXT_ICON_PATTERN = /^[a-z][a-z0-9-]+$/; // "test-tube", "alert-circle" etc.

// Content-Dateien laden
const contentDirs = findContentDirs();

describe("Content-Linter", () => {
  if (contentDirs.length === 0) {
    it.skip("Keine Content-Ordner gefunden", () => {});
    return;
  }

  for (const leDir of contentDirs) {
    const stepFiles = findStepFiles(leDir);
    if (stepFiles.length === 0) continue;

    describe(leDir, () => {
      for (const filePath of stepFiles) {
        const fileName = filePath.split("/").pop()!;
        const rawContent = readFile(filePath);

        describe(fileName, () => {
          // 1. Kein Markdown ** in Strings
          it("enthält kein Markdown (**) in Strings", () => {
            const matches = rawContent.match(/\*\*[^*]+\*\*/g);
            if (matches) {
              expect.fail(
                `Markdown gefunden:\n${matches.slice(0, 5).map((m) => `  - ${m}`).join("\n")}\n` +
                `Insgesamt ${matches.length} Vorkommen. Content-Strings dürfen kein Markdown enthalten!`
              );
            }
          });

          // 2. Icons müssen Emojis sein
          it("verwendet echte Emojis statt Text-Icons", () => {
            const iconMatches = [...rawContent.matchAll(/icon:\s*["']([^"']+)["']/g)];
            const textIcons = iconMatches
              .map((m) => m[1])
              .filter((icon) => TEXT_ICON_PATTERN.test(icon));

            if (textIcons.length > 0) {
              expect.fail(
                `Text-Icons gefunden (müssen Emojis sein):\n${textIcons.map((i) => `  - "${i}"`).join("\n")}`
              );
            }
          });

          // 3. Keine leeren Strings in wichtigen Feldern
          it("hat keine leeren Titel oder Body-Strings", () => {
            const emptyTitles = [...rawContent.matchAll(/title:\s*["'](\s*)["']/g)];
            const emptyBodies = [...rawContent.matchAll(/body:\s*["'](\s*)["']/g)];
            const issues: string[] = [];

            if (emptyTitles.length > 0) issues.push(`${emptyTitles.length}x leerer title`);
            if (emptyBodies.length > 0) issues.push(`${emptyBodies.length}x leerer body`);

            if (issues.length > 0) {
              expect.fail(`Leere Felder: ${issues.join(", ")}`);
            }
          });

          // 4. stepType ist gültig
          it("verwendet nur gültige stepTypes", () => {
            const stepTypeMatches = [...rawContent.matchAll(/stepType:\s*["']([^"']+)["']/g)];
            const invalidTypes = stepTypeMatches
              .map((m) => m[1])
              .filter((t) => !(VALID_STEP_TYPES as readonly string[]).includes(t));

            if (invalidTypes.length > 0) {
              expect.fail(`Ungültige stepTypes: ${invalidTypes.join(", ")}`);
            }
          });

          // 5. Bloom-Level zwischen 1 und 6
          it("hat gültige Bloom-Level (1-6)", () => {
            const bloomMatches = [...rawContent.matchAll(/bloomLevel:\s*(\d+)/g)];
            const invalid = bloomMatches
              .map((m) => parseInt(m[1]))
              .filter((b) => b < 1 || b > 6);

            if (invalid.length > 0) {
              expect.fail(`Ungültige Bloom-Level: ${invalid.join(", ")} (erlaubt: 1-6)`);
            }
          });

          // 6. Pflichtfelder pro stepType prüfen
          it("hat alle Pflichtfelder pro stepType", () => {
            // Simple regex-based check: find stepType, then check nearby question block
            const steps = rawContent.split(/\{\s*stepId:/);
            const issues: string[] = [];

            for (let i = 1; i < steps.length; i++) {
              const stepBlock = steps[i];
              const typeMatch = stepBlock.match(/stepType:\s*["']([^"']+)["']/);
              if (!typeMatch) continue;

              const stepType = typeMatch[1];
              const required = REQUIRED_QUESTION_FIELDS[stepType];
              if (!required) continue; // text, selfrating haben keine Pflichtfelder in question

              const stepIdMatch = stepBlock.match(/["']([^"']+)["']/);
              const stepId = stepIdMatch ? stepIdMatch[1] : `step-${i}`;

              for (const field of required) {
                // Prüfe ob das Feld irgendwo im Step-Block vorkommt
                if (!stepBlock.includes(`${field}:`)) {
                  issues.push(`${stepId} (${stepType}): fehlt "${field}"`);
                }
              }
            }

            if (issues.length > 0) {
              expect.fail(
                `Fehlende Pflichtfelder:\n${issues.map((i) => `  - ${i}`).join("\n")}`
              );
            }
          });

          // 7. Keine Regieanweisungen in Dialog-Kontexten
          it("hat keine Regieanweisungen (*klopft*, *seufzt*) in Dialog-Texten", () => {
            const regie = rawContent.match(/\*[a-zäöüA-ZÄÖÜ][^*]{2,30}\*/g);
            // Filter: nur in context/patientResponse Feldern relevant, nicht in Erklärungen
            const suspiciousRegie = regie?.filter((r) => {
              // Nicht ** (Markdown) — das prüfen wir separat
              return !r.startsWith("**") && !r.endsWith("**");
            });

            if (suspiciousRegie && suspiciousRegie.length > 0) {
              // Warnung, kein harter Fehler
              console.warn(
                `⚠️ Mögliche Regieanweisungen in ${fileName}: ${suspiciousRegie.slice(0, 3).join(", ")}`
              );
            }
          });

          // 8. B1-Content vorhanden
          it("hat contentB1 für alle Steps", () => {
            const stepCount = (rawContent.match(/stepId:/g) || []).length;
            const b1Count = (rawContent.match(/contentB1:/g) || []).length;

            if (b1Count < stepCount) {
              console.warn(
                `⚠️ ${fileName}: ${b1Count}/${stepCount} Steps haben contentB1 (${stepCount - b1Count} fehlen)`
              );
            }
          });
        });
      }
    });
  }
});
