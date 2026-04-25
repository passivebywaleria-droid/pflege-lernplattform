# Phase 1 — Informieren & Ankommen

**situationId:** ls-schmidt-adipositas
**Phase:** informieren
**Zeit:** ~15–25 Min
**Bloom:** B2–B3
**Kern-Frage:** Was weiß ich über Frau Schmidt, bevor ich das Zimmer betrete? Wie gehe ich auf einen Menschen zu, dessen Gewicht und Krankheitsbild Vorurteile wecken könnten?
**Steps:** 5

---

## Kontext

Es ist 08:30 Uhr, Frühdienst auf der Inneren Station. Du stehst auf dem Flur, noch außerhalb von Zimmer 8. Frau Bayraktar hat dir Frau Schmidt übergeben — kurz, mündlich. Du weißt: 68 Jahre, Adipositas, Diabetes, seit drei Tagen hier. Mehr noch nicht.

Bevor du eintrittst, liest du die Pflegeübergabe im System. Und noch etwas beschäftigt dich: Du bist dir nicht sicher, wie du mit jemandem über Ernährung sprichst, dem anzusehen ist, dass das Essen in ihrem Leben eine besondere Rolle spielt. Das ist keine einfache Situation.

**kontextB1:** Es ist 08:30 Uhr. Du arbeitest im Frühdienst.
Du stehst vor Zimmer 8. Frau Schmidt liegt dort.
Deine Praxisanleiterin sagt: "Geh zu Frau Schmidt. Mach die Morgenpflege."
Du weißt: Frau Schmidt ist 68 Jahre alt.
Sie hat Diabetes (= Zucker-Krankheit) und starkes Übergewicht (= Adipositas).
Sie ist seit 3 Tagen im Krankenhaus.
Du liest zuerst die Pflegeübergabe im Computer.
Dann gehst du ins Zimmer.

---

## Kern-Steps (alle Schüler sehen diese)

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 1.1 | `info-01-uebergabedaten` | **text** (displayFormat: `scenario`) | B2 | Szene: Du liest im System. Pflegeübergabe-Kurzfassung (SBAR-ähnlich): S=Stationäre Aufnahme vor 3 Tagen, BZ entgleist (398 mg/dl Einlieferung), aktuell BZ 187 nüchtern. B=Diabetes Typ 2 neu auf Metformin, Adipositas Grad II (BMI 38), bekanntes Fußsyndrom Kategorie 1, Belastungsinkontinenz. A=ansprechbar, wach, kooperativ, klagt über Schwäche. R=Morgenpflege, BZ messen, Ernährungsgespräch starten. | pflege |
| 1.2 | `info-02-selbsteinschaetzung` | **confidence** | B2 | Konfidenz-Frage vor dem Zimmerbetreten: _„Wie sicher fühlst du dich im Umgang mit dem Thema Übergewicht und Ernährung in einem Pflegegespräch?"_ Skala 1–5. Kein richtig/falsch — ehrliche Selbsteinschätzung. Didaktischer Anker, wird in Phase 5 gespiegelt. | pflege |
| 1.3 | `info-03-erstpriorisierung` | **mc** (Single-Choice) | B3 | _„Du betrittst Zimmer 8. Was tust du beim Betreten ZUERST?"_ A) Den Blutzucker messen — das hat Frau Bayraktar zuerst genannt. B) Dich vorstellen, Frau Schmidt begrüßen und fragen wie die Nacht war. C) Die Beine und Füße von Frau Schmidt inspizieren — diabetisches Fußsyndrom. D) Erklären, was heute auf dem Plan steht. **Richtig: B.** Bloom 3: Prioritäten setzen. Falsch-Feedback bei A: Auch BZ kommt dran — aber zuerst die Person wahrnehmen, nicht als Gerät ankommen. | pflege |
| 1.4 | `info-04-zimmer-betreten` | **dialog** (3 Optionen) | B3 | Dialog: Du betrittst das Zimmer. Frau Schmidt sitzt aufrecht im Bett, schaut kurz auf. Du wählst deine Eröffnung aus drei Optionen: A) _„Guten Morgen, Frau Schmidt, ich bin heute für Sie zuständig. Wie geht es Ihnen?"_ (validierend, richtig) B) _„Guten Morgen — wir fangen direkt mit dem Zucker an, okay?"_ (aufgabenorientiert, geht Beziehung unter) C) _„Guten Morgen! Ich bin Schülerin, aber das macht nichts, ich weiß was ich tu."_ (unprofessionell, verunsichert). Beste Antwort: A. **Zitat Z1** erscheint: _„Mir sagt ja keiner, was ich essen soll. Hauptsache satt."_ — Frau Schmidt sagt es locker, aber dahinter steckt echter Frust. | pflege |
| 1.5 | `info-05-vorwissen-sortieren` | **sorting** | B3 | Sortieraufgabe: Was weißt du jetzt schon über Frau Schmidt — und was weißt du noch nicht? Karten in zwei Gruppen sortieren: **Bekannt** (BMI, Diagnosen, BZ-Werte, Setting, Metformin neu) vs. **Noch offen** (Ernährungsgewohnheiten zuhause, Bewegungsbiographie, Inkontinenz-Situation im Alltag, Wissen über Diabetes, Motivation). Bloom 3: Informationslücken erkennen. | pflege |

---

## Optionale Steps (Sequencer wählt nach Profil)

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 1.6 | `info-06-bmi-glossar` | **text** (displayFormat: `glossary`) | B1 | B1-Schüler | BMI-Begriff erklärt: Was bedeutet BMI 38? Adipositas Grad I/II/III nach WHO. Formel einfach erklärt. Glossar-Verlinkung zu `ernaehrungsassessment-bmi-berechnung`. |
| 1.7 | `info-07-wagner-klassifikation` | **flipcard** | B2 | Mittlere | Wagner-Armstrong-Klassifikation: Vorderseite = Kategorie, Rückseite = was das bedeutet. 3 Karten: Kategorie 0 (kein Ulkus), Kategorie 1 (oberflächliche Wunde), Kategorie 2 (tiefer Ulkus). Frau Schmidt: Kategorie 1 — erste Risse. |
| 1.8 | `info-08-reflexion-vorurteile` | **reflection** | B3 | Alle | _„Welche Gedanken kamen dir, als du 'Adipositas Grad II, BMI 38' gelesen hast? Sei ehrlich mit dir."_ Offene Reflexion, kein KI-Feedback — Denkanstoß. Nicht bewertet. |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| info-03-falsch (Antwort A oder D) | `ernaehrungsassessment-bmi-berechnung` | Sequencer wählt nach Profil |
| info-05-bekannt-offen-Fehler | `pflegeplanung-informationssammlung` | Stufe 2–3 |

---

---

## B1-Versionen der Kern-Steps

### Step 1.1 — bodyB1
Du liest die Pflegeübergabe. Das ist eine kurze Information über Frau Schmidt.
**S** — Situation: Frau Schmidt ist seit 3 Tagen hier.
Der Blutzucker (= BZ) war bei der Einlieferung sehr hoch: 398 mg/dl.
Jetzt ist er niedriger: 187 mg/dl nüchtern.
**B** — Hintergrund: Sie hat Diabetes Typ 2, starkes Übergewicht (BMI 38).
Sie hat ein Fußsyndrom (Kategorie 1 nach Wagner = erste Risse an der Haut, keine Wunde).
Sie hat Belastungs-Inkontinenz (= sie verliert manchmal Urin bei Bewegung).
**A** — Aktuelles: Sie ist wach und ansprechbar. Sie fühlt sich schwach.
**R** — Reaktion: Du machst die Morgenpflege. Dann misst du den Blutzucker. Dann sprichst du mit ihr über Ernährung.

### Step 1.3 — bodyB1
Du betrittst Zimmer 8. Was machst du ZUERST?
A) Du misst den Blutzucker. Das soll auch passieren.
B) Du begrüßt Frau Schmidt und fragst wie die Nacht war. ← Das ist richtig!
C) Du schaust sofort die Füße an. Das ist auch wichtig, aber nicht als erstes.
D) Du erklärst den Plan für den Tag.
**Richtig ist B.** Zuerst kommt der Mensch — dann die Aufgabe.

### Step 1.4 — bodyB1
Du gehst ins Zimmer. Frau Schmidt sitzt aufrecht im Bett.
Sie schaut dich an. Du wählst eine Begrüßung:
A) "Guten Morgen, Frau Schmidt! Wie geht es Ihnen?" ← Das ist richtig!
B) "Guten Morgen — wir messen jetzt gleich den Blutzucker."
   Das ist zu direkt. Du siehst Frau Schmidt noch nicht als Person.
C) "Guten Morgen! Ich bin noch Schülerin, aber keine Sorge."
   Das klingt unsicher. Das ist nicht gut für Frau Schmidt.
Frau Schmidt sagt: "Mir sagt ja keiner, was ich essen soll. Hauptsache satt."
Das klingt locker — aber dahinter steckt echter Frust.

### Step 1.5 — bodyB1
Sortier-Aufgabe: Was weißt du schon? Was weißt du noch nicht?
**Bekannt:** BMI, Diagnosen, Blutzucker-Werte, Metformin neu
**Noch offen:** Was isst Frau Schmidt zuhause? Bewegt sie sich? Wie geht sie mit Inkontinenz um? Was weiß sie über Diabetes? Will sie etwas ändern?
Gut nachgedacht: Du weißt die Zahlen — aber du kennst die Person noch nicht.

---

## Phase-1-Abschluss

_Zwischenseite:_ „Du hast Frau Schmidt begrüßt und weißt: Die Übergabedaten sind ein Anfang — aber das Bild ist noch unvollständig. Zeit für das Assessment. Was du jetzt siehst und hörst, bestimmt alles weitere."
