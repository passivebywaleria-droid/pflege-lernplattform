# Phase 2 — Beobachten

**situationId:** ls-nguyen-stoma
**Phase:** beobachten (Phase 2 von 6)
**Zeit:** ~30–45 Min
**Bloom:** B3–B4
**Kern-Frage:** Was sehe ich? Was sagt mir der Körper — und was sagt mir Herr Nguyen nicht?
**Brilliant-Prinzip:** Step 2.1 ist Neugier-Frage VOR der Erklärung zur Stomafarbe.

---

## Kontext

Du betrittst Zimmer 6. Herr Nguyen liegt im Bett, das Kopfteil leicht erhöht. Er schaut zur Wand, als du hereinkommst. Tochter Linh sitzt auf dem Stuhl rechts, Handy in der Hand. Sie steht auf: _"Guten Morgen. Papa hat gut geschlafen."_

Ehefrau Mai sitzt am Fenster. Sie lächelt kurz, dann schaut sie auf ihre Hände.

Du begrüßt Herrn Nguyen auf Augenhöhe, erklärst auf Deutsch, was du gleich tun wirst — Linh übersetzt. Herr Nguyen nickt knapp. **Zitat Z2** erscheint als eingebettetes Zitat-Element: _(Linh, leise)_ _"Er sagt, es ist ihm peinlich. Er möchte nicht, dass jemand das sieht."_

Jetzt: Systemische Beobachtung, bevor der Beutel geöffnet wird.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 2.1 | `beob-01-stomafarbe-frage` | **hotspot** | B3 | **BRILLIANT-FRAGE.** Du siehst Herrn Nguyens Stoma zum ersten Mal (Beutel noch drauf, aber Sichtfenster zeigt Stomawand). Vor dir: ein Bild mit vier Stoma-Varianten (A: rosig-rot, B: blass-weißlich, C: dunkel-livide, D: gekränzt mit Hautrötung). _"Was davon wäre für dich ein Zeichen, dass alles in Ordnung ist — und was würde dich besorgen?"_ Klicke auf das Bild, das Normalzustand zeigt. Antwort: A (rosig-rot). Alle anderen führen zu Erklärung der Komplikation. **Trigger für Baustein `stuhlausscheidung-stoma-inspektion` bei B, C oder D.** | pflege |
| 2.2 | `beob-02-stoma-normal` | **text** (displayFormat: `checklist`) | B3 | Erklär-Step nach dem Hotspot: "Was ist ein gesundes Stoma?" Checkliste der Normalzeichen: ☑ Farbe rosig bis kräftig rot (durchblutetes Schleimhautgewebe), ☑ Schleimhaut feucht und leicht glänzend, ☑ Herausragen 1-2 cm über Hautniveau, ☑ Hautumgebung reizlos (keine Rötung, kein Ausschlag, keine Mazerierung), ☑ Stomaöffnung zentral. Alarmzeichen (kurz): blass = Durchblutungsstörung → sofort melden, livide-schwarz = Nekrose → Notfall. Quelle: _(FG SKM, Handlungsempfehlungen Stomapflege, 2023)_ | pflege |
| 2.3 | `beob-03-haut-assessment` | **highlight** | B4 | **BRILLIANT-PRINZIP II.** Du hast jetzt die Abdeckung vorsichtig gelüftet. Du siehst die Haut rund um das Stoma und die Bauchdecke. Vor dir ein Beschreibungstext mit 8 Beobachtungen (Fließtext). _"Markiere alles, was du sofort dokumentieren würdest."_ Zu markieren: "Hautumgebung leicht gerötet (2 cm Radius)", "Stoma kräftig rosa", "Wundnaht am unteren Rand Bauchdecke leicht gerötet mit seröser Absonderung", "Stoma-Beutel: braun-gelblicher, dünnflüssiger Inhalt". Nicht pflichtmäßig markiert: "Bett-Laken sauber", "Herr Nguyen atmet regelmäßig". **Trigger `haut-mazerierung` bei < 3 richtigen Markierungen.** | pflege |
| 2.4 | `beob-04-ernaehrung-sehen` | **dialog** (3 Phasen) | B3 | Dialog-Step: Du schaust auf das Tablett vom Frühstück. Fast unberührt. Du fragst Linh: _"Hat Ihr Vater heute Morgen etwas gegessen oder getrunken?"_ **Zitat Z5:** _(Linh)_ _"Papa hat früher für 60 Gäste gekocht. Jetzt isst er drei Löffel und schiebt den Teller weg."_ Drei Reaktionsmöglichkeiten für dich: A) "Das ist nach einer OP normal, das kommt wieder." (zu verharmlosend bei Albumin 28) B) "Ich werde das dokumentieren und die Ernährungsberaterin hinzuziehen." (richtig) C) "Herr Nguyen, sie müssen mehr essen." (zu direktiv, ohne Ursachenklärung). Richtig: B, mit Erklärung warum post-OP-Mangelernährung aktiv gemanagt werden muss. **Trigger `ernaehrungsassessment-nrs2002` bei Wahl A.** | pflege |
| 2.5 | `beob-05-dekubitus-risiko` | **matrix** (2×3) | B4 | Matrix: Braden-Subskalen einordnen für Herrn Nguyen. Zeilen: Sensorisches Empfinden / Feuchtigkeit / Aktivität. Spalten: normal / leicht eingeschränkt / stark eingeschränkt. Herr Nguyen: Sensorisches Empfinden = leicht eingeschränkt (Schmerz reduziert Lagekorrekturen). Feuchtigkeit = normal (kein Inkontinenz-Risiko — aber Stomainhalt auf Haut = Komplikations-Faktor). Aktivität = stark eingeschränkt (4. Tag post-OP, Bettruhe mit Auflockerung). Gesamtpunktzahl einschätzen: 14 richtig? Bloom 4 — Analysieren. **Trigger `dekubitus-prophylaxe-braden-skala` bei > 2 falschen Einordnungen.** | pflege |
| 2.6 | `beob-06-thrombose-zeichen` | **truefalse** (Mehrfach) | B3 | Thrombose-Assessment: Du schaust kurz auf beide Beine. 4 Aussagen prüfen (wahr/falsch): 1) "Warme, geschwollene Wade = Alarmzeichen → Arzt informieren." (wahr — Homans-Zeichen, aber kein Pressen!) 2) "Heparin s.c. läuft → Thrombose-Risiko ist damit vollständig ausgeschaltet." (falsch — reduziert Risiko, kein 100%-Schutz. Mobilisation bleibt wichtig) 3) "Bei Stoma-Patienten ist Thrombose-Risiko erhöht, weil der Krebserkrankung." (wahr — Tumorerkrankung ist eigenständiger Risikofaktor) 4) "Thrombose-Prophylaxe durch Pflege = nur Heparin geben." (falsch — Mobilisation, Beinübungen, Kompression gleichwertig). **Trigger `thrombose-prophylaxe-massnahmen` bei ≥ 2 Fehlern.** | krankheitslehre |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 2.opt-1 | `beob-opt-stoma-output-bristol` | **comparison** | B2 | B1-Schüler/innen | Stoma-Output beschreiben: Bristol Stool Scale angepasst für Kolostoma. Was ist in den ersten Tagen post-OP normal? Dünnflüssig-gelblich = normaler Transit-Beginn. Wann wird es fester? Erst wenn reguläre Kost aufgebaut wird. Vergleichstabelle: Tag 1-3 / Tag 4-7 / ab Woche 2. |
| 2.opt-2 | `beob-opt-albumin-ernaehrung` | **flipcard** | B2 | Mittlere + B1 | Warum ist Albumin 28 g/l relevant? Vorderseite: "Albumin 28 g/l — Normwert?" Rückseite: "Normwert 35-52 g/l. 28 g/l = Hypoalbuminämie = klinisches Zeichen der Mangelernährung. Albumin ist ein Transporteiweiß — bei Mangel schlechte Wundheilung, Ödeme, Immunschwäche. Wundheilung post-OP besonders gefährdet." Quelle: _(DGEM 2020)_ |
| 2.opt-3 | `beob-opt-mazerierung-erklaeren` | **text** (displayFormat: `analogy`) | B2 | B1 | Was ist Mazerierung der Haut? Analogie: "Stell dir vor, du trägst stundenlang nasse Socken. Die Haut wird aufgeweicht, weißlich und verletzlich. Genauso passiert es, wenn Stomainhalt auf die Haut läuft — die Säure greift die Haut an." Warum das bei Stoma-Versorgung kritisch ist. |

---

## Phase-2-Abschluss

_Zwischenseite:_ "Du hast beobachtet: Das Stoma ist rosig — ein gutes Zeichen. Die Hautumgebung ist leicht gerötet. Die Bauchdeckenwunde hat eine kleine seröse Absonderung. Herr Nguyen isst kaum. Sein Dekubitusrisiko ist real, das Thrombose-Risiko auch. Fünf Probleme, alle gleichzeitig. Jetzt musst du planen — und priorisieren."

---

## Baustein-Trigger Phase 2

| Trigger | Step | Bedingung | Baustein-ID | Didaktischer Zweck |
|---------|------|-----------|-------------|-------------------|
| T-03 | 2.1 | Hotspot falsch geklickt (B, C oder D) | `stuhlausscheidung-stoma-inspektion` | Stomafarben und ihre Bedeutung verstehen |
| T-04 | 2.3 | < 3 richtige Markierungen | `haut-mazerierung` | Mazerierung als Stoma-Komplikation |
| T-05 | 2.4 | Antwort A gewählt (verharmlosend) | `ernaehrungsassessment-nrs2002` | NRS-2002-Screening: Wann ist Ernährungsberatung Pflicht? |
| T-06 | 2.5 | > 2 Braden-Subskalen falsch eingeordnet | `dekubitus-prophylaxe-braden-skala` | Braden-Skala korrekt anwenden |
| T-07 | 2.6 | ≥ 2 Thrombose-Aussagen falsch | `thrombose-prophylaxe-massnahmen` | Thromboseprophylaxe: alle drei Säulen verstehen |

---

## Diversity-Check Phase 2

- Step-Typen: hotspot, text (checklist), highlight, dialog, matrix, truefalse → 6 verschiedene ✓
- Keine 2× dasselbe hintereinander ✓
- Min 1 interaktiv (hotspot, highlight, dialog) ✓
- Min 1 visuell (hotspot, matrix) ✓
- Tags: 4× pflege, 1× krankheitslehre, 1× anatomie (matrix Braden) → alle 3 vertreten ✓
