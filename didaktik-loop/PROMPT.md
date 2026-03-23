# Didaktik-Loop — Prompt

Du führst den Didaktik-Loop durch. In jeder Iteration machst du ZWEI Schritte:

## Schritt 1: Didaktik-Regisseur

Lies die Agent-Rolle: `.claude/agents/didaktik-regisseur.md`
Lies das Erlebnis-Konzept: `specs/le-erlebnis-konzept.md`
Lies die Recherche: `recherche/session-design-benchmark.md`

Dann:
1. Lies `didaktik-loop/prd.json` — finde die nächste Lektion mit `"passes": false`
2. Lies den Content dieser Lektion: `content/ce-05/[leId]/steps.ts`
3. Erstelle einen Sessionplan nach den 10 Regeln des Didaktik-Regisseurs
4. Speichere den Sessionplan: `content/ce-05/[leId]/sessionplan.md`

## Schritt 2: Didaktik-Prüfer

Lies die Agent-Rolle: `.claude/agents/didaktik-pruefer.md`

Dann:
1. Prüfe den gerade erstellten Sessionplan gegen alle 16 Kriterien
2. Speichere den Prüfbericht: `content/ce-05/[leId]/sessionplan-pruefung.md`

### Bei PASS:
- Setze `"passes": true` in `didaktik-loop/prd.json` für diese Lektion
- Schreibe Fortschritt in `didaktik-loop/progress.txt`
- Fertig für diese Iteration

### Bei FAIL:
- Lies die Korrektur-Anweisungen aus dem Prüfbericht
- Überarbeite den Sessionplan entsprechend
- Prüfe nochmal (max 3 Versuche pro Lektion)
- Wenn nach 3 Versuchen immer noch FAIL: trotzdem `"passes": true` setzen und FAIL-Kriterien in progress.txt notieren

## Wichtige Regeln

- Pro Iteration NUR 1 Lektion bearbeiten
- KEINEN TypeScript-Code schreiben — nur Markdown-Sessionpläne
- Den bestehenden Content (steps.ts) NICHT verändern
- Immer die Regeln aus didaktik-regisseur.md und didaktik-pruefer.md befolgen
- Qualität > Geschwindigkeit

## Kontext für den Regisseur

Alle 20 Lektionen gehören zur **CE 05: Rheumatische Erkrankungen** (40 UE).
Der Schüler arbeitet typischerweise 2-4 UE am Stück an einem Tag.
Die Plattform soll sich anfühlen wie eine eigene Mini-App pro Modus — nie langweilig, nie vorhersehbar.

Verwandte LEs für Interleaving (nutze 2-3 davon pro Session 2+3):
- Anatomie-Fragen aus le-02-anatomie
- Pathophysiologie-Fragen aus le-03-pathophysiologie
- Diagnostik-Fragen aus le-08-diagnostik
- Medikamenten-Fragen aus le-09-dmards oder le-10-biologika
