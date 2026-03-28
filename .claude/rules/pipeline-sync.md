# Pipeline-Sync-Regel

## Wann gilt diese Regel?

Immer wenn eine Änderung an der Content-Pipeline vorgenommen wird:
- Neues Feld in ContentStep (`_types.ts`)
- Neue Regel für Content-Erstellung
- Neuer Step-Typ
- Neue Qualitätskriterien
- Änderung am Sessionplan-Format
- Änderung am Didaktik-Loop-Ablauf

## Welche Dateien müssen ALLE gleichzeitig aktualisiert werden?

Bei JEDER Pipeline-Änderung diese 7 Stellen prüfen und ggf. updaten:

| # | Datei | Was steht dort? | Wann updaten? |
|---|-------|-----------------|---------------|
| 1 | `.claude/agents/didaktik-regisseur.md` | Sessionplan-Format, Regeln, Checkliste | Neues Feld → Spalte in Tabelle + Checkliste |
| 2 | `.claude/agents/content-generator.md` | TypeScript-Regeln, Template, Feld-Regeln | Neues Feld → Neue Regel + Template updaten |
| 3 | `.claude/agents/didaktik-pruefer.md` | Prüfkriterien (28 Kriterien, Blöcke A-H) | Neue Regel → Neues Kriterium + Tabelle + Zähler |
| 4 | `ralph/PROMPT.md` | 7-Phasen-Loop, Rohmaterial, TypeScript-Template | Neues Feld → Phase 4.5 + Phase 7 + Checkliste |
| 5 | `didaktik-loop/GESAMT-PROMPT.md` | 9-Rollen-Pipeline, Schritte 1-9 | Neues Feld → Relevante Schritte updaten |
| 6 | `specs/MUSTER-LE-SPEC.md` | Muster-LE Vorlage für alle 55 LEs | Neues Feature → Dokumentieren |
| 7 | `memory/MEMORY.md` | Projekt-Gedächtnis | Jede Änderung → Memory aktualisieren |

## Pflicht-Checkliste nach Pipeline-Änderung

```
- [ ] Regisseur: Sessionplan-Format aktualisiert?
- [ ] Generator: TypeScript-Regel + Template aktualisiert?
- [ ] Prüfer: Neues Kriterium + Tabelle + Kriterienzähler aktualisiert?
- [ ] Ralph: Rohmaterial-Format + TypeScript-Template + Checkliste aktualisiert?
- [ ] GESAMT-PROMPT: Relevante Schritte aktualisiert?
- [ ] MUSTER-LE-SPEC: Feature dokumentiert?
- [ ] Memory: Änderung eingetragen?
- [ ] _types.ts: Interface erweitert (wenn neues Feld)?
- [ ] Bestehender Content: Feld nachgetragen (z.B. per Script)?
```

## Beispiele

### Beispiel 1: Neues Pflichtfeld `lernziel` in ContentStep
1. `_types.ts` → `lernziel?: string` zum Interface
2. `didaktik-regisseur.md` → Spalte "Lernziel" in Tabelle + Metadaten + Checkliste
3. `content-generator.md` → Neue Regel "Lernziel-Feld (Pflicht)" + Template
4. `didaktik-pruefer.md` → Block H (H1-H3) + Tabelle + Zähler 25→28
5. `ralph/PROMPT.md` → Phase 4.5 Abschnitt G + Phase 7 Template + Checkliste
6. `GESAMT-PROMPT.md` → Schritt 3 (Regisseur) + Schritt 5 (Generator)
7. `MUSTER-LE-SPEC.md` → Neuer Abschnitt 11b
8. Bestehende Steps → Script zum Nachtragen

### Beispiel 2: Neuer Step-Typ `flashcard`
1. `_types.ts` → Neues Interface + stepType Union erweitern
2. `didaktik-regisseur.md` → Step-Typ in Liste aufnehmen
3. `content-generator.md` → Content-Qualität-Abschnitt für flashcard
4. `didaktik-pruefer.md` → Ggf. Modi-Vielfalt (A2) anpassen
5. `ralph/PROMPT.md` → Step-Typ in Phase 5 Liste
6. `MUSTER-LE-SPEC.md` → Step-Typ-Tabelle erweitern
7. `src/components/learn/` → Renderer-Komponente bauen

### Beispiel 3: Neue Qualitätsregel
1. `didaktik-pruefer.md` → Neues Kriterium + Zähler hochzählen
2. `didaktik-regisseur.md` → Neue Regel + Checkliste erweitern
3. `content-generator.md` → Ggf. entsprechende Feld-Regel
4. `GESAMT-PROMPT.md` → Prüfer-Schritt aktualisieren (Kriterienzahl)

## Prinzip

> Jede Pipeline-Änderung ist erst fertig wenn ALLE 7 Stellen geprüft und ggf. aktualisiert sind.
> Nie nur 1 Datei ändern und die anderen vergessen.
