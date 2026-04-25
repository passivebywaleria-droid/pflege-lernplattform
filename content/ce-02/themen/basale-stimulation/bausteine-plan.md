# Wissensbausteine: Basale Stimulation

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `basale-stimulation` |
| ceId | `ce-02` |
| cluster | C (Körperpflege & Wahrnehmung) |
| wissensart | handlung |
| geschaetzteUE | 9 |
| zielzeitMin | 223 (9 UE × 45 × 0,55) |
| bausteineAnzahl | 17 |
| voraussetzungen | `ganzkörperpflege` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 23% (4 Bausteine), Bloom 3-4: 59% (10 Bausteine), Bloom 5-6: 18% (3 Bausteine)

**Primärquellen:**
- Fröhlich A. (1975/2020, aktuell: 10. Aufl. 2023): Basale Stimulation — Das Konzept
- Bienstein C./Fröhlich A. (1991/2021): Basale Stimulation in der Pflege — Die Grundlagen
- DNQP (2018, 1. Aktualisierung): Expertenstandard Beziehungsgestaltung in der Pflege von Menschen mit Demenz
- Nydahl P. (2018): Wachkoma — Betreuung, Pflege und Förderung eines Menschen im Wachkoma
- Bobath B. (1971, Neuauflagen laufend): Bobath-Konzept (Grundlage der neurophysiologischen GKW)

---

## Baustein 1: konzept-herkunft

### Metadaten
- **bausteinId:** basale-stimulation-konzept-herkunft
- **bloomLevel:** 1
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Warum heißt es 'basale' Stimulation — was ist damit gemeint? Überlege: Was kann ein Mensch schon wahrnehmen, bevor er sehen oder sprechen kann?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Basale Stimulation ist ein Förder- und Pflegekonzept. Entwickelt 1975 vom Sonderpädagogen Andreas Fröhlich für schwerstbehinderte Kinder. Ab den 1990er Jahren übertrug die Pflegewissenschaftlerin Christel Bienstein das Konzept auf die Pflege."

**B1 (215 Zeichen):** "Basale Stimulation ist ein Pflege-Konzept. Andreas Fröhlich hat es 1975 erfunden. Er hat zuerst mit schwer behinderten Kindern gearbeitet. Später hat Christel Bienstein das Konzept für die Pflege genutzt."

- **Step-Typ:** text (displayFormat: quote)

### Stufe 3 — Erklärung

**C1 (650 Zeichen):**
"Die **Basale Stimulation** ist ein pflegerisches und pädagogisches Konzept für Menschen, deren Wahrnehmung, Bewegung oder Kommunikation stark eingeschränkt ist. Das Wort **'basal'** meint: Es geht um Fähigkeiten, die der Mensch schon im Mutterleib entwickelt — Tastsinn, Gleichgewicht, Wärme spüren. Diese Grundlagen sind auch bei sehr schwer Kranken oft noch erhalten.

Der Sonderpädagoge **Andreas Fröhlich** entwickelte das Konzept 1975 an der Universität Landau für Kinder mit schwersten Mehrfachbehinderungen. In den frühen 1990er Jahren übertrug die Pflegewissenschaftlerin **Christel Bienstein** die Grundgedanken in die Kranken- und Altenpflege. Seitdem gehört das Konzept zum Standardwissen jeder Pflegekraft. (Fröhlich A., 1975; Bienstein C./Fröhlich A., 1991)"

**B1 (530 Zeichen):**
"Basale Stimulation ist ein Konzept für die Pflege. Es hilft Menschen, die sich nicht gut bewegen oder sprechen können. Das Wort 'basal' bedeutet: **ganz grundlegend**. Gemeint sind Dinge, die wir schon im Bauch der Mutter lernen: Wärme spüren, Bewegung fühlen, Berührung merken.

Andreas Fröhlich hat das Konzept 1975 erfunden. Er war Sonderpädagoge. Er hat mit schwer behinderten Kindern gearbeitet. In den 1990er Jahren hat Christel Bienstein das Konzept für die Pflege genutzt. Heute lernt jede Pflegekraft Basale Stimulation."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Basale Stimulation, Sonderpädagogik, Konzept]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Basale Stimulation ist eine Therapieform, die nur von Spezialisten angewendet werden darf"**
- **Fachbegriff:** Spezialisten-Irrtum
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — Basale Stimulation ist **kein geschützter Heilberuf** wie Physio- oder Ergotherapie. Sie ist ein **Pflegekonzept** für den Alltag. Jede Pflegefachkraft darf und soll es anwenden. Eine Weiterbildung ist aber sinnvoll. Merke: Pflegekonzept, nicht Therapie."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — Basale Stimulation ist keine Therapie. Sie ist ein Pflege-Konzept. Jede Pflegekraft darf sie anwenden. Eine Weiterbildung hilft aber. Merke: Pflege-Konzept, keine Therapie."

**D2: "Basale Stimulation wurde ursprünglich für die Altenpflege entwickelt"**
- **Fachbegriff:** Entstehungs-Fehler
- **Feedback (C1, 225 Zeichen):** "Nicht ganz — das Konzept entstand **1975 in der Sonderpädagogik** für Kinder mit schwersten Behinderungen (Fröhlich). Erst ab den 1990ern übertrug Bienstein es auf die Pflege. Merke: Erst Kinder, dann Pflege — in dieser Reihenfolge."
- **Feedback (B1, 195 Zeichen):** "Nicht ganz — das Konzept ist für Kinder mit schweren Behinderungen erfunden worden (1975, Fröhlich). Später kam es in die Pflege (1990er, Bienstein). Merke: Erst Kinder, dann Pflege."

**D3: "Basale Stimulation bedeutet, dem Patienten viele Reize auf einmal zu geben"**
- **Fachbegriff:** Reizüberflutungs-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — das Gegenteil ist richtig. Basale Stimulation arbeitet mit **wenigen, klar wahrnehmbaren Reizen**. Viele Reize auf einmal führen zu Reizüberflutung und Stress. Ziel ist, dass der Mensch einen Reiz **bewusst wahrnehmen** kann. Merke: Wenig, aber klar."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — das Gegenteil ist richtig. Wir geben **wenige** Reize, nicht viele. Zu viele Reize stressen den Menschen. Wir wollen, dass er einen Reiz klar wahrnehmen kann. Merke: Wenig Reize, aber klar und in Ruhe."

### Richtig-Feedback
**C1 (240 Zeichen):** "Genau. Basale Stimulation ist ein Pflege- und Förderkonzept. Andreas Fröhlich (1975, Sonderpädagogik) entwickelte es für schwerstbehinderte Kinder. Christel Bienstein brachte es in den 1990ern in die Pflege. Wichtig: 'basal' heißt grundlegend — Dinge, die schon im Mutterleib entstehen."

**B1 (215 Zeichen):** "Genau. Basale Stimulation ist ein Pflege-Konzept. Andreas Fröhlich hat es 1975 erfunden. Er hat mit behinderten Kindern gearbeitet. Christel Bienstein hat es später für die Pflege genutzt. 'basal' heißt: ganz grundlegend."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wer hat das Konzept der Basalen Stimulation entwickelt — und für wen?"
- **Rückseite:** "Andreas Fröhlich (1975) für schwerstbehinderte Kinder. Christel Bienstein übertrug es in den 1990er Jahren auf die Pflege."
- **Kategorie:** fachbegriff

---

## Baustein 2: drei-lebensthemen

### Metadaten
- **bausteinId:** basale-stimulation-drei-lebensthemen
- **bloomLevel:** 2
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn du einen Menschen mit Wachkoma versorgst — welche drei Bereiche seines Lebens kannst du pflegerisch erreichen, auch ohne Worte? Überlege aus deinem Alltag."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Fröhlich beschreibt drei zentrale Lebensthemen: **Wahrnehmung, Bewegung, Kommunikation**. Diese drei Säulen bleiben auch bei schwerstkranken Menschen erreichbar — und sind die Ansatzpunkte jeder basal stimulierenden Handlung."

**B1 (210 Zeichen):** "Es gibt **drei wichtige Lebensthemen**: Wahrnehmung (was der Mensch spürt), Bewegung (wie er sich bewegt) und Kommunikation (wie er Kontakt hat). Wir können diese drei Bereiche immer erreichen — auch bei schwer Kranken."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Andreas Fröhlich formulierte **drei zentrale Lebensthemen**, die jeder Mensch braucht — auch wenn er schwerstkrank, beatmet oder im Wachkoma ist:

**1. Wahrnehmung** — Die Welt mit allen Sinnen spüren: den eigenen Körper, Wärme, Bewegung, Berührung, Geräusche, Gerüche. Wahrnehmung ist die Grundlage für alles andere.

**2. Bewegung** — Sich selbst spüren durch Bewegung, die Umgebung erkunden, Kontakt aufnehmen. Auch passive Bewegung durch die Pflegekraft zählt.

**3. Kommunikation** — Kontakt zum Menschen und zur Umgebung. Sprache ist nur eine Form — Berührung, Blick, Mimik, Tonfall, Präsenz sind oft wichtiger.

Diese drei Themen hängen zusammen: Wer sich bewegt, nimmt wahr. Wer wahrnimmt, kann kommunizieren. (Fröhlich A., 1975; Bienstein C./Fröhlich A., 1991)"

**B1 (540 Zeichen):**
"Andreas Fröhlich hat **drei wichtige Lebensthemen** beschrieben. Jeder Mensch braucht sie — auch wenn er schwer krank ist:

**1. Wahrnehmung** — Die Welt spüren mit den Sinnen. Der Mensch fühlt seinen Körper, Wärme, Berührung, Töne.

**2. Bewegung** — Sich bewegen oder bewegt werden. So spürt der Mensch sich selbst.

**3. Kommunikation** — Kontakt zu anderen haben. Sprache ist nur ein Weg. Berührung, Blick und ruhige Stimme sind oft wichtiger.

Die drei Themen gehören zusammen: Bewegung macht Wahrnehmung möglich. Wahrnehmung macht Kontakt möglich."

- **Erklärungs-Step:** stepType `reveal` (3 Lebensthemen nacheinander aufdecken)
- **Glossar-Begriffe:** [Wahrnehmung, Kommunikation, Lebensthemen]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die drei Lebensthemen sind Essen, Trinken und Schlafen"**
- **Fachbegriff:** ATL-Verwechslung
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — du verwechselst Basale Stimulation mit den **ATL/AEDL** (Juchli, Krohwinkel). Die drei Lebensthemen der Basalen Stimulation sind **Wahrnehmung, Bewegung, Kommunikation** (Fröhlich). Merke: ATL sind Aktivitäten — Lebensthemen sind Dimensionen."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — Essen und Schlafen gehören zu den ATL. Die Basale Stimulation hat andere Themen: **Wahrnehmung, Bewegung, Kommunikation** (Fröhlich). Merke: ATL = Aktivitäten. Lebensthemen = Dimensionen."

**D2: "Kommunikation bedeutet nur, mit dem Patienten zu sprechen"**
- **Fachbegriff:** Sprach-Fixierung
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — Kommunikation in der Basalen Stimulation ist **viel mehr als Sprache**. Berührung, Blickkontakt, Tonfall, Präsenz, Mimik sind oft wichtiger. Gerade bei Menschen, die nicht sprechen können, bleibt Kommunikation ohne Worte möglich. Merke: Kontakt ist nicht nur Sprechen."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Kommunikation ist **mehr als Sprechen**. Auch Berührung, Blick, Mimik und Ruhe sind Kontakt. Wer nicht sprechen kann, kann trotzdem kommunizieren. Merke: Kommunikation ist mehr als Worte."

**D3: "Wahrnehmung und Bewegung sind voneinander getrennt"**
- **Fachbegriff:** Trennungs-Irrtum
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — die drei Lebensthemen **gehören zusammen**. Wer sich bewegt, nimmt seinen Körper wahr. Wer etwas wahrnimmt, kann sich darauf beziehen. Deshalb arbeiten basal stimulierende Maßnahmen immer in mehreren Bereichen gleichzeitig. Merke: Die drei Themen bedingen sich gegenseitig."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — die drei Themen gehören **zusammen**. Wenn du dich bewegst, spürst du deinen Körper. Wenn du etwas spürst, kannst du reagieren. Die Themen hängen miteinander zusammen. Merke: Alles wirkt zusammen."

### Richtig-Feedback
**C1 (240 Zeichen):** "Genau. Die drei zentralen Lebensthemen nach Fröhlich sind **Wahrnehmung, Bewegung und Kommunikation**. Sie bleiben auch bei schwerstkranken Menschen erreichbar und sind die Grundlage jeder basal stimulierenden Handlung. Wichtig: Sie hängen zusammen und beeinflussen sich gegenseitig."

**B1 (215 Zeichen):** "Genau. Die drei Themen sind **Wahrnehmung, Bewegung, Kommunikation**. Sie sind immer erreichbar — auch bei schwer kranken Menschen. Die drei Themen hängen zusammen: Wer sich bewegt, spürt mehr. Wer spürt, kann Kontakt haben."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche drei zentralen Lebensthemen beschreibt Andreas Fröhlich in der Basalen Stimulation?"
- **Rückseite:** "Wahrnehmung — Bewegung — Kommunikation. Sie bleiben auch bei schwerstkranken Menschen erreichbar und bedingen sich gegenseitig."
- **Kategorie:** fakt

---

## Baustein 3: zentrale-beduerfnisse

### Metadaten
- **bausteinId:** basale-stimulation-zentrale-beduerfnisse
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, du liegst im Wachkoma. Was würdest du dir am meisten wünschen — was muss die Pflege dir geben, damit du dich als Mensch gemeint fühlst?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Bienstein und Fröhlich formulieren **5 zentrale Bedürfnisse** basal stimulierbarer Menschen: **Leben erhalten, sich sicher fühlen, sich selbst erleben, Geborgenheit spüren, Kontakt aufnehmen**. Jede Pflegehandlung sollte mindestens eines davon bedienen."

**B1 (220 Zeichen):** "Es gibt **5 wichtige Bedürfnisse**: leben bleiben, sich sicher fühlen, sich selbst spüren, Geborgenheit spüren, Kontakt haben. Jede Pflegehandlung sollte mindestens eines dieser Bedürfnisse treffen."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (710 Zeichen):**
"Bienstein und Fröhlich beschreiben fünf **zentrale Bedürfnisse** basal stimulierbarer Menschen. Jede Pflegehandlung lässt sich daran prüfen:

**1. Leben erhalten** — Die Grundfunktionen sichern: Atmung, Kreislauf, Ernährung, Schmerzfreiheit.

**2. Sich sicher fühlen** — Der Mensch soll spüren: Ich bin nicht allein, ich bin nicht in Gefahr. Verlässlichkeit, Berechenbarkeit, Ankündigung.

**3. Sich selbst erleben** — Eigene Körpergrenzen spüren, sich als abgegrenzte Person wahrnehmen. Oft zentral bei Wachkoma, Demenz.

**4. Geborgenheit spüren** — Wärme, Nähe, vertraute Stimme, ruhige Hand.

**5. Kontakt aufnehmen** — Austausch mit der Umgebung und anderen Menschen. Auch nonverbal.

Eine Pflegekraft, die nur 'Leben erhalten' ansteuert, pflegt technisch richtig — aber nicht basal stimulierend. (Bienstein C./Fröhlich A., 1991)"

**B1 (580 Zeichen):**
"Bienstein und Fröhlich haben **5 wichtige Bedürfnisse** beschrieben. Jede Pflegehandlung kann diese prüfen:

**1. Leben erhalten** — Atmen, Kreislauf, Ernährung, keine Schmerzen.

**2. Sich sicher fühlen** — Der Mensch soll merken: 'Ich bin nicht allein. Es passiert nichts Schlimmes.'

**3. Sich selbst erleben** — Der Mensch spürt seinen Körper. Er merkt: 'Das bin ich.' Wichtig bei Wachkoma oder Demenz.

**4. Geborgenheit** — Wärme, Nähe, eine ruhige Stimme, eine feste Hand.

**5. Kontakt haben** — Mit anderen verbunden sein. Auch ohne Worte.

Wer nur technisch pflegt, pflegt nicht basal stimulierend."

- **Erklärungs-Step:** stepType `reveal` (5 Bedürfnisse nacheinander mit Beispielen)
- **Glossar-Begriffe:** [Geborgenheit, Körpergrenzen, Wachkoma]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Das wichtigste Bedürfnis ist immer 'Leben erhalten' — alles andere kommt danach"**
- **Fachbegriff:** Hierarchie-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — die Bedürfnisse sind **nicht hierarchisch**. 'Leben erhalten' ist die Basis, aber ein Mensch, der **nur** technisch versorgt wird ohne Sicherheit, Geborgenheit und Kontakt, **leidet**. Alle fünf wirken zusammen. Merke: Pflege ist nicht nur Überleben — auch Mensch-Sein."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — alle 5 Bedürfnisse sind wichtig. 'Leben erhalten' allein reicht nicht. Ohne Sicherheit, Geborgenheit und Kontakt leidet der Mensch. Merke: Pflege ist mehr als Überleben — Mensch-Sein gehört dazu."

**D2: "'Sich selbst erleben' bedeutet, der Patient soll über sich nachdenken"**
- **Fachbegriff:** Reflexions-Verwechslung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — 'sich selbst erleben' meint **körperlich spüren**, nicht gedanklich reflektieren. Der Mensch soll seinen eigenen Körper als abgegrenzte Einheit wahrnehmen: 'Hier bin ich, hier endet mein Körper.' Besonders wichtig bei Wachkoma, wo Körpergrenzen verschwimmen. Merke: Spüren, nicht denken."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — 'sich selbst erleben' bedeutet: **den eigenen Körper spüren**. Nicht: darüber nachdenken. Der Mensch soll merken: 'Hier bin ich. Hier hört mein Körper auf.' Besonders bei Wachkoma wichtig. Merke: Spüren, nicht denken."

**D3: "Kontakt aufnehmen geht nur mit Menschen, die reagieren können"**
- **Fachbegriff:** Reaktions-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Kontakt ist auch dann sinnvoll, wenn der Mensch nicht sichtbar reagiert. Studien zeigen: Menschen im Wachkoma nehmen vertraute Stimmen wahr, ihr Puls und Hautwiderstand verändern sich. Auch wenn wir es nicht sehen — der Kontakt kommt an. Merke: Keine Reaktion heißt nicht 'kommt nicht an'."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Kontakt ist auch wichtig, wenn der Mensch nicht reagiert. Studien zeigen: Menschen im Wachkoma hören vertraute Stimmen. Ihr Körper reagiert, auch wenn wir es nicht sehen. Merke: Keine sichtbare Reaktion heißt nicht 'nichts da'."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Die fünf zentralen Bedürfnisse: **Leben erhalten, sich sicher fühlen, sich selbst erleben, Geborgenheit spüren, Kontakt aufnehmen**. Sie sind gleichwertig und wirken zusammen. Eine Pflege, die nur 'Leben erhalten' bedient, ist technisch, aber nicht basal stimulierend."

**B1 (225 Zeichen):** "Genau. Die 5 Bedürfnisse sind: leben bleiben, sich sicher fühlen, sich selbst spüren, Geborgenheit spüren, Kontakt haben. Sie sind alle gleich wichtig. Technisch pflegen reicht nicht — der Mensch braucht auch Kontakt und Nähe."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 zentralen Bedürfnisse basal stimulierbarer Menschen beschreiben Bienstein und Fröhlich?"
- **Rückseite:** "Leben erhalten — sich sicher fühlen — sich selbst erleben — Geborgenheit spüren — Kontakt aufnehmen. Gleichwertig und wirken zusammen."
- **Kategorie:** fakt

---

## Baustein 4: neun-wahrnehmungsbereiche

### Metadaten
- **bausteinId:** basale-stimulation-neun-wahrnehmungsbereiche
- **bloomLevel:** 2
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Überlege: Mit welchen Sinnen nimmst du gerade wahr, dass du auf einem Stuhl sitzt? Zähle auf, was alles gleichzeitig passiert in deinem Körper."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Basale Stimulation arbeitet mit **9 Wahrnehmungsbereichen**: somatisch, vestibulär, vibratorisch (die drei 'basalen'), oral, olfaktorisch, auditiv, taktil-haptisch, visuell (Sinne) und kommunikativ (zwischenmenschlich). Jeder Bereich hat eigene Angebote."

**B1 (220 Zeichen):** "Es gibt **9 Wahrnehmungs-Bereiche**: somatisch, vestibulär, vibratorisch (die 3 grundlegenden), oral, olfaktorisch, auditiv, taktil-haptisch, visuell (Sinne) und kommunikativ. Für jeden Bereich gibt es eigene Angebote."

- **Step-Typ:** matching (9 Bereiche → Sinn/Beispiel zuordnen)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Das Konzept unterscheidet **9 Wahrnehmungsbereiche**. Die ersten drei gelten als **basal** — sie sind schon im Mutterleib aktiv:

**Die drei basalen Bereiche:**
- **Somatisch** — Wahrnehmung des eigenen Körpers über die Haut und Tiefensensibilität (Körpergrenzen, Druck, Wärme).
- **Vestibulär** — Gleichgewichtssinn, Lage im Raum (Innenohr).
- **Vibratorisch** — Schwingungen spüren (über Knochen, Brustkorb, Kehlkopf).

**Die Sinnes-Bereiche:**
- **Oral** — Schmecken, Saugen, Mundempfindungen.
- **Olfaktorisch** — Riechen.
- **Auditiv** — Hören.
- **Taktil-haptisch** — Tastsinn der Hände, Greifen, Fühlen.
- **Visuell** — Sehen.

**Der zwischenmenschliche Bereich:**
- **Kommunikativ** — Kontakt mit anderen Menschen (verbal, nonverbal, Präsenz).

Jede basal stimulierende Handlung wirkt meist in **mehreren Bereichen gleichzeitig** — eine beruhigende Waschung arbeitet z.B. somatisch, taktil-haptisch und kommunikativ. (Bienstein C./Fröhlich A., 1991)"

**B1 (620 Zeichen):**
"Es gibt **9 Bereiche der Wahrnehmung**. Die ersten drei sind **grundlegend** — sie arbeiten schon im Bauch der Mutter:

**Die 3 grundlegenden Bereiche:**
- **Somatisch** — den eigenen Körper spüren (über die Haut).
- **Vestibulär** — Gleichgewicht, Lage spüren.
- **Vibratorisch** — Schwingungen spüren.

**Die Sinnes-Bereiche:**
- **Oral** — Schmecken, Lippen, Mund.
- **Olfaktorisch** — Riechen.
- **Auditiv** — Hören.
- **Taktil-haptisch** — Tasten mit den Händen.
- **Visuell** — Sehen.

**Der Kontakt-Bereich:**
- **Kommunikativ** — Kontakt zu anderen Menschen.

Eine Pflegehandlung wirkt oft in **mehreren Bereichen gleichzeitig**. Zum Beispiel eine Waschung: somatisch, taktil-haptisch und kommunikativ."

- **Erklärungs-Step:** stepType `reveal` (9 Bereiche mit Symbolen/Bildern)
- **Glossar-Begriffe:** [somatisch, vestibulär, vibratorisch, olfaktorisch, auditiv, taktil-haptisch]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Es gibt 5 Wahrnehmungsbereiche — genau wie die fünf Sinne"**
- **Fachbegriff:** Fünf-Sinne-Verwechslung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — die klassische Einteilung in **5 Sinne** (Sehen, Hören, Riechen, Schmecken, Tasten) ist Allgemeinwissen. Basale Stimulation unterscheidet **9 Bereiche** — zusätzlich kommen die drei **basalen** Wahrnehmungen (somatisch, vestibulär, vibratorisch) und der **kommunikative** Bereich dazu. Merke: 5 Sinne ≠ 9 Bereiche."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — es gibt nicht 5, sondern **9 Bereiche**. Zusätzlich zu den 5 Sinnen gibt es: somatisch (Körper spüren), vestibulär (Gleichgewicht), vibratorisch (Schwingung) und kommunikativ (Kontakt). Merke: 9 Bereiche, nicht 5."

**D2: "Die somatische Wahrnehmung ist dasselbe wie der Tastsinn"**
- **Fachbegriff:** Somatisch-Taktil-Verwechslung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die **somatische** Wahrnehmung ist das **ganzkörperliche Spüren** des eigenen Körpers: Körpergrenzen, Tiefensensibilität, Wärme. Der **taktil-haptische** Bereich ist das **aktive Tasten** mit den Händen. Beide gehören zur Haut, aber haben verschiedene Funktionen. Merke: Somatisch = Körper gesamt, taktil-haptisch = Hände."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **somatisch** heißt: den **ganzen Körper** spüren. **Taktil-haptisch** heißt: mit den **Händen tasten**. Beide sind über die Haut, aber es ist nicht dasselbe. Merke: Somatisch = ganzer Körper. Taktil = Hände."

**D3: "Der kommunikative Bereich ist nur dann aktiv, wenn wir reden"**
- **Fachbegriff:** Verbale-Fixierung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — der **kommunikative Bereich** umfasst alles Zwischenmenschliche: **Präsenz, Blickkontakt, Berührung, Tonfall, Mimik, Nähe**. Wer schweigend bei einem Sterbenden sitzt und seine Hand hält, kommuniziert basal stimulierend. Merke: Kommunikation ist mehr als Sprechen — Präsenz genügt."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — der **kommunikative Bereich** ist nicht nur Sprechen. Auch Blickkontakt, Berührung, ruhige Stimme, **einfach da-sein** ist Kommunikation. Wer die Hand eines Sterbenden hält, kommuniziert. Merke: Präsenz ist auch Kommunikation."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Die 9 Bereiche: **somatisch, vestibulär, vibratorisch** (basal), **oral, olfaktorisch, auditiv, taktil-haptisch, visuell** (Sinne), **kommunikativ** (zwischenmenschlich). Die ersten drei heißen 'basal', weil sie schon im Mutterleib aktiv sind. Eine Pflegehandlung wirkt meist in mehreren Bereichen gleichzeitig."

**B1 (250 Zeichen):** "Genau. Die **9 Bereiche**: somatisch (Körper), vestibulär (Gleichgewicht), vibratorisch (Schwingung), oral (Mund), olfaktorisch (Nase), auditiv (Ohr), taktil-haptisch (Hände), visuell (Augen), kommunikativ (Kontakt). Die ersten drei sind grundlegend — schon im Bauch der Mutter aktiv."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 9 Wahrnehmungsbereiche unterscheidet die Basale Stimulation?"
- **Rückseite:** "Somatisch, vestibulär, vibratorisch (basal) — oral, olfaktorisch, auditiv, taktil-haptisch, visuell (Sinne) — kommunikativ (zwischenmenschlich)."
- **Kategorie:** fakt

---

## Baustein 5: somatische-stimulation

### Metadaten
- **bausteinId:** basale-stimulation-somatisch
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Mensch im Wachkoma fühlt seine Körpergrenzen oft nicht mehr — er weiß nicht, wo sein Körper aufhört. Welche Pflegehandlung könnte ihm helfen, seinen Körper wieder zu spüren?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Die **somatische Stimulation** macht Körpergrenzen erfahrbar. Typische Angebote: Ganzkörperwaschung mit klarem Druck, Einreibungen, Abtasten mit fester Hand, warme Decken, 'Nest'-Positionierung. Ziel: Der Mensch soll spüren, wo sein Körper endet."

**B1 (230 Zeichen):** "Die **somatische Stimulation** hilft dem Menschen, seinen Körper zu spüren. Typische Angebote: Waschen mit festem Druck, Einreibungen, Decken einwickeln, 'Nest' aus Kissen. Ziel: Der Mensch spürt die Grenze seines Körpers."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die **somatische Stimulation** spricht den ganzen Körper an — über Haut, Muskeln, Gelenke. Bei schwerstkranken Menschen sind Körpergrenzen oft 'diffus': Sie spüren nicht mehr, wo ihr Körper aufhört und die Umgebung beginnt.

**Typische Angebote:**
- **Ganzkörperwaschung** mit deutlichem, gleichmäßigem Druck (nicht zaghaft streicheln)
- **Atemstimulierende Einreibung (ASE)** am Rücken
- **Nest-Positionierung** — der Mensch wird mit Kissen und Decken fest umrahmt
- **Abtasten** in langen, ruhigen Zügen mit fester Hand
- **Wärme-Angebote** (warme Decke, Waschlappen)

**Wichtig:** Nicht zu leicht berühren — leichte, unklare Reize können Stress auslösen. Lieber **fester, klarer Druck** und **wenige, deutliche Berührungen** statt vieler schwacher. Die Bewegung soll **durchgängig** sein, nicht abgehackt. (Bienstein C./Fröhlich A., 1991)"

**B1 (580 Zeichen):**
"Die **somatische Stimulation** spricht den ganzen Körper an — über die Haut. Bei schwer kranken Menschen ist oft unklar: Wo hört mein Körper auf? Das macht Angst. Somatische Angebote helfen.

**Wichtige Angebote:**
- **Ganzkörperwaschung** mit festem, gleichem Druck (nicht streicheln)
- **Einreibung** am Rücken (ASE)
- **Nest** aus Kissen und Decken um den Körper
- **Abtasten** in langen, ruhigen Bewegungen
- **Wärme** (warme Decke, warmer Waschlappen)

**Wichtig:** Nicht zu leicht berühren. Leichte Berührungen können Stress machen. Lieber **fest und klar**. Bewegung soll **durchgängig** sein, nicht abgehackt."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Körpergrenzen, Tiefensensibilität, Nest-Positionierung, ASE]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Je leichter und sanfter man berührt, desto angenehmer ist es für den Patienten"**
- **Fachbegriff:** Sanft-ist-gut-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **leichte, unklare Reize** können bei schwerstkranken Menschen **Stress** auslösen: Der Reiz ist nicht eindeutig einordbar (Kitzeln, Insekt?). Besser: **klarer, gleichmäßiger Druck**. Ein Mensch im Wachkoma braucht **eindeutige Information**, nicht sanfte Andeutung. Merke: Klar statt leicht."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **leichte Berührungen** können **Stress** machen. Der Mensch weiß nicht: Was ist das? (Kitzeln? Insekt?) Besser: **fester, klarer Druck**. Bei schwer Kranken: klare Information geben. Merke: Klar statt leicht."

**D2: "Somatische Stimulation macht man nur, wenn der Patient wach ist"**
- **Fachbegriff:** Bewusstseins-Voraussetzung
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — somatische Angebote wirken **unabhängig vom Bewusstseinszustand**. Menschen im Wachkoma, unter Sedierung oder im Sterbeprozess nehmen Körperreize weiterhin wahr (über Hirnstamm und Rückenmark). Darum gerade für diese Gruppe zentral. Merke: Somatische Reize erreichen auch bewusstlose Menschen."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — somatische Angebote wirken **auch bei bewusstlosen Menschen**. Der Körper spürt Berührung auch im Wachkoma oder unter Sedierung. Deshalb ist es gerade da wichtig. Merke: Auch ohne Bewusstsein kommt der Reiz an."

**D3: "Bei der Ganzkörperwaschung ist die Reihenfolge der Körperteile egal"**
- **Fachbegriff:** Reihenfolge-Egal-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die **Reihenfolge** ist in der Basalen Stimulation **wichtig**. Bei der beruhigenden GKW: **mit** der Haarwuchsrichtung, von **proximal nach distal** (Rumpf → Extremitäten). Bei der belebenden: **gegen** den Haarwuchs, von **distal nach proximal**. Merke: Richtung ist Information."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die **Reihenfolge ist wichtig**. Beruhigende Waschung: **mit** der Haarwuchsrichtung, vom Körper nach außen. Belebende Waschung: **gegen** den Haarwuchs, von außen zum Körper. Merke: Die Richtung gibt dem Körper Information."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Die somatische Stimulation spricht den ganzen Körper an. Typisch: Ganzkörperwaschung mit klarem Druck, ASE, Nest-Positionierung, feste Abtast-Bewegungen. Wichtig: **klare, eindeutige Reize** — nicht zaghaftes Streicheln. Ziel: Der Mensch spürt seine Körpergrenzen wieder."

**B1 (250 Zeichen):** "Genau. Somatische Stimulation spricht den ganzen Körper an. Wichtige Angebote: Waschung mit festem Druck, Einreibung am Rücken (ASE), 'Nest' aus Kissen, Abtasten in langen Zügen. Wichtig: **klare Berührung**, nicht zaghaft. Ziel: Der Mensch spürt wieder seinen Körper."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist klarer, fester Druck in der somatischen Stimulation besser als leichtes Streicheln?"
- **Rückseite:** "Leichte, unklare Reize können Stress auslösen (nicht einordbar). Klare Reize geben dem Bewohner eindeutige Information über seinen Körper und seine Grenzen."
- **Kategorie:** handlung

---

## Baustein 6: vestibulaere-stimulation

### Metadaten
- **bausteinId:** basale-stimulation-vestibulaer
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient liegt seit Wochen bewegungslos. Er verliert das Gefühl für oben und unten. Wie kannst du ihm — ohne ihn ganz aufzusetzen — helfen, Lage im Raum wahrzunehmen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Die **vestibuläre Stimulation** spricht den Gleichgewichtssinn (Innenohr) an. Angebote: leichtes Wiegen, Kopfposition verändern, Oberkörper anheben, sanftes Schaukeln. Ziel: Der Mensch nimmt seine Lage im Raum wahr. Vorsicht bei erhöhtem Hirndruck."

**B1 (230 Zeichen):** "Die **vestibuläre Stimulation** spricht den **Gleichgewichts-Sinn** an (Innenohr). Angebote: leichtes Wiegen, Kopf drehen, Oberkörper höher lagern, sanft schaukeln. Der Mensch spürt: Wo bin ich im Raum? Achtung bei Hirndruck."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (690 Zeichen):**
"Die **vestibuläre Stimulation** aktiviert den Gleichgewichtssinn im Innenohr (Bogengänge). Bei lang immobilen Patienten verkümmert dieser Sinn — sie verlieren die Orientierung im Raum.

**Typische Angebote:**
- **Positionswechsel** (Seitenlage ↔ Rücken ↔ 30°-Lage)
- **Kopfbewegungen** (sanft drehen, nach vorne/hinten neigen)
- **Oberkörper anheben** (Bettkopfteil hochstellen)
- **Leichtes Wiegen** im Sitzen oder im Arm
- **Mobilisation an die Bettkante**

**Wichtig:**
- **Langsam** ausführen — schnelle Bewegungen lösen Übelkeit oder Schwindel aus
- **Ankündigen** — vor der Bewegung Initialberührung und kurzes Wort
- **Kontraindikationen** beachten: erhöhter Hirndruck, instabiler Kreislauf, Halswirbelverletzung
- **Kleine Bewegungen reichen** — schon das Heben des Oberkörpers um 30° stimuliert

Vestibuläre Reize bringen oft erstaunliche Reaktionen: Patienten öffnen die Augen, werden wacher, atmen tiefer. (Bienstein C./Fröhlich A., 1991)"

**B1 (560 Zeichen):**
"Die **vestibuläre Stimulation** spricht den **Gleichgewichts-Sinn** an. Der sitzt im Innenohr. Wenn ein Mensch lange liegt, verliert er das Gefühl für oben und unten.

**Wichtige Angebote:**
- **Position wechseln** (Seite ↔ Rücken ↔ 30°)
- **Kopf sanft drehen** oder neigen
- **Oberkörper hochstellen**
- **Leicht wiegen** im Arm oder im Sitzen
- **An die Bettkante mobilisieren**

**Wichtig:**
- **Langsam** machen — schnell macht Schwindel
- **Ankündigen** (Initialberührung, kurzes Wort)
- **Vorsicht** bei Hirndruck oder instabilem Kreislauf
- **Kleine Bewegungen reichen**

Oft wirkt es stark: Patienten öffnen die Augen, atmen tiefer, werden wacher."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [vestibulär, Innenohr, Bogengänge, Immobilität]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Vestibuläre Stimulation geht nur durch Aufsetzen oder Aufstehen"**
- **Fachbegriff:** Mobilisations-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — schon **kleine Positionsänderungen** aktivieren das Innenohr: Kopf drehen, Oberkörper um 30° anheben, sanft in den Armen wiegen. Auch **passive** Bewegungen wirken vestibulär. Aufsetzen ist intensiv, aber nicht zwingend. Merke: Jede Lageänderung ist vestibulärer Reiz."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — auch **kleine Bewegungen** wirken: Kopf drehen, Bett hochstellen, sanft wiegen. Der Mensch muss nicht aufstehen. Auch passive Bewegung reicht. Merke: Jede Lage-Änderung ist ein vestibulärer Reiz."

**D2: "Vestibuläre Stimulation ist bei jedem Patienten sinnvoll"**
- **Fachbegriff:** Allgemeingültigkeits-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — es gibt **klare Kontraindikationen**: erhöhter Hirndruck, instabiler Kreislauf, frische Halswirbelverletzung, akuter Schwindel. Bei Hirndruck kann selbst kleine Kopfbewegung gefährlich sein. Deshalb: **vor jeder Mobilisation Werte prüfen** und Arzt einbeziehen. Merke: Nicht jede Bewegung ist harmlos."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — es gibt **Gegenanzeigen**: Hirndruck, instabiler Kreislauf, frische HWS-Verletzung, Schwindel. Bei Hirndruck kann schon Kopf-Drehen schlimm sein. Vorher immer **Werte prüfen** und Arzt fragen. Merke: Nicht immer harmlos."

**D3: "Je schneller die Bewegung, desto stärker der Effekt"**
- **Fachbegriff:** Geschwindigkeits-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — schnelle Bewegungen lösen **Übelkeit, Erbrechen und Stressreaktionen** aus. Ziel ist eine **bewusste Wahrnehmung** der Lageänderung, nicht Überforderung. Ankündigen, langsam beginnen, auf Reaktion warten, nächsten Schritt. Merke: Langsamkeit ist in der Basalen Stimulation ein Qualitätsmerkmal."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — schnell macht **Übelkeit** und **Stress**. Das Ziel ist: der Mensch nimmt die Bewegung **bewusst wahr**. Also: ankündigen, langsam anfangen, Reaktion abwarten, weiter. Merke: Langsam ist in der Basalen Stimulation **gut**."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Vestibuläre Stimulation aktiviert den Gleichgewichtssinn: Positionswechsel, Kopfbewegung, Oberkörper anheben, sanftes Wiegen, Bettkantensitzen. Wichtig: **langsam** ausführen, **ankündigen**, **Kontraindikationen** prüfen (Hirndruck, Kreislauf, HWS). Schon kleine Lageänderungen wirken stark."

**B1 (250 Zeichen):** "Genau. Die **vestibuläre Stimulation** spricht den **Gleichgewichts-Sinn** an. Angebote: Position wechseln, Kopf drehen, Oberkörper hochstellen, sanft wiegen, an die Bettkante mobilisieren. Wichtig: **langsam**, **ankündigen**, auf Gegenanzeigen achten (Hirndruck, Kreislauf)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Kontraindikationen muss ich vor vestibulärer Stimulation prüfen?"
- **Rückseite:** "Erhöhter Hirndruck, instabiler Kreislauf, frische HWS-Verletzung, akuter Schwindel. Immer Werte prüfen und Arzt einbeziehen."
- **Kategorie:** handlung

---

## Baustein 7: vibratorische-stimulation

### Metadaten
- **bausteinId:** basale-stimulation-vibratorisch
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Warum spüren wir unsere eigene Stimme nicht nur im Ohr, sondern auch in der Brust? Und wie könnte man diesen 'inneren' Sinn bei einem Patienten nutzen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Die **vibratorische Stimulation** nutzt **Schwingungen**, die über Knochen ins Körperinnere wandern. Angebote: sanftes Summen am Brustkorb, elektrische Zahnbürste, Vibrationsgeräte, Klangschalen. Ziel: den Körper von innen wahrnehmen."

**B1 (215 Zeichen):** "Die **vibratorische Stimulation** arbeitet mit **Schwingungen**. Die gehen durch die Knochen ins Innere. Angebote: Summen am Brustkorb, elektrische Zahnbürste, Vibrations-Gerät, Klangschale. Der Mensch spürt seinen Körper innen."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (710 Zeichen):**
"Die **vibratorische Stimulation** nutzt Schwingungen, die über Knochen und Gewebe ins Körperinnere fortgeleitet werden. Dieser Reiz ist eindeutig und erreicht auch tief sedierte Patienten. Schon im Mutterleib spürt der Fötus die Stimme der Mutter über die Knochenleitung.

**Typische Angebote:**
- **Eigene Stimme summen** am Brustkorb oder Kopfkissen des Patienten
- **Elektrische Zahnbürste** (gedämpft am Schlüsselbein oder Handballen)
- **Vibrationskissen** oder Vibrationsgeräte
- **Klangschalen** auf dem Körper (Bauch, Brustkorb)
- **Atemstimulierende Einreibung (ASE)** kombiniert mit Summen

**Wichtig:**
- **Knochen als Leiter** — Vibration am Brustkorb, Kehlkopf, Schulter wirkt tief
- **Dosiert** einsetzen — Vibration ermüdet schnell
- **Nicht** bei Frakturen, frischen OPs, Thrombose-Risiko
- **Ankündigen** — Vibration überrascht leicht

Besonders wertvoll bei Menschen mit stark eingeschränktem Hören und Sehen. (Bienstein C./Fröhlich A., 1991)"

**B1 (570 Zeichen):**
"Die **vibratorische Stimulation** arbeitet mit **Schwingungen**. Die Schwingungen gehen durch die Knochen ins Körper-Innere. Das ist ein klares Signal — auch bei tief sedierten Menschen. Schon im Bauch der Mutter hört der Fötus die Stimme so.

**Angebote:**
- **Summen** am Brustkorb des Patienten
- **Elektrische Zahnbürste** (am Schlüsselbein, Handballen)
- **Vibrations-Kissen** oder Gerät
- **Klangschale** auf den Körper legen

**Wichtig:**
- **Knochen leiten die Vibration** tief in den Körper
- **Nicht zu viel** — Vibration macht schnell müde
- **Nicht** bei Knochenbruch, frischer OP, Thrombose
- **Ankündigen** — sonst erschrickt der Mensch"

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Vibration, Knochenleitung, Klangschale, Sedierung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Vibration wird nur über die Haut wahrgenommen, nicht über die Knochen"**
- **Fachbegriff:** Haut-Leitungs-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Vibration wandert **hauptsächlich über Knochen** ins Körperinnere (Knochenleitung). Deshalb wirkt Summen am Brustkorb oder eine Zahnbürste am Schlüsselbein so tief — die Schwingung wird vom Knochen weitergetragen. Merke: Knochen sind die Leitung, nicht die Haut."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — Vibration geht **durch die Knochen** ins Innere. Das nennt man **Knochenleitung**. Deshalb wirkt Summen am Brustkorb so tief. Der Knochen leitet die Schwingung weiter. Merke: Die Knochen leiten die Vibration, nicht die Haut."

**D2: "Vibration darf bei jedem Patienten eingesetzt werden"**
- **Fachbegriff:** Unbedenklichkeits-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Vibration ist **kontraindiziert** bei Frakturen (Bruchstelle kann sich lockern), frischen Operationen, tiefer Beinvenenthrombose (Embolie-Risiko), Osteoporose im Endstadium, und bei Patienten mit starkem Tremor. Immer Arzt fragen bei unklaren Fällen. Merke: Vibration ist nicht harmlos bei Knochen- oder Gefäßproblemen."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — Vibration ist **nicht erlaubt** bei Knochenbruch, frischer OP, Thrombose, schwerer Osteoporose, starkem Tremor. Bei Unsicherheit: Arzt fragen. Merke: Bei Knochen- oder Gefäß-Problemen vorsichtig."

**D3: "Je stärker die Vibration, desto besser der Effekt"**
- **Fachbegriff:** Intensitäts-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — starke Vibration **übermüdet** schnell und kann Stress auslösen. Die Kunst ist **kurz und dosiert**: 1-2 Minuten am Brustkorb, dann Pause, Reaktion beobachten. Sanftes Summen der eigenen Stimme ist oft wirksamer als ein starkes Gerät. Merke: Dosierung vor Intensität."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **starke** Vibration macht schnell **müde**. Besser: **kurz und wenig**. 1-2 Minuten, dann Pause, Reaktion abwarten. Sanftes Summen wirkt oft besser als ein starkes Gerät. Merke: Dosis ist wichtiger als Stärke."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Vibratorische Stimulation arbeitet mit Schwingungen, die über Knochen ins Körperinnere geleitet werden. Angebote: Summen am Brustkorb, elektrische Zahnbürste, Vibrationskissen, Klangschalen. Vorsicht bei Frakturen, frischen OPs und Thrombose-Risiko. Kurz und dosiert einsetzen."

**B1 (250 Zeichen):** "Genau. Die **vibratorische Stimulation** arbeitet mit **Schwingungen**. Sie gehen durch die Knochen ins Innere. Angebote: Summen, elektrische Zahnbürste, Vibrations-Kissen, Klangschale. **Nicht** bei Knochenbruch, frischer OP oder Thrombose. Kurz und wenig einsetzen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Über welchen Weg wandert Vibration tief in den Körper?"
- **Rückseite:** "Über die Knochen (Knochenleitung). Schon der Fötus hört die Mutterstimme im Mutterleib auf diesem Weg. Deshalb wirkt Summen am Brustkorb so eindrücklich."
- **Kategorie:** fachbegriff

---

## Baustein 8: beruhigende-ganzkoerperwaschung

### Metadaten
- **bausteinId:** basale-stimulation-gkw-beruhigend
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Frau Kaya ist unruhig, sie zupft an den Laken, ihr Puls ist hoch. Sie soll zur Ruhe kommen. Wie gestaltest du ihre Waschung — Wassertemperatur, Tempo, Richtung?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Die **beruhigende Ganzkörperwaschung**: Wassertemperatur **37-40 °C**, Waschrichtung **mit** der Haarwuchsrichtung, **langsames** Tempo, gleichmäßiger Druck, ruhige Atmosphäre (gedämpftes Licht, wenig Sprechen). Ziel: Puls sinkt, Muskeln entspannen."

**B1 (230 Zeichen):** "Die **beruhigende Waschung**: Wasser **warm** (37-40 °C), Waschrichtung **mit** dem Haarwuchs (z.B. am Arm: oben nach unten), **langsam**, gleichmäßiger Druck, ruhig. Ziel: Der Mensch wird ruhiger — Puls sinkt, Muskeln locker."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"Die **beruhigende Ganzkörperwaschung** ist eine der klassischen Anwendungen der Basalen Stimulation. Sie soll den Parasympathikus aktivieren — den 'Ruhe-Nerv'.

**Kennzeichen:**
- **Wassertemperatur:** 37-40 °C (hautwarm, angenehm)
- **Richtung:** **mit** der Haarwuchsrichtung (rumpfwärts-auswärts, zur Peripherie)
- **Tempo:** langsam, ohne Hast, lange Züge
- **Druck:** mittelfest und gleichmäßig
- **Atmosphäre:** gedämpftes Licht, wenig Sprechen, keine Nebenhandlungen
- **Waschlappen:** anliegend, nicht abheben und wieder ansetzen

**Indikationen:** Unruhe, Schlafstörungen, Schmerzen, Hypertonie, Angst, vor dem Zubettgehen.

**Typische Reaktionen:** Puls sinkt, Atmung wird tiefer und langsamer, Muskeltonus nimmt ab, Bewohner schließt die Augen.

**Kontraindikation:** Apathie, Wachkoma mit niedrigem Antrieb — hier wäre eine **belebende** Waschung passender. (Bienstein C./Fröhlich A., 1991)"

**B1 (600 Zeichen):**
"Die **beruhigende Waschung** soll den Menschen zur Ruhe bringen. Sie aktiviert den 'Ruhe-Nerv' (Parasympathikus).

**So geht es:**
- **Wasser:** 37-40 °C (hautwarm)
- **Richtung: mit** der Haarwuchsrichtung (vom Körper weg nach außen)
- **Tempo:** langsam, lange Züge, ohne Hast
- **Druck:** mittelfest, gleichmäßig
- **Umgebung:** gedämpftes Licht, wenig sprechen, ruhig
- **Waschlappen:** immer an der Haut lassen, nicht absetzen

**Wann:** Bei Unruhe, Schlafstörung, Schmerzen, hoher Puls, Angst, vor dem Einschlafen.

**Was passiert:** Puls sinkt, Atmung wird tiefer, Muskeln entspannen.

**Nicht** bei apathischen Menschen — die brauchen die **belebende** Waschung."

- **Erklärungs-Step:** stepType `comparison` (beruhigend vs. belebend, Tabelle)
- **Glossar-Begriffe:** [Parasympathikus, Haarwuchsrichtung, Peripherie, Apathie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Beruhigende Waschung macht man mit **kaltem** Wasser, um den Kreislauf zu beruhigen"**
- **Fachbegriff:** Kalt-ist-ruhig-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **kaltes Wasser** wirkt **belebend**, nicht beruhigend. Es aktiviert den Sympathikus (Herz schlägt schneller). Beruhigend wirkt **hautwarmes Wasser** (37-40 °C) — es aktiviert den Parasympathikus. Merke: Warm beruhigt, kalt belebt. Klar unterscheiden."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — **kalt** macht **wach**, nicht ruhig. Zum Beruhigen: **warmes** Wasser (37-40 °C). Das macht den Menschen ruhiger. **Kalt** (23-28 °C) ist für die **belebende** Waschung. Merke: Warm = ruhig, kalt = wach."

**D2: "Beruhigend wäscht man gegen die Haarwuchsrichtung"**
- **Fachbegriff:** Richtungs-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **gegen** die Haarwuchsrichtung wirkt **belebend**, nicht beruhigend. Haare werden aufgestellt, der Reiz ist stark. **Mit** der Haarwuchsrichtung (z.B. am Arm: Schulter → Hand) ist die Haut im natürlichen Muster — das beruhigt. Merke: Mit dem Haar = ruhig. Gegen das Haar = wach."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **gegen** den Haarwuchs macht **wach**. Die Haare werden aufgestellt — das ist stark. **Mit** dem Haarwuchs macht **ruhig** (z.B. am Arm: von der Schulter zur Hand). Merke: Mit dem Haar = ruhig, gegen das Haar = wach."

**D3: "Während der beruhigenden Waschung sollte man viel mit dem Patienten reden, damit er sich wohl fühlt"**
- **Fachbegriff:** Sprech-Missverständnis
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — viel Reden **aktiviert** und kostet Aufmerksamkeit. Bei der beruhigenden Waschung: **Initialberührung + kurze Ankündigung, dann konzentriert arbeiten**. Das Schweigen ist gewollt. Wenn Worte, dann leise und langsam. Merke: Präsenz ohne Worte ist oft stärker als viele Worte."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — viel Reden macht **wach**. Bei der beruhigenden Waschung: **kurz ankündigen**, dann **ruhig arbeiten**. Das Schweigen ist gewollt. Leise und langsam, wenn doch gesprochen wird. Merke: Weniger Worte = mehr Ruhe."

### Richtig-Feedback
**C1 (300 Zeichen):** "Genau. Beruhigende Waschung: warmes Wasser (37-40 °C), **mit** der Haarwuchsrichtung, **langsam**, gleichmäßiger Druck, ruhige Atmosphäre (gedämpft, wenig sprechen). Aktiviert den Parasympathikus: Puls sinkt, Atmung wird tiefer, Muskeln entspannen. Indikation: Unruhe, Schlafstörung, Angst, Schmerzen."

**B1 (260 Zeichen):** "Genau. Die **beruhigende Waschung**: **warmes** Wasser (37-40 °C), **mit** der Haarwuchsrichtung, **langsam**, gleichmäßiger Druck, **ruhig**. Der Mensch wird ruhiger: Puls sinkt, Atmung wird tiefer. Gut bei Unruhe, Schlafstörung, Schmerzen. Nicht bei apathischen Menschen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Wassertemperatur und welche Waschrichtung bei der beruhigenden Ganzkörperwaschung?"
- **Rückseite:** "Wasser 37-40 °C (hautwarm), Waschrichtung MIT der Haarwuchsrichtung, langsames Tempo, gleichmäßiger Druck. Aktiviert den Parasympathikus."
- **Kategorie:** handlung

---

## Baustein 9: belebende-ganzkoerperwaschung

### Metadaten
- **bausteinId:** basale-stimulation-gkw-belebend
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Herr Fischer ist apathisch, öffnet kaum die Augen, reagiert wenig. Du willst ihn wacher machen, damit er zum Mittagessen wach ist. Wie gestaltest du jetzt die Waschung — anders als zum Abend?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Die **belebende Ganzkörperwaschung**: Wassertemperatur **23-28 °C**, Waschrichtung **gegen** die Haarwuchsrichtung (peripher zur Körpermitte), **zügiges** Tempo, frischer Duft möglich (Zitrus, Minze), helle Atmosphäre. Ziel: Patient wird wacher, aktiver."

**B1 (230 Zeichen):** "Die **belebende Waschung**: Wasser **kühler** (23-28 °C), Richtung **gegen** den Haarwuchs (z.B. am Arm: Hand → Schulter), **zügig**, frischer Duft (Zitrone, Minze). Der Mensch wird **wacher**, aktiver, aufmerksamer."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Die **belebende Ganzkörperwaschung** aktiviert den Sympathikus — den 'Aktivitäts-Nerv'. Sie wird eingesetzt, wenn der Bewohner wacher, aktiver und aufmerksamer werden soll.

**Kennzeichen:**
- **Wassertemperatur:** 23-28 °C (kühler als Hautoberfläche)
- **Richtung:** **gegen** die Haarwuchsrichtung (Peripherie → Körpermitte)
- **Tempo:** zügig, nicht hastig — aber deutlich schneller als beruhigend
- **Druck:** klar und deutlich
- **Atmosphäre:** Licht hell, Ansprache aktiv, ggf. Musik, frische Luft
- **Zusatz:** Zitrus- oder Minzwaschlotion (keine ätherischen Öle ohne Prüfung)

**Indikationen:** Apathie, Somnolenz, Wachkoma mit niedrigem Antrieb, morgens vor einer Aktivität, nach langer Bettruhe.

**Typische Reaktionen:** Puls steigt leicht, Atmung wird aktiver, Augen öffnen sich, Gesicht wird lebendiger.

**Kontraindikation:** Fieber, Hypertonie-Krise, akute Schmerzen, Unruhe. (Bienstein C./Fröhlich A., 1991)"

**B1 (610 Zeichen):**
"Die **belebende Waschung** macht den Menschen **wacher und aktiver**. Sie aktiviert den 'Aktivitäts-Nerv' (Sympathikus).

**So geht es:**
- **Wasser:** 23-28 °C (**kühler** als die Haut)
- **Richtung: gegen** den Haarwuchs (von außen zum Körper)
- **Tempo:** zügig, aber nicht hastig
- **Druck:** klar, deutlich
- **Umgebung:** helles Licht, normale Ansprache, Musik möglich
- **Duft:** Zitrone, Minze (kein ätherisches Öl ohne Prüfung)

**Wann:** Bei Apathie, Schläfrigkeit, Wachkoma mit wenig Reaktion, morgens vor einer Aktivität.

**Was passiert:** Puls steigt leicht, Atmung aktiver, Augen gehen auf, Gesicht wacher.

**Nicht** bei Fieber, hohem Blutdruck, Schmerzen, Unruhe."

- **Erklärungs-Step:** stepType `comparison` (beruhigend vs. belebend, Parameter)
- **Glossar-Begriffe:** [Sympathikus, Apathie, Somnolenz, ätherische Öle]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Belebende Waschung macht man mit **heißem** Wasser"**
- **Fachbegriff:** Heiß-ist-belebend-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **heißes Wasser** (über 40 °C) ist **beruhigend bis ermüdend** (wie ein warmes Bad). Belebend ist **kühleres Wasser** (23-28 °C, hautkühl). Der Reiz kommt vom **Temperaturunterschied** zur Haut, nicht von Hitze. Merke: Kühl belebt, warm beruhigt. Nicht verwechseln mit heiß."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **heißes** Wasser macht **müde** (wie ein warmes Bad). **Kühles** Wasser (23-28 °C) macht **wach**. Der Unterschied zur Hauttemperatur ist der Reiz. Merke: Kühl = wach. Warm = ruhig. Heiß = müde."

**D2: "Bei der belebenden Waschung darf man die Temperatur frei wählen, Hauptsache zügig"**
- **Fachbegriff:** Temperatur-Beliebigkeit
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — **Temperatur ist die Kernvariable**. 23-28 °C erzeugt einen **hautkühlenden Effekt**, der den Sympathikus aktiviert. Normal-warmes Wasser wirkt neutral. Die Zügigkeit verstärkt nur — der **Reiz kommt von der Kälte**. Merke: Ohne kühles Wasser keine belebende Waschung."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die **Temperatur ist wichtig**. Nur bei 23-28 °C (kühler als Haut) ist es **belebend**. Mit normal-warmem Wasser wirkt es nicht. **Kühle** ist der Reiz, nicht nur Tempo. Merke: Ohne kühles Wasser keine belebende Waschung."

**D3: "Belebende Waschung wird immer gleich gemacht — egal welcher Patient"**
- **Fachbegriff:** Individualitäts-Blindheit
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — immer **individuell anpassen**: Bei älteren, sensiblen Menschen oder nach längerer Bettruhe vorsichtig mit der Temperatur beginnen (28 °C statt 23 °C). Bei Fieber, Kreislaufschwäche, Hypertonie **gar nicht** belebend waschen. Vor jeder Maßnahme: Werte prüfen. Merke: Basale Stimulation ist immer individualisiert."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **immer individuell anpassen**. Bei älteren oder sensiblen Menschen vorsichtig beginnen (28 °C statt 23 °C). Bei Fieber, niedrigem Blutdruck oder Bluthochdruck-Krise: gar nicht belebend waschen. Vorher immer Werte prüfen. Merke: Nie stur nach Schema."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Belebende Waschung: kühles Wasser (23-28 °C), **gegen** die Haarwuchsrichtung, **zügig**, klarer Druck, helle Atmosphäre, ggf. frischer Duft (Zitrus, Minze). Aktiviert den Sympathikus: Puls steigt leicht, Atmung wird aktiver, Augen öffnen sich. Indikation: Apathie, Somnolenz, morgendliche Aktivierung."

**B1 (260 Zeichen):** "Genau. Die **belebende Waschung**: **kühles** Wasser (23-28 °C), **gegen** den Haarwuchs, **zügig**, klarer Druck, helle Atmosphäre. Der Mensch wird **wacher**: Puls steigt leicht, Augen öffnen sich. Gut bei Apathie, Schläfrigkeit. Nicht bei Fieber oder hohem Blutdruck."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Wassertemperatur und welche Richtung bei der belebenden Ganzkörperwaschung?"
- **Rückseite:** "Wasser 23-28 °C (kühl), Waschrichtung GEGEN die Haarwuchsrichtung (zur Körpermitte), zügiges Tempo, helle Atmosphäre. Aktiviert den Sympathikus."
- **Kategorie:** handlung

---

## Baustein 10: neurophysiologische-gkw

### Metadaten
- **bausteinId:** basale-stimulation-gkw-neurophysiologisch
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Herr Weber hat einen Schlaganfall mit linksseitiger Hemiparese. Seine linke Seite 'vergisst' er oft. Warum wäre es falsch, bei der Waschung die gesunde rechte Seite zuerst und ausführlicher zu waschen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Die **neurophysiologische GKW** (nach Bobath) bezieht die **betroffene Seite bewusst ein**. Lange, durchgängige Züge über beide Körperhälften, betroffene Seite wird mitgewaschen, mitgekleidet, mitbetrachtet. Ziel: Wahrnehmung der betroffenen Seite fördern."

**B1 (235 Zeichen):** "Die **neurophysiologische Waschung** (nach Bobath): Die **kranke Seite** wird **bewusst mit einbezogen**. Lange Züge über beide Seiten. Die betroffene Seite nicht 'vergessen'. Ziel: Der Mensch spürt auch seine kranke Seite wieder."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Die **neurophysiologische Ganzkörperwaschung** ist eng mit dem **Bobath-Konzept** verknüpft. Sie richtet sich an Patienten mit Halbseitenlähmung (z.B. nach Schlaganfall), bei denen eine Körperhälfte in der Wahrnehmung 'fehlt' — das **Neglect-Phänomen**.

**Kennzeichen:**
- **Lange, durchgängige Züge** über die gesamte Körperachse (z.B. vom Fuß bis zur Schulter in einem Zug)
- **Betroffene Seite zuerst** oder bewusst **gleichwertig** waschen
- **Pflegekraft steht** auf der betroffenen Seite
- **Betroffene Hand** in die Waschhandlung einbeziehen (Waschlappen halten, führen)
- **Benennen**, welche Körperteile berührt werden ('jetzt dein linker Arm')
- **Blickführung**: Patient wird ermutigt, zur betroffenen Seite zu schauen

**Ziel:** Das Gehirn wieder an die betroffene Seite erinnern, sie ins Körperschema integrieren, Neglect reduzieren. (Bobath B., 1971; Bienstein C./Fröhlich A., 1991)"

**B1 (600 Zeichen):**
"Die **neurophysiologische Waschung** kommt aus dem **Bobath-Konzept**. Sie ist für Menschen mit Halbseitenlähmung (z.B. nach Schlaganfall). Diese Menschen 'vergessen' oft eine Körperhälfte — das nennt man **Neglect**.

**Kennzeichen:**
- **Lange Züge** über die ganze Körperachse (z.B. vom Fuß bis zur Schulter)
- **Kranke Seite zuerst** oder **gleich viel** waschen
- Die Pflegekraft **steht auf der kranken Seite**
- Die **kranke Hand mitnehmen** (Waschlappen halten, führen)
- **Benennen:** 'Jetzt dein linker Arm'
- Den Menschen ermutigen, zur kranken Seite zu **schauen**

**Ziel:** Das Gehirn merkt wieder: Die kranke Seite gehört dazu."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Hemiparese, Neglect, Bobath-Konzept, Körperschema]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Man wäscht zuerst die gesunde Seite, weil der Patient das besser wahrnimmt"**
- **Fachbegriff:** Gesunde-Seite-Zuerst-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — das Gegenteil ist didaktisch richtig. Die **betroffene Seite wird bewusst einbezogen** (zuerst oder gleichwertig) — sonst verstärkt sich der **Neglect**. Das Gehirn soll gerade die **vernachlässigte** Seite wieder lernen. Merke: Die kranke Seite braucht mehr Aufmerksamkeit, nicht weniger."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **umgekehrt**: Die **kranke Seite** wird **zuerst** oder **gleich viel** gewaschen. Sonst vergisst das Gehirn sie noch mehr. Merke: Die kranke Seite braucht **mehr** Aufmerksamkeit, nicht weniger."

**D2: "Neurophysiologische Waschung ist dasselbe wie die beruhigende Waschung"**
- **Fachbegriff:** Konzept-Verwechslung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **andere Konzepte, anderes Ziel**. Beruhigende/belebende GKW: Regulation des vegetativen Nervensystems. Neurophysiologische GKW: **Integration der betroffenen Seite ins Körperschema** (Bobath). Wassertemperatur und Richtung spielen hier keine zentrale Rolle — die **Züge** sind das Entscheidende. Merke: Verschiedene Konzepte."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — das sind **andere Konzepte**. Beruhigende Waschung: für Nervensystem. Neurophysiologische: für die **kranke Seite bei Schlaganfall**. Nicht die Temperatur ist wichtig, sondern die **langen Züge** und das **Einbeziehen der kranken Seite**."

**D3: "Die Pflegekraft sollte bei der neurophysiologischen GKW auf der gesunden Seite stehen"**
- **Fachbegriff:** Stand-Seite-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — die Pflegekraft **steht auf der betroffenen Seite**. Dadurch **dreht sich der Patient dorthin**, sein Blick geht zur betroffenen Seite. Das Gehirn wird aktiviert, diese Seite wieder wahrzunehmen. Merke: Stehen auf der betroffenen Seite ist Neglect-Training im Alltag."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die Pflegekraft steht auf der **kranken Seite**. So dreht der Patient seinen Kopf dorthin, sein Blick geht zur kranken Seite. Das Gehirn lernt wieder. Merke: Auf der kranken Seite stehen ist Teil des Trainings."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Die neurophysiologische GKW (Bobath) bezieht die betroffene Seite bewusst ein: lange Züge über beide Körperhälften, betroffene Seite zuerst oder gleichwertig, Pflegekraft steht auf betroffener Seite, Körperteile benennen, Hand mitnehmen. Ziel: Neglect reduzieren, Körperschema reorganisieren."

**B1 (260 Zeichen):** "Genau. Die **neurophysiologische Waschung** (nach Bobath): **lange Züge** über beide Seiten, **kranke Seite zuerst** oder gleich viel, Pflegekraft **steht auf der kranken Seite**, Körperteile **benennen**. Ziel: Das Gehirn soll die kranke Seite wieder wahrnehmen (Neglect vermeiden)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist das Besondere an der neurophysiologischen Ganzkörperwaschung nach Bobath — wer braucht sie und warum?"
- **Rückseite:** "Für Patienten mit Halbseitensymptomatik (z.B. Schlaganfall) und Neglect. Bezieht die betroffene Seite bewusst ein (zuerst waschen, Hand mitnehmen, benennen, dort stehen), um das Körperschema zu reorganisieren."
- **Kategorie:** handlung

---

## Baustein 11: entwicklungsfoerdernde-gkw

### Metadaten
- **bausteinId:** basale-stimulation-gkw-entwicklungsfoerdernd
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Mensch im Wachkoma wirkt wie ein hilfloses Kind. Die Wahrnehmung ist auf einem frühen Stand. Wie könnte eine Waschung gestaltet sein, die sich an dieser frühkindlichen Erfahrung orientiert?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Die **entwicklungsfördernde GKW** orientiert sich an der **frühkindlichen Entwicklung**: Berührungsfolge kopf-rumpf-extremitäten (wie die Entwicklung verläuft), Beugung der Gelenke statt Streckung, Körper **einpacken**. Für Kinder und Wachkoma-Patienten."

**B1 (230 Zeichen):** "Die **entwicklungsfördernde Waschung** ahmt die frühe Kindheit nach: **Kopf zuerst, dann Körper, dann Arme und Beine** (wie in der Entwicklung). **Beugung** statt Streckung. Den Körper **einpacken**. Für Kinder und Wachkoma."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die **entwicklungsfördernde Ganzkörperwaschung** orientiert sich an der Reihenfolge der kindlichen Wahrnehmungsentwicklung: Erst nimmt das Kind seinen Kopf wahr, dann den Rumpf, dann Arme, zuletzt Beine. Bei schwerstkranken Menschen (Wachkoma, schwere Behinderung) ist die Wahrnehmung oft auf diesen frühen Stand zurückgeführt.

**Kennzeichen:**
- **Berührungsreihenfolge:** Kopf → Brust → Bauch → Arme → Beine
- **Beugung vor Streckung:** Gelenke in leichter Beugestellung — entspricht fetaler Haltung
- **'Einpacken'**: Rumpf mit einem Handtuch oder beiden Händen umschließen
- **Begrenzung herstellen** (Nest): Kissen um den Körper
- **Langsame, wiederholende Bewegungen** (wie Schaukeln)
- **Bezugsperson** möglichst konstant (vertraute Stimme, vertraute Berührung)

**Einsatz:** Kinder mit schweren Behinderungen, Menschen im Wachkoma, Schwerstpflegebedürftige. (Fröhlich A., 1975; Bienstein C./Fröhlich A., 1991)"

**B1 (600 Zeichen):**
"Die **entwicklungsfördernde Waschung** macht es wie in der frühen Kindheit: Ein Baby spürt zuerst seinen Kopf, dann den Körper, dann Arme, dann Beine. Bei schwer kranken Menschen ist die Wahrnehmung oft auf diesem frühen Stand.

**Kennzeichen:**
- **Reihenfolge:** Kopf → Brust → Bauch → Arme → Beine
- **Beugung** statt Streckung (wie im Mutterleib)
- **Einpacken**: Rumpf mit Handtuch oder beiden Händen umschließen
- **Nest**: Kissen um den Körper
- **Langsame, wiederkehrende Bewegungen** (wie Schaukeln)
- **Immer dieselbe Pflegekraft** — vertraute Stimme und Hand

**Für wen:** Kinder mit schweren Behinderungen, Menschen im Wachkoma."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Wachkoma, fetale Haltung, Bezugsperson, Nest]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Reihenfolge der Waschung ist bei allen Konzepten gleich: Gesicht, dann absteigend"**
- **Fachbegriff:** Standard-Reihenfolge-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die **entwicklungsfördernde GKW** folgt der **kindlichen Wahrnehmungsentwicklung**: Kopf → Rumpf → Arme → Beine. Die normale Ganzkörperpflege geht anders vor. Die Konzepte der Basalen Stimulation haben **jeweils eigene Reihenfolgen**, die zum Ziel passen. Merke: Konzept bestimmt Reihenfolge."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die **entwicklungsfördernde** Waschung hat eine **eigene** Reihenfolge: Kopf, Brust, Bauch, Arme, Beine. Jedes Konzept hat seine eigene Reihenfolge. Merke: Das Konzept bestimmt die Reihenfolge, nicht die Gewohnheit."

**D2: "Bei der entwicklungsfördernden GKW sollen die Gelenke gestreckt werden"**
- **Fachbegriff:** Strecke-vs.-Beugung-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — **Beugung** ist zentral, nicht Streckung. In der fetalen Phase ist der Körper gebeugt — diese Haltung vermittelt **Sicherheit und Geborgenheit**. Streckung löst bei schwerstkranken Menschen oft Spastik oder Unruhe aus. Merke: Entwicklungsfördernd = Beugung, nicht Streckung."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Beugung** ist richtig, nicht Streckung. Im Mutterleib ist der Körper gebeugt. Diese Haltung gibt **Sicherheit**. Streckung kann Spastik oder Unruhe machen. Merke: Entwicklungsfördernd = Beugung."

**D3: "Ein ständiger Wechsel der Pflegekraft hilft dem Patienten, Abwechslung zu erleben"**
- **Fachbegriff:** Wechsel-ist-gut-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **Bezugspflege** ist zentral. Für schwerstkranke Menschen ist Wiedererkennung (Stimme, Berührung, Geruch) eine wichtige Orientierung. Ständiger Wechsel bedeutet jedes Mal neue Reize, Stress. Möglichst **dieselbe Pflegekraft** stabilisiert. Merke: Vertrautheit vor Abwechslung."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **dieselbe Pflegekraft** ist besser. Schwer kranke Menschen erkennen Stimme und Hand wieder. Das gibt Sicherheit. Ständiger Wechsel macht Stress. Merke: **Bezugspflege** ist wichtig — Vertrautheit vor Abwechslung."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Die entwicklungsfördernde GKW orientiert sich an der frühkindlichen Wahrnehmungsentwicklung: Reihenfolge Kopf → Brust → Bauch → Arme → Beine, Beugung statt Streckung, 'Einpacken' und Nest, konstante Bezugsperson, langsame wiederkehrende Bewegungen. Einsatz: Kinder mit schwerer Behinderung, Wachkoma."

**B1 (255 Zeichen):** "Genau. Die **entwicklungsfördernde Waschung** folgt der Kindheits-Entwicklung: Kopf zuerst, dann Körper, dann Arme, dann Beine. **Beugung** statt Streckung. Körper **einpacken**, Nest aus Kissen. **Dieselbe Pflegekraft**. Für Kinder mit schweren Behinderungen und Menschen im Wachkoma."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Berührungsreihenfolge und welche Gelenkstellung bei der entwicklungsfördernden GKW?"
- **Rückseite:** "Reihenfolge: Kopf → Brust → Bauch → Arme → Beine (wie in der frühkindlichen Entwicklung). Beugung der Gelenke statt Streckung (fetale Haltung)."
- **Kategorie:** handlung

---

## Baustein 12: initialberuehrung

### Metadaten
- **bausteinId:** basale-stimulation-initialberuehrung
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, du schläfst tief und jemand beginnt plötzlich, ohne Ankündigung, deinen Arm zu waschen. Wie reagierst du? Und warum ist das bei einem Patienten im Wachkoma besonders kritisch?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Die **Initialberührung** ist eine **feste, klare Handauflage** (meist Schulter oder Oberarm) mit kurzer Ansprache — **vor jeder Handlung**. Der Patient weiß: 'Jemand ist da, und gleich passiert etwas.' Erreichbarkeit herstellen, Überraschung vermeiden."

**B1 (230 Zeichen):** "Die **Initialberührung** ist eine **feste Handauflage** auf Schulter oder Oberarm mit kurzem Wort. Sie kommt **vor jeder Handlung**. Der Mensch weiß: 'Da ist jemand. Gleich passiert etwas.' Keine Überraschung für den Patienten."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (710 Zeichen):**
"Die **Initialberührung** (auch 'Erstberührung' oder 'Kontaktberührung') ist eine der wichtigsten Techniken der Basalen Stimulation. Sie stellt den **Erstkontakt** vor jeder Pflegehandlung her — mit dem Ziel, den Patienten **nicht zu überraschen** und ihm eine **bewusste Orientierung** zu ermöglichen.

**So geht sie:**
- **Stelle:** Feste Hand auf Schulter, Oberarm oder Brustbein (immer **dieselbe Stelle**)
- **Druck:** Klar und deutlich spürbar (nicht leicht, nicht flüchtig)
- **Dauer:** 3-5 Sekunden, ruhig halten
- **Ansprache:** 'Frau Kaya, ich bin Anna. Ich wasche gleich deine Arme.' — Name zuerst, Handlung ankündigen
- **Reaktion abwarten:** 1-2 Sekunden — kommt Blick, Veränderung der Mimik, Atemvertiefung?

**Besonders wichtig bei:** Bewusstseinsstörungen, Demenz, Sehbehinderung, tief schlafenden Patienten. **Ohne Initialberührung** werden Handlungen als Übergriff erlebt — die Folge sind Abwehr, Unruhe, Stressreaktionen. (Bienstein C./Fröhlich A., 1991)"

**B1 (590 Zeichen):**
"Die **Initialberührung** ist eine der wichtigsten Techniken. Sie kommt **vor jeder Handlung**. Ziel: Den Patienten nicht überraschen.

**So geht es:**
- **Stelle:** Feste Hand auf Schulter, Oberarm oder Brustbein (immer **dieselbe Stelle**)
- **Druck:** Klar spürbar, nicht leicht
- **Dauer:** 3-5 Sekunden, ruhig
- **Wort:** 'Frau Kaya, ich bin Anna. Ich wasche gleich deine Arme.'
- **Warten:** 1-2 Sekunden — kommt ein Blick, ein Atmen?

**Wann besonders wichtig:** Wachkoma, Demenz, Sehbehinderung, tiefer Schlaf.

**Ohne Initialberührung** fühlt sich der Mensch **überrascht** oder **überfallen**. Die Folge: Abwehr, Unruhe, Stress."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Initialberührung, Erstkontakt, Körperschema, Bezugspflege]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein freundliches Hallo und direktes Loslegen reicht als Ankündigung"**
- **Fachbegriff:** Verbal-ist-genug-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — Worte allein reichen nicht. Schwerstkranke, desorientierte oder hörbeeinträchtigte Patienten können akustische Signale **nicht eindeutig zuordnen**. Die **körperliche Berührung** ist der eindeutige Kontakt-Marker. **Beides** gehört zusammen: Hand + Wort. Merke: Hören allein reicht nicht."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — nur sprechen reicht **nicht**. Viele schwer kranke Menschen hören Worte nicht richtig. Die **Berührung** ist das klare Signal. Immer **beides**: Hand **und** Wort. Merke: Nur Sprechen reicht nicht."

**D2: "Man kann die Initialberührung auch an der Hand oder am Fuß machen"**
- **Fachbegriff:** Stelle-Beliebigkeit
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die Stelle ist **Schulter, Oberarm oder Brustbein**. Hand oder Fuß sind **Extremitäten** — dort kommt die Information langsamer im Gehirn an, und Berührung dort ist oft kitzlig oder schreckhaft. Der **Rumpf** ist die ruhige, stabile Kontaktfläche. Merke: Rumpf-nah, immer dieselbe Stelle."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die Stelle ist **Schulter, Oberarm oder Brustbein**. Hand oder Fuß sind weit weg vom Körper und oft **kitzlig**. Der **Rumpf** ist ruhig und stabil. Merke: Immer **dieselbe Stelle** am Rumpf."

**D3: "Die Initialberührung macht man nur einmal zu Schichtbeginn"**
- **Fachbegriff:** Einmal-genug-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die Initialberührung kommt **vor jeder einzelnen Handlung**: vor Waschen, vor Lagern, vor Absaugen, vor Medikamentengabe. Auch mehrfach pro Schicht. Der Patient kann nicht erschließen, wann die nächste Handlung kommt — ohne erneute Ankündigung ist jede Handlung ein 'Überfall'. Merke: Vor jeder Handlung — nicht einmalig."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — die Initialberührung kommt **vor jeder Handlung**: vor Waschen, vor Lagern, vor Absaugen. Auch mehrmals pro Schicht. Ohne Ankündigung ist jede Handlung ein Überfall. Merke: **Vor jeder Handlung**, nicht nur einmal."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Die Initialberührung: feste Handauflage auf Schulter/Oberarm/Brustbein, immer dieselbe Stelle, klarer Druck, 3-5 Sekunden, dazu kurze Ansprache mit Namen und Ankündigung der Handlung. Kommt **vor jeder Pflegehandlung**. Verhindert Überraschung, gibt Sicherheit, vermeidet Stressreaktionen."

**B1 (265 Zeichen):** "Genau. Die **Initialberührung**: **feste Hand** auf Schulter, Oberarm oder Brustbein, **immer dieselbe Stelle**, 3-5 Sekunden, dazu **kurze Ankündigung** ('Frau Kaya, ich wasche gleich deine Arme'). Kommt **vor jeder Handlung**. Ohne sie: Überraschung, Unruhe, Abwehr."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist die Initialberührung und wann kommt sie zum Einsatz?"
- **Rückseite:** "Feste Handauflage auf Schulter, Oberarm oder Brustbein (immer dieselbe Stelle) mit kurzer Ansprache. Vor jeder Pflegehandlung — nicht nur einmal zu Schichtbeginn. Verhindert Überraschung."
- **Kategorie:** handlung

---

## Baustein 13: atemstimulierende-einreibung

### Metadaten
- **bausteinId:** basale-stimulation-ase
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn du selbst flach und unruhig atmest — was hilft dir? Jetzt übertrage das: Wie könnten Hände am Rücken helfen, eine tiefere, ruhigere Atmung zu fördern?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Die **Atemstimulierende Einreibung (ASE)**: beide Hände, symmetrisch am Rücken, **langsame, rhythmische Züge** von den Schulterblättern abwärts. Der Reiz läuft **mit dem Ausatmen**. Ziel: tiefere, ruhigere Atmung — und Entspannung. (Bienstein)"

**B1 (225 Zeichen):** "Die **Atemstimulierende Einreibung (ASE)**: Beide Hände gleichzeitig auf dem Rücken. **Langsame, rhythmische** Bewegung von den Schultern nach unten. Im Takt der Atmung. Ziel: Der Mensch atmet **tiefer** und **ruhiger**."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"Die **Atemstimulierende Einreibung (ASE)** ist eine der bekanntesten Techniken aus dem Konzept. Sie nutzt **symmetrische, rhythmische Berührungen am Rücken**, um die Atmung zu vertiefen und den Parasympathikus zu aktivieren.

**Durchführung:**
- **Position:** Patient sitzt oder liegt auf der Seite, Rücken zugänglich
- **Mittel:** Hautöl oder -lotion (dünn), warm
- **Hände:** beide Hände flach, parallel, **links und rechts** von der Wirbelsäule
- **Bewegung:** Langsame Züge von den Schulterblättern nach unten — beim **Ausatmen** abwärts, beim Einatmen wird oben neu angesetzt
- **Rhythmus:** An die Atmung des Patienten anpassen
- **Dauer:** 5-10 Minuten, je nach Reaktion

**Wirkung:** Atmung wird tiefer und langsamer, Puls sinkt, Muskeln entspannen, Patient kommt zur Ruhe.

**Indikationen:** Unruhe, flache Atmung, Pneumonieprophylaxe, Einschlafhilfe, vor schmerzhaften Maßnahmen.

**Kontraindikationen:** Wunden am Rücken, frische Wirbelsäulen-OP, offene Hautstellen. (Bienstein C./Fröhlich A., 1991)"

**B1 (620 Zeichen):**
"Die **ASE** ist eine bekannte Einreibung am Rücken. Sie macht die Atmung **tiefer** und **ruhiger**.

**So geht es:**
- **Position:** Patient sitzt oder liegt auf der Seite
- **Mittel:** dünn Hautöl (warm)
- **Hände:** beide flach, **links und rechts** von der Wirbelsäule
- **Bewegung:** langsame Züge von den Schultern nach unten — **beim Ausatmen**
- **Rhythmus:** dem Atem des Patienten folgen
- **Dauer:** 5-10 Minuten

**Was passiert:** Atmung wird tiefer, Puls sinkt, Muskeln entspannen.

**Wann:** Bei Unruhe, flacher Atmung, zur Pneumonie-Vorbeugung, vor dem Einschlafen, vor schmerzhaften Handlungen.

**Nicht bei:** Wunden am Rücken, frischer Wirbelsäulen-OP, offenen Hautstellen."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [ASE, Parasympathikus, Symmetrie, Pneumonieprophylaxe]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei der ASE arbeitet man mit einer Hand, um die Wirbelsäule nicht zu stören"**
- **Fachbegriff:** Einhand-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die ASE arbeitet **beidhändig und symmetrisch**: Beide Hände gleichzeitig, **links und rechts** der Wirbelsäule. Die Symmetrie ist **zentral** — sie vermittelt dem Gehirn eine klare Information über den Rücken als Einheit. Einhändig verliert diese Wirkung. Merke: Symmetrie = Kernmerkmal der ASE."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die ASE arbeitet **mit beiden Händen** gleichzeitig — **links und rechts** von der Wirbelsäule. Die Symmetrie ist **wichtig**. Eine Hand allein bringt nicht dieselbe Wirkung. Merke: Immer **beide Hände**, symmetrisch."

**D2: "Die Züge gehen von unten nach oben, weil das die Lymphe fördert"**
- **Fachbegriff:** Lymph-Verwechslung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — du verwechselst mit **Lymphdrainage**. Die ASE geht **von oben nach unten** — von den Schulterblättern abwärts, im Takt des **Ausatmens**. Ziel ist **nicht** Lymphdrainage, sondern Atem-Regulierung und Beruhigung. Merke: ASE = oben nach unten, beim Ausatmen. Lymphe = andere Methode."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das ist **Lymphdrainage**, nicht ASE. Die ASE geht **von oben nach unten** (von den Schultern abwärts) beim **Ausatmen**. Ziel ist **Atmung und Ruhe**, nicht Lymphe. Merke: ASE = oben nach unten."

**D3: "Der Rhythmus der ASE soll den Patienten zu einer bestimmten Atemfrequenz bringen"**
- **Fachbegriff:** Vorgabe-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **umgekehrt**: Die Pflegekraft passt ihren **Rhythmus dem Atem des Patienten an**, nicht andersherum. Beim Ausatmen des Patienten gehen die Hände nach unten. So folgt die Bewegung seinem natürlichen Rhythmus — **dann erst** vertieft sich die Atmung von selbst. Merke: Dem Atem folgen, nicht vorgeben."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **umgekehrt**: Du **folgst dem Atem des Patienten**. Beim **Ausatmen** gehen deine Hände nach unten. So wird die Atmung von selbst tiefer. Du gibst **nichts vor**. Merke: Dem Atem folgen, nicht vorgeben."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Die ASE ist eine symmetrische, rhythmische Einreibung mit **beiden Händen links und rechts der Wirbelsäule**, langsame Züge von den Schulterblättern abwärts **im Takt des Ausatmens**. Wirkung: tiefere Atmung, Parasympathikus-Aktivierung, Entspannung. Indikationen: Unruhe, Pneumonieprophylaxe, Einschlafhilfe."

**B1 (260 Zeichen):** "Genau. Die **ASE**: beide Hände **symmetrisch** links und rechts neben der Wirbelsäule, langsame Züge **von oben nach unten** beim **Ausatmen** des Patienten. Der Pflegende **folgt dem Atem** — gibt nichts vor. Wirkung: Atmung wird tiefer, Ruhe. Nicht bei Wunden am Rücken."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie wird die Atemstimulierende Einreibung (ASE) durchgeführt — Richtung, Hände, Rhythmus?"
- **Rückseite:** "Beide Hände symmetrisch links und rechts der Wirbelsäule. Langsame Züge von den Schulterblättern abwärts, im Takt des Ausatmens (Pflegende folgt dem Atem des Patienten)."
- **Kategorie:** handlung

---

## Baustein 14: orale-olfaktorische-stimulation

### Metadaten
- **bausteinId:** basale-stimulation-oral-olfaktorisch
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Welcher Geruch oder Geschmack weckt bei dir sofort eine bestimmte Erinnerung? Warum könnten gerade diese Sinne bei Menschen mit Demenz oder im Wachkoma so wertvoll sein?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "**Orale Stimulation**: Lippen befeuchten, vertraute Geschmäcker am Löffel (Lieblingsgetränk, Zitronensaft), Zahnbürste. **Olfaktorische Stimulation**: vertraute Gerüche (Kaffee, Parfum des Ehepartners, Lavendel). Beide Sinne sind emotional stark verbunden."

**B1 (235 Zeichen):** "**Oral** = Mund: Lippen befeuchten, vertrauter Geschmack am Löffel, Zahnbürste. **Olfaktorisch** = Nase: vertraute Gerüche (Kaffee, Parfum, Lavendel). Beide Sinne sind stark mit **Erinnerungen** verbunden — besonders bei Demenz."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Der **orale** und der **olfaktorische** Sinn sind eng mit Emotion und Erinnerung verbunden — beide Sinne projizieren direkt ins limbische System.

**Orale Stimulation:**
- **Lippen befeuchten** (feuchter Waschlappen, Lippenpflege mit Geschmack)
- **Geschmacksreize** am Löffel oder Tupfer: Zitrone, Tee, Lieblingsgetränk, vertrauter Geschmack aus der Biografie
- **Zahnbürste** mit vertrauter Zahnpasta
- **Eiswürfel** (bei erlaubter Schluckfähigkeit)
- **Wichtig:** Aspirationsprophylaxe — nur bei sicherem Schluckakt

**Olfaktorische Stimulation:**
- **Vertraute Gerüche** aus der Biografie: Kaffee, Waschmittel, Parfum des Partners, Lavendel, Weihnachtsgewürze
- **Duftlampe** mit neutralen Düften (Zitrus, Vanille)
- **Keine ätherischen Öle** bei Atemwegserkrankungen, Neugeborenen, unklarer Anamnese

**Besonders wertvoll bei:** Demenz, Wachkoma, Palliativpflege. Oft erstaunliche Reaktionen: Lächeln, erste Wortäußerung, Entspannung. (Bienstein C./Fröhlich A., 1991; DNQP Beziehungsgestaltung Demenz, 2018)"

**B1 (640 Zeichen):**
"**Oraler** und **olfaktorischer** Sinn sind eng mit **Gefühlen und Erinnerungen** verbunden.

**Oral (Mund):**
- **Lippen befeuchten** (feuchter Lappen, Lippenpflege)
- **Geschmack** am Löffel: Zitrone, Tee, Lieblingsgetränk, vertrauter Geschmack
- **Zahnbürste** mit gewohnter Zahnpasta
- **Eiswürfel** (nur wenn sicher schlucken kann)
- **Wichtig:** Nicht bei Schluckstörung — Gefahr des Verschluckens

**Olfaktorisch (Nase):**
- **Vertraute Gerüche** aus dem Leben: Kaffee, Waschmittel, Parfum, Lavendel
- **Duftlampe** (Zitrus, Vanille — neutral)
- **Nicht** bei Atemwegserkrankung, Neugeborenen, unklarer Vorgeschichte

**Besonders gut bei:** Demenz, Wachkoma, Palliativpflege. Oft große Reaktionen: Lächeln, sogar erste Worte."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [olfaktorisch, oral, limbisches System, Biografiearbeit, Aspiration]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ätherische Öle sind immer harmlos und können bei jedem Patienten eingesetzt werden"</strong>"
- **Fachbegriff:** Harmlos-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — ätherische Öle sind **hochkonzentrierte Wirkstoffe**. Sie können Atemwegsreizungen, allergische Reaktionen und — bei Neugeborenen oder Asthmatikern — bedrohliche Bronchospasmen auslösen. **Immer** Anamnese und Arztabsprache. Bei Unsicherheit: neutrale Gerüche (Kaffee, Lavendelkissen). Merke: Ätherisches Öl ist nicht harmlos."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — ätherische Öle sind **stark** und können Probleme machen: Atemreizung, Allergie, bei Babys und Asthma sogar gefährlich. **Immer** Vorgeschichte prüfen und Arzt fragen. Bei Unsicherheit: neutrale Gerüche. Merke: Ätherisches Öl ist nicht harmlos."

**D2: "Orale Stimulation geht nur, wenn der Patient schlucken kann"**
- **Fachbegriff:** Schluck-Bedingung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — auch ohne Schluckfähigkeit ist **viel möglich**: Lippen befeuchten, geschmackvolle Tupfer (Zitronensaft) an die Lippen, Zahnbürste ohne Wasser, Geruchsreize vom Löffel aus kurzer Distanz. Nur **Flüssigkeit oder Eiswürfel in den Mund** setzen Schlucken voraus. Merke: Oral geht auch ohne Schlucken — nur nicht alles."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — viel geht auch **ohne Schlucken**: Lippen befeuchten, Geschmack an den Lippen, Zahnbürste ohne Wasser, Geruch vom Löffel. Nur **Eiswürfel oder Flüssigkeit in den Mund** braucht Schlucken. Merke: Oral geht meist auch ohne Schlucken."

**D3: "Der Pflegekraft ist es überlassen, welche Düfte sie verwendet"**
- **Fachbegriff:** Biografie-Blindheit
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — Gerüche sind **sehr individuell** und emotional besetzt. Was für die Pflegekraft angenehm ist, kann beim Patienten **schlechte Erinnerungen** wecken (z.B. Krankenhausgeruch, Parfum einer Person aus negativem Kontext). **Biografiearbeit**: Angehörige fragen, welche Gerüche positiv verbunden sind. Merke: Düfte individuell, Biografie fragen."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — Gerüche sind sehr **persönlich**. Was dir gefällt, kann beim Patienten **schlechte Gefühle** wecken. Deshalb: **Angehörige fragen**, welche Gerüche er mag. Das ist **Biografiearbeit**. Merke: Düfte sind individuell — immer Biografie fragen."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. **Orale Stimulation**: Lippen befeuchten, Geschmacksreize am Löffel/Tupfer, Zahnbürste — Aspirationsprophylaxe beachten. **Olfaktorische Stimulation**: biografisch vertraute Gerüche (Kaffee, Parfum, Lavendel), ätherische Öle nur nach Anamnese. Beide Sinne wirken stark aufs limbische System — Emotionen und Erinnerung."

**B1 (260 Zeichen):** "Genau. **Oral** = Mund: Lippen befeuchten, Geschmack am Löffel, Zahnbürste — nicht alles geht ohne Schlucken. **Olfaktorisch** = Nase: vertraute Gerüche aus dem Leben des Menschen. **Ätherische Öle** nur vorsichtig. Immer Angehörige nach Düften fragen (Biografie)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum sind orale und olfaktorische Stimulation besonders wertvoll bei Demenz und Wachkoma?"
- **Rückseite:** "Beide Sinne sind direkt mit dem limbischen System verbunden (Emotion, Erinnerung). Vertraute Gerüche und Geschmäcker wecken oft Reaktionen, auch wenn andere Wege nicht mehr erreichbar sind."
- **Kategorie:** fachbegriff

---

## Baustein 15: auditive-visuelle-taktile-stimulation

### Metadaten
- **bausteinId:** basale-stimulation-auditiv-visuell-taktil
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-15]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn du einen Menschen im Wachkoma über **Hören, Sehen und Tasten** erreichen willst — was würdest du ihm anbieten? Nenne je ein konkretes Beispiel aus seinem Leben."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "**Auditiv:** vertraute Stimmen (Tonbandaufnahme), Lieblingsmusik, keine Hintergrundgeräusche. **Visuell:** Fotos, bekannte Gesichter, ruhige Farben, klare Kontraste, Blickziele. **Taktil-haptisch:** vertrauten Gegenstand in die Hand (Stoff, Holz, Gebetskette). Alles biografisch orientiert."

**B1 (250 Zeichen):** "**Auditiv (Hören):** vertraute Stimme, Lieblingsmusik, keine Nebengeräusche. **Visuell (Sehen):** Fotos, Gesichter, klare Farben. **Taktil-haptisch (Tasten):** vertrauter Gegenstand in die Hand (weicher Stoff, Holz, Gebetskette). Immer **biografisch**."

- **Step-Typ:** matching (3 Sinnesbereiche → Angebote zuordnen)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"Die drei weiteren Sinnesbereiche — **auditiv, visuell, taktil-haptisch** — werden oft in Kombination eingesetzt, immer **biografisch orientiert**.

**Auditive Stimulation:**
- **Vertraute Stimmen** — Tonbandaufnahme von Angehörigen, eigene Geschichten
- **Lieblingsmusik** aus der Biografie (oft aus der Jugend)
- **Ruhige Umgebung** — Hintergrundradio, Fernseher, Pieptöne **reduzieren**
- **Ansprache**: langsam, ruhig, beim Namen nennen, nicht über den Kopf hinweg sprechen

**Visuelle Stimulation:**
- **Fotos** von Familie, Heimat, vertrauten Orten
- **Klare Kontraste**: weiße Tasse auf schwarzer Unterlage
- **Blickziele**: Mobile über dem Bett, Fenster, bewegliches Licht
- **Licht dosieren**: keine grelle Deckenbeleuchtung, warmes Licht

**Taktil-haptische Stimulation:**
- **Vertrauter Gegenstand** in die Hand: weicher Stoff, Fellstückchen, Holzkugel, Gebetskette, Kuscheltier
- **Greifen anbieten** — aktives Tasten statt nur passives Berühren
- **Verschiedene Materialien**: weich, hart, warm, kühl

**Prinzip:** Alle Angebote sind **biografisch** (was kannte der Mensch?) und **dosiert** (wenig, aber klar). (Fröhlich A., 1975; DNQP Beziehungsgestaltung Demenz, 2018)"

**B1 (630 Zeichen):**
"Drei weitere Sinne — **Hören, Sehen, Tasten** — werden oft zusammen angeboten. Immer **biografisch**: Was kannte der Mensch?

**Auditiv (Hören):**
- **Vertraute Stimme** (z.B. Tonbandaufnahme)
- **Lieblingsmusik** aus dem Leben
- **Ruhig:** kein Radio, kein Fernseher im Hintergrund
- **Ansprache:** langsam, ruhig, mit Namen

**Visuell (Sehen):**
- **Fotos** von Familie, vertraute Orte
- **Klare Farben:** weiße Tasse auf schwarzem Untergrund
- **Blickziel:** Mobile, Fenster
- **Licht:** kein grelles Deckenlicht

**Taktil-haptisch (Tasten):**
- **Vertrauter Gegenstand** in die Hand: weicher Stoff, Holz, Gebetskette
- **Greifen lassen**, nicht nur berühren
- **Verschiedene Materialien**: weich, hart, warm

**Wichtig:** Immer **biografisch** und **wenig, aber klar**."

- **Erklärungs-Step:** stepType `matrix` (3 Sinne × je 3 Angebote, biografisch)
- **Glossar-Begriffe:** [auditiv, taktil-haptisch, Biografiearbeit, Kontrast]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Radio oder Fernseher im Hintergrund sind eine gute auditive Stimulation"**
- **Fachbegriff:** Hintergrund-Beschallungs-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **ständige Hintergrund-Beschallung** (Radio, Fernseher) ist **Reizüberflutung**. Der Patient kann nicht zwischen wichtig und unwichtig trennen. Besser: **gezielt** Lieblingsmusik für 15-30 Minuten, dann **Ruhe**. Hörbarkeit braucht Stille als Kontrast. Merke: Dauerbeschallung ist das Gegenteil von Stimulation."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **Radio oder TV immer an** ist **zu viel**. Der Mensch kann nicht erkennen, was wichtig ist. Besser: **gezielt** Lieblingsmusik für 15-30 Minuten, dann **Ruhe**. Man braucht Stille, um etwas zu hören. Merke: Dauer-Beschallung ist keine Stimulation."

**D2: "Je mehr Fotos und Bilder im Zimmer hängen, desto besser die visuelle Stimulation"**
- **Fachbegriff:** Reiz-Überflutungs-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **viele Bilder gleichzeitig** überfordern. Besser: **wenige, dafür bedeutungsvolle** Fotos, die der Patient gut sehen kann. Regelmäßig wechseln (alle paar Tage), damit sie **Information** bleiben statt zur Tapete zu werden. Merke: Qualität vor Quantität. Wenige, klare Motive."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **viele Bilder** sind **zu viel**. Besser: **wenige, wichtige** Bilder, die der Mensch gut sehen kann. Alle paar Tage **wechseln** — so bleiben sie interessant. Merke: Wenig, aber klar. Nicht viel auf einmal."

**D3: "Taktile Stimulation ist dasselbe wie ein Handschmeichler in die Hand drücken"**
- **Fachbegriff:** Passiv-Aktiv-Verwechslung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **passives Berühren** ist nur die halbe Miete. Taktil-haptisch heißt **aktives Tasten**: Der Patient soll **greifen**, den Gegenstand drücken, in den Händen drehen. Auch mit Unterstützung — dein Finger schließt seine Hand um den Gegenstand. Merke: Taktil-haptisch = aktiv, nicht nur passiv drücken lassen."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **einfach einen Gegenstand hinlegen** ist **passiv**. Taktil-haptisch bedeutet **aktives Tasten**: Der Mensch soll **greifen** und fühlen — auch mit deiner Hilfe (deine Finger schließen seine um den Gegenstand). Merke: Aktiv, nicht nur passiv."

### Richtig-Feedback
**C1 (300 Zeichen):** "Genau. **Auditiv**: vertraute Stimme, Lieblingsmusik, **Ruhe als Kontrast**. **Visuell**: Fotos, klare Kontraste, Blickziele, kein grelles Licht. **Taktil-haptisch**: vertrauter Gegenstand zum **aktiven Greifen**, verschiedene Materialien. Prinzip für alle drei Bereiche: **biografisch** (was kannte er?) und **dosiert** (wenig, aber klar)."

**B1 (265 Zeichen):** "Genau. **Auditiv** = Hören: vertraute Stimme, Lieblingsmusik, keine Nebengeräusche. **Visuell** = Sehen: wenige wichtige Fotos, klare Farben. **Taktil-haptisch** = Tasten: Gegenstand in die Hand zum **aktiven Greifen**. Immer **biografisch** und **wenig, aber klar**."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist 'biografisch orientiert' ein Kernprinzip der Basalen Stimulation bei Sinnesangeboten?"
- **Rückseite:** "Weil Gerüche, Klänge, Bilder und Gegenstände aus der Biografie emotional besetzt sind und Erinnerungen wecken. Fremde Reize bleiben oft folgenlos oder lösen Unruhe aus. Angehörige befragen ist Teil der Pflegeanamnese."
- **Kategorie:** fachbegriff

---

## Baustein 16: anwendungsgebiete

### Metadaten
- **bausteinId:** basale-stimulation-anwendungsgebiete
- **bloomLevel:** 4
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-16]

### Stufe 1 — Denkfrage
- **Frage:** "Bei welchen Patientengruppen hast du schon Basale Stimulation erlebt oder gelesen — und warum gerade bei diesen? Was haben sie gemeinsam?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Basale Stimulation ist indiziert bei **stark eingeschränkter Wahrnehmung, Bewegung oder Kommunikation**: Wachkoma, schwere Demenz, schwere Behinderung, Palliativphase, Langzeit-Sedierte, Frühgeborene, Menschen nach schwerem Schlaganfall. Auch bei Unruhe."

**B1 (240 Zeichen):** "Basale Stimulation ist **wichtig** bei: Wachkoma, schwerer Demenz, schwerer Behinderung, Palliativ-Pflege, lang-sedierten Patienten, Frühgeborenen, nach schwerem Schlaganfall. Auch bei Unruhe oder Schmerzen. Gemeinsam: Wahrnehmung eingeschränkt."

- **Step-Typ:** categorize (Patientengruppen → geeignet/ungeeignet)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Basale Stimulation ist immer dann indiziert, wenn die **Wahrnehmung, Bewegung oder Kommunikation** stark eingeschränkt ist. Die klassischen Anwendungsgebiete:

**Intensiv- und Akutpflege:**
- **Wachkoma (apallisches Syndrom)** — klassische Indikation
- **Langzeit-Sedierte, Beatmete**
- **Schwerer Schlaganfall** mit Halbseitenlähmung
- **Schädel-Hirn-Trauma**

**Geriatrie und Langzeitpflege:**
- **Schwere Demenz** (mittel- bis schwergradig)
- **Apathie, Rückzug, 'Hospitalismus'**
- **Schwerst-Pflegebedürftige**

**Pädiatrie:**
- **Frühgeborene** (adaptiert — 'Känguru-Methode')
- **Kinder mit schweren Mehrfachbehinderungen**
- **Kinder im Wachkoma**

**Palliativpflege:**
- **Sterbende** in der letzten Phase
- **Schmerz-, Unruhe-Patienten**

**Was Basale Stimulation NICHT ist:**
- Kein Ersatz für medizinische Therapie
- Keine Garantie auf Reaktion — aber ethisch geboten, weil Wahrnehmung nicht sichtbar sein muss, um da zu sein. (Bienstein C./Fröhlich A., 1991; DNQP Beziehungsgestaltung Demenz, 2018)"

**B1 (640 Zeichen):**
"Basale Stimulation ist **wichtig**, wenn **Wahrnehmung, Bewegung oder Kommunikation** stark eingeschränkt sind. Typische Bereiche:

**Intensivstation und Akut-Pflege:**
- **Wachkoma** — die klassische Anwendung
- **Lang sedierte, beatmete Patienten**
- **Schwerer Schlaganfall**
- **Schädel-Hirn-Trauma**

**Alten- und Langzeitpflege:**
- **Schwere Demenz** (Stufe 2-3)
- **Apathie, Rückzug**
- **Schwerst-Pflegebedürftige**

**Kinder:**
- **Frühgeborene** ('Känguru-Methode')
- **Kinder mit schweren Behinderungen**
- **Kinder im Wachkoma**

**Palliativ-Pflege:**
- **Sterbende** in der letzten Phase
- **Unruhe und Schmerzen**

**Was Basale Stimulation NICHT ist:**
- **Kein Ersatz** für medizinische Therapie
- **Keine Garantie** auf Reaktion — aber ethisch wichtig"

- **Erklärungs-Step:** stepType `categorize` (Patientengruppen → Indikation/Grenzen)
- **Glossar-Begriffe:** [Apallisches Syndrom, Känguru-Methode, Hospitalismus, Palliativpflege]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Basale Stimulation wirkt nur bei Patienten, die bewusstseinsfähig sind"**
- **Fachbegriff:** Bewusstseins-Voraussetzung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **genau umgekehrt**. Die Stärke des Konzepts liegt bei Menschen mit **eingeschränktem oder abwesendem Bewusstsein**. Studien (Nydahl, 2018) zeigen: Patienten im Wachkoma reagieren auf basal stimulierende Angebote mit messbaren Veränderungen (Puls, Hautwiderstand, Atmung), auch wenn sie nicht wach wirken. Merke: Gerade **bei** Bewusstseinsstörung ist es indiziert."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **umgekehrt**. Gerade bei Menschen **ohne klares Bewusstsein** ist es wichtig. Studien zeigen: Menschen im Wachkoma reagieren — Puls, Atmung, Hautwiderstand verändern sich. Merke: Gerade bei Bewusstseinsstörung ist es richtig."

**D2: "Wenn der Patient nicht sichtbar reagiert, wirkt die Basale Stimulation nicht"**
- **Fachbegriff:** Reaktions-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **Reaktion ist nicht gleich Wirkung**. Viele Reaktionen sind **unterhalb der Sichtbarkeit**: minimale Muskelaktivität, Atemvertiefung, Pulsveränderung, Hautwiderstand. Auch ethisch: Auch wenn keine Reaktion messbar ist, bleibt der Mensch ein Mensch mit Recht auf Würde und Ansprache. Merke: Unsichtbar ≠ unwirksam."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **sichtbare Reaktion** ist nicht alles. Es gibt **innere Reaktionen**: Atmung wird tiefer, Puls ändert sich. Und auch ohne Reaktion ist der Mensch ein **Mensch** — er hat Recht auf Ansprache und Würde. Merke: Unsichtbar heißt nicht unwirksam."

**D3: "Basale Stimulation ist bei Frühgeborenen zu belastend"**
- **Fachbegriff:** Belastungs-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **genau das Gegenteil** ist belegt (Nydahl, 2018). Angepasste basal stimulierende Techniken wie die **'Känguru-Methode'** (Frühgeborenes auf nackter Brust des Elternteils) senken Stress, verbessern die Vitalparameter und fördern die Entwicklung. Wichtig: dosiert und individuell. Merke: Gerade Frühgeborene profitieren — auf ihre Art angepasst."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **umgekehrt**. Frühgeborene profitieren. Die **Känguru-Methode** (Baby auf nackter Haut der Eltern) macht sie **ruhiger**. Atmung und Herzfrequenz werden besser. Wichtig: wenig, aber richtig. Merke: Frühgeborene profitieren — auf ihre Art."

### Richtig-Feedback
**C1 (305 Zeichen):** "Genau. Basale Stimulation ist indiziert bei allen Zuständen mit **stark eingeschränkter Wahrnehmung, Bewegung oder Kommunikation**: Wachkoma, schwere Demenz, schwere Behinderung, Palliativphase, Langzeit-Sedierte, Frühgeborene, nach schwerem Schlaganfall. Kein Ersatz für medizinische Therapie — aber ein ethisch gebotener Bestandteil der Pflege bei diesen Gruppen."

**B1 (270 Zeichen):** "Genau. Die Basale Stimulation ist **wichtig** bei: Wachkoma, schwerer Demenz, schwerer Behinderung, Palliativ-Pflege, lang-sedierten Patienten, Frühgeborenen, nach schwerem Schlaganfall. Gemeinsam: Die **Wahrnehmung** ist stark eingeschränkt. Kein Ersatz für medizinische Therapie."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 5 klassische Anwendungsgebiete der Basalen Stimulation."
- **Rückseite:** "Wachkoma, schwere Demenz, Palliativpflege, Frühgeborene (Känguru-Methode), nach schwerem Schlaganfall/Schädel-Hirn-Trauma. Gemeinsam: stark eingeschränkte Wahrnehmung/Bewegung/Kommunikation."
- **Kategorie:** fakt

---

## Baustein 17: abgrenzung-sensorisch

### Metadaten
- **bausteinId:** basale-stimulation-abgrenzung-sensorisch
- **bloomLevel:** 5
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-17]

### Stufe 1 — Denkfrage
- **Frage:** "Warum heißt es **basale** Stimulation und nicht **sensorische** Stimulation? Welcher Unterschied steckt im Wort 'basal' — und warum war das Fröhlich so wichtig?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "'**Basal**' meint: **Grundlegend**, vor-sprachlich, vor-bewusst. Diese Wahrnehmungen entstehen schon **im Mutterleib** (somatisch, vestibulär, vibratorisch). 'Sensorisch' dagegen meint die **fünf Sinne** — später entwickelt. Basale Stimulation ist die tiefere Ebene."

**B1 (230 Zeichen):** "'**Basal**' bedeutet: **ganz grundlegend**. Die basalen Wahrnehmungen entstehen schon im **Bauch der Mutter** (somatisch, vestibulär, vibratorisch). 'Sensorisch' ist was anderes — die 5 Sinne. Basale Stimulation geht **tiefer**."

- **Step-Typ:** comparison (basal vs. sensorisch)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"Der Begriff **'basal'** stammt vom lateinischen *basis* — die Grundlage. Fröhlich wählte ihn bewusst, um den **Unterschied zur sensorischen Therapie** zu markieren:

**Basale Wahrnehmung (vor-sprachlich, vor-bewusst):**
- **Somatisch** — den eigenen Körper spüren (ab 8. Schwangerschaftswoche)
- **Vestibulär** — Bewegung, Lage (ab 10. SSW)
- **Vibratorisch** — Schwingungen (ab 25. SSW hörbar)

Diese drei Wahrnehmungsbereiche sind **schon im Mutterleib aktiv** und gehen bei schwerstkranken Menschen **zuletzt verloren** — auch bei Wachkoma oder schwerer Demenz.

**Sensorische Stimulation (sprachlich-bewusst):**
- Fünf Sinne: Sehen, Hören, Riechen, Schmecken, Tasten
- Spätere Entwicklung des Kindes
- Erfordert Verarbeitung und Interpretation

**Die Konsequenz:**
- Sensorisch-komplexe Reize (komplexe Bilder, Sprache) erreichen schwerstkranke Menschen oft nicht mehr
- **Basale Reize** (Berührung, Bewegung, Schwingung) erreichen sie fast immer

Darum ist 'basal' der richtige Begriff: Wir arbeiten auf der Ebene, die **zuerst entsteht und zuletzt verloren geht**. (Fröhlich A., 1975; Bienstein C./Fröhlich A., 1991)"

**B1 (660 Zeichen):**
"'**Basal**' kommt aus dem Lateinischen und heißt **Grundlage**. Fröhlich hat das Wort mit Absicht gewählt — um den Unterschied zur **sensorischen** Therapie zu zeigen.

**Basale Wahrnehmung (ganz grundlegend):**
- **Somatisch** — den eigenen Körper spüren (ab 8. Schwangerschaftswoche)
- **Vestibulär** — Bewegung, Lage (ab 10. Woche)
- **Vibratorisch** — Schwingungen (ab 25. Woche)

Diese drei Bereiche sind **schon im Bauch der Mutter** aktiv. Bei schwer kranken Menschen gehen sie als **letzte** verloren.

**Sensorische Stimulation:**
- Die **5 Sinne**: Sehen, Hören, Riechen, Schmecken, Tasten
- Entwickeln sich **später**
- Brauchen **Verarbeitung** und Verstehen

**Warum das wichtig ist:**
- Komplexe Reize (Sprache, Bilder) erreichen schwer kranke Menschen oft nicht
- **Basale Reize** (Berührung, Schwingung, Bewegung) erreichen sie fast immer

Deshalb ist **'basal'** der richtige Begriff."

- **Erklärungs-Step:** stepType `comparison` (basal vs. sensorisch, Tabelle)
- **Glossar-Begriffe:** [basal, sensorisch, Schwangerschaftswoche, pränatal]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Basal und sensorisch sind Synonyme — zwei Begriffe für dasselbe"**
- **Fachbegriff:** Synonym-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — die Begriffe bezeichnen **unterschiedliche Ebenen**. **Basal** = die vor-sprachlichen Wahrnehmungen, die schon im Mutterleib entstehen (somatisch, vestibulär, vibratorisch). **Sensorisch** = die fünf später entwickelten Sinne. Fröhlich hat den Unterschied **bewusst** gemacht. Merke: Basal ≠ sensorisch — verschiedene Entwicklungsstufen."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — **verschiedene Sachen**. **Basal** = ganz grundlegend, schon im Bauch aktiv. **Sensorisch** = die 5 Sinne, entwickeln sich später. Fröhlich hat den Unterschied **absichtlich** gemacht. Merke: Basal und sensorisch ist nicht dasselbe."

**D2: "Basale Stimulation fängt erst nach der Geburt an — im Mutterleib gibt es noch keine Wahrnehmung"**
- **Fachbegriff:** Pränatale-Leugnung
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — **pränatale Forschung** zeigt eindeutig: Das ungeborene Kind nimmt schon ab der **8. SSW** Körpergefühle wahr, ab **10. SSW** Bewegung, und hört ab der **25. SSW** über Knochenleitung die Stimme der Mutter. Genau darauf baut Fröhlich auf — diese Ebene ist die **ursprünglichste**. Merke: Wahrnehmung beginnt im Mutterleib, nicht erst bei der Geburt."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — das Baby spürt schon **im Bauch**: Körper (ab Woche 8), Bewegung (Woche 10), Stimme (Woche 25). Das ist belegt. Genau darauf baut Fröhlich auf. Merke: Wahrnehmung beginnt schon im Mutterleib."

**D3: "Bei schwerstkranken Menschen gehen alle Wahrnehmungen gleichzeitig verloren"**
- **Fachbegriff:** Simultan-Verlust-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — es gibt eine **Reihenfolge**: Sensorisch-komplexe Reize (Sprache, komplexe Bilder) gehen **zuerst** verloren. **Basale** Wahrnehmungen (Körpergefühl, Bewegung, Schwingung) bleiben am **längsten** erhalten. Das ist die Grundlage des Konzepts: Wir arbeiten auf der Ebene, die noch erreichbar ist. Merke: Komplex geht zuerst, basal zuletzt."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — es gibt eine **Reihenfolge**. **Komplexe** Reize (Sprache, Bilder) gehen **zuerst** verloren. **Basale** Reize (Körper spüren, Bewegung) bleiben am **längsten**. Deshalb arbeiten wir auf der basalen Ebene. Merke: Komplex zuerst, basal zuletzt."

### Richtig-Feedback
**C1 (305 Zeichen):** "Genau. **Basal** (= Grundlage) meint die vor-sprachlichen Wahrnehmungen: somatisch, vestibulär, vibratorisch — aktiv bereits im Mutterleib (ab 8./10./25. SSW). **Sensorisch** meint die fünf später entwickelten Sinne. Die basale Ebene geht bei schwerstkranken Menschen **zuletzt** verloren — deshalb ist sie die wirkungsvollste Ebene der Kontaktaufnahme."

**B1 (275 Zeichen):** "Genau. **Basal** = ganz grundlegend, schon im Bauch der Mutter aktiv (somatisch, vestibulär, vibratorisch). **Sensorisch** = die 5 Sinne, die sich später entwickeln. Bei schwer kranken Menschen geht **Komplexes** zuerst verloren, **Basales** bleibt am längsten. Deshalb wirkt dort basale Stimulation."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum heißt es 'basale' und nicht 'sensorische' Stimulation — welcher Unterschied steckt dahinter?"
- **Rückseite:** "'Basal' (= Grundlage) meint die vor-sprachlichen Wahrnehmungen, die schon im Mutterleib entstehen (somatisch, vestibulär, vibratorisch). Sie gehen bei schwerstkranken Menschen zuletzt verloren. 'Sensorisch' meint die 5 später entwickelten Sinne — komplexere Ebene."
- **Kategorie:** fachbegriff

---

## Zusammenfassung: Baustein-Übersicht

| Nr | bausteinId | Bloom | Wissensart | Zeit (Min) |
|----|-----------|-------|------------|------------|
| 1 | basale-stimulation-konzept-herkunft | 1 | fakt | 4 |
| 2 | basale-stimulation-drei-lebensthemen | 2 | konzept | 4 |
| 3 | basale-stimulation-zentrale-beduerfnisse | 3 | konzept | 5 |
| 4 | basale-stimulation-neun-wahrnehmungsbereiche | 2 | klassifikation | 5 |
| 5 | basale-stimulation-somatisch | 3 | maßnahme | 5 |
| 6 | basale-stimulation-vestibulaer | 3 | maßnahme | 4 |
| 7 | basale-stimulation-vibratorisch | 3 | maßnahme | 4 |
| 8 | basale-stimulation-gkw-beruhigend | 4 | maßnahme | 5 |
| 9 | basale-stimulation-gkw-belebend | 4 | maßnahme | 5 |
| 10 | basale-stimulation-gkw-neurophysiologisch | 4 | maßnahme | 5 |
| 11 | basale-stimulation-gkw-entwicklungsfoerdernd | 3 | maßnahme | 4 |
| 12 | basale-stimulation-initialberuehrung | 3 | maßnahme | 4 |
| 13 | basale-stimulation-ase | 4 | maßnahme | 5 |
| 14 | basale-stimulation-oral-olfaktorisch | 3 | maßnahme | 4 |
| 15 | basale-stimulation-auditiv-visuell-taktil | 3 | maßnahme | 5 |
| 16 | basale-stimulation-anwendungsgebiete | 4 | entscheidung | 5 |
| 17 | basale-stimulation-abgrenzung-sensorisch | 5 | konzept | 5 |

**Gesamt: 17 Bausteine, 78 Min Baustein-Zeit** (+ Zeit für Lern-Snacks/Situation-Integration → zielzeit 223 Min gesamt über Situationen verteilt)

**Bloom-Verteilung:** 1× B1, 2× B2, 8× B3, 5× B4, 1× B5 — aufsteigend über die Themen hinweg.






