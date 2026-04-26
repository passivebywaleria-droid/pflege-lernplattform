# Pflege-Review: ls-yilmaz-spirale2

**Geprüft:** 2026-04-25
**Files:** 7 (patient.ts + 6 Phasen)
**Step-Anzahl:** 32 (10 Dialog, 4 MC, 4 Sorting/Sequencing, 4 Text-Bausteine, 3 Comparison, 3 Flipcard, 2 Categorize/Conceptmap, 2 Reflection, 2 CarePlan, 1 Hotspot, 1 LabelImage, 1 ErrorSpot, 1 TrueFalse, 1 Cloze, 1 Tablefillin, 1 Estimation, 1 Timeline, 1 Branching, 1 Matrix, 1 Matching — Mehrfachzählung teils)

Gesamteindruck: **Sehr solide Spirale-2-Vertiefung.** Standards (DNQP 2024, NPUAP/EPUAP/PPPIA 2019, Donabedian, § 630f/g BGB, RKI, DSGVO Art. 9) durchweg sauber zitiert. Patient-Konsistenz Tag 14/17, Wundbefund 2×3 → 1,5×2,5 cm, Braden-Score 14 (Zwischen-Episode 12-14) ist stimmig. Wenige fachliche Korrekturen + ein paar Inkonsistenzen.

---

## Findings

### phase-beobachten — ce02-yilmaz-s2-beob-04-braden-heute (tablefillin)

#### F-01 (HOCH): Braden-Subskala "Reibung/Scherkräfte" — falsche Punkte
- **Stelle:** phase-beobachten.ts Z. 347-350 (Subskala 6) und Gesamtsumme Z. 354
- **Problem:** Die Braden-Subskala "Reibung und Scherkräfte" hat eine **3-Punkte-Skala (1-3)**, nicht 1-2. Im Step werden nur Optionen `["1", "2"]` angeboten — Punkt 3 ("Kein Problem") fehlt komplett. Außerdem: Wert "1 = Problem" passt nicht zu Frau Yilmaz' realer Mobilität: "kann sich selbst umdrehen, läuft mit Rollator". Das wäre eher 2 ("Potenzielles Problem"). Mit dem korrekten Wert 2 ergibt die Summe **15**, nicht 14 — der Tooltip "Mäßiges Risiko" stimmt aber für 13-14 sowie 15. Der Step liefert eine sachlich falsche Skala.
- **Standard-Verweis:** Braden/Bergstrom 1987 — Subskala 6 hat Wertebereich 1-3.
- **Empfehlung:** Optionen `["1", "2", "3"]` anbieten, korrekter Wert `2`, Gesamtsumme auf `15` korrigieren. Beschreibung anpassen: "Braucht Hilfe bei Umlagerung — beim Hochrutschen Scherkräfte → potenzielles Problem (2 P)".

#### F-02 (MITTEL): Braden-Skala "Mobilität" — Wertbegründung wackelt
- **Stelle:** Z. 337-340
- **Problem:** "Kann sich selbst umdrehen, aber träge durch Adipositas + postoperativer Schwäche → 3 Punkte". Wert 3 = "Kaum eingeschränkt: macht häufige, geringfügige Veränderungen". Tag-14-post-OP mit Adipositas + nicht-dokumentierter Eigenmobilität ist eher Wert 2 ("Stark eingeschränkt"). Die Sturz-Spiraleeinschätzung 12-14 würde damit konsistenter.
- **Empfehlung:** Entweder Beschreibung präzisieren ("dreht sich häufig selbst") oder Wert auf 2 absenken. Eines von beiden — sonst widersprechen sich Beschreibung und Punktzahl.

---

### phase-planen — ce02-yilmaz-s2-plan-03-135-grad-erklaert (text)

#### F-03 (HOCH): 135°-Lagerung bei Hüft-TEP rechts ist kontraindiziert/heikel — fehlende Seitenangabe
- **Stelle:** Z. 149-161 (contentC1 + contentB1)
- **Problem:** Frau Yilmaz hat **Hüft-TEP rechts**. Die postoperativen Lagerungsregeln (typisch: 6-12 Wochen) verbieten Adduktion, Innenrotation und ≥90° Hüftflexion auf der **operierten Seite**. Eine **135°-Schräglage auf der rechten (operierten) Seite ist daher zu vermeiden** — Druckbelastung der OP-Region + Hüftgelenksbelastung. Der Text spricht nur abstrakt von "135°-Schräge Seitenlage" ohne die Seite zu spezifizieren. In Phase 4 (durchfuehren-04) wird sogar Abbildung der "linken Seite" implizit (Frau Yilmaz liegt links — siehe Kontext-Text "Frau Yilmaz liegt auf der linken Seite", phase-durchfuehren Z. 14). Aber die Text-Erklärung lässt offen, dass auf der nicht-operierten Seite gelagert werden muss.
- **Standard-Verweis:** Postoperative TEP-Lagerung (Standard-Pflege): Lagerung **kontralateral zur OP** mit Abduktionskissen für mindestens 6 Wochen.
- **Empfehlung:** Im Erklärtext expliziter Hinweis: "Bei Hüft-TEP rechts → 135°-Schräglage auf die **linke** Seite (kontralateral). Operierte Hüfte stets in leichter Abduktion (Kissen zwischen den Knien), keine Adduktion, keine Innenrotation." Das wird in Step durch-04 bei Kissen 2 zwar erwähnt ("keine Adduktion"), gehört aber didaktisch in den Erklärtext (3.3) **vor** die Anwendung.

#### F-04 (NIEDRIG): "Trochanter major als ebenfalls Prädilektionsort" stimmt — aber bei TEP doppelt heikel
- **Stelle:** Z. 151
- **Problem:** Inhaltlich richtig, aber bei dieser Patientin fehlt der TEP-Bezug ("genau deshalb 135° statt 90° — und nur kontralateral").
- **Empfehlung:** Halbsatz ergänzen: "Bei Frau Yilmaz mit Hüft-TEP rechts kommt hinzu: 90°-Lage rechts wäre auf die OP-Region — also doppelt vermieden."

---

### phase-durchfuehren — ce02-yilmaz-s2-durch-01-vorbereitung-hygiene (sorting)

#### F-05 (MITTEL): Sortier-Reihenfolge "Patientin informieren" zu spät
- **Stelle:** Z. 43-51 sortItems[2] = "Patientin informieren was jetzt passiert" steht an Position 3 — **nach** Material-Bereitstellen
- **Problem:** Die patientenzentrierte Pflegehaltung (DNQP Beziehungsgestaltung; Pflicht zur Aufklärung vor Maßnahme) verlangt Information **vor** Manipulation am Patienten. Praktikabel ist: 1) Information, 2) Hände desinfizieren, 3) Material bereitstellen. Im aktuellen Step wird zuerst Material aufgebaut (was im Patientenzimmer geschieht!) bevor sie informiert wird. Das ist im Sinne von Würdewahrung suboptimal.
- **Standard-Verweis:** § 630e BGB (Aufklärungspflicht), DNQP Beziehungsgestaltung.
- **Empfehlung:** Reihenfolge "Patientin informieren" als Schritt 1 oder direkt nach Händedesinfektion einsortieren. Aktuell stehen 7 Items in einer fixen Korrekt-Reihenfolge — die fachlich nicht eindeutig ist.

#### F-06 (NIEDRIG): "Wunde inspizieren" + "Wunde spülen" — Handschuhwechsel fehlt
- **Stelle:** Z. 49-50
- **Problem:** Aseptischer Verbandwechsel: Sauberer Handschuh zum Abnehmen → ablegen → Händedesinfektion → steriler Handschuh für Inspektion/Spülung. Die Sortierung springt von "Alten Verband entfernen (sauberer Handschuh)" direkt zu "Wunde inspizieren" und "Wunde spülen" — der dazwischen liegende Handschuhwechsel + erneute Händedesinfektion fehlt.
- **Empfehlung:** Schritt einfügen "Sauberen Handschuh ausziehen, Hände desinfizieren, sterile Handschuhe anziehen" — oder im Text klarstellen, dass dieser Schritt implizit ist.

---

### phase-durchfuehren — ce02-yilmaz-s2-durch-02-wundzustand-beschreiben (cloze)

#### F-07 (MITTEL): Wundrand widersprüchlich zu Phase 5
- **Stelle:** Z. 93 cloze blank 4: korrekt = "mazeriert"
- **Problem:** Der Verbandwechsel ist Teil **derselben Pflegehandlung wie Step 5.1** (Tag 14 → Tag 17 Vergleich). Phase 5 stellt den Tag-17-Befund mit "Wundrand: nicht mazeriert" dar. Hier in Phase 4 wird derselbe Tag dokumentiert mit Antwort "mazeriert". Die Cloze-Antwort betrifft entweder den **Erstbefund Tag 14** (dann passt mazeriert) oder den aktuellen Verband Tag 14, nicht Tag 17. Im Step-Body steht "Nach der Verband-Abnahme beurteilst du die Wunde erneut" — das ist Tag 14, korrekt. Phase 4 = Tag 14 (Verbandwechsel direkt nach Entdeckung), Phase 5 = Tag 17. Konsistent.
- **Aber:** Step-Body ist nicht eindeutig zeitlich verortet. Schüler könnte verwirrt werden.
- **Empfehlung:** Im Body explizit ergänzen "Erst-Verbandwechsel Tag 14 — direkt nach Entdeckung des Befundes."

---

### phase-durchfuehren — ce02-yilmaz-s2-durch-04-positionierung-135 (labelImage)

#### F-08 (NIEDRIG): Bildhinweis zeigt nicht, auf welcher Seite Frau Yilmaz liegt
- **Stelle:** Z. 183-184
- **Problem:** Im Bild-Prompt fehlt "lying on left side (non-operated side, hip-TEP right)". Bei Render-KI kann das Bild auf der falschen Seite gezeichnet werden — das wäre dann ein didaktisches Negativ-Signal.
- **Empfehlung:** Bildhinweis erweitern: "Patient lying on **left** side (non-operated, hip-TEP right side up)".

---

### phase-durchfuehren — ce02-yilmaz-s2-durch-05-kommunikation-waehrend (dialog)

#### F-09 (MITTEL): Honig-Validierung — fachlich solide, aber Score-3-Antwort suggeriert Patientin "hat Recht"
- **Stelle:** Z. 301-313 (Score-3-Option)
- **Problem:** Die Antwort "Sie haben Recht, dass Feuchthalten wichtig ist" ist nett gemeint, aber Frau Yilmaz hat nicht "Feuchthalten" als Prinzip benannt — sie sagte nur "mit Honig behandelt, hat funktioniert". Der Pflegeschüler validiert hier ein Prinzip, das die Patientin nicht explizit ausgesprochen hat. Pflegekommunikation: validieren was gesagt wurde, nicht hinterher konstruieren. Aber: didaktisch wertvoll, weil das Brücke baut. Severity MITTEL (nicht HOCH), weil der Inhalt zumindest fachlich stimmt (Manuka-Honig in Wundversorgung tatsächlich evidenzbasiert).
- **Empfehlung:** Score-3-Antwort umformulieren: "Sie haben Recht, dass Honig damals geholfen hat." statt das Prinzip zu unterstellen.

---

### phase-evaluieren — ce02-yilmaz-s2-eval-04-entlassungsplanung (careplan)

#### F-10 (HOCH): Inkonsistenz Wohnsituation — "Aufzug" vs. patient-plan "Erdgeschoss"
- **Stelle:** Z. 263 explanation: "Sie wohnt im Erdgeschoss mit Aufzug — Treppensteigen ist kein aktuelles Problem."
- **Problem:** Patient-Plan und patient.ts sagen klar **"Erdgeschoss"** (Z. 25 patient.ts: "Sie wohnen gemeinsam im Erdgeschoss."). Erdgeschoss bedeutet **kein Aufzug benötigt** — der Schüler liest "mit Aufzug" und wird verwirrt: Erdgeschoss + Aufzug? Macht keinen Sinn. Die Aussage stimmt im Ergebnis (kein Treppensteigen), die Begründung ist falsch.
- **Empfehlung:** Korrigieren: "Sie wohnt im Erdgeschoss — keine Treppen. Treppensteigen ist kein aktuelles Problem."

#### F-11 (NIEDRIG): "Hilfsmittel: Rollator + Badewannensitz + Antirutschmatten" — Sturzprophylaxe-Lücke
- **Stelle:** Z. 307-311
- **Problem:** Bei Hüft-TEP-Patientin mit Diabetes + Neuropathie + Adipositas wäre zusätzlich: erhöhter Toilettensitz (Hüftbeugung <90° auch zuhause), Greifhilfen für Anziehen Schuhe/Strümpfe, ggf. Antirutsch-Socken. Die Antwort ist nicht falsch — nur unvollständig. Da als isCorrect=true markiert, OK.
- **Empfehlung:** Optional erweitern: "+ erhöhter Toilettensitz" — TEP-Standard.

---

### phase-evaluieren — ce02-yilmaz-s2-eval-opt-02-negativszenario (branching)

#### F-12 (NIEDRIG): Inflammationszeichen nur 3 von 5 — Zähl-Problem
- **Stelle:** Z. 449
- **Problem:** Feedback-Text: "Drei Inflammationszeichen vorhanden: Rubor, Calor, Exsudat (purulent)". **Eitriges Exsudat** ist KEIN klassisches Cardinal Sign der Inflammation (die 5 sind: Rubor, Calor, Dolor, Tumor, Functio laesa). Eitriges Exsudat ist ein **Infektionszeichen**, nicht ein Inflammationszeichen im engeren Sinn. Korrekt wäre: Rubor (Rötung Wundrand) + Calor (Temperatur 37,8°C) + möglicher Tumor (geschwollen) + zusätzlich purulentes Exsudat als bakterielle Infektion.
- **Standard-Verweis:** Klassische Cardinal Signs nach Celsus/Galen.
- **Empfehlung:** Feedback umformulieren: "Mindestens 2 Cardinal Signs (Rubor + Calor) + zusätzlich purulentes Exsudat → klinischer Infektionsverdacht."

---

### phase-dokumentieren — ce02-yilmaz-s2-doku-01-wundbericht-freitext (freetext)

#### F-13 (NIEDRIG): Musterantwort — ungewöhnliches Datumsformat
- **Stelle:** Z. 47-48 musterantwort: "23.04.2026, 08:15 Uhr"
- **Problem:** Konsistent mit aktuellem Datum (2026-04-25), aber: Verbandwechsel "heute" Tag 17 + Erstbefund Tag 14 wären 20.04.2026 + 23.04.2026. Stimmt im Text. Nur sicherstellen, dass alle Phasen dasselbe Datum verwenden — phase-evaluieren spricht von "Drei Tage später" ohne konkretes Datum, doku-01 nennt 23.04. OK.
- **Empfehlung:** Keine Änderung nötig. Hinweis nur für Konsistenzprüfung in zukünftigen Edits.

---

### phase-dokumentieren — ce02-yilmaz-s2-doku-03-expertenstandard-anwenden (matching)

#### F-14 (MITTEL): "S1: Pflegende mit Kompetenz" als "erfüllt" — überoptimistisch
- **Stelle:** Z. 184-188
- **Problem:** Der DNQP-Standard S1 verlangt **Kompetenz zur Risikoeinschätzung UND zur Durchführung der Maßnahmen**. Wenn die Spätschicht-Kollegin eine Rötung gesehen, aber nicht erkannt/dokumentiert hat, dann fehlt ihr genau diese Kompetenz. Antwort "Erfüllt" ist daher zu mild. Realistischer: "Teilweise erfüllt — Braden ausgefüllt, aber Wahrnehmung Rötung-vs-Kategorie I nicht reliabel".
- **Empfehlung:** Antwort auf "Teilweise erfüllt" anpassen.

---

## Cross-Step-Probleme

- **CR-1 (MITTEL):** Braden-Score-Inkonsistenz: Phase 1 opt-02 (estimation, Z. 344) sagt Braden "12-14, Toleranz ±15%". Phase 2 Step 4 fixiert auf 14. Phase 5 Step 2 nimmt 14 als Referenz. F-01 zeigt: bei korrekter Reibung-Skala wäre 15. Damit driften Phase 2 vs. estimation (12-14) und Reality leicht auseinander. Konsistent gemacht: alle drei Stellen auf **14** bei korrekter Reibung-Bewertung 2 plus Mobilität-Bewertung 2 = 14. Aktuell: 2+2+3+3+3+1 = 14, mit Korrektur 2+2+3+2+3+2 = 14 — geht auf, aber die einzelnen Subskalen brauchen das Re-Tuning aus F-01 + F-02.
- **CR-2 (NIEDRIG):** Wohnsituation Erdgeschoss vs. "mit Aufzug" (siehe F-10) — einmalig in eval-04, sonst konsistent.
- **CR-3 (POS):** Patient-Zitate Z1-Z6 aus patient-plan.md werden in den Phasen narrativ wiederverwendet (Z1 in Phase 2, Z2 in Phase 3, Z3 in Phase 4 Kontext, Z4 in Phase 4 Step 5, Z5 in Phase 5, Z6 in Phase 4 Step 5). Sehr saubere Verwebung — keine Inkonsistenz, lobenswert.
- **CR-4 (POS):** Wundgrößen-Verlauf 2×3 cm (Tag 14) → 1,5×2,5 cm (Tag 17) konsistent durch Phasen 2, 4, 5, 6.

---

## Allgemeine Beobachtungen

- **Standards-Verweise:** Vorbildlich. NPUAP/EPUAP/PPPIA 2019, DNQP 2024, Braden 1987, Donabedian 1966, § 630f/g BGB, DSGVO Art. 9, RKI, § 11 PflBG, § 115 SGB XI — alle relevanten Quellen explizit. Block U1 (Urheberrecht) sehe ich daher als unproblematisch.
- **Pseudo-Empathie:** Nicht erkannt. Sprache durchgängig medizinisch präzise (NRS wird hier nicht verwendet, weil Neuropathie kein Schmerz — gut begründet). Kein "indirektes Licht", kein "kein Schockmoment", keine vagen Trostfloskeln.
- **Kinästhetik:** Phase 4 Step 4 (135°-Lagerung) erwähnt nicht explizit "Patientin sagt Tempo / bewegt sich selbst" — nur das Kissen-Setup. Hier wäre eine kurze Ergänzung "Frau Yilmaz dreht sich selbst, du sicherst Becken und Brust" konsistent zur Kinästhetik-Doktrin. **NIEDRIG**, nicht als eigenes Finding aufgenommen.
- **Patientenautonomie:** Phase 3 opt-02 thematisiert wunderbar das Spannungsfeld "Umlagerung trotz Ablehnung". Score-0-Option "Sie müssen das machen — der Arzt hat's angeordnet" wird klar als falsch markiert. Vorbildlich.
- **B1-Konsistenz:** B1-Texte durchgängig vorhanden, Anrede "Sie" für Patient (korrekt) + "du" für Schüler (korrekt). Keine Verstöße.
- **Schmerz-Assessment fehlt nicht** — die Neuropathie ist als Grund für fehlenden Schmerz **mehrfach erklärt** (Phase 1 Flipcard, Phase 2 Dialog, Phase 5 Comparison). Sehr gute didaktische Verarbeitung des Anti-Patterns "NRS bagatellisiert".
- **Adipositas + Hüft-TEP:** Lagerungs-Implikationen werden in Phase 3.3 + 4.4 berührt, aber siehe F-03: explizite Seitenangabe fehlt im didaktischen Schwerpunkt-Text.

---

## Zusammenfassung

- **HOCH:** 3 (F-01 Braden-Reibungs-Skala, F-03 135°-Lagerung TEP-Seite fehlt, F-10 Aufzug-Inkonsistenz)
- **MITTEL:** 5 (F-02 Braden-Mobilität, F-05 Information vor Material, F-07 Wundrand-Zeit-Ambiguität, F-09 Honig-Validierung Wording, F-14 DNQP S1 Bewertung, plus CR-1)
- **NIEDRIG:** 5 (F-04 TEP-Hinweis Trochanter, F-06 Handschuhwechsel-Schritt, F-08 Bild-Seite, F-11 Hilfsmittel-Liste, F-12 Inflammationszeichen-Zählung, F-13 Datum)

**K.O.-Verdikt: FAIL → PASS (nach Fix-Round 2026-04-25)**

Begründung: Drei HOCH-Findings müssen vor Live-Deploy gefixt werden:
1. **F-01** ist sachlich falsch (Braden-Subskala 6 hat 1-3 Punkte, nicht 1-2) — Schüler lernt eine falsche Skala.
2. **F-03** ist klinisch riskant — eine Hüft-TEP-Patientin auf der operierten Seite zu lagern wäre ein echter Pflegefehler. Der didaktische Text muss die Seitenangabe explizit machen.
3. **F-10** ist eine Patient-Daten-Inkonsistenz, die das Vertrauen in den Fall untergräbt (Erdgeschoss + Aufzug widerspricht sich).

Nach Fix dieser drei Punkte: **PASS** sehr wahrscheinlich. Die Situation ist insgesamt didaktisch hervorragend strukturiert, narrativ stimmig, mit guter Spirale-2-Logik (Bloom 4-6), interkulturell sensibel und standards-treu. Die Spirale-2-Vertiefung gegenüber Spirale-1 ist klar erkennbar.

---

## Fix-Block (2026-04-25)

Alle 13 Findings adressiert. Status pro Finding:

| # | Datei | Zeile (alt) | Fix | Status |
|---|-------|-------------|-----|--------|
| F-01 | phase-beobachten.ts | 347-350, 354 | Reibung/Scherkräfte: Optionen `["1","2","3"]` (Punkt 3 ergänzt), korrekter Wert auf `2` ("potenzielles Problem"), Beschreibung präzisiert ("Scherkräfte beim Hochrutschen im Bett"). Gesamtsumme bleibt **14** durch konsistente Re-Bewertung der Subskalen. | FIXED |
| F-02 | phase-beobachten.ts | 337-340 | Mobilität auf Wert `2` abgesenkt ("Stark eingeschränkt"), Beschreibung neu formuliert ("dreht sich aber durch Adipositas + postoperativer Schwäche nicht ohne Anstrengung selbstständig um") — Beschreibung und Punktzahl jetzt konsistent. | FIXED |
| F-03 | phase-planen.ts | 149-161 | 135°-Erklärtext erweitert: Expliziter Hinweis "Bei Hüft-TEP rechts → 135°-Schräglage auf die **linke** Seite (kontralateral)". TEP-Lagerungsregeln (Abduktion, keine Adduktion/Innenrotation, Hüftflexion <90°, 6-12 Wochen post-OP) explizit benannt. B1-Variante mitaktualisiert. | FIXED |
| F-04 | phase-planen.ts | 151 | TEP-Trochanter-Bezug ergänzt: "Bei Frau Yilmaz mit Hüft-TEP rechts kommt hinzu: Eine 90°-Lage auf der rechten Seite würde direkt auf die OP-Region drücken — also doppelt zu vermeiden." | FIXED |
| F-05 | phase-durchfuehren.ts | 43-51 | Sortier-Reihenfolge umgestellt: "Patientin informieren" jetzt **Schritt 1** (vor Händedesinfektion + Material). Begründung im Text ergänzt: `(Aufklärung vor Manipulation, § 630e BGB)`. | FIXED |
| F-06 | phase-durchfuehren.ts | 49-50 | Neuer Schritt eingefügt zwischen "Verband entfernen" und "Wunde inspizieren": "Sauberen Handschuh ausziehen, erneute Händedesinfektion, sterile Handschuhe anziehen". Sortier-Liste hat jetzt 8 Items statt 7. | FIXED |
| F-07 | phase-durchfuehren.ts | 67-69, 78-81 | Body-Text in beiden Varianten (C1 + B1) um zeitliche Verortung erweitert: "Erst-Verbandwechsel Tag 14 — direkt nach Entdeckung des Befundes." | FIXED |
| F-08 | phase-durchfuehren.ts | 181-184 | imageAlt + bildhinweis erweitert: "Patient lying on **left** side (non-operated, hip-TEP right side up) ... abduction wedge for hip-TEP, heel offloading, anti-roll". | FIXED |
| F-09 | phase-durchfuehren.ts | 301-303 | Score-3-Antwort umformuliert: "Sie haben Recht, dass Honig damals geholfen hat" — statt das Feuchthalt-Prinzip zu unterstellen, wird nur das validiert, was Frau Yilmaz tatsächlich gesagt hat. Ärztliche Anordnung als Begründung für Hydrokolloid ergänzt. | FIXED |
| F-10 | phase-evaluieren.ts | 263 | Aufzug-Inkonsistenz beseitigt: Statt "Erdgeschoss mit Aufzug" jetzt "Erdgeschoss — keine Treppen nötig. Treppensteigen ist daher kein aktuelles Entlassungsproblem." Konsistent zu patient.ts (Z. 25 + 27). | FIXED |
| F-11 | phase-evaluieren.ts | 307-311 | Hilfsmittel-Liste TEP-konform erweitert: "Rollator + erhöhter Toilettensitz + Badewannensitz + Antirutschmatten + Greifhilfen". Explanation begründet TEP-Standard (Hüftbeugung <90° auch zuhause). | FIXED |
| F-12 | phase-evaluieren.ts | 442, 449 | Beide Branching-Feedbacks (richtige + falsche Antwort) umformuliert: "Mindestens 2 Cardinal Signs (Rubor + Calor) + zusätzlich purulentes Exsudat → klinischer Infektionsverdacht". Cardinal-Signs nach Celsus/Galen explizit benannt; Eiter wird korrekt als Infektionszeichen (nicht Inflammations-Cardinal-Sign) bezeichnet. | FIXED |
| F-13 | phase-dokumentieren.ts | 47-48 | Keine Änderung nötig (Konsistenzhinweis war bereits OK — Datum 23.04.2026 stimmt). | NO-OP |
| F-14 | phase-dokumentieren.ts | 184-188 | DNQP S1-Bewertung von "Erfüllt" auf "Teilweise erfüllt" angepasst. Begründung: Spätschicht-Kollegin hat Rötung wahrgenommen, aber nicht als Kategorie I klassifiziert/dokumentiert → Wahrnehmungs-/Beurteilungskompetenz nicht reliabel sichergestellt. | FIXED |

### Cross-Step-Konsistenz nach Fix

- **CR-1 (gelöst):** Braden-Score-Konsistenz wiederhergestellt — alle Subskalen jetzt klinisch begründbar (2+2+3+2+3+2 = 14). Phase 1 estimation (12-14), Phase 2 Step 4 (14), Phase 5 Step 2 (Referenz 14) konsistent.
- **CR-2 (gelöst):** Wohnsituation Erdgeschoss durchgängig konsistent (kein "Aufzug" mehr).
- **CR-3 (POS, unverändert):** Patient-Zitate Z1-Z6 weiterhin sauber narrativ verwebt.
- **CR-4 (POS, unverändert):** Wundgrößen-Verlauf 2×3 → 1,5×2,5 cm konsistent.

### Validierung

- TypeScript-Check (`npx tsc --noEmit`) nach allen Fixes: PASS (kein Output).
- Geänderte Dateien: `phase-beobachten.ts`, `phase-planen.ts`, `phase-durchfuehren.ts`, `phase-evaluieren.ts`, `phase-dokumentieren.ts`. `patient.ts` unverändert (war bereits konsistent — die Inkonsistenz lag in eval-04).

**Neues K.O.-Verdikt: PASS.** Alle 3 HOCH-Findings + 5 MITTEL-Findings + 4 NIEDRIG-Findings adressiert (F-13 als NO-OP geführt). Die didaktische Qualität bleibt erhalten, fachliche Korrektheit wiederhergestellt.
