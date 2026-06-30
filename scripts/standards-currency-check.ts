/**
 * standards-currency-check.ts <ce> [--json]  — Pipeline-Härtung Stage 4 (W6 / Teil D)
 *
 * Prüft den Content gegen die Standards-Currency-Registry
 * (`recherche/standards-currency.json`): jede dort als „veraltet" geführte
 * Norm/Standard-Fassung, die der Content AUTORITATIV verwendet, wird geflaggt.
 * Hätte den §1906a→§1831-Drift (W7) automatisch gefangen.
 *
 * PRÄZISIONS-PRINZIP (gegen False Positives):
 *   Eine veraltete Norm in KORREKTIVEM/HISTORISCHEM Kontext ist Lehrinhalt ÜBER
 *   die Änderung, kein Fehler. Ein Treffer im Fenster eines Korrektiv-Markers
 *   (vormals, früher, abgelöst, ersetzt, seit 2023, nicht mehr, Reform, veraltet …)
 *   wird übersprungen — so feuert der Check nicht auf den eigenen Erklärtext
 *   („§ 1831 BGB, vormals § 1906").
 *   Reine Kommentarzeilen werden ebenfalls übersprungen.
 *
 * Diese Datei liefert sowohl ein eigenständiges Gate (CLI) als auch die pure
 * Kernfunktion `scanTextForOutdatedNorms`, die das Klinik-Panel (W6) als
 * Lens „Recht & Ethik" wiederverwendet.
 *
 * Exit-Codes:
 *   0 — keine veraltete Norm autoritativ verwendet
 *   1 — mindestens ein Treffer (veraltete Norm im Content)
 *   2 — Registry nicht ladbar
 *
 * Usage:
 *   npx tsx scripts/standards-currency-check.ts ce-02
 *   npx tsx scripts/standards-currency-check.ts ce-01 --json
 */
import { readdirSync, readFileSync, statSync, existsSync } from "fs";
import { join } from "path";

// ─────────────────────────────────────────────────────────────────────────────
// Datenmodell (Registry)
// ─────────────────────────────────────────────────────────────────────────────

export interface NormBeleg {
  quelle: string;
  zitat?: string;
}

export interface NormEntry {
  id: string;
  norm: string;
  /** Regex-Quelle (case-insensitive), erkennt die veraltete Fassung im Text. */
  pattern: string;
  status: "veraltet";
  ersetztDurch: string;
  datumAbloesung: string;
  grund: string;
  severity: "HOCH" | "MITTEL" | "NIEDRIG";
  beleg: NormBeleg;
}

export interface CurrencyRegistry {
  stand: string;
  normen: NormEntry[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Pure, testbare Kernlogik
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Korrektiv-/historischer Kontext: hier ist die veraltete Norm Lehrinhalt ÜBER
 * die Ablösung, kein autoritativer Gebrauch. Bewusst breit, weil ein False
 * Positive auf dem eigenen Erklärtext schlimmer ist als ein verpasster Treffer
 * (den fängt der menschliche Backstop / Panel-Review).
 */
export const KORREKTIV_MARKER_RE =
  /(vormals|fr[üu]her|ehemal\w*|alte\s+fassung|abgel[öo]st|abl[öo]sung|ersetzt|ersetz\w*\s+durch|nicht\s+mehr|seit\s+20\d\d|ab\s+20\d\d|reform|veraltet|historisch|damals|bis\s+20\d\d|wurde\s+zu|hie[ßss]+\s+fr[üu]her)/i;

/** Fenster um einen Treffer für die Korrektiv-Kontext-Prüfung. */
const CONTEXT_BACK = 120;
const CONTEXT_FWD = 120;

export interface CurrencyHit {
  id: string;
  norm: string;
  ersetztDurch: string;
  datumAbloesung: string;
  grund: string;
  severity: NormEntry["severity"];
  matched: string;
  index: number;
  line: number;
  snippet: string;
  beleg: NormBeleg;
}

/** 0-basierte Zeilennummer eines Zeichen-Index. */
function lineOfIndex(text: string, index: number): number {
  let line = 0;
  for (let i = 0; i < index && i < text.length; i++) if (text[i] === "\n") line++;
  return line;
}

/**
 * Scannt EINEN Text gegen die Registry. Reiner String-in/Hits-out — kein IO.
 * Treffer in Korrektiv-Kontext oder reinen Kommentarzeilen werden ausgelassen.
 */
export function scanTextForOutdatedNorms(
  text: string,
  registry: NormEntry[]
): CurrencyHit[] {
  const hits: CurrencyHit[] = [];
  const lines = text.split("\n");

  for (const entry of registry) {
    let re: RegExp;
    try {
      re = new RegExp(entry.pattern, "gi");
    } catch {
      continue; // defektes Pattern in der Registry → überspringen (nie crashen)
    }
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      const idx = m.index;
      if (m[0].length === 0) {
        re.lastIndex++; // Endlosschleifen-Schutz bei Leer-Match
        continue;
      }
      const line0 = lineOfIndex(text, idx);
      const lineText = (lines[line0] ?? "").trimStart();

      // Kommentarzeilen überspringen (dort wird die Norm oft dokumentiert)
      if (lineText.startsWith("//") || lineText.startsWith("*") || lineText.startsWith("/*")) {
        continue;
      }

      // Korrektiv-/historischer Kontext → Lehrinhalt über die Änderung, kein Fehler
      const ctx = text.slice(Math.max(0, idx - CONTEXT_BACK), Math.min(text.length, idx + CONTEXT_FWD));
      if (KORREKTIV_MARKER_RE.test(ctx)) continue;

      const snippet = text
        .slice(Math.max(0, idx - 30), idx + 60)
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 100);

      hits.push({
        id: entry.id,
        norm: entry.norm,
        ersetztDurch: entry.ersetztDurch,
        datumAbloesung: entry.datumAbloesung,
        grund: entry.grund,
        severity: entry.severity,
        matched: m[0],
        index: idx,
        line: line0 + 1,
        snippet,
        beleg: entry.beleg,
      });
    }
  }
  return hits;
}

// ─────────────────────────────────────────────────────────────────────────────
// IO-Schicht
// ─────────────────────────────────────────────────────────────────────────────

export function loadCurrencyRegistry(
  path = join("recherche", "standards-currency.json")
): NormEntry[] {
  const raw = JSON.parse(readFileSync(path, "utf8")) as CurrencyRegistry;
  return raw.normen;
}

/** Generierte Tool-Outputs (keine Lerninhalte) — nie scannen. */
const SKIP_FILE_RE =
  /(report|coverage|journal|review|walkthrough|qa-summary|mapping|manifest)/i;

/**
 * Scannt content/{ce}. Default: nur ausgelieferte `.ts` (konsistent mit den
 * Schwester-Gates klinik-zahlen/anti-pattern). Mit `includePlans` zusätzlich die
 * `.md`-Pläne (bausteine-plan, glossar-plan …) — nützlich, um veraltete Normen
 * schon im Plan zu fangen, bevor sie zu Content werden.
 */
export function* walkContentFiles(ceFilter?: string, includePlans = false): Generator<string> {
  const contentDir = join(process.cwd(), "content");
  if (!existsSync(contentDir)) return;
  const walk = function* (dir: string): Generator<string> {
    for (const e of readdirSync(dir)) {
      const p = join(dir, e);
      let st;
      try { st = statSync(p); } catch { continue; }
      if (st.isDirectory()) { yield* walk(p); continue; }
      if (SKIP_FILE_RE.test(e)) continue;
      const isTs = e.endsWith(".ts") && !e.endsWith(".d.ts");
      const isPlan = includePlans && e.endsWith(".md");
      if (isTs || isPlan) yield p;
    }
  };
  for (const ce of readdirSync(contentDir)) {
    if (!ce.startsWith("ce-")) continue;
    if (ceFilter && ce !== ceFilter) continue;
    const ceDir = join(contentDir, ce);
    try { if (!statSync(ceDir).isDirectory()) continue; } catch { continue; }
    yield* walk(ceDir);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────────────────────────────────────

interface FileHits {
  file: string;
  hits: CurrencyHit[];
}

function main() {
  const args = process.argv.slice(2);
  const isJson = args.includes("--json");
  const includePlans = args.includes("--include-plans");
  const ceFilter = args.find((a) => /^ce-\d+/.test(a));

  let registry: NormEntry[];
  try {
    registry = loadCurrencyRegistry();
  } catch (e) {
    console.error("❌ standards-currency.json nicht ladbar:", (e as Error).message);
    process.exit(2);
    return;
  }

  const fileHits: FileHits[] = [];
  for (const file of walkContentFiles(ceFilter, includePlans)) {
    const text = readFileSync(file, "utf8");
    const hits = scanTextForOutdatedNorms(text, registry);
    if (hits.length > 0) fileHits.push({ file: file.replace(process.cwd() + "/", ""), hits });
  }
  const all = fileHits.flatMap((f) => f.hits);

  if (isJson) {
    console.log(JSON.stringify({ ce: ceFilter ?? "alle", registryStand: registry.length, fileHits }, null, 2));
    process.exit(all.length > 0 ? 1 : 0);
    return;
  }

  console.log("═".repeat(72));
  console.log(`STANDARDS-CURRENCY-CHECK (W6 / Teil D)${ceFilter ? ` — ${ceFilter}` : " — alle CEs"}`);
  console.log("═".repeat(72));
  console.log(`Registry: ${registry.length} veraltete Norm(en) bekannt · Treffer: ${all.length}\n`);

  if (all.length === 0) {
    console.log("✅ Keine veraltete Norm autoritativ verwendet.");
    process.exit(0);
  }

  for (const f of fileHits) {
    console.log(`❌ ${f.file}`);
    for (const h of f.hits) {
      console.log(`   Zeile ${h.line}: „${h.matched}" ist veraltet (seit ${h.datumAbloesung}) → ${h.ersetztDurch}`);
      console.log(`     „${h.snippet}"`);
      console.log(`     Grund: ${h.grund}`);
      console.log(`     Beleg: ${h.beleg.quelle}`);
    }
    console.log();
  }

  console.log("─".repeat(72));
  console.log(`❌ FAIL — ${all.length} veraltete Norm-Verwendung(en). Auf aktuelle Fassung umstellen.`);
  process.exit(1);
}

const isCLI = process.argv[1]?.includes("standards-currency-check");
if (isCLI) main();
