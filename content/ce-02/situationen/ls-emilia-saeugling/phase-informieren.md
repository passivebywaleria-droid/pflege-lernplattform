# Phase 1 — Informieren

**situationId:** ls-emilia-saeugling
**Phase:** informieren (Phase 1 von 6)
**Zeit:** ~15–25 Min
**Bloom:** B2–B3
**Kern-Frage:** Was weiß ich schon? Wie trete ich der Familie gegenüber?
**Steps:** 5

---

## Kontext

Du stehst vor Zimmer 8 der Kinderstation. Es ist 07:45 Uhr, Frühdienst. Schwester Andrea hat dir gerade erklärt: Baby Emilia (4 Monate) wurde heute Nacht wegen Bronchiolitis aufgenommen. Die Mutter ist dabei. Du wirst jetzt das Aufnahmegespräch führen — Andrea beobachtet, greift nur ein wenn nötig.

Du atmest kurz durch. Vor dir liegt eine neue Situation: ein Säugling, eine erschöpfte Erstmutter, eine Diagnose die du noch nicht oft gesehen hast. Das Ziel der nächsten 20 Minuten: Vertrauen aufbauen, Informationen sammeln, den Ist-Zustand verstehen.

**kontextB1:** Du stehst vor Zimmer 8. Es ist 07:45 Uhr.
Schwester Andrea hat dir erklärt: Emilia (4 Monate) ist krank.
Die Diagnose ist Bronchiolitis (= Entzündung der kleinen Atemwege).
Die Mutter ist dabei. Du führst jetzt das Aufnahmegespräch.
Andrea schaut zu. Sie hilft nur wenn nötig.
Dein Ziel in den nächsten 20 Minuten:
Vertrauen aufbauen. Informationen sammeln. Verstehen was gerade los ist.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 1.1 | `info-01-vorbereitung-akte` | **text** (displayFormat: `scenario`) | B2 | Szene öffnet sich: Du nimmst kurz die Aufnahmedokumentation zur Hand. Emilia, 4 Monate, 5,6 kg, Bronchiolitis RSV, Mutter stillt vollständig. Fieber 38,2 °C bei Aufnahme um 03:15 Uhr. Pflegeübergabe (SBAR-Struktur): S = Säugling mit Trinkschwäche und Fieber, B = bisher gesundes Kind, Erstgebärende 24J., A = leicht erhöhte Atemfrequenz, noch kein Sauerstoffbedarf, R = Flüssigkeitsstatus engmaschig überwachen. Du liest die Übergabe — und betrittst dann das Zimmer. | pflege |
| 1.2 | `info-02-erste-beobachtung` | **mc** (Single-Choice) | B2 | Du betrittst das Zimmer. Emilia liegt auf dem Arm der Mutter. Beide schauen dich sofort an. **Was ist dein erster Schritt?** A) Sofort Emilia untersuchen, Mutter dabei stehen lassen B) Dich vorstellen, Mutter begrüßen, kurz erklären was als nächstes passiert C) Direkt fragen: "Hat das Baby heute getrunken?" D) Zuerst Emilias Fieber messen. **Richtig: B.** Beziehungsaufbau kommt vor Assessment — besonders bei einer erschöpften Mutter. Falsch-Feedback bei A: Untersuchung ohne Vorstellung fühlt sich für Mütter bedrohlich an und bricht Vertrauen. | pflege |
| 1.3 | `info-03-aufnahmegespräch-dialog` | **dialog** (4 Phasen) | B3 | Du stellst dich vor und fragst nach dem Wohlbefinden. **Zitat Z1** erscheint: *"Sie trinkt so wenig... Ist das normal? Ich mache mir solche Sorgen."* Du wählst aus 3 Antworten: A) "Das ist normal bei Bronchiolitis, keine Sorge." (zu früh, entwertend) B) "Ich verstehe die Sorge — das wollen wir jetzt gemeinsam genau anschauen. Darf ich ein paar Fragen stellen?" (richtig — validierend + strukturiert) C) "Wann genau hat sie aufgehört zu trinken?" (direkt, aber ohne Validierung). Beste: B, dann direkt C als Folgefrage. Bloom 3 — Anwenden von Kommunikationsprinzipien. | pflege |
| 1.4 | `info-04-anamnesefragen-sortierung` | **sorting** | B3 | Sortier-Aufgabe: Welche Informationen sammelst du beim Aufnahmegespräch? Ordne nach Priorität (wichtigste zuerst): [Seit wann Trinkschwäche?] → [Wie viel und wie oft trinkt Emilia normalerweise?] → [Wann letztes nasses Windel?] → [Fieberverlauf — wann begann es, wie hoch?] → [Atemveränderungen — Elternsicht?] → [Letzte nasse Windel — wann?] → [Impfstatus, Vorerkrankungen?]. Bloom 3 — Priorisierung im Erstkontakt. | pflege |
| 1.5 | `info-05-stilling-zitat` | **text** (displayFormat: `quote`) | B2 | **Zitat Z2** erscheint als Quote-Card: *"Ich stille bisher komplett. Aber wenn sie nicht trinkt — soll ich aufhören? Ist meine Milch das Problem?"* Begleit-Text (3-4 Sätze, C1): Die Frage ist häufig und verständlich. Muttermilch ist bei Bronchiolitis KEIN Problem — sie enthält Antikörper, die helfen. Das Trinken ist durch die Nasenatmungs-Behinderung erschwert, nicht durch die Milch. Diese Information ist wichtig für Lauras Selbstbild als Mutter. Quelle: *(WHO, 2023 — Breastfeeding bleibt bei Atemwegsinfekten empfohlen)*. | pflege |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 1.6 | `info-opt-bronchiolitis-was-ist` | **flipcard** | B2 | B1-Schüler ohne Vorwissen | Vorderseite: "Was ist Bronchiolitis?" Rückseite: "Eine Entzündung der kleinen Atemwege (Bronchiolen) meist durch RSV-Viren. Häufigster Grund für Krankenhausaufnahme bei Säuglingen unter 12 Monaten. Symptome: Husten, Schnupfen, erschwertes Atmen, Fieber, Trinkschwäche." *(Hoehl/Kullick, 2019)* | krankheitslehre |
| 1.7 | `info-opt-sbar-erklaert` | **text** (displayFormat: `stepbystep`) | B2 | B1-Schüler | SBAR als 4-Schritt-Schema erklärt: S=Situation, B=Background, A=Assessment, R=Recommendation — mit Emilias konkreter Übergabe als Beispiel. | pflege |
| 1.8 | `info-opt-obliagte-nasenatmer` | **text** (displayFormat: `analogy`) | B2 | Alle die "Trinkschwäche" nicht verstehen | Analogie: "Stell dir vor, du müsstest essen und atmen gleichzeitig — durch denselben Weg. Genau das ist das Problem: Säuglinge atmen obligat durch die Nase. Wenn die Nase voll ist, können sie nicht saugen und atmen gleichzeitig. Deshalb trinkt Emilia nicht weil sie es nicht will, sondern weil es anstrengend ist." | krankheitslehre |

---

## B1-Ergänzungen zu den Kern-Steps

**Step 1.1 — bodyB1:**
Du liest die Übergabe. Das ist die SBAR-Struktur (= ein Übergabe-Schema).
S = Situation: Emilia trinkt wenig. Sie hat Fieber.
B = Background (= Hintergrund): Emilia war bisher gesund.
A = Assessment (= Einschätzung): Emilia atmet etwas schnell. Sie braucht noch keinen Sauerstoff.
R = Recommendation (= Empfehlung): Beobachte die Flüssigkeit engmaschig (= sehr regelmäßig).
Danach gehst du ins Zimmer.

**Step 1.2 — bodyB1:**
Du betrittst das Zimmer. Emilia liegt auf dem Arm der Mutter.
Beide schauen dich an. Was tust du zuerst?
A) Du untersuchst sofort Emilia. Die Mutter wartet.
B) Du stellst dich vor. Du begrüßt die Mutter. Du erklärst was als nächstes passiert.
C) Du fragst sofort: "Hat das Baby heute getrunken?"
D) Du misst zuerst das Fieber.
Richtig ist B. Warum? Zuerst Vertrauen aufbauen — dann untersuchen.

**Step 1.3 — bodyB1:**
Du stellst dich vor. Laura sagt: *"Sie trinkt so wenig... Ist das normal? Ich mache mir solche Sorgen."*
Was antwortest du?
A) "Das ist normal. Keine Sorge." — Das stimmt nicht ganz. Und es nimmt Laura die Sorge nicht.
B) "Ich verstehe das. Das schauen wir jetzt gemeinsam an. Darf ich ein paar Fragen stellen?" — Richtig.
C) "Wann genau hat sie aufgehört zu trinken?" — Direkt, aber ohne Verständnis.
Wähle B. Dann stelle C als nächste Frage.

**Step 1.4 — bodyB1:**
Du sammelst Informationen. Was ist am wichtigsten?
Bringe die Fragen in die richtige Reihenfolge:
Zuerst: Seit wann trinkt Emilia weniger?
Dann: Wie viel trinkt sie normalerweise?
Dann: Wann war die letzte nasse Windel?
Dann: Wann hat das Fieber begonnen?
Dann: Hat die Mutter Veränderungen beim Atmen bemerkt?
Dann: Impfungen und Vorerkrankungen?

**Step 1.5 — bodyB1:**
Laura fragt: *"Ich stille. Aber wenn Emilia nicht trinkt — ist meine Milch das Problem?"*
Deine Antwort: Nein. Lauras Milch ist nicht das Problem.
Muttermilch enthält Antikörper (= Abwehrstoffe). Sie helfen Emilia.
Das Problem ist die verstopfte Nase. Saugen und Atmen ist anstrengend.
Diese Information ist sehr wichtig für Laura.

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| Step 1.3 — Antwort A gewählt (entwertend) | `pflegeprozess-informationssammlung` | Sequencer wählt |
| Step 1.4 — Reihenfolge falsch | `pflegeprozess-informationssammlung` | Sequencer wählt |
| Step 1.5 — Frage nach Stillen | `ernaehrungsgrundlagen-saeugling-stillen` | Stufe 2–3 |

---

## Phase-1-Abschluss

*Zwischenseite:* "Du hast dir ein Bild gemacht. Laura ist erschöpft, aber offen. Emilia ist stabil — kein Notfall, aber deutliche Trinkschwäche. Jetzt: systematisch beobachten was du siehst."
