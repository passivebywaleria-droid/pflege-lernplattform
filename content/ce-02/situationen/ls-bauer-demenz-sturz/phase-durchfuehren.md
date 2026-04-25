# Phase 4 — Maßnahmen durchführen

**situationId:** ls-bauer-demenz-sturz
**Phase:** durchfuehren (Phase 4 von 6)
**Zeit:** ~30–50 Min
**Bloom:** B4–B5
**Kern-Frage:** Wie führe ich Körperpflege durch, wenn der Mensch sich wehrt? Wie reagiere ich auf Abwehr — und was mache ich wenn nichts mehr geht?
**Steps gesamt:** 9 (6 Kern + 3 Optional)
**Komplikationen:** 2 (Abwehr bei Pflege + Sturz-Angst bei Mobilisation)

---

## Kontext (~250 Wörter)

Frau Meier, deine Praxisanleiterin, ist jetzt wieder da. Ihr macht heute die Morgenroutine bei Herrn Bauer gemeinsam — du übernimmst aber den Gesprächsteil, weil du bereits Kontakt hergestellt hast.

Der Raum ist vorbereitet: warm, ruhig, gedämpftes Licht. Herrn Bauers Lieblingsmusik läuft leise (Freddy Quinn, "Junge komm bald wieder"). Du trägst Einmalhandschuhe und hast alles bereit.

Dann beginnt es: Du nähert dich mit dem feuchten Waschlappen seinem Gesicht — und Herr Bauer schlägt nach deiner Hand.

Das ist nicht Böswilligkeit. Das ist Angst. Dein Job ist nicht, die Pflege um jeden Preis durchzusetzen. Dein Job ist, einen Weg zu finden, der für beide funktioniert.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 4.1 | `dur-01-basale-vorbereitung` | **text** (displayFormat: `stepbystep`) | B3 | Erklär-Step: Was versteht man unter einer "beruhigenden Ganzkörperwaschung" im Sinne der Basalen Stimulation? 5 Schritte: 1) Waschen in Haarwuchsrichtung (Körperschema aktivieren), 2) Körpertemperatur angepasstes Wasser, 3) Waschen von peripher nach zentral beginnen (Füße → Beine → Rumpf), 4) Ankündigen jeden Handgriffs kurz und ruhig, 5) Pausieren wenn Abwehr kommt — nie gegen Widerstand. Quelle: _(Bienstein C./Fröhlich A., 2021)_. **Trigger für Baustein `basale-stimulation-beruhigende-waschung` Stufe 2–3 bei niedrigem Profil.** | pflege |
| 4.2 | `dur-02-abwehr-komplikation` | **branching** (HAUPT-KOMPLIKATION 1, 3 Pfade) | B5 | **KOMPLIKATION 1:** Du beginnst mit der Gesichtswäsche. **Zitat Z3** erscheint: _"Nein! Nein!"_ — Herr Bauer schlägt nach deiner Hand, zieht die Decke über sich. Du wählst: A) _"Ich ziehe die Decke weg und versuche weiterzumachen — Hygiene ist wichtig."_ ❌ (Zwang, Würdeverletzung, verstärkt Abwehr). B) _"Ich halte inne, stelle den Waschlappen ab, sage ruhig: 'Herr Bauer, ich mache Pause. Das ist okay.' Dann warte ich 2 Minuten."_ ✅ (Deeskalation, Validation). C) _"Ich breche ab, komme in einer Stunde wieder."_ (Zwischenpfad — manchmal richtig, aber hier: Assessment ausstehend, Pflegebedarf hoch). Pfad A: führt zu ausführlicher Erklärung Würde + rechtliche Grenzen körperlicher Zwang in der Pflege. Pfad C: führt zu Reflexion wann Abbrechen sinnvoll ist und was es bedeutet. | pflege |
| 4.3 | `dur-03-deeskalation-ressource` | **dialog** (3 Phasen) | B4 | Nach Pfad B (oder nach Reflexion Pfad C): Du versuchst eine andere Strategie. Du nimmst Herrn Bauers Hand, berührst sanft seinen Unterarm von außen (Haarwuchsrichtung), und summst leise. Nach 90 Sekunden lässt er die Decke los. **Zitat Z4** erscheint: _"Du bist nett."_ — Jetzt nimmst du einen neuen Anlauf: Gesicht waschen, aber beginne mit Stirn (weniger intim). Dialog-Optionen für das Anleiten des zweiten Versuchs: ruhig ankündigen / schweigend weitermachen / Handführung anbieten. Richtig: ankündigen + Handführung anbieten (Kontrolle zurückgeben). | pflege |
| 4.4 | `dur-04-bewegungsuebungen` | **sequencing** | B4 | Nach der Körperpflege, Herr Bauer liegt entspannt. Jetzt: Bewegungsübungen für Knie + Sprunggelenk. Sortiere die Übungsreihenfolge: [Füße kreisen lassen (aktiv-assistiv)] → [Kniebeugen im Bett (passiv, bis schmerzfreie Grenze)] → [Spitzfußprophylaxe: Fußsohle gegen weiches Brett stellen] → [Kniegelenk in Neutralstellung auspolstern (Lagerungsrolle)]. Wichtig: Jede Übung kurz ankündigen, Pause bei Abwehr. **Trigger für Baustein `kontraktur-prophylaxe-passiv-aktivdurchbewegen` Stufe 2–3 bei <3 korrekt.** | anatomie |
| 4.5 | `dur-05-mundpflege` | **mc** (Single-Choice) | B4 | Herr Bauer trinkt wenig — seine Mundschleimhaut ist trocken. Welche Mundpflegeintervention ist bei einem Menschen mit Demenz und Trinkverweigerung am besten geeignet? A) Mundspülung mit Chlorhexidin 3× täglich. B) Feuchte Wattestäbchen (speichelbefeuchtete Mund-Stäbchen), sanft auf Schleimhaut anwenden — kooperativ, günstig. ✅ C) Zähne zweimal täglich bürsten mit Fluorid-Creme, auch wenn er sich wehrt. D) Ausreichend trinken — wenn er nicht trinkt, kann man nichts machen. **Richtig: B.** Feedback bei C: Zwang bei Mundpflege → Aspiration/Schlucken-Gefahr + Würde. Feedback bei A: Chlorhexidin ist Arzneimittel, nicht Standard-Mundpflege. **Trigger für Baustein `mundpflege-soor-prophylaxe` Stufe 2.** | pflege |
| 4.6 | `dur-06-mobilisation-komplikation` | **branching** (KOMPLIKATION 2, 2 Pfade) | B5 | **KOMPLIKATION 2:** Du und Frau Meier möchten Herrn Bauer an den Bettrand setzen (erste Mobilisation nach Sturz). Beim Aufsetzen wird er sehr unruhig, greift nach dem Bettgitter, schreit. _"Ich will nicht! Nein!"_ Frau Meier flüstert dir zu: _"Was machst du?"_ Pfad A: _"Wir legen ihn sofort zurück und dokumentieren: Mobilisation nicht möglich."_ (konservativ — richtig im Moment, aber Pflegebedarf bleibt) Pfad B: _"Ich erkläre Herrn Bauer kurz was wir machen, warte bis er wieder ruhiger ist, versuche dann Mobilisation mit Musik und langsamerer Vorbereitung."_ ✅ (Validierend, Würde, zweiter Versuch strukturiert). Beide Pfade führen zu Reflexion: Wann ist Abbrechen der richtige Entscheid? Pflegebedarf vs. Patientenwillen bei Demenz? | pflege |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 4.7 | `dur-07-perthes-stimulation` | **text** (displayFormat: `analogy`) | B3 | B1-Schüler | Analogie-Erklärung: Basale Stimulation als "Sprache ohne Worte". Vergleich: Wenn ein Kind Angst hat, helfen Worte oft wenig — aber eine Umarmung, eine ruhige Berührung, ein vertrauter Geruch helfen sofort. Für Menschen mit schwerer Demenz ist es ähnlich: Der Körper erinnert sich, auch wenn das Gedächtnis vergisst. Das ist die Grundidee der Basalen Stimulation. | pflege |
| 4.8 | `dur-08-inkontinenz-wuerde` | **reflection** | B5 | Fortgeschrittene | Reflexions-Frage: _"Herrn Bauers Inkontinenzversorgung ist voll. Er schlägt nach dir bei jedem Wechsel. Wie gehst du mit der Spannung um zwischen: 'Er hat Anspruch auf Hygiene' und 'Er lehnt die Maßnahme ab'? Gibt es eine richtige Antwort?"_ Offener Reflexionsraum, KI-Feedback thematisiert Würde, Selbstbestimmung bei Demenz, Verhältnismäßigkeit. | pflege |
| 4.9 | `dur-09-trinken-strategie` | **timer** (3 Min) | B3 | Alle | Timer-Übung: 3 Minuten Zeit, um Herrn Bauer zum Trinken zu bewegen — ohne Aufforderung, ohne Druck. Du hast: eine Tasse Malzbier (aus Biographie bekannt), Geduld, und seine Hand. Was tust du? Freier Textkasten nach Timer. Anschließend KI-Feedback: Welche Strategien funktionieren bei Trinkablehnung bei Demenz? | krankheitslehre |

---

## Baustein-Trigger Phase 4

| Trigger | Baustein-ID | Stufe |
|---------|-------------|-------|
| Step 4.1: B1/B2-Profil | `basale-stimulation-beruhigende-waschung` | 2–3 |
| Step 4.2: Pfad A gewählt | `pflegeprozess-wuerde-selbstbestimmung` | 3 |
| Step 4.4: <3 korrekt sortiert | `kontraktur-prophylaxe-passiv-aktivdurchbewegen` | 2–3 |
| Step 4.5: Antwort C oder D | `mundpflege-soor-prophylaxe` | 2 |
| Step 4.6: Pfad A | `pflegeprozess-patientenwillen-demenz` | 2 |

---

## Phase-4-Abschluss

_"Herrn Bauer ist versorgt. Es war nicht einfach — aber es war würdevoll. Jetzt ist es Zeit, zu schauen: Hat das, was ihr heute gemacht habt, gewirkt? Und: Was sagt die Tochter dazu?"_
