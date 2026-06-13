# CE-04 Kommunikation — Lernergebnis-First Build-Plan

**Ziel:** CE-04 Kommunikations-Showcase (marktstrategischer USP: Zwei-Achsen, mehrsprachig, B1).
**Methode:** Lernergebnis-First — jeder Baustein deckt benannte Rahmenplan-Lernergebnisse. Coverage-Gate: `specs/ce-04/lernergebnis-coverage-scaffold.md`.
**Korpus:** `recherche/kommunikation-gesundheitswesen-volltext/` (15.573 Z., verbatim-belegbar) + I Care Pflege (Kommunikationskapitel).
**Scope dieser Welle:** LE1 (14 Lernergebnisse, Kommunikation/Beratung/Konflikt) + LE3 (8, kultursensibel). LE2 (Gesundheitsförderung) + LE4 (Onkologie — Katalog-Anomalie, gehört nicht hierher) NICHT in dieser Welle.

> **Status:** Nur Pläne (`bausteine-plan.md`) vorhanden — kein gebauter Content. Echter Neubau.
> Pflege-Stil wie CE-02: 3-Stufen-Bausteine (Denkfrage→Hinweis→Erklärung als ContentStep), C1+B1, Glossar DE/AR/TR, echte Umlaute, „du"-Anrede.

## Themen-Struktur (5 Themen → LE-Mapping)

| # | Thema | Deckt Lernergebnisse | Kern-Inhalte | Quelle |
|---|-------|----------------------|--------------|--------|
| 1 | `kommunikationsmodelle` | LE1-W1, W3, E2 | Sender-Empfänger; Watzlawick 5 Axiome; Schulz von Thun 4 Seiten/Ohren; verbale/nonverbale/paraverbale Kommunikation | kommunikation-volltext |
| 2 | `gespraechsfuehrung` | LE1-W2, K2, E1 | formale Aspekte/Gesprächsphasen; aktives Zuhören; Rogers (Empathie/Akzeptanz/Kongruenz); Frage-/Gesprächstechniken | kommunikation-volltext |
| 3 | `beratung` | LE1-W5, W6, K1, K5 | Beratung psychol./psychosoz./päd.; direktiv vs. non-direktiv; Pflegeberatung-Settings; kollegiale Beratung | kommunikation-volltext |
| 4 | `konflikt-deeskalation` | LE1-W4, K3, K4 | Konfliktgespräch-Regeln; Eskalationsstufen; Deeskalationsstrategien; asymmetrische Kommunikation (Macht/Hierarchie) | kommunikation-volltext |
| 5 | `kultursensible-kommunikation` | LE1-W7, LE3 (alle 8) | kulturelle Unterschiede im Kommunikationsverhalten; Tabuthemen; direkte/indirekte Kommunikation; muttersprachliche Beratung; Migration-Beratungsstellen; pflegende Angehörige (Migration/Demenz) | kommunikation-volltext, I Care |

## Reihenfolge & Gate

1. Bauen pro Thema: `bausteine.ts` + `glossar.ts` + `index.ts` (CE-02-Muster), je Baustein `quellen[]` verbatim-belegt.
2. Nach jedem Thema: `npx tsc --noEmit` + `npx vitest run`.
3. Nach allen 5 Themen: Coverage-Recheck (5-Agenten-Prompt aus dem Scaffold) → Ziel 0 FEHLT für LE1+LE3.
4. Dann Situationen (Anwendung) — separate Welle.

## Tracking

- [x] Thema 1 `kommunikationsmodelle` — 5 Bausteine, 14 Glossar (LE1-W1/W3/E2). tsc+Tests grün.
- [x] Thema 2 `gespraechsfuehrung` — 5 Bausteine, 14 Glossar (LE1-W2/K2/E1).
- [x] Thema 3 `beratung` — 4 Bausteine, 12 Glossar (LE1-W5/W6/K1/K5).
- [x] Thema 4 `konflikt-deeskalation` — 4 Bausteine, 9 Glossar (LE1-W4/K3/K4).
- [x] Thema 5 `kultursensible-kommunikation` — 6 Bausteine, 17 Glossar (LE1-W7 + LE3).
- [ ] Coverage-Recheck LE1+LE3 → 0 FEHLT
- [ ] Situationen (separate Welle)

## Offene Aufräum-Notiz
- CE-03 hat nur Kommunikations-**Pläne** (fehlplatziert per Rahmenplan: CE-03 = Reflexion/Ethik). Diese Pläne nach dem CE-04-Bau löschen oder als CE-04-Material verwerten — nicht doppelt führen.
- CE-04-Katalog-LE4 (Blut/Transfusion/Onkologie) ist eine Extraktions-Anomalie → bei der Coverage NICHT als CE-04 werten; gehört zu einem kurativen CE.
