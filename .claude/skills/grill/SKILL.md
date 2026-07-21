---
name: grill
description: Grillt eine Entscheidung oder einen Plan unerbittlich — eine Frage nach der anderen, mit Empfehlung, gegen Rangfolge + 1-Mio-Pruefstein + VISION.md.
user-invocable: true
allowed-tools: Read, Glob, Grep, Bash, Agent, Write
argument-hint: "[entscheidung oder plan zum grillen]"
---

# /grill — Eine Entscheidung unerbittlich hinterfragen

Der aufrufbare „hinterfrage meine Entscheidungen"-Modus (CLAUDE.md). Ziel: die
versteckten Annahmen einer Entscheidung offenlegen, BEVOR sich Waleria
festlegt — eine Frage nach der anderen, jede mit einer Empfehlung, durch die
Carovia-Brille. Kein Schnell-Ja, keine Gefaelligkeit.

## Ablauf

### Schritt 1: Was wird gegrillt?
- `$ARGUMENTS` nehmen (die Entscheidung/der Plan).
- Fehlt es: in EINEM Satz fragen, welche Entscheidung gegrillt werden soll —
  dann warten.

### Schritt 2: Brille laden (still, parallel)
Bevor die erste Frage kommt, Kontext holen:
- `VISION.md` — Wahrheitsquelle, ueberstimmt alles.
- `CLAUDE.md` — Rangfolge (1. Pflegefachlichkeit · 2. Design/App-Gefuehl ·
  3. Tempo) + 1-Mio-Pruefstein (≈ 8.300 Abos à 10 € ODER ≈ 200 Schullizenzen
  à 5.000 €).
- Passende `specs/`- und Memory-Eintraege, relevanten Code per Explore-Agent.
Ziel: genug wissen, um fundiert zu EMPFEHLEN, nicht nur zu fragen.

### Schritt 3: Selbst beantworten vor Fragen
Was aus Code / VISION / Memory belegbar ist, klaert der Skill SELBST und stellt
es NICHT als Frage. („Gibt es X schon?" → suchen und sagen, nicht fragen.)

### Schritt 4: Entscheidungsbaum bilden (intern)
Die versteckten Gabelungen der Entscheidung auflisten, nach Rangfolge
priorisiert — Pflegefachlichkeit-Gabelungen zuerst und am haertesten.

### Schritt 5: Grillen — eine Frage pro Runde
Je Gabelung, immer nur EINE auf einmal:
1. Die Gabelung klar benennen.
2. Eine **Empfehlung** + kurze, belegte Begruendung (Zahl/Quelle, kein Adjektiv).
3. Die harte Zweitwirkung: „Was uebersieht diese Entscheidung?" — gegen den
   GESAMTEN Schuelerweg, Content-Pipeline, B1/AR, Play-then-Gate,
   Kompetenznachweis, Klassenraum mit 25 Schuelern, DSGVO.
4. Auf Antwort warten. NIE mehrere Fragen auf einmal.

### Schritt 6: Pruefstein-Gate je Zweig
Zu jedem Zweig fragen: „Zahlt das erkennbar auf 8.300 Abos ODER 200
Schullizenzen ein?" Wenn nein — offen benennen, nicht kaschieren.

### Schritt 7: Unerbittlich bleiben
- Jeden Zweig zu Ende verfolgen, nicht an der Oberflaeche stoppen.
- Auch ein „trotzdem richtig" noch einmal gegen die staerkste Gegenposition
  halten.
- Position halten statt aus Gefaelligkeit umschwenken — Kurswechsel nur mit
  echtem neuen Argument.

### Schritt 8: Ende = Entscheidungsbaum aufgeloest
Wenn keine offene Gabelung mehr bleibt, kompakte Synthese ausgeben:
- die **geschaerfte Entscheidung**,
- die **offengelegten Annahmen**,
- die **bewusst akzeptierten Risiken**,
- der **naechste konkrete Schritt**.
Danach anbieten, die stabile Erkenntnis nach `specs/` oder Memory zu schreiben
(nur mit ausdruecklichem Ja).

## Regeln

- Immer nur EINE Frage pro Runde, mit Empfehlung — nie ein Fragenkatalog.
- Erst Code / VISION / Memory durchsuchen, dann fragen.
- Rangfolge ist bindend: Pflegefachlichkeit-Zweige zuerst und am haertesten;
  kein Satz ohne wortwoertlich gelesene Quelle.
- Kein Schnell-Ja, keine Gefaelligkeit; jede Behauptung belegt.
- KEIN Produktcode aendern. `Write` NUR fuer die Abschluss-Synthese nach
  `specs/` bzw. Memory.
- Mindestens eine unbestellte Idee oder Gefahr mitliefern.
