# Spec: Gamification

> Priorität: MITTEL — Wird parallel zum Dashboard gebaut

## Überblick

Streaks, XP und Daily Goals motivieren Schüler zum täglichen Lernen. Inspiriert von Duolingo, aber dezenter (Pflege-Kontext).

## Features

### Streaks
- Tägliche Lernstreifen (mindestens 1 Lektion oder Quiz pro Tag)
- Streak-Freeze: 2 pro Woche (Streak bleibt trotz Pause)
- Visuell: Flammen-Icon + Tageszahl
- Streak-Verlust: Motivierende Nachricht, kein Bestrafungsgefühl

### XP (Erfahrungspunkte)
- Lektion abgeschlossen: +20 XP
- Quiz bestanden (≥80%): +30 XP
- Quiz bestanden (100%): +50 XP
- Streak-Bonus (7 Tage): +100 XP
- Mastery-Up: +50 XP
- Daily Goal erreicht: +25 XP

### Daily Goals (Lernzeit)
- Einstellbar: 5 / 10 / 15 / 20 Minuten pro Tag
- Standard: 10 Minuten
- Fortschrittsring auf Dashboard
- Benachrichtigung wenn Ziel erreicht

## Datenmodell (bereits in Schema)

- `userStreaks` — currentStreak, longestStreak, streakFreezesRemaining
- `xpLog` — xpAmount, source, createdAt
- `userDailyGoals` — goalMinutes (5/10/15/20)

## Komponenten

- `src/components/gamification/streak-display.tsx`
- `src/components/gamification/xp-display.tsx`
- `src/components/gamification/daily-goal-ring.tsx`
- `src/components/gamification/xp-animation.tsx` (Framer Motion Pop-up)

## Technische Hinweise

- Framer Motion für XP-Animationen (+30 XP Popup)
- Zustand-Store für Gamification-State
- Kein Sound (störend in Lernumgebung)
