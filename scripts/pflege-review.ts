#!/usr/bin/env npx tsx
/**
 * Pflege-Review-Skript — listet alle Situationen, die einen Pflege-Review brauchen.
 *
 * Findet Situationen ohne `pflege-review.md` (oder mit veralteter Review).
 *
 * Den Validator-Agent musst du selbst per Claude Code dispatchen — mit folgendem Prompt:
 *
 *   "Run pflege-validator agent on situation {ce}/{situationId}"
 *
 * Das Skript zeigt nur den Status, ändert nichts.
 *
 * Usage:
 *   npx tsx scripts/pflege-review.ts             # alle CEs
 *   npx tsx scripts/pflege-review.ts ce-02       # nur CE-02
 *   npx tsx scripts/pflege-review.ts --json      # JSON-Output für CI
 */

import * as fs from "fs";
import * as path from "path";

interface SituationStatus {
  ceId: string;
  situationId: string;
  hasReview: boolean;
  reviewMtime?: number;
  contentMtime: number;
  reviewStale: boolean;
  reviewVerdict?: "PASS" | "FAIL" | "UNKNOWN";
  highCount?: number;
  mediumCount?: number;
  lowCount?: number;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

function findSituationen(ceFilter?: string): SituationStatus[] {
  const results: SituationStatus[] = [];
  const ceDirs = fs.readdirSync(CONTENT_DIR).filter((d) =>
    d.startsWith("ce-")
  );

  for (const ceId of ceDirs) {
    if (ceFilter && ceId !== ceFilter) continue;
    const sitDir = path.join(CONTENT_DIR, ceId, "situationen");
    if (!fs.existsSync(sitDir)) continue;

    const sits = fs.readdirSync(sitDir).filter((s) => {
      const full = path.join(sitDir, s);
      return fs.statSync(full).isDirectory();
    });

    for (const situationId of sits) {
      const sitPath = path.join(sitDir, situationId);
      const reviewPath = path.join(sitPath, "pflege-review.md");
      const phaseFiles = fs
        .readdirSync(sitPath)
        .filter((f) => f.startsWith("phase-") && f.endsWith(".ts"))
        .map((f) => path.join(sitPath, f));

      if (phaseFiles.length === 0) continue;

      const contentMtime = Math.max(
        ...phaseFiles.map((f) => fs.statSync(f).mtimeMs)
      );

      let hasReview = false;
      let reviewMtime: number | undefined;
      let reviewVerdict: SituationStatus["reviewVerdict"] = "UNKNOWN";
      let highCount, mediumCount, lowCount;

      if (fs.existsSync(reviewPath)) {
        hasReview = true;
        reviewMtime = fs.statSync(reviewPath).mtimeMs;
        const reviewContent = fs.readFileSync(reviewPath, "utf-8");
        if (/K\.O\.-Verdikt[^\n]*FAIL/i.test(reviewContent))
          reviewVerdict = "FAIL";
        else if (/K\.O\.-Verdikt[^\n]*PASS/i.test(reviewContent))
          reviewVerdict = "PASS";
        highCount = (reviewContent.match(/HOCH/g) ?? []).length;
        mediumCount = (reviewContent.match(/MITTEL/g) ?? []).length;
        lowCount = (reviewContent.match(/NIEDRIG/g) ?? []).length;
      }

      const reviewStale =
        hasReview && reviewMtime !== undefined && contentMtime > reviewMtime;

      results.push({
        ceId,
        situationId,
        hasReview,
        reviewMtime,
        contentMtime,
        reviewStale,
        reviewVerdict,
        highCount,
        mediumCount,
        lowCount,
      });
    }
  }

  return results;
}

function fmtMtime(ms?: number): string {
  if (!ms) return "—";
  const d = new Date(ms);
  return d.toISOString().slice(0, 16).replace("T", " ");
}

function main() {
  const args = process.argv.slice(2);
  const isJson = args.includes("--json");
  const ceFilter = args.find((a) => a.startsWith("ce-"));

  const results = findSituationen(ceFilter);

  if (isJson) {
    console.log(JSON.stringify(results, null, 2));
    return;
  }

  console.log(
    `\n${"═".repeat(80)}\n  Pflege-Review-Status${ceFilter ? ` für ${ceFilter}` : ""}\n${"═".repeat(80)}\n`
  );

  const needsReview = results.filter((r) => !r.hasReview);
  const stale = results.filter((r) => r.reviewStale);
  const fails = results.filter((r) => r.reviewVerdict === "FAIL");
  const passes = results.filter((r) => r.reviewVerdict === "PASS");

  console.log(`Total Situationen: ${results.length}`);
  console.log(`  ⚠️  Brauchen Review: ${needsReview.length}`);
  console.log(`  🔄 Review veraltet (Content geändert): ${stale.length}`);
  console.log(`  ❌ FAIL (HOCH-Findings ungelöst): ${fails.length}`);
  console.log(`  ✅ PASS: ${passes.length}\n`);

  console.log(
    `${"CE".padEnd(7)} ${"Situation".padEnd(28)} ${"Review".padEnd(8)} ${"Verdikt".padEnd(9)} H/M/N    ${"Content".padEnd(17)} ${"Review".padEnd(17)}`
  );
  console.log("─".repeat(96));

  for (const r of results) {
    const statusIcon = !r.hasReview
      ? "⚠️ "
      : r.reviewStale
        ? "🔄"
        : r.reviewVerdict === "FAIL"
          ? "❌"
          : r.reviewVerdict === "PASS"
            ? "✅"
            : "❓";
    const counts =
      r.hasReview &&
      r.highCount !== undefined &&
      r.mediumCount !== undefined &&
      r.lowCount !== undefined
        ? `${r.highCount}/${r.mediumCount}/${r.lowCount}`
        : "—";

    console.log(
      `${r.ceId.padEnd(7)} ${r.situationId.padEnd(28)} ${statusIcon.padEnd(8)} ${(r.reviewVerdict ?? "—").padEnd(9)} ${counts.padEnd(8)} ${fmtMtime(r.contentMtime).padEnd(17)} ${fmtMtime(r.reviewMtime).padEnd(17)}`
    );
  }

  console.log(`\n${"═".repeat(80)}`);
  if (needsReview.length > 0 || stale.length > 0) {
    console.log("\nNächster Schritt:");
    console.log(
      `  Dispatche pflege-validator-Agent für die ${needsReview.length + stale.length} Situation(en) ohne aktuellen Review.`
    );
    console.log(
      `  Per Claude Code: 'Run pflege-validator on {ce}/{situationId}'\n`
    );
  } else {
    console.log("\n✅ Alle Situationen haben aktuellen Pflege-Review.\n");
  }
}

main();
