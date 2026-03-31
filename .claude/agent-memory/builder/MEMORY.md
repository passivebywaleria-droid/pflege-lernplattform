# Builder Memory

## LE-01 Steps S1-S4 generiert (2026-03-30)
- `content/le-01/steps-s1.ts` — 22 Steps, "Was ist Pflege?", B1-B3, Yasemin Tag 1
  - Brilliant: Step 2 Swipe (Anticipation Guide VOR Erklaerung)
  - Track: 19 basis / 3 vertiefung
- `content/le-01/steps-s2.ts` — 22 Steps, "Pflegeprozess + Beobachtung", B1-B3, Yasemin Aufnahmegespraech
  - Step-Typen: dialog, confidence, swipe(9), text(3), diagram(cycle), sequencing, reveal(6), mc, matching, flipcard(6), cloze(3), hotspot(4), comparison(5), crossword(6), timer(4 kein Interleaving), freetext(Jonas OQ3), truefalse(4), summary
  - Brilliant: Step 3 Swipe (Pflegeprozess-Schritte raten VOR Erklaerung)
  - Track: 17 basis / 5 vertiefung
  - Offene Frage: Step 20 Freetext (Pflegeziel formulieren, Jonas)
- `content/le-01/steps-s3.ts` — 22 Steps, "Kommunikation + Naehe/Distanz", B2-B3, Yasemin + Herr Brenner
  - Step-Typen: dialog(3), swipe(4), text(3), diagram(mindmap 10), categorize(8/3), flipcard(4-Ohren), mc, matching, slider(Intimdistanz), hotspot(3), reveal(4), branching(BS1), truefalse(4), crossword(6), comparison(5), timer(4 inkl. 1x Maslow I5), reflection(OQ2), summary
  - Brilliant: Step 2 Swipe (Reaktionen bewerten VOR Theorie)
  - Interleaving: Step 19 Timer hat 1 Maslow-Frage (I5)
  - Track: 17 basis / 5 vertiefung
  - Offene Frage: Step 20 Reflection (Naehe-Distanz-Dilemma)
- `content/le-01/steps-s4.ts` — 22 Steps, "Menschenbild, Ethik, Wuerde", B2-B4, Yasemin Reflexionsgespraech
  - Step-Typen: dialog(3), swipe(5), text(2), reveal(4 Wuerde), mc(Pflege-Charta), flipcard(4 Prinzipien), matching(4 Charta-Artikel), categorize(8/4 Prinzipien), slider(8 Artikel), timeline(1948-2017), truefalse(4), memory(6 Paare), timer(4 inkl. 2x Interleaving S2+S3), comparison(ICN vs Charta), branching(Autonomie vs Nonmalefizienz B4), crossword(6), reflection(Prinzipienkonflikt B4), confidence(4), summary
  - Brilliant: Step 2 Swipe (Ethik/Wuerde-Aussagen VOR Theorie)
  - Interleaving: Step 15 Timer hat 2 Fragen aus S2 (Pflegeprozess) + S3 (Kommunikation)
  - Track: 15 basis / 7 vertiefung
  - Offene Frage: Step 19 Reflection (Prinzipienkonflikt)
- Alle v2-Pflichtfelder: track, modus, lernziel, contentC1, contentB1
- Import: `from "../_types"` (v2-Format)
- Phase: String ("s1"/"s2"/"s3"/"s4")
- Kein manuelles xpValue (per Formel)
- TypeScript-konform: 0 Fehler in le-01-Dateien
- Naechster Schritt: S5-S8 generieren (Pflegetheorien, EBN, Transfer, Pruefung)

## LE-01 Sessionplan v2 (2026-03-30)
- `content/le-01/sessionplan.md` — 8 Sessions, 176 Steps, 27 Step-Typen
- CE-01, 40 UE, 1. Ausbildungsdrittel, CE-Typ: orientierung (Grundlagen)
- Bloecke: 3+3+2 (S1-S3 Grundlagen B1-B3, S4-S6 Vertiefung B2-B4, S7-S8 Transfer B4-B6)
- Leitfaelle: Yasemin Demirci (S1-S6), Ahmed Al-Rashid (S7), Jonas Berger (S7-S8), Frau Schneider (S8 neu)
- S1: Was ist Pflege? (Definitionen, Profession, F25-F32)
- S2: Pflegeprozess + Beobachtung (F01-F08)
- S3: Kommunikation + Pflegebeziehung (F09-F16)
- S4: Menschenbild, Ethik, Wuerde (F19-F25)
- S5: Pflegetheorien I — Beduerfnistheorien (F37-F42, F48-F49)
- S6: Pflegetheorien II + EBN (F43-F47, F33-F36, F50)
- S7: Transfer (Al-Rashid + Jonas, Tuckman F17-F18, BS1+BS2)
- S8: Pruefung + Reflexion (Frau Schneider neu, OQ1-OQ5, TA1-TA3)
- Track: 68% basis / 32% vertiefung (Ziel 60-70%)
- Interleaving: 0%→0%→5%→10%→10%→10%→15%→20%
- 24 Fehler-Wiederholungen geplant (3 pro Session)
- Naechster Schritt: Content-Generator fuer S5-S8 (S1-S4 Steps bereits generiert)

## LE 48 — Rehabilitation bei neurologischen Erkrankungen (2026-03-29)
- `content/le-48/rohmaterial.md` — vollständig erstellt
- CE-07, 30 UE, 3. Ausbildungsdrittel, KB I.4 (40%) + KB III.1 (35%) + KB II.2 (25%)
- 25 Kernfakten (F01–F25): Schlaganfall, Parkinson, MS, Bobath, CIMT, Prophylaxen, Reha-Team
- 15 Glossarbegriffe DE/B1/AR/TR
- 3 Leitfälle: Frau Okonkwo (58, Schlaganfall+Aphasie), Herr Klein (65, Parkinson St.3), Lena (16, MS-Erstmanifestation)
- 5 Interleaving-Verknüpfungen (LE 06, 20, 30, 42, 47)
- 8 Lernziel-IDs (ce07-le48-*)
- 2 Challenge-Szenarien (B3–B6): Schlaganfall-Notfall + Parkinson-OP
- 3 Praxisaufträge + 3 Eröffnungsempfehlungen mit Brilliant-Moment

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
