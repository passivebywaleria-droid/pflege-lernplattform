# Review #2 Template — Fertige Steps (vor Published)

## Wann?

Nach dem kompletten Pipeline-Lauf (Dozentin A → B → Regisseur → B1-Dozentin → Generator → Post-Processor → Didaktik-Prüfer → Step-KI-Prüfer) und ALLE automatischen Checks bestanden sind.

**Der LETZTE Schritt vor Published.** Ohne GO kein Live-Gang.

## Wie?

```bash
npx tsx scripts/pick-review-sample.ts --ce ce-02 --review 2
# oder für eine spezifische Situation:
npx tsx scripts/pick-review-sample.ts --ce ce-02 --review 2 --situation sturz-prophylaxe
```

## Dauer

- Erste CE (CE-02): 100% der Steps = ~15-25h insgesamt, gestreckt über mehrere Sitzungen
- Ab CE-03: **Pflicht + 10-20% Stichprobe** = ~2-5h pro Situation

## Was du prüfst: Jeden Step **selbst durchspielen**

Öffne `http://localhost:3000/de/lernen/ce/ce-02` und navigiere zu dem Step. Mach ihn als Schüler.

### Kategorie A: Funktionalität

- [ ] **Step funktioniert?** (keine Render-Fehler, Klicks werden registriert)
- [ ] **Weiter-Button erscheint nach Antwort?**
- [ ] **Feedback wird angezeigt?**

### Kategorie B: Didaktische Qualität

- [ ] **Fühlt sich der Step didaktisch richtig an?**
  - Nicht zu einfach, nicht zu schwer für das Bloom-Level
  - Frage ist klar formuliert

- [ ] **Passt Step-Typ zum Lernziel?**
  - Bloom 5-6 NIE als einfache MC
  - Wenn du lachen musst ("Warum MC für Pflegebericht-Schreiben?") → FAIL

- [ ] **Ist Abwechslung gut?**
  - Nicht 3× dasselbe hintereinander
  - Erlebnis-Modi wechseln

### Kategorie C: MC-Qualität (bei MC-Steps)

- [ ] **Sind Distraktoren sinnvoll?**
  - Jede falsche Antwort ist eine typische Misconception
  - Nicht offensichtlich falsch ("Dekubitus = Apfel")

- [ ] **Ist die richtige Antwort erkennbar länger?**
  - Wenn ja: Post-Processor sollte das gewarnt haben

- [ ] **Sind die Antworten gut durchgemischt?**
  - Nicht immer Option A richtig (Shuffling hat geklappt?)

### Kategorie D: Feedback-Qualität (KRITISCH)

- [ ] **Ist Feedback spezifisch?**
  - ✅ "Nicht ganz — du denkst an Intertrigo. Der Unterschied ist..."
  - ❌ "Falsch. Die richtige Antwort ist B."

- [ ] **Adressiert falsche Antwort die spezifische Misconception?**
  - Klick auf Distraktor → bekommst du die spezifische Erklärung zu DIESER Misconception?

- [ ] **Richtig-Feedback hat Vertiefung?**
  - Nicht nur "Richtig!"
  - Praxis-Bezug oder Merkhilfe enthalten

- [ ] **Nie mit "Falsch" starten?**
  - "Nicht ganz", "Fast", "Naher dran als du denkst" etc.

### Kategorie E: Sprache

- [ ] **C1-Version ist verständlich aber präzise?**
- [ ] **B1-Version ist tatsächlich einfacher?**
  - Sätze max 15 Wörter
  - Einfache Wörter
  - Fachbegriffe erklärt

- [ ] **Umlaute korrekt?** (ä ö ü ß — nie ae/oe/ue/ss)

### Kategorie F: Bilder

- [ ] **Wenn Bild-Slot:** Ist das Bild da und passt?
  - Copic-Stil einheitlich?
  - Anatomie mit deutschen Labels?
  - Kein englischer Text im Bild?

- [ ] **Alt-Text vorhanden?** (für Screenreader)

### Kategorie G: Situations-Kontext (bei Situations-Steps)

- [ ] **Patient ist präsent?** (Name, Situation erwähnt)
- [ ] **Folgt logisch auf vorherigen Step?**
- [ ] **Passt zum aktuellen Phasen-Charakter?**
  - Phase 1 Informieren: aufnehmen, nicht handeln
  - Phase 4 Durchführen: handeln, nicht nur lesen
  - Phase 6 Dokumentieren: formulieren, nicht nur MC

## Besondere Aufmerksamkeit bei...

### Freitext-Steps

- Erwartet das System realistische Schüler-Antworten?
- Wird die KI-Bewertung sinnvoll?
- Was passiert bei leerer Antwort?

### Branching-Szenarien

- Alle Wege durchspielen (A, B, C)
- Folgt jeder Weg logisch?
- Sind Komplikationen realistisch?

### Dialog/Rollenspiel

- Klingt der Dialog natürlich?
- Spricht der Schüler als Pflegekraft (nicht als Dozent)?
- Ist der Patient authentisch?

## Entscheidungs-Matrix

| Situation | Aktion |
|-----------|--------|
| Alle Pflicht-Checks PASS + max 1 kleines Issue in Stichprobe | **GO** → Published |
| Min. 1 FAIL in Kategorie B (Didaktik) oder D (Feedback) | **NO-GO** → zurück zu Regisseur/Generator |
| Bilder fehlen noch | **GO mit Platzhaltern** → Bild-Pipeline später |
| Grundsätzliches Problem (alle Steps ähnlich schlecht) | **NO-GO + Agenten-Update** |

## Nach Review

- Checkliste in `content/ce-{NN}/reports/review-2-*.md` abhaken
- Notizen unter "Notizen"-Abschnitt
- Status in `_manifest.ts` auf `"published"` setzen (bei GO)

## Lern-Effekt aus Review #2

**Wichtige Patterns dokumentieren:**
- Häufige Feedback-Schwächen → Dozentin B Update
- Generator-Fehler → content-generator.md präziser machen
- UI-Probleme → Renderer-Update

Nach CE-02 fließen Learnings in die Pipeline für CE-03 ein.
