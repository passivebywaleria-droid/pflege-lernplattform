# Phase 5 — Evaluieren

**situationId:** ls-nguyen-stoma
**Phase:** evaluieren (Phase 5 von 6)
**Zeit:** ~15–25 Min
**Bloom:** B4–B5 (mit B6-Anteil in Reflexion)
**Kern-Frage:** Was hat der Morgen gebracht — fachlich und menschlich?

---

## Kontext

Szenen-Sprung: Es ist 12:30 Uhr. Der Stomatherapeut Herr Baum war da — zwei Stunden lang. Ehefrau Mai hat zugeschaut, Linh hat übersetzt. Herr Nguyen hat beim zweiten Beutelwechsel um 11 Uhr für drei Sekunden auf sein Stoma geschaut.

Du kommst wieder in Zimmer 6. Frau Santos-Weber fragt dich: _"Na? Wie war das bei Herrn Nguyen?"_ Du weißt: Du wirst ihr jetzt berichten — und du wirst selbst einschätzen, was gut war und was du beim nächsten Mal anders machen würdest.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 5.1 | `eval-01-stoma-assessment` | **categorize** | B4 | Evaluierung der Stoma-Situation: Karten aus dem Morgen in Kategorien sortieren. Kategorien: [Verbessert seit Aufnahme / Unverändert / Noch offen / Neue Erkenntnis]. Karten: "Beutel sitzt dicht — erste Leckage behoben" → Verbessert. "Stoma rosig, Haut leicht gereizt" → Unverändert (kein Rückschritt, aber noch Handlungsbedarf). "Ernährungsberaterin noch nicht da" → Noch offen. "Herr Nguyen hat beim 2. Wechsel kurz hingeschaut" → Verbessert (kleiner Schritt Körperbild-Akzeptanz). "Ehefrau Mai hat Beutelwechsel-Demonstration gesehen" → Verbessert (Angehörigen-Anleitung begonnen). Bloom 4 — Analysieren. | pflege |
| 5.2 | `eval-02-ernaehrung-bilanz` | **calculation** | B4 | Ernährungsbilanz: Du findest das Ernährungsprotokoll. Gestern: 200 ml Tee, 100 ml Brühe, 3 Löffel Haferschleim. Heute Morgen (nach deiner Schicht): 150 ml Tee, 50 g Zwieback, schluckweise Trinknahrung (150 ml = 150 kcal). _"Berechne den ungefähren Kcal-Gesamtbetrag der letzten 24h. Was ergibt sich?"_ Erwartetes Ergebnis: ~200-250 kcal (Tee = 0, Brühe ~20, Haferschleim ~60, Zwieback ~60, Trinknahrung ~150 = gesamt ~290 kcal). Richtwert post-OP: ~1500-2000 kcal/d für Herr Nguyen (BMI 19, Stressstoffwechsel). _"Welchen Schluss ziehst du?"_ → Ernährungsdefizit erheblich, Eskalation dringend notwendig. Quelle: _(DGEM Leitlinie Klinische Ernährung — Chirurgie, 2020)_ | krankheitslehre |
| 5.3 | `eval-03-zitat-reflexion` | **text** (displayFormat: `quote`) | B4 | **Zitat Z6** als Quote-Card: _"Danke. Das... war nicht so schlimm. Wie ich dachte."_ (Herr Nguyen, nach dem Nachmittag) Begleit-Text (3 Sätze): Herr Nguyen hat nicht gesagt: "Es ist mir jetzt egal." Er hat gesagt: "Nicht so schlimm wie ich dachte." Das ist der erste Schritt. Körperbild-Akzeptanz nach Stoma-Anlage ist ein Prozess, der Wochen bis Monate dauert. Pflege setzt die Grundlage durch Würde, Transparenz und Geduld — nicht durch falschen Optimismus. | pflege |
| 5.4 | `eval-04-freetext-reflexion` | **freetext** (kurz, 2–3 Sätze) | B5 | **Offene Reflexionsfrage (KI-Feedback):** _"Herr Nguyen hat gesagt 'Ich bin kein richtiger Mann mehr.' Wie bist du damit umgegangen — und was hättest du rückblickend vielleicht anders gemacht?"_ Erwartete Themen: Pause gemacht, gespiegelt, nicht falsch getröstet. Rückblick: Hätte ich früher über seine Emotionen gesprochen? Hätte ich mehr Zeit eingeplant? Keine Musterantwort — Sandwich-Feedback durch KI. | pflege |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 5.opt-1 | `eval-opt-thrombose-check` | **truefalse** (Mehrfach) | B3 | B1 + Mittlere | Evaluierung Thromboseprophylaxe: Hat heute alles stattgefunden? 1) Heparin s.c. gegeben? (prüfen), 2) Mobilisation durchgeführt? (ja — Bettkante), 3) Kompressionsstrümpfe angelegt? (noch offen — Herr Nguyen hatte Schmerzen beim Anziehen). 4) Beinübungen? (nein — vergessen). Welche Maßnahme fehlt noch? Konsequenz: Beinübungen für Nachmittagsschicht dokumentieren. |
| 5.opt-2 | `eval-opt-haut-verlauf` | **slider** | B3 | Alle | Slider-Frage: "Wie würdest du das Dekubitus-Risiko von Herrn Nguyen HEUTE im Vergleich zu gestern einschätzen?" Skala: deutlich verbessert → unverändert → leicht erhöht. Erwartet: unverändert bis leicht verbessert (Mobilisation heute ein erster Schritt). Erklärung: Braden ändert sich erst bei nachhaltiger Verbesserung der Aktivität + Ernährung. |

---

## Phase-5-Abschluss

_Zwischenseite:_ "Der Morgen war schwer. Und er war gut. Herr Nguyen hat seine erste Stoma-Versorgung hinter sich. Ein kleines Stück. Die Ehefrau hat erste Orientierung. Die Ernährung ist noch ungelöst — das ist der nächste Schritt. Jetzt: dokumentieren."

---

## Baustein-Trigger Phase 5

| Trigger | Step | Bedingung | Baustein-ID | Didaktischer Zweck |
|---------|------|-----------|-------------|-------------------|
| T-15 | 5.2 | Kcal-Berechnung mit großem Fehler (>300 kcal Abweichung) | `ernaehrungsassessment-kcal-bedarf` | Energiebedarf post-OP einschätzen lernen |
| T-16 | 5.4 | KI-Feedback erkennt: psychosoziales Thema nicht adressiert | `ganzkörperpflege-würde` | Back-up: Körperbild-Veränderung und Pflegehaltung (falls T-12 in Phase 4 nicht getriggert) |

---

## Diversity-Check Phase 5

- Step-Typen: categorize, calculation, text (quote), freetext → 4 verschiedene ✓
- Keine 2× dasselbe hintereinander ✓
- Min 1 interaktiv (calculation, freetext) ✓
- Min 1 visuell (quote, slider in optional) ✓
- Tags: 2× pflege, 1× krankheitslehre (5.2), 1× pflege → alle 3 Tags über die Phase vertreten ✓
- Direktes Patientenzitat (Z6) in Phase 5 ✓
