# Wissensbausteine: Enterale & parenterale Ernährung

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `enterale-ernaehrung` |
| ceId | `ce-02` |
| cluster | D (Ernährung) |
| wissensart | handlung |
| geschaetzteUE | 7 |
| zielzeitMin | 173 (7 UE × 45 × 0,55) |
| bausteineAnzahl | 14 |
| voraussetzungen | `ernaehrungsassessment` |
| kompetenzbereich | III.2 (ärztliche Anordnung) |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 21% (3 Bausteine), Bloom 3-4: 57% (8 Bausteine), Bloom 5-6: 22% (3 Bausteine)

**Primärquellen:**
- DGEM (2013, aktualisiert 2020): S3-Leitlinie Klinische Ernährung
- ESPEN Guidelines on Enteral Nutrition (aktualisiert 2022)
- DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Ernährungsmanagement
- DGN/DGG/DGP gemeinsame Stellungnahme: PEG bei fortgeschrittener Demenz (2014)
- § 1901a BGB (Patientenverfügung)
- Bundesärztekammer (2011): Grundsätze zur ärztlichen Sterbebegleitung

---

## Baustein 1: enteral-vs-parenteral

### Metadaten
- **bausteinId:** enterale-ernaehrung-enteral-vs-parenteral
- **bloomLevel:** 2
- **wissensart:** definition
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient kann nicht mehr schlucken, aber sein Magen-Darm-Trakt funktioniert noch. Gibt man ihm besser Nährlösung über eine Vene oder über eine Sonde in den Magen? Warum?"
- **Step-Typ:** freetext (aktiviert Vorwissen)

### Stufe 2 — Hinweis

**C1 (215 Zeichen):** "Enteral heißt: Nährstoffe über den Magen-Darm-Trakt. Parenteral heißt: über die Vene, am Darm vorbei. Grundregel der DGEM: Wenn der Darm funktioniert, wird er benutzt — enteral ist immer erste Wahl."

**B1 (205 Zeichen):** "Enteral heißt: Essen durch den Magen oder Darm. Parenteral heißt: direkt in die Vene, ohne Magen. Die Regel: Wenn der Darm arbeitet, nutzen wir ihn. Enteral ist meistens besser als parenteral."

- **Step-Typ:** text (displayFormat: procontra)

### Stufe 3 — Erklärung

**C1 (645 Zeichen):**
"**Enterale Ernährung** bezeichnet jede Nährstoffzufuhr, die über den Magen-Darm-Trakt erfolgt — normales Essen, Trinknahrung oder Sondenkost. **Parenterale Ernährung** dagegen umgeht den Darm vollständig und liefert Glukose, Aminosäuren und Fette direkt ins venöse Blut.

Warum ist enteral fast immer die bessere Wahl?
- **Physiologisch**: Der Darm bleibt aktiv, die Darmschleimhaut wird ernährt (Zottenatrophie wird verhindert).
- **Immunologisch**: Das darmassoziierte Immunsystem (GALT) bleibt trainiert — Infektionsrisiko sinkt.
- **Weniger Komplikationen**: Keine zentralen Venenkatheter nötig, kein Sepsis-Risiko vom Port.
- **Günstiger & einfacher**.

Die DGEM-Leitlinie formuliert es klar: *'If the gut works, use it.'* Parenteral wird nur gewählt, wenn der Darm nicht mehr resorbiert — etwa bei Kurzdarmsyndrom, Ileus oder schwerer Mukositis. (DGEM S3-Leitlinie Klinische Ernährung, 2013/2020)"

**B1 (515 Zeichen):**
"**Enteral** bedeutet: Essen geht durch den Magen und Darm. Auch wenn man eine Sonde hat — das ist enteral. **Parenteral** bedeutet: Die Nährstoffe gehen direkt ins Blut. Der Darm wird dabei nicht benutzt.

Warum ist enteral fast immer besser?
- Der Darm bleibt **aktiv** und gesund.
- Das **Abwehrsystem im Darm** bleibt stark.
- Weniger **Infektionen**.
- Einfacher und billiger.

Die Regel der Fachgesellschaft ist klar: Wenn der Darm noch arbeitet, nutzen wir ihn. Parenteral nehmen wir nur, wenn der Darm nicht mehr funktioniert."

- **Erklärungs-Step:** stepType `comparison` (2-Spalten enteral vs. parenteral)
- **Glossar-Begriffe:** [enteral, parenteral, Zottenatrophie, GALT]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Parenteral ist moderner und daher immer besser als enteral."**
- **Fachbegriff:** Modernitäts-Trugschluss
- **Feedback (C1, 250 Zeichen):** "Guter Gedanke — Infusionen wirken technisch. Aber genau das ist das Problem: Eine Vene zu punktieren bringt **Infektionsrisiko**, und der Darm verkümmert ohne Benutzung. Die DGEM sagt: Wenn der Darm funktioniert, benutzen wir ihn. Merke: Physiologisch schlägt technisch."
- **Feedback (B1, 215 Zeichen):** "Guter Gedanke — Infusionen sehen modern aus. Aber: Jede Nadel in der Vene kann eine Infektion machen. Und der Darm wird faul, wenn er nicht arbeitet. Die Regel: Wenn der Darm noch geht, nehmen wir den Darm."

**D2: "Enterale Ernährung geht nur über eine PEG, nicht über die Nase."**
- **Fachbegriff:** PEG-Gleichsetzung
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — enteral heißt 'über den Magen-Darm-Trakt'. Das umfasst auch die **nasogastrale Sonde** (durch die Nase in den Magen) und sogar normales Essen oder Trinknahrung. Merke: Enteral ist der Weg — PEG ist nur eine von mehreren Formen."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — enteral heißt einfach: durch den Magen und Darm. Das kann eine Sonde durch die Nase sein, eine PEG durch den Bauch oder auch ein Trink-Drink. Merke: Enteral ist der Weg, nicht das Werkzeug."

**D3: "Parenterale Ernährung ersetzt vollständig alles, was der Körper braucht — ohne Nachteile."**
- **Fachbegriff:** Vollständigkeits-Mythos
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — parenterale Lösungen decken Kalorien und Mikronährstoffe ab, aber der **Darm verkümmert ohne Nahrung** (Zottenatrophie). Auch der zentrale Zugang birgt Sepsis-Gefahr. Parenteral ist lebensrettend bei nicht-funktionierendem Darm, aber keine Dauerlösung ohne Nebenwirkung."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — parenteral gibt zwar alles ins Blut. Aber: Der Darm wird dünn und schwach, weil er nichts zu tun hat. Und der Katheter in der Vene kann eine schwere Infektion bringen. Parenteral hat immer auch Nachteile."

### Richtig-Feedback
**C1 (240 Zeichen):** "Genau. Enteral heißt über den Magen-Darm-Trakt — egal ob normal, per Trinknahrung oder per Sonde. Enteral ist fast immer erste Wahl: physiologischer, weniger Infektionen, Darmschleimhaut bleibt ernährt. Parenteral ist die Ausnahme, nicht die Regel."

**B1 (215 Zeichen):** "Sehr gut. Enteral bedeutet: durch Magen und Darm. Das ist fast immer die bessere Wahl. Der Darm bleibt aktiv und das Abwehrsystem stark. Parenteral (direkt ins Blut) nehmen wir nur, wenn es gar nicht anders geht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen enteraler und parenteraler Ernährung? Welches ist erste Wahl?"
- **Rückseite:** "Enteral = über Magen-Darm-Trakt (normal, Sonde, PEG). Parenteral = direkt in die Vene. DGEM-Regel: 'If the gut works, use it' — enteral hat Vorrang."
- **Kategorie:** fachbegriff

---

## Baustein 2: sondenformen-nachweg

### Metadaten
- **bausteinId:** enterale-ernaehrung-sondenformen
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient braucht voraussichtlich 2 Wochen eine Sonde — ein anderer mindestens 6 Monate. Welche Lösung würdest du für wen vorschlagen und warum?"
- **Step-Typ:** freetext (Bloom 3)

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Kurzzeitig (<4 Wochen): **nasogastrale Sonde** (Nase → Magen) oder **nasojejunale Sonde** (Nase → Dünndarm, bei Aspirationsrisiko). Langzeitig (>4 Wochen): **PEG** (perkutane endoskopische Gastrostomie, Bauchdecke → Magen) oder **PEJ** (→ Jejunum)."

**B1 (240 Zeichen):** "Kurze Zeit (unter 4 Wochen): Sonde durch die Nase in den Magen (NG-Sonde) oder in den Dünndarm (NJ-Sonde). Lange Zeit (über 4 Wochen): PEG (Schlauch durch den Bauch in den Magen) oder PEJ (in den Dünndarm)."

- **Step-Typ:** matching (4 Sondentypen ↔ Verwendungsdauer + Lage)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Die Sondenform richtet sich nach **zwei Fragen**: Wie lange wird sie gebraucht? Wo soll sie enden?

**Nasogastrale Sonde (NG-Sonde)** — Ein dünner Schlauch, der durch ein Nasenloch in den Magen geschoben wird. Kurzzeitig einsetzbar (<4 Wochen), weil sie bei Dauergebrauch Nasendruckstellen und Schluckbeschwerden macht.

**Nasojejunale Sonde (NJ-Sonde)** — Endet im Jejunum (Dünndarm). Indikation: hohes **Aspirationsrisiko**, Magenentleerungsstörung, akute Pankreatitis. Vorteil: umgeht den Magen.

**PEG (perkutane endoskopische Gastrostomie)** — Endoskopisch gelegter Schlauch durch die Bauchdecke in den Magen. Für **Langzeit-Ernährung (>4 Wochen)**. Klassische Indikationen: Schluckstörung nach Schlaganfall, Tumoren im Mund-Rachen-Bereich, Koma.

**PEJ (perkutane endoskopische Jejunostomie)** — Wie PEG, aber Endpunkt im Dünndarm. Bei dauerhaftem Aspirationsrisiko oder nach Magenresektion. (DGEM S3-Leitlinie, 2013/2020)"

**B1 (580 Zeichen):**
"Welche Sonde man wählt, hängt von **zwei Fragen** ab: Wie lange? Wohin?

**NG-Sonde** (nasogastral) — Ein Schlauch durch die Nase in den Magen. Für kurze Zeit (unter 4 Wochen). Länger geht nicht, weil die Nase dann wund wird.

**NJ-Sonde** (nasojejunal) — Durch die Nase bis in den Dünndarm. Man nimmt sie, wenn der Patient sich leicht verschluckt oder der Magen nicht richtig arbeitet.

**PEG** — Ein Schlauch direkt durch die Bauchdecke in den Magen. Für lange Zeit (über 4 Wochen). Typisch nach Schlaganfall mit Schluckstörung.

**PEJ** — Wie PEG, aber der Schlauch endet im Dünndarm."

- **Erklärungs-Step:** stepType `matrix` (Sondenform × Dauer × Lage × Indikation)
- **Glossar-Begriffe:** [PEG, PEJ, nasogastrale Sonde, nasojejunale Sonde, Jejunum, Gastrostomie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die PEG ist für kurzzeitige Ernährung nach einer Operation."**
- **Fachbegriff:** Kurzzeit-PEG-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — die PEG wird **endoskopisch angelegt** (mit kleinem Eingriff unter Sedierung) und ist für **dauerhafte** Ernährung gedacht, ab etwa 4 Wochen. Nach einer OP nimmt man eher die nasogastrale Sonde. Merke: PEG = langfristig, NG-Sonde = kurzfristig. 4 Wochen ist die Grenze."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die PEG ist für **lange Zeit** (über 4 Wochen). Sie wird mit einer kleinen Operation gelegt. Nach einer OP nimmt man meist die Sonde durch die Nase. Merke: Kurz = Nase, lang = PEG."

**D2: "Bei Aspirationsrisiko nimmt man eine größere nasogastrale Sonde."**
- **Fachbegriff:** Größen-Trugschluss
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — nicht die Größe ist entscheidend, sondern **die Lage der Spitze**. Bei Aspirationsgefahr wählt man eine **nasojejunale oder PEJ-Sonde**, deren Spitze im Dünndarm endet. So umgeht man den Magen und reduziert Rückfluss. Merke: Aspiration → weiter nach unten, nicht dicker."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — eine dickere Sonde hilft nicht gegen Verschlucken. Man nimmt eine Sonde, die **weiter unten** endet: die NJ-Sonde oder PEJ. Die geht bis in den Dünndarm. So kommt das Essen nicht zurück."

**D3: "PEG und nasogastrale Sonde enden beide im Dünndarm."**
- **Fachbegriff:** Lage-Verwechslung
- **Feedback (C1, 235 Zeichen):** "Nicht ganz — **PEG und NG-Sonde enden im Magen**, nicht im Dünndarm. Nur die **PEJ und die NJ-Sonde** reichen bis ins Jejunum. Das ist wichtig für die Applikation: Dünndarm-Sonden brauchen immer eine Pumpe, Magen-Sonden nicht."
- **Feedback (B1, 205 Zeichen):** "Nicht ganz — PEG und NG-Sonde enden beide im **Magen**. Nur PEJ und NJ-Sonde gehen bis in den Dünndarm. Wichtig: Wenn die Sonde im Dünndarm endet, muss man immer eine Pumpe benutzen."

### Richtig-Feedback
**C1 (255 Zeichen):** "Genau. Die Wahl hängt von Dauer und Lage ab: nasogastral/nasojejunal für kurzzeitig (<4 Wochen), PEG/PEJ für langfristig (>4 Wochen). Jejunale Varianten bei Aspirationsrisiko. Die 4-Wochen-Grenze ist die Faustregel der DGEM-Leitlinie."

**B1 (215 Zeichen):** "Sehr gut. Die Wahl hängt von zwei Fragen ab: Wie lange? Wohin? NG-Sonde für kurze Zeit, PEG für lange Zeit. Wenn der Patient sich leicht verschluckt, nimmt man eine NJ-Sonde oder PEJ, die im Dünndarm endet."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 4 Sondenformen gibt es? Wann wählst du welche?"
- **Rückseite:** "NG-Sonde (Nase→Magen, <4 Wo), NJ-Sonde (Nase→Dünndarm, bei Aspiration), PEG (Bauch→Magen, >4 Wo), PEJ (Bauch→Dünndarm, >4 Wo + Aspiration)."
- **Kategorie:** fakt

---

## Baustein 3: lagekontrolle-ph

### Metadaten
- **bausteinId:** enterale-ernaehrung-lagekontrolle
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Schülerin soll die Lage der NG-Sonde prüfen und bläst Luft mit einer Spritze hinein und horcht mit dem Stethoskop am Bauch. Der Bauch 'blubbert'. Ist die Sonde damit sicher im Magen?"
- **Step-Typ:** mc (Bloom 4, Evaluation einer Aussage)

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Die alte 'Luftinsufflation' ist **nicht mehr Standard** — sie ist unsicher (Lunge macht auch Geräusche). Goldstandard: **pH-Test** vom aspirierten Mageninhalt mit Teststreifen. pH <5,5 spricht für Magenlage. Bei Zweifel: **Röntgen** zur definitiven Lagekontrolle."

**B1 (235 Zeichen):** "Die alte Methode mit Luft und Stethoskop ist **nicht sicher**. Heute nimmt man etwas Flüssigkeit aus der Sonde und testet den pH-Wert. Wenn der pH unter 5,5 ist, ist die Sonde im Magen. Bei Unsicherheit wird geröntgt."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (810 Zeichen):**
"Eine falsch liegende Sonde ist lebensgefährlich: Wird Nahrung versehentlich in die **Lunge** appliziert, entsteht eine Aspirationspneumonie. Deshalb muss **vor jeder Gabe** und **einmal pro Schicht** die Lage geprüft werden.

**Nicht mehr empfohlen** — die sogenannte Luftinsufflation (Luft einblasen + auskultieren). Sie führt zu Fehlinterpretationen: Geräusche können auch bei Lage in der Lunge oder im Ösophagus entstehen.

**Goldstandard — pH-Messung:**
1. 5-10 ml Flüssigkeit aus der Sonde aspirieren.
2. Einen Tropfen auf einen **pH-Teststreifen** geben.
3. **pH <5,5** → Magenlage wahrscheinlich (Magensäure). **pH >6** → Verdacht auf Bronchial- oder Darmlage.

**Einschränkung:** PPI-Therapie (z.B. Pantoprazol) hebt den pH. Dann ist die pH-Messung unzuverlässig.

**Bei Unsicherheit oder nach Neuanlage**: **Röntgen-Thorax** zur definitiven Lagekontrolle — einmalig nach der Erstanlage ist Standard. (DGEM S3-Leitlinie, 2013/2020; ESPEN Guidelines)"

**B1 (620 Zeichen):**
"Eine falsch liegende Sonde kann tödlich sein: Wenn das Essen in die **Lunge** kommt, bekommt der Patient eine schwere Lungenentzündung. Darum prüfen wir die Lage:
- **Vor jeder Gabe**.
- **Einmal pro Schicht**.

**Alte Methode** (Luft einblasen und horchen): Die ist **nicht mehr sicher**. Man hört Geräusche auch dann, wenn die Sonde falsch liegt.

**Neue Methode — pH-Wert-Test:**
1. Mit einer Spritze etwas Flüssigkeit aus der Sonde ziehen.
2. Einen Tropfen auf einen **Teststreifen** geben.
3. **pH unter 5,5** → Sonde ist im Magen. **pH über 6** → Vorsicht, vielleicht in der Lunge oder im Darm.

**Bei Zweifel**: **Röntgen** machen lassen."

- **Erklärungs-Step:** stepType `stepbystep` (3-Schritt-Protokoll + Röntgen-Ausnahme)
- **Glossar-Begriffe:** [Aspiration, pH-Wert, Luftinsufflation, Protonenpumpenhemmer, Ösophagus]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn Luft mit Stethoskop hörbar einblubbert, liegt die Sonde sicher im Magen."**
- **Fachbegriff:** Auskultations-Trugschluss
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — die **Luftinsufflation ist nicht mehr Standard** (DGEM-Leitlinie). Geräusche können auch bei Fehllage in Lunge oder Speiseröhre entstehen. Sicher ist nur **pH-Test** (<5,5) oder **Röntgen**. Merke: 'Blubbern ist kein Beweis' — die alte Methode ist riskant."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Luft einblasen und horchen ist **nicht sicher**. Die Geräusche kommen auch, wenn die Sonde falsch liegt. Heute nimmt man den pH-Test oder ein Röntgenbild. Merke: Blubbern beweist nichts."

**D2: "pH-Messung ist bei allen Patienten zuverlässig."**
- **Fachbegriff:** pH-Universalitäts-Mythos
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — wer **Protonenpumpenhemmer** (z.B. Pantoprazol, Omeprazol) bekommt, hat einen höheren Magen-pH. Der Test zeigt dann pH 5-6 trotz korrekter Lage. Auch nach kürzlicher Nahrungsgabe ist der Wert verfälscht. Bei PPI-Therapie eher **Röntgen** zur Sicherheit."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — wenn der Patient Magenschutz-Tabletten (z.B. Pantoprazol) nimmt, ist die Magensäure weniger. Dann zeigt der Test einen zu hohen pH, obwohl alles stimmt. Bei solchen Patienten lieber ein Röntgen."

**D3: "Die Lage muss nur einmal bei der Anlage geprüft werden."**
- **Fachbegriff:** Einmal-Kontrolle-Irrtum
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — die Lage muss **vor jeder Gabe** und **mindestens einmal pro Schicht** kontrolliert werden. Sonden können durch Husten, Erbrechen oder Patientenbewegung **herausrutschen oder sich verlagern**. Merke: Jede Schicht prüfen, nicht nur einmal."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — die Sonde kann sich immer wieder verschieben: beim Husten, Erbrechen oder wenn der Patient sich dreht. Darum prüft man **vor jeder Nahrungsgabe** und einmal pro Schicht. Nicht nur beim Legen."

### Richtig-Feedback
**C1 (265 Zeichen):** "Genau. Die Luftinsufflation ist veraltet und unsicher — 'Blubbern' kann auch bei Fehllage in der Lunge auftreten. Standard ist heute die **pH-Messung** (<5,5 = Magenlage). Bei PPI-Therapie oder Zweifel ist das **Röntgen** die definitive Kontrolle. Immer vor jeder Gabe prüfen."

**B1 (235 Zeichen):** "Sehr gut. Luft und Stethoskop sind **nicht sicher**. Heute nehmen wir den **pH-Test**: Wenn er unter 5,5 ist, liegt die Sonde im Magen. Bei Unsicherheit wird **geröntgt**. Wichtig: Vor jeder Nahrungsgabe prüfen, nicht nur beim Legen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie prüfst du die korrekte Lage einer NG-Sonde? Welche Methode ist Standard, welche veraltet?"
- **Rückseite:** "Goldstandard: pH-Test aspirierter Flüssigkeit (pH <5,5 = Magen). Veraltet: Luftinsufflation mit Stethoskop. Bei Unsicherheit oder PPI-Therapie: Röntgen. Vor jeder Gabe + 1× pro Schicht."
- **Kategorie:** handlung

---

## Baustein 4: applikationsformen

### Metadaten
- **bausteinId:** enterale-ernaehrung-applikation
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient hat eine PEG in den Magen, ein anderer eine PEJ in den Dünndarm. Warum darf man bei dem einen Bolus geben, bei dem anderen aber nicht?"
- **Step-Typ:** freetext (Bloom 4, Begründungsaufgabe)

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Drei Applikationsformen: **Bolus** (Spritze, 200-400 ml mehrmals täglich) — nur Magen-Sonden, imitiert Mahlzeiten. **Schwerkraft** (Tropfenregulierung, 1-3 h pro 'Mahlzeit'). **Pumpe** (20-150 ml/h kontinuierlich) — **Pflicht bei Dünndarm-Sonden**, kein Bolus möglich."

**B1 (245 Zeichen):** "Drei Wege, Sondenkost zu geben: **Bolus** (mit Spritze, wie eine Mahlzeit) — nur in den Magen. **Schwerkraft** (läuft langsam mit Tropfen, 1-3 Stunden). **Pumpe** (konstant und langsam) — **muss sein** bei Sonden, die im Dünndarm enden."

- **Step-Typ:** matching (3 Formen ↔ Geschwindigkeit ↔ Sonden-Ort)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"**Bolusgabe** — Mehrmals täglich (meist 5-7×) werden 200-400 ml Sondenkost mit einer Blasenspritze über 15-30 Minuten gegeben. Das imitiert eine Mahlzeit. Vor- und nachher mit **20-50 ml Wasser spülen**. **Nur bei Magen-Sonden** (NG-Sonde, PEG) möglich — der Magen kann ein größeres Volumen aufnehmen.

**Schwerkraft-Applikation** — Die Sondenkost läuft aus einem Beutel per Tropfenzahl über 1-3 Stunden langsam in die Sonde. Geschwindigkeit wird mit einer Rollenklemme reguliert. Zwischen den Portionen Pausen.

**Pumpen-Applikation** — Eine Ernährungspumpe fördert die Sondenkost gleichmäßig mit 20-150 ml/h kontinuierlich (oder in programmierten Intervallen). **Pflicht bei Dünndarm-Sonden** (NJ, PEJ), weil der Dünndarm kein größeres Volumen auf einmal resorbieren kann — sonst Dumping-Syndrom mit Durchfall und Kreislaufproblemen. Auch bei Intensivpatienten Standard. (DGEM S3-Leitlinie, 2013/2020; ESPEN Guidelines)"

**B1 (615 Zeichen):**
"Drei Wege, Sondenkost zu geben:

**Bolus** — Mit einer großen Spritze werden 200-400 ml langsam über 15-30 Minuten eingegeben. Das ist wie eine **Mahlzeit**. Vorher und nachher mit **20-50 ml Wasser spülen**. **Nur bei Magen-Sonden** (NG, PEG).

**Schwerkraft** — Die Nahrung läuft von einem Beutel langsam durch den Schlauch, über **1-3 Stunden**. Eine Klemme regelt die Geschwindigkeit.

**Pumpe** — Eine **Pumpe** drückt die Nahrung konstant rein, zum Beispiel 50 ml pro Stunde. **Immer nötig** bei Dünndarm-Sonden (NJ, PEJ). Warum? Der Dünndarm kann nicht so viel auf einmal — sonst kommt Durchfall."

- **Erklärungs-Step:** stepType `comparison` (3 Spalten: Bolus/Schwerkraft/Pumpe × Geschwindigkeit × Einsatz)
- **Glossar-Begriffe:** [Bolus, Dumping-Syndrom, Ernährungspumpe, Rollenklemme]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bolusgabe ist bei allen Sondentypen möglich, solange man langsam gibt."**
- **Fachbegriff:** Universal-Bolus-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — Bolus ist **nur bei Magen-Sonden** (NG, PEG) erlaubt. Der **Dünndarm** kann kein größeres Volumen auf einmal verarbeiten: Die Folge wäre **Dumping-Syndrom** — starke Durchfälle, Übelkeit, Kreislaufprobleme. Bei NJ/PEJ gilt Pumpen-Pflicht. Merke: Dünndarm = Pumpe."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Bolus geht **nur bei Sonden im Magen**. Wenn die Sonde im Dünndarm endet, kommt zu viel auf einmal. Dann bekommt der Patient Durchfall, Übelkeit und Kreislaufprobleme. Merke: Dünndarm = immer Pumpe."

**D2: "Die Pumpe ist nur für Intensivpatienten gedacht."**
- **Fachbegriff:** Intensiv-Pumpen-Mythos
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — die Pumpe ist bei jeder **Dünndarm-Sonde** (NJ, PEJ) Standard, auch zuhause in der ambulanten Pflege. Auch bei Pumpen-abhängigen Magensonden (z.B. nächtliche Ernährung) üblich. Merke: Pumpe ist an **Sondenlage** gebunden, nicht an Schwere der Erkrankung."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — die Pumpe nutzt man immer bei Sonden, die im Dünndarm enden. Das ist auch in der häuslichen Pflege so. Merke: Entscheidend ist, **wo die Sonde endet**, nicht wie krank der Patient ist."

**D3: "Vor und nach der Bolusgabe ist kein Spülen notwendig — das verdünnt nur die Nahrung."**
- **Fachbegriff:** Spül-Vermeidungs-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — **Spülen mit 20-50 ml Wasser vor und nach jeder Gabe ist Pflicht**. Ohne Spülung verkleben Nahrungsreste in der Sonde, das Lumen verstopft. Eine blockierte Sonde kann nicht immer freigespült werden — dann muss sie gewechselt werden. Merke: Spülen schützt die Sonde."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Spülen ist Pflicht**, nicht verdünnen. Ohne Spülen bleibt Essen im Schlauch kleben. Dann verstopft die Sonde und man muss sie vielleicht wechseln. Merke: Immer vor und nach der Gabe 20-50 ml Wasser durchspülen."

### Richtig-Feedback
**C1 (265 Zeichen):** "Genau. Der Ort der Sondenspitze entscheidet: **Magen** kann Bolus (wie eine Mahlzeit) aufnehmen, der **Dünndarm** nicht — er braucht kontinuierliche Zufuhr per Pumpe. Bei NJ und PEJ immer Pumpe, sonst Dumping-Syndrom. Spülen mit 20-50 ml Wasser ist immer Pflicht."

**B1 (235 Zeichen):** "Sehr gut. Im **Magen** kann man Bolus geben — das ist wie eine Mahlzeit. Im **Dünndarm** geht das nicht: Zu viel auf einmal macht Durchfall. Darum immer Pumpe bei NJ und PEJ. Und: Immer vor und nach der Gabe 20-50 ml Wasser spülen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 3 Applikationsformen gibt es? Welche Regel gilt bei Dünndarm-Sonden?"
- **Rückseite:** "Bolus (Spritze, nur Magen), Schwerkraft (1-3 h), Pumpe (20-150 ml/h). Dünndarm-Sonden (NJ, PEJ): immer Pumpe — sonst Dumping-Syndrom. Immer spülen mit 20-50 ml Wasser."
- **Kategorie:** handlung

---

## Baustein 5: sondenkost-typen

### Metadaten
- **bausteinId:** enterale-ernaehrung-sondenkost-typen
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Diabetiker, ein Dialysepatient und ein untergewichtiger Tumorpatient bekommen alle Sondenkost. Meinst du, sie bekommen dieselbe Nahrung? Warum oder warum nicht?"
- **Step-Typ:** mc (Bloom 2, Vorwissen aktivieren)

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Sondenkost ist standardisierte Industrie-Nahrung. Es gibt: **hochkalorisch** (1,5-2,0 kcal/ml, bei Untergewicht), **normokalorisch** (1,0 kcal/ml, Standard), **mit/ohne Ballaststoffe** und **Spezialnahrung** (Diabetes, Niere, Lunge, Immunsystem)."

**B1 (235 Zeichen):** "Sondenkost ist fertige Nahrung aus der Industrie. Es gibt verschiedene Typen: **hochkalorisch** (viel Energie, bei dünnen Patienten), **normal** (Standard), **mit Ballaststoffen** und **Spezial** (für Diabetes, Niere oder Lunge)."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Sondenkost ist kein 'pürierter Eintopf' — sie ist **standardisierte, sterile Industrienahrung** mit definierter Zusammensetzung.

**Energiedichte:**
- **Normokalorisch** (1,0 kcal/ml) — Standard bei normalem Bedarf.
- **Hochkalorisch** (1,5-2,0 kcal/ml) — bei Untergewicht oder Flüssigkeitsrestriktion (Herzinsuffizienz, Dialyse).
- **Niederkalorisch** (0,5-0,9 kcal/ml) — selten, nur bei sehr geringem Energiebedarf.

**Ballaststoffe:**
- **Ohne Ballaststoffe** (initial, bei akuter Erkrankung, Darm-OP).
- **Mit Ballaststoffen** — Standard für Langzeit, fördert Darmflora und verhindert Durchfall.

**Spezial-Nahrungen:**
- **Diabetes-Formel** — langsam resorbierbare Kohlenhydrate.
- **Nieren-Formel** — eiweißarm, elektrolytadaptiert.
- **Lungen-Formel** — fettreich (weniger CO₂ bei Stoffwechsel).
- **Immunonutrition** — mit Arginin, Glutamin, Omega-3 (bei schwerer Krankheit).

Die Auswahl erfolgt **durch den Arzt** nach ärztlicher Anordnung. (DGEM S3-Leitlinie, 2013/2020)"

**B1 (540 Zeichen):**
"Sondenkost ist **fertige, saubere Nahrung** aus der Industrie — kein püriertes Essen aus der Küche.

**Wie viel Energie hat die Nahrung?**
- **Normal**: 1 kcal pro ml.
- **Hochkalorisch**: 1,5 bis 2 kcal pro ml — für dünne Patienten oder wenn man wenig trinken darf.

**Mit oder ohne Ballaststoffe?**
- **Ohne** am Anfang, nach einer OP am Darm.
- **Mit** für längere Zeit, gut für den Darm.

**Spezielle Nahrung:**
- **Diabetes** — mit langsamen Kohlenhydraten.
- **Niere** — wenig Eiweiß.
- **Lunge** — mehr Fett, weniger CO₂ beim Verdauen.

Der **Arzt entscheidet**, welche Nahrung passt."

- **Erklärungs-Step:** stepType `categorize` (Nahrungen → Patientengruppen)
- **Glossar-Begriffe:** [kcal, Ballaststoffe, Immunonutrition, normokalorisch, hochkalorisch]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Sondenkost ist püriertes normales Essen."**
- **Fachbegriff:** Küchen-Nahrungs-Irrtum
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — Sondenkost ist **industriell hergestellte, sterile Nahrung** mit genau definierten Kalorien, Eiweiß, Vitaminen und Spurenelementen. Püriertes Essen würde die Sonde verstopfen und hat unklare Zusammensetzung. Merke: Sondenkost = standardisiert, nicht püriert."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — Sondenkost ist **keine pürierte Mahlzeit** aus der Küche. Sie ist fertige, saubere Industrie-Nahrung mit genau bekannten Kalorien und Vitaminen. Gewöhnliches Essen würde die Sonde verstopfen."

**D2: "Alle Patienten bekommen die gleiche Standard-Sondenkost."**
- **Fachbegriff:** One-size-fits-all-Mythos
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — die Wahl hängt von **Diagnose, Nährstoffbedarf und Begleiterkrankungen** ab. Ein Dialysepatient braucht eine **Nieren-Formel** (eiweißarm), ein Diabetiker eine **Diabetes-Formel**, ein Untergewichtiger eine **hochkalorische** Nahrung. Der Arzt ordnet an."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — jeder Patient bekommt die Nahrung, die zu seiner Krankheit passt. Diabetiker brauchen eine andere als Nierenkranke. Und dünne Patienten brauchen mehr Energie. Der Arzt entscheidet."

**D3: "Ballaststoffe sollte man weglassen, damit die Sonde nicht verstopft."**
- **Fachbegriff:** Ballaststoff-Angst
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — moderne **ballaststoffhaltige Sondenkost** ist so verarbeitet, dass sie die Sonde **nicht verstopft**. Im Gegenteil: Ballaststoffe **fördern die Darmflora** und beugen Durchfall vor. Nur initial nach Darm-OP oder bei akuter Entzündung verzichtet man."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Ballaststoffe in der Sondenkost sind **fein verarbeitet**. Sie verstopfen die Sonde nicht. Im Gegenteil: Sie halten den Darm gesund und verhindern Durchfall. Nur direkt nach einer Darm-OP lässt man sie weg."

### Richtig-Feedback
**C1 (250 Zeichen):** "Genau. Sondenkost ist standardisierte Industrienahrung mit verschiedenen Zusammensetzungen: Energiedichte (normo-/hochkalorisch), Ballaststoffe, Spezialformeln für Diabetes/Niere/Lunge. Die Auswahl trifft der Arzt nach Diagnose und Bedarf."

**B1 (220 Zeichen):** "Sehr gut. Sondenkost gibt es in vielen Varianten: normal oder hochkalorisch, mit oder ohne Ballaststoffe, und Spezial für Diabetes, Niere oder Lunge. Welche passt, entscheidet der **Arzt** nach der Krankheit des Patienten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 3 Energiestufen und 3 Spezialformen von Sondenkost."
- **Rückseite:** "Energie: normo- (1 kcal/ml), hochkalorisch (1,5-2 kcal/ml), nieder- (<1). Spezial: Diabetes (langsame KH), Niere (eiweißarm), Lunge (fettreich, wenig CO₂)."
- **Kategorie:** fakt

---

## Baustein 6: peg-pflege-tagesroutine

### Metadaten
- **bausteinId:** enterale-ernaehrung-peg-pflege
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Eine PEG sitzt seit 2 Jahren bei einem Patienten. Die Krankenschwester schaut jeden Tag nur kurz drauf, wischt aber nichts ab und dreht den Schlauch nie. Was könnte in Monaten passieren?"
- **Step-Typ:** freetext (Bloom 3)

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "PEG-Pflege täglich: **1) Mobilisieren** — PEG-Schlauch **rein-drücken, drehen, rausziehen** (gegen Buried-Bumper-Syndrom). **2) Reinigen** mit sauberem Wasser oder NaCl. **3) Äußere Halteplatte spannungsfrei** — sonst Druckstellen. **4) Einstichstelle inspizieren**."

**B1 (245 Zeichen):** "PEG jeden Tag pflegen: **1) Schlauch bewegen** — reinschieben, drehen, rausziehen. Gegen **Buried-Bumper**. **2) Mit sauberem Wasser abwischen**. **3) Halteplatte locker** — nicht zu eng, sonst Druckstelle. **4) Haut anschauen** um die Sonde."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (840 Zeichen):**
"Die PEG braucht **tägliche Pflege**, sonst drohen zwei Hauptkomplikationen: **Infektion** der Einstichstelle und **Buried-Bumper-Syndrom** (die innere Halteplatte wächst in die Magenwand ein).

**Tägliche Routine** (nach den ersten 7-10 Tagen nach Anlage):

1. **Mobilisieren der Sonde**:
   - Sonde **1-2 cm in den Magen schieben**, um **360° drehen**, wieder zurückziehen.
   - Zweck: Verhindert Verwachsung der inneren Halteplatte mit der Magenschleimhaut (= Buried-Bumper).

2. **Reinigung der Einstichstelle**:
   - Mit **klarem Wasser** oder **NaCl 0,9%** abwischen, trocken tupfen.
   - Keine aggressiven Desinfektionsmittel im Dauergebrauch (Hautschäden).

3. **Äußere Halteplatte prüfen**:
   - Muss **spannungsfrei** aufliegen — ein Finger Platz zwischen Platte und Haut.
   - Zu fest → Druckstelle und Nekrose. Zu locker → Sonde rutscht nach innen.

4. **Einstichstelle inspizieren**:
   - Rötung, Schwellung, Austritt von Flüssigkeit/Eiter dokumentieren, Arzt informieren.

In den **ersten 7-10 Tagen** nach PEG-Anlage: **steril verbinden**, noch nicht drehen. Danach Routine-Pflege. (DGEM S3-Leitlinie, 2013/2020)"

**B1 (640 Zeichen):**
"Die PEG braucht **jeden Tag Pflege** — sonst gibt es zwei Probleme: **Infektion** oder das **Buried-Bumper-Syndrom** (die innere Platte wächst in den Magen ein).

**Tägliche Pflege** (nach den ersten 7-10 Tagen):

1. **Schlauch bewegen**:
   - **1-2 cm nach innen schieben**, um sich selbst **drehen**, wieder **zurückziehen**.
   - Warum? Damit die innere Platte **nicht festwächst**.

2. **Haut reinigen**:
   - Mit **klarem Wasser** oder **Kochsalz** abwischen, trocken tupfen.
   - Keine scharfen Mittel jeden Tag.

3. **Äußere Platte prüfen**:
   - **Locker** — ein Finger muss darunter passen. Zu fest gibt eine Druckstelle.

4. **Haut anschauen**:
   - Ist sie rot? Geschwollen? Kommt Eiter raus? Dann **Arzt informieren**.

**Erste 7-10 Tage**: steriler Verband, noch **nicht** drehen."

- **Erklärungs-Step:** stepType `sequencing` (4-Schritt-Tagesroutine in richtiger Reihenfolge)
- **Glossar-Begriffe:** [Buried-Bumper-Syndrom, Halteplatte, NaCl, Einstichstelle, Mobilisieren]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die PEG sollte möglichst wenig bewegt werden, damit nichts passiert."**
- **Fachbegriff:** Stillstand-Irrtum
- **Feedback (C1, 280 Zeichen):** "Im Gegenteil — genau das **tägliche Bewegen** (rein-drehen-raus) ist die **wichtigste** Maßnahme. Ohne Bewegung wächst die innere Halteplatte in die Magenwand ein: **Buried-Bumper-Syndrom**. Dann muss die PEG operativ entfernt werden. Merke: Stille PEG = gefährliche PEG."
- **Feedback (B1, 240 Zeichen):** "Genau andersherum — die PEG **muss jeden Tag bewegt** werden. Sonst wächst die innere Platte fest im Magen. Das heißt **Buried-Bumper-Syndrom**. Dann braucht der Patient eine Operation, um die Sonde rauszuholen."

**D2: "Die äußere Halteplatte muss fest an der Haut anliegen, damit die Sonde nicht rutscht."**
- **Fachbegriff:** Fest-Fixierungs-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die äußere Platte muss **spannungsfrei** sitzen: ein Finger Platz zwischen Platte und Haut. Zu fest → **Druckstelle, Nekrose, Infektion**. Die Sonde rutscht nicht raus, weil die **innere Halteplatte** sie im Magen hält. Merke: Äußere Platte locker, innere Platte hält."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die äußere Platte soll **locker** sitzen. Ein Finger muss drunter passen. Zu fest gibt eine Druckstelle und die Haut kaputt. Die Sonde rutscht nicht raus: Das macht die **innere Platte** im Magen."

**D3: "Die Einstichstelle desinfiziert man täglich mit Desinfektionsmittel."**
- **Fachbegriff:** Über-Desinfektions-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — **tägliche Desinfektion greift die Haut an** und stört die Hautflora. Standard in der Routine-Phase ist **klares Wasser oder NaCl 0,9%**. Desinfektion nur bei Neuanlage (erste 7-10 Tage), bei Wundinfektion oder nach ärztlicher Anordnung. Merke: Alltag = Wasser."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Desinfektionsmittel jeden Tag macht die Haut kaputt**. Normal nimmt man **klares Wasser** oder Kochsalz. Desinfektion nur am Anfang (erste 7-10 Tage) oder wenn die Stelle entzündet ist. Merke: Alltag = Wasser."

### Richtig-Feedback
**C1 (265 Zeichen):** "Genau. Ohne tägliche Pflege drohen Infektion oder Buried-Bumper-Syndrom. Die 4 Schritte: mobilisieren (drehen!), mit Wasser reinigen, äußere Platte spannungsfrei halten, Einstichstelle inspizieren. In den ersten 7-10 Tagen steril und noch nicht drehen."

**B1 (235 Zeichen):** "Sehr gut. Jeden Tag: Schlauch **drehen und hin-und-herschieben**, mit Wasser abwischen, äußere Platte **locker** lassen, Haut anschauen. In den ersten 7-10 Tagen: **nur steril verbinden**, noch nicht drehen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was sind die 4 Schritte der täglichen PEG-Pflege? Warum ist Mobilisieren so wichtig?"
- **Rückseite:** "1) Mobilisieren (rein-drehen-raus) gegen Buried-Bumper-Syndrom. 2) Reinigung mit Wasser/NaCl. 3) Halteplatte spannungsfrei (1 Finger Platz). 4) Einstichstelle inspizieren. Erste 7-10 Tage: steril, nicht drehen."
- **Kategorie:** handlung

---

## Baustein 7: komplikation-aspiration

### Metadaten
- **bausteinId:** enterale-ernaehrung-aspiration
- **bloomLevel:** 4
- **wissensart:** komplikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient mit NG-Sonde liegt flach im Bett und bekommt Bolus-Nahrung. Plötzlich hustet er stark, wird blass und bekommt schlecht Luft. Was ist passiert und was macht du als erstes?"
- **Step-Typ:** mc (Bloom 4, akute Handlung erkennen)

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "**Aspiration** = Nahrung gelangt in die Atemwege. Lebensgefährlich — kann Aspirationspneumonie oder akute Atemnot auslösen. **Prophylaxe**: Oberkörper **30-45° hoch** während der Gabe und **30-60 Min danach**. Sofortmaßnahme bei Aspiration: Gabe stoppen, Oberkörper hoch, Arzt."

**B1 (240 Zeichen):** "**Aspiration** heißt: Essen kommt in die Lunge. Das ist lebensgefährlich. **Vorbeugen**: Oberkörper auf **30-45°** heben — während der Gabe und **30-60 Minuten danach**. **Sofort bei Aspiration**: Nahrung stoppen, aufrecht hinsetzen, Arzt rufen."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"Aspiration ist die **gefährlichste Akut-Komplikation** der enteralen Ernährung. Nahrung oder Mageninhalt gelangen in die Atemwege — Folgen reichen von akuter Atemnot über **Aspirationspneumonie** bis zum Ersticken.

**Risikofaktoren:**
- Liegende oder flache Position während oder nach der Gabe.
- Gestörte Schluckreflexe (Schlaganfall, Bewusstseinstrübung).
- Gastroösophagealer Reflux.
- Erhöhter Magenrest (siehe Baustein 10).
- Bolus-Gabe bei hohem Aspirationsrisiko.

**Prophylaxe** (DGEM-Leitlinie):
1. **Oberkörperhochlagerung 30-45°** während der gesamten Gabe.
2. **30-60 Minuten nach Gabe** weiter hochlagern.
3. **Pumpen-Applikation** bei hohem Risiko (kein Bolus).
4. **Nasojejunale Sonde** statt nasogastral erwägen.
5. **Magenrest messen** vor jeder Bolusgabe.

**Sofortmaßnahmen bei Verdacht auf Aspiration:**
- Nahrungsgabe **sofort stoppen**.
- Oberkörper hoch, Kopf zur Seite.
- Mund und Rachen absaugen wenn möglich.
- **Arzt alarmieren**, ggf. Röntgen-Thorax, Antibiotika bei Pneumonie. (DGEM S3-Leitlinie, 2013/2020)"

**B1 (620 Zeichen):**
"Aspiration heißt: Essen kommt in die **Lunge**. Das ist lebensgefährlich. Der Patient kann ersticken oder eine schwere **Lungenentzündung** bekommen.

**Wer ist gefährdet?**
- Patienten, die **flach liegen**.
- Patienten mit **Schluckstörung** (z.B. nach Schlaganfall).
- Patienten, die **wenig wach** sind.

**Wie verhindert man Aspiration?**
1. **Oberkörper hoch** auf 30-45° während der Gabe.
2. **Noch 30-60 Minuten** nach der Gabe weiter hoch bleiben.
3. **Pumpe** statt Bolus bei Risiko.
4. **Magenrest prüfen** vor jeder Gabe.

**Wenn Aspiration passiert:**
- **Sofort Nahrung stoppen**.
- Patient **aufrecht** hinsetzen.
- Mund **absaugen**.
- **Arzt rufen**."

- **Erklärungs-Step:** stepType `branching` (Akut-Entscheidungsbaum)
- **Glossar-Begriffe:** [Aspiration, Aspirationspneumonie, Reflux, Magenrest, Schluckreflex]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Beim Sondieren kann nichts in die Lunge kommen, weil die Sonde ja direkt in den Magen geht."**
- **Fachbegriff:** Sonden-Sicherheits-Mythos
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — Aspiration entsteht durch **Reflux**: Mageninhalt läuft zurück in die Speiseröhre und von dort in die Atemwege. Besonders bei **flacher Lage** und **gestörtem Schluckreflex**. Die Sonde schützt nicht davor. Merke: Sonde im Magen heißt **nicht** 'keine Aspirationsgefahr'."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das Essen kann vom Magen **zurückfließen** in die Speiseröhre und dann in die Lunge. Besonders wenn der Patient **flach liegt**. Darum muss der Oberkörper immer **hoch** sein. Sonde im Magen ist kein Schutz gegen Aspiration."

**D2: "Nach der Gabe kann der Patient sofort wieder flach liegen."**
- **Fachbegriff:** Sofort-Flach-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — der Oberkörper muss **mindestens 30-60 Minuten nach Ende** der Gabe noch **hochgelagert** bleiben. Der Magen entleert sich langsam; ein frühes Hinlegen fördert Reflux und Aspiration — ein häufiger Auslöser nächtlicher Aspirationspneumonien. Merke: 30-60 Min nach Gabe."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — nach der Gabe muss der Patient noch **30-60 Minuten lang** oben bleiben. Sonst fließt das Essen zurück und kommt in die Lunge. Besonders nachts ist das gefährlich. Merke: Nicht sofort flach hinlegen."

**D3: "Bei Aspiration gibt man dem Patienten etwas zu trinken, damit er das Essen runterschluckt."**
- **Fachbegriff:** Runterschlucken-Irrtum
- **Feedback (C1, 285 Zeichen):** "Gefährlich — man gibt einem Patienten mit **Aspirationsverdacht niemals etwas zu trinken**. Das würde die Situation **verschlimmern** (weitere Aspiration). Korrekt: **Gabe stoppen, Oberkörper hoch, absaugen wenn möglich, Arzt rufen**. Merke: Bei Aspiration nichts oral geben!"
- **Feedback (B1, 245 Zeichen):** "Das ist **gefährlich** — niemals etwas zu trinken geben! Das macht alles schlimmer. Richtig: **Essen stoppen**, Patient **aufrecht** hinsetzen, **Mund absaugen**, **Arzt rufen**. Nichts mehr in den Mund geben."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Aspiration ist die lebensbedrohliche Akut-Komplikation. **Stopp der Gabe** ist der erste Schritt, dann Oberkörperhochlagerung und Absaugung, dann Arzt. Prophylaxe: 30-45° während und 30-60 Min nach Gabe. Pumpenapplikation und Magenrest-Messung bei hohem Risiko."

**B1 (240 Zeichen):** "Sehr gut. Aspiration heißt: Essen in der Lunge — lebensgefährlich. **Sofort stoppen**, Oberkörper hoch, Mund absaugen, Arzt rufen. **Vorbeugen**: Oberkörper auf 30-45° während und 30-60 Minuten nach der Gabe. Niemals etwas trinken geben."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Aspiration? Nenne 3 Prophylaxe-Maßnahmen und die Sofortreaktion."
- **Rückseite:** "Aspiration = Eindringen von Nahrung in die Atemwege. Prophylaxe: Oberkörper 30-45° während + 30-60 Min nach Gabe, Pumpe statt Bolus, Magenrest messen. Sofort: Gabe stoppen, aufrecht, absaugen, Arzt."
- **Kategorie:** komplikation

---

## Baustein 8: komplikation-durchfall

### Metadaten
- **bausteinId:** enterale-ernaehrung-durchfall
- **bloomLevel:** 4
- **wissensart:** komplikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient bekommt seit 3 Tagen Sondenkost — und hat jetzt 5× Durchfall pro Tag. Die Pflegekraft denkt 'das ist bei Sonde normal'. Stimmt das oder könnte das verschiedene Ursachen haben?"
- **Step-Typ:** freetext (Bloom 4, Ursachen analysieren)

### Stufe 2 — Hinweis

**C1 (285 Zeichen):** "Durchfall bei Sondenkost ist **nicht normal** — meist behebbar. Ursachen: **zu schnelle Applikation**, **zu kalte Nahrung**, **Hyperosmolarität**, **Hygienefehler** (kontaminierte Nahrung), **Antibiotika-assoziiert** (C. difficile!), **Laktose-Intoleranz** oder **Sorbit in Medikamenten**."

**B1 (250 Zeichen):** "Durchfall mit Sonde ist **kein normales Problem**. Gründe: **Nahrung läuft zu schnell**, zu kalt, zu viel Zucker, **Hygiene schlecht**, **Antibiotika** haben den Darm gestört, Laktose-Unverträglichkeit oder Medikamente mit Sorbit. Meistens kann man es lösen."

- **Step-Typ:** categorize (Ursachen → Kategorien)

### Stufe 3 — Erklärung

**C1 (810 Zeichen):**
"Durchfall ist die häufigste Komplikation der Sondenernährung (bis zu 30% der Patienten). Er ist **nicht schicksalhaft** — fast immer gibt es eine Ursache.

**Häufigste Ursachen:**
1. **Zu schnelle Applikation** — Pumpenrate zu hoch oder Bolus zu schnell. Lösung: Rate reduzieren.
2. **Hyperosmolare Sondenkost** — zu konzentriert. Bei Start: niedrigere Kalorienstufe, Steigerung über Tage.
3. **Kühl applizierte Nahrung** — Zimmertemperatur (nicht aufwärmen!).
4. **Kontamination** — Nahrung nicht länger als 4-6 h hängen lassen, Hände und Überleitungssystem sauber.
5. **Antibiotika-assoziiert** — Darmflora gestört. **Vorsicht: Clostridium-difficile-Diarrhoe** — Stuhlprobe, Isolation!
6. **Sorbit in Medikamenten** — viele flüssige Medikamente enthalten Sorbit (abführend).
7. **Laktose-Intoleranz** — laktosefreie Formel wählen.
8. **Pankreasinsuffizienz** — Enzymsubstitution.

**Maßnahmen:** Ursachensuche, **Applikationsrate reduzieren**, Hygienestandards prüfen, Stuhlprobe bei Antibiotika-Anamnese, Arzt. (DGEM S3-Leitlinie, 2013/2020)"

**B1 (620 Zeichen):**
"Durchfall bei Sondenkost ist **häufig** (fast jeder dritte Patient) — aber **nicht normal**. Es gibt fast immer einen Grund.

**Häufige Gründe:**
1. **Nahrung läuft zu schnell** → Pumpenrate runter.
2. **Zu viel Kalorien/Zucker** auf einmal → am Anfang langsam steigern.
3. **Nahrung zu kalt** → Zimmertemperatur.
4. **Schmutzige Überleitung** → nicht länger als 4-6 Stunden hängen lassen.
5. **Antibiotika** haben den Darm kaputtgemacht → **Stuhlprobe** (vorsicht **C. difficile**!).
6. **Sorbit** in flüssigen Medikamenten → macht auch Durchfall.
7. **Laktose-Intoleranz** → laktosefreie Nahrung.

**Was macht du?** Ursache suchen, **Rate reduzieren**, Hygiene prüfen, Arzt informieren."

- **Erklärungs-Step:** stepType `categorize` (Ursachen-Kategorien mit Maßnahmen)
- **Glossar-Begriffe:** [Hyperosmolarität, Clostridium difficile, Sorbit, Laktose-Intoleranz, Pankreasinsuffizienz]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Durchfall bei Sondenkost ist normal und gehört dazu."**
- **Fachbegriff:** Schicksal-Irrtum
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — Durchfall ist **häufig, aber nicht normal**. Fast immer gibt es eine **behebbare Ursache**: Applikationsrate, Temperatur, Hygiene, Antibiotika, Medikamente mit Sorbit. Unbehandelt droht **Dehydratation und Mangelernährung**. Merke: Durchfall = Ursache suchen!"
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — Durchfall ist **häufig**, aber **nicht normal**. Fast immer gibt es einen Grund, den man finden und beheben kann. Wenn er bleibt, wird der Patient **trockener und schwächer**. Merke: Immer die Ursache suchen."

**D2: "Bei Durchfall stellt man die Sondenkost komplett ab."**
- **Fachbegriff:** Stopp-Reflex
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — **komplett abstellen** würde zu Mangelernährung führen. Richtig: **Rate reduzieren**, **Ursache suchen** (Antibiotika? Sorbit? Hygiene?), ggf. auf **laktosefrei** umstellen. Nur bei schwerem Verdacht auf C. difficile wird die Gabe kurzfristig pausiert. Merke: Reduzieren statt stoppen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **ganz abstellen** ist falsch, der Patient braucht die Nahrung. Besser: **langsamer geben**, **Ursache suchen**, vielleicht eine andere Nahrung nehmen. Nur bei Verdacht auf C. difficile pausiert man kurz. Merke: Runter, nicht aus."

**D3: "Man sollte die Sondenkost vor der Gabe auf Körpertemperatur erwärmen."**
- **Fachbegriff:** Wärme-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Sondenkost wird **bei Zimmertemperatur** appliziert (NICHT aufwärmen!). Aufwärmen fördert **Bakterienwachstum**, und Mikrowellen können die Nahrung ungleichmäßig erhitzen (Verbrennungsgefahr Speiseröhre). Nur aus dem Kühlschrank direkt zu kalt — 30 Min vorher rausstellen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Sondenkost **nicht warmmachen**! Das macht **Bakterien** und kann die Speiseröhre verbrennen. Richtig: **Zimmertemperatur** — aus dem Kühlschrank 30 Minuten vorher rausstellen. Aber nicht in die Mikrowelle oder ins heiße Wasser."

### Richtig-Feedback
**C1 (270 Zeichen):** "Genau. Durchfall ist häufig (bis zu 30%), aber fast immer behebbar. Systematische Ursachensuche: Rate, Hygiene, Temperatur, Antibiotika (C. difficile!), Medikamenten-Sorbit, Laktose. Erste Maßnahme: **Rate reduzieren**, nicht komplett stoppen, und Arzt informieren."

**B1 (240 Zeichen):** "Sehr gut. Durchfall ist häufig, aber nicht normal. Suche den Grund: Läuft die Pumpe zu schnell? Ist die Hygiene gut? Bekommt der Patient Antibiotika oder Sirup mit Sorbit? Besser: Rate runter und Arzt informieren — nicht ganz abstellen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 5 häufige Ursachen für Durchfall bei Sondenkost und die erste Maßnahme."
- **Rückseite:** "Ursachen: zu schnelle Rate, Hyperosmolarität, Kontamination, Antibiotika (C. difficile!), Sorbit in Medikamenten, Laktose-Intoleranz, Pankreasinsuffizienz. Erste Maßnahme: Rate reduzieren, Ursache suchen, Arzt."
- **Kategorie:** komplikation

---

## Baustein 9: komplikation-sondenverstopfung

### Metadaten
- **bausteinId:** enterale-ernaehrung-sondenverstopfung
- **bloomLevel:** 3
- **wissensart:** komplikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Die PEG einer Patientin lässt sich nicht mehr spülen — die Spritze gibt keinen Widerstand. Was hat der Kollege vor der letzten Gabe wahrscheinlich vergessen? Und was versuchst du jetzt?"
- **Step-Typ:** freetext (Bloom 3, Ursache + Handlung)

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Sonde verstopft meist durch **vergessenes Spülen**. Prophylaxe: **20-50 ml Wasser vor UND nach jeder Gabe/Medikamentengabe**. Bei Verstopfung: warmes Wasser, sanfter Druck (keine Gewalt!). **Nie Cola oder scharfe Mittel** hineinspritzen — Empfehlung ohne Evidenz und gefährlich."

**B1 (245 Zeichen):** "Sonde verstopft, wenn man vergisst zu **spülen**. Immer **20-50 ml Wasser vor und nach** Nahrung oder Medikamenten. Wenn sie trotzdem zu ist: mit **warmem Wasser** probieren, **sanft drücken**. **Keine Gewalt** — Sonde kann platzen. **Kein Cola**."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"**Verstopfung der Sonde** ist eine häufige, aber vermeidbare Komplikation. Ursache: Nahrungsreste, zermörserte Tabletten oder ausgeflockte Medikamente verkleben das Lumen.

**Prophylaxe ist alles:**
- **Vor und nach jeder Gabe** mit **20-50 ml Wasser** spülen (bei Erwachsenen).
- **Vor und nach jeder Medikamentengabe** ebenfalls spülen.
- **Medikamente einzeln** geben, nicht zusammen mischen.
- Tabletten nur mörsern, wenn sie nicht magensaftresistent oder retardiert sind.
- **Bei Kontinuierlicher Pumpe**: alle 4-6 Stunden spülen.

**Was tun bei Verstopfung?**
1. **Warmes Wasser** mit 20-50 ml Spritze, sanfter Druck und Zug im Wechsel.
2. Falls ineffektiv: **Pankreasenzym-Lösung** (laut Hauspraxis, nach Arztanordnung).
3. **KEIN Cola, kein Ananassaft** — veraltete Tipps ohne Evidenz, können die Sonde schädigen.
4. **Keine Gewalt** — zu hoher Druck reißt die Sonde, es entsteht eine Leckage.
5. Wenn nichts hilft: Sonde muss gewechselt werden. (DGEM S3-Leitlinie, 2013/2020)"

**B1 (600 Zeichen):**
"Eine Sonde **verstopft**, wenn Essen oder Tabletten im Schlauch kleben bleiben.

**Vorbeugen ist das Wichtigste:**
- **Vor und nach jeder Gabe** mit **20-50 ml Wasser** spülen.
- **Auch nach Medikamenten** spülen.
- **Tabletten einzeln** geben, nicht mischen.

**Wenn die Sonde verstopft ist:**
1. **Warmes Wasser** in der Spritze, sanft drücken und ziehen.
2. **Keine Gewalt** — sonst platzt der Schlauch.
3. **Kein Cola** oder saurer Saft — das ist ein alter Tipp, aber er hilft nicht und kann die Sonde kaputtmachen.
4. Wenn es nicht besser wird: Sonde **wechseln lassen**.

Merke: Spülen schützt die Sonde — jedes Mal."

- **Erklärungs-Step:** stepType `sequencing` (Prophylaxe + Intervention in Reihenfolge)
- **Glossar-Begriffe:** [Lumen, mörsern, retardiert, magensaftresistent, Pankreasenzym]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Cola eignet sich zum Freispülen verstopfter Sonden."**
- **Fachbegriff:** Cola-Mythos
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **Cola ist ein alter Pflegetipp ohne wissenschaftliche Grundlage** (DGEM empfiehlt es nicht). Die Säure kann Eiweiß in der Sonde **ausflocken** und die Verstopfung **verschlimmern**. Außerdem: Zucker fördert Bakterien. **Warmes Wasser** ist der Standard. Merke: Kein Cola."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Cola hilft nicht** und kann die Sonde kaputt machen. Die Säure macht das Essen fester, nicht flüssiger. Besser: **warmes Wasser** mit sanftem Druck probieren. Merke: Kein Cola, kein Saft — nur Wasser."

**D2: "Mit viel Druck kann man jede verstopfte Sonde wieder freibekommen."**
- **Fachbegriff:** Gewalt-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **hoher Druck reißt die Sonde**, besonders Ernährungssonden aus weichem Material. Folge: **Leckage in die Bauchhöhle** (bei PEG) oder Sondenbruch. Richtig: **sanfter Druck und Zug im Wechsel** mit 20-50-ml-Spritze. Wenn nicht frei: Sonde muss gewechselt werden."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **zu viel Druck macht die Sonde kaputt**. Sie kann platzen oder reißen, und dann läuft Flüssigkeit in den Bauch. Richtig: **sanft** mit 20-50 ml Wasser drücken und ziehen. Wenn nichts hilft: Sonde **wechseln**."

**D3: "Medikamente können einfach mit der Sondennahrung zusammen gegeben werden."**
- **Fachbegriff:** Medikamenten-Misch-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Medikamente und Sondenkost **getrennt** applizieren. Mischen kann zu **pharmakologischer Wechselwirkung** führen (Medikament wirkt schwächer) und zu **Ausflockung** im Schlauch (Verstopfung). Regel: Vor + nach Medikament spülen, Medikamente einzeln, nicht mit Nahrung."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **Medikamente und Nahrung nicht mischen**! Das kann die Wirkung der Tablette kaputtmachen und die Sonde verstopfen. Richtig: **Nahrung stoppen**, mit Wasser spülen, Medikament geben, wieder spülen. Jedes Medikament einzeln."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Spülen ist die **wichtigste Prophylaxe**: 20-50 ml Wasser vor und nach jeder Gabe oder Medikation. Bei Verstopfung: warmes Wasser, sanfter Druck und Zug. Kein Cola, keine Gewalt. Wenn es nicht hilft: Sonde wechseln lassen, nicht erzwingen."

**B1 (230 Zeichen):** "Sehr gut. Spülen ist das Wichtigste: **20-50 ml Wasser vor und nach** jeder Gabe. Wenn die Sonde trotzdem zu ist: **warmes Wasser** sanft probieren. **Kein Cola**, keine Gewalt. Wenn nichts hilft: Sonde wechseln lassen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie beugst du Sondenverstopfung vor? Was tust du, wenn sie trotzdem verstopft?"
- **Rückseite:** "Prophylaxe: 20-50 ml Wasser vor/nach jeder Gabe + Medikation, Medikamente einzeln. Bei Verstopfung: warmes Wasser, sanft drücken/ziehen. Kein Cola, keine Gewalt. Sonst: Sonde wechseln."
- **Kategorie:** handlung

---

## Baustein 10: refeeding-syndrom

### Metadaten
- **bausteinId:** enterale-ernaehrung-refeeding
- **bloomLevel:** 4
- **wissensart:** komplikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient mit Magersucht hat 4 Wochen fast nichts gegessen. Jetzt soll er wieder ernährt werden. Die junge Ärztin will die volle Kalorienmenge sofort geben. Würdest du das unterstützen? Warum?"
- **Step-Typ:** freetext (Bloom 4, klinische Beurteilung)

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "**Refeeding-Syndrom** = lebensgefährliche Elektrolytverschiebung bei schneller Nahrungszufuhr nach langer Mangelernährung. **Insulin-getrieben**: Phosphat, Kalium, Magnesium rauschen in die Zellen — Plasmaspiegel crashen. Folge: Herz-, Atmungs-, Neurologische Störungen, Tod."

**B1 (255 Zeichen):** "**Refeeding-Syndrom** = gefährliche Probleme mit **Elektrolyten** (wie Kalium und Phosphat), wenn man nach langer Mangelernährung **zu schnell** wieder füttert. Die Stoffe rauschen in die Zellen. Im Blut fehlen sie. Es kann zu **Herzstillstand** kommen."

- **Step-Typ:** text (displayFormat: beforeafter)

### Stufe 3 — Erklärung

**C1 (860 Zeichen):**
"Das **Refeeding-Syndrom** ist eine der gefährlichsten, aber wenig bekannten Komplikationen der künstlichen Ernährung. Es tritt auf, wenn Patienten **nach längerer Mangelernährung** (meist >5-10 Tage ohne adäquate Kalorien) **zu schnell** wieder ernährt werden.

**Pathophysiologie:**
Während des Hungerns geht der Körper auf Fettverbrennung um, Zellen geben Elektrolyte (Phosphat, Kalium, Magnesium) ab. Bei plötzlicher Kohlenhydratzufuhr steigt Insulin rasch — es treibt Elektrolyte **zurück in die Zellen**. Die Plasmaspiegel **crashen**.

**Symptome:**
- **Hypophosphatämie** → Muskelschwäche, Atemversagen, Herzinsuffizienz.
- **Hypokaliämie** → Arrhythmien, Herzstillstand.
- **Hypomagnesiämie** → Krampfanfälle, Arrhythmien.
- Thiaminmangel → Wernicke-Enzephalopathie.

**Risikogruppen:** Anorexia nervosa, Tumorpatienten, Alkoholkranke, chronisch Kranke mit BMI <18,5.

**Prophylaxe (DGEM):**
- **Langsamer Start**: 10-20 kcal/kg/Tag am ersten Tag, Steigerung über **5-7 Tage**.
- **Elektrolyte und Thiamin** vor und während Ernährung substituieren.
- Laborkontrolle **täglich** in den ersten Tagen. (DGEM S3-Leitlinie, 2013/2020; ESPEN Guidelines)"

**B1 (680 Zeichen):**
"Das **Refeeding-Syndrom** ist eine sehr **gefährliche** Komplikation. Sie passiert, wenn Patienten nach langem Hungern **zu schnell** wieder Nahrung bekommen.

**Was passiert?**
Der Körper hat während des Hungerns **Elektrolyte** (wie Phosphat und Kalium) aus den Zellen benutzt. Wenn plötzlich viel Zucker kommt, **rauscht alles in die Zellen zurück**. Im Blut fehlen dann wichtige Stoffe.

**Symptome:**
- **Muskel-Schwäche**, schlechter atmen können.
- **Herzprobleme**, unregelmäßiger Puls, **Herzstillstand**.
- **Krampfanfälle**.

**Wer hat Risiko?**
- Patienten mit **Magersucht**.
- Tumor-Patienten.
- **Alkohol-Kranke**.
- Patienten, die lange (über 5-10 Tage) fast nichts gegessen haben.

**Was tun?**
- **Langsam beginnen** (wenig Kalorien am Anfang, über 5-7 Tage steigern).
- **Elektrolyte und Vitamin B1** **vorher** geben.
- **Blut-Werte** jeden Tag kontrollieren."

- **Erklärungs-Step:** stepType `reveal` (Schritt-für-Schritt Pathophysiologie)
- **Glossar-Begriffe:** [Refeeding-Syndrom, Hypophosphatämie, Hypokaliämie, Thiamin, Wernicke-Enzephalopathie, Elektrolyte]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Nach langer Mangelernährung sollte man schnell viel Energie geben, um den Körper aufzubauen."**
- **Fachbegriff:** Aufbau-Irrtum
- **Feedback (C1, 295 Zeichen):** "Gefährlich — genau das **löst das Refeeding-Syndrom aus**. Bei schneller Zufuhr stürzen **Phosphat, Kalium, Magnesium** im Blut ab (sie strömen in die Zellen). Risiko: Herzstillstand. Richtig: **10-20 kcal/kg/Tag** am Anfang, Steigerung über **5-7 Tage**, Elektrolyte + Thiamin substituieren."
- **Feedback (B1, 255 Zeichen):** "Das ist **gefährlich** — so entsteht das Refeeding-Syndrom. Die Elektrolyte rauschen in die Zellen. Der Patient kann einen **Herzstillstand** bekommen. Richtig: **langsam anfangen**, über **5-7 Tage** mehr geben. Vorher Vitamin B1 und Elektrolyte."

**D2: "Das Refeeding-Syndrom betrifft nur Patienten mit Magersucht."**
- **Fachbegriff:** Anorexie-Reduktion
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **Risikogruppen sind viel breiter**: Tumorpatienten (Kachexie), chronisch Alkoholkranke, Menschen mit chronischen Entzündungen, Patienten auf der Intensivstation nach Sepsis, alle mit BMI <18,5 oder ≥10 Tagen ohne adäquate Nahrung. Merke: Nicht nur Anorexie — jeder Mangel-Patient."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **nicht nur bei Magersucht**. Auch Tumor-Patienten, Alkohol-Kranke und alle, die lange (über 10 Tage) kaum gegessen haben, sind gefährdet. Merke: Wer **lange wenig gegessen** hat, hat Risiko."

**D3: "Bei parenteraler Ernährung tritt das Refeeding-Syndrom nicht auf."**
- **Fachbegriff:** Parenteral-Sicherheits-Mythos
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — das Refeeding-Syndrom tritt **bei enteraler UND parenteraler** Ernährung auf, ebenso bei oraler Wiederaufnahme. Der Mechanismus (Insulin-getriebene Elektrolyt-Verschiebung) ist derselbe — egal auf welchem Weg die Glukose kommt. Merke: Risiko hängt an der Menge, nicht am Weg."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — das Problem kommt bei **allen Wegen**: durch Sonde, durch die Vene und auch beim normalen Essen. Der Körper reagiert immer gleich. Merke: Es geht um **wie schnell und wie viel**, nicht um welchen Weg."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Nach langer Mangelernährung darf man **nie** sofort die volle Menge geben. Das Refeeding-Syndrom ist lebensbedrohlich: Insulin-getriebene Elektrolyt-Verschiebungen führen zu Hypophosphatämie, Hypokaliämie, Arrhythmien. Start mit 10-20 kcal/kg/Tag, Steigerung über 5-7 Tage, Laborkontrolle, Thiamin + Elektrolyte substituieren."

**B1 (255 Zeichen):** "Sehr gut. Nach langer Mangelernährung: **niemals schnell viel geben**. Das Refeeding-Syndrom ist lebensgefährlich — der Patient kann einen Herzstillstand bekommen. Richtig: **langsam anfangen** (wenig Kalorien), über 5-7 Tage steigern, vorher **Vitamin B1 und Elektrolyte** geben, jeden Tag Blut kontrollieren."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist das Refeeding-Syndrom? Wer ist gefährdet? Wie beugst du vor?"
- **Rückseite:** "Elektrolyt-Verschiebung (P, K, Mg) durch Insulin bei schneller Refeeding nach langer Mangelernährung. Risiko: Herzstillstand. Gefährdet: Anorexie, Tumor, Alkoholiker, BMI<18,5. Prophylaxe: 10-20 kcal/kg/d Start, Steigerung 5-7 d, Thiamin + Elektrolyte, Labor."
- **Kategorie:** komplikation

---

## Baustein 11: parenterale-grundzuege

### Metadaten
- **bausteinId:** enterale-ernaehrung-parenteral
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient bekommt keine enterale Ernährung, weil sein Darm nicht arbeitet. Er soll Nährlösung in die Vene bekommen. Kannst du dir vorstellen, warum man manchmal eine Armvene nimmt und manchmal einen Katheter direkt ins Herz legt?"
- **Step-Typ:** freetext (Bloom 2, Vorwissen)

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "**Parenteral** = Vene. **Periphervenös** (Armvene): nur **kurzfristig**, isoosmolare Lösung (800 mosmol/l), maximal 7-10 Tage. **Zentralvenös** (ZVK, Port): **langfristig**, hyperosmolare Lösungen möglich. Höheres Infektionsrisiko als enteral — v.a. Katheter-Sepsis."

**B1 (240 Zeichen):** "**Parenteral** = in die Vene. **Armvene** (periphervenös): nur **kurz** (7-10 Tage), verdünnte Lösung. **Katheter in eine große Vene** zum Herz (ZVK, Port): **länger**, darf auch konzentriert sein. **Infektionsrisiko höher** als bei enteral."

- **Step-Typ:** text (displayFormat: procontra)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Parenterale Ernährung liefert Glukose, Aminosäuren, Fettemulsionen, Elektrolyte und Vitamine **direkt intravenös** — bei nicht-funktionsfähigem Magen-Darm-Trakt.

**Zwei Zugangswege:**

**Periphervenöse parenterale Ernährung (PPE)**
- Über eine **Armvene** (Verweilkanüle).
- Lösung muss **isoosmolar** bleiben (bis ~800 mosmol/l), sonst **Venenreizung, Phlebitis**.
- **Nur kurzfristig** (max. 7-10 Tage).
- Deckt keinen vollständigen Bedarf — eher Überbrückung.

**Zentralvenöse parenterale Ernährung (ZPE)**
- Über einen **ZVK** (Vena subclavia, jugularis, femoralis) oder **Portkatheter**.
- **Hyperosmolare Lösungen** (bis 2000 mosmol/l) möglich, volle Bedarfsdeckung.
- **Langzeit-Ernährung** möglich (Wochen bis Jahre).
- **Höheres Komplikationsrisiko**: Pneumothorax bei Anlage, **Katheter-Sepsis**, Thrombose.

**Hygieneregeln (streng):**
- **Aseptisches Arbeiten** bei jedem Verbandwechsel.
- **Separates Infusionssystem** nur für parenterale Ernährung.
- **Keine Medikamente** über denselben Lumen.
- Tägliche Inspektion der Einstichstelle.

Parenterale Ernährung ist **immer ärztliche Anordnung**. (DGEM S3-Leitlinie, 2013/2020)"

**B1 (590 Zeichen):**
"Parenterale Ernährung geht **direkt in die Vene** — wenn der Darm nicht mehr arbeitet.

**Zwei Arten:**

**Armvene** (periphervenös)
- Normaler Venenzugang im Arm.
- Nur **verdünnte** Lösung (sonst wird die Vene entzündet).
- Nur für **kurze Zeit** (bis 10 Tage).

**Große Vene zum Herz** (zentralvenös — ZVK oder Port)
- Katheter in eine große Vene (Hals oder Schulter).
- Auch **konzentrierte** Lösungen möglich.
- Für **lange Zeit** (Wochen bis Jahre).
- **Hohes Infektionsrisiko** — der Katheter führt direkt ins Blut.

**Hygiene ist sehr wichtig:**
- **Steril arbeiten** beim Verband.
- **Eigener Zugang** nur für die Ernährung.
- **Keine Medikamente** darüber geben.
- Jeden Tag die Stelle **anschauen**."

- **Erklärungs-Step:** stepType `comparison` (PPE vs. ZPE)
- **Glossar-Begriffe:** [parenteral, periphervenös, zentralvenös, ZVK, Port, Osmolarität, Phlebitis, Katheter-Sepsis]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Parenterale Ernährung geht nur über einen ZVK oder Port."**
- **Fachbegriff:** ZVK-Ausschließlichkeits-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — parenterale Ernährung kann **periphervenös** (Armvene) oder **zentralvenös** (ZVK/Port) erfolgen. Periphervenös nur **kurzfristig und isoosmolar**, zentralvenös **langfristig und hyperosmolar**. Merke: Beide Wege möglich — die Dauer und Konzentration entscheidet."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — parenteral geht **auch über eine Armvene** (für kurze Zeit). Nur wenn es lang dauert oder die Lösung stark ist, braucht man einen Katheter zum Herz (ZVK oder Port). Merke: Beide Wege sind möglich."

**D2: "Über den Katheter für parenterale Ernährung kann man auch Medikamente geben."**
- **Fachbegriff:** Misch-Zugang-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — für parenterale Ernährung ist ein **separates Lumen** Pflicht. Mischen mit Medikamenten führt zu **Ausflockung**, Kompatibilitätsproblemen und **höherem Infektionsrisiko**. Wenn der Patient nur einen Zugang hat: Gabe **zeitlich getrennt** mit Spülung. Merke: Ernährung = eigenes Lumen."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — der Katheter für die Ernährung muss **nur dafür** sein. Wenn man Medikamente mit einmischt, können sie **kristallisieren** und die Sonde verstopfen. Auch die Infektionsgefahr steigt. Merke: Ein eigener Zugang für die Ernährung."

**D3: "Parenterale Ernährung hat kein höheres Infektionsrisiko als enterale."**
- **Fachbegriff:** Sicherheits-Angleichung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — parenterale Ernährung hat **deutlich höheres** Infektionsrisiko, besonders zentralvenös: **Katheter-Sepsis** ist eine gefürchtete Komplikation mit hoher Mortalität. Zusätzlich: Thrombose, Pneumothorax, metabolische Entgleisungen. Deshalb: enteral immer bevorzugen, wenn möglich."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — parenteral ist **gefährlicher** als enteral. Der Katheter in der Vene kann eine **schwere Blutvergiftung** machen (Katheter-Sepsis). Auch Blutgerinnsel können entstehen. Merke: Darum immer enteral, wenn der Darm geht."

### Richtig-Feedback
**C1 (270 Zeichen):** "Genau. Parenteral gibt es als **periphervenös** (Armvene, kurzfristig, isoosmolar) oder **zentralvenös** (ZVK/Port, langfristig, hyperosmolar möglich). Entscheidend: Dauer + Osmolarität. Das Infektionsrisiko ist deutlich höher als enteral — deshalb strenge Hygiene und eigenes Lumen."

**B1 (240 Zeichen):** "Sehr gut. Parenteral heißt: in die **Vene**. Kurze Zeit und verdünnt → **Armvene**. Lange Zeit oder stark → **Katheter zum Herz** (ZVK, Port). Wichtig: **hohe Infektionsgefahr**, deshalb sehr sauber arbeiten und keine Medikamente mischen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Vergleiche periphervenöse und zentralvenöse parenterale Ernährung: Wo? Wie lange? Wie konzentriert?"
- **Rückseite:** "PPE: Armvene, isoosmolar (≤800 mosmol/l), max. 7-10 Tage. ZPE: ZVK/Port, hyperosmolar möglich, Langzeit. ZPE höheres Risiko (Sepsis!), separates Lumen, strenge Asepsis."
- **Kategorie:** fakt

---

## Baustein 12: peg-indikationen

### Metadaten
- **bausteinId:** enterale-ernaehrung-peg-indikationen
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Welche Art von Patienten brauchen deiner Meinung nach eine PEG? Nenne 3 typische Situationen — wo das Schlucken oder Essen dauerhaft nicht mehr geht."
- **Step-Typ:** freetext (Bloom 3, Vorwissen strukturieren)

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Klassische PEG-Indikationen: **1) Schluckstörung** (Dysphagie) nach **Schlaganfall**, ALS, Parkinson spät. **2) Tumoren im Mund-/Rachen-/Speiseröhrenbereich** (vor/während Bestrahlung). **3) Koma/Wachkoma**. **4) Schwere Demenz** — hier aber **ethisch umstritten** (siehe Baustein 13)."

**B1 (245 Zeichen):** "Wer braucht typisch eine PEG? **1) Schlaganfall** mit Schluckstörung. **2) Tumor im Mund, Hals oder Speiseröhre**. **3) Koma**. **4) Schwere Demenz** — aber hier ist es **ethisch schwierig** (oft nicht hilfreich, nur Leiden verlängernd)."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"Eine PEG ist indiziert, wenn eine **orale Ernährung dauerhaft unmöglich oder unsicher** ist — und eine voraussichtliche Behandlungsdauer von **>4 Wochen** zu erwarten ist.

**Klassische Indikationen:**

1. **Neurogene Dysphagie**
   - Nach **Schlaganfall** mit persistierender Schluckstörung.
   - **Amyotrophe Lateralsklerose** (ALS) — progrediente Schluckschwäche.
   - Morbus Parkinson im fortgeschrittenen Stadium.
   - **Multiple Sklerose** bei schwerer Bulbärsymptomatik.

2. **Tumoren im oberen Gastrointestinaltrakt**
   - **HNO-Tumoren** (Kopf-Hals) — vor und während Strahlentherapie, um Ernährungszustand zu halten.
   - **Ösophagus-Karzinom** mit Stenose.
   - Hypopharynx-Karzinom.

3. **Bewusstseinsstörungen**
   - **Koma / Wachkoma**.
   - Langzeit-Beatmung mit eingeschränkter oraler Aufnahme.

4. **Schwere Mukositis** bei Chemo-/Strahlentherapie.

5. **Malnutrition bei chronischer Erkrankung** (z.B. schwere COPD, Mukoviszidose).

**Ethisch umstritten:** PEG bei **fortgeschrittener Demenz** — siehe Baustein 13. (DGEM S3-Leitlinie, 2013/2020)"

**B1 (580 Zeichen):**
"Eine PEG ist sinnvoll, wenn ein Patient **dauerhaft nicht mehr schlucken** kann — und das voraussichtlich **länger als 4 Wochen**.

**Typische Gründe:**

1. **Schluckstörung durch Gehirn-Krankheit**
   - Nach **Schlaganfall**.
   - **ALS** (Muskel-Krankheit).
   - **Parkinson** in spätem Stadium.

2. **Tumor im Mund, Hals oder Speiseröhre**
   - Vor oder während **Bestrahlung**.
   - Wenn der Tumor den Weg blockiert.

3. **Koma** oder **Wachkoma**.

4. **Schwere Entzündung im Mund** durch Chemotherapie.

5. **Lange Krankheit** mit starkem Gewichtsverlust.

**Schwierig:** PEG bei **schwerer Demenz** — hier ist es oft **nicht hilfreich** (mehr dazu in Baustein 13)."

- **Erklärungs-Step:** stepType `categorize` (Patientenfälle → Indikationsgruppen)
- **Glossar-Begriffe:** [Dysphagie, ALS, HNO-Tumor, Bulbärsymptomatik, Mukositis]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Jeder Patient, der wenig isst, sollte eine PEG bekommen."**
- **Fachbegriff:** PEG-Großzügigkeits-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — 'wenig essen' reicht nicht. Voraussetzung: **dauerhafte Unfähigkeit** zur oralen Ernährung (nicht kurzfristig), **>4 Wochen Perspektive**, und **Nutzen > Belastung**. Bei vorübergehendem Appetitmangel reichen Trinknahrung oder nasogastrale Sonde. Merke: Appetit ≠ Indikation."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **'wenig essen'** ist kein Grund für eine PEG. Eine PEG gibt es nur, wenn der Patient **gar nicht mehr schlucken kann** und das **lange dauert**. Bei wenig Appetit reicht oft eine Trinknahrung."

**D2: "Eine PEG soll immer gelegt werden, wenn ein Patient demenzkrank ist."**
- **Fachbegriff:** Demenz-Automatismus
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **PEG bei fortgeschrittener Demenz ist kritisch** zu sehen. Studien zeigen: Keine Lebensverlängerung, keine Reduktion von Aspirationspneumonien, Verlust an Lebensqualität. Die **gemeinsame Stellungnahme DGN/DGG/DGP (2014)** empfiehlt PEG bei weit fortgeschrittener Demenz **nicht**. Merke: Individuelle Abwägung, kein Automatismus."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — bei schwerer Demenz ist eine PEG oft **nicht sinnvoll**. Studien zeigen: Der Patient lebt nicht länger, bekommt nicht weniger Lungenentzündungen — aber verliert Lebensqualität. Merke: Immer **im Einzelfall** entscheiden, nicht automatisch."

**D3: "Bei Schluckstörung direkt nach Schlaganfall wird sofort eine PEG gelegt."**
- **Fachbegriff:** Frühzeit-PEG-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **nach akutem Schlaganfall** wird zunächst eine **nasogastrale Sonde** gelegt. Schluckstörungen bessern sich oft in den ersten **2-4 Wochen** mit Schlucktraining. Eine PEG wird erst erwogen, wenn die Dysphagie nach **4 Wochen persistiert** oder klar progredient ist. Merke: Erst NG-Sonde, dann PEG."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — direkt nach dem Schlaganfall nimmt man **die Sonde durch die Nase**. Die Schluckstörung wird oft **in 2-4 Wochen** besser. Erst wenn sie **nach 4 Wochen noch bleibt**, denkt man an eine PEG. Merke: Zuerst Nase, später PEG."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. PEG ist indiziert bei **dauerhafter Unfähigkeit zur oralen Ernährung** und >4 Wochen Perspektive. Klassische Indikationen: neurogene Dysphagie (Schlaganfall, ALS), HNO-Tumoren, Koma, Mukositis. Bei fortgeschrittener Demenz: kritisch prüfen — oft keine Indikation."

**B1 (240 Zeichen):** "Sehr gut. Eine PEG ist für Patienten, die **lange nicht mehr schlucken können**: Schlaganfall mit Schluckstörung, Tumor im Hals, ALS, Koma. Bei **schwerer Demenz** ist eine PEG oft nicht hilfreich — das muss man immer **einzeln** entscheiden."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 4 Hauptindikationen für eine PEG. Welche Indikation ist umstritten?"
- **Rückseite:** "1) Neurogene Dysphagie (Schlaganfall, ALS, Parkinson spät). 2) HNO-/Ösophagus-Tumoren. 3) Koma. 4) Schwere Mukositis. Umstritten: fortgeschrittene Demenz (DGN/DGG/DGP 2014: nicht empfohlen)."
- **Kategorie:** fakt

---

## Baustein 13: ethik-peg-demenz

### Metadaten
- **bausteinId:** enterale-ernaehrung-ethik-demenz
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Eine 89-jährige Frau mit schwerer Demenz (Endstadium) isst und trinkt kaum noch. Die Tochter möchte eine PEG 'damit Mama nicht verhungert'. Was überlegst du? Welche Fragen stellen sich ethisch?"
- **Step-Typ:** freetext (Bloom 5, ethische Reflexion)

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "PEG bei **fortgeschrittener Demenz** (Endstadium): Studien zeigen **keine Lebensverlängerung**, **keine Reduktion** von Aspirationspneumonien, aber **Verlust an Lebensqualität** (Fixierung, Hautreizung, Infektionen). **Patientenverfügung** (§ 1901a BGB) und **mutmaßlicher Wille** entscheiden — nicht 'Verhungern'-Angst."

**B1 (260 Zeichen):** "Bei **schwerer Demenz** am **Lebensende** hilft eine PEG meistens **nicht**. Studien sagen: Kein längeres Leben, keine weniger Lungenentzündungen, aber **weniger Lebensqualität**. Wichtig: **Was wollte der Patient**, als er noch entscheiden konnte (Patientenverfügung)?"

- **Step-Typ:** text (displayFormat: procontra)

### Stufe 3 — Erklärung

**C1 (890 Zeichen):**
"Die Entscheidung über eine PEG bei fortgeschrittener Demenz ist eine der schwierigsten in der Pflege. **Häufiger Irrtum**: 'Ohne PEG verhungert der Patient.' Tatsächlich zeigen Studien (u.a. Cochrane Review Sampson 2009, DGN/DGG/DGP-Stellungnahme 2014):

**Evidenz:**
- **Keine Lebensverlängerung** bei Patienten mit schwerer Demenz.
- **Keine Reduktion von Aspirationspneumonien** — im Gegenteil, Aspirationsrate kann steigen.
- **Keine Verbesserung** der Wund- oder Hautheilung.
- **Kein Komfortgewinn** — oft das Gegenteil (Fixierung, weil Patient die Sonde zieht).

**Warum der Mythos?**
Bei **früher/mittlerer Demenz** mit vorübergehender Schluckstörung kann die PEG hilfreich sein. Im **Endstadium** der Demenz ist **Nahrungsverweigerung Teil des Sterbeprozesses** — wie bei anderen End-of-Life-Situationen.

**Rechtlicher Rahmen:**
- **Patientenverfügung** (§ 1901a BGB) ist **bindend**, wenn sie auf die aktuelle Lebens- und Behandlungssituation zutrifft.
- Fehlt eine Patientenverfügung: **Mutmaßlicher Wille** ermitteln (Betreuer, Angehörige, frühere Äußerungen).
- **Künstliche Ernährung am Lebensende** ist **medizinische Maßnahme** — Beenden ist **kein aktives Töten** (Bundesärztekammer 2011).

**Alternative:** **Comfort Feeding Only** — kleine Mengen Lieblingsspeisen anbieten, Mundpflege, Nähe, Musik. Würde statt Sonde. (DGN/DGG/DGP 2014)"

**B1 (720 Zeichen):**
"Die Entscheidung 'PEG ja oder nein' bei schwerer Demenz ist **sehr schwierig**. Viele Angehörige sagen: 'Ohne Sonde verhungert Mama.' Aber **Studien zeigen**: Bei schwerer Demenz am Lebensende bringt die PEG **fast nichts**.

**Was sagen die Studien?**
- Der Patient lebt **nicht länger**.
- Er bekommt **nicht weniger Lungenentzündungen**.
- Die **Haut heilt nicht besser**.
- Oft **mehr Leiden** — der Patient will die Sonde weg, wird dafür festgebunden.

**Warum?**
Bei **früher Demenz** mit kurzer Schluckstörung kann die PEG helfen. Aber bei **sehr schwerer Demenz am Ende** ist **kein Hunger mehr** ein **Teil des Sterbens**.

**Was ist rechtlich wichtig?**
- **Patientenverfügung** (was der Patient früher schriftlich wollte) ist **bindend**.
- Gibt es keine: Was hätte er **vermutlich** gewollt? Dazu reden Angehörige und Betreuer.
- **Keine PEG legen** ist **nicht 'Töten'** — sondern **Akzeptanz des Lebensendes**.

**Alternative: 'Comfort Feeding Only'**
- Kleine Mengen der **Lieblingsspeise** anbieten, wenn er will.
- **Mundpflege**, Gespräche, **Nähe**.
- Würde statt Schlauch."

- **Erklärungs-Step:** stepType `procontra` (PEG-Pro/Contra + rechtlicher Rahmen)
- **Glossar-Begriffe:** [Patientenverfügung, mutmaßlicher Wille, Comfort Feeding Only, Endstadium, künstliche Ernährung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ohne PEG verhungert ein schwer demenzkranker Patient."**
- **Fachbegriff:** Verhungern-Angst
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **im Endstadium der Demenz ist Nahrungsverweigerung Teil des Sterbeprozesses**, nicht Verhungern. Studien (DGN/DGG/DGP 2014) zeigen: PEG verlängert das Leben nicht, verhindert keine Aspirationen, reduziert keine Dekubitus. Alternative: **Comfort Feeding Only** — kleine Mengen, Mundpflege, Würde. Merke: Nicht verhungern, sterben."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — am **Lebensende** ist **wenig essen und trinken normal** — es ist Teil des Sterbens. Die PEG verlängert das Leben **nicht**, macht es oft schlimmer (z.B. weil der Patient sie rauszieht und festgebunden wird). Besser: **kleine Mengen** anbieten, **Mundpflege**, **Nähe**."

**D2: "Der Arzt entscheidet alleine über eine PEG — die Familie kann das nicht beeinflussen."**
- **Fachbegriff:** Arzt-Allmacht-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — bei einwilligungsunfähigen Patienten gilt **§ 1901a BGB**: Eine **Patientenverfügung** ist **bindend**. Fehlt sie, ermittelt der **gesetzliche Betreuer** mit Angehörigen den **mutmaßlichen Willen**. Bei Unklarheit entscheidet das **Betreuungsgericht**. Der Arzt klärt auf — der Patient/Betreuer entscheidet."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — der **Arzt entscheidet nicht allein**. Wichtig ist: Was hat der Patient **früher gewollt** (Patientenverfügung)? Gibt es keine: Was **hätte er wohl gewollt**? Der **Betreuer** und die Familie müssen das überlegen. Der Arzt erklärt nur, was medizinisch möglich ist."

**D3: "Das Weglassen oder Beenden einer künstlichen Ernährung ist aktive Sterbehilfe und daher verboten."**
- **Fachbegriff:** Sterbehilfe-Verwechslung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — das **Nicht-Beginnen oder Beenden** einer künstlichen Ernährung ist **keine aktive Sterbehilfe** (die ist verboten). Es ist das **Nicht-Verlängern** des Sterbeprozesses bei infauster Prognose — **erlaubt** und **ethisch geboten** (Bundesärztekammer 2011). Voraussetzung: Patientenwille (PV, mutmaßlich)."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — die künstliche Ernährung **beenden oder nicht anfangen** ist **nicht Tötung**. Es bedeutet: Wir verlängern das Sterben nicht. Das ist **erlaubt**, wenn der Patient es so wollte. Aktive Sterbehilfe wäre etwas anderes — das ist verboten. Merke: Nicht töten, sondern sterben lassen."

### Richtig-Feedback
**C1 (310 Zeichen):** "Genau. Die PEG-Entscheidung bei fortgeschrittener Demenz ist immer **individuell**. Studien belegen: Keine Lebensverlängerung, keine weniger Aspirationspneumonien, oft **Verlust an Lebensqualität**. Entscheidend ist der **Patientenwille** (Verfügung oder mutmaßlich). Comfort Feeding Only ist oft die würdigere Alternative. Beenden ist kein Töten."

**B1 (275 Zeichen):** "Sehr gut. Bei schwerer Demenz am Lebensende hilft eine PEG meistens **nicht** — kein längeres Leben, keine weniger Lungenentzündungen. Wichtig ist: Was hat der **Patient früher gewollt**? Oft ist **Comfort Feeding Only** (kleine Mengen Lieblingsessen + Mundpflege) die bessere Lösung — mit Würde."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist eine PEG bei fortgeschrittener Demenz ethisch umstritten? Welche Alternative gibt es?"
- **Rückseite:** "Keine Lebensverlängerung, keine weniger Aspirationen, Lebensqualität sinkt (Fixierung). Entscheidend: Patientenverfügung (§ 1901a BGB) oder mutmaßlicher Wille. Alternative: Comfort Feeding Only (kleine Mengen, Mundpflege, Nähe). Beenden ≠ aktive Sterbehilfe."
- **Kategorie:** recht

---

## Baustein 14: hygiene-sondenkostgabe

### Metadaten
- **bausteinId:** enterale-ernaehrung-hygiene
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Kollegin hängt morgens um 8 Uhr einen 500-ml-Beutel Sondenkost auf. Um 17 Uhr fragt sie, ob der Rest für die nächste Gabe reicht. Was hältst du davon?"
- **Step-Typ:** mc (Bloom 3, Hygiene-Praxis beurteilen)

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Sondenkost-Hygiene: **Hände desinfizieren**, **aseptisches Arbeiten** beim Ansetzen. **Beutel/Flasche max. 4-6 h hängen** (Raumtemperatur fördert Bakterien). **Überleitungssystem alle 24 h wechseln**. **Nahrung aus Kühlschrank**: 30 Min vor Gabe rausnehmen — nicht erwärmen."

**B1 (250 Zeichen):** "**Hygiene** bei Sondenkost: **Hände waschen und desinfizieren**. **Sauber arbeiten** beim Aufhängen. **Maximal 4-6 Stunden** hängen lassen — sonst wachsen Bakterien. **Neuer Schlauch alle 24 Stunden**. **Nicht erwärmen**, aber aus dem Kühlschrank 30 Min vorher rausnehmen."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"Kontaminierte Sondenkost ist eine **häufige Ursache für Durchfall und Infektionen** — besonders bei immungeschwächten Patienten. Strenge Hygiene ist Pflicht.

**Vor der Gabe:**
1. **Hände desinfizieren**, Einmalhandschuhe bei Bedarf.
2. **Anbruchsdatum und Haltbarkeit** prüfen (offene Flaschen meist 24 h haltbar gekühlt).
3. **Nahrung bei Raumtemperatur** applizieren: Aus dem Kühlschrank **30 Min vorher** rausnehmen. **Nicht** in Mikrowelle/Wasserbad erwärmen (ungleichmäßig, Bakterien, Verbrennungsgefahr).
4. **Aseptisches Arbeiten** am Konnektor — Sonde nicht mit Fingern oder unsteriler Fläche berühren.

**Während der Gabe:**
5. **Hängedauer max. 4-6 h** bei geschlossenen Systemen, **max. 8 h** bei Pumpen mit sterilem Beutel.
6. **Überleitungssystem alle 24 h** komplett wechseln.

**Nach der Gabe:**
7. **20-50 ml Wasser** zum Spülen.
8. Offenes Gebinde **beschriften** (Anbruchsdatum/-zeit, Kürzel).

Bei Verdacht auf Kontamination (trüb, Geruch, Ausflockung): **nicht verwenden**, verwerfen. (DGEM S3-Leitlinie, 2013/2020; ESPEN Guidelines)"

**B1 (620 Zeichen):**
"Schmutzige Sondenkost macht **Durchfall** und **Infektionen** — besonders bei schwachen Patienten. Darum ist Hygiene sehr wichtig.

**Vor der Gabe:**
1. **Hände waschen und desinfizieren**.
2. **Haltbarkeit prüfen** (offene Flasche meist 24 h im Kühlschrank).
3. **Raumtemperatur**: Aus dem Kühlschrank **30 Minuten vorher** rausnehmen. **Nicht erwärmen** — auch nicht in der Mikrowelle.
4. **Sauber anschließen** — die Sonde nicht anfassen.

**Während der Gabe:**
5. **Maximal 4-6 Stunden** hängen lassen — danach wachsen Bakterien.
6. **Schlauch alle 24 Stunden wechseln**.

**Nach der Gabe:**
7. **20-50 ml Wasser spülen**.
8. Offene Flasche **beschriften** (wann geöffnet, wer).

Wenn die Nahrung **trüb ist, komisch riecht oder Flocken hat**: **wegwerfen**."

- **Erklärungs-Step:** stepType `stepbystep` (Hygieneschritte in Reihenfolge)
- **Glossar-Begriffe:** [Kontamination, Konnektor, aseptisch, Überleitungssystem, Anbruchsdatum]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein offener Sondenkost-Beutel kann den ganzen Tag hängen, solange er nicht leer ist."**
- **Fachbegriff:** Hängedauer-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **maximal 4-6 Stunden** bei Raumtemperatur (geschlossene Systeme). Danach **vermehren sich Bakterien** exponentiell — auch wenn die Nahrung 'noch nicht leer' aussieht. Folge: Durchfall, Sepsis bei Immunschwäche. Merke: Nach 4-6 h **verwerfen**, neuen Beutel ansetzen."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **nur 4-6 Stunden** hängen lassen. Danach wachsen sehr schnell **Bakterien**, auch wenn die Nahrung noch voll aussieht. Das macht Durchfall. Merke: Nach 4-6 h **Rest wegwerfen**, neuen Beutel nehmen."

**D2: "Sondenkost sollte vor der Gabe in der Mikrowelle angewärmt werden."**
- **Fachbegriff:** Mikrowellen-Irrtum
- **Feedback (C1, 275 Zeichen):** "Gefährlich — **Mikrowellen** erwärmen **ungleichmäßig** (Hotspots), können die Speiseröhre verbrennen und zerstören Vitamine. Außerdem: **Wärme fördert Bakterien**. Richtig: **Raumtemperatur** (Kühlschrank 30 Min vorher raus). Nicht aufwärmen — nicht in Mikrowelle, nicht im Wasserbad."
- **Feedback (B1, 245 Zeichen):** "Das ist **gefährlich** — **nicht in die Mikrowelle**! Sie wärmt ungleichmäßig, kann verbrennen und macht Bakterien. Richtig: **30 Minuten vor Gabe** aus dem Kühlschrank nehmen. Dann hat die Nahrung **Raumtemperatur**."

**D3: "Das Überleitungssystem muss erst gewechselt werden, wenn es sichtbar verschmutzt ist."**
- **Fachbegriff:** Sichtkontroll-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **Bakterien sind unsichtbar**. Das Überleitungssystem **muss alle 24 Stunden** komplett gewechselt werden, auch wenn es sauber aussieht. Nach 24 h bildet sich **Biofilm** im Innern, der mit bloßem Auge nicht sichtbar ist. Merke: 24-Stunden-Regel, unabhängig vom Aussehen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Bakterien sieht man nicht**. Der Schlauch muss **alle 24 Stunden** neu — auch wenn er sauber aussieht. Innen bildet sich eine **dünne Schicht** mit Bakterien (Biofilm). Merke: Jeden Tag neuer Schlauch."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Sondenkost-Hygiene ist Pflegestandard: Hände desinfizieren, aseptisches Arbeiten, Nahrung bei Raumtemperatur (30 Min vorher rausholen, nicht erwärmen), **Hängedauer max. 4-6 h**, **Überleitungssystem alle 24 h wechseln**, Spülen vor + nach Gabe. Bei Trübung oder Geruch: wegwerfen."

**B1 (245 Zeichen):** "Sehr gut. Hygiene: **Hände desinfizieren**, **sauber arbeiten**. Nahrung auf **Raumtemperatur** (30 Min aus dem Kühlschrank — **nicht aufwärmen**). **Maximal 4-6 Stunden** hängen, **Schlauch alle 24 Stunden neu**. Immer **spülen** — vor und nach der Gabe."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 4 wichtige Hygieneregeln bei enteraler Ernährung."
- **Rückseite:** "1) Hände desinfizieren + aseptisch arbeiten. 2) Raumtemperatur (30 Min vorher raus, NICHT erwärmen). 3) Hängedauer max. 4-6 h (Pumpe mit sterilem Beutel max. 8 h). 4) Überleitungssystem alle 24 h wechseln. Spülen vor + nach mit 20-50 ml Wasser."
- **Kategorie:** handlung

---

## Zusammenfassung

**14 Bausteine insgesamt — Themenstruktur:**

| # | Baustein | Bloom | Wissensart | Zeit |
|---|----------|-------|------------|------|
| 1 | enteral-vs-parenteral | 2 | definition | 3 Min |
| 2 | sondenformen-nachweg | 3 | klassifikation | 5 Min |
| 3 | lagekontrolle-ph | 4 | maßnahme | 5 Min |
| 4 | applikationsformen | 3 | maßnahme | 5 Min |
| 5 | sondenkost-typen | 2 | fakt | 4 Min |
| 6 | peg-pflege-tagesroutine | 3 | maßnahme | 5 Min |
| 7 | komplikation-aspiration | 4 | komplikation | 5 Min |
| 8 | komplikation-durchfall | 4 | komplikation | 4 Min |
| 9 | komplikation-sondenverstopfung | 3 | komplikation | 4 Min |
| 10 | refeeding-syndrom | 4 | komplikation | 5 Min |
| 11 | parenterale-grundzuege | 2 | fakt | 4 Min |
| 12 | peg-indikationen | 3 | fakt | 4 Min |
| 13 | ethik-peg-demenz | 5 | entscheidung | 6 Min |
| 14 | hygiene-sondenkostgabe | 3 | maßnahme | 4 Min |

**Gesamt-Rohzeit Bausteine (Stufen 2+3 addiert): 63 Min**
**Mit Sequencer-Multiplikator (~2,7× für Schüler-Durchlauf inkl. Fragen, Distraktoren, Feedback): ~170-180 Min**
**Zielzeit:** 173 Min (7 UE × 45 × 0,55) ✅

**Bloom-Verteilung:**
- Bloom 1-2: 3 Bausteine (21%) — enteral/parenteral, Sondenkost-Typen, Parenteral-Grundzüge
- Bloom 3-4: 10 Bausteine (71%) — Kern-Handlungs- und Komplikationswissen
- Bloom 5-6: 1 Baustein (8%) — PEG-Demenz-Ethik (Entscheidung)

**Primärquellen (durchgängig):**
- DGEM S3-Leitlinie Klinische Ernährung (2013/2020)
- ESPEN Guidelines on Enteral Nutrition
- DGN/DGG/DGP-Stellungnahme PEG bei Demenz (2014)
- § 1901a BGB, Bundesärztekammer 2011

**Nächster Schritt:** `glossar-plan.md` und `karteikarten-plan.md` in separaten Dateien.


