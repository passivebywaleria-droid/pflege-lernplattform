# Content-Sizing — Wie viel Content braucht die Plattform?

**Datum:** 2026-06-07
**Status:** Aktiv — Grundlage VOR Kernfakten-Generierung
**Auslöser:** Gründerin-Gespräch — „Bevor wir Qualität bauen, müssen wir die Menge kennen."
**Entscheidungen:** siehe Memory `project_content_sizing_modell`

---

## 0. Executive Summary (die Zahlen zuerst)

| Größe | Wert |
|-------|------|
| Curriculum-Theorie gesamt (PflBG-Rahmenplan) | **1920 h** (55 LE, 11 CE, 15 KB) |
| App-Content-Ziel (dichte-adjustiert, ×0,55) | **~1056 h** einzigartiger Content |
| **Heute gebaut (echter .ts-Content, gemessen)** | **~82 h** (nur CE-02; konservativ ~50 h) |
| **Deckungsgrad** | **~8 %** |
| **Lücke** | **~974 h** |

**Kernaussage 1:** Das Minuten-pro-Step-Modell ist nicht das Problem — das **Gesamt-Volumen** ist es.

**Kernaussage 2 (kritisch):** Nur **CE-02** hat app-fertigen TypeScript-Content (94 Situations- + 100 Themen-Dateien). **Alle 10 anderen CE bestehen ausschließlich aus `.md`-Plänen (`bausteine-plan.md`) — null generierter Content.** Die früheren Status-Angaben „CE-01 ✅ 53 Bausteine" usw. zählen **Plan-Markdown, nicht gebaute Inhalte**. Real ist die Plattform inhaltlich zu ~94 % unbebaut, und CE-02 liegt selbst erst bei 65 % seines Ziels.

---

## 1. Das Nachweis-Skelett: Stunden pro Kompetenzbereich

Die Schule weist Lernzeit **pro Kompetenzbereich (KB)** nach, nicht pro CE. KB spannen über mehrere CE — die App summiert über CE-Grenzen. Der `kompetenzbereich`-Tag sitzt bereits auf jedem Step/Baustein → Mechanik steht.

| KB | Stunden | Anteil | Gespeist v.a. durch CE |
|----|---------|--------|------------------------|
| **I.1** Pflegeprozess/-handeln | **380 h** | 19,8 % | CE-02, CE-05, CE-07, CE-10, CE-11 |
| **I.3** | 300 h | 15,6 % | CE-08, CE-11, CE-05 |
| **I.2** | 190 h | 9,9 % | CE-04, CE-05, CE-10 |
| **I.4** | 100 h | 5,2 % | CE-06 |
| **I.5** | 70 h | 3,6 % | CE-09 |
| **II.1** | 100 h | 5,2 % | CE-03, CE-08 |
| **II.2** | 110 h | 5,7 % | CE-04, CE-09 |
| **II.3** | 70 h | 3,6 % | CE-03, CE-08 |
| **III.1** | 120 h | 6,2 % | CE-05, CE-07 |
| **III.2** | 120 h | 6,2 % | CE-05, CE-06 |
| **III.3** | 40 h | 2,1 % | CE-10 |
| **IV.1** | 80 h | 4,2 % | CE-04, CE-07 |
| **IV.2** | 80 h | 4,2 % | CE-01, CE-09 |
| **V.1** | 70 h | 3,6 % | CE-04, CE-05 |
| **V.2** | 90 h | 4,7 % | CE-01, CE-05 |

**Hauptbereiche:** I = 1040 h (54 %) · II = 280 h (15 %) · III = 280 h (15 %) · IV = 160 h (8 %) · V = 160 h (8 %).

**Implikation:** Bereich I (Pflegehandeln) ist die halbe Ausbildung. Hier muss der meiste Content entstehen — und CE-02 (reines I.1) ist die richtige Blaupause für den Stil.

---

## 2. Per-CE Build-Ziel + Backlog (gemessen)

Kalibrierung der Mess-Raten an der echten CE-02-Messung (`scripts/measure-ce02-content.ts`, echtes Zeit-Modell):
- **4,86 min / Situations-Step** · **5,62 min / Baustein**

Gemessen mit `scripts/measure-content.ts --all` (nur echter `.ts`-Content; `.md`-Pläne zählen NICHT).

| CE | Curr-h* | Ziel-h (×0,55) | Ist-h | Deck. | Lücke-h | Status |
|----|--------:|---------------:|------:|------:|--------:|--------|
| CE-01 | 100 | 55 | 0 | 0 % | 55 | ○ nur .md-Pläne |
| CE-02 | 180 | 99 | 82,3 | **83 %** | 17 | ● gebaut (.ts) |
| CE-03 | 100 | 55 | 0 | 0 % | 55 | ○ nur .md-Pläne |
| CE-04 | 210 | 116 | 0 | 0 % | 116 | ○ nur .md-Pläne |
| CE-05 | 380 | 209 | 0 | 0 % | 209 | ○ nur .md-Pläne |
| CE-06 | 150 | 83 | 0 | 0 % | 83 | ○ nur .md-Pläne |
| CE-07 | 230 | 127 | 0 | 0 % | 127 | ○ nur .md-Pläne |
| CE-08 | 300 | 165 | 0 | 0 % | 165 | ○ nur .md-Pläne |
| CE-09 | 210 | 116 | 0 | 0 % | 116 | ○ nur .md-Pläne |
| CE-10 | 230 | 127 | 0 | 0 % | 127 | ○ nur .md-Pläne |
| CE-11 | 190 | 105 | 0 | 0 % | 105 | ○ nur .md-Pläne |
| **Σ** | **~1920** | **~1056** | **~82** | **~8 %** | **~974** | |

\* Per-CE-Stunden sind **Näherung** — die 15 Multi-CE-LEs gehören anteilig zu mehreren CE. Die Spaltensumme (2280 h roh) wurde auf das saubere Gesamt von 1920 h normiert. Pro-CE-Werte ±15 % unsicher; das **KB-Raster (Abschnitt 1) ist die belastbarere Zielgröße.**

**Plan vs. gebaut:** Alle 10 Nicht-CE-02 haben nur `bausteine-plan.md` (insgesamt ~80 Plan-Dateien) — ein wertvoller Vorlauf für die Generierung, aber **0 h app-fertiger Content**. Der Sprung Plan → `.ts` ist die eigentliche Bauarbeit.

---

## 3. Das Zwei-Schichten-Prinzip (Abundanz ohne Prüf-Explosion)

Gründerin-Vorgabe: **lieber zu viel Content als zu wenig**, viele Blickwinkel. Versöhnt mit „jeder Fakt belegt" durch Schicht-Trennung:

| Schicht | Eigenschaft | Menge | Verifikation |
|---------|-------------|-------|--------------|
| **Fakten (Kernfakten)** | endlich, curriculum-begrenzt | 1 Fakt | **teuer, passgenau quellenbelegt** |
| **Darbietung (Steps/Fälle/Winkel/Repetition)** | üppig, vielperspektivisch | N Steps pro Fakt | billig (aus belegtem Fakt abgeleitet) |

**Abundanz lebt in der Ableitung, nicht in der Faktenbasis.** Die Adaptiv-Engine („6 Wege zum Ziel") wählt pro Schüler aus dem Überschuss. Mehr Darbietung = bessere Adaptivität, gleiche Fakten-Prüflast.

---

## 4. Multiplikator-Modell: vom Fakt zur Stunde

Aus CE-02 empirisch abgeleitet (Richtwerte, pro CE justierbar):

```
1 Kernfakt
  → 1 Inline-Wissen-Snack (Anker)          ~1 min
  → 3-6 Anwendungs-Steps (versch. Typen)   ~3 min/Step = 9-18 min
  → 0-1 Branching/Fall-Einbindung          ~5 min
  → 1 Karteikarte (Spaced Repetition)      ~1 min × 5 Wdh.
  ───────────────────────────────────────────────────────
  ≈ 20-30 min einzigartige App-Zeit pro Kernfakt
```

**Hochrechnung Ziel:** ~1056 h Content ÷ ~0,4 h/Fakt ≈ **~2600 Kernfakten** über alle 11 CE.
- CE-02 hat ~362 Bausteine (≈ Fakten-Cluster) → Größenordnung passt für die größte CE.
- Realistischer Korridor Gesamt-Faktenbasis: **2000–3000 Kernfakten**, quellengebunden.

---

## 5. Bau-Reihenfolge (Empfehlung)

1. **CE-02 auf 100 % bringen** (+34 h) — Blaupause vervollständigen, v2-Inline-Wissen + Karteikarten fertig. Dient als Goldstandard für den Generator.
2. **Pipeline v10 + Kernfakten-Grounding** härten (siehe `project_pipeline_neu_vor_naechsten_ces`, RAG/passagen-genaue Belege).
3. **Bereich I zuerst** (54 % der Ausbildung): CE-05, CE-07, CE-10, CE-11 — Situations-Hauptlernweg bauen (heute 0 Situationen).
4. **Querschnitts-KB** (II–V) über die CE verteilen, KB-Stunden-Raster als Fortschritts-Check.

**Laufende Messung:** `scripts/measure-content.ts <ce>` (Verallgemeinerung von `measure-ce02-content.ts`) — jederzeit Ist gegen Ziel prüfen.

---

## 6. Offene Entscheidungen

- [ ] Per-CE-Stunden exakt aus Multi-CE-LE-Anteilen ableiten (statt Näherung) — falls Schul-Nachweis das verlangt
- [ ] Kernfakten-Zielzahl pro CE final festlegen (nach CE-02-Vervollständigung neu kalibrieren)
- [ ] App-Dichte-Faktor 0,55 gegen reale Schüler-Durchlaufzeiten validieren (sobald Nutzer-Daten existieren)
