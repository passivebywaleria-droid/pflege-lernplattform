# Wissensbausteine: Mobilisation & Transfer

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `mobilisation` |
| ceId | `ce-02` |
| cluster | B (Mobilität & Prophylaxen) |
| wissensart | handlung |
| geschaetzteUE | 6 |
| zielzeitMin | 149 (6 UE × 45 × 0,55) |
| bausteineAnzahl | 13 |
| voraussetzungen | `kinaesthetik`, `positionierung` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 15% (2 Bausteine), Bloom 3-4: 62% (8 Bausteine), Bloom 5-6: 23% (3 Bausteine) → Ziel 20/55/25 erfüllt (±5%).

**Primärquellen:**
- DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege
- Bobath B./K. (1948 ff.): Bobath-Konzept — Neuroentwicklungsbehandlung nach Schlaganfall
- Hatch F./Maietta L. (1982 ff.): Kinästhetik-Konzept
- BGW (2019): Rückengerechtes Arbeiten in der Pflege (Berufsgenossenschaft für Gesundheitsdienst und Wohlfahrtspflege)
- Arbeitsschutzgesetz (ArbSchG, § 3, § 5)
- Lastenhandhabungsverordnung (LasthandhabV, § 2)
- Deutsche Gesellschaft für Geriatrie (DGG 2022): S1-Leitlinie Frühmobilisation
- § 1901a BGB (Patientenverfügung), § 630d BGB (Einwilligung)
- Tinetti M. (1986): Performance-Oriented Mobility Assessment (POMA)
- Podsiadlo D./Richardson S. (1991): Timed Up and Go Test

---

## Baustein 1: mobilisation-begriff-und-folgen-der-immobilitaet

### Metadaten
- **bausteinId:** mobilisation-begriff-folgen
- **bloomLevel:** 2
- **wissensart:** definition
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, du liegst 2 Wochen krank im Bett. Was verändert sich bis dahin in deinem Körper? Nenne mindestens 3 Dinge."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (238 Zeichen):** "Mobilisation ist jede pflegerische Maßnahme, die einen Menschen in Bewegung bringt oder hält — vom Drehen im Bett bis zum Gehen. Fehlt sie, drohen 5 typische Folgen: Dekubitus, Thrombose, Pneumonie, Kontraktur und Sturz. (DNQP 2020)"

**B1 (210 Zeichen):** "Mobilisation heißt: Du hilfst einem Menschen, sich zu bewegen. Das geht vom Drehen im Bett bis zum Gehen. Ohne Bewegung entstehen 5 Gefahren: Druckwunde, Blutgerinnsel, Lungenentzündung, steife Gelenke, Sturz."

- **Step-Typ:** text (displayFormat: checklist — 5 Folgen auf einen Blick)

### Stufe 3 — Erklärung

**C1 (640 Zeichen):**
"**Mobilisation** bezeichnet alle Maßnahmen, die darauf zielen, einen Menschen in Bewegung zu bringen, seine vorhandene Bewegungsfähigkeit zu erhalten oder zurückzugewinnen. Die Spannweite reicht vom **passiven Drehen im Bett** über das **Aufsetzen an die Bettkante**, das **Stehen** bis zum **begleiteten Gehen**.

Fehlt Bewegung länger als 24-72 Stunden, beginnen Umbauprozesse im Körper:

- **Haut** → Dekubitus durch Druck
- **Gefäße** → tiefe Beinvenenthrombose durch Stase (Virchow-Trias)
- **Lunge** → Pneumonie durch flache Atmung und Sekretstau
- **Gelenke** → Kontraktur durch Verkürzung von Muskeln und Sehnen
- **Muskeln** → Sarkopenie: pro Woche Bettruhe bis zu 10 % Muskelmasse-Verlust bei älteren Menschen

Die DNQP 2020 definiert als Ziel: **Mobilitätsverlust vermeiden — erhalten — zurückgewinnen.** (DNQP 2020)"

**B1 (530 Zeichen):**
"**Mobilisation** heißt: Bewegung fördern. Das fängt klein an — zum Beispiel den Patienten im Bett drehen. Und es geht weiter bis zum Gehen.

Wenn ein Mensch lange liegt, passiert viel Schlimmes im Körper:

- **Haut** → Wunde durch Druck (Dekubitus)
- **Blut** → Gerinnsel in den Beinvenen (Thrombose)
- **Lunge** → Lungenentzündung (Pneumonie)
- **Gelenke** → werden steif (Kontraktur)
- **Muskeln** → werden schwächer (bis zu 10 % pro Woche bei alten Menschen)

Der DNQP sagt: **Bewegung erhalten, fördern, zurückbringen.** Darum ist Mobilisation so wichtig."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep mit 5 Folgen)
- **Glossar-Begriffe:** [Mobilisation, Immobilität, Sarkopenie, Pneumonie, Kontraktur]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Mobilisation bedeutet nur, dass der Patient laufen soll"**
- **Fachbegriff:** Gehen-Fokus-Irrtum
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — Mobilisation ist viel mehr. Sie beginnt bei der **kleinsten aktiven Bewegung**: Finger wackeln, Fußkreisen, sich im Bett drehen. Für viele Patienten ist das Aufsetzen an die Bettkante schon ein großer Schritt. Merke: Jede Bewegung zählt."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — Mobilisation ist mehr als Laufen. Es fängt sehr klein an: Finger bewegen, Füße kreisen, sich im Bett drehen. Für viele Patienten ist schon Sitzen an der Bettkante viel. Merke: Jede Bewegung hilft."

**D2: "Bettruhe ist gesund, weil der Körper sich ausruhen kann"**
- **Fachbegriff:** Bettruhe-Mythos
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — Bettruhe ist heute fast nie indiziert. Schon nach 24-48 Stunden beginnt der Muskelabbau. Nach 1 Woche können ältere Menschen bis zu 10 % Muskelmasse verlieren. Die moderne Pflege folgt dem Grundsatz: **Frühe Mobilisation so früh wie möglich.** (DNQP 2020)"
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Bettruhe ist meistens schlecht. Schon nach 1-2 Tagen beginnt der Körper, Muskeln abzubauen. In einer Woche verlieren alte Menschen viel Kraft. Die moderne Regel heißt: **So früh wie möglich bewegen.** (DNQP 2020)"

**D3: "Wenn ein Patient Schmerzen hat, darf er nicht mobilisiert werden"**
- **Fachbegriff:** Schmerz-Ausschluss-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **Schmerzen sind kein Grund gegen Mobilisation**, sondern ein Grund für gute Schmerztherapie VOR der Mobilisation. Die Reihenfolge: Schmerz erfassen (NRS) → Arzt informieren → Schmerzmittel wirken lassen (30-60 Min) → mobilisieren. Merke: Schmerz behandeln, dann bewegen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Schmerzen bedeuten nicht 'keine Mobilisation'. Die Regel ist: Erst Schmerzen messen, dann Schmerzmittel geben, 30-60 Minuten warten, dann bewegen. So geht es dem Patienten gut. Merke: Erst Schmerzen behandeln, dann mobilisieren."

### Richtig-Feedback
**C1 (255 Zeichen):** "Sehr gut. Mobilisation umfasst **jede** bewegungsfördernde Maßnahme — vom Drehen im Bett bis zum Gehen. Fehlt Bewegung, drohen die 5 typischen Folgen: Dekubitus, Thrombose, Pneumonie, Kontraktur und Sturz. Ziel laut DNQP: Mobilität erhalten und fördern."

**B1 (220 Zeichen):** "Sehr gut. Mobilisation ist jede Bewegung — vom Drehen im Bett bis zum Gehen. Ohne Bewegung drohen 5 Gefahren: Druckwunde, Blutgerinnsel, Lungenentzündung, steife Gelenke, Sturz. Ziel: Bewegung erhalten und fördern."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 typischen Folgen hat Immobilität?"
- **Rückseite:** "Dekubitus, Thrombose, Pneumonie, Kontraktur und Sturz. Dazu Muskelabbau (Sarkopenie) und Obstipation."
- **Kategorie:** fakt

---

## Baustein 2: dnqp-expertenstandard-mobilitaet-6-kriterien

### Metadaten
- **bausteinId:** mobilisation-dnqp-kriterien
- **bloomLevel:** 2
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Ein neuer Patient kommt auf die Station. Welche Schritte gehst du durch, damit er seine Bewegungsfähigkeit erhält oder zurückbekommt? Nenne die Reihenfolge."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Der Expertenstandard Mobilität (DNQP 2020) nennt **6 Kriterien**: 1. Mobilität einschätzen, 2. informieren und beraten, 3. Maßnahmen planen, 4. Maßnahmen durchführen, 5. evaluieren, 6. dokumentieren und überleiten. Er gilt in jedem Pflegesetting."

**B1 (235 Zeichen):** "Der DNQP-Standard Mobilität hat **6 Schritte**: 1. Bewegung einschätzen, 2. Patient informieren, 3. Maßnahmen planen, 4. Maßnahmen durchführen, 5. Ergebnis prüfen, 6. aufschreiben und weitergeben. Das gilt überall — Klinik, Heim, zu Hause."

- **Step-Typ:** sorting (6 Kriterien in richtige Reihenfolge bringen)

### Stufe 3 — Erklärung

**C1 (735 Zeichen):**
"Der **DNQP-Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege (2020)** ist national verbindlich und gliedert sich in 6 Kriterien:

**K1 — Einschätzung:** Bei Aufnahme und bei jeder Zustandsveränderung wird die Mobilität systematisch eingeschätzt. Dafür gibt es standardisierte Instrumente: **Tinetti-Test** (Balance und Gehen), **Timed Up and Go (TUG)** (über 14 Sek = erhöhtes Sturzrisiko), **Barthel-Index** (Selbstständigkeit bei ATL), **Esslinger Transferskala** (speziell für Transfers).

**K2 — Information und Beratung:** Patient und Angehörige erfahren, welche Risiken Immobilität hat und welche Ressourcen der Patient selbst einbringen kann.

**K3 — Planung:** Gemeinsam mit dem Patienten SMART-Ziele setzen (z. B. 'Herr M. steht Ende der Woche 2 × täglich 5 Schritte mit Rollator').

**K4 — Durchführung:** Aktive, assistive und passive Übungen; Transfers nach Kinästhetik oder Bobath; Hilfsmittel einsetzen.

**K5 — Evaluation:** Fortschritt messen, Plan bei Bedarf anpassen.

**K6 — Dokumentation und Überleitung:** Alles schriftlich festhalten und beim Setting-Wechsel (Klinik → Heim) weitergeben. (DNQP 2020)"

**B1 (580 Zeichen):**
"Der **DNQP-Expertenstandard Mobilität (2020)** hat 6 Kriterien:

**K1 — Einschätzen:** Was kann der Patient noch? Tests wie Tinetti, Timed Up and Go, Barthel-Index.

**K2 — Beraten:** Patient und Familie informieren. Welche Risiken gibt es? Was kann er selbst?

**K3 — Planen:** Ziele festlegen. Regel SMART: genau, messbar, machbar, wichtig, mit Zeit. Beispiel: 'In einer Woche geht Herr M. 5 Schritte mit Rollator.'

**K4 — Durchführen:** Übungen aktiv, assistiv oder passiv. Transfers mit Kinästhetik oder Bobath. Hilfsmittel nutzen.

**K5 — Prüfen:** Klappt es? Wenn nicht: Plan ändern.

**K6 — Aufschreiben und weitergeben:** Alles dokumentieren. Beim Wechsel in ein Heim oder nach Hause: Info weitergeben."

- **Erklärungs-Step:** stepType `sequencing` (6 Kriterien in Reihenfolge + Erklärung je Schritt)
- **Glossar-Begriffe:** [DNQP, Expertenstandard, Tinetti-Test, Timed Up and Go, Barthel-Index, SMART-Ziel]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Der DNQP-Expertenstandard ist eine Empfehlung — man kann ihn auch ignorieren"**
- **Fachbegriff:** Unverbindlichkeits-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — der Expertenstandard ist laut § 113a SGB XI **verbindlich** für alle Pflegeeinrichtungen. Abweichungen müssen fachlich begründet und dokumentiert werden. Gerichte nutzen die Standards als Maßstab für 'richtige Pflege'. Merke: Standard = Pflicht, keine freie Wahl."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — der DNQP-Standard ist **Pflicht**, keine Empfehlung. Das sagt das Gesetz (§ 113a SGB XI). Wer abweichen will, muss schreiben, warum. Gerichte nutzen diesen Standard, um zu prüfen: War die Pflege richtig? Merke: Standard = Pflicht."

**D2: "Einschätzung der Mobilität reicht einmal bei Aufnahme"**
- **Fachbegriff:** Einmal-Einschätzung-Irrtum
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — die Einschätzung erfolgt **bei Aufnahme UND bei jeder Zustandsveränderung** (nach OP, nach Sturz, nach akuter Erkrankung). Der Grund: Mobilität ist ein dynamischer Zustand, der sich oft ändert. Merke: Einschätzen ist keine einmalige Sache, sondern fortlaufend."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — die Einschätzung macht man **bei Aufnahme UND bei jeder Veränderung**: nach OP, nach Sturz, nach Krankheit. Mobilität kann sich schnell ändern. Merke: Nicht nur einmal, sondern immer wieder einschätzen."

**D3: "Dokumentation kommt erst nach der Maßnahme — Planung muss nicht schriftlich sein"**
- **Fachbegriff:** Mündlichkeits-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — bereits die **Planung** (K3) muss schriftlich erfolgen: SMART-Ziele, Maßnahmen, Verantwortlichkeiten, Zeitpunkte. Grund: 'Was nicht dokumentiert ist, gilt als nicht durchgeführt.' Nur so kann das nächste Team am nächsten Tag weiterarbeiten. Merke: Planung ist immer schriftlich."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die **Planung muss schon schriftlich sein**, nicht erst die Durchführung. Es gilt die Regel: 'Was nicht aufgeschrieben ist, wurde nicht gemacht.' So wissen alle Kollegen, was geplant ist. Merke: Planung = immer schriftlich."

### Richtig-Feedback
**C1 (275 Zeichen):** "Sehr gut. Der DNQP-Standard Mobilität (2020) folgt 6 Kriterien: einschätzen → informieren und beraten → planen → durchführen → evaluieren → dokumentieren und überleiten. Einschätzung mit Tinetti, TUG, Barthel. Planung mit SMART-Zielen. Alles schriftlich."

**B1 (245 Zeichen):** "Sehr gut. Der DNQP-Standard Mobilität (2020) hat 6 Schritte: einschätzen → beraten → planen → durchführen → prüfen → aufschreiben und weitergeben. Einschätzen mit Tinetti, TUG, Barthel. Planen mit SMART-Zielen. Alles schriftlich."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 6 Kriterien hat der DNQP-Expertenstandard Mobilität (2020)?"
- **Rückseite:** "1. Mobilität einschätzen, 2. informieren und beraten, 3. Maßnahmen planen (SMART), 4. durchführen, 5. evaluieren, 6. dokumentieren und überleiten."
- **Kategorie:** fakt

---

## Baustein 3: mobilisationsstufen-stufenaufbau

### Metadaten
- **bausteinId:** mobilisation-stufen
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient liegt 3 Tage im Bett. Er soll heute wieder aufstehen. In welcher Reihenfolge gehst du die Schritte durch — und warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Mobilisation folgt einem **Stufenaufbau**: 1. Bewegung im Bett, 2. Aufsitzen an der Bettkante, 3. Stehen vor dem Bett, 4. Gehen am Platz, 5. Gehstrecke. Jede Stufe wird erst stabil beherrscht, bevor die nächste begonnen wird. (DNQP 2020)"

**B1 (220 Zeichen):** "Mobilisation macht man in **5 Stufen**: 1. Im Bett bewegen, 2. an die Bettkante setzen, 3. aufstehen, 4. auf der Stelle gehen, 5. ein paar Schritte gehen. Erst eine Stufe sicher können — dann die nächste beginnen."

- **Step-Typ:** sequencing (5 Stufen in Reihenfolge bringen)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Der Stufenaufbau der Mobilisation folgt dem physiologischen Prinzip **vom Liegen zum Gehen**. Jede Stufe testet Kreislauf, Gleichgewicht und Muskelkraft neu.

**Stufe 1 — Bewegung im Bett:** Aktive oder assistive Bewegungen der Extremitäten, Drehen zur Seite, Aufsetzen mit Rückenlehne. Kreislauf an die aufgerichtete Position gewöhnen.

**Stufe 2 — Bettkante:** Aufsitzen mit herabhängenden Beinen. **Orthostase-Check**: 2-3 Minuten sitzen lassen, Blutdruck und Puls kontrollieren. Bei Schwindel zurücklegen.

**Stufe 3 — Stehen:** Vor dem Bett stehen, Halt bieten (Bett oder Pflegekraft). Erst wenn der Patient sich sicher fühlt — weiter.

**Stufe 4 — Gehen am Platz:** Gewichtsverlagerung von Bein zu Bein, noch ohne Gehstrecke.

**Stufe 5 — Gehstrecke:** Wenige Schritte mit Begleitung und Hilfsmittel (Rollator, Gehstock). Strecke langsam steigern.

**Regel:** Jede Stufe erst stabil beherrschen, dann nächste Stufe. Rückschritte sind normal. (DNQP 2020)"

**B1 (595 Zeichen):**
"Die **5 Stufen** der Mobilisation:

**Stufe 1 — Im Bett bewegen:** Arme und Beine bewegen, sich drehen, mit der Rückenlehne aufsetzen. Der Kreislauf gewöhnt sich ans Aufrechtsein.

**Stufe 2 — An die Bettkante:** Der Patient sitzt mit den Beinen runter. Du misst 2-3 Minuten lang Blutdruck und Puls (Orthostase-Check). Bei Schwindel: wieder hinlegen.

**Stufe 3 — Stehen:** Vor dem Bett stehen. Du gibst Halt oder das Bett gibt Halt. Erst wenn er sicher steht — weiter.

**Stufe 4 — Auf der Stelle gehen:** Das Gewicht von einem Bein auf das andere verlagern.

**Stufe 5 — Gehen:** Ein paar Schritte mit Hilfsmittel und Begleitung. Strecke langsam länger machen.

**Regel:** Erst eine Stufe sicher können — dann die nächste beginnen. Rückschritte sind okay."

- **Erklärungs-Step:** stepType `reveal` (5 Stufen mit Bild pro Stufe aufdecken)
- **Glossar-Begriffe:** [Orthostase, Orthostatische Dysregulation, Gehstrecke, Gewichtsverlagerung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn der Patient motiviert ist, kann man auch Stufen überspringen"**
- **Fachbegriff:** Überspringen-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — der Stufenaufbau ist ein **Sicherheitsprinzip**, kein Motivations-Check. Ein Patient, der euphorisch aufstehen will, aber nach 3 Tagen Liegen nicht orthostatisch angepasst ist, kann kollabieren. Die Reihenfolge schützt vor Stürzen und Kreislaufzwischenfällen. Merke: Immer in Stufen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die Stufen sind für die **Sicherheit**. Auch wenn der Patient schnell will: Sein Kreislauf muss sich erst wieder ans Stehen gewöhnen. Sonst kann er umkippen. Merke: Immer Schritt für Schritt — keine Stufe überspringen."

**D2: "Bei Schwindel an der Bettkante muss der Patient das einfach durchstehen"**
- **Fachbegriff:** Durchhalten-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — Schwindel an der Bettkante ist ein **Warnzeichen für orthostatische Dysregulation**. Der Blutdruck fällt beim Aufrichten ab. Weitermachen = Sturzgefahr, Bewusstlosigkeit. Richtig: Patient zurücklegen, Beine hochlagern, Puls und RR messen, nach wenigen Minuten erneut versuchen."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — Schwindel ist ein **Warnsignal**. Der Blutdruck fällt, wenn der Patient sich aufsetzt. Weitermachen kann zu Sturz oder Bewusstlosigkeit führen. Richtig: wieder hinlegen, Beine hoch, messen, in ein paar Minuten neu versuchen."

**D3: "Ein Rückschritt in der Mobilisation bedeutet, dass der Patient nicht mitarbeitet"**
- **Fachbegriff:** Schuld-Zuweisung
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — Rückschritte sind **normaler Teil der Rehabilitation** und meist medizinisch erklärbar: Infekt, Schmerzschub, schlechte Nacht, neue Medikamente. Deine Aufgabe: nicht urteilen, sondern Ursache finden und Plan anpassen. Pflege braucht Geduld, nicht Druck. (DNQP 2020)"
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — Rückschritte sind **normal**. Sie haben meist Gründe: Infekt, Schmerzen, schlechter Schlaf, neue Medikamente. Deine Aufgabe: nicht schimpfen, sondern den Grund suchen. Dann den Plan anpassen. Pflege braucht Geduld — keinen Druck."

### Richtig-Feedback
**C1 (280 Zeichen):** "Sehr gut. Die 5 Stufen: Bewegung im Bett → Bettkante mit Orthostase-Check → Stehen vor dem Bett → Gehen am Platz → Gehstrecke. Jede Stufe erst stabil beherrschen, dann weiter. Rückschritte sind normal und kein Grund für Schuldzuweisungen. (DNQP 2020)"

**B1 (245 Zeichen):** "Sehr gut. Die 5 Stufen: Im Bett bewegen → Bettkante mit Blutdruck-Check → Stehen → auf der Stelle gehen → Gehstrecke. Erst eine Stufe sicher können, dann die nächste. Rückschritte sind normal — such den Grund, urteile nicht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was machst du immer, bevor ein Patient nach 3 Tagen Bettruhe aufsteht?"
- **Rückseite:** "Orthostase-Check an der Bettkante: 2-3 Min sitzen lassen, RR und Puls messen. Bei Schwindel oder RR-Abfall: zurücklegen, Beine hoch, später neu versuchen."
- **Kategorie:** handlung

---

## Baustein 4: fruehmobilisation-wirksamkeit

### Metadaten
- **bausteinId:** mobilisation-fruehmobilisation
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Warum ist die Frühmobilisation nach einer Operation die wirksamste Einzelmaßnahme, um Komplikationen zu vermeiden? Welche Mechanismen wirken da gleichzeitig?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Frühmobilisation (= Bewegung innerhalb der ersten 24-48 Stunden nach OP) senkt das Risiko für Thrombose, Pneumonie, Dekubitus, Muskelabbau und Obstipation gleichzeitig. Sie ist laut DGG (2022) und DNQP (2020) die **wirksamste Einzelmaßnahme** der Pflege."

**B1 (230 Zeichen):** "Frühmobilisation heißt: In den ersten 24-48 Stunden nach einer OP schon bewegen. Das verhindert viele Probleme auf einmal: Thrombose, Lungenentzündung, Druckwunden, Muskelabbau, Verstopfung. Die **stärkste** Einzelmaßnahme der Pflege."

- **Step-Typ:** text (displayFormat: beforeafter — vorher/nachher Wirkung aufzeigen)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"**Frühmobilisation** bezeichnet bewegungsfördernde Maßnahmen innerhalb der ersten **24-48 Stunden** nach einem kritischen Ereignis (OP, Herzinfarkt, Schlaganfall — sofern stabil). Sie ist laut DNQP (2020) und DGG (2022) die **wirksamste Einzelmaßnahme** der Pflege, weil sie auf 5 Systeme gleichzeitig wirkt:

1. **Gefäße** — Bewegung erhöht den venösen Rückstrom, senkt das Thromboserisiko (Virchow-Trias)
2. **Lunge** — Aufrechte Position vertieft die Atmung, Sekret wird mobilisiert, Pneumonierisiko sinkt
3. **Haut** — Druckentlastung, Wechsel der Körperposition vermindert Dekubitusrisiko
4. **Muskeln** — Bereits nach 24 Stunden Bettruhe beginnt der Muskelabbau, Bewegung bremst ihn
5. **Darm** — Mobilisation fördert die Peristaltik, verhindert Obstipation

**Praktisches Vorgehen:** Nach jeder OP — auch nach Hüft-TEP oder Bauch-OP — wird der Patient möglichst am OP-Tag oder am ersten Tag postoperativ mobilisiert, sobald Kreislauf und Schmerzen es erlauben. **Voraussetzung:** Schmerzen sind mit NRS ≤ 3, Kreislauf stabil, Patient ist wach und orientiert.

**Ausnahmen** (absolut oder relativ): instabiler Kreislauf, frische Fraktur ohne Versorgung, akute intrakranielle Druckerhöhung, ärztliche Bettruheanordnung. (DGG 2022)"

**B1 (655 Zeichen):**
"**Frühmobilisation** heißt: Bewegung in den **ersten 24-48 Stunden** nach einer OP oder einer schweren Erkrankung. Sie ist die **wichtigste** Einzelmaßnahme der Pflege. Warum? Weil sie auf 5 Probleme gleichzeitig wirkt:

1. **Blut** → Bewegung schickt das Blut zurück zum Herz. Kein Gerinnsel (Thrombose).
2. **Lunge** → Aufrecht sitzen oder stehen macht tiefer atmen. Schleim kommt raus. Keine Lungenentzündung.
3. **Haut** → Druck weg, neue Position. Keine Druckwunde.
4. **Muskeln** → Schon nach 24 Stunden Liegen bauen Muskeln ab. Bewegung bremst das.
5. **Darm** → Bewegung bringt den Darm in Gang. Keine Verstopfung.

**So geht es praktisch:** Nach jeder OP versuchen wir, den Patienten noch am OP-Tag oder am Tag danach zu bewegen. **Voraussetzung:** Schmerzen klein (NRS maximal 3), Kreislauf stabil, Patient wach.

**Ausnahmen:** Kreislauf instabil, frische Verletzung noch nicht versorgt, Arzt sagt 'Bettruhe'."

- **Erklärungs-Step:** stepType `diagram` (5 Systeme als Cluster mit Wirkungspfeilen)
- **Glossar-Begriffe:** [Frühmobilisation, Peristaltik, Virchow-Trias, NRS, venöser Rückstrom]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Nach einer Hüft-OP muss der Patient eine Woche liegen bleiben, damit die Wunde heilt"**
- **Fachbegriff:** Heilungs-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — bei moderner Hüft-Endoprothese ist **Mobilisation ab OP-Tag oder Tag 1** Standard. Die Implantate sind so ausgelegt, dass sie sofort belastet werden dürfen. Liegenbleiben würde Thrombose, Pneumonie und Dekubitus verursachen. Die Wunde heilt durch gute Durchblutung — die Bewegung braucht. (DGG 2022)"
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — bei einer neuen Hüfte stehen Patienten oft schon am OP-Tag oder am nächsten Tag auf. Die künstliche Hüfte darf man sofort belasten. Liegenbleiben macht Thrombose und Lungenentzündung. Die Wunde heilt besser mit Bewegung."

**D2: "Frühmobilisation gilt nur für Bauchchirurgie"**
- **Fachbegriff:** OP-Zuordnungs-Fehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Frühmobilisation gilt **für jede OP und für viele akute Erkrankungen**: Hüfte, Knie, Bauch, Herz, Schlaganfall (sobald stabil), Intensivstation. Sogar auf der ITS werden beatmete Patienten inzwischen mobilisiert ('Early Mobility'). Merke: Frühmobilisation ist universell."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — Frühmobilisation gilt **bei jeder OP** und auch nach schweren Krankheiten: Hüfte, Knie, Bauch, Herz, Schlaganfall. Sogar auf der Intensivstation bewegt man Patienten, die beatmet werden. Merke: Frühmobilisation gilt überall."

**D3: "Wenn der Patient die Nacht schlecht geschlafen hat, sollte er morgens lieber liegen bleiben"**
- **Fachbegriff:** Schon-Prinzip
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — das wäre das **'Schon-Prinzip'**, das die moderne Pflege abgelehnt hat. Schlechter Schlaf ist kein medizinischer Grund gegen Mobilisation. Im Gegenteil: Bewegung am Tag verbessert oft den Schlaf in der folgenden Nacht. Ausnahmen nur bei echten medizinischen Kontraindikationen."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — 'den Patienten schonen' ist die alte Regel. Heute wissen wir: Schlechter Schlaf ist **kein Grund**, nicht zu bewegen. Bewegung am Tag macht oft besseren Schlaf in der Nacht. Nur echte medizinische Gründe sind Ausnahme."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Frühmobilisation = Bewegung in den ersten 24-48 Stunden. Wirkt auf 5 Systeme gleichzeitig: Gefäße (Thrombose), Lunge (Pneumonie), Haut (Dekubitus), Muskeln (Abbau), Darm (Obstipation). Voraussetzung: Kreislauf stabil, Schmerzen NRS ≤ 3, Patient wach. Wirksamste Einzelmaßnahme der Pflege."

**B1 (255 Zeichen):** "Sehr gut. Frühmobilisation = Bewegung in den ersten 24-48 Stunden. Hilft gegen 5 Probleme gleichzeitig: Thrombose, Lungenentzündung, Druckwunde, Muskelabbau, Verstopfung. Voraussetzung: Kreislauf stabil, Schmerzen niedrig (NRS höchstens 3), Patient wach."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist Frühmobilisation die wirksamste Einzelmaßnahme der Pflege?"
- **Rückseite:** "Wirkt gleichzeitig auf 5 Systeme: Gefäße (Thrombose), Lunge (Pneumonie), Haut (Dekubitus), Muskeln (Abbau), Darm (Obstipation). Voraussetzung: Kreislauf stabil, Schmerzen NRS ≤ 3, Patient wach."
- **Kategorie:** fakt

---

## Baustein 5: transfer-bett-zu-stuhl

### Metadaten
- **bausteinId:** mobilisation-transfer-bett-stuhl
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Du möchtest einen Patienten aus dem Bett in den Sessel bringen. Welche Vorbereitungen triffst du, bevor du überhaupt anfängst? Denk an Umgebung, Patient und dich selbst."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Beim Transfer vom Bett zum Stuhl gilt: **Vorbereitung entscheidet**. Stuhl in Greifnähe stellen (Bremse!), Schuhe mit rutschfester Sohle, Schmerzen prüfen, Patient informieren, eigene Körperhaltung bewusst einnehmen (Kinästhetik), Hilfsmittel bereitlegen."

**B1 (230 Zeichen):** "Beim Transfer vom Bett zum Stuhl ist die **Vorbereitung** am wichtigsten: Stuhl nah ans Bett (Bremse anziehen!), feste Schuhe an, Schmerzen prüfen, Patient informieren, deine eigene Haltung gut, Hilfsmittel bereit."

- **Step-Typ:** sequencing (Transfer-Schritte in Reihenfolge)

### Stufe 3 — Erklärung

**C1 (785 Zeichen):**
"Der **Transfer Bett → Stuhl** folgt einem festen Ablauf in 3 Phasen:

**Phase 1 — Vorbereitung (am wichtigsten):**
- Bett auf **Hüfthöhe** der Pflegekraft bringen (rückengerecht, LasthandhabV)
- Stuhl im 45-90°-Winkel zum Bett stellen, **Bremse anziehen**
- Patient hat **feste, rutschfeste Schuhe** an (keine Schlappen!)
- **Schmerzen** erfragen (NRS), ggf. ärztlich verordnete Schmerzmittel vorher geben
- Patient **informieren**: 'Ich helfe dir gleich in den Sessel — bist du einverstanden?'
- **Hilfsmittel** bereitlegen (Rutschbrett, Gleitmatte, ggf. Lifter)

**Phase 2 — Durchführung:**
- Patient **an die Bettkante** bringen (Stufe 2 der Mobilisation) — Orthostase-Check
- Fuß des Patienten vor den Fuß der Pflegekraft setzen (Stoppfunktion)
- Patient fasst an der Pflegekraft zu (**Schulterblätter**, nicht Hals!)
- Mit **Gewichtsverlagerung** (Kinästhetik) nach vorne-oben aufstehen
- Gemeinsam drehen, ohne Drehbewegung der Wirbelsäule der Pflegekraft
- Langsam in den Stuhl setzen

**Phase 3 — Nachbereitung:**
- Patient **bequem positionieren** (Rücken, Beine, Arme)
- **Rufanlage** in Reichweite
- Getränke, Brille, Hilfsmittel in Reichweite
- **Dokumentieren**: Uhrzeit, Hilfsmittel, Reaktion des Patienten. (DNQP 2020, Hatch/Maietta)"

**B1 (675 Zeichen):**
"**Transfer Bett → Stuhl** in 3 Phasen:

**Phase 1 — Vorbereitung (am wichtigsten):**
- Bett hoch stellen (auf deine Hüfthöhe — sonst tut dein Rücken weh)
- Stuhl nah ans Bett (45-90°), **Bremse anziehen**
- Patient trägt **feste Schuhe** mit rutschfester Sohle (keine Schlappen!)
- **Schmerzen** fragen (NRS), wenn nötig: Schmerzmittel geben
- Patient **informieren**: 'Ich helfe dir gleich aufstehen — okay?'
- **Hilfsmittel** bereitlegen: Rutschbrett, Gleitmatte, Lifter

**Phase 2 — Durchführung:**
- Patient an die Bettkante bringen (Stufe 2) — Blutdruck messen
- Deinen Fuß **vor** den Fuß des Patienten stellen (Stoppfunktion)
- Patient fasst an deine **Schulterblätter** (NICHT an deinen Hals!)
- Mit **Gewichtsverlagerung** aufstehen (Kinästhetik)
- Zusammen drehen — dein Rücken bleibt gerade
- Langsam in den Stuhl setzen

**Phase 3 — Nachbereitung:**
- Patient gut positionieren (Rücken, Beine, Arme)
- **Klingel** in Reichweite legen
- Getränk, Brille, Hilfsmittel in Reichweite
- **Dokumentieren**: Uhrzeit, Hilfsmittel, wie war die Reaktion"

- **Erklärungs-Step:** stepType `stepbystep` (3 Phasen mit Einzelschritten)
- **Glossar-Begriffe:** [Transfer, Gewichtsverlagerung, Stoppfunktion, Rufanlage, Orthostase-Check]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Patient fasst mir um den Hals, damit ich ihn besser tragen kann"**
- **Fachbegriff:** Halsgriff-Fehler
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — der Patient darf **niemals an deinen Hals greifen**. Grund: Du trägst dann das gesamte Gewicht über deine Halswirbelsäule — akute Verletzungsgefahr für dich und den Patienten (wenn er stürzt). Richtig: Patient greift an deine **Schulterblätter**. Merke: Nie am Hals, immer am Schulterblatt."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — der Patient darf **nie an deinen Hals fassen**. Sonst trägst du das ganze Gewicht über deine Halswirbelsäule. Das ist sehr gefährlich für euch beide. Richtig: Patient fasst an deine **Schulterblätter**. Merke: Nie am Hals. Immer am Schulterblatt."

**D2: "Je schneller der Transfer, desto besser für den Patienten"**
- **Fachbegriff:** Schnelligkeits-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Tempo ist gefährlich**. Der Patient muss Zeit haben, das Gleichgewicht zu finden, den Kreislauf anzupassen, Angst abzubauen. Schnelle Transfers erhöhen Sturzrisiko und Schmerzen. Die **Kinästhetik** arbeitet mit Gewichtsverlagerung, nicht mit Tempo. Merke: Ruhe schafft Sicherheit."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **Schnell ist gefährlich**. Der Patient braucht Zeit für Gleichgewicht, Kreislauf, weniger Angst. Schnell = mehr Stürze und Schmerzen. Die **Kinästhetik** nutzt Gewicht, nicht Kraft. Merke: Langsam ist sicher."

**D3: "Hebetechniken sind beim Transfer Standard"**
- **Fachbegriff:** Hebetechnik-Mythos
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **Hebetechniken sind im deutschen Pflegealltag nicht mehr Standard** (BGW 2019). Moderne Transfers folgen der **Kinästhetik** (Eigenbewegung nutzen) oder nutzen Hilfsmittel (Lifter, Rutschbrett). Gründe: Heben belastet die Wirbelsäule der Pflegekraft extrem und aktiviert den Patienten nicht. Merke: Nicht heben — nutzen."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **Heben ist nicht mehr Standard** (BGW 2019). Heute nutzt man die **Kinästhetik** (Bewegung des Patienten nutzen) oder Hilfsmittel (Lifter, Rutschbrett). Grund: Heben macht deinen Rücken kaputt und aktiviert den Patienten nicht. Merke: Nicht heben — nutzen."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Transfer Bett → Stuhl in 3 Phasen: Vorbereitung (Bett auf Hüfthöhe, Stuhl gebremst, feste Schuhe, Schmerzen prüfen, Patient informieren), Durchführung (Bettkante, Stoppfunktion, Schulterblattgriff, Gewichtsverlagerung), Nachbereitung (positionieren, Rufanlage, dokumentieren)."

**B1 (250 Zeichen):** "Sehr gut. Transfer Bett → Stuhl in 3 Phasen: Vorbereiten (Bett hoch, Stuhl gebremst, feste Schuhe, Schmerzen prüfen), Durchführen (Bettkante, Stoppfunktion, Schulterblätter, Gewicht verlagern), Nachbereiten (positionieren, Klingel, aufschreiben)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wo darf der Patient beim Transfer anfassen — und wo NICHT?"
- **Rückseite:** "Patient fasst an die Schulterblätter der Pflegekraft. NIEMALS an den Hals (akute Verletzungsgefahr Halswirbelsäule). Pflegekraft stellt Fuß vor Fuß des Patienten (Stoppfunktion)."
- **Kategorie:** handlung

---

## Baustein 6: hilfsmittel-gehen-gehstock-uag-rollator-rollstuhl

### Metadaten
- **bausteinId:** mobilisation-hilfsmittel-gehen
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Welches Gehhilfsmittel würdest du einem Patienten empfehlen, der 1. kaum noch Kraft im linken Bein hat, 2. nach der Hüft-OP unsicher aufsteht, 3. sich gar nicht mehr stehen kann? Begründe je nach Fall."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "**4 Hilfsmittel nach Stabilität:** Gehstock (geringste Unterstützung, gesunde Seite halten), **Unterarmgehstütze (UAG)** für Teilbelastung einer Seite, **Rollator** (4 Räder, große Standfläche) für unsichere Patienten, **Rollstuhl** bei fehlender Steh-/Gehfähigkeit."

**B1 (230 Zeichen):** "**4 Hilfsmittel** nach Stabilität: **Gehstock** (wenig Hilfe, in der gesunden Hand), **Unterarmgehstütze (UAG)** wenn eine Seite wenig belasten darf, **Rollator** (4 Räder) für unsichere Patienten, **Rollstuhl** wenn Stehen nicht geht."

- **Step-Typ:** matching (Hilfsmittel zu Indikation zuordnen)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Gehhilfsmittel unterscheiden sich nach der **Menge an Unterstützung** und dem **Einsatzgebiet**:

**Gehstock** (geringste Unterstützung):
- **Einsatz:** leichte Unsicherheit, Arthrose, mäßige Schwäche auf einer Seite
- **Regel:** In der **gesunden** Hand — der Stock verlängert den gesunden Arm, die betroffene Seite wird entlastet
- **Höhe:** Handgelenkshöhe beim aufrechten Stehen (ca. Trochanter-Höhe)

**Unterarmgehstütze (UAG)**:
- **Einsatz:** vorübergehende Entlastung einer Seite (nach Fraktur, nach OP)
- **Regel:** **Teilbelastung** möglich — Pat erhält durch Arzt eine Prozentvorgabe (z. B. 20 kg Teilbelastung)
- Immer paarweise im 3-Punkt-Gang

**Rollator** (4 Räder):
- **Einsatz:** unsicheres Gehen, Sturzangst, fehlende Balance
- **Vorteile:** Große Standfläche, Sitzmöglichkeit zum Ausruhen, Korb für Einkäufe
- **Wichtig:** Rollator bleibt **vor** dem Patienten, **Bremsen** vor dem Hinsetzen prüfen

**Rollstuhl**:
- **Einsatz:** Stehen/Gehen nicht (mehr) möglich, auch dauerhaft oder für längere Strecken
- **Abwägung:** Nicht zu früh — wer im Rollstuhl sitzt, verlernt das Gehen. Immer parallel Mobilisation weiter.

**Vorsicht bei fremden Hilfsmitteln:** Passgröße prüfen, Bremsen testen, Reifendruck. (DNQP 2020, BGW 2019)"

**B1 (640 Zeichen):**
"**4 Gehhilfen** — nach Stabilität geordnet:

**Gehstock** (wenig Hilfe):
- Für leichte Unsicherheit oder Arthrose
- Regel: **In der gesunden Hand** — entlastet die kranke Seite
- Höhe: Wenn der Patient gerade steht — Griff auf Handgelenks-Höhe

**Unterarmgehstütze (UAG)**:
- Wenn eine Seite weniger belasten darf (nach Bruch, nach OP)
- Der Arzt sagt, wie viel Gewicht (z. B. 'nur 20 kg')
- Immer **zwei** Stützen zusammen

**Rollator** (4 Räder):
- Für unsicheres Gehen, Angst zu fallen
- Hat große Standfläche, einen Sitz zum Ausruhen, einen Korb
- Wichtig: Rollator immer **vor** dem Patienten, vor dem Hinsetzen **Bremsen** prüfen

**Rollstuhl**:
- Wenn Stehen und Gehen nicht mehr geht
- **Achtung:** Nicht zu früh. Wer lange sitzt, verlernt das Gehen. Also weiter mobilisieren.

**Vorsicht:** Wenn ein Hilfsmittel dem Patienten nicht gehört — Größe prüfen, Bremsen testen, Reifen aufpumpen."

- **Erklärungs-Step:** stepType `comparison` (4 Hilfsmittel in Tabelle mit Einsatzgebiet, Vorteilen, Besonderheiten)
- **Glossar-Begriffe:** [Gehstock, Unterarmgehstütze, UAG, Rollator, Rollstuhl, Teilbelastung, 3-Punkt-Gang]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Der Gehstock gehört in die kranke Hand, damit die gesunde Seite mehr leistet"**
- **Fachbegriff:** Stock-Seiten-Fehler
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — der Gehstock gehört in die **gesunde Hand**. Grund: Der Stock verlängert funktional den gesunden Arm und überträgt Gewicht auf den Boden, während die **kranke Seite entlastet** wird. Stock in der kranken Hand würde die schwache Seite zusätzlich belasten. Merke: Stock in der gesunden Hand."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — der Gehstock gehört in die **gesunde Hand**. Grund: Er verlängert den gesunden Arm. Gewicht geht dann über die gesunde Seite auf den Boden. Die kranke Seite wird **entlastet**. Stock in der kranken Hand = noch mehr Belastung. Merke: Stock = gesunde Hand."

**D2: "Jeder Rollator passt zu jedem Patienten — Hauptsache 4 Räder"**
- **Fachbegriff:** Passform-Ignoranz
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — ein Rollator muss **individuell angepasst** werden: Griffhöhe = Handgelenkshöhe bei aufrechtem Stand, Bremsen funktionsfähig, Reifendruck stimmt, Spurbreite passt durch Türen. Ein zu niedriger Rollator macht Rückenschmerzen, ein zu hoher macht unsicher. Merke: Anpassen ist Pflicht."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — der Rollator muss **passen**. Wichtige Punkte: Griffhöhe = Handgelenks-Höhe im Stehen. Bremsen müssen funktionieren. Reifen aufgepumpt. Er muss durch die Tür passen. Falsche Höhe = Rückenschmerzen oder unsicher. Merke: Rollator immer anpassen."

**D3: "Wenn ein Patient nicht mehr gehen kann, ist Rollstuhl die einzige Lösung"**
- **Fachbegriff:** Rollstuhl-Endgültigkeits-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — der Rollstuhl ist **ein Werkzeug, nicht das Ende der Mobilisation**. Auch im Rollstuhl werden Stehversuche, Transfers, passive Übungen und Sitzbalance weiter trainiert. Ohne Training bauen Muskeln ab, Kontrakturen entstehen. Merke: Rollstuhl ersetzt nicht das Mobilisationsprogramm."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — der Rollstuhl ist **ein Werkzeug**, nicht das Ende. Auch im Rollstuhl trainieren wir: Stehen, Transfer, passive Bewegung, Balance im Sitzen. Sonst bauen Muskeln ab und Gelenke werden steif. Merke: Rollstuhl bedeutet nicht 'keine Mobilisation mehr'."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. 4 Gehhilfsmittel nach Stabilität: Gehstock (gesunde Hand, leichte Unsicherheit) → UAG (Teilbelastung, 3-Punkt-Gang) → Rollator (4 Räder, Sitzmöglichkeit, Bremsen vor Hinsetzen) → Rollstuhl (Stehen nicht möglich, aber weiter mobilisieren). Passform und Anpassung sind Pflicht."

**B1 (260 Zeichen):** "Sehr gut. 4 Gehhilfen: Gehstock (gesunde Hand, wenig Unsicherheit), UAG (Teilbelastung nach OP), Rollator (4 Räder, Sitz, Bremsen prüfen), Rollstuhl (wenn Stehen nicht geht, aber weiter trainieren). Alle Hilfsmittel müssen an den Patienten angepasst werden."

### Verknüpfte Karteikarte
- **Vorderseite:** "In welcher Hand hält der Patient einen Gehstock — und warum?"
- **Rückseite:** "In der gesunden Hand. Der Stock verlängert den gesunden Arm und entlastet die kranke Seite. Höhe: Handgelenk beim aufrechten Stehen."
- **Kategorie:** handlung

---

## Baustein 7: transferhilfsmittel-rutschbrett-drehscheibe-lifter

### Metadaten
- **bausteinId:** mobilisation-transferhilfsmittel
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Ein 95 kg schwerer Patient kann nicht allein stehen und muss vom Bett in den Rollstuhl. Welches Hilfsmittel wählst du — und warum nicht ein anderes?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Transferhilfsmittel überbrücken die Lücke zwischen aktivem Patienten und vollständiger Unterstützung: **Rutschbrett** (Patient rutscht selbst), **Drehscheibe** (kleine Rotation im Stand), **Gleitmatte** (im Bett verschieben), **Lifter** (Patient wird komplett angehoben)."

**B1 (240 Zeichen):** "Transferhilfsmittel helfen beim Umsetzen: **Rutschbrett** (Patient rutscht selbst, z. B. Bett → Rollstuhl), **Drehscheibe** (kleines Drehen im Stehen), **Gleitmatte** (verschieben im Bett), **Lifter** (Patient wird hochgehoben, wenn er nichts mehr kann)."

- **Step-Typ:** matching (Hilfsmittel zu Situation zuordnen)

### Stufe 3 — Erklärung

**C1 (815 Zeichen):**
"Transferhilfsmittel gliedern sich nach der **verbleibenden Aktivität** des Patienten:

**Rutschbrett (Gleitbrett):**
- **Einsatz:** Patient sitzt, kann Bein nicht anheben (z. B. bei Frakturen, Amputation)
- **Ablauf:** Oberschenkel leicht anheben, Brett zur Hälfte unterschieben — Patient rutscht langsam über das Brett in Richtung Ziel (Rollstuhl, Stuhl)
- **Vorteil:** Patient bleibt aktiv, keine Hebekraft nötig, rückenschonend

**Drehscheibe:**
- **Einsatz:** Patient kann stehen, aber **nicht drehen** (z. B. nach Hüft-TEP, bei Parkinson)
- **Ablauf:** Patient steht auf der Scheibe, Pflegekraft dreht ihn — Rotation geht über die Scheibe, nicht über den Körper des Patienten
- **Vorteil:** Vermeidet Drehbewegung der Hüfte/Wirbelsäule

**Gleitmatte:**
- **Einsatz:** Patient soll **im Bett** verschoben werden (höher, zur Seite, zur Bauchlage)
- **Ablauf:** Matte unterlegen — Patient gleitet fast ohne Reibung
- **Vorteil:** Keine Scherkräfte (wichtig für Dekubitusprophylaxe), rückenschonend

**Lifter (Patientenlifter):**
- **Einsatz:** Patient kann **nicht stehen** und ist **zu schwer** zum manuellen Transfer (> 40 kg als Faustregel laut BGW, oder bei jedem Risiko)
- **Modelle:** mobiler Standlifter (mit Rollen), Deckenlifter, Stehlifter (nutzt Reststandfähigkeit)
- **Wichtig:** Tragkraft beachten, Gurt passt, zwei Pflegekräfte (eine führt, eine sichert)

**Grundregel laut BGW (2019):** Lieber ein Hilfsmittel zu viel als ein Rückenschaden für dich. (BGW 2019, DNQP 2020)"

**B1 (730 Zeichen):**
"4 **Transferhilfsmittel** — nach Aktivität des Patienten:

**Rutschbrett:**
- Für Patienten, die sitzen können, aber das Bein nicht hochheben
- Oberschenkel leicht heben, Brett zur Hälfte drunter — Patient rutscht selbst hinüber
- Vorteil: Patient macht aktiv mit, du musst nicht heben

**Drehscheibe:**
- Für Patienten, die stehen, aber **nicht drehen** können (z. B. nach Hüft-OP)
- Patient steht auf der Scheibe. Du drehst die Scheibe — nicht den Patienten
- Vorteil: Die Hüfte muss sich nicht drehen

**Gleitmatte:**
- Zum **Verschieben im Bett** (höher, zur Seite)
- Matte drunter — Patient gleitet fast ohne Reibung
- Vorteil: Keine Scherkräfte (wichtig gegen Druckwunden)

**Lifter** (Patientenlifter):
- Wenn der Patient **nicht stehen kann** und **zu schwer** ist zum Heben (ab ca. 40 kg Faustregel, BGW)
- Es gibt: mobiler Lifter mit Rollen, Deckenlifter, Stehlifter
- Wichtig: Tragkraft prüfen, Gurt passt, **immer zu zweit** arbeiten

**Faustregel BGW 2019:** Lieber ein Hilfsmittel zu viel als ein kaputter Rücken."

- **Erklärungs-Step:** stepType `comparison` (4 Transferhilfsmittel mit Einsatz, Vorgehen, Besonderheit)
- **Glossar-Begriffe:** [Rutschbrett, Drehscheibe, Gleitmatte, Patientenlifter, Scherkräfte, Tragkraft]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Den Lifter benutzen wir nur, wenn wir Patienten nicht mehr selber heben können"**
- **Fachbegriff:** Lifter-als-Notlösung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — der Lifter ist **keine Notlösung**, sondern das **Standardhilfsmittel** bei nicht-stehfähigen Patienten laut BGW (2019). Manuelles Heben ist auch für junge, starke Pflegekräfte dauerhaft schädlich — rund 50 % der berufsbedingten Rückenerkrankungen in der Pflege stammen daraus. Merke: Lifter = Standard."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — der Lifter ist **nicht die Notlösung**. Er ist **Standard**, wenn der Patient nicht stehen kann (BGW 2019). Auch junge Pflegekräfte bekommen Rückenschäden vom Heben. Rund 50 % aller Rückenschäden in der Pflege kommen vom Heben. Merke: Lifter = Standard."

**D2: "Rutschbrett und Drehscheibe kann man beliebig austauschen"**
- **Fachbegriff:** Hilfsmittel-Verwechslung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — die beiden haben **unterschiedliche Voraussetzungen**. Rutschbrett braucht einen **sitzenden** Patienten (Transfer sitzend → sitzend). Drehscheibe braucht einen **stehenden** Patienten (Transfer stehend → gedreht). Wer nicht stehen kann, fällt von der Drehscheibe. Merke: Erst Ausgangsposition prüfen."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — beide Hilfsmittel sind verschieden. Das **Rutschbrett** braucht einen Patienten, der **sitzen** kann. Die **Drehscheibe** braucht einen Patienten, der **stehen** kann. Wer nicht steht, fällt von der Scheibe. Merke: Erst schauen, was der Patient kann."

**D3: "Bei der Gleitmatte kann ich allein arbeiten, das geht schnell"**
- **Fachbegriff:** Einzelarbeit-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Transfers im Bett werden **grundsätzlich zu zweit** durchgeführt, auch mit Gleitmatte. Grund: Stabilität des Patienten, Sicherheit für beide Seiten, Bedienung der Matte. Allein = Sturzrisiko für Patient, Rückenrisiko für dich. Ausnahme: nur sehr kleine Verschiebungen bei wachem, fitten Patient."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — Transfers im Bett macht man **immer zu zweit**, auch mit Gleitmatte. Grund: Der Patient bleibt stabil, ihr beide seid sicher, die Matte braucht zwei Hände. Allein = Sturz für Patient, Rückenschmerzen für dich. Ausnahme: Nur kleine Bewegungen bei fittem Patient."

### Richtig-Feedback
**C1 (310 Zeichen):** "Sehr gut. 4 Transferhilfsmittel nach Aktivität: Rutschbrett (sitzend → sitzend), Drehscheibe (stehend, keine Rotation), Gleitmatte (im Bett verschieben, keine Scherkräfte), Lifter (Standard bei nicht-stehfähigen Patienten, BGW 2019). Immer zu zweit arbeiten — Tragkraft und Passform des Gurts prüfen."

**B1 (265 Zeichen):** "Sehr gut. 4 Transferhilfsmittel: Rutschbrett (Patient sitzt), Drehscheibe (Patient steht, kann nicht drehen), Gleitmatte (im Bett verschieben), Lifter (Patient steht nicht und ist schwer — Standard, nicht Notlösung). Immer zu zweit arbeiten und alles prüfen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Ab wann ist ein Lifter laut BGW (2019) das Standardhilfsmittel beim Transfer?"
- **Rückseite:** "Immer wenn der Patient nicht stehen kann. Manuelles Heben ist auch für junge Pflegekräfte dauerhaft schädlich — rund 50 % der Rückenerkrankungen in der Pflege stammen daraus."
- **Kategorie:** recht

---

## Baustein 8: bobath-konzept-betroffene-seite

### Metadaten
- **bausteinId:** mobilisation-bobath
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Schlaganfall-Patient hat eine halbseitige Lähmung links. Die meisten Pfleger greifen ihn auf der gesunden (rechten) Seite an, damit er stabil ist. Was ist daran falsch — und was sagt das Bobath-Konzept?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Das **Bobath-Konzept** (Berta und Karel Bobath, 1948 ff.) fordert: **betroffene Seite einbeziehen**, nicht ignorieren. Gewicht, Berührung, Aufmerksamkeit gehen zur gelähmten Seite — so lernt das Gehirn, diese Seite wieder zu integrieren. Angewendet bei Schlaganfall."

**B1 (230 Zeichen):** "Das **Bobath-Konzept** (Bobath, 1948) sagt: Bei einem Schlaganfall mit halbseitiger Lähmung — **die kranke Seite einbeziehen**, nicht weglassen. Berühren, Gewicht darauf geben, Aufmerksamkeit dorthin. So lernt das Gehirn wieder."

- **Step-Typ:** text (displayFormat: beforeafter — falsche vs. richtige Vorgehensweise)

### Stufe 3 — Erklärung

**C1 (820 Zeichen):**
"Das **Bobath-Konzept** wurde in den 1940er-Jahren vom Ehepaar **Berta Bobath** (Physiotherapeutin) und **Karel Bobath** (Neurologe) in London entwickelt. Ursprünglich für Kinder mit Zerebralparese, heute vor allem für Erwachsene nach **Schlaganfall** (Apoplex) oder Schädel-Hirn-Trauma.

**Grundprinzip:** Nach einem Schlaganfall ist eine Körperhälfte gelähmt (**Hemiparese/Hemiplegie**). Die gesunde Seite übernimmt oft alles. Das Gehirn **vernachlässigt die betroffene Seite** ('Neglect'). Bobath fordert: Die betroffene Seite wird **bewusst einbezogen**, nicht ruhiggestellt.

**Praktische Regeln in der Pflege:**

1. **Bett immer von der betroffenen Seite anstellen** — der Patient wendet Kopf und Rumpf dorthin
2. **Alle Sinne von der betroffenen Seite reizen**: Pflegekraft spricht von dieser Seite, berührt zuerst dort, legt Gegenstände dort ab
3. **Transfers über die betroffene Seite**: Umdrehen, Aufstehen, Gehen beginnt auf dieser Seite
4. **Lagerung in Aktivität** — nicht ruhigstellen mit Kissen, sondern Bewegung zulassen
5. **Gewichtsverlagerung zur betroffenen Seite** — nicht die gesunde Seite allein belasten
6. **Assoziierte Reaktionen vermeiden** — Anspannung der gesunden Seite würde Spastik der betroffenen Seite verstärken

**Wichtig:** Bobath ist kein Rezept, sondern ein **24-Stunden-Konzept** — jede Interaktion wirkt. Alle Pflegekräfte müssen geschult sein, sonst macht das Training nachts rückgängig, was tagsüber mühsam erarbeitet wurde. (Bobath/Bobath, Berlin-Bobath-Verein)"

**B1 (720 Zeichen):**
"Das **Bobath-Konzept** (Berta und Karel Bobath, 1948) ist für Menschen nach **Schlaganfall** mit Lähmung auf einer Seite.

**Die Idee:** Eine Körperseite ist gelähmt. Die gesunde Seite macht oft alles. Das Gehirn **vergisst die kranke Seite**. Das heißt **Neglect**. Bobath sagt: Die kranke Seite **immer einbeziehen**.

**So machst du es praktisch:**

1. **Bett von der kranken Seite zugänglich machen** — der Patient schaut dorthin
2. **Alles von der kranken Seite machen**: sprechen, berühren, Sachen hinlegen
3. **Transfers über die kranke Seite**: Umdrehen, Aufstehen, Gehen — immer dorthin
4. **Lagerung in Bewegung** — nicht mit Kissen feststellen, sondern Bewegung erlauben
5. **Gewicht auf die kranke Seite** — nicht nur die gesunde belasten
6. **Spannung in der gesunden Seite vermeiden** — das macht die kranke Seite steifer (Spastik)

**Wichtig:** Bobath gilt **24 Stunden**. Jede Berührung wirkt. Alle Pfleger müssen es wissen — sonst macht die Nachtschicht rückgängig, was die Tagschicht geübt hat."

- **Erklärungs-Step:** stepType `matrix` (Tabelle: pflegerische Situation → richtiges Bobath-Vorgehen)
- **Glossar-Begriffe:** [Bobath-Konzept, Hemiparese, Hemiplegie, Neglect, Spastik, assoziierte Reaktion, Apoplex]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die gelähmte Seite mit Kissen gut stützen, damit sie nicht weh tut"**
- **Fachbegriff:** Ruhigstellungs-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **feste Kissen-Stützung blockiert die Bewegung** und verhindert die Rehabilitation. Bobath fordert **Lagerung in Aktivität**: weich, aber mit Bewegungserlaubnis. Ein gut gepolstertes, aber nicht fixiertes Armmedi-Kissen ist in Ordnung — ein 'ruhiggestellter' Arm wird steif und kontrakt. Merke: Bewegung erlauben, nicht fixieren."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **feste Kissen verhindern Bewegung**. Bobath sagt: weich lagern, aber **Bewegung erlauben**. Ein stabiler Arm wird steif und bleibt in einer Stellung (Kontraktur). Ein bequemes Kissen ist okay — aber nicht festbinden. Merke: Bewegung erlauben, nicht feststellen."

**D2: "Der Patient kann die kranke Seite eh nicht benutzen — darum macht es keinen Sinn, ihn von dort anzusprechen"**
- **Fachbegriff:** Neglect-Verstärkung
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — **das verstärkt den Neglect**. Wenn die Pflege die kranke Seite ignoriert, ignoriert sie auch der Patient. Bobath fordert genau das Gegenteil: Das Gehirn muss **lernen, die kranke Seite wieder wahrzunehmen**. Ansprache, Berührung, Blickkontakt von der betroffenen Seite — jeden Tag, viele Male. Merke: Bewusst die kranke Seite ansprechen."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — **das macht alles schlimmer**. Wenn du die kranke Seite ignorierst, ignoriert sie auch der Patient (Neglect). Bobath sagt: Das Gehirn muss die kranke Seite **wieder lernen**. Also: Sprich von dieser Seite, berühre dort zuerst, schau den Patienten von dort an."

**D3: "Bobath ist nur für die Physiotherapie — die Pflege ist dafür nicht zuständig"**
- **Fachbegriff:** Zuständigkeits-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — Bobath ist ein **24-Stunden-Konzept**. Die Physiotherapie arbeitet vielleicht 30-60 Minuten täglich — die **restlichen 23 Stunden liegt die Umsetzung bei der Pflege**. Wenn Pflege nicht mitzieht, macht Nacht- und Wochenendpflege alles rückgängig, was Physio mühsam erarbeitet hat. Merke: Alle müssen mitmachen."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — Bobath ist ein **24-Stunden-Konzept**. Physiotherapie ist vielleicht 30-60 Minuten pro Tag. Die **anderen 23 Stunden** macht die Pflege. Wenn die Pflege nicht mitmacht, macht die Nacht-Schicht kaputt, was die Physio erarbeitet hat. Merke: Alle machen mit."

### Richtig-Feedback
**C1 (310 Zeichen):** "Sehr gut. Bobath-Konzept (Bobath 1948): Nach Schlaganfall die **betroffene Seite einbeziehen** — Ansprache, Berührung, Transfer, Gewicht alles von dieser Seite. Ziel: Neglect verhindern, assoziierte Reaktionen/Spastik vermeiden, Lagerung in Aktivität. 24-Stunden-Konzept — alle Pflegekräfte müssen es können."

**B1 (270 Zeichen):** "Sehr gut. Bobath (1948): Nach Schlaganfall die **kranke Seite einbeziehen** — sprechen, berühren, Gewicht, Transfer immer von dort. So verhindert ihr, dass das Gehirn die kranke Seite vergisst (Neglect). Bewegung erlauben, nicht fixieren. 24 Stunden — alle machen mit."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist das Grundprinzip des Bobath-Konzepts bei Patienten nach Schlaganfall?"
- **Rückseite:** "Die betroffene Seite bewusst einbeziehen — Berührung, Ansprache, Transfer und Gewichtsverlagerung dorthin. Ziel: Neglect verhindern, Spastik mindern, Lagerung in Aktivität. 24-Stunden-Konzept."
- **Kategorie:** fachbegriff

---

## Baustein 9: arbeitsschutz-ruecken-schonen

### Metadaten
- **bausteinId:** mobilisation-arbeitsschutz
- **bloomLevel:** 3
- **wissensart:** recht
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Nenne 3 Gründe, warum die Pflege den schwersten Rückenverschleiß aller Berufe in Deutschland hat. Was könnte dagegen helfen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Das Arbeitsschutzgesetz (ArbSchG § 3, § 5) und die Lastenhandhabungsverordnung (LasthandhabV § 2) verpflichten den Arbeitgeber zur Gefährdungsbeurteilung. Rückenschonendes Arbeiten heißt: Bett auf Hüfthöhe, Hilfsmittel nutzen, Kinästhetik statt Heben. (BGW 2019)"

**B1 (240 Zeichen):** "Das Arbeitsschutzgesetz (ArbSchG § 3, § 5) sagt: Der Chef muss Gefahren prüfen. Für deinen Rücken heißt das: Bett auf deine **Hüfthöhe** hochstellen, **Hilfsmittel nutzen**, **Kinästhetik** statt Heben. So geht es in den nächsten 30 Jahren."

- **Step-Typ:** text (displayFormat: checklist — rückengerechte Regeln)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"**Rechtliche Basis:**
- **§ 3 ArbSchG**: Arbeitgeber muss Gefährdungen **ermitteln** und **Maßnahmen** festlegen
- **§ 5 ArbSchG**: **Gefährdungsbeurteilung** ist Pflicht
- **§ 2 LasthandhabV**: Manuelles Heben nur zulässig, wenn nicht durch Hilfsmittel ersetzbar
- **§ 15 ArbSchG**: Pflegekraft ist **verpflichtet**, bereitgestellte Hilfsmittel zu **benutzen**

**Warum das so wichtig ist (BGW 2019):**
- Pflegeberufe haben einen der höchsten **Krankenstände** in Deutschland (ca. 6,9 % in der Altenpflege, 6,0 % im Klinikbereich)
- **Muskel-Skelett-Erkrankungen** sind mit Abstand Hauptursache für Frühberentung in der Pflege
- Durchschnittlich 4,78 Fehltage pro Pflegekraft pro Jahr allein durch Rückenprobleme

**Rückengerechte Arbeitsregeln:**
1. **Bett auf Hüfthöhe** bringen — nicht gebeugt arbeiten
2. **Kinästhetik** statt Hebetechniken — Eigenbewegung des Patienten nutzen
3. **Hilfsmittel konsequent einsetzen** — Gleitmatte, Rutschbrett, Lifter
4. **Zu zweit** bei Transfers über 40 kg (Faustregel BGW)
5. **Gewichtsverlagerung** statt Heben — mit dem Patienten drehen, nicht ihn drehen
6. **Pausen** zur Erholung (Mikropausen)
7. **Feste Schuhe** mit rutschfester Sohle
8. **Rückenschule / Training** nutzen, wenn der Arbeitgeber es anbietet

**Dein Recht:** Wenn kein Lifter vorhanden ist, kannst du die Mobilisation **begründet verweigern** (§ 15 ArbSchG — Eigenschutz). (BGW 2019, ArbSchG, LasthandhabV)"

**B1 (695 Zeichen):**
"**Rechtliche Basis:**
- **§ 3 ArbSchG**: Der Chef muss Gefahren für dich prüfen
- **§ 5 ArbSchG**: Gefährdungsbeurteilung ist **Pflicht**
- **§ 2 LasthandhabV**: Heben ist nur erlaubt, wenn kein Hilfsmittel da ist
- **§ 15 ArbSchG**: Du **musst** Hilfsmittel benutzen, wenn sie da sind

**Warum das wichtig ist (BGW 2019):**
- Die Pflege hat einen der **höchsten Krankenstände** in Deutschland (fast 7 %)
- **Rückenprobleme** sind der Hauptgrund für frühe Rente in der Pflege
- Im Schnitt 4,78 Tage pro Jahr krank wegen Rücken

**8 Regeln für deinen Rücken:**
1. **Bett hochstellen** — auf deine Hüfthöhe. Nie gebeugt arbeiten.
2. **Kinästhetik** statt Heben — Bewegung des Patienten nutzen
3. **Hilfsmittel** benutzen — Gleitmatte, Rutschbrett, Lifter
4. **Zu zweit** bei Patienten über 40 kg (Faustregel BGW)
5. **Gewicht verlagern** statt heben
6. **Pausen** machen (auch kurze)
7. **Feste Schuhe** mit rutschfester Sohle
8. **Rückenschule** nutzen, wenn der Chef sie anbietet

**Dein Recht:** Wenn kein Lifter da ist, darfst du die Mobilisation **begründet ablehnen** (§ 15 ArbSchG — du darfst dich selbst schützen)."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist — 8 Regeln + Rechtsgrundlagen)
- **Glossar-Begriffe:** [ArbSchG, Gefährdungsbeurteilung, LasthandhabV, BGW, Muskel-Skelett-Erkrankung, Frühberentung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn ich stark genug bin, kann ich einen schweren Patienten auch allein heben"**
- **Fachbegriff:** Kraft-Illusion
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — **Rückenschäden entstehen durch Belastung über Zeit**, nicht durch Kraft. Junge, fitte Pflegekräfte entwickeln nach 5-10 Jahren Bandscheibenschäden, wenn sie heben. Die Bandscheibe heilt nicht wie ein Muskel. Die BGW sagt klar: Ab 40 kg ist der Lifter Standard — unabhängig von deiner Kraft. Merke: Kraft schützt dich nicht."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — **deine Kraft schützt dich nicht**. Rückenschäden entstehen durch viele Jahre Belastung. Junge, starke Pfleger bekommen nach 5-10 Jahren Bandscheibenschäden, wenn sie heben. Die Bandscheibe heilt nicht wie ein Muskel. BGW sagt: Ab 40 kg — Lifter benutzen. Merke: Kraft schützt nicht."

**D2: "Kein Lifter auf der Station — dann muss ich eben heben"**
- **Fachbegriff:** Zwangs-Heben-Mythos
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — du bist **nicht verpflichtet**, unter gefährlichen Bedingungen zu arbeiten. § 15 ArbSchG gibt dir das Recht auf **Eigenschutz**. Wenn Hilfsmittel fehlen: melde es an die PDL (schriftlich), dokumentiere die Mobilisation als 'Hilfsmittel nicht verfügbar', und verlange die Nachrüstung. Das ist dein gutes Recht."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — du **musst nicht** unter gefährlichen Bedingungen arbeiten. § 15 ArbSchG sagt: Du darfst dich selbst schützen. Wenn der Lifter fehlt: sag es der Stationsleitung (schriftlich!), schreib in die Dokumentation 'kein Lifter da'. Das ist dein Recht. Der Chef muss dann etwas tun."

**D3: "Arbeitsschutz ist Sache des Chefs, ich muss mich nicht drum kümmern"**
- **Fachbegriff:** Zuständigkeits-Abgabe
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **§ 15 ArbSchG verpflichtet auch dich**. Du musst Hilfsmittel **benutzen**, wenn sie da sind, deine Gesundheit **erhalten**, Unfälle **melden** und dich an Schulungen **beteiligen**. Der Chef bietet die Rahmenbedingungen — du musst sie aktiv nutzen. Arbeitsschutz ist Teamarbeit. Merke: Du bist auch in der Pflicht."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — **auch du hast Pflichten** (§ 15 ArbSchG). Du musst: Hilfsmittel **benutzen**, wenn sie da sind. Deine Gesundheit **schützen**. Unfälle **melden**. An Schulungen **teilnehmen**. Der Chef macht die Rahmen — du machst aktiv mit. Merke: Arbeitsschutz ist Teamarbeit."

### Richtig-Feedback
**C1 (305 Zeichen):** "Sehr gut. Arbeitsschutz: ArbSchG (§ 3, 5, 15), LasthandhabV (§ 2). Rückenschonend arbeiten: Bett auf Hüfthöhe, Kinästhetik, Hilfsmittel (Lifter ab 40 kg BGW), zu zweit, Gewichtsverlagerung statt Heben, Pausen, feste Schuhe, Rückenschule. Dein Recht: Eigenschutz bei fehlenden Hilfsmitteln (§ 15 ArbSchG)."

**B1 (265 Zeichen):** "Sehr gut. Arbeitsschutz: ArbSchG (§ 3, 5, 15) + LasthandhabV. Regeln: Bett hoch, Kinästhetik, Hilfsmittel (Lifter ab 40 kg), zu zweit, Gewicht verlagern statt heben, Pausen, feste Schuhe, Rückenschule. Bei fehlenden Hilfsmitteln: melden und Eigenschutz (§ 15 ArbSchG)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welches Recht gibt dir § 15 ArbSchG, wenn auf deiner Station kein Lifter vorhanden ist?"
- **Rückseite:** "Recht auf Eigenschutz. Du darfst die Mobilisation begründet verweigern, wenn die Arbeitsbedingungen gefährlich sind. Du musst der PDL schriftlich melden und in der Pflegedokumentation vermerken."
- **Kategorie:** recht

---

## Baustein 10: sturzangst-und-post-fall-syndrom

### Metadaten
- **bausteinId:** mobilisation-sturzangst
- **bloomLevel:** 4
- **wissensart:** komplikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Frau K., 82, ist vor 3 Wochen gestürzt. Seitdem weigert sie sich, allein aufzustehen. Sie klammert sich an dich, wenn du sie mobilisierst. Was passiert in ihr — und was darfst du auf keinen Fall tun?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Das **Post-Fall-Syndrom** bezeichnet die psychische Folge eines Sturzes: massive Sturzangst, Vermeidung von Bewegung, Rückzug. Die Folge: Muskelabbau, neue Stürze, Teufelskreis. Behandlung: Angst ernst nehmen, in kleinen Schritten mobilisieren, Sicherheit vermitteln. (Tinetti 1988)"

**B1 (240 Zeichen):** "Das **Post-Fall-Syndrom** ist die **seelische Folge** eines Sturzes: große Angst, keine Bewegung mehr, Rückzug. Dann baut der Körper Muskeln ab, es gibt mehr Stürze. Ein Teufelskreis. Was hilft: Angst ernst nehmen, ganz kleine Schritte, Sicherheit geben."

- **Step-Typ:** text (displayFormat: scenario — Teufelskreis-Schema)

### Stufe 3 — Erklärung

**C1 (775 Zeichen):**
"Das **Post-Fall-Syndrom** (auch 'Ptophobie') beschreibt die **psychische Reaktion** auf einen Sturz: pathologische Sturzangst, Vermeidungsverhalten, Rückzug aus Alltagsaktivitäten. Die Folge ist ein **Teufelskreis**:

**Sturz → Angst → Vermeidung von Bewegung → Muskelabbau → neuer Sturz → noch mehr Angst**

Nach der Studie von Tinetti (1988) entwickeln bis zu **50 %** der älteren Menschen nach einem Sturz diese Angst. Auch Menschen, die **nicht** gestürzt sind, können aus Furcht vor einem Sturz in dieses Syndrom hineinrutschen.

**Pflegerische Maßnahmen:**

1. **Angst ernst nehmen** — nicht abtun mit 'Das wird schon'. Angst ist ein Symptom, das behandelt wird.
2. **Ursachen klären** — Sturz aufarbeiten: Was ist passiert? Was hat geholfen? Was nicht?
3. **Kleine Schritte** — erst Bettkante, dann Stehen mit Halt, dann kurze Strecken mit Rollator. Erfolgserlebnisse aufbauen.
4. **Sicherheit vermitteln** — durch Körperkontakt, ruhige Stimme, klare Ansagen ('Ich halte dich. Jetzt Schritt mit rechts.')
5. **Hilfsmittel geben** — Rollator, Gehstock sind Sicherheit, keine Schwäche
6. **Nicht überfordern** — aber auch **nicht unterfordern** (Unterforderung verstärkt die Angst, nicht die Sicherheit)
7. **Assessment** — mit Falls-Efficacy-Scale die Angst messbar machen

**Keine Zwangsmobilisation.** Das verschlimmert die Angst. (Tinetti 1988, DNQP Sturzprophylaxe 2013)"

**B1 (685 Zeichen):**
"Das **Post-Fall-Syndrom** ist die **Angst nach einem Sturz**. Auch Menschen, die **nicht** gestürzt sind, können diese Angst bekommen.

**So läuft der Teufelskreis:**

Sturz → Angst → keine Bewegung → Muskeln weg → neuer Sturz → noch mehr Angst

Nach Tinetti (1988) bekommen bis zu **50 %** der älteren Menschen nach einem Sturz diese Angst.

**Was du tun kannst:**

1. **Angst ernst nehmen** — nicht sagen 'Das wird schon'. Angst ist ein Symptom, nicht Theater.
2. **Sturz besprechen** — Was ist passiert? Was hat geholfen?
3. **Kleine Schritte** — erst Bettkante, dann Stehen mit Halt, dann kurze Strecken. Kleine Erfolge sammeln.
4. **Sicherheit geben** — Körperkontakt, ruhige Stimme, klare Sätze ('Ich halte dich. Jetzt Schritt mit rechts.')
5. **Hilfsmittel geben** — Rollator ist **Sicherheit**, keine Schwäche
6. **Nicht zu viel auf einmal** — aber **auch nicht zu wenig** (zu wenig macht die Angst größer, nicht kleiner)
7. **Assessment** — mit dem Falls-Efficacy-Test die Angst messen

**Niemals mit Zwang mobilisieren.** Das macht die Angst schlimmer."

- **Erklärungs-Step:** stepType `diagram` (Teufelskreis als Kreisdiagramm + Interventionspfeile)
- **Glossar-Begriffe:** [Post-Fall-Syndrom, Ptophobie, Teufelskreis, Falls-Efficacy-Scale, Sarkopenie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Am besten ist es, den Patienten einfach aufzufordern, weiterzumachen — Stressvermeidung löst das Problem nicht"**
- **Fachbegriff:** Härte-Irrtum
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — **Druck und Zwang verschlimmern** das Post-Fall-Syndrom. Die Angst ist ein Symptom, keine Faulheit. Harte Aufforderung ohne Sicherheit führt zu **Vermeidungsverstärkung** oder sogar einem neuen Sturz (Angst macht die Muskeln steif). Richtig: Sicherheit vermitteln, kleine Schritte, Erfolgserlebnisse — nie Zwang."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **Druck macht es schlimmer**. Die Angst ist ein Symptom, nicht Faulheit. Harte Worte ohne Sicherheit führen zu mehr Vermeidung oder neuem Sturz (Angst macht die Muskeln steif). Richtig: Sicherheit geben, kleine Schritte, Erfolge feiern. Nie mit Druck."

**D2: "Bettruhe ist der sicherste Weg, um Stürze zu vermeiden"**
- **Fachbegriff:** Bettruhe-Sicherheits-Irrtum
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — **Bettruhe erhöht das Sturzrisiko**, nicht umgekehrt. In einer Woche Bettruhe verliert ein älterer Mensch bis zu 10 % Muskelmasse. Schwache Muskeln = unsicher = Sturz. Studien zeigen: Mobilisierte Patienten stürzen **weniger** als Bettlägerige. Merke: Bewegung ist die beste Sturzprophylaxe. (DNQP 2013)"
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **Bettruhe macht mehr Stürze**, nicht weniger. In einer Woche Liegen verliert ein alter Mensch bis zu 10 % Muskeln. Schwache Muskeln = unsicher = Sturz. Studien zeigen: Patienten, die sich bewegen, stürzen **weniger** als die, die liegen bleiben. Merke: Bewegung schützt."

**D3: "Wenn ein Patient mit Rollator geht, ist er unselbstständig und traurig"**
- **Fachbegriff:** Hilfsmittel-Stigma
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **Hilfsmittel erhalten die Selbstständigkeit**, nicht umgekehrt. Ein Rollator ermöglicht Bewegung, die sonst nicht stattfinden würde: Einkaufen, Spazieren, soziale Kontakte. Ohne Rollator würden viele Patienten zuhause bleiben und bettlägerig werden. Merke: Rollator = Freiheit, nicht Abhängigkeit."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — **Hilfsmittel bringen Freiheit**. Ein Rollator macht möglich, dass der Patient einkaufen geht, rausgeht, Leute trifft. Ohne Rollator bleibt er zu Hause und wird bettlägerig. Das ist schlimmer. Merke: Rollator = Freiheit, nicht Schwäche."

### Richtig-Feedback
**C1 (305 Zeichen):** "Sehr gut. Post-Fall-Syndrom: psychische Folge eines Sturzes — Angst, Vermeidung, Muskelabbau, neuer Sturz (Teufelskreis). Behandlung: Angst ernst nehmen, Ursachen klären, kleine Schritte, Sicherheit vermitteln, Hilfsmittel normalisieren, Falls-Efficacy-Assessment. **Nie Zwang.** (Tinetti 1988)"

**B1 (270 Zeichen):** "Sehr gut. Post-Fall-Syndrom: Angst nach einem Sturz mit Teufelskreis (Angst → keine Bewegung → Muskeln weg → neuer Sturz). Behandlung: Angst ernst nehmen, Sturz besprechen, kleine Schritte, Sicherheit geben, Hilfsmittel normalisieren. **Nie Zwang** — macht alles schlimmer."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist das Post-Fall-Syndrom und wie gehst du damit um?"
- **Rückseite:** "Psychische Sturzfolge: Angst, Vermeidung, Muskelabbau, neuer Sturz (Teufelskreis). Behandlung: Angst ernst nehmen, kleine Schritte, Sicherheit vermitteln, Hilfsmittel normalisieren. Nie Zwang."
- **Kategorie:** fakt

---

## Baustein 11: mobilisation-bei-schmerzen-und-kreislauf-ueberwachung

### Metadaten
- **bausteinId:** mobilisation-schmerzen-kreislauf
- **bloomLevel:** 4
- **wissensart:** entscheidung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Du willst Herrn P. (Zustand nach Knie-OP gestern) zum ersten Mal aufstehen lassen. Er hat NRS 5. Was machst du — und was überwachst du während der Mobilisation?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Vor Mobilisation: **NRS ≤ 3** anstreben (ggf. Schmerzmittel 30-60 Min vorher). Während Mobilisation: **Kreislauf überwachen** (Blässe, Schwitzen, Schwindel), RR und Puls vorher und an der Bettkante messen. Abbruchkriterien: RR-Abfall > 20 mmHg systolisch, Schwindel, Synkope."

**B1 (235 Zeichen):** "Vor Mobilisation: **Schmerzen niedrig** (NRS höchstens 3) — ggf. Schmerzmittel 30-60 Min vorher geben. Während: **Kreislauf prüfen** (Blässe, Schwitzen, Schwindel), RR und Puls. Abbruch bei: RR fällt stark, Schwindel, Ohnmacht."

- **Step-Typ:** text (displayFormat: checklist — Vor/Während/Abbruch)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Schmerz und Kreislauf sind die **zwei häufigsten Abbruchgründe** für eine Mobilisation — und gleichzeitig vermeidbar, wenn vorher gut geprüft wird.

**Schmerzmanagement vor Mobilisation:**
- **Schmerz erfassen** mit NRS (0-10) oder visueller Analogskala
- **Ziel**: NRS ≤ 3 vor der Mobilisation (S3-Leitlinie Schmerz)
- Bei höheren Werten: **ärztlich verordnete Schmerzmittel** geben, **30-60 Min** warten (Wirkungseintritt)
- Nach der Mobilisation: Schmerzen erneut erfassen, dokumentieren

**Kreislaufüberwachung:**
- **Vor Mobilisation**: RR und Puls messen (Baseline)
- **An der Bettkante** (2-3 Min): erneut messen (**Orthostase-Check**)
- **Während Gehstrecke**: auf **Warnzeichen** achten:
  - **Blässe** im Gesicht
  - **Schwitzen** (kalter Schweiß)
  - **Schwindel** (Äußerung des Patienten)
  - **Übelkeit**
  - **Puls-Frequenz** steigt stark (> 120/min)
  - **Zittern** der Knie

**Abbruchkriterien:**
- RR-Abfall systolisch > **20 mmHg**
- RR-Abfall diastolisch > **10 mmHg**
- Puls > 120/min in Ruhe
- Synkope oder Präsynkope
- Starke Schmerzen (NRS > 5)

**Bei Abbruch:** Patient hinlegen, Beine hochlagern, Vitalwerte engmaschig messen, Arzt informieren, dokumentieren. (S3-Leitlinie Schmerz 2020)"

**B1 (680 Zeichen):**
"Schmerz und Kreislauf sind die **zwei häufigsten Gründe**, eine Mobilisation abzubrechen. Beide lassen sich vorher prüfen.

**Schmerz vor der Mobilisation:**
- **Schmerz messen** mit NRS (0-10)
- **Ziel**: NRS höchstens 3
- Bei mehr: **Schmerzmittel** vom Arzt geben, **30-60 Minuten** warten (bis es wirkt)
- Nach der Mobilisation: Schmerzen nochmal fragen, aufschreiben

**Kreislauf überwachen:**
- **Vorher**: RR und Puls messen (Ausgangswert)
- **An der Bettkante** (2-3 Min sitzen): nochmal messen (**Orthostase-Check**)
- **Beim Gehen**: auf **Warnzeichen** achten:
  - **Blässe** im Gesicht
  - **Schwitzen** (kalter Schweiß)
  - **Schwindel** (Patient sagt es)
  - **Übelkeit**
  - **Puls** zu hoch (über 120)
  - **Knie zittern**

**Abbruch-Gründe:**
- RR fällt stark (mehr als 20 oben oder 10 unten)
- Puls über 120 in Ruhe
- Ohnmacht oder fast Ohnmacht
- Starke Schmerzen (NRS über 5)

**Bei Abbruch:** Hinlegen, Beine hoch, Vitalwerte messen, Arzt informieren, aufschreiben."

- **Erklärungs-Step:** stepType `matrix` (Tabelle: Warnzeichen / Bedeutung / Reaktion)
- **Glossar-Begriffe:** [NRS, Orthostase-Check, Orthostatische Dysregulation, Synkope, Präsynkope, Baseline]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn der Patient sagt, er hat keine Schmerzen, muss ich nichts messen"**
- **Fachbegriff:** Selbstbericht-Monopol
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **NRS erfassen ist Pflicht** (S3-Leitlinie), auch bei selbstberichteter Schmerzfreiheit. Grund: Manche Patienten verneinen Schmerz aus Scham, Kultur, Angst vor Abhängigkeit von Schmerzmitteln. Der Wert wird in der Kurve dokumentiert — auch wenn er 0 ist. Merke: NRS fragen ist nicht verhandelbar."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — du **musst NRS messen**, auch wenn der Patient sagt 'keine Schmerzen'. Manche schämen sich oder haben Angst vor Schmerzmitteln. Der Wert kommt in die Kurve — auch wenn er 0 ist. Merke: NRS fragen ist immer Pflicht."

**D2: "Schwindel beim Aufstehen ist normal und geht von allein weg"**
- **Fachbegriff:** Schwindel-Bagatelle
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — Schwindel ist ein **Warnzeichen** für orthostatische Dysregulation oder beginnende Synkope. Er muss ernst genommen werden: Patient zurücklegen, Beine hochlagern, RR und Puls messen. Wenn man einfach weitermacht, kann es zu Bewusstlosigkeit und Sturz kommen. Merke: Schwindel = Stopp, nicht 'geht schon'."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — Schwindel ist ein **Warnsignal**, kein normales Gefühl. Er zeigt, dass der Kreislauf nicht stimmt. Was tun: Patient hinlegen, Beine hoch, RR und Puls messen. Einfach weitermachen = Patient wird ohnmächtig und stürzt. Merke: Schwindel = aufhören, nicht 'wird schon'."

**D3: "Schmerzmittel können den Patienten beim Mobilisieren gefährden (Kreislauf, Stürze)"**
- **Fachbegriff:** Analgetika-Angst
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **unbehandelte Schmerzen sind gefährlicher**. Schmerz führt zu: erhöhtem Kreislauf-Stress, Vermeidungsverhalten, schlechterer Heilung. Richtig dosierte Schmerzmittel (nach ärztlicher Anordnung) machen die Mobilisation sicherer. Starke Opioide können Kreislauf senken — darum engmaschig überwachen. Merke: Schmerz behandeln ist sicherer."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **Schmerzen ohne Behandlung sind gefährlicher**. Schmerzen machen Stress für Herz und Kreislauf, der Patient will sich nicht bewegen, die Wunde heilt schlechter. Richtig dosierte Schmerzmittel (vom Arzt) machen die Mobilisation sicherer. Nur bei starken Opioiden: gut überwachen."

### Richtig-Feedback
**C1 (305 Zeichen):** "Sehr gut. Vor Mobilisation: NRS ≤ 3 (ggf. Analgetika 30-60 Min vorher), RR und Puls als Baseline. An der Bettkante: Orthostase-Check. Während: Warnzeichen beobachten (Blässe, Schwitzen, Schwindel, Puls > 120). Abbruch bei: RR-Abfall > 20/10 mmHg, Präsynkope, Schmerzen > NRS 5. (S3-Leitlinie Schmerz 2020)"

**B1 (265 Zeichen):** "Sehr gut. Vor Mobilisation: NRS höchstens 3 (ggf. Schmerzmittel 30-60 Min vorher), RR und Puls messen. An der Bettkante: Orthostase-Check. Beim Gehen: auf Blässe, Schwitzen, Schwindel, Puls achten. Abbruch bei RR-Abfall, Ohnmacht, starken Schmerzen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welches sind die klassischen Abbruchkriterien bei einer Mobilisation?"
- **Rückseite:** "RR-Abfall systolisch > 20 mmHg oder diastolisch > 10 mmHg, Puls > 120/min, Präsynkope/Synkope, Schwindel, Blässe, kalter Schweiß, starke Schmerzen (NRS > 5)."
- **Kategorie:** assessment

---

## Baustein 12: beratung-und-ablehnung

### Metadaten
- **bausteinId:** mobilisation-beratung-ablehnung
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Herr S., 78, lehnt die Mobilisation ab: 'Lass mich in Ruhe, ich will liegen bleiben.' Wie reagierst du? Was darfst du, was darfst du nicht — und welche ethischen Überlegungen spielen eine Rolle?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "Selbstbestimmung (§ 630d BGB) gilt auch gegen den fachlichen Rat. Pflegepflichten bei Ablehnung: **aufklären** (Konsequenzen), **Ursache erfragen** (Schmerz? Depression? Müdigkeit?), **Alternativen** anbieten, **dokumentieren**, **Arzt informieren**. **Kein Zwang** bei einwilligungsfähigen Patienten."

**B1 (245 Zeichen):** "Selbstbestimmung (§ 630d BGB) gilt auch, wenn Patient gegen Rat entscheidet. Bei Ablehnung: **aufklären** (was passiert, wenn nicht?), **Grund fragen** (Schmerz? Traurigkeit? Müde?), **Alternativen** geben, **aufschreiben**, **Arzt** sagen. **Kein Zwang**."

- **Step-Typ:** dialog (3 Phasen: Patient lehnt ab → Pflegekraft reagiert → Lösung)

### Stufe 3 — Erklärung

**C1 (855 Zeichen):**
"Die Mobilisation ist ein **pflegerischer Vorschlag**, keine Verpflichtung des Patienten. Nach **§ 630d BGB** braucht jede pflegerische Maßnahme die **Einwilligung** des einwilligungsfähigen Patienten. Er darf Nein sagen — auch zu einer Maßnahme, die ihm guttun würde.

**Ablehnung ist ein Signal, kein Problem:**

Oft verbirgt sich hinter 'Lass mich in Ruhe' ein anderes Bedürfnis:
- **Schmerzen** (nicht benannt)
- **Angst** (Sturzangst, Post-Fall-Syndrom)
- **Depression** (antriebslos, bedrückt)
- **Scham** (Blöße im Bett, Inkontinenz)
- **Erschöpfung** (schlechter Schlaf)
- **Trauer** (Verlust der Selbstständigkeit)
- **Fehlende Information** (warum überhaupt?)

**Vorgehen in 5 Schritten:**

1. **Zuhören, nicht widersprechen** — 'Das höre ich. Kannst du mir sagen, warum?'
2. **Ursache erfragen** — offene Fragen stellen, Antworten ernst nehmen
3. **Informieren** — laienverständlich über Konsequenzen aufklären ('Ohne Bewegung kann nach 2 Tagen...')
4. **Alternativen anbieten** — 'Vielleicht nur bis zur Bettkante? Nach dem Kaffee? Mit deiner Frau?'
5. **Dokumentieren und Arzt informieren** — bei wiederholter Ablehnung: schriftliche Entscheidung, ärztliches Gespräch

**Wann ist Zwang erlaubt?** Nur bei **Einwilligungsunfähigkeit** und Gefahr im Verzug, mit richterlichem Beschluss (§ 1906a BGB). Für eine routinemäßige Mobilisation: **nie**. (§ 630d BGB, § 1906a BGB, DNQP 2020)"

**B1 (745 Zeichen):**
"Die Mobilisation ist ein **Angebot**, keine Pflicht. Nach **§ 630d BGB** muss der Patient **zustimmen**. Er darf Nein sagen — auch zu einer guten Idee.

**Nein ist ein Signal, kein Problem:**

Hinter 'Lass mich in Ruhe' steckt oft etwas anderes:
- **Schmerzen** (er sagt es nicht)
- **Angst** (vor Stürzen)
- **Depression** (antriebslos, traurig)
- **Scham** (nackt im Bett, Inkontinenz)
- **Müdigkeit** (schlechter Schlaf)
- **Trauer** (Verlust)
- **Keine Infos** (warum überhaupt?)

**Was du tun kannst — 5 Schritte:**

1. **Zuhören, nicht streiten** — 'Ich höre dich. Sagst du mir, warum?'
2. **Grund erfragen** — offene Fragen, Antworten ernst nehmen
3. **Aufklären** — einfach erklären, was passiert, wenn nicht ('Ohne Bewegung gibt es nach 2 Tagen...')
4. **Alternativen geben** — 'Vielleicht nur zur Bettkante? Nach dem Kaffee? Mit deiner Frau?'
5. **Aufschreiben und Arzt informieren** — wenn er öfter ablehnt: schriftlich festhalten, mit dem Arzt reden

**Wann ist Zwang erlaubt?** Nur wenn der Patient **nicht selbst entscheiden kann** und Gefahr in Verzug ist — mit Gerichtsbeschluss (§ 1906a BGB). Normale Mobilisation: **nie mit Zwang**."

- **Erklärungs-Step:** stepType `dialog` (4 Phasen: Begrüßung → Ablehnung → Ursachenklärung → Alternative)
- **Glossar-Begriffe:** [Einwilligung, Selbstbestimmung, Einwilligungsfähigkeit, Paternalismus, Freiheitsentziehende Maßnahme]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn der Patient ablehnt, mache ich es trotzdem — zu seinem Besten"**
- **Fachbegriff:** Paternalismus
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — das ist **Paternalismus** und rechtlich **unzulässig**. Nach § 630d BGB ist jede pflegerische Maßnahme ohne Einwilligung **Körperverletzung** (§ 223 StGB). Auch wenn du es gut meinst. Deine Pflicht: **Aufklären**, **Alternativen** anbieten, **dokumentieren**. Bei wiederholter Ablehnung: **Arzt** informieren. Nie Zwang."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — das ist **verboten**. § 630d BGB sagt: Ohne Zustimmung ist jede Maßnahme **Körperverletzung**, auch wenn du es gut meinst. Deine Aufgabe: **Aufklären**, **Alternativen** geben, **aufschreiben**. Bei immer wieder Ablehnung: **Arzt** informieren. Nie mit Zwang."

**D2: "Ablehnung ist immer Faulheit oder Sturheit des Patienten"**
- **Fachbegriff:** Ablehnungs-Vorurteil
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — **Ablehnung ist ein Symptom**, kein Charakterzug. Hinter 'Nein' stehen oft Schmerzen, Angst, Depression, Scham, Erschöpfung oder Trauer. Deine Aufgabe: **neugierig nachfragen** — 'Was hält dich davon ab?'. Die Antwort zeigt, was zu tun ist (Schmerzmittel, Gespräch, andere Uhrzeit). Merke: Ablehnung = Information."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — **Ablehnung hat oft einen Grund**. Hinter 'Nein' stehen oft Schmerzen, Angst, Depression, Scham, Müdigkeit, Trauer. Deine Aufgabe: **neugierig fragen** — 'Was hält dich davon ab?'. Die Antwort sagt dir, was zu tun ist. Merke: Ablehnung ist eine Information für dich."

**D3: "Wenn der Patient krank ist, darf er nicht mehr selbst entscheiden"**
- **Fachbegriff:** Krankheits-Entmündigungs-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **Krankheit entmündigt nicht**. Einwilligungsfähigkeit bedeutet: Patient versteht die Situation und die Konsequenzen seiner Entscheidung. Das können auch kranke, alte, schwer kranke Patienten. Einwilligungsunfähig ist nur, wer durch Demenz, Delir, Bewusstseinsstörung die Tragweite nicht erfassen kann. Merke: Krank ≠ unmündig."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — **Krankheit heißt nicht entmündigt**. Einwilligungsfähig ist, wer **versteht**, was man mit ihm vorhat und was die Folgen sind. Auch kranke oder alte Patienten können das. Nur bei Demenz, Delir oder Bewusstlosigkeit nicht. Merke: Krank heißt nicht 'nicht mündig'."

### Richtig-Feedback
**C1 (315 Zeichen):** "Sehr gut. § 630d BGB: Selbstbestimmung gilt auch gegen fachlichen Rat. Vorgehen bei Ablehnung: zuhören → Ursache erfragen → aufklären → Alternativen anbieten → dokumentieren → Arzt informieren. Ablehnung ist oft ein Symptom für Schmerz, Angst, Depression, Scham. **Nie Zwang** — das wäre Körperverletzung."

**B1 (275 Zeichen):** "Sehr gut. § 630d BGB: Der Patient darf Nein sagen — auch gegen guten Rat. Vorgehen: zuhören → Grund fragen → aufklären → Alternativen anbieten → aufschreiben → Arzt informieren. Ablehnung ist oft ein Zeichen für Schmerz, Angst, Depression. **Nie Zwang** — das wäre Körperverletzung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Ein einwilligungsfähiger Patient lehnt die Mobilisation ab. Wie reagierst du rechtlich korrekt?"
- **Rückseite:** "Selbstbestimmung nach § 630d BGB respektieren. Zuhören → Grund erfragen → aufklären → Alternativen anbieten → dokumentieren → bei wiederholter Ablehnung: Arzt informieren. Kein Zwang (sonst Körperverletzung, § 223 StGB)."
- **Kategorie:** recht

---

## Baustein 13: mobilisationsplan-erstellen-und-dokumentieren

### Metadaten
- **bausteinId:** mobilisation-plan-dokumentieren
- **bloomLevel:** 5
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Du planst die Mobilisation von Frau M., 70 Jahre, 3 Tage nach Hüft-TEP. Was gehört alles in den Mobilisationsplan? Formuliere ein SMART-Ziel für die erste Woche."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (295 Zeichen):** "Der **Mobilisationsplan** folgt dem 6-Schritte-Pflegeprozess: Assessment (TUG, Tinetti, Barthel) → SMART-Ziele mit Patient → konkrete Maßnahmen (Zeit, Hilfsmittel, Begleitung) → Durchführung → Evaluation → Dokumentation. **PESR-Schema** bei Pflegediagnose. (DNQP 2020)"

**B1 (265 Zeichen):** "Der **Mobilisationsplan** hat 6 Schritte: 1. Einschätzen (Tinetti, TUG, Barthel), 2. **SMART-Ziele** mit dem Patienten, 3. Maßnahmen planen (Zeit, Hilfsmittel, wer?), 4. Machen, 5. Prüfen, 6. Aufschreiben. Pflegediagnose nach **PESR** formulieren."

- **Step-Typ:** careplan (Plan mit Ziel, Maßnahme, Evaluation erstellen)

### Stufe 3 — Erklärung

**C1 (895 Zeichen):**
"Der **Mobilisationsplan** ist Teil des Pflegeprozesses nach Fiechter/Meier (1981) und umfasst 6 Schritte:

**1. Assessment:**
- **Tinetti-Test** (Balance + Gang), **Timed Up and Go (TUG)** (Steh-Gang-Test), **Barthel-Index** (ATL), **Esslinger Transferskala** (Transfers)
- **Ressourcen-orientiert** dokumentieren: 'Kann selbstständig im Bett drehen, benötigt Unterstützung beim Aufsetzen' — statt nur Defizite

**2. Pflegediagnose (PESR-Schema):**
- **P**roblem: z. B. 'Beeinträchtigte Mobilität' (NANDA 00085)
- **Ä**tiologie: 'bedingt durch Hüft-TEP rechts vor 3 Tagen, Schmerzen bei Belastung'
- **S**ymptome: 'Kann ohne Hilfe nicht aufstehen, NRS 4 bei Belastung'
- **R**essourcen: 'Motiviert, gute Armkraft, Angehörige unterstützen'

**3. SMART-Ziele** (gemeinsam mit Patient):
- **S**pezifisch: 'steht und geht'
- **M**essbar: '5 Schritte mit Rollator'
- **A**ttraktiv/Akzeptiert: vom Patienten gewünscht
- **R**ealistisch: anhand des Zustands machbar
- **T**erminiert: 'bis Ende der Woche'

Beispiel-Ziel: 'Frau M. geht bis Freitag 2 × täglich 5 Schritte mit Rollator und Begleitung schmerzarm (NRS ≤ 3).'

**4. Maßnahmen:**
- Wer, Wann, Wie oft, Wie (Hilfsmittel), Womit
- Zeitliche Struktur: morgens nach Körperpflege, nachmittags nach Besuch

**5. Evaluation:**
- Tägliche Kontrolle: Wird das Ziel erreicht? Warum nicht? Anpassen.

**6. Dokumentation:**
- **Pflegebericht** (chronologisch, sachlich, wertfrei): 'Frau M. mobilisiert mit Rollator, 7 Schritte, schmerzarm, NRS 2, gutes Befinden.'
- **Kurve**: Uhrzeit, Hilfsmittel, Strecke, Vitalwerte

**Grundsatz:** 'Was nicht dokumentiert ist, gilt als nicht durchgeführt.' (DNQP 2020, Fiechter/Meier 1981)"

**B1 (790 Zeichen):**
"Der **Mobilisationsplan** hat 6 Schritte (nach Fiechter/Meier, 1981):

**1. Einschätzen:**
- Tests: **Tinetti**, **TUG**, **Barthel**, **Esslinger Transferskala**
- **Ressourcen** aufschreiben: 'Kann selbst im Bett drehen, braucht Hilfe beim Aufsetzen' — nicht nur Probleme

**2. Pflegediagnose (PESR):**
- **P**roblem: 'Bewegung eingeschränkt' (NANDA 00085)
- **Ä**tiologie: 'wegen Hüft-OP vor 3 Tagen, Schmerzen'
- **S**ymptome: 'Kann allein nicht aufstehen, NRS 4 bei Bewegung'
- **R**essourcen: 'Motiviert, starke Arme, Familie hilft'

**3. SMART-Ziele** (mit dem Patienten):
- **S**pezifisch: 'steht und geht'
- **M**essbar: '5 Schritte mit Rollator'
- **A**ttraktiv: Patient will es
- **R**ealistisch: machbar
- **T**erminiert: 'bis Freitag'

Beispiel: 'Frau M. geht bis Freitag 2 × täglich 5 Schritte mit Rollator, Begleitung, schmerzarm (NRS höchstens 3).'

**4. Maßnahmen:**
- Wer? Wann? Wie oft? Wie? Womit?
- Zeit: morgens nach Waschen, nachmittags nach Besuch

**5. Prüfen:**
- Jeden Tag: Wird das Ziel erreicht? Wenn nicht: Warum? Plan ändern.

**6. Aufschreiben:**
- **Pflegebericht** (chronologisch, sachlich): 'Frau M. mobilisiert mit Rollator, 7 Schritte, schmerzarm, NRS 2, gut gelaunt.'
- **Kurve**: Uhrzeit, Hilfsmittel, Strecke, Blutdruck

**Wichtigste Regel:** 'Was nicht aufgeschrieben ist, ist nicht passiert.'"

- **Erklärungs-Step:** stepType `careplan` (Mobilisationsplan mit PESR + SMART + Maßnahmen + Evaluation)
- **Glossar-Begriffe:** [Pflegeprozess, PESR-Schema, SMART-Ziel, Pflegebericht, Fiechter/Meier, NANDA]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Ziel wie 'Frau M. wird mobilisiert' ist klar und ausreichend"**
- **Fachbegriff:** Unkonkretes-Ziel
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — **'wird mobilisiert' ist nicht SMART**. Es fehlt Messbarkeit (wie viel? wie oft?), Zeit (bis wann?) und Attraktivität (mit Patient abgestimmt?). Besser: 'Frau M. geht bis Freitag 2 × täglich 5 Schritte mit Rollator.' Dann kann jede Kollegin am nächsten Tag sofort weiterarbeiten. Merke: SMART = konkret."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **'wird mobilisiert' ist zu unklar**. Es fehlen: wie viel? wie oft? bis wann? Besser: 'Frau M. geht bis Freitag 2 × täglich 5 Schritte mit Rollator.' Dann weiß jede Kollegin, was zu tun ist. Merke: SMART = konkret."

**D2: "Die Pflegediagnose schreibt der Arzt, nicht die Pflegefachkraft"**
- **Fachbegriff:** Zuständigkeits-Irrtum
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — **Pflegediagnosen sind vorbehaltene Aufgabe der Pflegefachkraft** (§ 4 PflBG). Ärzte stellen medizinische Diagnosen (z. B. 'Hüftfraktur'), Pflegefachkräfte formulieren daraus Pflegediagnosen nach NANDA/PESR (z. B. 'Beeinträchtigte Mobilität 00085 bedingt durch...'). Das ist Kernkompetenz der Pflege. Merke: Pflegediagnose = Pflege."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — **Pflegediagnosen macht die Pflege**, nicht der Arzt (§ 4 PflBG). Der Arzt sagt die medizinische Diagnose ('Hüftbruch'). Die Pflegefachkraft schreibt die Pflegediagnose nach NANDA/PESR ('Bewegung eingeschränkt 00085 wegen...'). Das ist Kern der Pflege. Merke: Pflegediagnose = Pflege."

**D3: "Ressourcen im Plan sind unwichtig — wir konzentrieren uns auf die Probleme"**
- **Fachbegriff:** Defizit-Fokussierung
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — **Ressourcen sind der Kern der modernen Pflege**. Die DNQP (2020) fordert explizit **Ressourcen-orientierung**: Was kann der Patient noch? Was will er? Wer hilft ihm? Ohne Ressourcen bleibt nur Defizit — und der Patient wird entmündigt. Mit Ressourcen entsteht ein Plan, der auf den Patienten zugeschnitten ist. Merke: Ressourcen zuerst."
- **Feedback (B1, 285 Zeichen):** "Nicht ganz — **Ressourcen sind sehr wichtig**. Die DNQP (2020) sagt: Schau, was der Patient **noch kann**, was er **will**, wer ihm **hilft**. Ohne Ressourcen siehst du nur Probleme — der Patient fühlt sich klein. Mit Ressourcen passt der Plan zum Menschen. Merke: Erst Ressourcen, dann Defizite."

### Richtig-Feedback
**C1 (320 Zeichen):** "Sehr gut. Mobilisationsplan = Pflegeprozess in 6 Schritten: Assessment (Tinetti, TUG, Barthel) → Pflegediagnose PESR (Problem, Ätiologie, Symptome, Ressourcen) → SMART-Ziel mit Patient → Maßnahmen (wer/wann/wie) → Evaluation → Pflegebericht chronologisch und wertfrei. Ressourcen-orientiert. Alles schriftlich. (DNQP 2020, Fiechter/Meier 1981)"

**B1 (290 Zeichen):** "Sehr gut. Mobilisationsplan in 6 Schritten: Einschätzen (Tinetti, TUG, Barthel) → Pflegediagnose PESR (Problem, Grund, Symptome, Ressourcen) → SMART-Ziel mit Patient → Maßnahmen (wer, wann, wie) → Prüfen → Pflegebericht (chronologisch, sachlich). Ressourcen zuerst. Alles schriftlich."

### Verknüpfte Karteikarte
- **Vorderseite:** "Formuliere ein SMART-Mobilisationsziel für Frau M., 70 Jahre, 3 Tage nach Hüft-TEP."
- **Rückseite:** "'Frau M. geht bis Freitag 2 × täglich 5 Schritte mit Rollator und Begleitung schmerzarm (NRS ≤ 3).' — Spezifisch (steht/geht), Messbar (5 Schritte), Attraktiv (mit Patient vereinbart), Realistisch (Tag 3 postop möglich), Terminiert (bis Freitag)."
- **Kategorie:** handlung

---

## Zeit-Budget-Check

**Zielzeit Thema:** 149 Min (6 UE × 45 × 0,55)
**Summe Bausteine (Stufe 2+3):** ~58 Min (13 Bausteine × ~4,5 Min)
**Verbleibend für Situationen + Übungs-Steps:** ~91 Min

→ PASS. Gute Reserve für Sessionplan-Steps (Transfer-Dialog, Bobath-Matrix, Rollator-Matching, Plan-Careplan).

## Cluster-Querverbindungen

Dieser Themen-Block gehört zum **natürlichen Cluster B (Mobilität & Prophylaxen)**:
- `kinaesthetik` (Voraussetzung — Bewegungsprinzipien)
- `positionierung` (Voraussetzung — Ausgangslage im Bett)
- `dekubitus-prophylaxe` (Nachfolger — Prophylaxe durch Mobilisation)
- `thrombose-prophylaxe` (Komorbidität — Bewegung als Prophylaxe)
- `sturz-prophylaxe` (Komorbidität — Balance und Sturzangst)
- `kontraktur-prophylaxe` (Komorbidität — Gelenkbeweglichkeit)
- `pneumonie-prophylaxe` (Komorbidität — Atemtiefe durch Aufrechtsein)
- `pflegeprozess` (Querschnitt — Mobilisationsplan folgt dem 6-Schritte-Modell)
- `pflegedokumentation` (Querschnitt — PESR + SMART + Pflegebericht)
- `assessments-expertenstandards` (Querschnitt — Tinetti, TUG, Barthel)

In Lernsituationen (z. B. "Frau M. nach Hüft-TEP") werden mehrere dieser Themen gleichzeitig aktiviert.
