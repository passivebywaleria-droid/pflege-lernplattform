# Plan — CE-02 Deep-Validator Fix-Sweep
**Stand:** 2026-05-01
**Ausgangslage:** 887 Findings (390 HOCH, 71 MITTEL, 426 NIEDRIG) in `content/ce-02/deep-validator-2026-05-01.json`
**Ziel:** Alle 10 Situationen auf 0 Findings, alle Severities

## Findings-Verteilung

| Situation | Total | HOCH | MITTEL | NIEDRIG |
|-----------|------:|-----:|-------:|--------:|
| ls-yilmaz-hueft-tep | 125 | 94 | 2 | 29 |
| ls-kovac-ambulant | 123 | 35 | 7 | 81 |
| ls-nguyen-stoma | 121 | 58 | 15 | 48 |
| ls-petrov-schlaganfall | 87 | 40 | 9 | 38 |
| ls-schmidt-adipositas | 81 | 27 | 1 | 53 |
| ls-bauer-demenz-sturz | 80 | 30 | 11 | 39 |
| ls-yilmaz-spirale2 | 78 | 39 | 4 | 35 |
| ls-lukas-verbruehung | 77 | 30 | 9 | 38 |
| frau-m-nacht-sturz | 61 | 20 | 6 | 35 |
| ls-emilia-saeugling | 54 | 17 | 7 | 30 |

## Strategie — autonom, in 3 Wellen, parallel

### Welle 1 (3 parallel — größte Situationen)
- ls-yilmaz-hueft-tep
- ls-kovac-ambulant
- ls-nguyen-stoma

### Welle 2 (4 parallel — mittlere)
- ls-petrov-schlaganfall
- ls-schmidt-adipositas
- ls-bauer-demenz-sturz
- ls-yilmaz-spirale2

### Welle 3 (3 parallel — kleinere)
- ls-lukas-verbruehung
- frau-m-nacht-sturz
- ls-emilia-saeugling

## Agent-Auftrag (pro Situation, identisch)

Jeder Builder-Agent bekommt den gleichen Auftrag, parametrisiert mit der Situations-ID:

1. **Lese** `content/ce-02/deep-validator-2026-05-01.json`, filtere nach eigener `situationId`.
2. **Lese** alle 6 Phase-Files in `content/ce-02/situationen/<situationId>/phase-*.ts`.
3. **Fixe systematisch alle Findings**:

### F-01 (HOCH) — Sortier-Frage verrät Lösung
- Sequenzwörter (`erst`, `zuerst`, `dann`, `danach`, `zuletzt`, `am Ende`) aus `fragetext` und `body` raus
- Frage neu formulieren als offene Aufgabe: "Bringe diese Schritte in eine pflegerisch sinnvolle Reihenfolge"
- Falls Items Klammer-Annotationen mit Pflege-Logik enthalten → Annotation in das Feedback verschieben

### S-01 (HOCH) — Negativ ohne Anerkennung
- Feedback-Anfang umschreiben mit Anerkennung-Marker:
  - **Vorher:** "Falsch. Die richtige Antwort..."
  - **Nachher:** "Du hast erkannt, dass [X richtig ist]. Hier geht es aber um [Y]..."
- Wenn nichts richtig war: "Nah dran" / "Du bist auf dem richtigen Weg" / "Guter Ansatz" + dann Erklärung
- Negativ-Worte ("Falsch", "Leider", "Suggestive", "Gefährlich") raus aus Position 1

### S-04 (MITTEL) — Feedback erklärt nicht das Richtige
- Begründung ergänzen: warum ist die richtige Antwort richtig, warum die falsche falsch?
- Pflicht-Wörter: "weil", "deshalb", "denn", "stattdessen", "tatsächlich", "der Grund ist"
- Standard-Bezug nennen (DNQP, ABCDE, SBAR, RKI, § BGB)

### U-01 (HOCH) — Unerklärter Fachbegriff
- Pro Begriff prüfen: WO im Phase-Flow taucht er zum ersten Mal auf?
- **Option A** (bevorzugt): bestehenden Step davor um Definition erweitern (Pattern: `**Begriff** = …` oder `Begriff bedeutet …`)
- **Option B**: neuen `inlineWissen`-Step VOR Erstverwendung einfügen — mit `bausteinRef`, `storyAufhaenger`, `kerntext`, `kerntextB1`, B1-Variante, `glossarBegriffe`, `quellen`
- Vorlage siehe `content/ce-02/situationen/frau-m-nacht-sturz/phase-informieren.ts` Step 1 (Sturz-Definition)
- Bei Akronymen: Vollform + Kurzform definieren

### B-01 (NIEDRIG) — Begriff im Body, nicht in glossarBegriffe
- `glossarBegriffe`-Array um fehlende Begriffe ergänzen (max die im Body wirklich definiert werden)
- Nur im jeweiligen Step (kein Cross-Step)

4. **Validator laufen lassen**: `npx tsx scripts/content-deep-validator.ts ce-02 <situationId>`
5. **Iterate** bis 0 HOCH, 0 MITTEL, 0 NIEDRIG (oder begründet auf NIEDRIG-Reste reduzieren wenn Inhalt sonst leiden würde)
6. **TypeScript-Check**: `npx tsc --noEmit` (eigene Files)
7. **Walkthrough-Validator** clean halten: `npx tsx scripts/content-walkthrough-validator.ts ce-02 <situationId>` muss 0 HOCH/MITTEL/NIEDRIG haben

## Acceptance pro Situation
- Deep-Validator: 0 HOCH, 0 MITTEL — NIEDRIG idealerweise auch 0
- Walkthrough-Validator: 0 HOCH, 0 MITTEL, 0 NIEDRIG
- TypeScript: clean
- Keine erfundenen Pflege-Inhalte (User-Regel `feedback_kein_erfundener_content.md`)
- Echte Umlaute (User-Regel)

## Acceptance final (nach Welle 3)
- `npx tsx scripts/content-deep-validator.ts ce-02 --all` → 0 HOCH, 0 MITTEL über alle Situationen
- `npx tsx scripts/content-walkthrough-validator.ts ce-02 --all` → 0/0/0
- `npx tsc --noEmit` clean
- `npm run build` clean
- Commit mit prägnanter Message

## Autopilot
User hat ausdrücklich Genehmigung erteilt: parallele Agenten + autonomes Abarbeiten ohne Zwischenfreigabe. Bei kritischen Hindernissen (Schemaänderung, Pflege-fachliche Unsicherheit, Build-Bruch) — pausieren + Bericht.
