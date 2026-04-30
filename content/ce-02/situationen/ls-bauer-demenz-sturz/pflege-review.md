# Pflege-Review: ls-bauer-demenz-sturz

**Geprüft:** 2026-04-26 (Re-Review nach Fixes)
**Modus:** code
**Files:** 7 (patient.ts + 6 Phasen)
**Step-Anzahl:** 47 (7 Informieren, 9 Beobachten, 7 Planen, 11 Durchführen, 7 Evaluieren, 6 Dokumentieren)
**Davon:** 9 inlineWissen, 8 Dialog, 5 Categorize, 4 Sequencing, 4 Freetext/Reflection, 3 Branching, 3 Text, 2 MC/TrueFalse, 2 Highlight/ErrorSpot, 7 Sonstige (Flipcard, Comparison, Matrix, Matching, Timer, TableFillIn, Summary, Calculation)

---

## Vorbemerkung

Dieser Report ist ein vollstaendiges Re-Review des Codes nach den Fixes vom 2026-04-26 (15 Findings + Cross-Step-Korrekturen). Er prueft den aktuellen Stand aller phase-*.ts + patient.ts.

---

## Findings

### phase-durchfuehren — ce02-bauer-dur-04-bewegungsuebungen (sequencing)

#### F-01 (HOCH): Lagerungsrolle unter die Kniekehle foerdert Beugestellung statt Streckung

- **Stelle:** Zeile 391, phase-durchfuehren.ts, Item e4
- **Problem:** Step-Label e4 lautet: "Kniegelenk in Neutralstellung auspolstern (Lagerungsrolle unter die Kniekehle)". Bei einem Patienten mit Streckdefizit 20 Grad rechts (dokumentiert in patient.ts) **foerdert** eine Rolle unter der Kniekehle die Beugestellung — genau die Kontrakturstellung die verhindert werden soll. Die Kniekehle wird angehoben, das Knie bleibt flektiert.
- **Standard-Verweis:** DNQP Kontrakturenprophylaxe 2014: Lagerung soll Funktionsstellung foerdern, nicht Kontrakturstellung. I Care Pflege, Kap. Positionsunterstuetzung: Bei Beugekontraktur-Gefahr die Ferse unterpolstern (Ferse frei, Unterschenkel auf Kissen), damit das Knie sich durch Eigengewicht strecken kann.
- **Empfehlung:** Aendern zu: "Knie in Streckrichtung lagern: Ferse unterpolstern (Lagerungsrolle UNTER dem Unterschenkel, Ferse frei), damit das Kniegelenk durch Eigengewicht in Richtung Streckung geht. Keine Rolle unter die Kniekehle — das wuerde die Beugestellung foerdern."

### phase-beobachten — ce02-bauer-beob-04-haut-trinkprotokoll (highlight)

#### F-02 (MITTEL) [GEFIXT 2026-04-30]: Inkontinenz-Segment suggeriert "Wechseln = Fehler"

- **Stelle:** Zeile 353-358, phase-beobachten.ts, highlightSegments[5]
- **Problem:** Segment-Text "Inkontinenzversorgung 3× gewechselt in der Nacht" suggeriert "Haeufiges Wechseln = Risiko". Tatsaechlich liegt das Risiko im haeufigen Nasswerden.
- **Fix:** Segment-Text geaendert zu: "Inkontinenzversorgung 3× nass gewechselt in der Nacht," — Nasswerden als Risikofaktor erkennbar.

### phase-evaluieren — ce02-bauer-eval-01b (inlineWissen)

#### F-03 (NIEDRIG) [GEFIXT 2026-04-30]: Grammatikfehler im B1-Vertiefungstext

- **Stelle:** Zeile 125, phase-evaluieren.ts, vertiefungB1
- **Problem:** "Du musst pruefst" — Verb doppelt konjugiert.
- **Fix:** Korrigiert zu "Du musst pruefen".

### phase-planen — ce02-bauer-plan-06-freiheitsentziehung (truefalse)

#### F-04 (NIEDRIG) [GEFIXT 2026-04-30]: Sensormatten — Rechtshinweis optional

- **Stelle:** Zeile 416-421, phase-planen.ts
- **Problem:** Aussage "Sensormatten gelten rechtlich nicht als Fixierung" ohne Hinweis auf Debatte bei Kombination mit verschlossener Stationstuer.
- **Fix:** Erklaerung ergaenzt: "Rechtliche Grauzone: In Kombination mit verschlossener Stationstür haben einzelne Gerichte Sensormatten als Teil einer FEM eingestuft."

---

## Cross-Step-Probleme

### Konsistenz patient.ts vs. Phasen

- **Alter (82):** Konsistent in allen Phasen. OK.
- **FAST 6a:** Konsistent. OK.
- **Streckdefizit 20 Grad rechts, 10 Grad links:** Konsistent in Phase 2, 3, 4, 6. OK.
- **Mirtazapin 15 mg z. N. + PRISCUS + Sturzrisiko:** In patient.ts und konsistent in Phase 1, 3, 5, 6. OK.
- **Trinkmenge 900-1100 ml / Ziel 1500 ml:** Konsistent. Phase 5: 1000 ml (200+400+400), plausibel. OK.
- **Sturzzeit 02:30 Uhr:** Konsistent. OK.
- **Malzgetraenk alkoholfrei + Mirtazapin-Kontraindikation:** Korrekt in patient.ts, Phase 3, Phase 4. Konsistent und explizit gekennzeichnet. OK.
- **Gesetzliche Betreuerin Ingrid (2024, Gesundheitssorge):** Korrekt in patient.ts und in Phase 5 als Vorbedingung geprueft. OK.
- **BESD-Werte:** Phase 2 (kerntext: BESD 5), Phase 4 (Kniebewegung: BESD beachten), Phase 6 (Dokumentation: BESD 2/10 im Sturzprotokoll). Die BESD-Werte sind nicht widerspruechlich: 5 bei Erstbeobachtung (Grimasse + Schlagen + beruhigbar), 2/10 im spaeter geschriebenen Protokoll bezieht sich auf das rechte Knie bei Bewegung nach Deeskalation — andere Situation, anderer Zeitpunkt. Plausibel. OK.

### Cross-Step Logik

- **Kontraktur Phase 2 → Phase 3 → Phase 4:** Grundlagen → Plan → Durchfuehrung. Konsistent AUSSER F-01 (Lagerungsrolle).
- **Validation Phase 1 → Phase 4 → Phase 5:** "14 Techniken, vereinfacht" (Phase 1) → Deeskalation (Phase 4) → Angehoerige (Phase 5). Roter Faden stimmt.
- **Hygiene-Reihenfolge:** Phase 3 (Plan: "sauber → unrein"), Phase 4 (Erklaer-Step: Gesicht/Augen zuerst, Genital zuletzt; Stirn-Waesche im Dialog). Konsistent. OK.
- **Sturzprotokoll Phase 2 → Phase 6:** Phase 2 verweist auf "spaeter ins Sturzprotokoll fliessen", Phase 6 loest das ein. OK.

---

## Inline-Wissen (inlineWissen-Steps) — Fachliche Pruefung

| Step | Thema | kerntext | faustregel | spektrum | Verdict |
|------|-------|---------|-----------|----------|---------|
| 1.1b | Sturz bei Demenz | Sundowning, Apraxie, Medikamente, DNQP 2022 + DGN 2024. Korrekt. | "Orientierungs-Stuerze, keine Stolper-Stuerze" — praegnant, korrekt | 4 Patienten, plausibel differenziert | OK |
| 1.2b | Basale Stimulation | 3 Grundbereiche (somatisch, vestibulaer, vibratorisch), Initialberuehrung, Bienstein/Froehlich 2021. Korrekt. | "Sprache vergisst der Mensch. Beruehrung vergisst der Koerper nie." — korrekt | 4 Patienten inkl. Saeugling (Froehlich-Ursprung 1978) | OK |
| 2.2b | Kontraktur Grundlagen | DNQP 2018, 1-2 Wochen Zeitfaktor, Beobachtungszeichen, Kontrakturarten. Korrekt. | "Heute nicht bewegt = morgen schwerer zu bewegen" — korrekt | 3 Patienten, differenziert (Spastik, post-OP, Inaktivitaet) | OK |
| 2.4b | BESD/PAINAD | 5 Kategorien (Atmung, Laut, Gesicht, Koerper, Trost), Basler 2006. BESD 5 bei Bauer nachvollziehbar (2+2+1). Korrekt. | "Bei Demenz: Beobachten statt Fragen. BESD ab 3 = Schmerz." — korrekt | 3 Patienten inkl. Polyneuropathie-Paradoxon | OK |
| 3.2b | Ganzkoerperpflege Demenz | 3 Ziele (Beziehung, Schmerzbeobachtung, Kontraktur-Prophylaxe), Bienstein/Froehlich + Kitwood + DNQP 2018. Reihenfolge sauber→unrein. Korrekt. | Korrekt | 4 Patienten (Yilmaz, Petrov, Emilia, Schmidt) | OK |
| 4.1b | Haarwuchsrichtung/Koerperschema | C-Taktil-Fasern, Inselcortex, A-beta-Fasern. Neurophysiologisch solide (Bienstein/Froehlich 2021, Froehlich 2023). | "In Haarwuchsrichtung = beruhigend. Gegen = belebend." — korrekt | 3 Patienten (Parkinson-Rigor, Neglect, COPD-Angst) | OK |
| 4.3b | Passive Bewegung bei Demenz | Integration in Koerperpflege, 5 Regeln, BESD waehrend Bewegung. Korrekt. | "Waschung oeffnet die Tuer — Bewegung nutzt den Moment" — korrekt | 3 Patienten (Bobath, Physio, Dyspnoe-Spirale) | OK |
| 5.1b | Sturzschutz-Evaluation | DNQP E5, Ergebnis- vs. Prozess-Evaluation, Intervalle. Korrekt. | "Kein Sturz + alle Maßnahmen = Erfolg. Kein Sturz allein = Zufall." — korrekt, praegnant | 3 Patienten (situativ, Mobilisationsfortschritt, chronisch) | OK |
| 6.1b | Dokumentation bei Demenz | 4 Besonderheiten (Verhalten statt Wertung, BESD, Ressourcen, konkrete Maßnahmen). DNQP 2018, § 4 PflBG. Korrekt. | "Verhalten + Strategie + Ergebnis. Keine Wertungen." — korrekt | 3 Patienten (NRS direkt, Aphasie, Sprachbarriere) | OK |

**Alle 9 inlineWissen-Steps fachlich korrekt.** Kerntexte, Faustregeln und Spektren stimmen mit den angegebenen Quellen ueberein. Kein erfundener Content erkennbar. Keine Pseudo-Empathie, keine Romantisierung. Standards korrekt referenziert.

---

## Zusammenfassung

- **1 Finding HOCH** (F-01: Lagerungsrolle unter Kniekehle bei Streckdefizit)
- **1 Finding MITTEL** (F-02: Inkontinenz-Segment-Text [GEFIXT])
- **2 Findings NIEDRIG** (F-03: Grammatik B1 [GEFIXT], F-04: Sensormatten-Rechtshinweis [GEFIXT])

**Allgemeine Beobachtungen:**
- **Pseudo-Empathie-Bias:** Nicht vorhanden. Sprache ist konkret, fachbezogen, nicht romantisierend.
- **Anti-Patterns geprueft:** Kein "indirektes Licht" bei Assessment, kein "NRS ok", kein kinästhetisch falsches Heben, kein "unter den Achseln greifen", kein "Sie haben Glueck", keine einseitigen Bettgitter ohne Genehmigung.
- **Bettgitter:** Korrekt als FEM dargestellt (Phase 1 inlineWissen + Phase 3 TrueFalse). Differenzierte Rechtsgrundlage (§ 1831 BGB, § 34 StGB Notstand).
- **Schweigepflicht/Betreuungsrecht:** Korrekt eingebaut (Phase 5 — Ingrid als Betreuerin geprueft, § 203 StGB verwiesen).
- **Validation:** Differenziert dargestellt (14 Techniken, vereinfacht auf Grundprinzipien, korrekt nach Feil 2012). Nicht simplifiziert.
- **B1-Texte:** Durchgehend vorhanden, sprachlich angemessen, fachlich nicht verwassert.
- **Dialog-Optionen:** Alle haben patientResponse + feedback + feedbackB1. Distraktoren sind plausible Anfaenger-Fehler, keine Karikaturen. Score-Abstufungen nachvollziehbar.
- **Quellen:** Durchgehend angegeben. Standards korrekt: DNQP 2022 (Sturz), DNQP 2018 (Demenz, Kontraktur), Basler 2006, Bienstein/Froehlich 2021, Feil 2012, Kitwood 1997, DGN 2024, § 1831 BGB, § 4 PflBG.
- **Medikamente:** Mirtazapin + PRISCUS korrekt, Malzbier alkoholfrei korrekt + Kontraindikation explizit.
- **Cross-Step-Konsistenz:** Bis auf F-01 vollstaendig konsistent (Alter, FAST, Streckdefizit, Trinkmenge, Sturzzeit, Betreuung, BESD-Werte).

**Gesamtqualitaet:** Sehr hoch. 47 Steps, 9 davon inlineWissen mit Kerntexten, Faustregeln und Spektren — alles fachlich korrekt und standardskonform. Die Situation ist eine der besten im Projekt. Das HOCH-Finding (F-01) ist ein einzelner, klar abgegrenzter Lagerungsfehler in einem Sequencing-Label — schnell korrigierbar.

---

**K.O.-Verdikt: FAIL**

Begruendung: 1 HOCH-Finding (F-01). Eine Lagerungsrolle unter der Kniekehle bei bestehendem Streckdefizit von 20 Grad foerdert aktiv die Kontraktur statt sie zu verhindern — das ist pflegerisch kontraindiziert und kann Schaden verursachen (Kontraktur-Verschlechterung). Nach Korrektur von F-01 → PASS.
