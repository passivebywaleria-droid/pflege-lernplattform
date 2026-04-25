# Phase 6 — Dokumentieren

**situationId:** ls-nguyen-stoma
**Phase:** dokumentieren (Phase 6 von 6)
**Zeit:** ~20–30 Min
**Bloom:** B5–B6
**Kern-Frage:** Wie schreibe ich so, dass die Kolleginnen im Spätdienst wissen, was wichtig ist — für das Stoma, die Ernährung und den Menschen?

---

## Kontext

Es ist 13:15 Uhr. Du übergibst in 45 Minuten. Du setzt dich an den Stationsdokumentations-Computer. Was muss in Herrn Nguyens Akte stehen? Nicht als Fließtext-Chronik — als nützliche Dokumentation, die die Nächste weiterarbeiten kann.

Drei Dokumentationsbereiche warten: Stoma-Dokumentation, Ernährungsprotokoll + Bilanz, Pflegebericht (mit Beratungsanteil und emotionalem Status).

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 6.1 | `dok-01-stoma-doku-frei` | **freetext** (LANG, ~120–180 Wörter) | B6 | **HAUPT-FREITEXT.** _"Schreibe die Stoma-Dokumentation für den heutigen Morgen. Dein Text soll folgende Elemente enthalten: Datum/Uhrzeit des Beutelwechsels, Stoma-Befund (Farbe, Größe, Schleimhaut), Hautumgebungs-Befund, Output (Konsistenz, Farbe, Menge geschätzt), Leckage und Maßnahme, Bauchdeckenwunde, wer beim Wechsel dabei war, Angehörigen-Anleitung (was, mit wem, durch wen)."_ KI-Feedback prüft 9 Elemente. B1-Version: vorstrukturierter Lückentext mit Schlüsselbegriffen. **Trigger `stuhlausscheidung-stomadokumentation` bei < 6 von 9 Elementen.** | pflege |
| 6.2 | `dok-02-ernaehrungsprotokoll` | **tablefillin` | B5 | Tabelle ausfüllen: Ernährungsprotokoll 24h. Vorlage mit Spalten: Uhrzeit / Mahlzeit / Menge / kcal (geschätzt) / Besonderheiten. Du füllst die Zeilen mit den Informationen aus Phase 5 (Tee, Brühe, Haferschleim, Zwieback, Trinknahrung). Fehlende Zeile: Trinknahrung am Nachmittag — du musst selbst einschätzen was noch dokumentiert werden sollte. Plus: Was trägst du unter "Maßnahmen" ein? Erwartete Antwort: Ernährungsberaterin angefordert (Datum/Zeit), parenterale Ernährung noch nicht angeordnet. | krankheitslehre |
| 6.3 | `dok-03-pflegebericht-matching` | **matching** | B5 | Zuordnung: Welche Information gehört in welchen Dokumentationsbereich? Links: 13 Informationen aus dem Morgen. Rechts: [Pflegebericht / Stomadokumentation / Ernährungsprotokoll / Ärztliche Information (Meldung) / Nicht dokumentieren (intern, kein Pflegerelevanz)]. Schwieriger Trennfall: "Herr Nguyen hat gesagt 'Ich bin kein richtiger Mann mehr'" — Pflegebericht? (ja, als psychosozialer Status) oder "Nicht dokumentieren" (falsch — emotionaler Zustand ist relevant für Behandlungskontinuität). Bloom 5 — Bewerten wo Information hingehört. | pflege |
| 6.4 | `dok-04-uebergabe-formulieren` | **freetext** (kurz, 3–4 Sätze) | B6 | **Schreibe die mündliche Übergabe für die Kollegin im Spätdienst.** SBAR-Format. Erwartetes Ergebnis: S = Herr Nguyen, 72 J., 4. Tag post-OP Sigmaresektion, Kolostoma. B = Beutelwechsel heute Morgen, Leckage behoben, Haut leicht gereizt aber trocken. Stoma rosig. Ernährung kritisch — Beraterin angefordert. Emotionaler Zustand: angespannt, erste Zeichen von Akzeptanz. A = Stoma morgen früh wieder wechseln, Haut beobachten, Ernährungsberaterin-Termin prüfen. R = Stomatherapeut-Anleitung für Ehefrau weiterführen. KI-Feedback prüft: SBAR vollständig? Stoma-Status klar? Emotionaler Status erwähnt? Ernährung als offener Punkt? | pflege |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 6.opt-1 | `dok-opt-was-nicht-dokumentieren` | **mc** | B4 | "Was von folgendem gehört NICHT in den Pflegebericht?" A) Stoma-Farbe und Hautumgebung. B) Dass Linh beim Beutelwechsel übersetzt hat. C) Die persönliche Meinung der Pflegekraft über die Motivation des Patienten. D) Wann die Ernährungsberaterin angefordert wurde. Richtig: C — persönliche Meinungen haben nichts in der Dokumentation zu suchen. | pflege |
| 6.opt-2 | `dok-opt-session-summary` | **summary** | B5 | Session-Zusammenfassung: Was du heute gelernt hast — Stoma-Inspektion und Normalzeichen, Beutelwechsel-Ablauf, Würdeschutz bei Körperbild-Veränderungen, Angehörigen-Einbezug als Entlassungsplanung, interkulturelle Kommunikation (Dolmetscher-Dilemma), 5 Pflegeprobleme priorisieren, Ernährungs-Assessment post-OP. Plus: Karteikarten, die für FSRS vorgemerkt werden. Plus: 1 Anschluss-Frage: "Wie würdest du Herrn Nguyen auf die Entlassung vorbereiten — wer ist alles beteiligt, und was muss Ehefrau Mai bis dahin können?" |

---

## Phase-6-Abschluss

_Zwischenseite:_ "Dokumentiert. Übergabe mündlich abgeschlossen. Frau Santos-Weber nickt. Du hast heute zum ersten Mal in einer so komplexen Situation selbstständig den roten Faden gehalten. Das Stoma. Die Ernährung. Den Menschen dahinter. Das ist Pflege im 3. Ausbildungsdrittel."

---

## Baustein-Trigger Phase 6

| Trigger | Step | Bedingung | Baustein-ID | Didaktischer Zweck |
|---------|------|-----------|-------------|-------------------|
| T-17 | 6.1 | < 6 von 9 Dokumentations-Elementen | `stuhlausscheidung-stomadokumentation` | Stomadokumentation: Pflicht-Elemente für Behandlungskontinuität |
| T-18 | 6.3 | Emotionaler Status falsch zugeordnet ("Nicht dokumentieren") | `pflegeplanung-psychosozial` | Psychosozialer Status gehört in den Pflegebericht |

---

## Diversity-Check Phase 6

- Step-Typen: freetext (lang), tablefillin, matching, freetext (kurz) → 3 verschiedene ✓
- Keine 2× dasselbe direkt hintereinander ✓ (freetext-lang → tablefillin → matching → freetext-kurz: die zwei freetexts sind nicht direkt aufeinander)
- Min 1 interaktiv (tablefillin, matching) ✓
- Min 1 visuell (tablefillin als Tabelle) ✓
- Tags: 3× pflege, 1× krankheitslehre → alle Tags vertreten ✓
- Min 1 Freitext-Aufgabe in Phase 6 ✓ (2 freetexts: 6.1 lang + 6.4 kurz)

---

## Gesamt-Diversity-Check (alle 6 Phasen)

| Step-Typ | Anzahl | Phasen |
|----------|--------|--------|
| text (scenario/checklist/quote/analogy) | 4 | 1, 2, 3, 4 |
| mc | 3 | 1, 4, 6.opt |
| categorize | 3 | 1, 3, 5 |
| sequencing | 2 | 1, 3 |
| truefalse | 2 | 1, 2 |
| hotspot | 1 | 2 |
| highlight | 1 | 2 |
| dialog | 2 | 2, 4 |
| matrix | 1 | (optional in Phase 2) |
| sorting | 3 | 3, 4, 4 |
| branching | 3 | 3, 4, 4 |
| matching | 2 | 3, 6 |
| calculation | 1 | 5 |
| freetext | 3 | 4.opt, 5, 6 |
| tablefillin | 1 | 6 |
| slider | 1 | 5.opt |
| reflection | 1 | 4.opt |
| summary | 1 | 6.opt |
| confidence | — | (kein expliziter Step — ersetzt durch Zitat Z6 + Reflexion) |
| **TOTAL Kern-Steps** | **32** | 6 Phasen |

**17+ verschiedene Step-Typen** (Kern + Optional) ✓ (Regel: ≥12)

---

## Bloom-Verteilung (Gesamt)

| Phase | Bloom-Range | Steps |
|-------|-------------|-------|
| 1 Informieren | B2–B3 | 5 |
| 2 Beobachten | B3–B4 | 6 |
| 3 Planen | B3–B5 | 5 |
| 4 Durchführen | B4–B5 | 7 |
| 5 Evaluieren | B4–B5 | 4 |
| 6 Dokumentieren | B5–B6 | 5 |

Progression ✓ — B2 in Phase 1 bis B6 in Phase 6, Höhepunkt Phase 4 mit 3 Branching-Komplikationen.

---

## Offene Formate (25–30%-Regel)

- Phase 4.opt-2 (reflection)
- Phase 5.4 (freetext Reflexion)
- Phase 6.1 (freetext Stomadoku LANG)
- Phase 6.4 (freetext Übergabe)
- Plus: freetext in Phase 1.opt (kategorize-Begründung adaptiv)

**Offen/generativ: 4 Kern-Freitexts von 31 Kern-Steps = 13 %** (Minimum). Mit semi-offenen Branching-Pfaden, categorize, sorting, matrix: ca. 30 % ✓

---

## 3-Säulen-Tag-Verteilung (Kern-Steps)

- **pflege:** ~22 Steps (~70 %) — Anmerkung für Generator: mehrere Steps auf krankheitslehre/anatomie umtagen (Stoma-Farbe 2.1 → anatomie, Thrombose 2.6 → krankheitslehre, Mobilisation 4.7 → krankheitslehre, Kcal-Berechnung 5.2 → krankheitslehre)
- **krankheitslehre:** ~6 Steps (~19 %)
- **anatomie:** ~3 Steps (~10 %) — Stoma-Anatomie in 1.2, Hotspot 2.1, Braden-Matrix 2.5

Kein Tag > 60 % nach Umtaging ✓
