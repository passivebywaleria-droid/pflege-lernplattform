# Wissensbausteine: Haut — Anatomie, Beobachtung, Pflege

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `haut` |
| ceId | `ce-02` |
| cluster | C (Körperpflege & Hautschutz) |
| wissensart | handlung |
| kompetenzbereich | I.1 |
| geschaetzteUE | 12 |
| zielzeitMin | 297 (12 UE × 45 × 0,55) |
| bausteineAnzahl | 22 |
| voraussetzungen | — |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 5 (23%), Bloom 3-4: 12 (55%), Bloom 5-6: 5 (23%)

**Primärquellen:**
- Celsus, De Medicina (~30 n.Chr.) — 4 klassische Entzündungszeichen
- Galen (~200 n.Chr.) — 5. Entzündungszeichen Functio laesa
- Marchini (1902) — Entdeckung des Säureschutzmantels
- AWMF S1-Leitlinie Intertrigo (DDG, 2022)
- DGG (Deutsche Gesellschaft für Geriatrie) — Altershaut-Empfehlungen
- WHO (2020): Skin Health in Neonates
- Leitlinie IAD-Prävention (International Consensus, Beeckman 2015)
- Schaefer/Redelmeier (Skin Barrier, 1996)

---

## Baustein 1: haut-funktionen

### Metadaten
- **bausteinId:** haut-funktionen
- **bloomLevel:** 1
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Was würde passieren, wenn du keine Haut hättest? Nenne drei Dinge, die dann nicht mehr funktionieren würden."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (215 Zeichen):** "Die Haut hat fünf Kernaufgaben: Schutz (mechanisch, chemisch, vor UV und Keimen), Temperaturregulation, Sinneswahrnehmung, Stoffwechsel (Vitamin-D-Bildung) und Kommunikation (Erröten, Blässe, Schwitzen)."

**B1 (200 Zeichen):** "Die Haut hat fünf wichtige Aufgaben: Sie schützt dich vor Verletzungen und Keimen. Sie hält die Körper-Temperatur. Sie lässt dich fühlen. Sie macht Vitamin D. Sie zeigt Gefühle — zum Beispiel beim Erröten."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (620 Zeichen):**
"Die Haut ist mit 1,5 bis 2 m² das größte Organ des Körpers und übernimmt fünf wesentliche Aufgaben: Sie bildet eine **Schutzbarriere** gegen mechanische Reize, Chemikalien, UV-Strahlung und Mikroorganismen. Über Schweißbildung und Durchblutungsregulation sichert sie die **Temperaturregulation** — der Mensch hält so seine Kerntemperatur um 37 °C. Als **Sinnesorgan** nimmt sie Berührung, Druck, Temperatur und Schmerz wahr — über Millionen Rezeptoren. Im **Stoffwechsel** bildet sie unter UV-Licht Vitamin D und speichert Wasser sowie Fett. Schließlich dient sie der **sozialen Kommunikation**: Blässe, Röte, Schwitzen und Gänsehaut zeigen innere Zustände nach außen."

**B1 (510 Zeichen):**
"Die Haut ist das größte Organ. Sie ist 1,5 bis 2 Quadratmeter groß. Sie hat fünf Aufgaben:
1. **Schutz:** Sie schützt vor Verletzungen, Keimen, Sonne und Chemie.
2. **Temperatur:** Sie hält den Körper warm oder kühlt ihn durch Schwitzen.
3. **Fühlen:** Sie spürt Berührung, Druck, Wärme, Kälte und Schmerz.
4. **Stoffwechsel:** Sie macht mit Sonnenlicht Vitamin D. Sie speichert Wasser und Fett.
5. **Zeigen:** Sie zeigt deine Gefühle — zum Beispiel wenn du rot wirst oder blass."

- **Erklärungs-Step:** stepType `reveal` (5 Funktionen aufdecken)
- **Glossar-Begriffe:** [Epidermis, Barriere, Rezeptor]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Haut ist nur eine Schutzhülle"**
- **Fachbegriff:** Hüllen-Irrtum
- **Feedback (C1, 215 Zeichen):** "Nicht ganz — Schutz ist nur eine von fünf Aufgaben. Die Haut reguliert auch Temperatur, nimmt Reize wahr, bildet Vitamin D und zeigt soziale Signale. Merke: Haut ist ein **aktives Organ**, keine Plastiktüte."
- **Feedback (B1, 190 Zeichen):** "Nicht ganz — Schutz ist nur eine Aufgabe. Die Haut macht noch vier andere Dinge: Temperatur halten, fühlen, Vitamin D bilden und Gefühle zeigen. Merke: Haut ist ein Organ, das arbeitet."

**D2: "Die Haut atmet"**
- **Fachbegriff:** Hautatmungs-Mythos
- **Feedback (C1, 225 Zeichen):** "Nein — menschliche Haut atmet nicht im Sinne von Gasaustausch. Nur Frösche und Amphibien atmen über die Haut. Der Mensch bekommt Sauerstoff ausschließlich über die Lunge. Merke: 'Haut atmen' ist ein Alltagsmythos."
- **Feedback (B1, 195 Zeichen):** "Nein — die menschliche Haut atmet nicht. Nur Frösche atmen über die Haut. Der Mensch bekommt Sauerstoff nur über die Lunge. Merke: 'Haut atmen' sagt man umgangssprachlich, aber es stimmt nicht."

**D3: "Die Haut bildet Vitamin C"**
- **Fachbegriff:** Vitamin-Verwechslung
- **Feedback (C1, 215 Zeichen):** "Nein — die Haut bildet unter UV-Licht **Vitamin D**, nicht Vitamin C. Vitamin C kommt aus der Nahrung (Obst, Gemüse). Merke: Haut + Sonne = Vitamin D. Vitamin C ist ein Nahrungsvitamin."
- **Feedback (B1, 180 Zeichen):** "Nein — die Haut macht mit Sonnenlicht **Vitamin D**. Vitamin C kommt aus Obst und Gemüse. Merke: Sonne auf der Haut = Vitamin D. Vitamin C = Essen."

### Richtig-Feedback

**C1 (220 Zeichen):** "Sehr gut. Die Haut ist multifunktional: Schutz, Temperaturregulation, Sinneswahrnehmung, Stoffwechsel und Kommunikation. Als größtes Organ (1,5–2 m²) spürst du, warum Hautbeobachtung in der Pflege so wichtig ist."

**B1 (200 Zeichen):** "Sehr gut. Die Haut macht viele Dinge: Schutz, Temperatur, Fühlen, Vitamin D und Gefühle zeigen. Sie ist das größte Organ. Darum schaust du dir die Haut der Patienten in der Pflege immer genau an."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 5 Hauptfunktionen der Haut."
- **Rückseite:** "Schutz — Temperaturregulation — Sinneswahrnehmung — Stoffwechsel (Vitamin D) — Kommunikation."
- **Kategorie:** fakt

---

## Baustein 2: hautschichten-3

### Metadaten
- **bausteinId:** haut-schichten-3
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn du dir in den Finger schneidest — welche Schichten durchtrennst du? Zähle sie in der Reihenfolge von außen nach innen auf."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (220 Zeichen):** "Die Haut besteht aus drei Schichten: **Epidermis** (Oberhaut, gefäßfrei, Hornschicht), **Dermis** (Lederhaut, Bindegewebe, Nerven und Gefäße) und **Subcutis** (Unterhaut, Fettgewebe, Polster und Energiespeicher)."

**B1 (200 Zeichen):** "Die Haut hat drei Schichten. Von oben nach unten:
1. **Epidermis** — die Oberhaut.
2. **Dermis** — die Lederhaut mit Nerven und Blutgefäßen.
3. **Subcutis** — die Unterhaut mit Fett."

- **Step-Typ:** labelImage (3 Schichten im Querschnitt beschriften)

### Stufe 3 — Erklärung

**C1 (640 Zeichen):**
"Die Haut ist in drei Schichten gegliedert, die unterschiedliche Funktionen übernehmen:

**Epidermis (Oberhaut):** Dünnste Schicht, komplett gefäßfrei. Sie wird über Diffusion aus der Dermis versorgt. Bildet die äußere Barriere mit der Hornschicht.

**Dermis (Lederhaut, auch Corium):** Besteht aus straffem Bindegewebe mit Kollagen- und elastischen Fasern. Hier liegen die Blutgefäße, Nerven, Tastkörperchen, Haarfollikel, Talg- und Schweißdrüsen. Verantwortlich für Festigkeit und Elastizität.

**Subcutis (Unterhaut):** Enthält vor allem Fettgewebe — als Baufett (Polster, z.B. Fußsohle) und Depotfett (Energiespeicher). Zusätzlich liegen hier Vater-Pacini-Körperchen (Vibrationsrezeptoren) und größere Gefäße."

**B1 (545 Zeichen):**
"Die Haut hat drei Schichten. Von außen nach innen:

**1. Epidermis** (Oberhaut): Ganz außen. Sehr dünn. Sie hat keine Blutgefäße. Sie bekommt Nährstoffe von der Schicht darunter.

**2. Dermis** (Lederhaut): In der Mitte. Sie ist stark und elastisch. Hier sind Blutgefäße, Nerven, Tast-Zellen, Haare und Drüsen.

**3. Subcutis** (Unterhaut): Ganz unten. Hier liegt Fett. Das Fett polstert (zum Beispiel unter der Fußsohle) und speichert Energie. Hier sind auch Zellen, die Vibration fühlen."

- **Erklärungs-Step:** stepType `labelImage` (Querschnitt mit 3 Schichten)
- **Glossar-Begriffe:** [Epidermis, Dermis, Subcutis, Corium, Bindegewebe]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Haut besteht nur aus zwei Schichten"**
- **Fachbegriff:** Zweischicht-Irrtum
- **Feedback (C1, 220 Zeichen):** "Nicht ganz — die Haut hat **drei** Schichten: Epidermis, Dermis und Subcutis. Oft wird die Subcutis im Alltag vergessen, weil sie 'nur Fett' ist — aber sie polstert, speichert Energie und enthält Rezeptoren. Merke: 3 Schichten."
- **Feedback (B1, 190 Zeichen):** "Nicht ganz — die Haut hat **drei** Schichten: Epidermis, Dermis und Subcutis. Viele vergessen die Subcutis, weil sie Fett ist. Aber das Fett ist wichtig: Es polstert und speichert Energie. Merke: 3 Schichten."

**D2: "Blutgefäße liegen in der Epidermis"**
- **Fachbegriff:** Gefäß-Lokalisations-Fehler
- **Feedback (C1, 240 Zeichen):** "Nein — die Epidermis ist **gefäßfrei**. Sie wird durch Diffusion aus der Dermis mitversorgt. Erst in der Dermis liegen Blutgefäße, Nerven und Drüsen. Merke: Wenn du eine blutige Wunde siehst, ist mindestens die Dermis betroffen."
- **Feedback (B1, 205 Zeichen):** "Nein — in der Epidermis sind **keine** Blutgefäße. Die Blutgefäße liegen erst in der Dermis. Merke: Wenn eine Wunde blutet, ist die Epidermis schon durchtrennt und die Dermis betroffen."

**D3: "Die Subcutis ist die oberste Hautschicht"**
- **Fachbegriff:** Schichten-Reihenfolge-Fehler
- **Feedback (C1, 210 Zeichen):** "Nein — die Subcutis liegt **ganz unten**, direkt über Muskeln und Faszien. Ganz oben (außen) liegt die Epidermis. Merke: Reihenfolge von außen nach innen: Epidermis → Dermis → Subcutis. 'Sub' heißt 'unter'."
- **Feedback (B1, 190 Zeichen):** "Nein — die Subcutis ist ganz **unten**. Ganz oben (außen) ist die Epidermis. Die Reihenfolge von außen nach innen: Epidermis → Dermis → Subcutis. Merke: 'Sub' heißt 'unter'."

### Richtig-Feedback

**C1 (225 Zeichen):** "Genau. Epidermis außen (Hornschicht, gefäßfrei), Dermis in der Mitte (Gefäße, Nerven, Drüsen), Subcutis unten (Fettgewebe). Das ist wichtig zu wissen: Beim Fingertest bei Dekubitus-Verdacht beurteilst du die Durchblutung der Dermis."

**B1 (215 Zeichen):** "Genau. Von außen nach innen: Epidermis — Dermis — Subcutis. Wichtig: In der Dermis sind die Blutgefäße. Darum blutet jede Wunde, die tiefer als die Epidermis geht. Das hilft dir auch bei der Beurteilung von Dekubitus."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die drei Hautschichten von außen nach innen."
- **Rückseite:** "Epidermis (Oberhaut) — Dermis (Lederhaut) — Subcutis (Unterhaut)."
- **Kategorie:** fachbegriff

---

## Baustein 3: epidermis-5-schichten

### Metadaten
- **bausteinId:** haut-epidermis-5-schichten
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Die obersten Hautzellen sind tot. Sie fallen ständig ab. Wo werden neue Zellen gebildet — oben oder unten? Und wie kommen sie nach oben?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Die Epidermis besteht aus fünf Schichten (von unten nach oben): **Stratum basale** (Zellteilung), **Stratum spinosum** (Stachelzellen), **Stratum granulosum** (Körnerzellen), **Stratum lucidum** (nur Hand/Fuß) und **Stratum corneum** (Hornschicht)."

**B1 (235 Zeichen):** "Die Epidermis hat **5 Schichten**. Von unten nach oben:
1. Stratum basale — hier entstehen neue Zellen
2. Stratum spinosum
3. Stratum granulosum
4. Stratum lucidum (nur an Hand und Fuß)
5. Stratum corneum — die Hornschicht außen."

- **Step-Typ:** sorting (5 Schichten in richtige Reihenfolge bringen)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die Epidermis ist aus **fünf Schichten** aufgebaut, in denen Keratinozyten von unten nach oben wandern und dabei verhornen:

**1. Stratum basale (Basalzellschicht):** Einzellige Schicht direkt auf der Basalmembran. Hier teilen sich die Keratinozyten durch Mitose. Auch Melanozyten (Melanin-Bildung) und Merkel-Zellen (Tastsinn) liegen hier.

**2. Stratum spinosum (Stachelzellschicht):** Zellen verbinden sich über Desmosomen — unter dem Mikroskop sichtbar als 'Stacheln'. Mechanisch stabil.

**3. Stratum granulosum (Körnerschicht):** Zellen enthalten Keratohyalin-Körnchen, die den Verhornungsprozess starten.

**4. Stratum lucidum (Glanzschicht):** Nur in der Leistenhaut (Handfläche, Fußsohle). Zone des Zelltods.

**5. Stratum corneum (Hornschicht):** 15–25 Zelllagen tote Korneozyten mit Fettzement dazwischen — die eigentliche Hautbarriere. Zellen schilfern oben ab (ca. 28 Tage Gesamtzyklus)."

**B1 (570 Zeichen):**
"Die Epidermis hat **5 Schichten**. Die Zellen wandern von unten nach oben — das dauert etwa **28 Tage**.

**1. Stratum basale (unten):** Hier entstehen neue Zellen durch Teilung. Hier sind auch die Zellen für Farbe (Melanozyten) und für Tasten (Merkel-Zellen).

**2. Stratum spinosum:** Die Zellen hängen fest zusammen wie Stacheln.

**3. Stratum granulosum:** Die Zellen fangen an, Horn zu bilden.

**4. Stratum lucidum:** Nur an Hand und Fußsohle. Die Zellen sterben.

**5. Stratum corneum (oben):** Tote Zellen wie Ziegelsteine mit Fett als Mörtel. Diese Schicht ist deine Schutzschicht. Nach 28 Tagen fällt sie ab."

- **Erklärungs-Step:** stepType `reveal` (5 Schichten aufdecken, von unten nach oben)
- **Glossar-Begriffe:** [Keratinozyt, Melanozyt, Merkel-Zelle, Basalmembran, Korneozyt]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Das Stratum lucidum gibt es überall am Körper"**
- **Fachbegriff:** Lucidum-Verallgemeinerung
- **Feedback (C1, 230 Zeichen):** "Nicht ganz — das Stratum lucidum existiert **nur in der Leistenhaut**: Handflächen und Fußsohlen. Dort ist die Haut dicker, weil sie mechanisch stark belastet wird. An Armen oder Rücken gibt es nur 4 Schichten. Merke: Lucidum = Hand/Fuß."
- **Feedback (B1, 195 Zeichen):** "Nicht ganz — das Stratum lucidum gibt es nur an **Hand und Fuß**. Dort ist die Haut dicker. An Armen oder Bauch gibt es nur 4 Schichten. Merke: Lucidum = nur Hand und Fußsohle."

**D2: "Neue Hautzellen entstehen oben und wandern nach unten"**
- **Fachbegriff:** Wanderungs-Umkehr
- **Feedback (C1, 235 Zeichen):** "Genau andersrum — neue Zellen entstehen **unten** im Stratum basale und wandern **nach oben**. Oben verhornen sie und fallen ab. Darum heißt die Basalschicht so: Sie ist die 'Basis'. Merke: Hautzellen = Rolltreppe nach oben."
- **Feedback (B1, 210 Zeichen):** "Genau andersrum — neue Zellen entstehen **unten** im Stratum basale. Sie wandern nach **oben**. Oben fallen sie ab. Merke: Haut-Zellen wandern wie auf einer Rolltreppe von unten nach oben."

**D3: "Die Hornschicht ist aus lebenden Zellen"**
- **Fachbegriff:** Lebendhorn-Irrtum
- **Feedback (C1, 220 Zeichen):** "Nein — die Hornschicht (Stratum corneum) besteht aus **toten Zellen**, den Korneozyten. Sie bilden mit Fetten dazwischen die Barriere. Genau weil sie tot sind, spürst du es nicht, wenn du dir Hornhaut abfeilst."
- **Feedback (B1, 185 Zeichen):** "Nein — die Hornschicht oben besteht aus **toten Zellen**. Sie schützen dich wie eine Rüstung. Darum tut es nicht weh, wenn du Hornhaut an der Ferse abfeilst. Merke: Oben = tot."

### Richtig-Feedback

**C1 (245 Zeichen):** "Sehr gut. Die 5 Schichten von unten nach oben: basale, spinosum, granulosum, lucidum (nur Leistenhaut), corneum. Der 28-Tage-Zyklus der Keratinozyten erklärt, warum Hautpflege Zeit braucht — bis neue Zellen oben ankommen, vergeht fast ein Monat."

**B1 (215 Zeichen):** "Sehr gut. Die 5 Schichten von unten nach oben: basale, spinosum, granulosum, lucidum (nur Hand/Fuß), corneum. Eine Hautzelle braucht **28 Tage** von unten bis oben. Darum wirkt Hautpflege erst nach einiger Zeit."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 5 Schichten der Epidermis von unten nach oben."
- **Rückseite:** "Basale → spinosum → granulosum → lucidum (nur Leistenhaut) → corneum. Zyklus ca. 28 Tage."
- **Kategorie:** fachbegriff

---

## Baustein 4: hautanhangsgebilde

### Metadaten
- **bausteinId:** haut-anhangsgebilde
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Was alles gehört eigentlich noch zur Haut dazu — außer der Haut selbst? Denke an alles, was aus der Haut wächst oder in ihr steckt."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (220 Zeichen):** "Hautanhangsgebilde sind: **Haare** (aus Haarfollikeln), **Nägel** (aus Nagelmatrix), **Talgdrüsen** (Sebum, ölig), **Schweißdrüsen** (ekkrine — Wasser, apokrine — Geruch). Sie entstehen embryonal aus der Epidermis."

**B1 (200 Zeichen):** "Zur Haut gehören dazu:
1. Haare — wachsen aus Haarwurzeln
2. Nägel — wachsen aus der Nagelwurzel
3. Talgdrüsen — machen Öl
4. Schweißdrüsen — machen Schweiß (Wasser und Geruch)"

- **Step-Typ:** matching (Anhangsgebilde → Funktion zuordnen)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Hautanhangsgebilde entstehen embryonal aus der Epidermis, liegen aber in der Dermis oder tiefer:

**Haare:** Wachsen aus Haarfollikeln in der Dermis. Jeder Haarfollikel hat eine Talgdrüse und einen kleinen Aufrichtermuskel (Musculus arrector pili — Gänsehaut). Haarwachstum in Zyklen (Anagen, Katagen, Telogen).

**Nägel:** Hornplatten aus abgestorbenen Keratinozyten. Wachsen aus der Nagelmatrix. Fingernagel wächst ca. 3 mm/Monat, Zehennagel ca. 1,5 mm/Monat.

**Talgdrüsen (Glandulae sebaceae):** Münden in Haarfollikel (holokrine Sekretion — ganze Zelle wird zu Sebum). Sebum + Schweiß bilden den Hydrolipidfilm.

**Schweißdrüsen:** Zwei Typen:
- **Ekkrin** (am ganzen Körper, 2–4 Mio.): Wasser + Salz, Temperaturregulation
- **Apokrin** (Achsel, Genital): Duftstoffe, aktiv ab Pubertät"

**B1 (555 Zeichen):**
"Zur Haut gehören 4 Dinge dazu. Sie entstehen aus der Haut, liegen aber tiefer:

**1. Haare:** Wachsen aus der Haarwurzel. An jedem Haar hängt eine kleine Öldrüse und ein kleiner Muskel (Gänsehaut-Muskel).

**2. Nägel:** Sind aus Horn, also toten Zellen. Wachsen aus der Nagelwurzel. Fingernagel: **3 mm pro Monat**. Zehennagel: **1,5 mm pro Monat**.

**3. Talgdrüsen (Öldrüsen):** Machen Fett (Sebum). Das Fett pflegt die Haut und die Haare.

**4. Schweißdrüsen:** Zwei Arten:
- **Ekkrin** — überall am Körper. Machen Wasser-Schweiß zum Kühlen.
- **Apokrin** — unter den Armen und im Genital-Bereich. Machen Duft-Schweiß ab der Pubertät."

- **Erklärungs-Step:** stepType `comparison` (Tabelle: 4 Anhangsgebilde × Funktion × Lage)
- **Glossar-Begriffe:** [Haarfollikel, Nagelmatrix, Sebum, ekkrin, apokrin, Hydrolipidfilm]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Alle Schweißdrüsen machen den Körpergeruch"**
- **Fachbegriff:** Schweiß-Generalisierung
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — nur die **apokrinen** Schweißdrüsen (Achsel, Genitalbereich) produzieren Duftstoffe. Die **ekkrinen** Drüsen überall am Körper machen geruchsneutralen Wasser-Schweiß. Der typische Geruch entsteht erst, wenn Hautbakterien apokrinen Schweiß zersetzen."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — nur die **apokrinen** Drüsen in der Achsel und im Genital-Bereich riechen. Die **ekkrinen** Drüsen am ganzen Körper machen Schweiß ohne Geruch. Der Geruch entsteht, weil Bakterien den Schweiß zersetzen."

**D2: "Nägel sind lebendiges Gewebe"**
- **Fachbegriff:** Lebendnagel-Irrtum
- **Feedback (C1, 220 Zeichen):** "Nein — die sichtbare Nagelplatte besteht aus **toten**, verhornten Zellen. Lebendig ist nur die Nagelmatrix unter der Nagelhaut. Darum tut Nägelschneiden nicht weh — aber Abreißen in der Matrix schon. Merke: Platte = tot, Matrix = lebt."
- **Feedback (B1, 190 Zeichen):** "Nein — der Nagel, den du siehst, ist **tot**. Darum tut Nagelschneiden nicht weh. Lebendig ist nur die Nagelwurzel unter der Haut. Merke: Nagel-Platte = tot. Nagel-Wurzel = lebt."

**D3: "Haare wachsen aus der Epidermis"**
- **Fachbegriff:** Haarwurzel-Lokalisation
- **Feedback (C1, 215 Zeichen):** "Nicht ganz — die Haarwurzel (Follikel) reicht bis in die **Dermis** oder sogar Subcutis hinein. Nur der sichtbare Schaft ragt aus der Epidermis heraus. Darum blutet es oft, wenn ein Haar mit Wurzel ausgerissen wird."
- **Feedback (B1, 180 Zeichen):** "Nicht ganz — die Haarwurzel liegt tief in der **Dermis**. Nur das Haar, das du siehst, kommt oben raus. Darum blutet es manchmal, wenn du ein Haar mit Wurzel rausreißt."

### Richtig-Feedback

**C1 (225 Zeichen):** "Sehr gut. Haare, Nägel, Talg- und Schweißdrüsen sind die 4 Hautanhangsgebilde. Für die Pflege wichtig: Sebum + Schweiß bilden den Hydrolipidfilm — deshalb zerstört zu häufiges Waschen mit Seife die natürliche Schutzschicht."

**B1 (210 Zeichen):** "Sehr gut. Zur Haut gehören: Haare, Nägel, Talgdrüsen und Schweißdrüsen. Wichtig für die Pflege: Talg und Schweiß machen zusammen einen Schutz-Film auf der Haut. Zu viel Seife macht diesen Schutz kaputt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 4 Hautanhangsgebilde."
- **Rückseite:** "Haare — Nägel — Talgdrüsen (Sebum) — Schweißdrüsen (ekkrin temperaturreguliert, apokrin Duftstoffe)."
- **Kategorie:** fachbegriff

---

## Baustein 5: hautfarbe-melanin

### Metadaten
- **bausteinId:** haut-farbe-melanin
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Warum wird man braun, wenn man in die Sonne geht? Und warum schützt Bräune die Haut?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (215 Zeichen):** "Die Hautfarbe (Kolorit) wird vor allem durch **Melanin** bestimmt, gebildet in Melanozyten im Stratum basale. Mehr UV-Licht → mehr Melanin → dunklere Haut. Melanin absorbiert UV-Strahlung und schützt die DNA der Zellen."

**B1 (200 Zeichen):** "Die Farbe der Haut kommt von **Melanin**. Melanin ist ein dunkler Farbstoff. Er wird in der untersten Schicht der Epidermis gebildet. Sonne macht mehr Melanin — darum wird die Haut braun. Das schützt vor UV-Strahlen."

- **Step-Typ:** text (displayFormat: analogy — Melanin als Sonnenschirm)

### Stufe 3 — Erklärung

**C1 (610 Zeichen):**
"Die Hautfarbe (Kolorit) wird durch drei Pigmente bestimmt: **Melanin** (braun/schwarz), **Hämoglobin** (rot, in den Gefäßen) und **Carotin** (gelb, aus der Nahrung). Die individuelle Farbe hängt hauptsächlich von der Menge an Melanin ab.

**Melanin** wird in Melanozyten im Stratum basale gebildet. Alle Menschen haben **gleich viele Melanozyten** — der Unterschied liegt in der Aktivität: Wie viel Melanin wird produziert, und welcher Typ (Eumelanin = braun/schwarz, Phäomelanin = rot/gelb)?

UV-Strahlung aktiviert die Melaninbildung — die Haut bräunt. Melanin absorbiert UV-Strahlen und schützt so die DNA der tieferliegenden Zellen vor Mutationen. Menschen mit heller Haut haben weniger Eumelanin — daher höheres Hautkrebsrisiko bei UV-Exposition."

**B1 (505 Zeichen):**
"Die Farbe der Haut kommt von drei Stoffen: **Melanin** (braun), **Hämoglobin** (rot, im Blut) und **Carotin** (gelb, aus Essen).

Vor allem **Melanin** bestimmt die Farbe. Es wird in Melanozyten in der untersten Schicht der Epidermis gebildet.

Wichtig: **Jeder Mensch hat gleich viele Melanozyten.** Unterschiedlich ist nur, wie viel Melanin die Zellen machen.

Sonne (UV-Strahlen) macht die Zellen aktiver — du wirst braun. Das Melanin schützt deine Zellen vor der Sonne. Helle Haut hat weniger Schutz. Darum ist Hautkrebs bei heller Haut ein höheres Risiko."

- **Erklärungs-Step:** stepType `reveal` (3 Pigmente + Funktion)
- **Glossar-Begriffe:** [Melanin, Melanozyt, Eumelanin, Phäomelanin, Hämoglobin, Carotin]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Dunkle Haut hat mehr Melanozyten als helle Haut"**
- **Fachbegriff:** Melanozyten-Zählungs-Irrtum
- **Feedback (C1, 235 Zeichen):** "Nicht ganz — **alle Menschen haben gleich viele Melanozyten**. Der Unterschied liegt in der **Aktivität**: dunkle Haut produziert mehr Melanin pro Zelle. Merke: Unterschiedliche Hautfarbe = unterschiedliche Produktion, nicht unterschiedliche Zellzahl."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — alle Menschen haben **gleich viele** Melanozyten. Der Unterschied: Bei dunkler Haut machen die Zellen mehr Melanin. Merke: Gleiche Zellzahl, aber unterschiedliche Produktion."

**D2: "Bräune ist nur kosmetisch und hat keine Funktion"**
- **Fachbegriff:** Bräune-Bagatellisierung
- **Feedback (C1, 230 Zeichen):** "Nicht ganz — die Bräune ist eine **Schutzreaktion**. Mehr Melanin absorbiert UV-Strahlung und schützt die DNA in den Zellen. Ohne diese Reaktion hätten wir viel mehr Sonnenbrand und Hautkrebs. Merke: Bräunung = biologischer Sonnenschutz."
- **Feedback (B1, 195 Zeichen):** "Nicht ganz — Bräune ist ein **Schutz**. Mehr Melanin schützt die Zellen vor den UV-Strahlen. Ohne Bräunung hätten wir viel öfter Sonnenbrand oder sogar Krebs. Merke: Bräune ist biologischer Sonnenschutz."

**D3: "Melanin wird in der Hornschicht gebildet"**
- **Fachbegriff:** Melanin-Lokalisations-Fehler
- **Feedback (C1, 215 Zeichen):** "Nein — Melanin wird im **Stratum basale** gebildet, also ganz **unten** in der Epidermis. Die Melanozyten sitzen dort und geben Pigment an die Keratinozyten weiter. Oben (Hornschicht) sind nur die bereits gefüllten Zellen zu sehen."
- **Feedback (B1, 185 Zeichen):** "Nein — Melanin entsteht **ganz unten** in der Epidermis (Stratum basale). Dort sind die Melanozyten. Oben siehst du nur das Ergebnis. Merke: Melanin-Fabrik = unten, nicht oben."

### Richtig-Feedback

**C1 (225 Zeichen):** "Sehr gut. Melanin aus den Melanozyten im Stratum basale bestimmt die Hautfarbe und schützt vor UV-Strahlen. Wichtig für die Pflege: Hautbeobachtung bei dunkler Haut zeigt Rötungen anders — oft als violette/braune Verfärbung."

**B1 (215 Zeichen):** "Sehr gut. Melanin macht die Hautfarbe und schützt vor der Sonne. Wichtig für die Pflege: Bei dunkler Haut siehst du eine Rötung nicht rot, sondern eher lila oder braun. Darum musst du genauer hinschauen und tasten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wo und von welchen Zellen wird Melanin gebildet?"
- **Rückseite:** "Von Melanozyten im Stratum basale der Epidermis. Alle Menschen haben gleich viele Melanozyten — der Unterschied liegt in der Aktivität."
- **Kategorie:** fakt

---

## Baustein 6: hautbeobachtung-kolorit

### Metadaten
- **bausteinId:** haut-beobachtung-kolorit
- **bloomLevel:** 5
- **wissensart:** assessment
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Du gehst ins Zimmer und siehst einen Patienten. Bevor du ihn ansprichst: Auf welche 4 Hautfarben achtest du — und was könnte jede bedeuten?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Pathologisches Kolorit — 4 Leitbefunde: **Rötung** (Erythem — Entzündung, Fieber, allergische Reaktion), **Blässe** (Anämie, Schock, Kreislaufproblem), **Zyanose** (blau — O2-Mangel, zentral/peripher), **Ikterus** (gelb — Bilirubin, Leber/Galle). Bei dunkler Haut: Handinnenfläche, Schleimhaut, Nagelbett beurteilen."

**B1 (240 Zeichen):** "Es gibt 4 wichtige Hautfarben, die Probleme zeigen:
1. **Rot** (Erythem) → Entzündung, Fieber
2. **Blass** → wenig Blut, Schock
3. **Blau** (Zyanose) → wenig Sauerstoff
4. **Gelb** (Ikterus) → Leber- oder Gallenproblem

Bei dunkler Haut: Schau an Handfläche, Schleimhaut und Nagelbett."

- **Step-Typ:** matching (Farbe ↔ mögliche Ursache)

### Stufe 3 — Erklärung

**C1 (820 Zeichen):**
"Das Hautkolorit ist ein zentraler Pflegebefund. Vier pathologische Muster sind zu unterscheiden:

**Rötung (Erythem):** Gefäße sind erweitert, mehr Blut an der Oberfläche. Ursachen: Fieber, Entzündung, allergische Reaktion, Sonnenbrand, Dekubitus Kategorie I.

**Blässe:** Wenig Hämoglobin oder Minderdurchblutung. Ursachen: Anämie, Schock, peripherer Vasospasmus, Ohnmacht.

**Zyanose:** Bläulich-livide Färbung durch **Sauerstoffmangel** im Blut.
- **Zentrale Zyanose** (Lippen, Zunge, Schleimhäute): Lungen- oder Herzproblem
- **Periphere Zyanose** (Finger, Zehen, Akren): Kältebedingte Minderdurchblutung

**Ikterus:** Gelbliche Verfärbung durch Bilirubin. Sichtbar ab ~2 mg/dl im Serum — zuerst an **Skleren** (Augenweiß), dann Haut. Ursachen: Leberfunktionsstörung, Gallenstau, Hämolyse.

**Dunkle Haut:** Rötung ist schwer zu erkennen — Lokalbefund mit Temperatur, Verhärtung und Vergleich zur Umgebung beurteilen. Blässe, Zyanose und Ikterus am besten an Handinnenflächen, Fußsohlen, Mundschleimhaut, Bindehaut und Nagelbett prüfen."

**B1 (640 Zeichen):**
"Es gibt 4 Hautfarben, die Krankheiten zeigen:

**1. Rot (Erythem):** Die Blutgefäße sind weit, mehr Blut in der Haut. Gründe: Fieber, Entzündung, Allergie, Sonnenbrand, beginnender Dekubitus.

**2. Blass:** Wenig Blut in der Haut. Gründe: Blutarmut, Schock, Ohnmacht.

**3. Blau (Zyanose):** Zu wenig Sauerstoff im Blut.
- **Zentral** (Lippen, Zunge): Lunge oder Herz schwach.
- **Peripher** (Finger, Zehen): Kalt, schlechte Durchblutung.

**4. Gelb (Ikterus):** Gelber Stoff (Bilirubin) in der Haut. Zuerst im Augenweiß, dann in der Haut. Gründe: Leber oder Galle krank.

**Bei dunkler Haut:** Rötung ist schwer zu sehen. Schau an **Handfläche, Fußsohle, Mund-Schleimhaut und Nagel**. Fühle: Ist die Stelle wärmer oder härter als die Umgebung?"

- **Erklärungs-Step:** stepType `comparison` (4-Spalten-Tabelle: Farbe × Mechanismus × Ursachen × Beobachtungsort bei dunkler Haut)
- **Glossar-Begriffe:** [Erythem, Zyanose, Ikterus, Bilirubin, Sklera, Akren, Hämoglobin]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Zyanose bedeutet immer Herzinfarkt"**
- **Fachbegriff:** Zyanose-Verengung
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Zyanose heißt nur '**zu wenig Sauerstoff im Blut**'. Das kann viele Ursachen haben: Lungenerkrankung (zentrale Zyanose), Herzinsuffizienz, aber auch kalte Finger im Winter (periphere Zyanose). Merke: Zyanose ist ein **Symptom**, nicht eine Diagnose. Immer Vitalzeichen und Patient beurteilen."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — Zyanose heißt nur: **zu wenig Sauerstoff**. Das kann viele Gründe haben: Lunge krank, Herz schwach, aber auch nur kalte Hände im Winter. Merke: Zyanose ist ein Zeichen, keine Diagnose. Schau immer auf Atmung, Puls und Patient."

**D2: "Ikterus sieht man zuerst an den Händen"**
- **Fachbegriff:** Ikterus-Beobachtungsort-Fehler
- **Feedback (C1, 230 Zeichen):** "Nicht ganz — Ikterus zeigt sich **zuerst an den Skleren** (Augenweiß), erst später an der Haut. Bilirubin bindet besonders gut an elastische Fasern und diese liegen reichlich in der Sklera. Merke: Bei Verdacht auf Gelbsucht → Augen zuerst."
- **Feedback (B1, 195 Zeichen):** "Nicht ganz — Ikterus (gelbe Haut) sieht man **zuerst im Augenweiß**. Erst später wird auch die Haut gelb. Merke: Bei Gelbsucht-Verdacht — schau zuerst in die Augen des Patienten."

**D3: "Rötung bei dunkler Haut sieht man wie bei heller Haut"**
- **Fachbegriff:** Beobachtungs-Gleichsetzungs-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — bei dunkler Haut wirken Rötungen oft **nicht sichtbar rot**, sondern als violette, bräunliche Verfärbung oder als Hautverhärtung. Deshalb kommen Dekubiti bei dunkler Haut oft später auf. Merke: Bei dunkler Haut immer **tasten** (Wärme, Härte) und zur Umgebung vergleichen."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — bei dunkler Haut sieht man Rötung anders. Die Stelle wird eher **lila oder braun**. Oder sie wird härter und wärmer. Merke: Bei dunkler Haut musst du auch **fühlen**, nicht nur schauen. Vergleiche immer mit der Nachbar-Haut."

### Richtig-Feedback

**C1 (255 Zeichen):** "Ausgezeichnet. Diese 4 Leitbefunde (Rötung, Blässe, Zyanose, Ikterus) sind das Fundament der Hautbeobachtung. In der Praxis: Bei jeder Pflegerunde systematisch Haut, Schleimhaut, Nagelbett und Sklera anschauen — und bei dunkler Haut gezielt tasten."

**B1 (230 Zeichen):** "Sehr gut. Die 4 Haut-Farben (Rot, Blass, Blau, Gelb) sind deine Werkzeuge. In der Pflege: Schau bei jedem Patienten Haut, Schleimhaut, Nägel und Augenweiß an. Bei dunkler Haut: Auch **fühlen**, nicht nur schauen. So erkennst du Probleme früh."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 4 pathologische Hautkolorit-Befunde und je 1 typische Ursache."
- **Rückseite:** "Erythem/Rötung — Entzündung/Fieber/Dekubitus I; Blässe — Anämie/Schock; Zyanose (blau) — O2-Mangel (zentral Lunge/Herz, peripher Kälte); Ikterus (gelb) — Bilirubinerhöhung (Leber/Galle)."
- **Kategorie:** assessment

---

## Baustein 7: entzuendungszeichen-5

### Metadaten
- **bausteinId:** haut-entzuendungszeichen-5
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Dein Finger ist entzündet — nach einem Splitter. Welche 5 Zeichen siehst oder spürst du? Versuche sie mit eigenen Worten zu beschreiben."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Die klassischen Entzündungszeichen nach Celsus (~30 n.Chr.): **Rubor** (Rötung), **Dolor** (Schmerz), **Tumor** (Schwellung), **Calor** (Wärme). Galen (~200 n.Chr.) ergänzte **Functio laesa** (Funktionseinschränkung). Merke: R–D–T–C–F."

**B1 (220 Zeichen):** "Bei einer Entzündung gibt es **5 Zeichen** (lateinisch):
1. Rubor — **Rötung**
2. Dolor — **Schmerz**
3. Tumor — **Schwellung**
4. Calor — **Wärme**
5. Functio laesa — **Funktion gestört** (du kannst die Stelle nicht gut benutzen)"

- **Step-Typ:** matching (Lateinischer Begriff ↔ deutsche Bedeutung)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Die **4 klassischen Entzündungszeichen** wurden vom römischen Arzt **Celsus** (~30 n.Chr.) in 'De Medicina' beschrieben. Rund 200 Jahre später ergänzte **Galen** ein fünftes — heute die **5 Kardinalsymptome**:

**1. Rubor (Rötung):** Gefäßerweiterung im Entzündungsgebiet → mehr Blut → sichtbare Röte.

**2. Dolor (Schmerz):** Freisetzung von Entzündungsmediatoren (Bradykinin, Prostaglandine) reizt Nozizeptoren.

**3. Tumor (Schwellung):** Erhöhte Gefäßpermeabilität → Plasma tritt ins Gewebe → Ödem.

**4. Calor (Wärme):** Mehr Durchblutung + erhöhter Stoffwechsel → lokale Temperaturerhöhung.

**5. Functio laesa (Funktionseinschränkung):** Das betroffene Gewebe oder Gelenk kann nicht mehr normal arbeiten — wegen Schmerz, Schwellung oder Gewebezerstörung.

**Pflegerelevanz:** Diese Zeichen unterscheiden eine Entzündung von anderen Hautveränderungen. Bei einem Dekubitus Kategorie I fehlen meist Wärme und Schmerz — bei einer Infektion (Wundinfekt, Erysipel) sind alle 5 Zeichen vorhanden."

**B1 (610 Zeichen):**
"Bei einer Entzündung gibt es **5 Zeichen**. Der Römer **Celsus** (vor 2000 Jahren) fand die ersten 4. **Galen** (200 Jahre später) fand das 5.

**1. Rubor (rot):** Blutgefäße öffnen sich. Mehr Blut → die Stelle wird rot.

**2. Dolor (Schmerz):** Der Körper schickt Schmerz-Stoffe. Die Schmerz-Nerven werden aktiv.

**3. Tumor (Schwellung):** Wasser geht aus den Gefäßen ins Gewebe → die Stelle schwillt an.

**4. Calor (warm):** Mehr Blut und mehr Arbeit → die Stelle wird warm.

**5. Functio laesa (gestört):** Die Stelle kann nicht mehr normal arbeiten — zum Beispiel ein Finger, den du nicht mehr biegen kannst.

**Wichtig in der Pflege:** Bei einem Dekubitus Kategorie I fehlen oft Wärme und Schmerz. Bei einer echten Infektion (Wunde, Erysipel) sind alle 5 da. So kannst du die beiden unterscheiden."

- **Erklärungs-Step:** stepType `reveal` (5 Zeichen aufdecken — mit Mechanismus)
- **Glossar-Begriffe:** [Rubor, Dolor, Tumor, Calor, Functio laesa, Erythem, Ödem]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Es gibt nur 4 Entzündungszeichen"**
- **Fachbegriff:** Celsus-Galen-Verwechslung
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — Celsus beschrieb 4 (Rubor, Dolor, Tumor, Calor). **Galen** (~200 n.Chr.) ergänzte ein 5.: **Functio laesa** (Funktionseinschränkung). Heute gelten **5 Kardinalsymptome**. Merke: Celsus 4 + Galen 1 = 5 Zeichen."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — Celsus beschrieb die ersten **4**. Galen kam später und fand das **5.**: **Functio laesa** (Funktion gestört). Heute gelten **5** Zeichen. Merke: Celsus 4 + Galen 1 = 5."

**D2: "Juckreiz ist ein klassisches Entzündungszeichen"**
- **Fachbegriff:** Pruritus-Miszuordnung
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — Juckreiz (Pruritus) ist kein klassisches Entzündungszeichen. Er tritt zwar oft bei Entzündungen auf, aber die 5 Kardinalsymptome sind: Rubor, Dolor, Tumor, Calor, Functio laesa. Merke: Juckreiz ≠ Entzündungszeichen."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — Juckreiz gehört **nicht** zu den 5 klassischen Zeichen. Die 5 sind: Rot, Schmerz, Schwellung, Wärme, Funktion gestört. Juckreiz kann dabei sein, ist aber kein Kardinalsymptom. Merke: 5 Zeichen, nicht Juckreiz."

**D3: "Alle 5 Zeichen müssen immer vorhanden sein"**
- **Fachbegriff:** Vollständigkeits-Irrtum
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — je nach Entzündungsart sind nicht alle 5 gleich stark ausgeprägt. Bei einem Dekubitus Kategorie I fehlen Wärme und Schmerz oft. Bei Rheuma ist Functio laesa führend. Merke: **Beobachte welche** Zeichen da sind — das hilft der Differenzialdiagnose."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — nicht immer sind alle 5 da. Bei einem Dekubitus fehlen oft Wärme und Schmerz. Bei Rheuma ist vor allem die Funktion gestört. Merke: **Schau genau**, welche Zeichen da sind. Das hilft bei der Diagnose."

### Richtig-Feedback

**C1 (245 Zeichen):** "Sehr gut. Rubor, Dolor, Tumor, Calor, Functio laesa — die 5 Kardinalsymptome. Diese Unterscheidung rettet Leben: Wundrose (Erysipel) braucht sofort Antibiotika. Merke dir das Kürzel **R–D–T–C–F** — so verlierst du keins der 5 Zeichen."

**B1 (225 Zeichen):** "Sehr gut. Die 5 Zeichen: Rubor, Dolor, Tumor, Calor, Functio laesa. Wichtig: Eine Entzündung erkennst du früh — und kannst schnell die Ärztin rufen. Merke: **R–D–T–C–F**. Mit diesem Kürzel vergisst du kein Zeichen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 5 klassischen Entzündungszeichen (lateinisch und deutsch)."
- **Rückseite:** "Rubor (Rötung), Dolor (Schmerz), Tumor (Schwellung), Calor (Wärme) — nach Celsus (~30 n.Chr.). Functio laesa (Funktionseinschränkung) — nach Galen (~200 n.Chr.)."
- **Kategorie:** fachbegriff

---

## Baustein 8: hautturgor

### Metadaten
- **bausteinId:** haut-turgor
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Wie kannst du mit **einem Griff** auf dem Handrücken prüfen, ob ein Patient zu wenig getrunken hat? Und warum funktioniert das?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (225 Zeichen):** "Der **Hautturgor** beschreibt die Elastizität der Haut. Test: Hautfalte am Handrücken oder Sternum kurz anheben und loslassen. Bleibt sie **stehen** (sog. 'Faltenstehen') → Exsikkose-Hinweis. Normal: Rückkehr in < 2 Sekunden."

**B1 (215 Zeichen):** "Der **Hautturgor** zeigt, wie elastisch die Haut ist. Test: Ziehe mit zwei Fingern eine Haut-Falte (Handrücken oder Brustbein) kurz hoch und lass los. Normal: Die Falte geht sofort zurück. Wenn sie stehen bleibt → der Patient hat zu wenig Flüssigkeit."

- **Step-Typ:** hotspot (Bild: Faltenstehen am Handrücken erkennen)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Der Hautturgor ist die **Spannung und Elastizität** der Haut, die durch den Flüssigkeitsgehalt und die elastischen Fasern bestimmt wird.

**Durchführung Turgor-Test:**
1. Zwei Finger (Daumen + Zeigefinger) eine Hautfalte am **Handrücken** oder **Sternum** anheben.
2. Kurz hochziehen, dann loslassen.
3. Beobachten: Kehrt die Falte in < 2 Sekunden zurück? → normal. Bleibt sie stehen (**Faltenstehen**, 'stehende Hautfalte') → Hinweis auf Dehydratation.

**Wichtig bei der Interpretation:**
- **Alte Menschen** haben physiologisch reduzierten Turgor durch weniger elastische Fasern und weniger Wasser — **Handrücken ist unzuverlässig**, besser am **Sternum** prüfen.
- Bei Säuglingen ist der Turgor besonders aussagekräftig (zusätzlich eingesunkene Fontanelle, trockene Windel).
- Turgor alleine reicht nicht — kombiniere mit trockener Mundschleimhaut, Urinfarbe (dunkel konzentriert), Blutdruck und Gewichtsverlauf."

**B1 (590 Zeichen):**
"Der Hautturgor zeigt, wie viel Wasser und Elastizität in der Haut ist.

**So geht der Test:**
1. Nimm zwei Finger.
2. Ziehe eine Haut-Falte am **Handrücken** oder **Brustbein** hoch.
3. Lass los und schau: Geht die Falte sofort zurück (unter 2 Sekunden)? → Das ist **normal**.
4. Bleibt die Falte **stehen**? → Der Patient hat zu wenig Flüssigkeit.

**Wichtig:**
- **Alte Menschen:** Die Haut am Handrücken ist auch ohne Flüssigkeitsmangel weniger elastisch. **Besser** am Brustbein testen.
- **Säuglinge:** Wenig Flüssigkeit erkennst du zusätzlich an eingefallener Fontanelle (weiche Stelle am Kopf) und trockenen Windeln.
- Der Turgor allein reicht nicht. Schau auch auf: Mund trocken? Urin dunkel? Blutdruck niedrig? Patient hat abgenommen?"

- **Erklärungs-Step:** stepType `stepbystep` (Ablauf Turgor-Test + Interpretation)
- **Glossar-Begriffe:** [Turgor, Exsikkose, Faltenstehen, Dehydratation, Sternum]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei alten Menschen ist Faltenstehen am Handrücken immer Exsikkose"**
- **Fachbegriff:** Altershaut-Fehlinterpretation
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — im Alter nimmt die elastische Faser-Dichte ab, der Handrücken-Test wird **unzuverlässig**. Bei geriatrischen Patienten am **Sternum** (Brustbein) testen oder andere Exsikkosezeichen heranziehen: Mundschleimhaut, Urinfarbe, Gewicht, Blutdruck."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — alte Haut am Handrücken ist **immer** wenig elastisch, auch wenn der Mensch genug trinkt. **Besser** am Brustbein testen. Oder schau auch auf Mund (trocken?), Urin (dunkel?), Blutdruck (niedrig?) und Gewicht."

**D2: "Guter Turgor = ausreichend hydriert"**
- **Fachbegriff:** Einzelzeichen-Fehlschluss
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — auch bei **guter** Hautelastizität kann ein Patient dehydratiert sein, besonders bei Elektrolytstörungen oder in frühen Exsikkose-Stadien. Der Turgor ist **ein** Zeichen — immer zusammen mit Mund, Urin, Blutdruck, Gewicht bewerten."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — gute Hautspannung heißt **nicht sicher** genug Flüssigkeit. Am Anfang einer Exsikkose kann der Turgor noch normal sein. Du musst immer **mehrere** Zeichen prüfen: Mund, Urin, Blutdruck, Gewicht."

**D3: "Der Turgor-Test wird an der Wange gemacht"**
- **Fachbegriff:** Lokalisations-Fehler
- **Feedback (C1, 220 Zeichen):** "Nein — der Turgor wird am **Handrücken** oder am **Sternum** (Brustbein) getestet. Die Wangenhaut ist zu fest mit dem Untergrund verwachsen und eignet sich nicht für eine Falte. Merke: Handrücken (jung), Sternum (alt)."
- **Feedback (B1, 185 Zeichen):** "Nein — der Turgor wird am **Handrücken** oder **Brustbein** gemacht. Die Wange ist zu fest mit dem Gesicht verwachsen. Du bekommst dort keine Falte. Merke: Handrücken oder Brustbein."

### Richtig-Feedback

**C1 (245 Zeichen):** "Ausgezeichnet. Der Turgor-Test am Handrücken oder Sternum ist ein schnelles Screening für Dehydratation. In der Praxis wichtig: Bei Älteren Sternum testen, und immer **mehrere** Exsikkosezeichen kombinieren — Turgor allein ist nicht beweisend."

**B1 (220 Zeichen):** "Sehr gut. Der Turgor-Test zeigt dir schnell, ob der Patient Flüssigkeit fehlt. In der Praxis: Bei Älteren am **Brustbein** testen. Und schau auch auf andere Zeichen — Mund, Urin, Blutdruck, Gewicht. Ein Zeichen allein reicht nicht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie führst du den Hautturgor-Test durch und was heißt 'stehende Hautfalte'?"
- **Rückseite:** "Hautfalte am Handrücken (oder Sternum bei Älteren) anheben und loslassen. Normal: Rückkehr in < 2 Sek. Faltenstehen → Hinweis auf Exsikkose. Nicht alleine bewerten — Mundschleimhaut, Urinfarbe, BD, Gewicht ergänzen."
- **Kategorie:** assessment

---

## Baustein 9: oedem-erkennen

### Metadaten
- **bausteinId:** haut-oedem-erkennen
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Die Beine eines Patienten sehen dicker aus als gestern. Wie kannst du mit **einem Fingerdruck** prüfen, ob es sich um Wasser im Gewebe handelt?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "**Ödem** = Flüssigkeitsansammlung im Zwischenzellraum. Test: **Fingerdruck** auf Schienbein/Knöchel für 5 Sek — bleibt eine Delle zurück (**eindrückbar**)? → Ödem. Typische Lokalisationen: Beine (kardial), Gesicht/Augen (renal), ganzer Körper (Anasarka)."

**B1 (230 Zeichen):** "**Ödem** = Wasser im Gewebe. So testest du:
1. Drücke mit einem Finger 5 Sekunden auf das Schienbein oder den Knöchel.
2. Entsteht eine **Delle**, die bleibt? → Ödem.

Wo Ödeme sitzen:
- An den Beinen → Herz-Problem
- Am Gesicht → Nieren-Problem
- Überall → sehr starkes Ödem (Anasarka)"

- **Step-Typ:** hotspot (Bild: eindrückbares Unterschenkelödem erkennen)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Ein **Ödem** ist eine pathologische Flüssigkeitsansammlung im interstitiellen Raum (Zwischenzellraum). Pflegerische Einteilung nach Klinik:

**Eindrückbares Ödem (pitting oedema):** Fingerdruck hinterlässt Delle. Gradeinteilung (orientierend):
- Grad 1: Delle < 2 mm, < 15 Sek. Rückkehr
- Grad 2: Delle 2–4 mm, ca. 15 Sek.
- Grad 3: Delle 4–6 mm, > 1 Min.
- Grad 4: Delle > 6 mm, > 2 Min.

**Nicht-eindrückbares Ödem:** Lymphödem, Myxödem — keine Delle durch Eiweißreichtum.

**Typische Ursachen nach Lokalisation:**
- **Beine (kardial):** Rechtsherzinsuffizienz → Druckanstieg im venösen System
- **Gesicht/Lidödem (renal):** Eiweißverlust bei Nephrotischem Syndrom
- **Lokal:** Entzündung, Thrombose, Allergie, Insektenstich
- **Anasarka:** Generalisiertes Ödem am ganzen Körper (schwere Hypalbuminämie, Dekompensation)

**Monitoring:** Täglich gleiche Tageszeit wiegen (1 l Flüssigkeit = 1 kg), Bilanzierung, Bauchumfang bei Aszites."

**B1 (605 Zeichen):**
"Ein **Ödem** ist Wasser im Gewebe — zwischen den Zellen. So testest du:
1. Drücke mit einem Finger 5 Sekunden auf das **Schienbein** oder den **Knöchel**.
2. Bleibt eine **Delle**? → Eindrückbares Ödem.

**Schweregrad:**
- Grad 1: kleine Delle, geht schnell weg
- Grad 2: mittlere Delle
- Grad 3: tiefe Delle, bleibt über 1 Minute
- Grad 4: sehr tiefe Delle, bleibt mehr als 2 Minuten

**Nicht-eindrückbar:** Manche Ödeme sind hart (Lymphödem) — keine Delle.

**Wo sitzt das Ödem?**
- **Beine** → oft Herz-Problem (Rechtsherz)
- **Gesicht, Augen** → oft Nieren-Problem
- **Überall** → Anasarka (sehr ernst)
- **Nur an einer Stelle** → Entzündung, Thrombose, Insektenstich

**Kontrolle:** Jeden Tag zur gleichen Zeit **wiegen** (1 Liter Wasser = 1 kg) und alle Flüssigkeiten (rein/raus) aufschreiben."

- **Erklärungs-Step:** stepType `reveal` (Grade 1-4 mit Delle-Tiefe und Rückkehrzeit)
- **Glossar-Begriffe:** [Ödem, pitting oedema, Anasarka, Aszites, Bilanzierung, Rechtsherzinsuffizienz]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Dicke Beine sind immer ein Ödem"**
- **Fachbegriff:** Ödem-Generalisierung
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — dicke Beine können auch Lipödem (Fettverteilung), Adipositas, Lymphödem oder Muskeln sein. Entscheidend ist der **Eindrück-Test**: Bleibt eine Delle? Dann Ödem. Keine Delle? Dann andere Ursache. Merke: Test entscheidet, nicht Aussehen."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — dicke Beine können auch Fett oder Muskeln sein, nicht nur Wasser. Der **Test**: Drücke und schau, ob eine **Delle** bleibt. Delle = Ödem. Keine Delle = anderer Grund. Merke: Drücken entscheidet, nicht Hingucken."

**D2: "Gewichtszunahme über Nacht von 2 kg ist normal"**
- **Fachbegriff:** Bilanz-Bagatellisierung
- **Feedback (C1, 255 Zeichen):** "Nein — eine Gewichtszunahme von 2 kg über Nacht ist **immer** auffällig und spricht für Wassereinlagerung. 1 Liter Wasser = 1 kg. Bei Herz- oder Niereninsuffizienz ein **Warnzeichen**. Merke: Tägliches Wiegen zur gleichen Zeit (morgens, nüchtern) — plötzlicher Anstieg = Arzt informieren."
- **Feedback (B1, 225 Zeichen):** "Nein — 2 kg mehr über Nacht ist **nicht normal**. Das ist Wasser. 1 Liter Wasser wiegt 1 kg. Bei Herz- oder Nieren-Problem ist das ein **Alarm**. Merke: Jeden Morgen zur gleichen Zeit wiegen. Plötzlich mehr = der Ärztin Bescheid geben."

**D3: "Ein Lymphödem lässt sich eindrücken wie andere Ödeme"**
- **Fachbegriff:** Lymphödem-Verwechslung
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — Lymphödeme sind meist **nicht-eindrückbar** (vor allem im fortgeschrittenen Stadium), weil sie eiweißreich sind und das Gewebe verhärtet (Fibrose). Typisch: **Stemmer-Zeichen positiv** — eine Hautfalte über dem 2. Zehen lässt sich nicht abheben. Merke: Hart + Stemmer positiv = Lymphödem."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Lymphödeme sind meist **hart**, keine Delle nach Druck. Das Gewebe ist fest wegen Eiweiß. **Stemmer-Zeichen:** Du kannst keine Hautfalte über dem 2. Zeh anheben. Merke: Hart + kein Falten-Anheben = Lymphödem."

### Richtig-Feedback

**C1 (255 Zeichen):** "Sehr gut. Der Fingerdruck-Test am Schienbein ist die schnellste Methode zur Ödembeurteilung. In der Praxis: Kombiniere mit tägliches Wiegen, Bilanzierung und Lokalisation — so erkennst du früh, ob eine Rechtsherzinsuffizienz dekompensiert oder Nieren versagen."

**B1 (225 Zeichen):** "Sehr gut. Mit dem Fingerdruck-Test am Schienbein erkennst du Ödeme schnell. Wichtig: Jeden Tag zur gleichen Zeit wiegen, Flüssigkeit auf- und abschreiben, und schauen wo das Ödem sitzt. So merkst du früh, wenn das Herz oder die Nieren schwach werden."

### Verknüpfte Karteikarte
- **Vorderseite:** "Beschreibe den Ödem-Test und nenne 2 typische Ödem-Lokalisationen mit Ursache."
- **Rückseite:** "Fingerdruck 5 Sek am Schienbein/Knöchel — bleibende Delle = eindrückbares Ödem. Beine → Rechtsherzinsuffizienz. Gesicht/Augen → Nephrotisches Syndrom. Generalisiert = Anasarka. 1 Liter = 1 kg Körpergewicht."
- **Kategorie:** assessment

---

## Baustein 10: mechanorezeptoren

### Metadaten
- **bausteinId:** haut-mechanorezeptoren
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Schließ die Augen und spüre: Du kannst einen leichten Hauch von Wind, einen festen Händedruck, Kälte und eine Vibration unterscheiden. Wie macht deine Haut das?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "In der Haut gibt es **4 Mechanorezeptoren** für unterschiedliche Reize: **Merkel-Zellen** (anhaltender Druck), **Meissner-Körperchen** (leichte Berührung, Bewegung), **Ruffini-Körperchen** (Dehnung, Druck), **Vater-Pacini-Körperchen** (Vibration, schnelle Veränderung)."

**B1 (240 Zeichen):** "Die Haut hat **4 Tast-Zellen** für verschiedene Reize:
1. **Merkel-Zellen** — anhaltender Druck
2. **Meissner** — leichte Berührung
3. **Ruffini** — Dehnung
4. **Vater-Pacini** — Vibration

Dazu kommen freie Nervenendigungen für Wärme, Kälte und Schmerz."

- **Step-Typ:** matching (4 Rezeptoren ↔ Reiz)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"In der Haut arbeiten **4 Mechanorezeptoren** (plus freie Nervenendigungen), jeder für eine andere Reiz-Art:

**Merkel-Zellen:** Stratum basale der Epidermis. Langsam adaptierend → melden **anhaltenden Druck** und feine Oberflächenstruktur (Blindenschrift). Dichte an Fingerkuppen hoch.

**Meissner-Körperchen:** In Dermis-Papillen, v.a. an Fingerbeeren, Lippen, Zunge. Schnell adaptierend → melden **leichte Berührung**, Bewegungsreize (z.B. Stoffgefühl, 'streicheln').

**Ruffini-Körperchen:** Tief in der Dermis. Langsam adaptierend → melden **Dehnung** und **anhaltenden Druck**, auch Gelenkstellung (Propriozeption).

**Vater-Pacini-Körperchen:** Subcutis (und Gelenke). Sehr schnell adaptierend → melden **Vibration** und schnelle Druckänderungen.

**Freie Nervenendigungen:** In allen Schichten. Melden **Wärme, Kälte und Schmerz** (Nozizeption) — nicht mechanische Reize.

Alle Rezeptoren leiten über periphere Nerven ins Rückenmark und weiter in den somatosensorischen Cortex."

**B1 (620 Zeichen):**
"In der Haut sind **4 Tast-Zellen** für verschiedene Reize. Jede Zelle kann eine bestimmte Sache gut:

**1. Merkel-Zellen (Epidermis unten):** Spüren anhaltenden **Druck**. Sehr gut an Fingerkuppen — du kannst damit Blindenschrift lesen.

**2. Meissner-Körperchen (Dermis oben):** Spüren **leichte Berührung** und **Bewegung**. Überall wo du besonders viel fühlst: Fingerbeeren, Lippen, Zunge.

**3. Ruffini-Körperchen (Dermis tief):** Spüren **Dehnung** und anhaltenden Druck. Auch die Stellung von Gelenken.

**4. Vater-Pacini-Körperchen (Subcutis):** Spüren **Vibration** und schnelle Bewegungen.

**Freie Nervenendigungen:** Sie sind in allen Schichten. Sie spüren **Wärme, Kälte und Schmerz**.

Alle Zellen schicken die Reize über Nerven zum Rückenmark und ins Gehirn. Dort wird alles zusammen gesetzt — so fühlst du."

- **Erklärungs-Step:** stepType `comparison` (4 Rezeptoren × Lage × Reiz × Adaptation)
- **Glossar-Begriffe:** [Merkel-Zelle, Meissner-Körperchen, Ruffini-Körperchen, Vater-Pacini-Körperchen, Mechanorezeptor, Nozizeption, Propriozeption]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Alle Rezeptoren in der Haut spüren Schmerz"**
- **Fachbegriff:** Schmerz-Generalisierung
- **Feedback (C1, 230 Zeichen):** "Nein — die vier benannten Rezeptoren (Merkel, Meissner, Ruffini, Vater-Pacini) sind **Mechanorezeptoren** für Druck, Berührung, Dehnung und Vibration. Schmerz wird nur über **freie Nervenendigungen** (Nozizeptoren) geleitet. Merke: Tastzellen ≠ Schmerzzellen."
- **Feedback (B1, 205 Zeichen):** "Nein — die 4 Tast-Zellen (Merkel, Meissner, Ruffini, Vater-Pacini) spüren **kein Schmerz**. Schmerz geht über **freie Nervenendigungen**. Merke: Tast-Zellen für Druck und Bewegung, freie Enden für Schmerz."

**D2: "Vater-Pacini-Körperchen liegen in der Epidermis"**
- **Fachbegriff:** Lokalisations-Fehler
- **Feedback (C1, 230 Zeichen):** "Nein — Vater-Pacini-Körperchen liegen **tief**, meist in der **Subcutis** und in Gelenknähe. Sie brauchen die Tiefe, um Vibrationen effizient aufzunehmen. In der Epidermis würden feine Vibrationen untergehen. Merke: Pacini = tief, Merkel = oben."
- **Feedback (B1, 200 Zeichen):** "Nein — Vater-Pacini liegen **tief**, in der Subcutis. Dort spüren sie Vibrationen gut. In der Epidermis (oben) würden sie die Vibration nicht fühlen. Merke: Pacini = tief. Merkel = oben."

**D3: "Überall auf der Haut ist die Tast-Empfindlichkeit gleich stark"**
- **Fachbegriff:** Rezeptor-Dichte-Irrtum
- **Feedback (C1, 250 Zeichen):** "Nein — die Rezeptoren sind **unterschiedlich dicht** verteilt. An Fingerkuppen, Lippen und Zunge liegen sie dicht beieinander → hohe Empfindlichkeit. Am Rücken oder an den Waden weniger → grober Tastsinn. Zeig-Experiment: Du kannst an der Fingerspitze 2 Spitzen bei ~2 mm Abstand unterscheiden, am Rücken erst bei ~40 mm."
- **Feedback (B1, 215 Zeichen):** "Nein — die Zellen sind nicht überall gleich dicht. An **Fingerspitzen, Lippen und Zunge** gibt es sehr viele — dort fühlst du fein. Am **Rücken oder an den Waden** gibt es weniger — dort fühlst du grob. Merke: Finger fein, Rücken grob."

### Richtig-Feedback

**C1 (235 Zeichen):** "Sehr gut. Merkel, Meissner, Ruffini, Vater-Pacini — die 4 Mechanorezeptoren plus freie Enden für Temperatur und Schmerz. Für die Pflege wichtig: Bei Sensibilitätsstörung (Diabetes, Polyneuropathie) ist das Dekubitus- und Verletzungsrisiko deutlich erhöht."

**B1 (225 Zeichen):** "Sehr gut. Die 4 Tast-Zellen und freie Nervenenden machen das Fühlen möglich. Wichtig in der Pflege: Wenn ein Patient nicht mehr gut fühlt (z.B. bei Diabetes), bemerkt er Druck oder Verletzungen nicht. Darum mehr Dekubitus- und Wund-Risiko."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 4 Mechanorezeptoren der Haut und den Reiz, den sie aufnehmen."
- **Rückseite:** "Merkel — Druck; Meissner — leichte Berührung; Ruffini — Dehnung; Vater-Pacini — Vibration. Zusätzlich: freie Nervenendigungen → Wärme, Kälte, Schmerz."
- **Kategorie:** fachbegriff

---

## Baustein 11: temperatur-regulation

### Metadaten
- **bausteinId:** haut-temperatur-regulation
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Bei 30 °C im Sommer schwitzt du, bei 5 °C bekommst du Gänsehaut. Welche 3 Wege hat der Körper, um Wärme abzugeben — und welche 2, um sie zu halten?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "Kerntemperatur ~37 °C. **Wärmeabgabe** (Hitze): Vasodilatation, Schwitzen (Verdunstung), Konvektion, Strahlung, Konduktion. **Wärmeerhalt** (Kälte): Vasokonstriktion, Kältezittern, Gänsehaut (M. arrector pili). Regulationszentrum im Hypothalamus."

**B1 (250 Zeichen):** "Der Körper hält **37 °C**. Das Zentrum dafür ist im Gehirn (Hypothalamus).

**Bei Hitze (kühlen):** Blutgefäße werden weit, Schwitzen, Wärme geht ab.
**Bei Kälte (warm halten):** Blutgefäße werden eng, Muskelzittern, Gänsehaut."

- **Step-Typ:** reveal (Hitze-Mechanismen vs. Kälte-Mechanismen)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Der Mensch ist ein Homoiotherm — Kerntemperatur um **37 °C**. Regulationszentrum: Hypothalamus. Die Haut ist das wichtigste Stellglied.

**Bei Wärme (Wärmeabgabe):**
- **Vasodilatation** der Hautgefäße → mehr Blut an der Oberfläche → Wärme gibt ab
- **Schwitzen:** Ekkrine Drüsen → Verdunstung von Schweiß entzieht Verdunstungswärme (bis ~600 ml/h)
- **Konvektion:** Abführung durch Luftbewegung
- **Strahlung:** Infrarot-Abstrahlung
- **Konduktion:** Wärmeleitung an kühle Oberflächen

**Bei Kälte (Wärmeerhalt):**
- **Vasokonstriktion** der Hautgefäße → weniger Durchblutung → Wärmestau innen
- **Kältezittern:** unwillkürliche Muskelkontraktionen produzieren Wärme
- **Gänsehaut** (M. arrector pili): Pilo-Erektion — beim Menschen kaum noch isolierend (Reliktfunktion), bei Tieren durch aufgestelltes Fell wichtig
- **Braunes Fettgewebe:** v.a. bei Säuglingen — zitterfreie Thermogenese

**Pflegerelevanz:** Alte Menschen haben eingeschränkte Regulation → schneller Hypothermie- oder Hyperthermie-Gefahr."

**B1 (610 Zeichen):**
"Der Körper hält die Temperatur bei **37 °C**. Das Zentrum dafür ist im Gehirn (Hypothalamus).

**Wenn es warm ist (Körper kühlt):**
- **Gefäße weit:** Mehr Blut kommt an die Haut → Wärme geht ab.
- **Schwitzen:** Schweiß verdunstet → die Haut kühlt.
- **Wärme geht an die Luft** (Konvektion), strahlt ab (Strahlung), fließt an kalte Sachen (Konduktion).

**Wenn es kalt ist (Körper wärmt):**
- **Gefäße eng:** Weniger Blut an der Haut → Wärme bleibt innen.
- **Zittern:** Muskeln arbeiten → machen Wärme.
- **Gänsehaut:** Haare stehen auf (beim Menschen nicht mehr richtig nützlich, bei Tieren ja).
- **Braunes Fett** bei Babys macht auch Wärme.

**Wichtig in der Pflege:** Alte Menschen können die Temperatur schlechter halten — sie werden schnell zu kalt oder zu warm."

- **Erklärungs-Step:** stepType `comparison` (Hitze-Reaktion vs. Kälte-Reaktion in 2 Spalten)
- **Glossar-Begriffe:** [Vasodilatation, Vasokonstriktion, Konvektion, Konduktion, Verdunstung, Pilo-Erektion, Hypothalamus, Hypothermie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Schwitzen beweist, dass der Körper zu warm ist"**
- **Fachbegriff:** Schwitz-Interpretations-Fehler
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — Schwitzen kann auch **emotional** (Angst, Stress), **medikamentös** (bestimmte Antidepressiva, Metoprolol-Entzug), bei **Hypoglykämie** oder im **Schock** auftreten — dann ist der Körper eher kalt und blass. Merke: Schwitzen allein ist kein sicheres Wärme-Zeichen — immer Temperatur messen."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — Schwitzen heißt nicht immer 'zu warm'. Menschen schwitzen auch bei **Angst**, **Schock** oder **Unterzucker** — dann sind sie eher kalt und blass. Merke: Wenn jemand schwitzt, **immer** die Temperatur messen."

**D2: "Kältezittern erwärmt den Körper nur oberflächlich"**
- **Fachbegriff:** Zitter-Effekt-Irrtum
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — Kältezittern sind unwillkürliche **Muskelkontraktionen**. Jede Muskelarbeit produziert Wärme im ganzen Körperinneren, nicht nur an der Oberfläche. Die Wärmeproduktion kann sich dabei bis zum **Fünffachen** des Ruhewerts steigern. Merke: Zittern = echter Heizmotor."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — Zittern ist **Muskel-Arbeit**. Muskel-Arbeit macht Wärme im **ganzen Körper**, nicht nur an der Haut. Der Körper kann so **5-mal mehr** Wärme machen als in Ruhe. Merke: Zittern = richtig aufwärmen, nicht nur außen."

**D3: "Alte Menschen reagieren wie junge auf Kälte und Hitze"**
- **Fachbegriff:** Alter-Regulation-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nein — im Alter funktionieren Vasomotorik und Schweißbildung **schlechter**. Ältere frieren schneller bei Kälte, überhitzen schneller bei Hitze (z.B. Hitzewelle — hohe Mortalität bei Senioren). Pflegerisch: Hitzewarnungen beachten, Trinkmengen kontrollieren, Raumtemperatur überwachen."
- **Feedback (B1, 225 Zeichen):** "Nein — alte Menschen reagieren **langsamer** auf Kälte und Hitze. Sie frieren schneller und bekommen schneller einen Hitze-Schlag. Darum: Im Sommer auf Raum-Temperatur und Trinken achten. Im Winter warme Kleidung und warme Getränke."

### Richtig-Feedback

**C1 (240 Zeichen):** "Ausgezeichnet. Die Haut ist das Hauptstellglied der Thermoregulation — Vasomotorik und Schweißbildung sind die zentralen Mechanismen. Pflegerisch: Temperaturmessung (Kerntemperatur via Rektum/Trommelfell), Monitoring bei Fieber, Hitze-Bekämpfung und Unterkühlungsschutz."

**B1 (220 Zeichen):** "Sehr gut. Die Haut macht die meiste Arbeit beim Temperatur-Halten — über Blutgefäße und Schweiß. Für die Pflege wichtig: Temperatur messen, auf Fieber reagieren, bei Hitze kühlen und bei Kälte wärmen. Besonders bei alten Menschen aufpassen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne je 3 Mechanismen, mit denen die Haut bei Hitze Wärme abgibt und bei Kälte Wärme spart."
- **Rückseite:** "Hitze: Vasodilatation, Schwitzen/Verdunstung, Konvektion/Strahlung. Kälte: Vasokonstriktion, Kältezittern, Gänsehaut (Piloerektion). Regulationszentrum: Hypothalamus. Kerntemperatur ~37 °C."
- **Kategorie:** fakt

---

## Baustein 12: saeureschutzmantel-ph55

### Metadaten
- **bausteinId:** haut-saeureschutzmantel-ph55
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Warum spannt deine Haut nach einer heißen Dusche mit viel Seife? Und was hat das mit Bakterien zu tun?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Der **Säureschutzmantel** ist ein dünner Film aus Schweiß, Sebum und abgeschilferten Korneozyten mit einem pH-Wert von **4,7–5,5** (leicht sauer). Er hemmt das Wachstum pathogener Bakterien und Pilze und erhält die Hautbarriere. (Marchini 1902 — Entdeckung)."

**B1 (230 Zeichen):** "Die Haut hat einen **Schutz-Film**. Er heißt Säureschutzmantel.
- Er besteht aus Schweiß, Hautfett und toten Zellen
- Er ist leicht **sauer** (pH 4,7–5,5)
- Er schützt vor Bakterien und Pilzen
- Er hält die Haut-Barriere gesund"

- **Step-Typ:** slider (pH-Skala 0-14, Haut auf 5,5 einstellen)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Der **Säureschutzmantel** (Hydrolipidfilm, Acid Mantle) wurde 1902 von Marchini beschrieben. Er ist ein dünner **Oberflächenfilm** auf der Haut, gebildet aus:

- **Schweiß** (ekkrine Drüsen, enthält Milchsäure, Harnstoff, Aminosäuren)
- **Sebum** (Talg, freie Fettsäuren, Triglyceride, Squalen)
- **Abgeschilferten Korneozyten** und interzellulärer Lipidmatrix

**pH-Wert:** 4,7–5,5 (leicht sauer, physiologisch)

**Funktionen:**
- **Antimikrobiell:** Pathogene Bakterien (z.B. Staphylococcus aureus) wachsen schlechter im sauren Milieu; kommensale Flora (Laktobazillen) bevorzugt pH < 6.
- **Stabilisierung der Hautbarriere:** saure Umgebung fördert die Reifung der Korneozyten-Lipide (Ceramide).
- **Pufferkapazität:** Neutralisiert alkalische Einwirkung (Seifen pH 9–10).

**Störungen:** Häufiges Waschen mit alkalischer Seife, Desinfektionsmittel, Inkontinenz (Ammoniak aus Urin, pH 8), Windeldermatitis — der Film regeneriert bei gesunder Haut in ca. **30 Min bis 2 h**.

Für die Pflege: **pH-neutrale bzw. hautneutrale Produkte (pH 5,5)** verwenden."

**B1 (580 Zeichen):**
"Die Haut hat einen **Schutz-Film**. Er heißt Säureschutzmantel. Der Arzt **Marchini** hat ihn 1902 entdeckt.

**Woraus besteht er?**
- **Schweiß** (aus den Schweißdrüsen)
- **Fett** (aus den Talgdrüsen)
- **Tote Haut-Zellen**

**pH-Wert: 4,7–5,5 → leicht sauer.**

**Was macht er?**
- Er **tötet Keime**: Schlimme Bakterien wie Staphylokokken mögen es nicht sauer.
- Er **schützt die Haut-Barriere**: Er hilft, die Fette in der Haut richtig zu bilden.
- Er **puffert Basen**: Wenn du mit Seife (pH 9) wäschst, kann er das wieder ausgleichen.

**Was stört ihn?**
- Viel Seife
- Desinfektions-Mittel
- Inkontinenz (Urin macht die Haut basisch)

Bei gesunder Haut ist der Film nach **30 Minuten bis 2 Stunden** wieder da.

**Für die Pflege:** Nimm Produkte mit **pH 5,5** (hautneutral)."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Säureschutzmantel, Hydrolipidfilm, pH-Wert, Sebum, Ceramid, Korneozyt]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Haut ist pH-neutral wie Wasser (pH 7)"**
- **Fachbegriff:** pH-Neutral-Irrtum
- **Feedback (C1, 230 Zeichen):** "Nicht ganz — der physiologische Haut-pH liegt bei **4,7–5,5**, also **sauer**. 'pH-neutral' in Produkt-Werbung meint oft 'haut-neutral' (pH 5,5) — nicht 'wasser-neutral' (pH 7). Merke: Haut = leicht sauer. Seifen-Werbung ist irreführend."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — die Haut hat pH **4,7–5,5**. Das ist **sauer**, nicht neutral. 'pH-neutral' bei Produkten heißt 'wie Haut' (pH 5,5) — nicht 'wie Wasser' (pH 7). Merke: Haut ist leicht sauer."

**D2: "Seife macht die Haut sauberer, schadet ihr aber nicht"**
- **Fachbegriff:** Seifen-Verharmlosung
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — klassische Seife hat pH **9–10** (alkalisch). Sie neutralisiert den Säureschutzmantel und wäscht Lipide aus. Bei seltenem Gebrauch erholt sich die Haut; bei häufigem Gebrauch (3×/Tag) nimmt die Barriere Schaden — Ekzeme, Trockenheit, Infektneigung steigen. Für Pflege: **Syndet pH 5,5** verwenden."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Seife hat pH **9–10** (basisch). Sie macht den Schutz-Film der Haut kaputt. Nicht so schlimm bei gelegentlichem Gebrauch. Aber bei oft waschen: Trockene, raue Haut, Ekzeme. In der Pflege: **Syndet** mit pH 5,5 nehmen."

**D3: "Der Säureschutzmantel kann sich nicht regenerieren"**
- **Fachbegriff:** Regenerations-Mythos
- **Feedback (C1, 230 Zeichen):** "Nein — bei **gesunder** Haut regeneriert der Säureschutzmantel in **30 Min bis 2 h**. Bei häufig gestörter Haut (Inkontinenz, Ekzem) dauert es länger oder bleibt aus. Darum: In der Pflege Reinigung **minimieren**, Hautschutz konsequent. Merke: Film kommt wieder — wenn wir ihn nicht ständig kaputt machen."
- **Feedback (B1, 210 Zeichen):** "Nein — der Schutz-Film kommt zurück. Bei gesunder Haut in **30 Minuten bis 2 Stunden**. Bei kaputter Haut dauert es länger. Darum: Nicht zu oft waschen und Hautschutz benutzen. Merke: Der Film erholt sich — wenn wir ihn lassen."

### Richtig-Feedback

**C1 (245 Zeichen):** "Sehr gut. Der Säureschutzmantel (pH 4,7–5,5) ist deine erste Verteidigung gegen Keime und Umwelt. Pflegerisch: Hautneutrale Produkte (Syndet, pH 5,5), kein heißes Wasser, kurze Waschzeiten. Bei Inkontinenz: Hautschutz mit Zinkoxid oder Dimeticon."

**B1 (225 Zeichen):** "Sehr gut. Der Säureschutzmantel (pH 4,7–5,5) schützt die Haut vor Keimen. In der Pflege: Produkte mit pH 5,5 (Syndet), kein heißes Wasser, kurz waschen. Bei Inkontinenz: Hautschutz-Creme. So bleibt der Film intakt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Säureschutzmantel — Zusammensetzung, pH-Wert, Funktion?"
- **Rückseite:** "Hydrolipidfilm aus Schweiß, Sebum und Korneozyten. pH 4,7–5,5 (leicht sauer). Hemmt Pathogene, stabilisiert Barriere, puffert Alkali. Regeneration 30 Min–2 h bei gesunder Haut. (Marchini 1902)"
- **Kategorie:** fachbegriff

---

## Baustein 13: hautalterung-lebensspanne

### Metadaten
- **bausteinId:** haut-alterung-lebensspanne
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Warum ist die Haut eines 85-jährigen Patienten dünner, trockener und empfindlicher als die eines 25-jährigen? Nenne 3 Veränderungen, die mit dem Alter passieren."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Altershaut zeigt: dünnere Epidermis, weniger Talg- und Schweißdrüsen, weniger Kollagen/Elastin → reduzierter Turgor und erhöhte Verletzlichkeit. Zusätzlich: langsamere Wundheilung, abnehmende Melanozyten-Zahl, verringerte Vitamin-D-Synthese. (DGG, AWMF-Empfehlungen)"

**B1 (235 Zeichen):** "Mit dem Alter ändert sich die Haut:
- Sie wird **dünner**
- Sie produziert **weniger Fett und Schweiß** → trocken
- Sie hat **weniger Kollagen** → Falten
- Sie **heilt langsamer**
- Sie macht **weniger Vitamin D** aus Sonnenlicht"

- **Step-Typ:** timeline (Hautveränderungen über die Lebensspanne)

### Stufe 3 — Erklärung

**C1 (800 Zeichen):**
"Die Haut verändert sich über die Lebensspanne. Pflegerisch relevant sind vor allem Altersveränderungen:

**Neugeborenenhaut (0–28 d):** Dünn, pH neutral (~6,5), Lanugo, weniger Eigenschutz — siehe eigener Baustein.

**Säugling/Kleinkind:** Barriereaufbau abgeschlossen um 3. Lebensmonat. Talgdrüsen aktiv bis 6. Monat, dann Ruhephase bis Pubertät.

**Jugend (Pubertät):** Androgene aktivieren Talgdrüsen → Akne möglich. Schweißdrüsen (apokrine) werden aktiv.

**Erwachsenenalter:** Stabile Barriere, Turgor optimal.

**Ab ca. 40:** Erste Mimik-Falten, UV-bedingte Schäden (Photoaging) sichtbar.

**Alter (>65):**
- **Dünnere Epidermis** (bis zu 20% Verlust) → erhöhte Verletzlichkeit (z.B. Pflasterrisse)
- **Weniger Kollagen/Elastin** → weniger Turgor, Falten, Faltenstehen-Phänomen
- **Weniger Talg + Schweiß** → Sebostase (trockene Haut), Juckreiz
- **Weniger Melanozyten** → graue Haare, Altersflecken durch gestörte Pigmentverteilung
- **Langsamere Wundheilung** (z.B. Epidermis-Turnover von 28 auf 60+ Tage verlängert)
- **Vitamin-D-Synthese reduziert** → häufig Substitution nötig
- **Sensibilitäts-Abnahme** → Dekubitus- und Sturzrisiko steigt

**Pflegerelevanz:** Weniger Reinigung, mehr Rückfettung, Produktauswahl W/O-Emulsionen, Hautschutz bei Inkontinenz. (DGG-Empfehlungen)"

**B1 (680 Zeichen):**
"Die Haut verändert sich im Laufe des Lebens:

**Baby (0–28 Tage):** Haut dünn, pH noch **nicht sauer** (6,5), erste Haare (Lanugo).

**Kleinkind:** Nach 3 Monaten ist die Schutz-Barriere fertig.

**Pubertät:** Hormone → Talgdrüsen aktiv → manchmal Akne. Auch Achsel-Schweißdrüsen starten.

**Erwachsener:** Stabile Haut, guter Turgor.

**Ab 40:** Erste Falten, Sonnenschäden werden sichtbar.

**Im Alter (über 65):**
- Epidermis ist **20% dünner** → die Haut reißt schneller
- **Weniger Kollagen** → Haut verliert Spannung
- **Weniger Talg und Schweiß** → Haut ist **trocken**, juckt oft
- **Weniger Melanozyten** → graue Haare, Altersflecken
- **Wunden heilen langsamer** (28 Tage → 60 Tage oder länger)
- Weniger Vitamin D aus der Sonne
- Weniger **Fühlen** → mehr Dekubitus- und Sturz-Gefahr

**Für die Pflege:**
- Weniger waschen
- Mehr **Fett-Creme** benutzen (W/O statt O/W)
- Bei Inkontinenz: Hautschutz
- pH 5,5 Produkte"

- **Erklärungs-Step:** stepType `timeline` (Lebensspanne mit 6 Stationen)
- **Glossar-Begriffe:** [Photoaging, Sebostase, Altershaut, Epidermis-Turnover, Lanugo]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Altershaut sollte häufiger mit Seife gewaschen werden"**
- **Fachbegriff:** Reinigungs-Übereifer
- **Feedback (C1, 245 Zeichen):** "Nein — Altershaut hat **weniger Talg und Schweiß**, der Säureschutzmantel ist ohnehin geschwächt. Häufiges Waschen mit Seife verstärkt Trockenheit, Juckreiz und Rissigkeit. Regel: **Weniger ist mehr**. 1–2×/Woche Ganzkörper, sonst Teilwäsche mit klarem Wasser oder Syndet."
- **Feedback (B1, 220 Zeichen):** "Nein — alte Haut hat schon **weniger Fett** und ist trocken. Viel Seife macht es schlimmer — Juckreiz und Risse. Regel: **Weniger waschen**. 1–2 Mal pro Woche ganz. Sonst nur Teilwäsche mit Wasser oder Syndet (pH 5,5)."

**D2: "Wundheilung dauert bei jungen und alten Menschen gleich lang"**
- **Fachbegriff:** Wundheilungs-Gleichheit
- **Feedback (C1, 255 Zeichen):** "Nein — bei **alten Menschen** dauert die Wundheilung **2- bis 4-mal länger** als bei jungen. Der Epidermis-Turnover verlängert sich von 28 auf oft 60+ Tage. Gründe: weniger Teilung im Stratum basale, reduzierte Durchblutung, reduzierte Immunabwehr. Pflegerelevant bei Dekubitus-Therapie, OP-Heilung."
- **Feedback (B1, 230 Zeichen):** "Nein — alte Menschen heilen **viel langsamer**. Wo junge Menschen in 28 Tagen heilen, brauchen alte oft 60 Tage oder mehr. Gründe: weniger neue Zellen, weniger Durchblutung, schwächeres Immun-System. Darum ist Wund-Versorgung bei alten Menschen so wichtig."

**D3: "Altersflecken sind nur kosmetisch"**
- **Fachbegriff:** Alterfleck-Bagatellisierung
- **Feedback (C1, 255 Zeichen):** "Meist ja — aber **nicht immer**. Altersflecken (Lentigines solares) sind gutartige Pigmentansammlungen. Aber: Sie können mit malignen Lentigines oder Melanom-Vorstufen verwechselt werden. **ABCDE-Regel** beachten (Asymmetrie, Begrenzung, Color, Durchmesser, Entwicklung). Merke: Neu aufgetretene/veränderte Pigmentflecken → Hautarzt."
- **Feedback (B1, 230 Zeichen):** "Meistens harmlos — aber **nicht immer**. Altersflecken sind gutartig. Aber: Manchmal sind sie auch gefährlich (Hautkrebs-Vorstufe). Merke die **ABCDE-Regel**: Asymmetrisch? Rand unruhig? Farbe bunt? Durchmesser groß? Entwicklung? Dann → Hautarzt."

### Richtig-Feedback

**C1 (250 Zeichen):** "Ausgezeichnet. Altershaut ist dünner, trockener, verletzlicher und heilt langsamer. Pflegerisch: Reinigung minimieren, hautneutrale Produkte, gezielte Rückfettung (W/O), Hautschutz bei Inkontinenz, UV-Schutz, Hautinspektion in jeder Pflegerunde (Dekubitus, Pflaster)."

**B1 (220 Zeichen):** "Sehr gut. Alte Haut ist dünner, trockener und heilt langsamer. Darum in der Pflege: Wenig waschen, gute Fett-Creme (W/O), Hautschutz bei Inkontinenz, Sonnen-Schutz und bei jeder Runde auf die Haut schauen — besonders auf Dekubitus-Stellen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 4 typische Veränderungen der Altershaut und 2 pflegerische Konsequenzen."
- **Rückseite:** "Dünnere Epidermis (bis 20% Verlust), weniger Talg/Schweiß → trocken, weniger Kollagen/Elastin → Faltenstehen, langsamere Wundheilung (bis 60+ Tage Zyklus). Konsequenzen: Reinigung minimieren, W/O-Produkte, Hautschutz bei Inkontinenz."
- **Kategorie:** fakt

---

## Baustein 14: hautdruesen-sebum-sudor

### Metadaten
- **bausteinId:** haut-druesen-sebum-sudor
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Warum wird manche Haut schnell ölig (fettig) und manche trocken? Welche Drüsen spielen dabei welche Rolle?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Die Haut hat 2 Drüsentypen: **Talgdrüsen** (Glandulae sebaceae) → **Sebum** (Fett); **Schweißdrüsen** → **Sudor** (Wasser). Beide Sekrete bilden den Hydrolipidfilm. Verteilung: Talg v.a. Kopf/Gesicht/Rücken, ekkrine Schweißdrüsen überall, apokrine nur Achsel/Genital."

**B1 (240 Zeichen):** "Die Haut hat **2 Drüsen-Arten**:
- **Talgdrüsen** → machen **Sebum** (Fett). Viel am Kopf und im Gesicht.
- **Schweißdrüsen** → machen **Sudor** (Schweiß, Wasser). Überall — außer in der Achsel und im Genital: dort mit Geruch (apokrin)."

- **Step-Typ:** comparison (Talgdrüsen vs. ekkrine vs. apokrine)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die Haut besitzt zwei Drüsentypen, deren Sekrete zusammen den Hydrolipidfilm bilden:

**Talgdrüsen (Glandulae sebaceae):**
- Münden in Haarfollikel (außer an Lippen, Augenlidern, Mamille — dort frei)
- Sekretion: **holokrin** (die ganze Zelle zerfällt und wird zu Sebum)
- Sebum = Triglyceride + freie Fettsäuren + Squalen + Wachsester
- Dichte: Kopf/Gesicht/Brust/Rücken hoch (seborrhoische Areale)
- Aktivität hormongesteuert → Pubertät = Maximum, Ruhe im Kindesalter und Alter

**Schweißdrüsen:**

**Ekkrine:** Ca. 2–4 Mio. am ganzen Körper (Ausnahme: Lippenrot, Nagelbett). Sekretion: merokrin (Zelle bleibt erhalten). Produkt: klarer, geruchsneutraler Schweiß (Wasser, NaCl, Harnstoff, Lactat). Funktion: **Temperaturregulation** durch Verdunstung.

**Apokrine:** Nur Achselhöhle, Genitalbereich, Mamille, Gehörgang (Ceruminaldrüsen). Aktiv ab **Pubertät**. Produkt: eiweißreich, anfangs geruchlos — **Geruch entsteht durch bakterielle Zersetzung**. Funktion: evolutionär Duftkommunikation.

**Pflegerelevanz:** Starker Talg → Akne; reduzierter Talg → Altershaut, Sebostase; starker Schweiß → Mazeration unter Falten → Intertrigo."

**B1 (620 Zeichen):**
"Die Haut hat **2 Arten Drüsen**:

**Talgdrüsen (Sebum):**
- Machen **Fett (Sebum)**
- Münden in Haar-Kanäle
- Dichte am Kopf, Gesicht, Brust, Rücken hoch
- Hormon-abhängig: In der Pubertät sehr aktiv → Akne
- Alte Menschen: Wenig Sebum → Haut ist trocken

**Schweißdrüsen (2 Arten):**

**1. Ekkrin (überall):**
- 2 bis 4 Millionen am ganzen Körper
- Schweiß: Wasser mit Salz, **geruchlos**
- Funktion: **Kühlen** (Verdunstung)

**2. Apokrin (nur Achsel + Genital):**
- Aktiv ab der **Pubertät**
- Schweiß mit **Eiweiß**
- Zuerst geruchlos — Bakterien machen erst den **Geruch**
- Funktion: Duft-Kommunikation (evolutionär)

**In der Pflege:**
- Viel Talg → Akne
- Wenig Talg → Altershaut, trocken
- Viel Schweiß in Hautfalten → **Intertrigo** (nasse, wunde Haut)"

- **Erklärungs-Step:** stepType `comparison` (3 Drüsen-Typen × Lage × Sekret × Funktion)
- **Glossar-Begriffe:** [Sebum, Sudor, Talgdrüse, ekkrin, apokrin, holokrin, merokrin, Sebostase]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Apokrine Schweißdrüsen sind überall am Körper"**
- **Fachbegriff:** Apokrin-Generalisierung
- **Feedback (C1, 230 Zeichen):** "Nein — apokrine Drüsen sind **lokal begrenzt**: Achselhöhle, Genitalbereich, Mamille, Gehörgang (Cerumen). Am Rest des Körpers nur ekkrine Drüsen. Darum riecht Schweiß nicht überall gleich — Arm-Schweiß vom Laufen ist ekkrin, geruchsneutral."
- **Feedback (B1, 200 Zeichen):** "Nein — apokrine Drüsen sind nur an **Achsel, Genital, Mamille, Ohr**. Überall sonst ekkrine. Darum: Arm-Schweiß beim Laufen ist geruchsneutral. Achsel-Schweiß riecht, weil er apokrin ist."

**D2: "Sebum und Schweiß sind dasselbe"**
- **Fachbegriff:** Sekret-Vermischungs-Fehler
- **Feedback (C1, 230 Zeichen):** "Nein — **Sebum** ist **Fett** (Triglyceride, Fettsäuren) aus Talgdrüsen. **Schweiß** ist **Wasser** mit Salz/Harnstoff aus Schweißdrüsen. Beide zusammen bilden den Hydrolipidfilm — aber sie sind unterschiedliche Sekrete. Merke: Sebum = fettig, Sudor = wässrig."
- **Feedback (B1, 200 Zeichen):** "Nein — **Sebum** ist **Fett** aus Talgdrüsen. **Schweiß** ist **Wasser mit Salz** aus Schweißdrüsen. Beide zusammen machen den Schutz-Film. Merke: Sebum = Fett. Schweiß = Wasser."

**D3: "Apokrin-Schweiß riecht sofort streng"**
- **Fachbegriff:** Geruchs-Sofort-Irrtum
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — apokriner Schweiß ist **frisch geruchlos**. Erst **Hautbakterien** (v.a. Corynebakterien) zersetzen Eiweiße und Fettsäuren darin — dabei entsteht der typische Geruch. Deshalb helfen antibakterielle Deos oder Syndets: sie reduzieren die Bakterienlast."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — apokriner Schweiß ist zuerst **geruchlos**. Erst die **Hautbakterien** machen den Geruch, wenn sie den Schweiß zersetzen. Darum helfen antibakterielle Deos und waschen mit pH 5,5 Produkten — weniger Bakterien = weniger Geruch."

### Richtig-Feedback

**C1 (240 Zeichen):** "Sehr gut. Talg- und Schweißdrüsen bilden zusammen den Hydrolipidfilm. Pflegerelevant: Bei Akne (zu viel Talg) → Reinigung + Wirkstoffe. Bei Altershaut (zu wenig Talg) → Rückfettung. Bei Hautfalten mit viel Schweiß → Trocken halten, Intertrigo-Prophylaxe."

**B1 (215 Zeichen):** "Sehr gut. Talgdrüsen (Fett) und Schweißdrüsen (Wasser) bilden den Schutz-Film. In der Pflege: Bei Akne → besser reinigen. Bei alter Haut → Fett-Creme. Bei Hautfalten mit viel Schweiß → trocken halten (sonst Intertrigo)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Unterscheide Talgdrüsen, ekkrine und apokrine Schweißdrüsen (Sekret, Lage, Funktion)."
- **Rückseite:** "Talgdrüsen: Sebum (Fett), holokrin, in Haarfollikel, überall außer Handinnenflächen/Fußsohle. Ekkrine Schweißdrüsen: Sudor (Wasser+Salz), merokrin, überall, Temperaturregulation. Apokrine: Proteinreich, nur Achsel/Genital/Mamille, Geruch durch Bakterien, aktiv ab Pubertät."
- **Kategorie:** fachbegriff

---

## Baustein 15: hautreinigung-temperatur

### Metadaten
- **bausteinId:** haut-reinigung-temperatur
- **bloomLevel:** 4
- **wissensart:** handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-15]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient steht unter einer heißen Dusche (42 °C). Was passiert mit seiner Haut? Und wäre 20 °C besser? Warum ist beides problematisch?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "**Ideal: 32–37 °C** Wasser (körperwarm). Heißes Wasser (>40 °C) löst Lipide und Sebum → Barrieredefekt. Zu kaltes Wasser (<20 °C) beeinträchtigt periphere Durchblutung. Waschdauer **< 5 Min**. Empfindliche Haut: eher kurz + lauwarm als lang + heiß."

**B1 (225 Zeichen):** "Die richtige Wasser-Temperatur zum Waschen: **32–37 °C** (körperwarm). So fühlt sich Wasser am Arm **nicht heiß und nicht kalt** an.
- Zu heiß (über 40 °C): Macht die Haut trocken
- Zu kalt (unter 20 °C): Schlechte Durchblutung
- **Kurz waschen**: unter 5 Minuten"

- **Step-Typ:** slider (Temperatur-Skala: empfohlenen Bereich auswählen)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"Die Wahl von Wassertemperatur und Waschdauer beeinflusst die Hautbarriere direkt.

**Ideale Wassertemperatur: 32–37 °C** (körperwarm, ähnlich der Hautoberflächentemperatur ~32 °C).

**Warum zu heiß schadet:**
- Oberflächenlipide werden aus der Hornschicht ausgewaschen (Lipide sind bei 38–40 °C flüssig)
- Sebum wird emulgiert und weggewaschen → Säureschutzmantel zerstört
- Vasodilatation → Juckreiz, evtl. Kreislaufbelastung
- Bei >42 °C **Verbrühungsgefahr** (vor allem bei Neuropathie, Demenz, Säuglingen)

**Warum zu kalt schadet:**
- Starke Vasokonstriktion → schlechte Durchblutung, Schmerz
- Bei langem Einwirken: Hypothermierisiko (Kinder, Alte)
- Unangenehm → Patient wehrt sich → Agitation bei Demenz

**Waschdauer:**
- Duschen **< 5 Min**, Vollbad **< 15 Min**
- Bei trockener/sensibler Haut: nur **Teilwäsche** ausreichend
- Kein tägliches Vollbad bei Altershaut!

**Sicherheit:**
- Wassertemperatur **vor** Wasserkontakt mit Innenarm/Ellenbeuge prüfen
- Bei Neuropathie (z.B. Diabetes): Patient kann Hitze nicht spüren — hohe Verbrühungsgefahr
- Thermostat-Armatur empfohlen (max. 40 °C)"

**B1 (640 Zeichen):**
"Die richtige Temperatur und Zeit beim Waschen ist wichtig.

**Ideal: 32–37 °C** (körperwarm). Das fühlt sich am Arm **nicht heiß und nicht kalt** an.

**Zu heiß (über 40 °C):**
- Das **Fett** in der Haut wird weggewaschen → Haut wird trocken
- Der Schutz-Film (pH 5,5) geht kaputt
- **Verbrennungs-Gefahr** — besonders bei Menschen mit Diabetes oder Demenz, die Hitze nicht gut fühlen

**Zu kalt (unter 20 °C):**
- Blutgefäße werden eng → schlechte Durchblutung
- Der Patient friert → wehrt sich
- Alte Menschen oder Kinder können **unterkühlen**

**Waschzeit:**
- **Duschen: unter 5 Minuten**
- **Baden: unter 15 Minuten**
- Bei trockener oder empfindlicher Haut: nur **Teil-Wäsche** reicht
- **Nicht jeden Tag ganz waschen** bei alten Menschen

**Wichtig für die Sicherheit:**
- Temperatur **vorher** am Innen-Arm prüfen
- Bei Diabetes oder Demenz: Der Patient spürt Hitze vielleicht nicht → **du** musst prüfen"

- **Erklärungs-Step:** stepType `stepbystep` (Waschablauf: Temperatur prüfen → waschen → abtrocknen)
- **Glossar-Begriffe:** [Vasodilatation, Vasokonstriktion, Neuropathie, Sebostase]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Heißes Wasser reinigt die Haut besser"**
- **Fachbegriff:** Hitze-Reinigungs-Irrtum
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — heißes Wasser (>40 °C) wäscht mehr **körpereigene** Fette aus als Schmutz. Der Säureschutzmantel wird zerstört, die Haut trocken. Für Reinigung braucht es **Tenside** (Seife/Syndet), nicht Hitze. Merke: Lauwarm + Syndet > heiß + Wasser."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — heißes Wasser wäscht das **gute Fett** der Haut weg. Die Haut wird trocken. Für Sauberkeit brauchst du **Seife oder Syndet**, nicht Hitze. Merke: Lauwarm + Syndet ist besser als heiß."

**D2: "Tägliches Vollbad ist gut für die Hygiene alter Menschen"**
- **Fachbegriff:** Tägliches-Bad-Dogma
- **Feedback (C1, 260 Zeichen):** "Nein — bei Altershaut ist tägliches Vollbad **kontraproduktiv**: Sebostase, Juckreiz, Barrierestörung, Ekzeme. Empfehlung DGG: 1–2× wöchentlich Ganzkörperwäsche, sonst Intim- und Teilwäsche (Achsel, Hände, Füße). Tägliche **Geruchsquellen gezielt** reinigen, nicht ganzen Körper."
- **Feedback (B1, 230 Zeichen):** "Nein — alte Menschen brauchen **nicht** jeden Tag ein Vollbad. Das macht die Haut trocken und juckt. Regel: **1–2 Mal pro Woche** ganz waschen, sonst nur Teil-Wäsche (Intim, Achseln, Hände, Füße). So bleibt die Haut gesund."

**D3: "Bei Patienten mit Diabetes ist die Wassertemperatur egal"**
- **Fachbegriff:** Neuropathie-Ignoranz
- **Feedback (C1, 255 Zeichen):** "Nein — bei **Polyneuropathie** (Diabetes, chronischer Alkoholabusus) ist die **Temperaturempfindung gestört**. Der Patient spürt Verbrennungen nicht sofort — **schwere Verbrühungen** sind dokumentiert. Pflegepflicht: Temperatur **immer** selbst prüfen (Ellenbeuge), Thermostatarmatur bevorzugen."
- **Feedback (B1, 225 Zeichen):** "Nein — Menschen mit **Diabetes** fühlen oft Hitze **nicht** gut an den Füßen und Händen (Nerven kaputt). Sie verbrennen sich, ohne es zu merken. Darum: Du musst die Temperatur **immer** vorher prüfen. Am besten mit einem Thermostat."

### Richtig-Feedback

**C1 (255 Zeichen):** "Ausgezeichnet. 32–37 °C und kurze Waschzeit schützen Hautbarriere und Kreislauf. Besonders kritisch bei Neuropathie und Altershaut — hier gilt: Temperatur vor Wasserkontakt prüfen, Teilwäsche bevorzugen, bei Vollbad selten + kurz. So verhinderst du Verbrühungen und Hautausdünnung."

**B1 (225 Zeichen):** "Sehr gut. 32–37 °C und kurz (unter 5 Min) sind die Regel. Wichtig: Temperatur **vorher prüfen** — besonders bei Diabetes und alten Menschen. Bei alter Haut nur 1–2 Mal pro Woche ganz waschen. So bleibt die Haut gesund."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Wassertemperatur und Waschdauer sind für Körperpflege empfohlen, und warum ist das wichtig bei Neuropathie?"
- **Rückseite:** "32–37 °C (körperwarm), Duschen < 5 Min, Vollbad < 15 Min. Höher schädigt Barriere, tiefer Kreislauf. Bei Polyneuropathie (Diabetes): Verbrühungsgefahr durch fehlende Temperaturempfindung → Temperatur vorher an Ellenbeuge prüfen, Thermostatarmatur."
- **Kategorie:** handlung

---

## Baustein 16: seife-vs-syndet

### Metadaten
- **bausteinId:** haut-seife-vs-syndet
- **bloomLevel:** 4
- **wissensart:** handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-16]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient hat sehr trockene Haut. Er fragt: 'Welche Seife soll ich nehmen?' Was antwortest du — und warum ist die Frage falsch gestellt?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "**Seife** (alkalisch, pH 9–10) ist ein Fettsäuresalz. **Syndet** (synthetisches Detergens) ist pH-anpassbar (meist 5,5). Für empfindliche/trockene/pflegebedürftige Haut: **Syndet**. Klassische Seife nur bei gesunder, fettiger Haut — und selten. (Schaefer/Redelmeier 1996)"

**B1 (235 Zeichen):** "Es gibt 2 Reiniger:
- **Seife**: pH 9–10 (basisch) — macht die Haut trocken
- **Syndet**: pH 5,5 (wie die Haut) — schont die Haut

In der Pflege fast immer: **Syndet**. Klassische Seife nur bei gesunder, fettiger Haut — und selten."

- **Step-Typ:** comparison (Seife vs. Syndet in 2 Spalten)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Klassische **Seife** und moderne **Syndets** unterscheiden sich chemisch und in ihrer Hautverträglichkeit deutlich.

**Seife (Traditional Soap):**
- Chemisch: Natrium- oder Kaliumsalz höherer Fettsäuren (Verseifung aus Fett + Lauge)
- pH: **9–10** (stark alkalisch)
- Wirkung: Löst Schmutz + Hautfette effektiv
- Problem: Neutralisiert den Säureschutzmantel; bei häufiger Nutzung Barriereschaden
- Moderne 'rückfettende Seifen' sind oft auch pH-erhöht

**Syndet (Synthetic Detergent):**
- Chemisch: Synthetische Tenside (z.B. Natriumlaurylsulfoacetat)
- pH: **anpassbar, meist 5,5** (hautneutral)
- Wirkung: Reinigt ohne Säureschutzmantel zu zerstören
- Oft mit rückfettenden Zusätzen (Öle, Ceramide, Panthenol)
- Formen: Waschstück, Dusch-/Waschgel, Waschlotion

**Pflegepraxis:**
- **Altershaut, Neurodermitis, Diabetes, Inkontinenz, Hautdefekte** → **immer Syndet**
- **Gesunde junge Haut** → auch Seife möglich, aber sparsam
- **Nach Wäsche rückfetten** (W/O oder O/W je nach Hauttyp)
- Antibakterielle Seife (Triclosan etc.) **nicht routinemäßig** — fördert Resistenzen und stört Hautflora

**Merke:** 'pH-neutral' heißt in Pflegeprodukten meist **pH 5,5 (haut-neutral)**, nicht pH 7 (wasser-neutral)."

**B1 (630 Zeichen):**
"Es gibt **Seife** und **Syndet**. Sie sind nicht gleich.

**Seife:**
- Chemisch: Fett + Lauge = Seife
- pH: **9–10** (basisch, nicht wie die Haut)
- Reinigt sehr stark, auch gutes Fett weg
- Macht die Haut trocken bei oft benutzen

**Syndet (Synthetic Detergent):**
- Chemisch: Moderne Wasch-Stoffe
- pH: **5,5** (wie die Haut)
- Reinigt, aber nicht zu stark
- Oft mit zusätzlichem Fett oder Panthenol

**In der Pflege:**
- Alte Menschen, Diabetes, Neurodermitis, Inkontinenz, Wunden → **immer Syndet**
- Gesunde Haut → Seife ist auch ok, aber selten
- **Nach dem Waschen: Haut mit Creme pflegen**
- **Keine Desinfektions-Seife** im Alltag — braucht die Haut nicht und macht Keime nur stärker

**Wichtig:** 'pH-neutral' auf Packungen heißt meist **pH 5,5** (wie die Haut) — **nicht** pH 7 (wie Wasser)."

- **Erklärungs-Step:** stepType `comparison` (Seife vs. Syndet — 3 Spalten: Eigenschaft, Seife, Syndet)
- **Glossar-Begriffe:** [Seife, Syndet, Tensid, Verseifung, pH-Wert, Hautbarriere]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Syndet ist eine moderne Form von Seife"**
- **Fachbegriff:** Kategorisierungs-Fehler
- **Feedback (C1, 235 Zeichen):** "Nicht ganz — Syndet ist **chemisch keine** Seife, sondern ein synthetisches Tensid. Der Unterschied ist fundamental: Seife ist Fettsäuresalz (alkalisch), Syndet ist ein Waschstoff (pH-anpassbar). Darum kann Syndet pH 5,5 haben — Seife nicht. Merke: Syndet ≠ Seife."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — Syndet ist **nicht** eine andere Seife. Es ist chemisch etwas **Anderes**. Seife ist basisch. Syndet ist wie die Haut (pH 5,5). Darum verträgt die Haut Syndet besser. Merke: Syndet ≠ Seife."

**D2: "Antibakterielle Seife ist besonders gut in der Pflege"**
- **Fachbegriff:** Antibakteriell-Übereifer
- **Feedback (C1, 255 Zeichen):** "Nein — antibakterielle Seifen (z.B. Triclosan) stören die **natürliche Hautflora** und fördern **Resistenzen** bei Krankheitserregern. Für normale Pflege **nicht empfohlen** (WHO, RKI). Ausnahme: Spezielle Indikationen wie MRSA-Dekontamination auf ärztliche Anordnung. Merke: Normale Hygiene = Syndet + Händewaschen."
- **Feedback (B1, 220 Zeichen):** "Nein — antibakterielle Seife macht Bakterien **stärker** (Resistenz). Sie stört auch die gesunden Haut-Bakterien. Für normale Pflege **nicht** nehmen. Nur bei besonderen Gründen (z.B. MRSA) und nur auf Arzt-Anweisung. Merke: Normal = Syndet reicht."

**D3: "Bei sehr schmutziger Haut ist Seife besser"**
- **Fachbegriff:** Schmutz-Eskalation
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — auch stark verschmutzte Haut wird mit **Syndet plus lauwarmem Wasser und Zeit** sauber. Bei hartnäckigen Verschmutzungen: spezielle **pflegende Handreiniger** oder Öle (z.B. Baby-Öl bei Inkontinenz-Rückständen). Aggressive Seife bringt kurzfristig mehr Sauberkeit, aber langfristig Hautschäden."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — auch schmutzige Haut wird mit **Syndet + Zeit** sauber. Bei starken Verschmutzungen: spezielle Hand-Reiniger oder Öl (z.B. Baby-Öl bei Stuhl im Genital-Bereich). Starke Seife macht kurzfristig sauber, langfristig kaputt."

### Richtig-Feedback

**C1 (245 Zeichen):** "Exzellent. Syndet (pH 5,5) ist in der Pflege Standard — besonders bei Altershaut, Inkontinenz, Neurodermitis und Diabetes. Klassische Seife nur bei intakter Haut und selten. Nach Wäsche immer rückfetten mit der passenden Emulsion (O/W normal, W/O trocken)."

**B1 (215 Zeichen):** "Sehr gut. In der Pflege: **Syndet** (pH 5,5) ist Standard. Seife nur bei gesunder Haut und selten. Nach dem Waschen: immer Creme benutzen. O/W-Creme für normale Haut. W/O-Creme für trockene Haut."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist Syndet in der Pflege fast immer besser als Seife? Nenne 2 Gründe und 1 Ausnahme."
- **Rückseite:** "Syndet = synthetisches Detergens, pH anpassbar (meist 5,5 = hautneutral). Zerstört den Säureschutzmantel nicht. Seife = Fettsäuresalz, pH 9–10 (alkalisch), trocknet aus. Ausnahme: Gesunde, fettige Haut bei seltenem Gebrauch. Keine antibakteriellen Seifen ohne Indikation."
- **Kategorie:** handlung

---

## Baustein 17: o-w-vs-w-o-emulsionen

### Metadaten
- **bausteinId:** haut-o-w-vs-w-o-emulsionen
- **bloomLevel:** 4
- **wissensart:** handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-17]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient schwitzt viel und hat normale Haut. Ein anderer Patient ist alt, die Haut ist **sehr trocken und rau**. Beide brauchen eine Creme. Welche **Art** Creme für welchen Patienten — und warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "**O/W** (Öl in Wasser, außen Wasser): leicht, kühlend, zieht schnell ein → **normale/feuchte/schwitzende** Haut. **W/O** (Wasser in Öl, außen Öl): fetthaltig, okklusiv, bleibt länger liegen → **trockene/rissige** Haut, Altershaut, Wetterschutz. Regel: 'feucht auf trocken, fett auf feucht'."

**B1 (250 Zeichen):** "Es gibt 2 Creme-Arten:
- **O/W-Creme** (Öl in Wasser): **leicht**, zieht schnell ein. Für **normale** und **schwitzende** Haut.
- **W/O-Creme** (Wasser in Öl): **fetter**, bleibt länger auf der Haut. Für **trockene**, raue Haut und alte Menschen."

- **Step-Typ:** matching (Hautzustand ↔ passende Emulsion)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"Pflegeprodukte sind meist **Emulsionen** — Mischungen aus Wasser und Öl, die sich normalerweise trennen würden und durch Emulgatoren zusammengehalten werden. Zwei Grundtypen:

**O/W-Emulsion (Öl-in-Wasser):**
- **Außen Wasser**, innen Öltropfen
- Leicht, spritzig, zieht schnell ein, kühlender Verdunstungseffekt
- Weniger fettig, leichter abwaschbar
- **Indikation:** gesunde Haut, feuchte/schwitzende Haut, Gesicht bei normaler Haut, Sommer
- Beispiele: Milch, Lotion, leichte Tagescreme

**W/O-Emulsion (Wasser-in-Öl):**
- **Außen Öl**, innen Wassertröpfchen
- Fetthaltig, **okklusiv** (bildet Filmschicht), zieht langsamer ein
- Spendet Fett, schützt vor Verdunstung
- **Indikation:** sehr trockene Haut, Altershaut, Neurodermitis (im Schub), Wetterschutz (Winter, Wind), nach Baden
- Beispiele: Fettcreme, Kältecreme, Nachtcreme für trockene Haut

**Regel: 'feucht auf trocken, fett auf feucht'** — aber das ist verkürzt. Besser:
- **Trockene Haut → W/O** (Fett zurückgeben)
- **Feuchte/normale Haut → O/W** (Feuchtigkeit + leichtes Einziehen)
- **Inkontinenz-Hautschutz:** meist W/O mit Zinkoxid (bildet Schutzfilm)

**Zusätze:** Urea (feuchtigkeitsbindend), Ceramide (Barrierereparatur), Panthenol (beruhigend), Glycerin (hygroskopisch)."

**B1 (640 Zeichen):**
"Cremes bestehen aus **Wasser** und **Öl**. Beides kann sich nicht normal mischen. Deswegen gibt es Emulgatoren — sie halten alles zusammen. Zwei Arten:

**O/W-Creme** (Öl-in-Wasser — außen ist Wasser):
- **Leicht**, zieht schnell ein
- Fühlt sich **kühl** an
- Nicht so fettig, leicht abzuwaschen
- **Gut für:** normale Haut, schwitzende Haut, Gesicht, Sommer

**W/O-Creme** (Wasser-in-Öl — außen ist Öl):
- **Sehr fett**, bleibt länger auf der Haut
- Macht einen **Schutz-Film**
- Zieht langsamer ein
- **Gut für:** sehr trockene Haut, alte Menschen, rissige Haut, Winter, Wind, nach dem Baden

**Regel:** **Fett auf trocken. Leicht auf feucht.**

Bei **Inkontinenz** → meist W/O-Creme mit **Zinkoxid** — das gibt Schutz vor Urin.

**Zusätze in Cremes:**
- **Urea**: bindet Wasser
- **Ceramide**: reparieren die Haut
- **Panthenol**: beruhigt
- **Glycerin**: zieht Wasser an"

- **Erklärungs-Step:** stepType `comparison` (O/W vs. W/O — 4 Merkmale, Einsatzgebiet)
- **Glossar-Begriffe:** [Emulsion, Emulgator, O/W, W/O, Okklusion, Urea, Ceramid, Zinkoxid]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Je fetter die Creme, desto besser für alle Patienten"**
- **Fachbegriff:** Fett-Eskalation
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — fette W/O-Cremes sind **kontraproduktiv** bei schwitzender oder feuchter Haut: Sie fördern Wärmestau und Mazeration (z.B. unter der Brust, Leiste) → **Intertrigo**-Risiko. Regel: Hautzustand bestimmt Produkt. Feucht → O/W. Trocken → W/O. Merke: Mehr Fett ist nicht immer besser."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — fette Creme ist **nicht** immer gut. Bei **schwitzender Haut** oder in **Hautfalten** macht sie die Haut **nass und wund** → Intertrigo. Regel: **Nass → leichte Creme**. **Trocken → fette Creme**. Nicht einfach immer mehr Fett."

**D2: "O/W und W/O sind nur Marketing-Begriffe"**
- **Fachbegriff:** Marketing-Reduktion
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — O/W und W/O sind **pharmazeutische Begriffe** (DAB — Deutsches Arzneibuch) mit klar definierter Phasenverteilung. Sie bestimmen **Hautverhalten, Einziehen, Okklusion**. Der Unterschied ist messbar mit Leitfähigkeit: O/W leitet Strom (wässrig außen), W/O nicht."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — O/W und W/O sind keine Werbung. Es ist ein **echter Unterschied** in der Chemie. Man kann es sogar messen: O/W leitet Strom (Wasser außen), W/O nicht. Das macht die Creme-Wirkung **unterschiedlich**."

**D3: "Zinkoxid hat nur kosmetische Funktion"**
- **Fachbegriff:** Zinkoxid-Bagatellisierung
- **Feedback (C1, 250 Zeichen):** "Nein — Zinkoxid bildet eine **physikalische Schutzbarriere** auf der Haut. Es reflektiert UV-Strahlen (Sonnenschutz), absorbiert Feuchtigkeit, wirkt mild **adstringierend und antiseptisch**. In der Inkontinenzpflege zentral: Hautschutz vor Urin/Stuhl. Merke: Zinkoxid ist eine Wirksubstanz, kein Füllstoff."
- **Feedback (B1, 220 Zeichen):** "Nein — Zinkoxid **schützt** die Haut aktiv: vor **Urin** und **Stuhl**, vor **UV-Strahlen**, vor **Feuchtigkeit**. Es wirkt leicht **zusammenziehend** und **keim-hemmend**. In der Inkontinenz-Pflege ist es **sehr wichtig**. Merke: Zinkoxid = aktiver Schutz."

### Richtig-Feedback

**C1 (255 Zeichen):** "Exzellent. Die Wahl zwischen O/W und W/O richtet sich nach Hautzustand: O/W bei feuchter/normaler Haut (leicht, kühlend), W/O bei trockener Haut (okklusiv, rückfettend). Die Regel 'Fett auf feucht, feucht auf trocken' ist eine Grobvereinfachung — die aktuelle Lehre: Zustand bestimmt die Wahl."

**B1 (230 Zeichen):** "Sehr gut. O/W für normale oder schwitzende Haut (leicht, zieht schnell ein). W/O für trockene Haut und alte Menschen (fett, Schutz). Bei Inkontinenz: W/O mit Zinkoxid. Regel: **Feucht → O/W, trocken → W/O**."

### Verknüpfte Karteikarte
- **Vorderseite:** "Unterscheide O/W und W/O-Emulsion: Aufbau, Gefühl, Indikation."
- **Rückseite:** "O/W (Öl in Wasser, außen Wasser): leicht, zieht schnell ein, kühlend → normale/feuchte Haut. W/O (Wasser in Öl, außen Öl): fett, okklusiv, Schutzfilm → trockene Haut, Altershaut, Inkontinenz. Regel: feucht→O/W, trocken→W/O."
- **Kategorie:** fachbegriff

---

## Baustein 18: hautpflegeprodukte

### Metadaten
- **bausteinId:** haut-pflegeprodukte
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-18]

### Stufe 1 — Denkfrage
- **Frage:** "Du findest 4 Dosen im Pflegeschrank: Creme, Lotion, Salbe, Öl. Welches Produkt hat am meisten **Wasser**, welches am meisten **Fett** — und welches nimmst du wann?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (285 Zeichen):** "Stufenweise von wässrig zu fett: **Lotion** (flüssig, sehr wässrig — Sommer, große Flächen), **Creme** (Emulsion — Standard, Alltag), **Salbe** (sehr fett, kaum Wasser — sehr trockene, rissige Haut, Okklusion), **Öl** (reines Öl oder Ölbad — Babypflege, sehr trockene Haut, Reinigung bei Stuhl)."

**B1 (250 Zeichen):** "Von **viel Wasser** (leicht) zu **viel Fett** (dick):
- **Lotion**: flüssig, schnell und leicht, für den Sommer
- **Creme**: Standard, für den Alltag
- **Salbe**: sehr fett, für sehr trockene Haut
- **Öl**: nur Öl, für Babys oder sehr trockene Haut"

- **Step-Typ:** sorting (4 Produkte nach Wassergehalt sortieren)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"Hautpflegeprodukte werden nach Wasser-/Fettgehalt und Konsistenz eingeteilt. Die richtige Wahl hängt von Hautzustand, Körperregion und Witterung ab.

**Lotion (Milch):**
- Konsistenz: flüssig, spritzig
- Meist O/W-Emulsion mit **hohem Wasseranteil**
- Zieht schnell ein, kaum rückfettend
- **Einsatz:** Körperpflege bei normaler Haut, Sommer, große Flächen (Rücken, Beine)

**Creme:**
- Konsistenz: halbfest, streichfähig
- Emulsion (O/W oder W/O)
- Guter Kompromiss aus Feuchtigkeit und Fett
- **Einsatz:** Alltagspflege, Gesicht, Dekolleté, Hände

**Salbe:**
- Konsistenz: sehr fett, zäh
- Meist **fett- oder lipidbasiert**, kaum Wasser
- Stark **okklusiv** — bildet Schutzfilm, verhindert Wasserverlust (TEWL)
- **Einsatz:** Sehr trockene Haut, Neurodermitis, Rhagaden (Risse), Wetterschutz, Nachtpflege
- Unter Verband: okklusive Salben nur gezielt einsetzen — Wärmestau, Bakterienwachstum möglich

**Öl:**
- Reines Pflanzenöl (z.B. Mandel, Jojoba, Olivenöl — auch Paraffinöl)
- **Einsatz:**
  - Säuglingspflege (Ölbad, Massage)
  - Reinigung bei starken Stuhlrückständen (Inkontinenz)
  - Erste Hilfe bei sehr trockener Haut
  - Lösen von Pflastern

**Grundregel:** Je **trockener und älter** die Haut, desto **fetter** das Produkt. Je **wärmer und feuchter** die Umgebung, desto **leichter** das Produkt."

**B1 (660 Zeichen):**
"Pflegeprodukte nach **Wasser** und **Fett** sortiert — von leicht zu fett:

**1. Lotion (Milch):**
- Sehr **flüssig**, viel Wasser
- Zieht schnell ein, kaum Fett
- **Für:** normale Haut, große Flächen (Rücken, Beine), Sommer

**2. Creme:**
- **Halbfest**, gut streichbar
- Mischung aus Wasser und Fett
- **Für:** Alltag, Gesicht, Hände

**3. Salbe:**
- **Sehr fett**, fast kein Wasser
- Macht einen **Schutz-Film**
- **Für:** sehr trockene Haut, rissige Haut, Winter, Nacht

**4. Öl:**
- Nur Öl (z.B. Mandel-Öl, Oliven-Öl, Baby-Öl)
- **Für:**
  - **Babys** (Bad, Massage)
  - **Reinigung** bei starkem Stuhl
  - Sehr trockene Haut
  - Pflaster lösen

**Regel:** Je **trockener die Haut**, desto **mehr Fett**. Je **wärmer das Wetter**, desto **leichter das Produkt**.

**Wichtig:** Salben unter Verband nur gezielt — sonst wird es zu warm und Bakterien wachsen."

- **Erklärungs-Step:** stepType `comparison` (4 Produkte × Wassergehalt × Indikation)
- **Glossar-Begriffe:** [Lotion, Creme, Salbe, Öl, Okklusion, TEWL, Rhagaden]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Salben sind immer am besten, weil sie am meisten schützen"**
- **Fachbegriff:** Salben-Übereifer
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — Salben sind stark okklusiv: Bei **feuchter, schwitzender Haut** oder in **Hautfalten** verursachen sie Wärmestau und Mazeration → Intertrigo, Infektneigung. Auch unter Verband kritisch. Richtig: **Salbe auf sehr trockene, nicht-feuchte Haut**. Regel: Zustand bestimmt Produkt, nicht 'mehr hilft mehr'."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Salbe ist **nicht** immer gut. Bei **schwitzender** Haut oder in **Hautfalten** macht sie die Haut **nass und wund** → Intertrigo. Auch unter Verband: zu warm. Salbe nur auf **sehr trockene, nicht schwitzende** Haut."

**D2: "Öl und Creme sind austauschbar"**
- **Fachbegriff:** Produkt-Austausch-Fehler
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — Öl ist nur **Fett ohne Wasser**; Creme ist eine **Emulsion** mit Wasser + Fett + Emulgatoren + Wirkstoffen. Bei Inkontinenz-Reinigung ist Öl ideal (reinigt schonend), bei täglicher Pflege braucht man eine Creme (mit Wasser-Phase für Feuchtigkeit). Merke: Öl = Reinigung/Babypflege, Creme = Pflege."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — Öl ist nur **Fett**. Creme ist **Fett + Wasser + Zusätze**. Öl ist gut zum **Reinigen** (z.B. Babypopo mit Stuhl) oder für **Babys**. Creme ist für die **tägliche Pflege**. Beide sind **nicht gleich**."

**D3: "Lotionen sind keine echten Pflegeprodukte"**
- **Fachbegriff:** Lotion-Abwertung
- **Feedback (C1, 235 Zeichen):** "Nicht ganz — Lotionen sind **vollwertige Pflegeprodukte** mit wässrigem Hauptanteil. Für normale Haut im Sommer oder bei Schweißneigung **besser geeignet** als fette Cremes. Vorteile: leichte Anwendung auf großen Flächen, schnelles Einziehen, wenig Rückstände. Merke: Lotion ≠ 'schlechter', sondern 'passt zu anderer Haut'."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — Lotion ist **genauso eine Pflege** wie Creme. Sie hat nur mehr Wasser. Für **normale Haut** im Sommer oder bei viel Schwitzen ist Lotion oft **besser** als Creme. Merke: Lotion passt zu anderer Haut — nicht schlechter."

### Richtig-Feedback

**C1 (250 Zeichen):** "Sehr gut. Lotion → Creme → Salbe → Öl — von wässrig zu fett. Die Wahl richtet sich nach Hautzustand, Körperregion, Jahreszeit. In der Pflege: Immer die richtige Konsistenz an die richtige Stelle — Inkontinenz-Hautschutz (W/O + Zink), Altershaut (Creme/Salbe), Sommer-Lotion bei schwitzenden Patienten."

**B1 (225 Zeichen):** "Sehr gut. Von leicht zu fett: Lotion → Creme → Salbe → Öl. Wähle passend zum Hautzustand: Trocken → fett. Schwitzt → leicht. Bei Inkontinenz: W/O-Creme mit Zink. Bei Babys oder starkem Stuhl: Öl. So versorgst du die Haut richtig."

### Verknüpfte Karteikarte
- **Vorderseite:** "Sortiere Lotion, Creme, Salbe und Öl nach Wassergehalt und nenne je 1 Indikation."
- **Rückseite:** "Viel Wasser → wenig Wasser: Lotion (große Flächen, Sommer) > Creme (Alltag) > Salbe (sehr trockene Haut, Rhagaden) > Öl (Babypflege, Stuhl-Reinigung, Pflaster lösen). Regel: Je trockener die Haut, desto fetter das Produkt."
- **Kategorie:** handlung

---



