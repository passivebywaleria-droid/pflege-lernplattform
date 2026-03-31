# Content-Pipeline v2.1 — Phasen-Bogen + Exa Fact-Check

Du führst den kompletten Content-Pipeline für EINE Lektion durch. 4 Schritte nacheinander.

**Voraussetzung:** Rohmaterial ist fertig (`content/le-{N}/rohmaterial.md`).

---

## Schritt 0: Nächste LE finden

1. Lies `didaktik-loop/prd-v2.json`
2. Finde die erste LE mit `"status": "rohmaterial"` (= bereit für Content-Generierung)
3. Merke dir `leId`, `ceId`, `zeitrichtwert`

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
- Diversity-Regeln V1-V6 (Mindestquoten, kein gleiches Gefühl, emotionaler Rhythmus)
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
- Pflichtfelder: `track`, `modus`, `lernziel`, `contentB1`, `themenblockPhase`
- XP per Formel (kein manuelles xpValue)
- 3-Felder-Regel: title≠fragetext, body=Kontext
- Offene Fragen 1:1 aus Rohmaterial Abschnitt F
- **Phasen-spezifischer Ton** (12 Regeln aus Generator Regel 1b)
- **careplan-Steps** bei CE 05 oder KB I (5-Phasen Pflegeprozess)

---

## Schritt 3: Prüfung (Lint + Exa Fact-Check + Didaktik-Prüfer)

### 3a: TypeScript-Check

```bash
npx tsc --noEmit content/le-{N}/steps-s*.ts
```

### 3b: Content-Lint (automatisch)

Content-Lint Checks (manuell gegen die Kriterien in `scripts/content-lint.ts`):
- Diversity-Checks (K.O.): ≥15 Step-Typen, nie gleiches Gefühl
- Pflichtfelder: track, modus, lernziel, contentB1, themenblockPhase
- Textqualität: Satzlänge, Füllsätze, Body-Länge
- Track-Verteilung: 60-70% basis
- Phasen-Bogen: Pflicht-Phasen (0,1,2,3,9,10) pro Themenblock vorhanden

### 3c: Exa Fact-Check (NEU — automatisiert)

```bash
npx ts-node scripts/exa-fact-check.ts content/le-{N}/
```

Prüft automatisch:
- **Halluzinations-Muster**: Mehrabian-Mythos, vage Studienreferenzen, unbelegte Prozentzahlen
- **Quellen-Verifikation**: Fakten mit Zahlen gegen AWMF, DNQP, PubMed, Cochrane
- Output: VERIFIED / UNVERIFIED / SUSPICIOUS pro Fakt
- Bei SUSPICIOUS → manuell gegen Rohmaterial prüfen (→ F11 K.O.)

### 3d: KI-Prüfung (Didaktik-Prüfer)

Lies die Rolle: `.claude/agents/didaktik-pruefer.md`

**Input:**
- Generierte Step-Dateien
- Sessionplan
- Rohmaterial
- Exa Fact-Check Ergebnis (aus 3c)

**Prüfe 55 Kriterien** in 15 Blöcken (A-O).
K.O.-Kriterien: B5 (Wissensaufbau), DIV1 (Vielfalt), DIV2 (Gefühl), F7 (Korrektheit), F10 (Gefahr), F11 (Halluzination).

**Phasen-Bogen-Kriterien (Block M, 6 Stück):**
- M1: `themenblockPhase` bei jedem Step vorhanden
- M2: Pflicht-Phasen (SZENE→ERKLÄRUNG→CHECKPOINT→ANWENDUNG→REFLEXION) pro Themenblock komplett
- M3: Phasen-Reihenfolge korrekt (0→1→2→3→...→9→10)
- M4: CHECKPOINT ist immer MC mit Zeitmessung
- M5: KB-Phasen korrekt zugeordnet
- M6: Score-A-Pfad (nur Pflicht-Phasen) ergibt sinnvollen Lernpfad

**Exa Fact-Check-Kriterien (Block O, 3 Stück):**
- O1: Automatischer Fact-Check ausgeführt
- O2: Keine Halluzinations-Muster erkannt
- O3: UNVERIFIED-Fakten manuell gegen Rohmaterial bestätigt

---

## Schritt 4: Abschluss

### Bei PASS:
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
├── _types.ts               ← TypeScript Interfaces (30 Step-Typen inkl. careplan)
├── _xp-formula.ts           ← XP-Berechnung per Formel
├── _b1-pflegedeutsch.md     ← B1-Sprachregeln (aus Literatur)
├── _pruefungsfragen.md      ← 400+ Prüfungsfragen (aus Literatur)
├── _leitfall-template.md    ← Leitfall-Standardformat (aus Fallbüchern)
├── _kompetenz-mapping.md    ← Lernziel-IDs + PflAPrV-Zuordnung
├── _bild-katalog.md         ← Verfügbare Bilder mit Pfaden
└── content-loader.ts        ← Dynamischer Loader

scripts/
├── content-lint.ts          ← Diversity + Qualitäts-Checks
└── exa-fact-check.ts        ← Halluzinations-Erkennung + Quellen-Verifikation

specs/
└── ADAPTIVER-THEMENBOGEN.md ← Wissenschaftliche Grundlage Phasen-Bogen
```
