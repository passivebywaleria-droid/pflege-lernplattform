# Pflege-Review: ls-nguyen-stoma

**Geprüft:** 2026-04-25
**Files:** 7 (patient.ts + 6 Phasen)
**Step-Anzahl:** 39 (4+3 / 6+3 / 5+2 / 7+3 / 4+2 / 4+2)
- davon 6 Dialog/Branching, 7 MC, 6 Sorting/Sequencing, 5 Categorize/Matching, 4 TrueFalse, 1 Hotspot, 1 Highlight, 1 Matrix, 1 Comparison-Pair, 4 Freetext/Reflection, 1 Calculation, 1 TableFillIn, 1 Slider, 1 Summary, weitere

## Allgemein

Sehr starke Situation. Stomapflege ist fachlich solide aufgesetzt (FG SKM 2023 als Leit-Quelle), die psychosoziale Achse mit Würde/Männlichkeit/Scham wird in Phase 4 K1 vorbildlich ausgeführt (Spiegeln statt falschem Trost), die interkulturelle Dimension mit Tochter-als-Übersetzerin wird ethisch korrekt benannt (Rollenkonflikt, ICN). Die Mehrzahl der Dialog-Optionen sind realistisch und nicht karikaturenhaft. Cross-Phase-Konsistenz ist überwiegend gut (Albumin 28, Braden 14, NRS 3/10, Plattengröße 60→62 mm).

Es gibt jedoch einige fachliche Unsauberkeiten — vor allem rund um Stomapflege-Spezifika (Reinigungsmittel, Beutel-Abziehrichtung, Heparin-Injektion bei frischer Bauchdeckenwunde) und einige Pflege-Slang-Stellen, die in der Pipeline gefiltert werden sollten.

## Findings

### phase-informieren — ce02-nguyen-info-04-vorbereitung (sequencing)

#### F-01 (MITTEL): Beutelwechsel-Vorbereitung mischt Schritte vor und während Zimmerbetreten
- **Stelle:** Phase 1, Step 1.4, items s2–s5
- **Problem:** Item s5 ("Intimpflege-Set für Ganzkörperpflege bereitstellen") und s2 ("Beutelwechsel-Utensilien vorbereiten") sind sinnvoll vor Zimmerbetreten — aber die korrekte Reihenfolge ist nicht eindeutig: Stomatherapeut-Termin (s3) prüft man typischerweise zuerst (planungsrelevant), dann Ernährungsprotokoll lesen (s1), dann Material vorbereiten. Eine "richtige" Lösung ist im JSON nicht hinterlegt — das macht den Sequencing-Step bewertungsproblematisch.
- **Standard-Verweis:** FG SKM Stomapflege 2023 — Vorbereitung folgt: Patientendaten lesen → Material → Ankündigung
- **Empfehlung:** Entweder explizite Korrektreihenfolge (s3→s1→s4→s2→s5) im items-Array festlegen oder Toleranz dokumentieren (mehrere Lösungen erlaubt).

### phase-beobachten — ce02-nguyen-beob-03-haut-assessment (highlight)

#### F-02 (NIEDRIG): Inkonsistenz Stomafarbe in Phase 1 vs. Phase 2
- **Stelle:** Phase 1 Step 1 SBAR ("Stoma aktiv, dünnflüssig gelblich-braun") vs. Phase 2 Step 2.3 ("Stoma kräftig rosa, feucht, ca. 1,5 cm prominent")
- **Problem:** SBAR-Übergabe in Phase 1 erwähnt keine Stomafarbe-Beobachtung der Nachtschicht. Das ist okay, aber Phase 6 Pflicht-Element 2 verlangt Stomafarbe — Schüler/in lernt sie erst in Phase 2 zu beobachten. Klein, aber inkonsistent.
- **Empfehlung:** Im SBAR (Phase 1, body) ergänzen: "Stoma rosig, ca. 1,5 cm prominent (NS-Befund)".

### phase-planen — ce02-nguyen-plan-02-stoma-versorgungsplan (sequencing)

#### F-03 (HOCH): Beutel-Abziehrichtung "von oben nach unten" ist falsch
- **Stelle:** Phase 3, Step 3.2, item s3 + Phase 4 Kontext-Text "von oben nach unten abziehen"
- **Problem:** Der Standard für 1-teilige/2-teilige Stomaversorgung ist: **alten Beutel/alte Platte VON OBEN NACH UNTEN abziehen, dabei die Haut mit der anderen Hand sanft fixieren** — das ist korrekt formuliert. ABER der reine Wortlaut "von oben nach unten" ohne Hand-Gegenfixierung ist unvollständig und kann Mazerierung/Hauteinrisse begünstigen. Die Stelle wird in Phase 3 ohne diese Sicherheitskomponente gelernt.
- **Standard-Verweis:** FG SKM Handlungsempfehlungen Stomapflege 2023 — "Versorgung mit der einen Hand ablösen, mit der anderen Hand die Haut gegenhalten/fixieren"
- **Empfehlung:** s3 ergänzen: "Alten Beutel/Platte von oben nach unten abziehen — dabei die Haut mit der anderen Hand sanft gegenhalten (Hauteinriss vermeiden)."

#### F-04 (HOCH): "Lauwarmem Wasser, kein Seife/Desinfektionsmittel" — Formulierung greift zu kurz
- **Stelle:** Phase 3, Step 3.2, item s5
- **Problem:** Standard ist: lauwarmes Wasser **mit milder pH-neutraler Waschlotion ist erlaubt** (z.B. Stomareinigungstücher ohne Lanolin/Parfüm). Die kategorische Aussage "kein Seife" ist verkürzt. Korrekt: keine alkalische/parfümierte Seife, keine Desinfektionsmittel. pH-neutrale Waschlotion ist Standard. Schüler/in lernt hier "nur Wasser" — das ist im Alltag falsch und führt im Praktikum zu Konflikt mit der Realität.
- **Standard-Verweis:** FG SKM Stomapflege 2023; I-Care Pflege Kap. Ausscheidung
- **Empfehlung:** s5 ändern: "Stoma + Hautumgebung mit lauwarmem Wasser reinigen — bei Bedarf milde, pH-neutrale Waschlotion. KEIN alkalisches Seifenwasser, keine Desinfektionsmittel, kein Lanolin/Parfüm-haltiges Produkt."

### phase-informieren — ce02-nguyen-info-opt3-heparin-ort (mc)

#### F-05 (HOCH): Heparin-Injektionsort bei frischer Bauchdeckenwunde + Stoma — die "richtige" Antwort ist klinisch falsch
- **Stelle:** Phase 1, opt3, Score-3-Option ("Bauchnabelnah, 2-3 cm Abstand zum Nabel")
- **Problem:** Periumbilikal ist der **Standard-Ort** — ABER bei Herrn Nguyen: frische Sigmaresektions-Wunde im unteren Abdomen + Stoma im linken Unterbauch. Periumbilikal hat einen sehr engen Spielraum, der real auf der Station meist NICHT genutzt wird. Stattdessen: laterale Oberschenkelaußenseite oder Oberarm-Rückseite. Die explanation erwähnt "gegenüberliegende Seite" — aber als Score-3-Antwort wird "bauchnabelnah" markiert. Das widerspricht der konkreten klinischen Situation und kann zu falscher Praxis führen.
- **Standard-Verweis:** Pflege heute 7. Aufl. (Heparin-Applikation post-OP); FG SKM 2023 (Distanz zu Stoma + Wunde)
- **Empfehlung:** Entweder die Frage anpassen (allgemein: "Wo ist Standardort?" → Bauchdecke periumbilikal korrekt) ODER die Frage konkret patientenbezogen stellen: "Bei Herrn Nguyen — wo gibst du Heparin?" und Score-3 = "Laterale Oberschenkelaußenseite oder kontralateraler Oberbauch (Abstand zu Wunde + Stoma)". Aktuell sind Frage und Score widersprüchlich.

### phase-durchfuehren — ce02-nguyen-dur-06-ganzkörperpflege (sorting)

#### F-06 (MITTEL): Ganzkörperpflege-Reihenfolge — Stomaregion am Ende statt eigene Sequenz
- **Stelle:** Phase 4, Step 4.6, sortItems
- **Problem:** Item 6 ("Stomaregion: eigenes Set") steht in der sortItems-Liste an Position 6 (nach Genitale/Perianalbereich). Das ist hygienisch korrekt aufgestellt (Stoma nach unrein) — ABER: Standard ist, das Stoma bzw. den Beutelwechsel **außerhalb der Ganzkörperpflege als eigenständige Maßnahme** zu führen. Wenn die Logik ist "von sauber zu unrein", müsste Stoma ZWISCHEN Rumpf-vorne und Genitale, weil Stomainhalt zwar kontaminierend, aber NICHT mit Stuhl gleichzusetzen ist (Hygiene-Aspekt). Aktuelle Reihenfolge suggeriert "Stoma=schmutziger als Genitale" — fachlich nicht eindeutig.
- **Standard-Verweis:** Thiemes Pflege 14. Aufl. — Ganzkörperpflege; FG SKM 2023 — Stomapflege als eigenständige Versorgung
- **Empfehlung:** Item 6 umformulieren: "Stomaregion mit eigenem Set vor oder nach der Ganzkörperpflege — als eigenständige Maßnahme, nicht in die GKP integriert. Eigene Schüssel, eigene Tücher."

### phase-durchfuehren — ce02-nguyen-dur-07-mobilisation-planung (mc)

#### F-07 (MITTEL): Schellong-Test fehlt vor erster Mobilisation
- **Stelle:** Phase 4, Step 4.7, Score-3-Option
- **Problem:** Die Score-3-Antwort sagt "5 Minuten Bettkante, dann Schwindel und Blutdruck prüfen". Bei Ramipril + Mangelernährung + 4. Tag-post-OP ist ein **strukturierter Schellong-Test** (RR liegen → 1 Min sitzen → RR sitzen → 3 Min stehen → RR stehend) der Standard, NICHT eine 5-Minuten-Pause-und-fühlen. Die Begründung im explanation erwähnt "Orthostase-Assessment" aber kein Schellong-Protokoll.
- **Standard-Verweis:** DNQP Sturzprophylaxe; Pflege heute Kap. Mobilisation/Orthostase
- **Empfehlung:** explanation präzisieren: "Schellong-Modus: RR liegend dokumentieren → an Bettkante setzen, 1-3 Minuten warten, RR sitzend dokumentieren → erst dann Aufstehen. Bei RR-Abfall ≥20 mmHg systolisch oder Schwindel: zurücklegen, Arzt informieren."

### phase-evaluieren — ce02-nguyen-eval-02-ernaehrung-bilanz (calculation)

#### F-08 (NIEDRIG): kcal-Tabelle "Heute 07:30 Tee 150 ml" — keine Kalorien-Angabe in Phase 5 body, aber in TableFillIn auftauchend
- **Stelle:** Phase 5 Step 5.2 vs. Phase 6 Step 6.2 — beide nutzen denselben Datensatz
- **Problem:** In Phase 5 body wird Trinknahrung "150 ml (Fresubin 2 kcal/ml = 300 kcal)" angegeben. In Phase 6 TableFillIn auch. Konsistent. ABER: Albumin-Hypoalbuminämie-Argument sagt in Phase 5 "Eskalation dringend notwendig — ggf. parenterale Ernährung". Das ist in der frühen 4-Tage-post-OP-Phase eine ärztliche Entscheidung (kein Pflege-Vorgriff). Fast korrekt — die Formulierung "ggf. ärztliche Anordnung" entschärft.
- **Empfehlung:** Klar trennen: "Pflege fordert Ernährungsberaterin an, dokumentiert, eskaliert an Arzt. Parenterale Ernährung = ärztliche Anordnung."

### phase-dokumentieren — ce02-nguyen-dok-03-pflegebericht-matching

#### F-09 (MITTEL): "Bauchdeckenwunde" gehört in Wunddokumentation, nicht in Stomadokumentation
- **Stelle:** Phase 6, Step 6.3, matchingPair "Bauchdeckenwunde: leicht gerötet... → Stomadokumentation"
- **Problem:** Die postoperative Wunde ist klar von der Stomadokumentation zu trennen. Sie gehört in eine eigene **Wunddokumentation** (Wund-Assessment-Bogen, ggf. nach DNQP Wunde). In Step 6.1 ist sie als Pflicht-Element 6 unter Stoma aufgenommen — sachlich falsch zugeordnet.
- **Standard-Verweis:** DNQP Pflege Menschen mit chronischen Wunden; Standardisierte Wunddokumentation
- **Empfehlung:** matchingPair ändern: rechts = "Wunddokumentation". In Step 6.1 ein Pflicht-Element trennen: "6a) Stoma-Befund + 6b) Bauchdeckenwunde-Status (separat)".

### phase-durchfuehren — ce02-nguyen-dur-02 Phase 1 Score-1-Option

#### F-10 (NIEDRIG): "Jeden Schritt ausführlich kommentieren" als Score-1 etwas unfair
- **Stelle:** Phase 4, Step 4.2, Phase 1, Option 1 (Score 1)
- **Problem:** Detaillierte Erklärungen sind bei Pflegeschüler/innen auch ein lobenswertes Verhalten (Transparenz). Score 1 wirkt streng, weil das Verhalten nicht "falsch" ist — nur überflüssig bei einem Patienten mit Schamthema. Realistischerweise ist das eine Score-2-Antwort (verbessern, nicht abwerten).
- **Empfehlung:** Score auf 2 anheben oder im feedback klarer würdigen: "Transparenz ist wichtig — bei Herrn Nguyen aber zu viel."

### patient.ts

#### F-11 (NIEDRIG): Albumin-Wert in Diagnosen ohne Datum / Datierung
- **Stelle:** patient.ts, diagnosen[2] "Albumin 28 g/l (↓)"
- **Problem:** Klinisch sollten Laborwerte mit Abnahmedatum dokumentiert sein. Im Lerncontext nicht zwingend, aber fachlich sauber.
- **Empfehlung:** Optional ergänzen "Albumin 28 g/l (Abnahme Tag 2 post-OP)".

#### F-12 (NIEDRIG): "kein Hunger" als wörtliches Patientenzitat — Vietnamese B1?
- **Stelle:** Phase 2, Step 2.4, Phase 2, Option 2, patientResponse
- **Problem:** Herr Nguyen wird konsistent als "Deutsch reicht für kurze Sätze im Alltag" beschrieben. "Nein. Kein Hunger." passt — gut. An anderen Stellen sind Sätze etwas länger ("Danke. Das... war nicht so schlimm. Wie ich dachte.") — passt zu sehr suchend, glaubwürdig.
- **Empfehlung:** Keine Änderung nötig — gut konstruierte Sprache.

## Cross-Step-Probleme

- **Plattengröße**: Phase 4 Kontext = "60 mm" (alt), Phase 4 Step 4.5 K3 Leckage hat keine explizite mm-Angabe, Phase 5 evaluiert "Plattengröße angepasst", Phase 6 dokumentiert "auf 62 mm angepasst". KONSISTENT — gut nachvollziehbar.
- **NRS 3/10**: konsistent in Phase 4 (Mobilisation) und Phase 6 (Pflegebericht).
- **Ernährungsbilanz 440 kcal**: konsistent in Phase 5 calc + Phase 6 TableFillIn + Phase 6 Übergabe.
- **Reinigung mit Wasser**: Phase 3 sagt "kein Seife" — Phase 4 erwähnt Reinigung nicht im Detail. Konsistent verkürzt (siehe F-04).
- **Score-Konsequenz K1 Phase 4**: Score-3-Antwort führt zu reflektiertem Patient-Response — aber im weiteren Verlauf (Phase 5 Z6) "drei Sekunden auf Stoma geschaut" — wird unabhängig vom Score erzählt. Das ist schwach — bei Score 0 müsste die Phase 5-Erzählung anders aussehen. Problem aller Lernpfade ohne echtes Branching durch die Phasen.

## Zusammenfassung

- **HOCH:** 3 Findings (F-03 Beutel-Abziehrichtung ohne Hand-Fixierung, F-04 "kein Seife" zu kategorisch, F-05 Heparin-Ort widerspricht klinischer Situation)
- **MITTEL:** 4 Findings (F-01 Sequencing-Lösung unklar, F-06 Stoma in GKP-Reihenfolge, F-07 Schellong-Protokoll fehlt, F-09 Wunde≠Stoma)
- **NIEDRIG:** 5 Findings (F-02 SBAR-Inkonsistenz, F-08 parenterale Ernährung, F-10 Score-1 streng, F-11 Albumin-Datum, F-12 OK)

**Allgemeine Beobachtungen:**
- Pseudo-Empathie-Bias: NEIN — Sandwich-Feedback ist authentisch und konkret. "Spiegeln statt falscher Trost" wird vorbildlich umgesetzt (F K1 Phase 4).
- Standards-Bezug: SEHR GUT — FG SKM 2023, DGEM Chirurgie 2020, DNQP Dekubitus, ICN-Ethik konsistent zitiert.
- B1-Konsistenz: GUT — Satzanfänge sauber, Glossarbegriffe konsistent, Anrede "du" durchgängig.
- Interkulturelle Sensibilität: STARK (Tochter-Übersetzer-Rollenkonflikt, Augenkontakt-Patient, kulturelle Schamkomponente).
- Realitätscheck: Im Wesentlichen realitätsnah; schwächste Stelle ist F-05 (Heparin) und F-04 (Reinigung).

**K.O.-Verdikt:** **FAIL** — 3 HOCH-Findings ungelöst (F-03, F-04, F-05). Empfehlung: Diese drei Punkte vor Live-Deploy korrigieren. Die übrigen sind in einem Folge-Sprint adressierbar.

**Stärken zum Erhalt:**
- K1-Branching "Ich bin kein richtiger Mann mehr" (Phase 4 Step 4.3) — das ist Lehrbuch-Qualität für würdevolle Pflege.
- Ehefrau-Mai-Dialog (Phase 4 Step 4.4) — Entlassungsmanagement im Akutkontext, fachlich solide gegliedert.
- Z6-Schluss "Nicht so schlimm wie ich dachte" (Phase 5 Step 5.3) — emotional und fachlich präzise als ersten Schritt der Körperbild-Akzeptanz markiert, kein falscher Optimismus.
