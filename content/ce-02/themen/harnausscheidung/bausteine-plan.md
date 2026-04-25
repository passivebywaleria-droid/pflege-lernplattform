# Wissensbausteine: Harnausscheidung & Inkontinenz

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `harnausscheidung` |
| ceId | `ce-02` |
| cluster | E (Ausscheidung) |
| wissensart | handlung |
| kompetenzbereich | I.1 |
| geschaetzteUE | 10 |
| zielzeitMin | 248 (10 UE × 45 × 0,55) |
| bausteineAnzahl | 19 |
| voraussetzungen | — |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 26% (5 Bausteine), Bloom 3-4: 58% (11 Bausteine), Bloom 5-6: 16% (3 Bausteine)

**Primärquellen:**
- DNQP (2014, Neuauflage 2025 angekündigt): Expertenstandard Förderung der Harnkontinenz in der Pflege
- ICS — International Continence Society: Definitionen und Klassifikation der Inkontinenzformen
- AWMF S2k-Leitlinie (2023): Diagnostik und Therapie der Harninkontinenz bei Frauen
- AWMF S2e-Leitlinie (2022): Enuresis und nicht-organische (funktionelle) Harninkontinenz bei Kindern und Jugendlichen
- RKI (2022): Daten zu Harnwegsinfektionen im Krankenhaus
- § 33 SGB V (Hilfsmittelversorgung Inkontinenz)

---

## Baustein 1: urin-normalwerte

### Metadaten
- **bausteinId:** harnausscheidung-urin-normalwerte
- **bloomLevel:** 1
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Du schaust in die Toilette eines Patienten: Der Urin ist klar und strohgelb. Was sagt dir das über den Menschen — und was, wenn er plötzlich dunkelbraun wird?"
- **Step-Typ:** freetext (Vorwissen aktivieren)

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Normalurin ist klar, strohgelb, pH 5-7, spezifisches Gewicht 1010-1025 g/l. Ein Erwachsener scheidet pro Tag **1500-2000 ml** aus. Die Farbe verrät viel: dunkelgelb = zu wenig getrunken, rötlich = Blut oder Rote Bete möglich."

**B1 (215 Zeichen):** "Gesunder Urin sieht so aus: klar, hellgelb. Ein Erwachsener macht pro Tag etwa **1,5 bis 2 Liter** Urin. Die Farbe sagt dir viel: dunkel = du trinkst zu wenig. Rot = vielleicht Blut. Orange = vielleicht Leberproblem."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Die Urinbeurteilung ist ein tägliches Pflege-Assessment — mit bloßem Auge, ohne Labor. Merke dir diese Normalwerte:

**Menge (Erwachsener):** 1500-2000 ml in 24 Stunden. Bei Kindern deutlich weniger, altersabhängig.

**Farbe:** Klar und strohgelb. Die Farbe kommt vom Urochrom. Je konzentrierter, desto dunkler.

**Geruch:** Leicht aromatisch, nicht unangenehm.

**pH-Wert:** 5 bis 7 (leicht sauer). Mischkost verschiebt eher nach sauer, vegetarische Kost nach alkalisch.

**Spezifisches Gewicht:** 1010-1025 g/l. Höher bei Exsikkose, niedriger bei hoher Trinkmenge.

**Schaum:** Leichter, schnell zerfallender Schaum ist normal. Stehender, fester Schaum = möglicher Hinweis auf Eiweiß im Urin. (AWMF 2023)"

**B1 (520 Zeichen):**
"So sieht gesunder Urin aus. Lern die Werte auswendig — du nutzt sie jeden Tag:

**Menge:** Ein Erwachsener macht **1,5 bis 2 Liter** pro Tag.

**Farbe:** Klar und hellgelb. Dunkler heißt: zu wenig getrunken.

**Geruch:** Leicht, nicht stark. Starker Geruch ist ein Warnsignal.

**pH-Wert:** 5 bis 7 (leicht sauer).

**Schaum:** Ein bisschen Schaum ist okay. Viel Schaum = vielleicht Eiweiß im Urin — Arzt fragen.

Du brauchst kein Labor dafür. Du schaust hin — und merkst dir, was normal ist."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Urochrom, pH-Wert, spezifisches Gewicht, Exsikkose]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Eine Tagesmenge von 800 ml Urin ist normal."**
- **Fachbegriff:** Oligurie-Verkennung
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — 800 ml sind bereits Grenze zur **Oligurie** (unter 500 ml/24h) und ein Warnsignal. Normal sind **1500-2000 ml** pro Tag. Weniger heißt: Dehydration, Nierenproblem oder Herzschwäche ausschließen. Merke: unter 1,5 L = kritisch prüfen."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — 800 ml sind zu wenig. Normal sind **1,5 bis 2 Liter** pro Tag. Unter 500 ml nennt man Oligurie. Das ist ein Warnsignal: Herz, Niere oder Trinkmenge prüfen. Merke: unter 1,5 L = Achtung."

**D2: "Dunkelgelber Urin am Morgen ist immer krankhaft."**
- **Fachbegriff:** Morgenurin-Fehldeutung
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — der **erste Morgenurin** ist bei Gesunden normal konzentriert und deshalb dunkler. Nachts trinkt niemand. Erst wenn der Urin **über den Tag** dunkel bleibt, ist es ein Zeichen von Dehydration oder Leberproblem. Merke: Morgen dunkel ≠ krank."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — morgens ist der Urin oft dunkler. Das ist normal, weil du nachts nichts trinkst. Wichtig wird es, wenn der Urin **den ganzen Tag** dunkel bleibt. Dann trinkt der Patient zu wenig. Morgens dunkel ist okay."

**D3: "Der pH-Wert von Urin ist immer 7, wie beim Blut."**
- **Fachbegriff:** pH-Verwechslung
- **Feedback (C1, 235 Zeichen):** "Nicht ganz — Blut hat pH 7,35-7,45 (neutral-leicht alkalisch). Urin ist **leicht sauer**, pH **5-7**. Das ist Absicht: Die saure Umgebung bremst Bakterien in der Blase. Merke: Urin = sauer (5-7), Blut = neutral (7,4)."
- **Feedback (B1, 195 Zeichen):** "Nicht ganz — Urin ist **leicht sauer**: pH 5 bis 7. Blut ist neutral (pH 7,4). Der saure Urin hilft gegen Bakterien in der Blase. Merke: Urin sauer, Blut neutral."

### Richtig-Feedback

**C1 (230 Zeichen):** "Genau. Normaler Urin ist klar, strohgelb, geruchlos bis leicht aromatisch, pH 5-7, und ein Erwachsener scheidet 1,5-2 L pro Tag aus. Diese 4 Werte — Menge, Farbe, Geruch, Konzentration — prüfst du bei jeder Schicht. (AWMF 2023)"

**B1 (205 Zeichen):** "Sehr gut. Normaler Urin ist klar, hellgelb, pH 5-7. Ein Erwachsener macht 1,5-2 Liter pro Tag. Du achtest jeden Tag auf: Menge, Farbe, Geruch. Diese 3 Sachen sagen dir viel über den Patienten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Normalwerte hat Urin beim Erwachsenen?"
- **Rückseite:** "Menge 1500-2000 ml/24h, Farbe strohgelb, klar, pH 5-7, spezifisches Gewicht 1010-1025 g/l."
- **Kategorie:** fakt

---

## Baustein 2: pathologische-urinmenge

### Metadaten
- **bausteinId:** harnausscheidung-pathologische-urinmenge
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Frau K. hat in den letzten 24 Stunden nur 300 ml Urin im Messbecher. Warum ist das ein Alarmsignal — und wovor warnt dich das?"
- **Step-Typ:** mc (Bloom 2)

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Pathologische Mengen: **Oligurie** = unter 500 ml/24h (Nierenversagen, Exsikkose, Schock). **Anurie** = unter 100 ml/24h (Notfall). **Polyurie** = über 2500 ml/24h (Diabetes mellitus, Diabetes insipidus, Diuretika). Jede Abweichung dokumentieren."

**B1 (225 Zeichen):** "Diese 3 Wörter musst du kennen: **Oligurie** = zu wenig Urin (unter 500 ml/Tag). **Anurie** = fast kein Urin (unter 100 ml/Tag — Notfall!). **Polyurie** = zu viel Urin (über 2,5 Liter/Tag). Alles dokumentieren und Arzt melden."

- **Step-Typ:** comparison (Tabelle der 3 Störungen)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die Urinmenge ist ein harter klinischer Parameter. Drei pathologische Muster musst du sofort erkennen:

**Oligurie — unter 500 ml in 24 Stunden.** Ursachen: Flüssigkeitsmangel (Exsikkose), akutes Nierenversagen, Herzinsuffizienz, Schock. Maßnahme: Trinkmenge prüfen, Vitalzeichen, Haut-Turgor, Arzt informieren.

**Anurie — unter 100 ml in 24 Stunden.** Das ist ein **Notfall**. Entweder die Niere produziert nichts (Nierenversagen) oder der Abfluss ist blockiert (Harnverhalt, Stein). Sofort Arzt alarmieren. Blase sonographisch prüfen lassen.

**Polyurie — über 2500 ml in 24 Stunden.** Häufige Ursachen: entgleister Diabetes mellitus (Zucker zieht Wasser), Diabetes insipidus (Hormonmangel), Diuretika-Therapie, massive Trinkmenge. Kombiniert mit **Polydipsie** (starker Durst) → an Diabetes denken. Blutzucker messen. (AWMF 2023)"

**B1 (580 Zeichen):**
"Drei Wörter — drei verschiedene Probleme:

**Oligurie** = weniger als 500 ml Urin pro Tag. Ursache: zu wenig getrunken, Niere krank, Herz schwach. Was tun: Trinkmenge prüfen, Vitalzeichen messen, Arzt informieren.

**Anurie** = weniger als 100 ml pro Tag. Das ist ein **Notfall**. Entweder macht die Niere nichts mehr. Oder der Urin kann nicht raus (Stein, Verstopfung). Sofort Arzt rufen. Blase mit Ultraschall prüfen.

**Polyurie** = mehr als 2,5 Liter pro Tag. Oft ist Zucker im Blut zu hoch (Diabetes). Der Patient hat auch starken Durst. Blutzucker messen — Arzt rufen."

- **Erklärungs-Step:** stepType `comparison` (Oligurie/Anurie/Polyurie nebeneinander)
- **Glossar-Begriffe:** [Oligurie, Anurie, Polyurie, Polydipsie, Diabetes insipidus, Exsikkose]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Oligurie und Anurie bedeuten dasselbe."**
- **Fachbegriff:** Mengen-Gleichsetzung
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — **Oligurie** ist **wenig** Urin (unter 500 ml/24h), **Anurie** ist **fast kein** Urin (unter 100 ml/24h). Anurie ist ein absoluter Notfall, Oligurie ein Warnsignal. Merke: Oligo = wenig, An = (fast) nichts — wie beim griechischen Alphabet."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — **Oligurie** = wenig Urin (unter 500 ml/Tag). **Anurie** = fast gar kein Urin (unter 100 ml/Tag). Anurie ist ein Notfall. Oligurie ist ein Warnsignal. Oligo heißt 'wenig', An heißt 'nichts'."

**D2: "Polyurie = der Patient trinkt zu viel."**
- **Fachbegriff:** Polyurie-Ursachen-Verkennung
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — viel Trinken macht viel Urin, klar. Aber Polyurie ist meist **krankhaft**: entgleister Diabetes mellitus (Glukose zieht Wasser), Diabetes insipidus (Hormonmangel ADH), oder Diuretika. Bei Polyurie immer **Blutzucker messen** und an Diabetes denken."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — viel trinken macht viel Urin. Aber Polyurie kommt oft von einer Krankheit: Diabetes (Zucker hoch) oder Hormonmangel. Wenn du Polyurie siehst: **Blutzucker messen**. Nicht einfach sagen 'er trinkt halt viel'."

**D3: "Ein Patient mit Harnverhalt hat Anurie."**
- **Fachbegriff:** Produktions-Abfluss-Verwechslung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **Anurie** heißt: die Niere produziert (fast) keinen Urin. Bei **Harnverhalt** produziert die Niere ganz normal — der Urin kann nur nicht raus. Die Blase ist prall voll. Das nennt man dann auch **Überlaufblase**, nicht Anurie. Merke: Anurie = keine Produktion. Harnverhalt = kein Abfluss."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **Anurie** heißt: die Niere macht keinen Urin. Bei **Harnverhalt** macht die Niere Urin — aber er kann nicht raus. Die Blase wird ganz voll. Das ist was anderes: Anurie = Niere macht nichts. Harnverhalt = Blase kann nicht raus."

### Richtig-Feedback

**C1 (260 Zeichen):** "Genau. Oligurie (<500 ml/24h), Anurie (<100 ml/24h) und Polyurie (>2500 ml/24h) sind die drei wichtigen Mengen-Störungen. Anurie = Notfall, Polyurie oft Diabetes-Hinweis. Als Pflegende führst du die Bilanz — du merkst es zuerst. (AWMF 2023)"

**B1 (220 Zeichen):** "Sehr gut. Merke dir die drei Wörter: Oligurie (zu wenig), Anurie (fast nichts — Notfall!), Polyurie (zu viel). Du führst die Bilanz. Das heißt: Du merkst es zuerst. Bei Polyurie immer an Diabetes denken."

### Verknüpfte Karteikarte
- **Vorderseite:** "Definiere Oligurie, Anurie, Polyurie mit Mengen."
- **Rückseite:** "Oligurie <500 ml/24h, Anurie <100 ml/24h (Notfall), Polyurie >2500 ml/24h."
- **Kategorie:** fachbegriff

---

## Baustein 3: urinfarbe-und-geruch

### Metadaten
- **bausteinId:** harnausscheidung-farbe-geruch
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Du leerst den Dauerkatheter. Der Urin riecht süßlich wie Nagellackentferner. Was geht dir durch den Kopf — und welchen Wert willst du sofort wissen?"
- **Step-Typ:** freetext (klinisches Denken)

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Urin ist ein Fenster zum Stoffwechsel. Dunkelgelb = Dehydration. Rötlich = Blut (Hämaturie), Rhabarber oder Medikamente (z.B. Rifampicin). Orange = Bilirubin (Leber). Grünlich = bestimmte Medikamente. Milchig = Eiter (Pyurie) oder Fett (Chylurie)."

**B1 (230 Zeichen):** "Die Farbe vom Urin verrät viel. **Dunkel** = zu wenig getrunken. **Rot** = Blut oder Rote Bete. **Orange** = vielleicht Leberproblem. **Grün** = oft Medikamente. **Milchig** = Infektion. Immer prüfen: nur Farbe oder auch Schmerzen dabei?"

- **Step-Typ:** matching (Farbe → mögliche Ursache)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Die Urinbeurteilung läuft bei jeder Schicht mit — du musst nichts extra tun, nur **hinschauen und riechen**.

**Farbe — was sie verrät:**
- **Dunkelgelb / bernsteinfarben** → Exsikkose, zu wenig Trinkmenge.
- **Rötlich / rotbraun** → **Hämaturie** (Blut) ist der wichtigste Grund. Aber auch Rote Bete, Rhabarber, Rifampicin oder Phenytoin färben so. Immer nachfragen + Teststreifen.
- **Orange** → erhöhtes Bilirubin → Leber- oder Gallenwegsproblem.
- **Grün bis blaugrün** → Medikamente (z.B. Propofol, Amitriptylin), selten Pseudomonas-Infektion.
- **Milchig-weißlich** → **Pyurie** (Eiter, typisch bei Harnwegsinfekt) oder Chylurie (Lymphe).

**Geruch — typische Muster:**
- **Süßlich, nach Nagellack / Obst** → **Ketonurie** (Hinweis auf entgleisten Diabetes — Blutzucker messen!).
- **Stechend ammoniakalisch** → Harnwegsinfekt, bakterielle Zersetzung.
- **Faulig** → Infektion oder Fistel zum Darm.

Jede Auffälligkeit dokumentieren und dem Arzt melden. (AWMF 2023)"

**B1 (590 Zeichen):**
"Schau genau hin und riech — das reicht oft schon.

**Farbe:**
- **Dunkel gelb**: Patient trinkt zu wenig.
- **Rot**: vielleicht Blut. Aber auch Rote Bete oder Medikamente. Nachfragen!
- **Orange**: vielleicht Leberproblem.
- **Grün**: oft von Medikamenten.
- **Milchig weiß**: oft Eiter oder Bakterien — Harnwegsinfekt.

**Geruch:**
- **Süß, wie Nagellackentferner**: Achtung — vielleicht Diabetes mit hohem Zucker. Blutzucker messen!
- **Stark nach Ammoniak**: oft Harnwegsinfekt.
- **Faul, stinkend**: Infektion oder Verbindung zum Darm.

Alles dokumentieren. Arzt informieren, wenn es neu ist."

- **Erklärungs-Step:** stepType `matching` (Farbe/Geruch ↔ Ursache)
- **Glossar-Begriffe:** [Hämaturie, Ketonurie, Pyurie, Chylurie, Bilirubin]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Roter Urin ist immer Hämaturie."**
- **Fachbegriff:** Hämaturie-Kurzschluss
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — rötlicher Urin hat viele Ursachen: **Rote Bete, Rhabarber, Brombeeren, Rifampicin, Phenytoin, L-Dopa**. Nur der Urin-Teststreifen auf Erythrozyten oder das Mikroskop sagen, ob wirklich Blut drin ist. Merke: Rot sehen — dann fragen und testen, nicht vermuten."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — roter Urin ist nicht immer Blut. Auch **Rote Bete, Rhabarber oder Medikamente** machen ihn rot. Du machst einen Teststreifen. Nur der zeigt dir, ob wirklich Blut drin ist. Merke: erst testen, dann sagen."

**D2: "Süßlich riechender Urin ist völlig normal."**
- **Fachbegriff:** Keton-Verkennung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — süßlicher Geruch (nach Obst, Nagellackentferner) ist ein **Alarmsignal**: Es deutet auf **Ketonkörper** hin. Ursachen: entgleister Diabetes mellitus (Ketoazidose!) oder starkes Hungern. Maßnahme: **Blutzucker sofort messen**, Arzt informieren. Das ist kein 'normaler Geruch'."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — süßer Geruch im Urin ist ein **Warnsignal**. Er zeigt oft: Zucker ist zu hoch (Diabetes) oder der Patient isst seit Tagen nichts. Was du machst: **Blutzucker messen** und den Arzt rufen. Süß riechender Urin ist nie normal."

**D3: "Ammoniakgeruch kommt nur von alter, stehengebliebener Urinflasche."**
- **Fachbegriff:** Zersetzungs-Irrtum
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — **stehender Urin** riecht mit der Zeit ammoniakalisch, das stimmt. Aber **frisch gelassener** ammoniakalischer Urin deutet auf einen **Harnwegsinfekt** hin — Bakterien zersetzen den Harnstoff bereits in der Blase. Merke: Frisch stinkt = HWI prüfen (Streifen, Symptome)."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — alter Urin riecht nach Ammoniak. Aber **frischer Urin**, der stark nach Ammoniak riecht, ist oft ein **Harnwegsinfekt**. Bakterien machen den Geruch schon in der Blase. Merke: Frisch stinkt = Teststreifen und Arzt."

### Richtig-Feedback

**C1 (270 Zeichen):** "Genau. Farbe und Geruch sind kostenlose Diagnostik. Dunkelgelb = Dehydration, rot = Blut oder Medikamente, milchig = Infekt, süßlich = Ketone (Diabetes!), stechend ammoniakalisch = HWI. Du meldest, der Arzt bestätigt — diese Reihenfolge funktioniert. (AWMF 2023)"

**B1 (230 Zeichen):** "Sehr gut. Farbe und Geruch sagen dir viel, ohne Labor. Dunkel = zu wenig trinken. Rot = Blut oder Essen. Milchig = Infekt. Süß = Diabetes prüfen. Stark nach Ammoniak = Harnwegsinfekt. Du siehst es zuerst."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet süßlicher Geruch im Urin — und was machst du sofort?"
- **Rückseite:** "Ketonurie — Hinweis auf entgleisten Diabetes mellitus. Sofort Blutzucker messen, Arzt informieren."
- **Kategorie:** assessment

---

## Baustein 4: miktionsstoerungen

### Metadaten
- **bausteinId:** harnausscheidung-miktionsstoerungen
- **bloomLevel:** 3
- **wissensart:** fachbegriff
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Herr B. sagt: 'Ich muss alle 30 Minuten aufs Klo, aber es kommt nur ein Tropfen — und es brennt.' Welche 3 Wörter beschreiben genau, was Herr B. erlebt?"
- **Step-Typ:** fillin (3 Fachbegriffe)

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Miktionsstörungen haben eigene Fachbegriffe: **Pollakisurie** = häufiges Wasserlassen in kleinen Mengen. **Nykturie** = nächtliches Wasserlassen (>1x/Nacht). **Dysurie** = schmerzhaftes Wasserlassen. **Strangurie** = schmerzhaft-krampfartig. **Harnverhalt** = Blase voll, keine Entleerung."

**B1 (235 Zeichen):** "Du brauchst diese 5 Wörter: **Pollakisurie** = oft aufs Klo, wenig Urin. **Nykturie** = nachts aufstehen zum Pipi. **Dysurie** = es tut weh beim Pipi. **Strangurie** = es krampft dabei. **Harnverhalt** = Blase voll, aber nichts kommt."

- **Step-Typ:** matching (Begriff ↔ Beschreibung)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Die Miktionsstörungen sind ein Prüfungsthema — die Fachbegriffe musst du sicher beherrschen:

**Pollakisurie** — häufiges Wasserlassen in **kleinen Portionen**. Die Gesamtmenge bleibt oft normal. Typisch bei Harnwegsinfekt, Reizblase, Prostatahyperplasie.

**Nykturie** — nächtliches Wasserlassen (mehr als 1 Mal pro Nacht). Ursachen: Herzinsuffizienz (tagsüber eingelagerte Flüssigkeit wird nachts mobilisiert), Prostatavergrößerung, Diabetes, Schlafmittel-Mangelgebrauch.

**Dysurie** — **schmerzhaftes** Wasserlassen, meist brennend. Klassisches Zeichen des Harnwegsinfekts.

**Strangurie** — **schmerzhaft-krampfartiges** Wasserlassen. Verstärkung der Dysurie, oft bei Zystitis.

**Harnverhalt (Retention)** — die Blase ist gefüllt, kann aber nicht entleert werden. Blase tastbar, druckschmerzhaft. Ursachen: Prostatahyperplasie, Medikamente (Anticholinergika, Opioide), nach OPs. **Notfall** — katheterisieren innerhalb von Stunden, sonst Blasenschäden. (AWMF 2023)"

**B1 (620 Zeichen):**
"Diese 5 Fachwörter brauchst du für das ganze Berufsleben:

**Pollakisurie** — oft aufs Klo gehen müssen, aber nur wenig Urin kommt. Oft bei Blasenentzündung.

**Nykturie** — nachts mehr als 1-mal aufstehen, um Urin zu lassen. Oft bei Herzproblem oder Prostata.

**Dysurie** — **Schmerz** beim Pipi machen. Brennt. Klassisch: Harnwegsinfekt.

**Strangurie** — **Krampf** beim Pipi machen. Wie Dysurie, aber schlimmer.

**Harnverhalt** — die Blase ist **ganz voll**, aber der Patient kann nicht pinkeln. Blase ist tastbar, tut weh. Das ist ein **Notfall**. Der Arzt muss einen Katheter legen — sonst wird die Blase kaputt."

- **Erklärungs-Step:** stepType `reveal` (5 Begriffe nacheinander)
- **Glossar-Begriffe:** [Pollakisurie, Nykturie, Dysurie, Strangurie, Harnverhalt]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Pollakisurie und Polyurie sind dasselbe — beide heißen 'viel Urin'."**
- **Fachbegriff:** Poly-Polla-Verwechslung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **Polyurie** = große Gesamtmenge über 24h (>2,5 L). **Pollakisurie** = **oft**, aber in kleinen Portionen; die Gesamtmenge bleibt normal. Polla-kisurie kommt von 'polla' (oft), nicht 'poly' (viel). Merke: Polyurie = viel Menge. Pollakisurie = viele Male."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Polyurie** = insgesamt viel Urin (über 2,5 Liter am Tag). **Pollakisurie** = **oft** aufs Klo, aber **wenig** Urin jedes Mal. Die Gesamtmenge ist normal. Merke: Polyurie = viel Menge. Pollakisurie = viele Male."

**D2: "Nykturie ist ab 65 Jahren einfach Alter — nicht behandelbar."**
- **Fachbegriff:** Alterungs-Ergebung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Nykturie ist bei Älteren **häufig**, aber nicht 'normal'. Ursachen sind oft behandelbar: Herzinsuffizienz (Beine hochlegen tagsüber, Diuretika morgens), Prostatahyperplasie (OP, Medikamente), Diabetes. Als Pflegende meldest du Nykturie, der Arzt geht der Ursache nach."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — nachts aufstehen ist bei Älteren oft, aber **nicht normal**. Die Ursache kann man meistens behandeln: Herzschwäche, Prostata, Diabetes. Du meldest es dem Arzt. Nicht sagen: 'Ist halt das Alter' — das stimmt nicht."

**D3: "Dysurie heißt: der Patient kann nicht pinkeln."**
- **Fachbegriff:** Dys-Anurie-Verwechslung
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — **Dysurie** = **schmerzhaftes** Wasserlassen (dys = gestört, -urie = Harn). Der Patient pinkelt, aber es **tut weh**. 'Kann gar nicht pinkeln' heißt **Harnverhalt** (Retention) oder **Anurie** (keine Produktion). Merke: Dys = Schmerz. Retention = kein Abfluss."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — **Dysurie** = es **tut weh** beim Pipi machen. Der Patient macht Urin, aber mit Schmerzen. Wenn er **gar nicht** pinkeln kann, heißt das **Harnverhalt**. Merke: Dysurie = Schmerz. Harnverhalt = geht gar nicht."

### Richtig-Feedback

**C1 (270 Zeichen):** "Genau. Pollakisurie (oft, wenig), Nykturie (nachts), Dysurie (schmerzhaft) und Strangurie (krampfartig) gehören oft zusammen — klassisches Bild des Harnwegsinfekts. Harnverhalt ist eigenständig und ein Notfall. Diese Begriffe brauchst du täglich. (AWMF 2023)"

**B1 (230 Zeichen):** "Sehr gut. Pollakisurie (oft + wenig), Nykturie (nachts), Dysurie (Schmerz) und Strangurie (Krampf) kommen oft zusammen vor — dann ist es meistens ein Harnwegsinfekt. Harnverhalt ist alleine — und ein Notfall."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne und definiere 5 Miktionsstörungen."
- **Rückseite:** "Pollakisurie = häufig/wenig, Nykturie = nachts, Dysurie = schmerzhaft, Strangurie = krampfartig, Harnverhalt = keine Entleerung trotz voller Blase."
- **Kategorie:** fachbegriff

---

## Baustein 5: urin-pathologische-beimengungen

### Metadaten
- **bausteinId:** harnausscheidung-beimengungen
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Was vermutest du, wenn der Teststreifen im Urin Eiweiß, Zucker und Blut gleichzeitig anzeigt? Denk an 3 mögliche Organsysteme."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Teststreifen-Befunde: **Hämaturie** (Blut) bei HWI, Steinen, Tumor. **Proteinurie** (Eiweiß) bei Nierenerkrankung, Schwangerschafts-Präeklampsie. **Glukosurie** (Zucker) bei Diabetes. **Leukozyturie** + **Nitrit** bei HWI. **Ketonurie** bei Diabetes-Entgleisung oder Hungern."

**B1 (230 Zeichen):** "Der Teststreifen zeigt dir: **Blut** (Hämaturie — Niere, Blase, Stein). **Eiweiß** (Proteinurie — Niere kaputt). **Zucker** (Glukosurie — Diabetes). **Leukozyten + Nitrit** (Harnwegsinfekt). **Ketone** (Diabetes entgleist oder Hunger)."

- **Step-Typ:** matching (Befund ↔ Verdachtsdiagnose)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Der Urin-Teststreifen ist deine schnellste Diagnostik. Diese 5 Befunde musst du deuten können:

**Hämaturie — Blut im Urin.** Makrohämaturie (sichtbar rot) oder Mikrohämaturie (nur im Test). Ursachen: Harnwegsinfekt, Nierensteine, Tumor der Blase/Niere, Verletzung, Gerinnungsstörung. Immer ärztlich abklären.

**Proteinurie — Eiweiß im Urin.** Die Niere filtert normalerweise kein Eiweiß aus. Befund = Niere krank (Glomerulonephritis, diabetische Nephropathie) oder in der Schwangerschaft **Präeklampsie** (Gestose) — gefährlich!

**Glukosurie — Zucker im Urin.** Ab Blutzucker ca. 180 mg/dl wird die Niere 'durchlässig'. Hinweis auf **Diabetes mellitus**.

**Leukozyturie + Nitrit** — weiße Blutkörperchen und Nitrit deuten auf **Harnwegsinfekt**. Nitrit entsteht durch bakterielle Aktivität.

**Ketonurie** — Ketonkörper im Urin. Bei entgleistem Diabetes (Ketoazidose — lebensgefährlich), langem Fasten oder extremem Sport. (AWMF 2023)"

**B1 (580 Zeichen):**
"Der Teststreifen sagt dir schnell, was im Urin ist:

**Blut (Hämaturie)** — kann viele Gründe haben: Harnwegsinfekt, Nierenstein, Tumor, Verletzung. Immer zum Arzt.

**Eiweiß (Proteinurie)** — die Niere ist normalerweise ein Sieb: Eiweiß bleibt im Blut. Wenn Eiweiß im Urin ist, ist die Niere krank. In der Schwangerschaft ist es ein **Warnzeichen** (Präeklampsie).

**Zucker (Glukosurie)** — Hinweis auf **Diabetes**. Blutzucker messen!

**Leukozyten + Nitrit** — Harnwegsinfekt.

**Ketone (Ketonurie)** — Diabetes ist stark entgleist, oder der Patient isst lange nichts. Arzt rufen!"

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Hämaturie, Proteinurie, Glukosurie, Leukozyturie, Nitrit, Ketonurie, Präeklampsie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Blut im Urin ist immer ein Tumor."**
- **Fachbegriff:** Tumor-Fehlschluss
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — **Hämaturie** hat viele Ursachen: häufig **Harnwegsinfekt** oder **Nierenstein**, selten Tumor, auch Gerinnungsstörung oder Katheter-Verletzung. Sichtbares Blut (Makrohämaturie) immer ärztlich abklären, aber nicht sofort das Schlimmste annehmen."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Blut im Urin kann viele Gründe haben: **Harnwegsinfekt**, **Nierenstein**, Verletzung, selten ein Tumor. Der Arzt klärt das. Du meldest den Befund, du stellst keine Diagnose. Merke: Blut ≠ immer Tumor."

**D2: "Zucker im Urin ist harmlos, solange der Patient gut isst."**
- **Fachbegriff:** Glukosurie-Verharmlosung
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — **Glukosurie** bedeutet: der Blutzucker ist über der Nierenschwelle (ca. 180 mg/dl). Das ist ein Hinweis auf **Diabetes mellitus** oder Entgleisung. Nicht harmlos. Maßnahme: **Blutzucker sofort messen**, Arzt informieren, Trinkmenge erhöhen."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — **Zucker im Urin** ist ein Warnsignal für **Diabetes**. Der Blutzucker ist zu hoch — deshalb geht Zucker in den Urin. Nicht harmlos. Du musst: **Blutzucker messen**, Arzt rufen, Patient zum Trinken anregen."

**D3: "Nitrit im Urin ist immer ein Laborfehler."**
- **Fachbegriff:** Nitrit-Fehldeutung
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — **Nitrit** entsteht, wenn Bakterien das Nitrat im Urin umwandeln. Positiver Nitrit-Test heißt: **Bakterien in der Blase** (HWI). Selten falsch-positiv, aber meist ein echter Hinweis. Zusammen mit Leukozyten = klares Bild. Der Arzt entscheidet über Antibiotika."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — **Nitrit** kommt von Bakterien. Wenn der Test Nitrit zeigt, sind Bakterien in der Blase. Zusammen mit Leukozyten im Urin = Harnwegsinfekt. Kein Fehler. Du meldest den Befund, der Arzt entscheidet über Antibiotika."

### Richtig-Feedback

**C1 (265 Zeichen):** "Genau. Teststreifen-Befunde gehören in jede Schicht-Übergabe: Blut (HWI, Stein, Tumor), Eiweiß (Niere, Schwangerschaft!), Zucker (Diabetes), Leukozyten+Nitrit (HWI), Ketone (Diabetes-Entgleisung). Du testest, der Arzt entscheidet über Therapie. (AWMF 2023)"

**B1 (230 Zeichen):** "Sehr gut. Der Teststreifen zeigt dir wichtige Sachen: Blut, Eiweiß, Zucker, Bakterien-Zeichen, Ketone. Jeder Befund hat Bedeutung. Du meldest — der Arzt behandelt. Besonders wichtig: Zucker + Ketone = Diabetes-Notfall."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet Nitrit + Leukozyten positiv im Urin-Teststreifen?"
- **Rückseite:** "Harnwegsinfekt (HWI). Nitrit entsteht durch Bakterien, Leukozyten zeigen Entzündung. Symptome prüfen, Arzt informieren."
- **Kategorie:** assessment

---

## Baustein 6: kontinenz-definition

### Metadaten
- **bausteinId:** harnausscheidung-kontinenz-definition
- **bloomLevel:** 1
- **wissensart:** definition
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Wann würdest du einen Menschen 'kontinent' nennen? Schreib in eigenen Worten, was das genau heißt — und was es NICHT heißt."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "**Kontinenz** ist nach ICS die Fähigkeit, **bewusst zu entscheiden**, wann und wo die Blase entleert wird. **Inkontinenz** = unwillkürlicher Harnverlust, der für die Person ein Problem darstellt. Inkontinenz ist kein Alter, sondern ein **behandelbares Symptom**."

**B1 (225 Zeichen):** "**Kontinenz** heißt: du entscheidest selbst, wann und wo du Urin lässt. Nicht die Blase entscheidet — du entscheidest. **Inkontinenz** heißt: Urin geht ungewollt ab. Das ist **nicht normal** im Alter. Man kann es behandeln."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Der Expertenstandard des DNQP (2014, Neuauflage 2025 angekündigt) setzt den Rahmen für unser pflegerisches Handeln:

**Kontinenz** ist die Fähigkeit, **bewusst** und **willkürlich** zu entscheiden, wann, wo und wie die Blase entleert wird. Drei Bedingungen müssen erfüllt sein: die Person spürt den Harndrang, sie kann ihn **aufschieben**, und sie erreicht rechtzeitig die Toilette.

**Inkontinenz** definiert die ICS (International Continence Society) als **jeden unfreiwilligen Harnverlust**, der für die betroffene Person ein **soziales oder hygienisches Problem** darstellt. Der Leidensdruck gehört zur Definition — deshalb ist auch das **Gespräch** zentral.

Pflegerisch wichtig: Inkontinenz ist **kein normales Alterssymptom**, sondern ein **behandelbares Problem**. Studien zeigen: Etwa jede dritte Frau über 65 und jeder fünfte Mann über 65 sind betroffen — aber viele schweigen aus Scham. (DNQP 2014; ICS)"

**B1 (575 Zeichen):**
"So definieren wir Kontinenz und Inkontinenz:

**Kontinenz** heißt: Du hast die Blase unter Kontrolle. Drei Sachen müssen klappen:
1. Du spürst, wann du zur Toilette musst.
2. Du kannst es **aushalten** (aufschieben).
3. Du kommst rechtzeitig zur Toilette.

**Inkontinenz** heißt: Urin geht ungewollt ab. Das ist ein **Leiden** für den Menschen — sozial und mit der Hygiene.

Wichtig: Inkontinenz ist **nicht einfach das Alter**. Es ist ein **Problem, das man behandeln kann**. Viele ältere Menschen haben Inkontinenz, aber sie schämen sich und reden nicht darüber. Du sprichst es aktiv an."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Kontinenz, Inkontinenz, ICS, DNQP]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Inkontinenz gehört zum Alter dazu — da kann man nichts machen."**
- **Fachbegriff:** Fatalismus-Mythos
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Inkontinenz ist bei Älteren **häufig**, aber **nicht normal und nicht unvermeidbar**. Der DNQP-Expertenstandard zeigt: Mit Training (Beckenboden, Toilettentraining), Medikamenten oder OP lässt sich bei vielen Menschen das Kontinenz-Profil verbessern. Nie resignieren."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — Inkontinenz ist bei älteren Menschen oft, aber **nicht normal**. Man kann viel machen: Training für den Beckenboden, Training für die Toilette, Medikamente, manchmal OP. Nicht sagen 'ist halt Alter' — es gibt Hilfe."

**D2: "Wer eine Einlage braucht, ist inkontinent."**
- **Fachbegriff:** Hilfsmittel-Gleichsetzung
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — **Einlagen** sind ein Hilfsmittel, keine Diagnose. Jemand kann auch **unabhängig kontinent** sein — also selbst eine Einlage nutzen ohne Pflegehilfe. Und manche Inkontinente brauchen keine Einlage, weil Training oder Toilettenplan reichen. Hilfsmittel ≠ Diagnose."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — eine Einlage ist ein **Hilfsmittel**. Inkontinenz ist eine **Diagnose**. Die Einlage sagt nicht automatisch: inkontinent. Manche Menschen nutzen eine Einlage einfach zur Sicherheit. Merke: Einlage ist nicht Diagnose."

**D3: "Kontinenz heißt: die Blase füllt sich langsam."**
- **Fachbegriff:** Füllungs-Fehldeutung
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — **Kontinenz** ist die **willkürliche Kontrolle** über die Blasenentleerung: spüren, aufschieben können, rechtzeitig zur Toilette. Die Blasenfüllung passiert bei jedem gleich schnell. Entscheidend ist, dass die Person den Harndrang **steuern** kann."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — **Kontinenz** heißt: du **kontrollierst**, wann du Urin lässt. Die Blase füllt sich bei allen gleich. Wichtig ist: Du spürst den Drang, du kannst ihn aushalten, du kommst zur Toilette. Das ist Kontinenz."

### Richtig-Feedback

**C1 (265 Zeichen):** "Genau. Kontinenz heißt willkürliche Kontrolle: spüren, aufschieben können, rechtzeitig da sein. Inkontinenz ist jeder unfreiwillige Harnverlust mit Leidensdruck — ein behandelbares Symptom, kein Schicksal. Dein Job: aktiv ansprechen, nicht tabuisieren. (DNQP 2014)"

**B1 (225 Zeichen):** "Sehr gut. Kontinenz heißt: du entscheidest selbst über deine Blase. Inkontinenz heißt: Urin geht ungewollt ab — und es belastet den Menschen. Das ist behandelbar. Du sprichst das aktiv an, weil viele sich schämen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Definiere Kontinenz und Inkontinenz nach ICS/DNQP."
- **Rückseite:** "Kontinenz = willkürliche Kontrolle über Zeitpunkt und Ort der Blasenentleerung. Inkontinenz = jeder unfreiwillige Harnverlust mit sozialem oder hygienischem Problem für die Person."
- **Kategorie:** fachbegriff

---

## Baustein 7: belastungsinkontinenz

### Metadaten
- **bausteinId:** harnausscheidung-belastungsinkontinenz
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Frau L., 62, lacht herzhaft über einen Witz — und merkt, dass sie einen Schluck Urin verloren hat. Beim nächsten Husten genauso. Welche Inkontinenzform tippst du — und was ist die anatomische Schwachstelle?"
- **Step-Typ:** mc (Bloom 3)

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "**Belastungsinkontinenz** (früher 'Stressinkontinenz') = Urinverlust bei **körperlicher Belastung** ohne Harndrang: Husten, Niesen, Lachen, Sport, Heben. Ursache: **Beckenbodenschwäche** — nach Geburten, Wechseljahre, Übergewicht, Prostata-OP. Therapie: Beckenbodentraining."

**B1 (240 Zeichen):** "**Belastungsinkontinenz** = Urin geht ab bei **Anstrengung**: Husten, Niesen, Lachen, schweres Heben. Kein Harndrang vorher! Ursache: Der Beckenboden ist schwach. Häufig nach Geburten, in den Wechseljahren oder bei Übergewicht. Training hilft."

- **Step-Typ:** comparison (Belastungs- vs. Drang-Typ)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die **Belastungsinkontinenz** (ICS-Terminologie) ist die häufigste Form bei Frauen. Früher hieß sie 'Stressinkontinenz' — das Wort 'Stress' meint hier **körperlichen Druck**, nicht Psyche.

**Mechanismus:** Bei Husten, Niesen, Lachen, Sport oder Heben steigt der Druck in der Bauchhöhle und damit auf die Blase. Ein **gesunder Beckenboden** würde den Urin durch Gegenspannung des Schließmuskels halten. Ist der Beckenboden geschwächt — nach Schwangerschaften und Geburten, in den Wechseljahren (Östrogenmangel), bei Übergewicht, nach Prostata-OP beim Mann — reicht diese Gegenspannung nicht mehr.

**Leitsymptom:** Urinverlust **ohne Harndrang**. Die Patientin merkt: 'Ich musste gar nicht aufs Klo — es ist einfach passiert.'

**Grade:** Grad 1 (bei Husten/Niesen), Grad 2 (bei Gehen/Treppensteigen), Grad 3 (im Liegen, in Ruhe).

**Therapie:** **Beckenbodentraining** (Kegel-Übungen) ist Mittel der ersten Wahl, Gewichtsreduktion, Östrogensalbe, bei Versagen OP (z.B. TVT-Band). (AWMF 2023)"

**B1 (600 Zeichen):**
"**Belastungsinkontinenz** ist die häufigste Inkontinenz bei Frauen.

**Was passiert:** Bei **Anstrengung** (Husten, Niesen, Lachen, Heben, Sport) drückt es auf die Blase. Der **Beckenboden** (die Muskeln unten im Becken) müssten dagegen halten. Sind die Muskeln schwach, geht Urin ab.

**Wichtig:** Die Frau hat **keinen Drang** vorher. Sie sagt: 'Ich musste gar nicht — es war einfach weg.'

**Warum schwacher Beckenboden?** Nach Geburten, in den Wechseljahren, bei Übergewicht. Bei Männern oft nach Prostata-OP.

**Was hilft:** **Beckenbodentraining** (Kegel-Übungen) — das kann jede Frau lernen. Abnehmen hilft. Bei schweren Fällen: kleine OP mit einem Band."

- **Erklärungs-Step:** stepType `text` (displayFormat: beforeafter — schwacher vs. trainierter Beckenboden)
- **Glossar-Begriffe:** [Belastungsinkontinenz, Beckenboden, Kegel-Übungen, Östrogen]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Belastungsinkontinenz bedeutet Inkontinenz bei psychischem Stress."**
- **Fachbegriff:** Stress-Missverständnis
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — das englische Wort 'stress' meint hier **körperlichen Druck**, nicht Psyche. Belastungsinkontinenz tritt bei **körperlicher Anstrengung** auf: Husten, Niesen, Heben, Sport. Deshalb heißt sie heute korrekt **Belastungsinkontinenz** — das ist klarer. Nicht zu verwechseln mit Panikattacken."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **Belastung** heißt hier **körperlich**: Husten, Niesen, Lachen, Heben. **Nicht** psychischer Stress. Das englische 'stress' wurde früher falsch übersetzt. Heute sagen wir: **Belastungsinkontinenz** = bei Anstrengung."

**D2: "Bei Belastungsinkontinenz hat die Patientin plötzlichen, starken Harndrang."**
- **Fachbegriff:** Drang-Verwechslung
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — bei **Belastungsinkontinenz** gibt es **keinen Harndrang** vor dem Urinverlust. Der Urin geht einfach bei Druckerhöhung ab. **Plötzlicher starker Harndrang** ist typisch für **Dranginkontinenz** (Urge) — eine andere Form. Merke: Belastung = ohne Drang. Urge = mit Drang."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — bei **Belastungsinkontinenz** hat die Patientin **keinen Drang** vorher. Es passiert einfach. **Plötzlicher Drang** ist die **Dranginkontinenz** — eine andere Form. Merke: Belastung ohne Drang, Drang mit Drang."

**D3: "Belastungsinkontinenz kommt nur bei Frauen vor."**
- **Fachbegriff:** Gender-Fehlschluss
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — **bei Frauen häufiger** (nach Geburten, in den Wechseljahren), aber auch **Männer** können Belastungsinkontinenz haben, besonders **nach einer Prostata-OP** (radikale Prostatektomie). Der Beckenboden der Männer wird dabei oft geschwächt. Training hilft auch Männern."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Frauen sind häufiger betroffen, aber **auch Männer**: besonders **nach einer Prostata-OP**. Der Beckenboden kann bei der OP geschwächt werden. Männer können auch Beckenbodentraining machen. Merke: nicht nur Frauen."

### Richtig-Feedback

**C1 (280 Zeichen):** "Genau. Belastungsinkontinenz = Urinverlust bei körperlicher Belastung (Husten, Niesen, Heben) **ohne Harndrang**. Ursache ist ein **schwacher Beckenboden** — nach Geburten, Wechseljahren, Prostata-OP, Übergewicht. Erste Wahl ist **Beckenbodentraining**. (AWMF 2023)"

**B1 (235 Zeichen):** "Sehr gut. Belastungsinkontinenz = Urin geht bei Anstrengung ab, **ohne Drang**. Der Beckenboden ist schwach. Das passiert nach Geburten, in den Wechseljahren oder nach Prostata-OP. **Beckenbodentraining** ist die beste Therapie."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Belastungsinkontinenz — und was ist die Therapie erster Wahl?"
- **Rückseite:** "Urinverlust bei körperlicher Belastung (Husten, Niesen, Heben, Sport) ohne Harndrang. Ursache: Beckenbodenschwäche. Therapie 1. Wahl: Beckenbodentraining (Kegel-Übungen)."
- **Kategorie:** fachbegriff

---

## Baustein 8: dranginkontinenz

### Metadaten
- **bausteinId:** harnausscheidung-dranginkontinenz
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Herr N. erzählt: 'Ich schließe die Wohnungstür auf — und schaffe es nicht mehr bis zum WC. Der Drang kommt plötzlich, wie ein Schalter.' Welche Inkontinenzform — und was macht die Blase da?"
- **Step-Typ:** mc (Bloom 3)

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "**Dranginkontinenz** (Urge) = **plötzlicher, starker Harndrang**, der nicht unterdrückbar ist — Urinverlust auf dem Weg zur Toilette. Ursache: überaktiver **Detrusor-Muskel** (zieht sich unkontrolliert zusammen). Trigger: Schlüssel, Wasserrauschen, Kälte. Therapie: Blasentraining."

**B1 (235 Zeichen):** "**Dranginkontinenz** = plötzlicher, **sehr starker** Drang. Du schaffst es nicht mehr zur Toilette. Ursache: Der Blasenmuskel (Detrusor) zieht sich unkontrolliert zusammen. Bekannte Auslöser: Schlüssel umdrehen, Wasser hören, Kälte. Training hilft."

- **Step-Typ:** dialog (Patient beschreibt Symptom)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Die **Dranginkontinenz** (englisch: Urge Incontinence) ist die zweithäufigste Form — besonders bei älteren Menschen.

**Mechanismus:** Der **Detrusor-Muskel** (die Muskelschicht der Blasenwand) zieht sich **unwillkürlich** zusammen, obwohl die Blase noch nicht voll ist. Das erzeugt plötzlichen, imperativen Harndrang. Die Patientin schafft es nicht rechtzeitig zur Toilette.

**Typische Auslöser ('Triggers'):** Schlüssel im Türschloss (sogenannte 'Latchkey-Urgency'), Wasserrauschen, Kälte, kaltes Wasser an den Händen.

**Ursachen:** überaktive Blase (Overactive Bladder, OAB), Blasenentzündung, neurologische Erkrankungen (Schlaganfall, Parkinson, Multiple Sklerose), Blasensteine, Tumor.

**Abgrenzung zur Belastungsinkontinenz:** Hier **mit** starkem Drang, dort **ohne** Drang.

**Therapie:** **Blasentraining** (Miktionsintervalle langsam verlängern, Miktionsprotokoll 3 Tage), Anticholinergika (z.B. Oxybutynin, Tolterodin), Beta-3-Agonist Mirabegron, bei Therapieversagen Botox-Injektion in den Detrusor. (AWMF 2023)"

**B1 (620 Zeichen):**
"**Dranginkontinenz** ist die zweithäufigste Inkontinenz — oft bei älteren Menschen.

**Was passiert:** Der **Blasenmuskel** zieht sich plötzlich zusammen, obwohl die Blase noch nicht voll ist. Der Patient hat **plötzlich starken Drang** — und kommt nicht mehr zur Toilette.

**Typische Auslöser:** Schlüssel umdrehen an der Tür, Wasser laufen hören, kalte Hände. Das Gehirn verbindet diese Signale mit Pipi.

**Ursachen:** Reizblase, Blasenentzündung, Nervenkrankheit (Schlaganfall, Parkinson, MS), Stein, Tumor.

**Wichtig:** Dranginkontinenz = **mit** Drang. Belastungsinkontinenz = **ohne** Drang.

**Was hilft:** **Blasentraining** (langsam länger einhalten), Medikamente, in schweren Fällen Botox in die Blase."

- **Erklärungs-Step:** stepType `comparison` (Belastung vs. Drang)
- **Glossar-Begriffe:** [Dranginkontinenz, Detrusor, Urge, Anticholinergika, Mirabegron]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Dranginkontinenz kommt daher, dass die Blase zu voll ist."**
- **Fachbegriff:** Füllungs-Fehlschluss
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — bei **Dranginkontinenz** ist die Blase oft **noch nicht voll**. Trotzdem zieht sich der **Detrusor-Muskel** unwillkürlich zusammen. Das Gehirn interpretiert das als dringenden Harndrang. Eine **überfüllte** Blase ohne Entleerung wäre **Harnverhalt** oder **Überlaufinkontinenz**."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — bei **Dranginkontinenz** ist die Blase oft **nicht voll**. Der Blasenmuskel zieht sich trotzdem zusammen — und der Drang kommt plötzlich. Eine **überfüllte** Blase ohne Abfluss wäre **Harnverhalt** — was anderes."

**D2: "Dranginkontinenz und Belastungsinkontinenz sind dasselbe."**
- **Fachbegriff:** Formen-Verschmelzung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — zwei völlig verschiedene Mechanismen: **Belastungsinkontinenz** = schwacher Beckenboden, Urinverlust **ohne Drang** bei körperlicher Anstrengung. **Dranginkontinenz** = überaktiver Detrusor, Urinverlust **mit** plötzlichem starkem Drang. Wenn beides auftritt: **Mischinkontinenz**."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — zwei verschiedene Formen: **Belastung** = ohne Drang, Beckenboden schwach. **Drang** = mit starkem Drang, Blasenmuskel zuckt. Wenn beides zusammen ist, heißt das **Mischinkontinenz**."

**D3: "Blasentraining heißt: immer sofort zur Toilette gehen, wenn der Drang kommt."**
- **Fachbegriff:** Training-Fehldeutung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — **Blasentraining** ist das **Gegenteil**: Der Patient **hält den Drang bewusst aus**, zunächst nur kurz (Minuten), dann immer länger. Ziel: Intervalle zwischen Toilettengängen **verlängern**. Ein Miktionsprotokoll hilft. Sofort-Gehen würde das Problem verstärken."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **Blasentraining** heißt: Der Patient **hält den Drang aus**, erst kurz, dann immer länger. Die Blase lernt wieder, mehr zu halten. Sofort hingehen ist das Gegenteil. Ein Protokoll hilft dabei."

### Richtig-Feedback

**C1 (285 Zeichen):** "Genau. Dranginkontinenz = plötzlicher imperativer Harndrang durch überaktiven Detrusor. Auslöser: Schlüssel, Wasser, Kälte. Ursachen: OAB, Neurologie, Blasenentzündung. Therapie: Blasentraining (Intervalle verlängern), Anticholinergika, bei Therapieversagen Botox. (AWMF 2023)"

**B1 (245 Zeichen):** "Sehr gut. Dranginkontinenz = plötzlicher starker Drang, Blasenmuskel zuckt. Typisch: Schlüssel umdrehen — und es ist zu spät. Hilft: **Blasentraining** (langsam länger aushalten), Medikamente, manchmal Botox in die Blase."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Dranginkontinenz — und was ist die erste Therapie?"
- **Rückseite:** "Plötzlicher imperativer Harndrang durch unwillkürliche Detrusor-Kontraktion. Therapie 1. Wahl: Blasentraining mit Miktionsprotokoll (3 Tage) + schrittweise Intervall-Verlängerung."
- **Kategorie:** handlung

---

## Baustein 9: mischinkontinenz

### Metadaten
- **bausteinId:** harnausscheidung-mischinkontinenz
- **bloomLevel:** 2
- **wissensart:** klassifikation
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Frau W., 74, verliert Urin beim Husten UND bei plötzlichem starkem Drang. Welche Form hat sie — und warum ist die Therapie hier schwieriger?"
- **Step-Typ:** mc (Bloom 2)

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "**Mischinkontinenz** = Kombination aus **Belastungs- und Dranginkontinenz**. Häufig bei älteren Frauen. Diagnostik: Was überwiegt? **Miktionsprotokoll** hilft. Therapie richtet sich nach dem führenden Anteil — oft zunächst Drang behandeln, dann Beckenboden trainieren."

**B1 (220 Zeichen):** "**Mischinkontinenz** heißt: Die Patientin hat **beides** gleichzeitig — Urinverlust bei Husten UND plötzlichen starken Drang. Oft bei älteren Frauen. Erst behandelst du das, was mehr stört — meist den Drang. Dann den Beckenboden."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (620 Zeichen):**
"Die **Mischinkontinenz** ist keine eigene dritte Form — sie ist eine **Kombination** aus Belastungs- und Dranginkontinenz. Besonders häufig bei Frauen über 60 Jahre.

**Klinisch:** Die Patientin beschreibt beides — Urinverlust bei Husten/Niesen und plötzlich starken Harndrang. Oft überwiegt eine Komponente.

**Diagnostik:** Ein **3-Tage-Miktionsprotokoll** zeigt das Muster — wann kommt der Urinverlust? Bei Belastung? Bei Drang? Wie groß sind die Portionen?

**Therapie:** Immer die **belastendere Komponente zuerst** behandeln. Meist ist das der Drang (weil er unberechenbar ist). Also: Zuerst Blasentraining + Anticholinergika, parallel Beckenbodentraining. Therapie dauert 3-6 Monate, Geduld ist wichtig. (AWMF 2023)"

**B1 (495 Zeichen):**
"**Mischinkontinenz** = **beide Formen zusammen**. Die Patientin hat Belastungsinkontinenz **und** Dranginkontinenz.

Das passiert oft bei älteren Frauen. Meist ist eine Form schlimmer als die andere.

**Wie findet man das heraus?** Mit einem **Miktionsprotokoll** — 3 Tage lang alles aufschreiben: Wann war der Urinverlust? Bei Husten? Bei Drang?

**Was tun?** Erst das behandeln, was mehr stört. Meistens ist das der **Drang**. Also erst Blasentraining + Medikament, gleichzeitig Beckenbodentraining. Es dauert 3 bis 6 Monate. Geduld haben."

- **Erklärungs-Step:** stepType `text` (displayFormat: scenario)
- **Glossar-Begriffe:** [Mischinkontinenz, Miktionsprotokoll]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Mischinkontinenz ist eine eigene dritte Inkontinenzform."**
- **Fachbegriff:** Eigenständigkeits-Fehler
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — **Mischinkontinenz ist keine eigene Form**, sondern eine **Kombination** aus Belastungs- und Dranginkontinenz. Beide Mechanismen wirken gleichzeitig. Das erklärt auch die Therapie: Beide Komponenten müssen angegangen werden, je nach Überwiegen."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — **Mischinkontinenz ist keine eigene Form**. Es sind **beide zusammen**: Belastung + Drang. Deshalb muss die Therapie auch beides angehen. Meist erst das behandeln, was mehr stört."

**D2: "Bei Mischinkontinenz behandelt man beides gleichzeitig mit gleicher Priorität."**
- **Fachbegriff:** Gleichzeit-Fehldeutung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — klinisch bewährt: zuerst die **führende, belastendere Komponente** — meist der Drang, weil er unberechenbar ist. Parallel kann Beckenbodentraining laufen. Alles auf einmal zu therapieren überfordert die Patientin. Die AWMF-Leitlinie empfiehlt Priorisierung."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — besser: **erst das, was mehr stört**. Meist der Drang (weil er unvorhersehbar ist). Beckenbodentraining kann nebenbei laufen. Alles gleichzeitig ist zu viel — der Patient gibt dann auf."

**D3: "Mischinkontinenz ist selten."**
- **Fachbegriff:** Häufigkeits-Fehlschluss
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — **Mischinkontinenz ist eine der häufigsten Formen** bei Frauen über 60. Mindestens ein Drittel der inkontinenten älteren Frauen hat Mischformen. Deshalb gehört zur Diagnose immer die Frage nach **beiden** Symptomen, nicht nur einem."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — **Mischinkontinenz ist sehr häufig** bei Frauen über 60. Etwa ein Drittel hat beides. Deshalb fragst du immer nach **beiden** Symptomen: Husten-Verlust UND plötzlicher Drang. Nicht nur eins."

### Richtig-Feedback

**C1 (265 Zeichen):** "Genau. Mischinkontinenz = Belastung + Drang gleichzeitig. Häufig bei älteren Frauen. Miktionsprotokoll zeigt, welche Komponente überwiegt. Therapie beginnt meist mit der belastenderen Komponente, parallel die andere. Geduld: 3-6 Monate. (AWMF 2023)"

**B1 (225 Zeichen):** "Sehr gut. Mischinkontinenz = Belastung + Drang zusammen. Häufig bei älteren Frauen. Erst das Miktionsprotokoll — dann das behandeln, was mehr stört. Meist der Drang zuerst, dann Beckenboden. Es dauert Monate."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Mischinkontinenz und wie diagnostizierst du sie?"
- **Rückseite:** "Kombination aus Belastungs- und Dranginkontinenz. Diagnose über 3-Tage-Miktionsprotokoll — zeigt, welche Komponente überwiegt."
- **Kategorie:** fachbegriff

---

## Baustein 10: ueberlaufinkontinenz

### Metadaten
- **bausteinId:** harnausscheidung-ueberlaufinkontinenz
- **bloomLevel:** 3
- **wissensart:** komplikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Ein 76-jähriger Mann mit Prostatahyperplasie verliert ständig tropfenweise Urin. Die Blase wirkt im Ultraschall prall voll — trotz ständigem Tröpfeln. Was passiert da — und warum ist das gefährlich?"
- **Step-Typ:** freetext (Bloom 3)

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "**Überlaufinkontinenz** (auch 'paradoxe Inkontinenz') = Urinverlust bei **chronisch überfüllter Blase**. Blase ist voll, kann sich aber nicht entleeren → Urin tropft über. Ursachen: **Prostatahyperplasie** (häufig!), Detrusorschwäche, neurologisch. Gefahr: Niere kaputt — sofort katheterisieren."

**B1 (235 Zeichen):** "**Überlaufinkontinenz** = die Blase ist **ganz voll**, aber der Urin kommt nicht richtig raus. Nur einzelne Tropfen gehen ab. Oft bei Männern mit Prostata-Problem. **Gefahr**: Die Niere kann kaputtgehen. Der Arzt muss einen Katheter legen."

- **Step-Typ:** comparison (Überlauf vs. Drang — Blasenfüllung unterschiedlich)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"Die **Überlaufinkontinenz** — oft auch **paradoxe Inkontinenz** genannt — ist pathophysiologisch etwas ganz anderes als Belastung oder Drang:

**Mechanismus:** Die Blase ist chronisch **überfüllt** (Restharn oft >400 ml). Der Abfluss ist **behindert** — oder der Detrusor kann nicht mehr kontrahieren. Der **intravesikale Druck** übersteigt irgendwann den Verschlussdruck der Harnröhre, und Urin **tropft unkontrolliert über**. Die Blase wird aber nie richtig leer.

**Hauptursachen:**
- **Prostatahyperplasie** (häufigste Ursache beim Mann, ab 60 Jahren)
- **Uterus-Prolaps, Beckenbodensenkung** (bei Frauen)
- **Harnröhrenstriktur** (Narben)
- **Diabetes mellitus** mit autonomer Neuropathie (Detrusor schwach)
- **Medikamente**: Anticholinergika, Opioide
- **Nach Operationen** (postoperative Blasenatonie)

**Gefahren:** Rückstau bis in die Nieren → **Hydronephrose** → Nierenversagen. Harnwegsinfekte durch Restharn.

**Maßnahmen:** **Sofortiger Einmalkatheter** zur Entlastung. Ursachen-Therapie (Prostata-OP, Medikament umsetzen). Intermittierender Selbstkatheterismus bei chronischer Form. (AWMF 2023)"

**B1 (630 Zeichen):**
"**Überlaufinkontinenz** ist etwas ganz anderes als die anderen Formen.

**Was passiert:** Die Blase ist **ganz voll**. Aber der Urin kann **nicht richtig raus**. Irgendwann wird der Druck so hoch, dass Urin **tropfenweise** über den Widerstand übergeht — wie ein überlaufendes Glas.

**Warum passiert das?**
- **Prostata** ist zu groß (häufigste Ursache beim Mann).
- **Beckenbodensenkung** bei Frauen.
- **Narben** in der Harnröhre.
- **Diabetes** — der Nerv zur Blase ist geschädigt.
- **Medikamente**: starke Schmerzmittel (Morphin), manche andere.

**Gefahren:** Urin staut zurück bis in die **Niere** → Niere kaputt. Und viele **Harnwegsinfekte**.

**Was tun?** Sofort **Katheter** legen — der Arzt. Dann die Ursache behandeln."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Überlaufinkontinenz, paradoxe Inkontinenz, Restharn, Prostatahyperplasie, Hydronephrose, Detrusor-Atonie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Überlaufinkontinenz und Harnverhalt sind dasselbe."**
- **Fachbegriff:** Überlauf-Harnverhalt-Verschmelzung
- **Feedback (C1, 290 Zeichen):** "Fast — aber wichtig zu trennen: **Harnverhalt** = akute volle Blase, die gar nicht entleert werden kann (**keinerlei Urin** kommt raus). **Überlaufinkontinenz** = chronisch überfüllte Blase, bei der **Urin tropfenweise übergeht**. Harnverhalt ist der akute Vorläufer der Überlaufinkontinenz."
- **Feedback (B1, 245 Zeichen):** "Fast — **Harnverhalt** = Blase voll, gar kein Urin kommt. **Überlaufinkontinenz** = Blase voll, Urin **tropft** raus. Überlaufinkontinenz ist oft die Folge, wenn ein Harnverhalt lange nicht erkannt wird. Beide sind gefährlich — Arzt rufen."

**D2: "Wenn Urin abgeht, ist die Blase leer."**
- **Fachbegriff:** Entleerungs-Fehlschluss
- **Feedback (C1, 275 Zeichen):** "Nicht bei Überlaufinkontinenz — gerade hier geht Urin ab, **und die Blase bleibt prall voll**. Der Schlüssel ist die **Restharn-Messung** per Ultraschall: Restharn >100 ml ist pathologisch, >400 ml ein Notfall. Nie annehmen 'hat gepinkelt, also leer' — immer Bauch tasten!"
- **Feedback (B1, 240 Zeichen):** "Nicht bei Überlaufinkontinenz — die Blase bleibt **prall voll**, obwohl Urin abgeht. Immer mit **Ultraschall Restharn messen**. Und den **Bauch tasten**: Ist die Blase zu fühlen, dann ist sie voll. Nicht nur auf Urin-Menge gehen."

**D3: "Überlaufinkontinenz behandelt man zuerst mit Beckenbodentraining."**
- **Fachbegriff:** Falsche-Therapie-Zuweisung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — hier ist die Blase **voll und kann nicht entleeren**. Beckenbodentraining hilft NICHT. Erste Maßnahme: **Einmalkatheterisierung** zur Entlastung. Danach Ursache behandeln — Prostata-OP, Medikament umsetzen, intermittierender Selbstkatheterismus bei chronischer Form."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Beckenbodentraining hilft hier nicht**. Die Blase ist voll und kann nicht raus. Das Training bringt nichts. Was der Arzt macht: **Katheter legen**, um die Blase zu entlasten. Dann die Ursache behandeln — oft Prostata-OP."

### Richtig-Feedback

**C1 (295 Zeichen):** "Genau. Überlaufinkontinenz = tropfenweiser Urinverlust bei chronisch überfüllter Blase. Häufigste Ursache: Prostatahyperplasie. Gefahr: Harnstau bis in die Nieren → Hydronephrose → Nierenversagen. Sofortmaßnahme: Einmalkatheter zur Entlastung. Dann Ursachentherapie. (AWMF 2023)"

**B1 (240 Zeichen):** "Sehr gut. Überlaufinkontinenz = Blase voll, Urin tropft raus. Meist Prostata-Problem. **Gefahr**: Niere geht kaputt. Was du tust: Bauch tasten, Ultraschall für Restharn, Arzt rufen. Der legt einen Katheter zur Entlastung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Überlaufinkontinenz und welche Komplikation droht?"
- **Rückseite:** "Tropfenweiser Urinverlust bei chronisch überfüllter Blase, häufigste Ursache Prostatahyperplasie. Komplikation: Harnstau in die Nieren (Hydronephrose) → Nierenversagen. Sofort katheterisieren."
- **Kategorie:** handlung

---

## Baustein 11: reflex-und-funktionelle-inkontinenz

### Metadaten
- **bausteinId:** harnausscheidung-reflex-funktionell
- **bloomLevel:** 2
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Frau mit Demenz ist körperlich völlig in der Lage, zur Toilette zu gehen — aber sie findet das WC im Pflegeheim nicht mehr. Ist das Inkontinenz? Wenn ja: welche?"
- **Step-Typ:** mc (Bloom 2)

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "**Reflexinkontinenz** = unwillkürliche Blasenentleerung bei **neurologischer Schädigung** (Querschnittlähmung, MS) — Patient spürt den Drang nicht. **Funktionelle Inkontinenz** = **körperlich kontinent**, aber durch **Umstände** (Demenz, Immobilität, fehlende Orientierung) keine Toilette rechtzeitig."

**B1 (240 Zeichen):** "Zwei weitere Formen: **Reflexinkontinenz** = Die Nerven sind kaputt (Querschnitt, MS). Die Blase entleert sich ohne Drang-Gefühl. **Funktionelle Inkontinenz** = Der Körper könnte, aber der Mensch **findet die Toilette nicht** (Demenz, Immobilität)."

- **Step-Typ:** matching (Form ↔ Ursache)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Zwei weitere ICS-Formen, die im Alltag oft vorkommen:

**Reflexinkontinenz** — unwillkürliche Blasenentleerung durch Störung der **nervalen Steuerung**. Die Blase entleert sich **reflexhaft** bei bestimmter Füllung, ohne dass der Patient den Drang bewusst wahrnimmt. Ursachen: **Querschnittlähmung**, **Multiple Sklerose**, Rückenmarkstumor, frühkindliche Hirnschädigung. Der Patient lernt ggf. **Triggering-Techniken** (beklopfen des Unterbauchs) oder **intermittierenden Selbstkatheterismus**.

**Funktionelle Inkontinenz** — die Blase und die Nerven sind **intakt**. Der Patient ist rein **blasentechnisch kontinent**, verliert aber trotzdem Urin, weil er die Toilette **nicht rechtzeitig erreicht oder findet**. Ursachen: **Demenz** (findet WC nicht, vergisst Toilettengang), **Immobilität** (kann nicht aufstehen), **fehlende Orientierung** in fremder Umgebung, **schlechte Sichtverhältnisse**, WC zu weit entfernt.

**Pflegerisches Ziel:** Funktionelle Inkontinenz ist oft **vermeidbar**: Toilettenplan, klare Beschilderung, Nachtlicht, Griffe, nahe Toilette. (DNQP 2014)"

**B1 (610 Zeichen):**
"Zwei weitere Inkontinenz-Formen:

**Reflexinkontinenz** — die **Nerven** sind kaputt. Die Blase entleert sich **von selbst**, der Patient spürt den Drang **nicht**. Häufig bei: **Querschnittlähmung**, **Multiple Sklerose** (MS). Der Patient lernt, die Blase zu 'beklopfen', oder er legt sich selbst einen Einmalkatheter.

**Funktionelle Inkontinenz** — die Blase ist **ganz gesund**. Die Nerven sind gesund. Aber der Mensch **findet die Toilette nicht** oder **kommt nicht rechtzeitig**. Ursachen: **Demenz**, **kann nicht laufen**, fremde Umgebung, WC zu weit weg.

**Wichtig:** Funktionelle Inkontinenz kannst du als Pflegende **oft vermeiden**: Toilettenplan, WC beschildern, Nachtlicht, Griffe, nahe Toilette."

- **Erklärungs-Step:** stepType `comparison` (Reflex vs. funktionell vs. andere)
- **Glossar-Begriffe:** [Reflexinkontinenz, funktionelle Inkontinenz, Querschnittlähmung, Triggering, intermittierender Selbstkatheterismus]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Funktionelle Inkontinenz ist nur eine Ausrede — es ist echte Inkontinenz."**
- **Fachbegriff:** Legitimations-Streit
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **funktionelle Inkontinenz** ist eine **offizielle ICS-Form**. Entscheidend: Die Ursache liegt **nicht in Blase oder Nerven**, sondern in **äußeren Bedingungen oder Kognition**. Für den Patienten ist der Urinverlust genauso belastend. Pflegerisch ist sie oft sehr gut therapierbar."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **funktionelle Inkontinenz** ist eine **richtige Form** der Inkontinenz. Nicht Blase kaputt, nicht Nerven kaputt — aber die Umstände machen es unmöglich (Demenz, nicht laufen können). Pflege kann hier viel tun."

**D2: "Reflexinkontinenz ist eine extreme Form von Dranginkontinenz."**
- **Fachbegriff:** Drang-Reflex-Verschmelzung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — der Unterschied liegt beim **Drang-Gefühl**: Bei **Dranginkontinenz** spürt der Patient sehr wohl den plötzlichen starken Drang — nur zu spät. Bei **Reflexinkontinenz** gibt es **kein** Drang-Gefühl — die Blase entleert sich einfach, weil die Nervenleitung unterbrochen ist."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Unterschied beim **Spüren**: Bei **Dranginkontinenz** spürt der Patient den Drang (zu spät). Bei **Reflexinkontinenz** spürt er **gar nichts** — die Nerven sind kaputt. Zum Beispiel bei Querschnittlähmung."

**D3: "Bei funktioneller Inkontinenz helfen nur Windeln."**
- **Fachbegriff:** Resignation-Fehler
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **funktionelle Inkontinenz** ist oft die **am besten therapierbare** Form. Hilfreich sind: **Toilettentraining** (zeitgesteuert), **Orientierungshilfen** (Beschilderung, Nachtlicht), **Mobilisation**, **Toilettenstuhl** neben dem Bett. Inkontinenzhose ist letzte Option, nicht erste."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — bei **funktioneller Inkontinenz** kannst du **viel machen**: fester **Toilettenplan**, **Schild an der WC-Tür**, **Nachtlicht**, **Toilettenstuhl** nah am Bett, **Hilfe beim Aufstehen**. Inkontinenzhose nur als letzte Lösung."

### Richtig-Feedback

**C1 (285 Zeichen):** "Genau. Reflexinkontinenz = nervale Schädigung (Querschnitt, MS), unwillkürliche Entleerung ohne Drang-Gefühl. Funktionelle Inkontinenz = intakte Blase, aber Umstände (Demenz, Immobilität) verhindern rechtzeitiges WC-Erreichen. Letztere oft pflegerisch sehr gut therapierbar. (DNQP 2014)"

**B1 (245 Zeichen):** "Sehr gut. Reflexinkontinenz = Nerven kaputt (Querschnitt, MS), kein Drang-Gefühl. Funktionelle Inkontinenz = Blase und Nerven okay, aber Demenz oder Immobilität machen das WC unerreichbar. Da kannst du als Pflegende viel helfen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was unterscheidet Reflexinkontinenz von funktioneller Inkontinenz?"
- **Rückseite:** "Reflex: nervale Schädigung (Querschnitt, MS), kein Drang-Gefühl. Funktionell: Blase & Nerven intakt, aber äußere Umstände (Demenz, Immobilität) verhindern Toilettengang."
- **Kategorie:** fachbegriff

---

## Baustein 12: ueberlaufblase-vs-ueberlaufinkontinenz

### Metadaten
- **bausteinId:** harnausscheidung-ueberlaufblase-abgrenzung
- **bloomLevel:** 4
- **wissensart:** entscheidung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Du tastest den Unterbauch eines 78-jährigen Patienten — die Blase wölbt sich deutlich, ist druckempfindlich. Der Patient sagt: 'Ich habe keinen Drang.' Letzte Miktion vor 12 Stunden. **Überlaufblase** oder **Überlaufinkontinenz** — und warum ist der Unterschied wichtig?"
- **Step-Typ:** freetext (Bloom 4 — Analyse)

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Wichtige Abgrenzung: **Überlaufblase** = **akute** prall gefüllte Blase, Patient kann nicht urinieren (Harnverhalt) — Notfall. **Überlaufinkontinenz** = **chronisches Zustandsbild**, bei dem aus überfüllter Blase **tropfenweise Urin abgeht** — ebenfalls behandlungsbedürftig, aber nicht so akut."

**B1 (230 Zeichen):** "**Überlaufblase** = Blase ist akut prall voll, **gar kein Urin** kommt. Das ist ein Notfall — sofort Arzt. **Überlaufinkontinenz** = Blase ist chronisch voll, **Urin tropft** raus. Auch schlimm, aber nicht so akut. Unterschied: Notfall vs. chronisch."

- **Step-Typ:** comparison (zwei Zustände direkt nebeneinander)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Dieser Unterschied ist **prüfungsrelevant** und **klinisch entscheidend**:

**Überlaufblase (akuter Harnverhalt)**
- **Akutes** Ereignis: Blase prall gefüllt (>500 ml, oft >1 Liter).
- **Keine** Miktion möglich — nichts kommt.
- Symptome: **starke Schmerzen im Unterbauch**, Unruhe, Schwitzen, tastbare Blase bis Nabel.
- Ursachen: akute Prostatavergrößerung, Stein, Medikamente (Opioide, Anticholinergika), postoperativ.
- **Notfall — sofort Arzt informieren, Einmalkatheter**.

**Überlaufinkontinenz (paradoxe Inkontinenz)**
- **Chronisch** überfüllte Blase (Restharn dauerhaft hoch).
- **Tropfenweiser** Urinabgang — der Patient hat scheinbar 'normal' Urin.
- Oft **keine Schmerzen**, weil die Blase sich an die Dauerdehnung gewöhnt hat.
- Patient merkt das Problem **nicht** — aber Nieren werden langsam geschädigt.
- Diagnose via **Restharn-Sonographie** (>100 ml pathologisch).

**Merkhilfe:** Überlaufblase = akuter Notfall mit Schmerz. Überlaufinkontinenz = chronisches Dauertropfen ohne Schmerz. Beides katheterisieren. (AWMF 2023)"

**B1 (610 Zeichen):**
"Diesen Unterschied musst du in der Prüfung können:

**Überlaufblase**
- Die Blase ist **plötzlich** prall voll.
- **Kein** Urin kommt raus.
- **Starke Schmerzen** im Unterbauch.
- Du kannst die Blase fühlen.
- Das ist ein **Notfall** — sofort Arzt.

**Überlaufinkontinenz**
- Die Blase ist **seit Wochen/Monaten** zu voll.
- **Urin tropft** langsam raus.
- **Keine Schmerzen** — der Patient merkt lange nichts.
- Langsam geht die **Niere kaputt**.
- Diagnose: **Ultraschall** zeigt viel Restharn.

**Merke:** Überlaufblase = **Notfall mit Schmerz**. Überlaufinkontinenz = **Dauertropfen ohne Schmerz**. In beiden Fällen muss der Arzt einen Katheter legen."

- **Erklärungs-Step:** stepType `comparison` (Tabelle — akut vs. chronisch)
- **Glossar-Begriffe:** [Überlaufblase, Harnverhalt, Restharn-Sonographie, paradoxe Inkontinenz]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Überlaufblase und Überlaufinkontinenz sind genau dasselbe."**
- **Fachbegriff:** Begriffs-Gleichsetzung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — die Begriffe ähneln sich, meinen aber Verschiedenes: **Überlaufblase** = akut prall voll, kein Abgang, starker Schmerz = **Notfall Harnverhalt**. **Überlaufinkontinenz** = chronisch überfüllt, Urin tropft über, wenig Schmerz. Unterschied: akut vs. chronisch."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — **Überlaufblase** = akut voll, Schmerzen, kein Urin (Notfall). **Überlaufinkontinenz** = chronisch voll, Urin tropft langsam, keine Schmerzen. Unterschied: **akut vs. chronisch**, **Schmerz vs. kein Schmerz**."

**D2: "Bei einer Überlaufblase hat der Patient keinen Schmerz, weil er sich daran gewöhnt hat."**
- **Fachbegriff:** Akut-Chronisch-Vertauschung
- **Feedback (C1, 280 Zeichen):** "Verdreht — die **Überlaufblase** ist **akut** und **sehr schmerzhaft** (plötzliche Dehnung). Die **Überlaufinkontinenz** ist chronisch — hier gewöhnt sich die Blase über Monate an die Überfüllung und der Patient hat **wenig Schmerz**. Du hast die beiden verwechselt."
- **Feedback (B1, 240 Zeichen):** "Vertauscht — die **Überlaufblase** tut **sehr weh** (plötzlich voll). Die **Überlaufinkontinenz** tut **wenig weh** (langsam voll geworden, Körper hat sich gewöhnt). Merke: akut = Schmerz. Chronisch = wenig Schmerz."

**D3: "Bei Überlaufinkontinenz ist kein Katheter nötig, weil Urin ja abgeht."**
- **Fachbegriff:** Entleerungs-Fehlschluss (Wiederholung mit anderer Ausrichtung)
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — der Urin geht zwar **tropfenweise** ab, die Blase bleibt aber **prall voll** (>400 ml Restharn). Der Druck staut sich bis in die Nieren und zerstört sie langsam. Deshalb **immer katheterisieren** (Einmalkatheter akut, intermittierend chronisch), auch wenn Urin 'kommt'."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — zwar tropft Urin raus, aber die Blase bleibt **voll**. Der Druck schädigt die **Niere**. Deshalb **immer Katheter**: entweder einmal (akut) oder regelmäßig (chronisch). Nicht denken 'kommt ja Urin — dann ist okay'."

### Richtig-Feedback

**C1 (280 Zeichen):** "Genau. Überlaufblase = akut prall voll, Schmerz, keine Miktion = Notfall-Harnverhalt. Überlaufinkontinenz = chronisch überfüllt, tropft über, wenig Schmerz, schädigt langsam die Nieren. Beide brauchen Katheterisierung — akut Einmalkatheter, chronisch intermittierend. (AWMF 2023)"

**B1 (245 Zeichen):** "Sehr gut. Überlaufblase = akut voll, Schmerzen, Notfall. Überlaufinkontinenz = chronisch voll, Urin tropft, kein Schmerz — aber Niere geht kaputt. Beide brauchen Katheter. Der Unterschied: akut mit Schmerz vs. chronisch ohne Schmerz."

### Verknüpfte Karteikarte
- **Vorderseite:** "Überlaufblase vs. Überlaufinkontinenz: Wie unterscheidest du?"
- **Rückseite:** "Überlaufblase = akute Notfall-Harnretention, prall voll, starke Schmerzen, keine Miktion. Überlaufinkontinenz = chronisch überfüllt, tropfenweiser Abgang, wenig Schmerz, Nierenschaden droht. Beide: katheterisieren."
- **Kategorie:** assessment

---

## Baustein 13: kontinenzprofile

### Metadaten
- **bausteinId:** harnausscheidung-kontinenzprofile
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Frau S. verliert Urin, aber sie kann ihre Einlage allein wechseln. Frau T. verliert Urin und braucht dabei Pflegehilfe. Beides ist Inkontinenz — aber pflegerisch sehr unterschiedlich. Welche 5 Profile unterscheidet der DNQP?"
- **Step-Typ:** freetext (Bloom 3)

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Der DNQP unterscheidet **5 Kontinenzprofile**: 1. **Kontinent**, 2. **Unabhängig kontinent** (trocken mit eigenen Hilfsmitteln), 3. **Abhängig kontinent** (trocken mit Pflegehilfe), 4. **Unabhängig nicht-kontinent** (verliert Urin, selbstständig), 5. **Abhängig nicht-kontinent** (verliert trotz Pflege)."

**B1 (245 Zeichen):** "Der DNQP hat **5 Stufen** der Kontinenz: (1) **kontinent**, (2) **selbst trocken mit Hilfsmitteln**, (3) **trocken nur mit Pflege**, (4) **verliert Urin, macht selbst**, (5) **verliert Urin trotz Pflegehilfe**. Ziel: Den Menschen eine Stufe **nach oben** bringen."

- **Step-Typ:** reveal (5 Profile einzeln aufdecken)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Der DNQP-Expertenstandard 'Förderung der Harnkontinenz' (2014) definiert **5 Kontinenzprofile** — nicht 'kontinent oder nicht', sondern ein **Spektrum** zwischen völlig unabhängig und völlig pflegebedürftig:

**1. Kontinent** — kein unwillkürlicher Harnverlust, keine Hilfsmittel, keine Hilfe nötig.

**2. Unabhängig kontinent** — der Betroffene bleibt trocken mit **selbst organisierten Maßnahmen** (z.B. nutzt selbst Toilettenplan, wechselt selbstständig Einlage wegen Sicherheitsgefühl).

**3. Abhängig kontinent** — der Betroffene bleibt trocken, aber **nur durch personelle Hilfe** (Toilettengang mit Hilfe, Toilettenplan durch Pflege).

**4. Unabhängig nicht-kontinent** — unwillkürlicher Urinverlust, aber der Betroffene **kompensiert selbstständig** (wechselt Einlage selbst, organisiert Hilfsmittel selbst).

**5. Abhängig nicht-kontinent** — unwillkürlicher Urinverlust, und der Betroffene **braucht Pflege** (Einlagen wechseln, Intimpflege durch Pflegekraft).

**Pflegerisches Ziel:** Immer versuchen, den Menschen ein **Profil nach oben** zu bringen — z.B. von 5 nach 3 durch Toilettentraining. Das ist messbarer Erfolg. (DNQP 2014)"

**B1 (645 Zeichen):**
"Der DNQP sagt: Inkontinenz ist nicht **ja oder nein**. Es gibt **5 Stufen**:

**1. Kontinent** — keine Probleme, nichts nötig.

**2. Unabhängig kontinent** — bleibt trocken, macht alles selbst (eigener Toilettenplan, eigene Einlage zur Sicherheit).

**3. Abhängig kontinent** — bleibt trocken, **aber nur mit Pflegehilfe** (Pflege führt zur Toilette).

**4. Unabhängig nicht-kontinent** — verliert Urin, **macht alles selbst** (wechselt eigene Einlage, bestellt selbst Hilfsmittel).

**5. Abhängig nicht-kontinent** — verliert Urin, **braucht Pflegehilfe** für Einlagen und Intimpflege.

**Dein Ziel als Pflegende:** Den Menschen **eine Stufe nach oben** bringen — zum Beispiel von 5 nach 3 durch Training. Das ist ein **messbarer Erfolg**."

- **Erklärungs-Step:** stepType `reveal` (5 Profile mit Beispiel-Patient)
- **Glossar-Begriffe:** [Kontinenzprofil, unabhängig, abhängig]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Es gibt nur 'kontinent' oder 'inkontinent' — dazwischen ist nichts."**
- **Fachbegriff:** Binär-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — der DNQP zeigt: Kontinenz ist ein **Spektrum**. Die 5 Profile erfassen, wie **selbstständig** jemand mit seiner Situation umgeht. Das ist pflegerisch zentral: Ein Mensch kann inkontinent sein **und** selbstständig — das ist anders als inkontinent und pflegebedürftig."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — es gibt **5 Stufen**, nicht nur zwei. Entscheidend ist: Wie viel kann der Mensch **selbst** machen? Ein Mensch kann Inkontinenz haben und **trotzdem alles selbst** regeln. Das ist ein wichtiger Unterschied."

**D2: "Das Ziel ist immer: Profil 1 (kontinent) — alles andere ist Versagen."</D2>"**
- **Fachbegriff:** Alles-Oder-Nichts-Fehler
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **jedes** Hochstufen ist ein Erfolg. Bei einer dementen Bewohnerin von 5 auf 3 zu kommen (trocken mit Pflegehilfe) ist ein großer Fortschritt — auch wenn Profil 1 unrealistisch bleibt. Der DNQP definiert Erfolg als **Verbesserung**, nicht als Erreichen der Spitze."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **jede** Verbesserung ist ein Erfolg. Von 5 auf 3 ist sehr gut — auch wenn Stufe 1 nicht mehr klappt. Bei manchen Menschen ist das Ziel 'keine Verschlechterung'. Der DNQP sagt: **besser als vorher** ist Erfolg."

**D3: "Wer eine Pflegekraft zur Toilette braucht, ist automatisch inkontinent."**
- **Fachbegriff:** Unterstützungs-Gleichsetzung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — **Profil 3 = abhängig kontinent**: Der Mensch bleibt trocken, braucht aber Hilfe (z.B. zum WC gehen, weil nicht mehr selbst laufend). Er ist **kontinent**, nur nicht unabhängig. Kontinenz bezieht sich auf den Urin, nicht auf den Grad der Selbstständigkeit."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — wer Pflegehilfe braucht, aber **trocken** bleibt, ist **kontinent** — Stufe 3. Kontinenz heißt: der Urin geht nicht ungewollt ab. Auch mit Pflegehilfe kann man kontinent sein. Pflege ≠ Inkontinenz."

### Richtig-Feedback

**C1 (285 Zeichen):** "Genau. Die 5 Kontinenzprofile des DNQP: 1. Kontinent, 2. Unabhängig kontinent, 3. Abhängig kontinent, 4. Unabhängig nicht-kontinent, 5. Abhängig nicht-kontinent. Dein Ziel: immer ein Profil nach oben — das ist messbarer Pflegeerfolg, auch wenn Profil 1 unrealistisch bleibt. (DNQP 2014)"

**B1 (245 Zeichen):** "Sehr gut. 5 Profile: (1) kontinent, (2) selbst trocken mit Hilfsmitteln, (3) trocken mit Pflege, (4) nass, macht selbst, (5) nass, braucht Pflege. Ziel: **eine Stufe nach oben**. Auch von 5 zu 3 ist ein Erfolg."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 5 Kontinenzprofile nach DNQP (2014)."
- **Rückseite:** "1. Kontinent, 2. Unabhängig kontinent, 3. Abhängig kontinent, 4. Unabhängig nicht-kontinent, 5. Abhängig nicht-kontinent. Ziel: Profil-Wechsel nach oben."
- **Kategorie:** fachbegriff

---

## Baustein 14: miktionsprotokoll

### Metadaten
- **bausteinId:** harnausscheidung-miktionsprotokoll
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Du sollst für eine Bewohnerin das Kontinenztraining starten. Vor dem Training brauchst du eine **Grundlage**, um den Erfolg später messen zu können. Welches Werkzeug nutzt du, und welche 4 Informationen notierst du mindestens?"
- **Step-Typ:** freetext (Bloom 4)

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Das **Miktionsprotokoll** (auch Trink-/Ausscheidungsprotokoll) über **3 Tage** ist Basis jedes Kontinenztrainings. Pflicht: **Uhrzeit** der Miktion, **Menge** (in ml), **Trinkmenge**, **Drang-Gefühl** (ja/nein), **Urinverlust** (ja/nein) — und wobei? Das Protokoll zeigt das **Muster**."

**B1 (240 Zeichen):** "Das **Miktionsprotokoll** ist das wichtigste Werkzeug. **3 Tage** lang schreibst du auf: **Uhrzeit**, **wie viel Urin**, **wie viel getrunken**, **Drang ja/nein**, **Urinverlust ja/nein**. Daraus siehst du das **Muster** — und kannst das Training planen."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"Das **Miktionsprotokoll** (international: bladder diary) ist der **Goldstandard** der Kontinenz-Diagnostik — einfach, kostenlos, aussagekräftig.

**Mindest-Dauer:** **3 zusammenhängende Tage** (weniger liefert kein belastbares Muster, mehr belastet den Patienten).

**Was wird dokumentiert?**
1. **Uhrzeit** jeder Miktion
2. **Miktionsvolumen** (Messbecher!)
3. **Trinkmenge** mit Uhrzeit
4. **Drangintensität** (0-10 oder ja/nein)
5. **Urinverlust** (ja/nein), Menge geschätzt (klein/mittel/groß)
6. **Auslöser** (Husten? Spontan? Unterwegs?)
7. **Nykturie-Episoden**

**Was zeigt das Protokoll?**
- **Miktionsfrequenz** pro Tag (normal: 4-8x)
- **Funktionelle Blasenkapazität** (größte Einzelportion tagsüber)
- **Nykturie** (wie oft nachts?)
- **Inkontinenzform** (Drang vs. Belastung vs. funktionell)
- **Trinkmenge-Verteilung** über den Tag

**Daraus ergibt sich der Therapieplan:** Intervall-Ziele (Blasentraining) oder Fixe-Zeit-Intervalle (Toilettentraining bei Demenz). Nach 4-6 Wochen erneutes Protokoll zur Erfolgskontrolle. (DNQP 2014)"

**B1 (620 Zeichen):**
"Das **Miktionsprotokoll** ist dein wichtigstes Werkzeug. Einfach, kostenlos, sehr aussagekräftig.

**Dauer:** **3 Tage** am Stück.

**Du schreibst für jeden Gang auf:**
1. **Uhrzeit**
2. **Wie viel Urin?** (Messbecher!)
3. **Wie viel getrunken?** (mit Uhrzeit)
4. **Starker Drang?** (ja/nein)
5. **Urin-Verlust?** (ja/nein, wie viel)
6. **Wobei?** (Husten? Plötzlich? Unterwegs?)

**Was du dann siehst:**
- **Wie oft** pro Tag aufs Klo? (normal 4-8 mal)
- **Wie viel** passt in die Blase? (größte Menge am Tag)
- **Wie oft nachts?**
- **Welche Form** der Inkontinenz?
- **Trinkt genug?** Oder zu wenig abends?

Daraus macht ihr den **Trainingsplan**. Nach 4-6 Wochen: neues Protokoll — hat es geholfen?"

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Miktionsprotokoll, Miktionsfrequenz, funktionelle Blasenkapazität, Nykturie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Tag Miktionsprotokoll reicht aus."**
- **Fachbegriff:** Zu-kurze-Erfassung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **ein Tag ist nicht repräsentativ**. Trinkmenge, Aktivität, Stressniveau schwanken. Der DNQP empfiehlt **3 zusammenhängende Tage** — ideal unter Alltagsbedingungen, nicht im Krankenhaus. Kürzer = kein Muster erkennbar. Länger = Belastung für den Patienten ohne Mehrwert."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **ein Tag reicht nicht**. Ein Tag kann ganz anders sein als normal. Der DNQP sagt: **3 Tage** am Stück. Das zeigt das **Muster**. Weniger = zu wenig Info. Mehr = Patient gibt auf."

**D2: "Im Miktionsprotokoll reicht die Uhrzeit — Menge ist zu kompliziert zu messen."**
- **Fachbegriff:** Bequemlichkeits-Verkürzung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — die **Menge in ml** ist **essentiell**. Nur so erkennst du die **funktionelle Blasenkapazität** (wie viel passt rein?) und kannst die Trainings-Intervalle festlegen. Messbecher im WC oder Uringlas — eine Minute Arbeit, aber diagnostisch entscheidend."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die **Menge** ist wichtig. Nur so weißt du, **wie viel** in die Blase passt. Ein Messbecher im WC reicht. Das ist kurz Arbeit, aber ohne die Menge kannst du das Training nicht planen. Uhrzeit allein reicht nicht."

**D3: "Das Miktionsprotokoll führt die Pflegekraft — der Patient kann das nicht."**
- **Fachbegriff:** Autonomie-Verkennung
- **Feedback (C1, 285 Zeichen):** "Oft umgekehrt — **wenn möglich, führt der Patient selbst** (oder Angehörige). Das schult die **Selbstwahrnehmung** (Teil der Therapie!) und ist realistischer als Pflege-Notizen. Bei kognitiv eingeschränkten Patienten macht es die Pflege. Autonomie geht vor Bequemlichkeit für die Pflege."
- **Feedback (B1, 245 Zeichen):** "Meistens umgekehrt — der **Patient** schreibt selbst. Das ist Teil der Therapie: Er merkt besser, wann er wann zur Toilette geht. Nur bei Demenz macht es die Pflege. Sonst: Patient schreibt, Pflege unterstützt."

### Richtig-Feedback

**C1 (290 Zeichen):** "Genau. Das 3-Tage-Miktionsprotokoll ist Goldstandard: Uhrzeit, Menge, Trinkmenge, Drang, Urinverlust, Auslöser. Es zeigt Miktionsfrequenz, funktionelle Blasenkapazität, Inkontinenzform und wird Grundlage des Trainingsplans. Nach 4-6 Wochen erneut zur Erfolgskontrolle. (DNQP 2014)"

**B1 (245 Zeichen):** "Sehr gut. 3 Tage. Für jeden Klogang aufschreiben: Uhrzeit, Menge, Trinkmenge, Drang, Urinverlust, Auslöser. Das zeigt: Wie oft? Wie viel? Welche Form? Daraus macht ihr den Plan. Nach 4-6 Wochen neues Protokoll als Kontrolle."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie lange und was dokumentiert man im Miktionsprotokoll?"
- **Rückseite:** "3 Tage: Uhrzeit, Miktionsvolumen (ml), Trinkmenge, Drang, Urinverlust mit Auslöser, Nykturie-Episoden. Basis für Trainingsplan und Erfolgskontrolle."
- **Kategorie:** assessment

---

## Baustein 15: kontinenztraining-massnahmen

### Metadaten
- **bausteinId:** harnausscheidung-kontinenztraining
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-15]

### Stufe 1 — Denkfrage
- **Frage:** "Frau B. hat Dranginkontinenz, Herr K. hat Belastungsinkontinenz, Frau M. hat Demenz und findet die Toilette nicht. Drei Patienten, drei verschiedene Trainings. Welches Training passt zu wem — und warum?"
- **Step-Typ:** matching (Training ↔ Patient)

### Stufe 2 — Hinweis

**C1 (285 Zeichen):** "4 Trainings-Formen nach DNQP: **Blasentraining** (Intervalle verlängern, bei Drang), **Beckenbodentraining** (Kegel, bei Belastung), **Toilettentraining** (feste Zeiten, bei Demenz/Immobilität), **Gewohnheitstraining** (individuelles Muster aus Protokoll). Jedes Training braucht **Miktionsprotokoll als Grundlage**."

**B1 (250 Zeichen):** "**4 Trainings** nach DNQP: **Blasentraining** (länger aushalten) bei Drang. **Beckenboden-Training** (Kegel-Übungen) bei Belastung. **Toilettentraining** (feste Uhrzeiten) bei Demenz. **Gewohnheitstraining** (Muster aus Protokoll) wenn feste Zeiten nicht passen."

- **Step-Typ:** matching (Inkontinenzform ↔ Training)

### Stufe 3 — Erklärung

**C1 (840 Zeichen):**
"Der DNQP-Expertenstandard (2014) nennt vier evidenzbasierte Trainings — jedes passt zu einer anderen Inkontinenzform:

**1. Blasentraining** (bei Drang- und Mischinkontinenz)
- Ziel: **Miktionsintervalle verlängern**, Detrusor 'beruhigen'.
- Vorgehen: Ausgangs-Intervall aus Protokoll (z.B. 60 min) → **jede Woche um 15 min verlängern** → Ziel 3-4 Std.
- **Strategien beim Drang**: ruhig sitzen, durch den Mund atmen, Beckenboden kurz anspannen, geistige Ablenkung.

**2. Beckenbodentraining (Kegel-Übungen)** (bei Belastungsinkontinenz)
- Ziel: **Schließmuskel stärken**.
- Übung: 3×10 Wiederholungen pro Tag, **Anspannen 5 Sek + Entspannen 10 Sek**. Physiotherapie zur Kontrolle.
- Dauer: mindestens **3 Monate** bis spürbarer Erfolg.

**3. Toilettentraining** (bei Demenz, kognitiver Einschränkung, Immobilität)
- **Feste Zeiten** (meist alle 2-3 Std), Pflege führt zur Toilette — unabhängig vom Drang.
- Tagsüber konsequent, nachts nach Protokoll.

**4. Gewohnheitstraining** (bei unregelmäßigem Muster)
- **Individuelle Zeitpunkte** basierend auf dem 3-Tages-Protokoll.
- Toilette genau **15 Min vor** der typischen Inkontinenz-Episode.

**Pflichtschritt vor jedem Training:** Miktionsprotokoll 3 Tage. Ohne Protokoll kein Training. (DNQP 2014)"

**B1 (695 Zeichen):**
"Der DNQP beschreibt **4 Trainings**. Zu jeder Inkontinenzform passt eins:

**1. Blasentraining** (bei **Drang**inkontinenz)
- Der Patient **hält den Drang aus** — erst kurz, dann länger.
- Aus dem Protokoll siehst du den Start (z.B. alle 60 Min). Jede Woche **15 Min länger** aushalten. Ziel: alle 3-4 Stunden.
- **Tricks beim Drang:** Ruhig sitzen, langsam atmen, Beckenboden kurz anspannen, an etwas anderes denken.

**2. Beckenboden-Training / Kegel-Übungen** (bei **Belastungs**inkontinenz)
- **3x täglich 10 Übungen**: 5 Sekunden anspannen, 10 Sekunden locker.
- Dauert **3 Monate**, dann merkst du den Erfolg.
- Oft mit Physiotherapie.

**3. Toilettentraining** (bei **Demenz**, wenig Beweglichkeit)
- **Feste Zeiten** — z.B. alle 2-3 Stunden zur Toilette gehen.
- Du führst — der Patient muss nicht fragen.

**4. Gewohnheitstraining** (wenn Zeiten nicht regelmäßig sind)
- Aus dem Protokoll: **15 Min vor** dem typischen Urin-Verlust zur Toilette gehen.

**Immer zuerst: 3-Tage-Miktionsprotokoll.** Ohne Protokoll kein Training."

- **Erklärungs-Step:** stepType `stepbystep` (4 Trainings mit je 3 Schritten)
- **Glossar-Begriffe:** [Blasentraining, Beckenbodentraining, Kegel-Übungen, Toilettentraining, Gewohnheitstraining]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Beckenbodentraining hilft auch bei Dranginkontinenz am besten."**
- **Fachbegriff:** Falsche-Zuordnung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — bei **Dranginkontinenz** ist erste Wahl das **Blasentraining** (Intervalle verlängern). Beckenboden hilft als **ergänzende Maßnahme** (kurz anspannen beim Drang), aber die Hauptmaßnahme ist das Intervall-Training. Beckenboden = Belastung. Blasentraining = Drang."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — bei **Drang**inkontinenz ist **Blasentraining** die beste Hilfe (länger aushalten). **Beckenboden** hilft bei **Belastungs**inkontinenz (Husten, Niesen). Merke: Beckenboden = Belastung. Blasen-Training = Drang."

**D2: "Toilettentraining heißt: Der Patient muss selbst sagen, wann er zur Toilette will."**
- **Fachbegriff:** Aktiv-Passiv-Verwechslung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **Toilettentraining** ist das **Gegenteil**: Pflege führt zu **festen Zeiten** (z.B. alle 2-3 Std), **unabhängig vom Drang-Gefühl**. Besonders für Patienten mit Demenz, die den Drang nicht mehr richtig wahrnehmen oder nicht fragen. 'Selbst sagen' wäre das Gewohnheitstraining — nein, das auch nicht."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Toilettentraining** = Pflege führt zu **festen Zeiten**, nicht wenn der Patient fragt. Besonders bei **Demenz**. Der Patient muss nichts sagen. Die Uhr entscheidet — z.B. alle 2 Stunden."

**D3: "Beckenbodentraining wirkt nach 2 Wochen."**
- **Fachbegriff:** Zeit-Unterschätzung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Beckenbodentraining braucht **mindestens 3 Monate** für spürbaren Erfolg. Muskelaufbau ist langsam. In Wochen 1-6 gibt es oft wenig Veränderung — dann fangen Patienten häufig an aufzuhören. Deshalb ist **Motivation & Geduld** Kernaufgabe der Pflege. Kein Schnellerfolg."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Beckenboden-Training braucht **mindestens 3 Monate**. In den ersten Wochen merkst du wenig. Viele hören dann auf. Deshalb: **Geduld** und immer wieder motivieren. Es wird besser — aber langsam."

### Richtig-Feedback

**C1 (300 Zeichen):** "Genau. DNQP-Trainings passen zur Form: Blasentraining (Drang), Beckenbodentraining (Belastung, 3 Monate!), Toilettentraining (Demenz/Immobilität, feste Zeiten), Gewohnheitstraining (individuell aus Protokoll). Ohne 3-Tage-Miktionsprotokoll kein Training — das ist die Basis. (DNQP 2014)"

**B1 (255 Zeichen):** "Sehr gut. Blasentraining = Drang. Beckenboden = Belastung (3 Monate!). Toilettentraining = Demenz/Immobilität, feste Zeiten. Gewohnheitstraining = individuelles Muster. Vorher immer: **3-Tage-Miktionsprotokoll** als Basis."

### Verknüpfte Karteikarte
- **Vorderseite:** "Ordne die 4 Kontinenz-Trainings ihrer Inkontinenzform zu (DNQP 2014)."
- **Rückseite:** "Blasentraining → Drang. Beckenbodentraining → Belastung. Toilettentraining → Demenz/Immobilität. Gewohnheitstraining → unregelmäßiges Muster. Basis immer: 3-Tage-Miktionsprotokoll."
- **Kategorie:** handlung

---

## Baustein 16: hwi-prophylaxe

### Metadaten
- **bausteinId:** harnausscheidung-hwi-prophylaxe
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-16]

### Stufe 1 — Denkfrage
- **Frage:** "Frau K., 72, liegt im Krankenhaus. Was kannst du als Pflegende tun, damit sie **keinen** Harnwegsinfekt bekommt? Nenne 4 konkrete Maßnahmen."
- **Step-Typ:** freetext (Bloom 3)

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "**HWI-Prophylaxe**: 1. **Trinken** — 1,5-2 L/Tag (außer bei Herz-/Nierenproblemen). 2. **Wischrichtung vorne nach hinten** (Frauen). 3. **Blase vollständig entleeren**, nicht aufschieben. 4. Nach Geschlechtsverkehr **urinieren**. 5. **Intimhygiene** täglich, aber nicht übertrieben (pH-sauer)."

**B1 (250 Zeichen):** "5 einfache Regeln gegen Harnwegsinfekt: 1. **Viel trinken** (1,5-2 Liter). 2. Nach Toilette **vorne nach hinten wischen** (bei Frauen). 3. **Blase leer** machen, nicht lange aushalten. 4. Nach Sex **Urin lassen**. 5. **Intimhygiene** täglich, aber nicht mit Seife."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"Harnwegsinfekte (HWI) gehören zu den **häufigsten Infektionen** überhaupt — Frauen deutlich öfter als Männer (kürzere Harnröhre). Im Krankenhaus sind sie die **häufigste nosokomiale Infektion**, meist katheterassoziiert (RKI 2022).

**Prophylaxe-Maßnahmen (DNQP 2014):**

**1. Ausreichende Trinkmenge** — 1,5-2 L/Tag (Kontraindikationen beachten: Herzinsuffizienz, Nierenversagen). Viel Urinproduktion spült Keime aus.

**2. Vollständige Blasenentleerung** — nicht aufschieben, bei Drang zur Toilette. Restharn = Bakteriennährboden.

**3. Korrekte Wischrichtung (Frauen!)** — **von vorne nach hinten**, um Darmkeime nicht in die Harnröhre zu verschleppen.

**4. Miktion nach Geschlechtsverkehr** — spült die Harnröhre, reduziert Infektionsrisiko deutlich.

**5. Intimhygiene** — **täglich mit klarem Wasser oder milder pH-5-Waschlotion**. Keine Intimsprays, keine Seifen, keine Slipeinlagen mit Plastikfolie dauerhaft.

**6. Katheter nur bei zwingender Indikation** — jeder Katheter = Infektionsrisiko pro Tag.

**7. Warmhalten** — kalte Füße, nasse Badekleidung begünstigen Infekte.

**Symptome** (erkennen und melden): Dysurie, Pollakisurie, trüber Urin, Unterbauchschmerz, Fieber. (DNQP 2014; RKI 2022)"

**B1 (650 Zeichen):**
"Harnwegsinfekte sind die **häufigste Infektion im Krankenhaus**. Du kannst sie verhindern:

**7 einfache Regeln:**

1. **Viel trinken** — 1,5 bis 2 Liter am Tag. (Außer bei Herz- oder Nierenproblem — dann fragst du den Arzt.)

2. **Blase ganz leer machen** — nicht lange aushalten. Wenn was übrig bleibt, wachsen Bakterien.

3. **Vorne nach hinten wischen** (bei Frauen). Nicht umgekehrt — sonst kommen Darmkeime in die Harnröhre.

4. Nach **Sex** auf die Toilette gehen und Urin lassen.

5. **Intimhygiene** täglich — **nur mit Wasser oder milder Waschlotion**. Keine scharfen Seifen.

6. **Katheter nur, wenn es sein muss** — jeder Tag mit Katheter = mehr Risiko.

7. **Warm halten** — keine kalten Füße, nicht in nasser Badehose sitzen.

**Zeichen von HWI:** Brennen, oft Pipi, trüber Urin, Bauchschmerzen, Fieber → **sofort melden**."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [HWI, nosokomiale Infektion, Restharn]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Weniger trinken hilft, damit die Blase weniger belastet wird."**
- **Fachbegriff:** Trink-Mangel-Fehler
- **Feedback (C1, 275 Zeichen):** "Gefährliches Missverständnis — **weniger Trinken = konzentrierter Urin = reizt die Blase MEHR und begünstigt Infekte**. Der Urin sollte klar und hell sein, das spült Keime aus. Richtig: **1,5-2 L pro Tag**. Nur bei Herzinsuffizienz oder Niereninsuffizienz fragst du den Arzt."
- **Feedback (B1, 240 Zeichen):** "Genau falsch — **weniger trinken macht es schlimmer**. Konzentrierter Urin reizt die Blase und Bakterien wachsen besser. **Viel trinken** (1,5 bis 2 Liter) ist das Wichtigste. Nur bei Herz oder Niere fragst du den Arzt."

**D2: "Die Wischrichtung ist egal — Hauptsache sauber."**
- **Fachbegriff:** Hygiene-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — die **Wischrichtung** ist entscheidend: **von vorne nach hinten**. Damit verschleppst du keine **E.-coli-Darmkeime** in die Harnröhre. Das ist die **häufigste Infektionsquelle bei Frauen**. Diese kleine Gewohnheit verhindert einen großen Teil der Infekte."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Richtung ist wichtig**: **vorne nach hinten** wischen. Sonst bringst du Bakterien vom After in die Harnröhre. Das ist der **häufigste Grund** für Harnwegsinfekt bei Frauen. Also: immer vorne nach hinten."

**D3: "Ein Dauerkatheter ist eine gute HWI-Prophylaxe bei Inkontinenz."**
- **Fachbegriff:** Katheter-Fehlschluss
- **Feedback (C1, 295 Zeichen):** "**Genau umgekehrt** — ein Dauerkatheter ist das **größte Risiko**: Jeder Katheter-Tag erhöht das Infektionsrisiko (ca. 3-10% pro Tag). Der DNQP-Expertenstandard sagt klar: **Katheter niemals als Inkontinenzlösung** — nur bei medizinischer Indikation (Harnverhalt, Bilanzierung auf Intensiv)."
- **Feedback (B1, 255 Zeichen):** "Genau falsch — ein **Dauerkatheter macht mehr Infekte**, nicht weniger. Jeder Tag mit Katheter = mehr Bakterien. Der DNQP sagt: **Nie Katheter wegen Inkontinenz**. Nur wenn es **medizinisch** sein muss (Harnverhalt, Intensivstation)."

### Richtig-Feedback

**C1 (290 Zeichen):** "Genau. HWI-Prophylaxe: 1,5-2 L trinken, Blase komplett entleeren, vorne-nach-hinten wischen, nach Sex Miktion, pH-neutrale Intimhygiene, Katheter nur bei zwingender Indikation, warmhalten. HWI ist die häufigste nosokomiale Infektion — du kannst viel verhindern. (DNQP 2014; RKI 2022)"

**B1 (250 Zeichen):** "Sehr gut. 7 Regeln: viel trinken, Blase leer, vorne nach hinten wischen, nach Sex pinkeln, Intimhygiene mit Wasser, wenig Katheter, warm halten. HWI ist die **häufigste Infektion im Krankenhaus**. Du kannst viel verhindern."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 5 Maßnahmen zur HWI-Prophylaxe."
- **Rückseite:** "1,5-2 L trinken / vollständige Blasenentleerung / Wischrichtung vorne nach hinten (Frauen) / Miktion nach Geschlechtsverkehr / pH-neutrale Intimhygiene / Dauerkatheter vermeiden / warmhalten."
- **Kategorie:** handlung

---
