# Pflege-Review: ls-wagner-reanimation

**Geprüft:** 2026-07-03
**Modus:** code (fertiger TypeScript-Content)
**Files:** 2 (phases.ts mit 5 Akut-Phasen + patient.ts)
**Grounding-Basis:** specs/ce-06/kernfakten/reanimation-bls.md (F-01–F-11) + notfallassessment.md (F-01–F-07)
**Step-Anzahl:** 8 (3 MC, 1 TrueFalse, 1 Sorting, 2 Branching, 1 Reflection)

## Gesamturteil vorab

Der Reanimations-Content ist **klinisch korrekt** und algorithmisch sauber. Alle sicherheitskritischen Elemente stimmen mit ERC 2021 / Pflege heute überein:

- Erkennen: keine Reaktion + keine normale Atmung → HKS; Schnappatmung explizit NICHT als Atmung gewertet (erk-01) ✓
- keine routinemäßige Pulskontrolle vor Reanimationsbeginn (erk-02) ✓
- Notfallteam sofort, klare namentliche Delegation, Einzelhelfer bleibt / läuft nicht selbst zum AED (ala-01) ✓
- HDM-Technik: Druckpunkt Mitte Brustkorb / untere Sternumhälfte, gestreckte Arme, 5–6 cm, vollständige Entlastung, 100–120/min, 30:2 (erm-01) ✓
- AED: „Alle weg!" + Sichtkontrolle VOR Schock, dann Schock, sofort weiter HDM ohne Puls-Check; Kammerflimmern als defibrillierbarer Rhythmus; korrekte anterolaterale Elektrodenlage (erm-02) ✓
- Helferwechsel ~2 min mit Ankündigung/Closed-Loop, Wechsel in der Beatmungspause (erm-03) ✓
- SBAR vollständig mit Zeiten und relevanter Antikoagulation (ueb-01) ✓
- Reflexion emotional angemessen, nicht bagatellisierend; Just-Culture/CIRS statt Schuldzuweisung (ref-01/ref-02) ✓

**Es gibt KEINE HOCH-Findings.** Kein Distraktor ist gefährlich als „richtig" markiert, kein Algorithmus-Schritt ist falsch. Die Findings unten betreffen Grounding-Traceability und didaktische Feinheiten.

## Findings

### erstmassnahmen — ce06-wagner-erm-03 (branching)

#### F-01 (MITTEL): Helferwechsel-Intervall (~2 min) ohne deckenden Kernfakt / kernfaktId-Mismatch
- **Stelle:** phases.ts:307 (`kernfaktId: ["F-07"]`) + Feedback Z. 325/333 („etwa alle 2 Minuten")
- **Problem:** Der Step trägt `kernfaktId: ["F-07"]`. F-07 in reanimation-bls.md ist aber „Kompressionsfrequenz 100–120/min" — er deckt weder den **Helferwechsel** noch das **~2-Minuten-Intervall** ab. In beiden Kernfakten-Dateien existiert kein Fakt zum Helferwechsel-Intervall. Inhaltlich ist die Aussage korrekt (ERC 2021: regelmäßiger Wechsel ~alle 2 min zur Vermeidung ermüdungsbedingter Qualitätsminderung), aber nach Projektregel „kein erfundener Content" braucht diese quantitative Aussage einen Verbatim-Beleg.
- **Standard-Verweis:** ERC 2021 / DNQP-Grounding-Regel (`kernfaktId` muss claim-tragend belegen); pflege-konformitaet.md „Step-Level-Grounding (W2/W5)".
- **Empfehlung:** Kernfakt „Helferwechsel ca. alle 2 Minuten (Qualitätsabfall durch Ermüdung)" in reanimation-bls.md mit Verbatim-Beleg (Pflege heute Kap. 14.3.2) ergänzen und `kernfaktId` auf diesen neuen Fakt setzen. Bis dahin ist der Content klinisch nicht zu beanstanden.

### reflektieren — ce06-wagner-ref-02 (mc)

#### F-02 (NIEDRIG): kernfaktId-Mismatch — CIRS/Just-Culture nicht durch F-04 gedeckt
- **Stelle:** phases.ts:480 (`kernfaktId: ["F-04"]`)
- **Problem:** F-04 (reanimation-bls.md) ist „Notruf/Notfallteam sofort nach Erkennen". Der Step-Inhalt behandelt aber CIRS-Meldung / Debriefing-Kultur / Systemproblem Defi-Standort — inhaltlich ist der referenzierte Fakt themenfremd. Der CIRS/Just-Culture-Inhalt hat in den zwei Kernfakten-Dateien keine Grundlage (liegt eher im Bereich Fehlerkultur/CIRS, nicht Reanimationsalgorithmus).
- **Standard-Verweis:** Step-Level-Grounding (kernfaktId muss den konkreten Claim stützen).
- **Empfehlung:** Entweder passenden Kernfakt (CIRS/Debriefing, z. B. Pflege heute Kap. 14 Nachbesprechung) anlegen und referenzieren, oder — da CE06-LE1-E1 (Reflexion) motorisch/einstellungsbezogen ist — den Step als reflexions-/einstellungsbezogen markieren, wo strenge Faktenbindung entfällt. Inhaltlich korrekt.

### erstmassnahmen — ce06-wagner-erm-01 (sorting)

#### F-03 (NIEDRIG): Reihenfolge-Ambiguität zwischen Kompressions-Attributen + ungenaue Handformulierung
- **Stelle:** phases.ts:221–227
- **Problem:** Zwei Punkte:
  1. Die Items „5–6 cm tief eindrücken" (Z. 223), „nach jeder Kompression vollständig entlasten" (Z. 224) und „im Takt 100–120/min drücken" (Z. 225) beschreiben **gleichzeitige Merkmale derselben Handlung**, keine echte zeitliche Sequenz. Ihre Reihenfolge untereinander ist nicht eindeutig aus einem Standard ableitbar — ein Schüler könnte Takt vor Tiefe legen, ohne fachlich falsch zu liegen. pflege-konformitaet.md fordert bei Sorting: „Bei Mehrdeutigkeit nur EINE Reihenfolge zulassen oder Toleranz dokumentieren."
  2. „Beide Handballen übereinander auf den Druckpunkt legen" (Z. 222) ist ungenau: Nur der Handballen der unteren Hand liegt auf dem Sternum, die zweite Hand liegt auf dem Handrücken der ersten (Finger verschränkt/angehoben).
- **Standard-Verweis:** ERC 2021 / DNQP-Sorting-Regel (Standard-basierte, eindeutige Reihenfolge).
- **Empfehlung:** (a) Merkmale zu einem Item bündeln („5–6 cm tief, 100–120/min, vollständige Entlastung") oder als Toleranz dokumentieren, sodass nur die echte Sequenz (Druckpunkt → Handposition → drücken → 30:2) gewertet wird. (b) Formulierung: „Handballen der einen Hand auf den Druckpunkt, zweite Hand darüber, Finger verschränkt/angehoben".

### phasenübergreifend — MC/TrueFalse-explanations

#### F-04 (NIEDRIG): Sandwich-Struktur in MC/TF-Erklärungen inkonsistent zu den Branching-Optionen
- **Stelle:** z. B. erk-01 Z. 51/67, ala-01 Z. 163/171, ref-02 Z. 506/514
- **Problem:** Die Branching-Feedbacks (erm-02, erm-03) sind vorbildlich im Sandwich („Der Gedanke … ist richtig — aber …", „Gut gedacht, dass du …"). Die MC-/TrueFalse-`explanation`-Felder starten dagegen meist direkt mit „Nein." / „Falsch." ohne Anerkennungs- oder Ermutigungsanteil. Kriterium 3 (Sandwich in jeder falschen Option) ist damit uneinheitlich erfüllt.
- **Bewertung:** Für einen Akut-/Notfallkontext ist Direktheit didaktisch **vertretbar** (klare Fehler-Kennzeichnung bei lebensbedrohlichen Trugschlüssen wie Schnappatmung ist gewollt). Deshalb nur NIEDRIG. Falls durchgängige Sandwich-Konformität gewünscht ist, jeweils den korrekten Denkanteil kurz anerkennen (z. B. erk-01 Distraktor Seitenlage: „Der Reflex zur Seitenlage ist bei normal Atmenden richtig — hier aber …").
- **Empfehlung:** Optional angleichen; kein Muss.

## Cross-Step-Konsistenz — geprüft, sauber

- **Patient-Daten konsistent:** 67 J. (patient.ts:11 ↔ SBAR ueb-01 Z. 392), instabile Angina (patient.ts:12), zwei Infarkte 2019/2023 (patient.ts:14 ↔ „zwei Infarkte in der Vorgeschichte"), VHF unter Apixaban (patient.ts:16 ↔ „Vorhofflimmern unter Apixaban" ueb-01). Antikoagulation wird im SBAR korrekt als entscheidungsrelevanter Background hervorgehoben. ✓
- **Ort konsistent:** „Flur vor Zimmer 7" (patient.ts:19) ↔ Delegation „Zimmer 7, Reanimation!" (ala-01) ↔ „kollabiert im Flur" (SBAR). ✓
- **Zeitachse plausibel:** Kollaps 08:15 → HDM seit 08:16 (≈1 min Erkennen+Alarmieren) → 1 Schock um 08:19 (Defi 30 m Weg + Analyse). Genau EIN Schock in erm-02, genau EIN Schock im SBAR — konsistent. Helferwechsel ~2 min fügt sich ein. ✓
- **Defi-Distanz konsistent:** 30 m (Kontext ala-01, patient.ts, ref-02 Debriefing). ✓
- **Setting-Realismus:** Kardiologische Normalstation, ACS-Patient mit VF-Arrest, harter Flurboden für HDM erwähnt — realistisch. ✓

## Reflexion — emotionale Angemessenheit (Kriterium 5)

ref-01 (reflection): Der `systemPrompt` verlangt explizit validierende Reaktion auf die weinende Schülerin „ohne ihr Gefühl kleinzureden", Anerkennung eigener Belastungsreaktionen (Zittern, Anspannungsabfall), Debriefing-Sinn und Unterstützungsangebote (Supervision/Seelsorge). Kein Bagatellisieren, „niemals abwertend". **Vorbildlich und emotional angemessen.** ✓
ref-02 modelliert Just Culture (System statt Schuld) — der Distraktor „bei der Schülerin beschweren" wird klar als ungerecht entlarvt. ✓

## Sprache (Kriterium 6)

- „du"-Anrede durchgängig (erk-01 „du siehst", ala-01 „du handelst", ref-01 „was macht das mit dir"). ✓
- Echte Umlaute durchgehend (ä/ö/ü/ß), keine ae/oe/ue/ss. ✓
- B1-Varianten (contentB1, explanationB1, feedbackB1) durchgängig vorhanden und fachlich deckungsgleich. ✓

## Zusammenfassung

- **0 Findings HOCH**
- **1 Finding MITTEL** (F-01: Helferwechsel ~2 min ohne deckenden Kernfakt / kernfaktId-Mismatch — klinisch korrekt, nur Grounding-Traceability)
- **3 Findings NIEDRIG** (F-02 kernfaktId-Mismatch CIRS; F-03 Sorting-Ambiguität + Handformulierung; F-04 Sandwich-Inkonsistenz MC/TF)

**Allgemeine Beobachtungen:** Kein Pseudo-Empathie-Bias — im Gegenteil, die Akut-Direktheit ist angemessen. Distraktoren sind durchweg realistische Anfänger-Fehler (Schnappatmung als „atmet noch", selbst zum Defi laufen, ungerichtetes „Hilfe!", Schock ohne „Alle weg!", zu lange durchdrücken, zu-knappe/geschwätzige Übergabe) — keine Karikaturen. Standards-Bezug (ERC 2021, SBAR, CIRS) explizit. B1-Konsistenz gegeben. Die zwei kernfaktId-Mismatches (F-01, F-02) sind das einzige systematische Muster und rein Grounding-technisch, nicht klinisch.

- **K.O.-Verdikt: PASS** (kein HOCH). Empfehlung: F-01 vor Live-Deploy durch Ergänzung eines Helferwechsel-Kernfakts sauber grounden; F-02–F-04 nach Kapazität nachziehen.
