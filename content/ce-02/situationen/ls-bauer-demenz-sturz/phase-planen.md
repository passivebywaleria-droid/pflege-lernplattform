# Phase 3 — Pflege planen

**situationId:** ls-bauer-demenz-sturz
**Phase:** planen (Phase 3 von 6)
**Zeit:** ~20–30 Min
**Bloom:** B3–B4
**Kern-Frage:** Welche Maßnahmen sind heute und in den nächsten Tagen notwendig — und wer ist zuständig?
**Steps gesamt:** 6 (4 Kern + 2 Optional)

---

## Kontext (~200 Wörter)

Du hast Herr Bauer beobachtet. Du hast Informationen gesammelt. Jetzt musst du entscheiden, was zu tun ist — nicht nach Bauchgefühl, sondern nach System. Der Pflegeprozess verlangt, dass du **Ziele formulierst**, bevor du handelst. Was soll nach einer Woche anders sein als heute?

Drei Problemfelder warten auf deinen Plan:
1. **Sturzgefahr** — Herr Bauer ist letzte Nacht gestürzt. Er wird es wieder tun, wenn nichts geändert wird.
2. **Körperpflege + Kontraktur** — Er lehnt Pflege ab. Ohne Bewegung werden die Kniegelenke steifer.
3. **Trinken + Mundschleimhaut** — 900 ml sind zu wenig. Schleimhaut trocknet aus.

Für jeden dieser Punkte brauchst du: Pflegeziel + konkrete Maßnahme + wer führt es durch.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 3.1 | `plan-01-ziele-formulieren` | **freetext** (mittel, ~3 Sätze je Ziel) | B4 | _"Formuliere für ZWEI der drei Problemfelder je ein messbares Pflegeziel."_ Hinweis: Pflegeziel = Was soll der Patient können/zeigen/erleben in X Tagen — konkret und überprüfbar, nicht "bessere Pflege". Beispiel-Erwartung: "Herr Bauer stürzt in den nächsten 7 Tagen nicht erneut" / "Herr Bauer nimmt täglich mindestens 1300 ml Flüssigkeit zu sich". KI-Feedback prüft: messbar? zeitlich begrenzt? patientenorientiert? **Trigger für Baustein `pflegeprozess-pflegeziele` Stufe 2–3 bei unklaren Formulierungen.** | pflege |
| 3.2 | `plan-02-sturzprophylaxe-massnahmen` | **matching** | B3 | Zuordnung: Welche Sturz-Maßnahme gehört zu welchem Risiko? 5 Paare: [Nachtlicht + Sensor am Bett ↔ Desorientierung nachts], [Niedrigbettposition zur Nacht ↔ Sturzhöhe reduzieren], [Tagesstruktur mit Beschäftigung ↔ Unruhe/Weglauftendenz], [Toilettengang anbieten vor dem Schlafengehen ↔ nächtlicher Harndrang], [rutschfeste Socken ↔ Bodenkontakt bei unerwarteten Aufstehen]. **Trigger für Baustein `sturz-prophylaxe-massnahmen-umgebung` Stufe 2 bei <3 korrekt.** Quelle: _(DNQP Sturzprophylaxe 2022)_. | pflege |
| 3.3 | `plan-03-bewegungsplan` | **sequencing** | B3 | Plane den Bewegungsablauf für die Morgenpflege bei Herrn Bauer. Karten sortieren: [Raum vorbereiten — Pflegemittel bereit, Wärme im Zimmer] → [Kontakt herstellen — Ankündigen, Name nennen] → [Körperpflege mit Basaler Stimulation (beruhigend)] → [passive Kniebewegung während/nach Pflege, max. schmerzfrei] → [Spitzfuß-Prophylaxe: Fußsohle gegen Brett oder Kissen stellen] → [Lagerungskontrolle — Knie nicht dauerhaft flektiert lassen]. Didaktik: Bewegung eingebettet in Pflege statt als separate Maßnahme geplant. | pflege |
| 3.4 | `plan-04-interprofessionell` | **matrix** (3×3) | B4 | Matrix: Welche Berufsgruppe übernimmt welche Maßnahme in welchem Zeitrahmen? Zeilen: Pflege / Physiotherapie / Arzt. Spalten: Sofort (heute) / Diese Woche / Bis Entlassung (nicht anwendbar hier: dauerhaft). Beispiele: Pflege/Sofort: Nachtlicht, Niedrigbett, Trinkplan. Physio/Diese Woche: passives Durchbewegen Knie, Gangschule wenn kooperativ. Arzt/Sofort: Mirtazapin-Dosis prüfen (sediert, erhöht Sturzrisiko), Sturzprotokoll Kenntnis. 6 Karten zuordnen. **Trigger für Baustein `pflegeprozess-interprofessionalitaet` Stufe 2.** | pflege |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 3.5 | `plan-05-trinken-strategie` | **text** (displayFormat: `checklist`) | B3 | B2 + B1 | Erklär-Step: Wie erhöht man die Trinkmenge bei einem Menschen mit Demenz, der nicht auf Aufforderung trinkt? 5 Strategien: 1) Tasse in die Hand geben statt bitten, 2) lieblings-Getränk bereitstellen (hier: Malzbier — aus Biographie bekannt), 3) Trinken im sozialen Kontext (Frühstück), 4) flüssigkeitsreiche Lebensmittel (Suppe, Joghurt), 5) Miktionsprotokoll führen um Tendenz zu erkennen. Quelle: _(DNQP Förderung Harnkontinenz 2014)_. | krankheitslehre |
| 3.6 | `plan-06-freiheitsentziehung` | **truefalse** (3 Aussagen) | B4 | Mittlere + starke Schüler | Rechtliche Einschätzung: 3 Aussagen wahr/falsch. 1) "Ein Bettgitter darf bei Herrn Bauer ohne Genehmigung hochgestellt werden, wenn er in der Nacht weglaufen will." (falsch — § 1831 BGB, richterliche Genehmigung oder Einwilligung des rechtlichen Betreuers) 2) "Ein Niedrigsenkbett ist keine freiheitsentziehende Maßnahme." (wahr — es ist eine Sicherheitsmaßnahme ohne Fixierung) 3) "Sensormatten am Bett lösen Alarm aus, schränken aber die Bewegungsfreiheit nicht ein." (wahr — gelten nicht als Fixierung, aber Einwilligung empfohlen). **Trigger für Baustein `sturz-prophylaxe-rechtliche-grundlagen` Stufe 2–3.** | pflege |

---

## Baustein-Trigger Phase 3

| Trigger | Baustein-ID | Stufe |
|---------|-------------|-------|
| Step 3.1: Pflegeziel nicht messbar | `pflegeprozess-pflegeziele` | 2–3 |
| Step 3.2: <3 korrekt gematcht | `sturz-prophylaxe-massnahmen-umgebung` | 2 |
| Step 3.4: <4 Karten korrekt | `pflegeprozess-interprofessionalitaet` | 2 |
| Step 3.6: falsche Antworten | `sturz-prophylaxe-rechtliche-grundlagen` | Sequencer wählt |

---

## Phase-3-Abschluss

_"Du hast Ziele formuliert und Maßnahmen geplant. Jetzt ist der Moment, wo Theorie auf Praxis trifft: Herrn Bauer muss heute Morgen gepflegt werden — und er lehnt Pflege ab."_
