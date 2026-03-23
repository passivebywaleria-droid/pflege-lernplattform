# Spec: Lernmodul-Ansicht

> Priorität: HÖCHSTE — Erste Feature für Ralph Build-Loop

## Überblick

Die Lernmodul-Ansicht ist das Kernstück der Plattform. Schüler navigieren durch Curriculare Einheiten (CE), wählen ein Modul und lernen in einer fokussierten Lektions-Ansicht.

## User Stories

### US-1: CE-Übersicht
**Als** Pflegeschüler
**möchte ich** alle 11 Curricularen Einheiten sehen
**damit ich** weiß, welche Themen es gibt und wo ich stehe.

**Akzeptanzkriterien:**
- Alle 11 CEs als Karten angezeigt (Nummer, Titel, Ausbildungsdrittel)
- Fortschrittsbalken pro CE (0-100%)
- CEs ohne Inhalte zeigen "Bald verfügbar" Badge
- CE 01, 02, 05, 06 sind navigierbar (MVP)
- Mobile: Vertikale Scroll-Liste
- Tablet/Desktop: Grid-Layout (2-3 Spalten)

### US-2: Modul-Liste pro CE
**Als** Pflegeschüler
**möchte ich** die Module einer CE sehen
**damit ich** gezielt Lektionen auswählen kann.

**Akzeptanzkriterien:**
- Module als Liste mit: Titel, Bloom-Level Icon, Dauer, Status
- Status: 🔒 Gesperrt / ⭕ Offen / ✅ Abgeschlossen
- Bloom-Level als farbiges Badge (1=Erinnern, 2=Verstehen, 3=Anwenden, 4=Analysieren)
- Progression: Nächstes Modul erst nach 80% Mastery des vorherigen
- Geschätzte Dauer pro Modul (z.B. "~15 Min")

### US-3: Lektions-Ansicht (Lernmodus)
**Als** Pflegeschüler
**möchte ich** eine Lektion durcharbeiten
**damit ich** den Stoff verstehe.

**Akzeptanzkriterien:**
- Clean Reading-Layout (kein Sidebar, minimale Navigation)
- Fortschrittsbalken oben (Abschnitt X von Y)
- Text-Inhalte mit Überschriften, Absätzen, Aufzählungen
- Glossar-Begriffe hervorgehoben (Tap → Definition als Tooltip/Modal)
- "Weiter" / "Zurück" Buttons unten
- Am Ende: Zusammenfassung + "Quiz starten" CTA
- Lesezeit-Tracker (für Gamification/Daily Goal)

### US-4: Glossar-Integration
**Als** Pflegeschüler mit B1-Deutsch
**möchte ich** Fachbegriffe direkt im Text erklärt bekommen
**damit ich** nicht extra nachschlagen muss.

**Akzeptanzkriterien:**
- Fachbegriffe im Text farblich markiert (unterstrichen/highlighted)
- Tap/Click → Popup mit Definition in gewählter Sprache
- Option "Zur Glossar-Übersicht" für alle Begriffe der CE
- Glossar durchsuchbar (Freitext-Suche)

## UI-Screens

### Screen 1: `/[locale]/learn`
```
┌─────────────────────────┐
│ ← Lernen         🔍 ≡  │
├─────────────────────────┤
│                         │
│ ┌─────────────────────┐ │
│ │ CE 01               │ │
│ │ Ausbildungsstart    │ │
│ │ ████████░░ 75%      │ │
│ │ 1. Ausbildungsdrittel│
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ CE 02               │ │
│ │ Zu pflegende        │ │
│ │ Menschen...         │ │
│ │ ██░░░░░░░░ 20%      │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ CE 03          🔒   │ │
│ │ Bald verfügbar      │ │
│ └─────────────────────┘ │
│                         │
├─────────────────────────┤
│ 🏠  📚  🔄  📊  📖   │
└─────────────────────────┘
```

### Screen 2: `/[locale]/learn/ce/[ceId]`
```
┌─────────────────────────┐
│ ← CE 01          🔍    │
│ Ausbildungsstart        │
├─────────────────────────┤
│                         │
│ ┌─ Modul 1 ──────────┐ │
│ │ 📗 Pflegeberuf      │ │
│ │ verstehen           │ │
│ │ Bloom 1 · ~15 Min   │ │
│ │ ✅ 92%              │ │
│ └─────────────────────┘ │
│                         │
│ ┌─ Modul 2 ──────────┐ │
│ │ 📘 Pflegeprozess    │ │
│ │ anwenden            │ │
│ │ Bloom 2 · ~20 Min   │ │
│ │ ⭕ Starten          │ │
│ └─────────────────────┘ │
│                         │
│ ┌─ Modul 3 ──────────┐ │
│ │ 🔒 Dokumentation    │ │
│ │ Bloom 3 · ~15 Min   │ │
│ │ Erst Modul 2 mit    │ │
│ │ 80% abschließen     │ │
│ └─────────────────────┘ │
│                         │
├─────────────────────────┤
│ 🏠  📚  🔄  📊  📖   │
└─────────────────────────┘
```

### Screen 3: `/[locale]/learn/module/[moduleId]`
```
┌─────────────────────────┐
│ ← CE 01 / Modul 1      │
│ ████████████░░░ 3/5     │
├─────────────────────────┤
│                         │
│ Der Pflegeberuf         │
│                         │
│ Pflege ist ein          │
│ eigenständiger Beruf    │
│ im Gesundheitswesen.    │
│ Die [Pflegefachperson]  │ ← Glossar-Link
│ übernimmt Verantwortung │
│ für den gesamten        │
│ [Pflegeprozess].        │ ← Glossar-Link
│                         │
│ Kernaufgaben:           │
│ • Erhebung des          │
│   Pflegebedarfs         │
│ • Planung der Pflege    │
│ • Durchführung          │
│ • Evaluation            │
│                         │
│                         │
│ ┌─────────────────────┐ │
│ │    ← Zurück  Weiter →│ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

## Datenmodell (bereits in Schema)

- `ceUnits` — 11 CEs mit Titel (DE/AR/TR), Ausbildungsdrittel, Zeitrichtwert
- `learnModules` — Module pro CE mit Bloom-Level, Content, Dauer
- `glossaryTerms` — Fachbegriffe pro CE mit Definition (DE/AR/TR)
- `userProgress` — Fortschritt pro User/Modul
- `skillMastery` — 5-stufiges Mastery-Level

## Mock-Daten benötigt

- 11 CE-Einträge (mit echten Titeln aus PflBG)
- 3-5 Module pro MVP-CE (CE 01, 02, 05, 06)
- 5-10 Glossar-Begriffe pro MVP-CE
- Platzhalter-Texte für Lektions-Inhalte (Lorem-Ipsum-Style, aber pflege-thematisch)
- 1 Test-User mit Fortschritt in CE 01

## Technische Hinweise

- Seiten unter `src/app/[locale]/(dashboard)/learn/`
- Komponenten unter `src/components/learn/`
- Mock-Daten unter `src/lib/mock/`
- Zustand-Store für aktuellen Lernfortschritt
- Framer Motion für Seitenübergänge
- `@dnd-kit` wird hier NICHT benötigt (erst bei Quiz)
