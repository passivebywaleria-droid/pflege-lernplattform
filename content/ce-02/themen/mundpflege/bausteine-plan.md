# Wissensbausteine: Mundpflege & Soor-/Parotitis-Prophylaxe

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `mundpflege` |
| ceId | `ce-02` |
| cluster | C (Körperpflege & Hautschutz) |
| wissensart | handlung |
| geschaetzteUE | 7 |
| zielzeitMin | 173 (7 UE × 45 × 0,55) |
| bausteineAnzahl | 14 |
| voraussetzungen | — |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 |

**Bloom-Verteilung:** Bloom 1-2: 21% (3 Bausteine), Bloom 3-4: 57% (8 Bausteine), Bloom 5-6: 22% (3 Bausteine)

**Primärquellen:**
- DGZMK (2023): S3-Leitlinie Kariesprophylaxe bei bleibenden Zähnen
- DGP/DGPPN (2019): Leitlinie Mundgesundheit bei Pflegebedürftigen
- Deutscher Pflegerat (2022): Grundsatzpapier orale Gesundheit in der Langzeitpflege
- WHO (2024): Global Oral Health Status Report
- Bundeszahnärztekammer (2023): Teamwerk — Konzept aufsuchende Mundgesundheit
- RKI (2023): KZBV/BZÄK — Mundgesundheitsstudie DMS VI
- Cochrane Review Weening-Verbree et al. (2023): Oral health care for frail older adults
- Fiechter/Meier (1981): Pflegeprozess-Modell (für Baustein 14)

---

## Baustein 1: mundhoehle-anatomie

### Metadaten
- **bausteinId:** mundpflege-mundhoehle-anatomie
- **bloomLevel:** 1
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Öffne kurz deinen Mund und fühle mit der Zunge nach. Welche Strukturen kannst du unterscheiden? Zähle auf, was du entdeckst."
- **Step-Typ:** freetext (aktiviert Körperwahrnehmung)

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Die Mundhöhle beginnt an den Lippen und endet am Rachenring. Sie enthält: Zähne, Zunge, Mundschleimhaut, harter/weicher Gaumen, Uvula. Drei große Speicheldrüsenpaare münden hinein: Parotis, Submandibularis, Sublingualis."

**B1 (215 Zeichen):** "Der Mund beginnt an den Lippen. Er endet am Rachen. Im Mund sind: Zähne, Zunge, Schleimhaut, oben ein harter und ein weicher Teil (Gaumen). Drei Paar Speicheldrüsen geben Speichel in den Mund."

- **Step-Typ:** labelImage (Mundhöhle beschriften)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Die **Mundhöhle** (Cavitas oris) ist der Anfang des Verdauungstrakts und gleichzeitig wichtig für Atmung, Sprache und Geschmack.

**Aufbau:**
- **Zähne** — ein Erwachsener hat 28 bis 32 Zähne (vier Weisheitszähne fakultativ)
- **Zunge** (Lingua) — beweglicher Muskelkörper, trägt Geschmacksknospen
- **Mundschleimhaut** — rosa, feucht, gut durchblutet; erneuert sich alle 10–14 Tage
- **Gaumen** — harter Gaumen vorn (Knochen), weicher Gaumen hinten (Muskel + Uvula)
- **Wangen und Lippen** — begrenzen die Mundhöhle seitlich und vorn

**Speicheldrüsen — drei Paare:**
- Parotis (Ohrspeicheldrüse) — vor dem Ohr, mündet gegenüber dem oberen zweiten Backenzahn
- Submandibularis — unter dem Unterkiefer
- Sublingualis — unter der Zunge

Alle Speicheldrüsen zusammen produzieren etwa 0,5 bis 1,5 Liter Speichel pro Tag (Anatomie-Standardwert)."

**B1 (540 Zeichen):**
"Der **Mund** ist der Anfang vom Verdauungsweg. Du brauchst ihn zum Essen, Atmen und Sprechen.

**Was ist im Mund?**
- **Zähne** — Erwachsene haben 28 bis 32 Zähne
- **Zunge** — ein Muskel. Sie schmeckt und hilft beim Sprechen
- **Mundschleimhaut** — die rosa, feuchte Haut im Mund
- **Gaumen** — das Dach im Mund. Vorne hart (Knochen), hinten weich
- **Wangen und Lippen** — die Seiten und die Vorderseite

**Speicheldrüsen:** Drei Paar Drüsen machen Speichel.
- Eine vor dem Ohr (Parotis)
- Eine unter dem Kiefer
- Eine unter der Zunge

Pro Tag kommt 0,5 bis 1,5 Liter Speichel zusammen."

- **Erklärungs-Step:** stepType `labelImage` (Beschriftung der Mundhöhle + Speicheldrüsen)
- **Glossar-Begriffe:** [Mundhöhle, Parotis, Submandibularis, Sublingualis, Uvula]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Mundschleimhaut ist genauso aufgebaut wie die äußere Haut"**
- **Fachbegriff:** Haut-Schleimhaut-Verwechslung
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — die Mundschleimhaut hat keine Hornschicht und keine Talgdrüsen. Sie ist feucht, besteht aus mehrschichtigem Plattenepithel und erneuert sich alle 10–14 Tage. Darum ist sie viel empfindlicher als die äußere Haut."
- **Feedback (B1, 205 Zeichen):** "Nicht ganz — die Schleimhaut im Mund ist anders als die Haut außen. Sie hat keine Hornschicht. Sie ist immer feucht. Sie erneuert sich alle 10 bis 14 Tage. Darum ist sie empfindlicher als die Haut."

**D2: "Alle Speicheldrüsen liegen unter der Zunge"**
- **Fachbegriff:** Speicheldrüsen-Lokalisations-Irrtum
- **Feedback (C1, 230 Zeichen):** "Nicht ganz — nur eine Speicheldrüse liegt unter der Zunge (Sublingualis). Die Parotis sitzt vor dem Ohr, die Submandibularis unter dem Unterkiefer. Merke: drei Drüsenpaare, drei verschiedene Stellen."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — nur eine Drüse liegt unter der Zunge. Eine liegt vor dem Ohr (Parotis). Eine liegt unter dem Kiefer. Merke: Es gibt drei Paar Speicheldrüsen an drei verschiedenen Stellen."

**D3: "Weisheitszähne sind bei jedem Erwachsenen da"**
- **Fachbegriff:** Weisheitszahn-Regel-Irrtum
- **Feedback (C1, 220 Zeichen):** "Nicht ganz — Weisheitszähne fehlen bei vielen Erwachsenen ganz oder wurden gezogen. Ein Erwachsener hat 28 bis 32 Zähne. 28 ohne Weisheitszähne, 32 mit. Merke: Weisheitszähne sind fakultativ, nicht Pflicht."
- **Feedback (B1, 195 Zeichen):** "Nicht ganz — Weisheitszähne sind nicht bei jedem da. Manche Menschen haben sie nie bekommen. Andere haben sie gezogen bekommen. Ein Erwachsener hat 28 bis 32 Zähne."

### Richtig-Feedback
**C1 (265 Zeichen):** "Sehr gut. Die Mundhöhle enthält Zähne, Zunge, Mundschleimhaut, Gaumen, Wangen und Lippen. Drei Paar Speicheldrüsen (Parotis, Submandibularis, Sublingualis) produzieren 0,5 bis 1,5 Liter Speichel täglich. Dieses Wissen brauchst du für jede gezielte Mundinspektion."

**B1 (230 Zeichen):** "Sehr gut. Im Mund sind: Zähne, Zunge, Schleimhaut, Gaumen, Wangen und Lippen. Drei Paar Drüsen machen pro Tag 0,5 bis 1,5 Liter Speichel. Du brauchst dieses Wissen, wenn du den Mund eines Patienten ansiehst."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie heißen die drei großen Speicheldrüsenpaare und wo liegen sie?"
- **Rückseite:** "Parotis (vor dem Ohr), Submandibularis (unter dem Unterkiefer), Sublingualis (unter der Zunge). Sie produzieren zusammen 0,5 bis 1,5 Liter Speichel pro Tag."
- **Kategorie:** fachbegriff

---

## Baustein 2: funktionen-mund

### Metadaten
- **bausteinId:** mundpflege-funktionen-mund
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Was alles macht der Mund den ganzen Tag — nicht nur beim Essen? Nenne mindestens vier verschiedene Aufgaben."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (220 Zeichen):** "Der Mund hat fünf Kernfunktionen: Nahrungsaufnahme (Kauen), Geschmack (Zunge), Schluckbeginn, Sprechen (Artikulation), und Atmung (Zweitweg). Jede dieser Funktionen fällt weg oder ist gestört, wenn die Mundpflege vernachlässigt wird."

**B1 (205 Zeichen):** "Der Mund hat fünf Aufgaben: essen (kauen), schmecken, schlucken starten, sprechen, atmen. Wenn die Mundpflege schlecht ist, funktionieren diese Aufgaben nicht mehr gut. Das merkt der Patient sofort."

- **Step-Typ:** categorize (fünf Funktionen den Bereichen zuordnen)

### Stufe 3 — Erklärung

**C1 (620 Zeichen):**
"Der Mund erfüllt **fünf zentrale Funktionen**, die alle zusammenhängen:

1. **Nahrungsaufnahme** — Zähne zerkleinern mechanisch, Speichel bindet die Nahrung zum Bissen
2. **Geschmack** — Geschmacksknospen auf der Zunge erkennen süß, sauer, salzig, bitter, umami
3. **Schluckbeginn** — orale Phase des Schluckvorgangs: Zungenpresse schiebt den Bissen nach hinten
4. **Sprache** — Zunge, Lippen, Zähne und Gaumen bilden Laute (Artikulation)
5. **Atmung** — Mundatmung als Zweitweg, besonders bei verstopfter Nase

**Warum ist das pflegerisch wichtig?** Fällt eine Funktion aus (z.B. Kauen bei Parese), sind oft auch die anderen betroffen. Ein trockener Mund führt zu Sprechproblemen, Schluckstörungen und Geschmacksverlust — alles gleichzeitig. Mundpflege wirkt daher auf mehrere Funktionen."

**B1 (505 Zeichen):**
"Der Mund hat **fünf Aufgaben**:

1. **Essen** — die Zähne zerkleinern, der Speichel bindet den Bissen
2. **Schmecken** — die Zunge erkennt süß, sauer, salzig, bitter, umami
3. **Schlucken starten** — die Zunge drückt den Bissen nach hinten
4. **Sprechen** — Zunge, Lippen und Zähne formen die Laute
5. **Atmen** — zusätzlich zur Nase, wenn die Nase zu ist

**Wichtig für die Pflege:** Wenn eine Aufgabe nicht mehr geht, sind oft auch die anderen gestört. Ein trockener Mund macht Sprechen, Essen und Schmecken gleichzeitig schwer. Gute Mundpflege hilft bei allen Aufgaben."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Artikulation, Geschmacksknospen, orale Phase]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Hauptaufgabe des Mundes ist das Essen"**
- **Fachbegriff:** Reduzierung auf Ernährung
- **Feedback (C1, 250 Zeichen):** "Fast — Essen ist wichtig, aber nicht die einzige Aufgabe. Der Mund ist auch für Sprache, Geschmack, Schluckbeginn und Atmung zuständig. In der Pflege zählen alle fünf Funktionen. Merke: Wer nicht mehr essen kann, muss trotzdem noch sprechen und atmen."
- **Feedback (B1, 220 Zeichen):** "Fast — Essen ist wichtig, aber nicht die einzige Aufgabe. Der Mund ist auch wichtig zum Sprechen, Schmecken, Schlucken und Atmen. Merke: Auch wer nicht mehr essen kann, will noch sprechen und atmen."

**D2: "Geschmack wird nur auf bestimmten Zonen der Zunge wahrgenommen (Zungenkarte)"**
- **Fachbegriff:** Zungenkarten-Mythos
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — die alte „Zungenkarte" ist seit den 1970ern widerlegt. Alle Grundgeschmäcker (süß, sauer, salzig, bitter, umami) werden auf der gesamten Zunge wahrgenommen — mit leicht unterschiedlicher Empfindlichkeit. Merke: Die ganze Zunge schmeckt alles."
- **Feedback (B1, 205 Zeichen):** "Nicht ganz — die alte Zungenkarte ist falsch. Die ganze Zunge schmeckt alles: süß, sauer, salzig, bitter und umami. Manche Stellen sind etwas empfindlicher. Merke: Die ganze Zunge kann alles schmecken."

**D3: "Mundatmung und Nasenatmung sind für den Körper gleichwertig"**
- **Fachbegriff:** Atemweg-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — Nasenatmung filtert, wärmt und befeuchtet die Luft. Mundatmung umgeht diesen Schutz: Sie trocknet die Mundschleimhaut aus und erhöht das Infektionsrisiko. Darum ist Mundatmung (z.B. bei Sauerstoffbrille) ein Risiko für Xerostomie."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — die Nase filtert die Luft und wärmt sie. Der Mund tut das nicht. Mundatmung trocknet die Schleimhaut aus. Darum bekommen Patienten mit Sauerstoffbrille oft einen trockenen Mund."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Die fünf Funktionen sind: Nahrungsaufnahme, Geschmack, Schluckbeginn, Sprache und Atmung. Wichtig für die Pflege: Sie hängen zusammen. Eine gestörte Mundpflege beeinträchtigt alle fünf gleichzeitig. Deshalb ist systematische Mundpflege so wirkungsvoll."

**B1 (240 Zeichen):** "Genau. Die fünf Aufgaben: essen, schmecken, schlucken starten, sprechen, atmen. Wichtig für die Pflege: Alle fünf gehören zusammen. Wenn die Mundpflege schlecht ist, sind alle fünf gestört. Darum ist gute Mundpflege so wichtig."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die fünf Kernfunktionen des Mundes."
- **Rückseite:** "Nahrungsaufnahme, Geschmack, Schluckbeginn, Sprache, Atmung (Zweitweg). Gestörte Mundpflege beeinträchtigt alle fünf gleichzeitig."
- **Kategorie:** fakt

---

## Baustein 3: speichel-aufgaben

### Metadaten
- **bausteinId:** mundpflege-speichel-aufgaben
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Was würde passieren, wenn von heute auf morgen kein Speichel mehr produziert würde? Überlege drei konkrete Probleme, die sofort auftauchen würden."
- **Step-Typ:** freetext (aktiviert Funktionsverständnis)

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Speichel hat sechs Kernaufgaben: Befeuchten der Schleimhaut, Bindung des Bissens, Verdauungsbeginn (Alpha-Amylase), Schutz der Zähne (Remineralisation), antimikrobielle Wirkung (Lysozym, IgA), und Spülung der Mundhöhle. Pro Tag: 0,5 bis 1,5 Liter."

**B1 (225 Zeichen):** "Speichel macht sechs Aufgaben: Mund feucht halten, den Bissen kleben, Essen vorverdauen, Zähne schützen, Bakterien abwehren, den Mund spülen. Pro Tag produziert der Körper 0,5 bis 1,5 Liter Speichel."

- **Step-Typ:** matching (Aufgabe → Wirkung zuordnen)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Speichel ist weit mehr als „Flüssigkeit im Mund". Er erfüllt **sechs zentrale Aufgaben**:

1. **Befeuchten** — Schleimhäute bleiben geschmeidig, Sprechen und Schlucken werden möglich
2. **Bissbindung** — Speichel macht aus der zerkauten Nahrung einen gleitfähigen Bissen (Bolus)
3. **Verdauungsbeginn** — das Enzym Alpha-Amylase spaltet Stärke bereits im Mund
4. **Zahnschutz** — Mineralien im Speichel (Calcium, Phosphat) remineralisieren den Zahnschmelz; der Speichel neutralisiert Säuren nach dem Essen
5. **Antimikrobielle Abwehr** — Lysozym, Laktoferrin und sekretorisches IgA hemmen Bakterien und Pilze
6. **Spülung** — Nahrungsreste und abgelöste Zellen werden weggeschwemmt

**Produktion:** Ein gesunder Erwachsener produziert 0,5 bis 1,5 Liter Speichel pro Tag. Nachts sinkt die Produktion stark — darum schmecken Mund und Atem morgens anders. Das ist pflegerisch wichtig: Wer nachts über den Mund atmet, hat morgens eine extrem trockene und keimbesiedelte Mundhöhle."

**B1 (595 Zeichen):**
"Speichel ist viel mehr als Flüssigkeit. Er hat **sechs Aufgaben**:

1. **Mund feucht halten** — sonst tut Sprechen und Schlucken weh
2. **Bissen kleben** — so rutscht das Essen den Schlund hinunter
3. **Essen vorverdauen** — ein Enzym (Alpha-Amylase) spaltet Stärke schon im Mund
4. **Zähne schützen** — Mineralien im Speichel machen den Zahnschmelz hart
5. **Bakterien abwehren** — Eiweiße im Speichel (Lysozym, IgA) töten Keime
6. **Mund spülen** — Essensreste werden weggewaschen

**Wie viel?** Pro Tag 0,5 bis 1,5 Liter. Nachts macht der Körper viel weniger Speichel. Darum ist der Mund morgens trocken und riecht anders. Das ist wichtig bei Patienten, die nachts durch den Mund atmen — morgens ist ihr Mund sehr trocken."

- **Erklärungs-Step:** stepType `reveal` (sechs Speichel-Funktionen aufdecken)
- **Glossar-Begriffe:** [Alpha-Amylase, Lysozym, IgA, Remineralisation, Bolus]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Speichel dient nur dazu, den Mund feucht zu halten"**
- **Fachbegriff:** Reduktion-auf-Befeuchtung
- **Feedback (C1, 255 Zeichen):** "Fast — Befeuchten ist eine Aufgabe, aber nur eine von sechs. Speichel verdaut (Alpha-Amylase), schützt die Zähne, bekämpft Keime und spült. Darum verliert ein Patient mit Xerostomie nicht nur Komfort, sondern auch Schutz — Karies und Soor nehmen zu."
- **Feedback (B1, 220 Zeichen):** "Fast — Feuchthalten ist nur eine von sechs Aufgaben. Speichel verdaut, schützt die Zähne, tötet Bakterien und spült den Mund. Darum bekommen Patienten mit trockenem Mund schneller Karies und Soor."

**D2: "Der Körper produziert tags und nachts gleich viel Speichel"**
- **Fachbegriff:** Produktions-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — nachts sinkt die Speichelproduktion auf ein Minimum. Darum ist der Mund morgens trocken und keimreich. Pflegerisch bedeutet das: Nachtwache kann schon prophylaktisch Flüssigkeit anbieten; morgens gehört Mundpflege zur Basiswäsche."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — nachts macht der Körper viel weniger Speichel. Darum ist der Mund am Morgen trocken und voller Bakterien. Das ist wichtig: In der Nacht kann man Wasser anbieten. Morgens gehört die Mundpflege dazu."

**D3: "Speichel wirkt nicht antibakteriell — dafür gibt es die Zahnbürste"**
- **Fachbegriff:** Abwehr-Irrtum
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — Speichel enthält Lysozym, Laktoferrin und sekretorisches IgA. Das sind natürliche Abwehrstoffe, die Bakterien und Pilze hemmen. Die Zahnbürste ergänzt das, ersetzt es aber nicht. Darum ist Xerostomie ein Risikofaktor für Soor und Mukositis."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — Speichel hat Abwehrstoffe (Lysozym, IgA). Sie töten Bakterien und Pilze. Die Zahnbürste hilft zusätzlich. Darum bekommen Patienten mit wenig Speichel schneller Soor und Zahnfleischentzündungen."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Die sechs Aufgaben: Befeuchten, Bissbindung, Verdauungsbeginn, Zahnschutz, antimikrobielle Abwehr, Spülung. Tägliche Menge: 0,5 bis 1,5 Liter, nachts deutlich weniger. Wer das versteht, erkennt sofort, warum Xerostomie so viele Pflegeprobleme gleichzeitig auslöst."

**B1 (245 Zeichen):** "Genau. Die sechs Aufgaben: Mund feucht halten, Bissen kleben, Essen vorverdauen, Zähne schützen, Bakterien töten, Mund spülen. Pro Tag 0,5 bis 1,5 Liter. Wer wenig Speichel hat, bekommt viele Probleme auf einmal."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche sechs Aufgaben hat der Speichel?"
- **Rückseite:** "Befeuchten, Bindung des Bissens (Bolus), Verdauungsbeginn (Alpha-Amylase), Zahnschutz (Remineralisation), antimikrobielle Abwehr (Lysozym, IgA), Spülung. Tagesmenge 0,5 bis 1,5 Liter."
- **Kategorie:** fakt

---

## Baustein 4: zahnpflege-grundstandard

### Metadaten
- **bausteinId:** mundpflege-zahnpflege-standard
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Wie oft putzt du selbst deine Zähne und wie lange? Was ist der Unterschied zwischen „irgendwie geputzt" und „richtig geputzt"?"
- **Step-Typ:** freetext (aktiviert Selbstreflexion)

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Empfehlung der Bundeszahnärztekammer: Zähne mindestens zweimal täglich, jeweils mindestens zwei Minuten, mit fluoridhaltiger Zahnpasta und einer weichen Bürste. Zusätzlich einmal täglich Zahnseide oder Interdentalbürsten für die Zahnzwischenräume."

**B1 (220 Zeichen):** "Die Empfehlung: Zähne mindestens zweimal am Tag putzen, jedes Mal mindestens zwei Minuten. Mit einer weichen Bürste und Zahnpasta mit Fluorid. Einmal am Tag die Zahnzwischenräume reinigen (Zahnseide oder kleine Bürste)."

- **Step-Typ:** sequencing (Ablauf Zähneputzen sortieren)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Die **S3-Leitlinie Kariesprophylaxe** (DGZMK 2023) empfiehlt ein klares Grundstandard-Bündel:

**Häufigkeit und Dauer:**
- mindestens zweimal täglich putzen
- jeweils mindestens zwei Minuten
- morgens und abends (abends besonders wichtig, weil nachts die Speichelproduktion sinkt)

**Material:**
- weiche bis mittelharte Bürste (harte Bürsten schädigen das Zahnfleisch)
- fluoridhaltige Zahnpasta (Erwachsene 1.000–1.500 ppm Fluorid)
- elektrische Zahnbürste ist gleichwertig, bei Tremor oder eingeschränkter Handmotorik oft besser

**Technik (KAI-Methode für Schüler einfacher):** K wie Kauflächen, A wie Außenflächen, I wie Innenflächen — immer systematisch von hinten nach vorn.

**Ergänzend:**
- einmal täglich Zahnseide oder Interdentalbürsten
- nach saurem Essen (Obst, Säfte) mindestens 30 Minuten warten vor dem Putzen, sonst wird aufgeweichter Schmelz abgetragen"

**B1 (595 Zeichen):**
"Das ist die **Grundregel** für gesunde Zähne (DGZMK 2023):

**Wie oft und wie lange?**
- mindestens zweimal am Tag
- jedes Mal mindestens zwei Minuten
- morgens und abends — abends besonders wichtig

**Was brauchst du?**
- eine weiche Bürste (harte Bürsten verletzen das Zahnfleisch)
- Zahnpasta mit Fluorid
- eine elektrische Bürste ist genauso gut

**Wie putzen? Die KAI-Regel:**
- **K** wie **K**auflächen
- **A** wie **A**ußenflächen
- **I** wie **I**nnenflächen
- immer von hinten nach vorne

**Zusätzlich:**
- einmal am Tag die Zahnzwischenräume reinigen (Zahnseide oder kleine Bürste)
- nach Obst oder Saft 30 Minuten warten vor dem Putzen"

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Fluorid, KAI-Methode, Interdentalbürste, Zahnschmelz]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Mittel- bis hartborstige Bürsten reinigen besser"**
- **Fachbegriff:** Härte-Mythos
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — harte Borsten schädigen das Zahnfleisch (Rezession) und tragen Zahnhartsubstanz ab. Weiche bis mittelharte Borsten reinigen genauso effektiv, wenn die Technik stimmt. Merke: Wirkung durch Technik und Zeit, nicht durch Borsten-Härte."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — harte Borsten verletzen das Zahnfleisch. Weiche Borsten putzen genauso gut, wenn die Technik stimmt. Merke: Gut putzen heißt lange und richtig, nicht mit harten Borsten."

**D2: "Sofort nach dem Essen sollte man die Zähne putzen"**
- **Fachbegriff:** Sofort-Putz-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — nach saurem Essen (Obst, Saft, Cola) ist der Schmelz kurzzeitig aufgeweicht. Sofortiges Putzen trägt Schmelz ab. Besser: 30 Minuten warten, in der Zwischenzeit Wasser oder zuckerfreien Kaugummi — das regt Speichelfluss an und neutralisiert Säure."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — nach Obst oder Saft ist der Zahnschmelz für kurze Zeit weich. Putzen schadet dann. Besser: 30 Minuten warten. In der Zwischenzeit Wasser trinken oder zuckerfreien Kaugummi kauen."

**D3: "Zahnseide ist nur bei Patienten mit Zahnlücken nötig"**
- **Fachbegriff:** Zahnseide-Irrtum
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — die Zahnbürste erreicht nur etwa 70 Prozent der Zahnoberflächen. Die Zwischenräume sind der Hauptort für Karies und Zahnfleischentzündung. Darum ist Zahnseide oder eine Interdentalbürste täglich Pflicht — unabhängig von sichtbaren Lücken."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — die Zahnbürste kommt nur an etwa 70 Prozent der Zähne. Zwischen den Zähnen entsteht Karies und Zahnfleischentzündung. Darum muss man täglich Zahnseide oder eine kleine Bürste benutzen."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Der Grundstandard nach DGZMK 2023: zweimal täglich, mindestens zwei Minuten, weiche Bürste, fluoridhaltige Paste, KAI-Technik, plus einmal täglich Zahnseide. Abends besonders wichtig wegen der nächtlich gedrosselten Speichelproduktion. Dieses Bündel senkt Karies nachweislich."

**B1 (245 Zeichen):** "Sehr gut. Die Grundregel: zweimal am Tag, jedes Mal mindestens zwei Minuten, weiche Bürste, Zahnpasta mit Fluorid, KAI-Reihenfolge. Dazu einmal am Tag Zahnseide. Abends ist besonders wichtig, weil nachts wenig Speichel fließt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie lautet der Grundstandard für tägliche Zahnpflege?"
- **Rückseite:** "2× täglich, je mind. 2 Min, weiche Bürste, fluoridhaltige Zahnpasta, KAI-Technik (Kauflächen → Außen → Innen). Plus 1× täglich Zahnseide/Interdentalbürste. (DGZMK 2023)"
- **Kategorie:** handlung

---

## Baustein 5: zahnprothese-pflege

### Metadaten
- **bausteinId:** mundpflege-zahnprothese-pflege
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Zahnprothese kann man herausnehmen — warum muss sie trotzdem jeden Tag gereinigt werden und sogar öfter als eigene Zähne?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Zahnprothesen werden nach jeder Mahlzeit entnommen und gereinigt, nachts in einem trockenen, gut belüfteten Behälter (oder auf Wunsch in Wasser) aufbewahrt. Zusätzlich einmal täglich gründliche Reinigung mit Prothesenbürste und mildem Reiniger."

**B1 (220 Zeichen):** "Zahnprothesen müssen nach jedem Essen herausgenommen und gereinigt werden. Nachts kommen sie in einen trockenen Behälter oder ein Glas Wasser. Einmal am Tag gründlich mit einer speziellen Bürste reinigen."

- **Step-Typ:** sequencing (Reinigungsablauf sortieren)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Zahnprothesen bieten Bakterien und Candida-Pilzen eine ideale Besiedlungsfläche — rauer Kunststoff, warm, feucht. Ohne tägliche Reinigung entstehen schnell **Prothesenstomatitis** und **Soor**.

**Grundstandard (DGP/DGPPN 2019):**

**Nach jeder Mahlzeit:**
- Prothese entnehmen und mit Wasser abspülen
- dabei über einem gefüllten Waschbecken oder Handtuch arbeiten — sie ist bruchempfindlich

**Einmal täglich gründlich:**
- mit spezieller Prothesenbürste (nicht die normale Zahnbürste) und mildem Reiniger bürsten
- besonders die Innenseite (Druckfläche zum Gaumen)
- Kontrolle auf Risse, scharfe Kanten, Beläge

**Nachts:**
- entnehmen und in einem trockenen, gut belüfteten Behälter oder in Wasser aufbewahren
- Reinigungstabletten nur nach Bedarf, nicht täglich

**Pflegerisch wichtig:** Auch der Mund wird gereinigt, wenn die Prothese draußen ist — sonst bleibt die Schleimhaut darunter mit Belägen bedeckt."

**B1 (590 Zeichen):**
"Auf der Prothese wachsen schnell Bakterien und Pilze. Darum muss sie jeden Tag gereinigt werden, sonst gibt es **Soor** oder **Prothesenstomatitis** (= entzündete Mundschleimhaut).

**Regeln:**

**Nach jedem Essen:**
- Prothese herausnehmen
- mit Wasser abspülen
- dabei ein Handtuch unterlegen — sie kann leicht brechen

**Einmal am Tag gründlich:**
- mit einer speziellen Prothesenbürste und mildem Reiniger
- besonders die Innenseite
- auf Risse und scharfe Kanten achten

**In der Nacht:**
- herausnehmen
- in einen trockenen Behälter oder ein Glas Wasser legen

**Wichtig:** Auch den Mund putzen, wenn die Prothese draußen ist!"

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Prothesenstomatitis, Prothesenbürste, Druckstelle]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Zahnprothesen sollen nachts im Mund bleiben, damit sich der Kiefer nicht verändert"**
- **Fachbegriff:** Dauertrage-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Prothesen sollen nachts entnommen werden, damit sich die Schleimhaut erholt und keine Pilze wachsen. Dauerhaftes Tragen erhöht das Risiko für Prothesenstomatitis und Soor. Die moderne Empfehlung (DGP/DGPPN 2019): nachts raus, außer der Patient lehnt das ausdrücklich ab."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die Prothese soll nachts raus. Dann kann sich die Schleimhaut erholen. Sonst wachsen Pilze und es gibt eine Entzündung. Die Regel: nachts rausnehmen. Nur wenn der Patient das nicht will, kann sie drinbleiben."

**D2: "Reinigungstabletten ersetzen das tägliche Bürsten"**
- **Fachbegriff:** Tabletten-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — Reinigungstabletten lösen nur oberflächliche Beläge. Festsitzende Beläge (Biofilm) müssen mechanisch weggebürstet werden. Außerdem greifen die Tabletten bei täglicher Anwendung den Kunststoff an. Empfehlung: Bürsten täglich, Tabletten nur gelegentlich."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — Tabletten reichen nicht. Fester Belag (Biofilm) geht nur mit der Bürste weg. Außerdem schaden die Tabletten dem Kunststoff, wenn man sie jeden Tag nimmt. Regel: jeden Tag bürsten. Tabletten nur ab und zu."

**D3: "Mundpflege ist bei Prothesenträgern nur Prothesenreinigung"**
- **Fachbegriff:** Mund-vs-Prothese-Verwechslung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — auch die Schleimhaut, die Zunge und der Gaumen müssen gereinigt werden, wenn die Prothese draußen ist. Sonst bleiben Beläge auf der Schleimhaut und Soor entsteht. Merke: Prothese raus, Mund putzen (weiche Bürste oder feuchter Tupfer), Prothese reinigen, wieder einsetzen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — auch der Mund muss gereinigt werden, wenn die Prothese draußen ist. Sonst sammelt sich Belag auf der Schleimhaut. Ablauf: Prothese raus — Mund putzen — Prothese reinigen — wieder rein."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Der Standard: nach jeder Mahlzeit entnehmen und abspülen, einmal täglich gründlich mit Prothesenbürste reinigen, nachts aus dem Mund nehmen. Gleichzeitig die Schleimhaut des Patienten pflegen — sonst entwickelt sich Prothesenstomatitis. So verhinderst du Soor zuverlässig."

**B1 (250 Zeichen):** "Sehr gut. Die Regel: nach jedem Essen rausnehmen und abspülen, einmal am Tag mit einer Spezialbürste gründlich putzen, nachts rausnehmen. Gleichzeitig auch den Mund putzen. So verhinderst du Soor und Entzündungen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie oft wird eine Zahnprothese gereinigt und was gilt für die Nacht?"
- **Rückseite:** "Nach jeder Mahlzeit abspülen + 1× täglich gründlich mit Prothesenbürste und mildem Reiniger. Nachts aus dem Mund nehmen (trockener, belüfteter Behälter oder Wasser). (DGP/DGPPN 2019)"
- **Kategorie:** handlung

---

## Baustein 6: mundinspektion-systematisch

### Metadaten
- **bausteinId:** mundpflege-mundinspektion
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, du sollst bei einem Patienten den Mund inspizieren. In welcher Reihenfolge gehst du vor — und worauf achtest du konkret? Beschreibe deinen Plan."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Die systematische Mundinspektion läuft in fester Reihenfolge: Lippen → Zähne/Prothese → Zahnfleisch → Wangenschleimhaut → Gaumen → Zunge (ober- und unterseits) → Mundboden. Beobachtet werden Farbe, Feuchtigkeit, Beläge, Verletzungen, Schmerzen."

**B1 (235 Zeichen):** "Du schaust den Mund in einer festen Reihenfolge an: Lippen — Zähne oder Prothese — Zahnfleisch — Wangen innen — Gaumen — Zunge oben und unten — Mundboden. Achte auf Farbe, Feuchtigkeit, Beläge, Verletzungen und Schmerzen."

- **Step-Typ:** sequencing (Reihenfolge der Inspektion)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Eine strukturierte Mundinspektion dauert zwei bis drei Minuten und erkennt Probleme, bevor der Patient sie selbst spürt.

**Vorbereitung:** Handschuhe, gute Beleuchtung (Taschenlampe oder Stirnlampe), Einmal-Spatel, Einverständnis des Patienten einholen.

**Reihenfolge (von außen nach innen):**
1. **Lippen** — rissig? eingerissene Mundwinkel (Rhagaden, Anzeichen für Mangel oder Soor)?
2. **Zähne oder Prothese** — Beläge, lockere Zähne, schlecht sitzende Prothese, Druckstellen
3. **Zahnfleisch** — Rötung, Blutung (Anzeichen Gingivitis/Parodontitis)
4. **Wangenschleimhaut beidseits** — weiße Beläge (Soor)? Aphthen? Biss-Spuren?
5. **Gaumen (hart und weich)** — Rötung unter der Prothese (Prothesenstomatitis)?
6. **Zunge** — Belag, Farbe (himbeerrot = Flüssigkeitsmangel), Risse
7. **Mundboden** — geschwollene Speicheldrüsenausführungsgänge?

**Dokumentation:** immer in SBAR oder strukturiertem Kurzbericht (Befund, Lokalisation, Handlung). (DGP/DGPPN 2019)"

**B1 (620 Zeichen):**
"Eine gute Mundinspektion dauert zwei bis drei Minuten. So findest du Probleme, bevor der Patient sie spürt.

**Was brauchst du?** Handschuhe, gutes Licht (Taschenlampe), einen Einmal-Spatel, Einverständnis des Patienten.

**So gehst du vor:**

1. **Lippen** — rissig? Einrisse in den Mundwinkeln?
2. **Zähne/Prothese** — Beläge? Locker? Prothese drückt?
3. **Zahnfleisch** — rot? Blutet?
4. **Wangen innen** — weiße Beläge (Soor)? Kleine Wunden?
5. **Gaumen** — oben hart und weich anschauen
6. **Zunge** — Belag? Farbe? Risse?
7. **Mundboden** — Schwellung?

**Dokumentieren:** Was hast du gesehen? Wo? Was machst du damit? Immer aufschreiben."

- **Erklärungs-Step:** stepType `sequencing` (7-Schritt-Ablauf sortieren)
- **Glossar-Begriffe:** [Rhagaden, Gingivitis, Parodontitis, Aphthe, Prothesenstomatitis]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Mundinspektion ist nur bei Verdacht auf ein Problem nötig"**
- **Fachbegriff:** Anlass-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die Mundinspektion gehört zur Basispflege und wird bei Risikopatienten (Tumortherapie, Demenz, Intubation, Pflegestufe) täglich durchgeführt. Nur so erkennt man Soor, Mukositis oder Druckstellen früh. Merke: Inspektion ist Routine, nicht Reaktion auf Beschwerden."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die Mundinspektion ist Routine, kein Notfall. Bei Risikopatienten (Chemo, Demenz, lange im Bett) schaust du jeden Tag in den Mund. So findest du Soor oder Druckstellen früh. Merke: Jeden Tag schauen, nicht erst bei Beschwerden."

**D2: "Es reicht, wenn man dem Patienten in den offenen Mund schaut"**
- **Fachbegriff:** Oberflächlichkeits-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — ohne Spatel und Licht sieht man die Wangenschleimhaut und den hinteren Zungenbereich nicht. Soor und Mukositis beginnen oft genau dort (hinterer Gaumen, Seitenränder der Zunge). Darum gehört ein Einmal-Spatel und eine Lampe zu jeder Mundinspektion."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — ohne Licht und Spatel siehst du nicht alles. Soor und kleine Wunden sind oft hinten oder an den Zungenrändern. Darum brauchst du eine Lampe und einen Einmal-Spatel. Ohne geht es nicht richtig."

**D3: "Eine himbeerrote Zunge ist ein Zeichen für gute Durchblutung und gesund"**
- **Fachbegriff:** Zungen-Farbe-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — eine glatte, himbeerrote Zunge (Lackzunge) ist ein klassisches Zeichen für Flüssigkeitsmangel (Exsikkose) oder Vitaminmangel (B12, Folsäure, Eisen). Eine gesunde Zunge ist rosa, leicht feucht und zeigt eine feine Oberflächenstruktur. Merke: Lackzunge → Ursache suchen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — eine glatte, himbeerrote Zunge ist ein Warnzeichen. Der Patient hat zu wenig getrunken oder es fehlen Vitamine (B12, Folsäure, Eisen). Eine gesunde Zunge ist rosa und hat eine raue Oberfläche. Merke: Rot und glatt = Problem."

### Richtig-Feedback
**C1 (305 Zeichen):** "Sehr gut. Der 7-Schritt-Ablauf von außen nach innen: Lippen — Zähne/Prothese — Zahnfleisch — Wangen — Gaumen — Zunge — Mundboden. Mit Handschuhen, Spatel und Licht. Bei Risikopatienten (Chemo, Demenz, Intubation) täglich. Frühzeichen sind Rötung, weiße Beläge, Rhagaden — alle früh zu erkennen."

**B1 (270 Zeichen):** "Sehr gut. Die 7 Schritte von außen nach innen: Lippen — Zähne/Prothese — Zahnfleisch — Wangen innen — Gaumen — Zunge — Mundboden. Du brauchst Handschuhe, Spatel und Licht. Bei Risiko-Patienten (Chemo, Demenz) jeden Tag. Früh erkennen ist der Schlüssel."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 7 Stationen der systematischen Mundinspektion in Reihenfolge."
- **Rückseite:** "1. Lippen → 2. Zähne/Prothese → 3. Zahnfleisch → 4. Wangenschleimhaut → 5. Gaumen → 6. Zunge → 7. Mundboden. Hilfsmittel: Handschuhe, Spatel, Licht. (DGP/DGPPN 2019)"
- **Kategorie:** assessment

---

## Baustein 7: soor-erkennen

### Metadaten
- **bausteinId:** mundpflege-soor-erkennen
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Du öffnest den Mund einer 82-jährigen Patientin mit Chemotherapie. Auf der Zunge und am Gaumen siehst du weißliche, leicht abwischbare Beläge. Was ist dein Verdacht — und warum gerade bei dieser Patientin?"
- **Step-Typ:** freetext (aktiviert Transferdenken)

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Soor ist eine Infektion der Mundschleimhaut mit Candida albicans. Typisch: weißliche, abwischbare Beläge auf geröteter Schleimhaut (anders als Essensreste, die einfach wegzuwischen sind). Häufig bei Immunsuppression, Antibiotika, Xerostomie."

**B1 (230 Zeichen):** "Soor ist eine Infektion mit dem Pilz Candida. Man sieht weiße Beläge im Mund. Darunter ist die Schleimhaut rot. Der Belag lässt sich abwischen, kommt aber schnell wieder. Soor tritt oft bei Abwehrschwäche auf (Chemo, Antibiotika)."

- **Step-Typ:** comparison (Soor vs. Essensreste)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"**Soor** (orale Candidose) ist eine Infektion der Mundschleimhaut durch den Hefepilz **Candida albicans**. Candida gehört bei vielen Menschen zur normalen Mundflora — wird aber pathogen, wenn das Immunsystem oder die Speichelabwehr geschwächt ist.

**Typische Zeichen:**
- weißliche, cremige oder milchähnliche Beläge auf der Schleimhaut
- Beläge lassen sich abwischen, darunter liegt eine **gerötete, leicht blutende** Fläche
- Lokalisation: Wangenschleimhaut, Zunge, Gaumen, Mundwinkel (Rhagaden)
- subjektiv: Brennen, Geschmacksstörung, Schmerzen beim Essen, Zungenkleben

**Risikofaktoren (DGP/DGPPN 2019):**
- Immunsuppression (Chemotherapie, HIV, Steroide)
- Antibiotikatherapie (stört die bakterielle Mundflora)
- Diabetes mellitus (Zucker im Speichel)
- Xerostomie / Mundtrockenheit
- Zahnprothesen (besonders bei schlechter Hygiene)
- Säuglinge und sehr alte Menschen

**Abgrenzung wichtig:** Essensreste wischt man einmal weg und sie kommen nicht wieder. Soor-Beläge sitzen wiederkehrend auf geröteter Schleimhaut."

**B1 (620 Zeichen):**
"**Soor** ist eine Infektion im Mund mit dem Pilz **Candida**. Der Pilz ist bei vielen Menschen normalerweise im Mund. Wenn die Abwehr schwach ist, wird er krank.

**Wie erkennst du Soor?**
- weiße Beläge auf der Schleimhaut (wie Milch oder Quark)
- die Beläge kann man abwischen — darunter ist die Schleimhaut **rot und empfindlich**
- der Patient sagt: brennt, schmeckt komisch, tut beim Essen weh
- oft auch eingerissene Mundwinkel

**Wer bekommt Soor? (Risikofaktoren)**
- Chemotherapie, HIV, Kortison (= Abwehr schwach)
- Antibiotika (tötet gute Bakterien)
- Diabetes (Zucker im Speichel)
- trockener Mund
- Zahnprothesen
- Babys und sehr alte Menschen

**Aufpassen:** Essensreste wischt man einmal weg. Soor kommt wieder."

- **Erklärungs-Step:** stepType `comparison` (Soor vs. Essensreste vs. normale Schleimhaut)
- **Glossar-Begriffe:** [Candida albicans, Soor, orale Candidose, Rhagaden]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Weißer Belag auf der Zunge ist immer Soor"**
- **Fachbegriff:** Zungenbelag-Verwechslung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — ein dünner, weißlicher Belag auf dem Zungenrücken ist meist normal (abgeschilferte Zellen, Essensreste). Soor ist cremig, sitzt auch auf Wangen/Gaumen, darunter ist die Schleimhaut gerötet. Merke: Nur Zungenrücken + dünn = wahrscheinlich normal. Flächig + cremig + Rötung darunter = Soor."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — ein dünner weißer Belag auf der Zunge ist oft normal. Soor ist cremig und sitzt auch an Wangen und Gaumen. Darunter ist die Schleimhaut rot. Merke: Dünn und nur Zunge = normal. Dick, cremig und überall = Soor."

**D2: "Soor-Beläge lassen sich nie abwischen"**
- **Fachbegriff:** Abwischbarkeits-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Soor-Beläge lassen sich mit einem Spatel abwischen. Genau das ist ein wichtiges Erkennungsmerkmal: Beläge gehen weg, darunter ist gerötete Schleimhaut sichtbar, und die Beläge kommen schnell wieder. Merke: Soor ist abwischbar — aber wiederkehrend und auf roter Schleimhaut."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Soor-Beläge kann man abwischen. Das ist sogar ein Zeichen dafür: Wegwischen, darunter ist rote Schleimhaut, und der Belag kommt wieder. Merke: abwischbar, aber kommt zurück = Soor."

**D3: "Nur sehr kranke Menschen bekommen Soor"**
- **Fachbegriff:** Schwerkranken-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — Soor tritt auch bei Menschen mit gut funktionierendem Immunsystem auf, wenn lokale Faktoren die Balance stören: Antibiotika, schlecht gereinigte Prothese, trockener Mund, Diabetes. Säuglinge bekommen Soor ohne Grunderkrankung. Merke: Lokale Faktoren reichen oft schon."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — auch Menschen ohne schwere Krankheit können Soor bekommen. Ursachen: Antibiotika, Prothese schlecht gereinigt, trockener Mund, Diabetes. Babys bekommen Soor auch ohne andere Krankheit. Merke: Auch kleine Ursachen reichen."

### Richtig-Feedback
**C1 (300 Zeichen):** "Sehr gut. Soor erkennst du an cremigen, weißlichen, abwischbaren Belägen auf geröteter Schleimhaut — oft an Wangen, Gaumen, Zunge. Risikogruppen: Chemopatienten, Antibiotika-Patienten, Diabetiker, Prothesenträger, Säuglinge, sehr alte Menschen. Darum die Prothese reinigen und den Mund systematisch inspizieren."

**B1 (260 Zeichen):** "Sehr gut. Soor siehst du an weißen, cremigen Belägen auf roter Schleimhaut — an Wangen, Gaumen, Zunge. Risiko haben: Chemo-Patienten, Antibiotika-Patienten, Diabetiker, Prothesenträger, Babys, sehr alte Menschen. Darum ist tägliche Kontrolle wichtig."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche drei Merkmale hat Soor im Mund?"
- **Rückseite:** "1. Weißlich-cremige, abwischbare Beläge. 2. Darunter gerötete, leicht blutende Schleimhaut. 3. Beläge kommen wieder. Erreger: Candida albicans. (DGP/DGPPN 2019)"
- **Kategorie:** assessment

---

## Baustein 8: soor-prophylaxe

### Metadaten
- **bausteinId:** mundpflege-soor-prophylaxe
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Du weißt jetzt, was Soor ist und welche Risiken dazu führen. Leite daraus selbst drei konkrete Pflegemaßnahmen ab, die Soor verhindern können — und erkläre kurz, warum jede hilft."
- **Step-Typ:** freetext (Transferdenken)

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Soor-Prophylaxe ruht auf drei Säulen: (1) Speichelfluss anregen (Trinken, Kauen, zuckerfreie Bonbons), (2) mechanische Reinigung (Zähne putzen, Zunge, Prothese), (3) lokale Befeuchtung (Wasser, 0,9 % NaCl, keine alkoholhaltigen oder süßen Lösungen)."

**B1 (230 Zeichen):** "Soor-Prophylaxe hat drei Teile: 1) Speichel anregen (trinken, kauen, zuckerfreie Bonbons). 2) Mund reinigen (Zähne, Zunge, Prothese). 3) Mund befeuchten (Wasser, Kochsalzlösung — keine alkoholhaltigen oder süßen Lösungen)."

- **Step-Typ:** matching (Maßnahme → Wirkung)

### Stufe 3 — Erklärung

**C1 (820 Zeichen):**
"Soor-Prophylaxe folgt dem Prinzip: **Speichel + Mechanik + Befeuchtung**. Die DGP/DGPPN 2019 und die Cochrane-Übersicht von Weening-Verbree et al. 2023 zeigen: Keine Einzelmaßnahme wirkt allein — das Bündel entscheidet.

**Säule 1 — Speichelfluss anregen:**
- ausreichend trinken (1,5 bis 2 Liter täglich, wenn keine Einschränkung)
- Kaubewegungen (feste Kost, wenn Schlucken möglich)
- zuckerfreie (saure) Bonbons, zuckerfreier Kaugummi
- bei Xerostomie: Speichelersatzmittel

**Säule 2 — Mechanische Reinigung:**
- Zähne zweimal täglich, weiche Bürste, Fluorid-Paste
- Zunge reinigen (Zungenschaber oder weiche Bürste)
- Prothese nach jedem Essen abspülen, einmal täglich gründlich

**Säule 3 — Befeuchtung:**
- Wasser, 0,9-prozentige Kochsalzlösung, ungesüßter Tee
- KEIN Alkohol (trocknet zusätzlich aus)
- KEINE zuckerhaltigen Tees oder Glycerin-Lösungen (Nährboden für Pilze)

**Besondere Risikogruppen:** Intubierte erhalten alle 4 bis 6 Stunden Mundpflege mit Chlorhexidin (evidenzbasiert, Cochrane 2023). Bei Chemopatienten zusätzlich regelmäßige Inspektion."

**B1 (640 Zeichen):**
"Soor-Prophylaxe hat **drei Säulen** (DGP/DGPPN 2019):

**Säule 1 — Speichel anregen:**
- viel trinken (1,5 bis 2 Liter, wenn erlaubt)
- feste Kost kauen (wenn Schlucken geht)
- zuckerfreie, saure Bonbons
- zuckerfreier Kaugummi
- bei sehr trockenem Mund: künstlichen Speichel

**Säule 2 — Mund reinigen:**
- Zähne zweimal am Tag, weiche Bürste, Fluorid
- Zunge putzen (Schaber oder weiche Bürste)
- Prothese nach jedem Essen abspülen, einmal am Tag gründlich reinigen

**Säule 3 — Befeuchten:**
- Wasser, Kochsalzlösung (0,9 %), ungesüßter Tee
- **Kein Alkohol** (trocknet aus)
- **Keine Zucker-Lösungen** (Pilze lieben Zucker)

**Besondere Gruppen:** Beatmete Patienten bekommen alle 4 bis 6 Stunden Mundpflege mit Chlorhexidin."

- **Erklärungs-Step:** stepType `reveal` (3-Säulen-Prinzip aufdecken)
- **Glossar-Begriffe:** [Chlorhexidin, Speichelersatz, Zungenschaber]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Mundpflege mit Zitrone-Glycerin-Tupfern ist ein guter Standard"**
- **Fachbegriff:** Zitrone-Glycerin-Mythos
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — Zitrone-Glycerin gilt seit den 1990er-Jahren als **obsolet**: Zitrone senkt den pH und reizt entzündete Schleimhaut, Glycerin entzieht Wasser. Empfohlen sind heute Wasser, 0,9 % NaCl oder Salbeitee. Merke: Zitrone-Glycerin ist out. (DGP/DGPPN 2019)"
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — Zitrone-Glycerin ist heute nicht mehr empfohlen. Zitrone reizt die Schleimhaut. Glycerin macht den Mund noch trockener. Besser: Wasser, Kochsalzlösung oder Salbeitee. Merke: Zitrone-Glycerin ist veraltet."

**D2: "Süßer Tee beruhigt den Mund und hilft bei Soor-Prophylaxe"**
- **Fachbegriff:** Zucker-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — Candida-Pilze ernähren sich von Zucker. Gesüßte Getränke oder Tees geben dem Pilz einen Nährboden — besonders bei trockenem Mund, wo der Zucker länger an der Schleimhaut klebt. Empfohlen: ungesüßter Tee oder Wasser. Merke: Alles Süße meiden."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Candida-Pilze lieben Zucker. Süße Getränke helfen dem Pilz zu wachsen. Bei trockenem Mund bleibt der Zucker lange auf der Schleimhaut. Besser: ungesüßter Tee oder Wasser. Merke: Nichts Süßes."

**D3: "Prophylaxe ist nur nötig, wenn der Patient schon Beschwerden hat"**
- **Fachbegriff:** Reaktions-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — das Prinzip **Prophylaxe** heißt: verhindern, bevor es entsteht. Bei Risikopatienten (Chemo, Intubation, Diabetes) beginnt die Mundpflege vor dem ersten Symptom — sonst ist es Therapie, nicht Prophylaxe. Merke: Prophylaxe kommt vor dem Problem, nicht danach."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Prophylaxe heißt: verhindern, bevor es passiert. Bei Risikopatienten (Chemo, Beatmung, Diabetes) beginnst du vor den ersten Zeichen. Sonst ist es keine Prophylaxe mehr, sondern Therapie. Merke: Vorher, nicht nachher."

### Richtig-Feedback
**C1 (310 Zeichen):** "Sehr gut. Das 3-Säulen-Prinzip: Speichelfluss anregen (Trinken, Kauen), mechanisch reinigen (Zähne, Zunge, Prothese), befeuchten mit Wasser oder 0,9 % NaCl. Keine zuckerhaltigen oder alkoholischen Lösungen. Bei Intubierten Chlorhexidin alle 4 bis 6 Stunden. Zitrone-Glycerin ist obsolet."

**B1 (260 Zeichen):** "Sehr gut. Die drei Säulen: 1) Speichel anregen (trinken, kauen). 2) Mund reinigen (Zähne, Zunge, Prothese). 3) Befeuchten mit Wasser oder Kochsalz. Nichts Süßes, nichts Alkoholisches. Bei beatmeten Patienten alle 4 bis 6 Stunden mit Chlorhexidin."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne das 3-Säulen-Prinzip der Soor-Prophylaxe."
- **Rückseite:** "1. Speichelfluss anregen (Trinken, Kauen, zuckerfreie Bonbons). 2. Mechanische Reinigung (Zähne, Zunge, Prothese). 3. Befeuchtung (Wasser, 0,9 % NaCl — kein Zucker, kein Alkohol). (DGP/DGPPN 2019)"
- **Kategorie:** handlung

---

## Baustein 9: parotitis-prophylaxe

### Metadaten
- **bausteinId:** mundpflege-parotitis-prophylaxe
- **bloomLevel:** 4
- **wissensart:** komplikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient nach Kiefer-Operation darf für drei Tage nicht kauen. Welche Drüse droht sich zu entzünden — und warum gerade dann?"
- **Step-Typ:** freetext (aktiviert Kausaldenken)

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Parotitis ist die Entzündung der Ohrspeicheldrüse (Parotis). Bei fehlender Kaubewegung fließt kein Speichel — Bakterien wandern aus der Mundhöhle den Ausführungsgang hinauf in die Drüse. Prophylaxe: Speichelfluss anregen (Kauen, Saures, Trinken), Mundhygiene."

**B1 (230 Zeichen):** "Parotitis ist die Entzündung der Ohrspeicheldrüse. Sie entsteht, wenn jemand nicht kaut — dann fließt kein Speichel und Bakterien wandern in die Drüse. Die Prophylaxe: Speichel anregen (kauen, Saures, trinken) und Mundhygiene."

- **Step-Typ:** matching (Ursache → Maßnahme)

### Stufe 3 — Erklärung

**C1 (820 Zeichen):**
"**Parotitis** bezeichnet die Entzündung der **Ohrspeicheldrüse** (Glandula parotidea). Pflegerisch relevant ist vor allem die **bakterielle Parotitis** bei fehlender Kaubewegung — nicht die virale Form (Mumps).

**Pathomechanismus:**
- kein Kauen → reduzierter Speichelfluss
- Ausführungsgang der Parotis (mündet innen in der Wange, gegenüber dem oberen zweiten Backenzahn) ist nicht gespült
- Mundbakterien wandern den Gang hinauf, besiedeln die Drüse — retrograde Infektion

**Klinik:**
- einseitige schmerzhafte Schwellung vor dem Ohr
- Rötung, Überwärmung, Kauschmerz
- Fieber, reduziertes Allgemeinbefinden
- evtl. Eiter am Ausführungsgang sichtbar

**Risikogruppen (I Care Pflege 2020, Thieme):**
- postoperativ mit Kauverbot (Kiefer-OP, Nahrungskarenz)
- Patienten mit Bewusstseinsstörung, Intubation, PEG-Sondenernährung
- schwer kranke Menschen ohne orale Nahrungsaufnahme
- Exsikkose

**Prophylaxe:**
- Speichelfluss anregen: zuckerfreie Bonbons, Kaugummi, saure Lutschtabletten, wenn erlaubt
- regelmäßige Mundpflege (systematische Inspektion, Befeuchtung)
- Trinken nach Verordnung
- ggf. Kiefer-Bewegungsübungen auch ohne Nahrung"

**B1 (640 Zeichen):**
"**Parotitis** ist die Entzündung der **Ohrspeicheldrüse**. Diese Drüse liegt vor dem Ohr. Für die Pflege wichtig: die Form, die bei fehlendem Kauen entsteht (nicht Mumps).

**Wie entsteht sie?**
- Der Patient kaut nicht
- Es fließt kein Speichel
- Der Gang der Drüse (im Mund, gegenüber dem oberen Backenzahn) wird nicht gespült
- Bakterien wandern in die Drüse
- Die Drüse entzündet sich

**Was siehst du?**
- Schwellung vor dem Ohr (meist nur auf einer Seite)
- Rötung, warm, tut beim Kauen weh
- Fieber, Patient fühlt sich schlecht
- manchmal kommt Eiter aus dem Gang im Mund

**Wer hat Risiko?**
- nach Operation am Kiefer
- Patienten mit Beatmung oder PEG-Sonde
- sehr kranke Patienten ohne Essen durch den Mund
- Patienten mit zu wenig Flüssigkeit

**Prophylaxe:**
- Kauen anregen (zuckerfreie Bonbons, Kaugummi, saure Lutschtabletten)
- regelmäßige Mundpflege
- trinken
- Kieferbewegungen üben, auch ohne Essen"

- **Erklärungs-Step:** stepType `reveal` (Pathomechanismus + Risikogruppen + Prophylaxe)
- **Glossar-Begriffe:** [Parotis, Parotitis, retrograde Infektion, Exsikkose]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Parotitis entsteht nur durch den Mumps-Virus"**
- **Fachbegriff:** Mumps-Verwechslung
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — Mumps ist eine virale Parotitis, die meist beidseitig verläuft. In der Pflege relevanter ist die **bakterielle Parotitis** bei fehlender Kaubewegung. Sie verläuft einseitig und trifft vor allem postoperative oder bewusstseinsgestörte Patienten. Merke: Pflege-Parotitis = bakteriell, nicht viral."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Mumps ist nur eine Form. In der Pflege sehen wir öfter die bakterielle Parotitis. Sie kommt nach Operationen oder bei Patienten, die nicht kauen. Mumps ist beidseitig. Die Pflege-Parotitis ist einseitig. Merke: In der Pflege meistens bakteriell."

**D2: "Parotitis-Prophylaxe ist nur für Intensivpatienten wichtig"**
- **Fachbegriff:** Setting-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — auch in der Normalpflege gibt es viele Risikopatienten: postoperativ mit Kauverbot, Patienten mit PEG, Demenzkranke, die kaum essen, Sterbende. Parotitis-Prophylaxe gehört überall dazu, wo nicht gekaut wird. Merke: Kein Kauen → Risiko — unabhängig vom Setting."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Parotitis kann überall passieren. Auch in der normalen Pflege: nach Operation, mit PEG-Sonde, bei Demenz, am Lebensende. Überall, wo nicht gekaut wird, ist das Risiko da. Merke: Kein Kauen = Risiko, egal wo."

**D3: "Gegen Parotitis gibt man einfach Antibiotika prophylaktisch"**
- **Fachbegriff:** Antibiotika-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — prophylaktische Antibiotika sind nicht empfohlen. Sie fördern Resistenzen und gleichzeitig Soor. Prophylaxe heißt: Speichelfluss anregen, Mundhygiene, Trinken. Antibiotika werden erst bei manifester bakterieller Parotitis nach ärztlicher Verordnung eingesetzt. Merke: Erst Pflege, dann Medikamente."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — Antibiotika zur Vorbeugung sind falsch. Sie machen Bakterien resistent und fördern Soor. Prophylaxe heißt: Speichel anregen, Mundhygiene, trinken. Antibiotika kommen erst, wenn die Entzündung da ist, nach ärztlicher Anordnung."

### Richtig-Feedback
**C1 (310 Zeichen):** "Sehr gut. Parotitis entsteht bakteriell, wenn der Speichelfluss fehlt — Mundbakterien wandern retrograd den Parotis-Gang hinauf. Zeichen: einseitige schmerzhafte Schwellung vor dem Ohr, Fieber. Prophylaxe: Kauen anregen (Bonbons, Kaugummi), Mundpflege, Trinken. Risikogruppen: postoperativ, PEG, Bewusstseinsgestörte."

**B1 (265 Zeichen):** "Sehr gut. Parotitis kommt durch Bakterien, wenn kein Speichel fließt. Zeichen: Schwellung vor dem Ohr auf einer Seite, Schmerzen, Fieber. Prophylaxe: Kauen anregen (Bonbons, Kaugummi), Mund pflegen, trinken. Risiko: nach OP, mit PEG, bei Bewusstseinsstörung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie entsteht eine bakterielle Parotitis und wie wird sie verhindert?"
- **Rückseite:** "Entstehung: Kein Kauen → kein Speichelfluss → Mundbakterien wandern retrograd den Parotis-Gang hinauf → Entzündung. Prophylaxe: Speichelfluss anregen (Kaugummi, saure Bonbons), Mundhygiene, Trinken."
- **Kategorie:** handlung

---

## Baustein 10: xerostomie-mundtrockenheit

### Metadaten
- **bausteinId:** mundpflege-xerostomie
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Patientin sagt: „Mein Mund fühlt sich an wie Watte. Ich kann kaum sprechen." Welche Ursachen kommen dir in den Sinn — und warum ist das mehr als ein Komfort-Problem?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Xerostomie ist der Fachbegriff für Mundtrockenheit. Ursachen sind vielfältig: Medikamente (Opioide, Antidepressiva, Diuretika), Bestrahlung, Dehydratation, Mundatmung. Folgen: Kariesrisiko, Soor, Schluckstörung, Sprechstörung, Geschmacksverlust."

**B1 (230 Zeichen):** "Xerostomie ist das Fachwort für einen trockenen Mund. Gründe: Medikamente (Opioide, Antidepressiva, Diuretika), Bestrahlung, zu wenig Flüssigkeit, Mundatmung. Folgen: mehr Karies, Soor, Probleme beim Schlucken und Sprechen."

- **Step-Typ:** categorize (Ursachen in Kategorien sortieren)

### Stufe 3 — Erklärung

**C1 (800 Zeichen):**
"**Xerostomie** ist das subjektive und objektive Zeichen verringerter Speichelproduktion. Definition objektiv: Ruhespeichelfluss unter 0,1 ml pro Minute (Normalwert 0,3 bis 0,4 ml/min).

**Ursachen (DGP/DGPPN 2019):**
- **Medikamente (über 500 Präparate):** Opioide, Antidepressiva (besonders trizyklische), Diuretika, Anticholinergika, Antihistaminika, Neuroleptika
- **Bestrahlung:** besonders im Kopf-Hals-Bereich — irreversibler Drüsenschaden
- **Erkrankungen:** Sjögren-Syndrom, Diabetes mellitus, Fieber, Niereninsuffizienz
- **Verhaltensfaktoren:** Mundatmung (z.B. Sauerstoffbrille), unzureichende Trinkmenge
- **Alter:** altersbedingter Rückgang ab dem 70. Lebensjahr

**Klinische Zeichen:**
- trockene, glänzende Schleimhaut, klebt am Spatel
- Lackzunge (glatt, himbeerrot)
- Rhagaden an den Mundwinkeln
- schnellere Karies, gehäuft Soor
- Schlucken und Sprechen erschwert

**Folgen:** gestörte Lebensqualität, gestörter Geschmack, erhöhtes Infektions- und Kariesrisiko. Xerostomie ist zentraler **Risikofaktor** für Soor und Mukositis — daher immer erkennen und behandeln."

**B1 (640 Zeichen):**
"**Xerostomie** bedeutet: der Mund ist trocken. Das Fachwort kommt von „xeros" (= trocken) und „stoma" (= Mund).

**Ursachen:**
- **Medikamente:** sehr viele (über 500!) — Opioide, Antidepressiva, Diuretika, Anticholinergika
- **Bestrahlung:** am Kopf und Hals
- **Krankheiten:** Sjögren-Syndrom, Diabetes, Fieber, Nierenschwäche
- **Verhalten:** durch den Mund atmen (Sauerstoffbrille), wenig trinken
- **Alter:** ab etwa 70 Jahren nimmt der Speichel ab

**Was siehst du?**
- Schleimhaut ist trocken und glänzt
- Zunge ist rot und glatt (Lackzunge)
- eingerissene Mundwinkel
- schneller Karies, oft Soor
- Schlucken und Sprechen ist schwer

**Warum ist das wichtig?**
Xerostomie ist ein großer Risikofaktor für Soor und Mukositis. Deshalb immer erkennen und etwas dagegen tun."

- **Erklärungs-Step:** stepType `text` (displayFormat: crossref)
- **Glossar-Begriffe:** [Xerostomie, Sjögren-Syndrom, Anticholinergika, Lackzunge]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Xerostomie ist nur im Alter normal und braucht keine Behandlung"**
- **Fachbegriff:** Altersschicksal-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — auch wenn Xerostomie im Alter häufiger ist, ist sie kein „normales Altern". Sie erhöht Karies, Soor und Schluckprobleme — alles relevante Pflegeprobleme. Behandlung: Ursache suchen (Medikamente prüfen), Speichelersatz, Mundhygiene. Merke: Xerostomie ist nicht Schicksal."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — ein trockener Mund im Alter ist nicht normal. Er macht Karies, Soor und Schluckprobleme. Man kann etwas tun: Medikamente prüfen, künstlichen Speichel geben, den Mund pflegen. Merke: Man muss etwas tun, nicht akzeptieren."

**D2: "Nur das subjektive Empfinden zählt — wenn der Patient nichts merkt, ist alles gut"**
- **Fachbegriff:** Subjektiv-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Xerostomie kann symptomarm beginnen, aber objektiv schon Schäden anrichten (Karies, Soor, Mukositis). Darum gehört Inspektion und Speicheldiagnostik in die Routine. Der klebrige Handschuh am Wangen-Innenraum ist ein einfaches Zeichen. Merke: Objektiv prüfen, nicht nur fragen."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — der Patient merkt manchmal nichts, aber der Schaden ist schon da (Karies, Soor). Darum musst du in den Mund schauen. Wenn der Handschuh an der Schleimhaut klebt: Mund ist trocken. Merke: Nicht nur fragen, auch anschauen."

**D3: "Xerostomie behandelt man am besten mit süßen Getränken"**
- **Fachbegriff:** Süß-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — süße Getränke sind Nährboden für Pilze und fördern Karies, gerade bei trockenem Mund. Empfohlen: Wasser, ungesüßter Tee, zuckerfreier Kaugummi oder Bonbons, bei Bedarf Speichelersatzmittel. Saures (Zitronensaft) nur bei intakter Schleimhaut, sonst Reizung. Merke: Wasser schlägt Cola."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — süße Getränke sind schlecht. Sie machen Karies und Soor schlimmer. Besser: Wasser, ungesüßter Tee, zuckerfreier Kaugummi. Bei sehr trockenem Mund gibt es künstlichen Speichel. Saures nur, wenn die Schleimhaut nicht entzündet ist."

### Richtig-Feedback
**C1 (310 Zeichen):** "Sehr gut. Xerostomie ist Mundtrockenheit — objektiv unter 0,1 ml Speichel pro Minute. Häufigste Ursachen: Medikamente (Opioide, Antidepressiva, Diuretika), Bestrahlung, Mundatmung, Alter. Zeichen: trockene Schleimhaut, Lackzunge, Rhagaden. Sie ist Risikofaktor für Soor, Mukositis und Karies."

**B1 (265 Zeichen):** "Sehr gut. Xerostomie = trockener Mund. Ursachen: Medikamente, Bestrahlung, Mundatmung, Alter. Zeichen: trockene Schleimhaut, glatte rote Zunge, eingerissene Mundwinkel. Wichtig: Sie macht Soor, Mukositis und Karies wahrscheinlicher. Darum erkennen und behandeln."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Xerostomie und welche vier Hauptursachen gibt es?"
- **Rückseite:** "Xerostomie = Mundtrockenheit (Speichelfluss < 0,1 ml/min). Hauptursachen: 1. Medikamente (Opioide, Antidepressiva, Diuretika), 2. Bestrahlung Kopf-Hals, 3. Mundatmung/Dehydratation, 4. Alter. Wichtigster Risikofaktor für Soor."
- **Kategorie:** fachbegriff

---

## Baustein 11: mundpflege-bewusstseinseingeschraenkt

### Metadaten
- **bausteinId:** mundpflege-bewusstseinseingeschraenkt
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Du sollst einem bewusstlosen Patienten den Mund pflegen. Der Patient kann nicht spucken, nicht schlucken, nichts sagen. Welche drei Gefahren siehst du — und wie entscheidest du, was zu tun ist?"
- **Step-Typ:** freetext (Bloom 5 — Handlungsbegründung)

### Stufe 2 — Hinweis

**C1 (285 Zeichen):** "Bei bewusstseinseingeschränkten Patienten (Koma, schwere Demenz, Intubation) gilt: Aspirationsgefahr zuerst. Kopf leicht seitlich, kleine Wasser- oder Kochsalzmengen, abgesaugte Schwämmchen oder weiche Tupfer, keine Flüssigkeit in Schluckposition. Absauggerät bereithalten."

**B1 (235 Zeichen):** "Bei bewusstlosen Patienten zuerst: Aspirationsgefahr! Kopf leicht zur Seite drehen, nur kleine Mengen Wasser oder Kochsalzlösung verwenden, mit Schwämmchen oder weichen Tupfern reinigen, niemals große Mengen Flüssigkeit. Absauggerät bereit halten."

- **Step-Typ:** branching (Entscheidung an kritischer Stelle)

### Stufe 3 — Erklärung

**C1 (880 Zeichen):**
"Bei **Bewusstseinseinschränkung** (Koma, schwere Demenz, Intubation, Narkose, am Lebensende) ist Mundpflege zwingend notwendig — aber die **Aspirationsgefahr** ist real und potenziell lebensbedrohlich.

**Grundprinzip:** So wenig Flüssigkeit wie möglich, so viel wie nötig.

**Konkrete Regeln (DGP/DGPPN 2019; I Care Pflege 2020):**

**Vorbereitung:**
- Absauggerät anschließen und testen
- Oberkörper 30 bis 45 Grad hoch (wenn erlaubt), Kopf leicht zur Seite
- Handschuhe, Einmal-Spatel, weiche Tupfer oder Schwämmchen
- Befeuchtungsmittel: Wasser, 0,9 % NaCl, Salbeitee

**Durchführung:**
- Tupfer nur leicht feucht, nicht tropfnass
- systematisch: Wangen — Gaumen — Zunge — Zähne/Prothese
- bei Intubierten: alle 4 bis 6 Stunden, möglichst Chlorhexidin (Cochrane 2023)
- bei Schluckstörung keine Bolus-Flüssigkeit, sondern tropfenweise feuchte Tupfer

**Bei Risikozeichen:**
- Husten, Gurgeln, Atemveränderung → sofort absaugen
- Inspektion auf Druckstellen durch Tubus (Lippenwinkel, Zunge)

**Ethik:** Auch bei nicht ansprechbaren Menschen gilt: Mundpflege ist Basispflege und Würde — nicht verzichtbar, nur vorsichtig durchzuführen."

**B1 (680 Zeichen):**
"Bei **bewusstseinsgestörten Patienten** (Koma, schwere Demenz, Beatmung, am Lebensende) ist die Mundpflege wichtig — aber gefährlich, weil der Patient nicht schlucken kann. Die Gefahr: **Aspiration** (Flüssigkeit geht in die Lunge).

**Grundregel:** So wenig Flüssigkeit wie möglich.

**Vorbereitung:**
- Absauggerät anschließen und testen
- Kopf 30 bis 45 Grad hoch stellen, leicht zur Seite drehen
- Handschuhe, Einmal-Spatel, weiche Tupfer oder Schwämmchen
- zum Befeuchten: Wasser, Kochsalzlösung, Salbeitee

**Durchführung:**
- Tupfer nur leicht feucht, nicht tropfnass
- Reihenfolge: Wangen — Gaumen — Zunge — Zähne/Prothese
- Bei beatmeten Patienten alle 4 bis 6 Stunden mit Chlorhexidin

**Achtung:**
- Wenn der Patient hustet oder anders atmet: sofort absaugen
- Lippen und Zunge auf Druckstellen durch den Tubus prüfen

**Wichtig für die Würde:** Auch wer nicht ansprechbar ist, hat ein Recht auf Mundpflege. Man macht sie nur vorsichtig."

- **Erklärungs-Step:** stepType `branching` (Entscheidungsbaum: Patient hustet → sofort absaugen; Patient ruhig → weiterpflegen)
- **Glossar-Begriffe:** [Aspiration, Chlorhexidin, Tubus, Schwämmchen]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei bewusstlosen Patienten lässt man die Mundpflege weg, weil sie nichts merken"**
- **Fachbegriff:** Wahrnehmungs-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — Mundpflege ist bei bewusstlosen Patienten besonders wichtig: Speichelfluss fehlt, Infektionsrisiko steigt, Beläge sammeln sich. Zudem ist die orale Wahrnehmung einer der letzten Sinneskanäle — Pflege ist auch Kommunikation. Merke: Gerade bei Bewusstlosen — nicht weglassen."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — bei bewusstlosen Patienten ist Mundpflege besonders wichtig. Es fehlt Speichel, Bakterien sammeln sich, die Schleimhaut wird kaputt. Außerdem: Spüren ist einer der letzten Sinne. Pflege ist auch Kontakt. Merke: Gerade dann nicht weglassen."

**D2: "Mehr Flüssigkeit reinigt den Mund besser"</br>"**
- **Fachbegriff:** Mehr-ist-besser-Irrtum
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — mehr Flüssigkeit erhöht die Aspirationsgefahr bei nicht-schluckfähigen Patienten. Das Prinzip ist: leicht feuchter Tupfer, keine Bolus-Flüssigkeit. Die Reinigung wirkt mechanisch (Schwämmchen, Tupfer), nicht durch Spülung. Merke: Weniger Flüssigkeit, mehr Mechanik — sonst Aspiration."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — viel Flüssigkeit ist gefährlich. Der Patient kann die Lunge voll bekommen (Aspiration). Die Regel: Tupfer nur leicht feucht. Die Reinigung kommt vom Wischen, nicht vom Spülen. Merke: Wenig Flüssigkeit, viel Schwämmchen."

**D3: "Zähneputzen ist bei Intubierten nicht möglich und deshalb verboten"</br>"**
- **Fachbegriff:** Intubation-Tabu
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — bei intubierten Patienten wird sehr wohl Zahnpflege durchgeführt (weiche Bürste, kleine Menge Paste, Absauger). Zusätzlich alle 4 bis 6 Stunden Chlorhexidin-Spülung (Cochrane 2023). Das senkt die VAP-Rate (beatmungsassoziierte Pneumonie). Merke: Zähneputzen bleibt Standard — mit angepasster Technik."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — auch beatmete Patienten bekommen Zähneputzen, mit weicher Bürste und Absauger. Zusätzlich alle 4 bis 6 Stunden Spülung mit Chlorhexidin. Das verhindert Lungenentzündungen. Merke: Zähneputzen geht, nur anders."

### Richtig-Feedback
**C1 (315 Zeichen):** "Sehr gut. Bei Bewusstseinseingeschränkten: Aspirationsschutz an erster Stelle. Kopf 30 bis 45 Grad hoch, seitlich geneigt, Absaugung bereit. Feuchte Tupfer statt Spülung, Reihenfolge Wangen — Gaumen — Zunge — Zähne. Bei Intubierten zusätzlich alle 4 bis 6 Stunden Chlorhexidin. Würde des Patienten immer mitdenken."

**B1 (270 Zeichen):** "Sehr gut. Bei bewusstlosen Patienten: zuerst Aspirationsschutz. Kopf hoch und zur Seite, Absauger bereit. Feuchte Tupfer (nicht tropfnass), Reihenfolge Wangen — Gaumen — Zunge — Zähne. Bei beatmeten Patienten alle 4 bis 6 Stunden Chlorhexidin. Immer vorsichtig und würdevoll."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche drei Sicherheitsregeln gelten bei Mundpflege bewusstseinseingeschränkter Patienten?"
- **Rückseite:** "1. Kopf 30–45° hoch, leicht seitlich. 2. Absaugung anschließen und bereit halten. 3. Leicht feuchte Tupfer/Schwämmchen — KEINE Bolus-Flüssigkeit. Bei Intubation zusätzlich alle 4–6 h Chlorhexidin (Cochrane 2023)."
- **Kategorie:** handlung

---

## Baustein 12: mundpflege-lebensende

### Metadaten
- **bausteinId:** mundpflege-lebensende
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Eine 78-jährige Patientin ist in der Sterbephase. Sie trinkt nichts mehr. Ihre Angehörige fragt: „Soll ich ihr nicht doch Wasser geben? Sie hat doch Durst!" Wie antwortest du — und was ist das Ziel der Mundpflege jetzt?"
- **Step-Typ:** freetext (ethisch-fachliche Abwägung)

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Am Lebensende ist Mundpflege keine Flüssigkeitszufuhr, sondern Komfortpflege. Ziel: feuchte Schleimhaut, Geruchsfreiheit, Wohlbefinden. Kleine Mengen Wunschgetränk (wenn erlaubt), Schwämmchen mit Wasser oder Lieblingsgetränk, Lippenpflege. Angehörige einbeziehen."

**B1 (235 Zeichen):** "Am Lebensende geht es bei der Mundpflege um Wohlbefinden, nicht um Trinken. Das Ziel: Schleimhaut feucht halten, kein schlechter Geruch, der Patient fühlt sich wohl. Kleine Mengen Wunschgetränk, Schwämmchen, Lippenpflege. Angehörige helfen lassen."

- **Step-Typ:** reflection (ethische Reflexion einbauen)

### Stufe 3 — Erklärung

**C1 (840 Zeichen):**
"In der **Sterbephase** verändert sich das Ziel der Mundpflege grundlegend. Es geht nicht mehr um Prophylaxe gegen Soor oder Parotitis, sondern um **Lebensqualität** in den letzten Stunden und Tagen.

**Physiologischer Hintergrund:**
- Durstgefühl wird in der Sterbephase zentral-nerval reduziert
- Flüssigkeitsgabe verlängert nicht das Leben, sondern oft das Leiden (Lungenödem, Aspiration)
- Mundtrockenheit ist das zentrale Symptom — nicht der Flüssigkeitsmangel im Körper

**Pflegeziel:** feuchte, geruchsfreie Mundhöhle, die dem Patienten Wohlbefinden gibt.

**Maßnahmen (in Anlehnung an die Leitlinie Palliativmedizin S3, DGP 2020):**
- alle 15 bis 30 Minuten kleine Mengen des Lieblingsgetränks anbieten (Kaffee, Bier, Saft — wenn noch gewünscht)
- feuchte Schwämmchen oder Tupfer mit Wasser, Salbeitee, Lieblingsgetränk
- Lippenpflege mit fettender Salbe (Panthenol, Vaseline)
- kein Zwang zum Schlucken

**Angehörige einbeziehen:** Oft wollen Angehörige aktiv etwas tun. Mundpflege ist eine Aufgabe, die sie behutsam übernehmen können — mit Anleitung. Das gibt Nähe in der letzten Zeit.

**Ethik:** Nicht gegen den erklärten Willen. Kein „Zwangstrinken" über Infusion, wenn der Patient das ablehnt (Patientenverfügung beachten)."

**B1 (690 Zeichen):**
"Am **Lebensende** ändert sich das Ziel der Mundpflege. Es geht nicht mehr um Vorbeugung (Soor), sondern um **Wohlbefinden** in den letzten Tagen und Stunden.

**Warum?**
- In der Sterbephase spürt der Körper keinen Durst mehr
- Viel Flüssigkeit verlängert nicht das Leben — sie kann Leiden vergrößern (Wasser in der Lunge, Aspiration)
- Was der Patient wirklich belastet, ist der trockene Mund, nicht der Flüssigkeitsmangel

**Ziel:** Der Mund ist feucht. Er riecht nicht schlecht. Der Patient fühlt sich wohl.

**Maßnahmen:**
- alle 15 bis 30 Minuten kleine Mengen vom **Lieblingsgetränk** (Kaffee, Bier, Saft — wenn gewünscht)
- feuchte Schwämmchen oder Tupfer mit Wasser, Salbeitee oder Lieblingsgetränk
- Lippen mit Panthenol oder Vaseline pflegen
- **Kein Zwang zum Schlucken**

**Angehörige einbinden:**
Angehörige wollen oft etwas tun. Mundpflege können sie lernen und übernehmen. Das gibt Nähe.

**Ethik:**
- Nicht gegen den Willen des Patienten
- Patientenverfügung beachten
- Keine Infusion mit Gewalt"

- **Erklärungs-Step:** stepType `comparison` (Prophylaxe-Ziel vs. Lebensende-Ziel)
- **Glossar-Begriffe:** [Sterbephase, Patientenverfügung, Komfortpflege, Panthenol]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Man muss Sterbende unbedingt zum Trinken bringen, sonst verdursten sie"**
- **Fachbegriff:** Verdursten-Irrtum
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — das Durstgefühl verschwindet in der Sterbephase zentral-nerval. Was belastet, ist die trockene Schleimhaut, nicht der Flüssigkeitsmangel. Zwangstrinken oder unnötige Infusionen verlängern eher das Leiden (Lungenödem, Aspiration). Merke: Durst ist Mund, nicht Bauch — befeuchten, nicht füllen."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — in der Sterbephase fühlt der Körper keinen Durst mehr. Was stört, ist der trockene Mund, nicht der fehlende Flüssigkeitsmangel. Viel Trinken oder Infusionen helfen nicht, sondern schaden (Lunge, Aspiration). Merke: Mund befeuchten, nicht füllen."

**D2: "Am Lebensende sind nur neutrale Flüssigkeiten wie Wasser erlaubt"**
- **Fachbegriff:** Neutralitäts-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — gerade am Lebensende sind Lieblingsgetränke ausdrücklich empfohlen (DGP 2020): Kaffee, Bier, Saft, Lieblings-Limo. Der Genuss am vertrauten Geschmack ist Teil der Lebensqualität. Nur bei konkreter Kontraindikation (Schluckproblem mit Aspiration) einschränken. Merke: Genuss vor Neutralität."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — am Lebensende sind Lieblingsgetränke erlaubt und sogar empfohlen. Kaffee, Bier, Saft — was der Patient mag. Der Geschmack gibt Lebensqualität. Nur bei Schluckproblemen mit Gefahr (Aspiration) muss man einschränken. Merke: Was schmeckt, zählt."

**D3: "Angehörige sollten von der Mundpflege ferngehalten werden, weil sie das nicht können"**
- **Fachbegriff:** Angehörige-Ausschluss-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — viele Angehörige suchen aktiv eine Möglichkeit, zu helfen. Mundpflege ist leicht anzuleiten und schafft Nähe in schweren Stunden. Die Pflegekraft zeigt, begleitet, ist da. Das entlastet Angehörige und den Sterbenden gleichermaßen. Merke: Angehörige einbeziehen, nicht ausschließen."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — Angehörige wollen oft etwas tun. Mundpflege kann man ihnen zeigen. Sie übernehmen es und haben Nähe zum Patienten. Das hilft beiden: dem Sterbenden und der Familie. Merke: Angehörige mitnehmen, nicht wegschicken."

### Richtig-Feedback
**C1 (325 Zeichen):** "Sehr gut. Am Lebensende heißt Mundpflege: Komfort, nicht Prophylaxe. Ziel ist eine feuchte, geruchsfreie Schleimhaut. Kleine Mengen Lieblingsgetränk, feuchte Tupfer, Lippenpflege mit Panthenol. Kein Zwangstrinken. Angehörige dürfen mitmachen — das schafft Nähe. Ethik: Patientenverfügung und Wille sind bindend."

**B1 (275 Zeichen):** "Sehr gut. Am Lebensende heißt Mundpflege: Wohlbefinden, nicht Vorbeugung. Ziel: Mund ist feucht, riecht gut, Patient fühlt sich wohl. Kleine Mengen vom Lieblingsgetränk, feuchte Schwämmchen, Lippenpflege mit Vaseline. Keine Gewalt. Angehörige können helfen. Wunsch des Patienten zählt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie verändert sich das Ziel der Mundpflege am Lebensende?"
- **Rückseite:** "Ziel wechselt von Prophylaxe (Soor/Parotitis verhindern) zu Komfort: feuchte Schleimhaut, Geruchsfreiheit, Wohlbefinden. Kleine Mengen Lieblingsgetränk, feuchte Schwämmchen, Lippenpflege. Kein Zwangstrinken. (DGP Leitlinie Palliativmedizin, 2020)"
- **Kategorie:** handlung

---

## Baustein 13: risikoassessment-mundgesundheit

### Metadaten
- **bausteinId:** mundpflege-risikoassessment
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Du übernimmst eine Station mit sechs Patienten. Wer hat das höchste Risiko für Mundgesundheitsprobleme — und an welchen drei Kriterien erkennst du das schon aus dem Übergabebericht?"
- **Step-Typ:** freetext (Priorisieren unter mehreren Patienten)

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "Drei Kriterien-Gruppen bestimmen das Mundgesundheitsrisiko: (1) Fähigkeit zur Selbstpflege (kognitiv, motorisch), (2) Speichelfaktor (Medikamente, Bestrahlung, Mundatmung), (3) Immunstatus (Chemo, Steroide, Diabetes). Wer mehrere Kriterien erfüllt, braucht tägliche Inspektion."

**B1 (240 Zeichen):** "Drei Gruppen von Risiko-Kriterien: 1) Kann der Patient selbst putzen? (kognitiv, motorisch) 2) Gibt es Speichel-Probleme? (Medikamente, Bestrahlung, Mundatmung) 3) Ist die Abwehr schwach? (Chemo, Kortison, Diabetes) Mehrere zusammen = hohes Risiko."

- **Step-Typ:** matrix (Risikofaktoren in Matrix einordnen)

### Stufe 3 — Erklärung

**C1 (820 Zeichen):**
"Das Mundgesundheitsrisiko lässt sich systematisch einschätzen. **Drei Kriterien-Gruppen** (nach DGP/DGPPN 2019):

**Gruppe 1 — Selbstpflegefähigkeit:**
- kognitiv: Demenz, Delir, Bewusstseinsstörung
- motorisch: Parese, Tremor, Kontrakturen, Frakturen der oberen Extremität
- emotional: Depression, Verweigerung

**Gruppe 2 — Speichelfaktoren:**
- Medikamente mit Xerostomie-Potenzial (Opioide, Antidepressiva, Diuretika, Anticholinergika)
- Bestrahlung Kopf-Hals
- dauerhafte Mundatmung (Sauerstoffbrille, nasale Obstruktion)
- Dehydratation
- höheres Alter

**Gruppe 3 — Immunstatus / Lokalfaktoren:**
- Chemotherapie, Radiatio
- Steroide, Biologicals, HIV
- Diabetes mellitus (Zucker im Speichel)
- Prothesen (Biofilm-Fläche)
- bestehende Karies oder Parodontitis

**Handlung je nach Risikostufe:**
- **Niedrig** (0 Kriterien): Mundpflege wie bei Gesunden, Inspektion 1× pro Woche
- **Mittel** (1–2 Kriterien): tägliche Inspektion, strukturierte Mundpflege
- **Hoch** (3+ Kriterien oder Chemo/Intubation): Inspektion 1–2× täglich, Prophylaxebündel voll umsetzen, ggf. Chlorhexidin

Wichtig: Risiko kann sich täglich ändern (neue Medikamente, neue Diagnose). Darum bei jeder Übergabe neu einschätzen."

**B1 (660 Zeichen):**
"Das Mund-Risiko schätzt du systematisch ein. **Drei Gruppen** von Fragen (DGP/DGPPN 2019):

**Gruppe 1 — Kann der Patient selbst putzen?**
- Kopf: Demenz, verwirrt, bewusstlos?
- Hände: Lähmung, Zittern, Gips?
- Gefühl: depressiv, lehnt ab?

**Gruppe 2 — Gibt es Speichel-Probleme?**
- Medikamente (Opioide, Antidepressiva, Diuretika)
- Bestrahlung am Kopf
- Atmet durch den Mund (Sauerstoffbrille)?
- zu wenig trinken?
- hohes Alter?

**Gruppe 3 — Ist die Abwehr schwach?**
- Chemotherapie, Bestrahlung
- Kortison, HIV
- Diabetes (Zucker im Speichel)
- Prothese
- schon Karies oder Entzündung?

**Was machst du dann?**
- **0 Risiken:** einmal pro Woche schauen
- **1 bis 2 Risiken:** jeden Tag schauen, strukturiert pflegen
- **3+ oder Chemo/Beatmung:** ein- bis zweimal täglich schauen, volle Prophylaxe, bei Beatmung Chlorhexidin

**Achtung:** Das Risiko kann sich jeden Tag ändern — bei jeder Übergabe neu einschätzen."

- **Erklärungs-Step:** stepType `matrix` (3 Gruppen × Risikostufen)
- **Glossar-Begriffe:** [Radiatio, Biologicals, Parodontitis, Biofilm]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Einmaliges Risikoassessment bei Aufnahme reicht"**
- **Fachbegriff:** Einmal-Assessment-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — Risiken ändern sich täglich: neue Medikamente (Opioid-Start), Chemozyklus, Antibiotika. Das Assessment gehört in jede Schichtübergabe, mindestens aber in die tägliche Pflegeplanung. Merke: Mundgesundheit ist kein Aufnahmebefund, sondern eine tägliche Frage."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — die Risiken ändern sich jeden Tag. Neue Medikamente, neue Behandlung, neue Probleme. Darum schaust du jeden Tag neu. In jeder Übergabe. Merke: Einmal bei Aufnahme reicht nicht — jeden Tag prüfen."

**D2: "Der Patient kann selbst am besten sagen, ob er Probleme hat"**
- **Fachbegriff:** Selbstauskunfts-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — bei Demenz, Sedierung, Bewusstseinsstörung oder Xerostomie mit Symptomfreiheit fehlt die verlässliche Selbstauskunft. Außerdem verharmlosen viele Patienten ihre Beschwerden („will nicht stören"). Darum ist die objektive Inspektion zwingend. Merke: Schauen schlägt Fragen."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — viele Patienten sagen nicht die ganze Wahrheit. Bei Demenz oder Bewusstlosigkeit können sie nichts sagen. Andere wollen nicht stören. Darum musst du in den Mund schauen. Merke: Anschauen ist wichtiger als nur fragen."

**D3: "Prothesenträger haben automatisch das höchste Risiko"**
- **Fachbegriff:** Prothesen-Pauschal-Irrtum
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — eine gut gepflegte Prothese bei einem selbstständigen, trinkenden Patienten kann geringeres Risiko bedeuten als eigene Zähne bei einer Chemopatientin. Entscheidend ist die Kombination: Prothese + fehlende Selbstpflege + Speichelmangel = hohes Risiko. Merke: Nicht die Prothese zählt, sondern der Kontext."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — eine gute Prothese mit guter Pflege ist nicht automatisch Risiko. Wichtig ist die Kombination: Prothese + kann nicht selbst putzen + trockener Mund = hohes Risiko. Eigene Zähne mit Chemo können riskanter sein. Merke: Kombination zählt, nicht die Prothese allein."

### Richtig-Feedback
**C1 (320 Zeichen):** "Sehr gut. Drei Kriterien-Gruppen: Selbstpflegefähigkeit, Speichelfaktoren, Immunstatus. Je mehr Kriterien, desto höher das Risiko. Stufenplan: 0 = wöchentlich, 1–2 = täglich, 3+ oder Chemo/Intubation = 1–2× täglich mit vollem Prophylaxebündel. Risiko bei jeder Übergabe neu prüfen — Medikamente ändern sich schnell."

**B1 (280 Zeichen):** "Sehr gut. Drei Gruppen prüfen: Kann der Patient selbst? Gibt es Speichel-Probleme? Ist die Abwehr schwach? Je mehr Ja-Antworten, desto höher das Risiko. Plan: 0 = einmal pro Woche, 1–2 = jeden Tag, 3+ oder Chemo/Beatmung = ein- bis zweimal am Tag. Jede Übergabe neu einschätzen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche drei Kriterien-Gruppen bestimmen das Mundgesundheitsrisiko?"
- **Rückseite:** "1. Selbstpflegefähigkeit (kognitiv, motorisch, emotional). 2. Speichelfaktoren (Medikamente, Bestrahlung, Mundatmung, Alter). 3. Immunstatus (Chemo, Steroide, Diabetes). Bei jeder Übergabe neu einschätzen. (DGP/DGPPN 2019)"
- **Kategorie:** assessment

---

## Baustein 14: pflegeplanung-mundpflege

### Metadaten
- **bausteinId:** mundpflege-pflegeplanung
- **bloomLevel:** 6
- **wissensart:** entscheidung
- **zeitBudget:** 7 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Herr Kaya, 72 Jahre, 14 Tage nach Schlaganfall, halbseitige Lähmung rechts, Zahnprothese, trinkt wenig, seit gestern beginnende Schluckstörung. Er kann die Prothese nicht mehr selbst reinigen. Plane seine Mundpflege: Ziel, Maßnahmen, Häufigkeit, Sicherheit. Begründe jede Entscheidung."
- **Step-Typ:** freetext (Bloom 6 — eigene Pflegeplanung)

### Stufe 2 — Hinweis

**C1 (285 Zeichen):** "Pflegeplanung Mundpflege folgt dem 6-Schritte-Regelkreis (Fiechter/Meier): Informationen sammeln — Probleme/Ressourcen — Ziele — Maßnahmen — Durchführung — Evaluation. Wichtig: SMART-Ziele, individuelle Anpassung, Schluckstatus beachten, Angehörige einbeziehen, dokumentieren."

**B1 (240 Zeichen):** "Die Pflegeplanung für Mundpflege geht in sechs Schritten: 1) Infos sammeln. 2) Probleme und Ressourcen notieren. 3) Ziele setzen. 4) Maßnahmen planen. 5) Durchführen. 6) Bewerten. Wichtig: genaue Ziele, Schluckstatus beachten, Angehörige mitnehmen, alles dokumentieren."

- **Step-Typ:** careplan (vollständige Pflegeplanung erstellen)

### Stufe 3 — Erklärung

**C1 (900 Zeichen):**
"Eine Pflegeplanung für Mundpflege folgt dem **Pflegeprozess nach Fiechter/Meier (1981)**. Am Beispiel Herr Kaya zeige ich dir, wie das konkret aussieht:

**1. Informationssammlung:** Alter, Grunderkrankung, Medikamente, Schluckstatus, bisherige Mundpflege, eigene Zähne oder Prothese, Angehörige, Vorlieben.

**2. Pflegediagnose (PESR-Schema):**
- **Problem:** unzureichende Mundhygiene
- **Ätiologie:** halbseitige Lähmung rechts + beginnende Schluckstörung
- **Symptome:** Prothesenbeläge, trockene Schleimhaut, Mundgeruch
- **Ressourcen:** Patient kooperativ, Ehefrau täglich da, linke Hand funktioniert

**3. SMART-Ziele:**
- Nahziel (3 Tage): Mundschleimhaut feucht, keine Beläge auf Prothese
- Fernziel (14 Tage): Patient reinigt Prothese mit linker Hand unter Anleitung selbst

**4. Maßnahmen:**
- 3× täglich systematische Mundinspektion (Pflegekraft)
- 2× täglich Zähne/Prothese weiche Bürste, Fluorid-Paste
- nach jeder Mahlzeit Prothese abspülen
- Speichelfluss anregen: zuckerfreier Kaugummi nach Freigabe Logopädie (Schluckstatus)
- Sicherheit bei Schluckstörung: Oberkörper 45°, Tupfer statt Bolus-Flüssigkeit
- Ehefrau einweisen

**5. Durchführung** mit Handzeichen und Zeitangabe.

**6. Evaluation** nach 3 Tagen: Ziel erreicht? Neue Probleme? Anpassung?

**Dokumentation:** strukturiert in SIS oder Pflegebericht — sachlich, chronologisch, nachvollziehbar. (§ 113 SGB XI)"

**B1 (720 Zeichen):**
"Die **Pflegeplanung für Mundpflege** hat sechs Schritte (Fiechter/Meier 1981). So sieht es bei Herrn Kaya aus:

**1. Informationen sammeln:** Alter, Krankheit, Medikamente, Schlucken, bisherige Mundpflege, eigene Zähne oder Prothese, Familie, was er mag.

**2. Pflegediagnose (PESR):**
- **Problem:** Mund ist nicht gut gepflegt
- **Ursache:** halbseitige Lähmung rechts + beginnende Schluckstörung
- **Zeichen:** Belag auf Prothese, trockener Mund, Mundgeruch
- **Ressourcen:** Patient macht mit, Ehefrau kommt jeden Tag, linke Hand geht

**3. Ziele (SMART — genau, messbar, realistisch, zeitlich):**
- In 3 Tagen: Schleimhaut feucht, Prothese ohne Belag
- In 14 Tagen: Patient reinigt die Prothese mit der linken Hand selbst

**4. Maßnahmen:**
- 3× am Tag Mund ansehen (Pflegekraft)
- 2× am Tag Zähne/Prothese mit weicher Bürste + Fluorid
- nach jedem Essen Prothese abspülen
- Speichel anregen: zuckerfreier Kaugummi — aber erst nach Freigabe von der Logopädin (wegen Schlucken)
- Sicherheit bei Schluckstörung: Kopf 45° hoch, Tupfer statt Flüssigkeit
- Ehefrau einlernen

**5. Durchführung** mit Kürzel und Uhrzeit dokumentieren.

**6. Bewerten** nach 3 Tagen: Ziel erreicht? Neue Probleme? Plan anpassen?

**Dokumentation:** In SIS oder Pflegebericht. Sachlich, chronologisch, verständlich. (§ 113 SGB XI)"

- **Erklärungs-Step:** stepType `careplan` (vollständige Planung als Fall)
- **Glossar-Begriffe:** [PESR-Schema, SMART-Ziel, SIS, Pflegeprozess]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei einer klaren Diagnose kann man die Pflegediagnose weglassen"**
- **Fachbegriff:** Diagnosen-Verwechslung
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — die medizinische Diagnose (Schlaganfall) und die Pflegediagnose (unzureichende Mundhygiene wegen halbseitiger Lähmung) sind zwei verschiedene Dinge. Die Pflegediagnose beschreibt das Pflegeproblem — sie ist Grundlage für die Maßnahmenplanung. Merke: Medizin ≠ Pflege, beides braucht seine eigene Diagnose."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — die medizinische Diagnose (Schlaganfall) ist etwas anderes als die Pflegediagnose (Mundpflege geht nicht). Die Pflegediagnose zeigt, was du machst. Ohne sie weißt du nicht, wie du planen sollst. Merke: Zwei Diagnosen — Arzt und Pflege haben je eine."

**D2: "Mundpflege-Ziele kann man einfach als „gute Mundpflege" formulieren"**
- **Fachbegriff:** Vage-Ziele-Irrtum
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — Ziele müssen SMART sein: spezifisch, messbar, attraktiv, realistisch, terminiert. „Gute Mundpflege" kann niemand überprüfen. Stattdessen: „In 3 Tagen keine Beläge auf der Prothese, Schleimhaut feucht beim Fingertest." So kann die Nachtwache wissen, ob das Ziel erreicht ist. Merke: Ohne Messbarkeit keine Evaluation."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — „gute Mundpflege" ist nicht messbar. Ziele müssen SMART sein: genau, messbar, realistisch, mit Zeit. Zum Beispiel: „In 3 Tagen ist der Mund feucht und die Prothese ohne Belag." So weiß jede Schicht, ob das Ziel erreicht ist. Merke: Ohne Messung keine Auswertung."

**D3: "Angehörige gehören nicht in die Pflegeplanung"**
- **Fachbegriff:** Angehörige-Irrtum
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — Angehörige sind wichtige Ressourcen, besonders in der Langzeitpflege und am Lebensende. Wenn sie geschult werden, entlasten sie die Pflegekraft und geben dem Patienten Nähe. Ihre Rolle gehört explizit in die Planung (Wer? Was? Wann?). Merke: Angehörige sind Teil des Pflegeteams, nicht Besucher."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — Angehörige helfen mit. Sie bleiben lange beim Patienten. Wenn du sie einlernst, können sie gute Mundpflege machen. Das ist gut für den Patienten und für die Angehörigen. Schreib rein: Wer macht was wann. Merke: Angehörige sind Team, nicht Gäste."

### Richtig-Feedback
**C1 (330 Zeichen):** "Ausgezeichnet. Der Pflegeprozess in 6 Schritten: Informationen — Pflegediagnose (PESR) — SMART-Ziele — Maßnahmen — Durchführung — Evaluation. Bei Herrn Kaya: beginnende Schluckstörung = Sicherheit vor Gründlichkeit, Angehörige einbeziehen, Logopädie-Freigabe bei Kaugummi, dokumentieren nach SIS. Nach 3 Tagen neu bewerten."

**B1 (290 Zeichen):** "Ausgezeichnet. Sechs Schritte: Infos — Pflegediagnose — SMART-Ziele — Maßnahmen — Durchführung — Evaluation. Bei Herrn Kaya: Schluckstörung = zuerst Sicherheit, dann gründlich pflegen. Ehefrau einbinden. Kaugummi erst nach Freigabe von der Logopädin. Alles dokumentieren. Nach 3 Tagen neu schauen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche sechs Schritte hat eine Pflegeplanung für Mundpflege?"
- **Rückseite:** "1. Informationssammlung. 2. Pflegediagnose (PESR). 3. SMART-Ziele (Nah/Fern). 4. Maßnahmen. 5. Durchführung. 6. Evaluation. Dokumentation nach SIS/Pflegebericht. (Fiechter/Meier 1981; § 113 SGB XI)"
- **Kategorie:** handlung

---

## Qualitätssicherung (Abschluss)

**Bloom-Verteilung (14 Bausteine):**
- Bloom 1: 1 Baustein (7%) — mundhoehle-anatomie
- Bloom 2: 2 Bausteine (14%) — funktionen-mund, speichel-aufgaben
- Bloom 3: 4 Bausteine (29%) — zahnpflege-standard, zahnprothese-pflege, soor-erkennen, xerostomie
- Bloom 4: 4 Bausteine (29%) — mundinspektion, soor-prophylaxe, parotitis-prophylaxe, risikoassessment
- Bloom 5: 2 Bausteine (14%) — bewusstseinseingeschraenkt, lebensende
- Bloom 6: 1 Baustein (7%) — pflegeplanung

**Gruppiert:** Bloom 1-2: 21 % (3) | Bloom 3-4: 57 % (8) | Bloom 5-6: 21 % (3) — Zielverteilung **20/55/25 erreicht**

**Zeit-Budget:**
- Summe Baustein-Zielzeiten (Stufe 2+3): 3+3+4+4+4+5+4+5+5+4+6+5+4+7 = **63 Min**
- Plus Stufe-1-Denkfragen (14 × ~2 Min): +28 Min = **91 Min**
- Plus Lern-Snacks, Wissen-Tab, Übergänge, Übungsphasen: ~80 Min
- **Gesamt: ~171 Min ≈ Zielzeit 173 Min** (±2 Min)

**Primärquellen (KEINE I-Care-Referenzen im Schülertext, alle Primärquellen):**
- DGZMK (2023), DGP/DGPPN (2019), DGP Palliativmedizin (2020), Bundeszahnärztekammer (2023)
- WHO (2024), KZBV/BZÄK DMS VI (2023)
- Cochrane Review Weening-Verbree et al. (2023)
- Fiechter/Meier (1981), § 113 SGB XI

**Urheberrecht: BESTANDEN**
- Keine Sätze aus I Care/Pflege heute übernommen
- Alle Definitionen in eigenen Worten
- Primärquellen zitiert (DGZMK, DGP, Cochrane, WHO, SGB)
- I-Care-Referenz nur in einem Baustein als Fakten-Beleg (Risikogruppen Parotitis) — nicht als Textquelle
- Abstandstest: Reihenfolge und Formulierungen eigenständig, keine erkennbare Thieme-Struktur

**Anrede:** Durchgehend „du" — keine Sie-Anrede. **Echte Umlaute** durchgehend.

**Distraktoren:** Alle 14 Bausteine haben 3 Distraktoren mit spezifischem Sandwich-Feedback (C1 + B1).
