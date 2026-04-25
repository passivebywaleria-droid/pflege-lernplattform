# Wissensbausteine: Gesundheitsmodelle und Präventionsebenen

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `gesundheitsmodelle` |
| ceId | `ce-04` |
| cluster | A (Grundlagen der Gesundheitsförderung) |
| wissensart | konzept |
| geschaetzteUE | 15 |
| zielzeitMin | 371 (15 UE × 45 × 0,55) |
| bausteineAnzahl | 12 |
| voraussetzungen | — (Einstiegsthema CE-04) |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 |

**Bloom-Verteilung:** Bloom 1-2: 25%, Bloom 3-4: 50%, Bloom 5-6: 25%

**Primärquellen:**
- Antonovsky A. (1987): Unraveling the Mystery of Health — Salutogenese
- WHO (1986): Ottawa-Charta zur Gesundheitsförderung
- WHO (1948): Definition Gesundheit (WHO-Verfassung)
- Präventionsgesetz (PrävG 2015)
- Infektionsschutzgesetz (IfSG)
- § 20 SGB V (Prävention)
- Gesetz zur Stärkung der Gesundheitsförderung (2015)

---

## Baustein 1: gesundheits-definition

### Metadaten
- **bausteinId:** gesundheitsmodelle-definition
- **bloomLevel:** 1
- **wissensart:** definition
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Was bedeutet für dich persönlich 'gesund sein'? Nenne 3 Aspekte."
- **Step-Typ:** freetext (aktivierend)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Die WHO definiert Gesundheit als **'Zustand vollständigen körperlichen, seelischen und sozialen Wohlbefindens und nicht nur das Freisein von Krankheit oder Gebrechen'** (WHO 1948). Wichtig: Gesundheit ist mehr als 'nicht krank'."

**B1 (215 Zeichen):** "Die WHO sagt 1948: Gesundheit ist **'vollständiges körperliches, seelisches und soziales Wohlbefinden — nicht nur das Fehlen von Krankheit'**. Gesundheit heißt also: Man fühlt sich gut im Körper, in der Seele und mit Menschen."

- **Step-Typ:** text (displayFormat: quote — WHO-Zitat)

### Stufe 3 — Erklärung

**C1 (650 Zeichen):**
"Die **WHO-Definition von 1948** ist die international gültige Grundlage: Gesundheit ist 'ein Zustand des vollständigen körperlichen, seelischen und sozialen Wohlbefindens und nicht nur das Freisein von Krankheit oder Gebrechen' (WHO-Verfassung). Drei Dimensionen:

1. **Körperlich** — funktionierende Organe, Beweglichkeit, kein Schmerz
2. **Seelisch/psychisch** — Wohlbefinden, emotionale Stabilität
3. **Sozial** — Beziehungen, Teilhabe, Anerkennung

**Kritik an der Definition:** 'Vollständiges Wohlbefinden' ist utopisch — kaum jemand erreicht diesen Zustand dauerhaft. Moderne Ansätze (Huber 2011) sehen Gesundheit als **'Fähigkeit zur Anpassung und Selbstbestimmung'** angesichts sozialer, körperlicher und emotionaler Herausforderungen. (WHO 1948, WHO-Verfassung)"

**B1 (545 Zeichen):**
"Die **WHO** (Weltgesundheitsorganisation) hat 1948 gesagt: Gesundheit ist 'vollständiges körperliches, seelisches und soziales Wohlbefinden — nicht nur das Fehlen von Krankheit'.

**Drei Bereiche der Gesundheit:**
1. **Körper** — die Organe funktionieren, man kann sich bewegen, hat keine Schmerzen
2. **Seele (Psyche)** — man fühlt sich innerlich gut
3. **Soziales** — man hat Beziehungen zu Menschen, gehört dazu

**Kritik:** 'Vollständiges Wohlbefinden' ist sehr hoch gegriffen. Fast niemand ist immer in allen drei Bereichen perfekt. Neue Denker (wie Huber 2011) sagen: Gesundheit ist die **Fähigkeit, sich an das Leben anzupassen** — auch wenn es schwer ist."

- **Erklärungs-Step:** stepType `reveal` (3 Dimensionen)
- **Glossar-Begriffe:** [WHO, Wohlbefinden, Salutogenese, bio-psycho-sozial]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Gesundheit bedeutet einfach: nicht krank sein"**
- **Fachbegriff:** Negativ-Definition
- **Feedback (C1, 275 Zeichen):** "Fast — aber die WHO sagt **ausdrücklich**: 'Gesundheit ist MEHR als das Fehlen von Krankheit.' Ein Mensch kann frei von Diagnosen sein und trotzdem einsam, ängstlich oder erschöpft — also nicht gesund im Sinne der WHO. Merke: Gesundheit = positiv definiert, nicht als Fehlen."
- **Feedback (B1, 235 Zeichen):** "Fast — die WHO sagt: Gesundheit ist **mehr** als 'nicht krank'. Jemand kann gesund sein im Körper, aber einsam oder traurig — dann ist er nicht gesund im WHO-Sinn. Merke: Gesundheit ist nicht nur 'keine Krankheit'. Es ist auch Wohlbefinden."

**D2: "Die WHO-Definition von 1948 ist überholt und wird heute nicht mehr verwendet"**
- **Fachbegriff:** Obsoleszenz-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die WHO-Definition von 1948 ist **bis heute die völkerrechtlich bindende Grundlage** und steht in der WHO-Verfassung. Sie wird vielfach kritisiert ('zu idealistisch'), aber nicht ersetzt. Erweiterungen wie Huber 2011 ergänzen sie, ersetzen sie nicht. Merke: Alt, aber gültig."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die WHO-Definition von 1948 gilt **bis heute**. Sie steht in der WHO-Verfassung. Viele sagen: Sie ist zu ideal. Aber ersetzt ist sie nicht. Neuere Ideen (Huber 2011) ergänzen sie. Merke: Alt, aber gilt immer noch."

**D3: "Gesundheit ist Privatsache — keine gesellschaftliche Aufgabe"</italic>"**
- **Fachbegriff:** Individualisierung
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — Gesundheit ist laut WHO und Ottawa-Charta **explizit auch gesellschaftlich**. Gesundheit entsteht durch das **soziale Wohlbefinden**, durch Lebensbedingungen, durch politische Rahmen. Deswegen hat jedes Industrieland ein Gesundheitssystem. Individuelles Verhalten plus gesellschaftliche Strukturen — beides zählt."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — Gesundheit geht alle an. Die WHO und die Ottawa-Charta sagen: Gesundheit hängt auch von den Lebensbedingungen ab. Arbeit, Wohnung, Politik. Deswegen gibt es in jedem Land ein Gesundheitssystem. Merke: Gesundheit ist nicht nur Privatsache."

### Richtig-Feedback
**C1 (255 Zeichen):** "Sehr gut. Die WHO-Definition (1948): Gesundheit ist vollständiges körperliches, seelisches und soziales Wohlbefinden — nicht nur das Fehlen von Krankheit. Drei Dimensionen: Körper, Seele, Soziales. Moderne Erweiterung: Gesundheit als Anpassungsfähigkeit (Huber 2011)."

**B1 (220 Zeichen):** "Sehr gut. Die WHO (1948): Gesundheit ist vollständiges körperliches, seelisches und soziales Wohlbefinden — nicht nur das Fehlen von Krankheit. Drei Bereiche: Körper, Seele, Soziales. Neuer Gedanke: Gesundheit = sich anpassen können."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie definiert die WHO Gesundheit? (1948)"
- **Rückseite:** "Zustand vollständigen körperlichen, seelischen und sozialen Wohlbefindens — nicht nur das Fehlen von Krankheit."
- **Kategorie:** fachbegriff

---

## Baustein 2: salutogenese-antonovsky

### Metadaten
- **bausteinId:** gesundheitsmodelle-salutogenese
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Zwei Menschen haben gleich viel Stress bei der Arbeit. Einer wird krank, der andere bleibt gesund. Was macht den Unterschied aus?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "**Aaron Antonovsky** (1923-1994) entwickelte die **Salutogenese** (Gesundheits-Entstehung). Kernfrage: Nicht 'Warum werden Menschen krank?', sondern **'Warum bleiben Menschen gesund?'**. Zentrales Konzept: **Kohärenzgefühl** (Sense of Coherence)."

**B1 (230 Zeichen):** "**Aaron Antonovsky** hat die **Salutogenese** entwickelt. Das Wort heißt: 'Wie entsteht Gesundheit?'. Er fragt nicht: 'Warum werden Menschen krank?' Sondern: **'Warum bleiben Menschen gesund?'** Das wichtigste Konzept: **Kohärenzgefühl**."

- **Step-Typ:** text (displayFormat: interview — mit Antonovsky)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Antonovsky (1987) stellte die Frage: **'Warum bleiben Menschen gesund?'** statt der üblichen: 'Warum werden sie krank?'. Seine Studie mit Holocaust-Überlebenden zeigte: Einige blieben trotz extremer Belastung psychisch und körperlich gesund. Er nannte das Modell **Salutogenese** (lat. 'salus' = Gesundheit, 'genesis' = Entstehung).

**Zentraler Begriff: Kohärenzgefühl (Sense of Coherence, SOC)** — drei Komponenten:

1. **Verstehbarkeit** (Comprehensibility): Ich verstehe, was in meinem Leben passiert. Die Welt ist strukturiert und vorhersehbar.

2. **Handhabbarkeit** (Manageability): Ich habe die Ressourcen (innere und äußere), mit den Anforderungen umzugehen.

3. **Bedeutsamkeit** (Meaningfulness): Mein Leben hat Sinn. Es lohnt sich, sich zu engagieren.

**Wichtig:** Nicht alle drei gleich stark — aber **alle drei** sind Schutzfaktoren.

**Gesundheits-Krankheits-Kontinuum:** Statt 'gesund/krank' als Binäres — Antonovsky sieht Gesundheit und Krankheit als **Pole eines Kontinuums**. Jeder Mensch befindet sich immer auf diesem Kontinuum. Salutogenese: In Richtung 'gesund' arbeiten. (Antonovsky 1987)"

**B1 (660 Zeichen):**
"Antonovsky (1987) hat eine neue Frage gestellt: **'Warum bleiben Menschen gesund?'** — statt 'Warum werden sie krank?'. Er hat Menschen untersucht, die den Holocaust überlebt haben. Einige blieben trotz allem gesund. Sein Modell heißt **Salutogenese** ('Wie entsteht Gesundheit?').

**Das wichtigste: Kohärenzgefühl (Sense of Coherence, SOC)** — mit 3 Teilen:

1. **Verstehbarkeit**: Ich verstehe, was in meinem Leben passiert. Die Welt ist nicht chaotisch.

2. **Handhabbarkeit**: Ich habe genug Kraft und Hilfe, um mit Problemen umzugehen.

3. **Bedeutsamkeit**: Mein Leben hat einen Sinn. Es lohnt sich, etwas zu tun.

**Wichtig:** Alle 3 Teile sind Schutzfaktoren. Auch wenn einer stark und einer schwach ist.

**Gesund-Krank-Linie:** Antonovsky sieht: Man ist nicht einfach 'gesund' oder 'krank'. Jeder steht irgendwo auf einer **Linie** dazwischen. Salutogenese heißt: **In Richtung Gesundheit arbeiten**."

- **Erklärungs-Step:** stepType `diagram` (Gesundheits-Krankheits-Kontinuum als Linie + SOC-Dreieck)
- **Glossar-Begriffe:** [Salutogenese, Pathogenese, Kohärenzgefühl, SOC, Ressourcen, Kontinuum]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Salutogenese ist das Gegenteil von Pathogenese — man muss sich für eine Sichtweise entscheiden"**
- **Fachbegriff:** Entweder-Oder-Fehler
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — beide Perspektiven **ergänzen sich**. Pathogenese fragt: 'Wie entstehen Krankheiten?' (wichtig für Diagnose und Behandlung). Salutogenese fragt: 'Wie bleibt man gesund?' (wichtig für Prävention). Eine moderne Medizin nutzt **beide Blickwinkel** — je nach Fragestellung. Merke: Ergänzung, nicht Gegensatz."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — die zwei Sichtweisen gehören zusammen. **Pathogenese** fragt: 'Wie entsteht Krankheit?' (für Diagnose und Behandlung wichtig). **Salutogenese** fragt: 'Wie bleibt man gesund?' (für Prävention wichtig). Moderne Medizin nutzt beide. Merke: Nicht entweder-oder."

**D2: "Das Kohärenzgefühl ist angeboren und kann nicht verändert werden"</italic>"**
- **Fachbegriff:** Genetik-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — das Kohärenzgefühl **entwickelt sich** durch Lebenserfahrungen, besonders im Kindes- und Jugendalter. Auch als Erwachsener ist es veränderbar — durch Erfahrungen, Therapie, soziale Beziehungen. Antonovsky sah es als relativ stabil ab ~30 Jahren, aber nicht als unveränderbar. Merke: Entwickelbar."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — das Kohärenzgefühl **entwickelt sich**. Es kommt durch Erfahrungen, vor allem in der Kindheit. Aber auch als Erwachsener kann es sich ändern — durch neue Erfahrungen, Beziehungen, Therapie. Es ist stabil, aber nicht fest. Merke: Kann sich ändern."

**D3: "Antonovskys Modell ist nur für die Psychologie relevant, nicht für die Pflege"**
- **Fachbegriff:** Disziplin-Silo
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — die Salutogenese ist **explizit in die moderne Pflege-Theorie eingegangen**. Ressourcenorientierte Pflege (WHO Ottawa-Charta), Empowerment-Konzepte, Rehabilitation — alle bauen auf Antonovsky auf. In der Pflege-Ausbildung (PflBG) ist Salutogenese Teil des Kompetenzbereichs V.1. Merke: Pflege-relevant."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — Salutogenese ist auch für die Pflege wichtig. **Ressourcen-orientierte Pflege** baut darauf auf: Was kann der Patient noch? Wo sind seine Stärken? Die Ottawa-Charta nutzt Antonovskys Ideen. Im Lehrplan (PflBG) ist das Thema Pflicht. Merke: Wichtig für die Pflege."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Antonovsky fragt: 'Warum bleiben Menschen gesund?' Sein Konzept: Salutogenese. Kernbegriff: **Kohärenzgefühl (SOC)** mit 3 Komponenten — Verstehbarkeit, Handhabbarkeit, Bedeutsamkeit. Dazu: Gesundheits-Krankheits-Kontinuum (keine Binarität). In der Pflege: Ressourcenorientierung."

**B1 (250 Zeichen):** "Sehr gut. Antonovsky fragt: 'Warum bleiben Menschen gesund?' Das Modell: Salutogenese. Wichtig: Das **Kohärenzgefühl** hat 3 Teile — Verstehbarkeit, Handhabbarkeit, Bedeutsamkeit. Dazu: Man ist nicht einfach gesund oder krank, sondern auf einer Linie dazwischen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was sind die 3 Komponenten des Kohärenzgefühls (SOC) nach Antonovsky?"
- **Rückseite:** "(1) Verstehbarkeit (die Welt ist nachvollziehbar), (2) Handhabbarkeit (ich habe Ressourcen), (3) Bedeutsamkeit (Leben hat Sinn)."
- **Kategorie:** fachbegriff

---

## Baustein 3: pathogenese-vs-salutogenese

### Metadaten
- **bausteinId:** gesundheitsmodelle-paradigmen
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn eine Pflegefachkraft zu einem Patienten kommt — worauf schaut sie eher: Auf Probleme und Krankheiten? Oder auf Stärken und Ressourcen? Was denkst du, was besser wäre?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "**Pathogenese** (Krankheits-Entstehung) fragt: 'Welche Risikofaktoren machen krank?' — Fokus auf Defizite. **Salutogenese** fragt: 'Welche Schutzfaktoren halten gesund?' — Fokus auf Ressourcen. Moderne Pflege nutzt **beide** als komplementäre Perspektiven."

**B1 (225 Zeichen):** "**Pathogenese** heißt: Wie entsteht Krankheit? Sie schaut auf Risiken. **Salutogenese** heißt: Wie bleibt man gesund? Sie schaut auf Stärken und Ressourcen. Gute Pflege nutzt **beide** Sichtweisen — nicht nur eine."

- **Step-Typ:** comparison (Tabelle: Pathogenese vs. Salutogenese)

### Stufe 3 — Erklärung

**C1 (710 Zeichen):**
"Die zwei Perspektiven im direkten Vergleich:

**Pathogenese (klassisch)**:
- **Kernfrage**: Warum werden Menschen krank?
- **Fokus**: Risikofaktoren, Erreger, Defizite
- **Ziel**: Krankheiten erkennen und behandeln
- **Metapher**: Reparaturwerkstatt
- **Stichwort**: Ist die Leber kaputt?
- **Ursprung**: Naturwissenschaftliche Medizin (17.-19. Jh.)

**Salutogenese (Antonovsky)**:
- **Kernfrage**: Warum bleiben Menschen gesund?
- **Fokus**: Schutzfaktoren, Ressourcen, Potenziale
- **Ziel**: Gesundheit fördern, Widerstandskraft stärken
- **Metapher**: Gärtner (was braucht die Pflanze?)
- **Stichwort**: Was macht mich stark?
- **Ursprung**: Sozialmedizinische Forschung (20. Jh.)

**In der Pflege-Realität:** Moderne Pflege fragt **beides**:
- 'Welche Diagnosen hat der Patient?' (Pathogenese)
- 'Welche Ressourcen kann er noch nutzen?' (Salutogenese)

**Konkret im Pflegeprozess:** Ein Schlaganfall-Patient hat eine Halbseitenlähmung (Pathogenese: Defizit). Gleichzeitig kann er mit der gesunden Seite aktiv sein, hat eine unterstützende Familie und einen starken Lebenswillen (Salutogenese: Ressourcen). Pflege arbeitet mit **beidem**."

**B1 (570 Zeichen):**
"**Pathogenese** und **Salutogenese** — zwei Sichtweisen:

| | Pathogenese | Salutogenese |
|--|-------------|--------------|
| **Frage** | Warum wird man krank? | Warum bleibt man gesund? |
| **Fokus** | Krankheit, Risiken | Gesundheit, Stärken |
| **Ziel** | Krankheit behandeln | Gesundheit fördern |
| **Bild** | Reparatur-Werkstatt | Gärtner |

**In der Pflege fragen wir beides:**
- 'Welche Krankheiten hat der Patient?' (Pathogenese)
- 'Was kann er noch? Was sind seine Stärken?' (Salutogenese)

**Beispiel:** Ein Patient mit Schlaganfall hat eine halbseitige Lähmung (das ist ein Defizit — Pathogenese). Aber: Er hat eine gesunde Seite, eine unterstützende Familie und will leben (das sind Ressourcen — Salutogenese). Gute Pflege arbeitet mit **beidem**."

- **Erklärungs-Step:** stepType `comparison` (Zweispaltig)
- **Glossar-Begriffe:** [Pathogenese, Risikofaktor, Schutzfaktor, Ressource, Resilienz]

### Misconceptions → Distraktoren

**D1: "Salutogenese ist die 'richtige' moderne Sicht — Pathogenese ist überholt"**
- **Fachbegriff:** Paradigmen-Absolutismus
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — beide Perspektiven sind **notwendig**. Ohne Pathogenese könnten wir keine Infektionen diagnostizieren, keine Tumore behandeln. Salutogenese ergänzt: Ohne sie übersehen wir Ressourcen. Moderne Medizin nutzt beide je nach Kontext. Merke: Pathogenese nicht überholt, sondern ergänzt."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — beide sind wichtig. **Pathogenese** hilft uns, Krankheiten zu erkennen und zu behandeln. **Salutogenese** hilft uns, Stärken zu sehen. Moderne Medizin braucht beides. Merke: Pathogenese ist nicht alt — sie ist weiter wichtig."

**D2: "Wenn ein Patient krank ist, hilft Salutogenese nicht mehr"**
- **Fachbegriff:** Krankheits-Exklusion
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **besonders bei Krankheit** ist Salutogenese wichtig. Chronische Erkrankungen verlangen Ressourcen-Orientierung: Was kann der Patient trotz Krankheit noch? Rehabilitation, Lebensqualität, Bewältigungsstrategien — all das folgt dem salutogenetischen Ansatz. Merke: Auch Kranke haben Ressourcen."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — gerade bei Krankheit ist Salutogenese wichtig. Bei chronischen Krankheiten fragen wir: Was kann der Patient noch? Was sind seine Stärken? Die **Reha** baut darauf auf. Auch die Lebensqualität wird so gefördert. Merke: Auch Kranke haben Stärken."

**D3: "Die Pathogenese fragt nach körperlichen Ursachen, die Salutogenese nach psychischen"**
- **Fachbegriff:** Körper-Psyche-Fehlzuordnung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — beide Modelle umfassen **Körper UND Psyche UND Soziales**. Die Unterscheidung ist der **Blickwinkel**: Defizit oder Ressource. Antonovskys Kohärenzgefühl ist psychosozial; Pathogenese untersucht auch psychische Störungen. Merke: Nicht Körper vs. Psyche, sondern Defizit vs. Ressource."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — beide schauen auf Körper UND Psyche UND Soziales. Der Unterschied ist die **Frage**: Fragen wir nach Problemen (Pathogenese) oder nach Stärken (Salutogenese)? Nicht: Körper oder Psyche. Merke: Es geht um die Sichtweise, nicht das Thema."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Pathogenese fragt: 'Warum wird man krank?' (Fokus auf Risikofaktoren, Defizite). Salutogenese fragt: 'Warum bleibt man gesund?' (Fokus auf Schutzfaktoren, Ressourcen). Beide sind **komplementäre Perspektiven** — moderne Pflege nutzt beide je nach Fragestellung und Patient."

**B1 (250 Zeichen):** "Sehr gut. Pathogenese fragt: 'Warum wird man krank?' (schaut auf Risiken). Salutogenese fragt: 'Warum bleibt man gesund?' (schaut auf Stärken). Moderne Pflege nutzt **beide**. Beim Patienten fragen wir: Was hat er? UND: Was kann er noch?"

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen Pathogenese und Salutogenese?"
- **Rückseite:** "Pathogenese: Warum werden Menschen krank? (Fokus: Risiken). Salutogenese: Warum bleiben Menschen gesund? (Fokus: Ressourcen). Beide ergänzen sich."
- **Kategorie:** fachbegriff

---

## Baustein 4: ottawa-charta-5-handlungsfelder

### Metadaten
- **bausteinId:** gesundheitsmodelle-ottawa-charta
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn die Politik die Gesundheit aller Menschen fördern will — welche Bereiche muss sie angehen? Sammle 5 Ideen."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Die **Ottawa-Charta** (WHO 1986) definiert 5 Handlungsfelder der Gesundheitsförderung: (1) Gesundheitsförderliche Gesamtpolitik, (2) Gesundheitsförderliche Lebenswelten, (3) Gemeinschaftsaktionen, (4) Persönliche Kompetenzen, (5) Neuorientierung Gesundheitsdienste."

**B1 (225 Zeichen):** "Die **Ottawa-Charta** von 1986 (WHO) hat **5 Handlungsfelder**: (1) Gesundheitsfreundliche Politik, (2) Gesunde Lebenswelten, (3) Gemeinschaftsaktionen, (4) Persönliche Kompetenzen, (5) Gesundheitsdienste neu ausrichten."

- **Step-Typ:** text (displayFormat: checklist — 5 Handlungsfelder)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Die **Ottawa-Charta** wurde 1986 bei der **1. Internationalen Konferenz zur Gesundheitsförderung** in Ottawa (Kanada) verabschiedet — ein Meilenstein der Gesundheits-Politik. Definition Gesundheitsförderung: 'Prozess, allen Menschen ein höheres Maß an Selbstbestimmung über ihre Gesundheit zu ermöglichen.'

**5 Handlungsfelder:**

**1. Gesundheitsförderliche Gesamtpolitik** — Gesundheit in alle Politikbereiche (Verkehr, Bildung, Umwelt, Arbeit). 'Health in all policies.'

**2. Gesundheitsförderliche Lebenswelten schaffen** — Settings, in denen Menschen leben, arbeiten, lernen, gesund gestalten. Beispiel: Gesunde Schule, gesunder Betrieb.

**3. Gesundheitsbezogene Gemeinschaftsaktionen unterstützen** — Bürger-Initiativen, Selbsthilfegruppen, Nachbarschaftsnetzwerke stärken.

**4. Persönliche Kompetenzen entwickeln** — Gesundheitskompetenz, Lebenskompetenz (Life Skills), Selbstwirksamkeit.

**5. Gesundheitsdienste neu orientieren** — Medizin-Fokus weg von Krankheit hin zur Gesundheitsförderung; interprofessionelle Zusammenarbeit.

**3 Strategien:** (1) **Anwaltschaft** für Gesundheit, (2) **Befähigung** (Empowerment), (3) **Vermitteln** zwischen Interessen.

Heute gültig in der Agenda 2030 der WHO. (WHO 1986 — Ottawa Charter for Health Promotion)"

**B1 (665 Zeichen):**
"Die **Ottawa-Charta** wurde 1986 bei einer großen WHO-Konferenz in Ottawa (Kanada) beschlossen. Sie sagt: **Gesundheitsförderung** bedeutet, dass Menschen mehr Kontrolle über ihre Gesundheit bekommen.

**5 Handlungsfelder:**

**1. Gesundheit in die Politik** — Gesundheit ist ein Thema für alle Bereiche: Verkehr, Bildung, Umwelt, Arbeit. (Motto: Gesundheit in allen Politikfeldern)

**2. Gesunde Lebenswelten schaffen** — Orte, wo Menschen leben, arbeiten, lernen, sollen gesund sein. Beispiel: Gesunde Schule, gesunder Betrieb.

**3. Gemeinschaftsaktionen fördern** — Bürger-Initiativen, Selbsthilfegruppen, Nachbarschaft stärken.

**4. Persönliche Kompetenzen fördern** — Menschen sollen lernen, ihre Gesundheit selbst zu gestalten (Gesundheitskompetenz, Lebens-Skills).

**5. Gesundheitsdienste neu ausrichten** — Die Medizin soll nicht nur Krankheiten behandeln, sondern Gesundheit fördern. Pflegekräfte, Ärzte, Therapeuten arbeiten zusammen.

**3 Strategien**: (1) **Anwalt sein** für Gesundheit, (2) **Menschen befähigen** (Empowerment), (3) **Zwischen Interessen vermitteln**."

- **Erklärungs-Step:** stepType `reveal` (5 Handlungsfelder einzeln)
- **Glossar-Begriffe:** [Ottawa-Charta, Gesundheitsförderung, Empowerment, Setting, Health in all policies]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Gesundheitsförderung ist Aufgabe der Ärzte und Krankenhäuser"**
- **Fachbegriff:** Medizinisierung
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — die Ottawa-Charta sagt **ausdrücklich**: Gesundheitsförderung ist Aufgabe **aller Politikbereiche** (Verkehr, Bildung, Umwelt, Arbeit, Stadtplanung). Medizin und Pflege sind **ein** Teil, nicht der einzige. Beispiel: Ein Radweg fördert Gesundheit — das ist Verkehrspolitik, nicht Medizin."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — Gesundheit geht alle an. Die Ottawa-Charta sagt: Politik, Schule, Betrieb, Stadt — alle sind verantwortlich. Medizin ist nur **ein** Teil. Ein Beispiel: Ein Radweg ist Verkehrspolitik, aber er fördert Gesundheit. Merke: Gesundheit ist Querschnittsthema."

**D2: "Die Ottawa-Charta ist nur eine Empfehlung ohne Bedeutung"**
- **Fachbegriff:** Bedeutungs-Unterschätzung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die Ottawa-Charta ist der **Gründungstext der modernen Gesundheitsförderung**. Sie wirkt bis heute: Das deutsche **Präventionsgesetz (PrävG 2015)** baut darauf auf, **Schulentwicklung**, **betriebliche Gesundheit**, die **WHO Agenda 2030** — alles nutzt das Charta-Vokabular. Merke: Grundlage-Text."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — die Ottawa-Charta ist sehr wichtig. Sie ist die **Grundlage** für moderne Gesundheitsförderung. Das deutsche **Präventionsgesetz** (2015) baut darauf auf. Auch Schulprogramme und Betriebs-Programme nutzen sie. Merke: Sehr wichtiger Text."

**D3: "'Empowerment' in der Ottawa-Charta meint: Menschen zu etwas drängen"**
- **Fachbegriff:** Empowerment-Missverständnis
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — **Empowerment** bedeutet **'Befähigen'** oder 'stark machen' — genau das **Gegenteil** von drängen. Menschen werden informiert, unterstützt, ihre Selbstbestimmung gestärkt — damit sie **selbst** entscheiden können. Drängen wäre Paternalismus. Merke: Empowerment = Macht geben, nicht Macht ausüben."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **Empowerment** bedeutet: Menschen **stark machen**. Nicht: zu etwas zwingen! Menschen bekommen Information und Unterstützung. Dann entscheiden sie **selbst**. Drängen wäre falsch (das nennt man Paternalismus). Merke: Empowerment = Menschen stark machen."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Ottawa-Charta (WHO 1986) — 5 Handlungsfelder: (1) Gesundheitspolitik querschnittlich, (2) Gesunde Lebenswelten, (3) Gemeinschaftsaktionen, (4) Persönliche Kompetenzen, (5) Neuorientierung Gesundheitsdienste. 3 Strategien: Anwaltschaft, Empowerment, Vermitteln. Bis heute gültig."

**B1 (255 Zeichen):** "Sehr gut. Die Ottawa-Charta (WHO 1986) hat 5 Handlungsfelder: (1) Gesundheit in die Politik, (2) Gesunde Lebenswelten, (3) Gemeinschaftsaktionen, (4) Persönliche Kompetenzen, (5) Gesundheitsdienste neu ausrichten. 3 Strategien: Anwalt, Befähigen, Vermitteln."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie viele Handlungsfelder hat die Ottawa-Charta und wie lauten sie?"
- **Rückseite:** "5: (1) Gesundheitsförderliche Gesamtpolitik, (2) Lebenswelten, (3) Gemeinschaftsaktionen, (4) Persönliche Kompetenzen, (5) Neuorientierung Gesundheitsdienste. (WHO 1986)"
- **Kategorie:** fakt

---

## Baustein 5: 3-praeventionsebenen

### Metadaten
- **bausteinId:** gesundheitsmodelle-praeventionsebenen
- **bloomLevel:** 4
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Impfung, ein Mammografie-Screening, und die Rehabilitation nach einem Schlaganfall — das sind alles Präventionsmaßnahmen. Aber sind sie gleich?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "**Primärprävention** = vor Erkrankung (Impfung, Lebensstil). **Sekundärprävention** = Früherkennung (Screening vor Symptomen). **Tertiärprävention** = Folgeschäden verhindern (Reha, Prophylaxen in der Pflege z.B. Dekubitusprophylaxe)."

**B1 (215 Zeichen):** "Es gibt **3 Stufen der Prävention**: (1) **Primär**: vor der Krankheit (Impfung). (2) **Sekundär**: früh erkennen (Screening, bevor Symptome kommen). (3) **Tertiär**: Folgeschäden verhindern (Reha, Prophylaxen)."

- **Step-Typ:** comparison (Tabelle 3 Ebenen)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"**Prävention** unterscheidet sich je nach **Zeitpunkt der Intervention**:

**1. Primärprävention** — VOR Auftreten der Erkrankung:
- **Ziel**: Erkrankung verhindern
- **Zielgruppe**: gesunde Menschen
- **Beispiele**: Impfungen, Ernährung, Bewegung, Rauch-Prävention, Sonnenschutz
- **Pflege-Bezug**: Gesundheitsberatung, Impfberatung, Ernährungsbildung

**2. Sekundärprävention** — FRÜHERKENNUNG (bevor Symptome auftreten):
- **Ziel**: Krankheit früh erkennen, um besser behandeln zu können
- **Zielgruppe**: Risikogruppen oder symptomfreie Menschen
- **Beispiele**: Mammografie-Screening, Koloskopie, Blutdruck-Messen, HIV-Test
- **Pflege-Bezug**: Screenings durchführen, Patienten aufklären, Befunde einschätzen

**3. Tertiärprävention** — nach Erkrankung, Folgeschäden verhindern:
- **Ziel**: Rückfall, Komplikation, Behinderung verhindern
- **Zielgruppe**: Erkrankte, Genesende, chronisch Kranke
- **Beispiele**: Rehabilitation nach Schlaganfall, Dekubitus-/Sturz-/Thromboseprophylaxe, Diabetes-Schulung
- **Pflege-Bezug**: **Große Rolle!** Alle Prophylaxen in der Pflege sind tertiäre Prävention.

**Quartäre Prävention** (modern, nicht immer gezählt): Vermeidung unnötiger medizinischer Maßnahmen (Übertherapie, Übermedikation). (Leavell & Clark 1965, erweitert)"

**B1 (670 Zeichen):**
"Prävention gibt es auf **3 Stufen** — je nachdem, **wann** man etwas tut:

**1. Primärprävention** — **VOR** der Krankheit:
- **Ziel**: Krankheit nicht entstehen lassen
- **Wer?** Gesunde Menschen
- **Beispiele**: Impfungen, gutes Essen, Bewegung, nicht rauchen, Sonnencreme
- **Pflege**: Gesundheits-Beratung, Ernährungstipps

**2. Sekundärprävention** — Krankheit **früh erkennen** (vor Symptomen):
- **Ziel**: Krankheit finden, bevor sie Symptome macht
- **Wer?** Risikogruppen oder noch gesunde Menschen
- **Beispiele**: Mammografie, Darmspiegelung, Blutdruck messen, HIV-Test
- **Pflege**: Vorsorge machen, Patienten aufklären

**3. Tertiärprävention** — nach der Krankheit, damit keine Folgeschäden kommen:
- **Ziel**: Keine Komplikationen, keine Behinderung, kein Rückfall
- **Wer?** Kranke Menschen
- **Beispiele**: **Reha nach Schlaganfall**, **Dekubitus-, Sturz-, Thromboseprophylaxe**, Diabetes-Schulung
- **Pflege**: **Große Rolle!** Alle Prophylaxen sind tertiäre Prävention.

**Quartäre Prävention** (neuer Begriff): Keine unnötigen Behandlungen — nicht übertherapieren."

- **Erklärungs-Step:** stepType `categorize` (Maßnahmen → 3 Ebenen)
- **Glossar-Begriffe:** [Primärprävention, Sekundärprävention, Tertiärprävention, Screening, Prophylaxe, Quartäre Prävention]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Alle Prophylaxen in der Pflege sind Primärprävention"**
- **Fachbegriff:** Prophylaxe-Zuordnungsfehler
- **Feedback (C1, 340 Zeichen):** "Nicht ganz — die **Pflege-Prophylaxen** (Dekubitus, Sturz, Thrombose, Pneumonie) sind **Tertiärprävention**. Sie verhindern **Folgeschäden einer bestehenden Erkrankung oder Situation** (Immobilität nach OP, Bettlägerigkeit bei Schlaganfall). Primärprävention wäre: Gesundheitsberatung bei Gesunden. Merke: Prophylaxe-Pflege = tertiär."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — die **Prophylaxen in der Pflege** (Dekubitus, Sturz, Thrombose) sind **Tertiärprävention**. Sie verhindern Folgeschäden. Der Patient ist schon krank oder in einer schwierigen Situation. Primär wäre: Beratung bei Gesunden. Merke: Pflege-Prophylaxe = tertiär."

**D2: "Sekundärprävention bedeutet: Prävention bei chronisch Kranken"**
- **Fachbegriff:** Sekundär-Tertiär-Verwechslung
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — **Sekundärprävention** ist **Früherkennung bei (noch) symptomfreien Menschen** (z.B. Mammografie-Screening vor Symptomen). **Tertiärprävention** ist die Prävention bei bereits Erkrankten (Reha, Prophylaxen). Merke: Sekundär = früh erkennen, Tertiär = Folgen verhindern."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — **Sekundärprävention** heißt: Krankheit **früh finden**, bevor der Patient Symptome hat (zum Beispiel Mammografie). **Tertiärprävention** ist bei schon Kranken (Reha, Prophylaxen). Merke: Sekundär = früh finden. Tertiär = Folgeschäden verhindern."

**D3: "Eine Impfung kann nur Primärprävention sein"**
- **Fachbegriff:** Impf-Einzelzuordnung
- **Feedback (C1, 315 Zeichen):** "Fast — meistens Primärprävention (bei Gesunden, vor Erkrankung). **Aber**: Impfung kann auch **Tertiärprävention** sein (z.B. Pneumokokken-Impfung bei chronisch Herzkranken — verhindert Komplikationen). Der **Kontext** entscheidet die Einordnung, nicht die Maßnahme selbst. Merke: Immer den Zeitpunkt und die Person anschauen."
- **Feedback (B1, 270 Zeichen):** "Fast — meistens ist Impfung Primärprävention (bei Gesunden). **Aber**: Bei einem schon kranken Menschen (zum Beispiel Herzkrank) kann eine Impfung auch Tertiärprävention sein — sie verhindert Komplikationen. Merke: Der Zeitpunkt entscheidet, nicht die Maßnahme."

### Richtig-Feedback
**C1 (305 Zeichen):** "Sehr gut. 3 Präventionsebenen: **Primär** (vor Erkrankung, bei Gesunden: Impfung, Lebensstil). **Sekundär** (Früherkennung vor Symptomen: Mammografie, Screening). **Tertiär** (nach Erkrankung, Folgeschäden verhindern: Reha, Pflege-Prophylaxen). Pflege wirkt auf allen 3 Ebenen — besonders tertiär."

**B1 (260 Zeichen):** "Sehr gut. 3 Stufen: **Primär** (vor Krankheit, bei Gesunden — Impfung, Ernährung). **Sekundär** (früh erkennen — Mammografie, Screening). **Tertiär** (nach Krankheit, Folgeschäden verhindern — Reha, alle Pflege-Prophylaxen). Pflege ist auf allen 3 Ebenen aktiv."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welcher Präventionsebene gehört die Dekubitusprophylaxe an?"
- **Rückseite:** "Tertiärprävention — sie verhindert Folgeschäden (Dekubitus) bei einer bestehenden Situation (Immobilität)."
- **Kategorie:** fachbegriff

---

## Baustein 6: gesundheitsfoerderung-vs-praevention

### Metadaten
- **bausteinId:** gesundheitsmodelle-gf-vs-praevention
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Gesundheitsförderung und Prävention — sind das zwei Wörter für dasselbe oder zwei verschiedene Konzepte?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "**Prävention** = Krankheit vermeiden (pathogenetisch — Risikofaktoren bekämpfen). **Gesundheitsförderung** = Gesundheit stärken (salutogenetisch — Ressourcen stärken). Beide sind **komplementär**, nicht austauschbar. (Ottawa-Charta)"

**B1 (230 Zeichen):** "**Prävention** = Krankheit vermeiden (Blickwinkel: Risiken weg). **Gesundheitsförderung** = Gesundheit stärken (Blickwinkel: Stärken ausbauen). Beide gehören zusammen, sind aber **nicht das Gleiche**."

- **Step-Typ:** comparison (Tabelle)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Viele verwechseln die Begriffe — der Unterschied ist aber wichtig:

**Prävention**:
- **Ansatz**: pathogenetisch (Krankheiten vermeiden)
- **Fokus**: Risikofaktoren bekämpfen
- **Beispiel**: 'Rauchen Sie nicht — sonst bekommen Sie Lungenkrebs'
- **Methode**: Oft defizit-orientiert ('stopp das Schlechte')

**Gesundheitsförderung**:
- **Ansatz**: salutogenetisch (Gesundheit stärken)
- **Fokus**: Schutzfaktoren und Ressourcen stärken
- **Beispiel**: 'Bewegung macht Spaß und stärkt dein Herz'
- **Methode**: Ressourcen-orientiert ('fördere das Gute')

**In der Praxis:** Kein Entweder-Oder. Ein Kursprogramm kann **beides** sein: 'Rückenschule' ist Prävention (Rückenschmerz verhindern) UND Gesundheitsförderung (Körper stärken).

**Rechtliche Unterscheidung in Deutschland (§ 20 SGB V, PrävG 2015)**:
- **Prävention**: Bekämpfung von Risikofaktoren, Versicherungs-Leistung
- **Gesundheitsförderung**: Lebenswelten, Empowerment, Setting-Ansatz

**Wichtig für die Pflege:** Beides fließt in die tägliche Arbeit ein. Beim dekubitusgefährdeten Patienten: Prävention (Druck vermeiden) PLUS Gesundheitsförderung (Eigenbewegung fördern, Ressourcen stärken)."

**B1 (610 Zeichen):**
"Viele Menschen verwechseln **Prävention** und **Gesundheitsförderung**. Aber sie sind nicht dasselbe:

**Prävention**:
- Denkweise: Krankheit vermeiden
- Fokus: Risiken wegnehmen
- Beispiel: 'Rauche nicht — sonst bekommst du Krebs'
- Methode: Probleme bekämpfen

**Gesundheitsförderung**:
- Denkweise: Gesundheit stärken
- Fokus: Stärken und Ressourcen ausbauen
- Beispiel: 'Bewegung macht Spaß und macht dein Herz stark'
- Methode: Gutes fördern

**In der Praxis:** Oft gehört beides zusammen. Ein Rücken-Kurs ist Prävention (Rückenschmerz vermeiden) UND Gesundheitsförderung (Körper stärken).

**In Deutschland gesetzlich (§ 20 SGB V, Präventionsgesetz 2015):**
- **Prävention**: Risiken bekämpfen, Krankenkasse zahlt
- **Gesundheitsförderung**: Lebenswelten, Stärken, Einbezug aller

**Pflege**: Beim dekubitusgefährdeten Patienten machen wir beides: Prävention (Druck weg) PLUS Gesundheitsförderung (Bewegung fördern, Stärken nutzen)."

- **Erklärungs-Step:** stepType `comparison` (Zweispaltig)
- **Glossar-Begriffe:** [Gesundheitsförderung, Prävention, Ressourcen, Empowerment, Setting]

### Misconceptions → Distraktoren

**D1: "Prävention und Gesundheitsförderung sind einfach zwei Wörter für dasselbe"**
- **Fachbegriff:** Synonymie-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — die Begriffe haben **unterschiedliche Wurzeln**. Prävention ist **pathogenetisch** (Krankheit vermeiden), Gesundheitsförderung ist **salutogenetisch** (Gesundheit stärken). Auch rechtlich getrennt in § 20 SGB V. In der Praxis ergänzen sie sich. Merke: Unterschied in Denkweise und Methode."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — die Wörter klingen ähnlich, meinen aber verschiedene Dinge. **Prävention** = Krankheit vermeiden (auf Risiken schauen). **Gesundheitsförderung** = Gesundheit stärken (auf Stärken schauen). Auch im Gesetz sind sie getrennt. Merke: Beide wichtig, aber verschieden."

**D2: "Gesundheitsförderung ist nur 'sanftere' Prävention"</italic>"**
- **Fachbegriff:** Graduierungs-Fehler
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — es ist **kein Intensitäts-Unterschied**, sondern ein **Perspektiv-Unterschied**. Gesundheitsförderung kann sehr intensiv sein (z.B. umfassende Betriebs-Konzepte). Prävention kann sanft sein (z.B. eine Broschüre). Der Unterschied: Defizit-Blick vs. Ressourcen-Blick. Merke: Richtung, nicht Stärke."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — es geht nicht um **mehr oder weniger**, sondern um die **Richtung**. Gesundheitsförderung kann auch sehr umfassend sein (große Betriebs-Konzepte). Prävention kann klein sein (eine Broschüre). Merke: Der Unterschied ist die Denkrichtung, nicht die Intensität."

**D3: "Gesundheitsförderung ist nur für gesunde Menschen, Prävention für kranke"**
- **Fachbegriff:** Zielgruppen-Fehlzuordnung
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — **beide richten sich an alle**. Gesundheitsförderung funktioniert auch bei chronisch Kranken (Ressourcen stärken, Selbstmanagement). Prävention gibt es auf 3 Ebenen — auch bei schon Erkrankten (Tertiärprävention: Rückfall vermeiden). Merke: Beide an alle. Unterschied: Blickwinkel."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — beide sind für **alle**. Gesundheitsförderung hilft auch Kranken: Stärken finden, selbst aktiv werden. Prävention gibt es auf 3 Ebenen — auch bei Kranken (Tertiär: Rückfall vermeiden). Merke: Beide für alle Menschen. Unterschied ist die Denkweise."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Prävention (pathogenetisch, Risikofaktoren vermeiden) und Gesundheitsförderung (salutogenetisch, Ressourcen stärken) sind **komplementär**, nicht identisch. In der Pflege ergänzen sie sich täglich: Risiken vermeiden + Stärken fördern. Rechtlich: § 20 SGB V, PrävG 2015."

**B1 (250 Zeichen):** "Sehr gut. Prävention (Krankheit vermeiden, auf Risiken schauen) und Gesundheitsförderung (Gesundheit stärken, auf Ressourcen schauen) sind **verschieden, aber gehören zusammen**. In der Pflege machen wir beides. Rechtlich: § 20 SGB V, Präventionsgesetz 2015."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Kernunterschied zwischen Prävention und Gesundheitsförderung?"
- **Rückseite:** "Prävention (pathogenetisch): Risikofaktoren bekämpfen. Gesundheitsförderung (salutogenetisch): Ressourcen und Schutzfaktoren stärken. Komplementär, nicht synonym."
- **Kategorie:** fachbegriff

---

## Baustein 7: praeventionsgesetz-praevg-2015

### Metadaten
- **bausteinId:** gesundheitsmodelle-praevg
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Wer zahlt in Deutschland für Präventionsprogramme wie einen Rückenkurs oder eine Stress-Bewältigung-Schulung? Was denkst du?"
- **Step-Typ:** freetext (kurz)

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Das **Präventionsgesetz (PrävG)** trat 2015 in Kraft. Es **verpflichtet die Krankenkassen**, pro Versichertem und Jahr mindestens **7,52 Euro** in Prävention zu investieren. Rechtsgrundlage: **§§ 20, 20a, 20b SGB V**."

**B1 (220 Zeichen):** "Das **Präventionsgesetz (PrävG)** kam 2015. Es sagt: Krankenkassen müssen pro Versicherten und Jahr mindestens **7,52 Euro** für Prävention ausgeben. Gesetz: **§§ 20, 20a, 20b SGB V**."

- **Step-Typ:** text (displayFormat: news — Gesetz als Nachricht)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Das **Gesetz zur Stärkung der Gesundheitsförderung und der Prävention** (Präventionsgesetz, PrävG) trat am **25. Juli 2015** in Kraft. Es war das erste umfassende Präventionsgesetz Deutschlands und setzt die **Ottawa-Charta** national um.

**Kernpunkte:**

**1. Mindest-Investition der Krankenkassen**: **7,52 Euro pro Versichertem/Jahr** (Stand 2023) — aufgeteilt auf:
- 2,15 € für **individuelle Maßnahmen** (Kurse)
- 2,15 € für **betriebliche Gesundheitsförderung** (BGF)
- 3,22 € für **Gesundheitsförderung in Lebenswelten** (Setting: Kita, Schule, Kommune)

**2. Pflegekassen**: Müssen seit 2015 auch in Prävention investieren (0,30 €/Versichertem).

**3. Nationale Präventionskonferenz**: Koordination aller Akteure (Kranken-, Renten-, Unfall-, Pflegekassen).

**4. Bundesrahmenempfehlung**: Gemeinsame Ziele und Strategien.

**Kernprinzipien**:
- **Lebenswelten-Ansatz** (Setting): Kitas, Schulen, Betriebe, Pflegeheime
- **Zielgruppen-orientiert**: Frauen/Männer, Alter, sozial benachteiligt
- **Qualitätsgesichert**: Leitfaden Prävention

**Bedeutung für die Pflege**: Pflegekassen finanzieren seit 2015 Gesundheitsförderung in stationären Pflege-Einrichtungen (z.B. Ernährungs-, Bewegungs-, Sturz-Prävention). (PrävG 2015, § 5 SGB XI neu)"

**B1 (620 Zeichen):**
"Das **Präventionsgesetz (PrävG)** kam am 25. Juli 2015. Es ist das erste große Gesetz für Prävention in Deutschland und setzt die **Ottawa-Charta** um.

**Was steht drin:**

**1. Geld für Prävention:**
Krankenkassen müssen **7,52 Euro pro Versichertem und Jahr** für Prävention ausgeben (Stand 2023):
- 2,15 € für **Einzelmaßnahmen** (Kurse wie Rückenschule, Yoga)
- 2,15 € für **betriebliche Gesundheitsförderung** (am Arbeitsplatz)
- 3,22 € für **Lebenswelten** (Kita, Schule, Stadt)

**2. Pflegekassen** müssen seit 2015 auch Prävention bezahlen (30 Cent pro Versichertem).

**3. Nationale Präventions-Konferenz** — alle Kassen arbeiten zusammen.

**4. Gemeinsamer Rahmenplan** — gemeinsame Ziele.

**Grundprinzipien:**
- **Lebenswelten** (Kita, Schule, Betrieb, Pflegeheim)
- **Zielgruppen** (Frauen/Männer, Alter, arme Menschen)
- **Qualität** — nach Leitfaden

**Für die Pflege:** Pflegekassen zahlen seit 2015 für Gesundheitsförderung in Pflegeheimen — zum Beispiel für Sturz-, Ernährungs-, Bewegungsprogramme."

- **Erklärungs-Step:** stepType `reveal` (Kernpunkte aufklappbar)
- **Glossar-Begriffe:** [PrävG, § 20 SGB V, Bundesrahmenempfehlung, Setting-Ansatz, Nationale Präventionskonferenz]

### Misconceptions → Distraktoren

**D1: "Prävention ist Privatsache — der Staat zahlt nicht dafür"**
- **Fachbegriff:** Staatsferne-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — seit **2015** ist Prävention **gesetzlich geregelt** (PrävG). Die Krankenkassen investieren **pflichtgemäß** über 700 Millionen Euro jährlich in Prävention. Privat-Anteile gibt es auch (eigene Kurse), aber **gesetzlich verpflichtend** ist viel. Merke: Gesetzliche Aufgabe."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — seit **2015** gibt es das Präventionsgesetz. Die Krankenkassen müssen **pflichtmäßig** über 700 Millionen Euro jährlich für Prävention ausgeben. Man kann auch privat zahlen, aber vieles ist gesetzlich geregelt. Merke: Gesetzliche Aufgabe."

**D2: "Das Präventionsgesetz betrifft nur Krankenkassen, nicht Pflegekassen"**
- **Fachbegriff:** Kassen-Zuordnungsfehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — das PrävG verpflichtet **auch Pflegekassen** (§ 5 SGB XI) zur Gesundheitsförderung — mit 0,30 €/Versichertem/Jahr. Ziel: Prävention in stationären Pflege-Einrichtungen (Sturz, Ernährung, Bewegung). Merke: Alle Sozialversicherungen sind involviert."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — auch die **Pflegekassen** müssen Prävention zahlen (§ 5 SGB XI). 30 Cent pro Versichertem im Jahr. Damit werden Programme in Pflegeheimen finanziert: Sturz-Prävention, Ernährung, Bewegung. Merke: Alle Kassen sind dabei."

**D3: "Die 7,52 Euro pro Versichertem sind nur für individuelle Kurse"</italic>"**
- **Fachbegriff:** Zweckbindungs-Fehler
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — der Betrag ist **aufgeteilt**: Nur 2,15 € für individuelle Kurse. Weitere 2,15 € für **betriebliche Gesundheitsförderung** (BGF) und 3,22 € für **Lebenswelten** (Setting-Ansatz: Kita, Schule, Kommune). Der größte Teil geht in kollektive Strukturen, nicht in Einzelkurse. Merke: Dreigeteilt."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — die 7,52 € sind **aufgeteilt**: 2,15 € für Einzelkurse. 2,15 € für Betriebliche Gesundheit (BGF). 3,22 € für Lebenswelten (Kita, Schule, Stadt). Der größte Teil geht in Orte, nicht in Einzelkurse. Merke: Drei Teile."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. PrävG (2015): Krankenkassen müssen 7,52 €/Versichertem/Jahr in Prävention investieren — aufgeteilt auf Individuell (2,15 €), BGF (2,15 €), Lebenswelten (3,22 €). Auch Pflegekassen investieren (0,30 €/Versichertem). Nationale Präventionskonferenz koordiniert. Setzt Ottawa-Charta national um."

**B1 (255 Zeichen):** "Sehr gut. PrävG (2015): Krankenkassen müssen 7,52 € pro Versichertem/Jahr ausgeben — aufgeteilt auf Einzelkurse (2,15 €), Betriebe (2,15 €), Lebenswelten (3,22 €). Auch Pflegekassen zahlen (0,30 €). Nationale Präventionskonferenz koordiniert. Setzt Ottawa-Charta um."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wann trat das Präventionsgesetz (PrävG) in Kraft und wie viel müssen Krankenkassen pro Versichertem/Jahr investieren?"
- **Rückseite:** "25. Juli 2015. Mindestens 7,52 Euro pro Versichertem/Jahr (Stand 2023)."
- **Kategorie:** recht

---

## Baustein 8: infektionsschutzgesetz-ifsg

### Metadaten
- **bausteinId:** gesundheitsmodelle-ifsg
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Kind auf deiner Station hat Masern. Was muss jetzt passieren? Wer muss informiert werden?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Das **Infektionsschutzgesetz (IfSG)** regelt Meldepflichten, Hygiene, Ausbruchsmanagement. Wichtige §§: **§ 6 (Arzt-Meldepflicht)**, **§ 7 (Labor-Meldung)**, **§ 20 (Impfungen)**, **§ 20a (einrichtungsbezogene Masern-Impfpflicht seit 2020)**."

**B1 (230 Zeichen):** "Das **Infektionsschutzgesetz (IfSG)** regelt: Was muss gemeldet werden? Wer muss Impfung haben? Wichtig: **§ 6** (Ärzte melden), **§ 7** (Labor meldet), **§ 20** (Impfungen), **§ 20a** (Masern-Impfpflicht in Pflege seit 2020)."

- **Step-Typ:** text (displayFormat: checklist — Kern-§§)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Das **Infektionsschutzgesetz (IfSG)** ist das zentrale Gesundheitsschutzgesetz Deutschlands. Es trat **2001** in Kraft und wurde mehrfach aktualisiert (COVID-19-Novellen 2020/2021).

**Kern-Paragraphen:**

**§ 6 — Arzt-Meldepflicht (namentlich)**: Pflicht zur Meldung bei Verdacht, Erkrankung, Tod an:
- Cholera, Pest, Diphtherie, Masern, Mumps, Röteln, Hepatitis A/B/C/D/E
- COVID-19, Tuberkulose, Meningokokken-Meningitis, u.v.a.
- Auch Lebensmittel-Infektionen und Nadelstich-Verletzungen

**§ 7 — Labor-Meldepflicht**: Direkte Meldung bei Erreger-Nachweis im Labor.

**§ 20 — Impfungen**: Regelung zu STIKO-Empfehlungen und Impfprogrammen.

**§ 20a — Einrichtungsbezogene Masern-Impfpflicht** (seit 1. März 2020): Alle Beschäftigte in Pflege, Krankenhäusern, Kitas, Schulen müssen Masern-Schutz nachweisen.

**§§ 28 ff. — Schutzmaßnahmen**: Rechtsgrundlage für Quarantäne, Isolierung, Einrichtungs-Schließungen.

**Meldeweg**: Arzt/Labor meldet an **Gesundheitsamt** (unverzüglich, spätestens innerhalb 24h), das an **RKI** (Robert Koch-Institut), das an **WHO**.

**Für die Pflege wichtig**: Meldung bei Ausbrüchen, Hygiene-Management, Dokumentation, Schutzausrüstung. (IfSG 2001, Stand 2024)"

**B1 (650 Zeichen):**
"Das **Infektionsschutzgesetz (IfSG)** ist ein wichtiges Gesetz für den Gesundheitsschutz. Es gilt seit **2001** und wurde mehrmals aktualisiert (zum Beispiel während COVID-19).

**Die wichtigsten Paragraphen:**

**§ 6 — Arzt meldet**: Ärzte müssen bestimmte Krankheiten **namentlich** melden:
- Masern, Mumps, Röteln, Hepatitis (A bis E)
- Tuberkulose, Cholera, Diphtherie, Meningitis
- COVID-19 und viele andere
- Auch Lebensmittel-Infektionen und Nadelstich-Verletzungen

**§ 7 — Labor meldet**: Wenn das Labor einen Erreger findet, muss es melden.

**§ 20 — Impfungen**: Regelt STIKO-Empfehlungen und Impfprogramme.

**§ 20a — Masern-Impfpflicht** (seit 1. März 2020): Alle, die in Pflege, Krankenhaus, Kita oder Schule arbeiten, müssen gegen Masern geimpft sein oder zeigen, dass sie es schon hatten.

**§§ 28 ff. — Schutzmaßnahmen**: Grundlage für Quarantäne, Isolierung, Schließungen.

**Meldeweg**: Arzt/Labor → **Gesundheitsamt** (innerhalb 24 Stunden) → **RKI** (Robert Koch-Institut) → **WHO**.

**Für die Pflege wichtig**: Melden bei Ausbrüchen, Hygiene, Dokumentation, Schutzkleidung."

- **Erklärungs-Step:** stepType `diagram` (Meldeweg als Flow)
- **Glossar-Begriffe:** [IfSG, RKI, Gesundheitsamt, Meldepflicht, § 20a, STIKO, Quarantäne, Isolierung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Nur Ärzte haben Meldepflicht nach IfSG — Pflegekräfte nicht"**
- **Fachbegriff:** Meldepflicht-Einzelzuordnung
- **Feedback (C1, 310 Zeichen):** "Fast — die **primäre Meldepflicht** liegt beim Arzt. Aber **Pflegekräfte haben eine Informationspflicht** gegenüber dem Arzt und der Einrichtungsleitung. Bei Verdacht auf meldepflichtige Erkrankung: **Informationskette auslösen**. In Pflegeheim-Ausbrüchen ist die Heimleitung auch meldepflichtig. Merke: Indirekt beteiligt."
- **Feedback (B1, 275 Zeichen):** "Fast — die **Hauptmeldepflicht** haben Ärzte. Aber Pflegekräfte müssen den **Arzt und die Leitung informieren**. Bei einem Verdacht: Sofort Bescheid geben. In Pflegeheimen bei Ausbrüchen ist auch die Heimleitung meldepflichtig. Merke: Pflege ist indirekt beteiligt."

**D2: "Die Masern-Impfpflicht (§ 20a) betrifft nur neu Einzustellende"**
- **Fachbegriff:** Bestandsschutz-Irrtum
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — **alle Beschäftigte** in Pflege, Krankenhaus, Kita, Schule müssen seit **15. März 2022** den Masern-Schutz nachweisen — auch der **Bestand**. Nachweis: Impfung (2 Dosen), Immunität (Titer) oder dokumentierte Masern-Erkrankung. Ohne Nachweis: Gesundheitsamt kann Beschäftigungs-Verbot aussprechen. Merke: Alle."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **alle Beschäftigte** müssen es nachweisen, nicht nur neue. Seit 15. März 2022 gilt es für alle in Pflege, Krankenhaus, Kita, Schule. Nachweis: Impfung (2× gemacht), Immunität (Bluttest) oder man hatte schon Masern. Ohne Nachweis: Beschäftigungs-Verbot. Merke: Alle."

**D3: "Meldepflichtige Erkrankungen können anonym gemeldet werden"**
- **Fachbegriff:** Anonymitäts-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — bei den meisten §-6-Erkrankungen ist die Meldung **namentlich** pflichtig (Name, Geburtsdatum, Adresse des Erkrankten). Begründung: Gesundheitsamt muss Kontaktpersonen informieren und Quarantäne verhängen können. Ausnahme: HIV und einige andere sind **nicht-namentlich** meldepflichtig. Merke: Meist namentlich."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — die meisten Krankheiten müssen **namentlich** gemeldet werden: mit Name, Geburtsdatum, Adresse. Warum? Das Gesundheitsamt muss Kontakte warnen können. Ausnahmen gibt es (zum Beispiel HIV — da anonym). Merke: Meist mit Namen."

### Richtig-Feedback
**C1 (305 Zeichen):** "Sehr gut. IfSG: Kernparagraphen § 6 (Arzt-Meldepflicht), § 7 (Labor-Meldung), § 20 (Impfungen), § 20a (einrichtungsbezogene Masern-Impfpflicht seit 2020). Meldeweg: Arzt/Labor → Gesundheitsamt → RKI → WHO. Pflegekräfte haben Informationspflicht. Seit 2022 Impfpflicht für alle Beschäftigten."

**B1 (265 Zeichen):** "Sehr gut. IfSG: Wichtige Paragraphen § 6 (Arzt meldet), § 7 (Labor meldet), § 20 (Impfungen), § 20a (Masern-Impfpflicht in Pflege seit 2020). Meldeweg: Arzt/Labor → Gesundheitsamt (24h) → RKI → WHO. Pflege informiert Arzt und Leitung. Seit 2022 gilt Impfpflicht für alle."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was regelt § 20a IfSG und seit wann gilt er?"
- **Rückseite:** "Einrichtungsbezogene Masern-Impfpflicht — seit 1. März 2020 (Bestand ab 15. März 2022). Alle Beschäftigte in Pflege, Krankenhaus, Kita, Schule brauchen Masern-Schutz-Nachweis."
- **Kategorie:** recht

---

## Baustein 9: bio-psycho-soziales-modell

### Metadaten
- **bausteinId:** gesundheitsmodelle-bps-modell
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Patientin mit Rückenschmerz: Muss man nur ihren Rücken behandeln? Oder gibt es mehr zu beachten?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Das **bio-psycho-soziale Modell** (Engel 1977) betrachtet Krankheit und Gesundheit auf **3 Ebenen**: biologisch (Organe, Gene), psychologisch (Erleben, Emotion, Verhalten), sozial (Beziehungen, Umwelt, Gesellschaft). Alle Ebenen wirken zusammen."

**B1 (230 Zeichen):** "Das **bio-psycho-soziale Modell** (Engel 1977) schaut auf **3 Ebenen**: **Biologisch** (Körper, Organe), **Psychologisch** (Gefühle, Denken), **Sozial** (Familie, Arbeit, Gesellschaft). Alle wirken zusammen — alle gehören dazu."

- **Step-Typ:** diagram (3 Kreise überlappend)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Das **bio-psycho-soziale Modell** wurde 1977 von **George Engel** entwickelt — als Kritik am rein **biomedizinischen Modell** (nur körperliche Ursachen). Engel sagte: Krankheit und Gesundheit entstehen aus dem **Zusammenspiel** dreier Ebenen.

**Bio** (biologisch):
- Organe, Gewebe, Zellen, Gene
- Biochemische Prozesse
- Beispiel: Bluthochdruck durch genetische Veranlagung + Gefäßverkalkung

**Psycho** (psychologisch):
- Emotionen, Stimmung, Bewältigungsstrategien
- Wahrnehmung, Überzeugungen, Stress-Erleben
- Beispiel: Chronischer Stress erhöht Blutdruck

**Sozio** (sozial):
- Familie, Freunde, Arbeit, Gemeinschaft
- Sozioökonomischer Status, Bildung, Kultur
- Beispiel: Arbeitsdruck, Einsamkeit, finanzielle Sorgen fördern Bluthochdruck

**In der Pflege angewendet** — Pflegeprozess integriert alle 3 Ebenen:
- **Bio**: Vitalzeichen, Schmerzmessung, Wunddokumentation
- **Psycho**: Wohlbefinden, Ängste, Bewältigung
- **Sozio**: Angehörige, Beruf, Wohnsituation, soziales Netz

**Wichtig**: Die Trennung ist analytisch — in der Realität sind alle Ebenen **untrennbar verflochten**. Ein Diabetes (bio) verändert das Selbstbild (psycho) und die Arbeitsfähigkeit (sozio). (Engel 1977)"

**B1 (615 Zeichen):**
"Das **bio-psycho-soziale Modell** hat **George Engel** 1977 entwickelt. Er hat gesagt: Die Medizin schaut zu sehr nur auf den Körper. Aber Krankheit entsteht auch durch **Psyche und soziale Umstände**.

**Bio (biologisch)** — Körper:
- Organe, Zellen, Gene
- Beispiel: Zu hoher Blutdruck durch die Gene oder durch enge Gefäße

**Psycho (psychologisch)** — Seele und Denken:
- Gefühle, Stimmung, wie man mit Stress umgeht
- Beispiel: Viel Stress erhöht den Blutdruck

**Sozio (sozial)** — Umgebung:
- Familie, Freunde, Arbeit, Gesellschaft
- Bildung, Geld, Kultur
- Beispiel: Stress im Job, wenig Geld, keine Freunde machen den Blutdruck schlechter

**In der Pflege** berücksichtigen wir alle 3 Ebenen im Pflegeprozess:
- **Bio**: Vitalzeichen, Schmerz, Wunde
- **Psycho**: Wohlbefinden, Ängste, Stimmung
- **Sozio**: Familie, Arbeit, Wohnung, Netz

**Wichtig**: Die 3 Ebenen sind **verbunden**. Ein Diabetes (bio) verändert das Selbstbild (psycho) und die Arbeit (sozio)."

- **Erklärungs-Step:** stepType `diagram` (3 überlappende Kreise mit Beispielen)
- **Glossar-Begriffe:** [bio-psycho-sozial, biomedizinisches Modell, Engel, Sozioökonomie, Holismus]

### Misconceptions → Distraktoren

**D1: "Das bio-psycho-soziale Modell ist dasselbe wie das biomedizinische"</italic>"**
- **Fachbegriff:** Modell-Verwechslung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — Engel entwickelte sein Modell **als Kritik** am rein biomedizinischen. Biomedizin schaut nur auf Körper und biochemische Prozesse. Bio-psycho-sozial ergänzt Psyche und Soziales. Engel sagte: Krankheit lässt sich nicht allein am Körper erklären. Merke: Erweiterung, nicht Ersatz."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — Engel hat sein Modell **gegen** das biomedizinische gemacht. Biomedizin schaut nur auf den Körper. Engel sagt: Man muss auch auf Psyche und Soziales schauen. Das ist **eine Erweiterung**, nicht das Gleiche. Merke: Engel ergänzt — nicht ersetzt."

**D2: "Psyche und Soziales sind 'weich' — wichtig ist nur der Körper"**
- **Fachbegriff:** Reduktionismus
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — **Psyche und Soziales haben biologische Auswirkungen**. Chronischer Stress erhöht Cortisol, schädigt Herzgefäße, schwächt Immunsystem. Einsamkeit ist so schädlich wie Rauchen (Holt-Lunstad 2015). Die Trennung 'hart vs. weich' ist wissenschaftlich überholt. Merke: Alle 3 Ebenen sind biologisch wirksam."
- **Feedback (B1, 285 Zeichen):** "Nicht ganz — Psyche und Soziales wirken **auch auf den Körper**. Stress macht zum Beispiel den Blutdruck höher. Einsamkeit ist so schädlich wie Rauchen (Studien zeigen das). Das 'hart vs. weich' ist nicht richtig. Merke: Alle 3 Ebenen wirken auf den Körper."

**D3: "Ein Patient mit Infektion braucht nur bio-medizinische Behandlung — Psyche und Soziales spielen keine Rolle"**
- **Fachbegriff:** Einzelfall-Reduktion
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — auch bei Infektionen spielen alle 3 Ebenen: **Bio** (Antibiotikum), **Psycho** (Angst vor Ansteckung, Therapietreue), **Sozio** (Isolation, Einkommensausfall, Familie). Die Therapietreue hängt stark von psychosozialen Faktoren ab. Compliance = bio-psycho-soziales Thema. Merke: Immer alle 3 Ebenen."
- **Feedback (B1, 285 Zeichen):** "Nicht ganz — auch bei Infektion alle 3 Ebenen: **Bio** (Antibiotikum). **Psycho** (Angst, Compliance — nimmt er Tabletten?). **Sozio** (Isolation, kann er arbeiten?, Familie). Ob ein Patient Tabletten nimmt, hängt von Psyche und Sozialem ab. Merke: Alle 3 Ebenen zählen immer."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Das bio-psycho-soziale Modell (Engel 1977) betrachtet Gesundheit und Krankheit auf 3 Ebenen: Bio (Organe), Psycho (Emotion, Bewältigung), Sozio (Familie, Arbeit, Gesellschaft). In der Pflege: Pflegeprozess integriert alle 3. Die Ebenen sind untrennbar verflochten."

**B1 (255 Zeichen):** "Sehr gut. Das bio-psycho-soziale Modell (Engel 1977) schaut auf 3 Ebenen: Bio (Körper), Psycho (Gefühle), Sozio (Familie, Arbeit). In der Pflege: Pflegeprozess schaut immer auf alle 3. Die Ebenen sind miteinander verbunden — können nicht getrennt werden."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was sind die 3 Ebenen des bio-psycho-sozialen Modells nach Engel?"
- **Rückseite:** "Bio (biologisch: Organe, Zellen, Gene). Psycho (psychisch: Emotion, Bewältigung). Sozio (sozial: Familie, Arbeit, Gesellschaft). Alle untrennbar verflochten. (Engel 1977)"
- **Kategorie:** fachbegriff

---

## Baustein 10: determinanten-der-gesundheit

### Metadaten
- **bausteinId:** gesundheitsmodelle-determinanten
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Warum sind manche Menschen gesünder als andere? Was beeinflusst die Gesundheit am stärksten: Gene, Arzt, Lebensstil, Einkommen? Rangfolge dein Bauchgefühl."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Gesundheits-Determinanten nach Dahlgren/Whitehead (1991): Konzentrische Kreise — innen **Alter/Geschlecht/Gene** (10%), dann **Lebensstil** (20%), dann **soziales Netz**, **Lebens-/Arbeitsbedingungen** (40%), außen **allgemeine gesellschaftliche Bedingungen** (30%)."

**B1 (225 Zeichen):** "Was bestimmt die Gesundheit? Dahlgren/Whitehead (1991) zeigt es als Zwiebelschalen: (1) innen **Gene** (10%), (2) **Lebensstil** (20%), (3) **soziales Netz**, (4) **Arbeit/Wohnen** (40%), (5) **Gesellschaft** (30%)."

- **Step-Typ:** diagram (Zwiebel-Modell)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Das **Rainbow-Modell** oder **Zwiebel-Modell** der Gesundheitsdeterminanten (Dahlgren/Whitehead 1991) zeigt: Gesundheit wird von vielen Faktoren beeinflusst — biologisch, verhaltensmäßig, sozial und gesellschaftlich.

**Die 5 Schichten (von innen nach außen):**

**1. Innerste Schicht — Alter, Geschlecht, genetische Faktoren (~10-15%)**
- Nicht veränderbar
- Beispiel: Geschlechts-spezifische Krankheitsrisiken

**2. Lebensstil-Faktoren (~20-30%)**
- Rauchen, Alkohol, Ernährung, Bewegung, Schlaf
- Theoretisch veränderbar — aber stark von anderen Schichten abhängig

**3. Soziales Netzwerk und Familie**
- Partner, Freunde, Nachbarschaft
- Einsamkeit ist ein bedeutender Risikofaktor

**4. Lebens- und Arbeitsbedingungen (~40%)**
- Bildung, Einkommen, Beruf, Arbeitsumgebung
- Wohnumgebung, Luftqualität, Zugang zu Gesundheitsversorgung

**5. Allgemeine gesellschaftliche Bedingungen (~20-30%)**
- Wirtschaftspolitik, Sozialpolitik, Umweltpolitik
- Kulturelle Werte, Gleichheit

**Wichtig:** Die häufig zitierten **~10% Gesundheitsversorgung** (nur der medizinische Beitrag!) zeigen: Gesundheit wird vor allem **außerhalb des Gesundheitssystems** entschieden. **Sozio-ökonomische Determinanten** sind der größte Einflussfaktor. (Dahlgren/Whitehead 1991, Marmot 2005)"

**B1 (620 Zeichen):**
"Das **Zwiebel-Modell** von Dahlgren und Whitehead (1991) zeigt: Was macht uns gesund oder krank? Viele Dinge!

**5 Schichten — von innen nach außen:**

**1. Gene, Alter, Geschlecht (~10-15%)** — kann man nicht ändern. Zum Beispiel: Frauen und Männer haben verschiedene Risiken.

**2. Lebensstil (~20-30%)** — Rauchen, Alkohol, Essen, Bewegung, Schlaf. Kann man theoretisch ändern, aber es ist oft schwer — weil die anderen Schichten mit spielen.

**3. Soziales Netz** — Familie, Freunde, Nachbarn. Einsamkeit ist sehr gefährlich für die Gesundheit.

**4. Arbeit und Wohnen (~40%)** — Bildung, Geld, Beruf, Arbeitsplatz, Wohnung, Luft, Zugang zu Ärzten.

**5. Gesellschaft (~20-30%)** — Politik, Wirtschaft, Kultur, Gleichheit.

**Wichtig:** Das **Gesundheitssystem** macht nur etwa **10%** der Gesundheit aus! Das Meiste wird **außerhalb von Ärzten und Krankenhäusern** entschieden. **Bildung, Geld und soziales Netz** sind am wichtigsten."

- **Erklärungs-Step:** stepType `diagram` (Zwiebel-Modell visualisiert)
- **Glossar-Begriffe:** [Gesundheitsdeterminanten, Rainbow-Modell, Dahlgren/Whitehead, soziale Ungleichheit, Health Inequity]

### Misconceptions → Distraktoren

**D1: "Gene sind der wichtigste Faktor für Gesundheit"**
- **Fachbegriff:** Genetik-Überschätzung
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — Gene machen **nur ca. 10-15%** der Gesundheit aus. Viel wichtiger: **Soziale und Lebensbedingungen** (~40%), dann Lebensstil (~20-30%). Ein Mensch mit 'schlechten Genen' aber guten Lebensbedingungen hat oft bessere Chancen als einer mit 'guten Genen' in schlechten Verhältnissen. Merke: Gene nicht dominant."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — Gene sind **nur etwa 10-15%**. Wichtiger: **Soziales und Leben** (~40%), dann **Lebensstil** (~20-30%). Ein Mensch mit 'schlechten Genen' aber gutem Leben kann gesünder sein als einer mit 'guten Genen' aber schlechten Verhältnissen. Merke: Gene allein bestimmen nichts."

**D2: "Das Gesundheitssystem bestimmt die Gesundheit einer Gesellschaft am meisten"**
- **Fachbegriff:** Gesundheitssystem-Überschätzung
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — das **Gesundheitssystem trägt nur ca. 10%** zur Gesundheit bei (McKeown, Marmot). Viel wichtiger sind **Bildung, Einkommen, Arbeit, Wohnen** (~40%). Deswegen haben Länder mit ähnlichem Gesundheitssystem sehr unterschiedliche Lebenserwartung — je nach sozialen Bedingungen. Merke: Gesundheit weit mehr als Medizin."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — das Gesundheitssystem (Ärzte, Krankenhäuser) macht **nur etwa 10%** aus. Viel wichtiger sind **Bildung, Geld, Arbeit, Wohnung** (~40%). Länder mit gleichen Ärzten haben sehr unterschiedliche Lebenserwartung — wegen der sozialen Bedingungen. Merke: Medizin ist nur ein Teil."

**D3: "Der Lebensstil ist eine reine persönliche Entscheidung"**
- **Fachbegriff:** Individualisierung-Falle
- **Feedback (C1, 335 Zeichen):** "Nicht ganz — **Lebensstil ist strukturell beeinflusst**. Menschen in ärmeren Verhältnissen haben: weniger Geld für gesunde Ernährung, weniger Zeit für Sport, höhere Stresslevels, oft Wohnung ohne Grün-Umgebung. **Gesundheitsförderung** muss daher auch die **Verhältnisse** ändern, nicht nur die **Verhaltensweisen** (Ottawa-Charta). Merke: Struktur > Individuum."
- **Feedback (B1, 295 Zeichen):** "Nicht ganz — **Lebensstil hängt auch von den Umständen ab**. Arme Menschen haben: weniger Geld für gesundes Essen, weniger Zeit für Sport, mehr Stress, oft schlechtere Wohnungen. **Gesundheitsförderung** muss auch die **Verhältnisse** ändern — nicht nur den einzelnen Menschen. Merke: Umstände zählen."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Gesundheits-Determinanten (Dahlgren/Whitehead 1991) als Zwiebel: Gene (~10%), Lebensstil (~20-30%), soziales Netz, Arbeits-/Lebensbedingungen (~40%), Gesellschaft (~20-30%). Gesundheitssystem nur ~10%. Die **sozialen Determinanten** sind der größte Einflussfaktor — nicht Medizin."

**B1 (260 Zeichen):** "Sehr gut. Was bestimmt Gesundheit (Dahlgren/Whitehead 1991): Gene (~10%), Lebensstil (~20-30%), soziales Netz, Arbeit und Wohnen (~40%), Gesellschaft (~20-30%). Medizin-System nur ~10%. Die **sozialen Bedingungen** sind am wichtigsten — nicht Ärzte und Krankenhäuser."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welcher Anteil an der Gesundheit einer Gesellschaft wird vom Gesundheitssystem bestimmt?"
- **Rückseite:** "Nur ca. 10%. Wichtiger: soziale Determinanten (Bildung, Einkommen, Arbeit, Wohnen) ~40%, Lebensstil ~20-30%, Gene ~10%. (Dahlgren/Whitehead 1991)"
- **Kategorie:** fakt

---

## Baustein 11: gesundheitskompetenz-health-literacy

### Metadaten
- **bausteinId:** gesundheitsmodelle-health-literacy
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient bekommt einen Beipackzettel für sein neues Medikament. Er liest ihn, versteht nichts und fragt nicht nach. Welches Problem hat er?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "**Gesundheitskompetenz (Health Literacy)** = Fähigkeit, gesundheitsbezogene Informationen zu **finden, verstehen, bewerten, anwenden**. In Deutschland haben laut HLS-EU-Studie (2018) **43%** eine begrenzte Gesundheitskompetenz."

**B1 (225 Zeichen):** "**Gesundheitskompetenz** bedeutet: Informationen über Gesundheit **finden, verstehen, bewerten, nutzen**. In Deutschland haben etwa **43%** damit Schwierigkeiten (HLS-EU-Studie 2018). Das ist fast jeder Zweite."

- **Step-Typ:** text (displayFormat: news — Studien-Fakt)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"**Gesundheitskompetenz** (Health Literacy) ist die Fähigkeit, gesundheitsbezogene Informationen erfolgreich zu nutzen. Das **4-Schritte-Modell** (HLS-EU Konsortium 2013):

1. **Finden** — Wo finde ich verlässliche Informationen?
2. **Verstehen** — Was bedeutet dieser Fachbegriff?
3. **Bewerten** — Ist die Quelle vertrauenswürdig?
4. **Anwenden** — Wie setze ich das in meinem Alltag um?

**Ebenen nach Nutbeam (2000):**
- **Funktional**: Lesen, Schreiben, Grundverständnis (Beipackzettel)
- **Interaktiv/Kommunikativ**: Gespräch mit Ärzten, Fragen stellen
- **Kritisch**: Kritische Bewertung von Gesundheitsinformation (z.B. Fake News auf Social Media)

**Daten Deutschland (HLS-GER 2018, Schaeffer et al.):**
- **43%** der Erwachsenen haben **begrenzte Gesundheitskompetenz**
- Besonders betroffen: Menschen mit Migrationshintergrund, mit niedrigem Bildungsstand, Menschen über 65
- **Folgen**: Häufigere Krankenhaus-Aufenthalte, schlechtere Therapietreue, höhere Gesundheitskosten

**Was Pflege tun kann:**
- **Einfache Sprache** verwenden
- **Teach-Back-Methode**: Patient wiederholt in eigenen Worten
- **Bilder und Piktogramme**
- **Langsam, ruhig, nicht hastig** erklären
- **Nachfragen fördern** ('Was ist noch unklar?')

(HLS-EU 2013, Schaeffer et al. 2018)"

**B1 (640 Zeichen):**
"**Gesundheitskompetenz** heißt: Man kann Informationen über Gesundheit **nutzen**. Das **4-Schritte-Modell** (HLS-EU 2013):

1. **Finden** — Wo finde ich gute Informationen?
2. **Verstehen** — Was bedeuten die Wörter?
3. **Bewerten** — Ist die Quelle gut?
4. **Anwenden** — Wie mache ich das im Alltag?

**Es gibt 3 Ebenen (Nutbeam 2000):**
- **Funktional**: Lesen und Schreiben (Beipackzettel verstehen)
- **Interaktiv**: Mit Ärzten reden, Fragen stellen
- **Kritisch**: Informationen bewerten (zum Beispiel: Ist das im Internet richtig?)

**Zahlen aus Deutschland (Studie HLS-GER 2018):**
- **43%** der Erwachsenen haben **Schwierigkeiten** mit Gesundheitsinformationen
- Besonders: Menschen mit Migrationshintergrund, mit wenig Bildung, über 65 Jahre
- **Folgen**: Mehr Krankenhaus-Aufenthalte, sie nehmen Medikamente nicht richtig, höhere Kosten

**Was Pflege tun kann:**
- **Einfache Sprache** benutzen
- **Teach-Back**: Patient soll in eigenen Worten sagen, was er verstanden hat
- **Bilder** zeigen
- **Ruhig** erklären, nicht hetzen
- **Zum Fragen ermutigen**"

- **Erklärungs-Step:** stepType `reveal` (4 Schritte + 3 Ebenen + Daten)
- **Glossar-Begriffe:** [Gesundheitskompetenz, Health Literacy, Teach-Back, Piktogramm, HLS-EU, einfache Sprache]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Gesundheitskompetenz betrifft nur Menschen mit niedrigem Bildungsstand"**
- **Fachbegriff:** Bildungs-Zuordnungsfehler
- **Feedback (C1, 305 Zeichen):** "Fast — Bildung ist **ein** Faktor, aber nicht der einzige. Auch **ältere Menschen**, **Menschen mit Migrationshintergrund**, **in Stresssituationen** und sogar **Akademiker** haben bei spezifischen Themen (z.B. Krebsdiagnose) begrenzte Gesundheitskompetenz. Merke: Situativ und personenabhängig."
- **Feedback (B1, 270 Zeichen):** "Fast — Bildung ist **ein** Faktor, aber nicht der einzige. Auch **Alte Menschen**, **Menschen mit Migration**, **Menschen in Stress**, **und Akademiker** bei schweren Themen (wie Krebs) haben Schwierigkeiten. Merke: Jeder kann betroffen sein — nicht nur 'Ungebildete'."

**D2: "Teach-Back bedeutet: Dem Patienten alles nochmal erklären"**
- **Fachbegriff:** Teach-Back-Missverständnis
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **Teach-Back ist umgekehrt**: Der **Patient** wiederholt das Gelernte **in eigenen Worten**. Die Pflegekraft prüft: Hat er es verstanden? Wenn nicht: neu erklären. Wenn er es wiedergibt, ist sicher: Er hat es. Das nennt man 'Closing the loop'. Merke: Patient erklärt, nicht Pflegekraft."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **Teach-Back ist andersherum**: Der **Patient** erklärt **in eigenen Worten**, was er verstanden hat. Die Pflegekraft hört zu. Wenn es falsch ist: Nochmal erklären. Wenn richtig: Patient hat es wirklich verstanden. Merke: Patient erklärt — nicht Pflegekraft."

**D3: "Gesundheitskompetenz ist nur ein privates Problem — kein Thema für die Pflege"**
- **Fachbegriff:** Individualisierungs-Fehler
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — Pflege hat eine **Hauptrolle**: Sie übersetzt medizinische Informationen in verstehbare Sprache. **Gesundheitskompetenz fördern** ist Teil der Pflege-Aufgaben nach PflBG (Kompetenzbereich II). Auch Einrichtungen können Gesundheitskompetenz-Förderer werden ('Health Literate Organizations'). Merke: Pflege-Aufgabe."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — Pflege hat eine **große Rolle**. Sie hilft, medizinische Wörter einfach zu machen. Gesundheitskompetenz zu fördern ist Teil der Pflege-Ausbildung (PflBG). Auch ganze Einrichtungen können dabei helfen ('Gesundheitskompetente Einrichtungen'). Merke: Eindeutig Pflege-Aufgabe."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Gesundheitskompetenz = Finden + Verstehen + Bewerten + Anwenden gesundheitlicher Informationen. 3 Ebenen: funktional, interaktiv, kritisch. In Deutschland haben 43% begrenzte Kompetenz (HLS-GER 2018). Pflege-Maßnahmen: einfache Sprache, Teach-Back, Bilder, Zeit, Nachfrage fördern."

**B1 (260 Zeichen):** "Sehr gut. Gesundheitskompetenz = Informationen finden, verstehen, bewerten, nutzen. 3 Ebenen: funktional (lesen), interaktiv (reden), kritisch (bewerten). In Deutschland haben 43% Schwierigkeiten. Pflege hilft: Einfache Sprache, Teach-Back, Bilder, Zeit, Fragen fördern."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist die Teach-Back-Methode und warum wird sie in der Pflege empfohlen?"
- **Rückseite:** "Der Patient wiederholt in eigenen Worten, was er verstanden hat. Die Pflegekraft prüft das Verständnis. Sichert: Information ist wirklich angekommen ('Closing the loop')."
- **Kategorie:** handlung

---

## Baustein 12: gesundheitsmodell-schueler-perspektive

### Metadaten
- **bausteinId:** gesundheitsmodelle-schueler-selbst
- **bloomLevel:** 5
- **wissensart:** konzept
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Du bist Pflegeschüler. Wie 'gesund' bist du gerade — körperlich, seelisch, sozial? Was stärkt dich? Was belastet dich?"
- **Step-Typ:** reflection (persönlich, keine Bewertung)

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Auszubildende in der Pflege haben **erhöhte Gesundheitsrisiken**: Schichtarbeit, körperliche Belastung, emotionale Belastung. Salutogenese auf dich selbst anwenden: Was macht dich **stark** (Kohärenzgefühl)? Was sind deine Ressourcen?"

**B1 (230 Zeichen):** "Pflege-Auszubildende haben ein **höheres Risiko**, krank zu werden: Schichtdienst, körperliche Arbeit, emotionale Belastung. Benutze Antonovskys Frage auch bei dir: Was macht dich **stark**? Was sind deine **Ressourcen**?"

- **Step-Typ:** text (displayFormat: scenario — persönliche Reflexion)

### Stufe 3 — Erklärung

**C1 (660 Zeichen):**
"Die Konzepte dieser Einheit gelten auch **für dich selbst**. Als Pflege-Auszubildende bist du in einer besonderen Gesundheits-Situation:

**Spezifische Risiken in der Pflege-Ausbildung:**
- **Schichtarbeit**: Schlafstörungen, Ernährungs-Schwierigkeiten, soziale Ausgrenzung
- **Körperlich**: Heben, Stehen, Rückenprobleme
- **Psychisch**: Umgang mit Leid, Tod, schwierigen Situationen
- **Lernen + Arbeit**: Doppelbelastung

**Deine 3 Dimensionen (bio-psycho-sozial):**
- **Bio**: Schlaf, Ernährung, Bewegung, Rücken, Hygiene
- **Psycho**: Stress-Bewältigung, Reflexion, Supervision, Achtsamkeit
- **Sozio**: Klassengemeinschaft, Familie, Freunde außerhalb der Pflege

**Dein Kohärenzgefühl stärken (Antonovsky):**
- **Verstehbarkeit**: 'Ich verstehe, warum die Ausbildung so ist' — Lernen, Lehrer fragen, Strukturen durchschauen
- **Handhabbarkeit**: 'Ich kann das' — Unterstützung suchen, Hilfe annehmen
- **Bedeutsamkeit**: 'Das hat Sinn' — Warum ist Pflege für dich wichtig?

**In CE-04 T-04** ('Eigengesundheit') vertieft. Für jetzt: Bewusstsein schaffen. Deine Gesundheit ist die Grundlage deiner Pflege-Qualität."

**B1 (560 Zeichen):**
"Die Ideen von heute gelten auch **für dich**. Als Pflege-Schüler hast du spezielle Gesundheits-Risiken.

**Typische Risiken in der Pflege-Ausbildung:**
- **Schichtdienst**: Schlafprobleme, Essens-Probleme, wenig Zeit für Freunde
- **Körperlich**: Viel Heben, viel Stehen, Rückenschmerzen
- **Psychisch**: Mit Leid, Tod, schwierigen Patienten umgehen
- **Lernen + Arbeiten**: Doppelte Belastung

**Deine 3 Ebenen (bio-psycho-sozial):**
- **Bio**: Schlaf, Essen, Bewegung, Rücken, Hygiene
- **Psycho**: Mit Stress umgehen, reflektieren, Supervision, Achtsamkeit
- **Sozio**: Klasse, Familie, Freunde außerhalb der Pflege

**Dein Kohärenzgefühl stärken:**
- **Verstehbarkeit**: 'Ich verstehe, warum die Ausbildung so ist'
- **Handhabbarkeit**: 'Ich schaffe das' — Hilfe annehmen
- **Bedeutsamkeit**: 'Das hat Sinn' — Warum ist Pflege für dich wichtig?

**In CE-04 Thema 4** ('Eigengesundheit') machen wir das noch intensiver. Für jetzt: Denke daran — **deine** Gesundheit ist die Basis für gute Pflege."

- **Erklärungs-Step:** stepType `reflection` (persönliche Fragen)
- **Glossar-Begriffe:** [Schichtarbeit, Supervision, Achtsamkeit, Burnout-Risiko]

### Misconceptions → Distraktoren

**D1: "Als Pflege-Auszubildende muss ich 'funktionieren' — meine eigenen Bedürfnisse sind sekundär"**
- **Fachbegriff:** Aufopferungs-Mythos
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — eine **gesunde Pflegekraft** ist die Basis **guter Pflege**. Wer sich selbst vernachlässigt, brennt aus (Burnout) und gefährdet Patienten-Sicherheit. Das PflBG stellt **deine** Gesundheit explizit als Kompetenzbereich heraus (V.2 — Eigengesundheit). Merke: Selbstfürsorge = Professionalität."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — eine **gesunde Pflegekraft** ist die Grundlage für **gute Pflege**. Wer sich selbst vergisst, brennt aus (Burnout) und kann Patienten gefährden. Das PflBG sagt klar: **Deine** Gesundheit ist Teil der Ausbildung (V.2). Merke: Selbstfürsorge ist Professionalität."

**D2: "Ein Burnout kommt plötzlich — man kann ihn nicht verhindern"**
- **Fachbegriff:** Schicksal-Glaube
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — Burnout entwickelt sich **schleichend** über Monate/Jahre. Frühzeichen: Erschöpfung, Zynismus, reduzierte Leistungsfähigkeit. Prävention möglich: Grenzen setzen, Supervision, soziales Netz, Selbstfürsorge. Das Maslach-Modell zeigt: Burnout ist ein **Prozess**, kein Schlag. Merke: Früh erkennen."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — Burnout kommt **langsam** (Monate, Jahre). Frühe Zeichen: müde, zynisch, weniger leistungsfähig. Prävention geht: Grenzen setzen, Supervision nutzen, Freunde haben, auf sich achten. Das Maslach-Modell zeigt: Burnout ist ein **Prozess**. Merke: Früh bemerken."

**D3: "Mit meinem Kohärenzgefühl hat Ausbildung nichts zu tun"**
- **Fachbegriff:** Abstraktions-Fehler
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — dein Kohärenzgefühl ist **genau hier gefordert**. **Verstehbarkeit**: Verstehst du, warum du lernen musst? **Handhabbarkeit**: Hast du Hilfe? **Bedeutsamkeit**: Warum machst du Pflege? Wenn eine dieser 3 Fragen 'nein' ist, ist Burnout-Risiko erhöht. Merke: Konkret anwendbar."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — dein Kohärenzgefühl ist **genau jetzt wichtig**. **Verstehbarkeit**: Verstehst du die Ausbildung? **Handhabbarkeit**: Hast du Hilfe? **Bedeutsamkeit**: Warum machst du Pflege? Wenn eine Frage 'nein' ist, droht Burnout. Merke: Direkt anwendbar auf dich."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Als Pflege-Auszubildende hast du erhöhte Risiken (Schicht, körperlich, emotional, Doppelbelastung). Selbstfürsorge ist Teil professioneller Pflege (PflBG V.2). Salutogenese auf dich selbst anwenden: 3 Dimensionen (Bio-Psycho-Sozio), 3 SOC-Komponenten. Deine Gesundheit = deine Pflegequalität."

**B1 (255 Zeichen):** "Sehr gut. Pflege-Schüler haben erhöhte Risiken (Schicht, körperlich, emotional, viel zu tun). Selbstfürsorge gehört zur Pflege dazu (PflBG V.2). Benutze die Ideen auch bei dir: 3 Ebenen (bio-psycho-sozio), 3 Kohärenz-Teile. Deine Gesundheit = deine Pflegequalität."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist die eigene Gesundheit von Pflege-Auszubildenden ein eigener Kompetenzbereich im PflBG?"
- **Rückseite:** "Kompetenzbereich V.2 (Eigengesundheit). Grund: Gesunde Pflegekraft = Basis für Patientensicherheit und Pflegequalität. Prävention von Burnout."
- **Kategorie:** fakt

---

## Zeit-Budget-Check

**Zielzeit Thema:** 371 Min (15 UE × 45 × 0,55)
**Summe Bausteine (Stufe 2+3):** ~50 Min (12 Bausteine × ~4 Min)
**Verbleibend für Situationen + Übungs-Steps:** ~320 Min

→ PASS. Große Reserve für Sessionplan (Beratungs-Situationen, MC-Übungen, Dialoge).

## Cluster-Querverbindungen

Einstiegsthema Cluster A (Konzeptwissen). Voraussetzung für:
- `impfungen-infektionsschutz` (baut auf IfSG, Präventionsebenen)
- `betriebliche-gesundheitsfoerderung` (baut auf Ottawa-Charta, § 20b SGB V)
- `gesundheitsfoerderung-patienten` (baut auf Salutogenese, Ressourcen-Orientierung)
- `patientenberatung` (baut auf Health Literacy)

In allen CE-04-Situationen wirksam — Basis-Wissen.
