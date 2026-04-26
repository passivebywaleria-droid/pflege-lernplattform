# Pflege-Review: ls-bauer-demenz-sturz

**Geprueft:** 2026-04-25
**Files:** 7 (6 Phasen + patient.ts)
**Step-Anzahl:** 38 (5+7+6+9+6+5) — davon 6 Dialog, 2 MC, 5 Sequencing, 5 Categorize, 3 Branching, 1 TrueFalse, 4 Freetext/Reflection, 8 Text, 1 Highlight, 1 ErrorSpot, 1 TableFillIn, 1 Comparison, 1 Matrix, 1 Matching, 1 Flipcard, 1 Calculation, 1 Timer, 1 Summary

## Findings

### phase-durchfuehren — ce02-bauer-dur-01-basale-vorbereitung (text)

#### F-01 (HOCH): "Gesicht zuletzt" widerspricht Hygienestandard
- **Stelle:** Zeile 33 ("3. Von peripher nach zentral beginnen — Fuesse, Beine, Rumpf, dann Gesicht zuletzt.")
- **Problem:** Das Gesicht (insbesondere die Augen) wird in der Koerperpflege NIE zuletzt gewaschen — Hygienestandard ist: Gesicht zuerst, weil mit dem saubersten Wasser gearbeitet wird (Augen → Gesicht → Hals → ... → Genitalbereich → Anus). "Von peripher nach zentral" ist ein Prinzip der Basalen Stimulation fuer das Koerperschema, betrifft aber primaer die Hand-Fuehrung waehrend einer Stimulationswaschung — nicht die Reihenfolge der Koerperregionen im Gesamtablauf.
- **Standard-Verweis:** I-Care Pflege, Kapitel Koerperpflege; Bienstein/Froehlich (2021): in der beruhigenden Ganzkoerperwaschung wird in Haarwuchsrichtung gestrichen, Reihenfolge folgt Hygiene + Patientenwunsch
- **Empfehlung:** Punkt 3 streichen oder umformulieren: "Bewegungen jeweils in Haarwuchsrichtung — von Schulter zur Hand, von Hueftgelenk zum Fuss. Reihenfolge nach Hygiene: sauber zu unrein."

#### F-02 (MITTEL): Step 4.3 widerspricht Step 4.1 (Cross-Step)
- **Stelle:** Step 4.3 ("Du moechtest jetzt die Stirn waschen") vs. Step 4.1 Punkt 3 ("Gesicht zuletzt")
- **Problem:** In Step 4.1 lernt der Schueler "Gesicht zuletzt", in Step 4.3 wird das Gesicht aber als Wiedereinstieg nach Deeskalation gewaschen (also frueh in der Sequenz). Bauerscher Block schon innerhalb der Phase.
- **Empfehlung:** Step 4.1 korrigieren (siehe F-01), dann ist 4.3 stimmig.

### phase-informieren — ce02-bauer-info-04-zimmer-betreten (dialog)

#### F-03 (MITTEL): Score-3-Antwort verspricht "kurzer Besuch", was nicht eingehalten wird
- **Stelle:** Zeile 170 — Score-3-Option: "Ich schaue kurz nach Ihnen."
- **Problem:** Der Schueler wird im weiteren Verlauf eine vollstaendige Morgenpflege + Assessment + Bewegungsuebungen durchfuehren. "Kurz nach dir schauen" ist eine Beruhigungsfloskel, die das Gegenteil von dem ist was passiert. Bei Demenz besonders heikel: Wer einmal luegt, verliert Vertrauen, wenn die Realitaet abweicht.
- **Standard-Verweis:** DNQP Beziehungsgestaltung Demenz 2018: Verlaesslichkeit + Wahrhaftigkeit
- **Empfehlung:** "Ich bin [Name]. Ich helfe dir heute frueh." oder "Ich bleibe ein bisschen bei dir." statt "kurz nach dir schauen".

### phase-beobachten — ce02-bauer-beob-02-sturz-assessment (sequencing)

#### F-04 (HOCH): Vitalzeichen + Bewusstsein an falscher Position — ABCDE verletzt
- **Stelle:** Items a1–a6, Zeilen 87–110
- **Problem:** Nach ABCDE-Schema (Notfall) und auch nach DNQP Sturzprophylaxe gilt: Vitalzeichen + Bewusstsein gehoeren AN DEN ANFANG (Airway, Breathing, Circulation BEVOR Disability/Exposure). Hier steht: 1. Ansprechbarkeit (D), 2. BESD (E), 3. Kopf/WS, 4. Extremitaeten, 5. Haematome, 6. Vitalzeichen. Vitalzeichen als letzter Schritt ist falsch — RR/Puls/SpO2 koennen einen Kollaps/Synkope als Sturzursache aufdecken und gehoeren VOR die Mobilisations-Pruefung der Extremitaeten. Sonst Risiko: Du bewegst einen Patienten, der gerade noch eine Synkope hatte.
- **Standard-Verweis:** ABCDE (ERC); DNQP Sturzprophylaxe 2022, Kriterium 3b (Sturzfolgeneinschaetzung)
- **Empfehlung:** Reihenfolge: 1. Ansprechbarkeit/Bewusstsein, 2. Vitalzeichen (RR, Puls, SpO2 — Synkope ausschliessen), 3. Kopf/HWS-Inspektion, 4. Schmerzerfassung BESD, 5. Extremitaeten-Bewegung, 6. Haematome/Hautdefekte. Oder zumindest Vitalzeichen vor Extremitaeten-Bewegung.

### phase-beobachten — ce02-bauer-beob-04-haut-trinkprotokoll (highlight)

#### F-05 (MITTEL): "3x Inkontinenzwechsel = Hautrisiko" als Risikofaktor zu pauschal
- **Stelle:** Zeilen 272–278: "Inkontinenzversorgung 3× gewechselt in der Nacht" als Risikofaktor markiert
- **Problem:** Haeufiger Wechsel ist eigentlich SCHUTZFAKTOR (verhindert IAD = Inkontinenz-assoziierte Dermatitis). Der Risikofaktor ist die Inkontinenz selbst und die Feuchtigkeitsexposition zwischen den Wechseln, nicht die Wechselhaeufigkeit. Bei DNQP "Foerderung Harnkontinenz" + DNQP-Hinweispapier IAD ist gerade die zeitnahe Versorgung Schutzmassnahme. Die Erklaerung "Scherkraefte" ist fachlich vage — Scherkraefte entstehen primaer beim Lagerungswechsel, nicht bei Inkontinenzwechsel.
- **Empfehlung:** Risikofaktor neu rahmen: "3× Wechsel = Hinweis auf hohe Inkontinenz-Frequenz und Hautexposition; Risiko liegt in der Nass-Belastung zwischen den Wechseln, nicht im Wechsel selbst." Oder als Hinweis auf naechtliche Polyurie / Drangsymptomatik werten (= Sturzrisiko-Faktor).

### phase-planen — ce02-bauer-plan-04-interprofessionell (matrix)

#### F-06 (NIEDRIG): "Mirtazapin sediert" — Aussage verkuerzt
- **Stelle:** Zeile 237: "Mirtazapin-Dosis pruefen lassen (sediert, erhoeht Sturzrisiko)"
- **Problem:** Mirtazapin sediert dosisabhaengig (in niedrigen Dosen 7,5–15 mg staerker sedierend, in hoeheren Dosen ueber 30 mg paradoxerweise weniger). Pauschale Zuschreibung "sedierend" ist eine Vereinfachung. Sturzrisiko-Erhoehung gilt aber zutreffend (Beers-Liste, PRISCUS-Liste).
- **Empfehlung:** "Mirtazapin (Antidepressivum mit dosisabhaengiger Sedierung, PRISCUS-Liste) — Dosisanpassung pruefen lassen, Sturzrisiko."

### phase-planen — ce02-bauer-plan-06-freiheitsentziehung (truefalse)

#### F-07 (MITTEL): § 1831 BGB — paragraphisch korrekt, aber Notfall-Klausel unscharf
- **Stelle:** Zeile 316: "Nur im Notfall (akute Sturz-Gefahr) kurzzeitig erlaubt."
- **Problem:** Die Notfall-Klausel des § 1831 BGB greift bei "rechtfertigendem Notstand" (§ 34 StGB), bezieht sich auf Eigen-/Fremdgefaehrdung mit erheblichen Folgen. "Akute Sturzgefahr" ist eine staendige Begleiterscheinung bei dieser Patientengruppe — daraus eine Notfall-Rechtfertigung abzuleiten waere falsch und gefaehrlich (Daueranwendung wuerde damit gerechtfertigt). Korrekt: Notfall = unmittelbar drohende Eigengefaehrdung mit Lebensgefahr, danach Genehmigung umgehend einholen.
- **Standard-Verweis:** § 1831 BGB (frueher 1906); Werdenich Standards
- **Empfehlung:** "Nur in unmittelbarer Notlage (z. B. akute Selbstverletzungs- oder Lebensgefahr) kurzzeitig erlaubt — danach umgehend richterliche Genehmigung beantragen."

### phase-durchfuehren — ce02-bauer-dur-04-bewegungsuebungen (sequencing)

#### F-08 (MITTEL): "Kniebeugen im Bett" als Bezeichnung missverstaendlich
- **Stelle:** Zeile 219: "Kniebeugen im Bett (passiv, bis zur schmerzfreien Grenze)"
- **Problem:** "Kniebeugen" ist ein etablierter Begriff fuer eine aktive sportliche Uebung im Stand. Was hier gemeint ist: passive Knieflexion / Bewegung im Kniegelenk. Ein Auszubildender koennte das missverstehen.
- **Empfehlung:** "Passive Knieflexion im Bett (Beugung im Kniegelenk, bis zur schmerzfreien Grenze — BESD beobachten)"

### phase-durchfuehren — ce02-bauer-dur-09-trinken-strategie (timer)

#### F-09 (MITTEL): Malzbier — Alkohol-Frage nicht geklaert
- **Stelle:** Zeile 215, 272, 277, 444: "Malzbier" wird wiederholt als Strategie genannt
- **Problem:** Malzbier ist umgangssprachlich uneindeutig: "Echtes" Malzbier ist alkoholfrei (Malztrunk), aber der Sprachgebrauch ist regional verschieden, und einige Sorten enthalten bis zu 0,5 % Alkohol. Bei einem Demenzpatienten mit Mirtazapin (CNS-Depressivum) und Sturzrisiko muss klar sein, dass nur alkoholfreies Malzgetraenk gemeint ist. Im Patientenplan steht es nirgends explizit.
- **Empfehlung:** Einmal im Content (z. B. Step 3.5) ergaenzen: "alkoholfreies Malzgetraenk (nicht zu verwechseln mit Alkohol-Malzbier)".

### phase-durchfuehren — ce02-bauer-dur-05-mundpflege (mc)

#### F-10 (NIEDRIG): Mundschwaemmchen / Wattestaebchen-Aspirationsrisiko
- **Stelle:** Zeile 280: "Kein Aspirationsrisiko"
- **Problem:** "Kein Aspirationsrisiko" ist zu absolut. Bei losen Wattestaebchen / Schwaemmchen besteht ein dokumentiertes Risiko, dass sich kleine Teile loesen (FDA-Warnung 2017 zu Mundpflegestaebchen). Bei Demenz mit Schluckbeissen kann ein Schwaemmchen abreissen und aspiriert werden.
- **Standard-Verweis:** DNQP Mundpflege 2023, Hinweise zu Aspirationsrisiken bei Mundschwaemmchen
- **Empfehlung:** "Geringes Aspirationsrisiko bei sachgerechter Anwendung — Schwaemmchen festsitzend, Pflegekraft fuehrt, Patient nicht alleine lassen."

### phase-evaluieren — ce02-bauer-eval-02-angehoerigen-gespraech (dialog)

#### F-11 (MITTEL): Datenschutz / Schweigepflicht ueberhaupt nicht thematisiert
- **Stelle:** Gesamter Step
- **Problem:** Bevor du als Schuelerin (2./3. AD) ueber den Sturz mit Tochter Ingrid sprichst, muss geklaert sein: Hat Herr Bauer Ingrid als Auskunftsberechtigte? Liegt eine Vorsorgevollmacht / Betreuung vor? Bei Demenzpatienten muss die rechtliche Vertretung bekannt sein. Im Patientenplan steht nirgendwo, ob Ingrid betreuende Tochter ist. Das Gespraech wird ohne diese Klaerung gefuehrt — pflegerisch und rechtlich problematisch.
- **Standard-Verweis:** § 203 StGB (Schweigepflicht); DSGVO Art. 9; SGB XI § 113 (Pflegeueberleitung)
- **Empfehlung:** Im Patient.ts Hintergrund ergaenzen: "Tochter Ingrid Bauer ist gesetzliche Betreuerin (Bestellung 2024)." Oder im Step 5.2 als Pre-Step: "Pruefe in der Akte: Ingrid ist Betreuerin/Auskunftsberechtigte — gilt." Sonst muesste die Reaktion lauten "Frau Bauer, ich darf Ihnen nicht ohne Pruefung Auskunft geben — bitte sprechen Sie mit der Stationsleitung."

### phase-evaluieren — ce02-bauer-eval-06-exsikkose-bilanz (calculation)

#### F-12 (NIEDRIG): Perspiratio-Wert pauschalisiert
- **Stelle:** Zeile 427: "Perspiratio ~500 ml bei 23°C"
- **Problem:** Perspiratio insensibilis liegt bei einem 82-jaehrigen, immobilen Patienten bei ca. 800–1000 ml/Tag (haengt von Atemfrequenz, Hautoberflaeche, Temperatur ab). 500 ml ist eher der Wert fuer normale Erwachsene bei kuehler Raumtemperatur. Bei einem Pflegegrad-4-Patienten geht das Lehrbuch eher von 700–1000 ml aus.
- **Empfehlung:** Werte nach Lehrbuch (I-Care, Pflege heute) angleichen, oder zumindest annotieren: "Perspiratio-Schaetzung 500 ml bei kuehler Raumtemperatur — bei waermeren Temperaturen oder Fieber deutlich hoeher."

### phase-evaluieren — Step 5.1 (categorize)

#### F-13 (NIEDRIG): "Trinkmenge 400 ml nachmittags + ca. 600 ml Frueh/Mittag" widerspricht Step 5.6
- **Stelle:** Zeile 62 vs. Zeile 427
- **Problem:** Step 5.1: "1000 ml gesamt" (200 + 400 + 400). Step 5.6: identisch — also rechnerisch konsistent. ABER Phase-Einstieg-Kontext (Zeile 14): "Herr Bauer hat heute Mittag 400 ml getrunken — besser als gestern". Step 5.1: "400 ml nachmittags + 600 ml Fruehstueck/Mittag". Die Meta-Beschreibung "heute Mittag 400 ml" steht in Spannung zur Detailaufstellung. Klein, aber bei Walkthrough verwirrend.
- **Empfehlung:** Kontext-Text auf "heute Vormittag und Mittag zusammen 600 ml" anpassen oder Aufschluesselung in Step 5.1 angleichen.

### patient.ts

#### F-14 (NIEDRIG): "FAST 6a" Definition leicht ungenau
- **Stelle:** Zeile 13 / Step 1.5 Flipcard FAST-Stufe 6a
- **Problem:** Reisbergs FAST-Skala definiert 6a als "Schwierigkeiten beim korrekten Anziehen" (anziehen kann er noch, aber inkorrekt). Hier wird gesagt "kann sich nicht mehr selbst anziehen" — das waere eher 6b. 6a + Weglauftendenz + Desorientierung passt aber zum Verhalten. Inhaltlich passt's, Definition leicht verschoben.
- **Standard-Verweis:** Reisberg B. (1988): FAST. Psychopharmacology Bulletin
- **Empfehlung:** Flipcard-Front: "FAST 6a: Schwierigkeiten beim korrekten Anziehen (z. B. falsche Reihenfolge, falsche Seite). Desorientierung zu Ort/Zeit, Nachtaktivitaet."

#### F-15 (NIEDRIG): Naomi-Feil-Validierung — "5 Prinzipien" Quelle ungenau
- **Stelle:** Step 1.3, Zeile 112
- **Problem:** Validation nach Naomi Feil hat 14 Techniken (zentrieren, Reformulieren, Spiegeln etc.), keine "5 Prinzipien". Was hier als 5 Punkte aufgefuehrt ist, sind sinnvolle Kommunikationsregeln, aber nicht "die 5 Prinzipien der Validation". Die Verkuerzung ist didaktisch ok, aber die Quellenangabe suggeriert woertlich aus Feil.
- **Empfehlung:** "Grundprinzipien der Validation (vereinfacht nach Feil 2012)" statt "Die Validation gibt 5 Prinzipien".

## Cross-Step-Probleme

- **Knie-Hinweise inkonsistent**: Patient.ts: "Streckdefizit rechts 20°, links 10°". Step 2.3 prueft das LINKE Knie (kleinerer Defizit). Step 2.7 erwaehnt Spitzfuss als Hauptgefahr. Step 4.4 prueft "Knie und Sprunggelenk". Die linke Seite waere weniger pathologisch — didaktisch waere RECHTES Knie schluessiger fuer eine Schmerzreaktion (groesseres Streckdefizit).
- **Mobilisations-Komplikation**: Step 4.6 kennt nur 2 Optionen (eine richtig, eine falsch), keine 3. Andere Branching-Steps haben 3 Optionen — Inkonsistenz im Step-Design.
- **Sturzprotokoll-Felder**: Step 6.1 nennt 9 Felder, Step 6.4 wiederholt das. Step 2.2 (Assessment) nennt nicht, dass Vitalzeichen + Verletzung ins Sturzprotokoll fliessen. Dokumentations-Bezug schon im Beobachten waere staerker.
- **Mirtazapin als Sturzursache**: In Patient.ts ist Mirtazapin nicht in Diagnosen/Medikation aufgefuehrt. Erst in Step 3.4 + 3.6 + 6.1 taucht es auf. Patient-Plan muss das Medikament enthalten.

## Zusammenfassung

- **2 Findings HOCH** (F-01 Gesicht-zuletzt-Hygienefehler, F-04 ABCDE-Reihenfolge)
- **8 Findings MITTEL** (F-02 Cross-Step Gesicht, F-03 "kurz schauen", F-05 IAD-Faktor, F-07 § 1831 Notfall-Klausel, F-08 "Kniebeugen", F-09 Malzbier-Alkohol, F-11 Datenschutz Angehoerige)
- **5 Findings NIEDRIG** (F-06 Mirtazapin verkuerzt, F-10 Aspirationsrisiko absolut, F-12 Perspiratio, F-13 Mengen-Diskrepanz, F-14 FAST 6a, F-15 Validation 5 Prinzipien)

**Allgemeine Beobachtungen:**
- **Pseudo-Empathie-Bias**: gering. Die Sprache ist erfreulich konkret. Validation ist als Konzept sauber dargestellt, nicht als Floskel.
- **Standards-Bezug**: stark. DNQP, Kitwood, Bienstein/Froehlich, Feil sind durchgehend zitiert. Ausnahme: § 1831 BGB unscharf in der Notfall-Klausel.
- **Distraktoren**: meist plausibel als Anfaengerfehler. Score-0-Optionen sind realistische Schueler-Reflexe ("Realitaetsorientierung anwenden", "schweigend anfangen") — nicht Karikaturen.
- **B1-Konsistenz**: durchgaengig. Quellen sind in B1-Versionen vereinfacht, aber nicht weggelassen.
- **Datenschutz-Luecke**: Das Gespraech mit Tochter Ingrid ist pflegerisch hervorragend gestaltet, aber rechtlich nicht abgesichert (Betreuung/Auskunftsrecht nicht geklaert). HOCH-Verdaechtig, hier als MITTEL eingestuft, weil es eher um eine fehlende Vorbedingung im Patient-Plan geht als um falsche Pflege.
- **Hygiene-Reihenfolge**: Der schwerste fachliche Fehler ist F-01 (Gesicht zuletzt). Das ist falsch in einem Lehrtext fuer 2./3. Ausbildungsdrittel und wird so in den Examina sanktioniert.

**K.O.-Verdikt**: **FAIL** — F-01 (Gesicht-zuletzt) und F-04 (ABCDE-Reihenfolge mit Vitalzeichen am Ende) sind HOCH-Findings, die direkt fachlich falsch sind und in einer Pruefung als Fehler bewertet wuerden. Beide muessen vor Live-Deploy korrigiert werden. Nach Korrektur: PASS.

## Fixes durchgeführt — 2026-04-26
- Alle 15 Findings bearbeitet
- K.O.-Verdikt: PASS

### Detail-Log der Fixes

**F-01 (HOCH) — Hygiene-Reihenfolge in Step 4.1:** "Gesicht zuletzt" entfernt. Neu: "Reihenfolge nach Hygiene — vom sauberen zum unreinen Bereich (Gesicht/Augen zuerst, Genital-/Analbereich zuletzt), innerhalb dessen jeden Körperabschnitt in Haarwuchsrichtung." Quelle erweitert um "I Care Pflege, Kapitel Körperpflege". B1 angepasst.

**F-02 (MITTEL) — Cross-Step 4.1 vs. 4.3:** Durch F-01-Fix automatisch konsistent. Stirn-Wäsche im 2. Anlauf passt jetzt zur "Gesicht zuerst"-Hygieneregel.

**F-03 (MITTEL) — "kurz schauen" Step 1.4:** Score-3-Antwort ersetzt durch "Ich helfe dir heute früh und bleibe ein bisschen bei dir." Feedback um DNQP Beziehungsgestaltung Demenz 2018 (Verlässlichkeit/Wahrhaftigkeit) erweitert. B1 ebenso. Auch Beispiel im Erklär-Step 1.3 angepasst.

**F-04 (HOCH) — ABCDE-Reihenfolge in Step 2.2:** Vitalzeichen von Position 6 auf Position 2 verschoben (gleich nach Ansprechbarkeit). Reihenfolge jetzt: Bewusstsein → Vitalzeichen → Kopf/HWS → BESD → Extremitäten → Hämatome. Body um ABCDE-Begründung (Synkope ausschließen) und DNQP-Verweis ergänzt; Glossar-Begriffe ABCDE-Schema, Synkope, Sturzprotokoll hinzu.

**F-05 (MITTEL) — IAD-Faktor Step 2.4:** Risikoerklärung neu gerahmt: Wechsel = Schutzmaßnahme; Risiko liegt in der Feuchtigkeitsbelastung zwischen Wechseln (IAD-Risiko, DNQP Förderung Harnkontinenz / Hinweispapier IAD). Zusätzlicher Sturzrisiko-Bezug (nächtliche Polyurie). B1 ebenso.

**F-06 (NIEDRIG) — Mirtazapin verkürzt:** In Step 2.5 (categorize) und Step 3.4 (matrix) Beschreibung präzisiert: "Antidepressivum mit dosisabhängiger Sedierung, PRISCUS-Liste — Sturzrisiko".

**F-07 (MITTEL) — § 1831 BGB Notfall-Klausel Step 3.6:** Notfallklausel präzisiert: "Nur in unmittelbarer Notlage (akute Selbstverletzungs- oder Lebensgefahr, rechtfertigender Notstand nach § 34 StGB) kurzzeitig erlaubt — danach umgehend richterliche Genehmigung beantragen. Akute Sturzgefahr als Dauerzustand reicht nicht." Eindeutigere Begründung.

**F-08 (MITTEL) — "Kniebeugen" Step 4.4:** Ersetzt durch "Passive Knieflexion im Bett (Beugung im Kniegelenk, bis zur schmerzfreien Grenze — BESD beachten)". Eindeutige Fachterminologie.

**F-09 (MITTEL) — Malzbier alkoholfrei klargestellt:** patient.ts ergänzt: "alkoholfreies Malzgetränk … Kombination Mirtazapin + Alkohol wäre kontraindiziert". Step 3.5 (5 Strategien), Step 4.9 (Timer), Step 6.3 (Miktionsprotokoll) entsprechend angepasst — überall steht jetzt "alkoholfreies Malzgetränk/Malzbier".

**F-10 (NIEDRIG) — Mundschwämmchen-Aspiration Step 4.5:** Absolutes "Kein Aspirationsrisiko" ersetzt durch "geringes Aspirationsrisiko bei sachgerechter Anwendung — Schwämmchen festsitzend, Pflegekraft führt, Patient nicht alleine lassen" mit FDA-Warnung 2017. B1 ebenso angepasst.

**F-11 (MITTEL) — Datenschutz Angehörige Step 5.2:** patient.ts ergänzt um rechtliche Vertretung ("Tochter Ingrid Bauer ist seit 2024 als gesetzliche Betreuerin … bestellt — auskunftsberechtigt"). Step 5.2 Body um Vorbedingungs-Hinweis erweitert: "Bevor du Auskunft gibst, prüfst du in der Akte: Ingrid Bauer ist als gesetzliche Betreuerin … eingetragen — Auskunft ist also rechtlich zulässig (§ 203 StGB; § 1814 BGB; DSGVO Art. 9). Wäre sie nicht Betreuerin, müsstest du an Stationsleitung verweisen." Glossar erweitert um Schweigepflicht und Gesetzliche Betreuung.

**F-12 (NIEDRIG) — Perspiratio Step 5.6:** Wert von 500 ml auf 800 ml angehoben (Lehrbuchwert für 82-jährigen, immobilen Patienten ca. 700–1000 ml). Bilanz neu berechnet: 1000 − 1550 = −550 ml. Erklärung & B1-Erklärung entsprechend angepasst.

**F-13 (NIEDRIG) — Trinkmengen-Diskrepanz:** Phasenkontext (Frau Meiers Aussage) auf "ca. 1000 ml gesamt (200 Frühstück + 400 Mittag + 400 Nachmittag)" konsistent mit Step 5.1. Step-5.1-Karte ebenfalls neu formuliert.

**F-14 (NIEDRIG) — FAST 6a Definition Step 1.5:** Front der Flipcard FAST 6a präzisiert: "Schwierigkeiten beim korrekten Anziehen (z. B. falsche Reihenfolge, falsche Seite, anziehen ist möglich, aber inkorrekt)" statt "kann sich nicht mehr selbst anziehen".

**F-15 (NIEDRIG) — Validation "5 Prinzipien" Step 1.3:** Eingeleitet mit "Validation nach Feil arbeitet mit 14 Techniken (Zentrieren, Reformulieren, Spiegeln, Berührung u. a.). Für die Praxis lassen sich daraus folgende Grundprinzipien ableiten (vereinfacht nach Feil 2012)". B1-Variante ebenfalls neutralisiert.

### Cross-Step-Fixes

- **Knie-Konsistenz:** Step 2.3 (Schmerzsignal-Dialog) prüft jetzt das RECHTE Knie (passt zum 20°-Streckdefizit, didaktisch sinnvoller). Bildhinweis Step 2.1 (rechtes Bein außenrotiert) konsistent. Sturzprotokoll-Musterantwort Step 6.1 entsprechend angepasst ("rechtes Knie bei Bewegung BESD 2/10").
- **Step 4.6 Branching:** Dritte Option ergänzt ("zügig aufsetzen trotz Schreien" — Score 0, mit Kinästhetik-Begründung), so dass alle drei Branching-Steps in der Phase 3 Optionen haben.
- **Sturzprotokoll-Bezug:** Step 2.2 Body ergänzt um Hinweis "Vitalzeichen und Verletzungscheck fließen ins Sturzprotokoll (Phase 6) — saubere Erfassung jetzt = solide Dokumentation am Ende".
- **Mirtazapin in patient.ts:** Aktuelle Medikation als Auszug aufgenommen (Donepezil, Mirtazapin 15 mg z. N. mit PRISCUS-Hinweis, Tamsulosin, Macrogol). Damit wird das Medikament nicht mehr nur in den späteren Phasen sichtbar.
- **Trinkziel-Konsistenz:** Eval-Step 5.1-Karte präzisiert auf "Trinkziel 1500 ml … (heute 1000 ml — Etappe 1300 ml ebenfalls offen)". Patient.ts-Ziel (1500 ml) und Plan-Etappe (1300 ml) explizit verknüpft.

### Validierung
- TypeScript: PASS (`npx tsc --noEmit` ohne Fehler)
- Alle 15 Findings (2 HOCH, 8 MITTEL, 5 NIEDRIG) und 4 Cross-Step-Probleme adressiert
- C1- und B1-Varianten parallel angepasst
