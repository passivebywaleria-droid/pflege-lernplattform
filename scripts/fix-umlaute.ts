#!/usr/bin/env npx tsx
/**
 * Umlaut-Fixer für Content-Dateien
 *
 * Ersetzt ae→ä, oe→ö, ue→ü, ss→ß in String-Literalen (Anführungszeichen),
 * aber NICHT in Variablennamen, Imports, oder Code-Logik.
 *
 * Usage:
 *   npx tsx scripts/fix-umlaute.ts content/ce-02/situationen/ls-bauer-demenz-sturz/phase-informieren.ts
 *   npx tsx scripts/fix-umlaute.ts --all ce-02
 */

import * as fs from "fs";
import * as path from "path";

const REPLACEMENTS: [RegExp, string][] = [
  // ue → ü (aber nicht in "ue" am Wortanfang wie "uel" oder in englischen Wörtern)
  [/(?<=[a-zäöüß])ue(?=[a-zäöüß])/g, "ü"],
  [/(?<=^|[\s"(,.\-:;/])Ue(?=[a-zäöüß])/g, "Ü"],
  // ae → ä
  [/(?<=[a-zäöüß])ae(?=[a-zäöüß])/g, "ä"],
  [/(?<=^|[\s"(,.\-:;/])Ae(?=[a-zäöüß])/g, "Ä"],
  // oe → ö
  [/(?<=[a-zäöüß])oe(?=[a-zäöüß])/g, "ö"],
  [/(?<=^|[\s"(,.\-:;/])Oe(?=[a-zäöüß])/g, "Ö"],
];

// Wörter die NICHT ersetzt werden dürfen (englisch, Eigennamen, Code)
const EXCEPTIONS = new Set([
  "does", "goes", "toes", "shoes", "canoe", "aloe", "joe", "joel",
  "poem", "poet", "phoenix", "aero", "haemo", "paed",
  "true", "false", "value", "values", "continue", "issue", "issues",
  "blue", "clue", "due", "glue", "queue", "rescue", "venue",
  "dialogue", "catalogue", "colleague", "league", "vague", "fatigue",
  "unique", "technique", "antique", "boutique", "critique", "mystique",
  "procedure", "include", "exclude", "conclude", "execute",
  "attribute", "contribute", "distribute", "substitute",
  "module", "schedule", "residue", "revenue", "statue", "tissue",
  "influence", "sequence", "consequence", "frequency",
  "israel", "michael", "rafael", "samuel",
  "mae", "rae", "bae",
  "foe", "hoe", "roe", "woe", "doe", "toe",
  "sue", "cue", "hue", "rue",
]);

// Zusammengesetzte Wörter die ae/oe/ue enthalten und KORREKT sind
const COMPOUND_EXCEPTIONS = new Set([
  "baseload", "baseline", "caseload",
]);

function isInStringLiteral(line: string, pos: number): boolean {
  let inDouble = false;
  let inSingle = false;
  let inTemplate = false;
  for (let i = 0; i < pos; i++) {
    const ch = line[i];
    const prev = i > 0 ? line[i - 1] : "";
    if (prev === "\\") continue;
    if (ch === '"' && !inSingle && !inTemplate) inDouble = !inDouble;
    if (ch === "'" && !inDouble && !inTemplate) inSingle = !inSingle;
    if (ch === "`" && !inDouble && !inSingle) inTemplate = !inTemplate;
  }
  return inDouble || inSingle || inTemplate;
}

function getWordAt(text: string, pos: number): string {
  let start = pos;
  let end = pos;
  while (start > 0 && /[a-zA-ZäöüÄÖÜß]/.test(text[start - 1])) start--;
  while (end < text.length && /[a-zA-ZäöüÄÖÜß]/.test(text[end])) end++;
  return text.slice(start, end).toLowerCase();
}

function fixUmlaute(content: string): string {
  const lines = content.split("\n");
  const result: string[] = [];

  for (const line of lines) {
    // Skip import/export/const declarations (code lines)
    if (/^\s*(import|export\s+(const|default|interface|type|function)|const\s+\w+\s*[:=]|interface\s|type\s|function\s)/.test(line)) {
      // Aber: bei `export const X: ContentStep = {` den Rest der Zeile nicht anfassen
      // nur wenn es NICHT in einem String-Literal ist
      result.push(line);
      continue;
    }

    let fixed = line;
    for (const [pattern, replacement] of REPLACEMENTS) {
      fixed = fixed.replace(pattern, (match, ...args) => {
        const offset = args[args.length - 2] as number;
        // Prüfe ob in String-Literal
        if (!isInStringLiteral(fixed, offset)) return match;
        // Prüfe ob das Wort eine Exception ist
        const word = getWordAt(fixed, offset);
        if (EXCEPTIONS.has(word)) return match;
        if (COMPOUND_EXCEPTIONS.has(word)) return match;
        return replacement;
      });
    }
    result.push(fixed);
  }

  return result.join("\n");
}

// Spezial-Ersetzungen die sicher sind (ganze Wörter in Content-Strings)
function fixWholeWords(content: string): string {
  const WORD_FIXES: [string, string][] = [
    ["Koerper", "Körper"],
    ["koerper", "körper"],
    ["Koerperpflege", "Körperpflege"],
    ["koerperpflege", "körperpflege"],
    ["Koerpersprache", "Körpersprache"],
    ["Koerperhaelfte", "Körperhälfte"],
    ["Koerperschema", "Körperschema"],
    ["Koerperseite", "Körperseite"],
    ["Koerperoberflaeche", "Körperoberfläche"],
    ["koerperwarmes", "körperwarmes"],
    ["Uebung", "Übung"],
    ["ueben", "üben"],
    ["Uebergabe", "Übergabe"],
    ["uebergehen", "übergehen"],
    ["Ueberfordern", "Überfordern"],
    ["ueberfordern", "überfordern"],
    ["Uebernahme", "Übernahme"],
    ["Uebertragen", "Übertragen"],
    ["Ueberpruefen", "Überprüfen"],
    ["Ueberwachung", "Überwachung"],
    ["Uebergewicht", "Übergewicht"],
    ["Uebersicht", "Übersicht"],
    ["ueberwaeltigend", "überwältigend"],
    ["Rueckenlage", "Rückenlage"],
    ["Ruecken", "Rücken"],
    ["Rueckmeldung", "Rückmeldung"],
    ["Zurueck", "Zurück"],
    ["zurueck", "zurück"],
    ["Drueckbar", "Drückbar"],
    ["drueckbar", "drückbar"],
    ["wegdrueckbar", "wegdrückbar"],
    ["Fuesse", "Füße"],
    ["Fuesse", "Füße"],
    ["Ausfuehrung", "Ausführung"],
    ["Durchfuehrung", "Durchführung"],
    ["durchfuehren", "durchführen"],
    ["Einfuehlsam", "Einfühlsam"],
    ["einfuehlsam", "einfühlsam"],
    ["Fruehmobilisation", "Frühmobilisation"],
    ["Gefuehl", "Gefühl"],
    ["gefuehl", "gefühl"],
    ["Beduerfnis", "Bedürfnis"],
    ["beduerfnis", "bedürfnis"],
    ["Beduerfnisse", "Bedürfnisse"],
    ["Unterstuetzung", "Unterstützung"],
    ["unterstuetzen", "unterstützen"],
    ["Kraeft", "Kräft"],
    ["Kraeft", "Kräft"],
    ["Staerke", "Stärke"],
    ["staerke", "stärke"],
    ["Schwaeche", "Schwäche"],
    ["schwaeche", "schwäche"],
    ["Laenge", "Länge"],
    ["laenger", "länger"],
    ["Haeufig", "Häufig"],
    ["haeufig", "häufig"],
    ["Waerme", "Wärme"],
    ["waerme", "wärme"],
    ["Kaelte", "Kälte"],
    ["Naesse", "Nässe"],
    ["Naehe", "Nähe"],
    ["naehe", "nähe"],
    ["Aenderung", "Änderung"],
    ["aendern", "ändern"],
    ["Aengst", "Ängst"],
    ["aengst", "ängst"],
    ["Ernaehrung", "Ernährung"],
    ["ernaehr", "ernähr"],
    ["Gespraech", "Gespräch"],
    ["gespraech", "gespräch"],
    ["Verstaendnis", "Verständnis"],
    ["verstaendlich", "verständlich"],
    ["Regelmaessig", "Regelmäßig"],
    ["regelmaessig", "regelmäßig"],
    ["Selbststaendig", "Selbstständig"],
    ["selbststaendig", "selbstständig"],
    ["Zuverlaessig", "Zuverlässig"],
    ["zuverlaessig", "zuverlässig"],
    ["Voellig", "Völlig"],
    ["voellig", "völlig"],
    ["Aerger", "Ärger"],
    ["Spaeter", "Später"],
    ["spaeter", "später"],
    ["Saeugling", "Säugling"],
    ["Aeussere", "Äußere"],
    ["aeusser", "äußer"],
    ["Loesung", "Lösung"],
    ["loesung", "lösung"],
    ["Stoerung", "Störung"],
    ["stoerung", "störung"],
    ["Hoeren", "Hören"],
    ["hoer", "hör"],
    ["Faehigkeit", "Fähigkeit"],
    ["faehig", "fähig"],
    ["Schaedel", "Schädel"],
    ["geschaedigt", "geschädigt"],
    ["Schaetz", "Schätz"],
    ["schaetz", "schätz"],
    ["Schuetz", "Schütz"],
    ["schuetz", "schütz"],
    ["Muendlich", "Mündlich"],
    ["muendlich", "mündlich"],
    ["Stuetz", "Stütz"],
    ["stuetz", "stütz"],
    ["Gruend", "Gründ"],
    ["gruend", "gründ"],
    ["Duenn", "Dünn"],
    ["duenn", "dünn"],
    ["Bewael", "Bewäl"],
    ["bewael", "bewäl"],
    ["praenatal", "pränatal"],
    ["aeltest", "älteste"],
    ["Foerder", "Förder"],
    ["foerder", "förder"],
    ["Froehlich", "Fröhlich"],
    ["froehlich", "fröhlich"],
    ["koennen", "können"],
    ["moeglich", "möglich"],
    ["Moeglich", "Möglich"],
    ["waere", "wäre"],
    ["Laesion", "Läsion"],
    ["Augenhoehe", "Augenhöhe"],
    ["Haendedruck", "Händedruck"],
    ["Haend", "Händ"],
    ["Initialberuehrung", "Initialberührung"],
    ["Beruehrung", "Berührung"],
    ["beruehr", "berühr"],
    ["Erschuetterung", "Erschütterung"],
    ["erschuetter", "erschütter"],
    ["spueren", "spüren"],
    ["Spueren", "Spüren"],
    ["Stuetzstrumpf", "Stützstrumpf"],
    ["stuetzstrumpf", "stützstrumpf"],
    ["Hueft", "Hüft"],
    ["hueft", "hüft"],
    ["natuerlich", "natürlich"],
    ["Natuerlich", "Natürlich"],
    ["fuer", "für"],
    ["Fuer", "Für"],
    ["waehrend", "während"],
    ["Waehrend", "Während"],
    ["Waesche", "Wäsche"],
    ["waesche", "wäsche"],
    ["Beinwaesche", "Beinwäsche"],
    ["bruchstueckhaft", "bruchstückhaft"],
    ["aufgewuehlt", "aufgewühlt"],
    ["aufgeregt", "aufgeregt"],
    ["Lautaeusserung", "Lautäußerung"],
    ["Lautaeußerung", "Lautäußerung"],
    ["Einschraenkung", "Einschränkung"],
    ["eingeschraenkt", "eingeschränkt"],
    ["uebertr", "übertr"],
    ["Hautoberflaeche", "Hautoberfläche"],
    ["Haarwuchsricht", "Haarwuchsricht"],
    ["Stoerung", "Störung"],
    ["Wahrnehm", "Wahrnehm"],
    ["Vestibulaer", "Vestibulär"],
    ["vestibulaer", "vestibulär"],
    ["heisst", "heißt"],
    ["Heisst", "Heißt"],
    ["draengen", "drängen"],
    ["Schaed", "Schäd"],
    ["schaed", "schäd"],
    ["Massnahme", "Maßnahme"],
    ["massnahme", "maßnahme"],
    ["Strasse", "Straße"],
    ["Groesse", "Größe"],
    ["groesse", "größe"],
    ["Schliess", "Schließ"],
    ["schliess", "schließ"],
    ["Stossrichtung", "Stoßrichtung"],
    ["Vorstoss", "Vorstoß"],
    ["Fusssohlenstimul", "Fußsohlenstimul"],
    ["aehnlich", "ähnlich"],
    ["Aehnlich", "Ähnlich"],
    ["Traeg", "Träg"],
    ["traeg", "träg"],
    ["Erwaeg", "Erwäg"],
    ["erwaeg", "erwäg"],
    ["Waeg", "Wäg"],
    ["Naechst", "Nächst"],
    ["naechst", "nächst"],
    ["naechtlich", "nächtlich"],
    ["Naechtlich", "Nächtlich"],
    ["raeumlich", "räumlich"],
    ["Raeumlich", "Räumlich"],
    ["Praev", "Präv"],
    ["praev", "präv"],
    ["Zusammenfuehrung", "Zusammenführung"],
    ["Einfuehrung", "Einführung"],
  ];

  let result = content;
  for (const [wrong, correct] of WORD_FIXES) {
    // Nur in String-Literalen ersetzen (zwischen Anführungszeichen)
    const regex = new RegExp(wrong, "g");
    result = result.replace(regex, (match, offset: number) => {
      if (!isInStringLiteral(result, offset)) return match;
      return correct;
    });
  }
  return result;
}

function processFile(filePath: string): { changed: boolean; fixes: number } {
  const original = fs.readFileSync(filePath, "utf-8");
  let fixed = fixUmlaute(original);
  fixed = fixWholeWords(fixed);

  if (fixed === original) return { changed: false, fixes: 0 };

  const origLines = original.split("\n");
  const fixedLines = fixed.split("\n");
  let fixes = 0;
  for (let i = 0; i < origLines.length; i++) {
    if (origLines[i] !== fixedLines[i]) fixes++;
  }

  fs.writeFileSync(filePath, fixed, "utf-8");
  return { changed: true, fixes };
}

function main() {
  const args = process.argv.slice(2);

  if (args[0] === "--all") {
    const ceId = args[1] || "ce-02";
    const sitDir = path.join(process.cwd(), "content", ceId, "situationen");
    const situations = fs.readdirSync(sitDir).filter(d =>
      fs.statSync(path.join(sitDir, d)).isDirectory()
    );

    let totalFiles = 0;
    let totalFixes = 0;

    for (const sit of situations) {
      const dir = path.join(sitDir, sit);
      const files = fs.readdirSync(dir).filter(f => f.endsWith(".ts"));

      for (const file of files) {
        const fp = path.join(dir, file);
        const { changed, fixes } = processFile(fp);
        if (changed) {
          console.log(`  ✓ ${sit}/${file} — ${fixes} Zeilen gefixt`);
          totalFiles++;
          totalFixes += fixes;
        }
      }
    }

    console.log(`\n═══════════════════════════════════════`);
    console.log(`Gesamt: ${totalFixes} Zeilen in ${totalFiles} Dateien gefixt`);
    console.log(`═══════════════════════════════════════`);
  } else {
    for (const fp of args) {
      const { changed, fixes } = processFile(fp);
      console.log(changed ? `✓ ${fixes} Zeilen gefixt: ${fp}` : `— Keine Änderungen: ${fp}`);
    }
  }
}

main();
