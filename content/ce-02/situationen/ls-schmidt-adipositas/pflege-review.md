# Pflege-Review: ls-schmidt-adipositas

**Geprüft:** 2026-04-26 (Re-Audit nach Fix-Block)
**Modus:** code
**Files:** 7 (patient.ts + 6 Phasen-Files)
**Step-Anzahl:** 38 (7 Informieren inkl. 2 InlineWissen + 11 Beobachten inkl. 2 InlineWissen + 7 Planen inkl. 1 InlineWissen + 11 Durchführen inkl. 2 InlineWissen + 6 Evaluieren inkl. 1 InlineWissen + 5 Dokumentieren inkl. 1 InlineWissen) — davon 4 Dialog/ChatSim, 4 MC, 5 Categorize, 4 Sorting/Sequencing, 3 Branching, 3 Freetext, 1 TrueFalse, 1 Hotspot, 2 Matching, 1 Matrix, 2 Calculation, 1 Cloze, 1 Timeline, 1 Summary, 2 Selfrating, 5 Text, 8 InlineWissen

---

## Findings

### Phase 4 — durchfuehren — Step 4.1 (sorting: Hautfalten-Pflege)

#### F-01 (MITTEL): Musterantwort Pflegebericht widerspricht Hautfalten-Steps

- **Stelle:** `phase-dokumentieren.ts`, Step 6.1, musterantwort — vs. `phase-durchfuehren.ts` Step 4.1 + `phase-planen.ts` Step 3.4
- **Problem:** In der Musterantwort des Pflegeberichts (Step 6.1) steht: „Trockentupfen, anschließend **Hautschutz-Lotion** dünn aufgetragen." Das widerspricht den didaktischen Steps 3.4 und 4.1, die explizit lehren: „KEINE okklusiven Pasten/Cremes IN die Falte" und „Hautschutz-Creme nur auf intakter Haut AUSSERHALB der Falte." Ein Pflegebericht, der pauschal „Hautschutz-Lotion aufgetragen" schreibt, suggeriert Auftrag IN die Falte — das ist genau der Fehler, den die vorherigen Steps vermeiden wollen.
- **Standard-Verweis:** AWMF S2k-Leitlinie Intertrigo DDG (2022): In der Falte textiles Vlies, Cremes/Pasten nur auf umgebender intakter Haut.
- **Empfehlung:** Musterantwort differenzieren: „Trockentupfen, Faltenvlies eingelegt. Hautschutz-Creme dünn auf umgebende intakte Haut außerhalb der Falte aufgetragen." Damit ist der Pflegebericht konsistent mit den Lehr-Steps.

---

### Phase 4 — durchfuehren — Step 4.4 (categorize: Protein-Gehalte)

#### F-02 (MITTEL): Fertig-Pizza in falscher Kategorie

- **Stelle:** `phase-durchfuehren.ts`, Step 4.4, categoryItems: „Fertig-Pizza (ca. 6–8 g Protein pro Portion, bei hohem Kalorien-Anteil)" → correctCategory: 2 (Niedriger Proteingehalt < 5 g)
- **Problem:** 6–8 g Protein pro Portion liegt eindeutig im Bereich 5–15 g, also in Kategorie 1 (Mittlerer Proteingehalt), nicht Kategorie 2 (< 5 g). Damit ist die korrekte Zuordnung fachlich falsch. Der Punkt der Aufgabe (Pizza hat relativ wenig Protein im Verhältnis zu den Kalorien) ist didaktisch richtig — aber die Grenzwerte der Kategorien müssen stimmen.
- **Standard-Verweis:** Bundeslebensmittelschlüssel BLS 3.02 — Fertigpizza (Margherita, 300 g Portion): ca. 18–24 g Protein (6–8 g pro 100 g). Bei einer typischen 300-g-Portion sind es 18–24 g, bei einer Einzel-Portionspizza (ca. 200 g) mindestens 12–16 g. Selbst bei kleiner Portion (130 g) sind es ~8–10 g.
- **Empfehlung:** Entweder (a) Fertigpizza in Kategorie 1 verschieben (mittlerer Proteingehalt) und das didaktische Statement ins Label verlagern: „Fertig-Pizza 1 Portion (ca. 8–12 g Protein, aber ~700 kcal — ungünstiges Protein-Kalorien-Verhältnis)"; oder (b) die Portionsgröße so klein definieren, dass < 5 g passt (z.B. „1/4 Mini-Pizza, ca. 4 g Protein"), was aber unrealistisch ist.

---

### Phase 4 — durchfuehren — Step 4.1b (inlineWissen: Proteine)

#### F-03 (NIEDRIG): Protein-Angabe Fertigpizza inkonsistent mit Step 4.4

- **Stelle:** `phase-durchfuehren.ts`, Step 4.1b inlineWissen, kerntext: „Fertigpizza liefert ca. 6-8 g Protein pro Portion"
- **Problem:** „Pro Portion" ist mehrdeutig. Eine handelsübliche Fertigpizza (300 g) hat ca. 18–24 g Protein. Wenn „Portion" = 100 g gemeint ist, wären 6–8 g korrekt — das ist aber keine praxisrelevante Portionsgröße. Schüler werden verwirrt wenn sie die Verpackung einer Fertigpizza lesen.
- **Empfehlung:** Entweder klarstellen: „Fertigpizza liefert ca. 6–8 g Protein **pro 100 g** (eine ganze Pizza à 300 g: ca. 18–24 g — aber bei ca. 700–900 kcal)" oder realistische Portionsgröße verwenden.

---

### Phase 3 — planen — Step 3.5 (text/scenario: Mobilisationsplan)

#### F-04 (NIEDRIG): Schwerlastbett-Schwelle 250 kg — Quelle?

- **Stelle:** `phase-planen.ts`, Step 3.5, C1-body: „Schwerlastbett (XXL, > 250 kg)"
- **Problem:** Die genannte Schwelle „250 kg" für Schwerlastbetten ist herstellerabhängig und variiert (120–450 kg je nach Modell). Die DGUV 207-018 gibt keine fixe Gewichtsgrenze für Schwerlastbetten an, sondern empfiehlt eine individuelle Risikobewertung. „250 kg" klingt wie ein verbindlicher Standard, ist es aber nicht.
- **Empfehlung:** Wording anpassen: „Schwerlast-/Bariatriebett (Modelle ab ca. 200–450 kg Tragkraft verfügbar)" oder „Schwerlastbett nach individueller Risikobewertung (DGUV 207-018)". Keine Pseudo-Norm suggerieren.

---

### Phase 3 — planen — Step 3.6 (branching: Inkontinenz-Versorgung)

#### F-05 (NIEDRIG): Quelle DNQP Ernährungsmanagement falsch zugeordnet

- **Stelle:** `phase-planen.ts`, Step 3.6, quellen
- **Problem:** Für einen Step über Inkontinenz-Versorgung und Würde wird als Quelle „DNQP (2017): Expertenstandard Ernährungsmanagement" zitiert. Korrekt wäre hier der „DNQP Expertenstandard Förderung der Harnkontinenz in der Pflege" oder der § 2 PflBG (der bereits korrekt gelistet ist).
- **Empfehlung:** Ernährungsmanagement-Quelle durch „DNQP (2014): Expertenstandard Förderung der Harnkontinenz in der Pflege" ersetzen.

---

### Phase 2 — beobachten — Step 2.7 (dialog: Inkontinenz)

#### F-06 (NIEDRIG): Score-3-Option dialogPhases[0] — „Harndrang" statt „Harnverlust"

- **Stelle:** `phase-beobachten.ts`, Step 2.7, dialogPhases[0], Option 1 (Score 3), text: „Probleme, den Harndrang rechtzeitig zu kontrollieren"
- **Problem:** Die Formulierung „Harndrang rechtzeitig kontrollieren" beschreibt eher Dranginkontinenz (Detrusor-Instabilität). Frau Schmidt hat Belastungsinkontinenz (= Urinverlust bei körperlicher Anstrengung, nicht bei Harndrang). Die Score-3-Formulierung ist für den falschen Inkontinenz-Typ optimiert.
- **Standard-Verweis:** ICS-Klassifikation: Belastungsinkontinenz = unwillkürlicher Urinabgang bei erhöhtem abdominellem Druck (Husten, Niesen, Heben). Dranginkontinenz = Urinverlust bei imperativem Harndrang.
- **Empfehlung:** Formulierung anpassen: „Haben Sie manchmal Probleme, dass Sie ungewollt Urin verlieren — zum Beispiel beim Husten, Niesen oder bei körperlicher Anstrengung?" Das ist belastungsinkontinenz-spezifisch und fachlich korrekt.

---

### Cross-Step-Konsistenz

#### CS-01 (NIEDRIG): Hautpflege-Sequenz doppelt (Phase 3 + Phase 4)

- **Stelle:** Step 3.4 (Sequencing: Hautpflege planen) + Step 4.1 (Sorting: Hautpflege durchführen)
- **Problem:** Beide Steps vermitteln fast identische Inhalte (5 nahezu gleiche Schritte der Hautfalten-Pflege). Die Reihenfolge ist minimal unterschiedlich (Phase 3: Inspektion zuerst, Phase 4: Handschuhe zuerst), was didaktisch erklärbar ist (planen vs. durchführen), aber für Schüler redundant wirken kann.
- **Empfehlung:** Akzeptabel als bewusste Wiederholung (Spaced Repetition Planen→Durchführen). Kein Fix nötig, aber die Phase-4-Variante sollte in der Einleitung explizit auf die Wiederholung verweisen: „Du hast die Schritte in Phase 3 geplant. Jetzt führst du sie aus — die Reihenfolge kennst du."

---

### Patient-Daten-Konsistenz

#### CS-02 (PASS): NRS-Score konsistent
- patient.ts: NRS-2002-Score 1. Alle Phasen: Score 1. Cloze Step 6.2: Blank 1 = „1". GLIM als Indikations-Begründer korrekt durchgehend. **Konsistent.**

#### CS-03 (PASS): Protein-Bedarf konsistent
- Step 3.2 (SMART): 67 g/Tag (1,2 × 56 kg). Step 4.1b (Inline): 67 g (1,2 × 56). Step 4.2 (Text): 67 g. Step 6.2 (Cloze): 67 g. **Konsistent.**

#### CS-04 (PASS): Wagner-Armstrong konsistent
- patient.ts: „Wagner Grad 1 (Wagner-Armstrong 1A)". Phase 1 SBAR: „Wagner Grad 1 (Wagner-Armstrong 1A)". Phase 2 Step 2.6: „Wagner Grad 1 (Wagner-Armstrong 1A)". Phase 4 Step 4.6: „Wagner Grad 1 (Wagner-Klassifikation; ohne Infektion = Wagner-Armstrong 1A)". **Konsistent.**

#### CS-05 (PASS): BZ-Werte konsistent
- Phase 1 SBAR: nüchtern 187 mg/dl. Phase 2 Step 2.2: 187 nüchtern. Phase 4 Step 4.7: postprandial 254 mg/dl (passt zum Tag-3-Wert aus Timeline). Phase 5 Timeline: Tag 3 = 187/254. **Konsistent.**

---

## Inline-Wissen-Bausteine — Sonderprüfung

8 Inline-Wissen-Bausteine geprüft (2 in Phase 1, 2 in Phase 2, 1 in Phase 3, 2 in Phase 4, 1 in Phase 5, 1 in Phase 6):

| Baustein | Fachlich korrekt | Spektrum plausibel | Karteikarte korrekt | Faustregel korrekt |
|----------|------------------|--------------------|----------------------|--------------------|
| NRS 2002 (1.1b) | Ja | Ja (Petrov/Yilmaz/Nguyen/Emilia) | Ja | Ja |
| BMI-Adipositas (1.3b) | Ja | Ja (Petrov/Yilmaz/Kovac) | Ja | Ja |
| GLIM-Kriterien (2.4b) | Ja | Ja (Petrov/Bauer/Kovac) | Ja | Ja |
| Intertrigo (2.5b) | Ja | Ja (Yilmaz/Bauer/Emilia) | Ja | Ja |
| Dekubitus-Wiederbegegnung (3.3b) | Ja | Ja (Yilmaz/Petrov/Bauer) | Ja | Ja |
| Protein-Grundlagen (4.1b) | Ja (F-03 siehe oben) | Ja (Petrov/Yilmaz/Emilia) | Ja | Ja |
| Glykämischer Index (4.4b) | Ja | Ja (Petrov/Kovac/Emilia) | Ja | Ja |
| Albumin-Verlauf (5.1b) | Ja | Ja (Petrov/Yilmaz/Kovac) | Ja | Ja |
| Ernährungsdoku (6.1b) | Ja | Ja (Petrov/Nguyen/Emilia) | Ja | Ja |

Alle Bausteine haben korrekte Wiederbegegnungen wo relevant (Dekubitus von Yilmaz, Albumin als Wiederbegegnung zu Phase 2). Story-Aufhänger knüpfen korrekt an die vorhergehenden Steps an. Keine erfundenen Fakten gefunden.

---

## Pflege-Standards-Check

| Standard | Abgedeckt | Korrekt |
|----------|-----------|---------|
| DNQP Ernährungsmanagement 2017 | Ja (Phasen 1–6) | Ja |
| NRS 2002 (Kondrup 2003) | Ja (Phase 1+2) | Ja (Albumin korrekt als NICHT-NRS markiert) |
| GLIM-Kriterien (Cederholm 2019) | Ja (Phase 2+5) | Ja |
| DDG Diabetisches Fußsyndrom 2023 | Ja (Phase 2+4+6) | Ja (Podologen-Pflicht korrekt) |
| AWMF S2k Intertrigo 2022 | Ja (Phase 2+3+4) | Ja (Faltenvlies = Goldstandard) |
| DNQP Sturzprophylaxe 2022 | Ja (Phase 3) | Ja |
| Kinästhetik Hatch/Maietta 1991 | Ja (Phase 3) | Ja |
| SBAR | Ja (Phase 1+4) | Ja |
| Motivierende Gesprächsführung Miller/Rollnick 2012 | Ja (Phase 4+5) | Ja |
| § 630f BGB Pflegedokumentation | Ja (Phase 6) | Ja |
| § 2 PflBG Ressourcenorientierung | Ja (Phase 3+4) | Ja |

---

## Kommunikation / Pseudo-Empathie-Check

- Keine „indirektes Licht"-Fehler gefunden.
- Keine „NRS X, ok, im Rahmen"-Bagatellisierung. Score 1 wird explizit als „NICHT Entwarnung" geframt.
- Keine Kinästhetik-Verletzung („unter den Achseln greifen" explizit als verboten markiert).
- Dialog-Optionen: Score-3 ist durchgehend vorbildlich (validierend, informierend), Score-0 ist durchgehend plausibel falsch (nicht karikiert).
- Sandwich-Prinzip in Feedback-Texten eingehalten (Anerkennung → Korrektur → Ermutigung).
- Body-positive Sprache: „Adipositas" als Diagnose, „BMI" als Zahl, kein „dick/fett". Humor von Frau Schmidt wird ernst genommen.

---

## Zusammenfassung

- **0 Findings HOCH**
- **2 Findings MITTEL** (F-01 Pflegebericht-Lotion-Widerspruch, F-02 Fertigpizza-Kategorisierung)
- **4 Findings NIEDRIG** (F-03 Portionsgröße, F-04 Schwerlastbett-Quelle, F-05 falsche Quelle Inkontinenz-Step, F-06 Harndrang-vs-Belastung)
- **1 Cross-Step NIEDRIG** (CS-01 Hautpflege-Redundanz, akzeptabel als Wiederholung)
- **4 Cross-Step PASS** (CS-02 NRS, CS-03 Protein, CS-04 Wagner, CS-05 BZ — alle konsistent)

**Allgemeine Beobachtungen:**
- Die Fixes der Vor-Review wurden korrekt und vollständig umgesetzt (NRS→GLIM-Trennung, Protein-Konsistenz 67 g, Wagner-Armstrong-Notation, Pflegebericht-Objektivierung, Bariatrie+Kinästhetik, BZ-Reihenfolge, Hotspot-Koordinaten).
- Die 8 Inline-Wissen-Bausteine sind fachlich korrekt, didaktisch sinnvoll eingebettet und haben plausible Spektrum-Patienten.
- Pseudo-Empathie-Bias nicht nachweisbar. Standards-Bezug überdurchschnittlich.
- Zwei MITTEL-Findings sind real aber nicht gefährlich: F-01 (Pflegebericht widerspricht eigenem Lehr-Content) und F-02 (falsche Protein-Kategorie bei Pizza) sind eher Inkonsistenzen als pflegefachliche Gefahren.

**K.O.-Verdikt: PASS**

Kein HOCH-Finding. Situation ist live-deploy-fähig. MITTEL-Findings sollten vor nächstem Content-Sprint gefixt werden.
