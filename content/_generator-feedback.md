# Generator-Feedback (aus Dozentin-Reviews + Content-Audit)

> Diese Datei wird VOR jeder Content-Generierung gelesen.
> Jede Regel hier ist verbindlich — der Generator MUSS sie beachten.
> Neue Regeln werden nach jedem Dozentin-Review hinzugefügt.
>
> **Kategorien:**
> - **A) Fakten-Regeln**: WÖRTLICH aus Rohmaterial — Generator liest IMMER
> - **B) Format-Regeln**: Feld-Struktur, Bias, Länge — Generator liest IMMER
> - **C) Didaktik-Regeln**: Ton, Scaffolding — Generator liest nur bei Score-C-Pfaden
>
> Bei >50 Regeln: Aufteilen in `_feedback/fakten.md`, `_feedback/format.md`, `_feedback/didaktik.md`

---

## A) Fakten-Regeln — WÖRTLICH aus Rohmaterial

### Regel F001 — Aufzählungen WÖRTLICH übernehmen (LE-01, 2026-04-05)
- **Fehler:** F44 Umsetzungsstufen halluziniert als "Verstehen→Anwenden→Integrieren→Generieren"
- **Korrekt:** Pflegetheorie→Pflegemodell→Pflegeleitbild→Pflegekonzept
- **Regel:** Bei Stufenmodellen, Klassifikationen, Reihenfolgen: WÖRTLICH aus Rohmaterial kopieren, nie paraphrasieren. Wenn der Kernfakt "4 Stufen: A→B→C→D" sagt, müssen A, B, C, D exakt so im Step stehen.

### Regel F002 — Leitfall-Daten WÖRTLICH (LE-01, 2026-04-05)
- **Fehler:** Jonas Berger als "35, chronische Schmerzen" statt "8, postoperativer Schmerz"
- **Regel:** Name, Alter, Geschlecht, Diagnose von Leitfällen IMMER aus rohmaterial.json.leitfaelle[] übernehmen. Nie aus dem Kontext ableiten oder ändern.

### Regel F003 — Veraltete Leitlinien kennzeichnen (LE-06, 2026-04-05)
- **Fehler:** "2-Stunden-Regel" als Standard für Umlagern dargestellt
- **Korrekt:** DNQP lehnt fixe Intervalle explizit ab
- **Regel:** Bei Zeitintervallen in der Pflege IMMER prüfen: Steht das so im Rohmaterial? Formulierung: "individuell nach Risikoeinschätzung" statt fixer Intervalle.

### Regel F004 — Heparin-Dauer korrekt (LE-06, 2026-04-05)
- **Fehler:** "Heparin 2 Wochen" statt 28-35 Tage nach Hüft-TEP
- **Regel:** Medikamenten-Dauer IMMER aus Rohmaterial oder AWMF-Leitlinie. Nie schätzen.

### Regel F005 — FEM-Rechtslage vollständig (LE-06, 2026-04-05)
- **Fehler:** "Richterliche Genehmigung immer nötig" — falsch
- **Korrekt:** Richterliche Genehmigung nur bei Einwilligungsunfähigkeit (BGB §1831), Art. 104 GG beachten
- **Regel:** Bei Rechtsthemen: ALLE relevanten Paragraphen und Ausnahmen nennen. Nie vereinfachen.

---

## B) Format-Regeln — Feld-Struktur, Bias, Länge

### Regel F006 — MC-Distraktoren gleich lang (LE-01+06, 2026-04-05)
- **Fehler:** Korrekte Antwort systematisch 3× länger als Distraktoren
- **Regel:** Alle MC-Optionen müssen ±30% gleich lang sein. Wenn die korrekte Antwort 50 Zeichen hat, müssen Distraktoren 35-65 Zeichen haben.

### Regel F007 — Dialog-Scores mischen (LE-01+06, 2026-04-05)
- **Fehler:** Option A = IMMER Score 3 (beste Antwort)
- **Regel:** Die beste Antwort (höchster Score) muss über alle Phasen gleichmäßig auf Position A, B und C verteilt sein. Nie mehr als 40% auf einer Position.

---

## C) Didaktik-Regeln — Ton, Scaffolding, Kontext

### Regel F008 — Orem ist KEINE Bedürfnistheorie (LE-01, 2026-04-05)
- **Fehler:** Orem als "Bedürfnistheorie" in Musterantwort
- **Korrekt:** Orem = Selbstpflege-Defizit-Theorie. Bedürfnistheorien: Henderson, Roper, Krohwinkel.
- **Regel:** Pflegetheorie-Klassifikation (Bedürfnis/Interaktion/Ergebnis) IMMER aus F39 im Rohmaterial.

### Regel F009 — Alle Items einer Aufzählung zeigen (LE-01, 2026-04-05)
- **Fehler:** Roper "12 Lebensaktivitäten" im Titel, aber nur 5 gezeigt
- **Regel:** Wenn eine Zahl im Titel steht (z.B. "12 LA", "8 Artikel", "6 Schritte"), dann müssen ALLE Items gezeigt werden — nicht nur eine Auswahl.

### Regel F010 — Keine halluzierten Statistiken (LE-06, 2026-04-05)
- **Fehler:** "40% Sturzrisiko" bei Frau Becker — keine Quelle
- **Regel:** JEDE Prozentzahl/Statistik muss eine Quellenreferenz [Qx S.xx] haben. Wenn keine Quelle im Rohmaterial → Zahl NICHT verwenden.

### Regel F011 — Bobath korrekt benennen (LE-06, 2026-04-05)
- **Fehler:** "Neuroplastizität" als Bobath-Kernprinzip
- **Korrekt:** Bobath = Normalisierung des Muskeltonus
- **Regel:** Therapiekonzepte nur mit den Begriffen aus dem Rohmaterial beschreiben.

---

## D) Pipeline-Regeln — Generator-Fehler die sich wiederholen

### Regel F012 — ECHTE UMLAUTE, NIEMALS ASCII-Ersatz (LE-06, 2026-04-16) 🔒 K.O.
- **Fehler:** Generator schrieb "Praedilektionsstellen", "Schaedigung", "Roetung", "Massnahmen", "Koerper", "Uebung", "fuer", "ueber", "muessen", "koennen" — ~90 Treffer in steps-s1..s6
- **Root Cause:** CLAUDE.md-Regel ("IMMER ä, ö, ü, ß") war nicht prominent im Generator-Prompt; steps-s1.ts als Referenz hatte vereinzelt ae/oe/ue
- **Regel:** **IMMER** echte Umlaute (ä, ö, ü, ß) verwenden. **NIE** ae, oe, ue, ss als Ersatz. Gilt in ALLEN Strings (title, body, fragetext, options, explanation, B1-Texte, Quellennamen, Tabelle-Werte).
- **Prüfung vor Commit:** `grep -E "Praedil|Koerper|Massnahme|Roetung|Uebung|Naehr|fuer\\b|ueber\\b|muessen|koennen" content/le-XX/*.ts` MUSS 0 Treffer liefern
- **Ausnahmen:** Nur in TypeScript-Identifiern (`stepType`, `ContentStep`, Feld-Namen) — dort sind ae/oe/ue gewollt (z.B. `truefalse`, `sequencing`, `assessment`)

### Regel F013 — quellen[] mit Primärquellen (LE-06, 2026-04-16)
- **Fehler:** Generator übernahm "I Care Pflege S.XXX" aus Plan-Datei in quellen[]-Array (20× in pruefungsfall.ts + praxis.ts)
- **Regel:** `quellen[]` soll IMMER Primärquellen enthalten (DNQP 2013, AWMF S3-Leitlinie, RKI 2020, EPUAP/NPUAP 2014, PflBG §4, ICN 2021, Fiechter/Meier 1981 etc.). I-Care-Seitenangaben sind interne Dozentin-Referenzen, dürfen NICHT in quellen[] landen.
- **Hinweis an Dozentin:** In Plan-Dateien bei `quellen:` direkt Primärquellen angeben, nicht I-Care-Seiten.

### Regel F014 — Hotspot-Step MUSS vollständiges Schema haben (LE-06, 2026-04-16) 🔒 K.O. (P8)
- **Fehler:** Generator erzeugte `question.hotspots: [{x, y, ...}]` (flaches Array) — Renderer erwartet aber `question.hotspot: { imageUrl, imageAlt, instruction, zones: [...] }`
- **Folge:** Renderer returned `null` → Step unsichtbar
- **Regel (P8):** Hotspot-Steps MÜSSEN diese Struktur haben:
  ```typescript
  question: {
    hotspot: {
      imageUrl: string,      // PFLICHT: Pfad zu Hintergrundbild
      imageAlt: string,      // PFLICHT: Alt-Text
      instruction: string,   // PFLICHT: Anweisung an Schüler
      zones: [{ id, x, y, radius, label }]
    }
  }
  ```
- **NIE** flaches `hotspots: []` verwenden. NIE imageUrl weglassen.
- **Pipeline-Fix:** Dozentin muss in `steps-plan.md` bei jedem Hotspot-Step den Bildpfad angeben.

### Regel F015 — Naming-Standard `LE{NN}_*` (Engine-Vertrag, 2026-04-16) 🔒 K.O.
- **Problem:** LE-01 nutzte `STEPS_S1`/`GLOSSAR`/`KARTEIKARTEN_LE01`, LE-06 nutzte `STEPS_LE06_S2` — Engine konnte LE-06 nicht automatisch importieren. `import-content-to-db.ts` hardcoded für LE-01.
- **Regel:** Alle Exports MÜSSEN `LE{NN}_*` Prefix tragen (zweistellig, uppercase). Schema:
  - `LE{NN}_METADATA`, `LE{NN}_ARTIKEL`, `LE{NN}_GLOSSAR`, `LE{NN}_KARTEIKARTEN`
  - `LE{NN}_LERN_SNACK`, `LE{NN}_STEPS_S{N}`, `LE{NN}_FALLVERLAEUFE`
  - `LE{NN}_PRAXIS`, `LE{NN}_PRUEFUNGSFALL`
- **Beispiel LE-02:** `LE02_STEPS_S1`, `LE02_GLOSSAR` — NIE `STEPS_S1` oder `STEPS_LE02_S1` oder `GLOSSAR`
- **Enforcement:** `npx tsx scripts/validate-le.ts le-{NN}` — Check N (Naming-Standard) MUSS PASS
- **Begründung:** Engine-Auto-Loader (`content/content-loader.ts`) und Auto-Import (`scripts/import-content-to-db.ts`) lesen Manifest → leiten Export-Namen aus Pattern ab. Bei Verstoß: LE wird nicht geladen.

### Regel F016 — Barrel `index.ts` pro LE Pflicht (2026-04-16) 🔒 K.O.
- **Regel:** Jede LE braucht `content/le-{NN}/index.ts` der ALLE 13 anderen Exports re-exportiert.
- **Beispiel:**
  ```typescript
  // content/le-02/index.ts
  export { LE02_METADATA } from "./metadata";
  export { LE02_ARTIKEL } from "./artikel";
  // ... alle weiteren
  ```
- **Engine nutzt das:** `import("./le-NN/index")` lädt einmal, alle Konsumenten greifen via String-Key auf Exports zu.
- **Enforcement:** `validate-le.ts` Check V02 prüft Vollständigkeit.

### Regel F017 — `metadata.ts` separat (nicht inline in steps-s1.ts, 2026-04-16) 🔒 K.O.
- **Problem:** LE-01/LE-06 hatten `METADATA: LektionMetadata` in `steps-s1.ts` versteckt — DB-Import konnte es nur per Hardcode finden.
- **Regel:** `LE{NN}_METADATA` MUSS in `content/le-{NN}/metadata.ts` stehen, NICHT in steps-s1.ts oder anderen Dateien.
- **Vorlage:**
  ```typescript
  // content/le-02/metadata.ts
  import type { LektionMetadata } from "../_types";

  export const LE02_METADATA: LektionMetadata = {
    leId: "le-02", ceId: "ce-NN", title: "...", titleShort: "...",
    zeitrichtwert: 40, sessionCount: 6,
    geschaetzteLernzeit: { c1: 30, b1: 40 },
    kompetenzbereiche: ["KB-X.Y"], bloomStufen: [1,2,3], voraussetzungen: [],
    glossarCount: 0, quellenCount: 0,
  };
  ```

### Regel F018 — Manifest-Eintrag + Status-Workflow (Engine-Vertrag, 2026-04-16) 🔒 K.O.
- **Problem:** Ohne Eintrag in `content/_manifest.ts` (LE_MANIFEST) kann weder `content/content-loader.ts` noch `scripts/import-content-to-db.ts` die LE finden. Engine lädt nichts.
- **Regel:** Jede LE MUSS in `content/_manifest.ts` registriert sein, mit korrektem `status` für den Pipeline-Fortschritt.
- **Wer trägt wann ein / aktualisiert?**
  | Status | Verantwortlich | Zeitpunkt |
  |--------|---------------|-----------|
  | `rohmaterial` | Dozentin Phase 1 | Nach Rohmaterial-Übergabe |
  | `sessionplan` | Dozentin Phase 2 | Nach Plan-Dateien |
  | `steps` | Generator | Nach TS-Dateien + `tsc --noEmit` PASS |
  | `geprueft` | KI-Prüfer | Nach Prüfbericht PASS |
  | `published` | Mensch | Nach Go-Live |
- **Minimalschema (LeManifestEntry):**
  ```ts
  {
    leId: "le-02",
    ceId: "ce-01",
    ceNumber: 1,
    title: "...",
    titleShort: "...",
    zeitrichtwert: 40,
    sessionCount: 6,
    hasGlossar: true, hasSnack: true, hasFall: true,
    hasPraxis: true, hasPruefung: true,
    status: "rohmaterial",   // wird über die Pipeline hoch-migriert
    sortOrder: 2,
  }
  ```
- **Enforcement:**
  - `validate-le.ts` Check V10 = FAIL wenn `leId` nicht im Manifest
  - `import-content-to-db.ts` skippt Einträge mit `status != "geprueft" | "published"` (außer `--include-draft`)
  - `content-loader.ts` nutzt Manifest als einzige Quelle der LE-Liste
