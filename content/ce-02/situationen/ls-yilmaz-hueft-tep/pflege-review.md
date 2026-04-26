# Pflege-Review: ls-yilmaz-hueft-tep

**Geprüft:** 2026-04-25
**Files:** 7 (6 Phasen + patient.ts)
**Step-Anzahl:** 27 (5+5+4+6+3+3 Kern + Optionale: 1+2+1+2+1+1)
- davon 2 Dialog (multi-phase), 5 MC, 1 Hotspot, 1 Comparison, 2 Categorize, 1 TrueFalse, 2 Sorting, 1 Sequencing, 2 Branching, 1 Timer, 1 Slider, 1 Flipcard, 1 Cloze, 1 Matching (P3), 1 Selfrating, 1 FillIn, 1 Reflection, 2 Freetext, 1 Wordorder, 1 TableFillIn, 1 Summary, 1 weiteres Matching (P6), 1 weiteres Selfrating (P5).

## Findings

### phase-beobachten — ce02-yilmaz-beob-04-thrombose-virchow (categorize)

#### F-01 (HOCH): Diabetes als „Gefäßwandschaden" der Virchow-Trias didaktisch fragwürdig
- **Stelle:** phase-beobachten.ts, Zeile 270–273 (`categoryItems[4]`)
- **Problem:** „Diabetes mellitus — Gefäßveränderungen chronisch" wird der Säule „Gefäßwandschaden" zugeordnet. Diabetische Mikro-/Makroangiopathie ist primär ein arterieller Befund — die Virchow-Trias bezieht sich aber auf die venöse Thrombogenese (TVT). In den DGG-S2k-Leitlinien wird Diabetes als Risikofaktor v.a. der Hyperkoagulabilität (erhöhte PAI-1, Fibrinogen, Thrombozytenaktivierung) zugerechnet.
- **Standard-Verweis:** DGG (2022) S2k-Leitlinie tiefe Beinvenenthrombose; Virchow-Trias für venöse Thrombogenese.
- **Empfehlung:** Distraktor-Item „Diabetes mellitus" entweder entfernen oder als Hyperkoagulabilität (correctCategory: 2) und im explanation-Text präzisieren („veränderte Gerinnungsfaktoren bei chronischer Hyperglykämie"). Alternativ: Item ersetzen durch klareres Beispiel wie „postoperative Schwellung der Beinvenen durch direkten OP-Zugang" → Gefäßwandschaden.

### phase-beobachten — ce02-yilmaz-beob-05-thrombose-klinisch (truefalse)

#### F-02 (MITTEL): Homans-Zeichen — Praxis-Hinweis fehlt
- **Stelle:** Zeile 296 (body) + Zeile 309–313 (truefalse-Card 1)
- **Problem:** Die Pflegekraft drückt im Body „leicht auf die Wade" — das ist faktisch das Pratt-Zeichen, nicht Homans (das ist Dorsalextension des Fußes bei gestrecktem Knie). Die TF-Karte schreibt korrekt, dass Homans niedrige Spezifität hat — aber moderne Leitlinien (DGG 2022) raten explizit gegen aktive Provokation klinischer Zeichen, weil das Embolierisiko erhöht. Die Schülerin lernt hier eine veraltete Untersuchungstechnik.
- **Standard-Verweis:** DGG (2022) S2k-Leitlinie TVT — klinische Provokationszeichen werden nicht mehr empfohlen.
- **Empfehlung:** body-Text umformulieren: „Du inspizierst beide Beine im Seitenvergleich (Schwellung, Umfang, Hauttemperatur, Verfärbung). Du fragst Frau Yilmaz nach Schmerzen in der Wade — sie sagt: 'Das tut ein bisschen weh.'" Aktive Druckprovokation streichen oder explizit als veraltet markieren.

### phase-planen — ce02-yilmaz-plan-03-massnahmen-sortieren (sorting)

#### F-03 (MITTEL): Mustafa-Information zu spät in der Reihenfolge
- **Stelle:** Zeile 165–172 (sortItems)
- **Problem:** Item „Ehemann Mustafa durch Frau Yilmaz kurz erklären lassen was geplant ist" steht an Position 5 — nach Frau-Yilmaz-Information aber vor dem eigentlichen Aufstehversuch. In der Praxis und im patient.ts (Zeile 28) ist genau dokumentiert, dass Mustafa „nicht weiß, dass er damit Luxationsgefahr riskiert". Wenn der Aufstehversuch beginnt und er nicht vorab informiert ist, ergibt sich exakt die Eskalation aus Phase 4 (Step 4.4). Also: didaktisch ist „Mustafa zwischen Yilmaz-Aufklärung und Aufstehen einbeziehen" plausibel — aber die Karte sagt nicht, dass auch das Reihenfolge-Item vor „Zimmer vorbereiten" denkbar wäre. Mehrdeutigkeit nicht offen gelegt.
- **Standard-Verweis:** Pflegekonformität-Regel „Sorting: Bei Mehrdeutigkeit: nur EINE Reihenfolge zulassen oder Toleranz dokumentieren".
- **Empfehlung:** explanation/Toleranz im Step ergänzen: „Items 4+5 (Frau Yilmaz informieren / Mustafa via Frau Yilmaz informieren) können auch in umgekehrter Reihenfolge stehen — die Logik ist: Patientin verstanden → Angehöriger eingeweiht → praktisch vorbereiten."

### phase-planen — ce02-yilmaz-plan-02-pesr-formulieren (cloze)

#### F-04 (NIEDRIG): „Vollständig orientiert" als Ressource — präzise, aber Distraktoren einseitig
- **Stelle:** Zeile 121–125
- **Problem:** Korrekt-Antwort „vollständig" für Orientiertheit ist ok. Distraktoren „kaum / leicht eingeschränkt / nicht" sind alle pflegerisch alarmierend — keine plausible Verwechslung möglich. Schwacher Distraktor.
- **Empfehlung:** Distraktor „zeitlich eingeschränkt aber sonst orientiert" einbauen — das ist eine realistische Falsch-Einschätzung bei älteren post-OP-Patienten.

### phase-durchfuehren — ce02-yilmaz-dur-01-mobilisation-reihenfolge (sequencing)

#### F-05 (HOCH): „Beide Beine gleichzeitig schwingen" widerspricht Hüft-TEP-Lagerungsvorschrift
- **Stelle:** Zeile 60–63 (Item s4)
- **Problem:** „Beide Beine gleichzeitig über die Bettkante schwingen — nicht einzeln (Lagerungsvorschrift: Hüftbeugung kontrollieren)". Klinischer Standard nach Hüft-TEP ist genau umgekehrt: das **operierte Bein zuerst** über die Bettkante (in Streckung gehalten / mit anderem Bein unterstützt), dann das gesunde Bein nachziehen — beim Drehen über das gesunde Bein („Bridge-and-Twist" wird vermieden). Gleichzeitiges Schwingen erzeugt Adduktion/Innenrotation = Luxationsrisiko. Das Begründungs-Statement im Item ist falsch.
- **Standard-Verweis:** Deutsche Gesellschaft für Unfallchirurgie (2022) S2k-Endoprothetik Hüfte; AOK-Patientenleitlinie Hüft-TEP-Mobilisation; Pflege-heute Kap. „Endoprothetik post-OP".
- **Empfehlung:** Item s4 umformulieren: „Operiertes Bein zuerst — in Streckung über die Bettkante führen, gesunde Beinseite folgt. Patientin dreht aktiv mit, Pflege sichert seitlich am Becken (Adduktion/Innenrotation vermeiden)." → Aufnahme der Kinästhetik-Sprache (Patient bewegt selbst).

#### F-06 (HOCH): „3 Min. an der Bettkante sitzen" ohne RR-Messung = Pseudo-Schellong
- **Stelle:** Zeile 66–67 (Item s5)
- **Problem:** „3 Minuten an der Bettkante sitzen: Schwindel abfragen, Kreislauf anpassen lassen". Genau das Anti-Pattern aus pflege-konformitaet.md: 3-Min-Warten ohne RR-Messung ist KEIN Orthostase-Schutz. Schellong-Test = RR liegen → ≥1 Min sitzen → RR sitzen → erst dann Aufstehen. Der Step suggeriert, dass „warten" ausreicht.
- **Standard-Verweis:** pflege-konformitaet.md (Anti-Patterns Tabelle, Zeile 16); DGN Schellong-Test 2018.
- **Empfehlung:** Item s5 umformulieren: „RR liegend gemessen (zuvor). 3 Min an Bettkante sitzen, Schwindel abfragen, RR sitzend messen — Differenz ≥ 20 mmHg systolisch = Aufstehen verschieben." Zusätzlich Step s5a einfügen oder s5 splitten.

#### F-07 (MITTEL): „Du stehst seitlich-hinter ihr" — Sicherungsposition unscharf
- **Stelle:** Zeile 70–71 (Item s6)
- **Problem:** „Frau Yilmaz stützt sich auf die Unterarmgehstützen, du stehst seitlich-hinter ihr". Bei Erstmobilisation nach Hüft-TEP ist der Standard: Pflegekraft auf der OP-Seite (rechts bei Frau Yilmaz), seitlich am Becken/Rumpfgurt sichern, NICHT unter den Achseln. Bei „seitlich-hinter" wäre die Pflegekraft im Falle eines Sturzes hinten und kann nur den Sturz nach hinten abfangen — nicht die Adduktion/Innenrotation des operierten Beins.
- **Standard-Verweis:** Kinästhetik (Hatch/Maietta), DGU S2k-Endoprothetik; pflege-konformitaet.md Anti-Pattern „unter den Achseln greifen".
- **Empfehlung:** „Pflegekraft steht auf OP-Seite (rechts), eine Hand am Beckengurt/Hüftgurt, eine Hand am Rumpf — nicht unter den Achseln, nicht hinter ihr." Bei zweiter Person: gegenüber.

### phase-durchfuehren — ce02-yilmaz-dur-02-orthostatisch-branching (branching)

#### F-08 (MITTEL): Orthostase-Erklärung „Antidiabetika senken RR" pflegerisch unscharf
- **Stelle:** Zeile 102–103 (body)
- **Problem:** „Antidiabetika (manche senken RR)" — orale Antidiabetika (Metformin, Sulfonylharnstoffe) sind nicht primär RR-senkend. Hypotonie kann durch Hypoglykämie eintreten — das ist aber ein anderer Mechanismus als orthostatische Dysregulation. Im Feedback Step 4.3 wird dies (Zeile 215–219) bereits selbstkorrigiert (orale Antidiabetika nicht primärer Grund). Die Inkonsistenz zwischen Step 4.2 body und Step 4.3 Feedback bleibt.
- **Standard-Verweis:** Cross-Step-Konsistenz (pflege-konformitaet.md).
- **Empfehlung:** body Step 4.2 umformulieren: „Bettlägerigkeit (Gefäßregulation gedämpft), postoperative Volumenverschiebung, Schmerzbedingte autonome Aktivierung." Antidiabetika streichen oder als „Hypoglykämie-Risiko separat" markieren.

#### F-09 (NIEDRIG): „RR sitzend nach 3 Min: 98/62" — Differenz-Definition uneinheitlich
- **Stelle:** Zeile 121 (Feedback)
- **Problem:** „Differenz > 30 mmHg systolisch = klinisch relevante Orthostase". Internationaler Konsens (AAS Consensus 2011): Abfall ≥ 20 mmHg systolisch oder ≥ 10 mmHg diastolisch innerhalb 3 Min nach Aufrichtung = orthostatische Hypotonie. Die im Pflegeplan-Step 6.2 (Zeile 104) genutzte Schwelle „> 20 mmHg" ist konsistenter mit Standard.
- **Standard-Verweis:** Freeman et al. (2011): Consensus statement on definition of orthostatic hypotension. Auton Neurosci.
- **Empfehlung:** Schwelle vereinheitlichen auf „≥ 20 mmHg systolisch oder ≥ 10 mmHg diastolisch" — sowohl in Step 4.2 Feedback als auch Pflegeplan-Step 6.2.

### phase-durchfuehren — ce02-yilmaz-dur-04-mustafa-branching (branching)

#### F-10 (NIEDRIG): „Frau Yilmaz als Vermittlerin" bei akuter Standsituation problematisch
- **Stelle:** Zeile 307–311
- **Problem:** Frau Yilmaz steht zum ersten Mal nach Hüft-TEP (NRS 4, gerade aktiv stabilisiert). Sie zur Vermittlerin zu machen, während Mustafa eingreift, kann ihre Konzentration auf Stand/Schmerz unterbrechen — Sturzgefahr. Score-3-Option ist kommunikativ schön, aber praktisch zweitrangig: Sicherheit zuerst.
- **Standard-Verweis:** DNQP Sturzprophylaxe; ABCDE-Logik.
- **Empfehlung:** Score-3-Feedback ergänzen: „Erst Frau Yilmaz sicher (zurück) zum Stuhl/ans Bett — DANN Mustafa über Frau Yilmaz erklären." Aktuelle Lösung suggeriert paralleles Stand-Vermitteln.

### phase-durchfuehren — ce02-yilmaz-dur-08-schmerzdoku-optional (tablefillin)

#### F-11 (MITTEL): NRS 7 „beim Aufstehen" — Mobilisation hätte abgebrochen werden müssen
- **Stelle:** Zeile 528–534 (Row 2: 09:00, NRS 7, „Aufstehversuch 1 — Orthostase, abgebrochen")
- **Problem:** NRS 7 wird als Wert während Aufstehversuch 1 dokumentiert. Cross-Step zu phase-informieren Step 1 (Übergabe gestern: NRS 7, abgebrochen) — heute wieder NRS 7 wäre ein zweiter Abbruch wegen Schmerz. Im Sequencing Step 4.1 (s8) steht: „NRS > 7: sofort hinsetzen, Plan anpassen." NRS 7 = Grenzwert unklar (≥7 oder >7?). Auch im Feedback Step 4.1 wird die Zeitlinie 09:00 aber als „Orthostase" — nicht als „NRS-getriggerter Abbruch" — bezeichnet. Welcher Abbruchgrund war primär?
- **Standard-Verweis:** DNQP Schmerz; Konsistenz Phase 4 ↔ Phase 4 Doku.
- **Empfehlung:** Entweder Row 2 NRS-Wert auf 5 oder 6 senken und Orthostase als alleinigen Abbruchgrund festlegen, ODER Sequencing Step 4.1 s8 auf „NRS ≥ 7" anpassen und Doku konsistent machen.

### phase-evaluieren — ce02-yilmaz-eval-01-massnahmen-check (categorize)

#### F-12 (NIEDRIG): „Wadenschmerz Doppler beauftragt → Ergebnis ausstehend" als richtige Kategorie
- **Stelle:** Zeile 71–74
- **Problem:** Item korrekt zu Kategorie „Ergebnis ausstehend" zugeordnet — aber die schülerseitige Lernpointe wäre stärker, wenn dazu im Categorize-Feedback erwähnt würde, dass Wadenschmerz bei Hüft-TEP-Patienten unter Antikoagulation nicht „abwarten" heißt — die Maßnahme (Arzt informiert, Doppler) ist korrekt eingeleitet. Der Distraktor „Nicht vollständig gelöst" wäre für eine Schülerin verlockend.
- **Empfehlung:** explanation-Feld nachreichen, das den Unterschied „Maßnahme abgeschlossen, Diagnostik läuft" vs. „pflegerisch ungelöst" begründet.

### phase-dokumentieren — ce02-yilmaz-dok-01-pflegebericht-frei (freetext)

#### F-13 (MITTEL): Musterantwort enthält RR-Differenz nicht — Bewertungskriterien lückenhaft
- **Stelle:** Zeile 50–61
- **Problem:** Musterantwort: „nach 2 Min. orthostatische Hypotonie (RR sitzend 98/62 mmHg)". RR liegend wird nicht genannt — ohne diesen Vergleichswert ist die Diagnose Orthostase nicht dokumentiert begründet (nur RR sitzend reicht nicht). Bewertungskriterien fragen nicht nach RR-Werten.
- **Standard-Verweis:** § 630f BGB — Dokumentation muss nachvollziehbar sein.
- **Empfehlung:** Musterantwort: „RR liegend 128/78 mmHg, RR sitzend nach 3 Min 98/62 mmHg, Differenz syst. 30 mmHg = orthostatische Hypotonie." Bewertungskriterium ergänzen: „RR-Werte liegend UND sitzend dokumentiert?"

## Cross-Step-Probleme

- **CS-1 (MITTEL):** Mobilisationsstufe 3 in patient.ts (Zeile 19) sagt „Belastung rechts bis 20 kg". Diese Teilbelastung wird in keinem einzigen Step thematisiert — weder im Sequencing 4.1 noch im Dialog 4.3 („3 Schritte"). Schülerin lernt nicht, dass Hüft-TEP zementiert oft Vollbelastung erlaubt, während Teilbelastung 20 kg ein Sondersetting ist. Empfehlung: in Step 4.1 oder 4.5 einen Hinweis zur Teilbelastung einbauen oder patient.ts auf „belastungsstabil zementiert" vereinheitlichen.

- **CS-2 (NIEDRIG):** Lagerungsvorschrift „Kopflagerung max. 30°" (Step 1.4 Matching, Zeile 278–280) ist nicht universeller Standard nach Hüft-TEP — Beugung im Hüftgelenk (nicht Kopfteil-Winkel) ist limitiert. Bei flacher Liegeposition + Kopf-30° sind 90° Hüftbeugung kaum erreichbar; bei aufgestelltem Kopfteil + angezogenen Beinen schon. Die Begründung „zu starkes Aufsitzen überschreitet 90°" ist zwar sachlich korrekt, aber die Regel „Kopflagerung max. 30°" ist keine Endoprothetik-Regel — sie ist eine Dekubitus-Regel. Empfehlung: Begründungstext schärfen: „Kopflagerung max. 30° → zwei Gründe: Scherkräfte am Steißbein UND Vorbeugung übermäßiger Hüftbeugung beim Aufsitzen."

- **CS-3 (NIEDRIG):** Wadenschmerz-Episode taucht erst in Phase 5 als „Arzt informiert, Doppler beauftragt" auf — aber der initiale Befund kommt aus Phase 2 Step 5 (TrueFalse). In Phase 3 (Planung) und Phase 4 (Durchführung) fehlt die Maßnahme „Arzt informieren wegen Wadenschmerz" komplett. Schülerin lernt nicht, wann genau diese Eskalation passiert. Empfehlung: in Phase 3 Sorting oder Phase 4 als zusätzlichen Step die Arzt-Information einbauen.

## Zusammenfassung

- **HOCH:** 3 (F-01 Virchow-Diabetes-Zuordnung, F-05 beidseitiges Beinschwingen widerspricht TEP-Vorschrift, F-06 3-Min-Warten ohne Schellong-RR)
- **MITTEL:** 6 (F-02 Homans, F-03 Sorting-Toleranz, F-07 Sicherungsposition, F-08 Antidiabetika-RR, F-11 NRS-7-Konsistenz, F-13 Pflegebericht-RR; plus CS-1)
- **NIEDRIG:** 4 (F-04 Distraktor, F-09 RR-Schwelle, F-10 Vermittler-Timing, F-12 Categorize-Feedback; plus CS-2, CS-3)

**Allgemeine Beobachtungen:**
- Sehr starke Patient-Charakterisierung (patient.ts) — Yilmaz lebt durch alle Phasen konsistent, Mustafa als Ressource sauber inszeniert. Sprachebene B1 vs. C1 differenziert.
- Standards-Bezug (DNQP, NPUAP, DGU S2k, Virchow, SBAR) durchgehend zitiert — vorbildlich.
- Sandwich-Feedback in Dialog-Steps konsequent umgesetzt.
- Pseudo-Empathie-Bias: NIEDRIG. Keine „indirektes Licht"-Stellen, NRS-Werte werden nicht bagatellisiert (NRS 6 = klar dokumentationspflichtig dargestellt).
- Hauptlücke ist das **postoperativ-orthopädische Detailwissen** (Hüft-TEP-spezifische Mobilisation, Schellong-Test). Drei HOCH-Findings davon — sie müssen vor Live-Deploy korrigiert werden.
- Die Adduktionsverbots-Logik ist im Lagerungs-Matching (Step 1.4) korrekt drin, fehlt aber in der dynamischen Mobilisation (Step 4.1).
- Thromboseprophylaxe-Trio (Antikoagulation Fondaparinux + mechanisch Strümpfe + Mobilisation) ist sauber abgedeckt.
- Schmerzmanagement-Pfad (Analgesie 30 Min vor Mobilisation) ist die didaktische Pointe und wird in Step 3.1 → 4.1 → 6.2 mehrfach verankert — sehr gut.

**K.O.-Verdikt: FAIL**
3 HOCH-Findings (F-01, F-05, F-06) sind pflegerisch direkt falsch und müssen vor Live-Deploy korrigiert werden. Insbesondere F-05 (beidseitiges Beinschwingen) und F-06 (3-Min-Warten als Schellong-Ersatz) sind in Praxis-Tests durch eine Pflegelehrperson sofort kritikfähig.
