# Strategie: Vertical Slice First

> **Datum:** 2026-03-21
> **Kontext:** Empfehlung fuer den Uebergang von Recherche- in Build-Phase
> **Kernprinzip:** Eine goldene LE, nicht 38 mittelmassige.

---

## 1. Diagnose: Wo stehen wir?

### Was wir haben (stark):
- 12 Recherchen, 25 Dokumente, 37+ Entscheidungen
- 36 UI-Komponenten + 13 Demo-Seiten
- DB-Schema (13 Tabellen), Auth-System, Layout-Shell
- Klares didaktisches Konzept (6-Phasen-LE, Bloom, Constructive Alignment)
- 7-Phasen Content-Loop definiert

### Was fehlt (kritisch):
- 0 funktionierende Lern-Erfahrungen (Demos sind Schaufenster, kein Laden)
- 0 echte Content-Objekte (keine einzige LE als Inhalt)
- 0 Tests
- Luecke zwischen "schoene Demo" und "Schueler lernt" ist riesig

### Risiken:
- **Ueber-Recherche als Prokrastination** — 12 Recherchen sind wertvoll, aber irgendwann muss geliefert werden
- **Content-Engpass** — 3.000 Objekte fuer MVP, selbst mit KI Monate Arbeit
- **Feature-Creep** — 25 Fragetypen, IRT, TTS, Offline, Mehrsprachigkeit — alles geplant, nichts davon fuer den Beweis noetig

---

## 2. Strategie: Vertical Slice

### Phase 0: Eine perfekte LE (1 Woche)
- 1 LE komplett durchbauen — von Fallbeispiel bis Quiz-Auswertung
- Content-Loop 7 Phasen einmal komplett durchlaufen
- Mock-Daten als JSON, kein DB noetig
- Echte 17-Step-Erfahrung im Browser
- **Ziel:** Ein Schueler kann 15 Minuten lernen

### Phase 1: Lern-Engine (2 Wochen)
- Step-basierte Navigation (echte Logik, nicht Demo)
- 5 Quiz-Typen die funktionieren (MC, Zuordnung, Reihenfolge, Lueckentext, Fallentscheidung)
- Fortschritts-Tracking (lokal erstmal)
- Mobile-first, funktioniert auf dem Smartphone

### Phase 2: Content-Pipeline (parallel, laufend)
- Gruenderin erstellt 3-5 LEs mit KI-Unterstuetzung
- Festes Format: JSON-Schema pro LE
- Qualitaetspruefung nach jeder LE

### Phase 3: Erste Schule (Woche 4-5)
- 5-10 LEs aus CE01 fertig
- Einem echten Kurs geben
- Feedback sammeln
- DANN erst ueber Adaptivitaet, IRT, Gamification nachdenken

---

## 3. Was NICHT sofort gebaut wird

| Feature | Grund | Wann stattdessen |
|---------|-------|------------------|
| Adaptiver Algorithmus (IRT, BKT) | Braucht Daten von echten Schuelern | Nach 100+ Antworten |
| Schulleiter-Dashboard | Es gibt noch keine Schule | Nach erster Schullizenz |
| Mehrsprachigkeit (AR/TR) | Erstmal auf Deutsch perfekt | V1.1 |
| Offline-Modus | Nice-to-have, nicht Launch-kritisch | V1.1 |
| 25 Fragetypen | 5 gute reichen fuer den Start | Iterativ erweitern |
| TTS | Schueler koennen lesen | V1.1 |
| Lehrer-Chat | E-Mail/WhatsApp funktioniert erstmal | Sprint 7 |

---

## 4. Erfolgskriterium

> **Der Vertical Slice ist erfolgreich, wenn:**
> Ein B1-Schueler auf dem Smartphone eine LE in 15 Minuten durcharbeiten kann,
> dabei mindestens 1 Fallbeispiel loest, 3 Quiz-Fragen beantwortet,
> und am Ende sagt: "Das hat mir was gebracht."

---

## 5. Erste LE: Rheuma (CE 05)

Als Proof-of-Concept wird die LE "Menschen mit rheumatischen Erkrankungen pflegerisch unterstuetzen" komplett durch den 7-Phasen Content-Loop gefuehrt. Dies dient als Template fuer alle weiteren LEs.
