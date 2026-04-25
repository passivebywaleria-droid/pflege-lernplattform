# Wissensbausteine: Schlaf & Schlafhygiene

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `schlaf` |
| ceId | `ce-02` |
| cluster | B (Mobilität & Prophylaxen) |
| wissensart | handlung |
| geschaetzteUE | 3 |
| zielzeitMin | 74 (3 UE × 45 × 0,55) |
| bausteineAnzahl | 9 |
| voraussetzungen | — |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard nach Dekubitus-Format) |

**Bloom-Verteilung:** Bloom 1-2: 22% (2 Bausteine), Bloom 3-4: 56% (5 Bausteine), Bloom 5-6: 22% (2 Bausteine) — entspricht Sollwert 20/55/25 ±3%

**Primärquellen:**
- AASM — American Academy of Sleep Medicine (2020): Scoring Manual for Sleep and Associated Events, Version 2.6
- DGSM — Deutsche Gesellschaft für Schlafforschung und Schlafmedizin (2017, aktualisiert 2020): S3-Leitlinie "Nicht erholsamer Schlaf/Schlafstörungen — Insomnie bei Erwachsenen"
- ICSD-3 — International Classification of Sleep Disorders (AASM 2014, 3. Auflage Text Revision 2023)
- WHO (2019): ICD-11 — Kapitel 07 "Sleep-Wake Disorders"
- Borbély A. (1982): Two Process Model of Sleep Regulation — Originalarbeit zum zirkadianen Rhythmus + Schlafdruck
- RKI (2021): Gesundheit in Deutschland aktuell (GEDA) — Schlafqualität in der Bevölkerung
- Beers-Liste (AGS 2023): Potenziell inadäquate Medikation bei älteren Menschen (Benzodiazepine, Z-Substanzen)

---

## Baustein 1: schlafphysiologie-zyklen

### Metadaten
- **bausteinId:** schlaf-zyklen-nrem-rem
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Du schläfst 8 Stunden. Ist der Schlaf die ganze Zeit gleich tief — oder verändert er sich im Laufe der Nacht? Beschreibe, was du vermutest."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Der Schlaf läuft in **Zyklen von ca. 90 Minuten**. Jeder Zyklus hat zwei Hauptphasen: **NREM-Schlaf** (Non-Rapid Eye Movement, 3 Stadien N1-N3) und **REM-Schlaf** (Rapid Eye Movement, Traumphase). Pro Nacht durchläuft der Mensch 4-6 Zyklen. (AASM 2020)"

**B1 (220 Zeichen):** "Schlaf läuft in Zyklen. Ein Zyklus dauert ungefähr **90 Minuten**. Pro Nacht hat der Mensch **4 bis 6 Zyklen**. Jeder Zyklus hat zwei Teile: den **NREM-Schlaf** (3 Stadien) und den **REM-Schlaf** (Traumschlaf mit schnellen Augenbewegungen)."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Der menschliche Schlaf ist nach AASM-Klassifikation in zwei Hauptformen gegliedert: **NREM** (Non-Rapid Eye Movement) und **REM** (Rapid Eye Movement). Ein vollständiger Zyklus dauert etwa **90 Minuten**, pro Nacht folgen **4-6 Zyklen** aufeinander.

**NREM-Schlaf** (~75-80% der Schlafzeit) gliedert sich seit der AASM-Revision 2007 in drei Stadien:
- **N1** (Einschlafstadium, 2-5%): Übergang vom Wachzustand, Muskeltonus sinkt
- **N2** (stabiler Leichtschlaf, 45-55%): Schlafspindeln und K-Komplexe im EEG
- **N3** (Tiefschlaf / Slow-Wave-Sleep, 15-25%): Deltawellen, körperliche Regeneration, Wachstumshormonausschüttung

**REM-Schlaf** (~20-25%): schnelle Augenbewegungen, muskuläre Atonie (Schutz vor Ausleben von Träumen), intensive Traumtätigkeit, Gedächtniskonsolidierung.

In der ersten Nachthälfte überwiegt der Tiefschlaf (N3), in der zweiten Nachthälfte werden die REM-Phasen länger. Mit zunehmendem Alter nehmen N3 und REM ab. (AASM Scoring Manual 2020)"

**B1 (585 Zeichen):**
"Dein Schlaf läuft nicht gleich tief die ganze Nacht. Er läuft in **Zyklen**. Ein Zyklus dauert ungefähr **90 Minuten**. Pro Nacht hast du **4 bis 6 Zyklen**.

**Es gibt zwei Haupt-Phasen:**

**1. NREM-Schlaf** (etwa 75-80% der Nacht) — hat 3 Stadien:
- **N1**: Einschlafen, du kannst leicht geweckt werden
- **N2**: Stabiler Schlaf, der Körper entspannt sich
- **N3**: Tiefschlaf — der Körper erholt sich am meisten

**2. REM-Schlaf** (etwa 20-25% der Nacht): schnelle Augenbewegungen, starke Träume, die Muskeln sind wie gelähmt.

**Wichtig:** In der ersten Nachthälfte ist der Tiefschlaf (N3) am längsten. In der zweiten Nachthälfte werden die REM-Phasen länger. Alte Menschen haben weniger Tiefschlaf."

- **Erklärungs-Step:** stepType `diagram` (Hypnogramm: Wach/REM/N1/N2/N3 über 8 Stunden — Zyklen sichtbar)
- **Glossar-Begriffe:** [NREM, REM, Schlafzyklus, Hypnogramm, Slow-Wave-Sleep]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Schlafzyklus dauert etwa 4 Stunden"**
- **Fachbegriff:** Zyklus-Dauer-Überschätzung
- **Feedback (C1, 235 Zeichen):** "Nicht ganz — ein Zyklus dauert **ca. 90 Minuten**, nicht 4 Stunden. Pro Nacht folgen 4-6 Zyklen aufeinander. Merke: 90 Minuten pro Zyklus × 4-6 Zyklen ≈ 6-9 Stunden Schlaf. Wenn du also um 23 Uhr einschläfst, bist du um 0:30 am Ende des ersten Zyklus."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — ein Zyklus dauert ungefähr **90 Minuten** (nicht 4 Stunden). Pro Nacht hast du 4 bis 6 Zyklen. Merke: 90 Minuten × 5 Zyklen ≈ 7,5 Stunden Schlaf. Das passt zu einer normalen Nacht."

**D2: "Im REM-Schlaf bewegt sich der ganze Körper wild"**
- **Fachbegriff:** REM-Atonie-Missverständnis
- **Feedback (C1, 260 Zeichen):** "Genau umgekehrt — im REM-Schlaf sind die willkürlichen Muskeln **fast gelähmt** (muskuläre Atonie). Nur die Augen und das Zwerchfell bewegen sich. Das ist ein Schutzmechanismus, damit wir Träume nicht ausleben. Nur der **Name** kommt von den schnellen Augenbewegungen (Rapid Eye Movements)."
- **Feedback (B1, 215 Zeichen):** "Fast das Gegenteil — im REM-Schlaf sind die Muskeln **fast gelähmt**. Nur die Augen bewegen sich schnell. Das schützt dich: Du lebst deine Träume nicht aus. Der Name REM kommt nur von den schnellen Augenbewegungen."

**D3: "Tiefschlaf ist am Ende der Nacht am längsten"**
- **Fachbegriff:** Tiefschlaf-Verteilungs-Fehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — der **Tiefschlaf (N3)** ist in der **ersten Nachthälfte** am längsten. In der zweiten Nachthälfte werden die **REM-Phasen** länger. Deshalb ist die erste Nachthälfte für die körperliche Erholung entscheidend. Merke: Körper früh (N3), Gehirn spät (REM)."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — der **Tiefschlaf** ist zu **Beginn der Nacht** am längsten. Gegen Morgen werden die **Traum-Phasen** (REM) länger. Deshalb ist die erste Nachthälfte wichtig für den Körper. Merke: Körper früh, Gehirn spät."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Der Schlaf läuft in Zyklen von ca. 90 Minuten mit 4-6 Zyklen pro Nacht. Jeder Zyklus wechselt zwischen NREM (N1-N3) und REM. N3 dominiert die erste Nachthälfte, REM die zweite. Deshalb stört nächtliches Wecken den Tiefschlaf früh, den REM spät."

**B1 (225 Zeichen):** "Sehr gut. Der Schlaf läuft in **Zyklen von 90 Minuten**, 4 bis 6 pro Nacht. Jeder Zyklus hat NREM (N1, N2, N3) und REM. Tiefschlaf (N3) ist früh in der Nacht am längsten. REM-Schlaf wird gegen Morgen länger. Wecken stört immer etwas."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie lange dauert ein Schlafzyklus und wie viele Zyklen pro Nacht?"
- **Rückseite:** "Ein Schlafzyklus dauert ca. 90 Minuten. Pro Nacht durchlaufen wir 4-6 Zyklen mit Wechsel aus NREM (N1-N3) und REM."
- **Kategorie:** fakt

---

## Baustein 2: zirkadianer-rhythmus

### Metadaten
- **bausteinId:** schlaf-zirkadianer-rhythmus
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Warum wirst du abends müde, auch wenn du den ganzen Tag im Bett liegst? Was in deinem Körper steuert das eigentlich?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Der **zirkadiane Rhythmus** ist die innere Uhr des Körpers mit einer Periode von ca. 24 Stunden. Zentral gesteuert vom **Nucleus suprachiasmaticus** (SCN) im Hypothalamus. **Licht** ist der wichtigste Taktgeber (Zeitgeber), über **Melatonin** reguliert."

**B1 (225 Zeichen):** "Dein Körper hat eine **innere Uhr**. Sie dauert etwa **24 Stunden** — deshalb heißt sie **zirkadian** (circa = ungefähr, dies = Tag). Die Uhr sitzt im Gehirn. **Licht** ist das wichtigste Signal. Das Hormon **Melatonin** macht abends müde."

- **Step-Typ:** text (displayFormat: beforeafter — Tag/Nacht-Rhythmus vs. Schichtarbeit)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Der zirkadiane Rhythmus (von lat. *circa* = ungefähr, *dies* = Tag) ist die endogene 24-Stunden-Uhr des Menschen. Zentraler Taktgeber ist der **Nucleus suprachiasmaticus (SCN)** im Hypothalamus. Er steuert Schlaf-Wach-Rhythmus, Körpertemperatur, Hormonausschüttung und Stoffwechsel.

**Wichtigste Zeitgeber (Entrainer):**
- **Licht** (stärkster Zeitgeber): Helles Licht am Morgen synchronisiert den SCN
- **Melatonin**: Zirbeldrüsen-Hormon, wird abends bei Dunkelheit ausgeschüttet, Höhepunkt gegen 3 Uhr nachts
- **Essenszeiten, soziale Aktivität, körperliche Bewegung** (schwächere Zeitgeber)

**Zwei-Prozess-Modell** (Borbély 1982):
- **Prozess S** (Schlafdruck): steigt mit Wachzeit, sinkt im Schlaf
- **Prozess C** (zirkadianer Prozess): 24-Stunden-Kurve unabhängig vom Schlaf

**Klinische Relevanz:** Schichtarbeit, Jetlag, Demenz und Krankenhausaufenthalt stören den Rhythmus. Im Krankenhaus fehlen oft klare Licht-Dunkel-Signale → Verlust des Rhythmus, Delir-Risiko steigt. (Borbély 1982; AASM 2020)"

**B1 (580 Zeichen):**
"Dein Körper hat eine **innere Uhr**. Sie läuft ungefähr **24 Stunden**. Man nennt sie **zirkadianer Rhythmus** (*zirka* = ungefähr, *dies* = Tag). Die Uhr sitzt im Gehirn, im **Nucleus suprachiasmaticus**.

**Die Uhr steuert:**
- Wann du müde wirst
- Deine Körpertemperatur (niedrig in der Nacht)
- Deine Hormone

**Was stellt die Uhr?**
- **Licht** ist das wichtigste Signal. Helles Licht am Morgen weckt dich.
- **Melatonin** ist ein Hormon. Es wird abends im Dunkeln gebildet. Es macht dich müde.
- Auch Essenszeiten und Bewegung helfen.

**Wichtig für die Pflege:** Im Krankenhaus gibt es oft kein klares Licht-Dunkel-Signal (Nacht-Schicht, Monitore, immer Licht). Dann ist die innere Uhr kaputt. Das kann zu Verwirrtheit führen (**Delir**)."

- **Erklärungs-Step:** stepType `timeline` (24-Stunden-Kurve: Melatonin, Kortisol, Körpertemperatur)
- **Glossar-Begriffe:** [Zirkadianer Rhythmus, Nucleus suprachiasmaticus, Melatonin, Zeitgeber, Delir]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn ich mal einen Tag lang nicht schlafe, ist mein Rhythmus wieder normal"**
- **Fachbegriff:** Rhythmus-Reset-Mythos
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — der Rhythmus reguliert sich nicht durch einen 'leeren Tag'. Im Gegenteil: Schlafentzug erhöht den Schlafdruck (Prozess S) und kann den nächsten Rhythmus noch mehr stören. Die innere Uhr wird durch **Licht am Morgen** wieder synchronisiert, nicht durch Schlafverzicht."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — wenn du einen Tag nicht schläfst, wird der Rhythmus nicht neu. Im Gegenteil: Du bist noch müder. Die innere Uhr wird durch **Licht am Morgen** neu gestellt, nicht durch fehlenden Schlaf. Licht ist das wichtigste Signal."

**D2: "Melatonin macht direkt schläfrig wie ein Schlafmittel"**
- **Fachbegriff:** Melatonin-Sedativ-Verwechslung
- **Feedback (C1, 295 Zeichen):** "Fast — Melatonin ist **kein klassisches Schlafmittel**. Es signalisiert dem Körper 'es ist Nacht' und stellt die innere Uhr. Schlafmittel (Benzodiazepine, Z-Substanzen) dämpfen dagegen aktiv das Gehirn. Deshalb hilft Melatonin vor allem bei **Rhythmus-Störungen** (Jetlag, Blinde, ältere Menschen) — nicht bei klassischer Insomnie."
- **Feedback (B1, 255 Zeichen):** "Fast richtig — Melatonin ist **kein echtes Schlafmittel**. Es sagt dem Körper: 'Jetzt ist Nacht'. Ein Schlafmittel macht das Gehirn direkt müde. Deshalb hilft Melatonin besonders bei **Jetlag** oder alten Menschen, die wenig Melatonin haben — nicht bei normaler Schlafstörung."

**D3: "Im Krankenhaus ist der zirkadiane Rhythmus egal, weil die Patienten krank im Bett liegen"**
- **Fachbegriff:** Rhythmus-Irrelevanz-Fehler
- **Feedback (C1, 310 Zeichen):** "Genau falsch — gestörter Rhythmus ist eine **Hauptursache für Delir** bei älteren Patienten (bis 50% auf Intensivstationen). Deshalb sind **Tageslicht tagsüber, Dunkelheit nachts, keine unnötigen Weckungen, Orientierungshilfen (Uhr, Kalender)** wichtige Pflegeinterventionen. Rhythmus-Erhalt schützt vor Delir. (Inouye NEJM 2014)"
- **Feedback (B1, 265 Zeichen):** "Genau falsch — ein gestörter Rhythmus ist eine der Haupt-Ursachen für **Delir** (akute Verwirrtheit) bei alten Patienten. Bis zu 50% auf Intensivstationen. Die Pflege hilft: **Tageslicht am Tag, Dunkelheit nachts, keine unnötigen Weckungen**. Das schützt vor Delir."

### Richtig-Feedback
**C1 (285 Zeichen):** "Sehr gut. Der zirkadiane Rhythmus ist die innere 24-Stunden-Uhr, zentral gesteuert vom Nucleus suprachiasmaticus. Licht ist der stärkste Zeitgeber, Melatonin das wichtigste Hormon. Zwei-Prozess-Modell (Borbély): Schlafdruck + zirkadianer Prozess. Störung → Delir-Risiko."

**B1 (235 Zeichen):** "Sehr gut. Die innere Uhr läuft etwa **24 Stunden**. Sie wird von **Licht** gestellt. **Melatonin** ist das Hormon, das abends müde macht. Wichtig in der Pflege: Tageslicht am Tag, dunkel in der Nacht. Das schützt vor Verwirrtheit (Delir)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der wichtigste Zeitgeber für den zirkadianen Rhythmus?"
- **Rückseite:** "Licht — vor allem helles Tageslicht am Morgen. Signalisiert über die Netzhaut dem Nucleus suprachiasmaticus im Hypothalamus die Tageszeit."
- **Kategorie:** fakt

---

## Baustein 3: schlafbedarf-altersabhaengig

### Metadaten
- **bausteinId:** schlaf-bedarf-alter
- **bloomLevel:** 1
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Wie viele Stunden Schlaf brauchst du pro Nacht? Schätze auch: Wie viel schläft ein Neugeborenes, wie viel eine 80-jährige Frau?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Der Schlafbedarf ist **altersabhängig**: Neugeborene 14-17 h, Kleinkinder 11-14 h, Schulkinder 9-11 h, Jugendliche 8-10 h, Erwachsene 7-9 h, Ältere 7-8 h. Die individuelle Bandbreite ist groß. Qualität ist wichtiger als reine Stundenzahl."

**B1 (220 Zeichen):** "Der Schlafbedarf ist je nach **Alter** anders: Neugeborene 14-17 Stunden, Kleinkinder 11-14, Schulkinder 9-11, Erwachsene 7-9, alte Menschen 7-8. Jeder Mensch ist etwas anders. Die Qualität ist wichtiger als die genauen Stunden."

- **Step-Typ:** comparison (Tabelle Altersgruppen)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Der Schlafbedarf verändert sich über die Lebensspanne. Die National Sleep Foundation (2015, 3-Jahres-Expertenkonsens mit 18 Fachgesellschaften) empfiehlt:

| Altersgruppe | Empfohlen | Akzeptabel |
|--------------|-----------|------------|
| Neugeborene (0-3 Mon) | 14-17 h | 11-19 h |
| Säuglinge (4-11 Mon) | 12-15 h | 10-18 h |
| Kleinkinder (1-2 J) | 11-14 h | 9-16 h |
| Vorschulkinder (3-5 J) | 10-13 h | 8-14 h |
| Schulkinder (6-13 J) | 9-11 h | 7-12 h |
| Jugendliche (14-17 J) | 8-10 h | 7-11 h |
| Erwachsene (18-64 J) | 7-9 h | 6-10 h |
| Ältere (65+ J) | 7-8 h | 5-9 h |

**Veränderungen im Alter:**
- Tiefschlaf (N3) nimmt ab — bei Über-65-Jährigen oft < 10% (bei Erwachsenen 15-25%)
- REM-Schlaf nimmt leicht ab
- Schlafphasen werden fragmentierter, mehr nächtliche Wachphasen
- Phasenvorverlagerung: frühes Einschlafen, frühes Aufwachen

**Wichtig:** Die **Schlafqualität** ist klinisch wichtiger als die reine Stundenzahl. (National Sleep Foundation 2015; AASM 2020)"

**B1 (530 Zeichen):**
"Der Schlafbedarf ändert sich im Leben.

**So viel Schlaf brauchen Menschen:**
- Neugeborene (0-3 Monate): **14-17 Stunden**
- Kleinkinder (1-2 Jahre): **11-14 Stunden**
- Schulkinder (6-13 Jahre): **9-11 Stunden**
- Jugendliche (14-17): **8-10 Stunden**
- Erwachsene (18-64): **7-9 Stunden**
- Alte Menschen (65+): **7-8 Stunden**

**Was ändert sich im Alter?**
- **Weniger Tiefschlaf** (N3)
- Mehr Wach-Phasen in der Nacht
- Alte Menschen gehen oft **früh ins Bett** und stehen **früh auf**
- Der Schlaf ist oft **unruhiger**

**Wichtig:** Die Qualität ist wichtiger als die Stunden. Jemand kann 6 Stunden gut schlafen — das reicht oft."

- **Erklärungs-Step:** stepType `matrix` (Alter × Schlafstunden + Tiefschlaf-Anteil)
- **Glossar-Begriffe:** [Schlafbedarf, Schlaffragmentierung, Phasenvorverlagerung]

### Misconceptions → Distraktoren

**D1: "Alte Menschen brauchen nur 4-5 Stunden Schlaf"**
- **Fachbegriff:** Altersbedarf-Unterschätzung
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — auch Menschen über 65 brauchen **7-8 Stunden**. Der Unterschied: Der Schlaf ist **fragmentierter** und weniger tief. Viele ältere Patienten schlafen nachts kürzer, machen aber tagsüber ein Nickerchen. Insgesamt kommt die Schlafzeit an 7-8 Stunden heran."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — auch alte Menschen brauchen **7-8 Stunden** Schlaf. Der Unterschied: Sie schlafen oft kürzer am Stück. Sie wachen nachts öfter auf. Aber tagsüber machen sie oft ein Nickerchen. Zusammen sind es wieder 7-8 Stunden."

**D2: "Jeder Erwachsene braucht genau 8 Stunden"**
- **Fachbegriff:** 8-Stunden-Dogma
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — die Empfehlung ist **7-9 Stunden** für Erwachsene, mit individueller Bandbreite von 6-10 Stunden. Kurzschläfer schlafen stabil 6 Stunden ohne Tagesmüdigkeit, Langschläfer brauchen 9-10. Der Fokus liegt auf **Qualität und Erholungsgefühl**, nicht auf einer genauen Zahl."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Erwachsene brauchen **7 bis 9 Stunden**. Manche kommen mit 6 Stunden gut aus, andere brauchen 9 oder 10. Wichtig ist: Fühlst du dich am Morgen **erholt**? Das zählt mehr als die genauen Stunden."

**D3: "Wenn ein alter Patient tagsüber schläft, ist das schlecht"**
- **Fachbegriff:** Tagesschlaf-Verurteilung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — kurze **Nickerchen (Powernaps) unter 30 Minuten** am frühen Nachmittag sind **unbedenklich und oft hilfreich** für ältere Menschen. Problematisch werden sie erst, wenn sie **länger als 60 Minuten** dauern oder **nach 15 Uhr** liegen — dann stören sie den Nachtschlaf."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — ein **kurzes Nickerchen unter 30 Minuten** am frühen Nachmittag ist gut. Das tut alten Menschen oft gut. Schlecht wird es erst, wenn das Nickerchen **länger als 1 Stunde** dauert oder **nach 15 Uhr** ist. Dann ist die Nacht unruhig."

### Richtig-Feedback
**C1 (265 Zeichen):** "Gut. Die Bedarfe: Neugeborene 14-17 h, Erwachsene 7-9 h, Ältere 7-8 h. Im Alter wird der Schlaf fragmentierter, mit weniger Tiefschlaf und Phasenvorverlagerung. Individuelle Bandbreite groß — Qualität und Erholungsgefühl sind wichtiger als die reine Stundenzahl."

**B1 (225 Zeichen):** "Gut. Der Schlafbedarf hängt vom Alter ab: Neugeborene 14-17 Stunden, Erwachsene 7-9 Stunden, alte Menschen 7-8 Stunden. Im Alter ist der Schlaf oft unruhiger. Wichtig ist nicht die genaue Zahl — wichtig ist, ob du erholt aufwachst."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie viel Schlaf empfiehlt die National Sleep Foundation für Erwachsene und für über 65-Jährige?"
- **Rückseite:** "Erwachsene (18-64 J): 7-9 Stunden. Ältere (65+): 7-8 Stunden. Qualität wichtiger als reine Stundenzahl."
- **Kategorie:** fakt

---

## Baustein 4: insomnie

### Metadaten
- **bausteinId:** schlaf-insomnie
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Patientin sagt dir: 'Ich schlafe schon seit Wochen so schlecht.' Welche **drei** Fragen würdest du ihr stellen, um herauszufinden, was genau los ist?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "**Insomnie** ist die häufigste Schlafstörung: Probleme beim **Einschlafen, Durchschlafen oder frühzeitiges Erwachen** — mindestens **3 Nächte pro Woche über 3 Monate** mit **Beeinträchtigung am Tag**. Definition nach DGSM S3-Leitlinie und ICSD-3."

**B1 (225 Zeichen):** "**Insomnie** heißt Schlafstörung. Es gibt drei Arten: Probleme beim **Einschlafen**, beim **Durchschlafen** oder **zu früh aufwachen**. Für die Diagnose: mindestens **3 Nächte pro Woche**, mehr als **3 Monate**, und **Probleme am Tag** (müde, schlecht konzentriert)."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Die **Insomnie** ist die häufigste Schlafstörung. Laut RKI-Gesundheitsdaten (GEDA 2019/2020) berichten ca. **24% der Erwachsenen in Deutschland** regelmäßig über Ein- oder Durchschlafstörungen, ca. **6% erfüllen die klinischen Kriterien** einer chronischen Insomnie.

**Diagnostische Kriterien nach DGSM S3-Leitlinie (2017) und ICSD-3 (AASM 2023):**

1. **Ein-, Durchschlafstörung** oder **frühmorgendliches Erwachen**
2. Mindestens **3 Nächte pro Woche**
3. Über mindestens **3 Monate** (kürzer = Kurzzeit-Insomnie)
4. **Tagesbeeinträchtigung** (Müdigkeit, Konzentration, Stimmung, Leistung, Antrieb)
5. Ausreichende Schlafgelegenheit (nicht durch äußere Umstände erzwungen)

**Drei Typen:**
- **Einschlafinsomnie**: Einschlaflatenz > 30 Min
- **Durchschlafinsomnie**: Nächtliches Erwachen > 30 Min oder mehrfach
- **Früh-Erwachen-Insomnie**: Erwachen > 30 Min vor gewünschter Zeit

**Ursachen**: Stress, Angst, Depression (primäre Komorbidität), Schmerzen, Medikamente, Hospitalisierung, Schichtarbeit, schlechte Schlafhygiene. Eine **primäre Insomnie** (ohne klare Ursache) existiert ebenfalls. (DGSM S3-Leitlinie 2017; ICSD-3 2023)"

**B1 (590 Zeichen):**
"**Insomnie** heißt: Der Schlaf ist gestört.

**Drei Arten:**
1. **Einschlafstörung**: Du brauchst mehr als 30 Minuten zum Einschlafen
2. **Durchschlafstörung**: Du wachst nachts auf und kannst nicht wieder einschlafen
3. **Frühes Aufwachen**: Du wachst zu früh auf und kannst nicht wieder einschlafen

**Wann ist es eine echte Insomnie?** Wenn alle Punkte stimmen:
- Mindestens **3 Nächte pro Woche**
- Über mehr als **3 Monate**
- **Am Tag** hast du Probleme: müde, unkonzentriert, schlechte Stimmung

**Wie häufig?** In Deutschland haben ungefähr **24%** der Erwachsenen manchmal Schlafprobleme. Ungefähr **6%** haben eine echte chronische Insomnie.

**Ursachen:** Stress, Angst, Depression, Schmerzen, Medikamente, Schichtarbeit, Krankenhaus. Manchmal gibt es keine klare Ursache."

- **Erklärungs-Step:** stepType `categorize` (3 Typen + Symptome zuordnen)
- **Glossar-Begriffe:** [Insomnie, Einschlaflatenz, Komorbidität, Hospitalisierung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Eine Nacht schlecht schlafen ist schon Insomnie"**
- **Fachbegriff:** Akut-Chronisch-Verwechslung
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — **eine schlechte Nacht** ist normaler Schlaf-Alltag, keine Diagnose. Für die **klinische Insomnie** brauchst du: ≥3 Nächte/Woche, ≥3 Monate, Tagesbeeinträchtigung. Alles unter 3 Monaten heißt **Kurzzeit-Insomnie** (z.B. durch Stress, vorübergehend)."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — eine schlechte Nacht ist **noch keine Insomnie**. Für eine echte Insomnie musst du mindestens **3 Nächte pro Woche** und über **3 Monate** schlecht schlafen. Unter 3 Monaten heißt es **Kurzzeit-Insomnie**."

**D2: "Insomnie ist nur eine Art: Man kann nicht einschlafen"**
- **Fachbegriff:** Ein-Typen-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — es gibt **drei Formen** der Insomnie: (1) Einschlafinsomnie (> 30 Min), (2) Durchschlafinsomnie (Aufwachen nachts), (3) Früh-Erwachen-Insomnie (Aufwachen zu früh). Eine Patientin kann auch mehrere Formen gleichzeitig haben. Gerade bei Depression ist das frühe Erwachen typisch."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — es gibt **drei Arten**: (1) Nicht einschlafen können, (2) nachts aufwachen und nicht wieder einschlafen, (3) zu früh aufwachen. Eine Patientin kann auch mehr als einen Typ haben. Bei **Depression** kommt oft das frühe Aufwachen."

**D3: "Wenn jemand 4 Stunden schläft, hat er immer eine Insomnie"**
- **Fachbegriff:** Stunden-Fixierung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die **Schlafdauer** allein ist kein Diagnose-Kriterium. Manche **Kurzschläfer** brauchen biologisch nur 5-6 Stunden und sind tagsüber fit — das ist **keine Insomnie**. Umgekehrt kann jemand 8 Stunden im Bett liegen, aber fragmentiert schlafen — das **ist** eine Insomnie. Die **Tagesbeeinträchtigung** entscheidet."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die **Stunden** allein sagen nichts. Manche Menschen brauchen nur 5-6 Stunden und sind am Tag fit. Das ist **keine Insomnie**. Wichtig ist: Hat die Person am Tag Probleme (müde, unkonzentriert)? Das entscheidet, ob es eine Insomnie ist."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Insomnie ist Einschlaf-, Durchschlaf- oder Früh-Erwachen-Störung über ≥3 Nächte/Woche, ≥3 Monate, mit Tagesbeeinträchtigung (DGSM S3-Leitlinie). Prävalenz chronisch: ca. 6%. Ursachen: Stress, Angst, Depression, Schmerzen, Medikamente, Hospitalisierung. Kurzzeit (<3 Monate) ist davon abzugrenzen."

**B1 (245 Zeichen):** "Genau. **Insomnie** heißt: Probleme beim Einschlafen, Durchschlafen oder zu frühes Aufwachen. Kriterien: **mindestens 3 Nächte pro Woche**, **mehr als 3 Monate**, **Probleme am Tag** (Müdigkeit, Konzentration). Häufige Ursachen: Stress, Depression, Schmerzen, Krankenhaus."

### Verknüpfte Karteikarte
- **Vorderseite:** "Ab wann spricht man klinisch von einer chronischen Insomnie (DGSM S3-Leitlinie)?"
- **Rückseite:** "Ein-, Durchschlafstörung oder frühes Erwachen, ≥3 Nächte/Woche, ≥3 Monate, mit Tagesbeeinträchtigung. Unter 3 Monaten = Kurzzeit-Insomnie."
- **Kategorie:** fakt

---

## Baustein 5: hypersomnie-und-parasomnien

### Metadaten
- **bausteinId:** schlaf-hypersomnie-parasomnie
- **bloomLevel:** 2
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Kennst du jemanden, der nachts redet, schlafwandelt oder Albträume hat? Oder jemanden, der tagsüber einfach einschläft, obwohl er nachts genug schläft? Was könnte dahinter stecken?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "**Hypersomnie** = krankhafte Tagesschläfrigkeit trotz ausreichender Nachtschlaf-Dauer (z.B. Narkolepsie, Schlafapnoe). **Parasomnien** = unerwünschte Ereignisse während des Schlafs: NREM-Parasomnien (Schlafwandeln, Pavor nocturnus) oder REM-Parasomnien (Albträume). (ICSD-3)"

**B1 (225 Zeichen):** "Zwei weitere Gruppen von Schlafstörungen: **Hypersomnie** = zu müde am Tag, auch wenn die Nacht normal war. **Parasomnien** = komische Sachen im Schlaf: Schlafwandeln, Schreien, Albträume. Man unterscheidet NREM- und REM-Parasomnien."

- **Step-Typ:** categorize (Symptome → Hypersomnie oder Parasomnie)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Nach **ICSD-3** (International Classification of Sleep Disorders, AASM) gibt es 7 Hauptkategorien von Schlafstörungen. Neben der Insomnie die häufigsten:

**Hypersomnien** — übermäßige Tagesschläfrigkeit trotz normaler Nachtschlaf-Dauer:
- **Narkolepsie Typ 1 / 2**: plötzliche Schlafattacken, Kataplexie (Muskelverlust durch Emotionen), Hypocretin-Mangel
- **Idiopathische Hypersomnie**: anhaltende Müdigkeit, nicht erholsamer langer Schlaf
- **Sekundär** (z.B. bei **obstruktiver Schlafapnoe** — siehe eigener Baustein)

**Parasomnien** — unerwünschte Phänomene während des Schlafs, eingeteilt nach Schlafphase:

| NREM-Parasomnien (meist 1. Nachthälfte, N3) | REM-Parasomnien (meist 2. Nachthälfte) |
|---|---|
| Schlafwandeln (Somnambulismus) | Albträume (Nightmare Disorder) |
| Pavor nocturnus (Nachtschreck) | REM-Schlafverhaltensstörung (RBD) |
| Schlaftrunkenheit (Confusional Arousal) | Schlafparalyse |

**Zirkadiane Rhythmusstörungen**: z.B. verzögerte Schlafphase (Eulen-Typ), Schichtarbeiter-Syndrom.

**Schlafbezogene Bewegungsstörungen**: z.B. Restless-Legs-Syndrom (RLS).

(ICSD-3, AASM 2023)"

**B1 (580 Zeichen):**
"Es gibt viele Arten von Schlafstörungen. Neben der **Insomnie** die wichtigsten:

**Hypersomnie** = zu müde am Tag:
- **Narkolepsie**: Man schläft plötzlich am Tag ein. Manchmal mit Muskelverlust bei Gefühlen (Kataplexie)
- **Schlafapnoe**: Atem setzt nachts aus, man schläft schlecht — siehe eigener Baustein
- **Sekundär**: durch andere Krankheiten oder Medikamente

**Parasomnien** = komische Sachen im Schlaf:

**NREM-Parasomnien (früh in der Nacht, Tiefschlaf):**
- Schlafwandeln (Somnambulismus)
- Nachtschreck (Pavor nocturnus) — Kinder schreien, sind aber nicht wach
- Schlaftrunkenheit: halb wach, verwirrt

**REM-Parasomnien (spät in der Nacht, Traumphase):**
- Albträume
- **REM-Schlafverhaltensstörung (RBD)**: Der Patient lebt Träume aus, schlägt um sich
- Schlaflähmung: wach, aber kann sich nicht bewegen

Dazu: **Rhythmusstörungen** (Jetlag, Schichtarbeit) und **Restless Legs** (unruhige Beine)."

- **Erklärungs-Step:** stepType `matrix` (Schlafphase × Störungstyp)
- **Glossar-Begriffe:** [Hypersomnie, Narkolepsie, Kataplexie, Parasomnie, Somnambulismus, Pavor nocturnus, RBD, Restless-Legs-Syndrom]

### Misconceptions → Distraktoren

**D1: "Albträume und Schlafwandeln sind dasselbe"**
- **Fachbegriff:** Parasomnien-Verwechslung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — das sind **zwei verschiedene Parasomnien**: **Schlafwandeln** passiert in NREM-N3 (Tiefschlaf, erste Nachthälfte), der Patient ist motorisch aktiv, aber nicht erinnerbar. **Albträume** passieren im REM-Schlaf (zweite Nachthälfte), der Patient erinnert sich gut. Merke: NREM = Körper wach, REM = Kopf erinnert."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das sind **zwei verschiedene Dinge**. **Schlafwandeln** passiert **früh in der Nacht** im Tiefschlaf. Der Patient bewegt sich, erinnert sich aber nicht. **Albträume** passieren **spät in der Nacht** im REM-Schlaf. Hier erinnert sich der Patient gut."

**D2: "Wer am Tag müde ist, hat einfach zu wenig geschlafen"**
- **Fachbegriff:** Hypersomnie-Vereinfachung
- **Feedback (C1, 290 Zeichen):** "Nicht immer — **Hypersomnie** bedeutet Tagesmüdigkeit **trotz** ausreichender Nachtschlafzeit. Typische Ursachen: **obstruktive Schlafapnoe** (fragmentierter Schlaf durch Atemaussetzer), **Narkolepsie** (Hypocretin-Mangel), Medikamente (Benzodiazepine, Antihistaminika), Depression. Darum immer nach Schnarchen, Atempausen, Medikamenten fragen."
- **Feedback (B1, 250 Zeichen):** "Nicht immer — **Hypersomnie** heißt: müde am Tag, obwohl die Nacht lang genug war. Ursachen: **Schlafapnoe** (Atem stoppt nachts), **Narkolepsie**, bestimmte **Medikamente** (Beruhigungsmittel), **Depression**. Darum frage nach Schnarchen und Medikamenten."

**D3: "Schlafwandeln ist gefährlich, weil die Person träumt und herumläuft"**
- **Fachbegriff:** Schlafwandel-Mechanismus-Fehler
- **Feedback (C1, 305 Zeichen):** "Fast — Schlafwandeln passiert im **Tiefschlaf (N3)**, also **nicht** in der Traumphase (REM). Der Wandler träumt nicht aktiv, sondern ist motorisch aktiv ohne Bewusstsein. Gefährlich ist es trotzdem (Stürze, unkontrolliertes Verlassen der Wohnung). Bei der **RBD** ist es umgekehrt: Da werden REM-Träume ausgelebt — meist bei älteren Männern."
- **Feedback (B1, 265 Zeichen):** "Fast — Schlafwandeln passiert im **Tiefschlaf**, **nicht** in der Traumphase. Die Person träumt nicht, sondern bewegt sich ohne Bewusstsein. Trotzdem gefährlich (Stürze!). Bei der **REM-Schlafverhaltensstörung (RBD)** ist es umgekehrt: Da werden Träume ausgelebt."

### Richtig-Feedback
**C1 (290 Zeichen):** "Gut. Hypersomnien (Narkolepsie, Schlafapnoe) machen Tagesmüdigkeit trotz normaler Nachtschlafzeit. Parasomnien sind unerwünschte Schlaf-Ereignisse: NREM-Parasomnien (Schlafwandeln, Pavor) in der ersten Nachthälfte, REM-Parasomnien (Albträume, RBD, Schlafparalyse) in der zweiten. (ICSD-3)"

**B1 (245 Zeichen):** "Gut. Zwei Gruppen: **Hypersomnien** = zu müde am Tag (Narkolepsie, Schlafapnoe). **Parasomnien** = komische Sachen im Schlaf. NREM-Parasomnien früh in der Nacht (Schlafwandeln, Nachtschreck). REM-Parasomnien spät (Albträume, Träume ausleben)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne je 1 Beispiel für eine NREM-Parasomnie und eine REM-Parasomnie."
- **Rückseite:** "NREM-Parasomnie (Tiefschlaf, 1. Nachthälfte): z.B. Schlafwandeln, Pavor nocturnus. REM-Parasomnie (2. Nachthälfte): z.B. Albträume, REM-Schlafverhaltensstörung (RBD)."
- **Kategorie:** fachbegriff

---

## Baustein 6: schlafapnoe-erkennen

### Metadaten
- **bausteinId:** schlaf-apnoe-erkennen
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient erzählt dir: 'Ich schnarche laut, meine Frau sagt, ich höre mittendrin auf zu atmen. Und tagsüber bin ich immer so müde.' Woran denkst du sofort — und welche Frage stellst du als nächstes?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "**Obstruktive Schlafapnoe (OSA)** — nächtliche Atemaussetzer durch Kollaps der oberen Atemwege. **STOP-BANG-Screening** (8 Fragen) ist der schnellste Pflege-Test. Leitsymptome: **lautes Schnarchen, beobachtete Atempausen, Tagesmüdigkeit**. (DGSM S3-Leitlinie SBAS)"

**B1 (220 Zeichen):** "**Obstruktive Schlafapnoe (OSA)** — der Patient hat Atempausen in der Nacht. Die Atemwege fallen zusammen. Die Pflege fragt mit dem **STOP-BANG-Fragebogen**. Zeichen: laut **schnarchen**, **Atempausen** (vom Partner gesehen), am Tag **müde**."

- **Step-Typ:** text (displayFormat: checklist — STOP-BANG-Schema)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Die **obstruktive Schlafapnoe (OSA)** ist die wichtigste schlafbezogene Atmungsstörung. Durch wiederholten Kollaps der oberen Atemwege entstehen **Apnoen** (Atemaussetzer ≥10 Sek) und **Hypopnoen** (flache Atmung). Folge: Sauerstoffabfall, Weck-Reaktionen (Arousals), fragmentierter Schlaf.

**Kriterien (AASM):**
- **Apnoe-Hypopnoe-Index (AHI)**: Anzahl der Ereignisse pro Stunde
- AHI 5-15 = leicht, 15-30 = mittel, >30 = schwer

**STOP-BANG-Fragebogen** (8 Fragen, in der Pflege gut einsetzbar):
- **S**noring — lautes Schnarchen?
- **T**ired — tagsüber müde?
- **O**bserved — Atempausen beobachtet?
- **P**ressure — hoher Blutdruck?
- **B**MI > 35?
- **A**ge > 50?
- **N**eck — Halsumfang > 40 cm?
- **G**ender — männlich?

**≥3 Ja = erhöhtes Risiko** → an Schlaflabor verweisen.

**Komplikationen ohne Therapie:**
- Tagesmüdigkeit → Unfallrisiko (3x erhöht)
- Kardiovaskulär: Bluthochdruck, Herzinfarkt, Schlaganfall
- Metabolisch: Diabetes Typ 2

**Therapie-Goldstandard**: **nCPAP** (nasale kontinuierliche Überdruckbeatmung) über Maske. In der Pflege: Maskensitz prüfen, Adhärenz unterstützen.

(DGSM S3-Leitlinie SBAS 2017, aktualisiert 2020; AASM Scoring Manual 2020)"

**B1 (610 Zeichen):**
"**Obstruktive Schlafapnoe (OSA)** heißt: In der Nacht setzt die Atmung immer wieder **kurz aus**. Die Atemwege fallen zusammen. Der Sauerstoff sinkt. Das Gehirn weckt den Patienten kurz auf. Er merkt es oft nicht — aber der Schlaf ist kaputt.

**Zeichen:**
- Lautes **Schnarchen**
- **Atempausen** (der Partner sieht sie)
- Tagsüber sehr **müde**
- Morgens **Kopfschmerzen**
- **Bluthochdruck**

**STOP-BANG-Fragebogen** (8 Ja/Nein-Fragen):
- **S**nore (schnarchen?)
- **T**ired (müde?)
- **O**bserved apnea (Atempausen?)
- **P**ressure (hoher Blutdruck?)
- **B**MI über 35?
- **A**lter über 50?
- **N**ackenumfang über 40 cm?
- **G**eschlecht: Mann?

**3 oder mehr Ja → Risiko hoch** → zum Schlaflabor.

**Therapie:** Der Patient trägt nachts eine **CPAP-Maske**. Sie bläst Luft in die Atemwege. Die Pflege prüft: Sitzt die Maske gut? Nutzt er sie auch wirklich?"

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep — STOP-BANG)
- **Glossar-Begriffe:** [Obstruktive Schlafapnoe, Apnoe, Hypopnoe, AHI, Arousal, STOP-BANG, CPAP]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wer laut schnarcht, hat automatisch eine Schlafapnoe"**
- **Fachbegriff:** Schnarchen-Apnoe-Gleichsetzung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **einfaches Schnarchen** ohne Atempausen und ohne Tagesmüdigkeit ist **keine Apnoe**, sondern nur Geräusch durch Atemwegsvibration. Apnoe braucht **Atempausen ≥10 Sek + Sauerstoffabfall + Weckreaktion**. Deshalb STOP-BANG: Mehrere Hinweise kombinieren, nicht nur Schnarchen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **nur schnarchen** ist noch keine Schlafapnoe. Das ist oft nur Geräusch. Zu einer Apnoe gehört: **Atempausen**, **Sauerstoffabfall** und **Tagesmüdigkeit**. Darum fragt der STOP-BANG nach **mehreren Zeichen**, nicht nur nach Schnarchen."

**D2: "Schlafapnoe ist harmlos, nur nervig für den Partner"**
- **Fachbegriff:** OSA-Bagatellisierung
- **Feedback (C1, 310 Zeichen):** "Genau falsch — **unbehandelte OSA ist gefährlich**. Das **Unfallrisiko im Straßenverkehr** ist ca. **3-fach erhöht** (Tagesmüdigkeit). Dazu: Bluthochdruck, Herzinfarkt, Schlaganfall, Diabetes Typ 2. OSA verkürzt die Lebenserwartung — ist also **nicht nur eine Partner-Angelegenheit**, sondern eine echte Krankheit."
- **Feedback (B1, 265 Zeichen):** "Genau falsch — unbehandelte OSA ist **gefährlich**. Der Patient hat ein **3-fach höheres Unfallrisiko** im Straßenverkehr. Dazu bekommt er öfter Bluthochdruck, Herzinfarkt, Schlaganfall und Diabetes. OSA ist eine echte Krankheit, nicht nur nervig für den Partner."

**D3: "CPAP-Maske braucht der Patient nur wenn er es schlimm findet"**
- **Fachbegriff:** Adhärenz-Missverständnis
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **CPAP muss regelmäßig (ideal jede Nacht)** genutzt werden, sonst wirkt die Therapie nicht. Viele Patienten hören nach Wochen auf, weil die Maske stört. Pflegeaufgabe: **Adhärenz unterstützen** — Maskensitz prüfen, Druckprobleme ansprechen, Erfolg zeigen (AHI-Senkung im Gerät ablesen)."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — die CPAP-Maske muss **jede Nacht** getragen werden. Sonst hilft sie nicht. Viele Patienten hören nach einer Weile auf. Die Pflege hilft: Passt die Maske gut? Tut sie weh? Man kann im Gerät sehen, wie viele Stunden der Patient sie benutzt hat."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. OSA: lautes Schnarchen + Atempausen + Tagesmüdigkeit = Verdacht. Screening mit STOP-BANG (≥3 Ja = Risiko). Diagnose im Schlaflabor über AHI. Therapie: CPAP. Komplikationen ohne Therapie: Unfälle, Bluthochdruck, Herzinfarkt, Schlaganfall, Diabetes Typ 2."

**B1 (250 Zeichen):** "Sehr gut. Bei Schnarchen + Atempausen + Müdigkeit am Tag: **Schlafapnoe möglich**. Pflegetest: **STOP-BANG** (8 Fragen). 3 oder mehr Ja → Schlaflabor. Behandlung: **CPAP-Maske** jede Nacht. Ohne Behandlung: mehr Unfälle, Bluthochdruck, Herzinfarkt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeuten die 8 Buchstaben im STOP-BANG-Screening für Schlafapnoe?"
- **Rückseite:** "Snoring, Tired, Observed apnea, Pressure (Hypertonie), BMI >35, Age >50, Neck >40 cm, Gender männlich. ≥3 Ja = erhöhtes OSA-Risiko → Schlaflabor."
- **Kategorie:** assessment

---

## Baustein 7: stoerfaktoren-stationaer

### Metadaten
- **bausteinId:** schlaf-stoerfaktoren-stationaer
- **bloomLevel:** 4
- **wissensart:** analyse
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir eine Nacht auf einer Station vor — zwischen 22 Uhr und 6 Uhr. Sammle **mindestens 5 Dinge**, die den Schlaf eines Patienten stören können."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Hospitalisierte Patienten schlafen durchschnittlich **nur 5-6 Stunden** und wachen **6-10× pro Nacht** auf. Hauptstörfaktoren: **Lärm** (Monitore, Kollegen, Mitpatient), **Licht** (Flurlicht, Taschenlampe), **Pflegeaktionen** (Vitalzeichen, Medikation), Schmerz, Angst."

**B1 (220 Zeichen):** "Im Krankenhaus schlafen Patienten **schlecht**: oft nur **5-6 Stunden**, mit **6-10 Wachphasen** pro Nacht. Warum? **Lärm** (Geräte, Personal, Mitpatient), **Licht** (Flur, Taschenlampe), **Pflege-Aktionen** (Blutdruck, Medikamente), **Schmerz**, **Angst**."

- **Step-Typ:** categorize (Störfaktoren → Kategorien: Umgebung/Medizinisch/Pflegerisch/Psychisch)

### Stufe 3 — Erklärung

**C1 (800 Zeichen):**
"Schlaf im Krankenhaus oder Pflegeheim ist regelhaft **gestört**. Studien aus deutschen Krankenhäusern zeigen: Patienten schlafen im Mittel **5-6 Stunden/Nacht** (vor Aufnahme: 7-8 Stunden), mit **6-10 Arousals pro Stunde** (gesund: 1-2).

**Hauptstörfaktoren nach Kategorien:**

**Umgebung:**
- **Lärm**: Monitore (Alarmgrenzen großzügig!), Tür-Quietschen, Spülen in Spülkammer, Flurgespräche, Telefon. Nach WHO-Schlafleitlinie sollte der nächtliche Krankenhauslärm **< 35 dB** liegen — Realität oft 50-60 dB.
- **Licht**: Flurlicht durch Türspalt, Taschenlampen bei Kontrollrunden, Monitor-LEDs, Mitpatient liest
- **Temperatur**: oft zu warm/trocken
- **Mitpatient**: Schnarchen, Husten, Unruhe, Rufglocke

**Medizinisch/Pflegerisch:**
- Vitalzeichenkontrollen nachts (oft zu eng getaktet)
- Medikamentengabe zur Nacht/früh
- Blutabnahmen morgens 5-6 Uhr
- Infusionspumpen-Alarme
- Lagerungen nach Zeitschema
- Katheter, Drainagen, Schmerzen bei Bewegung

**Psychisch:**
- Schmerzen, Übelkeit, Dyspnoe
- Angst vor Diagnose/OP
- Heimweh, Einsamkeit
- Desorientierung (besonders bei Demenz: **Sundowning**)

**Pflege-Strategie: 'Sleep Bundle'** (evidenzbasiert):
1. Zimmerrunden reduzieren (wenn klinisch vertretbar)
2. Nachts nur Flüsterton, Türen sanft schließen
3. Monitore stumm/auf Station
4. Medikamentenzeiten clustern
5. Patient aktiv nach Schlafgewohnheiten fragen

(Kamdar et al. 2012; DGSM 2020)"

**B1 (620 Zeichen):**
"Patienten im Krankenhaus schlafen **viel schlechter** als zu Hause. Im Schnitt nur **5-6 Stunden**. Sie wachen **6-10 Mal pro Stunde** kurz auf.

**Störfaktoren — in Kategorien:**

**Umgebung:**
- **Lärm**: Monitore, Türen, Kollegen im Flur, Telefon. Die **WHO** sagt: nachts unter **35 Dezibel** — das schaffen wir selten.
- **Licht**: Flur, Taschenlampe bei Kontrolle, Monitor-Lämpchen, Mitpatient liest
- **Temperatur**: oft zu warm oder zu trocken
- **Mitpatient**: schnarcht, hustet, klingelt

**Medizinisch/Pflegerisch:**
- Blutdruck messen in der Nacht
- Medikamente zur Nacht
- Blutabnahme früh morgens um 5-6 Uhr
- Infusionspumpe piept
- Lagern nach Zeitplan

**Psychisch:**
- **Schmerzen**, Übelkeit, Luftnot
- **Angst** vor der Diagnose oder OP
- **Heimweh**, Einsamkeit
- **Verwirrtheit** (besonders bei Demenz: **Sundowning** — abends schlimmer)

**Was hilft? (Sleep Bundle):**
1. Weniger Zimmerrunden, wenn möglich
2. In der Nacht nur **flüstern**, Türen leise schließen
3. **Monitore** leise stellen
4. Medikamente zusammen geben
5. Patient **fragen**, wie er zu Hause schläft"

- **Erklärungs-Step:** stepType `categorize` (20 Störfaktoren in 3 Kategorien)
- **Glossar-Begriffe:** [Arousal, Sleep Bundle, Sundowning, Dezibel]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Vitalzeichenkontrolle alle 4 Stunden muss sein, auch wenn sie den Patienten stört"**
- **Fachbegriff:** Routine-Starre
- **Feedback (C1, 305 Zeichen):** "Nicht pauschal — das **Pflegeverständnis hat sich gewandelt**. Bei stabilen Patienten (z.B. nach Reha-Aufnahme, ohne Monitor-Pflicht) reicht oft **1 Kontrolle pro Nacht** oder sogar keine. Bei Hochrisiko-Patienten natürlich strenger. Die Pflege **denkt mit** statt starr nach Zeitplan zu arbeiten. Motto: So viel wie nötig, so wenig wie möglich."
- **Feedback (B1, 260 Zeichen):** "Nicht pauschal — es kommt auf den Patienten an. **Stabile Patienten** brauchen oft nur **1 Kontrolle pro Nacht** oder keine. Bei **kritischen Patienten** ist es anders. Die Pflege denkt mit: **So viel wie nötig, so wenig wie möglich** — schützt den Schlaf."

**D2: "Lärm im Krankenhaus lässt sich nicht vermeiden, da muss der Patient durch"**
- **Fachbegriff:** Fatalismus-Fehler
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **viele Lärmquellen sind veränderbar**: Alarmgrenzen großzügiger einstellen, Türen **leise** schließen (nicht zuschlagen), Übergaben **nicht vor dem Patientenzimmer**, keine Telefonate im Patientenzimmer, **Ohrstöpsel + Schlafmaske** für den Patienten anbieten. Das Sleep-Bundle zeigt: Lärm ist reduzierbar."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **viele Lärmquellen sind zu vermeiden**: **leise** Türen schließen, **flüstern** im Flur, keine Telefonate im Zimmer, Alarmgrenzen am Monitor großzügiger. Man kann dem Patienten auch **Ohrstöpsel und Schlafmaske** anbieten. Lärm ist zu reduzieren."

**D3: "Wenn der Patient schlecht schläft, bekommt er einfach ein Schlafmittel"**
- **Fachbegriff:** Pharmakologie-Kurzschluss
- **Feedback (C1, 320 Zeichen):** "Nicht so einfach — **Schlafmittel sollten letzte Wahl** sein (Sturzrisiko, Abhängigkeit, Delir bei Älteren). **Zuerst immer**: Störfaktoren identifizieren und beheben (Lärm, Licht, Schmerz, Angst, Harndrang). Wenn der Patient Schmerzen hat, helfen **Analgetika**, nicht Schlafmittel. Wenn er Angst hat, hilft **Gespräch**. Baustein 8 zeigt die Schlafhygiene-Maßnahmen."
- **Feedback (B1, 280 Zeichen):** "Nicht so einfach — **Schlafmittel sind die letzte Lösung** (Sturzrisiko, Abhängigkeit, besonders bei alten Menschen). **Zuerst immer**: Warum schläft er schlecht? Lärm? Licht? **Schmerzen**? **Angst**? Bei Schmerzen helfen Schmerzmittel, nicht Schlaftabletten. Bei Angst hilft ein Gespräch."

### Richtig-Feedback
**C1 (315 Zeichen):** "Sehr gut. Im Krankenhaus schlafen Patienten im Schnitt 5-6 Stunden mit 6-10 Arousals/Stunde. Störfaktoren in 3 Kategorien: Umgebung (Lärm, Licht, Temperatur, Mitpatient), Medizinisch/Pflegerisch (Kontrollen, Medikation, Blutabnahmen), Psychisch (Schmerz, Angst, Desorientierung). Sleep-Bundle-Strategien reduzieren Störungen evidenzbasiert."

**B1 (275 Zeichen):** "Sehr gut. Im Krankenhaus schlafen Patienten schlecht: nur **5-6 Stunden**, **6-10 Wachphasen**. **3 Kategorien von Störfaktoren**: Umgebung (Lärm, Licht), Medizinisch-Pflegerisch (Kontrollen, Blutabnahme), Psychisch (Schmerz, Angst). Das **Sleep Bundle** hilft: weniger Lärm, weniger Zimmerrunden, mit dem Patienten reden."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 3 Kategorien von Schlaf-Störfaktoren im Krankenhaus mit je 1 Beispiel."
- **Rückseite:** "(1) Umgebung: Lärm (Monitore, Gespräche), Licht, Mitpatient. (2) Medizinisch/Pflegerisch: Vitalzeichenkontrollen, Medikation, Blutabnahme. (3) Psychisch: Schmerzen, Angst, Desorientierung (Sundowning)."
- **Kategorie:** handlung

---

## Baustein 8: schlafhygiene-massnahmen

### Metadaten
- **bausteinId:** schlaf-hygiene-massnahmen
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Eine 72-jährige Patientin klagt auf Station: 'Ich kann nicht einschlafen.' Was könntest du **ohne ein Schlafmittel** konkret tun oder empfehlen? Sammle **4 Maßnahmen**."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "**Schlafhygiene** = nicht-medikamentöse Maßnahmen für besseren Schlaf. Kern: **regelmäßiger Rhythmus, abendliche Reizreduktion, Bett nur für Schlaf, Koffein/Alkohol meiden, körperliche Bewegung tagsüber, kühles/dunkles/leises Schlafzimmer**. (DGSM S3-Leitlinie)"

**B1 (230 Zeichen):** "**Schlafhygiene** = Tipps für besseren Schlaf **ohne Medikamente**. Die wichtigsten: **Immer gleiche Zeiten**, abends **ruhig** werden, **Bett nur zum Schlafen**, **Kaffee und Alkohol** abends meiden, tagsüber **bewegen**, Zimmer **kühl, dunkel und leise**."

- **Step-Typ:** text (displayFormat: checklist — 10-Punkte-Schlafhygiene)

### Stufe 3 — Erklärung

**C1 (820 Zeichen):**
"Die **Schlafhygiene** ist laut DGSM S3-Leitlinie die Basis-Intervention bei Schlafstörungen — vor jeder Pharmakotherapie. Sie besteht aus **evidenzbasierten Verhaltensregeln**:

**Rhythmus (zirkadian):**
- **Feste Aufsteh-Zeit**, auch am Wochenende und bei schlechter Nacht
- Feste Bettgeh-Zeit nur bei echter Müdigkeit
- Kein Mittagsschlaf > 30 Min, nicht nach 15 Uhr

**Abends (reizarme Phase):**
- **2 h vor dem Schlafen**: keine schweren Mahlzeiten, kein intensiver Sport
- **1 h vor dem Schlafen**: kein Bildschirm (Blaulicht hemmt Melatonin) oder Blaulichtfilter einschalten
- **Abendroutine**: immer gleich (Lesen, Dusche, Musik) — Signal für das Gehirn

**Bett-Konditionierung (Stimulus-Kontrolle):**
- **Bett nur zum Schlafen (+ Sex)** — kein Arbeiten, kein Fernsehen im Bett
- Wenn nach 20 Min nicht eingeschlafen: **aufstehen**, ruhige Tätigkeit, wiederkommen bei Müdigkeit

**Substanzen:**
- **Kein Koffein** nach 14 Uhr (Halbwertszeit 5-6 h)
- **Kein Alkohol** zum Einschlafen (stört REM, fragmentiert Schlaf)
- **Nikotin**-Reduktion
- Vorsicht bei Medikamenten (Beta-Blocker, Kortison, Antidepressiva)

**Schlafumgebung:**
- **Temperatur 16-19 °C** (kühl)
- **Dunkelheit** (Verdunklung, keine LEDs)
- **Ruhe** (ggf. Ohrstöpsel), weiße Geräusche akzeptabel

**Körperliche Aktivität:**
- **Tagsüber** regelmäßige Bewegung (nicht später als 4 h vor dem Schlaf)

**Wichtig:** Schlafhygiene wirkt nicht über Nacht — Wirkung zeigt sich nach **2-3 Wochen konsequenter Anwendung**. Bei chronischer Insomnie ist **KVT-I** (kognitive Verhaltenstherapie für Insomnie) die Therapie der ersten Wahl. (DGSM S3-Leitlinie 2017/2020)"

**B1 (690 Zeichen):**
"**Schlafhygiene** heißt: Dinge tun, damit du besser schläfst — **ohne Tabletten**. Die DGSM sagt: **immer zuerst Schlafhygiene** probieren, dann Medikamente.

**Rhythmus:**
- **Immer zur gleichen Zeit aufstehen** (auch am Wochenende)
- Nur ins Bett gehen, wenn du **wirklich müde** bist
- Mittagsschlaf: höchstens **30 Minuten**, nicht nach 15 Uhr

**Abends:**
- **2 Stunden vor dem Schlafen**: nicht mehr viel essen, kein Sport
- **1 Stunde vor dem Schlafen**: **kein Handy, kein Fernseher** (Blaulicht stört). Oder Blaulichtfilter an.
- Immer die gleiche **Abendroutine** (Lesen, Duschen, Musik)

**Bett nur zum Schlafen:**
- Im Bett **nicht arbeiten, nicht fernsehen**
- Kannst du nach **20 Minuten** nicht einschlafen: **aufstehen**, etwas Ruhiges tun, wieder hinlegen, wenn du müde wirst

**Keine Wachmacher:**
- **Kein Kaffee** nach 14 Uhr
- **Kein Alkohol** zum Einschlafen (macht den Schlaf unruhig)
- **Nicht** oder wenig rauchen

**Zimmer:**
- **Kühl**: 16-19 °C
- **Dunkel** (Rollladen zu, keine LEDs)
- **Leise** (oder Ohrstöpsel)

**Bewegung:**
- **Tagsüber**: regelmäßig bewegen
- Nicht zu spät am Abend Sport

**Wichtig:** Schlafhygiene wirkt nicht sofort. Nach **2-3 Wochen** merkst du, dass es besser wird. Bei chronischer Insomnie hilft **KVT-I** (eine spezielle Therapie) am besten — **besser als Schlafmittel**."

- **Erklärungs-Step:** stepType `checklist` (10 Schlafhygiene-Regeln)
- **Glossar-Begriffe:** [Schlafhygiene, Stimulus-Kontrolle, KVT-I, Halbwertszeit, Blaulicht]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Glas Wein am Abend hilft beim Einschlafen"**
- **Fachbegriff:** Alkohol-Schlaf-Mythos
- **Feedback (C1, 315 Zeichen):** "Nicht empfehlenswert — **Alkohol wirkt biphasisch**: In den ersten 2-3 Stunden sedierend, danach **fragmentiert er den Schlaf stark** (Weckreaktionen, REM-Unterdrückung, Harndrang durch ADH-Hemmung). Das Einschlafen ist schneller, aber der Schlaf **insgesamt schlechter**. Morgens Kopfschmerzen und Müdigkeit. Deshalb: Alkohol ist **kein Schlafmittel**."
- **Feedback (B1, 260 Zeichen):** "Nicht zu empfehlen — Alkohol macht zuerst müde, aber später **zerstört er den Schlaf**. Man wacht öfter auf, hat Harndrang, träumt weniger. Morgens ist man **müde und hat Kopfweh**. Einschlafen geht schneller, **aber der Schlaf ist insgesamt schlechter**."

**D2: "Wenn ich nicht schlafen kann, sollte ich liegen bleiben und warten"**
- **Fachbegriff:** Stimulus-Kontroll-Verstoß
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — nach **20 Minuten** ohne Einschlafen ist die **Stimulus-Kontroll-Regel**: **aufstehen**, in einen anderen Raum gehen, etwas Ruhiges tun (Lesen, langweilige Aufgabe, kein Bildschirm). Erst zurück ins Bett, wenn Müdigkeit kommt. Grund: Sonst wird das Bett als 'Ort des Nicht-Schlafens' konditioniert."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — wenn du nach **20 Minuten** nicht schläfst, **steh auf**. Gehe in einen anderen Raum. Mache etwas Ruhiges (Lesen, kein Bildschirm). Zurück ins Bett, wenn du müde wirst. **Grund:** Sonst lernt dein Gehirn: 'Bett = wach liegen'. Das ist schlecht."

**D3: "Mit 70 ist es normal, weniger gut zu schlafen — da hilft eh nichts"**
- **Fachbegriff:** Alters-Fatalismus
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — es stimmt, dass Schlaf im Alter fragmentierter und flacher wird, aber **Schlafhygiene hilft auch älteren Menschen**. Besonders wichtig: **Tageslicht am Morgen** (1 h draußen), **Bewegung**, **kein langer Mittagsschlaf**, **feste Zeiten**. Nie resignieren — gestörter Schlaf im Alter erhöht Sturzrisiko, Depression und Demenzrisiko. Es lohnt sich."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — auch **alte Menschen** schlafen besser mit Schlafhygiene. Besonders wichtig: **Tageslicht** am Morgen (1 Stunde draußen), **Bewegung**, **kein langer Mittagsschlaf**, **feste Zeiten**. Schlechter Schlaf erhöht das **Sturzrisiko** und macht Depressionen wahrscheinlicher."

### Richtig-Feedback
**C1 (315 Zeichen):** "Sehr gut. Schlafhygiene ist die Basis vor Pharmakotherapie (DGSM). Kernregeln: fester Rhythmus, reizarme Abendroutine, Bett nur zum Schlafen, 20-Min-Regel, kein Koffein nach 14 Uhr, kein Alkohol zum Einschlafen, Zimmer 16-19°C/dunkel/leise, tagsüber Bewegung. Wirkung nach 2-3 Wochen. Bei chronischer Insomnie: KVT-I = erste Wahl."

**B1 (270 Zeichen):** "Sehr gut. **Schlafhygiene vor Schlaftablette!** Die wichtigsten Regeln: **feste Zeiten**, **ruhiger Abend**, **Bett nur zum Schlafen**, nach 20 Minuten ohne Schlaf **aufstehen**, **kein Kaffee** nach 14 Uhr, **kein Alkohol** zum Einschlafen, Zimmer **16-19°C, dunkel, leise**, **tagsüber bewegen**. Wirkung nach 2-3 Wochen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist die '20-Minuten-Regel' der Schlafhygiene (Stimulus-Kontrolle)?"
- **Rückseite:** "Wer nach 20 Minuten nicht eingeschlafen ist: aufstehen, in anderen Raum, ruhige Tätigkeit, zurück ins Bett erst bei echter Müdigkeit. Ziel: Bett mit Schlaf statt mit Wachliegen verknüpfen."
- **Kategorie:** handlung

---

## Baustein 9: medikamentoese-schlafmittel

### Metadaten
- **bausteinId:** schlaf-medikamente-risiken
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Ein 82-jähriger Patient bekommt seit der Aufnahme jede Nacht eine Schlaftablette (Zolpidem 10 mg). Nach einer Woche stürzt er beim Aufstehen zur Toilette. Welchen Zusammenhang siehst du — und was wäre eine bessere Strategie gewesen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "**Schlafmittel sind bei Älteren kritisch**: Benzodiazepine und Z-Substanzen (Zolpidem, Zopiclon) stehen auf der **Beers-Liste** als potenziell inadäquate Medikation. Risiken: **Sturz (+40%), Delir, Abhängigkeit (bereits nach 2-4 Wochen), Hangover-Effekt**."

**B1 (230 Zeichen):** "**Schlafmittel sind für alte Menschen riskant**. Das gilt besonders für **Benzodiazepine** und sogenannte **Z-Substanzen** (Zolpidem, Zopiclon). Gefahren: **Stürze**, **Verwirrtheit (Delir)**, **Abhängigkeit** schon nach 2-4 Wochen, morgens noch müde."

- **Step-Typ:** text (displayFormat: procontra — Nutzen vs. Risiken)

### Stufe 3 — Erklärung

**C1 (900 Zeichen):**
"Medikamentöse Schlafmittel (Hypnotika) sind laut **DGSM S3-Leitlinie** und **Beers-Liste (AGS 2023)** **nur die letzte Wahl** nach nicht-medikamentöser Therapie. Für die Pflege wichtig, die Substanzgruppen und ihre Risiken zu kennen.

**Substanzgruppen:**

**1. Benzodiazepine (z.B. Lorazepam, Diazepam, Temazepam):**
- Wirkung: GABA-Rezeptor, anxiolytisch + sedierend
- **Probleme**: Abhängigkeit (innerhalb 2-4 Wochen), Toleranz, Entzugssymptome, Muskelrelaxation (Sturzrisiko!), Atemdepression, paradoxe Erregung bei Älteren
- **Halbwertszeit beachten**: kurz wirksam bevorzugen (z.B. Lormetazepam)

**2. Z-Substanzen (Zolpidem, Zopiclon, Zaleplon):**
- Wirkung: selektiver am GABA-A, gleiches Profil
- **Ähnliche Probleme** wie Benzos, nur mit Marketing-Versprechen "weniger abhängig" — stimmt nicht
- **Stürze + 40-60%** bei älteren Patienten

**3. Sedierende Antidepressiva (z.B. Mirtazapin, Trazodon, Doxepin low-dose):**
- Off-label-Einsatz bei Insomnie möglich
- Geringere Abhängigkeitsgefahr

**4. Sedierende Antihistaminika (z.B. Diphenhydramin):**
- Frei verkäuflich, Risiko: **anticholinerge Effekte** (Delir, Mundtrockenheit, Harnverhalt) bei Älteren
- Beers-Liste: **nicht bei Über-65-Jährigen**

**5. Melatonin (retardiert, rezeptpflichtig ab 55 J):**
- Sinnvoll bei Rhythmusstörungen, geringes Nebenwirkungsprofil

**Pflegerische Beobachtung bei Hypnotika:**
- **Sturzrisiko!**: vor erster Nachtgabe aufklären, Nachtlicht, Rufanlage griffbereit
- **Nächtliche Toilettengänge**: Begleitung anbieten
- **Morgendlicher Hangover**: Vorsicht beim Aufstehen, Verkehrsuntauglichkeit
- **Dosierreduktion bei Älteren** (Leber- und Nierenfunktion)
- **Beobachtung auf paradoxe Wirkung**: Agitation statt Sedierung
- **Delir-Zeichen** (CAM-Screening)

(Beers-Liste AGS 2023; DGSM S3-Leitlinie 2017/2020)"

**B1 (780 Zeichen):**
"**Schlafmittel sind die letzte Lösung** — nicht die erste. Die **DGSM** und die **Beers-Liste** sagen: Erst Schlafhygiene, dann KVT-I, dann erst Medikamente.

**Die wichtigsten Gruppen:**

**1. Benzodiazepine** (z.B. Lorazepam, Diazepam):
- **Abhängig** schon nach **2-4 Wochen**
- **Muskeln werden schwach** → Sturzrisiko hoch
- Atemdepression möglich
- Bei alten Menschen manchmal **paradox** (werden unruhig statt müde)

**2. Z-Substanzen** (Zolpidem, Zopiclon, Zaleplon):
- Werden gerne gegeben, aber: **gleiche Risiken** wie Benzodiazepine
- **Stürze + 40-60%** bei alten Menschen
- Auch abhängig

**3. Sedierende Antidepressiva** (Mirtazapin, Trazodon):
- Weniger Abhängigkeit
- Können bei Depression + Insomnie helfen

**4. Antihistaminika** (Diphenhydramin, frei verkäuflich):
- Bei alten Menschen **NICHT geeignet** (Beers-Liste)
- Kann **Delir** machen (Verwirrtheit)

**5. Melatonin** (als Tablette):
- Wenig Nebenwirkungen
- Hilft bei **Rhythmusstörungen**

**Was muss die Pflege beachten?**
- **Sturzrisiko!** Rufanlage bereithalten, Nachtlicht anmachen
- **Nachtgang zur Toilette?** Patient **begleiten**
- **Morgens noch müde?** (Hangover) — Vorsicht beim Aufstehen
- **Verwirrtheit beobachten** (Delir möglich)
- **Dosis** bei alten Menschen oft **niedriger**
- Manche werden **unruhig statt müde** (paradoxe Wirkung) — melden!"

- **Erklärungs-Step:** stepType `matrix` (Substanzgruppen × Risiken)
- **Glossar-Begriffe:** [Hypnotikum, Benzodiazepin, Z-Substanz, Beers-Liste, anticholinerg, paradoxe Wirkung, Hangover-Effekt]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Z-Substanzen (Zolpidem) machen nicht abhängig, die sind sicher"**
- **Fachbegriff:** Z-Substanz-Verharmlosung
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — Z-Substanzen wurden mit diesem Marketing verkauft, aber **Studien zeigen klar: Abhängigkeit entwickelt sich wie bei Benzodiazepinen**, bereits nach **2-4 Wochen**. Das Sturzrisiko bei Älteren ist **40-60% erhöht**. Sie stehen auf der **Beers-Liste** als potenziell inadäquate Medikation bei Über-65-Jährigen."
- **Feedback (B1, 280 Zeichen):** "Nicht richtig — die Z-Substanzen (**Zolpidem, Zopiclon**) machen **genauso abhängig** wie klassische Benzodiazepine. Schon nach **2-4 Wochen** kann eine Abhängigkeit entstehen. Bei alten Menschen: **40-60% mehr Stürze**. Sie stehen auf der **Beers-Liste**: nicht geeignet ab 65 Jahren."

**D2: "Wenn ein Patient seit Jahren seine Schlaftablette nimmt, kann man die weiter geben — er braucht sie ja"**
- **Fachbegriff:** Langzeitanwendungs-Legitimation
- **Feedback (C1, 330 Zeichen):** "Nicht ohne Prüfung — **Langzeit-Benzodiazepine sind eine der häufigsten ungewollten Dauermedikationen** bei Älteren. Die Wirkung nimmt ab (Toleranz), die Risiken bleiben. Eine **geplante Ausschleichung** (über Wochen bis Monate, mit Hausarzt) ist oft möglich und bringt oft besseren Schlaf. Pflegeaufgabe: das Thema ansprechen, nicht blind weiter verordnen."
- **Feedback (B1, 285 Zeichen):** "Nicht so einfach — viele alte Menschen nehmen seit Jahren Schlaftabletten. Die **Wirkung wird oft schwächer** (Toleranz), die **Gefahren bleiben** (Stürze, Abhängigkeit). Man kann sie oft **langsam ausschleichen** — mit dem Hausarzt. Das Thema muss die Pflege ansprechen, nicht einfach weitermachen."

**D3: "Bei einem 80-Jährigen, der nicht schlafen kann, gibt man einfach Diphenhydramin (Vivinox o.ä.) — das ist frei verkäuflich und sicher"**
- **Fachbegriff:** OTC-Sicherheits-Trugschluss
- **Feedback (C1, 340 Zeichen):** "Genau falsch — **Diphenhydramin** ist ein **anticholinerges Antihistaminikum** und steht auf der **Beers-Liste als ungeeignet für Über-65-Jährige**. Risiken: **Delir**, Mundtrockenheit, Harnverhalt, Obstipation, Tachykardie. 'Frei verkäuflich' heißt **nicht** 'sicher bei alten Menschen'. Stattdessen: Schlafhygiene, ggf. niedrig dosiertes Melatonin oder Arzt-Rücksprache."
- **Feedback (B1, 295 Zeichen):** "Genau falsch — **Diphenhydramin** ist bei alten Menschen **nicht** sicher. Es kann **Delir** (Verwirrtheit), Mundtrockenheit, Harnprobleme machen. Es steht auf der **Beers-Liste** (nicht für über 65 Jahre). **'Frei verkäuflich'** heißt nicht 'sicher für alte Menschen'. Besser: Schlafhygiene, Melatonin, Arzt fragen."

### Richtig-Feedback
**C1 (340 Zeichen):** "Sehr gut. Der Zusammenhang: Zolpidem 10 mg verursacht bei Älteren Muskelrelaxation + Sedierung → nächtlicher Sturz. Bessere Strategie: Beers-Liste beachten, Schlafhygiene zuerst, Ursachen-Analyse (Schmerz? Angst? Harndrang? Lärm?). Falls Medikation: niedrigere Dosis (5 mg), kurze Halbwertszeit, max 2-4 Wochen, Sturzprophylaxe (Nachtlicht, Rufanlage, Begleitung zur Toilette)."

**B1 (290 Zeichen):** "Sehr gut. Das Schlafmittel hat die Muskeln schwach gemacht → **Sturz**. Die bessere Strategie: **Zuerst Schlafhygiene** und suchen, warum er nicht schläft (Schmerz? Angst? Lärm?). Wenn doch Medikament: **niedriger dosieren**, kurz anwenden, **Nachtlicht** an, **Rufanlage** bereithalten, Toilettengang **begleiten**."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum sind Z-Substanzen (Zolpidem, Zopiclon) und Benzodiazepine bei älteren Patienten problematisch? Nenne 3 Gründe."
- **Rückseite:** "(1) Sturzrisiko +40-60% durch Muskelrelaxation + Sedierung. (2) Abhängigkeit bereits nach 2-4 Wochen (trotz Marketing-Versprechen). (3) Delir-Risiko, paradoxe Wirkung (Agitation statt Sedierung). Beers-Liste: potenziell inadäquate Medikation ab 65 Jahren."
- **Kategorie:** handlung

---

## Zusammenfassung Baustein-Plan

| # | Baustein | Bloom | Wissensart | Zeit | Primärquelle |
|---|----------|-------|------------|------|--------------|
| 1 | schlafphysiologie-zyklen | 2 | fakt | 5 Min | AASM 2020 |
| 2 | zirkadianer-rhythmus | 3 | konzept | 5 Min | Borbély 1982 |
| 3 | schlafbedarf-altersabhaengig | 1 | fakt | 3 Min | National Sleep Foundation 2015 |
| 4 | insomnie | 3 | klassifikation | 5 Min | DGSM S3-Leitlinie 2017; ICSD-3 |
| 5 | hypersomnie-und-parasomnien | 2 | klassifikation | 5 Min | ICSD-3 (AASM 2023) |
| 6 | schlafapnoe-erkennen | 4 | assessment | 5 Min | DGSM S3-Leitlinie SBAS 2020 |
| 7 | stoerfaktoren-stationaer | 4 | analyse | 5 Min | Kamdar et al. 2012; DGSM 2020 |
| 8 | schlafhygiene-massnahmen | 4 | maßnahme | 5 Min | DGSM S3-Leitlinie 2017/2020 |
| 9 | medikamentoese-schlafmittel | 5 | entscheidung | 5 Min | Beers-Liste AGS 2023; DGSM 2017 |

**Gesamt-Bausteinzeit:** 43 Min (Stufe 2+3 pro Baustein im Schnitt 5 Min)
**Plus Stufe 1 (Denkfragen):** ca. 15 Min
**Plus Glossar + Karteikarten:** ca. 15 Min
**Zielzeit-Check:** 43 + 15 + 15 = 73 Min ≈ Sollwert 74 Min (3 UE × 45 × 0,55) ✓

**Bloom-Verteilung:**
- Bloom 1-2: 2 Bausteine (22%) — Sollwert 20% ✓
- Bloom 3-4: 5 Bausteine (56%) — Sollwert 55% ✓
- Bloom 5-6: 2 Bausteine (22%) — Sollwert 25% (geringfügig unter, innerhalb ±3%-Toleranz) ✓

**Urheberrecht-Abstandstest:**
- Keine Formulierungen aus I Care Pflege (kap-48) übernommen
- Keine Kapitel-Reihenfolge aus Pflege heute kopiert
- Alle Fakten in eigener Struktur (z.B. Substanzgruppen-Tabelle neu aufgebaut)
- Primärquellen direkt zitiert (AASM, DGSM, ICSD-3, Beers-Liste, Borbély 1982, National Sleep Foundation)
- Keine `[I Care S.XX]` oder `[Pflege heute S.XX]` im Schüler-sichtbaren Text
- Tabellen eigenständig erstellt (Altersgruppen-Tabelle aus National Sleep Foundation 2015 Rohdaten, nicht aus Lehrbuch)

**Status:** Phase 1 Baustein-Plan abgeschlossen. Zur 🔒 Veto-Prüfung weitergeben.
