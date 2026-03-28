# SPRINT-PLAN v2.0 — MVP in 10 Sprints (20 Wochen)

**Erstellt:** 2026-03-21
**Zuletzt aktualisiert:** 2026-03-23
**Ersetzt:** Sprint-Plan v1.0 (2026-03-19) — komplett veraltet
**Grundlage:** VISION.md (2026-03-20) + 9 Recherche-Ergebnisse (specs/recherche-*.md)
**Kontext:** Solo-Entwicklerin + Claude Code. Gruenderin liefert Content parallel.
**Sprint-Laenge:** 2 Wochen
**Ziel:** Pilotfaehiges MVP fuer 1 Pflegeschule (60 Schueler)

---

## Aktueller Status (2026-03-23)

### Bereits erledigt (vor Sprint-Start):
- ✅ **CE 05 Neustrukturierung** — 16 Lektionen (statt 20), 7 Blöcke (A-G), krankheitsbild-zentriert nach 12-Punkte-Struktur
  - Alter Content (20 Ordner) komplett gelöscht, 16 neue Ordner erstellt
  - `_manifest.ts` umgeschrieben: 16 LEs mit `inhaltspunkte`, Blocks A-G, Abhängigkeitsketten
- ✅ **LE 03 komplett (Loop v2 validiert)** — RA: Definition, Ursachen, Pathomechanismus
  - 3 Sessions: S1 (21 Steps), S2 (23 Steps), S3 (23 Steps) = 67 Steps total
  - 590+ XP, 6 Achievements, 2 Leitfälle (Mehmet Demir 43 + Elisabeth Richter 67)
  - Alle 9 Rollen durchlaufen, 3 Didaktik-FAILs gefixt, TSC+Fachlich PASS
- ✅ **Lern-Engine** — Dynamisch, **22 Step-Renderer** (7 Basis + 8 erweitert + 7 Muster-LE)
- ✅ **Content-Architektur** — Manifest-Registry (16 LEs), Shared Types, Dynamic Import per leId, `content-loader.ts` aktualisiert
- ✅ **CI/CD Pipeline** — vitest + tsc + build
- ✅ **Mobile-First Shell** — Sidebar, BottomNav, TopBar, Dark Mode
- ✅ **i18n-Grundgerüst** — DE/AR/TR Routing
- ✅ **Demo-Seiten** — Lektion-Demo + Dashboard-Demo
- ✅ **Didaktisches Konzept** — Darmann-Finck, 6 Phasen, Content-Loop-Prozess
- ✅ **11 Recherchen** — Alle abgeschlossen und dokumentiert
- ✅ **LE-Erlebnis-Konzept** — 3×30 Min Sessions, 8 Erlebnis-Modi, 12-Punkte-Struktur, Brilliant/AMBOSS/Duolingo-Prinzipien
- ✅ **9-Rollen Content-Pipeline** — Didaktik-Loop v2 validiert auf LE 03 (8 Agenten + TSC-Check)
- ✅ **Plattform-Benchmark-Recherche** — Duolingo, Brilliant, Khan, AMBOSS analysiert

### Muster-LE-Implementierung (2026-03-23) — 3 Runden vorgezogen:
- ✅ **Runde 1 — 7 neue Step-Typen**: reflection, hotspot, confidence, cloze, sequencing, slider, summary + Fachbegriff-Tooltips (Bottom-Sheet mit TR/AR) + imageUrl/wusstestDuDas-Support in Text-Steps
- ✅ **Runde 2 — KI-API + TTS + Gamification**: `/api/ki-feedback` (Nebius Llama 3.3 70B + Keyword-Fallback), `/api/ki-chat` (5 Fragen/Session, pflege-only), TTS-Button (Browser SpeechSynthesis), Hearts (5 max), Streak-Badge, Confetti, B1/C1-Toggle
- ✅ **Runde 3 — Persistenz + Dashboard**: `use-lern-fortschritt.ts` (localStorage), Weitermachen-Dialog, Schüler-Dashboard (Wochenaktivität, Kompetenz-Übersicht, Lernpfad CE 05, Karteikarten fällig)

### Nächster Schritt:
1. Content für restliche 15 LEs mit Loop v2 generieren (Priorität: LE 04-06 = RA komplett)
2. Sprint 1 (DB-Schema + Auth + Rollen) starten — ersetzt localStorage durch echte DB
3. Weitere CEs (01, 02) mit Loop generieren

---

## Warum v2.0?

Der alte Sprint-Plan (v1.0) wurde VOR der Vision-Erweiterung geschrieben. Er fehlte:
- Zwei-Achsen-Einstufungstest (Sprache + Fachwissen)
- KI-Didaktik (Fehleranalyse, Strategiewechsel, Lernprofil)
- Lehrer-Chat
- Wochen-/Semesterplanung
- 25 Fragetypen (statt 8)
- TTS (Vorlesefunktion)
- Lernzeit-Nachweis + PDF-Export
- Pruefungsmodus
- Schulleiter-Rolle
- CE-uebergreifende Fallvignetten

Dieser Plan integriert alle Vision-Features + alle Recherche-Ergebnisse.

---

## Uebersicht: 10 Sprints

```
Sprint 1  [Wo 1-2]    Fundament         DB-Schema + Auth + Rollen + Projekt-Struktur
Sprint 2  [Wo 3-4]    Einstufung        Zwei-Achsen-Test + Lernprofil + CE-Navigation
Sprint 3  [Wo 5-6]    Lern-Engine       ⚡ 22 Fragetypen gebaut (statt 15), ~90% erledigt
Sprint 4  [Wo 7-8]    KI-Didaktik       ⚡ KI-API + Chat vorgezogen, ~40% erledigt
Sprint 5  [Wo 9-10]   Gamification      ⚡ XP + Streak + Dashboard + Confetti, ~60% erledigt
Sprint 6  [Wo 11-12]  Karteikarten      ⚡ TTS + Tooltips vorgezogen, ~25% erledigt
Sprint 7  [Wo 13-14]  Lehrer-Bereich    Dashboard + Chat + Klassen + Schulleiter-Rolle
Sprint 8  [Wo 15-16]  Content + Faelle  CE 01+02 Inhalte + Branching Scenarios + KI-Lernpfad
Sprint 9  [Wo 17-18]  Nachweise         Lernzeit-Tracking + PDF-Export + Pruefungsmodus
Sprint 10 [Wo 19-20]  Launch-Ready      PWA + Hetzner + Stripe + Offline + Polish
```

---

## Sprint 1 — Fundament (Woche 1-2)

**Ziel:** Lauffaehige App mit Auth, vollstaendigem DB-Schema, 4 Rollen, Basis-Navigation.

| Task | Aufwand | Deliverable |
|------|---------|-------------|
| **Drizzle-Schema komplett** (users, schools, classes, ce_units, learn_modules, quiz_questions, quiz_answers, glossary_terms, user_progress, skill_mastery, spaced_repetition_queue, user_streaks, xp_log, user_daily_goals, learner_profiles, user_language_profiles, user_ce_knowledge, learning_events, chat_messages, learning_time_log) | 3d | Schema + Migrations |
| **Auth-System** (E-Mail + Passwort, 4 Rollen: Schueler/Lehrer/Schulleiter/Admin) | 2d | Login/Register/Rollen-Guards |
| **Schul-Verwaltung** (Schule erstellen, Klasse erstellen, Einladungslink) | 1d | Admin-Seiten |
| ~~**Mobile-First Shell** (Sidebar, BottomNav, TopBar — existiert bereits)~~ | ~~0.5d~~ | ✅ Bereits erledigt |
| ~~**i18n-Grundgeruest** (DE/AR/TR Routing, RTL-Support)~~ | ~~0.5d~~ | ✅ Bereits erledigt |
| ~~**CI/CD Pipeline** (existiert bereits: vitest + build)~~ | ~~0.5d~~ | ✅ Bereits erledigt |
| **Seed-Daten** (2 Schulen, 3 Klassen, 10 Test-User in versch. Rollen, 11 CEs) | 0.5d | Dev-Seed-Script |
| ~~**Design-Tokens** (Apple-White-Stil, Dark Mode Basis, Farbsystem)~~ | ~~0.5d~~ | ✅ Bereits erledigt |

**Abnahme:** Login als alle 4 Rollen, leere Dashboard-Seiten, DB laeuft lokal, CI gruen.

**DB-Schema Highlights (neu gegenueber v1.0):**

```
learner_profiles          — Individuelles Lernprofil (preferred_explanation_type, needs_glossary)
user_language_profiles    — Sprachniveau-Tracking (overall_score, fachsprache_score, reading_speed)
user_ce_knowledge         — Fachwissen pro CE (knowledge_score, bloom_level_reached, accuracy)
learning_events           — Alle Lern-Interaktionen (event_type, correct, duration_ms, attempt)
learning_time_log         — Aktive Lernzeit-Dokumentation (active_seconds, scroll_events, answers)
chat_messages             — Lehrer-Chat (sender, receiver, context_lesson_id, read_at)
exam_readiness            — Pruefungsreife-Score pro CE und Pruefungstag
```

---

## Sprint 2 — Einstufung + CE-Navigation (Woche 3-4)

**Ziel:** Zwei-Achsen-Einstufungstest beim ersten Login. 11 CEs navigierbar.

| Task | Aufwand | Deliverable |
|------|---------|-------------|
| **Einstufungstest-Engine** (spielerisch, kein Pruefungsgefuehl, adaptiv) | 2d | `/einstufung` |
| **Achse 1: Sprachkompetenz** (5-8 Fragen: Leseverstaendnis, Fachbegriffe, Satzbausteine) | 1d | Sprach-Einstufung |
| **Achse 2: Fachwissen** (5-8 Fragen pro CE, adaptiv schwerer bei richtigen Antworten) | 1d | Fach-Einstufung |
| **Antwortzeit-Messung** (unsichtbar, pro Fragetyp: 15s/35s/60s Schwellen, B1-Faktor ×1.5) | 0.5d | 5-Stufen-Klassifikation |
| **Lernprofil anlegen** (aus Einstufung: Sprachniveau, Fachwissen pro CE, Empfehlung) | 1d | Profil-Seite |
| **CE-Uebersichtsseite** (11 Kacheln, Fortschritt, "Bald verfuegbar" Badge) | 1.5d | `/lernpfad` |
| **CE-Detailseite** (Sessions/Lektionen-Liste, Bloom-Badge, Pruefungsrelevanz) | 1.5d | `/lernpfad/ce-01` |
| **Session-Struktur** (Sandwich: Reflexion → Wissen → Uebung → Transfer → Zusammenfassung) | 1d | Session-Layout |
| **Bloom-Taxonomie-Badges** (Stufe 1-6, farbcodiert, bei jeder Aufgabe sichtbar) | 0.5d | Badge-Komponente |

**Abnahme:** Neuer User durchlaeuft Einstufungstest, bekommt Profil mit 2 Achsen, sieht 11 CEs mit Empfehlung.

**Einstufung — Details aus Recherche:**
- Beim allerersten Login: spielerischer Test ("Lass uns testen was du schon weisst!")
- Danach: unsichtbare Kalibrierung im Hintergrund (Antwortzeit + Genauigkeit + Freitext-Analyse)
- Sprachniveau: automatische Neuberechnung alle 3 Wochen (CAF-Framework: Complexity, Accuracy, Fluency)
- Fachsprache vs. Allgemeinsprache: getrennt tracken

---

## Sprint 3 — Lern-Engine mit 15 Fragetypen (Woche 5-6) ⚡ GRÖSSTENTEILS VORGEZOGEN

**Ziel:** Quiz-Engine mit 15 interaktiven Fragetypen, Sofort-Feedback, "Warum?"-Erklaerungen.

| Task | Aufwand | Deliverable | Status |
|------|---------|-------------|--------|
| ~~**Quiz-Engine Kern** (Frage laden → Antwort → Auswertung → Antwortzeit → naechste)~~ | 1.5d | Engine-Kern | ✅ Erledigt |
| ~~**Basis-Typen (6):** MC, Lueckentext, Zuordnung, Sortierung, Wahr/Falsch, Kategorisierung~~ | 2d | 6 Komponenten | ✅ Erledigt |
| ~~**Visuelle Typen (4):** Hotspot, Text-Markierung, Bildlueckentext, Bildreihenfolge~~ | 1.5d | 4 Komponenten | ✅ Erledigt (22 Typen total) |
| ~~**Gamified Typen (3):** Memory-Kartenspiel, Kreuzwortraetsel, Wort-Scramble~~ | 1.5d | 3 Komponenten | ✅ Memory + Kreuzworträtsel erledigt |
| ~~**Pflege-Typen (2):** Dosisrechnung, Schieberegler-Skala~~ | 1d | 2 Komponenten | ✅ Slider erledigt |
| ~~**"Warum?"-Erklaerungsfeld** (bei jeder Frage, richtig UND falsch erklaert)~~ | 0.5d | Explanation-Panel | ✅ Erledigt |
| ~~**Sofort-Feedback** (gruen/rot Panel + Animation + XP-Preview)~~ | 0.5d | Feedback-Banner | ✅ Erledigt |
| **Antworten speichern** (user_id, question_id, correct, duration_ms, attempt_number) | 0.5d | learning_events API | ⏳ localStorage (MVP), DB in Sprint 1 |
| ~~**Quiz-Zusammenfassung** (X/Y richtig, XP verdient, Mastery-Aenderung, Schwachstellen)~~ | 0.5d | Summary-Screen | ✅ Erledigt |

**Abnahme:** ~~15~~ 22 Fragetypen spielbar auf Mobile, Antworten gespeichert (localStorage), Erklaerungen sichtbar.

**Fragetypen — Bloom-Level-Verteilung (aus Recherche):**

| Bloom 1-2 (Erinnern/Verstehen) | Bloom 3-4 (Anwenden/Analysieren) | Bloom 5-6 (Bewerten/Erschaffen) |
|---|---|---|
| MC, Wahr/Falsch, Lueckentext, Wort-Scramble, Memory | Zuordnung, Sortierung, Kategorisierung, Hotspot, Dosisrechnung, Schieberegler | Fallvignette, Branching, Kreuzwortraetsel (Sprint 8) |

**Restliche 10 Fragetypen (Sprint 8 + V1.1):**
- Sprint 8: Fallvignette, Branching Scenario (CE-uebergreifend)
- V1.1: Audio-Transkription, Rollenspiel-Dialog, Drag-the-Words, Speed Sort, Timeline, Concept Map, KI-Kurzantwort, Ranking

---

## Sprint 4 — KI-Didaktik (Woche 7-8) ⚡ TEILWEISE VORGEZOGEN

**Ziel:** KI erkennt WARUM ein Schueler falsch antwortet und wechselt die Erklaerungsstrategie.

| Task | Aufwand | Deliverable | Status |
|------|---------|-------------|--------|
| **KI-Fehleranalyse-Engine** (4 Fehlertypen: Sprach-/Begriffs-/Konzept-/Rateproblem) | 2d | Fehlertyp-Klassifikation | ⏳ Offen |
| **Hybride Erkennung** (KI analysiert Profil + Antwortmuster; bei Unsicherheit: Schueler kurz fragen) | 1d | 2-Button-Dialog | ⏳ Offen |
| **3 vorbereitete Erklaerungswege pro Lernziel** (Text, Bild/Grafik, Fallbeispiel) | 1d | Content-Struktur | ⏳ Offen |
| ~~**KI-generierte Alternativwege** (ab Versuch 3+: Nebius/Llama generiert Analogie, einfache Sprache)~~ | 2d | KI-Erklaerungen | ✅ `/api/ki-feedback` (Nebius Llama 3.3 70B + Keyword-Fallback) |
| ~~**Sandwich-Feedback** (Loben → Korrigieren → Ermutigen, nie negativ)~~ | 0.5d | Feedback-Templates | ✅ Im System-Prompt implementiert |
| **Lernprofil-Update** (nach jeder Interaktion: was funktioniert bei diesem Schueler?) | 1d | Profil-Logik | ⏳ Offen (braucht DB) |
| **Aggregierte Erkenntnisse** (ueber alle Schueler: "73% scheitern an dieser Frage → schlecht formuliert") | 1d | Admin-Analytics | ⏳ Offen (braucht DB) |
| ~~**Token-Sparstrategie** (vorbereitete Erklaerungen fuer Versuch 1-2, KI erst ab Versuch 3+)~~ | 0.5d | Caching-Logik | ✅ Keyword-Fallback ohne API-Key |
| **KI-Kennzeichnung** ("Diese Erklaerung wurde von KI generiert") | 0.5d | Label-Komponente | ⏳ Offen |

**Zusätzlich vorgezogen:**
- ✅ **KI-Chat** (`/api/ki-chat` + `ki-chat.tsx`) — Floating FAB, 5 Fragen/Session, pflege-only, Kontext-angereichert

**Abnahme:** Schueler antwortet falsch → KI erkennt Fehlertyp → wechselt Strategie → Schueler versteht.

**KI-Kosten-Schaetzung (aus Recherche):**
- Pro KI-Erklaerungsversuch: ~500-800 Tokens = ~0.001-0.002 EUR (Nebius/Llama 3.3)
- 100 Schueler × 50 Fragen/Tag × 20% brauchen KI (ab Versuch 3) = 1.000 KI-Calls = ~2 EUR/Tag
- Monatlich: ~60 EUR (worst case) → im Budget

---

## Sprint 5 — Gamification + Zusammenfassungen (Woche 9-10) ⚡ GRÖSSTENTEILS VORGEZOGEN

**Ziel:** Streak, XP, Dashboard, Tages-/Wochenzusammenfassung — Motivation fuer Wochen.

| Task | Aufwand | Deliverable | Status |
|------|---------|-------------|--------|
| ~~**XP-System** (pro Frage: einfach=5, mittel=10, schwer=20, Streak-Bonus, Mastery-Up)~~ | 1d | XP-Logik + DB | ✅ xpValue pro Step, localStorage |
| ~~**Streak-System** (Tagesstreak, Flamme, Streak-Freeze 2x/Woche, motivierende Verlust-Nachricht)~~ | 1.5d | Streak-Widget | ✅ Tagesstreak + Streak-Badge (Freeze offen) |
| **Tages-Lernziel** (5/10/15/20 Min, Fortschrittsring, Benachrichtigung bei Ziel) | 1d | Ziel-Setter | ⏳ Offen |
| ~~**Schueler-Dashboard** (XP, Streak, CE-Status, "Weiterlernen", letzte 3 Module)~~ | 2d | `/dashboard` | ✅ Erledigt |
| ~~**Kompetenz-Radar** (Spinnen-Diagramm: Staerke pro CE)~~ | 1d | Radar-Chart | ✅ Als Balken-Chart (Spinne später) |
| **Tageszusammenfassung** ("Das hast du heute gelernt", Themen, Staerken, Schwachstellen) | 1d | Tages-Summary | ⏳ Offen |
| **Wochenzusammenfassung** (Rueckblick, Kompetenz-Entwicklung, Naechste-Woche-Empfehlung) | 0.5d | Wochen-Summary | ⏳ Offen |
| **Meilensteine** ("CE 01 abgeschlossen!" — Feier-Animation, Badge) | 0.5d | Milestone-Screen | ⏳ Offen |
| ~~**Erfolgs-Animationen** (Konfetti bei Abschluss, Level-Up, Lottie-Animationen)~~ | 0.5d | Animationen | ✅ Confetti + Hearts-Animation |

**Abnahme:** Schueler-Dashboard mit XP, Streak, Kompetenz. ~~Tages-/Wochenzusammenfassung.~~ Animationen.

---

## Sprint 6 — Karteikarten + Glossar + TTS (Woche 11-12) ⚡ TEILWEISE VORGEZOGEN

**Ziel:** FSRS-Spaced-Repetition, dreisprachiges Glossar, Vorlesefunktion.

| Task | Aufwand | Deliverable | Status |
|------|---------|-------------|--------|
| **FSRS-Algorithmus** (Stability, Difficulty, Rating, Intervall-Berechnung) | 2.5d | FSRS-Engine | ⏳ Offen (aktuell: einfache Intervalle 1→3→7→14→30) |
| **Karteikarten-UI** (Flip-Animation, Swipe, 4 Rating-Buttons, "Wieder in 1d/3d/7d/21d") | 1.5d | `/karteikarten` | ⏳ Offen (Schwächen-Karten im Dashboard angezeigt) |
| **Glossar-Datenmodell** (term_de, definition_de, term_ar, definition_ar, term_tr, definition_tr, audio_url) | 0.5d | DB + API | ⏳ Offen (aktuell: inline in Content-Steps) |
| **Glossar-UI** (Suche, A-Z, Detailseite, ohne Login zugaenglich, SEO) | 1.5d | `/glossar` | ⏳ Offen |
| **Glossar-Seed: 100 Begriffe CE 01+02** (DE + AR/TR via Claude/DeepL, QA via Rueckuebersetzung) | 1d | Seed-Daten | ⏳ Offen |
| ~~**Hover-Tooltips in Erklaertexten** (unterstrichene Fachbegriffe → Popup mit Definition + AR/TR)~~ | 0.5d | Tooltip-Komponente | ✅ `fachbegriff-tooltip.tsx` (Bottom-Sheet) |
| **TTS: Azure KatjaNeural Integration** (Server-Route `/api/tts`, API-Key serverseitig) | 1d | TTS-API | ⏳ Offen |
| **TTS: Fachbegriffe vorab generieren** (~500 Begriffe als MP3 auf Hetzner cachen) | 0.5d | Audio-Cache | ⏳ Offen |
| ~~**TTS: Vorlesen-Button** (in Erklaertexten und Glossar, Web Speech API als Fallback)~~ | 0.5d | Vorlesen-UI | ✅ `tts-button.tsx` (Browser SpeechSynthesis) |

**Abnahme:** Karteikarten mit FSRS lernbar, Glossar dreisprachig durchsuchbar, Fachbegriffe vorlesbar.

**Uebersetzungs-Workflow (aus Recherche):**
1. Seed: tıp doc Pflege (134 Begriffe, ~15 EUR) + WHO ICD-11 API
2. Generate: Claude 3.5 fuer AR, DeepL Pro fuer TR (~5 EUR)
3. QA: Rueckuebersetzung + ICD-11 Abgleich
4. Gesamt: ~70-120 EUR einmalig

---

## Sprint 7 — Lehrer-Bereich + Chat (Woche 13-14)

**Ziel:** Ampel-Dashboard, Lehrer-Chat, Klassen-Verwaltung, Schulleiter-Ansicht.

| Task | Aufwand | Deliverable |
|------|---------|-------------|
| **Klassen-Verwaltung** (erstellen, Einladungslink, CSV-Import) | 1.5d | `/lehrer/klassen` |
| **Ampel-Dashboard: Tagesuebersicht** (Gruen/Gelb/Rot pro Schueler, 30 Sek) | 1.5d | `/lehrer/dashboard` |
| **Ampel-Dashboard: Klassen-Detail** (CE-Fortschritt, Ø-Score, Aktivitaet) | 1d | Klassen-Detail |
| **Ampel-Dashboard: Einzel-Schueler** (Antwort-Historie, Schwachstellen, 2-Achsen-Profil) | 1d | Schueler-Profil |
| **Lehrer-Chat** (In-App, async Nachrichten, Lehrer sieht Lernkontext) | 2d | Chat-System |
| **Chat: Echtzeit-Option** (WebSocket fuer Schulen die es wollen, konfigurierbar) | 1d | WebSocket-Chat |
| **Schulleiter-Rolle** (sieht alle Klassen, alle Lehrer, Schul-Statistiken) | 0.5d | Schulleiter-View |
| **Lehrer kann Themenreihenfolge konfigurieren** (Default: BIBB, Override moeglich) | 0.5d | Reihenfolge-Editor |
| **Lehrer kann Stunden pro LE festlegen** (fuer Lernzeit-Dokumentation) | 0.5d | Stunden-Config |
| **Freemium-Gate** (Probe-Tag kostenlos, Rest per Schullizenz/Abo) | 0.5d | Paywall |

**Abnahme:** Lehrer sieht Ampel fuer Klasse, kann chatten, Schulleiter sieht alle Klassen. Themenreihenfolge konfigurierbar.

**Chat-Architektur:**
- Basis: Asynchrone Nachrichten (wie E-Mail, DB-basiert, Polling alle 30s)
- Optional: Echtzeit (WebSocket via Socket.io oder Ably Free Tier)
- Schule waehlt bei Setup: "Echtzeit-Chat aktivieren? Ja/Nein"
- Lehrer sieht: Was hat der Schueler gerade bearbeitet? Wo haengt er? Was hat die KI versucht?

---

## Sprint 8 — Content + Fallvignetten (Woche 15-16)

**⚡ TEILWEISE VORGEZOGEN:** CE 05 neustrukturiert (16 LEs, 34 UE). LE 03 komplett (67 Steps, 3 Sessions).
Didaktik-Loop v2 validiert — kann fuer alle weiteren LEs und CEs verwendet werden.

**Ziel:** CE 01+02 mit echtem Content. CE-uebergreifende Branching Scenarios. KI-Lernpfad aktiv.

| Task | Aufwand | Deliverable |
|------|---------|-------------|
| **CE 01 Content** (5-8 Sessions, Sandwich-Methode, Erklaertexte) | 1.5d | Content-Seed |
| **CE 01 Quiz-Fragen** (50+ Fragen, alle 15 Typen, mit Erklaerungen) | 1d | Fragen-Seed |
| **CE 02 Content** (5-8 Sessions, Erklaertexte) | 1.5d | Content-Seed |
| **CE 02 Quiz-Fragen** (50+ Fragen) | 1d | Fragen-Seed |
| **Branching Scenario Engine** (Entscheidungsbaum, viele Unterpunkte, Konsequenzen) | 2d | Branching-Komponente |
| **CE-uebergreifende Fallvignetten** (Patient mit Vorwissen aus CE 01 → Fragen zu CE 02) | 1d | 4 Faelle |
| **KI-Lernpfad** (Nebius API: Schwierigkeits-Anpassung basierend auf 2-Achsen-Profil) | 1d | Adaptiver Algorithmus |
| **Themen-Empfehlung** (schwache CEs verstaerken, Wiederholung einbauen) | 0.5d | Empfehlungs-Logik |
| **Schueler waehlt Thema** (innerhalb freigegebener CEs, Wechsel jederzeit moeglich) | 0.5d | Themen-Wahl-UI |

**Abnahme:** CE 01+02 komplett durchspielbar. Branching Scenarios mit CE-uebergreifenden Fragen. KI passt Schwierigkeit an.

**Content-Volumen MVP (aus Recherche):**
- CE 01 (100h): ~700 Texte, 1.800 Fragen, 150 Faelle, 3.000 Karten — davon MVP-Minimum: 50 Texte, 100 Fragen, 10 Faelle
- CE 02 (140h): ~980 Texte, 2.520 Fragen, 210 Faelle — davon MVP-Minimum: 70 Texte, 150 Fragen, 15 Faelle
- Vollstaendiger Content kommt iterativ nach Launch

> **Parallel (Gruenderin):** Liefert Erklaertexte + Fallbeispiele + Quiz-Fragen in eigenen Worten (NICHT aus I Care abschreiben!). KI unterstuetzt beim Erstellen (paraphrasieren, nicht kopieren).

---

## Sprint 9 — Nachweise + Pruefungsmodus (Woche 17-18)

**Ziel:** Lernzeit-Dokumentation, PDF-Export, Pruefungssimulation.

| Task | Aufwand | Deliverable |
|------|---------|-------------|
| **Aktive Lernzeit messen** (Scroll-Events, Tipp-Events, Antworten, natuerliche Pausen abziehen) | 1.5d | Tracking-System |
| **Lernzeit-Dashboard** (pro Schueler: Stunden pro CE, pro LE, pro Tag/Woche) | 1d | `/lernzeit` |
| **PDF-Export** (A4, Schulname, Schueler, Stunden, Kompetenzbereiche KB I-V, konfigurierbar) | 1.5d | PDF-Generator |
| **Klassen-Export** (CSV + PDF fuer Schulleitung: alle Schueler einer Klasse) | 0.5d | Export-Funktion |
| **Pruefungsmodus** (Zeitdruck 120 Min, keine Hilfen, keine Erklaerungen, fallbasiert) | 2d | `/pruefung` |
| **Pruefung offline verfuegbar** (als PWA-Download, kein Verbindungsabbruch-Risiko) | 1d | Offline-Pruefung |
| **Pruefungsreife-Indikator** (Gewichtung: Fall 30% + Bloom 25% + Coverage 20% + Retention 15% + MC 10%) | 1d | Ampel-Anzeige |
| **Pruefungsreife pro Pruefungstag** (Tag 1/2/3 + Muendlich, schlechtester = Gesamtreife) | 0.5d | Pruefungs-Uebersicht |
| **Disclaimer** ("Praktische/muendliche Pruefungsreife kann digital nicht vollstaendig gemessen werden") | 0.5d | Hinweis-Banner |

**Abnahme:** Lernzeit messbar, PDF exportierbar, Pruefungsmodus spielbar, Pruefungsreife-Ampel sichtbar.

**Lernzeit-Messung — Details (aus Recherche + Gruenderin-Antwort):**
- Scrolling + Tippen = aktive Zeit
- Pausen bis 5 Min = normale Denkzeit, zaehlt
- Pausen ueber 10 Min = "Handy hingelegt", zaehlt NICHT
- Nur abgeschlossene Einheiten zaehlen fuer den offiziellen Nachweis
- PflBG: Mind. 1.890 von 2.100 Theoriestunden fuer Pruefungszulassung

---

## Sprint 10 — Launch-Ready (Woche 19-20)

**Ziel:** Pilotfaehig. Deployed auf Hetzner. Stripe aktiv. PWA installierbar. DSGVO-konform.

| Task | Aufwand | Deliverable |
|------|---------|-------------|
| **PWA-Setup** (Service Worker, Manifest, Offline-Cache Glossar + Karteikarten + Pruefungen) | 1.5d | Installierbare PWA |
| **Offline-Sync** (IndexedDB via Dexie.js, Queue fuer Antworten, Auto-Sync bei Verbindung) | 1.5d | Offline-Modus |
| **Hetzner-Deployment** (VPS CX22, PostgreSQL, SSL, Backups, CI/CD) | 1.5d | Produktions-Server |
| **Stripe-Integration** (Schullizenz-Checkout 149 EUR/Jahr, B2C-Abo, monatliche Kuendigung) | 1.5d | Bezahlseite |
| **Transparente Preisseite** (Jahresabo guenstiger als Monatsabo) | 0.5d | `/preise` |
| **Dark Mode** (CSS-Variablen, Nachtschicht-Lernen) | 0.5d | Theme-Toggle |
| **Sprachentwicklungs-Neuberechnung** (alle 3 Wochen automatisch, CAF-Framework) | 0.5d | Cron-Job |
| **Performance** (Lighthouse 90+, Core Web Vitals) | 0.5d | Audit + Fixes |
| **E2E-Tests** (Login → Einstufung → Quiz → Dashboard → Chat → Export) | 1d | Test-Suite |
| **DSGVO-Paket** (Datenschutzerklaerung, TOM, VVT, KI-Anonymisierung) | 0.5d | Compliance-Docs |
| **Bug-Fixing + Polish** | 1d | Release-Candidate |

**Abnahme:** Live auf Hetzner, PWA installierbar, Stripe funktioniert, Offline-Modus, Lighthouse 90+, DSGVO-Paket bereit.

---

## Content-Zeitplan (parallel, Gruenderin)

| Woche | Gruenderin liefert | Entwicklerin verarbeitet |
|-------|-------------------|------------------------|
| 1-4 | CE-01-Struktur: Lernziele, Session-Gliederung, 50 Glossar-Begriffe | DB-Schema, Einstufungstest |
| 5-8 | CE-01 Erklaertexte (eigene Worte!) + 50 Quiz-Fragen + 5 Faelle | Quiz-Engine + KI-Didaktik |
| 9-12 | CE-02-Struktur + 50 Glossar-Begriffe + Beginn CE-02 Texte | Glossar + TTS + Lehrer-Bereich |
| 13-16 | CE-02 Erklaertexte + 50 Quiz + 5 Faelle + CE-uebergreifende Faelle | Content-Import + Branching |
| 17-18 | Review aller Inhalte + Testfragen fuer Pruefungsmodus | Nachweise + Pruefungsmodus |
| 19-20 | Pilotschule vorbereiten, Kolleginnen informieren | Deploy + Polish |

**Urheberrecht-Regel (aus Recherche):**
- ✅ Aus eigenem Wissen erklaeren (Buch NICHT offen daneben)
- ✅ AWMF-Leitlinien paraphrasieren + verlinken
- ✅ "Weiterfuehrende Literatur: I Care (Thieme)" am Ende einer Lektion
- ❌ NICHT "vgl. I Care S. 234" neben Content schreiben
- ❌ NICHT Tabellen/Abbildungen aus I Care kopieren
- ⚠️ Empfehlung: 1x Medienrecht-Anwalt (~400-800 EUR) zur Absicherung

---

## Meilensteine + Go/No-Go

| Woche | Meilenstein | Kriterium |
|-------|-------------|-----------|
| 2 | **Fundament steht** | Auth + DB + 4 Rollen + CI gruen |
| 4 | **Einstufung funktioniert** | Zwei-Achsen-Test durchspielbar, Profil sichtbar |
| 6 | **Alpha spielbar** | 15 Fragetypen auf Mobile, Antwortzeit gemessen |
| 8 | **KI-Didaktik aktiv** | Fehleranalyse + Strategiewechsel funktioniert |
| 10 | **Beta intern** | Gamification + Dashboard + Zusammenfassungen |
| 12 | **Glossar + TTS** | Dreisprachiges Glossar, Vorlesefunktion |
| 14 | **Lehrer-Demo** | Dashboard + Chat zeigbar fuer Pilotschule |
| 16 | **Content Complete** | CE 01+02 durchspielbar mit KI-Lernpfad |
| 18 | **Nachweise ready** | Lernzeit-PDF exportierbar, Pruefungsmodus spielbar |
| 20 | **MVP Launch** | Live auf Hetzner, PWA, Stripe, Pilotschule startet |

---

## Rollen-Matrix (4 Rollen)

| Funktion | Schueler | Lehrer | Schulleiter | Admin |
|----------|----------|--------|-------------|-------|
| Lernen + Quiz | ✅ | — | — | — |
| Eigenes Dashboard | ✅ | — | — | — |
| Chat mit Lehrer | ✅ senden | ✅ empfangen/senden | — | — |
| Klassen-Dashboard | — | ✅ eigene Klassen | ✅ alle Klassen | ✅ |
| Themenreihenfolge | — | ✅ konfigurieren | ✅ | ✅ |
| Stunden pro LE | — | ✅ festlegen | ✅ | ✅ |
| PDF-Export | ✅ eigener | ✅ Klasse | ✅ Schule | ✅ |
| Schulen verwalten | — | — | — | ✅ |

---

## Was NICHT im MVP ist (bewusst ausgeschlossen)

- Arabisch/Tuerkisch Erklaertexte (nur Glossar + UI)
- Virtual Patient Dialog (V1.1)
- Rangliste/Achievements (V1.1)
- Audio-Transkription / Rollenspiel-Dialog (V1.1)
- Aufgaben-Zuweisung mit Deadline (V1.1)
- KI-Tutor "Frag mich" (V2.0)
- Pruefungs-Generator PDF (V2.0)
- Fortbildungszertifikate (V2.0)
- Praxisanleiter-Rolle (V2.0)
- Eltern-Zugang (V2.0)
- Badge-System (V1.1 — generische Meilenstein-Badges im MVP)
- CE 03-11 Inhalte (nach Launch sukzessive)
- Whisper STT / Sprechuebungen (V1.1)
- Wochen-/Semesterplanung automatisch (V1.1 — MVP: Lehrer konfiguriert manuell)
- Push-Notifications (V1.1 — MVP: In-App-Hinweise)

---

## Risiken fuer den Zeitplan

| Risiko | Impact | Gegenmassnahme |
|--------|--------|----------------|
| Content zu spaet | Sprint 8 blockiert | Dummy-Content ab Sprint 2; Gruenderin startet Woche 1 |
| FSRS zu komplex | Sprint 6 verzoegert | Fallback: Leitner-System (3 Boxen) |
| KI-Didaktik zu komplex | Sprint 4 verzoegert | Fallback: nur vorbereitete Erklaerungen, keine KI-Generierung |
| Nebius API unzuverlaessig | Sprint 4+8 | Fallback: regelbasierte Schwierigkeit |
| Hetzner Deployment | Sprint 10 | Vercel als Dev/Preview-Hosting. Migration zu Hetzner Frankfurt VOR Go-Live mit echten Schülerdaten (DSGVO). |
| Lehrer-Chat zu komplex | Sprint 7 | Fallback: nur async (kein WebSocket), Echtzeit spaeter |
| Scope Creep | Gesamter Plan | Strikte Grenze: Alles ausserhalb dieser Liste → V1.1 |

---

## Budget waehrend Entwicklung (20 Wochen)

| Posten | Kosten |
|--------|--------|
| Hosting (Entwicklung) | 0 EUR (Vercel Hobby für Dev/Preview + lokale DB) |
| Nebius AI (Test) | ~10 EUR/Mo |
| Azure TTS (Entwicklung) | 0 EUR (Free Tier: 500K Zeichen/Mo) |
| Domain | ~12 EUR/Jahr |
| tıp doc Pflege (Glossar-Seed) | ~15 EUR einmalig |
| Glossar-Uebersetzung (Claude/DeepL) | ~5 EUR einmalig |
| **Gesamt 20 Wochen** | **~70 EUR** |
| Ab Launch (Hetzner + PostgreSQL + Nebius + TTS) | ~20 EUR/Mo |

---

## Recherche-Grundlagen (9 Dokumente)

| Thema | Datei | Kernaussage |
|-------|-------|-------------|
| Antwortzeit | `specs/recherche-antwortzeit.md` | 5-Stufen-Klassifikation, pro Fragetyp, unsichtbar |
| Sprachentwicklung | `specs/recherche-sprachentwicklung.md` | CAF-Framework, alle 3 Wochen, passiv + optional aktiv |
| Content-Volumen | `specs/recherche-content-volumen.md` | 1h = 7 Texte + 18 Fragen + 1.5 Faelle + 30 Karten |
| Urheberrecht | `specs/recherche-urheberrecht.md` | Paraphrasieren OK, Quellen nicht inline, Anwalt empfohlen |
| Uebersetzung | `specs/recherche-uebersetzung.md` | DeepL fuer TR, Claude fuer AR, ~70-120 EUR einmalig |
| TTS | `specs/recherche-tts.md` | Azure KatjaNeural, 500K Zeichen/Mo kostenlos, Caching |
| Pruefungsreife | `specs/recherche-pruefungsreife.md` | Gewichteter Score, schlechtester Pruefungstag = Gesamt |
| Lernzeit-Nachweis | `specs/recherche-lernzeit-nachweis.md` | PflBG 1.890h Minimum, PDF konfigurierbar, aktive Zeit |
| Fragetypen | `specs/recherche-fragetypen.md` | 25 Typen, 15 im MVP, alle Mobile-kompatibel |

---

*Dieser Plan ersetzt den alten Sprint-Plan v1.0 vollstaendig. Er basiert auf VISION.md als Wahrheitsquelle und integriert alle Recherche-Ergebnisse vom 2026-03-21.*
