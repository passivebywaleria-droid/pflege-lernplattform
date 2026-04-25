# Wissensbausteine: Gesundheitsprojekt planen und durchführen

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `gesundheitsprojekt` |
| ceId | `ce-04` |
| cluster | C (Spezialisierung 3. AD) |
| wissensart | handlung |
| kompetenzbereich | III.2 |
| geschaetzteUE | 30 |
| zielzeitMin | 743 (30 UE × 45 × 0,55) |
| bausteineAnzahl | 34 |
| voraussetzungen | `patientenberatung` |
| ausbildungsdrittel | 3. AD |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 21% (7 Bausteine), Bloom 3-4: 59% (20 Bausteine), Bloom 5-6: 21% (7 Bausteine)

**Primärquellen:**
- WHO (1986): Ottawa-Charta der Gesundheitsförderung
- WHO (1991): Sundsvall-Erklärung (Setting-Ansatz)
- BZgA (fortlaufend): Leitbegriffe der Gesundheitsförderung und Prävention
- Antonovsky, A. (1979/1987): Salutogenese und Kohärenzgefühl (SOC)
- Wright, M. T. (2010): Partizipationsstufenmodell (Public Health)
- Donabedian, A. (1966): Struktur-Prozess-Ergebnis-Qualität (SPO-Modell)
- Deming, W. E. (1982): PDCA-Zyklus (Plan-Do-Check-Act)
- Tuckman, B. W. (1965): Developmental Sequence in Small Groups (Forming-Storming-Norming-Performing)
- DIN 69901 (2009): Projektmanagement — Projektmanagementsysteme
- § 20 SGB V: Primärprävention und Gesundheitsförderung
- § 20a-i SGB V: Präventionsgesetz (PrävG 2015)
- PflBG § 5: Ausbildungsziel, Projektarbeit als Kompetenz

---

## Cluster 1: Projektmanagement Grundlagen (B1-B6)

---

## Baustein 1: projekt-abgrenzung

### Metadaten
- **bausteinId:** gesundheitsprojekt-abgrenzung
- **bloomLevel:** 2
- **wissensart:** definition
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Du machst täglich Grundpflege bei Frau Meier. Ist das ein Projekt? Oder ist Projekt etwas anderes? Beschreibe in eigenen Worten, was für dich ein Projekt ausmacht."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Ein Projekt ist ein zeitlich begrenztes Vorhaben mit klarem Ziel, eigenem Team und begrenzten Ressourcen — einmalig, nicht Routine. Tagesgeschäft dagegen ist wiederkehrend: Grundpflege, Medikation, Dokumentation. Projekt hat Anfang und Ende. (DIN 69901)"

**B1 (210 Zeichen):** "Ein Projekt ist eine Aufgabe mit klarem Ziel. Es hat einen Start und ein Ende. Es passiert nur einmal. Beispiel: Ein Trinkprojekt auf der Station planen. Tagesgeschäft ist anders: Das machst du jeden Tag. Zum Beispiel Körperpflege."

- **Step-Typ:** text (displayFormat: comparison)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Ein **Projekt** ist nach DIN 69901 ein **zeitlich begrenztes, einmaliges Vorhaben** mit klar definiertem Ziel, eigenem Team, begrenzten Ressourcen und definiertem Start- und Endzeitpunkt. Merkmale:

- **Einmalig:** Nicht Routine, sondern eine besondere Aufgabe.
- **Zeitbegrenzt:** Anfang und Ende stehen fest.
- **Zielorientiert:** Ein konkretes Ergebnis soll entstehen.
- **Team:** Mehrere Personen arbeiten zusammen, oft interdisziplinär.
- **Ressourcenbegrenzt:** Geld, Zeit, Personal sind endlich.

**Abgrenzung Tagesgeschäft:** Tagesgeschäft ist wiederkehrend und standardisiert (Grundpflege, Medikation, Dokumentation). Ein Projekt unterbricht oder ergänzt das Tagesgeschäft. In der Pflege typisch: Einführung eines neuen Expertenstandards, eine Aktionswoche zu Bewegung, ein Trinkprojekt im Pflegeheim. (DIN 69901:2009)"

**B1 (560 Zeichen):**
"Was ist ein Projekt? Ein Projekt ist eine besondere Aufgabe mit diesen Merkmalen:

- **Einmalig:** Du machst es nur einmal, nicht jeden Tag.
- **Zeit begrenzt:** Es hat einen Start und ein Ende.
- **Klares Ziel:** Du weißt, was am Ende rauskommen soll.
- **Team:** Mehrere Menschen arbeiten zusammen.
- **Begrenzte Mittel:** Du hast nur wenig Geld, Zeit und Leute.

**Was ist kein Projekt?** Deine normale Arbeit jeden Tag: Körperpflege, Essen reichen, Medikamente geben. Das heißt **Tagesgeschäft**. Das machst du immer wieder. Ein Projekt machst du nur einmal. Beispiel in der Pflege: Eine Woche lang zum Thema Trinken im Pflegeheim — das ist ein Projekt."

- **Erklärungs-Step:** stepType `comparison` (Projekt vs. Tagesgeschäft)
- **Glossar-Begriffe:** [Projekt, Tagesgeschäft, DIN 69901, Ressourcen]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Jede neue Aufgabe ist ein Projekt"**
- **Fachbegriff:** Projekt-Inflations-Irrtum
- **Feedback (C1, 235 Zeichen):** "Nicht ganz — eine neue Aufgabe ist nicht automatisch ein Projekt. Entscheidend sind **einmalig, zeitlich begrenzt, eigenes Ziel, eigenes Team**. Eine spontane Hilfe bei der Lagerung ist keine Projektarbeit, sondern Tagesgeschäft. Merke: Projekt braucht Struktur."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — eine neue Aufgabe ist noch kein Projekt. Ein Projekt braucht: einmalig, klare Zeit, klares Ziel, eigenes Team. Kurz helfen ist normale Arbeit, kein Projekt. Merke: Ein Projekt hat Struktur."

**D2: "Ein Projekt kann unbegrenzt laufen, solange es ein Ziel hat"**
- **Fachbegriff:** Endlos-Projekt-Mythos
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — ein Projekt hat **immer einen definierten Endzeitpunkt**. Läuft eine Aufgabe ohne Ende, ist sie kein Projekt mehr, sondern wird zum Dauerauftrag oder Prozess. Genau das ist am Ende auch ein Ziel: Projektergebnisse in den Regelbetrieb überführen. Merke: Projekt = Zeit-endlich."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — ein Projekt hat immer ein **Ende**. Ohne Ende ist es kein Projekt mehr, sondern normale Arbeit (Tagesgeschäft). Ziel am Ende: Das Projekt-Ergebnis wird zur Routine. Merke: Projekt hat Start UND Ende."

**D3: "Ein Projekt braucht nur eine Person, die macht alles"**
- **Fachbegriff:** Einzelkämpfer-Trugschluss
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — ein Projekt ist per Definition **Teamarbeit**. Eine Person allein kann eine Aufgabe erledigen, aber ein Projekt in der Pflege erfordert Zusammenarbeit mit Kollegen, Leitung, Betroffenen und oft externen Partnern. Merke: Projekt = Team."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — ein Projekt braucht immer ein **Team**. Alleine kann man eine Aufgabe machen, aber ein echtes Projekt braucht mehrere Menschen. In der Pflege: Kollegen, Chefin, Patienten. Merke: Ein Projekt ist Teamarbeit."

### Richtig-Feedback

**C1 (245 Zeichen):** "Genau. Ein Projekt ist einmalig, zeitlich begrenzt, zielorientiert, mit eigenem Team und begrenzten Ressourcen (DIN 69901). Es unterscheidet sich vom Tagesgeschäft durch Einmaligkeit und klaren Rahmen. Merke: Projekt = einmalig + begrenzt + Team."

**B1 (215 Zeichen):** "Sehr gut. Ein Projekt hat einen Start und ein Ende. Es ist nur einmal, hat ein klares Ziel und ein Team. Das ist anders als deine normale Arbeit jeden Tag. Merke: Projekt ist einmalig, begrenzt und Teamarbeit."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was unterscheidet ein Projekt vom Tagesgeschäft? (3 Merkmale)"
- **Rückseite:** "Einmalig, zeitlich begrenzt (Start + Ende), eigenes Ziel mit Team. Tagesgeschäft = wiederkehrend und standardisiert. (DIN 69901)"
- **Kategorie:** fachbegriff

---

## Baustein 2: pdca-zyklus

### Metadaten
- **bausteinId:** gesundheitsprojekt-pdca
- **bloomLevel:** 2
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Du kochst zum ersten Mal ein Gericht. Welche Schritte machst du, damit es beim nächsten Mal besser wird? Denk an: Vorbereiten, Kochen, Kosten, Verbessern."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Der PDCA-Zyklus nach Deming steht für **Plan-Do-Check-Act**: planen, durchführen, überprüfen, anpassen. Ein kontinuierlicher Kreislauf zur Qualitätsverbesserung — keine einmalige Abfolge, sondern wiederholte Schleifen. (Deming PDCA)"

**B1 (215 Zeichen):** "Der PDCA-Zyklus hat 4 Schritte: **P**lan = planen, **D**o = machen, **C**heck = prüfen, **A**ct = verbessern. Du gehst immer wieder im Kreis. So wird jedes Mal besser. Erfunden von Deming. (Deming PDCA)"

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Der **PDCA-Zyklus** (auch Deming-Kreis) ist ein iterativer, vierstufiger Prozess zur kontinuierlichen Qualitätsverbesserung. Die 4 Phasen:

- **P — Plan (Planen):** Ziel definieren, Ist-Zustand analysieren, Maßnahmen planen.
- **D — Do (Durchführen):** Geplante Maßnahmen umsetzen — oft zuerst als Pilot in kleinem Rahmen.
- **C — Check (Prüfen):** Ergebnisse messen, mit Zielen vergleichen, Abweichungen analysieren.
- **A — Act (Handeln/Anpassen):** Erkenntnisse einarbeiten, standardisieren was funktioniert, neues PDCA anstoßen.

Der Zyklus ist **kontinuierlich** — nach Act beginnt sofort ein neues Plan. In der Pflege liegt PDCA vielen Qualitätsprozessen zugrunde: Hygienemanagement, Fehlerkulturen, Expertenstandard-Einführung. Walter Edwards Deming entwickelte ihn in den 1950ern auf Basis von Shewhart-Ideen. (Deming PDCA)"

**B1 (560 Zeichen):**
"**PDCA — der Qualitätskreis**

Der PDCA-Zyklus hat 4 Schritte. Du machst sie immer wieder im Kreis.

**Schritt 1 — P = Plan (Planen):** Du machst einen Plan. Was ist das Ziel? Was willst du erreichen?

**Schritt 2 — D = Do (Machen):** Du machst den Plan. Erst klein ausprobieren.

**Schritt 3 — C = Check (Prüfen):** Du schaust: Hat es geklappt? Wo gab es Probleme?

**Schritt 4 — A = Act (Handeln):** Du machst es besser. Was gut war, bleibt. Was schlecht war, änderst du.

Dann fängst du wieder mit Plan an. So wird jedes Mal besser. Wichtig: Der Kreis hat kein Ende. (Deming PDCA)"

- **Erklärungs-Step:** stepType `diagram` (Kreis mit 4 Phasen)
- **Glossar-Begriffe:** [PDCA, Qualitätsmanagement, Deming, kontinuierliche Verbesserung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "PDCA ist ein einmaliger Ablauf mit klarem Ende"**
- **Fachbegriff:** Linearitäts-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — PDCA ist ein **Kreislauf**, kein linearer Ablauf. Nach Act beginnt direkt wieder ein neues Plan. Das ist der Kern: kontinuierliche Verbesserung (Kaizen-Prinzip). Ein einmaliger Durchlauf widerspricht Demings Idee. Merke: PDCA dreht sich immer weiter."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — PDCA ist ein **Kreis**, keine gerade Linie. Nach dem letzten Schritt (Act) fängst du wieder mit Plan an. Es wird immer besser. Das ist die Idee. Merke: PDCA geht immer weiter, nie zu Ende."

**D2: "Check heißt, den Plan zu prüfen, bevor man ihn umsetzt"**
- **Fachbegriff:** Check-Zeitpunkt-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — Check kommt **nach Do**, nicht vor Do. Erst wird umgesetzt, dann wird gemessen: Was ist tatsächlich passiert? Die Planprüfung vorher gehört zu Plan selbst. Check fragt: 'Stimmt Ergebnis mit Ziel überein?' — das geht nur nach der Umsetzung. Merke: Check = nach Do."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — **Check kommt nach Do**. Erst machst du den Plan (Do), dann prüfst du das Ergebnis (Check). Prüfen vor dem Machen ist noch Plan. Merke: Reihenfolge ist fest: P → D → C → A."

**D3: "PDCA ist nur für die Industrie, nicht für die Pflege"**
- **Fachbegriff:** Branchen-Ausgrenzung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — PDCA stammt zwar aus der Qualitätsarbeit der Industrie (Deming, Nachkriegs-Japan), ist aber universell einsetzbar. In der Pflege Grundlage vieler Prozesse: Hygienemanagement nach RKI, Expertenstandard-Einführung nach DNQP, Fehlermeldesysteme (CIRS). Merke: PDCA gilt überall."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — PDCA kommt aus der Industrie, aber funktioniert überall. Auch in der Pflege wird PDCA benutzt: Für Hygiene, für neue Regeln, für Fehler-Lernen. Merke: PDCA passt überall, auch bei uns in der Pflege."

### Richtig-Feedback

**C1 (260 Zeichen):** "Genau. PDCA: Plan (Ziel setzen), Do (umsetzen), Check (messen), Act (anpassen) — ein kontinuierlicher Kreislauf nach Deming. In der Pflege Grundlage von Qualitätsmanagement, Expertenstandard-Einführung, Hygieneprozessen. Merke: Kein Ende, immer weiter drehen."

**B1 (215 Zeichen):** "Sehr gut. PDCA = Plan, Do, Check, Act. Planen, machen, prüfen, verbessern. Es ist ein Kreis, der sich immer dreht. So wird die Arbeit jedes Mal besser. Auch in der Pflege sehr wichtig. (Deming PDCA)"

### Verknüpfte Karteikarte
- **Vorderseite:** "Wofür stehen die 4 Buchstaben PDCA nach Deming?"
- **Rückseite:** "**P**lan (Planen), **D**o (Durchführen), **C**heck (Prüfen), **A**ct (Anpassen). Kontinuierlicher Qualitätskreislauf. (Deming PDCA)"
- **Kategorie:** fachbegriff

---

## Baustein 3: projektphasen

### Metadaten
- **bausteinId:** gesundheitsprojekt-phasen
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Du planst ein Präventionsprojekt 'Bewegte Pause' auf der Station. In welcher Reihenfolge gehst du vor? Beschreibe 3-4 Phasen von Anfang bis Ende."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Klassische Projektphasen: **Initiierung → Planung → Durchführung → Abschluss**. Jede Phase hat eigene Ziele, Dokumente und Meilensteine. Die Initiierung klärt das 'Warum', die Planung das 'Wie', die Durchführung das 'Tun', der Abschluss das 'Was jetzt'."

**B1 (225 Zeichen):** "Ein Projekt hat 4 Phasen: **1. Initiierung**: Warum das Projekt? **2. Planung**: Wie machen wir es? **3. Durchführung**: Jetzt machen wir es. **4. Abschluss**: Was ist am Ende? Wie geht es weiter? Jede Phase ist wichtig."

- **Step-Typ:** timeline (4 Phasen mit Meilensteinen)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Ein Projekt durchläuft **vier klassische Phasen** (DIN 69901). Jede Phase hat eigene Aufgaben, Dokumente und Meilensteine:

**1. Initiierung (Start):**
Ideen sammeln, Problem definieren, Machbarkeit prüfen, Projektauftrag formulieren. Zentrale Frage: 'Warum überhaupt?' Ergebnis: Projektauftrag + Freigabe durch Leitung.

**2. Planung:**
Ziele schärfen (SMART), Maßnahmen planen, Ressourcen kalkulieren, Zeitplan erstellen, Risiken einschätzen. Zentrale Frage: 'Wie kommen wir zum Ziel?' Ergebnis: Projektstrukturplan, Zeitplan, Budget.

**3. Durchführung (Umsetzung):**
Maßnahmen umsetzen, Team steuern, laufend überwachen, Abweichungen korrigieren. Zentrale Frage: 'Laufen wir im Plan?' Ergebnis: Teilergebnisse, Meilensteine erreicht.

**4. Abschluss:**
Ergebnisse bewerten, Projektbericht schreiben, Erfahrungen sichern, Transfer in Regelbetrieb. Zentrale Frage: 'Was nehmen wir mit?' Ergebnis: Abschlussbericht, Nachhaltigkeit. (DIN 69901)"

**B1 (580 Zeichen):**
"Ein Projekt hat 4 Phasen. Jede Phase hat ihre eigene Aufgabe.

**Phase 1 — Initiierung (Start):**
Du fragst: Warum machen wir das? Was ist das Problem? Am Ende hast du einen Projektauftrag von der Chefin.

**Phase 2 — Planung:**
Du fragst: Wie machen wir es? Du planst: Was passiert wann? Wer macht was? Was brauchen wir? Am Ende hast du einen genauen Plan.

**Phase 3 — Durchführung:**
Du machst das Projekt. Du prüfst immer wieder: Sind wir im Plan? Wenn nicht, änderst du etwas.

**Phase 4 — Abschluss:**
Du schaust: Was haben wir erreicht? Du schreibst einen Bericht. Du überlegst: Was bleibt? Wie geht es weiter?"

- **Erklärungs-Step:** stepType `timeline` (4 Phasen mit Meilensteinen)
- **Glossar-Begriffe:** [Projektphase, Initiierung, Projektauftrag, Meilenstein]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Planung und Durchführung sind dasselbe"**
- **Fachbegriff:** Phasen-Verschmelzung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — Planung erfolgt **vor** Durchführung und ist getrennt davon. In der Planung entsteht der 'Fahrplan': Ziele, Ressourcen, Zeitplan. In der Durchführung wird dieser Plan umgesetzt. Ohne klare Trennung entsteht Aktionismus — du handelst ohne Ziel. Merke: Erst planen, dann tun."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — **Planung und Durchführung sind verschieden**. Zuerst planst du: Was, wie, wann, mit wem? Dann machst du es. Wenn du direkt machst ohne zu planen, gibt es Chaos. Merke: Erst planen, dann machen."

**D2: "Der Abschluss ist nur Formsache — das Projekt ist ja schon fertig"**
- **Fachbegriff:** Abschluss-Bagatellisierung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — der Abschluss ist eine **eigenständige, wichtige Phase**. Hier werden Ergebnisse bewertet, Erfahrungen gesichert, Nachhaltigkeit organisiert (Transfer in Regelbetrieb). Ohne sauberen Abschluss verpufft die Arbeit — niemand weiß, was gelernt wurde. Merke: Abschluss sichert den Erfolg."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — der **Abschluss ist wichtig**. Hier prüfst du: Was haben wir erreicht? Was hat geklappt, was nicht? Ohne Abschluss ist alle Arbeit umsonst, weil niemand es weiß. Merke: Ohne Abschluss geht die Erfahrung verloren."

**D3: "Die Initiierung ist überflüssig — man weiß doch, was man will"</br>"**
- **Fachbegriff:** Startphasen-Unterschätzung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — die Initiierung ist der **wichtigste Schritt**. Ohne klaren Projektauftrag arbeitest du ins Leere: Unklare Ziele, fehlende Legitimation von Leitung, unklare Ressourcen. Typischer Fehler von Anfängern: sofort mit Durchführung starten. Merke: Initiierung ist die Basis."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die **Initiierung ist sehr wichtig**. Ohne klaren Auftrag weißt du nicht: Was ist das Ziel? Hat die Chefin das erlaubt? Woher kommt das Geld? Ohne diese Phase gibt es später Streit. Merke: Start ist wichtig, nicht nur Zusatz."

### Richtig-Feedback

**C1 (275 Zeichen):** "Sehr gut. Die 4 Phasen: Initiierung (Warum?), Planung (Wie?), Durchführung (Tun), Abschluss (Was bleibt?). Jede Phase endet mit einem Meilenstein und Ergebnissen. Die Abfolge ist verbindlich — Abkürzungen (z.B. Phase 2 überspringen) führen zu Aktionismus und Fehlschlägen."

**B1 (230 Zeichen):** "Sehr gut. 4 Phasen eines Projekts: **Initiierung** (Warum?), **Planung** (Wie?), **Durchführung** (Machen), **Abschluss** (Was jetzt?). Jede Phase ist wichtig. Ohne eine Phase geht das Projekt schief. Merke: Reihenfolge einhalten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 4 klassischen Projektphasen in richtiger Reihenfolge."
- **Rückseite:** "1. Initiierung, 2. Planung, 3. Durchführung, 4. Abschluss. Jede Phase endet mit einem Meilenstein. (DIN 69901)"
- **Kategorie:** fakt

---

## Baustein 4: projektauftrag

### Metadaten
- **bausteinId:** gesundheitsprojekt-auftrag
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Deine Pflegedienstleitung sagt: 'Mach mal was zum Thema Bewegung auf der Station.' Was fehlt dir, um loszulegen? Welche Fragen musst du vorher klären?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Der Projektauftrag ist die schriftliche Grundlage: **Ziel, Rahmenbedingungen, Ressourcen, Verantwortliche, Zeitrahmen**. Ohne schriftlichen Auftrag startest du nicht. Mündliche Zusagen reichen nicht — sie werden später anders erinnert. Merke: Erst Auftrag, dann Start."

**B1 (215 Zeichen):** "Der Projektauftrag ist ein **Blatt Papier** mit wichtigen Infos: Was ist das Ziel? Wie viel Zeit hast du? Wie viel Geld? Wer hilft? Wer entscheidet? Ohne schriftlichen Auftrag fang nicht an. Mündlich reicht nicht."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (710 Zeichen):**
"Der **Projektauftrag** (auch Projektsteckbrief) ist das offizielle Startdokument eines Projekts. Er wird von der Leitung freigegeben und schafft **Verbindlichkeit** für alle Beteiligten. Pflichtbestandteile:

- **Projekttitel + Kurzbeschreibung:** Worum geht es?
- **Hintergrund/Anlass:** Welches Problem löst das Projekt?
- **Projektziel(e):** Was soll am Ende erreicht sein? (SMART formuliert)
- **Zielgruppe:** Für wen ist das Projekt?
- **Rahmenbedingungen:** Zeitraum, Budget, Personalstunden.
- **Projektleitung + Team:** Wer ist verantwortlich, wer macht mit?
- **Auftraggeber:** Wer hat es in Auftrag gegeben?
- **Meilensteine:** Wichtige Zwischenziele mit Datum.
- **Risiken:** Was könnte schiefgehen?

**Warum wichtig?** Ohne schriftlichen Auftrag fehlt die Legitimation. Bei Konflikten hast du nichts in der Hand. Führungskräfte-Wechsel führt zu 'Ich wusste nichts davon'. Der Auftrag schützt dich als Projektleitung. (DIN 69901)"

**B1 (580 Zeichen):**
"Was steht im Projektauftrag? Das ist ein wichtiges Blatt Papier für den Start:

**1. Was ist das Projekt?** Titel und eine kurze Beschreibung.
**2. Warum machen wir es?** Welches Problem?
**3. Was ist das Ziel?** Was soll am Ende fertig sein?
**4. Für wen?** Wer bekommt etwas davon?
**5. Wie viel Zeit und Geld?** Zeitrahmen und Budget.
**6. Wer ist dabei?** Projektleitung und Team.
**7. Wer hat es bestellt?** Auftraggeber (meist Chefin).
**8. Wichtige Termine (Meilensteine)**
**9. Risiken:** Was kann schiefgehen?

**Sehr wichtig:** Der Auftrag muss **schriftlich** sein. Die Chefin unterschreibt. Ohne Unterschrift fang nicht an. Sonst gibt es später Streit."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Projektauftrag, Auftraggeber, Projektsteckbrief, Legitimation]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein mündlicher Auftrag reicht aus"**
- **Fachbegriff:** Mündlichkeits-Trugschluss
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — ein **schriftlicher Projektauftrag** ist Pflicht. Mündliche Zusagen werden später anders erinnert, gerade bei Leitungswechsel oder Konflikten. Der schriftliche Auftrag schützt dich als Projektleitung, klärt Ressourcen und zeigt, dass das Projekt offiziell ist. Merke: Ohne Schrift kein Start."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — du brauchst einen **schriftlichen Auftrag**. Mündliche Zusagen sind später weg. Wenn die Chefin wechselt oder es Streit gibt, hast du nichts in der Hand. Der schriftliche Auftrag schützt dich. Merke: Immer schriftlich, nie nur mündlich."

**D2: "Der Projektauftrag ist erst am Ende wichtig"**
- **Fachbegriff:** Zeitpunkt-Fehler
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — der Projektauftrag steht **am Anfang**, nicht am Ende. Er ist das Startsignal. Am Ende gibt es den Projektbericht, der auf den Auftrag zurückbezieht ('Ziele erreicht?'). Ohne Auftrag am Anfang fehlt die Messlatte für den Abschluss. Merke: Auftrag = Start."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — der Auftrag kommt **zuerst**, nicht zum Schluss. Am Anfang sagt der Auftrag: Das ist das Ziel. Am Ende prüfst du: Haben wir das Ziel erreicht? Ohne Auftrag am Start weißt du am Ende nicht, ob es geklappt hat."

**D3: "Risiken im Auftrag zeigen zu lassen ist unprofessionell"**
- **Fachbegriff:** Risiko-Tabu
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Risiken im Auftrag zu nennen ist Profi-Standard**. Es zeigt, dass du das Projekt ernst durchdacht hast. Verschwiegene Risiken explodieren später und kosten Vertrauen. Die Leitung will wissen: Was könnte schiefgehen und was tust du dann? Merke: Risiken nennen = Kompetenz zeigen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Risiken zu nennen ist **gut und professionell**. Die Chefin will wissen, was schiefgehen kann. Wenn du es verschweigst und es passiert, bist du schuld. Wenn du es vorher sagst, bist du vorbereitet. Merke: Risiken zeigen = klug."

### Richtig-Feedback

**C1 (285 Zeichen):** "Genau. Der Projektauftrag ist das schriftliche Startdokument mit Titel, Hintergrund, Ziel, Zielgruppe, Rahmen, Projektleitung, Auftraggeber, Meilensteinen und Risiken. Er schafft Verbindlichkeit und schützt alle Beteiligten. Ohne Unterschrift der Leitung startest du nicht. (DIN 69901)"

**B1 (225 Zeichen):** "Sehr gut. Der Projektauftrag ist dein schriftlicher Start. Dort steht: Ziel, Zielgruppe, Zeit, Geld, wer macht was, Risiken. Die Chefin unterschreibt. Ohne diese Unterschrift fang nicht an. Merke: Immer schriftlich."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Pflichtbestandteile hat ein Projektauftrag? (Minimum)"
- **Rückseite:** "Projekttitel, Ziel (SMART), Zielgruppe, Zeitrahmen/Budget, Projektleitung + Auftraggeber. Schriftlich, unterschrieben. (DIN 69901)"
- **Kategorie:** handlung

---

## Baustein 5: projektstrukturplan

### Metadaten
- **bausteinId:** gesundheitsprojekt-psp
- **bloomLevel:** 4
- **wissensart:** handlung
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Du sollst ein Projekt 'Sturzprävention im Pflegeheim' planen. Wie zerlegst du diese große Aufgabe in kleinere Stücke, die man abhaken kann? Mach einen Vorschlag."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Der Projektstrukturplan (PSP, englisch WBS = Work Breakdown Structure) zerlegt ein Projekt in **Teilaufgaben und Arbeitspakete**. Hierarchisch: Hauptprojekt → Teilprojekte → Arbeitspakete. Jedes Arbeitspaket hat einen Verantwortlichen und eine Zeit. (DIN 69901)"

**B1 (220 Zeichen):** "Der Projektstrukturplan (**PSP**) ist ein Plan mit **Kästchen**. Oben steht das ganze Projekt. Dann wird es kleiner: Teilbereiche, dann Arbeitspakete. Jedes Kästchen hat eine Person, die es macht, und eine Zeit. So verlierst du nichts."

- **Step-Typ:** conceptmap (Baumstruktur)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Der **Projektstrukturplan (PSP)** — international **Work Breakdown Structure (WBS)** — ist die systematische Zerlegung eines Projekts in hierarchische Teilaufgaben. Er beantwortet die Frage: 'Was muss alles erledigt werden?'

**Struktur (3 Ebenen):**
- **Ebene 1 — Gesamtprojekt:** Der Titel (z.B. 'Trinkprojekt Wohnbereich').
- **Ebene 2 — Teilprojekte:** Große inhaltliche Blöcke (z.B. Bedarfsanalyse, Schulung, Umsetzung, Evaluation).
- **Ebene 3 — Arbeitspakete:** Konkrete Aufgaben (z.B. 'Trinkprotokoll erstellen', '5 Kollegen schulen').

**Pro Arbeitspaket definieren:**
- Verantwortliche Person
- Start- und Endtermin
- Benötigte Ressourcen
- Ergebnis (was liegt am Ende vor?)

**Methode:** Top-down (vom Gesamten ins Detail) oder bottom-up (Aufgaben sammeln, dann gruppieren). Der PSP ist die Basis für Zeitplan (Gantt), Kostenplan und Ressourcenplan. Faustregel: **80-Stunden-Regel** — ein Arbeitspaket sollte nicht länger als 80 Arbeitsstunden dauern. Sonst weiter zerlegen. (DIN 69901)"

**B1 (620 Zeichen):**
"**So machst du den Projektstrukturplan (PSP):**

Ein PSP ist ein **Baum** mit 3 Ebenen.

**Ebene 1 — ganz oben:** Das ganze Projekt. Zum Beispiel: 'Mehr trinken im Pflegeheim'.

**Ebene 2 — die Mitte:** Große Bereiche. Zum Beispiel: Planen, Schulen, Durchführen, Prüfen.

**Ebene 3 — unten:** Kleine Arbeitspakete. Zum Beispiel: 'Trinkprotokoll erstellen', '5 Kollegen schulen', 'Poster aufhängen'.

**Für jedes Arbeitspaket schreibst du auf:**
- **Wer** macht es?
- **Wann** fängt es an? Wann ist es fertig?
- **Was** brauchst du? (Geld, Material)
- **Ergebnis** — was liegt am Ende vor?

**Regel:** Ein Arbeitspaket sollte **nicht länger als 80 Stunden Arbeit** brauchen. Sonst weiter zerlegen in kleinere Pakete. Der PSP hilft dir: Du siehst sofort, was noch zu tun ist."

- **Erklärungs-Step:** stepType `conceptmap` (Baumstruktur mit Arbeitspaketen)
- **Glossar-Begriffe:** [Projektstrukturplan, PSP, WBS, Arbeitspaket, Teilprojekt]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Der PSP ist dasselbe wie der Zeitplan"**
- **Fachbegriff:** Plan-Verwechslung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — der PSP zeigt das **Was** (Arbeitspakete), der Zeitplan (Gantt) zeigt das **Wann** (Termine). Erst kommt der PSP: Welche Aufgaben gibt es? Dann wird mit dem Zeitplan geplant: In welcher Reihenfolge und wann? PSP ist die Grundlage — ohne PSP kein guter Zeitplan. Merke: PSP = was, Gantt = wann."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — das sind **zwei verschiedene Pläne**. PSP = **was** muss alles gemacht werden? (Arbeitspakete). Zeitplan (Gantt) = **wann** wird was gemacht? (Termine). Erst PSP, dann Zeitplan. Merke: PSP = was, Gantt = wann."

**D2: "Ein Arbeitspaket kann unbegrenzt groß sein"**
- **Fachbegriff:** Paket-Größen-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — es gibt die **80-Stunden-Regel**: Ein Arbeitspaket sollte nicht länger als 80 Arbeitsstunden dauern. Ist ein Paket größer, wird es weiter zerlegt. Warum? Sonst verlierst du die Kontrolle, Fortschritte sind nicht messbar, Verantwortung nicht klar. Merke: Arbeitspakete klein schneiden."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Arbeitspakete sollen **klein** sein. Regel: Nicht länger als 80 Arbeitsstunden. Sonst ist es zu groß. Du kannst nicht sehen, ob es vorangeht. Merke: Lieber viele kleine Pakete als wenige große."

**D3: "Der PSP wird nur einmal gemacht und nie geändert"</br>"**
- **Fachbegriff:** Statik-Mythos
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — der PSP ist ein **lebendes Dokument**. Wenn sich im Projektverlauf zeigt, dass Arbeitspakete fehlen oder anders zugeschnitten werden müssen, wird der PSP überarbeitet. Wichtig: Änderungen mit der Leitung abstimmen (Änderungsantrag). Aber starrer PSP = schlechter PSP. Merke: PSP darf sich anpassen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — der PSP **darf sich ändern**. Im Projekt merkst du vielleicht: Ein Arbeitspaket fehlt, oder es muss anders sein. Dann änderst du den PSP. Wichtig: Mit der Chefin besprechen. Merke: PSP ist nicht in Stein gemeißelt."

### Richtig-Feedback

**C1 (295 Zeichen):** "Sehr gut. Der PSP zerlegt das Projekt in Teilprojekte und Arbeitspakete. Pro Arbeitspaket: Verantwortlicher, Zeitrahmen, Ressourcen, Ergebnis. 80-Stunden-Regel begrenzt die Paketgröße. Der PSP ist Basis für Zeitplan, Kostenplan und Ressourcenplan — der wichtigste Planungs-Grundstein."

**B1 (235 Zeichen):** "Sehr gut. Der PSP zerlegt das Projekt in kleine Stücke (Arbeitspakete). Jedes Paket hat: eine Person, eine Zeit, eine Aufgabe, ein Ergebnis. Regel: nicht länger als 80 Stunden. So verlierst du nichts. Er ist die Grundlage."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist die 80-Stunden-Regel im Projektstrukturplan?"
- **Rückseite:** "Ein Arbeitspaket sollte nicht länger als 80 Arbeitsstunden dauern. Sonst weiter zerlegen. Grund: Kontrolle, messbare Fortschritte, klare Verantwortung. (DIN 69901)"
- **Kategorie:** handlung

---

## Baustein 6: meilensteine

### Metadaten
- **bausteinId:** gesundheitsprojekt-meilensteine
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Bei einer langen Reise mit dem Auto: Welche Orte wählst du als Zwischenstopp, um zu wissen, dass du auf dem richtigen Weg bist? Was macht einen guten Zwischenstopp aus?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Meilensteine sind **Zeitpunkte mit messbarem Zwischenergebnis**. Sie markieren: Ist Phase X abgeschlossen? Kennzeichen: konkretes Datum, klares Ergebnis (Dokument, Entscheidung, Abnahme), Dauer = 0 (ein Punkt, keine Strecke). Nicht mehr als 5-7 pro Projekt."

**B1 (220 Zeichen):** "Ein **Meilenstein** ist ein wichtiger **Zeitpunkt** im Projekt. Zum Beispiel: 'Projektauftrag unterschrieben' (15.10.2025) oder 'Schulungen fertig' (30.11.2025). Du prüfst: Ist das Ergebnis da? Ja oder nein? Nicht halb. Pro Projekt 5-7 Meilensteine."

- **Step-Typ:** timeline (Meilensteine im Projektverlauf)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Ein **Meilenstein** ist ein Ereignis von besonderer Bedeutung im Projektverlauf. Er markiert den **Übergang zwischen Phasen** oder wichtige Zwischenergebnisse. Eigenschaften:

- **Zeitpunkt, nicht Zeitspanne:** Dauer = 0 (ein Punkt auf dem Zeitstrahl).
- **Messbarer Prüfstein:** Ergebnis liegt vor oder nicht — binär, kein 'halb erreicht'.
- **Konkret formuliert:** 'Bedarfsanalyse abgeschlossen und Bericht an Leitung übergeben' (nicht 'Bedarf ermittelt').
- **Datum fix:** Wann wird er erreicht?
- **Verantwortlich:** Wer bestätigt?

**Beispiele in einem Gesundheitsprojekt:**
- M1: Projektauftrag unterschrieben.
- M2: Bedarfsanalyse abgeschlossen.
- M3: Schulungen durchgeführt (alle Mitarbeitenden).
- M4: Pilot-Umsetzung gestartet.
- M5: Evaluationsbericht vorgelegt.

**Faustregel:** 5-7 Meilensteine pro Projekt — nicht zu viele (verliert Bedeutung), nicht zu wenige (kein Fortschrittscheck). Meilensteine sind Kontrollpunkte: Ist Phase X wirklich fertig? Erst dann kommt Phase X+1. (DIN 69901)"

**B1 (580 Zeichen):**
"**Was sind Meilensteine?**

Ein Meilenstein ist ein wichtiger **Punkt im Projekt** — wie ein Zwischenstopp auf einer Reise. Am Meilenstein prüfst du: Haben wir dieses Zwischenziel erreicht? Ja oder nein?

**Merkmale:**
- Ein **Datum** (zum Beispiel 15.10.2025).
- Ein klares **Ergebnis** (zum Beispiel 'Auftrag unterschrieben').
- **Entweder erreicht oder nicht** — nicht halb fertig.
- **Kein Zeitraum**, sondern ein Zeitpunkt.

**Beispiele:**
- M1: Auftrag fertig (15.09.)
- M2: Plan fertig (30.09.)
- M3: Schulung fertig (15.10.)
- M4: Start der Umsetzung (01.11.)
- M5: Ende + Bericht (15.12.)

**Regel:** Nicht zu viele! Nur **5-7 Meilensteine** pro Projekt. Sonst verlieren sie ihre Bedeutung. Merke: Meilensteine sind wie Zwischenstopps."

- **Erklärungs-Step:** stepType `timeline` (5-7 Meilensteine)
- **Glossar-Begriffe:** [Meilenstein, Milestone, Kontrollpunkt, Projektphase]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Meilenstein hat eine Dauer von mehreren Tagen"**
- **Fachbegriff:** Dauer-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — ein Meilenstein ist **zeitpunktgebunden**, nicht zeitraumgebunden. Seine Dauer ist 0. Beispiel: 'Auftrag unterschrieben am 15.10.' — nicht 'Auftragsunterzeichnung vom 10.-15.10.' Wenn etwas dauert, ist es ein Arbeitspaket, kein Meilenstein. Merke: Meilenstein = Punkt, kein Zeitraum."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — ein Meilenstein ist ein **einzelner Tag**, kein Zeitraum. Entweder heute ist er erreicht oder nicht. Zum Beispiel: 'Plan fertig am 15.10.' — nicht '10.-15.10.' Merke: Meilenstein = ein Punkt, kein langer Strich."

**D2: "Je mehr Meilensteine, desto besser das Projekt"**
- **Fachbegriff:** Meilenstein-Inflation
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **zu viele Meilensteine verlieren ihre Bedeutung**. Faustregel: 5-7 pro Projekt. Wenn jede kleine Aufgabe ein Meilenstein ist, sind sie keine 'Steine' mehr, sondern Staub. Meilensteine markieren die wichtigen Übergänge zwischen Phasen — nicht jeden Teilerfolg. Merke: Weniger ist mehr."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **zu viele Meilensteine sind schlecht**. Regel: 5-7 pro Projekt. Wenn du 20 Meilensteine hast, sind sie nicht mehr wichtig. Meilensteine markieren die großen Schritte, nicht jede kleine Aufgabe. Merke: Weniger ist mehr."

**D3: "Ein Meilenstein kann halb erreicht sein"**
- **Fachbegriff:** Halb-fertig-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Meilensteine sind **binär**: erreicht oder nicht. Ein 'halb erreichter' Meilenstein ist kein Meilenstein. Wenn der Auftrag nicht unterschrieben ist, ist M1 nicht erreicht — auch wenn 90% des Textes schon fertig sind. Diese Klarheit macht Meilensteine wertvoll. Merke: Ja oder nein, nichts dazwischen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — ein Meilenstein ist **entweder erreicht oder nicht**. Kein 'fast' oder 'halb'. Wenn der Auftrag nicht unterschrieben ist, ist der Meilenstein nicht fertig, auch wenn fast alles steht. Merke: Ja oder nein."

### Richtig-Feedback

**C1 (275 Zeichen):** "Sehr gut. Meilensteine sind zeitpunktgebundene, messbare Zwischenergebnisse (Dauer = 0, binäres Ergebnis). 5-7 pro Projekt, jeweils konkret formuliert. Sie sind Kontrollpunkte zwischen Phasen. In einem Gesundheitsprojekt typisch: Auftrag, Analyse, Schulung, Pilotstart, Bericht."

**B1 (215 Zeichen):** "Sehr gut. Meilensteine sind wichtige Zeitpunkte: ein Datum, ein klares Ergebnis, entweder fertig oder nicht. 5-7 pro Projekt reichen. Sie helfen dir zu sehen: Bin ich noch im Plan? Merke: Meilensteine sind Zwischenstopps."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie viele Meilensteine sollte ein Projekt haben und warum?"
- **Rückseite:** "5-7 Meilensteine pro Projekt. Mehr verlieren ihre Bedeutung, weniger geben keine Kontrolle über Fortschritt. Jeder Meilenstein: Datum + binäres Ergebnis. (DIN 69901)"
- **Kategorie:** fakt

---

## Cluster 2: Theoretische Verankerung (B7-B12)

---

## Baustein 7: ottawa-charta

### Metadaten
- **bausteinId:** gesundheitsprojekt-ottawa
- **bloomLevel:** 2
- **wissensart:** definition
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Gesundheit hängt nicht nur vom Arzt ab. Welche anderen Bereiche der Gesellschaft tragen Gesundheit mit? Nenne 3-4 Beispiele."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Die Ottawa-Charta der WHO (1986) ist das Gründungsdokument moderner Gesundheitsförderung. Sie definiert 5 Handlungsfelder: **Gesundheitsförderliche Gesamtpolitik, gesundheitsförderliche Lebenswelten, Gemeinschaftsaktionen, persönliche Kompetenzen, Neuorientierung der Gesundheitsdienste**. (WHO Ottawa-Charta, 1986)"

**B1 (225 Zeichen):** "Die **Ottawa-Charta** ist ein Papier von 1986 von der WHO (Weltgesundheitsorganisation). Sie sagt: Gesundheit ist nicht nur Sache der Ärzte. Es gibt **5 Bereiche**, die für Gesundheit wichtig sind. Von Politik bis zum einzelnen Menschen."

- **Step-Typ:** text (displayFormat: news — "Ottawa 1986")

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Die **Ottawa-Charta zur Gesundheitsförderung** (WHO, 1986) ist das Gründungsdokument der modernen Gesundheitsförderung. Sie entstand auf der 1. Internationalen Konferenz zur Gesundheitsförderung in Ottawa, Kanada. Definition Gesundheitsförderung: 'Prozess, der Menschen befähigt, ihre Gesundheit zu stärken und selbst zu bestimmen.'

**Die 5 Handlungsfelder:**

1. **Gesundheitsförderliche Gesamtpolitik entwickeln** (Healthy Public Policy): Politik, Gesetzgebung (z.B. Rauchverbot, gesunde Ernährung in Schulen).

2. **Gesundheitsförderliche Lebenswelten schaffen** (Settings): Arbeitsplätze, Schulen, Städte gesundheitsförderlich gestalten.

3. **Gesundheitsbezogene Gemeinschaftsaktionen unterstützen** (Community Action): Selbsthilfegruppen, Quartiersarbeit, bürgerschaftliches Engagement.

4. **Persönliche Kompetenzen entwickeln** (Personal Skills): Gesundheitskompetenz, Lebenskompetenz, Bildung.

5. **Gesundheitsdienste neu orientieren** (Reorient Health Services): Weg von Krankheitsbehandlung, hin zu Prävention und Förderung.

Die Charta ist weltweit der Referenzrahmen für Gesundheitsprojekte. (WHO Ottawa-Charta, 1986)"

**B1 (640 Zeichen):**
"**Die Ottawa-Charta von 1986:**

Die WHO hat 1986 ein wichtiges Papier gemacht — die Ottawa-Charta. Ottawa ist eine Stadt in Kanada. Die Botschaft: **Gesundheit ist nicht nur Sache der Ärzte. Gesundheit geht alle an.**

**Die 5 Bereiche der Ottawa-Charta:**

1. **Politik:** Die Regierung macht Gesetze für Gesundheit. Zum Beispiel: Rauchverbot in Restaurants, gesundes Essen in Schulen.

2. **Lebenswelten:** Orte, wo Menschen leben — Arbeit, Schule, Stadt — sollen gesund sein.

3. **Gemeinschaft:** Menschen helfen sich gegenseitig. Selbsthilfegruppen, Nachbarschaft, Vereine.

4. **Persönliche Kompetenzen:** Jeder Mensch lernt, wie er gesund bleibt. Wissen, Können.

5. **Gesundheitsdienste ändern:** Ärzte und Kliniken sollen nicht nur heilen, sondern auch vorbeugen.

Diese 5 Bereiche sind weltweit die Grundlage für Gesundheitsprojekte. (WHO Ottawa-Charta, 1986)"

- **Erklärungs-Step:** stepType `text` (displayFormat: news — "Ottawa 1986: 5 Bereiche")
- **Glossar-Begriffe:** [Ottawa-Charta, WHO, Gesundheitsförderung, Handlungsfeld]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Ottawa-Charta sagt, jeder ist für seine Gesundheit selbst verantwortlich"**
- **Fachbegriff:** Individual-Reduktion
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die Charta betont **Verantwortung auf vielen Ebenen**: Politik, Gesellschaft, Gemeinschaft und Individuum. Die reine Fokussierung auf Selbstverantwortung widerspricht ihr — ohne gesunde Lebenswelten (Wohnen, Arbeit, Bildung) ist individuelle Gesundheitsverantwortung unfair. Merke: Gesundheit ist gemeinsam."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die Charta sagt: **Nicht nur der einzelne Mensch** ist für Gesundheit verantwortlich. Auch Politik, Schulen, Arbeitgeber tragen bei. Nur 'Selbst schuld' zu sagen ist falsch. Merke: Alle zusammen machen Gesundheit."

**D2: "Die Ottawa-Charta gilt nur für Entwicklungsländer"**
- **Fachbegriff:** Geographie-Missverständnis
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — die Ottawa-Charta ist **ein weltweit gültiges Rahmendokument**, entstanden in einem Industrieland (Kanada). Sie ist Grundlage für Gesundheitsprojekte in Deutschland (BZgA) und der EU. Nationale Präventionsgesetze wie das PrävG 2015 stützen sich auf die Charta. Merke: Gilt überall."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — die Ottawa-Charta gilt **weltweit**, auch in Deutschland. Sie wurde in Kanada gemacht, aber ist überall die Grundlage. Auch in Deutschland nutzen BZgA und Präventionsgesetz (PrävG) die 5 Bereiche. Merke: Gilt überall."

**D3: "Es gibt nur 3 Handlungsfelder in der Ottawa-Charta"**
- **Fachbegriff:** Zähl-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — die Charta nennt **5 Handlungsfelder**: Gesamtpolitik, Lebenswelten, Gemeinschaftsaktionen, persönliche Kompetenzen, Neuorientierung der Gesundheitsdienste. Merkhilfe: Politik → Lebenswelt → Gemeinschaft → Person → Gesundheitswesen. Alle 5 sind prüfungsrelevant. Merke: 5, nicht 3."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — es sind **5 Bereiche**, nicht 3. Zähl nochmal: 1. Politik, 2. Lebenswelten, 3. Gemeinschaft, 4. persönliche Kompetenzen, 5. Gesundheitsdienste. Alle 5 lernen. Merke: 5 Handlungsfelder in der Ottawa-Charta."

### Richtig-Feedback

**C1 (290 Zeichen):** "Sehr gut. Die Ottawa-Charta (WHO, 1986) ist das Gründungsdokument der modernen Gesundheitsförderung. 5 Handlungsfelder: Gesamtpolitik, Lebenswelten, Gemeinschaftsaktionen, persönliche Kompetenzen, Neuorientierung Gesundheitsdienste. Sie verteilt Verantwortung auf alle Ebenen."

**B1 (235 Zeichen):** "Sehr gut. Die Ottawa-Charta von 1986 ist das wichtigste Papier für Gesundheitsförderung. 5 Bereiche: Politik, Lebenswelten, Gemeinschaft, persönliche Kompetenzen, Gesundheitsdienste. Alle zusammen machen Gesundheit — nicht nur einer."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 5 Handlungsfelder der Ottawa-Charta (WHO, 1986)."
- **Rückseite:** "1. Gesundheitsförderliche Gesamtpolitik, 2. Gesundheitsförderliche Lebenswelten, 3. Gemeinschaftsaktionen, 4. Persönliche Kompetenzen, 5. Neuorientierung Gesundheitsdienste. (WHO Ottawa-Charta, 1986)"
- **Kategorie:** fachbegriff

---

## Baustein 8: setting-ansatz

### Metadaten
- **bausteinId:** gesundheitsprojekt-setting
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Statt jedem einzelnen Menschen zu sagen 'ernähre dich gesünder' — wo könnte man stattdessen ansetzen, um viele Menschen gleichzeitig zu erreichen? Nenne Beispiele."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Der **Setting-Ansatz** (WHO Sundsvall 1991) fokussiert auf **Lebenswelten** statt Einzelpersonen: Schule, Betrieb, Kita, Quartier, Pflegeeinrichtung. Gesundheit entsteht dort, wo Menschen leben, lernen, arbeiten — nicht in isolierten Aufklärungskampagnen."

**B1 (225 Zeichen):** "Setting = **Lebenswelt**. Der Setting-Ansatz heißt: Du machst Gesundheitsarbeit an Orten, wo Menschen leben. Zum Beispiel: in der Schule, am Arbeitsplatz, im Pflegeheim. Dort erreichst du viele auf einmal — nicht nur einzelne."

- **Step-Typ:** comparison (Individualansatz vs. Settingansatz)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Der **Setting-Ansatz** (Lebenswelt-Ansatz) ist ein zentrales Konzept der Gesundheitsförderung. Entwickelt auf der WHO-Konferenz in Sundsvall (1991) und im Präventionsgesetz (PrävG § 20a SGB V) verankert.

**Kernidee:** Gesundheit entsteht in den **Lebenswelten** von Menschen — dort, wo sie einen Großteil ihrer Zeit verbringen. Statt isolierter Einzelaufklärung setzt der Ansatz auf **ganze Systeme**.

**Typische Settings:**
- **Schule** (Gesundheitsfördernde Schule)
- **Betrieb** (BGF — Betriebliche Gesundheitsförderung)
- **Kita** (Gesunde Kita)
- **Quartier/Stadtteil** (Stadtteilgesundheit)
- **Pflegeeinrichtung** (Gesundes Pflegeheim)
- **Krankenhaus** (Health Promoting Hospital WHO-Netzwerk)

**Vorteile gegenüber Individualansatz:**
- Erreicht viele Menschen gleichzeitig
- Verändert Strukturen, nicht nur Wissen
- Nachhaltiger als Einzelkampagnen
- Erreicht auch schwer erreichbare Gruppen (niedrige Gesundheitskompetenz)

**Prinzip:** Nicht den Menschen zum Gesundheitsprogramm bringen — das Programm zum Menschen bringen. Für Gesundheitsprojekte: Setting wählen, das zur Zielgruppe passt. (BZgA Leitbegriffe Gesundheitsfoerderung)"

**B1 (610 Zeichen):**
"**Der Setting-Ansatz der WHO:**

Setting heißt auf Deutsch **Lebenswelt** — ein Ort, wo Menschen viel Zeit verbringen. Zum Beispiel: Schule, Arbeitsplatz, Pflegeheim.

**Die Idee:** Man macht Gesundheitsarbeit nicht für einzelne Menschen, sondern an diesen Orten. Dann erreicht man viele auf einmal.

**Beispiele für Settings:**
- **Schule**: Gesundes Essen in der Mensa, Bewegung im Unterricht.
- **Betrieb**: Rückenschule, Stressbewältigung.
- **Pflegeheim**: Sturzprävention, Bewegungsprogramme.
- **Stadtteil**: Spielplätze, Sportvereine.

**Warum ist das gut?**
- Du erreichst viele Menschen auf einmal.
- Du änderst nicht nur das Wissen, sondern auch die Umgebung.
- Es hält länger.
- Auch Menschen, die sonst nicht erreichbar sind, machen mit.

Für dein Projekt: Wähle einen Ort, wo deine Zielgruppe ist."

- **Erklärungs-Step:** stepType `comparison` (Individualansatz vs. Settingansatz)
- **Glossar-Begriffe:** [Setting, Lebenswelt, Setting-Ansatz, Individualansatz]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Der Setting-Ansatz ist dasselbe wie Einzelberatung"**
- **Fachbegriff:** Ansatz-Verwechslung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — der Setting-Ansatz ist das **Gegenteil** des Individualansatzes. Individualansatz: Einzelgespräch, einzelne Schulung. Setting-Ansatz: Ganze Lebenswelt verändern (Struktur, Kultur, Verhältnisse). Setting arbeitet an Systemen, nicht an Individuen. Merke: Setting = System, Individual = einzelne Person."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Setting-Ansatz und Einzelberatung sind **verschieden**. Einzelberatung = mit einer Person reden. Setting-Ansatz = ein ganzes System ändern (zum Beispiel die Schule oder das Pflegeheim). Merke: Setting arbeitet groß, nicht einzeln."

**D2: "Settings sind nur Gebäude"**
- **Fachbegriff:** Setting-Materialisierung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — ein Setting ist **mehr als ein Gebäude**. Es umfasst: Menschen, Strukturen, Prozesse, Kultur, Regeln. Ein 'gesundes Krankenhaus' verändert Arbeitsabläufe, Kommunikation, Führungsstil — nicht nur die Möbel. Settings sind sozio-ökologische Systeme. Merke: Setting = Menschen + Struktur + Kultur."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — ein Setting ist **mehr als ein Gebäude**. Dazu gehören: die Menschen, die Regeln, die Art, wie man zusammenarbeitet, die Stimmung. Wenn du Setting änderst, änderst du viele Dinge, nicht nur Wände. Merke: Setting = Ort + Leute + Regeln."

**D3: "Der Setting-Ansatz funktioniert nur für Kinder"**
- **Fachbegriff:** Altersbeschränkung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — der Setting-Ansatz gilt **für alle Altersgruppen**. Wichtige Settings: Kita + Schule (Kinder), Betrieb + Uni (Erwachsene), Pflegeeinrichtung + Quartier (alte Menschen). Gerade für Pflege wichtig: Pflegeheim als Setting für Sturzprävention, Bewegung, Mangelernährung. Merke: Alle Alter."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — der Setting-Ansatz gilt **für alle Altersgruppen**. Für Kinder: Kita, Schule. Für Erwachsene: Betrieb. Für alte Menschen: Pflegeheim, Stadtteil. In der Pflege ist das Pflegeheim ein wichtiges Setting. Merke: Alle Alter, alle Orte."

### Richtig-Feedback

**C1 (295 Zeichen):** "Sehr gut. Der Setting-Ansatz (WHO Sundsvall 1991) verlagert Gesundheitsarbeit von Einzelpersonen auf Lebenswelten (Schule, Betrieb, Kita, Pflegeheim, Quartier). Er verändert Strukturen statt nur Wissen. Gesetzlich im PrävG § 20a SGB V verankert. Für Projekte: richtiges Setting wählen."

**B1 (245 Zeichen):** "Sehr gut. Setting heißt Lebenswelt. Der Setting-Ansatz macht Gesundheitsarbeit an Orten wie Schule, Arbeitsplatz, Pflegeheim. Vorteil: Viele Menschen, Strukturen ändern, lange Wirkung. In der Pflege ist das Pflegeheim ein wichtiges Setting."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Setting-Ansatz in der Gesundheitsförderung?"
- **Rückseite:** "Gesundheitsförderung in Lebenswelten (Schule, Betrieb, Kita, Pflegeheim, Quartier) statt individueller Aufklärung. Erreicht viele, verändert Strukturen. (WHO Sundsvall 1991; § 20a SGB V)"
- **Kategorie:** fachbegriff

---

## Baustein 9: bzga-leitbegriffe

### Metadaten
- **bausteinId:** gesundheitsprojekt-bzga
- **bloomLevel:** 2
- **wissensart:** definition
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Wer könnte in Deutschland offizielle Empfehlungen geben, wie man Gesundheitsprojekte plant? Wer ist zuständig für Aufklärung und Prävention?"
- **Step-Typ:** mc

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Die **BZgA** (Bundeszentrale für gesundheitliche Aufklärung) ist die nationale Fachstelle für Gesundheitsförderung und Prävention. Sie gibt die **Leitbegriffe Gesundheitsförderung** heraus — ein Online-Glossar mit rund 80 Schlüsselbegriffen. (BZgA Leitbegriffe Gesundheitsfoerderung)"

**B1 (215 Zeichen):** "Die **BZgA** ist eine deutsche Behörde für Gesundheitsaufklärung. Sie gibt ein großes Wörterbuch heraus — die **Leitbegriffe Gesundheitsförderung**. Dort stehen etwa 80 Begriffe erklärt. Die BZgA ist in Köln. Sehr wichtig in Deutschland."

- **Step-Typ:** text (displayFormat: glossary)

### Stufe 3 — Erklärung

**C1 (690 Zeichen):**
"Die **Bundeszentrale für gesundheitliche Aufklärung (BZgA)** ist eine nachgeordnete Bundesbehörde des Bundesministeriums für Gesundheit (BMG), Sitz Köln. Gegründet 1967. Seit Januar 2024 Teil des Bundesinstituts für Öffentliche Gesundheit (BIÖG).

**Aufgabe:** Zentrale deutsche Institution für Gesundheitsförderung und Prävention. Erstellt Aufklärungsmaterial, Kampagnen und Fachpublikationen für Bevölkerung und Fachkräfte.

**Leitbegriffe Gesundheitsförderung:** Ein Standardwerk — etwa 80 Fachbegriffe aus Gesundheitsförderung und Prävention, wissenschaftlich fundiert, frei online zugänglich. Themen: Settings, Empowerment, Partizipation, Salutogenese, Qualitätsmanagement, Zielgruppen, Evaluation.

**Pflichtlektüre für Projektleitung in Pflege:** Die Leitbegriffe definieren die Fachsprache. Wer ein Gesundheitsprojekt plant, sollte die Begriffe in der BZgA-Fassung verwenden — sie sind der deutsche Standard. Die BZgA ist auch zentrale Evaluationsstelle für viele Projekte. (BZgA Leitbegriffe Gesundheitsfoerderung)"

**B1 (560 Zeichen):**
"**Was ist die BZgA?**

BZgA = **Bundeszentrale für gesundheitliche Aufklärung**. Das ist eine deutsche Behörde, wie eine staatliche Stelle. Sie sitzt in Köln. Seit 1967.

**Was macht die BZgA?**
- Informiert die Menschen in Deutschland über Gesundheit.
- Macht Kampagnen (zum Beispiel zu Impfungen, Rauchen, Aids).
- Gibt Fachbücher und Material heraus.

**Wichtig für dein Projekt: Die Leitbegriffe Gesundheitsförderung.**

Das ist ein **Fachwörterbuch** mit etwa 80 wichtigen Begriffen — zum Beispiel: Setting, Empowerment, Salutogenese. Alle Begriffe sind gut erklärt. Du kannst sie kostenlos im Internet lesen.

**Für dein Gesundheitsprojekt:** Nutze diese Begriffe so, wie die BZgA sie erklärt. Das ist der deutsche Standard. (BZgA Leitbegriffe Gesundheitsfoerderung)"

- **Erklärungs-Step:** stepType `text` (displayFormat: glossary)
- **Glossar-Begriffe:** [BZgA, Leitbegriffe, Bundesministerium für Gesundheit, BIÖG]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die BZgA ist eine private Firma"**
- **Fachbegriff:** Träger-Verwechslung
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — die BZgA ist eine **Bundesbehörde** im Geschäftsbereich des Bundesministeriums für Gesundheit, also staatlich. Keine Firma, keine NGO. Sie ist damit politisch legitimiert und staatlich finanziert. Seit 2024 Teil des BIÖG. Merke: BZgA = Staat, nicht Firma."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — die BZgA ist **staatlich**, keine Firma. Sie gehört zum Gesundheitsministerium in Berlin. Der Staat bezahlt sie. Deshalb ist sie neutral und vertrauenswürdig. Merke: BZgA gehört zum Staat, nicht zu einer Firma."

**D2: "Die BZgA-Leitbegriffe sind kostenpflichtig"**
- **Fachbegriff:** Zugangs-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — die **Leitbegriffe sind kostenlos online** zugänglich auf der BZgA-Website (leitbegriffe.bzga.de). Das ist bewusst so: Fachwissen soll für alle verfügbar sein, gerade für Studierende und Lernende. Auch die PDFs kannst du kostenlos herunterladen. Merke: Kostenlos im Web."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — die Leitbegriffe sind **kostenlos** im Internet. Du gehst auf die BZgA-Website, suchst den Begriff und liest. Auch als PDF zum Herunterladen kostenlos. Merke: BZgA-Leitbegriffe gratis online."

**D3: "Die BZgA gibt nur Empfehlungen, keine Definitionen"**
- **Fachbegriff:** Aufgaben-Reduktion
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — die BZgA macht **beides**: Empfehlungen für Projekte UND verbindliche Definitionen in den Leitbegriffen. Gerade die Fachsprache ist wichtig: Wenn alle unter 'Empowerment' dasselbe verstehen (BZgA-Definition), können Projekte verglichen werden. Merke: BZgA macht Begriffe UND Empfehlungen."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — die BZgA macht **beides**: sie gibt Empfehlungen UND erklärt Fachbegriffe. Die Begriffe sind wichtig, damit alle dasselbe verstehen. Zum Beispiel: Empowerment, Salutogenese. Merke: BZgA erklärt Begriffe und gibt Tipps."

### Richtig-Feedback

**C1 (270 Zeichen):** "Sehr gut. Die BZgA (Bundeszentrale für gesundheitliche Aufklärung) ist die zentrale deutsche Fachstelle für Gesundheitsförderung und Prävention, Sitz Köln, seit 2024 Teil des BIÖG. Die Leitbegriffe Gesundheitsförderung sind das Standardglossar — kostenlos online zugänglich."

**B1 (225 Zeichen):** "Sehr gut. Die BZgA ist die deutsche Behörde für Gesundheitsaufklärung in Köln. Die Leitbegriffe sind ein Fachwörterbuch mit etwa 80 Begriffen — kostenlos online. Sehr wichtig für jedes Gesundheitsprojekt. (BZgA Leitbegriffe Gesundheitsfoerderung)"

### Verknüpfte Karteikarte
- **Vorderseite:** "Wofür steht BZgA und welches Standardwerk gibt sie heraus?"
- **Rückseite:** "Bundeszentrale für gesundheitliche Aufklärung, Köln. Gibt die 'Leitbegriffe Gesundheitsförderung' heraus — rund 80 Fachbegriffe, kostenlos online. Seit 2024 Teil des BIÖG."
- **Kategorie:** fachbegriff

---

## Baustein 10: empowerment

### Metadaten
- **bausteinId:** gesundheitsprojekt-empowerment
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient kann eigentlich selbst aufstehen — du hast aber nie Zeit und machst es für ihn. Was lernt der Patient dadurch? Was wäre eine bessere Haltung?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Empowerment bedeutet **Befähigung und Selbstbestimmung**. Menschen sollen eigene Ressourcen erkennen und ihre Gesundheit selbst gestalten können — nicht bevormundet werden. In der Pflege: Ressourcen stärken statt Defizite kompensieren (BZgA Leitbegriffe Gesundheitsfoerderung)."

**B1 (225 Zeichen):** "**Empowerment** kommt aus dem Englischen und heißt **Befähigung** oder 'Macht geben'. Menschen sollen selbst bestimmen können, was für sie gut ist. Nicht: 'Ich weiß, was du brauchst.' Sondern: 'Was brauchst du? Ich helfe dir, es selbst zu schaffen.'"

- **Step-Typ:** text (displayFormat: quote — "Hilf mir, es selbst zu tun")

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"**Empowerment** ist ein Kernkonzept moderner Gesundheitsförderung. Die BZgA-Leitbegriffe definieren es als 'Prozess, in dem Menschen Kontrolle über ihre eigenen Lebensumstände und Gesundheit gewinnen'.

**Drei Ebenen:**
- **Individuelles Empowerment:** Eine Person stärkt ihre Selbstwirksamkeit (z.B. Diabetikerin lernt, ihre Werte selbst zu deuten).
- **Gruppen-Empowerment:** Selbsthilfegruppen, gegenseitige Unterstützung.
- **Gesellschaftliches Empowerment:** Communities gewinnen politisches Gewicht (z.B. Betroffenenvertretung).

**In der Pflege konkret:**
- Ressourcen erkennen statt nur Defizite dokumentieren
- Entscheidungen gemeinsam treffen (Shared Decision Making)
- Beraten statt anweisen
- Wissen verständlich weitergeben (Health Literacy fördern)
- Eigenaktivität zulassen, auch wenn es länger dauert

**Gegenteil: Paternalismus** — die Pflegefachkraft weiß alles besser und entscheidet für den Patienten. Führt zu Abhängigkeit, Motivationsverlust, erlernter Hilflosigkeit. Empowerment ist ein Haltungs-Wechsel: Patient als Partner. (BZgA Leitbegriffe Gesundheitsfoerderung)"

**B1 (640 Zeichen):**
"**Empowerment = Menschen stärken.**

Das Wort kommt aus dem Englischen (power = Kraft, Macht). Empowerment heißt: **Menschen bekommen Kraft und Kontrolle über ihr Leben und ihre Gesundheit.**

**Drei Ebenen:**
- **Einzelne Person:** Du stärkst eine Person. Zum Beispiel: Frau Meier lernt, selbst ihre Blutzucker-Werte zu prüfen.
- **Gruppe:** Menschen helfen sich gegenseitig. Zum Beispiel Selbsthilfegruppen.
- **Gesellschaft:** Viele Menschen zusammen haben mehr Kraft — zum Beispiel Vereine für Betroffene.

**In der Pflege bedeutet Empowerment:**
- Du fragst: 'Was können Sie selbst?' — nicht nur: 'Was können Sie nicht?'
- Du entscheidest mit dem Patienten zusammen.
- Du berätst, statt zu befehlen.
- Du erklärst, so dass der Patient es versteht.
- Du lässt Eigenaktivität zu, auch wenn es länger dauert.

**Gegenteil:** Für alle entscheiden. Das macht Patienten schwach. Besser: Patient als Partner. (BZgA Leitbegriffe Gesundheitsfoerderung)"

- **Erklärungs-Step:** stepType `text` (displayFormat: procontra — Empowerment vs. Paternalismus)
- **Glossar-Begriffe:** [Empowerment, Selbstwirksamkeit, Paternalismus, Shared Decision Making, Ressource]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Empowerment heißt, den Patienten alles selbst machen zu lassen — auch wenn er Hilfe braucht"**
- **Fachbegriff:** Laissez-faire-Missverständnis
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — Empowerment bedeutet **Befähigung**, nicht Alleinlassen. Du hilfst dort, wo nötig, und stärkst dort, wo möglich. Ein Mensch mit schwerem Schlaganfall darf nicht selbst aufstehen — aber du fragst: 'Wobei kann ich helfen, damit Sie mehr selbst machen können?' Merke: Empowerment = helfen UND befähigen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Empowerment heißt **nicht alleinlassen**. Du hilfst, wo es nötig ist. Aber du machst nicht alles, was der Patient selbst kann. Beispiel: Er kann den Löffel halten — also gibst du nicht das Essen ein. Merke: Empowerment = helfen UND stärken."

**D2: "Empowerment ist nur ein Modebegriff aus den USA"**
- **Fachbegriff:** Bagatellisierungs-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Empowerment ist ein **zentrales, seit den 1970ern etabliertes Konzept**, in WHO Ottawa-Charta und BZgA-Leitbegriffen verankert. In deutscher Pflegeforschung (z.B. Krohwinkel ressourcenorientierter Ansatz) genauso. Kein Modewort, sondern Grundhaltung professioneller Pflege. Merke: Empowerment ist Standard."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Empowerment ist kein **Modewort**, sondern ein wichtiges Konzept. Schon seit den 1970er Jahren. Die WHO und die BZgA in Deutschland nutzen es. Auch in der Pflege-Theorie in Deutschland wichtig. Merke: Empowerment ist Standard."

**D3: "Empowerment funktioniert nur bei gebildeten, selbstbewussten Patienten"</br>"**
- **Fachbegriff:** Bildungs-Vorurteil
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Empowerment gilt für **alle Menschen**, unabhängig von Bildung. Gerade bei Menschen mit geringer Gesundheitskompetenz ist es wichtig, Schritt für Schritt Selbstwirksamkeit aufzubauen. Du passt die Methoden an: einfache Sprache, Bilder, kleine Schritte. Merke: Empowerment für alle."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Empowerment ist **für alle Menschen**. Auch für Menschen, die wenig gelernt haben oder unsicher sind. Du musst nur die Methode anpassen: einfache Sprache, kleine Schritte, Bilder. Jeder kann stärker werden. Merke: Empowerment für alle."

### Richtig-Feedback

**C1 (290 Zeichen):** "Sehr gut. Empowerment ist Befähigung zur Selbstbestimmung über Gesundheit und Leben. Drei Ebenen: individuell, Gruppe, Gesellschaft. In der Pflege: Ressourcen stärken, gemeinsam entscheiden, beraten statt anweisen. Gegenteil ist Paternalismus. Kernhaltung professioneller Pflege."

**B1 (245 Zeichen):** "Sehr gut. Empowerment heißt Stärkung. Menschen sollen Kontrolle über ihre Gesundheit haben. In der Pflege: Patienten fragen, mit ihnen entscheiden, beraten statt befehlen. Gegenteil ist: alles für sie machen. Das schwächt. Merke: Patient als Partner."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet Empowerment in der Pflege? Und was ist das Gegenteil?"
- **Rückseite:** "Befähigung zur Selbstbestimmung: Ressourcen stärken, gemeinsam entscheiden, beraten statt anweisen. Gegenteil: Paternalismus (alles für den Patienten entscheiden). (BZgA Leitbegriffe)"
- **Kategorie:** fachbegriff

---

## Baustein 11: partizipation-wright

### Metadaten
- **bausteinId:** gesundheitsprojekt-partizipation
- **bloomLevel:** 4
- **wissensart:** klassifikation
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir zwei Projekte vor: In Projekt A plant die Pflegeleitung alles allein und informiert die Bewohner am Ende. In Projekt B entscheiden die Bewohner mit und gestalten das Projekt mit. Welcher Unterschied liegt da drin?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Das **Partizipationsstufenmodell** (Wright Partizipationsstufen, 2010) zeigt **9 Stufen** der Beteiligung — von Instrumentalisierung (Stufe 1) bis zu Selbstorganisation (Stufe 9). Echte Partizipation beginnt erst ab Stufe 6 (Mitbestimmung). Darunter nur Schein-Beteiligung."

**B1 (225 Zeichen):** "Das **Partizipationsstufenmodell** von Wright (2010) zeigt: Es gibt **9 Stufen**, wie Menschen bei einem Projekt mitmachen. Ganz unten: Nur zum Schein. Ganz oben: Die Menschen entscheiden selbst. Wichtig: Echt mitmachen beginnt erst ab Stufe 6."

- **Step-Typ:** timeline (9 Stufen aufsteigend)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"Das **Partizipationsstufenmodell** nach Michael T. Wright (2010) unterscheidet **9 Stufen** der Beteiligung von Zielgruppen an Projekten. Es basiert auf Arnsteins Leiter der Partizipation (1969), erweitert für Public Health.

**Nicht-Partizipation (Stufe 1-2):**
- **1 — Instrumentalisierung:** Zielgruppe wird benutzt (z.B. für PR-Fotos)
- **2 — Anweisung:** Zielgruppe erhält Anordnungen ohne Einbezug

**Vorstufen der Partizipation (Stufe 3-5):**
- **3 — Information:** Zielgruppe wird informiert, aber nicht einbezogen
- **4 — Anhörung:** Meinung wird gehört, aber nicht berücksichtigt
- **5 — Einbeziehung:** Beratung durch Zielgruppe, Entscheidung durch Leitung

**Partizipation (Stufe 6-8):**
- **6 — Mitbestimmung:** Zielgruppe entscheidet gleichberechtigt mit
- **7 — Teilweise Entscheidungsmacht:** Zielgruppe hat eigenständige Bereiche
- **8 — Entscheidungsmacht:** Zielgruppe entscheidet, Profis unterstützen

**Über Partizipation hinaus (Stufe 9):**
- **9 — Selbstorganisation:** Zielgruppe initiiert und leitet selbst

**Für Gesundheitsprojekte:** Klären, welche Stufe realistisch und angemessen ist. Stufen 1-2 sind unethisch. Stufen 3-5 sind häufig in Projekten, aber keine echte Partizipation. Ziel sollte Stufe 6+ sein. (Wright Partizipationsstufen, 2010)"

**B1 (650 Zeichen):**
"**Die 9 Stufen der Partizipation nach Wright (2010):**

Wright hat 2010 ein Modell mit 9 Stufen gemacht. Es zeigt, wie viel die Zielgruppe bei einem Projekt mitbestimmen darf.

**Unten (schlecht): Keine echte Beteiligung**
- **Stufe 1 — Instrumentalisierung:** Menschen werden nur benutzt.
- **Stufe 2 — Anweisung:** Sie bekommen nur Anordnungen.

**Mitte: Nur teilweise Beteiligung**
- **Stufe 3 — Information:** Sie werden informiert.
- **Stufe 4 — Anhörung:** Sie dürfen ihre Meinung sagen, aber es zählt nicht.
- **Stufe 5 — Einbeziehung:** Sie beraten mit. Aber die Leitung entscheidet.

**Oben: Echte Beteiligung (ab Stufe 6!)**
- **Stufe 6 — Mitbestimmung:** Sie entscheiden gleichberechtigt mit.
- **Stufe 7 — Teil-Entscheidung:** Sie haben eigene Bereiche.
- **Stufe 8 — Entscheidungsmacht:** Sie entscheiden, die Profis unterstützen.
- **Stufe 9 — Selbstorganisation:** Sie machen alles selbst.

**Wichtig:** Echte Beteiligung beginnt erst ab Stufe 6. Alles darunter ist Schein. (Wright Partizipationsstufen, 2010)"

- **Erklärungs-Step:** stepType `sorting` (9 Stufen in richtige Reihenfolge bringen)
- **Glossar-Begriffe:** [Partizipation, Stufenmodell, Mitbestimmung, Instrumentalisierung, Selbstorganisation]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Information der Zielgruppe ist schon Partizipation"**
- **Fachbegriff:** Info-Gleichsetzungs-Fehler
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **Information ist Stufe 3** und gilt bei Wright als **Vorstufe** der Partizipation, nicht als echte Beteiligung. Die Menschen wissen etwas, bestimmen aber nicht mit. Echte Partizipation beginnt erst ab Stufe 6 (Mitbestimmung). Merke: Info ≠ Partizipation. Mitentscheiden = Partizipation."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Information ist **nur Stufe 3**, also noch keine echte Mitbestimmung. Die Menschen wissen es, aber sie entscheiden nicht mit. Echt mitmachen beginnt erst ab Stufe 6. Merke: Nur Info ist nicht genug."

**D2: "Je höher die Stufe, desto besser — Stufe 9 ist immer das Ziel"**
- **Fachbegriff:** Maximierungs-Fehler
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — die **passende Stufe** hängt vom Projekt ab. Stufe 9 (Selbstorganisation) passt nicht immer — in einer Klinik mit akut kranken Patienten ist z.B. Mitbestimmung (Stufe 6) realistischer. Wichtig: Ethisch sind Stufen 1-2 inakzeptabel, aber Stufe 6-8 kann genug sein. Stufe 9 passt zu Selbsthilfe. Merke: Angemessene, nicht höchste Stufe."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — nicht **Stufe 9** ist immer das Ziel. Du wählst die Stufe, die zum Projekt passt. In einer Klinik reicht oft Mitbestimmung (Stufe 6). Stufe 9 (alles selbst) passt eher zu Selbsthilfegruppen. Wichtig: Stufen 1-2 (Nicht-Partizipation) sind immer schlecht. Merke: Passend wählen."

**D3: "Partizipation ist ein weiches Zusatz-Thema, keine Pflicht"**
- **Fachbegriff:** Bagatellisierungs-Fehler
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — Partizipation ist **Pflichtbestandteil** moderner Gesundheitsförderung. Die Ottawa-Charta (WHO 1986) und die BZgA-Leitbegriffe fordern sie ausdrücklich. Auch in der Pflege: Jede Versorgungsplanung ohne den Patienten verletzt sein Selbstbestimmungsrecht (Art. 2 GG) und BGB-Patientenrechte. Merke: Partizipation ist Pflicht."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — Partizipation ist **Pflicht**, nicht Zusatz. Die WHO und die BZgA sagen: Ohne Beteiligung kein echtes Gesundheitsprojekt. Auch in der Pflege hat der Patient ein Recht auf Mitbestimmung (Grundgesetz und BGB). Merke: Partizipation gehört dazu."

### Richtig-Feedback

**C1 (310 Zeichen):** "Sehr gut. Das Wright-Modell (2010) unterscheidet 9 Stufen: Nicht-Partizipation (1-2), Vorstufen (3-5), Partizipation (6-8), Selbstorganisation (9). Echte Partizipation beginnt erst ab Stufe 6 (Mitbestimmung). Für Projekte: angemessene Stufe wählen und transparent machen. (Wright Partizipationsstufen, 2010)"

**B1 (260 Zeichen):** "Sehr gut. Wright (2010) hat 9 Stufen der Beteiligung beschrieben. Stufe 1-2: gar keine Beteiligung. Stufe 3-5: nur teilweise. Stufe 6-8: echte Partizipation. Stufe 9: selbst organisieren. Ab Stufe 6 beginnt echte Beteiligung. Merke: Stufe 6 ist die Grenze."

### Verknüpfte Karteikarte
- **Vorderseite:** "Ab welcher Stufe beginnt bei Wright (2010) echte Partizipation, und wie heißt diese Stufe?"
- **Rückseite:** "Ab Stufe 6 = Mitbestimmung. Zielgruppe entscheidet gleichberechtigt mit. Stufen 1-5 sind keine echte Partizipation. (Wright Partizipationsstufen, 2010)"
- **Kategorie:** fakt

---

## Baustein 12: salutogenese

### Metadaten
- **bausteinId:** gesundheitsprojekt-salutogenese
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Zwei Fragen im Vergleich: A) 'Was macht Menschen krank?' B) 'Was hält Menschen gesund?' Welche Frage ist typisch für Medizin, welche für Gesundheitsförderung?"
- **Step-Typ:** truefalse

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Die **Salutogenese** (Antonovsky Salutogenese, 1979) fragt nach den **Schutzfaktoren der Gesundheit** — anders als die Pathogenese, die nach Krankheitsursachen fragt. Kernbegriff: **Kohärenzgefühl (SOC)**: Verstehbarkeit + Handhabbarkeit + Bedeutsamkeit."

**B1 (220 Zeichen):** "**Salutogenese** kommt von 'Salus' (Gesundheit) und 'Genese' (Entstehung). Es bedeutet: **Wie entsteht Gesundheit?** Anders als die Medizin, die fragt: 'Warum wird jemand krank?' Die Salutogenese fragt: 'Warum bleibt jemand gesund?'"

- **Step-Typ:** comparison (Pathogenese vs. Salutogenese)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Die **Salutogenese** ist ein Gegenkonzept zur Pathogenese. Entwickelt von **Aaron Antonovsky** (1979), amerikanisch-israelischer Medizinsoziologe.

**Ursprungsfrage:** Antonovsky untersuchte, warum **29% der Überlebenden des Holocaust** trotz extremer Traumatisierung psychisch gesund blieben. Er fragte: 'Was hält Menschen gesund?' (statt: Was macht sie krank?).

**Kernbegriff: Kohärenzgefühl (Sense of Coherence, SOC)**
Drei Komponenten:
- **Verstehbarkeit (Comprehensibility):** Welt als verstehbar und geordnet erleben.
- **Handhabbarkeit (Manageability):** Anforderungen als bewältigbar wahrnehmen (Ressourcen vorhanden).
- **Bedeutsamkeit (Meaningfulness):** Leben als sinnvoll erleben, Engagement lohnt sich.

**Gesundheits-Krankheits-Kontinuum:** Gesundheit und Krankheit sind keine Zustände, sondern ein Kontinuum. Niemand ist 100% gesund oder krank — wir bewegen uns zwischen Polen.

**Ressourcen (Generalized Resistance Resources, GRR):** Innere (Persönlichkeit, Bildung, Körperkraft) und äußere (Geld, soziale Netze, Kultur) Ressourcen stärken das Kohärenzgefühl.

**Bedeutung für Gesundheitsprojekte:** Ressourcen erkennen und stärken, nicht nur Risiken bekämpfen. Kohärenzgefühl fördern durch Information, Ermächtigung, Bedeutsamkeit. (Antonovsky Salutogenese, 1979)"

**B1 (680 Zeichen):**
"**Was ist Salutogenese?**

Salutogenese kommt aus dem Lateinischen: 'Salus' = Gesundheit, 'Genese' = Entstehung. Zusammen: **Wie entsteht Gesundheit?**

**Aaron Antonovsky** hat das Konzept 1979 entwickelt. Er war Soziologe und Mediziner. Er hat Menschen untersucht, die schreckliche Dinge erlebt haben (den Holocaust) — und trotzdem gesund blieben.

**Die wichtige Frage der Salutogenese:** 'Was hält Menschen gesund?' Nicht: 'Warum werden sie krank?'

**Der wichtigste Begriff: Kohärenzgefühl (SOC).** Das ist ein Gefühl, das aus 3 Teilen besteht:

1. **Verstehbarkeit:** 'Ich verstehe, was um mich herum passiert.'
2. **Handhabbarkeit:** 'Ich kann Probleme bewältigen.'
3. **Bedeutsamkeit:** 'Mein Leben hat Sinn.'

**Ein wichtiger Gedanke:** Gesund und krank ist kein 'Entweder-Oder'. Es gibt **ein Kontinuum** (eine Linie). Jeder Mensch ist irgendwo auf der Linie zwischen Gesund und Krank.

**Für dein Projekt:** Frage nicht nur: 'Was fehlt?' Frage auch: 'Was funktioniert? Was macht stark?' (Antonovsky Salutogenese, 1979)"

- **Erklärungs-Step:** stepType `comparison` (Pathogenese vs. Salutogenese — Tabelle)
- **Glossar-Begriffe:** [Salutogenese, Pathogenese, Kohärenzgefühl, SOC, GRR, Kontinuum]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Salutogenese ist das Gleiche wie Alternativmedizin"**
- **Fachbegriff:** Alternativmedizin-Verwechslung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Salutogenese ist **wissenschaftliches Modell**, keine Alternativmedizin. Antonovsky war anerkannter Medizinsoziologe, das Modell wird in Public Health, Pflegewissenschaft und Medizin genutzt. Es ersetzt die Pathogenese nicht, sondern **ergänzt** sie. Beide Perspektiven werden gebraucht. Merke: Salutogenese ist Wissenschaft."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Salutogenese ist **Wissenschaft**, keine Alternativmedizin. Es ist ein Konzept von einem Soziologen. Es ergänzt die normale Medizin: Medizin fragt, warum krank. Salutogenese fragt, warum gesund. Zusammen sind sie gut. Merke: Beides zusammen."

**D2: "Das Kohärenzgefühl hat 2 Komponenten: Wissen und Gefühl"**
- **Fachbegriff:** Komponenten-Fehler
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — das Kohärenzgefühl hat **3 Komponenten**: Verstehbarkeit (kognitiv), Handhabbarkeit (instrumentell), Bedeutsamkeit (motivational). Merkhilfe: 'Ich verstehe, ich kann, es lohnt sich.' Bedeutsamkeit ist die wichtigste der drei — ohne Sinn bleiben die anderen zwei wirkungslos. Merke: 3, nicht 2."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — das Kohärenzgefühl hat **3 Teile**, nicht 2: Verstehbarkeit, Handhabbarkeit, Bedeutsamkeit. Merke: 'Ich verstehe es, ich kann es, es lohnt sich.' Bedeutsamkeit ist am wichtigsten — ohne Sinn helfen die anderen zwei nicht."

**D3: "Salutogenese gilt nur für psychisch Kranke"</br>"**
- **Fachbegriff:** Zielgruppen-Reduktion
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Salutogenese ist **universell anwendbar**. Das Konzept gilt für alle Menschen, gesund oder krank, körperlich oder psychisch. In der Pflege nutzbar bei Chronikern, Rehabilitation, Gesundheitsförderung und Prävention. Die Ursprungsstudie bei Holocaust-Überlebenden belegt universelle Gültigkeit. Merke: Für alle Menschen."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — Salutogenese gilt **für alle Menschen**. Nicht nur für psychisch Kranke. Auch für körperlich Kranke, für Gesunde, für Pflegebedürftige. Das Modell ist universell. Merke: Gilt für alle, nicht nur eine Gruppe."

### Richtig-Feedback

**C1 (305 Zeichen):** "Sehr gut. Die Salutogenese (Antonovsky, 1979) fragt nach Gesundheitsentstehung, nicht Krankheitsentstehung. Kernbegriff: Kohärenzgefühl (SOC) mit 3 Komponenten: Verstehbarkeit, Handhabbarkeit, Bedeutsamkeit. Gesundheit als Kontinuum. Grundlage für Ressourcenorientierung in der Pflege und Gesundheitsförderung."

**B1 (260 Zeichen):** "Sehr gut. Salutogenese fragt: Was hält gesund? Von Antonovsky 1979. Der wichtigste Begriff ist das Kohärenzgefühl mit 3 Teilen: Verstehbarkeit, Handhabbarkeit, Bedeutsamkeit. Gesundheit und Krankheit sind eine Linie — keine zwei Zustände. (Antonovsky Salutogenese, 1979)"

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 3 Komponenten des Kohärenzgefühls nach Antonovsky."
- **Rückseite:** "1. Verstehbarkeit (Welt ist verstehbar), 2. Handhabbarkeit (Anforderungen sind bewältigbar), 3. Bedeutsamkeit (Leben hat Sinn). (Antonovsky Salutogenese, 1979)"
- **Kategorie:** fachbegriff

---
