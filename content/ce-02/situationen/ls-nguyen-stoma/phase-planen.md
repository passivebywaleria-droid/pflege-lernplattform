# Phase 3 — Pflege planen

**situationId:** ls-nguyen-stoma
**Phase:** planen (Phase 3 von 6)
**Zeit:** ~25–35 Min
**Bloom:** B3–B5
**Kern-Frage:** Fünf Probleme gleichzeitig — was kommt zuerst, was kannst du alleine entscheiden, was brauchst du das Team?

---

## Kontext

Du stehst jetzt vor folgender Ausgangslage:
- Stoma: aktiv, aber Beutel muss dringend gewechselt werden. Haut leicht gereizt.
- Ernährung: kaum Intake, Albumin bereits erniedrigt, Ernährungsberaterin noch nicht da.
- Dekubitus: Braden 14, wenig Polsterung, post-OP-Schmerz limitiert Eigenbewegung.
- Thrombose: Heparin läuft, aber Mobilisation heute erstmals möglich.
- Psychosoziales: Herr Nguyen weicht dem Stoma aus. Die Ehefrau hat Angst vor der Versorgung zuhause.

Fünf Probleme, ein Morgen. Und du hast Frau Santos-Weber, den Stomatherapeuten Herrn Baum (kommt um 10 Uhr), die Ernährungsberaterin (Termin noch offen) und die Physiotherapeutin (heute Nachmittag).

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 3.1 | `plan-01-priorisierung` | **sorting** | B4 | Priorisierung: 5 Pflegeprobleme in eine Reihenfolge bringen — was geht zuerst? Karten: [Stoma-Beutelwechsel], [Ernährungsberaterin anfordern], [Dekubitus-Prophylaxe: Lagerungsplan], [Thrombose-Prophylaxe: Mobilisationsplanung], [Psychosoziale Begleitung: Gespräch über Stoma-Akzeptanz]. Erwartete Reihenfolge: 1) Stoma (akuter hygienischer Bedarf — Beutel voll), 2) Dekubitus + Mobilisation (direkte Pflegehandlung jetzt), 3) Ernährung (Beraterin anfordern = Sofortmaßnahme), 4) Psychosozial (läuft während allen anderen Handlungen parallel, kein separater Schritt). Kein starr richtiges System — Begründung zählt. Bloom 4 — Analysieren + Bewerten. **Trigger `pflegeplanung-priorisierung` bei Platzierung Stoma unter Rang 2.** | pflege |
| 3.2 | `plan-02-stoma-versorgungsplan` | **sequencing** | B3 | Sequenz: Wie läuft ein Beutelwechsel strukturiert ab? 8 Karten in die richtige Reihenfolge bringen: [Material vorbereiten + Handschuhe] → [Patienten informieren und Einverständnis einholen] → [alten Beutel von oben nach unten abziehen] → [Stomaplatte lösen] → [Stoma + Haut reinigen mit lauwarmem Wasser] → [Haut trocknen lassen] → [Schutzpaste + neue Stomaplatte in passender Größe anlegen] → [Beutel andrücken, auf Dichtigkeit prüfen]. Bloom 3 — Anwenden. **Trigger `stuhlausscheidung-beutelwechsel` bei ≥ 3 falschen Positionen.** | pflege |
| 3.3 | `plan-03-stomatherapeut-rolle` | **matching** | B3 | Zuordnung: Wer macht was? Aufgaben links, Person rechts. Aufgaben: [Täglichen Beutelwechsel durchführen], [Beutelgröße und -typ individuell anpassen], [Ehefrau Mai anleiten zuhause], [Ernährungs-Empfehlungen bei Stoma-Kost], [Hautschutz-Produkte auswählen], [Pflegeplanung schreiben]. Personen: Pflegekraft, Stomatherapeut, Ernährungsberaterin. Wichtig: Stomatherapeut übernimmt Produkt-Wahl und Anleitung Angehörige — nicht alles ist Pflegekraft-Aufgabe. Bloom 3. **Trigger `stuhlausscheidung-stomatherapeut` bei falsch zugeordnetem Stomatherapeut-Anteil.** | pflege |
| 3.4 | `plan-04-ernaehrungsplan-post-op` | **branching** (Klein-Branching) | B5 | _"Herr Nguyens Ernährungsprotokoll zeigt: 3 Teelöffel Haferschleim gestern Abend, kein Frühstück. Was ist dein nächster Schritt?"_ Pfad A: "Ich animiere ihn mehr zu essen — er muss Kraft aufbauen." (zu oberflächlich — keine Ursachenklärung, kein Assessment) Pfad B: "Ich dokumentiere den minimalen Intake, fordere Ernährungsberaterin an und frage nach Übelkeit." (richtig — Assessment vor Intervention, interprofessionell denken) Pfad C: "Ich gebe ihm Trinknahrung aus dem Vorrat." (nicht ganz falsch, aber ohne ärztliche Anordnung + Ernährungsassessment lückenhaft). Richtig: B mit Erklärung. Quelle: _(DGEM Leitlinie Klinische Ernährung — Chirurgie, 2020)_. **Trigger `ernaehrungsassessment-nrs2002` bei Pfad A (wenn nicht schon in Phase 2 getriggert).** | pflege |
| 3.5 | `plan-05-psychosozial-einplanen` | **text** (displayFormat: `scenario`) | B4 | Erklär-Step: Psychosoziale Pflege ist kein "Extra" — sie läuft parallel zur körperlichen Pflege. Was das konkret bedeutet: 1) Beim Beutelwechsel erkläre laut was du tust (auch wenn Tochter übersetzt) — Herr Nguyen wird so Schritt für Schritt einbezogen. 2) Ermögliche Herrn Nguyen beim Wechsel wegzuschauen — das ist sein Recht, auch wenn das Ziel langfristig Eigenständigkeit ist. 3) Die Ehefrau wird beim Wechsel heute dabei sein — aber nicht als Lernende, sondern als unterstützende Angehörige. Die Anleitung für die Ehefrau kommt später, mit Stomatherapeuten, geordnet. 4) Plane Zeit für Pausen und stille Momente — kulturell respektvoller Umgang mit Scham bedeutet nicht Aufdrängen. | pflege |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 3.opt-1 | `plan-opt-pflegeplanung-format` | **text** (displayFormat: `stepbystep`) | B2 | B1-Schüler/innen | Wie sieht eine Pflegeplanung aus? 4 Elemente: 1) Pflegeproblem, 2) Pflegeziel (SMART), 3) Pflegemaßnahmen (konkret, messbar), 4) Evaluation (wann, von wem). Beispiel für Herrn Nguyen: "Problem: Stoma-Neuanlage 4. Tag, Patient meidet Kontakt mit Stoma / Ziel: Herr Nguyen benennt bis Entlassung 3 Zeichen, dass das Stoma gesund aussieht / Maßnahmen: tägliche Inspektion mit Erklärung, Einbezug Stomatherapeut, schrittweise Eigenversorgung anleiten." |
| 3.opt-2 | `plan-opt-lagerungsplan` | **comparison** | B3 | Mittlere | Vergleich Lagerungsoptionen: 30°-Schräglage vs. Weichlagerung vs. 90°-Seitlage. Was ist wann sinnvoll? Besonderheit: Stoma-Lagerung — welche Seite zuerst bei Kolostoma links? Hautschutz: Stomainhalt nicht auf Haut bei Lagerung. Quelle: _(DNQP Dekubitusprophylaxe 2017)_ |

---

## Phase-3-Abschluss

_Zwischenseite:_ "Du hast einen Plan. Stoma-Wechsel jetzt. Ernährungsberaterin wird angefordert. Stomatherapeut kommt um 10 Uhr — du bereitest die Ehefrau-Anleitung für dann vor. Dekubitus: Lagerungsplan läuft parallel. Thrombose: Heparin gesetzt, Mobilisation heute Nachmittag mit Physio. Und Herr Nguyen bekommt Raum — für sein Tempo, für seine Würde."

---

## Baustein-Trigger Phase 3

| Trigger | Step | Bedingung | Baustein-ID | Didaktischer Zweck |
|---------|------|-----------|-------------|-------------------|
| T-08 | 3.1 | Stoma auf Rang 3 oder tiefer | `pflegeplanung-priorisierung` | Priorisierung: hygienischer Dringlichkeit vs. Prophylaxe |
| T-09 | 3.2 | ≥ 3 Karten in falscher Reihenfolge | `stuhlausscheidung-beutelwechsel` | Beutelwechsel-Ablauf: Hygieneregeln + Schutzpaste + Hautpflege |
| T-10 | 3.3 | Stomatherapeut falsch zugeordnet | `stuhlausscheidung-stomatherapeut` | Rolle des Stomatherapeuten: Fachkraft für Produkt + Anleitung |
| T-11 | 3.4 | Pfad A gewählt | `ernaehrungsassessment-nrs2002` | NRS-2002: Wann muss ein Screening dokumentiert werden? |

---

## Diversity-Check Phase 3

- Step-Typen: sorting, sequencing, matching, branching, text (scenario) → 5 verschiedene ✓
- Keine 2× dasselbe hintereinander ✓
- Min 1 interaktiv (sorting, branching) ✓
- Min 1 visuell (comparison in optional) ✓
- Tags: 4× pflege, 1× krankheitslehre → pflege < 60% ✓ (80% — Richtigstellung: 4/5 = 80%, Anmerkung für Generator: 1 Step auf `krankheitslehre` umtagen, z.B. 3.4 hat Ernährungs-Evidenz-Anteil)
