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
| 3 | `.claude/agents/didaktik-pruefer.md` | Prüfkriterien, Blöcke A-H | Neue Regel → Neues Kriterium + Tabelle + Zähler |
| 4 | `didaktik-loop/GESAMT-PROMPT-v2.md` | 4-Schritte-Pipeline | Neues Feld → Relevante Schritte updaten |
| 5 | `specs/ADAPTIVER-THEMENBOGEN.md` | Phasen-Modell, Scaffolding, Spaced Repetition | Neue didaktische Regel → Spec updaten |
| 6 | `content/_types.ts` | CE-übergreifende TypeScript-Interfaces | Neues Feld → Interface erweitern |
| 7 | `memory/MEMORY.md` | Projekt-Gedächtnis | Jede Änderung → Memory aktualisieren |

## Pflicht-Checkliste nach Pipeline-Änderung

```
- [ ] Regisseur: Sessionplan-Format aktualisiert?
- [ ] Generator: TypeScript-Regel + Template aktualisiert?
- [ ] Prüfer: Neues Kriterium + Tabelle + Kriterienzähler aktualisiert?
- [ ] GESAMT-PROMPT-v2: Relevante Schritte aktualisiert?
- [ ] ADAPTIVER-THEMENBOGEN: Phasen-Modell konsistent?
- [ ] _types.ts: Interface erweitert (wenn neues Feld)?
- [ ] Memory: Änderung eingetragen?
- [ ] Bestehender Content: Feld nachgetragen (z.B. per Script)?
```

## Beispiele

### Beispiel 1: Neues Pflichtfeld in ContentStep
1. `content/_types.ts` → Feld zum Interface hinzufügen
2. `didaktik-regisseur.md` → Spalte in Sessionplan-Tabelle + Checkliste
3. `content-generator.md` → Neue Feld-Regel + Template updaten
4. `didaktik-pruefer.md` → Neues Prüfkriterium + Zähler
5. `GESAMT-PROMPT-v2.md` → Relevante Schritte updaten
6. Bestehende Steps → Script zum Nachtragen

### Beispiel 2: Neuer Step-Typ
1. `content/_types.ts` → Neues Interface + stepType Union erweitern
2. `didaktik-regisseur.md` → Step-Typ in Kategorie-Tabelle aufnehmen
3. `content-generator.md` → Content-Qualität-Abschnitt für neuen Typ
4. `didaktik-pruefer.md` → Ggf. Modi-Vielfalt anpassen
5. `src/components/learn/` → Renderer-Komponente bauen

### Beispiel 3: Neue Qualitätsregel
1. `didaktik-pruefer.md` → Neues Kriterium + Zähler hochzählen
2. `didaktik-regisseur.md` → Neue Regel + Checkliste erweitern
3. `content-generator.md` → Ggf. entsprechende Feld-Regel
4. `ADAPTIVER-THEMENBOGEN.md` → Falls didaktisch relevant, Phasen-Modell prüfen

## Prinzip

> Jede Pipeline-Änderung ist erst fertig wenn ALLE 7 Stellen geprüft und ggf. aktualisiert sind.
> Nie nur 1 Datei ändern und die anderen vergessen.
