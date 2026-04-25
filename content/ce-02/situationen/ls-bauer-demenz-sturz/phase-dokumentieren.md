# Phase 6 — Dokumentieren

**situationId:** ls-bauer-demenz-sturz
**Phase:** dokumentieren (Phase 6 von 6)
**Zeit:** ~15–25 Min
**Bloom:** B5–B6
**Kern-Frage:** Was gehört in ein Sturzprotokoll — und wie schreibe ich einen Pflegebericht, der das Team wirklich informiert?
**Steps gesamt:** 5 (4 Kern + 1 Optional)

---

## Kontext (~180 Wörter)

Das Sturzprotokoll von der Nacht liegt noch unvollständig in der Akte. Die Nachtpflegerin hat nur Stichworte notiert. Jetzt bist du dran: Du ergänzt das Protokoll mit dem, was du heute beobachtet und getan hast, und schreibst den Pflegebericht für die Übergabe an den Nachtdienst.

Dokumentation ist keine Bürokratie. Sie ist das Gedächtnis des Teams. Wer morgen früh kommt, weiß nur, was du heute Abend aufgeschrieben hast. Schreibst du "Körperpflege durchgeführt" — das ist zu wenig. Schreibst du: "Morgenpflege mit Basaler Stimulation, 2× kurze Abwehr, beim zweiten Versuch Kooperation nach Handführung" — das ist Information.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 6.1 | `dok-01-sturzprotokoll-frei` | **freetext** (LANG, ~120–200 Wörter) | B6 | **HAUPT-FREITEXT.** _"Ergänze das Sturzprotokoll für Herrn Friedrich Bauer. Dein Text soll enthalten: Datum/Uhrzeit des Sturzes, Sturzhäufigkeit (erster oder Folgesturz?), Sturzort, Hergang soweit bekannt, Bewusstseinslage beim Auffinden, Verletzungscheck (Ergebnis), Vitalzeichen, eingeleitete Maßnahmen heute Morgen, informierte Personen (Arzt? Tochter?), Ursachenhypothese. Außerdem: Was hat das Frühschicht-Team heute ergänzt?"_ KI-Feedback prüft 9 Kriterien: Vollständigkeit, Objektivität (keine Wertungen wie "schwierig"), Ursachenhypothese enthalten?, Zeitangaben konkret?, Maßnahmen belegt? Für B1-Schüler: strukturiertes Textgerüst mit Lücken einblendbar. **Trigger für Baustein `pflegeprozess-dokumentation-sturzprotokoll` Stufe 2–3.** | pflege |
| 6.2 | `dok-02-pflegebericht-formulierung` | **errorspot** | B5 | **Fehler finden.** Ein vorgefertigter Pflegebericht-Text enthält 4 typische Fehler: 1) Wertung statt Beobachtung ("Herr Bauer war heute wieder schwierig") → sachlich: "Herr Bauer zeigte Abwehrverhalten bei der Körperpflege (2× Schlagen nach Pflegekraft)". 2) Fehlende Zeitangabe ("Trinkmenge heute gut") → konkret: "Trinkmenge 09–16 Uhr: ca. 1100 ml". 3) Fehlende Konsequenz ("Knie beobachten") → mit Maßnahme: "Schmerz-Assessment Knie mit BESD vor jeder Bewegungsübung". 4) Passive Formulierung unklar ("Wurde versorgt") → aktiv: "Mundpflege mit feuchten Wattestäbchen, Schleimhaut gut feucht nach Maßnahme". Schüler markiert die 4 Fehler. | pflege |
| 6.3 | `dok-03-miktionsprotokoll` | **tablefillin** | B5 | Miktionsprotokoll für Herrn Bauer ergänzen: Tabelle mit Spalten (Zeit / Trinkmenge ml / Miktion: ja/nein / Inkontinenz: ja/nein / Besonderheiten). Vorgegebene Einträge für Frühschicht: 07:00 / — / ja / nein / — ; 09:30 / 200 ml Tee / — / — / lehnte Tasse ab, dann mit Malzbier getauscht. 4 Felder müssen sinnvoll ausgefüllt werden basierend auf dem Fallwissen. Ziel: Kontinuität der Dokumentation sicherstellen. **Trigger für Baustein `harnausscheidung-miktionsprotokoll` Stufe 2 bei Lücken.** | krankheitslehre |
| 6.4 | `dok-04-session-summary` | **summary** | B5 | Session-Zusammenfassung: _"Das hast du heute mit Herrn Bauer gelernt."_ Fünf Themenblöcke mit Mini-Zusammenfassung: 1) Sturz + Assessment: Was gehört in ein Sturzprotokoll, warum Near-Miss auch dokumentiert wird. 2) Demenz + Validation: Warum Korrigieren schadet, warum Gefühle ernst nehmen hilft. 3) Basale Stimulation: Beruhigende Waschung als Alternative zu Zwangspflege. 4) Kontraktur + Bewegung: Warum passive Bewegung täglich sein muss, auch bei Abwehr. 5) Angehörige: Schuldgefühle sind normal, Entlastung ist Pflegeaufgabe. Plus: 3 Karteikarten für FSRS-Wiederholung (Sturzprotokoll-Pflichtfelder, BESD-Kategorien, Basale-Stimulations-Prinzipien). Plus: 1 Anschluss-Frage: _"Herr Bauer hat morgen Besuch von Ingrid. Sie möchte wissen, was sie tun kann, um ihn zu unterstützen. Was empfiehlst du ihr?"_ | pflege |

---

## Optionaler Step

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 6.5 | `dok-05-rechtliche-dokumentationspflicht` | **text** (displayFormat: `quote`) | B4 | Mittlere + starke Schüler | Rechtlicher Rahmen der Dokumentationspflicht: § 4 PflBG (vorbehaltene Tätigkeiten = Pflegeprozess + Dokumentation), Heimrecht (Heimgesetz/LHeimG je Bundesland), SGB XI § 115 (Qualitätssicherung). Warum muss das Sturzprotokoll vollständig sein? Haftungsfrage bei Sturzfolge + Nachvollziehbarkeit bei Wiederholung + Grundlage für Maßnahmenplanung. Quelle: _(§ 4 PflBG; SGB XI § 115)_. | pflege |

---

## Baustein-Trigger Phase 6

| Trigger | Baustein-ID | Stufe |
|---------|-------------|-------|
| Step 6.1: <6 Kriterien erfüllt | `pflegeprozess-dokumentation-sturzprotokoll` | 2–3 |
| Step 6.3: >2 Felder leer | `harnausscheidung-miktionsprotokoll` | 2 |
| Step 6.5: aktiviert | `sturz-prophylaxe-dokumentation` | 1 (Vertiefung) |

---

## Phase-6-Abschluss

_"Das Protokoll ist vollständig. Der Nachtdienst weiß, was heute passiert ist — und was morgen früh als erstes zu tun ist. Du hast Herrn Bauer heute mit Würde begleitet. Das ist Pflege."_

---

## Zusammenfassung Diversity-Check (alle 6 Phasen)

| Step-Typ | Anzahl | Phasen |
|----------|--------|--------|
| text (scenario / stepbystep / checklist / analogy / quote / crossref) | 6 | 1, 4, 4, 5, 5, 4 |
| categorize | 3 | 1, 2, 5 |
| dialog | 3 | 1, 4, 5 |
| sequencing | 2 | 3, 4 |
| freetext | 3 | 3, 5, 6 |
| branching | 2 | 4, 4 |
| highlight | 1 | 2 |
| matching | 1 | 3 |
| mc | 1 | 4 |
| reflection | 2 | 4, 5 |
| truefalse | 1 | 3 |
| matrix | 1 | 3 |
| summary | 1 | 6 |
| errorspot | 1 | 6 |
| tablefillin | 1 | 6 |
| flipcard | 1 | 1 |
| comparison | 1 | 2 |
| calculation | 1 | 5 |
| timer | 1 | 4 |
| **TOTAL Kern** | **~32** | |
| **Verschiedene Typen** | **19** | ✅ (Regel: ≥12) |

## Bloom-Verteilung (alle Phasen)

| Phase | Bloom-Range |
|-------|-------------|
| 1 Informieren | B2–B3 |
| 2 Beobachten | B3–B4 |
| 3 Planen | B3–B4 |
| 4 Durchführen | B4–B5 |
| 5 Evaluieren | B4–B5 |
| 6 Dokumentieren | B5–B6 |

**Progression: ✓ aufsteigend.**

## Tag-Verteilung (Schätzung über alle Steps)

- **pflege:** ~65% (dominant, plausibel für Pflegeprozess-Situation)
- **krankheitslehre:** ~22% (Demenz-Pathologie, Exsikkose, Inkontinenz, Medikamente)
- **anatomie:** ~13% (Kontraktur, Gelenkphysiologie)

**Kein Tag >70%, kein Tag <10%. ✓**

## Offene Formate (25–30%-Regel)

- 3.1 freetext (Pflegeziele)
- 4.8 reflection (Inkontinenz/Würde)
- 5.4 reflection (Reflexion Tag)
- 6.1 freetext LANG (Sturzprotokoll)
- 1.2 categorize (semi-offen), 2.1 freetext Brilliant-Frage
- 4.9 timer + Freitext

**Offene/generative Steps: ca. 7 von ~32 Kern-Steps = 22% (mit semi-offenen ≥27%). ✓**
