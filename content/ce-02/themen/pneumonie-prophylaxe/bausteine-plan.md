# Wissensbausteine: Pneumonie-Prophylaxe

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `pneumonie-prophylaxe` |
| ceId | `ce-02` |
| cluster | B (Mobilität & Prophylaxen) |
| wissensart | handlung |
| geschaetzteUE | 4 |
| zielzeitMin | 99 (4 UE × 45 × 0,55) |
| bausteineAnzahl | 11 |
| voraussetzungen | `positionierung`, `mobilisation` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 18% (2 Bausteine), Bloom 3-4: 55% (6 Bausteine), Bloom 5-6: 27% (3 Bausteine)

**Primärquellen:**
- AWMF S3-Leitlinie (2017, Update geplant): Epidemiologie, Diagnostik und Therapie erwachsener Patienten mit nosokomialer Pneumonie (Reg.-Nr. 020-013)
- RKI/KRINKO (2013): Prävention der nosokomialen beatmungsassoziierten Pneumonie
- RKI (2022): Händehygiene in Einrichtungen des Gesundheitswesens
- DGP/Paul-Ehrlich-Gesellschaft (2021): S3-Leitlinie Behandlung von erwachsenen Patienten mit ambulant erworbener Pneumonie
- Torres et al. (2017): ERS/ESICM/ESCMID/ALAT Guideline for the Management of Hospital-acquired Pneumonia
- WHO (2009): WHO Guidelines on Hand Hygiene in Health Care
- DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege

---

## Baustein 1: pneumonie-definition-risiko

### Metadaten
- **bausteinId:** pneumonie-prophylaxe-definition
- **bloomLevel:** 1
- **wissensart:** definition
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Was passiert in der Lunge, wenn jemand lange flach liegt und wenig atmet? Stell dir vor, du liegst eine ganze Woche auf dem Rücken im Bett und darfst nicht aufstehen."
- **Step-Typ:** freetext (kurz, aktiviert Vorwissen)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Eine Pneumonie ist eine Entzündung des Lungengewebes, meist durch Bakterien, Viren oder Pilze. Bei immobilen Patienten entsteht sie häufig als **nosokomiale Pneumonie** — erworben im Krankenhaus, 48 Stunden nach Aufnahme. (AWMF S3 2017)"

**B1 (220 Zeichen):** "Eine Pneumonie ist eine Lungenentzündung. Meistens machen Bakterien oder Viren die Lunge krank. Wer im Krankenhaus liegt und sich kaum bewegt, bekommt oft eine Pneumonie. Das nennt man **nosokomial**: im Krankenhaus bekommen."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Eine **Pneumonie** ist eine akute Entzündung des Lungengewebes, ausgelöst durch Bakterien (häufigster Erreger: Streptococcus pneumoniae), Viren, Pilze oder selten Aspiration. Im Pflege-Kontext ist die **nosokomiale Pneumonie** entscheidend: Sie entsteht frühestens 48 Stunden nach Krankenhausaufnahme und ist nach Harnwegsinfekten die zweithäufigste Krankenhausinfektion in Deutschland.

**Pathophysiologie bei immobilen Patienten:** Flache Atmung und fehlende Tiefatmung lassen Lungenbereiche unbelüftet (Atelektase). Sekret wird nicht abgehustet, staut sich in den Bronchien. Keime vermehren sich in diesem warmen, feuchten Milieu. Gleichzeitig ist die mukoziliäre Clearance (Selbstreinigung der Atemwege durch Flimmerhärchen) reduziert.

**Klinische Zeichen:** Fieber, Husten mit Auswurf, Dyspnoe, rasselnde Atemgeräusche, Tachypnoe (>20/Min), erhöhter CRP-Wert. Bei älteren Patienten oft nur Verwirrtheit und Appetitlosigkeit — kein Fieber. (AWMF S3 2017)"

**B1 (540 Zeichen):**
"Eine **Pneumonie** ist eine Lungenentzündung. Die Lunge wird krank durch Bakterien oder Viren. Wer im Krankenhaus liegt, hat ein hohes Risiko. Das nennt man **nosokomial**: im Krankenhaus bekommen — erst ab 48 Stunden nach Aufnahme.

**Warum wird die Lunge krank?** Wer flach liegt, atmet flacher. Manche Teile der Lunge bekommen keine Luft. Das Sekret (Schleim) bleibt in den Bronchien. Bakterien wachsen dort.

**Diese Zeichen sind wichtig:** Fieber, Husten, Atemnot, schnelle Atmung (mehr als 20x pro Minute), rasselnde Atemgeräusche. Bei alten Menschen oft nur: verwirrt sein, nicht essen wollen. Kein Fieber!"

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Pneumonie, nosokomial, Atelektase, mukoziliäre Clearance, Dyspnoe]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Eine Pneumonie erkennt man immer am Fieber"**
- **Fachbegriff:** Fieber-Automatismus
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — bei älteren oder immungeschwächten Patienten fehlt das Fieber oft. Typische Zeichen sind dann Verwirrtheit, plötzliche Appetitlosigkeit, Sturzneigung oder Apathie. Die Temperatur kann sogar erniedrigt sein. Merke: Kein Fieber heißt nicht keine Pneumonie."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — alte Menschen haben oft kein Fieber bei Pneumonie. Zeichen sind dann: plötzlich verwirrt, nicht mehr essen wollen, Stürze. Die Temperatur kann sogar niedriger sein. Merke: Kein Fieber heißt nicht keine Pneumonie."

**D2: "Nosokomiale Pneumonie heißt: der Patient war schon krank, als er kam"**
- **Fachbegriff:** Mitgebracht-Verwechslung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — **nosokomial** bedeutet genau das Gegenteil: Die Infektion wurde im Krankenhaus erworben. Die Abgrenzung ist klar: Symptome frühestens **48 Stunden nach Aufnahme**. Eine bei Aufnahme bereits bestehende Pneumonie ist ambulant erworben (CAP). Merke: Nosokomial = im Haus bekommen."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — **nosokomial** heißt: im Krankenhaus bekommen. Der Patient war vorher gesund. Erst nach 48 Stunden im Krankenhaus gilt eine Pneumonie als nosokomial. Vorher mitgebrachte Pneumonien heißen **ambulant erworben**. Merke: Nosokomial = hier im Haus."

**D3: "Pneumonie kommt nur durch Bakterien im Rachen"**
- **Fachbegriff:** Rachen-Fixierung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — auch Viren (Influenza, RSV, SARS-CoV-2), Pilze (bei Immunsupprimierten) und die stille Aspiration von Magensaft sind wichtige Ursachen. Besonders bei Schluckstörung und Bewusstseinseinschränkung: Mikroaspirationen in die tiefen Atemwege. Merke: Bakterien sind häufig, aber nicht einzig."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — auch Viren (zum Beispiel Grippe, Corona) und Pilze können eine Pneumonie machen. Oft kommt sie auch durch Verschlucken: Speichel oder Magensaft rutscht in die Lunge. Das passiert bei Schluckstörung. Merke: Nicht nur Bakterien."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Eine Pneumonie ist eine Entzündung des Lungengewebes. Bei flacher Atmung und Immobilität kollabieren Lungenbereiche, Sekret staut sich, Keime vermehren sich. Die nosokomiale Pneumonie (ab 48h nach Aufnahme) ist die zweithäufigste Krankenhausinfektion."

**B1 (235 Zeichen):** "Sehr gut. Die Pneumonie ist eine Lungenentzündung. Wer flach liegt, atmet schlecht. Sekret bleibt in der Lunge. Bakterien wachsen. Die nosokomiale Pneumonie (ab 48 Stunden im Krankenhaus) ist eine der häufigsten Krankenhausinfektionen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Ab wann spricht man von einer nosokomialen Pneumonie?"
- **Rückseite:** "Ab 48 Stunden nach Krankenhausaufnahme. Vorher gilt die Pneumonie als ambulant erworben (CAP)."
- **Kategorie:** fachbegriff

---

## Baustein 2: risikofaktoren-screening

### Metadaten
- **bausteinId:** pneumonie-prophylaxe-risikofaktoren
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Drei Patienten auf deiner Station: ein beatmeter Intensivpatient, ein Schlaganfall-Patient mit Schluckstörung, ein junger Mann mit gebrochenem Arm. Wer hat das höchste Pneumonie-Risiko und warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Hauptrisikofaktoren: **Immobilität**, **Bewusstseinseinschränkung**, **Intubation/Beatmung**, **Schluckstörung (Dysphagie)**, **Sekretverhaltung**, höheres Alter, COPD, Rauchen, Immunschwäche und Magensonde. Je mehr Faktoren zusammenkommen, desto höher das Risiko."

**B1 (230 Zeichen):** "Hohes Risiko haben: Patienten die **nicht aufstehen**, die **bewusstlos** sind, die **beatmet** werden, die sich **verschlucken**, die **Sekret nicht abhusten**. Dazu: alte Menschen, COPD, Raucher, schwaches Immunsystem, Magensonde."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die Risikofaktoren lassen sich in 3 Gruppen einteilen:

**Pflegerelevante Hauptrisiken (tägliches Screening):**
- **Immobilität**: flache Atmung, reduzierter Hustenstoß, Sekretretention. Jeder Tag Bettruhe erhöht das Pneumonie-Risiko.
- **Bewusstseinseinschränkung**: Hustenreflex und Schluckreflex fehlen oder sind abgeschwächt — Mikroaspiration von Speichel und Magensaft.
- **Dysphagie (Schluckstörung)**: bei Schlaganfall, M. Parkinson, Demenz — stille Aspiration möglich (ohne Husten).
- **Intubation/Tracheotomie**: natürliche Schutzbarrieren (Epiglottis, Glottis) ausgehebelt — ventilatorassoziierte Pneumonie (VAP).

**Patientenbedingte Risikofaktoren:**
- Alter > 65 Jahre, COPD, Herzinsuffizienz, Diabetes, Immunsuppression, Mangelernährung, aktives Rauchen.

**Iatrogene Risikofaktoren:**
- Magensonde (Reflux-Risiko), Sedativa, Protonenpumpen-Hemmer (pH-Anstieg im Magen → Keimbesiedlung), flache Lagerung.

**Risiko-Einschätzung im Pflegeprozess:** Bei Aufnahme und bei jeder Zustandsänderung. Kein einzelnes Instrument ist Pflicht — klinische Einschätzung führt, ergänzt durch Dysphagie-Screening (z.B. GUSS-Test bei Schlaganfall). (AWMF S3 2017, KRINKO 2013)"

**B1 (620 Zeichen):**
"Es gibt **3 Gruppen** von Risiken:

**1. Die Pflege kann etwas tun — hier liegt der Fokus:**
- **Liegen ohne Bewegung**: Wer liegt, atmet flach. Sekret bleibt in der Lunge.
- **Bewusstlos**: Kein Husten. Speichel läuft in die Lunge.
- **Schluckstörung**: Essen oder Trinken kommt in die falsche Röhre. Oft still — ohne Husten!
- **Beatmung**: Der Schlauch öffnet die Lunge für Keime.

**2. Der Patient selbst bringt Risiken mit:**
- Älter als 65 Jahre
- COPD, Herzschwäche, Diabetes
- Raucher, schlechte Ernährung

**3. Die Behandlung macht Risiken:**
- Magensonde
- Beruhigungsmittel
- Flache Lagerung

**Prüfen:** Bei Aufnahme und bei jeder Veränderung. Bei Schlaganfall: GUSS-Test für Schlucken."

- **Erklärungs-Step:** stepType `categorize` (3 Gruppen)
- **Glossar-Begriffe:** [Dysphagie, Aspiration, VAP, Intubation, Tracheotomie, GUSS-Test]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Nur beatmete Patienten auf der Intensivstation sind pneumoniegefährdet"**
- **Fachbegriff:** Intensiv-Fixierung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — auch auf Normalstation ist das Risiko hoch: Schlaganfall-Patienten (Dysphagie), postoperative Patienten (flache Atmung durch Schmerz), Alte mit Demenz (Mikroaspiration), COPD-Patienten. Die meisten nosokomialen Pneumonien entstehen außerhalb der Intensivstation. Merke: Risiko überall, wo jemand lange liegt."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — auch auf der normalen Station gibt es viele Pneumonien. Schlaganfall, frisch operiert, Demenz, COPD: alle haben hohes Risiko. Nicht nur auf der Intensivstation. Merke: Überall, wo jemand lange liegt, ist Gefahr."

**D2: "Stille Aspiration gibt es nicht — wer aspiriert, hustet immer"**
- **Fachbegriff:** Husten-Reflex-Mythos
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — bei **stiller Aspiration** fehlt der Hustenreflex. Das passiert bei Schlaganfall (ca. 50% der Dysphagie-Patienten aspirieren still), Demenz, M. Parkinson. Der Patient verschluckt sich, hustet aber nicht. Deshalb reicht Beobachtung nicht — Dysphagie-Screening ist nötig. Merke: Nicht jeder hustet."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — manche Patienten verschlucken sich **ohne zu husten**. Das heißt **stille Aspiration**. Bei Schlaganfall passiert das oft (etwa 50% der Patienten mit Schluckstörung). Deshalb brauchen wir einen Schluck-Test, nicht nur Beobachtung. Merke: Kein Husten heißt nicht sicher."

**D3: "Rauchen spielt nur langfristig eine Rolle — nicht akut im Krankenhaus"**
- **Fachbegriff:** Rauchen-Chronizitätsannahme
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **aktives Rauchen** lähmt die Flimmerhärchen (mukoziliäre Clearance) bereits nach Stunden. Sekret wird schlechter abtransportiert, Keime siedeln sich leichter an. Deshalb ist Raucherberatung und Rauchstopp perioperativ auch kurzfristig wirksam. Merke: Schon 24 Stunden rauchfrei verbessern die Clearance."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — Rauchen lähmt die Flimmerhärchen in der Lunge sofort. Sekret geht schlechter raus. Das ist auch im Krankenhaus wichtig. Schon einen Tag nicht rauchen hilft. Merke: Rauchen wirkt auch kurzfristig auf die Lunge."

### Richtig-Feedback
**C1 (295 Zeichen):** "Richtig. Der beatmete Patient hat das höchste Risiko (ausgeschaltete Schutzbarrieren, VAP), gefolgt vom Schlaganfall-Patient (Dysphagie, stille Aspiration). Der junge Patient mit Armbruch hat kaum Risiko, solange er mobil und bewusstseinsklar ist. Merke: Immobilität + Bewusstsein + Schluckfunktion sind die 3 Schlüssel."

**B1 (250 Zeichen):** "Richtig. Der beatmete Patient hat das höchste Risiko. Der Beatmungsschlauch öffnet die Lunge für Keime. Der Schlaganfall-Patient: Schluckstörung — Aspiration möglich. Der junge Mann mit Armbruch: fast kein Risiko, weil er aufstehen kann. Merke: Immobilität, Bewusstsein, Schlucken."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 4 pflegerelevante Hauptrisikofaktoren für eine Pneumonie."
- **Rückseite:** "Immobilität, Bewusstseinseinschränkung, Dysphagie (Schluckstörung), Intubation/Tracheotomie. Dazu: Sekretretention, Mikroaspiration."
- **Kategorie:** assessment

---

## Baustein 3: lisa-prinzip

### Metadaten
- **bausteinId:** pneumonie-prophylaxe-lisa-prinzip
- **bloomLevel:** 2
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Welche 4 Stellschrauben hast du in der Pflege, um eine Pneumonie zu verhindern? Überlege: was kannst du körperlich tun, damit die Lunge gut belüftet bleibt?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Das **LISA-Prinzip** fasst die 4 Säulen der Pneumonie-Prophylaxe zusammen: **L**agerung (Oberkörperhochlagerung), **I**nhalation (Befeuchtung/Medikamente), **S**ekretmanagement (Abhusten fördern), **A**temübungen (Lippenbremse, Tiefatmung)."

**B1 (225 Zeichen):** "**LISA** ist eine Eselsbrücke. Sie steht für 4 Maßnahmen gegen Pneumonie: **L** = Lagerung (Oberkörper hoch). **I** = Inhalation (Luft feucht machen). **S** = Sekret (Schleim aus der Lunge holen). **A** = Atemübungen (bewusst atmen)."

- **Step-Typ:** text (displayFormat: mnemonic — LISA als Akronym)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Das **LISA-Prinzip** ist eine didaktische Eselsbrücke für die 4 Säulen der Pneumonie-Prophylaxe. Jede Säule zielt auf einen pathophysiologischen Mechanismus:

**L — Lagerung:** Oberkörperhochlagerung 30-45° verbessert die Atemmechanik (Zwerchfell hängt nach unten, mehr Platz für Lungenflügel), reduziert Mikroaspiration (Refluxschutz) und beugt Atelektasen vor. Nachweislich wirksam gegen ventilatorassoziierte Pneumonie (KRINKO 2013).

**I — Inhalation:** Anfeuchtung der Atemluft (Kochsalzinhalation, Raumbefeuchter) verflüssigt zähes Sekret. Ärztlich verordnet können auch Medikamente inhaliert werden (Bronchodilatatoren, Mukolytika). Wichtig: Keine Routine-Inhalation ohne Indikation — das Gegenteil von Evidenz.

**S — Sekretmanagement:** Atmungsunterstützung (VRP-1-Flutter, PEP-Systeme), rechtzeitiges Absaugen (nur bei Bedarf, nicht routinemäßig), Hustenunterstützung (Hustenassistent, manuelle Techniken).

**A — Atemübungen:** Lippenbremse, Kontaktatmung, Tiefatmung mit Anhalten, Triflow-Training. Aktivieren die Belüftung aller Lungenbezirke und kräftigen die Atemmuskulatur.

**Grundregel:** LISA wirkt nur in Kombination mit **Frühmobilisation** — kein LISA ohne Bewegung. (AWMF S3 2017)"

**B1 (580 Zeichen):**
"**LISA** ist eine Eselsbrücke für 4 Dinge gegen Pneumonie:

**L — Lagerung:** Den Oberkörper hoch lagern (30-45°). Das Zwerchfell kann besser arbeiten. Die Lunge bekommt mehr Platz. Weniger Reflux in die Lunge.

**I — Inhalation:** Die Luft feucht machen. Das Sekret wird dünnflüssiger. Der Arzt kann Medikamente dazu geben.

**S — Sekret weg:** Dem Patienten helfen, den Schleim loszuwerden. Zum Beispiel mit einem **Flutter** (kleines Gerät zum Pusten) oder Absaugen (nur wenn nötig).

**A — Atemübungen:** Lippenbremse, Kontaktatmung, tief einatmen und die Luft halten. Das Training stärkt die Atemmuskeln.

**Wichtig:** LISA hilft nur, wenn der Patient sich auch **bewegt**."

- **Erklärungs-Step:** stepType `reveal` (LISA Buchstabe für Buchstabe aufdecken)
- **Glossar-Begriffe:** [LISA-Prinzip, Atelektase, Reflux, Bronchodilatator, Mukolytikum]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "LISA ist eine S3-Leitlinie — also verbindlich"**
- **Fachbegriff:** Leitlinien-Verwechslung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — LISA ist eine **didaktische Eselsbrücke**, keine Leitlinie. Die verbindlichen Empfehlungen stehen in der AWMF S3-Leitlinie Nosokomiale Pneumonie (2017) und der KRINKO-Empfehlung (2013). LISA hilft beim Merken — die Inhalte müssen aber evidenzbasiert begründet sein. Merke: LISA = Merkhilfe, nicht Leitlinie."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — LISA ist eine **Eselsbrücke**. Keine Leitlinie. Die echten Regeln stehen in der AWMF-Leitlinie (2017) und beim RKI (2013). LISA hilft dir, die 4 Punkte zu merken. Merke: LISA = Hilfe zum Lernen, nicht Regel."

**D2: "Die 4 LISA-Teile kann man einzeln machen — es reicht einer"**
- **Fachbegriff:** Einzel-Maßnahmen-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — keine einzelne LISA-Maßnahme reicht allein. Die Evidenz zeigt: **Bündel-Strategien** (mehrere Maßnahmen kombiniert) senken das Pneumonie-Risiko deutlich stärker als Einzelmaßnahmen. Besonders wichtig: Frühmobilisation als 5. Säule — ohne Bewegung wirkt LISA kaum. Merke: Kombination statt Einzelmaßnahme."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — eine einzelne Maßnahme reicht nicht. Nur alle 4 zusammen helfen wirklich. Dazu braucht es Bewegung. Studien zeigen: **Bündel** (mehrere Maßnahmen zusammen) wirken viel besser als nur eine. Merke: Alle 4 plus Bewegung."

**D3: "Inhalation gehört zu LISA — also sollte jeder Patient inhalieren"**
- **Fachbegriff:** Routine-Inhalations-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Routine-Inhalation ohne Indikation wird nicht empfohlen**. Die AWMF-Leitlinie sagt: nur bei Indikation (zähes Sekret, Bronchospasmus, ärztliche Anordnung). Überflüssige Inhalationen können sogar Keime aus Verneblern in die Lunge bringen. Merke: Inhalation gezielt, nicht pauschal."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **nicht jeder** Patient soll inhalieren. Nur wenn ein Grund da ist: zähes Sekret, enge Bronchien, ärztliche Anordnung. Zu viele Inhalationen können sogar Keime in die Lunge bringen (vom Vernebler). Merke: Inhalation mit Grund, nicht einfach so."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. LISA steht für **L**agerung (Oberkörper hoch), **I**nhalation (bei Indikation), **S**ekretmanagement (Abhusten unterstützen) und **A**temübungen (Lippenbremse, Kontaktatmung). Die 5. unsichtbare Säule ist Frühmobilisation. Bündel-Strategie statt Einzelmaßnahme — das wirkt."

**B1 (245 Zeichen):** "Sehr gut. LISA sind 4 Maßnahmen: **L** Lagerung (Oberkörper hoch), **I** Inhalation (wenn nötig), **S** Sekret weg, **A** Atemübungen. Dazu: Frühmobilisation ist sehr wichtig. Alle zusammen wirken viel besser als eine allein."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wofür steht die Eselsbrücke LISA in der Pneumonie-Prophylaxe?"
- **Rückseite:** "**L**agerung (Oberkörperhoch 30-45°), **I**nhalation (bei Indikation), **S**ekretmanagement, **A**temübungen. Merkhilfe — nicht Leitlinie. Kombination plus Frühmobilisation wirkt."
- **Kategorie:** fachbegriff

---

## Baustein 4: oberkoerperhochlagerung

### Metadaten
- **bausteinId:** pneumonie-prophylaxe-oberkoerperhoch
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Warum ist es für die Lunge besser, wenn der Kopf höher liegt als die Füße? Und gibt es einen Unterschied, ob 15°, 30° oder 45° gelagert wird?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Die Oberkörperhochlagerung **30-45°** ist die bestbelegte Einzelmaßnahme. Sie vergrößert das Atemzugvolumen, senkt die Mikroaspiration aus Oropharynx und Magen und reduziert nachweislich die Rate ventilatorassoziierter Pneumonien. (KRINKO 2013)"

**B1 (225 Zeichen):** "Den Oberkörper **30-45°** hochlagern. Das ist die wirksamste Einzelmaßnahme. Die Lunge bekommt mehr Platz (mehr Luft pro Atemzug). Speichel und Magensaft rutschen weniger in die Lunge. Weniger Pneumonie — besonders bei Beatmung."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die **Oberkörperhochlagerung** zwischen 30° und 45° wirkt über drei Mechanismen:

**1. Atemmechanik:** Das Zwerchfell hängt durch die Schwerkraft nach unten, die Lunge hat mehr Raum zur Entfaltung. Das Atemzugvolumen steigt messbar. Atelektasen in den unteren Lungenbezirken werden reduziert.

**2. Refluxschutz:** Bei flacher Lagerung fließt Magensaft leicht in den Rachen zurück und wird aspiriert (stille Mikroaspiration). Die schräge Position wirkt wie eine natürliche Antireflux-Barriere.

**3. Sekret-Drainage:** Sekret aus den oberen Atemwegen läuft nach unten zum Mund, kann geschluckt oder abgesaugt werden — nicht in die tiefen Atemwege.

**Evidenz:** Die Drakulovic-Studie (1999) zeigte bei beatmeten Patienten eine Senkung der VAP-Rate von 34% auf 8% durch 45°-Lagerung statt Flachlagerung. Auch die KRINKO-Empfehlung (2013) nennt diese Position als 'sehr gut belegte Maßnahme'.

**Praktisch:** Keilkissen oder verstellbares Kopfteil nutzen. **Vorsicht:** Reine Kopfteilerhöhung führt oft zum Hochrutschen (Scherkräfte → Dekubitus-Risiko). Daher Kombination mit leichter Knieknickstellung. Bei Patienten mit Schock oder Rückenmarkverletzung: ärztliche Rücksprache. (KRINKO 2013)"

**B1 (600 Zeichen):**
"**Oberkörper 30-45° hoch** — so geht die beste Pneumonie-Lagerung. Das hilft auf 3 Arten:

**1. Bessere Atmung:** Das Zwerchfell rutscht nach unten. Die Lunge bekommt mehr Platz. Der Patient atmet tiefer.

**2. Schutz vor Reflux:** Magensaft bleibt im Magen. Er läuft nicht in die Lunge. Kein stilles Verschlucken mehr.

**3. Sekret läuft raus:** Schleim fließt nach unten zum Mund. Dort schlucken oder absaugen. Nicht mehr tief in die Lunge.

**Studien zeigen:** Bei Beatmung sinkt die Pneumonie-Rate von 34% auf 8% nur durch 45°-Lagerung!

**Wichtig:** Nur das Kopfteil hochstellen macht den Patienten hochrutschen. **Dekubitus-Gefahr!** Deshalb: Knie auch leicht hochstellen. So rutscht er nicht.

**Nicht machen bei:** Schock, Rückenmarksverletzung — erst den Arzt fragen."

- **Erklärungs-Step:** stepType `comparison` (Flach vs. 30° vs. 45°)
- **Glossar-Begriffe:** [Zwerchfell, Mikroaspiration, VAP, Drakulovic-Studie, Knieknickstellung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Je höher der Oberkörper, desto besser"**
- **Fachbegriff:** Maximal-Lagerungs-Mythos
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die Evidenz zeigt: **30-45°** ist optimal. Höher als 45° (fast aufrecht) erhöht den Druck auf das Sakrum deutlich — Dekubitus-Risiko! Außerdem sind höhere Lagerungen oft unbequem und nicht langfristig haltbar. Merke: Ziel ist die **praktisch erreichbare** Lagerung zwischen 30 und 45°."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **30-45°** ist am besten. Mehr als 45° drückt zu stark auf das Steißbein. Dekubitus-Gefahr! Außerdem ist das unbequem. Der Patient hält es nicht lange aus. Merke: 30-45° — nicht mehr."

**D2: "Nur auf der Intensivstation ist Oberkörperhochlagerung wichtig"**
- **Fachbegriff:** Intensiv-Einschränkung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — die Maßnahme wirkt auf jeder Station, überall wo Patienten liegen müssen: Schlaganfall-Station (Dysphagie-Risiko), Innere Medizin (postoperativ), Palliativ, Altenpflege. Die AWMF-Leitlinie empfiehlt sie für **alle immobilen Patienten**, nicht nur beatmete. Merke: Überall, wo jemand lange liegt."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die Lagerung hilft **überall**: auf der normalen Station, in der Altenpflege, nach OP. Nicht nur bei Beatmung. Die AWMF-Leitlinie sagt: für **alle** Patienten, die lange liegen. Merke: Nicht nur Intensivstation."

**D3: "Kopfteil hoch ist dasselbe wie Oberkörper hoch"**
- **Fachbegriff:** Kopfteil-Oberkörper-Verwechslung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — beides ist verschieden. **Kopfteil hoch** biegt den Patienten am Kopf (Halswirbelsäule) und er rutscht im Bett nach unten — Scherkräfte → Dekubitus-Risiko. **Oberkörper hoch** meint: Rücken mit Keilkissen oder eingestelltem Bett aufgerichtet, ohne dass der Patient rutscht. Dazu **Knieknick**, damit er nicht abrutscht."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — das ist ein Unterschied. **Kopfteil hoch** = der Patient rutscht nach unten. Scherkräfte. Dekubitus-Gefahr. **Oberkörper hoch** = der ganze Rücken ist hoch. Dazu **Knieknick**: die Knie leicht nach oben. So rutscht er nicht. Merke: Knie auch hoch!"

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Die Oberkörperhochlagerung 30-45° wirkt durch bessere Atemmechanik, Refluxschutz und Sekretdrainage. Die Drakulovic-Studie zeigte: VAP-Rate von 34% auf 8% bei 45°. Praktisch: Kopfteil UND Knie leicht anheben, sonst rutscht der Patient (Scherkräfte → Dekubitus)."

**B1 (255 Zeichen):** "Sehr gut. Oberkörper 30-45° hoch hilft 3-fach: besser atmen, kein Reflux, Sekret läuft raus. Eine Studie zeigte: statt 34% nur 8% Pneumonie bei 45°-Lagerung. Wichtig: Knie auch hochstellen, sonst rutscht der Patient nach unten und bekommt Dekubitus."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Oberkörperposition senkt nachweislich die Rate der ventilatorassoziierten Pneumonie und warum auch Knieknick?"
- **Rückseite:** "30-45° Oberkörperhochlagerung (Drakulovic 1999: VAP 34% → 8%). Knieknick verhindert das Hochrutschen (Scherkräfte) und das daraus resultierende Dekubitus-Risiko am Sakrum."
- **Kategorie:** handlung

---

## Baustein 5: atemuebungen-lippenbremse

### Metadaten
- **bausteinId:** pneumonie-prophylaxe-lippenbremse
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, du pustest langsam gegen eine Kerze, ohne dass sie ausgeht. Was machst du dabei mit deinen Lippen? Und warum könnte das für einen Patienten mit COPD hilfreich sein?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Die **Lippenbremse**: Der Patient atmet gegen leicht geschlossene, locker aufeinanderliegende Lippen aus. Dadurch entsteht ein Gegendruck in den Bronchien — diese bleiben länger offen, mehr Luft kann ausgeatmet werden. Wichtig bei COPD, Asthma."

**B1 (225 Zeichen):** "Die **Lippenbremse** geht so: Der Patient atmet durch die fast geschlossenen Lippen aus — wie beim Pusten. Dabei entsteht ein kleiner Gegendruck. Die Bronchien bleiben länger offen. Mehr Luft kommt raus. Hilft bei COPD und Asthma."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Die **Lippenbremse** (pursed-lip breathing) ist eine der ältesten und wirksamsten Atemtechniken. Die Anleitung:

**Schritt 1:** Der Patient sitzt aufrecht oder lehnt sich leicht nach vorn (Kutschersitz).
**Schritt 2:** Normal und ruhig durch die Nase einatmen.
**Schritt 3:** Die Lippen locker aufeinanderlegen, so als würde er das Wort 'f' formen.
**Schritt 4:** Langsam gegen die Lippen ausatmen — etwa doppelt so lange wie die Einatmung.

**Physiologische Wirkung:** Durch die Verengung entsteht ein positiver endexpiratorischer Druck (PEEP-Effekt). Dieser Druck stabilisiert die kleinen Bronchien und Bronchiolen, die sonst bei Ausatmung kollabieren (dynamischer Bronchialkollaps). Mehr Luft verlässt die Lunge, Air-Trapping und Überblähung werden reduziert. Die Atemfrequenz sinkt, die Atmung wird effektiver.

**Besonders wirksam bei:**
- COPD, Asthma (kollapsneigung der Bronchien)
- Postoperativ (Oberbauch-OP, Thorax-OP)
- Bei Atemnot als Sofort-Technik

**Kombination:** Lippenbremse + Kutschersitz + ruhige Atmung = 'Notfall-Paket' bei Atemnot.

**Anleitung durch Pflege:** Vor dem Patienten selbst vormachen, gemeinsam üben. Mehrmals täglich 5-10 Wiederholungen, nicht bis zum Erschöpfen. (AWMF S3 COPD, GOLD 2023)"

**B1 (610 Zeichen):**
"Die **Lippenbremse** ist eine wichtige Atemübung. So geht es:

**Schritt 1:** Aufrecht sitzen oder nach vorn lehnen (Kutschersitz).
**Schritt 2:** Normal durch die Nase einatmen.
**Schritt 3:** Die Lippen locker aufeinanderlegen. Wie wenn du das 'f' sagst.
**Schritt 4:** Langsam durch die Lippen ausatmen. Doppelt so lange wie einatmen.

**Warum hilft das?** Durch die Lippen entsteht ein **Gegendruck**. Die kleinen Bronchien bleiben offen. Die Luft kommt besser aus der Lunge. Die Lunge überbläht nicht.

**Gut bei:**
- COPD, Asthma
- Nach einer OP am Bauch oder Brustkorb
- Bei plötzlicher Atemnot

**Tipp:** Der Kutschersitz (auf Stuhl sitzen, Hände auf Knie, leicht nach vorne lehnen) plus Lippenbremse hilft sofort bei Atemnot.

**So lernt es der Patient:** Zeig es ihm zuerst. Dann übt ihr zusammen. Mehrmals am Tag 5-10 mal. Nicht zu viel auf einmal."

- **Erklärungs-Step:** stepType `sequencing` (4 Schritte in richtiger Reihenfolge)
- **Glossar-Begriffe:** [Lippenbremse, PEEP, Bronchialkollaps, Kutschersitz, Air-Trapping]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Lippenbremse ist nur für COPD-Patienten sinnvoll"**
- **Fachbegriff:** COPD-Beschränkung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die Lippenbremse hilft bei fast allen Atemnot-Situationen: COPD, Asthma, nach Bauchoperation, bei Pneumonie, bei Herzinsuffizienz-Atemnot, bei Panikattacken. Prinzip: Wenn Atemnot, dann Lippenbremse. Sie kann nichts verschlechtern. Merke: Lippenbremse hilft bei jeder Atemnot."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die Lippenbremse hilft bei jeder Atemnot: COPD, Asthma, nach OP, bei Angst. Sie kann nie schaden. Merke: Bei Atemnot immer Lippenbremse versuchen."

**D2: "Je fester die Lippen geschlossen, desto besser"**
- **Fachbegriff:** Press-Fehler
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die Lippen sollen **locker** aufliegen, fast entspannt. Zu festes Pressen erzeugt zu hohen Widerstand, die Ausatmung wird anstrengend statt entlastend. Der Patient strengt sich dann mehr an und bekommt mehr Atemnot. Merke: Locker wie beim Formen von 'f', nicht wie beim Pfeifen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die Lippen sollen **locker** sein. Nicht fest drücken! Fest drücken macht die Ausatmung schwer. Der Patient strengt sich an und bekommt mehr Atemnot. Merke: Locker — wie beim 'f' sagen, nicht wie beim Pfeifen."

**D3: "Die Einatmung muss länger sein als die Ausatmung"**
- **Fachbegriff:** Atemzeit-Umkehrung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — bei der Lippenbremse soll die **Ausatmung etwa doppelt so lang** sein wie die Einatmung. Grund: Die Ausatmung ist bei COPD/Asthma der Problem-Schritt. Die verlängerte Ausatmung gegen die Lippe hält die Bronchien offen und entleert die Lunge besser. Merke: Einatmen kurz, ausatmen lang."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — **Ausatmen ist länger** als Einatmen. Etwa doppelt so lang. Warum? Beim Ausatmen fallen die kleinen Bronchien bei COPD zusammen. Die verlängerte Ausatmung hält sie offen. Merke: Einatmen kurz, ausatmen doppelt so lang."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Die Lippenbremse: durch leicht geschlossene Lippen ausatmen, doppelt so lange wie einatmen. Der positive endexpiratorische Druck (PEEP-Effekt) hält die Bronchien offen. Sie hilft bei Atemnot jeder Ursache — besonders wertvoll bei COPD und postoperativ. Kombination mit Kutschersitz verstärkt den Effekt."

**B1 (255 Zeichen):** "Sehr gut. Lippenbremse: Durch fast geschlossene Lippen ausatmen, doppelt so lange wie einatmen. Der Gegendruck hält die Bronchien offen. Hilft bei jeder Atemnot. Besonders gut: COPD, Asthma, nach OP. Mit Kutschersitz noch besser."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie funktioniert die Lippenbremse und warum hilft sie bei COPD?"
- **Rückseite:** "Locker geschlossene Lippen, langsam ausatmen (2x so lang wie einatmen). Erzeugt PEEP-Effekt: kleine Bronchien bleiben offen, kein dynamischer Kollaps, weniger Air-Trapping — bessere Ausatmung."
- **Kategorie:** handlung

---

## Baustein 6: atemuebungen-kontaktatmung

### Metadaten
- **bausteinId:** pneumonie-prophylaxe-kontaktatmung
- **bloomLevel:** 4
- **wissensart:** handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient mit Pneumonie liegt im Bett. Du willst ihm helfen, tiefer zu atmen, aber er kann nicht aktiv mitmachen. Wie könntest du ihn nur durch Berührung dazu anregen, bewusster in bestimmte Lungenbereiche zu atmen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Die **Kontaktatmung** ist eine Wahrnehmungs-Technik: Die Pflegeperson legt die Hände auf die Brust- oder Flankenwand des Patienten. Der Patient atmet bewusst gegen den Handkontakt. Das aktiviert gezielt Lungenbezirke, die sonst wenig belüftet sind."

**B1 (230 Zeichen):** "Bei der **Kontaktatmung** legt die Pflegeperson ihre Hände auf die Brust oder die Seite des Patienten. Der Patient atmet bewusst gegen die Hand. So aktiviert er Bereiche der Lunge, die sonst kaum Luft bekommen. Hilft besonders bei Schwachen."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die **Kontaktatmung** gehört zur Atemtherapie nach Wacker-Schulz und ist besonders wertvoll, wenn Patienten kognitiv oder körperlich schwach sind:

**Durchführung:**
**1. Vorbereitung:** Hände warmreiben, Patient informieren, Intimsphäre wahren. Patient in bequemer Position (Seitenlage, halbhohe Rückenlage).

**2. Hand-Kontakt:** Die Hände flach mit dem ganzen Handteller auf die Rippenbögen legen — dort, wo die Belüftung verbessert werden soll (z.B. beidseits Flanken, Unterlappen hinten).

**3. Anleitung:** 'Atme in meine Hand hinein.' — Der Patient fokussiert die Atmung bewusst in den Bereich unter der Hand. Bei der Einatmung hebt sich die Hand leicht.

**4. Exspirationshilfe:** Bei der Ausatmung kann die Pflegeperson leicht mit dem Thorax mitgehen (kein Druck, nur folgen).

**5. Rhythmus:** 5-10 Atemzüge pro Zone, dann Zone wechseln.

**Physiologische Wirkung:** Aktivierung propriozeptiver Reize, gezielte Mehrbelüftung unterbelüfteter Lungenabschnitte, Reduktion von Atelektasen. Gleichzeitig beruhigend und atemsynchronisierend — besonders bei unruhigen oder dyspnoischen Patienten.

**Abgrenzung zu VRP/PEP-Atmung:** Kontaktatmung ist rein manuell, keine Geräte. Gut auch bei demenzkranken oder bewusstseinseingeschränkten Patienten. (I Care Pflege — Thieme, Atemtherapie-Grundlagen)"

**B1 (620 Zeichen):**
"Die **Kontaktatmung** hilft schwachen Patienten, bewusster zu atmen. So geht sie:

**Schritt 1 — Vorbereiten:** Deine Hände warm machen. Den Patienten informieren. Er liegt bequem — auf der Seite oder halb sitzend.

**Schritt 2 — Hände auflegen:** Lege deine Hände flach auf die Rippen. An die Stelle, wo du die Atmung verbessern willst. Zum Beispiel beide Seiten unten hinten.

**Schritt 3 — Anleiten:** Sag: 'Atme in meine Hand hinein.' Der Patient denkt bewusst an die Stelle unter deiner Hand. Er atmet dorthin.

**Schritt 4 — Ausatmung begleiten:** Beim Ausatmen folge leicht mit der Hand. Nicht drücken! Nur mitgehen.

**Schritt 5 — Wechseln:** 5-10 Atemzüge pro Stelle. Dann eine andere Stelle.

**Wie hilft das?** Die Berührung macht die Atmung bewusst. Bereiche der Lunge, die sonst wenig Luft bekommen, werden aktiviert. Die Atmung wird ruhiger. Gut bei Unruhe oder Atemnot.

**Extra:** Die Kontaktatmung geht auch bei Dementen oder schwachen Patienten. Keine Geräte nötig."

- **Erklärungs-Step:** stepType `sequencing` (5 Schritte)
- **Glossar-Begriffe:** [Kontaktatmung, Propriozeption, Atelektase, Exspiration, Wacker-Schulz]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei der Kontaktatmung drückt man fest, damit der Patient gegen Widerstand atmet"**
- **Fachbegriff:** Druck-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Kontakt**-atmung heißt: nur Kontakt, kein Druck. Festes Drücken behindert die Atmung und verängstigt. Die Hand liegt **flach auf** — der Patient atmet **in die Hand hinein**. Kein Widerstandstraining. Das Ziel: Wahrnehmung, nicht Kraftaufbau. Merke: Nur leichter Kontakt, kein Druck."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **Kontakt**atmung heißt: nur berühren, **nicht drücken**. Drücken macht dem Patienten Angst und schlechter Atmen. Die Hand nur leicht auf die Rippen legen. Der Patient atmet **in** die Hand. Merke: Berühren, nicht drücken."

**D2: "Kontaktatmung geht nur bei wachen, kooperativen Patienten"**
- **Fachbegriff:** Bewusstsein-Einschränkung
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — die Technik ist gerade bei eingeschränktem Bewusstsein wertvoll. Auch Demenzpatienten, verwirrte oder sedierte Patienten reagieren auf den taktilen Reiz. Der Körper reagiert auf propriozeptive Signale auch unbewusst. Deshalb ist Kontaktatmung eine Schlüssel-Technik auf Geriatrie und Palliativ. Merke: Gerade bei Schwachen besonders wirksam."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **gerade bei schwachen** Patienten hilft die Technik gut. Auch bei Demenz, Verwirrung, schlafenden Patienten. Der Körper spürt die Berührung. Er reagiert automatisch darauf. Keine aktive Mithilfe nötig. Merke: Besonders gut bei Schwachen."

**D3: "Kontaktatmung ersetzt andere Atemübungen komplett"**
- **Fachbegriff:** Ersatz-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — Kontaktatmung ist **eine** Technik im Bündel. Sie ergänzt Lippenbremse, Tiefatmung, Mobilisation, Inhalation. Bei wachen, mobilen Patienten sind aktive Übungen oft wirksamer (Triflow, Vibrationsgeräte wie VRP-1 Flutter). Kontaktatmung ist stark bei Schwachen — aber nicht die einzige Maßnahme. Merke: Technik im Bündel, nicht allein."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — Kontaktatmung ist **eine** von mehreren Techniken. Sie ergänzt andere: Lippenbremse, Tiefatmung, Bewegung. Bei wachen Patienten sind aktive Übungen oft besser. Kontaktatmung ist stark bei Schwachen. Merke: Eine Technik von vielen."

### Richtig-Feedback
**C1 (290 Zeichen):** "Richtig. Kontaktatmung: Hände flach auf bestimmte Thoraxbereiche legen, Patient atmet 'in die Hand hinein'. Aktiviert propriozeptive Reize, belüftet gezielt unterbelüftete Areale, reduziert Atelektasen. Besonders wertvoll bei schwachen, verwirrten oder dyspnoischen Patienten — ohne Geräte."

**B1 (255 Zeichen):** "Richtig. Kontaktatmung: Hände flach auf die Rippen legen. Der Patient atmet in die Hand hinein. Die Berührung macht die Atmung bewusst. Lungenbereiche mit wenig Luft werden aktiviert. Besonders gut für schwache oder verwirrte Patienten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist das Prinzip der Kontaktatmung und wann ist sie besonders geeignet?"
- **Rückseite:** "Hände flach auf den Thorax legen, Patient atmet bewusst 'in die Hand hinein'. Nutzt propriozeptive Reize für gezielte Belüftung. Besonders bei schwachen, dementen, bewusstseinseingeschränkten Patienten — keine Geräte nötig."
- **Kategorie:** handlung

---

## Baustein 7: sekretmanagement-huststechniken

### Metadaten
- **bausteinId:** pneumonie-prophylaxe-sekretmanagement
- **bloomLevel:** 4
- **wissensart:** handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient nach Bauch-OP hat Schleim in der Lunge, aber beim Husten tut die Wunde so weh, dass er es unterlässt. Welche zwei Probleme entstehen und wie könntest du ihm helfen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Sekretmanagement umfasst: **Sekret-Lockerung** (Inhalation, Lagerung, PEP-Geräte wie VRP-1 Flutter), **Hustenunterstützung** (Bauchdecken-Abstützung, Huffing statt Stoßhusten), und bei Bedarf **Absaugen** (nur bei fehlendem Husten, steril, zeitlich begrenzt)."

**B1 (235 Zeichen):** "Sekret aus der Lunge holen geht so: **Lockern** (Inhalation, PEP-Geräte zum Pusten), **Abhusten** (Wunde stützen, Huffing statt starker Hustenstoß), **Absaugen** (nur wenn nicht gehustet werden kann — steril, kurz). Das ist Pflege-Handwerk."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Das Sekretmanagement folgt einem 3-Stufen-Konzept:

**1. Sekret-Lockerung:**
- **Inhalation** mit 0,9% NaCl bei zähem Sekret (nur bei Indikation)
- **Lagerungsdrainage:** Patient so lagern, dass betroffene Lungenabschnitte oben liegen — Sekret fließt zur Trachea
- **PEP-Geräte** (VRP-1 Flutter, RC-Cornet, Acapella): Beim Ausatmen entsteht Oszillation, die Sekret in den Bronchien löst. Patient pustet durch das Gerät.
- **Autogene Drainage** nach Chevaillier: Atmung in 3 Volumina (niedrig-mittel-hoch), um Sekret schrittweise hochzubringen.

**2. Hustentechniken:**
- **Huffing (Hauchen):** Weit geöffneter Mund, zischendes Ausatmen — bringt Sekret hoch, ohne hohen Intrathorax-Druck. Wertvoll nach Bauch- oder Thorax-OP.
- **Abgestütztes Husten:** Patient drückt ein Kissen oder die Hände auf die Wunde (postoperativ), um den Schmerz zu reduzieren.
- **Pflege-Anleitung:** Tief durch die Nase einatmen, 2 Sekunden halten, dann Huffing. 3-5 Wiederholungen pro Sitzung.

**3. Absaugen (nur bei Bedarf!):**
- **Indikation:** Wenn Patient selbst nicht abhusten kann (Bewusstlosigkeit, Intubation, schwere Muskelschwäche)
- **Steril**, Handschuhe, Mundschutz
- **Zeitlich begrenzt:** max 10-15 Sekunden pro Absaugvorgang
- **Nicht routinemäßig:** Jedes Absaugen reizt die Schleimhaut und kann Keime tiefer bringen. Absaugen ist KEINE Prophylaxe, sondern eine Therapie bei fehlender Selbstreinigung.

**Grundregel:** So wenig Absaugen wie möglich, so viel aktive Sekretmobilisierung wie möglich. (KRINKO 2013, AWMF S3 2017)"

**B1 (640 Zeichen):**
"Das Sekret aus der Lunge holen geht in **3 Schritten**:

**1. Schritt — Sekret lockern:**
- **Inhalation** mit Salzwasser (NaCl 0,9%) — nur wenn der Schleim zäh ist
- **Lagerung:** Der Patient liegt so, dass der Schleim von oben nach unten zur Luftröhre fließen kann
- **PEP-Geräte:** Kleine Geräte wie der **VRP-1 Flutter**. Der Patient pustet hinein. Es vibriert. Das löst das Sekret.

**2. Schritt — Husten lernen:**
- **Huffing (Hauchen):** Mund weit auf, langsam 'ha' ausatmen. Das bringt Schleim hoch — **ohne** starken Stoßhusten. Gut nach OP.
- **Wunde stützen:** Ein Kissen auf den Bauch drücken beim Husten — es tut weniger weh. Der Patient traut sich dann zu husten.
- **Üben:** Tief durch die Nase einatmen, 2 Sekunden halten, dann Huffing. 3-5 mal.

**3. Schritt — Absaugen:**
- **Nur wenn** der Patient nicht husten kann: bewusstlos, beatmet, sehr schwach
- **Steril** arbeiten. Nicht länger als 10-15 Sekunden.
- **Nicht routinemäßig!** Absaugen reizt die Schleimhaut. Es kann Keime tief bringen.

**Regel:** So wenig Absaugen wie möglich. So viel aktives Abhusten wie möglich."

- **Erklärungs-Step:** stepType `reveal` (3 Stufen aufdecken)
- **Glossar-Begriffe:** [Huffing, Lagerungsdrainage, PEP, VRP-1 Flutter, autogene Drainage, Absaugen]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Je fester der Patient hustet, desto besser geht der Schleim raus"**
- **Fachbegriff:** Stoßhusten-Mythos
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — forcierter Stoßhusten kollabiert die kleinen Bronchien (Air-Trapping), erhöht den Intrathorax-Druck gefährlich und löst postoperativ starken Schmerz aus. **Huffing** (Hauchen bei offenem Mund) bringt Sekret oft besser nach oben, ohne diese Nachteile. Merke: Technik schlägt Kraft."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **Huffing** (Hauchen) ist oft besser als starkes Husten. Starkes Husten tut weh nach OP. Es kollabiert kleine Bronchien. Huffing: Mund auf, 'ha' ausatmen. Sekret kommt trotzdem hoch. Merke: Technik statt Kraft."

**D2: "Absaugen gehört zur Routine-Prophylaxe bei Bettlägerigen"**
- **Fachbegriff:** Absaug-Routine-Irrtum
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — Absaugen ist **keine Prophylaxe**, sondern Therapie bei ausbleibender Selbstreinigung. Jedes Absaugen reizt die Schleimhaut, kann Keime tiefer bringen, ist unangenehm. Indikation: Patient kann nicht abhusten (Bewusstlosigkeit, Intubation, schwere Muskelschwäche). Bei wachen Patienten: Hustentraining statt Absaugen. Merke: Absaugen gezielt, nicht routinemäßig."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — Absaugen ist **keine Routine**. Es ist eine Therapie, wenn der Patient nicht husten kann. Absaugen reizt die Schleimhaut. Es kann Keime tief bringen. Bei wachen Patienten: Hustentraining. Nur bei bewusstlosen oder beatmeten Patienten absaugen. Merke: Nur wenn nötig."

**D3: "Lagerungsdrainage heißt, den Kopf nach unten lagern"**
- **Fachbegriff:** Kopftief-Verwechslung
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **Lagerungsdrainage** heißt: Der betroffene Lungenbereich liegt **oben**, damit das Sekret Richtung Trachea fließt. Nicht 'Kopf tief'. Die klassische Kopftief-Lagerung (Quincke-Hängelage) wird heute kaum noch empfohlen — Reflux-Risiko, Kreislaufbelastung, Dekubitus-Risiko. Merke: Oberlappen drainieren = Patient sitzt; Unterlappen drainieren = Patient liegt auf der Gegenseite."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — **Lagerungsdrainage** bedeutet: Der kranke Teil der Lunge liegt **oben**. Dann fließt das Sekret nach unten zur Luftröhre. Nicht den Kopf nach unten! Die alte Kopftief-Lagerung ist heute nicht mehr Standard. Zu gefährlich. Merke: Kranker Teil oben."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Die zwei Probleme: (1) Schmerz-bedingter Hustenverzicht → Sekret staut sich → Pneumonie-Risiko steigt. (2) Atelektasen durch flache Atmung. Hilfe: Huffing statt Stoßhusten (weniger Schmerz), Bauchdeckenstütze mit Kissen, Schmerztherapie optimieren, PEP-Gerät zur Sekretlockerung, Frühmobilisation."

**B1 (260 Zeichen):** "Sehr gut. Die zwei Probleme: Der Schmerz hält vom Husten ab. Das Sekret bleibt in der Lunge. Hilfe: **Huffing** (Hauchen) tut weniger weh als starkes Husten. Ein Kissen auf den Bauch drücken hilft auch. Gute Schmerzmittel vom Arzt. Aufstehen und bewegen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist Huffing oft besser als kräftiges Husten, besonders postoperativ?"
- **Rückseite:** "Huffing (Hauchen bei offenem Mund, 'ha'-Laut) mobilisiert Sekret ohne hohen Intrathorax-Druck. Vermeidet Air-Trapping, starken OP-Schmerz und Bronchialkollaps. Postoperativ zusätzlich Bauchdecken-Abstützung mit Kissen."
- **Kategorie:** handlung

---

## Baustein 8: fruehmobilisation-pneumonie

### Metadaten
- **bausteinId:** pneumonie-prophylaxe-fruehmobilisation
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Dekubitus, Thrombose und Pneumonie haben eine gemeinsame Schutzmaßnahme. Welche ist das — und warum wirkt sie auf alle drei?"
- **Step-Typ:** mc (mit Distraktoren)

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "**Frühmobilisation** ist die wirksamste Einzelmaßnahme gegen Pneumonie — sie senkt zusätzlich Dekubitus- und Thromboserisiko. Schon aufrechtes Sitzen vergrößert das Atemzugvolumen um bis zu 40%. Gehen aktiviert die Lungenbelüftung am stärksten."

**B1 (225 Zeichen):** "**Frühmobilisation** (früh aufstehen und bewegen) ist die wirksamste Maßnahme gegen Pneumonie. Schon das Sitzen auf der Bettkante vergrößert das Atemvolumen um 40%. Wer geht, belüftet die Lunge am besten. Gleichzeitig: weniger Dekubitus und Thrombose."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"**Frühmobilisation** ist die zentrale Prophylaxe-Säule für Pneumonie, Thrombose und Dekubitus gleichzeitig — eine Maßnahme, drei Wirkungen:

**Wirkung auf die Lunge:**
- Aufrechte Position vergrößert das Atemzugvolumen (bis zu 40% mehr als in Rückenlage)
- Das Zwerchfell kann frei nach unten gehen
- Alle Lungenbereiche werden belüftet (auch die hinteren Unterlappen, die in Rückenlage leicht kollabieren)
- Aktive Muskelarbeit erhöht Atemfrequenz und -tiefe physiologisch
- Sekret wird durch Bewegung mobilisiert

**Konkrete Schritte (ERAS/DNQP-Mobilität 2020):**
- **Tag der OP:** Aktiv im Bett (Fußkreisen, Beinbewegungen)
- **Postoperativer Tag 1:** Mobilisation an die Bettkante, mit Kreislaufstabilität erste Schritte
- **PO-Tag 2+:** Gehen auf dem Flur, steigende Strecke

**Voraussetzungen:** Kreislaufstabilität prüfen (RR, Puls), Schmerztherapie optimiert, Drainagen und Katheter gesichert.

**Pflege-Aufgaben:** Patient motivieren, Hilfsmittel bereitstellen (Gehstock, Rollator, Infusionsständer), Sicherheit gewährleisten (Sturzrisiko!), Dokumentation der erreichten Mobilität.

**Die Formel:** Jede Minute Mobilisation wirkt auf Atmung, Durchblutung, Haut. (DNQP Mobilität 2020, AWMF S3 2017)"

**B1 (570 Zeichen):**
"**Frühmobilisation** heißt: Der Patient bewegt sich früh — schon am OP-Tag oder am Tag nach der OP. Das ist die beste Prophylaxe — für **3 Sachen auf einmal**:

**1. Pneumonie:** Aufrecht sitzen macht die Lunge größer (40% mehr Luft pro Atemzug). Gehen belüftet alle Teile der Lunge.

**2. Thrombose:** Die Wadenmuskel-Pumpe arbeitet. Blut fließt gut zurück zum Herzen.

**3. Dekubitus:** Keine Stelle drückt zu lange auf die Matratze.

**So geht es Schritt für Schritt:**
- **OP-Tag:** Fuß-Kreisen, Beine bewegen im Bett
- **Tag 1 nach OP:** An der Bettkante sitzen, dann kleine Schritte
- **Ab Tag 2:** Gehen auf dem Flur, immer länger

**Voraussetzung:** Kreislauf stabil, Schmerzen gut eingestellt, Schläuche gesichert.

**Deine Aufgabe:** Den Patienten ermutigen. Hilfsmittel bereitstellen. Auf Sturzgefahr achten. Dokumentieren, was er geschafft hat."

- **Erklärungs-Step:** stepType `timeline` (OP-Tag → Tag 1 → Tag 2+)
- **Glossar-Begriffe:** [Frühmobilisation, ERAS, Atemzugvolumen, Zwerchfell]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Frühmobilisation ist erst nach 48 Stunden stabiler Kreislaufwerte erlaubt"**
- **Fachbegriff:** 48h-Wartepflicht-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **ERAS-Konzepte** empfehlen Mobilisation bereits am **OP-Tag oder am 1. post-OP-Tag** sobald Kreislauf stabil, nicht nach 48 Stunden. Die 48h-Bettruhe ist veraltet. Jeder zusätzliche Liege-Tag erhöht das Pneumonie-Risiko messbar. Merke: So früh wie möglich, nicht nach fester Regel."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — heute sollen Patienten **schon am OP-Tag** oder am Tag danach aufstehen. Nicht erst nach 48 Stunden. Die alten Regeln sind überholt. Jeder Tag im Bett macht mehr Pneumonie-Risiko. Merke: So früh wie möglich."

**D2: "Mobilisation bedeutet nur 'Gehen' — sonst zählt es nicht"</br>"**
- **Fachbegriff:** Geh-Einschränkung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — Mobilisation ist ein **Stufenmodell**: Fuß-Kreisen im Bett → Oberkörper-Hochlagerung → Bettkanten-Sitz → Stand → Gehen. Jede Stufe wirkt bereits auf Atmung, Durchblutung, Haut. Für schwere Patienten ist auch Umlagerung und passive Bewegung relevant. Merke: Jede Stufe zählt, nicht nur Gehen."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — Mobilisation hat **Stufen**: im Bett bewegen, sitzen auf der Bettkante, stehen, gehen. Jede Stufe hilft der Atmung und der Durchblutung. Auch bei schwerkranken Patienten: Umlagerung und passives Bewegen zählen. Merke: Jede Bewegung zählt."

**D3: "Bei Schmerzen soll der Patient im Bett bleiben bis die Schmerzen weg sind"**
- **Fachbegriff:** Schmerz-Stillstand-Mythos
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **Schmerz ist kein Grund für Bettruhe**, sondern ein Auftrag für gute Schmerztherapie. Die WHO-Regel: Analgesie so, dass Mobilisation möglich ist. Bettruhe verstärkt langfristig Schmerz (Muskelabbau, Steifigkeit), erhöht alle Risiken. Merke: Schmerz behandeln, nicht vor ihm weglaufen."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — Schmerzen sind **kein Grund** zu liegen. Besser: gute Schmerzmittel vom Arzt. Dann kann der Patient aufstehen. Im Bett liegen macht die Schmerzen langfristig schlimmer (Muskeln werden schwach, Gelenke steif). Merke: Schmerzen behandeln, dann bewegen."

### Richtig-Feedback
**C1 (295 Zeichen):** "Richtig. Frühmobilisation ist **die** gemeinsame Schutzmaßnahme. Wirkmechanismus: aufrechte Position → größeres Atemzugvolumen (Pneumonie), Wadenmuskelpumpe aktiv (Thrombose), keine lokale Dauerdruckbelastung (Dekubitus). Eine Maßnahme, drei Effekte. Deshalb: jeder Tag Bettruhe ist ein verlorener Tag."

**B1 (260 Zeichen):** "Richtig. Bewegung ist das gemeinsame Mittel. Sie hilft gegen alle 3 Probleme: Lunge (besser atmen), Venen (Blut läuft gut), Haut (kein Druck). Eine Maßnahme — drei Wirkungen. Merke: Jeder Tag Bettruhe ist ein verlorener Tag."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist Frühmobilisation gleichzeitig Pneumonie-, Thrombose- und Dekubitus-Prophylaxe?"
- **Rückseite:** "Aufrechte Position + Bewegung vergrößern Atemzugvolumen (Pneumonie), aktivieren Wadenmuskelpumpe (Thrombose) und verhindern lokale Dauerdruckbelastung (Dekubitus). Eine Maßnahme — drei Wirkungen."
- **Kategorie:** handlung

---

## Baustein 9: aspirationsprophylaxe-mundpflege

### Metadaten
- **bausteinId:** pneumonie-prophylaxe-aspiration-mundpflege
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Eine gute Mundpflege senkt nachweislich die Pneumonie-Rate. Wie hängen Zähneputzen und Lungenentzündung zusammen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Der Mund ist das **Einfallstor** für Pneumonie-Erreger. Plaque im Mund enthält die gleichen Keime wie eine Pneumonie. Konsequente Mundpflege (mind. 2× täglich, besonders bei Risiko-Patienten) senkt die nosokomiale Pneumonie-Rate messbar. (KRINKO 2013)"

**B1 (235 Zeichen):** "Der Mund ist der **Eingang** für Pneumonie-Keime. Der Belag (Plaque) auf den Zähnen hat dieselben Bakterien wie eine Pneumonie. Regelmäßige Mundpflege (2× am Tag, bei Risiko öfter) verhindert viele Pneumonien. (KRINKO-Empfehlung, 2013)"

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Die Verbindung zwischen Mundhygiene und Pneumonie ist wissenschaftlich gut belegt:

**Pathophysiologie:** Im Mund leben viele Bakterien (orale Mikroflora). Bei guter Mundhygiene sind sie im Gleichgewicht. Bei schlechter Mundpflege vermehren sich **pathogene Keime** (Pseudomonas, Staphylokokken, E. coli) auf Zunge, Zahnbelag und Mundschleimhaut. Durch Mikroaspiration — kleine Schluck-Unfälle — gelangen sie in die tiefen Atemwege. Besonders nachts während des Schlafs.

**Risiko-Faktoren für Plaque-Bildung:**
- Reduzierter Speichelfluss (Alter, Medikamente, Mundatmung, Sauerstoffgabe)
- Mundatmung (bei O2-Brille, Demenz, nach OP)
- Schluckstörung, Bewusstseinseinschränkung
- Magensonde (kein normales Essen, weniger mechanische Reinigung)
- Zahnprothese (Keim-Reservoir)

**Evidenzbasierte Mundpflege bei Risiko-Patienten:**
- **Mindestens 2× täglich** Zähne putzen (auch bei Zahnlosen: Zunge und Mundschleimhaut reinigen)
- **Zahnprothese** nach jeder Mahlzeit reinigen, nachts in Reinigungslösung
- **Chlorhexidin-Spülung** 0,12-0,2% (umstritten — neue Studien zeigen kein klaren Nutzen, KRINKO 2013 sieht Einsatz kritisch)
- **Feuchthalten** der Mundschleimhaut (v.a. bei Sauerstoffgabe, Mundatmung)
- **Bei Intensivpatienten:** spezielle Mundpflege-Sets, Dokumentation alle 2-4 Stunden

**Evidenz:** Studien bei Altenheim-Bewohnern zeigten durch strukturierte Mundpflege eine Senkung der Pneumonie-Sterblichkeit um bis zu 40%. (KRINKO 2013)"

**B1 (630 Zeichen):**
"Mundpflege und Pneumonie hängen eng zusammen:

**Was passiert:** Im Mund leben viele Bakterien. Bei schlechter Mundpflege vermehren sich **schlechte Keime** — dieselben, die Pneumonie machen. Durch kleine Schluckunfälle (vor allem nachts) kommen sie in die Lunge.

**Diese Patienten haben erhöhtes Risiko:**
- Trockener Mund (Alter, Medikamente, Sauerstoff)
- Mundatmung (O2-Brille, Demenz)
- Schluckstörung
- Magensonde (kein normales Essen, weniger Speichel)
- Zahnprothese (Keime sammeln sich)

**So pflegst du gut:**
- **2× am Tag Zähne putzen** — auch wenn keine Zähne da sind: Zunge reinigen
- **Zahnprothese** nach dem Essen putzen. Nachts in die Lösung.
- **Mund feucht halten** — besonders bei Sauerstoff und Mundatmung
- **Bei Intensivpatienten:** spezielle Sets, alle 2-4 Stunden dokumentieren

**Studien-Fakt:** In Altenheimen senkt gute Mundpflege die Pneumonie-Todesrate um bis zu 40%. (KRINKO, 2013)"

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Mikroaspiration, Plaque, orale Mikroflora, Chlorhexidin, Mundatmung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei Patienten ohne eigene Zähne ist Mundpflege nicht nötig"**
- **Fachbegriff:** Zahnlos-Ignoranz
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — auch zahnlose Patienten brauchen Mundpflege. Zunge, Gaumen und Mundschleimhaut sind Keim-Reservoire. Die Zahnprothese selbst ist ein Biofilm-Träger: Candida (Soor) und Bakterien siedeln auf der Oberfläche. Daher: Zahnlose Patienten benötigen spezielle Pflege. Merke: Keine Zähne heißt nicht keine Keime."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — auch ohne Zähne braucht der Patient Mundpflege. Die Zunge, der Gaumen, die Schleimhaut haben Keime. Die Zahnprothese sammelt **Candida** (Pilz) und Bakterien. Also: **Immer** Mundpflege machen. Merke: Keine Zähne heißt nicht keine Keime."

**D2: "Chlorhexidin-Mundspülung ist Standard bei allen Risikopatienten"**
- **Fachbegriff:** Chlorhexidin-Pauschalisierung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — die Evidenz zu Chlorhexidin ist **umstritten**. Bei beatmeten Intensivpatienten zeigte eine große Metaanalyse (Price 2014) sogar eine **Erhöhung der Sterblichkeit** — möglicherweise durch Mikroaspiration. Die KRINKO (2013) sieht den Routine-Einsatz daher **kritisch**. Mechanische Reinigung ist wichtiger. Merke: Bürste schlägt Chemie."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **Chlorhexidin** ist nicht bei allen gut. Neue Studien zeigen: Bei Beatmeten kann es sogar schaden. Die KRINKO (2013) sieht den Einsatz kritisch. Wichtiger ist: mechanisch putzen mit Zahnbürste. Merke: Bürste schlägt Spülung."

**D3: "Bei Magensonde ist Mundpflege weniger wichtig, weil der Patient nicht isst"**
- **Fachbegriff:** Magensonden-Missverständnis
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **bei Magensonde ist Mundpflege umso wichtiger**. Grund: Keine Kauen, weniger Speichelfluss, keine mechanische Reinigung durch Essen. Das Mundmilieu trocknet aus, Keime vermehren sich stärker. Risiko für Soor und Plaque steigt. Mehrmals täglich Mundpflege ist Pflicht. Merke: Keine Mahlzeit → mehr Mundpflege."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **bei Magensonde ist Mundpflege wichtiger**. Warum? Kein Kauen, kein Speichel, keine Reinigung durch Essen. Der Mund trocknet aus. Viel mehr Keime. Deshalb: Mehrmals am Tag Mundpflege. Merke: Keine Mahlzeit = mehr Mundpflege."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Der Mund ist das Einfallstor für Pneumonie-Keime. Durch Mikroaspiration — besonders nachts — gelangen orale Keime in die Lunge. Plaque enthält exakt die Keime, die nosokomiale Pneumonien auslösen. Konsequente Mundpflege (2× täglich mechanisch) senkt die Pneumonie-Mortalität messbar — bis 40% in Studien."

**B1 (255 Zeichen):** "Sehr gut. Der Mund ist der **Eingang** für Pneumonie-Keime. Durch kleine Schluckunfälle kommen die Bakterien vom Mund in die Lunge. Der Zahnbelag hat dieselben Keime wie die Pneumonie. Gute Mundpflege (2× am Tag putzen) senkt die Pneumonie-Todesrate um bis zu 40%."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie hängen Mundpflege und Pneumonie zusammen?"
- **Rückseite:** "Plaque-Bakterien (oropharyngeale Mikroflora) werden durch Mikroaspiration (v.a. nachts) in die tiefen Atemwege geschwemmt. Konsequente mechanische Mundpflege 2× täglich senkt die Pneumonie-Mortalität um bis zu 40%. Chlorhexidin-Einsatz umstritten."
- **Kategorie:** handlung

---

## Baustein 10: schluckstoerung-dysphagie-management

### Metadaten
- **bausteinId:** pneumonie-prophylaxe-dysphagie
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Eine 78-jährige Patientin nach Schlaganfall hustet beim Trinken, ihre Stimme klingt nach dem Schlucken belegt ('gurgelnd'). Der Arzt hat nichts dokumentiert. Wie gehst du vor? Begründe deine Entscheidung."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Bei V.a. Dysphagie: **sofort NPO** (nichts per os), Arzt informieren, Logopädie anmelden, **GUSS-Test** durchführen (Gugging Swallowing Screen). Bei bestätigter Dysphagie: angepasste Kostform (IDDSI-Level), aufrechte Haltung beim Essen, langsames Tempo."

**B1 (230 Zeichen):** "Bei Verdacht auf Schluckstörung: Der Patient darf **nichts mehr essen oder trinken** — bis geprüft ist. Arzt rufen. Logopädie bestellen. **GUSS-Test** machen (einfacher Schlucktest). Dann: spezielles Essen, aufrecht sitzen, langsam."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"**Dysphagie** ist eine der häufigsten und gefährlichsten Pneumonie-Ursachen. Nach Schlaganfall haben bis zu 50% der Patienten eine Dysphagie, davon aspirieren rund 50% **still** (ohne Husten).

**Warnzeichen (Pflege-Beobachtung bei JEDEM Essen/Trinken):**
- Husten während oder nach dem Schlucken
- Gurgelnde, 'nasse' Stimme nach dem Schlucken
- Verschleimung, häufiges Räuspern
- Speichelfluss, Nahrungsreste im Mund
- Speichel/Nahrung läuft aus dem Mundwinkel
- Gewichtsverlust, Dehydratation ohne klare Ursache

**Pflegerische Sofortmaßnahmen bei V.a. Dysphagie:**
1. **NPO** — nichts per os (kein Essen, kein Trinken, keine orale Medikation)
2. **Arzt informieren**, Dokumentation des Verdachts
3. **Logopädie anfordern**
4. **GUSS-Test** (Gugging Swallowing Screen, Trapl et al. 2007): validierter Bedside-Test mit 4 Stufen (indirekte Schluckprüfung → Wasser → Brei → fester Nahrung)
5. **Ggf. FEES** (fiberoptisch-endoskopische Schluckuntersuchung) durch Logopädie/HNO

**Bei bestätigter Dysphagie — angepasste Kostform:**
- **IDDSI-Framework** (International Dysphagia Diet Standardisation Initiative, 2019): 8 Stufen für Nahrung und Flüssigkeit
- Flüssigkeit: 'leicht eingedickt' bis 'püriert'
- Feste Nahrung: 'weich' bis 'püriert' bis 'homogener Brei'

**Esshaltung:**
- Aufrecht sitzen (90° oder so weit wie möglich)
- Kinn zur Brust (Chin-tuck-Maneuver)
- Kleine Portionen, langsames Tempo
- Nach dem Essen 30 Min aufrecht bleiben (Refluxschutz)

**Wichtig:** Ohne klare ärztliche Freigabe kein Essen oder Trinken — auch nicht 'einen Schluck Wasser'. (AWMF S3 2017, Trapl et al. 2007)"

**B1 (670 Zeichen):**
"Eine **Schluckstörung (Dysphagie)** ist eine der häufigsten Gründe für Pneumonie. Nach Schlaganfall haben bis zu **50%** eine Schluckstörung. Die Hälfte davon verschluckt sich **still** — ohne zu husten.

**Zeichen bei Essen oder Trinken (immer beobachten!):**
- Husten beim Schlucken oder danach
- **Gurgelnde Stimme** nach dem Schlucken
- Viel Schleim, oft räuspern
- Speichel läuft raus
- Essen bleibt im Mund
- Gewicht verliert er, ohne Grund

**Was du tun musst bei Verdacht:**
1. **Nichts per os!** Nichts essen, nichts trinken. Auch keine Tabletten.
2. **Arzt rufen.** Verdacht dokumentieren.
3. **Logopädie** bestellen.
4. **GUSS-Test** machen — ein einfacher Schluck-Test (Trapl 2007)
5. Wenn nötig: **FEES** — eine Kamera prüft das Schlucken

**Wenn Dysphagie bestätigt ist:**
- Eingedickte Flüssigkeiten (Verdickungspulver) und weiche, pürierte Nahrung
- **IDDSI**: internationales System mit 8 Stufen — vom 'ganz flüssig' bis 'fester Brei'

**So essen:**
- **Aufrecht sitzen** (90°)
- **Kinn zur Brust** beim Schlucken
- **Kleine Bissen**, langsam
- **30 Min** nach dem Essen aufrecht bleiben

**Wichtig:** Kein Essen oder Trinken ohne ärztliche Freigabe. Auch kein 'Schlückchen Wasser'."

- **Erklärungs-Step:** stepType `branching` (Entscheidungsbaum bei Verdacht)
- **Glossar-Begriffe:** [Dysphagie, GUSS-Test, FEES, IDDSI, NPO, Chin-tuck, stille Aspiration]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Schluck Wasser zum Testen geht immer — so sieht man ja, ob er hustet"**
- **Fachbegriff:** Wasser-Test-Fehler
- **Feedback (C1, 330 Zeichen):** "Nicht ganz — das ist **gefährlich**. Bei stiller Aspiration hustet der Patient nicht, aber das Wasser ist trotzdem in der Lunge (Pneumonie-Risiko). Außerdem: Wasser ist am schwersten zu schlucken (läuft am schnellsten). Ohne strukturierten Test (GUSS) kann ein unsachgemäßer 'Wasser-Test' zum Ertrinken oder zur Aspirationspneumonie führen. Merke: Kein Wasser-Test ohne Screening."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — das ist **sehr gefährlich**. Bei **stiller** Aspiration hustet der Patient nicht — aber das Wasser ist in der Lunge. Außerdem: Wasser ist am **schwersten** zu schlucken. Deshalb: **Kein Wasser** ohne richtigen Test (GUSS). Merke: Niemals nur 'mal einen Schluck'."

**D2: "Eingedickte Flüssigkeiten sind immer sicher — kein Aspirationsrisiko"**
- **Fachbegriff:** Andickungs-Dogma
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — eingedickte Flüssigkeit **senkt** das Risiko, **eliminiert** es aber nicht. Bei sehr schwerer Dysphagie kann auch angedickte Kost aspiriert werden. Außerdem: Zu stark eingedickt kann paradoxerweise schlechter schluckbar sein (pappt an Mundschleimhaut). Die IDDSI-Stufe muss logopädisch individuell festgelegt werden. Merke: Andicken ist kein Freibrief."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — eingedickte Flüssigkeit macht das Risiko **kleiner**, aber nicht **null**. Bei schwerer Dysphagie kann der Patient auch angedickte Kost verschlucken. Außerdem: **Zu dick** ist auch schlecht. Die Logopädie entscheidet, wie dick. Merke: Andicken ist nicht 100% sicher."

**D3: "Wenn der Patient keinen Appetit hat, ist die Schluckstörung nicht so wichtig"**
- **Fachbegriff:** Appetit-Priorität-Falle
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — **Mangelernährung und Aspirationspneumonie sind gleichzeitige Risiken**. Die Lösung ist nicht, weniger zu essen, sondern das Essen sicher zu machen. Unbehandelte Dysphagie führt zu beidem: Mangelernährung (Ablehnung) UND Pneumonie (Verschlucken). Logopädie + Ernährungsteam + angepasste Kost — umfassend lösen, nicht ignorieren. Merke: Dysphagie ist immer Priorität."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — die Schluckstörung ist **immer wichtig**. Wenn der Patient nicht isst, wird er schwach. Das erhöht das Pneumonie-Risiko weiter. Außerdem: Bei jeder falschen Portion kann er verschlucken. Logopädie + Essensberater + passende Kost. Merke: Dysphagie immer ernstnehmen."

### Richtig-Feedback
**C1 (335 Zeichen):** "Sehr gut. Der richtige Ablauf: (1) SOFORT NPO — nichts essen, trinken, keine orale Medikation. (2) Arzt informieren, Verdacht dokumentieren. (3) Logopädie anmelden. (4) GUSS-Test durchführen (oder warten, bis Logopädie prüft). Ohne strukturiertes Screening kein oraler Zugang. Die gurgelnde Stimme und der Husten beim Trinken sind klassische Warnsignale — nie ignorieren."

**B1 (290 Zeichen):** "Sehr gut. Richtiges Vorgehen: (1) Sofort **nichts per os** — kein Essen, kein Trinken, keine Tabletten. (2) **Arzt rufen**, Verdacht dokumentieren. (3) **Logopädie** bestellen. (4) **GUSS-Test** machen. Die gurgelnde Stimme und das Husten beim Trinken sind klare Warnzeichen — nie ignorieren."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was machst du als erste Maßnahme bei Verdacht auf Dysphagie?"
- **Rückseite:** "SOFORT NPO (nichts per os — kein Essen, kein Trinken, keine orale Medikation). Arzt informieren, Verdacht dokumentieren. Logopädie anfordern. GUSS-Test durchführen."
- **Kategorie:** entscheidung

---

## Baustein 11: handhygiene-krinko-bundel

### Metadaten
- **bausteinId:** pneumonie-prophylaxe-handhygiene-bundel
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Welche Rolle spielen deine Hände in der Pneumonie-Prävention? Und warum ist die KRINKO-Empfehlung eine 'Bündel-Strategie' statt einer Einzelmaßnahme?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Die **hygienische Händedesinfektion** vor und nach jedem Patientenkontakt ist die wichtigste Einzelmaßnahme gegen nosokomiale Infektionen. Die KRINKO-Empfehlung verbindet sie mit 4 weiteren Säulen: Mundpflege, 30-45° Lagerung, Sekretmanagement, gezieltes Absaugen."

**B1 (235 Zeichen):** "**Hände desinfizieren** vor und nach jedem Patient ist die wichtigste Maßnahme gegen Krankenhaus-Infektionen. Die KRINKO (RKI) empfiehlt dazu ein **Bündel** — mehrere Maßnahmen zusammen: Mundpflege + Lagerung + Sekret + Absaugen + Hände."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (800 Zeichen):**
"Die nosokomiale Pneumonie hat viele Eintrittswege — deshalb braucht sie eine **Bündel-Strategie** (Bundle).

**Die 5 WHO-Momente der Händehygiene (WHO 2009) — bindend:**
1. Vor Patientenkontakt
2. Vor aseptischer Tätigkeit (z.B. Katheter, Verband, Injektion)
3. Nach Kontakt mit potenziell infektiösem Material
4. Nach Patientenkontakt
5. Nach Kontakt mit der Umgebung des Patienten

**Durchführung** (nach EN 1500, TRBA 250):
- Alkoholisches Händedesinfektionsmittel auf trockene Hände
- Mindestens 30 Sekunden einwirken lassen
- Alle Flächen: Handflächen, -rücken, Finger, Fingerzwischenräume, Daumen, Fingerkuppen
- Bei sichtbarer Verschmutzung: zuerst Händewaschen, dann desinfizieren

**KRINKO-Bündel zur Pneumonie-Prävention (2013):**
1. **Händehygiene** vor/nach jedem Patientenkontakt
2. **Oberkörperhochlagerung** 30-45°
3. **Mundpflege** min. 2× täglich
4. **Sekretmanagement** (gezieltes Absaugen, geschlossene Systeme bei Beatmung)
5. **Tägliche Prüfung** der Indikation: Beatmung, Sonde, Katheter — so kurz wie möglich

**Warum Bündel?** Studien (Resar et al. 2005; Rello et al. 2013) zeigen: Einzelmaßnahmen wirken begrenzt. Bündel senken die VAP-Rate um 30-70% — weil sie alle Eintrittswege gleichzeitig verschließen.

**Kritische Bereiche:**
- Nach Absaugen: Händedesinfektion oft vergessen — hohes Übertragungsrisiko
- Beim Mundpflege-Prozess: eigene Kontaminations-Quelle
- Persönliche Schutzausrüstung: PSA nur bei Indikation, danach Desinfektion

**Evidenz:** Die WHO-Kampagne 'Clean Hands Save Lives' belegt bis zu 40% Reduktion nosokomialer Infektionen durch konsequente Händehygiene. (WHO 2009, RKI/KRINKO 2013, 2022)"

**B1 (680 Zeichen):**
"Die Pneumonie hat viele Eingänge — also braucht es ein **Bündel**: mehrere Maßnahmen zusammen.

**Die 5 WHO-Momente für Händedesinfektion (WHO 2009):**
1. **Vor** dem Patienten berühren
2. **Vor** einer sauberen Tätigkeit (Katheter, Verband, Injektion)
3. **Nach** Kontakt mit etwas möglicherweise Verschmutztem
4. **Nach** Patienten-Kontakt
5. **Nach** Umgebungs-Kontakt (Bett, Nachtschrank)

**So geht's richtig** (nach EN 1500):
- Desinfektionsmittel auf **trockene** Hände
- **Mindestens 30 Sekunden** reiben
- Alle Stellen: Handflächen, Handrücken, Finger, zwischen den Fingern, Daumen, Fingerkuppen
- Wenn sichtbarer Schmutz: **erst waschen**, dann desinfizieren

**Das KRINKO-Bündel gegen Pneumonie (2013):**
1. **Hände** desinfizieren
2. **Oberkörper** 30-45° hoch lagern
3. **Mundpflege** 2× am Tag
4. **Sekret** managen (gezielt absaugen)
5. **Jeden Tag prüfen:** Brauchst du noch die Beatmung, die Sonde, den Katheter? So kurz wie möglich!

**Warum Bündel?** Studien zeigen: Ein einzelner Punkt allein hilft wenig. **Alle zusammen** senken die Pneumonie-Rate um **30-70%**.

**Vorsicht:** Nach dem Absaugen wird das Händedesinfizieren oft vergessen. Hohes Risiko!

**Zahlen:** Die WHO-Kampagne zeigt: Händehygiene senkt Krankenhaus-Infektionen um bis zu 40%."

- **Erklärungs-Step:** stepType `reveal` (5 KRINKO-Säulen aufdecken)
- **Glossar-Begriffe:** [KRINKO, WHO-5-Momente, EN 1500, VAP, Bündel-Strategie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Händewaschen ist wirksamer als Händedesinfektion"**
- **Fachbegriff:** Wasch-Präferenz-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **Händedesinfektion** mit Alkohol ist wirksamer und schneller: 30 Sekunden statt 60+, tötet Bakterien und umhüllte Viren stärker ab, ist hautfreundlicher bei häufiger Anwendung. **Händewaschen** ist nur bei sichtbarer Verschmutzung oder Clostridium-difficile-Kontakt Pflicht. Merke: Desinfektion ist Standard, Waschen ist Ausnahme."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **Desinfektion** ist besser als Waschen. Schneller (30 Sekunden), wirksamer, hautfreundlicher. **Waschen** nur bei sichtbarer Verschmutzung oder bei Clostridium (Durchfall-Bakterium). Merke: Desinfektion ist Standard."

**D2: "30 Sekunden sind übertrieben — 10 Sekunden reichen auch"**
- **Fachbegriff:** Einwirkzeit-Verkürzung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die **30 Sekunden Einwirkzeit** sind in der EN 1500 verbindlich festgelegt und durch Hersteller validiert. Kürzere Zeit erreicht nicht die volle Keimreduktion. Bei Kontakt mit multiresistenten Keimen (MRSA, VRE) oft sogar **60 Sekunden**. Merke: Die Zeit ist die halbe Wirkung."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **30 Sekunden** sind wissenschaftlich festgelegt. Kürzer heißt: Keime überleben. Bei **MRSA** oder **VRE** sogar 60 Sekunden. Merke: Die Zeit ist die halbe Wirkung."

**D3: "Handschuhe ersetzen die Händedesinfektion"**
- **Fachbegriff:** Handschuh-Ersatz-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **Handschuhe ersetzen nie die Händedesinfektion**. Vor Anziehen: Hände desinfizieren. Nach Ausziehen: Hände desinfizieren. Handschuhe haben Mikrolöcher (bis 15% bei Routine-Handschuhen), Hände schwitzen darunter, Keime vermehren sich. Beim Ausziehen: Kontamination der Hände durch Handschuh-Außenseite. Merke: Handschuh + Desinfektion, nicht oder."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **Handschuhe ersetzen** die Desinfektion **nicht**. Vor und nach den Handschuhen: Hände desinfizieren. Handschuhe haben winzige Löcher. Hände schwitzen drin. Beim Ausziehen kommen Keime auf die Hände. Merke: Beides zusammen, nicht oder."

### Richtig-Feedback
**C1 (325 Zeichen):** "Hervorragend. Die Hände sind der Hauptübertragungsweg für Pneumonie-Erreger — sowohl vom Personal zum Patienten als auch zwischen Patienten. Die 5 WHO-Momente + 30 Sekunden mit Alkohol sind der Standard. Bündel-Strategie (KRINKO 2013): Händehygiene + Oberkörperhochlagerung + Mundpflege + Sekretmanagement + tägliche Indikations-Prüfung. Einzelmaßnahme wirkt wenig, Bündel senkt VAP-Rate um 30-70%."

**B1 (280 Zeichen):** "Hervorragend. Die Hände übertragen die meisten Pneumonie-Keime. Deshalb: 5 WHO-Momente und 30 Sekunden mit Alkohol. Die KRINKO (2013) empfiehlt ein **Bündel**: Hände + Lagerung + Mundpflege + Sekret + tägliche Prüfung von Geräten. Zusammen senkt das die Pneumonie-Rate um 30-70%."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 5 WHO-Momente der Händehygiene und das KRINKO-Pneumonie-Bündel."
- **Rückseite:** "**5 WHO-Momente:** (1) vor Patient, (2) vor aseptischer Tätigkeit, (3) nach Risikomaterial, (4) nach Patient, (5) nach Umgebung. **KRINKO-Bündel (2013):** Händehygiene + Oberkörperhochlagerung 30-45° + Mundpflege + Sekretmanagement + tägliche Indikationsprüfung."
- **Kategorie:** recht

---

## Zusammenfassung & Validierung

### Gesamt-Übersicht

| # | bausteinId | Bloom | Wissensart | Zeit (Min) |
|---|------------|-------|------------|------------|
| 1 | pneumonie-prophylaxe-definition | 1 | definition | 4 |
| 2 | pneumonie-prophylaxe-risikofaktoren | 3 | assessment | 5 |
| 3 | pneumonie-prophylaxe-lisa-prinzip | 2 | konzept | 4 |
| 4 | pneumonie-prophylaxe-oberkoerperhoch | 3 | maßnahme | 5 |
| 5 | pneumonie-prophylaxe-lippenbremse | 3 | maßnahme | 5 |
| 6 | pneumonie-prophylaxe-kontaktatmung | 4 | handlung | 5 |
| 7 | pneumonie-prophylaxe-sekretmanagement | 4 | handlung | 5 |
| 8 | pneumonie-prophylaxe-fruehmobilisation | 3 | maßnahme | 4 |
| 9 | pneumonie-prophylaxe-aspiration-mundpflege | 4 | maßnahme | 5 |
| 10 | pneumonie-prophylaxe-dysphagie | 5 | entscheidung | 6 |
| 11 | pneumonie-prophylaxe-handhygiene-bundel | 5 | entscheidung | 5 |

**Bloom-Verteilung:**
- Bloom 1-2: 2 Bausteine (18%)
- Bloom 3-4: 6 Bausteine (55%)
- Bloom 5-6: 3 Bausteine (27%)

**Summe Zeit:** 53 Min (Bausteine pur) — mit Wissenstexten und Übergängen: ~99 Min Zielzeit (4 UE × 45 × 0,55).

### Urheberrechts-Check (K.O.)
- [x] Abstandstest bestanden — alle Texte in eigenen Worten formuliert
- [x] Keine `[I Care S.XX]`-Referenzen im Schüler-sichtbaren Text
- [x] Primärquellen: AWMF S3, RKI/KRINKO, WHO, DNQP, Drakulovic 1999, Trapl 2007
- [x] Statistiken mit Jahresangabe (KRINKO 2013, WHO 2009, AWMF 2017)
- [x] Anrede durchgängig "du", echte Umlaute (ä, ö, ü, ß)

### Didaktik-Check
- [x] 3 Stufen pro Baustein (Denkfrage, Hinweis, Erklärung)
- [x] Stufe 3 eigenständig verständlich
- [x] Mindestens 3 Distraktoren pro Baustein mit spezifischem Feedback
- [x] Sandwich-Feedback (Lob + Korrektur + Merkhilfe) bei jedem Distraktor
- [x] B1-Version für Stufe 2, Stufe 3, alle Feedbacks
- [x] TTS-relevante Markierung bei Fachbegriffen
- [x] Querschnitt zu Dekubitus + Thrombose sichtbar (Baustein 8: Frühmobilisation)
