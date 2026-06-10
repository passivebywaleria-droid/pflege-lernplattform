# Kernfakten: Ernährungsassessment & Mangelernährung

| Feld | Wert |
|------|------|
| themaId | `ernaehrungsassessment` |
| ceId | `ce-02` |
| cluster | D (Ernährung & Flüssigkeit) |
| geschätzteUE | 8 |
| wissensart | handlung |
| quellen | DNQP Expertenstandard Ernährungsmanagement 2017; Pflege heute 7. Aufl. Kap. 7 (Ernährung) + Kap. 19 (Sarkopenie/Frailty); Guigoz MNA 1994; Kondrup NRS-2002 2003; WHO BMI-Klassifikation; DGEM/ESPEN 2020; Bartholomeyczik PEMU 2008 |
| einträge | 16 |
| erstellt | 2026-06-10 (Pipeline v9, Quellenbindung) |

---

### F-01: BMI-Berechnung

**Fakt:** Der Body-Mass-Index (BMI) setzt Körpergewicht und Körpergröße ins Verhältnis. Formel: BMI = Körpergewicht (kg) ÷ Körpergröße² (m²). Beispiel: 75 kg / (1,70 m)² = 25,9 kg/m². Der BMI ist ein Screening-Wert, keine Diagnose — nicht aussagekräftig bei Ödemen, Aszites, Muskelsportlern, Amputationen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Definition
**Bloom-Potential:** 1-2 (Erinnern, Verstehen)
**Primärquelle:** (WHO, BMI-Klassifikation; Pflege heute 7. Aufl., Kap. 7)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Der Body-Mass-Index betrachtet das Verhältnis von Körpergewicht und Körpergröße zueinander"
**Praxisfehler:** Größe nicht quadriert (Gewicht ÷ Größe statt Gewicht ÷ Größe²) → völlig falscher Wert.

**Misconceptions:**
- `M1`: **"Der BMI ist immer aussagekräftig, egal wer vor dir steht"** — Der BMI versagt bei Muskelsportlern (hoher Muskelanteil → hoher BMI ohne Adipositas), bei Ödemen/Aszites (Wassergewicht), bei Amputationen und bei Kindern (dort Perzentilen). Fachbegriff: "BMI-Universalitäts-Irrtum".
- `M2`: **"Die BMI-Formel ist Gewicht geteilt durch Größe"** — Die Größe muss quadriert werden: BMI = kg / (m × m). Ohne das Quadrat entsteht eine ganz andere Zahl. Fachbegriff: "Quadrat-Vergessen".
- `M3`: **"Ein normaler BMI schließt Mangelernährung aus"** — Auch ein normaler oder hoher BMI schließt Mangelernährung nicht aus (verdeckte Mangelernährung, Protein-/Vitaminmangel bei Adipösen). Entscheidend sind Gewichtsverlauf, Nahrungszufuhr und klinische Zeichen. Fachbegriff: "Normalgewicht-Trugschluss".

---

### F-02: BMI-Kategorien (WHO) und Altersanpassung

**Fakt:** WHO-BMI-Kategorien (kg/m²): <18,5 Untergewicht | 18,5-24,9 Normalgewicht | 25,0-29,9 Übergewicht (Präadipositas) | 30,0-34,9 Adipositas Grad I | 35,0-39,9 Adipositas Grad II | ≥40 Adipositas Grad III. Bei Menschen über 65 Jahren liegt der günstigste Bereich höher (ca. 22-27 kg/m²) — ein BMI unter 22 ist im Alter bereits ein Warnsignal.

**Prüfungsrelevanz:** hoch
**Wissensart:** Klassifikation
**Bloom-Potential:** 2-3 (Verstehen, Anwenden)
**Primärquelle:** (WHO, BMI-Klassifikation; Pflege heute 7. Aufl., Tab. 7.8 nach National Research Council)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Mit zunehmendem Alter sind höhere BMI-Werte wünschenswert"
**Praxisfehler:** Bei älteren Menschen die gleichen BMI-Grenzen wie bei Jüngeren anlegen → Mangelernährung bei BMI 21 wird übersehen.

**Misconceptions:**
- `M1`: **"Ab BMI 25 muss der Patient abnehmen"** — Übergewicht (25-29,9) ist nicht automatisch krankhaft; bei über 65-Jährigen gilt ein BMI bis 27 sogar als günstig. Entscheidend sind Begleiterkrankungen, Taillenumfang und Verlauf. Fachbegriff: "Automatismus-Fehler".
- `M2`: **"Bei alten Menschen gelten die gleichen BMI-Grenzen wie bei Jungen"** — Über 65 Jahre liegt der günstigste BMI-Bereich höher (22-27 kg/m²); BMI unter 22 ist bereits ein Warnsignal. Fachbegriff: "Altersgrenzen-Irrtum".
- `M3`: **"Adipositas Grad III heißt BMI 35 bis 39,9"** — BMI 35-39,9 ist Adipositas Grad II; Grad III beginnt ab BMI 40. Merkhilfe: Grad I ab 30, Grad II ab 35, Grad III ab 40. Fachbegriff: "Grenzwert-Verwechslung".

---

### F-03: Screening vs. Assessment — zweistufiges Vorgehen

**Fakt:** Der DNQP-Expertenstandard schreibt ein zweistufiges Vorgehen vor: Stufe 1 ist das Screening (kurzer Risiko-Check, 2-5 Min, bei allen Patienten binnen 24h: "Risiko ja/nein?"). Stufe 2 ist das Assessment (15-30 Min, nur bei positivem Screening: Ursachenanalyse und Pflegeplan). Assessment ist die "ausführliche Erhebung, die auch die beeinflussenden Faktoren untersucht".

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept
**Bloom-Potential:** 2-3 (Verstehen, Anwenden)
**Primärquelle:** (DNQP Ernährungsmanagement 2017; Pflege heute 7. Aufl., Kap. 7)
**Beleg:**
- Quelle: `dnqp-standards-index/ernaehrungsmanagement.txt`
- Zitat: "Anzeichen für eine drohende oder bestehende Mangelernährung"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Ausführliche Erhebung, die auch die beeinflussenden Faktoren untersucht"
**Praxisfehler:** Screening nur bei "sichtbar dünnen" Patienten machen — der Standard verlangt es für alle (auch Adipöse, verdeckte Mangelernährung).

**Misconceptions:**
- `M1`: **"Screening machst du nur bei dünnen Patienten"** — Der DNQP verlangt ein Screening für alle Patienten bei Aufnahme. Auch Adipöse können mangelernährt sein (verdeckte Mangelernährung). Fachbegriff: "Sichtdiagnose-Fehler".
- `M2`: **"Screening und Assessment sind das Gleiche"** — Screening ist kurz und breit (2-5 Min, alle, "Risiko?"), Assessment tief und gezielt (15-30 Min, nur nach positivem Screening, "Warum? Wie schlimm?"). Fachbegriff: "Begriffs-Gleichsetzung".
- `M3`: **"Assessment macht nur der Arzt"** — Das Ernährungs-Assessment ist eine pflegerische Aufgabe (DNQP). Die Pflege erfasst mit PEMU oder MNA-Long; der Arzt ergänzt Labordiagnostik. Fachbegriff: "Zuständigkeits-Irrtum".

---

### F-04: MNA (Mini Nutritional Assessment)

**Fakt:** Das MNA ist das Standard-Screening für Menschen ab 65 Jahren (geriatrische Einrichtungen). MNA-Short Form: 6 Fragen (Nahrungszufuhr, Gewichtsverlust, Mobilität, akute Erkrankung/Stress, neuropsychologische Probleme, BMI bzw. Wadenumfang), 0-14 Punkte (12-14 normal, 8-11 Risiko, 0-7 Mangelernährung). Bei Auffälligkeit folgt die MNA-Long Form. Ist der BMI nicht messbar, dient der Oberarmumfang (Werte über 22 cm normal) bzw. der Wadenumfang als Kriterium.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3-4 (Anwenden, Analysieren)
**Primärquelle:** (Guigoz, MNA 1994; Pflege heute 7. Aufl., Kap. 7)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Kriterium des Screening-Instruments Mini Nutritional Assessment (MNA)"
**Praxisfehler:** MNA bei jüngeren Erwachsenen einsetzen — es ist nur für Ältere (≥65) validiert; im Krankenhaus gilt NRS-2002.

**Misconceptions:**
- `M1`: **"Das MNA ist für alle Patienten geeignet"** — Das MNA ist ausschließlich für Menschen ab 65 Jahren validiert. Bei jüngeren Klinik-Patienten: NRS-2002; ambulant: MUST. Fachbegriff: "Altersgruppen-Fehler".
- `M2`: **"MNA-Short und MNA-Long macht man immer zusammen"** — MNA-Short kommt zuerst als Screening; MNA-Long folgt nur bei ≤11 Punkten. Bei 12-14 Punkten wäre der Long-Form überflüssig. Fachbegriff: "Stufen-Missverständnis".
- `M3`: **"Wenn kein BMI messbar ist, kann man das MNA nicht machen"** — Das MNA bietet den Waden- bzw. Oberarmumfang als Alternative (Wadenumfang <31 cm = Warnsignal). Damit bleibt das MNA auch bei Kontraktur/Amputation anwendbar. Fachbegriff: "Messwerkzeug-Irrtum".

---

### F-05: NRS-2002 (Nutritional Risk Screening) — Setting Klinik

**Fakt:** Das NRS-2002 (vom Expertenstandard "Nutritional Risk Score für den Krankenhausbereich" genannt) ist das Screening-Instrument für hospitalisierte erwachsene Patienten. 4 initiale Fragen (BMI <20,5? Gewichtsverlust? reduzierte Nahrungszufuhr letzte Woche? schwere Erkrankung?); bei mind. 1x "ja" folgt das Hauptscreening mit Ernährungs-Score (0-3) + Krankheits-Score (0-3) + Altersbonus (+1 bei ≥70). Cut-off: ≥3 Punkte = ernährungsmedizinisches Risiko → Ernährungstherapie-Plan; <3 Punkte → wöchentlich wiederholen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3-4 (Anwenden, Analysieren)
**Primärquelle:** (Kondrup, NRS-2002 2003; DNQP Ernährungsmanagement 2017; Pflege heute 7. Aufl., Kap. 7)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Nutritional Risk Score (NRS) für den Krankenhausbereich"
**Praxisfehler:** Nach negativem Pre-Screening nie wieder testen — bei Klinik-Patienten ist wöchentliche Wiederholung Pflicht (Verschlechterung nach OP/Infekt).

**Misconceptions:**
- `M1`: **"NRS-2002 nimmt man für alte Menschen im Pflegeheim"** — NRS-2002 ist für hospitalisierte Patienten; im Pflegeheim/bei mobilen Älteren gilt MNA, ambulant MUST. Fachbegriff: "Setting-Verwechslung".
- `M2`: **"Der Cut-off beim NRS-2002 liegt bei 5 Punkten"** — Der Cut-off liegt bei ≥3 Punkten; ab 3 Punkten ist ein Ernährungsplan Pflicht (Maximum 7 Punkte). Fachbegriff: "Cut-off-Verwechslung".
- `M3`: **"Wenn das Pre-Screening negativ ist, macht man nie wieder NRS"** — Bei negativem Pre-Screening wird das NRS wöchentlich wiederholt; der Status kann sich im Klinikverlauf schnell verschlechtern. Fachbegriff: "Einmal-Screening-Irrtum".

---

### F-06: PEMU (Pflegerische Erfassung von Mangelernährung und deren Ursachen)

**Fakt:** Der Expertenstandard fordert bei auffälligem Screening ein vertieftes Assessment, z. B. mit dem PEMU. Das PEMU ist das deutschsprachige Pflege-Assessment: Teil 1 erfasst den Ernährungszustand (Gewicht, BMI, Verlauf, Nahrungs-/Flüssigkeitsmenge), Teil 2 (Kern) erfasst die Ursachen in fünf Bereichen: 1) Essen/Trinken-Signale, 2) Mundgesundheit, 3) Fähigkeiten, 4) Umgebung/Angebot, 5) weitere Gründe. Ergebnis: handlungsleitende Pflegediagnose ("isst zu wenig, weil Prothese drückt und er allein isst").

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3-4 (Anwenden, Analysieren)
**Primärquelle:** (DNQP Ernährungsmanagement 2017; Bartholomeyczik PEMU 2008; Pflege heute 7. Aufl., Kap. 7)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "bei allen Patienten mit einem auffälligen Screening-Ergebnis ein vertieftes Assessment"
**Praxisfehler:** PEMU auf die Gewichtsmessung verkürzen — der eigentliche Kern ist die Ursachenanalyse in 5 Bereichen.

**Misconceptions:**
- `M1`: **"PEMU erfasst nur das Gewicht"** — Gewicht ist nur Teil 1; der Kern (Teil 2) sucht Ursachen in 5 Bereichen. Ohne Ursachen keine gezielten Maßnahmen. Fachbegriff: "Verkürzungs-Irrtum".
- `M2`: **"PEMU macht der Arzt"** — Das P in PEMU steht für "Pflegerisch"; es gehört in den Pflegeprozess. Die Pflege sieht den Patienten täglich beim Essen. Fachbegriff: "Zuständigkeits-Irrtum".
- `M3`: **"PEMU und MNA sind dasselbe"** — MNA ist ein punktbasiertes Screening/Assessment für Ältere (international); PEMU ist ein deutschsprachiges Pflege-Assessment nach 5 Ursachenbereichen. Fachbegriff: "Instrument-Gleichsetzung".

---

### F-07: DNQP-Expertenstandard Ernährungsmanagement

**Fakt:** Der DNQP-Expertenstandard Ernährungsmanagement (2017) beschreibt den pflegerischen Beitrag zur Sicherstellung einer bedürfnisorientierten und bedarfsgerechten oralen Ernährung. Er ist nach Struktur-, Prozess- und Ergebniskriterien (S-P-E) gegliedert und verlangt: Screening bei allen Patienten zu Beginn des pflegerischen Auftrags und bei akuten Veränderungen → bei Anzeichen vertieftes Assessment → individuelle Maßnahmenplanung mit Patient/Angehörigen → Umsetzung, Überprüfung, Dokumentation.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Fakt
**Bloom-Potential:** 2-3 (Verstehen, Anwenden)
**Primärquelle:** (DNQP Ernährungsmanagement 2017)
**Beleg:**
- Quelle: `dnqp-standards-index/ernaehrungsmanagement.txt`
- Zitat: "Der vorliegende Expertenstandard beschreibt den pflegerischen Beitrag zum Ernährungsmanagement"
- Zitat: "Die Pflegefachkraft erfasst bei allen Patienten/Bewohnern zu Beginn des pflegerischen Auftrags"
**Praxisfehler:** Einmaliges Screening bei Aufnahme genügt nicht — der Standard verlangt Re-Screening bei akuten Veränderungen.

**Misconceptions:**
- `M1`: **"Der Expertenstandard ist eine unverbindliche Empfehlung"** — Expertenstandards konkretisieren den pflegerischen Sorgfaltsmaßstab; ihre Nichtbeachtung ist haftungsrelevant. Fachbegriff: "Empfehlungs-Verharmlosung".
- `M2`: **"Der Standard gilt nur im Krankenhaus"** — Er gilt einrichtungsübergreifend (Klinik, Langzeitpflege, ambulant); die Screening-Instrumente sind settingspezifisch (NRS Klinik, MNA geriatrisch, MUST ambulant). Fachbegriff: "Setting-Beschränkung".
- `M3`: **"Screening reicht — Maßnahmen plant jemand anderes"** — Der Standard fordert von der Pflege auch die gemeinsame Maßnahmenplanung mit Patient/Angehörigen und deren Evaluation. Fachbegriff: "Aufgaben-Abschiebung".

---

### F-08: Drei Formen der Mangelernährung (PEM, Kachexie, Sarkopenie)

**Fakt:** Drei klinisch relevante Formen: 1) Protein-Energie-Mangelernährung (PEM) — zu geringe Nahrungszufuhr, reversibel durch Kalorien-/Eiweißzufuhr. 2) Kachexie — krankheitsassoziierter Gewichts-/Muskelverlust (Krebs, Herzinsuffizienz, COPD), tritt trotz Nahrungszufuhr auf, nicht einfach reversibel. 3) Sarkopenie — ausgeprägter altersbedingter Verlust an Muskelmasse, Muskelkraft und Muskelleistung; teilweise reversibel durch Krafttraining + Eiweiß. Die Formen können sich bei einem Patienten überlagern.

**Prüfungsrelevanz:** hoch
**Wissensart:** Klassifikation
**Bloom-Potential:** 4 (Analysieren)
**Primärquelle:** (DGEM/ESPEN 2020; Pflege heute 7. Aufl., Kap. 7 + Kap. 19)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Ausgeprägter Verlust an Muskelmasse, Muskelkraft und Muskelleistung"
- Zitat: "wenn der Gewichtsverlust und der Kräfteverfall sehr ausgeprägt ist"
**Praxisfehler:** Kachexie mit "einfachem Dünn-Sein" gleichsetzen — sie ist krankheitsbedingt und nicht durch Essen allein zu beheben.

**Misconceptions:**
- `M1`: **"Kachexie bedeutet einfach nur 'dünn sein'"** — Kachexie ist eine krankheitsbedingte Form (Krebs, Herzinsuffizienz, COPD), entsteht trotz ausreichender Nahrungszufuhr und ist nicht durch Essen allein reversibel. Fachbegriff: "Dünn-Gleichsetzung".
- `M2`: **"Sarkopenie ist dasselbe wie PEM"** — PEM entsteht durch zu geringe Nahrungszufuhr, Sarkopenie ist altersbedingter Muskelabbau (auch bei normaler Ernährung). Andere Ursache, anderer Ansatz (Sarkopenie → Eiweiß + Krafttraining). Fachbegriff: "Ursachen-Verwechslung".
- `M3`: **"Ein Patient kann nur eine Form der Mangelernährung haben"** — Die Formen überlagern sich: Ein alter, alleinlebender Krebspatient kann PEM, Kachexie und Sarkopenie gleichzeitig haben. Fachbegriff: "Exklusivitäts-Irrtum".

---

### F-09: Klinisch relevanter Gewichtsverlust

**Fakt:** Bei älteren Menschen ist jede unbeabsichtigte Gewichtsabnahme ein wichtiges Warnsignal. Klinisch relevant ist ein ungewollter Gewichtsverlust von >5% in 3 Monaten oder >10% in 6 Monaten (Pflege heute Tab. 7.9 nennt als auffällige Werte u. a. 5%/Monat, 7,5%/3 Monate, 10%/6 Monate). Berechnung: (Altgewicht − aktuelles Gewicht) ÷ Altgewicht × 100. Entscheidend ist der Prozentwert, nicht die absolute kg-Zahl. Ödeme/Aszites/Dehydratation können den Verlust verschleiern.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 4 (Analysieren, Berechnen)
**Primärquelle:** (DGEM/ESPEN 2020; Pflege heute 7. Aufl., Tab. 7.9)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Bei älteren Menschen ist jede unbeabsichtigte Gewichtsabnahme ein wichtiges Warnsignal"
**Praxisfehler:** Verlust in absoluten Kilo statt in Prozent beurteilen — 5 kg sind für 50 kg = 10%, für 100 kg = 5%.

**Misconceptions:**
- `M1`: **"Erst ab 10 kg Verlust ist es wichtig"** — Entscheidend ist der Prozentsatz, nicht die kg-Zahl. >5%/3 Monate ist auffällig. Fachbegriff: "Absolutwert-Fehler".
- `M2`: **"Wenn der Patient abnehmen wollte, ist es nicht wichtig"** — Gewollter Verlust ist kein Akut-Alarm, kann aber bei überzogenen Zielen/Eiweißmangel in Mangelernährung umschlagen; weiter dokumentieren und beobachten. Fachbegriff: "Wunsch-Ignoranz".
- `M3`: **"Bei Ödemen kann man den Gewichtsverlust normal beurteilen"** — Ödeme/Aszites verfälschen die Waage: trotz Mangelernährung kann das Gewicht normal/steigend wirken (Wassereinlagerung). Gewicht immer mit klinischer Beobachtung kombinieren. Fachbegriff: "Ödem-Falle".

---

### F-10: Klinische Zeichen der Mangelernährung (inkl. Wadenumfang)

**Fakt:** Sichtbare Zeichen der Mangelernährung (Beobachtung von Kopf bis Fuß): eingefallene Wangen, hervorstehende Schlüsselbeine/Rippen, schlaffe Oberarm-/Oberschenkelmuskeln, trockene schuppige Haut, brüchige Nägel/Haare, lockere Kleidung. Messbar: Oberarmumfang (MNA-Kriterium, Werte über 22 cm normal) und Wadenumfang — ein Wadenumfang unter 31 cm kann ein zusätzlicher Hinweis auf eine Mangelernährung sein. Diese Zeichen sind spät; das Screening soll früher greifen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (DGEM/ESPEN 2020; Guigoz MNA 1994; Pflege heute 7. Aufl., Kap. 7)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Ein Wadenumfang unter 31 cm kann ein zusätzlicher Hinweis auf eine Mangelernährung sein"
**Praxisfehler:** Aus normalem Hautbild auf gute Ernährung schließen — Hautveränderungen sind späte Zeichen.

**Misconceptions:**
- `M1`: **"Wenn die Haut gut aussieht, kann keine Mangelernährung vorliegen"** — Hautveränderungen sind späte Zeichen; Muskelmasse/Eiweißreserven können bereits abgebaut sein. Oberarm-/Wadenumfang, Gewichtsverlauf, MNA prüfen. Fachbegriff: "Oberflächen-Trugschluss".
- `M2`: **"Dicke Menschen können keine klinischen Zeichen von Mangelernährung haben"** — Die sarkopenische Adipositas (hoher BMI + niedrige Muskelmasse) ist eine eigene Form; schlaffe Muskeln, brüchige Haare, schlechte Wundheilung trotz Übergewicht. Fachbegriff: "Adipositas-Ausschluss".
- `M3`: **"Wadenumfang unter 31 cm ist normal bei älteren Frauen"** — <31 cm ist ein Warnsignal, unabhängig von Geschlecht/Alter; es korreliert mit Muskelmasse und Sturzrisiko (Sarkopenie). Fachbegriff: "Alters-Normalisierung".

---

### F-11: Laborwerte im Ernährungsassessment

**Fakt:** Zentrale Laborwerte: Albumin (langsam, Halbwertszeit ca. 20 Tage, <35 g/l auffällig, zeigt langfristige Eiweißversorgung), Präalbumin (schnell, 2-3 Tage, geeignet für kurzfristiges Therapie-Monitoring), Transferrin (ca. 8 Tage), Gesamteiweiß, Lymphozyten, CRP. Eiweißmangel führt zu Ödemen und bedingt im Alter einen Muskelabbau. Kein Einzelwert reicht: Entzündung (CRP), Leber-/Niereninsuffizienz und Dehydratation verfälschen die Proteinwerte unabhängig vom Ernährungsstatus.

**Prüfungsrelevanz:** mittel
**Wissensart:** Fakt
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (DGEM/ESPEN 2020; Pflege heute 7. Aufl., Kap. 7)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Eiweißmangel führt zu Ödemen"
- Zitat: "Im Alter bedingt er einen Muskelabbau"
**Praxisfehler:** Albumin isoliert als Mangelernährungsmarker werten — es wird auch durch Entzündung gesenkt; immer CRP mitbestimmen.

**Misconceptions:**
- `M1`: **"Albumin allein reicht, um Mangelernährung zu beurteilen"** — Albumin wird auch durch Entzündung (CRP), Leber-/Niereninsuffizienz und Dehydratation verändert. Niedriges Albumin bei akuter Entzündung sagt nichts über die Ernährung. Fachbegriff: "Einzelwert-Irrtum".
- `M2`: **"Präalbumin und Albumin zeigen das Gleiche"** — Die Halbwertszeit unterscheidet sie: Albumin ~20 Tage (Langzeitstatus), Präalbumin 2-3 Tage (aktuelle Veränderung, Therapie-Monitoring). Fachbegriff: "HWZ-Verwechslung".
- `M3`: **"Bei Dehydratation sind Laborwerte nicht verwertbar"** — Dehydratation verfälscht Proteinwerte nach oben (Pseudonormalisierung); niedriges Albumin trotz Dehydratation belegt Mangelernährung sehr sicher, normale Werte sind mit Vorsicht zu deuten. Fachbegriff: "Dehydratations-Totalausfall".

---

### F-12: Flüssigkeitsbilanz

**Fakt:** Die Flüssigkeitsbilanz dokumentiert Einfuhr und Ausfuhr über 24 Stunden (Einfuhr − Ausfuhr = Bilanz). Einfuhr: alle Getränke, Suppen, Infusionen, Sondenkost, Wassergehalt der Nahrung. Ausfuhr: Urin, Stuhl (v. a. Durchfall), Erbrochenes, Drainagen, Perspiratio insensibilis (ca. 700-900 ml/d über Haut und Atmung, bei Fieber +500 ml/°C), Schwitzen. Bei einem gesunden Menschen weicht die Einfuhr von der Ausfuhr in 24 Std. nur maximal 250 ml ab. Begleitend täglich wiegen (1 kg ≈ 1 Liter kurzfristig).

**Prüfungsrelevanz:** hoch
**Wissensart:** Handlung
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (DNQP Ernährungsmanagement 2017; Pflege heute 7. Aufl., Kap. 7/8)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "weicht die Einfuhr von der Ausfuhr in 24 Std. nur maximal 250 ml ab"
**Praxisfehler:** Einfuhr nur als "Trinken" erfassen — Infusionen, Sondenkost und Suppen gehören dazu, sonst wird die Einfuhr systematisch unterschätzt.

**Misconceptions:**
- `M1`: **"Einfuhr = nur Trinken"** — Zur Einfuhr zählen alle Flüssigkeiten: Getränke, Suppen, Eis/Wackelpudding, Infusionen, Sondenkost + Spülvolumen. Fachbegriff: "Einfuhr-Verkürzung".
- `M2`: **"Perspiratio insensibilis spielt keine Rolle in der Bilanz"** — Die Perspiratio insensibilis beträgt täglich 700-900 ml, bei Fieber +500 ml/°C; sie ignorieren unterschätzt die Ausfuhr deutlich. Fachbegriff: "Unsichtbare-Ausscheidung-Ignoranz".
- `M3`: **"1 Kilo mehr = 1 Liter Wasser mehr (immer)"** — Als Daumenregel gilt 1 kg ≈ 1 Liter nur für kurzfristige Veränderungen (Tage); langfristig kann Gewicht auch Muskel/Fett sein. Fachbegriff: "Gewichts-Volumen-Vereinfachung".

---

### F-13: Exsikkosezeichen (Dehydratation)

**Fakt:** Zeichen der Exsikkose: trockene Mundschleimhaut, fehlender Speichelsee, eingefallene Augen, dunkler/konzentrierter Urin, verminderte Urinausscheidung (Oligurie), Tachykardie, Hypotonie, zunehmende Lethargie/Verwirrtheit. Wichtig: Stehende Hautfalten sind bei alten Menschen unzuverlässig — "Bei alten Menschen treten 'stehende Hautfalten' auch ohne Dehydratation auf". Bei Älteren ist das Durstempfinden verringert; plötzliche Verwirrtheit (Delir) ist oft das erste Zeichen — zuerst an Exsikkose/Infekt/Medikamente denken, nicht an Demenz.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7.12 Dehydratationsprophylaxe)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Bei alten Menschen treten „stehende Hautfalten“ auch ohne Dehydratation auf"
- Zitat: "Veränderung der gewohnten geistigen Aktivität oder Verwirrtheit"
**Praxisfehler:** Auf das Durstgefühl des alten Menschen vertrauen — das Durstempfinden ist im Alter reduziert; aktive Überwachung (Trinkplan, Bilanz) ist Pflicht.

**Misconceptions:**
- `M1`: **"Alte Menschen sagen schon, wenn sie durstig sind"** — Das Durstempfinden ist im Alter deutlich reduziert ("Verringertes Durstempfinden, besonders bei alten"); aktive Überwachung durch die Pflege ist nötig. Fachbegriff: "Durst-Mythos".
- `M2`: **"Stehende Hautfalten sind bei alten Menschen ein sicheres Zeichen"** — Der Hautturgor ist bei Älteren unzuverlässig (altersbedingter Kollagenabbau); wichtiger sind trockene Schleimhäute, Urin-Konzentration, Blutdruck/Puls, Labor. Fachbegriff: "Turgortest-Überschätzung".
- `M3`: **"Plötzliche Verwirrtheit bei Älteren ist immer Demenz"** — Plötzliche Verwirrtheit ist oft ein Delir durch Exsikkose, Infektion (HWI) oder Medikamente; Demenz entwickelt sich schleichend. Fachbegriff: "Demenz-Verwechslung".

---

### F-14: Flüssigkeitsbedarf

**Fakt:** Richtwert für Erwachsene: ca. 30-35 ml Flüssigkeit pro kg Körpergewicht pro Tag (ein 70-kg-Mensch ≈ 2,1 l; nach DGE-Tagesbilanz ca. 2,6 l Wasseraufnahme inkl. Nahrung). Davon ca. 1,5 l über Getränke, der Rest aus fester Nahrung. Die Flüssigkeitsaufnahme soll ungefähr der Abgabe entsprechen; bei erhöhter Abgabe (Fieber +500 ml/°C, Durchfall, Schwitzen, Hitze) entsprechend mehr. Achtung: Bei Herz-/Niereninsuffizienz gilt ärztlich angeordnete Restriktion.

**Prüfungsrelevanz:** mittel
**Wissensart:** Fakt
**Bloom-Potential:** 3 (Anwenden, Berechnen)
**Primärquelle:** (DGE; DGEM/ESPEN 2020; Pflege heute 7. Aufl., Tab. 7.16)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Die Flüssigkeitsaufnahme soll ungefähr der Abgabe entsprechen"
- Zitat: "Tägliche Wasseraufnahme und -abgabe nach der Empfehlung der Deutschen Gesellschaft für Ernährung"
**Praxisfehler:** Pauschal "viel trinken" empfehlen, ohne ärztliche Restriktion bei Herz-/Niereninsuffizienz zu beachten.

**Misconceptions:**
- `M1`: **"Jeder soll mindestens 2-3 Liter trinken"** — Der Bedarf ist gewichts- und situationsabhängig (30-35 ml/kg) und bei Herz-/Niereninsuffizienz ärztlich begrenzt. Fachbegriff: "Pauschal-Trinkmenge".
- `M2`: **"Tee und Suppe zählen nicht zur Flüssigkeit"** — Alle Getränke und flüssigkeitsreiche Speisen (Suppe, Eis) zählen zur Einfuhr; Kaffee/Tee in normalen Mengen werden wie jedes andere Getränk berücksichtigt. Fachbegriff: "Getränke-Ausschluss".
- `M3`: **"Bei Fieber bleibt der Flüssigkeitsbedarf gleich"** — Bei Fieber steigt der Bedarf (ca. +500 ml pro °C über 37 °C), ebenso bei Durchfall/Schwitzen/Hitze. Fachbegriff: "Bedarfs-Konstanz-Irrtum".

---

### F-15: Maßnahmenableitung aus dem Assessment

**Fakt:** Pflegemaßnahmen werden individuell aus den PEMU-Ursachen abgeleitet — nicht pauschal "mehr essen". Beispiele: Prothese drückt → Zahnarztkonsil + weiche Kost; Dysphagie → Logopädie + Konsistenzanpassung; kein Appetit → Lieblingsspeisen + 5-6 kleine Portionen; einsam → Esskreis/Angehörige. Bei bestätigter Mangelernährung zusätzlich: Speisen mit Butter, Sahne oder hochwertigen Ölen anreichern, Ergänzung durch (hochkalorische) Trinknahrung, eiweißreiche Kost (ca. 1,0-1,5 g/kg KG/Tag), tägliches Wiegen, Evaluation nach 1-2 Wochen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 5 (Bewerten, Planen)
**Primärquelle:** (DNQP Ernährungsmanagement 2017; DGEM/ESPEN 2020; Pflege heute 7. Aufl., Kap. 7)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Speisen mit Butter, Sahne oder hochwertigen Ölen anreichern"
**Praxisfehler:** Reflexartig Trinknahrung verordnen, ohne die Ursache zu klären — eine drückende Prothese wird nicht durch Trinknahrung behoben.

**Misconceptions:**
- `M1`: **"Die erste Maßnahme bei Mangelernährung ist immer Trinknahrung"** — Zuerst die Ursache klären (PEMU); Trinknahrung ist eine Ergänzung, wenn normale Kost nicht ausreicht. Fachbegriff: "Supplement-Reflex".
- `M2`: **"Bei Mangelernährung hilft 'viel essen auf einmal'"** — Große Portionen überfordern Mangelernährte (Völlegefühl, Refeeding-Risiko); besser 5-6 kleine, energie- und eiweißreich angereicherte Mahlzeiten. Fachbegriff: "Mengen-Fehler".
- `M3`: **"Nach Start der Ernährungstherapie muss nicht mehr evaluiert werden"** — Der DNQP verlangt regelmäßige Evaluation (tägl. Wiegen, Protokoll, Überprüfung nach 1-2 Wochen) und Plananpassung. Fachbegriff: "Einmal-Plan-Irrtum".

---

### F-16: Dokumentation des Ernährungsmanagements

**Fakt:** Dokumentiert werden: Screening-Instrument + Score + Datum, Assessment-Ergebnis (PEMU-Ursachen), Gewicht/BMI/Gewichtsverlauf, Flüssigkeitsbilanz/Trinkplan (wenn angeordnet), Pflegediagnose, Maßnahmen mit Verantwortlichkeit und Zeit, Evaluations-Termin. Die objektiven Daten erfolgen an festgelegter Stelle; Ernährungszustand und -verhalten werden im Anamnesebogen, im Pflegebericht oder in einem speziellen Screening oder Assessment dokumentiert — sachlich, zeitnah, nachvollziehbar, mit Handzeichen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Dokumentation
**Bloom-Potential:** 4 (Analysieren, Strukturieren)
**Primärquelle:** (DNQP Ernährungsmanagement 2017; Pflege heute 7. Aufl., Kap. 7.2.2)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "werden im Anamnesebogen, im Pflegebericht oder in einem speziellen Screening oder Assessment dokumentiert"
**Praxisfehler:** Nur "Patient isst wenig" dokumentieren — ohne Score, Ursachen, Maßnahmen und Evaluationstermin ist die Doku für Kollegen nicht handlungsleitend.

**Misconceptions:**
- `M1`: **"Es reicht zu dokumentieren, dass der Patient wenig isst"** — Die Dokumentation muss Screening-Score, Ursachen (PEMU), Maßnahmen mit Verantwortlichkeit und Evaluationstermin enthalten, damit Kollegen weiterarbeiten können. Fachbegriff: "Verkürzungs-Doku".
- `M2`: **"Subjektive Wertungen gehören in die Doku"** — Dokumentation ist sachlich, wertfrei und nachvollziehbar; Wertungen ("isst aus Bequemlichkeit nicht") sind unzulässig. Fachbegriff: "Wertungs-Eintrag".
- `M3`: **"Dokumentation ist nur rechtliche Absicherung"** — Sie ist primär Steuerungsinstrument des Pflegeprozesses (Verlauf, Evaluation, Übergabe) und zugleich rechtlicher Nachweis. Fachbegriff: "Reine-Absicherungs-Sicht".
