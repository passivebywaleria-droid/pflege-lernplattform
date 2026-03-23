# Spec: Schüler-Dashboard

> Priorität: MITTEL — Drittes Feature

## Überblick

Das Dashboard ist die Startseite nach dem Login. Zeigt Tagesfortschritt, Streaks, XP und schnellen Zugang zu den letzten Lektionen.

## User Stories

### US-1: Tagesübersicht
**Als** Pflegeschüler
**möchte ich** sofort sehen wo ich stehe
**damit ich** motiviert bin weiterzulernen.

**Akzeptanzkriterien:**
- Begrüßung mit Name + Tageszeit ("Guten Morgen, Fatima!")
- Streak-Anzeige (aktuelle Streak + Flammen-Icon)
- XP heute / XP-Level gesamt
- Tagesfortschritt (Lernzeit vs. Daily Goal)
- Kreisdiagramm oder Fortschrittsring

### US-2: Weiterlernen
**Als** Pflegeschüler
**möchte ich** sofort dort weitermachen wo ich aufgehört habe
**damit ich** keine Zeit verliere.

**Akzeptanzkriterien:**
- "Weiterlernen" Button → direkt zur letzten offenen Lektion
- Letzte 3 besuchte Module als Karten
- Empfohlenes nächstes Modul (basierend auf Fortschritt)

### US-3: Gesamtfortschritt
**Als** Pflegeschüler
**möchte ich** meinen Gesamtfortschritt über alle CEs sehen
**damit ich** weiß wie weit ich bin.

**Akzeptanzkriterien:**
- Mini-Fortschrittsbalken pro CE (11 Balken)
- Gesamtfortschritt in Prozent
- Mastery-Badges für abgeschlossene Module

## UI-Screen: `/[locale]/home`

```
┌─────────────────────────┐
│ Pflege-Lernplattform 🔔 │
├─────────────────────────┤
│                         │
│ Guten Morgen, Fatima!   │
│                         │
│ 🔥 12 Tage Streak      │
│ ⭐ 1.240 XP             │
│                         │
│ ┌── Tagesziel ────────┐ │
│ │  ████████░░  18/25   │ │
│ │     Minuten heute    │ │
│ └─────────────────────┘ │
│                         │
│ ▶ Weiterlernen          │
│ ┌─────────────────────┐ │
│ │ CE 01 / Modul 3     │ │
│ │ Dokumentation       │ │
│ │ ██████░░░░ 60%      │ │
│ └─────────────────────┘ │
│                         │
│ Dein Fortschritt        │
│ CE01 ████████░░ 75%     │
│ CE02 ██░░░░░░░░ 20%     │
│ CE03 ░░░░░░░░░░  0%     │
│ ...                     │
│                         │
├─────────────────────────┤
│ 🏠  📚  🔄  📊  📖   │
└─────────────────────────┘
```

## Mock-Daten benötigt

- 1 Test-User mit Streak, XP, Daily Goal
- Fortschrittsdaten über mehrere CEs
- Letzte 3 besuchte Module

## Technische Hinweise

- Seite: `src/app/[locale]/(dashboard)/home/page.tsx` (existiert als Placeholder)
- Komponenten: `src/components/dashboard/`
- Zustand-Store für User-State
- recharts für Fortschritts-Visualisierung
