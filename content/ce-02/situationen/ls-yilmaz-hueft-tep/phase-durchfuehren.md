# Phase Durchführen — Frau Yilmaz, Hüft-TEP

**situationId:** ls-yilmaz-hueft-tep
**Phase:** durchfuehren (4 von 6)
**Bloom:** B4–B5
**Zeit:** ~30–50 Min
**Steps:** 8 (6 Kern + 2 Optionale — inkl. 2 Komplikationen mit Branching)
**Kern-Frage:** Wie führe ich Mobilisation sicher durch? Und was tue ich, wenn etwas nicht wie geplant läuft?

**Komplikation 1:** Orthostatische Hypotonie beim ersten Aufstehen
**Komplikation 2:** Ehemann Mustafa greift ein — will Frau Yilmaz ins Bett zurücklegen

---

## Kontext

30 Minuten nach der Metamizol-Gabe. Du bist zurück in Zimmer 12. Frau Yilmaz ist noch im Bett, Kopfteil 30° erhöht. Du hast ihr angekündigt: "Wir versuchen es jetzt." Mustafa sitzt auf seinem Stuhl.

Du hast das Bett auf Arbeitshöhe gestellt, die Unterarmgehstützen stehen bereit. Frau Wendt ist auf dem Flur und weiß, dass du jetzt anfängst.

---

## Kern-Steps

### Step 4.1 — Reihenfolge der Mobilisation

| Feld | Wert |
|------|------|
| **Step-ID** | `dur-01-mobilisation-reihenfolge` |
| **Step-Typ** | `sequencing` |
| **Bloom** | B4 |
| **Tag** | pflege |

**Aufgabe:** "Bringe die Schritte der ersten Mobilisation nach Hüft-TEP in die richtige Reihenfolge."

**Karten (richtige Reihenfolge):**
1. Bett auf Bettkanten-Höhe einstellen (damit Füße beim Hinsetzen den Boden berühren)
2. Frau Yilmaz ankündigen was passiert: "Ich helfe Ihnen jetzt, die Beine über die Seite zu bringen."
3. Oberkörper aufrichten (Kopfteil weiter hochstellen ODER manuell unterstützen)
4. Beide Beine gleichzeitig über die Bettkante schwingen — nicht einzeln (wegen Lagerungsvorschrift: Hüftbeugung kontrollieren)
5. 3 Minuten an der Bettkante sitzen: Schwindel abfragen, Kreislauf anpassen lassen
6. Aufstehen: Frau Yilmaz stützt sich auf die Unterarmgehstützen, du stehst seitlich-hinter ihr
7. Sofort Schmerz-Reassessment: "NRS jetzt?"
8. Wenn NRS ≤ 5: kurz stehen oder erste Schritte; wenn NRS > 7: sofort hinsetzen, Plan anpassen

**Feedback (falsch sortiert):** "Die Reihenfolge ist nach kinästhetischen Prinzipien strukturiert. Schritt 4 ist besonders wichtig: beide Beine gleichzeitig — weil bei Hüft-TEP das operative Bein nicht alleine abgesetzt werden darf (Luxationsgefahr durch unkontrollierte Adduktion). Schritt 5 (3 Min sitzen) ist kein optionaler Schritt — er ist Pflicht. Kreislauf braucht Zeit zur Anpassung."

**Baustein-Trigger:** Wenn Schüler Schritt 5 (Sitzen abwarten) überspringt → `mobilisation-orthostatisch-phasen` einblenden (Stufe je nach Profil).

---

### Step 4.2 — Komplikation 1: Orthostatische Hypotonie (GROSSES Branching)

| Feld | Wert |
|------|------|
| **Step-ID** | `dur-02-orthostatisch-branching` |
| **Step-Typ** | `branching` (3 Pfade + Re-Entry) |
| **Bloom** | B5 |
| **Tag** | krankheitslehre |

**Szenario:**
"Frau Yilmaz sitzt seit 2 Minuten an der Bettkante. Plötzlich sagt sie leise:
> _'Mir ist schwindelig. Das dreht sich.'_

Sie greift nach deinem Arm. Ihr Gesicht wird blass. Was tust du jetzt?"

**Pfad A:** "Frau Yilmaz sofort hinlegen, Beine hoch lagern, Kreislauf stabilisieren, RR messen."
→ **Richtiger Pfad** — Sicherheit zuerst, dann Ursache verstehen.
→ Kurzer Text: "Genau. Orthostatische Hypotonie = Blutdruckabfall beim Aufstehen. Bei Frau Yilmaz mehrere Risikofaktoren: Bettlägerigkeit (Gefäßregulation gedämpft), Antidiabetika (manche senken RR), postoperative Schwäche. RR liegend: 128/78 mmHg. RR sitzend nach 3 Min: 98/62 mmHg. Differenz > 30 mmHg systolisch = klinisch relevante Orthostase. Maßnahme: hinlegen, warten, nächster Versuch in 20-30 Min."
→ Dann: "Möchte er weiterführen oder aufhören?" → Re-Entry zu Schritt 4.3 (zweiter Versuch, Step 4.1 erneut mit Information über Orthostase)

**Pfad B:** "Warten — das geht gleich vorbei, ein bisschen Schwindel ist normal."
→ **Falscher Pfad** — Intervention notwendig.
→ Text: "Schwindel bei orthostatischer Hypotonie ist KEIN 'normaler' Schwindel. Ein ungesicherter Sturz aus dieser Position — sitzend auf Bettkante nach Hüft-TEP — kann zur Re-Fraktur oder Luxation führen. Das Warten ist hier kein geduldiges Handeln, sondern ein Risiko. Sofort reagieren."
→ Zurück zur Entscheidung (Pfad A wird jetzt erklärt und gewählt).

**Pfad C:** "Frau Wendt rufen — ich bin überfordert."
→ **Zwischenpfad** — Nicht falsch, aber optimierbar.
→ Text: "Frau Wendt zu rufen ist keine Niederlage — im Zweifelsfall ist das richtig. Aber in der Zeit, bis sie kommt, kannst du bereits die wichtigste Maßnahme eingeleitet haben: Frau Yilmaz sicher hinlegen. Pflege bedeutet nicht Warten auf Anweisung — sondern situationsgerechtes Handeln im Rahmen der Kompetenz. Schritt 1: hinlegen. Schritt 2: Frau Wendt informieren."
→ Re-Entry zu Pfad A.

---

### Step 4.3 — Zweiter Versuch: Sicherheits-Dialog

| Feld | Wert |
|------|------|
| **Step-ID** | `dur-03-dialog-zweiter-versuch` |
| **Step-Typ** | `dialog` (4 Phasen) |
| **Bloom** | B4 |
| **Tag** | pflege |

**Szenario:** 25 Minuten später. Frau Yilmaz liegt wieder, RR jetzt stabil. Du erklärst ihr was passiert ist.

**Entscheidung 1 — Wie erklärst du Frau Yilmaz die Orthostatische Hypotonie?**

- A) "Das ist normal nach einer OP. Der Körper muss sich erst daran gewöhnen, wieder aufzustehen." ✅
- B) "Der Blutdruck ist kurz abgefallen. Das passiert manchmal, keine Sorge."
- C) "Das ist wegen Ihrer Diabetesmedikamente. Die müssen angepasst werden."

**Feedback bei A (richtig):** "Genau das ist die richtige Balance: verständlich, nicht dramatisiert, erklärend. Frau Yilmaz versteht, dass ihr Körper gerade etwas Neues lernt. Das nimmt die Scham ('Ich bin so schwach') und erklärt warum der zweite Versuch trotzdem sinnvoll ist."

**Patientenzitat Z6:** _"Ach — es geht. Es geht doch. Das hätte ich nicht gedacht."_
*(Erscheint nach erfolgreichem zweitem Aufstehversuch — zeigt Frau Yilmaz' Überraschung über sich selbst.)*

**Entscheidung 2 — Frau Yilmaz steht. Wie lange lässt du sie stehen?**
- A) "Sofort wieder hinsetzen — es war schon schwierig genug."
- B) "Kurz stehen lassen, NRS fragen, dann langsam 1-2 Schritte wenn NRS ≤ 5." ✅
- C) "Jetzt direkt zum Stuhl gehen — das schafft sie."

**Feedback bei B (richtig):** "Genau — jeder Schritt ist ein Erfolg. Das Ziel heute ist nicht der Marathon, das Ziel ist: aufgestanden. NRS ≤ 5 im Stehen = Erfolg. Das dokumentierst du, das stärkt Frau Yilmaz' Selbstvertrauen."

---

### Step 4.4 — Komplikation 2: Ehemann Mustafa interveniert (Dialog-Branching)

| Feld | Wert |
|------|------|
| **Step-ID** | `dur-04-mustafa-branching` |
| **Step-Typ** | `branching` (2 Pfade + Auflösung) |
| **Bloom** | B5 |
| **Tag** | pflege |

**Szenario:**
Frau Yilmaz steht zum ersten Mal. Du stehst seitlich hinter ihr. Dann:

**Patientenzitat Z7 (Mustafa, Türkisch mit Übersetzung):**
_"Sie soll ins Bett. Sie ist krank. Warum macht ihr das mit ihr?"_

Mustafa steht auf, macht einen Schritt auf Frau Yilmaz zu, will nach ihrem Arm greifen.

**Was tust du jetzt?**

**Pfad A:** "Ruhig, klar, nonverbal: Hebe die Hand, signalisiere 'Stopp', lächle ihn gleichzeitig an. Dann — über Frau Yilmaz — bitten: 'Frau Yilmaz, könnten Sie Ihrem Mann kurz sagen, dass alles gut ist und Sie selbst entschieden haben aufzustehen?'" ✅
→ Text: "Mustafas Reaktion ist Liebe, kein Angriff. Er sieht seine kranke Frau stehen und glaubt, ihr zu helfen wenn er sie wieder hinlegt. Deine Aufgabe: kurze, ruhige Kommunikation OHNE Worte (er versteht kein Deutsch) + Frau Yilmaz als Vermittlerin aktivieren. Das stärkt ihre Autonomie und erklärt Mustafa gleichzeitig die Situation."

**Pfad B:** "Direkt auf Türkisch via Übersetzungs-App: 'Sie macht das gut, bitte nicht stören.'" 
→ Kurzer Hinweis: "Kein schlechter Instinkt — Technologie nutzen ist legitim. Aber: Tone und Formulierung sind entscheidend. 'Bitte nicht stören' klingt hart. Besser: 'Ihre Frau ist mutig. Alles gut.' Und: Frau Yilmaz einbeziehen bleibt wichtig — sie ist die Entscheidungsinstanz, nicht du."

**Auflösung (beide Pfade):**
"Frau Yilmaz sagt auf Türkisch etwas zu Mustafa. Er setzt sich langsam wieder hin. Schaut zu. Nach einer Minute nickt er — ein kleines Nicken. Er versteht."

---

### Step 4.5 — Lagerung nach Mobilisation

| Feld | Wert |
|------|------|
| **Step-ID** | `dur-05-lagerung-nach-mobilisation` |
| **Step-Typ** | `mc` (Single-Choice) |
| **Bloom** | B4 |
| **Tag** | pflege |

**Frau Yilmaz ist nach dem Aufstehversuch wieder im Bett. Du denkst an die Druckstelle am Steißbein.**

**Frage:** "Welche Lagerung wählst du jetzt — unter Berücksichtigung der Hüft-TEP-Lagerungsvorschrift UND des Dekubitus Kategorie I am Steißbein?"

**Optionen:**
- A) Rückenlage, Kopf flach — Steißbein liegt druckfrei, Hüftwinkel 0°
- B) 30°-Mikrolagerung auf die linke Seite (gesunde Seite) — Steißbein entlastet, Hüftwinkel < 90° ✅
- C) Linke Seite 90°, da Steißbein so am besten entlastet ist
- D) Frau Yilmaz soll die Liegeposition selbst wählen

**Richtige Antwort:** B

**Feedback B (richtig):** "Genau — die 30°-Mikrolagerung ist der Kompromiss: Steißbein wird entlastet, und der Hüftwinkel bleibt weit unter 90°. Bei 90°-Seitenlage wäre das Hüftgelenk in ungünstigem Winkel. Die 30°-Regel kommt aus dem NPUAP/EPUAP-Standard (2019) — sie ist speziell entwickelt, um Steißbein UND Trochanter gleichzeitig zu schonen."

**Feedback C (falsch):** "Bei 90° Seitenlage liegt der Trochanter auf dem Bett — neues Druckrisiko. Außerdem ist der Hüftwinkel bei Seitenlage 90° nicht kontrollierbar. Die 30°-Mikrolagerung ist die richtige Wahl (NPUAP/EPUAP 2019)."

**Feedback D (falsch):** "Frau Yilmaz' Wunsch ist wichtig — aber bei Hüft-TEP und Dekubitus Kategorie I hat die medizinische Sicherheit Vorrang. Du kannst und sollst ihr erklären warum die Lagerung wichtig ist. Entscheiden tust du gemeinsam mit ihr — aber innerhalb der sicheren Optionen."

---

### Step 4.6 — Umlagerungsplan erstellen

| Feld | Wert |
|------|------|
| **Step-ID** | `dur-06-umlagerungs-timer` |
| **Step-Typ** | `timer` |
| **Bloom** | B3 |
| **Tag** | pflege |

**Aufgabe:**
"Frau Yilmaz liegt jetzt in 30°-Mikrolagerung. Du weißt: Dekubitus-Prophylaxe bedeutet konsequente Druckentlastung.

Stelle den richtigen Umlagerungsintervall ein."

**Schieberegler:** 1 Stunde — 2 Stunden — 3 Stunden — 4 Stunden — 6 Stunden

**Richtige Einstellung:** 2 Stunden (Standard-Umlagerungsintervall, DNQP 2017/2024; NPUAP/EPUAP 2019)

**Feedback (2 Stunden):** "Genau — 2-stündlich ist der Standard. Bei bereits bestehendem Kategorie I und Risikofaktoren sogar mit Option auf 1-stündlich zu erwägen. Dieser Rhythmus muss im Pflegeplan stehen — nicht im Kopf der Pflegekraft."

**Feedback (3+ Stunden):** "Zu lange. Bei einem bestehenden Dekubitus Kategorie I ist 3-stündlich nicht ausreichend. Der Standard liegt bei 2 Stunden (DNQP 2024). Bei höherem Risiko sogar kürzer."

---

## Optionale Steps

### Step 4.7 (Optional) — Antiemboliestrümpfe anlegen

| Feld | Wert |
|------|------|
| **Step-ID** | `dur-07-antiembolie-optional` |
| **Step-Typ** | `wordorder` |
| **Bloom** | B3 |
| **Für wen** | Schüler ohne praktische Erfahrung mit Antiemboliestrümpfen |
| **Tag** | pflege |

**Aufgabe:** "Bringe die Wörter in die richtige Reihenfolge: Das ist die korrekte Reihenfolge beim Anlegen von Antiemboliestrümpfen."

**Wörter:** Bein / Strumpf umstülpen / Ferse anpassen / Strumpf über Bein ziehen / Knitter prüfen / Größe messen (vorher)

**Richtige Reihenfolge:** Größe messen → Strumpf umstülpen → Ferse anpassen → Strumpf über Bein ziehen → Knitter prüfen

**Feedback:** "Das Umstülpen des Strumpfs vor dem Anziehen ist der häufigste Fehler den Anfänger machen. Die richtige Technik verhindert Scherkräfte auf die Haut — besonders bei Frau Yilmaz mit dem Dekubitus-Risiko."

---

### Step 4.8 (Optional) — Schmerzprotokoll führen

| Feld | Wert |
|------|------|
| **Step-ID** | `dur-08-schmerzdoku-optional` |
| **Step-Typ** | `tablefillin` |
| **Bloom** | B4 |
| **Für wen** | Schüler die Dokumentations-Details lernen möchten |
| **Tag** | pflege |

**Aufgabe:** "Trage die Schmerzmessung in die Verlaufstabelle ein."

| Zeit | Schmerz NRS | Ort | Maßnahme | Ergebnis |
|------|------------|-----|----------|---------|
| 08:15 | ___ | Steißbein, Bein | Metamizol 500 mg oral | — |
| 09:00 | ___ | Bein beim Aufstehen | Aufstehversuch 1 — Orthostase, abgebrochen | — |
| 09:30 | ___ | Bein im Stehen | Aufstehversuch 2 — erfolgreich, 3 Schritte | — |

**Einzutragen:** 6 / 7 / 4

---

## Baustein-Trigger (Phase durchfuehren — Gesamt)

| Trigger | Baustein-ID | Stufe |
|---------|-------------|-------|
| Step 4.1 Schritt 5 übersprungen | `mobilisation-orthostatisch-phasen` | Sequencer wählt |
| Step 4.2 Pfad B oder C gewählt | `mobilisation-orthostatisch-definition` | Stufe 2–3 |
| Step 4.5 falsch | `positionierung-30-grad` | Stufe 2–3 |
| Step 4.6 > 2h gewählt | `dekubitus-prophylaxe-umlagerungsrhythmus` | Stufe 2 |

---

## Phase-Abschluss

**Zwischenseite:** "Frau Yilmaz steht. Zum ersten Mal seit der OP. Drei Schritte. Mustafa hat es gesehen.

Du hast zwei Komplikationen gemeistert — orthostatische Hypotonie und einen unruhigen Angehörigen. Du hast sie gelöst.

Jetzt: Nachmittag. Was hat die Mobilisation bewirkt? Schmerz besser? Haut? Was ist morgen nötig? Das evaluierst du jetzt."
