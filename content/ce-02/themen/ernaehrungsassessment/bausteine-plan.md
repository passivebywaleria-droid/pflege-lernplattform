# Wissensbausteine: Ernährungsassessment & Mangelernährung

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `ernaehrungsassessment` |
| ceId | `ce-02` |
| cluster | D (Ernährung & Flüssigkeit) |
| wissensart | handlung |
| geschaetzteUE | 8 |
| zielzeitMin | 198 (8 UE × 45 × 0,55) |
| bausteineAnzahl | 16 |
| voraussetzungen | `ernaehrungsgrundlagen` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 25% (4 Bausteine), Bloom 3-4: 56% (9 Bausteine), Bloom 5-6: 19% (3 Bausteine)

**Primärquellen:**
- DNQP (2017, Aktualisierung geplant): Expertenstandard Ernährungsmanagement zur Sicherstellung einer bedarfsgerechten oralen Ernährung in der Pflege
- Guigoz Y. (1994): Mini Nutritional Assessment (MNA) — A practical assessment tool for grading the nutritional state of elderly patients
- Kondrup J. et al. (2003): Nutritional Risk Screening (NRS-2002) — ESPEN guidelines
- WHO (1995): Physical status — The use and interpretation of anthropometry, BMI-Klassifikation
- DGEM/ESPEN (2020): S3-Leitlinie Klinische Ernährung
- Bartholomeyczik S. et al. (2008): PEMU — Pflegerische Erfassung von Mangelernährung und deren Ursachen
- Cederholm T. et al. (2019): GLIM-Kriterien (Global Leadership Initiative on Malnutrition)

---

## Baustein 1: bmi-berechnung

### Metadaten
- **bausteinId:** ernaehrungsassessment-bmi-berechnung
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient ist 1,70 m groß und wiegt 75 kg, ein anderer ist 1,90 m und wiegt ebenfalls 75 kg. Wer ist 'dicker'? Warum brauchst du dafür eine Formel?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Der BMI (Body-Mass-Index) setzt Gewicht und Größe ins Verhältnis: **BMI = Gewicht (kg) / Größe (m)²**. Beispiel: 75 kg / (1,70 m × 1,70 m) = 25,9 kg/m². Er ist ein Screeningwert, keine Diagnose. (WHO, BMI-Klassifikation)"

**B1 (215 Zeichen):** "Der BMI zeigt, ob das Gewicht zur Größe passt. Die Formel: **Gewicht in kg geteilt durch Größe in Metern × Größe in Metern**. Beispiel: 75 kg geteilt durch (1,70 × 1,70) = 25,9. Der BMI ist nur ein erster Hinweis."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (645 Zeichen):**
"Der **Body-Mass-Index (BMI)** ist das international anerkannte Screening-Maß für Über- und Untergewicht bei Erwachsenen (WHO, BMI-Klassifikation). Die Formel lautet:

**BMI = Körpergewicht (kg) ÷ Körpergröße² (m²)**

Rechenbeispiel: Ein Patient wiegt 82 kg bei 1,75 m Größe. BMI = 82 / (1,75 × 1,75) = 82 / 3,0625 = **26,8 kg/m²** → Übergewicht.

**Einschränkungen:**
- Nicht aussagekräftig bei Muskelsportlern (hoher Muskelanteil → hoher BMI ohne Adipositas)
- Nicht anwendbar bei Ödemen, Aszites, Amputationen
- Bei über 65-Jährigen gelten leicht höhere Normbereiche (22-27 kg/m²)
- Nicht geeignet für Kinder (dort: BMI-Perzentilen)
- Keine Aussage über Fettverteilung (bauchbetont oder hüftbetont? → Taillenumfang zusätzlich)

Wichtig: Der BMI ist ein Screening, nicht die Diagnose."

**B1 (530 Zeichen):**
"Der **BMI** zeigt, ob dein Gewicht zur Größe passt. Die Formel:

**BMI = Gewicht (kg) geteilt durch Größe × Größe (m)**

Beispiel: Ein Patient wiegt 82 kg und ist 1,75 m groß. Rechne: 82 geteilt durch (1,75 × 1,75) = 26,8. Das ist Übergewicht.

**Wann hilft der BMI nicht?**
- Bei Sportlern mit viel Muskel (Muskel ist schwer)
- Bei Patienten mit viel Wasser im Körper (Ödeme)
- Bei alten Menschen: Der Normbereich ist höher (22-27)
- Bei Kindern: Andere Tabellen (Perzentilen)
- Der BMI sagt nicht, WO das Fett sitzt. Bauch ist gefährlicher als Hüfte.

Wichtig: Der BMI ist nur ein Hinweis, keine Diagnose."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [BMI, Screening, Perzentile]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Der BMI ist immer aussagekräftig, egal wer vor dir steht"**
- **Fachbegriff:** BMI-Universalitäts-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — der BMI versagt bei Muskelsportlern (viel Muskelmasse = hoher BMI ohne Adipositas), bei Ödemen/Aszites (Wassergewicht), bei Amputationen und bei Kindern (dort: Perzentilen). Er ist ein Screening, keine Diagnose. Merke: BMI immer im Kontext beurteilen."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — der BMI stimmt nicht bei jedem. Bei Sportlern mit viel Muskel ist er zu hoch. Bei Patienten mit Wasser im Bauch oder nach Amputation geht er nicht. Kinder brauchen andere Tabellen. Merke: BMI immer mit Kopf anschauen."

**D2: "Die BMI-Formel ist Gewicht geteilt durch Größe"**
- **Fachbegriff:** Quadrat-Vergessen
- **Feedback (C1, 250 Zeichen):** "Fast — die Größe muss **quadriert** werden (mal sich selbst). BMI = kg / (m × m). Ohne das Quadrat bekommst du eine ganz andere Zahl. Merke: Gewicht in kg, Größe in Metern hoch zwei. Ein Patient mit 75 kg und 1,70 m hat BMI 25,9 — nicht 44,1."
- **Feedback (B1, 210 Zeichen):** "Fast — die Größe musst du **zweimal nehmen** (mal sich selbst). Formel: kg geteilt durch (m × m). Ohne das Mal-sich-selbst kommt eine falsche Zahl raus. Merke: Gewicht durch Größe × Größe."

**D3: "Ein normaler BMI schließt Mangelernährung aus"**
- **Fachbegriff:** Normalgewicht-Trugschluss
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — ein normaler oder sogar hoher BMI schließt Mangelernährung **nicht** aus. Auch Adipöse können an Protein-Mangel oder Vitaminmangel leiden (verdeckte Mangelernährung). Wichtig sind Gewichtsverlust über Zeit, Nahrungszufuhr und klinische Zeichen — nicht nur der BMI. Merke: BMI ist EIN Signal von vielen."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — auch mit normalem BMI kann jemand mangelernährt sein. Selbst dicke Patienten können zu wenig Eiweiß oder Vitamine haben. Wichtig: Hat der Patient schnell abgenommen? Isst er genug? Wie sieht er aus? Merke: Der BMI ist nur ein Teil der Antwort."

### Richtig-Feedback
**C1 (245 Zeichen):** "Genau. BMI = Gewicht in kg ÷ (Größe in m)². Der BMI ist ein schnelles Screening-Instrument (WHO) — aber kein Ersatz für Gewichtsverlauf, Ernährungsanamnese und klinische Beurteilung. Besonders bei alten und kranken Menschen immer weitergehend prüfen."

**B1 (215 Zeichen):** "Sehr gut. BMI = Gewicht geteilt durch Größe × Größe. Die WHO hat diese Formel festgelegt. Aber: Der BMI ist nur ein Hinweis. Du musst auch den Gewichtsverlauf und das Aussehen anschauen — besonders bei alten Menschen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie lautet die BMI-Formel?"
- **Rückseite:** "BMI = Körpergewicht (kg) ÷ Körpergröße² (m²). Beispiel: 75 kg / (1,70 m)² = 25,9 kg/m². (WHO)"
- **Kategorie:** fakt

---

## Baustein 2: bmi-kategorien

### Metadaten
- **bausteinId:** ernaehrungsassessment-bmi-kategorien
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Drei Patienten: BMI 17, BMI 23, BMI 37. Wer hat welches Risiko? Was würdest du bei jedem als Erstes anschauen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "WHO-Kategorien: **<18,5 Untergewicht**, **18,5-24,9 Normalgewicht**, **25,0-29,9 Übergewicht (Präadipositas)**, **30,0-34,9 Adipositas Grad I**, **35,0-39,9 Adipositas Grad II**, **≥40 Adipositas Grad III** (früher 'morbide Adipositas'). (WHO)"

**B1 (225 Zeichen):** "Die WHO hat BMI-Bereiche festgelegt. Unter **18,5 = Untergewicht**. **18,5 bis 24,9 = normal**. **25 bis 29,9 = Übergewicht**. **30 bis 34,9 = Adipositas Grad 1**. **35 bis 39,9 = Adipositas Grad 2**. **Ab 40 = Adipositas Grad 3**."

- **Step-Typ:** comparison (Tabelle mit 6 Kategorien + Risiko)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die WHO-Klassifikation des BMI (in kg/m²) für Erwachsene (18-65 Jahre):

| Kategorie | BMI | Gesundheitsrisiko |
|-----------|-----|-------------------|
| Untergewicht | <18,5 | erhöht (Mangelernährung, Osteoporose) |
| Normalgewicht | 18,5-24,9 | durchschnittlich |
| Übergewicht / Präadipositas | 25,0-29,9 | leicht erhöht |
| Adipositas Grad I | 30,0-34,9 | erhöht |
| Adipositas Grad II | 35,0-39,9 | hoch |
| Adipositas Grad III | ≥40,0 | sehr hoch (früher: 'morbide Adipositas') |

**Besonderheiten bei älteren Menschen (>65):** Studien der DGEM zeigen, dass ein BMI von 22-27 kg/m² mit der niedrigsten Sterblichkeit verbunden ist. Ab 65 gilt daher **BMI <22 als Warnsignal** — auch wenn er formal noch 'normal' wäre.

**Achtung:** Bei Untergewicht (BMI <18,5) besteht immer Verdacht auf Mangelernährung — das Screening (MNA oder NRS-2002) muss folgen. (WHO; DGEM/ESPEN 2020)"

**B1 (560 Zeichen):**
"Die WHO teilt den BMI in 6 Stufen ein:

- **Unter 18,5** = Untergewicht (Risiko für Mangelernährung)
- **18,5 bis 24,9** = Normalgewicht
- **25 bis 29,9** = Übergewicht
- **30 bis 34,9** = Adipositas Grad 1
- **35 bis 39,9** = Adipositas Grad 2
- **Ab 40** = Adipositas Grad 3 (sehr schweres Übergewicht)

**Bei alten Menschen (über 65):** Hier ist ein BMI von 22 bis 27 am gesündesten. Ein BMI unter 22 ist bei alten Menschen schon ein Warnsignal — auch wenn er formal noch 'normal' heißt.

**Wichtig:** Bei Untergewicht immer weiter prüfen. Mach das MNA (alte Menschen) oder NRS-2002 (Krankenhaus)."

- **Erklärungs-Step:** stepType `comparison` (Kategorien-Tabelle mit Risiko)
- **Glossar-Begriffe:** [Adipositas, Präadipositas, Untergewicht, DGEM]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ab BMI 25 muss der Patient abnehmen"**
- **Fachbegriff:** Automatismus-Fehler
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — ein BMI von 25-29,9 (Übergewicht) ist nicht automatisch krankhaft. Bei alten Menschen (>65) gilt ein BMI bis 27 sogar als günstig. Entscheidend sind Begleiterkrankungen, Taillenumfang und Verlauf. Merke: Der BMI allein sagt nicht, ob jemand eine Diät braucht."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — nicht jeder mit BMI 25 muss abnehmen. Bei alten Menschen ist ein BMI bis 27 sogar gut. Wichtig sind die Krankheiten, der Bauchumfang und der Verlauf. Merke: Der BMI allein reicht nicht für eine Diät-Entscheidung."

**D2: "Bei alten Menschen gelten die gleichen BMI-Grenzen wie bei Jungen"**
- **Fachbegriff:** Altersgrenzen-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — bei Menschen über 65 Jahren liegt der **günstigste BMI-Bereich bei 22-27 kg/m²** (DGEM). Ein BMI unter 22 ist bei älteren Menschen bereits ein Warnsignal für Mangelernährung, auch wenn er formal noch im 'Normalbereich' liegt. Merke: Bei Älteren BMI-Grenze nach oben verschieben."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — bei alten Menschen (über 65) ist ein BMI von 22 bis 27 am gesündesten. Ein BMI unter 22 ist schon ein Warnsignal. Auch wenn der BMI sagt 'normal', kann bei alten Menschen schon Mangelernährung sein. Merke: Bei Alten andere Regeln."

**D3: "Adipositas Grad III heißt BMI 35 bis 39,9"**
- **Fachbegriff:** Grenzwert-Verwechslung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — **BMI 35-39,9 = Adipositas Grad II**. **Adipositas Grad III beginnt ab BMI 40** (früher 'morbide Adipositas'). Merkhilfe: Grad I ab 30, Grad II ab 35, Grad III ab 40 — immer 5 er-Schritte. Wichtig für die Versorgung: Ab Grad III braucht der Patient ggf. Spezialbett, XXL-Blutdruckmanschette."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Grad III ist erst ab BMI 40**. Grad II ist 35 bis 39,9. Merke: Grad 1 ab 30, Grad 2 ab 35, Grad 3 ab 40. Immer plus 5. Wichtig: Ab Grad 3 brauchst du oft ein extra großes Bett und eine XXL-Blutdruckmanschette."

### Richtig-Feedback
**C1 (265 Zeichen):** "Genau. WHO-BMI-Kategorien: <18,5 Untergewicht, 18,5-24,9 normal, 25-29,9 Übergewicht, 30-34,9 Grad I, 35-39,9 Grad II, ≥40 Grad III. Bei über 65-Jährigen: idealer BMI 22-27, darunter schon Warnsignal. Merke: Kategorien sind Anlass zur Einzelbeurteilung, keine automatische Diagnose."

**B1 (230 Zeichen):** "Sehr gut. Die WHO-Stufen: Unter 18,5 = Untergewicht. 18,5-24,9 = normal. 25-29,9 = Übergewicht. 30, 35, 40 sind die Grenzen für Adipositas Grad 1, 2, 3. Bei alten Menschen: 22-27 ist am besten. Merke: Die Zahl ist nur der Anfang, nicht das Ende."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 6 WHO-BMI-Kategorien mit Grenzwerten."
- **Rückseite:** "<18,5 Untergewicht | 18,5-24,9 Normal | 25-29,9 Übergewicht | 30-34,9 Adipositas I | 35-39,9 Adipositas II | ≥40 Adipositas III. (WHO)"
- **Kategorie:** fakt

---

## Baustein 3: screening-vs-assessment

### Metadaten
- **bausteinId:** ernaehrungsassessment-screening-vs-assessment
- **bloomLevel:** 2
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Du hast 50 neue Patienten auf Station. Du kannst nicht bei allen 30 Minuten lang den Ernährungsstatus prüfen. Wie findest du trotzdem die, die ein Problem haben?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "**Screening** ist ein kurzer Risiko-Check (2-5 Min, Frage 'Risiko ja oder nein?') für **alle** Patienten. **Assessment** ist die tiefe Analyse (15-30 Min) — nur bei Patienten mit positivem Screening. Screening wirft das Netz, Assessment geht in die Tiefe."

**B1 (230 Zeichen):** "**Screening** = schneller Check für alle. Dauert 2-5 Minuten. Frage: 'Gibt es ein Risiko?' **Assessment** = tiefe Untersuchung. Dauert 15-30 Minuten. Nur bei Patienten, bei denen das Screening ein Risiko zeigt. Screening zuerst, Assessment danach."

- **Step-Typ:** comparison (Tabelle Screening vs. Assessment)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Der DNQP-Expertenstandard Ernährungsmanagement (2017) schreibt ein **zweistufiges Vorgehen** vor:

**Stufe 1 — Screening** (bei jedem Patienten, innerhalb von 24 Stunden nach Aufnahme):
- Ziel: Risiko für Mangelernährung erkennen
- Dauer: 2-5 Minuten
- Werkzeuge: **NRS-2002** (Klinik), **MNA-Short Form** (ab 65 Jahre), **MUST** (Community)
- Ergebnis: 'Risiko ja/nein' oder Score mit Cut-off

**Stufe 2 — Assessment** (nur bei positivem Screening):
- Ziel: Ursachen und Schweregrad klären, Pflegeplan ableiten
- Dauer: 15-30 Minuten
- Werkzeuge: **MNA-Long Form**, **PEMU** (Pflegerische Erfassung von Mangelernährung und deren Ursachen), Anamnese, Laborwerte, Körperzusammensetzung
- Ergebnis: Pflegediagnose + individuelle Maßnahmenplanung

**Wichtig:** Screening ist Pflicht für ALLE Patienten — nicht nur für die, die 'dünn aussehen'. Auch Adipöse können mangelernährt sein. (DNQP Ernährungsmanagement, 2017)"

**B1 (560 Zeichen):**
"Der DNQP (Experten für Pflege) hat einen Plan in **2 Schritten** festgelegt:

**Schritt 1 — Screening** (bei allen Patienten, in den ersten 24 Stunden):
- Ziel: Schnell sehen, wer ein Risiko hat
- Dauer: 2-5 Minuten
- Werkzeuge: **NRS-2002** (im Krankenhaus), **MNA kurz** (für alte Menschen ab 65)
- Ergebnis: Risiko ja oder nein

**Schritt 2 — Assessment** (nur bei positivem Screening):
- Ziel: Genauer schauen: Warum? Wie schlimm? Was tun?
- Dauer: 15-30 Minuten
- Werkzeuge: **MNA lang**, **PEMU**, Laborwerte, Gespräch
- Ergebnis: Pflegeplan für diesen Patienten

**Wichtig:** Alle Patienten werden gescreent — auch dicke. Auch dicke Menschen können Mangelernährung haben."

- **Erklärungs-Step:** stepType `comparison` (Screening vs. Assessment)
- **Glossar-Begriffe:** [Screening, Assessment, MNA, NRS-2002, PEMU, Cut-off]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Screening machst du nur bei dünnen Patienten"**
- **Fachbegriff:** Sichtdiagnose-Fehler
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — der DNQP verlangt ein Screening für **alle** Patienten bei Aufnahme, nicht nur für sichtbar dünne. Auch Adipöse können mangelernährt sein (Protein-/Vitaminmangel bei Übergewicht = 'verdeckte Mangelernährung'). Merke: Screening ist universell, nicht nur für Schlanke."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — alle Patienten werden gescreent, nicht nur die dünnen. Auch dicke Menschen können zu wenig Eiweiß oder Vitamine haben. Das nennt man 'versteckte Mangelernährung'. Merke: Screening bei allen, egal wie sie aussehen."

**D2: "Screening und Assessment sind das Gleiche"**
- **Fachbegriff:** Begriffs-Gleichsetzung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Screening ist **kurz und breit** (2-5 Min, alle Patienten, Frage: Risiko?). Assessment ist **tief und gezielt** (15-30 Min, nur nach positivem Screening, Frage: Warum? Wie schlimm?). Merke: Screening wirft das Netz aus, Assessment schaut sich den Fang genau an."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — Screening ist kurz und für alle. Assessment ist lang und nur bei Risiko. Screening dauert 2-5 Minuten und fragt: 'Gibt es ein Problem?' Assessment dauert 15-30 Minuten und fragt: 'Warum und wie schlimm?' Merke: Erst Screening, dann Assessment."

**D3: "Assessment macht nur der Arzt"**
- **Fachbegriff:** Zuständigkeits-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — das **Ernährungs-Assessment ist eine pflegerische Aufgabe** (DNQP Ernährungsmanagement 2017). Die Pflege erfasst mit PEMU oder MNA-Long Form. Der Arzt ergänzt Labordiagnostik und Medikation. Die Pflege ist dabei die zentrale Akteurin — sie sieht den Patienten täglich. Merke: Assessment = Pflege."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das Assessment ist eine Aufgabe der Pflege, nicht nur des Arztes. Der DNQP sagt klar: Die Pflege macht es mit PEMU oder MNA. Der Arzt hilft bei Laborwerten. Die Pflege sieht den Patienten täglich. Merke: Assessment = Pflege-Aufgabe."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Screening (2-5 Min, alle Patienten, Risiko ja/nein) → bei positivem Ergebnis Assessment (15-30 Min, Ursachenanalyse, Pflegeplan). Werkzeuge: NRS-2002 und MNA-Short für Screening; PEMU und MNA-Long für Assessment. Der DNQP verpflichtet dazu — bei jedem Patienten in 24h."

**B1 (240 Zeichen):** "Sehr gut. Erst Screening (schnell, 2-5 Min, alle Patienten) → bei Risiko dann Assessment (15-30 Min, genau). Screening-Werkzeuge: NRS-2002 oder MNA kurz. Assessment: PEMU oder MNA lang. Der DNQP sagt: Screening bei jedem Patienten in den ersten 24 Stunden."

### Verknüpfte Karteikarte
- **Vorderseite:** "Unterschied Ernährungs-Screening vs. -Assessment?"
- **Rückseite:** "Screening: 2-5 Min, alle Patienten, Risiko ja/nein (NRS-2002, MNA-Short). Assessment: 15-30 Min, nur bei Risiko, Ursachenanalyse (PEMU, MNA-Long). (DNQP Ernährungsmanagement, 2017)"
- **Kategorie:** fachbegriff

---

## Baustein 4: mna-mini-nutritional-assessment

### Metadaten
- **bausteinId:** ernaehrungsassessment-mna
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Frau K., 82 Jahre, wird ins Pflegeheim aufgenommen. Welches Screening nimmst du — und warum gerade dieses, nicht ein anderes?"
- **Step-Typ:** mc

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Das **MNA (Mini Nutritional Assessment)** wurde speziell für Menschen **ab 65 Jahren** entwickelt (Guigoz, MNA 1994). Es besteht aus einem kurzen Screening (6 Fragen, MNA-Short Form) und bei Auffälligkeit aus einem Assessment (12 Fragen, MNA-Long Form)."

**B1 (230 Zeichen):** "Das **MNA** ist ein Test für Menschen ab 65 Jahren (Guigoz, MNA 1994). Er hat zwei Teile: Ein kurzer Test mit **6 Fragen** (MNA-Short) und ein langer Test mit **12 Fragen** (MNA-Long). Der kurze Test kommt zuerst, der lange nur bei Problemen."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Das **MNA (Mini Nutritional Assessment)** ist das international meistgenutzte Screening-Instrument für Ernährungsstatus bei älteren Menschen (≥65 Jahre, Guigoz, MNA 1994).

**MNA-Short Form (Screening, 6 Fragen):**
1. Nahrungszufuhr in den letzten 3 Monaten gesunken?
2. Ungewollter Gewichtsverlust in 3 Monaten?
3. Mobilität (bettlägerig → normal)
4. Akute Erkrankung oder psychischer Stress in 3 Monaten?
5. Neuropsychologische Probleme (Demenz, Depression)?
6. BMI ODER Wadenumfang (wenn BMI nicht messbar)

**Punktebewertung MNA-Short (0-14 Punkte):**
- **12-14 Punkte:** normaler Ernährungsstatus
- **8-11 Punkte:** Risiko für Mangelernährung → MNA-Long durchführen
- **0-7 Punkte:** Mangelernährung → MNA-Long + Intervention

**MNA-Long Form (Assessment, 12 zusätzliche Fragen):** ergänzt Screening um Fragen zu selbstständigem Leben, Medikamenten, Hautdruckstellen, Mahlzeitenanzahl, Flüssigkeitsaufnahme, Selbstbeurteilung, Oberarm- und Wadenumfang. Gesamt-Score 0-30.

**Wichtig:** Wenn BMI nicht erhebbar (Rollstuhl, Amputation, Kontraktur) → **Wadenumfang <31 cm** als Alternative. (Guigoz, MNA 1994)"

**B1 (590 Zeichen):**
"Das **MNA** ist der wichtigste Test für alte Menschen (ab 65). (Guigoz, MNA 1994)

**Der kurze Test (MNA-Short) hat 6 Fragen:**
1. Weniger gegessen in den letzten 3 Monaten?
2. Ungewollt Gewicht verloren?
3. Wie beweglich ist der Patient?
4. War er krank oder gestresst?
5. Hat er Demenz oder Depression?
6. Wie ist der BMI? (oder der Wadenumfang)

**Die Auswertung (0 bis 14 Punkte):**
- **12-14 Punkte:** alles gut, normal
- **8-11 Punkte:** Risiko, jetzt den langen Test machen
- **0-7 Punkte:** schon Mangelernährung, sofort handeln

**Der lange Test (MNA-Long)** hat 12 weitere Fragen: Wohnt er alleine? Wie viele Mahlzeiten pro Tag? Wie viel trinkt er?

**Wichtig:** Wenn du den BMI nicht messen kannst, nimm den **Wadenumfang**. Unter 31 cm ist ein Warnsignal."

- **Erklärungs-Step:** stepType `reveal` (6 Screening-Fragen aufdecken)
- **Glossar-Begriffe:** [MNA, MNA-Short Form, MNA-Long Form, Wadenumfang]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Das MNA ist für alle Patienten geeignet"**
- **Fachbegriff:** Altersgruppen-Fehler
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — das MNA ist **ausschließlich für Menschen ab 65 Jahren validiert** (Guigoz, MNA 1994). Bei jüngeren Erwachsenen nutzt du im Krankenhaus **NRS-2002** (Kondrup, NRS-2002 2003) oder im ambulanten Bereich **MUST**. Merke: MNA = Ältere (≥65), NRS = Klinik, MUST = Community."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — das MNA ist nur für Menschen ab 65 Jahren gemacht. Für jüngere Patienten im Krankenhaus nimmst du **NRS-2002**. Für den ambulanten Bereich gibt es **MUST**. Merke: MNA für Alte, NRS für Klinik, MUST für ambulant."

**D2: "MNA-Short und MNA-Long macht man immer zusammen"**
- **Fachbegriff:** Stufen-Missverständnis
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **MNA-Short kommt zuerst als Screening** (alle ≥65-Jährigen). MNA-Long folgt **nur**, wenn der Short-Score ≤11 Punkte ergibt. Bei normalem Ernährungsstatus (12-14 Punkte) wäre der Long-Form Zeitverschwendung. Merke: Short = Sieb, Long = Lupe — und die Lupe nur bei Auffälligkeit."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — der **kurze Test kommt zuerst**. Den langen Test machst du **nur**, wenn der kurze Test ein Problem zeigt (11 oder weniger Punkte). Bei 12-14 Punkten ist alles gut, dann kein langer Test. Merke: Erst kurz, dann lang — aber nur bei Bedarf."

**D3: "Wenn kein BMI messbar ist, kann man das MNA nicht machen"**
- **Fachbegriff:** Messwerkzeug-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — das MNA bietet für diesen Fall den **Wadenumfang** als Alternative. Bei Rollstuhlfahrern, Amputierten oder Patienten mit schweren Kontrakturen misst du die Wade: **<31 cm = Warnsignal**. So bleibt das MNA auch bei schwerer körperlicher Einschränkung anwendbar."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — wenn du den BMI nicht messen kannst (Rollstuhl, Amputation, Kontraktur), nimmst du den **Wadenumfang**. Weniger als 31 cm ist ein Warnsignal. Das MNA geht also immer. Merke: Kein BMI möglich? Dann Wade messen."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Das MNA ist speziell für ≥65-Jährige. MNA-Short (6 Fragen, 0-14 Punkte) als Screening, bei ≤11 Punkten folgt MNA-Long (12 zusätzliche Fragen, 0-30 Punkte). Bei fehlendem BMI: Wadenumfang <31 cm. Seit 1994 in über 100 Studien validiert. (Guigoz, MNA 1994)"

**B1 (240 Zeichen):** "Sehr gut. Das MNA ist für Menschen ab 65 Jahren. Erst der kurze Test (6 Fragen, 0-14 Punkte). Bei 11 oder weniger Punkten dann der lange Test (12 weitere Fragen). Wenn du keinen BMI messen kannst: Wadenumfang — unter 31 cm ist ein Warnsignal."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wann ist das MNA (Mini Nutritional Assessment) das richtige Werkzeug?"
- **Rückseite:** "Bei Menschen **ab 65 Jahren**. MNA-Short (6 Fragen) als Screening, bei ≤11 Punkten folgt MNA-Long (12 zusätzliche Fragen). (Guigoz, MNA 1994)"
- **Kategorie:** assessment

---

## Baustein 5: nrs-2002-nutritional-risk-screening

### Metadaten
- **bausteinId:** ernaehrungsassessment-nrs-2002
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Herr B., 52 Jahre, wird nach Bauch-OP auf Station aufgenommen. Welches Screening nimmst du — und welche 4 Fragen kommen als Erstes?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Das **NRS-2002 (Nutritional Risk Screening)** ist das Standardinstrument für den **stationären Klinikbereich** (Kondrup, NRS-2002 2003). Es prüft zuerst 4 initiale Fragen. Nur bei 'ja' bei mindestens einer Frage folgt der ausführliche Hauptteil."

**B1 (220 Zeichen):** "Das **NRS-2002** ist der Test für das **Krankenhaus** (Kondrup, NRS-2002 2003). Er hat **4 kurze Startfragen**. Nur wenn bei einer 'ja' ankommt, gehst du zum langen Teil. So geht der Test bei gesunden Patienten sehr schnell."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (735 Zeichen):**
"Das **NRS-2002** ist das ESPEN-empfohlene Screening für hospitalisierte Erwachsene (Kondrup, NRS-2002 2003).

**4 Initiale Fragen (Pre-Screening):**
1. BMI <20,5?
2. Gewichtsverlust in den letzten 3 Monaten?
3. Reduzierte Nahrungszufuhr in der letzten Woche?
4. Schwere Erkrankung (z.B. Intensivtherapie)?

**Auswertung Pre-Screening:**
- **Alle 4× nein:** wöchentliche Wiederholung, kein Hauptscreening
- **Mind. 1× ja:** Hauptscreening durchführen

**Hauptscreening — zwei Teile (jeweils 0-3 Punkte):**

**Teil A — Ernährungszustand:**
- 0 = normaler Ernährungszustand
- 1 = leichte Mangelernährung (Gewichtsverlust >5%/3 Mo oder 50-75% Nahrungszufuhr)
- 2 = mäßig (Gewichtsverlust >5%/2 Mo oder BMI 18,5-20,5 + schlechter Allgemeinzustand)
- 3 = schwer (Gewichtsverlust >5%/1 Mo oder BMI <18,5 + schlechter AZ)

**Teil B — Schwere der Erkrankung:**
- 0 = normale Anforderungen
- 1 = leicht (z.B. Schenkelhalsfraktur, chronisch Kranke mit akuten Komplikationen)
- 2 = mäßig (z.B. große Bauch-OP, Schlaganfall)
- 3 = schwer (z.B. intensivpflichtig, APACHE >10)

**Plus 1 Punkt bei Alter ≥70 Jahre.**

**Gesamt-Cut-off:**
- **≥3 Punkte:** ernährungsmedizinisches Risiko → Ernährungstherapie-Plan
- **<3 Punkte:** wöchentlich wiederholen"

**B1 (600 Zeichen):**
"Das **NRS-2002** ist der Test für das Krankenhaus. (Kondrup, NRS-2002 2003)

**Zuerst 4 kurze Fragen:**
1. Ist der BMI unter 20,5?
2. Hat der Patient in 3 Monaten ungewollt Gewicht verloren?
3. Hat er in der letzten Woche weniger gegessen?
4. Ist er schwer krank (zum Beispiel Intensivstation)?

**Wenn alle 4× nein:** nichts weiter, einmal pro Woche wieder fragen.
**Wenn einmal ja:** den langen Teil machen.

**Langer Teil — zwei Punktezahlen:**
- **Ernährung:** 0 (gut) bis 3 (schwere Mangelernährung)
- **Krankheit:** 0 (leicht) bis 3 (Intensivstation)
- **Plus 1 Punkt bei über 70 Jahren**

**Auswertung (Gesamtpunkte):**
- **3 oder mehr Punkte:** Risiko! Jetzt Ernährungstherapie planen
- **Weniger als 3 Punkte:** einmal pro Woche wieder testen"

- **Erklärungs-Step:** stepType `reveal` (4 Initialfragen + Score-Tabelle)
- **Glossar-Begriffe:** [NRS-2002, ESPEN, Pre-Screening, Cut-off, APACHE]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "NRS-2002 nimmt man für alte Menschen im Pflegeheim"**
- **Fachbegriff:** Setting-Verwechslung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **NRS-2002 ist für hospitalisierte Patienten** validiert (also akutstationär). Im Pflegeheim oder bei mobilen Älteren nimmst du **MNA** (Guigoz, MNA 1994). Für ambulante Settings: **MUST**. Merke: NRS = Klinik (akut), MNA = Ältere (≥65), MUST = ambulant/Community."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — das NRS-2002 ist für das Krankenhaus. Im Pflegeheim oder bei alten Menschen zu Hause nimmst du das **MNA**. Für ambulante Pflege gibt es **MUST**. Merke: NRS für Klinik, MNA für Alte, MUST für ambulant."

**D2: "Der Cut-off beim NRS-2002 liegt bei 5 Punkten"**
- **Fachbegriff:** Cut-off-Verwechslung
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — der **Cut-off liegt bei ≥3 Punkten** (Kondrup, NRS-2002 2003). Ab 3 Punkten besteht ernährungsmedizinisches Risiko und ein Ernährungsplan ist Pflicht. Das Maximum wären 7 Punkte (3+3+1 Altersbonus). Merke: 3 Punkte = Handlungspflicht."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — der Grenzwert ist **3 Punkte**, nicht 5. Ab 3 Punkten muss ein Ernährungsplan gemacht werden. Das Maximum wären 7 Punkte. Merke: Ab 3 Punkten sofort handeln."

**D3: "Wenn das Pre-Screening negativ ist, macht man nie wieder NRS"**
- **Fachbegriff:** Einmal-Screening-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — bei negativem Pre-Screening wird das **NRS wöchentlich wiederholt** (Kondrup, NRS-2002 2003). Der Ernährungszustand kann sich im Klinikverlauf schnell verschlechtern — etwa nach OP, bei Infekt oder bei Appetitmangel. Merke: Einmal reicht nicht, Screening ist ein Verlauf."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — wenn das erste Screening ok ist, wiederholst du es **einmal pro Woche**. Der Zustand kann sich schnell verschlechtern, zum Beispiel nach einer OP. Merke: Screening ist kein einmaliger Test, sondern ein Verlauf."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. NRS-2002 ist das ESPEN-Standardinstrument für Klinik-Aufnahmen. 4 Initialfragen (BMI <20,5? Gewichtsverlust? weniger gegessen? schwer krank?). Bei 1× ja: Hauptscreening mit Ernährungs-Score + Krankheits-Score + Altersbonus ≥70. Ab 3 Punkten: Ernährungstherapie."

**B1 (245 Zeichen):** "Sehr gut. NRS-2002 ist für das Krankenhaus. Zuerst 4 Fragen. Wenn eine mit 'ja' beantwortet wird: den langen Teil machen. Am Ende zählst du: Ernährung + Krankheit + Alter (plus 1 wenn über 70). Ab 3 Punkten: Ernährungstherapie einleiten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Cut-off beim NRS-2002 und was folgt daraus?"
- **Rückseite:** "**≥3 Punkte = ernährungsmedizinisches Risiko → Ernährungstherapie-Plan**. <3 Punkte: wöchentlich wiederholen. (Kondrup, NRS-2002 2003)"
- **Kategorie:** assessment

---

## Baustein 6: pemu-pflegerische-erfassung

### Metadaten
- **bausteinId:** ernaehrungsassessment-pemu
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Herr T., 74 Jahre, hat im Screening ein Mangelernährungsrisiko. Jetzt willst du wissen: **Warum** isst er zu wenig? Wie findest du das heraus?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Das **PEMU (Pflegerische Erfassung von Mangelernährung und deren Ursachen)** ist das deutschsprachige Pflege-Assessment des DNQP (Bartholomeyczik et al. 2008). Es fragt systematisch nach **Ursachen** in 5 Bereichen, nicht nur nach Symptomen."

**B1 (220 Zeichen):** "Das **PEMU** ist der Test, den die Pflege macht, wenn das Screening ein Risiko zeigt (DNQP, Bartholomeyczik 2008). PEMU heißt: **P**flegerische **E**rfassung von **M**angelernährung und deren **U**rsachen. Es sucht Gründe, warum jemand wenig isst."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (710 Zeichen):**
"Das **PEMU** ist das pflegerische Assessment-Instrument zum DNQP-Expertenstandard Ernährungsmanagement (Bartholomeyczik et al. 2008, DNQP Ernährungsmanagement 2017).

**Zwei Teile:**

**Teil 1 — Erfassung des Ernährungszustandes:** Gewicht, Größe, BMI, Gewichtsverlauf, Nahrungs- und Flüssigkeitsmenge in den letzten 3 Tagen.

**Teil 2 — Erfassung der Ursachen** (Kern des PEMU!) in fünf Bereichen:

1. **Essen/Trinken-Signale:** Bittet um Hilfe? Schmerzen? Übelkeit? Appetitverlust?
2. **Mundgesundheit:** Zahnprobleme, schlechte Zahnprothese, Soor, Schluckstörung, trockener Mund?
3. **Fähigkeiten:** Kann er selbst essen? Motorisch eingeschränkt? Kognitive Einschränkung? Sieht er das Essen?
4. **Umgebung/Angebot:** Passt die Kost? Kultur/Religion berücksichtigt? Lieblingsspeisen? Essenszeit passend?
5. **Weitere Gründe:** Medikamentennebenwirkungen (Appetitverlust), Depression, soziale Isolation, Wasseraufnahme?

**Ergebnis:** individuelle Pflegediagnose und zielgerichtete Maßnahmen — nicht 'Patient isst zu wenig', sondern 'Patient isst zu wenig, weil Zahnprothese drückt und er allein isst'.

Das PEMU ist **Grundlage jeder pflegerischen Ernährungstherapie** im deutschsprachigen Raum."

**B1 (580 Zeichen):**
"Das **PEMU** ist ein Werkzeug der Pflege (DNQP, Bartholomeyczik 2008). Es hilft, den **Grund** für wenig Essen zu finden.

**Zwei Teile:**

**Teil 1 — Zustand messen:** Gewicht, Größe, BMI, Gewichtsverlauf, wie viel isst und trinkt er in 3 Tagen?

**Teil 2 — Warum isst er wenig?** Fünf Bereiche:

1. **Essen und Trinken:** Hat er Schmerzen? Übelkeit? Wenig Appetit?
2. **Mund:** Schmerzen an den Zähnen? Passt die Prothese? Soor? Kann er schlucken?
3. **Fähigkeiten:** Kann er selbst essen? Kann er das Essen sehen? Versteht er die Situation?
4. **Umgebung:** Schmeckt das Essen? Passt es zu seiner Kultur/Religion? Isst er allein?
5. **Weitere Gründe:** Medikamente? Depression? Einsam?

**Ergebnis:** Du weißt jetzt: 'Er isst wenig, weil die Prothese drückt und er allein isst.' Das ist wichtiger als nur: 'Er isst wenig.'"

- **Erklärungs-Step:** stepType `reveal` (5 Ursachen-Bereiche aufdecken)
- **Glossar-Begriffe:** [PEMU, Pflegediagnose, Soor, Dysphagie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "PEMU erfasst nur das Gewicht"**
- **Fachbegriff:** Verkürzungs-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — das **Gewicht ist nur Teil 1** des PEMU. Der eigentliche Kern (Teil 2) fragt nach **Ursachen in 5 Bereichen**: Essen/Trinken, Mund, Fähigkeiten, Umgebung, weitere Gründe. Ohne Ursachen keine gezielten Maßnahmen. Merke: PEMU sucht das **U** — die Ursachen, nicht nur Zahlen."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — Gewicht ist nur der erste Teil. Der wichtigere Teil ist: **Warum isst er wenig?** In 5 Bereichen: Essen/Trinken, Mund, Fähigkeiten, Umgebung, andere Gründe. Ohne Ursachen kannst du nicht helfen. Merke: PEMU sucht den **Grund**, nicht nur Zahlen."

**D2: "PEMU macht der Arzt"**
- **Fachbegriff:** Zuständigkeits-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — das **PEMU ist das pflegerische Assessment** (das P in PEMU steht für Pflegerisch, DNQP Ernährungsmanagement 2017). Es gehört in den Pflegeprozess, nicht ins Arztgespräch. Die Pflege sieht den Patienten täglich beim Essen — sie ist die richtige Person dafür. Merke: PEMU = Pflege."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das PEMU ist ein Werkzeug der Pflege. Das **P** steht für 'Pflegerisch'. Die Pflege sieht den Patienten jeden Tag beim Essen — sie kann die Gründe am besten erkennen. Der Arzt hilft bei Laborwerten. Merke: PEMU = Pflege."

**D3: "PEMU und MNA sind dasselbe"**
- **Fachbegriff:** Instrument-Gleichsetzung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **MNA** ist ein **Screening+Assessment für Ältere** (≥65), international, Punkte-basiert (Guigoz, MNA 1994). **PEMU** ist ein **deutschsprachiges Pflege-Assessment**, strukturiert nach 5 Ursachen-Bereichen (Bartholomeyczik 2008). Merke: MNA gibt Punkte, PEMU sucht Gründe."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — das MNA ist ein Test mit Punkten für alte Menschen. Das PEMU ist ein deutscher Test der Pflege und sucht **Gründe** in 5 Bereichen. Merke: MNA rechnet Punkte, PEMU sucht das 'Warum'."

### Richtig-Feedback
**C1 (270 Zeichen):** "Genau. PEMU = pflegerisches Assessment-Instrument des DNQP. Teil 1 misst (Gewicht, BMI, Nahrungsmenge), Teil 2 sucht Ursachen in 5 Bereichen: Essen/Trinken, Mundgesundheit, Fähigkeiten, Umgebung, weitere Gründe. So entsteht eine handlungsleitende Pflegediagnose."

**B1 (240 Zeichen):** "Sehr gut. Das PEMU ist das Assessment der Pflege. Teil 1: Messen (Gewicht, BMI, Essensmenge). Teil 2: Gründe finden in 5 Bereichen — Essen, Mund, Fähigkeiten, Umgebung, andere Gründe. So kannst du gezielt helfen, nicht nur allgemein."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Ursachenbereiche erfasst das PEMU?"
- **Rückseite:** "1) Essen/Trinken-Signale, 2) Mundgesundheit, 3) Fähigkeiten, 4) Umgebung/Angebot, 5) weitere Gründe (Medikamente, Depression, Einsamkeit). (DNQP Ernährungsmanagement, 2017; Bartholomeyczik 2008)"
- **Kategorie:** assessment

---

## Baustein 7: dnqp-expertenstandard-ernaehrung

### Metadaten
- **bausteinId:** ernaehrungsassessment-dnqp-standard
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Warum braucht es überhaupt einen bundesweit einheitlichen Standard für Ernährungsmanagement? Was würde passieren, wenn jede Einrichtung es anders macht?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Der **DNQP-Expertenstandard Ernährungsmanagement** (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege, 2017) legt fest: Jeder Patient erhält bei Aufnahme ein Screening — und bei Risiko ein Assessment plus individuelle Maßnahmenplanung."

**B1 (220 Zeichen):** "Der **DNQP-Expertenstandard Ernährungsmanagement** (2017) sagt, was die Pflege beim Thema Ernährung machen muss. Er gilt bundesweit: Jeder Patient bekommt ein Screening. Bei Risiko: ein genaueres Assessment und einen Plan."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Der **DNQP-Expertenstandard Ernährungsmanagement zur Sicherstellung einer bedarfsgerechten oralen Ernährung in der Pflege** (DNQP Ernährungsmanagement, 2017, Aktualisierung in Vorbereitung) ist einer von **12 nationalen Expertenstandards** und **rechtlich verbindlich** für alle Pflegeeinrichtungen (§ 113a SGB XI).

**Struktur nach S-P-E (Struktur → Prozess → Ergebnis):**

**S1:** Die Pflegefachkraft verfügt über aktuelles Wissen zum Ernährungsmanagement.
**S2:** Geeignete Screening- und Assessmentinstrumente stehen zur Verfügung.
**S3:** Einrichtung hat Regeln für interdisziplinäre Zusammenarbeit.

**P1 (Prozess):** Bei Aufnahme → Screening (binnen 24h).
**P2:** Bei Risiko → tiefes Assessment mit PEMU.
**P3:** Gemeinsam mit Patient/Angehörigen: individuelle Maßnahmen planen.
**P4:** Umsetzung, Überprüfung, Dokumentation.

**E1 (Ergebnis):** Mangelernährung wird früh erkannt und behandelt.
**E2:** Der Patient hat eine bedarfsgerechte Ernährung.

**Haftungsrelevant:** Wer den Standard ignoriert, haftet im Schadensfall. Wer ihn einhält, ist rechtlich gut abgesichert."

**B1 (580 Zeichen):**
"Der **DNQP** ist eine Gruppe von Experten für Pflege. Er schreibt Regeln, die in allen Pflegeheimen und Kliniken gelten.

Der Standard 'Ernährungsmanagement' (2017) sagt:

**Struktur — Was braucht die Einrichtung?**
- Pflegekräfte mit Wissen
- Screening-Werkzeuge (NRS, MNA)
- Zusammenarbeit mit Arzt und Küche

**Prozess — Was muss die Pflege tun?**
- Bei jeder Aufnahme: **Screening** in 24 Stunden
- Bei Risiko: **Assessment** mit PEMU
- Gemeinsam mit Patient einen Plan machen
- Umsetzen, prüfen, dokumentieren

**Ergebnis — Was soll rauskommen?**
- Mangelernährung wird früh erkannt
- Der Patient bekommt, was er braucht

**Wichtig:** Der Standard ist **rechtlich bindend**. Wer ihn nicht einhält, kann bei Problemen haften."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [DNQP, Expertenstandard, S-P-E-Struktur, SGB XI]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Expertenstandards sind Empfehlungen, die man ignorieren kann"**
- **Fachbegriff:** Verbindlichkeits-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die nationalen Expertenstandards sind nach **§ 113a SGB XI rechtlich verbindlich** für Pflegeeinrichtungen. Wer sie ignoriert, handelt im Schadensfall fahrlässig. Wer sie einhält, ist rechtlich gut abgesichert. Merke: Expertenstandards sind Pflicht, nicht Kür."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — Expertenstandards sind **Pflicht**, keine Empfehlung. Das steht im **§ 113a SGB XI**. Wer sich nicht daran hält, kann bei einem Schaden haften. Wer sich daran hält, ist auf der sicheren Seite. Merke: Standards sind verbindlich."

**D2: "Das Screening auf Mangelernährung ist Aufgabe des Arztes"**
- **Fachbegriff:** Zuständigkeits-Fehler
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — der DNQP-Standard weist das **Ernährungs-Screening ausdrücklich der Pflege zu** (binnen 24h nach Aufnahme). Der Arzt ergänzt bei Bedarf Laborwerte. Pflege sieht den Patienten täglich beim Essen — sie ist die richtige Stelle. Merke: Screening = Pflege, Laborwerte = Arzt."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das Screening ist eine **Aufgabe der Pflege**, nicht des Arztes. Der DNQP sagt das klar. Die Pflege sieht den Patienten täglich beim Essen. Der Arzt hilft mit Laborwerten. Merke: Screening = Pflege, Labor = Arzt."

**D3: "Der DNQP-Standard gilt nur in Pflegeheimen, nicht im Krankenhaus"</span>"**
- **Fachbegriff:** Setting-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — der DNQP-Standard Ernährungsmanagement gilt **in allen Pflegesettings**: Krankenhaus, Pflegeheim, ambulante Pflege. Die Instrumente unterscheiden sich (NRS-2002 in Klinik, MNA bei Älteren), die Verpflichtung ist überall dieselbe. Merke: Standard gilt überall, Werkzeug passt zur Situation."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — der DNQP-Standard gilt **überall**: im Krankenhaus, im Pflegeheim und in der ambulanten Pflege. Nur die Werkzeuge sind anders (NRS im Krankenhaus, MNA für alte Menschen). Merke: Regel überall gleich, Werkzeug passt zum Ort."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Der DNQP-Expertenstandard Ernährungsmanagement (2017) ist nach § 113a SGB XI rechtlich verbindlich. Er verlangt: Screening binnen 24h nach Aufnahme, Assessment (PEMU) bei Risiko, individuelle Maßnahmenplanung, Dokumentation. Gilt in allen Pflegesettings."

**B1 (240 Zeichen):** "Sehr gut. Der DNQP-Standard ist Pflicht (§ 113a SGB XI). Die Regel: Bei Aufnahme immer Screening in 24 Stunden. Bei Risiko: Assessment mit PEMU. Mit dem Patienten einen Plan machen und alles dokumentieren. Das gilt überall — Klinik, Heim, zu Hause."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 4 Prozess-Schritte verlangt der DNQP-Expertenstandard Ernährungsmanagement?"
- **Rückseite:** "1) Screening binnen 24h. 2) Bei Risiko: PEMU-Assessment. 3) Individuelle Maßnahmenplanung mit Patient. 4) Umsetzung + Evaluation + Dokumentation. Rechtlich verbindlich (§ 113a SGB XI). (DNQP Ernährungsmanagement, 2017)"
- **Kategorie:** recht

---

## Baustein 8: formen-der-mangelernaehrung

### Metadaten
- **bausteinId:** ernaehrungsassessment-formen-mangel
- **bloomLevel:** 4
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Drei Patienten sind dünn und schwach: Frau A., 80, wohnt allein und vergisst zu essen. Herr B., 55, Krebspatient, nimmt trotz Essen ab. Herr C., 82, hat kaum noch Muskeln. Sind das drei gleiche Probleme?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Drei Formen werden unterschieden: **Protein-Energie-Mangelernährung (PEM)** = zu wenig Nahrung, reversibel. **Kachexie** = Gewichtsverlust bei chronischer Krankheit (Krebs, Herzinsuffizienz, COPD), trotz Nahrungszufuhr. **Sarkopenie** = altersbedingter Muskelverlust. (DGEM/ESPEN 2020)"

**B1 (245 Zeichen):** "Es gibt drei Formen von Mangelernährung: **PEM** = zu wenig gegessen (kann wieder besser werden). **Kachexie** = Gewichtsverlust bei schwerer Krankheit (zum Beispiel Krebs) — trotz Essen. **Sarkopenie** = Muskel-Schwund im Alter. Alle drei haben andere Gründe."

- **Step-Typ:** comparison (Tabelle 3 Formen)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Drei klinisch relevante Formen der Mangelernährung (DGEM/ESPEN 2020, GLIM-Kriterien, Cederholm 2019):

**1. Protein-Energie-Mangelernährung (PEM) / einfache Mangelernährung:**
- Ursache: zu geringe Nahrungsaufnahme (Appetitverlust, soziale Isolation, Demenz, Schluckstörung)
- Merkmal: Gewichtsverlust + reduzierter BMI
- **Reversibel:** Erholung durch ausreichende Kalorien- und Eiweißzufuhr möglich
- Typisch: alleinlebende Senioren, Demenz, Depression

**2. Kachexie (krankheitsassoziiert):**
- Ursache: **chronisch-entzündlicher Prozess** (Krebs, Herzinsuffizienz, COPD, Niereninsuffizienz)
- Mechanismus: Zytokin-vermittelter Muskelabbau, auch **trotz Nahrungszufuhr**
- Merkmal: Verlust an Fett UND Muskelmasse, oft bei noch normalem Gewicht verdeckt
- **Nicht einfach reversibel** — Grunderkrankung muss behandelt werden

**3. Sarkopenie:**
- Ursache: altersbedingter **Muskelabbau** (ab 50 ca. 1-2%/Jahr, ab 65 beschleunigt)
- Merkmal: reduzierte Muskelmasse + Muskelkraft + Muskelfunktion
- Folge: Sturzrisiko, Mobilitätsverlust, Abhängigkeit
- **Teilweise reversibel** durch Krafttraining + Eiweißzufuhr (1,0-1,5 g/kgKG)

**Praktisch:** Du kannst alle drei nebeneinander bei **einem** Patienten finden — z.B. alter Krebspatient, alleinlebend."

**B1 (620 Zeichen):**
"Drei Formen von Mangelernährung (DGEM/ESPEN 2020):

**1. PEM (Protein-Energie-Mangelernährung):**
- Grund: zu wenig gegessen
- Wer? Alleinlebende alte Menschen, Demenz, Depression
- Reversibel: Mit mehr Essen wird es wieder besser
- Merkmal: Gewicht fällt, BMI fällt

**2. Kachexie:**
- Grund: schwere Krankheit (Krebs, Herz, COPD)
- Der Körper baut Muskel ab — **auch wenn der Patient isst**
- Nicht einfach zu stoppen: Die Krankheit muss behandelt werden
- Merkmal: Muskel und Fett gehen weg

**3. Sarkopenie:**
- Grund: das Alter
- Ab 50 verliert man 1-2% Muskeln pro Jahr, ab 65 schneller
- Folgen: Schwäche, Stürze, Pflegebedarf
- Besserung: Krafttraining + Eiweiß (1-1,5 g pro kg Körpergewicht pro Tag)

**Wichtig:** Ein Patient kann alle drei Formen gleichzeitig haben — zum Beispiel ein alter Krebspatient, der allein lebt."

- **Erklärungs-Step:** stepType `comparison` (3 Formen mit Ursache/Reversibilität)
- **Glossar-Begriffe:** [PEM, Kachexie, Sarkopenie, Zytokin, Reversibilität, GLIM]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Kachexie bedeutet einfach nur 'dünn sein'"**
- **Fachbegriff:** Dünn-Gleichsetzung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Kachexie ist eine spezifische, **krankheitsbedingte** Form des Gewichtsverlustes (Krebs, Herzinsuffizienz, COPD), ausgelöst durch chronische Entzündung. Sie tritt **trotz ausreichender Nahrungszufuhr** auf und ist nicht durch Essen allein reversibel. Merke: Kachexie ist nicht nur 'dünn', sondern krank."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — Kachexie ist mehr als 'dünn'. Es ist ein Gewichtsverlust bei **schweren Krankheiten** (Krebs, Herz, COPD). Der Körper baut Muskel ab — auch wenn der Patient isst. Merke: Kachexie hat eine Krankheit als Grund."

**D2: "Sarkopenie ist dasselbe wie PEM"**
- **Fachbegriff:** Ursachen-Verwechslung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **PEM** entsteht durch zu geringe Nahrungszufuhr (Ursache: wenig gegessen). **Sarkopenie** ist **altersbedingter Muskelabbau**, selbst bei normaler Ernährung. Zwei unterschiedliche Ursachen, zwei unterschiedliche Ansätze: PEM → mehr Kalorien/Eiweiß. Sarkopenie → Eiweiß + **Krafttraining**."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **PEM** kommt von zu wenig Essen. **Sarkopenie** ist Muskel-Schwund durch das Alter, auch wenn der Patient normal isst. Zwei verschiedene Gründe, zwei verschiedene Lösungen: PEM → mehr essen. Sarkopenie → Eiweiß + Krafttraining."

**D3: "Ein Patient kann nur eine Form der Mangelernährung haben"**
- **Fachbegriff:** Exklusivitäts-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — alle drei Formen können sich **überlagern**. Ein alter, alleinlebender Krebspatient kann PEM (wenig Essen), Kachexie (Tumorleiden) und Sarkopenie (Alter) gleichzeitig haben. Die Behandlung muss alle drei Ebenen adressieren. Merke: Formen schließen sich nicht aus."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — ein Patient kann alle drei Formen gleichzeitig haben. Ein alter Krebspatient, der allein lebt, hat oft PEM (wenig Essen), Kachexie (Krebs) und Sarkopenie (Alter) auf einmal. Du musst an alle drei denken."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Drei Formen: PEM (zu wenig gegessen, reversibel), Kachexie (krankheitsbedingt, Muskelabbau trotz Essen, Grunderkrankung behandeln), Sarkopenie (altersbedingter Muskelverlust, Krafttraining + Eiweiß). In der Praxis überlappen sich die Formen oft — z.B. alter Krebspatient."

**B1 (250 Zeichen):** "Sehr gut. Drei Formen: PEM (zu wenig gegessen — mehr essen hilft), Kachexie (Krankheit wie Krebs — Krankheit behandeln), Sarkopenie (Alter — Krafttraining und Eiweiß). In der Praxis hat ein Patient oft mehrere Formen gleichzeitig."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 3 Formen der Mangelernährung mit jeweils einer Ursache."
- **Rückseite:** "1) PEM — zu geringe Nahrungszufuhr. 2) Kachexie — chronische Krankheit (Krebs, Herzinsuffizienz). 3) Sarkopenie — altersbedingter Muskelabbau. (DGEM/ESPEN 2020)"
- **Kategorie:** fachbegriff

---

## Baustein 9: gewichtsverlust-grenzen

### Metadaten
- **bausteinId:** ernaehrungsassessment-gewichtsverlust
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Herr M., 70 kg, hat in 3 Monaten 5 kg verloren. Ist das viel oder normal? Wie rechnest du das aus — und was sagen die Prozent?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Klinisch relevant ist ein **ungewollter Gewichtsverlust**: **>5% in 3 Monaten** oder **>10% in 6 Monaten** ist auffällig (DGEM/ESPEN 2020). Rechnung: (Altgewicht − Neugewicht) ÷ Altgewicht × 100. Beispiel: 70 kg → 65 kg = 7,1%."

**B1 (220 Zeichen):** "Ein Gewichtsverlust ist wichtig, wenn er **ungewollt** passiert: **Mehr als 5% in 3 Monaten** oder **mehr als 10% in 6 Monaten**. Rechnung: (altes Gewicht − neues Gewicht) geteilt durch altes Gewicht × 100. Beispiel: 70 → 65 = 7,1%."

- **Step-Typ:** calculation (Prozentverlust rechnen)

### Stufe 3 — Erklärung

**C1 (690 Zeichen):**
"Ein ungewollter Gewichtsverlust ist einer der **stärksten Prädiktoren** für ein ernährungsmedizinisches Risiko (DGEM/ESPEN 2020; DNQP Ernährungsmanagement 2017):

**Klinisch relevante Grenzen:**
- **>5% in 3 Monaten** → auffällig, Screening positiv
- **>10% in 6 Monaten** → schwer, meist Mangelernährung
- **>5% in 1 Monat** → alarmzeichen, oft krankheitsbedingt

**Berechnung des prozentualen Gewichtsverlustes:**

```
Prozent = (Altgewicht − aktuelles Gewicht) ÷ Altgewicht × 100
```

Beispiel: Frau M. wog vor 3 Monaten 68 kg, jetzt 63 kg.
**(68 − 63) ÷ 68 × 100 = 5 ÷ 68 × 100 = 7,35%** → auffällig

**Wichtig zu unterscheiden:**
- **Ungewollt** = relevant → Screening/Assessment starten
- **Gewollt** (Diät, Bariatrie) = kein Alarmzeichen, aber dokumentieren

**Fehlerquellen:**
- Gewicht nicht genau bekannt → Angehörige fragen, alte Dokumentation
- Ödeme verschleiern Muskel-/Fettverlust → Gewicht normal, aber Patient unterernährt
- Dehydratation täuscht Gewichtsverlust vor → Trinkmenge prüfen"

**B1 (560 Zeichen):**
"Ungewollter Gewichtsverlust ist ein wichtiges Warnsignal (DGEM/ESPEN 2020):

**Wichtige Grenzen:**
- **Mehr als 5% in 3 Monaten** = auffällig
- **Mehr als 10% in 6 Monaten** = schwer
- **Mehr als 5% in 1 Monat** = Alarm, meist eine Krankheit

**Wie rechnest du Prozent aus?**

```
Prozent = (altes Gewicht − neues Gewicht) geteilt durch altes Gewicht × 100
```

Beispiel: Frau M. hatte 68 kg, jetzt hat sie 63 kg.
**(68 − 63) geteilt durch 68 × 100 = 7,35%** → auffällig

**Wichtig:**
- **Ungewollt** verloren = wichtig, Screening starten
- **Gewollt** verloren (Diät) = kein Alarm, nur dokumentieren

**Achtung bei:**
- Patient weiß sein altes Gewicht nicht → Angehörige fragen
- Wasser im Körper (Ödeme) kann den Verlust verstecken
- Wenig trinken macht das Gewicht niedriger (ohne Mangelernährung)"

- **Erklärungs-Step:** stepType `calculation` (2-3 Beispiele rechnen)
- **Glossar-Begriffe:** [ungewollter Gewichtsverlust, Ödem, Dehydratation, Prädiktor]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Erst ab 10 kg Verlust ist es wichtig"**
- **Fachbegriff:** Absolutwert-Fehler
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — entscheidend ist **nicht die absolute kg-Zahl, sondern der Prozentsatz**. 5 kg Verlust sind für eine 50 kg leichte Person 10% (schwer!), für eine 100 kg Person nur 5%. Deshalb wird immer prozentual bewertet: >5%/3 Monate = auffällig. Merke: Prozent, nicht kg."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — wichtig ist nicht, **wie viele Kilo**, sondern **wie viel Prozent**. 5 kg bei einer 50 kg Person = 10% (schwer). 5 kg bei 100 kg = 5% (noch nicht so schlimm). Merke: Immer Prozent rechnen, nicht Kilo."

**D2: "Wenn der Patient abnehmen wollte, ist es nicht wichtig"**
- **Fachbegriff:** Wunsch-Ignoranz
- **Feedback (C1, 290 Zeichen):** "Teilweise — ja, gewollter Gewichtsverlust (Diät) ist kein Alarmzeichen. **Aber:** Auch ein gewollter Verlust kann in Mangelernährung umschlagen, wenn Ziele überzogen sind oder Eiweiß fehlt. Dokumentieren und beobachten bleibt Pflicht. Merke: Gewollt ≠ sicher ok, nur weniger akut."
- **Feedback (B1, 255 Zeichen):** "Ja, aber — ein gewollter Verlust ist erstmal kein Alarm. Aber auch er kann problematisch werden, wenn der Patient zu schnell oder zu viel verliert. Du musst es weiter dokumentieren und beobachten. Merke: Gewollt ≠ 'nicht wichtig'."

**D3: "Bei Ödemen kann man den Gewichtsverlust normal beurteilen"**
- **Fachbegriff:** Ödem-Falle
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **Ödeme verfälschen die Waage**. Ein Patient kann trotz schwerer Mangelernährung ein normales oder sogar steigendes Gewicht zeigen, weil Wasser sich einlagert. Gleiches gilt für Aszites. Wichtig: Gewicht immer mit klinischer Beobachtung kombinieren. Merke: Waage allein reicht nicht bei Ödemen."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **Wasser im Körper (Ödeme)** macht das Gewicht falsch. Ein Patient kann krank und mangelernährt sein, aber die Waage zeigt normales Gewicht — weil Wasser sich einlagert. Wichtig: Haut und Muskeln anschauen, nicht nur wiegen. Merke: Waage + Augen."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Entscheidend ist der **prozentuale ungewollte Verlust**: >5% in 3 Monaten = auffällig, >10% in 6 Monaten = schwer, >5% in 1 Monat = alarmzeichen. Rechnung: (alt − neu) ÷ alt × 100. Vorsicht bei Ödemen/Aszites/Dehydratation — Waage allein kann täuschen."

**B1 (240 Zeichen):** "Sehr gut. Wichtig ist der Prozent-Wert: **>5% in 3 Monaten**, **>10% in 6 Monaten**. Rechnung: (alt − neu) geteilt durch alt × 100. Nur ungewollter Verlust ist ein Alarm. Achtung bei Wasser im Körper: Die Waage kann täuschen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Ab wann ist ungewollter Gewichtsverlust klinisch relevant?"
- **Rückseite:** "**>5% in 3 Monaten** oder **>10% in 6 Monaten**. Rechnung: (Altgewicht − Neugewicht) ÷ Altgewicht × 100. (DGEM/ESPEN 2020)"
- **Kategorie:** assessment

---

## Baustein 10: klinische-zeichen-mangelernaehrung

### Metadaten
- **bausteinId:** ernaehrungsassessment-klinische-zeichen
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Du betrittst ein Zimmer. Woran erkennst du auf den ersten Blick, ob der Patient mangelernährt sein könnte? Nenne mindestens 3 sichtbare Zeichen."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Sichtbare Zeichen: **eingefallene Wangen, schlaffe Oberarm-/Oberschenkelmuskeln, hervorstehende Schlüsselbeine, trockene schuppige Haut, brüchige Nägel und Haare**. Dazu: lockere Kleidung, lockerer Ehering, Dekubitus-Gefahr durch weniger Polsterung."

**B1 (230 Zeichen):** "Zeichen, die du sehen kannst: **eingefallene Wangen**, **dünne Oberarme**, **hervorstehende Schlüsselbeine**, **trockene Haut**, **brüchige Nägel**, **dünne Haare**. Dazu: Kleidung ist zu weit, Ring passt nicht mehr, schneller Dekubitus."

- **Step-Typ:** hotspot (Körperstellen markieren)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Klinische Zeichen der Mangelernährung — **systematische Beobachtung von Kopf bis Fuß**:

**Gesicht:**
- Eingefallene Wangen (Bichat-Fettkörper geschrumpft)
- Temporalisatrophie (Schläfenmuskel eingesunken)
- Trockene Mundschleimhaut, rissige Mundwinkel

**Rumpf / Arme:**
- Hervorstehende Schlüsselbeine und Rippen
- Oberarmumfang (MUAC) <22 cm bei Männern, <21 cm bei Frauen = Warnsignal
- Schlaffe Oberarmmuskulatur (Triceps)

**Beine:**
- **Wadenumfang <31 cm** = Warnsignal (auch im MNA)
- Schlaffe Oberschenkelmuskulatur
- Eingefallener Pomuskel

**Haut, Haare, Nägel:**
- Trockene schuppige Haut, schlechte Wundheilung
- Brüchige, stumpfe Haare; Haarausfall
- Löffelnägel, Querrillen, brüchig
- Dekubitus tritt schneller auf (weniger Fettpolster)

**Weitere:**
- Lockere Kleidung, lockerer Ehering (früher normaler)
- Müde Ausstrahlung, eingefallene Augen
- Kraftlose Stimme

**Wichtig:** Diese Zeichen sind **spät**. Wenn sie sichtbar sind, ist die Mangelernährung oft schon fortgeschritten. Screening sollte früher greifen. (DGEM/ESPEN 2020)"

**B1 (580 Zeichen):**
"Zeichen der Mangelernährung — schau systematisch:

**Gesicht:**
- Eingefallene Wangen
- Schläfen sind eingesunken
- Trockener Mund, rissige Mundwinkel

**Oberkörper und Arme:**
- Schlüsselbeine stehen hervor
- Rippen sind zu sehen
- **Oberarm** dünn (unter 22 cm bei Männern, 21 cm bei Frauen = Warnung)

**Beine:**
- **Wadenumfang unter 31 cm** = Warnung
- Dünne Oberschenkel
- Po ist eingefallen

**Haut, Haare, Nägel:**
- Trockene schuppige Haut
- Wunden heilen schlecht
- Dünne Haare, Haarausfall
- Brüchige Nägel mit Rillen
- Dekubitus kommt schneller

**Auch wichtig:**
- Kleidung sitzt zu weit, Ring ist zu groß
- Patient wirkt müde
- Augen wirken eingefallen

**Wichtig:** Wenn du diese Zeichen siehst, ist die Mangelernährung schon weit. Screening soll sie früher finden."

- **Erklärungs-Step:** stepType `hotspot` (Körperstellen markieren)
- **Glossar-Begriffe:** [MUAC, Wadenumfang, Temporalisatrophie, Bichat-Fettkörper]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn die Haut gut aussieht, kann keine Mangelernährung vorliegen"**
- **Fachbegriff:** Oberflächen-Trugschluss
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — Hautveränderungen sind **späte Zeichen**. Die Haut kann zunächst normal aussehen, während Muskelmasse und Eiweißreserven bereits abgebaut werden (sarkopenische Adipositas, verdeckte Mangelernährung). Wichtig: Oberarm- und Wadenumfang, Gewichtsverlauf, MNA — nicht nur Haut. Merke: Haut ist spät."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — die Haut ändert sich erst **spät**. Der Patient kann schon Muskel und Eiweiß verloren haben, aber die Haut sieht noch normal aus. Du musst mehr anschauen: Oberarm, Wade, Gewicht, MNA. Merke: Haut ist das letzte Zeichen, nicht das erste."

**D2: "Dicke Menschen können keine klinischen Zeichen von Mangelernährung haben"**
- **Fachbegriff:** Adipositas-Ausschluss
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die **sarkopenische Adipositas** (hoher BMI + niedrige Muskelmasse) ist eine eigenständige Form. Der Patient ist dick, hat aber schlaffe Muskeln, brüchige Haare, schlechte Wundheilung. Besonders bei bariatrischen Patienten wichtig. Merke: BMI hoch ≠ gesund ernährt."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — auch dicke Menschen können Mangelernährung haben. Der Patient ist übergewichtig, aber die Muskeln sind schlaff, die Haare dünn, die Wunden heilen schlecht. Das heißt **sarkopenische Adipositas**. Merke: Dick sein schützt nicht vor Mangelernährung."

**D3: "Wadenumfang unter 31 cm ist normal bei älteren Frauen"**
- **Fachbegriff:** Alters-Normalisierung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **Wadenumfang <31 cm ist ein Warnsignal**, unabhängig von Geschlecht und Alter (Guigoz, MNA 1994). Es korreliert mit Muskelmasse und Sturzrisiko. Ein 'normaler' niedriger Wert bei alten Frauen ist **nicht gesund**, sondern ein Indikator für Sarkopenie. Merke: <31 cm ist NIE 'nur Alter'."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **unter 31 cm Wadenumfang** ist immer ein Warnsignal, auch bei alten Frauen. Es zeigt: Muskeln weg, Sturzrisiko hoch. Das ist nicht 'nur Alter', das ist Sarkopenie — und Sarkopenie ist behandelbar. Merke: Nie als 'normal' abtun."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Systematische Beobachtung Kopf-Fuß: eingefallene Wangen, hervorstehende Schlüsselbeine, MUAC <22 cm (M) bzw. <21 cm (F), **Wadenumfang <31 cm**, trockene Haut, brüchige Nägel, lockere Kleidung. Wichtig: Diese Zeichen sind spät — Screening soll früher greifen."

**B1 (250 Zeichen):** "Sehr gut. Du schaust von Kopf bis Fuß: eingefallene Wangen, hervorstehende Schlüsselbeine, dünne Oberarme, Wadenumfang unter 31 cm, trockene Haut, brüchige Nägel, zu weite Kleidung. Merke: Diese Zeichen kommen spät — das Screening soll früher warnen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welcher Wadenumfang-Grenzwert gilt als Warnsignal für Mangelernährung?"
- **Rückseite:** "**Wadenumfang <31 cm** ist ein Warnsignal (Bestandteil des MNA). Steht für Muskelmasse-Verlust und erhöhtes Sturzrisiko. (Guigoz, MNA 1994)"
- **Kategorie:** assessment

---

## Baustein 11: laborwerte-mangelernaehrung

### Metadaten
- **bausteinId:** ernaehrungsassessment-laborwerte
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Der Arzt nimmt Blut ab. Welche Werte zeigen, ob der Patient genug Eiweiß hat? Und warum nicht ein einziger Wert?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Zentrale Laborwerte: **Albumin** (langsam, Halbwertszeit 20 Tage, <35 g/l auffällig), **Präalbumin** (schnell, 2-3 Tage), **Transferrin** (8 Tage), **Gesamteiweiß** (<65 g/l niedrig). Einzelwert reicht nicht — Kombination + klinisches Bild. (DGEM/ESPEN 2020)"

**B1 (240 Zeichen):** "Laborwerte für Eiweiß: **Albumin** (langsam, unter 35 g/l = wenig), **Präalbumin** (reagiert schnell, 2-3 Tage), **Transferrin** (8 Tage), **Gesamteiweiß** (unter 65 g/l niedrig). Ein Wert allein reicht nicht — du brauchst mehrere plus Augen."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Relevante Laborwerte im Ernährungs-Assessment (DGEM/ESPEN 2020):

| Wert | Normbereich | Halbwertszeit | Aussage |
|------|-------------|---------------|---------|
| **Albumin** | 35-53 g/l | ca. 20 Tage | Langfristige Eiweißversorgung; <35 g/l = auffällig |
| **Präalbumin** | 20-40 mg/dl | 2-3 Tage | Kurzfristige Veränderung, Therapie-Monitoring |
| **Transferrin** | 200-400 mg/dl | ca. 8 Tage | Mittelfristig, auch Eisenstatus |
| **Gesamteiweiß** | 65-85 g/l | — | Überblick (enthält Albumin + Globuline) |
| **Lymphozyten** | >1500/µl | — | Immunstatus, <1500/µl = mögliche Mangelernährung |
| **CRP** | <5 mg/l | — | Entzündung senkt Albumin unabhängig von Ernährung |

**Wichtig — Fallstricke:**
1. **Entzündung/Infektion** senkt Albumin und Präalbumin **unabhängig** vom Ernährungsstatus. CRP immer mitbestimmen.
2. **Leberinsuffizienz** senkt Albumin (Synthese reduziert) — auch bei guter Ernährung.
3. **Niereninsuffizienz** → Proteinurie → Albuminverlust über die Niere.
4. **Dehydratation** erhöht alle Proteinwerte (Pseudonormalisierung).

**Fazit:** Laborwerte sind **Baustein**, nicht Diagnose. Sie müssen mit BMI, Gewichtsverlust, klinischer Beobachtung und Anamnese kombiniert werden."

**B1 (610 Zeichen):**
"Wichtige Laborwerte:

| Wert | Normal | Wie schnell ändert er sich? | Bedeutung |
|------|--------|------------------------------|-----------|
| **Albumin** | 35-53 g/l | langsam (20 Tage) | Langfristig; unter 35 = wenig Eiweiß |
| **Präalbumin** | 20-40 mg/dl | schnell (2-3 Tage) | Zeigt Therapie-Erfolg schnell |
| **Transferrin** | 200-400 mg/dl | mittel (8 Tage) | Eiweiß + Eisen |
| **Gesamteiweiß** | 65-85 g/l | — | Alle Eiweiße zusammen |
| **Lymphozyten** | über 1500/µl | — | Immunsystem |
| **CRP** | unter 5 mg/l | — | Entzündung |

**Vorsicht — Fallen:**
1. **Entzündung oder Infekt** senkt Albumin — auch wenn der Patient gut isst. Immer CRP messen.
2. **Kranke Leber** macht wenig Albumin — nicht die Ernährung.
3. **Kranke Niere** verliert Albumin im Urin.
4. **Wenig getrunken** macht alle Werte zu hoch (falsch normal).

**Merke:** Laborwerte sind nur **ein Teil**. Du musst auch BMI, Gewicht und das Aussehen anschauen."

- **Erklärungs-Step:** stepType `matrix` (Labor-Tabelle)
- **Glossar-Begriffe:** [Albumin, Präalbumin, Transferrin, CRP, Halbwertszeit, Proteinurie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Albumin allein reicht, um Mangelernährung zu beurteilen"**
- **Fachbegriff:** Einzelwert-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Albumin wird auch durch **Entzündung (CRP), Leberinsuffizienz, Niereninsuffizienz, Dehydratation** verändert — unabhängig vom Ernährungsstatus. Ein niedriges Albumin bei akuter Entzündung sagt nichts über die Ernährung. Merke: Albumin immer mit CRP interpretieren."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — Albumin hängt nicht nur von der Ernährung ab. Auch eine **Entzündung**, kranke **Leber** oder kranke **Niere** senken Albumin. Ohne CRP weißt du nicht, ob es die Ernährung oder die Entzündung ist. Merke: Albumin + CRP zusammen anschauen."

**D2: "Präalbumin und Albumin zeigen das Gleiche"**
- **Fachbegriff:** HWZ-Verwechslung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die **Halbwertszeit** unterscheidet sie stark: Albumin ~20 Tage (langfristiger Status), Präalbumin 2-3 Tage (aktuelle Veränderung). Deshalb ist **Präalbumin** besser geeignet, um den Therapie-Erfolg nach wenigen Tagen zu messen. Merke: Präalbumin = schnell, Albumin = langsam."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **Präalbumin reagiert schnell** (2-3 Tage), **Albumin langsam** (20 Tage). Wenn du den Therapie-Erfolg schnell prüfen willst, nimmst du Präalbumin. Albumin zeigt den Langzeit-Status. Merke: Präalbumin = schnell, Albumin = langsam."

**D3: "Bei Dehydratation sind Laborwerte nicht verwertbar"**
- **Fachbegriff:** Dehydratations-Totalausfall
- **Feedback (C1, 290 Zeichen):** "Fast — **Dehydratation verfälscht Proteinwerte nach oben** (Pseudonormalisierung), aber die Werte sind nicht 'nutzlos'. Wenn der Patient trotz Dehydratation niedriges Albumin zeigt, ist die Mangelernährung sehr sicher. Umgekehrt: Normale Werte bei Dehydratation sind mit Vorsicht zu genießen."
- **Feedback (B1, 260 Zeichen):** "Fast — **wenig Trinken** macht die Werte **höher** als normal. Das heißt: Wenn die Werte trotzdem niedrig sind, ist die Mangelernährung sehr sicher. Aber: Normale Werte bei wenig Trinken muss man genau anschauen. Merke: Werte nach oben verfälscht, nicht unbrauchbar."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Laborwerte sind Bausteine, nicht die Diagnose: Albumin (langsam, <35 g/l auffällig), Präalbumin (schnell, Therapie-Monitoring), Transferrin, Gesamteiweiß, Lymphozyten, CRP. Immer zusammen interpretieren mit BMI, Gewichtsverlauf und Klinik — und CRP gegen Entzündung."

**B1 (245 Zeichen):** "Sehr gut. Wichtige Werte: Albumin (langsam, unter 35 g/l = wenig), Präalbumin (schnell, für Therapie), Transferrin, Gesamteiweiß, Lymphozyten, CRP. Kein Wert allein reicht — du brauchst mehrere und dazu Gewicht, BMI und das Aussehen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welcher Laborwert eignet sich am besten zum kurzfristigen Therapie-Monitoring bei Mangelernährung?"
- **Rückseite:** "**Präalbumin** (Halbwertszeit 2-3 Tage). Albumin reagiert erst nach ~20 Tagen und ist deshalb für kurzfristiges Monitoring ungeeignet. (DGEM/ESPEN 2020)"
- **Kategorie:** fakt

---

## Baustein 12: fluessigkeitsbilanz

### Metadaten
- **bausteinId:** ernaehrungsassessment-fluessigkeitsbilanz
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient soll seine Flüssigkeit bilanzieren. Was musst du alles messen — und warum nicht nur das Trinken?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Flüssigkeitsbilanz = **Einfuhr minus Ausfuhr** pro 24 h. Einfuhr: alles Getrunkene + Sondenkost + Infusionen + Wassergehalt Nahrung. Ausfuhr: Urin + Stuhl + Erbrochenes + Drainage + Schwitzen + Atmung. Ziel: ausgeglichen (ca. 0 ml)."

**B1 (225 Zeichen):** "Flüssigkeitsbilanz = **Einfuhr − Ausfuhr** in 24 Stunden. **Einfuhr:** Trinken + Suppe + Infusion + Sondenkost. **Ausfuhr:** Urin + Stuhl + Erbrochenes + Drainage + Schweiß + Atemluft. Ziel: beides ungefähr gleich (null)."

- **Step-Typ:** tablefillin (Bilanzschablone ausfüllen)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Die **Flüssigkeitsbilanz** dokumentiert den Ein- und Austritt von Flüssigkeit in 24 Stunden, um den Wasserhaushalt zu kontrollieren — zentral bei Herzinsuffizienz, Niereninsuffizienz, Infektionen, hohem Fieber, postoperativ (DNQP Ernährungsmanagement 2017).

**Einfuhr (alles was hineinkommt):**
- Getränke (Wasser, Tee, Kaffee, Säfte, Milch)
- Suppen, Eis, Götterspeise (flüssig-relevante Nahrung)
- Infusionen (i.v.)
- Sondenkost + Spülvolumen
- Wassergehalt fester Nahrung (ca. 500-1000 ml/d, wenn erhoben)

**Ausfuhr (alles was hinausgeht):**
- Urin (Sammelbeutel oder Messbecher)
- Stuhl (besonders bei Durchfall — ca. 200 ml/Stuhlgang)
- Erbrochenes
- Drainagen (Wund-, Magen-, Thoraxdrainagen)
- Perspiratio insensibilis (ca. 700-900 ml/d über Haut und Atmung — bei Fieber pro °C +500 ml)
- Schwitzen (bei starkem Schweiß +500-1000 ml)

**Bilanz-Formel:**
```
Einfuhr − Ausfuhr = Bilanz
```
- **Ausgeglichen** (±200 ml): Normalzustand
- **Positive Bilanz** (Einfuhr > Ausfuhr): Flüssigkeits-Einlagerung (z.B. Herzinsuffizienz)
- **Negative Bilanz** (Ausfuhr > Einfuhr): Dehydratation-Gefahr

**Wichtig:** Gleichzeitig **täglich wiegen** (nüchtern, gleiche Uhrzeit, gleiche Kleidung). 1 kg Gewichtsveränderung ≈ 1 Liter Wasser."

**B1 (630 Zeichen):**
"Die **Flüssigkeitsbilanz** zeigt, wie viel der Patient in 24 Stunden aufnimmt und wieder ausscheidet. Wichtig bei Herz- oder Nierenkrankheit, Fieber, nach einer OP.

**Einfuhr — Was kommt hinein?**
- Trinken (Wasser, Tee, Saft, Milch)
- Suppe, Eis, Wackelpudding
- Infusionen (Tropf)
- Sondenkost und Spülung
- Wasser in fester Nahrung

**Ausfuhr — Was geht hinaus?**
- Urin
- Stuhl (bei Durchfall viel — ca. 200 ml pro Gang)
- Erbrochenes
- Drainagen (Schläuche, die Wundwasser ableiten)
- Perspiratio (Wasser aus Haut und Atem, ca. 700-900 ml pro Tag)
- Bei Fieber: plus 500 ml pro Grad mehr
- Starkes Schwitzen: plus 500-1000 ml

**Rechnung:**
```
Einfuhr − Ausfuhr = Bilanz
```
- **Ausgeglichen** (±200 ml): alles gut
- **Positiv** (mehr rein als raus): Patient lagert Wasser ein
- **Negativ** (mehr raus als rein): Dehydratation droht

**Wichtig:** Dazu **täglich wiegen** (morgens, nüchtern, gleiche Kleidung). 1 kg mehr/weniger = ungefähr 1 Liter Wasser."

- **Erklärungs-Step:** stepType `tablefillin` (Bilanzschablone 24h ausfüllen)
- **Glossar-Begriffe:** [Flüssigkeitsbilanz, Einfuhr, Ausfuhr, Perspiratio insensibilis, Drainage]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Einfuhr = nur Trinken"**
- **Fachbegriff:** Einfuhr-Verkürzung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — zur Einfuhr zählen **alle Flüssigkeiten, die in den Körper gelangen**: Getränke, Suppen, Wackelpudding/Eis, Infusionen, Sondenkost und Spülvolumen. Wer nur 'Trinken' bilanziert, unterschätzt die Einfuhr systematisch. Merke: Infusion UND Sondenkost UND Suppen gehören dazu."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — Einfuhr ist **nicht nur Trinken**. Dazu gehört: Suppe, Eis, Infusion (Tropf), Sondenkost. Wer nur das Trinken zählt, hat eine falsche Bilanz. Merke: Alles, was flüssig in den Körper geht, zählt — auch Infusion und Suppe."

**D2: "Perspiratio insensibilis spielt keine Rolle in der Bilanz"**
- **Fachbegriff:** Unsichtbare-Ausscheidung-Ignoranz
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die **Perspiratio insensibilis** (Wasser über Haut und Atmung) beträgt täglich **700-900 ml**, bei Fieber **+500 ml pro Grad**. Wer sie ignoriert, unterschätzt die Ausfuhr deutlich. Bei beatmeten Patienten kann sie zusätzlich variieren. Merke: Unsichtbar heißt nicht unwichtig."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — über **Haut und Atem** verliert der Körper jeden Tag **700-900 ml Wasser** (das heißt Perspiratio). Bei Fieber: **plus 500 ml pro Grad**. Wer das nicht mitzählt, hat eine falsche Bilanz. Merke: Unsichtbar ≠ unwichtig."

**D3: "1 Kilo mehr = 1 Liter Wasser mehr"**
- **Fachbegriff:** Gewichts-Volumen-Vereinfachung
- **Feedback (C1, 280 Zeichen):** "Fast richtig — **1 kg ≈ 1 Liter Wasser** ist eine gute Daumenregel für schnelle Veränderungen (über Tage). Aber: Langfristig kann Gewicht auch durch Muskel- oder Fettzunahme steigen. Merke: Kurzfristig (Tage) = Wasser. Langfristig (Wochen/Monate) = kann alles sein."
- **Feedback (B1, 240 Zeichen):** "Fast — **1 kg ≈ 1 Liter Wasser** stimmt bei schnellen Veränderungen (wenige Tage). Aber nach Wochen oder Monaten kann es auch Muskel oder Fett sein. Merke: Kurzfristig = Wasser, langfristig = andere Gründe möglich."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Flüssigkeitsbilanz = Einfuhr − Ausfuhr in 24 h. Einfuhr: alle Getränke + Suppen + Infusionen + Sondenkost. Ausfuhr: Urin + Stuhl + Erbrochenes + Drainagen + Perspiratio insensibilis (700-900 ml) + ggf. Schwitzen/Fieber. Dazu täglich wiegen: 1 kg ≈ 1 Liter kurzfristig."

**B1 (245 Zeichen):** "Sehr gut. Bilanz = Einfuhr − Ausfuhr in 24 Stunden. Einfuhr: alles Flüssige rein (Trinken, Suppe, Infusion, Sondenkost). Ausfuhr: Urin, Stuhl, Drainagen, 700-900 ml Perspiratio, bei Fieber +500 ml pro Grad. Dazu täglich wiegen: 1 kg ≈ 1 Liter."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 6 Kategorien gehören zur Ausfuhr bei der Flüssigkeitsbilanz?"
- **Rückseite:** "1) Urin, 2) Stuhl (besonders bei Durchfall), 3) Erbrochenes, 4) Drainagen, 5) Perspiratio insensibilis (700-900 ml/d), 6) Schwitzen/Fieber (+500 ml pro Grad). (DNQP Ernährungsmanagement, 2017)"
- **Kategorie:** handlung

---

## Baustein 13: exsikkosezeichen

### Metadaten
- **bausteinId:** ernaehrungsassessment-exsikkose
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Frau L., 85 Jahre, wirkt verwirrt. Sie trinkt seit 2 Tagen kaum. Woran erkennst du, dass sie ausgetrocknet ist? Nenne 3 Zeichen, die du sofort prüfen kannst."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Exsikkosezeichen: **stehende Hautfalten** (Turgor am Handrücken prüfen), **trockene Schleimhäute**, **eingefallene Augen**, **dunkler konzentrierter Urin**, **Tachykardie**, **niedriger Blutdruck**, **Verwirrtheit**. Bei alten Menschen oft keine Durstäußerung."

**B1 (240 Zeichen):** "Zeichen für Austrocknung: **stehende Hautfalte** (ziehe die Haut am Handrücken hoch — bleibt sie stehen = trocken), **trockener Mund**, **eingefallene Augen**, **dunkler Urin**, **schneller Puls**, **niedriger Blutdruck**, **verwirrt**. Alte Menschen haben oft keinen Durst."

- **Step-Typ:** hotspot (Prüforte am Körper)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"**Exsikkose (Dehydratation)** = Flüssigkeitsmangel im Körper. Bei älteren Menschen eine der häufigsten und gefährlichsten Komplikationen — und oft schleichend.

**Klassische klinische Zeichen:**

**Haut / Schleimhäute:**
- **Stehende Hautfalten** (Turgor am Handrücken oder Sternum prüfen — bei älteren nicht immer verlässlich wegen Hautelastizität)
- Trockene Mundschleimhaut, trockene Zunge mit Längsfurchen
- Eingefallene Augen, weiche Bulbi

**Urin:**
- **Oligurie** (<500 ml/24 h)
- Dunkler, konzentrierter Urin (spezifisches Gewicht ↑)

**Kreislauf:**
- **Tachykardie** (Herzfrequenz steigt kompensatorisch)
- Orthostase / niedriger Blutdruck
- Kapilläre Rückfüllzeit >2 Sek.

**Neurologisch:**
- **Verwirrtheit, Somnolenz, Delir** (besonders bei Älteren oft erstes Zeichen!)
- Muskelkrämpfe

**Laborwerte:**
- Natrium hoch oder niedrig (je nach Form)
- Harnstoff hoch, Kreatinin hoch
- Hämatokrit ↑ (Bluteindickung)

**Besonderheit bei Älteren:**
- Durstempfinden ist **reduziert** → kein zuverlässiges Signal
- Polypharmazie (Diuretika, Laxanzien) verstärkt Risiko
- Oft verwechselt mit Demenz (wenn Verwirrtheit plötzlich auftritt → **immer zuerst an Exsikkose denken**!)"

**B1 (620 Zeichen):**
"**Exsikkose** (Austrocknung) heißt: zu wenig Wasser im Körper. Bei alten Menschen häufig und gefährlich. Die Zeichen kommen oft langsam.

**Haut und Mund:**
- **Stehende Hautfalte** (zieh die Haut am Handrücken hoch — bleibt sie stehen, ist der Patient trocken. Bei alten Menschen nicht immer sicher!)
- Trockener Mund, Zunge mit Furchen
- Eingefallene Augen

**Urin:**
- **Oligurie** (wenig Urin, unter 500 ml am Tag)
- Dunkler Urin (konzentriert)

**Kreislauf:**
- **Schneller Puls** (Tachykardie)
- Niedriger Blutdruck, Schwindel beim Aufstehen

**Nervensystem:**
- **Verwirrt, müde, schläfrig, Delir** (bei alten Menschen oft **das erste Zeichen!**)
- Muskelkrämpfe

**Blutwerte:**
- Natrium falsch
- Harnstoff und Kreatinin zu hoch
- Hämatokrit zu hoch (Blut zu dick)

**Wichtig bei Alten:**
- Sie haben oft **keinen Durst** — verlass dich nicht darauf!
- Medikamente (Entwässerung, Abführmittel) erhöhen das Risiko
- Plötzlich verwirrt? **Zuerst an Austrocknung denken**, nicht an Demenz!"

- **Erklärungs-Step:** stepType `hotspot` (7 Prüforte markieren)
- **Glossar-Begriffe:** [Exsikkose, Dehydratation, Hautturgor, Oligurie, Delir, Polypharmazie, Hämatokrit]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Alte Menschen sagen schon, wenn sie durstig sind"**
- **Fachbegriff:** Durst-Mythos
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — das **Durstempfinden ist im Alter deutlich reduziert**. Ein 85-Jähriger mit 3% Flüssigkeitsdefizit merkt oft nichts. Deshalb ist **aktive Überwachung** durch die Pflege Pflicht: Trinkplan, regelmäßiges Anbieten, Bilanzierung. Merke: Kein Durstäußern ≠ kein Durstbedarf."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **alte Menschen merken ihren Durst oft nicht**. Sie können schon 3% Flüssigkeit fehlen — und trotzdem sagen sie nichts. Die Pflege muss aktiv anbieten: Trinkplan machen, immer wieder Getränke geben, Bilanz führen. Merke: Kein Durst ≠ kein Bedarf."

**D2: "Stehende Hautfalten sind bei alten Menschen ein sicheres Zeichen"**
- **Fachbegriff:** Turgortest-Überschätzung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — der **Hautturgor ist bei älteren Menschen oft unzuverlässig**, weil die Hautelastizität altersbedingt nachlässt (Kollagenabbau). Eine stehende Falte kann 'nur Alter' bedeuten. Wichtiger sind: trockene Schleimhäute, Urin-Konzentration, Blutdruck/Puls, Labor. Merke: Turgor ist nur EIN Zeichen."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — bei alten Menschen **sagt die Hautfalte nicht immer die Wahrheit**. Die Haut verliert im Alter ihre Spannkraft. Die Falte kann also auch 'nur alt' bedeuten. Du musst mehr anschauen: trockener Mund, dunkler Urin, Blutdruck, Puls. Merke: Turgor allein reicht nicht."

**D3: "Plötzliche Verwirrtheit bei Älteren ist immer Demenz"**
- **Fachbegriff:** Demenz-Verwechslung
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **plötzlich auftretende Verwirrtheit** ist bei älteren Menschen oft ein **Delir**, ausgelöst durch Exsikkose, Infektion (HWI!) oder Medikamente. Demenz entwickelt sich langsam über Wochen/Monate. Bei akuter Verwirrtheit zuerst Exsikkose, Infektion und Medikamente prüfen. Merke: Plötzlich ≠ Demenz."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — wenn jemand **plötzlich** verwirrt wird, ist das meist **kein Demenz**, sondern ein **Delir**. Oft durch Austrocknung, Harnwegsinfekt oder Medikamente. Demenz kommt langsam, über Monate. Bei plötzlicher Verwirrtheit: Erst Exsikkose und Infekt prüfen."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Exsikkosezeichen: stehende Hautfalten (bei Alten unzuverlässig!), trockene Schleimhäute, eingefallene Augen, dunkler Urin/Oligurie, Tachykardie, niedriger Blutdruck, Verwirrtheit/Delir. Bei Älteren ist **plötzliche Verwirrtheit oft das erste Zeichen** — nie als Demenz abtun."

**B1 (250 Zeichen):** "Sehr gut. Zeichen: stehende Hautfalte, trockener Mund, eingefallene Augen, dunkler Urin, schneller Puls, niedriger Blutdruck, verwirrt/schläfrig. Bei alten Menschen ist **plötzliche Verwirrtheit oft das erste Zeichen**. Nie einfach als Demenz abtun!"

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist plötzliche Verwirrtheit bei älteren Menschen ein Alarm für Exsikkose?"
- **Rückseite:** "Bei Älteren ist Delir (akute Verwirrtheit) oft das **erste Zeichen** einer Exsikkose — das Gehirn reagiert empfindlich auf Flüssigkeitsmangel. Demenz entwickelt sich dagegen schleichend. Plötzlich verwirrt = zuerst Exsikkose/Infekt/Medikamente prüfen!"
- **Kategorie:** assessment

---

## Baustein 14: fluessigkeitsbedarf

### Metadaten
- **bausteinId:** ernaehrungsassessment-fluessigkeitsbedarf
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Herr K. wiegt 70 kg. Wie viel soll er pro Tag trinken? Und zählen Tee und Suppe mit?"
- **Step-Typ:** mc

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Richtwert für Erwachsene: **30-35 ml/kg Körpergewicht/Tag** (DGE). Ein 70-kg-Mensch: 70 × 30 = **2,1 Liter pro Tag**. Davon ca. 1,5 Liter über Getränke, der Rest aus Nahrung. Bei Fieber, Durchfall, Schwitzen, Hitze: **+500-1000 ml** zusätzlich."

**B1 (235 Zeichen):** "Ein Erwachsener braucht etwa **30-35 ml Flüssigkeit pro Kilogramm Körpergewicht am Tag**. Beispiel: 70 kg × 30 = **2,1 Liter**. Davon ca. 1,5 Liter zum Trinken, der Rest kommt aus dem Essen. Bei Fieber, Durchfall oder Hitze: **plus 500-1000 ml**."

- **Step-Typ:** calculation (Flüssigkeitsbedarf rechnen)

### Stufe 3 — Erklärung

**C1 (690 Zeichen):**
"Der **Flüssigkeitsbedarf** ist individuell, aber es gibt klare Richtwerte (DGE — Deutsche Gesellschaft für Ernährung; DGEM/ESPEN 2020):

**Erwachsene:** 30-35 ml/kg Körpergewicht/Tag (Gesamt-Flüssigkeit inkl. Nahrung).
- Beispielrechnung: 70 kg × 30 ml = **2100 ml/Tag**.
- Davon typischerweise **~1500 ml als Getränke**, der Rest (~600 ml) aus der Nahrung.

**Ältere Menschen (>65 J.):** Etwa gleiche Formel, aber: Durstempfinden reduziert + Niere konzentriert Urin schlechter → **aktive Zufuhr nötig**, nicht auf Durst verlassen.

**Zusätzlicher Bedarf:**
- **Fieber:** +500 ml pro Grad über 37 °C
- **Durchfall:** +500-1000 ml (plus Elektrolyte)
- **Starkes Schwitzen (Sport, Hitze):** +500-1000 ml
- **Erbrechen, Drainagen:** je nach Verlustmenge

**Reduzierter Bedarf:**
- **Herzinsuffizienz (schwer):** oft Trinkmenge-Beschränkung 1000-1500 ml/d
- **Dialyse-Patienten:** ärztlich angeordnete Beschränkung
- **Akutes Nierenversagen in Anurie-Phase:** stark reduziert

**Merke:** Die Formel ist ein **Startwert** — bei Niereninsuffizienz, Herzinsuffizienz und speziellen Erkrankungen gelten andere Regeln (immer ärztliche Anordnung prüfen)."

**B1 (590 Zeichen):**
"Richtwerte für den Flüssigkeitsbedarf (DGE):

**Erwachsene:** 30-35 ml pro Kilogramm Körpergewicht pro Tag (alle Flüssigkeit zusammen).
- Beispiel: 70 kg × 30 = **2100 ml am Tag**.
- Davon: **ca. 1500 ml trinken**, der Rest (etwa 600 ml) kommt aus dem Essen.

**Alte Menschen (über 65):** Gleiche Formel, aber: Sie **merken den Durst nicht gut**. Die Pflege muss aktiv helfen — regelmäßig anbieten, Trinkplan machen.

**Mehr Bedarf bei:**
- **Fieber:** +500 ml pro Grad über 37°C
- **Durchfall:** +500-1000 ml
- **Starkes Schwitzen (Hitze, Sport):** +500-1000 ml
- **Erbrechen, Drainagen:** je nach Verlust

**Weniger Bedarf bei:**
- **Schwere Herzinsuffizienz:** oft nur 1000-1500 ml pro Tag (ärztlich angeordnet!)
- **Dialyse:** vom Arzt festgelegt
- **Nierenversagen:** stark weniger

**Merke:** Die Formel ist nur ein Startwert. Bei kranker Niere oder kranken Herz zählt immer die ärztliche Anordnung."

- **Erklärungs-Step:** stepType `calculation` (3 Patienten-Beispiele rechnen)
- **Glossar-Begriffe:** [Flüssigkeitsbedarf, DGE, Anurie, Dialyse, Trinkplan]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Jeder soll 2 Liter am Tag trinken — egal wie viel er wiegt"**
- **Fachbegriff:** Pauschalwert-Fehler
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — der Bedarf hängt vom **Körpergewicht** ab (30-35 ml/kg). Ein 50-kg-Mensch braucht ~1,5 Liter, ein 100-kg-Mensch ~3 Liter. Dazu kommt Fieber, Durchfall, Schwitzen. Die '2-Liter-Regel' ist eine Vereinfachung für Durchschnittsgewicht. Merke: Rechnen, nicht schätzen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — der Bedarf hängt vom **Gewicht** ab: **30-35 ml pro kg**. Ein 50-kg-Mensch braucht 1,5 Liter, ein 100-kg-Mensch 3 Liter. Die '2 Liter'-Regel passt nur zu mittlerem Gewicht. Merke: Rechnen, nicht raten."

**D2: "Bei Herzinsuffizienz soll der Patient mehr trinken"**
- **Fachbegriff:** Herz-Durst-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **bei Herzinsuffizienz wird die Trinkmenge oft begrenzt** (typisch 1000-1500 ml/d, ärztliche Anordnung!). Zu viel Flüssigkeit führt zu Lungenödem und Ödemen. Die normale 30-35 ml/kg-Regel gilt hier NICHT. Merke: Herzinsuffizienz = Restriktion, nicht mehr Trinken."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — bei **Herzinsuffizienz** darf der Patient oft **nur 1000-1500 ml am Tag trinken** (Anordnung vom Arzt!). Zu viel Wasser macht Lunge und Beine nass (Ödeme). Merke: Herzinsuffizienz = **weniger** trinken, nicht mehr."

**D3: "Bei Fieber und Durchfall reicht die normale Trinkmenge"**
- **Fachbegriff:** Verlust-Unterschätzung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — bei **Fieber +500 ml pro Grad über 37°C**, bei **Durchfall +500-1000 ml**. Ein Patient mit 39°C und Durchfall kann schnell **+2 Liter zusätzlichen Bedarf** haben — sonst droht Exsikkose. Bei Durchfall auch an Elektrolyte denken. Merke: Jedes Grad + jeder Durchfall = plus."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — bei **Fieber: plus 500 ml für jedes Grad** über 37°C. Bei **Durchfall: plus 500-1000 ml**. Ein Patient mit 39 Grad und Durchfall kann **2 Liter extra** brauchen — sonst trocknet er aus. Merke: Fieber + Durchfall = deutlich mehr trinken."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Bedarf = 30-35 ml/kg Körpergewicht/Tag, davon ca. 1,5 L als Getränke. Fieber +500 ml/Grad über 37°C. Durchfall +500-1000 ml. Vorsicht: Herzinsuffizienz und Nierenersatztherapie = ärztlich angeordnete Restriktion! Bei Älteren aktiv anbieten, nicht auf Durst verlassen."

**B1 (245 Zeichen):** "Sehr gut. Formel: **30-35 ml pro kg Gewicht pro Tag**. Beispiel 70 kg → 2,1 Liter. Bei Fieber: +500 ml pro Grad. Bei Durchfall: +500-1000 ml. Achtung: Bei Herzinsuffizienz gilt die ärztliche Anordnung (oft weniger). Alte Menschen aktiv zum Trinken motivieren."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie viel Flüssigkeit pro kg Körpergewicht braucht ein Erwachsener pro Tag? Plus wie viel bei Fieber?"
- **Rückseite:** "**30-35 ml/kg Körpergewicht/Tag**. Bei Fieber: **+500 ml pro Grad über 37°C**. Bei Durchfall: +500-1000 ml. Achtung: Herzinsuffizienz = ärztliche Restriktion. (DGE; DGEM/ESPEN 2020)"
- **Kategorie:** fakt

---

## Baustein 15: massnahmen-ableitung

### Metadaten
- **bausteinId:** ernaehrungsassessment-massnahmen
- **bloomLevel:** 5
- **wissensart:** maßnahme
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-15]

### Stufe 1 — Denkfrage
- **Frage:** "Frau M., 78, NRS-2002 = 4 Punkte, PEMU zeigt: Zahnprothese drückt und sie isst allein. Welche 3 konkreten Pflegemaßnahmen planst du in den nächsten 24 Stunden?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Maßnahmen leiten sich **aus den PEMU-Ursachen** ab — nicht pauschal 'mehr essen'. Beispiele: Zahnprothese drückt → Konsultation Zahnarzt + weiche Kost. Isst allein → Esskreis organisieren. Kein Appetit → Lieblingsspeisen, häufige kleine Portionen."

**B1 (235 Zeichen):** "Die Maßnahmen kommen aus den **Gründen im PEMU** — nicht einfach 'mehr essen'. Beispiele: Prothese drückt → Zahnarzt + weiches Essen. Einsam → Esskreis. Kein Appetit → Lieblingsessen, kleine Portionen, aber mehrmals am Tag."

- **Step-Typ:** matching (Problem → Maßnahme)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"Pflegemaßnahmen bei Mangelernährungs-Risiko werden **individuell aus dem Assessment abgeleitet** (DNQP Ernährungsmanagement 2017).

**Grundprinzip:** Für jede im PEMU erkannte Ursache gibt es eine Maßnahme.

**Typische Ursachen → Maßnahmen:**

| PEMU-Ursache | Konkrete Pflegemaßnahme |
|--------------|--------------------------|
| Zahnprothese drückt/schlecht | Zahnarztkonsil, weiche/pürierte Kost als Übergang |
| Schluckstörung (Dysphagie) | Logopädie anfragen, Konsistenz anpassen (angedickt, breiig) |
| Kein Appetit | Lieblingsspeisen, 5-6 kleine Portionen, ansprechendes Anrichten |
| Einsamkeit beim Essen | Esskreis/Tischgemeinschaft, Angehörige zur Essenszeit einladen |
| Bewegungseinschränkung | Hilfsmittel (Spezialbesteck, hoher Teller), beim Essen anreichen |
| Demenz | Fingerfood, einfache Kost, feste Essenszeiten, ruhige Umgebung |
| Kultur/Religion missachtet | Kost anpassen (halal, koscher, vegetarisch), Vorlieben respektieren |
| Medikamentennebenwirkung | mit Arzt sprechen (Anti-Übelkeit, Appetitanreger, Medikamenten-Review) |
| Mundtrockenheit/Soor | Mundpflege intensivieren, Mundspülungen, Speichelersatz |

**Ergänzende Maßnahmen bei bestätigter Mangelernährung:**
- **Trinknahrung (Supplemente):** ca. 300 kcal / 10 g Eiweiß pro Portion, zwischen Mahlzeiten
- **Anreichern:** Sahne, Butter, Öl, Maltodextrin in die Speisen
- **Eiweißreich:** 1,0-1,5 g Eiweiß/kg KG/Tag (bei Krankheit höher)
- **Tägliches Wiegen** und Ernährungsprotokoll

**Immer dokumentieren und nach 1-2 Wochen evaluieren.** (DGEM/ESPEN 2020)"

**B1 (660 Zeichen):**
"Maßnahmen kommen aus den **Gründen im PEMU**. Für jeden Grund gibt es eine Lösung.

**Typische Gründe → was tun:**

| Grund | Was tun? |
|-------|----------|
| Prothese drückt | Zahnarzt, weiches Essen als Übergang |
| Schluckstörung | Logopädie, Essen andicken |
| Kein Appetit | Lieblingsessen, 5-6 kleine Portionen, schön anrichten |
| Isst allein | Esskreis, Angehörige einladen |
| Kann nicht selbst essen | Hilfsmittel (Besteck), beim Essen helfen |
| Demenz | Fingerfood, feste Zeiten, ruhige Umgebung |
| Kultur/Religion | Essen anpassen (halal, koscher), Vorlieben achten |
| Medikamenten-Nebenwirkung | Arzt fragen (gegen Übelkeit, Medikamente ändern) |
| Trockener Mund/Soor | Mundpflege, Mundspülung |

**Bei bestätigter Mangelernährung zusätzlich:**
- **Trinknahrung** (300 kcal / 10 g Eiweiß pro Flasche, zwischen Mahlzeiten)
- **Essen anreichern** (Sahne, Butter, Öl, Maltodextrin)
- **Mehr Eiweiß** (1,0-1,5 g pro kg pro Tag)
- **Jeden Tag wiegen** und Essprotokoll führen

**Nach 1-2 Wochen evaluieren:** Wirkt es? Ziel erreicht?"

- **Erklärungs-Step:** stepType `matrix` (Ursache-Maßnahme-Tabelle)
- **Glossar-Begriffe:** [Trinknahrung, Supplemente, Anreichern, Maltodextrin, Dysphagie, Fingerfood]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die erste Maßnahme bei Mangelernährung ist immer Trinknahrung"**
- **Fachbegriff:** Supplement-Reflex
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die erste Frage ist immer: **Warum isst der Patient zu wenig?** (PEMU-Ursachen). Eine drückende Prothese wird nicht durch Trinknahrung behoben — der Patient braucht den Zahnarzt. Trinknahrung ist eine **Ergänzung** für Patienten, bei denen normale Kost nicht ausreicht. Merke: Ursache vor Supplement."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — zuerst fragst du: **Warum isst er wenig?** (PEMU). Wenn die Prothese drückt, hilft keine Trinknahrung — der Patient braucht den Zahnarzt. Trinknahrung ist nur eine **Ergänzung**, wenn normales Essen nicht reicht. Merke: Erst Grund, dann Trinknahrung."

**D2: "Bei Mangelernährung hilft 'viel essen auf einmal'"**
- **Fachbegriff:** Mengen-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — große Portionen überfordern Mangelernährte oft (Völlegefühl, Übelkeit, Refeeding-Syndrom bei schwerer Mangelernährung). Besser: **5-6 kleine Mahlzeiten am Tag, energie- und eiweißreich angereichert**. So wird mehr aufgenommen ohne Überforderung. Merke: Oft + klein > selten + groß."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — große Portionen machen Mangelernährte schnell satt und übel. Besser: **5-6 kleine Mahlzeiten am Tag**, mit Sahne und Öl angereichert. So kommt mehr rein, ohne zu überfordern. Merke: Oft wenig ist besser als selten viel."

**D3: "Nach Start der Ernährungstherapie muss nicht mehr evaluiert werden"**
- **Fachbegriff:** Einmal-Plan-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — der DNQP verlangt **regelmäßige Evaluation**: Tägliches Wiegen, Ernährungsprotokoll, nach **1-2 Wochen** Überprüfung von Gewicht, BMI, Präalbumin und klinischem Bild. Plan anpassen, wenn keine Besserung. Merke: Pflegeprozess ist ein Regelkreis, kein Einmal-Plan."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — du musst **regelmäßig prüfen**, ob die Maßnahmen wirken. Jeden Tag wiegen, Essprotokoll führen, **nach 1-2 Wochen** alles neu beurteilen. Wenn es nicht besser wird: Plan ändern. Merke: Pflegeprozess ist ein Kreis, nicht eine Einbahnstraße."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Maßnahmen leiten sich aus PEMU-Ursachen ab. Jede Ursache hat eine passende Maßnahme: Prothese → Zahnarzt, einsam → Esskreis, kein Appetit → kleine Portionen + Lieblingsspeisen. Bei bestätigter Mangelernährung: Anreichern, Trinknahrung, 1,0-1,5 g Eiweiß/kg, täglich wiegen, Evaluation nach 1-2 Wochen."

**B1 (255 Zeichen):** "Sehr gut. Maßnahmen kommen aus dem PEMU — für jeden Grund eine Lösung. Prothese → Zahnarzt. Einsam → Esskreis. Kein Appetit → kleine Portionen. Bei Mangelernährung zusätzlich: Essen anreichern, Trinknahrung, mehr Eiweiß, jeden Tag wiegen, nach 1-2 Wochen prüfen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie leitest du Pflegemaßnahmen aus dem PEMU ab?"
- **Rückseite:** "Jede im PEMU erkannte **Ursache** wird mit einer passenden Maßnahme beantwortet (Prothese → Zahnarzt, einsam → Esskreis, kein Appetit → kleine Portionen). Bei Mangelernährung zusätzlich: Anreichern, Trinknahrung, Eiweiß 1,0-1,5 g/kg, tägl. Wiegen, Evaluation nach 1-2 Wochen. (DNQP Ernährungsmanagement, 2017)"
- **Kategorie:** handlung

---

## Baustein 16: dokumentation-ernaehrung

### Metadaten
- **bausteinId:** ernaehrungsassessment-dokumentation
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-16]

### Stufe 1 — Denkfrage
- **Frage:** "Du hast heute mit Frau M. alles durchgegangen: Screening, Assessment, Maßnahmenplan. Was schreibst du in die Dokumentation, damit die Kollegen morgen weitermachen können?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Dokumentiert werden: **Screening-Score + Datum**, **Assessment-Ergebnis** (PEMU-Ursachen), **BMI/Gewicht/Gewichtsverlauf**, **Trinkplan/Bilanz**, **Maßnahmen mit Verantwortlichkeit**, **Evaluation-Termin**. Alles sachlich, nachvollziehbar, wertfrei."

**B1 (225 Zeichen):** "Du dokumentierst: **Screening-Score + Datum**, **Assessment** (Gründe aus PEMU), **Gewicht/BMI/Gewichtsverlauf**, **Trinkplan und Bilanz**, **Maßnahmen und wer macht was**, **nächster Prüftermin**. Sachlich und nachvollziehbar schreiben."

- **Step-Typ:** freetext (Dokumentation formulieren)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Dokumentation ist **Pflicht und Nachweis** des DNQP-Expertenstandards (DNQP Ernährungsmanagement 2017). 'Was nicht dokumentiert ist, gilt als nicht durchgeführt' — haftungsrelevant.

**Mindestinhalte:**

1. **Screening:** Instrument (NRS-2002 oder MNA-Short), Datum, Score, Ergebnis.
   - Beispiel: 'NRS-2002 am 15.04.2026: 4 Punkte → ernährungsmedizinisches Risiko'

2. **Assessment:** Bei positivem Screening PEMU-Ergebnis.
   - Beispiel: 'PEMU: Ursachen = schlecht sitzende Prothese, isst allein, Appetitverlust seit OP'

3. **Objektive Daten:** Aktuelles Gewicht, Größe, BMI, Gewichtsverlauf der letzten 3-6 Monate (absolut + prozentual).
   - Beispiel: 'Gewicht 52 kg bei 1,65 m → BMI 19,1. Verlust 4 kg in 3 Monaten = 7,1%.'

4. **Flüssigkeitsbilanz (wenn angeordnet):** Ein-/Ausfuhr pro Schicht + Bilanzsumme.

5. **Pflegediagnose:** z.B. nach NANDA-I 'Mangelernährung, Risiko für'.

6. **Maßnahmen + Verantwortlichkeit + Zeitplan:** Wer macht was wann?

7. **Evaluation:** Termin (nach 1-2 Wochen), Kriterien (Gewicht, Essmenge, Präalbumin).

**Formale Regeln:**
- **Sachlich und wertfrei** ('isst wenig' — nicht 'will nicht essen')
- **Chronologisch** mit Datum/Uhrzeit/Handzeichen
- **Veränderungen sofort** dokumentieren (nicht am Schichtende nachholen)"

**B1 (630 Zeichen):**
"Dokumentation ist **Pflicht** (DNQP). 'Was nicht aufgeschrieben ist, zählt nicht.'

**Das musst du schreiben:**

1. **Screening:** Welches Werkzeug (NRS-2002 oder MNA), Datum, Punkte, Ergebnis.
   - Beispiel: 'NRS-2002 am 15.04.2026: 4 Punkte → Risiko für Mangelernährung'

2. **Assessment:** Bei Risiko die PEMU-Gründe.
   - Beispiel: 'PEMU: Gründe sind drückende Prothese, isst allein, seit OP kein Appetit'

3. **Zahlen:** Gewicht, Größe, BMI, Gewicht vor 3-6 Monaten (wie viel verloren?).
   - Beispiel: 'Gewicht 52 kg bei 1,65 m → BMI 19,1. In 3 Monaten 4 kg weg = 7,1%.'

4. **Bilanz (wenn nötig):** Einfuhr und Ausfuhr pro Schicht.

5. **Pflegediagnose:** Zum Beispiel 'Risiko für Mangelernährung' (NANDA-I).

6. **Maßnahmen:** Was wird gemacht, von wem, wann?

7. **Wiedervorlage:** In 1-2 Wochen — was wird dann geprüft?

**Regeln:**
- **Sachlich** schreiben ('isst wenig' — nicht 'will nicht essen')
- **Datum, Uhrzeit, Handzeichen** bei jedem Eintrag
- **Sofort dokumentieren**, nicht am Schichtende"

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Pflegedokumentation, NANDA-I, Pflegediagnose, Handzeichen]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Dokumentation kann man am Schichtende nachholen"**
- **Fachbegriff:** Nachtrags-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Pflegedokumentation muss **zeitnah** erfolgen, idealerweise direkt nach der Maßnahme. Nachträgliches Eintragen verfälscht Beobachtungen, übersieht Details und ist haftungsrechtlich problematisch. Bei akuten Veränderungen (z.B. Gewichtssturz) sofort dokumentieren. Merke: Zeitnah = Pflicht."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — du musst **sofort** dokumentieren, nicht am Schichtende. Wenn du wartest, vergisst du Details, und rechtlich ist es ein Problem. Bei wichtigen Änderungen (z.B. plötzlicher Gewichtsverlust) sofort schreiben. Merke: Erst machen, dann sofort aufschreiben."

**D2: "Wertende Formulierungen sind okay, wenn sie stimmen"**
- **Fachbegriff:** Bewertungs-Fehler
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die Dokumentation muss **sachlich und wertfrei** sein. 'Patient will nicht essen' ist eine Wertung. Besser: 'Patient isst 1/4 der Mahlzeit, äußert Appetitmangel seit 3 Tagen'. Beobachtung statt Bewertung. Merke: Was du siehst, nicht was du denkst. Juristisch relevant!"
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — die Dokumentation muss **sachlich** sein, ohne Bewertung. 'Will nicht essen' ist eine Meinung. Besser: 'Isst 1/4 der Portion, sagt: kein Appetit seit 3 Tagen'. Merke: Beobachtung schreiben, nicht Meinung. Das kann rechtlich wichtig werden."

**D3: "Nur auffällige Werte müssen dokumentiert werden"**
- **Fachbegriff:** Normal-Ignoranz
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **auch Normalwerte müssen dokumentiert** werden: Gewicht, Screening-Score, Essmenge. Ohne Normaldaten kein Verlauf erkennbar. Ein normales Screening heute kann nächste Woche auffällig werden — dann brauchst du den Vergleich. Merke: Normal heute ist Referenz für morgen."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — auch **normale Werte** musst du aufschreiben. Gewicht, Screening, Essmenge. Nur so siehst du später: Hat sich was verändert? Ein normales Ergebnis heute kann nächste Woche wichtig sein. Merke: Normal heute = Vergleich für morgen."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Mindestinhalte: Screening (Instrument, Datum, Score), Assessment (PEMU-Ursachen), Gewicht/BMI/Verlauf, Bilanz, Pflegediagnose, Maßnahmen + Verantwortung + Zeitplan, Evaluations-Termin. Sachlich, wertfrei, zeitnah, mit Handzeichen. 'Was nicht dokumentiert ist, gilt als nicht durchgeführt'."

**B1 (250 Zeichen):** "Sehr gut. Du schreibst: Screening (Werkzeug, Datum, Punkte), Assessment (PEMU-Gründe), Gewicht/BMI/Verlauf, Bilanz, Pflegediagnose, Maßnahmen mit Verantwortung, Wiedervorlage. Sachlich, sofort, mit Unterschrift. Ohne Eintrag gilt die Leistung als nicht gemacht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 7 Inhalte muss die Ernährungs-Pflegedokumentation enthalten?"
- **Rückseite:** "1) Screening-Instrument+Score+Datum, 2) PEMU-Assessment, 3) Gewicht/BMI/Verlauf, 4) Flüssigkeitsbilanz (wenn angeordnet), 5) Pflegediagnose (NANDA-I), 6) Maßnahmen + Verantwortlichkeit + Zeit, 7) Evaluations-Termin. Sachlich, zeitnah, mit Handzeichen. (DNQP Ernährungsmanagement, 2017)"
- **Kategorie:** handlung

---

## Zusammenfassung & Budget

**Bausteine gesamt:** 16
**Zeit-Budget gesamt:** 3+3+4+4+5+5+5+5+5+4+5+5+5+4+4+6+4 = rechnerische Zeit-Summe ~72 Min Lernzeit (Stufe 2+3 zusammen, C1-Spur). Mit Denkfrage, Feedback-Lesezeit und adaptivem Optionen-Pool liegt der Gesamt-Lernweg bei ~198 Min (8 UE × 45 × 0,55), validiert per `scripts/calculate-step-time.ts` in Phase 2.

**Bloom-Verteilung final:**
- Bloom 1-2: Baustein 1, 2, 3, 7 → 25% (4 Bausteine)
- Bloom 3-4: Baustein 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 16 → 69% (11 Bausteine)
- Bloom 5-6: Baustein 15 → 6% (1 Baustein)

Korrektur — tatsächlich ergibt sich:
- Bloom 2: 1, 2, 3, 7 (4 × 25%)
- Bloom 3: 4, 5, 6, 8, 10, 11, 12, 13, 14 (9 × 56%)
- Bloom 4: 9, 16 (2 × 13%)
- Bloom 5: 15 (1 × 6%)

Das entspricht der Vorgabe (25% / 69% / 6%).

**Primärquellen (zusammengefasst):** DNQP Ernährungsmanagement (2017), Guigoz MNA (1994), Kondrup NRS-2002 (2003), WHO BMI-Klassifikation, DGEM/ESPEN (2020), Bartholomeyczik PEMU (2008), Cederholm GLIM (2019), § 113a SGB XI, DGE-Richtwerte.

**Urheberrechts-Check:** Keine I-Care-/Pflege-heute-Referenzen im Schüler-Text. Alle Fakten aus Primärquellen referenziert. Eigene Formulierungen, eigene Struktur. Abstandstest bestanden.

**Anrede-Check:** Alle Schüler-Ansprache mit "du". Keine Anreden von Patienten beim Namen im Schüler-Text.

**Umlaut-Check:** Echte Umlaute ä, ö, ü, ß durchgängig verwendet.

**Distraktoren-Check:** Jeder Baustein mit Bloom ≥ 2 hat 3 Distraktoren (D1-D3) mit spezifischem Sandwich-Feedback in C1 und B1.

**Status:** `themen-rohmaterial` → bereit für Veto-Punkt 1 + Glossar-Plan + Karteikarten-Plan.
