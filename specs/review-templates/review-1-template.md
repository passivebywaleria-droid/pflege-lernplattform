# Review #1 Template — Lernziele + Bausteine (nach Dozentin B Phase 1)

## Wann?

Nach Dozentin B Phase 1 abgeschlossen ist (`bausteine-plan.md` + `glossar-plan.md` + `karteikarten-plan.md` pro Thema erstellt).

**Vor Phase 2 (Situations-Erstellung).** Wenn Review #1 FAIL → zurück zu Dozentin B.

## Wie?

```bash
npx tsx scripts/pick-review-sample.ts --ce ce-02 --review 1
# oder für ein spezifisches Thema:
npx tsx scripts/pick-review-sample.ts --ce ce-02 --review 1 --thema sturz-prophylaxe
```

Das Script erstellt eine Checkliste in `content/ce-02/reports/review-1-*.md`.

## Dauer

- Erste CE (CE-02): **100% Review** = ~8-15h über mehrere Sitzungen
- Ab CE-03: **Mix (Pflicht + Stichprobe)** = ~3-5h pro CE

## Was du prüfst (pro Baustein)

### Kategorie A: Lernziel-Qualität

- [ ] **Handlungsorientiert formuliert?**
  - ✅ "Schüler wählt die korrekte Prophylaxe-Maßnahme bei immobilen Patienten"
  - ❌ "Schüler kennt Dekubitus-Prophylaxe"

- [ ] **Bloom-Level passt zum Lernziel?**
  - "wählt korrekte Antwort" = Bloom 4 (analysieren)
  - "begründet Entscheidung" = Bloom 5 (bewerten)
  - "entwickelt Pflegeplan" = Bloom 6 (erschaffen)

- [ ] **Lernziel ist messbar?**
  - Kann man testen, ob der Schüler es erreicht hat?

### Kategorie B: Misconceptions-Qualität

- [ ] **Sind die Misconceptions typische Fehler?**
  - ✅ "Dekubitus entsteht durch Reibung" (typische Verwechslung mit Intertrigo)
  - ❌ "Dekubitus entsteht auf Mars" (absurd, kein Schüler denkt das)

- [ ] **Mindestens 2-3 Misconceptions pro Baustein** (bei Bloom ≥ 2)

- [ ] **Jede Misconception hat Fachbegriff-Bezeichnung?**
  - "Intertrigo-Konfusion", "2-Stunden-Dogma", etc.

- [ ] **Feedback-Vorlage ist spezifisch?**
  - Jede Misconception hat eigenen Sandwich-Feedback-Text
  - Nicht generisch "Falsch, die richtige Antwort ist..."

### Kategorie C: Baustein-Granularität

- [ ] **8-12 Bausteine pro Thema** (Mikrolernen)

- [ ] **Jeder Baustein = 1 abgeschlossenes Konzept**
  - Nicht 3 Konzepte in 1 Baustein
  - Nicht 1 Konzept über 3 Bausteine verteilt

- [ ] **Bausteine bauen aufeinander auf?** (Vorwissen → neues Wissen)

### Kategorie D: Quellen

- [ ] **Primärquelle angegeben?** (nicht "I Care S. 234")
  - ✅ `(DNQP 2017)`, `(§ 4 PflBG)`, `(ICN 2021)`, `(EPUAP 2019)`
  - ❌ `[I Care S.123]`

- [ ] **Bei Standard-Themen: Expertenstandard konsultiert?**
  - Sturzprophylaxe → DNQP Expertenstandard Sturzprophylaxe
  - Dekubitus → DNQP + EPUAP

### Kategorie E: 3-Stufen-Struktur

- [ ] **Stufe 1 (Denkfrage):** Regt zum Nachdenken an (offen, kein MC mit richtiger Antwort)
- [ ] **Stufe 2 (Hinweis):** 2-3 Sätze Kontext + Kernaussage
- [ ] **Stufe 3 (Erklärung):** Vollständig, ~200-400 Wörter, eigenständig verständlich

## Entscheidungs-Matrix

| Situation | Aktion |
|-----------|--------|
| Alle Kategorien PASS | **GO** → Phase 2 starten |
| 1-2 kleinere Issues in Stichprobe | **GO mit Notizen** → Dozentin B bei nächstem Thema beachten |
| ≥3 Issues oder 1 Issue in Kategorie A-C | **NO-GO** → Dozentin B korrigiert |
| Grundsätzliches Missverständnis | **NO-GO + Dozentin-Agent anpassen** |

## Output

- Checkliste in `content/ce-{NN}/reports/review-1-*.md` abhaken
- Notizen unter "Notizen"-Abschnitt
- Entscheidung markieren (GO/NO-GO)

Bei NO-GO: Pipeline stoppt, Dozentin B bekommt die Notizen und korrigiert. Danach erneuter Review #1.
