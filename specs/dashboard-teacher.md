# Spec: Lehrer-Dashboard

> Priorität: NIEDRIG — Viertes Feature

## Überblick

Lehrkräfte sehen den Fortschritt ihrer Klasse auf einen Blick. 3-stufiges Ampelsystem (30 Sekunden, 2 Minuten, On-Demand) für schnelle Übersicht.

## User Stories

### US-1: Klassenübersicht (30 Sekunden)
**Als** Pflegelehrerin
**möchte ich** in 30 Sekunden sehen wie meine Klasse steht
**damit ich** schnell Handlungsbedarf erkenne.

**Akzeptanzkriterien:**
- Ampel-Anzeige pro Schüler: 🟢 auf Kurs / 🟡 Rückstand / 🔴 Kritisch
- Sortierung: Kritische zuerst
- Klassen-Durchschnitt als Zahl
- Aktive Streaks der Klasse

### US-2: Schüler-Detail (2 Minuten)
**Als** Pflegelehrerin
**möchte ich** Details zu einem Schüler sehen
**damit ich** gezielt helfen kann.

**Akzeptanzkriterien:**
- Fortschritt pro CE
- Mastery-Level pro Modul
- Letzte Aktivität (wann zuletzt gelernt)
- Schwache Bereiche (niedrige Quiz-Scores)

### US-3: Export (On-Demand)
**Als** Pflegelehrerin
**möchte ich** Berichte exportieren
**damit ich** diese in Konferenzen nutzen kann.

**Akzeptanzkriterien:**
- CSV-Export der Klassen-Übersicht
- PDF-Export einzelner Schülerberichte (später)

## UI-Screen: `/[locale]/dashboard/teacher`

```
┌─────────────────────────┐
│ Klassenübersicht  📊 ⬇  │
├─────────────────────────┤
│                         │
│ Klasse PFL-2025-A      │
│ 24 Schüler · Ø 67%     │
│                         │
│ 🟢 18  🟡 4  🔴 2      │
│                         │
│ ┌─────────────────────┐ │
│ │ 🔴 Ahmed K.    32%  │ │
│ │ Letzte Aktivität:   │ │
│ │ vor 5 Tagen         │ │
│ ├─────────────────────┤ │
│ │ 🔴 Lisa M.     28%  │ │
│ │ Letzte Aktivität:   │ │
│ │ vor 8 Tagen         │ │
│ ├─────────────────────┤ │
│ │ 🟡 Yuki T.     58%  │ │
│ │ Letzte Aktivität:   │ │
│ │ gestern             │ │
│ ├─────────────────────┤ │
│ │ 🟢 Fatima A.   92%  │ │
│ │ 🔥 12 Tage Streak   │ │
│ └─────────────────────┘ │
│                         │
├─────────────────────────┤
│ 🏠  📚  👥  📊  ⚙️   │
└─────────────────────────┘
```

## Mock-Daten benötigt

- 1 Klasse mit 8-10 Mock-Schülern
- Verschiedene Fortschrittslevel (gut, mittel, schlecht)
- Verschiedene Aktivitätsdaten

## Technische Hinweise

- Seite: `src/app/[locale]/(dashboard)/dashboard/teacher/page.tsx`
- Nur für `role: "teacher"` zugänglich (Middleware-Guard existiert)
- recharts für Klassen-Statistiken
- Ampel-Schwellen: 🟢 ≥70% | 🟡 40-69% | 🔴 <40%
