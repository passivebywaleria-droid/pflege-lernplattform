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
