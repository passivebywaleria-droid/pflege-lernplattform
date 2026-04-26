# IDEEN.md — Feature-Ideen für später

> Gesammelte Ideen die NICHT im aktuellen Sprint sind.
> Werden bei Bedarf in den Sprint-Plan übernommen.

---

## 1. Rive-Animierte Gesprächssimulation

**Idee:** Animierte Figuren (Pfleger, Patient, Praxisanleiter) via Rive-App erstellen. Der Schüler sieht eine lebendige Szene — nicht nur Chat-Blasen, sondern bewegte Charaktere mit Mimik und Gestik.

**Wie es funktionieren könnte:**
- Rive-Charaktere (2D-animiert) stehen sich gegenüber
- Patient spricht (Sprechblase + TTS-Audio + Charakter-Animation)
- Schüler tippt frei ein was er als Pfleger sagen würde
- KI (Llama) simuliert die Reaktion des Patienten basierend auf dem Gesagten
- Patient reagiert emotional (Rive-State-Machine: zufrieden / verwirrt / verärgert / erleichtert)
- Praxisanleiter kann als dritte Figur dazukommen und Feedback geben

**Szenarien:**
- Pfleger ↔ Patient: Aufklärungsgespräch, Schmerzerfassung, Anamnese
- Pfleger ↔ Praxisanleiter: Reflexionsgespräch, Fehler besprechen, Lob
- Pfleger ↔ Arzt: Übergabe, Rückfragen, ISBAR-Kommunikation
- Pfleger ↔ Angehörige: Schwierige Nachrichten, Beratung, Beschwerden

**Technisch:**
- Rive Runtime für React: `@rive-app/react-canvas`
- State Machines für Emotionen (idle, speaking, happy, confused, worried)
- KI-Bewertung: Empathie, Fachsprache, Vollständigkeit, Ton
- Bloom-Level: B3 (Standard-Gespräch) bis B6 (ethisches Dilemma führen)

**Warum das stark wäre:**
- Pflege ist ein SPRECHBERUF — tippen/lesen reicht nicht
- Emotionale Reaktion der Figur gibt sofortiges Feedback
- Viel immersiver als Chat-Blasen
- Differenzierung: B1-Schüler bekommt Satzanfänge, C1-Schüler schreibt frei

**Aufwand:** Hoch (Rive-Design + KI-Integration + State Machines)
**Priorität:** Nach MVP, wenn Kern-Engine steht

---

## 2. Lokale TTS für Patientenstimmen (statt ElevenLabs)

**Idee:** Open-Source-TTS lokal auf Apple Silicon laufen lassen, statt monatlicher Cloud-Kosten. Der Patient bekommt eine echte Stimme — Marianne klingt wie eine 82-jährige Lehrerin, ohne dass Daten an Dritte gehen.

**Kandidaten (Stand 2026-04):**
- **Zonos** (Zyphra) — Apache 2.0, deutsches Phonem-Modell nativ, Voice Cloning aus 5-30 Sek
- **F5-TTS** — MIT, multilingual, sehr gute Prosodie
- **CosyVoice 2** (Alibaba) — Apache 2.0, Emotion + Dialekt-Steuerung
- **Orpheus** (Canopy AI) — Llama-basiert, Tags wie [seufzt], [zögernd]

**Realität:** Lokal erreicht 85–90 % der ElevenLabs-Qualität. ElevenLabs Free Tier (10k Zeichen/Monat) reicht für alle 10 Marianne-Zitate als Notlösung.

**Aufwand:** Mittel (4–6h Setup + Testen)
**Priorität:** Tag 2 im WOW-Plan — verschoben bis Audio-Budget freigegeben

---

## 3. Whisper-Sprechübungen (lokale Spracherkennung)

**Idee:** Schüler antwortet mündlich statt zu tippen. Pflege ist Sprechberuf — Fachbegriffe müssen aussprechbar sein, nicht nur lesbar.

**Use Cases:**
- „Sprich diesen Fachbegriff aus" → Whisper transkribiert → Plattform vergleicht
- „Erkläre Marianne in einfacher Sprache, was Orthostase ist" → 30 Sek Audio → KI bewertet Verständlichkeit + Empathie
- SBAR-Übergabe in 60 Sek einsprechen

**Technisch (Mac):**
- `whisper.cpp` mit Core ML (large-v3) oder MLX-Whisper
- Browser-Aufnahme via MediaRecorder API
- API-Endpoint POST /api/transcribe → liefert Text + Confidence

**Aufwand:** Mittel (1–2 Tage inkl. UI)
**Priorität:** Nach Tag-3, vor erstem Pitch (Demo-tauglich)

---

## 4. Bild-Pipeline mit Anker-Workflow (Watercolor-Stil)

**Idee:** Eine konsistente bebilderte Lernsituation pro Patient. Erst ein Anker-Portrait detailliert generieren, dann alle Folge-Szenen mit dem Anker als Referenz-Bild — so bleibt die Person über 10+ Bilder identisch.

**Stufenplan pro Situation:**
- **Stufe 1 (Pflicht):** Anker + 6 Phasen-Header + 4 Pflegehandlungen = 12 Bilder
- **Stufe 2 (Tiefe):** + 5 Patientenzustände (Tremor, Orthostase, Angst-Mimik) = 17 Bilder
- **Stufe 3 (Anatomie):** SVG via medical-svg-Skill (keine Watercolor)

**Wichtig:** Prompts ohne Verneinungen (KI versteht „NO X" nicht), pflege-konform laut DNQP/I-Care, Stil-Bibel als wiederverwendbarer Block.

**Aufwand:** Pro Situation ~25 min Bot-Zeit + 10 min Variantenwahl
**Priorität:** Tag 3 — laufend, Frau M. als Pilot

---

## 5. Universal-Asset-Bibliothek (situationsübergreifend)

**Idee:** ~30 Bilder die in jeder CE relevant sind, einmal generieren statt pro Situation. Senkt Skalierungs-Bot-Zeit um ~30 %.

**Inhalt:**
- SBAR-Übergabe-Szene
- Pflegebericht-Klemmbrett
- Händedesinfektions-Spender
- Stationsflur, Stationszimmer, Patientenzimmer-Generika
- Hilfsmittel-Skizzen (Gehbock, Toilettenstuhl, Bettgitter, Hüftprotektor)
- Anatomie-SVGs (geteilt)

**Aufwand:** ~1h Bot-Zeit
**Priorität:** Sofort nach Frau-M-Pilot

---

## 6. Neue praktische Step-Typen (über Pflegewagen hinaus)

**Idee:** Pflegewagen ist erst der Anfang. Es gibt ~20 weitere Step-Typen, die prozedurales Pflegewissen besser prüfen als jede Quizfrage.

**Material-Vorbereitung (wie Pflegewagen):**
- Tablett s.c.-Injektion
- Inhalation richten
- Notfallkoffer-Check
- Verbandwechsel-Wagen

**Hotspot auf Körper-SVG:**
- Insulin-Spritzstelle wählen (4 Bauchquadranten)
- Auskultation 5 Punkte Lunge
- Hüftprotektor-Position (Trochanter major)
- Dekubitus-Risikostellen je nach Lage

**Sequenz unter Zeitdruck:**
- Hygienische Händedesinfektion 6 Schritte
- ABCDE-Schema bei Sturz
- An-/Auskleiden Hemiparese (welche Seite zuerst?)
- SBAR-Übergabe bauen

**Drag auf Bild (räumlich):**
- 30°-Seitenlage einrichten (4 Kissen)
- Bett-Setup für Sturzprävention
- Wohnumfeld Sturzgefahren markieren

**Slider/Dial:**
- Spritze füllen (Toleranzbereich)
- Infusionsrate einstellen
- Bettkopf-Höhe je nach Indikation

**Eskalations-Entscheidungen:**
- Wer wird angerufen? (Pflegedienstleitung / Hausarzt / Notarzt)
- Pflegegrad-Antrag empfehlen ja/nein

**Klassifikation:**
- Dekubitus-Stadium (1–4 + Kategorie)
- Wundphase (Reinigung / Granulation / Epithelisierung)

**Aufwand:** Pro Step ~3h Renderer + ~2h Content
**Priorität:** Schrittweise, getrieben durch CE-Bedarf

---

## 7. Adaptivität live demonstrieren (Demo-Modus)

**Idee:** URL-Parameter `?demo=1` aktiviert Pitch-Modus. Investor sieht in Echtzeit, wie sich die Plattform auf 3 Schülerprofile anpasst.

**Features:**
- Profil-Switcher oben rechts: C1+Praxis / B2+etwas / B1+Anfänger
- Bei Wechsel: Steps werden live umgeschaltet — sichtbar weniger/mehr für jedes Profil
- Antwortzeit-Heatmap (Bottom-Right Overlay) zeigt „raten" vs. „konzept-Fehler"
- 3 vorgefertigte Demo-Spielzüge als Skript:
  - C1 → flott durch in 12 Min
  - B1 → 28 Min mit allen Bausteinen
  - Schüler rät → KI bietet Alternativ-Zugang

**Aufwand:** Hoch (6–8h)
**Priorität:** Tag 4 im WOW-Plan, hoher Pitch-Hebel

---

## 8. KI-Tutor + Lehrer-Live-Dashboard

**Idee:** „Frag den Tutor"-Button an jedem Step. Lehrer sieht in Echtzeit was 8 Schüler tun.

**Schüler-Seite:**
- Modal mit KI-Tutor (Llama 3.3 via Nebius EU)
- Bekommt Kontext: aktueller Step + Bausteine + Frage
- Antwortet aus Content (RAG-light) mit Sandwich-Feedback

**Lehrer-Seite:**
- `/lehrer/live/{klasse}` zeigt 8 Schüler-Avatars
- Pro Schüler: aktuelle Phase, Antwortzeit, Fehler-Pattern
- Klick auf Avatar → siehe was Schüler gerade tut
- Lehrer-Chat mit vollem Kontext

**Klassenraum-Modus:** anonymisierte Aggregat-Stats für Beamer.

**Aufwand:** Sehr hoch (8–10h)
**Priorität:** Tag 5 im WOW-Plan

---

## 9. Spaced-Repetition-Showcase (7-Tage-Zeitraffer)

**Idee:** Visualisierung des Langzeit-Lerneffekts. Drückt im Pitch den „warum nicht nur eine Quiz-App"-Knopf.

**Features:**
- Button „Tag 1" → „Tag 7", Animation zeigt Karteikarten die hochkommen
- Forgetting-Curve-Visualisierung (recharts): blaue Kurve „ohne Wiederholung", grüne mit
- Mastery-Indikator pro Thema mit Farbverlauf („Dekubitus: 78% sicher")
- Streak + XP Animationen (Konfetti bei Erfolg)

**Aufwand:** Mittel (4–5h)
**Priorität:** Tag 6 im WOW-Plan

---

## 10. Pflege-Konformitäts-Review für Bild-Prompts

**Idee:** Bevor ein Bild generiert wird, prüft der `dozentin-recherche`-Agent den Prompt gegen Standards (DNQP, I-Care). Ergebnis: Pflicht-Elemente und Verbote als POSITIVE Formulierung in den Prompt.

**Beispiel — Schellong-Test:**
- Pflicht: „Manschette auf nacktem Oberarm, Arm auf Herzhöhe gestützt, Cardigan abgelegt"
- Verbote (positiv umformuliert): „Manschette sitzt direkt auf der Haut" statt „NO Manschette über Cardigan"

**Output pro Bild:**
1. Pflege-Thema identifiziert
2. Standard-Verweis (z. B. DNQP Schmerzmanagement)
3. Pflicht-Elemente-Liste
4. Pflege-konforme Szenenbeschreibung als Block

**Aufwand:** Mittel (Agent-Erweiterung 2–3h)
**Priorität:** Vor Skalierung über Frau-M-Pilot hinaus

---

## 11. Servier-Medical-Art-Extractor

**Idee:** Die 3 PPTX-Dateien unter `public/images/equipment/` enthalten ~3000 medizinische Vector-Items (CC-BY 4.0). Aktuell ungenutzt, weil nicht extrahiert.

**Skript `scripts/extract-servier.ts`:**
- LibreOffice headless oder python-pptx
- Pro Folie SVG/PNG raus, kategorisiert nach Drugs / Equipment / Exams
- Output: `public/images/servier-medical-art/{kategorie}/{name}.svg`
- Attribution-Block in Impressum + Footer ergänzen

**Aufwand:** Niedrig (30–60 min)
**Priorität:** Vor erstem Pflegewagen-Step mit echten Icons

---

## 12. Pipeline-Sync nachziehen für Pflegewagen-Step

**Idee:** Bei neuem stepType müssen laut `.claude/rules/pipeline-sync.md` 7 Stellen aktualisiert werden. Bei Pflegewagen sind 2 erledigt (`_types.ts`, MEMORY), 5 offen.

**Offene Stellen:**
- `.claude/agents/didaktik-regisseur.md` — Spalte in Sessionplan-Tabelle
- `.claude/agents/content-generator.md` — TypeScript-Regel + Template
- `.claude/agents/didaktik-pruefer.md` — Prüfkriterium + Tabelle + Zähler
- `didaktik-loop/GESAMT-PROMPT-v2.md` — Schritte updaten
- `specs/ADAPTIVER-THEMENBOGEN.md` — Phasen-Modell prüfen

**Trigger:** Erst nach UX-Validierung des Demo-Steps machen — sonst doppelter Aufwand bei UX-Änderungen.

**Aufwand:** Mittel (1–2h)
**Priorität:** Nach erstem positiven User-Test des Pflegewagen-Steps

---

## 13. Polish + Demo-Skript für Pitch (Tag 7 WOW-Plan)

**Idee:** Verkaufsfertige Demo-Materialien — nicht nur Live-App, sondern Skript + Video + Sales-Onepager.

**Inhalt:**
- Performance-Audit: Lighthouse Mobile > 90, Bundle-Size, First Load < 2s
- Bug-Sweep: 3× komplette Frau-M-Situation durchspielen
- 3 Demo-Skripte (5 Min Pitch / 15 Min Tiefen-Demo / 30 Min Workshop)
- Video 1080p mit Voice-Over + Screencast
- Sales-Material: 10 Screenshots, Onepager PDF, GIF-Highlight-Reel

**Aufwand:** Mittel (5–6h)
**Priorität:** Vor erstem ernsthaften Investor-Termin

---

## 14. Skalierungs-Plan: Bilder für alle 11 CEs

**Hochrechnung (Stand 2026-04-26):**
- ~85–110 Situationen × 12 Pflicht-Bilder = ~1.100–1.300 Bilder
- ~624 Bausteine × 0,5 Bild = ~300 weitere
- Recycling-Faktor: ~30 % situationsübergreifend (Universal-Bibliothek, siehe Idee 5) → effektiv **~1.000–1.300 unique Bilder**

**Bot-Zeit netto:** ~27–42h, mit Reviews + Regenerierung **6–10 Tage** über mehrere Sprints verteilt.

**Speicher:** ~120–190 MB WebP.

**Phasenplan:**
- A: Frau-M-Pilot (12 Bilder) — beweist Stil + Pipeline
- B: Universal-Bibliothek (30 Bilder) — füttert alle Situationen
- C: Pro CE rolling-out, je 7 situationsspezifische Bilder × 110 Sit. = ~770 Bilder
- D: Bausteine bei Bedarf

**Aufwand:** Hoch — verteilt über mehrere Wochen
**Priorität:** Iterativ pro CE, parallel zur Content-Reife

---

## 15. Search-Gap-Tracking: Was Schüler suchen, aber nicht finden

**Idee:** Wenn ein Schüler in der Suche etwas eingibt und keine Treffer kommen, wird die Anfrage (anonym!) geloggt. Du als Gründerin siehst ein Dashboard mit allen Lücken — und weißt wo Content noch fehlt.

**Wie es funktioniert:**
- Suche → 0 Treffer → automatisch POST `/api/search/log-miss` mit `{ query, locale, timestamp, anonymized_session_id }`
- Datenbank-Tabelle `search_gaps` (Drizzle): query, count, first_seen, last_seen, mapped_ce_hint
- Dashboard `/admin/search-gaps` (Auth-geschützt)

**Was im Dashboard sichtbar ist:**
- Top-50 Suchanfragen ohne Treffer, sortierbar nach Häufigkeit, Zeitraum, Sprache
- Trending: Was steigt diese Woche/diesen Monat?
- Mapping-Hinweis: „Diese Suche könnte zu CE X passen" (via Standards-Datenbank)
- Status pro Eintrag: offen / in Arbeit / erledigt / wird ignoriert (z. B. Tippfehler-Cluster)
- Export als CSV für Sprint-Planung

**Optional — Auto-Cluster:**
- Ähnliche Begriffe gruppieren („Dekubitus", „Druckgeschwür", „Wundliegen", „Druckstelle" → eine Lücke)
- Via OpenAI/Llama Embeddings + Cosine-Similarity
- Senkt Lärm im Dashboard, erhöht Signal-Stärke

**Optional — Push-Reports:**
- Wöchentlicher E-Mail-Report an Gründerin: „Diese 5 Themen wurden 47× gesucht und nicht gefunden"
- Slack-Hook möglich

**DSGVO:**
- Keine User-IDs in Logs — nur anonyme Session-ID (rotiert nach 24h)
- Kein Klartext-Name, keine Profil-Daten
- Aggregat-Auswertung im Dashboard (Counts + Beispiele, nie einzelner Schüler-Verlauf)
- Auto-Löschung nach 12 Monaten

**Erweiterung — auch außerhalb der Suche:**
- KI-Tutor-Fragen, die nicht aus Content beantwortet wurden, ebenfalls loggen
- „Wie heißt das auf Türkisch?" → Glossar-Lücke, gehört in dasselbe Dashboard
- Klick auf Glossar-Begriff der nicht existiert → ebenso

**Aufwand:**
- MVP (Logging + simples Dashboard): ~3–4h
- Mit Auto-Cluster: +3h
- Mit Push-Reports: +1h

**Priorität:** Nach erstem Schüler-Test der Plattform — vorher gibt es zu wenig Daten, um etwas zu sehen.

---

*Neue Ideen einfach unten anfügen mit Nummer, Beschreibung und geschätztem Aufwand.*
