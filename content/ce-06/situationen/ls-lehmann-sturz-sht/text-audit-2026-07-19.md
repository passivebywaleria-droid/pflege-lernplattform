# Text-Audit: ls-lehmann-sturz-sht (CE-06)

**Geprüft:** 2026-07-19
**Auftrag:** Voll-Audit ALLER Texte (Gründerin, „jeden Text in jedem Schritt")
**Files:** phases.ts (5 Phasen, 11 Steps) + patient.ts + situationen.ts-Eintrag
**Step-Anzahl:** 11 (erkennen 3, alarmieren 1, erstmassnahmen 5, uebergeben 1, reflektieren 1);
davon 6 MC, 3 inlineWissen, 1 branching, 1 truefalse, 1 reflection
**Linsen:** (1) Halbwissen/Scope, (2) fachliche Korrektheit vs. Literatur, (3) B1-Drift, (4) Konsistenz

---

## Grounding-Verifikation (Literatur)

Die Kernfakten `specs/ce-06/kernfakten/traumatologische-erstversorgung.md` (F-01…F-08) sind
verbatim aus `recherche/pflege-heute-volltext/pflege-heute.txt` und `leitlinien-volltext/bgb-1831.txt`
belegt. Gegenprobe in `recherche/icare-pflege-3aufl-volltext/icare-pflege-3aufl.txt`:
Die Erste-Hilfe-/Notfall-Erstversorgung ist in der I-care-Pflege-3.-Aufl. NICHT der Schwerpunkt
(en-bloc dort nur im postoperativen Mobilisations-Kontext, Z. 133970/133993). Der Content ist
korrekt gegen Pflege heute Kap. 14/37.13 + BGB § 1831 gegroundet — I care ist hier nicht die
tragende Quelle, widerspricht dem Content aber auch nicht.

Zentrale Handlungsanweisungen fachlich korrekt und belegt:
- Lage bei Wirbelsäulenverdacht nicht verändern (F-01) — korrekt.
- Bewusstsein: ansprechen UND anfassen, Schwerhörigkeit täuscht (F-03) — korrekt.
- SHT unter Antikoagulans → Gefahr (verzögerter) intrakranieller Blutung → Klinik/CT (F-04/F-05) — korrekt.
- sterile Kompresse + leichter Druck (Kopfwunde) vs. Druckverband (starke Blutung) (F-06) — korrekt,
  bei V. a. Schädelfraktur ist der bewusst gewählte „leichte Druck" die sichere Variante.
- Wärmeerhalt/zudecken (F-07) — korrekt.
- beidseitige Bettgitter = FeM, nur mit Genehmigung Betreuungsgericht, § 1831 BGB Fassung ab 2023 (F-08) — korrekt,
  Currency aktuell (keine §§ 1906/1906a).

---

## Findings

### erstmassnahmen (Phase 3) — F-01

#### F-01 (MITTEL): Vigilanz-Kontrolle wird als Warnzeichen behauptet, aber nie als Handlung gelehrt
- **Stelle:** phases.ts:133/135 (kerntext/kerntextB1 Tab A) + :44 (Kernfakt F-04); Handlungslücke in Phase erstmassnahmen (:315–650)
- **Problem (Scope/Halbwissen):** Der Text sagt mehrfach „eine Verschlechterung des Bewusstseins ist das
  wichtigste Warnzeichen" (kerntext) bzw. „Das wichtigste Warnzeichen ist: Ihr Bewusstsein wird schlechter" (B1).
  In der Erstmaßnahmen-Phase lernt der Schüler jedoch nur Wundversorgung/Licht/Wärme (erm-01) und Deeskalation
  (erm-02). Es fehlt eine Anweisung, bis zum Eintreffen des Rettungsdienstes Bewusstsein und Atmung engmaschig
  zu kontrollieren und Veränderungen zu melden. Der Schüler kann die Szene komplett lösen (versorgen → übergeben),
  ohne die im Audit-Auftrag ausdrücklich genannte „Vigilanz-Kontrolle" als Kernaufgabe zu verinnerlichen.
- **Standard-Verweis:** Pflege heute Kap. 14.6/37.13.1 — Überwachung des Verletzten, Bewusstseinsverlauf als
  Leitparameter beim SHT; gerade unter Antikoagulation (verzögerte Blutung) ist die laufende Beobachtung
  bis zur Klinik die eigentliche pflegerische Kernleistung im Wartefenster.
- **Empfehlung:** In der erstmassnahmen-Phase einen kurzen Schritt/Baustein ergänzen ODER die richtige Option
  in erm-01/erm-02 erweitern: „bis der Rettungsdienst kommt, Bewusstsein und Atmung engmaschig kontrollieren,
  jede Veränderung dokumentieren und dem Rettungsdienst melden." Damit wird das behauptete Warnzeichen in eine
  Handlung überführt.

### erkennen (Phase 1) — F-02

#### F-02 (NIEDRIG): Interne Wort-Inkonsistenz bei der Bewusstseinsprüfung (berühren vs. rütteln)
- **Stelle:** phases.ts:69 (erk-01, richtige Option) „leicht an der Schulter berühren" vs. :133/:135
  (erk-01b kerntext/kerntextB1) „leichtes Rütteln an den Schultern"
- **Problem:** Beide Formulierungen sind fachlich vertretbar (Standard-Bewusstseinsprüfung nach F-03 =
  leichtes Rütteln an den Schultern), aber der Wechsel „berühren" ↔ „rütteln" innerhalb derselben Situation
  kann den Schüler verunsichern, welche Aktion gemeint ist.
- **Standard-Verweis:** Kernfakt F-03 (Pflege heute Kap. 14.6.1) — „angesprochen und angefasst (leichtes
  Rütteln an den Schultern)".
- **Empfehlung:** Einheitlich formulieren, z. B. „ansprechen und leicht an den Schultern rütteln".

### uebergeben (Phase 4) — F-03

#### F-03 (NIEDRIG): kernfaktId-Mismatch am SBAR-Step (Metadata, kein Textfeld)
- **Stelle:** phases.ts:676 (ueb-01) `kernfaktId: ["F-07"]`
- **Problem:** F-07 ist „Wärmeerhalt/zudecken" — inhaltlich unpassend für eine SBAR-Übergabe. Die Quelle des
  Steps ist korrekt (`Leonard et al. 2004 (SBAR)`), aber das Grounding-Tag verweist auf einen sachfremden Fakt.
- **Empfehlung:** Auf einen SBAR-/notfallassessment-Fakt zeigen lassen oder das Tag entfernen. Liegt außerhalb
  des strengen Textfeld-Scopes, der Vollständigkeit halber gemeldet (relevant für step-grounding-check).

---

## Cross-Step-Probleme / Konsistenz

Keine. Patient-Daten über alle 5 Phasen konsistent:
- Alter 86 (patient.ts:10; SBAR ueb-01 „86").
- Kopfplatzwunde rechte Stirn (patient.ts:21 „rechten Stirn"; erkennen kontext:34; SBAR „Kopfplatzwunde rechts").
- Apixaban / Vorhofflimmern / orales Antikoagulans (patient.ts:16; erk-02; ala-01; SBAR) — Wirkstoff, kein Markenname.
- Osteoporose (patient.ts:15; branching-Feedback erm-02:504/512).
- mittelschwere vaskuläre Demenz (patient.ts:14; durchgängig).
- drei Stürze in sechs Monaten (patient.ts:17; SBAR „dritter Sturz in sechs Monaten"; reflektieren:730).
- Nachtdienst 2 Kräfte / 48 Bewohner, 02:45 (patient.ts:19; erkennen:34; reflektieren:730).
- Tochter Gudrun, Vorsorgevollmacht (patient.ts:21; erm-02b:558; reflektieren:762/766).

## B1-Drift

Keiner. B1-Felder sind fachlich identisch zu C1, ergänzen nur Begriffserklärungen (z. B. „Antikoagulans =
Blutverdünner", „en bloc = eine Einheit", „FeM", „Betreuungsgericht", „Vorsorgevollmacht"). Keine
Verkürzung, die eine kritische Bedingung weglässt.

## False-Positive-Disziplin

Alle Distraktoren/Score-0-Optionen (hochheben, Rufen aus Distanz, Bagatellisieren „ist ja nichts passiert",
unter den Achseln greifen, beidseitige Bettgitter, „wird schon nichts sein") sind korrekt als FALSCH markiert
und mit fachlich richtigem explanation/feedback korrektiv gelehrt. Keine Beanstandung.

## Zusammenfassung

- **0 Findings HOCH**
- **1 Finding MITTEL** (F-01: Vigilanz-Kontrolle nicht als Handlung operationalisiert)
- **2 Findings NIEDRIG** (F-02: berühren/rütteln-Inkonsistenz; F-03: kernfaktId-Mismatch SBAR)
- Geprüft: 11 Steps / alle C1- und B1-Textfelder (kontext, body, fragetext, options text/explanation/feedback/
  patientResponse, transition, storyAufhaenger, kerntext, faustregel, spektrum, karteikarte, wiederbegegnung,
  reflection) + patient.ts + situationen.ts-Eintrag.
- Kein B1-Drift, keine Konsistenzbrüche, Currency korrekt (§ 1831 BGB ab 2023).
- **K.O.-Verdikt: PASS** (kein HOCH offen). F-01 (Scope-Lücke Vigilanz-Kontrolle) ist eine empfohlene
  Ergänzung vor Live-Deploy, kein fachlicher Fehler.

## Fix-Status (2026-07-19, Haupt-Session)
- F-01 ✅ erm-01 richtige Option lehrt jetzt die Handlung: engmaschige Bewusstseins-/Atmungskontrolle bis Rettungsdienst, dokumentieren + melden (C1+B1) — Warnzeichen in Handlung überführt.
- F-02 ✅ erk-01 einheitlich „ansprechen UND leicht an den Schultern rütteln" (Kernfakt-F-03-Wortlaut).
- F-03 ❌ FALSE POSITIVE: ueb-01 hat themaPrimaer "notfallassessment" → F-07 = SBAR (notfallassessment.md), Mapping korrekt. Kein Fix.
