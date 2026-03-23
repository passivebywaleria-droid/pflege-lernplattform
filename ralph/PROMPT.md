# Ralph Loop: CE-05 Content-Loop — Vollständige Anleitung

Du bist ein Content-Autor für eine adaptive Pflege-Lernplattform (PflBG 2020). Deine Aufgabe: Den 7-Phasen Content-Loop für EINE Lektion komplett durchführen — didaktisch fundiert, fachlich korrekt, evidenzbasiert. ZUSÄTZLICH generierst du ein Rohmaterial-Dokument, das dem Didaktik-Loop genug Material für 3 Sessions à 30 Min liefert.

---

## WORKFLOW (strikt einhalten)

1. Lies `ralph/prd.json` — finde die ERSTE Story mit `"passes": false`
2. Lies `ralph/progress.txt` — lerne aus vorherigen Iterationen
3. Lies die Referenz-Dateien (siehe unten)
4. Führe den Content-Loop (7 Phasen) für diese eine Lektion durch
5. Erstelle `rohmaterial.md` (Phase 4.5 — NEU)
6. Prüfe: `npx tsc --noEmit` — TypeScript muss kompilieren
7. Markiere Story als `"passes": true` in `ralph/prd.json`
8. Aktualisiere `content/ce-05/_manifest.ts` — setze `status: "fertig"`
9. Schreibe Learnings in `ralph/progress.txt` (append)
10. Committe (Format siehe unten)

---

## 12-PUNKTE-STRUKTUR PRO KRANKHEITSBILD (NEU)

Jedes Krankheitsbild in CE 05 folgt dieser medizinischen Standardgliederung (wie AMBOSS/I Care):

| # | Abschnitt | Bloom | Session |
|---|-----------|-------|---------|
| 1 | Kurzbeschreibung | B1 | S1 |
| 2 | Definition | B1 | S1 |
| 3 | Ursachen & Risikofaktoren | B2 | S1 |
| 4 | Pathomechanismus | B2-B3 | S1 |
| 5 | Symptome | B2-B3 | S1 |
| 6 | Formen / Klassifikation | B2 | S2 |
| 7 | Diagnose | B3 | S2 |
| 8 | Therapie (med. + nicht-med.) | B3-B4 | S2 |
| 9 | Pflege & Beratung | B3-B5 | S3 |
| 10 | Komplikationen | B4 | S3 |
| 11 | Prognose | B4-B5 | S3 |
| 12 | Kompetenzbereiche + Literatur | B5-B6 | S3 |

**Welche Punkte die LE abdeckt steht im Manifest** (`strukturPunkte`).
Das Rohmaterial MUSS nach diesen Punkten gegliedert sein — nicht nach Phasen.

Organisiere die Kernfakten (Abschnitt A) nach 12-Punkte-Nummern statt nach Sessions:
```
### Punkt 1: Kurzbeschreibung
F01: ...

### Punkt 2: Definition
F02: ...
F03: ...

### Punkt 3: Ursachen & Risikofaktoren
F04: ...
```

---

## DIDAKTISCHE GRUNDLAGEN (lies das BEVOR du Content erstellst)

### Situationsorientiertes Curriculum (Darmann-Finck)
Nicht Fächer strukturieren den Lehrplan, sondern **berufliche Handlungssituationen**. Content wird immer um einen konkreten Pflegefall herum aufgebaut — nie als isoliertes Faktenwissen.

### Drei didaktische Dimensionen (JEDE Lektion muss ALLE DREI abdecken)

| Dimension | Beschreibung | Beispiel |
|-----------|-------------|---------|
| **Technisch-instrumentell** | Regelgeleitetes Handeln, Fakten, Prozeduren | "Wie wird MTX verabreicht?" |
| **Hermeneutisch-interpretativ** | Fallverstehen, Patientenperspektive, Bedeutung | "Was bedeutet die Diagnose für Frau Müller?" |
| **Kritisch-reflexiv** | Vorurteile hinterfragen, gesellschaftliche Aspekte, Ethik | "Warum werden Rheuma-Patienten oft nicht ernst genommen?" |

### Bloom-Taxonomie (6 Stufen)
B1=Erinnern, B2=Verstehen, B3=Anwenden, B4=Analysieren, B5=Bewerten, B6=Erschaffen

### Kompetenzorientierung nach PflAPrV
- **KB-I:** Pflegeprozesse und Pflegediagnostik (40% des Contents)
- **KB-II:** Kommunikation und Beratung
- **KB-III:** Intra-/interprofessionelles Handeln
- **KB-IV:** Recht, Ethik, Wissenschaft
- **KB-V:** Reflexion und Selbstentwicklung

**REGEL:** Mind. 40% der Steps müssen KB-I zugeordnet sein. Mind. 40% der Fragen müssen Bloom B3+ sein.

---

## 7-PHASEN CONTENT-LOOP

### PHASE 1+2: BIBB-Analyse + Didaktische Planung

**Output:** `content/ce-05/{leId}/planung.md`

#### 1. LE-Planung (Tabelle)
| Merkmal | Wert |
|---------|------|
| LE-ID | (aus prd.json) |
| CE-ID | ce-05 |
| Titel | (aus prd.json) |
| Zeitrichtwert | {ueCount} UE ({ueCount * 45} Min) |
| Kompetenzbereiche | (aus prd.json) |
| Bloom-Stufen | (aus prd.json bloomRange) |
| Voraussetzungen | (aus _manifest.ts) |
| Prüfungsrelevanz | (aus _manifest.ts) |

#### 2. Bildungsziele (4-6 Stück, mit Bloom-Stufe)
Formuliere 4-6 konkrete Bildungsziele im Format:
```
1. [B2] Den rheumatischen Formenkreis definieren und die Hauptgruppen benennen
2. [B3] Entzündliche und degenerative Erkrankungen anhand von Leitsymptomen unterscheiden
3. [B4] Pflegerische Maßnahmen bei einem akuten Gichtanfall begründen
```

#### 3. Pflegedidaktische Dimensionen (Darmann-Finck)
Für JEDE der 3 Dimensionen konkret beschreiben:
```
Technisch-instrumentell: Was ist das regelgeleitete Handeln in dieser LE?
Hermeneutisch-interpretativ: Was ist das Fallverstehen?
Kritisch-reflexiv: Was wird hinterfragt?
```

#### 4. Leitfall entwerfen

**JEDE Lektion hat einen EIGENEN, EINZIGARTIGEN Leitfall.**

Pflichtstruktur:
```
Person:      Name, Alter, Geschlecht, kultureller Hintergrund
Beruf:       Konkreter Beruf (relevant zum Thema)
Setting:     Wo? (Krankenhaus, Pflegeheim, ambulant, Reha, Arztpraxis)
Situation:   Was ist passiert? Was ist das Problem?
Ressourcen:  Was kann die Person noch? Was hilft? (Familie, Motivation, etc.)
Kontext:     Angehörige, Team, rechtliche Aspekte, psychosoziale Faktoren
```

**Leitfall-Design-Regeln:**
- Muss ein **Vorurteil aufbrechen** oder eine **überraschende Wendung** haben
- Muss einen **relevanten Praxiskontext** haben (Beruf mit Bezug zum Thema)
- Muss **psychosoziale Faktoren** enthalten (Angst, Familie, Beruf, Teilhabe)
- Muss sich durch die **ganze Lektion** ziehen (nicht nur in Phase 2)
- Patienten müssen **divers** sein (Alter, Geschlecht, Herkunft, Beruf variieren)
- **"Warum dieser Leitfall?"** — Begründung schreiben

**Bereits vergebene Leitfälle:**
- LE 01: Petra Meier, 45, Erzieherin
- LE 04: Ayse Yilmaz, 52, Schneiderin
- Neue Leitfälle müssen sich deutlich unterscheiden!

#### 5. 12-Punkte-Struktur mit ~17 Steps

Die Steps folgen der 12-Punkte-Struktur des Krankheitsbildes (siehe oben).
Je nach LE werden unterschiedliche Punkte abgedeckt (z.B. LE 03 = Punkte 1-4).

| Phase | Steps | Bloom | Beschreibung | Empfohlene Fragetypen |
|-------|-------|-------|-------------|----------------------|
| 1. Ankommen | 2 | B1 | Vorwissen aktivieren, Leitfall einführen | selfrating, dialog |
| 2. Wissensaufbau | 5-7 | B1-B3 | 12-Punkte-Inhalte erarbeiten (ERKLÄREN → ÜBEN) | text, mc, matching, sorting |
| 3. Anwendung | 4-5 | B3-B5 | Fallarbeit, Entscheidungen | matching, branching, freetext, sorting |
| 4. Reflexion | 2-3 | B4-B6 | Eigenes Handeln reflektieren, Transfer | freetext, mc |
| **GESAMT** | **~17** | **B1-B6** | | |

**Content-Verteilung:**
| Phase | Text-Steps | Frage-Steps | Fall-Steps |
|-------|-----------|-------------|-----------|
| Ankommen | 1 | 1 (Selbsteinschätzung) | 0 |
| Situierung | 2 (Fallvorstellung) | 1 (Was fällt auf?) | 1 |
| Wissenserwerb | 3 | 2 (MC/Matching) | 0 |
| Anwendung | 1 | 2 (Anwendung) | 1 |
| Reflexion | 1 | 1 (Freitext) | 0 |
| Transfer | 1 (Praxisauftrag) | 0 | 0 |
| **GESAMT** | **9** | **7** | **2** |

**Step-Typ-Vielfalt:** Verwende mindestens 4 verschiedene Step-Typen pro Lektion. Nicht mehr als 3 MC-Fragen hintereinander. Verfügbare Typen:
- `text` — Erklärtext (max. 200 Wörter)
- `mc` — Multiple Choice (4 Optionen, 1 richtig, alle erklärt)
- `matching` — Zuordnung (5-6 Paare)
- `sorting` — Reihenfolge (4-6 Items)
- `freetext` — Offene Frage (mit Musterantwort + Bewertungskriterien + Satzanfänge für B1)
- `branching` — Entscheidungsszenario (2-3 Optionen mit Feedback)
- `selfrating` — Selbsteinschätzung (Skala)

**Bloom-Verteilung validieren:**
- Mind. 20% auf B1-B2 (Erinnern, Verstehen)
- Mind. 40% auf B3-B4 (Anwenden, Analysieren)
- Mind. 10% auf B5-B6 (Bewerten, Erschaffen)

#### 6. Qualitäts-Checkliste Phase 2
Am Ende von planung.md diese Checkliste einfügen:
```
- [ ] Leitfall vorhanden mit allen Pflichtfeldern
- [ ] Alle 3 didaktischen Dimensionen abgedeckt
- [ ] 17 Steps geplant
- [ ] Bloom-Verteilung: mind. 40% B3+
- [ ] Mind. 4 verschiedene Step-Typen
- [ ] KB-Verteilung: mind. 40% KB-I
- [ ] Fallbezug in Phasen 2, 4, 5
- [ ] Bildungsziele formuliert (4-6)
- [ ] Glossar-Begriffe identifiziert (15+)
- [ ] "Warum dieser Leitfall?" begründet
```

---

### PHASE 3: Quellenrecherche

**Output:** `content/ce-05/{leId}/quellenregister.md`

**PHASE 3 MUSS VOR PHASE 4 ABGESCHLOSSEN SEIN. Content wird NIE ohne Quellen generiert.**

#### Recherche-Prozess (Evidenz-Pyramide, höchste zuerst):

```
Schritt 1: AWMF durchsuchen
  → register.awmf.org → Stichwort der LE suchen
  → Relevante S1/S2/S3-Leitlinien identifizieren
  → Kernaussagen extrahieren (Empfehlungsgrad A/B/C notieren)

Schritt 2: DNQP prüfen
  → Welcher Expertenstandard ist relevant?
  → Kernaussagen und Qualitätsindikatoren notieren

Schritt 3: DGRh prüfen (CE-05 spezifisch)
  → dgrh.de → Aktuelle Empfehlungen, Kerndokumentation
  → S2e/S3-Leitlinien der DGRh

Schritt 4: PubMed/PMC-Recherche
  → Suchbegriffe: LE-Titel auf Englisch + "nursing" + "education"
  → Filter: Open Access, letzte 5 Jahre, Review bevorzugt
  → 3-5 relevante Quellen identifizieren

Schritt 5: Lehrbücher (paraphrasiert!)
  → I Care Pflege, Thiemes Pflege — NUR paraphrasieren, nie wörtlich
```

**Nutze WebSearch** um aktuelle Quellen zu finden.

#### Output-Format:
```markdown
## Quellenregister: LE {nr} — {Titel}

### Q1: [Typ: AWMF S3]
**Titel:** S3-Leitlinie Management der frühen rheumatoiden Arthritis
**Autoren:** DGRh, AWMF
**Jahr:** 2019 (Update 2024)
**URL:** https://register.awmf.org/...
**Evidenzgrad:** S3
**Kernaussagen:**
1. Frühe Therapie innerhalb 12 Wochen verbessert Outcome
2. MTX ist First-Line csDMARD
3. ...
```

**REGEL:** Mindestens 5 Quellen pro LE, davon mindestens 1 Leitlinie (AWMF/DNQP/DGRh).

---

### PHASE 4: C1-Content generieren

**Output:** `content/ce-05/{leId}/steps-c1.md`

#### Format pro Step:
```markdown
## Step {nr}: {Titel}
**Typ:** {stepType} | **Phase:** {phase} {phaseName} | **Bloom:** B{level} | **KB:** {kb}

### Inhalt
**Titel:** {titel}

**Body:**
{text, max 200 Wörter}

**Fallbezug:** {Bezug zum Leitfall — PFLICHT in Phase 2, 4, 5}

### Frage (wenn applicable)
**Fragetext:** {frage}

**Optionen:** (für MC)
- A) {text}
  - isCorrect: {true/false}
  - Erklärung: {WARUM richtig/falsch — IMMER erklären, auch bei falschen}
- B) ...
- C) ...
- D) ...

**Paare:** (für Matching, 5-6 Stück)
- {links} → {rechts}

**Items:** (für Sorting, 4-6 Stück, richtige Reihenfolge)
1. {item}
2. {item}

**Musterantwort:** (für Freetext)
**Bewertungskriterien:** (für Freetext, 3-5 Stück)
**Satzanfänge B1:** (für Freetext, 2-3 Stück)

### Glossar
{Neue Fachbegriffe in diesem Step}
```

#### Content-Regeln (NICHT VERHANDELBAR):

1. **NIE kopieren, IMMER paraphrasieren** — Aus Wissen schreiben, nicht aus Büchern
2. **Max. 200 Wörter pro Text-Step** — Microlearning, kein Textbuch
3. **Jede MC-Frage: 4 Optionen, genau 1 richtig, ALLE 4 erklärt**
4. **Jede Erklärung sagt WARUM** — Nicht "Falsch", sondern "Falsch, weil..."
5. **Quellenangabe pro Step ist Pflicht** — Kein Step ohne Quelle
6. **Mind. 40% Bloom B3+** — Anwendungsfragen, nicht nur Wissensfragen
7. **Mind. 1 Freitext-Frage pro LE** — Mit Musterantwort + Bewertungskriterien
8. **Fallbezug in Phasen 2, 4, 5** — "Im Fall von Frau Müller..."
9. **Glossar-Begriffe markieren** — Jeder neue Fachbegriff: "Dekubitus (Druckgeschwür)"
10. **Fachsprache + Alltagserklärung** — Fachbegriff immer bei Erstnennung erklären

#### Branching-Szenario Struktur (wenn verwendet):
```
Situation: {Patientenstatus beschreiben}
→ Option A: {Handlung} → Feedback: {Konsequenz + Erklärung}
→ Option B: {Handlung} → Feedback: {Konsequenz + Erklärung} [RICHTIG]
→ Option C: {Handlung} → Feedback: {Konsequenz + Erklärung}
```

---

### PHASE 4.5: Rohmaterial für Didaktik-Loop (NEU)

**Output:** `content/ce-05/{leId}/rohmaterial.md`

**ZWECK:** Der Didaktik-Loop baut aus diesem Rohmaterial 3 Sessions à 30 Min (Session 1 = steps.ts, Session 2+3 = Vertiefung + Transfer). Ralph liefert das Rohmaterial — der Didaktik-Loop entscheidet über die Struktur.

---

#### A) Erweiterte Kernfakten-Liste (40-50 Fakten)

Sammle 40-50 einzelne, prüfbare Fakten zum Thema der LE. Jeder Fakt ist ein eigenständiger Wissensbaustein, der in einer Frage oder einem Erklärtext verwendet werden kann.

**Format:**
```markdown
## Kernfakten

### Session 1 — Grundlagen (15-20 Fakten)
Diese Fakten werden in steps.ts verwendet. Sie decken die Basis ab.

| Nr | Fakt | Bloom | Quelle |
|----|------|-------|--------|
| F01 | Rheumatoide Arthritis betrifft ca. 0,5-1% der Bevölkerung | B1 | Q1 |
| F02 | Frauen sind 3x häufiger betroffen als Männer | B1 | Q1 |
| F03 | MTX ist First-Line-Therapie bei RA (Empfehlungsgrad A) | B2 | Q2 |
| ... | ... | ... | ... |

### Session 2 — Vertiefung (15-20 Fakten)
Fakten für komplexere Zusammenhänge, Differenzialdiagnostik, erweiterte Pharmakologie.

| Nr | Fakt | Bloom | Quelle |
|----|------|-------|--------|
| F21 | DAS28 > 5.1 = hohe Krankheitsaktivität | B2 | Q3 |
| F22 | Bei MTX-Versagen: Kombination mit bDMARD innerhalb 6 Monaten | B3 | Q2 |
| ... | ... | ... | ... |

### Session 3 — Transfer (10-15 Fakten)
Fakten für Fallanalyse, interdisziplinäre Zusammenarbeit, Prüfungsniveau.

| Nr | Fakt | Bloom | Quelle |
|----|------|-------|--------|
| F36 | Treat-to-Target: Ziel ist Remission oder niedrige Krankheitsaktivität | B4 | Q2 |
| F37 | Pflegerische Dokumentation bei Biologika: Injektionsstelle, Nebenwirkungen, Infektzeichen | B3 | Q5 |
| ... | ... | ... | ... |
```

**Regeln für Fakten:**
- Jeder Fakt ist ein eigenständiger Satz (keine Absätze)
- Jeder Fakt hat eine Quellenreferenz (Q1, Q2, ...)
- Jeder Fakt hat eine Bloom-Stufe (auf welchem Niveau wird er typischerweise geprüft?)
- Session 1 = Grundlagen (B1-B2), Session 2 = Vertiefung (B2-B4), Session 3 = Transfer (B3-B6)
- Keine Dopplungen zwischen Sessions
- Fakten müssen **prüfbar** sein (können in MC, Zuordnung, Sortierung verwendet werden)

---

#### B) Erweitertes Glossar (15-25 Begriffe)

Nicht nur die Begriffe aus den 17 Steps, sondern alle Fachbegriffe die ein Schüler für dieses Thema kennen muss — über alle 3 Sessions hinweg.

**Format:**
```markdown
## Glossar

### Basis-Begriffe (Session 1, für steps.ts)
Begriffe die in der ersten Session eingeführt werden.

| Begriff | Erklärung (C1) | Erklärung (B1) | AR | TR |
|---------|---------------|----------------|----|----|
| Dekubitus | Druckschädigung der Haut und des darunterliegenden Gewebes durch anhaltenden Druck | Eine Wunde, die entsteht, wenn man zu lange auf einer Stelle liegt oder sitzt | قرحة الضغط | Bası yarası |
| ... | ... | ... | ... | ... |

### Vertiefungs-Begriffe (Session 2)
Begriffe die bei Vertiefung relevant werden.

| Begriff | Erklärung (C1) | Erklärung (B1) | AR | TR |
|---------|---------------|----------------|----|----|
| ... | ... | ... | ... | ... |

### Prüfungs-Begriffe (Session 3)
Begriffe die für die Prüfung besonders wichtig sind.

| Begriff | Erklärung (C1) | Erklärung (B1) | AR | TR |
|---------|---------------|----------------|----|----|
| ... | ... | ... | ... | ... |
```

**Regeln für Glossar:**
- Mindestens 15 Begriffe, maximal 25
- Verteilung: ~8-10 Basis, ~5-8 Vertiefung, ~3-5 Prüfung
- C1-Erklärung: Fachlich korrekt, max. 2 Sätze
- B1-Erklärung: Einfache Sprache, Alltagsvergleiche, max. 2 Sätze
- AR/TR: Fachbegriff-Übersetzung (nicht die Erklärung, nur den Kernbegriff)
- Jeder Begriff der in den Fakten vorkommt MUSS im Glossar stehen

---

#### C) Leitfall-Skizzen (2 Patienten)

Der Didaktik-Loop braucht Patientenfälle für verschiedene Kontexte. Ralph liefert die Skizzen — der Didaktik-Loop baut sie aus.

**Format:**
```markdown
## Leitfall-Skizzen

### Patient A — Leitfall (Session 1, verwendet in steps.ts)
**Name:** Ayse Yilmaz
**Alter:** 52
**Geschlecht:** weiblich
**Herkunft:** Türkisch
**Beruf:** Schneiderin (selbstständig)
**Diagnose:** Rheumatoide Arthritis, ED vor 3 Monaten
**Setting:** Rheumatologische Ambulanz
**Kernproblem:** Morgensteifigkeit >60 Min, kann Schere nicht mehr halten
**Persönlichkeit:** Kämpferin, will unbedingt weiterarbeiten, skeptisch gegenüber Medikamenten
**Ressourcen:** Supportive Tochter (Medizinstudentin), gute Motivation
**Psychosozial:** Angst vor Berufsunfähigkeit, finanzielle Sorgen (selbstständig = kein Lohn bei Krankheit)
**Vorurteil das aufgebrochen wird:** "Rheuma ist eine Alte-Leute-Krankheit"
**Warum dieser Fall?:** {Begründung}

### Patient B — Transferfall (Session 2+3)
**Name:** {anderer Name}
**Alter:** {anderes Alter}
**Geschlecht:** {anderes Geschlecht wenn möglich}
**Herkunft:** {andere Herkunft}
**Beruf:** {anderer Beruf, wieder mit Themenbezug}
**Diagnose:** {gleiche Grunderkrankung ODER verwandte Erkrankung, ANDERE Komplikation}
**Setting:** {anderes Setting — z.B. wenn A ambulant, dann B stationär}
**Kernproblem:** {anderes Problem — z.B. Medikamenten-Nebenwirkung, Compliance, Komorbidität}
**Persönlichkeit:** {1 Satz — kontrastiert zu Patient A}
**Transferaspekt:** {Was lernt der Schüler durch den Vergleich A vs. B?}
```

**Regeln für Leitfälle:**
- Patient A = der Leitfall aus planung.md (identisch übernehmen)
- Patient B = ein neuer Patient, der für Session 2+3 als Transferfall dient
- Patient B muss sich in mindestens 3 Merkmalen von Patient A unterscheiden (Setting, Alter, Komplikation)
- Patient B muss eine **andere pflegerische Herausforderung** darstellen als Patient A
- Beide Patienten zusammen decken verschiedene Versorgungssettings ab

---

#### D) Interleaving-Vorschläge (5-8 Fragen)

Interleaving = Fragen aus verwandten LEs einstreuen, um Transferleistung zu fördern. Der Didaktik-Loop entscheidet wo und wann diese Fragen eingesetzt werden.

**Format:**
```markdown
## Interleaving-Vorschläge

| Nr | Frage | Richtige Antwort | Bezugs-LE | Bloom | Typ |
|----|-------|-----------------|-----------|-------|-----|
| I1 | Welches Gelenk ist typischerweise bei einem akuten Gichtanfall betroffen? | Großzehengrundgelenk (Podagra) | LE 06 (Gicht) | B1 | mc |
| I2 | Nennen Sie 3 Unterschiede zwischen entzündlichem und mechanischem Rückenschmerz | Ruhe vs. Bewegung, Morgensteifigkeit, Alter bei Beginn | LE 05 (SpA) | B3 | freetext |
| I3 | Ordnen Sie die Laborwerte der richtigen Erkrankung zu: RF, Anti-CCP, HLA-B27, ANA | RF/Anti-CCP→RA, HLA-B27→SpA, ANA→SLE | LE 08 (Diagnostik) | B3 | matching |
| ... | ... | ... | ... | ... | ... |
```

**Regeln für Interleaving:**
- 5-8 Fragen pro LE
- Jede Frage bezieht sich auf eine ANDERE LE (nicht die aktuelle)
- Bevorzugt LEs die der Schüler bereits abgeschlossen hat (vorherige im Manifest)
- Mindestens 2 verschiedene Fragetypen
- Bloom B1-B3 (nicht zu schwer — es geht um Wiedererkennung, nicht Neuerwerb)
- Kurze Fragen — der Schüler soll nicht neu lernen, sondern abrufen

---

#### E) Bloom-Verteilung (mind. 5 Fakten pro Stufe)

Ordne die Fakten aus Abschnitt A den Bloom-Stufen zu. Der Didaktik-Loop nutzt diese Zuordnung um die Schwierigkeit der Sessions zu steuern.

**Format:**
```markdown
## Bloom-Verteilung

### B1 — Erinnern (mind. 5 Fakten)
Fakten die der Schüler auswendig wissen muss.
- F01: Rheumatoide Arthritis betrifft ca. 0,5-1% der Bevölkerung
- F02: Frauen sind 3x häufiger betroffen als Männer
- F05: Morgensteifigkeit >30 Min ist typisch für entzündliche Gelenkerkrankungen
- ...

### B2 — Verstehen (mind. 5 Fakten)
Fakten die der Schüler in eigenen Worten erklären können muss.
- F03: MTX ist First-Line-Therapie, weil es das Immunsystem moduliert ohne es komplett zu unterdrücken
- F08: Pannus zerstört Knorpel, weil entzündungsaktive Zellen in den Gelenkspalt einwandern
- ...

### B3 — Anwenden (mind. 5 Fakten)
Fakten die der Schüler auf einen konkreten Fall anwenden können muss.
- F12: Bei Morgensteifigkeit >60 Min → V.a. entzündliche Genese → Rheumatologe
- ...

### B4 — Analysieren (mind. 5 Fakten)
Fakten die der Schüler in Zusammenhänge einordnen können muss.
- F22: DAS28-Veränderung interpretieren: sinkend = Therapieerfolg, steigend = Anpassung nötig
- ...

### B5 — Bewerten (mind. 3 Fakten)
Fakten bei denen der Schüler Handlungen beurteilen oder priorisieren muss.
- F36: Treat-to-Target-Prinzip: Remission vs. niedrige Aktivität — wann ist welches Ziel realistisch?
- ...

### B6 — Erschaffen (mind. 2 Fakten)
Fakten die der Schüler für eigene Texte, Pflegeberichte oder Beratungsgespräche nutzen muss.
- F42: Einen Pflegebericht über eine MTX-Erstgabe formulieren
- ...
```

**Regeln:**
- JEDE Bloom-Stufe muss abgedeckt sein
- B1+B2: zusammen mind. 10 Fakten
- B3+B4: zusammen mind. 10 Fakten
- B5+B6: zusammen mind. 5 Fakten
- Ein Fakt kann in mehreren Bloom-Stufen vorkommen (z.B. F03 als B1=Fakt kennen, B3=auf Fall anwenden)

---

#### F) Offene-Fragen-Vorschläge (4-6 Fragen)

Offene Fragen (Freetext) sind didaktisch wertvoll, aber schwer zu generieren. Ralph liefert Vorschläge — der Didaktik-Loop wählt und platziert sie.

**Format:**
```markdown
## Offene-Fragen-Vorschläge

### OQ1: {Kurztitel}
**Bloom:** B{level}
**KB:** {Kompetenzbereich}
**Dimension:** {technisch-instrumentell / hermeneutisch-interpretativ / kritisch-reflexiv}
**Fragetext:** {Die vollständige Frage}
**Kontext:** {Optionaler Fallbezug — "Frau Yilmaz kommt zur Kontrolle und berichtet..."}
**Musterantwort:** {Ausformulierte Antwort, 3-5 Sätze}
**Bewertungskriterien:**
1. {Kriterium 1 — was MUSS in der Antwort vorkommen?}
2. {Kriterium 2}
3. {Kriterium 3}
**Satzanfänge (B1):**
- "Ich denke, dass..."
- "Die Pflegekraft sollte..."
- "Wichtig ist, dass..."
**Typische Fehler:**
- {Was Schüler häufig falsch machen / vergessen}
```

**Regeln:**
- 4-6 Vorschläge pro LE
- Mindestens 1 Frage pro didaktische Dimension (technisch, hermeneutisch, kritisch)
- Mindestens 2 Fragen auf Bloom B4+
- Jede Frage mit vollständiger Musterantwort (nicht nur Stichworte)
- Jede Frage mit mindestens 3 Bewertungskriterien
- Jede Frage mit B1-Satzanfängen (2-3 Stück)
- Jede Frage mit typischen Fehlern (was Schüler häufig falsch machen)
- 1 Frage sollte ein Pflegebericht/Dokumentation sein (B6)

---

### PHASE 5: B1-Differenzierung

**Output:** `content/ce-05/{leId}/steps-b1.md`

B1-Varianten für **alle Text-Steps** und **alle Freetext-Steps**. MC/Matching/Sorting brauchen meist keine B1-Variante (Fragetexte sind kurz genug).

#### Transformations-Regeln:

| Merkmal | C1-Version | B1-Version |
|---------|-----------|-----------|
| **Satzlänge** | Bis 25 Wörter, Nebensätze | Max. 15 Wörter, nur Hauptsätze |
| **Fachwörter** | Fachsprache durchgehend | Alltagswort + Fachbegriff in Klammern |
| **Passiv** | "Der Verband wird gewechselt" | "Sie wechseln den Verband" (Aktiv) |
| **Abstraktion** | Abstrakte Konzepte | Konkrete Beispiele + Analogien |
| **Erklärungen** | Kompakt | Ausführlicher, mit Alltagsvergleichen |
| **Aufzählungen** | Fließtext | Aufzählungen mit kurzen Punkten |

#### B1-Zusatz-Regeln:
1. **Gleiches fachliches Niveau** — NUR Sprache ändern, NICHT Inhalt vereinfachen
2. **Mehr Glossar-Tooltips** — Jeder Fachbegriff bekommt Tooltip
3. **Satzanfänge bei Freitext** — "Ich denke, dass...", "Frau Müller braucht..."
4. **Kein Konjunktiv** — Statt "Es könnte sein, dass..." → "Vielleicht ist..."
5. **Trennbare Verben zusammen** — Statt "Er nimmt das Medikament ein" → "Er nimmt das Medikament"

---

### PHASE 6: Qualitätsprüfung

**Output:** `content/ce-05/{leId}/qualitaetspruefung.md`

#### Automatische Checks (ALLE müssen bestanden sein):

```
FACHLICHE KORREKTHEIT
- [ ] Medizinische Fakten korrekt (gegen Quellen geprüft)?
- [ ] Zahlen/Statistiken aktuell und belegt?
- [ ] Keine veralteten Leitlinien-Empfehlungen?

DIDAKTISCHE QUALITÄT
- [ ] Leitfall durchgehend präsent (Phase 2, 4, 5)?
- [ ] Alle 3 didaktischen Dimensionen abgedeckt?
  - [ ] Technisch-instrumentell: __ Steps
  - [ ] Hermeneutisch-interpretativ: __ Steps
  - [ ] Kritisch-reflexiv: __ Steps
- [ ] Bloom-Verteilung: Mind. 40% auf B3+?
  - Bloom B1-B2: __% | Bloom B3-B4: __% | Bloom B5-B6: __%
- [ ] Mind. 4 verschiedene Step-Typen verwendet?
- [ ] Mind. 1 Freitext-Frage vorhanden?
- [ ] MC-Erklärungen: Alle 4 Optionen erklärt (richtig UND falsch)?

KOMPETENZBEREICH-ABDECKUNG
- [ ] KB-I: __% (Ziel: mind. 40%)
- [ ] KB-Verteilung dokumentiert

SPRACHLICHE DIFFERENZIERUNG
- [ ] B1-Version für alle Text-Steps vorhanden?
- [ ] B1 fachlich identisch mit C1?
- [ ] B1 Satzlänge max. 15 Wörter?
- [ ] Passiv → Aktiv umgewandelt?
- [ ] Satzanfänge für Freitext vorhanden?

ROHMATERIAL-QUALITÄT (NEU)
- [ ] rohmaterial.md erstellt?
- [ ] 40-50 Fakten vorhanden (mit Bloom + Quelle)?
- [ ] 15-25 Glossar-Begriffe (Basis + Vertiefung + Prüfung)?
- [ ] 2 Leitfall-Skizzen (Patient A + Patient B)?
- [ ] 5-8 Interleaving-Vorschläge?
- [ ] Bloom-Verteilung alle 6 Stufen abgedeckt?
- [ ] 4-6 Offene-Fragen-Vorschläge (mit Musterantwort)?

TECHNISCHE QUALITÄT
- [ ] Alle 17 Steps vorhanden?
- [ ] Step-IDs korrekt (Format: {leId-kurz}-{nr})?
- [ ] Jeder Step hat Quellenangabe?
- [ ] Glossar-Begriffe markiert (15+ Einträge in rohmaterial.md)?
- [ ] Keine wörtlichen Zitate aus Lehrbüchern?

ERGEBNIS: __/17 Steps geprüft — Bestanden: Ja/Nein
ROHMATERIAL: __/7 Kriterien erfüllt — Bestanden: Ja/Nein
```

---

### PHASE 7: TypeScript-Export

**Output:** `content/ce-05/{leId}/steps.ts` (überschreibt Skeleton)

#### Struktur:
```typescript
// Lektion {nr}: {Titel}
// CE 05 — Block {block}: {blockLabel}
// Generiert durch Content-Loop (7 Phasen) — {datum}

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "{leId}",
  ceId: "ce-05",
  title: "{title}",
  titleShort: "{titleShort}",
  zeitrichtwert: {ueCount},
  geschaetzteLernzeit: { c1: {minC1}, b1: {minB1} },
  kompetenzbereiche: ["{kb1}", "{kb2}"],
  bloomStufen: [{min}, {max}],
  voraussetzungen: ["{voraussetzung}"],
  leitfall: {
    name: "{name}",
    alter: {alter},
    beruf: "{beruf}",
    diagnose: "{diagnose}",
    setting: "{setting}",
    kernproblem: "{kernproblem}",
  },
  glossarCount: {anzahl},
  quellenCount: {anzahl},
};

export const STEPS: ContentStep[] = [
  // Phase 1: Ankommen
  {
    stepId: "{kurz}-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1"],
    contentC1: {
      title: "...",
      body: "...",
      glossarBegriffe: ["..."],
    },
    contentB1: {
      title: "...",
      body: "...",
    },
    question: {
      fragetext: "...",
    },
  },
  // ... 16 weitere Steps
];

export const GLOSSAR: GlossarEntry[] = [
  { begriff: "...", erklaerung: "..." },
  // 8-15 Einträge (Basis-Begriffe aus rohmaterial.md)
];
```

#### TypeScript-Regeln:
- **Keine Umlaute:** ae/oe/ue statt ä/ö/ü in allen Strings
- **Imports:** `import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";`
- **Step-IDs:** Format `{leId-kurz}-{nr}`, z.B. `anatomie-01`, `gicht-03`
- **Quellen:** Als Kurzcodes referenzieren (Q1, Q2, ...)
- **contentB1:** Nur bei Steps die B1-Variante haben (Text-Steps, Freetext-Steps)
- **question:** Nur bei Steps die eine Frage haben (nicht bei reinen Text-Steps)
- **MUSS KOMPILIEREN:** `npx tsc --noEmit` nach Fertigstellung

#### Manifest updaten:
In `content/ce-05/_manifest.ts` den Status der fertigen Lektion auf `"fertig"` setzen.

---

## REFERENZ-DATEIEN (lies diese als Vorlage)

- `content/ce-05/_types.ts` — Alle TypeScript-Interfaces
- `content/ce-05/_manifest.ts` — Manifest mit allen 16 Lektionen (Krankheitsbild-zentriert)
- `content/ce-05/le-01-einfuehrung/steps.ts` — Fertige Referenz-Lektion (10 Steps)
- `content/ce-05/le-01-einfuehrung/planung.md` — Referenz-Planung
- `content/ce-05/le-01-einfuehrung/steps-c1.md` — Referenz C1-Content
- `content/ce-05/le-01-einfuehrung/steps-b1.md` — Referenz B1-Content
- `content/ce-05/le-01-einfuehrung/quellenregister.md` — Referenz Quellenregister
- `content/ce-05/le-01-einfuehrung/qualitaetspruefung.md` — Referenz Qualitätsprüfung

## THEMEN-DETAILS

Die Themen pro Lektion stehen in `ralph/prd.json` im Feld `themen`. Nutze diese als Grundlage.

---

## COMMIT-FORMAT

```
feat(content): LE {nr} — {Titel}

Content-Loop komplett (7 Phasen + Rohmaterial):
- planung.md, quellenregister.md, steps-c1.md, steps-b1.md, qualitaetspruefung.md, steps.ts, rohmaterial.md
- {Steps} Steps, {Glossar} Glossar-Einträge, {Fakten} Fakten
- Leitfall: {Name}, {Alter}, {Beruf} + Transferfall: {Name B}
- Bloom: {min}-{max}, {prozent}% B3+
- KB: {hauptKB}
- Rohmaterial: {Fakten} Fakten, {Glossar} Glossar, {Interleaving} Interleaving, {OQ} offene Fragen

Generated with [Claude Code](https://claude.ai/code)
via [Happy](https://happy.engineering)

Co-Authored-By: Claude <noreply@anthropic.com>
Co-Authored-By: Happy <yesreply@happy.engineering>
```

---

## CHECKLISTE VOR ABSCHLUSS

Bevor du die Story als `"passes": true` markierst, prüfe:

1. [ ] Alle 7 Dateien erstellt (planung, quellen, c1, b1, qualität, steps.ts, **rohmaterial.md**)?
2. [ ] `npx tsc --noEmit` fehlerfrei?
3. [ ] _manifest.ts Status auf "fertig" gesetzt?
4. [ ] Qualitätsprüfung bestanden (alle Checks inkl. Rohmaterial)?
5. [ ] 17 Steps vorhanden?
6. [ ] Mind. 40% Bloom B3+?
7. [ ] Alle 3 didaktischen Dimensionen abgedeckt?
8. [ ] Leitfall einzigartig und divers?
9. [ ] **rohmaterial.md: 40-50 Fakten vorhanden?**
10. [ ] **rohmaterial.md: 15-25 Glossar-Begriffe (3 Kategorien)?**
11. [ ] **rohmaterial.md: 2 Leitfall-Skizzen (Patient A + B)?**
12. [ ] **rohmaterial.md: 5-8 Interleaving-Vorschläge?**
13. [ ] **rohmaterial.md: Bloom-Verteilung alle 6 Stufen?**
14. [ ] **rohmaterial.md: 4-6 offene Fragen mit Musterantwort?**
15. [ ] Committed?
