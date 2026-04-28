# Pflege-Review (Plan): ls-nguyen-stoma

**Geprueft:** 2026-04-26
**Modus:** plan (retrospektive Doppelpruefung — Code-Review bereits PASS)
**Files:** 8 (patient-plan, baustein-trigger, 6 Phasen-Plaene)
**Step-Anzahl Plan:** 32 Kern + ~14 Optional ueber 6 Phasen

---

## Findings

### Phase 3 — `plan-02-stoma-versorgungsplan` (sequencing)

#### F-01 (HOCH): Hautschutz-Lochgroesse fehlt komplett im gesamten Plan
- **Stelle:** Phase 3 Step 3.2; auch Phase 4 Step 4.1 + 4.2; nicht in baustein-trigger.md
- **Problem:** Der Plan enthaelt keine einzige Stelle, an der die Pflicht-Anpassung der Hautschutzplatte ans Stoma thematisiert wird. Standard: Loch ca. 2 mm groesser als Stoma-Durchmesser, Messen mit Schablone vor jedem Wechsel (Stoma schwillt in den ersten 6-8 Wochen ab). Im Plan steht nur „in passender Groesse" und „60mm aus dem Patientenblatt". Eine fixe Groesse aus dem Patientenblatt zu uebernehmen ist fachlich falsch — das ist genau der Anfaenger-Fehler, der zu Leckage K3 fuehrt.
- **Standard-Verweis:** FG SKM Handlungsempfehlungen Stomapflege 2023; I Care Pflege Kapitel Stomaversorgung (Schablone + Anpassung)
- **Empfehlung:** Step 3.2 Sequenz erweitern um „Stoma mit Schablone ausmessen" VOR „Stomaplatte anlegen". Step 4.5 (K3 Leckage) soll als Kausalitaet „falsche Lochgroesse" explizit benennen — aktuell nur „falsch angepasste Plattengroesse" erwaehnt, ohne die 2-mm-Regel.

### Phase 2 — `beob-06-thrombose-zeichen` (truefalse)

#### F-02 (HOCH): Homans-Zeichen als „Alarmzeichen" — fachlich obsolet und gefaehrlich
- **Stelle:** Phase 2 Step 2.6, Aussage 1: „Warme, geschwollene Wade = Alarmzeichen → Arzt informieren. (wahr — Homans-Zeichen, aber kein Pressen!)"
- **Problem:** Homans-Zeichen ist seit 15+ Jahren obsolet (Sensitivitaet ~50%, Spezifitaet niedrig, theoretisches Embolisierungs-Risiko durch Manipulation). Die Klammer-Erlaeuterung verknuepft warme/geschwollene Wade mit Homans — das ist falsch: Warme/geschwollene Wade ist ein Inspektionsbefund, Homans-Zeichen ist eine aktive Manipulation (Dorsalflexion Fuss). Der Hinweis „kein Pressen" suggeriert, der Test sei eine Variante davon — er ist gestrichen aus der Pflegeausbildung.
- **Standard-Verweis:** AWMF S3-Leitlinie VTE-Prophylaxe (Reg.-Nr. 003-001), DGA — Homans nicht mehr empfohlen; Pflege heute aktuelle Auflage
- **Empfehlung:** Klammer streichen, Aussage formulieren als „Warme, geschwollene, schmerzhafte Wade = Alarmzeichen, Arzt informieren — keine aktiven Provokationsmanoever durchfuehren."

### patient-plan.md — Aktueller Verlauf / Versorgungsperspektive

#### F-03 (MITTEL): Ehefrau als „Hauptpflegeperson zuhause" — Stoma-Selbstpflege als Ziel fehlt
- **Stelle:** patient-plan Zeile 81 („Sie wird das Stoma zuhause mitversorgen muessen"), Phase 4 Step 4.4 (K2)
- **Problem:** Das primaere Ziel der Stoma-Anleitung ist die SELBSTversorgung durch den Patienten. Ehefrau als Backup, nicht als Hauptpflegeperson. Aktuell wird durchgaengig gesetzt, dass Mai die Versorgung uebernimmt — das verfestigt eine paternalistische Annahme, die der DNQP-Beziehungsgestaltung und der Empowerment-Idee der Stomatherapie widerspricht.
- **Standard-Verweis:** FG SKM 2023 — Selbstversorgung als Standard-Ziel; DNQP Beziehungsgestaltung
- **Empfehlung:** Phase 4 Step 4.4 Pfad B umformulieren: Anleitung zielt zuerst auf Herrn Nguyen, Mai als unterstuetzende Begleitung. Patient-plan-Bio analog ergaenzen.

### Phase 1 — `info-opt-heparin-ort` (mc)

#### F-04 (MITTEL): Heparin-Injektionsort — Abstand zur frischen OP-Wunde unterspezifiziert
- **Stelle:** Phase 1 Step 1.opt-3, Antwort B: „Bauchnabelnah, 2-3 cm Abstand"
- **Problem:** „2-3 cm" ist zu nah; Standard ist 3-5 cm vom Nabel UND mind. 5 cm Abstand zu frischen OP-Wunden/Narben. Bei Herrn Nguyen frische Sigmaresektions-Narbe in der Bauchdecke + Stoma — Injektion in den Quadrant gegenueber von Stoma+Narbe.
- **Standard-Verweis:** Pflege heute, Subkutane Injektion; AWMF VTE-Leitlinie
- **Empfehlung:** Antwort B auf „Mind. 3-5 cm Abstand vom Nabel und von OP-Naht/Stoma, alternierende Quadranten" praezisieren.

### Phase 2 — `beob-03-haut-assessment` (highlight)

#### F-05 (MITTEL): Bauchdeckenwunde „leicht geroetet mit seroeser Absonderung" — Differenzierung zu Wundinfektion fehlt
- **Stelle:** patient-plan Zeile 51, Phase 2 Step 2.3 (Highlight-Aufgabe)
- **Problem:** Am 4. POD sind leichte Roetung + serose Absonderung grenzwertig. Es fehlt im Plan ein Hinweis auf die fuenf Kardinalsymptome der Wundinfektion (Calor, Rubor, Dolor, Tumor, Functio laesa) und die Schwelle zur Arzt-Information. Aktuell wird das nur als „beobachten" gehandelt — ohne Eskalationskriterium.
- **Standard-Verweis:** DNQP Pflege chronischer Wunden; I Care Wundversorgung
- **Empfehlung:** Markierungsliste in 2.3 ergaenzen um „Roetungs-Ausdehnung > 2 cm waere Eskalation" oder optionalen Step zum Wundinfektions-Assessment.

### Phase 4 — `dur-02-beutelwechsel-dialog` (dialog)

#### F-06 (NIEDRIG): Beutel-Abziehrichtung „von oben nach unten" — Begruendung fehlt
- **Stelle:** Phase 4 Step 4.2
- **Problem:** Die Reihenfolge stimmt fachlich (Schwerkraft, Inhalt im Beutel halten), aber im Plan ohne Begruendung. Schueler lernen die Regel auswendig statt das Prinzip.
- **Empfehlung:** Im Generator-Step ergaenzen „weil Schwerkraft Stuhl im Beutel haelt".

### Phase 5 — `eval-opt-thrombose-check` (truefalse)

#### F-07 (NIEDRIG): „Kompressionsstruempfe noch offen, Schmerzen beim Anziehen"
- **Stelle:** Phase 5 Step 5.opt-1
- **Problem:** Wenn MTPS angeordnet sind und nicht angelegt werden, ist das eine Maßnahmen-Auslassung, die dokumentiert + an Arzt zurueckgemeldet werden muss (nicht nur „auf Nachmittag verschoben"). Plan suggeriert das ist akzeptabel.
- **Empfehlung:** Fokus auf Eskalation (Schmerztherapie anpassen, dann anlegen) statt Verschiebung.

---

## Cross-Step-Probleme

- **Stoma-Groesse 60 mm** in Phase 4 Step 4.1 wird als „aus dem Patientenblatt" gesetzt — kollidiert mit Phase 2 Step 2.2 Normalzeichen-Checkliste „Herausragen 1-2 cm". Stoma-Durchmesser (60 mm) ist im patient-plan nicht angegeben → Generator wird Wert erfinden.
- **Trigger-Konsistenz Bausteine:** baustein-trigger T-13 referenziert Bedingung „Branching K3 Schritt B nicht gewaehlt"; Phase 4 Step 4.5 sagt „bei Wahl A oder C". Formulierungen sollten vereinheitlicht werden.

---

## Zusammenfassung

- **2 HOCH** (F-01 Hautschutz-Lochgroesse, F-02 Homans-Zeichen)
- **3 MITTEL** (F-03 Selbstversorgungs-Ziel, F-04 Heparin-Abstand, F-05 Wundinfektion)
- **2 NIEDRIG** (F-06 Begruendung, F-07 MTPS-Eskalation)

**Allgemeine Beobachtungen:**
- Die Plan-Architektur ist didaktisch stark — Wuerde-Thema (Z3) sehr respektvoll, kein „schoene Stoma-Farbe"-Romantisieren, keine plumpe Pseudo-Empathie. Dolmetscher-Dilemma korrekt reflektiert (1.5).
- Pflege-Standards-Bezuege gut (DNQP, FG SKM, DGEM).
- Komplikationen Phase 4 realistisch und plausibel anfaengergerecht.
- ABER: Zwei pflegefachliche Kernlücken (F-01 Hautschutz-Anpassung, F-02 Homans) sind K.O.-relevant. F-01 ist gravierend, weil die zentrale Praxis-Regel der Stomapflege fehlt.

**K.O.-Verdikt:** **PASS** — alle 7 Findings (HOCH/MITTEL/NIEDRIG) im Code adressiert (2026-04-26).

## Fixes durchgefuehrt — 2026-04-26 (Plan-Findings nachgezogen im Code)

- **F-01 HOCH** (Hautschutz-Lochgroesse): Phase 4 neuer Step 4.1b `ce02-nguyen-dur-01b-lochgroesse-messen` (MC) explizit zur Schablonen-Messung als Lehrinhalt — Anti-Pattern "Wert aus Patientenblatt uebernehmen" als Distraktor mit Begruendung (Stoma schwillt 6–8 Wo ab). Phase 3 Step 3.2 von 8 auf 9 Schritte erweitert: neuer Schritt s7 "Stoma mit Schablone neu ausmessen, Loch = Stoma + 2 mm". Phase 4 Kontext bereits angepasst (vorab durch User). Quelle FG SKM 2024 zitiert.
- **F-02 HOCH** (Homans obsolet): Phase 2 Step 2.6 Aussage 1 reformuliert auf "warme, geschwollene, schmerzhafte Wade = Alarmzeichen → Arzt informieren, keine aktiven Provokationsmanoever". Erklaerung benennt Wells-Score, AWMF VTE-Leitlinie, klinische Inspektions-Zeichen (Schwellung, Druckschmerz, Kollateralvenen). Glossar-Begriff "Homans-Zeichen" durch "Wells-Score" ersetzt. Quelle korrigiert (vorher Heaton/Lewis Stool Form Scale falsch verlinkt).
- **F-03 MITTEL** (Selbstversorgung primaer): Phase 4 Step 4.4 K2 Pfad B umformuliert — Score-3-Antwort betont jetzt "Wir leiten zuerst Herrn Nguyen an, Mai ist Backup", patientResponse gibt Mais Zustimmung zurueck. patient-plan.md Versorgungsperspektive umgeschrieben (Empowerment statt Uebernahme). patient.ts hintergrundB1 angepasst.
- **F-04 MITTEL** (Heparin-Abstand): Phase 1 Step opt3 Antwort A (falsch) jetzt "2–3 cm" als Distraktor mit Erklaerung (Standard ist 3–5 cm). Antwort B (richtig) explizit "3–5 cm vom Nabel + alternierende Quadranten" mit Tagesrotation. body und contentB1 entsprechend praezisiert. Quelle auf AWMF VTE-Leitlinie umgestellt.
- **F-05 MITTEL** (Wundinfektion-Eskalation): Phase 2 Step 2.3 Highlight-Reason fuer Wundnaht erweitert um die 5 Kardinalsymptome (Calor/Rubor/Dolor/Tumor/Functio laesa) und Eskalations-Kriterien (Roetung > 2 cm, eitrige Absonderung, Druckschmerz, Waerme, Fieber). Quellen DNQP Wunden + AWMF Lokaltherapie ergaenzt.
- **F-06 NIEDRIG** (Schwerkraft-Begruendung): Phase 4 Step 4.2 body explizit "Schwerkraft haelt Stuhl im Beutel zurueck, statt nach oben ueber das Stoma zu laufen". Phase 3 Step 3.2 Schritt s2/s3 ebenfalls Schwerkraft-Hinweis.
- **F-07 NIEDRIG** (MTPS-Eskalation): Phase 5 opt-1 Aussage Kompressionsstruempfe-Erklaerung — Maßnahmen-Auslassung dokumentieren, Schmerz an Arzt zurueckmelden, Bedarfsanalgesie 30 Min vorher, dann anlegen (statt verschieben).

### Cross-Step-Konsistenz nach Fix
- Lochgroesse: Phase 4 Kontext (60 mm jetzt aktiv gemessen, +2 mm = 62 mm) + Phase 3 Step 3.2 Schritt s7 + Phase 4 neuer Step 4.1b — alle drei konsistent zur FG-SKM-Regel.
- Heparin-Ort: Phase 1 opt3 + Phase 5 opt1 + Phase 6 Step 6.3 matching — alle "laterale Oberschenkelaußenseite, ≥5 cm Abstand zu Wunde+Stoma, alternierende Quadranten".
- Selbstversorgung: patient.ts + patient-plan.md + Phase 4 K2 + Phase 4 Kontext — Mai durchgaengig als Backup, nicht als Hauptpflegeperson.

### Validierung
- `npx tsc --noEmit` — PASS (0 Fehler)
- 7/7 Plan-Findings adressiert
- K.O.-Kriterien (F-01, F-02) geloest

*Hinweis: Code-Review (pflege-review.md) bereits PASS — Plan-Findings nun vollstaendig im Code nachgezogen. Beide Reviews konsistent.*
