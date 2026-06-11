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

---

## RE-AUDIT nach Fixes + Quellen (2026-06-10, Zyklus 1)

Voll-Re-Audit über alle 353 Fakten (5 adversariale Prüfer), strenger/vollständiger als der Erst-Audit:

| Verdikt | Erst-Audit | **Re-Audit** |
|---------|-----------:|-------------:|
| STÜTZT | ~51 % | **44 % (156)** |
| TEILWEISE | ~41 % | **49 % (172)** |
| STÜTZT-NICHT | ~9 % (~30) | **0,6 % → 0** (2 gefixt) |
| ⚠️ ehrlich markiert | — | 24 |

**Befund:** STÜTZT-NICHT (echte Defekte/dekorative Zitate) von ~30 auf **0** — Halluzinations-Risiko nahezu eliminiert. ABER nur 44 % voll belegt; 49 % „Kern belegt, Detail-Zahl/Skala nicht im Zitat". Der scheinbare STÜTZT-Rückgang ggü. Erst-Audit = strengere/vollständigere Bewertung diesmal.

**Hebel zu ≥90 %:** Die 172 TEILWEISE auflösen — pro Detail-Aussage ein Zweitzitat (R2) oder ehrlich ⚠️. Das ist überwiegend Beleg-ABDECKUNG, kein Faktenfehler.

---

## FINAL-AUDIT nach kompletter TEILWEISE-Auflösung (2026-06-11, Zyklus 6 Ende)

| Verdikt | Erst-Audit | Re-Audit (Z1) | **Final** |
|---------|-----------:|--------------:|----------:|
| STÜTZT | ~51 % | 44 % | **91 % (322)** |
| TEILWEISE | ~41 % | 49 % | **8,5 % (30)** |
| STÜTZT-NICHT | ~9 % | 0,6 % | **0,3 % (1)** |

**91 % STÜTZT — Ziel ≥90 % erreicht.** Die 30 Rest-TEILWEISE sind fast ausschließlich **unmarkierte Aufzählungs-Bestandteile** (Listen, bei denen der Kern belegt ist, einzelne Listenpunkte aber weder zitiert noch ⚠️) + wenige Zahlen. Das 1 STÜTZT-NICHT = pflegedoku F-08 ISBAR (Beleg vollständig ⚠️ „Quelle beschaffen" — Zähl-Grenzfall, faktisch ehrlich markiert).

**Restarbeit (klein, definiert):** Cleanup-Pass über die 30 Listen-TEILWEISE — je unmarkierten Listenpunkt ein Zweitzitat ODER ⚠️. Danach Decke erreicht (Lizenz-Quellen + Dozentin).

---

## CLEANUP-PASS Listen-TEILWEISE (2026-06-11, Zyklus 7)

Die 30 unmarkierten Listen-TEILWEISE über 11 Themen abgearbeitet (7 Sub-Agenten, je Datei). Pro ungedeckter Teilaussage GENAU EIN Weg: Zweitzitat aus Korpus (R3a) ODER ehrliches ⚠️ mit zu beschaffender Primärquelle (R3b). Kein Zitat erfunden, kein themenverwandtes Zitat als Beleg stehengelassen.

**+~60 verbatim Zweitzitate** ergänzt. Voll aufgelöst → **STÜTZT**:
- blasenkatheter F-05/06/07 (alle Material-/Durchführungs-Listen, 19 Zitate aus Pflege heute)
- pflegeprozess F-08, pflegedoku F-02/05/13, schlaf F-09/11, stuhlausscheidung F-01
- dekubitus F-05/07/12/14 (EPUAP + Pflege heute), essen-anreichen 10 Teilaussagen

**Rest jetzt ehrlich ⚠️ markiert** (nicht mehr „unmarkiert" — Korpus reicht nicht, Quelle benannt):
- essen-anreichen: Charta Würde, neurogene-Dysphagie-Ursachen (Demenz/Beatmung), Kinder-Verhalten, Demenz-Speisen-Detail, GUSS-Stimmqualität (Trapl 2007)
- pflegedoku F-01 (§ 630f BGB Gesetzestext, Praxis-Merksatz), F-03 (Haut/Abweichungen/Unfälle), F-08 ISBAR (WHO High-5s) — unverändert ⚠️
- schlaf F-10 (Alkohol-Schlussfolgerung), F-12 (Vorrang-Superlativ → DGSM S3-Insomnie)
- dekubitus F-06 (Säugling-Hinterkopf/Nasenscheidewand → Hoehl/Kullick)
- sturz F-05 (rutschfest/freie Wege sturzspezifisch), F-06 (psychotrope Untergruppen + Diuretika namentlich, 20–40 %-Quote → PRISCUS/FORTA)
- stuhlausscheidung F-03 (geruchlos → Hoehl/Kullick)
- mobilisation F-05 (Stoppfunktion mit Fuß, Schulterblatt-Griff → Hatch/Maietta/BGW)
- ernaehrungsgrundlagen F-01 (Makro-/Mikronährstoff-Terminologie, „versteckter Hunger" → DGE), ernaehrungsassessment F-04 (MNA-Short-Score-Details → Guigoz/Vellas)

**Sachkorrektur nebenbei:** dekubitus F-06 „Sitzen das Steißbein" → **Sitzbeinhöcker** (Quelle Pflege heute sagt Sitzbeinhöcker).

**Stand nach Zyklus 7: 0 unmarkierte TEILWEISE.** Jeder Fakt ist entweder voll STÜTZT-belegt ODER trägt ein ehrliches ⚠️ mit konkret benannter, zu beschaffender Primärquelle. **Damit ist die autonom erreichbare Decke erreicht** — der Rest hängt an (a) lizenzpflichtigen Quellen (Hoehl/Kullick, PRISCUS/FORTA, DGSM, Guigoz/Vellas, BGB-Gesetzestext, Charta) und (b) Dozentin-Review (R6). Beides ist Mensch/Geld — siehe Eskalationen.
