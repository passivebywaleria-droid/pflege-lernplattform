# Phase 2 — Beobachten

**situationId:** ls-emilia-saeugling
**Phase:** beobachten (Phase 2 von 6)
**Zeit:** ~20–35 Min
**Bloom:** B3–B4
**Kern-Frage:** Was zeigt Emilias Körper? Gibt es Zeichen von Flüssigkeitsmangel?
**Steps:** 6
**Brilliant-Prinzip:** Step 2.1 ist Neugier-Frage VOR Erklärung (Hautturgor-Bild zeigen, BEVOR erklärt wird was er bedeutet)

---

## Kontext

Das Aufnahmegespräch ist abgeschlossen. Laura hat dir erklärt: Emilia hat in den letzten 24 Stunden deutlich weniger getrunken als sonst, drei nasse Windeln statt der üblichen fünf bis sechs. Jetzt geht es um die körperliche Beobachtung. Du weißt: bei einem Säugling mit Trinkschwäche ist Flüssigkeitsmangel die zentrale Gefahr. Du willst drei Dinge prüfen: Hautturgor, Ausscheidung, Atemfrequenz und Körpertemperatur.

**kontextB1:** Das Gespräch ist fertig. Laura hat erklärt: Emilia trinkt weniger als normal.
Heute nur 3 nasse Windeln — normal sind 5-6 pro Tag.
Jetzt beobachtest du Emilias Körper genau.
Die größte Gefahr bei Trinkschwäche ist Flüssigkeitsmangel (= Exsikkose).
Du prüfst vier Dinge:
Erstens: Hautturgor (= Zustand der Haut).
Zweitens: Windeln und Ausscheidung.
Drittens: Atemfrequenz (= wie oft atmet Emilia pro Minute).
Viertens: Körpertemperatur (= Fieber).

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 2.1 | `beob-01-hautturgor-brilliant` | **hotspot** | B4 | **BRILLIANT-FRAGE.** Du siehst das Bild von Emilias Bauch. Es sind zwei Fotos nebeneinander: A) Haut springt sofort zurück (normaler Turgor), B) Haut bleibt kurz als Falte stehen (reduzierter Turgor). *"Was unterscheidet Bild A von Bild B — und was bedeutet das?"* Erwartete Erkenntnis: verzögertes Zurückspringen = Zeichen von Flüssigkeitsmangel. Noch KEINE Erklärung — erst nach der Antwort. | anatomie |
| 2.2 | `beob-02-turgor-erklaert` | **text** (displayFormat: `beforeafter`) | B3 | Erklär-Step nach Step 2.1. C1 (~200 Wörter): Der Hautturgor zeigt den Flüssigkeitszustand des Körpers. Bei gutem Turgor springt die Haut nach kurzem Zusammendrücken (zwischen Daumen und Zeigefinger) sofort zurück. Bei Exsikkose (Austrocknung) bleibt sie als Falte stehen. Beim Säugling prüft man den Turgor am Bauch oder am Unterarm — nie an den Beinen (zu wenig Unterhautfettgewebe). Ergänzend: Fontanelle. Die vordere Fontanelle ist normalerweise flach. Eingefallen = schwerer Flüssigkeitsmangel. Aufgewölbt = erhöhter Hirndruck. *(Hoehl/Kullick, 2019)* | anatomie |
| 2.3 | `beob-03-windeln-zaehlen` | **categorize** | B3 | Kategorisierungs-Aufgabe: Was ist normal für Emilia (4 Monate, gestillt)? Karten einsortieren in "normal" / "auffällig — leicht" / "sofort melden": [6 nasse Windeln in 24h = normal] [3 nasse Windeln in 24h = auffällig leicht] [1 nasse Windel in 24h = sofort melden] [Mekonium-ähnliche Farbe = sofort melden] [Goldgelber pastöser Stuhl = Muttermilchstuhl, normal] [Weißlicher Stuhl = sofort melden]. **Trigger für Baustein `stuhlausscheidung-saeuglingsnorm` falls Performance < 60%.** | pflege |
| 2.4 | `beob-04-trinkverhalten-beobachten` | **dialog** (3 Phasen) | B3 | Du bittest Laura, Emilia anzulegen oder die Flasche zu geben, während du beobachtest. **Zitat Z3** erscheint: *"Früher hat sie getrunken bis ich dachte, sie platzt. Jetzt lässt sie nach drei Schlucken wieder los."* Du beobachtest: Emilia macht 3-4 Schlucke, dann lässt sie los, atmet, versucht wieder anzusetzen — Teufelskreis Atemnot → Trinkschwäche. Dialog: Was erklärst du Laura dazu? Drei Optionen (empathisch + sachlich / nur sachlich / nur empathisch). Beste Antwort: Verbindung beider Elemente. | pflege |
| 2.5 | `beob-05-temperatur-messen` | **sequencing** | B3 | Reihenfolge beim Fiebermessen beim Säugling: [Material vorbereiten — Thermometer + Gleitmittel] → [Eltern informieren was passiert] → [Säugling sicher in Rückenlage positionieren] → [Rektal messen, 1 Minute] → [Ablesen und dokumentieren] → [Emilia trösten und sicher halten]. Bloom 3 — korrekte Handlungsfolge. Falsch-Feedback wenn "Messung axillar" an falscher Stelle: Rektal ist beim Säugling Standard wegen Messgenauigkeit. *(Hoehl/Kullick, 2019)* | pflege |
| 2.6 | `beob-06-atemfrequenz-beurteilen` | **truefalse** (Mehrfach) | B4 | Vier Aussagen zur Atemfrequenz beim Säugling beurteilen (wahr/falsch): 1) "Normale Atemfrequenz beim Säugling: 30-60/min." (wahr) 2) "Bei Emilia mit 50/min muss sofort ein Arzt kommen." (falsch — 50/min ist normal bei 4-monatigem Säugling, erst >60/min oder Einziehungen = alarmierend) 3) "Interkostale Einziehungen beim Säugling sind harmlos." (falsch — Zeichen erhöhter Atemarbeit, melden) 4) "Eine nasale Sekretion beeinflusst das Saugen." (wahr — obligate Nasenatmer). | krankheitslehre |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 2.7 | `beob-opt-fontanelle` | **flipcard** | B2 | B1-Schüler | Vorderseite: "Was ist die Fontanelle — und was zeigt sie?" Rückseite: "Die Fontanelle ist eine noch offene Stelle am Schädel — dort sind die Knochen noch nicht zusammengewachsen. Normal: flach, etwas federnd. Eingefallen = zu wenig Flüssigkeit. Aufgewölbt = Alarm. *(Hoehl/Kullick, 2019)*" | anatomie |
| 2.8 | `beob-opt-muttermilchstuhl` | **text** (displayFormat: `scenario`) | B2 | B1-Schüler | Erklär-Step: Wie sieht normaler Stuhl eines gestillten Säuglings aus? Goldgelb, dünn, manchmal fast flüssig, mild riechend, bis zu 8× täglich oder auch mal 3 Tage nichts — beides normal. Nicht mit Durchfall verwechseln. *(Hoehl/Kullick, 2019)* | pflege |
| 2.9 | `beob-opt-exsikkose-grade` | **matching** | B3 | Fortgeschrittene | Zeichen der Exsikkose beim Säugling drei Schweregraden zuordnen: Leicht (Mundschleimhaut trocken, weniger Windeln), Mittel (Turgor reduziert, eingefallene Fontanelle, kein Tränenfluss), Schwer (Bewusstseinstrübung, flacher Puls, keine Urinproduktion). | krankheitslehre |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| Step 2.1 — Turgor nicht erkannt | `haut-turgor-beurteilung` | Sequencer wählt |
| Step 2.3 — Windeln-Kategorisierung < 60% | `stuhlausscheidung-saeuglingsnorm` | Stufe 2–3 |
| Step 2.6 — Atemfrequenz falsch beurteilt | `saeuglingspflege-vitalzeichen-norm` | Stufe 2–3 |

---

## ALLE Risiken werden thematisiert

- Erkannte Exsikkose-Zeichen → "Richtig erkannt! Beim Säugling sind das frühe Warnsignale — handle bevor die Fontanelle einsinkt."
- Übersehener reduzierter Turgor → Baustein `haut-turgor-beurteilung` wird eingeblendet, Stufe je nach Profil.
- Atemfrequenz falsch eingeschätzt → Baustein `saeuglingspflege-vitalzeichen-norm` mit Normwert-Tabelle.

---

## Phase-2-Abschluss

*Zwischenseite:* "Deine Beobachtungen: Emilia hat mäßig reduzierte Trinkmengen, Turgor noch erhalten, 3 nasse Windeln in 24h (unterer Normbereich), Fieber 38,2 °C, Atemfrequenz 52/min (noch normal, keine Einziehungen). Kein akuter Notfall — aber Flüssigkeitszufuhr muss verbessert werden. Jetzt: Plan erstellen."
