# Builder Memory

## LE-04 Rheumatoide Arthritis — Sessionplan + Gamification (2026-03-21)
- Sessionplan: `content/ce-05/le-04-ra/sessionplan.md` — 3 Sessions, 66 Steps total
- Gamification: `content/ce-05/le-04-ra/gamification.md` — 727 Basis-XP, 11 Achievements
- Session 1: 22 Steps, Patient A (Yilmaz), B1-B3, 218 Basis-XP
- Session 2: 23 Steps, Patient A weiter (Tag 3-4), B2-B4, 244 Basis-XP, 2 Interleaving
- Session 3: 21 Steps, Patient B (Brandt), B4-B6, 265 Basis-XP, 3 Interleaving
- Die bestehenden 17 Steps aus steps.ts wurden in die Modi-Struktur der Session 1 integriert und um 5 Steps ergänzt (Memory, Timer, Dialog, TrueFalse, Summary)

## LE-04 RA Symptome/Diagnose — Sessions implementiert (2026-03-25)
- `content/ce-05/le-04-ra-symptome-diagnose/steps.ts` — Session 1 (S1, Symptome, swipe+reveal+flipcard+comparison etc.)
- `content/ce-05/le-04-ra-symptome-diagnose/steps-s2.ts` — Session 2 (21 Steps, "Wie wird diagnostiziert?", B2-B4, 340 XP)
  - Step-Typen: hotspot, text(2), mc(1), reveal, comparison, sorting, dialog(4 Phasen), timeline, crossword, slider, highlight, confidence, flipcard, categorize, cloze, branching, swipe, reflection, timer, summary
  - Brilliant-Prinzip: Step 1 (Röntgenbild-Hotspot VOR Erklärung)
  - Interleaving: Step 20 Timer (1 Gicht-Frage)
  - Offene Frage: Step 19 Reflection (Frühdiagnostik)
  - Alle 5 neuen Step-Typen: swipe(18), flipcard(14), reveal(4), timeline(9), comparison(6)
  - Patient: Mehmet Demir, 43, Fliesenleger — Diagnostik-Weg (Woche 1-5)
  - Differentialdiagnose-Branching: RA vs. Arthrose (Frau Weber, 62)
- `content/ce-05/le-04-ra-symptome-diagnose/steps-s3.ts` — NOCH NICHT ERSTELLT

## LE-04 RA (alt, le-04-ra/) — Alle 3 Sessions (2026-03-21, veraltet)
- `content/ce-05/le-04-ra/steps.ts` — Session 1 (22 Steps, Frau Yilmaz, B1-B3)
- `content/ce-05/le-04-ra/steps-s2.ts` — Session 2 (23 Steps, Frau Yilmaz Tag 3-4, B2-B4)
- `content/ce-05/le-04-ra/steps-s3.ts` — Session 3 (21 Steps, Lukas Brandt, B4-B6)
- S3 Step-Typen: 5x mc, 2x dialog, 3x text, 3x freetext, 1x truefalse, 1x branching, 1x crossword, 1x timer, 1x sorting, 1x fillin (fehlt - als text/summary), 1x selfrating (fehlt - als text/summary)
- S3 Interleaving: 3 Fragen (Step 3 Schmerzmanagement, Step 10 Gicht, Step 17 Cortison)
- S3 Offene Fragen: 3 (Steps 11, 15, 19) — nie 2 direkt hintereinander
- S3 Brilliant-Frage: Step 6 (altes Wissen, neuer Kontext)
- TypeScript-konform, alle Validierungen bestanden

## Didaktik-Regisseur Patterns
- 8 Erlebnis-Modi: Checkpoint, Story, Challenge, Entdecker, Puzzle, Sortierstation, Schreibtisch, Praxis-Sim
- Brilliant-Prinzip: Frage VOR Erklärung (mind. 1x pro Session)
- AMBOSS-Prinzip: Nie 1:1 testen was gerade gelesen wurde
- Aufgaben-Cap: Max 3 gleiche Typen am Stück
- Rhythmus: ~3 Min pro Modus-Block, Aktiv-Rezeptiv wechselnd
- Offene Fragen: S1=1, S2=1-2, S3=2-3 (nie 2 direkt hintereinander)
- Nach Schreibtisch immer etwas Leichtes (Puzzle oder Challenge)

## XP-System (aus gamification-designer.md)
- XP = Basis-XP (Step-Typ) + Bloom-Bonus
- Streaks: 3x=1.5x, 5x=2x, 8x=2.5x, 10x=3x
- Boni: "Beim ersten Mal" (+10), "Blitzschnell" (+20), "Perfektes Gedächtnis" (+15), "Bloom-Meister" (+20)
- Zielkorridor pro LE: 400-800 Basis-XP
