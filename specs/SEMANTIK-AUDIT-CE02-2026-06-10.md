# Semantik-Audit CE-02 Kernfakten — Belege vs. Claims

**Datum:** 2026-06-10
**Methode:** 5 adversariale KI-Fachprüfer (je 5 Themen), streng: „Stützt das *verifizierte* Zitat den *konkreten* Claim — oder nur das Thema?"
**Anlass:** Der Zitat-Verifizierer prüft nur Zitat-*Existenz*, nicht semantische *Deckung*. Dieses Audit misst die Deckung.

---

## Gesamt-Ergebnis (≈343 bewertete Fakten)

| Verdikt | Anzahl | Anteil | Bedeutung |
|---------|-------:|-------:|-----------|
| **STÜTZT** | ~175 | **~51 %** | Zitat belegt die Kernaussage direkt |
| **TEILWEISE** | ~140 | **~41 %** | Zitat stützt den Kern, NICHT die spezifische Teilaussage (Zahl, Skala-Name, Liste, Rechtsnorm) |
| **STÜTZT-NICHT** | ~30 | **~9 %** | Zitat nur themenverwandt / belegt einen Nebenaspekt statt der Kernbehauptung |
| ⚠️ Quelle beschaffen | 8 | — | ehrlich unbelegt |

Pro Audit-Block (N / STÜTZT / TEILWEISE / STÜTZT-NICHT / ⚠️):
- Themen 1–5: 67 / 43 / 17 / 6 / 1
- Themen 6–10: 71 / 31 / 33 / 7 / 0
- Themen 11–15: 68 / 27 / 33 / 4 / 4
- Themen 16–20: 64 / 44 / 24 / 6 / 0
- Themen 21–25: 73 / 30 / 33 / 7 / 3

---

## Interpretation (ehrlich)

**Das mechanische „353/353 verifiziert" hat die Grounding-Qualität überzeichnet.** Verbatim-Existenz ist notwendig, aber nicht hinreichend.

- **~51 %** der Fakten sind voll quellengedeckt.
- **~41 %** sind im *Kern* gedeckt, aber die mitbehaupteten konkreten **Zahlen / Prozente / Schwellenwerte / benannten Skalen / Listen / Rechtsnormen / Jahres-Zuschreibungen** stehen NICHT im zitierten Satz. Ein einzelnes kurzes Zitat deckt zuverlässig das Thema + die Definition, aber nicht die Detail-Last des Fakts.
- **~9 %** haben ein praktisch dekoratives Zitat (themenverwandt, belegt aber den Claim nicht) — das sind die kritischen Fälle.

**Wichtig:** Das ist überwiegend ein **Beleg-Abdeckungs-Problem, kein Faktenfehler-Problem.** Die Claims wirken pflegefachlich plausibel und standardkonform (sie stammen aus den bausteine-plans mit eigenen Primärquellen). Aber die *maschinell prüfbare Bindung* an die Quelle ist bei ~50 % unvollständig.

---

## Priorität 1: STÜTZT-NICHT-Fälle (Zitat trägt den Claim nicht)

Diese brauchen ein besseres Zitat ODER eine Claim-Anpassung:

- **sturz** F-04 (Kraft/Balance „am besten belegt" + Frequenz/Dauer), F-07 (Hüftprotektoren — Zitat erwähnt sie gar nicht)
- **dekubitus** F-04 (3-Kategorien-Struktur), F-08 (Braden häufigstes + 6 Bereiche), F-13 (3-System-Hilfsmittel)
- **pneumonie** F-10 (Dysphagie-Management/GUSS), F-12 (Zahl 75.000–112.000 — Zitat bricht vor der Zahl ab)
- **ernaehrungsgrundlagen** F-05 (Atwater-Tabelle), F-08 (Vitamin-D-Synthese), F-13 (religiöse Kostregeln), F-15 (7 Kostformen)
- **pflegeplanung** F-07 (med. vs. Pflegediagnose), **pflegedokumentation** F-04 (Pflegebericht-Regeln)
- **assessments-expertenstandards** F-03 (12 Standards), F-09 (TUG-Schwellen), F-11 (NANDA/NIC/NOC), F-12 (6 Standardkriterien)
- **ganzkörperpflege** F-17 (Teilkörperwäsche)
- **mundpflege** F-02 (5 Mundfunktionen), F-05 (Prothesenreinigung)
- **positionierung** F-01 (Definition/Ziele)
- **saeuglingspflege** F-01 (Hautdaten), F-06 (Wickeln — Zitat ist Nabel-Kontext)

## Priorität 2: TEILWEISE (~140) — meist fehlt ein ZWEITES Zitat für die Detail-Teilaussage (Zahl/Skala/Liste).

---

## Konsequenz für die Pipeline

1. **Semantik-Check als drittes Grounding-Gate** etablieren (dieses Audit reproduzierbar machen) — nicht nur „Zitat existiert", sondern „Zitat stützt Claim".
2. **STÜTZT-NICHT zuerst fixen** (~30 Fakten): besseres Zitat oder Claim entschärfen.
3. **TEILWEISE:** Zweitzitat für die Teilaussage ODER Detail-Zahlen aus dem Fakt in eine klar als „Primärquelle-Tag" markierte Nebenrolle.
4. Das beantwortet „sind wir pflegefachlich top?": **Noch nicht** — wir sind zu ~51 % voll quellengedeckt, der Rest ist teil- oder schwach gedeckt. Plus weiterhin: kein Mensch hat es geprüft (Dozentin-Review fehlt).
