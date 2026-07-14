# Adversariales Klinik-Panel (W6) — CE-06 · ls-capstone-am-boden

**Datei:** `content/ce-06/situationen/ls-capstone-am-boden/phases.ts` (+ `patient.ts`)
**Fall:** Frau Wanda Petrova, 68 — Synkope (roter Faden) → Differenzierungs-Capstone „Jemand liegt am Boden — was ist es?" (Retrieval/Interleaving über LE1)
**Re-Prüfung 2025-Ergänzungen:** (1) Tab 1 `erk-01b` kerntext — Karotispuls-Halbsatz (erfahrenes Fachpersonal, zeitgleich zur Atemkontrolle ≤10 s), gegroundet `reanimation-bls` **F-03/2025** (I care Pflege 2025). (2) Fall 3 `erm-03` Musterlösung — „unverzüglich den Arzt rufen; ab >5 Min Status epilepticus", gegroundet `neurologische-akutsituationen` **F-11** (I care Pflege 2025 „unverzüglich Arzt rufen") + Krankheitslehre („>5 Min = Status").
**Grounding (KEIN neuer Kernfakt-Thema):** `notfallassessment.md`, `reanimation-bls.md` (**19/19** Verbatim-Belege, inkl. neu Karotispuls/10 s aus `icare-pflege-3aufl`), `neurologische-akutsituationen.md` (**23/23** Belege, inkl. neu „unverzüglich Arzt rufen"), `psychische-akutsituationen.md`
**Datum:** 2026-07-14 (Re-Prüfung; Erst-Prüfung 2026-07-13)

## Verdikt: ✅ PASS (kein K.O.)

| | HOCH | MITTEL | NIEDRIG |
|---|---|---|---|
| Befunde | **0** | 0 | 2 (informativ) |

Kein HOCH-Befund über die vier deterministischen Lenses + 5. semantischen Lens. Die Karotispuls-Zeile führt **keine CPR-Verzögerung** ein; die Krampfanfall-Präzisierung ist korrekt und aktueller als zuvor. N1 (Grounding-Nachverfolgbarkeit Delir-Zeile, aus Erst-Prüfung) + N2 (neu: kleine interne Wortlaut-Harmonisierung Krampfanfall) — beide **nicht blockierend**.

**Skript-Läufe (deterministisch, 0 Drift):**
- `klinik-panel.ts --situation ls-capstone-am-boden` → 0 Befunde (Zahlen 0 · Recht 0 · DNQP 0 · Konsistenz 0) · exit 0
- `pflege-anti-pattern-check.ts ce-06` → 0 Funde
- `step-grounding-check.ts ce-06` → ls-capstone-am-boden: claim-tragend **9** · gegroundet **9** · dangling **0**
- `standards-currency-check.ts ce-06 --include-plans` → 0 Treffer
- `zitat-verifizierer.ts` → reanimation-bls **19/19**, neurologische-akutsituationen **23/23** verifiziert (inkl. beide neuen Zitate)

---

## Re-Prüfung der 2025-Ergänzungen

### (1) Tab 1 `erk-01b` — Karotispuls-Halbsatz (Lens 1/3/5)

**Wortlaut:** „(Erfahrenes Fachpersonal darf zeitgleich zur Atemkontrolle höchstens 10 Sekunden den Karotispuls tasten — aber ohne Zeit zu verlieren; im Zweifel sofort drücken.)" — eingebettet in den Satz „Reagiert er nicht UND atmet er nicht normal … Rettungskette, sofort Herzdruckmassage".

| Prüffrage | Ergebnis | Beleg / Begründung |
|---|---|---|
| Fachlich korrekt? | **OK** | Deckt sich mit `reanimation-bls` F-03/2025: „Ausreichend erfahrenes Fachpersonal soll die Pulskontrolle an der A. carotis zeitgleich mit der Atemkontrolle durchführen (höchstens 10 Sekunden)". Verbatim I care Pflege 2025 „soll zeitgleich mit der Atemkontrolle eine Pulskontrolle an der Arteria carotis durchführen" + „max. 10 Sekunden … Karotispuls" (zitat-verifizierer ✅) |
| Konsistent mit Wagner-Fix? | **OK** | Identische Formulierung/Logik wie in `ls-wagner-reanimation` — „erfahrenes Fachpersonal", „zeitgleich", „≤10 s", „im Zweifel sofort drücken". Keine Divergenz zwischen den beiden Situationen |
| **Keine CPR-Verzögerung?** | **OK — kritischer Punkt bestanden** | Der Puls-Check ist syntaktisch UND fachlich der Herzdruckmassage untergeordnet: „**zeitgleich** zur Atemkontrolle" (nicht zusätzlich/sequenziell), „ohne Zeit zu verlieren", „**im Zweifel sofort drücken**". Als Parenthese für „erfahrenes Fachpersonal" markiert — für die Lernenden bleibt der Handlungsimperativ „sofort Herzdruckmassage". Entspricht ERC/GRC: keine reanimationsverzögernde Pulskontrolle |

### (2) Fall 3 `erm-03` — „unverzüglich Arzt; ab >5 Min Status epilepticus" (Lens 1/3/5)

**Wortlaut (Korrekt-Option):** „… merke mir die Uhrzeit — und rufe **unverzüglich den Arzt**; dauert der Anfall länger als 5 Minuten, ist es ein Status epilepticus."

| Prüffrage | Ergebnis | Beleg / Begründung |
|---|---|---|
| Fachlich korrekt? | **OK** | „unverzüglich Arzt rufen" verbatim in `neuro` F-11 (I care Pflege 2025). Die >5-Minuten-Schwelle für den Status epilepticus ist die aktuelle operationale Definition (verbatim Krankheitslehre „Dauert der Anfall länger als 5 Minuten, handelt es sich um einen [Status epilepticus]"). Beide zitat-verifiziert ✅ |
| Konsistent / echte Verbesserung? | **OK** | Ersetzt das frühere unpräzise „Arzt holen, besonders wenn länger" durch die korrekte Doppelaussage: (a) Arzt **immer unverzüglich** informieren, (b) >5 Min = lebensbedrohlicher Status. Fachlich schärfer und aktueller |
| Widerspruch / keine Falschzahl? | **kein Widerspruch** | Kein Konflikt mit den „nichts in den Mund / nicht festhalten / Zeit stoppen"-Aussagen. Explanation (Z.498) trägt dieselbe Linie (Status = sehr lang / Serie ohne Erholung) |

**Semantisches Urteil beider Ergänzungen:** korrekte, gut abgesicherte Präzisierungen. Kein HOCH/MITTEL-Befund.

---

## Lens 1 — Arzneimittel-/Zahlen-Sicherheit ✅
| Aspekt | Ergebnis | Beleg |
|---|---|---|
| BZ 108 mg/dl als „normal" | OK | Hypoglykämie-Schwelle < 50 mg/dl (neuro verbatim); 108 im Normbereich → schließt Hypoglykämie korrekt aus |
| BZ 108 durchgängig | OK | Identisch in Kontext, Kontext-B1 und SBAR-Musterlösung |
| „≤10 Sekunden" Karotispuls (NEU) | OK | Keine erfundene Schwelle — verbatim aus F-03/2025 |
| „>5 Minuten" Status epilepticus (NEU) | OK | Korrekte operationale Definition, verbatim gegroundet |
| Keine erfundene Dosis/Volumen | OK | Traubenzucker nur als (korrekt widerlegter) Distraktor |

## Lens 2 — Recht & Ethik / Currency ✅
`standards-currency-check`: **0** Funde. Capstone enthält keine FeM-/Betreuungsrechts-Claims — n/a wie erwartet.

## Lens 3 — DNQP-/Standard-Konformität (Grounding) ✅
`step-grounding-check`: **PASS** — alle zitierten `kernfaktId` existieren, keine Dangling-/Missing-Refs. Der im Auftrag kritische HKS/Schnappatmung-Ast (Tab 1) und der „nichts in den Mund"-Ast (Tab 2) sind vollständig abgedeckt (themenSekundaer + Wiederbegegnung + eigene Phase-3-Fälle). Beide 2025-Zusätze (Karotispuls, unverzüglich-Arzt) sind verbatim gegroundet — siehe Re-Prüfungs-Sektion.

## Lens 4 — Konsistenz (Patient-Daten / Cross-Step) ✅
stepId-Eindeutigkeit (10 unique IDs), patientId (`pat-petrova-kollaps` nur Petrova, 3 Fremdfälle als „ein anderer Bewohner" markiert), Petrova-Stammdaten (68/w/Synkope/Hypertonie), BZ 108 / Verlauf — alle konsistent. „erst Blutzucker"-Regel in erm-01 korrekt auf laufenden Kreislauf eingeschränkt (kein Widerspruch zum Stillstand-Ast).

## Lens 5 — Semantisch (pflege-validator) ✅
Distraktor-vs-Empfehlung sauber: Zuckerwasser/Traubenzucker, Reanimation trotz Reaktion, Schnappatmung→SSL, „erst Blutzucker" beim Stillstand, Beißkeil/Festhalten, Schlaganfall-Alarm auf Verdacht, Synkope-Bagatellisierung — **alle nur als korrektiv aufgelöste Distraktoren**. Interleaving-Algorithmus fachlich korrekt (Erstblick → drei Wege; Kreislauf da → erst Blutzucker; Leitzeichen Synkope/Apoplex/Krampfanfall/Delir getrennt).

---

## N1 — NIEDRIG (informativ, unverändert aus Erst-Prüfung)
`erk-02b` (Tab 2) Spektrum-Zeile „Erregt/verwirrt, evtl. Fieber → an Delir denken": fachlich korrekt + verbatim gegroundet in `psychische-akutsituationen.md` F-01/F-08, aber nicht so lückenlos im Datenmodell nachverfolgbar wie die anderen Differentiale (`themenSekundaer` listet nur `["notfallassessment"]`, kein dedizierter Phase-3-Fall). Traceability-Hinweis, kein Faktenfehler. **Fix (optional):** `themenSekundaer` um `"psychische-akutsituationen"` erweitern (Metadaten, kein Step-Code).

## N2 — NIEDRIG (NEU, informativ — Wortlaut-Harmonisierung Krampfanfall)
Nach der `erm-03`-Präzisierung („unverzüglich den Arzt rufen") tragen die vorgelagerte **Tab-2-Spektrumzeile** (Z.252) und zwei Distraktor-Feedbacks (Z.514/516) weiterhin die ältere, schwächere Formulierung „bei langem Anfall Arzt". **Kein Widerspruch im Handeln** (beide lenken zum Arzt; erm-03 ist präziser/aktueller). **Fix (optional, Gründerin-Entscheid):** Tab-2-Spektrum + Feedbacks an „unverzüglich Arzt; bei >5 Min Status" angleichen, damit Wissens-Tab und Anwendungs-Step denselben aktuellen Stand (I care 2025 / F-11) sprechen. Rein sprachlich, kein Faktenfehler.

---

## Beschaffung
Keine offenen Belege — alle Aussagen (inkl. beider 2025-Ergänzungen) sind durch bestehende, verbatim verifizierte Kernfakten gedeckt (notfallassessment · reanimation-bls F-03/2025 · neurologische-akutsituationen F-11/2025 · psychische-akutsituationen). Kein neuer Kernfakt, keine externe Quelle zu beschaffen.

## Fazit
**PASS.** Beide 2025-Ergänzungen sind korrekt, verbatim gegroundet und konsistent (Karotispuls zum Wagner-Fix, unverzüglich-Arzt zu F-11). Die Karotispuls-Zeile führt keine CPR-Verzögerung ein. Zwei nicht-blockierende NIEDRIG-Anmerkungen (N1 Delir-Traceability, N2 Krampfanfall-Wortlaut-Harmonisierung) für den Gründerin-Backstop.
