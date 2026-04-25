# Baustein-Trigger: ls-emilia-saeugling

**situationId:** ls-emilia-saeugling
**ceId:** ce-02
**Gesamt-Trigger:** 14

---

## Tabelle aller Baustein-Trigger

| # | Trigger-Event | Bedingung | Baustein-ID | Thema | Stufe | Phase |
|---|---------------|-----------|-------------|-------|-------|-------|
| T1 | Step 1.3 (dialog) — Antwort A gewählt (entwertend gegenüber Mutter) | Falsche Pfad-Wahl | `pflegeprozess-informationssammlung` | pflegeprozess | Sequencer wählt | 1 |
| T2 | Step 1.4 (sorting) — Anamnesereihenfolge falsch (<70%) | Sortierung nicht korrekt | `pflegeprozess-informationssammlung` | pflegeprozess | Stufe 2 oder 3 | 1 |
| T3 | Step 1.5 — Stillfrage | Immer (informativer Trigger) | `ernaehrungsgrundlagen-saeugling-stillen` | ernaehrungsgrundlagen | Stufe 1–2 je nach Profil | 1 |
| T4 | Step 2.1 (hotspot) — Turgor nicht erkannt oder falsch interpretiert | Antwort ohne Exsikkose-Bezug | `haut-turgor-beurteilung` | haut | Sequencer wählt | 2 |
| T5 | Step 2.3 (categorize) — Windeln-Normwerte falsch (<60%) | Performance unter Schwelle | `stuhlausscheidung-saeuglingsnorm` | stuhlausscheidung | Stufe 2–3 | 2 |
| T6 | Step 2.6 (truefalse) — Atemfrequenz-Aussagen falsch beurteilt (≥2 falsch) | Mehrere Fehler | `saeuglingspflege-vitalzeichen-norm` | saeuglingspflege | Stufe 2–3 | 2 |
| T7 | Step 3.1 (freetext) — Pflegeziele nicht messbar formuliert | KI-Feedback: Ziel nicht SMART | `pflegeprozess-zielformulierung` | pflegeprozess | Stufe 2–3 | 3 |
| T8 | Step 3.4 (mc) — Seitenlage oder erhöhte Lage gewählt (Antwort A oder D) | Falsche Antwort | `saeuglingspflege-schlafposition-sids` | saeuglingspflege | Stufe 2–3 | 3 |
| T9 | Step 3.5 (sequencing) — Reihenfolge der Maßnahmen falsch | Reihenfolge-Fehler | `pflegeprozess-planung-prioritaeten` | pflegeprozess | Sequencer wählt | 3 |
| T10 | Step 4.1 (sorting) — Bad-Vorbereitung: Temperaturmessung vergessen oder falsch eingeordnet | Positionsfehler bei Wassertemperatur | `saeuglingspflege-badvorbereitung` | saeuglingspflege | Stufe 2–3 | 4 |
| T11 | Step 4.4 (sequencing) — Wickeln falsch: Hochheben an Knöcheln statt Becken | Spezifischer Positions-Fehler | `kinaesthetik-infant-handling` | kinaesthetik | Stufe 2–3 | 4 |
| T12 | Step 4.5 (branching) — Pfad B gewählt (Entwertung von Lauras Gefühlen) | Falsche Branching-Entscheidung | `kommunikation-aktive-zuhoerung` | (CE-03 cross-ref) | Stufe 2–3 | 4 |
| T13 | Step 5.3 (mc) — i.v.-Infusion als Maßnahme ausgewählt (voreilig) | Falsche Maßnahmen-Wahl | `saeuglingspflege-exsikkose-interventionen` | saeuglingspflege | Stufe 2–3 | 5 |
| T14 | Step 6.1 oder 6.2 (freetext) — Dokumentation unvollständig oder mit Werturteil | KI-Feedback: Kriterien nicht erfüllt | `pflegeprozess-dokumentation` | pflegeprozess | Stufe 2–3 | 6 |

---

## Sequencer-Logik

Der Sequencer entscheidet die Stufe nach folgendem Muster:

| Schüler-Profil | Standard-Stufe | Bei Trigger |
|----------------|----------------|-------------|
| C1 + Vorerfahrung | — (meist kein Trigger) | Stufe 1 (Denkfrage) |
| B2 + etwas Praxis | Stufe 2 | Stufe 2 (Hinweis) |
| B1 + Anfängerin | Stufe 3 | Stufe 3 (Erklärung + B1 + TTS + Glossar) |

---

## Themen-Übersicht: Verwebte Bausteine

| Thema | Bausteine die getriggert werden können | Phasen |
|-------|----------------------------------------|--------|
| `pflegeprozess` | informationssammlung, zielformulierung, planung-prioritaeten, evaluation, dokumentation | 1, 3, 5, 6 |
| `saeuglingspflege` | vitalzeichen-norm, schlafposition-sids, badvorbereitung, exsikkose-interventionen | 2, 3, 4, 5 |
| `haut` | turgor-beurteilung | 2 |
| `stuhlausscheidung` | saeuglingsnorm | 2 |
| `ernaehrungsgrundlagen` | saeugling-stillen | 1 |
| `kinaesthetik` | infant-handling | 4 |
| (CE-03 cross-ref) | kommunikation-aktive-zuhoerung | 4 |

---

## Adaptivitäts-Profil Gesamtsituation

| | C1 + Vorerfahrung | B2 + etwas Praxis | B1 + Anfängerin |
|---|---|---|---|
| **Gesamt-Dauer** | ~2 UE (~90 Min) | ~3 UE (~135 Min) | ~4 UE (~180 Min) |
| **Kern-Steps gesehen** | Alle (30) | Alle (30) | Alle (30) |
| **Ø Bausteine ausgelöst** | 1-2 | 4-5 | 8-10 |
| **Optionale Steps** | 2-3 (Vertiefung) | 4-6 (Übung) | 8-10 (Grundlagen) |
| **Freitext-Hilfen** | Keine | Leitfragen | Formular + Beispiele |

---

## Step-Typen-Diversity-Check

| Step-Typ | Anzahl (über alle 6 Phasen) |
|----------|-----------------------------|
| text (scenario/quote/stepbystep/beforeafter/analogy/checklist) | 7 |
| mc (Single + Multiple) | 4 |
| dialog | 2 |
| sorting | 2 |
| sequencing | 2 |
| categorize | 2 |
| hotspot | 1 |
| truefalse | 1 |
| branching | 1 |
| matrix | 1 |
| freetext | 3 |
| reflection | 1 |
| flipcard | 3 (optional) |
| calculation | 1 (optional) |
| timeline | 1 (optional) |
| summary | 1 |
| **TOTAL Kern** | **30** |

**14 verschiedene Step-Typen** in Kern- + optionalen Steps. ✓ (Regel: ≥12)

---

## Bloom-Verteilung (gesamt)

| Phase | Bloom-Range | Steps |
|-------|-------------|-------|
| 1 Informieren | B2–B3 | 5 |
| 2 Beobachten | B3–B4 | 6 |
| 3 Planen | B3–B4 | 5 |
| 4 Durchführen | B4–B5 | 7 |
| 5 Evaluieren | B4–B5 | 4 |
| 6 Dokumentieren | B5–B6 | 3 |

Progression: ✓ (aufsteigend, Höhepunkt B6 in Dokumentation).

---

## 3-Säulen-Tag-Verteilung

| Tag | Anzahl (Schätzung Kern-Steps) | Prozent |
|-----|-------------------------------|---------|
| pflege | 20 | 67% |
| krankheitslehre | 5 | 17% |
| anatomie | 5 | 17% |

**Hinweis für Generator:** Pflege-Tag leicht über 60%. Bitte beim TS-Umsatz 2-3 Steps mit anatomie/krankheitslehre-Inhalten (beob-02 Turgor → anatomie, beob-06 Atemfrequenz → krankheitslehre) entsprechend taggen. Zielverteilung: pflege 60% / krankheitslehre 20% / anatomie 20%.

---

## K.O.-Checkliste (Phase 2 selbst)

- [x] situationsTyp `pflegeprozess` im Metadaten-Block angegeben
- [x] Alle 6 Phasen vorhanden und in korrekter Reihenfolge: informieren → beobachten → planen → durchfuehren → evaluieren → dokumentieren
- [x] Min 8 Kern-Steps über alle Phasen (30 Kern-Steps)
- [x] Min 4 Optionale Steps (10 optionale Steps vorhanden)
- [x] Min 3 Baustein-Trigger (14 Trigger vorhanden)
- [x] Min 2 Komplikationen mit Branching (K1 Mutter weint, K2 Emilia schreit)
- [x] Patient mit Bio, Diagnosen, Persönlichkeit, Zitaten (Z1-Z6 über 6 Phasen verteilt)
- [x] Letzte Phase mit Dokumentationsaufgabe (Freitext Phase 6.1 + 6.2)
- [x] Nie 2× dasselbe Gefühl hintereinander (Diversity-Check: ✓)
- [x] Min 12 verschiedene Step-Typen (14 ✓)
- [x] 25-30% offene Formate: ~30% mit semi-offenen Steps ✓
- [x] Bloom-Progression: Phase 1-2 niedrig → Phase 5-6 hoch ✓
- [x] Alle 3 Tags vertreten: pflege/krankheitslehre/anatomie ✓
- [x] Wissensaufbau vor Abfrage (kein Step testet unbekanntes Wissen) ✓
- [x] Adaptivitäts-Profil 3 Schülertypen beschrieben ✓
- [x] Echte Umlaute: ä, ö, ü, ß ✓
- [x] Schüler-Anrede: "du" — nie "Sie" ✓
- [x] Keine I-Care-Referenzen im Schülertext ✓
- [x] Primärquellen: Hoehl/Kullick (2019), WHO (2023), AAP (2022), Fiechter/Meier (1981) ✓
