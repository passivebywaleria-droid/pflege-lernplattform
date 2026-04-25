# Wissensbausteine: Stuhlausscheidung & Stomapflege

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `stuhlausscheidung` |
| ceId | `ce-02` |
| cluster | E (Ernährung & Ausscheidung) |
| wissensart | handlung |
| geschaetzteUE | 10 |
| zielzeitMin | 248 (10 UE × 45 × 0,55) |
| bausteineAnzahl | 18 |
| voraussetzungen | — |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 22% (4 Bausteine), Bloom 3-4: 56% (10 Bausteine), Bloom 5-6: 22% (4 Bausteine)

**Primärquellen:**
- Heaton K.W., Lewis S.J. (1997): Stool Form Scale as a useful guide to intestinal transit time, Scandinavian Journal of Gastroenterology — Bristol Stool Scale
- AWMF S2k-Leitlinie Chronische Obstipation (2022, AWMF-Register 021-019)
- DGVS Leitlinie Colitis ulcerosa (2023) / Morbus Crohn (2022) — CED
- Fachgesellschaft Stoma, Kontinenz und Wunde (FG SKM): Handlungsempfehlungen Stomapflege (aktualisiert 2023)
- WHO (2017): Cholera-Leitlinie — Reiswasserstuhl als Leitsymptom
- S3-Leitlinie Gastrointestinale Infektionen (2023, AWMF 021-024)
- RKI (2023): Infektionsschutz bei gastrointestinalen Erkrankungen

---

## Baustein 1: stuhl-normwerte

### Metadaten
- **bausteinId:** stuhlausscheidung-normwerte
- **bloomLevel:** 1
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Wie oft gehst du selbst auf die Toilette für 'großes Geschäft'? Jeden Tag? Seltener? Und was wäre für dich auffällig?"
- **Step-Typ:** freetext (aktiviert Alltagserfahrung vor der Norm)

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Normal ist eine riesige Spannweite: 3× pro Woche bis 3× pro Tag gilt als regelrecht. Die Farbe ist braun (durch Sterkobilin, ein Abbauprodukt des Gallenfarbstoffs), die Menge etwa 100-200 g pro Tag, die Form geformt bis weich."

**B1 (210 Zeichen):** "Normal ist ganz unterschiedlich: von 3× pro Woche bis 3× pro Tag ist alles okay. Die Farbe ist braun. Das kommt vom Gallensaft. Die Menge ist etwa 100 bis 200 Gramm am Tag. Der Stuhl ist geformt und weich."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (640 Zeichen):**
"Stuhl ist das Endprodukt der Verdauung. Er besteht zu etwa 75 % aus Wasser, der Rest ist unverdaute Nahrung (vor allem Ballaststoffe), abgeschilferte Darmzellen und Bakterien (~1/3 des Trockengewichts). Die **braune Farbe** entsteht durch **Sterkobilin**, ein Abbauprodukt von Bilirubin (Gallenfarbstoff). Die **Normwerte im Überblick**: Frequenz zwischen 3× pro Woche und 3× pro Tag (individuell sehr variabel), Menge etwa 100-200 g pro Tag, Form geformt aber weich, typischer Geruch (durch Schwefelverbindungen aus Eiweißabbau). Wichtig: 'Normal' ist eine Spannweite — der Vergleich mit dem **Gewohnheitsmuster des Patienten** ist wichtiger als absolute Zahlen. (Heaton Bristol Stool Scale, 1997)"

**B1 (520 Zeichen):**
"Stuhl entsteht am Ende der Verdauung. Er besteht zu 75 % aus Wasser. Der Rest ist: unverdaute Nahrung, tote Darmzellen und Bakterien. Die Farbe ist **braun**. Das kommt vom Gallensaft (Sterkobilin). **Normal** sind diese Werte: Wie oft? Zwischen 3× pro Woche und 3× pro Tag. Wie viel? 100 bis 200 Gramm am Tag. Wie sieht er aus? Geformt und weich. Wichtig: 'Normal' ist bei jedem Menschen anders. Frage den Patienten: 'Wie ist das bei Ihnen normal?' Die eigene Gewohnheit ist wichtiger als die Zahl."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Sterkobilin, Bilirubin, Ballaststoffe]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wer nicht täglich Stuhlgang hat, ist verstopft"**
- **Fachbegriff:** Alltags-Mythos Tagesrhythmus
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — Obstipation beginnt erst bei **weniger als 3× pro Woche** in Kombination mit harten Stuhl oder Pressen. 2× pro Woche bei weichem Stuhl und ohne Beschwerden ist für manche Menschen ihr Normalzustand. Merke: Es zählt das individuelle Muster."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — erst wenn jemand **weniger als 3× pro Woche** Stuhlgang hat UND der Stuhl hart ist, reden wir von Obstipation. 2× pro Woche ist für manche Menschen normal. Merke: Jeder Mensch hat seinen eigenen Rhythmus."

**D2: "Brauner Stuhl kommt vom Essen (zum Beispiel von Fleisch)"**
- **Fachbegriff:** Farb-Verwechslung
- **Feedback (C1, 235 Zeichen):** "Fast — die braune Farbe kommt **nicht aus der Nahrung**, sondern von **Sterkobilin**, einem Abbauprodukt des Gallenfarbstoffs Bilirubin. Deshalb wird der Stuhl bei Gallengangsverschluss **entfärbt** (lehmfarben, acholisch). Merke: Farbe kommt von der Galle."
- **Feedback (B1, 220 Zeichen):** "Fast — die braune Farbe kommt vom **Gallensaft**, nicht vom Essen. Der Gallenfarbstoff wird im Darm zu Sterkobilin umgebaut. Deshalb ist der Stuhl hell (wie Lehm), wenn der Gallengang verstopft ist. Merke: Farbe = Galle."

**D3: "Die Menge Stuhl hängt nur davon ab, wie viel jemand isst"**
- **Fachbegriff:** Mengen-Verwechslung
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — die Stuhlmenge hängt vor allem von der **Ballaststoff-Aufnahme** und dem **Flüssigkeits-Anteil** ab, nicht primär von der Essensmenge. Bei sehr ballaststoffarmer Kost kann jemand viel essen und wenig Stuhl haben. Merke: Ballaststoffe machen Volumen."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — die Menge hängt vor allem von den **Ballaststoffen** ab (Gemüse, Vollkorn). Wer viel Weißbrot isst, hat wenig Stuhl, auch wenn er viel isst. Wer viel Gemüse isst, hat mehr Stuhl. Merke: Ballaststoffe = Volumen."

### Richtig-Feedback
**C1 (235 Zeichen):** "Genau. Die Spannweite ist groß: 3× pro Woche bis 3× pro Tag, 100-200 g, braun durch Sterkobilin. Wichtiger als der Mittelwert ist das **individuelle Gewohnheitsmuster** — frage den Patienten, was für ihn normal ist. (Heaton 1997)"

**B1 (205 Zeichen):** "Sehr gut. Von 3× pro Woche bis 3× pro Tag ist alles okay. Etwa 100-200 Gramm am Tag, braun durch den Gallensaft. Wichtig: Frage den Patienten, wie es bei ihm normal ist. Das ist wichtiger als die Zahl."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was gilt als normale Stuhlfrequenz?"
- **Rückseite:** "3× pro Woche bis 3× pro Tag. Menge 100-200 g/Tag, Farbe braun (Sterkobilin aus Gallenfarbstoff), geformt bis weich. Individuelles Gewohnheitsmuster > absolute Norm."
- **Kategorie:** fakt

---

## Baustein 2: bristol-stuhlskala

### Metadaten
- **bausteinId:** stuhlausscheidung-bristol
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, du sollst dokumentieren, wie der Stuhl eines Patienten aussieht. 'Weich' oder 'fest' reicht dem Arzt nicht. Wie könntest du die Form so beschreiben, dass jeder Kollege sie sich genau vorstellen kann?"
- **Step-Typ:** freetext (Bloom 3 — Problemlösung vor der Skala)

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Die **Bristol Stool Scale** (Heaton 1997) beschreibt 7 Typen: Typ 1-2 sind harte Kugeln/klumpige Wurst = Obstipation, Typ 3-5 sind rissige Wurst, glatte Wurst und weiche Klümpchen = normal, Typ 6-7 sind breiig und wässrig = Diarrhoe."

**B1 (230 Zeichen):** "Die **Bristol-Skala** zeigt 7 Typen von Stuhl. Typ 1 und 2 sind hart wie Kugeln (Verstopfung). Typ 3, 4 und 5 sind normal (geformte Wurst bis weiche Klümpchen). Typ 6 und 7 sind ganz weich oder flüssig (Durchfall)."

- **Step-Typ:** comparison (Tabelle mit 7 Typen)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die **Bristol Stool Scale** wurde 1997 von Heaton und Lewis in Bristol entwickelt und ist heute der **internationale Standard** für die Beschreibung der Stuhlform. Sie bildet die **Darmtransitzeit** ab: harter Stuhl = langsamer Transit, flüssiger Stuhl = schneller Transit.

Die 7 Typen im Überblick:
- **Typ 1** — einzelne harte Klumpen, wie Nüsse (sehr schwer auszuscheiden) → Obstipation
- **Typ 2** — wurstförmig, aber klumpig → Obstipation
- **Typ 3** — wurstförmig mit Rissen an der Oberfläche → normal-fest
- **Typ 4** — glatte Wurst, wie eine Schlange → **Idealtyp**
- **Typ 5** — weiche Klümpchen mit klaren Rändern → normal-weich
- **Typ 6** — flockige Stücke, zerfasert → leichte Diarrhoe
- **Typ 7** — komplett flüssig, keine festen Anteile → Diarrhoe

**Einsatz**: Bei jeder Dokumentation der Ausscheidung, besonders bei Obstipation, Diarrhoe, Stoma-Patienten oder unter Laxantien-Therapie. (Heaton Bristol Stool Scale, 1997)"

**B1 (590 Zeichen):**
"Die **Bristol-Skala** kommt aus England. Sie hilft, den Stuhl genau zu beschreiben. Es gibt 7 Typen:

- **Typ 1** — harte kleine Kugeln (wie Nüsse) → Verstopfung
- **Typ 2** — wurstförmig, aber klumpig → Verstopfung
- **Typ 3** — Wurst mit Rissen auf der Oberfläche → normal
- **Typ 4** — glatte, weiche Wurst (wie eine Schlange) → **der beste Typ**
- **Typ 5** — weiche Klümpchen → normal
- **Typ 6** — breiig, zerfasert → leichter Durchfall
- **Typ 7** — flüssig, wie Wasser → Durchfall

**Warum wichtig?** Jeder Kollege versteht, wie der Stuhl aussieht. Wir benutzen die Skala beim Dokumentieren, besonders bei Verstopfung, Durchfall und bei Stoma-Patienten."

- **Erklärungs-Step:** stepType `reveal` (7 Typen schrittweise)
- **Glossar-Begriffe:** [Bristol-Skala, Darmtransitzeit]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Typ 4 ist ein Zeichen für Durchfall"**
- **Fachbegriff:** Skalen-Richtungs-Fehler
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — **Typ 4** ist die **Idealform**: glatte Wurst. **Typ 6-7** sind Diarrhoe (breiig bis wässrig), **Typ 1-2** sind Obstipation (harte Klumpen). Merke: Die Skala geht von hart (1) über normal (3-5) zu flüssig (7). Typ 4 ist genau die Mitte."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — **Typ 4** ist **perfekt**: eine glatte weiche Wurst. **Typ 6 und 7** sind Durchfall. **Typ 1 und 2** sind Verstopfung. Merke: Von Typ 1 (hart) bis Typ 7 (flüssig). Typ 4 ist genau die Mitte."

**D2: "Die Bristol-Skala sagt etwas über die Farbe des Stuhls"**
- **Fachbegriff:** Skalen-Verwechslung
- **Feedback (C1, 220 Zeichen):** "Nicht ganz — die Bristol-Skala beschreibt **nur die Form und Konsistenz**, nicht die Farbe. Farbabweichungen (z.B. Melaena, Teerstuhl, lehmfarben) werden extra dokumentiert, weil sie eigene diagnostische Bedeutung haben."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — die Bristol-Skala zeigt nur die **Form** (hart, geformt, flüssig), nicht die Farbe. Die Farbe dokumentieren wir extra, zum Beispiel 'schwarz' oder 'hell'. Merke: Skala = Form, nicht Farbe."

**D3: "Bei der Bristol-Skala sind mehr Typen besser"**
- **Fachbegriff:** Skalen-Wertungsfehler
- **Feedback (C1, 230 Zeichen):** "Nicht ganz — die Zahlen sind **keine Wertung**, sondern reine Beschreibung. **Typ 4** ist die Mitte und gilt als Idealform. Höhere Zahlen (6-7) bedeuten Diarrhoe — sie sind nicht 'besser'. Merke: Die Skala ordnet, sie bewertet nicht."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — die Zahlen sind **keine Noten**. **Typ 4** ist am besten (die Mitte). Typ 6 und 7 sind Durchfall — das ist nicht gut. Merke: Mehr Zahl heißt nicht 'besser'. Die Skala zeigt nur, wie der Stuhl aussieht."

### Richtig-Feedback
**C1 (245 Zeichen):** "Genau. Die Bristol-Skala (Heaton 1997) ordnet Stuhl in 7 Typen von hart (1) bis flüssig (7). Typ 4 ist die Idealform, Typ 1-2 sind Obstipation, Typ 6-7 sind Diarrhoe. Die Skala ist internationaler Standard und hilft bei jeder präzisen Dokumentation."

**B1 (215 Zeichen):** "Sehr gut. Die Bristol-Skala zeigt 7 Typen. Typ 4 ist perfekt: glatte weiche Wurst. Typ 1-2 = Verstopfung, Typ 6-7 = Durchfall. Wir benutzen die Skala, damit alle Kollegen genau wissen, wie der Stuhl aussieht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Bristol-Stuhlskala: Welcher Typ ist der Idealtyp und was bedeuten Typ 1 und Typ 7?"
- **Rückseite:** "Typ 4 = glatte Wurst (Ideal). Typ 1 = harte Klumpen wie Nüsse → Obstipation. Typ 7 = flüssig → Diarrhoe. 7-stufige Skala nach Heaton 1997."
- **Kategorie:** assessment

---

## Baustein 3: mekonium-neugeborene

### Metadaten
- **bausteinId:** stuhlausscheidung-mekonium
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Wusstest du, dass Neugeborene in den ersten 2 Tagen einen ganz besonderen Stuhl haben — er ist fast schwarz. Was könnte der Grund dafür sein? Was ist da drin, wenn das Baby doch noch nichts gegessen hat?"
- **Step-Typ:** freetext (Neugier + Überlegen)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "**Mekonium** ist der erste Stuhl eines Neugeborenen. Es ist schwarz-grünlich, zähklebig und geruchlos. Es enthält Fruchtwasser, Darmzellen, Gallenfarbstoff und Haare (Lanugo). Der Abgang erfolgt normalerweise in den ersten 24-48 Stunden."

**B1 (210 Zeichen):** "**Mekonium** ist der erste Stuhl eines Babys nach der Geburt. Er ist schwarz-grün, klebrig und riecht nicht. Er enthält Reste aus dem Bauch der Mutter: Fruchtwasser, alte Darmzellen und Haare (Lanugo)."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (600 Zeichen):**
"**Mekonium** (auch 'Kindspech' genannt) ist der erste Stuhl eines Neugeborenen. Es bildet sich bereits im Mutterleib und wird in den ersten 24-48 Stunden nach der Geburt ausgeschieden.

**Aussehen**: schwarz-grünlich bis dunkelgrün, zähklebig (teerartig), geruchlos.

**Inhalt**: verschlucktes Fruchtwasser, abgeschilferte Darmepithelzellen, Gallenfarbstoffe, Darmsekrete, Lanugohaare (feine Haare des Fötus).

**Klinische Bedeutung**:
- **Ausbleiben** des Mekoniumabgangs länger als 48 Stunden → Verdacht auf Darmverschluss oder **Morbus Hirschsprung** (angeborene Aganglionose des Colons)
- **Mekonium im Fruchtwasser** während der Geburt (grünliches Fruchtwasser) → Zeichen für fetalen Stress, Aspirationsgefahr (Mekoniumaspirations-Syndrom)

Nach einigen Tagen wechselt der Stuhl zu **Übergangsstuhl** (gelb-grün) und beim gestillten Kind zu **typischem Muttermilchstuhl** (goldgelb, dünnflüssig, süßlich riechend)."

**B1 (530 Zeichen):**
"**Mekonium** ist der erste Stuhl eines Neugeborenen. Ein anderes Wort ist **Kindspech**.

**Wie sieht es aus?** Schwarz-grün, sehr klebrig (wie Teer), riecht nicht.

**Wann kommt es?** In den ersten 24 bis 48 Stunden nach der Geburt.

**Was ist drin?** Reste aus dem Bauch der Mutter: Fruchtwasser, tote Darmzellen, Haare (Lanugo).

**Wichtig für die Pflege**:
- Kommt das Mekonium nicht innerhalb von 48 Stunden? Dann Arzt holen! Es könnte ein Darmverschluss sein.
- Ist das Fruchtwasser grün bei der Geburt? Dann hatte das Baby Stress. Das muss dokumentiert werden.

Nach ein paar Tagen wird der Stuhl normal: bei Muttermilch-Babys goldgelb und weich."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Mekonium, Lanugo, Muttermilchstuhl, Morbus Hirschsprung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Schwarzer Stuhl beim Neugeborenen ist immer ein Notfall"**
- **Fachbegriff:** Mekonium-Panik
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — **in den ersten 48 Stunden** ist schwarz-grüner Stuhl beim Neugeborenen **normal** (Mekonium). Erst wenn der Stuhl **nach einer Woche noch schwarz** ist oder beim **älteren Kind/Erwachsenen** schwarz wird (Melaena), ist es ein Notfall. Merke: Zeitpunkt zählt."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — beim **Neugeborenen in den ersten 2 Tagen** ist schwarzer Stuhl **normal** (Mekonium). Erst wenn der Stuhl später noch schwarz ist oder bei älteren Patienten, ist es schlimm. Merke: Beim Baby am Anfang normal."

**D2: "Mekonium ist Milch, die das Baby im Bauch getrunken hat"**
- **Fachbegriff:** Ursprungs-Irrtum
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — das Baby trinkt im Mutterleib **keine Milch**, sondern verschluckt **Fruchtwasser**. Mekonium besteht aus diesem Fruchtwasser plus abgeschilferten Darmzellen, Gallenfarbstoff und Lanugohaaren. Merke: Kein Essen im Bauch — Mekonium kommt aus dem eigenen Körper."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — das Baby trinkt im Bauch **keine Milch**. Es schluckt Fruchtwasser. Mekonium besteht aus: Fruchtwasser, alten Darmzellen und feinen Haaren. Merke: Es kommt aus dem Baby selbst, nicht vom Essen."

**D3: "Kommt kein Mekonium, ist das kein Problem — manche Babys brauchen länger"**
- **Fachbegriff:** Latenz-Verharmlosung
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — wenn **nach 48 Stunden** kein Mekoniumabgang erfolgt, ist das ein **Warnsignal**. Mögliche Ursachen: Darmatresie, Mekoniumileus (bei Mukoviszidose), Morbus Hirschsprung. **Arzt informieren, Dokumentation**. Merke: 48 Stunden sind die Grenze."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — wenn **nach 2 Tagen** (48 Stunden) noch kein Mekonium kommt, muss der Arzt her. Das kann ein Darmverschluss sein. Merke: 48 Stunden sind die Grenze. Danach immer melden — nie 'abwarten'."

### Richtig-Feedback
**C1 (240 Zeichen):** "Genau. Mekonium ist der erste Stuhl: schwarz-grünlich, zähklebig, geruchlos. Abgang in den ersten 24-48 Stunden. Inhalt: Fruchtwasser, Darmzellen, Gallenfarbstoff, Lanugohaare. Bleibt es länger aus → Verdacht auf Darmverschluss, Arzt!"

**B1 (215 Zeichen):** "Sehr gut. Mekonium ist der erste Stuhl beim Baby: schwarz-grün, klebrig, riecht nicht. Es kommt in den ersten 2 Tagen. Wenn nicht, muss der Arzt schauen — vielleicht ist der Darm verschlossen. Danach wird der Stuhl gelb."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Mekonium — Aussehen, Zeitpunkt, und ab wann ist das Ausbleiben pathologisch?"
- **Rückseite:** "Erster Stuhl Neugeborener: schwarz-grün, zähklebig, geruchlos. Abgang in ersten 24-48 h. Bleibt > 48 h aus: Verdacht Darmatresie, Mekoniumileus, Morbus Hirschsprung → Arzt."
- **Kategorie:** fakt

---

## Baustein 4: diarrhoe-definition

### Metadaten
- **bausteinId:** stuhlausscheidung-diarrhoe-def
- **bloomLevel:** 2
- **wissensart:** definition
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient sagt: 'Ich habe Durchfall.' Was möchtest du genauer wissen, bevor du ihm glaubst — und warum reicht 'weich' nicht aus?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "**Diarrhoe** ist definiert als **mehr als 3 ungeformte, dünnflüssige Stühle pro Tag** oder einer Stuhlmenge über 250 g/Tag. Kernproblem: **Flüssigkeits- und Elektrolytverlust** — vor allem bei Kindern und alten Menschen kritisch (Dehydratationsgefahr)."

**B1 (220 Zeichen):** "**Diarrhoe** heißt auf Deutsch **Durchfall**. Das heißt: mehr als 3× am Tag dünnflüssiger Stuhl. Oder mehr als 250 Gramm am Tag. Das Hauptproblem ist: Der Körper verliert viel Wasser und Salze. Das ist gefährlich, besonders für Kinder und alte Menschen."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"**Diarrhoe (Durchfall)** — Definition nach WHO und S3-Leitlinie: mindestens **3 ungeformte Stühle pro Tag** oder eine **Stuhlmenge über 250 g pro 24 h** (Bristol-Typ 6-7).

**Pathophysiologie**: Der Dünndarm sezerniert normalerweise etwa 9 Liter Flüssigkeit pro Tag (aus Speichel, Magensaft, Galle, Pankreassaft). Normalerweise wird fast alles resorbiert — nur 100-200 ml erreichen den Stuhl. Bei Diarrhoe ist dieses Gleichgewicht gestört.

**Hauptkomplikation**: **Dehydratation** und **Elektrolytverlust** (Kalium, Natrium, Bikarbonat). Risikogruppen: **Säuglinge, Kleinkinder, hochbetagte Patienten, Immunsupprimierte**.

**Warnzeichen**:
- Exsikkose-Zeichen (stehende Hautfalten, trockene Schleimhäute, eingefallene Augen)
- Oligurie (weniger Urin)
- Blutbeimengungen oder Schleim im Stuhl
- Hohes Fieber
- Diarrhoe länger als 3 Tage bei Erwachsenen / länger als 24 h bei Säuglingen

**Pflegerische Prioritäten**: Flüssigkeits-Bilanz, orale Rehydratation (WHO-Lösung: Glucose + Elektrolyte), Hautschutz Perianalregion, Kontakt-Isolation bei infektiösem Verdacht. (WHO; S3-Leitlinie Gastrointestinale Infektionen 2023)"

**B1 (560 Zeichen):**
"**Diarrhoe** heißt **Durchfall**. Die Definition:
- Mehr als 3× pro Tag dünnflüssiger Stuhl, ODER
- Mehr als 250 Gramm Stuhl am Tag

**Warum ist das gefährlich?** Der Körper verliert viel **Wasser und Salze**. Besonders schlimm für: **Babys, kleine Kinder und alte Menschen**.

**Warnzeichen** (Patient sofort dem Arzt zeigen):
- Die Haut ist trocken, die Hautfalten bleiben stehen
- Der Mund ist ganz trocken
- Die Augen sind eingefallen
- Der Patient pinkelt kaum noch
- Blut oder Schleim im Stuhl
- Hohes Fieber
- Durchfall länger als 3 Tage (Erwachsene) oder länger als 1 Tag (Babys)

**Das Wichtigste in der Pflege**:
1. **Trinken!** Am besten Elektrolyt-Lösung.
2. Genau aufschreiben: Wie viel Stuhl? Wie oft? Wie viel trinkt der Patient?
3. **Haut am Po schützen** (wegen der Säure im Stuhl)."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Diarrhoe, Dehydratation, Exsikkose, Elektrolyte, Oligurie, orale Rehydratation]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Einmal weicher Stuhl = Durchfall"**
- **Fachbegriff:** Schwellenwert-Irrtum
- **Feedback (C1, 235 Zeichen):** "Nicht ganz — ein einzelner weicher Stuhl ist **keine Diarrhoe**. Definition: **mindestens 3 ungeformte Stühle pro Tag** oder Menge über 250 g/24 h. Ein weicher Stuhl kann Folge der Ernährung sein (Obst, Kaffee, Milch). Merke: 3× zählt."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — **ein** weicher Stuhl ist **kein Durchfall**. Erst ab **3× am Tag** sprechen wir von Diarrhoe. Ein weicher Stuhl kann vom Essen kommen (viel Obst, Kaffee). Merke: Die Grenze ist 3× pro Tag."

**D2: "Bei Diarrhoe sollte der Patient weniger trinken, damit der Darm zur Ruhe kommt"**
- **Fachbegriff:** Gefährlicher Alltagsmythos
- **Feedback (C1, 275 Zeichen):** "Achtung — das wäre **gefährlich**! Bei Diarrhoe muss der Patient **MEHR trinken**, weil der Körper Flüssigkeit und Elektrolyte verliert. Empfehlung: **orale Rehydratationslösung** (Glucose + Elektrolyte nach WHO-Rezept) oder stark verdünnte Brühe/Saft. Merke: Bei Durchfall immer Flüssigkeit ersetzen."
- **Feedback (B1, 230 Zeichen):** "**Aufpassen** — das ist **falsch und gefährlich**! Bei Durchfall muss der Patient **mehr trinken**, nicht weniger. Der Körper verliert Wasser und Salze. Am besten: **Elektrolyt-Lösung** aus der Apotheke. Merke: Bei Durchfall immer viel trinken."

**D3: "Durchfall dauert immer nur 1-2 Tage"**
- **Fachbegriff:** Dauer-Verharmlosung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — wir unterscheiden **akute Diarrhoe** (meist < 2 Wochen, oft infektiös) und **chronische Diarrhoe** (länger als 4 Wochen). Chronische Diarrhoe hat ernste Ursachen: **CED (Morbus Crohn, Colitis ulcerosa), Malabsorption, Tumoren, Laktose-Intoleranz**. Merke: > 4 Wochen = chronisch, Abklärung."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Durchfall kann auch **Wochen oder Monate** dauern. Man sagt: **kurz (bis 2 Wochen)** = akut, **länger als 4 Wochen** = chronisch. Chronischer Durchfall kann ein Zeichen für Morbus Crohn oder andere Krankheiten sein."

### Richtig-Feedback
**C1 (235 Zeichen):** "Genau. Diarrhoe = mehr als 3 ungeformte Stühle/Tag oder Menge > 250 g/24 h. Hauptgefahr: Dehydratation und Elektrolytverlust. Kritisch bei Kindern und Alten. Pflege: orale Rehydratation, Bilanz, Hautschutz perianal, Warnzeichen erkennen."

**B1 (210 Zeichen):** "Sehr gut. Durchfall = mehr als 3× am Tag dünnflüssiger Stuhl. Die Gefahr: Der Körper verliert Wasser und Salze. Babys und alte Menschen sind besonders gefährdet. Wichtig: viel trinken, Haut am Po schützen, dokumentieren."

### Verknüpfte Karteikarte
- **Vorderseite:** "Definition Diarrhoe (Frequenz, Menge, Hauptkomplikation)"
- **Rückseite:** "> 3 ungeformte Stühle/Tag oder > 250 g/24 h (Bristol 6-7). Hauptgefahr: Dehydratation und Elektrolytverlust. Besonders kritisch bei Säuglingen und Hochbetagten."
- **Kategorie:** fakt

---

## Baustein 5: diarrhoe-arten

### Metadaten
- **bausteinId:** stuhlausscheidung-diarrhoe-arten
- **bloomLevel:** 4
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Zwei Patienten haben Durchfall. Patient A hat ihn seit 2 Tagen mit Fieber nach einem Restaurantbesuch. Patient B hat seit 6 Monaten immer wieder Durchfall mit Blut. Ist das dieselbe Krankheit — oder etwas ganz anderes?"
- **Step-Typ:** freetext (Bloom 4, Analyse)

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Diarrhoe-Formen nach Dauer und Mechanismus: **akut** (meist infektiös, < 2 Wochen), **chronisch** (> 4 Wochen, oft CED oder Malabsorption), **osmotisch** (durch Laxantien, Laktose), **sekretorisch** (Cholera, VIPom — enterotoxisch), **entzündlich** (Blut/Schleim, CED)."

**B1 (235 Zeichen):** "Es gibt **verschiedene Arten** von Durchfall: **akut** (kurz, meist Magen-Darm-Infekt), **chronisch** (lang, über 4 Wochen), **osmotisch** (zu viel Zucker oder Laxantien ziehen Wasser in den Darm), **sekretorisch** (der Darm gibt selbst Wasser ab, z.B. Cholera)."

- **Step-Typ:** matrix (Arten, Dauer, Ursache, Beispiele)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Diarrhoe wird nach **Dauer** und **Pathomechanismus** eingeteilt:

**Nach Dauer**:
- **Akut** — bis 2 Wochen. Meist infektiös (Norovirus, Rotavirus, Salmonellen, Campylobacter, Clostridioides difficile) oder medikamentös.
- **Persistierend** — 2-4 Wochen.
- **Chronisch** — über 4 Wochen. Ursachen: CED (Morbus Crohn, Colitis ulcerosa), Malabsorption (Zöliakie, Laktose-Intoleranz), endokrin (Hyperthyreose), Tumoren.

**Nach Mechanismus**:
- **Osmotisch** — unresorbierbare Stoffe ziehen Wasser in den Darm. Typisch bei osmotischen Laxantien (Macrogol, Lactulose), Zuckeralkoholen (Sorbit), Laktose-Intoleranz. **Sistiert beim Fasten.**
- **Sekretorisch** — aktive Wassersekretion in den Darm. Typisch bei **Cholera** (enterotoxisch, 'Reiswasserstuhl'), VIPom, Gallensäureverlust. **Persistiert auch beim Fasten.**
- **Entzündlich / Exsudativ** — Blut, Schleim, Eiter im Stuhl. Typisch bei CED, invasiven Bakterien (Shigellen, EHEC), pseudomembranöser Colitis (C. difficile).
- **Motilitätsstörung** — beschleunigte Transitzeit. Typisch bei Hyperthyreose, Reizdarm, nach Magenresektion.

Wichtig für die Pflege: **Infektiöse Diarrhoe** erfordert **Kontaktisolation + Händehygiene mit Seife** (bei C. difficile wirkt alkoholisches Desinfektionsmittel nicht!)."

**B1 (600 Zeichen):**
"Durchfall hat **verschiedene Arten**. Wir unterscheiden nach **Zeit** und nach **Ursache**.

**Nach Zeit**:
- **Akut**: kurz, bis 2 Wochen. Oft ein **Magen-Darm-Infekt**.
- **Chronisch**: lang, über 4 Wochen. Oft eine **Darmkrankheit** (Morbus Crohn, Colitis ulcerosa) oder Unverträglichkeit (Laktose, Zöliakie).

**Nach Ursache**:
- **Osmotisch**: Der Stoff zieht Wasser in den Darm. Beispiel: zu viele Laxantien. **Hört auf, wenn der Patient fastet.**
- **Sekretorisch**: Der Darm gibt selbst Wasser ab. Beispiel: **Cholera**. **Hört NICHT auf beim Fasten** — sehr gefährlich.
- **Entzündlich**: Blut oder Schleim im Stuhl. Beispiel: Morbus Crohn.

**Wichtig für die Pflege**: Bei Magen-Darm-Infekt immer **Isolation** und **Hände mit Seife waschen**. Bei **Clostridium difficile** hilft Handalkohol **nicht** — nur Wasser und Seife!"

- **Erklärungs-Step:** stepType `matrix` (4 Mechanismen × Merkmale)
- **Glossar-Begriffe:** [osmotische Diarrhoe, sekretorische Diarrhoe, Clostridioides difficile, Cholera, Reiswasserstuhl, CED]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei allen Magen-Darm-Infekten hilft Handdesinfektionsmittel zum Schutz"**
- **Fachbegriff:** C-difficile-Hygienefehler
- **Feedback (C1, 280 Zeichen):** "Achtung, **gefährlicher Fehler**! Bei **Clostridioides difficile** wirkt **alkoholisches Händedesinfektionsmittel NICHT** — C. difficile bildet Sporen, die alkoholresistent sind. **Nur mechanische Reinigung mit Wasser und Seife** entfernt die Sporen. Auch Flächen: Sporen-wirksame Desinfektion! Merke: C. diff = Seife."
- **Feedback (B1, 235 Zeichen):** "**Aufpassen** — das ist **gefährlich falsch**! Bei **Clostridium difficile** hilft Handalkohol **nicht**. Du musst die Hände **mit Wasser und Seife waschen**. C. diff hat Sporen — die bleiben im Alkohol kleben. Merke: C. diff = Seife, nicht Alkohol."

**D2: "Osmotische und sekretorische Diarrhoe sind dasselbe"**
- **Fachbegriff:** Mechanismus-Verwechslung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — **osmotisch** = Stoffe ziehen Wasser **passiv** in den Darm (Laxantien, Laktose). **Hört auf beim Fasten.** **Sekretorisch** = der Darm **gibt aktiv Wasser ab** (Cholera, enterotoxisch). **Hört NICHT auf beim Fasten**, sehr große Mengen. Merke: Fastet Durchfall auf?"
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — bei **osmotisch** zieht ein Stoff (z.B. Laxans) Wasser in den Darm. **Wenn der Patient nichts mehr isst, hört es auf.** Bei **sekretorisch** macht der Darm selbst Wasser (Cholera). **Auch ohne Essen bleibt der Durchfall.** Merke: Fasten-Test."

**D3: "Akute Diarrhoe muss immer mit Antibiotika behandelt werden"**
- **Fachbegriff:** Antibiotika-Übertherapie
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die **meisten akuten Diarrhoen sind viral** (Noro-, Rotavirus) — **Antibiotika sind wirkungslos und können C. difficile fördern**. Antibiotika werden nur eingesetzt bei: hohem Fieber, blutig-schleimigem Stuhl, Immunsupprimierten, Säuglingen. Grundlage der Therapie ist die **Rehydratation**. Merke: Wasser vor Antibiotika."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die meisten Durchfälle kommen von **Viren** (Noro, Rota). Da helfen **Antibiotika nicht** — sie können sogar schaden (C. difficile). **Antibiotika** gibt es nur bei hohem Fieber, Blut im Stuhl oder bei Babys. **Wichtigstes**: Flüssigkeit ersetzen."

### Richtig-Feedback
**C1 (255 Zeichen):** "Exzellent. Diarrhoe wird nach Dauer (akut/chronisch) und Mechanismus (osmotisch/sekretorisch/entzündlich/motil) klassifiziert. Klinisch entscheidend: Bei C. difficile → Hände mit Seife, nicht Alkohol. Bei akut meist viral → Rehydratation vor Antibiotika."

**B1 (220 Zeichen):** "Sehr gut. Durchfall gibt es in vielen Formen: kurz/lang, osmotisch (Laxans), sekretorisch (Cholera), entzündlich (Blut). Wichtig: Bei Clostridium difficile immer Hände mit Seife waschen — Alkohol hilft da nicht! Viral: nur trinken."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen osmotischer und sekretorischer Diarrhoe? Und welcher hört beim Fasten auf?"
- **Rückseite:** "Osmotisch: Stoffe ziehen Wasser passiv in Darm (Laxantien, Laktose) — sistiert beim Fasten. Sekretorisch: Darm sezerniert aktiv Wasser (Cholera, VIPom) — bleibt bei Fasten bestehen."
- **Kategorie:** fachbegriff

---

## Baustein 6: obstipation-definition

### Metadaten
- **bausteinId:** stuhlausscheidung-obstipation-def
- **bloomLevel:** 2
- **wissensart:** definition
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient sagt: 'Ich bin verstopft.' Welche Fragen stellst du, um zu entscheiden, ob das wirklich eine Obstipation ist — oder nur ein persönliches Gefühl?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "**Obstipation** ist nicht nur 'selten Stuhlgang'. Nach **Rom-IV-Kriterien** liegt sie vor, wenn **mindestens 2 von 6 Merkmalen** zutreffen: < 3 Stühle pro Woche, harter Stuhl (Bristol 1-2), starkes Pressen, Gefühl unvollständiger Entleerung, Blockadegefühl, manuelle Unterstützung nötig."

**B1 (255 Zeichen):** "**Obstipation** heißt **Verstopfung**. Das ist mehr als 'selten Stuhlgang'. Wenn **2 oder mehr** von diesen Zeichen stimmen, ist es Obstipation: weniger als 3× pro Woche Stuhlgang, harter Stuhl, starkes Pressen, Gefühl 'es kommt nicht alles raus', Blockadegefühl."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"**Obstipation** ist nicht gleichzusetzen mit 'selten Stuhlgang'. Die **Rom-IV-Kriterien** (international anerkannt) definieren Obstipation, wenn **mindestens 2 von 6 Merkmalen** in ≥ 25 % der Stuhlgänge über **3 Monate** vorliegen:

1. **Weniger als 3 Stuhlgänge pro Woche**
2. **Harter oder klumpiger Stuhl** (Bristol-Typ 1-2)
3. **Starkes Pressen** erforderlich
4. **Gefühl der unvollständigen Entleerung**
5. **Gefühl der analen Blockade**
6. **Manuelle Manöver** zur Entleerung nötig (Ausräumen, Beckenbodenstützung)

**Einteilung**:
- **Akute Obstipation** — neu aufgetreten, Ursache meist identifizierbar (Bettruhe, Medikamentenwechsel, Reise)
- **Chronische Obstipation** — > 3 Monate. Weiter unterteilt in **Slow-Transit-Type** (langsame Darmpassage) und **Outlet-Obstruction-Type** (Entleerungsstörung)

**Bedeutung**: Obstipation betrifft **10-15 % der Allgemeinbevölkerung**, **30-60 % der Altenheimbewohner** (Studie AWMF-Leitlinie 2022). Sie kann zu Komplikationen führen: Hämorrhoiden, Analfissuren, Koprostase, paradoxe Diarrhoe, in Extremfällen Sub-/Ileus.

**Wichtig**: Rote Flagge bei Obstipation **nach dem 50. Lebensjahr neu aufgetreten + Blutbeimengung / Gewichtsverlust** → Kolon-Karzinom ausschließen! (AWMF S2k Chronische Obstipation, 2022)"

**B1 (580 Zeichen):**
"**Obstipation** heißt **Verstopfung**. Das ist nicht nur 'wenig Stuhlgang'. Die **Rom-IV-Kriterien** sagen: Wenn **2 von 6 Zeichen** stimmen (über 3 Monate), ist es Obstipation:

1. **Weniger als 3× pro Woche** Stuhlgang
2. **Harter Stuhl** (Bristol Typ 1-2)
3. **Stark pressen** müssen
4. Gefühl **'es kommt nicht alles raus'**
5. Gefühl **'da ist etwas blockiert'**
6. **Mit der Hand nachhelfen** müssen

**Zwei Arten**:
- **Akut**: neu, Grund oft klar (lange im Bett, neues Medikament, Reise)
- **Chronisch**: länger als 3 Monate

**Häufigkeit**: 10-15 % aller Menschen. Im Altenheim sogar 30-60 %.

**ACHTUNG — rote Flagge**: Wenn **nach dem 50. Lebensjahr** plötzlich Verstopfung neu auftritt, mit **Blut** oder **Gewichtsverlust** — **immer dem Arzt melden**! Das kann ein Darmkrebs sein. (AWMF S2k Chronische Obstipation, 2022)"

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Obstipation, Rom-IV-Kriterien, Koprostase, Slow-Transit, Outlet-Obstruction, Hämorrhoiden, Analfissur]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Obstipation ist, wenn jemand weniger als 1× pro Tag Stuhlgang hat"**
- **Fachbegriff:** Tagesrhythmus-Irrtum
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — die Grenze liegt bei **weniger als 3× pro Woche** (Rom-IV-Kriterium 1), nicht 'täglich'. 3× pro Woche bei weichem Stuhl und ohne Pressen ist für viele Menschen normal. Wichtig: mindestens 2 von 6 Kriterien, nicht nur die Frequenz."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — erst **weniger als 3× pro Woche** ist möglicherweise Obstipation. 2-3× pro Woche ist bei vielen Menschen normal. Wichtig: Frequenz allein reicht nicht — auch Konsistenz und Pressen zählen."

**D2: "Obstipation ist nur unangenehm, aber nicht gefährlich"**
- **Fachbegriff:** Harmlos-Mythos
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — Obstipation kann ernste **Komplikationen** verursachen: **Hämorrhoiden, Analfissuren, Koprostase mit paradoxer Diarrhoe, Sub-/Ileus**. Besonders gefährlich: **neu aufgetretene Obstipation nach 50** mit Blut oder Gewichtsverlust → **Kolon-Karzinom ausschließen!** Merke: Warnzeichen ernst nehmen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Verstopfung kann schlimme Folgen haben: **Hämorrhoiden, Risse am After (Analfissur), paradoxer Durchfall, Darmverschluss**. Besonders wichtig: Wenn jemand **nach 50 neu verstopft ist** — mit Blut oder Gewichtsverlust — sofort zum Arzt! Das kann Darmkrebs sein."

**D3: "Man wird zunehmend von Abführmitteln abhängig"**
- **Fachbegriff:** Laxantien-Abhängigkeits-Mythos
- **Feedback (C1, 290 Zeichen):** "Das ist ein alter Mythos. Moderne **osmotische Laxantien** (Macrogol) machen **nicht abhängig** und verursachen **keinen 'gewöhnungsbedingten trägen Darm'**. Nur bei sehr langem Missbrauch stimulierender Laxantien kann es zu Elektrolytstörungen kommen. Wichtiger ist der **Stufenplan**: erst Lebensstil, dann Laxantien gezielt. (AWMF 2022)"
- **Feedback (B1, 245 Zeichen):** "Das ist ein alter Irrtum. Moderne Mittel wie **Macrogol** machen **nicht abhängig**. Es gibt einen **Stufenplan**: Erst versuchen mit mehr trinken, Bewegung, Ballaststoffen. Dann erst Laxantien. Macrogol ist sicher — auch für länger."

### Richtig-Feedback
**C1 (250 Zeichen):** "Genau. Obstipation = mindestens 2 von 6 Rom-IV-Kriterien über 3 Monate: < 3/Woche, harter Stuhl, Pressen, unvollständige Entleerung, Blockadegefühl, manuelle Manöver. Rote Flagge: > 50 neu mit Blut/Gewichtsverlust = Karzinom-Verdacht, Arzt! (AWMF 2022)"

**B1 (220 Zeichen):** "Sehr gut. Obstipation ist mehr als selten Stuhlgang: 2 von 6 Zeichen müssen stimmen (weniger als 3× pro Woche, harter Stuhl, Pressen, Gefühl 'kommt nicht raus'). Warnsignal: über 50 neu mit Blut oder Gewichtsverlust = Arzt!"

### Verknüpfte Karteikarte
- **Vorderseite:** "Rom-IV-Kriterien Obstipation — nenne 4 von 6"
- **Rückseite:** "< 3 Stühle/Woche, harter/klumpiger Stuhl (Bristol 1-2), starkes Pressen, Gefühl unvollständiger Entleerung, Blockadegefühl, manuelle Manöver nötig. Mind. 2/6 über 3 Monate."
- **Kategorie:** fakt

---

## Baustein 7: paradoxe-diarrhoe

### Metadaten
- **bausteinId:** stuhlausscheidung-paradoxe-diarrhoe
- **bloomLevel:** 4
- **wissensart:** komplikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Ein 82-jähriger Heimbewohner hat seit einigen Tagen 'Durchfall' — mehrmals täglich kleine flüssige Mengen in der Windel. Was könnte überraschenderweise die **Ursache** sein — und warum wäre Imodium gegen den Durchfall hier **gefährlich**?"
- **Step-Typ:** freetext (Bloom 4 — Analyse)

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Die **paradoxe Diarrhoe** ist eine **täuschende Situation**: Im Rektum/Sigma sitzt eine **harte Stuhlmasse (Koprostase)**, oberhalb davon sammelt sich **dünnflüssiger Stuhl**, der an der Masse vorbei als 'Überlauf' abgeht. Patient hat **Obstipation** — es sieht aus wie Durchfall."

**B1 (245 Zeichen):** "Die **paradoxe Diarrhoe** ist eine **Falle**: Im Darm unten sitzt **harter Stuhl fest** (Koprostase). Oberhalb sammelt sich dünner Stuhl. Dieser **läuft außen an der harten Masse vorbei** — wie bei einem verstopften Abfluss. Der Patient hat **Verstopfung**, aber es sieht aus wie Durchfall."

- **Step-Typ:** diagram (Schema Darm + Stuhlsäule + Überlauf)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Die **paradoxe Diarrhoe** (auch: **Überlaufinkontinenz bei Koprostase** oder **Stuhlschmieren**) ist eine **häufig verkannte Form der Obstipation**, besonders bei alten, immobilen oder demenzkranken Patienten.

**Pathomechanismus**:
1. Harter Stuhl sammelt sich im **Rektum und Sigma** und bildet eine **Koprostase** ('Fäkalom')
2. Dahinter (proximal) staut sich flüssiger Stuhl auf
3. Die Masse reizt die Darmwand → **vermehrte Schleimproduktion**
4. Flüssiger Stuhl und Schleim **sickern an der festen Masse vorbei** und gehen unkontrolliert ab

**Klinisches Bild**:
- Patient hat häufige kleine **dünnflüssige Stuhlabgänge** (sieht aus wie Durchfall)
- Oft **Stuhlschmieren** in der Windel, trotz äußerlich normaler Kontinenz
- Bauch ist **gebläht und druckempfindlich**, rektale Untersuchung tastet **harte Massen**
- Häufig **Appetitlosigkeit, Übelkeit, Unruhe**

**Warum die Diagnose so wichtig ist**: Wenn man **Loperamid (Imodium)** gibt, um den vermeintlichen Durchfall zu stoppen, **verschlimmert** man die Koprostase massiv — bis zum Ileus. Therapeutisch richtig: **manuelle Ausräumung und Einläufe**, danach **Stufenplan gegen Obstipation**.

**Risikogruppen**: Altenheimbewohner, Bettlägerige, Demente, Patienten unter Opioiden.

Pflegerische Aufgabe: **Genau fragen und beobachten** — bei 'Durchfall' eines immobilen Patienten: rektal untersuchen lassen, Stuhltagebuch, Bauch anschauen. (AWMF S2k Chronische Obstipation, 2022)"

**B1 (640 Zeichen):**
"Die **paradoxe Diarrhoe** ist eine **Falle**. Sie sieht aus wie Durchfall — ist aber **Verstopfung**.

**Was passiert im Darm?**
1. Im Darm unten sammelt sich **harter Stuhl**. Er bleibt stecken (**Koprostase**).
2. Oberhalb sammelt sich **dünner Stuhl**.
3. Der dünne Stuhl **läuft außen vorbei** an dem harten Klumpen.
4. Er kommt in kleinen Mengen heraus — oft in die Windel.

**Wer bekommt das?**
- Alte Menschen, die viel liegen
- Menschen mit Demenz
- Patienten, die **Opioide** (starke Schmerzmittel) nehmen

**Was merkst du beim Patienten?**
- Oft kleine Mengen dünner Stuhl in der Windel
- Der Bauch ist **dick und hart**
- Der Patient hat **keinen Appetit**, ist oft unruhig
- Man tastet **harte Stuhlklumpen** im After

**WICHTIG — was du NICHT machen darfst**:
**Keine Durchfall-Medikamente geben** (kein Imodium)! Das macht die Verstopfung noch schlimmer — bis hin zum Darmverschluss.

**Was ist richtig?** Dem Arzt melden. Meist muss der Stuhl **mit einem Einlauf gelöst** oder **mit dem Finger ausgeräumt** werden. Danach: Plan gegen Verstopfung machen (mehr trinken, Bewegung, Laxans)."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [paradoxe Diarrhoe, Koprostase, Fäkalom, Stuhlschmieren, Loperamid, Ileus]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei Durchfall gibt man immer erstmal Imodium (Loperamid)"**
- **Fachbegriff:** Loperamid-Reflex
- **Feedback (C1, 295 Zeichen):** "Achtung, **potenziell gefährlich**! Bei älteren, immobilen Patienten mit 'Durchfall' immer **zuerst ausschließen**: ist es eine **paradoxe Diarrhoe** bei Koprostase? Dann würde Loperamid die Obstipation **massiv verschlimmern** — bis zum Ileus. **Erst palpieren und rektal untersuchen lassen, dann therapieren**. Merke: Immer Ursache vor Therapie."
- **Feedback (B1, 245 Zeichen):** "**Aufpassen** — das kann **gefährlich** sein! Bei alten Patienten mit 'Durchfall' könnte es eine **paradoxe Diarrhoe** sein. Dann ist unten harter Stuhl stecken. **Imodium macht das schlimmer** — der Darm kann ganz zu machen. Merke: Erst Ursache suchen!"

**D2: "Paradoxe Diarrhoe gibt es nur bei Demenzkranken"**
- **Fachbegriff:** Zielgruppen-Verengung
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — betroffen sind **alle immobilen Patienten** mit Koprostase-Risiko: Altenheimbewohner, Bettlägerige, **Patienten unter Opioiden** (auch junge Schmerz- oder Palliativpatienten), Patienten mit Rückenmarksverletzungen. Merke: Immobilität + Opioide reichen."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — auch **junge Patienten** mit starken Schmerzmitteln (**Opioiden**) können das bekommen. Oder Patienten, die lange im Bett liegen müssen. Merke: Immer wenn jemand sich wenig bewegt oder Opioide nimmt, ist das Risiko da."

**D3: "Paradoxe Diarrhoe erkennt man leicht, der Patient klagt über Verstopfung"**
- **Fachbegriff:** Erkennungs-Irrtum
- **Feedback (C1, 285 Zeichen):** "Leider nicht — genau das ist die **Falle**: Der Patient (oder die Pflegekraft) sieht **Durchfall** in der Windel und denkt an Diarrhoe. Oft klagt der demente Patient **nicht** über Verstopfung. Hinweise: **harter Bauch, wenig Appetit, Unruhe, wochenlang kein 'richtiger' Stuhlgang**. Merke: Aktiv nachfragen und palpieren."
- **Feedback (B1, 240 Zeichen):** "Leider nicht — das ist die **Falle**. Der Patient sagt oft **nichts**. Besonders Menschen mit Demenz merken es nicht. Du musst **selbst aufmerksam sein**: Ist der Bauch hart? Hat er lange keinen richtigen Stuhlgang gehabt? Isst er schlecht? Dann nachfragen!"

### Richtig-Feedback
**C1 (270 Zeichen):** "Exzellent. Paradoxe Diarrhoe = Überlauf bei Koprostase. Dünner Stuhl läuft an harter Masse vorbei — sieht aus wie Durchfall, ist aber Obstipation. **Kein Loperamid!** Richtig: rektale Untersuchung, Ausräumung, Einlauf, dann Stufenplan gegen Obstipation. (AWMF 2022)"

**B1 (235 Zeichen):** "Sehr gut. Paradoxe Diarrhoe: Harter Stuhl unten, dünner Stuhl läuft außen vorbei. Sieht aus wie Durchfall, ist aber Verstopfung. **Kein Imodium geben** — das macht es schlimmer. Arzt melden, Einlauf oder Ausräumen, dann Plan gegen Verstopfung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist eine paradoxe Diarrhoe und warum ist Loperamid hier kontraindiziert?"
- **Rückseite:** "Koprostase im Rektum/Sigma, dünnflüssiger Stuhl läuft als Überlauf an harter Masse vorbei. Sieht aus wie Diarrhoe, ist aber Obstipation. Loperamid verschlimmert Koprostase bis Ileus. Therapie: Ausräumung + Einlauf."
- **Kategorie:** handlung

---

## B8 — obstipationsursachen (Bloom 3)

**Lernziel:** Du kannst die häufigsten Ursachen einer Obstipation nennen und im Pflegealltag erkennen.

**Kernaussage:** Obstipation entsteht fast immer durch eine Kombination aus Immobilität, Trinkmangel, ballaststoffarmer Ernährung und/oder Medikamenten — jede Ursache ist pflegerisch beeinflussbar.

**Bausteintyp:** KB (Konzeptbaustein) → I.1 (Fakten/Konzepte erklären)

**Handlung:** ja

---

### Stufe 1 — Denkfrage (Aktivierung)

**Frage (165 Zeichen):** "Du pflegst Herrn K., 72 Jahre, bettlägerig, trinkt kaum, bekommt Morphin gegen Schmerzen. Seit 5 Tagen kein Stuhlgang. Welche 3 Ursachen fallen dir spontan ein?"

**Hinweis:** "Denke an: Was verändert sich im Darm, wenn man sich nicht bewegt? Was braucht der Darm, um zu funktionieren?"

---

### Stufe 2 — Konzepterklärung (C1-Text, 560 Zeichen)

**C1:**
"**Obstipation: Die 5 häufigsten Ursachen**

**1. Immobilität**: Körperbewegung regt die Darmperistaltik an. Wer liegt, hat eine träge Darmtätigkeit — besonders Ältere und Bettlägerige.

**2. Trinkmangel**: Der Dickdarm entzieht dem Stuhl Wasser. Bei Dehydration wird der Stuhl zu hart und zu trocken — er bleibt stecken.

**3. Ballaststoffmangel**: Ballaststoffe (Gemüse, Vollkorn, Hülsenfrüchte) quellen auf, binden Wasser und geben dem Stuhl Volumen. Ohne sie fehlt der 'Sog'.

**4. Medikamente — Opioide**: Morphin, Oxycodon und andere Opioide hemmen die Darmperistaltik direkt über Opioidrezeptoren im Darmnervengeflecht. **Opioid-induzierte Obstipation (OIC) = fast immer**, prophylaktisch Laxans geben!

**5. Kolonerkrankungen und organische Ursachen**: Tumore, Narben nach OP, M. Hirschsprung (Megakolon), Hypothyreose, Diabetes mellitus. Immer ausschließen bei plötzlicher Obstipation ohne Auslöser.

**Merke:** Selten hat ein Patient nur eine Ursache — meist ist es ein Zusammenspiel. (AWMF S2k Chronische Obstipation, 2022)"

**B1:**
"**Obstipation — Warum verstopft der Darm?**

Meistens kommen mehrere Dinge zusammen:

- **Wenig Bewegung**: Wer liegt, hat einen trägen Darm. Bewegung 'massiert' den Darm von innen.
- **Zu wenig trinken**: Der Dickdarm nimmt dem Stuhl Wasser weg. Bei wenig Trinken wird der Stuhl hart.
- **Wenig Ballaststoffe**: Gemüse, Vollkorn und Hülsenfrüchte bringen 'Volumen'. Ohne sie ist der Stuhl weich aber zu wenig.
- **Morphin und Schmerzpflaster (Opioide)**: Diese Mittel bremsen den Darm aktiv. Fast alle Patienten mit Opioiden brauchen **gleichzeitig** ein Abführmittel.
- **Krankheiten**: Manche Darmerkrankungen, eine Schilddrüsenunterfunktion oder Darmnarben können auch Ursache sein.

Wenn du bei einem Patienten diese Risikofaktoren siehst — **melde es früh**, warte nicht bis Tag 5. (AWMF S2k Chronische Obstipation, 2022)"

- **Erklärungs-Step:** stepType `text` (displayFormat: list)
- **Glossar-Begriffe:** [Obstipation, Peristaltik, Opioide, OIC, Ballaststoffe, Kolonerkrankung, Megakolon, Dehydration]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Obstipation ist normal im Alter — das muss man einfach akzeptieren"**
- **Fachbegriff:** Altersnormalisierung
- **Feedback (C1, 280 Zeichen):** "Falsch — Obstipation ist häufig, aber nicht normal oder unvermeidlich. Die altersbedingten Faktoren (weniger Bewegung, geringeres Durstgefühl, Multimedikation) sind **pflegerisch beeinflussbar**. Warten verschlimmert die Situation bis zur Koprostase. Merke: Häufig ≠ normal, beeinflussbar ≠ akzeptieren."
- **Feedback (B1, 235 Zeichen):** "Falsch — nur weil es oft vorkommt, heißt das nicht, dass man nichts tun kann. Mehr trinken, mehr Bewegung, richtige Ernährung und früh Abführmittel — das hilft. Warten ist falsch. Merke: Verstopfung ist häufig, aber oft vermeidbar."

**D2: "Bei Opioiden entsteht Obstipation nur manchmal — nicht bei allen Patienten"**
- **Fachbegriff:** OIC-Häufigkeit
- **Feedback (C1, 265 Zeichen):** "Nicht korrekt — **opioid-induzierte Obstipation (OIC)** tritt bei **>90% der Opioid-Patienten** auf, wenn keine prophylaktischen Laxanzien gegeben werden. Es ist kein Zufall, sondern ein direkter pharmakologischer Effekt. Standard: Opioid starten = gleichzeitig Laxans starten. (AWMF 2022)"
- **Feedback (B1, 220 Zeichen):** "Nicht korrekt — fast **alle** Patienten, die Morphin oder ähnliche Mittel bekommen, bekommen auch Verstopfung. Das ist kein Zufall, das Mittel bremst den Darm aktiv. Deshalb gilt: Morphin anfangen = gleichzeitig Abführmittel anfangen."

**D3: "Ballaststoffe helfen immer — je mehr, desto besser bei Obstipation"**
- **Fachbegriff:** Ballaststoff-Paradox
- **Feedback (C1, 270 Zeichen):** "Nur teilweise richtig. Ballaststoffe brauchen **ausreichend Flüssigkeit** zum Quellen — ohne Trinken können sie die Obstipation sogar verschlimmern. Bei schwerer Obstipation oder älteren Patienten mit Dehydration: **erst Hydration sicherstellen**, dann Ballaststoffe. Blinde Ballaststoffsteigerung ohne Flüssigkeit ist kontraproduktiv."
- **Feedback (B1, 240 Zeichen):** "Nur halb richtig! Ballaststoffe helfen — aber nur wenn du **gleichzeitig viel trinkst**. Ohne Flüssigkeit quellen sie nicht auf und machen den Stuhl noch fester. Merke: Ballaststoffe + viel trinken = gut. Ballaststoffe ohne trinken = kann schlechter werden."

### Richtig-Feedback
**C1 (265 Zeichen):** "Sehr gut. Die 5 Hauptursachen: Immobilität, Trinkmangel, Ballaststoffmangel, Opioide (OIC bei >90%), Kolonerkrankungen. Besonders wichtig: OIC = prophylaktisch Laxans obligat. Pflegerische Früherkennung verhindert Koprostase. (AWMF S2k Chronische Obstipation, 2022)"

**B1 (230 Zeichen):** "Genau! Die 5 Ursachen: Wenig Bewegung, zu wenig trinken, wenig Ballaststoffe, Morphin-ähnliche Mittel (bremsen den Darm), Darmerkrankungen. Besonders: Bei Morphin immer sofort Abführmittel dazu — das ist Pflichtprogramm."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Hauptursachen führen zu Obstipation — und was ist bei Opioiden zu beachten?"
- **Rückseite:** "1. Immobilität 2. Trinkmangel 3. Ballaststoffmangel 4. Opioide (OIC bei >90% → prophylaktisch Laxans obligat) 5. Kolonerkrankungen/organisch. Merke: Opioid starten = gleichzeitig Laxans starten."
- **Kategorie:** handlung

---

## B9 — obstipation-massnahmen (Bloom 4)

**Lernziel:** Du kannst nicht-medikamentöse Maßnahmen bei Obstipation priorisiert planen und im Pflegeprozess umsetzen.

**Kernaussage:** Vor dem Griff zur Tablette stehen fünf pflegerische Maßnahmen — Trinken, Bewegung, Ballaststoffe, Toilettentraining und Bauchmassage — deren Kombination bei leichter Obstipation ausreicht.

**Bausteintyp:** KB (Konzeptbaustein) → I.1 (Handlung planen)

**Handlung:** ja

---

### Stufe 1 — Denkfrage (Aktivierung)

**Frage (155 Zeichen):** "Frau B., 68 Jahre, nach Hüft-OP, liegt viel, trinkt ca. 800 ml/Tag, isst Weißbrot. Drei Tage kein Stuhlgang. Bevor du ein Laxans nimmst — was machst du zuerst?"

**Hinweis:** "Denke in Kategorien: Flüssigkeit, Bewegung, Ernährung, Körperposition, Bauch."

---

### Stufe 2 — Konzepterklärung (C1-Text, 580 Zeichen)

**C1:**
"**Nicht-medikamentöse Maßnahmen bei Obstipation — Stufenplan**

**Schritt 1 — Flüssigkeit:** Ziel 1,5–2 l/Tag, warm ist besser (warmes Wasser, Fruchtsaft, Tee). Warme Getränke regen den Defäkationsreflex an. Morgens nüchtern 1 Glas warmes Wasser = Bewährte Methode.

**Schritt 2 — Bewegung:** Auch im Bett: Beine wechselseitig anwinkeln, Rumpfrotation, aus dem Bett → Stuhl. Jede Bewegung = Peristaltikstimulation.

**Schritt 3 — Ballaststoffe steigern:** Ziel 30 g/Tag. Vollkornbrot, Haferflocken, Flohsamenschalen (10–20 g/Tag), Trockenobst. Immer mit ausreichend Flüssigkeit!

**Schritt 4 — Toilettentraining:** Defäkationsreflex ist am stärksten 20–30 Min nach dem Frühstück (gastrokolischer Reflex). Dann regelmäßig zur Toilette — auch wenn kein Drang, mit Fußbank (30°-Hockstellung).

**Schritt 5 — Bauchmassage:** Im Uhrzeigersinn entlang des Dickdarms (Colon ascendens → transversum → descendens), 5–10 Min, 1–2×/Tag. Regt die Peristaltik mechanisch an. (AWMF S2k Chronische Obstipation, 2022)"

**B1:**
"**Was tust du bei Verstopfung — bevor du ein Abführmittel gibst?**

**1. Mehr trinken:** Ziel 1,5–2 Liter. Warmes Wasser oder Tee morgens nüchtern hilft am besten. Warm regt den Darm an.

**2. Bewegung:** Auch im Bett Beine bewegen, aufstehen wenn möglich. Bewegung 'weckt' den Darm auf.

**3. Mehr Ballaststoffe:** Vollkornbrot, Haferflocken, Pflaumen, Flohsamen (mit viel Trinken!). Ziel: 30 g Ballaststoffe am Tag.

**4. Toilettenroutine:** Am besten 20–30 Min nach dem Frühstück zur Toilette — dann ist der Darm am aktivsten. Fußbank unter die Füße stellen (macht den Winkel besser).

**5. Bauchmassage:** Sanft im Uhrzeigersinn den Bauch massieren — entlang des Dickdarms. Das gibt dem Darm einen Schubs.

Wenn das nach 2–3 Tagen nicht hilft, dann kommt ein Abführmittel dazu. (AWMF S2k Chronische Obstipation, 2022)"

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [gastrokolischer Reflex, Defäkationsreflex, Flohsamenschalen, Ballaststoffe, Bauchmassage, Hockstellung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bauchmassage muss gegen den Uhrzeigersinn gemacht werden"**
- **Fachbegriff:** Massagerichtung Colon
- **Feedback (C1, 260 Zeichen):** "Falsch — die anatomisch korrekte Richtung ist **im Uhrzeigersinn**: Colon ascendens (rechts unten) → Colon transversum (quer) → Colon descendens (links) → Sigmoid. Diese Richtung entspricht der natürlichen Stuhlpassagerichtung. Gegen den Uhrzeigersinn wäre kontraproduktiv."
- **Feedback (B1, 210 Zeichen):** "Falsch — im **Uhrzeigersinn** massieren. Stell dir vor, du folgst dem Darm: rechts unten anfangen, quer rüber, links runter. So geht auch der Stuhl. Gegen den Uhrzeigersinn ist die falsche Richtung."

**D2: "Flohsamen kann man ohne Flüssigkeit gut nehmen — wirkt trotzdem"**
- **Fachbegriff:** Flohsamen-Hydration
- **Feedback (C1, 250 Zeichen):** "Falsch — Flohsamen (Psyllium) sind Quellmittel: Sie brauchen **viel Wasser** (mindestens 200–300 ml pro Portion), um aufzuquellen und Volumen zu bilden. Ohne ausreichend Flüssigkeit können sie die Obstipation **verschlimmern** und im Extremfall zu Darmverschluss führen. Immer viel trinken dazu!"
- **Feedback (B1, 215 Zeichen):** "Falsch — Flohsamen quillt auf. Dafür braucht es **viel Wasser**. Mindestens ein großes Glas dazu trinken. Sonst bleibt der Flohsamen trocken im Darm stecken und macht die Verstopfung schlimmer. Merke: Flohsamen = immer mit viel Flüssigkeit."

**D3: "Der gastrokolische Reflex ist abends am stärksten"**
- **Fachbegriff:** gastrokolischer Reflex
- **Feedback (C1, 255 Zeichen):** "Nicht korrekt — der gastrokolische Reflex ist **morgens nach dem Frühstück** am stärksten ausgeprägt: Das Füllen des leeren Magens stimuliert reflektorisch die Kolonmotilität. Deshalb ist die optimale Zeit für die 'Toilettenroutine' **20–30 Min nach dem Frühstück** — nicht abends."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — der Darm ist **morgens nach dem Frühstück** am aktivsten. Wenn Essen in den Magen kommt, gibt der Magen ein Signal: 'Mach Platz unten'. Deshalb: 20–30 Min nach dem Frühstück zur Toilette gehen — das ist der beste Zeitpunkt."

### Richtig-Feedback
**C1 (260 Zeichen):** "Sehr gut. Die 5 Stufen: 1. Flüssigkeit (1,5–2 l/Tag, warm morgens), 2. Bewegung (Peristaltikstimulation), 3. Ballaststoffe 30 g/Tag mit Flüssigkeit, 4. Toilettentraining nach Frühstück (gastrokolischer Reflex), 5. Bauchmassage im Uhrzeigersinn. (AWMF S2k 2022)"

**B1 (225 Zeichen):** "Genau! Erst die 5 Schritte: Mehr trinken (warm morgens!), Bewegung, Ballaststoffe + Flüssigkeit, morgens nach dem Frühstück zur Toilette, Bauchmassage im Uhrzeigersinn. Erst wenn das nicht reicht — Abführmittel."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 nicht-medikamentösen Maßnahmen stehen bei Obstipation vor dem Laxans — und warum morgens nach dem Frühstück?"
- **Rückseite:** "1. Flüssigkeit 1,5–2 l (warm) 2. Bewegung 3. Ballaststoffe 30 g + Flüssigkeit 4. Toilettentraining nach Frühstück (gastrokolischer Reflex = stärkste Kolonmotilität) 5. Bauchmassage im Uhrzeigersinn."
- **Kategorie:** handlung

---

## B10 — laxantien-stufenplan (Bloom 4)

**Lernziel:** Du kannst die vier Laxanziengruppen nach Wirkprinzip unterscheiden und weißt, wann welche Gruppe eingesetzt wird.

**Kernaussage:** Laxanzien werden nach einem Stufenplan eingesetzt — osmotische Mittel zuerst, dann stimulierende, Quellmittel als Dauertherapie, Einlauf bei akuter Koprostase.

**Bausteintyp:** KB (Konzeptbaustein) → I.1 (Differenzierung, Handlung)

**Handlung:** ja

---

### Stufe 1 — Denkfrage (Aktivierung)

**Frage (160 Zeichen):** "Dein Arzt fragt dich: 'Was würdest du bei Herrn M. nehmen — er hat seit 4 Tagen keinen Stuhlgang, trinkt wenig, bekommt Morphin?' Was schlägst du vor?"

**Hinweis:** "Es gibt verschiedene Arten von Abführmitteln — nach Wirkort und Geschwindigkeit. Welche kennst du schon?"

---

### Stufe 2 — Konzepterklärung (C1-Text, 600 Zeichen)

**C1:**
"**Laxanzien-Stufenplan — 4 Gruppen**

**Gruppe 1 — Osmotische Laxanzien (1. Wahl):**
- **Macrogol (Polyethylenglykol)**: Bindet Wasser im Darm, weicht Stuhl auf. Setzt nach 1–2 Tagen ein. Sehr gut verträglich, auch Dauertherapie möglich. Standard bei OIC.
- **Lactulose**: Osmotisch + bakteriell fermentiert → Gasbildung (Nebenwirkung: Blähungen). Wirkt nach 1–3 Tagen.

**Gruppe 2 — Stimulierende Laxanzien (bei akuter Obstipation):**
- **Bisacodyl** (Dulcolax): Regt Darmschleimhaut und Peristaltik direkt an. Wirkt nach 6–12 h oral, 20–60 Min als Zäpfchen. Nicht als Dauertherapie!
- **Natriumpicosulfat**: Ähnlich Bisacodyl, als Tropfen.

**Gruppe 3 — Quellmittel (Dauertherapie):**
- **Flohsamenschalen (Psyllium)**, Leinsamen, Weizenkleie. Quellen auf, erhöhen Stuhlvolumen. Brauchen viel Flüssigkeit! Wirken nach 2–3 Tagen.

**Gruppe 4 — Einlauf / Klysmen (akute Koprostase):**
- **Mikroklistier** (z. B. Klysma Fresenius): 5–10 ml rektal, wirkt in 5–15 Min.
- **Hoher Einlauf**: 500–1000 ml Wasser/Kochsalz, bei Koprostase im Sigma.

**Stufenplan:** nicht-medikamentös → Macrogol/Lactulose → Bisacodyl (kurzfristig) → Einlauf bei Koprostase. (AWMF S2k Chronische Obstipation, 2022)"

**B1:**
"**Abführmittel — 4 Arten und wann sie eingesetzt werden**

**Art 1 — Wasser im Darm halten (Macrogol, Lactulose):**
Diese Mittel halten Wasser im Darm. Der Stuhl wird weicher. Wirkt nach 1–2 Tagen. Macrogol ist am besten verträglich und kann lange gegeben werden.

**Art 2 — Darm direkt anregen (Bisacodyl):**
Dieses Mittel stößt den Darm direkt an, sich zu bewegen. Als Zäpfchen wirkt es schneller (20–60 Min) als als Tablette (6–12 h). Nur für kurze Zeit nehmen!

**Art 3 — Quellen und Volumen (Flohsamen):**
Flohsamen quillt im Darm auf und macht mehr Volumen. Wichtig: Dabei viel trinken! Hilft als Dauerhilfe.

**Art 4 — Einlauf (Klysma):**
Bei hartem Stuhl der stecken bleibt, kommt ein Einlauf. Kleine Menge Wasser direkt in den Darm geben. Wirkt schnell (5–15 Min).

**Merke:** Zuerst immer die nicht-medikamentösen Maßnahmen. Dann Macrogol. Dann Bisacodyl kurzfristig. Einlauf bei echter Koprostase. (AWMF S2k Chronische Obstipation, 2022)"

- **Erklärungs-Step:** stepType `text` (displayFormat: list)
- **Glossar-Begriffe:** [Macrogol, Lactulose, Bisacodyl, Natriumpicosulfat, Flohsamenschalen, Klysmen, Koprostase, osmotisch, OIC]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Lactulose ist besser verträglich als Macrogol und daher 1. Wahl"**
- **Fachbegriff:** Lactulose vs. Macrogol
- **Feedback (C1, 265 Zeichen):** "Falsch — **Macrogol** hat das günstigere Nebenwirkungsprofil. Lactulose wird im Dickdarm bakteriell fermentiert, was zu **Blähungen und Bauchkrämpfen** führen kann — besonders bei älteren Patienten störend. Macrogol wirkt rein osmotisch ohne Fermentation. Leitlinienempfehlung: **Macrogol = 1. Wahl** bei chronischer Obstipation. (AWMF 2022)"
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — **Macrogol** wird besser vertragen. Lactulose wird im Darm von Bakterien umgebaut, dabei entstehen Gase. Das macht Blähungen und Bauchkrämpfe. Macrogol macht das nicht. Deshalb ist Macrogol das Mittel, das zuerst versucht wird."

**D2: "Bisacodyl kann als Dauertherapie gegeben werden — ist ja nur ein Zäpfchen"**
- **Fachbegriff:** stimulierende Laxanzien Dauertherapie
- **Feedback (C1, 270 Zeichen):** "Falsch — **stimulierende Laxanzien** (Bisacodyl, Natriumpicosulfat) sind für **kurzfristigen Einsatz** gedacht. Dauertherapie führt zu Gewöhnung, Elektrolytstörungen (Kaliumverlust → Hypokaliämie), und langfristig zur **Darmträgheit (Kathartic Colon)**. Dauertherapie: Macrogol oder Quellmittel — nicht Bisacodyl."
- **Feedback (B1, 230 Zeichen):** "Falsch — Bisacodyl ist nur für kurze Zeit. Wenn man es zu lang gibt, gewöhnt sich der Darm daran und funktioniert ohne nicht mehr. Außerdem verliert der Körper dabei Kalium (wichtig fürs Herz). Für lange Zeit: Macrogol oder Flohsamen."

**D3: "Ein Einlauf ist immer die schnellste und beste Methode bei Obstipation"**
- **Fachbegriff:** Einlauf-Indikation
- **Feedback (C1, 260 Zeichen):** "Nicht korrekt — ein Einlauf ist eine **invasive Maßnahme** mit Komplikationsrisiken (Schleimhautverletzung, Elektrolytverluste, Vagusreaktion). Er ist indiziert bei **Koprostase** oder wenn andere Maßnahmen versagt haben. Nicht als Erstmaßnahme — Stufenplan einhalten: erst nicht-medikamentös, dann oral, dann rektal."
- **Feedback (B1, 215 Zeichen):** "Nicht korrekt — ein Einlauf kommt erst, wenn alles andere nicht geklappt hat. Er ist kein Allheilmittel — er kann die Schleimhaut verletzen und den Kreislauf belasten. Erst trinken, bewegen, Abführmittel. Nur wenn wirklich Stuhl stecken bleibt — dann Einlauf."

### Richtig-Feedback
**C1 (265 Zeichen):** "Sehr gut. Stufenplan: nicht-medikamentös → Macrogol (1. Wahl, osmotisch, gut verträglich) → Bisacodyl/Natriumpicosulfat (kurzfristig, stimulierend) → Quellmittel (Dauertherapie) → Einlauf/Klysmen bei Koprostase. Bei OIC: Macrogol obligat parallel zu Opioid. (AWMF 2022)"

**B1 (230 Zeichen):** "Genau! Stufenplan: Erst nicht-medikamentöse Maßnahmen. Dann Macrogol (hält Wasser, gut verträglich). Dann Bisacodyl kurz. Flohsamen für Dauerhilfe. Einlauf erst bei hartem Stuhl der steckt. Bei Morphin: Macrogol immer sofort dazu."

### Verknüpfte Karteikarte
- **Vorderseite:** "Erkläre die 4 Laxanziengruppen mit Wirkprinzip und nenne die Stufenplan-Reihenfolge."
- **Rückseite:** "1. Osmotisch (Macrogol 1. Wahl, Lactulose) — Wasser im Darm halten 2. Stimulierend (Bisacodyl) — kurzfristig, Peristaltik direkt 3. Quellmittel (Flohsamen) — Dauertherapie, viel trinken 4. Einlauf/Klysmen — bei Koprostase. Reihenfolge: nicht-medik. → Macrogol → Bisacodyl → Einlauf."
- **Kategorie:** handlung

---

## B11 — meteorismus-flatulenz (Bloom 3)

**Lernziel:** Du kannst Meteorismus und Flatulenz erkennen, Ursachen benennen und pflegerische Maßnahmen einleiten.

**Kernaussage:** Blähungen entstehen durch Gasbildung im Darm — meist durch Ernährung, Darmträgheit oder Darmerkrankungen; pflegerische Maßnahmen reduzieren sie zuverlässig.

**Bausteintyp:** KB (Konzeptbaustein) → I.1 (Fakten + Handlung)

**Handlung:** ja

---

### Stufe 1 — Denkfrage (Aktivierung)

**Frage (150 Zeichen):** "Frau S., 75 Jahre, klagt über einen aufgetriebenen, harten Bauch und häufigen Windabgang. Kein Stuhlgang seit 2 Tagen. Was fällt dir ein, was die Ursache sein könnte?"

**Hinweis:** "Denke an: Was bildet Gase im Darm? Was hemmt den Gasabgang? Was kann dahinterstecken?"

---

### Stufe 2 — Konzepterklärung (C1-Text, 520 Zeichen)

**C1:**
"**Meteorismus und Flatulenz**

**Definitionen:**
- **Meteorismus**: Übermäßige Gasansammlung im Darm → aufgetriebener, gespannter Bauch. Klinisch messbar (Perkussion: Tympanieübermäßige Resonanz).
- **Flatulenz**: Übermäßiger Windabgang (>20×/Tag gilt als pathologisch).

**Häufige Ursachen:**
- **Ernährung**: Hülsenfrüchte, Kohl, Zwiebeln, kohlensäurehaltige Getränke → bakterielle Fermentation → Gase (H₂, CH₄, CO₂)
- **Darmträgheit / Obstipation**: Verlangsamte Passage → mehr Zeit für Fermentation
- **Reizdarmsyndrom (RDS)**: Erhöhte Gasproduktion + viszerale Hypersensitivität (Schmerz bei normalem Gasvolumen)
- **Zöliakie, Laktoseintoleranz, Fruktoseintoleranz**: Malabsorption → mehr Substrat für Bakterien
- **Aerophagie**: Luft schlucken beim schnellen Essen, Trinken mit Strohhalm, Angst

**Pflegerische Maßnahmen:**
1. Blähende Speisen reduzieren (Hülsenfrüchte, Kohl, Kohlensäure)
2. Wärmeapplikation: Wärmflasche/Wärmewickel auf den Bauch → Entspannung der Darmmuskulatur → Gasabgang erleichtert
3. Bauchmassage im Uhrzeigersinn
4. Bewegung fördern (auch im Bett)
5. Kümmel-/Fenchel-/Anistee (Karminativa)
6. Bei Obstipation: Ursache behandeln
7. Simethicon (Entschäumer) bei Anordnung"

**B1:**
"**Blähungen — was ist das und was kannst du tun?**

**Meteorismus** = der Bauch ist aufgebläht und gespannt. **Flatulenz** = viele Winde.

**Woher kommen Blähungen?**
- Bestimmte Speisen: Bohnen, Erbsen, Kohl, Zwiebeln → im Darm entstehen Gase
- Kohlensäure in Getränken
- Langsamer Darm (Verstopfung) → Gase stauen sich
- Zu schnell essen, Luft schlucken
- Manchmal: Unverträglichkeit (Milch, Weizen, Fruchtzucker)

**Was tust du als Pflegekraft?**
1. Blähende Speisen weglassen oder reduzieren
2. Wärme auf den Bauch (Wärmflasche) — entspannt den Darm, Winde können abgehen
3. Bauchmassage im Uhrzeigersinn
4. Bewegung — auch Beine im Bett bewegen hilft
5. Kümmel- oder Fencheltee
6. Wenn Verstopfung die Ursache ist — dagegen behandeln"

- **Erklärungs-Step:** stepType `text` (displayFormat: list)
- **Glossar-Begriffe:** [Meteorismus, Flatulenz, Aerophagie, Karminativa, Simethicon, Reizdarmsyndrom, Laktoseintoleranz, Zöliakie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Blähungen sind immer harmlos — da muss man nichts machen"**
- **Fachbegriff:** Meteorismus-Differenzierung
- **Feedback (C1, 260 Zeichen):** "Meistens harmlos, aber nicht immer. **Warnsignale**: plötzlicher starker Meteorismus + Schmerzen + kein Windabgang + kein Stuhl → Verdacht auf **Ileus (Darmverschluss)** — sofort Arzt rufen! Auch chronischer Meteorismus mit Gewichtsverlust → Abklärung nötig (Zöliakie, CED, Tumor)."
- **Feedback (B1, 215 Zeichen):** "Meistens ja — aber Vorsicht! Wenn der Bauch plötzlich sehr hart wird, Schmerzen kommen und kein Stuhl und kein Wind mehr abgeht → sofort dem Arzt melden! Das könnte ein **Darmverschluss** sein. Das ist ein Notfall."

**D2: "Wärme hilft nicht bei Blähungen — nur Medikamente wirken"**
- **Fachbegriff:** Wärmeapplikation Meteorismus
- **Feedback (C1, 245 Zeichen):** "Falsch — **Wärme** ist eine gut belegte nicht-medikamentöse Maßnahme bei Meteorismus. Wärme entspannt die glatte Darmmuskulatur, erleichtert den Gasabgang und lindert Schmerzen durch Spasmolösung. In Kombination mit Bauchmassage und Bewegung oft ausreichend wirksam."
- **Feedback (B1, 205 Zeichen):** "Falsch — eine Wärmflasche auf dem Bauch hilft tatsächlich! Wärme entspannt den Darm und hilft den Gasen, sich zu bewegen und abzugehen. Das ist keine Einbildung — das ist Physiologie. Erst Wärme + Massage, dann Medikamente."

**D3: "Kümmelöl und Fencheltee haben keinen nachgewiesenen Effekt"**
- **Fachbegriff:** Karminativa Wirksamkeit
- **Feedback (C1, 240 Zeichen):** "Nicht ganz korrekt — **Karminativa** (Fenchel, Kümmel, Anis) enthalten ätherische Öle, die die glatte Darmmuskulatur entspannen und den Gasabgang fördern. Für Fenchel und Kümmel gibt es plausible Wirkdaten. Sie sind als **ergänzende Maßnahme** sinnvoll — kein Ersatz für ursächliche Therapie."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — Kümmel- und Fencheltee enthalten Öle, die den Darm entspannen und Winde leichter abgehen lassen. Das ist kein Mythos. Natürlich reicht das nicht immer — aber als ergänzende Maßnahme ist es sinnvoll."

### Richtig-Feedback
**C1 (255 Zeichen):** "Sehr gut. Meteorismus = Gasansammlung → aufgetriebener Bauch; Flatulenz = >20× Windabgang/Tag. Ursachen: Ernährung, Darmträgheit, RDS, Malabsorption, Aerophagie. Maßnahmen: blähende Speisen, Wärme, Massage, Bewegung, Karminativa, Simethicon."

**B1 (220 Zeichen):** "Genau! Blähungen kommen von Gas im Darm — durch Essen, Darmträgheit, Luft schlucken. Du kannst helfen mit: blähende Speisen weglassen, Wärmflasche, Bauchmassage, Bewegung, Kümmel- oder Fencheltee. Und wenn Verstopfung schuld ist — dagegen behandeln."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen Meteorismus und Flatulenz — und welche 5 Maßnahmen helfen?"
- **Rückseite:** "Meteorismus = Gasansammlung Darm → aufgetriebener Bauch. Flatulenz = übermäßiger Windabgang (>20×/Tag). Maßnahmen: 1. Blähende Speisen 2. Wärme auf Bauch 3. Bauchmassage Uhrzeigersinn 4. Bewegung 5. Karminativa (Kümmel/Fenchel). Bei Ileus-Verdacht: sofort Arzt!"
- **Kategorie:** handlung

---

## B12 — pathologische-befunde (Bloom 4)

**Lernziel:** Du kannst pathologische Stuhlbefunde (Melaena, Hämatochezie, Steatorrhoe, Reiswasserstuhl) erkennen, zuordnen und die pflegerische Konsequenz benennen.

**Kernaussage:** Farbe, Konsistenz und Geruch des Stuhls sind diagnostische Signale — vier pathologische Befundmuster haben klar unterschiedliche Ursachen und Dringlichkeiten.

**Bausteintyp:** KB (Konzeptbaustein) → I.1 (Differenzierung, Handlung)

**Handlung:** ja

---

### Stufe 1 — Denkfrage (Aktivierung)

**Frage (155 Zeichen):** "Du wechselst die Betteinlage bei Herrn F. und siehst schwarzen, teerartigen Stuhl. Dein erster Gedanke?"

**Hinweis:** "Was könnte schwarze Farbe im Stuhl bedeuten? Woher kommt die Farbe? Was muss du sofort tun?"

---

### Stufe 2 — Konzepterklärung (C1-Text, 580 Zeichen)

**C1:**
"**Pathologische Stuhlbefunde — 4 Muster**

**1. Melaena (Teerstuhl):**
- **Farbe/Konsistenz**: Schwarz, teerartig, klebrig, übelriechend
- **Ursache**: Blutung im **oberen GI-Trakt** (Ösophagus, Magen, Duodenum) — Blut wird durch Magensäure und Bakterien zu schwarzem Hämatin umgebaut
- **Dringlichkeit**: **Notfall!** Arzt sofort informieren. Ursache: Ulcus ventriculi/duodeni, Ösophagusvarizen
- **Merkregel**: Oben = schwarz (weit gereist, umgebaut)

**2. Hämatochezie (rektale Blutung):**
- **Farbe/Konsistenz**: Hellrot bis dunkelrot, frisches Blut am oder im Stuhl
- **Ursache**: Blutung im **unteren GI-Trakt** (Kolon, Rektum, Anus) — Hämorrhoiden, Analkarzinom, CED, Kolonpolypen, Karzinom
- **Dringlichkeit**: Arzt informieren, Menge + Farbe dokumentieren. Hellrot + nach Defäkation = oft Hämorrhoiden; dunkelrot + im Stuhl = kolorektale Ursache
- **Merkregel**: Unten = rot (kurzer Weg, frisch)

**3. Steatorrhoe (Fettstuhl):**
- **Farbe/Konsistenz**: Hell(grau)farben, voluminös, fettig-glänzend, schwimmt, übelriechend
- **Ursache**: **Fettmalabsorption** — Pankreasinsuffizienz (keine Lipase), Zöliakie, M. Crohn terminal, Cholestase
- **Dringlichkeit**: Arzt informieren, Stuhldiagnostik, Ursache abklären. Gewichtsverlust, Vitaminmangel (A, D, E, K) möglich

**4. Reiswasserstuhl (choleraähnlich):**
- **Farbe/Konsistenz**: Wässrig, grau-weiß, wie Reiswasser, massiv, geruchsarm
- **Ursache**: **Cholera** (Vibrio cholerae) oder choleraähnliche Infektionen — massiver Elektrolyt-/Flüssigkeitsverlust
- **Dringlichkeit**: **Meldepflicht!** (IfSG), Isolation, Notfall-Rehydration (DGVS Leitlinie CED)"

**B1:**
"**4 wichtige Stuhlbefunde die du kennen musst**

**1. Teerstuhl (Melaena) — schwarz, teerartig:**
Das Blut kam von **oben** (Magen, Speiseröhre) — es ist durch die Magensäure schwarz geworden. Das ist ein **Notfall**. Sofort Arzt rufen!

**2. Rotes Blut im Stuhl (Hämatochezie) — hellrot bis dunkelrot:**
Das Blut kommt von **unten** (Darm, After) — es ist noch frisch und rot. Menge und Farbe genau beobachten und melden. Kann Hämorrhoiden sein, aber auch etwas Ernsteres.

**3. Fettiger, heller Stuhl (Steatorrhoe) — hell, fettig, schwimmt:**
Der Darm nimmt kein Fett mehr auf. Mögliche Ursache: Bauchspeicheldrüse, Zöliakie. Arzt informieren.

**4. Reiswasserstuhl — wässrig, grau-weiß:**
Massenweise dünner Stuhl — mögliche Ursache: Cholera oder ähnliche schwere Infektion. **Meldepflicht! Isolation! Viel Flüssigkeit! Sofort Arzt!**

**Merkregel:** Oben = schwarz (Melaena). Unten = rot (Hämatochezie)."

- **Erklärungs-Step:** stepType `text` (displayFormat: list)
- **Glossar-Begriffe:** [Melaena, Hämatochezie, Steatorrhoe, Reiswasserstuhl, Hämatin, Pankreasinsuffizienz, Cholestase, Cholera, Meldepflicht]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Schwarzer Stuhl bedeutet immer eine schwere GI-Blutung"**
- **Fachbegriff:** Melaena Differenzialdiagnose
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — schwarzer Stuhl hat auch **harmlose Ursachen**: Eisenpräparate, Bismut-haltige Mittel (Pepto-Bismol), viel Rotkohl, schwarze Johannisbeeren. Echter Teerstuhl (Melaena) ist **klebrig, teerartig, übelriechend** und **kann nicht mit Wasser abgewaschen** werden. Bei Unsicherheit: Arzt hinzuziehen, Hämoccult-Test."
- **Feedback (B1, 225 Zeichen):** "Nicht immer — schwarzer Stuhl kann auch von Eisentabletten oder bestimmten Lebensmitteln kommen. Echter Teerstuhl ist **klebrig und stinkt stark**. Du kannst auch fragen: Hat der Patient Eisentabletten? Wenn nein und es stinkt nach Blut — sofort Arzt rufen!"

**D2: "Hellrotes Blut nach dem Stuhlgang ist immer Krebs — sofort in die Klinik"**
- **Fachbegriff:** Hämatochezie Dringlichkeit
- **Feedback (C1, 260 Zeichen):** "Falsch — hellrotes Blut **am** Stuhl (nicht **im** Stuhl gemischt) nach der Defäkation ist am häufigsten durch **Hämorrhoiden** verursacht. Dennoch: Arzt informieren, Menge + Farbe dokumentieren. Chronisches Blut im Stuhl, Gewichtsverlust, Schmerzen → Abklärung nötig (Koloskopie). Nicht alarmieren, aber auch nicht ignorieren."
- **Feedback (B1, 215 Zeichen):** "Nicht immer — hellrotes Blut nach dem Toilettengang kommt oft von Hämorrhoiden. Das ist unangenehm aber kein Notfall. Trotzdem: Arzt informieren und dokumentieren. Wenn das Blut im Stuhl gemischt ist oder wenn es immer wieder vorkommt — dann unbedingt abklären."

**D3: "Steatorrhoe erkennt man nur im Labor"**
- **Fachbegriff:** Steatorrhoe klinische Erkennung
- **Feedback (C1, 245 Zeichen):** "Falsch — **Steatorrhoe ist klinisch erkennbar**: heller, voluminöser, glänzend-fettiger Stuhl, der auf dem Wasser schwimmt und einen charakteristisch ranzigen Geruch hat. Die Pflegekraft kann und muss diesen Befund erkennen und dokumentieren. Labordiagnostik (Fettausscheidung im Stuhl) bestätigt dann."
- **Feedback (B1, 200 Zeichen):** "Falsch — du kannst es **sehen**: der Stuhl ist hell, fettig-glänzend und schwimmt im Wasser. Er riecht komisch. Das ist ein klinisches Zeichen das du ohne Labor erkennen kannst. Diesen Befund dokumentierst du und meldest ihn dem Arzt."

### Richtig-Feedback
**C1 (265 Zeichen):** "Sehr gut. Melaena = schwarz/teerig → obere GI-Blutung, Notfall. Hämatochezie = rot → untere GI-Blutung, Arzt informieren. Steatorrhoe = hell/fettig → Fettmalabsorption, Pankreasinsuffizienz/Zöliakie. Reiswasserstuhl = wässrig/grau → Cholera, Meldepflicht. (DGVS)"

**B1 (225 Zeichen):** "Genau! Schwarz/teerig = Blut von oben → Notfall! Rot/frisch = Blut von unten → Arzt informieren. Hell/fettig/schwimmt = Fett wird nicht aufgenommen → Abklärung. Grau/wässrig = mögliche Cholera → Meldepflicht + Isolation. Merkregel: Oben = schwarz, Unten = rot."

### Verknüpfte Karteikarte
- **Vorderseite:** "Erkläre die 4 pathologischen Stuhlbefunde: Melaena, Hämatochezie, Steatorrhoe, Reiswasserstuhl — Farbe, Ursache, Dringlichkeit."
- **Rückseite:** "Melaena: schwarz/teerig, obere GI-Blutung, Notfall. Hämatochezie: rot, untere GI-Blutung, Arzt. Steatorrhoe: hell/fettig/schwimmt, Fettmalabsorption, Abklärung. Reiswasserstuhl: grau/wässrig, Cholera, Meldepflicht+Isolation. Merkregel: Oben=schwarz, Unten=rot."
- **Kategorie:** handlung

---

## B13 — stoma-arten (Bloom 3)

**Lernziel:** Du kannst die drei Stomaarten (Kolostomie, Ileostomie, Urostomie) sowie die operative Anlageformen (endständig vs. doppelläufig) unterscheiden und benennen.

**Kernaussage:** Ein Stoma ist eine künstliche Körperöffnung — je nach Stomaart unterscheiden sich Ausscheidung, Konsistenz und Versorgungsbedarf grundlegend.

**Bausteintyp:** KB (Konzeptbaustein) → I.1 (Differenzierung)

**Handlung:** ja

---

### Stufe 1 — Denkfrage (Aktivierung)

**Frage (145 Zeichen):** "Du hörst: 'Patient mit Ileostomie'. Was erwartest du bei der Stomaversorgung — und was erwartest du, wenn es eine Kolostomie wäre?"

**Hinweis:** "Denke an: Wo im Darm ist das Stoma? Was kommt an diesem Punkt aus dem Darm heraus?"

---

### Stufe 2 — Konzepterklärung (C1-Text, 560 Zeichen)

**C1:**
"**Stomaarten — Überblick**

**1. Kolostomie (Dickdarmstoma):**
- Anlage im Dickdarm (Colon) oder Sigma
- Ausscheidung: **breiig bis geformt**, 1–2×/Tag, odorierend
- Indikationen: Rektumkarzinom, M. Hirschsprung, Divertikulitis, Sigma-OP
- **Endständig** (Hartmann-Op.) oder **doppelläufig** (protektives Stoma, z. B. bei tiefer Rektum-Anastomose)

**2. Ileostomie (Dünndarmstoma):**
- Anlage im terminalen Ileum
- Ausscheidung: **dünnflüssig bis breiig, kontinuierlich**, hohe Enzymaktivität → Hautreizung!
- Volumen: 800–1500 ml/Tag, Elektrolytverluste (Na, K) beachten!
- Indikationen: Colitis ulcerosa, M. Crohn, FAP (familiäre Polyposis)
- Immer hautschützende Basisplatte + häufigerer Wechsel nötig

**3. Urostomie (Harnableitung):**
- Kein Darmstoma — Harnleiter werden in ein Darmsegment (Ileum-Conduit) eingeleitet
- Ausscheidung: **Urin, kontinuierlich**
- Indikation: Harnblasen-Ca., neurogene Blasenentleerungsstörung
- Spezialversorgung: Urostomie-Beutel mit Ablassventil, nächtliche Ableitung

**Anlageformen:**
- **Endständig (terminal)**: Darmende wird durch die Bauchwand ausgeleitet — keine Möglichkeit der Rückverlagerung
- **Doppelläufig (Loop-Stoma)**: Darmschlinge wird herausgezogen, zuführend + abführend → protektiv, rückverlagerbar
(FG SKM Stoma)"

**B1:**
"**3 Stomaarten — was ist der Unterschied?**

**Kolostomie** = Stoma aus dem **Dickdarm**
- Der Stuhl ist schon mehr eingedickt → breiig bis geformt
- Riecht
- Meist 1–2× täglich

**Ileostomie** = Stoma aus dem **Dünndarm**
- Der Stuhl ist noch sehr dünn und fließt fast immer
- Viel Volumen — 800–1500 ml täglich!
- Enthält Verdauungssäfte → reizt die Haut stark
- Braucht besonders guten Hautschutz

**Urostomie** = kein Darmstoma, sondern **Harnableitung**
- Der Urin kommt durch einen Darmschlauch aus dem Körper
- Fließt kontinuierlich (nicht stoßweise)
- Braucht einen speziellen Urostomiebeutel mit Ablassventil

**Endständig vs. doppelläufig:**
- **Endständig**: Der Darm wird dauerhaft am Ende nach außen geleitet
- **Doppelläufig**: Ein Darmabschnitt wird 'gefaltet' nach außen geführt — kann später rückverlagert werden (FG SKM Stoma)"

- **Erklärungs-Step:** stepType `text` (displayFormat: list)
- **Glossar-Begriffe:** [Kolostomie, Ileostomie, Urostomie, Ileum-Conduit, endständig, doppelläufig, Loop-Stoma, Hartmann-OP, FAP]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ileostomie und Kolostomie sind das Gleiche — nur an verschiedenen Stellen"**
- **Fachbegriff:** Ileostomie vs. Kolostomie Unterschiede
- **Feedback (C1, 270 Zeichen):** "Falsch — der Unterschied ist erheblich: Ileostomie = Dünndarm → **dünnflüssige, kontinuierliche** Ausscheidung mit hoher Enzymaktivität (Hautreizung!), hohe Flüssigkeits-/Elektrolytverluste, häufigerer Beutelwechsel. Kolostomie = Dickdarm → breiig bis geformt, 1–2×/Tag, weniger Hautprobleme. Völlig andere Versorgungsanforderungen!"
- **Feedback (B1, 230 Zeichen):** "Falsch — das ist ein wichtiger Unterschied! Bei der Ileostomie kommt dünnflüssiger Stuhl fast immer — der reizt die Haut stark. Bei der Kolostomie ist der Stuhl breiig bis fest und kommt 1–2× täglich. Ganz andere Versorgung, ganz andere Probleme."

**D2: "Eine Urostomie führt Stuhl ab — das U steht für 'unten im Bauch'"**
- **Fachbegriff:** Urostomie Definition
- **Feedback (C1, 245 Zeichen):** "Falsch — eine **Urostomie** leitet **Urin** ab, keinen Stuhl. Die Harnleiter werden in ein Dünndarmstück (Ileum-Conduit) eingeleitet, das dann durch die Bauchwand ausgeleitet wird. Indikationen: Blasenkarzinom, neurogene Blasenentleerungsstörung. Versorgung: Urostomiebeutel mit Ablassventil."
- **Feedback (B1, 205 Zeichen):** "Falsch — bei der Urostomie kommt **Urin** heraus, kein Stuhl. Der Urin wird durch ein Stück Darm umgeleitet und tritt durch die Bauchwand aus. Das ist z. B. nötig wenn die Harnblase entfernt wurde. Der Beutel hat ein Ablassventil für den Urin."

**D3: "Ein doppelläufiges Stoma kann nie rückverlagert werden"**
- **Fachbegriff:** Loop-Stoma Rückverlagerung
- **Feedback (C1, 250 Zeichen):** "Falsch — das **doppelläufige Stoma (Loop-Stoma)** wird häufig genau deshalb angelegt, weil es **rückverlagerbar** ist. Es dient als protektives Stoma (z. B. Schutz einer Anastomose nach tiefer Rektum-OP). Nach Heilung wird es in einem zweiten Eingriff zurückverlagert. Das endständige Stoma ist in der Regel permanent."
- **Feedback (B1, 210 Zeichen):** "Falsch — das ist sogar der Hauptvorteil des doppelläufigen Stomas: Es kann wieder zurückverlagert werden! Es wird angelegt, um eine Nahtstelle im Darm zu schützen. Wenn die Nahtstelle geheilt ist, kann der Chirurg das Stoma zurückverlagern. Das endständige ist dagegen meist dauerhaft."

### Richtig-Feedback
**C1 (260 Zeichen):** "Sehr gut. Kolostomie = Dickdarm → breiig/geformt, 1–2×/Tag. Ileostomie = Dünndarm → dünnflüssig, kontinuierlich, Elektrolytverluste, Hautreizung. Urostomie = Harnableitung über Ileum-Conduit → Urin kontinuierlich. Endständig = permanent; doppelläufig = rückverlagerbar. (FG SKM Stoma)"

**B1 (225 Zeichen):** "Genau! Kolostomie = Dickdarm → breiig, 1–2×/Tag. Ileostomie = Dünndarm → dünnflüssig immer, reizt die Haut. Urostomie = Harnableitung, Urin fließt immer. Endständig = dauerhaft; doppelläufig = kann zurückverlagert werden."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was sind die 3 Stomaarten und wie unterscheiden sie sich in Ausscheidungsart und Versorgungsbedarf?"
- **Rückseite:** "Kolostomie (Dickdarm): breiig–geformt, 1–2×/Tag, wenig Hautprobleme. Ileostomie (Dünndarm): dünnflüssig, kontinuierlich, Enzymaggression → viel Hautschutz! Elektrolytverluste! Urostomie: Urin kontinuierlich, Beutel mit Ablassventil. Endständig = permanent; Loop = rückverlagerbar."
- **Kategorie:** handlung

---

## B14 — beutelsysteme (Bloom 4)

**Lernziel:** Du kannst einteilige und zweiteilige Beutelsysteme sowie ausstreifbare und geschlossene Beutel unterscheiden und weißt, wann konvexe Basisplatten indiziert sind.

**Kernaussage:** Die Wahl des richtigen Beutelsystems ist entscheidend für Hautgesundheit, Sicherheit und Lebensqualität des Stomaträgers — Auswahl nach Stomaart, Ausscheidungsvolumen und Stomamorphologie.

**Bausteintyp:** KB (Konzeptbaustein) → I.1 (Differenzierung, Handlung)

**Handlung:** ja

---

### Stufe 1 — Denkfrage (Aktivierung)

**Frage (160 Zeichen):** "Du übernimmst einen Patienten mit Ileostomie. Im Schrank findest du sowohl ausstreifbare als auch geschlossene Beutel. Welchen nimmst du — und warum?"

**Hinweis:** "Denke an: Wie viel und wie oft kommt bei einer Ileostomie Ausscheidung? Was bedeutet das für den Beutel?"

---

### Stufe 2 — Konzepterklärung (C1-Text, 560 Zeichen)

**C1:**
"**Beutelsysteme in der Stomaversorgung — Übersicht**

**System 1 — Einteilig:**
- Basisplatte und Beutel sind fest verbunden = ein Stück
- Komplett wechseln bei Erneuerung
- Vorteile: Einfacher, weniger Teile, flacher Profil
- Für: Patienten mit einfachen Stomata, stabiler Haut

**System 2 — Zweiteilig:**
- Basisplatte (Hautschutzplatte) und Beutel sind getrennt, verbunden durch Flansch/Ring
- Beutel kann gewechselt werden **ohne Basisplatte zu entfernen** (Haut schonen!)
- Basisplatte bleibt 2–5 Tage; Beutel täglich oder 2×täglich
- Für: Ileostomie, empfindliche Haut, Patienten die selbst wechseln lernen

**Beuteltypen:**
- **Ausstreifbar (offen)**: Beutelunterseite öffenbar, Inhalt kann ausgeleert werden ohne Wechsel. Standard bei **Ileostomie** (hohes Volumen, kontinuierlich) und Kolostomie tagsüber
- **Geschlossen**: Beutel wird komplett gewechselt wenn voll. Für **Kolostomie** (1–2× täglich, geformter Stuhl)
- **Urostomiebeutel**: Mit Ablassventil unten + Rückschlagventil gegen Urinrückfluss

**Basisplattenform:**
- **Plan (flach)**: Standard, für regelrechtes Stoma mit flacher Umgebung
- **Konvex**: Nach innen gewölbt — drückt die Umgebung nach unten, hebt das Stoma heraus. Indiziert bei **eingesunkenem Stoma (Retraktion)** oder flachem Stoma
(FG SKM Stoma)"

**B1:**
"**Welchen Beutel benutze ich — und wann?**

**Einteilig**: Platte und Beutel zusammen als ein Stück. Einfach zu handhaben. Immer komplett wechseln.

**Zweiteilig**: Platte bleibt kleben (2–5 Tage), Beutel wird gewechselt. Gut für empfindliche Haut — die Platte muss nicht täglich abgezogen werden.

**Ausstreifbarer Beutel**: Unten kann man ihn aufmachen und entleeren. Gut bei Ileostomie — da kommt viel und oft was heraus. Nicht jedes Mal komplett wechseln müssen.

**Geschlossener Beutel**: Wird komplett gewechselt wenn voll. Gut bei Kolostomie — da kommt Stuhl 1–2× täglich, geformt.

**Urostomiebeutel**: Speziell für Urin, mit Ablassventil unten.

**Konvexe Basisplatte**: Wenn das Stoma zu flach ist oder einsinkt — die Platte ist leicht nach innen gewölbt und drückt die Haut nach unten, damit das Stoma besser herausschaut und dicht bleibt. (FG SKM Stoma)"

- **Erklärungs-Step:** stepType `text` (displayFormat: list)
- **Glossar-Begriffe:** [Basisplatte, Flansch, einteiliges System, zweiteiliges System, ausstreifbar, Urostomiebeutel, konvex, Retraktion]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ausstreifbare Beutel sind für Kolostomie — da kommt mehr Stuhl"**
- **Fachbegriff:** Beutelindikation Stomaart
- **Feedback (C1, 265 Zeichen):** "Nicht korrekt — **ausstreifbare Beutel** sind primär für die **Ileostomie** indiziert, da dort große Mengen dünnflüssiger Ausscheidung kontinuierlich anfallen. Bei der Kolostomie ist geformter Stuhl 1–2×/Tag die Regel — da ist ein **geschlossener Beutel** praktischer, da kein Ausstreifen nötig und kein Leckagerisiko."
- **Feedback (B1, 220 Zeichen):** "Andersherum — der ausstreifbare Beutel ist für die **Ileostomie** gemacht, weil dort viel und dünnflüssig rauskommt. Bei der Kolostomie kommt der Stuhl 1–2× täglich und ist fester — da nimmt man einen geschlossenen Beutel und wechselt ihn komplett."

**D2: "Bei zweiteiligen Systemen muss man die Basisplatte täglich wechseln"**
- **Fachbegriff:** Tragezeit Basisplatte
- **Feedback (C1, 255 Zeichen):** "Falsch — das ist gerade der Vorteil des zweiteiligen Systems: Die **Basisplatte bleibt 2–5 Tage** haften, nur der Beutel wird täglich oder 2×täglich gewechselt. Häufiges Entfernen der Basisplatte reizt und verletzt die perristomale Haut. Ziel: Hautschonung durch seltene Plattenentfernung."
- **Feedback (B1, 210 Zeichen):** "Falsch — das Tolle am zweiteiligen System ist: Die Platte bleibt 2–5 Tage kleben, nur der Beutel wird täglich gewechselt. Das schont die Haut. Wenn man die Platte jeden Tag abreißt, wird die Haut gereizt und verletzt."

**D3: "Konvexe Platten nimmt man wenn das Stoma zu groß ist"**
- **Fachbegriff:** Konvexplatte Indikation
- **Feedback (C1, 250 Zeichen):** "Falsch — konvexe Basisplatten sind indiziert bei **eingesunkenem oder flachem Stoma (Retraktion)**, nicht bei einem zu großen Stoma. Die konvexe Form drückt die perristomale Haut nach unten und hebt so das Stoma heraus — das verbessert die Dichtigkeit und verhindert Stuhl-/Urinrückfluss unter die Platte."
- **Feedback (B1, 205 Zeichen):** "Falsch — konvex nimmt man wenn das Stoma zu **flach oder eingesunken** ist. Die leichte Wölbung der Platte drückt die Haut nach unten, damit das Stoma besser heraussteht. So bleibt der Beutel besser dicht und der Inhalt läuft nicht unter die Platte."

### Richtig-Feedback
**C1 (260 Zeichen):** "Sehr gut. Einteilig = kompakt, immer komplett wechseln. Zweiteilig = Platte bleibt 2–5 Tage (Hautschonung), Beutel täglich. Ausstreifbar = Ileostomie (hohes Volumen). Geschlossen = Kolostomie. Konvex = bei Retraktion/flachem Stoma. (FG SKM Stoma)"

**B1 (225 Zeichen):** "Genau! Ausstreifbar = Ileostomie (viel, dünnflüssig). Geschlossen = Kolostomie (wenig, geformt). Zweiteilig = Platte 2–5 Tage, Beutel täglich — schont Haut. Konvex = wenn Stoma flach oder eingesunken, damit es besser dichthält."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wann nimmst du welchen Beutel — ausstreifbar oder geschlossen? Wann ist eine konvexe Basisplatte indiziert?"
- **Rückseite:** "Ausstreifbar = Ileostomie (hohes, kontinuierliches Volumen). Geschlossen = Kolostomie (1–2×/Tag, geformt). Konvex = bei Retraktion/flachem Stoma — hebt Stoma heraus, verbessert Dichtigkeit. Zweiteilig: Platte 2–5 Tage, Beutel täglich — Hautschonung."
- **Kategorie:** handlung

---

## B15 — stoma-hautschutz (Bloom 4)

**Lernziel:** Du kannst die Hautschutzprodukte in der Stomaversorgung (Basisplatte, Konvexplatte, Paste, Puder, Hautschutzring) benennen und situationsgerecht einsetzen.

**Kernaussage:** Perristomale Haut ist die kritischste Zone — schon geringe Stuhl- oder Urinkontakte führen zu Mazeration und Nekrosen; gezielter Hautschutz ist primäre Pflegeaufgabe.

**Bausteintyp:** KB (Konzeptbaustein) → I.1 (Handlung, Differenzierung)

**Handlung:** ja

---

### Stufe 1 — Denkfrage (Aktivierung)

**Frage (150 Zeichen):** "Du versorgst das Ileostomie-Stoma von Frau A. Die Haut rund ums Stoma ist gerötet, nässt leicht. Was tust du bevor du die Basisplatte anlegst?"

**Hinweis:** "Was trocknet Wunden? Was schützt gereizte Haut? Was füllt Unebenheiten aus?"

---

### Stufe 2 — Konzepterklärung (C1-Text, 540 Zeichen)

**C1:**
"**Hautschutz in der Stomaversorgung — Produktübersicht**

**1. Basisplatte (Hautschutzplatte / Rondelle):**
- Kern des Versorgungssystems: haftet auf der Haut, schützt vor Ausscheidungskontakt
- Besteht aus Hydrokolloid — quillt bei Feuchtigkeit leicht auf, nimmt Wasser auf
- Zuschnitt: exakt auf Stomadurchmesser + 2–3 mm Rand zuschneiden (nicht zu groß = ungeschützte Haut)
- Tragezeit: 2–5 Tage je nach Stomaart und Ausscheidung

**2. Konvexplatte:**
- Wie Basisplatte, aber nach innen gewölbt
- Indikation: Retraktion, flaches Stoma → hebt Stoma heraus

**3. Stoma-Paste (Stomapaste):**
- Hydrokolloide Paste zum **Auffüllen von Unebenheiten** und Hautfalten rund ums Stoma
- Verbessert Haftung der Basisplatte, schließt Lücken
- Enthält oft Alkohol → auf gereizte Haut: alkoholfreie Variante!

**4. Stoma-Puder:**
- Hydrokolloider Puder für **nässende, gereizte Haut** rund ums Stoma
- Trocknet die Wundfläche → ermöglicht danach Plattenhaftung
- Überschuss abpusten, dann Hautschutzfilm drüber

**5. Hautschutzring / -platte:**
- Weiche, formbare Hydrokolloide Ringe → über dem Stoma platziert, dichtet ab
- Besonders bei unregelmäßiger Stomaumgebung (Narben, Bauchfalten)

**Grundregel:** Trockene, intakte, reizstofffreie Haut ist Voraussetzung für gute Plattenhaftung. (FG SKM Stoma)"

**B1:**
"**Was schützt die Haut rund ums Stoma?**

**Basisplatte (Rondelle)**: Das ist die klebende Platte, die direkt auf die Haut kommt. Sie schützt die Haut vor dem Stuhl oder Urin. Wichtig: Genaue Größe ausschneiden — nicht zu groß, sonst kommt Haut in Kontakt mit dem Ausscheidungsinhalt.

**Konvexplatte**: Wie die Basisplatte, aber leicht nach innen gewölbt — für eingesunkene Stomata.

**Stoma-Paste**: Eine Paste die Lücken und Falten rund ums Stoma füllt. So haftet die Platte besser. Vorsicht: Manche enthalten Alkohol — auf gereizter Haut: alkoholfreie nehmen!

**Stoma-Puder**: Trocknet nässende, gereizte Haut. Erst Puder drauf, überschuss abpusten, dann Hautschutzfilm und dann die Platte.

**Hautschutzring**: Weicher Ring der ums Stoma gelegt wird und abdichtet — besonders bei Narben oder Falten in der Nähe des Stomas. (FG SKM Stoma)"

- **Erklärungs-Step:** stepType `text` (displayFormat: list)
- **Glossar-Begriffe:** [Basisplatte, Rondelle, Konvexplatte, Stomapaste, Stomaputder, Hautschutzring, Hydrokolloid, Mazeration, perristomal]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Basisplatte sollte großzügig zugeschnitten werden — besser zu groß als zu klein"**
- **Fachbegriff:** Basisplatten-Zuschnitt
- **Feedback (C1, 265 Zeichen):** "Falsch — **zu groß zugeschnittene Basisplatten** lassen einen Rand unbeschützter Haut rund ums Stoma. Dort kommt Ausscheidungsinhalt in direkten Hautkontakt → Mazeration, Erosion, Schmerzen, Plattenverlust. Korrekt: Stomadurchmesser messen, **Ausschnitt = Stomadurchmesser + 2–3 mm Rand**. Nicht größer."
- **Feedback (B1, 215 Zeichen):** "Falsch — zu groß ist schlimm! Wenn die Öffnung zu groß geschnitten wird, liegt Haut frei — direkt neben dem Stoma. Und da kommt dann Stuhl oder Urin drauf. Das macht die Haut wund. Richtig: Öffnung so ausschneiden dass nur 2–3 mm Rand frei bleibt."

**D2: "Stoma-Puder dichtet das Stoma ab und verhindert Leckage"**
- **Fachbegriff:** Stoma-Puder Funktion
- **Feedback (C1, 250 Zeichen):** "Falsch — **Stoma-Puder** ist kein Dichtungsmittel. Er ist ein **Hautpflegeprodukt** für nässende, gereizte perristomale Haut: Er saugt Feuchtigkeit auf und trocknet die Haut, damit die Basisplatte danach haften kann. Zur Abdichtung: Stomapaste oder Hautschutzringe."
- **Feedback (B1, 205 Zeichen):** "Falsch — Puder macht nicht dicht. Er trocknet die Haut die nässt oder gereizt ist. Erst Puder drauf, überschuss wegblasen, dann Hautschutzfilm — dann kann die Platte haften. Für Abdichtung von Lücken nimmt man **Stomapaste** oder einen **Hautschutzring**."

**D3: "Stomapaste kann man großzügig auf gereizte Haut auftragen"**
- **Fachbegriff:** Stomapaste Alkohol
- **Feedback (C1, 245 Zeichen):** "Vorsicht — viele **Stomapasten enthalten Alkohol** als Konservierungsmittel. Auf gereizte oder mazerierter Haut verursacht Alkohol Brennen und Irritation. Lösung: **alkoholfreie Stomapaste** verwenden, oder zuerst mit Puder trocknen, Hautschutzfilm auftragen, dann erst Paste."
- **Feedback (B1, 200 Zeichen):** "Vorsicht — viele Stomapasten enthalten **Alkohol**. Das brennt auf gereizter Haut stark! Wenn die Haut schon rot oder wund ist: **alkoholfreie Paste** nehmen oder zuerst mit Puder die Haut trocknen, dann erst Paste auftragen."

### Richtig-Feedback
**C1 (255 Zeichen):** "Sehr gut. Basisplatte = Stomadurchmesser +2–3 mm, Tragezeit 2–5 Tage. Konvex = Retraktion. Paste = Unebenheiten füllen (Vorsicht Alkohol). Puder = nässende Haut trocknen. Hautschutzring = Abdichtung bei Narben/Falten. Trocken + intakt = Voraussetzung für Haftung. (FG SKM Stoma)"

**B1 (220 Zeichen):** "Genau! Basisplatte genau zuschneiden (nicht zu groß). Konvex bei flachem Stoma. Paste füllt Lücken (auf Alkohol achten). Puder trocknet nässende Haut. Hautschutzring dichtet ab. Grundregel: Trockene, saubere Haut = gute Plattenhaftung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Hautschutzprodukte gibt es in der Stomaversorgung — und wann wird welches verwendet?"
- **Rückseite:** "1. Basisplatte (Rondelle): Grundschutz, +2–3 mm Zuschnitt 2. Konvexplatte: bei Retraktion 3. Stomapaste: Unebenheiten füllen (alkoholfrei bei Reizung!) 4. Stomaputder: nässende Haut trocknen → Haftung vorbereiten 5. Hautschutzring: Abdichtung bei Narben/Falten."
- **Kategorie:** handlung

---

## B16 — stoma-komplikationen (Bloom 4)

**Lernziel:** Du kannst sechs häufige Stomakomplikationen erkennen, beschreiben und die pflegerische Erstreaktion benennen.

**Kernaussage:** Stomakomplikationen entstehen früh oder spät — die Pflegekraft erkennt sie oft als erste und muss wissen, wann sie handeln und wann sie eskalieren muss.

**Bausteintyp:** KB (Konzeptbaustein) → I.1 (Differenzierung, Handlung)

**Handlung:** ja

---

### Stufe 1 — Denkfrage (Aktivierung)

**Frage (145 Zeichen):** "Du versorgst ein Stoma und siehst: Das Stoma schaut kaum noch aus der Haut heraus. Gestern war es noch prominent. Was könnte das sein — und was tust du?"

**Hinweis:** "Denke an Komplikationen die das Stoma selbst betreffen: Lage, Durchblutung, Größe."

---

### Stufe 2 — Konzepterklärung (C1-Text, 580 Zeichen)

**C1:**
"**Stomakomplikationen — 6 häufige Probleme**

**1. Retraktion (Einsinken):**
- Stoma zieht sich unter Hautniveau zurück
- Ursachen: Gewichtszunahme, Narben, Zug durch Mesenterie
- Folge: Abdichtungsproblem → Leckage → Hautschaden
- Pflege: Konvexsystem, perristomale Unterstützung, Stomatherapeut

**2. Prolaps (Vorfallen):**
- Stoma prolabiert weit aus der Bauchdecke hervor (bis 10–20 cm möglich)
- Ursachen: schwache Bauchmuskulatur, erhöhter intraabdomineller Druck
- Pflege: flaches Lager, Reduktion des Prolapses möglich, Stomatherapeut + Chirurg

**3. Stenose:**
- Verengung des Stomaeingangs → Ausscheidungsbehinderung
- Ursachen: Narbenbildung, Ischämie
- Pflege: Bougierung (ärztlich), OP bei Bedarf

**4. Nekrose:**
- Absterben des Stomagewebe → livide/schwarz verfärbt, schlechte Durchblutung
- Ursachen: Gefäßkompression, zu enger Durchtritt durch Bauchwand
- Pflege: **Notfall — sofort ärztlich!** Operationsindikation

**5. Parastomale Hernie:**
- Darmvorfall neben dem Stoma → sichtbare/tastbare Wölbung neben dem Stoma
- Ursachen: Muskelschwäche, Adipositas, Husten
- Pflege: Hernienversorgungsgürtel, OP-Indikation prüfen, kein Heben

**6. Perristomale Hautreizung:**
- Häufigste Komplikation: Rötung, Erosion, Mazeration der Haut rund ums Stoma
- Ursachen: Leckage, falsch zugeschnittene Platte, Kontaktallergie, Pilz
- Pflege: Ursache identifizieren, Zuschnitt korrigieren, Puder + Hautschutzfilm, Stomatherapeut
(FG SKM Stoma)"

**B1:**
"**6 Probleme am Stoma — was du wissen musst**

**1. Retraktion (Einsinken)**: Das Stoma zieht sich nach innen zurück — kaum noch zu sehen. Konvexes System hilft. Stomatherapeut hinzuziehen.

**2. Prolaps (Vorfallen)**: Das Stoma fällt weit heraus. Nie mit Gewalt zurückschieben ohne Rücksprache. Patient flach legen. Stomatherapeut + Arzt.

**3. Stenose (Verengung)**: Der Stomaeingang ist zu eng. Ausscheidung geht kaum heraus. Arzt informieren.

**4. Nekrose (Absterben)**: Das Stoma ist livide bis schwarz — schlechte Durchblutung. **Sofort Arzt rufen!** Das ist ein Notfall.

**5. Parastomale Hernie (Vorwölbung neben Stoma)**: Neben dem Stoma wölbt sich etwas vor. Keine schweren Sachen heben. Hernienversorgungsgürtel. Arzt beurteilt ob OP nötig.

**6. Hautreizung**: Die häufigste Komplikation — Haut rund ums Stoma ist rot, nässt oder ist wund. Ursache suchen: Leckage? Platte falsch zugeschnitten? Allergie? Zuschnitt korrigieren, Puder, Stomatherapeut. (FG SKM Stoma)"

- **Erklärungs-Step:** stepType `text` (displayFormat: list)
- **Glossar-Begriffe:** [Retraktion, Prolaps, Stenose, Nekrose, parastomale Hernie, Mazeration, Leckage, Stomatherapeut, Bougierung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein livide verfärbtes Stoma braucht Zeit — erst nach einem Tag Arzt rufen"**
- **Fachbegriff:** Stomane Nekrose Dringlichkeit
- **Feedback (C1, 265 Zeichen):** "Falsch und gefährlich — eine **livide bis schwarz verfärbte Stoma** weist auf **Ischämie und Nekrose** hin. Das ist ein **chirurgischer Notfall**. Sofortige ärztliche Beurteilung erforderlich — Zeitverzögerung kann zur vollständigen Nekrose führen, die eine Reoperation nötig macht. Niemals abwarten!"
- **Feedback (B1, 215 Zeichen):** "Falsch — das ist ein **Notfall**! Ein livides oder schwarzes Stoma bekommt zu wenig Blut. Das Gewebe stirbt ab. Sofort Arzt rufen — nicht warten! Jede Stunde zählt. Das kann eine erneute Operation nötig machen."

**D2: "Bei parastomaler Hernie soll der Patient die Bauchmuskeln trainieren"**
- **Fachbegriff:** parastomale Hernie Belastung
- **Feedback (C1, 250 Zeichen):** "Falsch — **intensives Bauchmuskeltraining** erhöht den intraabdominellen Druck und kann eine parastomale Hernie **vergrößern oder akut einengen (Inkarzeration!)**. Empfehlung: kein schweres Heben, Hernienversorgungsgürtel, Gewichtsnormalisierung. OP-Indikation bei symptomatischer Hernie."
- **Feedback (B1, 205 Zeichen):** "Falsch — starkes Bauchtraining macht es schlimmer! Es erhöht den Druck im Bauch. Bei einer parastomalen Hernie gilt: kein schweres Heben, keinen Bauch pressen. Hernienversorgungsgürtel tragen. Der Arzt entscheidet ob eine OP nötig ist."

**D3: "Perristomale Hautreizung entsteht immer durch eine Allergie"**
- **Fachbegriff:** Hautreizung Ursachen
- **Feedback (C1, 255 Zeichen):** "Nicht korrekt — **Kontaktallergie** (auf Klebstoffe, Hydrokolloide) ist nur eine mögliche Ursache. Häufiger sind: **Leckage** (Ausscheidungsinhalt unter die Platte), **falsch zugeschnittene Platte** (ungeschützte Haut), mechanische Reizung (zu häufige Plattenwechsel), Pilzinfektion. Immer Ursache identifizieren bevor behandelt wird."
- **Feedback (B1, 210 Zeichen):** "Nicht nur Allergie — häufiger ist Leckage (Stuhl kommt unter die Platte) oder die Platte ist falsch zugeschnitten (Haut liegt frei). Erst schauen: Woher kommt die Reizung? Dann die Ursache beheben. Stomatherapeut fragen wenn du nicht sicher bist."

### Richtig-Feedback
**C1 (260 Zeichen):** "Sehr gut. 6 Komplikationen: Retraktion (konvex), Prolaps (Stomatherapeut+Chirurg), Stenose (ärztl. Bougierung), Nekrose (Notfall sofort!), parastomale Hernie (kein Heben, Gürtel, OP-Indikation), Hautreizung (häufigste — Ursache identifizieren). (FG SKM Stoma)"

**B1 (225 Zeichen):** "Genau! Nekrose = schwarz = Notfall. Retraktion = eingesunken = konvexes System. Prolaps = rausgefallen = Stomatherapeut. Stenose = eng = Arzt. Hernienversorgungsgürtel bei Hernie. Hautreizung = häufigste = Ursache suchen und beheben."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 6 Stomakomplikationen kennst du — und welche ist ein Notfall?"
- **Rückseite:** "1. Retraktion (Einsinken → konvex) 2. Prolaps (Vorfallen → Chirurg) 3. Stenose (Verengung → ärztl.) 4. Nekrose (Absterben → NOTFALL sofort!) 5. Parastomale Hernie (Vorwölbung → kein Heben, Gürtel) 6. Hautreizung (häufigste → Ursache identifizieren). Nekrose = immer sofort Arzt!"
- **Kategorie:** handlung

---

## B17 — stoma-beratung (Bloom 5)

**Lernziel:** Du kannst psychosoziale Begleitaspekte bei Stomaträgern erkennen, Selbstversorgung systematisch fördern und ernährungsbezogene Empfehlungen je nach Stomaart geben.

**Kernaussage:** Ein Stoma verändert Körperbild, Intimsphäre und Lebensplanung — Beratung ist genauso wichtig wie technische Versorgung; Selbstversorgung ist das übergeordnete Rehabilitationsziel.

**Bausteintyp:** KB (Konzeptbaustein) → I.1 (Beratung, Handlung)

**Handlung:** ja

---

### Stufe 1 — Denkfrage (Aktivierung)

**Frage (155 Zeichen):** "Herr T., 55 Jahre, bekommt morgen sein Stoma. Er sagt: 'Ich weiß nicht ob ich jemals wieder schwimmen gehe.' Wie gehst du auf diese Aussage ein?"

**Hinweis:** "Was steckt hinter dieser Aussage? Was braucht Herr T. jetzt — Information, Gesprächsraum, oder beides?"

---

### Stufe 2 — Konzepterklärung (C1-Text, 560 Zeichen)

**C1:**
"**Stoma-Beratung — drei Dimensionen**

**1. Psychosoziale Begleitung:**
- Stoma verändert das **Körperbild** — viele Patienten erleben Scham, Ekel, Verlust der Intimität, Angst vor sozialer Ablehnung (Geruch, Leckage, Sichtbarkeit)
- Häufige Reaktionen: Rückzug, Depressivität, Ablehnung des Stomas, Partnerschaftsprobleme
- Pflegeaufgabe: **Normalisieren ohne zu verharmlosen** — 'Viele Stomaträger führen ein vollständig normales Leben — Schwimmen, Reisen, Beruf'
- Selbsthilfegruppe empfehlen (ILCO), professionelle psychologische Unterstützung bei Bedarf

**2. Selbstversorgung fördern — schrittweise:**
- Ziel: Patient versorgt sein Stoma komplett selbstständig vor Entlassung
- Stufenmodell: Zuschauen → Assistieren → Selbst machen mit Begleitung → Selbst machen ohne Hilfe
- Angehörige einbeziehen wenn gewünscht
- Stomatherapeutin als Kooperationspartnerin

**3. Ernährungstipps je Stomaart:**

**Kolostomie:**
- Blähende Speisen reduzieren (Kohl, Hülsenfrüchte) → weniger Beutelblähung
- Regelmäßige Mahlzeiten → Vorhersehbarkeit der Ausscheidung
- Viel trinken → kein Trinkmangel

**Ileostomie:**
- 2–3 l Flüssigkeit/Tag obligat (Elektrolytverluste!)
- Isotone Getränke (Elektrolytlösungen), keine reinen Fruchtsäfte
- Blähende Speisen und Ballaststoffe vorsichtig (verstopfen können Ileostomie)
- Feste Nahrungszeiten, langsam kauen

**Urostomie:**
- Viel trinken (2–2,5 l/Tag) → Harnwegsinfekte verhindern
- Keine harnsäuerenden Mittel ohne Rücksprache
- Preiselbeersaft traditionell empfohlen (Harnansäuerung, HWI-Prophylaxe)
(FG SKM Stoma)"

**B1:**
"**Stoma-Beratung — was Patienten wirklich brauchen**

**Körperbild und Psyche:**
Ein Stoma ist eine große Veränderung. Viele Patienten schämen sich, haben Angst vor Geruch oder Leckage, ziehen sich zurück. Das ist normal.

Was du tun kannst:
- Zuhören — ohne sofort Lösungen anzubieten
- Normalisieren: 'Viele Stomaträger gehen schwimmen, reisen, arbeiten ganz normal'
- Selbsthilfegruppe empfehlen (z. B. ILCO)
- Bei starker Belastung: Psychologen einbeziehen

**Selbstversorgung:**
Das große Ziel: der Patient kann sein Stoma selbst versorgen bevor er nach Hause geht. Schrittweise üben: zuerst zuschauen, dann helfen, dann selbst machen. Angehörige einbeziehen wenn der Patient das möchte.

**Essen — je nach Stomaart:**

Bei **Kolostomie**: Blähende Speisen (Kohl, Bohnen) reduzieren. Regelmäßige Mahlzeiten.

Bei **Ileostomie**: Viel trinken! 2–3 Liter täglich — der Körper verliert viel Flüssigkeit. Elektrolytgetränke. Vorsicht mit rohen Ballaststoffen.

Bei **Urostomie**: Viel trinken (2–2,5 l täglich) um Infekte zu verhindern. (FG SKM Stoma)"

- **Erklärungs-Step:** stepType `text` (displayFormat: list)
- **Glossar-Begriffe:** [Körperbild, ILCO, Stomatherapeutin, Elektrolytverlust, Selbstversorgung, psychosozial, Harnwegsinfekt]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Körperbildveränderungen beim Stoma lösen sich von alleine — man muss nichts tun"**
- **Fachbegriff:** Körperbild-Adaptation
- **Feedback (C1, 270 Zeichen):** "Falsch — **Anpassungsprozesse beim Körperbild** verlaufen nicht automatisch positiv. Ohne Unterstützung können sich Depressivität, sozialer Rückzug und partnerschaftliche Probleme chronifizieren. Aktive pflegerische Begleitung (Gesprächsangebote, Normalisierung, ILCO-Empfehlung, psychologische Unterstützung) ist indiziert."
- **Feedback (B1, 220 Zeichen):** "Falsch — das löst sich nicht von selbst. Viele Patienten ziehen sich zurück, werden depressiv, verlassen das Haus kaum noch. Du musst aktiv das Gespräch anbieten, normalisieren und Selbsthilfegruppen empfehlen. Bei starker Belastung: Psychologen einbeziehen."

**D2: "Ileostomie-Patienten sollen wie alle anderen trinken — 1,5 l reicht"**
- **Fachbegriff:** Ileostomie Flüssigkeitsbedarf
- **Feedback (C1, 260 Zeichen):** "Falsch — Ileostomie-Patienten haben einen **erhöhten Flüssigkeitsbedarf**: Das terminale Ileum resorbiert normalerweise Wasser; nach Ileostomie geht dieser Mechanismus verloren. Täglich **2–3 l** (bei hohem Volumen mehr), isotone Getränke, Elektrolytsubstitution — sonst Risiko für Dehydration und Hypokaliämie."
- **Feedback (B1, 215 Zeichen):** "Falsch — bei einer Ileostomie kommt viel Flüssigkeit mit dem Stuhl raus. **2–3 Liter täglich** mindestens — und Elektrolytgetränke. Mit 1,5 l wird der Patient dehydrieren und Kaliummangel bekommen. Das ist ein häufiger Fehler!"

**D3: "Selbstversorgung muss sofort nach der OP trainiert werden — am besten am OP-Tag"**
- **Fachbegriff:** Selbstversorgung Zeitplanung
- **Feedback (C1, 250 Zeichen):** "Falsch — direkt nach der OP sind Patienten in der **Schockphase**: Schmerzen, Narkosenachwirkungen, emotionale Überforderung. Selbstversorgung wird **schrittweise** aufgebaut: Zuschauen → Assistieren → selbst machen mit Anleitung → selbst machen. Beginn wenn Patient stabil und aufnahmebereit ist."
- **Feedback (B1, 205 Zeichen):** "Falsch — direkt nach der OP ist der Patient überfordert: Schmerzen, Schock, Narkosenachwirkungen. Erst wenn er sich stabilisiert hat, beginnt das schrittweise Üben. Zuerst zuschauen, dann mithelfen, dann selbst machen. Das geht nicht an einem Tag."

### Richtig-Feedback
**C1 (260 Zeichen):** "Sehr gut. Beratung = 3 Dimensionen: 1. Psychosozial (Körperbild, Normalisierung, ILCO, Psychologe). 2. Selbstversorgung schrittweise (Zuschauen→Assistieren→selbst). 3. Ernährung je Stomaart: Ileostomie 2–3 l + Elektrolyte; Kolostomie blähungsarm; Urostomie 2–2,5 l. (FG SKM Stoma)"

**B1 (225 Zeichen):** "Genau! Stoma-Beratung = Psyche (zuhören, normalisieren, ILCO) + Selbstversorgung schrittweise + Ernährung: Ileostomie viel trinken (2–3 l + Elektrolyte), Kolostomie blähungsarm, Urostomie viel trinken (2–2,5 l) gegen Infekte."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 3 Dimensionen umfasst die Stoma-Beratung — und was ist der erhöhte Flüssigkeitsbedarf bei Ileostomie?"
- **Rückseite:** "1. Psychosozial (Körperbild, Normalisierung, ILCO, Psychologe bei Bedarf) 2. Selbstversorgung schrittweise (zuschauen→assistieren→selbst) 3. Ernährung: Ileostomie 2–3 l + Elektrolyte; Kolostomie blähungsarm; Urostomie 2–2,5 l. Ileostomie-Flüssigkeit: obligat — Elektrolytverluste!"
- **Kategorie:** handlung

---

## B18 — rektale-applikation (Bloom 3)

**Lernziel:** Du kannst Suppositorien, Klysmen und Einläufe unterscheiden, die korrekte Durchführung beschreiben und Kontraindikationen benennen.

**Kernaussage:** Rektale Applikationen sind Standardmaßnahmen in der Pflege — korrekte Technik, Lagerung und Kontraindikationskenntnis sind Pflicht.

**Bausteintyp:** KB (Konzeptbaustein) → I.1 (Handlung, Differenzierung)

**Handlung:** ja

---

### Stufe 1 — Denkfrage (Aktivierung)

**Frage (145 Zeichen):** "Du sollst einem Patienten ein Bisacodyl-Zäpfchen geben. Was überprüfst du bevor du es einführst — und wie lagerst du den Patienten?"

**Hinweis:** "Denke an: Lagerung, Handhygiene, Anatomie (Winkel des Rektums), und was du vorher ausschließen musst."

---

### Stufe 2 — Konzepterklärung (C1-Text, 540 Zeichen)

**C1:**
"**Rektale Applikationsformen — Überblick**

**1. Suppositorium (Zäpfchen):**
- **Anwendung**: Zur Medikamentenapplikation (z. B. Bisacodyl, Paracetamol, Antiemetika) oder Laxanzien (Glycerol-Supp.)
- **Technik**: Linksseitenlage, Schutzhandschuhe, Zäpfchen mit der abgerundeten Spitze zuerst einführen (gegen Darmperistaltik sicherer), 2–4 cm tief, danach 5–10 Min liegen lassen
- **Kontraindikation**: Rektumkarzinom, akute Proktitis, Anal-/Rektum-OP, Thrombopenie (<20.000 Thrombozyten), Koagulopathie, Neutropenie

**2. Klysmen / Mikroklistiere:**
- **Anwendung**: Kurz wirksame Laxanzien-Instillation (z. B. Klysma Fresenius, Freka Clyss): 5–10 ml fertig portioniert
- **Technik**: Linksseitenlage, Kanüle 5–7 cm einführen, Inhalt langsam eindrücken, 5–10 Min Wartezeit
- **Wirkung**: 5–15 Min nach Applikation (stimulierend/osmotisch)

**3. Hoher Einlauf:**
- **Anwendung**: Bei Koprostase, Darmvorbereitung (OP/Koloskopie), chronische Obstipation
- **Technik**: Linksseitenlage → Kniebrust-Lage (erleichtert Füllung ins Sigma/Colon desc.), Einlaufklistier oder Irrigator: 500–1000 ml körperwarmes Wasser/NaCl
- **Durchführung**: Rektale Sonde 10–15 cm einführen, Fluss langsam, Druck minimal, Patient soll so lange wie möglich halten (5–15 Min), dann Toilette
- **Kontraindikation**: V.a. Perforation, akute Entzündung, frische Anastomosen"

**B1:**
"**Drei rektale Maßnahmen — was ist der Unterschied?**

**1. Zäpfchen (Suppositorium):**
Wird in den After eingeführt. Kann Abführmittel sein (z. B. Bisacodyl-Zäpfchen) oder ein anderes Medikament (Schmerzmittel, Mittel gegen Übelkeit).

Wie geht das?
- Patient liegt auf der linken Seite
- Schutzhandschuhe anziehen
- Zäpfchen mit der runden Spitze zuerst einführen, ca. 2–4 cm tief
- Patient soll 5–10 Min liegen bleiben

Wann darfst du es NICHT tun? Bei Darmoperationen, Entzündungen im After-Bereich, sehr niedrigen Blutplättchen.

**2. Klysma (Mikroklistier):**
Kleine fertig portionierte Flasche mit Laxanzien-Lösung. 5–10 ml in den Darm einführen. Wirkt nach 5–15 Min. Einfacher als ein großer Einlauf.

**3. Einlauf (hoher Einlauf):**
Größere Menge warmes Wasser (500–1000 ml) in den Darm geben — bei starker Verstopfung oder als Vorbereitung für eine Untersuchung. Patient liegt zuerst links, dann knie-brust. Patient soll das Wasser 5–15 Min halten, dann Toilette.

Wann darfst du es NICHT tun? Bei Verdacht auf Darmperforation oder frischen Nähten im Darm."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Suppositorium, Klysma, Klistier, Kniebrust-Lage, Koprostase, Kontraindikation, Thrombopenie, Anastomose, Proktitis]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Zäpfchen werden mit der spitzen Seite zuerst eingeführt"**
- **Fachbegriff:** Suppositorium Einführtechnik
- **Feedback (C1, 250 Zeichen):** "Nicht korrekt — die übliche Empfehlung ist, Suppositorien mit der **abgerundeten (stumpfen) Seite zuerst** einzuführen. Die spitze Seite schafft durch die Muskelspannung des Sphinkters eine 'Verankerung'. Die Rektumperistaltik drückt das Zäpfchen nicht hinaus. Technisch sicher und für den Patienten angenehmer."
- **Feedback (B1, 205 Zeichen):** "Nicht so — man führt das Zäpfchen mit der **runden, stumpfen Seite** zuerst ein. Die spitze Seite wirkt dann wie ein Anker. Der After hält das Zäpfchen durch seine Muskelspannung besser. So fällt es nicht so leicht heraus."

**D2: "Ein Einlauf kann immer gegeben werden — auch bei frischen Darmoperationen"**
- **Fachbegriff:** Einlauf Kontraindikationen
- **Feedback (C1, 255 Zeichen):** "Falsch und gefährlich — ein Einlauf ist bei **frischen Anastomosen** (Darmnahtstellen) und **Verdacht auf Perforation** absolut kontraindiziert. Druck durch das Einlaufvolumen kann eine Anastomose zum Platzen bringen oder eine bestehende Perforation vergrößern. Immer ärztliche Anordnung und Kontraindikationscheck."
- **Feedback (B1, 210 Zeichen):** "Falsch — ein Einlauf ist nach Darmoperationen oft verboten! Wenn der Darm gerade genäht wurde, kann der Druck des Einlaufs die Naht zum Platzen bringen. Das ist sehr gefährlich. Immer vorher beim Arzt nachfragen und die Akte prüfen."

**D3: "Nach einem Klysma muss der Patient sofort zur Toilette"**
- **Fachbegriff:** Einwirkzeit Klysma
- **Feedback (C1, 245 Zeichen):** "Falsch — nach Applikation eines Klysters sollte der Patient **5–10 Min in Linksseitenlage verbleiben** damit sich das Mittel verteilen und wirken kann. Zu frühes Aufstehen → Inhalt fließt sofort ab → reduzierte Wirkung. Erst nach Einwirkzeit signalisiert der Patient Stuhldrang → dann Toilette."
- **Feedback (B1, 200 Zeichen):** "Nicht sofort — erst **5–10 Minuten** liegen bleiben! Das Mittel braucht Zeit um zu wirken. Wenn der Patient sofort aufsteht, fließt alles heraus bevor es geholfen hat. Erst wenn der Drang kommt — dann Toilette."

### Richtig-Feedback
**C1 (255 Zeichen):** "Sehr gut. Suppositorium: runde Seite zuerst, Linksseitenlage, 2–4 cm, 5–10 Min warten. Klysma: 5–10 ml fertig portioniert, 5–10 Min warten, 5–15 Min Wirkung. Einlauf: 500–1000 ml körperwarm, Kniebrust-Lage, 10–15 Min halten. KI: Perforation, frische Anastomosen."

**B1 (215 Zeichen):** "Genau! Zäpfchen = runde Seite zuerst, links liegen, 5–10 Min warten. Klysma = kleine Flasche, 5–10 Min warten, wirkt nach 5–15 Min. Einlauf = großer Einlauf 500–1000 ml warm, 10–15 Min halten. Nie bei frischen Darmoperationen!"

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie unterscheiden sich Suppositorium, Klysma und hoher Einlauf — und wann sind sie kontraindiziert?"
- **Rückseite:** "Suppositorium: runde Seite zuerst, Linksseitenlage, 2–4 cm, 5–10 Min, KI: Anastomose/Proktitis/Thrombopenie. Klysma: 5–10 ml fertig, 5–10 Min warten, Wirkung 5–15 Min. Einlauf: 500–1000 ml körperwarm, Kniebrust-Lage, 10–15 Min halten. Alle KI: Perforation, frische Anastomosen."
- **Kategorie:** handlung

---
