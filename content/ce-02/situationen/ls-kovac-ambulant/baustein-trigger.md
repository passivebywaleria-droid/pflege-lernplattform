# Baustein-Trigger: ls-kovac-ambulant

**situationId:** ls-kovac-ambulant
**Gesamtzahl Trigger:** 13
**Verknüpfte Themen:** pneumonie-prophylaxe, kontraktur-prophylaxe, mobilisation, ernaehrungsassessment, thrombose-prophylaxe, schlaf, pflegedokumentation

---

## Trigger-Übersicht (alle 6 Phasen)

| # | Phase | Trigger-Step | Bedingung | Baustein-ID | Stufe | Logik |
|---|-------|-------------|-----------|-------------|-------|-------|
| T-01 | 1 | `info-03-wohnungscheck` | Teppich als Stolpergefahr nicht markiert | `kontraktur-prophylaxe-risikoassessment` | Sequencer wählt | Wer Risikofaktoren übersieht, bekommt Basiswissen zu Assessment |
| T-02 | 1 | `info-03-wohnungscheck` | Trinkprotokoll-Lücke nicht erkannt | `ernaehrungsassessment-fluessigkeit` | Sequencer wählt | Flüssigkeits-Grundlagen einblenden |
| T-03 | 1 | `info-04-erstkontakt-dialog` | Antwort c gewählt (aufgabenorientiert) | `kommunikation-aktives-zuhoeren` | Stufe 2–3 | Kommunikations-Feedback: warum aktives Zuhören in Pflegesetting wichtig ist |
| T-04 | 2 | `beob-03-gelenke-assessment` | Rötung am Knie nicht als Warnsignal eingeordnet | `kontraktur-prophylaxe-risikoassessment` | Sequencer wählt | Kontraktur-Zeichen vs. akute Entzündung unterscheiden |
| T-05 | 2 | `beob-05-trinkprotokoll-auswerten` | Berechnung falsch oder >100 ml Abweichung | `ernaehrungsassessment-fluessigkeit` | Stufe 3 | Flüssigkeitsbilanz und Zielwert bei Herzinsuffizienz/COPD |
| T-06 | 2 | `beob-06-oedeme-thrombose-blick` | ≥2 falsche Antworten in truefalse | `thrombose-prophylaxe-virchow-trias` | Sequencer wählt | Virchow-Trias und warum ASS ≠ Kompressionstherapie |
| T-07 | 3 | `plan-03-kompressions-branching` | Pfad B (kein Gespräch) oder C (Druck) gewählt | `pflegedokumentation-verweigerung` | Stufe 2–3 | Aufklärungspflicht + Dokumentationsstandard bei Verweigerung |
| T-08 | 3 | `plan-05-ziele-smart` | SMART-Ziel fehlerhaft (nicht messbar oder nicht terminiert) | `pflegedokumentation-pflegeziele` | Sequencer wählt | SMART-Kriterien am Beispiel |
| T-09 | 3 | Phase 3 Start (immer) | Bloom-Score Schüler < 3 aus Phase 2 | `thrombose-prophylaxe-kompression` | Stufe 2–3 | Hintergrundwissen Kompressionstherapie bevor ethisches Dilemma startet |
| T-10 | 4 | `dur-03-komplikation-kurzatmigkeit` | Pfad B oder C gewählt | `pneumonie-prophylaxe-copd-management` | Stufe 2–3 | COPD-Warnsignale und Stufenplan bei Belastungsdyspnoe |
| T-11 | 4 | `dur-02-atemuebung-ausfuehren-mc` | Falsche Antwort | `pneumonie-prophylaxe-lippenbremse` | Sequencer wählt | Wirkprinzip Lippenbremse + PEEP-Effekt |
| T-12 | 4 | `dur-05-komplikation-sohn-datenschutz` | Pfad B gewählt (Daten weitergegeben) | `pflegedokumentation-datenschutz` | Stufe 3 | DSGVO Art. 9 + Schweigepflicht + Schweigepflichtsentbindung |
| T-13 | 5 | `eval-02-schlafberatung-abend` | Dialog-Antwort a oder b | `schlaf-schlafhygiene-massnahmen` | Stufe 2–3 | Schlafhygiene-Maßnahmen + zirkadianer Rhythmus |
| T-14 | 6 | `dok-03-doku-freitext` | Verweigerungs-Doku unvollständig (< 3 Pflicht-Elemente) | `pflegedokumentation-verweigerung` | Stufe 3 | Vollständige Verweigerungs-Doku nach § 630f BGB |
| T-15 | 6 | `dok-03-doku-freitext` | Datenschutzgespräch nicht erwähnt | `pflegedokumentation-datenschutz` | Stufe 3 | Dokumentationspflicht auch für Gespräche mit Angehörigen |

---

## Trigger-Logik

```
Sequencer-Entscheidung:
  - Stufe 1 (Denkfrage): wenn Schüler Bloom-Score ≥ 4 in letzten 3 Steps
  - Stufe 2 (Hinweis): wenn Bloom-Score 2–3 oder B2-Sprachlevel
  - Stufe 3 (Erklärung + B1): wenn Bloom-Score ≤ 2 oder B1-Schüler

Anzeige-Modus:
  - T-01 bis T-06: Overlay nach Step-Auswertung (kurz, max 3 Min)
  - T-07, T-10, T-12: Inline nach Branching-Pfad (sofort, als Teil des Feedbacks)
  - T-14, T-15: Nach KI-Auswertung des Freitexts (verzögert, ~5 Sek)
```

---

## Baustein-IDs (Querverweise zu bausteine-plan.md)

| Baustein-ID | Thema | Datei |
|------------|-------|-------|
| `kontraktur-prophylaxe-risikoassessment` | Kontraktur-Assessment | content/ce-02/themen/kontraktur-prophylaxe/bausteine-plan.md |
| `ernaehrungsassessment-fluessigkeit` | Flüssigkeitsbilanz + Zielwerte | content/ce-02/themen/ernaehrungsassessment/bausteine-plan.md |
| `thrombose-prophylaxe-virchow-trias` | Virchow-Trias | content/ce-02/themen/thrombose-prophylaxe/bausteine-plan.md |
| `thrombose-prophylaxe-kompression` | Kompressionstherapie | content/ce-02/themen/thrombose-prophylaxe/bausteine-plan.md |
| `pneumonie-prophylaxe-copd-management` | COPD-Warnsignale | content/ce-02/themen/pneumonie-prophylaxe/bausteine-plan.md |
| `pneumonie-prophylaxe-lippenbremse` | Lippenbremse + PEEP | content/ce-02/themen/pneumonie-prophylaxe/bausteine-plan.md |
| `pflegedokumentation-verweigerung` | Verweigerungs-Doku | content/ce-02/themen/pflegedokumentation/bausteine-plan.md |
| `pflegedokumentation-pflegeziele` | SMART-Ziele | content/ce-02/themen/pflegedokumentation/bausteine-plan.md |
| `pflegedokumentation-datenschutz` | DSGVO + Schweigepflicht | content/ce-02/themen/pflegedokumentation/bausteine-plan.md |
| `pflegedokumentation-ambulant` | Ambulante Doku-Standards | content/ce-02/themen/pflegedokumentation/bausteine-plan.md |
| `schlaf-schlafhygiene-massnahmen` | Schlafhygiene | content/ce-02/themen/schlaf/bausteine-plan.md |
| `mobilisation-wadenmuskel-pumpe` | Wadenmuskel-Pumpe | content/ce-02/themen/mobilisation/bausteine-plan.md |
| `kommunikation-aktives-zuhoeren` | Aktives Zuhören | content/ce-02/themen/kommunikation/bausteine-plan.md |

---

## Adaptivitäts-Profil (Trigger-Häufigkeit)

| Schüler-Typ | Erwartete Trigger-Anzahl | Bausteine-Stufe |
|-------------|--------------------------|----------------|
| C1 + Vorerfahrung | 2–4 Trigger (nur bei echten Fehlern) | Stufe 1 (Denkfragen) |
| B2 + etwas Praxis | 5–8 Trigger | Stufe 2 (Hinweise) |
| B1 + Anfängerin | 9–13 Trigger (viele automatisch) | Stufe 3 (Erklärungen + TTS) |

---

## K.O.-Prüfung Phase 2

- [x] **Alle 6 Phasen des Situationstyps `pflegeprozess` vorhanden** (informieren, beobachten, planen, durchfuehren, evaluieren, dokumentieren)
- [x] **Min 8 Kern-Steps:** 5 + 6 + 5 + 7 + 4 + 4 = **31 Kern-Steps** ✓
- [x] **Min 4 Optionale Steps:** 3 + 3 + 3 + 3 + 2 + 3 = **17 Optionale Steps** ✓
- [x] **Min 3 Baustein-Trigger:** 15 Trigger ✓
- [x] **Min 2 Komplikationen mit Branching:** K1 Kurzatmigkeit (Phase 4), K2 Sohn/Datenschutz (Phase 4) ✓
- [x] **Patient mit Bio, Diagnosen, Persönlichkeit, Zitaten:** patient-plan.md ✓ (6 Zitate Z1–Z6)
- [x] **Letzte Phase mit Dokumentationsaufgabe:** Phase 6 Freitext Besuchsbericht ✓
- [x] **Min 12 verschiedene Step-Typen:** text(scenario/checklist/stepbystep), sorting, highlight, confidence, dialog, comparison, categorize, calculation, truefalse, branching, freetext, mc, flipcard, sequencing, fillin, matching, timeline, summary = **15+ Typen** ✓
- [x] **Bloom-Progression:** Phase 1–2 (B2–B4) → Phase 3–4 (B4–B5) → Phase 5–6 (B5–B6) ✓
- [x] **Alle 3 Tags vertreten:** pflege (dominant), krankheitslehre (COPD, Thrombose), anatomie (Trinkberechnung, Melatonin) ✓
- [x] **25–30% offene Formate:** freetext (Phase 1, 2, 4, 5, 6), confidence (2×), reflection (optional) = ca. 8 von 31 = 26% ✓
- [x] **Ethisches Dilemma:** Branching Phase 3 (Autonomie vs. Prophylaxe) ✓
- [x] **Datenschutz-Komplikation:** Branching Phase 4 (Sohn/Telefon) ✓
- [x] **Primärquellen:** GOLD-Report COPD 2023, DNQP Kontinenzförderung 2014, DSGVO 2018, § 630f BGB, § 1901a BGB ✓
