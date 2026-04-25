# Phase 3 — Planen

**situationId:** ls-petrov-schlaganfall
**Zeit:** ~20-35 Min
**Bloom:** B3–B4
**Kern-Frage:** Was nehme ich als erstes in die Hand — und warum?
**Steps:** 5

---

## KontextB1

Es ist 07:40 Uhr. Du stehst vor dem Zimmer.
Du weißt jetzt was Herrn Petrov bedroht.
Jetzt planst du: Was machst du zuerst? Was ist das Ziel?
Du hast 3 Stunden bis zum Ende der Schicht.

---

## Kontext

07:40 Uhr. Du stehst kurz vor dem Zimmer mit deinen Notizen. Du weißt jetzt was Herrn Petrov bedroht. Jetzt musst du strukturiert planen: Welche Pflegeziele? Welche Maßnahmen? In welcher Reihenfolge? Du hast 3 Stunden bis zum Schichtwechsel.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 3.1 | `plan-01-pesr-aspiration` | **text** (displayFormat: `scenario`) | B3 | Erklär-Step: Das PESR-Schema anhand des konkreten Falls. PESR = Problem / Etiologie / Symptom / Ressource. Beispiel aus dem Fall: **Problem** = Aspirationsgefahr. **Etiologie** = Dysphagie Grad 2 nach ischämischem Apoplex links. **Symptom** = Husten nach Schluckversuch mit dünnflüssiger Flüssigkeit, feuchte Stimme nach dem Schlucken (GUSS-Befund). **Ressource** = Schlucken breiiger Konsistenz sicher möglich, Patient ist kooperativ und motiviert. So wird aus einer Diagnose eine pflegerisch handlungsleitende Formulierung. Quelle: (Fiechter/Meier, 1981 — adaptiert). | pflege |
| 3.2 | `plan-02-pesr-selbst-formulieren` | **freetext** (strukturiert, 3-4 Sätze) | B4 | *"Formuliere jetzt selbst ein PESR für ein zweites Pflegeproblem bei Herrn Petrov. Wähle: Pneumoniegefahr, Dekubitusrisiko oder eingeschränkte Körperpflege."* KI-Feedback prüft: Problem korrekt benannt? Etiologie ursächlich? Symptom beobachtbar? Ressource vorhanden? B1-Schüler erhalten Satzgerüst als optionale Hilfe. | pflege |
| 3.3 | `plan-03-pflegeziele-matching` | **matching** | B3 | Zuordnung: Pflegeprobleme zu Pflegezielen. 4 Paare: [Aspirationsgefahr] → ["Herr Petrov aspiriert bei oraler Nahrungsaufnahme in dieser Schicht nicht."] / [Pneumoniegefahr] → ["Herr Petrov führt 3× täglich Atemübungen durch, Auskultationsbefund stabil."] / [Dekubitusrisiko] → ["Keine Rötung Grad I an Prädilektionsstellen nach 2-stündlicher Umlagerung."] / [Immobilität / Kontrakturrisiko] → ["Herr Petrov sitzt bis Ende der Frühschicht mindestens 10 Min an der Bettkante."] Pflegeziele sollen SMART sein: spezifisch, messbar, erreichbar, relevant, terminiert. **Trigger für Baustein `pflegeprozess-pflegeziele-smart` bei mehr als 1 Fehler.** | pflege |
| 3.4 | `plan-04-priorisierung` | **sorting** | B4 | Sortier-Aufgabe: Die 5 Pflegemaßnahmen dieser Schicht in Prioritätsreihenfolge bringen. Karten: [Atemübungen + Oberkörperhochlagerung 30°] / [Ganzkörperpflege nach Bobath] / [Frühstück anreichen mit angedicktener Flüssigkeit] / [Mobilisation: Bettkante] / [Kathetercheck + Bilanz]. *Richtige Reihenfolge (mit Begründung im Feedback):* 1. Kathetercheck (schnell, non-invasiv, Sicherheit zuerst) → 2. Atemübungen/Lagerung (Pneumonieprophylaxe als höchste Priorität bei aktivem Risiko) → 3. Ganzkörperpflege nach Bobath (längste Maßnahme, einschließlich Hautinspektion) → 4. Frühstück anreichen (nach Körperpflege, aufrechte Position schon hergestellt) → 5. Mobilisation Bettkante (nach dem Frühstück, wenn Energie da ist). Feedback erklärt jede Begründung. | pflege |
| 3.5 | `plan-05-enterale-ernaehrung-frage` | **mc** (Single-Choice) | B4 | *"Wann würde eine enterale Sondenernährung bei Herrn Petrov notwendig werden?"* A) Sofort — bei Dysphagie immer notwendig B) Wenn er in 3-5 Tagen nicht ausreichend oral essen kann (weniger als 60% des Kalorienbedarfs) C) Nur wenn der Arzt es anordnet, wir als Pflegekraft beobachten nur D) Erst wenn er gar nicht mehr schlucken kann. **Richtig: B.** Feedback: Entscheidungsgrundlage Ernährungsassessment + ESPEN/DGEM-Leitlinien-Kriterien. Auch C enthält Wahres (ärztliche Anordnung nötig), aber Pflege erkennt Indikation und informiert proaktiv — das ist Pflegeaufgabe. Quelle: (DGEM/ESPEN 2020; DNQP Ernährungsmanagement 2024) **Trigger für Baustein `enterale-ernaehrung-indikation` Stufe 1–2 wenn falsch.** | krankheitslehre |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 3.6 | `plan-opt-01-smart-erklaert` | **text** (displayFormat: `mnemonic`) | B2 | B1-Schüler / kein Vorwissen Pflegeziele | SMART-Akronym erklärt mit Beispiel aus dem Fall. Mnemonik: S=Spezifisch, M=Messbar, A=Angemessen/Erreichbar, R=Relevant, T=Terminiert. |
| 3.7 | `plan-opt-02-espen-kriterien` | **flipcard** (2 Karten) | B3 | Mittlere Schüler / Vertiefung | ESPEN 2022 Kriterien für enterale Ernährungsindikation beim Schlaganfall-Patienten. |

---

---

## B1-Felder für Kern-Steps — Phase 3

### Step 3.1 — bodyB1 (plan-01-pesr-aspiration)
Das PESR-Schema hilft dir, ein Pflege-Problem zu beschreiben.
PESR = Problem / Ursache (= Etiologie) / Zeichen (= Symptom) / Ressource.
Beispiel bei Herrn Petrov:
Problem: Er kann sich verschlucken (= Aspirations-Gefahr).
Ursache: Die Schluck-Muskeln funktionieren nicht gut (= Dysphagie Grad 2 nach Schlaganfall).
Zeichen: Er hustet beim Trinken. Seine Stimme klingt feucht.
Ressource: Er schluckt breiiges Essen sicher. Er arbeitet gut mit.

### Step 3.2 — bodyB1 (plan-02-pesr-selbst-formulieren)
Jetzt schreibst du selbst ein PESR.
Wähle ein Problem: Pneumonie-Gefahr, Dekubitus-Risiko oder eingeschränkte Körper-Pflege.
Hilfe (optionaler Satz-Rahmen):
Problem: Herr Petrov hat das Risiko für __________.
Ursache: Das kommt daher, weil __________.
Zeichen: Man sieht / hört / beobachtet __________.
Ressource: Er kann noch __________ selbst tun.

### Step 3.3 — bodyB1 (plan-03-pflegeziele-matching)
Ordne das Pflege-Problem dem richtigen Pflege-Ziel zu.
Aspirations-Gefahr → "Herr Petrov schluckt beim Frühstück nicht falsch."
Pneumonie-Gefahr → "Herr Petrov macht 3x täglich Atem-Übungen. Die Lunge klingt stabil."
Dekubitus-Risiko → "Keine Rötung nach dem Umlagern alle 2 Stunden."
Immobilität → "Herr Petrov sitzt 10 Minuten an der Bett-Kante."
Pflege-Ziele müssen SMART sein: konkret, messbar, erreichbar, sinnvoll, mit Zeit.

### Step 3.4 — bodyB1 (plan-04-priorisierung)
Was machst du zuerst? Bringe die 5 Maßnahmen in die richtige Reihenfolge:
1. Katheter-Kontrolle — das geht schnell. Zuerst Sicherheit prüfen.
2. Atem-Übungen und Lagerung — Pneumonie verhindern ist sehr wichtig.
3. Körper-Pflege nach Bobath — das dauert am längsten.
4. Frühstück anreichen — nach der Körper-Pflege, wenn er aufrecht sitzt.
5. Mobilisation — an die Bett-Kante, wenn er Kraft hat.

### Step 3.5 — bodyB1 (plan-05-enterale-ernaehrung-frage)
Wann braucht Herr Petrov eine Sonden-Ernährung (= enterale Ernährung)?
Richtige Antwort: B — Wenn er in 3-5 Tagen zu wenig isst (= weniger als 60% vom Bedarf).
Warum?
Jetzt schluckt er noch ausreichend. Aber die Pflege beobachtet täglich.
Wenn er zu wenig isst, muss die Pflege den Arzt informieren. Der Arzt entscheidet dann.

---

## Phase-3-Abschluss

*Zwischenseite:* "Du hast Pflegeziele formuliert und deine Maßnahmen priorisiert. Aspirationsgefahr ist das dringlichste Problem, Pneumonieprophylaxe die erste Maßnahme. Jetzt: Handeln."

---

## Baustein-Trigger Phase 3

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| step-3.3 mehr als 1 Fehler | `pflegeprozess-pflegeziele-smart` | Stufe 2–3 |
| step-3.5 falsch | `enterale-ernaehrung-indikation` | Stufe 1–2 |
