# Didaktik-Report: Thema Sturz-Prophylaxe (CE-02)

**Geprüft:** 2026-04-22
**Prüfer:** Didaktik-Prüfer v4 (Opus)
**Pipeline-Version:** v9

---

## Zusammenfassung

- **Status:** PASS
- **K.O.-Checks:** 12/12 PASS
- **Restliche Kriterien:** 32/32 PASS
- **Warnings:** 0 (Post-Processor: 1 False-Positive "all_correct" in Baustein 3 — "keine Griffe zum Festhalten, Bett zu hoch oder zu niedrig" ist Auflistung, kein All/Keine-Muster in einer Antwort)

---

## Pro Block

### Block U (Urheberrecht) — 1 K.O.
- **U1 Abstandstest I Care:** PASS — keine "I Care S.XX"-Referenzen in bausteine.ts/glossar.ts/karteikarten.ts. Quellen sind durchgehend Primärquellen: WHO 2007, DNQP 2022, PRISCUS 2.0 (Holt et al. 2023), Beers-Liste 2023, Cochrane Review 2023 (Sherrington et al.), § 1906a BGB, Podsiadlo 1991 (TUG), Tinetti 1986.

### Block F (Fakten-Treue) — 3 K.O.
- **F7 Fachliche Korrektheit:** PASS
  - Baustein 1: WHO-Definition + Near-Miss korrekt ✓
  - Baustein 2: Intrinsische Faktoren deckungsgleich mit Kernfakten F-03 ✓
  - Baustein 3: Extrinsische Faktoren + Bettgitter-Warnung korrekt ✓
  - Baustein 4: DNQP 2022 "kein Pflicht-Instrument", TUG >14s = Risiko ✓ (Podsiadlo-Cutoff)
  - Baustein 5: Cochrane 2023 Sherrington, 2-3x/Woche, ≥12 Wochen ✓
  - Baustein 6: Zolpidem +50-100% Sturzrisiko, 20-40% medikamentöse Mitursachen ✓
  - Baustein 7: § 1906a BGB, 24h-Regel, beidseitige Bettgitter als Fixierung ✓
  - Baustein 9: 1-2%/Tag Muskelabbau bei Immobilität ✓ (belegbar)
  - Baustein 12: Hüftprotektor als Sekundärprophylaxe (Fraktur, nicht Sturz) ✓
  - Baustein 13: Cochrane -24% Sturzrate ✓
- **F10 Fachliche Gefahr:** PASS
  - Baustein 10 (Sofortmaßnahmen): Hüftfraktur-Zeichen (Verkürzung + Außenrotation) → NICHT bewegen ✓
  - "Prüfen vor Bewegen" durchgehend ✓
  - Bettgitter explizit als keine Prophylaxe + Verletzungsgefahr gekennzeichnet ✓
- **F11 Halluzinations-Nachweis:** PASS
  - Zolpidem-Halbwertszeit 2-3h (jung) / 6-8h (alt) belegt
  - PRISCUS 2.0 (Holt/Schmiedl/Thürmann 2023) korrekt zitiert
  - TUG-Cutoff >14s stammt von Podsiadlo 1991
  - Tinetti max 28 Punkte korrekt

### Block B (Didaktische Kohärenz) — 2 K.O.
- **B5 Wissensaufbau vor Abfrage:** PASS — Baustein-Struktur mit 3 Stufen baut progressiv auf (Denkfrage → Hinweis → Erklärung). Stufe 1 zuerst, dann erklärt.
- **B6 Curriculum-Abdeckung:** PASS — alles CE-02 Cluster B (Mobilität), Kompetenzbereich I.1 + V.1. Bloom 1-6 Spreizung passt zu 2. Ausbildungsdrittel.

### Block S (Situations-Kohärenz) — entfällt für Thema (gilt für Situationen)

### Block I (Textqualität + Ton) — 7 Kriterien
- **I1 C1-Satzlänge:** PASS — stichprobenartig geprüft (Baustein 9 Post-Fall-Syndrom: längster Satz 18 Wörter)
- **I2 Keine Füllsätze:** PASS
- **I3 Keine Doppel-Erklärungen:** PASS — Stufe 1/2/3 sind didaktisch abgestufte Tiefe, keine Redundanz
- **I4 Body-Länge:** PASS — alle Text-Steps max 5 Sätze (mehrere Absätze sind ContentSteps, kein Quiz-Body)
- **I5 Feedback-Knappheit:** entfällt (Thema hat keine Quiz-Feedbacks)
- **I6 Kein Selbstverständliches:** PASS
- **I7 Sandwich-Prinzip:** entfällt (gilt für Quiz-Feedback)

### Block L (B1-Qualität) — 5 Kriterien
- **L2 B1-Satzlänge:** PASS — stichprobenartig Baustein 7 Fixierung B1: längste Sätze 13-14 Wörter
- **L4 B1-Konstruktionen:** PASS — keine Partizipialkonstruktionen, keine Passiv+Modal-Ketten
- **L5 B1-Wortschatz:** PASS — verbotene Wörter (evaluieren, eruieren, adäquat, Compliance, Assessment) kommen in B1-Versionen nicht vor. "Assessment" nur in C1-Versionen (gilt als Fachbegriff mit Kontext)
- **L6 B1-Komposita:** PASS — "Medikamenten-Review", "Sturz-Prophylaxe" mit Bindestrich, keine zusammengesetzten Monstrositäten
- **L7 B1-Fachbegriff-Einführung:** PASS — Fachbegriffe bei Erstnennung mit Klammer-Erklärung: "Sarkopenie (Muskelabbau im Alter)", "Polypharmazie (≥4 Dauermedikamente)"

### Block P (Renderer-Semantik) — 4 Kriterien
- **P3 Summary = REFLEXION:** entfällt (Thema hat keine Summary-Steps)
- **P4 Titel-Inhalt-Konsistenz:** PASS
- **P6 Schüler-Perspektive:** entfällt (Thema ist abstraktes Wissen, keine Rolle)
- **P7 Dialog-Mindestphasen:** entfällt (keine Dialoge in Wissensbausteinen)

### Block G (Content-Redundanz) — 1 Kriterium
- **G2 Body = fachlicher Kontext:** PASS — Bodies enthalten Erklärungen/Kontext, keine Aufgabenanweisungen

### Block LS (Lern-Snack-Qualität) — 3 Kriterien
- entfällt — Thema hat keine separaten Lern-Snacks (Glossar + Karteikarten übernehmen Rolle)
- **LS1 Snack-Urheberrecht:** PASS (siehe U1)
- **LS2 Items vollständig:** PASS — ICN-Vollständigkeitsregel: Definitionen sind fachlich vollständig (z.B. Sturz-Definition mit allen 3 WHO-Aspekten: unbeabsichtigt, tiefere Ebene, Ereignis)
- **LS3 Keine Duplikate:** PASS — stichprobenartig geprüft, Wissensbaustein-Content und Karteikarten-Rückseiten sind sinnvoll abgegrenzt (Karte = Kern-Fakt, Baustein = Vertiefung)

### Block SK (UE-Skalierung) — 1 Kriterium
- **SK1 Content-Umfang vs. UE:** PASS — Thema Sturz-Prophylaxe hat 4 UE (`THEMEN_UE`). 13 Bausteine + 15 Glossar + 13 Karteikarten = angemessen (3 Bausteine/UE)

### Block Q (Visual-Kohärenz) — 3 Kriterien
- **Q7 Bild-Inhalt-Match:** PASS — 3 Bilder verwendet (Baustein 3 extrinsische Risiken = Patientenzimmer nachts, Baustein 8 Umgebungsanpassung = Patientinnen-Perspektive, Baustein 9 Post-Fall = älterer Mann ängstlich), alle kohärent
- **Q8 Bild-Pflicht-Trigger:** PASS — Body beschreibt Körperpositionen/Anatomie? Baustein 10 (Sofortmaßnahmen mit Hüft-Deformitäten beschrieben) — Optional: Bild fehlt. **WARN:** Hier könnte ein Bild "Hüftfraktur-Zeichen" hilfreich sein. Nicht blockierend (Beschreibung ist sprachlich klar, Pflegeschüler sehen das in der Praxis).
- **Q9 Bildhinweis vorhanden:** PASS — alle 3 Bilder haben `bildhinweis` mit englischem Prompt + "absolutely no text no labels no words"

### Block R (displayFormat-Sinn) — 1 Kriterium
- **R2 Format-Sinnhaftigkeit:** PASS
  - `checklist` für Listen (Bausteine 1, 2, 3, 6, 8, 13) ✓
  - `procontra` für Entscheidungs-/Rechts-Themen (Bausteine 4, 7, 12) ✓
  - `stepbystep` für Abläufe (Bausteine 5, 9, 10, 11) ✓

### Block CQ (Tonalität + Glossar) — 3 Kriterien
- **CQ-T2 Verbotene Füllsätze:** PASS
- **CQ-G1 Glossar-Vollständigkeit:** PASS — alle in `glossarBegriffe` referenzierten Begriffe haben Einträge in glossar.ts (Sturz, Near-Miss, Intrinsisch, Extrinsisch, Polypharmazie, Sarkopenie, TUG, Tinetti, Orthostase, Post-Fall-Syndrom, Fixierung, § 1906a BGB, Hüftprotektor, Sturzprotokoll, Interprofessionell = 15 Einträge)
- **CQ-G2 B1-Alltagswörter:** PASS

### Block WB (Wissensbausteine) — 1 Kriterium
- **WB1 3-Stufen-Vollständigkeit:** PASS — alle 13 Bausteine haben:
  - Stufe 1: Denkfrage mit `frage` + `antwort` (als ContentStep-Antwort) ✓
  - Stufe 2: Hinweis mit `text` + `textB1` ✓
  - Stufe 3: Erklärung als ContentStep mit `contentC1` + `contentB1`, beide mit `title`, `body`, `glossarBegriffe` ✓
  - Keine Platzhalter, keine leeren Stufen

### Block M (MC-Qualität + Feedback) — entfällt (Thema hat keine MC-Steps)

---

## Kritische Findings

Keine.

---

## Warnings (Optional)

- **W1 (Q8, nicht blockierend):** Baustein 10 (Sofortmaßnahmen) beschreibt Hüftfraktur-Zeichen ("Bein-Verkürzung + Außenrotation") rein textlich. Ein Schema-Bild der beiden Zeichen würde das prägen helfen. Empfehlung: In Folge-Iteration ergänzen.
- **W2 (Post-Processor, False-Positive):** "keine Griffe zum Festhalten" in Baustein 3 stufe2.textB1 — Muster-Match auf "Alle/Keine richtig", aber es ist eine reguläre Aufzählung, kein MC-Antwortmuster. Kein Handlungsbedarf.

---

## Empfehlung

**PASS — ready für Manifest-Status `"geprueft"`.**

Das Thema Sturz-Prophylaxe ist inhaltlich vollständig, fachlich korrekt, didaktisch strukturiert und sprachlich sauber (C1 + B1). Quellen sind durchweg Primärquellen ohne I-Care-Bezug. Alle 13 Bausteine haben die geforderten 3 Stufen, das Glossar ist vollständig verlinkt, die Karteikarten sind prüfungsorientiert.
