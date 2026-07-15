# CE-06 Autonom — Fortschritts-Log

> Pro Einheit: gebaut / Gates-Status / offene Findings. Neueste oben.

## LE1 · Wagner (Template) — 2026-07-12
**Status:** mechanisch fertig, semantische Gates laufen.
- 17 Steps, 5 Wissens-Tabs (29 % Korridor), jeder Tab hat Anwendung (Variante D).
- Wissens-Tabs: HKS erkennen · Rettungskette · No-Flow · ALS · KPR/Recht-Ethik.
- Neue Anwendungen: ALS-Rolle (III.2) · Fall Kellner (V.2, KPR-Gegenfall) · Notfallplan-Analyse (III.2, K5).
- Kernfakten neu: `kpr-indikation-recht-ethik.md` (F-01..05, verbatim ✓), reanimation-bls F-12/F-13 (✓).
- KB-Marker korrigiert → Wagner deckt I.4, II.1, III.2, V.2 (4/5 LE1-Schwerpunkte) nachweisbar.
- Gates: tsc ✅ · Abstandstest 0 ✅ · zitat-verifizierer ✅ · step-grounding ✅ (0 Findings).
- **klinik-panel ✅ PASS** (0 HOCH, kein K.O.; alle 4 Lenses + semantisch grün). Report:
  `content/ce-06/klinik-panel-wagner-report.md`. 1 optionale Beobachtung (NIEDRIG, kein Fehler) →
  in `FRAGEN-GRUENDERIN.md` geparkt (AED-Analyse-Pause in erm-02).
- **pflege-validator ✅ PASS** (0 HOCH, 0 MITTEL, 5 NIEDRIG). Report: `content/ce-06/pflege-review-wagner.md`.
  4 NIEDRIG **gefixt** (alle Gates danach grün): F-01 „Rettungskette" + „(auch Überlebenskette)" gleichgesetzt
  (Tab+Glossar); F-02 „häufigster Auslöser" → „häufigster Rhythmus" (Kammerflimmern ist ein Rhythmus);
  F-04 ALS-Distraktor auf „eigenmächtige Medikamentengabe" zugespitzt (venöser Zugang ist delegierbar);
  F-05 doppeltes `themenSekundaer` in ALS+KPR entfernt.
  1 NIEDRIG **by-design, NICHT gefixt** (F-03): Validator wollte „Pflege heute" als sichtbare Primärquelle
  ergänzen — das VERLETZT die Urheberrecht-Regel (keine Lehrbuch-Namen sichtbar). Sichtbar bleibt korrekt
  „ERC 2021" (der Standard); Pflege heute bleibt intern in den Kernfakten. → **Lehre:** Validator-Vorschläge
  gegen die höheren Projektregeln prüfen.
- ✅ **Wagner-DoD KOMPLETT.** tsc · Abstand 0 · zitat-verifizierer · step-grounding · klinik-panel ·
  pflege-validator — alle grün. Template steht.

## LE1 · Ríos → Neuro-Differenzial — 2026-07-13
**Status:** content-complete, semantische Gates laufen.
- Ausgang: 8 Steps, 0 Wissens-Tabs, II.1-Wand. Jetzt: **12 Steps, 2 Wissens-Tabs (17 %)**.
- **Neue Kernfakten** in `neurologische-akutsituationen.md`: F-08 (Schlaganfall-Leitsymptome),
  F-09 (time is brain + Erstmaßnahmen), F-10 (Grand-mal-Ablauf), F-11 (Anfall-Erste-Hilfe: schützen,
  NICHTS in den Mund, kein Beißkeil), F-12 (Status epilepticus), F-13 (Differenzial). **Alle 6 verbatim ✅.**
- **Neue Steps:** Hypoglykämie-Tab (P1, vor Anwendung) · Neuro-Differenzial-Tab (die Krone: Synkope/
  Hypo/Apoplex/Krampfanfall unterscheiden, **Wiederbegegnung zu Wagner** „Kreislauf da vs. Stillstand")
  · Apoplex-Transfer-MC (F-08/09) · Krampfanfall-Transfer-MC (F-10/11/12). → **K3-Lücke (Apoplex +
  Krampfanfall) gefüllt.**
- **KB-Marker korrigiert:** II.1-Wand → I.4(8)/II.1(2)/III.2(1)/V.2(1) = **4/5 LE1-Schwerpunkte**.
- Gates: tsc ✅ · Abstandstest 0 ✅ · zitat-verifizierer ✅ · step-grounding ✅ (0 Findings).
- **Korridor 17 %** (knapp unter 20–30): bewusst so gelassen — Ríos ist mit 10 dichten Anwendungs-Steps
  application-heavy (Leitfaden „Verteilung > Verhältnis"; Memory: Situationen reichen 6–40 %). Kein Defekt.
- **klinik-panel ✅ PASS** (0 HOCH; 19/19 Neuro-Belege verifiziert; alle Lenses grün; Wiederbegegnung
  zu Wagner korrekt verlinkt). 1 NIEDRIG-Info (N1) → geparkt in `FRAGEN-GRUENDERIN.md`: Status-epilepticus
  ILAE-2015-Schwelle ≥5 Min braucht erst einen Beleg (nicht erfunden; „~10–15 Min" bleibt belegt stehen).
- **pflege-validator ✅ PASS** (0 HOCH, 0 MITTEL, 4 NIEDRIG). Report: `content/ce-06/pflege-review-rios.md`.
  3 NIEDRIG **gefixt** (Gates danach grün): F-01 Synkope-Karte um „Ursache klären, kardiale Synkope
  gefährlich" ergänzt; F-02 erm-03-B1 Seitenlage nicht mehr konditional (Ríos ist bewusstseinsgetrübt →
  Seitenlage indiziert); F-03 Dialyse-Realismus (Dialyse erst geordnet unterbrechen für sichere Lagerung).
  1 NIEDRIG **geparkt** (F-04 = ILAE-5-Min, s. FRAGEN-GRUENDERIN, braucht Beleg).
- ✅ **Ríos-DoD KOMPLETT.** tsc · Abstand 0 · Zitat · Grounding · klinik-panel · pflege-validator — alle grün.

## LE1 · Lehmann (Sturz/SHT, K1 Trauma) — 2026-07-13
**Status:** content-complete, semantische Gates laufen (klinik-panel + pflege-validator).
- Ausgang: 8 Steps, **0 Wissens-Tabs**, KB-Wand II.1/I.1/I.2 (kein I.4-Primär, kein V.2). Jetzt: **11 Steps, 3 Wissens-Tabs (27 %)**.
- **3 neue Wissens-Tabs** (Gold-Standard-Aufbau, jeder VOR seiner Anwendung, kein Antwort-Step):
  - Tab A `erk-01b-bewusstlos-check` (F-01/02/03/04): Bewusstsein prüfen (ansprechen+anfassen), Lage nicht verändern
    bei WS-Verdacht, en bloc, SHT→Hirnblutung. **Wiederbegegnung zu Wagner** („Kreislauf da → NICHT bewegen"
    vs. „Stillstand → reanimieren + Lage verändern"). Anwendung: erk-02 (Antikoagulation).
  - Tab B `erm-00b-blutstillung` (F-06/F-07): Licht voll an für Inspektion (Anti-Pattern korrektiv), sterile
    Kompresse/Druckverband, kein punktueller Druck über Knochenstufe, Wärmeerhalt. Anwendung: erm-01.
  - Tab C `erm-02b-fem-bettgitter` (F-08): beidseitige Bettgitter = FeM (§ 1831 BGB, Fassung ab 2023),
    Genehmigung Betreuungsgericht, akute Gefahr kurzfristig zulässig, einseitig = keine FeM. Productive-Failure-
    Schleife nach erm-02 (Bettgitter als Falsch-Option) → Tab C → erm-03. Anwendung: erm-03.
- **KB-Marker korrigiert:** II.1-Wand → **I.4 (primär, 5×)** · II.1 (2×) · I.2 (2×) · I.1 (1×) · **V.2 (1×, ref-01 = E1)**.
  Deckt I.4/II.1/V.2 aus dem LE1-Set nachweisbar (parallel zu Wagner/Ríos, 4/5-Spread). III.2/II.3 haben
  ihr Zuhause bei Wagner/Ríos (Team-Koordination) — hier nicht künstlich erzwungen (reversibler Default).
- **Glossar:** 10 neue Begriffe ergänzt (Bewusstseinsprüfung, Wirbelsäulenverdacht, SHT, en bloc, sterile
  Kompresse, Druckverband, Wärmeerhalt, freiheitsentziehende Maßnahme, Betreuungsgericht, Fixierung).
- Gates: **tsc ✅** · **step-grounding ✅** (Lehmann 10 claim-tragend / 10 gegroundet, 0 dangling) ·
  **Abstandstest ✅** gegen urheberrechtlich geschützte Quellen (Pflege heute): **0 Treffer**. Verbleibende
  8 5-Gramm-Treffer = **wörtlicher Gesetzestext § 1831 BGB** (amtliches Werk, gemeinfrei § 5 UrhG; der
  Rechtssatz muss exakt bleiben; identisch zum bereits ausgelieferten erm-03).
- **klinik-panel ✅ PASS** (0 HOCH). Report: `content/ce-06/klinik-panel-lehmann-report.md`. Alle 4 deterministischen
  Lenses grün (Apixaban=Wirkstoff korrekt, keine erfundenen Dosen; § 1831 aktuell; 10/10 gegroundet; konsistent) +
  semantisch (Anti-Patterns nur als Falsch-Optionen, korrektiv). **1 NIEDRIG (L5-SEM-01) GEFIXT** — nicht geparkt:
  Der Zusatz „kein punktueller Druck über Knochenstufe/Schädelbruch" in Tab B hatte keinen Verbatim-Korpusbeleg
  (Korpus hat nur die klinische Impressionsfraktur-Therapie, keinen Erste-Hilfe-Satz). Per Leitplanke „nicht
  erfinden → kürzen": Tab B auf das F-06-Gegroundete umgefasst (Kopfwunde = sterile Kompresse + leichter Druck;
  Druckverband für starke Blutungen an Extremitäten). Identische Aussage in erm-01-explanation mit-entschärft.
  tsc/Abstand/Grounding danach erneut grün.
- **pflege-validator ✅ PASS** (0 HOCH, 1 MITTEL, 2 NIEDRIG). Report: `content/ce-06/pflege-review-lehmann.md`.
  Alle mechanischen Gates grün (zitat 12/12, step-grounding, anti-pattern 0, currency 0, faktentreue 100 %).
  **Alle 3 Findings GEFIXT:** F-01 (MITTEL) = derselbe „kein-Druck-über-Knochenstufe"-Claim → bereits grounding-
  konform gekürzt (s.o.). F-02 (NIEDRIG) = zweite truefalse-Karte in erm-03 ergänzt („einseitiges/niedriges Gitter,
  Patient kann selbst raus = keine genehmigungspflichtige FeM", folgt aus F-08). F-03 (NIEDRIG) = „Validation" war
  im Glossar/erm-02 versprochen, aber nicht gelehrt → validierender Kern in korrekter erm-02-Option ergänzt (Angst
  ernst nehmen, Mutter-Frage nicht korrigieren) + Glossar-Einträge „Validation"/„Deeskalation" nachgetragen.
- Nach den Fixes erneut **alle Gates grün**: tsc ✅ · step-grounding ✅ (10/10) · Abstand ✅ (nur § 1831-Gesetzestext) ·
  anti-pattern 0 · currency 0.
- ✅ **Lehmann-DoD KOMPLETT.** tsc · Abstand 0 (urheberrechtl. Quellen) · Zitat · Grounding · klinik-panel ·
  pflege-validator — alle grün, alle Findings gefixt. K1-Trauma-Wissen hat jetzt sein Zuhause.

## LE1 · Novak (psychotische Erregung, K4) — 2026-07-13
**Status:** content-complete, semantische Gates laufen (klinik-panel + pflege-validator).
- Ausgang: 8 Steps, **0 Wissens-Tabs**, KB-Schlagseite I.1/I.2 (kein I.4-Primär, kein V.2). Jetzt: **11 Steps, 3 Tabs (27 %)**.
- **3 neue Wissens-Tabs** (Gold-Standard, jeder vor/bei seiner Anwendung, kein Antwort-Step):
  - Tab A `erk-01b-eigenschutz-deeskalation` (F-08/F-02/F-03): Eigenschutz (Abstand/Stand/Fluchtweg/notfalls raus)
    + Deeskalationsgrundhaltung (allein statt mit mehreren, reizarm, Kollegen im Hintergrund). Anwendung: ala-01/erm-01.
  - Tab B `erk-02b-organisch` (F-01): Erregung ≠ automatisch Psychose — Fieberdelir/Hypoxie/Hypoglykämie
    ausschließen, diagnostic overshadowing. **Wiederbegegnung→Ríos** („erst Körper, dann Psyche" = dieselbe Logik
    wie „erst Blutzucker"). Anwendung: ueb-01 (SBAR nennt organische Spur) + ref-01.
  - Tab C `erm-01b-zwang-recht` (F-04/05/06/07): Fixierung letzte Stufe, Zwang legitimiert/Mindestmaß/im Team,
    Rechtsgrundlage (Zustimmung/Gefahr im Verzug/richterlich, § 1831 BGB somatisch vs. PsychKG psychiatrisch),
    Sedierung=ärztlich. Anwendung: erm-02.
- **KB-Marker korrigiert:** I.1-Wand → **I.4 (primär, 4×)** · I.1 (2×) · I.2 (2×) · **II.1 (1×, SBAR)** · **V.2 (1×, ref=E1)**.
  Deckt I.4/II.1/V.2 aus dem LE1-Set nachweisbar (4/5-Spread wie Wagner/Ríos/Lehmann).
- **Glossar:** +7 Begriffe (Eigenschutz, Fluchtweg, Delir, Fieberdelir, diagnostic overshadowing, Gefahr im Verzug, PsychKG).
- Gates: **tsc ✅** · **step-grounding ✅** (Novak 9/9, 0 dangling) · **Abstandstest ✅ = 0 Treffer** (diesmal komplett
  paraphrasiert, auch die Pflege-heute-Rechtsprosa umformuliert — keine Gesetzestext-Ausnahme nötig) ·
  anti-pattern 0 · currency 0.
- **klinik-panel ✅ PASS** (0 HOCH). Report: `content/ce-06/klinik-panel-novak-report.md`. 15/15 Belege verifiziert,
  § 1831 aktuell, PsychKG-vs-Betreuungsrecht korrekt, Ríos-Wiederbegegnung verifiziert, Leitplanke „Erregung ≠
  automatisch Psychose" durchgehalten. 2 NIEDRIG **non-blocking/kein Fehler** (SpO2-Nähe = plausible Inferenz;
  Alter erst in SBAR = kosmetisch) → belassen.
- **pflege-validator ✅ PASS** (0 HOCH, 0 MITTEL, 3 NIEDRIG). Report: `content/ce-06/pflege-review-novak.md`.
  **F-01 GEFIXT** (Sicherheits-Präzisierung Tab B: organisches Assessment nicht beliebig aufschiebbar → bei hoher
  körperlicher Gefahr ohne Zögern Arzt dazu). **F-02** (§ 1831 setzt Betreuung voraus) = vom Validator selbst als
  „vertretbar, F-06-gegroundet, operativ korrekt" eingestuft → belassen (Tab C lehrt allgemein + Gefahr-im-Verzug,
  behauptet keinen Betreuer). **F-03** = Fehlalarm: `kernfaktId:["F-07"]` an ueb-01 löst über themaPrimaer
  „notfallassessment" auf SBAR/Leonard auf (nicht Sedierung), exakt wie Wagner → korrekt.
- Nach dem Fix erneut **alle Gates grün**: tsc ✅ · step-grounding ✅ (9/9) · **Abstand 0** · anti-pattern 0 · currency 0.
- ✅ **Novak-DoD KOMPLETT.** tsc · Abstand 0 · Zitat (15/15) · Grounding · klinik-panel · pflege-validator — alle
  grün, alle echten Findings gefixt. K4-Wissen (Deeskalation/Eigenschutz, organischer Ausschluss, Zwang/Recht) hat sein Zuhause.

## LE1 · NEU: Sander (thermisch/chemische Notfälle, K1-Rest) — 2026-07-13
**Status:** content-complete (NEUBAU, nicht Redesign), semantische Gates laufen.
- **Neue Situation** `ls-sander-verbruehung`: Frau Sander, 74, Verbrühung 2. Grades (kochendes Wasser),
  ambulanter Pflegebesuch. Füllt die K1-Rest-Lücke (Hitze/Verbrennung/Verätzung/Kälte). Neue Dateien:
  patient.ts · phases.ts (5 Phasen, 12 Steps, 3 Tabs) · index.ts · registriert in `situationen.ts` (10. Situation).
- **Neue Kernfakten** `specs/ce-06/kernfakten/thermisch-chemische-notfaelle.md` (F-01..F-13, **32/32 Belege
  verbatim ✅** via zitat-verifizierer, Pflege heute Kap. 14.6.4/14.6.5 + 5.3/5.4/5.5).
- **3 Wissens-Tabs:** Tab A Schwere (Grade/Fläche-Handfläche/Schmerz-kein-Maßstab, F-01/02/03) · Tab B Kühlen
  richtig + Hausmittel-Falle (lauwarmes Wasser ~20 °C/~10 Min, keine Salben/Mehl/Butter, Blasen nicht öffnen,
  festklebende Kleidung nicht abreißen, F-04/05; **Wiederbegegnung→Lehmann** „sterile Auflage, nichts draufschmieren")
  · Tab C **Krone** (interleavt Verätzung Haut+Mund, Hitzschlag, Hypothermie, F-08..F-13; wie Ríos-Neuro-Differenzial).
- **2 Transfer-Anwendungen** (Variante D zu Tab C): Mund-Verätzung (NIE Erbrechen, F-09) + Unterkühlung
  (keine heiße Wärmflasche, F-13). 5 Anti-Patterns bewusst nur als Falsch-Optionen (Hausmittel/Blasen/Eis/Erbrechen/Wärmflasche).
- **KB-Marker:** I.4 (primär, Akut-Handeln, 9×) · II.1 (SBAR) · V.2 (Reflexion=E1). Korridor 3/12 = 25 %.
- **Glossar:** +8 Begriffe (Verbrühung, Verbrennungsgrad, Brandblase, Neuner-Regel, Volumenmangelschock,
  Verätzung, Hitzschlag, Hypothermie).
- Gates: **tsc ✅** · **zitat-verifizierer ✅** (32/32) · **step-grounding ✅** (Sander 11/11) · **Abstand 0 ✅**
  (voll paraphrasiert) · anti-pattern 0 · currency 0.
- **klinik-panel ✅ PASS** (0 HOCH/MITTEL, 3 NIEDRIG). Report: `content/ce-06/klinik-panel-sander-report.md`.
  Die 10-%-Zahl sauber getrennt (Schock F-03 vs. Klinik F-06). **N2 GEFIXT** (Kühl-Zurückhaltung „alte Menschen"
  war Extrapolation → auf F-04-belegtes „große Flächen + Kinder" getrimmt). N1/N3 non-blocking belassen
  (ärztlich-abklären ≠ Klinikpflicht; Giftnotruf/Intensiv = Standard, Intensiv sogar gegroundet).
- **pflege-validator ✅ PASS** (0 HOCH, 1 MITTEL, 4 NIEDRIG). Report: `content/ce-06/pflege-review-sander.md`.
  **F-01 (MITTEL) GEFIXT**: ala-01 verallgemeinerte „2. Grad → ärztlich"; Begründung reframed — formale F-06-Schwellen
  (>10 % / Gesicht-Hände) vs. Einzelfall-Beurteilung sauber getrennt, nichts erfunden. **2 NIEDRIG GEFIXT**:
  truefalse-Karte 2 → wahre Positiv-Aussage (durchbricht Alle-falsch-Muster); „stark"→„deutlich" unterkühlt (32 °C).
  Restliche NIEDRIG (Triage-Stufe, Sandwich-Feinschliff Distraktoren) optional/template-konform belassen.
- Nach den Fixes erneut **alle Gates grün**: tsc ✅ · step-grounding ✅ (11/11) · **Abstand 0** · anti-pattern 0 · currency 0.
- ✅ **Sander-DoD KOMPLETT.** Neubau + neue Kernfakten (32/32) · alle harten + semantischen Gates grün, alle
  echten Findings gefixt. K1-Rest (Hitze/Verbrennung/Verätzung/Kälte) hat sein Zuhause. **10. CE-06-Situation.**

## LE1 · NEU: Differenzierungs-Capstone — 2026-07-13
**Status:** content-complete (NEUBAU, Retrieval-Capstone), semantische Gates laufen.
- **Neue Situation** `ls-capstone-am-boden` („Jemand liegt am Boden — was ist es?"): Frau Petrova, 68 (Synkope) als
  roter Faden + interleavte Fremdfälle. **KEIN neuer Kernfakt** — reines Retrieval über LE1 (verzahnt K2/K3/K4/E1).
  Nutzt notfallassessment (F-01 ABCDE, F-03 SSL, F-07 SBAR) + reanimation-bls + neurologische-akutsituationen.
  11. CE-06-Situation, registriert in `situationen.ts`.
- **2 Synthese-Tabs:** „Der erste Blick: Kreislauf da oder nicht?" (notfallassessment F-01/F-03; 3 Wege
  reanimieren/SSL/differenzieren; **Wiederbegegnung→Wagner**) · „Kreislauf da — erst Blutzucker, dann unterscheiden"
  (neuro F-01/08/10/13; Synkope/Apoplex/Krampfanfall/Delir; **Wiederbegegnung→Ríos**).
- **Retrieval-Kern (Phase 3):** drei interleavte „liegt am Boden"-Fälle mit je anderer Reaktion — HKS (Schnappatmung
  →reanimieren, reanimation-bls F-01/02/04) · Apoplex (einseitig+bleibend→112, neuro F-08/09) · Krampfanfall
  (Zuckungen→schützen/nichts in den Mund, neuro F-10/11). Grounding sauber pro Fall über eigene themaPrimaer.
- **Didaktik:** der universelle Algorithmus (erst-Blick → erst-Blutzucker → Leitzeichen) macht das ganze LE1-Wissen
  zu EINER abrufbaren Routine. Bewusst application-heavy (2 Tabs/11 Steps = 18 %) — Capstone by-design (wie Ríos).
- **KB-Marker:** I.4 (primär) · II.1 (SBAR) · V.2 (Reflexion=E1). Glossar +4 (Ersteinschätzung, ABCDE, Apoplex, stabile Seitenlage).
- Gates: **tsc ✅** · **step-grounding ✅** (9/9) · **Abstand 0 ✅** · anti-pattern 0 · currency 0.
- **klinik-panel ✅ PASS** (0 HOCH/MITTEL, 1 NIEDRIG). Report: `content/ce-06/klinik-panel-capstone-report.md`.
  Algorithmus fachlich bestätigt; HKS-Ast via themenSekundaer+Wiederbegegnung+dediziertem Fall sauber gegroundet.
  N1 (Delir-Traceability) **gefixt**.
- **pflege-validator ✅ PASS** (0 HOCH, 1 MITTEL, 4 NIEDRIG). Report: `content/ce-06/pflege-review-capstone.md`.
  **Gefixt:** MITTEL F-02 (Delir-Zeile: themenSekundaer `psychische-akutsituationen` + Novak-Cross-Ref im Text) ·
  NIEDRIG F-03 (erk-02 zitierte fälschlich F-01/Synkope-Def → korrigiert auf **F-04** „erst Blutzucker") ·
  NIEDRIG F-04 (ala-01 F-13 → **F-01/F-02/F-06** passgenau: Synkope-Def/kardial/Lagerung) · Tab 2 um F-04 ergänzt.
  F-05 (erm-03 „wenige Minuten") belassen — bewusst konservativ (Hilfe früh holen), Status-Schwelle nicht falsch behauptet.
- Nach den Fixes erneut **alle Gates grün**: tsc ✅ · step-grounding ✅ (9/9) · **Abstand 0** · anti-pattern 0 · currency 0.
- ✅ **Capstone-DoD KOMPLETT.** Retrieval-Neubau ohne neuen Kernfakt, alle Gates + beide Agenten grün, Findings gefixt.
  **11. CE-06-Situation.**

## 🎉 LE1 KOMPLETT (2026-07-13)
6 Situationen decken das ganze LE1-Set nachweisbar:
- **Wagner** (Reanimation/HKS, W1+K2+E1) · **Ríos** (Neuro-Differenzial, K3) · **Lehmann** (Sturz/SHT, K1-Trauma) ·
  **Novak** (psychot. Erregung, K4) · **Sander** (thermisch/chemisch, K1-Rest) · **Capstone** (interleavt K2/K3/K4).
- Alle mit Gold-Standard-Wissens-Tabs, KB aus dem LE1-Schwerpunkt-Set (I.4 primär), beide Validatoren PASS.
- Wiederbegegnungs-Netz gespannt: Wagner↔Ríos↔Lehmann↔Sander↔Capstone (Kreislauf-Check, erst-Blutzucker, Wärmeerhalt).

## LE2 · Yıldız (Herzinfarkt/ACS) — Redesign — 2026-07-13
**Status:** content-complete (Redesign, kein neuer Kernfakt), semantische Gates laufen.
- Ausgang: 8 Steps, **0 Wissens-Tabs**, KB-Wand II.1. Jetzt: **11 Steps, 3 Tabs (27 %)**.
- **3 neue Wissens-Tabs** (Kernfakten F-01..F-08 waren schon da, F-08 Angst/Coping jetzt erstmals genutzt):
  - Tab A `erk-01b-acs-falle` (F-01/F-02): ACS vs. Angina, „das kenne ich schon"-Falle, ausbleibende Nitrat/Ruhe-Besserung.
  - Tab C `ala-00b-team-zeit` (F-03/F-06/F-08, **LE2-Primär III.2**): Zeit ist Herzmuskel, sofort Arzt+2. Pflegekraft,
    Kompetenzgrenze (O2/Nitro/Analgetika nur Arztanordnung), Angst/Coping.
  - Tab B `erm-00b-lagern` (F-04/F-05/F-07): Oberkörper hoch (nicht Schocklage), Bettruhe, Monitoring, Grenze RR<90 & Puls>100.
- **KB-Marker korrigiert (LE2-Set, Primär III.2):** II.1-Wand → **III.2 (3×: ala-01, Tab C, erm-02)** · I.4 (erk/lagern/schock, 5×) ·
  II.1 (SBAR) · V.2 (Reflexion). III.2 (interprofessionell) ist der LE2-Primär und jetzt prominent vertreten.
- **Glossar:** +11 Begriffe (Angina pectoris, akutes Koronarsyndrom, Nitrat, Oberkörperhochlagerung, absolute Bettruhe,
  kardiogener Schock, Pulsoximetrie, Zeit ist Herzmuskel, Herzkatheter, Arztanordnung, +kardiale Synkope aus Capstone).
- Gates: **tsc ✅** · **step-grounding ✅** (Yıldız 10/10) · **Abstand 0 ✅** (F-02-Verbatim „bis zum Beweis des
  Gegenteils" paraphrasiert) · anti-pattern 0 · currency 0.
- **klinik-panel ✅ PASS** (0 HOCH, 1 MITTEL). Report: `content/ce-06/klinik-panel-yildiz-report.md`. Zahlen/Kompetenz/
  Konsistenz/Semantik grün; MITTEL = „Zeit ist Herzmuskel/Herzkatheter" ungegroundet.
- **pflege-validator ✅ PASS** (0 HOCH, 2 MITTEL, 2 NIEDRIG). Report: `content/ce-06/pflege-review-yildiz.md`.
- **Beide MITTEL grounding-konform GELÖST (beschafft, nicht gekürzt) — 2 neue Kernfakten (verbatim ✅):**
  - **F-09** „Zeit ist Herzmuskel"/Reperfusion (I-care Krankheitslehre: „frühzeitige Revaskularisationstherapie",
    „möglichst schnell in eine Klinik", „verschlossene Koronargefäß durch eine Ballondilatation") → an Tab C + ala-01.
  - **F-10** atypisch/stumm bei Diabetikern & Frauen (I-care: „Bei Patienten mit Diabetes mellitus kann ein Infarkt
    auch stumm verlaufen", „Frauen geben oftmals atypische Symptome an") → an Tab A (kerntext erweitert) + erk-01 + ref-01.
  - 2 NIEDRIG belassen: Nitro-senkt-RR-bei-Hypotonie (pharmakolog. herleitbar F-01/F-07); SBAR-Anker F-07 (=Leonard, konsistent).
- Nach den Fixes erneut **alle Gates grün**: tsc ✅ · zitat ✅ (F-09/F-10) · step-grounding ✅ (10/10) · **Abstand 0** ·
  anti-pattern 0 · currency 0.
- ✅ **Yıldız-DoD KOMPLETT.** Redesign + 2 beschaffte Kernfakten, alle Gates + beide Agenten grün, alle Findings gelöst.
  **Lehre:** Reperfusion/PCI + Diabetiker-atypisch sind in I-care Krankheitslehre (nicht Pflege heute) — Cross-Quellen prüfen.

## LE2 · Gruber (hypovolämischer Schock, obere GI-Blutung) — Redesign — 2026-07-13
**Status:** ✅ DoD KOMPLETT (Redesign, kein neuer Kernfakt — F-01..F-14 waren schon verbatim-belegt).
- Ausgang: 12 Steps, **0 Wissens-Tabs**, II.1-Wand (11×) + I.1/I.2. Jetzt: **15 Steps, 3 Tabs (20 %)**.
- **3 neue Wissens-Tabs** (Gold-Standard, jeder VOR seiner Anwendung, kein Antwort-Step):
  - Tab A `erk-01b-schock-verstehen` (F-08/F-05/F-02/F-03, KB I.4): Herz als Pumpe/HZV, hypovolämischer Schock +
    Zentralisation, **4 Schockformen** (Spektrum), Leitsymptome/Schockindex. **Wiederbegegnung→Yıldız** (kardiogen).
  - Tab C `ala-00b-team-grenze` (F-04/F-06/F-12, **KB III.2 = LE2-Primär**): Arzt+2. Pflegekraft, Kompetenzgrenze
    (Volumen/Katecholamine/Perfusor/Laufrate nur Arztanordnung), Angehörige (Renate). **Wiederbegegnung→Yıldız.**
  - Tab B `erm-00b-lagern-falle` (F-06/F-04, KB I.4): Autotransfusionslage — **ABER Ausnahme obere GI-Blutung/Kopf/
    Lunge** (Aspiration, nüchtern). Der „richtig klingende" Beine-hoch-Reflex ist hier falsch. **Wiederbegegnung→Yıldız.**
- **KB-Marker korrigiert (LE2-Set, Primär III.2):** II.1-Wand → **III.2 (3×: Tab C, ala-01, erm-04)** · I.4 (Akut-Handeln,
  viele) · II.1 (SBAR ueb-01) · V.2 (Reflexion ref-01, war fälschlich I.2 = nicht im Set) · I.1 (Coping ref-02).
  Deckt **III.2/I.4/I.1/II.1/V.2 = 5/6** des LE2-Sets nachweisbar (nur II.3 hat sein Zuhause anderswo).
- **Glossar:** +16 Begriffe (hypovolämischer Schock, Zentralisation, Schockindex, Herzzeitvolumen, Katecholamine,
  Perfusor, Autotransfusionslage, obere GI-Blutung, Aspiration, ZVK, SBAR, Venenverweilkanüle, Kreuzblut, Sinusknoten,
  Reizleitungssystem, Hypokaliämie, Coping) — schließt CE-06-weite Lücken (ZVK/SBAR fehlten überall).
- Gates: **tsc ✅** · **Abstand 0 ✅** (11 icare/pflege-heute-Überlappungen in Tab A/B/C paraphrasiert) ·
  **step-grounding ✅** (Gruber 14/14 claim-tragend, 0 dangling) · anti-pattern 0 · currency 0.
- **klinik-panel ✅ PASS** (0 HOCH/MITTEL, 1 NIEDRIG). Report: `content/ce-06/klinik-panel-gruber-report.md`. Alle 4
  deterministischen Lenses + semantisch grün; Autotransfusions-Falle korrekt/konsistent (Tab B→erm-01→pflegewagen→branching).
  **N1 GEFIXT** (nicht geparkt): erm-06 nannte „Konzentrationen über 40 mmol/l nur über ZVK" — die Zahl ist NICHT im
  Korpus verifizierbar (Korpus-„über 40" = nur „40 °C" Fieber) → per Leitplanke generalisiert zu „höher konzentrierte
  Lösungen nur über ZVK" (F-10-gegroundet). Grounded Aussage bleibt.
- **pflege-validator ✅ PASS** (0 HOCH, 0 MITTEL, 4 NIEDRIG). Report: `content/ce-06/pflege-review-gruber.md`.
  **F-01 GEFIXT**: erm-01 Distraktor 3 „zum Aufstehen bewegen" (Karikatur) → „ganz steil aufrecht hinsetzen"
  (plausibel-falsch: verschlechtert bei RR-Abfall die Hirndurchblutung), Feedback nachgezogen. **F-04 GEFIXT**: fehlende
  Glossar-Kernbegriffe nachgetragen (s. o.). F-02 (SBAR-Längentell) template-konform belassen (wie Wagner/Ríos/Yıldız —
  die vollständige SBAR-Antwort IST länger). F-03 (Alternativlagerung „Oberkörper leicht erhöht") = Standard-Inferenz,
  fachlich korrekt, keine Korrektur nötig.
- Nach den Fixes erneut **alle Gates grün**: tsc ✅ · step-grounding ✅ (14/14) · **Abstand 0** · anti-pattern 0 · currency 0.
- ✅ **Gruber-DoD KOMPLETT.** Redesign ohne neuen Kernfakt; alle harten + semantischen Gates grün, alle Findings gefixt.
  Schock-Wissen (4 Formen, Zentralisation, Autotransfusions-Falle, Team/Kompetenzgrenze) hat sein Zuhause. **LE2 komplett** (Yıldız + Gruber).

## LE3 · Kortmann (akutes Abdomen / Kolostoma & Drainagen) — Redesign — 2026-07-13
**Status:** ✅ DoD KOMPLETT (Redesign, kein neuer Kernfakt — F-01..F-17 waren schon verbatim-belegt).
- Ausgang: 13 Steps, **0 Wissens-Tabs**, II.1-Wand (10×) + I.1 (3×). Jetzt: **16 Steps, 3 Tabs (19 %)**.
- **3 neue Wissens-Tabs** (Gold-Standard, jeder VOR seiner Anwendung, kein Antwort-Step):
  - Tab A `erk-02b-stoma-verstehen` (F-10/F-11/F-12, KB I.4): Kolostoma (Dickdarm/links/breiig-fest/Hartmann temporär)
    vs. Ileostoma (Dünndarm/rechts/dünnflüssig ~1 L/aggressiv → Nippel + Hautschutzplatte gegen Mazeration).
  - Tab B `ala-00b-drainagen-verstehen` (F-07/F-08/F-09, KB I.4): Drainage leitet Sekret/Blut/Eiter ab + Frühwarnung;
    Redon = Saugdrainage subkutan; Bauchhöhlendrainage OHNE Sog (schädigt Darm); geschlossenes System + aseptisch.
  - Tab C `erm-00b-team-grenze` (F-06/F-13, **KB III.2 = LE3-Primär**): >200 ml/1 h → sofort Arzt; Drainage NICHT
    eigenmächtig ziehen; Stoma-Verfärbung beurteilt der Arzt; nüchtern für Re-OP; Volumen nach Anordnung. **Wiederbegegnung→Gruber.**
- **KB-Marker korrigiert (LE3-Set, Primär III.2):** II.1-Wand → **III.2 (3×: Tab C, ala-02, erm-01)** · I.4 (Akutes Abdomen/
  Stoma/Drainagen/Überwachung/Schock, viele) · II.1 (SBAR ueb-01) · V.2 (Reflexion ref-01) · I.1 (Patientenedukation ref-02).
  Deckt **III.2/I.4/I.1/II.1/V.2 = 5/6** des LE3-Sets nachweisbar (nur II.3 anderswo).
- **Glossar:** +10 Begriffe (Kolostoma, Ileostoma, Hautschutzplatte, Drainage, Redon-Drainage, aseptisch, Nachblutung,
  Kompetenzgrenze, nüchtern).
- **Code-Fix (KORT-SEM-01, MITTEL):** Situation-Player mappte nur `frau-m-nacht-sturz` + `ls-wagner-reanimation` aufs
  Glossar → **alle anderen CE-06-Situationen bekamen `glossar={[]}`** (C1-Tooltips tot). Alle 11 CE-06-Situationen jetzt
  auf `CE06_GLOSSAR` gemappt (`src/app/[locale]/lernen/situation/[situationId]/page.tsx`) — macht die gesamte
  CE-06-Glossar-Arbeit (auch LE1/LE2) erst funktional.
- Gates: **tsc ✅** · **Abstand 0 ✅** · **step-grounding ✅** (Kortmann 15/15, 0 dangling) · anti-pattern 0 · currency 0 ·
  **zitat-verifizierer ✅** (F-01..F-17).
- **klinik-panel ✅ PASS** (0 HOCH). Report: `content/ce-06/klinik-panel-kortmann-report.md`. Alle deterministischen Lenses grün;
  Dramaturgie/Stoma-Farblogik/Sog-Verbot/Kompetenzgrenze konsistent. MITTEL = KORT-SEM-01 (Glossar-Wiring, **gefixt** s. o.).
  2 NIEDRIG (viszeral-Schmerz „dumpf"/B1-Kreuzblut-Glosse) = korrektes Standardwissen an vorbestehenden Steps, belassen.
- **pflege-validator ✅ PASS** (0 HOCH, 0 MITTEL, 4 NIEDRIG). Report: `content/ce-06/pflege-review-kortmann.md`.
  **F-01 GEFIXT** (Tab B „niemals einen kräftigen Sog" → „niemals Sog", konsistent zu F-07). **F-04 GEFIXT** (SBAR-Distraktor 2
  entkarikiert). **F-02/F-03 bewusst NICHT gefixt** (Grounding-Konflikt): Validator wollte Schock-Lagerung bzw. Wärme-
  Vasodilatation als Zusatz-Claims — beides NICHT in Kortmanns Kernfakten belegt; Lagerung bei Bauchblutung ist zudem
  nuanciert (vgl. Gruber-Autotransfusions-Ausnahme). Bestehende Begründungen sind korrekt/grounded. → **Lehre:** NIEDRIG-
  Kosmetik weicht der Grounding-Disziplin (wie Wagner-F-03-Präzedenz).
- ✅ **Kortmann-DoD KOMPLETT.** Alle harten + semantischen Gates grün, echte Findings gefixt, Glossar-Wiring repariert.

## LE4 · Radtke (Brand/MANV/Triage/Krisenintervention) — Redesign — 2026-07-13
**Status:** ✅ DoD KOMPLETT (Redesign, kein neuer Kernfakt — F-01..F-12 waren schon verbatim-belegt).
- Ausgang: 9 Steps, **0 Wissens-Tabs**, II.1-Wand (6×) + I.1/I.2. Jetzt: **12 Steps, 3 Tabs (25 %)**.
- **3 neue Wissens-Tabs** (Gold-Standard, jeder VOR seiner Anwendung, kein Antwort-Step):
  - Tab A `ala-00b-manv` (F-01/F-02/F-08/F-04/F-09, **KB I.4 = LE4-Primär**): MANV/Katastrophe-Definition, Leitprinzip
    „für möglichst viele das Beste" (sichten vor Einzelhilfe), Notfallplan der eigenen Einrichtung, Eigenschutz.
  - Tab B `erm-00b-sichtung` (F-06/F-07/F-08, KB I.4): ABCDE-Ersteinschätzung + Sichtungskategorien SK I rot/II gelb/
    III grün/IV blau (palliativ)/schwarz (tot); nach Dringlichkeit, nicht Lautstärke.
  - Tab C `ueb-00b-psych-erste-hilfe` (F-10/F-11, **KB III.2**): psychische Erste Hilfe (abschirmen, Augenhöhe, Namen+
    Funktion) + keine Auskunft an Dritte (nur Einsatzleitung) + KIT/Notfallseelsorge.
- **KB-Marker korrigiert (LE4-Set, Primär I.4):** II.1-Wand + I.2 → **I.4 (primär: Tabs A/B, erk-01/02, ala-01, erm-01/02/03)** ·
  III.2 (Tab C) · II.1 (ueb-01 Krisenkommunikation) · V.2 (ref-01/02 Reflexion/Supervision; I.2 war NICHT im Set).
  Deckt **I.4/III.2/II.1/V.2 = 4/5** des LE4-Sets nachweisbar (II.3 anderswo).
- **Glossar:** +10 Begriffe (Massenanfall (MANV), Katastrophe, Großschadensereignis, Triage, Sichtungskategorie,
  psychische Erste Hilfe, Krisenintervention, KIT, Einsatzleitung, Notfallplan).
- Gates: **tsc ✅** · **Abstand 0 ✅** · **step-grounding ✅** (Radtke 12/12) · anti-pattern 0 · currency 0 · zitat 28/28 · faktentreue 100 %.
- **klinik-panel ✅ PASS** (0 HOCH/MITTEL/NIEDRIG deterministisch). Report: `content/ce-06/klinik-panel-radtke-report.md`.
  Alle Leitplanken korrekt; SK-Kategorien Tab B↔pflegewagen konsistent. 4 non-blocking Notizen (Schwerhörigkeit erst in
  Tab C/ueb-01 narrativ eingeführt aber in patient.ts etabliert; Branching-Längen-Tell; B1-Gleichsetzung Katastrophe/
  Großschaden; Feuerwehr-löscht-vs-Kleiderbrand) — vorbestehend/deckungsgleich, belassen.
- **pflege-validator ✅ PASS** (0 HOCH, 0 MITTEL, 5 NIEDRIG). Report: `content/ce-06/pflege-review-radtke.md`.
  **F-01 GEFIXT** (erk-02 Feuerlöscher-Distraktor „empfindlichste Haut" → realistischer Panik-Reflex). **F-02 GEFIXT**
  (Tab C: „mit Namen und der eigenen Funktion vorstellen" — F-10-vollständig, paraphrasiert). **F-03 GEFIXT** (Tab B
  Spektrum-Karte SK IV blau/schwarz getrennt beschriftet: blau=lebend/palliativ vs. schwarz=tot). F-04 (MC-Sandwich-Auftakt)
  = challenge-Konvention, belassen. F-05 (Verbrennung-SK-II Grenzfall) = ausdrücklich kein Fehler, belassen.
- ✅ **Radtke-DoD KOMPLETT.** Alle harten + semantischen Gates grün, echte Findings gefixt. **LE4 komplett** (1 Situation deckt LE4).

## LE5 · Erlemann (Organspende & Hirntod) — Redesign — 2026-07-13
**Status:** ✅ DoD KOMPLETT (Redesign, kein neuer Kernfakt — F-01..F-09 waren schon verbatim-belegt).
- Ausgang: 8 Steps, **0 Wissens-Tabs**, II.1-Wand (5×) + I.1/I.2 (3×). Jetzt: **11 Steps, 3 Tabs (27 %)**.
- **3 neue Wissens-Tabs** (Gold-Standard, jeder VOR seiner Anwendung, kein Antwort-Step):
  - Tab A `erk-00b-hirntod-verstehen` (F-01/F-02, KB II.3): Gesamthirntod = irreversibler Ausfall aller Hirnfunktionen
    (der warme Körper täuscht); TPG definiert NICHT den Tod, verlangt Hirntod nur als Mindestbedingung.
  - Tab B `ala-00b-feststellung-recht` (F-04/F-03/F-05, **KB III.2**): zwei unabhängige, erfahrene Ärzte (ohne
    Transplantationsbezug) + Wartezeit; **ENTSCHEIDUNGSLÖSUNG** (niemand automatisch Spender, nur mit Einwilligung +
    festgestelltem Hirntod; ohne eigene Entscheidung Angehörige nach mutmaßlichem Willen); Pflege gibt nichts frei.
  - Tab C `erm-00b-begleiten` (F-03/F-09, **KB I.4 = LE5-Primär**): Würde des hirntoten Menschen, Abschied ermöglichen,
    Pflege begleitet und drängt NICHT; Aufklärungs-/Entscheidungsgespräch führen Arzt + Transplantationsbeauftragte.
- **KB-Marker korrigiert (LE5-Set, Primär I.4):** II.1-Wand + I.1/I.2 → **I.4 (Tab C, erm-02 Begleitung)** · II.1 (ueb-01
  Angehörigen-Kommunikation) · II.3 (Tab A, erk-01, erm-01, erm-03, ref-02 Recht/Ethik-Wissen) · III.2 (Tab B, ala-01
  Feststellung) · V.2 (ref-01 Reflexion). Deckt **I.4/II.1/II.3/III.2/V.2 = 5/5** des LE5-Sets nachweisbar (erstes 5/5!).
  Bringt zugleich **II.3** erstmals nachweisbar in CE-06 ein.
- **Glossar:** +8 Begriffe (Gesamthirntod, Transplantationsgesetz, Entscheidungslösung, mutmaßlicher Wille,
  Transplantationsbeauftragte, Lebendspende, postmortale Spende, Organmangel).
- Gates: **tsc ✅** · **Abstand 0 ✅** (F-04-Verbatim „langjährige Erfahrung in der Intensivmedizin" paraphrasiert) ·
  **step-grounding ✅** (Erlemann 10/10) · anti-pattern 0 · currency 0 · zitat 28/28 · faktentreue STRICT.
- **klinik-panel ✅ PASS** (0 HOCH/MITTEL, 2 NIEDRIG). Report: `content/ce-06/klinik-panel-erlemann-report.md`.
  Recht-&-Ethik-Lens bestanden: Entscheidungslösung durchgehend korrekt, Widerspruchslösung NUR als widerlegter
  Distraktor; E1/E2 wertneutral. N1 (Organspende-Register seit 03/2024 nicht erwähnt) → geparkt in FRAGEN-GRUENDERIN
  (Currency, kein Fehler). N2 (Zähl-Diskrepanz 9 vs. 8 Glossar) = kosmetisch, 8 ist korrekt.
- **pflege-validator ✅ PASS** (0 HOCH, 0 MITTEL, 2 NIEDRIG, beide „kein Fix nötig"). Report: `content/ce-06/pflege-review-erlemann.md`.
  F-01 (BÄK-Richtlinie will beide Ärzte erfahren vs. Quelle „wenigstens einer") → geparkt in FRAGEN-GRUENDERIN
  (grounding-konform belassen, BÄK-Beleg beschaffen). F-02 (ueb-01-Distraktor 3 leicht überzeichnet) = score-0-lizenziert, belassen.
- ✅ **Erlemann-DoD KOMPLETT.** Alle harten + semantischen Gates grün; keine Pflicht-Fixes; 2 Currency-Punkte sauber geparkt. **LE5 komplett.**

## 🎉🎉 CE-06 REDESIGN KOMPLETT (2026-07-13)
**Alle 11 Situationen auf Gold-Standard-Wissens-Tabs + LE-Schwerpunkt-KB umgestellt.** LE1 (6 Situationen) + LE2 (Yıldız,
Gruber) + LE3 (Kortmann) + LE4 (Radtke) + LE5 (Erlemann). Pro Situation: 2–5 Wissens-Tabs (jeder mit Anwendung, kein
Antwort-Step), KB aus dem jeweiligen LE-Schwerpunkt-Set (Primär prominent), beide Validatoren PASS, alle echten Findings
gefixt, jede Situation Abstand 0 (nur Lehmanns § 1831-Gesetzestext legitim), step-grounding CE-weit 0 Findings.
- **Code-Fix:** Situation-Player-Glossar-Wiring — alle 11 CE-06-Situationen jetzt auf `CE06_GLOSSAR` (vorher nur 2) →
  ~90 Glossar-Einträge werden erst jetzt CE-weit als C1-Tooltips gerendert.
- **Wiederbegegnungs-Netz:** Gruber↔Yıldız (Schockformen/Lagerung), Kortmann↔Gruber (Blutung/Kompetenzgrenze),
  Novak↔Ríos, Wagner↔Ríos↔Lehmann↔Sander↔Capstone (LE1).
- **Geparkt (Gründerin, kein Blocker):** ILAE-5-Min-Status (Ríos), BÄK-Hirntod-Richtlinie + Organspende-Register (Erlemann),
  AED-Analyse-Pause (Wagner) — alle in FRAGEN-GRUENDERIN, jeweils grounded-konforme Fassung steht.
- **LE1 KB-Set-Bereinigung (2026-07-13, nach dem Redesign):** Lehmann + Novak hatten je 2× I.1 + 2× I.2 aus früheren
  DoDs, die NICHT im LE1-Set {I.4·II.1·II.3·III.2·V.2} sind. Sauber remappt: Deeskalation/validierende Ansprache/SBAR →
  **II.1**, FeM/Zwang/§ 1831-Recht → **II.3**. Ergebnis CE-weit: **kein I.2 mehr; I.1 nur noch bei Gruber/Kortmann
  (in-set, LE2/LE3 enthält I.1)**. Jeder Step-Marker aller 11 Situationen stammt jetzt aus dem jeweiligen LE-Set. tsc ✅
  (Metadaten-Änderung, Grounding/Abstand unberührt). KB-Gesamt: I.4=78 · III.2=17 · II.1=17 · V.2=14 · II.3=9 · I.1=2.
- **Offen vor Live:** B1-Varianten/Übersetzungen der neuen Tabs (End-Durchgang), Deploy carovia.de, Coverage-Tiefe-Recheck
  mit neuen Tabs (Bloom-2-Tabs additiv, kein Regress erwartet).

## Currency-Update (4 Punkte) — Dozentin-Freigabe + Web-Recherche + Korpus-Abgleich — 2026-07-13
**Status:** ✅ ALLE 4 umgesetzt, alle Validatoren PASS. Dozentin (= Gründerin) hat „passt so" freigegeben; Recherche nur
amtlich/wissenschaftlich (ILAE, BÄK/DSO, BfArM/BMG, ERC), danach Abgleich mit vorhandenem Korpus. **Korpus-Stand
bestätigt: I care Pflege 2. Aufl. (2020), Krankheitslehre/Anatomie 1. Aufl. — KEINE 3. Auflage.**
- **1 · Status epilepticus (Ríos):** „~10–15 Min" → **„länger als 5 Minuten"**. Korpus-Abgleich ergab echten Widerspruch
  (Pflege heute 10–15 vs. I care Krankheitslehre >5 / I care Pflege 5–10); ILAE 2015 bestätigt 5 Min. **F-12 verbatim auf
  I care Krankheitslehre gegroundet** („Dauert der Anfall länger als 5 Minuten…") + ILAE sichtbar. Krampfanfall-MC (C1+B1).
- **2 · Hirntod-Feststellung (Erlemann):** „wenigstens einer erfahren" (Pflege heute, ungenau) → **„zwei qualifizierte
  Ärzte, beide intensiverfahren, mind. einer Neuro"**. **F-04 verbatim auf I care Pflege** („2 dafür qualifizierte Ärzte…")
  + BÄK-Richtlinie IHA (§ 16 TPG) als sichtbare Primärquelle. Tab B + ala-01 (Option+Erklärung C1/B1) + Faustregel/Spektrum/Karteikarte.
- **3 · Organspende-Register (Erlemann):** **Neuer Kernfakt F-10** (Register seit 18.03.2024, BfArM — zusätzlicher Weg,
  Entscheidungslösung unverändert). Einziger rein externer Punkt (Buch 2020 kennt es nicht). Tab B + Faustregel + Karteikarte.
- **4 · AED-Analyse-Pause (Wagner):** **Neuer Kernfakt F-14** (AED-Anweisungen folgen; bei Analyse UND Schock nicht
  berühren). Verbatim I care Pflege („Bildanweisungen des AED gefolgt werden") + ERC 2021. Kurze Zeile in erm-02-Branching;
  „Alle weg!"-vor-Schock-Logik unverändert (Panel: verstärkt sie sogar).
- Gates: **tsc ✅** · **zitat-verifizierer ✅** (organspende 30/30, neuro 20/20, reanimation 17/17) · **Abstand 0** (alle 3) ·
  **step-grounding ✅** (F-10/F-14 resolven) · anti-pattern 0 · currency 0 · faktentreue gedeckt.
- **Re-Validierung (alle PASS):** pflege-validator Erlemann PASS (0 HOCH/MITTEL; F-01-„wenigstens einer" RESOLVED) ·
  klinik-panel Ríos+Wagner PASS (0 Befunde) · klinik-panel Erlemann PASS (0 HOCH). **M1 (MITTEL) GEFIXT:** BÄK-„5.
  Fortschreibung" war nicht korpus-eindeutig (Korpus: 4./2015, DSO: 5.) → Fassungsnummer entfernt, nur „§ 16 TPG" zitiert.
  **N1 GEFIXT:** ala-01-B1 „Neurologie oder Neurochirurgie". N2 (Glossar-Zählung) = kosmetisch, kein Fehler.
- ✅ **DoD KOMPLETT.** Alle 4 Currency-Punkte grounded-konform umgesetzt, drei davon sogar korpus-intern (1/2/4), nur der
  Register-Punkt (3) rein extern via BfArM. FRAGEN-GRUENDERIN.md: alle Punkte von „geparkt" → „erledigt".
- **Offen (Gründerin, optional):** aktuell gültige BÄK-IHA-Fassung bestätigen + ggf. `standards-currency.json`-Eintrag
  (deterministisches Fassungs-Drift-Fangen). 3. I-care-Auflage einspielen, falls verfügbar (dann re-groundbar aus ihrer Ausgabe).

## Werkzeug: festes Abstandstest-Skript (2026-07-13)
`scripts/abstand-ce06-situation.ts <situationId> | --all` — löst die Wegwerf-Skripte ab. Prüft die Wissens-Tab-Prosa
gegen **3 Korpora** (pflege-heute + **icare-krankheitslehre + icare-pflege** — die Wegwerf-Skripte prüften NUR
pflege-heute!). `--all` gibt CE-weiten Überblick. Gesetzestext-Treffer (§, gemeinfrei) sind legitim → manuell prüfen.

### Nachputz-Liste — ✅ ERLEDIGT (2026-07-13)
Alle 8 icare-Überlappungen umformuliert (Wagner 1 · Ríos 2 · Sander 4; Faustregel Ríos zusätzlich).
`--all` jetzt durchgehend **ABSTAND 0** — einzig Lehmann zeigt die 5 bekannten **§ 1831-Gesetzestext**-Treffer
(amtliches Werk, gemeinfrei § 5 UrhG, bleibt bewusst wörtlich). tsc ✅ nach dem Putz.

## Als Nächstes (Reihenfolge s. AUTONOM-PLAN.md)
- [x] Wagner-DoD komplett. ✅ **TEMPLATE STEHT.**
- [x] Ríos → Neuro-Differenzial **DoD KOMPLETT** (K3-Lücke gefüllt, alle Gates grün).
- [x] Lehmann: KB-Marker + 3 Wissens-Tabs (K1 Trauma) **DoD KOMPLETT** (alle Gates grün, alle Findings gefixt).
- [x] Novak: KB-Marker + 3 Wissens-Tabs (K4 psychotische Erregung) **DoD KOMPLETT** (alle Gates grün, Findings gefixt).
- [x] Thermisch/chemische Notfälle (NEU: `ls-sander-verbruehung`, K1-Rest) **DoD KOMPLETT** — Neubau + 13 Kernfakten
      (32/32 verbatim), 3 Tabs inkl. Spektrum-Krone, beide Agenten PASS, alle Findings gefixt.
- [x] Differenzierungs-Capstone (NEU: `ls-capstone-am-boden`, interleavt K2/K3/K4) **DoD KOMPLETT** — Retrieval-Neubau
      ohne neuen Kernfakt, 2 Synthese-Tabs, beide Agenten PASS, Findings gefixt. **→ LE1 KOMPLETT.**
- [x] **LE2 · Yıldız** (Herzinfarkt/ACS) Redesign **DoD KOMPLETT** — 3 Tabs, KB auf LE2-Set (III.2 primär), F-09/F-10
      beschafft, beide Agenten PASS.
- [x] **LE2 · Gruber** (hypovoläm. Schock) Redesign **DoD KOMPLETT** — 3 Tabs (III.2 primär), KB auf LE2-Set (5/6),
      +16 Glossar, beide Agenten PASS, alle Findings gefixt. **→ LE2 KOMPLETT.**
- [x] **LE3 · Kortmann** (Abdomen/Stoma) Redesign **DoD KOMPLETT** — 3 Tabs (III.2 primär), KB 5/6, +10 Glossar,
      beide Agenten PASS, + Glossar-Wiring-Code-Fix (CE-weit).
- [x] **LE4 · Radtke** (Brand/Triage/Krise) Redesign **DoD KOMPLETT** — 3 Tabs (I.4 primär), KB 4/5, +10 Glossar, beide Agenten PASS.
- [x] **LE5 · Erlemann** (Organspende/Hirntod) Redesign **DoD KOMPLETT** — 3 Tabs (I.4 primär), **KB 5/5**, +8 Glossar,
      Recht/Ethik-Lens bestanden, beide Agenten PASS.
- [x] **🎉 CE-06 REDESIGN KOMPLETT** — alle 11 Situationen auf Wissens-Tabs + LE-Schwerpunkt-KB. Siehe Block oben.
- [ ] **Nächste CEs:** dieselbe Redesign-Pipeline auf CE-02 (bereits gebaut, v1-Stil) + neue CEs anwenden. Erst B1/Übersetzungen + Deploy CE-06.

## Arabisch-Demo-Pfad (Sahne-Pilot, 2026-07-15)
**B1 committet** (`1ae9dd5`, nach Dozentin-Freigabe): 11 phases.ts + Schema + Gates + specs/B1-SPRACHPROFIL.md +
4 pflege-review-b1-Artefakte. Lint-Nachputz: 4 `any`-Errors in den neuen B1-Scripts durch echte Typen ersetzt.

**Arabisch (Glossar-First, KEINE Voll-Übersetzung):**
- `content/ce-06/glossar.ts`: **alle 102 `uebersetzungAr` befüllt** — MSA-Fachtermini (wie in arabischsprachiger
  Medizin-/Pflegeausbildung), kontextgeprüft gegen die deutsche `erklaerung` (z. B. Aspiration = استنشاق/Einatmen,
  Verbrühung = سَمْط, Hitzschlag = ضربة الحرّ ≠ Sonnenstich). Deutsche Rechtsbegriffe (PsychKG, Betreuungsgericht,
  Entscheidungslösung) als erklärende Übersetzung mit Klammer-Zusatz. Adversarialer Zweitcheck durch Review-Agent.
- **Lücke gefunden + geschlossen:** Der Situation-Player (Demo-Pfad!) hatte `sprachLevel="c1"` hartkodiert und
  KEINEN Muttersprache-Einstieg — B1-Content und AR-Übersetzungen waren dort unerreichbar. Neu:
  `src/components/learn/sprache-sheet.tsx` (Bottom-Sheet, beide Sprach-Achsen: Niveau C1/B1 + Muttersprache)
  + Languages-Button im Player-Header + localStorage-Persistenz (`pflege-sprachlevel`) + `useMutterspracheInit()`.
  Damit greift die AR-Sprachbrücke in ALLEN 11 Situationen (zentrales Glossar), Wagner inklusive.
- Test: `tests/components/sprache-sheet.test.tsx` (4 Tests, u. a. AR-Auswahl → Store).
- Geparkt in FRAGEN-GRUENDERIN: 2. Demo-Situation (Vorschlag Ríos) + AR-Muttersprachler-Gegenlese.
