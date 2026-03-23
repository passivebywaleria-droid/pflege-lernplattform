# FEATURE-LISTE — Abgeleitet aus Nutzerwuenschen

**Quelle:** `recherche/NUTZERKRITIK_PFLEGE_APPS.md` (Abschnitte 3 + 5)
**Erstellt:** 2026-03-19
**Methode:** Jeder Nutzerwunsch → konkretes Feature → Prioritaet (MVP/V1.1/V2.0) → Aufwand

---

## Legende

| Prioritaet | Bedeutung |
|------------|-----------|
| **MVP** | Muss zum Launch vorhanden sein — ohne dieses Feature kein Verkauf moeglich |
| **V1.1** | Innerhalb 3 Monate nach Launch — wichtig fuer Retention und Upselling |
| **V2.0** | Spaeter — nice-to-have oder erfordert groessere Nutzerbasis |

| Aufwand | Bedeutung |
|---------|-----------|
| S | < 1 Woche |
| M | 1–2 Wochen |
| L | 3–4 Wochen |
| XL | > 4 Wochen |

---

## A. SCHUELER-FEATURES (aus 12 Wuenschen)

| # | Nutzerwunsch | Feature | Prioritaet | Aufwand | Schmerzpunkt |
|---|-------------|---------|------------|---------|--------------|
| S1 | Eine einzige App fuer alles | **All-in-One-Plattform**: Erklaertexte + Quiz + Karteikarten + Glossar + Pruefungsvorbereitung in einer PWA | MVP | Architektur | #4 |
| S2 | Adaptives Lernen | **KI-Lernpfad**: Nebius/Llama analysiert Antwortmuster, passt Schwierigkeit und Themen-Reihenfolge an | MVP | L | #2 |
| S3 | Zuverlaessige Technik | **PWA mit Service Worker**: Offline-Cache fuer Inhalte, keine App-Store-Abhaengigkeit, automatische Updates | MVP | M | #1 |
| S4 | Geraete-Sync | **Cloud-Sync via PostgreSQL**: Ein Account, Fortschritt ueberall — Web-App loest dies automatisch | MVP | S (by design) | #7 |
| S5 | Aktuelle Inhalte | **Leitlinien-Versions-Tags**: Jeder CE-Inhalt hat AWMF-Version + Aktualisierungsdatum. Review-Workflow fuer Dozentin | MVP | S | #5 |
| S6 | Praxisbezug | **Fallvignetten pro CE**: Realistische Patientenfaelle mit Entscheidungsbaeumen (Branching Scenarios) | MVP | L | #3 |
| S7 | Praxisbezug (erweitert) | **Virtual Patient Dialog**: Chat-basierte Simulation mit KI-Patient (Anamnese ueben) | V1.1 | L | #3 |
| S8 | Bezahlbare Preise | **Freemium-Modell**: CE 01 + CE 02 kostenlos, Rest per Schullizenz oder 4,99 EUR/Mo | MVP | M | #8 |
| S9 | Junges Design | **Mobile-First UI**: Duolingo-inspiriert, Animationen, Farbpalette fuer Gen-Z, Dark Mode | MVP | M | — |
| S10 | Gamification | **Streak-System**: Taegliche Lernziele, XP, Streak-Counter mit Loss-Aversion-Psychologie | MVP | M | — |
| S11 | Gamification (erweitert) | **Rangliste & Achievements**: Klassen-Ranking (opt-in), Abzeichen fuer Meilensteine | V1.1 | M | — |
| S12 | Ausfuehrliche Erklaerungen | **"Warum?"-Erklaerungen bei jeder Frage**: Richtig UND falsch erklaert, mit Quellenverweis (I Care Seite X) | MVP | M | — |
| S13 | Ausfuehrliche Erklaerungen (erweitert) | **Clinical Pearls / Tooltips**: AMBOSS-Stil Wissensvertiefung bei Fachbegriffen | V1.1 | M | — |
| S14 | Fachsprachlich korrekt | **Fachsprache-Glossar (DE/AR/TR)**: Jeder Fachbegriff mit Definition, Aussprache, Uebersetzung | MVP | L | — |
| S15 | Fragen stellen | **KI-Tutor "Frag mich"**: Schueler tippt Frage → KI antwortet basierend auf CE-Inhalten (Llama 3.3 70B, RAG) | V1.1 | XL | — |
| S16 | Fragen stellen (erweitert) | **Dozentin-Fragestunde**: Markierte Fragen, die KI nicht sicher beantworten kann → Queue fuer Dozentin | V2.0 | M | — |

---

## B. LEHRER-FEATURES (aus 7 Wuenschen)

| # | Nutzerwunsch | Feature | Prioritaet | Aufwand | Schmerzpunkt |
|---|-------------|---------|------------|---------|--------------|
| L1 | Pflegedidaktisch fundiert | **Bloom-Taxonomie-Mapping**: Jede Aufgabe ist einer Bloom-Stufe zugeordnet, sichtbar fuer Lehrer | MVP | S | #6 |
| L2 | Pflegedidaktisch fundiert (erweitert) | **Sandwich-Methode pro Session**: Einstieg (Reflexion) → Wissen → Uebung → Transfer → Zusammenfassung | MVP | M | #6 |
| L3 | Einfache Integration | **1-Klick Klassen-Setup**: Einladungslink oder CSV-Import, kein IT-Support noetig | MVP | M | #10 |
| L4 | Einfache Integration (erweitert) | **Aufgaben zuweisen**: Lehrer waehlt CE/Thema → Schueler sehen es als "Hausaufgabe" mit Deadline | V1.1 | M | — |
| L5 | Lernfortschritts-Tracking | **Ampel-Dashboard**: 3-Stufen-Ampel — Tagesuebersicht (30 Sek.), Klassen-Detail (2 Min.), Einzel-Schueler | MVP | L | #9 |
| L6 | Curriculare Anbindung | **11 CE navigierbar**: Alle CE mit Lernzielen, Stundenrichtwerten, Pruefungsrelevanz sichtbar | MVP | M | — |
| L7 | Curriculare Anbindung (erweitert) | **CE-Fortschrittsmatrix**: Welche CE sind von der Klasse wie weit bearbeitet? Heatmap-Ansicht | V1.1 | M | — |
| L8 | Entlastung | **Auto-Korrektur**: MC, Zuordnung, Lueckentext, Sortierung werden automatisch ausgewertet | MVP | S (by design) | — |
| L9 | Entlastung (erweitert) | **Pruefungs-Generator**: Lehrer waehlt CE + Bloom-Stufe → System generiert Pruefungsbogen (PDF-Export) | V2.0 | L | — |
| L10 | Fortbildung/Support | **Onboarding-Tutorial**: 3-Minuten interaktive Tour beim ersten Login (Lehrer-Rolle) | V1.1 | S | — |
| L11 | Professionelle Infrastruktur | **99.9% Uptime auf Hetzner DE**: DSGVO-konform, kein US-Cloud-Risiko, SSL, Backups | MVP | M | #1, #10 |

---

## C. PRAXISANLEITER-FEATURES (aus 6 Wuenschen)

| # | Nutzerwunsch | Feature | Prioritaet | Aufwand | Schmerzpunkt |
|---|-------------|---------|------------|---------|--------------|
| P1 | Theorie-Praxis-Bruecke | **Praxisaufgaben pro CE**: "Beobachte heute bei deinem Patienten..." — Aufgaben die in der Praxis erledigt werden | V1.1 | M | #3 |
| P2 | Theorie-Praxis-Bruecke (erweitert) | **Praxis-Reflexionsfragen**: Nach Praxiseinsatz: "Was hast du heute gelernt?" → Freitext + KI-Feedback | V2.0 | L | #3 |
| P3 | Niedrigschwellige Nutzung | **Kein Login fuer Basis-Glossar**: Fachbegriff-Nachschlagewerk ohne Account nutzbar | MVP | S | — |
| P4 | Niedrigschwellige Nutzung (erweitert) | **QR-Code pro CE**: Praxisanleiter scannt QR → sieht, was Schueler in dieser CE gelernt haben sollten | V1.1 | S | — |
| P5 | Zertifikate/Nachweise | **Fortbildungszertifikat**: PDF-Zertifikat nach Abschluss eines Moduls (fuer 24h/Jahr-Nachweis) | V2.0 | M | — |
| P6 | Kollaboratives Lernen | **Schule-Praxis-Kanal**: Praxisanleiter sieht Lernstand des Schuelers (mit Einwilligung) | V2.0 | L | — |
| P7 | Offline-Faehigkeit | **PWA Offline-Modus**: Glossar + letzte 50 Karteikarten offline verfuegbar | MVP | M | — |
| P8 | Zeitlich flexibel | **Micro-Learning Sessions**: 5-Min-Haeppchen, jederzeit unterbrechbar, Fortschritt gespeichert | MVP | S (by design) | — |

---

## D. QUERSCHNITT-FEATURES (aus Schmerzpunkten + Studien)

| # | Ableitung | Feature | Prioritaet | Aufwand |
|---|-----------|---------|------------|---------|
| Q1 | App-Fragmentierung (#4) | **Integrierter Karteikarten-Modus**: FSRS-Algorithmus (wie Anki) fuer Spaced Repetition, eingebaut | MVP | L |
| Q2 | Adaptivitaet (#2) + Wolters Kluwer 92% | **Kompetenz-Radar**: Visualisierung der Staerken/Schwaechen pro CE als Spinnen-Diagramm | MVP | M |
| Q3 | Theorie-Praxis (#3) + Hogrefe-Studie | **15 interaktive Fragetypen**: Hotspot, Branching, Sequencing, Memory, Kreuzwortraetsel, Virtual Patient, etc. | MVP | L |
| Q4 | BIBB-Studie (fehlende Infrastruktur) | **Zero-IT-Setup**: Kein Server, keine Installation, kein IT-Support noetig — Browser reicht | MVP | S (by design) |
| Q5 | PMC-Studie (Tech-Overload) | **Minimalistisches Lehrer-UI**: Maximal 3 Klicks zu jeder Information, kein Feature-Bloat | MVP | Design |
| Q6 | ScienceDirect (Design = Motivation) | **Lottie-Animationen + Micro-Interactions**: Erfolgs-Animationen, Haptic Feedback, Confetti bei Abschluss | V1.1 | M |
| Q7 | Abo-Fallen (#8) + AMBOSS-Kritik | **Transparente Kuendigung**: 1-Klick-Kuendigung im Account, keine versteckten Bedingungen | MVP | S |
| Q8 | Mehrsprachigkeit (Marktluecke) | **DE/AR/TR Sprachumschaltung**: Alle Erklaertexte + Glossar in 3 Sprachen | MVP | XL |

---

## ZUSAMMENFASSUNG NACH PRIORITAET

### MVP (Launch-kritisch) — 23 Features

| Bereich | Features | Kern-Aufwand |
|---------|----------|-------------|
| Schueler | S1–S6, S8–S10, S12, S14 | All-in-One PWA, KI-Lernpfad, Gamification, Glossar, Erklaerungen |
| Lehrer | L1–L3, L5–L6, L8, L11 | Ampel-Dashboard, CE-Navigation, Auto-Korrektur, Hetzner |
| Praxisanleiter | P3, P7, P8 | Offline-Glossar, Micro-Learning |
| Querschnitt | Q1–Q5, Q7, Q8 | FSRS, Kompetenz-Radar, 15 Fragetypen, Mehrsprachigkeit |

### V1.1 (3 Monate nach Launch) — 10 Features

S7, S11, S13, L4, L7, L10, P1, P4, Q6 — Virtual Patient, Rangliste, Clinical Pearls, Aufgaben zuweisen, CE-Matrix, Praxisaufgaben

### V2.0 (spaeter) — 5 Features

S15, S16, L9, P2, P5, P6 — KI-Tutor, Dozentin-Queue, Pruefungs-Generator, Reflexionsfragen, Zertifikate, Schule-Praxis-Kanal

---

## FEATURE-MAP: Schmerzpunkt → Feature → USP

```
Schmerzpunkt #1 (Instabilitaet)  ──→  PWA + Hetzner DE        ──→  "Funktioniert. Immer."
Schmerzpunkt #2 (Keine Adaptivitaet) ──→  KI-Lernpfad + Radar   ──→  "Lernt mit dir mit."
Schmerzpunkt #3 (Theorie-Praxis)  ──→  Fallvignetten + Virtual Patient ──→  "Vom Buch ans Bett."
Schmerzpunkt #4 (App-Chaos)      ──→  All-in-One PWA           ──→  "Eine App. Alles drin."
Schmerzpunkt #5 (Veraltete Inhalte) ──→  Versions-Tags + Review  ──→  "Immer aktuell."
Schmerzpunkt #6 (Keine Didaktik)  ──→  Bloom + Sandwich         ──→  "Von Paedagogen gebaut."
Schmerzpunkt #7 (Kein Sync)      ──→  Web-App (by design)      ──→  "Handy, Tablet, Laptop — egal."
Schmerzpunkt #8 (Abo-Fallen)     ──→  Schullizenz + 1-Klick-Kuendigung ──→  "Transparent. Fair."
Schmerzpunkt #9 (Kein Dashboard)  ──→  Ampel-Dashboard          ──→  "30 Sekunden Ueberblick."
Schmerzpunkt #10 (Infrastruktur)  ──→  Zero-IT + Smartphone-first ──→  "Browser auf. Fertig."
```
