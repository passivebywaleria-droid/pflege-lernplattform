#!/usr/bin/env npx tsx
/**
 * Curriculum-Coverage-Audit
 *
 * Misst pro CE: Welche Themen werden in welcher Situation behandelt?
 * Klassifiziert: zentral (Inline-Wissen-Baustein) / angewandt (Keywords im Text) / fehlt.
 *
 * Output: Markdown-Tabelle als Heatmap.
 *
 * Usage:
 *   npx tsx scripts/curriculum-coverage-audit.ts ce-02
 */

import * as fs from "fs";
import * as path from "path";

// Themen-Keywords-Mapping pro CE-Thema.
// Manuell kuratiert — pflegerische Kernbegriffe pro Thema.
// Wenn weitere CEs Situationen bekommen, hier ergänzen.
const CE04_KEYWORDS: Record<string, string[]> = {
  "betriebliche-gesundheitsfoerderung": [
    "betriebliche gesundheit", "bgf", "rückenschule", "gesundheitstag",
    "gefährdungsbeurteilung", "ergonomie",
  ],
  "eigengesundheit": [
    "selbstfürsorge", "selbstpflege", "self-care", "burnout-prävention",
    "kraftquellen", "psychohygiene",
  ],
  "gesundheitsfoerderung-aeltere": [
    "gesundheitsförderung alt", "geriatrische prävention", "alters-fitness",
    "sturzprävention senioren",
  ],
  "gesundheitsfoerderung-kinder": [
    "kindergesundheit", "u-untersuchung", "vorsorge kind", "kindergartenscreening",
    "schuleingangsuntersuchung",
  ],
  "gesundheitsfoerderung-patienten": [
    "patientenedukation", "compliance", "adhärenz", "lebensstil",
    "verhaltensänderung", "motivierende gesprächsführung",
  ],
  "gesundheitsmodelle": [
    "gesundheitsmodell", "salutogenese", "antonovsky", "kohärenzgefühl",
    "biopsychosozial", "icf",
  ],
  "gesundheitsprojekt": [
    "gesundheitsprojekt", "präventionsprojekt", "ottawa-charta",
    "settings-ansatz",
  ],
  "impfungen-infektionsschutz": [
    "impfung", "stiko", "impfberatung", "masern", "tetanus", "infektionsschutz",
    "hygiene",
  ],
  "patientenberatung": [
    "patientenberatung", "beratungsgespräch", "edukation", "wissensstand",
    "informationsbedarf", "beratungsschritte",
  ],
};

const THEMA_KEYWORDS: Record<string, string[]> = {
  "sturz-prophylaxe": [
    "sturz", "stürz", "tinetti", "stratify", "schellong", "bettgitter",
    "balance", "gangunsicher", "mobilitätshilfe",
  ],
  "dekubitus-prophylaxe": [
    "dekubitus", "braden", "norton", "npuap", "epuap",
    "scherkraft", "30°-lagerung", "30 grad lagerung", "wechseldruck",
    "druckgeschwür", "druckulkus",
  ],
  "thrombose-prophylaxe": [
    "thrombose", "antithrombosestrümpfe", "ats-strümpfe", "kompressions",
    "heparin", "low-dose", "wells-score", "tvt", "thromboembolie",
    "lungenembolie",
  ],
  "pneumonie-prophylaxe": [
    "pneumonie", "atemübung", "lippenbremse", "atemtraining", "incentive spirometer",
    "atemgymnastik", "sekretmobilisation", "atelektase", "mobilisation prophylaxe",
  ],
  "kontraktur-prophylaxe": [
    "kontraktur", "passiv beweg", "passive bewegung", "spitzfuß",
    "fußbrett", "lagerungsschiene", "rom-übung", "range of motion",
  ],
  "haut": [
    "hautpflege", "hautinspektion", "intertrigo", "hautareal",
    "hauthygiene", "haut beobachten", "hautzustand", "hautkrise",
    "wundliegen",
  ],
  "harnausscheidung": [
    "miktion", "harnausscheidung", "urinausscheidung", "inkontinenz",
    "urin", "blase", "miktionsprotokoll", "trinkprotokoll",
    "harninkontinenz",
  ],
  "stuhlausscheidung": [
    "stuhl", "obstipation", "diarrhö", "diarrho", "stoma",
    "kolostomie", "ileostomie", "defäkation", "defaekation", "darm",
  ],
  "blasenkatheter": [
    "blasenkatheter", "dauerkatheter", "katheter", "transurethral",
    "suprapubisch", "katheterpflege", "katheterbeutel",
  ],
  "ernaehrungsgrundlagen": [
    "ernährungsgrundlage", "dge", "energiebedarf", "kalorienbedarf",
    "makronährstoff", "mikronährstoff", "vitamin", "mineralstoff",
    "ernährungspyramide", "10 regeln dge",
  ],
  "ernaehrungsassessment": [
    "nrs-2002", "must-screen", "mna", "glim", "mangelernährung",
    "ernährungsassessment", "albumin", "präalbumin", "bmi-screening",
  ],
  "enterale-ernaehrung": [
    "peg", "perkutan endoskopisch", "sonde", "magensonde",
    "enterale ernährung", "trinknahrung", "fresubin", "iddsi",
    "andicken",
  ],
  "essen-anreichen": [
    "essen anreichen", "anreichen", "fingerfood", "schluckstörung",
    "dysphagie", "guss", "schluckcheck", "iddsi-stufe",
    "aspiration",
  ],
  "mobilisation": [
    "mobilisation", "mobilisieren", "transfer", "aufstehen",
    "frühmobilisation", "gehübung", "rollator", "bobath",
    "fast-track",
  ],
  "positionierung": [
    "positionierung", "lagerung", "30°", "135°", "90°-lagerung",
    "mikrolagerung", "sims-lagerung", "rückenlage", "seitenlage",
    "halbsitzend",
  ],
  "kinaesthetik": [
    "kinästhetik", "kinaesthetik", "hatch", "maietta", "patient bewegt selbst",
    "begleiten", "kinästhetische", "spiraldynamik",
  ],
  "ganzkörperpflege": [
    "ganzkörperpflege", "ganzkörperwaschung", "körperpflege", "morgenpflege",
    "abendpflege", "waschritual", "beruhigende waschung",
  ],
  "mundpflege": [
    "mundpflege", "mundhygiene", "mundschwämmchen", "zahnpflege",
    "soor", "stomatitis", "mundsoor", "mundinspektion",
  ],
  "schlaf": [
    "schlaf", "schlafhygiene", "schlafstörung", "einschlafhilfe",
    "schlafrhythmus", "tag-nacht-rhythmus", "schlafritual", "insomnie",
  ],
  "basale-stimulation": [
    "basale stimulation", "bienstein", "fröhlich", "somatisch",
    "vestibulär", "vibratorisch", "basale", "körperschema",
  ],
  "saeuglingspflege": [
    "säugling", "saeugling", "neugeboren", "u-heft", "vorsorge",
    "stillen", "babypflege", "wickeln", "windel",
  ],
  "pflegeprozess": [
    "pflegeprozess", "informieren", "beobachten", "planen",
    "evaluieren", "fiechter", "meier", "6-phasen-modell", "wpr",
  ],
  "pflegeplanung": [
    "pflegeplan", "pflegeplanung", "smart-ziel", "pflegeziel",
    "pflegemaßnahme", "pflegediagnose", "pesr", "pflegehandlung",
  ],
  "pflegedokumentation": [
    "pflegedokumentation", "pflegebericht", "sbar", "dokumentation",
    "pflegevisite", "übergabebogen", "pflegeauftrag", "verlaufsbericht",
  ],
  "assessments-expertenstandards": [
    "expertenstandard", "dnqp", "assessment", "leitlinie",
    "evidenzbasiert", "qualitätssicherung",
  ],
};

interface ThemaCoverage {
  thema: string;
  situationen: {
    [situationsId: string]: {
      keywordHits: number;
      hasInlineWissen: boolean;
      classification: "zentral" | "angewandt" | "fehlt";
    };
  };
  insgesamt: {
    zentralCount: number;
    angewandtCount: number;
    fehltCount: number;
    status: "OK" | "LÜCKE";
  };
}

function audit(ceId: string): ThemaCoverage[] {
  const ceDir = path.join(process.cwd(), "content", ceId);
  const themenDir = path.join(ceDir, "themen");
  const situationenDir = path.join(ceDir, "situationen");

  if (!fs.existsSync(themenDir) || !fs.existsSync(situationenDir)) {
    console.error(`CE-Verzeichnis fehlt: ${themenDir} oder ${situationenDir}`);
    process.exit(1);
  }

  // Wähle Keyword-Mapping je nach CE
  const keywordMapping: Record<string, string[]> =
    ceId === "ce-04" ? CE04_KEYWORDS : THEMA_KEYWORDS;

  const themen = fs
    .readdirSync(themenDir)
    .filter((d) => fs.statSync(path.join(themenDir, d)).isDirectory());

  const situationen = fs
    .readdirSync(situationenDir)
    .filter((d) => fs.statSync(path.join(situationenDir, d)).isDirectory());

  const result: ThemaCoverage[] = [];

  for (const thema of themen) {
    const keywords = keywordMapping[thema];
    if (!keywords) {
      console.warn(`⚠️  Keine Keywords für Thema: ${thema} — überspringe`);
      continue;
    }

    const cov: ThemaCoverage = {
      thema,
      situationen: {},
      insgesamt: {
        zentralCount: 0,
        angewandtCount: 0,
        fehltCount: 0,
        status: "OK",
      },
    };

    for (const sit of situationen) {
      const sitDir = path.join(situationenDir, sit);
      const phaseFiles = fs
        .readdirSync(sitDir)
        .filter((f) => f.startsWith("phase-") && f.endsWith(".ts"));

      let totalText = "";
      for (const f of phaseFiles) {
        totalText += fs.readFileSync(path.join(sitDir, f), "utf-8") + "\n";
      }
      const lower = totalText.toLowerCase();

      let keywordHits = 0;
      for (const kw of keywords) {
        const matches = lower.match(new RegExp(kw.toLowerCase(), "g"));
        if (matches) keywordHits += matches.length;
      }

      // Inline-Wissens-Baustein für dieses Thema?
      const hasInlineWissen =
        new RegExp(`bausteinRef:\\s*"${thema}-`, "i").test(totalText) ||
        new RegExp(`bausteinRef:\\s*"${thema.replace(/-/g, "_")}-`, "i").test(totalText);

      let classification: "zentral" | "angewandt" | "fehlt";
      if (hasInlineWissen) {
        classification = "zentral";
        cov.insgesamt.zentralCount++;
      } else if (keywordHits >= 3) {
        classification = "angewandt";
        cov.insgesamt.angewandtCount++;
      } else {
        classification = "fehlt";
        cov.insgesamt.fehltCount++;
      }

      cov.situationen[sit] = {
        keywordHits,
        hasInlineWissen,
        classification,
      };
    }

    // Lücke wenn keine zentrale Abdeckung in irgendeiner Situation
    if (cov.insgesamt.zentralCount === 0 && cov.insgesamt.angewandtCount === 0) {
      cov.insgesamt.status = "LÜCKE";
    } else if (cov.insgesamt.zentralCount === 0) {
      cov.insgesamt.status = "LÜCKE"; // nur angewandt, nirgends zentral gelehrt
    }

    result.push(cov);
  }

  return result;
}

function renderMarkdown(ceId: string, coverage: ThemaCoverage[]): string {
  const situationen = Object.keys(coverage[0]?.situationen ?? {});
  let md = `# Curriculum-Coverage-Audit ${ceId.toUpperCase()}\n\n`;
  md += `**Datum:** ${new Date().toISOString().split("T")[0]}\n`;
  md += `**Themen:** ${coverage.length} · **Situationen:** ${situationen.length}\n\n`;

  // Heatmap-Tabelle
  md += `## Heatmap (✅ = zentral / 🟡 = angewandt / ❌ = fehlt)\n\n`;
  md += `| Thema | ` + situationen.map((s) => s.replace("ls-", "").replace("frau-m-", "frau-m·")).join(" | ") + ` | Status |\n`;
  md += `|---|` + situationen.map(() => "---").join("|") + `|---|\n`;

  for (const cov of coverage) {
    const cells = situationen.map((s) => {
      const x = cov.situationen[s];
      if (!x) return "❌";
      if (x.classification === "zentral") return "✅";
      if (x.classification === "angewandt") return "🟡";
      return "❌";
    });
    const statusBadge =
      cov.insgesamt.status === "OK"
        ? "✅ OK"
        : cov.insgesamt.zentralCount > 0
          ? "🟡 Lücke"
          : "❌ FEHLT";
    md += `| ${cov.thema} | ${cells.join(" | ")} | ${statusBadge} |\n`;
  }

  // Zusammenfassung
  const luecken = coverage.filter((c) => c.insgesamt.status === "LÜCKE");
  const total_fehlt = luecken.filter((c) => c.insgesamt.zentralCount === 0 && c.insgesamt.angewandtCount === 0);
  const nur_angewandt = luecken.filter((c) => c.insgesamt.zentralCount === 0 && c.insgesamt.angewandtCount > 0);
  const ok = coverage.filter((c) => c.insgesamt.status === "OK");

  md += `\n## Zusammenfassung\n\n`;
  md += `- **${ok.length}** Themen mit zentraler Abdeckung (Inline-Wissens-Baustein in mind. 1 Situation)\n`;
  md += `- **${nur_angewandt.length}** Themen nur angewandt — Skill-Themen, taucht überall auf, nirgends gelehrt\n`;
  md += `- **${total_fehlt.length}** Themen komplett fehlend — keine Erwähnung in Situationen\n\n`;

  if (total_fehlt.length > 0) {
    md += `### 🚨 Komplett fehlende Themen\n\n`;
    for (const c of total_fehlt) {
      md += `- **${c.thema}** — kein Keyword-Treffer in keiner Situation. Maßnahme: neue Situation oder zusätzlicher Inline-Baustein in passender Situation.\n`;
    }
    md += `\n`;
  }

  if (nur_angewandt.length > 0) {
    md += `### 🟡 Nur angewandt, nirgends als Inline-Baustein gelehrt\n\n`;
    for (const c of nur_angewandt) {
      const top = Object.entries(c.situationen)
        .filter(([_, v]) => v.classification === "angewandt")
        .sort((a, b) => b[1].keywordHits - a[1].keywordHits)[0];
      md += `- **${c.thema}** (${c.insgesamt.angewandtCount} Situationen wenden an, am meisten in **${top?.[0]}** mit ${top?.[1].keywordHits} Keyword-Treffern). Maßnahme: Inline-Baustein in der passendsten Situation einbauen.\n`;
    }
    md += `\n`;
  }

  md += `### ✅ Zentral abgedeckte Themen\n\n`;
  for (const c of ok) {
    const sits = Object.entries(c.situationen)
      .filter(([_, v]) => v.classification === "zentral")
      .map(([sit]) => sit);
    md += `- **${c.thema}** — zentral in: ${sits.join(", ")}\n`;
  }

  return md;
}

function main() {
  const ceId = process.argv[2] ?? "ce-02";
  const isPipelineMode = process.argv.includes("--pipeline");
  const coverage = audit(ceId);
  const md = renderMarkdown(ceId, coverage);
  const outPath = path.join(
    process.cwd(),
    "content",
    ceId,
    `curriculum-coverage-${new Date().toISOString().split("T")[0]}.md`
  );
  fs.writeFileSync(outPath, md);

  if (!isPipelineMode) {
    console.log(md);
  }
  console.log(`\n✅ Report geschrieben nach: ${outPath}`);

  // Pipeline-Modus: exit 1 wenn Lücken vorhanden (K.O.-Kriterium)
  if (isPipelineMode) {
    const luecken = coverage.filter(
      (c) => c.insgesamt.zentralCount === 0
    );
    if (luecken.length > 0) {
      console.error(
        `\n❌ CURRICULUM-GATE FAIL: ${luecken.length}/${coverage.length} Themen ohne zentrale Abdeckung`
      );
      for (const l of luecken) {
        const top = Object.entries(l.situationen)
          .filter(([, v]) => v.classification === "angewandt")
          .sort((a, b) => b[1].keywordHits - a[1].keywordHits)[0];
        console.error(
          `   ${l.thema} → Empfehlung: Inline-Baustein in ${top?.[0] ?? "neue Situation"}`
        );
      }
      process.exit(1);
    }
    console.log(
      `\n✅ CURRICULUM-GATE PASS: ${coverage.length}/${coverage.length} Themen zentral abgedeckt`
    );
  }
}

main();
