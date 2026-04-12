# Content-Pipeline v2.1 — Phasen-Bogen + Exa Fact-Check

Du führst den kompletten Content-Pipeline für EINE Lektion durch. 4 Schritte nacheinander.

**Voraussetzung:** Rohmaterial ist fertig (`content/le-{N}/rohmaterial.md`) + als JSON konvertiert + von Dozentin freigegeben.

---

## Schritt 0: Nächste LE finden + Rohmaterial-Freigabe prüfen

### 0a: Nächste LE identifizieren
1. Lies `didaktik-loop/prd-v2.json`
2. Finde die erste LE mit `"status": "rohmaterial"` (= bereit für Content-Generierung)
3. Merke dir `leId`, `ceId`, `zeitrichtwert`

### 0b: Rohmaterial → Strukturiertes JSON
1. Falls `content/le-{N}/rohmaterial.json` noch nicht existiert:
   ```bash
   npx tsx scripts/convert-rohmaterial.ts le-{N}
   ```
2. JSON manuell nacharbeiten: `schluesselwoerter[]`, `zahlen[]`, `namen[]` prüfen und ergänzen
3. Dozentin-Rohmaterial-Checkliste generieren:
   ```bash
   npx tsx scripts/validate-le.ts le-{N}
   ```
   → Erzeugt `content/le-{N}/dozentin-rohmaterial-checkliste.md`

### 0c: Dozentin-Freigabe Rohmaterial (BLOCKER)
1. Dozentin prüft `dozentin-rohmaterial-checkliste.md` (Fakten + Quellen + Leitfälle)
2. Bei Freigabe: `dozentinFreigabeRohmaterial: true` in `rohmaterial.json` setzen
3. **OHNE Freigabe darf NICHT generiert werden** — Validator blockiert

---

## Schritt 1: Sessionplan erstellen (Didaktik-Regisseur v2)

Lies die Rolle: `.claude/agents/didaktik-regisseur.md`

**Input:**
- `content/le-{N}/rohmaterial.md` — Abschnitte A-K
- `content/_types.ts` — 30 Step-Typen (inkl. careplan)
- `specs/ADAPTIVER-THEMENBOGEN.md` — Wissenschaftliche Grundlage

**Erstelle:** `content/le-{N}/sessionplan.md`

**Beachte:**
- Session-Anzahl = Zeitrichtwert / 5
- CE-Typ-spezifische Gliederung (nicht nur 12-Punkte)
- Track-Zuordnung (basis/vertiefung) für jeden Step
- Diversity-Regeln V1-V6 + V10 Tag-Verteilung (Mindestquoten, kein gleiches Gefühl, emotionaler Rhythmus)
- **3-Säulen-Tag**: Jeder Step bekommt `tag: "anatomie" | "pflege" | "krankheitslehre"` (V10)
- Visuelle Mindestquote: ≥30% Bilder-Spalte ✓
- Lernziel-IDs aus Rohmaterial Abschnitt G
- Leitfälle aus Rohmaterial Abschnitt C (kein separates Dossier)

### NEU: Adaptiver Phasen-Bogen (V4)

Jeder Themenblock folgt dem **11-Phasen-Bogen**:

**Pflicht-Phasen** (immer): BRÜCKE → SZENE → ERKLÄRUNG → CHECKPOINT → ANWENDUNG → REFLEXION

**Adaptive Phasen** (nur bei Score B/C nach Checkpoint):
- Score A (richtig + schnell + sicher) → Skip Phase 4-8 → direkt ANWENDUNG + REFLEXION
- Score B (richtig + langsam/unsicher) → ANDERS ERKLÄRT → dann ANWENDUNG + REFLEXION
- Score C (falsch) → Voller Bogen: ANDERS ERKLÄRT + STORYTELLING + KB-Phasen + ANWENDUNG + REFLEXION

**KB-abhängige Phasen** (bei Score C, je nach Kompetenzbereich):
- KB I → PRAXIS-DIALOG + PATIENTEN-PERSPEKTIVE + PFLEGEPLANUNG
- KB II → PATIENTEN-PERSPEKTIVE + ANGEHÖRIGEN-BERATUNG
- KB III → PRAXIS-DIALOG (Dialog mit Arzt/Team)
- KB IV → PATIENTEN-PERSPEKTIVE + STORYTELLING (Konsequenzen)

**Im Sessionplan**: Jeder Step bekommt eine **Phase**-Spalte.

---

## Schritt 2: Steps generieren (Content-Generator v2)

Lies die Rolle: `.claude/agents/content-generator.md`

**Input:**
- `content/le-{N}/rohmaterial.md`
- `content/le-{N}/sessionplan.md`
- `content/_types.ts`
- `content/_b1-pflegedeutsch.md` (wenn vorhanden)
- `content/_pruefungsfragen.md` (wenn vorhanden)
- `content/_bild-katalog.md` (wenn vorhanden)

**Erstelle:**
- `content/le-{N}/steps-s1.ts` — Session 1 (~22 Steps)
- `content/le-{N}/steps-s2.ts` — Session 2 (~22 Steps)
- `content/le-{N}/steps-s3.ts` — Session 3 (~20 Steps)
- Bei >3 Sessions: `steps-s4.ts`, etc.
- `content/le-{N}/glossar.ts` — aus Rohmaterial Abschnitt B

**Beachte:**
- Exakt dem Sessionplan folgen (1 Step = 1 Step)
- C1 + B1 gleichzeitig (kein separater B1-Pass)
- Pflichtfelder: `track`, `modus`, `lernziel`, `contentB1`, `themenblockPhase`, `tag`
- XP per Formel (kein manuelles xpValue)
- 3-Felder-Regel: title≠fragetext, body=Kontext
- Offene Fragen 1:1 aus Rohmaterial Abschnitt F
- **Phasen-spezifischer Ton** (12 Regeln aus Generator Regel 1b)
- **careplan-Steps** bei CE 05 oder KB I (5-Phasen Pflegeprozess)
- **Dialog-Mindestphasen**: Reguläre Dialoge ≥3 Phasen (Szenenverlauf mit Eskalation). Brücken-Steps (`bk`) dürfen 1-2 Phasen haben.

---

## Schritt 3: Prüfung (5 Auto-Checks → Prüfer Opus → Dozentin → Feedback-Loop)

### 3a: Unified Validator (5 automatische Checks)

```bash
npx tsx scripts/validate-le.ts le-{N}
```

Führt automatisch aus:
1. **Schema-Check**: Zod-Validierung jedes Steps gegen per-stepType Pflichtfelder
2. **Fakten-Check**: Deterministischer Abgleich gegen `rohmaterial.json` (Keywords, Zahlen, Namen, Leitfälle)
3. **MC-Linter**: Bias-Erkennung (Antwortlänge, Fachbegriff-Verteilung, Position)
4. **Dialog-Linter**: Score-Position-Bias (beste Antwort nicht immer auf A)
5. **Glossar-Checker**: Vollständigkeit (Steps↔Glossar↔Rohmaterial, AR/TR-Übersetzungen)

Plus: TSC + Content-Lint

**Output:** Zusammenfassung + `dozentin-checkliste.md` (auto-generiert)

### 3b: Exa Fact-Check (optional, bei Verdacht)

```bash
npx tsx scripts/exa-fact-check.ts content/le-{N}/
```

Prüft: Halluzinations-Muster, Quellen-Verifikation gegen AWMF/DNQP/PubMed/Cochrane.

### 3b2: B1-Sprachprüfung (automatisch + manuell)

**Automatisch:**
```bash
npx tsx scripts/b1-linter.ts le-{N}
```
Prüft: Verbotene Konstruktionen (Partizip I/II, Passiv+Modal, Genitivketten, Konjunktiv I), verbotene Wörter, Komposita >20 Zeichen, Satzlänge >15 Wörter, fehlende B1-Subdatenfelder.

**Manuell (bei Bedarf):**
Lies die Rolle: `.claude/agents/b1-dozentin.md`
- Verständlichkeit für B1-Lerner (nicht nur Syntax)
- Fachbegriff-Einführungsreihenfolge
- Dialog-Natürlichkeit in B1-Sprache

### 3c: KI-Prüfung (Didaktik-Prüfer — Opus)

Lies die Rolle: `.claude/agents/didaktik-pruefer.md`

**Input:**
- Generierte Step-Dateien + Sessionplan + Rohmaterial (MD + JSON)
- Validator-Ergebnis (aus 3a)
- `content/_generator-feedback.md` (bekannte Fehler-Patterns)

**Prüfe 75+ Kriterien** in 17 Blöcken (A-T).
K.O.-Kriterien: B5, DIV1, DIV2, F7, F10, F11 + CQ-O1..CQ-A1.
TAG-Kriterien: TAG1-TAG3.
Phasen-Bogen: M1-M6.
Exa Fact-Check: O1-O3.

### 3d: Dozentin-Steps-Prüfung (100%, PFLICHT)

Dozentin prüft `content/le-{N}/dozentin-checkliste.md`:
- **A) Kernfakt-Abgleich**: Jeder Fakt aus JSON vs. Step-Text (auto-flags: COVERED/PARTIAL/MISSING/MISMATCH)
- **B) Leitfall-Check**: Name + Alter + Diagnose stimmen mit JSON überein
- **C) Glossar + MC + Dialog**: Auto-generierte Warnungen prüfen
- **D) Freigabe**: Alle MISMATCH/MISSING geprüft → Freigabe Steps
- **E) Feedback für Generator (PFLICHT bei Korrekturen)**: Jede Korrektur → neue Regel in `content/_generator-feedback.md`

### 3e: Feedback-Loop

Bei Dozentin-Korrekturen:
1. Korrektur in Steps umsetzen
2. Neue Regel in `content/_generator-feedback.md` eintragen
3. Erneut `validate-le.ts` laufen lassen
4. So lernt der Generator aus jeder Korrektur — gleicher Fehler nie zweimal

---

## Schritt 4: Abschluss

### 4a: Pre-Live-Gate (BLOCKER)

```bash
npx tsx scripts/pre-live-check.ts le-{N}
```

7-Punkt-Checkliste. ALLE müssen ✅ sein:
1. rohmaterial.json existiert + valide
2. Dozentin-Freigabe Rohmaterial
3. Mindest-Steps (≥100)
4. Glossar vorhanden
5. Dozentin-Checkliste Steps freigegeben
6. Generator-Feedback existiert
7. Content-Loader Eintrag

### Bei PASS (alle 7 ✅):
1. PRD updaten: `"status": "geprueft"`
2. Content-Loader aktualisieren: `content/content-loader.ts` — neuen LE-Eintrag hinzufügen
3. Weiter mit nächster LE (Schritt 0)

### Bei FAIL:
1. Korrektur-Anweisungen aus Prüfbericht umsetzen
2. Zurück zu Schritt 2 (nur betroffene Sessions neu generieren)
3. Erneut prüfen (Schritt 3)
4. Max 3 Durchläufe — dann eskalieren

---

## Dateien pro LE (nach Pipeline)

```
content/le-{N}/
├── rohmaterial.md    ← Input (von Recherche-Loop)
├── sessionplan.md    ← Schritt 1 (Regisseur)
├── steps-s1.ts       ← Schritt 2 (Generator)
├── steps-s2.ts       ← Schritt 2
├── steps-s3.ts       ← Schritt 2
├── glossar.ts        ← Schritt 2
└── pruefbericht.md   ← Schritt 3 (optional, bei FAIL)
```

---

## Referenz-Dateien (einmalig, CE-übergreifend)

```
content/
├── _types.ts               ← TypeScript Interfaces (30 Step-Typen inkl. careplan, ContentTag, Organsystem)
├── _xp-formula.ts           ← XP-Berechnung per Formel
├── _b1-pflegedeutsch.md     ← B1-Sprachregeln (aus Literatur)
├── _pruefungsfragen.md      ← 400+ Prüfungsfragen (aus Literatur)
├── _leitfall-template.md    ← Leitfall-Standardformat (aus Fallbüchern)
├── _kompetenz-mapping.md    ← Lernziel-IDs + PflAPrV-Zuordnung
├── _bild-katalog.md         ← Verfügbare Bilder mit Pfaden
├── _patients.ts             ← Globales Patienten-Register (Cross-LE)
└── content-loader.ts        ← Dynamischer Loader (+ Cross-LE Loader)

scripts/
├── content-lint.ts          ← Diversity + Qualitäts-Checks
├── b1-linter.ts             ← B1-Sprachqualität-Linter
└── exa-fact-check.ts        ← Halluzinations-Erkennung + Quellen-Verifikation

specs/
└── ADAPTIVER-THEMENBOGEN.md ← Wissenschaftliche Grundlage Phasen-Bogen
```
