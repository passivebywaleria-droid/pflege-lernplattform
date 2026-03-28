# Gesamt-Loop — 9 Rollen in einer Iteration

Du führst den kompletten Content-Pipeline für EINE Lektion durch. Alle 9 Rollen nacheinander.

---

## Schritt 0: Nächste Lektion finden

1. Lies `didaktik-loop/prd.json`
2. Finde die erste Lektion mit `"passes": false`
3. Merke dir die `leId` — das ist deine Lektion für diese Iteration

---

## Schritt 1: Fach-Rechercheur

Lies die bestehenden Steps: `content/ce-05/[leId]/steps.ts`
Lies das Quellenregister (falls vorhanden): `content/ce-05/[leId]/quellenregister.md`

Erstelle: `content/ce-05/[leId]/rohmaterial.md`

Das Rohmaterial enthält:
- **40-50 Kernfakten** (gruppiert in: Grundlagen / Vertiefung / Transfer)
- **15-25 Glossar-Begriffe** (Basis / Vertiefung / Prüfung)
- **Bloom-Verteilung** (mind. 5 Fakten pro Bloom-Stufe B1-B6)
- **Interleaving-Vorschläge** (5-8 Fragen aus verwandten LEs)
- **Offene-Fragen-Vorschläge** (4-6 Freetext-Fragen mit Bloom, Musterantwort, Kriterien)

Quellen: Nutze die bestehenden Steps als Basis und erweitere mit Fachwissen.

---

## Schritt 2: Leitfall-Autor

Lies die Rolle: `.claude/agents/leitfall-autor.md`
Lies das Rohmaterial: `content/ce-05/[leId]/rohmaterial.md`
Lies die bestehenden Steps (dort gibt es bereits einen Leitfall): `content/ce-05/[leId]/steps.ts`

Erstelle: `content/ce-05/[leId]/leitfall.md`

- **Patient A** (Leitfall für Session 1+2): Übernimm den bestehenden Leitfall aus steps.ts, erweitere ihn mit Psyche, Soziales, Entwicklung über 2 Sessions
- **Patient B** (Transfer für Session 3): Neuer Patient, anderes Profil, gleiche Erkrankung

Beachte alle Regeln aus leitfall-autor.md (Diversität, Dreidimensionalität, emotionale Anker).

---

## Schritt 3: Didaktik-Regisseur

Lies die Rolle: `.claude/agents/didaktik-regisseur.md`
Lies das Erlebnis-Konzept: `specs/le-erlebnis-konzept.md`
Lies Rohmaterial + Leitfall der aktuellen Lektion

Erstelle: `content/ce-05/[leId]/sessionplan.md`

Sessionplan mit 3 Sessions (je ~22 Steps):
- Step-Tabelle: #, Min, Modus, Step-Typ, Bloom, 12-Pkt, **Lernziel**, Inhalt, Begründung
- **Lernziel-IDs definieren**: Format `{ceId}-{leId}-{topic}`, z.B. `ce05-le03-ra-definition`
- Jeder Step bekommt eine Lernziel-ID (Spalte "Lernziel" in der Tabelle)
- Alle verwendeten Lernziel-IDs in den Metadaten des Sessionplans auflisten
- Session 1 nutzt die bestehenden Steps als Basis (aber neu choreografiert)
- Session 2+3 sind komplett neu
- Beachte alle 12 Regeln des Regisseurs

---

## Schritt 4: Gamification-Designer

Lies die Rolle: `.claude/agents/gamification-designer.md`
Lies den Sessionplan: `content/ce-05/[leId]/sessionplan.md`

Erstelle: `content/ce-05/[leId]/gamification.md`

- XP-Budget pro Session
- Step-für-Step XP-Zuweisung
- Emotionale Höhepunkte (3 pro Session: Stolz, Aha, Empathie)
- Achievements für diese LE
- Streak-Hotspots

---

## Schritt 5: Content-Generator

Lies die Rolle: `.claude/agents/content-generator.md`
Lies Sessionplan + Leitfall + Gamification + Rohmaterial
Lies die Types: `content/ce-05/_types.ts`

Erstelle:
- `content/ce-05/[leId]/steps-s2.ts` — Session 2 (20-25 Steps)
- `content/ce-05/[leId]/steps-s3.ts` — Session 3 (18-22 Steps)

Jeder Step hat `contentC1`. Das `contentB1` wird in Schritt 6 ergänzt.
Jeder Step hat ein `lernziel`-Feld (aus dem Sessionplan übernehmen, Format: `{ceId}-{leId}-{topic}`).

WICHTIG: Exakt dem Sessionplan folgen. Jeder Step im Plan = 1 Step im Code.

---

## Schritt 6: B1-Übersetzer

Lies die Rolle: `.claude/agents/b1-uebersetzer.md`
Lies steps-s2.ts und steps-s3.ts

Ergänze in beiden Dateien: `contentB1` für jeden Step.

Regeln:
- Max 15 Wörter pro Satz
- Kein Konjunktiv
- Fachbegriffe beim ersten Vorkommen erklären
- Freetext: Satzanfänge + Hilfe-Wörter bereitstellen

---

## Schritt 7: Didaktik-Prüfer

Lies die Rolle: `.claude/agents/didaktik-pruefer.md`
Lies den Sessionplan + die generierten Steps

Erstelle: `content/ce-05/[leId]/sessionplan-prüfung.md`

Prüfe gegen 16 Kriterien (A1-A4, B1-B4, C1-C3, D1-D2, E1-E3).

Bei FAIL: Gehe zurück zu Schritt 5, korrigiere, prüfe erneut (max 3 Versuche).

---

## Schritt 8: Fachliche Prüferin

Lies die Rolle: `.claude/agents/fachliche-prueferin.md`
Lies alle Steps (steps.ts, steps-s2.ts, steps-s3.ts)

Erstelle: `content/ce-05/[leId]/fachliche-prüfung.md`

Prüfe gegen 10 Kriterien (F1-F10).

Bei FAIL:
- KRITISCH (F10): Sofort korrigieren, nochmal prüfen
- WICHTIG (F1-F6): Korrigieren, nochmal prüfen
- HINWEIS (F7-F9): Notieren, kein erneuter Durchlauf nötig

---

## Schritt 9: Abschluss

Wenn Schritt 7 UND 8 = PASS:

1. Setze `"passes": true` für diese Lektion in `didaktik-loop/prd.json`
2. Schreibe in `didaktik-loop/progress.txt`:
   ```
   [Datum]: [leId] — PASS (Didaktik: 16/16, Fachlich: 10/10, Versuche: [N])
   ```

Wenn nach 3 Versuchen immer noch FAIL:
1. Setze trotzdem `"passes": true`
2. Notiere die FAIL-Kriterien in progress.txt
3. Markiere die Lektion in prd.json mit `"warnings": ["F3", "B2"]`

---

## Wichtige Regeln

- **Pro Iteration NUR 1 Lektion** — nicht 2 oder mehr
- **Echte Umlaute** verwenden (ä, ö, ü) — KEINE ae, oe, ue
- **Bestehende steps.ts NICHT ändern** — die Session-1-Steps bleiben wie sie sind
- **TypeScript muss kompilieren** — der TSC-Check läuft nach dir automatisch
- **Qualität > Geschwindigkeit** — lieber 1 gute Lektion als 3 mittelmäßige
- **Alle Quellen angeben** — kein Step ohne Quellenreferenz
