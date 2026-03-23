# Dokumentations-Disziplin

## Pflicht nach JEDEM abgeschlossenen Schritt

1. **Memory aktualisieren**
   - Was wurde gebaut? Was wurde entschieden?
   - Nur stabile Erkenntnisse — keine Vermutungen
   - In `memory/MEMORY.md` oder passende Topic-Datei

2. **Veraltetes loeschen**
   - Memory-Eintraege die nicht mehr stimmen → loeschen oder korrigieren
   - Spec-Dateien die ueberholt sind → markieren oder loeschen
   - Leere Ordner → loeschen

3. **Sprint-Plan aktualisieren**
   - `specs/SPRINT_PLAN.md`: Task abhaken
   - Neue Erkenntnisse/Blocker notieren
   - Geschaetzte Aufwaende korrigieren wenn noetig

4. **Learnings dokumentieren**
   - Neues Pattern entdeckt? → in AGENTS.md unter "Learnings" ergaenzen
   - Bug gefunden und geloest? → Pattern dokumentieren
   - Workaround noetig? → dokumentieren WARUM

## Pflicht bei jedem Session-Start

1. Memory lesen
2. Pruefen: Gibt es veraltete Dateien?
3. Pruefen: Gibt es leere Ordner oder Duplikate?
4. Kurzer Status: Wo stehen wir?

## Ordnerstruktur sauber halten

```
Erlaubt:
  specs/         → Aktive Spezifikationen
  recherche/     → Recherche-Archiv (nur lesen, nicht aendern)
  memory/        → Projektgedaechtnis
  src/           → Code

Nicht erlaubt:
  Leere Ordner
  Dateien ohne Zweck
  Duplikate
  Veraltete TODO-Listen die niemand pflegt
```

## Prinzip

> Jede Datei die existiert muss einen Grund haben.
> Jede Datei die keinen Grund mehr hat wird geloescht.
