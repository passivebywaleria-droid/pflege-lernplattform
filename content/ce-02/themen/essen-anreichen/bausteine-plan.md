# Wissensbausteine: Essen & Trinken anreichen

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `essen-anreichen` |
| ceId | `ce-02` |
| cluster | D (Ernährung) |
| wissensart | handlung |
| kompetenzbereich | II.1 (Kommunikation) |
| geschaetzteUE | 7 |
| zielzeitMin | 173 (7 UE × 45 × 0,55) |
| bausteineAnzahl | 13 |
| voraussetzungen | `ernaehrungsgrundlagen` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 23% (3 Bausteine), Bloom 3-4: 54% (7 Bausteine), Bloom 5-6: 23% (3 Bausteine)

**Primärquellen:**
- IDDSI (2019): International Dysphagia Diet Standardisation Initiative — Framework Levels 0-7
- Trapl M. et al. (2007): GUSS — Gugging Swallowing Screen (Stroke, 38:2948-2952)
- DGG / DGN (2020): S1-Leitlinie Neurogene Dysphagie
- DGE (2024): Ernährung im Alter — Empfehlungen
- Expertenstandard Ernährungsmanagement (DNQP, 2. Aktualisierung 2017)
- WHO (2015): Mealtime Care and Dignity in Care of Older People
- § 1901a BGB (Patientenverfügung / Selbstbestimmung bei Ernährung)

---

## Baustein 1: vorbereitung-sitzposition

### Metadaten
- **bausteinId:** essen-anreichen-vorbereitung
- **bloomLevel:** 2
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient soll im Bett essen. Welche 3 Dinge müssen stimmen, bevor du überhaupt anfängst — damit er sicher essen kann und nicht sich verschluckt? Denk an Körper, Umgebung und Speise."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (225 Zeichen):** "Drei Säulen vor dem Anreichen: **Sitzposition über 60°** (Aspirationsschutz), **ruhige Umgebung** (Fernseher aus, Licht an, Serviette bereit) und **Temperaturkontrolle** der Speise (am Innenarm fühlen — nicht zu heiß). (DGE 2024)"

**B1 (215 Zeichen):** "Drei Dinge musst du prüfen: Der Patient **sitzt über 60 Grad** aufrecht. Das Zimmer ist **ruhig** (Fernseher aus, Licht an). Das Essen hat die **richtige Temperatur** — fühl es kurz am Innenarm, nicht zu heiß."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (660 Zeichen):**
"Die Vorbereitung entscheidet über Sicherheit und Würde beim Anreichen:

**Sitzposition**: Oberkörper mindestens 60° aufrecht, besser 90°. Bei Bettlägerigkeit: Bettkopfteil hoch, Kissen im Rücken, Füße stabil. Grund: Die Schwerkraft unterstützt den Schluckakt, der Bolus rutscht Richtung Ösophagus statt Richtung Trachea.

**Umgebung**: Fernseher und Radio aus, Licht hell genug zum Sehen der Speise, Tisch oder Bett-Tisch im bequemen Abstand. Ablenkung erhöht das Aspirationsrisiko.

**Material**: Serviette oder Schutztuch (keine Lätzchen im Erwachsenenpflege — Würde!), passendes Besteck, Getränk griffbereit.

**Speisecheck**: Temperatur am Innenarm prüfen (wie bei Babyflasche), Konsistenz passt zur Kostform des Patienten, optisch erkennbar arrangiert. (DGE 2024; Expertenstandard Ernährungsmanagement DNQP 2017)"

**B1 (540 Zeichen):**
"Gute Vorbereitung ist wichtig, damit der Patient sicher essen kann und seine Würde behält:

**Sitzen**: Der Oberkörper muss mindestens 60 Grad hoch sein, besser 90 Grad. Grund: So läuft das Essen durch die Schwerkraft richtig nach unten — in die Speiseröhre, nicht in die Lunge.

**Zimmer**: Fernseher aus. Radio aus. Licht an — er muss das Essen gut sehen. Ablenkung ist gefährlich: Wer beim Sprechen isst, verschluckt sich leichter.

**Material**: Serviette bereit — **kein Lätzchen** bei Erwachsenen, das ist respektlos. Getränk und Besteck in Reichweite.

**Essen prüfen**: Temperatur am Innenarm fühlen. Passt die Konsistenz zu dem, was der Patient essen darf?"

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Aspiration, Bolus, Ösophagus, Trachea]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Lätzchen schützt die Kleidung, das ist immer sinnvoll"**
- **Fachbegriff:** Würde-vs-Praktikalität-Fehler
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — bei Erwachsenen ist ein Lätzchen ein Würdeverstoß. Nutze stattdessen eine **Serviette** oder ein Handtuch, das der Patient selbst auf den Schoß legen kann. Nur bei Kindern oder auf ausdrücklichen Wunsch des Patienten ist ein Lätzchen ok."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — ein Lätzchen macht Erwachsene klein. Das ist respektlos. Nimm eine **Serviette** oder ein Handtuch. Der Patient kann es selbst auf den Schoß legen. Lätzchen nur bei Kindern oder wenn der Patient es selbst will."

**D2: "Der Patient kann auch im Liegen essen, Hauptsache der Kopf ist leicht erhöht"**
- **Fachbegriff:** Flachlagerungs-Irrtum
- **Feedback (C1, 265 Zeichen):** "Nein — Essen im Liegen ist gefährlich. Der Oberkörper muss **über 60°** aufrecht sein. Im Liegen läuft der Bolus Richtung Trachea, das Aspirationsrisiko steigt massiv. Nur Kopf hochlagern reicht nicht — der ganze Oberkörper muss hoch. Ausnahme: nur medizinisch begründete Kontraindikation gegen Aufsitzen."
- **Feedback (B1, 235 Zeichen):** "Nein — im Liegen essen ist sehr gefährlich. Der **ganze Oberkörper** muss über 60 Grad hoch sein, nicht nur der Kopf. Im Liegen rutscht das Essen leicht in die Lunge (Aspiration). Nur hochlagern reicht nicht. Der Oberkörper muss aufrecht sein."

**D3: "Die Temperatur ist egal, der Patient sagt wenn es zu heiß ist"**
- **Fachbegriff:** Autonomie-Übertrag-Fehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — viele Patienten können das **nicht zuverlässig melden**: Demenz, Schlaganfall mit gestörter Sensibilität im Mund, Bewusstseinseinschränkung. Du bist verantwortlich für die Temperaturprüfung. Am Innenarm fühlen wie bei einer Babyflasche — das ist deine Pflicht."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — viele Patienten können das nicht gut sagen: bei Demenz, Schlaganfall, Bewusstseinsstörung. **Du** musst die Temperatur prüfen, nicht der Patient. Fühl am Innenarm, wie bei einer Babyflasche. Das ist deine Aufgabe."

### Richtig-Feedback
**C1 (250 Zeichen):** "Genau. Vorbereitung ist der erste Sicherheitscheck: Oberkörper über 60° (Aspirationsschutz), ruhige Umgebung (Fernseher aus, Licht an), Serviette statt Lätzchen (Würde), Temperatur am Innenarm prüfen. Erst dann fängst du mit dem Anreichen an."

**B1 (215 Zeichen):** "Sehr gut. Vor dem Anreichen prüfst du: Oberkörper hoch (über 60 Grad), Zimmer ist ruhig, Licht ist an, Serviette liegt bereit (kein Lätzchen!), Temperatur vom Essen passt. Erst dann geht's los."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Sitzposition braucht ein Patient mindestens, wenn er Essen angereicht bekommt? Warum?"
- **Rückseite:** "Oberkörper über 60° aufrecht (besser 90°). Grund: Die Schwerkraft leitet den Bolus in die Speiseröhre statt in die Luftröhre — Aspirationsschutz."
- **Kategorie:** handlung

---

## Baustein 2: augenhoehe-wuerde

### Metadaten
- **bausteinId:** essen-anreichen-augenhoehe
- **bloomLevel:** 2
- **wissensart:** konzept
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Du reichst einer älteren Frau Suppe an und stehst dabei. Sie muss zu dir hochschauen. Was macht das mit ihr — innerlich? Was solltest du anders machen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (210 Zeichen):** "Auf **Augenhöhe** anreichen — du setzt dich neben oder vor den Patienten. Stehen über dem Bett erzeugt Machtgefälle und Unwohlsein. Würde im Mittelpunkt: Der Patient soll nicht hochschauen müssen. (WHO 2015)"

**B1 (185 Zeichen):** "Setz dich hin. Du bist **auf Augenhöhe** mit dem Patienten. Wenn du stehst, muss er hochschauen. Das macht ihn klein. Das ist nicht gut. Setz dich neben das Bett oder vor den Stuhl."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (550 Zeichen):**
"Würde beim Anreichen heißt: **Augenhöhe, Blickkontakt, Tempo des Patienten**.

**Augenhöhe**: Du setzt dich hin. Auf einem Hocker neben dem Bett oder auf einem Stuhl vor dem Tisch. Nie von oben herab anreichen. Nie mit gekreuzten Armen danebenstehen und warten. Der Patient soll sich nicht wie ein Kind behandelt fühlen.

**Blickkontakt**: Du schaust ihn an, nicht dein Handy oder deine Kollegin im Zimmer. Das Essen ist eine intime Situation, besonders wenn er gefüttert werden muss.

**Tempo**: Der Patient bestimmt das Tempo. Nie drängen, nie 'schnell noch den letzten Löffel'. Wer hetzt, erhöht das Aspirationsrisiko und verletzt die Würde gleichzeitig. (WHO 2015; § 1901a BGB)"

**B1 (440 Zeichen):**
"Würde heißt: **Augenhöhe, Blickkontakt, sein Tempo**.

**Augenhöhe**: Du **setzt dich hin** — auf einen Hocker oder Stuhl. Nie über dem Patienten stehen. Er soll sich nicht klein fühlen.

**Blickkontakt**: Du schaust ihn an. Nicht aufs Handy. Nicht aus dem Fenster. Nicht zur Kollegin. Essen ist **persönlich** — besonders wenn jemand gefüttert werden muss.

**Sein Tempo**: Der Patient sagt, wann der nächste Bissen kommt. Nie drängen. Nie 'schnell noch einen Löffel'. Hetzen ist gefährlich (Aspiration) und respektlos."

- **Erklärungs-Step:** stepType `text` (displayFormat: scenario)
- **Glossar-Begriffe:** [Würde, Augenhöhe]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Es reicht, wenn ich freundlich bin — Stehen oder Sitzen ist egal"**
- **Fachbegriff:** Haltungs-Unterschätzung
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — **Körperhaltung ist Teil der Kommunikation**. Wer steht, während der Patient sitzt oder liegt, sendet nonverbal Machtgefälle — egal wie freundlich das Gesicht ist. Der Patient fühlt sich unterlegen. Sitzen signalisiert: Ich habe Zeit für dich."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — **die Haltung** ist wichtig, nicht nur das Lächeln. Wenn du stehst und der Patient sitzt, fühlt er sich klein. Auch wenn du nett bist. Wenn du dich hinsetzt, zeigst du: Ich habe Zeit für dich. Das ist Respekt."

**D2: "Ich muss mich beeilen, weil noch andere Patienten warten"**
- **Fachbegriff:** Zeitdruck-Rechtfertigung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — Zeitdruck ist Realität, aber **hetzen beim Essen ist zwei Dinge gleichzeitig**: respektlos UND medizinisch gefährlich (Aspirationsrisiko steigt). Lieber weniger essen als zu schnell. Der Patient ist keine Aufgabe auf der Liste. Organisiere deine Zeit so, dass er sein Tempo behalten kann."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Zeitdruck ist nicht dein Fehler. Aber **hetzen beim Essen** ist gefährlich: Der Patient verschluckt sich leichter. Und es ist respektlos. Besser: Er isst weniger als zu schnell. Organisier deine Zeit so, dass er ruhig essen kann."

**D3: "Der Patient bekommt eh nichts mit, weil er dement ist"**
- **Fachbegriff:** Demenz-Abwertungs-Fehler
- **Feedback (C1, 280 Zeichen):** "Falsch — auch Menschen mit Demenz **spüren Emotionen und Körperhaltung**, oft sogar feinfühliger als andere, weil die kognitive Filterung fehlt. Wer herablassend oder gehetzt anreicht, wird als bedrohlich wahrgenommen. Das führt zu Essensverweigerung oder Abwehr. Würde ist bei Demenz noch wichtiger, nicht weniger wichtig."
- **Feedback (B1, 240 Zeichen):** "Falsch — Menschen mit Demenz **fühlen Emotionen sehr stark**. Sie merken, ob du freundlich bist oder gestresst. Sie verstehen vielleicht keine Worte, aber sie spüren deine Haltung. Bei Demenz ist Würde **noch wichtiger**. Sie können sich nicht wehren."

### Richtig-Feedback
**C1 (235 Zeichen):** "Sehr gut. Drei Säulen der Würde beim Anreichen: Augenhöhe (du setzt dich hin), Blickkontakt (Handy weg, Patient im Fokus), Tempo des Patienten (er bestimmt, nicht die Uhr). Wer diese drei einhält, macht aus einer Pflegeaufgabe Begegnung."

**B1 (210 Zeichen):** "Sehr gut. Drei Regeln für Würde: **Sitzen** (Augenhöhe), **hinsehen** (Handy weg), **sein Tempo** (nicht deins). Dann ist das Anreichen keine Arbeit, sondern Begegnung. Das spürt jeder Patient — auch bei Demenz."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum reichst du Essen immer auf Augenhöhe an — was passiert nonverbal, wenn du stehst?"
- **Rückseite:** "Stehen erzeugt Machtgefälle (nonverbal), der Patient fühlt sich klein. Sitzen signalisiert: Ich habe Zeit für dich. Würde ist Teil der Pflegequalität."
- **Kategorie:** handlung

---

## Baustein 3: aspirationsschutz-technik

### Metadaten
- **bausteinId:** essen-anreichen-aspirationsschutz
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Wie muss der Kopf des Patienten beim Schlucken stehen — nach vorne oder nach hinten gebeugt? Und warum? Denk an den Weg, den das Essen nehmen soll."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Der Kopf ist **leicht nach vorne geneigt**, Kinn Richtung Brust. So verschließt die Epiglottis die Luftröhre besser. **Nie** Kopf nach hinten — dann ist die Trachea offen, Aspirationsrisiko steigt. Kleine Bissen, kein Druck, Ruhe zwischen den Happen."

**B1 (215 Zeichen):** "Kopf **leicht nach vorne** beugen — Kinn Richtung Brust. So macht der Kehldeckel die Luftröhre zu. **Kopf nie nach hinten** — sonst ist der Weg zur Lunge frei. Kleine Bissen. Zeit lassen zwischen den Happen. Kein Druck."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Aspirationsschutz beim Anreichen hat vier Regeln:

**1. Kopfposition**: Kinn Richtung Brust, leicht nach vorn. Anatomie dahinter: Die Epiglottis (Kehldeckel) verschließt beim Schluckakt die Trachea. Bei Kopf-nach-hinten bleibt der Weg zur Lunge offen — Aspirationsgefahr. Bei Schlaganfallpatienten mit halbseitiger Schwäche: Kopf zur **nicht-gelähmten Seite** drehen, der Bolus rutscht dann über die intakte Pharynx-Seite.

**2. Kleine Bissen**: Ein halber Teelöffel, nicht überladen. Der Schluckakt braucht Zeit, große Bissen überfordern den Rachen.

**3. Schluck abwarten**: Erst wenn du den Adamsapfel heben und senken siehst — dann der nächste Happen. Nie nachschieben.

**4. Kein Druck**: Patient bestimmt das Tempo. Wer hetzt, provoziert Verschlucken. Zwischendurch: Atempause, Husten ist erlaubt und wichtig. (DGG/DGN S1-LL Neurogene Dysphagie 2020)"

**B1 (580 Zeichen):**
"Vier Regeln zum Schutz vor Verschlucken (Aspiration):

**1. Kopf vor**: Kinn zur Brust. So macht der **Kehldeckel** (Epiglottis) den Weg zur Lunge zu. Kopf nach hinten ist gefährlich — dann ist der Weg zur Lunge offen. Bei Schlaganfall: Kopf zur **gesunden Seite** drehen, dann läuft das Essen über die gesunde Seite im Rachen.

**2. Kleine Bissen**: Ein halber Teelöffel. Nicht mehr. Große Bissen sind zu viel zum Schlucken.

**3. Warte auf den Schluck**: Du siehst den Adamsapfel hoch und runter gehen. Erst dann der nächste Happen. Nie vorher.

**4. Kein Druck**: Der Patient bestimmt das Tempo. Husten ist gut — es reinigt die Atemwege. Lass Pausen zwischen den Happen."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Epiglottis, Pharynx, Aspiration, Adamsapfel, Schluckakt]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Den Kopf nach hinten beugen hilft beim Schlucken"**
- **Fachbegriff:** Reklinations-Irrtum
- **Feedback (C1, 270 Zeichen):** "Das Gegenteil ist richtig — Kopf nach hinten (**Reklination**) öffnet die Luftröhre und ist hochgefährlich. Der Kopf muss **nach vorn** (Kinn zur Brust). Bei Trinkbechern: **Nasenschlitzbecher** nutzen — er lässt den Becher kippen ohne dass der Kopf nach hinten muss. Merke: Kopf vor, nicht zurück."
- **Feedback (B1, 235 Zeichen):** "Falsch — Kopf nach hinten ist sehr gefährlich. Dann ist der Weg zur Lunge offen. Der Kopf muss **nach vorne**. Kinn zur Brust. Für das Trinken gibt es **Nasenschlitzbecher** — der Becher kippt, der Kopf bleibt unten. Merke: Kopf vor, nicht hinten."

**D2: "Große Bissen sind effizienter, der Patient ist schneller satt"**
- **Fachbegriff:** Effizienz-Irrtum
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — große Bissen **überfordern den Schluckakt** und erhöhen massiv das Aspirationsrisiko. Ein halber Teelöffel reicht. Effizienz ist hier der falsche Maßstab. Besser: kleine Menge sicher geschluckt als große Menge aspiriert. Die Mahlzeit darf 30-45 Min dauern — das ist normal."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — große Bissen sind **gefährlich**. Der Rachen kann sie nicht gut schlucken. Dann verschluckt sich der Patient. Ein halber Teelöffel ist richtig. Schnell ist hier falsch. Die Mahlzeit kann 30-45 Minuten dauern — das ist normal."

**D3: "Wenn der Patient hustet, sollte ich ihm Wasser geben zum Beruhigen"**
- **Fachbegriff:** Husten-Missverstaendnis
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Husten ist ein **Schutzreflex**, der die Atemwege reinigt. Nie sofort Wasser oder Essen hinterher — das kann alles in die Lunge spülen. Richtig: Warten bis der Husten vorbei ist, Patient aufsetzen lassen, abhusten lassen. Dann Pause. Dann vorsichtig weiter oder abbrechen. Nie gegen den Husten anarbeiten."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — Husten ist ein **Schutz**. Er reinigt die Lunge. Wenn du jetzt Wasser gibst, rutscht alles in die Lunge. Richtig: Warten bis er nicht mehr hustet. Sitzen lassen. Abhusten lassen. Pause machen. Dann vielleicht weiter — oder aufhören. Nie gegen den Husten."

### Richtig-Feedback
**C1 (270 Zeichen):** "Sehr gut. Die vier Regeln: Kopf **vor** (Kinn zur Brust, Epiglottis schließt Trachea), **kleine Bissen** (halber Teelöffel), **Schluck abwarten** (Adamsapfel beobachten), **kein Druck** (Patient bestimmt Tempo). Bei Schlaganfall: Kopf zur nicht-gelähmten Seite."

**B1 (245 Zeichen):** "Sehr gut. Vier Regeln merken: Kopf **nach vorn** (Kinn zur Brust), **kleine Bissen** (halber Teelöffel), **warten** bis geschluckt (Adamsapfel sehen), **nicht drängeln** (Patient bestimmt). Bei Schlaganfall: Kopf zur gesunden Seite drehen."

### Verknüpfte Karteikarte
- **Vorderseite:** "In welche Richtung muss der Kopf beim Schlucken stehen — und warum?"
- **Rückseite:** "Kinn Richtung Brust (leicht nach vorne). Die Epiglottis verschließt so die Trachea. Kopf nach hinten (Reklination) öffnet die Luftröhre — Aspirationsgefahr."
- **Kategorie:** handlung

---

## Baustein 4: dysphagie-zeichen

### Metadaten
- **bausteinId:** essen-anreichen-dysphagie-zeichen
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient nach Schlaganfall isst seinen Pudding. Nach 3 Löffeln hörst du, dass seine Stimme plötzlich 'gurgelnd' klingt. Was könnte passiert sein? Was tust du als nächstes?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "**Dysphagie** = Schluckstörung. Warnzeichen beim Anreichen: Husten, Räuspern, Nahrungsreste im Mund, **gurgelnde Stimme** nach dem Schlucken (Nasses-Stimme-Zeichen), verlängerte Essensdauer, Angst vor dem Schlucken. Ursachen: Schlaganfall, Parkinson, Demenz, Kopf-Hals-Tumor."

**B1 (225 Zeichen):** "**Dysphagie** = Schluckstörung. Zeichen beim Essen: Husten, Räuspern, Essen bleibt im Mund, **gurgelnde Stimme** nach dem Schlucken (klingt nass), Essen dauert sehr lang, Angst vorm Schlucken. Häufige Ursachen: Schlaganfall, Parkinson, Demenz, Tumor im Mund-Hals-Bereich."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"**Dysphagie** bedeutet Schluckstörung. Sie betrifft ca. 50% aller Schlaganfallpatienten in der Akutphase, 60% der Parkinson-Patienten im Verlauf, viele Patienten mit fortgeschrittener Demenz und alle mit Kopf-Hals-Tumoren.

**Warnzeichen beim Essen/Trinken:**
- **Husten** oder Räuspern während oder nach dem Schlucken
- **Nahrungsreste im Mund** nach dem Schluckakt (Taschenbildung in den Wangen)
- **Nasse, gurgelnde Stimme** nach dem Schlucken (Zeichen: Speisereste auf den Stimmbändern)
- **Verlängerte Essensdauer** (>45 Min für eine normale Portion)
- **Austritt von Speichel oder Speisen** aus dem Mund (Leaking)
- **Angst vor dem Essen**, Verweigerung, Gewichtsverlust
- **Wiederkehrende Pneumonien** (stiller Aspirations-Hinweis)

**Komplikationen**: Aspirationspneumonie, Mangelernährung, Dehydration, sozialer Rückzug (Scham beim Essen).

**Konsequenz**: Jedes dieser Zeichen → **stopp**, Pflegekraft informieren, **GUSS-Test** oder 3-Schluck-Test durch geschultes Personal, Logopädie-Konsil. Kein erzwungenes Weiteressen. (DGG/DGN S1-LL 2020)"

**B1 (580 Zeichen):**
"**Dysphagie** heißt Schluckstörung. Sie tritt oft auf bei:
- **Schlaganfall** (Hälfte der Patienten am Anfang)
- **Parkinson** (60% im Verlauf)
- **Demenz** (fortgeschritten)
- **Tumor im Mund-Hals-Bereich**

**Zeichen, die du beim Essen siehst:**
- **Husten** beim Schlucken oder danach
- **Essen bleibt im Mund** (zwischen Wange und Zahn)
- **Gurgelnde Stimme** nach dem Schlucken — klingt wie nass
- **Essen dauert sehr lang** (über 45 Minuten)
- **Speichel oder Essen läuft raus**
- **Angst vorm Essen**, er will nichts mehr
- **Oft Lungenentzündung** — Hinweis auf stille Aspiration

**Was passieren kann**: Lungenentzündung (Aspirationspneumonie), zu wenig essen und trinken (Mangelernährung, Austrocknung), Scham → kein Essen mehr in Gesellschaft.

**Was du tust**: Aufhören. Pflegekraft rufen. **GUSS-Test** oder 3-Schluck-Test machen lassen. Logopädie organisieren. Nie zwingen."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Dysphagie, Aspirationspneumonie, Leaking, stille Aspiration]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn der Patient nicht hustet, hat er keine Schluckstörung"**
- **Fachbegriff:** Stille-Aspirations-Blindheit
- **Feedback (C1, 285 Zeichen):** "Gefährlicher Irrtum — bis zu **40% der Schluckstörungen bei Schlaganfall verlaufen 'still'**. Der Patient aspiriert kleine Mengen, hustet aber nicht (Schutzreflex fehlt). Hinweise: wiederkehrende Pneumonien, unerklärtes Fieber, gurgelnde Stimme. Husten-Abwesenheit ist **kein** Beweis für sicheren Schluckakt."
- **Feedback (B1, 260 Zeichen):** "Gefährlich falsch — viele Patienten mit Schlaganfall aspirieren **ohne zu husten** (stille Aspiration). Sie haben den Hustenreflex verloren. Zeichen sind: **oft Lungenentzündung**, Fieber ohne Grund, nasse Stimme. Kein Husten heißt **nicht** sicher. Immer alle Zeichen prüfen."

**D2: "Langsames Essen ist normal bei alten Leuten, kein Warnzeichen"**
- **Fachbegriff:** Alters-Normalisierung
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — **Essdauer über 45 Min für eine Portion** ist ein Warnzeichen, nicht Altersnormalität. Gesunde alte Menschen essen etwas langsamer, aber nicht 60-90 Min. Bei sehr langer Essdauer: Dysphagie-Verdacht. Kombiniert mit Gewichtsverlust = klare Indikation für Assessment (GUSS-Test)."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **über 45 Minuten** für eine Portion ist **kein normales Alter**, sondern ein Warnzeichen. Alte Menschen essen etwas langsamer, aber nicht 60-90 Minuten. Wenn dazu noch **Gewichtsverlust** kommt, muss jemand einen **GUSS-Test** machen."

**D3: "Bei Schluckstörung einfach pürieren — das löst das Problem"**
- **Fachbegriff:** Konsistenz-Pauschalisierung
- **Feedback (C1, 295 Zeichen):** "Nicht ausreichend — Dysphagie ist **individuell**. Manche Patienten haben mehr Probleme mit dünnen Flüssigkeiten (brauchen Andicken), andere mit festen Speisen (brauchen Püree). Manche können beides nicht sicher. Nur ein **GUSS-Test oder Logopädie-Assessment** zeigt, welche **IDDSI-Konsistenz** passt. Pürieren allein kann sogar gefährlicher sein (z.B. Klümpchen)."
- **Feedback (B1, 260 Zeichen):** "Nicht genug — jeder Patient ist **verschieden**. Manche haben Probleme mit dünnen Getränken, andere mit festem Essen. Nur ein **GUSS-Test** oder die Logopädie sieht, was er essen kann. Pürieren allein reicht nicht — es kann sogar gefährlich sein, wenn Klümpchen drin sind."

### Richtig-Feedback
**C1 (275 Zeichen):** "Sehr gut. Dysphagie-Warnzeichen: Husten/Räuspern, Nahrungsreste im Mund, gurgelnde Stimme nach dem Schlucken, >45 Min Essdauer, Leaking, Angst vorm Essen, wiederkehrende Pneumonien. Häufigste Ursachen: Schlaganfall, Parkinson, Demenz, Kopf-Hals-Tumor. Bei Verdacht: GUSS-Test."

**B1 (240 Zeichen):** "Sehr gut. Zeichen für Schluckstörung: Husten beim Essen, Essen bleibt im Mund, nasse Stimme nach dem Schlucken, Essen dauert sehr lang, Essen läuft raus, Angst vorm Essen, oft Lungenentzündung. Häufig bei Schlaganfall, Parkinson, Demenz."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 5 Warnzeichen für eine Dysphagie, die du beim Anreichen siehst."
- **Rückseite:** "(1) Husten/Räuspern beim Schlucken, (2) Nahrungsreste im Mund, (3) gurgelnde/nasse Stimme nach dem Schlucken, (4) Essdauer >45 Min, (5) Leaking (Speichel/Essen läuft raus). Plus: wiederkehrende Pneumonien (stille Aspiration)."
- **Kategorie:** assessment

---

## Baustein 5: guss-test

### Metadaten
- **bausteinId:** essen-anreichen-guss-test
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Du hast den Verdacht, dass Herr Becker nach seinem Schlaganfall nicht sicher schlucken kann. Wie prüfst du das — strukturiert, Schritt für Schritt, ohne ihn zu gefährden?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "**GUSS-Test** (Gugging Swallowing Screen, Trapl 2007): Vier Stufen, jede muss bestanden werden. Start: **trockener Schluck** (Speichel). Dann: **Pudding** (halbfest). Dann: **Wasser** (dünn). Dann: **festes Brot**. Bei Versagen → stopp + Logopädie."

**B1 (230 Zeichen):** "**GUSS-Test** — so prüfst du das Schlucken in 4 Stufen: Zuerst **trockener Schluck** (nur Speichel). Dann **Pudding** (dickflüssig). Dann **Wasser**. Dann **Brot** (fest). Jede Stufe muss klappen. Wenn eine nicht klappt: **stopp** und Logopädie holen."

- **Step-Typ:** sequencing (4 Stufen in richtiger Reihenfolge)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Der **GUSS-Test** (Gugging Swallowing Screen) wurde 2007 von Trapl et al. in Wien entwickelt und validiert (Stroke 2007;38:2948-2952). Er ist das **Standard-Screening** für Dysphagie bei Schlaganfallpatienten und findet heute breite Anwendung.

**Voraussetzung**: Patient ist wach, sitzt über 60°, kann auf Ansprache reagieren, kann 1× willkürlich husten.

**Vier Stufen** (aufsteigende Schwierigkeit, jede muss bestanden werden):

**Stufe 1 — Indirekter Schluck (trocken)**: Speichel schlucken lassen. Beobachten: Schluckakt da? Husten? Stimme nach Schlucken klar?

**Stufe 2 — Halbfeste Konsistenz**: 1/3 Teelöffel Pudding oder Joghurt. Dann auf 5 TL steigern. Beobachten: Schluckverzögerung (>2 sek)? Husten? Stimmveränderung? Leaking?

**Stufe 3 — Flüssige Konsistenz**: 3, 5, 10, 20 ml Wasser. Gleiche Kriterien.

**Stufe 4 — Feste Konsistenz**: Trockenes Brot. 5× testen. Gleiche Kriterien.

**Punkte 0-20**: 0-9 = schwere Dysphagie (nur Logopädie, orale Kost verboten), 10-14 = mittelschwere Dysphagie (angepasste Kost), 15-19 = leichte Dysphagie, 20 = keine Dysphagie.

**Regel**: Bei **jedem** Versagen einer Stufe → sofort stopp, nächste Stufen NICHT durchführen, Logopädie-Konsil. (Trapl et al., 2007)"

**B1 (620 Zeichen):**
"Der **GUSS-Test** heißt Gugging Swallowing Screen (Dr. Trapl, 2007). Mit diesem Test prüfst du, ob ein Patient sicher schlucken kann — besonders nach Schlaganfall.

**Vorher prüfen**: Patient ist wach. Er sitzt aufrecht (über 60°). Er kann auf Fragen antworten. Er kann einmal husten.

**Vier Stufen** — jede muss klappen:

**Stufe 1 — Speichel schlucken**: Nur Speichel. Schluckt er? Hustet er? Ist die Stimme danach klar?

**Stufe 2 — Pudding**: Kleine Löffel Pudding. Schluckt er schnell genug? Kein Husten?

**Stufe 3 — Wasser**: Kleine Mengen: 3, 5, 10, 20 ml.

**Stufe 4 — Brot**: Trockenes Brot. 5 Mal probieren.

**Punkte 0-20**: 0-9 = schwer krank (nichts essen, nur Logopädie). 10-14 = mittel (angepasstes Essen). 15-19 = leicht. 20 = gesund.

**Wichtig**: Wenn eine Stufe **nicht klappt** — **sofort aufhören**. Nächste Stufe **nicht** machen. **Logopädie rufen**."

- **Erklärungs-Step:** stepType `timeline` (4 Stufen als Timeline mit Kriterien)
- **Glossar-Begriffe:** [GUSS, Schluckscreening, Logopädie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ich fange gleich mit Wasser an, das ist am schnellsten"**
- **Fachbegriff:** Reihenfolge-Fehler
- **Feedback (C1, 280 Zeichen):** "Falsch und **gefährlich** — Wasser (dünne Flüssigkeit) ist **am schwierigsten** zu schlucken, weil es schnell Richtung Trachea läuft. Reihenfolge: **trocken → halbfest → flüssig → fest**. Die Stufen bauen aufeinander auf. Wer mit Wasser anfängt, riskiert Aspiration, bevor man überhaupt etwas weiß."
- **Feedback (B1, 250 Zeichen):** "Falsch und gefährlich — **Wasser ist am schwersten** zu schlucken, nicht am einfachsten. Es läuft schnell in die Lunge. Richtige Reihenfolge: **trocken → Pudding → Wasser → Brot**. Immer von leicht zu schwer. Wer mit Wasser anfängt, kann dem Patienten schaden."

**D2: "Wenn Stufe 2 nicht klappt, probiere ich Stufe 3 trotzdem — vielleicht geht es"**
- **Fachbegriff:** Abbruch-Regel-Verletzung
- **Feedback (C1, 285 Zeichen):** "Gefährlich — der GUSS-Test hat **strikte Abbruch-Regeln**: Wer Stufe 2 (Pudding) nicht sicher schluckt, schafft Stufe 3 (Wasser) ganz sicher nicht — und aspiriert. **Jedes Versagen = sofort stopp**, Logopädie informieren. Der Test ist **kein Versuch-und-Irrtum-Verfahren**, sondern ein Sicherheits-Screening."
- **Feedback (B1, 245 Zeichen):** "Gefährlich — der Test hat eine klare Regel: **Wenn eine Stufe nicht klappt, sofort aufhören**. Nie die nächste Stufe probieren. Wer Pudding nicht schafft, schafft auch Wasser nicht — und verschluckt sich. Stopp heißt stopp. Dann kommt die Logopädie."

**D3: "Der GUSS-Test ist nur für Schlaganfallpatienten gedacht"**
- **Fachbegriff:** Anwendungs-Einschraenkung
- **Feedback (C1, 270 Zeichen):** "Fast richtig — **ursprünglich** wurde der GUSS für Schlaganfall validiert. Heute wird er breit eingesetzt: Parkinson, Demenz mit Ess-Problemen, nach Intubation, bei Kopf-Hals-Tumoren. Wichtig: Er ist ein Screening, **kein Diagnose-Tool** — bei Auffälligkeit immer Logopädie-Assessment nachholen."
- **Feedback (B1, 235 Zeichen):** "Fast richtig — zuerst war der GUSS für Schlaganfall gemacht. Heute nehmen wir ihn auch bei anderen Patienten: Parkinson, Demenz, nach Beatmung, bei Tumor im Mund-Hals-Bereich. Er ist ein **Screening** (kurzer Check), keine volle Diagnose."

### Richtig-Feedback
**C1 (280 Zeichen):** "Sehr gut. Der GUSS-Test (Trapl 2007) prüft das Schlucken in 4 aufsteigenden Stufen: 1. Speichel (trocken), 2. Pudding (halbfest), 3. Wasser (flüssig), 4. Brot (fest). Bei Versagen einer Stufe: sofort stopp + Logopädie. Punkte 0-20 zeigen Schweregrad der Dysphagie."

**B1 (240 Zeichen):** "Sehr gut. Der GUSS-Test hat 4 Stufen — immer von leicht zu schwer: 1. **Speichel**, 2. **Pudding**, 3. **Wasser**, 4. **Brot**. Wenn eine Stufe nicht klappt: **sofort stopp** und Logopädie rufen. Die Punkte (0-20) zeigen, wie schlimm die Schluckstörung ist."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was sind die 4 Stufen des GUSS-Tests in richtiger Reihenfolge?"
- **Rückseite:** "1. Speichel (trockener Schluck), 2. Pudding (halbfeste Konsistenz), 3. Wasser (flüssig), 4. Brot (fest). Bei Versagen: sofort stopp + Logopädie. (Trapl et al. 2007, Stroke)"
- **Kategorie:** assessment

---

## Baustein 6: iddsi-framework

### Metadaten
- **bausteinId:** essen-anreichen-iddsi
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Wie kannst du international eindeutig sagen, wie dick ein Getränk für einen Dysphagie-Patienten sein soll — sodass eine Kollegin in Wien, Ankara oder New York dasselbe versteht?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "**IDDSI** (International Dysphagia Diet Standardisation Initiative, 2019) — internationaler Standard. Flüssigkeiten: Level **0-4** (dünn → extrem dick). Nahrung: Level **3-7** (flüssig → normal). Dazwischen Überschneidung Level 3/4. Getestet mit Flow-Test (10 ml Spritze)."

**B1 (220 Zeichen):** "**IDDSI** ist ein internationaler Standard für Dysphagie-Kost (seit 2019). **Getränke**: Level 0-4 (von dünn bis sehr dick). **Essen**: Level 3-7 (von flüssig bis normal). Getestet wird mit einer **10-ml-Spritze** (Flow-Test)."

- **Step-Typ:** matrix (IDDSI-Leiter: Levels 0-7 mit Beispielen)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"**IDDSI** = International Dysphagia Diet Standardisation Initiative. Das 2019 eingeführte Framework ersetzt alle alten nationalen Konsistenz-Bezeichnungen ('Nektar', 'Honig', 'Pudding') durch standardisierte Level 0-7.

**Getränke/Flüssigkeiten (Level 0-4)**:
- **Level 0 — Thin**: normales Wasser, Saft
- **Level 1 — Slightly Thick**: leicht angedickt (ähnlich Nektar in alter Nomenklatur)
- **Level 2 — Mildly Thick**: Sirup-Konsistenz
- **Level 3 — Moderately Thick**: Honig-ähnlich, läuft langsam
- **Level 4 — Extremely Thick**: Pudding-Konsistenz, Löffel steht

**Nahrung (Level 3-7)** — Überschneidung mit Getränken bei 3/4:
- **Level 3 — Liquidised**: dickflüssig wie Sahne
- **Level 4 — Pureed**: Püree, kein Kauen nötig
- **Level 5 — Minced & Moist**: fein gehackt + feucht
- **Level 6 — Soft & Bite-Sized**: weich, mundgerecht geschnitten
- **Level 7 — Regular**: normale Kost

**Flow-Test**: Standardisierter Test mit **10-ml-Spritze**: Wie viel ml läuft in 10 Sek durch? Level 1: 1-4 ml übrig. Level 2: 4-8 ml übrig. Level 3: >8 ml übrig.

**Warum IDDSI?** Weltweit einheitlich — eine Pflegekraft in Berlin, Istanbul oder Toronto meint genau dasselbe. Keine Missverständnisse bei Kostformanordnungen mehr. (IDDSI, 2019)"

**B1 (660 Zeichen):**
"**IDDSI** ist ein internationaler Standard für Dysphagie-Kost. Seit 2019. Er ersetzt alte Namen wie 'Nektar' oder 'Honig'. Stattdessen gibt es **Nummern (Level) 0 bis 7**.

**Getränke** (Level 0 bis 4):
- **Level 0** — dünn (Wasser, Saft)
- **Level 1** — leicht angedickt
- **Level 2** — angedickt wie Sirup
- **Level 3** — dick wie Honig (läuft langsam)
- **Level 4** — sehr dick wie Pudding (Löffel steht)

**Essen** (Level 3 bis 7):
- **Level 3** — dickflüssig wie Sahne
- **Level 4** — Püree (kein Kauen)
- **Level 5** — klein gehackt + feucht
- **Level 6** — weich, mundgerecht geschnitten
- **Level 7** — normale Kost

**Flow-Test** prüft die Konsistenz: Eine 10-ml-Spritze füllen. Wie viel läuft in 10 Sekunden durch? Das zeigt das Level.

**Warum gibt es IDDSI?** Weltweit **gleich**. Pflegekräfte in allen Ländern verstehen sich. Kein Durcheinander mehr bei Namen wie 'Nektar' oder 'Honig'."

- **Erklärungs-Step:** stepType `matrix` (IDDSI-Leiter + Beispiele)
- **Glossar-Begriffe:** [IDDSI, Flow-Test, Konsistenz, Nektarkonsistenz, Honigkonsistenz, Puddingkonsistenz]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Je dicker das Getränk, desto sicherer für jeden Dysphagie-Patienten"**
- **Fachbegriff:** Dicker-ist-besser-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht pauschal richtig — zu dickes Getränk bedeutet: Patient trinkt weniger (Dehydration), Medikamente bleiben im Becher kleben, Geschmack verändert sich. Das **individuell passende Level** (über GUSS + Logopädie) ist richtig, nicht das dickste. Manche Patienten schlucken Level 2 sicher, würden aber Level 4 verweigern."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — zu dick ist nicht immer besser. Dann trinkt der Patient zu wenig (trocken), Tabletten bleiben kleben, es schmeckt nicht. Das **richtige Level** kommt aus dem GUSS-Test und der Logopädie — nicht immer das dickste. Manchmal reicht Level 2."

**D2: "Nektar, Honig, Pudding sind die offiziellen Begriffe"**
- **Fachbegriff:** Alte-Nomenklatur-Verwendung
- **Feedback (C1, 280 Zeichen):** "Nicht mehr — seit **IDDSI 2019** werden die Begriffe 'Nektar', 'Honig', 'Pudding' durch **Level 1-4** ersetzt. Sie sind **nicht mehr offiziell**. Grund: Die Begriffe waren uneinheitlich — 'Honig' in Deutschland war etwas anderes als 'Honey' in England. IDDSI-Level sind weltweit gleich und messbar (Flow-Test)."
- **Feedback (B1, 250 Zeichen):** "Nicht mehr — seit **2019** gibt es IDDSI. Die alten Namen 'Nektar', 'Honig', 'Pudding' sind **veraltet**. Jetzt sagen wir **Level 1, 2, 3, 4**. Grund: 'Honig' in Deutschland war anders als 'Honey' in England. IDDSI ist **weltweit gleich** und mit der Spritze messbar."

**D3: "Püriertes Essen ist automatisch Level 4"**
- **Fachbegriff:** Püree-Level-Verwechslung
- **Feedback (C1, 285 Zeichen):** "Nicht automatisch — **Püree (Pureed)** ist Level 4 **bei Nahrung**. Aber: Ein zu flüssiges Püree fällt in Level 3 (Liquidised), ein klumpiges Püree verstößt gegen die Regel 'kein Kauen nötig'. Prüfung: Das Püree muss vom **Löffel plumpsen**, nicht laufen, und keine Klümpchen enthalten. Sonst → Aspirationsgefahr."
- **Feedback (B1, 255 Zeichen):** "Nicht immer — **Püree (Level 4)** muss die richtige Konsistenz haben: Es **fällt vom Löffel in einem Stück**, es läuft nicht, und es hat **keine Klümpchen**. Zu flüssiges Püree ist Level 3. Ein Püree mit Klumpen ist gefährlich — dann kann der Patient sich verschlucken."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. IDDSI (2019) ist der internationale Standard für Dysphagie-Kost. Getränke: Level 0-4 (dünn → Pudding). Nahrung: Level 3-7 (Liquidised → Regular). Ersetzt alte Namen wie Nektar, Honig, Pudding. Flow-Test mit 10-ml-Spritze prüft objektiv. Weltweit einheitlich, messbar, sicher."

**B1 (255 Zeichen):** "Sehr gut. IDDSI ist seit 2019 **weltweiter Standard**. Getränke: Level 0 bis 4 (dünn bis Pudding). Essen: Level 3 bis 7 (flüssig bis normal). Die alten Namen (Nektar, Honig, Pudding) sind weg. Der **Flow-Test** mit der 10-ml-Spritze prüft genau, welches Level."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist IDDSI und welche Level gibt es für Getränke vs. Nahrung?"
- **Rückseite:** "IDDSI = International Dysphagia Diet Standardisation Initiative (2019). Getränke: Level 0-4 (dünn → Pudding-Konsistenz). Nahrung: Level 3-7 (Liquidised → Regular). Weltweit einheitlicher Standard, ersetzt alte Namen. Test: Flow-Test mit 10-ml-Spritze."
- **Kategorie:** fachbegriff

---

## Baustein 7: andicken-getraenke

### Metadaten
- **bausteinId:** essen-anreichen-andicken
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Dein Patient hat Dysphagie und braucht angedickten Tee. Wie machst du das sicher? Was passiert im Becher, wenn du zu viel Pulver nimmst — oder zu wenig?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "**Andickungspulver** (z.B. Resource ThickenUp, Thick&Easy) — Menge nach Herstellerangabe in mg pro 100 ml Flüssigkeit. Einrühren, **2 Minuten warten**, erneut umrühren, dann IDDSI-Level prüfen (Flow-Test). Zu viel = Klümpchen, zu wenig = zu dünn."

**B1 (215 Zeichen):** "**Andickungspulver** gibt es als Fertigprodukt. Menge steht auf der Packung (mg pro 100 ml). So geht's: Pulver in die Flüssigkeit geben. Gut umrühren. **2 Minuten warten**. Nochmal rühren. Dann prüfen, ob es passt."

- **Step-Typ:** stepbystep (Andicken Schritt-für-Schritt)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"**Andickungsmittel** sind Pulver aus modifizierter Stärke oder Xanthan, die Flüssigkeit binden ohne den Geschmack stark zu verändern. Marken in Deutschland: Resource ThickenUp Clear (Nestlé), Thick&Easy (Fresenius), Nutilis Clear (Nutricia).

**Dosierung**: Streng nach Herstellerangabe. Typisch: 1 gestrichener Löffel pro 100 ml für Level 2 (Mildly Thick), 2 Löffel für Level 3 (Moderately Thick), 3 Löffel für Level 4 (Extremely Thick). Genaue Werte **immer** auf der Packung nachlesen.

**Vorgehen (Schritt-für-Schritt)**:
1. Flüssigkeit in Becher füllen (Zimmertemperatur, keine kohlensäurehaltigen Getränke)
2. Pulver gleichmäßig einstreuen, **nicht** klumpenweise
3. 20-30 Sekunden kräftig umrühren
4. **2 Minuten ruhen lassen** — Stärke/Xanthan quillt
5. Nochmal kurz umrühren
6. **IDDSI-Level prüfen**: Flow-Test oder mit Löffel — läuft/fällt es wie angefordert?

**Häufige Fehler**:
- Pulver auf warme Flüssigkeit: löst schlechter auf → Klumpen
- Nicht warten: Konsistenz stimmt noch nicht, beim Schlucken dickt es nach
- Kohlensäure: CO2 zerstört die Struktur

**Medikamente** niemals im angedickten Getränk geben, außer Absprache mit Apotheke — manche Wirkstoffe binden an Stärke/Xanthan. (IDDSI 2019; Hersteller-Fachinfos)"

**B1 (560 Zeichen):**
"**Andickungspulver** macht Getränke dick. Marken: Resource ThickenUp, Thick&Easy, Nutilis. Die Menge steht auf der Packung.

**So geht's Schritt für Schritt**:

1. Getränk in den Becher (normal kalt oder lauwarm, **keine Sprudel-Getränke**).
2. Pulver **gleichmäßig** einstreuen (nicht alles auf einen Punkt).
3. 20-30 Sekunden gut umrühren.
4. **2 Minuten warten** — das Pulver quillt.
5. Noch einmal kurz umrühren.
6. **Prüfen**: Wie fließt es? Passt es zum IDDSI-Level, das der Patient braucht?

**Typische Fehler**:
- Pulver in heißes Getränk → **Klumpen**
- Nicht warten → es dickt nach, der Patient bekommt zu dick
- **Sprudel-Getränke** → Kohlensäure zerstört die Dicke

**Medikamente** nie einfach reinmischen — frag die Apotheke."

- **Erklärungs-Step:** stepType `stepbystep` (Anleitung in 6 Schritten)
- **Glossar-Begriffe:** [Andickungspulver, Xanthan, Flow-Test]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ich rühre einmal um und gebe es direkt dem Patienten"**
- **Fachbegriff:** Quell-Zeit-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — das Pulver braucht **2 Minuten Quellzeit**. Sofort gegeben ist die Flüssigkeit **zu dünn** und dickt erst im Mund/Rachen nach — genau dann, wenn es bereits beim Schlucken ist. Das ist gefährlich: falsches IDDSI-Level → Aspirationsrisiko. Immer warten und dann prüfen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das Pulver braucht **2 Minuten Zeit**. Sofort ist es noch zu dünn. Im Mund wird es dann erst richtig dick — genau beim Schlucken. Das ist **gefährlich**. Immer warten und dann noch einmal prüfen, wie dick es ist."

**D2: "Ich kann die Konsistenz mit dem Daumen prüfen — fühlt sich gut an"**
- **Fachbegriff:** Subjektiver-Test-Fehler
- **Feedback (C1, 270 Zeichen):** "Nicht ausreichend — subjektives Gefühl ist **ungenau**. Der **IDDSI Flow-Test** mit einer 10-ml-Spritze ist objektiv: Spritze füllen, Finger weg, 10 Sekunden laufen lassen. Was übrig bleibt, zeigt das Level. Oder: Löffel-Test für Level 4 — Konsistenz bleibt auf dem Löffel beim Kippen."
- **Feedback (B1, 240 Zeichen):** "Nicht genug — mit dem Finger ist **ungenau**. Besser: **Flow-Test** mit einer 10-ml-Spritze. Spritze füllen, loslassen, 10 Sekunden laufen lassen. Was drin bleibt, zeigt das Level. Für dicke Level 4: Der Löffel kippt — fällt das Pulver oder bleibt es?"

**D3: "Ich gebe Cola mit Andickungspulver, das schmeckt besser"**
- **Fachbegriff:** Kohlensaeure-Irrtum
- **Feedback (C1, 285 Zeichen):** "Falsch — **Kohlensäure zerstört** die Andickung. Das CO2 löst die Bindung der modifizierten Stärke/Xanthan. Das Getränk wird wieder dünn — und sprudelt. Nicht sicher. Stille Getränke nehmen: Wasser, Tee, Saft (ohne Kohlensäure), Kaffee. Wenn der Patient unbedingt Cola möchte, muss das Logopädie-/Ärzte-Absprache sein."
- **Feedback (B1, 260 Zeichen):** "Falsch — **Sprudel** macht die Andickung kaputt. Das CO2 löst die Bindung auf. Dann ist das Getränk wieder dünn — und sprudelt dazu. Das ist **nicht sicher**. Besser: stilles Wasser, Tee, Saft ohne Sprudel, Kaffee. Wenn Cola sein muss → mit der Logopädie besprechen."

### Richtig-Feedback
**C1 (275 Zeichen):** "Sehr gut. Andicken richtig: 1. Flüssigkeit (Zimmertemperatur, keine Kohlensäure) in Becher. 2. Pulver nach Herstellerangabe einstreuen. 3. Gründlich umrühren. 4. **2 Min quellen lassen**. 5. Nochmal rühren. 6. IDDSI-Level mit Flow-Test prüfen. Dann erst zum Patienten bringen."

**B1 (240 Zeichen):** "Sehr gut. So dickst du richtig an: **Pulver einstreuen** (Menge von Packung), **gut rühren**, **2 Minuten warten** (quellen lassen), **nochmal rühren**, **prüfen** (Flow-Test mit Spritze). Nie Sprudel-Getränke. Nie Medikamente reinmischen ohne Absprache."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum musst du nach dem Einrühren von Andickungspulver 2 Minuten warten?"
- **Rückseite:** "Modifizierte Stärke/Xanthan braucht Zeit zum Quellen. Sofort gegeben ist das Getränk noch zu dünn und dickt erst im Mund/Rachen nach — mitten im Schluckakt → Aspirationsgefahr. Immer 2 Min warten, dann prüfen."
- **Kategorie:** handlung

---

## Baustein 8: spezielle-becher

### Metadaten
- **bausteinId:** essen-anreichen-becher
- **bloomLevel:** 2
- **wissensart:** maßnahme
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Dein Patient mit Dysphagie darf seinen Kopf nicht nach hinten kippen. Aber beim Trinken aus einem normalen Becher muss der Kopf ganz hinten sein, um den letzten Schluck zu bekommen. Wie löst du das?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "**Nasenschlitzbecher** — Becher mit Ausschnitt für die Nase. Der Becher kann gekippt werden, **ohne dass der Kopf nach hinten muss**. Alternative: **Ausgussbecher** mit Schnabel (wie kleiner Krug). Für Halbseitenlähmung: Becher mit zwei Griffen."

**B1 (220 Zeichen):** "Es gibt besondere Becher für Dysphagie-Patienten. Der **Nasenschlitzbecher** hat einen Ausschnitt für die Nase. So kannst du den Becher kippen — **der Kopf bleibt unten**. Der **Ausgussbecher** hat einen kleinen Schnabel zum Trinken."

- **Step-Typ:** comparison (3 Bechertypen)

### Stufe 3 — Erklärung

**C1 (580 Zeichen):**
"Spezielle Trinkhilfen lösen das Problem: Normaler Becher erzwingt Kopf-Reklination am Ende — Aspirationsgefahr.

**Nasenschlitzbecher**: Becher mit halbkreisförmigem Ausschnitt am oberen Rand, der Platz für die Nase schafft. Ergebnis: Der Becher kippt, der Boden geht nach oben, aber **der Kopf bleibt in leichter Vornüberneigung**. Typischer Einsatz: Schlaganfall, Parkinson, Demenz mit Dysphagie.

**Ausgussbecher (Schnabelbecher)**: Deckel mit kleinem Ausguss. Kontrollierte kleine Mengen pro Schluck. Für Patienten mit Koordinationsproblemen, leichter Dysphagie oder Halbseitenlähmung. Nachteil: Vorsicht mit heißen Getränken — der Schnabel verdeckt die Temperatur.

**Doppelgriff-Becher**: Zwei Henkel für beide Hände — bei Halbseitenlähmung, Zittern, Kraftminderung.

**Trinkhalm**: Nur auf ärztliche/logopädische Empfehlung. Manche Patienten saugen zu schnell → Aspirationsgefahr. Andere profitieren, weil sie kontrollierter schlucken.

**Pflegerichtlinie**: Das Hilfsmittel wird über Logopädie und Ergotherapie angepasst. Nicht einfach 'irgendeinen Becher' nehmen. (DGG/DGN 2020)"

**B1 (480 Zeichen):**
"Es gibt 4 besondere Becher für Dysphagie-Patienten:

**1. Nasenschlitzbecher**: Ein **Ausschnitt für die Nase** ist im Becher. So kannst du den Becher hochkippen — **der Kopf bleibt unten**. Gut bei Schlaganfall, Parkinson, Demenz.

**2. Ausgussbecher (Schnabelbecher)**: Becher mit **Deckel und kleinem Schnabel**. Nur kleine Schlucke pro Mal. Gut bei Koordinationsproblemen oder Halbseitenlähmung. **Vorsicht bei heißen Getränken** — der Schnabel versteckt die Temperatur.

**3. Doppelgriff-Becher**: **Zwei Henkel** — für beide Hände. Gut bei einseitiger Lähmung oder Zittern.

**4. Trinkhalm**: **Nur auf Anordnung** — nicht einfach so. Manche Patienten saugen zu schnell und verschlucken sich.

Die **Logopädie** oder **Ergotherapie** sagt, welcher Becher passt."

- **Erklärungs-Step:** stepType `comparison` (4 Bechertypen mit Bild-Beschreibung)
- **Glossar-Begriffe:** [Nasenschlitzbecher, Ausgussbecher, Reklination]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Strohhalm ist die einfachste Lösung für alle Dysphagie-Patienten"**
- **Fachbegriff:** Strohhalm-Pauschalloesung
- **Feedback (C1, 290 Zeichen):** "Nicht pauschal — ein **Strohhalm kann gefährlich** sein: Manche Patienten saugen zu stark und bekommen zu viel Flüssigkeit auf einmal → Aspiration. Der Strohhalm wird **nur auf Anordnung** (Logopädie/Arzt) eingesetzt, nicht als Standardlösung. Oft besser: Nasenschlitzbecher oder kleine Schlucke aus Tasse."
- **Feedback (B1, 255 Zeichen):** "Nicht immer — ein **Strohhalm kann gefährlich sein**: Manche Patienten saugen **zu stark**. Dann kommt zu viel Flüssigkeit auf einmal — sie verschlucken sich. Strohhalm **nur auf Anordnung** der Logopädie oder des Arztes. Oft ist ein Nasenschlitzbecher besser."

**D2: "Der Ausgussbecher mit Schnabel ist gut für alle — ist ja fast wie eine Flasche"**
- **Fachbegriff:** Ausgussbecher-Universalitaets-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht pauschal — der Ausgussbecher hat **Tücken**: Der Schnabel **verdeckt den Inhalt**, Temperatur ist schlechter sichtbar (Verbrühungsgefahr). Bei starker Dysphagie kommt zu viel Menge unkontrolliert. Gut bei **leichter** Dysphagie oder Koordinationsproblemen, nicht bei schwerer Schluckstörung."
- **Feedback (B1, 245 Zeichen):** "Nicht für alle — der Ausgussbecher hat **Nachteile**: Du siehst nicht, wie **heiß** das Getränk ist (Vorsicht bei heißen Sachen!). Bei schwerer Schluckstörung: Zu viel auf einmal. Er passt bei **leichter** Dysphagie — nicht bei jedem."

**D3: "Der Nasenschlitzbecher sieht lustig aus, das ist schlecht für die Würde"**
- **Fachbegriff:** Stigmatisierungs-Bedenken-Überbewertung
- **Feedback (C1, 285 Zeichen):** "Verständliche Sorge, aber — **die Alternative wäre Aspirations-Risiko**. Erkläre dem Patienten ruhig, warum dieser Becher sinnvoll ist. Moderne Modelle sehen dezent aus. Würde heißt hier: Sicher und selbstständig trinken zu können — nicht: einen 'normalen' Becher riskieren. Priorität ist Sicherheit + Selbstständigkeit."
- **Feedback (B1, 250 Zeichen):** "Verständlich — aber die **Alternative** ist gefährlich. Erkläre dem Patienten, warum dieser Becher hilft. Moderne Modelle sehen nicht komisch aus. Würde heißt: **Er kann selber und sicher trinken**. Das ist wichtiger als nur 'normal' auszusehen."

### Richtig-Feedback
**C1 (280 Zeichen):** "Sehr gut. Vier Trinkhilfen: **Nasenschlitzbecher** (Kopf bleibt unten), **Ausgussbecher** (kleine Schlucke, aber Temperatur-Check!), **Doppelgriff-Becher** (Halbseitenlähmung, Tremor), **Strohhalm** (nur auf Anordnung). Logopädie/Ergotherapie wählt das passende Hilfsmittel."

**B1 (240 Zeichen):** "Sehr gut. Vier Bechertypen: **Nasenschlitzbecher** (Kopf bleibt vorne), **Ausgussbecher** (Schnabel, kleine Schlucke), **Doppelgriff-Becher** (zwei Henkel), **Strohhalm** (nur auf Anordnung!). Die Logopädie oder Ergotherapie wählt den richtigen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wofür ist der Nasenschlitzbecher gedacht und was ist sein Vorteil?"
- **Rückseite:** "Becher mit Ausschnitt für die Nase. Vorteil: Der Becher kann bis zum Rest gekippt werden, ohne dass der Kopf nach hinten muss (Reklination). Schutz vor Aspiration bei Dysphagie-Patienten (Schlaganfall, Parkinson, Demenz)."
- **Kategorie:** handlung

---

## Baustein 9: kommunikation-beim-anreichen

### Metadaten
- **bausteinId:** essen-anreichen-kommunikation
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-09]
- **kompetenzbereich:** II.1 (Kommunikation — Schwerpunkt dieses Themas!)

### Stufe 1 — Denkfrage
- **Frage:** "Frau Çelik, 82 Jahre, isst ungern. Sie dreht den Kopf weg, wenn du den Löffel bringst. Wie sprichst du mit ihr — damit sie sich nicht gedrängt fühlt, aber trotzdem vielleicht einen Bissen isst? Finde drei konkrete Sätze."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Kommunikationsregeln: **1.** Den Patienten fragen was er möchte (nicht für ihn entscheiden). **2.** Ankündigen vor jeder Handlung ('Ich bringe jetzt die Suppe'). **3.** Offene Fragen statt Ja/Nein ('Was schmeckt dir?'). **4.** Nicht zwei Dinge gleichzeitig — Essen ODER sprechen, nicht beides."

**B1 (240 Zeichen):** "Reden beim Essen: **1.** Fragen, was er möchte — **nicht** einfach entscheiden. **2.** Sagen, was du machst ('Ich bringe jetzt Suppe'). **3.** **Offene Fragen** stellen ('Wie schmeckt es?') statt nur ja/nein. **4.** Nicht **essen und reden gleichzeitig**."

- **Step-Typ:** dialog (3 Mini-Dialogsituationen)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Essen ist eine **kommunikative Situation**, kein technischer Vorgang. KB II.1 (Kommunikation) steht im Zentrum.

**Die fünf Kommunikationsregeln beim Anreichen**:

**1. Autonomie wahren — fragen statt entscheiden**:
'Möchtest du mit der Suppe anfangen oder lieber mit dem Brot?' statt 'Wir machen jetzt erst die Suppe.'

**2. Ankündigen vor jeder Handlung**:
'Ich komme jetzt mit dem Löffel.' Der Patient ist nicht überrascht, besonders bei Sehbehinderung oder Demenz wichtig.

**3. Offene Fragen bei der Rückmeldung**:
'Wie schmeckt dir das?' statt 'Schmeckt's?'. Offen eingeladen → mehr Information für dich.

**4. Einmal-Aktivität — nie zwei Dinge gleichzeitig**:
**Entweder** sprechen **oder** essen. Wer beim Kauen spricht, aspiriert leichter. Pausen sind Ruhemomente, keine Pflicht-Unterhaltung. Schweigen ist ok.

**5. Tempo beachten — nonverbal lesen**:
Blickkontakt zum Bissen, leichtes Nicken = bereit. Gesicht abwenden, Mund nicht öffnen, Hand heben = **Stopp**. Das Zeichen respektieren — immer. Niemals 'nur noch einen Löffel' gegen sichtbaren Widerstand.

**Bei Ablehnung**: Nicht drängen. Pause machen. Anderes anbieten. Später wieder versuchen. **Essensverweigerung kann Zeichen sein für**: Schmerz, Übelkeit, schlechter Geschmack, psychische Belastung, sensorische Überforderung — oder die **Autonomie-Entscheidung**, die respektiert werden muss. (§ 1901a BGB Patientenverfügung)"

**B1 (620 Zeichen):**
"Essen ist **Kommunikation**, nicht nur eine Aufgabe. Fünf Regeln, wie du redest und zuhörst:

**1. Fragen — nicht bestimmen**:
Sag: "Möchtest du zuerst die Suppe oder das Brot?" — **nicht**: "Jetzt essen wir die Suppe."

**2. Ansagen, was du machst**:
"Ich komme jetzt mit dem Löffel." So ist der Patient **nicht überrascht**. Besonders wichtig bei Demenz oder schlechtem Sehen.

**3. Offene Fragen**:
Sag: "**Wie** schmeckt dir das?" — **nicht**: "Schmeckt es?" Offene Fragen geben dir mehr Information.

**4. Eins nach dem anderen — nie beides gleichzeitig**:
**Entweder** reden **oder** essen. Wer beim Kauen spricht, verschluckt sich leicht. Pausen sind ok — auch **Schweigen** ist ok.

**5. Auf Körpersprache achten**:
Kopf weg, Mund zu, Hand hoch = **STOPP**. Immer respektieren. Niemals 'nur noch einen Löffel' gegen den Willen.

**Wenn er nicht will**: Nicht drängen. Pause. Etwas anderes anbieten. Später probieren. **Ablehnung kann heißen**: Schmerz, Übelkeit, anderer Geschmack, Stress — oder er **will einfach nicht**. Das ist sein Recht."

- **Erklärungs-Step:** stepType `dialog` (3 konkrete Dialoge: gut vs. schlecht)
- **Glossar-Begriffe:** [Autonomie, offene Frage, nonverbale Kommunikation]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn der Patient ablehnt, muss ich trotzdem füttern — er braucht Energie"**
- **Fachbegriff:** Paternalismus-Falle
- **Feedback (C1, 290 Zeichen):** "Falsch — das ist **Paternalismus und rechtlich problematisch**. § 1901a BGB schützt die Selbstbestimmung auch bei Nahrung. Ablehnung wird respektiert. Deine Aufgabe: Grund verstehen (Schmerz? Übelkeit? Geschmack? Wille?), Alternativen anbieten, dokumentieren, Arzt informieren. **Nie zwangsfüttern**. Das wäre Gewalt."
- **Feedback (B1, 260 Zeichen):** "Falsch — das ist **nicht erlaubt**. Der Patient darf **selbst entscheiden**, was er isst (§ 1901a BGB). Du fragst: Warum will er nicht? (Schmerz? Übelkeit? Wille?) Du bietest etwas anderes an. Du informierst den Arzt. **Nie zwingen** — das wäre Gewalt."

**D2: "Beim Essen mit dem Patienten plaudern — das ist nett und zeigt Empathie"**
- **Fachbegriff:** Parallelhandlungs-Fehler
- **Feedback (C1, 280 Zeichen):** "Gut gemeint, aber **gefährlich** — wer beim Kauen oder Schlucken spricht, aspiriert leichter. Richtig: **Entweder** essen **oder** sprechen. Kleine Gespräche **zwischen** den Bissen. Schweigen ist ok. Empathie zeigst du mit **Präsenz und Blickkontakt**, nicht mit ständigem Reden. Ruhe beim Essen ist Qualität, nicht Kälte."
- **Feedback (B1, 245 Zeichen):** "Gut gemeint, aber **gefährlich** — beim Kauen oder Schlucken **sprechen** ist riskant. Dann verschluckt er sich leichter. Richtig: **Entweder** essen **oder** reden. Kleine Gespräche **zwischen** den Bissen. **Schweigen** ist ok. Blickkontakt zeigt: Ich bin da."

**D3: "Ich frage: 'Schmeckt's?' — das reicht als Kommunikation"**
- **Fachbegriff:** Geschlossene-Frage-Problem
- **Feedback (C1, 265 Zeichen):** "Nicht ausreichend — 'Schmeckt's?' ist eine **geschlossene Frage** (ja/nein). Viele Patienten antworten automatisch 'ja', um nicht unhöflich zu sein. Besser: **'Wie schmeckt dir das?'** oder 'Was ist dein Lieblingsessen?'. Offene Fragen öffnen Gespräch und geben dir echte Information."
- **Feedback (B1, 240 Zeichen):** "Nicht genug — 'Schmeckt's?' kann nur mit **ja/nein** beantwortet werden. Viele sagen nur 'ja', um **nett** zu sein. Besser: **'Wie schmeckt dir das?'** oder '**Was magst du am liebsten?**'. So erzählt der Patient mehr — und du erfährst, was wirklich gut ist."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Fünf Regeln: **1.** Autonomie wahren (fragen, nicht bestimmen). **2.** Ankündigen vor jeder Handlung. **3.** Offene Fragen ('Wie schmeckt dir?'). **4.** Nie zwei Dinge gleichzeitig (reden ODER essen). **5.** Körpersprache lesen und respektieren. Bei Ablehnung: Grund suchen, nie zwingen."

**B1 (250 Zeichen):** "Sehr gut. Fünf Regeln beim Reden: **1.** Fragen (nicht bestimmen). **2.** Ansagen, was du machst. **3.** **Offene Fragen** stellen. **4.** Nicht essen und reden gleichzeitig. **5.** Körpersprache beachten. Wenn er nicht will — **nicht zwingen**. Grund suchen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum darfst du während des Kauens oder Schluckens nicht mit dem Patienten sprechen?"
- **Rückseite:** "Sprechen bei gefüllter Mundhöhle erhöht das Aspirationsrisiko (Koordination Schlucken/Sprechen gestört). Kommunikationsregel: Entweder essen ODER sprechen. Gespräche in Pausen zwischen Bissen. Schweigen ist ok."
- **Kategorie:** handlung

---

## Baustein 10: kinder-essen-anreichen

### Metadaten
- **bausteinId:** essen-anreichen-kinder
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Ein 4-jähriges Kind in der Kinderklinik will sein Gemüse nicht essen. Wie gehst du anders vor als bei einem Erwachsenen? Nenne drei Besonderheiten."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Bei Kindern: **Wunschkost** wenn möglich, **spielerisch** anreichen ('Das Auto fährt in den Tunnel'), **kein Druck** — Abwehr wird respektiert, kein Zwang. Kleine Portionen öfter statt eine große. Eltern als Partner einbeziehen. Reihenfolge darf das Kind mitbestimmen."

**B1 (220 Zeichen):** "Bei Kindern: **Wunschkost** — was mag es gern? **Spielerisch** — 'das Auto fährt in den Tunnel'. **Kein Druck** — wenn es **stop** sagt: stop. **Kleine Portionen** öfter, nicht eine große. Die **Eltern** fragen, was funktioniert."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (660 Zeichen):**
"Kinder sind keine kleinen Erwachsenen — das gilt auch beim Essen. **Entwicklungspsychologisch** ist Essensverweigerung ab ca. 2 Jahren (Trotzphase) bis Schulalter normal. Nicht jede Ablehnung ist ein Problem.

**Pflegerische Prinzipien**:

**Wunschkost**: Was mag das Kind? Mit Eltern besprechen. Kinderklinik-Küchen haben oft eine Wunschkost-Karte. Lieblingsessen ist nicht 'ungesund' in einer akuten Situation — erst mal essen, dann feintunen.

**Spielerisch, nicht ernst**: 'Der Löffel ist ein Flugzeug und er landet gleich im Mund.' Kleine Geschichten um den Bissen. Fingerfood ab 1 Jahr: Karottensticks, Apfelschnitz, Käsewürfel — das Kind darf selbst.

**Kein Druck, keine Bestrafung**: 'Du bekommst keinen Nachtisch, wenn du das nicht isst' ist **pädagogisch schädlich** und bei kranken Kindern zusätzlich belastend. Wenn Abwehr kommt: Pause. Anderes anbieten. Später.

**Kleine Portionen, öfter**: Kinder haben kleine Mägen. 5-6 kleine Mahlzeiten pro Tag sind besser als 3 große.

**Eltern einbeziehen**: Sie kennen das Kind. Sie wissen, welches Kuscheltier beim Essen hilft oder welches Lied hilft. Partner, nicht Störfaktor.

**Wenn das Kind wirklich nicht isst** über mehrere Mahlzeiten: Kinderärztin informieren — es kann Schmerzen, Übelkeit, psychische Belastung (Klinikstress!) dahinter sein."

**B1 (560 Zeichen):**
"Kinder essen anders als Erwachsene. Bei Kindern ist Essensverweigerung **oft normal** — vor allem ab 2 Jahren (Trotzphase).

**Was wichtig ist**:

**Wunschkost**: Was mag das Kind? **Eltern fragen**. Die Küche hat oft eine Wunschkost-Karte. Das Lieblingsessen ist erlaubt — erst mal essen, dann langsam anderes.

**Spielerisch**: 'Der Löffel ist ein Flugzeug — er fliegt in den Mund!' Kleine Geschichten. **Fingerfood** ab 1 Jahr: Karotten-Stäbchen, Apfel-Stücke, Käse — das Kind isst selbst.

**Kein Druck, keine Strafe**: Sätze wie 'Dann kein Nachtisch' sind **schlecht**. Wenn es 'nein' sagt: **Pause**. Etwas anderes anbieten. Später probieren.

**Kleine Portionen, oft**: 5 oder 6 kleine Mahlzeiten am Tag sind besser als 3 große. Kinder haben **kleine Mägen**.

**Eltern mitmachen**: Sie kennen das Kind. Sie wissen, wann es gut isst. Sie sind **Partner**, kein Problem.

**Wenn es gar nichts isst**: Über mehrere Mahlzeiten nichts — dann **Kinderärztin** informieren. Vielleicht hat es Schmerzen, Übelkeit oder **Stress** im Krankenhaus."

- **Erklärungs-Step:** stepType `text` (displayFormat: scenario)
- **Glossar-Begriffe:** [Wunschkost, Fingerfood, Trotzphase]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn das Kind nicht isst, muss ich strenger werden — sonst lernt es das nie"**
- **Fachbegriff:** Strafpaedagogik-Fehler
- **Feedback (C1, 295 Zeichen):** "Falsch — **Zwang beim Essen ist bei Kindern pädagogisch schädlich** und kann Essstörungen mitauslösen. In der Klinik kommt dazu: Das Kind ist krank, belastet, eingeschränkt. Druck verstärkt Abwehr. Richtig: Pause, Alternative anbieten, Eltern einbeziehen, später erneut. Bei wiederholter Ablehnung: Kinderärztin informieren."
- **Feedback (B1, 265 Zeichen):** "Falsch — **Zwang ist schlecht** bei Kindern. Es kann später zu Essstörungen führen. In der Klinik ist das Kind schon krank und gestresst. Druck macht es **schlimmer**. Richtig: **Pause**, etwas anderes anbieten, **Eltern** fragen, später probieren. Bei oft Nein: Kinderärztin informieren."

**D2: "Fingerfood ist unhygienisch im Krankenhaus"**
- **Fachbegriff:** Hygiene-Ueberlagerung
- **Feedback (C1, 275 Zeichen):** "Nicht pauschal — **Fingerfood ist ein wichtiges Entwicklungsmittel** (Selbstständigkeit, Motorik, Geschmackserleben). Hygiene: Hände vor dem Essen waschen, frisch zubereitet (z.B. Apfelschnitz, Käsewürfel, Gurke), nach Mahlzeit saubere Oberfläche. Bei Isolation/Neutropenie gelten Sonderregeln, sonst ist Fingerfood völlig ok."
- **Feedback (B1, 245 Zeichen):** "Nicht immer — **Fingerfood ist wichtig** für Kinder: Es macht selbstständig, lernt Motorik, macht Spaß. Hygiene: **Hände waschen** vor dem Essen. Frisches Obst/Gemüse/Käse ist sauber genug. Nur bei bestimmten Patienten (Isolation) gibt es andere Regeln."

**D3: "Eltern stören nur beim Anreichen, die sollen rausgehen"**
- **Fachbegriff:** Eltern-Ausschluss-Fehler
- **Feedback (C1, 285 Zeichen):** "Falsch — **Eltern sind Partner** bei Kinderpflege, nicht Störfaktor. Sie kennen das Kind, wissen Tricks, beruhigen es. Das Kind isst mit Eltern oft besser als mit fremder Pflegekraft. Familienzentrierte Pflege ist seit den 1990ern Standard. Eltern einbeziehen — nicht ausschließen. Ausnahme: Wenn Eltern Zwang ausüben, pädagogisch gegensteuern."
- **Feedback (B1, 255 Zeichen):** "Falsch — **Eltern sind keine Störung**. Sie sind **Partner**. Sie kennen das Kind. Sie wissen, was hilft. Das Kind isst oft **besser mit Eltern** als mit einer fremden Pflegekraft. Seit vielen Jahren arbeiten wir **familienzentriert** — die Familie ist wichtig."

### Richtig-Feedback
**C1 (275 Zeichen):** "Sehr gut. Kinder-Essenspflege: **Wunschkost** (was mag es?), **spielerisch** anreichen, **kein Druck/keine Strafe** (Ablehnung respektieren), **kleine Portionen öfter**, **Eltern als Partner**. Fingerfood fördert Selbstständigkeit. Bei dauerhafter Verweigerung: Kinderärztin."

**B1 (240 Zeichen):** "Sehr gut. Kinder anders behandeln: **Wunschkost** (was mag es?), **spielerisch** (Löffel = Flugzeug), **kein Zwang** (Nein = Nein), **kleine Portionen öfter**, **Eltern mitmachen lassen**. Fingerfood ist gut. Wenn es gar nichts isst: Kinderärztin fragen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne drei Besonderheiten beim Anreichen von Essen bei Kindern (im Vergleich zu Erwachsenen)."
- **Rückseite:** "(1) Wunschkost anbieten, (2) spielerisch anreichen (Löffel = Flugzeug, Fingerfood ab 1 Jahr), (3) kein Druck/keine Strafe (Ablehnung = Stopp), (4) kleine Portionen öfter, (5) Eltern als Partner einbeziehen."
- **Kategorie:** handlung

---

## Baustein 11: demenz-essen

### Metadaten
- **bausteinId:** essen-anreichen-demenz
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Herr Wagner, 84, mit fortgeschrittener Demenz, sitzt vor einem Teller mit 3 Komponenten (Fleisch, Kartoffel, Gemüse). Er fängt nicht an zu essen, schaut nur. Was könnte das Problem sein? Was änderst du?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Bei Demenz: **Fingerfood** (einfacher als Besteck), **erkennbare Einzel-Speisen** (1 Komponente pro Teller, keine Mischungen), **ruhige Umgebung** (keine Animation, kein Fernseher), **vertraute Speisen** aus Biografie. Gewicht engmaschig, bei Problemen MNA-Assessment und evtl. **Essen-auf-Rädern-Alternative**."

**B1 (240 Zeichen):** "Bei Demenz: **Fingerfood** (keine Gabel nötig). **Eine Speise auf einmal** (nicht alles auf einen Teller mischen). **Ruhe** (Fernseher aus, keine Musik). Speisen, die er **kennt** (aus seinem Leben). Bei Problemen: MNA-Test und andere Lösungen."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Menschen mit Demenz haben spezifische Herausforderungen beim Essen, die mit dem Krankheitsverlauf zunehmen: **Agnosie** (Speisen nicht mehr als solche erkennen), **Apraxie** (Besteck nicht mehr benutzen können), **Antriebsstörungen**, gestörtes Sättigungsgefühl, Ablenkbarkeit.

**Pflegerische Anpassungen**:

**Fingerfood statt Besteck**: Ab mittlerer Demenz (Stadium 5-6 GDS) kann Besteck-Apraxie auftreten. Lösung: Alles was mit Fingern gegessen werden kann — Brötchen, Käsewürfel, Gurken-Sticks, hartgekochte Eier-Viertel, Obstspalten, belegte Mini-Brote. **Mundgerecht vorbereitet**. Das erhält Selbstständigkeit und Würde.

**Eine Komponente pro Teller**: Bei Apraxie/Agnosie überfordert ein Teller mit Fleisch+Kartoffel+Sauce+Gemüse. Lösung: Nacheinander servieren — erst Suppe, dann Hauptgang in einzelnen Portionen, dann Nachtisch. Einzelne Speisen sind erkennbarer.

**Ruhige Umgebung, keine Animation**: Demenz-Patienten sind schnell ablenkbar. **Fernseher aus**, keine Durchsagen, keine Besucher im Raum, kein Personal-Kommen-und-Gehen. Essen in kleinen Tischgruppen (Esszimmer, nicht Bett).

**Biografie-orientierte Speisen**: 'Was hat Herr Wagner früher gern gegessen?' — Angehörige fragen. Vertraute Gerichte werden besser akzeptiert als Neues. Auch wenn die Küche es schwieriger macht.

**Essen-auf-Rädern-Alternative**: Wenn das Heim-Essen zu unvertraut ist: Familie bringt Vertrautes mit (Home-Food-Programme). Das ist keine Luxus-Ausnahme, sondern oft entscheidend für die Akzeptanz.

**Assessment**: MNA (Mini Nutritional Assessment) alle 3 Monate. Gewichtsverlust >5% in 3 Monaten = Alarm. (DGE 2024 Ernährung im Alter; Expertenstandard Ernährungsmanagement DNQP 2017)"

**B1 (640 Zeichen):**
"Menschen mit **Demenz** haben beim Essen oft Probleme:
- Sie **erkennen** das Essen nicht mehr (Agnosie)
- Sie können **Besteck nicht mehr benutzen** (Apraxie)
- Sie sind **schnell abgelenkt**
- Sie fühlen **Hunger und Sättigung** nicht mehr richtig

**Was hilft**:

**Fingerfood**: Alles, was man **mit den Fingern** essen kann. Brötchen, Käsewürfel, Gurken-Sticks, Eier, Obst-Stücke. Mundgerecht vorbereiten. Er kann **selber** essen — das ist Würde.

**Eine Speise pro Teller**: Nicht Fleisch + Kartoffel + Gemüse zusammen. Das ist zu viel. Nacheinander servieren: **Erst** Suppe, **dann** Hauptgang, **dann** Nachtisch.

**Ruhe**: **Fernseher aus**. Keine laute Musik. Keine Besucher im Raum beim Essen. Demenz-Patienten können sich sonst nicht auf das Essen konzentrieren.

**Vertraute Speisen**: Was hat er **früher** gern gegessen? **Angehörige fragen**. Bekannte Gerichte isst er besser.

**Familie kann mitbringen**: Wenn das Heim-Essen ihm fremd ist, dürfen Angehörige vertrautes Essen mitbringen.

**Checken**: Alle 3 Monate **MNA-Test** (prüft Ernährung). Gewicht verliert er >5%? → Arzt informieren."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Agnosie, Apraxie, MNA, Fingerfood, Biografie-Arbeit]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn er das Essen nicht erkennt, muss ich ihm einfach mehr erklären"**
- **Fachbegriff:** Kognitive-Ueberforderung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — bei **Agnosie** fehlt die Fähigkeit, Gegenstände zu erkennen, trotz intakter Sinne. Sprachliche Erklärung hilft nicht mehr, weil die kognitive Verknüpfung weg ist. Besser: **Einzelne, vertraute Speisen zeigen**, einen Bissen vormachen ('Ich esse auch'), Geruch aktivieren (Kaffee, Bratgeruch). Erinnerung wird geweckt, nicht erklärt."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — er **kann es nicht verstehen**, auch wenn du es erklärst. Bei Demenz sind diese Verbindungen im Gehirn weg. Besser: **zeigen** (einen Bissen vormachen: 'Ich esse auch'), **riechen lassen** (Kaffee-Duft, Braten), **vertraute** Speisen. So kommt die Erinnerung."

**D2: "Wenn er nicht selbst isst, muss ich ihn einfach füttern — geht schneller"**
- **Fachbegriff:** Selbststaendigkeits-Verlust-Fehler
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **Selbstständigkeit erhalten** ist ein Kernprinzip bei Demenz. Jede Handlung, die der Patient noch selbst kann, muss er selbst tun. **Fingerfood** ermöglicht oft Selbständigkeit, auch bei Apraxie. Erst wenn er wirklich nicht mehr kann: anreichen. Schneller-füttern raubt Selbstwertgefühl und beschleunigt kognitiven Abbau."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **Selbständigkeit erhalten** ist sehr wichtig bei Demenz. Was er **selbst kann**, soll er **selbst tun**. **Fingerfood** hilft oft, dass er selber isst. Erst wenn er wirklich nicht mehr kann: **anreichen**. Füttern aus 'Zeitgründen' nimmt ihm die Würde."

**D3: "Animation und Gesellschaft beim Essen — das hilft Demenz-Patienten, aktiv zu bleiben"**
- **Fachbegriff:** Stimulations-Ueberschaetzung
- **Feedback (C1, 290 Zeichen):** "Nicht beim Essen — Demenz-Patienten haben **eingeschränkte Aufmerksamkeits-Kapazität**. Laute Gespräche, Musik, Fernseher **überfordern** und führen zu Essensabbruch. Bei kognitiven Aktivitäten tagsüber: Stimulation ja. Beim Essen: **Ruhe**. Kleine Tischgruppen (2-4 Personen) in ruhigem Raum sind ideal."
- **Feedback (B1, 260 Zeichen):** "Nicht beim Essen — Menschen mit Demenz haben **weniger Aufmerksamkeit**. Lautes Reden, Musik, Fernseher sind **zu viel**. Sie hören auf zu essen. Bei anderen Aktivitäten: Gesellschaft ist gut. Beim Essen: **Ruhe**. Kleine Tischgruppen (2-4 Personen) in einem ruhigen Raum sind am besten."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Demenz-Essenspflege: **Fingerfood** (Besteck-Apraxie umgehen), **1 Komponente pro Teller** (keine Überforderung durch Mischung), **ruhige Umgebung** (keine Animation/TV), **biografie-vertraute Speisen** (Angehörige fragen), **Selbstständigkeit erhalten**. MNA alle 3 Monate als Assessment."

**B1 (265 Zeichen):** "Sehr gut. Bei Demenz: **Fingerfood** (mit den Fingern essen, selbstständig), **eine Speise pro Teller** (nicht alles gemischt), **Ruhe** (Fernseher aus), **vertraute Speisen** (was hat er früher gern gegessen?), **Selbständigkeit erhalten**. Alle 3 Monate MNA-Test machen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist Fingerfood bei fortgeschrittener Demenz oft sinnvoller als Besteck?"
- **Rückseite:** "Apraxie (Unfähigkeit, Besteck zu benutzen) tritt bei mittlerer bis fortgeschrittener Demenz (GDS 5-6) auf. Fingerfood umgeht dieses Defizit — der Patient kann selbstständig essen, Würde und Selbstwert bleiben erhalten. Mundgerecht vorbereiten."
- **Kategorie:** handlung

---

## Baustein 12: beobachtung-waehrend-essen

### Metadaten
- **bausteinId:** essen-anreichen-beobachtung
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Während du einem Dysphagie-Patienten Essen anreichst, musst du **drei Dinge gleichzeitig** beobachten, um zu sehen, ob er sicher isst. Welche drei? Warum gerade diese?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Drei Beobachtungsebenen parallel: **1. Mundbewegungen** (Kauen, Zungenbewegung, Lippenverschluss). **2. Schluckakt** (Heben/Senken des Adamsapfels, Stimme nach Schluck prüfen). **3. Atmung** (Frequenz, Husten, Atemmuster)."

**B1 (210 Zeichen):** "Drei Dinge gleichzeitig beobachten: **1. Mund** (Kauen? Lippen geschlossen? Zunge bewegt sich?). **2. Schlucken** (Adamsapfel geht hoch? Stimme klar danach?). **3. Atmung** (normal? Husten? Schneller?)."

- **Step-Typ:** matching (3 Ebenen ↔ was genau beobachten)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Während des Anreichens bist du **aktive Beobachterin** — parallel zum Handeln. Drei Ebenen laufen gleichzeitig:

**1. Mundbewegungen**:
- **Lippenverschluss** beim Kauen — sonst tritt Speichel/Speise aus (Leaking)
- **Kaubewegung** — kaut er oder schiebt er nur? Bei fehlendem Kauen → Konsistenz prüfen, evtl. Level anpassen
- **Zungenbewegung** — Zunge formt Bolus und schiebt ihn Richtung Rachen
- **Taschenbildung**: Bleibt Essen seitlich in der Wange? Zeichen für einseitige Schwäche

**2. Schluckakt**:
- **Adamsapfel** sichtbar heben und senken = Schluckreflex ausgelöst
- **Verzögerung** >2 Sek zwischen Bissen-Nehmen und Schlucken = auffällig
- **Stimme prüfen** nach Schluck: 'Sag mal Aaah' — klare oder gurgelnde Stimme?
- **Mehrfach-Schluck**: Manche schlucken einen Bissen in 3-4 Portionen — das ist kompensatorisch ok, aber dokumentieren

**3. Atmung**:
- **Atemfrequenz** vor dem Essen merken, während Essen vergleichen
- **Husten** = Warnzeichen, aber auch **Schutzreflex** (positiv bewerten)
- **Zyanose**, Atemnot, Keuchen = sofort stopp
- **Stille Aspiration** erkennen: Atmung verändert sich subtil, Patient hustet nicht

Nach dem Essen **zweimal prüfen**: Mund leer? Stimme klar nach 'Aaah'? Dann erst gehen. Pneumonie-Risiko erhöht bis 30 Min nach der Mahlzeit — Oberkörper hoch halten. (DGG/DGN 2020)"

**B1 (600 Zeichen):**
"Beim Anreichen **beobachtest du gleichzeitig** drei Dinge:

**1. Mund**:
- **Lippen zu**? (sonst läuft Essen raus = Leaking)
- **Kaut er**? Oder schiebt er nur? Nicht-Kauen = Konsistenz anpassen
- **Zunge** bewegt sich? Die Zunge schiebt das Essen nach hinten
- **Bleibt Essen** in der Wange? Zeichen für einseitige Lähmung

**2. Schlucken**:
- **Adamsapfel** geht **hoch und runter** = er hat geschluckt
- Dauert es **länger als 2 Sekunden**? Das ist auffällig
- **Stimme prüfen**: 'Sag mal Aaah' — klar oder **nass/gurgelnd**?
- **Mehrfach-Schlucken** (3-4 Mal für einen Bissen)? Das ist ok, aber aufschreiben

**3. Atmung**:
- **Atmung vor dem Essen** merken — dann mit während vergleichen
- **Husten** = Warnung, aber auch **Schutz** (reinigt Lunge)
- **Blau werden** (Zyanose), keuchen, Atemnot → **sofort stopp**
- **Stille Aspiration**: keine Symptome, aber Atmung ändert sich leise

**Nach dem Essen**: Mund leer? Stimme klar? **30 Minuten** Oberkörper hoch lassen — wegen Lungenentzündungs-Risiko."

- **Erklärungs-Step:** stepType `matching` (3 Ebenen ↔ konkrete Beobachtungspunkte)
- **Glossar-Begriffe:** [Leaking, Taschenbildung, Zyanose, stille Aspiration]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn der Adamsapfel sich bewegt, ist alles sicher"**
- **Fachbegriff:** Adamsapfel-Alleinkriterium
- **Feedback (C1, 285 Zeichen):** "Nicht ausreichend — der Adamsapfel zeigt nur, **dass geschluckt wurde**, nicht dass der Bolus **sicher in die Speiseröhre** kam. Bei stiller Aspiration bewegt sich der Adamsapfel normal, aber ein Teil landet in der Trachea. Immer Kombination: Adamsapfel + Stimm-Check nach Schluck + Mundkontrolle + Atmung."
- **Feedback (B1, 255 Zeichen):** "Nicht genug — der Adamsapfel zeigt nur: **er hat geschluckt**. Aber nicht: **wohin** das Essen ging. Bei stiller Aspiration bewegt sich der Adamsapfel normal — trotzdem geht ein Teil in die Lunge. Du musst **immer mehrere Zeichen** zusammen prüfen."

**D2: "Wenn er nicht hustet, aspiriert er nicht"**
- **Fachbegriff:** Stille-Aspirations-Blindheit
- **Feedback (C1, 295 Zeichen):** "Gefährlicher Irrtum — bei **stiller Aspiration** ist der Hustenreflex gedämpft oder fehlt (häufig bei Schlaganfall). Der Patient aspiriert kleine Mengen, ohne zu husten. Einzige Hinweise: subtile Atemänderung, wiederkehrende Pneumonien, gurgelnde Stimme danach, Fieber ohne anderen Grund. Kein-Husten ist **kein** Sicherheitszeichen."
- **Feedback (B1, 265 Zeichen):** "Gefährlich falsch — bei **stiller Aspiration** hustet der Patient **nicht**. Aber er aspiriert trotzdem. Das passiert oft nach Schlaganfall. Zeichen: leise Veränderung der Atmung, **oft Lungenentzündung**, Fieber ohne Grund, nasse Stimme. Kein Husten heißt **nicht sicher**."

**D3: "Nach dem Essen kann ich den Patienten direkt ins Bett legen"**
- **Fachbegriff:** Nachsorge-Verkuerzung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — nach der Mahlzeit muss der Oberkörper **mindestens 30 Minuten** hoch bleiben (Reflux-Risiko, Aspirations-Pneumonie-Risiko). Sofort flach legen erhöht die Gefahr, dass Mageninhalt zurückfließt und aspiriert wird. Erst nach Mundkontrolle (leer?) + 30 Min Oberkörperhoch: Lagewechsel ok."
- **Feedback (B1, 260 Zeichen):** "Nicht gleich — nach dem Essen muss der Oberkörper **mindestens 30 Minuten hoch** bleiben. Sonst läuft Magensaft zurück und kann in die Lunge kommen. Zuerst: Mund prüfen (leer?). Dann **30 Minuten warten** mit Oberkörperhoch. Erst dann kann er flach liegen."

### Richtig-Feedback
**C1 (285 Zeichen):** "Sehr gut. Drei Beobachtungsebenen parallel: **Mund** (Lippenverschluss, Kauen, Zungenbewegung, Taschenbildung), **Schluckakt** (Adamsapfel, Stimm-Check 'Aaah', Schluck-Verzögerung), **Atmung** (Frequenz, Husten, Zyanose). Nach Essen: Mundkontrolle + 30 Min Oberkörper hoch."

**B1 (245 Zeichen):** "Sehr gut. Drei Dinge gleichzeitig beobachten: **Mund** (Lippen, Kauen, Zunge, Taschen in der Wange), **Schlucken** (Adamsapfel + Stimme nach 'Aaah' prüfen), **Atmung** (Husten? Atemnot?). Nach Essen: Mund prüfen, 30 Minuten Oberkörper hoch lassen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum muss der Oberkörper nach dem Essen mindestens 30 Min hoch bleiben?"
- **Rückseite:** "Schutz vor **Reflux und Aspirationspneumonie**. Mageninhalt kann sonst zurückfließen und in die Lunge gelangen (besonders bei Dysphagie-Patienten). 30 Min minimum, bei PEG-Sondenkost 60 Min. Oberkörper >60°, Knieknick gegen Hochrutschen."
- **Kategorie:** handlung

---

## Baustein 13: dokumentation-essen-trinken

### Metadaten
- **bausteinId:** essen-anreichen-dokumentation
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Frau Becker hat heute Mittag nur die Hälfte ihrer Portion gegessen, hat zweimal gehustet und 200 ml Tee getrunken. Was **musst** du dokumentieren — und warum gerade das? Was könnte fehlen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Dokumentieren: **Essmenge** (Portion in ¼, ½, ¾, voll oder in Gramm), **Trinkmenge** (ml exakt), **Auffälligkeiten** (Husten, Verweigerung, Schmerzen, Würge-Reflex), **Konsistenz** (IDDSI-Level, Andickung?), **Selbstständigkeit** (selbst/Teilhilfe/Vollhilfe). Unterschrift/Kürzel + Uhrzeit."

**B1 (225 Zeichen):** "Du schreibst auf: **Wie viel gegessen** (Viertel, Hälfte, ganz — oder Gramm), **wie viel getrunken** (in ml), **Was aufgefallen ist** (Husten, hat nicht gewollt, Schmerzen), **welche Konsistenz** (IDDSI-Level), **ob selbst** oder Hilfe. Dazu: dein Kürzel + Uhrzeit."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Dokumentation beim Essen/Trinken ist **rechtlich und pflegerisch Pflicht** — Grundlage für Ernährungsstatus-Bewertung, Flüssigkeitsbilanz, frühe Erkennung von Problemen.

**Pflicht-Bestandteile pro Mahlzeit**:

**1. Essmenge**: In Standardangaben (¼, ½, ¾, voll) oder in Gramm. Bei kritischen Patienten: genauer (z.B. '100 g Pudding von 200 g'). Gesamttagesmenge ist wichtig, nicht jede Mahlzeit exakt.

**2. Trinkmenge**: In ml, **exakt**. Ziel bei gesunden Erwachsenen ca. 1,5-2 l/24h. Bilanz bei herz-/nierenkranken Patienten: Ein-/Ausfuhr-Bilanz.

**3. Konsistenz (IDDSI-Level)**: Besonders bei Dysphagie. 'Tee Level 2 (mildly thick)', 'Kost Level 4 (pureed)'.

**4. Selbstständigkeit**: selbstständig / mit Teilhilfe / mit Vollhilfe. Für Assessment der Pflegestufe und Mobilitätsfortschritt wichtig.

**5. Auffälligkeiten**: Husten, Verweigerung, Würge-Reflex, Schmerzen beim Schlucken, Leaking, lange Essdauer, psychisches Befinden ('apathisch', 'freut sich auf Nachtisch').

**6. Assessment-Parameter** (je nach Patient): Gewicht wöchentlich, MNA alle 3 Monate, BMI, Hautzeichen (Dehydration, Mangelernährung).

**7. Kürzel + Uhrzeit + Datum**: Pflicht — §§ 630f BGB Dokumentationspflicht.

**Warum so viel?** Ernährung steuert Wundheilung, Immunsystem, Medikamentenwirkung, Pflegeverlauf. Eine schlechte Dokumentation macht Probleme unsichtbar — z.B. schleichende Exsikkose durch zu wenig Trinken, die erst beim Sturz auffällt. (Expertenstandard Ernährungsmanagement DNQP 2017; § 630f BGB)"

**B1 (680 Zeichen):**
"Dokumentation beim Essen ist **Pflicht** — nach dem Gesetz (§ 630f BGB) und für gute Pflege.

**Was musst du aufschreiben**:

**1. Essmenge**: **Wie viel gegessen**? Ein Viertel, die Hälfte, alles? Oder in Gramm bei kritischen Patienten.

**2. Trinkmenge**: In **ml**, **genau**. Ziel: 1,5-2 Liter am Tag. Bei Herz- oder Nierenkranken: Ein-/Ausfuhr-Bilanz.

**3. Konsistenz**: Welches **IDDSI-Level**? 'Tee Level 2', 'Essen Level 4 (Püree)'.

**4. Selbstständigkeit**: selbst / mit etwas Hilfe / mit ganz viel Hilfe?

**5. Auffälligkeiten**: **Husten**, **Verweigerung**, **Schmerzen**, Essen ist lange im Mund, Essen läuft raus, Stimmung ('freut sich', 'ist traurig').

**6. Messwerte** (je nach Patient): **Gewicht** jede Woche, **MNA-Test** alle 3 Monate.

**7. Kürzel + Uhrzeit + Datum**: **immer** — das ist **Pflicht**.

**Warum so viel?** Gute Ernährung hilft bei: **Wundheilung**, **Immunsystem**, **Medikamente wirken richtig**, **keine Stürze** (wegen Austrocknung). Wer schlecht dokumentiert, merkt Probleme zu spät — zum Beispiel wenn jemand zu wenig trinkt und dann stürzt."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Bilanzierung, Dokumentationspflicht, MNA, Exsikkose]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ich schreibe nur auf, wenn was besonderes war — sonst ist es Routine"**
- **Fachbegriff:** Dokumentations-Luecke
- **Feedback (C1, 295 Zeichen):** "Falsch — **jede Mahlzeit muss dokumentiert sein**. § 630f BGB verpflichtet lückenlose Dokumentation. Ohne Eintrag gilt: nicht geschehen. Probleme erkennst du nur durch **Verlaufsdaten** (schleichender Gewichtsverlust über 2 Wochen, reduzierte Trinkmenge). Nur Besonderheiten zu notieren ist rechtlich und pflegerisch falsch."
- **Feedback (B1, 265 Zeichen):** "Falsch — **jede Mahlzeit** musst du aufschreiben. Das ist **Pflicht** (§ 630f BGB). Ohne Aufschrieb gilt: Es ist **nicht passiert**. Du siehst Probleme nur, wenn du **alles** aufschreibst — z.B. dass jemand langsam weniger trinkt. Nur 'Besonderes' reicht **nicht**."

**D2: "Die Konsistenz steht im Kostformplan, muss ich nicht nochmal schreiben"**
- **Fachbegriff:** Kreuzverweis-Fehler
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — bei **Dysphagie-Patienten** muss pro Mahlzeit dokumentiert werden, **welche Konsistenz tatsächlich gegeben wurde** — nicht nur die Anordnung. Der Kostformplan ist die Anordnung, die Dokumentation ist der **Ist-Zustand**. Gerade bei Konsistenzwechseln (Logopädie ändert Level) ist das wichtig."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — der Kostformplan sagt: **was er bekommen soll**. Die Dokumentation sagt: **was er wirklich bekommen hat**. Bei Dysphagie ist das wichtig. Wenn die Logopädie das Level ändert, siehst du das in der Dokumentation — nicht im alten Plan."

**D3: "Trinkmenge schätze ich — genau messen ist übertrieben"**
- **Fachbegriff:** Messgenauigkeits-Verlust
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — bei **herz-, nieren-, lungenkranken** oder dehydrations-gefährdeten Patienten ist **exakte Bilanzierung** entscheidend. 'Ca. ein halber Becher' ist ungenau: ein halber Becher kann 100 ml oder 200 ml sein. Messbecher nutzen oder Becher mit ml-Markierung. Abweichung von 500 ml/Tag kann klinisch relevant werden."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — bei manchen Patienten (Herz, Niere, Lunge, Austrocknung) ist **genaue** Trinkmenge **wichtig**. 'Ein halber Becher' ist ungenau — das können 100 oder 200 ml sein. Nutze **Messbecher** oder Becher mit ml-Zahlen. **500 ml Unterschied am Tag** kann wichtig sein."

### Richtig-Feedback
**C1 (300 Zeichen):** "Sehr gut. Dokumentations-Pflicht: **1.** Essmenge (¼, ½, ¾, voll oder g). **2.** Trinkmenge (ml exakt). **3.** Konsistenz (IDDSI-Level). **4.** Selbstständigkeit (selbst/Teil/Voll). **5.** Auffälligkeiten (Husten, Verweigerung, Schmerzen). **6.** Assessment (Gewicht, MNA). **7.** Kürzel + Uhrzeit. Pflicht nach § 630f BGB."

**B1 (255 Zeichen):** "Sehr gut. Du schreibst **jede Mahlzeit** auf: **Essmenge** (wie viel), **Trinkmenge** (ml), **Konsistenz** (IDDSI-Level), **selbst oder Hilfe**, **Auffälligkeiten** (Husten, nicht gewollt), **Gewicht/MNA** je nach Plan. **Immer: Kürzel + Uhrzeit**. Das ist Pflicht (Gesetz)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Angaben musst du bei jeder Mahlzeit dokumentieren — laut Expertenstandard Ernährungsmanagement?"
- **Rückseite:** "(1) Essmenge (Portion in ¼, ½, ¾, voll oder g), (2) Trinkmenge (ml exakt), (3) Konsistenz (IDDSI-Level), (4) Selbstständigkeit (selbst/Teilhilfe/Vollhilfe), (5) Auffälligkeiten (Husten, Verweigerung, Schmerzen). Plus: Kürzel + Uhrzeit. Pflicht nach § 630f BGB."
- **Kategorie:** recht

---


