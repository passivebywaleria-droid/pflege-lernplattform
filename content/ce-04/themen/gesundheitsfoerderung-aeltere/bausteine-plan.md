# Wissensbausteine: Gesundheitsförderung ältere Menschen

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `gesundheitsfoerderung-aeltere` |
| ceId | `ce-04` |
| cluster | C (Spezialisierung 3. AD) |
| wissensart | handlung |
| kompetenzbereich | I.3 |
| geschaetzteUE | 25 |
| zielzeitMin | 619 (25 UE × 45 × 0,55) |
| bausteineAnzahl | 32 |
| voraussetzungen | `patientenberatung` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 25% (8 Bausteine), Bloom 3-4: 56% (18 Bausteine), Bloom 5-6: 19% (6 Bausteine)

**Primärquellen:**
- WHO (2015): World Report on Ageing and Health
- Fried L. P. et al. (2001): Frailty in Older Adults — Journal of Gerontology
- Yesavage J. A. et al. (1983): Geriatric Depression Scale (GDS-15)
- Ngandu T. et al. (2015): FINGER-Studie — The Lancet
- Lachs M. S. (1998): The Mortality of Elder Mistreatment — JAMA
- Holt-Lunstad J. (2015): Loneliness and Social Isolation as Risk Factors for Mortality — Perspectives on Psychological Science
- Guigoz Y. (1994): Mini Nutritional Assessment (MNA)
- Podsiadlo D., Richardson S. (1991): Timed Up and Go Test (TUG)
- Mahoney F. I., Barthel D. W. (1965): Barthel-Index
- PRISCUS-Liste (Holt et al. 2010, aktualisiert 2023)
- FORTA-Klassifikation (Wehling 2012)
- Beers-Liste (American Geriatrics Society, AGS 2023)
- SGB XI (§ 14, § 15): Pflegebedürftigkeit, Neues Begutachtungsassessment (NBA)
- § 1901a BGB: Patientenverfügung
- § 1814 BGB: Betreuungsverfügung (ab 2023)
- BGB § 1896: Vorsorgevollmacht
- DNQP (2022): Expertenstandard Sturzprophylaxe (2. Aktualisierung)

---

## Baustein 1: altersdefinitionen

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-altersdefinition
- **bloomLevel:** 1
- **wissensart:** definition
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Ab wann ist ein Mensch 'alt'? Wenn du an einen 68-Jährigen und einen 92-Jährigen denkst — warum macht es Sinn, 'alt' in Gruppen zu teilen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Die WHO teilt das Alter in vier Gruppen: junge Alte (65-74), mittlere Alte (75-84), hochbetagte Menschen (85-99) und Hundertjährige (100+). Der Gesundheitszustand unterscheidet sich stark — eine 70-Jährige ist pflegerisch oft eine andere Welt als eine 90-Jährige. (WHO World Report on Ageing, 2015)"

**B1 (215 Zeichen):** "Die WHO teilt das Alter in vier Gruppen: **junge Alte** (65-74 Jahre), **mittlere Alte** (75-84), **hochbetagte Menschen** (85-99) und **Hundertjährige** (ab 100). Der Gesundheitszustand ist in jeder Gruppe sehr unterschiedlich."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (640 Zeichen):**
"Die Weltgesundheitsorganisation unterscheidet vier Altersabschnitte jenseits des 65. Lebensjahres:

- **Junge Alte** (65-74 Jahre): meist noch selbstständig, oft beruflich und sozial aktiv, chronische Erkrankungen beginnen sich zu häufen.
- **Mittlere Alte** (75-84 Jahre): erste deutliche Einbußen bei Mobilität, Seh- und Hörvermögen; Multimorbidität wird die Regel.
- **Hochbetagte Menschen** (85-99 Jahre): hohe Pflegebedürftigkeit, oft mehrere chronische Erkrankungen plus kognitive Einschränkungen.
- **Hundertjährige** (ab 100 Jahre): die am schnellsten wachsende Altersgruppe weltweit.

Wichtig für dich: Kalenderalter ≠ biologisches Alter. Eine 80-Jährige, die täglich wandert, ist fitter als eine 65-Jährige mit schwerer Herzinsuffizienz. (WHO World Report on Ageing, 2015)"

**B1 (505 Zeichen):**
"Die WHO teilt ältere Menschen in vier Gruppen:

- **Junge Alte** (65-74 Jahre): Meistens noch fit und selbstständig. Erste Krankheiten beginnen.
- **Mittlere Alte** (75-84 Jahre): Bewegen sich langsamer. Hören und Sehen lassen nach. Mehrere Krankheiten sind normal.
- **Hochbetagte Menschen** (85-99 Jahre): Brauchen oft Pflege. Viele haben auch Probleme mit dem Gedächtnis.
- **Hundertjährige** (ab 100 Jahre): Diese Gruppe wächst schnell.

Wichtig: Das Alter auf dem Papier sagt nicht alles. Eine fitte 80-Jährige kann gesünder sein als eine 65-Jährige mit Herzproblemen."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Hochbetagte, Multimorbidität, biologisches Alter]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Alt sein beginnt mit 65 — und dann sind alle gleich alt."**
- **Fachbegriff:** Gleichheits-Irrtum
- **Feedback (C1, 220 Zeichen):** "Nicht ganz — zwischen 65 und 100 liegen 35 Jahre. Eine 70-Jährige unterscheidet sich von einer 95-Jährigen so stark wie eine Teenagerin von einer 45-Jährigen. Merke: Alter ist keine homogene Gruppe."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — zwischen 65 und 100 liegen 35 Jahre. Eine 70-Jährige ist anders als eine 95-Jährige — wie ein Teenager anders ist als eine 45-Jährige. Merke: 'alt' sind nicht alle gleich."

**D2: "Das Kalenderalter sagt, wie fit jemand ist."**
- **Fachbegriff:** Kalenderalter-Trugschluss
- **Feedback (C1, 230 Zeichen):** "Nicht ganz — das Kalenderalter ist nur eine Zahl. Biologisches Alter zählt: Eine 80-Jährige, die täglich läuft, kann fitter sein als eine 65-Jährige mit Diabetes und Herzinsuffizienz. Merke: Fitness statt Geburtstag anschauen."
- **Feedback (B1, 205 Zeichen):** "Nicht ganz — das Alter auf dem Papier sagt nicht alles. Eine 80-Jährige, die viel geht, kann fitter sein als eine 65-Jährige mit mehreren Krankheiten. Merke: Schau auf die Fitness, nicht auf das Geburtsjahr."

**D3: "Hochbetagte sind Menschen über 65."**
- **Fachbegriff:** Begriffsverwechslung
- **Feedback (C1, 210 Zeichen):** "Nicht ganz — 'hochbetagt' bedeutet **85-99 Jahre**. 65-74 sind 'junge Alte', 75-84 'mittlere Alte'. Der Begriff ist wichtig, weil Hochbetagte andere Risiken haben als junge Alte. Merke: Hochbetagt = 85+."
- **Feedback (B1, 190 Zeichen):** "Nicht ganz — 'hochbetagt' heißt **85-99 Jahre**. Menschen von 65-74 nennt man 'junge Alte'. Der Unterschied ist wichtig, weil hochbetagte Menschen andere Probleme haben. Merke: Hochbetagt = ab 85."

### Richtig-Feedback
**C1 (235 Zeichen):** "Genau. Die WHO trennt junge Alte (65-74), mittlere Alte (75-84), hochbetagte (85-99) und Hundertjährige (100+). Warum wichtig? Die Pflegebedürfnisse sind in jeder Gruppe anders — und das Kalenderalter sagt weniger als der tatsächliche Zustand."

**B1 (215 Zeichen):** "Sehr gut. Die WHO teilt ältere Menschen in vier Gruppen: junge Alte (65-74), mittlere Alte (75-84), hochbetagte (85-99) und Hundertjährige (ab 100). Wichtig: Jede Gruppe hat andere Pflege-Bedürfnisse."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie teilt die WHO ältere Menschen ein? (4 Gruppen)"
- **Rückseite:** "Junge Alte 65-74 / Mittlere Alte 75-84 / Hochbetagte 85-99 / Hundertjährige 100+. (WHO 2015)"
- **Kategorie:** fakt

---

## Baustein 2: multimorbiditaet

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-multimorbiditaet
- **bloomLevel:** 2
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Eine 82-jährige Patientin hat Bluthochdruck, Diabetes, Arthrose und eine beginnende Demenz. Warum ist ihre Pflege komplexer als bei jemandem, der nur eine dieser Krankheiten hat?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "**Multimorbidität** meint das gleichzeitige Vorliegen von mindestens zwei chronischen Erkrankungen bei einer Person. Bei über 65-Jährigen liegt die Prävalenz bei rund 60%, bei Hochbetagten bei über 80%. Die Krankheiten beeinflussen sich gegenseitig."

**B1 (220 Zeichen):** "**Multimorbidität** heißt: Eine Person hat gleichzeitig **zwei oder mehr chronische Krankheiten**. Bei älteren Menschen ist das normal. Ab 65 Jahren sind etwa 6 von 10 Menschen betroffen. Bei über 85-Jährigen sind es mehr als 8 von 10."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (710 Zeichen):**
"Multimorbidität ist das Kennzeichen des Alters in der Pflege. Definiert wird sie als das **gleichzeitige Vorhandensein von mindestens zwei chronischen Erkrankungen** bei einer Person. Häufige Kombinationen: Hypertonie + Diabetes + Arthrose, Herzinsuffizienz + COPD + Depression, Demenz + Sturzneigung + Mangelernährung.

Drei Folgen für deine Arbeit:

1. **Polypharmazie**: Jede Krankheit bringt Medikamente mit. Wechselwirkungen werden zum Hauptproblem (siehe Baustein 'Polypharmazie').
2. **Konkurrierende Therapieziele**: Eine Empfehlung für Diabetes (weniger Kohlenhydrate) kann bei Mangelernährung schaden.
3. **Priorisierung statt Maximaltherapie**: Was ist dieser Person **jetzt** am wichtigsten — Blutdruckoptimierung oder Sturzfreiheit?

Der WHO World Report on Ageing (2015) nennt Multimorbidität die 'Regel, nicht die Ausnahme' im Alter."

**B1 (580 Zeichen):**
"**Multimorbidität** heißt: Ein Mensch hat **zwei oder mehr chronische Krankheiten gleichzeitig**.

Beispiele:
- Bluthochdruck + Diabetes + Arthrose
- Herzschwäche + COPD + Depression

Drei Probleme für die Pflege:

1. **Viele Medikamente**: Für jede Krankheit gibt es Tabletten. Manche passen nicht zusammen.
2. **Ziele passen nicht zusammen**: Bei Diabetes soll die Patientin weniger essen. Bei Mangelernährung soll sie mehr essen. Was ist wichtiger?
3. **Priorität setzen**: Was ist jetzt am wichtigsten? Nicht alles geht gleichzeitig.

Die WHO sagt: Multimorbidität ist im Alter **normal**, nicht die Ausnahme."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Multimorbidität, Polypharmazie, Komorbidität]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Multimorbidität heißt: Jemand war oft krank."**
- **Fachbegriff:** Zeit-Verwechslung
- **Feedback (C1, 215 Zeichen):** "Nicht ganz — Multimorbidität meint **gleichzeitig** mehrere chronische Krankheiten, nicht nacheinander. Jemand, der früher oft Grippe hatte, aber heute gesund ist, ist nicht multimorbid. Merke: Zeitgleich, nicht aufeinanderfolgend."
- **Feedback (B1, 195 Zeichen):** "Nicht ganz — Multimorbidität heißt: **mehrere Krankheiten jetzt gleichzeitig**. Nicht 'war früher oft krank'. Jemand mit fünf Grippen im Leben ist nicht multimorbid. Merke: Gleichzeitig, nicht nacheinander."

**D2: "Multimorbidität betrifft nur Menschen über 80."**
- **Fachbegriff:** Altersgrenzen-Irrtum
- **Feedback (C1, 225 Zeichen):** "Nicht ganz — bereits ab 65 Jahren haben rund 60% der Menschen mehrere chronische Erkrankungen. Auch jüngere Menschen können multimorbid sein (z.B. bei Diabetes Typ 1 plus Depression). Merke: Häufung ab 65, nicht ab 80."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — schon ab 65 Jahren haben etwa 6 von 10 Menschen mehrere Krankheiten. Auch Jüngere können betroffen sein. Merke: Multimorbidität beginnt oft schon ab 65, nicht erst ab 80."

**D3: "Bei Multimorbidität behandelt man jede Krankheit gleich intensiv."**
- **Fachbegriff:** Maximal-Therapie-Fehler
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — bei Multimorbidität muss **priorisiert** werden. Eine Patientin mit Bluthochdruck, Diabetes und Demenz kann nicht alle drei Krankheiten maximal therapiert bekommen. Die Therapieziele würden kollidieren. Merke: Priorisieren statt maximieren."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — bei vielen Krankheiten muss man **Prioritäten setzen**. Man kann nicht alle Krankheiten stark behandeln. Die Therapien passen sonst nicht zusammen. Merke: Nicht alles gleichzeitig behandeln — nur das Wichtigste."

### Richtig-Feedback
**C1 (255 Zeichen):** "Genau. Multimorbidität ist das gleichzeitige Bestehen von mindestens zwei chronischen Erkrankungen. Ab 65 Jahren betrifft es rund 60%, bei über 85-Jährigen über 80%. Das bedeutet für die Pflege: Polypharmazie, konkurrierende Therapieziele, Priorisierung statt Maximaltherapie."

**B1 (225 Zeichen):** "Sehr gut. Multimorbidität heißt: mindestens zwei chronische Krankheiten gleichzeitig. Bei über 65-Jährigen ist das bei etwa 6 von 10 so, bei Hochbetagten noch häufiger. Folge: viele Medikamente und Prioritäten setzen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet Multimorbidität? (Definition + Prävalenz 65+)"
- **Rückseite:** "Gleichzeitiges Bestehen von ≥2 chronischen Erkrankungen. Bei 65+: rund 60%, bei 85+: über 80%. (WHO 2015)"
- **Kategorie:** fachbegriff

---

## Baustein 3: frailty-syndrom

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-frailty
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Herr Weber (84) wirkt zerbrechlich: Er hat abgenommen, ist schnell erschöpft, sein Händedruck ist schwach und er bewegt sich langsam. Warum ist das **mehr** als 'nur alt'?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "**Frailty** (Gebrechlichkeit) ist ein eigenständiges Syndrom. Nach Fried (2001) liegt es vor bei ≥3 von 5 Kriterien: ungewollter Gewichtsverlust, Erschöpfung, reduzierte Handkraft, verlangsamte Gehgeschwindigkeit, geringe körperliche Aktivität. Frailty erhöht das Risiko für Stürze, Krankenhaus, Tod."

**B1 (240 Zeichen):** "**Frailty** heißt 'Gebrechlichkeit'. Es ist eine eigene Krankheit — nicht nur 'normales Altern'. Nach Fried (2001) liegt Frailty vor bei **3 oder mehr** von 5 Zeichen: Gewichtsverlust, schnelle Erschöpfung, schwacher Händedruck, langsames Gehen, wenig Bewegung."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Frailty (deutsch: Gebrechlichkeit) ist ein **geriatrisches Syndrom**, das bei bis zu 25% der über 85-Jährigen vorkommt. Es beschreibt einen Zustand reduzierter physiologischer Reserven, der die Person anfällig macht für kleine Stressoren — ein Harnwegsinfekt, ein Krankenhausaufenthalt oder ein kleiner Sturz können zu einem dramatischen Abbau führen.

**Fried-Kriterien (2001) — Frailty-Phänotyp:** mindestens 3 von 5 Kriterien erfüllt:

1. **Unbeabsichtigter Gewichtsverlust** (≥4,5 kg oder ≥5% Körpergewicht in einem Jahr)
2. **Subjektive Erschöpfung** (Selbstauskunft)
3. **Reduzierte Handkraft** (Messung mit Handkraftmesser)
4. **Verlangsamte Gehgeschwindigkeit** (<0,8 m/s über 4,6 m)
5. **Geringe körperliche Aktivität** (wenig Bewegung pro Woche)

1-2 Kriterien = **Pre-Frailty** (Vorstufe, noch reversibel). Frailty erhöht deutlich das Risiko für Stürze, Hospitalisierung, Pflegebedürftigkeit und Sterblichkeit. (Fried Frailty, 2001)"

**B1 (610 Zeichen):**
"**Frailty** heißt 'Gebrechlichkeit'. Es ist eine eigene Krankheit bei alten Menschen. Die Person hat wenig Kraft-Reserven. Schon eine Harnwegsinfektion kann sie stark krank machen.

**So erkennst du Frailty** (nach Fried, 2001) — **3 oder mehr** von diesen 5 Zeichen:

1. **Gewichtsverlust**: 4,5 kg oder mehr in einem Jahr, ohne zu wollen.
2. **Immer müde**: Die Person sagt: 'Ich bin schnell erschöpft.'
3. **Schwache Hände**: Sie kann nicht fest zudrücken.
4. **Langsames Gehen**: Weniger als 0,8 Meter pro Sekunde.
5. **Wenig Bewegung**: Sie geht selten aus dem Haus.

**1 bis 2 Zeichen = Pre-Frailty**. Das kann man noch umkehren. Frailty erhöht Risiko für Stürze, Krankenhaus und Tod."

- **Erklärungs-Step:** stepType `reveal` (5 Fried-Kriterien aufdecken)
- **Glossar-Begriffe:** [Frailty, Pre-Frailty, Handkraft, geriatrisches Syndrom]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Frailty ist einfach 'normal alt werden'."**
- **Fachbegriff:** Normalisierungs-Fehler
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — Frailty ist **nicht** das normale Altern. Es ist ein eigenständiges Syndrom mit erhöhtem Risiko für Stürze, Hospitalisierung und Tod. Viele 90-Jährige sind **nicht** frail. Merke: Alt ≠ frail. Frailty ist ein Warnsignal."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — Frailty ist **keine normale Alterung**. Es ist eine Krankheit. Es warnt vor Stürzen und Krankenhaus. Viele 90-Jährige haben **keine** Frailty. Merke: Alt sein ≠ frail sein."

**D2: "Frailty wird diagnostiziert, wenn jemand pflegebedürftig ist."**
- **Fachbegriff:** Pflegebedürftigkeits-Verwechslung
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — Frailty ist **eine Vorstufe** zur Pflegebedürftigkeit, keine Folge davon. Viele frail-Menschen leben noch zuhause und sind nicht offiziell pflegebedürftig. Gerade deshalb ist Früherkennung so wichtig — Pre-Frailty ist noch umkehrbar."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — Frailty kommt **vor** der Pflegebedürftigkeit. Viele Menschen mit Frailty leben noch allein zuhause. Wichtig: Pre-Frailty (Vorstufe) kann man noch umkehren. Merke: Frailty ist eine Warnung, keine Endstufe."

**D3: "Frailty liegt vor, wenn 1 der 5 Fried-Kriterien erfüllt ist."**
- **Fachbegriff:** Kriterien-Schwelle-Fehler
- **Feedback (C1, 230 Zeichen):** "Nicht ganz — Frailty braucht **mindestens 3 von 5** Fried-Kriterien. 1-2 erfüllte Kriterien = **Pre-Frailty** (Vorstufe). Diese Unterscheidung ist wichtig, weil Pre-Frailty mit Training und Ernährung noch reversibel ist."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — für Frailty müssen **3 oder mehr** von 5 Zeichen da sein. 1 bis 2 Zeichen = Pre-Frailty. Das ist die Vorstufe und man kann sie mit Training noch umkehren."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Frailty nach Fried (2001) liegt vor bei ≥3 von 5 Kriterien: Gewichtsverlust, Erschöpfung, reduzierte Handkraft, verlangsamte Gehgeschwindigkeit, geringe Aktivität. 1-2 = Pre-Frailty (noch reversibel). Wichtig: Frailty ist ein eigenständiges Syndrom, nicht 'nur Alter'."

**B1 (235 Zeichen):** "Sehr gut. Frailty (Gebrechlichkeit) hat **3 oder mehr** von 5 Zeichen: Gewichtsverlust, Erschöpfung, schwacher Händedruck, langsames Gehen, wenig Bewegung. 1-2 Zeichen = Pre-Frailty (Vorstufe, noch umkehrbar). Frailty ist keine normale Alterung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Fried-Kriterien definieren Frailty? Ab wann liegt Frailty vor?"
- **Rückseite:** "Gewichtsverlust, Erschöpfung, reduzierte Handkraft, verlangsamte Gehgeschwindigkeit, geringe Aktivität. ≥3 = Frailty, 1-2 = Pre-Frailty. (Fried 2001)"
- **Kategorie:** assessment

---

## Baustein 4: sarkopenie

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-sarkopenie
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Warum verlieren alte Menschen an Muskelmasse — selbst wenn sie gesund essen? Und warum ist das gefährlicher als ein bisschen Muskelschwund bei Jüngeren?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "**Sarkopenie** ist der altersbedingte Verlust von Muskelmasse und -kraft. Ab dem 30. Lebensjahr verliert der Mensch 3-8% Muskelmasse pro Jahrzehnt, ab 60 beschleunigt sich der Verlust. Ohne Krafttraining sinkt Muskelmasse unaufhaltsam — mit Training ist sie auch im Alter aufbaubar."

**B1 (225 Zeichen):** "**Sarkopenie** heißt: Muskel-Verlust im Alter. Ab 30 Jahren verlieren wir schon Muskeln. Ab 60 Jahren geht es schneller. Wer nicht trainiert, wird immer schwächer. Aber: Auch alte Menschen können wieder **Muskeln aufbauen** — mit Training."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Sarkopenie ist der altersassoziierte Verlust von Skelettmuskelmasse, Muskelkraft und körperlicher Leistungsfähigkeit. Der Begriff stammt aus dem Griechischen (sarx = Fleisch, penia = Armut).

**Altersverlauf ohne Intervention:**
- Ab 30 Jahren: 3-8% Muskelmassenverlust pro Jahrzehnt
- Ab 60 Jahren: Beschleunigung auf bis zu 1-2% pro Jahr
- Ab 80 Jahren: oft 30-50% weniger Muskelmasse als mit 30

**Folgen:** Stürze, Gebrechlichkeit, Verlust der Selbstständigkeit, längere Krankenhausaufenthalte.

**Prävention und Therapie:**
1. **Krafttraining** (WHO-Empfehlung: 2× pro Woche) — auch mit 80 Jahren noch effektiv (Studien zeigen Muskelwachstum bei Hochbetagten)
2. **Proteinzufuhr**: 1,0-1,2 g/kg Körpergewicht/Tag im Alter (höher als bei Jüngeren, weil Proteinaufnahme schlechter wird)
3. **Bewegung im Alltag**: Treppen, Spaziergänge, Haushalt. (WHO World Report on Ageing, 2015)"

**B1 (580 Zeichen):**
"**Sarkopenie** heißt 'Muskelmangel' (Griechisch: sarx = Fleisch, penia = Armut). Es ist der Verlust von Muskeln im Alter.

**So läuft es normalerweise:**
- Ab 30 Jahren: Muskelverlust von 3-8% pro 10 Jahre
- Ab 60 Jahren: Es geht schneller — bis zu 1-2% pro Jahr
- Ab 80 Jahren: 30-50% weniger Muskeln als mit 30

**Folgen:** Stürze, Schwäche, Pflege nötig.

**Was hilft (Prävention):**
1. **Krafttraining**: 2-mal pro Woche (WHO). Auch mit 80 Jahren wachsen Muskeln noch!
2. **Mehr Protein essen**: 1,0 bis 1,2 Gramm pro Kilo Körpergewicht pro Tag.
3. **Alltagsbewegung**: Treppen steigen, spazieren gehen, Haushalt machen."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Sarkopenie, Skelettmuskulatur, Proteinzufuhr, Krafttraining]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Im Alter bringt Krafttraining nichts mehr — die Muskeln sind weg."**
- **Fachbegriff:** Hoffnungslosigkeits-Mythos
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — Krafttraining baut Muskeln **in jedem Alter** auf. Studien zeigen, dass auch 90-Jährige mit progressivem Krafttraining deutlich Muskelmasse und Kraft gewinnen können. Merke: Der Muskel vergisst das Wachsen nie — er muss nur gefordert werden."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — Krafttraining hilft auch alten Menschen. Sogar 90-Jährige können neue Muskeln aufbauen, wenn sie trainieren. Der Muskel reagiert immer auf Training. Merke: Es ist nie zu spät für Krafttraining."

**D2: "Alte Menschen brauchen weniger Protein als jüngere."**
- **Fachbegriff:** Ernährungs-Umkehrfehler
- **Feedback (C1, 260 Zeichen):** "Das Gegenteil ist richtig — alte Menschen brauchen **mehr** Protein pro kg Körpergewicht (1,0-1,2 g/kg/Tag) als junge Erwachsene (0,8 g/kg/Tag), weil die Proteinverwertung im Alter schlechter wird. Wenig Protein + Sarkopenie = gefährliche Kombination. Merke: Im Alter mehr Protein, nicht weniger."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — das Gegenteil stimmt. Alte Menschen brauchen **mehr** Eiweiß: 1,0-1,2 Gramm pro Kilo pro Tag. Junge brauchen nur 0,8. Grund: Der Körper verwertet Eiweiß im Alter schlechter. Merke: Ältere brauchen mehr Eiweiß, nicht weniger."

**D3: "Sarkopenie betrifft nur bettlägerige Menschen."**
- **Fachbegriff:** Immobilitäts-Irrtum
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — Sarkopenie beginnt schon bei aktiven 60-Jährigen, wenn sie kein Krafttraining machen. Bettlägerigkeit **verschlimmert** es stark (pro Bett-Woche bis zu 3% Muskelverlust), ist aber nicht die einzige Ursache. Merke: Sarkopenie beginnt bei Bewegungsmangel, nicht erst im Bett."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — Sarkopenie beginnt schon bei aktiven älteren Menschen, wenn sie nicht trainieren. Bettlägerigkeit macht es nur schneller: 1 Woche Bett = 3% Muskelverlust. Merke: Bewegungsmangel reicht für Sarkopenie."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Sarkopenie ist der altersassoziierte Verlust von Muskelmasse und -kraft. Ab 30 Jahren Verlust von 3-8% pro Jahrzehnt, ab 60 deutliche Beschleunigung. Gute Nachricht: Krafttraining (2×/Woche, WHO) plus ausreichend Protein (1,0-1,2 g/kg) baut Muskeln auch im hohen Alter wieder auf."

**B1 (240 Zeichen):** "Sehr gut. Sarkopenie heißt Muskelverlust im Alter. Ab 30 geht es los, ab 60 schneller. Wichtig: Mit **Krafttraining 2× pro Woche** und **1,0-1,2 g Protein pro kg pro Tag** kann man Muskeln auch noch mit 80 Jahren aufbauen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Sarkopenie und was hilft dagegen?"
- **Rückseite:** "Altersbedingter Verlust von Muskelmasse/-kraft (3-8% pro Jahrzehnt ab 30). Hilft: Krafttraining 2×/Woche + 1,0-1,2 g Protein/kg/Tag. (WHO 2015)"
- **Kategorie:** fachbegriff

---

## Baustein 5: tertiaerpraevention-im-alter

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-tertiaerpraevention
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Ein 85-jähriger Patient liegt nach Schlaganfall auf der Station. Welche Prophylaxen brauchst du gleichzeitig — und warum ist jede einzelne 'Gesundheitsförderung', auch wenn er schon krank ist?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "**Tertiärprävention im Alter** verhindert Folgeschäden bestehender Erkrankungen. Zentrale Säulen: **Sturz-, Dekubitus-, Kontraktur- und Pneumonieprophylaxe**. Diese vier Prophylaxen bilden den Kern der Altenpflege und sind direkt mit CE-02 verknüpft."

**B1 (230 Zeichen):** "**Tertiärprävention** heißt: Folgen einer Krankheit verhindern. Bei alten Menschen besonders wichtig sind **vier Prophylaxen**: **Sturz**-Prophylaxe, **Dekubitus**-Prophylaxe, **Kontraktur**-Prophylaxe, **Pneumonie**-Prophylaxe. Diese kennst du schon aus CE-02."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (830 Zeichen):**
"Tertiärprävention ist die dritte Ebene der Prävention (neben Primär- und Sekundärprävention) und zielt darauf, **Folgeschäden und Komplikationen bei bereits bestehenden Erkrankungen** zu verhindern. In der Altenpflege sind vier Prophylaxen Pflicht — sie bilden den täglichen Kern deiner Arbeit:

1. **Sturzprophylaxe** (DNQP 2022): Stürze sind die häufigste Ursache für Pflegebedürftigkeit im Alter. Assessment mit Timed Up and Go (TUG), Umfeldgestaltung, Krafttraining, Hilfsmittel.

2. **Dekubitusprophylaxe** (DNQP 2017/2024): Immobilität und reduzierte Hautdurchblutung sind Hauptrisiken. Druckentlastung, Hautpflege, Ernährung.

3. **Kontrakturprophylaxe**: Bewegungseinschränkungen durch Immobilität verhindern. Aktive und passive Bewegungsübungen, physiologische Lagerung.

4. **Pneumonieprophylaxe**: Immobilisation + geschwächte Atmung = hohes Risiko. Atemübungen, Mobilisation, Oberkörperhochlagerung, Mundhygiene.

Alle vier Prophylaxen sind **Tertiärprävention**: Sie wirken bei einer bereits bestehenden Grunderkrankung (Schlaganfall, Demenz, Herzinsuffizienz) und verhindern die **zweite Erkrankung** (Dekubitus, Sturz, Pneumonie). (WHO World Report on Ageing, 2015)"

**B1 (680 Zeichen):**
"**Tertiärprävention** ist die dritte Stufe der Prävention. Sie verhindert, dass eine **bestehende Krankheit Folgen** hat. Bei alten Menschen sind **vier Prophylaxen** besonders wichtig:

1. **Sturzprophylaxe**: Stürze sind die häufigste Ursache für Pflegebedürftigkeit. Du nutzt den **Timed Up and Go-Test** und machst die Umgebung sicher.

2. **Dekubitusprophylaxe**: Bei alten Menschen mit wenig Bewegung sehr wichtig. Du entlastest Druck, pflegst die Haut, achtest auf Essen.

3. **Kontrakturprophylaxe**: Verhindert, dass Gelenke steif werden. Du bewegst Arme und Beine — auch wenn die Patientin es nicht selbst kann.

4. **Pneumonieprophylaxe**: Verhindert Lungenentzündung. Du lagerst den Oberkörper hoch, machst Atemübungen, pflegst den Mund.

Diese vier Prophylaxen kennst du aus **CE-02**. Sie sind alle Tertiärprävention: Du verhinderst Folgen von Krankheiten."

- **Erklärungs-Step:** stepType `reveal` (4 Prophylaxen nacheinander)
- **Glossar-Begriffe:** [Tertiärprävention, Sturzprophylaxe, Kontrakturprophylaxe, Pneumonieprophylaxe]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Prophylaxen sind Primärprävention, weil sie vorbeugen."**
- **Fachbegriff:** Präventionsebenen-Verwechslung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — die vier Prophylaxen im Alter sind **Tertiärprävention**, weil sie Folgen einer **bestehenden Erkrankung** verhindern (z.B. Schlaganfall → Dekubitus). Primärprävention wäre z.B. Impfen eines Gesunden. Merke: Kranker Patient + Prophylaxe = Tertiärprävention."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — die Prophylaxen für alte Kranke sind **Tertiärprävention**. Sie verhindern Folgen einer **schon vorhandenen Krankheit**. Primärprävention ist z.B. eine Impfung für Gesunde. Merke: Krank + Prophylaxe = Tertiär."

**D2: "Pneumonieprophylaxe ist nur wichtig für Patienten mit Lungenkrankheit."**
- **Fachbegriff:** Krankheitsbezugs-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — bei **jedem immobilen älteren Patienten** ist Pneumonieprophylaxe Pflicht. Flache Atmung + Sekretstau + geschwächtes Immunsystem = hohes Pneumonierisiko. Das gilt auch für Patienten, die keine Lungenerkrankung haben. Merke: Immobilität alleine reicht als Grund."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Pneumonieprophylaxe ist für **alle alten Patienten** wichtig, die wenig liegen und wenig atmen. Auch ohne Lungenkrankheit. Wenig Bewegung = flache Atmung = Lungenentzündung möglich. Merke: Immobilität genügt."

**D3: "Kontrakturprophylaxe macht man erst, wenn die Gelenke schon steif sind."**
- **Fachbegriff:** Reaktivitäts-Fehler
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — Kontrakturprophylaxe ist **vorbeugend**. Sobald ein Patient immobil wird, beginnst du mit Bewegungsübungen. Einmal versteifte Gelenke sind schwer oder nicht mehr zurückzubringen. Merke: Prophylaxe = vor Problem handeln, nicht nach."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — Kontrakturprophylaxe macht man **früh**, bevor die Gelenke steif werden. Wenn sie einmal steif sind, ist es oft zu spät. Sobald jemand nicht mehr gut alleine bewegen kann, fängst du an. Merke: Früh handeln."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Tertiärprävention im Alter hat vier Kern-Prophylaxen: Sturz, Dekubitus, Kontraktur, Pneumonie. Alle wirken bei einer **bestehenden** Grunderkrankung (z.B. Schlaganfall) und verhindern Folgeschäden. Diese vier Prophylaxen sind direkt mit deinem CE-02-Wissen verknüpft und täglich in der Altenpflege Pflicht."

**B1 (240 Zeichen):** "Sehr gut. Tertiärprävention bei alten Menschen heißt: **Folgen von Krankheiten verhindern**. Die vier Prophylaxen sind **Sturz, Dekubitus, Kontraktur, Pneumonie**. Diese kennst du aus CE-02 — sie sind auch hier in CE-04 zentral."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 4 Prophylaxen sind Tertiärprävention im Alter?"
- **Rückseite:** "Sturz-, Dekubitus-, Kontraktur-, Pneumonieprophylaxe. Verbindung zu CE-02. (WHO 2015, DNQP 2017/2022)"
- **Kategorie:** handlung

---

## Baustein 6: mangelernaehrung-mna

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-mna
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Frau Schmidt (81) wiegt noch 52 kg bei 1,68 m. Vor einem Jahr waren es 58 kg. Sie sagt: 'Ach, ich hab einfach keinen Hunger mehr.' Warum ist das mehr als nur 'ein bisschen Gewichtsverlust'?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Mangelernährung betrifft bis zu 50% der Pflegeheim-Bewohner. Zur Früherkennung dient das **Mini Nutritional Assessment (MNA)** nach Guigoz (1994): kurze Form mit 6 Fragen + Langform mit 18 Fragen. Ergebnis: gut ernährt, Risiko, oder Mangelernährung."

**B1 (240 Zeichen):** "**Mangelernährung** ist bei alten Menschen sehr häufig — bis zu **50%** in Pflegeheimen. Zur Einschätzung nutzt du den **MNA-Test** (Mini Nutritional Assessment) nach Guigoz (1994). Kurze Form: **6 Fragen**. Ergebnis: gut / Risiko / Mangelernährung."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"**Mangelernährung im Alter** (englisch: malnutrition) ist definiert als ungewollter Gewichtsverlust ≥5% in 3 Monaten oder ≥10% in 6 Monaten, oder BMI <22 kg/m² bei über 65-Jährigen (nicht <18,5 wie bei Jüngeren). Prävalenz: bis 50% in Pflegeheimen, bis 70% in Krankenhäusern bei Hochbetagten.

**Ursachen** — merke dir die **'9 D'**: Dentition (Zähne), Dysgeusia (Geschmacksverlust), Dysphagia (Schluckstörung), Diarrhoea, Disease (Krankheit), Depression, Dementia, Drugs (Medikamente), Dysfunction (Behinderung).

**Assessment — MNA nach Guigoz (1994):**
- **MNA-Short Form (MNA-SF)**: 6 Fragen, ca. 5 Min. Punktzahl 0-14:
  - 12-14 Punkte: normaler Ernährungsstatus
  - 8-11 Punkte: Risiko für Mangelernährung
  - 0-7 Punkte: Mangelernährung
- **MNA-Langform**: 18 Fragen bei positivem Screening

**Folgen:** Immunschwäche, Sarkopenie, Wundheilungsstörung, längere Krankenhausaufenthalte, erhöhte Sterblichkeit. (Mini Nutritional Assessment, Guigoz 1994)"

**B1 (640 Zeichen):**
"**Mangelernährung im Alter** heißt: zu wenig Essen, zu wenig Nährstoffe. Das Ergebnis ist Gewichtsverlust.

**Wann spricht man von Mangelernährung?**
- Gewichtsverlust von mehr als **5% in 3 Monaten** oder
- mehr als **10% in 6 Monaten** oder
- BMI unter **22** bei über 65-Jährigen

**Wie häufig?** In Pflegeheimen bis zu **50%** der Bewohner. Im Krankenhaus noch mehr.

**Gründe — die '9 D':** kaputte **Zähne**, kein **Geschmack**, **Schlucken** schwer, **Durchfall**, **Krankheit**, **Depression**, **Demenz**, **Medikamente**, **Behinderung**.

**So testest du (MNA nach Guigoz, 1994):**
- **Kurze Form (6 Fragen)** — dauert 5 Minuten. Du bekommst 0-14 Punkte:
  - **12-14 Punkte**: gut ernährt
  - **8-11 Punkte**: Risiko
  - **0-7 Punkte**: Mangelernährung
- Bei Risiko: Lange Form mit 18 Fragen.

**Folgen:** Immunsystem wird schwach, Wunden heilen schlecht, Stürze häufiger, Sterblichkeit steigt."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Mangelernährung, MNA, BMI, Dysphagie, Dysgeusie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein BMI unter 18,5 ist bei alten Menschen die Grenze für Mangelernährung."**
- **Fachbegriff:** BMI-Grenzwerte-Fehler
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — bei über 65-Jährigen liegt die Grenze bei **BMI <22**, nicht <18,5. Der höhere Grenzwert berücksichtigt, dass Hochbetagte mehr Reserven brauchen. Ein BMI von 20 bei einer 85-Jährigen ist bereits kritisch. Merke: Ältere Menschen brauchen höhere BMI-Grenzen."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — bei alten Menschen liegt die Grenze bei **BMI unter 22**, nicht 18,5. Alte Menschen brauchen mehr Reserven. Ein BMI von 20 ist bei einer 85-Jährigen schon gefährlich. Merke: Alte Menschen brauchen höheres BMI."

**D2: "Wenn jemand im Pflegeheim regelmäßig isst, kann er nicht mangelernährt sein."**
- **Fachbegriff:** Aufnahmewahrnehmungs-Fehler
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — 'regelmäßig essen' sagt nichts über Menge und Nährstoffe. Viele Heimbewohner essen 3-mal täglich, aber nur kleine Portionen oder einseitig (wenig Protein). Deshalb ist das MNA-Assessment wichtig: Es misst **objektiv**, nicht den Eindruck. Merke: Regelmäßig ≠ ausreichend."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — 'regelmäßig essen' heißt nicht 'genug essen'. Viele alte Menschen essen 3-mal am Tag, aber sehr wenig oder immer das Gleiche. Deshalb machst du den **MNA-Test**. Er misst es genau. Merke: Regelmäßig ≠ genug."

**D3: "Bei 10 von 14 Punkten im MNA-SF ist die Person gut ernährt."**
- **Fachbegriff:** Punktzahl-Einordnungs-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — 10 Punkte bedeuten **Risiko für Mangelernährung** (Bereich 8-11). Nur **12-14 Punkte** heißen 'normal ernährt'. 0-7 Punkte sind Mangelernährung. Die Bereiche sind eng, weil Mangelernährung bei alten Menschen unterschätzt wird. Merke: 12+ ist gut, 8-11 bereits Warnung."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — 10 Punkte sind **Risiko** (Bereich 8-11). Nur **12-14** sind 'gut ernährt'. 0-7 sind Mangelernährung. Das System ist streng, weil Mangelernährung bei alten Menschen oft übersehen wird. Merke: Ab 12 Punkten ist es okay."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Mangelernährung betrifft bis zu 50% der Heim-Bewohner. Kriterien: Gewichtsverlust ≥5% in 3 Monaten oder ≥10% in 6 Monaten, oder BMI <22 bei über 65-Jährigen. Assessment: MNA-SF (6 Fragen) nach Guigoz (1994). 12-14 = normal, 8-11 = Risiko, 0-7 = Mangelernährung. Folgen: Immunschwäche, Sarkopenie, längere Klinikaufenthalte."

**B1 (245 Zeichen):** "Sehr gut. Mangelernährung ist bei alten Menschen häufig — bis zu 50% in Heimen. Kriterien: >5% Gewichtsverlust in 3 Monaten oder BMI <22 ab 65. Du nutzt den MNA-Test (6 Fragen, Guigoz 1994): 12-14 gut, 8-11 Risiko, 0-7 Mangelernährung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie bewertest du den MNA-SF (6 Fragen)? Was bedeuten die Punkte?"
- **Rückseite:** "MNA Short Form: 0-14 Punkte. 12-14 = normal. 8-11 = Risiko. 0-7 = Mangelernährung. Bei Risiko → Langform mit 18 Fragen. (Guigoz 1994)"
- **Kategorie:** assessment

---

## Baustein 7: dehydratation-im-alter

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-dehydratation
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Du fragst Frau Weber (88): 'Haben Sie Durst?' Sie antwortet: 'Nein, gar nicht.' Sie trinkt nur 600 ml am Tag. Warum darf dich das **nicht** beruhigen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Im Alter **sinkt das Durstgefühl** — eine Exsikkose kann bestehen, ohne dass die Person durstig ist. Empfehlung: mindestens **1,5 Liter Flüssigkeit/Tag** (wenn keine Kontraindikation). Erkennungszeichen: stehende Hautfalte, trockene Schleimhäute, Verwirrtheit, dunkler Urin."

**B1 (240 Zeichen):** "Bei alten Menschen ist das **Durstgefühl schwach**. Sie trinken zu wenig, auch wenn sie dehydriert sind. Empfehlung: mindestens **1,5 Liter pro Tag** trinken. Zeichen für Dehydratation: trockene Haut und Mund, Verwirrtheit, dunkler Urin, stehende Hautfalte."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"**Dehydratation im Alter** (auch Exsikkose) ist lebensbedrohlich und wird oft übersehen, weil das Leitsymptom 'Durst' im Alter abnimmt.

**Physiologische Veränderungen im Alter:**
- Reduziertes Durstempfinden (Osmorezeptoren weniger sensibel)
- Verringertes Gesamtkörperwasser (von 60% im jungen Alter auf ~50% im hohen Alter)
- Verschlechterte Nierenkonzentrationsleistung
- Medikamente (Diuretika, Laxanzien) verstärken Flüssigkeitsverlust

**Empfehlung (DGE):** mindestens **1,5 Liter Flüssigkeit/Tag** (ca. 30 ml/kg Körpergewicht), sofern keine Kontraindikation (Herz-/Niereninsuffizienz).

**Erkennungszeichen:**
- Stehende Hautfalte (Test am Sternum, nicht am Handrücken!)
- Trockene Schleimhäute (Mund, Zunge)
- Neu aufgetretene Verwirrtheit/Desorientierung
- Dunkler, konzentrierter Urin
- Tachykardie, Hypotonie

**Intervention:**
- Trinkprotokoll führen (24h-Bilanz)
- Trinken anregen, auch ohne Durstgefühl (Uhrzeit-basiert)
- Flüssigkeiten in erreichbarer Nähe
- Bei schwerer Exsikkose: ärztliche Rücksprache, ggf. subkutane oder intravenöse Gabe. (WHO World Report on Ageing, 2015)"

**B1 (620 Zeichen):**
"**Dehydratation** (Exsikkose) heißt: zu wenig Flüssigkeit im Körper. Bei alten Menschen ist das sehr gefährlich und oft unbemerkt.

**Warum trinken alte Menschen zu wenig?**
- Das **Durstgefühl ist schwach** — sie merken den Durst nicht.
- Im Körper ist weniger Wasser (50% statt 60% bei Jüngeren).
- Die Nieren arbeiten anders.
- **Medikamente** (z.B. Entwässerungstabletten) ziehen Flüssigkeit raus.

**Empfehlung:** mindestens **1,5 Liter pro Tag** (außer bei Herz-/Nieren-Krankheit).

**Zeichen für Dehydratation:**
- **Hautfalte** bleibt stehen (Test am Brustbein, nicht an der Hand!)
- **Trockener Mund**, trockene Zunge
- **Neue Verwirrtheit** — die Patientin ist plötzlich durcheinander
- **Dunkler Urin**
- Schneller Puls, niedriger Blutdruck

**Was tun?**
- **Trinkprotokoll**: Aufschreiben, was sie trinkt (24 Stunden).
- Regelmäßig zum Trinken erinnern — auch wenn kein Durst.
- Getränk immer in der Nähe.
- Bei starker Dehydratation: Arzt rufen."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Dehydratation, Exsikkose, Trinkprotokoll, Turgor, Osmorezeptoren]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn der Patient keinen Durst hat, ist er auch nicht dehydriert."**
- **Fachbegriff:** Durst-Trugschluss
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — im Alter sinkt das Durstgefühl. Eine ältere Person kann **schwer dehydriert** sein und trotzdem sagen 'Ich habe keinen Durst'. Deshalb fragst du nie nur — du beobachtest Hautfalte, Schleimhäute, Urin. Merke: Durst ist bei alten Menschen ein unzuverlässiges Signal."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — alte Menschen **merken den Durst nicht** mehr. Jemand kann stark dehydriert sein und trotzdem sagen: 'Mir geht es gut.' Du musst die Haut, den Mund und den Urin **selbst** anschauen. Merke: Kein Durst heißt nicht: Kein Problem."

**D2: "Die Hautfaltenprobe macht man am besten am Handrücken."**
- **Fachbegriff:** Prüfstellen-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — am Handrücken ist die Haut im Alter ohnehin dünn und faltig. Eine stehende Hautfalte dort sagt nichts über Dehydratation. **Korrekte Stelle: Brustbein (Sternum)** oder Schlüsselbein. Dort ist die Haut straff geblieben. Merke: Nicht am Handrücken prüfen."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — die Haut am Handrücken ist bei alten Menschen **immer** faltig. Das sagt nichts aus. Du prüfst die Hautfalte am **Brustbein** oder **Schlüsselbein**. Dort ist die Haut noch straff. Merke: Mitte vom Brustkorb, nicht Hand."

**D3: "1,5 Liter pro Tag sind für jeden älteren Menschen Pflicht."**
- **Fachbegriff:** Pauschal-Empfehlungs-Fehler
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — die Empfehlung gilt für **gesunde** ältere Menschen. Bei **Herzinsuffizienz** oder **schwerer Niereninsuffizienz** kann der Arzt eine **Flüssigkeitsbeschränkung** (z.B. 1 Liter/Tag) verordnen, um eine Überwässerung zu verhindern. Du liest immer die ärztliche Anordnung. Merke: Immer individuell, nicht pauschal."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — 1,5 Liter sind **Standard für Gesunde**. Bei **Herzschwäche** oder **Nieren-Problemen** darf die Patientin oft nur **1 Liter** pro Tag trinken. Sonst sammelt sich Wasser im Körper. Du schaust immer, was der Arzt anordnet. Merke: Individuell prüfen."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Bei alten Menschen sinkt das Durstgefühl, das Gesamtkörperwasser und die Nierenkonzentration. Darum: Standardempfehlung 1,5 L/Tag (außer bei Herz-/Niereninsuffizienz), Trinkprotokoll, Hautfaltenprobe am Sternum, Schleimhäute und Urin beobachten. Neue Verwirrtheit ist immer ein Warnsignal für Exsikkose."

**B1 (245 Zeichen):** "Sehr gut. Im Alter ist das Durstgefühl schwach. Du musst aktiv zum Trinken erinnern: mindestens 1,5 Liter pro Tag (wenn das Herz und die Nieren es erlauben). Hautfalte am Brustbein prüfen. Trinkprotokoll führen. Neue Verwirrtheit = Warnung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wo prüfst du die stehende Hautfalte bei alten Menschen und warum nicht am Handrücken?"
- **Rückseite:** "Am Sternum oder Schlüsselbein. Handrücken-Haut ist im Alter physiologisch dünn/faltig → falsch-positiv. (WHO 2015)"
- **Kategorie:** handlung

---

## Baustein 8: altersdepression-gds

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-altersdepression
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Herr Schulz (78) klagt seit Monaten über Rückenschmerzen, Schlafprobleme und Magendruck. Medizinisch ist 'alles in Ordnung'. Er ist allein lebend, Frau vor 2 Jahren gestorben. Was könnte dahinter stecken — und warum übersehen viele es?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "**Altersdepression** zeigt sich oft **atypisch**: körperliche Beschwerden (Schmerzen, Magen, Schlaf) statt Traurigkeit. Assessment mit **Geriatric Depression Scale (GDS-15)** nach Yesavage (1983): 15 Ja/Nein-Fragen. Ab **5 Punkten: Verdacht**, ab **10: wahrscheinlich Depression**."

**B1 (255 Zeichen):** "**Altersdepression** zeigt sich oft **anders** als bei Jüngeren: Die Patientin klagt über **Körper** (Rücken, Magen, Schlaf), nicht über Traurigkeit. Du testest mit der **GDS-15** nach Yesavage (1983): 15 einfache Fragen mit Ja/Nein. Ab **5 Punkten** ist es verdächtig."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (800 Zeichen):**
"**Altersdepression** ist eine der häufigsten psychischen Erkrankungen im Alter: Prävalenz ca. 7-10% bei über 65-Jährigen, in Pflegeheimen bis zu 30%. Sie wird oft übersehen, weil sie **atypisch** auftritt.

**Atypische Symptome im Alter:**
- Körperliche Beschwerden (Schmerzen, Magen-Darm-Probleme, Schwindel) statt Traurigkeit
- Kognitive Einschränkungen — oft verwechselt mit Demenz ('Pseudodemenz')
- Rückzug, Interessenverlust, Antriebslosigkeit
- Schlafstörungen (frühmorgendliches Erwachen)

**Suizidrisiko hoch**: Ältere Männer (besonders alleinlebend) haben die **höchste Suizidrate** aller Altersgruppen. Jeder Hinweis auf Suizidgedanken ist zu dokumentieren und zu melden.

**Assessment — Geriatric Depression Scale (GDS-15) nach Yesavage (1983):**
- 15 Fragen, Ja/Nein-Antworten
- Bearbeitungszeit: ca. 5 Minuten
- **0-4 Punkte:** normal
- **5-9 Punkte:** Verdacht auf Depression
- **10-15 Punkte:** wahrscheinlich Depression

Bei positivem Screening: ärztliche Abklärung, nicht selbst 'diagnostizieren'. Therapie: Psychotherapie, Antidepressiva, Aktivierung, soziale Teilhabe. (Yesavage GDS, 1983)"

**B1 (660 Zeichen):**
"**Altersdepression** ist eine häufige Krankheit bei alten Menschen: 7-10% der über 65-Jährigen, in Pflegeheimen bis zu 30%. Sie wird oft nicht erkannt.

**Warum nicht erkannt?** Alte Menschen zeigen Depression **anders**:
- Sie klagen über den **Körper** (Schmerzen, Magen, Schwindel) — nicht über Traurigkeit
- **Gedächtnisprobleme** — sieht aus wie Demenz ('Pseudodemenz')
- **Ziehen sich zurück**, interessieren sich für nichts mehr
- **Schlafprobleme** — wachen früh auf (3-4 Uhr)

**Suizidgefahr hoch!** Besonders **alleinstehende ältere Männer** haben die **höchste Selbstmordrate** von allen Gruppen. Jeder Hinweis auf Selbstmordgedanken muss dokumentiert und **sofort gemeldet** werden.

**Test: GDS-15 nach Yesavage (1983)**
- **15 Fragen** mit Ja/Nein-Antwort
- Dauert etwa 5 Minuten
- **0-4 Punkte:** normal
- **5-9 Punkte:** Verdacht — Arzt einschalten
- **10-15 Punkte:** wahrscheinlich Depression — Arzt einschalten

Wichtig: Du testest und meldest — aber **du stellst keine Diagnose**. Das macht der Arzt."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Altersdepression, GDS, Pseudodemenz, Suizidalität]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Alte Menschen sind halt oft traurig — das ist normal."**
- **Fachbegriff:** Normalisierungs-Fehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — anhaltende Traurigkeit oder Freudlosigkeit ist **niemals 'normal' im Alter**. Das ist ein Behandlungs-Tabu, das viele alte Menschen unversorgt lässt. Depression im Alter ist eine ernste, behandelbare Krankheit — mit erhöhter Suizidgefahr. Merke: Alter ≠ traurig."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — Traurigkeit im Alter ist **nicht normal**. Das ist eine Krankheit und muss behandelt werden. Viele alte Menschen werden deshalb nicht behandelt. Altersdepression hat eine hohe Selbstmordgefahr. Merke: Alt sein heißt nicht traurig sein."

**D2: "Gedächtnisprobleme bei einem 80-Jährigen sind immer Demenz."**
- **Fachbegriff:** Pseudodemenz-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — auch eine **Depression** kann wie Demenz wirken ('Pseudodemenz'). Der Unterschied: Bei Depression klagt die Person **selbst** über Gedächtnisprobleme und zeigt eher langsames Denken und Rückzug. Bei echter Demenz fällt es eher **anderen** auf. Richtig: erst GDS-15, dann ggf. MMST. Merke: Gedächtnisproblem ≠ automatisch Demenz."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — auch eine **Depression** kann wie Demenz wirken. Das nennt man **Pseudodemenz**. Der Unterschied: Bei Depression **klagt die Person selbst** über Vergessen. Bei Demenz merken es eher die Angehörigen. Erst GDS-Test, dann Demenz-Test. Merke: Nicht automatisch Demenz."

**D3: "Der GDS-Test stellt die Diagnose Depression."**
- **Fachbegriff:** Diagnose-Kompetenz-Fehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — der GDS-15 ist ein **Screening-Instrument**. Er zeigt einen **Verdacht** — die Diagnose 'Depression' stellt immer der Arzt (mit weiterer Untersuchung). Du testest, dokumentierst, meldest — aber du diagnostizierst nicht. Merke: GDS = Verdacht wecken, nicht diagnostizieren."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — der GDS-Test ist nur ein **Suchtest**. Er zeigt einen **Verdacht**. Die Diagnose stellt der **Arzt**. Du als Pflegekraft testest, schreibst es auf und meldest es. Die Diagnose gehört zum Arzt. Merke: GDS = Verdacht, nicht Diagnose."

### Richtig-Feedback
**C1 (300 Zeichen):** "Genau. Altersdepression zeigt sich oft atypisch: körperliche Beschwerden, kognitive Einschränkungen (Pseudodemenz), Rückzug. Prävalenz 7-10% der über 65-Jährigen, in Heimen bis 30%. Assessment: GDS-15 (Yesavage 1983), 5-9 Punkte Verdacht, 10-15 wahrscheinlich. Suizidrisiko besonders hoch bei alleinlebenden Männern — jeder Hinweis ist Pflichtmeldung."

**B1 (255 Zeichen):** "Sehr gut. Altersdepression zeigt sich oft **am Körper** (Schmerzen, Magen, Schlaf), nicht mit Traurigkeit. Test: **GDS-15** nach Yesavage (1983), ab 5 Punkten Verdacht. **Selbstmordgefahr** hoch — besonders bei alleinstehenden älteren Männern. Immer melden."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welcher Test erkennt Altersdepression? Welche Punktwerte bedeuten was?"
- **Rückseite:** "GDS-15 nach Yesavage (1983), 15 Ja/Nein-Fragen. 0-4: normal, 5-9: Verdacht, 10-15: wahrscheinlich Depression. Keine Diagnose — nur Screening."
- **Kategorie:** assessment

---

## Baustein 9: demenzpraevention-finger

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-finger
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "'Wenn Demenz kommt, kommt sie halt.' — Stimmt das? Oder gibt es Dinge, die das Risiko **wirklich messbar** senken? Was würdest du einem 65-jährigen Patienten raten?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Die **FINGER-Studie** (Ngandu, The Lancet 2015) zeigte: Ein **multimodales Programm** senkt das Demenzrisiko messbar. 4 Säulen: **Ernährung**, **Bewegung**, **kognitives Training**, **vaskuläres Monitoring** (Blutdruck, Diabetes, Cholesterin). Einzelmaßnahmen wirken weniger."

**B1 (245 Zeichen):** "Die **FINGER-Studie** (Ngandu, The Lancet 2015) zeigt: Man kann Demenz **vorbeugen**. Wichtig: **Vier Dinge gleichzeitig** machen — **gesund essen**, **viel bewegen**, **Gedächtnis trainieren**, **Blutdruck/Diabetes/Cholesterin checken**. Einzeln bringt wenig."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (810 Zeichen):**
"**FINGER** steht für *Finnish Geriatric Intervention Study to Prevent Cognitive Impairment and Disability*. Die Studie (Ngandu et al., The Lancet 2015) untersuchte 1260 Personen (60-77 Jahre) mit erhöhtem Demenzrisiko über 2 Jahre. Die Interventionsgruppe zeigte nach 2 Jahren **signifikant bessere kognitive Leistung** — erstmals wurde wissenschaftlich belegt, dass Demenz **teilweise vermeidbar** ist.

**Die vier Säulen des FINGER-Programms:**

1. **Ernährung** — mediterrane Kost: viel Obst, Gemüse, Fisch, Olivenöl, wenig rotes Fleisch und Zucker.
2. **Körperliche Bewegung** — nach WHO-Empfehlung 150 Min moderate Bewegung/Woche + Krafttraining 2× pro Woche.
3. **Kognitives Training** — computergestütztes Gedächtnistraining, Lernen neuer Fähigkeiten, soziale Teilhabe.
4. **Vaskuläres Risikomanagement** — Blutdruck, Blutzucker, Cholesterin im Normbereich halten.

**Pflegerische Beratung:**
- Nicht eine einzelne Empfehlung, sondern **alle vier gemeinsam** umsetzen.
- Auch kleine Verbesserungen in allen Bereichen wirken besser als perfekte Umsetzung in einem Bereich.
- Je früher begonnen, desto besser — aber auch mit 75 Jahren noch effektiv.

(Ngandu FINGER, Lancet 2015)"

**B1 (680 Zeichen):**
"Die **FINGER-Studie** kommt aus Finnland. Sie wurde 2015 in der bekannten Zeitschrift *The Lancet* veröffentlicht (Ngandu und andere).

**Was hat die Studie untersucht?** 1260 Menschen zwischen 60 und 77 Jahren mit **erhöhtem Demenzrisiko** — über 2 Jahre.

**Ergebnis**: Die Gruppe mit Intervention hatte ein **besseres Gedächtnis** als die Vergleichsgruppe. Zum ersten Mal war wissenschaftlich bewiesen: **Man kann Demenz teilweise verhindern.**

**Die vier Säulen:**

1. **Gesund essen** — **mediterrane Ernährung**: viel Obst, Gemüse, Fisch, Olivenöl, wenig Fleisch und Zucker.
2. **Bewegung** — WHO-Empfehlung: **150 Minuten pro Woche** moderate Bewegung + **Krafttraining 2× pro Woche**.
3. **Gehirn-Training** — Gedächtnisspiele, neue Dinge lernen, Freunde treffen.
4. **Gefäße schützen** — **Blutdruck, Blutzucker, Cholesterin** kontrollieren lassen.

**Wichtig für deine Beratung:**
- **Alle vier zusammen** bringen den Effekt — nicht einzeln.
- Auch kleine Schritte helfen.
- Auch mit 75 Jahren ist es nicht zu spät."

- **Erklärungs-Step:** stepType `reveal` (4 Säulen aufdecken)
- **Glossar-Begriffe:** [FINGER-Studie, mediterrane Ernährung, vaskuläres Risiko, kognitive Reserve]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Demenz ist genetisch — Prävention bringt nichts."**
- **Fachbegriff:** Genetik-Fatalismus
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die Genetik erklärt nur einen Teil des Demenzrisikos. Die FINGER-Studie (2015) zeigte klar: **Lebensstil beeinflusst das Risiko messbar**. Auch bei genetischer Vorbelastung (z.B. APOE4-Gen) wirken die vier Säulen. Merke: Gene laden die Pistole, der Lebensstil drückt ab."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — Gene sind **nicht alles**. Die FINGER-Studie (2015) hat bewiesen: Der Lebensstil kann Demenz **teilweise verhindern**. Auch wer die Gene hat, kann mit gesunder Ernährung und Bewegung das Risiko senken. Merke: Gene sind nicht Schicksal."

**D2: "Kreuzworträtsel allein reichen aus, um Demenz zu verhindern."**
- **Fachbegriff:** Einzelmaßnahmen-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die **Kombination** aller vier Säulen ist der Wirkfaktor. Kreuzworträtsel (kognitives Training) allein zeigt in Studien **kaum Wirkung**. Erst mit Ernährung, Bewegung und vaskulärem Monitoring zusammen wird der Effekt signifikant. Merke: FINGER = multimodal, nicht Einzelmaßnahme."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — nur Gehirn-Training reicht **nicht**. Kreuzworträtsel allein zeigen kaum Wirkung. Du brauchst **alle vier**: Essen, Bewegung, Gehirn-Training und Blutdruck/Zucker/Cholesterin. Merke: Alle vier Säulen zusammen wirken."

**D3: "FINGER wirkt nur bei Menschen unter 65."**
- **Fachbegriff:** Altersgrenzen-Mythos
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — die FINGER-Studie selbst umfasste **Personen von 60-77 Jahren**. Spätere Studien zeigen Effekte auch bei über 75-Jährigen. Je früher, desto besser — aber zu spät ist es fast nie. Merke: Auch mit 75+ wirkt die Kombination aus Ernährung, Bewegung und vaskulärem Monitoring."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — die FINGER-Studie war mit Menschen **60 bis 77 Jahre** alt. Auch mit **75 Jahren** wirken die vier Säulen noch. Früher ist besser, aber zu spät ist es fast nie. Merke: Auch im hohen Alter lohnt es sich."

### Richtig-Feedback
**C1 (305 Zeichen):** "Genau. Die FINGER-Studie (Ngandu, Lancet 2015) war der erste wissenschaftliche Beweis, dass Demenz teilweise vermeidbar ist. Vier Säulen: mediterrane Ernährung, körperliche Bewegung, kognitives Training, vaskuläres Risikomanagement (Blutdruck, Diabetes, Cholesterin). Wirksam wird erst die Kombination aller vier — nicht die einzelne Maßnahme."

**B1 (260 Zeichen):** "Sehr gut. Die FINGER-Studie (Ngandu, Lancet 2015) hat bewiesen: Demenz kann man **teilweise verhindern**. Vier Säulen gleichzeitig: **gesund essen**, **bewegen**, **Gehirn trainieren**, **Blutdruck/Zucker/Cholesterin kontrollieren**. Einzelne Maßnahmen wirken kaum."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 4 Säulen zeigte die FINGER-Studie zur Demenzprävention?"
- **Rückseite:** "1) Mediterrane Ernährung 2) Bewegung (WHO 150 Min/Woche + Kraft 2×) 3) Kognitives Training 4) Vaskuläres Monitoring (RR, BZ, Cholesterin). Nur Kombination wirkt. (Ngandu Lancet 2015)"
- **Kategorie:** fakt

---

## Baustein 10: kognitive-aktivierung-teilhabe

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-kognitive-aktivierung
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Eine 83-jährige Bewohnerin sitzt den ganzen Tag im Sessel, schaut stumm aus dem Fenster. Keine Besuche, keine Aktivität. Was passiert in ihrem Gehirn — und was könntest du als Pflegekraft konkret anbieten?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "**Kognitive Aktivierung** und **soziale Teilhabe** sind zentrale Schutzfaktoren gegen Demenz und Depression. Konzept: 'kognitive Reserve' — wer geistig und sozial aktiv bleibt, gleicht Hirnschäden länger aus. Maßnahmen: Biografiearbeit, Singen, Spielrunden, Spaziergänge in Gruppen."

**B1 (245 Zeichen):** "**Kognitive Aktivierung** heißt: das Gehirn **beschäftigen**. **Soziale Teilhabe** heißt: unter Menschen sein. Beides schützt vor Demenz und Depression. Das Konzept: **kognitive Reserve** — wer geistig aktiv bleibt, hat länger weniger Symptome. Beispiele: Singen, Spielen, Spazieren, Gespräche."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Das Konzept **kognitive Reserve** besagt: Ein aktives Gehirn bildet mehr neuronale Verbindungen. Selbst wenn Hirnzellen absterben (wie bei Alzheimer), können die Symptome durch diese Reserven länger kompensiert werden.

**Konkrete Maßnahmen für die Pflege:**

- **Biografiearbeit**: Fotos ansehen, Lebensgeschichte erzählen lassen, bekannte Lieder spielen. Aktiviert Langzeitgedächtnis und Identität.
- **10-Minuten-Aktivierung** (Schmidt-Hackenberg): kurze, regelmäßige Einheiten zur gezielten Aktivierung.
- **Musik und Singen**: aktiviert auch bei fortgeschrittener Demenz.
- **Bewegungsspiele**: Sitztanz, Ballspiele im Sitzen, Gymnastikgruppe.
- **Soziale Gruppen**: Kaffeerunden, Zeitungsrunde, Vorleserunde.

**Einsamkeit als Gesundheitsrisiko**: Holt-Lunstad (2015) zeigte: **Soziale Isolation ist so schädlich wie 15 Zigaretten/Tag** und erhöht die Sterblichkeit um ca. 26-32%.

**Pflegerische Aufgabe:**
- Teilnahme an Gruppenangeboten anbieten (nie erzwingen)
- Besuche organisieren (Familie, Ehrenamtliche)
- Tagesstruktur gestalten, die Aktivität anregt

(Holt-Lunstad Einsamkeit, 2015; WHO World Report on Ageing, 2015)"

**B1 (620 Zeichen):**
"**Kognitive Reserve** heißt: Das Gehirn bildet viele Verbindungen, wenn es aktiv bleibt. Wer viel denkt und erlebt, kann auch bei Demenz **länger** ohne Symptome leben.

**Was du in der Pflege machen kannst:**

- **Biografie-Arbeit**: Fotos anschauen, Lebensgeschichte erzählen lassen, alte Lieder hören.
- **10-Minuten-Aktivierung**: Kurze, **regelmäßige** Übungen (nach Schmidt-Hackenberg).
- **Musik und Singen**: Wirkt auch bei schwerer Demenz.
- **Bewegungs-Spiele**: Sitz-Tanz, Ball werfen im Sitzen, Gymnastik.
- **Gruppen**: Kaffee-Runde, Zeitung lesen, Vorlese-Gruppe.

**Einsamkeit ist gefährlich!** Eine große Studie von Holt-Lunstad (2015) hat gezeigt: **Einsamkeit ist so ungesund wie 15 Zigaretten am Tag.** Das Risiko, früher zu sterben, steigt um **26-32%**.

**Deine Aufgabe:**
- Angebote machen — aber nicht zwingen.
- Besuche organisieren (Familie, Ehrenamt).
- Struktur geben, die Aktivität anregt."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [kognitive Reserve, Biografiearbeit, 10-Minuten-Aktivierung, soziale Teilhabe]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn jemand Demenz hat, bringt Aktivierung nichts mehr."**
- **Fachbegriff:** Aussichtslosigkeits-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — auch bei fortgeschrittener Demenz wirken **Musik, Bewegung und vertraute Erinnerungen**. Selbst wenn Sprache und Orientierung fehlen, bleiben emotionale Reaktionen erhalten. Merke: Demenz-Aktivierung zielt nicht auf 'lernen', sondern auf **Wohlbefinden** und **Teilhabe** im Moment."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — auch bei starker Demenz wirken **Musik, Bewegung und Erinnerungen**. Auch wenn jemand nicht mehr spricht — **Gefühle** bleiben. Ziel ist nicht 'lernen', sondern **Wohlgefühl** und **dabei sein**. Merke: Aktivierung ist immer sinnvoll."

**D2: "Einsamkeit ist schlimm, aber kein echtes Gesundheitsrisiko."**
- **Fachbegriff:** Unterschätzung-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — die Meta-Analyse von Holt-Lunstad (2015) zeigte: **Soziale Isolation ist so schädlich wie 15 Zigaretten/Tag** und steigert die Sterblichkeit um 26-32%. Einsamkeit ist ein harter Risikofaktor, vergleichbar mit Rauchen oder Adipositas. Merke: Einsamkeit = medizinisches Problem."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Einsamkeit ist ein echtes Gesundheitsrisiko**. Holt-Lunstad (2015) hat gezeigt: Einsamkeit ist so schlimm wie **15 Zigaretten pro Tag**. Das Risiko zu sterben steigt um 26-32%. Merke: Einsamkeit ist wie Rauchen — ein medizinisches Problem."

**D3: "Aktivierung heißt: So viel wie möglich an Angeboten anbieten."**
- **Fachbegriff:** Überforderungs-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Überstimulation** kann gerade bei Demenz zu Unruhe, Aggression oder Rückzug führen. Wichtig ist **passgenaue, kurze Einheiten** (z.B. 10-Minuten-Aktivierung) und **Ruhepausen**. Qualität und Passung schlagen Quantität. Merke: Weniger, aber regelmäßig und individuell — nicht ein volles Programm."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — zu viele Angebote **überfordern**. Besonders bei Demenz. Dann wird die Person unruhig oder zieht sich zurück. Besser: **kurze Einheiten** (10 Minuten), dann Ruhepausen. **Passend** zur Person, nicht viel. Merke: Weniger, aber regelmäßig."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Kognitive Aktivierung + soziale Teilhabe nutzen die kognitive Reserve, verlangsamen Symptome und schützen vor Depression. Maßnahmen: Biografiearbeit, 10-Minuten-Aktivierung (Schmidt-Hackenberg), Musik, Bewegungsspiele, Gruppen. Einsamkeit ist laut Holt-Lunstad (2015) vergleichbar mit 15 Zigaretten/Tag — ein harter Risikofaktor."

**B1 (255 Zeichen):** "Sehr gut. **Kognitive Aktivierung** und **soziale Teilhabe** schützen das Gehirn und die Seele. Wichtig: kurze Einheiten (10 Minuten), Biografiearbeit, Musik, Gruppen. Einsamkeit ist laut Holt-Lunstad (2015) **so schädlich wie 15 Zigaretten am Tag**."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie schädlich ist Einsamkeit für ältere Menschen (Holt-Lunstad 2015)?"
- **Rückseite:** "Vergleichbar mit 15 Zigaretten/Tag. Erhöht Sterblichkeit um 26-32%. Einsamkeit ist ein harter medizinischer Risikofaktor. (Holt-Lunstad 2015)"
- **Kategorie:** fakt

---

## Baustein 11: bewegung-who-empfehlung

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-bewegung
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Wie viel Bewegung braucht ein 75-Jähriger pro Woche, um gesund zu bleiben? Und welche **zwei** Arten von Bewegung sind beide wichtig — und warum nicht nur eine?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Die **WHO-Empfehlung** für über 65-Jährige: mindestens **150 Minuten moderate** Ausdauerbewegung pro Woche (z.B. 5× 30 Min Spazieren) **PLUS** **Krafttraining an 2 Tagen pro Woche**. Zusätzlich: **Balance-Übungen** zur Sturzvermeidung 2-3× pro Woche."

**B1 (240 Zeichen):** "Die **WHO** empfiehlt ab 65 Jahren: **150 Minuten moderate Bewegung pro Woche** (z.B. 5 mal 30 Minuten gehen) **UND** **Krafttraining an 2 Tagen** pro Woche. Dazu: **Balance-Übungen** 2-3 mal pro Woche, damit die Person nicht stürzt."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Die **WHO-Empfehlung für körperliche Aktivität ab 65 Jahren** umfasst drei Komponenten:

1. **Ausdauer**: mindestens **150 Minuten pro Woche moderate** Aktivität (Puls erhöht, aber noch Gespräche möglich) ODER 75 Min intensive Aktivität. Beispiele: zügiges Spazieren, Fahrradfahren, Schwimmen. Aufteilbar in Einheiten ≥10 Min.

2. **Kraft**: an **mindestens 2 Tagen pro Woche** Übungen für alle großen Muskelgruppen. Beispiele: Kniebeugen am Stuhl, Thera-Band, Hanteltraining. Schützt vor Sarkopenie.

3. **Balance**: **2-3× pro Woche** gezielte Gleichgewichts-Übungen (z.B. auf einem Bein stehen, Tandemstand). Senkt Sturzrisiko um ca. 20-30%.

**Für Frail-Menschen**: Selbst bei schwer Gebrechlichen sind Balance und Kraftübungen (am Stuhl, im Sitzen) möglich und wirksam. **Lebensprinzip**: weniger sitzen, mehr aufstehen. (WHO World Report on Ageing, 2015)"

**B1 (590 Zeichen):**
"Die **WHO empfiehlt** ab 65 Jahren **drei Dinge** gleichzeitig:

**1. Ausdauer** — mindestens **150 Minuten pro Woche** moderat (man schwitzt, kann aber noch reden).
Das sind z.B. **5 mal 30 Minuten** gehen. Andere Beispiele: Fahrrad, Schwimmen. Kann auch in kleine Einheiten geteilt werden (mindestens 10 Minuten).

**2. Kraft** — **2 Tage pro Woche** für alle großen Muskel-Gruppen.
Beispiele: Kniebeugen am Stuhl, Thera-Band, Hantel-Übungen. **Wichtig gegen Sarkopenie.**

**3. Balance** — **2 bis 3 mal pro Woche** Gleichgewichts-Übungen (z.B. auf einem Bein stehen). Das **senkt Stürze um 20-30%**.

**Auch für schwache Menschen:** Selbst bei starker Gebrechlichkeit gibt es Übungen im Sitzen oder am Stuhl. **Der wichtigste Grundsatz: weniger sitzen, mehr aufstehen.**"

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [moderate Aktivität, Ausdauer, Kraft, Balance-Training, Tandemstand]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Spazierengehen allein ist für ältere Menschen genug."**
- **Fachbegriff:** Monobewegungs-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Spazieren deckt nur die **Ausdauer-Komponente** ab. Für den Muskelerhalt (gegen Sarkopenie) braucht es **Krafttraining** an 2 Tagen pro Woche. Für Sturzsicherheit zusätzlich **Balance-Übungen**. Merke: Die WHO nennt immer drei Komponenten — Ausdauer, Kraft, Balance."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Spazieren reicht nicht**. Spazieren ist nur Ausdauer. Du brauchst auch **Kraft** (2 Tage/Woche) und **Balance** (2-3 Tage/Woche). Sonst kommt Muskel-Verlust oder Sturz. Merke: Alle drei Arten — Ausdauer, Kraft, Balance."

**D2: "Wer frail ist, darf kein Krafttraining machen — zu gefährlich."**
- **Fachbegriff:** Risiko-Verwechslung
- **Feedback (C1, 275 Zeichen):** "Genau umgekehrt — Frail-Menschen **profitieren am meisten** vom Krafttraining, weil sie den höchsten Muskelabbau haben. Durchgeführt wird es angepasst: sitzend, mit Thera-Band, unter Anleitung. Studien zeigen Muskelzuwachs selbst bei über 90-Jährigen. Merke: Je schwächer, desto wichtiger — aber angepasst."
- **Feedback (B1, 240 Zeichen):** "Das Gegenteil stimmt — **frail-Menschen brauchen Krafttraining am meisten**. Nur angepasst: im Sitzen, mit Thera-Band, langsam. Studien zeigen: Auch 90-Jährige bauen Muskeln auf. Merke: Schwach = Kraftübungen besonders wichtig."

**D3: "Bei alten Menschen muss die Bewegung intensiv sein, sonst bringt sie nichts."**
- **Fachbegriff:** Intensitäts-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — die WHO empfiehlt **moderate** Aktivität (leichtes Schwitzen, Unterhaltung möglich). Intensives Training ist optional (75 Min/Woche). Bei älteren Menschen ist **moderate Intensität** ausreichend und sicherer. Merke: Moderat reicht — intensiv ist nicht besser, nur riskanter."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — für alte Menschen reicht **moderate** Bewegung. Das heißt: Man schwitzt leicht, kann aber noch reden. 150 Minuten pro Woche sind genug. **Intensiv ist nicht besser**, nur riskanter. Merke: Moderate Bewegung genügt."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Die WHO empfiehlt für über 65-Jährige drei Komponenten: 150 Min/Woche moderate Ausdauer, Krafttraining an 2 Tagen/Woche (gegen Sarkopenie), Balance-Übungen 2-3×/Woche (Sturzprävention, Risikoreduktion 20-30%). Auch für frail-Menschen angepasst möglich und wirksam. Grundprinzip: weniger sitzen, mehr aufstehen."

**B1 (255 Zeichen):** "Sehr gut. Die WHO empfiehlt ab 65 Jahren: **150 Minuten moderate Bewegung pro Woche** + **Kraft 2 Tage pro Woche** + **Balance 2-3 mal pro Woche**. Alle drei zusammen schützen vor Muskelabbau, Demenz, Depression und Stürzen. Motto: weniger sitzen, mehr aufstehen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was empfiehlt die WHO über 65-Jährigen pro Woche an Bewegung? (3 Komponenten)"
- **Rückseite:** "150 Min/Woche moderate Ausdauer + Kraft an 2 Tagen + Balance 2-3×/Woche. (WHO 2015)"
- **Kategorie:** fakt

---

## Baustein 12: sturzassessment-tug

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-tug
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Du sollst bei Frau Köhler (79) das Sturzrisiko einschätzen. Du hast keine Geräte, nur eine Stoppuhr und einen Stuhl. Welcher einfache Test würde funktionieren — und was würde er dir verraten?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Der **Timed Up and Go (TUG)** nach Podsiadlo & Richardson (1991) ist der Standard-Sturztest: Aufstehen vom Stuhl → 3 m gehen → umdrehen → zurück → hinsetzen. Gestoppt wird die Zeit. **<10 s: normal**. **10-20 s: erhöhtes Risiko**. **>20 s: hohes Sturzrisiko**, pflegerischer Handlungsbedarf."

**B1 (250 Zeichen):** "Der **TUG-Test** (Timed Up and Go, Podsiadlo & Richardson 1991) ist der wichtigste Sturz-Test. Ablauf: Vom Stuhl **aufstehen**, **3 Meter gehen**, **umdrehen**, **zurückgehen**, **hinsetzen**. Du misst die Zeit. **Unter 10 Sekunden: gut. 10-20: Risiko. Über 20: hohes Risiko**."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"**Timed Up and Go (TUG)** nach Podsiadlo & Richardson (1991) — einfachstes, international genutztes Sturz-Screening-Instrument.

**Durchführung:**
1. Patient sitzt auf einem Stuhl mit Armlehnen (Sitzhöhe ca. 46 cm).
2. Auf Kommando 'Los!' aufstehen, **3 Meter gehen**, um eine Markierung umdrehen.
3. Zurückgehen und wieder hinsetzen.
4. **Zeitmessung**: vom 'Los' bis zum Hinsetzen.
5. Gewohntes Schuhwerk und übliche Gehhilfen sind erlaubt.

**Auswertung:**
- **<10 Sekunden**: altersgemäß normal, kein erhöhtes Sturzrisiko.
- **10-20 Sekunden**: beginnendes Sturzrisiko, weitere Abklärung sinnvoll.
- **>20 Sekunden**: hohes Sturzrisiko — **pflegerischer Handlungsbedarf**: Assessment vertiefen (DNQP Expertenstandard Sturzprophylaxe 2022), Umgebung anpassen, Interventionsplan.
- **>30 Sekunden**: meist deutliche Einschränkung der Selbstständigkeit.

**Ergänzend:** **Chair-Rise-Test** (5× Aufstehen ohne Arme), **Tandem-Stand**, **Barthel-Index** für Alltagsfähigkeiten.

Der TUG allein ist **kein Diagnose-Instrument** — er triggert weitere Abklärung. (Podsiadlo & Richardson 1991; DNQP Sturzprophylaxe 2022)"

**B1 (640 Zeichen):**
"Der **TUG-Test** (Timed Up and Go) nach Podsiadlo und Richardson (1991) ist der einfachste Sturz-Test weltweit.

**So führst du ihn durch:**
1. Die Patientin sitzt auf einem **Stuhl mit Armlehnen** (normale Sitzhöhe).
2. Du sagst: **'Los!'** — sie soll aufstehen, **3 Meter gehen**, um eine Markierung herum, **zurückgehen** und sich wieder hinsetzen.
3. Du **misst die Zeit** vom 'Los' bis zum Sitzen.
4. Sie darf ihre **gewohnten Schuhe** und **Gehhilfen** (z.B. Rollator) benutzen.

**Was bedeutet die Zeit?**
- **Unter 10 Sekunden**: normal, kein erhöhtes Sturzrisiko.
- **10-20 Sekunden**: **Risiko** — weitere Tests sinnvoll.
- **Über 20 Sekunden**: **hohes Sturzrisiko** — du musst **handeln** (Umgebung sichern, DNQP-Maßnahmen, Plan machen).
- **Über 30 Sekunden**: Die Patientin ist im Alltag stark eingeschränkt.

**Weitere Tests:** Chair-Rise (5× aufstehen ohne Arme), Tandem-Stand, Barthel-Index.

**Wichtig**: Der TUG ist **kein Diagnose-Test**. Er ist ein **Warnsignal** und leitet weitere Schritte ein."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [TUG, Sturzrisiko, Gehgeschwindigkeit, Chair-Rise]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Beim TUG darf der Patient keine Gehhilfen verwenden — sonst ist der Test ungültig."**
- **Fachbegriff:** Hilfsmittel-Verbotsfehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — **gewohnte Gehhilfen** (Rollator, Stock) sind beim TUG **erlaubt und erwünscht**. Der Test soll die **reale Alltagsmobilität** abbilden, nicht eine Idealleistung. Ohne Rollator wäre der Test bei Rollator-Nutzern nicht aussagekräftig. Merke: Alltagsmobilität messen, nicht 'pur'."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — der **Rollator** oder **Stock** darf benutzt werden! Der Test soll zeigen, wie die Patientin **im Alltag** geht. Ohne Hilfsmittel wäre der Test für Rollator-Nutzer falsch. Merke: Gewohnte Hilfsmittel sind erlaubt."

**D2: "Eine Zeit von 15 Sekunden beim TUG ist völlig unauffällig."**
- **Fachbegriff:** Auswertungs-Fehler
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — 15 Sekunden liegen im Bereich **10-20 s: erhöhtes Sturzrisiko**. Eine weitere Abklärung (Chair-Rise, Balance-Test, Medikamenten-Check) ist sinnvoll. Normal wäre **unter 10 Sekunden**. Merke: Ab 10 s wird es auffällig — nicht erst ab 20 s."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — 15 Sekunden sind schon **Risiko** (10-20 Sekunden). Normal ist **unter 10 Sekunden**. Du machst weitere Tests und beobachtest besser. Merke: Ab 10 Sekunden wird es auffällig, nicht erst ab 20."

**D3: "Der TUG stellt die Diagnose 'Sturzneigung'."**
- **Fachbegriff:** Diagnose-Fehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — der TUG ist ein **Screening-Test**, kein Diagnose-Instrument. Er zeigt, wer **weiter abgeklärt** werden sollte. Die 'Diagnose Sturzrisiko' ergibt sich aus der Gesamtschau: Anamnese, Medikamente, Umgebung, weitere Tests. Merke: TUG = Warnlicht, nicht Diagnose."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — der TUG ist nur ein **Such-Test**. Er zeigt: 'Hier muss ich mehr prüfen.' Die Einschätzung 'hohes Sturzrisiko' kommt aus **mehreren** Infos (Anamnese, Medikamente, Wohnung, weitere Tests). Merke: TUG = Warnsignal, keine Diagnose."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Der TUG nach Podsiadlo & Richardson (1991): aufstehen, 3 m gehen, umdrehen, zurück, hinsetzen — Zeit messen. <10 s normal, 10-20 s Risiko, >20 s hohes Risiko (pflegerischer Handlungsbedarf nach DNQP Sturzprophylaxe 2022). Gewohnte Hilfsmittel erlaubt. TUG ist Screening, kein Diagnose-Instrument."

**B1 (245 Zeichen):** "Sehr gut. **TUG-Test**: Aufstehen, 3 m gehen, umdrehen, zurück, hinsetzen. **Zeit messen**. Unter 10 s = normal. 10-20 s = Risiko. Über 20 s = hohes Sturzrisiko → handeln. Gehhilfen erlaubt. Der TUG ist ein Warnsignal — keine Diagnose. (Podsiadlo 1991)"

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie läuft der TUG-Test ab und was bedeuten die Zeiten?"
- **Rückseite:** "Aufstehen, 3 m, umdrehen, zurück, hinsetzen. <10 s normal, 10-20 s Risiko, >20 s hohes Risiko. Gewohnte Hilfsmittel erlaubt. (Podsiadlo & Richardson 1991)"
- **Kategorie:** assessment

---

## Baustein 13: barthel-index

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-barthel
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Du willst herausfinden, wie selbstständig Herr Berger (82) im Alltag noch ist. Welche 10 Alltagsbereiche würdest du anschauen, um das zu messen — und warum genau diese?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Der **Barthel-Index** (Mahoney & Barthel, 1965) misst die **Selbstständigkeit in Alltagsaktivitäten (ADL)**: 10 Bereiche, 0-100 Punkte. **100 Punkte: voll selbstständig**. **≤30 Punkte: stark pflegeabhängig**. Wird bei Aufnahme und regelmäßig zur Verlaufskontrolle genutzt."

**B1 (240 Zeichen):** "Der **Barthel-Index** (Mahoney & Barthel, 1965) misst, wie **selbstständig** jemand im Alltag ist. Er hat **10 Bereiche** (Essen, Waschen, Anziehen …) und **0-100 Punkte**. **100 Punkte**: voll selbstständig. **30 oder weniger**: stark pflegebedürftig."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Der **Barthel-Index** nach Mahoney & Barthel (1965) ist das international meistgenutzte ADL-Assessment (*Activities of Daily Living*). Er misst **nicht was jemand theoretisch könnte**, sondern **was er tatsächlich tut** (Performance, nicht Kapazität).

**10 Bereiche, Punktvergabe 0/5/10/15:**
1. Essen
2. Bett-/Rollstuhltransfer
3. Persönliche Pflege (Waschen, Rasieren, Zähneputzen)
4. Toilettenbenutzung
5. Baden
6. Gehen (oder Fortbewegung mit Rollstuhl)
7. Treppensteigen
8. An-/Auskleiden
9. Stuhlkontrolle
10. Urinkontrolle

**Auswertung:**
- **100 Punkte**: volle Selbstständigkeit
- **65-95**: weitgehend selbstständig
- **35-60**: teilweise pflegeabhängig
- **≤30**: stark pflegeabhängig

**Einsatz:**
- Bei Aufnahme (Ausgangslage)
- Regelmäßig (z.B. wöchentlich in Reha, monatlich im Heim)
- Bei Veränderungen (Krankenhauseinweisung, neue Erkrankung)

Verwandt: **Erweiterter Barthel-Index (EBI)** für höhere Differenzierung, **FIM (Functional Independence Measure)** mit 18 Items. (Barthel-Index, Mahoney & Barthel 1965)"

**B1 (625 Zeichen):**
"Der **Barthel-Index** (Mahoney und Barthel, 1965) ist der wichtigste Test für **Selbstständigkeit im Alltag**. Er misst: **Was tut die Person wirklich?** (nicht: Was könnte sie?)

**10 Bereiche** — für jeden bekommt die Person 0, 5, 10 oder 15 Punkte:
1. **Essen**
2. **Transfer** (vom Bett zum Rollstuhl)
3. **Waschen** (sich pflegen, Zähneputzen)
4. **Toilette** benutzen
5. **Baden**
6. **Gehen** (auch mit Rollstuhl)
7. **Treppen steigen**
8. **An- und Ausziehen**
9. **Stuhl** halten können
10. **Urin** halten können

**Punkte insgesamt**: **0 bis 100**
- **100**: voll selbstständig
- **65-95**: meistens selbstständig
- **35-60**: teilweise auf Pflege angewiesen
- **30 oder weniger**: stark pflegebedürftig

**Wann machst du den Test?**
- Bei der **Aufnahme** (Ausgangs-Stand)
- **Regelmäßig** (jede Woche in der Reha, jeden Monat im Heim)
- **Nach Veränderungen** (neue Krankheit, Krankenhaus)"

- **Erklärungs-Step:** stepType `reveal` (10 Bereiche aufdecken)
- **Glossar-Begriffe:** [Barthel-Index, ADL, Performance, FIM]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Der Barthel-Index misst das kognitive Können."**
- **Fachbegriff:** Dimensions-Verwechslung
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — der Barthel-Index misst **körperliche ADL-Selbstständigkeit**, nicht Kognition. Für Kognition nutzt du den **MMST** (Mini-Mental-Status-Test) oder Uhren-Zeichentest. Beide zusammen ergeben ein vollständiges Bild. Merke: Barthel = Körper/Alltag, MMST = Denken."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — der Barthel misst **Alltag** (Essen, Waschen, Gehen), nicht das **Denken**. Für das Denken nutzt du den **MMST**. Beide Tests zusammen geben das ganze Bild. Merke: Barthel = Alltag, MMST = Gedächtnis."

**D2: "Der Barthel-Index misst, was jemand theoretisch könnte."**
- **Fachbegriff:** Kapazität-vs-Performance-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — der Barthel misst die **Performance** (was die Person **tatsächlich tut**), nicht die theoretische Fähigkeit. Wenn jemand sich theoretisch alleine waschen könnte, es aber wegen Schmerzen nicht tut, wird das **nicht** als Punkt gewertet. Merke: Beobachtung, nicht Einschätzung."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — du fragst nicht: 'Könnten Sie das?' Du schaust: **Was macht die Person wirklich?** Wenn sie theoretisch allein essen könnte, es aber nicht tut (z.B. wegen Schmerzen), gibt es **keine Punkte**. Merke: Du beobachtest, nicht schätzt."

**D3: "Bei 60 Barthel-Punkten ist die Person voll selbstständig."**
- **Fachbegriff:** Auswertungs-Verwechslung
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — 60 Punkte heißen **teilweise pflegeabhängig** (Bereich 35-60). Voll selbstständig ist nur bei **100 Punkten**. Bei 60 braucht die Person in mehreren Bereichen Hilfe — du planst gezielte Unterstützung. Merke: Nur 100 = voll selbstständig, nicht 'ab 60 aufwärts'."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — 60 Punkte sind **teilweise Hilfe nötig**. Nur **100 Punkte** heißen 'voll selbstständig'. Bei 60 Punkten braucht die Person in manchen Bereichen Hilfe. Merke: Nur 100 ist ganz selbstständig."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Der Barthel-Index (Mahoney & Barthel, 1965) misst ADL-Selbstständigkeit in 10 Bereichen, 0-100 Punkte. Wichtig: Performance (tatsächliches Tun), nicht Kapazität. 100 = voll selbstständig, 65-95 weitgehend selbstständig, 35-60 teilweise pflegeabhängig, ≤30 stark pflegeabhängig. Einsatz bei Aufnahme, regelmäßig und nach Veränderungen."

**B1 (245 Zeichen):** "Sehr gut. Der **Barthel-Index** (1965) misst **Alltags-Selbstständigkeit** in **10 Bereichen** (0-100 Punkte). Nur **100 = voll selbstständig**. Du misst, was die Person **wirklich tut**, nicht was sie könnte. Einsatz: bei Aufnahme, regelmäßig und bei Veränderung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was misst der Barthel-Index und wie viele Punkte bedeuten 'voll selbstständig'?"
- **Rückseite:** "ADL-Selbstständigkeit in 10 Bereichen (Essen, Transfer, Waschen, Toilette, Baden, Gehen, Treppen, An-/Auskleiden, Stuhl-/Urinkontrolle). 0-100 Punkte, 100 = voll selbstständig. (Mahoney & Barthel 1965)"
- **Kategorie:** assessment

---

## Baustein 14: kognitive-tests

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-kognition
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn du prüfen willst, ob ein älterer Patient kognitive Einschränkungen hat — welche drei unterschiedlichen Tests kennst du dafür, und warum reicht nicht **ein** Test?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "**MMST** (Mini-Mental-Status-Test, Folstein 1975): 30 Fragen, 0-30 Punkte — ≤23: Verdacht auf Demenz. **Uhren-Zeichentest**: einfacher Zusatz-Test. **Mini-Cog**: 3-Wort-Wiedergabe + Uhren-Test in 3 Min. Mehrere Tests werden kombiniert, weil jeder andere Hirnfunktionen prüft."

**B1 (255 Zeichen):** "Es gibt mehrere **Gedächtnis-Tests**. Der bekannteste ist der **MMST** (Mini-Mental-Status-Test): **30 Fragen, 30 Punkte**. **Unter 24 Punkte: Verdacht auf Demenz**. Dazu: **Uhren-Zeichentest** (Zeichne eine Uhr) und **Mini-Cog** (3 Wörter + Uhr, dauert 3 Minuten)."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"Kognitive Einschränkungen werden mit mehreren Tests beurteilt, weil sie verschiedene Bereiche prüfen (Gedächtnis, Sprache, Räumlichkeit, Exekutivfunktionen):

**1. MMST — Mini-Mental-Status-Test** (Folstein 1975)
- **30 Fragen**, Bearbeitungszeit ca. 10 Min
- Prüft: Orientierung, Merkfähigkeit, Aufmerksamkeit, Rechnen, Erinnern, Sprache, visuell-räumlich
- **Auswertung**: 30-27 normal, 26-24 leichte Einschränkung, ≤23 Verdacht auf Demenz, ≤18 schwere Demenz
- Grenzen: Von Bildungsniveau und Sprache abhängig, schwach bei Frontalhirn-Demenz

**2. Uhren-Zeichentest (Clock Drawing Test)**
- Patient zeichnet eine Uhr mit einer bestimmten Uhrzeit (z.B. '11:10').
- Prüft räumliche Wahrnehmung, Planung, Exekutivfunktionen.
- Schnell (ca. 3 Min), kultursensibel, hohe Sensitivität für beginnende Demenz.

**3. Mini-Cog** (3 Min)
- 3 Wörter merken + Uhren-Zeichentest + Wörter erinnern
- Schnelle Screening-Option im Alltag.

**Wichtig**: Alle drei Tests sind **Screenings**, keine Diagnosen. Bei Auffälligkeit → Überweisung an Arzt oder Gedächtnissprechstunde. (Folstein MMST 1975)"

**B1 (650 Zeichen):**
"Für **Gedächtnis-Probleme** gibt es mehrere Tests — jeder prüft etwas anderes:

**1. MMST (Mini-Mental-Status-Test, Folstein 1975)**
- **30 Fragen**, dauert **10 Minuten**
- Prüft: Orientierung, Merken, Aufmerksamkeit, Rechnen, Sprache, Zeichnen
- **Auswertung**:
  - **30-27 Punkte**: normal
  - **26-24**: leichte Einschränkung
  - **23 oder weniger**: Verdacht auf Demenz
  - **18 oder weniger**: schwere Demenz
- **Achtung**: Hängt von Bildung und Sprache ab

**2. Uhren-Zeichentest**
- Die Person zeichnet eine **Uhr mit einer Uhrzeit** (z.B. '11:10').
- Prüft Raum, Planung und logisches Denken.
- Nur **3 Minuten**. Gut für Menschen, die wenig Deutsch sprechen.

**3. Mini-Cog** (3 Minuten)
- **3 Wörter** merken → **Uhren-Test** → **Wörter erinnern**.
- Schnell für den Alltag.

**Wichtig**: Das sind **Such-Tests**. Die **Diagnose Demenz** stellt der **Arzt**. Bei Auffälligkeit: Arzt oder Gedächtnis-Sprechstunde einschalten."

- **Erklärungs-Step:** stepType `reveal` (3 Tests nacheinander aufdecken)
- **Glossar-Begriffe:** [MMST, Uhren-Zeichentest, Mini-Cog, Exekutivfunktion]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein MMST-Wert von 25 Punkten ist unauffällig."**
- **Fachbegriff:** Grenzwerts-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — 25 Punkte im MMST liegen im Bereich **26-24: leichte Einschränkung**. Normal beginnt erst bei **27 Punkten**. Ab 23 Punkten liegt ein Verdacht auf Demenz vor. Deshalb ist genaues Ablesen wichtig. Merke: 27+ normal, 24-26 leichte Einschränkung, ≤23 Verdacht."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — 25 Punkte sind **leichte Einschränkung**. **Normal** beginnt bei **27 Punkten**. Ab **23 oder weniger** ist es ein Verdacht auf Demenz. Merke: Die Grenzwerte musst du genau kennen — 25 ist schon auffällig."

**D2: "Der MMST ist unabhängig von Bildungsstand und Sprache."**
- **Fachbegriff:** Testkultur-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — der MMST **hängt stark von Bildung und Sprachbeherrschung** ab. Menschen mit geringer Schulbildung oder schwachen Deutschkenntnissen können falsch-positive Ergebnisse zeigen. Deshalb ist der **Uhren-Zeichentest** eine gute sprachunabhängige Ergänzung. Merke: MMST ist nicht kulturneutral."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — der MMST hängt von **Schulbildung** und **Sprache** ab. Jemand mit wenig Schulbildung oder schlechtem Deutsch kann schlechte Werte haben **ohne** Demenz. Der **Uhren-Test** ist besser, weil er weniger Sprache braucht. Merke: MMST ist nicht kulturneutral."

**D3: "Mit dem MMST kannst du die Diagnose 'Alzheimer' stellen."**
- **Fachbegriff:** Diagnose-Kompetenz-Fehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — der MMST ist ein **Screening-Test**, keine Diagnose. Die Diagnose 'Alzheimer' oder andere Demenzformen stellt der **Arzt** mit weiteren Untersuchungen (Anamnese, Labor, Bildgebung, neuropsychologische Testung). Merke: MMST = Verdacht wecken, nicht Diagnose stellen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — der MMST ist nur ein **Such-Test**. Er zeigt: 'Da könnte etwas sein.' Die **Diagnose** Alzheimer stellt der **Arzt** — mit Gespräch, Blutwerten, MRT und speziellen Tests. Merke: MMST = Verdacht, der Arzt stellt die Diagnose."

### Richtig-Feedback
**C1 (300 Zeichen):** "Genau. Drei Tests ergänzen sich: MMST (Folstein 1975, 30 Fragen, ≤23 Verdacht auf Demenz, abhängig von Bildung), Uhren-Zeichentest (sprachunabhängig, prüft Exekutivfunktionen), Mini-Cog (3 Min Screening). Alle drei sind Screenings, keine Diagnosen — der Arzt diagnostiziert anschließend mit weiterführenden Untersuchungen."

**B1 (265 Zeichen):** "Sehr gut. Drei Tests: **MMST** (30 Fragen, ≤23 Punkte = Verdacht), **Uhren-Zeichentest** (3 Minuten, weniger Sprache nötig) und **Mini-Cog** (3 Wörter + Uhr, schnell). Alle sind **Such-Tests** — die **Diagnose** stellt der **Arzt**. Merke: Du testest und meldest."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 3 kognitiven Tests nutzt du bei älteren Menschen? Was misst der MMST?"
- **Rückseite:** "MMST (Folstein 1975, 30 Fragen, ≤23 = Demenzverdacht, abhängig von Bildung/Sprache), Uhren-Zeichentest, Mini-Cog (3 Min). Alle Screenings, keine Diagnose."
- **Kategorie:** assessment

---

## Baustein 15: isar-screening

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-isar
- **bloomLevel:** 2
- **wissensart:** assessment
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-15]

### Stufe 1 — Denkfrage
- **Frage:** "Ein 78-jähriger Patient kommt in die Notaufnahme. Du hast 3 Minuten, um zu entscheiden: Braucht er eine geriatrische Abklärung — oder reicht die Standard-Versorgung? Welche **kurzen** Fragen würden dir helfen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "**ISAR** (*Identification of Seniors at Risk*, McCusker 1999): 6-Fragen-Screening in Notaufnahme und bei Aufnahme. Identifiziert ältere Patienten mit erhöhtem Risiko für funktionellen Abbau. **≥2 positive Antworten → erhöhtes Risiko**, vertiefte geriatrische Abklärung empfohlen."

**B1 (250 Zeichen):** "**ISAR** (Identification of Seniors at Risk, McCusker 1999) ist ein **Schnell-Test** in der Notaufnahme: **6 Fragen** an Patienten ab 65. Bei **2 oder mehr Ja-Antworten** liegt ein Risiko vor, und du solltest eine **genaue geriatrische Abklärung** veranlassen."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Der **ISAR-Screening-Fragebogen** (McCusker et al., 1999) wurde für Notaufnahmen und Krankenhausaufnahmen entwickelt, um in wenigen Minuten **ältere Menschen mit erhöhtem Risiko** für funktionellen Abbau, Wiederaufnahme und Tod zu identifizieren.

**6 Ja/Nein-Fragen:**
1. Vor der Erkrankung auf regelmäßige Hilfe angewiesen?
2. Seit Erkrankung mehr Hilfe nötig?
3. Krankenhausaufenthalt in den letzten 6 Monaten?
4. Seh-Probleme (auch mit Brille)?
5. Gedächtnisprobleme?
6. Mehr als 3 Medikamente täglich?

**Auswertung:**
- **0-1 positive Antworten:** normales Risiko — Standard-Versorgung.
- **≥2 positive Antworten:** **erhöhtes Risiko** — ein umfassendes geriatrisches Assessment (**Comprehensive Geriatric Assessment, CGA**) ist angezeigt.

**Nutzen:** Der ISAR hilft, Ressourcen zu steuern: Geriatrische Abklärung kostet Zeit — der Test klärt vorher, wer sie wirklich braucht. Er spart Zeit und findet verletzliche Patienten früh. (McCusker 1999)"

**B1 (610 Zeichen):**
"Der **ISAR-Test** (McCusker, 1999) ist ein **schneller Risiko-Test** in der Notaufnahme oder bei der Aufnahme im Krankenhaus. Er zeigt, welche älteren Patienten ein **hohes Risiko** für Probleme haben.

**6 einfache Fragen** mit **Ja/Nein**:
1. Vor der Krankheit: Brauchten Sie regelmäßig Hilfe?
2. Seit der Krankheit: Brauchen Sie mehr Hilfe?
3. Waren Sie in den letzten **6 Monaten** im Krankenhaus?
4. Haben Sie Probleme mit dem **Sehen** (auch mit Brille)?
5. Haben Sie Probleme mit dem **Gedächtnis**?
6. Nehmen Sie mehr als **3 Medikamente** pro Tag?

**Auswertung:**
- **0 oder 1 Ja-Antwort**: normales Risiko — Standard-Pflege.
- **2 oder mehr Ja-Antworten**: **hohes Risiko** — du empfiehlst eine **genaue geriatrische Abklärung** (CGA).

**Wozu?** Der Test hilft zu entscheiden: Wer braucht schnell eine **umfassende Untersuchung**? So wird niemand übersehen."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [ISAR, CGA, Comprehensive Geriatric Assessment, Screening]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei 1 positiven ISAR-Antwort muss schon eine geriatrische Abklärung erfolgen."**
- **Fachbegriff:** Schwellenwert-Fehler
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — der Schwellenwert liegt bei **2 positiven Antworten**. Bei 0-1 ist das Risiko normal und die Standard-Versorgung reicht. Erst ab 2 wird die umfassende geriatrische Abklärung (CGA) empfohlen. Merke: Schwellenwert 2, nicht 1."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — die Grenze ist **2 Ja-Antworten**. Bei 0 oder 1 Ja ist alles in Ordnung. Erst ab **2 Ja** empfiehlst du die genaue Abklärung. Merke: 2 ist die Grenze, nicht 1."

**D2: "ISAR ersetzt eine geriatrische Abklärung."**
- **Fachbegriff:** Funktions-Verwechslung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — der ISAR ist ein **Screening-Tool** (Filter), **nicht eine Abklärung**. Er zeigt nur, **wer** weiter abgeklärt werden soll. Die eigentliche Abklärung ist das **Comprehensive Geriatric Assessment (CGA)** mit mehreren Tests (Barthel, TUG, MNA, GDS, MMST). Merke: ISAR filtert, CGA klärt ab."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — der ISAR ist nur ein **Schnell-Test** (Filter). Er zeigt: 'Diese Person muss genauer angeschaut werden.' Die **richtige Abklärung** ist das **CGA** (mit Barthel, TUG, MNA, GDS, MMST). Merke: ISAR = Filter, CGA = Abklärung."

**D3: "ISAR wird bei allen Patienten eingesetzt — nicht nur bei älteren."**
- **Fachbegriff:** Zielgruppen-Fehler
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — der ISAR ist speziell für **Patienten ab 65 Jahren** entwickelt. Bei jüngeren Patienten haben die Fragen keine gleiche Aussagekraft (z.B. 'Brauchten Sie vorher Hilfe?'). Merke: ISAR = Geriatrisches Screening, nur ab 65."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — der ISAR ist nur für **Menschen ab 65**. Bei jüngeren Patienten bringen die Fragen nichts. Merke: ISAR nutzt du nur bei älteren Menschen ab 65 Jahren."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Der ISAR (McCusker 1999) ist ein 6-Fragen-Screening für Patienten ab 65 in Notaufnahme und Krankenhaus. Schwellenwert: ≥2 positive Antworten → umfassendes geriatrisches Assessment (CGA) empfohlen. Er filtert gezielt, wer die detaillierte Abklärung braucht, und spart Ressourcen bei niedrigem Risiko."

**B1 (235 Zeichen):** "Sehr gut. **ISAR** = **6 Fragen** für Menschen ab **65 Jahren** in der Notaufnahme. Bei **2 oder mehr Ja-Antworten** empfiehlst du die **umfassende geriatrische Abklärung** (CGA). So übersiehst du keine verletzlichen Patienten. (McCusker 1999)"

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der ISAR-Test? Bei welchem Wert folgt weitere Abklärung?"
- **Rückseite:** "6-Fragen-Screening für ≥65 in Notaufnahme/Aufnahme. ≥2 positive Antworten → Comprehensive Geriatric Assessment (CGA). (McCusker 1999)"
- **Kategorie:** assessment

---

## Baustein 16: polypharmazie-priscus-forta

### Metadaten
- **bausteinId:** gesundheitsfoerderung-aeltere-polypharmazie
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-16]

### Stufe 1 — Denkfrage
- **Frage:** "Frau Huber (82) nimmt 11 verschiedene Medikamente täglich. Warum ist das ein **Problem** — und welche Liste hilft dir zu erkennen, welche Medikamente für Ältere gefährlich sind?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (285 Zeichen):** "**Polypharmazie** = gleichzeitige Einnahme von **≥5 Medikamenten**. Drei Listen helfen, potenziell inadäquate Medikamente (PIM) zu erkennen: **PRISCUS** (Deutschland), **FORTA** (A-D-Klassifikation), **Beers-Liste** (USA, AGS 2023). Ziel: Wechselwirkungen und Stürze vermeiden."

**B1 (255 Zeichen):** "**Polypharmazie** heißt: **5 oder mehr Medikamente** gleichzeitig nehmen. Das ist bei alten Menschen gefährlich — viele Nebenwirkungen, mehr Stürze. Es gibt 3 Listen, die zeigen, welche Medikamente im Alter **problematisch** sind: **PRISCUS** (Deutschland), **FORTA**, **Beers-Liste** (USA)."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (800 Zeichen):**
"**Polypharmazie** ist definiert als die gleichzeitige Einnahme von **mindestens 5 Medikamenten**. Über 50% der Menschen ab 65 sind betroffen, bei Hochbetagten bis zu 80%. Die Folgen: mehr unerwünschte Arzneimittelwirkungen (UAW), Stürze, Verwirrtheit, Krankenhauseinweisungen.

**Drei Listen zur Risikobewertung:**

**1. PRISCUS-Liste** (Holt et al. 2010, aktualisiert 2023, Deutschland)
- Liste **potenziell inadäquater Medikation (PIM)** bei ≥65 Jahren.
- Enthält z.B. Benzodiazepine (Diazepam), bestimmte Antihistaminika, tri­zyklische Antidepressiva.
- Fordert: Alternative bevorzugen oder besondere Vorsicht.

**2. FORTA-Klassifikation** (Wehling 2012, Deutschland)
- Alterssensitive Bewertung in **4 Kategorien**:
  - **A**: eindeutig nützlich
  - **B**: nützlich mit Einschränkungen
  - **C**: fragwürdig
  - **D**: vermeiden

**3. Beers-Liste** (American Geriatrics Society, AGS 2023, USA)
- US-amerikanisches Äquivalent zu PRISCUS, regelmäßig aktualisiert.
- Teilweise andere Substanzen, weil anderer Medikamentenmarkt.

**Pflegerische Aufgabe:**
- Medikamentenliste bei **jeder** Aufnahme aufnehmen (auch OTC-Medikamente, Nahrungsergänzung).
- Auf neue Symptome nach Medikamentenänderung achten.
- Sturz-Ereignisse im Kontext Medikamente sehen.
- Hinweis an den Arzt bei Polypharmazie und auffälligen Substanzen geben. (PRISCUS-Liste; Beers-Liste AGS 2023)"

**B1 (700 Zeichen):**
"**Polypharmazie** bedeutet: **5 oder mehr Medikamente** gleichzeitig.

**Wie häufig?** Mehr als **die Hälfte** der Menschen ab 65 ist betroffen. Bei Hochbetagten sind es bis zu **80%**.

**Warum gefährlich?**
- Mehr **Nebenwirkungen**
- Mehr **Stürze**
- **Verwirrtheit**
- Mehr Krankenhaus-Aufnahmen

**Drei Listen** helfen, problematische Medikamente im Alter zu erkennen:

**1. PRISCUS-Liste** (Deutschland, Holt 2010, neue Version 2023)
- **PIM-Liste**: 'Potenziell inadäquate Medikation' — bei über 65-Jährigen.
- Dazu gehören: bestimmte Schlafmittel (Benzodiazepine), alte Allergie-Tabletten, bestimmte Antidepressiva.

**2. FORTA-Klassifikation** (Wehling 2012)
- Bewertet Medikamente in **4 Klassen**:
  - **A** = sehr nützlich
  - **B** = nützlich, aber vorsichtig
  - **C** = fraglich
  - **D** = lieber vermeiden

**3. Beers-Liste** (USA, American Geriatrics Society 2023)
- Wie PRISCUS, aber für die USA. Wird **regelmäßig aktualisiert**.

**Deine Aufgabe in der Pflege:**
- Bei jeder Aufnahme **alle Medikamente** aufschreiben (auch rezeptfreie!).
- Bei neuen Symptomen an Medikamente denken.
- Stürze mit Medikamenten in Verbindung bringen.
- Dem Arzt Auffälligkeiten melden."

- **Erklärungs-Step:** stepType `reveal` (3 Listen nacheinander)
- **Glossar-Begriffe:** [Polypharmazie, PIM, PRISCUS-Liste, FORTA, Beers-Liste, UAW]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Polypharmazie beginnt erst ab 10 Medikamenten."**
- **Fachbegriff:** Schwellenwerts-Fehler
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — die **Grenze** liegt bei **5 oder mehr Medikamenten** (einige Definitionen: ≥5 Dauermedikation). Das Problem beginnt also früher als oft gedacht. Ab 5 Medikamenten steigt das Risiko für Wechselwirkungen deutlich. Merke: Polypharmazie = ab 5 Medikamenten."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Polypharmazie beginnt bei **5 Medikamenten**, nicht 10. Schon ab 5 Medikamenten steigt das Risiko für Wechselwirkungen stark. Merke: **5 und mehr** ist schon Polypharmazie."

**D2: "Wenn ein Medikament auf der PRISCUS-Liste steht, darf es nicht mehr verordnet werden."**
- **Fachbegriff:** Listen-Verbots-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die PRISCUS-Liste ist **kein Verbot**, sondern ein **Warnhinweis**. Sie zeigt Medikamente, die bei Älteren **potenziell inadäquat** sind und bei denen eine Alternative bevorzugt werden sollte. In Einzelfällen kann das Medikament trotzdem sinnvoll sein, wenn der Nutzen überwiegt. Merke: Warnung, nicht Verbot."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die PRISCUS-Liste ist eine **Warnung**, kein **Verbot**. Sie sagt: 'Sei vorsichtig bei älteren Menschen, es gibt bessere Alternativen.' Der Arzt kann das Medikament trotzdem geben, wenn es unbedingt nötig ist. Merke: Warnung, nicht Verbot."

**D3: "Nebenwirkungen von Medikamenten sieht man an neuen Laborwerten — nicht an Symptomen."**
- **Fachbegriff:** Symptom-Blindheit
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — viele Medikamentennebenwirkungen zeigen sich als **Symptome**: Verwirrtheit, Stürze, Schwindel, Harninkontinenz, Appetitverlust. Labor hilft manchmal, aber die **klinische Beobachtung** ist oft der erste Hinweis. Jedes **neue Symptom** ist zuerst 'Medikamenten-verdächtig'. Merke: Nebenwirkungen zuerst am Patienten sehen, nicht im Blut."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — die meisten Nebenwirkungen siehst du an **Symptomen**: Verwirrtheit, Stürze, Schwindel, Harninkontinenz, kein Appetit. Das **Blut** zeigt nur manchmal etwas. **Jedes neue Symptom** kann eine Nebenwirkung sein. Merke: Beobachten, nicht nur Blut ansehen."

### Richtig-Feedback
**C1 (310 Zeichen):** "Genau. Polypharmazie (≥5 Medikamente) betrifft über 50% der Älteren. Drei Listen zur Risikobewertung: PRISCUS (Deutschland, Holt 2010/2023), FORTA (Wehling 2012, A-D-Klassifikation), Beers-Liste (AGS 2023, USA). Alle sind Warnhinweise, keine Verbote. Pflegerisch wichtig: vollständige Medikationsliste, Nebenwirkungen an Symptomen erkennen, Auffälligkeiten an den Arzt melden."

**B1 (260 Zeichen):** "Sehr gut. **Polypharmazie** = 5 oder mehr Medikamente. Drei Listen helfen: **PRISCUS** (Deutschland, 2010/2023), **FORTA** (4 Klassen A-D), **Beers** (USA, AGS 2023). Alle sind **Warnungen**, kein **Verbot**. Du achtest auf **neue Symptome** nach Medikamenten-Änderung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Polypharmazie? Welche 3 Listen helfen bei älteren Menschen?"
- **Rückseite:** "≥5 Medikamente gleichzeitig. Listen: PRISCUS (DE, Holt 2010/2023), FORTA (A-D, Wehling 2012), Beers-Liste (USA, AGS 2023). Warnhinweise, keine Verbote."
- **Kategorie:** fachbegriff

---



