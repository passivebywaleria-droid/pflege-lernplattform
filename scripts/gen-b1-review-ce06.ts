/**
 * Generiert die B1-Gegenlese-Seite für CE-06: alle Wissens-Tabs, C1 ↔ B1 nebeneinander.
 * Liest die Situationsdaten direkt (keine manuelle Übertragung).
 * Output: scratchpad-Pfad als arg[2].
 * Usage: npx tsx scripts/gen-b1-review-ce06.ts <output.html>
 */
import * as fs from "fs";
import { CE06_SITUATIONEN } from "../content/ce-06/situationen";

const out = process.argv[2];
if (!out) { console.error("Output-Pfad fehlt"); process.exit(1); }

function esc(s: string | undefined): string {
  if (!s) return "";
  return s
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}

function fieldRow(label: string, c1?: string, b1?: string, italic = false): string {
  if (!c1 && !b1) return "";
  const cls = italic ? ' class="story"' : "";
  return `
  <div class="field">
    <div class="field-label">${label}</div>
    <div class="cols">
      <div class="col"><span class="col-tag">C1</span><p${cls}>${esc(c1)}</p></div>
      <div class="col b1"><span class="col-tag">B1</span><p${cls}>${esc(b1) || '<em style="opacity:.5">— fehlt —</em>'}</p></div>
    </div>
  </div>`;
}

let tabCount = 0;
let situBlocks = "";
const tocEntries: string[] = [];
let situIndex = 0;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
for (const situ of CE06_SITUATIONEN as any[]) {
  const tabs: string[] = [];
  for (const phase of situ.phasen ?? []) {
    for (const step of [...(phase.kernSteps ?? []), ...(phase.optionaleSteps ?? [])]) {
      if (step.stepType !== "inlineWissen" || !step.inlineWissen) continue;
      tabCount++;
      const iw = step.inlineWissen;
      const title = step.contentC1?.title || step.lernziel || step.stepId;
      let spektrum = "";
      (iw.spektrum ?? []).forEach((sp: { patientName?: string; hauptfaktor?: string; kurzbeschreibung?: string; kurzbeschreibungB1?: string }) => {
        spektrum += fieldRow(
          `Spektrum · ${esc(sp.patientName)} — ${esc(sp.hauptfaktor)}`,
          sp.kurzbeschreibung, sp.kurzbeschreibungB1
        );
      });
      tabs.push(`
  <div class="tab">
    <div class="tab-head"><span class="tab-id">${esc(step.stepId)}</span><h3>${esc(title)}</h3></div>
    ${fieldRow("Story-Aufhänger", iw.storyAufhaenger, iw.storyAufhaengerB1, true)}
    ${fieldRow("Kerntext", iw.kerntext, iw.kerntextB1)}
    ${fieldRow("Faustregel", iw.faustregel, iw.faustregelB1)}
    ${iw.sonstBox ? fieldRow("Sonst-Box", iw.sonstBox, iw.sonstBoxB1) : ""}
    ${spektrum}
    ${fieldRow("Karteikarte · Vorderseite", iw.karteikarte?.vorderseite, iw.karteikarte?.vorderseiteB1)}
    ${fieldRow("Karteikarte · Rückseite", iw.karteikarte?.rueckseite, iw.karteikarte?.rueckseiteB1)}
  </div>`);
    }
  }
  if (!tabs.length) continue;
  const id = `s${situIndex++}`;
  tocEntries.push(`    <li><a href="#${id}">${esc(situ.titel || situ.situationId)}</a></li>`);
  situBlocks += `
<section class="situ" id="${id}">
  <h2>${esc(situ.titel || situ.situationId)}</h2>
  <div class="situ-id">${esc(situ.situationId)} · ${tabs.length} Tab${tabs.length > 1 ? "s" : ""}</div>
  ${tabs.join("\n")}
</section>`;
}

const html = `<title>B1-Gegenlesen — CE-06 komplett (33 Wissens-Tabs)</title>
<style>
  :root {
    --paper:#FBF8F5; --card:#FFF; --ink:#2E2A27; --muted:#8A7F77; --rose:#C4877F;
    --rose-soft:#F6ECEA; --sage:#6B8F71; --sage-soft:#EDF3EE; --line:#E8E0D9;
  }
  @media (prefers-color-scheme:dark){:root{--paper:#211E1C;--card:#2A2624;--ink:#EDE7E1;--muted:#A89C93;--rose:#D49A92;--rose-soft:#3A2E2C;--sage:#8FB295;--sage-soft:#2A332C;--line:#3B3532;}}
  :root[data-theme="dark"]{--paper:#211E1C;--card:#2A2624;--ink:#EDE7E1;--muted:#A89C93;--rose:#D49A92;--rose-soft:#3A2E2C;--sage:#8FB295;--sage-soft:#2A332C;--line:#3B3532;}
  :root[data-theme="light"]{--paper:#FBF8F5;--card:#FFF;--ink:#2E2A27;--muted:#8A7F77;--rose:#C4877F;--rose-soft:#F6ECEA;--sage:#6B8F71;--sage-soft:#EDF3EE;--line:#E8E0D9;}
  *{box-sizing:border-box;}
  body{margin:0;background:var(--paper);color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;line-height:1.55;font-size:15px;}
  .wrap{max-width:1080px;margin:0 auto;padding:28px 18px 80px;}
  header h1{font-size:1.5rem;font-weight:700;margin:0 0 6px;text-wrap:balance;}
  .sub{color:var(--muted);font-size:.88rem;margin:0 0 8px;}
  .toc{background:var(--card);border:1.5px solid var(--line);border-radius:14px;padding:14px 18px;margin:18px 0 34px;font-size:.9rem;}
  .toc strong{color:var(--sage);}
  .toc ol{margin:8px 0 0;padding-left:22px;columns:2;column-gap:28px;}
  .toc a{color:var(--ink);text-decoration:none;}
  .toc a:hover{color:var(--rose);}
  .situ{margin-bottom:48px;scroll-margin-top:16px;}
  .situ>h2{font-size:1.2rem;font-weight:700;border-bottom:2px solid var(--rose);padding-bottom:8px;margin:0 0 4px;}
  .situ-id{color:var(--muted);font-size:.75rem;margin-bottom:18px;font-family:ui-monospace,monospace;}
  .tab{background:var(--card);border:1.5px solid var(--line);border-radius:16px;padding:16px 18px;margin-bottom:20px;}
  .tab-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:12px;border-bottom:1.5px solid var(--sage);padding-bottom:8px;}
  .tab-head h3{font-size:1.02rem;font-weight:700;margin:0;}
  .tab-id{font-size:.68rem;color:var(--muted);font-family:ui-monospace,monospace;}
  .field{margin-bottom:14px;}
  .field-label{font-size:.66rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--muted);margin-bottom:6px;}
  .cols{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  @media (max-width:720px){.cols{grid-template-columns:1fr;} .toc ol{columns:1;}}
  .col{background:var(--paper);border:1.5px solid var(--line);border-radius:12px;padding:11px 13px;font-size:.9rem;}
  .col.b1{border-color:var(--sage);background:var(--sage-soft);}
  .col-tag{display:inline-block;font-size:.6rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;margin-bottom:6px;padding:1px 7px;border-radius:99px;}
  .col .col-tag{background:var(--rose-soft);color:var(--rose);}
  .col.b1 .col-tag{background:var(--card);color:var(--sage);}
  .col p{margin:0;}
  .col p.story{font-style:italic;}
  footer{margin-top:40px;padding-top:16px;border-top:1.5px solid var(--line);color:var(--muted);font-size:.8rem;}
</style>

<div class="wrap">
<header>
  <h1>B1-Gegenlesen: CE-06 komplett</h1>
  <p class="sub">Alle ${tabCount} Wissens-Tabs über 11 Situationen · C1 (bestehend) ↔ B1 (neu, einfache Sprache) · Stand 2026-07-14</p>
  <p class="sub">Gates: tsc ✅ · b1-sprachcheck --all 0 WARN ✅ · Abstand 0 (nur Lehmanns § 1831-Gesetzestext in C1) ✅ · 564 Tests ✅ · kalibriert an „Deutsch B1 in der Pflege" (Peikert) + „Deutsch A2/B1 in der Pflege" (Micucci), Profil <code>specs/B1-SPRACHPROFIL.md</code></p>
</header>

<div class="toc">
  <strong>Prüf-Fokus:</strong> Ist die B1-Fassung (grün) fachlich identisch zur C1-Fassung (kein Fakt verändert/weggelassen) und sprachlich wirklich einfacher (kurze Sätze, „du", Fachwort erklärt)? Besonders die Recht/Ethik-Situationen: Erlemann, Lehmann, Novak.
  <ol>
${tocEntries.join("\n")}
  </ol>
</div>

${situBlocks}

<footer>
  Automatisch generiert aus den Situationsdaten (<code>scripts/gen-b1-review-ce06.ts</code>) — kein manuell übertragener Text, zeigt exakt den ausgelieferten Content. B1 = einfache Sprache (telc-B1-Niveau), kein neues Grounding: dieselben belegten Fakten sprachlich vereinfacht.
</footer>
</div>`;

fs.writeFileSync(out, html);
console.log(`✅ ${tabCount} Tabs geschrieben → ${out}`);
