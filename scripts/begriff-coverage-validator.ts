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

function validateSituation(ceId: string, situationId: string): SituationReport {
  const dir = path.join(process.cwd(), "content", ceId, "situationen", situationId);

  // Sammle alle Steps in Reihenfolge über alle Phasen
  const phasenOrder = [
    "phase-informieren", "phase-beobachten", "phase-planen",
    "phase-durchfuehren", "phase-evaluieren", "phase-dokumentieren",
  ];

  // Set: Begriffe die bereits erklärt wurden
  const erklaert = new Set<string>();
  // Alle unique Begriffe
  const alleBegriffe = new Set<string>();
  const luecken: BegriffLuecke[] = [];

  // Auch inline-wissen.ts lesen falls vorhanden
  const iwFile = path.join(dir, "inline-wissen.ts");
  if (fs.existsSync(iwFile)) {
    const iwContent = fs.readFileSync(iwFile, "utf-8");
    // Alle glossarBegriffe aus inline-wissen.ts → als "erklärt" markieren
    const matches = iwContent.match(/glossarBegriffe:\s*\[(.*?)\]/g) || [];
    for (const m of matches) {
      const begriffe = m.match(/"([^"]+)"/g) || [];
      for (const b of begriffe) {
        erklaert.add(b.replace(/"/g, "").toLowerCase());
      }
    }
    // Auch kerntext-Begriffe die in ** ** stehen als "erklärt" zählen
    const fettBegriffe = iwContent.match(/\*\*([^*]+)\*\*/g) || [];
    for (const fb of fettBegriffe) {
      const clean = fb.replace(/\*\*/g, "").trim().toLowerCase();
      if (clean.length > 2 && clean.length < 50) {
        erklaert.add(clean);
      }
    }
  }

  for (const phaseFile of phasenOrder) {
    const filePath = path.join(dir, `${phaseFile}.ts`);
    if (!fs.existsSync(filePath)) continue;

    const content = fs.readFileSync(filePath, "utf-8");
    const phaseName = phaseFile.replace("phase-", "");

    // Regex: finde alle Steps mit stepId, stepType, glossarBegriffe
    // Wir parsen blockweise: jeder Step beginnt mit stepId
    const stepBlocks = content.split(/\{\s*stepId:/);

    for (const block of stepBlocks) {
      if (!block.includes("stepType:")) continue;

      const stepIdMatch = block.match(/^\s*"([^"]+)"/);
      const stepTypeMatch = block.match(/stepType:\s*"([^"]+)"/);
      if (!stepIdMatch || !stepTypeMatch) continue;

      const stepId = stepIdMatch[1];
      const stepType = stepTypeMatch[1];

      // Alle glossarBegriffe in diesem Step
      const glossarMatches = block.match(/glossarBegriffe:\s*\[(.*?)\]/g) || [];
      const begriffe: string[] = [];
      for (const gm of glossarMatches) {
        const items = gm.match(/"([^"]+)"/g) || [];
        for (const item of items) {
          begriffe.push(item.replace(/"/g, ""));
        }
      }

      if (stepType === "inlineWissen" || stepType === "text") {
        // Erklär-Steps: Begriffe werden als "erklärt" markiert
        for (const b of begriffe) {
          erklaert.add(b.toLowerCase());
        }
        // Auch Fett-markierte Begriffe im body/kerntext als erklärt zählen
        const fettInBlock = block.match(/\*\*([^*]+)\*\*/g) || [];
        for (const fb of fettInBlock) {
          const clean = fb.replace(/\*\*/g, "").trim().toLowerCase();
          if (clean.length > 2 && clean.length < 50) {
            erklaert.add(clean);
          }
        }
      } else {
        // Anwendungs-Step: prüfe ob Begriffe vorher erklärt
        for (const b of begriffe) {
          alleBegriffe.add(b.toLowerCase());
          if (!erklaert.has(b.toLowerCase())) {
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
  const erklaerteCount = totalBegriffe - new Set(luecken.map(l => l.begriff.toLowerCase())).size;
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
      const uniqueLuecken = new Set(report.luecken.map(l => l.begriff)).size;
      console.log(
        `${icon} ${report.situationId.padEnd(30)} ` +
        `${report.coveragePercent}% Coverage ` +
        `(${uniqueLuecken} Begriffe fehlen, ${report.luecken.length} Stellen)`
      );

      if (report.luecken.length > 0 && report.luecken.length <= 20) {
        // Gruppiere nach Begriff
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

  // Summary
  if (!isPipeline) {
    console.log("\n" + "═".repeat(60));
    const avgCoverage = reports.length > 0
      ? Math.round(reports.reduce((s, r) => s + r.coveragePercent, 0) / reports.length)
      : 0;
    console.log(`  ${ceId.toUpperCase()} — ∅ ${avgCoverage}% Begriff-Coverage`);
    console.log(`  ${totalLuecken} Stellen ohne vorherige Erklärung`);
    console.log(`  ${new Set(reports.flatMap(r => r.luecken.map(l => l.begriff.toLowerCase()))).size} unique Begriffe fehlen`);
    console.log("═".repeat(60));
  }

  // JSON-Report schreiben
  const reportPath = path.join(
    process.cwd(), "content", ceId,
    `begriff-coverage-${new Date().toISOString().split("T")[0]}.json`
  );
  fs.writeFileSync(reportPath, JSON.stringify(reports, null, 2));

  // Pipeline-Modus: exit 1 bei Lücken
  if (isPipeline) {
    for (const r of reports) {
      console.log(JSON.stringify({
        situationId: r.situationId,
        coverage: r.coveragePercent,
        luecken: new Set(r.luecken.map(l => l.begriff)).size,
      }));
    }
    if (totalLuecken > 0) {
      process.exit(1);
    }
  }
}

main();
