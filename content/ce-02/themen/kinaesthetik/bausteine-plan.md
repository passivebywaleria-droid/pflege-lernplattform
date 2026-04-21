# Wissensbausteine: Kinästhetik

## Metadaten
- themaId: `kinaesthetik`
- ceId: `ce-02`
- cluster: B (Mobilität)
- wissensart: handlung
- geschätzteUE: 5 (Zielzeit: 5 × 45 × 0,55 = 124 Min App-Content)
- voraussetzungen: [] (Einstiegsthema in Cluster B)
- bausteineAnzahl: 13 (Mikro-Bausteine)
- erstellt: 2026-04-21 (Pipeline v9 — CE-02)

---

## Bloom-Verteilung (Ziel vs. Ist)

| Bloom | Ziel | Ist (13 Bausteine) |
|-------|------|--------------------|
| 1-2 | max 20% | 15 % (B2 Übersicht, B11 Merkregel) |
| 3-4 | min 55% | 62 % (B3–B5, B7, B9, B10, B12) |
| 5-6 | min 15% | 23 % (B6, B8, B13) |

**Gesamt-Zeitbudget (Baustein-Lernzeit, Stufe 2+3):** 60 Min (im Korridor 60–80 Min).

---

## Bild-Slot-Übersicht (imageSlots)

Kinästhetik ist hochvisuell. Plan: **8 imageSlots** (SVG-Schemata für Körpermodell, Copic-Szenen für Transfer/Drehen, before/after-Vergleiche für Hebe- vs. kinästhetische Technik).

| # | Slot-ID | Typ | Inhalt |
|---|---------|-----|--------|
| S1 | `kinaesthetik-6-konzepte-schema` | SVG | 6 Konzepte als Hexagon-Übersicht mit Icons |
| S2 | `kinaesthetik-7-massen-6-zwischenraeume` | SVG | Körperumriss mit 7 farbigen Massen + 6 Zwischenräumen |
| S3 | `transfer-bett-stuhl-7-schritte` | Copic/Sequence | 7-Bild-Sequenz: Umgebung → Kante → Aufstehen → Drehen → Absitzen |
| S4 | `drehen-seitenlage-schritte` | Copic/Sequence | 5-Bild-Sequenz: Bein aufstellen → Arm legen → Rollen → Landen → Positionieren |
| S5 | `griffpunkte-ampel` | SVG | Körperumriss mit grünen (Becken/Schulterblatt/Fersenbein) und roten Zonen (Achsel/Taille/Handgelenk) |
| S6 | `hebetechnik-vs-kinaesthetik-beforeafter` | Copic/Comparison | 2-Bild-Vergleich: Pflegekraft gebeugt hebt vs. aufrecht verlagert Gewicht |
| S7 | `ziehen-vs-druecken-schema` | SVG | Pfeile für Zug und Druck am Körpermodell (Aufstehen: Druck; Drehen: Zug) |
| S8 | `arbeitshaltung-rueckenpraevention` | Copic | Pflegekraft im korrekten Stand (breite Basis, Knie gebeugt, Bett hoch) vor Bett |

---

## Baustein 1: was-ist-kinaesthetik

### bausteinId: `kinaesthetik-was-ist-kinaesthetik`

### Metadaten
- **bloomLevel:** 2
- **wissensart:** definition
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]
- **imageSlot:** S6 (Hebetechnik vs. Kinästhetik — before/after)

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, du willst einer älteren Person aus einem tiefen Sessel aufhelfen. Hebst du sie — oder was machst du anders?"
- **Erwartete Antwort:** (Offen) — aktiviert Alltagserfahrung, leitet zu Eigenbewegung nutzen.
- **Step-Typ:** freetext (kurz, 1-2 Sätze)

### Stufe 2 — Hinweis
- **Text (C1):** "Kinästhetik ist kein Hebe-Trick, sondern ein Bewegungskonzept. Du aktivierst die Eigenbewegung des Patienten und begleitest sie — du trägst ihn nicht. Entwickelt wurde Kinästhetik von Hatch und Maietta, heute Teil des Expertenstandards Mobilität (DNQP 2020)."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: beforeafter — Hebetechnik vs. Kinästhetik)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `text` (displayFormat: scenario)
- **Inhalt (C1, 500-800 Zeichen):**
  "Kinästhetik ist ein Bewegungskonzept, das in den 1970er Jahren von den amerikanischen Tänzern Frank Hatch und Lenny Maietta entwickelt wurde. Die zentrale Idee: Pflegekräfte bewegen Patienten nicht durch Heben, sondern durch gezieltes Aktivieren und Begleiten ihrer Eigenbewegung. Auch schwerkranke Menschen haben Rest-Eigenbewegung — und die lässt sich nutzen. Für dich als Pflegekraft heißt das: Du arbeitest mit dem Patienten, nicht gegen sein Gewicht. Das schont deinen Rücken und aktiviert den Patienten. Routine-Hebetechniken mit gebeugtem Rücken sind in der modernen Pflege obsolet — der Expertenstandard Mobilität (DNQP 2020) empfiehlt ausdrücklich bewegungsfördernde Konzepte wie Kinästhetik. Ausnahme: vollständig bewusstlose Menschen, hier kommt ein Lifter zum Einsatz."
- **Inhalt (B1, 400-600 Zeichen):**
  "Kinästhetik ist ein Plan, wie du Patienten bewegst. Die wichtigste Regel: Du hebst den Patienten nicht. Du hilfst ihm, sich selbst zu bewegen. Auch kranke Menschen können oft noch etwas selbst machen. Dieses bisschen nutzt du. Das ist gut für den Patienten — er bleibt aktiv. Und es ist gut für dich — dein Rücken wird geschont. Heben mit krummem Rücken ist heute verboten. Das steht auch im Experten-Standard Mobilität (DNQP 2020). Nur wenn ein Patient gar nicht mehr mitmachen kann, nutzt du einen Lifter (eine kleine Hebe-Maschine)."
- **Glossar-Begriffe:** [Kinästhetik, Eigenbewegung, Hebetechnik, DNQP]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren
- `D1`: **"Kinästhetik ist eine Hebetechnik für Pflegende"**
  - Fachbegriff: "Technik-Verwechslung"
  - **Feedback (C1):** "Naher dran als du denkst — aber genau umgekehrt. Kinästhetik ersetzt das Heben; sie ist ein Bewegungskonzept. Der Unterschied: Beim Heben trägst du den Patienten, bei Kinästhetik aktivierst du seine Eigenbewegung und begleitest sie. Merke: Kinästhetik = mit dem Patienten bewegen, nicht ihn bewegen."
  - **Feedback (B1):** (B1-Dozentin ergänzt)

- `D2`: **"Kinästhetik funktioniert nur bei mobilen Patienten"**
  - Fachbegriff: "Mobilitäts-Schwellenwert-Fehler"
  - **Feedback (C1):** "Nicht ganz — auch schwer betroffene Menschen haben Rest-Eigenbewegung. Ein minimales Kopfdrehen, ein Augenblinzeln, ein Fuß-Zucken. Diese Reste lassen sich nutzen. Nur bei kompletter Bewusstlosigkeit brauchst du einen Lifter. Merke: Kinästhetik startet mit dem, was da ist."
  - **Feedback (B1):** (B1-Dozentin ergänzt)

- `D3`: **"Kinästhetik dauert länger als klassisches Heben"**
  - Fachbegriff: "Effizienz-Mythos"
  - **Feedback (C1):** "Im Anfang ja, mit etwas Übung nicht mehr. Und selbst wenn: Du bewahrst deinen Rücken und aktivierst den Patienten. Kurzfristig 30 Sekunden mehr, langfristig Jahre weniger Rückenschmerzen. Merke: 'Schnell heben' ist eine Milchmädchenrechnung."
  - **Feedback (B1):** (B1-Dozentin ergänzt)

### Richtig-Feedback
- **Feedback (C1):** "Richtig. Kinästhetik bedeutet: du aktivierst die Eigenbewegung des Patienten und begleitest sie, statt ihn zu tragen. Das schützt deinen Rücken und den Patienten vor Deaktivierung. Sogar der DNQP-Expertenstandard Mobilität (2020) empfiehlt diese Art zu arbeiten. Merke: Pflege mit statt Pflege gegen das Gewicht."
- **Feedback (B1):** (B1-Dozentin ergänzt)

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Kinästhetik — und wodurch unterscheidet sie sich vom Heben?"
- **Rückseite:** "Bewegungskonzept nach Hatch/Maietta. Pflegekraft aktiviert und begleitet Eigenbewegung, hebt nicht. Empfohlen im DNQP-Expertenstandard Mobilität (2020)."
- **Kategorie:** fachbegriff

### Glossar-Beitrag
- **Begriff:** Kinästhetik
- **Definition (C1):** "Bewegungskonzept nach Hatch/Maietta, das die Eigenbewegung des Patienten aktiviert und begleitet statt ihn zu heben."
- **Quelle:** Hatch/Maietta, Kinaesthetik-Grundkonzept

---

## Baustein 2: sechs-konzepte-uebersicht

### bausteinId: `kinaesthetik-sechs-konzepte-uebersicht`

### Metadaten
- **bloomLevel:** 2
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-02]
- **imageSlot:** S1 (6 Konzepte als Hexagon-Schema)

### Stufe 1 — Denkfrage
- **Frage:** "Wenn du einen Patienten bewegst — auf was achtest du alles gleichzeitig? Sammle mindestens 3 Dinge."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis
- **Text (C1):** "Kinästhetik kennt 6 Konzepte, die bei jeder Bewegung gleichzeitig wirken: Interaktion, Funktionale Anatomie, Menschliche Bewegung, Anstrengung, Menschliche Funktion, Umgebung. Keine Reihenfolge — alle parallel. Sie helfen dir, eine Bewegungs-Situation zu analysieren."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `reveal`
- **Inhalt (C1, 500-800 Zeichen):**
  "Die 6 Kinästhetik-Konzepte sind ein Analyse-Raster. Du legst es über jede Bewegungssituation, um zu verstehen, was gerade passiert und was du verbessern kannst. (1) Interaktion: Wie läuft der Dialog zwischen dir und dem Patienten? (2) Funktionale Anatomie: Welche Knochen tragen, welche Muskeln bewegen? (3) Menschliche Bewegung: Wie verlagert der Patient sein Gewicht? (4) Anstrengung: Wird gezogen oder gedrückt? (5) Menschliche Funktion: Welches Alltags-Bewegungsmuster steckt hinter der Handlung? (6) Umgebung: Wie hilft oder hindert die Umgebung? Alle 6 Konzepte wirken IMMER gleichzeitig — sie sind keine Checkliste, die du abhakst."
- **Inhalt (B1, 400-600 Zeichen):**
  "Es gibt 6 Konzepte in der Kinästhetik. Sie sind wie eine Brille — du schaust mit ihnen auf jede Bewegung. 1. Interaktion: Wie redest du mit dem Patienten? 2. Anatomie: Welche Knochen sind wichtig? Welche Muskeln bewegen? 3. Menschliche Bewegung: Wie verlagert der Patient sein Gewicht? 4. Anstrengung: Ziehst du oder drückst du? 5. Funktion: Was für eine Alltags-Bewegung ist das (essen? aufstehen?)? 6. Umgebung: Hilft oder stört die Umgebung (Bett zu tief? Stuhl zu weit weg?)? Alle 6 Konzepte sind IMMER da — gleichzeitig."
- **Glossar-Begriffe:** [Funktionale Anatomie, Interaktion (Kinästhetik), Anstrengung (Kinästhetik)]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren
- `D1`: **"Die 6 Konzepte sind eine Reihenfolge, die man nacheinander abarbeitet"**
  - Fachbegriff: "Sequenz-Fehlschluss"
  - **Feedback (C1):** "Fast — die 6 Konzepte sind KEINE Reihenfolge, sie wirken alle gleichzeitig. Wenn du einen Patienten transferierst, passiert Interaktion, Anatomie-Nutzung, Gewichtsverlagerung, Zug/Druck, Funktion und Umgebung alles in derselben Sekunde. Merke: parallele Brille, nicht sequenzielle Checkliste."

- `D2`: **"Nur 1-2 Konzepte sind pro Situation relevant"**
  - Fachbegriff: "Reduktions-Irrtum"
  - **Feedback (C1):** "Nicht ganz — alle 6 sind immer präsent. Manche dominieren (z.B. beim Aufstehen dominiert Anstrengung), aber keines fällt weg. Ohne Interaktion bist du brutal; ohne Umgebung stolperst du; ohne Anatomie verletzt du. Merke: 6 Konzepte, kein Rabatt."

- `D3`: **"Die Reihenfolge ist Interaktion → Anatomie → Bewegung → Anstrengung → Funktion → Umgebung"**
  - Fachbegriff: "Pseudo-Reihenfolge"
  - **Feedback (C1):** "Nicht ganz — es gibt keine offizielle Reihenfolge. Die 6 Konzepte werden meist in dieser Form aufgezählt, aber das ist nur didaktisch. In der Anwendung laufen sie parallel. Merke: Die Nummerierung ist keine Prozess-Schritt-Folge."

### Richtig-Feedback
- **Feedback (C1):** "Genau. Die 6 Kinästhetik-Konzepte sind ein Analyse-Raster, das bei jeder Bewegung gleichzeitig wirkt. Interaktion, Funktionale Anatomie, Menschliche Bewegung, Anstrengung, Menschliche Funktion und Umgebung bilden zusammen den kinästhetischen Blick auf eine Pflegesituation."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 6 Kinästhetik-Konzepte."
- **Rückseite:** "Interaktion, Funktionale Anatomie, Menschliche Bewegung, Anstrengung, Menschliche Funktion, Umgebung."
- **Kategorie:** fakt

---

## Baustein 3: interaktion

### bausteinId: `kinaesthetik-interaktion`

### Metadaten
- **bloomLevel:** 3
- **wissensart:** konzept + handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Kollege fasst einen Patienten von hinten an und dreht ihn auf die Seite, ohne etwas zu sagen. Was kann schief gehen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis
- **Text (C1):** "Interaktion meint den Dialog zwischen dir und dem Patienten während der Bewegung. Du kündigst Bewegung an, begleitest sie verbal, kommunizierst über Berührung und Gewichtsverlagerung. Wichtig: Interaktion ist vor allem taktil, nicht nur verbal. Der Patient soll spüren, was kommt."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `dialog`
- **Inhalt (C1, 500-800 Zeichen):**
  "Interaktion ist das erste Konzept der Kinästhetik — und das, was am häufigsten vergessen wird. Jede Bewegung ist ein Dialog zwischen dir und dem Patienten. Du kündigst an, was kommt ('Ich helfe Ihnen gleich auf die Seite, ich lege Ihren rechten Arm jetzt über die Brust'). Du spürst, was der Patient tut — wenn er anspannt, wartest du. Wenn er mitkommt, führst du weiter. Die Berührung selbst ist Kommunikation: fester Griff sagt 'jetzt', loser Griff sagt 'Pause'. Bei bewusstseinseingeschränkten Menschen läuft Interaktion fast nur noch über Berührung, Tempo und Druck — der Patient reagiert trotzdem. Zu viel Reden kann übrigens stören: manchmal reicht ein kurzer Satz, dann Tun."
- **Inhalt (B1, 400-600 Zeichen):**
  "Bei jeder Bewegung sprichst du mit dem Patienten. Du sagst, was du gleich machst: 'Ich helfe Ihnen jetzt auf die Seite.' Du fasst ihn fest an, aber nicht zu fest. Du wartest, wenn er zögert. Du bewegst langsam, wenn er Angst hat. Das nennt man Interaktion. Auch bei Patienten, die nichts sagen können, redest du mit ihnen. Du merkst ihre Antwort an ihrem Körper: ist er angespannt? Locker? Zieht er sich zurück? Nicht nur sprechen ist wichtig — auch Berühren und Tempo sind Sprache."
- **Glossar-Begriffe:** [Interaktion (Kinästhetik), taktile Kommunikation]

### Misconceptions → Distraktoren
- `D1`: **"Interaktion heißt viel mit dem Patienten reden"**
  - Fachbegriff: "Verbal-Dominanz"
  - **Feedback (C1):** "Fast — aber übertrieben. Interaktion ist zu 70 Prozent körperlich (Berührung, Tempo, Druck) und nur zu 30 Prozent verbal. Zu viel Reden überfordert, gerade Demente oder Hörbeeinträchtigte. Merke: kurz sprechen, viel spüren."

- `D2`: **"Bei bewusstlosen Patienten entfällt Interaktion"**
  - Fachbegriff: "Bewusstseins-Missverständnis"
  - **Feedback (C1):** "Nicht ganz — auch bewusstlose Menschen nehmen Berührung und Tempo wahr (basales Reaktionsniveau). Die Interaktion läuft dann taktil. Ein hastiger Griff erzeugt Gegenspannung selbst im Koma. Merke: Körper reagiert immer, Bewusstsein nicht immer."

- `D3`: **"Ich muss erst fertig kommunizieren, dann bewegen"**
  - Fachbegriff: "Sequenz-Fehler"
  - **Feedback (C1):** "Nicht ganz — Interaktion läuft während der Bewegung, nicht nur vorher. Kurzer Satz als Ankündigung, dann gemeinsam bewegen mit taktiler Führung. Merke: Dialog UND Bewegung parallel."

### Richtig-Feedback
- **Feedback (C1):** "Gut erkannt. Ohne Ankündigung erschreckt der Patient, spannt reflexhaft an und kann nicht mitmachen. Interaktion verhindert genau das: du kündigst an, spürst die Reaktion und passt dich an. Das macht die Bewegung sicher und aktivierend — gleichzeitig."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet Interaktion als Kinästhetik-Konzept?"
- **Rückseite:** "Dialog zwischen Pflegekraft und Patient während der Bewegung — verbal, taktil und über Tempo/Druck."
- **Kategorie:** fachbegriff

---

## Baustein 4: funktionale-anatomie-griffpunkte

### bausteinId: `kinaesthetik-funktionale-anatomie`

### Metadaten
- **bloomLevel:** 4
- **wissensart:** konzept + anatomie + handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04, F-09]
- **imageSlot:** S5 (Griffpunkte-Ampel — grüne + rote Zonen)

### Stufe 1 — Denkfrage
- **Frage:** "Du willst einem Patienten beim Aufrichten helfen. Wo fasst du ihn NICHT an — und warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis
- **Text (C1):** "Funktionale Anatomie teilt den Körper in 7 Massen (Kopf, Brustkorb, Becken, 2 Arme, 2 Beine) und 6 Zwischenräume (Hals, Taille, 2 Schultergelenke, 2 Hüftgelenke). Regel: Knochen tragen, Muskeln bewegen. Du fasst an tragenden Strukturen an (Beckenkamm, Schulterblatt, Fersenbein) — nie in Zwischenräumen (Achseln, Taille) oder an Muskelbäuchen."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `hotspot` (auf Bild S5 — Körperumriss)
- **Inhalt (C1, 500-800 Zeichen):**
  "In der Kinästhetik ist der Körper in 7 Massen gegliedert — Kopf, Brustkorb, Becken, beide Arme, beide Beine. Dazwischen liegen 6 Zwischenräume: Hals, Taille (zwischen Brustkorb und Becken) und die 4 großen Gelenke (2 × Schulter, 2 × Hüfte). Für dich heißt das: Du fasst an den Massen an, nicht an den Zwischenräumen. Gute Griffpunkte sind zum Beispiel der Beckenkamm (seitlich oben am Becken), die Schulterblätter (von hinten), der Brustkorb-Seitenrand oder das Fersenbein. Verbotene Zonen sind die Achselhöhle (Schulter-Luxationsgefahr, besonders nach Schlaganfall), die Taille (drückt Organe), das Handgelenk (Hebel auf Unterarmknochen) und alle Muskelbäuche am Oberarm und Oberschenkel (keine tragenden Strukturen)."
- **Inhalt (B1, 400-600 Zeichen):**
  "Der Körper hat 7 große Teile: Kopf, Brustkorb, Becken, 2 Arme, 2 Beine. Dazwischen sind 6 Zwischen-Räume: Hals, Taille und die 4 großen Gelenke (Schultern und Hüften). Wichtig: Knochen tragen, Muskeln bewegen. Du fasst am Knochen an, nicht am Muskel. Gute Stellen: Becken-Seite (Beckenkamm), Schulter-Rücken (Schulterblatt), Brust-Seite. Schlechte Stellen: Achsel (Schulter kann raus-springen), Taille (tut weh), Hand-Gelenk (kann brechen)."
- **Glossar-Begriffe:** [Beckenkamm, Schulterblatt, Funktionale Anatomie, 7 Massen, 6 Zwischenräume]

### Misconceptions → Distraktoren
- `D1`: **"Der Achselgriff ist ein sicherer Standard-Griff"**
  - Fachbegriff: "Achselgriff-Tradition"
  - **Feedback (C1):** "Nein, im Gegenteil. Der Achselgriff belastet den Humeruskopf — bei Schlaganfall-Patienten droht Schulter-Subluxation, bei älteren Patienten Schmerzen und blaue Flecken. Moderne Pflege greift am Schulterblatt oder Brustkorb-Seitenrand. Merke: Achseln sind Tabu."

- `D2`: **"Man kann den Patienten am Arm hochziehen"**
  - Fachbegriff: "Arm-Hebel-Irrtum"
  - **Feedback (C1):** "Nicht ganz — der Arm ist kein Hebel für den Rumpf. Du ziehst an einem Zwischenraum (Schulter-Gelenk), nicht an einer Masse. Bei älteren Patienten drohen Luxationen und Frakturen. Greif stattdessen an Brustkorb-Seite oder Schulterblatt. Merke: Arm nur führen, nie hochziehen."

- `D3`: **"Taille ist ein guter Griffpunkt, weil in der Mitte"**
  - Fachbegriff: "Mittelpunkt-Fehlschluss"
  - **Feedback (C1):** "Nicht ganz — Taille ist ein Zwischenraum, keine Masse. Wenn du dort greifst, drückst du auf Weichteile und Organe. Greif knapp darunter am Beckenkamm, knapp darüber am unteren Brustkorb. Merke: Taille umgehen, Becken und Brustkorb nutzen."

### Richtig-Feedback
- **Feedback (C1):** "Perfekt. Verbotene Zonen sind Achselhöhle (Schulter-Verletzungsgefahr), Taille (Organdruck) und Handgelenk (Hebel). Gute Griffpunkte sind Beckenkamm, Schulterblatt, Brustkorb-Seitenrand und Fersenbein. Damit bewegst du den Patienten sicher und schonst seine Gelenke."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 3 Körperstellen dürfen NIE als Griffpunkt genutzt werden — und warum?"
- **Rückseite:** "Achselhöhle (Schulter-Luxationsgefahr), Taille (Organdruck), Handgelenk (Hebel auf Unterarmknochen). Stattdessen: Beckenkamm, Schulterblatt, Fersenbein."
- **Kategorie:** handlung

---

## Baustein 5: eigenbewegung-nutzen

### bausteinId: `kinaesthetik-eigenbewegung-nutzen`

### Metadaten
- **bloomLevel:** 4
- **wissensart:** konzept + handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]
- **imageSlot:** S2 (Körpermodell mit 7 Massen)

### Stufe 1 — Denkfrage
- **Frage:** "Frau K. kann fast gar nichts mehr selbst. Welche kleinste Eigenbewegung kannst du trotzdem nutzen, um sie im Bett nach oben zu bewegen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis
- **Text (C1):** "Eigenbewegung bedeutet: jede Bewegung, die der Patient selbst startet oder mitmacht. Auch minimal. Ein Kopfdrehen, ein Fuß-Aufstellen, ein Anheben des Beckens um 2 Zentimeter. Die Pflegekraft sucht diese Rest-Bewegung, fragt den Patienten aktiv danach und verstärkt sie durch Begleiten."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `comparison` (Patient mit und ohne Eigenbewegung nutzen)
- **Inhalt (C1, 500-800 Zeichen):**
  "Eigenbewegung zu nutzen ist der Kern der Kinästhetik. Die Frage ist nicht: 'Wie bewege ICH den Patienten?', sondern 'Was kann ER selbst beitragen?' Auch wenn die Antwort nur 5 Prozent ist — dann nutzt du diese 5 Prozent und ergänzt 95 Prozent. Beispiele für nutzbare Eigenbewegung: Der Patient kann den Kopf drehen — dann startest du das Seitlage-Drehen mit seinem Blick ('Schauen Sie zu mir'). Er kann das Bein aufstellen — dann lässt du ihn das machen, bevor du drehst. Er kann das Becken kurz anheben — dann schiebst du das Rutschtuch darunter. Wenn du diese Eigenbewegung ignorierst, wird der Patient nicht nur schwerer, er baut auch Muskeln ab — innerhalb von 3 Tagen Bettruhe verliert ein älterer Mensch messbar Muskelkraft. Daraus folgt: aktivierende Pflege ist keine Kosmetik, sie verhindert Mobilitätsverlust."
- **Inhalt (B1, 400-600 Zeichen):**
  "Eigen-Bewegung heißt: der Patient macht selbst etwas mit. Auch wenn er fast alles nicht mehr kann — meistens kann er noch etwas. Zum Beispiel den Kopf drehen. Oder das Bein aufstellen. Oder das Becken kurz anheben. Diese kleinen Reste musst du finden und nutzen. Wenn du sie ignorierst, wird der Patient schwächer. Schon nach 3 Tagen nur Liegen baut ein älterer Mensch Muskel-Kraft ab. Aktive Pflege ist also nicht 'nett' — sie verhindert, dass der Patient immer schwächer wird."

### Misconceptions → Distraktoren
- `D1`: **"Wenn ein Patient nicht helfen kann, mache ich alles selbst"**
  - Fachbegriff: "Alles-oder-nichts-Fehler"
  - **Feedback (C1):** "Nicht ganz — auch minimal eingeschränkte Patienten haben Reste: Kopfdrehen, Augenblinzeln, Fuß-Zucken. Du suchst diese aktiv. Komplett 'alles machen' gilt nur bei vollständiger Bewusstlosigkeit oder bei Vollnarkose. Merke: Erst fragen, dann ersetzen."

- `D2`: **"Patient fragen nach Mithilfe nervt ihn"**
  - Fachbegriff: "Höflichkeits-Missverständnis"
  - **Feedback (C1):** "Nicht ganz — die Mehrheit der Patienten möchte ausdrücklich mithelfen, wenn sie es können. Nicht fragen erzeugt Hilflosigkeit. Merke: Aktivieren ist Respekt, nicht Nerven."

- `D3`: **"3 Tage Bettruhe schaden nichts, der Muskel kommt zurück"**
  - Fachbegriff: "Reversibilitäts-Irrtum"
  - **Feedback (C1):** "Nicht ganz — bei älteren Menschen reichen 3 Tage strikter Bettruhe für messbaren Muskelabbau. Das Zurückgewinnen dauert deutlich länger als der Verlust. Merke: Immobilität ist keine Pause, sie ist Verlust."

### Richtig-Feedback
- **Feedback (C1):** "Genau. Frau K. kann vielleicht den Kopf drehen, den Fuß bewegen oder das Becken einen Moment anheben. Jede dieser Mini-Bewegungen ist ein Ansatzpunkt. Du nutzt sie als Startimpuls, ergänzt die Restbewegung und verhinderst so Muskelabbau. Auch 5 Prozent Eigenanteil sind besser als 0."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist Eigenbewegung auch bei sehr schwachen Patienten wichtig?"
- **Rückseite:** "Schon 3 Tage strikte Bettruhe verursachen bei älteren Menschen messbaren Muskelabbau. Auch minimale Eigenbewegung (Kopf, Fuß, Becken) verhindert das."
- **Kategorie:** handlung

---

## Baustein 6: anstrengung-ziehen-druecken

### bausteinId: `kinaesthetik-anstrengung-ziehen-druecken`

### Metadaten
- **bloomLevel:** 5
- **wissensart:** konzept + handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]
- **imageSlot:** S7 (Ziehen vs. Drücken Schema mit Pfeilen)

### Stufe 1 — Denkfrage
- **Frage:** "Du willst einem Patienten helfen aufzustehen. Ziehst du ihn hoch — oder lässt du ihn drücken? Warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis
- **Text (C1):** "Bewegung nutzt entweder Zug oder Druck — nie beides gleichzeitig für dieselbe Bewegung. Aufstehen: Beine drücken in den Boden. Sich-Hochziehen am Bettgalgen: Arme ziehen den Körper. Wenn du als Pflegekraft ziehst, während der Patient instinktiv drückt (oder umgekehrt), entsteht Gegenspannung und beide verlieren Kraft."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: procontra — Zug vs. Druck)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `matrix` (Aktivität × Zug oder Druck)
- **Inhalt (C1, 500-800 Zeichen):**
  "Jede Bewegung hat eine Hauptrichtung: Zug oder Druck. Beides gleichzeitig funktioniert nicht. Aufstehen aus dem Sitz: Der Patient drückt mit den Beinen in den Boden, der Rumpf folgt. Deine Aufgabe: Druck-Richtung unterstützen, nicht am Oberkörper ziehen. Sich nach oben im Bett bewegen: Der Patient kann mit dem aufgestellten Bein in die Matratze drücken und sich schieben — deine Hände begleiten am Becken. Sich-Umdrehen im Bett: hier wirkt Zug, weil die Schulter auf die Seite rollt. Klassischer Fehler: Die Pflegekraft zieht am Arm beim Aufstehen. Der Patient drückt instinktiv mit den Beinen — aber jetzt arbeiten zwei Kräfte gegeneinander. Ergebnis: Patient wird 'schwerer', beide kämpfen. Lösung: Immer zuerst klären, was der Patient TUT, dann die gleiche Richtung verstärken."
- **Inhalt (B1, 400-600 Zeichen):**
  "Bei jeder Bewegung gibt es eine Richtung: Ziehen oder Drücken. Aufstehen: Beine drücken in den Boden. Sich am Bett-Galgen hochziehen: Arme ziehen den Körper nach oben. Beides gleichzeitig geht nicht! Wenn der Patient drückt und du ziehst — ihr arbeitet gegen-einander. Der Patient wird 'schwerer'. Deshalb: Immer erst sehen, was der Patient macht. Dann die gleiche Richtung helfen. Aufstehen = mit-drücken. Drehen = mit-ziehen."

### Misconceptions → Distraktoren
- `D1`: **"Ziehen ist immer sanfter als Drücken"**
  - Fachbegriff: "Ziehen-Romantik"
  - **Feedback (C1):** "Nicht ganz — Ziehen oder Drücken hängt von der Bewegung ab, nicht von der Sanftheit. Beim Aufstehen ist Ziehen am Oberkörper sogar gefährlich, weil der Patient unten gleichzeitig drückt. Dann wirken zwei Kräfte gegeneinander. Merke: Nicht 'sanft' vs. 'hart', sondern 'passt zur Bewegungsrichtung'."

- `D2`: **"Ich ziehe und der Patient drückt gleichzeitig — verstärkt sich gegenseitig"**
  - Fachbegriff: "Additions-Irrtum"
  - **Feedback (C1):** "Nein, entgegengesetzte Kräfte heben sich auf. Stell dir Tauziehen vor: wenn beide Teams ziehen, bewegt sich das Seil gar nicht. Bei Mensch und Patient dasselbe Prinzip. Merke: Eine Richtung, nicht beide."

- `D3`: **"Klassisches Heben mit gebeugtem Rücken ist auch ein Druck-Prinzip"**
  - Fachbegriff: "Druck-Etikett-Missverständnis"
  - **Feedback (C1):** "Nicht ganz — beim klassischen Heben wird der Rücken als Hebel missbraucht, nicht Druck durch die Beine. Kinästhetik nutzt Beinkraft und Gewichtsverlagerung, nicht Rückenhebelung. Merke: Druck ja — aber aus Beinen, nicht aus Rücken."

### Richtig-Feedback
- **Feedback (C1):** "Gut durchdacht. Aufstehen läuft über Druck: Der Patient drückt mit den Beinen in den Boden, der Rumpf folgt. Deine Aufgabe ist, diese Druck-Richtung zu begleiten — nicht am Oberkörper zu ziehen. Wenn du ziehen würdest, entstünde Gegenspannung, und beide würden mehr Kraft brauchen. Merke: Zugunterstützung nur, wenn die Bewegung selbst ein Ziehen ist (z.B. am Bettgalgen)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Ziehen oder Drücken — welches Prinzip nutzt du beim Aufstehen aus dem Sitz?"
- **Rückseite:** "Drücken: Die Beine drücken in den Boden, der Rumpf folgt. Ziehen am Oberkörper würde Gegenspannung erzeugen."
- **Kategorie:** handlung

---

## Baustein 7: funktionale-anatomie-knochen-muskeln

### bausteinId: `kinaesthetik-knochen-tragen-muskeln-bewegen`

### Metadaten
- **bloomLevel:** 3
- **wissensart:** anatomie + konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-04, F-09]
- **imageSlot:** S2 (7 Massen und 6 Zwischenräume)

### Stufe 1 — Denkfrage
- **Frage:** "Was macht ein Knochen? Was macht ein Muskel? Und was heißt das für deine Hände, wenn du den Patienten bewegst?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis
- **Text (C1):** "Grundregel: Knochen tragen, Muskeln bewegen. Das Skelett hält das Gewicht, die Muskeln verlagern es. Für dich heißt das: Du fasst an tragenden Strukturen an (Knochen, Knochenvorsprünge wie Beckenkamm, Schulterblatt, Brustkorb-Seitenrand) — nicht an Muskeln (Bauch, Oberarm-Außenseite, Oberschenkel-Vorderseite)."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: mnemonic — "KTM: Knochen Tragen, Muskeln bewegen")

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `reveal`
- **Inhalt (C1, 500-800 Zeichen):**
  "Das menschliche Skelett ist dein Anker. Wenn du einen Patienten bewegst, lenkst du seine Masse über tragende Strukturen — das sind die großen Knochen (Becken, Brustkorb) und deren Vorsprünge (Beckenkamm, Schulterblatt). Muskeln sind dafür nicht geeignet: sie sind weich, druckempfindlich und erzeugen reflexhafte Gegenspannung, wenn man sie quetscht. Beispiel: Wenn du einen Patienten am Oberarm-Muskel packst, spannt er reflexhaft an und wird schwerer. Wenn du am Schulterblatt anlegst, spürt er die Bewegung als Führung und kann mitgehen. Zweites Beispiel: Der Beckenkamm ist knochig-tragend — ein fester Griff dort ist stabil und stört keine Organe. Die Taille darüber ist weich — Griff dort drückt Leber, Milz oder Darm."
- **Inhalt (B1, 400-600 Zeichen):**
  "Regel: Knochen tragen — Muskeln bewegen. Das Skelett hält das Gewicht. Die Muskeln verschieben es. Für dich heißt das: Du fasst am Knochen an, nicht am Muskel. Gute Orte: Becken-Seite (Beckenkamm), Schulter-Rücken (Schulterblatt), Brust-Seite. Schlechte Orte: Ober-Arm-Muskel, Ober-Schenkel-Muskel, Bauch. Warum? Wenn du den Muskel drückst, zieht sich der Muskel zusammen. Der Patient wird steif. Er kann sich nicht mehr bewegen. Wenn du den Knochen anfasst, spürt er nur die Richtung. Er kann mitmachen."
- **Glossar-Begriffe:** [Funktionale Anatomie, Beckenkamm, Schulterblatt]

### Misconceptions → Distraktoren
- `D1`: **"Muskeln sind gute Griffpunkte, weil sie gepolstert sind"**
  - Fachbegriff: "Polster-Irrtum"
  - **Feedback (C1):** "Nicht ganz — die 'Polsterung' ist eine Falle. Wenn du einen Muskel drückst, zieht er sich reflexhaft zusammen. Der Patient wird steif und schwerer. Tragende Knochen sind zwar härter, aber stabil und ohne Reflex-Gegenspannung. Merke: Weich heißt nicht geeignet."

- `D2`: **"Knochen-Griff ist zu hart für den Patienten"**
  - Fachbegriff: "Härte-Angst"
  - **Feedback (C1):** "Nicht ganz — ein flächiger Griff an einem knochigen Vorsprung tut nicht weh. Gefährlich sind punktueller Druck auf Muskeln oder Greifen in Zwischenräume. Geübter Kinästhetik-Griff ist komfortabel. Merke: Flächig am Knochen = sanft."

- `D3`: **"Bei Osteoporose sind Knochen-Griffe gefährlich"**
  - Fachbegriff: "Osteoporose-Fehlschluss"
  - **Feedback (C1):** "Differenziert — bei schwerer Osteoporose sind PUNKTUELLE Belastungen (z.B. scharfer Griff an Rippe) riskant. FLÄCHIGE, gut verteilte Griffe am Beckenkamm oder Schulterblatt sind sicher. Merke: Nicht Griffpunkt vermeiden — Technik anpassen."

### Richtig-Feedback
- **Feedback (C1):** "Richtig. Knochen tragen das Gewicht, Muskeln verschieben es. Deine Hände legen sich an tragende Strukturen an — dort kannst du die Masse führen, ohne Muskel-Reflexe auszulösen. Gute Griffpunkte sind Beckenkamm, Schulterblatt, Brustkorb-Seitenrand und Fersenbein. Muskelbäuche (Oberarm, Oberschenkel) und Zwischenräume (Taille, Achsel) meidest du."

### Verknüpfte Karteikarte
- **Vorderseite:** "Grundregel der funktionalen Anatomie in der Kinästhetik?"
- **Rückseite:** "Knochen tragen, Muskeln bewegen. Pflegekraft greift an tragenden Knochen/Vorsprüngen an (Beckenkamm, Schulterblatt), nicht an Muskelbäuchen."
- **Kategorie:** fakt

---

## Baustein 8: transfer-bett-stuhl

### bausteinId: `kinaesthetik-transfer-bett-stuhl`

### Metadaten
- **bloomLevel:** 5
- **wissensart:** handlung + sequenz
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-10]
- **imageSlot:** S3 (Transfer-Sequenz in 7 Schritten)

### Stufe 1 — Denkfrage
- **Frage:** "Herr M. soll vom Bett auf den Rollstuhl. Was machst du ALS ERSTES — bevor du ihn berührst?"
- **Step-Typ:** mc (4 Optionen, Misconceptions als Distraktoren)

### Stufe 2 — Hinweis
- **Text (C1):** "Ein sicherer kinästhetischer Transfer läuft in klaren Schritten ab: Umgebung vorbereiten → Patient informieren → an die Bettkante bringen → Sitz stabilisieren → Gewicht nach vorn verlagern → gemeinsam aufstehen → auf Füße drehen → absitzen. Der häufigste Fehler: zu schnell, zu ungeduldig. Das Tempo bestimmt der Patient."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `sequencing` (7-10 Schritte zum Sortieren)
- **Inhalt (C1, 500-800 Zeichen):**
  "**So transferierst du Herrn M. vom Bett in den Stuhl:**
  1. **Umgebung vorbereiten:** Rollstuhl im 45°-Winkel zum Bett, Bremsen an, Fußstützen weg. Betthöhe so einstellen, dass Füße des Patienten beim Sitzen an der Bettkante den Boden erreichen.
  2. **Informieren:** Herrn M. sagen, was gleich passiert. 'Ich helfe Ihnen auf den Rollstuhl. Wir setzen uns erst an die Bettkante, dann stehen wir gemeinsam auf.'
  3. **An die Bettkante bringen:** Beine vom Patienten über die Bettkante führen lassen (er macht mit), gleichzeitig Oberkörper seitlich aufrichten mit Unterstützung am Schulterblatt.
  4. **Sitz stabilisieren:** Kurz an der Bettkante sitzen lassen. Beide Füße Bodenkontakt. Kreislauf-Check: wird ihm schwindlig?
  5. **Gewicht nach vorn:** 'Beugen Sie sich zu mir.' Schultern kommen über die Knie. Pflegekraft umfasst am Schulterblatt.
  6. **Gemeinsames Aufstehen:** Herr M. drückt mit den Beinen, Pflegekraft begleitet in gleichem Tempo. Nicht ziehen.
  7. **Auf Füße drehen:** Kleine Schritte, beide drehen sich gemeinsam Richtung Rollstuhl.
  8. **Absitzen:** Rollstuhl fühlbar mit der Rückseite der Knie (Tasten), dann kontrolliertes Hinsetzen. Nicht plumpsen lassen."
- **Inhalt (B1, 400-600 Zeichen):**
  "**So bringst du Herrn M. vom Bett in den Stuhl:**
  1. **Vorbereiten:** Stuhl schräg ans Bett (45-Grad-Winkel). Bremsen an. Bett-Höhe so, dass die Füße auf dem Boden sind.
  2. **Sagen, was passiert:** 'Herr M., wir wechseln in den Stuhl. Erst an die Bett-Kante.'
  3. **An die Bett-Kante:** Beine über die Kante. Ober-Körper auf-richten.
  4. **Kurz sitzen:** Füße auf dem Boden. Schwindelig?
  5. **Nach vorne beugen:** Schultern über die Knie.
  6. **Auf-stehen:** Herr M. drückt mit den Beinen. Du begleitest. Nicht ziehen!
  7. **Drehen:** Kleine Schritte Richtung Stuhl.
  8. **Hinsetzen:** Stuhl spüren, dann langsam setzen."

### Misconceptions → Distraktoren
- `D1`: **"Erst den Patienten hochziehen, dann drehen"**
  - Fachbegriff: "Hebe-zuerst-Fehler"
  - **Feedback (C1):** "Nicht ganz — Transfer startet mit Umgebung und Gewichtsverlagerung, nie mit Ziehen. Der Patient drückt mit den Beinen, du begleitest seine Eigenbewegung. Ziehen am Oberkörper blockiert die Bewegung. Merke: Boden-Kontakt zuerst, dann gemeinsam aufstehen."

- `D2`: **"Der Rollstuhl muss direkt vor dem Bett stehen, damit der Weg kurz ist"**
  - Fachbegriff: "Gerader-Weg-Irrtum"
  - **Feedback (C1):** "Nicht ganz — 45°-Winkel ist besser als 0°. Bei direktem Vor-dem-Bett-Stehen muss der Patient eine 180°-Drehung machen; beim 45°-Winkel nur 90°. Weniger Drehung = weniger Sturzrisiko. Merke: 45 Grad ist der Standardwinkel."

- `D3`: **"Je schneller der Transfer, desto weniger Risiko für den Patienten"**
  - Fachbegriff: "Tempo-Irrtum"
  - **Feedback (C1):** "Umgekehrt — zu schnell erzeugt Angst, Gegenspannung und Kreislauf-Probleme. Der Transfer läuft in drei klaren Stopps: Bettkante sitzen, aufstehen, drehen+absitzen. Zwischen den Stopps: Tempo des Patienten. Merke: Kontrolliert schlägt schnell."

### Richtig-Feedback
- **Feedback (C1):** "Gute Priorisierung. Der erste Schritt ist die Umgebung: Rollstuhl im 45°-Winkel, Bremsen kontrolliert, Bett höhenrichtig eingestellt, Fußstützen weg. Erst dann informierst du Herrn M. und bringst ihn an die Bettkante. Vorbereitung ist 50 Prozent des Transfers — viele Zwischenfälle passieren, weil Umgebung nicht stimmt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 3 Hauptphasen eines kinästhetischen Transfers Bett → Stuhl."
- **Rückseite:** "1. Umgebung vorbereiten + an die Bettkante bringen. 2. Gemeinsames Aufstehen mit Gewichtsverlagerung. 3. Drehen auf den Füßen + kontrolliertes Absitzen."
- **Kategorie:** handlung

---

## Baustein 9: drehen-in-seitenlage

### bausteinId: `kinaesthetik-drehen-seitenlage`

### Metadaten
- **bloomLevel:** 4
- **wissensart:** handlung + sequenz
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-11]
- **imageSlot:** S4 (Drehen-Sequenz 5 Bilder)

### Stufe 1 — Denkfrage
- **Frage:** "Du willst Frau B. aus der Rückenlage auf die linke Seite drehen. Welches Bein stellst du zuerst auf — rechts oder links?"
- **Step-Typ:** mc (2 Optionen + Erklärung)

### Stufe 2 — Hinweis
- **Text (C1):** "Regel beim Drehen: Das Bein der GEGENseite wird aufgestellt — du drehst nach links, also stellst du das rechte Bein auf. Der gleichseitige Arm (links) wird frei gehalten, der gegenseitige (rechts) wird über die Brust gelegt. Dann rollt der Patient über das aufgestellte Bein auf die Seite — Pflegekraft begleitet am Becken."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `sequencing` (5-7 Schritte)
- **Inhalt (C1, 500-800 Zeichen):**
  "**So drehst du Frau B. aus der Rückenlage auf die linke Seite:**
  1. **Informieren:** 'Frau B., ich helfe Ihnen auf die linke Seite. Ich zähle bis drei, dann rollen wir gemeinsam.'
  2. **Gegenseitiges Bein aufstellen:** Du willst nach links drehen, also stellst du das RECHTE Bein (Gegenseite) auf — Fuß flach aufs Bett, Knie nach oben. Wenn der Patient mitmacht, lass ihn das Bein selbst aufstellen.
  3. **Arme positionieren:** Linker Arm (Drehseite) wird gestreckt seitlich neben den Körper oder leicht weg nach oben — damit sie nicht darauf landet. Rechter Arm (Gegenseite) wird locker über den Brustkorb gelegt.
  4. **Kopf mit-drehen:** Frau B. bittest du, den Kopf zuerst nach links zu drehen — der Blick führt die Bewegung.
  5. **Drehung einleiten:** Du stehst auf der Drehseite (links vom Bett). Eine Hand leicht am rechten Schulterblatt, andere Hand am rechten Beckenkamm. 'Eins, zwei, drei — auf die Seite.'
  6. **Begleiten, nicht drehen:** Der Patient rollt über das aufgestellte rechte Bein. Du führst die Richtung und bremsst, wenn es zu schnell wird.
  7. **Positionieren:** Becken und Schulter in stabilem Winkel (ca. 30° oder 90° je nach Plan), Kissen zur Lagerung."
- **Inhalt (B1, 400-600 Zeichen):**
  "**So drehst du Frau B. von Rücken auf die linke Seite:**
  1. **Sagen, was passiert:** 'Frau B., wir drehen uns gemeinsam auf die linke Seite.'
  2. **Bein aufstellen:** Das rechte Bein auf-stellen (das Bein auf der Gegen-Seite). Fuß flach aufs Bett.
  3. **Arm legen:** Rechter Arm über die Brust. Linker Arm bleibt frei oder etwas weg.
  4. **Kopf drehen:** Kopf zu-erst nach links drehen.
  5. **Drehen:** 'Eins, zwei, drei — auf die Seite.' Du hilfst am Schulter-Blatt und am Becken.
  6. **Landen:** Frau B. rollt über das rechte Bein auf die linke Seite.
  7. **Lagerung:** Kissen zur Seite oder in den Rücken."
- **Glossar-Begriffe:** [Seitenlage, 30-Grad-Lagerung, 90-Grad-Lagerung]

### Misconceptions → Distraktoren
- `D1`: **"Man stellt das gleichseitige Bein auf (also das linke Bein, wenn man nach links dreht)"**
  - Fachbegriff: "Seiten-Verwechslung"
  - **Feedback (C1):** "Nicht ganz — umgekehrt. Du willst NACH LINKS drehen, also stellst du das RECHTE Bein auf (Gegenseite). Das rechte Bein wird zum Hebel, über den der Patient nach links rollt. Merke: Das Bein, das NICHT zur Drehseite gehört, wird zum Drehpunkt."

- `D2`: **"Die Pflegekraft dreht den Patienten, indem sie ihn am Arm zieht"**
  - Fachbegriff: "Ziehen-zum-Drehen-Fehler"
  - **Feedback (C1):** "Nicht ganz — der Patient rollt selbst über das aufgestellte Bein. Deine Hände lenken und bremsen nur. Ziehen am Arm kann Schulter-Verletzungen verursachen, gerade bei Schlaganfall-Patienten. Merke: Drehen passiert durch das Bein, nicht durch den Arm."

- `D3`: **"Ohne aufgestelltes Bein geht das Drehen auch, nur mit mehr Kraft"**
  - Fachbegriff: "Kraft-statt-Technik-Irrtum"
  - **Feedback (C1):** "Möglich, aber sehr kraftaufwendig — und der Patient bleibt passiv. Ohne aufgestelltes Bein muss die ganze Drehbewegung aus deinen Armen kommen; du hebst effektiv den Brustkorb an. Merke: Aufgestelltes Bein ist das halbe Drehen."

### Richtig-Feedback
- **Feedback (C1):** "Genau. Du drehst nach links, also stellst du das rechte Bein auf (Gegenseite). Das rechte Bein wird zum Drehpunkt — Frau B. rollt über dieses Bein auf die linke Seite. Deine Hände am rechten Schulterblatt und rechten Beckenkamm lenken nur noch die Richtung. Du drehst sie nicht — sie dreht sich selbst, mit deiner Begleitung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welches Bein stellst du auf, wenn du nach links drehen willst?"
- **Rückseite:** "Das rechte (gegenseitige) Bein. Der Patient rollt über dieses Bein auf die linke Seite. Pflegekraft begleitet an Schulterblatt und Beckenkamm, ohne zu ziehen."
- **Kategorie:** handlung

---

## Baustein 10: menschliche-bewegung-gewichtsverlagerung

### bausteinId: `kinaesthetik-gewichtsverlagerung`

### Metadaten
- **bloomLevel:** 4
- **wissensart:** konzept + handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-05, F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Versuche mal, aufzustehen, ohne dich nach vorne zu beugen. Was passiert?"
- **Erwartete Antwort:** (Offen) — Körpererfahrung: Aufstehen ohne Gewichtsverlagerung nach vorn ist fast unmöglich.
- **Step-Typ:** freetext (nach Selbst-Versuch)

### Stufe 2 — Hinweis
- **Text (C1):** "Aufstehen ist keine Kraft-Aufgabe, sondern eine Gewichts-Aufgabe. Der Körper verlagert das Gewicht erst nach vorn über die Füße — erst dann können Hüft- und Kniegelenke strecken. Wenn du das bei dir selbst probierst, merkst du: ohne Vorneigung geht nichts. Für Patienten gilt dasselbe."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: analogy — Tanzen)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `text` (displayFormat: beforeafter — mit und ohne Gewichtsverlagerung)
- **Inhalt (C1, 500-800 Zeichen):**
  "Menschliche Bewegung läuft über Gewichtsverlagerung zwischen den 7 Massen des Körpers. Beispiel Aufstehen: Zuerst verlagert sich das Gewicht des Oberkörpers nach vorn — die Schultern kommen über die Knie. Erst DANN können die Beine das Gesamtgewicht aufnehmen und aufrichten. Ohne Vorneigung ist Aufstehen fast unmöglich, auch für einen Gesunden. Für dich als Pflegekraft heißt das: wenn ein Patient Probleme hat aufzustehen, ist die erste Frage oft NICHT 'wie viel Kraft braucht er?', sondern 'kommt das Gewicht nach vorn?'. Wenn du an den Schultern ziehst, ziehst du das Gewicht tendenziell zurück (Richtung Bettkante) — genau das Gegenteil. Stattdessen: Hand am Schulterblatt, leichte Führung nach vorn, 'Kommen Sie zu mir'. Gewichtsverlagerung ist auch bei älteren und geschwächten Patienten meist noch möglich — sie muss nur angeregt werden."
- **Inhalt (B1, 400-600 Zeichen):**
  "Aufstehen ist kein Kraft-Problem. Es ist ein Gewichts-Problem. Probiere es selbst: Setz dich gerade hin. Jetzt stehe auf, OHNE dich nach vorne zu beugen. Geht nicht, oder? Aufstehen funktioniert so: Zuerst kommen die Schultern nach vorne über die Knie. Dann strecken sich die Beine. Das ist auch für ältere Patienten so. Wenn ein Patient schwer aufsteht, hilft ihm nicht mehr Kraft. Ihm hilft: Sich nach vorne beugen. Sag ihm: 'Kommen Sie zu mir, Nase über die Knie.'"

### Misconceptions → Distraktoren
- `D1`: **"Aufstehen braucht vor allem Beinkraft"**
  - Fachbegriff: "Kraft-Dominanz-Irrtum"
  - **Feedback (C1):** "Teilweise — aber Beinkraft allein reicht nicht. Ohne Vorneigung des Oberkörpers bleiben die Beine nutzlos. Ein schwacher Patient mit guter Vorneigung kann oft aufstehen, ein kräftiger ohne Vorneigung nicht. Merke: Gewicht vor Kraft."

- `D2`: **"Ältere Menschen haben keine Gewichtsverlagerung mehr"**
  - Fachbegriff: "Altersautomatik-Irrtum"
  - **Feedback (C1):** "Nicht ganz — Gewichtsverlagerung bleibt auch mit 90 prinzipiell erhalten. Sie wird nur oft nicht mehr bewusst genutzt, weil der Patient jahrelang gehoben wurde. Anregen durch 'Kommen Sie zu mir' aktiviert die Fähigkeit wieder. Merke: Nicht verloren, nur versteckt."

- `D3`: **"Pflegekraft soll beim Aufstehen am Arm hochziehen, das hilft"**
  - Fachbegriff: "Zug-verstärkt-Irrtum"
  - **Feedback (C1):** "Nicht ganz — Ziehen am Arm zieht den Oberkörper eher nach oben-hinten als nach vorn-oben. Gewichtsverlagerung braucht aber nach vorn. Deshalb: Hand am Schulterblatt, Richtung nach vorn führen, nicht ziehen. Merke: Vorn statt oben."

### Richtig-Feedback
- **Feedback (C1):** "Gute Selbstwahrnehmung. Ohne Vorneigung ist Aufstehen mechanisch fast unmöglich — auch für einen Gesunden. Der Körper braucht die Gewichtsverlagerung nach vorn, damit die Beine das Gewicht aufnehmen können. Für deinen Patienten gilt dasselbe: kein 'Hochziehen' am Oberkörper, sondern 'Nach-vorn-führen' über das Schulterblatt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum kann kein Mensch aufstehen, ohne sich nach vorn zu beugen?"
- **Rückseite:** "Aufstehen ist Gewichtsverlagerung: Der Oberkörper muss sich über die Knie bringen, damit die Beine das Gewicht aufnehmen und strecken können."
- **Kategorie:** fakt

---

## Baustein 11: umgebung-arbeitshoehe

### bausteinId: `kinaesthetik-umgebung-arbeitshoehe`

### Metadaten
- **bloomLevel:** 3
- **wissensart:** konzept + arbeitsschutz
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-08, F-13]
- **imageSlot:** S8 (Arbeitshaltung — Bett hoch, Pflegekraft aufrecht)

### Stufe 1 — Denkfrage
- **Frage:** "Du machst morgens 8 Transfers. Das Bett ist immer zu tief. Was passiert nach 2 Jahren?"
- **Step-Typ:** truefalse oder freetext (kurz)

### Stufe 2 — Hinweis
- **Text (C1):** "Vor jeder Bewegung prüfst du die Umgebung: Ist das Bett auf Arbeitshöhe? Steht der Rollstuhl im 45°-Winkel? Ist der Weg frei? Die Umgebung ist kein Schicksal — du stellst sie aktiv ein. Betthöhe anpassen dauert 5 Sekunden und schützt deinen Rücken über Jahre."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `hotspot` (auf Bild S8 — Arbeitsplatz-Szene)
- **Inhalt (C1, 500-800 Zeichen):**
  "Umgebung ist das sechste Kinästhetik-Konzept — und das am häufigsten vernachlässigte. Jede Bewegungs-Situation wird entweder erleichtert oder erschwert durch die Umgebung. Zentrale Punkte: Betthöhe (für dich etwa Hüfthöhe bei Transfers, für Grundpflege etwas höher; für den Patienten beim Aufstehen so, dass seine Füße den Boden erreichen), Matratze (zu weich = Patient sinkt ein, Eigenbewegung schwierig), Rollstuhl-Winkel (45° zum Bett), Fußstützen (weg, damit Patient den Boden erreicht), Licht (reicht es, um Details zu erkennen?), Bodenbelag (nass? rutschig?), Schuhe des Patienten (feste Sohle? kein Stolperrisiko?). Diese Checks dauern jeweils Sekunden. Wer sie überspringt, spart kurzfristig Zeit und verliert langfristig Rücken und Sicherheit. Die Berufsgenossenschaft Gesundheitsdienst (BGW) nennt Arbeitshöhe als einen der wichtigsten Präventionsfaktoren gegen Rückenleiden in der Pflege."
- **Inhalt (B1, 400-600 Zeichen):**
  "Das sechste Konzept ist die Umgebung. Bevor du einen Patienten bewegst, prüfst du: Ist das Bett hoch genug für MICH? Ist der Stuhl im richtigen Winkel (45 Grad)? Sind die Fuß-Stützen weg? Kann der Patient den Boden berühren? Ist Licht da? Gibt es Stolper-Fallen? Hat der Patient feste Schuhe? Diese Checks dauern Sekunden. Wer sie ver-gisst, bekommt Rücken-Schmerzen. Die Berufs-Genossen-Schaft sagt: Bett-Höhe ist einer der wichtigsten Punkte gegen Rücken-Leiden. Bett hoch-fahren dauert 5 Sekunden — Rücken-OP dauert Jahre."

### Misconceptions → Distraktoren
- `D1`: **"Betthöhe anpassen dauert zu lang, lieber kurz gebückt arbeiten"**
  - Fachbegriff: "Zeit-Rechtfertigung"
  - **Feedback (C1):** "Nicht ganz — Betthöhe-Verstellen dauert unter 5 Sekunden. Gebückt arbeiten über Jahre hinweg führt zu Bandscheibenvorfall und Berufsausstieg. Der 'Zeitgewinn' ist eine Scheinersparnis. Merke: 5 Sekunden vs. Bandscheibe."

- `D2`: **"Umgebungs-Check ist Luxus, die eigentliche Pflege ist wichtiger"**
  - Fachbegriff: "Eigentlich-Irrtum"
  - **Feedback (C1):** "Nicht ganz — Umgebung IST Pflege. Ohne passende Umgebung ist die eigentliche Maßnahme ineffektiv oder gefährlich. Der DNQP-Expertenstandard Mobilität nennt Umgebungsanpassung als Kernmaßnahme. Merke: Umgebung ≠ Kulisse."

- `D3`: **"Bett bleibt nachts immer tief eingestellt, damit der Patient nicht rausfällt"**
  - Fachbegriff: "Sicherheits-Ritual-Fehler"
  - **Feedback (C1):** "Differenziert — für den Patienten: ja, bei Sturzrisiko tief einstellen. Für DICH beim morgendlichen Transfer: hochfahren auf Arbeitshöhe, danach wieder runter. Merke: Höhe anpassen pro Aktivität, nicht dauerhaft fixiert."

### Richtig-Feedback
- **Feedback (C1):** "Realistisch gedacht. Bei dauerhaft zu tiefer Arbeitshöhe drohen Bandscheibenschäden, Schulterprobleme und oft ein Ausstieg aus der Pflege nach 5-10 Jahren. Die Berufsgenossenschaft Gesundheitsdienst (BGW) nennt Arbeitshöhe als einen der wichtigsten Präventionsfaktoren. 5 Sekunden Höhenanpassung pro Aktivität zahlen sich Jahrzehnte aus."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie stellst du die Betthöhe vor einem Transfer ein?"
- **Rückseite:** "Für DICH: Arbeitshöhe (etwa Hüfthöhe beim Transfer). Für den Patienten: so niedrig, dass seine Füße an der Bettkante den Boden berühren."
- **Kategorie:** handlung

---

## Baustein 12: neurologische-patienten-bobath

### bausteinId: `kinaesthetik-bobath-schnittstelle`

### Metadaten
- **bloomLevel:** 5
- **wissensart:** handlung + transfer
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Herr S. hatte einen Schlaganfall, rechte Seite gelähmt. Du sollst ihn auf die rechte (betroffene) Seite drehen. Darfst du das? Und wenn ja — was ist anders als bei einem nicht-neurologischen Patienten?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis
- **Text (C1):** "Kinästhetik und Bobath-Konzept sind vereinbar: beide aktivieren Eigenbewegung. Bobath betont zusätzlich die bewusste Einbeziehung der betroffenen Seite — sie soll nicht ignoriert werden. Wichtige Regeln bei Hemiplegie: niemals am betroffenen Arm ziehen (Subluxationsgefahr Schulter), Transfer über die wenig betroffene Seite einleiten, betroffene Seite bewusst mitnehmen."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `branching` (Fall-Entscheidung mit Begründung)
- **Inhalt (C1, 500-800 Zeichen):**
  "Bei Patienten mit Schlaganfall, Parkinson oder MS ist Kinästhetik weiterhin anwendbar — mit Ergänzungen aus dem Bobath-Konzept. Zentrale Regel bei Hemiplegie: Die betroffene Seite wird einbezogen, nicht vermieden. Konkret bei Herrn S. (rechts gelähmt): Drehen auf die rechte Seite ist erlaubt und sogar erwünscht — es fördert die Wahrnehmung. ABER: Niemals am betroffenen (rechten) Arm ziehen. Die Schulter hat bei Hemiplegie kaum Muskelspannung, der Humeruskopf kann sich luxieren. Stattdessen: den rechten Arm vor dem Drehen behutsam auf den Brustkorb legen, damit er nicht unten eingeklemmt wird. Transfer von Herrn S. aus dem Bett: Starte über die weniger betroffene (linke) Seite — stabiler Halt möglich. Beim Parkinson-Patienten mit Rigor hilft Kinästhetik, Bewegungen wieder anzubahnen (Gewichtsverlagerung statt Kraft-Überwindung). Merke: Kinästhetik + Bobath = ein Team, kein Widerspruch."
- **Inhalt (B1, 400-600 Zeichen):**
  "Bei Schlaganfall, Parkinson oder MS gilt Kinästhetik auch — plus Regeln aus dem Bobath-Konzept. Wichtigste Regel bei Schlaganfall (eine Seite gelähmt): Die gelähmte Seite darf NICHT ignoriert werden. Sie wird mit-einbezogen. ABER: Niemals am gelähmten Arm ziehen. Die Schulter kann sich ver-renken (Sub-Luxation). Statt-dessen: Den gelähmten Arm vor dem Drehen auf die Brust legen. Beim Transfer: Starte über die gesunde Seite — das ist stabiler. Kinästhetik und Bobath widersprechen sich NICHT — sie ergänzen sich."
- **Glossar-Begriffe:** [Hemiplegie, Subluxation, Bobath-Konzept, Humeruskopf]

### Misconceptions → Distraktoren
- `D1`: **"Die gelähmte Seite soll nicht bewegt werden, damit sie sich erholt"**
  - Fachbegriff: "Schonungs-Mythos"
  - **Feedback (C1):** "Nicht ganz — genau umgekehrt. Die betroffene Seite wird bewusst einbezogen, um Wahrnehmung und Spastik-Regulation zu fördern. Schonung führt zu Vernachlässigung und assoziierten Reaktionen (Spastik). Merke: Einbeziehen statt vermeiden."

- `D2`: **"Kinästhetik und Bobath widersprechen sich — man muss sich entscheiden"**
  - Fachbegriff: "Konzept-Rivalität"
  - **Feedback (C1):** "Nicht ganz — beide Konzepte haben das gleiche Ziel: Eigenaktivität fördern, Heben vermeiden. Bobath ergänzt Kinästhetik um neurologische Regeln (betroffene Seite, normale Bewegungsmuster). Sie sind ein Team. Merke: Kein Entweder-Oder."

- `D3`: **"Am gelähmten Arm kann man gefahrlos ziehen, weil er nichts spürt"**
  - Fachbegriff: "Sensibilitäts-Fehlschluss"
  - **Feedback (C1):** "Gefährlicher Irrtum. Auch ohne Schmerz-Wahrnehmung ist die Schulter anfällig: fehlende Muskelspannung lässt den Humeruskopf luxieren, oft mit dauerhaften Schäden. Schmerz-freiheit schützt nicht, sie verbirgt Verletzungen. Merke: Kein Zug am betroffenen Arm, niemals."

### Richtig-Feedback
- **Feedback (C1):** "Sehr gut durchdacht. Drehen auf die rechte (betroffene) Seite ist erlaubt — sogar sinnvoll, weil die betroffene Seite bewusst einbezogen werden soll. Der Unterschied: du legst den rechten Arm vorher auf den Brustkorb, damit er nicht eingeklemmt wird. Und du ziehst niemals am rechten Arm — die Schulter ist bei Hemiplegie subluxations-gefährdet. Ansonsten gelten die üblichen Kinästhetik-Regeln: Eigenbewegung nutzen, Gewichtsverlagerung, Griff an tragenden Strukturen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum darf man bei Hemiplegie niemals am betroffenen Arm ziehen?"
- **Rückseite:** "Subluxationsgefahr der Schulter: fehlende Muskelspannung kann den Humeruskopf luxieren — oft dauerhafte Schäden. Betroffener Arm wird vor Drehungen auf den Brustkorb gelegt."
- **Kategorie:** handlung

---

## Baustein 13: selbstschutz-pflegekraft

### bausteinId: `kinaesthetik-selbstschutz-pflegekraft`

### Metadaten
- **bloomLevel:** 5
- **wissensart:** arbeitsschutz + reflexion
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-13]
- **imageSlot:** S8 (Arbeitshaltung korrekt)

### Stufe 1 — Denkfrage
- **Frage:** "Statistisch steigen 40 Prozent der Pflegekräfte nach 10 Jahren wegen Rückenschäden aus. Was kannst DU heute tun, damit das nicht dein Weg wird?"
- **Step-Typ:** reflection (freetext, nicht bewertet)

### Stufe 2 — Hinweis
- **Text (C1):** "Selbstschutz ist kein Egoismus — er ist Voraussetzung für gute Pflege. Drei Grundregeln: Arbeitshöhe einstellen (Bett hoch), Gewicht am eigenen Körper verlagern statt aus dem Rücken heben, mit dem Patienten arbeiten statt gegen ihn. Breiter Stand, Knie gebeugt, Beckenmitte über Fußmitte. Dauer-Hebeln aus dem gebeugten Rücken führt zu Bandscheibenschäden."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `reflection` (geführte Selbstreflexion mit Handlungsaufgabe)
- **Inhalt (C1, 500-800 Zeichen):**
  "Rückenschäden sind einer der häufigsten Gründe für Berufsausstieg in der Pflege. Die Berufsgenossenschaft Gesundheitsdienst (BGW) beziffert den Anteil rückenbedingter Ausfälle in der Pflege regelmäßig als führend in der Unfallstatistik. Kinästhetik ist deshalb nicht nur Patientenfürsorge, sondern auch Selbstschutz. Drei zentrale Regeln: (1) Arbeitshöhe: Bett hoch auf deine Hüfthöhe, bevor du arbeitest. (2) Gewicht am eigenen Körper: breiter Stand, Knie gebeugt, dein Gewicht wird mitbewegt — nicht der Patient wird 'über deinen Rücken' gehoben. (3) Mit dem Patienten: seine Eigenbewegung nutzen, auch minimal. Zusätzlich: kein Dauer-Drehen aus dem gebeugten Rücken, keine Rotations-Hebel. Der Arbeitgeber ist nach Arbeitsschutzgesetz verpflichtet, kinästhetische Fortbildungen zu ermöglichen — das kannst und sollst du einfordern. Rückenprävention ist keine Privatsache."
- **Inhalt (B1, 400-600 Zeichen):**
  "Rücken-Schmerzen sind ein Haupt-Grund, warum Pflege-Kräfte ihren Beruf auf-geben müssen. Das muss dich nicht treffen. Drei Regeln schützen dich: 1. Bett hoch einstellen (auf deine Hüft-Höhe). 2. Breiter Stand, Knie gebeugt, dein Ge-wicht bewegt mit. 3. Mit dem Patienten arbeiten — seine Bewegung nutzen. Niemals: über-gebückt aus dem Rücken heben. Niemals: mit Drehung heben. Dein Arbeit-Geber MUSS dir Kinästhetik-Fortbildungen an-bieten — das ist Gesetz. Frag danach!"

### Misconceptions → Distraktoren
- `D1`: **"Ein Rückengurt schützt beim Heben"**
  - Fachbegriff: "Gurt-Illusion"
  - **Feedback (C1):** "Nicht ganz — Studien zeigen keine klare Schutzwirkung von Rückengurten in der Pflege. Wichtiger ist Technik: Arbeitshöhe, Gewichtsverlagerung, Eigenbewegung nutzen. Merke: Technik schlägt Gurt."

- `D2`: **"Nur schwere Patienten sind Rückenrisiko"**
  - Fachbegriff: "Gewichts-Fokus"
  - **Feedback (C1):** "Nicht ganz — auch leichte Patienten schädigen den Rücken, wenn du in gebückter Haltung viele Male täglich bewegst. Das Problem ist die Wiederholung gebeugter Haltung, nicht das Einzelgewicht. Merke: Haltung vor Gewicht."

- `D3`: **"Rückenprävention ist Privatsache der Pflegekraft"**
  - Fachbegriff: "Verantwortungs-Verschiebung"
  - **Feedback (C1):** "Nicht ganz — der Arbeitgeber hat nach Arbeitsschutzgesetz (ArbSchG) eine Fürsorgepflicht, inkl. kinästhetischer Fortbildungen und Hilfsmittel. Die BGW kontrolliert das. Du darfst und sollst Fortbildung einfordern. Merke: Geteilte Verantwortung, gesetzlich geregelt."

### Richtig-Feedback
- **Feedback (C1):** "Wichtige Reflexion. Drei konkrete Schritte: (1) Bett IMMER auf Arbeitshöhe einstellen, bevor du beginnst. (2) Bei jedem Transfer bewusst prüfen: drücke ich oder ziehe ich? Passt das zur Bewegungsrichtung? (3) Kinästhetik-Fortbildung einfordern — das ist keine Bitte, sondern dein Recht aus dem Arbeitsschutzgesetz. Wer das konsequent umsetzt, senkt sein Rücken-Risiko über die Karriere deutlich."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 3 Grundregeln der Rückenprävention bei kinästhetischem Arbeiten."
- **Rückseite:** "(1) Arbeitshöhe anpassen (Bett hoch). (2) Gewicht am eigenen Körper verlagern (breiter Stand, gebeugte Knie). (3) Mit dem Patienten arbeiten (Eigenbewegung nutzen, nicht gegen den Widerstand heben)."
- **Kategorie:** recht

### Glossar-Beitrag
- **Begriff:** Arbeitshöhe
- **Definition (C1):** "Betthöhe, die ein rückenschonendes Arbeiten der Pflegekraft erlaubt (etwa auf Hüfthöhe beim Transfer, etwas höher bei Grundpflege)."
- **Quelle:** BGW — Berufsgenossenschaft Gesundheitsdienst

---

## Glossar-Einträge (für glossar-plan.md)

| Begriff | C1-Definition | Quelle |
|---------|---------------|--------|
| Kinästhetik | Bewegungskonzept nach Hatch/Maietta, aktiviert und begleitet Eigenbewegung statt Heben | Hatch/Maietta |
| Eigenbewegung | Vom Patienten selbst initiierte oder mitgetragene Bewegung, auch minimal | Hatch/Maietta |
| Funktionale Anatomie | Kinästhetik-Konzept: 7 Massen + 6 Zwischenräume; Knochen tragen, Muskeln bewegen | Hatch/Maietta |
| 7 Massen | Kopf, Brustkorb, Becken, 2 Arme, 2 Beine | Hatch/Maietta |
| 6 Zwischenräume | Hals, Taille, 2 Schultergelenke, 2 Hüftgelenke | Hatch/Maietta |
| Interaktion (Kinästhetik) | Dialog zwischen Pflegekraft und Patient während der Bewegung, verbal + taktil | Hatch/Maietta |
| Anstrengung (Kinästhetik) | Zug- oder Druckrichtung einer Bewegung; nie beides gleichzeitig | Hatch/Maietta |
| Gewichtsverlagerung | Verschieben des Körperschwerpunkts zwischen den 7 Massen | Hatch/Maietta |
| Beckenkamm | Seitlicher Oberrand des Hüftknochens — sicherer Griffpunkt | Anatomie |
| Schulterblatt | Knochen auf der hinteren Brustkorbseite — sicherer Griffpunkt | Anatomie |
| Humeruskopf | Oberarmkopf im Schultergelenk — luxationsgefährdet bei Hemiplegie | Anatomie |
| Subluxation | Teilweise Verrenkung eines Gelenks, v.a. Schulter bei Schlaganfall | Medizin |
| Hemiplegie | Halbseitenlähmung, meist nach Schlaganfall | Medizin |
| Bobath-Konzept | Neurologisches Pflege-Konzept zur Aktivierung der betroffenen Seite | Bobath B./K. |
| DNQP-Expertenstandard Mobilität | Nationaler Pflegestandard zur Erhaltung und Förderung von Mobilität (2020) | DNQP 2020 |
| Arbeitshöhe | Betthöhe, die rückenschonendes Arbeiten ermöglicht (Hüfthöhe) | BGW |
| Infant Handling | Kinästhetische Bewegung bei Säuglingen — wird in Thema Säuglingspflege vertieft | Hatch/Maietta |

---

## Karteikarten (13 Stück, 1 pro Baustein)

Siehe `karteikarten-plan.md` — jede Karteikarte ist die Kern-Frage aus dem zugehörigen Baustein, FSRS-kompatibel. Kategorie-Verteilung:
- fachbegriff: 5 (B1 Definition, B2 Übersicht, B3 Interaktion, B7 KTM-Regel, B8 Transferphasen)
- fakt: 2 (B2 Aufzählung, B10 Gewichtsverlagerung)
- handlung: 5 (B4 Griffpunkte, B5 Eigenbewegung, B9 Drehen, B11 Betthöhe, B12 Hemiplegie)
- recht: 1 (B13 Arbeitsschutz)

---

## Zeit-Budget-Zusammenfassung

| Baustein | Bloom | Minuten | Typ-Schwerpunkt |
|----------|-------|---------|------------------|
| B1 was-ist-kinaesthetik | 2 | 4 | Definition |
| B2 sechs-konzepte-uebersicht | 2 | 4 | Klassifikation |
| B3 interaktion | 3 | 4 | Konzept+Handlung |
| B4 griffpunkte | 4 | 5 | Anatomie+Handlung |
| B5 eigenbewegung | 4 | 5 | Konzept+Handlung |
| B6 ziehen-druecken | 5 | 5 | Konzept+Handlung |
| B7 knochen-muskeln | 3 | 4 | Anatomie |
| B8 transfer-bett-stuhl | 5 | 6 | Handlung+Sequenz |
| B9 drehen-seitenlage | 4 | 5 | Handlung+Sequenz |
| B10 gewichtsverlagerung | 4 | 4 | Konzept+Handlung |
| B11 umgebung-arbeitshoehe | 3 | 3 | Konzept+Arbeitsschutz |
| B12 bobath-schnittstelle | 5 | 5 | Handlung+Transfer |
| B13 selbstschutz | 5 | 5 | Arbeitsschutz+Reflexion |
| **Summe Baustein-Lernzeit** | | **60 Min** | (Zielkorridor 60-80 Min) |

Zielzeit App-Content (5 UE × 45 × 0,55): 124 Min. Bausteine decken 60 Min = 48 Prozent. Restliche 64 Min verteilen sich auf Situations-Phasen (Phase 2) und Optionale Steps.

---

## Fachliche Besonderheiten / Hinweise für nachfolgende Phasen

1. **Kein einziger Baustein darf Hebetechniken als Option empfehlen.** Heben ist nur für Lifter-Einsatz bei vollständiger Bewusstlosigkeit erwähnenswert — in den Bausteinen explizit ausgeschlossen.
2. **Keine Widersprüche zu Bobath/Basale Stimulation:** Baustein 12 integriert Bobath explizit, Basale Stimulation wird hier nicht vertieft (eigenes Thema T-18).
3. **Rückenprävention in 3 Bausteinen präsent:** B6 (Ziehen/Drücken), B11 (Arbeitshöhe), B13 (Selbstschutz — dediziert).
4. **Visueller Bedarf hoch — Generator muss für alle 8 imageSlots Copic- oder SVG-Produktion einplanen.** Besonders S3 (Transfer-Sequenz) und S4 (Drehen-Sequenz) brauchen hochwertige Bild-Produktion.
5. **Säuglingspflege / Infant Handling** wird hier NICHT vertieft — Verweis im Glossar auf Thema T-17 (Säuglingspflege).
6. **Sequencing-Bausteine (B8, B9)** liefern die Kernsequenzen; die Lernsituationen (Phase 2) nutzen diese als Referenz und passen an den konkreten Patienten an.
7. **Parallele und spirale Bewegung** (aus Kernfakten F-02, nicht als eigener Baustein) ist ein fortgeschrittenes Detail — wird bei Bedarf in Situationsphase als Optionaler Step ergänzt (z.B. Prüfungsfall Spirale 4).

---

## Offene Entscheidungen / Flags für Review #1 (Mensch)

- [ ] **Baustein-Anzahl 13** (Korridor 12-14, ok).
- [ ] **Bloom-Verteilung:** 15 % / 62 % / 23 % — im Rahmen.
- [ ] **Keine Hebe-Empfehlung** (manuell verifizieren).
- [ ] **Alle 6 Konzepte vertreten** (B3=Interaktion, B4+B7=Anatomie, B10=Bewegung, B6=Anstrengung, B5=Funktion/Eigenbewegung, B11=Umgebung — ja).
- [ ] **Transfer + Drehen mit konkreter Schritt-Sequenz** (B8, B9 — ja).
- [ ] **Neurologischer Bezug (Bobath)** (B12 — ja).
- [ ] **Rückenprävention** (B13 dediziert — ja).
- [ ] **Mindestens 6-8 imageSlots** (8 Slots eingeplant — ja).
