# Spec: Quiz-System

> Priorität: HOCH — Zweites Feature nach Lernmodul-Ansicht

## Überblick

Nach jeder Lektion können Schüler ihr Wissen mit Quizzes testen. 5 Fragetypen, Mastery-Learning (80% Schwelle), Bloom-Level-Progression.

## User Stories

### US-1: Quiz starten
**Als** Pflegeschüler
**möchte ich** nach einer Lektion ein Quiz machen
**damit ich** prüfen kann, ob ich den Stoff verstanden habe.

**Akzeptanzkriterien:**
- Quiz startet nach Lektion oder separat aus Modul-Übersicht
- 5-10 Fragen pro Quiz-Runde
- Fragen nach Bloom-Level sortiert (einfach → schwer)
- Fortschrittsanzeige "Frage X von Y"
- Timer optional (kein Zwang)

### US-2: 5 Fragetypen
**Als** Pflegeschüler
**möchte ich** verschiedene Frageformate
**damit** das Lernen abwechslungsreich ist.

**Fragetypen:**
1. **Multiple Choice (mc)** — 1 richtige aus 4 Antworten
2. **Zuordnung (ordering)** — Elemente in richtige Reihenfolge bringen (Drag & Drop)
3. **Lückentext (gap)** — Wort in Lücke einsetzen (Dropdown oder Freitext)
4. **Flip-Karten (flip)** — Begriff → Definition aufdecken, Selbstbewertung
5. **Drag & Drop (dragdrop)** — Begriffe Kategorien zuordnen

### US-3: Sofortiges Feedback
**Als** Pflegeschüler
**möchte ich** sofort wissen ob meine Antwort richtig war
**damit ich** aus Fehlern lerne.

**Akzeptanzkriterien:**
- Richtig: Grüner Rahmen + kurze Erklärung
- Falsch: Roter Rahmen + richtige Antwort + Erklärung
- XP-Animation bei richtiger Antwort (+10 XP)
- Am Ende: Zusammenfassung (X/Y richtig, XP verdient, Mastery-Änderung)

### US-4: Mastery-Tracking
**Als** Pflegeschüler
**möchte ich** meinen Fortschritt pro Modul sehen
**damit ich** weiß wann ich ein Thema beherrsche.

**Mastery-Level (aus Schema):**
1. `not_started` — Noch nicht begonnen
2. `attempted` — Mindestens 1x versucht
3. `familiar` — 40-59% richtig
4. `proficient` — 60-79% richtig
5. `mastered` — 80%+ richtig → Nächstes Modul freigeschaltet

## UI-Screens

### Multiple Choice
```
┌─────────────────────────┐
│ Frage 3 von 8    ███░░  │
├─────────────────────────┤
│                         │
│ Welche Phase gehört     │
│ NICHT zum Pflegeprozess?│
│                         │
│ ┌─────────────────────┐ │
│ │ ○ Erhebung          │ │
│ ├─────────────────────┤ │
│ │ ○ Diagnose          │ │
│ ├─────────────────────┤ │
│ │ ○ Verschreibung     │ │ ← richtig
│ ├─────────────────────┤ │
│ │ ○ Evaluation        │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │    Antwort prüfen   │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

### Drag & Drop Zuordnung
```
┌─────────────────────────┐
│ Frage 5 von 8    █████░ │
├─────────────────────────┤
│                         │
│ Ordne die Begriffe den  │
│ Kategorien zu:          │
│                         │
│ ┌─── ATL ───┐ ┌─ AEDL ┐│
│ │            │ │       ││
│ │ [Essen]    │ │       ││
│ │            │ │[Ruhen]││
│ └────────────┘ └───────┘│
│                         │
│ Noch zuordnen:          │
│ [Atmen] [Kommunizieren] │
│                         │
└─────────────────────────┘
```

## Datenmodell (bereits in Schema)

- `quizQuestions` — type, bloomLevel, difficulty, metadata
- `quizAnswers` — answerText (DE/AR/TR), isCorrect, order
- `userProgress` — scorePct, attempts
- `skillMastery` — 5 Stufen
- `xpLog` — XP-Tracking

## Mock-Daten benötigt

- 8-10 Fragen pro MVP-CE, gemischt über alle 5 Typen
- Antworten mit Erklärungen
- Platzhalter-Texte (pflege-thematisch aber nicht fachlich korrekt)

## Technische Hinweise

- Seiten unter `src/app/[locale]/(dashboard)/quiz/`
- Komponenten unter `src/components/quiz/`
- `@dnd-kit` für Ordering und Drag&Drop Fragetypen
- Framer Motion für Feedback-Animationen
- Zustand-Store für Quiz-State (aktuelle Frage, Antworten, Score)
