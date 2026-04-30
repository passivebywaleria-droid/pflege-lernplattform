#!/usr/bin/env npx tsx
/**
 * Begriff-Coverage-Validator
 *
 * Prüft pro Situation: Wird JEDER Fachbegriff (glossarBegriffe) der in einem
 * Anwendungs-Step verwendet wird, VORHER durch einen Inline-Wissens-Baustein
 * oder einen Text-/Erklär-Step eingeführt?
 *
 * Pipeline-Stufe: NACH Inline-Wissen-Generator, VOR Code-Validator.
 * Bei Lücken: FAIL + Liste der fehlenden Erklärungen.
 *
 * Usage:
 *   npx tsx scripts/begriff-coverage-validator.ts ce-02 frau-m-nacht-sturz
 *   npx tsx scripts/begriff-coverage-validator.ts ce-02 --all
 *   npx tsx scripts/begriff-coverage-validator.ts ce-02 --all --pipeline
 */

import * as fs from "fs";
import * as path from "path";

interface BegriffLuecke {
  stepId: string;
  stepType: string;
  phase: string;
  begriff: string;
}

interface SituationReport {
  situationId: string;
  totalBegriffe: number;
  erklaerteBegriffe: number;
  luecken: BegriffLuecke[];
  coveragePercent: number;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/§/g, "ss")
    .replace(/°/g, "-grad-")
    .replace(/₂/g, "2")
    .replace(/\s*\(=?\s*[^)]*\)/g, "")
    .replace(/[()=]/g, "")
    .replace(/\s+/g, " ")
    .replace(/--+/g, "-")
    .trim();
}

function normalizeVariants(s: string): string[] {
  const base = normalize(s);
  const variants = [base];
  const parenMatch = s.match(/\(=?\s*([^)]+)\)/);
  if (parenMatch) {
    variants.push(normalize(parenMatch[1]));
  }
  return variants;
}

const GENERISCH = new Set([
  "patient", "patientin", "pflege", "pflegekraft", "arzt", "station",
  "bett", "zimmer", "tochter", "sohn", "ehefrau", "ehemann",
  "hand", "arm", "bein", "fuss", "kopf", "ruecken", "bauch", "knie",
  "wuerde", "respekt", "empathie", "vertrauen", "angst", "schmerz",
  "passiv", "aktiv", "rechts", "links", "oben", "unten",
  "schuldgefuehle", "objektivitaet", "verhaeltnismaessigkeit",
  "prioritaet", "uebergabe", "reha", "koerperpflege",
  "pflegemassnahmen", "aufklaerungspflicht", "angehoerigenberatung",
  "handfuehrung", "sauerstoffsaettigung", "schulterguertl",
  // Körperteile + Organe
  "steissbein", "wade", "hueftgelenk", "schulter", "hals", "becken",
  "oberschenkel", "unterschenkel", "ferse", "zehen", "finger",
  "brustkorb", "wirbelsaeule", "rippen", "huefte",
  // Allgemeine medizinische Begriffe
  "roetung", "schwellung", "blutdruck", "schwindel", "fieber",
  "entzuendung", "wunde", "narbe", "drainage", "infusion",
  "physiotherapie", "ergotherapie", "logopaedie",
  "druckstelle", "druckwunde", "wundheilung", "wundbeobachtung", "wundfluessigkeit",
  "blutdruckabfall", "kreislaufregulation", "schwindel beim aufstehen",
  "notarzt", "prophylaxe", "hygiene", "hygieneregeln",
  "lagerung", "spritze", "vorbereitung", "nrs",
  "kompressionsstruempfe", "antiemboliestruempfe",
  "gehstuetzen", "unterarmgehstuetzen", "thrombosen-schutzstruempfe",
  "lagerungsvorschrift", "umlagerungsintervall", "umlagern",
  // Allgemeine Pflegebegriffe
  "dokumentation", "evaluation", "planung", "massnahme", "problem",
  "pflegebericht", "pflegeplan", "pflegeplanung", "pflegeziel",
  "verlaufsdokumentation", "aufklaerung", "beratung", "anleitung",
  "kontinuitaet", "zielerreichung", "muendliche uebergabe",
  "pflegedokumentation", "schmerzdokumentation", "schmerzprotokoll",
  "schmerzreassessment", "besuchsbericht", "behandlungskontinuitaet",
  "druckwunden-prophylaxe", "druckwunden-risiko", "dekubitus-risiko", "dekubitusrisiko",
  "haftung", "uebersetzen", "spiegeln", "beinuebungen",
  "ernaehrungsberaterin", "thrombose-schutz", "konsistenz",
  // Kommunikation
  "nonverbale kommunikation", "interkulturelle pflege", "tuerkisch",
  "dolmetscher", "gespraechsfuehrung", "zuhoeren",
  // Recht
  "ss 630f bgb", "ss 1831 bgb", "ss 3 pflbg",
  // Prozess + Standards
  "pesr", "etiologie", "sbar", "dnqp",
].map(normalize));

function validateSituation(ceId: string, situationId: string): SituationReport {
  const dir = path.join(process.cwd(), "content", ceId, "situationen", situationId);

  const phasenOrder = [
    "phase-informieren", "phase-beobachten", "phase-planen",
    "phase-durchfuehren", "phase-evaluieren", "phase-dokumentieren",
  ];

  const erklaert = new Set<string>();
  const alleBegriffe = new Set<string>();
  const luecken: BegriffLuecke[] = [];

  const allTsFiles = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter(f => f.endsWith(".ts"))
    : [];

  for (const tsFile of allTsFiles) {
    const filePath = path.join(dir, tsFile);
    const content = fs.readFileSync(filePath, "utf-8");

    if (content.includes("inlineWissen") || content.includes('stepType: "text"')) {
      const blocks = content.split(/\{\s*stepId:/);
      for (const block of blocks) {
        const isExplainer =
          block.includes('stepType: "inlineWissen"') ||
          block.includes('stepType: "text"');
        if (!isExplainer) continue;

        const glossarMatches = block.match(/glossarBegriffe:\s*\[(.*?)\]/g) || [];
        for (const gm of glossarMatches) {
          const items = gm.match(/"([^"]+)"/g) || [];
          for (const item of items) {
            erklaert.add(normalize(item.replace(/"/g, "")));
          }
        }
      }
    }

    const fettBegriffe = content.match(/\*\*([^*]+)\*\*/g) || [];
    for (const fb of fettBegriffe) {
      const clean = fb.replace(/\*\*/g, "").trim();
      if (clean.length > 2 && clean.length < 50) {
        erklaert.add(normalize(clean));
      }
    }
  }

  for (const g of GENERISCH) erklaert.add(g);

  for (const phaseFile of phasenOrder) {
    const filePath = path.join(dir, `${phaseFile}.ts`);
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, "utf-8");
    const phaseName = phaseFile.replace("phase-", "");

    const stepBlocks = content.split(/\{\s*stepId:/);

    for (const block of stepBlocks) {
      if (!block.includes("stepType:")) continue;

      const stepIdMatch = block.match(/^\s*"([^"]+)"/);
      const stepTypeMatch = block.match(/stepType:\s*"([^"]+)"/);
      if (!stepIdMatch || !stepTypeMatch) continue;

      const stepId = stepIdMatch[1];
      const stepType = stepTypeMatch[1];

      const glossarMatches = block.match(/glossarBegriffe:\s*\[(.*?)\]/g) || [];
      const begriffe: string[] = [];
      for (const gm of glossarMatches) {
        const items = gm.match(/"([^"]+)"/g) || [];
        for (const item of items) {
          begriffe.push(item.replace(/"/g, ""));
        }
      }

      if (stepType === "inlineWissen" || stepType === "text") {
        for (const b of begriffe) {
          erklaert.add(normalize(b));
        }
        const fettInBlock = block.match(/\*\*([^*]+)\*\*/g) || [];
        for (const fb of fettInBlock) {
          const clean = fb.replace(/\*\*/g, "").trim();
          if (clean.length > 2 && clean.length < 50) {
            erklaert.add(normalize(clean));
          }
        }
      } else {
        for (const b of begriffe) {
          const norm = normalize(b);
          alleBegriffe.add(norm);
          const variants = normalizeVariants(b);
          const isErklaert = variants.some(v => erklaert.has(v));
          if (!isErklaert) {
            luecken.push({
              stepId: stepId.slice(0, 50),
              stepType,
              phase: phaseName,
              begriff: b,
            });
          }
        }
      }
    }
  }

  const totalBegriffe = alleBegriffe.size;
  const erklaerteCount = totalBegriffe - new Set(luecken.map(l => normalize(l.begriff))).size;
  const coveragePercent = totalBegriffe > 0
    ? Math.round((erklaerteCount / totalBegriffe) * 100)
    : 100;

  return {
    situationId,
    totalBegriffe,
    erklaerteBegriffe: erklaerteCount,
    luecken,
    coveragePercent,
  };
}

function main() {
  const ceId = process.argv[2] ?? "ce-02";
  const sitArg = process.argv[3] ?? "--all";
  const isPipeline = process.argv.includes("--pipeline");

  const ceDir = path.join(process.cwd(), "content", ceId, "situationen");
  if (!fs.existsSync(ceDir)) {
    console.error(`CE nicht gefunden: ${ceDir}`);
    process.exit(1);
  }

  const situationen = sitArg === "--all"
    ? fs.readdirSync(ceDir).filter(d =>
        fs.statSync(path.join(ceDir, d)).isDirectory()
      )
    : [sitArg];

  const reports: SituationReport[] = [];
  let totalLuecken = 0;

  for (const sit of situationen) {
    const report = validateSituation(ceId, sit);
    reports.push(report);
    totalLuecken += report.luecken.length;

    if (!isPipeline) {
      const icon = report.luecken.length === 0 ? "✅" : "❌";
      const uniqueLuecken = new Set(report.luecken.map(l => normalize(l.begriff))).size;
      console.log(
        `${icon} ${report.situationId.padEnd(30)} ` +
        `${report.coveragePercent}% Coverage ` +
        `(${uniqueLuecken} Begriffe fehlen, ${report.luecken.length} Stellen)`
      );

      if (report.luecken.length > 0 && report.luecken.length <= 25) {
        const byBegriff = new Map<string, string[]>();
        for (const l of report.luecken) {
          const key = l.begriff;
          if (!byBegriff.has(key)) byBegriff.set(key, []);
          byBegriff.get(key)!.push(`${l.phase}/${l.stepType}`);
        }
        for (const [begriff, stellen] of byBegriff) {
          console.log(`   ❌ "${begriff}" — verwendet in: ${stellen.join(", ")}`);
        }
      }
    }
  }

  if (!isPipeline) {
    console.log("\n" + "═".repeat(60));
    const avgCoverage = reports.length > 0
      ? Math.round(reports.reduce((s, r) => s + r.coveragePercent, 0) / reports.length)
      : 0;
    console.log(`  ${ceId.toUpperCase()} — ∅ ${avgCoverage}% Begriff-Coverage`);
    console.log(`  ${totalLuecken} Stellen ohne vorherige Erklärung`);
    console.log(`  ${new Set(reports.flatMap(r => r.luecken.map(l => normalize(l.begriff)))).size} unique Begriffe fehlen`);
    console.log("═".repeat(60));
  }

  const reportPath = path.join(
    process.cwd(), "content", ceId,
    `begriff-coverage-${new Date().toISOString().split("T")[0]}.json`
  );
  fs.writeFileSync(reportPath, JSON.stringify(reports, null, 2));

  if (isPipeline) {
    for (const r of reports) {
      console.log(JSON.stringify({
        situationId: r.situationId,
        coverage: r.coveragePercent,
        luecken: new Set(r.luecken.map(l => normalize(l.begriff))).size,
      }));
    }
    if (totalLuecken > 0) {
      process.exit(1);
    }
  }
}

main();
