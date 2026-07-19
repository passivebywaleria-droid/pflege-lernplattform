/**
 * Lädt das Whisper-Modell für die On-Device-Spracherkennung nach
 * public/whisper/models/ (gitignored — 57 MB gehören nicht ins Repo).
 *
 * Aufruf:  npx tsx scripts/fetch-whisper-model.ts
 * Läuft idempotent (überspringt vorhandene Datei mit korrekter Größe).
 * Deploy: deploy-hetzner.sh rsynct public/ mit — das Modell wandert mit,
 * die Schüler-Geräte laden es dann von carovia.de (EU), nie von HuggingFace.
 *
 * Modellwahl base-q5_1: Benchmark 2026-07-19 (Memory pilot-ux-haertung) —
 * 57 MB, ~0,5× Echtzeit bei 2 Threads, beste deutsche Fachsprache ≤ 60 MB
 * (tiny zerstört Fachbegriffe: „Herztruckmassage", „Trombose Prof. Lachse").
 */
import fs from "node:fs";
import path from "node:path";

const MODEL = "ggml-base-q5_1.bin";
const EXPECTED_BYTES = 59_707_625; // Stand ggerganov/whisper.cpp 2026-07
const URL = `https://huggingface.co/ggerganov/whisper.cpp/resolve/main/${MODEL}`;
const DEST = path.join(process.cwd(), "public", "whisper", "models", MODEL);

async function main() {
  if (fs.existsSync(DEST)) {
    const size = fs.statSync(DEST).size;
    if (size === EXPECTED_BYTES) {
      console.log(`✅ ${MODEL} vorhanden (${(size / 1e6).toFixed(1)} MB) — nichts zu tun.`);
      return;
    }
    console.log(`⚠️ ${MODEL} hat ${size} Bytes (erwartet ${EXPECTED_BYTES}) — lade neu.`);
  }

  console.log(`⬇️  Lade ${MODEL} …`);
  const res = await fetch(URL);
  if (!res.ok) throw new Error(`Download fehlgeschlagen: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length !== EXPECTED_BYTES) {
    throw new Error(
      `Unerwartete Größe: ${buf.length} statt ${EXPECTED_BYTES} Bytes — EXPECTED_BYTES prüfen (Modell-Update upstream?)`
    );
  }
  fs.mkdirSync(path.dirname(DEST), { recursive: true });
  fs.writeFileSync(DEST, buf);
  console.log(`✅ ${MODEL} gespeichert (${(buf.length / 1e6).toFixed(1)} MB).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
