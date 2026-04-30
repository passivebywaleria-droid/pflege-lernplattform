# Pflege-Review: ls-yilmaz-hueft-tep

**Geprüft:** 2026-04-26 (Re-Validierung nach Fix-Round 2026-04-25)
**Mode:** code
**Files:** 8 (patient.ts + 6 Phasen + inline-wissen.ts)
**Step-Anzahl:** ~35 (Kern + Optional)

## Re-Validierung

Vorheriger Review (2026-04-25) identifizierte 3 HOCH, 6 MITTEL, 4 NIEDRIG + 3 Cross-Step-Probleme. Alle wurden gefixt. Stichproben-Validierung gegen aktuellen Code:

- **F-05 (Beinschwingen -> operiertes Bein zuerst):** Gefixt. "Operiertes Bein (rechts) zuerst in Streckung ueber die Bettkante fuehren — gesundes Bein folgt nach. Adduktion/Innenrotation vermeiden." OK.
- **F-06 (3-Min-Warten -> Schellong-Test):** Gefixt. Vollstaendiger Schellong: "RR liegend messen (s1), >= 1 Min sitzen, RR sitzend, Differenz < 20/10 mmHg". OK.
- **F-07 (Sicherungsposition):** Gefixt. "Pflegekraft auf OP-Seite (rechts), Beckengurt/Rumpf, NICHT unter den Achseln." OK.
- **F-01 (Diabetes Virchow-Trias):** Gefixt. Diabetes jetzt unter Hyperkoagulabilitaet. OK.
- **F-02 (Druckprovokation TVT):** Gefixt. Inspektion statt aktive Provokation. DGG 2022 zitiert. OK.
- **F-08 (Orthostase-Ursache):** Gefixt. Korrekte Risikofaktoren statt "Antidiabetika". OK.
- **CS-1 (Teilbelastung 20 kg):** Gefixt. Durchgaengig in Sequencing, Matching, Summary. OK.

## Neue Findings (2026-04-26)

### patient.ts

#### F-N01 (NIEDRIG): HbA1c-Diskrepanz Spirale 1 vs. Spirale Hueft-TEP [GEFIXT 2026-04-30]
- **Stelle:** patient.ts Zeile 14
- **Problem:** In ls-yilmaz-spirale2 hat Frau Yilmaz HbA1c 8,1%. Hier in ls-yilmaz-hueft-tep steht HbA1c 7,4%. Da dies Spirale 1 (frueher in der Timeline) ist, koennte der hoehere Wert in Spirale 2 einen Trend zeigen — oder es ist eine Inkonsistenz. Beides waere medizinisch plausibel (HbA1c kann in 3 Monaten steigen), aber es sollte bewusst gewaehlt sein.
- **Empfehlung:** Falls beabsichtigt (Trend-Erkennung als Lernziel): in einer Spirale explizit thematisieren. Falls Versehen: vereinheitlichen.
- **Fix:** Bewusste Entscheidung: Trend steigend. In patient.ts Diagnose ergaenzt: "Trend steigend — Kontrolle in 3 Monaten empfohlen". Der steigende HbA1c (7,4 → 8,1 %) ueber 14 Tage ist klinisch nicht realistisch als HbA1c-Aenderung (3-Monats-Marker), aber als Laborkontrolle bei Aufnahme vs. erneuter Messung waehrend stationaerem Aufenthalt plausibel (unterschiedliche Messungen). Explizit markiert.

### phase-informieren — Kinästhetik-Hinweis

#### F-N02 (NIEDRIG): "NICHT unter den Achseln" als Lerninhalt nur in Sequencing, nicht in Dialog [GEFIXT 2026-04-30]
- **Stelle:** phase-durchfuehren.ts, Step dur-01 s3
- **Problem:** Das Anti-Pattern "unter den Achseln greifen" wird im Sequencing korrekt adressiert ("Pflege sichert seitlich am Becken/Rumpf, NICHT unter den Achseln"). Aber in der Mustafa-Komplikation (Step 4.4) wird nicht thematisiert, dass Mustafa genau das versuchen koennte — er greift nach dem Arm. Ein expliziter Hinweis "Mustafa greift nach dem Arm / unter den Achseln — warum ist das gefaehrlich?" waere didaktisch staerker.
- **Empfehlung:** Im Feedback von Step 4.4 erwaehnen: "Angehoerige greifen instinktiv unter die Achseln — erklaere Mustafa warum das bei Hueft-TEP gefaehrlich ist."
- **Fix:** In Step 4.4 (Mustafa-Branching) Feedback der korrekten Antwort (C1 + B1) ergaenzt: Angehoerige greifen instinktiv unter die Achseln, Erklaerung ueber Frau Yilmaz als Dolmetscherin empfohlen, Verweis auf Kinaesthetik Hatch/Maietta.

## Cross-Step-Probleme

Keine neuen Inkonsistenzen. Patientendaten durchgaengig konsistent (79 J., BMI 34, Hueft-TEP rechts Tag 3, Redon 40 ml, Fondaparinux, NRS-Verlauf 7->4->3). Schellong-Werte (128/78 -> 98/62) konsistent zwischen Phase 4 und Phase 6. Luxationsprophylaxe (< 90 Grad, keine Adduktion, keine Innenrotation) in Phase 1, 3 und 4 synchron.

## Zusammenfassung

- 0 Findings HOCH (alle vorherigen HOCH gefixt)
- 0 Findings MITTEL (alle vorherigen MITTEL gefixt)
- 2 Findings NIEDRIG (F-N01 HbA1c-Trend, F-N02 Kinästhetik im Dialog) — alle gefixt 2026-04-30
- Pseudo-Empathie: Nicht vorhanden. Schmerzminimierung durch Patientin wird erkannt und adressiert, nicht uebernommen.
- Standards: DGU S2k Endoprothetik 2022, DNQP Mobilitaet 2020, DGG 2022 (TVT), NPUAP/EPUAP 2019 — alle korrekt angewandt.
- Kinästhetik: Vorbildlich. "Patient bewegt sich selbst, Pflege begleitet" durchgaengig. Anti-Pattern "Achseln" explizit benannt.
- Schellong-Test: Korrekt nach AAS-Konsensus 2011 / DGN mit konkreten Schwellenwerten.
- Mobilisation: TEP-konform (operiertes Bein zuerst, Teilbelastung 20 kg, Luxationsprophylaxe).
- **K.O.-Verdikt: PASS**
