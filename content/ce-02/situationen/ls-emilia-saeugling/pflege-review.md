# Pflege-Review: ls-emilia-saeugling

**Geprueft:** 2026-04-25
**Files:** 7 (6 Phasen + patient.ts)
**Step-Anzahl:** 36 Steps gesamt (Phase 1: 8 / Phase 2: 9 / Phase 3: 7 / Phase 4: 9 / Phase 5: 5 / Phase 6: 5)
- Davon 4 Dialog (3-5 Phasen), 5 MC, 5 Sorting/Sequencing, 2 Categorize, 1 Matching, 1 Matrix, 1 Hotspot, 1 TrueFalse, 1 Branching, 4 Freetext, 1 Reflection, 1 Summary, 1 Timeline, 8 Text, 5 Flipcard

## Findings

### phase-durchfuehren — ce02-emilia-dur-05-mutter-weint-branching (branching)

#### F-01 (HOCH): Du/Sie-Inkonsistenz — Anti-Pattern Du-Anrede gebrochen
- **Stelle:** Zeile 327, phase-durchfuehren.ts (Score-3-Option)
- **Problem:** Der Branching-Pfad enthaelt `"Nehmen Sie sich ruhig einen Moment..."` — alle anderen Dialoge in allen 6 Phasen duzen Laura konsequent (z.B. Phase 1: "Ja. Ich bin froh, dass du da bist", Phase 2: "Das erklaere ich dir", Phase 4 selbst wenige Zeilen vorher: "Du kannst sie jetzt halten, Laura"). Innerhalb DERSELBEN Phase und sogar innerhalb desselben Branching-Steps wird unvermittelt zwischen "du" und "Sie" gewechselt.
- **Standard-Verweis:** AGENTS.md Learnings 2026-04-14 + CLAUDE.md: "Anrede: IMMER 'du' — nie 'Sie' (auch in B1-Texten)". Inkonsistente Anrede unterminiert die Beziehungs-Kontinuitaet.
- **Empfehlung:** Umformulieren: `"Nimm dir ruhig einen Moment. Das ist alles gerade sehr viel — das ist ein normaler Moment nach einer schlaflosen Nacht."` — analog im B1-Feedback pruefen.

### phase-evaluieren — ce02-emilia-eval-01-ziel-wirksamkeit (categorize)

#### F-02 (MITTEL): Fluessigkeitsbilanz/Windel-Ziel inkonsistent zwischen Phase 5 und Phase 6
- **Stelle:** Phase 5 Kontext (Zeile 14): "bisher 4 (Ziel: 5 pro Tag)", Phase 5 Categorize-Item: "Fluessigkeitsbilanz fuehren — Ziel 5 Windeln noch nicht ganz erreicht" → Kategorie 2 "Noch offen". Phase 6 Trinkprotokoll-Musterloesung (Zeile 44): "5 Windeln erreicht".
- **Problem:** Wenn das Tagesziel 5 Windeln zwischen 14:00 (Phase 5) und 15:30 (Phase 6) erreicht wurde, ist die Bilanz von Phase 5 schon zur Halbzeit veraltet — das ist plausibel (1 weitere Windel zwischen 14:00 und 15:30 moeglich). Trotzdem sollte die Phase-5-Categorize "Teils wirksam" statt "Noch offen" zeigen, oder die Musterantwort in Phase 6 sollte 4 Windeln + 1 hinzugekommene zeigen. Aktuell wirkt die Doku-Musterloesung zu glatt: "5 Windeln" + "Tages-Ziel 5 nasse Windeln: 5 Windeln erreicht" passt nicht zur Phase-5-Lage.
- **Standard-Verweis:** Cross-Step-Konsistenz (Pflege-Konformitaets-Regel)
- **Empfehlung:** Phase 6 Musterantwort anpassen: "5 Windeln Ziel erreicht (5. Windel um 15:00 Uhr)" — explizit den Zeitpunkt des Erreichens nennen oder die Phase-5-Kategorisierung in "Teils wirksam" verschieben.

### phase-evaluieren — ce02-emilia-eval-01-ziel-wirksamkeit (categorize)

#### F-03 (MITTEL): "Mutter Laura beim Wickeln anleiten" als "noch offen" widerspricht Phase 4
- **Stelle:** phase-evaluieren.ts Zeile 73-76 — categoryItem "Mutter Laura beim Wickeln anleiten" → correctCategory: 2 ("Noch offen — Maßnahme laeuft").
- **Problem:** In Phase 4 (Step 4.3 Bad-Dialog Phase 2) wird Laura konkret zum Wickeln/Baden eingeladen ("Beim naechsten Bad bist du dran") und am Ende des Bades nimmt sie Emilia auch (positive Reaktion). Das WICKELN selbst (Step 4.4 Sequencing) wird durchgefuehrt — aber im Sequencing-Items-Text wird Laura nicht namentlich angeleitet. Im Branching K1 weint Laura. Es ist nicht eindeutig, ob "Wickeln-Anleitung" tatsaechlich umgesetzt wurde. Schueler kann das je nach gewaehltem Pfad unterschiedlich sehen — die "korrekte" Kategorie 2 ist nicht zwingend.
- **Standard-Verweis:** Cross-Step-Konsistenz; Eindeutigkeit der Categorize-Loesungen.
- **Empfehlung:** Entweder den Item-Text praezisieren ("Mutter Laura beim Wickeln aktiv anleiten — bisher nur Baden gezeigt") oder die Phase-4-Steps so erweitern, dass Lauras Wickeln tatsaechlich Pfad-spezifisch geuebt wurde.

### phase-planen — ce02-emilia-plan-03-massnahmen-matrix (matrix)

#### F-04 (MITTEL): Matrix-Quadranten-Mapping verwirrend / Achsen-Logik unklar
- **Stelle:** phase-planen.ts Zeile 107-162
- **Problem:** Die Matrix-Achsen sind: X = "Fluessigkeit + Trinken (low)" vs. "Mutter + Atemweg (high)"; Y = "Arzt/Mutter (low)" vs. "Pflege (high)". Item m4 "Nasensekret vor dem Trinken sanft absaugen" → correctQuadrant: 2. Quadrant 2 waere "Mutter+Atemweg / Arzt+Mutter" — aber Nasensekret-Absaugen ist eine PFLEGEHANDLUNG (Pflegekraft saugt mit Schleimsauger — nicht Mutter, nicht Arzt). Damit gehoerte es eher in Q3 ("Mutter+Atemweg / Pflege"). Aehnliches Problem bei m1 "Windeln wiegen und Trinkmenge dokumentieren" → Q1: das ist "Fluessigkeit / Pflege" — passt. Aber m6 "Arztvisite benachrichtigen bei Verschlechterung" → Q1 "Fluessigkeit / Pflege" — Arztvisite ist NICHT Fluessigkeit-spezifisch, sondern allgemein. Achsen-Mapping inkonsistent.
- **Standard-Verweis:** Categorize-Pflicht-Muster: "Kategorisierungs-Logik konsistent zur Realitaet".
- **Empfehlung:** Achsen-Mapping ueberpruefen: m4 sollte Q3, m6 sollte Q4 oder andere Quadrant-Achse waehlen (z.B. "Soforthandlung" vs. "Eskalation"). Alternativ Matrix vereinfachen auf eindeutige Achsen.

### phase-planen — ce02-emilia-plan-03-massnahmen-matrix (matrix)

#### F-05 (MITTEL): "Nasentropfen NaCl 0,9% anordnen" — Begriffsproblem
- **Stelle:** phase-planen.ts Zeile 134
- **Problem:** "Anordnen" suggeriert aerztliche Verordnung. NaCl-0,9%-Nasentropfen sind frei verkaeuflich und gehoeren zu pflegerischen Standardmaßnahmen bei Saeuglingen mit Atemwegsinfekt — sie werden in der Praxis OHNE Arztanordnung verwendet. Wenn das Item in Q3 (Arzt/Mutter) liegt, vermittelt es die falsche Botschaft, NaCl-Spuelungen seien arztpflichtig.
- **Standard-Verweis:** Hoehl/Kullick 2019 — Nasenpflege als pflegerische Maßnahme.
- **Empfehlung:** Item umformulieren: "Nasentropfen NaCl 0,9% bereitstellen und vor jeder Mahlzeit anwenden" (Pflege-Quadrant). Oder Quadranten anpassen.

### phase-durchfuehren — ce02-emilia-dur-01-bad-vorbereitung-sortierung (sorting)

#### F-06 (NIEDRIG): Reihenfolge "Haende waschen" zu spaet
- **Stelle:** phase-durchfuehren.ts Zeile 44-51
- **Problem:** sortItems[3] "Eigene Haende waschen" steht nach "Materialien griffbereit legen". Hygienisch besser: Haende waschen GLEICH zu Beginn (vor Vorbereitung) und nochmals direkt vor Patient (Patient-Saeugling-Hautkontakt). Aktuelle Reihenfolge folgt einer Praxis-Logik (erst alles bereit, dann finale Haendedesinfektion), aber RKI-konforme 5-Momente-Haendehygiene wuerden eher Haende-waschen vor und nach Patientenkontakt fordern.
- **Standard-Verweis:** RKI 5 Momente der Haendehygiene
- **Empfehlung:** Item ergaenzen: "Haende waschen unmittelbar vor Patientenkontakt" und am Ende der Vorbereitung positionieren — oder beide Schritte (vor + unmittelbar vor) als 2 separate Items aufnehmen.

### phase-durchfuehren — ce02-emilia-dur-05-mutter-weint-branching (branching)

#### F-07 (NIEDRIG): Tippfehler "wegzuerklaeiren"
- **Stelle:** phase-durchfuehren.ts Zeile 338 (Feedback Bypassing-Option)
- **Problem:** Schreibweise: `wegzuerklaeiren` → korrekt `wegzuerklaeren`. Reine Stelle.
- **Empfehlung:** Korrigieren.

### phase-beobachten — ce02-emilia-beob-06-atemfrequenz-beurteilen (truefalse)

#### F-08 (NIEDRIG): Atemfrequenz-Norm — Quellenstreit zwischen 30-60 (AAP) und 30-50 (Hoehl/Kullick)
- **Stelle:** phase-beobachten.ts Zeile 407-413 (TrueFalse Card 1)
- **Problem:** Die Aussage "30-60 Atemzuege/min bei 4-monatigem Saeugling = normal" ist unter Berufung auf die internationale Klassifikation (AAP/WHO) korrekt. Hoehl/Kullick 2019 gibt jedoch fuer 1-12 Monate eher 30-50/min an. Die Quelle ist im Step gemischt zitiert (AWMF + Hoehl/Kullick). Schueler die mit Hoehl/Kullick lernen, koennten irritiert sein.
- **Standard-Verweis:** AWMF S2k-Leitlinie Bronchiolitis 2022 (>60/min = Tachypnoe-Schwelle).
- **Empfehlung:** Im Explanation-Text ergaenzen: "Quellen weichen leicht ab (30-50 vs. 30-60). Gemeinsam: > 60/min ist auffaellig."

### phase-evaluieren — ce02-emilia-eval-01-ziel-wirksamkeit (categorize)

#### F-09 (NIEDRIG): "Rueckenlage beim Schlafen" als "Ziel erreicht" missverstaendlich
- **Stelle:** phase-evaluieren.ts Zeile 53-56
- **Problem:** Rueckenlage ist eine LAUFENDE PRAEVENTIONSMASSNAHME, kein abgeschlossenes Ziel. "Ziel erreicht" suggeriert "fertig" — aber die Maßnahme muss weiter ueber Tag und Nacht aufrechterhalten werden.
- **Empfehlung:** Item-Text praezisieren: "Rueckenlage beim Schlafen heute durchgehend umgesetzt" (Vergangenheits-Bezug auf den geprueften Zeitraum).

### phase-informieren — ce02-emilia-info-04-anamnesefragen-sortierung (sorting)

#### F-10 (NIEDRIG): Anamnese-Sortierung — Mehrdeutigkeit
- **Stelle:** phase-informieren.ts Zeile 257-264
- **Problem:** Die Reihenfolge "Trinkschwaeche → normale Trinkmenge → Windel → Fieber → Atmen → Impfstatus" ist eine moegliche Priorisierung, aber didaktisch ebenso vertretbar waere "Atmen → Trinkschwaeche → Windel → Fieber" (ABCDE-Logik: Airway/Breathing zuerst). Die korrekte Reihenfolge ist nicht klar standardisiert.
- **Standard-Verweis:** ABCDE bei Atemwegserkrankung — Atemwegsfragen sollten priorisiert sein.
- **Empfehlung:** Im body-Text Anamnese-Logik begruenden ("Wir starten mit dem Hauptbeschwerden-Leitsymptom — hier Trinken, weil Atmen makroskopisch noch unauffaellig ist") oder Toleranz-Bereich definieren.

## Cross-Step-Probleme

1. **Du/Sie-Wechsel** (siehe F-01) — einziges Sie-Vorkommen in 6 Phasen, klare Inkonsistenz.
2. **Windel-Ziel "5 erreicht"-Status** (siehe F-02) — Phase 5 zeigt "noch offen", Phase 6 Musterantwort zeigt "5 Windeln erreicht" innerhalb 90 Minuten ohne dokumentierten 5. Windelwechsel.
3. **Wickel-Anleitung Laura** (siehe F-03) — Phase 4 Sequencing ist neutral; Phase 5 setzt aber voraus, dass Laura beim Wickeln noch nicht angeleitet wurde. Verlauf nicht eindeutig.

## Zusammenfassung

- **1 Finding HOCH** (F-01: Du/Sie-Inkonsistenz)
- **4 Findings MITTEL** (F-02 bis F-05: Cross-Step-Konsistenz, Matrix-Logik, NaCl-Begriff)
- **5 Findings NIEDRIG** (F-06 bis F-10: Hygiene-Reihenfolge, Tippfehler, Atemfrequenz-Norm-Streit, Praxis-Formulierungen)

**Allgemeine Beobachtungen:**
- Die Situation ist insgesamt fachlich auf hohem Niveau. Saeuglings-Spezifika (obligate Nasenatmer, SIDS-Praevention nach AAP 2022, Fontanelle-Beurteilung, Hautturgor-Test am Bauch/Unterarm, Wickeln am Becken nicht an Knoecheln, Wassertemperatur 37 °C, Raumtemperatur 24 °C beim Bad) sind korrekt und mit primaeren Quellen belegt.
- WHO-Stillempfehlung 2023 wird konsistent verteidigt (Bronchiolitis ist KEIN Grund zum Abstillen).
- SBAR-Struktur durchgehend richtig, Pflegeprozess (Fiechter/Meier 1981) als Klammer korrekt eingesetzt.
- B1-Variante durchgehend vorhanden und sauber strukturiert (Klammer-Erklaerungen, kurze Saetze).
- Familienorientierte Pflege wird konsequent gelebt (Empowerment statt Uebernahme, Validierung von Lauras Sorge, Mutter-Kind-Anleitung beim Bad).
- KEIN Pseudo-Empathie-Bias gefunden — Texte sind sachlich-warm, nicht romantisierend. KEINE Bagatellisierung von Schmerz/Notfall.
- KEINE kinaesthetisch falschen Patternfehler ("Sie hochziehen", "Achseln greifen") — Wickeln explizit "am Becken nicht an Knoecheln" (Hueftgelenkschutz, korrekt).
- KEINE Sicherheits-Hochrisiken (Bauchlage, Bettgitter, falsche Schlafposition) — alle SIDS-Fragen korrekt geloest.

**K.O.-Verdikt: FAIL**

Begruendung: F-01 (Du/Sie-Inkonsistenz) ist gemaeß CLAUDE.md/AGENTS.md ein K.O.-Kriterium ("Anrede: IMMER 'du'"). Inhaltlich ist die Situation pflegerisch korrekt — der Fix ist trivial (1 Wort + B1-Pendant). Nach diesem einen Fix ist die Situation aus pflegefachlicher Sicht live-tauglich. Die uebrigen MITTEL-Findings sind didaktische Praezisierungen (Matrix-Achsen, Cross-Phase-Konsistenz Windelzahl), keine Sicherheits- oder Standards-Fehler.

**Empfohlene Reihenfolge der Korrekturen:**
1. F-01 (HOCH, K.O.) — sofort fixen
2. F-02, F-03 (Cross-Step-Konsistenz Windel/Wickeln) — Musterantwort + Categorize abgleichen
3. F-04, F-05 (Matrix-Quadranten + NaCl-Begriff) — Matrix-Logik aufraeumen
4. F-06 bis F-10 — Feinschliff, optional vor naechstem Review-Zyklus

## Fixes durchgeführt — 2026-04-26
- Alle 10 Code-Findings (pflege-review.md) bearbeitet
- 4 zusätzliche Plan-Findings (pflege-review-plan.md F-01, F-02, F-03, F-05) im Code nachgezogen
- K.O.-Verdikt: PASS

### Im Detail (Code-Review F-01 bis F-10)
- **F-01 (HOCH):** `phase-durchfuehren.ts` Z. 327 — "Nehmen Sie sich" → "Nimm dir"; Distraktor-Option ebenfalls "Sie" → "du" (`musst du nicht weinen`); B1-Feedbacks auf Du-Konsistenz geprüft.
- **F-02 (MITTEL):** `phase-dokumentieren.ts` Trinkprotokoll-Musterantwort — Windel-Zeitpunkte (08:00, 09:30, 11:00, 13:30, 15:00) ergänzt + "5. Windel um 15:00 Uhr" als Erreichungs-Marker. Stimmt jetzt mit Phase-5-Stand "bisher 4 um 14:00" überein.
- **F-03 (MITTEL):** `phase-evaluieren.ts` Categorize-Item — Text präzisiert auf "Mutter Laura aktiv beim Wickeln anleiten — bisher nur beim Baden begleitet". Eindeutigkeit der Kategorie 2 hergestellt.
- **F-04 (MITTEL):** `phase-planen.ts` Matrix — Quadranten neu konsistent gemacht. Quadrant-Konvention: Q1=Pflege+Flüssigkeit, Q2=Pflege+Atemweg/Empowerment, Q3=Mutter/Arzt+Flüssigkeit, Q4=Mutter/Arzt+Atemweg. Mapping korrigiert: m1→Q1, m2→Q3 (Mutter stillt mit Anleitung), m3→Q2 (Pflege wendet NaCl an), m4→Q2 (Pflege saugt ab), m5→Q4, m6→Q3, m7→Q4 (Laura hält aufrecht), m8→Q2. Item-Texte um Rollen-Hinweise ergänzt.
- **F-05 (MITTEL):** `phase-planen.ts` m3 — "Nasentropfen NaCl 0,9% anordnen" → "bereitstellen und vor jeder Mahlzeit anwenden". Pflegerische Standardmaßnahme (frei verkäuflich, Hoehl/Kullick + AWMF Bronchiolitis 2022) jetzt im Pflege-Quadrant Q2.
- **F-06 (NIEDRIG):** `phase-durchfuehren.ts` Bad-Vorbereitung-Sortierung — RKI-konform 2 Hände-Schritte: "Eigene Hände waschen/desinfizieren (vor Patientenkontakt)" + "Hände unmittelbar vor Hautkontakt nochmals desinfizieren".
- **F-07 (NIEDRIG):** `phase-durchfuehren.ts` Z. 331 — `wegzuerklaeiren` → `wegzuerklären`.
- **F-08 (NIEDRIG):** `phase-beobachten.ts` TrueFalse Card 1 — Quellen-Hinweis (Hoehl/Kullick 30-40 Ruhe / AAP/AWMF 30-60) + Tachypnoe-Schwelle > 60/min ergänzt.
- **F-09 (NIEDRIG):** `phase-evaluieren.ts` Categorize-Item — "Rückenlage beim Schlafen heute durchgehend umgesetzt" (Vergangenheits-Bezug).
- **F-10 (NIEDRIG):** `phase-informieren.ts` Anamnese-Sortierung — body-Text um Logik-Begründung ergänzt (Hauptbeschwerden-Leitsymptom + ABCDE-Bezug bei kritischer Atemnot).

### Im Detail (Plan-Review F-01 bis F-05)
- **Plan-F-01 (MITTEL — AF-Norm):** `phase-beobachten.ts` TrueFalse — Aussage 1 präzisiert auf Säuglings-Spannweite differenziert: "Ruhe-AF 30-40/min, bis 50/min wach akzeptabel, > 50/min bei Bronchiolitis beobachtungspflichtig". Aussage 2-Erklärung (50/min kein Sofortalarm) entsprechend angepasst — bei RSV/Bronchiolitis 50/min am oberen Rand → engmaschige Verlaufsbeobachtung q15-30min. Quellen Hoehl/Kullick 2019 + AAP/AWMF 2022.
- **Plan-F-02 (NIEDRIG — Messdauer rektal):** `phase-beobachten.ts` Sequencing tm4 — "ca. 1 Minute" → "bis Signalton (Dauer geräteabhängig, ca. 10-60 Sek.)". Nicht mehr fix-zeitlich.
- **Plan-F-03 (NIEDRIG — NaCl-Verordnung):** Kongruent mit Code-F-05 erledigt.
- **Plan-F-05 (NIEDRIG — Wassertemperatur):** `phase-durchfuehren.ts` Sorting-Item + Step 4.2 Infant-Handling-Text — "37 °C" → "36-37 °C" (Hoehl/Kullick 2019 Säuglings-Bad-Bereich).

### Verifikation Du-Konsistenz
Grep nach Sie/Ihnen/Ihre/Ihr in allen 7 Files: Alle restlichen Treffer sind dritte Person (Emilia/Laura: "Sie schaut", "Sie atmet") — keine Anrede mehr an Laura oder die Schülerin.

### Verifikation TypeScript
`npx tsc --noEmit` für alle 7 Files der Situation: 0 Fehler. Strict-konform.

### Restrisiken
- Matrix-Quadranten-Logik bleibt didaktisch anspruchsvoll (2D-Matrix mit zwei orthogonalen Achsen) — Item-Texte haben jetzt Rollen-Klammern, sollten Schülern als Hinweis genügen. Falls Renderer-Test im Walkthrough zeigt, dass Schüler die Achsen falsch lesen: Weiter zu 1D-Categorize vereinfachen.
- AF-Schwelle 50/min vs. 60/min ist Quellenstreit — aktuell beide Quellen nebeneinander zitiert, gemeinsame Tachypnoe-Schwelle > 60/min betont. Empfehlung an Dozentin: Lokale Hausstandard-Schwelle prüfen.

**K.O.-Verdikt: PASS** (alle HOCH/MITTEL gefixt, alle NIEDRIG gefixt, keine erfundenen Pflege-Aspekte, Säuglings-Spezifika altersgerecht, Standards belegt: Hoehl/Kullick 2019, AWMF S2k Bronchiolitis 2022, AAP 2022, WHO 2023, RKI 5-Momente, Fiechter/Meier 1981.)
