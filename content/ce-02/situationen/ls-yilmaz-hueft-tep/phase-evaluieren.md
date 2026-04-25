# Phase Evaluieren — Frau Yilmaz, Hüft-TEP

**situationId:** ls-yilmaz-hueft-tep
**Phase:** evaluieren (5 von 6)
**Bloom:** B4–B6
**Zeit:** ~15–25 Min
**Steps:** 4 (3 Kern + 1 Optional)
**Kern-Frage:** Hat es gewirkt? Was kommt morgen? Und: Was hätte ich besser machen können?

---

## Kontext

Szenen-Sprung: Es ist Nachmittag, 15:30 Uhr. Du kommst nochmal zu Frau Yilmaz — kurzer Nachmittags-Check vor der Übergabe.

Sie liegt in 30°-Mikrolagerung auf der linken Seite. Mustafa sitzt neben ihr und hält ihre Hand. Als du hereinkommst, schaut sie auf und sagt:

**Patientenzitat Z8:** _"Heute ist es schon ein bisschen besser. Ich habe weniger Angst. Aber ich will noch nicht alleine gehen."_

Das ist eine wichtige Aussage — sie zeigt, dass Frau Yilmaz Fortschritt wahrnimmt UND realistisch bleibt. Beides ist gut.

---

## Kern-Steps

### Step 5.1 — Maßnahmen-Evaluation: Was hat gewirkt?

| Feld | Wert |
|------|------|
| **Step-ID** | `eval-01-massnahmen-check` |
| **Step-Typ** | `categorize` |
| **Bloom** | B4 |
| **Tag** | pflege |

**Aufgabe:** "Bewerte die heutigen Maßnahmen. Ordne jede Maßnahme einer Kategorie zu."

| Maßnahme | Kategorie |
|----------|-----------|
| Analgesie vor Mobilisation → zweiter Versuch erfolgreich | Hat gewirkt ✅ |
| Steißbein-Rötung (Kategorie I) entdeckt und Lagerungsplan gestartet | Hat gewirkt ✅ |
| 30°-Mikrolagerung alle 2 Stunden | Begonnen, braucht Fortsetzung |
| Mustafa einbezogen — Frau Yilmaz als Vermittlerin | Hat gewirkt ✅ |
| Wadenschmerz links gemeldet | Arzt informiert, Doppler-Untersuchung läuft — Ergebnis ausstehend |
| Dekubitus-Schmerz am Steißbein noch vorhanden | Nicht vollständig gelöst — braucht weitere Druckentlastung |

**Feedback:** "Evaluation bedeutet nicht 'alles gelöst oder nicht'. Es bedeutet: Was hat heute gewirkt? Was braucht morgen nochmal Aufmerksamkeit? Frau Yilmaz ist aufgestanden — das ist der Haupterfolg. Die Dekubitus-Prophylaxe muss fortgesetzt werden."

---

### Step 5.2 — Folgeplanung: Was kommt morgen?

| Feld | Wert |
|------|------|
| **Step-ID** | `eval-02-folgeplan-morgen` |
| **Step-Typ** | `reflection` |
| **Bloom** | B5 |
| **Tag** | pflege |

**Aufgabe:** "Frau Yilmaz ist morgen Tag 4 nach der OP. Frau Wendt fragt dich am Ende deiner Schicht:

> _'Was soll morgen Früh als erstes passieren, wenn du nicht mehr da bist?'_

Schreibe 3 konkrete Punkte für die Übergabe."

**Erwartete Antworten (Kerninhalte):**
- Analgesie morgen früh prüfen + 30 Min vor der Mobilisation geben
- Steißbein-Rötung morgen erneut inspizieren — Kategorisierung überprüfen
- Wadenschmerz: Ergebnis Doppler abfragen (heute Nachmittag beauftragt)

**KI-Feedback prüft:**
1. Steht Analgesie vor Mobilisation drin? (Schlüsseleinsicht aus Phase 3)
2. Steht Hautinspektion drin? (Dekubitus-Kategorie beobachten)
3. Ist die Übergabe konkret (wer macht was wann)?

---

### Step 5.3 — Selbstreflexion: Was hätte ich anders gemacht?

| Feld | Wert |
|------|------|
| **Step-ID** | `eval-03-selbstreflexion-freetext` |
| **Step-Typ** | `freetext` (kurz, 2-4 Sätze) |
| **Bloom** | B6 |
| **Tag** | pflege |

**Aufgabe:**
"Denk zurück auf die Situation von heute Morgen. Was hätte dir geholfen, die erste Stunde bei Frau Yilmaz besser zu gestalten? Was würdest du beim nächsten Mal anders machen?"

**Mögliche Antworten (nicht Musterlösung — KI-Feedback individuell):**
- Mustafa früher als Ressource einbeziehen (Frau Yilmaz bitten, ihn von Anfang an zu informieren)
- Früher die orthostatische Hypotonie antizipieren (Blutdruck liegend messen VOR dem ersten Aufstehen)
- Schmerzmedikament-Status in der Übergabe aktiver erfragen (nicht erst beim Plan)

**KI-Feedback (Sandwich):**
"[Bestätigung des Reflexionspunkts] — das zeigt pflegerisches Denken. [Inhaltliche Vertiefung: Warum ist das relevant?] Du bist auf dem richtigen Weg — das nächste Mal wirst du das von Anfang an im Blick haben."

---

## Optionaler Step

### Step 5.4 (Optional) — Konfidenz: Vorher/Nachher

| Feld | Wert |
|------|------|
| **Step-ID** | `eval-04-konfidenz-vergleich-optional` |
| **Step-Typ** | `confidence` |
| **Bloom** | B4 |
| **Für wen** | Alle Schüler (als motivierender Abschluss der Phase) |
| **Tag** | pflege |

**Aufgabe:** "Am Anfang von Phase 1 hast du eingeschätzt, wie gut du die Situation von Frau Yilmaz kennst. Jetzt:

Wie sicher fühlst du dich, eine ähnliche Situation beim nächsten Mal zu meistern?"

Skala 1–5 (kein richtig/falsch)

**Abschlusstext:** "Du hast heute mehr gemacht als du dachtest. Erstes Aufstehen nach Hüft-TEP, orthostatische Hypotonie erkannt, Angehörigen einbezogen, Dekubitus-Prophylaxe gestartet, Pflegeziele formuliert. Das ist kein kleiner Tag."

---

## Baustein-Trigger (Phase evaluieren)

| Trigger | Baustein-ID | Stufe |
|---------|-------------|-------|
| Step 5.2 — Analgesie fehlt in Übergabe | `pflegeprozess-evaluation-zirkel` | Stufe 2 |
| Step 5.2 — Hautinspektion fehlt | `dekubitus-prophylaxe-verlaufskontrolle` | Stufe 2–3 |

---

## Phase-Abschluss

**Zwischenseite:** "Evaluation bedeutet: Du schaust zurück, um besser vorwärtszugehen. Frau Yilmaz ist aufgestanden. Die Prophylaxe läuft. Die Kommunikation mit Mustafa hat funktioniert.

Jetzt: Dokumentieren. Das ist der letzte Schritt — aber nicht der unwichtigste. Was du heute nicht aufschreibst, hat für das Team morgen nicht stattgefunden."
