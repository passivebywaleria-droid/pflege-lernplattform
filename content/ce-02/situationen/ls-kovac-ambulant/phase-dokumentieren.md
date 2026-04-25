# Phase 6 — Dokumentieren: Ambulante Pflegedoku, Verweigerung dokumentieren

**situationId:** ls-kovac-ambulant
**Zeit:** ~15–25 Min
**Bloom:** B5–B6
**Kern-Frage:** Wie dokumentiere ich ambulant? Und wie dokumentiere ich eine Verweigerung — rechtssicher, würdevoll, vollständig?
**Steps:** 4 (inkl. Haupt-Freitext)

---

## Kontext

Du verlässt Frau Kovačs Wohnung nach dem Abendbesuch. Im Pflegedienstwagen öffnest du das Dokumentationssystem auf dem Tablet. Heute gab es viel zu dokumentieren: Atemübungen mit Kurzatmigkeit, Datenschutzgespräch mit Sohn, Trinkprotokoll, Schlafhygiene-Gespräch — und die Verweigerung der Kompressionsstrümpfe. Letzteres ist das Heikelste. Es muss vollständig sein, damit alle Kolleginnen wissen: Sie wurde aufgeklärt. Sie hat abgelehnt. Das ist ihr Recht. Und wenn morgen eine Thrombose auftritt — niemand hat geschwiegen.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 6.1 | `dok-01-ambulant-vs-stationaer-doku` | **comparison** | B5 | Vergleich: ambulante vs. stationäre Pflegedokumentation. Zwei Spalten: Ambulant (kürzer, strukturierter, SIS-Instrument oder analog, Berichtsblatt pro Besuch, oft handschriftlich ergänzt, Zeit im Auto, nicht am Bett) vs. Stationär (ausführlicher, direkt am Patientenbett oder Schreibtisch, Mehrere Berufsgruppen lesen mit, Visitendoku, Pflegeplanung digital). Frage anschließend (mc): "Was muss in JEDER ambulanten Besuchsdokumentation stehen, egal wie kurz?" A) Name, Datum, Uhrzeit, Maßnahmen, Besonderheiten B) Nur die durchgeführten Maßnahmen C) Name und Uhrzeit genügen D) Nur Auffälligkeiten. **Richtig: A** — § 630f BGB: Dokumentationspflicht inkl. Datum, Uhrzeit, Maßnahmen. | pflege |
| 6.2 | `dok-02-verweigerung-doku-erklaert` | **text** (displayFormat: `scenario`) | B5 | Erklärungs-Step: Wie dokumentiert man eine Patientenverweigerung rechtssicher? Text (~250 Wörter, C1): Drei Pflicht-Elemente einer Verweigerungs-Dokumentation nach § 630f BGB: 1) **Was** wurde angeboten/erklärt (Maßnahme + Begründung — "Kompressionsstrümpfe empfohlen wegen erhöhtem Thromboserisiko bei Herzinsuffizienz, Immobilität, fehlender Mobilisation"); 2) **Wie** wurde aufgeklärt (mündlich durch Pflegekraft, patientengerecht, Rückfragen ermöglicht); 3) **Wie** hat die Patientin entschieden (wörtliches Zitat wenn möglich: "Ich brauche keine Strümpfe" — bewusste, freiwillige Ablehnung). Rechtliche Einordnung: § 1901a BGB — Selbstbestimmungsrecht des Patienten. Kein Erzwingen erlaubt. Kein Schweigen erlaubt. Dokumentieren ist Pflicht. Quelle: (§ 630f BGB; § 1901a BGB). | pflege |
| 6.3 | `dok-03-doku-freitext` | **freetext** (LANG, ~80–120 Wörter) | B6 | **HAUPT-FREITEXT.** Aufgabe: _"Schreibe den Besuchsbericht für heute Morgen (Morgenbesuch 07:30–08:00 Uhr). Dein Bericht soll enthalten: Datum und Uhrzeit, durchgeführte Maßnahmen, Beobachtungen (Atmung, Gelenke, Trinkmenge), Komplikation (Kurzatmigkeit — wie reagiert?), Datenschutzgespräch Sohn, Verweigerung Kompressionsstrümpfe (vollständig: Aufklärung + Reaktion Patientin)."_ KI-Feedback prüft 7 Kriterien: Datum/Uhrzeit vorhanden? Maßnahmen genannt? Kurzatmigkeit und Reaktion dokumentiert? Datenschutzgespräch erwähnt? Verweigerungs-Doku vollständig (Was + Wie + Entscheidung)? Sprache objektiv-sachlich? Keine wertenden Formulierungen? B1-Schüler: Textbausteine als Hilfe einblendbar. Bloom 6 — Erstellen (originäre Dokumentation). | pflege |
| 6.4 | `dok-04-session-summary` | **summary** | B5 | Session-Zusammenfassung: Was du heute gelernt und geübt hast — Atembeobachtung bei COPD, Kontraktur-Assessment, Schlafanamnese, ambulante Zeitplanung, ethisches Dilemma (Autonomie vs. Prophylaxe), Datenschutz mit Angehörigen, Verweigerungs-Dokumentation nach § 630f BGB. Karteikarten-Preview: 5 Karten für FSRS vorgemerkt (Lippenbremse, Virchow-Trias, Kompressionstherapie, Melatonin/Schlaf, Verweigerungs-Doku). Offene Anschluss-Frage für nächste Session: "Frau Kovač verweigert seit 3 Wochen die Kompressionsstrümpfe. Wann würdest du den Arzt einbeziehen — und warum?" | pflege |

---

## Optionale Steps

| # | Step-Typ | Bloom | Für wen | Inhalt |
|---|----------|-------|---------|--------|
| Opt-6.A | **text** (displayFormat: `quote`) | B2 | B1-Schüler | § 630f BGB in einfacher Sprache: Was muss dokumentiert werden? Wann? Warum ist es wichtig? |
| Opt-6.B | **errorspot** | B4 | Mittlere | Fehlerhafter Eintrag vorgelegt: "Frau K. trinkt zu wenig, ist stur wegen Strümpfe. Atemübung gemacht." — Markiere alle Probleme (zu wenig Infos, wertend "stur", keine Uhrzeit, keine Maßnahme bei Verweigerung). |
| Opt-6.C | **reflection** | B6 | Fortgeschrittene | "Was wäre die professionelle Konsequenz, wenn du die Verweigerung nicht dokumentierst — und drei Tage später entwickelt Frau Kovač eine Beinvenenthrombose?" Offene Reflexion zu Haftung und professioneller Verantwortung. |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| dok-03: Verweigerungs-Doku unvollständig | `pflegedokumentation-verweigerung` | Stufe 3 |
| dok-03: Datenschutzgespräch nicht erwähnt | `pflegedokumentation-datenschutz` | Stufe 3 |
| dok-01: mc falsch (Antwort B/C/D) | `pflegedokumentation-ambulant` | Stufe 2–3 |

---

## Bloom-Progression Phase 6

| Step | Bloom | Begründung |
|------|-------|-----------|
| dok-01 | B5 | Analyse + Transfer: Unterschiede erkennen und Konsequenzen ableiten |
| dok-02 | B5 | Bewerten: Rechtliche Standards auf Situation anwenden |
| dok-03 | B6 | Erstellen: Originäre ambulante Dokumentation schreiben |
| dok-04 | B5 | Synthese: Lerninhalte strukturieren und für Anschluss-Lernen vorbereiten |

**Phase-6-Abschluss:** _"Der Bericht ist fertig. Frau Kovačs Entscheidung ist dokumentiert — respektvoll, vollständig, rechtssicher. Morgen früh liest Kollegin Petra deinen Bericht. Sie weiß dann: Frau Kovač wurde aufgeklärt. Sie hat abgelehnt. Das war ihr Recht. Und morgen wird wieder aufgeklärt."_
