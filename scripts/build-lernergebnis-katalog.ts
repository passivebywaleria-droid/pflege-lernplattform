/**
 * build-lernergebnis-katalog.ts
 *
 * Lernergebnis-First-Pipeline, Phase 1: extrahiert die offiziellen Lernergebnisse
 * des Fachkommissions-Rahmenlehrplans (§ 53 PflBG) aus dem Curriculum-Volltext
 * und klassifiziert sie deterministisch zur maschinenlesbaren Wahrheitsquelle.
 *
 * Quelle:  recherche/curriculum-generalistik-volltext/curriculum-generalistik.txt
 * Output:  specs/curriculum/ce-{NN}-lernergebnisse.json  (+ katalog-index.json)
 *
 * Aufruf:  npx tsx scripts/build-lernergebnis-katalog.ts
 *
 * Verbatim-Treue: das Feld `text` ist 1:1 aus dem Volltext (mehrzeilige Bullets
 * zusammengefuegt). Mit scripts/zitat-verifizierer-Logik gegenpruefbar.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"

const SRC = "recherche/curriculum-generalistik-volltext/curriculum-generalistik.txt"
const OUT_DIR = "specs/curriculum"

type Typ = "wissen" | "koennen" | "einstellung"
interface Lernergebnis {
  id: string            // z.B. CE02-LE2-K3
  ce: number
  leIndex: number       // fortlaufend je CE
  quellzeile: number
  text: string          // VERBATIM
  typ: Typ
  bloomVerb: string
  bloomStufe: number    // 1-6
  altersbezug: boolean  // verlangt explizit mehrere Altersstufen / Kind / alter Mensch
  motorisch: boolean    // praktische Handausfuehrung -> Plattform nur kognitiv
}

// --- Operatoren -> Bloom-Stufe (PflAPrV-/AFB-orientiert) ---
const BLOOM: Record<string, number> = {}
const add = (stufe: number, verben: string[]) => verben.forEach((v) => (BLOOM[v] = stufe))
add(1, ["nennen", "benennen", "aufzaehlen", "aufzählen", "wiedergeben", "skizzieren", "kennen"])
add(2, ["beschreiben", "erlaeutern", "erläutern", "erklaeren", "erklären", "darlegen", "darstellen", "zusammenfassen", "einordnen", "verstehen", "vorstellen"])
add(3, ["anwenden", "durchfuehren", "durchführen", "umsetzen", "einsetzen", "planen", "demonstrieren", "ermitteln", "berechnen", "dokumentieren", "anlegen", "verabreichen", "wechseln", "messen", "handhaben"])
add(4, ["differenzieren", "analysieren", "vergleichen", "einschaetzen", "einschätzen", "unterscheiden", "herausstellen", "ueberblicken", "überblicken", "auswaehlen", "auswählen", "pruefen", "prüfen"])
add(5, ["begruenden", "begründen", "beurteilen", "bewerten", "reflektieren"])
add(6, ["entwickeln", "gestalten", "konzipieren"])
// Einstellungs-Operatoren (Haltung)
const EINSTELLUNG_VERBEN = new Set(["diskutieren", "reflektieren", "austauschen", "anerkennen", "akzeptieren", "respektieren", "sich"])

const MOTORISCH_VERBEN = new Set([
  "durchfuehren", "durchführen", "anlegen", "wechseln", "verabreichen", "anwenden",
  "demonstrieren", "messen", "mobilisieren", "lagern", "waschen", "transferieren",
  "katheterisieren", "handhaben", "umlagern",
])

const AGE_RE = /aller Altersstufen|Altersgruppen|S(ä|ae)ugling|Neugeboren|Kind(es|er|heit)?|Jugendlich|alte[rn]? Mensch|im Alter|Lebensspanne|Lebensalter/i

// Trennbare Verben: leichtes Grundverb am Anfang + Partikel am Satzende -> echtes Verb.
const SEPARABEL: Record<string, Record<string, string>> = {
  stellen: { heraus: "herausstellen", dar: "darstellen" },
  schaetzen: { ein: "einschaetzen" },
  ordnen: { ein: "einordnen" },
  legen: { dar: "darlegen" },
  fassen: { zusammen: "zusammenfassen" },
  nehmen: { wahr: "wahrnehmen", auf: "aufnehmen" },
}
function bestVerb(text: string): string {
  const woerter = text.replace(/^[\s•\-–]+/, "").split(/\s+/)
  let first = ""
  for (const w of woerter) {
    const c = w.replace(/[^A-Za-zäöüÄÖÜß]/g, "").toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    if (c.length > 3 && (c.endsWith("en") || c.endsWith("ln") || c.endsWith("rn"))) { first = c; break }
  }
  if (first && SEPARABEL[first]) {
    const last = (woerter[woerter.length - 1] || "").replace(/[^A-Za-zäöüÄÖÜß]/g, "").toLowerCase()
    if (SEPARABEL[first][last]) return SEPARABEL[first][last]
  }
  return first || (woerter[0]?.replace(/[^A-Za-zäöüÄÖÜß]/g, "").toLowerCase() ?? "")
}

function main() {
  const lines = readFileSync(SRC, "utf-8").split("\n")
  const N = lines.length
  const ceRe = /^CE (\d{1,2}):/

  const ceHeaders: Array<[number, number]> = []
  const lstart: number[] = []
  const empf: number[] = []
  for (let i = 0; i < N; i++) {
    const s = lines[i].trim()
    const m = s.match(ceRe)
    if (m) ceHeaders.push([i, parseInt(m[1], 10)])
    if (s === "Lernergebnisse") lstart.push(i)
    if (s.startsWith("Empfohlene")) empf.push(i)
  }
  const ceFor = (line: number) => {
    let ce: number | null = null
    for (const [l, c] of ceHeaders) if (l <= line) ce = c
    return ce
  }
  const blockEnd = (start: number) => {
    const nexts = [...lstart, ...empf].filter((x) => x > start)
    return nexts.length ? Math.min(...nexts) : N
  }

  const katalog: Record<number, Lernergebnis[]> = {}
  const leCounter: Record<number, number> = {}

  for (const s of lstart) {
    const ce = ceFor(s)
    if (ce === null) continue
    const end = blockEnd(s)
    leCounter[ce] = (leCounter[ce] ?? 0) + 1
    const leIndex = leCounter[ce]
    let typ: Typ = "wissen"
    const counters = { wissen: 0, koennen: 0, einstellung: 0 }

    // Bullets zusammenbauen (mehrzeilig bis zum naechsten Bullet/Section)
    let cur: string[] = []
    const flush = () => {
      if (!cur.length) return
      const text = cur.join(" ").replace(/\s+/g, " ").trim()
      cur = []
      if (text.length < 4) return
      counters[typ]++
      const verb = bestVerb(text)
      let stufe = BLOOM[verb] ?? (typ === "einstellung" ? 5 : 2)
      if (typ === "einstellung" && EINSTELLUNG_VERBEN.has(verb)) stufe = 5
      const prefix = typ === "wissen" ? "W" : typ === "koennen" ? "K" : "E"
      ;(katalog[ce] ??= []).push({
        id: `CE${String(ce).padStart(2, "0")}-LE${leIndex}-${prefix}${counters[typ]}`,
        ce, leIndex, quellzeile: s + 1, text, typ,
        bloomVerb: verb, bloomStufe: stufe,
        altersbezug: AGE_RE.test(text),
        motorisch: MOTORISCH_VERBEN.has(verb),
      })
    }
    for (let i = s + 1; i < end; i++) {
      const raw = lines[i]
      const t = raw.trim()
      if (/^Wissen:?$/i.test(t)) { flush(); typ = "wissen"; continue }
      if (/^K(ö|oe)nnen:?$/i.test(t)) { flush(); typ = "koennen"; continue }
      if (/^Einstellung(en)?:?$/i.test(t)) { flush(); typ = "einstellung"; continue }
      if (t === "Lernergebnisse" || /^\d+$/.test(t) || t === "") continue
      // Fremdtext, der NICHT zum Lernergebnis gehoert: Methoden-Marker, wiederkehrende
      // Seiten-/Abschnitts-Header. Aktuelles Bullet abschliessen, Zeile ueberspringen
      // (verhindert Bleed UND fuegt ueber Seitenumbrueche getrennte Bullets wieder zusammen).
      if (/^[➢▶]/.test(t) || ceRe.test(t) ||
          /^(Didaktische|Handlungskompetenzen|Konzeptionsprinzip|Pr(ü|ue)fungsform|Empfohlene|Kompetenzschwerpunkt|Anlagen|Wissenschaftsprinzip|Situationsprinzip)/.test(t)) {
        flush(); continue
      }
      if (/^[•]/.test(t)) { flush(); cur.push(t.replace(/^[•\s]+/, "")) }
      else if (cur.length) cur.push(t) // Fortsetzungszeile
    }
    flush()
  }

  mkdirSync(OUT_DIR, { recursive: true })
  const index: Array<Record<string, number>> = []
  for (let ce = 1; ce <= 11; ce++) {
    const items = katalog[ce] ?? []
    const path = `${OUT_DIR}/ce-${String(ce).padStart(2, "0")}-lernergebnisse.json`
    writeFileSync(path, JSON.stringify({ ce, quelle: "Fachkommission-Rahmenlehrplan § 53 PflBG (curriculum-generalistik)", anzahl: items.length, lernergebnisse: items }, null, 2))
    const w = items.filter((x) => x.typ === "wissen").length
    const k = items.filter((x) => x.typ === "koennen").length
    const e = items.filter((x) => x.typ === "einstellung").length
    const age = items.filter((x) => x.altersbezug).length
    const mot = items.filter((x) => x.motorisch).length
    index.push({ ce, gesamt: items.length, wissen: w, koennen: k, einstellung: e, altersbezug: age, motorisch: mot })
    console.log(`CE ${String(ce).padStart(2, "0")}: ${items.length}  (W ${w} / K ${k} / E ${e})  Alter ${age}  Motorik ${mot}`)
  }
  writeFileSync(`${OUT_DIR}/katalog-index.json`, JSON.stringify(index, null, 2))
  const total = index.reduce((a, b) => a + b.gesamt, 0)
  console.log(`\nGESAMT: ${total} Lernergebnisse über 11 CE → ${OUT_DIR}/`)
}
main()
