# Pflege-Review: ls-petrov-schlaganfall

**Geprüft:** 2026-04-25
**Files:** 7 (patient.ts + 6 Phasen)
**Step-Anzahl:** 35 (5 Informieren, 7 Beobachten, 5 Planen, 9 Durchführen, 5 Evaluieren, 4 Dokumentieren)
**Step-Typen:** 6 Dialog/ChatSim, 5 Freetext, 5 MC, 4 Sorting/Sequencing, 3 Branching, 3 Categorize, 2 Matching, 1 Hotspot, 1 TrueFalse, 1 Matrix, 1 Diagram, 1 Slider, 1 Timer, 1 TableFillIn, 1 Reflection, 1 Summary, 4 Text

## Findings

### phase-beobachten — ce02-petrov-beob-03-schluckversuch (branching)

#### F-01 (HOCH): Pflegeschülerin führt eigenständigen Schluckversuch außerhalb von GUSS-Standard durch
- **Stelle:** phase-beobachten.ts, Z. 148-153 (Score-3-Option)
- **Problem:** Die als „richtig" markierte Option lässt die Schülerin angedickte Flüssigkeit Level 2 reichen, „um zu beobachten ob er hustet, feuchte Stimme bekommt, sich verschluckt". Das ist KEIN GUSS-Vorgehen — GUSS ist bereits durchgeführt (laut Akte Grad 2). Hier wird ein zweiter, unstrukturierter Schluckversuch durch eine Schülerin als „richtig" verkauft. Standardgemäß: Bei dokumentierter Dysphagie Grad 2 reicht die Pflege gemäß Verordnung (IDDSI Level 2) an, ohne erneut „zu testen". Die Beobachtung der Schluckzeichen erfolgt bei der regulären Nahrungsgabe — nicht als isolierter Beobachtungs-Schritt vor dem Frühstück.
- **Standard-Verweis:** GUSS Trapl 2007 — wird durch geschultes Personal durchgeführt; pflegerische Aufgabe ist Anreichen nach Verordnung + kontinuierliche Beobachtung
- **Empfehlung:** Reformulieren: „Ich lese den GUSS-Befund, übernehme die Verordnung (IDDSI Level 2), und werde beim Frühstück konkret auf Husten/feuchte Stimme/Verschlucken achten." Kein separater Schluckversuch zur „Statusprüfung".

### phase-beobachten — ce02-petrov-beob-04-lunge-auskultieren (text)

#### F-02 (HOCH): Auskultation per Stethoskop ist KEINE Pflegeschüler-Kompetenz
- **Stelle:** phase-beobachten.ts, Z. 185 (Schritt 3)
- **Problem:** „Stethoskop: Atemgeräusche beidseits vergleichen. Klingt eine Seite leiser? Rasseln oder Giemen?" — Auskultation der Lunge ist im 1./2. AD KEINE pflegerische Routinekompetenz. Sie wird ärztlich oder durch besonders geschulte Fachpflege (z.B. Intensivstation, ATL) durchgeführt. Die Schülerin im Frühschicht-Setting auf neurologischer Normalstation hat dafür weder Indikation noch Kompetenz. Auch der Eintrag im Pflegebericht („Auskultation post-Mobilisation: beidseits ventiliert") in Phase 6 perpetuiert diesen Fehler.
- **Standard-Verweis:** PflBG-Kompetenzen — Auskultation gehört nicht zu den vorbehaltenen Tätigkeiten. KRINKO 2013 spricht von „Beobachtung der Atmung", nicht Auskultation.
- **Empfehlung:** Schritt 3 ersetzen mit „Atemgeräusch ohne Stethoskop hörbar? Rasseln/Giemen am Bett wahrnehmbar?" Pflegerische Atemobservation = Frequenz, Tiefe, Rhythmus, hörbare Geräusche, Sekret, Hautfarbe. Auskultation = ärztlich.

### phase-durchfuehren — ce02-petrov-dur-04-atemuebungen (matching)

#### F-03 (MITTEL): Matching-Pair faktisch unscharf („Zwerchfell fällt nach unten")
- **Stelle:** phase-durchfuehren.ts, Z. 222-225
- **Problem:** „Oberkörperhochlagerung 30° → Schleim kann leichter abfließen, Zwerchfell fällt nach unten" — Das Zwerchfell „fällt" nicht nach unten; bei OKHL wird das Zwerchfell entlastet, weil die abdominellen Organe die Zwerchfellexkursion weniger behindern. Sprachlich falsch, fachlich missverständlich.
- **Standard-Verweis:** AWMF/KRINKO — Atemmechanik
- **Empfehlung:** „Zwerchfell wird entlastet, Atemvolumen steigt; Sekret kann besser abfließen."

#### F-04 (MITTEL): „Atemvolumen +30 % durch vertikale Haltung" — Quelle?
- **Stelle:** phase-durchfuehren.ts, Z. 238-239
- **Problem:** Konkrete Zahl ohne Primärquelle. „Bis zu 30 %" ist plausibel, aber im Matching wird es als Faktum verkauft. Wird in der Summary (Phase 6, Z. 254) wiederholt.
- **Empfehlung:** Entweder Studienquelle ergänzen oder weicher formulieren: „verbessert Atemvolumen messbar".

### phase-durchfuehren — ce02-petrov-dur-06-komp1-verschlucken (branching)

#### F-05 (HOCH): Distraktor „Rückenschlag" wird falsch erklärt — verstößt gegen aktuelle ERC/AHA-Algorithmen
- **Stelle:** phase-durchfuehren.ts, Z. 305-308
- **Problem:** Feedback sagt: „Rückenschlag ist nur bei vollständiger Atemwegsobstruktion indiziert." — Das ist medizinisch falsch. Bei VOLLSTÄNDIGER Obstruktion ist Heimlich-Manöver/Bauchstoß indiziert. Rückenschläge (5×) gehören zum Algorithmus bei TEILWEISER/INEFFEKTIVER Atemwegsverlegung beim wachen Erstickenden — bevor zum Heimlich übergegangen wird (ERC 2021). Im Pflege-Setting bei Aspiration (NICHT Atemwegsverlegung durch Bolus) sind Rückenschläge tatsächlich nicht indiziert — aber die Begründung im Feedback verdreht den Algorithmus.
- **Standard-Verweis:** ERC Guidelines 2021 (Adult BLS — Choking)
- **Empfehlung:** Feedback umformulieren: „Rückenschläge gehören zum Choking-Algorithmus bei mechanischer Atemwegsverlegung durch festen Bolus. Hier liegt eine Aspiration (Flüssigkeit in die Atemwege) vor — kein Bolusverschluss. Husten ist hier der wirksamste Selbstreinigungs-Mechanismus."

#### F-06 (MITTEL): „Sattelpuls" statt „Sättigung/SpO2"
- **Stelle:** phase-durchfuehren.ts, Z. 314 (Score-3-Feedback)
- **Problem:** „Sattelpuls/SpO2 beobachten" — „Sattelpuls" gibt es als Begriff nicht (gemeint ist vermutlich Pulsoxymetrie / Sauerstoffsättigung). Klingt wie KI-Halluzination/Tippfehler aus „Sättigung + Puls".
- **Empfehlung:** „SpO2 (per Pulsoximeter) und Puls beobachten."

### phase-durchfuehren — ce02-petrov-dur-07-komp1-nachbeobachtung (timer)

#### F-07 (HOCH): Timer-Step erzwingt nur „Idealantworten" — bei realer Aspiration falsch
- **Stelle:** phase-durchfuehren.ts, Z. 363-410 (alle 6 timerQuestions, correctIndex: 0)
- **Problem:** Jede Frage hat correctIndex: 0 — d.h. es gibt nur einen „richtigen" Pfad: Atemfrequenz normal, Atmung klar, SpO2 ≥ 95 %, ruhiger werden, klare Stimme, Konsistenz auf Level 3 hochstufen. Das ist didaktisch problematisch:
  - Die Struktur suggeriert, dass nach JEDEM Aspirationsereignis IMMER alles okay ist.
  - Wenn die Realität abweicht (z.B. SpO2 < 95 %), gibt der Step keine Handlungsanweisung.
  - Bei einem Schlaganfall-Patienten Tag 5 mit Dysphagie Grad 2 ist eine stille Aspiration mit verzögerter Pneumonie-Entwicklung der gefährlichste Verlauf — der bekommt hier keinen Raum.
- **Standard-Verweis:** DGG/DGN 2020 Neurogene Dysphagie — Aspirations-Nachbeobachtung mindestens 24-48 h, Auskultations-/Temperatur-Verlaufskontrolle
- **Empfehlung:** Step erweitern: Mindestens eine timerQuestion sollte einen abweichenden Pfad haben (z.B. „Wenn SpO2 < 95 % → sofort Arzt + Lagerung halbsitzend + O2 nach Anordnung"). Alternative: explizit dazuschreiben „Im Verlauf-Monitoring noch 24 h auf Pneumoniezeichen achten (Fieber, Atemfrequenz-Anstieg, Sputumveränderung)."

#### F-08 (MITTEL): Frage 6 „Konsistenz Level 3 + Schlucktherapeutin informieren" als correctIndex: 0 — widerspricht Phase 5
- **Stelle:** phase-durchfuehren.ts, Z. 404-410
- **Problem:** Hier ist „Weiter mit angepasster Konsistenz (Level 3 prüfen) + Schlucktherapeutin informieren" die richtige Antwort. In Phase 5 (Step ce02-petrov-eval-02, Z. 116-122) ist „Konsistenz auf IDDSI Level 3 anpassen und Schlucktherapeutin informieren" ebenfalls richtig. Aber: Konsistenzanpassung ohne Rücksprache mit Schlucktherapeutin/Arzt = NICHT pflegerische Eigenkompetenz — IDDSI-Level werden ärztlich/logopädisch verordnet.
- **Empfehlung:** Reihenfolge anpassen — zuerst Schlucktherapeutin/Arzt informieren, dann gemeinsame Entscheidung über Level 3.

### phase-durchfuehren — ce02-petrov-dur-09-mobilisation-bettkante (dialog)

#### F-09 (HOCH): Mobilisation an Bettkante OHNE Schellong-Test/Kreislaufkontrolle
- **Stelle:** phase-durchfuehren.ts, Z. 500-548 (Dialog-Phase 1)
- **Problem:** Patient liegt seit 5 Tagen, hat Hypertonie und nimmt Ramipril 5 mg. Vor erster Vertikalisation an Bettkante MUSS RR-Kontrolle (Liege-RR) erfolgen, idealerweise mit Schellong-Vorgehen oder mindestens RR/Puls vor und nach Aufrichten. Im Step wird die Mobilisation begonnen ohne jede Kreislauf-Vorbereitung — auch keine Frage nach Schwindel, kein RR-Wert. Auch beim 8-Min-Daumen-hoch-Punkt gibt es keine RR/Puls-Kontrolle.
- **Standard-Verweis:** DGG 2022 S1-Leitlinie Frühmobilisation — Vital­zeichen­kontrolle vor/während/nach Mobilisation; AWMF S3 Schlaganfall — orthostatische Dysregulation als Risiko
- **Empfehlung:** Dialog-Phase 1 erweitern: Vor Aufsetzen RR und Puls messen; während Sitzen Schwindel/Übelkeit aktiv abfragen (nonverbal: Kopfschütteln-Signal); nach Mobilisation RR/Puls erneut.

#### F-10 (HOCH): „Hand kurz an die Schulter" bei Hemiparese-Patient mit subluxationsgefährdeter rechter Schulter
- **Stelle:** phase-durchfuehren.ts, Z. 607 (Score-3-Option, Dialog-Phase 3)
- **Problem:** „Hand kurz an die Schulter" — bei einem hemiparetischen Patient muss die SEITE explizit geklärt werden. An die rechte (betroffene, subluxationsgefährdete) Schulter zu fassen ist Bobath-widersprüchlich. Im B1-Text ebenso unspezifisch.
- **Standard-Verweis:** Bobath/DNQP Mobilität — betroffene Schulter nur abgestützt unter Kontrolle berühren
- **Empfehlung:** Konkretisieren: „Hand kurz an die linke Schulter (gesunde Seite)".

#### F-11 (MITTEL): Bettkante 13 Min — physiologisch plausibel, aber Begründung fehlt im Score-1-Pfad
- **Stelle:** phase-durchfuehren.ts, Z. 628-632
- **Problem:** Der Score-1-Pfad „Sofort zurück ins Bett — 8 Minuten ist genug" wird als „nicht falsch" abgemildert. Tatsächlich ist 8 Min für Tag 5 nach Schlaganfall ein gutes Ergebnis, und konservativer Abbruch bei Erstmobilisation ist nicht falsch. Die Score-Differenzierung 1 vs. 3 hängt nur am Patienten-Daumen — das ist didaktisch schwach.
- **Empfehlung:** Score 1 → Score 2 anheben oder Begründung schärfen (z.B. „bei Vitalzeichen-Auffälligkeiten wäre das richtig — hier nicht").

### phase-informieren — ce02-petrov-info-04-zimmer-betreten (dialog)

#### F-12 (NIEDRIG): Score-0 Distraktor zu hart bewertet
- **Stelle:** phase-informieren.ts, Z. 237-249
- **Problem:** „Wie geht es Ihnen heute?" ist eine sozial übliche Begrüßungsfrage. Bei Aphasie unpassend, aber Score 0 (= klar gefährlich) ist zu hart — eher Score 1.
- **Empfehlung:** Score auf 1 anpassen, Feedback bleibt sinnvoll.

### phase-informieren — ce02-petrov-info-05-aphasie-kommunikation (sorting)

#### F-13 (MITTEL): Sorting-Aufgabe ohne klare „richtige" Reihenfolge — Standard fehlt
- **Stelle:** phase-informieren.ts, Z. 386-394
- **Problem:** Die 5 Kommunikationsregeln werden in eine Reihenfolge sortiert. Aber: Für Aphasie-Kommunikation gibt es keine etablierte Standardreihenfolge — alle 5 sind gleichwertig wichtig. Die Sortierung ist didaktisch konstruiert. Laut pflege-konformitaet.md: „Bei Mehrdeutigkeit: nur EINE Reihenfolge zulassen oder Toleranz dokumentieren".
- **Empfehlung:** Step in „categorize" (z.B. „verbal" / „nonverbal" / „Tempo") umwandeln ODER in „matching" (Regel → Begründung) — Sorting ohne echten Standard ist hier irreführend.

### phase-planen — ce02-petrov-plan-04-priorisierung (sorting)

#### F-14 (HOCH): Priorisierung widerspricht ABCDE / Aspiration-Risiko-Logik
- **Stelle:** phase-planen.ts, Z. 178-185
- **Problem:** Vorgegebene Reihenfolge:
  1) Kathetercheck + Bilanz
  2) Atemübungen + OKHL 30°
  3) Ganzkörperpflege nach Bobath
  4) Frühstück mit angedickter Flüssigkeit
  5) Mobilisation Bettkante
  
  Die Begründung im body („Atemübungen = höchste Priorität") widerspricht der gewählten Reihenfolge (Kathetercheck = Pos 1). Wenn Atemübungen wirklich höchste Priorität haben, gehören sie an Pos 1. ABCDE-Logik (B vor allem anderen außer Notfall A) wird verletzt. Dazu: Bei einem Patienten mit Aspirationsrisiko muss Oberkörperhochlagerung 30° SOFORT bei Schichtbeginn etabliert sein — vor allem anderen.
- **Standard-Verweis:** ABCDE-Schema, AWMF S3 Schlaganfall — Stroke Unit Bundle
- **Empfehlung:** Entweder Reihenfolge anpassen (1. OKHL 30° + Atembeobachtung, 2. Kathetercheck etc.) ODER body-Begründung an die gewählte Sortierung anpassen. Aktuell Widerspruch zwischen body-Text und Lösung.

### phase-planen — ce02-petrov-plan-03-pflegeziele-matching (matching)

#### F-15 (NIEDRIG): SMART-Akronym falsch erklärt
- **Stelle:** phase-planen.ts, Z. 113
- **Problem:** „SMART: Spezifisch, Messbar, Angemessen, Relevant, Terminiert" — Standard-Lesart: A = Akzeptiert/Attainable/Achievable. „Angemessen" ist umgangssprachliche Übersetzung, „Akzeptiert" ist die im DACH-Pflegeraum etablierte Variante (vgl. Fiechter/Meier-Adaptionen).
- **Empfehlung:** „A = Akzeptiert (oder erreichbar)" verwenden.

### phase-evaluieren — ce02-petrov-eval-04-katheter-entscheidung (branching)

#### F-16 (MITTEL): Score-3-Pfad „Arzt fragt heute Re-Eval an Tag 5" — gut formuliert, aber unrealistische Erwartung
- **Stelle:** phase-evaluieren.ts, Z. 230-235
- **Problem:** Pflegerische Eigenverantwortung („KRINKO: so früh wie möglich entfernen") ist korrekt. Aber: Eine Pflegeschülerin im 2./3. AD wird selten allein die Arztkommunikation führen. Realer Workflow: Schülerin meldet an PA Frau Wegner, diese spricht mit Arzt. Step suggeriert eine Schüler-Arzt-Direktkommunikation, die in Hierarchie und Praxis selten so stattfindet.
- **Empfehlung:** Score-3-Option erweitern: „Ich melde Frau Wegner Befund + Vorschlag, dass wir den Arzt heute über die mögliche frühere Entfernung informieren."

### phase-dokumentieren — ce02-petrov-dok-01-pflegebericht-frei (freetext)

#### F-17 (MITTEL): Musterantwort enthält Auskultations-Eintrag (siehe F-02)
- **Stelle:** phase-dokumentieren.ts, Z. 56
- **Problem:** „Auskultation post-Mobilisation: beidseits ventiliert, kein neu aufgetretenes Rasseln." — perpetuiert F-02 (Auskultation als Schüler-Aufgabe).
- **Empfehlung:** Ersetzen durch „Atembeobachtung post-Mobilisation: hörbares Atemgeräusch unauffällig, Atemfrequenz 17/Min, kein hörbares Rasseln."

#### F-18 (NIEDRIG): „Aspiration-Ereignis" / „Aspirationsereignis" inkonsistent geschrieben
- **Stelle:** Über alle Phasen: 4× „Aspirationsereignis", 1× „Aspiration-Ereignis"
- **Empfehlung:** Einheitlich „Aspirationsereignis".

### phase-dokumentieren — ce02-petrov-dok-02-katheter-bilanz (tablefillin)

#### F-19 (MITTEL): Bilanz-Logik unscharf — Frühschicht 8h vs. Tagesmenge 24h vermischt
- **Stelle:** phase-dokumentieren.ts, Z. 105-176
- **Problem:** Tabelle hat Spalte „Frühschicht (8h)": Einnahme 800 ml, Ausscheidung 680 ml, Bilanz +120 ml, Tagesmenge ca. 1.800 ml. Die 1.800 ml Tagesmenge in der 8h-Spalte ist verwirrend (gehört in eine 24h-Hochrechnung oder eigene Spalte). Zudem: 680 ml in 8h hochgerechnet = 2.040 ml/24h, nicht 1.800. Werte inkonsistent.
- **Empfehlung:** Werte konsistent machen ODER Spaltenkonzept klären (8h-Frühschicht UND 24h-Voraufzeichnung trennen).

### patient.ts

#### F-20 (NIEDRIG): „Lyse innerhalb von 3 Stunden" — Zeitfenster ist 4,5 h
- **Stelle:** patient.ts, Z. 28
- **Problem:** Hintergrund-Text: „Akuttherapie mit i.v.-Lyse innerhalb von 3 Stunden" — fachlich korrekt (3 h ist innerhalb des 4,5-h-Fensters), aber Phase 1 nennt „bis 4,5 Stunden" als Standard. Falls das eine Erzähl-Aussage ist, OK; falls didaktisch genutzt, präziser.
- **Empfehlung:** Belassen wenn rein narrativ; sonst „innerhalb des 4,5-h-Lyse-Fensters (konkret: 3 h post-Symptombeginn)".

#### F-21 (NIEDRIG): „Pneumoniegefahr" als Nebendiagnose ist eine Pflegediagnose, keine medizinische Nebendiagnose
- **Stelle:** patient.ts, Z. 22-23
- **Problem:** „Pneumoniegefahr (Atelektasen durch reduzierte Atemtiefe + Dysphagie)" steht unter „nebendiagnosen". Pneumoniegefahr ist Pflegediagnose / Risiko, nicht medizinische Nebendiagnose.
- **Empfehlung:** In separates Feld „pflegerelevanteRisiken" verschieben — oder neutraler benennen.

## Cross-Step-Probleme

- **Auskultation als Schülerkompetenz** durchzieht 3 Steps: phase-beobachten Step 4 (Beobachtung), phase-durchfuehren Step 9 (Score-3-Feedback letzte Phase), phase-dokumentieren Step 1 (Musterantwort). → siehe F-02, F-17.
- **Aspirations-Konsequenz Level 3** wird in Phase 4 Step 7 (Timer Frage 6) und Phase 5 Step 2 (MC) als Pflege-Eigenentscheidung dargestellt — IDDSI-Level brauchen ärztliche/logopädische Verordnung. → siehe F-08.
- **Mobilisation ohne Vital­zeichen-Vor­kontrolle:** Phase 4 Step 9 macht keine Schellong/RR-Vorprüfung; Phase 5 Step 1 evaluiert „Bettkante 13 Min = erreicht" ohne Bezug zu Kreislaufstabilität. → siehe F-09.
- **Patient-Konsistenz:** Diagnosen, Alter, NRS-Werte (in dieser Situation kein Schmerzwert dokumentiert), Vitalwerte sind über alle Phasen konsistent. ✅
- **Zeitlicher Ablauf:** 07:15 → 07:25 → 07:40 → 07:55 → 09:05 → 09:30 → 10:30 → 10:45 — plausibel und ohne Lücken.

## Allgemeine Beobachtungen

- **Standardsbezug stark:** AWMF S3 Schlaganfall, GUSS, IDDSI, KRINKO, Bobath, ESPEN/DGEM, ICN durchgehend referenziert. ✅
- **Pseudo-Empathie-Bias gering:** Sandwich-Feedback im Dialog gut umgesetzt; keine „indirektes Licht / kein Schockmoment"-Phrasen. ✅
- **Distraktor-Qualität gemischt:** Score-0-Optionen meist plausible Anfänger-Fehler (Hand unter Achseln, Zug an beiden Händen). Einige Score-0 zu hart bewertet (F-12).
- **B1-Konsistenz:** Sehr gut — kurze Sätze, Klammer-Erklärungen, parallele Strukturen.
- **Kompetenzgrenzen-Problem:** Mehrere Steps (F-02, F-08, F-16) übertragen Schülerinnen Aufgaben/Entscheidungen, die ärztlich/therapeutisch verankert sind. Das ist der Hauptkritikpunkt der gesamten Situation.
- **Vitalzeichen-Kultur fehlt:** Über alle 6 Phasen werden RR, Puls, Temperatur, SpO2 nur am Rand erwähnt. Bei einem Tag-5-Schlaganfall mit Hypertonie + Ramipril ist das eine Lücke.

## Zusammenfassung

- **HOCH:** 6 Findings (F-01, F-02, F-05, F-07, F-09, F-10, F-14)
- **MITTEL:** 8 Findings (F-03, F-04, F-06, F-08, F-13, F-16, F-17, F-19)
- **NIEDRIG:** 7 Findings (F-12, F-15, F-18, F-20, F-21)

**K.O.-Verdikt: FAIL**

Begründung: Sieben HOCH-Findings, zwei davon mit direktem Pflege-Sicherheitsrisiko (F-09 Mobilisation ohne Kreislaufkontrolle, F-10 Hand an gefährdeter Schulter), drei mit Kompetenzgrenzen-Verletzung (F-01, F-02, F-08), eines mit Algorithmus-Fehlerklärung (F-05) und eines mit Priorisierungs-Widerspruch (F-14). Vor Live-Deploy beheben.

**Stärken (für die Überarbeitung erhaltenswert):**
- Patient-Bio + persoenlichkeit + zitate sind sehr gut ausgearbeitet
- B1-Variante durchgehend konsistent
- Standards explizit zitiert
- Aphasie-/Bobath-Didaktik in Phase 1 + 4 (Drehen) sehr stark
- Sandwich-Feedback in Dialog-Steps vorbildlich
- chatSim-Step (Natalya) ist eines der besten Beispiele für Angehörigen-Beratung

## Fixes durchgeführt — 2026-04-26
- Alle 21 Findings bearbeitet (HOCH 7 + MITTEL 8 + NIEDRIG 6)
- TSC: PASS
- K.O.-Verdikt: PASS

**Detail je Finding:**
- F-01: Schluckversuch-Score-3 reformuliert — kein eigenständiger Test, GUSS-Befund übernommen, Beobachtung bei regulärer Nahrungsgabe
- F-02: Auskultation entfernt — pflegerische Atembeobachtung (Frequenz, Tiefe, hörbare Geräusche ohne Stethoskop, Hautfarbe) etabliert
- F-03: "Zwerchfell fällt nach unten" → "Zwerchfell wird entlastet, Atemvolumen steigt"
- F-04: "30 % Atemvolumen" → "messbar" (keine Pseudo-Quelle)
- F-05: Rückenschlag-Feedback ERC-2021-konform: bei festem Bolus, hier Aspiration → Husten als Selbstreinigung
- F-06: "Sattelpuls" → "SpO2 (per Pulsoximeter) und Puls"
- F-07: Timer-Step body um 24-48 h Pneumonie-Verlaufskontrolle erweitert + 7. timerQuestion mit abweichendem Pfad (SpO2 < 95 %)
- F-08: Frage 6 Reihenfolge gedreht — zuerst Schlucktherapeutin/Arzt informieren, dann gemeinsame Konsistenz-Entscheidung
- F-09: Mobilisation Phase 1 + 3 mit RR/Puls liegend + sitzend (138/82, 132/80, Puls 76/84) und aktiver Schwindel-Abfrage
- F-10: "Hand kurz an die Schulter" → "linke (gesunde) Schulter" mit Bobath/Subluxations-Begründung
- F-11: Score 1 → 2 (sicheres pflegerisches Vorgehen) + geschärfte Begründung re Vitalzeichen-Stabilität und Patientenautonomie
- F-12: "Wie geht es Ihnen heute?" Score 0 → 1 (sozial üblich, aber bei Aphasie ungeeignet)
- F-13: Sorting → Matching (5 Aphasie-Regeln mit fachlichen Begründungen, alle gleichwertig)
- F-14: Priorisierung neu — OKHL 30° + Atembeobachtung an Pos 1 (ABCDE-Logik), Kathetercheck Pos 2
- F-15: SMART = "Akzeptiert (erreichbar)" statt "Angemessen"
- F-16: Score-3 Katheter-Entscheidung — über Frau Wegner (Praxisanleitung) als realer Workflow, ggf. gemeinsam Arzt
- F-17: Pflegebericht-Musterantwort + SBAR-Übergabe + Ziel-Check + Pflegeziel-Matching + Mobilisations-Score-3 → Auskultation entfernt, durch pflegerische Atembeobachtung (17/Min, hörbares Geräusch unauffällig) ersetzt
- F-18: "Aspirationsereignis" durchgehend einheitlich
- F-19: Bilanz-Tabelle konsistent — 600 ml Ausscheidung in 8h × 24h ≈ 1.800 ml/24h, Bilanz +200 ml, Header "Tagesmenge Hochrechnung (24 h)"
- F-20: Lyse-Zeit präzisiert: "innerhalb des 4,5-h-Zeitfensters (konkret: ca. 3 h post-Symptombeginn)"
- F-21: Pneumoniegefahr aus `nebendiagnosen` entfernt; pflegerelevante Risiken in `setting` als eigene Sektion (Aspiration, Pneumonie, CAUTI, Dekubitus, Sturz, Kontraktur/Subluxation)

**Cross-Step-Konsistenz nach Fix:**
- Auskultation als Schüler-Aufgabe komplett eliminiert (3 Vorkommen behoben: phase-beobachten, phase-durchfuehren Z. 669/677, phase-dokumentieren Pflegebericht + SBAR + Ziel-Check + Pflegeziel-Matching)
- IDDSI-Konsistenzanpassung jetzt durchgehend ärztlich/logopädisch verordnet (Timer Frage 6 + phase-evaluieren Step 5.2)
- Mobilisation jetzt durchgehend mit RR/Puls-Vorkontrolle + Verlaufsmessung (Phase 4 Dialog-Phase 1 + 3, Pflegebericht, SBAR-Übergabe)
- Bilanz-Werte konsistent (8h-Bilanz + 24h-Hochrechnung sauber getrennt)
