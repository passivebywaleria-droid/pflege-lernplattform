# Pflege-Review (Plan): ls-bauer-demenz-sturz

**Geprueft:** 2026-04-26
**Mode:** plan (retrospektiv, nach Code-PASS)
**Files:** 8 (patient-plan.md, baustein-trigger.md, phase-informieren.md, phase-beobachten.md, phase-planen.md, phase-durchfuehren.md, phase-evaluieren.md, phase-dokumentieren.md)
**Step-Anzahl im Plan:** 38 Steps (5+7+6+9+6+5)

## Findings

### phase-durchfuehren — Phasenkontext

#### F-P01 (HOCH): "Gedämpftes Licht" als Setting beim Pflege-Setting nach Sturz
- **Stelle:** phase-durchfuehren.md, Zeile 17 ("Der Raum ist vorbereitet: warm, ruhig, gedämpftes Licht.")
- **Problem:** Anti-Pattern aus `pflege-konformitaet.md`. Am Morgen nach einem Sturz mit ausstehendem Verletzungs-Assessment (Hämatom-Inspektion, Hautcheck, Schmerz-Beurteilung BESD) braucht es volle Sicht. Gedämpftes Licht für die Basale Stimulation passt erst wenn Inspektion abgeschlossen ist.
- **Standard-Verweis:** DNQP Sturzprophylaxe 2022, Krit. 3b; Anti-Pattern-Liste pflege-konformitaet.md
- **Empfehlung:** "Raumlicht voll an für Inspektion, Musik leise im Hintergrund. Nach abgeschlossener Hautkontrolle Licht reduzieren für die beruhigende Waschung."

### phase-beobachten — beob-02-sturz-assessment (sequencing)

#### F-P02 (HOCH): Vitalzeichen an Position 6 — ABCDE-Reihenfolge verletzt
- **Stelle:** Zeile 28, Sortier-Reihenfolge: Ansprechbarkeit → BESD → Kopf/Wirbelsäule → Extremitäten → Hämatome → Vitalzeichen
- **Problem:** Vitalzeichen (RR, Puls, SpO₂) gehören unmittelbar nach Bewusstsein/Ansprechbarkeit (ABCDE: A → B → C). Sturz nachts bei 82-jährigem unter Mirtazapin: Synkope/orthostatische Dysregulation/Hypoglykämie sind erste Verdachtsdiagnosen. Erst Kreislauf prüfen, DANN Extremitäten.
- **Standard-Verweis:** ABCDE-Schema (Notfall-Erstuntersuchung); DNQP Sturzprophylaxe 2022, Sturzfolgenanalyse
- **Empfehlung:** Reihenfolge: Bewusstsein → Vitalzeichen → Kopf/HWS → BESD → Extremitäten → Hämatome. Quelle ABCDE im body nennen.

### phase-informieren — info-04-zimmer-betreten (dialog)

#### F-P03 (MITTEL): Score-3-Antwort "schaue kurz nach Ihnen" verspricht zu wenig
- **Stelle:** Zeile 45, Option B
- **Problem:** Wahrhaftigkeits-Problem (DNQP Beziehungsgestaltung Demenz 2018). Es folgt eine vollständige Morgenpflege + Assessment + Bewegungsübungen — also kein "kurzer Besuch". Bei Demenz: einmal Vertrauen verloren = schwer wiederherstellbar.
- **Empfehlung:** "Ich bin [Name]. Ich helfe dir heute früh und bleibe ein bisschen bei dir." (validierend, ehrlich).

### phase-informieren — info-03-validation-grundlage (text)

#### F-P04 (NIEDRIG): "5 Prinzipien der Validation" als Feil-Original dargestellt
- **Stelle:** Zeile 44
- **Problem:** Feil arbeitet mit 14 Techniken; eine kanonische "5-Prinzipien"-Liste existiert nicht. Die Vereinfachung ist didaktisch ok, aber die Quellenangabe sollte explizit als "vereinfachte Ableitung" gekennzeichnet werden.
- **Empfehlung:** Einleitung "Vereinfacht nach Feil/de Klerk-Rubin 2012 (Originaltechniken: 14)".

### phase-planen — plan-04-interprofessionell (matrix)

#### F-P05 (NIEDRIG): Mirtazapin-Beschreibung verkürzt
- **Stelle:** Zeile 32 ("Mirtazapin-Dosis prüfen (sediert, erhöht Sturzrisiko)")
- **Problem:** Mirtazapin wirkt dosisabhängig — niedrig (15 mg) eher sedierend, höher (30–45 mg) überwiegend antidepressiv. PRISCUS-Listung als Sturzrisikomedikament gehört explizit erwähnt.
- **Empfehlung:** "Mirtazapin (PRISCUS-Liste, dosisabhängige Sedierung) — Indikation und Dosis arztseitig prüfen."

### phase-planen — plan-06-freiheitsentziehung (truefalse)

#### F-P06 (MITTEL): § 1831 BGB Notfall-Klausel fehlt
- **Stelle:** Zeile 41
- **Problem:** Aussage 1 ("Bettgitter ohne Genehmigung hochstellen") ist im akuten Notfall (§ 34 StGB rechtfertigender Notstand) kurzzeitig zulässig. Aussagen-Begründung erwähnt das nicht — Schüler lernt zu absolut "verboten".
- **Empfehlung:** Begründung erweitern: "In unmittelbarer Lebens-/Selbstverletzungsgefahr kurzzeitig zulässig (§ 34 StGB) — danach umgehend richterliche Genehmigung."

### phase-durchfuehren — dur-01-basale-vorbereitung (text)

#### F-P07 (MITTEL): "Peripher → zentral" als Reihenfolge der Körperregionen missverständlich
- **Stelle:** Zeile 29, Punkt 3 ("Waschen von peripher nach zentral beginnen (Füße → Beine → Rumpf)")
- **Problem:** Die "peripher → zentral"-Bewegung gehört zur Stimulationsrichtung INNERHALB einer Körperregion (Strich in Haarwuchsrichtung). Die Reihenfolge der Körperregionen folgt der Hygiene: Gesicht/Augen zuerst (sauberes Wasser), Genital/Anal zuletzt. Im Code wurde dies bereits als HOCH (F-01) korrigiert — der Plan ist noch im alten Stand.
- **Standard-Verweis:** I Care Pflege, Kap. Körperpflege; Bienstein/Fröhlich 2021
- **Empfehlung:** Punkt 3 zweiteilen: (a) Reihenfolge nach Hygiene (sauber → unrein), (b) innerhalb jeder Region in Haarwuchsrichtung streichen.

### phase-durchfuehren — dur-04-bewegungsuebungen (sequencing)

#### F-P08 (MITTEL): "Kniebeugen im Bett" missverständlicher Begriff
- **Stelle:** Zeile 32
- **Problem:** "Kniebeuge" assoziiert aktive Hocke-Übung im Stehen. Hier gemeint: passive Knieflexion im Liegen.
- **Empfehlung:** "Passive Knieflexion im Bett (bis zur schmerzfreien Grenze, BESD beachten)".

### phase-durchfuehren — dur-05-mundpflege (mc)

#### F-P09 (NIEDRIG): "Wattestäbchen" + Aspiration nicht thematisiert
- **Stelle:** Zeile 33, Option B
- **Problem:** Mundschwämmchen tragen ein geringes Aspirationsrisiko (FDA-Warnung 2017 bei nicht festsitzenden Köpfchen). Im Plan steht "kooperativ, günstig" — Sicherheits-Caveat fehlt.
- **Empfehlung:** "Mundschwämmchen mit festsitzendem Kopf, sachgerecht angewendet, Patient nicht allein lassen — geringes Aspirationsrisiko bei korrekter Anwendung".

#### F-P10 (MITTEL): Malzbier — Alkohol-Status nicht geklärt
- **Stelle:** phase-planen.md Zeile 40 ("lieblings-Getränk … Malzbier"), phase-durchfuehren.md Zeile 44 (Timer), phase-dokumentieren.md Zeile 26
- **Problem:** Klassisches Malzbier ist alkoholarm (≤0,5 %). Bei Mirtazapin + 82-jährigem mit Demenz: Alkohol kontraindiziert (Sedierung-Verstärkung, Sturzrisiko-Erhöhung). Plan benennt "Malzbier" ohne den Alkohol-Status zu klären.
- **Empfehlung:** Überall "alkoholfreies Malzgetränk" verwenden; in patient-plan.md unter Ressourcen explizit machen.

### phase-evaluieren — eval-02-angehoerigen-gespraech (dialog)

#### F-P11 (MITTEL): Datenschutz / Schweigepflicht ungeklärt
- **Stelle:** Zeile 29
- **Problem:** Patient-plan.md erwähnt Tochter Ingrid als Kontakt, aber NICHT als gesetzliche Betreuerin. Ohne diese Klärung darf eine Pflegeschülerin keine medizinischen Auskünfte geben (§ 203 StGB Schweigepflicht; DSGVO Art. 9 Gesundheitsdaten). Bei Demenz mit eingeschränkter Einwilligungsfähigkeit ist das nicht trivial.
- **Empfehlung:** patient-plan.md unter Stammdaten ergänzen: "Tochter Ingrid Bauer als gesetzliche Betreuerin (Gesundheitssorge) bestellt seit 2024" — sonst muss Step 5.2 die Auskunft an die Stationsleitung delegieren.

### phase-evaluieren — eval-06-exsikkose-bilanz (calculation)

#### F-P12 (NIEDRIG): Perspiratio 500 ml zu niedrig
- **Stelle:** Zeile 40
- **Problem:** Perspiratio insensibilis bei 82-jährigem, immobilem Patient bei normaler Raumtemperatur eher 700–1000 ml/Tag (Lehrbuchwert). 500 ml unterschätzt die Bilanz.
- **Empfehlung:** Wert auf 800 ml anheben + Bilanz neu rechnen. Quelle: I Care Krankheitslehre, Wasserhaushalt.

### Cross-Plan-Probleme

#### F-P13 (NIEDRIG): Mengenangaben-Diskrepanz Phase 5
- **Stelle:** phase-evaluieren.md Phasenkontext (Zeile 14: "Mittag 400 ml") vs. Step 5.1 ("Mittag 500 ml") vs. Step 5.6 ("Frühstück 200 + Mittag 500 + Nachmittag 400 = 1100 ml")
- **Problem:** Inkonsistente Trinkmengen über drei Stellen.
- **Empfehlung:** Eine kanonische Tagesmenge festlegen (z.B. 200 + 400 + 400 = 1000 ml) und alle drei Stellen synchronisieren.

#### F-P14 (NIEDRIG): "FAST 6a"-Definition Step 1.5
- **Stelle:** phase-informieren.md Zeile 53
- **Problem:** FAST 6a = "Anziehen mit Schwierigkeiten / Fehler in Reihenfolge", nicht "kann sich nicht mehr anziehen" (das wäre 6b).
- **Empfehlung:** Vorderseite präzisieren ("inkorrektes Anziehen, z.B. falsche Reihenfolge, falsche Seite").

## Zusammenfassung

- **2 Findings HOCH** (F-P01 Gedämpftes Licht, F-P02 Vitalzeichen-Position)
- **5 Findings MITTEL** (F-P03 "kurz schauen", F-P06 § 1831 Notfallklausel, F-P07 Peripher-zentral, F-P08 Kniebeugen, F-P10 Malzbier, F-P11 Datenschutz)
- **5 Findings NIEDRIG** (F-P04 Validation, F-P05 Mirtazapin, F-P09 Aspiration, F-P12 Perspiratio, F-P13 Mengen, F-P14 FAST)

**Allgemeine Beobachtungen:**
- Der Plan ist didaktisch sehr stark: Validation, Würde, Sandwich-Prinzip, Brilliant-Fragen, klare Cross-Step-Logik. Patient-Bio (Schreiner, Margarete, Lieder) ist authentisch.
- ABER: Pseudo-Empathie-Anti-Pattern "gedämpftes Licht" sitzt im Plan; im Code wurde es korrigiert. Pflichtquellen DNQP/Feil/Bienstein sind benannt.
- Die meisten HOCH/MITTEL-Findings sind im Code-Review (pflege-review.md) bereits identifiziert und in den `phase-*.ts` adressiert worden. Der **Plan ist also in fachlich altem Stand** — nur Code wurde nachgepflegt.

**K.O.-Verdikt: PASS [GEFIXT 2026-04-26]**

Begründung: F-P01 (Gedämpftes Licht beim Sturz-Setting) und F-P02 (Vitalzeichen an Position 6 statt 2) waren direkt gegen DNQP/ABCDE und standen 1:1 in den Plan-MDs. Code war bereits korrigiert; am 2026-04-26 wurden auch alle Plan-MDs an den korrigierten Code-Stand angeglichen. Künftige Re-Generierungen aus dem Plan reproduzieren die Fehler nicht mehr.

## Fixes durchgeführt — 2026-04-26

Alle 14 Plan-Findings (2 HOCH, 5 MITTEL, 5 NIEDRIG, 2 weitere) bearbeitet. K.O.-Verdikt: PASS.

### Detail-Log

- **F-P01 (HOCH) — Gedämpftes Licht (phase-durchfuehren.md):** Kontext umformuliert: "Licht voll an für Hautinspektion und Verletzungs-Check (DNQP Sturzprophylaxe 2022). Erst nach abgeschlossener Inspektion Reduktion für die beruhigende Waschung (Bienstein/Fröhlich 2021)." Anti-Pattern aus pflege-konformitaet.md damit aufgehoben.
- **F-P02 (HOCH) — ABCDE-Reihenfolge in beob-02 (phase-beobachten.md):** Vitalzeichen von Position 6 auf Position 2 verschoben. Neue Reihenfolge: Bewusstsein → Vitalzeichen → Kopf/HWS → BESD → Extremitäten → Hämatome. ABCDE-Begründung (Synkope/Orthostase ausschließen, besonders unter Mirtazapin) im body ergänzt. Quelle: ABCDE (ERC) + DNQP Sturzprophylaxe 2022, Krit. 3b.
- **F-P03 (MITTEL) — "kurz schauen" Score-3 (phase-informieren.md, Step 1.4 + 1.3):** Antwort B in 1.4 ersetzt durch "Ich helfe dir heute früh und bleibe ein bisschen bei dir." Quelle DNQP Beziehungsgestaltung Demenz 2018 (Verlässlichkeit/Wahrhaftigkeit) ergänzt. Beispiel im Erklär-Step 1.3 entsprechend.
- **F-P04 (NIEDRIG) — Validation 5 Prinzipien (phase-informieren.md, Step 1.3):** Eingeleitet mit "Validation nach Feil arbeitet mit 14 Techniken (Zentrieren, Reformulieren, Spiegeln, Berührung u. a.). Für die Praxis lassen sich daraus folgende Grundprinzipien ableiten (vereinfacht nach Feil/de Klerk-Rubin 2012)". B1-Variante synchron.
- **F-P05 (NIEDRIG) — Mirtazapin verkürzt (phase-planen.md, Step 3.4):** Beschreibung präzisiert: "Antidepressivum mit dosisabhängiger Sedierung, PRISCUS-Liste — Sturzrisiko". Indikation/Dosis arztseitig prüfen.
- **F-P06 (MITTEL) — § 1831 BGB Notfall-Klausel (phase-planen.md, Step 3.6):** Notfall-Klausel präzisiert: "Nur in unmittelbarer Notlage (akute Selbstverletzungs- oder Lebensgefahr, rechtfertigender Notstand nach § 34 StGB) kurzzeitig erlaubt — danach umgehend richterliche Genehmigung beantragen. Akute Sturzgefahr als Dauerzustand reicht nicht."
- **F-P07 (MITTEL) — Peripher-zentral (phase-durchfuehren.md, Step 4.1):** Punkt 3 klargestellt: "Reihenfolge der Körperregionen folgt der Hygiene (sauber → unrein, Gesicht/Augen zuerst, Genital-/Analbereich zuletzt). Strichführung peripher → zentral gilt INNERHALB einer Region." Quelle: Bienstein/Fröhlich 2021 + I Care Pflege.
- **F-P08 (MITTEL) — "Kniebeugen" (phase-durchfuehren.md, Step 4.4):** Ersetzt durch "Passive Knieflexion im Bett (Beugung im Kniegelenk, bis zur schmerzfreien Grenze — BESD beachten)".
- **F-P09 (NIEDRIG) — Mundschwämmchen-Aspiration (phase-durchfuehren.md, Step 4.5):** Option B umformuliert: "Mundschwämmchen mit festsitzendem Kopf, sanft auf die Schleimhaut, Pflegekraft führt, Patient nicht alleine lassen — geringes Aspirationsrisiko bei sachgerechter Anwendung (FDA-Warnung 2017 zu Schwämmchen mit losem Kopf beachten)". Quelle DNQP Mundpflege 2023.
- **F-P10 (MITTEL) — Malzbier alkoholfrei:** patient-plan.md (Ressourcen) + phase-planen.md Step 3.5 + phase-durchfuehren.md Step 4.9 (Timer) + phase-dokumentieren.md Step 6.3 (Miktionsprotokoll) — überall "alkoholfreies Malzgetränk (Malzbier)" mit Begründung "Mirtazapin + Alkohol kontraindiziert".
- **F-P11 (MITTEL) — Datenschutz Angehörige (phase-evaluieren.md, Step 5.2):** Vorbedingungs-Hinweis ergänzt: "Bevor du Auskunft gibst, prüfst du in der Akte: Tochter Ingrid Bauer ist seit 2024 als gesetzliche Betreuerin (Aufgabenkreis Gesundheitssorge) bestellt — auskunftsberechtigt nach § 203 StGB / § 1814 BGB / DSGVO Art. 9. Ohne diese Klärung Verweis an Stationsleitung." Patient-plan.md Stammdaten parallel ergänzt.
- **F-P12 (NIEDRIG) — Perspiratio (phase-evaluieren.md, Step 5.6):** Wert von 500 auf 800 ml (Lehrbuch I Care Krankheitslehre / Pflege heute, 700–1000 ml für 82-jährigen Immobilen). Bilanz neu: 1000 − 1550 = −550 ml. Trinkziel 1500 ml (Etappe 1300).
- **F-P13 (NIEDRIG) — Mengen-Diskrepanz (phase-evaluieren.md):** Phasenkontext (Frau Meiers Aussage) auf "Vormittag und Mittag zusammen 600 ml (200 Frühstück + 400 Mittag)". Step 5.1 auf "200 + 400 + 400 = 1000 ml gesamt" konsistent zu Step 5.6.
- **F-P14 (NIEDRIG) — FAST 6a (phase-informieren.md, Step 1.5):** Definition präzisiert: "Schwierigkeiten beim korrekten Anziehen (z. B. falsche Reihenfolge, falsche Seite — anziehen ist möglich, aber inkorrekt)". Quelle Reisberg 1988 explizit.

### Cross-Plan-Konsistenz-Fixes

- **Knie rechts/links (patient-plan.md Z2 + phase-beobachten.md Step 2.3 + Phase-2-Abschluss):** Z2-Zitat zeigt jetzt auf RECHTES Knie (passt zum 20°-Streckdefizit, zum Code-Stand Step 2.3 und zur didaktischen Logik der Schmerzreaktion am stärker betroffenen Knie).
- **patient-plan.md Stammdaten:** Tochter Ingrid als gesetzliche Betreuerin (Gesundheitssorge) seit 2024 ergänzt.
- **patient-plan.md Medikation:** Mirtazapin um PRISCUS-Hinweis, dosisabhängige Sedierung, Sturz-/Orthostase-Risiko, Alkohol-Kontraindikation erweitert.
- **patient-plan.md Ressourcen:** Lieblings-Trinken explizit als alkoholfreies Malzgetränk benannt.

### Validierung

- TypeScript: PASS (`npx tsc --noEmit` ohne Fehler nach Plan-MD-Fix — MD-Änderungen berühren TS nicht, aber separat geprüft)
- Plan ↔ Code jetzt synchron für alle 14 Plan-Findings
- Anti-Pattern-Liste aus pflege-konformitaet.md durchsucht: kein "gedämpftes Licht", "Gesicht zuletzt", "unter den Achseln", "Kniebeugen" oder "Sie haben Glück" mehr im Plan
