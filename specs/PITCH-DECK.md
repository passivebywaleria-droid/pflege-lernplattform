# Pitch Deck — Pflege-Lernplattform

**Stand:** 2026-03-22

---

## Slide 1: Das Problem

**Deutschland hat 158.000 Pflege-Azubis — aber nicht genug Lehrer.**

- Jede zweite Pflegeschule hat Lehrermangel
- 17.459 Schulplätze stehen leer — nicht weil Bewerber fehlen, sondern Lehrer
- 25-40% brechen die Ausbildung ab
- 20% der Azubis sprechen Deutsch auf B1-Niveau (Berlin: 47%)
- Neue Lehrkräfte? Frühestens 2031.

> Wenn der Lehrer ausfällt, fällt der Unterricht aus. Jeden Tag. In jeder zweiten Schule.

---

## Slide 2: Die Lösung

**Ein KI-Tutor der besser erklärt als die meisten Lehrer — weil er jeden Schüler persönlich kennt.**

Die Plattform deckt den **kompletten theoretischen Lehrplan** der generalistischen Pflegeausbildung ab. Alle 11 Curriculare Einheiten. Alle Lerneinheiten. Alle drei Ausbildungsdrittel.

**Ein Schüler. Ein Gerät. Die komplette theoretische Ausbildung.**

---

## Slide 3: Wie es funktioniert

### Zwei-Achsen-Adaptivität

Jeder Schüler wird auf **zwei Achsen** gemessen — getrennt:

```
Türkischer Schüler, 5 Jahre Pflegehelfer:
  Sprache:    ███░░░░░░░  B1
  Fachwissen: ████████░░  Erfahren
  → Komplexe Fachaufgaben + Sprachförderung

Deutscher Schüler, direkt nach Abi:
  Sprache:    █████████░  Muttersprachler
  Fachwissen: ██░░░░░░░░  Anfänger
  → Grundlagen + keine Sprachförderung
```

Beide sitzen im selben Klassenraum. Beide bekommen eine andere Session.

### KI als Didaktiker

- Erkennt WARUM ein Schüler falsch antwortet (Sprachproblem? Konzeptproblem? Geraten?)
- Hat 6 verschiedene Wege zum selben Lernziel
- Wechselt Strategie wenn ein Weg nicht funktioniert
- Nie negativ, nie frustrierend — Sandwich-Prinzip

### Tagesstruktur

Kein langweiliges Quiz-Tool. Eine Session die einen **ganzen Schultag (8 UE)** trägt:

- Erklärtext → sofort anwenden
- 15+ verschiedene Fragetypen (MC, Zuordnung, Memory, Kreuzworträtsel, Fallbeispiele...)
- Modus wechselt alle 3 Minuten → nie langweilig
- Fallbeispiele mit echten Patienten und Entscheidungen
- Sprechübungen für Fachbegriffe (Whisper Speech-to-Text)
- Karteikarten, Glossar DE/AR/TR

---

## Slide 4: Der Markt

| Kennzahl | Zahl |
|----------|------|
| Pflege-Azubis in Deutschland | **158.000** (Rekord 2025, steigend) |
| Pflegeschulen | **1.339** |
| Schulen mit Lehrermangel | **~50%** |
| Ausländische Azubis | **20%** bundesweit (47% Berlin) |
| Abbruchquote | **25-40%** |
| Adressierbarer Markt | **23,6 Mio. EUR/Jahr** |

**DigitalPakt 2.0** (2025-2030): 5 Mrd. EUR Fördermittel für digitale Infrastruktur an Schulen — Pflegeschulen explizit eingeschlossen.

---

## Slide 5: Wettbewerb

```
                        Ausbildung   Adaptiv   Mehrsprachig   PflBG komplett
                        ─────────    ───────   ────────────   ──────────────
Thieme CNE                  ✗           ✗           ✗              ✗
Elsevier Pflege App         ✗           ✗           ✗              ✗
SuperNurse                  ✗           ✗           ✗              ✗
Pflegecampus                ✗           ✗           ✗              ✗

Unsere Plattform            ✓           ✓           ✓              ✓
```

**Kein einziger Anbieter** deckt den PflBG-Lehrplan für die Berufsausbildung ab. Alle bedienen Weiterbildung oder sind Nachschlagewerke. **Wir sind allein in dieser Nische.**

---

## Slide 6: Geschäftsmodell

**B2B Schullizenz:** 149 €/Schüler/Jahr

| | Konservativ | Mittel | Optimistisch |
|---|---|---|---|
| Marktanteil | 2% | 5% | 10% |
| Schulen | 27 | 67 | 134 |
| Schüler | 3.200 | 7.900 | 15.800 |
| **ARR** | **477.000 €** | **1,18 Mio. €** | **2,35 Mio. €** |

**Break-even:** 1 Schule. Hosting kostet 43 €/Monat.

**Zusätzliche Revenue-Streams (später):**
- Freemium für Einzelschüler (9,99 €/Monat)
- Weiterbildungsmodule für Examinierte
- Prüfungsvorbereitungs-Paket

---

## Slide 7: Produkt-Status

### Was steht

- ✅ Tech-Stack: Next.js 15, TypeScript, Tailwind, PWA-ready
- ✅ 15 interaktive Fragetypen implementiert
- ✅ Content-Pipeline validiert (9-Rollen Didaktik-Loop)
- ✅ CE 05 strukturiert (16 Lektionen, 34 UE, 12-Punkte-Medizinstruktur)
- ✅ LE 03 komplett (3 Sessions, 67 Steps, didaktisch + fachlich geprüft)
- ✅ Lern-Engine mit XP, Glossar, Progress, Bloom-Level

### Was kommt

- 🔨 Content für 15 weitere Lektionen (CE 05) — Pipeline steht
- 🔨 Auth + Datenbank + Nutzerrollen
- 🔨 Einstufungstest (2-Achsen-Adaptivität)
- 🔨 Lehrer-Dashboard
- 🔨 Deployment + PWA + Offline

### Timeline

| Meilenstein | Datum |
|-------------|-------|
| CE 05 Content komplett | Mai 2026 |
| MVP fertig | Juli 2026 |
| Pilot mit 1 Schule | August 2026 |
| Vertriebsstart | Oktober 2026 |

---

## Slide 8: Team

**Gründerin:** Dozentin in der Pflegeausbildung
- Kennt den Markt von innen — unterrichtet selbst
- Kündigt aktuelle Stelle für Vollzeit-Fokus
- Fachliche Review aller Inhalte
- Direkter Zugang zu Pflegeschulen als Vertriebskanal

**Technologie:** KI-gestützte Entwicklung (Claude Code)
- Kompletter Tech-Stack aufgesetzt
- Content-Pipeline automatisiert
- 1 LE in <1 Tag generierbar (mit Qualitätsprüfung)

---

## Slide 9: Warum jetzt?

1. **Lehrermangel ist akut** — verschlimmert sich bis mindestens 2031
2. **DigitalPakt 2.0** gibt Schulen Budget für digitale Tools (2025-2030)
3. **158.000 Azubis** — größte Kohorte aller Zeiten, wächst weiter
4. **KI-Technologie ist reif** — adaptives Lernen war vor 2 Jahren nicht so möglich
5. **Null Wettbewerb** — niemand baut das für die Pflegeausbildung
6. **Gesellschaftlicher Druck** — Pflegenotstand ist Dauerthema, Politik will Lösungen

---

## Slide 10: Die Vision

**Nicht "eine App mit Fragen". Sondern:**

Ein Schüler öffnet morgens die App. Die Plattform weiß wo er steht — sprachlich und fachlich. Sie plant seinen Tag. 8 Unterrichtseinheiten. Abwechslungsreich, nie langweilig, immer auf seinem Niveau. Nach 8 Stunden hat er mehr gelernt als mit den meisten Lehrern.

Am nächsten Tag dasselbe. Und in der nächsten Woche. Und im nächsten Semester.

**Am Ende der Ausbildung ist er prüfungsreif. Ohne je eine Schule von innen gesehen zu haben.**

Das ist kein Ersatz für schlechten Unterricht. Das ist besserer Unterricht.

---

## Anhang: Quellen

Alle Marktzahlen belegt — vollständige Quellenangaben in `specs/MARKTANALYSE.md`

- Destatis (03/2025, 07/2025, 03/2026)
- BIBB-Pflegepanel 2022/2023
- IAB Forschungsbericht 2024
- Bundesagentur für Arbeit 2024
- Statistik Berlin-Brandenburg 2025
- BMBF (DigitalPakt 2.0)
