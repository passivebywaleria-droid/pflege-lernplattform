# Phase Planen — Frau Yilmaz, Hüft-TEP

**situationId:** ls-yilmaz-hueft-tep
**Phase:** planen (3 von 6)
**Bloom:** B3–B5
**Zeit:** ~20–40 Min
**Steps:** 5 (4 Kern + 1 Optional)
**Kern-Frage:** Welche Pflegeziele setze ich? In welcher Reihenfolge? Und wie formuliere ich das korrekt?

---

## Kontext

Du bist zurück im Stationszimmer. Du hast deine Beobachtungen notiert:
- Dekubitus Kategorie I am Steißbein
- Thrombose-Risiko hoch, Wadenschmerz links auf Druck
- Schmerz NRS 5-6 in Ruhe
- Erster Aufstehversuch heute notwendig (3. post-OP-Tag)
- Ehemann Mustafa ist anwesend, keine Deutschkenntnisse

Du besprichst kurz mit Frau Wendt:
> _"Gut gemacht. Jetzt musst du die Pflege für heute planen. Was ist die Reihenfolge? Was kommt zuerst?"_

---

## Kern-Steps

### Step 3.1 — Schlüsseleinsicht: Schmerzmittel VOR Mobilisation

| Feld | Wert |
|------|------|
| **Step-ID** | `plan-01-schmerz-zuerst` |
| **Step-Typ** | `mc` (Single-Choice) |
| **Bloom** | B4 |
| **Tag** | pflege |

**Frage:** "Du möchtest Frau Yilmaz heute aufstehen lassen. Was tust du ZUERST?"

**Optionen:**
- A) Aufstehversuch direkt starten — Bewegung ist die beste Schmerztherapie
- B) Erst prüfen ob das Analgetikum (Metamizol) heute Morgen gegeben wurde — wenn nicht: sofort nachholen, 30 Minuten Wirkzeit abwarten, dann Mobilisation ✅
- C) Erst die Drainage entfernen, damit der Schlauch nicht zieht
- D) Physiotherapeutin rufen — die soll das übernehmen

**Richtige Antwort:** B

**Feedback B (richtig):** "Das ist die Schlüsseleinsicht: Schmerzmittel vor Mobilisation. Ein Schmerzmittel mit 30-Minuten-Wirkzeit muss rechtzeitig gegeben werden. Ohne ausreichende Analgesie scheitert die Mobilisation erneut — wie gestern. Das ist keine weiche Empfehlung, das ist Standard in der orthopädischen Pflege. Schmerzkontrolle ist die Voraussetzung für erfolgreiche Mobilisation, nicht umgekehrt."

**Feedback A (falsch):** "Bewegung kann Schmerz langfristig lindern — das stimmt. Aber ein NRS 7 beim ersten Aufstehversuch gestern zeigt: der Schmerz ist jetzt ein Hindernis. Ohne Analgesie wird Frau Yilmaz das Aufstehen erneut abbrechen — und das kostet sie Vertrauen und dich Zeit."

**Feedback C (falsch):** "Die Drainage entfernt der Arzt — nach Anordnung, nicht vor dem Aufstehversuch. Außerdem schränkt eine Drainage das Aufstehen nicht grundsätzlich ein. Das ist nicht das erste Problem heute."

**Feedback D (falsch):** "Physiotherapie und Pflege arbeiten zusammen — aber die erste Mobilisation planen und vorbereiten ist Pflegeaufgabe. Frau Yilmaz' Schmerz, ihre Angst, die Kommunikation mit Mustafa — das alles liegt bei dir, nicht nur bei der Physio."

---

### Step 3.2 — Pflegeziel formulieren (PESR)

| Feld | Wert |
|------|------|
| **Step-ID** | `plan-02-pesr-formulieren` |
| **Step-Typ** | `cloze` (Lückentext) |
| **Bloom** | B4 |
| **Tag** | pflege |

**Einleitender Text:**
"Pflegeziele werden in der deutschen Pflege häufig nach dem PESR-Schema formuliert: **P**roblem — **E**tiologie (Ursache) — **S**ymptome — **R**essourcen.

Das macht den Unterschied zwischen einer allgemeinen Aussage ('Patient ist mobilitätseingeschränkt') und einem konkreten, nachvollziehbaren Pflegeziel."

**Aufgabe:** Fülle die Lücken aus.

**Problem:** Frau Yilmaz hat ein erhöhtes Dekubitus-Risiko.
**Etiologie:** Sie ist seit ___ Tagen bettlägerig nach Hüft-TEP, hat Schmerzen die die Eigenbewegung hemmen, und hat ___ (Adipositas, BMI 34), was den Druck auf Knochenvorsprünge erhöht.
**Symptome:** Rötung am ___, Kategorie I, nicht wegdrückbar.
**Ressourcen:** Frau Yilmaz ist kooperativ, gibt Schmerzen an, ist ___ orientiert (kann kommunizieren, ist kein Demenzrisiko).

**Pflegeziel:** _"Frau Yilmaz hat bis zur Entlassung keine Verschlechterung des Dekubitus Kategorie I am Steißbein. Sie wird mindestens ___ Mal täglich druckentlastet (Lagerungswechsel)."_

**Lösungen:** 2-3 / ein erhöhtes Körpergewicht / Steißbein / vollständig / 4-6

**Feedback (richtig):** "Gut formuliert. Ein PESR-Pflegeziel ist kein Roman — es ist präzise, messbar und nachvollziehbar. 'Kein Dekubitus' ist kein Ziel — 'keine Verschlechterung des Kategorie I innerhalb von 48 Stunden' schon. Das Team kann überprüfen ob das Ziel erreicht wurde."

**Feedback (falsch):** "Das PESR-Schema zwingt dich zur Präzision. 'Patient soll besser werden' ist kein Pflegeziel. PESR heißt: Was ist das Problem? Woher kommt es? Woran erkennt man es? Was hat der Mensch trotzdem? Das ergibt ein konkretes, messbares Ziel."

**Baustein-Trigger:** Wenn Schüler mehr als 2 Lücken falsch → `pflegeprozess-pflegeziel-pesr` einblenden (Stufe je nach Profil).

---

### Step 3.3 — Maßnahmen priorisieren

| Feld | Wert |
|------|------|
| **Step-ID** | `plan-03-massnahmen-sortieren` |
| **Step-Typ** | `sorting` |
| **Bloom** | B4 |
| **Tag** | pflege |

**Aufgabe:** "Bringe die folgenden Pflegemaßnahmen in die richtige Reihenfolge für heute Vormittag."

**Karten (richtige Reihenfolge):**
1. Prüfen ob Metamizol Morgenmedikament gegeben wurde (ggf. nachholen)
2. 30 Minuten warten (Wirkzeit Analgesie)
3. Zimmer vorbereiten: Unterarmgehstützen bereitstellen, Betthöhe anpassen
4. Frau Yilmaz über den Plan informieren, Angst ernst nehmen
5. Ehemann Mustafa durch Frau Yilmaz kurz erklären lassen was geplant ist
6. Aufstehversuch: Bett hoch → Beine über Bettkante → 3 Min sitzen → dann aufstehen
7. Nach Aufstehen: Schmerz-Reassessment, Lagerung danach prüfen

**Feedback (falsch sortiert):** "Die Reihenfolge ist nicht beliebig. Schritt 1 ohne Schritt 2 ist ein Fehler — ein Schmerzmittel das soeben gegeben wurde, hat noch keine Wirkung. Schritt 4 ohne Schritt 5 ist ein Fehler — wenn Mustafa nicht weiß was passiert, wird er eingreifen, weil er sich Sorgen macht."

---

### Step 3.4 — Ehemann einbeziehen: Kommunikationsplan

| Feld | Wert |
|------|------|
| **Step-ID** | `plan-04-mustafa-kommunikation` |
| **Step-Typ** | `text` (displayFormat: `scenario`) |
| **Bloom** | B4 |
| **Tag** | pflege |

**Patientenzitat Z5:** _"Die Frau von der Physiotherapie hat auch gesagt, ich soll. Aber ich habe Angst. Was wenn es kaputt geht?"_

**Text:**
"Frau Yilmaz macht sich Sorgen. Und Mustafa macht sich Sorgen. Er hat seine Frau seit Jahrzehnten beschützt — er versteht nicht, warum Fremde sie jetzt bewegen sollen, wenn sie schmerzen hat.

Du kannst ihn nicht ausschließen. Aber du kannst ihn einbeziehen — auch ohne gemeinsame Sprache.

**Drei Möglichkeiten der Kommunikation mit Mustafa:**

1. **Über Frau Yilmaz:** Bitte sie, ihm kurz zu erklären, was heute geplant ist. Gib ihr ein einfaches Satz-Angebot: 'Bitte sagen Sie Ihrem Mann: Die Pflegerin hilft mir heute aufzustehen. Das ist wichtig für meine Beine.'

2. **Nonverbal:** Aufstehen zeigen — langsam vordemonstrieren, was du mit Frau Yilmaz vorhast. Lächeln, Augenkontakt, ruhige Gesten. Mustafa versteht Körpersprache.

3. **Dolmetscher-Service:** Wenn die Situation kritisch wird oder Mustafa aktiv interveniert — dann Dolmetscher-Service aktivieren (Klinik-Standard, Telefondolmetsch). Das dauert, ist aber manchmal notwendig.

**Didaktische Botschaft:** Interkulturelle Kommunikation ist nicht nur eine Frage der Sprache. Sie ist eine Frage von Respekt, Tempo und Körpersprache. Mustafa ist kein Problem — er ist ein Ressource, wenn du ihn richtig einbindest."

---

## Optionaler Step

### Step 3.5 (Optional) — Pflegeplanung: Vergleich formell vs. informell

| Feld | Wert |
|------|------|
| **Step-ID** | `plan-05-formal-informal-optional` |
| **Step-Typ** | `comparison` |
| **Bloom** | B3 |
| **Für wen** | Schüler mit noch wenig Dokumentationserfahrung |
| **Tag** | pflege |

**Aufgabe:** "Was ist der Unterschied zwischen der mündlichen Absprache mit Frau Wendt und dem schriftlichen Pflegeplan?"

| | Mündliche Absprache | Schriftlicher Pflegeplan |
|---|---|---|
| **Zweck** | Koordination im Moment | Verbindliches Handlungsdokument für alle Schichten |
| **Rechtswirkung** | keine | rechtlich relevant (§ 630f BGB) |
| **Wer sieht es** | nur Anwesende | ganzes Pflegeteam, Arzt, Qualitätsmanagement |
| **Wann nötig** | immer | immer — auch wenn mündlich abgesprochen wurde |

**Fazit:** Die mündliche Absprache mit Frau Wendt ersetzt den Pflegeplan nicht. Was heute gemacht wurde, muss dokumentiert werden.

---

## Baustein-Trigger (Phase planen — Gesamt)

| Trigger | Baustein-ID | Stufe |
|---------|-------------|-------|
| Step 3.2 > 2 Lücken falsch | `pflegeprozess-pflegeziel-pesr` | Sequencer wählt |
| Step 3.3 falsch sortiert | `pflegeprozess-massnahmenplanung` | Stufe 2–3 |

---

## Phase-Abschluss

**Zwischenseite:** "Du hast einen Plan. Analgesie prüfen — 30 Min warten — Umgebung vorbereiten — kommunizieren — dann Aufstehversuch.

Jetzt kommt der Moment der Wahrheit: Das Durchführen. Und zwei Dinge werden nicht so laufen wie geplant. Bist du bereit?"
