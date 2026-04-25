# Phase Dokumentieren — Frau Yilmaz, Hüft-TEP

**situationId:** ls-yilmaz-hueft-tep
**Phase:** dokumentieren (6 von 6)
**Bloom:** B5–B6
**Zeit:** ~20–30 Min
**Steps:** 4 (3 Kern + 1 Optional)
**Kern-Frage:** Wie schreibe ich so, dass das Team morgen die richtigen Entscheidungen treffen kann?

---

## Kontext

Es ist 16:15 Uhr. Übergabe beginnt in 45 Minuten. Du setzt dich an den Computer auf dem Stationszimmer.

Was heute mit Frau Yilmaz passiert ist, muss in drei Bereichen dokumentiert werden:
1. **Pflegebericht** — was hast du beobachtet und gemacht?
2. **Pflegeplan** — welche Pflegeziele sind aktiv, welche Maßnahmen laufen?
3. **Übergabe** — was muss das Spätdienst-Team wissen?

Das ist kein Formalismus. Was du hier schreibst, entscheidet, ob das Team morgen die Druckstelle weiter beobachtet — oder vergisst.

---

## Kern-Steps

### Step 6.1 — Pflegebericht schreiben (Haupt-Freitext)

| Feld | Wert |
|------|------|
| **Step-ID** | `dok-01-pflegebericht-frei` |
| **Step-Typ** | `freetext` (LANG, ~120–200 Wörter) |
| **Bloom** | B6 |
| **Tag** | pflege |

**Aufgabe:**
"Schreibe den Pflegebericht für Frau Yilmaz, 3. post-OP-Tag, Frühdienst.

Dein Text soll folgende Informationen enthalten:
- Schmerz-Befund (NRS, Ort)
- Hautinspektion (Befund Steißbein, Kategorisierung)
- Mobilisation (Verlauf, Komplikation, Ergebnis)
- Lagerungsplan (Intervall, Lagerungsform)
- Beobachtung Wadenschmerz (und was eingeleitet wurde)
- Kommunikation (Angehöriger Mustafa, Frau Yilmaz' Aussage)
- Was für den Nächsten Dienst wichtig ist"

**Textbaustein-Modus (für B1-Schüler, einblendbar):**

"Frau Yilmaz äußerte Schmerzen NRS ___ beim [Ort]. Hautinspektion ergab: [Befund] am Steißbein (Dekubitus Kategorie ___). Erstes Aufstehen: [Verlauf beschreiben]. Ehemann Mustafa wurde [wie] einbezogen. Für morgen wichtig: [drei Punkte]."

**KI-Feedback prüft (9 Kriterien):**
1. Datum und Schicht dokumentiert?
2. Schmerz mit NRS-Wert?
3. Hautbefund mit Kategorie?
4. Mobilisationsverlauf inklusive Orthostase-Episode?
5. Lagerungsintervall dokumentiert?
6. Wadenschmerz und eingeleitete Maßnahme (Arzt informiert, Doppler)?
7. Angehöriger erwähnt?
8. Für nächsten Dienst relevante Infos?
9. Sachlich, nicht wertend, keine Adjektive wie "gut" oder "schlecht"?

**Feedback (Sandwich):**
"[Gelobter Punkt] — das ist genau das was das Folgeteam braucht. [Fehlender Punkt] — das solltest du ergänzen: ohne diesen Eintrag weiß der Nachtdienst nicht, dass [Konsequenz]. Insgesamt: ein vollständiger Pflegebericht ist das wichtigste Werkzeug der Teamkommunikation."

**Baustein-Trigger:** Wenn wesentliche Kriterien fehlen → `pflegedokumentation-pflegebericht-regeln` einblenden (Stufe 2–3).

---

### Step 6.2 — Pflegeplan ergänzen: Neue Pflegeziele

| Feld | Wert |
|------|------|
| **Step-ID** | `dok-02-pflegeplan-update` |
| **Step-Typ** | `matching` |
| **Bloom** | B5 |
| **Tag** | pflege |

**Aufgabe:** "Ordne die neuen Pflegeziele den passenden Maßnahmen zu."

| Pflegeziel | Maßnahme |
|------------|---------|
| Frau Yilmaz hat bis zur Entlassung keine Verschlechterung des Dekubitus Kategorie I | 30°-Mikrolagerung alle 2 Stunden, täglich Hautinspektion Steißbein + Trochanter |
| Frau Yilmaz führt täglich mindestens einen Aufstehversuch durch, NRS ≤ 5 | Analgesie 30 Min vor Mobilisation prüfen, 2-Personen-Unterstützung erste Tage, Erfolge dokumentieren und benennen |
| Orthostatische Hypotonie wird erkannt und verhindert | RR liegend vor Aufstehen messen, 3 Min Sitzpause obligatorisch, ggf. Arzt informieren wenn RR-Abfall > 20 mmHg systolisch |
| Mustafa ist in die Pflege einbezogen und versteht was gemacht wird | Frau Yilmaz als Vermittlerin, nonverbale Kommunikation, bei Eskalation Telefondolmetsch |

**Feedback (richtig):** "Pflegeziele ohne Maßnahmen sind Wünsche. Maßnahmen ohne Ziele sind blinde Aktionen. Das PESR-Prinzip verbindet beides — und sorgt dafür, dass das Team nicht nur weiß WAS zu tun ist, sondern WARUM."

---

### Step 6.3 — Session-Zusammenfassung

| Feld | Wert |
|------|------|
| **Step-ID** | `dok-03-session-summary` |
| **Step-Typ** | `summary` |
| **Bloom** | B5 |
| **Tag** | pflege |

**Was du heute gelernt hast:**

**Pflegeprozess:**
- Informationssammlung nach SBAR-Schema strukturieren
- Pflegeziele nach PESR formulieren — präzise, messbar, nachvollziehbar
- Evaluation = Rückblick + Vorausplanung

**Mobilisation:**
- Reihenfolge nach TEP: Analgesie → Warten → Vorbereiten → Sitzen → Aufstehen
- Orthostatische Hypotonie erkennen: RR liegend vs. sitzend, ≥ 20 mmHg = klinisch relevant
- Lagerungsvorschrift nach Hüft-TEP: Hüftbeugung < 90°, kein Beinkreuzen

**Dekubitus-Prophylaxe:**
- Kategorie I = nicht wegdrückbare Rötung — Sofortmaßnahme: Druckentlastung
- 30°-Mikrolagerung alle 2 Stunden (NPUAP/EPUAP 2019; DNQP 2024)
- Braden-Skala für Risiko-Erfassung

**Thrombose-Prophylaxe:**
- Virchow-Trias: Gefäßwandschaden + Stase + Hyperkoagulabilität
- Antikoagulation allein reicht nicht — Mobilisation ist essentiell
- Klinische Zeichen: Wadenschmerz auf Druck, Schwellung → sofort melden

**Kommunikation / Interkulturell:**
- Frau Yilmaz' Angst nicht übergehen — validieren, erklären, Schritt für Schritt
- Angehörige (hier: Mustafa) als Ressource einbeziehen, nicht als Hindernis behandeln
- Nonverbale Kommunikation überwindet Sprachbarrieren

**Dokumentation:**
- Was nicht dokumentiert ist, gilt als nicht durchgeführt (§ 630f BGB)
- Pflegebericht = sachlich, konkret, nachvollziehbar

**Karteikarten für Spaced Repetition (vorgemerkt):**
- Virchow-Trias (3 Säulen)
- Dekubitus Kategorie I: Definition + Sofortmaßnahme
- Lagerungsvorschrift Hüft-TEP (3 Regeln)
- PESR-Schema (4 Elemente)
- Orthostatische Hypotonie: Definition + Grenzwert

**Offene Anschluss-Frage für nächste Session:**
"Frau Yilmaz wird morgen entlassen. Wie bereitest du sie — und Mustafa — auf das Leben zuhause vor? Was muss sie wissen, damit sie nicht erneut stürzt?"

---

## Optionaler Step

### Step 6.4 (Optional) — Übergabe formulieren (Kurztext)

| Feld | Wert |
|------|------|
| **Step-ID** | `dok-04-uebergabe-optional` |
| **Step-Typ** | `freetext` (kurz, 3-5 Sätze) |
| **Bloom** | B5 |
| **Für wen** | Fortgeschrittene Schüler, die Übergabe-Kommunikation üben wollen |
| **Tag** | pflege |

**Aufgabe:**
"Du hast 2 Minuten für die mündliche Übergabe zu Frau Yilmaz. Formuliere die wichtigsten 3-5 Punkte, die dein Spätdienst-Kollege wissen muss."

**Erwartete Kerninhalte:**
- Erstes Aufstehen heute erfolgreich (3 Schritte, NRS 4 im Stehen)
- Dekubitus Kategorie I Steißbein — 30°-Mikrolagerung alle 2h läuft
- Wadenschmerz links — Arzt informiert, Doppler-Ergebnis ausstehend
- Analgesie morgen früh VOR Mobilisation (nicht vergessen!)
- Mustafa ist eingeweiht — ruhig, sitzt noch da

**KI-Feedback:** Wurden die zeitkritischen Punkte (Analgesie vor Mobilisation, Doppler-Ergebnis) genannt?

---

## Baustein-Trigger (Phase dokumentieren)

| Trigger | Baustein-ID | Stufe |
|---------|-------------|-------|
| Step 6.1 — Hautbefund ohne Kategorie | `dekubitus-prophylaxe-dokumentation` | Stufe 2–3 |
| Step 6.1 — NRS fehlt | `pflegedokumentation-schmerzerfassung` | Stufe 2 |
| Step 6.1 — Orthostase-Episode nicht erwähnt | `pflegedokumentation-pflegebericht-regeln` | Stufe 3 |

---

## Phase-Abschluss (Lernsituations-Abschluss)

**Abschlusstext:**
"Frau Yilmaz schläft. Mustafa ist nach Hause gegangen — er hat beim Rausgehen genickt.

Du hast heute einen vollständigen Pflegeprozess durchlaufen: Informieren, Beobachten, Planen, Durchführen, Evaluieren, Dokumentieren. Nicht als Schema — sondern als lebendigen Prozess mit einem echten Menschen.

Die Situation war nicht einfach. Orthostatische Hypotonie. Ein ängstlicher Angehöriger. Eine Patientin, die Nein sagen wollte. Du hast sie alle gemeistert.

Das ist Pflege."
