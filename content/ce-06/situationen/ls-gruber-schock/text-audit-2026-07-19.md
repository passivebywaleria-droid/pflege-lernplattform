# Text-Audit: ls-gruber-schock (CE-06, hypovolämischer Schock/GI-Blutung)

**Geprüft:** 2026-07-19
**Files:** phases.ts (1049 Z.), patient.ts (33 Z.), situationen.ts (Eintrag Z. 229–248)
**Steps:** 15 (Ph1: mc, inlineWissen, mc · Ph2: inlineWissen, mc · Ph3: inlineWissen, mc, pflegewagen, mc, truefalse, branching, mc · Ph4: mc · Ph5: reflection, freetext)
**Textfelder geprüft:** ~180 (kontext/B1, body/B1, fragetext, alle optionen text/explanation/explanationB1/feedback/patientResponse, pflegewagen-items, trueFalseCards, branchingOptions, musterantwort, bewertungskriterien, alle inlineWissen-Felder storyAufhaenger/kerntext/faustregel/spektrum/karteikarte je C1+B1)

## Gesamtbewertung

Die Situation ist ausgesprochen sauber und literaturbelegt. Alle sicherheitskritischen Kernbotschaften stimmen wortwörtlich mit der Quelle überein:
- Schock-Leitsymptome (F-03 ↔ Pflege heute Kap. 14.5.1): vollständig.
- Autotransfusionslage + Ausnahme Kopf/Lunge/oberer Magen-Darm-Trakt (F-06 ↔ Pflege heute Z. 45382): korrekt und didaktisch als zentrale Falle inszeniert, inkl. kardiogener Zusatzausnahme in der Karteikarte.
- O2-Maske 6–8 l/min, Mindestfluss 5 l/min (F-11 ↔ Pflege heute Z. 12734/12740): korrekt.
- Kalium i.v. langsam, hohe Konzentration nur über ZVK (F-10 ↔ Pflege heute Z. 124313): korrekt, ohne erfundene Dosis.
- Volumen/Katecholamine/Perfusor + Laufrate nur auf Arztanordnung (F-06/F-12): dreifach abgesichert (team-grenze, erm-04, pflegewagen).
- Keine erfundenen Medikamenten-Dosen. Distraktoren mit Gefahrenpotenzial (Kalium-Bolus peripher, Alarm stummschalten, steil aufsetzen) sind korrekt als falsch/gefährlich markiert.
- Vitalwert-Verlauf konsistent: Puls 108→132, RR 100/70→80/50 über die Phasen; SBAR (ueb-01) spiegelt Werte + Maßnahmen widerspruchsfrei.
- B1 durchgehend fachlich identisch mit C1, nur sprachlich vereinfacht.

## Findings

### F-01 (NIEDRIG): Schockindex "Richtung 1" unterschätzt Herrn Grubers realen Wert
- **Stelle:** phases.ts:122 (erk-01b kerntext), :126/:128 (faustregel/B1), :169/:173 (karteikarte), :208/:210 (erk-02 explanation/B1)
- **Zitat:** „ein Wert Richtung 1 warnt" bzw. „steigt über den Normwert von etwa 0,5 in Richtung 1"
- **Problem:** Herrn Grubers Werte in erk-02 (Puls 108, RR sys 100) ergeben Schockindex = 1,08 — bereits ÜBER 1. Die Formulierung „in Richtung 1" (= sich 1 nähernd) suggeriert, der Wert sei noch nicht erreicht. Ein Schüler, der 108/100 rechnet, findet einen inneren Widerspruch. Zudem ist die Quellen-/Kernfakt-Grenze klar „> 1" (F-03; Pflege heute Z. 45211: „Schock > 1"), nicht „Richtung 1".
- **Beleg:** Pflege heute Kap. 14.5.1: „Schockindex beim Gesunden ≅ 0,5" / „Schockindex bei Schockgefahr/Schock > 1."
- **Richtung:** Fehler unterschätzt eher (unschädlich, da die gelehrte Handlung „jetzt handeln" korrekt ist), aber fachlich unpräzise.
- **Fix:** In erk-02-explanation den Wert konkret benennen: „Sein Schockindex liegt mit ~1,08 (108/100) bereits über dem Warnwert 1." In faustregel/karteikarte „Schockindex > 1 = Alarm" statt „Richtung 1".

### F-02 (NIEDRIG): Caveat „Schockindex nur beim Volumenmangel aussagekräftig" fehlt in Destillaten
- **Stelle:** phases.ts:126/:128 (faustregel), :169/:173 (karteikarte rueckseite)
- **Zitat:** „Schockindex Richtung 1 = Alarm" (ohne Einschränkung)
- **Problem:** Der kerntext (:122) enthält korrekt „(aussagekräftig nur beim Volumenmangel)"; faustregel und Karteikarte — die als Kurz-Merker isoliert konsumiert werden (Spaced Repetition) — lassen die Bedingung weg. Bei anderen Schockformen (kardiogen/distributiv) ist der Index unzuverlässig. Verkürztes Destillat ohne die Bedingung.
- **Beleg:** F-03 / Pflege heute Kap. 14.5: „Schockindex > 1 (nur beim [hypovolämen Schock])".
- **Fix:** In faustregel/karteikarte ergänzen: „Schockindex > 1 = Alarm (nur beim Volumenmangelschock aussagekräftig)."

### F-03 (NIEDRIG / PRÜFEN): Lagerungsempfehlung „Oberkörper leicht erhöht" ist klinische Synthese, nicht verbatim belegt
- **Stelle:** phases.ts:506/:509 (erm-01 korrekte Option + explanation), :434 (faustregel), :451 (spektrum), :469 (karteikarte)
- **Zitat:** „nach seinem Wunsch lagern (Oberkörper eher leicht erhöht) und den Kopf bei Erbrechen zur Seite"
- **Problem:** Die Quelle (Pflege heute Kap. 14.5.2) belegt nur, DASS die obere GI-Blutung von der Autotransfusionslage ausgenommen ist — die konkrete Alternativlagerung „Oberkörper leicht erhöht" ist eine (fachlich plausible, aspirationslogische) Ableitung, kein Verbatim-Beleg. Kein Beleg im geprüften Korpus (Pflege heute) für die exakte Positionsangabe gefunden. Die Begründung (Aspirationsschutz + flach vermeiden) ist physiologisch korrekt, und der Distraktor „steil aufrecht" wird zutreffend als kontraproduktiv bei RR 80/50 entlarvt.
- **Bewertung:** Defensible Synthese, kein Fachfehler; nur die Belegtiefe ist geringer als beim Rest.
- **Fix:** Kernfakt-Beleg für die konkrete Lagerung bei oberer GI-Blutung nachtragen (z. B. Notfallmedizin-Index) oder Formulierung als klinische Empfehlung kennzeichnen.

### F-04 (NIEDRIG): O2-Maske ohne Reservoirbeutel bei „hohem Sauerstoffbedarf" — Höchstkonzentrations-Option unerwähnt
- **Stelle:** phases.ts:685 (body: „hohen Sauerstoffbedarf im Schock"), :698/:701 (korrekte Option: einfache Maske 6–8 l/min)
- **Zitat:** „Eine Sauerstoffmaske mit einem Fluss von 6–8 l/min … die einfache Sauerstoffmaske ermöglicht eine höhere Dosierung von 5–10 l/min"
- **Problem:** Die Frage betont hohen O2-Bedarf; die korrekte Antwort lehrt die einfache Maske 6–8 l/min, ohne die Maske mit Reservoirbeutel (höchste O2-Konzentration) zu erwähnen. F-06 nennt „Sauerstoff (100 %) 6–8 l/Min." — ~100 % FiO₂ erreicht eine einfache Maske nicht. Kein Fehler (Content behauptet keine 100 %, Quelle stützt 6–8 l/min-Maske), aber didaktisch unvollständig gegenüber F-11.
- **Beleg:** F-11 / Pflege heute Kap. 3.5: „Höchste Konzentrationen erreichen Masken mit Reservoirbeutel."
- **Fix:** In der explanation ergänzen, dass bei sehr hohem Bedarf die Reservoirmaske die höchste Konzentration liefert; die 6–8-l/min-Maske bleibt korrekte Erstmaßnahme nach Anordnung.

## Cross-Step / Konsistenz

Keine Widersprüche gefunden. Vitalwerte, „nüchtern"-Botschaft (erm-02 Pflegewagen ↔ kalium-brause/abendessen ↔ SBAR), Kompetenzgrenze (team-grenze ↔ erm-04 ↔ branching) und die Autotransfusions-Falle (erm-00b Wissens-Tab ↔ erm-01 Anwendung ↔ Pflegewagen-Distraktor „Beinkeil") sind über alle Phasen konsistent verzahnt. Pflegewagen-Items, die als „korrekt/kontraindiziert" markiert sind, widersprechen keinem MC.

## Zusammenfassung

- 0 Findings HOCH
- 0 Findings MITTEL
- 4 Findings NIEDRIG (F-01 Schockindex-Imprecision, F-02 fehlender Caveat im Destillat, F-03 Lagerung Beleg-Synthese, F-04 O2-Reservoirmaske unerwähnt)
- Kein Halbwissen mit Schadenspotenzial: alle sicherheitskritischen Bedingungen (Schockzeichen, Lagerungs-Kontraindikationen, Volumen-/Katecholamin-Arztvorbehalt, Kalium-ZVK) sind vorhanden und korrekt.
- **K.O.-Verdikt: PASS** (kein HOCH, kein MITTEL; NIEDRIG-Findings sind Präzisierungen, keine Blocker).

## Fix-Status (2026-07-19, Haupt-Session)
- F-01 ✅ „Richtung 1" → „über 1" an allen 7 Stellen; erk-02 nennt jetzt den konkreten Wert (108/100 ≈ 1,1). Quelle verbatim: „Schockindex bei Schockgefahr/Schock > 1".
- F-02 ✅ Caveat „nur beim Volumenmangel aussagekräftig" jetzt auch in Faustregel + Karteikarte (C1+B1).
- F-03 ✅ Beleg gefunden + nachgetragen: I care 3. Aufl. Kap. 23.5.5.2 (Hämatemesis: „in sitzende Position bringen, Bewusstlose in stabile Seiten- und Schocklage") — Kerntext lehrt jetzt die belegte Regel + begründete Abschwächung bei tiefem RR; Quelle am Step ergänzt.
- F-04 ✅ Reservoirmaske als Steigerung ergänzt (verbatim gedeckt: „ermöglichen noch höhere Sauerstoffkonzentrationen", Tab. 3.10).
