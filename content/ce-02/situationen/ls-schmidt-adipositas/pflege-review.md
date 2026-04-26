# Pflege-Review: ls-schmidt-adipositas

**Geprüft:** 2026-04-25
**Files:** 7 (6 Phasen + patient.ts)
**Step-Anzahl:** 36 (5 Informieren + 8 Beobachten + 6 Planen + 8 Durchführen + 5 Evaluieren + 4 Dokumentieren) — davon 4 Dialog/ChatSim, 4 MC, 5 Categorize, 4 Sequencing/Sorting, 3 Branching, 3 Freetext, 1 TrueFalse, 1 Hotspot, 1 Matching, 1 Matrix, 1 Calculation, 1 Cloze, 1 Timeline, 1 Summary, 2 Selfrating, 4 Text

---

## Findings

### Phase 1 — informieren

#### F-01 (NIEDRIG): Doppelte Aufgabe in Step 1.3 / 1.4
- **Stelle:** `phase-informieren.ts`, Step 1.3 (MC „Was tust du ZUERST?") und 1.4 (Dialog „Begrüßung wählen")
- **Problem:** Beide Steps testen praktisch dasselbe Lernziel (Person zuerst, Aufgabe danach). Im Dialog ist die korrekte Eröffnung quasi schon vorab in MC gespoilert.
- **Empfehlung:** Step 1.3 stattdessen auf einen anderen Aspekt zuspitzen (z. B. wie viele Personen-Daten man vor dem Betreten kennen sollte), oder Step 1.4 als Vertiefung-Drilldown framen („Du hast erkannt: Person zuerst — wie konkret?").

---

### Phase 2 — beobachten

#### F-02 (HOCH): NRS-2002-Categorize fachlich falsch
- **Stelle:** `phase-beobachten.ts`, Step 2.3 (`ce02-schmidt-beob-03-nrs-2002`)
- **Problem:** Die Item-Zuordnungen sind teilweise sachlich falsch und didaktisch verwirrend.
  - Item „Albumin 31 g/l" wird Kategorie 0 (Ernährungsstatus-Score) zugeordnet — Albumin ist im NRS 2002 KEIN Bestandteil des Screenings (NRS 2002 wertet BMI, Gewichtsverlust, Nahrungsaufnahme — nicht Laborparameter).
  - Item „Alter 68 Jahre → kein Altersscore" steht in Kategorie 2 (Altersscore) obwohl die korrekte Punktzahl 0 wäre. Das ist verwirrend, wenn die Kategorie als „Altersscore-Zuweisung" gedacht ist — dann wäre die Zuweisung „kein Score" eher ein Anti-Item.
  - Der NRS-Gesamtscore in patient.ts ist 3, im Step jedoch nicht eindeutig nachvollziehbar.
- **Standard-Verweis:** Kondrup J. et al. (2003) NRS 2002, ESPEN Guidelines. Albumin ist GLIM-Indikator, nicht NRS-Komponente.
- **Empfehlung:** Step neu aufbauen. Entweder reines NRS-Screening (BMI, % Gewichtsverlust, Nahrungsaufnahme + Erkrankungsschwere + Alter ≥ 70) — ODER das Step explizit als „GLIM-Kriterien" framen, dann passt Albumin und Diabetes-Komorbidität.

#### F-03 (MITTEL): NRS 2002 — Kategorie-Logik unklar
- **Stelle:** Step 2.3, `categories`
- **Problem:** Drei Kategorien („Ernährungsstatus-Score", „Schweregrad der Erkrankung", „Altersscore") — aber jedes Item soll einer Kategorie zugeordnet werden. Logisch wäre: pro Kategorie eine Punktzahl bestimmen. Die Aufgabe ist als Categorize-Step nicht sauber abbildbar.
- **Empfehlung:** Stattdessen ein Stufen-Modell (Sequencing oder MC mit Punktzahl-Berechnung) — oder Calculation-Step mit Score-Summe.

#### F-04 (MITTEL): Schritt-Reihenfolge BZ-Messung — Patientenaufklärung VOR Hände waschen?
- **Stelle:** Step 2.2 (`ce02-schmidt-beob-02-bz-messen`), Sequencing
- **Problem:** Items „Hände waschen + Handschuhe anziehen" steht VOR „Frau Schmidt informieren". In der Praxis ist das Informieren typischerweise der erste Schritt (vor handlungsbezogener Vorbereitung), siehe Patientenautonomie und Aufklärungspflicht. Die Reihenfolge ist diskutabel — sollte aber aus dem `instruction`-Feld klar hervorgehen, was die korrekte Reihenfolge ist und warum.
- **Standard-Verweis:** RKI-Hygiene + § 630e BGB (Aufklärung).
- **Empfehlung:** Items neu sortieren („Frau Schmidt informieren" zuerst, dann „Hände waschen + Handschuhe", dann „seitlich stechen" etc.) oder im Begleittext explizit klären, warum hier Hände waschen vorgezogen wird (z. B. Aseptische Vorbereitung weil Material schon liegt).

#### F-05 (NIEDRIG): Hotspot-Koordinaten — Plausibilität
- **Stelle:** Step 2.5 (`ce02-schmidt-beob-05-haut-inspektion`), Hotspot-Zonen
- **Problem:** Submammäre Falte (`y: 28`) und Steißbein (`y: 75`) sind plausibel — aber Leistenbeuge (`y: 60`) und Abdomen-Hängefalte (`y: 52`) sind sehr nah aneinander, ohne dass das Bild beide getrennt zeigt. Risiko: Schüler:innen treffen die falsche Zone.
- **Empfehlung:** Beim Bild-Briefing klarstellen, dass Leiste und Abdomen-Hängefalte räumlich getrennt zu sehen sind, oder Radien minimieren und Test mit echtem SVG.

#### F-06 (HOCH): Fußinspektion-Distraktor „Mit der Feile leicht bearbeiten" — korrekt klassifiziert
- **Stelle:** Step 2.6 (`ce02-schmidt-beob-06-fussinspektion`)
- **Problem:** Aussage in `explanation`: „Auch Feilen ist eine Intervention am Diabetikerfuß die Verletzungsrisiko birgt. Die Kompetenzgrenze gilt für alle invasiven Nagelpflege-Handlungen — Schneiden, Feilen, Einreißen. Nur Podologe."
  - Das ist fachlich KORREKT (DDG 2023). Allerdings: In der ambulanten Pflege/häuslich darf eine Pflegefachkraft mit entsprechender Qualifikation (z. B. zertifizierte Diabetes-Fußschwester) durchaus feilen. Im stationären Setting bei Wagner-1 gilt aber: Podologen-Überweisung.
- **Empfehlung:** OK als Lehrinhalt für Auszubildende — explanation könnte zur Klarheit ergänzen: „Im Krankenhaus/ambulanten Setting ohne Zusatzqualifikation: keine Pflege-Intervention an Diabetikernägeln."

#### F-07 (MITTEL): Inkontinenz-Dialog Phase 2, Score-3-Option
- **Stelle:** Step 2.7, dialogPhases[1], Option 1 („Das ist sehr häufig bei Frauen in Ihrem Alter")
- **Problem:** „Das ist sehr häufig bei Frauen in Ihrem Alter" normalisiert über Alter — das kann auch als „Resignation" missverstanden werden („gehört zum Alterwerden, lebenslang"). Die Belastungsinkontinenz ist in vielen Fällen behandelbar (Beckenbodentraining, Pessar, ggf. OP).
- **Standard-Verweis:** AWMF S2k-Leitlinie Harninkontinenz Frauen (2023) — Behandelbarkeit explizit.
- **Empfehlung:** Score-3-feedback ergänzen: „Wichtig dabei: Normalisieren heißt nicht ‚damit muss man leben'. Inkontinenz ist behandelbar — Beckenbodentraining, urotherapeutische Maßnahmen, ggf. fachärztliche Abklärung."

#### F-08 (NIEDRIG): TrueFalse Step 2.1 — wissenschaftlich vertretbar, aber Wording
- **Stelle:** Step 2.1 (`ce02-schmidt-beob-01-brilliantfrage`)
- **Problem:** Aussage „Wer adipös ist (BMI ≥ 30), kann nicht gleichzeitig an Proteinmangelernährung leiden" ist gut formuliert. Die explanation erwähnt korrekt, dass Albumin Indikator ist. Aber Albumin ist auch ein Akut-Phase-Negativ-Protein — bei Inflammation/Krankenhausstress sinkt es ohne reine Proteinmangel-Ursache. Sollte gekennzeichnet werden.
- **Standard-Verweis:** Cederholm GLIM 2019 — Albumin allein ist NICHT diagnostisch für Mangelernährung.
- **Empfehlung:** explanation ergänzen: „Albumin ist ein Hinweis, kein Beweis. Bei Akuterkrankungen sinkt Albumin auch ohne Proteinmangel — deshalb gehört NRS-2002-Score (Score 3) zur Bestätigung."

---

### Phase 3 — planen

#### F-09 (HOCH): Matrix-Step — Quadranten-Logik fehlerhaft
- **Stelle:** Step 3.3 (`ce02-schmidt-plan-03-interprof-team`)
- **Problem:** Matrix mit Achse X (Sofort/Geplant) × Achse Y (Pflege/Spezialist), Quadranten 1–4 — aber:
  - „Hautpflege Hautfalten DURCHFÜHREN" ist Quadrant 1 (Sofort + Pflege) — OK.
  - „Hautfalten täglich INSPIZIEREN" ist Quadrant 1 — OK.
  - „Inkontinenz-Versorgung besprechen UND einleiten" ist Quadrant 1 — OK pflegerisch, aber besprechen ist sofort, einleiten kann „geplant" sein. Mehrdeutig.
  - „Metformin-Anpassung je nach BZ-Verlauf" ist Quadrant 4 (Geplant + Spezialist=Arzt) — könnte aber bei akut entgleistem BZ auch SOFORT sein.
- **Empfehlung:** Items eindeutiger formulieren oder Toleranz dokumentieren. Quadranten-Konvention klar (Q1 unten-links, Q2 unten-rechts, Q3 oben-links, Q4 oben-rechts) im body erwähnen.

#### F-10 (MITTEL): SMART-Ziel Musterantwort — Proteinmenge zu hoch?
- **Stelle:** Step 3.2 (`ce02-schmidt-plan-02-ziele-smart`)
- **Problem:** Musterantwort: „Proteinzufuhr auf mindestens 60 g/Tag gesteigert."
  - Bei BMI 38 (98 kg) und nach DGE 0,8 g/kg KG = ~78 g/Tag wäre das Ziel der gesunden Person. Bei stationären Patienten und nachgewiesenem Proteinmangel (Albumin 31) liegt der Bedarf eher bei 1,2–1,5 g/kg KG = 90–120 g (ESPEN 2017 Guidelines bei Mangelernährung — wobei für Adipöse das Idealgewicht und nicht das Istgewicht herangezogen wird, ca. 60 kg → 72–90 g).
  - Step 4.2 nennt 0,8 g/kg KG, Step 6.2 (Cloze) nennt 72 g (auf Idealgewicht 90 kg gerechnet — was rechnerisch für eine 1,60-m-Frau zu hoch ist; Idealgewicht nach Broca wäre ~54 kg, BMI 22-Kalkulation ~56 kg).
- **Standard-Verweis:** ESPEN Guidelines for Clinical Nutrition (2017), DGE D-A-CH 2024.
- **Empfehlung:** Konsistenz herstellen. Empfehlung: Idealgewicht ~56 kg → Bedarf 1,0–1,2 g/kg = 56–67 g/Tag. Musterantwort und Cloze-Step abgleichen.

#### F-11 (MITTEL): „Trockenheit" als Voraussetzung für Hautschutzlotion — Adipositas-Hautfalten sind oft feucht
- **Stelle:** Step 3.4, Item h3 („Hautschutz-Lotion oder Zinkpaste dünn auftragen (nur bei trockener, intakter Haut)")
- **Problem:** Hautfalten bei Adipositas sind oft feucht/maceriert. Ein „Hautschutz" wird gerade dort gebraucht, wo es feucht ist. Zinkpaste oder Hautschutzcreme sind genau für diesen Zweck (auch auf leicht feuchter, intakter Haut) geeignet. Die Einschränkung „nur trockene Haut" ist falsch.
- **Standard-Verweis:** AWMF S2k Intertrigo (2022): Empfohlen sind atmungsaktive textile Einlagen, dann Trockentupfen, dann ggf. Zinkpaste/Schutzcreme — nicht nur bei trockener Haut.
- **Empfehlung:** Item umformulieren: „Hautschutzpräparat (z. B. Zinkpaste) dünn auftragen, wenn Haut intakt ist (keine offene Wunde, keine Mazerierung mit Pilzbefund)."

---

### Phase 4 — durchfuehren

#### F-12 (NIEDRIG): Ernährungsgespräch — „Salat? Ich bin doch kein Kaninchen" — Antwort-Optionen
- **Stelle:** Step 4.3 (`ce02-schmidt-dur-03-ernaehrungsgespraech-hauptbranching`)
- **Problem:** Gut konstruiert. Aber das aktive Zuhören (Pfad B) endet mit „Frau Schmidt erzählt: Fertigessen, Alleine-Essen, Kochen hat keine Freude mehr" — danach gibt es keinen Folge-Step der das tatsächlich aufgreift. Step 4.4 (Protein-Sortierung) springt zu Lebensmittelkategorien ohne Anbindung an die Biographie.
- **Empfehlung:** Mini-Übergang zwischen 4.3 und 4.4 — z. B. Text-Step: „Du hast gehört: Frau Schmidt fehlt die Freude am Kochen. Du bietest 3 alltagsnahe Mahlzeiten an, die kein Kochen erfordern — Hüttenkäse, gekochtes Ei, Joghurt mit Nüssen."

#### F-13 (MITTEL): ChatSim Fußmeldung — kein SBAR-Hinweis
- **Stelle:** Step 4.6 (`ce02-schmidt-dur-06-fuss-arztmeldung`)
- **Problem:** Die `evaluationCriteria` listen Patientenname, Befund, Kompetenzgrenze, Bitte. Das ist gut — aber SBAR ist als Quelle gelistet, jedoch nicht als Struktur explizit gefordert. Da SBAR die Standard-Übergabe-Struktur ist (Phase 1 nutzt sie auch), sollte die Bewertung darauf eingehen.
- **Standard-Verweis:** Aktionsbündnis Patientensicherheit, SBAR.
- **Empfehlung:** evaluationCriteria erweitern: „SBAR-Struktur erkennbar (Situation/Background/Assessment/Recommendation)". systemPrompt entsprechend anpassen.

#### F-14 (NIEDRIG): Calculation BZ — Tolerance 0
- **Stelle:** Step 4.7, `tolerance: 0`
- **Problem:** Bei 254 − 180 = 74 mg/dl ist tolerance 0 streng korrekt — aber wenn der Schüler 75 oder 73 tippt, ist das didaktisch fast egal. Eine Toleranz von 1 mg/dl wäre fairer.
- **Empfehlung:** `tolerance: 1` setzen.

---

### Phase 5 — evaluieren

#### F-15 (NIEDRIG): Albumin-Halbwertszeit Hinweis ist gut — aber Albumin-Wert nicht abgenommen
- **Stelle:** Step 5.2 (`ce02-schmidt-eval-02-pflegeziele-erreicht`), Item 1 zu Ziel 1
- **Problem:** Hinweis „Albumin braucht 2–4 Wochen um zu steigen (Halbwertszeit Albumin: 15–20 Tage)" ist fachlich korrekt. Allerdings fehlt im Step der Hinweis, dass für die Bewertung des Proteinstatus Präalbumin (HWZ 2 Tage) oder Transferrin (HWZ 8 Tage) sensitiver wäre.
- **Empfehlung:** Optional als Vertiefung in `explanation` oder Glossar.

---

### Phase 6 — dokumentieren

#### F-16 (HOCH): Pflegebericht-Musterantwort — Aussage über Ernährungsberaterin
- **Stelle:** Step 6.1 (`ce02-schmidt-dok-01-pflegebericht-frei`), Musterantwort
- **Problem:** Musterantwort: „heute Morgen erste Podologin-Behandlung erfolgt (Nägel fachgerecht versorgt, Risse desinfiziert)." — Das ist korrekte fachliche Beobachtung, aber die Pflege-Dokumentation soll OBJEKTIV sein. „Fachgerecht versorgt" ist eine Wertung. Korrekt: „Behandlung durch Podologin Frau X um Y Uhr durchgeführt."
- **Standard-Verweis:** Pflegedokumentationsstandard (DBfK), § 630f BGB.
- **Empfehlung:** Musterantwort umformulieren: „Podologin Frau X führte 09:00–09:30 Nagelpflege und Hautrissversorgung durch. Befund nach Behandlung: Nägel gekürzt, Risse trocken, kein Erythem."

#### F-17 (MITTEL): Cloze Protein-Bedarf inkonsistent
- **Stelle:** Step 6.2, Blank 3
- **Problem:** „Protein-Bedarf: ca. 72 g/Tag (Berechnung: 0,8 g × Idealgewicht ca. 90 kg)."
  - Frau Schmidt ist 1,60 m groß. Idealgewicht nach Broca: 60 kg, nach BMI 22: 56 kg. NICHT 90 kg.
  - Die 90-kg-Annahme ist offenbar ihr Istgewicht abzüglich etwas, aber das ist als „Idealgewicht" falsch.
- **Standard-Verweis:** ESPEN 2017 — bei Adipositas Idealgewicht (BMI 22) als Berechnungsbasis.
- **Empfehlung:** Korrektur auf Idealgewicht 56 kg → 0,8 × 56 = 45 g (Erhaltungsbedarf). Bei Mangelernährung 1,2 × 56 = 67 g/Tag. Cloze-Antwort und Erklärtext anpassen — und mit Step 3.2 abgleichen (siehe F-10).

#### F-18 (NIEDRIG): Cloze Blank 6 hat keine Distraktoren
- **Stelle:** Step 6.2, Blank 6
- **Problem:** „distractors: []" — wird der Renderer das verarbeiten? Falls ja: ist eine Eingabe ohne Validierung gemeint, dann sollte das aus dem Aufgabentext klar hervorgehen.
- **Empfehlung:** Entweder Distraktoren ergänzen oder Aufgabentext erweitern: „Den Namen der Beraterin trägst du individuell ein."

---

## Cross-Step-Probleme

### CS-01 (MITTEL): Protein-Bedarf inkonsistent über 3 Steps
- Step 3.2: 60 g/Tag (Musterantwort)
- Step 4.2: 0,8 g/kg → bei 98 kg = 78 g
- Step 6.2: 72 g/Tag (Idealgewicht 90 kg)

Drei verschiedene Werte für dasselbe Patientenmerkmal. Schüler:innen werden verwirrt.
**Empfehlung:** Auf einen klinisch korrekten Wert einigen — z. B. „bei Mangelernährung 1,2 g × 56 kg Idealgewicht = ~67 g/Tag" — und in allen Steps konsistent verwenden.

### CS-02 (NIEDRIG): Wagner-Armstrong-Klassifikation
- patient.ts: „Wagner-Armstrong Kategorie 1"
- phase-beobachten Step 2.6: „Wagner-Armstrong Kategorie 1"
- phase-durchfuehren Step 4.6: „Wagner-Armstrong Kategorie 1"
- ABER: Wagner-Armstrong ist eine Erweiterung der Wagner-Klassifikation um Infektion (A/B/C/D) und Ischämie. „Kategorie 1" allein ist eigentlich Wagner. Wagner-Armstrong wäre z. B. „1A" (oberflächliche Läsion ohne Infektion/Ischämie).
- **Empfehlung:** Entweder konsequent „Wagner Grad 1" oder „Wagner-Armstrong 1A" — die Mischform ist fachlich unsauber.

### CS-03 (NIEDRIG): Patientenalter-Konsistenz
- patient.ts: 68 Jahre
- Phase 6 Cloze: „geb. 1958, Zimmer 8" → bei aktuellem Datum 2026 wäre das 67/68 Jahre. OK.

---

## Body-Positive-Sprache & Würde — Gesamteindruck

Sprache ist überwiegend würdevoll und respektvoll:
- „Adipositas Grad II" als Diagnose, nicht „dick"/„fett"
- „Frau Schmidt" konsequent (nicht „die Patientin")
- Selbst-Stigmatisierung wird thematisiert („Scham", „Schicksal") — gut
- Humor von Frau Schmidt wird ernst genommen (Score-3-Feedback erkennt: „echter Frust hinter Humor")
- Inkontinenz-Thema sehr behutsam (Score-0 ist klar entwürdigend, Score-3 normalisierend)
- Mobilisations-Step 3.5: „nicht als Abnahme-Programm verkaufen" — klares Reframing weg von Diät-Druck

**Kritik (NIEDRIG):**
- Wort „Übergewicht" wird teilweise mit „Adipositas" vermischt — Adipositas ist die Diagnose, Übergewicht ist BMI 25–30. In B1-Texten oft als Synonym verwendet — das ist akzeptabel für Sprachvereinfachung, sollte aber im C1 sauber unterschieden bleiben.

---

## Mobilisation / Bariatrische Pflege — Prüfung

- BMI 38 (Adipositas Grad II) — **keine spezifischen bariatrischen Hilfsmittel** (XXL-Bett, Hebelifter, breite Rollatoren, Bariatrie-Stuhl) erwähnt. In der Realität wird bei Adipositas Grad II/III oft Bariatrie-Material gebraucht.
- Step 3.5 erwähnt Mobilisation „dreimal täglich kurz aufstehen und zum Waschbecken gehen" — das ist konkret, aber Hilfsmittel-frei. Bei NRS 2002 Score 3 + Belastungsinkontinenz + Atemnot-Sorge wäre ein **Sturzrisiko-Assessment + ggf. Aufstehhilfe (Bettleiter, Rollator)** angemessen.
- Kinästhetik-Bezug fehlt komplett. Bei Mobilisation einer adipösen Patientin ist Kinästhetik nach Hatch/Maietta zentral (Patient bewegt selbst, Pflege begleitet).

#### F-19 (MITTEL): Bariatrische Hilfsmittel + Sturzrisiko nicht thematisiert
- **Empfehlung:** In Phase 3 (Planen) oder Phase 4 (Durchführen) einen optionalen Step ergänzen: „Welche Hilfsmittel braucht Frau Schmidt für sichere Mobilisation?" — Bariatrische Bett-Aufrichthilfe, Antirutsch-Socken, eventuell Rollator. Sturzrisiko-Assessment (DNQP Sturz, 2022) erwähnen.

---

## Zusammenfassung

- **3 HOCH** (F-02 NRS-Falsch-Zuordnung, F-09 Matrix-Quadranten, F-16 Pflegebericht-Wertung)
- **8 MITTEL** (F-03, F-04, F-07, F-10, F-11, F-13, F-17, F-19, plus CS-01)
- **8 NIEDRIG** (F-01, F-05, F-06, F-08, F-12, F-14, F-15, F-18, plus CS-02, CS-03)

**Allgemeine Beobachtungen:**
- Sprache und Würde-Aspekt sehr stark — body-positive, ressourcenorientiert, anti-stigmatisierend.
- Standards-Bezug überdurchschnittlich gut (DNQP, DDG, AWMF, ICS, GLIM, DGE D-A-CH konsequent zitiert).
- Schwächen liegen in fachlichen Details: NRS-2002-Mechanik, Wagner-Armstrong-Verwendung, Protein-Bedarfs-Berechnung (Idealgewicht statt Istgewicht).
- Kinästhetik und bariatrische Hilfsmittel fehlen — bei Adipositas Grad II eine echte Lücke.
- Cross-Step-Inkonsistenz beim Protein-Bedarf ist die problematischste Wiederholung (3 verschiedene Zahlenwerte).

**K.O.-Verdikt:** **FAIL** (≥1 HOCH ungelöst).

Pflicht-Korrekturen vor Live-Deploy:
1. F-02 NRS 2002-Step neu konzipieren (oder als GLIM relabeln)
2. F-09 Matrix-Quadranten neu strukturieren oder klare Toleranz-Regeln
3. F-16 Pflegebericht-Musterantwort objektiver formulieren
4. CS-01 Protein-Bedarf konsistent setzen (auf Idealgewicht-Berechnung umstellen)
5. F-19 Bariatrische Mobilisations-Aspekte ergänzen (mind. ein Hinweis auf Sturzrisiko + Hilfsmittel)
