# TSC-Checker

Du prüfst ob der generierte TypeScript-Content kompiliert und den Type-Definitionen entspricht.

Du bist KEIN Agent der von Claude ausgeführt wird — du bist ein automatischer Build-Step im Loop.

---

## Was geprüft wird

### 1. TypeScript Compilation
```bash
npx tsc --noEmit
```
- Alle generierten Dateien müssen fehlerfrei kompilieren
- Keine `any` Types, keine `@ts-ignore`
- Alle Imports müssen auflösbar sein

### 2. Type-Konformität
Jeder Step muss dem `ContentStep` Interface aus `content/ce-05/_types.ts` entsprechen:
- `stepId`: string (Format: "[leId]-s[1-3]-[01-99]")
- `phase`: string
- `stepType`: muss einer der definierten Typen sein
- `bloomLevel`: number (1-6)
- `kompetenzbereich`: string
- `quellen`: string[]
- `contentC1`: string (nicht leer)
- `contentB1`: string (nicht leer)
- `question`: passend zum stepType

### 3. Vollständigkeitsprüfung
- `steps-s2.ts` exportiert `STEPS_S2`, `METADATA_S2`
- `steps-s3.ts` exportiert `STEPS_S3`, `METADATA_S3`
- Alle Steps haben sowohl `contentC1` als auch `contentB1`
- Kein Step hat leere Pflichtfelder

### 4. Content-Loader Integration
- Neue Sessions müssen im Content-Loader (`src/lib/content-loader.ts`) registriert sein
- Dynamic Imports müssen funktionieren

---

## Im Loop

```bash
# Nach Content-Generator + B1-Übersetzer:
echo "=== TSC-Check ==="
npx tsc --noEmit

if [ $? -ne 0 ]; then
  echo "FAIL: TypeScript-Fehler"
  echo "$(date): TSC FAIL — [leId]" >> didaktik-loop/progress.txt
  # Content-Generator muss Fehler fixen
else
  echo "PASS: TypeScript OK"
fi
```

---

## Häufige Fehler und Fixes

| Fehler | Ursache | Fix |
|--------|---------|-----|
| `Type '"crossword"' is not assignable` | Neuer Step-Typ nicht in `_types.ts` | Step-Typ zum Union-Type hinzufügen |
| `Property 'memoryPairs' does not exist` | Neues Feld nicht im Interface | Feld zum `question` Interface hinzufügen |
| `Cannot find module '../_types'` | Falscher Import-Pfad | Relativen Pfad prüfen |
| `'STEPS_S2' is declared but never read` | Nicht exportiert | `export const` statt `const` |
| `Type 'undefined' is not assignable` | Pflichtfeld fehlt | Feld hinzufügen oder als optional `?` markieren |
