#!/usr/bin/env npx tsx
/**
 * choose-images.ts
 *
 * HTML-Auswahl-Tool für Bild-Varianten.
 *
 * Generiert eine HTML-Seite wo alle Varianten nebeneinander angezeigt werden.
 * Nach User-Auswahl: gewählte Variante wird als "final.png" in public/images/content/...
 * kopiert, Rest gelöscht, imageSlot in TypeScript-Datei aktualisiert.
 *
 * Usage:
 *   npx tsx scripts/choose-images.ts --ce ce-02 --situation sturz-prophylaxe
 *   npx tsx scripts/choose-images.ts --ce ce-02 --thema sturz-prophylaxe
 *
 *   1. Script öffnet lokalen Server auf http://localhost:4321
 *   2. Im Browser: Für jeden Slot beste Variante anklicken
 *   3. Nach letzter Auswahl: Script speichert + beendet
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, renameSync, rmSync, mkdirSync } from "fs";
import { join, resolve, dirname, basename } from "path";
import { createServer } from "http";
import { scanImageSlots } from "./generate-images.js";

interface CandidateGroup {
  slotId: string;
  stepId: string;
  prompt: string;
  candidatesDir: string;
  variants: string[]; // Pfade zu v1.png, v2.png, ...
  finalPath: string; // Ziel-Pfad nach Auswahl
  sourceFile: string; // .ts Datei mit imageSlot
}

// ─── Main ────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  const ceIdx = args.indexOf("--ce");
  const sitIdx = args.indexOf("--situation");
  const themaIdx = args.indexOf("--thema");

  if (ceIdx === -1 || (sitIdx === -1 && themaIdx === -1)) {
    console.error(
      "Usage: npx tsx scripts/choose-images.ts --ce ce-02 --situation <id>",
    );
    process.exit(1);
  }

  const ceId = args[ceIdx + 1];
  const targetId = sitIdx !== -1 ? args[sitIdx + 1] : args[themaIdx + 1];
  const targetType = sitIdx !== -1 ? "situationen" : "themen";

  const targetPath = resolve(process.cwd(), "content", ceId, targetType, targetId);
  if (!existsSync(targetPath)) {
    console.error(`Pfad nicht gefunden: ${targetPath}`);
    process.exit(1);
  }

  const slots = scanImageSlots(targetPath);
  const candidatesBase = resolve(
    process.cwd(),
    "public",
    "images",
    "content",
    ceId,
    "_candidates",
  );

  // Gruppiere Candidates pro Slot
  const groups: CandidateGroup[] = [];
  for (const slot of slots) {
    const slotDir = join(candidatesBase, slot.id);
    if (!existsSync(slotDir)) continue;
    const variants = readdirSync(slotDir)
      .filter((f) => f.endsWith(".png"))
      .sort()
      .map((f) => join(slotDir, f));

    if (variants.length > 0) {
      const finalDir = resolve(
        process.cwd(),
        "public",
        "images",
        "content",
        ceId,
        targetId,
      );
      groups.push({
        slotId: slot.id,
        stepId: slot.stepId,
        prompt: slot.prompt,
        candidatesDir: slotDir,
        variants,
        finalPath: join(finalDir, `${slot.id}.png`),
        sourceFile: slot.sourceFile,
      });
    }
  }

  if (groups.length === 0) {
    console.log("Keine Candidate-Bilder gefunden. Lauf erst generate-images.ts.");
    return;
  }

  console.log(`\n=== Bild-Auswahl: ${ceId}/${targetId} ===`);
  console.log(`Slots mit Varianten: ${groups.length}`);
  console.log(`Öffne Browser: http://localhost:4321\n`);

  // HTML generieren
  const html = renderHtml(groups);
  const tmpHtml = resolve(process.cwd(), ".tmp-image-chooser.html");
  writeFileSync(tmpHtml, html);

  // Mini HTTP-Server für Bild-Zugriff + Auswahl-Empfang
  const selections: Record<string, number> = {};
  let resolveFinish: () => void;
  const finished = new Promise<void>((r) => {
    resolveFinish = r;
  });

  const server = createServer((req, res) => {
    const url = new URL(req.url || "/", `http://localhost:4321`);

    if (url.pathname === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(html);
      return;
    }

    // Bild servieren
    if (url.pathname.startsWith("/img/")) {
      const imgPath = decodeURIComponent(url.pathname.slice("/img/".length));
      if (existsSync(imgPath)) {
        const data = readFileSync(imgPath);
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(data);
        return;
      }
      res.writeHead(404);
      res.end("not found");
      return;
    }

    // Auswahl empfangen
    if (url.pathname === "/select" && req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        try {
          const { slotId, variantIndex } = JSON.parse(body);
          selections[slotId] = variantIndex;
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: true }));
        } catch {
          res.writeHead(400);
          res.end("bad request");
        }
      });
      return;
    }

    // Finish-Button
    if (url.pathname === "/finish" && req.method === "POST") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: true }));
      resolveFinish();
      return;
    }

    res.writeHead(404);
    res.end("not found");
  });

  server.listen(4321, () => {
    console.log("Server läuft. Bitte im Browser auswählen.");
  });

  // Auto-open Browser (macOS)
  try {
    const { spawn } = require("child_process");
    spawn("open", ["http://localhost:4321"]);
  } catch {
    // manuell öffnen
  }

  finished.then(() => {
    console.log("\nFertig. Verarbeite Auswahl...");
    server.close();

    for (const [slotId, variantIdx] of Object.entries(selections)) {
      const group = groups.find((g) => g.slotId === slotId);
      if (!group) continue;

      const chosen = group.variants[variantIdx];
      if (!chosen || !existsSync(chosen)) {
        console.log(`  ⚠️  ${slotId}: Variante ${variantIdx} nicht gefunden`);
        continue;
      }

      // Kopiere chosen → finalPath
      mkdirSync(dirname(group.finalPath), { recursive: true });
      renameSync(chosen, group.finalPath);
      console.log(`  ✅ ${slotId} → ${group.finalPath}`);

      // Candidate-Ordner löschen
      try {
        rmSync(group.candidatesDir, { recursive: true, force: true });
      } catch {}

      // TODO: imageSlot in source-Datei updaten (status: "ready", path: "/images/content/...")
      // Aktuell muss man das manuell machen, weil wir keinen AST-Writer haben.
      console.log(
        `     TODO: In ${group.sourceFile} Slot ${slotId} auf status:"ready", path:"${group.finalPath.replace(resolve(process.cwd(), "public"), "")}" setzen`,
      );
    }

    console.log(`\nAuswahl gespeichert: ${Object.keys(selections).length} Bilder`);
  });
}

// ─── HTML-Template ───────────────────────────────────────────────────────

function renderHtml(groups: CandidateGroup[]): string {
  const groupsHtml = groups
    .map(
      (g) => `
    <div class="slot" data-slot="${g.slotId}">
      <h3>${g.slotId} <span class="step">Step: ${g.stepId}</span></h3>
      <p class="prompt">${g.prompt}</p>
      <div class="variants">
        ${g.variants
          .map(
            (v, i) => `
          <div class="variant" data-index="${i}">
            <img src="/img/${encodeURIComponent(v)}" alt="Variante ${i + 1}" />
            <button class="select-btn">Wählen (v${i + 1})</button>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <title>Bild-Auswahl ${new Date().toISOString().slice(0, 10)}</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #fafaf7; color: #2c2420; padding: 24px; max-width: 1400px; margin: 0 auto; }
    h1 { color: #C4877F; }
    .slot { background: white; border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
    .slot h3 { margin: 0 0 8px; font-size: 16px; }
    .step { color: #888; font-weight: normal; font-size: 13px; }
    .prompt { color: #666; font-size: 13px; margin: 0 0 12px; font-style: italic; }
    .variants { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
    .variant { border: 2px solid transparent; border-radius: 8px; padding: 6px; transition: all 0.2s; cursor: pointer; }
    .variant:hover { border-color: #C4877F; }
    .variant.selected { border-color: #6B8F71; background: rgba(107, 143, 113, 0.08); }
    .variant img { width: 100%; height: auto; display: block; border-radius: 6px; }
    button { background: #C4877F; color: white; border: 0; padding: 8px 14px; border-radius: 6px; cursor: pointer; margin-top: 6px; width: 100%; font-size: 13px; }
    button:hover { background: #B07A72; }
    .finish { background: #6B8F71; padding: 14px 28px; font-size: 15px; margin-top: 20px; }
    .finish:hover { background: #5A7D5F; }
    .status { margin-left: 10px; color: #6B8F71; font-size: 13px; }
  </style>
</head>
<body>
  <h1>Bild-Auswahl</h1>
  <p>Für jeden Slot die beste Variante anklicken. Danach unten "Fertig" klicken.</p>
  <p><strong>Ausgewählt:</strong> <span id="count">0</span> / ${groups.length}</p>
  ${groupsHtml}
  <button class="finish" id="finishBtn" disabled>Fertig (alle müssen ausgewählt sein)</button>
  <script>
    const total = ${groups.length};
    const selections = {};
    const countEl = document.getElementById('count');
    const finishBtn = document.getElementById('finishBtn');

    document.querySelectorAll('.variant').forEach(v => {
      v.addEventListener('click', async () => {
        const slot = v.closest('.slot').dataset.slot;
        const idx = parseInt(v.dataset.index, 10);

        // UI: andere Varianten in diesem Slot deselecten
        v.closest('.variants').querySelectorAll('.variant').forEach(o => o.classList.remove('selected'));
        v.classList.add('selected');

        selections[slot] = idx;
        countEl.textContent = Object.keys(selections).length;

        // Backend
        await fetch('/select', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ slotId: slot, variantIndex: idx }) });

        if (Object.keys(selections).length === total) {
          finishBtn.disabled = false;
          finishBtn.textContent = 'Fertig — alle ' + total + ' ausgewählt';
        }
      });
    });

    finishBtn.addEventListener('click', async () => {
      await fetch('/finish', { method: 'POST' });
      document.body.innerHTML = '<h1>Gespeichert ✅</h1><p>Du kannst diesen Tab schließen.</p>';
    });
  </script>
</body>
</html>`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
