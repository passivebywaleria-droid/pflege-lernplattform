# Pflege-Review: ls-erlemann-organspende

**Geprüft:** 2026-07-13 (Re-Validierung nach Currency-Update F-04 + F-10)
**Modus:** code (Content gebaut)
**Files:** 3 (phases.ts + patient.ts + index.ts)
**Step-Anzahl:** 11 (3 inlineWissen, 4 mc, 1 truefalse, 1 branching, 1 reflection, 1 freetext)

## Prüf-Fokus dieser Re-Validierung

Currency-Update der Kernfakten: **F-04** (Hirntod-Feststellung präzisiert auf „zwei qualifizierte Ärzte, beide mehrjährig intensiverfahren bei schwer Hirngeschädigten, mind. einer Facharzt Neurologie/Neurochirurgie" — I care Pflege 2020 + BÄK-Richtlinie IHA) und **F-10 neu** (zentrales Organspende-Register beim BfArM, seit 18.03.2024, als zusätzlicher Weg). Geprüft: fachliche Korrektheit, Cross-Step-Konsistenz, durchgehender Rechtsstand Entscheidungslösung, Rollen-/Kompetenzgrenze, Wertneutralität E1/E2, Sandwich/„du"-Anrede, B1.

## Mechanisierte Vor-Checks (Pipeline v10)

| Gate | Ergebnis |
|------|----------|
| `zitat-verifizierer --check-file organspende-hirntod.md` | ✅ PASS — alle Verbatim-Belege verifiziert (F-04-Belege inkl. „müssen 2 dafür qualifizierte Ärzte", „Sie dürfen nicht in den Organspendeprozess", „direkt eingebunden sein" ✅) |
| `pflege-anti-pattern-check.ts content/ce-06` | ✅ 0 Treffer in ls-erlemann-organspende (die 32 CE-06-Treffer liegen ausschließlich in Wagner/Ríos/Yıldız/… — dort legitime NRS-/Warte-Distraktoren) |
| `step-grounding-check.ts ce-06` | ✅ PASS — ls-erlemann 10/10 claim-tragend gegroundet, 0 Dangling, 0 Missing (F-10 in ala-00b kernfaktId ergänzt) |
| `standards-currency-check.ts ce-06 --include-plans` | ✅ PASS — keine veraltete Norm autoritativ verwendet |
| `klinik-panel-erlemann-report.md` | ✅ PASS — 0 HOCH / 0 MITTEL / 2 NIEDRIG (Beschaffung) |

## Semantische Prüfung des Currency-Updates (5. Lens)

### F-04 — Arzt-Qualifikation: fachlich korrekt + durchgängig konsistent ✅
Die präzisierte Anforderung ist an **allen fünf** geänderten Stellen deckungsgleich und quellentreu zu F-04 / BÄK-Richtlinie IHA:
- `ala-00b` kerntext: „…beide seit mehreren Jahren in der Intensivbehandlung schwer hirngeschädigter Menschen erfahren, und mindestens einer ist Facharzt für Neurologie oder Neurochirurgie."
- `ala-00b` faustregel: „beide intensiverfahren, mind. einer Neuro, kein Bezug zur Transplantation".
- `ala-00b` spektrum („Die Feststellung"): „beide qualifiziert und intensiverfahren (mind. einer Neuro), unabhängig vom Transplantationsteam".
- `ala-00b` karteikarte: „beide intensiverfahren, mind. einer Neurologe/Neurochirurg".
- `ala-01` Score-3-Option + explanation (C1): „beide über mehrjährige Erfahrung in der Intensivbehandlung schwer hirngeschädigter Patienten … (mindestens einer Facharzt für Neurologie oder Neurochirurgie)".

Kein Widerspruch, kein Rest der alten Formulierung („wenigstens einer intensiverfahren") mehr im File. Die Unabhängigkeit vom Transplantationsteam bleibt der tragende Punkt gegen den vom Vater befürchteten Interessenkonflikt — didaktisch sauber verankert. Das BÄK-Detail ist als sichtbare Primärquelle (`quellen`) geführt, analog zu ERC/§-BGB-Praxis — zulässig. **Damit ist die frühere NIEDRIG-Beobachtung F-01 („wenigstens einer") vollständig aufgelöst.**

*Nuance (kein Finding):* Die B1-Verkürzung „mindestens einer ist Facharzt" statt „bei jedem Untersuchungsgang mindestens ein Facharzt" (BÄK-Wortlaut) ist eine zulässige, sinnwahrende Vereinfachung fürs Ausbildungs-/B1-Niveau — bei zwei untersuchenden Ärzten inhaltlich deckungsgleich.

### F-10 — Organspende-Register: korrekt als zusätzlicher Weg, keine Widerspruchslösung ✅
Register erscheint an drei Stellen (kerntext, faustregel, karteikarte in `ala-00b`) durchgängig als **zusätzlicher Weg**, die eigene Entscheidung festzuhalten:
- kerntext: „…keinen Eintrag im seit 2024 bestehenden zentralen Organspende-Register".
- faustregel: „nur mit Einwilligung + festgestelltem Hirntod (im Ausweis oder seit 2024 im Organspende-Register)".
- karteikarte: „Ausweis oder seit 2024 Organspende-Register".

Die **Entscheidungslösung bleibt unverändert** — das Register ergänzt sie, ersetzt sie nicht; „niemand ist automatisch Spender" steht unmittelbar daneben. Keine Widerspruchslösungs-Verwechslung. Keine erfundenen Register-Details über den amtlichen Beleg hinaus (BfArM, 18.03.2024) — Ort, Startdatum und Funktion (hinterlegen/ändern/widerrufen) sind amtlich gedeckt; die Quelle ist in `quellen` sichtbar geführt. Grounding sauber (F-10 in ala-00b kernfaktId ergänzt).

*Cross-Step (kein Finding):* `erm-01` (Phase 3) bleibt auf „kein Organspendeausweis, keine dokumentierte Entscheidung" — das schließt die (in `ala-00b` bereits als leer etablierte) Register-Abfrage sprachlich mit ein („keine dokumentierte Entscheidung" umfasst den Register-Eintrag). Kein Bruch, da die Register-Abfrage vor der Angehörigen-Einbeziehung in Tab B narrativ schon erledigt ist.

### Rechtsstand ENTSCHEIDUNGSLÖSUNG — durchgängig ✅
`ala-00b`, `erm-01` (Score-3 + Distraktor-Widerlegung), `ueb-01` (mutmaßlicher Wille) und `patient.ts` verwenden durchgehend die Entscheidungslösung. Die Widerspruchslösung / „automatisch Spender" erscheint **ausschließlich** als klar markierter Distraktor (`erm-01` Opt. 2, `isCorrect:false`) und wird explizit widerlegt. „Lehrt über Falsches", nicht „empfiehlt Falsches" — korrekt.

### TPG definiert nicht den Tod ✅
Tab A (`erk-00b`), `erk-01`, `erm-02` konsistent: Gesamthirntod = irreversibler Ausfall aller Hirnfunktionen; TPG = Mindestkriterium für die Entnahme, definiert nicht den Tod (F-01/F-02).

### Rollen-/Kompetenzgrenze der Pflege ✅
„Pflege gibt nichts frei / drängt nicht / stellt keinen Hirntod fest" in Tab B, Tab C (`erm-00b`), `erm-01` Opt. 3, `erm-02` Karte 2, `ueb-01` und Glossar durchgängig. Aufklärungs-/Entscheidungsgespräch konsequent Arzt + Transplantationsbeauftragte.

### Wertneutralität E1/E2 ✅
`ref-01` systemPrompt: „keine Weltanschauung bewerten", „niemals abwertend"; religiös-kulturelles Spektrum deskriptiv aus F-08. `ref-02` Musterantwort ausgewogen Pro/Contra, Bewertungskriterium „wertneutral gegenüber Überzeugungen". Kein Bekenntnis-Zwang, korrekter Step-Typ.

### Anrede + Sandwich + B1 ✅
Lernende durchgängig „du/dich/dir"; Angehörige gesiezt; Tobias hirntot (keine Direktanrede). Branching-Feedback nach Sandwich (anerkennen → korrigieren → ermutigen). Geänderte Stellen tragen passende B1-Varianten: `ala-01` explanationB1 „…beide erfahren in der Intensivbehandlung (einer aus der Neurologie)" — korrekt vereinfacht, Kernaussage erhalten.

### Cross-Step-Konsistenz Patientendaten ✅
Tobias Erlemann, 24, Motorradunfall → Hirnblutung → Gesamthirntod (2 unabhängige Ärzte), beatmet/kreislaufgestützt, kein Ausweis/kein Register-Eintrag, Eltern Sabine/Reinhard — durchgängig in patient.ts + allen 5 Phasen. Leber-Tx-Zahlen 2017 (821/760/61) verbatim aus F-07.

## Findings

### alarmieren — F-01 (RESOLVED): Arzt-Qualifikation „wenigstens einer" → „beide intensiverfahren"
- Die frühere NIEDRIG-Beobachtung (Score-3/kerntext sagte „wenigstens einer intensivmedizinisch erfahren") ist durch das F-04-Update behoben: Jetzt konsistent „beide intensiverfahren, mind. einer Neuro". Kein offener Punkt.

### uebergeben — F-02 (NIEDRIG, unverändert): ueb-01 Distraktor 3 leicht kombinatorisch
- **Stelle:** `ueb-01` Branching-Option 3 („sofort entscheiden … und lasse sie dann allein damit").
- **Problem:** Bündelt zwei Fehler (Zeitdruck + Alleinlassen); Zeitdruck allein wäre als Anfänger-Fehler stark genug.
- **Standard-Verweis:** pflege-konformitaet.md — Score-0-Optionen dürfen „klar gefährlich" sein; keine Karikaturen.
- **Bewertung:** Vertretbar innerhalb der Score-0-Lizenz (Opt. 2 „zur Zustimmung raten" ist der plausible gut-gemeinte Anfänger-Fehler). Optional „und lasse sie dann allein damit" streichen. **Kein Blocker.**

## Cross-Step-Probleme
Keine. Rechtsstand, Arzt-Qualifikation, Register-Ergänzung, Rollenmodell, Patientendaten und Terminologie konsistent über alle Phasen und das Glossar.

## Zusammenfassung
- 0 Findings HOCH
- 0 Findings MITTEL
- 1 Finding NIEDRIG (F-02, unverändert, nicht fix-pflichtig) · 1 früheres NIEDRIG (F-01) RESOLVED
- **Currency-Update-Bewertung:** F-04 (Arzt-Qualifikation) fachlich korrekt und an allen 5 Stellen konsistent; F-10 (Register) korrekt als zusätzlicher Weg, Entscheidungslösung unangetastet, keine erfundenen Details über den amtlichen Beleg hinaus, Primärquelle sichtbar. Grounding + Currency-Gate + Anti-Pattern + Zitat-Verifizierer grün.
- **K.O.-Verdikt: PASS** (0 HOCH ungelöst).
