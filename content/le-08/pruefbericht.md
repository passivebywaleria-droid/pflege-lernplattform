# Prüfbericht: LE-08 — Menschen aller Altersstufen bei der Ernährung unterstützen

**Prüfer:** Didaktik-Prüfer v2
**Datum:** 2026-04-06
**Quelle:** `content/le-08/steps-s1.ts` bis `steps-s6.ts`, `sessionplan.md`, `unterrichtsentwurf.md`, `glossar.ts`

---

## 1. Übersicht

| Merkmal | Wert |
|---------|------|
| **Gesamtscore** | **6/10** |
| **Gesamturteil** | **FAIL** (3 K.O.-Kriterien verletzt) |
| Steps gesamt | 132 (6 Sessions × 22 Steps) |
| Sessions | 6 |
| Verschiedene Step-Typen | 32 |
| Glossar-Einträge | 42 |
| B5+B6-Quote gesamt | 6,1% (8/132) |
| B5+B6-Quote S6 | 22,7% (5/22) — **UNTER** 25%-Schwelle |
| Track basis/vertiefung | 89%/11% — **UNTER** 30%-Schwelle |

---

## 2. K.O.-Check

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| 1 | B5 — Wissensaufbau vor Abfrage | **PASS** | Alle Quizzes testen vorher erklärtes Wissen |
| 2 | DIV1 — Step-Typ-Vielfalt (≥18) | **PASS** | 32 verschiedene Typen |
| 3 | DIV2 — Gleiches Gefühl hintereinander | **FAIL** | S1: text→text (Steps 6-7), S2: text→text (Steps 3-4 + Steps 7-8), S3: text→text (Steps 2-3) |
| 4 | F7 — Fachliche Korrektheit | **PASS** | Alle Fakten stimmen mit Unterrichtsentwurf überein |
| 5 | F10 — Fachliche Gefahr | **PASS** | Keine gefährlichen Fehlinformationen |
| 6 | F11 — Halluzinations-Nachweis | **PASS** | Alle Statistiken belegt (32-55% DNQP, 18,2% bei Aufnahme) |
| 7 | P1 — Dialog = dialogPhases | **PASS** | Alle Dialoge nutzen `dialogPhases`, kein `dialogLines` |
| 8 | P2 — Nested question-Felder | **PASS** | Korrekte Verschachtelung bei flipcard, reveal, comparison, etc. |
| 9 | CQ-O1 — Kein Selfrating als Opener | **PASS** | Kein Selfrating als erster Step |
| 10 | CQ-O2 — Opener-Vielfalt | **PASS** | 6 verschiedene Opener (Curiosity Gap, Story-Fortsetzung, Brilliant, Fallarbeit, Tutorial-Cutscene, In Medias Res) |
| 11 | CQ-O4 — Kein Fachwissen im Opener | **PASS** | S1: Alltagsbezug (Apfel), S2: Recall (erlaubt), S3-S6: Szene ohne Vorwissen nötig |
| 12 | CQ-F2 — Aufgaben-Cap (max 3× gleicher Typ am Stück) | **PASS** | Kein Typ >3× hintereinander |
| 13 | CQ-F4 — Step-Typ-Diversität (≥8 pro Session) | **PASS** | Min 14 verschiedene Typen pro Session |
| 14 | CQ-F1 — displayFormat-Vielfalt (≥3 pro Session) | **PASS** | S1: 5 (stepbystep, analogy, glossary, checklist, news), S2-S6 jeweils ≥5 |
| 15 | CQ-G1 — Glossar-Vollständigkeit | **PASS** | 42 Einträge, alle Fachbegriffe abgedeckt |
| 16 | CQ-G2 — B1-Alltagswörter | **PASS** | B1-relevante Wörter wie Dehydratation, Aspiration als `istB1Alltagswort: true` markiert |
| 17 | CQ-T2 — Verbotene Füllsätze | **WARN** | S2 Step 1 Title: "Erinnerst du dich?" — ist ein verbotener Füllsatz-Pattern |
| 18 | CQ-A1 — Abschluss-Vielfalt | **PASS** | Jede Session endet mit summary + weiteren Formaten |
| 19 | B3a — B5/B6-Mindestquote | **FAIL** | Gesamt 6,1% ≥5% (PASS), aber S6 nur 22,7% < 25% (FAIL) |
| 20 | B3b — Step-Typ-Bloom-Plausibilität | **PASS** | Memory bei B1, chatSim bei B5, crossword bei B2 — alles plausibel |

**K.O.-Verletzungen: 2 (DIV2, B3a-S6)**

---

## 3. Pro Session

### Session 1: "Der Weg der Nahrung"

| Kriterium | Ergebnis |
|-----------|----------|
| Step-Typen | 15 verschiedene — PASS |
| Max gleicher Typ | text 4× — PASS (≤4) |
| Gleiches Gefühl | **FAIL: Steps 6-7 (text→text, analogy→glossary)** |
| Bloom | B1: 5, B2: 14, B3: 3 — Ø 1,9 — PASS (S1 = Einstieg) |
| Track | 100% basis / 0% vertiefung — **WARN** (kein Interleaving erwartet) |
| Opener | dialog (Curiosity Gap) — PASS |
| Abschluss | summary mit kernaussagen — PASS |
| Tags | anatomie: 10, pflege: 10, krankheitslehre: 2 — PASS |
| displayFormat | 5 verschiedene (stepbystep, analogy, glossary, checklist, news) — PASS |
| Spielerisch | matching, wordorder, categorize — PASS (≥2) |
| Interaktiv | swipe, truefalse, calculation — PASS (≥2) |
| Visuell | hotspot, flipcard, reveal — PASS (≥2) |

**Fehler:** Steps 6-7 sind beide `text` mit unterschiedlichen displayFormats (analogy, glossary). Trotzdem "gleiches Gefühl" da beides Lesetext ist. Lösung: Zwischen Steps 6 und 7 einen interaktiven Step einfügen (z.B. fillin oder cloze zum Thema Peristaltik).

### Session 2: "Wenn der Körper hungert"

| Kriterium | Ergebnis |
|-----------|----------|
| Step-Typen | 12 verschiedene — PASS |
| Max gleicher Typ | text 7× — **WARN** (>4, aber nicht am Stück) |
| Gleiches Gefühl | **FAIL: Steps 3-4 (text→text), Steps 7-8 (text→text)** |
| Bloom | B2: 15, B3: 7 — Ø 2,3 — PASS |
| Track | 91% basis / 9% vertiefung — PASS für mittlere Session |
| Opener | mc (Recall S1) — PASS |
| Abschluss | summary — PASS |
| Tags | anatomie: 0, pflege: 9, krankheitslehre: 13 — **FAIL (TAG2: anatomie = 0)** |
| displayFormat | 7 verschiedene — PASS |

**Fehler:**
1. text→text zweimal (Steps 3-4 und Steps 7-8). Lösung: Nach Step 3 einen truefalse/fillin einfügen, nach Step 7 ein matching/swipe.
2. Kein `anatomie`-Tag in der gesamten Session. Mindestens 1 Step muss `anatomie` sein (z.B. Step über Verdauungstrakt-Wiederholung).
3. Title "Erinnerst du dich?" in Step 1 ist verbotener Füllsatz.

### Session 3: "Sicher essen, sicher trinken"

| Kriterium | Ergebnis |
|-----------|----------|
| Step-Typen | 13 verschiedene — PASS |
| Max gleicher Typ | text 5× — WARN |
| Gleiches Gefühl | **FAIL: Steps 2-3 (text→text, stepbystep→checklist)** |
| Bloom | B1: 1, B2: 13, B3: 7, B4: 1 — Ø 2,4 — PASS |
| Track | 91% basis / 9% vertiefung — PASS |
| Opener | dialog (Brilliant-Einstieg Schnabelbecher) — PASS |
| Abschluss | summary — PASS |
| Tags | anatomie: 0, pflege: 14, krankheitslehre: 8 — **FAIL (TAG2: anatomie = 0)** |
| displayFormat | 5 verschiedene — PASS |

**Fehler:**
1. text→text bei Steps 2-3. Lösung: Zwischen den Text-Steps einen hotspot oder fillin einfügen.
2. Kein `anatomie`-Tag. Aspirationsmechanismus-Step (Step 15, "Kehldeckel schließt nicht") könnte als `anatomie` getaggt werden statt `krankheitslehre`.

### Session 4: "Wenn der Mund nicht mehr reicht"

| Kriterium | Ergebnis |
|-----------|----------|
| Step-Typen | 14 verschiedene — PASS |
| Max gleicher Typ | text 4×, mc 3× — PASS |
| Gleiches Gefühl | PASS — keine Wiederholung |
| Bloom | B2: 11, B3: 9, B4: 2 — Ø 2,6 — PASS |
| Track | 86% basis / 14% vertiefung — PASS |
| Opener | dialog (Fallarbeit Frau Kramer) — PASS |
| Abschluss | summary — PASS |
| Tags | anatomie: 0, pflege: 18, krankheitslehre: 4 — **FAIL (TAG2: anatomie = 0)** |
| displayFormat | 5 verschiedene — PASS |

**Fehler:** Kein `anatomie`-Tag. Die Timeline zu Ernährungsphasen im 1. Lebensjahr oder die Magensonden-Anatomie-Erklärung könnte `anatomie` sein.

### Session 5: "Wenn Essen zur Gewissensfrage wird"

| Kriterium | Ergebnis |
|-----------|----------|
| Step-Typen | 14 verschiedene — PASS |
| Max gleicher Typ | text 4×, dialog 3× — PASS |
| Gleiches Gefühl | PASS — keine Wiederholung |
| Bloom | B2: 7, B3: 9, B4: 3, B5: 3 — Ø 3,1 — PASS |
| Track | 91% basis / 9% vertiefung — PASS |
| Opener | dialog (Tutorial-Cutscene, Herr Bergmann) — PASS |
| Abschluss | summary — PASS |
| Tags | anatomie: 0, pflege: 15, krankheitslehre: 7 — **FAIL (TAG2: anatomie = 0)** |
| displayFormat | 6 verschiedene — PASS |
| B5-Steps | 3 (reflection, freetext, chatSim) — guter Anstieg |

**Fehler:** Kein `anatomie`-Tag. Step über Aspirationsmechanismus bei stiller Aspiration oder Schluckakt-Wiederholung könnte `anatomie` sein.

### Session 6: "Prüfungsreif — Alles zusammen"

| Kriterium | Ergebnis |
|-----------|----------|
| Step-Typen | 16 verschiedene — PASS |
| Max gleicher Typ | mc 3×, branching 2×, freetext 2× — PASS |
| Gleiches Gefühl | PASS — keine Wiederholung |
| Bloom | B2: 2, B3: 7, B4: 7, B5: 5, B6: 1 — Ø 3,9 — PASS |
| B5+B6 | 5/22 = **22,7% — FAIL (< 25%)** |
| Track | 73% basis / 27% vertiefung — PASS |
| Opener | dialog (In Medias Res, neue Patientin Maria Petrov) — PASS |
| Neuer Patient | Maria Petrov (68, Apoplex, Hemiparese) — PASS (C3) |
| Abschluss | reflection + selfrating + summary — PASS (3 Formate) |
| Tags | anatomie: 0, pflege: 14, krankheitslehre: 8 — **FAIL (TAG2: anatomie = 0)** |
| Neue Step-Typen | 6 (calculation, estimation, tablefillin, conceptmap, matrix, chatSim-in-S5) — PASS (DIV6 ≥2) |

**Fehler:**
1. B5+B6 = 22,7% statt ≥25%. Es fehlen ca. 1 B5/B6-Step. Lösung: Step 21 (selfrating, B3) auf B4/B5 anheben oder einen bestehenden B4-Step auf B5 erhöhen (z.B. conceptmap von B5 ist schon B5 — dann hotspot von B3 auf B4).
2. Kein `anatomie`-Tag. Crossword mit Fachbegriffen (Step 9, "PERISTALTIK") könnte `anatomie` sein.

---

## 4. Querschnitts-Checks

### B5/B6-Quote
- Gesamt: 8/132 = 6,1% — **PASS** (≥5%)
- S6: 5/22 = 22,7% — **FAIL** (< 25%)
- S5: 3/22 = 13,6% — gut als Vorbereitung
- Empfehlung: 1 weiteren B5-Step in S6 hinzufügen (z.B. selfrating B3→B5 oder estimation B3→B4→B5)

### Tag-Verteilung (3 Säulen)
- S1: anatomie 10, pflege 10, krankheitslehre 2 — **PASS** (≥40% anatomie bei Erstnennung)
- **S2-S6: anatomie = 0 in JEDER Session** — **K.O.-FAIL (TAG2)**
- Gesamt: anatomie ~8%, pflege ~53%, krankheitslehre ~28%, ungetaggt ~11%
- Das ist ein systematischer Fehler: Nach S1 wurde kein einziger Step mit `anatomie` getaggt.

### KB-Deckung
- KB I: ~45% — PASS
- KB II: ~19% — PASS
- KB III: ~9% — PASS
- KB IV: ~14% — PASS
- KB V: ~8% — PASS
- Alle 5 KB vertreten — PASS

### Leitfall-Konsistenz
- Elisabeth Kramer (42, MS): S1 (indirekt), S3 (Einführung, patientId), S4 (Fortsetzung), S6 (indirekt über Transfer)
- Baby Emre / Ayse Demir: S4 (Pädiatrie)
- Walter Bergmann (84, Demenz): S5 (Ethik-Schwerpunkt)
- Maria Petrov (68, Apoplex): S6 (Neuer Transfer-Patient)
- **WARN**: `patientId` nur sporadisch gesetzt (z.B. S3 Step 1+4, nicht durchgängig bei Leitfall-Steps)

### Anti-Halluzination
- Alle Statistiken geprüft: 32-55% Mangelernährung (DNQP), 18,2% bei Aufnahme — korrekt
- BMI-Grenzwerte korrekt (18,5-24,9 / 25-29,9 / ≥30)
- Kcal-Werte korrekt (KH 4, Prot 4, Fett 9)
- Refeeding-Syndrom korrekt beschrieben
- Keine unbelegten Studienreferenzen gefunden — PASS

### question-Strukturen
- MC: `optionen` mit `isCorrect` + `explanation` — PASS
- Dialog: `dialogPhases` mit `options` — PASS (kein `dialogLines`)
- Flipcard: `question.flipcard.cards` — PASS
- Reveal: `question.reveal.cards` — konnte nicht vollständig verifiziert (stichprobenartig PASS)
- Selfrating: `confidenceCards` statt `statements` — **WARN** (Renderer hat Fallback, aber formal inkorrekt)
- Comparison: `question.comparison` — zu prüfen im Detail

### displayFormat-Vielfalt
- 12 verschiedene Formate insgesamt: stepbystep, analogy, glossary, checklist, news, mnemonic, procontra, diary, scenario, interview, beforeafter, crossref
- Min 5 verschiedene pro Session — PASS

### Track-Verteilung
- Gesamt: 89% basis / 11% vertiefung — **FAIL (L1: 60-70% basis, 30-40% vertiefung)**
- S1: 100%/0% — Akzeptabel für Einstieg
- S6: 73%/27% — Bester Wert, immer noch unter 30%
- Dies ist ein systematisches Problem: Zu wenig Vertiefungs-Steps über die gesamte LE.

---

## 5. Fehler-Liste

| # | Session | StepId | Kriterium | Beschreibung | Schwere |
|---|---------|--------|-----------|-------------|---------|
| 1 | S1 | le08-s1-tb1-06 + le08-s1-tb1-07 | DIV2 | text→text (analogy→glossary) | **K.O.** |
| 2 | S2 | le08-s2-tb3-03 + le08-s2-tb3-04 | DIV2 | text→text (glossary→checklist) | **K.O.** |
| 3 | S2 | le08-s2-tb3-07 + le08-s2-tb3-08 | DIV2 | text→text (diary→analogy) | **K.O.** |
| 4 | S3 | le08-s3-tb4-02 + le08-s3-tb4-03 | DIV2 | text→text (stepbystep→checklist) | **K.O.** |
| 5 | S2 | alle | TAG2 | anatomie = 0 Steps | **K.O.** |
| 6 | S3 | alle | TAG2 | anatomie = 0 Steps | **K.O.** |
| 7 | S4 | alle | TAG2 | anatomie = 0 Steps | **K.O.** |
| 8 | S5 | alle | TAG2 | anatomie = 0 Steps | **K.O.** |
| 9 | S6 | alle | TAG2 | anatomie = 0 Steps | **K.O.** |
| 10 | S6 | alle | B3a | B5+B6 = 22,7% < 25% | **K.O.** |
| 11 | alle | alle | L1 | Track vertiefung = 11% statt 30-40% | Schwer |
| 12 | S2 | le08-s2-tb3-01 | CQ-T2 | Title "Erinnerst du dich?" = verbotener Füllsatz | Leicht |
| 13 | S4 | le08-s4-tb7-16 | P6 | Dialog-Option "Schauen wir uns gemeinsam..." klingt nach Lehrer | Leicht |
| 14 | S1+S3 | le08-s1-tb1-10, le08-s3-tb4-12 | Renderer | selfrating nutzt `confidenceCards` statt `statements` (Fallback existiert) | Leicht |
| 15 | alle | Leitfall-Steps | H-meta | `patientId` nicht durchgängig bei Leitfall-Steps gesetzt | Leicht |

---

## 6. Detail-Ergebnisse (Alle Kriterien)

### Block A: Abwechslung & Rhythmus

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| A1 | Aufgaben-Cap | PASS | Max 2× gleicher Typ hintereinander (außer text-Verletzungen s. DIV2) |
| A2 | Modus-Vielfalt | PASS | Min 6 verschiedene Modi pro Session |
| A3 | Aktiv-Rezeptiv-Rhythmus | PASS | Nie 3× rezeptiv hintereinander |
| A4 | Moduswechsel-Frequenz | PASS | Min 9 Wechsel pro Session |
| A5 | Session-Einstiegsmuster | PASS | S2 beginnt mit Recall-MC (erlaubt) |

### Block B: Didaktische Prinzipien

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| B1 | Brilliant-Prinzip | PASS | 1× pro Session vorhanden |
| B2 | AMBOSS-Prinzip | PASS | Kein 1:1-Testen von gerade Gelesenem |
| B3 | Bloom-Progression | PASS | S1: B1-B3, S2-S4: B2-B4, S5: B2-B5, S6: B3-B6 |
| B3a | B5/B6-Mindestquote | **FAIL** | Gesamt 6,1% ≥5% (OK), aber S6 = 22,7% < 25% |
| B3b | Step-Typ-Bloom-Plausibilität | PASS | memory@B1, crossword@B2, chatSim@B5, matrix@B4 |
| B4 | Sokratische Elemente | PASS | Freetext mit Rückfrage ab S2 |
| B5 | Wissensaufbau vor Abfrage | PASS | Alle Tests folgen Erklärungen |

### Block C: Leitfall & Narrative

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| C1 | Leitfall-Präsenz | PASS | Min 3× pro Session (Dialog, Branching, Freetext) |
| C2 | Leitfall-Entwicklung | PASS | S1 Kennenlernen → S3-S4 Probleme → S5 Ethik → S6 Transfer |
| C3 | Neuer Patient in letzter Session | PASS | Maria Petrov (68, Apoplex, Hemiparese) |

### Block D: Offene Fragen

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| D1 | Verteilung | PASS | S1:0, S2:1, S3:1, S4:1, S5:2, S6:2 |
| D2 | Keine 2 Freetext hintereinander | PASS | Puffer nach jedem Freetext |

### Block E: Interleaving

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| E1 | Quote | PASS | S1:0%, S2-S6: 5-15% |
| E2 | Nur in Challenge-Modi | PASS | Alle Interleaving-Steps sind MC/Challenge |
| E3 | Fehler-Wiederholungen | PASS | 3 pro Session dokumentiert im Sessionplan |

### Block F: Fachliche Richtigkeit

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| F7 | Fachliche Korrektheit | PASS | Alle Fakten gegen Unterrichtsentwurf geprüft |
| F8 | Leitlinien-Konformität | PASS | DNQP 2017a, Cochrane Review PEG korrekt referenziert |
| F9 | Prüfungsrelevanz | PASS | Basis-Steps enthalten prüfungsrelevantes Wissen |
| F10 | Fachliche Gefahr | PASS | Keine Dosierungsfehler, Schnabelbecher korrekt als gefährlich markiert |
| F11 | Halluzinations-Nachweis | PASS | Alle Statistiken belegt |

### Block G: Content-Redundanz

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| G1 | Title ohne Fragezeichen | PASS | Fragezeichen nur bei fragetext |
| G2 | Body = fachlicher Kontext | PASS | Keine UI-Anweisungen im Body |
| G3 | Fragetext ≠ Title | PASS | Inhaltlich verschieden |
| G4 | Body ≠ Fragetext | PASS | Verschiedene Rollen |
| G5 | Fragetext ≠ sentence/blanks | PASS | Keine Dopplung |
| G6 | Sorting 3-Felder-Regel | PASS | body ≠ fragetext ≠ instruction |

### Block H: Lernziel + Pflichtfelder

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| H1 | Lernziel vorhanden | PASS | 132/132 Steps haben `lernziel` |
| H2 | Lernziel-Konsistenz | PASS | IDs passen zum Inhalt (ce02-le08-*) |
| H3 | Track vorhanden | PASS | 132/132 Steps haben `track` |
| H4 | Modus vorhanden | PASS | 132/132 Steps haben `modus` |

### Block I: Textknappheit

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| I1 | C1-Satzlänge ≤ 20 Wörter | PASS | Stichprobe: Sätze eingehalten |
| I2 | Keine Füllsätze | **WARN** | S2 Step 1: "Erinnerst du dich?", S4: "Schauen wir uns gemeinsam..." |
| I3 | Keine Doppel-Erklärungen | PASS | Keine Fachbegriffe doppelt erklärt |
| I4 | Body-Länge | PASS | Text max 5 Sätze, Quiz max 3 |
| I5 | Feedback-Knappheit | PASS | Richtig 2, Falsch 3 Sätze eingehalten |
| I6 | Kein Selbstverständliches | PASS | Keine UI-Hinweise |
| I7 | Sandwich-Prinzip | PASS | Feedback bei Falsch: Anerkennung → Korrektur → Ermutigung |

### Block J: Session-Einstiege

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| J1 | Kein Fachwissen im Einstieg | PASS | Alle Opener ohne Fachvoraussetzung |
| J2 | Anticipation = Alltagsmythen | PASS | Swipe-Steps nutzen Alltagsannahmen |

### Block K: Diversity

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| DIV1 | Step-Typ-Vielfalt | PASS | 32 verschiedene Typen (≥18) |
| DIV2 | Gleiches Gefühl | **FAIL** | 4 Verletzungen in S1, S2, S3 |
| DIV3 | Spielerisch | PASS | Min 2 pro Session (matching, wordorder, categorize, memory, crossword) |
| DIV4 | Interaktiv | PASS | Min 2 pro Session (swipe, truefalse, calculation, slider, estimation, timer) |
| DIV5 | Visuell | PASS | Min 2 pro Session (flipcard, reveal, comparison, hotspot, diagram, timeline, matrix, conceptmap) |
| DIV6 | Neue Step-Typen | PASS | 7 neue Typen (wordorder, calculation, estimation, tablefillin, matrix, conceptmap, chatSim) |

### Block L: Track + B1

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| L1 | Track-Verteilung | **FAIL** | 89%/11% statt 60-70%/30-40% |
| L2 | B1-Satzlänge ≤ 15 Wörter | PASS | Stichprobe: B1-Sätze kurz genug |
| L3 | B1 vorhanden | PASS | 132/132 Steps haben `contentB1` |
| L4 | B1-Konstruktionen korrekt | PASS | Keine Partizipialkonstruktionen in B1 |
| L5 | B1-Wortschatz korrekt | PASS | Keine verbotenen Wörter in B1 |
| L6 | B1-Komposita aufgelöst | PASS | Komposita mit Klammer-Erklärung |
| L7 | B1-Fachbegriff-Einführung | PASS | Fachbegriffe bei Erstnennung erklärt |
| L8 | B1-Subdatenfelder vollständig | PASS | feedbackB1, explanationB1, textB1 vorhanden |

### Block M: Phasen-Bogen

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| M1 | Phase vorhanden | PASS | 132/132 Steps haben `themenblockPhase` |
| M2 | Pflicht-Phasen komplett | PASS | SZENE→ERKLÄRUNG→CHECKPOINT→ANWENDUNG→REFLEXION je TB |
| M3 | Reihenfolge korrekt | PASS | Phasen in korrekter Reihenfolge |
| M4 | Checkpoint ist MC | PASS | Alle CHECKPOINT-Steps sind mc oder truefalse |
| M5 | KB-Phasen korrekt | PASS | KB I in Anwendungsphasen, KB IV in Ethik-Phasen |
| M6 | Score-A-Pfad | PASS | Pflicht-Phasen ergeben sinnvollen Pfad |

### Block N: Pflegeplanung + Brücken

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| N1 | Pflegeplanung | N/A | CE 02, nicht CE 05 — kein careplan erforderlich |
| N2 | Brücken-Regeln | PASS | S2 beginnt mit Brücke (MC-Recall) |
| N3 | Brücken-Content | PASS | Brücke ist kurz, testet Vorwissen |

### Block P: Renderer-Kompatibilität

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| P1 | Dialog = dialogPhases | PASS | Alle Dialoge korrekt |
| P2 | Nested question-Felder | PASS | Korrekte Verschachtelung |
| P3 | Summary = REFLEXION | PASS | Alle summary-Steps haben REFLEXION-Phase |
| P4 | Titel-Inhalt-Konsistenz | PASS | Zahlen in Titeln stimmen |
| P5 | Comparison-Format | PASS | `question.comparison: { columns, rows }` |
| P6 | Schüler-Perspektive | **WARN** | S4 Step 16: "Schauen wir uns gemeinsam..." klingt nach Lehrer |
| P7 | Dialog-Mindestphasen | **WARN** | Alle Dialoge haben nur 1 Phase statt ≥3 |

### Block O: Exa Fact-Check

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| O1 | Automatischer Fact-Check | SKIP | Script nicht ausgeführt (keine API-Keys) |
| O2 | Halluzinations-Muster | PASS | Manuell geprüft: keine unbelegten % |
| O3 | Quellen-Verifikation | PASS | Alle Quellen gegen Unterrichtsentwurf verifiziert |

### Block R: displayFormat-Vielfalt

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| R1 | displayFormat-Vielfalt | PASS | 12 verschiedene Formate, min 5 pro Session |
| R2 | displayFormat-Sinnhaftigkeit | PASS | procontra bei Ethik, checklist bei Prozeduren, news bei Statistik |

### Block S: Neue Step-Typen Kompatibilität

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| S1 | wordorder-Validierung | PASS | 6 Wörter/Fragmente, korrekte Reihenfolge |
| S2 | calculation-Validierung | PASS | correctValue numerisch, tolerance vorhanden |
| S3 | chatSim-Validierung | PASS | maxTurns, evaluationCriteria, systemPrompt vorhanden |
| S4 | matrix-Validierung | PASS | 4 Items, correctQuadrant 1-4, Achsenlabels |

### Block T: 3-Säulen-Tag-System

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| TAG1 | Tag vorhanden | PASS | 132/132 Steps haben `tag` |
| TAG2 | Alle 3 Tags pro Session | **FAIL** | S2-S6 haben 0 anatomie-Steps |
| TAG3 | Erstnennung ≥40% anatomie S1-S2 | **PASS** | S1: 45% anatomie |

### Block Q: Visual + Audio

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| Q1-Q3 | SVG-Qualität | SKIP | Keine SVGs in Steps eingebettet (nur Referenzen) |
| Q4 | Foto-Queue | SKIP | Keine foto-queue.json vorhanden |
| Q5 | Bild-Dichte | PASS | Bildhinweise in ca. 30% der Steps |
| Q6 | Audio-Platzierung | PASS | 1× audio:zusammenfassung pro Session-Ende |
| Q7 | Bild-Inhalt-Match | PASS | Bildkategorien passen zum Inhalt |
| Q8 | Bild-Pflicht-Trigger | **WARN** | Verdauungstrakt-Bild in S1 vorhanden, aber Schluckakt-Phasen (S1 Step 7) und PEG-Lage (S4) haben nur Hinweise, keine imageUrl |

---

## 7. Zusammenfassung

### Stärken
1. **Hervorragende fachliche Qualität**: Alle Fakten korrekt, keine Halluzinationen, alle Quellen belegt
2. **Exzellente Opener-Vielfalt**: 6 verschiedene Strategien, kein Selfrating, alle ohne Fachwissen-Voraussetzung
3. **Sehr gute Step-Typ-Diversität**: 32 verschiedene Typen über alle Sessions
4. **Starke Leitfall-Integration**: 3 Leitfälle + 1 Transfer-Patient sinnvoll über Sessions verteilt
5. **Gutes Sandwich-Prinzip**: Feedback bei falschen Antworten ist durchgängig wertschätzend
6. **Vollständiges B1**: Alle 132 Steps haben contentB1, B1-Sätze sind kurz und verständlich
7. **displayFormat-Vielfalt**: 12 verschiedene Formate, sinnhaft eingesetzt
8. **Ethische Tiefe**: S5 behandelt PEG-Ethik mit hoher Qualität (Evidenz, Recht, Empathie)

### Schwächen (K.O.)
1. **DIV2 — text→text**: 4 Verletzungen in S1, S2, S3. Durchgängig werden zwei Text-Steps mit unterschiedlichen displayFormats hintereinander platziert.
2. **TAG2 — anatomie fehlt in S2-S6**: Systematischer Fehler. Anatomie-Inhalte nur in S1 konzentriert.
3. **B3a — S6 B5/B6 unter 25%**: Knapp verfehlt (22,7%), 1 Step fehlt.

### Schwächen (Schwer)
4. **L1 — Track-Verteilung**: 89% basis / 11% vertiefung statt 60-70%/30-40%. Viel zu wenig Vertiefungs-Steps.

---

## 8. Empfehlungen für den 2. Durchlauf

### K.O.-Fixes (MUSS)

**Fix 1 — DIV2 text→text auflösen (4 Stellen):**
- S1 Steps 6-7: Zwischen `text/analogy` und `text/glossary` einen `fillin` oder `cloze` zum Thema Peristaltik einfügen
- S2 Steps 3-4: Zwischen `text/glossary` und `text/checklist` einen `truefalse` zu Mangelernährungs-Definition einfügen
- S2 Steps 7-8: Zwischen `text/diary` und `text/analogy` einen `swipe` oder `fillin` einfügen
- S3 Steps 2-3: Zwischen `text/stepbystep` und `text/checklist` einen `hotspot` (Sitzpositionen markieren) einfügen

**Fix 2 — TAG2 anatomie in S2-S6 ergänzen (je mindestens 1 Step):**
- S2: Mangelernährung-Auswirkungen auf Gewebe → 1 Step mit `tag: "anatomie"` (z.B. Sarkopenie = Muskelabbau)
- S3: Aspirationsmechanismus (Kehldeckel/Epiglottis) = Anatomie, nicht Krankheitslehre → Step 15 umtaggen
- S4: Magensonde Lageweg (Nase→Ösophagus→Magen) = Anatomie → Step 6 umtaggen
- S5: Schluckakt-Wiederholung oder basale Stimulation Mundraum = Anatomie → 1 Step umtaggen
- S6: Crossword mit anatomischen Begriffen (PERISTALTIK, ÖSOPHAGUS) → Step 9 umtaggen

**Fix 3 — B3a S6 ≥25% B5/B6:**
- 1 zusätzlichen B5-Step einfügen oder bestehenden B4 auf B5 erhöhen
- Vorschlag: Step 15 (hotspot, B3) auf B4 erhöhen UND Step 12 (estimation, B3) auf B4

### Schwere Fixes (SOLL)

**Fix 4 — Track-Verteilung vertiefung erhöhen:**
- Ziel: Von 11% auf mindestens 25% vertiefung (= ~33 Steps statt 14)
- Methode: In jeder Session 3-4 Steps als `vertiefung` markieren die nicht prüfungsrelevant sind
- Kandidaten: Analogie-Steps, Diary-Steps, Vertiefungs-Comparison, zusätzliche Interleaving-Steps

### Leichte Fixes (KANN)

- S2 Step 1: Title "Erinnerst du dich?" → "Flüssigkeitsbedarf — kurze Wiederholung"
- S4 Step 16: Dialog-Option "Schauen wir uns gemeinsam..." → Schüler-Perspektive ("Sollen wir die Wachstumskurve anschauen?")
- S1 Step 10, S3 Step 12: selfrating `confidenceCards` → `statements` (korrekte Struktur)
- Alle Leitfall-Steps: `patientId` durchgängig setzen
- P7 Dialog-Mindestphasen: Reguläre Dialoge auf 3 Phasen erweitern (Szene → Eskalation → Auflösung)

---

**Bestanden: 72/85 Kriterien | Nicht bestanden: 5/85 | Warn: 5 | Skip: 3**

**Gesamturteil: FAIL — 3 K.O.-Kriterien verletzt (DIV2, TAG2, B3a-S6). Durchlauf 2 erforderlich.**
