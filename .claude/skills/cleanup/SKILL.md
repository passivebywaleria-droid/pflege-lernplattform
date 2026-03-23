---
name: cleanup
description: Raeumt Projekt auf. Loescht veraltete Dateien, aktualisiert Memory, prueft Ordnerstruktur.
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, Bash
---

# /cleanup — Projekt aufraeumen

## Ablauf

### Schritt 1: Datei-Inventur
Durchsuche das gesamte Projekt:
- Welche Dateien existieren in `specs/`?
- Welche Memory-Dateien existieren?
- Gibt es leere Ordner?
- Gibt es Duplikate oder veraltete Dateien?

### Schritt 2: Relevanz-Pruefung
Fuer jede Datei ausserhalb von `src/` und `node_modules/`:
- Wird sie noch referenziert?
- Ist der Inhalt noch aktuell?
- Widerspricht sie VISION.md?
- Hat sie einen klaren Zweck?

### Schritt 3: Vorschlag erstellen
Liste alle Dateien die:
- **Geloescht** werden sollten (veraltet, leer, duplikat)
- **Aktualisiert** werden sollten (teilweise veraltet)
- **Behalten** werden (noch relevant)

### Schritt 4: Bestaetigung einholen
Zeige die Liste und frage: "Soll ich das aufraeumen?"
NIEMALS Dateien loeschen ohne explizite Bestaetigung.

### Schritt 5: Ausfuehren
Nach Bestaetigung:
- Dateien loeschen
- Memory aktualisieren
- Leere Ordner entfernen
- git status zeigen

## Spezielle Pruefungen
- `recherche/` — Archiv, nur loeschen wenn explizit gewuenscht
- `specs/` — Sind alle Specs noch Vision-konform?
- `memory/` — Sind alle Eintraege noch aktuell?
- `.claude/` — Sind Agents/Skills/Rules konsistent?

## Regeln
- NIE ohne Bestaetigung loeschen
- NIE `src/` Dateien loeschen (das ist Code, kein Aufraeum-Ziel)
- NIE `VISION.md` aendern (Wahrheitsquelle)
