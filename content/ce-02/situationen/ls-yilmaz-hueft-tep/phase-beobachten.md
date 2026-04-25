# Phase Beobachten — Frau Yilmaz, Hüft-TEP

**situationId:** ls-yilmaz-hueft-tep
**Phase:** beobachten (2 von 6)
**Bloom:** B3–B4
**Zeit:** ~30–50 Min
**Steps:** 7 (5 Kern + 2 Optional)
**Kern-Frage:** Was zeigt der Körper? Welche Risiken erkenne ich? Übersehe ich etwas?
**Brilliant-Prinzip:** Step 2.1 ist Neugier-Frage VOR Erklärung (Hautbefund wird gezeigt, BEVOR Dekubitus erklärt wird)

---

## Kontext

Du sitzt jetzt neben Frau Yilmaz. Sie liegt im Bett, das Kopfteil auf 30° erhöht. Ehemann Mustafa beobachtet dich. Frau Yilmaz hat gerade gesagt: _"Können wir das nicht morgen machen?"_ — du hast ihr erklärt, dass ihr zuerst gemeinsam schaut, wie es ihr geht, und dann entscheidet was heute möglich ist.

Das hat sie ein bisschen beruhigt. Jetzt beginnt das pflegerische Assessment. Du hast mehrere Dinge gleichzeitig im Blick:

1. Wie stark sind die Schmerzen wirklich?
2. Wie sieht die Haut aus — besonders an den Druckstellen?
3. Gibt es Zeichen, die auf eine Thrombose hindeuten könnten?
4. Wie ist die Wundsituation (Redon-Drainage)?
5. Welche Risikofaktoren sind bei ihr besonders relevant?

---

## Kern-Steps

### Step 2.1 — Brilliant-Frage: Hautbefund zuerst sehen, dann benennen

| Feld | Wert |
|------|------|
| **Step-ID** | `beob-01-haut-brilliant` |
| **Step-Typ** | `hotspot` |
| **Bloom** | B3 |
| **Tag** | anatomie |

**BRILLIANT-PRINZIP:** Du siehst den Befund, BEVOR du den Begriff kennst.

**Aufgabe:** "Du hast Frau Yilmaz gebeten, kurz auf die Seite zu drehen, um die Haut am Rücken und Steißbein zu inspizieren. Das Bild zeigt, was du siehst. Markiere alle Stellen, die dir auffallen."

**Bildbeschreibung (Bild-Slot):**
- Körper in 30°-Seitlage, Rückenansicht
- Rötung am Steißbein (~4 cm Durchmesser), nicht wegdrückbar beim Fingertest
- Fersen unauffällig
- Leichte Rötung linker Trochanter (Seite, auf der sie liegt)

*(Schüler soll auf Steißbein-Rötung und Trochanter-Rötung klicken)*

**Patientenzitat Z4:** _"Da tut es weh. Schon von gestern. Ich hab' gedacht, das ist normal."_

**Feedback (nach Markierung):**
"Du hast die Druckstellen erkannt. Jetzt lernen wir, was das bedeutet — und wie ernst es ist."

**Übergang:** Direkt weiter zu Step 2.2 (Erklärung was eine nicht wegdrückbare Rötung bedeutet).

**Baustein-Trigger:** Nach diesem Step → `dekubitus-prophylaxe-definition` und `dekubitus-prophylaxe-kategorien` einblenden (Stufe je nach Schüler-Profil).

---

### Step 2.2 — Dekubitus-Kategorie bestimmen

| Feld | Wert |
|------|------|
| **Step-ID** | `beob-02-dekubitus-kategorie` |
| **Step-Typ** | `mc` (Single-Choice) |
| **Bloom** | B3 |
| **Tag** | krankheitslehre |

**Einleitender Text (nach Baustein-Einblendung):**
"Du hast jetzt gelernt: Eine nicht wegdrückbare Rötung über einem Knochenvorsprung = Dekubitus Kategorie I. Frau Yilmaz' Steißbein zeigt genau das."

**Frage:** "Welche Sofortmaßnahme ist bei Dekubitus Kategorie I am Steißbein jetzt am wichtigsten?"

**Optionen:**
- A) Wunde mit einer Kompresse abdecken und beobachten
- B) Druckentlastung durch sofortige Umlagerung und Lagerungshilfsmittel ✅
- C) Den Arzt rufen — Kategorie I braucht eine Wundversorgung
- D) Feuchte Wundauflagen auftragen

**Richtige Antwort:** B

**Feedback B (richtig):** "Genau. Dekubitus Kategorie I bedeutet: kein offenes Gewebe, aber das Gewebe leidet. Die einzige wirksame Maßnahme ist sofortige und dauerhafte Druckentlastung. Alles andere — Salben, Auflagen — ist bei Kategorie I nicht indiziert und kann sogar schaden (NPUAP/EPUAP 2019). Dokumentieren und Pflegeplan anpassen — das kommt als nächstes."

**Feedback A (falsch):** "Abdecken schützt die Rötung nicht. Einen Dekubitus Kategorie I kann man nicht 'verbinden' — die Haut ist noch intakt. Das Problem ist der Druck. Den musst du beseitigen — nicht überdecken."

**Feedback C (falsch):** "Ein Arzt muss informiert werden — aber das ist nicht die allererste Priorität. Während du den Arzt rufst, liegt Frau Yilmaz weiter auf dem Steißbein. Zuerst: Druckentlastung. Dann: Dokumentation und Information der Pflegefachkraft."

**Feedback D (falsch):** "Feuchte Auflagen sind für offene Wunden — also Kategorie II oder höher. Kategorie I hat noch intakte Haut. Eine Auflage hier würde nichts bringen — und könnte sogar die Inspektion erschweren."

---

### Step 2.3 — Schmerzassessment

| Feld | Wert |
|------|------|
| **Step-ID** | `beob-03-schmerz-assessment` |
| **Step-Typ** | `comparison` |
| **Bloom** | B3 |
| **Tag** | pflege |

**Patientenzitat Z3:** _"Hier — das Bein, das Bein zieht so. Und hier unten, am Rücken. Ich liege schon so lang."_

**Aufgabe:** "Frau Yilmaz beschreibt zwei Schmerzorte. Welches Instrument nutzt du für die Schmerzmessung — und warum ist die Entscheidung nicht trivial?"

**Comparison-Karten:**

| Skala | Wann einsetzen | Vorteil | Limitation |
|-------|----------------|---------|-----------|
| **NRS** (Numerische Rating-Skala 0–10) | Sprachfähige Patienten | Schnell, präzise, in der Pflege Standard | Benötigt Zahlverständnis und Sprachkompetenz |
| **VRS** (Verbale Rating-Skala: kein/leicht/mäßig/stark/unerträglich) | Ältere Patienten, Sprachbarrieren | Keine Zahlen nötig | Weniger differenziert |
| **Gesichterskala (FPS)** | Sprachbarriere, Demenz, Kinder | Nonverbal möglich | Kann kulturell verschieden interpretiert werden |

**Entscheidungsfrage:** "Welche Skala verwendest du bei Frau Yilmaz — und warum?"

**Erwartete Antwort:** NRS ist die erste Wahl — Frau Yilmaz spricht Deutsch und ist kognitiv klar. Bei Verständnisproblemen: VRS als Backup. Die Gesichterskala wäre Reserve.

**Feedback:** "Richtig differenziert. Frau Yilmaz ist orientiert und sprachlich in der Lage, Zahlen zu nennen — NRS ist Standard. Die Gesichterskala wäre nützlich, wenn die Sprachbarriere größer wäre oder sie desorientiert wäre. Wichtig: Immer dieselbe Skala verwenden im Verlauf, damit Vergleiche möglich sind."

---

### Step 2.4 — Thrombose-Risiko erkennen (Virchow-Trias anwenden)

| Feld | Wert |
|------|------|
| **Step-ID** | `beob-04-thrombose-virchow` |
| **Step-Typ** | `categorize` |
| **Bloom** | B4 |
| **Tag** | krankheitslehre |

**Einleitender Text:**
"Bei Frau Yilmaz läuft seit dem OP-Tag Fondaparinux als Antikoagulation. Trotzdem: Eine Thrombose ist bei Hüft-TEP-Patienten das größte akute Risiko in den ersten Tagen. Du musst verstehen WARUM — und die Anzeichen kennen.

Die Virchow-Trias beschreibt drei Faktoren, die zusammen eine Thrombose begünstigen: Gefäßwandschaden, Stase (verlangsamter Blutfluss), Hyperkoagulabilität (erhöhte Gerinnungsbereitschaft). (Virchow, 1856)"

**Aufgabe:** "Ordne Frau Yilmaz' spezifische Risikofaktoren den 3 Säulen der Virchow-Trias zu."

| Risikofaktor | Virchow-Säule |
|---|---|
| Hüft-OP — Gefäßverletzung während des Eingriffs | Gefäßwandschaden |
| 2-3 Tage Bettruhe — Beinvenen werden kaum durchblutet | Stase |
| Adipositas (BMI 34) — venöser Rückstrom erschwert | Stase |
| Entzündungsreaktion nach OP — Gerinnungsfaktoren erhöht | Hyperkoagulabilität |
| Diabetes mellitus — Gefäßveränderungen chronisch | Gefäßwandschaden |

**Feedback (richtig):** "Genau — Frau Yilmaz hat alle drei Säulen der Virchow-Trias gleichzeitig abgedeckt. Das macht das Thrombose-Risiko bei Hüft-TEP so hoch — und erklärt warum die Antikoagulation schon ab dem OP-Tag beginnt, nicht erst wenn Symptome auftreten."

**Baustein-Trigger:** Wenn < 3 von 5 richtig → `thrombose-prophylaxe-virchow-trias` einblenden (Stufe je nach Profil).

---

### Step 2.5 — Klinische Thrombose-Zeichen prüfen

| Feld | Wert |
|------|------|
| **Step-ID** | `beob-05-thrombose-klinisch` |
| **Step-Typ** | `truefalse` (Mehrfach) |
| **Bloom** | B4 |
| **Tag** | krankheitslehre |

**Einleitender Text:**
"Du schaust jetzt Frau Yilmaz' Beine genauer an. Du drückst leicht auf die Wade. Sie sagt: 'Das tut ein bisschen weh.' Du schaust auf Schwellung und Rötung."

**Aufgabe:** Beantworte diese Aussagen mit Wahr oder Falsch:

1. "Wadenschmerz auf Druck (Homans-Zeichen) ist ein sicheres Zeichen für eine Thrombose." → **Falsch** — Homans-Zeichen hat eine Spezifität von nur ca. 50 %. Es gibt viele Ursachen für Wadenschmerz. Es dient als Hinweis, nicht als Beweis. (Evidenzbasiert, DDG 2017)

2. "Einseitige Schwellung eines Beins nach Hüft-OP sollte sofort mittels Doppler-Sonografie abgeklärt werden." → **Wahr** — Klinische Zeichen allein reichen nicht zur Diagnose. Bei Verdacht: bildgebende Diagnostik, keine abwartende Beobachtung. (DGG 2022)

3. "Da Frau Yilmaz Antikoagulation bekommt, ist eine Thrombose ausgeschlossen." → **Falsch** — Antikoagulation reduziert das Risiko signifikant, schließt es aber nicht aus. Mechanische Prophylaxe (Mobilisation, Kompressionsstrümpfe) bleibt weiterhin notwendig.

4. "Das Tragen von Antiemboliestrümpfen ist ausschließlich Aufgabe der Physiotherapie." → **Falsch** — Das Anlegen von Kompressionsstrümpfen ist eine pflegerische Aufgabe. Anleitung und Kontrolle liegen bei der Pflegekraft (§ 3 Abs. 2 PflBG — Vorbehaltsaufgabe Pflegeprozessverantwortung).

**Feedback gesamt:** "Thrombose-Diagnostik ist komplex. Die klinischen Zeichen sind Hinweise, keine Gewissheit. Wichtig ist: Bei Verdacht → sofort melden, nicht abwarten. Und: Antikoagulation allein ersetzt die Mobilisation nicht — beides zusammen schützt."

---

## Optionale Steps

### Step 2.6 (Optional) — Braden-Skala anwenden

| Feld | Wert |
|------|------|
| **Step-ID** | `beob-06-braden-optional` |
| **Step-Typ** | `slider` |
| **Bloom** | B3 |
| **Für wen** | Mittlere und fortgeschrittene Schüler |
| **Tag** | pflege |

**Aufgabe:** "Die Braden-Skala erfasst das Dekubitus-Risiko in 6 Kategorien. Schätze für Frau Yilmaz jede Kategorie ein."

| Kategorie | Beschreibung | Slider (1–4) |
|---|---|---|
| Sensorische Wahrnehmung | Fühlt sie Druck? | 3 (leicht eingeschränkt — Schmerz vorhanden, reagiert aber) |
| Feuchtigkeit | Schweißtendenz? | 3 (Diabetes — leicht erhöhte Schweißneigung) |
| Aktivität | Wie mobil? | 2 (stuhlgebunden / bettlägerig nach OP) |
| Mobilität | Kann sie sich selbst drehen? | 2 (eingeschränkt — Lagerungsvorschrift + Schmerz) |
| Ernährung | Isst sie ausreichend? | 3 (isst, aber Diabetiker — Wundheilung eingeschränkt) |
| Reibung und Scherkräfte | Wird sie beim Hochziehen gerieben? | 2 (Problem vorhanden — Adipositas, wird hochgezogen) |

**Ergebnis:** ~15 Punkte = erhöhtes Dekubitus-Risiko (Grenzwert ≤ 18: Risiko vorhanden, ab ≤ 9: hohes Risiko). (Braden/Bergstrom, 1987)

**Feedback:** "Frau Yilmaz ist klar im Risikobereich. Das erklärt, warum du schon am 3. Post-OP-Tag eine Rötung am Steißbein findest. Dieser Score muss dokumentiert werden — und bestimmt, wie oft sie umgelagert wird."

**Baustein-Trigger:** → `dekubitus-prophylaxe-braden-skala` einblenden (Stufe 2 oder 3).

---

### Step 2.7 (Optional) — Redon-Drainage beobachten

| Feld | Wert |
|------|------|
| **Step-ID** | `beob-07-drainage-optional` |
| **Step-Typ** | `flipcard` |
| **Bloom** | B3 |
| **Für wen** | Schüler die noch keine Drainageerfahrung haben |
| **Tag** | krankheitslehre |

**Aufgabe:** Flip-Karten zu Wunddrainagen.

**Karte 1:**
- Vorderseite: "Was bedeutet 'serös-blutig' bei einer Redon-Drainage?"
- Rückseite: "Serös = klare, gelbliche Flüssigkeit (Wundwasser). Blutig = rötlich gefärbt durch Blut. Serös-blutig = Mischung, typisch für die ersten 1-3 Tage nach OP. Normal. Bei rein blutig-roter Förderung: sofort melden."

**Karte 2:**
- Vorderseite: "Frau Yilmaz' Redon fördert heute 40 ml. Gestern waren es 80 ml. Wie bewertest du das?"
- Rückseite: "Positiv — Fördermenge nimmt ab, das ist Zeichen der Wundheilung. Ab < 20-30 ml/d (Arztanordnung) kann die Drainage in der Regel entfernt werden."

**Karte 3:**
- Vorderseite: "Wer entscheidet, wann die Drainage entfernt wird?"
- Rückseite: "Der Arzt — nach Arztanordnung. Die Pflegekraft kontrolliert und dokumentiert die Fördermenge, informiert bei Auffälligkeiten und zieht nach Anordnung."

---

## Risiko-Zusammenfassung (Pflicht — jeder Schüler sieht das)

**Übergangs-Text nach allen Beobachtungs-Steps:**

"Du hast jetzt ein vollständiges Bild:

**Dekubitus:** Kategorie I am Steißbein, leichte Rötung Trochanter links → Druckentlastung SOFORT nötig, Pflegeplan anpassen.

**Thrombose:** Alle drei Virchow-Faktoren vorhanden. Antikoagulation läuft. Klinische Zeichen: Wadenschmerz links auf Druck — muss gemeldet werden. Mobilisation ist beste Prophylaxe.

**Schmerz:** NRS 5-6 in Ruhe, NRS 7 bei Bewegung (gestern). Analgesie ist vor der Mobilisation zu prüfen.

**Übersehenes Risiko** (das taucht jetzt auf, auch wenn du es nicht erkannt hast):
Pneumonie-Risiko. Frau Yilmaz atmet flach — Schmerz und Adipositas hemmen die Atemtiefe. Kein Fieber, aber Atemfrequenz 18/min, SpO2 96% (Wert aus Akte). Das ist ein Risiko, das du beobachten musst — auch wenn es heute noch nicht kritisch ist."

*(Didaktisches Prinzip: Übersehene Risiken werden erklärt, nicht bestraft.)*

---

## Baustein-Trigger (Phase beobachten — Gesamt)

| Trigger | Baustein-ID | Stufe |
|---------|-------------|-------|
| Step 2.1 (Hotspot) — Rötung nicht erkannt | `dekubitus-prophylaxe-definition` | Sequencer wählt |
| Step 2.1 (Hotspot) — nach Befund | `dekubitus-prophylaxe-kategorien` | Sequencer wählt |
| Step 2.4 < 3 von 5 richtig | `thrombose-prophylaxe-virchow-trias` | Sequencer wählt |
| Step 2.6 (Optional, falsche Slider) | `dekubitus-prophylaxe-braden-skala` | Stufe 2–3 |

---

## Phase-Abschluss

**Zwischenseite:** "Du hast ein vollständiges Risikobild. Dekubitus Kategorie I, Thrombose-Risiko hoch, Schmerz aktiv, Pneumonie-Risiko im Blick.

Jetzt kommt die entscheidende Frage: Was ist die richtige Reihenfolge? Was muss ZUERST passieren — und warum? Das planst du in Phase 3."
