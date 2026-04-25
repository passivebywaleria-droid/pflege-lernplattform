# Wissensbausteine: Ganzkörperpflege

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `ganzkörperpflege` |
| ceId | `ce-02` |
| cluster | C (Körperpflege & Prophylaxen) |
| wissensart | handlung |
| kompetenzbereich | I.1 |
| geschaetzteUE | 12 |
| zielzeitMin | 297 (12 UE × 45 × 0,55) |
| bausteineAnzahl | 21 |
| voraussetzungen | `haut` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung (Ziel 20/55/25):**
- Bloom 1-2: 4 Bausteine (19%) — Grundprinzipien, Definitionen
- Bloom 3-4: 12 Bausteine (57%) — Anwendung, Reihenfolgen, Technik, Assessments
- Bloom 5-6: 5 Bausteine (24%) — Ressourcenorientierung, Fallentscheidungen, Reflexion

**Primärquellen:**
- Juchli L. (1987): Grundlagen der Pflege — ATLs nach Roper/Logan/Tierney, adaptiert Juchli
- WHO (2009): "My 5 Moments for Hand Hygiene" — SAVE LIVES Campaign
- RKI/KRINKO (2022): Händehygiene in Einrichtungen des Gesundheitswesens — Bundesgesundheitsblatt
- DNQP (2019): Expertenstandard "Förderung der Mundgesundheit in der Pflege"
- DNQP (2017/2024): Expertenstandard Dekubitusprophylaxe (für Hautbeobachtung)
- Bobath B. (1990): Adult Hemiplegia — Evaluation and Treatment
- Fröhlich A. (1998): Basale Stimulation
- AWMF-S3-Leitlinie NVL Typ-2-Diabetes (2023): Fußsyndrom, Podologie
- Deutsche Dermatologische Gesellschaft (2020): S2k-Leitlinie Erysipel

---

## Baustein 1: grundprinzipien-intimsphaere

### Metadaten
- **bausteinId:** ganzkoerperpflege-grundprinzipien
- **bloomLevel:** 2
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, du bist krank im Bett und eine fremde Person soll dich waschen. Welche drei Dinge wären dir am wichtigsten, damit du dich nicht unwohl fühlst?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Ganzkörperpflege berührt die Intimsphäre. Leitplanken: **Sichtschutz** (Tür/Paravent), **Raumtemperatur** 22-24 °C, **Wassertemperatur** 37-40 °C, **Vorlieben respektieren** (Seife, Reihenfolge) und gleichgeschlechtliche Pflege, wenn gewünscht."

**B1 (220 Zeichen):** "Waschen ist sehr privat. Wichtig ist: **Die Tür zu**, damit niemand reinschaut. Das Zimmer warm (22-24 °C). Das Wasser angenehm warm (37-40 °C). Frage, was der Patient mag. Wenn gewünscht: Mann wäscht Mann, Frau wäscht Frau."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Ganzkörperpflege ist eine der intimsten Handlungen in der Pflege. Du dringst in die Privatsphäre eines Menschen ein — oft fremd, oft abhängig. Die Leitprinzipien schützen die Würde:

**Sichtschutz**: Tür schließen, Paravent bei Mehrbettzimmern nutzen, Fenster mit Sichtschutz versehen. Niemand darf unerwartet reinsehen.

**Raumtemperatur 22-24 °C**: Ein nasser Körper kühlt schnell aus. Zu kalt = Gänsehaut, Unwohlsein, bei alten Menschen Kreislaufprobleme.

**Wassertemperatur 37-40 °C**: Am eigenen Unterarm prüfen (nicht am Handrücken — dort ist die Haut weniger empfindlich). Bei Sensibilitätsstörungen (Diabetes, Schlaganfall) immer mit Thermometer.

**Vorlieben respektieren**: Welche Seife? Welche Reihenfolge? Haarewaschen heute oder morgen? Du fragst — du entscheidest nicht allein.

**Gleichgeschlechtliche Pflege**: Immer anbieten, nicht aufzwingen. Kulturelle und religiöse Gründe ernst nehmen. (Juchli ATLs, 1987)"

**B1 (560 Zeichen):**
"Ganzkörperpflege ist sehr privat. Du machst etwas, das normalerweise niemand für einen Menschen tut. Deshalb gibt es Regeln:

**Sichtschutz**: Tür zu. Paravent im Mehrbettzimmer. Niemand darf reingucken.

**Raumtemperatur 22-24 °C**: Ein nasser Körper wird schnell kalt. Das ist unangenehm. Alte Menschen können auch Kreislauf-Probleme bekommen.

**Wassertemperatur 37-40 °C**: Prüfe mit deinem Unterarm. Bei Diabetes oder Schlaganfall: nimm ein Thermometer. Dort spürt die Haut heiß nicht richtig.

**Frage nach Vorlieben**: Welche Seife? In welcher Reihenfolge? Willst du heute Haare waschen?

**Gleichgeschlechtliche Pflege**: Wenn der Patient möchte: Mann wäscht Mann, Frau wäscht Frau. Besonders wichtig bei manchen Kulturen und Religionen."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Intimsphäre, Paravent, Sensibilitätsstörung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wassertemperatur prüft man mit dem Handrücken"**
- **Fachbegriff:** Handrücken-Irrtum
- **Feedback (C1, 220 Zeichen):** "Nicht ganz — der **Handrücken** ist weniger temperaturempfindlich als die Innenseite des Unterarms. Dort befindet sich die empfindlichere Haut, die eher unserer Körpertemperatur entspricht. Merke: Innenseite Unterarm — wie bei Babyfläschchen."
- **Feedback (B1, 180 Zeichen):** "Nicht ganz — der Handrücken spürt Wärme schlecht. Die **Innenseite vom Unterarm** ist besser. Die Haut dort ist empfindlicher. Wie bei der Babyflasche: innen prüfen, nicht außen."

**D2: "Die Raumtemperatur spielt keine große Rolle"**
- **Fachbegriff:** Temperatur-Unterschätzung
- **Feedback (C1, 240 Zeichen):** "Doch — ein nasser Körper verliert sehr schnell Wärme (Verdunstungskälte). Unter 22 °C droht Auskühlung, bei alten Menschen Kreislaufschwäche. Über 24 °C schwitzt der Patient unter der Decke. Merke: 22-24 °C schützt vor Auskühlung."
- **Feedback (B1, 195 Zeichen):** "Doch — ein nasser Körper wird schnell kalt. Unter 22 °C kühlt der Patient aus. Das ist gefährlich bei alten Menschen. Über 24 °C schwitzt er. Merke: 22-24 °C ist genau richtig."

**D3: "Gleichgeschlechtliche Pflege ist nur bei Muslimen wichtig"**
- **Fachbegriff:** Kultur-Vereinfachung
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — gleichgeschlechtliche Pflege ist eine **Frage der Würde für jeden Menschen**, unabhängig von Religion oder Kultur. Auch deutsche Patienten dürfen das wünschen. Du fragst immer, du unterstellst nichts. Merke: Die Frage gilt für alle Patienten."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — gleichgeschlechtliche Pflege ist **für jeden Menschen** eine Frage der Würde. Nicht nur bei bestimmten Religionen. Auch deutsche Patienten dürfen das wollen. Du fragst immer, du denkst nicht vorher."

### Richtig-Feedback
**C1 (240 Zeichen):** "Genau. Die drei Pfeiler der Ganzkörperpflege: Sichtschutz (Tür, Paravent), passende Temperaturen (Raum 22-24 °C, Wasser 37-40 °C) und Vorlieben des Patienten respektieren. Würde und Scham stehen immer über Effizienz. Du pflegst einen Menschen, kein Objekt."

**B1 (210 Zeichen):** "Sehr gut. Die drei wichtigsten Dinge: Tür zu (Sichtschutz), Zimmer warm und Wasser angenehm, und auf den Patienten hören. Würde ist wichtiger als Geschwindigkeit. Du wäschst einen Menschen, kein Ding."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Raum- und Wassertemperatur gilt bei der Ganzkörperpflege im Bett?"
- **Rückseite:** "Raum: 22-24 °C. Wasser: 37-40 °C (am Unterarm innen oder mit Thermometer prüfen)."
- **Kategorie:** fakt

---

## Baustein 2: reihenfolge-bettwaschung

### Metadaten
- **bausteinId:** ganzkoerperpflege-reihenfolge
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Warum solltest du bei der Bettwaschung nicht erst die Füße und dann das Gesicht waschen? Welche Reihenfolge ergibt hygienisch Sinn?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Regel: **von sauber nach schmutzig, von oben nach unten, Intim zuletzt mit frischem Wasser**. Reihenfolge: Gesicht → Haare → Ohren → Hals → Brust/Bauch → Arme → Rücken → Beine → Intim. Zwei Waschlappen: einer für Gesicht/Körper, einer für Intim."

**B1 (240 Zeichen):** "Regel: **von sauber nach schmutzig, von oben nach unten, Intimbereich zuletzt**. Reihenfolge: Gesicht → Haare → Ohren → Hals → Brust/Bauch → Arme → Rücken → Beine → Intim. Für Intim: frisches Wasser und ein extra Waschlappen."

- **Step-Typ:** sequencing (Schüler ordnet 9 Schritte)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die Reihenfolge der Ganzkörperwaschung im Bett folgt einem einfachen Prinzip: **von sauber nach schmutzig, von oben nach unten**. Das schützt den Patienten vor der Verschleppung von Keimen (z.B. aus dem Intimbereich ins Gesicht).

**Standard-Reihenfolge:**
1. **Gesicht** — nur mit klarem Wasser, keine Seife (trocknet aus)
2. **Haare** — je nach Bedarf, beachte HWS-Stellung
3. **Ohren** — nur Ohrmuschel, nichts in den Gehörgang
4. **Hals** — Hautfalten besonders beachten
5. **Brust und Bauch** — bei Frauen Unterbrustfalte
6. **Arme** — Richtung Herz (venöser Rückfluss)
7. **Rücken** — Patient auf Seite lagern, gute Gelegenheit für Dekubitus-Check
8. **Beine** — Richtung Herz
9. **Intim** — **zuletzt mit frischem Wasser und zweitem Waschlappen**

Der Intimbereich kommt zuletzt, weil dort die meiste Keimbesiedelung ist. Zweimal Wasser wechseln ist nicht übertrieben — es ist Standard. (Juchli ATLs, 1987; RKI/KRINKO 2022)"

**B1 (560 Zeichen):**
"Die Reihenfolge beim Waschen folgt einer Regel: **von oben nach unten, von sauber nach schmutzig**. So kommen keine Keime vom Intimbereich ins Gesicht.

**So läuft es ab:**
1. **Gesicht** — nur Wasser, keine Seife
2. **Haare** — wenn nötig
3. **Ohren** — nur außen, nichts in den Gehörgang
4. **Hals** — auch die Hautfalten
5. **Brust und Bauch** — bei Frauen unter der Brust
6. **Arme** — in Richtung Herz waschen
7. **Rücken** — Patient zur Seite drehen, Haut anschauen
8. **Beine** — auch in Richtung Herz
9. **Intimbereich** — **zum Schluss, mit neuem Wasser und neuem Waschlappen**

Der Intimbereich kommt zuletzt, weil dort viele Keime sind. Wasser wechseln ist Pflicht."

- **Erklärungs-Step:** stepType `reveal` (9 Schritte aufdecken)
- **Glossar-Begriffe:** [HWS, Keimbesiedelung, venöser Rückfluss, Intimpflege]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Man wäscht von den Füßen zum Kopf, weil das entspannender ist"**
- **Fachbegriff:** Falschrichtungs-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — die Regel ist **von oben nach unten, von sauber nach schmutzig**. Mit den Füßen zu beginnen, würde Keime der unteren Körperregionen nach oben tragen. Das Gesicht gehört an den Anfang, weil es der sauberste Bereich ist. Merke: Sauber vor schmutzig."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — die Regel ist **oben zuerst, unten zuletzt**. Füße zuerst würde Keime nach oben tragen. Das Gesicht ist am saubersten und kommt darum zuerst. Merke: Erst sauber, dann schmutzig."

**D2: "Ein Waschlappen reicht für den ganzen Körper"**
- **Fachbegriff:** Einwegwaschlappen-Mythos
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — **mindestens zwei Waschlappen** sind Standard: einer für Gesicht/Körper, einer für den Intimbereich. Grund: Keim-Verschleppung (Enterobakterien, Pilze). Noch besser sind Einmal-Waschhandschuhe je Region. Merke: Ein Lappen für Intim ist immer extra."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — du brauchst **mindestens zwei Waschlappen**: einer für den Körper, einer für den Intimbereich. Sonst verteilst du Keime. Noch besser: für jede Körperstelle ein Einmal-Handschuh. Merke: Intim hat immer seinen eigenen."

**D3: "Nach dem Waschen eines Körperteils spielt die Richtung keine Rolle"**
- **Fachbegriff:** Herzrichtungs-Ignoranz
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — an **Armen und Beinen** wäscht man **in Richtung Herz**. Das unterstützt den venösen Rückfluss und wirkt wie eine sanfte Pumpe. Bei Ödemen oder Thromboserisiko besonders wichtig. Merke: An den Gliedmaßen immer in Richtung Körpermitte waschen."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — an **Armen und Beinen** wäscht du **in Richtung Herz**. Das hilft dem Blut, zurück zum Herzen zu fließen. Wichtig bei geschwollenen Beinen oder Thrombose-Gefahr. Merke: Immer in Richtung Körpermitte."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Die Reihenfolge folgt dem Prinzip 'sauber vor schmutzig, oben vor unten'. Gesicht → Haare → Ohren → Hals → Brust/Bauch → Arme → Rücken → Beine → Intim. Zwei Waschlappen (einer für Intim, frisches Wasser!) sind Standard. An Armen und Beinen in Richtung Herz waschen."

**B1 (230 Zeichen):** "Sehr gut. Die Reihenfolge: Gesicht → Haare → Ohren → Hals → Brust und Bauch → Arme → Rücken → Beine → Intim. Zwei Waschlappen: einer für den Körper, einer für Intim. An Armen und Beinen immer in Richtung Herz waschen."

### Verknüpfte Karteikarte
- **Vorderseite:** "In welcher Reihenfolge wäscht man einen Patienten bei der Bettwaschung?"
- **Rückseite:** "Gesicht — Haare — Ohren — Hals — Brust/Bauch — Arme — Rücken — Beine — Intim (zuletzt, frisches Wasser, eigener Waschlappen)."
- **Kategorie:** handlung

---

## Baustein 3: waschtechnik-lange-zuege

### Metadaten
- **bausteinId:** ganzkoerperpflege-waschtechnik
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Du siehst eine Kollegin, die mit kleinen Kreisbewegungen wäscht. Eine andere wäscht mit langen Zügen von unten nach oben. Welche Technik ist besser — und warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "**Lange Züge in eine Richtung** sind Standard (Prinzip aus Bobath und Kinästhetik). Sie aktivieren das Körperbild, sind angenehm, vermeiden Hautreizung. **Kreisbewegungen** verwirren die Körperwahrnehmung und können die Haut reizen."

**B1 (225 Zeichen):** "Wasch immer mit **langen Zügen** in eine Richtung. Das ist angenehm und gut für den Körper. **Kleine Kreisbewegungen** sind nicht gut: Sie reizen die Haut und verwirren das Körpergefühl. Denke an Bobath und Kinästhetik."

- **Step-Typ:** comparison (lange Züge vs. Kreisbewegungen — Tabelle)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Die Waschtechnik folgt zwei Konzepten: **Bobath** und **Kinästhetik**. Beide haben gemeinsam: Der Patient soll seinen Körper **klar wahrnehmen**, nicht nur 'passiv geputzt' werden.

**Lange Züge in eine Richtung:**
- An Armen und Beinen: **zum Herzen hin** (venöser Rückfluss)
- Am Rumpf: großflächig, gleichmäßig
- Erzeugen ein klares Körperbild — der Patient spürt 'Das ist mein Arm'
- Geeignet für Menschen mit Halbseitenlähmung, Demenz, reduziertem Bewusstsein

**Keine Kreisbewegungen:**
- Verwirren die Körperwahrnehmung
- Können Haut reizen (besonders bei Altershaut, Hautpilz)
- Erinnern eher an 'Wischen' als an Pflege

**Druck:** Nicht zu leicht (kitzelt), nicht zu fest (schmerzhaft). **Mittlerer Druck** aktiviert Muskelspindeln und wirkt beruhigend. (Bobath 1990; Fröhlich Basale Stimulation 1998)"

**B1 (550 Zeichen):**
"Beim Waschen denkst du an zwei Ideen: **Bobath** und **Kinästhetik**. Beide sagen: Der Patient soll seinen Körper **spüren**, nicht nur geputzt werden.

**Lange Züge in eine Richtung:**
- Arme und Beine: **zum Herzen hin** (gut für das Blut)
- Am Rumpf: groß und gleichmäßig
- Der Patient fühlt: 'Das ist mein Arm, das ist mein Bein'
- Besonders wichtig bei Schlaganfall, Demenz oder wenig Bewusstsein

**Keine kleinen Kreise:**
- Verwirrt den Körper
- Reizt die Haut, besonders bei alter Haut
- Fühlt sich nicht wie Pflege an

**Druck:** Nicht zu leicht (kitzelt). Nicht zu fest (tut weh). **Mittelstark** ist gut. Das hilft auch beim Entspannen."

- **Erklärungs-Step:** stepType `comparison` (Tabelle: Züge vs. Kreisbewegungen)
- **Glossar-Begriffe:** [Bobath-Konzept, Kinästhetik, Körperbild, Muskelspindel]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Kleine Kreisbewegungen sind besser, weil sie gründlicher reinigen"**
- **Fachbegriff:** Reinigungs-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — **Gründlichkeit** entsteht durch sauberes Wasser, passenden Druck und alle Hautfalten erwischen, **nicht** durch Kreisbewegungen. Kreise reizen die Altershaut und verwirren das Körperbild. Merke: Lange Züge sind gleichzeitig gründlich UND pflegerisch wertvoll."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — **gründlich** wirst du mit **sauberem Wasser** und allen Hautfalten. Nicht mit Kreisen. Kreise reizen alte Haut und verwirren das Körpergefühl. Merke: Lange Züge sind sauber UND gut für den Patienten."

**D2: "Je fester gewaschen wird, desto besser"**
- **Fachbegriff:** Druck-Übertreibung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — **mittlerer Druck** ist optimal. Zu fest verletzt die Haut (Mikrotraumata), besonders bei alten Menschen oder Kortison-Therapie (dünne Haut). Zu leicht kitzelt und reizt. Das richtige Maß: Wenn der Patient nicht zuckt und die Haut nicht rot wird. Merke: Gefühlvoll, nicht wild."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — **mittlerer Druck** ist am besten. Zu fest verletzt alte Haut oder Haut unter Kortison. Zu leicht kitzelt. Richtig ist: Der Patient zuckt nicht, die Haut wird nicht rot. Merke: Sanft und bestimmt, nicht grob."

**D3: "An den Armen und Beinen wäscht man von oben nach unten (vom Körper weg)"**
- **Fachbegriff:** Falschrichtungs-Irrtum-2
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — die Richtung ist **zum Herzen hin**. An den Armen: von der Hand zur Schulter. An den Beinen: vom Fuß zur Hüfte. Das unterstützt den **venösen Rückfluss** und beugt Stauungen vor. Bei Thromboserisiko oder Ödemen ist das Pflicht. Merke: An Gliedmaßen: immer Richtung Körpermitte."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — du wäschst **zum Herzen hin**. Arm: von der Hand zur Schulter. Bein: vom Fuß zur Hüfte. Das hilft dem Blut, zurück zu fließen. Besonders wichtig bei Thrombose-Gefahr oder geschwollenen Beinen. Merke: Immer Richtung Körpermitte."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. **Lange Züge in eine Richtung** sind Standard — aktivieren das Körperbild, sind angenehm, schonen die Haut. Hintergrund: Bobath und Kinästhetik. An Armen/Beinen in Richtung Herz. Druck: mittelstark. Kreisbewegungen vermeiden. Du wäschst nicht, du unterstützt Wahrnehmung."

**B1 (230 Zeichen):** "Sehr gut. **Lange Züge in eine Richtung** sind richtig. Das kommt aus Bobath und Kinästhetik. Der Patient spürt seinen Körper besser. An Armen und Beinen: zum Herzen hin. Druck: mittelstark. Keine kleinen Kreise."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Waschtechnik folgt aus Bobath und Kinästhetik?"
- **Rückseite:** "Lange Züge in eine Richtung — an Gliedmaßen Richtung Herz. Keine kleinen Kreise. Mittlerer Druck. Ziel: klares Körperbild."
- **Kategorie:** handlung

---

## Baustein 4: haendehygiene-5-momente

### Metadaten
- **bausteinId:** ganzkoerperpflege-haendehygiene
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Du kommst ins Zimmer einer Patientin, misst den Blutdruck, berührst kurz einen Zettel auf dem Tisch, hilfst bei der Nahrungsaufnahme und verlässt dann das Zimmer. An wie vielen Stellen musst du deine Hände desinfizieren?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Die WHO kennt **5 Momente der Händedesinfektion**: 1) vor Patientenkontakt, 2) vor aseptischer Tätigkeit, 3) nach Kontakt mit Körperflüssigkeiten, 4) nach Patientenkontakt, 5) nach Kontakt mit der Patientenumgebung. Gilt auch bei handschuhfreier Arbeit."

**B1 (230 Zeichen):** "Die WHO sagt: **5 Momente** zum Hände desinfizieren. 1) Vor dem Patienten. 2) Vor sterilen Sachen. 3) Nach Kontakt mit Blut, Urin, Stuhl. 4) Nach dem Patienten. 5) Nach Kontakt mit Sachen vom Patienten (Bett, Tisch)."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die **5 Momente der Händehygiene** sind das Herzstück der Infektionsprävention (WHO, 2009; RKI/KRINKO 2022):

**Moment 1 — Vor Patientenkontakt** (Schutz des Patienten): Bevor du ihn berührst — Blutdruck messen, begrüßen, zudecken.

**Moment 2 — Vor aseptischer Tätigkeit** (Schutz des Patienten): Bevor du etwas Steriles machst — Katheter, Verbandswechsel, Injektion, Mundpflege.

**Moment 3 — Nach Kontakt mit Körperflüssigkeiten** (Schutz von dir und anderen): Blut, Urin, Stuhl, Erbrochenes, Sputum — auch wenn du Handschuhe trugst.

**Moment 4 — Nach Patientenkontakt** (Schutz von dir und anderen): Nachdem du ihn berührt hast.

**Moment 5 — Nach Kontakt mit Patientenumgebung** (Schutz von dir und anderen): Bett, Nachttisch, Infusionsständer — auch ohne Patientenberührung.

**Wichtig:** Desinfektion (30 Sekunden, alle Flächen) ist effektiver als Händewaschen. Händewaschen nur bei sichtbarer Verschmutzung oder nach Toilettengang. (WHO SAVE LIVES Campaign 2009)"

**B1 (580 Zeichen):**
"Die WHO hat **5 Momente** für Hände-Desinfektion festgelegt (WHO 2009):

**1. Vor Patientenkontakt** — Bevor du den Patienten anfasst (z.B. Blutdruck messen).

**2. Vor sterilen Arbeiten** — Bevor du etwas Steriles tust (z.B. Katheter, Verband, Mundpflege).

**3. Nach Körperflüssigkeiten** — Nach Blut, Urin, Stuhl, Spucke, Erbrochenem. Auch wenn du Handschuhe hattest.

**4. Nach Patientenkontakt** — Nachdem du den Patienten angefasst hast.

**5. Nach Patientenumgebung** — Nach Kontakt mit Bett, Tisch oder Infusionsständer.

**Wichtig:** **Desinfizieren** (30 Sekunden, alle Seiten der Hand) ist besser als Waschen. Waschen nur, wenn die Hände schmutzig sind oder nach der Toilette."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist, 5 Momente)
- **Glossar-Begriffe:** [Händedesinfektion, Aseptisch, Patientenumgebung, Nosokomial]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn ich Handschuhe trage, muss ich die Hände danach nicht desinfizieren"**
- **Fachbegriff:** Handschuh-Illusion
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — Handschuhe haben **Mikroporen**, und beim Ausziehen werden die Hände regelmäßig kontaminiert (Studienlage eindeutig). Deshalb: **Immer nach dem Ausziehen der Handschuhe desinfizieren**. Handschuhe ersetzen NICHT die Händedesinfektion. Merke: Handschuhe = zusätzlicher Schutz."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Handschuhe haben winzig kleine Löcher. Und beim Ausziehen kommen Keime an die Hände. Darum: **Nach Handschuhen immer desinfizieren**. Handschuhe sind EXTRA — sie ersetzen nicht die Desinfektion."

**D2: "Händewaschen mit Seife reinigt besser als Desinfektion"**
- **Fachbegriff:** Seifen-Mythos
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — für die **Keimreduktion** ist **Händedesinfektion deutlich effektiver** als Waschen (99,9% vs. ~80%). Wasser und Seife schwemmen Schmutz weg, töten aber Viren und Bakterien nicht zuverlässig. Waschen nur bei sichtbarer Verschmutzung oder nach der Toilette. Merke: Desinfektion ist Standard."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Desinfektion tötet mehr Keime als Seife**. Seife wäscht Schmutz weg, aber Viren und Bakterien überleben. Darum: Waschen nur, wenn die Hände schmutzig sind oder nach der Toilette. Sonst immer desinfizieren. Merke: Desinfektion ist Standard."

**D3: "10 Sekunden Desinfektion reichen, wenn man es schnell macht"**
- **Fachbegriff:** Zeit-Abkürzung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — **30 Sekunden** sind die wissenschaftlich belegte Einwirkzeit. Erst dann sind 99,9% der Keime abgetötet. Außerdem: alle Handflächen, Fingerzwischenräume, Daumen, Fingerkuppen und Handgelenke benetzen. Kürzer = **unwirksam**. Merke: 30 Sekunden, alle Flächen — keine Abkürzung."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — **30 Sekunden** sind nötig. Erst dann sind fast alle Keime weg. Und: Alle Flächen benetzen — innen, außen, zwischen den Fingern, Daumen, Fingerspitzen, Handgelenk. Kürzer = nicht richtig. Merke: 30 Sekunden, alle Flächen."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Die 5 Momente: 1) vor Patient, 2) vor aseptisch, 3) nach Körperflüssigkeit, 4) nach Patient, 5) nach Patientenumgebung. Einwirkzeit: 30 Sekunden, alle Flächen. Auch nach Handschuhen desinfizieren. Das ist die wichtigste Einzelmaßnahme gegen nosokomiale Infektionen (RKI/KRINKO)."

**B1 (240 Zeichen):** "Sehr gut. Die 5 Momente: 1) vor Patient, 2) vor sterilen Arbeiten, 3) nach Körperflüssigkeiten, 4) nach Patient, 5) nach Kontakt mit Bett/Tisch. 30 Sekunden, alle Flächen. Auch nach Handschuhen. Das ist dein wichtigster Schutz."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 5 Momente der Händehygiene (WHO)."
- **Rückseite:** "1) Vor Patientenkontakt, 2) Vor aseptischer Tätigkeit, 3) Nach Kontakt mit Körperflüssigkeiten, 4) Nach Patientenkontakt, 5) Nach Kontakt mit Patientenumgebung. (WHO SAVE LIVES 2009)"
- **Kategorie:** handlung

---

## Baustein 5: aktivierende-pflege-ressourcen

### Metadaten
- **bausteinId:** ganzkoerperpflege-aktivierend
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Frau K. (78, Zustand nach Schlaganfall rechts) könnte mit der linken Hand selbst ihr Gesicht waschen — aber es dauert 10 Minuten. Du hast noch 5 weitere Patienten. Was machst du? Begründe."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "**Aktivierende Pflege** heißt: Was kann der Patient selbst? Das nutzt du — auch wenn es länger dauert. Ressourcenorientierung schlägt Zeitersparnis. Der Patient behält Selbstständigkeit, Muskelkraft, Selbstwert. Du übernimmst nur, was er wirklich nicht kann."

**B1 (230 Zeichen):** "**Aktivierende Pflege** fragt: Was kann der Patient selbst? Das machst du zuerst — auch wenn es länger dauert. So bleibt der Patient stark und selbstständig. Du hilfst nur, was er wirklich nicht allein schafft. Das nennt man ressourcenorientiert."

- **Step-Typ:** text (displayFormat: procontra — aktivierend vs. übernehmend)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"**Aktivierende Pflege** (nach dem Konzept der Ressourcenorientierung) ist ein Grundprinzip moderner Pflege. Leitfrage: **Was kann der Patient selbst?**

**Prinzipien:**
- **Ressourcen nutzen**: Jede noch vorhandene Fähigkeit wird aktiv eingesetzt. Auch wenn es länger dauert.
- **Selbstständigkeit erhalten**: Was nicht genutzt wird, geht verloren (use it or lose it). Das betrifft Muskelkraft, Bewegungsabläufe, Alltagskompetenz.
- **Würde schützen**: Selbst waschen zu dürfen = Kontrolle über den eigenen Körper = Würde.

**Konkret bei der Ganzkörperpflege:**
- Gesicht selbst waschen (wenn eine Hand funktioniert)
- Zähne selbst putzen
- Sich selbst mit Handtuch abtrocknen
- Beim Drehen mithelfen (Bettgitter greifen, Bein anstellen)

**Gegenmodell — übernehmende Pflege**: Die Pflegekraft macht alles, weil es schneller geht. Folge: Der Patient wird abhängiger, verliert Kraft und Selbstwertgefühl. **Nicht erlaubt als Standard.** (Juchli ATLs, 1987)

**Dokumentation:** Ressourcen und Einschränkungen explizit nennen — z.B. 'Wäscht Gesicht selbst (links), Rumpf und Beine durch Pflege'."

**B1 (590 Zeichen):**
"**Aktivierende Pflege** bedeutet: Du fragst **'Was kann der Patient selbst?'** und lässt ihn das auch machen.

**Drei Gründe:**
- **Ressourcen nutzen**: Was der Patient noch kann, soll er nutzen. Auch wenn es länger dauert.
- **Selbstständigkeit erhalten**: Was man nicht nutzt, verliert man. Muskeln werden schwach.
- **Würde schützen**: Sich selbst waschen zu können = ein Stück Freiheit.

**Beispiele beim Waschen:**
- Gesicht selbst waschen (mit der gesunden Hand)
- Zähne selbst putzen
- Sich selbst abtrocknen
- Beim Drehen mithelfen

**Das Gegenteil — übernehmende Pflege**: Die Pflegekraft macht alles. Der Patient wird immer schwächer. **Das ist nicht gut.**

**Dokumentieren:** 'Wäscht Gesicht selbst mit links. Rumpf und Beine übernimmt die Pflege.'"

- **Erklärungs-Step:** stepType `text` (displayFormat: procontra)
- **Glossar-Begriffe:** [Aktivierende Pflege, Ressourcenorientierung, Selbstpflegedefizit, Use it or lose it]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Aktivierende Pflege bedeutet, dem Patienten alles zuzumuten"**
- **Fachbegriff:** Überforderungs-Fehlinterpretation
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — aktivierende Pflege bedeutet **Ressourcen nutzen**, nicht überfordern. Was der Patient **nicht** kann, übernimmst du. Entscheidend ist die Unterscheidung: Kann er aktuell und sicher → er macht. Kann er nicht (Kraft, Sicherheit, Schmerz) → du machst. Merke: Fördern, nicht fordern."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — aktivierende Pflege heißt: **was er kann, macht er**. Aber was er **nicht** kann, machst du. Kann er sicher und ohne Schmerzen? Er macht. Kann er nicht? Du machst. Merke: Fördern, nicht überfordern."

**D2: "Wenn es schneller geht, sollte die Pflegekraft alles übernehmen"**
- **Fachbegriff:** Zeit-vor-Würde-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Zeitersparnis ist kein Pflegeziel**. Das Pflegeziel ist Selbstständigkeit, Gesundheit, Würde. Wenn du aus Eile alles übernimmst, machst du den Patienten kurzfristig schneller sauber, langfristig aber hilfloser und depressiver. Merke: Fünf Minuten mehr Aktivität zahlen sich aus."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — **schnell pflegen ist kein Ziel**. Das Ziel ist: Der Patient bleibt selbstständig und gesund. Wenn du immer alles machst, wird er hilflos und traurig. Merke: 5 Minuten mehr Zeit für Selbstständigkeit lohnen sich."

**D3: "Aktivierende Pflege ist nur bei Rehabilitations-Patienten wichtig"**
- **Fachbegriff:** Reha-Beschränkungs-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — aktivierende Pflege gilt **für jeden Patienten**, auch in der Akutklinik, in der Altenpflege und in der Palliativsituation. Selbst ein sterbender Mensch behält gern Kontrolle, wenn möglich. Merke: Ressourcenorientierung ist Haltung, nicht Einsatzort."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — aktivierende Pflege gilt **überall**: auf jeder Station, im Pflegeheim, sogar am Lebensende. Jeder Mensch will Kontrolle, wenn er kann. Merke: Es ist eine Haltung, nicht nur für Reha."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Frau K. darf ihr Gesicht mit der linken Hand selbst waschen — auch wenn es 10 Minuten dauert. Hintergrund: Ressourcenorientierung. Was sie nicht mehr kann, verliert sie ('use it or lose it'). Zeitersparnis ist kein Pflegeziel. Du übernimmst nur, was sie wirklich nicht kann."

**B1 (245 Zeichen):** "Sehr gut. Frau K. darf ihr Gesicht selbst waschen, auch wenn es 10 Minuten dauert. Was sie nicht nutzt, verliert sie. Schnell sein ist nicht das Ziel — selbstständig bleiben ist das Ziel. Du machst nur, was sie wirklich nicht kann."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet 'aktivierende Pflege' bei der Körperpflege?"
- **Rückseite:** "Was der Patient selbst kann, macht er selbst — auch wenn es länger dauert. Ziel: Ressourcen nutzen, Selbstständigkeit erhalten, Würde schützen. (Juchli ATLs)"
- **Kategorie:** handlung

---

## Baustein 6: intimpflege-frau

### Metadaten
- **bausteinId:** ganzkoerperpflege-intimpflege-frau
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Warum wird bei der Intimpflege der Frau immer 'von vorne nach hinten' gewischt — und welche Komplikation soll das verhindern?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Bei der Frau: **Immer von vorne nach hinten** (Vulva zu Anus). Grund: **Verschleppung von Darmkeimen** (v.a. E. coli) in die Harnröhre wird vermieden — Schutz vor aufsteigenden Harnwegsinfekten (HWI). Frisches Wasser, eigener Waschlappen."

**B1 (225 Zeichen):** "Bei der Frau: **Immer von vorne nach hinten** wischen. Also von der Scheide zum After. Der Grund: Keime aus dem Darm dürfen **nicht** zur Harnröhre kommen. Sonst gibt es eine **Harnwegs-Infektion**. Frisches Wasser, extra Waschlappen."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Die Intimpflege der Frau folgt einer klaren anatomischen Logik: **Richtung immer von vorne (Vulva) nach hinten (Anus)**.

**Warum?** Die weibliche Harnröhre ist mit nur 3-5 cm sehr kurz. Darmkeime (v.a. **E. coli**) haben einen extrem kurzen Weg in die Blase — aufsteigende Harnwegsinfekte entstehen schnell. Jede Wischbewegung von hinten nach vorne trägt diese Keime direkt zur Harnröhre.

**Praktisches Vorgehen:**
1. **Frisches, sauberes Wasser** (nicht das Waschwasser vom Körper)
2. **Eigener Waschlappen** (nur für Intim, dann in den Wäschekorb)
3. **Große Schamlippen spreizen** und zwischen großen und kleinen Schamlippen reinigen
4. **Jeder Wischzug nur einmal nutzen** (danach wenden oder neuer Lappen)
5. **Richtung: vorne → hinten**, nie zurück
6. **Gut trocknen** — feuchte Hautfalten fördern Pilzinfektionen (Soor, Intertrigo)

Bei Frauen mit Dauerkatheter: Besondere Reinigung um den Katheter und am Meatus (Harnröhreneingang). (RKI Krankenhaushygiene 2022)"

**B1 (580 Zeichen):**
"Bei der Intimpflege der Frau wischt du **immer von vorne nach hinten**.

**Warum?** Die Harnröhre der Frau ist sehr kurz (3-5 cm). Keime aus dem Darm (besonders **E. coli**) haben einen kurzen Weg in die Blase. So entsteht eine **Harnwegs-Infektion**. Wenn du zurückwischst, trägst du die Keime direkt zur Harnröhre.

**So machst du es:**
1. **Frisches Wasser** holen (nicht das Waschwasser vom Körper)
2. **Neuer Waschlappen** nur für Intim
3. **Große Schamlippen** zur Seite schieben und dazwischen reinigen
4. **Jeder Wisch nur einmal** (dann neuer Zug)
5. **Richtung: vorne nach hinten** — nie zurück
6. **Gut trocknen** — nasse Hautfalten machen Pilze

Bei Frauen mit Katheter: besonders um den Katheter reinigen."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Vulva, Harnröhre, E. coli, Aufsteigender Harnwegsinfekt, Intertrigo]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Richtung spielt keine Rolle, wenn man hinterher gut abspült"**
- **Fachbegriff:** Spül-Trugschluss
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — **auch nach dem Wischen bleiben Keime in der Hautflora**. Wer zuerst am Anus war und dann in Richtung Vulva wischt, hat die E. coli bereits verteilt — unabhängig vom anschließenden Abspülen. Die **Richtung beim ersten Kontakt** ist entscheidend. Merke: Einmal falsch = Infektionsrisiko."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — auch **nach dem Wischen** bleiben Keime an der Haut. Wenn du zuerst am After warst, sind die Keime schon verteilt. Abspülen hilft da nicht mehr. Die **Richtung beim ersten Zug** ist wichtig. Merke: Erst Vulva, dann After."

**D2: "Dasselbe Wasser wie für den Körper reicht auch für den Intimbereich"**
- **Fachbegriff:** Wasser-Wiederverwendungs-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — für die Intimpflege wird **immer frisches Wasser** verwendet. Das Waschwasser vom Körper enthält bereits Keime, Hautschuppen und Seifenreste. Diese Mischung auf Schleimhäute zu bringen, ist kontraindiziert. Merke: Intimpflege = neues Wasser + neuer Waschlappen. Kein Kompromiss."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — für die Intimpflege nimmst du **immer frisches Wasser**. Das Wasser vom Körperwaschen hat schon Keime und Seifenreste. Das darf nicht auf die Schleimhaut. Merke: Intimpflege = neues Wasser + neuer Waschlappen. Immer."

**D3: "Die Schamlippen muss man nicht spreizen, das ist übergriffig"**
- **Fachbegriff:** Vermeidungs-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **große Schamlippen vorsichtig spreizen** gehört zur sorgfältigen Intimpflege. Zwischen den Schamlippen sammeln sich schnell Sekret, Smegma und Keime. Ohne Spreizen bleibt dieser Bereich schmutzig und Pilzinfektionen entstehen. Wichtig: Vorher ankündigen, respektvoll handeln. Merke: Gründlich ist NICHT übergriffig."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — die **großen Schamlippen** musst du **vorsichtig zur Seite schieben**. Sonst bleibt dort Schmutz und es kommen Pilze. Wichtig: Vorher sagen, was du tust. Respektvoll sein. Merke: Gründlich ist nicht übergriffig — es gehört zur guten Pflege."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. **Von vorne nach hinten** schützt vor aufsteigenden Harnwegsinfekten, weil die weibliche Harnröhre mit 3-5 cm sehr kurz ist und E. coli aus dem Darm schnell aufsteigt. Frisches Wasser, eigener Waschlappen, zwischen den Schamlippen reinigen, gut trocknen. Jeder Wisch nur einmal."

**B1 (240 Zeichen):** "Sehr gut. **Von vorne nach hinten** verhindert Keime aus dem Darm in der Harnröhre. Die Frauen-Harnröhre ist sehr kurz. Frisches Wasser, extra Waschlappen, zwischen den Schamlippen reinigen, gut trocknen. Jeder Wisch nur einmal benutzt."

### Verknüpfte Karteikarte
- **Vorderseite:** "In welche Richtung wird bei der Intimpflege der Frau gewischt — und warum?"
- **Rückseite:** "Von vorne nach hinten (Vulva → Anus). Grund: Verhindert Keimverschleppung aus dem Darm (E. coli) in die kurze weibliche Harnröhre — Schutz vor aufsteigenden Harnwegsinfekten."
- **Kategorie:** handlung

---

## Baustein 7: intimpflege-mann-vorhaut

### Metadaten
- **bausteinId:** ganzkoerperpflege-intimpflege-mann
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Warum ist es bei einem Mann mit Dauerkatheter besonders wichtig, die Vorhaut zurückzuschieben, zu reinigen — und wieder vorzuschieben? Was passiert, wenn man das vergisst?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Bei der Intimpflege des Mannes: **Vorhaut vorsichtig zurückschieben, Eichel reinigen, dann Vorhaut wieder nach vorne ziehen**. Sonst droht **Paraphimose** — eine schmerzhafte, gefährliche Einklemmung der Eichel. Besonders wichtig bei Dauerkatheter-Trägern."

**B1 (235 Zeichen):** "Bei der Intimpflege des Mannes: **Vorhaut vorsichtig zurückschieben, Eichel waschen, Vorhaut wieder nach vorne ziehen**. Wenn du das Zurückziehen vergisst, kann die Vorhaut **einklemmen**. Das nennt man **Paraphimose**. Sehr schmerzhaft."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die Intimpflege des Mannes hat eine anatomische Besonderheit: die **Vorhaut** (Präputium). Ohne regelmäßige Reinigung sammelt sich unter der Vorhaut **Smegma** — eine weißliche Ansammlung aus Talg, Urinresten und Epithelzellen, idealer Nährboden für Bakterien.

**Vorgehen:**
1. **Vorhaut vorsichtig zurückschieben** — nie mit Gewalt (bei Phimose nicht erzwingen!)
2. **Eichel (Glans) und Vorhauttasche reinigen** — mildes Wasser, keine scharfen Seifen
3. **Gut abspülen und trocknen**
4. **Vorhaut wieder nach vorne ziehen** — **wichtigster Schritt!**

**Gefahr Paraphimose:** Bleibt die Vorhaut zurückgezogen, kann sie die Eichel einschnüren wie ein Gummiring. Folge: Venöser Abfluss gestört → Schwellung → Schmerz → im schlimmsten Fall Nekrose der Eichel. Medizinischer Notfall.

**Bei Dauerkathetern:** Täglich reinigen, auch den Bereich direkt am Katheter. Krustenbildung am Meatus entfernen. Paraphimose-Risiko besonders hoch, weil die Vorhaut oft 'vergessen' wird. (RKI Krankenhaushygiene 2022)"

**B1 (580 Zeichen):**
"Die Intimpflege des Mannes ist besonders wegen der **Vorhaut**. Ohne Reinigung sammelt sich darunter **Smegma** — weißliche Ablagerungen aus Talg, Urin und Hautzellen. Dort wachsen Bakterien.

**So machst du es:**
1. **Vorhaut vorsichtig zurückschieben** — nie mit Kraft! Manche Männer haben eine enge Vorhaut (Phimose).
2. **Eichel und Innenseite waschen** — mildes Wasser, keine scharfe Seife
3. **Gut abspülen und abtrocknen**
4. **Vorhaut wieder nach vorne ziehen** — **das ist das Wichtigste!**

**Gefahr Paraphimose:** Wenn die Vorhaut zurückgezogen bleibt, schnürt sie die Eichel ab. Dann schwillt die Eichel, tut weh, und es kann ein **Notfall** werden. Darum: **immer vorziehen!**

**Bei Katheter-Trägern:** jeden Tag reinigen, auch um den Katheter. Sonst entstehen dort Krusten."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Vorhaut (Präputium), Eichel (Glans), Smegma, Phimose, Paraphimose, Meatus]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn der Patient eine enge Vorhaut hat, muss man kräftiger ziehen"**
- **Fachbegriff:** Phimose-Gewalt-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — bei **Phimose** (enge Vorhaut) darf die Vorhaut **niemals gewaltsam zurückgezogen werden**. Folge: Schmerzhafte Einrisse, Entzündungen, und oft anschließend eine Paraphimose. Du reinigst, was sichtbar ist, und informierst den Arzt. Merke: Phimose = niemals mit Kraft."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — bei **enger Vorhaut (Phimose)** ziehst du **nie mit Kraft**. Das macht Risse und Schmerzen. Du wäschst nur das, was du sehen kannst, und sagst es dem Arzt. Merke: Phimose = nie mit Gewalt."

**D2: "Das Zurückziehen der Vorhaut ist nur bei schlechter Hygiene nötig"**
- **Fachbegriff:** Hygiene-Unterschätzung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die Vorhaut sollte **bei jeder Ganzkörperpflege** zurückgezogen werden. Auch bei täglich duschenden Patienten sammelt sich Smegma. Bei Pflegebedürftigen, die sich selbst nicht reinigen können, ist das noch wichtiger. Merke: Routinemäßig, nicht nur bei Auffälligkeiten."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — du ziehst die Vorhaut **bei jeder Ganzkörperpflege** zurück. Auch wenn der Patient täglich duscht, kommt Smegma. Bei Menschen, die sich nicht selbst waschen können, ist das besonders wichtig. Merke: Immer, nicht nur bei Problemen."

**D3: "Die Vorhaut wieder vorzuziehen ist unwichtig, sie rutscht schon von selbst"**
- **Fachbegriff:** Rückpositionierungs-Nachlässigkeit
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — das **aktive Vorziehen der Vorhaut** ist der wichtigste Schritt. Besonders bei älteren Männern mit schwacher Gewebespannung oder bei Katheter-Trägern bleibt die Vorhaut sonst zurückgezogen. Folge: Paraphimose — Einschnürung, Schwellung, Notfall. Merke: Aktiv vorziehen, nicht dem Zufall überlassen."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — du musst die Vorhaut **aktiv vorziehen**. Besonders bei älteren Männern oder Katheter-Trägern rutscht sie nicht von allein zurück. Dann entsteht eine **Paraphimose** — Einklemmung, Schwellung, Notfall. Merke: Immer selbst vorziehen."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Bei Dauerkatheter-Trägern ist das Paraphimose-Risiko besonders hoch. Vorhaut zurück → reinigen → **wieder vor**. Wird das vergessen, schnürt die Vorhaut die Eichel ein: venöser Abfluss gestört, Schwellung, Schmerz, im schlimmsten Fall Nekrose — Notfall. Darum: immer dokumentieren."

**B1 (245 Zeichen):** "Sehr gut. Bei Katheter-Trägern ist die Gefahr einer Paraphimose besonders hoch. Vorhaut zurück → waschen → **wieder vor**. Ohne Vorziehen klemmt die Vorhaut ein, die Eichel schwillt, es tut weh, es kann ein Notfall werden. Darum: dokumentieren."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche drei Schritte gehören zur Intimpflege der Vorhaut — und was ist eine Paraphimose?"
- **Rückseite:** "Zurückschieben → Reinigen → **Wieder vorziehen**. Paraphimose = Einklemmung der Eichel durch zurückgebliebene Vorhaut, Schwellung, Schmerz, Notfall. Besonders Risiko bei Katheter-Trägern."
- **Kategorie:** handlung

---

## Baustein 8: augenpflege

### Metadaten
- **bausteinId:** ganzkoerperpflege-augenpflege
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "In welche Richtung wischt du bei der Augenpflege — zum Ohr hin oder zur Nase hin? Und warum könnte das medizinische Konsequenzen haben?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Augenpflege: **Von außen nach innen** (Ohr → Nase). Grund: Ein eventueller Erreger (z.B. bei **Konjunktivitis**) soll nicht in den Tränenkanal verschleppt werden. **Pro Auge ein eigener Tupfer/Wattepad.** Bei Entzündung: steriles Material."

**B1 (215 Zeichen):** "Augen wäschst du **von außen nach innen** — vom Ohr zur Nase. Grund: Bei einer **Bindehaut-Entzündung** sollen die Keime nicht in den Tränenkanal kommen. **Pro Auge ein eigener Tupfer**. Bei Entzündung: steril."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die Augenpflege folgt einer anatomisch begründeten Richtung: **von außen (lateraler Lidwinkel, Richtung Ohr) nach innen (medialer Lidwinkel, Richtung Nase)**.

**Warum diese Richtung?** Im **medialen Lidwinkel** (Nasenseite) liegt die Öffnung des **Tränenkanals** (Ductus nasolacrimalis), der zur Nasenhöhle führt. Wischt man von innen nach außen, schiebt man Sekret und Erreger (z.B. bei **Konjunktivitis**) in den Tränenkanal — aufsteigende Infektion möglich.

**Material und Vorgehen:**
1. Bei Routinepflege: **Wattepad oder Tupfer mit klarem Wasser** (kein Leitungswasser bei Entzündung — NaCl 0,9% oder sterile Lösung)
2. **Pro Auge ein eigener Tupfer** — keine Keim-Verschleppung zwischen den Augen
3. **Augenlider geschlossen halten** während des Wischens
4. **Eine Wischbewegung pro Tupfer** — dann wegwerfen
5. **Bei Verkrustungen** (z.B. morgens): Tupfer kurz auflegen, Krusten einweichen, dann abwischen

**Bei Entzündung (Konjunktivitis):** Sterile Kompressen + physiologische Kochsalzlösung. Arzt informieren. Hygiene streng. (RKI/KRINKO 2022)"

**B1 (590 Zeichen):**
"Augen wäschst du **von außen nach innen** — also **vom Ohr zur Nase**.

**Warum diese Richtung?** An der Nasenseite liegt der **Tränenkanal**, der zur Nase führt. Wenn du von innen nach außen wischst, schiebst du Keime in den Tränenkanal. Dann kann die Infektion in die Nase kommen. Besonders schlimm bei einer **Bindehaut-Entzündung** (Konjunktivitis).

**Material und Ablauf:**
1. Bei normaler Pflege: **Wattepad mit klarem Wasser**. Bei Entzündung: **Kochsalzlösung** (steril).
2. **Pro Auge ein eigener Tupfer** — keine Keime vom einen ins andere Auge.
3. **Augenlider schließen lassen** beim Wischen.
4. **Eine Bewegung pro Tupfer** — dann wegwerfen.
5. **Verkrustungen** (morgens): Tupfer auflegen, einweichen, dann abwischen.

Bei **Entzündung**: steriles Material, Arzt informieren."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Lidwinkel (medial/lateral), Tränenkanal, Konjunktivitis, Kochsalzlösung (NaCl 0,9%)]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Man wischt das Auge von innen nach außen, um Sekret aus dem Auge zu entfernen"**
- **Fachbegriff:** Falschrichtungs-Irrtum-Auge
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — genau **andersrum**. Von außen nach innen schützt den **Tränenkanal**: Er mündet im inneren Lidwinkel in die Nase. Von innen nach außen würdest du Erreger in den Kanal schieben — bei Konjunktivitis katastrophal. Merke: Die Richtung folgt der Anatomie: außen → innen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — genau **andersrum**. Der **Tränenkanal** ist innen an der Nase. Von innen nach außen würdest du Keime in den Kanal schieben. Merke: Immer **von außen nach innen** — vom Ohr zur Nase."

**D2: "Für beide Augen kann derselbe Tupfer verwendet werden, wenn er noch sauber aussieht"**
- **Fachbegriff:** Tupfer-Sparmythos
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **pro Auge immer ein neuer Tupfer**. Auch wenn das erste Auge gesund aussieht, können Erreger unsichtbar sein. Eine einseitige Konjunktivitis wird sonst zur beidseitigen — unnötiger Patientenschaden. Merke: Ein Auge = ein Tupfer, egal wie sauber der aussieht."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — **pro Auge ein neuer Tupfer**. Keime sieht man nicht. Ein gesundes Auge kann sonst krank werden. Merke: Jedes Auge hat seinen eigenen Tupfer. Immer."

**D3: "Leitungswasser reicht auch bei einer Bindehaut-Entzündung"**
- **Fachbegriff:** Leitungswasser-Fehlannahme
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — bei **Konjunktivitis** und anderen Augen-Erkrankungen verwendet man **sterile Kochsalzlösung (NaCl 0,9%) oder sterile Augentupfer**. Leitungswasser kann eigene Keime (z.B. Pseudomonas) enthalten und die Infektion verschlimmern. Merke: Entzündetes Auge = sterile Materialien."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — bei **Entzündung** nimmst du **Kochsalzlösung** (steril). Leitungswasser hat eigene Keime, die die Entzündung schlimmer machen können. Merke: Entzündetes Auge = sterile Sachen, kein Leitungswasser."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. **Von außen nach innen** (Ohr → Nase), weil der Tränenkanal im inneren Lidwinkel mündet. Bei Verschleppung: Keime wandern über den Tränenkanal in die Nase. **Pro Auge ein eigener Tupfer**. Bei Konjunktivitis: sterile NaCl-Lösung. Verkrusten vorher einweichen."

**B1 (240 Zeichen):** "Sehr gut. **Von außen nach innen** — vom Ohr zur Nase. Der Tränenkanal liegt an der Nasenseite. Pro Auge ein eigener Tupfer. Bei Bindehaut-Entzündung: Kochsalzlösung (steril), nicht Leitungswasser. Krusten vorher einweichen."

### Verknüpfte Karteikarte
- **Vorderseite:** "In welche Richtung wird das Auge gewischt — und warum?"
- **Rückseite:** "Von außen (Ohr) nach innen (Nase). Grund: Der Tränenkanal mündet im inneren Lidwinkel. Richtung schützt vor Keim-Verschleppung in den Kanal. Pro Auge ein eigener Tupfer."
- **Kategorie:** handlung

---

## Baustein 9: ohren-und-nasenpflege

### Metadaten
- **bausteinId:** ganzkoerperpflege-ohren-nase
- **bloomLevel:** 2
- **wissensart:** handlung
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Warum solltest du bei der Ohrpflege **niemals** ein Wattestäbchen in den Gehörgang einführen? Was kann passieren?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "**Ohren:** Nur die Ohrmuschel reinigen — **nie etwas in den Gehörgang einführen**. Gefahr: Trommelfell-Verletzung, Cerumen-Pfropf tiefer schieben. **Nase:** Verkrustungen vorsichtig lösen (feuchter Tupfer). Bei O2-Sonde oder Magensonde besonders beobachten."

**B1 (230 Zeichen):** "**Ohren:** Nur die Ohrmuschel (außen) waschen. **Nie etwas in den Gehörgang stecken!** Sonst kann das Trommelfell kaputt gehen. **Nase:** Krusten mit feuchtem Tupfer lösen. Besonders wichtig bei Sauerstoff-Brille oder Magensonde."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"**Ohrenpflege:**
Nur die sichtbare **Ohrmuschel (Auricula)** wird gereinigt — mit Waschlappen oder Tupfer. Hinter dem Ohr und in den Falten besonders gründlich (Schweiß, Hautschuppen). **Niemals Wattestäbchen oder andere Gegenstände in den Gehörgang**. Gründe:
- **Trommelfell-Perforation** möglich
- **Cerumen (Ohrenschmalz) wird tiefer geschoben**, Pfropf verursacht Hörminderung
- **Infektionsrisiko** (Otitis externa)

Cerumen ist eine natürliche Reinigungsfunktion des Ohres. Es wird durch Kaubewegungen selbstständig nach außen transportiert. Bei Hörgeräte-Trägern: Gerät herausnehmen, reinigen, Ohrmuschel inspizieren.

**Nasenpflege:**
Bei mobilen Patienten meist unproblematisch. Bei pflegebedürftigen, liegenden oder mit Sonden versorgten Patienten: **Verkrustungen** an den Nasenöffnungen bilden sich oft. Vorgehen:
1. **Feuchter Tupfer** auflegen, einweichen
2. Vorsichtig **nach außen abwischen**
3. **Bei Nasensonden (Magensonde, O2-Sonde)**: Druckstellen prüfen (Dekubitus am Nasenflügel möglich!), Fixierung kontrollieren, Fixierpflaster ggf. erneuern. (Juchli ATLs, 1987)"

**B1 (560 Zeichen):**
"**Ohrenpflege:**
Nur die **Ohrmuschel** (außen) waschen — mit Waschlappen oder Tupfer. Hinter dem Ohr: oft schwitzig, gründlich waschen. **Nie Wattestäbchen in den Gehörgang!** Grund:
- Das **Trommelfell** kann verletzt werden
- **Ohrenschmalz** wird tiefer geschoben — Hörprobleme
- **Infektion** im Ohr

Ohrenschmalz reinigt das Ohr von allein durch Kauen. Bei Hörgeräten: herausnehmen, reinigen.

**Nasenpflege:**
Bei mobilen Patienten leicht. Bei Sonden-Trägern (Magensonde, Sauerstoff) bilden sich oft **Krusten**:
1. **Feuchten Tupfer auflegen** — Kruste einweichen
2. **Nach außen abwischen** (vorsichtig)
3. **Bei Sonden**: Druckstellen am Nasenflügel prüfen (Dekubitus!), Pflaster kontrollieren."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Ohrmuschel (Auricula), Gehörgang, Cerumen, Trommelfell, Otitis externa]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wattestäbchen im Gehörgang sind sicher, wenn man vorsichtig ist"**
- **Fachbegriff:** Wattestäbchen-Verharmlosung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — auch bei Vorsicht ist das Risiko real. Die Fachgesellschaften (HNO, AWMF) raten **grundsätzlich** davon ab: Trommelfell-Perforationen entstehen auch bei erfahrenen Personen, und Ohrenschmalz wird eher tiefer gedrückt als entfernt. Merke: Gehörgang = Tabuzone für Pflegekräfte."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — auch vorsichtig ist das gefährlich. Die HNO-Ärzte sagen: **nie in den Gehörgang**. Trommelfell kann kaputt gehen. Ohrenschmalz wird tiefer geschoben. Merke: Nur die Ohrmuschel — nichts weiter rein."

**D2: "Die Nase muss man nicht extra pflegen, das reinigt sich selbst"**
- **Fachbegriff:** Selbstreinigungs-Mythos
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **bei mobilen Menschen** stimmt das, sie schneuzen sich. Aber **pflegebedürftige, bettlägerige oder Sonden-Patienten** können das nicht. Krusten, Schleim und Druckstellen bei Sondenträgern erfordern aktive Pflege. Merke: Je weniger der Patient selbst kann, desto aktiver deine Pflege."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — **gesunde Menschen** reinigen ihre Nase selbst. Aber **pflegebedürftige Menschen** (bettlägerig, Sonde) können das nicht. Bei Sonden: Druckstellen am Nasenflügel prüfen. Merke: Bei Sonden-Trägern aktiv pflegen."

**D3: "Hinter den Ohren reicht ein kurzer Wisch — da ist meistens nichts"**
- **Fachbegriff:** Hautfalten-Vernachlässigung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — hinter dem Ohr ist eine **Hautfalte** mit viel Schweißproduktion (Talgdrüsen). Ohne gründliche Reinigung entsteht **Intertrigo** (Hautpilz in feuchten Falten). Bei Brillen- oder Hörgeräte-Trägern zusätzlich Druckstellen. Merke: Hautfalten immer gründlich — nicht nur wischen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **hinter dem Ohr** ist eine Hautfalte. Dort schwitzt man viel. Ohne Reinigung kommen **Pilze** (Intertrigo). Bei Brille oder Hörgerät: Druckstellen möglich. Merke: Hautfalten immer gründlich pflegen."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. **Nichts in den Gehörgang** — Risiko für Trommelfell-Perforation und Cerumen-Pfropf. Nur die Ohrmuschel und die Falte dahinter (schwitzt stark) werden gereinigt. Nase: Krusten einweichen und nach außen abwischen. Bei Magen- oder O2-Sonde: Druckstellen am Nasenflügel prüfen (Dekubitus!)."

**B1 (250 Zeichen):** "Sehr gut. **Nichts in den Gehörgang** — das Trommelfell kann kaputt gehen. Nur die Ohrmuschel und hinter dem Ohr (Hautfalte, schwitzig) waschen. Nase: Krusten einweichen, nach außen abwischen. Bei Sonden: Druckstellen am Nasenflügel prüfen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Gefahren bestehen, wenn man im Gehörgang reinigt?"
- **Rückseite:** "Trommelfell-Perforation, Cerumen-Pfropf (tiefer geschoben) mit Hörminderung, Infektionsrisiko (Otitis externa). Daher: nur Ohrmuschel reinigen, nichts in den Gehörgang."
- **Kategorie:** handlung

---

## Baustein 10: haarpflege-im-bett

### Metadaten
- **bausteinId:** ganzkoerperpflege-haarpflege
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Herr S. (82, Zustand nach Halswirbel-Operation) soll im Bett die Haare gewaschen bekommen. Worauf musst du bei der Kopfhaltung besonders achten — und warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Haarwäsche im Bett: **Haarwaschschale oder -wanne** nutzen. Kopf leicht überstrecken — aber **HWS-Beschwerden ausschließen** (Halswirbelsäule-OP, Rheuma, Arthrose!). Temperatur und Augen schützen (Handtuch über Augen). Warmes Wasser, mildes Shampoo."

**B1 (225 Zeichen):** "Haare waschen im Bett: Mit **Haarwaschschale**. Kopf leicht nach hinten. **Vorsicht bei HWS-Problemen** (Wirbel-OP, Rheuma)! Handtuch über die Augen (gegen Seife). Warmes Wasser, mildes Shampoo. Nach dem Waschen: gut abtrocknen."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Haare waschen im Bett ist aufwendig, aber wichtig für Wohlbefinden und Hautgesundheit der Kopfhaut.

**Vorbereitung:**
1. **Haarwaschschale (Auffangwanne)** unter den Kopf — Wasser läuft in einen Eimer
2. Wasserkanne mit warmem Wasser (37-40 °C)
3. Handtuch rollen, in den Nacken legen (Polster)
4. **Augenschutz**: zweites Handtuch oder Waschlappen über die Augen
5. Mildes Shampoo, ggf. Spülung bei langen Haaren

**Durchführung:**
- Kopf **leicht überstrecken** — aber **KEINE Überstreckung bei HWS-Problemen** (Z.n. HWS-OP, Rheuma, schwere Arthrose, Bandscheibenvorfall HWS). Im Zweifel Arzt fragen oder Trockenshampoo verwenden.
- Haare nass machen, Shampoo einmassieren, gründlich ausspülen
- Spülung nur bei Bedarf
- **Nach dem Waschen sofort Trockentuch um den Kopf**
- **Föhnen** bei Temperatur-empfindlichen Patienten vorsichtig (Verbrennungsgefahr)

**Alternativen bei Bett-Gebundenheit oder HWS-Risiko:**
- **Trockenshampoo** (Spray oder Pulver)
- **Haarwaschhauben** (fertig getränkt, erwärmbar) (Juchli ATLs, 1987)"

**B1 (620 Zeichen):**
"Haare im Bett waschen ist eine größere Sache, aber wichtig für das Wohlgefühl.

**Vorbereitung:**
1. **Haarwaschschale** unter den Kopf — das Wasser läuft in einen Eimer
2. Kanne mit warmem Wasser (37-40 °C)
3. Ein zusammengerolltes Handtuch in den Nacken
4. Ein Handtuch über die **Augen** (gegen Seife)
5. Mildes Shampoo

**Waschen:**
- Kopf **leicht nach hinten** — aber **NICHT bei HWS-Problemen** (Wirbel-OP, Rheuma, Arthrose). Frag im Zweifel den Arzt oder nimm **Trockenshampoo**.
- Haare nass machen, Shampoo einreiben, gut ausspülen
- Sofort Handtuch um den Kopf
- **Beim Föhnen vorsichtig** — nicht zu heiß (Verbrennung)

**Wenn Wasser nicht geht:**
- **Trockenshampoo** (Spray oder Pulver)
- **Haarwasch-Hauben** (fertig, kann man warm machen)"

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [HWS (Halswirbelsäule), Überstreckung, Trockenshampoo, Haarwaschschale]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei allen Patienten kann der Kopf bei der Haarwäsche stark überstreckt werden"**
- **Fachbegriff:** HWS-Ignoranz
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **bei HWS-Problemen** (Z.n. HWS-OP, Rheuma, Arthrose, Bandscheibenvorfall) ist **Überstreckung kontraindiziert**. Folgen: Schmerzen, Nervenreizung, im schlimmsten Fall Wirbelverschiebung. **Vor jeder Haarwäsche** HWS-Anamnese und ggf. Trockenshampoo. Merke: HWS-Status klären — immer."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — bei **HWS-Problemen** (Wirbel-OP, Rheuma) darf der Kopf **nicht überstreckt** werden. Das kann Schmerzen oder Nerven-Probleme machen. Darum: vor dem Waschen fragen. Bei Problem: Trockenshampoo nehmen. Merke: HWS immer prüfen."

**D2: "Heißes Wasser wäscht besser als warmes"**
- **Fachbegriff:** Temperatur-Irrtum-Haare
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **37-40 °C** ist optimal. Heißes Wasser trocknet die Kopfhaut aus, reizt sie und kann bei Sensibilitätsstörungen (Schlaganfall, Diabetes, Altershaut) Verbrennungen verursachen. Zudem öffnet es die Haarstruktur zu stark. Merke: Körperwarmes Wasser, nie heiß."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — **37-40 °C** ist richtig. **Heiß** trocknet die Kopfhaut aus und kann **Verbrennungen** machen, besonders bei Diabetes, Schlaganfall oder alter Haut. Merke: Warm ist gut — heiß ist schlecht."

**D3: "Trockenshampoo ist eine Notlösung, Haare waschen ist immer besser"**
- **Fachbegriff:** Trockenshampoo-Abwertung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **Trockenshampoo** ist bei HWS-Risiko, Kreislaufproblemen, akuten Erkrankungen oder fehlender Toleranz **die richtige Methode**, nicht nur eine Notlösung. Die Kopfhaut bleibt sauber, der Patient wird nicht belastet. Merke: Trockenshampoo ist gleichwertig — bei Bedarf die erste Wahl."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **Trockenshampoo** ist keine Notlösung. Bei HWS-Problemen, Kreislauf-Problemen oder schwer kranken Menschen ist es **richtig**. Die Kopfhaut bleibt sauber, der Patient wird nicht gestresst. Merke: Trockenshampoo ist ok."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Bei Herrn S. **vor dem Waschen HWS-Status klären**: Nach HWS-OP ist Überstreckung meist kontraindiziert — Rücksprache mit dem Arzt. Alternative: **Trockenshampoo** oder Haarwaschhaube. Wenn Überstreckung möglich: Nackenrolle, warmes Wasser (37-40 °C), Augenschutz, mildes Shampoo."

**B1 (250 Zeichen):** "Sehr gut. Bei Herrn S. **vorher HWS prüfen**: Nach Wirbel-OP darf der Kopf oft **nicht überstreckt** werden. Dann mit dem Arzt reden. Alternative: **Trockenshampoo**. Wenn erlaubt: Nackenrolle, warmes Wasser 37-40 °C, Handtuch über Augen, mildes Shampoo."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Patientengruppen dürfen bei der Haarwäsche im Bett NICHT überstreckt werden?"
- **Rückseite:** "Z.n. HWS-OP, Rheuma, schwere Arthrose, Bandscheibenvorfall der HWS. Alternative: Trockenshampoo oder Haarwaschhaube. Im Zweifel Arzt fragen."
- **Kategorie:** handlung

---

## Baustein 11: nagelpflege-fingernaegel-fussnaegel

### Metadaten
- **bausteinId:** ganzkoerperpflege-nagelpflege
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Fingernägel rund, Fußnägel gerade — warum die unterschiedliche Schnittform? Welche Komplikation will man mit dem geraden Schnitt am Fußnagel verhindern?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "**Fingernägel: rund oder oval**, zwei Millimeter länger als die Fingerkuppe. **Fußnägel: gerade** — so wird der Unguis incarnatus (**eingewachsener Nagel**) vermieden. **Feile bevorzugt**, Schere nur in Ausnahmen. **Nie in die Nagelecken schneiden.**"

**B1 (230 Zeichen):** "**Fingernägel rund** schneiden. **Fußnägel gerade** schneiden. Bei Fußnägeln: **gerade verhindert eingewachsene Nägel** (sehr schmerzhaft). Lieber mit **Feile** arbeiten. Nicht in die Ecken schneiden. Vorher Nägel aufweichen (Wasserbad)."

- **Step-Typ:** comparison (Fingernägel vs. Fußnägel — Schnittform)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die **Schnittform** unterscheidet sich aus anatomischen Gründen:

**Fingernägel — rund oder oval:**
- Folgt der natürlichen Fingerkuppe
- Länge: ca. 2 mm über die Fingerkuppe hinaus
- Zu kurz = Schmerz, weil das Nagelbett freiliegt
- Zu lang = Keimfalle, Verletzungsgefahr beim Patientenkontakt

**Fußnägel — gerade:**
- Schnittform **senkrecht, nicht rund**
- Grund: **Unguis incarnatus (eingewachsener Nagel)** verhindern
- Beim runden Schneiden wachsen die Nagelecken in den seitlichen Nagelwall — Entzündung, Schmerz, im schlimmsten Fall Chirurgie
- Nicht in die Nagelecken schneiden
- Länge: bis zur Zehenkuppe, nicht kürzer

**Werkzeug:**
- **Feile (bevorzugt)**: Keine scharfe Kante, gleichmäßiges Formen
- **Nagelknipser**: Für dicke Fußnägel, in kleinen Schritten
- **Schere nur in Ausnahmen** (Verletzungsgefahr bei unruhigen Patienten)

**Vorbereitung:** Nägel 5-10 Minuten in warmem Wasser aufweichen — leichter zu schneiden. Bei älteren, verhornten Nägeln (Onychogrypose) ggf. Podologie einschalten. (Juchli ATLs, 1987)"

**B1 (620 Zeichen):**
"Die **Schnittform** ist für Finger und Füße anders:

**Fingernägel rund:**
- Passt zur Fingerkuppe
- Länge: etwa 2 mm länger als die Kuppe
- Zu kurz = tut weh
- Zu lang = Keime, Verletzungen

**Fußnägel gerade:**
- **Gerade, nicht rund**
- Grund: **eingewachsene Nägel verhindern** (Unguis incarnatus)
- Bei rundem Schnitt wachsen die Ecken in die Haut — Entzündung, Schmerz, manchmal Operation
- **Nicht in die Ecken schneiden**
- Länge: bis zur Zehenkuppe

**Werkzeug:**
- **Feile (am besten)**: keine scharfe Kante
- **Nagelknipser**: für dicke Fußnägel, kleine Stücke
- **Schere nur in Ausnahmen** (Unfall-Gefahr)

**Vorher:** Nägel 5-10 Minuten in warmes Wasser — werden weicher. Bei alten, dicken Nägeln: **Podologie** holen."

- **Erklärungs-Step:** stepType `comparison` (Fingernägel rund vs. Fußnägel gerade)
- **Glossar-Begriffe:** [Unguis incarnatus, Nagelwall, Nagelbett, Onychogrypose, Podologie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Fußnägel sollten rund geschnitten werden, weil das schöner aussieht"**
- **Fachbegriff:** Ästhetik-vor-Medizin-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Fußnägel gerade** ist medizinisch geboten, nicht Geschmackssache. Rund geschnitten wachsen die Nagelecken in den Nagelwall (Unguis incarnatus) — Entzündung, Schmerz, ggf. chirurgische Entfernung. Bei Diabetes mit Durchblutungsstörung lebensgefährlich. Merke: Gerade, nicht rund."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **Fußnägel gerade** ist richtig, nicht Geschmack. **Rund** geschnitten wachsen die Ecken in die Haut: Entzündung, Schmerz, manchmal OP. Bei Diabetes sehr gefährlich. Merke: Gerade, nicht rund."

**D2: "Die Schere ist schneller als die Feile, also besser"**
- **Fachbegriff:** Werkzeug-Fehlwahl
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die **Feile ist sicherer**: keine scharfe Kante am Nagel (reißt nicht, kein Einreißen), keine Verletzung der Haut bei Zittern oder Bewegung. Die Schere eignet sich nur für kooperative Patienten und feste, normale Nägel. Bei Unruhe, dickem Nagel, Sensibilitätsstörung: Feile oder Knipser."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die **Feile ist sicherer**. Die Schere kann die Haut verletzen, besonders wenn der Patient zittert oder sich bewegt. Feile: keine scharfe Kante, sicher. Merke: Feile zuerst, Schere nur in Ausnahmen."

**D3: "Nägel zu schneiden ist immer ohne Vorbereitung möglich"**
- **Fachbegriff:** Aufweich-Nachlässigkeit
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **Nägel 5-10 Minuten in warmem Wasser aufweichen** erleichtert das Schneiden erheblich. Harte Nägel (typisch bei älteren Menschen) brechen beim Schneiden ab, lange Splitter entstehen, die sich wieder einwachsen. Aufweichen = sauberer, sicherer, angenehmer. Merke: Wasserbad vor jedem Nagelschnitt."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **Nägel weichst du vorher in warmem Wasser auf** (5-10 Minuten). Harte Nägel (alte Menschen) brechen sonst und es entstehen Splitter, die sich wieder einwachsen. Merke: Immer erst Wasserbad, dann schneiden."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. **Fußnägel gerade** verhindert den Unguis incarnatus — eingewachsene Nagelecken mit Entzündung und Schmerz. Bei rundem Schnitt wächst der Nagel in den seitlichen Nagelwall. Fingernägel dürfen rund (folgen der Fingerkuppe). Werkzeug: Feile zuerst, vorher aufweichen."

**B1 (235 Zeichen):** "Sehr gut. **Fußnägel gerade** verhindert **eingewachsene Nägel**. Rund schneiden = Ecke wächst in die Haut = Entzündung, Schmerz. Fingernägel rund ist ok. Werkzeug: Feile zuerst. Vorher Nägel in warmem Wasser aufweichen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum werden Fußnägel gerade geschnitten — und nicht rund?"
- **Rückseite:** "Gerade verhindert Unguis incarnatus (eingewachsener Nagel). Runde Schnittform lässt die Nagelecken in den Nagelwall wachsen — Entzündung, Schmerz, bei Diabetes gefährlich."
- **Kategorie:** handlung

---

## Baustein 12: diabetes-fusspflege-podologe

### Metadaten
- **bausteinId:** ganzkoerperpflege-diabetes-fuss
- **bloomLevel:** 4
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Frau B. hat seit 20 Jahren Typ-2-Diabetes. Ihre Fußnägel sind lang. Darfst du sie schneiden? Begründe deine Entscheidung mit dem, was in einem Diabetes-Fuß besonders ist."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "**Bei Diabetes mellitus**: Fußnägel-Schnitt **nur durch Podologe**. Grund: Diabetes führt zu **Neuropathie** (Gefühllosigkeit) und **Mikroangiopathie** (schlechte Wundheilung). Kleinste Verletzung kann zum diabetischen Fußsyndrom (Ulkus, Amputation) führen."

**B1 (230 Zeichen):** "**Bei Diabetes: Fußnägel schneidet nur der Podologe.** Grund: Diabetes macht die Füße **gefühllos** (Neuropathie) und die Wundheilung **schlecht**. Kleine Wunden heilen nicht und werden zum **diabetischen Fußsyndrom** — Ulkus, Amputation."

- **Step-Typ:** text (displayFormat: news — als Warnhinweis)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Der **diabetische Fuß** ist eine der gefährlichsten Spätfolgen des Diabetes mellitus. Zwei Mechanismen wirken zusammen:

**1. Diabetische Neuropathie:**
Schädigung der peripheren Nerven durch dauerhaft hohe Blutzucker-Werte. Folge: **Gefühllosigkeit** an Füßen und Zehen. Ein kleiner Schnitt wird nicht bemerkt. Druckstellen werden nicht wahrgenommen.

**2. Diabetische Mikroangiopathie:**
Schädigung der kleinen Blutgefäße. Folge: **Mangeldurchblutung** im Gewebe. Wunden bekommen zu wenig Sauerstoff und Nährstoffe — sie heilen kaum.

**Konsequenz für die Pflege:**
Das Schneiden von Fußnägeln, Entfernen von Hornhaut oder Hühneraugen ist bei Diabetes **Podologie-Tätigkeit**. Podologinnen/Podologen haben eine 2-jährige Ausbildung in medizinischer Fußpflege, kennen die Besonderheiten und haften bei Fehlern.

**Pflegekraft darf:**
- Füße waschen, abtrocknen (besonders Zehenzwischenräume!)
- Haut eincremen (nicht zwischen die Zehen — Pilzrisiko)
- Füße inspizieren — **tägliche Hautkontrolle!**
- Feilen (sanfte Pflege, nicht schneiden)

**Pflegekraft darf NICHT bei Diabetes:**
- Nägel schneiden
- Hornhaut entfernen
- Hühneraugen behandeln

Bei Auffälligkeiten (Rötung, Wunde, Druckstelle): sofort Arzt informieren. Diabetisches Fußsyndrom ist die häufigste Ursache nicht-unfallbedingter Amputationen in Deutschland. (AWMF-S3-NVL Typ-2-Diabetes, 2023)"

**B1 (640 Zeichen):**
"Der **diabetische Fuß** ist eine gefährliche Folge von Diabetes. Zwei Gründe:

**1. Die Nerven sind kaputt (Neuropathie):**
Zu hoher Blutzucker schädigt die Nerven in den Füßen. Folge: **Die Füße spüren nichts mehr**. Ein Schnitt wird nicht bemerkt. Auch Druck oder ein Stein im Schuh nicht.

**2. Die Durchblutung ist schlecht (Mikroangiopathie):**
Die kleinen Gefäße sind beschädigt. Folge: **Wunden heilen nicht**. Sie werden eher größer.

**Was bedeutet das für die Pflege?**
Fußnägel schneiden, Hornhaut entfernen = **nur Podologe**. Podologen haben 2 Jahre Ausbildung dafür.

**Pflegekraft darf:**
- Füße waschen und abtrocknen (besonders **zwischen den Zehen**!)
- Füße eincremen (nicht zwischen den Zehen — Pilz-Gefahr)
- Füße **jeden Tag** anschauen
- Mit Feile vorsichtig

**Pflegekraft darf NICHT bei Diabetes:**
- Nägel schneiden
- Hornhaut entfernen
- Hühneraugen behandeln

Bei **Rötung oder Wunde**: sofort Arzt. Der diabetische Fuß ist die häufigste Ursache für Amputationen in Deutschland."

- **Erklärungs-Step:** stepType `text` (displayFormat: news)
- **Glossar-Begriffe:** [Diabetische Neuropathie, Mikroangiopathie, Diabetisches Fußsyndrom, Podologe, Ulkus, Amputation]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn ich vorsichtig bin, kann ich Diabetes-Fußnägel auch selbst schneiden"**
- **Fachbegriff:** Vorsichts-Selbstüberschätzung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **Vorsicht ersetzt keine Qualifikation**. Der Patient hat **keine Schmerzempfindung** — er merkt nicht, wenn du zu eng schneidest. Die Wunde heilt **nicht** (Mikroangiopathie) — sie wird chronisch, infiziert sich, Amputation droht. Das ist **haftungsrechtlich** eine Podologie-Tätigkeit. Merke: Immer Podologe."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **Vorsichtig sein reicht nicht**. Der Patient **fühlt nicht**, wenn du zu eng schneidest. Die Wunde **heilt nicht** — Entzündung, manchmal Amputation. Das ist auch rechtlich eine Podologen-Aufgabe. Merke: Diabetes-Fuß = Podologe."

**D2: "Zwischen den Zehen soll man immer eincremen, weil die Haut dort trocken wird"**
- **Fachbegriff:** Eincreme-Bereichs-Fehlwahl
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **zwischen die Zehen NICHT eincremen**. Die Haut ist dort von Natur aus feucht. Zusätzliche Creme = Feuchtigkeitsstau = idealer Nährboden für **Fußpilz (Tinea pedis)**, bei Diabetes-Patienten oft Eintrittspforte für Bakterien. Eincremen nur auf Fußsohle und Fußrücken. Merke: Zwischen den Zehen trocken halten."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **zwischen den Zehen NICHT eincremen**. Dort ist es feucht. Creme macht es noch feuchter — dann kommt **Fußpilz**. Bei Diabetes wird das leicht eine Wunde. Eincremen nur oben und unten am Fuß. Merke: Zwischen den Zehen trocken."

**D3: "Fußinspektion ist bei Diabetes einmal pro Woche ausreichend"**
- **Fachbegriff:** Inspektions-Unterschätzung
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — bei **Diabetes ist tägliche Fußinspektion Standard** (Deutsche Diabetes Gesellschaft, NVL). Neue Druckstellen, Rötungen oder kleine Verletzungen entwickeln sich schnell zu Ulzera. Der Patient spürt sie nicht. Inspektion bei jeder Körperpflege und Dokumentation. Merke: Jeden Tag Füße ansehen."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — bei Diabetes **jeden Tag** die Füße anschauen. Neue Druckstellen, Rötung, kleine Wunden — alles entwickelt sich schnell zu einer schlimmen Wunde. Der Patient spürt es nicht. Merke: Tägliche Fuß-Kontrolle ist Standard."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. **Nein — Frau B. bekommt eine Podologie-Überweisung.** Grund: Diabetes-Neuropathie (Füße spüren nichts) + Mikroangiopathie (Wunden heilen nicht). Kleinste Verletzung → diabetisches Fußsyndrom → häufigste Ursache nicht-unfallbedingter Amputationen. Du wäschst, cremst (nicht zwischen Zehen), inspizierst täglich."

**B1 (250 Zeichen):** "Sehr gut. **Nein — Frau B. geht zum Podologen.** Grund: Ihre Füße spüren nichts (Neuropathie) und Wunden heilen schlecht (Mikroangiopathie). Kleine Verletzung = großes Problem. Du darfst: waschen, cremen (nicht zwischen Zehen), **jeden Tag** anschauen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum darfst du bei einem Diabetes-Patienten keine Fußnägel schneiden?"
- **Rückseite:** "Diabetische Neuropathie (kein Schmerzempfinden) + Mikroangiopathie (Wunden heilen nicht) = jede Verletzung kann zum diabetischen Fußsyndrom werden. Nagelschnitt ist Podologie-Tätigkeit."
- **Kategorie:** recht

---

## Baustein 13: erysipel-erkennen

### Metadaten
- **bausteinId:** ganzkoerperpflege-erysipel
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Beim Waschen fällt dir am rechten Unterschenkel eine **scharf begrenzte Rötung** auf. Die Stelle ist warm und schmerzhaft. Der Patient hat Fieber. Was könnte das sein — und wie dringend handelst du?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "**Erysipel (Wundrose)** ist eine bakterielle Haut-Infektion (meist Streptokokken). **Leitsymptome:** scharf begrenzte, feuerrote Schwellung, Überwärmung, Schmerz, oft Fieber und Krankheitsgefühl. Häufig am Unterschenkel (Eintrittspforte: kleine Hautverletzung). **Arzt sofort informieren.**"

**B1 (235 Zeichen):** "**Erysipel** (Wundrose) ist eine Infektion der Haut durch Bakterien (meist Streptokokken). **Zeichen:** rote, scharf begrenzte Stelle, **warm**, **schmerzhaft**, oft **Fieber**. Meistens am Unterschenkel. Eintritt: kleine Wunde. **Arzt sofort rufen.**"

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"**Erysipel** (Wundrose) ist eine akute bakterielle Infektion der oberen Dermis und der oberflächlichen Lymphgefäße. Erreger meist **β-hämolysierende Streptokokken der Gruppe A**, seltener Staphylokokken.

**Klassische Leitsymptome (DDG 2020):**
- **Rötung** — feuerrot, **scharf begrenzt** (oft zungenförmig)
- **Schwellung** — überwärmt, druckempfindlich
- **Schmerz** — oft stark
- **Allgemeinsymptome** — Fieber (meist >38,5 °C), Schüttelfrost, Krankheitsgefühl

**Häufige Lokalisation:** Unterschenkel (80%), Gesicht. Eintrittspforte: Interdigitalmykose (Fußpilz), kleine Verletzung, Ulcus cruris, Dekubitus.

**Warum ist Erysipel ein Notfall?**
- Unbehandelt: Ausbreitung, Sepsis möglich
- Therapie: **Antibiotikum** (meist Penicillin) — je früher, desto besser
- **Pflegekraft-Aufgabe:** Erkennen, **sofort Arzt informieren**, bis zur Diagnose **Hochlagerung**, Kühlung in Absprache

**Abgrenzung:** Rötung bei Dekubitus I ist **diffus**, nicht scharf begrenzt, und ohne Fieber. Erysipel-Rötung lässt sich von gesunder Haut **klar abgrenzen**. (Deutsche Dermatologische Gesellschaft S2k-Leitlinie Erysipel, 2020)"

**B1 (600 Zeichen):**
"**Erysipel** (Wundrose) ist eine **bakterielle Haut-Infektion**. Meistens durch **Streptokokken**.

**Die 4 Haupt-Zeichen:**
- **Rötung** — feuerrot, **scharf begrenzt** (wie mit Stift gezogen)
- **Schwellung** — dicke, warme Stelle
- **Schmerz** — oft stark
- **Fieber** — meist über 38,5 °C, Schüttelfrost, Patient fühlt sich krank

**Wo?** Meistens am Unterschenkel (80%). Manchmal im Gesicht. **Eintritt:** Kleine Wunde, Fußpilz zwischen den Zehen, alte Wunde.

**Warum ist das dringend?**
- Ohne Behandlung breitet es sich aus — bis zur **Blutvergiftung (Sepsis)**
- Behandlung: **Antibiotikum** — je schneller, desto besser

**Was tust du?**
- **Arzt sofort rufen**
- Bein **hochlegen**
- Kühlen nur nach Absprache

**Unterschied zu Dekubitus:** Dekubitus-Rötung ist **nicht scharf begrenzt**, kein Fieber."

- **Erklärungs-Step:** stepType `text` (displayFormat: scenario)
- **Glossar-Begriffe:** [Erysipel, Streptokokken, Sepsis, Interdigitalmykose, Dermis]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Eine Hautrötung ist immer harmlos, solange der Patient kein Fieber hat"**
- **Fachbegriff:** Fieber-als-einziges-Kriterium-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Fieber kann fehlen**, besonders bei älteren Menschen, Immunsupprimierten oder im Frühstadium. **Scharfe Begrenzung, Überwärmung, Schmerz** sind auch ohne Fieber Alarmzeichen. Dekubitus-Rötung dagegen ist **unscharf begrenzt**. Merke: Die Grenzen der Rötung sind diagnostisch wichtig."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **Fieber kann fehlen**, besonders bei alten oder schwachen Menschen. Wichtig sind auch: scharfe Grenze, warme Stelle, Schmerz. Dekubitus-Rötung ist **nicht scharf begrenzt**. Merke: Achte auf die Grenze, nicht nur Fieber."

**D2: "Ein Erysipel kann man mit normaler Wundversorgung selbst behandeln"**
- **Fachbegriff:** Selbstbehandlungs-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Erysipel ist eine **systemische bakterielle Infektion**, die **Antibiotika** erfordert (meist Penicillin). Ohne Antibiotikum droht **Sepsis** (Blutvergiftung). Lokale Wundversorgung genügt NICHT. Die Pflegekraft erkennt, informiert den Arzt und unterstützt die antibiotische Therapie. Merke: Erysipel = Arzt."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Erysipel braucht **Antibiotika** (Medikamente gegen Bakterien). Ohne Medikament kann eine **Blutvergiftung** entstehen. Nur Verband reicht NICHT. Deine Aufgabe: Erkennen, Arzt rufen, dann beim Behandeln helfen. Merke: Erysipel = Arzt sofort."

**D3: "Wenn der Patient keinen Schmerz äußert, ist es sicher kein Erysipel"**
- **Fachbegriff:** Schmerz-als-Ausschluss-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — bei **Demenz**, **Diabetes-Neuropathie**, **Aphasie** oder unter Schmerzmitteln kann der Schmerz fehlen oder nicht kommuniziert werden. Die **visuellen Zeichen** (scharfe Rötung, Schwellung, Überwärmung) plus Temperatur-Messung sind dann entscheidend. Merke: Kein geäußerter Schmerz ≠ kein Erysipel."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — bei **Demenz**, **Diabetes** oder **Sprach-Problemen** (Aphasie) sagt der Patient vielleicht nichts. Du achtest dann auf: **scharfe Rötung, Schwellung, warme Haut, Fieber**. Merke: Kein 'Aua' heißt nicht 'kein Erysipel'."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Die Kombination **scharf begrenzte Rötung + Überwärmung + Schmerz + Fieber** am Unterschenkel spricht stark für ein **Erysipel**. Das ist dringend: **Arzt sofort informieren**. Bis dahin Bein hochlagern, Temperatur messen, Dokumentation (Fotos wenn möglich, Ausdehnung markieren). Therapie: Antibiotikum."

**B1 (250 Zeichen):** "Sehr gut. **Scharf begrenzte Rötung + warm + Schmerz + Fieber** am Bein = wahrscheinlich **Erysipel**. **Arzt sofort rufen!** Bis dahin: Bein hochlegen, Fieber messen, dokumentieren. Therapie: **Antibiotikum**. Ohne Behandlung kann es eine Blutvergiftung werden."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 4 Leitsymptome hat das Erysipel — und wie unterscheidet es sich vom Dekubitus I?"
- **Rückseite:** "Scharf begrenzte Rötung, Überwärmung, Schmerz, Fieber. Unterschied zu Dekubitus I: Erysipel-Rötung ist **scharf begrenzt**, Dekubitus-Rötung diffus. Erysipel: Arzt sofort (Antibiotikum)."
- **Kategorie:** assessment

---

## Baustein 14: hautbeobachtung-beim-waschen

### Metadaten
- **bausteinId:** ganzkoerperpflege-hautbeobachtung
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Pflege-Experten sagen: 'Die Ganzkörperwaschung ist das beste Assessment überhaupt.' Warum? Überlege, welche Informationen du gleichzeitig sammelst, wenn du jemanden wäschst."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Beim Waschen siehst du den **ganzen Körper** — das gibt es sonst nie. Du beobachtest: **Hautfarbe, Rötungen, Wunden, Druckstellen, Ödeme, Turgor, Ekchymosen (Blutergüsse), Narben, Exantheme**. Kombiniert mit Gespräch (Schmerz? Juckreiz?) = lückenloses Assessment."

**B1 (235 Zeichen):** "Beim Waschen siehst du den **ganzen Körper** — sonst nie. Du siehst: **Farbe der Haut, Rötungen, Wunden, Druckstellen, Schwellung (Ödem), trockene Haut, blaue Flecken, Narben, Ausschlag**. Dazu: Gespräch (Schmerz? Juckt es?). Perfektes Assessment."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Die Ganzkörperwaschung ist das **wertvollste Routine-Assessment** in der Pflege. In keiner anderen Situation siehst du den Patienten so komplett. Was du beobachtest:

**Hautbeobachtung:**
- **Farbe**: blass (Anämie?), zyanotisch (O2-Mangel?), gelblich (Ikterus?), gerötet (Entzündung? Dekubitus?)
- **Trockenheit vs. Feuchtigkeit**: Dehydration? Schweißausbrüche?
- **Turgor**: Elastizität testen (Falte am Handrücken) — bei schlecht = Exsikkose
- **Wunden, Kratzer, Druckstellen**: Dekubitus? Erysipel? Ulcus cruris?
- **Ekchymosen**: Neue Blutergüsse? Hinweis auf Sturz, Gerinnungsstörung, Medikamente
- **Ödeme**: Beine geschwollen? Herzinsuffizienz?
- **Exantheme**: Ausschlag — Medikamentenreaktion? Infektion?
- **Narben und Veränderungen**: Auffälligkeiten dokumentieren

**Körperliche Beobachtung:**
- Mimik und Kommunikation (Schmerz, Orientierung)
- Kraft und Beweglichkeit (aktivierende Pflege)
- Atmung (Frequenz, Tiefe, Schmerz beim Einatmen)

**Dokumentation:** Jede Auffälligkeit **schriftlich**, ggf. mit Foto (bei Einverständnis). Den Pflegebericht nutzen — 'Beim Waschen auffällig: ...'

Diese integrierte Beobachtung kann klassische Visiten ersetzen — die Pflegekraft ist oft die Erste, die Veränderungen bemerkt. (DNQP Dekubitusprophylaxe 2017/2024)"

**B1 (640 Zeichen):**
"Die **Ganzkörperwaschung** ist das **beste Routine-Assessment** in der Pflege. Du siehst den Patienten komplett. Das gibt es sonst nicht.

**Was du an der Haut beobachtest:**
- **Farbe**: blass (wenig Blut?), blau (wenig Sauerstoff?), gelb (Leber-Problem?), rot (Entzündung?)
- **Trocken oder nass**: wenig getrunken? viel geschwitzt?
- **Spannung** (Turgor): Falte am Handrücken — bleibt sie stehen = zu wenig Flüssigkeit
- **Wunden, Kratzer, Druckstellen**: Dekubitus? Infektion?
- **Blaue Flecken**: neu? Sturz? Medikament?
- **Geschwollene Beine** (Ödem): Herz-Problem?
- **Hautausschlag**: Medikament? Infektion?

**Was du am Menschen siehst:**
- **Gesicht**: Schmerz? Orientierung?
- **Kraft und Beweglichkeit**: Was kann er noch selbst?
- **Atmung**: schnell? flach? schmerzhaft?

**Dokumentieren:** Alles, was auffällt. 'Beim Waschen aufgefallen: ...' Pflegekräfte sehen Veränderungen oft als Erste — vor dem Arzt."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Turgor, Zyanose, Ikterus, Ekchymose, Exanthem, Exsikkose, Ödem]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Hautbeobachtung ist Sache des Arztes — ich wasche nur"**
- **Fachbegriff:** Kompetenz-Abschiebung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Hautbeobachtung ist Kernkompetenz der Pflege** (PflBG § 5). Der Arzt sieht den Patienten max 5 Min pro Tag. Du bist dort, wenn er gewaschen, mobilisiert, versorgt wird. Veränderungen siehst du als **Erste**. Dokumentation und Meldung: Pflicht, nicht Option. Merke: Pflege ist Frühwarnsystem."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **Haut anschauen ist Pflege-Aufgabe**. Der Arzt sieht den Patienten 5 Minuten am Tag. Du bist beim Waschen dabei. **Du siehst Veränderungen zuerst**. Dokumentieren und melden: Pflicht. Merke: Pflege ist das Frühwarnsystem."

**D2: "Wenn der Patient nichts sagt, gibt es auch nichts zu dokumentieren"**
- **Fachbegriff:** Passivitäts-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — viele Veränderungen **siehst** du, auch wenn der Patient sie nicht spürt oder kommuniziert. Demenz, Aphasie, Delir, Neuropathie — alle verändern die Kommunikation, nicht die Haut. **Visuelle Inspektion ist unabhängig von Rückmeldung**. Merke: Schweigen ≠ Gesundheit."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — auch wenn der Patient **nichts sagt**, siehst du vieles. Bei Demenz, Aphasie oder Neuropathie fehlt die Rückmeldung, aber die Haut zeigt es. Merke: Was du siehst, dokumentierst du — auch ohne Worte vom Patienten."

**D3: "Kleine Veränderungen (einzelner blauer Fleck) muss man nicht dokumentieren"**
- **Fachbegriff:** Bagatellisierungs-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **jede Auffälligkeit** wird dokumentiert, auch scheinbar 'kleine'. Ein neuer blauer Fleck kann Sturzfolge, Gerinnungsproblem oder Hinweis auf Misshandlung sein. Erst die Summe der Einträge ergibt ein Bild. Juristisch: Was nicht dokumentiert ist, gilt als nicht geschehen. Merke: Im Zweifel eintragen."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **jede kleine Sache dokumentieren**. Ein neuer blauer Fleck kann Sturz, Medikamenten-Problem oder Misshandlung bedeuten. Erst mit mehreren Einträgen erkennt man ein Muster. Rechtlich: Nicht dokumentiert = nicht gemacht. Merke: Lieber zu viel als zu wenig."

### Richtig-Feedback
**C1 (300 Zeichen):** "Genau. Beim Waschen siehst du **die ganze Haut** (Rötung, Druckstelle, Wunde, Ekchymose, Ödem, Ausschlag), prüfst **Turgor**, beobachtest **Mimik und Atmung**, sprichst mit dem Patienten (Schmerz, Orientierung). Diese integrierte Beobachtung ist nicht nur Nebeneffekt — sie ist der eigentliche Wert der Pflege. Alles dokumentieren."

**B1 (255 Zeichen):** "Sehr gut. Beim Waschen siehst du **die ganze Haut** (Rötung, Druckstelle, Wunde, blaue Flecken, Schwellung, Ausschlag), prüfst **Hautspannung**, schaust auf **Gesicht und Atmung**, redest mit dem Patienten. Alles dokumentieren — Pflege sieht Veränderungen als Erste."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist die Ganzkörperwaschung das wichtigste Pflege-Assessment?"
- **Rückseite:** "Einziger Moment mit komplettem Sichtbild des Patienten — Haut, Wunden, Druckstellen, Ödeme, Turgor, Narben, Mimik, Atmung gleichzeitig. Pflege ist dadurch das Frühwarnsystem."
- **Kategorie:** assessment

---

## Baustein 15: beruhigende-vs-belebende-waschung

### Metadaten
- **bausteinId:** ganzkoerperpflege-waschformen
- **bloomLevel:** 4
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-15]

### Stufe 1 — Denkfrage
- **Frage:** "Herr F. ist unruhig, greift ständig in die Luft, schläft seit 2 Nächten kaum. Frau G. wirkt müde, reagiert kaum, liegt apathisch im Bett. Welche Waschform würdest du bei wem wählen — und warum wirkt sie anders?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "**Basale Stimulation** nach Fröhlich/Bienstein kennt zwei Waschformen: **Beruhigende Waschung** = **MIT der Haarwuchsrichtung** (aktiviert Parasympathikus, senkt Erregung). **Belebende Waschung** = **GEGEN die Haarwuchsrichtung** (aktiviert Sympathikus, steigert Wachheit)."

**B1 (240 Zeichen):** "**Basale Stimulation** (nach Fröhlich) hat zwei Waschformen: **Beruhigend** = **mit der Haarrichtung** waschen (macht ruhig). **Belebend** = **gegen die Haarrichtung** waschen (macht wach). Sehr unterschiedliche Wirkung, gleiche Reihenfolge."

- **Step-Typ:** comparison (Tabelle beruhigend vs. belebend)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Die **Basale Stimulation** (Konzept nach Fröhlich/Bienstein) nutzt bewusste Reize bei der Ganzkörperpflege. Zwei gegensätzliche Waschformen sind besonders bekannt:

**Beruhigende Ganzkörperwaschung:**
- **Richtung: MIT der Haarwuchsrichtung** (d.h. vom Körperzentrum weg, z.B. an den Armen von der Schulter zur Hand)
- **Temperatur: körperwarm** (37-38 °C)
- **Tempo: langsam, gleichmäßig**
- **Druck: mittelschwer, großflächig**
- **Wirkung:** Aktivierung des **Parasympathikus** — Puls senkt sich, Atmung wird ruhiger, Muskeltonus sinkt, Schlaf wird gefördert
- **Indikation:** Unruhe, Schlafprobleme, Angst, nach Aufregung, bei Sterbenden

**Belebende Ganzkörperwaschung:**
- **Richtung: GEGEN die Haarwuchsrichtung** (zum Körperzentrum hin, z.B. an den Armen von der Hand zur Schulter)
- **Temperatur: kühler (22-25 °C)**
- **Tempo: zügiger, akzentuierter**
- **Druck: mittelkräftig mit taktilem Reiz**
- **Wirkung:** Aktivierung des **Sympathikus** — Wachheit, Muskeltonus steigt, Kreislauf aktiviert
- **Indikation:** Apathie, müde Patienten, Antriebsarmut, nach längerer Ruhephase

**Wichtig:** Die Wirkung ist **spürbar**, aber **nicht medikamentös**. Die Waschformen ersetzen keine medizinische Therapie, sind aber wertvolle pflegerische Interventionen. (Fröhlich Basale Stimulation, 1998)"

**B1 (650 Zeichen):**
"**Basale Stimulation** (nach Fröhlich) arbeitet mit Reizen beim Waschen. Es gibt zwei Formen:

**Beruhigende Waschung:**
- **Richtung: mit der Haarwuchsrichtung** (vom Körper weg, z.B. Schulter zur Hand)
- **Wasser: warm** (37-38 °C)
- **Tempo: langsam**
- **Druck: sanft und gleichmäßig**
- **Wirkung:** **Parasympathikus aktiv** — Puls ruhig, Atmung ruhig, Muskeln entspannen, besserer Schlaf
- **Für wen?** Unruhige Patienten, Schlafprobleme, Angst, Sterbende

**Belebende Waschung:**
- **Richtung: gegen die Haarwuchsrichtung** (zum Körper hin, z.B. Hand zur Schulter)
- **Wasser: kühler** (22-25 °C)
- **Tempo: schneller**
- **Druck: mittelkräftig mit Reiz**
- **Wirkung:** **Sympathikus aktiv** — wacher, Muskeln stärker, Kreislauf kommt in Schwung
- **Für wen?** Müde, apathische Patienten, nach langer Ruhe

**Wichtig:** Die Wirkung ist spürbar, aber kein Medikament. Es ersetzt keine Therapie, aber es hilft."

- **Erklärungs-Step:** stepType `comparison` (Tabelle beruhigend vs. belebend)
- **Glossar-Begriffe:** [Basale Stimulation, Parasympathikus, Sympathikus, Haarwuchsrichtung, Muskeltonus, Apathie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Richtung der Waschung ist nur ein Gefühl, wissenschaftlich macht das keinen Unterschied"**
- **Fachbegriff:** Evidenz-Zweifel
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **die physiologische Wirkung ist belegt**. Mit der Haarwuchsrichtung aktiviert man Hautrezeptoren, die mit dem Parasympathikus vernetzt sind. Gegen die Richtung aktiviert Druck- und Berührungsrezeptoren mit Sympathikus-Anbindung. Die Wirkung ist messbar: Puls, Atemfrequenz, Muskeltonus. Merke: Biologisch begründet."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **die Wirkung ist messbar**. Mit der Haarrichtung: Puls geht runter, Atmung ruhiger. Gegen die Richtung: Puls geht hoch, Patient wacher. Das ist **nicht Gefühl**, sondern Nervensystem. Merke: Basale Stimulation wirkt biologisch."

**D2: "Bei einem sterbenden Patienten sollte man belebend waschen, um ihn wach zu halten"**
- **Fachbegriff:** Sterbe-Fehlinterpretation
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — bei Sterbenden ist das **Ziel nicht Wachheit**, sondern **Ruhe, Würde, Schmerzlinderung**. **Beruhigende Waschung** (mit der Haarwuchsrichtung, warm, langsam) unterstützt das Loslassen, senkt Angst und Schmerz. Belebend wäre grausam. Merke: In der Palliativsituation immer beruhigend."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **bei Sterbenden willst du Ruhe**, nicht Wachheit. **Beruhigende Waschung** (mit der Haarrichtung, warm, langsam) hilft beim Loslassen. Belebend wäre hart und unfair. Merke: Am Lebensende immer beruhigend."

**D3: "Man sollte immer belebend waschen, um den Kreislauf der Patienten anzuregen"**
- **Fachbegriff:** Dauer-Belebung-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **permanente Belebung überstimuliert** und führt zu Unruhe, Schlafmangel, Aggression (besonders bei Demenz). Die Waschform wird nach **aktuellem Zustand** gewählt: Apathie → belebend. Unruhe oder Schlafstörung → beruhigend. Stabil und wach → normale Waschung. Merke: Indikation, nicht Dauerrezept."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **immer belebend ist zu viel**. Dann wird der Patient unruhig und schläft schlecht. Besonders bei Demenz problematisch. Du entscheidest nach Zustand: müde = belebend, unruhig = beruhigend, normal = normal. Merke: Das Medikament auswählen, nicht immer die gleiche Dosis."

### Richtig-Feedback
**C1 (310 Zeichen):** "Genau. **Herr F. (unruhig) → beruhigende Waschung** (mit Haarwuchsrichtung, warm 37-38 °C, langsam, sanft) — aktiviert Parasympathikus, senkt Puls und Muskeltonus, fördert Schlaf. **Frau G. (apathisch) → belebende Waschung** (gegen Haarwuchsrichtung, kühler 22-25 °C, zügiger, mit Reiz) — aktiviert Sympathikus, fördert Wachheit."

**B1 (265 Zeichen):** "Sehr gut. **Herr F. (unruhig) → beruhigend** (mit der Haarrichtung, warm, langsam) — macht ruhiger, hilft beim Schlafen. **Frau G. (müde) → belebend** (gegen die Haarrichtung, kühler, schneller) — macht wacher. Die Waschung ist wie ein sanftes Medikament: richtig dosiert."

### Verknüpfte Karteikarte
- **Vorderseite:** "Beruhigende vs. belebende Waschung nach Fröhlich — Unterschiede und Indikationen?"
- **Rückseite:** "Beruhigend: mit Haarwuchsrichtung, warm 37-38 °C, langsam (Parasympathikus). Indikation: Unruhe, Schlafstörung, Sterbende. Belebend: gegen Haarwuchsrichtung, kühler 22-25 °C, zügig (Sympathikus). Indikation: Apathie, Müdigkeit."
- **Kategorie:** handlung

---

## Baustein 16: dokumentation-ganzkoerperpflege

### Metadaten
- **bausteinId:** ganzkoerperpflege-dokumentation
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-16]

### Stufe 1 — Denkfrage
- **Frage:** "Was genau musst du nach der Ganzkörperpflege schriftlich festhalten? Denke nicht nur an 'was gemacht wurde', sondern auch an 'was aufgefallen ist'."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Dokumentation hat **drei Teile**: 1) **Durchgeführtes** (Wer, was, wann — aktivierend oder übernehmend?). 2) **Ressourcen** des Patienten (was konnte er selbst?). 3) **Auffälligkeiten** (Haut, Schmerz, Befinden, Veränderung seit gestern). Regel: 'Was nicht dokumentiert ist, gilt als nicht durchgeführt.'"

**B1 (240 Zeichen):** "Du dokumentierst **drei Dinge**: 1) **Was gemacht wurde** (Wer, was, wann — hat der Patient mitgemacht?). 2) **Ressourcen** (was konnte er selbst?). 3) **Auffälligkeiten** (Haut, Schmerz, Veränderung). Regel: **Nicht dokumentiert = nicht gemacht**."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die Dokumentation nach der Ganzkörperpflege ist nicht Formalität, sondern **Teil der Pflegeleistung**. Grundprinzip: **'Was nicht dokumentiert ist, gilt als nicht durchgeführt.'** (Rechtsprechung BGH — Beweislast)

**Drei Ebenen der Dokumentation:**

**1. Durchgeführte Maßnahme**
- Art (Bettwaschung, Teilwaschung, Dusche, basale Stimulation beruhigend/belebend)
- Datum, Uhrzeit, Handzeichen
- Aktivierungsgrad (vollständig selbstständig / teilselbstständig / übernahme)

**2. Ressourcen und Einschränkungen**
- Was konnte der Patient selbst (z.B. 'Gesicht und Zähne selbstständig mit linker Hand')?
- Was brauchte Unterstützung?
- Motivation, Kooperation, Tagesform

**3. Auffälligkeiten (Assessment-Ergebnisse)**
- Hautveränderungen (Rötung, Druckstelle, Wunde, blauer Fleck) mit **Lokalisation** und **Beschreibung**
- Schmerzäußerung (NRS-Wert, Lokalisation, Auslöser)
- Allgemeinbefinden (orientiert, unruhig, apathisch, Atem auffällig)
- Veränderungen seit letzter Waschung

**Sprache:** Sachlich, wertfrei, beobachtungsbezogen. **Nicht:** 'Patient wie immer mürrisch.' **Besser:** 'Patient spricht heute leiser, reagiert verzögert, verweigert Augenkontakt.' (Vgl. Expertenstandards DNQP)"

**B1 (640 Zeichen):**
"Die Dokumentation nach dem Waschen ist nicht nur 'Formular ausfüllen' — es ist **Teil der Pflege**. Regel: **Nicht dokumentiert = nicht gemacht.** (Gericht hat das entschieden)

**Du dokumentierst drei Sachen:**

**1. Was wurde gemacht?**
- Art (Bettwaschung, Dusche, basale Stimulation beruhigend oder belebend)
- Datum, Uhrzeit, deine Unterschrift (Handzeichen)
- Hat der Patient mitgemacht oder übernimmst du alles?

**2. Was konnte der Patient selbst?**
- Zum Beispiel: 'Gesicht und Zähne selbst mit links'
- Was musst du übernehmen?
- Wie war die Tagesform?

**3. Was ist dir aufgefallen?**
- Veränderungen an der Haut (Rötung, Druckstelle, Wunde, blauer Fleck) — **wo** genau?
- Schmerz (Skala 0-10, wo, wann?)
- Allgemein: wach, unruhig, müde, Atmung?
- Anders als gestern?

**Sprache:** Sachlich, kein Urteil. **Nicht:** 'Patient wie immer schlecht gelaunt.' **Besser:** 'Patient spricht leiser, reagiert später, schaut nicht an.'"

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Handzeichen, Beweislast, Ressourcenorientierung, NRS (Numerische Rating-Skala)]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Standard-Pflege wie tägliches Waschen muss man nicht jedes Mal neu dokumentieren"**
- **Fachbegriff:** Routinen-Fehlannahme
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **jede pflegerische Leistung wird einzeln dokumentiert**, auch Routinen. Grund: Beweislast bei Schäden (z.B. neuer Dekubitus), Kontinuität im Team, Qualitätssicherung. Was fehlt, gilt juristisch als nicht erbracht. Merke: Dokumentation ist keine Bürokratie, sondern Beweis."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **jede Pflege-Leistung dokumentierst du einzeln**. Auch wenn es jeden Tag gleich ist. Grund: Wenn etwas passiert (z.B. Dekubitus), muss du beweisen, dass gepflegt wurde. Merke: Dokumentation ist Beweis, nicht Papierkram."

**D2: "Man sollte seine Eindrücke ('Patient ist heute anstrengend') direkt in den Pflegebericht schreiben"**
- **Fachbegriff:** Wertungs-Fehler
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **Wertungen und Eindrücke gehören nicht in die Dokumentation**. Stattdessen **Beobachtungen** beschreiben: Wer tat was, wann, wie? 'Anstrengend' ist keine Information, 'wehrt sich bei der Mundpflege mit Kopfdrehen und Stöhnen' ist eine. Sachlich, wertfrei, beobachtungsbezogen. Merke: Beschreiben, nicht urteilen."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **keine Wertungen** schreiben. Statt 'anstrengend' lieber **beschreiben**: 'wehrt sich bei der Mundpflege, dreht den Kopf weg, stöhnt'. So kann ein Kollege das verstehen. Merke: Was siehst du? Was hörst du? Was tut der Patient? Nicht: Was denkst du?"

**D3: "Ressourcen (was der Patient selbst kann) sind nicht so wichtig wie Defizite"**
- **Fachbegriff:** Defizit-Fokus-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Ressourcen sind gleichberechtigt wichtig**. Ohne Dokumentation von 'Waschen des Gesichts selbstständig' entsteht im Team das Bild 'Patient kann nichts' — Folge: Er wird übernommen, verliert die Fähigkeit. Ressourcen-Dokumentation schützt Selbstständigkeit. Merke: Was er kann, ist so wichtig wie was er nicht kann."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **Ressourcen sind genauso wichtig**. Wenn nicht geschrieben steht, dass er das Gesicht selbst waschen kann, macht es der nächste Kollege für ihn. Dann verlernt er es. Merke: Dokumentation der Ressourcen schützt Selbstständigkeit."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Dokumentation auf drei Ebenen: **Was wurde gemacht** (Art, Zeit, Handzeichen) + **Ressourcen** (was konnte der Patient selbst) + **Auffälligkeiten** (Haut, Schmerz, Befinden, Veränderung). Sprache: sachlich, wertfrei, beobachtungsbezogen. Regel: 'Nicht dokumentiert = nicht durchgeführt' (BGH)."

**B1 (250 Zeichen):** "Sehr gut. Drei Ebenen: **Was** du gemacht hast + **was der Patient selbst konnte** + **was dir aufgefallen ist**. Sachlich schreiben, nicht urteilen. Regel: **Nicht dokumentiert = nicht gemacht** (Gericht). Das schützt dich und den Patienten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche drei Ebenen gehören zur Dokumentation der Ganzkörperpflege?"
- **Rückseite:** "1) Durchgeführte Maßnahme (Art, Zeit, Handzeichen). 2) Ressourcen + Einschränkungen. 3) Auffälligkeiten (Haut, Schmerz, Befinden, Veränderungen). Grundregel: 'Nicht dokumentiert = nicht durchgeführt' (BGH)."
- **Kategorie:** recht

---

## Baustein 17: teilkoerperwaesche-indikation

### Metadaten
- **bausteinId:** ganzkoerperpflege-teilwaesche
- **bloomLevel:** 3
- **wissensart:** entscheidung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-17]

### Stufe 1 — Denkfrage
- **Frage:** "Herr T. (84) ist sehr schwach und klagt über Kreislaufprobleme. Trotzdem müsste er gewaschen werden. Was ist dein Vorgehen — und wie weit musst du waschen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Bei **Kreislauf-Schwäche, starkem Schmerz, akuter Verschlechterung**: **Teilkörperwäsche** statt Ganzkörperwäsche. Priorität: **Gesicht, Intim, Hände, Achseln** — die Stellen mit stärkster Geruchsbildung und Schleimhäuten. Rest verschieben oder nur abschnittsweise."

**B1 (230 Zeichen):** "Bei **Kreislauf-Problem, Schmerz oder wenn es dem Patienten schlecht geht**: **Nicht alles waschen**. Nur **Gesicht, Intim, Hände, Achseln** — das ist wichtig für Hygiene und Geruch. Den Rest später machen oder stückweise."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Die **Teilkörperwäsche** ist keine 'halbe Arbeit', sondern eine **bewusste Anpassung** an den Zustand des Patienten. Prinzip: **So viel wie nötig, so wenig wie möglich belastend.**

**Indikationen für Teilkörperwäsche:**
- **Kreislauf-Instabilität** (Hypotonie, Orthostase)
- **Starke Schmerzen** (jede Bewegung schmerzt)
- **Schwere Erschöpfung** (postoperativ, schwere Infektion)
- **Palliativsituation** (Ruhe wichtiger als Routine)
- **Fieber, reduzierter AZ**
- **Demenz mit hoher Abwehr** (Gewalt vermeiden)

**Priorität bei Teilkörperwäsche:**
1. **Gesicht, Augen, Mund** — Hygiene, Wohlgefühl
2. **Achselhöhlen** — Geruchsbildung (Apokrine Drüsen)
3. **Intimbereich** — Infektionsprophylaxe, besonders bei Inkontinenz
4. **Hände** — Kontaktkeime, Essbereitschaft
5. **Hautfalten** (Leiste, Bauchfalten, unter der Brust) — Intertrigo-Prophylaxe

**Später oder abschnittsweise:**
- Arme, Beine, Rücken — verteilen auf mehrere Tage wenn nötig

**Dokumentieren:** Begründung warum Teilwäsche, welche Bereiche, wann vollständig geplant. **Kein Qualitätsverlust** — Qualität bedeutet anpassen, nicht alles jeden Tag komplett. (Juchli ATLs 1987)"

**B1 (580 Zeichen):**
"Die **Teilkörperwäsche** ist keine 'halbe Pflege'. Sie ist **Anpassung an den Zustand**. Regel: **So viel wie nötig, so wenig wie belastet.**

**Wann Teilwäsche?**
- **Kreislauf-Problem** (Schwindel, niedriger Blutdruck)
- **Starke Schmerzen** (jede Bewegung tut weh)
- **Sehr müde oder schwach** (nach OP, schwer krank)
- **Palliativ** (Ruhe wichtiger als Routine)
- **Fieber, schlechter Zustand**
- **Demenz mit Abwehr** (nicht zwingen)

**Was waschen (in dieser Reihenfolge)?**
1. **Gesicht, Augen, Mund** — Wohlgefühl
2. **Achselhöhlen** — Geruch
3. **Intim** — Infektion vorbeugen, besonders bei Inkontinenz
4. **Hände** — Keime, Essen
5. **Hautfalten** (Leiste, Bauch, unter der Brust) — gegen Pilze

**Später oder stückweise:**
- Arme, Beine, Rücken — über mehrere Tage verteilen

**Dokumentieren:** Warum nur Teilwäsche? Welche Stellen? Wann vollständig geplant?"

- **Erklärungs-Step:** stepType `text` (displayFormat: scenario)
- **Glossar-Begriffe:** [Teilkörperwäsche, Apokrine Drüse, Intertrigo, Palliativsituation, Reduzierter AZ]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn der Patient schwach ist, sollte die Pflege besonders gründlich sein, um Vorrat zu schaffen"**
- **Fachbegriff:** Vorratspflege-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Gründlichkeit bei Schwäche ist kontraproduktiv**. Der schwache Patient verliert zusätzlich Energie und Wärme. Kreislauf-Zusammenbruch ist möglich. Stattdessen: das **Wichtigste waschen**, Rest später. Pflegequalität = anpassen, nicht durchziehen. Merke: Belastung vermeiden, nicht ausgleichen."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — bei **Schwäche ist gründlich waschen falsch**. Der Patient verliert Kraft und Wärme. Der Kreislauf kann zusammenbrechen. Besser: **Wichtiges waschen, Rest später**. Qualität ist **anpassen**, nicht erzwingen. Merke: Weniger kann mehr sein."

**D2: "Teilkörperwäsche darf man nur machen, wenn der Arzt es anordnet"**
- **Fachbegriff:** Anordnungs-Abhängigkeitsirrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **Teilkörperwäsche ist eine pflegerische Entscheidung** (Vorbehaltstätigkeit § 4 PflBG). Du beurteilst den Zustand, entscheidest aufgrund von Assessment und dokumentierst die Begründung. Der Arzt muss nicht anordnen, was dein Kernbereich ist. Merke: Pflege entscheidet über Pflege."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **du entscheidest als Pflegekraft**. Das ist dein **eigener Bereich** (Pflegegesetz, Paragraph 4). Du prüfst den Patienten, entscheidest, schreibst Begründung. Der Arzt muss nicht jede Pflege-Entscheidung treffen. Merke: Pflege entscheidet über Pflege."

**D3: "Ein Patient muss jeden Tag komplett gewaschen werden, sonst ist es keine gute Pflege"**
- **Fachbegriff:** Vollständigkeits-Mythos
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **tägliche Komplettwäsche ist weder notwendig noch immer erwünscht**. Alte, trockene Haut wird durch häufiges Waschen mit Seife geschädigt (Austrocknung, Juckreiz). Geruchsbereiche (Gesicht, Intim, Achsel) täglich — Rest je nach Bedarf. Merke: Qualität ≠ Häufigkeit."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **jeden Tag alles waschen ist nicht immer gut**. Alte Haut wird durch zu viel Waschen und Seife trocken und juckt. **Gesicht, Intim, Achseln jeden Tag** — der Rest nach Bedarf. Merke: Qualität heißt nicht: jeden Tag alles."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Bei Herrn T. **Teilkörperwäsche**: Gesicht, Mund, Achseln, Intim, Hände — das Wichtigste für Hygiene und Wohlbefinden. Arme, Beine, Rücken **verteilen** oder verschieben. Kreislauf beobachten, Pausen, ggf. abbrechen. Dokumentieren: Warum, welche Bereiche, Plan für Rest. Das ist gute Pflege, keine halbherzige."

**B1 (255 Zeichen):** "Sehr gut. Bei Herrn T. **Teilkörperwäsche**: Gesicht, Mund, Achseln, Intim, Hände — das wichtige. Arme, Beine, Rücken **später**. Kreislauf im Blick, Pausen, notfalls abbrechen. Dokumentieren: Warum, was, wann Rest. Das ist **gute Pflege**, nicht halbe Arbeit."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Bereiche werden bei einer Teilkörperwäsche priorisiert?"
- **Rückseite:** "Gesicht/Mund, Achselhöhlen, Intim, Hände, Hautfalten — die Bereiche mit Geruchsbildung, Schleimhaut-Hygiene und Infektionsprophylaxe. Arme, Beine, Rücken nach Bedarf."
- **Kategorie:** handlung

---

## Baustein 18: duschen-baden-kontraindikationen

### Metadaten
- **bausteinId:** ganzkoerperpflege-duschen-baden
- **bloomLevel:** 4
- **wissensart:** entscheidung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-18]

### Stufe 1 — Denkfrage
- **Frage:** "Frau L. hat eine frische Operationswunde am Bauch. Sie möchte heute duschen. Was antwortest du — und was sind Kontraindikationen für Duschen oder Baden in der Pflege?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "**Duschen/Baden** nur wenn: Kreislauf stabil, keine frischen Wunden (< 48 h, solange nicht epithelisiert), kein Fieber >38,5 °C. **Nicht** bei: akuter Thrombose, frischer Wunde ohne Schutz, dekompensierter Herzinsuffizienz, schweren Infektionen. **Duschen** schonender als **Baden**."

**B1 (240 Zeichen):** "**Duschen oder Baden** geht nur wenn: Kreislauf stabil, keine frischen Wunden (weniger als 48 Stunden alt), kein Fieber über 38,5 °C. **Nicht** bei: akuter Thrombose, offener Wunde, schwacher Herz, schwerer Infektion. **Duschen ist schonender als Baden.**"

- **Step-Typ:** text (displayFormat: procontra)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"**Duschen** und **Baden** sind angenehme Pflege-Formen — aber **nicht für jeden Patienten zu jeder Zeit** geeignet.

**Kontraindikationen (nicht erlaubt):**
- **Frische Operationswunden** oder **nicht-verschlossene Wunden** (< 48 h, bis Epithelisierung). Ohne wasserdichte Folie Infektionsgefahr.
- **Akute Thrombose** — warmes Wasser weitet Gefäße, Embolie-Gefahr steigt
- **Dekompensierte Herzinsuffizienz** — Wasser-Druck auf Thorax zusätzliche Kreislauf-Belastung
- **Fieber >38,5 °C** — Kreislauf unter Stress, zusätzliche Belastung vermeiden
- **Starke Kreislauf-Instabilität** (z.B. Hypotonie bei Sepsis)
- **Schwere Hauterkrankungen** (ausgedehntes Erysipel, Pemphigus)

**Duschen vs. Baden:**
- **Duschen (bevorzugt):** kürzere Belastung, weniger Wärmebelastung, leichter zu unterstützen
- **Baden:** mehr Entspannung, aber höherer Kreislauf-Stress (Temperatur, Wasser-Druck), Ein- und Aussteigen riskant

**Praktische Regeln:**
- Temperatur 35-38 °C (nicht heißer!)
- Dauer max 15-20 Min
- Rutschmatte, Haltegriffe
- Pflegekraft in Rufnähe (besser direkt dabei)
- Kreislauf vorher und nachher messen
- Bei OP-Wunde: wasserdichte Folie, nach Absprache mit Arzt

**Vorteil von Duschen/Baden:** Basale Stimulation (Wassertemperatur, Geräusch, Schwerelosigkeit), Muskelentspannung, Wohlbefinden. (Juchli ATLs 1987)"

**B1 (640 Zeichen):**
"**Duschen** und **Baden** sind angenehm — aber **nicht für jeden Patienten**.

**Nicht erlaubt bei:**
- **Frische Operations-Wunden** (weniger als 48 h alt, bis Wunde zu) — ohne Schutz Infektion
- **Akute Thrombose** — warmes Wasser = Gefäße weit = Embolie-Gefahr
- **Schwaches Herz** (dekompensierte Herzschwäche) — Wasser drückt auf Brust
- **Fieber über 38,5 °C** — zusätzliche Belastung
- **Starke Kreislauf-Probleme**
- **Schwere Haut-Erkrankungen**

**Duschen vs. Baden:**
- **Duschen (besser):** kürzer, weniger Stress, leichter
- **Baden:** entspannend, aber mehr Stress fürs Herz, Ein- und Aussteigen gefährlich

**Regeln:**
- Wasser 35-38 °C (nicht heiß!)
- Max 15-20 Minuten
- Rutsch-Matte, Griffe
- Pflegekraft in der Nähe
- Blutdruck vorher und nachher
- Bei Wunde: wasserdichte Folie, **Arzt fragen**

**Vorteil:** Entspannung, Wohlgefühl, basale Stimulation."

- **Erklärungs-Step:** stepType `text` (displayFormat: procontra)
- **Glossar-Begriffe:** [Kontraindikation, Thrombose, Dekompensierte Herzinsuffizienz, Epithelisierung, Pemphigus]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Heißes Wasser beim Duschen ist besser, weil es gründlicher reinigt"**
- **Fachbegriff:** Temperatur-Overkill
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **heißes Wasser (>40 °C)** trocknet die Haut aus, reizt sie und kann **Verbrennungen** verursachen (besonders bei Diabetes-Neuropathie, Schlaganfall, Demenz). Kreislauf wird zusätzlich belastet. **35-38 °C** sind optimal: reinigt, entspannt, belastet nicht. Merke: Warm, nicht heiß."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **heißes Wasser** macht die Haut trocken, reizt und kann **Verbrennungen** machen. Der Kreislauf wird gestresst. **35-38 °C** ist gut. Merke: Warm ist besser als heiß."

**D2: "Baden ist generell besser als Duschen, weil es entspannter ist"**
- **Fachbegriff:** Badewannen-Romantik
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **Baden ist kreislauf-belastender**: Hydrostatischer Druck auf den Thorax erschwert die Atmung und erhöht den venösen Rückfluss zum Herzen. Ein- und Aussteigen sind sturzträchtig. Für viele Pflegebedürftige ist **Duschen sicherer**. Entspannung geht auch in der Dusche. Merke: Sicherheit vor Romantik."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **Baden belastet das Herz mehr**. Das Wasser drückt auf die Brust, die Atmung wird schwerer. Ein- und Aussteigen ist gefährlich (Sturz). Für viele Patienten ist **Duschen sicherer**. Merke: Sicher vor gemütlich."

**D3: "Wenn der Patient frisch operiert ist, ist ein schnelles Duschen kein Problem"**
- **Fachbegriff:** Wundschutz-Unterschätzung
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **frische OP-Wunden (< 48 h, bis Epithelisierung)** brauchen **absoluten Schutz**. Wasser auf der Wunde = **Infektion** (Keime aus Leitungswasser, Seifenreste), verzögerte Wundheilung, ggf. **Wunddehiszenz**. Nur mit wasserdichter Folie und Arzt-Absprache. Merke: Frische Wunde = Trockenzone."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **frische OP-Wunden** dürfen **nicht nass werden** (in den ersten 48 Stunden oder bis Wunde zu ist). Wasser macht **Infektion** und Wunde heilt schlechter. Nur mit **wasserdichter Folie** und nur wenn der Arzt sagt: ok. Merke: Frische Wunde = trocken."

### Richtig-Feedback
**C1 (300 Zeichen):** "Genau. Frau L. darf **nicht duschen**, solange die OP-Wunde frisch ist (< 48 h, bis Epithelisierung). Grund: Infektionsgefahr, Wunddehiszenz. Alternative: **Waschen im Bett oder Stehen**, Bauch aussparen oder mit wasserdichter Folie schützen. Nach 48 h + Arzt-Ok: Duschen mit Wundschutz. Baden später."

**B1 (260 Zeichen):** "Sehr gut. Frau L. **darf heute nicht duschen** — die Wunde ist frisch. Wasser macht **Infektion**. Alternative: **Waschen im Bett**, Bauch **nicht nass** machen oder **wasserdichte Folie** drauf. Nach 48 Stunden und mit **Arzt-Ok**: Duschen mit Schutz. Baden später."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 4 Kontraindikationen für Duschen/Baden in der Pflege."
- **Rückseite:** "Frische OP-Wunden (<48 h / bis Epithelisierung), akute Thrombose, dekompensierte Herzinsuffizienz, Fieber >38,5 °C, schwere Kreislauf-Instabilität, ausgedehnte Hauterkrankungen. Duschen schonender als Baden."
- **Kategorie:** recht

---

## Baustein 19: hautpflege-nach-waschen

### Metadaten
- **bausteinId:** ganzkoerperpflege-hautpflege-nach
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-19]

### Stufe 1 — Denkfrage
- **Frage:** "Warum solltest du nach der Ganzkörperpflege **sorgfältig abtrocknen** — besonders Hautfalten? Welche Komplikation will man damit verhindern?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Nach dem Waschen: **Hautfalten sorgfältig abtrocknen** (nicht reiben — tupfen). Feuchtigkeit in Falten = **Intertrigo** (Wundsein, Pilzbefall). Gefährdete Stellen: **unter der Brust, Leisten, Bauchfalten, zwischen Zehen**. Hautpflege individuell (trocken = Fettcreme, fettig = leichte Lotion)."

**B1 (240 Zeichen):** "Nach dem Waschen: **Hautfalten gut abtrocknen** (tupfen, nicht reiben). Feuchte Haut = **Intertrigo** (wund, Pilz). Wichtig: **unter der Brust, in den Leisten, am Bauch, zwischen den Zehen**. Hautpflege nach Bedarf: trockene Haut = Fettcreme."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Nach dem Waschen ist **Abtrocknen** mindestens so wichtig wie das Waschen selbst. Zwei Ziele: Haut-Integrität sichern und Komplikationen vermeiden.

**Abtrocken-Technik:**
- **Tupfen, nicht reiben** — besonders bei empfindlicher (alter, Kortison-belasteter) Haut
- **Hautfalten einzeln** anheben und trocknen
- **Zwischen den Zehen** extra prüfen (Pilzprävention)
- **Frisches, weiches Handtuch** — keine rauen, alten Tücher

**Typische Intertrigo-Stellen:**
- **Submammär** (unter der Brust) — besonders bei adipösen Frauen
- **Inguinal** (Leisten)
- **Axillär** (Achselhöhlen)
- **Abdominell** (Bauchfalten bei Adipositas)
- **Interdigital** (zwischen den Zehen)

Intertrigo entsteht durch Feuchtigkeit + Reibung + Wärme = idealer Pilz-Nährboden (Candida albicans). Frühzeichen: Rötung, Juckreiz, weißlicher Belag.

**Hautpflege nach dem Abtrocknen:**
- **Trockene Haut**: Fettige Creme oder Öl (z.B. Linola fett, Bepanthen)
- **Normale Haut**: Leichte Lotion bei Bedarf
- **Fettige/feuchte Haut**: Keine Creme auf feuchte Stellen — das verschlechtert!
- **Intertrigo-Risiko**: Leinen-Kompressen in die Falte einlegen (saugen Feuchtigkeit)
- **Diabetes-Fuß**: Nicht zwischen die Zehen cremen (Pilz)

**Allergie-Risiko:** Immer fragen — was wurde bisher verwendet? Unverträglichkeiten? (Juchli ATLs 1987)"

**B1 (620 Zeichen):**
"Nach dem Waschen ist **Abtrocknen genauso wichtig** wie das Waschen. Ziel: **gesunde Haut erhalten**.

**Wie abtrocknen?**
- **Tupfen, nicht reiben** — besonders bei dünner, alter Haut
- **Hautfalten einzeln** anheben und trocknen
- **Zwischen den Zehen** nicht vergessen (Pilz-Gefahr)
- **Frisches, weiches Handtuch**

**Wo ist Intertrigo (Wundsein) häufig?**
- **Unter der Brust** (besonders bei dicken Frauen)
- **In den Leisten**
- **In den Achseln**
- **Am Bauch** (Falten bei Übergewicht)
- **Zwischen den Zehen**

Intertrigo entsteht, wenn die Falte **feucht + warm + gerieben** wird = **Pilz** wächst (Candida). Zeichen: Rötung, Jucken, weißer Belag.

**Hautpflege danach:**
- **Trockene Haut**: fettige Creme (z.B. Linola fett)
- **Normale Haut**: leichte Lotion bei Bedarf
- **Fettige Haut**: keine Creme auf nasse Stellen
- **Falten mit Intertrigo-Risiko**: Leinen-Kompressen einlegen (saugen Feuchtigkeit)
- **Diabetes-Füße**: **nicht zwischen die Zehen** cremen

**Immer fragen:** Was hat der Patient bisher benutzt? Gibt es Allergien?"

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Intertrigo, Candida albicans, Submammär, Inguinal, Interdigital, Hautintegrität]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Hautfalten rubbelt man kräftig trocken, damit wirklich alles trocken ist"**
- **Fachbegriff:** Rubbel-Schaden
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Rubbeln ist Hauttrauma**. Alte Haut reißt ein (Mikrotraumata), bei Kortisontherapie oder Antikoagulation entstehen Hämatome. Stattdessen: **einzelne Hautfalten heben und tupfen**. Das ist gründlich UND schonend. Merke: Tupfen ist trocken genug."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **Rubbeln verletzt die Haut**. Alte Haut bekommt kleine Risse, unter Kortison oder Blutverdünnern bilden sich blaue Flecken. Stattdessen: **Falten heben und tupfen**. Merke: Tupfen ist trocken genug."

**D2: "Intertrigo kann man mit fettiger Creme in der Falte behandeln"