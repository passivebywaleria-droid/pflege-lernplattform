---
name: Deep-Validator U-01/B-01-Pattern (Welle 2 ls-yilmaz-spirale2)
description: Wie der Deep-Validator U-01 (Begriff vor Verwendung definieren) und B-01 (Begriff in body + glossarBegriffe) tatsächlich erkennt — Schlüssel-Erkenntnis für inlineWissen-Steps.
type: feedback
---

Beim Deep-Validator-Fix-Sweep für `ls-yilmaz-spirale2` (79 Findings → 0/0/0) gelernt:

## Schlüsselerkenntnis — der Validator schaut NICHT in `inlineWissen.kerntext`

`scripts/content-deep-validator.ts` extrahiert nur diese Felder als "bodies":
- `body`, `context`, `transition`, `musterantwort`, `aufgabentext`, `kontext`, `fallbezug`

NICHT extrahiert: `kerntext`, `kerntextB1`, `storyAufhaenger`, `faustregel`, `karteikarte.*`, `spektrum[].*`, `sonstBox`.

**Konsequenz:** InlineWissen-Steps mit `body: ""` (echter Inhalt im `kerntext`) gelten für den Validator als leer. Der Begriff wird im glossarBegriffe-Feld zwar deklariert, aber `isBegriffDefinedIn()` verlangt zusätzlich einen Definitions-Marker im `body`-Text:
- `${begriff} =`, `${begriff} ist`, `${begriff} bedeutet`, `${begriff} —`, `${begriff} – `, `${begriff}: `, `**${begriff}** =`, `**${begriff}**:`

**Why:** Der Validator soll sicherstellen, dass die Definition in dem Text steht, den der Schueler tatsächlich liest. `kerntext` ist UI-spezifisch und konnte historisch vom Renderer ignoriert werden — der Body ist der harte Kontrakt.

**How to apply:** Beim Fix von U-01 in einer Situation:
1. Identifiziere alle U-01-Begriffe und ihre Erst-Anwendung-Steps.
2. Wähle den ersten Inline-Wissen-Step (oder `text`-Step) VOR der Erst-Anwendung.
3. Erweitere DESSEN `body`-Feld um kompakte Definitionen mit Markern: `**Begriff** = kurze Erklärung.`
4. Ergänze `glossarBegriffe`-Liste um die definierten Begriffe.
5. Das deckt U-01 (Vor-Definition) UND B-01 (Body↔Glossar) gleichzeitig ab.

## B-01 ist Glossar-Pflicht für Explainer-Begriffe im Body

`checkBodyVsGlossar` listet jeden Term aus der CE-Term-Liste, der im Explainer-Body vorkommt aber nicht in glossarBegriffe deklariert ist. Auch banale Begriffe wie "Patient", "Haut", "Bewegung" können auftauchen — die ALLTAGS_WHITELIST gilt nur für U-01, nicht für B-01.

**How to apply:** Beim B-01-Fix einfach `glossarBegriffe`-Array erweitern. Python-Script-Pattern: balanced-brace-Block-Parser ueber Step-ID, dann `glossarBegriffe: [...]` per Regex erweitern.

## S-01/S-04 — Sandwich + "weil"-Erklärung Pflicht

- **S-01:** Feedback enthält Negativ-Marker (`falsch`, `leider`) ohne Anerkennungs-Marker in den ersten 140 Zeichen.
- **S-04:** Feedback länger als 60 Zeichen, enthält Negativ-Marker, aber kein `weil/deshalb/denn/stattdessen/tatsächlich/eigentlich/der grund/begründung/richtig ist/korrekt ist`.

**Pattern für Fix:** Anerkennungs-Marker in Position 1 (`Du bist auf dem richtigen Weg`, `Du hast erkannt`, `Guter Ansatz`, `Nah dran`, `Fast richtig`) + dann "stattdessen" / "weil" + konkrete Erklärung + "Beim nächsten Mal".

## Welle-2-Bilanz ls-yilmaz-spirale2 (2026-05-01)
- 79 Findings (39 HOCH, 4 MITTEL, 36 NIEDRIG) → 0/0/0
- 6 Phase-Files editiert: phase-{informieren, beobachten, planen, durchfuehren, evaluieren, dokumentieren}.ts
- Walkthrough-Validator + Deep-Validator + TypeScript clean
- Strategie: Definitions-Block im `body` des ersten Inline-Wissen-Steps jeder Phase + Erweitern der glossarBegriffe-Listen
