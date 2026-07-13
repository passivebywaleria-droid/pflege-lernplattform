// Extrahiert alle Wissens-Tabs (inlineWissen) aus CE-06 → Review-Dokument (Markdown) für die Dozentin.
// Lauf: npx tsx scripts/extract-wissens-tabs.ts > content/ce-06/REVIEW-WISSENS-TABS.md
import { CE06_SITUATIONEN } from "../content/ce-06/situationen";

const esc = (s: unknown) => String(s ?? "").trim();

let out = "";
let tabCount = 0;
const kbCount: Record<string, number> = {};

out += `# CE-06 — Review-Dokument: alle Wissens-Tabs\n\n`;
out += `> Für die fachliche Durchsicht durch die Dozentin. Pro Tab: Titel · Kompetenzbereich (KB) · Bloom · `;
out += `Kernfakt-IDs · Quellen · dann der Lehrtext (Aufhänger → Kerntext → Faustregel → Spektrum → Karteikarte).\n`;
out += `> „passt" / Anmerkung bitte direkt an den Tab schreiben.\n\n`;

const situOrder = CE06_SITUATIONEN as Array<{
  situationId: string;
  titel: string;
  phasen: Array<{ phase?: string; kernSteps?: unknown[] }>;
}>;

for (const situ of situOrder) {
  const tabs: string[] = [];
  for (const phase of situ.phasen ?? []) {
    for (const step of (phase.kernSteps ?? []) as any[]) {
      if (step?.stepType !== "inlineWissen" || !step.inlineWissen) continue;
      tabCount++;
      const iw = step.inlineWissen;
      const kb = esc(step.kompetenzbereich);
      kbCount[kb] = (kbCount[kb] ?? 0) + 1;
      let t = `### ${esc(step.contentC1?.title) || esc(step.stepId)}\n`;
      t += `**KB ${kb} · Bloom ${esc(step.bloomLevel)} · Kernfakten ${(step.kernfaktId ?? []).join(", ")} · Phase „${esc(phase.phase)}"**\n`;
      t += `_Quellen: ${(step.quellen ?? []).map(esc).join(" · ")}_\n\n`;
      if (iw.storyAufhaenger) t += `**Aufhänger:** ${esc(iw.storyAufhaenger)}\n\n`;
      if (iw.kerntext) t += `**Kerntext:**\n\n${esc(iw.kerntext)}\n\n`;
      if (iw.faustregel) t += `**Faustregel:** ${esc(iw.faustregel)}\n\n`;
      if (Array.isArray(iw.spektrum) && iw.spektrum.length) {
        t += `**Spektrum:**\n\n`;
        for (const sp of iw.spektrum) {
          t += `- **${esc(sp.patientName)}** (${esc(sp.hauptfaktor)}): ${esc(sp.kurzbeschreibung)}\n`;
        }
        t += `\n`;
      }
      if (iw.karteikarte) {
        t += `**Karteikarte:** _${esc(iw.karteikarte.vorderseite)}_ → ${esc(iw.karteikarte.rueckseite)}\n\n`;
      }
      t += `---\n\n`;
      tabs.push(t);
    }
  }
  if (!tabs.length) continue;
  out += `## ${esc(situ.titel)}  \n`;
  out += `<sub>${esc(situ.situationId)} · ${tabs.length} Tab(s)</sub>\n\n`;
  out += tabs.join("");
}

const kbSummary = Object.entries(kbCount).sort().map(([k, v]) => `${k}: ${v}`).join(" · ");
const header = `> **${tabCount} Wissens-Tabs** über ${situOrder.length} Situationen · KB-Verteilung: ${kbSummary}\n\n`;
out = out.replace(/(> „passt".*?\n\n)/, `$1${header}`);

process.stdout.write(out);
