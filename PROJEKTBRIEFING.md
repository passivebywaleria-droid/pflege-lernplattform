# PROJEKTBRIEFING — Pflege-Lernplattform
**Version:** 2.8 (+ Nutzerkritik + Feature-Liste + Sprint-Plan)
**Erstellt:** 2026-03-16
**Letzte Aenderung:** 2026-03-19 (Nutzerkritik → 38 Features → 8-Sprint-Plan: MVP in 16 Wochen mit 23 Features)
**Grundlage:** Alle 4 Phase-1-Ergebnisse + Klaerungen-Dialog + Pivot-Recherche + Foerderungs-Recherche + UI/UX-Analyse + Gruenderin-Interview (2026-03-18) + Nutzerkritik + Feature-Liste + Sprint-Plan (2026-03-19)
**Status:** ALLE OFFENEN FRAGEN GEKLAERT — Bereit fuer Build-Start

> **PIVOT-HINWEIS (2026-03-17, aktualisiert Iteration 006):** Dieses Briefing wurde fundamental ueberarbeitet. Die Plattform wird von B2C-Lern-App zu B2B-Infrastrukturloesung fuer Pflegeschulen mit Lehrermangel repositioniert. **Iteration 006 ergaenzt:** UI/UX-Referenzanalyse von 7 erfolgreichen Lernplattformen (Duolingo, Khan Academy, Brilliant, AMBOSS, Quizlet, Anki, Coursera) — Design-Patterns fuer MVP definiert (Mastery, Streak, FSRS, Clinical Pearls, Tooltips, Aufgaben-Mix, Flip-Karten). UI-Bibliothek: shadcn/ui + Tremor + dnd-kit. Iteration 005: Echte Wettbewerber-Preise (149€ vertretbar), bundesweite Mangel-Zahlen (~3.000-4.000 fehlend, nur 63 Absolventen/Jahr), Kaufprozess (Direktvergabe OK, PflAFinV-Refinanzierung), DSGVO (Hosting-Migration Vercel→Hetzner noetig), Foerderung in Wohlverhaltensphase (UG empfohlen, Gruendungsstipendium NRW 14.400€). Iteration 003: Rechtliche Absicherung (§ 2 Abs. 4 PflAPrV), Massnahmen gegen Paedagogenmangel. Iteration 002: Inverted-Classroom-Modell, Lernbegleiter-Dashboard, B2B-first Break-Even. Vollstaendige Pivot-Recherche: `recherche/PIVOT_RECHERCHE.md`. Personas und Rollenmatrix: `recherche/paedagogik/ERGEBNIS.md` Abschnitte 4.9–4.12.

---

## 1. EXECUTIVE SUMMARY

Es wird eine digitale Lernplattform fuer die generalistische Pflegeausbildung nach PflBG 2020 gebaut, die Pflegeschulen mit Lehrermangel handlungsfaehig haelt. **Primaere Zielgruppe sind Schulleitung und Schultraeger** (1.339 Pflegeschulen DE, Destatis 2023), die strukturellen Lehrermangel haben: **~3.000-4.000 Pflegepaedagogen fehlen bundesweit** (Hochrechnung aus NRW-Daten), bei nur **63 neuen Master-Absolventen pro Jahr** (Destatis 2023) und einer Ausbildungsdauer von 8-9 Jahren ist der Mangel nicht behebbar. 50% aller Pflegeschulen finden Lehrkraftgewinnung problematisch (BIBB-Pflegepanel), nur 54% der 100.000 Ausbildungsplaetze sind besetzt. Die Plattform ermoeglicht **Inverted-Classroom-/Blended-Learning-Modell**: Schueler erarbeiten Theorie selbstgeleitet ueber die Plattform, der verbleibende Dozent wird zum Lernbegleiter. **Rechtlich abgesichert:** § 2 Abs. 4 PflAPrV kodifiziert E-Learning und selbstgesteuertes Lernen explizit als Lehrformat — ohne Prozent-Obergrenze. Eine Lehrkraft kann so 20–30% mehr Schueler effektiv begleiten — was einer Kosteneinsparung von 17.000–25.500 €/Jahr gegenueber einer Vollzeitstelle entspricht (Value-Based-Pricing-Logik). **Primaeres Preismodell: B2B 149 €/Schueler/Jahr** (am oberen Rand vs. Wettbewerb, aber vertretbar: AMBOSS+Novaheal kostet B2C bereits 144€; nur 1,4% der Ausbildungspauschale; **refinanzierbar ueber PflAFinV Pos. 3.2 + 3.7**). Break-Even ab 1 zahlender Schule. **Keine Ausschreibung noetig** — 9.000€/Jahr liegt unter jeder Direktvergabe-Grenze. Sekundaer: B2C Freemium (4,99 €/Mo) als Akquisitionskanal, der B2B treibt. Die Plattform bildet die 11 Curricularen Einheiten (CE) des BIBB-Rahmenlehrplans ab und hebt sich durch vier belegte Marktluecken vom Wettbewerb ab: (1) Lehrermangel-Loesung mit ROI-Nachweis, (2) KI-adaptives Lernen fuer selbstgesteuertes Arbeiten, (3) bilinguale Pflegeinhalte (DE/AR/TR) fuer internationale Azubis, (4) Freemium-Direktzugang als B2B-Trichter. **Marktluecke bestaetigt:** Alle bisherigen politischen Massnahmen (§ 9 PflBG Uebergangsregel, 120 neue Studienplaetze NRW, Digitalpakt 2.0) setzen auf MEHR MENSCHEN — keine einzige auf Technologie als Skalierungsloesung. KI-gestuetztes Lernen wird laut BIBB DigiK-Part "kaum eingesetzt". **DSGVO-kritisch:** Hosting muss auf Hetzner Cloud (DE) migriert werden — Vercel (US/CLOUD Act) ist Deal-Breaker fuer Schulen. Compliance-Budget: ~3.000-5.000€. **Gruendung:** UG (haftungsbeschraenkt) empfohlen, auch in Wohlverhaltensphase moeglich. Foerderung: Gruendungsstipendium NRW (14.400€), Forschungszulage (bis 27.000€/Jahr), BAFA-Beratung (80% Zuschuss). Bootstrap-Budget: ~800€ Monat 1, dann ~90€/Mo laufend. Die Gruenderin ist selbst Dozentin an einer Pflegeschule und bringt fachliche Autoritaet, Unterrichtsmaterialien und einen direkten Pilotkunden mit — ein struktureller Vorteil gegenueber tech-first Wettbewerbern ohne Pflegebranchenkenntnis. **Update 2026-03-19:** Nutzerkritik-Recherche + Feature-Ableitung abgeschlossen. 25 Nutzerwuensche → **38 konkrete Features** (23 MVP, 10 V1.1, 5 V2.0). 10 Schmerzpunkte → 10 USP-Claims. Alle 4 Marktluecken durch Nutzerfeedback bestaetigt. Details: Abschnitt 3a (Feature-Liste) + Abschnitt 4.2 (Nutzerkritik) + `specs/FEATURE_LISTE.md` + `recherche/NUTZERKRITIK_PFLEGE_APPS.md`. **Update 2026-03-18:** Gruenderin kuendigt aktuelle Schulstelle fuer Vollzeit-Fokus auf das Projekt. Ihre aktuelle Schule war vom Konzept begeistert (erste Marktvalidierung). Lehrbuch bestaetigt: I Care (Georg Thieme Verlag) + weitere wissenschaftliche Quellen. Eigene Materialien + I Care PDFs vorhanden. Gamification und interaktives Lernen bestaetigt. Mobile-First-Design zwingend (alle Schueler haben Smartphone). Preismodell-Update: Monatsabo teurer als Jahresabo, 6 Monate Kuendigungsfrist. Alle Schulen per E-Mail erreichbar — Testphase als Vertriebsstrategie.

---

## 2. PAEDAGOGISCHES KONZEPT

### 2.0 Inverted-Classroom-Modell (Kern des B2B-Angebots)

> **Pivot-Ergaenzung (2026-03-16, Iteration 002):** Das Inverted-Classroom-Modell ist das paedagogische Rueckgrat der B2B-Positionierung. Es erklaert, WARUM die Plattform eine Lehrermangel-Loesung ist — nicht nur ein digitales Lehrbuch.

**Prinzip:** Schueler erarbeiten Theorie (Bloom 1-3) selbststaendig ueber die Plattform VOR der Praesenzzeit. Der Lernbegleiter nutzt die Praesenzzeit fuer Vertiefung, Fallbesprechung, Reflexion und Praxis (Bloom 3-6). Die formelle Unterrichtsverantwortung verbleibt beim qualifizierten Lernbegleiter (§ 9 PflBG).

**Rollenverteilung:**

| Phase | Plattform | Lernbegleiter |
|---|---|---|
| Selbstlernphase (vor Praesenz) | Erklaertexte, Lernvideos, adaptive Quizzes, Glossar, Spaced Repetition | Aufgaben zuweisen, Dashboard pruefen |
| Praesenzzeit | Liefert Daten (wer hat Luecken?), Fallvignetten als Diskussionsgrundlage | Moderiert Diskussion, Skills Lab, Reflexion, individuelle Foerderung |
| Nachbereitung | Automatische Wiederholung schwacher Themen, Pruefungsvorbereitung | Kommentiert Reflexionsfragen, plant Foerdergespraeche |

**Kapazitaetseffekt:** Durch Auslagerung der Wissensvermittlung + automatisierte Korrektur + Fortschritts-Tracking kann eine Lehrkraft 20-30% mehr Schueler effektiv begleiten. Dies ist die Grundlage des Value-Based-Pricing (149-199 EUR/Schueler/Jahr). Vollstaendige Rollenmatrix und Evidenz: `recherche/paedagogik/ERGEBNIS.md` Abschnitte 4.10-4.11; Inverted-Classroom-Studien Pflegeausbildung: `recherche/PIVOT_RECHERCHE.md` Abschnitte 2.1 (Studie 5: GMS Journal 2016, Studie 6: FernUni Hagen).

**Lernbegleiter-Dashboard (minimalistisch):** 3-Stufen-Ampel-System — Tagesuebersicht (30 Sek.), Klassen-Detail (2 Min.), Einzel-Schueler (bei Bedarf). Kein komplexes LMS, sondern operatives Werkzeug fuer uebelastete Lehrkraefte. Detaillierte Anforderungen: `recherche/paedagogik/ERGEBNIS.md` Abschnitt 4.11.

---

### 2.1 CE-Reihenfolge und MVP-Priorisierung

Der BIBB-Rahmenlehrplan (§ 53 PflBG) gliedert die Ausbildung in 11 Curriculare Einheiten (CE) mit insgesamt 2.100 Theorie-Stunden. Sie folgen einem Spiralcurriculum: Grundthemen aus dem 1. Drittel kehren in hoeherer Komplexitaet im 2. und 3. Drittel zurueck.

**V1.0-Priorisierung (4+ vollstaendige CE + 11 strukturelle Skeletons, aktualisiert 2026-03-18):**

> **Gruenderin-Entscheidung:** Mehrere CE sollen gleichzeitig mit parallelen Agenten bearbeitet werden. Startpunkt: CE 01, 02, 05, 06 wie empfohlen, aber parallel statt sequentiell.

Alle 11 CE sind in der App navigierbar (Lernpfad sichtbar, Pruefungsrelevanz-Matrix einsehbar, Glossar-Grundstruktur vorhanden). Vollstaendige Inhalte (Erklaertexte, Quiz, Fallvignetten, Glossar, Bloom-Stufen-Aufgaben) fuer diese 4 CE (parallel entwickelt):

| Prioritaet | CE | Titel | Zeitrichtwert | Begruendung |
|---|---|---|---|---|
| 1 | CE 01 | Ausbildungsstart: Pflegefachfrau werden | 70 h | Pflicht-Einstiegsmodul, identitaetsstiftend, motivationskritisch |
| 2 | CE 02 | Bewegung und Selbstversorgung | 180 h | Groesste CE im 1. Drittel, Pruefungstag 1 SEHR HOCH, Praktisch HOCH |
| 3 | CE 05 | Kurative Prozesse und Patientensicherheit | 340 h | Groesste CE gesamt, Pruefungstag 3 SEHR HOCH, Praktisch SEHR HOCH |
| 4 | CE 06 | In Akutsituationen sicher handeln | 120 h | Sicherheitskritisch, Pruefungstag 3 SEHR HOCH, Praktisch SEHR HOCH |

CE 03, 04, 07–11: Strukturell vorhanden, Inhalt mit "In Vorbereitung"-Label, Glossar-Grundstruktur aktiv.

**Begruendung der Reihenfolge:**
CE 01 gibt Orientierung (alle Ausbildungsjahre). CE 02 deckt das 1. Ausbildungsdrittel ab (neue Schueler). CE 05 + CE 06 sind die pruefungsrelevantesten CE ueberhaupt und sprechen Schuler kurz vor dem Examen an. Zusammen decken diese 4 CE alle 3 schriftlichen Pruefungstage ab.

---

### 2.2 Bloom-Taxonomie und Lerndesign

**Methodenmatrix pro Aufgabentyp:**

| Lernziel-Typ | Bloom-Stufe | Methode in Plattform | Adaptivitaets-Mechanismus |
|---|---|---|---|
| Faktenwissen (Anatomie, Medikamente) | 1–2 | Luckentext, Multiple Choice | Spaced Repetition nach Fehlerquote |
| Verfahrenswissen (Pflegeschritte) | 2–3 | Geordnete Schritte, Bildaufgaben | Wiederholung bei < 80% Korrektheit |
| Anwendungswissen (Fallvignette) | 3–4 | Fallbasierte Situationsaufgabe | Fallkomplexitaet steigt mit Leistung |
| Analytisches Denken (Prioritaeten) | 4–5 | Triage-Aufgaben, Fallentscheidung | Unlockable Hard Cases |
| Reflexion/Berufsethos | 5–6 | Offene Reflexionsfragen | Nicht algorithmisch messbar — manuelles Review |

**Designprinzipien:**
- Jede CE beginnt auf Bloom 1–2 (Recall), eskaliert zu Bloom 3–4 (Anwenden/Analysieren). Bloom 5–6 nur am CE-Ende als optionale Reflexionsmodule.
- Mastery-Learning-Schwelle: Schuler muss >= 80% Korrektheit pro Themenblock erreichen, bevor naechstes Schwierigkeitslevel freigeschaltet wird.
- Micro-Learning-Units: max. 15 Minuten pro Session (reale Lernfenster von Pflegeazubis: 10–20 Min.) **Bestaetigt:** Gruenderin wuenscht Lernzeit-Steuerung (persoenliches Tagesziel, Session-Timer)
- **Mobile-First-Design (bestaetigt 2026-03-18):** Alle Schueler haben Smartphone, viele Tablet, wenige Laptop. WLAN oder mobiles Netz vorhanden. Touch-optimierte UI ist Pflicht.
- Fallvignetten-Anteil: Mindestens 30% aller Aufgaben pro CE muss fallbasiert sein (entspricht Pruefungsformat)
- Spiralcurriculum-Abbildung: CE-Themen mit Mehrfach-Vorkommen (CE 04, CE 05) werden auf unterschiedlichen Bloom-Stufen erneut abgefragt — nicht nur wiederholt.

---

### 2.3 B1-Anforderungsprofil fuer internationale Schuler

**Sprachliche Ausgangslage:**
Ca. 20% aller Pflegeazubis in Deutschland haben auslaendische Staatsbuergerschaft (Berlin: 36%). Rechtliche Mindestanforderung: B1 (telc B1/B2 Pflege oder Goethe Test pro Pflege). Praxis: Klassen mit A2 bis B2 gleichzeitig.

**Haeufigstes Herkunftslaender (Recherche 2026-03-18, belegt):**
Top-Herkunftslaender nach Anerkennung auslaendischer Pflegeabschluesse (Destatis 2023):
1. **Tuerkei** — 10% aller Anerkennungen (6.600 Fälle), groesste Einzelnation
2. **Bosnien-Herzegowina** — 7% (4.500)
3. **Philippinen** — 7% (4.500)
4. **Tunesien** — 4.300
5. **Syrien** — 3.300
6. **Indien** — 3.300
7. **Ukraine** — 3.000
8. **Rumaenien, Polen, Kroatien** (EU-Freizuegigkeit)
Quelle: Destatis Pressemitteilung PD24_346_212, IAB Forschungsbericht 2024

**Sprach-Priorisierung bestaetigt:** DE (alle) > AR (Syrien, Tunesien, Marokko, Irak) > TR (groesste Einzelnation bei Anerkennungen). Die gewahlte DE/AR/TR-Strategie deckt die drei relevantesten Sprachgruppen ab.

**DaZ-Herausforderungen in der Pflege:**

| Bereich | Herausforderung | Plattform-Loesung |
|---|---|---|
| Pflegefachsprache | Medizinische Latein/Griechisch-Termini ohne L1-Entsprechung | Glossar mit AR/TR-Uebersetzung + Hover-Erklaerung |
| Dokumentationssprache | Formalisierter Pflegebericht-Stil | Erklaertexte in B1, separate Einheit "Prufungssprache" |
| Aufgabentexte | Nominalisierungen, Passiv, Konjunktiv II in Prufung | Leichte-Sprache-Toggle fur Aufgabentexte |
| Fachvokabular-Retention | Mindestens 7 Kontexte fuer echten Erwerb benoetigt | Spaced Repetition stellt Wiederholung sicher |
| Prufungssprache | Fallvignetten mit komplexen Satzkonstruktionen | Separate Einheit "Prufungssprache verstehen" je CE |

**Konkrete Plattform-Anforderungen (B1-Modus):**
- Jeder Fachbegriff hat einen Glossar-Eintrag: Deutsch-Definition + Arabisch + Tuerkisch
- Aufgabentexte: Standard-Sprache (B1) als Default, Leichte-Sprache-Toggle fuer A2-Nutzer
- Hover-Erklaerung auf allen markierten Fachbegriffen im Erklaertext
- Optional: Audio-Vorlese-Funktion fuer Aufgabentexte (Text-to-Speech)
- Separate CE-Untereinheit: "Prufungssprache verstehen" (Grammatik-Erklaerungen, Ubungsaufgaben)

---

### 2.4 Pruefungsrelevanz-Matrix

**Staatliche Abschlussprufung (PflAPrV §§ 14–16 — KORRIGIERT Iteration 6, frühere Angaben §§ 7–9 waren falsch):**

| Prufungsteil | Format | Dauer | Rechtsgrundlage | Kompetenzschwerpunkte |
|---|---|---|---|---|
| Schriftlich Tag 1 | 3 Aufsichtsarbeiten (Fallaufgaben) | je 120 Min. | § 14 Abs. 1 PflAPrV | I.1, II.1, I.5, I.6 + IV |
| Schriftlich Tag 2 | 3 Aufsichtsarbeiten (Fallaufgaben) | je 120 Min. | § 14 Abs. 1 PflAPrV | I.2, II.2, V.1 |
| Schriftlich Tag 3 | 3 Aufsichtsarbeiten (Fallaufgaben) | je 120 Min. | § 14 Abs. 1 PflAPrV | I.3, I.4, III.2, II.3 |
| Mundlich | Einzelfall + Berufsrollen-Reflexion + Vorbereitungszeit | min. 30, max. 45 Min. | § 15 Abs. 1 PflAPrV | Bereiche III, IV, V (Anlage 2) |
| Praktisch | Pflegeplan schriftlich + Fallpräsentation (max. 20 Min.) + Pflege + Reflexion (max. 20 Min.) | max. 240 Min. gesamt | § 16 Abs. 1 PflAPrV | Alle Bereiche I–V; vorbehaltene Tätigkeiten § 4 PflBG |

**CE-zu-Pruefungstag-Mapping:**

| CE | Tag 1 | Tag 2 | Tag 3 | Mundlich | Praktisch |
|---|---|---|---|---|---|
| CE 01 | — | — | — | HOCH | — |
| CE 02 | SEHR HOCH | — | — | MITTEL | HOCH |
| CE 03 | MITTEL | — | — | HOCH | MITTEL |
| CE 04 | — | SEHR HOCH | — | MITTEL | MITTEL |
| CE 05 | — | — | SEHR HOCH | MITTEL | SEHR HOCH |
| CE 06 | — | — | SEHR HOCH | MITTEL | SEHR HOCH |
| CE 07 | HOCH | — | — | MITTEL | HOCH |
| CE 08 | HOCH | — | MITTEL | SEHR HOCH | HOCH |
| CE 09 | HOCH | MITTEL | — | HOCH | MITTEL |
| CE 10 | MITTEL | — | — | MITTEL | HOCH |
| CE 11 | — | MITTEL | — | SEHR HOCH | HOCH |

**Kernaussage fuer Plattform-Design:**
Die schriftliche Prufung ist ausschliesslich fallbasiert (Case-Based Assessment). Alle Lerneinheiten muessen Fallvignetten-Formate enthalten, die mindestens zwei Patientengenerationen zeigen und Kompetenzschwerpunkte I–V sequenziell abfragen.

**Prüfungsvorbereitung-Support (Iteration 7):**
Die Plattform unterstuetzt die letzten 8 Wochen vor dem Examen durch: (1) Prüfungsbereich-Filter (Tag 1/2/3/Mündlich/Praktisch), (2) adaptiven Prüfungsmodus (Bloom 3–5), (3) 120-Min.-Fallvignetten-Simulation, (4) Glossar-Offline-Export. Detaillierte 8-Wochen-Timeline und vollständige Kompetenzbereich-Matrix mit Anlage-2-Zuordnung: voir `recherche/paedagogik/ERGEBNIS.md` Abschnitte 4.6–4.7 (hinzugefügt Iteration 7).

**Muster-Fallvignetten (Iteration 6+7):**
- CE 02: Herr Karl Brandner, 79 J., Oberschenkelhalsbruch post-OP, Geriatrie — Prüfungstag 1 (I.1, II.1) → paedagogik/ERGEBNIS.md §4.4
- CE 05: Frau Aynur Demir, 52 J., Appendektomie post-OP mit DM2-Komorbidität, Chirurgie — Prüfungstag 3 (I.1, I.3, I.4, II.1, IV) → paedagogik/ERGEBNIS.md §4.5

---

### 2.5 Rechtliche Zulaessigkeit digitaler Unterrichtsformate (Iteration 003)

> **Kernbefund:** E-Learning in der Pflegeausbildung ist EXPLIZIT ERLAUBT — und zwar ohne feste Prozent-Obergrenze. Das ist der rechtliche Gamechanger fuer den B2B-Pitch.

**§ 2 Abs. 4 PflAPrV — Exakter Wortlaut:**

> *"Lehrformate, die selbstgesteuertes Lernen oder E-Learning beinhalten, koennen als paedagogische Hilfsmittel bei der Konzeption des theoretischen und praktischen Unterrichts in einem angemessenen Umfang beruecksichtigt werden."*

**Was das bedeutet:**

| Frage | Antwort | Quelle |
|---|---|---|
| Ist E-Learning erlaubt? | **JA** — explizit als "paedagogisches Hilfsmittel" kodifiziert | § 2 Abs. 4 PflAPrV |
| Gibt es eine Prozent-Obergrenze? | **NEIN** — "angemessener Umfang" ist bewusst offener Rechtsbegriff | § 2 Abs. 4 PflAPrV |
| Wer konkretisiert? | "Das Naehere regeln die Laender" | § 2 Abs. 4 Satz 3 PflAPrV |
| Gibt es eine Praesenzpflicht? | **NEIN** — weder PflBG noch PflAPrV §§ 1-5 schreiben Praesenz fuer Theorieunterricht vor | PflAPrV §§ 1-5 Volltext-Analyse |
| NRW Berufskolleg als Orientierung? | 20-40% Distanzunterricht ab 2024/25 dauerhaft erlaubt (APO-BK) | Land NRW Pressemitteilung, BASS 2025/2026 |

**Landesrecht — Kein Verbot gefunden:**

- **NRW:** LAGPflB enthaelt keine Mindest-Praesenzquote. Pflegelehrkraeftesicherungsverordnung zeigt regulatorische Anerkennung des Mangels. DistanzunterrichtsVO stellt digital = gleichwertig. 50% der Pflegeschulen nutzen bereits E-Learning-Elemente (MAGS NRW Erhebung 2023).
- **Bayern:** Blended Learning im theoretischen Unterricht "in begrenztem Umfang" erlaubt. Bayerisches Landesamt fuer Pflege (zustaendig seit 01.07.2023) hat keine Einschraenkungen publiziert.
- **Niedersachsen:** Pflegeschulen explizit in Digitalpakt einbezogen. E-Learning-Center Niedersachsen (Moodle-basiert) steht zur Verfuegung.

**COVID-Praezedenzfall (2020-2022):**

Pflegeschulen haben waehrend COVID **komplett digital** unterrichtet. Zweite Corona-Aenderungsverordnung (02.10.2020) genehmigte digitalen Unterricht explizit. **Kein einziger Fall dokumentiert**, in dem eine Pflegeschule deswegen die staatliche Anerkennung verloren haette. Schueler bestanden Pruefungen trotz hohem Online-Anteil. Quelle: BMG, Diakoneo Praxisbericht.

**Behoerdliche Kontrolle — De facto gering:**

Die zustaendigen Behoerden (Bezirksregierungen NRW, Bayerisches Landesamt fuer Pflege, LAGeSo Berlin) pruefen primaer das Curriculum auf Papier und formale Voraussetzungen. Eine laufende Kontrolle der tatsaechlichen Unterrichtsform (ob digital oder praesent) findet **de facto kaum statt**. Solange die Stundenzahlen im Ausbildungsnachweis stimmen, wird die Methodik selten hinterfragt.

**Rote Linien — Was NICHT erlaubt ist:**

- Vollstaendiger Ersatz des Praesenzunterrichts (Lernbegleiter muss vorhanden sein)
- Digitaler praktischer Unterricht (Skills Lab, Simulation = nur Praesenz)
- Digitale Pruefungsabnahme (PflAPrV §§ 14-16 = Praesenz)
- Unterricht ohne qualifizierte Lehrkraft (§ 9 PflBG: Verantwortung bleibt beim Menschen)

**B2B-Pitch-Formulierung (30 Sekunden):**

> "Unsere Plattform ist ein paedagogisches Hilfsmittel im Sinne des § 2 Abs. 4 PflAPrV. E-Learning und selbstgesteuertes Lernen sind dort ausdruecklich als Lehrformat kodifiziert — ohne Prozent-Obergrenze. Waehrend COVID haben Pflegeschulen bundesweit online unterrichtet, ohne Konsequenzen. NRW erlaubt inzwischen dauerhaft 20-40% Distanzunterricht am Berufskolleg. Die Unterrichtsverantwortung bleibt bei Ihrer Lehrkraft — die Plattform unterstuetzt, ersetzt nicht."

---

### 2.6 Politische Massnahmen gegen Paedagogenmangel — Analyse (Iteration 003)

> **Kernbefund:** Die bisherigen Massnahmen sind voellig unzureichend. Es gibt KEINE digitale Loesung fuer den theoretischen PflBG-Unterricht. Das bestaetigt die Marktluecke.

**Aktuelle Lage (belegt):**

| Kennzahl | Wert | Quelle |
|---|---|---|
| Pflegeschulen mit Lehrkraft-Problem | **50%** | BIBB-Pflegepanel 2022/2023 |
| Unbesetzte Stellen NRW | **200+ (750 fehlend gesamt)** | BLGS NRW, bpa |
| Ausbildungsplaetze besetzt | nur **54%** von 100.000 | BIBB-Pflegepanel 2024 |
| Kipppunkt Bayern | **Ende der 2020er** | Sonntagsblatt Bayern |
| Fehlende Berufsschullehrer bis 2030 | **~31.000** (alle Schulformen) | SWK-Stellungnahme 2023/KMK |
| Fehlende Pflegekraefte bis 2030 | **~500.000** | Bertelsmann Pflegereport |

**Was getan wird:**

| Massnahme | Wirkung | Bewertung |
|---|---|---|
| **§ 9 PflBG Uebergangsregel** (Bachelor darf lehren) | Kauft Zeit bis **2029** | Symptombehandlung, nicht Loesung |
| **NRW: 120 neue Master-Studienplaetze** (4 Hochschulen) | ~120 Absolventen/Jahr mehr | Tropfen auf heissen Stein bei 750 fehlenden |
| **NRW: 400h Zusatzqualifikation** (Quereinstieg) | "Multiprofessionelle Fachkraefte" duerfen lehren | Pragmatisch, aber nicht skalierbar |
| **Digitalpakt 2.0** (2026-2030, 5 Mrd. EUR) | Pflegeschulen eingeschlossen, Software foerderbar | Nur Infrastruktur/Lizenzen, KEINE Inhalte |
| **Pflegestudiumstaerkungsgesetz** | Mehr Studienplaetze geplant | Noch nicht umgesetzt |
| **DigiK-Part** (BIBB-Forschungsprojekt) | Digitale Kompetenzen fuer Lehrende | Forschung, keine operative Loesung |

**Was NICHT getan wird:**

- **Keine digitale Loesung fuer theoretischen PflBG-Unterricht** — die grosse Luecke, die unsere Plattform fuellt
- **KI-gestuetztes Lernen "wird kaum eingesetzt"** (DigiK-Part Ergebnis) — wir waeren First Mover
- **Kein bundesweites Programm** spezifisch fuer Pflegepaedagogik-Studienplaetze
- **Keine systematische Bedarfserhebung** fuer Pflegepaedagogen auf Bundesebene
- Die meisten Bundeslaender ausser NRW haben **keine konkreten Offensiven**

**Der Teufelskreis (belegt):**

```
Weniger Paedagogen → Weniger Ausbildungsplaetze besetzbar
    → Weniger Pflegefachpersonen → Weniger zukuenftige Paedagogen
        → Bei gleichzeitig 4 Mio. Pflegebeduerftigen bis 2035 (Destatis)
```

**Prognose 2025-2035:**

- § 9 PflBG laeuft **2029** aus — dann muessen alle Lehrkraefte Master haben
- Studienplatz-Kapazitaeten reichen bei weitem nicht (~3.000 vs. ~10.000 benoetigte)
- Bayern erwartet "Kipppunkt Ende der 2020er" — Austritte uebersteigen Absolventen
- BLGS: Mangel wird sich "aufgrund Altersstruktur noch verschaerfen"

**Was Verbaende fordern:**

| Verband | Kernforderung |
|---|---|
| **BLGS** | Verhaeltnis 1:15 (statt 1:20), Ausbau Studienplaetze |
| **DBfK** | Bundeseinheitliche Pflegeassistenzausbildung, Regierungspflegebeauftragte/r |
| **bpa** | Anpassung auf 1:25 (realistischer), sofortiger Kapazitaetsausbau |
| **DGP/DPR** | "Hochschulische Pflegeausbildung bricht ein" — massiver Ausbau noetig |
| **Stiftungsallianz** | 30.000 Studienplaetze fuer Pflegeberufe insgesamt |

**Strategische Implikation fuer unsere Plattform:**

Die politischen Massnahmen setzen auf MEHR MENSCHEN (Studienplaetze, Quereinstieg, Uebergangsregeln). **Keine einzige Massnahme setzt auf TECHNOLOGIE als Skalierungsloesung fuer den Unterricht.** Das ist unsere Marktluecke: Die Plattform ist die einzige Loesung, die den Output pro Lehrkraft erhoeht, statt auf mehr Lehrkraefte zu warten — die nicht kommen werden.

**Quellen:** BIBB-Pflegepanel (bibb.de/de/127032.php), bpa Positionspapier (bpa.de), Sonntagsblatt Bayern, Aerzteblatt, BLGS, DBfK Forderungen 2025 (dbfk.de), SWK-Stellungnahme 2023, Destatis Pflegeprojektion 2024, DigiK-Part (bibb.de/de/182968.php)

---

## 3. TECH-STACK-ENTSCHEID

### 3.1 Empfohlener Stack (aktualisiert Iteration 005 — DSGVO-konform fuer Schulverkauf)

> **WICHTIG (Iteration 005):** Vercel (US-Firma) unterliegt dem CLOUD Act. Die Vergabekammer Baden-Wuerttemberg hat 2022 entschieden, dass Cloud-Dienste mit US-Bezug nicht DSGVO-konform fuer oeffentliche Auftraege sind. Fuer den B2B-Schulverkauf muss auf **Hetzner Cloud (DE)** migriert werden. Supabase (US-Firma, EU-Server) ist ein Risikofaktor — selbst-gehostetes PostgreSQL auf Hetzner ist die sicherste Option.

```
Kategorie         Technologie                   Begruendung
──────────────────────────────────────────────────────────────────────────
Frontend          Next.js 15 + TypeScript        App Router, SSR, großes Ecosystem
Styling           Tailwind CSS                   Rapid Prototyping, RTL-Varianten verfugbar
Hosting           Hetzner Cloud (DE) (~5-10€/Mo) 100% Deutschland, kein CLOUD Act, DSGVO-sicher
Datenbank/Auth    PostgreSQL auf Hetzner         Selbst-gehostet, volle Datenkontrolle DE
                  ODER Supabase Pro Frankfurt    eu-central-1, DPA unterzeichenbar (Risiko: US-Firma)
Dateispeicher     Hetzner Object Storage         S3-kompatibel, DE-Standort
i18n/RTL          next-intl (kostenlos)          MIT, offizielle Next.js-Unterstutzung, Arabisch RTL
Bezahlung         Stripe                         0 Monatskosten, 1,5% + 0,25€/Transaktion EU
E-Mail            Resend Free Tier               3.000 E-Mails/Mo kostenlos
KI                Nebius AI (NL, EU-Server)      AVV sicherstellen
Monitoring        Plausible / Umami              DSGVO-konform, self-hosted moeglich
```

**Entwicklungsstrategie:** Fuer MVP-Entwicklung kann Vercel Hobby + Supabase Free genutzt werden (0€). Vor erstem Schulverkauf: Migration auf Hetzner. Vollstaendige DSGVO-Analyse: `recherche/DSGVO-ANFORDERUNGEN.md`.

---

### 3.2 Kostenplan: Von 0€ bis Scale (aktualisiert Iteration 005)

| Phase | Schulen | Schueler (MAU) | Hosting (Hetzner) | DB (PostgreSQL) | KI (Nebius) | Gesamt/Mo |
|---|---|---|---|---|---|---|
| Entwicklung | 0 | 0 | 0€ (Vercel Hobby) | 0€ (Supabase Free) | 0€ | **0€** |
| Pilot (1–3 Schulen) | 1–3 | 60–180 | ~5€ (Hetzner CX22) | ~5€ (managed oder self) | ~5€ | **~15€** |
| Early Stage (5–10 Schulen) | 5–10 | 300–600 | ~10€ | ~10€ | ~10€ | **~30€** |
| Growth (20–50 Schulen) | 20–50 | 1.200–3.000 | ~20€ | ~25€ | ~20€ | **~65€** |
| Scale (100+ Schulen) | 100+ | 6.000+ | ~40€ | ~50€ | ~40€ | **~130€** |

**Kritische Upgrade-Trigger:**
- Vor erstem Schulverkauf: Migration Vercel→Hetzner + Supabase→PostgreSQL self-hosted (DSGVO-Pflicht)
- Hetzner CX22 (2 vCPU, 4 GB RAM) reicht bis ~3.000 MAU
- Ab ~5.000 MAU: Hetzner CX32 (~20€/Mo) oder Load Balancer

---

### 3.3 DSGVO-Strategie (aktualisiert Iteration 005 — vollstaendige Schulverkauf-Analyse)

> Vollstaendige Analyse: `recherche/DSGVO-ANFORDERUNGEN.md`

**Rechtliche Grundlage:**
Schuelerdaten (Name, Lernfortschritt, Testergebnisse) = personenbezogene Daten nach DSGVO Art. 4 Nr. 1, aber **KEINE Gesundheitsdaten** (Art. 9) solange Quiz-Fragen Fachwissen abfragen und keine persoenlichen Gesundheitserfahrungen. Pflegeschulen = Verantwortliche (Controller). Lernplattform-Betreiberin = Auftragsverarbeiterin (Processor). **Wichtig:** Pflegeschulen fallen NICHT unter das SchulG NRW (§§ 120-122) — sie unterliegen dem PflBG + DVO-PflBG NRW.

**Pflichtdokumente vor erstem Schulverkauf:**

| Dokument | Prioritaet | Kosten | Eigenarbeit? |
|---|---|---|---|
| AVV (Auftragsverarbeitungsvertrag, Art. 28) | **MUSS** | ~1.500-3.000€ (Anwalt) | Nein — anwaltlich pruefen |
| TOM (Technisch-Organisatorische Massnahmen) | **MUSS** | 0€ | Ja |
| VVT (Verarbeitungsverzeichnis, Art. 30) | **MUSS** | 0€ | Ja |
| Datenschutzerklaerung | **MUSS** | ~500-1.000€ (Anwalt) | Nein — anwaltlich pruefen |
| DSFA (Datenschutz-Folgenabschaetzung) | SOLL | 0€ | Ja — empfohlen, nicht zwingend Pflicht |
| WCAG 2.1 AA Basis | SOLL | Im Build | Ja — BFSG seit Juni 2025, Kleinstunternehmen ggf. ausgenommen |

**Geschaetztes DSGVO-Budget: ~3.000-5.000€** (AVV + Datenschutzerklaerung anwaltlich, Rest Eigenarbeit)

**Architektur-Prinzip (100% Deutschland):**
- **Hetzner Cloud (DE)** fuer Hosting — kein CLOUD Act, kein US-Firmensitz
- **PostgreSQL self-hosted auf Hetzner** — volle Datenkontrolle
- Alle personenbezogenen Daten bleiben in Deutschland
- Keine personenbezogenen Daten in URL-Parametern, Server-Logs oder Analytics
- Analytics: Plausible oder Umami (self-hosted) statt Google Analytics

**Referenz:** Cornelsen bietet ein professionelles AVV-Template: cornelsen.de/service/kundenservice/rechtliche-hinweise/avv — als Vorlage fuer unseres nutzbar.

**Schulen-spezifisch:**
- Pflegeschulen fallen NICHT unter SchulG NRW Datenschutz-Paragraphen — weniger Buerokratie, aber auch kein vereinfachter Rechtsrahmen
- Minderjahrige Schuler: Besondere DSGVO-Anforderungen, Einwilligung Erziehungsberechtigte pruefen. **Recherche 2026-03-18:** PflBG hat KEIN Mindestalter — Zugang nur ueber Schulabschluss (mittlerer Bildungsabschluss). Median-Alter bei Ausbildungsbeginn: 21 Jahre, Durchschnitt: 24 Jahre. Minderjaehrige sind selten, aber moeglich (z.B. Realschulabschluss mit 16). Loesung: Einfaches Eltern-Einwilligungsformular bei Registrierung unter 18 vorsehen. Quelle: Destatis PD25_276_212, PflBG § 11
- Loeschfristen definieren: Schuelerdaten nach Ausbildungsende + 3 Jahre
- Datenpannen-Prozess: 72h-Meldepflicht an Aufsichtsbehorde dokumentieren und einueben
- Schulischer Datenschutzbeauftragter muss vor Vertragsabschluss zustimmen

**Pitch-Argument an Schulen:**
"Alle Schuelerdaten liegen ausschliesslich in Deutschland (Hetzner Cloud, Nuernberg). AVV kann sofort unterzeichnet werden. Kein US-Cloud-Act-Risiko. DSGVO-konform by Design."

---

### 3.4 i18n und RTL-Implementierung

**Bibliothek:** next-intl (kostenlos, MIT, offizielle Next.js App Router Unterstuetzung)

**RTL-Implementierung:**
```typescript
// app/[locale]/layout.tsx
const rtlLocales = ['ar', 'he', 'fa', 'ur'];
const dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr';

return (
  <html lang={locale} dir={dir}>
    <body>{children}</body>
  </html>
);
```

**Sprachdateien-Struktur:**
```
/messages
  de.json      (Deutsch — Hauptsprache, alle Texte)
  ar.json      (Arabisch — RTL, UI + Glossar)
  tr.json      (Turkisch — LTR, UI + Glossar)
  en.json      (Englisch — Fallback fuer internationale Fachbegriffe)
```

**Locale Detection:** Browser-Sprache → Cookie → Default (de)
**URL-Struktur:** /de/lerneinheit/ce-02, /ar/lerneinheit/ce-02

**Aufwand:** 1–2 Tage Entwicklungszeit fuer Basis-i18n. Ubersetzungen auslagern: Muttersprachler (Fiverr, 0,08–0,15 €/Wort) oder DeepL Pro als Entwurf + muttersprachliche Korrektur.

---

### 3.5 UI/UX-Design-Patterns — Referenzanalyse erfolgreicher Lernplattformen (Iteration 006)

> Vollstaendige Analyse: `recherche/UI_UX_REFERENZANALYSE.md`
> Analysierte Plattformen: Duolingo, Khan Academy, Brilliant, AMBOSS, Quizlet, Anki, Coursera

**UI-Bibliothek:** shadcn/ui (Basis-Komponenten) + Tremor (Dashboard-Charts) + dnd-kit (Drag&Drop) = 100% Abdeckung aller benoetigen Interaktionstypen.

**Design-System-Entscheid:** Warme Farben (kein steriles Weiss), Rounded Rectangles (Duolingo-Formensprache), semantische Farbcodierung (Gruen=Erfolg, Rot=Fehler/CAVE, Gelb=Hinweis, Blau=Info). Dark Mode fuer Nachtschicht-Lernen.

**MVP-Patterns (Phase 1 — vor erstem Schulverkauf, Gamification BESTAETIGT durch Gruenderin 2026-03-18):**

| Pattern | Referenz | Implementierung | Begruendung |
|---|---|---|---|
| 5-Stufen-Mastery | Khan Academy | Farbcodierte Kacheln pro Fertigkeit (Not Started→Mastered) | Dozenten sehen sofort, wer wo steht |
| Streak + XP | Duolingo | Tagesstreak mit Flamme, XP pro Lektion, persoenliches Tagesziel | 3,6x hoehere Bindung bei 7-Tage-Streak |
| FSRS-Algorithmus | Anki | Backend-Spaced-Repetition, 15-20% weniger Wiederholungen als SM-2 | Wissenschaftlich bester Algorithmus |
| Intervall-Anzeige | Anki | "Wieder in 1d / 3d / 7d / 21d" bei jedem Rating | Transparenz + Kontrolle fuer Lernende |
| Clinical Pearl Boxen | AMBOSS | Gruene "Merke"-Boxen in Erklaertexten | Standard in med. Bildung |
| CAVE-Boxen | AMBOSS | Rote Warnboxen ("CAVE: Heparinueberdosierung") | Sicherheitskritisch fuer Pflege |
| Hover-Tooltips | AMBOSS | Unterstrichene Fachbegriffe → Popup mit Definition + AR/TR | Kern-USP Mehrsprachigkeit |
| Aufgaben-Mix | Duolingo + Quizlet | MC + Zuordnung + Lueckentext + Flip-Karten pro Lektion | Abwechslung = Motivation |
| Flip-Karten (3D) | Quizlet | CSS rotateY, Swipe-Gesten auf Mobile | Intuitiv, Mobile-First |
| Sofort-Feedback | Duolingo | Grosses gruen/rot Panel nach jeder Antwort + Animation | Emotionales Lernen |
| Fortschrittsbalken | Duolingo | Animiert, oben in jeder Lektion, Goal Gradient Effect | Motivation durch Naehe zum Ziel |

**Phase-2-Patterns (Engagement-Boost):**

| Pattern | Referenz | Implementierung |
|---|---|---|
| Lehrer-Dashboard | Khan Academy | Activity / Skills / Mastery Tabs, Klassen-Heatmap |
| In-Video-Quiz | Coursera | Video pausiert, Frage erscheint (74% versuchen es) |
| Interaktive Simulationen | Brilliant | Slider (Infusionsrate), Drag&Drop (Medikamente→Kategorie) |
| Heatmap-Kalender | Anki | GitHub-artige Jahresansicht der Lerntage |
| Skill-Grid | Khan Academy | Kacheln pro Fertigkeit mit Mastery-Farbe auf Unit-Seite |
| Dark Mode | Brilliant | Nachtschicht-Lernen fuer Azubis |
| Lernfeld-Zertifikate | Coursera | Shareable auf LinkedIn/Instagram (GenZ-relevant) |

**Phase-3-Patterns (Differenzierung):**

| Pattern | Referenz | Implementierung |
|---|---|---|
| KI-Tutor (sokratisch) | Khan/Khanmigo | "Was wuerde jetzt mit dem Patienten passieren?" |
| Lernplan-Generator | AMBOSS | Pruefungstermin → tagesgenaue Kapitel-Planung |
| Klassen-Live-Quiz | Quizlet Live | QR-Code Join, Echtzeit-Wettbewerb im Unterricht |
| Peer-Review | Coursera | Pflegedokumentationen gegenseitig bewerten |
| AI-Grading | Coursera | KI prueft Pflegeplanungen nach Kriterien |

**Differenzierung gegenueber ALLEN bestehenden Plattformen:**
Keine einzige Lernplattform kombiniert AMBOSS-Wissensqualitaet (Tooltips, Clinical Pearls) + Duolingo-Engagement (Streak, XP, emotionales Feedback) + Anki-Wissenschaft (FSRS) + Khan-Mastery (5-Stufen, Skill-Grid) + Brilliant-Interaktivitaet (Slider, Simulationen) — und das pflege-spezifisch (PflBG-konform, DE/AR/TR, B2B-Schulinfrastruktur, Inverted Classroom).

**Psychologische Hooks (aus Duolingo-Forschung, belegt):**
- **Loss Aversion:** Streak-Verlust wiegt 2-3x schwerer als Streak-Gewinn
- **Variable Rewards:** Unvorhersehbare Bonus-XP (Dopamin-Aktivierung)
- **Goal Gradient Effect:** Naehe zum Ziel erhoeht Anstrengung (Fortschrittsbalken)
- **Identity Formation:** Langer Streak wird zur Identitaet ("Ich lerne jeden Tag")
- **Zeigarnik-Effekt:** Unabgeschlossene Aufgaben draengen zur Fertigstellung (Progress Bars)

---

## 3a. FEATURE-LISTE — Abgeleitet aus Nutzerkritik-Recherche (Iteration 007)

> **Methode:** Systematische Ableitung aus 25 dokumentierten Nutzerwuenschen (12 Schueler, 7 Lehrer, 6 Praxisanleiter) + 10 Schmerzpunkten. Jedes Feature ist rueckverfolgbar auf einen konkreten Nutzerwunsch. Vollstaendiges Dokument mit Aufwandsschaetzungen: `specs/FEATURE_LISTE.md`

### 3a.1 MVP-Features (23 Features — Launch-kritisch)

**Schueler-Features (11):**

| # | Feature | Nutzerwunsch | Schmerzpunkt |
|---|---------|-------------|--------------|
| S1 | **All-in-One PWA** (Erklaertexte + Quiz + Karteikarten + Glossar + Pruefung) | Eine App fuer alles | #4 Fragmentierung |
| S2 | **KI-Lernpfad** (Nebius/Llama passt Schwierigkeit + Themenreihenfolge an) | Adaptives Lernen | #2 Keine Adaptivitaet |
| S3 | **PWA mit Service Worker** (Offline-Cache, keine App-Store-Abhaengigkeit) | Zuverlaessige Technik | #1 Instabilitaet |
| S4 | **Cloud-Sync** (ein Account, Fortschritt ueberall — by design) | Geraete-Sync | #7 Kein Sync |
| S5 | **Leitlinien-Versions-Tags** (AWMF-Version + Datum bei jedem Inhalt) | Aktuelle Inhalte | #5 Veraltete Inhalte |
| S6 | **Fallvignetten pro CE** (Branching Scenarios mit Entscheidungsbaeumen) | Praxisbezug | #3 Theorie-Praxis |
| S8 | **Freemium** (CE 01 + 02 kostenlos, Rest per Schullizenz/4,99 EUR/Mo) | Bezahlbare Preise | #8 Abo-Fallen |
| S9 | **Mobile-First UI** (Duolingo-inspiriert, Animationen, Dark Mode) | Junges Design | — |
| S10 | **Streak + XP** (Tagesstreak, Loss Aversion, variable Rewards) | Gamification | — |
| S12 | **"Warum?"-Erklaerungen** (richtig UND falsch erklaert + Quellenverweis) | Ausfuehrliche Erklaerungen | — |
| S14 | **Fachsprache-Glossar DE/AR/TR** (Definition, Aussprache, Uebersetzung) | Fachsprachlich korrekt | — |

**Lehrer-Features (7):**

| # | Feature | Nutzerwunsch | Schmerzpunkt |
|---|---------|-------------|--------------|
| L1 | **Bloom-Taxonomie-Mapping** (jede Aufgabe einer Stufe zugeordnet) | Didaktisch fundiert | #6 Keine Didaktik |
| L2 | **Sandwich-Methode pro Session** (Reflexion → Wissen → Uebung → Transfer) | Didaktisch fundiert | #6 |
| L3 | **1-Klick Klassen-Setup** (Einladungslink oder CSV-Import) | Einfache Integration | #10 Infrastruktur |
| L5 | **Ampel-Dashboard** (30-Sek-Tagesuebersicht, Klassen-Detail, Einzel-Schueler) | Lernfortschritts-Tracking | #9 Kein Dashboard |
| L6 | **11 CE navigierbar** (Lernziele, Stundenrichtwerte, Pruefungsrelevanz) | Curriculare Anbindung | — |
| L8 | **Auto-Korrektur** (MC, Zuordnung, Lueckentext automatisch ausgewertet) | Entlastung | — |
| L11 | **Hetzner DE Hosting** (DSGVO-konform, 99.9% Uptime, SSL, Backups) | Professionelle Infrastruktur | #1, #10 |

**Praxisanleiter- und Querschnitt-Features (5):**

| # | Feature | Nutzerwunsch | Schmerzpunkt |
|---|---------|-------------|--------------|
| P3 | **Glossar ohne Login** (Fachbegriff-Nachschlagewerk ohne Account) | Niedrigschwellige Nutzung | — |
| P7 | **PWA Offline-Modus** (Glossar + letzte 50 Karteikarten offline) | Offline-Faehigkeit | — |
| Q1 | **FSRS-Karteikarten** (Spaced Repetition wie Anki, eingebaut) | All-in-One | #4 |
| Q2 | **Kompetenz-Radar** (Staerken/Schwaechen pro CE als Spinnen-Diagramm) | Adaptivitaet | #2 |
| Q3 | **15 interaktive Fragetypen** (Hotspot, Branching, Memory, Kreuzwortraetsel, Virtual Patient, etc.) | Praxisbezug + Engagement | #3 |

### 3a.2 V1.1-Features (10 Features — 3 Monate nach Launch)

| # | Feature | Nutzerwunsch |
|---|---------|-------------|
| S7 | **Virtual Patient Dialog** (KI-Chat-Simulation fuer Anamnese-Uebung) | Praxisbezug |
| S11 | **Rangliste + Achievements** (Klassen-Ranking opt-in, Abzeichen) | Gamification |
| S13 | **Clinical Pearls / Tooltips** (AMBOSS-Stil Wissensvertiefung) | Erklaerungen |
| L4 | **Aufgaben zuweisen** (Lehrer waehlt CE → Schueler sehen Deadline) | Integration |
| L7 | **CE-Fortschrittsmatrix** (Heatmap: welche CE wie weit bearbeitet) | Tracking |
| L10 | **Onboarding-Tutorial** (3-Min interaktive Tour beim ersten Login) | Support |
| P1 | **Praxisaufgaben pro CE** ("Beobachte heute bei deinem Patienten...") | Theorie-Praxis |
| P4 | **QR-Code pro CE** (Praxisanleiter scannt → sieht Lernziele) | Niedrigschwellig |
| Q6 | **Micro-Interactions** (Lottie-Animationen, Confetti, Haptic Feedback) | Design |
| Q8 | **DE/AR/TR Sprachumschaltung** (alle Erklaertexte + Glossar in 3 Sprachen) | Mehrsprachigkeit |

### 3a.3 V2.0-Features (6 Features — spaeter)

| # | Feature | Nutzerwunsch |
|---|---------|-------------|
| S15 | **KI-Tutor "Frag mich"** (RAG-basiert, antwortet aus CE-Inhalten) | Fragen stellen |
| S16 | **Dozentin-Queue** (KI-unsichere Fragen → Warteschlange fuer Dozentin) | Fragen stellen |
| L9 | **Pruefungs-Generator** (CE + Bloom-Stufe → PDF-Pruefungsbogen) | Entlastung |
| P2 | **Praxis-Reflexionsfragen** (Freitext nach Einsatz + KI-Feedback) | Theorie-Praxis |
| P5 | **Fortbildungszertifikat** (PDF-Zertifikat fuer 24h/Jahr-Nachweis) | Zertifikate |
| P6 | **Schule-Praxis-Kanal** (Praxisanleiter sieht Lernstand mit Einwilligung) | Kollaboration |

### 3a.4 Feature-Map: Schmerzpunkt → Feature → USP-Claim

| Schmerzpunkt | Feature | USP-Claim (Pitch) |
|-------------|---------|-------------------|
| #1 Instabilitaet | PWA + Hetzner DE | "Funktioniert. Immer." |
| #2 Keine Adaptivitaet | KI-Lernpfad + Kompetenz-Radar | "Lernt mit dir mit." |
| #3 Theorie-Praxis | Fallvignetten + Virtual Patient | "Vom Buch ans Bett." |
| #4 App-Chaos | All-in-One PWA + FSRS | "Eine App. Alles drin." |
| #5 Veraltete Inhalte | Versions-Tags + Dozentin-Review | "Immer aktuell." |
| #6 Keine Didaktik | Bloom + Sandwich-Methode | "Von Paedagogen gebaut." |
| #7 Kein Sync | Web-App (by design) | "Handy, Tablet, Laptop — egal." |
| #8 Abo-Fallen | Schullizenz + 1-Klick-Kuendigung | "Transparent. Fair." |
| #9 Kein Dashboard | Ampel-Dashboard | "30 Sekunden Ueberblick." |
| #10 Infrastruktur | Zero-IT + Smartphone-first | "Browser auf. Fertig." |

---

## 4. WETTBEWERBSANALYSE

### 4.1 Wettbewerber-Uebersicht (aktualisiert Iteration 005 — echte Preise)

| Plattform | Preis B2C/Jahr | Preis B2B/Schule | KI-Adaptiv | Mehrsprachig (Inhalt) | LMS/Dashboard | Zielgruppe |
|---|---|---|---|---|---|---|
| **Novaheal** | **72 €** (4,99 €/Mo) | Auf Anfrage (~50-120 €/Sch.) | Nein | Nein | Nein | Azubis |
| **AMBOSS Pflege** | **99 €** | Auf Anfrage | Nein | Nein | Nein | Azubis + Fachkraefte |
| **AMBOSS + Novaheal Kombi** | **144 €** | Auf Anfrage | Nein | Nein | Nein | Azubis |
| **Pflegias / Cornelsen** | 16,25 €/Band/Jahr (E-Book) | Auf Anfrage (~80-150 €/Sch.) | Nein | Nein | Ja (Basis) | Schulen |
| **I care PLUS / Thieme** | 180 € einmalig (Print+Digital) | Auf Anfrage (~50-120 €/Sch.) | Nein | Nein | Ja (Basis) | Schulen |
| **CNE / Thieme** | 270-330 € | Institutionell | Nein | Nein | Ja | Fachkraefte (Fortbildung) |
| **smartAware** | — | 37-85 €/MA/Jahr | Nein | UI ja, Inhalt nein | Ja | Einrichtungen (Fortbildung) |
| QuizAcademy | Kostenlos | — | Nein | Nein | Nein | Azubis Selbststudium |
| **Eigene Plattform** | **Freemium + 4,99 €/Mo** | **149 €/Schueler/Jahr** | **Ja** | **Ja (DE/AR/TR)** | **Ja (Ampel-Dashboard)** | **Schulen (B2B-first) + Azubis** |

> **Preisbewertung (Iteration 005):** 149 €/Schueler/Jahr liegt am oberen Rand, ist aber vertretbar: AMBOSS+Novaheal Kombi kostet B2C bereits 144 € — unser B2B-Preis ist nur 5 € teurer, bietet aber LMS, Lehrer-Dashboard, KI-Adaptivitaet und Mehrsprachigkeit. 149 € = nur 1,4% der Ausbildungspauschale (9.400-12.500 €/Schueler/Jahr). Netto-Mehrkosten nach Lehrbuch-Ersparnis: ~65-90 €/Jahr. **Risiko:** Pflegias Landeslizenz in BW ist kostenlos bis 2026 → Digitalpakt-Foerderfaehigkeit als Gegenmassnahme. Vollstaendige Preisrecherche: `recherche/wettbewerb/PREISRECHERCHE_WETTBEWERBER.md`.

### 4.2 Nutzerkritik an bestehenden Plattformen (neu, Iteration 007)

> **Quelle:** Systematische Recherche von App-Store-Reviews, Trustpilot, Studienergebnissen (BIBB, PMC, ResearchGate, Wolters Kluwer, ScienceDirect) und Fachforen. Vollstaendiges Dokument: `recherche/NUTZERKRITIK_PFLEGE_APPS.md`

**App-spezifische Kritik (Zusammenfassung):**

| App | Hauptkritik | Bewertung |
|-----|-------------|-----------|
| **I Care WISSEN TO GO** (Thieme) | Videos defekt, Support antwortet nicht, 171 EUR bezahlt aber Features kaputt | Gemischt |
| **Elsevier Pflege** | Suchfunktion defekt, Abstuerze, veraltete Inhalte (z.B. Thromboseprophylaxe), schwarzer Bildschirm nach Login | 4.0/5 trotz Problemen |
| **Pflege Trainer** | Keine Sync zwischen iPad und iPhone | Inhaltlich positiv |
| **AMBOSS** | Intransparente Abo-Bedingungen, unerwartete Abbuchungen (198 EUR/Jahr trotz Kuendigung) | Technisch top, Abo-Kritik |
| **simpleclub** | Fachlich ungenau, nicht fachsprachlich praezise, kein Pflege-Bereich, Tablet-Abstuerze | Nicht pflegespezifisch |
| **Novaheal** | Keine wesentliche oeffentliche Kritik (stark positiv gefilterte Eigenangaben, 95% empfinden als hilfreich) | Direktester Wettbewerber |

**Top-10 Schmerzpunkte (nach Haeufigkeit, nutzergruppenubergreifend):**

| # | Schmerzpunkt | Betroffene | Unsere Loesung |
|---|-------------|------------|----------------|
| 1 | Technische Instabilitaet (Abstuerze, defekte Features) | Schueler | PWA/Web-App — kein App-Store-Update-Lag, automatische Updates |
| 2 | Keine Personalisierung/Adaptivitaet | Schueler | KI-adaptives Lernen (Nebius/Llama) — unser staerkstes USP |
| 3 | Theorie-Praxis-Kluft (kein Transfer) | Schueler, Praxisanleiter | Fallbeispiele, Virtual Patient, Branching Scenarios in jeder CE |
| 4 | App-Fragmentierung (5+ Apps noetig) | Schueler | All-in-One: Lehrbuch + Quiz + Karteikarten + Pruefung + Glossar |
| 5 | Veraltete/fehlerhafte Inhalte | Schueler, Lehrer | Dozentin als fachliche Reviewerin + Leitlinien-Versions-Tags |
| 6 | Fehlende didaktische Fundierung | Lehrer | Pflegedidaktisch aufgebaut (Bloom-Taxonomie, Sandwich-Methode, FSRS) |
| 7 | Keine Geraete-Synchronisation | Schueler | Web-App loest dies automatisch — ein Account, alle Geraete |
| 8 | Intransparente/teure Abo-Modelle | Schueler | B2B-Schullizenz (Schule zahlt) + transparentes B2C-Freemium |
| 9 | Kein Lernfortschritts-Tracking fuer Lehrer | Lehrer | Ampel-Dashboard (30-Sek-Tagesuebersicht, Klassen-Detail, Einzel-Schueler) |
| 10 | Fehlende Infrastruktur an Pflegeschulen | Lehrer, Praxisanleiter | Smartphone-first — loest Hardware-Problem (alle Schueler haben Smartphone) |

**Studien-Evidenz:**
- **BIBB-Studie** (430 Lehrende, 179 Schulen): Mehrheit will digitale Medien, aber fehlende Infrastruktur und kein IT-Support
- **Wolters Kluwer**: 92% der Nursing Students, die adaptives Lernen nutzen, sind begeistert — bestaetigt unser KI-USP
- **PMC-Studie**: Ueberfluss an Technologie fuehrt zu sinkender Nutzungsmotivation → Argument fuer All-in-One statt App-Fragmentierung
- **ResearchGate** (169 Teilnehmer): Praxisanleiter wuenschen niedrigschwelligen, kollaborativen Zugang
- **ScienceDirect (2024)**: Gut designte Mobile-Apps tragen positiv bei — schlechtes Design demotiviert

**Strategische Bestaetigung:** Die Recherche bestaetigt alle 4 Marktluecken aus Section 1 (Executive Summary). Besonders stark validiert: KI-Adaptivitaet (Schmerzpunkt #2), All-in-One-Ansatz (#4) und Lehrer-Dashboard (#9). Kein Wettbewerber adressiert alle 10 Schmerzpunkte gleichzeitig.

---

**Marktkenndaten:**
- **1.339 Pflegeschulen** in Deutschland (Destatis 2023, Abschlussbericht Ausbildungsoffensive)
- Ca. 147.100 Pflegeazubis aktiv (Destatis, Stand Ende 2024); ~59.400 Neueintritte 2024
- **~3.000-4.000 Pflegepaedagogen fehlen bundesweit** (Hochrechnung aus NRW: 750 auf 242 Schulen); nur **63 Master-Absolventen/Jahr** (Nachschub-Defizit ~85-90%)
- **~1.500-2.400 Pensionierungen bis 2035** (30-40% der Lehrkraefte ueber 55)
- Abbruchquote 30–36% (eine der hoechsten in deutschen Ausbildungsberufen)
- Ca. 20% internationaler Azubi-Anteil bundesweit (Berlin: 36%), Tendenz steigend
- Vollstaendige Mangel-Zahlen: `recherche/PFLEGEPAEDAGOGEN_MANGEL_RECHERCHE.md`

---

### 4.3 Break-Even-Rechnung (neu, Iteration 1)

**Fixkosten pro Monat ab Go-Live (Pilot-Phase):**

| Posten | Kosten/Monat | Quelle (Stand März 2026) |
|--------|--------------|--------------------------|
| Vercel Pro | $20/Monat (1 TB Bandwidth inkl., $0,15/GB Overage) | vercel.com/pricing — verifiziert März 2026 |
| Supabase Pro | $25/Monat Basis (8 GB DB, 100K MAU, 100 GB Storage inkl.) | supabase.com/pricing — verifiziert März 2026. **Hinweis:** Bei Bedarf dedizierter Compute: $100 extra ($125 gesamt). Für MVP-Phase ohne dedizierten Compute: $25 realistisch. |
| Stripe (Transaktionsgebühren, variabel) | ~0 € fix | 1,5% + 0,25 €/Transaktion EU (stripe.com/de/pricing) |
| Gesamt Fix-Betriebskosten (konservativ) | **~43 €/Monat** | Shared Compute (ausreichend für bis zu ~1.000 MAU) |
| Gesamt Fix-Betriebskosten (mittel-skaliert) | **~143 €/Monat** | Bei dediziertem Supabase Compute ab ~5.000 MAU |

**Break-Even-Szenarien (B2B-first):**

| Modell | Preis | Break-Even | Kommentar |
|--------|-------|-----------------------|-----------|
| **B2B Schullizenz (60 Schueler, Basispaket)** | 149 €/Schueler/Jahr = 8.940 €/Jahr = ~745 €/Mo | **1 Schule** | 1 Schule × 745 € >> 43 € Fixkosten — stark profitabel ab Tag 1 |
| **B2B Schullizenz (100 Schueler)** | 149 €/Schueler/Jahr = 14.900 €/Jahr = ~1.242 €/Mo | **1 Schule** | ROI fuer Schule: 14.900 € = 17% einer Dozentenstelle (85.000 €/Jahr) |
| **B2B Schullizenz (30 Schueler, Minimum)** | 199 €/Schueler/Jahr = 5.970 €/Jahr = ~498 €/Mo | **1 Schule** | Selbst kleinstes Paket deckt Fixkosten um Faktor 11 |
| B2C Freemium → Premium (sekundaer) | 4,99 €/Mo | **9 Abonnenten** | Stripe: 1,5% + 0,25 € = ~0,32 €/Txn; Netto ~4,67 €/Sub; 43 / 4,67 = 9,2 |

**Fazit Break-Even:**
- **B2B (primaer): 1 erste zahlende Schule** macht die Plattform sofort profitabel — selbst bei kleinster Schulgroesse (30 Schueler). Das extrem niedrige Fixkosten-Fundament (43 €/Mo) macht B2B-Break-Even trivial.
- B2C (sekundaer): 9 zahlende Abonnenten decken Betriebskosten — primaeruaer Wert als Akquisitionskanal fuer B2B, nicht als eigenstaendige Revenue-Quelle.
- KI-Kosten (Nebius): Bei 100 aktiven Schulern ~11 $/Mo zusaetzlich. Break-Even bleibt bei **1 Schule**.

**Zeithorizont bis Break-Even (realistisch, B2B-first):**
- Monat 1–3: Pre-Launch, $0 Umsatz, $0 Betriebskosten (Hobby/Free)
- Monat 4–6: Pilotschule (Gruenderin-Schule), kostenloser/symbolischer Pilot — Fixkosten: 43 €/Mo
- Monat 6–9: Ziel: 1 zahlende Pilotschule (B2B) → Break-Even erreicht. Parallel: B2C-Freemium als Trichter
- Vollstaendige Pricing-Herleitung und Value-Based-Pricing-Logik: `recherche/PIVOT_RECHERCHE.md` Abschnitte 3.1–3.3

---

### 4.4 Vertriebsstrategie: B2B-first — 0 → 1 → 10 → 100 Schulen (Iteration 3 + Pivot 002)

> **Pivot-Kontext:** Die Vertriebsstrategie ist B2B-first. Primaerzielgruppe: Schulleitungen und Schultraeger mit belegtem Lehrermangel. Sekundaer: B2C-Freemium als selbstverstaerkender Akquisitionskanal. Kernargument: ROI-Logik (Opportunitaetskosten einer Vakanz vs. Plattform-Kosten). Persona der Kaufentscheiderin: Barbara Koch, Schulleiterin — siehe `recherche/paedagogik/ERGEBNIS.md` Abschnitt 4.9. Vollstaendige Pitch-Texte und Value-Proposition-Canvas: `recherche/PIVOT_RECHERCHE.md` Abschnitte 4.1–4.4.

#### CAC (Customer Acquisition Cost) — Wie erreicht man Pflegeschulen?

**Strukturelle Herausforderung (belegt):**
Pflegeschulen sind B2B-Kunden mit langen Entscheidungszyklen. EdTech-Startups in Deutschland berichten von 9–18-monatigen Vertriebszyklen fuer Schulen. Im Pflegebereich kommen hinzu: Schultraeger (privat, kommunal, kirchlich), Schulleitung, Datenschutzbeauftragte, IT-Abteilung — alle muessen zustimmen. Quelle: news4teachers.de 2025, responsify.com EdTech B2B.

**Gründerin-Vorteil (strukturell, aktualisiert 2026-03-18):** Die Gruenderin war Dozentin an einer Pflegeschule und kuendigt ihre Stelle fuer Vollzeit-Fokus auf das Projekt. Das ist kein kleiner Vorteil — es ist ein entscheidender CAC-Reducer:
- **Erste Marktvalidierung:** Aktuelle Schule der Gruenderin war vom Konzept begeistert
- **Vollzeit-Engagement:** Gruenderin fokussiert sich zu 100% auf das Projekt
- Fachliche Glaubwuerdigkeit bei Kolleginnen bundesweit
- Direkter Zugang zu Pflegekonferenzen und Fachveranstaltungen (kein PR-Budget noetig)
- **Alle Pflegeschulen haben E-Mail-Adressen online** — Kaltakquise per E-Mail mit Testphasen-Angebot moeglich
- Eigene Materialien + I Care PDFs als Content-Grundlage vorhanden

#### Konkrete Vertriebskanäle (belegt recherchiert)

| Kanal | Reichweite | Kosten | Zeitaufwand | Eignung |
|---|---|---|---|---|
| **Eigene Pilotschule** | 1 Schule | ~0 € | Niedrig | Phase 1 (Monat 1–6) |
| **Persönliche Kolleginnen-Netzwerk** (Dozentin) | 5–20 Schulen | ~0 € | Mittel | Phase 1–2 |
| **Altenpflege-Messe Essen** (April 2026) | >10.000 Fachbesucher, Schulen präsent | 500–2.000 € Messestand (klein) | Mittel | Phase 2 |
| **Deutscher Pflegetag** | Fokus Ausbildung, Schulleiter präsent | Redner-Pitch: kostenlos bei Einreichung | Hoch | Phase 2–3 |
| **Pflege Plus Stuttgart** | ~5.000 Fachbesucher | 500–1.500 € | Mittel | Phase 2–3 |
| **LinkedIn Outreach** (Schulleiter, Pflegelehrkräfte) | Bundesweit | ~0 € (Zeit) | Mittel | Laufend |
| **Digitalpakt-Förderbewusstsein nutzen** (siehe unten) | Schultraeger-Budget vorhanden | 0 € (Aufklärungsarbeit) | Mittel | Phase 2–3 |
| **Fachzeitschriften Pflege** (Artikel platzieren) | Pflegezeitschrift, Die Schwester Der Pfleger | Kostenlos als Gastbeitrag | Mittel | Phase 2–3 |
| **B2C Viral → B2B Pull** | Azubis empfehlen eigene Schule | ~0 € | Niedrig (selbstverstärkend) | Laufend |

**Quellen:** news4teachers.de, altenpflege-messe.de, deutscher-pflegetag.de, responsify.com, osercomm.com (EdTech Sales Cycles)

#### Geschaetzter CAC pro Kanal

| Kanal | Geschaetzter CAC / Schule | Basis |
|---|---|---|
| Eigene Schule (Pilotschule) | ~0 € | Direktkontakt, kein Vertriebsaufwand |
| Persönliches Netzwerk | ~50–200 € (Zeit, Demo-Meeting) | Schätzung: 3–8 Std Aufwand pro Schule × 25–50 €/Std Opportunitätskosten |
| Messe (Altenpflege) | 200–500 € / Lead, ~2.000 € / Abschluss | Messekosten / Anzahl Schulabschlüsse; gängige EdTech-Richtwerte |
| LinkedIn Outreach | 100–300 € (Zeit) | Cold-Outreach-Konversion ca. 5–10% |
| B2C-Pull-Effekt | ~20–50 € / Schule | Azubi-CAC (B2C) × 3–5 Azubis nötig um Schulleiter zu motivieren |

**Fazit CAC:** Für Solo-Gründerin mit Insiderzugang ist der effektivste Kanal das persönliche Netzwerk — CAC unter 200 € pro Schule realistisch. Zum Vergleich: Schullizenz 99–199 €/Mo = LTV ~1.200–2.400 €/Jahr → CAC/LTV-Ratio von 1:6 bis 1:24 — ausgezeichnet für B2B SaaS.

---

#### Unit Economics: LTV pro Segment (neu, Iteration 5)

**Formel:** LTV = ARPU × (1 / monatliche Churn-Rate) — vereinfacht bei konstanter Churn-Rate

**Churn-Annahmen (belegt, EdTech-Benchmarks 2025):**
- B2C Azubi-Churn: 7 %/Monat (konservativ, zwischen 6,5–8 % EdTech B2C Benchmark)
- B2B Schulen-Churn: 5 %/Monat (Schullizenzen länger; EdTech B2B Worst-Case 9,6 %/Mo, eigene Plattform hat Gründerin-Vorteil → besser als Marktdurchschnitt angenommen)
- Jahres-Retention daraus: B2C ~43 % nach 12 Mo; B2B ~54 % nach 12 Mo
- Quellen: Vitally.io B2B SaaS Churn Benchmarks 2025, Churnkey.co B2C vs B2B Churn 2025

| Segment | ARPU/Mo | Churn/Mo | Ø Kundenlaufzeit | LTV (brutto) | Stripe-Gebühr (1,5%+0,25€) | LTV (netto) |
|---|---|---|---|---|---|---|
| B2C Azubi Premium | 4,99 € | 7 % | ~14 Mo | ~69 € | ~1,25 € | **~67 €** |
| B2B Schule (klein, 100 Schüler) | 99 €/Mo | 5 % | ~20 Mo | ~1.980 € | ~15 € | **~1.965 €** |
| B2B Schule (mittel, 300 Schüler) | 199 €/Mo | 5 % | ~20 Mo | ~3.980 € | ~27 € | **~3.953 €** |

**LTV:CAC-Verhältnisse:**

| Segment | LTV (netto) | CAC (Schätzung) | LTV:CAC | Bewertung |
|---|---|---|---|---|
| B2C Azubi (Netzwerk/Viral) | 67 € | ~10–20 € (organisch) | ~4:1–7:1 | Gut (SaaS-Benchmark: ≥3:1) |
| B2B Schule (Netzwerk) | ~1.965 € | ~50–200 € | ~10:1–39:1 | Ausgezeichnet |
| B2B Schule (Messe) | ~1.965 € | ~500–2.000 € | ~1:1–4:1 | Grenzwertig → Netzwerk bevorzugen |

**Fazit Unit Economics:**
B2B-Schullizenz ist das wirtschaftlich attraktivere Segment (LTV ~30x höher als B2C). B2C ist primär als Akquisitionskanal für B2B wertvoll, nicht als primäre Revenue-Quelle. Jeder Azubi, der die Plattform privat nutzt, ist ein potenzieller B2B-Lead für seine Schule.

**Quellen:** Vitally.io SaaS Churn Benchmarks 2025 (https://www.vitally.io/post/saas-churn-benchmarks), Churnkey.co B2C vs B2B (https://churnkey.co/blog/the-difference-between-b2b-b2c-churn-rates/), Wall Street Prep LTV/CAC Calculator (https://www.wallstreetprep.com/knowledge/ltv-cac-ratio/)

---

#### Sensitivity-Analyse: Was wenn Churn 2x höher? Was wenn nur 50% SAM erreichbar? (neu, Iteration 6)

**Hintergrund:** EdTech SaaS zeigte 2024→2025 einen Churn-Anstieg von 11% auf 22% Jahresumsatz-Churn (+71%). Sensitivitäts-Szenarien sind daher kein akademisches Glasperlenspiel, sondern betriebswirtschaftliche Pflicht.

**Szenario 1 — Churn verdoppelt sich (B2C: 7% → 14%, B2B: 5% → 10%):**

| Segment | Base Case | Churn x2 | LTV-Effekt | Kommentar |
|---|---|---|---|---|
| B2C Azubi Premium (4,99 €/Mo) | Churn 7%/Mo → Laufzeit ~14 Mo → LTV ~67 € | Churn 14%/Mo → Laufzeit ~7 Mo → LTV ~32 € | **-52% LTV** | Break-Even-Grenze: statt 9 jetzt ~18 Abonnenten nötig |
| B2B Schule klein (99 €/Mo) | Churn 5%/Mo → Laufzeit ~20 Mo → LTV ~1.965 € | Churn 10%/Mo → Laufzeit ~10 Mo → LTV ~970 € | **-51% LTV** | Schule kündigt nach 1 Jahr → 1.188 € statt 1.965 € |

**Konsequenz:** Selbst bei verdoppeltem Churn deckt 1 Schullizenz (99 €/Mo × 12 Mo = 1.188 €) die Fixkosten (43 €/Mo × 12 = 516 €) locker — Break-Even ist robust. B2C wird bei hohem Churn zum reinen Akquisitionskanal für B2B (kein eigenständiges Business-Modell).

**Szenario 2 — Nur 50% des SAM erreichbar (SAM-Halbierung):**

| Szenario | SAM-Annahme | Schulen | B2C-Abonnenten | Jahresumsatz (Jahr 3) |
|---|---|---|---|---|
| Base Case | SAM voll erreichbar | 15–20 Schulen | 3.000 | ~215.000 € |
| Konservativ (50% SAM) | 50% des SAM | 7–10 Schulen | 1.500 | ~107.000 € |
| Sehr konservativ (25% SAM) | 25% des SAM | 3–5 Schulen | 750 | ~54.000 € |

**Fazit Sensitivity-Analyse:** Auch unter sehr konservativen Annahmen (25% SAM, Churn x2) ist die Plattform nach Jahr 2 profitabel — Fixkosten sind mit nur 1 Schullizenz gedeckt. Das niedrige Fixkosten-Fundament ($45/Mo) macht die Plattform strukturell resilient gegen Markt-Risiken. Risiko-Quelle Nummer 1 ist nicht Churn, sondern B2B-Sales-Zyklus (9–18 Monate Entscheidungszeit bei Schulen).

**Quellen:** Phoenix Strategy Group: "SaaS Cash Flow Sensitivity: Impact of Churn Rates" (phoenixstrategy.group/blog/saas-cash-flow-sensitivity-impact-churn-rates); Wearefounders.uk: "SaaS Churn Rates by Industry 2026" (wearefounders.uk/saas-churn-rates-and-customer-acquisition-costs-by-industry-2025-data/); Vitally.io 2025 EdTech Churn Benchmarks.

---

#### Digitalpakt 2.0 als Förderopportunität

**Was ist Digitalpakt 2.0?**
Der Digitalpakt 2.0 investiert 5 Milliarden Euro von 2026–2030 (je 50% Bund und Länder). Maßnahmen gelten rückwirkend ab 1. Januar 2025. Pflegeschulen nach PflBG sind explizit in die Förderung einbezogen (inkl. Schulen in freier Trägerschaft). Quelle: bmbfsfj.bund.de, digitalpaktschule.de

**Wichtige Neuerung:** Digitalpakt 2.0 geht **über Infrastruktur hinaus** und erlaubt auch Förderung von **Bildungssoftware und Lernplattform-Lizenzen**. Nicht nur WLAN und Tablets — auch Software-Lizenzen (kein einjähriges Ablaufen) sind förderungsfähig. Quelle: deutsches-schulportal.de, forum-verlag.com/digitalpakt-2-0

**Konkrete Beispiele Pflegeschulen (belegt):**
- Pflegeschule NRW (BZPG): erhielt ~90.000 € aus Digitalpakt 1.0, stockte auf 115.000 € auf — für digitale Infrastruktur. Quelle: bzpg.de
- Brandenburg: 23 von 28 Pflegeschulen erhielten ~1,3 Mio. € insgesamt (Ø ~57.000 €/Schule) aus Digitalpakt 1.0. Quelle: mgs.brandenburg.de

**Pitch-Argument an Schulen:**
"Ihre Schule kann die Lernplattform-Lizenz (99–199 €/Mo) als Bildungssoftware aus dem Digitalpakt 2.0-Budget beantragen. Wir helfen Ihnen bei der Antragstellung — das ist kein zusätzlicher Schulausgaben-Posten, sondern ein Förderprojekt."

**Risiko:** Digitalpakt 2.0 ist noch nicht final in allen Bundesländern umgesetzt (Stand März 2026 NRW offiziell: Dezember 2025 bestätigt). Landesspezifische Umsetzungsrichtlinien variieren. Empfehlung: Mit Schultraeger (nicht nur Schulleitung) sprechen, da Förderanträge beim Schultraeger liegen.

#### Digitalpakt 2.0 — Konkreter Antragsprozess (neu, Iteration 5)

**Wer stellt den Antrag?**
Der Schulträger (nicht die Schulleitung) ist der offizielle Zuwendungsempfänger. Für private Pflegeschulen nach § 9 PflBG ist der Träger (z.B. Wohlfahrtsverband, GmbH, Kirche) der Antragsteller. Quelle: BASS NRW 11-02 Nr. 34, RL DigitalPakt NRW (bass.schule.nrw/18679.htm)

**Schritt-für-Schritt-Prozess (am Beispiel NRW, exemplarisch):**

| Schritt | Aktion | Zuständig | Dauer |
|---|---|---|---|
| 1 | Medienentwicklungsplan (MEP) erstellen | Schule + Schulträger | 2–4 Wochen |
| 2 | Förderprogramm identifizieren (Digitalpakt 2.0 oder Landesrichtlinie) | Schulträger | 1 Woche |
| 3 | Antrag bei Bezirksregierung / Landesbehörde einreichen | Schulträger | Einmalig |
| 4 | Bewilligung erhalten (pauschalierte Zuweisung möglich) | Behörde → Schulträger | 4–12 Wochen |
| 5 | Lernplattform-Lizenz als "digitale Lernumgebung" / Bildungssoftware einkaufen | Schulträger/Schule | Nach Bewilligung |
| 6 | Verwendungsnachweis erbringen | Schulträger | 3–6 Monate nach Kauf |

**Bildungssoftware als förderungsfähige Maßnahme (belegt):**
Der Digitalpakt 2.0 erlaubt ausdrücklich die Förderung von Bildungssoftware und digitalen Lernumgebungen. NRW-Richtlinie (RL DigitalPakt NRW): "zeitgemäße digitale Lernumgebungen" sind förderfähig. Das umfasst Software-Lizenzen. Quelle: BMBFSFJ Pressemitteilung Digitalpakt 2.0 (bmbfsfj.bund.de), RL DigitalPakt NRW (BASS 2025/2026)

**Praxistipp für Pitch an Schulen:**
"Die Lizenz unserer Lernplattform (99–199 €/Mo = 1.188–2.388 €/Jahr) kann als Bildungssoftware aus dem Digitalpakt 2.0 gefördert werden. Ihr Schulträger stellt den Antrag über den Medienentwicklungsplan — wir stellen Ihnen die erforderliche Produktbeschreibung und Kosten-Nutzen-Dokumentation bereit."

**Vereinfachung durch pauschalierte Zuweisungen:**
Kommunale Schulträger können ab Digitalpakt 2.0 pauschalierte Zuweisungen erhalten — kein aufwendiger Einzelantrag pro Maßnahme nötig. Quelle: BMBFSFJ Einigung Digitalpakt 2.0 (Dezember 2025), KMK Pressemitteilung

**Quellen:**
- https://bass.schule.nrw/18679.htm — BASS NRW: RL DigitalPakt NRW 2025/2026 (Schulträger als Antragsteller)
- https://www.bmbfsfj.bund.de/bmbfsfj/aktuelles/pressemitteilungen/digitalisierung-von-schulen-bund-und-laender-einig-ueber-den-digitalpakt-2-0-278566 — BMBFSFJ: Einigung Digitalpakt 2.0 (Bildungssoftware förderungsfähig)
- https://www.schulministerium.nrw/presse/pressemitteilungen/digitalpakt-20-kommt-18-12-2025 — NRW Schulministerium: Digitalpakt 2.0 beschlossen Dez. 2025
- https://deutsches-schulportal.de/bildungswesen/was-hat-der-digitalpakt-schule-bislang-gebracht/ — Deutsches Schulportal: Übersicht Digitalpakt 2.0

---

#### 0 → 1 → 10 → 100 Schulen: Konkreter Pfad

| Phase | Ziel | Dauer | Strategie | Erfolgskriterium |
|---|---|---|---|---|
| **Phase 0 (Pilotschule)** | 1 Schule | Monat 1–6 | Ehemalige Schule der Gruenderin (bereits begeistert vom Konzept); kostenloser/symbolischer Pilot + E-Mail-Outreach an weitere Schulen mit Testphasen-Angebot | Testimonial + 1 dokumentierter Lernerfolg |
| **Phase 1 (Netzwerk)** | 2–5 Schulen | Monat 6–12 | Kolleginnen-Netzwerk, persönliche Demos, Altenpflege-Messe April 2026 | 3 zahlende Schulen @ 99–149 €/Mo |
| **Phase 2 (Pull)** | 5–20 Schulen | Monat 12–24 | B2C-Azubis aus Phase-1-Schulen empfehlen → andere Schulen fragen nach | 15 Schulen = ~1.800 €/Mo Umsatz |
| **Phase 3 (Skalierung)** | 20–100 Schulen | Monat 24–48 | Messe, Digitalpakt-Argument, LinkedIn, Fachzeitschriften | 50 Schulen = ~7.500 €/Mo = ~90.000 €/Jahr |

**Kritische Annahme fuer den Pfad:** B2C-zu-B2B-Hebel funktioniert — d.h. Azubis die die Plattform privat nutzen, empfehlen sie aktiv an ihre Schule. Dieser Effekt ist bei Novaheal/AMBOSS belegt (>10.000 MAU → Schul-Inbound-Anfragen). Muss in Pilotphase gemessen werden.

> **PIVOT GO-TO-MARKET (2026-03-16):** Der primaere Vertriebskanal nach dem Pivot ist B2B-Direktvertrieb an Schulen mit Lehrermangel. Die Grfuenderin nutzt ihre eigene Pflegeschule als erstem Pilotkunden und spricht dann Schulen mit belegtem Lehrermangel an (NRW: 200+ offene Stellen, BLGS-Datenbank). Kernargument fuer Schulleitung: ROI-Logik (Opportunitaetskosten einer Vakanz vs. Plattform-Kosten). Sekundaer: B2C-Freemium als selbstverstaerkender Akquisitionskanal. Vollstaendige Pivot-Positionierung und Pitch-Texte: `recherche/PIVOT_RECHERCHE.md` Abschnitte 4.3–4.4.

**Lock-in-Risiken Technologie-Anbieter (aktualisiert Iteration 005):**
- **Hetzner Cloud:** Standard-Linux-VPS, jederzeit zu anderem Provider migrierbar. Risiko: SEHR NIEDRIG.
- **PostgreSQL (self-hosted):** Open Source, Standard-SQL → null Lock-in. Risiko: SEHR NIEDRIG.
- **Next.js:** Open Source, deployt auf jedem Node-Server. Risiko: NIEDRIG.
- **Nebius AI:** OpenAI-API-kompatibel → Migration zu OpenAI/Anthropic mit Env-Variable-Wechsel. Risiko: SEHR NIEDRIG.
- **Stripe:** Kundendaten exportierbar; Migration zu Paddle oder LemonSqueezy möglich. Risiko: NIEDRIG.
- **Gesamtbewertung:** Stack hat praktisch keinen Lock-in. Alles Open Source oder Standard-APIs.

---

### 4.2 Die 4 USPs nach Pivot (B2B-first)

> **PIVOT-HINWEIS:** USP-Hierarchie wurde geaendert. USP 0 (Lehrermangel) ist der neue Haupt-USP fuer den B2B-Schulen-Pitch. USP 1–3 bleiben als Supporting Features.

**USP 0 (HAUPT-USP): "Schulen trotz Lehrermangel handlungsfaehig" — Infrastruktur-Loesung**

Was es ist: Die Plattform ermoeglicht Inverted Classroom: Schueler erarbeiten Theorie (alle 11 CE, 1.500+ Prüfungsfragen) selbstgeleitet ueber die Plattform, der verbleibende Dozent wird zum Lernbegleiter statt zum Wissensvermittler. Eine Lehrkraft kann damit den Theorieanteil abdecken, fuer den normalerweise 1,2–1,5 Vollzeitstellen noetig waeren.

Beleg und ROI: 50% aller Pflegeschulen finden Lehrkraftgewinnung problematisch (BIBB-Pflegepanel). Dozentenstelle kostet ~85.000–91.000 €/Jahr (Arbeitgeberkosten). Plattform-Jahreslizenz fuer 60 Schueler: 6.000–12.000 €/Jahr = 7–14% einer Dozentenstelle. Break-Even: Ein einziger Monat, in dem eine Klasse dank Plattform weiterlaufen kann obwohl eine Stelle unbesetzt ist. Vollstaendige Pivot-Recherche, Opportunitaetskosten-Berechnung und Value-Prop-Canvas: `recherche/PIVOT_RECHERCHE.md`.

Pitch an Schulleitung: "Bevor Sie Ihre naechste Stelle 8 Monate lang erfolglos ausschreiben: Damit koennen Ihre vorhandenen Lehrkraefte 20–30% mehr Schueler effektiv begleiten — fuer weniger als ein Lehrbuch pro Schueler."

---

**USP 1: "Pflege Lernen in deiner Sprache" — Bilingualer Fachinhalt fuer internationale Azubis**

Was es ist: Vollstaendiges Fachbegriff-Glossar (200–400+ Eintraege) in Deutsch, Arabisch und Tuerkisch; UI in Arabisch mit korrektem RTL-Layout; Hover-Erklaerungen auf alle Fachbegriffe in Erklaertexten; optionale Einfache-Sprache-Version fuer B1-Nutzer. Das Glossar ist auch ENABLER fuer selbstgesteuertes Lernen: B1-Schueler koennen nur dann unabhaengig auf der Plattform arbeiten, wenn Fachbegriffe in ihrer Muttersprache verfuegbar sind.

Beleg: 20% aller Azubis (Berlin: 36%) sind international. Kein einziger untersuchter Wettbewerber bietet uebersetzte Pflegefachinhalte — smartAware hat 27 Sprachen nur in der UI, Fachinhalte bleiben deutsch. Lecturio adressiert nur das Anerkennungsverfahren, nicht die laufende Ausbildung.

---

**USP 2: "Der smarte Lernpfad" — KI-adaptives Lernen nach individuellem Wissensstand**

Was es ist: Algorithmus passt nach jedem Quiz automatisch naechsten Inhalt an — schwache CE werden verstaerkt, starke beschleunigt, Wiederholungsintervalle (Spaced Repetition) algorithmisch gesetzt. Mastery-Threshold: 80% korrekt = naechstes Level freigeschaltet. Im Inverted-Classroom-Modell besonders wertvoll: Jeder Schueler arbeitet in seinem eigenen Tempo, der Lernbegleiter sieht im Dashboard wer Hilfe braucht.

Beleg: Kein untersuchter Wettbewerber implementiert echtes KI-adaptives Lernen. 86% Lernverbesserung durch adaptives Lernen nachgewiesen (Journal of Nursing Education, PubMed 32497234). 30–36% Abbruchquote — Hauptursache laut BIBB: fehlende individuelle Foerderung.

---

**USP 3: "Ab Tag 1 nutzbar" — Freemium-Direktzugang als B2B-Trichter**

Was es ist: Freemium-Modell (kostenloser Basiszugang CE 01, Premium ab ~4,99 €/Mo fuer alle verfuegbaren CE); kein Schulvertrag noetig; offline-faehig im Basispaket. Fuer Schulen weniger relevant — aber entscheidend als Akquisitionskanal: Azubis die die Plattform privat nutzen, empfehlen sie ihrer Schule ("Koennen wir das nicht als Klasse machen?").

Beleg: Pflegias (staerkster Curriculum-Anbieter): nur ueber Schullizenzen. AMBOSS/Novaheal Einzelabo: 8,25 €/Mo (nach Uebernahme gestiegen). QuizAcademy kostenlos, aber ohne Erklaerungen. Azubis: ca. 1.190 €/Mo Ausbildungsverguetung im 1. Jahr — preissensitiv. Viral-Effekt belegt durch Novaheal: >10.000 MAU B2C fuehrten zu Schul-Inbound-Anfragen.

---

## 5. INHALTS- UND SPRACHSTRATEGIE

### 5.1 Content-Strategie in 3 Phasen

**Phase 1 — Eigene Basisinhalte (Monate 1–3, parallel zu Entwicklung):**
> **Bestaetigt (2026-03-18):** Gruenderin verwendet **I Care (Georg Thieme Verlag)** als Hauptlehrbuch + weitere wissenschaftliche Quellen. Hat eigene Materialien + I Care PDFs. Content wird paraphrasiert (eigene Formulierungen) → urheberrechtlich sauber. Thieme-Inhalte duerfen NICHT kopiert werden, aber: Paraphrasieren ✅, Struktur als Referenz ✅, eigene Fallbeispiele ✅, Fachbegriffe sind nicht urheberrechtlich geschuetzt ✅. **Lizenzmodell:** Standard-SaaS — Content ist Teil der Plattform, jede Schule kauft eigene Lizenz.

1. Gruenderin formuliert Kernerklarungen in eigenen Worten aus 10+ Jahren Unterrichtserfahrung — kein Urheberrechtsproblem, unmittelbar verwendbar
2. Fachbegriff-Glossar aufbauen (DE/AR/TR) — Basis: arabdict.com + Klett Glossar Arabisch (OER-verfugbar) + DNQP-Terminologie
3. AWMF/DNQP-Leitlinien als Primaerreferenz (kostenlos, zitierfaehig, medizinisch autoritaer)
4. BIBB-Rahmenplan als Strukturgeruest (amtliches Dokument, frei nutzbar)
5. Eigene anonymisierte Fallbeispiele aus Praxiserfahrung entwickeln

**Phase 2 — OER-Integration (Monate 3–6):**
1. ZQP Pflegeleitlinien-Datenbank systematisch auswerten
2. MDPI Open Access Artikel fuer Evidence-Based Content
3. Tutory.de fuer Arbeitsblatt-Vorlagen (CC BY-SA)
4. Landesbildungsserver BW (CC BY 4.0)

**Phase 3 — Verlagslizenzen (bei Wachstum, Monate 6+):**
1. Wenn Plattform kommerziell skaliert: Verhandlung mit Thieme, Elsevier, Springer
2. Kooperationsmodell mit Pflegeschulen als Lizenznehmer pruefen
3. Eigene Materialien unter CC BY 4.0 veroeffentlichen — Community und Sichtbarkeit aufbauen

---

### 5.2 Plagiatschutz-Regeln

**Ampel-System fuer Content-Erstellung:**

| Farbe | Bedeutung | Vorgehen |
|---|---|---|
| GRUEN | Vollstaendig eigener Text, fachlich korrekt | Direkt verwenden |
| GELB | Paraphrase aus Lehrbuch, Quelle angegeben | Verwenden mit Quellennachweis |
| ROT | Direktkopie aus Lehrbuch, kein OER | NICHT verwenden, neu formulieren |
| BLAU | OER-Material mit CC-Lizenz | Lizenz pruefen, Namensnennung beachten |

**Kommerzielle Plattform-Sonderregel:** Die 15%-Regel des UrhWissG gilt nur fuer nichtkommerzielle Nutzung. Sobald die Plattform Einnahmen generiert, braucht es Verlagslizenzen oder ausschliesslich OER/eigene Inhalte. Das ist der Hauptgrund, warum Phase 1 auf eigene Materialien und OER setzt.

**Paraphrasierungs-Prinzip:** Vollstaendig neuen Satz formulieren, eigene didaktische Perspektive, Quellenangabe im Format: (vgl. Autor, Werk, Auflage, S. X), Fachbegriff beibehalten (nur Erklaerung ist eigene Leistung).

---

### 5.3 Sprachmatrix — Was wird uebersetzt

| Content-Typ | Deutsch | Arabisch | Tuerkisch | Englisch |
|---|---|---|---|---|
| UI-Texte (Navigation, Buttons) | Vollstaendig | Vollstaendig | Vollstaendig | Fallback |
| Erklaertexte (Theorie) | Vollstaendig | Schluesselbegriffe hover | Schluesselbegriffe hover | Fachbegriffe (int.) |
| Glossar Fachbegriffe | Pflicht | Pflicht | Pflicht | Optional |
| Quiz-Fragen | Pflicht | Optional (V2.0) | Optional (V2.0) | Nein |
| Fallbeispiele | Pflicht | Vereinfacht (V2.0) | Nein | Nein |
| Notfallbegriffe | Pflicht | Pflicht | Pflicht | Pflicht |
| Prüfungsdokumentation (Pflegebericht) | Pflicht | Nein | Nein | Nein |

**Phase-1-Sprachprioritaeten (MVP):**
1. Deutsch — Arabisch Glossar (200–400 Eintraege, groesste Bedarfsgruppe)
2. Deutsch — Tuerkisch Glossar (etablierte Diaspora)
3. UI komplett in Arabisch mit RTL-Layout

**Terminologie-Quellen:**
- arabdict.com (DE-AR Woerterbuch, kostenlos)
- Klett Glossar Arabisch (OER, CC-Lizenz)
- DNQP Expertenstandards (DE-Terminologie als Ausgangsbasis)
- Selfarabic Medical Vocabulary + Kalimah Hospital Vocabulary (EN-AR)

---

### 5.4 Open-Access-Quellen (nutzbar ohne Lizenzkosten)

| Quelle | Inhalt | Lizenz | Verwendung |
|---|---|---|---|
| BIBB Rahmenplan (bibb.de/dienst/publikationen/download/16560) | Offizielle CE-Struktur und Lernziele | Amtlich, frei | Strukturgeruest aller 11 CE |
| AWMF Leitlinienregister (register.awmf.org) | Alle medizinischen Leitlinien DE | Kostenlos | Fachinhalt CE 05, 06, 07 |
| DNQP Expertenstandards Auszuege (dnqp.de) | Dekubitus, Sturz, Kontinenz | Kostenlos (Auszug) | CE 02, CE 05 |
| ZQP Pflegeleitlinien (pflegeleitlinien.zqp.de) | Pflegestandards ubersichtlich | Kostenlos | Quercheck fuer Korrektheit |
| Cochrane Deutschland (cochrane.de) | Systematische Reviews | Abstracts kostenlos | Evidenzbasierung |
| MDPI Healthcare (mdpi.com/journal/healthcare) | Open Access Pflegeartikel | Volltext kostenlos | Aktuelle Evidenz |
| Landesbildungsserver BW (schule-bw.de) | Unterrichtsmaterialien | CC BY 4.0 | Vorlage-Struktur |
| Tutory (tutory.de) | Arbeitsblatt-Builder | CC BY-SA | Quiz-Vorlagen |
| ZOERR (oerbw.de) | Hochschul-OER | CC variiert | Erklartext-Vorlagen |

---

## 5a. KAUFPROZESS & REFINANZIERUNG — WIE SCHULEN KAUFEN (Iteration 005)

> Vollstaendige Analyse: `recherche/BESCHAFFUNG_KAUFPROZESS.md`

### 5a.1 Wer entscheidet?

**Doppelte Entscheidung:** Schulleitung (paedagogisch) + Traeger (Budget). Bei kleinen privaten Traegern oft dieselbe Person. **Wichtig:** Pflegeschulen sind KEINE staatlichen Schulen — sie unterliegen nicht den Kultusministerien, sondern den Gesundheitsministerien. Das macht sie agiler.

### 5a.2 Traegertypen

| Typ | Anteil | Kaufgeschwindigkeit |
|---|---|---|
| Freigemeinnuetzig (Diakonie, Caritas, AWO, DRK) | ~50-55% | Dezentral, 3-6 Monate |
| Privat (Helios, Asklepios, Fresenius etc.) | ~30-35% | Schnellste Entscheidung, 1-3 Monate |
| Kommunal/oeffentlich | ~10-15% | Vergaberecht beachten, 6-12 Monate |

**Wichtig:** Selbst "die Caritas" ist kein Einzelkunde — jede Pflegeschule hat einen eigenen lokalen Rechtsraeger. Beschaffung ist dezentral. Zuerst Einzelschulen gewinnen, dann ueber Grosstraeger skalieren.

### 5a.3 Ausschreibungspflicht: KEIN PROBLEM

**9.000 €/Jahr liegt in ALLEN Bundeslaendern unter der Direktvergabe-Grenze** (Minimum 10.000 € in RLP, bis zu 100.000 € in Bayern). Freigemeinnuetzige und private Traeger unterliegen grundsaetzlich NICHT dem oeffentlichen Vergaberecht. Nur kommunale Traeger (10-15% des Marktes) muessen Vergaberecht beachten — aber auch da ist Direktvergabe moeglich.

### 5a.4 Refinanzierung ueber PflAFinV — DAS KILLER-ARGUMENT

Die PflAFinV (Pflegeausbildungs-Finanzierungsverordnung) listet **explizit**:
- **Pos. 3.2 "Lernmittel"** — unsere Plattform
- **Pos. 3.7 "Anwendungssoftware"** — unsere Plattform

Die Ausbildungspauschale pro Schueler: **9.400-12.500 €/Jahr** (je nach Bundesland). Unsere 149 €/Schueler = **nur 1,4% der Gesamtpauschale** und ~7-10% der Sachkosten. Die Schule kann unsere Kosten einfach ins Ausbildungsbudget einrechnen und ueber den Ausbildungsfonds refinanzieren lassen.

**Pitch-Formulierung:** "149 €/Schueler — refinanzierbar ueber PflAFinV Pos. 3.2 + 3.7. Das Geld kommt aus dem Ausbildungsfonds, nicht aus dem Schulbudget."

### 5a.5 Timing

- **Sept-Nov:** Budgetplanung fuers Folgejahr → beste Zeit fuer Erstgespraech
- **Jan-Maerz:** Neues Budget verfuegbar → beste Zeit fuer Vertragsabschluss
- **Bis 15. Juni:** Schulen melden Kosten fuer Folgejahr-Budget (PflAFinV)
- **Aug-Okt:** Go-live zum neuen Ausbildungsjahr

---

## 5b. FOERDERUNG & GRUENDUNG (Iteration 005)

> Vollstaendige Analyse: `recherche/FOERDERUNG_RECHERCHE.md`

### 5b.1 Gruendungsform: UG (haftungsbeschraenkt)

- **1 € Stammkapital** — kein Startkapital noetig
- Haftungstrennung: Privatvermoegen geschuetzt
- Professioneller Auftritt: Schulen kaufen eher von "UG/GmbH"
- B2B-Pflicht: Rechnungen mit USt-ID, AVV-faehig
- **Auch in Wohlverhaltensphase moeglich** (§ 295 InsO: Selbststaendigkeit erlaubt)
- Gruendungskosten: ~500 € (Notar + Handelsregister)

### 5b.2 Top-Foerderungen

| Foerderung | Betrag | Verfuegbar? |
|---|---|---|
| **Gruendungsstipendium NRW** | 1.200 €/Mo × 12 = 14.400 € | Wahrscheinlich ja (Pfaendbarkeit klaeren!) |
| **Forschungszulage** | 25-35% F&E-Kosten, bis ~27.000 €/Jahr | Ja — ab UG-Gruendung |
| **BAFA-Beratung** | 80% Zuschuss (max. 3.200 €) | Ja — sofort nutzbar |
| **EXIST Women** | bis 2.000-3.000 €/Mo + Sachmittel | Moeglich — Hochschulanbindung noetig |
| **Digitalpakt 2.0** | Fuer Schulen (nicht direkt fuer uns) | Ab H2 2026 Landesrichtlinien |

**Nicht moeglich (SCHUFA/Insolvenz):** KfW-Kredit, NRW.BANK Kredit, Mikrokreditfonds.

### 5b.3 Bootstrap-Budget

| Posten | Kosten |
|---|---|
| UG-Gruendung (Notar + HR) | ~500 € einmalig |
| Rechtsanwalt Insolvenzrecht (1h) | ~200 € einmalig |
| Geschaeftskonto | ~15 €/Mo |
| Infrastruktur (Hetzner + DB + AI) | ~15 €/Mo (Pilot) |
| DSGVO-Compliance (AVV + DSE) | ~3.000-5.000 € (vor erstem Verkauf) |
| **Gesamt Monat 1** | **~800 €** |
| **Gesamt laufend/Mo** | **~30 €** (vor DSGVO-Investment) |

---

## 6. OFFENE RISIKEN UND ANNAHMEN

### 6.1 Technische Risiken (aktualisiert Iteration 005)

| Risiko | Wahrscheinlichkeit | Impact | Gegenmassnahme |
|---|---|---|---|
| DSGVO-Prufung scheitert an Hosting (US-Cloud) | **Hoch** | **Sehr Hoch** | **Hetzner Cloud (DE) von Anfang an** — Vergabekammer BW 2022: US-Cloud = Deal-Breaker |
| Hosting-Migration Vercel→Hetzner zu komplex | Niedrig | Mittel | Next.js ist Open Source, deployt auf jedem Node-Server; Migration ~1-2 Tage |
| AVV/TOM nicht rechtzeitig vor erstem Verkauf | Mittel | Hoch | Anwalt fruehzeitig beauftragen (~3.000-5.000€ einplanen); Cornelsen-AVV als Referenz |
| Supabase (US-Firma) wird von Schulen abgelehnt | Mittel | Hoch | PostgreSQL self-hosted auf Hetzner als Alternative vorbereiten |
| Skalierung bei > 5.000 MAU: Hetzner Upgrade noetig | Niedrig (Phase 1) | Niedrig | Hetzner CX32 (~20€/Mo) reicht bis ~10.000 MAU |

### 6.2 Inhaltliche Risiken

| Risiko | Wahrscheinlichkeit | Impact | Gegenmassnahme |
|---|---|---|---|
| Gruenderin fuellt Literatur-Inventar nicht zeitnah aus | **Niedrig** (kuendigt Stelle, Vollzeit-Fokus) | Hoch | Content-Kickoff in Woche 1; I Care (Thieme) bestaetigt; eigene Materialien vorhanden |
| Eigene Materialien der Lehrerin basieren auf Buchkopien | Mittel | Mittel | Ampel-System anwenden; alle Materialien vor Digitalisierung auf Plagiat pruefen |
| Fachliche Fehler in eigenen Inhalten | Niedrig | Sehr Hoch | Lehrerin als fachliche Reviewerin bei jedem CE-Abschluss |
| Arabische Ubersetzungen fachlich falsch | Mittel | Hoch | Muttersprachliche Pflegefachkraft als Korrektorin einbeziehen (vor Veroeffentlichung) |
| AWMF-Leitlinien aendern sich und machen Inhalte veraltet | Niedrig | Mittel | Leitlinien-Versions-Tag bei jedem CE-Inhalt; jaehrliche Review-Runde |

### 6.3 Geschaeftliche Risiken (aktualisiert Iteration 005)

| Risiko | Wahrscheinlichkeit | Impact | Gegenmassnahme |
|---|---|---|---|
| **Pflegias Landeslizenz kostenlos** (wie in BW) | Mittel | **Sehr Hoch** | Differenzierung: KI-adaptiv + Mehrsprachig + Dashboard → Features die Pflegias nicht hat; Digitalpakt-Foerderfaehigkeit |
| AMBOSS baut Arabisch-Glossar nach | Niedrig (1–2 Jahre Aufwand) | Mittel | Erste-Mover-Advantage nutzen; Community aufbauen; eigene Inhalte skalieren |
| Pflegias/Cornelsen baut Freemium-Direktzugang | Mittel | Hoch | Agility-Vorteil: Solo-Dev iteriert schneller als Verlag; DaZ bleibt USP |
| Schulen zahlen nicht (B2B Sales-Cycle zu lang) | Mittel | Mittel | **PflAFinV-Refinanzierung als Argument** (Pos. 3.2 + 3.7); Pilotschule als Referenz; Direktvergabe unter 10K€ |
| **DSGVO-Compliance zu teuer fuer Bootstrap** | Mittel | Hoch | ~3.000-5.000€ einplanen; ggf. aus Gruendungsstipendium NRW finanzieren |
| **Wohlverhaltensphase schraenkt Kapitalzugang ein** | Hoch | Mittel | UG statt Einzelunternehmen; Gewinne in UG thesaurieren; keine Kredite moeglich |
| Azubis koennen sich 4,99 €/Mo nicht leisten | Niedrig | Mittel | Freemium grosszugig halten (CE 01 + CE 02 kostenlos = echter Mehrwert) |

### 6.4 Kritische Annahmen — Status (aktualisiert 2026-03-18)

| # | Annahme | Status | Beleg |
|---|---------|--------|-------|
| A | Gruenderin hat genuegend eigene Materialien | **BESTAETIGT** | Hat eigene Materialien + I Care PDFs. Umfang noch zu quantifizieren. |
| B | Materialien duerfen an andere Schulen verkauft werden | **BESTAETIGT** | Standard-SaaS-Modell: Content ist Teil der Plattform, jede Schule kauft Lizenz. Paraphrasierte Inhalte = eigene Leistung. |
| C | Pilotschule tritt als erste Kundin auf | **TEILWEISE BESTAETIGT** | Aktuelle Schule der Gruenderin war begeistert vom Konzept. Gruenderin kuendigt dort — Kontakt bleibt bestehen. E-Mail-Outreach an alle Schulen moeglich. |
| D | Eltern internationaler Schueler erteilen DSGVO-Einwilligung | **OFFEN** | Muss in Pilotphase validiert werden. Minderjaehrige sind selten (Median 21J). |
| E | 4,99 €/Mo B2C-Preispunkt akzeptabel | **OFFEN** | Muss in Pilotphase validiert werden. |

---

## 7. FRAGEN AN DIE GRUENDERIN — STATUS (aktualisiert 2026-03-18)

*Alle Top-5-Fragen beantwortet. Keine Blocker mehr fuer Build-Start.*

### Top-5-Prioritaet — ALLE BEANTWORTET:

1. ✅ **Welche Buecher?** → **I Care (Georg Thieme Verlag)** + weitere wissenschaftliche Quellen. PDFs vorhanden.
2. ✅ **Welche CE in V1.0?** → **Mehrere CE gleichzeitig** mit parallelen Agenten. Basis: CE 01, 02, 05, 06 + alle 11 strukturell.
3. ✅ **Eigene Materialien?** → **Ja**, eigene Materialien + I Care PDFs. Umfang noch zu quantifizieren.
4. ✅ **Herkunftslaender?** → Recherche belegt: TR (#1 bei Anerkennungen), AR (Syrien, Tunesien), PH, BA, UA. **DE/AR/TR-Strategie bestaetigt.**
5. ✅ **Schule zahlt?** → **Aktuelle Schule war begeistert vom Konzept.** Gruenderin kuendigt dort, alle Schulen per E-Mail erreichbar, Testphase als Strategie.

### Weitere Fragen — Beantwortet:

**Paedagogisch:**
- ✅ Gamification → **JA**, interaktives Lernen, Lernzeit-Steuerung gewuenscht
- ✅ Lehrende Fortschritt sehen → **JA**, alle Lehrenden interessiert (Arbeitserleichterung als Lernbegleiter)
- ✅ Plattform im Unterricht → **JA**, beides: Unterricht + selbstgesteuert

**Technik und Datenschutz:**
- ✅ Geraete → **Smartphone (alle), Tablet (viele), Laptop (wenige)** → Mobile-First-Design zwingend
- ✅ Internet → **WLAN oder mobiles Netz vorhanden**
- ✅ Minderjaehrige → **Selten** (Median Ausbildungsbeginn 21J), aber moeglich → Eltern-Einwilligung vorsehen
- ✅ Datenschutzbeauftragter → Gruenderin: "Wenn Datenschutz wichtig ist, muessen wir damit gut umgehen." Nebius (EU) bewusst gewaehlt.

**Geschaeftsmodell:**
- ✅ Andere Lehrende → **Alle interessiert** (Arbeitserleichterung)
- ✅ Jahresrechnung vs. Monatsabo → **Beides**: Monatsabo etwas teurer, Jahresabo guenstiger, **6 Monate Kuendigungsfrist**

### Noch offen (nicht blockierend fuer Build-Start):

- Welches Bloom-Mindestniveau genau? (Briefing empfiehlt Bloom 3-4 — wird mit Default gebaut)
- Welche Fachbegriffe am haeufigsten erklaert? (wird iterativ im Betrieb ergaenzt)
- Soll Portfolio-Funktion in V1.0? (wird auf Phase 2 verschoben)

---

## 8. NAECHSTE SCHRITTE — UEBERGABE AN BUILD-LOOP

### Pre-Build-Checklist (Woche 1–2, aktualisiert Iteration 005)

- [ ] **Treuhänder informieren** über geplante Selbststaendigkeit (Pflicht in Wohlverhaltensphase!)
- [ ] **Rechtsanwalt Insolvenzrecht** — 1h Beratung: Pfaendbarkeit Gruendungsstipendium NRW klaeren (~200€)
- [ ] Lehrerin-Interview: Top-5-Fragen beantworten lassen
- [ ] Literatur-Inventar mit Lehrerin ausfuellen (alle Buecher erfassen)
- [ ] **UG gruenden** (Notar ~500€) — VOR Gruendungsstipendium-Bewerbung KEIN Gewerbe anmelden!
- [ ] Hetzner Cloud Account erstellen (CX22, Nuernberg)
- [ ] PostgreSQL auf Hetzner einrichten (oder Supabase Frankfurt als Zwischenloesung)
- [ ] Datenbankschema entwerfen (Nutzer, Schulen, CE, Lerneinheit, Quiz-Frage, Fortschritt)
- [ ] **BAFA-Beratung beantragen** (80% Zuschuss, sofort moeglich)
- [ ] **Gruendungsstipendium NRW recherchieren** (VOR Gewerbeanmeldung!)

### Sprint-Plan: MVP in 8 Sprints / 16 Wochen (Iteration 007)

> **Detaillierter Plan:** `specs/SPRINT_PLAN.md` (mit Tasks, Aufwaenden, Abnahmekriterien pro Sprint)
> **Grundlage:** 23 MVP-Features aus `specs/FEATURE_LISTE.md`
> **Kontext:** Solo-Entwicklerin + Claude Code. Gruenderin liefert Content parallel.

```
Sprint 1  [Wo 1–2]   Fundament        DB + Auth + Projekt-Struktur
Sprint 2  [Wo 3–4]   CE-Skelett       11 CE navigierbar + Lernpfad-UI + Bloom-Badges
Sprint 3  [Wo 5–6]   Lern-Engine      Quiz-Engine + 8 Fragetypen + Auto-Korrektur + Erklaerungen
Sprint 4  [Wo 7–8]   Gamification     Streak + XP + Kompetenz-Radar + Schueler-Dashboard
Sprint 5  [Wo 9–10]  Karteikarten     FSRS-Algorithmus + Glossar DE/AR/TR + Tooltips
Sprint 6  [Wo 11–12] Lehrer-Bereich   Ampel-Dashboard + Klassen-Setup + Freemium-Gate
Sprint 7  [Wo 13–14] Content + KI     CE 01+02 Inhalte + KI-Lernpfad + Fallvignetten
Sprint 8  [Wo 15–16] Launch-Ready     PWA + Hetzner-Deploy + Stripe + DSGVO + Polish
```

**Meilensteine:**

| Woche | Meilenstein | Go/No-Go |
|-------|-------------|----------|
| 2 | Fundament steht | Auth + DB + CI gruen |
| 6 | Alpha spielbar | 1 CE mit 8 Fragetypen durchspielbar |
| 10 | Beta intern | Gamification + Karteikarten + Glossar |
| 12 | Lehrer-Demo | Dashboard zeigbar fuer Pilotschule |
| 14 | Content Complete | CE 01 + CE 02 vollstaendig, KI aktiv |
| 16 | **MVP Launch** | Live, PWA, Stripe, Pilotschule startet |

**Content-Zeitplan (Gruenderin parallel):**

| Woche | Gruenderin liefert | Entwicklerin verarbeitet |
|-------|-------------------|------------------------|
| 1–4 | CE-01-Struktur: Lernziele, Session-Gliederung | DB-Schema, Navigation |
| 5–8 | CE-01 Erklaertexte + 30 Quiz-Fragen | Quiz-Engine |
| 9–10 | 100 Glossar-Begriffe (DE) + CE-02-Struktur | Glossar + FSRS |
| 11–12 | CE-02 Erklaertexte + 30 Quiz-Fragen + 2 Fallbeispiele | Lehrer-Dashboard |
| 13–14 | Restliche Quiz-Fragen (50+ pro CE) + Review | Content-Import + KI |
| 15–16 | Pilotschule vorbereiten, Kolleginnen informieren | Deploy + Polish |

**Sprint 8 umfasst DSGVO-Compliance (vor Schulverkauf Pflicht):**
- AVV anwaltlich erstellen (~2.000 EUR), TOM dokumentieren, VVT anlegen
- Datenschutzerklaerung (~500 EUR), DSFA (Eigenarbeit)
- Hosting-Migration auf Hetzner Cloud, PostgreSQL self-hosted
- Budget: ~3.000–5.000 EUR (aus Gruendungsstipendium NRW finanzierbar)

**Budget waehrend Entwicklung (16 Wochen): ~25 EUR** (Vercel Hobby + Nebius Test). Ab Launch: ~15 EUR/Mo (Hetzner + PostgreSQL + Nebius).

**Zeitplan-Risiken und Fallbacks:**

| Risiko | Fallback |
|--------|----------|
| Content zu spaet | Dummy-Content ab Sprint 2; Gruenderin startet Woche 1 |
| FSRS zu komplex | Leitner-System (3 Boxen) statt FSRS |
| KI-API unzuverlaessig | Regelbasierte Schwierigkeit (ohne KI) |
| Hetzner-Probleme | Vercel fuer Pilot (DSGVO-Risiko dokumentieren) |

**Sprint 5 (Woche 11–12): Polish, Engagement und Launch**
- **Onboarding-Flow** (Duolingo-Pattern): Value before Signup (Demo-Lektion ohne Account), persoenliches Tagesziel waehlen, Progressive Feature Disclosure
- **Heatmap-Kalender** (Anki-Pattern): GitHub-artige Jahresansicht der Lerntage
- Push-Notifications / E-Mail-Erinnerungen (Resend) fuer Spaced Repetition + **Streak-Warnung** (Duolingo-Pattern)
- **Dark Mode** (Brilliant-Pattern) — fuer Nachtschicht-Lernen
- Offline-Funktion: Inhalte vorab laden (Progressive Web App)
- Performance-Optimierung, WCAG-AA Barrierefreiheit-Check
- Weiche Oeffentlichkeit: Social Media, Pflegeausbildungs-Communities, Reddit r/Pflege

### Datenbankschema — Minimal-Entwurf

```sql
-- Nutzer
users (id, email, role: 'student'|'teacher'|'admin', school_id, language: 'de'|'ar'|'tr', created_at)

-- Schulen (B2B)
schools (id, name, bundesland, contact_email, license_type: 'free'|'pilot'|'paid', created_at)

-- CE-Struktur
ce_units (id, number: 1-11, title_de, title_ar, title_tr, ausbildungsdrittel, zeitrichtwert_h, prüfungsrelevanz)
learn_modules (id, ce_id, title, bloom_level: 1-6, order, content_type: 'text'|'quiz'|'case'|'glossary', duration_min)
quiz_questions (id, module_id, question_de, question_ar, question_tr, type: 'mc'|'ordering'|'gap'|'flip'|'dragdrop', bloom_level, difficulty: 1-5)
quiz_answers (id, question_id, answer_text_de, answer_text_ar, is_correct, explanation_de)
glossary_terms (id, ce_id, term_de, definition_de, term_ar, definition_ar, term_tr, definition_tr)

-- Lernfortschritt + Mastery (Khan-Pattern: 5 Stufen)
user_progress (id, user_id, module_id, completed_at, score_pct, attempts)
skill_mastery (id, user_id, module_id, level: 'not_started'|'attempted'|'familiar'|'proficient'|'mastered', updated_at)

-- Spaced Repetition (FSRS-Algorithmus, Anki-Pattern)
spaced_repetition_queue (id, user_id, question_id, next_review_at, difficulty, stability, retrievability, interval_days, reps)

-- Gamification (Duolingo-Pattern)
user_streaks (id, user_id, current_streak, longest_streak, last_activity_date, streak_freezes_remaining)
xp_log (id, user_id, xp_amount, source: 'lesson'|'quiz'|'streak_bonus'|'daily_goal', created_at)
user_daily_goals (id, user_id, goal_minutes: 5|10|15|20, created_at)
```

### Content-Kick-off — Inputs fuer Sprint 2 (aktualisiert 2026-03-18)

**Bereits geklaert:**
- [x] Lehrbuch: I Care (Georg Thieme Verlag) — bestaetigt
- [x] Eigene Materialien vorhanden — bestaetigt
- [x] Freigabe: Standard-SaaS-Modell, Content Teil der Plattform — bestaetigt
- [x] CE-Strategie: Mehrere CE parallel mit Agenten — bestaetigt

**Noch zu liefern (parallel zu Sprint 1):**
- [ ] Gruenderin quantifiziert eigene Materialien: Wie viele Folien, Arbeitsblaetter, Fallbeispiele, fuer welche CE?
- [ ] Mindestens 5 eigene Erklaerungen pro CE (CE 01, CE 02 prioritaer)
- [ ] Mindestens 2 Fallbeispiele pro CE (anonymisiert, mit Lernziel)
- [ ] Glossar: Erste 50 Fachbegriffe, die am haeufigsten im Unterricht erklaert werden muessen

---

---

## 9. CROSS-REFERENZ-VERZEICHNIS (aktualisiert Iteration 006)

> Dieses Briefing referenziert die folgenden Detaildokumente. Bei Widerspruechen gelten die hier genannten Abschnitte als kanonisch.

| Thema | Dokument | Relevante Abschnitte |
|---|---|---|
| **Lehrermangel-Fakten, Quellenbelege** | `recherche/PIVOT_RECHERCHE.md` | 1.1–1.6 (Paedagogenmangel, Stellenkosten, Lehrer-Schueler-Verhaeltnis, pol. Massnahmen) |
| **Bundesweite Mangel-Zahlen (Detail)** | `recherche/PFLEGEPAEDAGOGEN_MANGEL_RECHERCHE.md` | Vollstaendig (Iteration 005) |
| **Inverted-Classroom-Evidenz** | `recherche/PIVOT_RECHERCHE.md` | 2.1 (Studien 1–7: Blended Learning, SDL, ICM in Pflegeausbildung) |
| **Plattform vs. Dozent Aufgabenteilung** | `recherche/PIVOT_RECHERCHE.md` | 2.2 + `recherche/paedagogik/ERGEBNIS.md` 4.10 (Rollenmatrix) |
| **Rechtliche Zulaessigkeit (Detail)** | `recherche/PIVOT_RECHERCHE.md` | 2.4.1–2.4.9 (§ 2 Abs. 4 PflAPrV, PflAPrV §§ 1-5, LAGPflB NRW, COVID-Praezedenz, § 9 PflBG, Rote Linien, Pitch-Formulierungen, Praxisbeispiele, Behoerden) |
| **Rechtliche Zulaessigkeit (Zusammenfassung)** | `PROJEKTBRIEFING.md` | 2.5 (Iteration 003) |
| **Massnahmen gegen Paedagogenmangel** | `PROJEKTBRIEFING.md` | 2.6 (Iteration 003) |
| **Value-Based-Pricing Herleitung** | `recherche/PIVOT_RECHERCHE.md` | 3.1–3.4 (Vakanzkosten, Preisrahmen, LMS-Vergleich, Revenue-Projektion) |
| **Wettbewerber-Preise (echte Zahlen)** | `recherche/wettbewerb/PREISRECHERCHE_WETTBEWERBER.md` | Vollstaendig (Iteration 005) |
| **USP-Framing und Value Proposition** | `recherche/PIVOT_RECHERCHE.md` | 4.1–4.4 (Positionierung, Canvas, Zielkunden, Pitch-Texte) |
| **Barbara Koch Persona (B2B-Entscheiderin)** | `recherche/paedagogik/ERGEBNIS.md` | 4.9 |
| **Inverted-Classroom-Rollenmatrix** | `recherche/paedagogik/ERGEBNIS.md` | 4.10 |
| **Lernbegleiter-Dashboard Anforderungen** | `recherche/paedagogik/ERGEBNIS.md` | 4.11 |
| **Tag MIT/OHNE Plattform (Schulleiter)** | `recherche/paedagogik/ERGEBNIS.md` | 4.12 |
| **Tag MIT/OHNE Plattform (Lehrerin)** | `recherche/paedagogik/ERGEBNIS.md` | 4.8 |
| **CE-Struktur, Bloom-Taxonomie, Pruefung** | `recherche/paedagogik/ERGEBNIS.md` | 1–4.7 |
| **Muster-Fallvignetten** | `recherche/paedagogik/ERGEBNIS.md` | 4.4 (CE 02), 4.5 (CE 05) |
| **Wettbewerbsanalyse** | `recherche/wettbewerb/ERGEBNIS.md` | Vollstaendig |
| **Tech-Stack und Kosten** | `recherche/technik/ERGEBNIS.md` | Vollstaendig |
| **Inhalts- und Sprachstrategie** | `recherche/inhalte/ERGEBNIS.md` | Vollstaendig |
| **Kaufprozess & Beschaffung** | `recherche/BESCHAFFUNG_KAUFPROZESS.md` | Vollstaendig (Iteration 005) |
| **DSGVO-Anforderungen fuer Schulverkauf** | `recherche/DSGVO-ANFORDERUNGEN.md` | Vollstaendig (Iteration 005) |
| **Foerderung & Gruendung (Wohlverhaltensphase)** | `recherche/FOERDERUNG_RECHERCHE.md` | Vollstaendig (Iteration 004) |
| **Foerderung fuer Plattform-Entwicklung** | `recherche/FOERDERUNG_PLATTFORM_RECHERCHE.md` | Vollstaendig (Iteration 005) |
| **UI/UX-Referenzanalyse (7 Plattformen)** | `recherche/UI_UX_REFERENZANALYSE.md` | Vollstaendig (Iteration 006) |
| **Nutzerkritik Pflege-Apps (Schueler, Lehrer, Praxisanleiter)** | `recherche/NUTZERKRITIK_PFLEGE_APPS.md` | Vollstaendig (Iteration 007) |
| **Feature-Liste (38 Features, MVP/V1.1/V2.0)** | `specs/FEATURE_LISTE.md` | Vollstaendig (Iteration 007) |
| **Sprint-Plan (8 Sprints, 16 Wochen)** | `specs/SPRINT_PLAN.md` | Vollstaendig (Iteration 007) |
| **Digitalpakt 2.0 Foerderfaehigkeit** | `recherche/PIVOT_RECHERCHE.md` | 6.1–6.7 (Iteration 003) |
| **Revenue-Projektion (3 Szenarien)** | `recherche/PIVOT_RECHERCHE.md` | 3.4 (Iteration 003) |

---

*Dieses Briefing ist das Deliverable der gesamten Phase 1. Es fasst alle Ergebnisse aus Paedagogik-, Technik-, Wettbewerb-, Inhalts-, Rechts-, Foerderungs-, Beschaffungs-, UI/UX- und Nutzerkritik-Recherche zusammen, loest identifizierte Widersprueche auf und gibt einem Entwickler alle Informationen, die fuer den direkten Bau-Start benoetigt werden.*

*Gruenderin-Interview abgeschlossen (2026-03-18). Nutzerkritik-Recherche abgeschlossen (2026-03-19). Alle blockierenden Fragen geklaert. Naechster Schritt: Build-Start Sprint 1.*

*Stand: 2026-03-19 | Version 2.8 | Pflege-Lernplattform Projekt*
