# Pipeline v8 — Entscheidungen

**Stand:** 2026-04-19

---

## Beantwortete Fragen (F1-F35)

| # | Frage | Entscheidung |
|---|-------|-------------|
| F1 | Feedback-Loop bei Fehlern | Automatisch zurück an Dozentin A/B |
| F2 | Wie oft darf Loop laufen? | Max 2 Runden, dann Flag an mich |
| F3 | Dozentin A — Bücher-Reihenfolge | Sequenziell: I Care → Pflege heute → Expertenstandard |
| F4 | Widersprüche zwischen Büchern | Dokumentieren + Exa-Suche nach Konsens |
| F5 | Prüfungs-Mapper | Phase 2 in Dozentin A |
| F6 | Prüfungsfragen-Buch | Index erstellen (wie icare-index) |
| F7 | Pflege-heute-Index | Ja, erstellen |
| F8 | Expertenstandards-Index | Ja, komplett |
| F9 | Output Granularität | Pro Thema (25 Dateien) |
| F10 | Reihenfolge | Cluster A→B→C→D→E |
| F11 | Parallelisierung | Nein, sequenziell |
| F12 | Dozentin B über Kernfakten hinaus | Kernfakten + didaktische Ergänzungen mit [Transfer] |
| F13 | B1-Dozentin | Separater Agent, nach Dozentin B |
| F14 | Wissensbausteine Granularität | Pro Lernziel (3-5 pro Thema) |
| F15 | Wer definiert Lernziele | Dozentin A |
| F16 | Glossar | CE-weit |
| F17 | Wer erstellt Glossar | Dozentin A |
| F18 | Glossar-Sprachen | Nur DE |
| F19 | Karteikarten | Dozentin A erstellt |
| F20 | Karteikarten-Format | FSRS-kompatibel |
| F21 | Dozentin A Output-Dateien | 4 Dateien: kernfakten.md + lernziele.md + glossar.md + karteikarten.md |
| F22 | Themen vs Situationen | Erst alle 25 Themen, dann alle Situationen |
| F23 | Kernfakten für Situationen | Dozentin A erstellt Patienten-Steckbriefe |
| F24 | Steps pro Lernsituation | 4-6 pro Phase (24-36 gesamt) |
| F25 | Branching | 1-2 Entscheidungspunkte pro Situation |
| F26 | Dein Review | Nur bei FAIL eingreifen |
| F27 | FAIL/WARN/PASS Schwelle | Streng: 1 Exa-UNVERIFIED = FAIL |
| F28 | Speicherort Content | content/ce-02/themen/ + situationen/ + glossar.ts |
| F29 | Kernfakten nach Pipeline | Werden gelöscht |
| F30 | Kernfakten während Pipeline | specs/ce-02/kernfakten/, gitignored |
| F31 | Modell Dozentin A | Claude Opus |
| F32 | Modell Dozentin B | Claude Opus |
| F33 | Modell B1-Dozentin | Claude Opus |
| F34 | Modell KI-Prüfer | Claude Opus |
| F35 | Modell Generator | Claude Sonnet |

## Pipeline-Architektur

```
Dozentin A (Opus)     →  Dozentin B (Opus)  →  B1-Dozentin (Opus)  →  Generator (Sonnet)
Bücher lesen             Kernfakten →           B1-Varianten           TypeScript
+ Kernfakten             Wissensbausteine
+ Lernziele
+ Glossar
+ Karteikarten
+ Prüfungs-Mapping
                                                                          ↓
                                                                ┌─────────┴──────────┐
                                                                ↓                    ↓
                                                           KI-Prüfer (Opus)    Exa Fact-Check
                                                           Block I (Bücher)    (PubMed, AWMF)
                                                                ↓                    ↓
                                                                └─────────┬──────────┘
                                                                          ↓
                                                                     N-gram Script
                                                                          ↓
                                                              FAIL? → Loop (max 2×)
                                                              PASS? → Live
                                                              2× FAIL? → Flag an Gründerin
```

## Beantwortete Fragen F37-F41 (2026-04-21)

| # | Frage | Entscheidung |
|---|-------|-------------|
| F37 | displayFormats | 8 behalten: mnemonic, analogy, beforeafter, procontra, quote, checklist, stepbystep, scenario. 5 gestrichen: news, diary, glossary, crossref, interview |
| F38 | Erlebnis-Modi | Alle 8 behalten (story, challenge, puzzle, entdecker, sortierstation, schreibtisch, praxis-sim, checkpoint) |
| F39 | UX-Varianten | Alle 18 Varianten behalten + Generator-Regeln wann welche Variante genutzt wird |
| F40 | Bilder/Illustrationen | Mix-Strategie: (1) Copic-Marker-Stil für Szenen via Gemini-Bot (~36s/Bild), (2) eigene SVGs für Anatomie mit deutschen Labels, (3) Excalidraw-Skill für Diagramme. Bot-Bilder immer OHNE Text generieren, Labels nachträglich als SVG-Overlay |
| F41 | Audio/TTS | **Ziel: Piper TTS selbst gehostet** (DSGVO-USP, langfristig kostengünstig, Thorsten-Voice für Deutsch). Setup-Aufwand: ~1,5 Tage. **Priorität: niedrig — später umsetzen**. Bis dahin: Browser Web Speech API als Fallback |
| F42 | Speech/Whisper | **Post-Launch-Feature**. Step-Renderer `step-speech.tsx` existiert bereits. Generator produziert vorerst keine Speech-Steps. Nach Launch: adaptiv (B1 mehr, C1 wenig) via Browser-Whisper |
| F43 | MC-Qualität + Step-Typ-Verteilung | **Mehrschichtig:** (1) Step-Mix: MC nur bei Bloom 1-2, max 15-20% aller Steps. Handlungs-Typen (Branching, Dialog, Sequencing, Freitext) dominieren. (2) Distraktoren = dokumentierte Misconceptions (Dozentin B sammelt pro Wissensbaustein "typische Fehlvorstellungen"). (3) Feedback: spezifisch pro falscher Antwort, Sandwich-Prinzip (Lob→Korrektur→Vertiefung→Ermutigung). (4) Item-Writing-Flaws via Post-Processor (Shuffling, Längen-Balance). (5) **Stichproben-Review 10-20% durch Dozentin (Mensch) vor Launch + Pflegeschüler-Feedback nach Launch als echte Validierung** |
| F43a | Bloom → Step-Typ | Bloom 1-2 (Erinnern/Verstehen): MC, Flipcard, Memory, Zuordnung. Bloom 3 (Anwenden): Sequencing, Checkliste, einfaches Branching, Hotspot. Bloom 4 (Analysieren): Fehler finden, Matrix, Bild-Interpretation. Bloom 5-6 (Bewerten/Erschaffen): Komplex-Branching, Dialog/Rollenspiel, Freitext+KI-Feedback |
| F43b | Verteilungs-Richtwerte | Fakten (Bloom 1-2): 15-20%, Verstehen: 15-20%, Anwenden: 20-25%, Handeln: 20-25%, Transfer: 10-15%. Keine strengen Grenzen — je nach Situation Schwerpunkte möglich |
| F43c | Wer kontrolliert was | Dozentin A: Lernziele + Bloom. Dozentin B: Didaktik (Lernziele-Ausbau, Misconceptions, Wissensbausteine). Regisseur (Update auf v3 nötig für Situationsformat): Step-Typ-Auswahl aus Bloom + Phase. Generator: Konkrete Steps + UX-Variante. Post-Processor (NEU): Shuffling, Längen-Check. KI-Prüfer: Bloom-Match, Verteilung, Monotonie |

## Pipeline v9 — Kompletter Neuentwurf (2026-04-21)

**Entscheidung:** Pipeline komplett neu strukturiert — 9 Stufen, klare Autoritätsmatrix, 2 menschliche Review-Punkte.

### Leitprinzipien
1. Didaktik vor Technik — Lernziel bestimmt alles
2. Eine Verantwortung pro Agent — keine doppelte Entscheidungs-Autorität
3. Mensch bleibt im Loop — 2 kritische Review-Punkte
4. Daten fließen nur vorwärts — keine rückwärts-Änderungen ohne Trigger
5. Situations-Format ist Standard — LE ist Legacy, raus aus aktiver Pipeline

### Pipeline-Stufen

| # | Stufe | Agent | Output |
|---|-------|-------|--------|
| 1 | Recherche | Dozentin A (Opus) | kernfakten.md (**+ Misconceptions-Abschnitt NEU**) |
| 2a | Didaktik — Wissensebene | Dozentin B Phase 1 (Opus) | bausteine-plan.md (+ Bloom + Misconceptions) |
| — | **🔒 Review #1** (Mensch) | — | Lernziele/Bausteine/Bloom stichprobenartig prüfen |
| 2b | Didaktik — Situationsebene | Dozentin B Phase 2 (Opus) | phasen-plan.md + patient-plan.md |
| 3 | Choreografie | **Regisseur v3 (NEU, Opus)** | sessionsplan.md mit Step-Slots |
| 4 | B1-Adaption | B1-Dozentin (Opus) | Inline B1-Felder |
| 5 | Generierung | Content-Generator (Sonnet) | .ts-Dateien |
| 6 | Normalisierung | **Post-Processor (NEU, Script)** | Normalisierte .ts + post-processor-report.json |
| 7 | Technische Prüfung | Scripts | quality-report.json |
| 8 | Didaktische Prüfung | Didaktik-Prüfer (Opus) | didaktik-report.md (**+5 neue Checks NEU**) |
| 9 | Step-Qualität | Step-KI-Prüfer (Haiku, auf Situations umschreiben) | Ergänzung report |
| — | **🔒 Review #2** (Mensch) | — | 10-20% der Steps durchspielen |
| — | PUBLISHED | — | Status `published` |

### Detail-Entscheidungen

| # | Frage | Entscheidung |
|---|-------|-------------|
| D1 | Wissensbausteine pro Thema | **8-12 Mikro-Bausteine** — maximale Adaptivität, Sequencer kann gezielt auf einzelne Lücken reagieren |
| D2 | Loop-Verhalten bei FAIL | **Differenziert nach Fehler-Typ**: technisch 1x, didaktisch+feedback 2x, urheberrecht 1x, inhaltlich+misconceptions 0x (direkt Mensch) |
| D3 | Stichprobe-Auswahl Review | **Option D**: Erste CE (CE-02) zu 100% prüfen, ab CE-03 Mix (Pflicht-Checks bei kritischen Triggern + 10-20% Zufall) |
| D4 | Post-Processor Flaws | **Konservativ**: FIX nur deterministisch (Shuffling, correctIndex, Pairs-Shuffle). WARN: Längen, absolute Wörter, Stichwort-Wiederholung, Grammatik-Muster. Nicht fixbar → Didaktik-Prüfer |

### Neue Arbeitspakete (Pipeline-Umsetzung ~4-5 Tage)

| # | Arbeit | Aufwand |
|---|--------|---------|
| 1 | Dozentin A: Misconceptions-Abschnitt ergänzen | 1-2h |
| 2 | Dozentin B: Bloom-Level + Misconceptions-Mapping + 8-12 Bausteine | 2-3h |
| 3 | **Regisseur v3** komplett neu für Situationen | 4-6h |
| 4 | **Post-Processor** Script schreiben | 2-3h |
| 5 | Didaktik-Prüfer: 5 neue Checks (Bloom, Misconceptions, Feedback, Verteilung, Monotonie) | 2-3h |
| 6 | Step-KI-Prüfer: Situations-Format | 1-2h |
| 7 | Review-Templates + pick-review-sample.ts Script | 1-2h |
| 8 | **Expertenstandards-Index erstellen** (8 Standards, ~400 Seiten) | 4-6h |
| 9 | **Pflege heute Index erstellen** (~1200 Seiten) | 8-12h |

## Beantwortete Fragen F44, F71, F73 (2026-04-21)

| # | Frage | Entscheidung |
|---|-------|-------------|
| F44 | Feedback-Texte Sandwich-Details | **Option C: Kontext-abhängig gestuft** + **Spezifitäts-Regeln**. Länge nach Bloom (2-10 Sätze), Pflicht-Elemente: spezifische Misconception bei falsch, Vertiefung bei richtig. Nie mit "Falsch" starten. B1 immer zusätzlich (≤15 Wörter/Satz) |
| F44a | Sandwich-Struktur bei falschen Antworten | Bloom 1-2: 2-3 Sätze (Bestätigung+Korrektur+Erklärung). Bloom 3-4: 4-6 Sätze (Lob+Korrektur+Vertiefung+Ermutigung). Bloom 5-6: 6-10 Sätze (mit Fallbezug) |
| F44b | Prüfregeln für Didaktik-Prüfer | Q1: Spezifität (nennt Grund, nicht Bewertung). Q2: Misconception-Match bei falsch. Q3: Länge im Richtwert. Q4: Nicht mit "Falsch" starten. Q5: B1-Version einfacher |
| F71 | Pflege heute Index | **Voll erstellen** (~8-12h), vor Pipeline-Start. Zweck: Dozentin A findet gezielt relevante Stellen |
| F73 | Expertenstandards Index | **Voll erstellen** (~4-6h), vor Pipeline-Start. Abdeckt 8 nationale Standards (Dekubitus, Sturz, Schmerz, Entlass, Wunde, Ernährung, Kontinenz, Demenz) |

### Quellen-Priorität für Dozentin A
1. **I Care** (bereits indiziert) — Primär für 80% aller Themen
2. **Expertenstandards** (neu indizieren) — Pflicht bei Standard-Themen
3. **Pflege heute** (neu indizieren) — Cross-Check + Ergänzung
4. **Exa API** — Fakten-Verifikation, Konsens bei Widersprüchen

## Beantwortete Frage F36

| # | Frage | Entscheidung |
|---|-------|-------------|
| F36 | Welche Step-Typen behalten? | 33 von 65 behalten — Demo-Seite `/de/demo-steps` |

**Kern (20):** MC, MC Statement, Wahr/Falsch, Swipe, Zuordnung, Sortierung, Kategorisierung, Erklärtext, Dialog, Flipcard, Reveal, Audio, Reflexionsfrage, Lückentext, Sequencing, Freitext, Branching, Hotspot, Bild beschriften, Sprechübung, Session-Zusammenfassung

**Mehrwert (13):** Konfidenz, Vergleichstabelle, Fehler finden, Rollenspiel, Dosierung, Fachsprache-Übersetzung, Abkürzungen, Blitz-Quiz, Checkliste, Risiko-Assessment, Kompetenz-Check, KI-Patient Chat

**Entfernt (22):** MC Pill, Memory, Kreuzworträtsel, Timeline, Diagramm, Slider, Fill-in, Timer, Selbsteinschätzung, Text-Highlight (iOS kaputt), Lückentext+Wortbank, Concept Map, Prioritäten-Matrix, Pro/Contra, Wortwolke, Tabelle ausfüllen, Entscheidungskette, Zeitleiste ordnen, Vitalzeichen, Formulierung bewerten, Schätzfrage, Satzbausteine, Ethisches Dilemma

---

## Offene Fragen (F37-F100) — SPÄTER

### Content-Details (F37-F50)
- F37: displayFormats — welche behalten?
- F38: Erlebnis-Modi — welche nutzen?
- F39: UX-Varianten pro Step-Typ?
- F40: Bilder/Illustrationen — woher?
- F41: Audio/TTS — welcher Service?
- F42: Speech/Whisper — Priorität?
- F43: Wie viele MC-Optionen (3 oder 4)?
- F44: Feedback-Texte — Sandwich-Prinzip Details?
- F45: Scaffolding — wann einblenden?
- F46: Spaced Repetition — welcher Algorithmus?
- F47: XP/Gamification — Punkte pro Step-Typ?
- F48: Streaks — Regeln?
- F49: Tages-/Wochenplan — automatisch?
- F50: Fortschritts-Visualisierung — welches Format?

### Technisch (F51-F60)
- F51: Pipeline-Orchestrierung — Script oder manuell?
- F52: Fehler-Reporting — Format?
- F53: Git-Workflow — Branch pro Thema?
- F54: CI/CD — Pipeline automatisieren?
- F55: Monitoring — wie tracken wir Content-Qualität?
- F56: Versionierung — Content-Versionen?
- F57: Rollback — wenn Content fehlerhaft live geht?
- F58: A/B-Testing — verschiedene Didaktik-Ansätze?
- F59: Analytics — was messen wir?
- F60: Performance — Ladezeiten pro Step-Typ?

### Didaktik (F61-F70)
- F61: Bloom-Level pro Step-Typ — Zuordnung?
- F62: Adaptivität — wie wählt Sequencer Steps?
- F63: Schwierigkeitsgrad — wie berechnet?
- F64: Kompetenz-Register — Schwellenwerte?
- F65: Wiederholung — wann und wie?
- F66: Prüfungsmodus — eigener Modus?
- F67: Lernzeit-Tracking — was zählt als "aktiv"?
- F68: Pausen-Empfehlung — nach wie vielen UE?
- F69: Tages-Zusammenfassung — automatisch?
- F70: Wochen-Rückblick — Format?

### Quellen & Index (F71-F80)
- F71: Wie wird Pflege-heute-Index erstellt? Script?
- F72: Wie wird Prüfungsfragen-Index erstellt?
- F73: Wie wird Expertenstandards-Index erstellt?
- F74: Index-Format — gleich wie icare-index?
- F75: Exa API — Budget/Limit pro Thema?
- F76: Exa — welche Domains noch?
- F77: N-gram Schwellenwerte — anpassen?
- F78: N-gram gegen ALLE Bücher oder nur Hauptwerke?
- F79: Quellen-Mapping als Datei speichern?
- F80: Quellen-Updates — wie aktuell halten?

### Skalierung (F81-F90)
- F81: CE-03 bis CE-11 — gleiche Pipeline?
- F82: Themen-Katalog für andere CEs — wer erstellt?
- F83: Situationen-Katalog für andere CEs?
- F84: Wie viele Themen pro CE im Durchschnitt?
- F85: Timeline — wann sind alle 11 CEs fertig?
- F86: Team — brauchst du Hilfe (andere Dozentin)?
- F87: Schüler-Beta — wann erste Tests?
- F88: Feedback von Schülern — wie einbauen?
- F89: Lehrer-Feedback — Dashboard-Priorität?
- F90: Content-Updates nach Launch?

### Geschäftlich (F91-F100)
- F91: Freemium — welche CEs kostenlos?
- F92: Schullizenz — Preismodell?
- F93: Einzellizenz — Preismodell?
- F94: Offline — welcher Content offline verfügbar?
- F95: Push-Notifications — Texte/Timing?
- F96: Onboarding — Einstufungstest zuerst?
- F97: Dark Mode — Priorität?
- F98: Barrierefreiheit — WCAG Level?
- F99: Datenschutz — Consent-Flow Details?
- F100: Launch — MVP oder Feature-Complete?
