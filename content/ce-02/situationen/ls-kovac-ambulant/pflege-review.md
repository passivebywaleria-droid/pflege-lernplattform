# Pflege-Review: ls-kovac-ambulant

**Geprüft:** 2026-04-25
**Files:** 7 (6 Phasen + patient.ts)
**Step-Anzahl:** 36 (5+6+5+7+4+4 Kern + 1+1+2+2+2+3 Optional)
**Step-Typen:** text, sorting, highlight, dialog, comparison, freetext, categorize, calculation, truefalse, branching, mc, sequencing, fillin, matrix, matching, timeline, summary, errorspot, flipcard
**Setting:** Ambulante Pflege, SGB-XI-Kontext (Pflegegrad 3, 2× tägl. Hausbesuch)

---

## Findings

### patient.ts / patient-plan.md

#### F-01 (HOCH): Inkonsistenz Pflegegrad ↔ Hausbesuchsfrequenz vs. SGB XI
- **Stelle:** patient.ts Z. 24, patient-plan.md "Stammdaten"
- **Problem:** Pflegegrad 3 mit nur 2× tägl. Hausbesuch (kein nächtlicher Einsatz) ist im häuslichen Setting bei einer alleinlebenden COPD-III-Patientin mit Insomnie, Sturzrisiko (Kontraktur, Schwindel) und Exsikkose-Neigung pflegerisch knapp bemessen — passt zur Realität vieler Pflegedienste, aber: die Situation tut so, als sei das ausreichend abgedeckt. Bei FEV1 30–50 % + NYHA II + nächtl. Erwachen + Schwindel beim Aufstehen ist das Sturz-/Dekompensationsrisiko in der Nacht real. Lernende erfahren nicht, dass dies pflegerisch ein Spannungsfeld ist (was deckt SGB XI § 36 vs. § 37 ab?).
- **Standard-Verweis:** SGB XI § 14, § 15 (Pflegegrad-Module), § 36 (Pflegesachleistung), DNQP Sturz 2013/2022
- **Empfehlung:** In patient-plan.md kurzen Hinweis ergänzen: "Pflegegrad 3 = 1.497 € Sachleistung/Monat (2024). Reicht im Schnitt für 2× tägl. Besuch à 30–45 Min. Nachtdienst nicht enthalten — relevantes Spannungsfeld bei Frau Kovačs Risikoprofil." Optional als Vertiefungs-Step in Phase 1.

#### F-02 (NIEDRIG): "FEV1 30–50 %" GOLD-3
- **Stelle:** patient.ts Z. 13, patient-plan.md Z. 83
- **Problem:** GOLD-3 ist FEV1 30–49 % (nicht 30–50 %). 50 % ist GOLD-2 (Obergrenze).
- **Standard-Verweis:** GOLD-Report COPD 2023, Tabelle 2.4
- **Empfehlung:** Auf "FEV1 30–49 %" anpassen (in patient.ts Diagnosen + patient-plan.md). In phase-beobachten.ts Z. 463 ist es bereits korrekt mit "30–49 %" formuliert — Inkonsistenz zwischen den Files.

---

### phase-informieren

#### F-03 (MITTEL): Begriff "ambulante Übergabe ist die gleiche Information wie SBAR" verkürzt
- **Stelle:** info-01-uebergabe-lesen, contentC1 body
- **Problem:** "Sie ist kürzer als eine SBAR-Übergabe im Krankenhaus — aber die gleichen Informationen müssen drin sein." Der reale Übergabezettel von Petra hat aber kein A (Assessment) und kein R (Recommendation) — nur die Situation und Hintergrund. Lernende könnten den Eindruck bekommen, dass das eine vollwertige SBAR ist.
- **Standard-Verweis:** SBAR-Kommunikation (Haig et al. 2006, Aktion Bündnis Patientensicherheit)
- **Empfehlung:** Eintrag in MC oder Reflexionsfrage einbauen: "Welche SBAR-Elemente fehlen in Petras Zettel?" — A (was hat sie eingeschätzt?) und R (was schlägt sie vor?). Lerneffekt: Realistische ambulante Praxis ist *nicht* automatisch SBAR-konform.

#### F-04 (NIEDRIG): "Mindest-Tagesmenge 1.500 ml" (DNQP) vs. Herzinsuffizienz NYHA II
- **Stelle:** info-opt-a-glossar (impliziert), beob-05-trinkprotokoll-auswerten
- **Problem:** Der Wert 1.500 ml als Mindest-Tagesmenge stammt aus DGE/DNQP-Empfehlungen für Gesunde. Bei Herzinsuffizienz NYHA II + Furosemid ist die individuelle Trinkmenge ärztlich festzulegen (oft 1.200–1.500 ml als Obergrenze, nicht Untergrenze). Die Erklärung in beob-05 räumt das später ein ("nicht unbegrenzt trinken"), aber der Aufgabentext nennt 1.500 ml ungekennzeichnet als Pflicht-Ziel.
- **Standard-Verweis:** ESC Heart Failure Guidelines 2021; DNQP Kontinenzförderung 2014
- **Empfehlung:** In der Aufgabenstellung explizit machen: "Allgemeine DNQP-Empfehlung 1.500 ml — bei Frau Kovač ggf. ärztlich abweichend festgelegt. Berechne den Sollwert nach allgemeiner Empfehlung."

---

### phase-beobachten

#### F-05 (MITTEL): SpO2-Zielkorridor 88–92 % bei COPD III ohne Sauerstoffabhängigkeit
- **Stelle:** beob-02-copd-atemzeichen, dur-opt-b-gold-warnsignale
- **Problem:** Der Zielkorridor 88–92 % gilt **bei akuter Exazerbation und Sauerstofftherapie** (BTS Guideline 2017, GOLD 2023 Kap. Exazerbation). Im stabilen Zustand bei COPD III ohne O2-Therapie sind viele Patient:innen normoxisch (>92 %). Den Korridor pauschal als "normal bei COPD III" zu lehren, kann dazu führen, dass eine fallende SpO2 bagatellisiert wird. Auch GOLD definiert "Hypoxie-Atemanreiz" als veralteten Mechanismus, der heute differenzierter dargestellt wird.
- **Standard-Verweis:** GOLD-Report COPD 2023, BTS Emergency Oxygen Use 2017
- **Empfehlung:** Klarstellen: "Bei akuter Atemnot/Exazerbation und Sauerstofftherapie ist der Zielwert 88–92 %. Im stabilen Zustand sind höhere Werte (>92 %) normal. Eine fallende SpO2 unter 92 % bei Frau Kovač ist im stabilen Zustand klärungsbedürftig." Außerdem in dur-opt-b den Schwellenwert "<88 % = Notarzt" entkoppeln vom Zielkorridor — sonst inkonsistent.

#### F-06 (MITTEL): Categorize "Schmerz VAS 3/10 = Normalbefund"
- **Stelle:** beob-03-gelenke-assessment, categoryItems[2]
- **Problem:** Schmerz VAS 3/10 ist *milder* Schmerz, aber **nicht "Normalbefund"**. Nach DNQP Schmerz ist ab VAS ≥1 (manche Quellen ≥3) eine Schmerzdokumentation vorzunehmen, ab ≥4 Interventionspflicht. VAS 3/10 in einem chronisch schmerzhaften Kontraktur-Knie ist diagnostisch zumindest erwartbar — aber pflegerisch *nicht* "ohne Befund". Den Schmerz in die Kategorie "Normalbefund" zu sortieren, widerspricht dem DNQP-Prinzip "Schmerz ist das, was der Patient sagt".
- **Standard-Verweis:** DNQP Expertenstandard Schmerzmanagement in der Pflege 2020
- **Empfehlung:** Entweder Item streichen oder in eine vierte Kategorie "milder/erwartbarer Befund — dokumentieren, beobachten" einsortieren. Zweite Option: Item umformulieren auf "kein Schmerz angegeben" und dann als Normalbefund. **HOCH-Verdacht in Schmerz-Sensibilität — bitte dringend anpassen.**

#### F-07 (NIEDRIG): "Umfangsdifferenz 2 cm = akutes Warnsignal"
- **Stelle:** beob-03-gelenke-assessment, categoryItems[4]
- **Problem:** 2 cm Umfangsdifferenz im Knie-/Wadenbereich kann auf eine TVT hinweisen, kann aber bei Herzinsuffizienz mit asymmetrischen Ödemen oder bei muskulärer Asymmetrie auch chronisch sein. Pauschal "akutes Warnsignal" ist zu definitiv — die Wells-Score-Logik (1 Punkt für ≥3 cm Differenz) wird hier vereinfacht.
- **Standard-Verweis:** Wells-Score (Wells et al. 2003), AWMF-Leitlinie Venenthrombose
- **Empfehlung:** Item präzisieren: "*Neue* Umfangsdifferenz von ≥2 cm gegenüber Vortagen" → dann eindeutig Warnsignal. Aktuell könnte ein chronisches Ödem fälschlich als Notfall eingestuft werden.

#### F-08 (NIEDRIG): "Frau Kovač sieht dich kurz an" als Patient-Response in Dialog
- **Stelle:** beob-04-schlafanamnese, dialogPhases[0].options[1].patientResponse
- **Problem:** Bühnenanweisung ohne nachfolgendes Patientenzitat. Anti-Pattern aus pflege-konformitaet.md ("Sie sagt:" als context-Ende). Hier zwar kein leeres "Sie sagt", aber die Bubble enthält nur "Frau Kovač sieht dich kurz an. 'Weil ich es will.'" — das passt, ist OK; nur als Hinweis: der Renderer muss splitten.
- **Empfehlung:** Renderer-Test, dass Body-Language (vor `"..."`) korrekt vom Speech (`"..."`) getrennt wird. Inhaltlich passt es.

---

### phase-planen

#### F-09 (MITTEL): SMART-Ziel "Knie-Bewegungsübungen 1× täglich"
- **Stelle:** plan-05-ziele-smart, fillin correctIndex 0 = "in 3 Tagen | 1.200 ml | 1× | 5 Wiederholungen"
- **Problem:** DNQP Mobilität fordert bei Kontrakturgefahr **mehrfach tägliche Bewegung** (mind. 2–3× täglich). 1× täglich Knie-Bewegungsübungen reichen nicht zur Kontrakturprophylaxe — auch nicht im häuslichen Setting. Das ist als SMART-Ziel formuliert, aber das M (Maß) ist *zu niedrig* angesetzt. Wenn Frau Kovač das Ziel erreicht, hat sie immer noch zu wenig Mobilisation.
- **Standard-Verweis:** DNQP Erhaltung und Förderung der Mobilität 2017/2024, Empfehlung 2.4
- **Empfehlung:** Ziel 2 anpassen: "2× täglich, 10 Wiederholungen pro Seite" oder "selbstständig zwischen den Pflegebesuchen mind. 2× pro Tag" — sonst lernen Schüler:innen ein Sub-Standard-Ziel. Phase 5 (matching) lobt "Übungen 2× allein wiederholt" als Erfolg — das ist bereits 2× und passt zum Standard, ist aber inkonsistent mit dem Plan-Ziel von 1×.

#### F-10 (MITTEL): Branching "Druck ausüben" — Frau Kovač Reaktion fehlt
- **Stelle:** plan-03-kompressions-branching
- **Problem:** Anders als bei den Dialog-Steps fehlt im Branching die *konkrete Patientenreaktion* auf die Pfade. Score 0 (Druck) gibt nur Feedback aus Lehrer-Sicht — aber nicht: was sagt Frau Kovač? Wie reagiert sie? Im Vision-First-Sinne ("Konsequenz im Verhalten zeigen") fehlt der Lernimpact. Frau Kovač *müsste* hier verbal heftig reagieren ("Dann gehen Sie. Ich will Sie nicht in meiner Wohnung."). Stattdessen nur abstraktes Feedback.
- **Standard-Verweis:** pflege-konformitaet.md Branching-Pflichtmuster, § 1901a BGB
- **Empfehlung:** Bei jedem Branching-Pfad eine Patientenreaktion ergänzen — gerade in Frau Kovačs Wohnung mit ihrer Autonomie ist die *Konsequenz* (Hausverbot, Beschwerde beim Pflegedienst, Vertrauensbruch) der eigentliche Lerngehalt.

#### F-11 (NIEDRIG): Matrix-Quadrant "Hausarzt informieren = Akut"
- **Stelle:** plan-01-zeitbudget-matrix, items hausarzt correctQuadrant: 3
- **Problem:** "Hausarzt informieren: Trinkmenge + Obstipation seit 4 Tagen" ist im correctQuadrant 3 = "Akut + Arzt informieren diese Woche". Logisch widersprüchlich: "Akut" und "diese Woche" passen nicht zusammen. Bei Obstipation 4 Tage ist es nicht akut (Subileus-Verdacht erst ab ~5–7 Tagen + Bauchschmerz/Erbrechen).
- **Standard-Verweis:** Pflege Heute Kapitel Verdauung
- **Empfehlung:** Quadrant-Logik klären — entweder "Diese Woche / Beratung" (Quadrant 0 oder 1) ist gemeint, dann Label korrigieren; oder Item gehört zu "Akut + heute Arzt anrufen". Aktuell mehrdeutig.

---

### phase-durchfuehren

#### F-12 (HOCH): Lippenzyanose als Bagatelle behandelt — pflege-fachlich K.O.
- **Stelle:** dur-03-komplikation-kurzatmigkeit, Pfad C ("Notarzt rufen") als isCorrect: false bewertet
- **Problem:** Der Step bewertet "Sofort Notarzt bei Zyanose" als "zu schnell". Aus pflegerisch-rechtlicher Sicht ist das problematisch:
  - Sichtbare Lippenzyanose bei COPD III + AF 22/Min + Belastungsdyspnoe ist ein klinisches Warnzeichen (SpO2 vermutlich <88 %).
  - Pfad A (stoppen, beobachten, Lage, Frischluft) ist als Erstmaßnahme korrekt — aber der Step suggeriert, dass Notarzt rufen *falsch* sei. Korrekt wäre: "Erst stoppen + Lage + beobachten — *parallel* Notarzt-Bereitschaft, bei keiner Besserung in 5 Min Notarzt."
  - In ambulanter Pflege ist die Pflegekraft **allein**. Wenn sie unsicher ist, ist ein 112-Anruf nie "falsch" — eher die sicherere Default-Option.
  - Der Feedback-Text "Sofort-Notaruf bei jedem Zyanose-Zeichen wäre in diesem Setting unangemessen" ist kritisch — er kann Schüler:innen dazu erziehen, im Zweifel *nicht* anzurufen.
- **Standard-Verweis:** GOLD-Report COPD 2023, ABCDE-Schema, Notfallmedizin-Index "Akute Atemnot"
- **Empfehlung:** Pfad C umformulieren auf score 2 (akzeptabel, leicht überzogen) statt isCorrect: false. Feedback ändern auf: "Nicht falsch — eher früh, aber bei Unsicherheit immer richtig. Erstmaßnahmen stoppen+Lage+Beobachten machst du parallel zur Notarzt-Bereitschaft." Pfad A bleibt isCorrect, aber Pfad C darf nicht als *Fehler* markiert werden — gerade in der ambulanten Solo-Situation. **Diese Bewertung ist K.O.**

#### F-13 (MITTEL): "Kontaktatmung mit leichtem Druck beim Ausatmen"
- **Stelle:** dur-01-atemuebungen-erklaert, Schritt 4
- **Problem:** Kontaktatmung wird beschrieben als "leichten Druck beim Ausatmen". Bei COPD III ist das Druckkonzept umstritten — der Druck soll *propriozeptive Wahrnehmung* fördern, nicht Atemarbeit unterstützen. Pflegelehrbücher (Pflege Heute Kap. Atmung) beschreiben Kontaktatmung primär als *Wahrnehmungshilfe* — der Druck ist sehr leicht und passiv-folgend, nicht "drückend". Außerdem: Bei akut dekompensierter COPD III kann externer Druck auf den Brustkorb kontraindiziert sein.
- **Standard-Verweis:** Pflege Heute 7. Aufl. Kapitel Atmung, AG Atemphysiotherapie
- **Empfehlung:** Schritt 4 präzisieren: "Hände sanft auflegen — die Hände *folgen* der Ausatemphase, sie drücken nicht. Es geht um Wahrnehmung." Hinweis ergänzen: "Bei akuter Atemnot diese Übung *nicht* anwenden — dann nur Lippenbremse + Kutschersitz."

#### F-14 (MITTEL): Datenschutz-Branching Pfad A: "wohlauf" als neutrale Auskunft
- **Stelle:** dur-05-komplikation-sohn-datenschutz, Pfad A
- **Problem:** "Ihre Mutter ist heute Morgen wohlauf" ist *bereits eine Gesundheitsauskunft* — wenn auch eine vage. DSGVO Art. 9 schützt Gesundheitsdaten nicht erst ab Diagnose-Detail, sondern ab jeder Information über den Gesundheitszustand. Strenge Auslegung: Pflegekraft sollte nur bestätigen, dass sie da war ("Ich bin gerade bei Frau Kovač"), aber keine Aussage zum Zustand machen — auch nicht "wohlauf".
- **Standard-Verweis:** DSGVO 2018 Art. 4 Nr. 15 (Gesundheitsdaten), § 203 StGB
- **Empfehlung:** Pfad A umformulieren auf: "Herr Kovač, guten Morgen. Ich kann am Telefon keine Auskunft zum Gesundheitszustand Ihrer Mutter geben. Bitte wenden Sie sich an den Pflegedienst — dort kann mit schriftlicher Einwilligung Ihrer Mutter ein regelmäßiger Austausch geregelt werden." (komplett ohne "wohlauf"). Score-3 bleibt, aber juristisch sauberer.

#### F-15 (NIEDRIG): "VAS 0–10" für Schmerzfrage — Kontrast zu beob-03 (VAS 3/10)
- **Stelle:** dur-04-bewegung-knie-im-sitzen, sortItem 4
- **Problem:** Pflegerisch korrekt — VAS-Erhebung ist DNQP-konform. Konsistenzcheck: in beob-03 wurde VAS 3/10 als "Normalbefund" gewertet (siehe F-06), hier wird VAS aktiv abgefragt. Es ist nicht widersprüchlich, aber die Vorerwartung ("3 ist normal") könnte den Wert in dur-04 abwerten.
- **Empfehlung:** Bei Korrektur F-06 wird das Feld auch hier konsistent.

---

### phase-evaluieren

#### F-16 (NIEDRIG): "Kompressionsstrümpfe angelegt" als Eval-Item, das nie passiert ist
- **Stelle:** eval-01-trinkprotokoll-abend, categoryItems[2] correctCategory: 2 (noch offen)
- **Problem:** Das Item suggeriert, dass das Anlegen der Strümpfe "noch offen" sei — aber Frau Kovač hat die Strümpfe explizit verweigert. "Noch offen" impliziert "kommt noch" — das widerspricht ihrer dokumentierten Autonomie-Entscheidung. Pflegerisch korrekter: "Verweigerung dokumentiert — keine Maßnahme erforderlich, Patientenautonomie respektiert".
- **Standard-Verweis:** § 1901a BGB
- **Empfehlung:** Item umformulieren oder aus Kategorisierung entfernen. Alternative Kategorie "Patientenentscheidung respektiert (kein Pflegeziel)" einführen.

#### F-17 (NIEDRIG): Sohn-Anruf 02:00 Uhr-Diskrepanz
- **Stelle:** eval-opt-b-timeline, Event t-03 erwähnt "Erwachen 02:00"
- **Problem:** Konsistent mit beob-04 (Erwachen 02:00). OK — kein Finding, nur Bestätigung.

---

### phase-dokumentieren

#### F-18 (MITTEL): Errorspot mit fixen Zeichenpositionen
- **Stelle:** dok-opt-b-errorspot, errors[].start/end
- **Problem:** Der Errorspot-Bereich nutzt Byte-Indexes (start: 0, end: 6 für "Frau K."). Die Range "start: 28, end: 33" entspricht in "Frau K. trinkt zu wenig, ist stur wegen Strümpfe" den Zeichen "stur ". Bei kleinster Textänderung (Komma, Leerzeichen) verschieben sich alle Indexe — fragiler Code. Der Renderer wird Probleme haben, wenn Text und Indexes nicht exakt matchen. Bitte verifizieren, dass `"Frau K. trinkt zu wenig, ist stur wegen Strümpfe."` byte-genau die markierten Bereiche trifft (Umlaute = 2 Bytes in UTF-8).
- **Standard-Verweis:** Code-Qualität / Renderer-Bugs (renderer-bugs.md)
- **Empfehlung:** Manuell prüfen oder auf string-basierte Match-Logik umstellen.

#### F-19 (NIEDRIG): Musterantwort Besuchsbericht — "geb. 1942"
- **Stelle:** dok-03-doku-freitext, musterantwort
- **Problem:** Musterantwort beginnt mit "Frau Kovač, Marija, geb. 1942". Dokumentations-Standard ist Geburtsdatum **(TT.MM.JJJJ)**, nicht nur Jahr. Im Errorspot wird auch "geb. 1942" als korrekt vorgeschlagen — gleiche Lücke.
- **Standard-Verweis:** § 630f BGB Abs. 2 (Patientenakte mit eindeutiger Identifikation)
- **Empfehlung:** Auf "geb. TT.MM.1942" ändern (vollständiges Geburtsdatum).

---

## Cross-Step-Probleme

- **CS-01 (MITTEL):** Plan-Ziel "Knie 1× tägl." (plan-05) widerspricht Eval-Lob "2× allein gemacht = funktioniert" (eval-01 + eval-03 matching). Bei korrigiertem Plan-Ziel (siehe F-09: 2× tägl.) wird Eval-Lob inhaltlich konsistent.
- **CS-02 (MITTEL):** "FEV1 30–50 %" in patient.ts vs. "30–49 %" in beob-opt-a-copd-stadien — siehe F-02.
- **CS-03 (MITTEL):** SpO2-Korridor wird in beob-02 als "normal bei COPD III" gelehrt, in dur-opt-b "<88 % = Notarzt" als kritisch. Die Schwelle 88 % erscheint in beiden Kontexten — Lernende könnten denken, alle COPD-III-Patient:innen sind dauerhaft an der Notarzt-Schwelle.
- **CS-04 (NIEDRIG):** Trinkmenge: Übergabe sagt "820 ml" (info-01), Trinkprotokoll-Aufgabe rechnet "800 ml" (beob-05). Die 20 ml Differenz wird nicht erklärt (vermutlich Rechnungsbasis vs. Petras Notiz). Entweder konsistent machen oder als Lerngelegenheit nutzen ("Petra hat ungenau notiert — du rechnest aus dem Protokoll exakt").

---

## Allgemeine Beobachtungen

**Stärken:**
- Sehr gute Patient-Bio mit Persönlichkeit (Josip-Tod, Eigensinn, kroatische Einschübe) — trägt das ethische Dilemma überzeugend.
- Datenschutz-Komplikation (Sohn-Anruf) ist didaktisch hervorragend und realistisch.
- Verweigerungs-Doku mit 3 Pflicht-Elementen rechtssicher und vollständig erklärt.
- Errorspot mit "stur" als wertende Sprache ist exzellent — schult genau das, was im Echtbetrieb passiert.
- B1-Varianten durchgehend solide, mit echten Umlauten, ohne Pseudo-Empathie.
- Quellen-Bezug (DNQP, GOLD, BGB, DSGVO) konsequent angegeben.

**Schwächen:**
- **Pseudo-Empathie-Bias gering** — Sprache ist meist sachlich.
- **Pflege-Slang punktuell:** "leichten Druck" (F-13), "wohlauf" als neutral (F-14), "stur" wird nur im Errorspot kritisiert (gut so).
- **Standards-Interpretation teils zu strikt/zu weich:** F-12 (Notarzt zu schnell? gefährlich falsch), F-06 (VAS 3 = normal? gefährlich falsch), F-09 (1× tägl. Mobilisation = SMART? Sub-Standard).
- **SGB-XI-Kontext fehlt:** Pflegegrad 3 wird genannt, aber der Leistungsrahmen (§ 36 Sachleistung, § 37 Geldleistung, Tagespflege als Ergänzung) wird nicht thematisiert. Für eine *ambulante* Situation eine Lücke.
- **Touren-Planung explizit fehlt:** "45 Minuten" wird oft erwähnt, aber das *davor* und *danach* (nächster Patient, Fahrzeit, Tour-Sequenz) fehlt komplett. Ambulante Pflege heißt: dieser Besuch ist Teil einer Tour. Lernende erfahren das nicht.
- **Angehörigen-Einbindung beschränkt sich auf Datenschutz-Abwehr** (Sohn-Anruf). Positive Angehörigen-Einbindung (Anleitung, Schulung, Entlastung über § 45a SGB XI) wird nicht angesprochen — Darko in Kroatien als Erschwernis, nicht als Ressource.

---

## Zusammenfassung

- **HOCH:** 2 Findings (F-01 SGB-XI-Kontext fehlt, F-12 Notarzt-Bewertung gefährlich falsch)
- **MITTEL:** 9 Findings (F-03, F-05, F-06, F-09, F-10, F-13, F-14, F-18, CS-01–CS-03)
- **NIEDRIG:** 8 Findings (F-02, F-04, F-07, F-08, F-11, F-15, F-16, F-17, F-19, CS-04)

**K.O.-Verdikt: FAIL**

Begründung: F-12 (Notarzt-Bewertung als Fehler in Solo-Situation mit Lippenzyanose) und F-06 (VAS 3 = Normalbefund) sind beide pflegerisch direkt schädlich, wenn Schüler:innen das übernehmen. F-01 (SGB-XI-Kontext) ist für eine *ambulante* Situation strukturell zu wichtig, um zu fehlen.

**Empfohlene Sofort-Fixes vor Live-Deploy:**
1. F-12: Pfad C im dur-03 von isCorrect: false auf score 2 + Feedback-Text entschärfen.
2. F-06: VAS 3/10 aus "Normalbefund" entfernen.
3. F-09: Plan-Ziel auf 2× tägl. erhöhen (konsistent zu Eval).
4. F-13: Kontaktatmung sprachlich präzisieren.
5. F-01: Mind. einen Vertiefungs-Step zu SGB XI § 36 / Pflegegrad 3 in Phase 1 einbauen.

Nach diesen Fixes: PASS realistisch erreichbar.
