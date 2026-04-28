# LE-Schablone — Universeller Produktionsplan (PDCA)

> Jede Lerneinheit durchläuft exakt diese 7 Meilensteine im PDCA-Zyklus.
> Ein Meilenstein ist erst erreicht wenn ALLE Akzeptanzkriterien ✅ sind.
> Kein Überspringen. Kein "später nachbessern".

---

## Workflow-Übersicht

```
┌─────────────────────────────────────────────────────────────────┐
│                       PDCA-ZYKLUS                               │
├──────────┬──────────────────────────────────────────────────────┤
│          │                                                      │
│  PLAN    │  M1  Dozentin Phase 1: Rohmaterial          ~4h     │
│          │      → 🔒 Veto-Punkt                                │
│          │  M2  Dozentin Phase 2: 7 Plan-Dateien       ~6h     │
│          │      → 🔒 Veto-Punkt                                │
│          │                                                      │
├──────────┼──────────────────────────────────────────────────────┤
│          │                                                      │
│  DO      │  M3a B1-Dozentin: Inline B1 bei 4 Dateien  ~1h     │
│          │  M3b Generator: 8× MD → 11× TS + Barrel     ~2h     │
│          │                                                      │
├──────────┼──────────────────────────────────────────────────────┤
│          │                                                      │
│  CHECK   │  M4  Scripts: 38 automatische Kriterien     ~10m    │
│          │  M5  KI-Prüfer: 27 semantische Kriterien    ~1h     │
│          │      → 🔒 Veto-Punkt                                │
│          │  M6  Kirkpatrick L1+L2 Simulation            ~1h     │
│          │                                                      │
├──────────┼──────────────────────────────────────────────────────┤
│          │                                                      │
│  ACT     │  M7  LIVE (Gate + Deploy + Feedback)        ~30m    │
│          │                                                      │
└──────────┴──────────────────────────────────────────────────────┘

Gesamt pro LE: ~16-20h (bei fehlerfreiem Durchlauf)
Bei 55 LEs: ~880-1100h ≈ 110-138 Arbeitstage ≈ 22-28 Wochen (1 Person)
```

### Agenten

| Agent | Modell | Aufgabe |
|-------|--------|---------|
| **Dozentin** | Opus | Phase 1: Rohmaterial. Phase 2: 8 Plan-Dateien + Manifest-Eintrag. ALLE inhaltlichen Entscheidungen. |
| **B1-Dozentin** | Opus | Inline B1-Versionen bei 4 Plan-Dateien. VOR dem Generator. |
| **Generator** | Sonnet | Nur TypeScript-Formatierer. 8× Markdown + Metadaten + Manifest → 11× .ts (inkl. metadata.ts + index.ts). Keine eigenen Inhalte. |
| **KI-Prüfer** | Opus | 27 semantische Kriterien (Fakten, Ton, Kohärenz). Letzte Verteidigungslinie. |

### 3 Veto-Punkte

```
M1 → Rohmaterial fertig      → 🔒 Zusammenfassung, Veto möglich
M2 → Plan-Dateien fertig     → 🔒 Zusammenfassung, Veto möglich
M5 → Prüfbericht fertig      → 🔒 Zusammenfassung, Veto möglich
```

Automatisch mit Veto-Recht: Workflow läuft durch, Zusammenfassung nach jeder Phase. Kein Einspruch = weiter.

### Feedback-Schleife bei FAIL

```
Prüfer FAIL → IMMER zurück zur Dozentin (nie Generator)
Max 3 Runden → dann Eskalation
Jede Korrektur → neue Regel in _generator-feedback.md
```

---

## Naming-Standard (K.O.) — Engine-Vertrag

> Jede LE muss exakt diesem Schema folgen — sonst lädt die Engine sie nicht.
> Validiert via `npx tsx scripts/validate-le.ts le-{NN}` vor jedem Commit.

### Pflicht-Dateien pro LE (`content/le-{NN}/`)

```
content/le-{NN}/
├── metadata.ts          ← LE{NN}_METADATA (NEU als eigene Datei)
├── artikel.ts           ← LE{NN}_ARTIKEL
├── glossar.ts           ← LE{NN}_GLOSSAR
├── karteikarten.ts      ← LE{NN}_KARTEIKARTEN
├── lern-snack.ts        ← LE{NN}_LERN_SNACK
├── steps-s1.ts          ← LE{NN}_STEPS_S1
├── steps-s2.ts          ← LE{NN}_STEPS_S2
├── ... bis steps-s{N}.ts (laut sessionCount)
├── fallverlaeufe.ts     ← LE{NN}_FALLVERLAEUFE
├── praxis.ts            ← LE{NN}_PRAXIS
├── pruefungsfall.ts     ← LE{NN}_PRUEFUNGSFALL
└── index.ts             ← Barrel-Export, re-exportiert ALLES
```

### Export-Naming (verbindlich)

| Datei | Export-Name | Type |
|-------|-------------|------|
| `metadata.ts` | `LE{NN}_METADATA` | `LektionMetadata` |
| `artikel.ts` | `LE{NN}_ARTIKEL` | `ArtikelKapitel[]` |
| `glossar.ts` | `LE{NN}_GLOSSAR` | `GlossarEntry[]` |
| `karteikarten.ts` | `LE{NN}_KARTEIKARTEN` | `KarteikarteVorlage[]` |
| `lern-snack.ts` | `LE{NN}_LERN_SNACK` | `LernSnack[]` |
| `steps-s{N}.ts` | `LE{NN}_STEPS_S{N}` | `ContentStep[]` |
| `fallverlaeufe.ts` | `LE{NN}_FALLVERLAEUFE` | `Fallverlauf[]` |
| `praxis.ts` | `LE{NN}_PRAXIS` | `PraxisUebung[]` |
| `pruefungsfall.ts` | `LE{NN}_PRUEFUNGSFALL` | `ExamCase` |

**Regeln:**
- Prefix `LE{NN}_` IMMER mit zweistelliger Zahl (`LE01`, nicht `LE1`)
- Prefix immer am ANFANG, nie am Ende (`LE01_GLOSSAR`, nicht `GLOSSAR_LE01`)
- Uppercase mit Underscore-Separator
- Keine Ausnahmen — Generator erzeugt das Pattern stumpf

### Beispiel `index.ts`

```ts
// content/le-01/index.ts
export { LE01_METADATA } from "./metadata"
export { LE01_ARTIKEL } from "./artikel"
export { LE01_GLOSSAR } from "./glossar"
export { LE01_KARTEIKARTEN } from "./karteikarten"
export { LE01_LERN_SNACK } from "./lern-snack"
export { LE01_STEPS_S1 } from "./steps-s1"
export { LE01_STEPS_S2 } from "./steps-s2"
export { LE01_STEPS_S3 } from "./steps-s3"
export { LE01_STEPS_S4 } from "./steps-s4"
export { LE01_STEPS_S5 } from "./steps-s5"
export { LE01_STEPS_S6 } from "./steps-s6"
export { LE01_FALLVERLAEUFE } from "./fallverlaeufe"
export { LE01_PRAXIS } from "./praxis"
export { LE01_PRUEFUNGSFALL } from "./pruefungsfall"
```

### Manifest-Eintrag (Pflicht)

Jede LE muss in `content/_manifest.ts` registriert werden:

```ts
export const LE_MANIFEST: LeManifestEntry[] = [
  {
    leId: "le-01",
    ceId: "ce-01",
    ceNumber: 1,
    title: "Personen- und situationsorientiert professionell pflegen",
    titleShort: "Professionell pflegen",
    zeitrichtwert: 40,
    sessionCount: 6,
    hasGlossar: true,
    hasSnack: true,
    hasFall: true,
    hasPraxis: true,
    hasPruefung: true,
    status: "published",  // "draft" | "published"
    sortOrder: 1,
  },
  // weitere LEs...
]
```

### Warum?

- **Keine Kollisionen** beim gemeinsamen Import mehrerer LEs (vorher: `GLOSSAR` aus LE-01 und LE-06 kollidierten)
- **LE-agnostische Engine**: `import-content-to-db.ts` und `content-loader.ts` lesen aus dem Manifest und nutzen dynamische Imports — keine manuellen Code-Edits pro neuer LE
- **Pipeline-Enforcement**: `validate-le.ts` blockt Commits bei Verstößen
- **Alphabetische Sortierung** gruppiert eine LE zusammen (`LE01_*` steht nicht zwischen `GLOSSAR` und `STEPS_S1`)

---

## Content-Design-Prinzipien

> Gelten für JEDE LE. Vor dem ersten PDCA-Durchlauf festgelegt.

### 5-Tab-Modell

```
Wissen → Üben → Fall → Praxis → Prüfung
   ↑                                    │
   └────────────────────────────────────┘
```

**Tabs sind NICHT gesperrt** — Schüler können jederzeit jeden Tab öffnen.

| Tab | Zweck | Tonalität | KI-Chat |
|-----|-------|-----------|---------|
| **Wissen** | Kapitelweise Wissensvermittlung | Professionell, sachlich | Erklärt, beantwortet Fragen |
| **Üben** | 1:1 pro Wissen-Kapitel — interaktive Aufgaben | Warm, ermutigend | Gibt Hinweise, nie Lösung |
| **Fall** | Fallbeispiele mit benannten Patienten | Empathisch, realistisch | Spielt Rollen |
| **Praxis** | Handlungskompetenz (Rollenspiele, Pflegeplanung) | Coachend | Simuliert Gegenüber |
| **Prüfung** | Prüfungsvorbereitung (offene Fragen, Zeitdruck) | Ernst, prüfungsnah | **Stumm** bis Abgabe |

### Anti-Halluzination (Höchste Priorität)

- **Fakten**: Immer mit `[I Care Band S.XXX]` belegt
- **Transferwissen**: Als `[Transfer]` markiert (Analogien + Szenarien erlaubt)
- **Verboten**: Erfundene Zahlen, Studien, Leitlinien, Fachbegriffe
- **Goldene Regel**: Erfundene Szenarien JA, erfundene Fakten NIE

### Patienten (PflBG-konform, generalistisch)

- **Min 3 Patienten** pro LE: Kind/Jugendlicher + Erwachsener + Alter Mensch
- **Plus 1 neuer Patient** im Prüfungs-Tab (unbekannt, prüfungsnah)
- Alle mit Name, Alter, Persönlichkeit, Zitaten in wörtlicher Rede
- Fall-Komplexität = f(Thema), NICHT f(Ausbildungsdrittel)

### Kapitel → Pfade

- Dozentin entscheidet Mapping mit Pflicht-Begründung
- Default: 1:1 (1 Kapitel = 1 Üben-Pfad)
- Abweichung erlaubt (zusammenlegen oder splitten)

### Sonstiges

- **Gamification**: XP intern, Schüler sieht Kompetenz-%, Lernzeit, Pfade. Kein Konfetti.
- **Bilder**: Nur wo nötig. Dozentin entscheidet.
- **Sprachen**: DE (C1+B1), AR/TR kommen später separat.
- **Anrede**: Schüler = "Du" (DSGVO). Patienten = Name.
- **Umlaute**: ä, ö, ü, ß — NIEMALS ae, oe, ue, ss

---

## PLAN-Phase

---

### M1: Dozentin Phase 1 — Rohmaterial (~4h)

#### Was passiert?
Dozentin liest I Care Kapitel und erstellt Tab-basiertes Rohmaterial mit allen Fakten, Patienten und didaktischen Entscheidungen.

#### Agent: `dozentin.md` (Opus)

#### Input
- `recherche/icare-index/kap-{N}.md` — vorextrahiertes I Care Kapitel
- `didaktik-loop/prd-v2.json` → leId, ceId, zeitrichtwert
- Rahmenlehrplan + PflAPrV

#### Rohmaterial-Struktur (Tab-basiert)

| Block | Inhalt | Pflicht? |
|-------|--------|----------|
| 0. Metadaten | LE-ID, CE-ID, Zeitrichtwert, KB-Zuordnung, Lernziel-IDs | ✅ |
| 1. Wissen-Tab | Kapitelstruktur + Kernfakten (F01-Fxx) mit [I Care Band S.xxx] | ✅ |
| 2. Üben-Tab | Kapitel→Pfad Mapping + Aufgabentypen-Skizze | ✅ |
| 3. Fall-Tab | Min 3 Patienten (3 Altersgruppen) + Aufgaben-Skizze | ✅ |
| 4. Praxis-Tab | Prozeduren + Dokumentation (Dozentin entscheidet) | ✅ |
| 5. Prüfungs-Tab | Neuer 4. Patient + offene Fragen | ✅ |
| 6. Glossar | Alle Fachbegriffe mit C1-Definition + Quelle | ✅ |
| 7. Leitlinien | AWMF/DNQP (wenn klinisch) | Bedingt |

#### Output
- `content/le-{N}/rohmaterial.md`
- `content/le-{N}/rohmaterial.json` (via Script)

#### Akzeptanzkriterien M1
- [ ] Rohmaterial mit allen Pflicht-Blöcken (0-6)
- [ ] ≥30 nummerierte Kernfakten, jeder mit [I Care Band S.xxx]
- [ ] 3 Patienten (Kind, Erwachsener, Alter Mensch) + 1 Prüfungspatient
- [ ] Kapitel→Pfad Mapping mit Begründung
- [ ] Glossar ≥20 Fachbegriffe mit Quellenangabe
- [ ] Lernziel-IDs vergeben
- [ ] 🔒 Veto-Punkt: Zusammenfassung gezeigt, kein Einspruch

---

### M2: Dozentin Phase 2 — 7 Plan-Dateien (~6h)

#### Was passiert?
Dozentin erstellt 7 Markdown-Dateien mit festen Feldern. Jeder Step wird vorskizziert: Step-Typ, Bloom, Track, Tag, Inhalt, Feedback.

#### Agent: `dozentin.md` (Opus)

#### Input
- `content/le-{N}/rohmaterial.md`
- `content/_types.ts` (42 Step-Typen)
- `specs/templates/*.tmpl.md` (7 Templates)

#### Reihenfolge (fest)
1. `artikel-plan.md` (Wissen)
2. `glossar-plan.md`
3. `karteikarten-plan.md`
4. `steps-plan.md` (Üben)
5. `fall-plan.md`
6. `praxis-plan.md`
7. `pruefung-plan.md`

#### Output
- 7 Plan-Dateien in `content/le-{N}/`

#### Akzeptanzkriterien M2
- [ ] 7 Plan-Dateien vorhanden
- [ ] Artikel: Alle Kapitel aus Rohmaterial abgedeckt
- [ ] Steps: 1:1 Üben-Pfad pro Kapitel (oder begründete Abweichung)
- [ ] Steps: ≥25% offene Formate (freetext/cloze/fillin/careplan)
- [ ] Steps: ≥18 verschiedene Step-Typen über alle Pfade
- [ ] Steps: Nie 2× dasselbe Gefühl hintereinander
- [ ] Steps: Bloom-Progression pro Pfad
- [ ] Fall: Min 3 Patienten mit progressiven Aufgaben
- [ ] Prüfung: Neuer 4. Patient, überwiegend offene Fragen
- [ ] Karteikarten: 30-50, min 60% prüfungsrelevant
- [ ] Glossar: Alle Fachbegriffe mit C1-Definition
- [ ] Jeder Step hat: stepType, bloom, track, tag, modus, phase
- [ ] 🔒 Veto-Punkt: Zusammenfassung gezeigt, kein Einspruch

---

## DO-Phase

---

### M3a: B1-Dozentin — Inline B1 (~1h)

#### Was passiert?
B1-Dozentin ergänzt B1-Versionen inline bei 4 Plan-Dateien.

#### Agent: `b1-dozentin.md` (Opus)

#### Input
- 4 Plan-Dateien: artikel-plan, steps-plan, glossar-plan, karteikarten-plan
- `content/_b1-pflegedeutsch.md`

#### Output
- Die 4 Plan-Dateien — jetzt mit C1 + B1 inline

#### Akzeptanzkriterien M3a
- [ ] Alle 4 Dateien haben B1-Versionen inline
- [ ] B1-Sätze ≤15 Wörter
- [ ] Fachbegriffe beibehalten und erklärt
- [ ] Keine verbotenen Konstruktionen (Passiv+Modal, Partizipial, Genitiv)

---

### M3b: Generator — Markdown → TypeScript (~2h)

#### Was passiert?
Generator konvertiert 8 Plan-Dateien (jetzt C1+B1) + Rohmaterial-Metadaten in 11 TypeScript-Dateien. Erzeugt zusätzlich `metadata.ts` + Barrel `index.ts` und aktualisiert den Manifest-Status. Keine eigenen Inhalte.

#### Agent: `content-generator.md` (Sonnet)

#### Input
- 8 Plan-Dateien (C1+B1): artikel, glossar, karteikarten, lern-snack, steps, fall, praxis, pruefung
- Rohmaterial-Metadatenblock (für `metadata.ts`)
- `content/_manifest.ts` (LE-Registry)
- `content/_types.ts`
- `content/_xp-formula.ts`
- `content/_generator-feedback.md` (inkl. F015-F018 Naming + Manifest)

#### Output — 11 Pflicht-Dateien (Naming-Standard F015/F016/F017 K.O.)
```
content/le-{N}/
├── metadata.ts           (LE{NN}_METADATA)
├── artikel.ts            (LE{NN}_ARTIKEL)
├── glossar.ts            (LE{NN}_GLOSSAR)
├── karteikarten.ts       (LE{NN}_KARTEIKARTEN)
├── lern-snack.ts         (LE{NN}_LERN_SNACK)
├── steps-s1.ts ... steps-s{N}.ts  (LE{NN}_STEPS_S{N})
├── fallverlaeufe.ts      (LE{NN}_FALLVERLAEUFE)
├── praxis.ts             (LE{NN}_PRAXIS)
├── pruefungsfall.ts      (LE{NN}_PRUEFUNGSFALL)
└── index.ts              (Barrel — re-exportiert alle oben)
```

**Plus:** Status-Update in `content/_manifest.ts` auf `status: "steps"`.

#### Akzeptanzkriterien M3b
- [ ] Alle 11 TypeScript-Dateien vorhanden (inkl. metadata.ts + index.ts)
- [ ] Alle Exports folgen `LE{NN}_*` Schema (F015)
- [ ] `metadata.ts` separat (NICHT in steps-s1.ts — F017)
- [ ] `index.ts` re-exportiert alle 10 Dateien (F016)
- [ ] Manifest-Eintrag existiert + `status: "steps"` (F018)
- [ ] `npx tsc --noEmit` → 0 Fehler
- [ ] `npx tsx scripts/validate-le.ts le-{NN}` → Check N = PASS
- [ ] Inhalt 1:1 aus Plan übernommen (keine Ergänzungen)
- [ ] Pflichtfelder vollständig
- [ ] Renderer-Kompatibilität (P1, P2, P5, P7)

---

## CHECK-Phase

---

### M4: Scripts — 38 automatische Kriterien (~10 Min)

#### Kommando
```bash
npx tsc --noEmit
npx tsx scripts/validate-le.ts le-{N}
npx tsx scripts/b1-linter.ts le-{N}
```

#### 38 Kriterien (automatisch)

| Block | Kriterien | Was das Script zählt/prüft |
|-------|-----------|---------------------------|
| Rhythmus (A) | A1-A5 | Step-Typ-Wiederholungen, Modus-Count, Wechsel |
| Offene Fragen (D) | D1-D2 | Freetext-Verteilung + Abstände |
| Interleaving (E) | E1, E3 | Quote, Wiederholungs-Count |
| Redundanz (G) | G1, G3-G6 | String-Vergleiche Title≠Fragetext≠Body |
| Pflichtfelder (H) | H1-H4 | lernziel, track, modus vorhanden |
| Diversity (K) | DIV1, DIV3-DIV6 | Step-Typ-Count, Kategorien |
| B1-Felder (L) | L3, L8 | contentB1 + Subdatenfelder vorhanden |
| Phasen (M) | M1-M4 | Phase vorhanden, Reihenfolge, Checkpoint=MC |
| Renderer (P) | P1, P2, P5 | dialogPhases, nested fields, comparison |
| Neue Typen (S) | S1-S4 | wordorder/calculation/chatSim/matrix Felder |
| Tags (T) | TAG1-TAG3 | Tag vorhanden, alle 3 pro Session |
| Karteikarten (KK) | KK1-KK4 | Anzahl, Prüfungsrelevanz, Kategorien |
| displayFormat (R) | R1 | Format-Count pro Session |

#### Akzeptanzkriterien M4
- [ ] Schema: 0 Fehler
- [ ] TypeScript: 0 Fehler
- [ ] B1-Linter: 0 verbotene Konstruktionen
- [ ] Alle 38 Kriterien PASS

---

### M5: KI-Prüfer — 27 semantische Kriterien (~1h)

#### Agent: `didaktik-pruefer.md` (Opus)

#### 27 Kriterien (6 K.O.)

| Block | Kriterien | K.O. |
|-------|-----------|------|
| Fakten-Treue (F) | F7, F10, F11 | 3× K.O. |
| Didaktische Kohärenz (B) | B5 | K.O. |
| Textqualität (I) | I1-I7 | I7 K.O. |
| B1-Qualität (L) | L2, L4-L7 | — |
| Renderer-Semantik (P) | P3, P4, P6, P7 | P6 K.O. |
| Redundanz (G) | G2 | — |
| Visual (Q) | Q7-Q9 | — |
| displayFormat (R) | R2 | — |
| Tonalität + Glossar (CQ) | CQ-T2, CQ-G1, CQ-G2 | — |

#### Output
- `content/le-{N}/pruefbericht.md`

#### Akzeptanzkriterien M5
- [ ] 0 K.O.-Kriterien verletzt
- [ ] ≥24/27 Kriterien bestanden
- [ ] 🔒 Veto-Punkt: Prüfbericht gezeigt, kein Einspruch

#### Bei FAIL
→ Zurück zur Dozentin (IMMER, nie zum Generator)
→ Dozentin korrigiert Plan → B1-Dozentin updated → Generator neu → Scripts → Prüfer
→ Max 3 Runden, dann Eskalation

---

### M6: Kirkpatrick L1+L2 Simulation (~1h)

#### Was passiert?
Simulierter Lerner durchläuft alle 5 Tabs und bewertet Reaktion + Lernerfolg.

#### Level 1: Reaktion (pro Tab)

| # | Frage | Akzeptabel |
|---|-------|------------|
| R1 | War das Lernen interessant? | ≥3/5 |
| R2 | War die Sprache verständlich? | ≥4/5 |
| R3 | Fühlte ich mich überfordert? | ≤2/5 |
| R4 | Wollte ich weitermachen? | ≥3/5 |
| R5 | War der Leitfall nachvollziehbar? | ≥3/5 |
| R6 | Passt die Tonalität zum Tab? | ≥4/5 |

**L1 PASS wenn:** Durchschnitt ≥3.5 pro Tab

#### Level 2: Lernerfolg

| # | Test | Akzeptabel |
|---|------|------------|
| L1 | MC-Beantwortbarkeit (nur mit Wissen-Tab) | ≥90% |
| L2 | Glossar-Recall (10 Begriffe) | ≥7/10 |
| L3 | Leitfall-Transfer (neue Situation) | Plausibel lösbar |
| L4 | Fakten-Reproduktion (10 Fakten) | ≥7/10 |
| L5 | Offene Frage (Prüfungs-Tab) | Kernaussagen ableitbar |
| L6 | Üben→Wissen-Kohärenz | Pfade decken Kapitel ab |
| L7 | Tab-Kreislauf natürlich | Fließend, kein Bruch |

#### Output
- `content/le-{N}/kirkpatrick-report.md`

---

## ACT-Phase

---

### M7: LIVE — Gate + Deploy + Feedback (~30 Min)

#### Schritte
1. `npx tsx scripts/pre-live-check.ts le-{N}` — Gate
2. `npm run build` — Production-Build
3. Content-Loader: LE registriert
4. PRD: `"status": "geprueft"`
5. Deploy: `npx vercel --prod`
6. Smoke-Test: Jede Session öffnen, 3 Steps durchklicken
7. Feedback in `_generator-feedback.md`

---

## Tracking: STATUS.md pro LE

```markdown
# LE-{N} Status

| Phase | Meilenstein | Status | Datum |
|-------|-------------|--------|-------|
| PLAN | M1 Rohmaterial | ❌ | — |
| PLAN | M2 7 Plan-Dateien | ❌ | — |
| DO | M3a B1-Inline | ❌ | — |
| DO | M3b Generator → TS | ❌ | — |
| CHECK | M4 Scripts (38) | ❌ | — |
| CHECK | M5 KI-Prüfer (27) | ❌ | — |
| CHECK | M6 Kirkpatrick | ❌ | — |
| ACT | M7 LIVE | ❌ | — |
```

---

## Dateien pro LE (nach PDCA)

```
content/le-{N}/
├── rohmaterial.md                    ← M1
├── rohmaterial.json                  ← M1
├── artikel-plan.md                   ← M2 (+ B1 aus M3a)
├── glossar-plan.md                   ← M2 (+ B1 aus M3a)
├── karteikarten-plan.md              ← M2 (+ B1 aus M3a)
├── lern-snack-plan.md                ← M2
├── steps-plan.md                     ← M2 (+ B1 aus M3a)
├── fall-plan.md                      ← M2
├── praxis-plan.md                    ← M2
├── pruefung-plan.md                  ← M2
├── metadata.ts                       ← M3b  (LE{NN}_METADATA)
├── artikel.ts                        ← M3b  (LE{NN}_ARTIKEL)
├── glossar.ts                        ← M3b  (LE{NN}_GLOSSAR)
├── karteikarten.ts                   ← M3b  (LE{NN}_KARTEIKARTEN)
├── lern-snack.ts                     ← M3b  (LE{NN}_LERN_SNACK)
├── steps-s1.ts ... steps-s{N}.ts    ← M3b  (LE{NN}_STEPS_S{N})
├── fallverlaeufe.ts                  ← M3b  (LE{NN}_FALLVERLAEUFE)
├── praxis.ts                         ← M3b  (LE{NN}_PRAXIS)
├── pruefungsfall.ts                  ← M3b  (LE{NN}_PRUEFUNGSFALL)
├── index.ts                          ← M3b  (Barrel)
├── pruefbericht.md                   ← M5
├── kirkpatrick-report.md             ← M6
└── STATUS.md                         ← Tracking

Plus zentral: content/_manifest.ts — Eintrag ab M2 (Dozentin), Status durchgereicht
```

---

## Reihenfolge der 55 LEs

| Priorität | LEs | Begründung |
|-----------|-----|------------|
| P1 | LE-01 | Schablone perfektionieren + validieren |
| P2 | LE-02 bis LE-05 | CE-01 komplett → erste verkaufbare Einheit |
| P3 | LE-06, LE-08 | Teilweise vorhanden, nur CHECK-Phase nötig |
| P4 | Rest CE-05 | Klinische Inhalte = hoher Bedarf |
| P5 | Alle anderen | Nach Ausbildungsdrittel |
