#!/usr/bin/env npx tsx
/**
 * generate-images.ts
 *
 * Liest imageSlot-Metadaten aus einer Situation/Thema und generiert
 * 3-5 Bild-Varianten pro Slot via Gemini-Bot.
 *
 * Pipeline v9: Manueller Schritt NACH Content-Generator, vor Review #2.
 *
 * Rate-Limit-Schutz:
 * - Max 10 Bilder pro Stunde (Google-Sperrungs-Risiko)
 * - Pause 30-60s zwischen Bildern
 * - Pause 3-5 Min zwischen Batches à 10
 *
 * Voraussetzung:
 * - Chrome läuft mit CDP auf Port 9222
 * - Gemini-Chat ist offen und angemeldet
 *
 * Usage:
 *   npx tsx scripts/generate-images.ts --ce ce-02 --situation sturz-prophylaxe
 *   npx tsx scripts/generate-images.ts --ce ce-02 --thema sturz-prophylaxe
 *   npx tsx scripts/generate-images.ts --ce ce-02 --situation xyz --variants 5
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdirSync } from "fs";
import { join, resolve, dirname } from "path";
import { execSync } from "child_process";

// ─── Config ──────────────────────────────────────────────────────────────

const BOT_SCRIPT = "/Users/macminiwaleria/.openclaw/workspace/tools/gemini_image_generator.mjs";
const DEFAULT_CHAT_URL = "https://gemini.google.com/app/fbf44f92539e5cc7";
const DEFAULT_VARIANTS = 3;
const MAX_IMAGES_PER_HOUR = 10;
const PAUSE_BETWEEN_IMAGES_MS = 30000; // 30s
const PAUSE_BETWEEN_BATCHES_MS = 180000; // 3 Min

// ─── Types ───────────────────────────────────────────────────────────────

interface ImageSlot {
  id: string;
  type: "scene" | "anatomy-svg" | "excalidraw";
  style?: "copic";
  prompt: string;
  altText?: string;
  status: "pending" | "ready";
  path?: string | null;
  sourceFile: string;
  stepId: string;
}

// ─── Scanner: findet alle imageSlots in einer Situation/Thema ────────────

function scanImageSlots(targetPath: string): ImageSlot[] {
  const slots: ImageSlot[] = [];

  function scanFile(filePath: string) {
    const content = readFileSync(filePath, "utf-8");
    // Vereinfachtes Pattern-Matching (ohne AST)
    const slotRegex =
      /imageSlot:\s*{([^}]+)}/g;
    let m;
    while ((m = slotRegex.exec(content)) !== null) {
      const block = m[1];
      const idMatch = block.match(/id:\s*"([^"]+)"/);
      const typeMatch = block.match(/type:\s*"([^"]+)"/);
      const styleMatch = block.match(/style:\s*"([^"]+)"/);
      const promptMatch = block.match(/prompt:\s*"([^"]+)"/);
      const altMatch = block.match(/altText:\s*"([^"]+)"/);
      const statusMatch = block.match(/status:\s*"([^"]+)"/);
      const pathMatch = block.match(/path:\s*"([^"]+)"/);

      if (idMatch && typeMatch && promptMatch) {
        // Kontext: welcher stepId?
        const contextBefore = content.slice(0, m.index);
        const stepMatch = [...contextBefore.matchAll(/stepId:\s*"([^"]+)"/g)];
        const stepId = stepMatch.length > 0 ? stepMatch[stepMatch.length - 1][1] : "unknown";

        slots.push({
          id: idMatch[1],
          type: typeMatch[1] as ImageSlot["type"],
          style: styleMatch ? (styleMatch[1] as "copic") : undefined,
          prompt: promptMatch[1],
          altText: altMatch ? altMatch[1] : undefined,
          status: statusMatch ? (statusMatch[1] as ImageSlot["status"]) : "pending",
          path: pathMatch ? pathMatch[1] : null,
          sourceFile: filePath,
          stepId,
        });
      }
    }
  }

  function walk(dir: string) {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      const stat = statSync(full);
      if (stat.isDirectory()) walk(full);
      else if (entry.endsWith(".ts") && !entry.endsWith(".d.ts")) scanFile(full);
    }
  }

  walk(targetPath);
  return slots;
}

// ─── Bot-Aufruf ──────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function promptForVariant(originalPrompt: string, variant: number): string {
  // Leichte Variation pro Variante (damit Gemini nicht identische Bilder macht)
  const variations = [
    "wide angle shot, bright lighting",
    "close-up detail, warm atmosphere",
    "side perspective, soft shadows",
    "slightly different composition, natural tones",
    "alternate viewpoint, gentle mood",
  ];

  const variantPrompt = variations[variant % variations.length];
  return `${originalPrompt}, ${variantPrompt}`;
}

async function callBot(
  prompt: string,
  outputPath: string,
  chatUrl: string,
): Promise<boolean> {
  try {
    mkdirSync(dirname(outputPath), { recursive: true });
    const cmd = `node "${BOT_SCRIPT}" --prompt ${JSON.stringify(prompt)} --output "${outputPath}" --chat-url "${chatUrl}"`;
    execSync(cmd, { stdio: "pipe", timeout: 180000 });
    return existsSync(outputPath);
  } catch (e) {
    console.error(`  FEHLER: ${(e as Error).message.slice(0, 200)}`);
    return false;
  }
}

// ─── Main ────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const ceIdx = args.indexOf("--ce");
  const sitIdx = args.indexOf("--situation");
  const themaIdx = args.indexOf("--thema");
  const variantsIdx = args.indexOf("--variants");
  const chatIdx = args.indexOf("--chat-url");

  if (ceIdx === -1 || (sitIdx === -1 && themaIdx === -1)) {
    console.error(
      "Usage: npx tsx scripts/generate-images.ts --ce ce-02 --situation <id>  [--variants 3] [--chat-url <url>]",
    );
    process.exit(1);
  }

  const ceId = args[ceIdx + 1];
  const targetId = sitIdx !== -1 ? args[sitIdx + 1] : args[themaIdx + 1];
  const targetType = sitIdx !== -1 ? "situationen" : "themen";
  const variants = variantsIdx !== -1 ? parseInt(args[variantsIdx + 1], 10) : DEFAULT_VARIANTS;
  const chatUrl = chatIdx !== -1 ? args[chatIdx + 1] : DEFAULT_CHAT_URL;

  const targetPath = resolve(process.cwd(), "content", ceId, targetType, targetId);
  if (!existsSync(targetPath)) {
    console.error(`Pfad nicht gefunden: ${targetPath}`);
    process.exit(1);
  }

  console.log(`\n=== Bild-Generierung: ${ceId}/${targetType}/${targetId} ===`);

  const slots = scanImageSlots(targetPath);
  const pending = slots.filter((s) => s.status === "pending" && s.type === "scene");

  console.log(`Gefundene Slots:    ${slots.length}`);
  console.log(`Davon "pending":    ${pending.length}`);
  console.log(`Davon "scene":      ${pending.length} (KI-generierbar)`);
  console.log(`Varianten pro Slot: ${variants}`);
  console.log(`Total Bilder:       ${pending.length * variants}`);
  console.log(`Geschätzte Zeit:    ~${Math.round((pending.length * variants * 45) / 60)} Min\n`);

  if (pending.length === 0) {
    console.log("Keine pending scene-Slots. Fertig.");
    return;
  }

  // Rate-Limit-Info
  const totalImages = pending.length * variants;
  if (totalImages > MAX_IMAGES_PER_HOUR) {
    console.log(`⚠️  ${totalImages} Bilder übersteigen Rate-Limit (${MAX_IMAGES_PER_HOUR}/h).`);
    console.log(`   Pausiere nach jeweils ${MAX_IMAGES_PER_HOUR} Bildern für ${PAUSE_BETWEEN_BATCHES_MS / 60000} Min.\n`);
  }

  let imagesDone = 0;

  for (const slot of pending) {
    console.log(`\n[Slot ${slot.id}] Step: ${slot.stepId}`);
    console.log(`  Prompt: ${slot.prompt.slice(0, 80)}...`);

    const candidatesDir = resolve(
      process.cwd(),
      "public",
      "images",
      "content",
      ceId,
      "_candidates",
      slot.id,
    );

    for (let v = 1; v <= variants; v++) {
      const variantPrompt = promptForVariant(slot.prompt, v - 1);
      // Immer den "no text"-Suffix anhängen
      const fullPrompt = `${variantPrompt}, absolutely no text no labels no words no letters`;
      const outputPath = join(candidatesDir, `v${v}.png`);

      console.log(`  [${v}/${variants}] Generiere...`);
      const ok = await callBot(fullPrompt, outputPath, chatUrl);
      if (ok) {
        console.log(`  [${v}/${variants}] ✅ ${outputPath}`);
      } else {
        console.log(`  [${v}/${variants}] ❌ Fehlgeschlagen`);
      }

      imagesDone++;

      // Rate-Limit: Pause
      if (imagesDone < totalImages) {
        if (imagesDone % MAX_IMAGES_PER_HOUR === 0) {
          console.log(`\n⏸  Batch-Pause ${PAUSE_BETWEEN_BATCHES_MS / 60000} Min (Rate-Limit-Schutz)...\n`);
          await sleep(PAUSE_BETWEEN_BATCHES_MS);
        } else {
          await sleep(PAUSE_BETWEEN_IMAGES_MS);
        }
      }
    }
  }

  console.log(`\n=== Fertig ===`);
  console.log(`Bilder generiert: ${imagesDone}`);
  console.log(`Nächster Schritt: npx tsx scripts/choose-images.ts --ce ${ceId} --${sitIdx !== -1 ? "situation" : "thema"} ${targetId}\n`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((e) => {
    console.error("Unerwarteter Fehler:", e);
    process.exit(1);
  });
}

export { scanImageSlots };
