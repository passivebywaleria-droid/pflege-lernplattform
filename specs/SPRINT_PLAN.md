# SPRINT-PLAN v3.0 — Demo-Ready + MVP

**Erstellt:** 2026-03-21
**Zuletzt aktualisiert:** 2026-03-28
**Ersetzt:** Sprint-Plan v2.0 (2026-03-23)
**Grundlage:** VISION.md + Schulleitung-Feedback (kritische Evaluierung 2026-03-28)
**Kontext:** Solo-Entwicklerin + Claude Code. Gründerin liefert Content parallel.
**Sprint-Länge:** 2 Wochen
**Ziel:** Pilotfähiges MVP für 1 Pflegeschule (60 Schüler)

---

## Warum v3.0? — Perspektive einer Schulleitung

Eine fiktive Schulleitung hat die Live-Plattform (pflege-lernplattform.vercel.app) evaluiert.
Ergebnis: **"Vielversprechender Prototyp, aber kein Produkt."**

### Die 5 Killer-Probleme (aus Schulleitungs-Sicht)

| # | Problem | Warum kritisch | Sprint |
|---|---------|---------------|--------|
| 1 | **Nur 2 von 16 LEs in CE 05 spielbar** | Kein Inhalt zum Evaluieren → kein Kauf | Sprint 0 |
| 2 | **Kein Lehrer-Dashboard** | Schulen kaufen nur wenn Lehrer Kontrolle haben | Sprint 2 |
| 3 | **Kein Einstufungstest** | Kern-USP der Plattform fehlt komplett | Sprint 3 |
| 4 | **Keine Landing Page für Entscheider** | Preise, DSGVO, Lehrplan-Mapping fehlen | Sprint 0 |
| 5 | **Umlaute fehlen in der UI** | "fuer" statt "für" wirkt unprofessionell | Sprint 0 |

### Strukturelle Änderung: Demo-Ready ZUERST

v2.0 war engineering-first (DB → Auth → Engine).
v3.0 ist **sales-first**: Erst etwas Zeigbares, dann Infrastruktur.

**Neu: Sprint 0** — bevor irgendein Backend gebaut wird:
- Umlaute fixen (30 Min)
- CE 05 komplett mit Content füllen (Pipeline existiert!)
- Landing Page die eine Schulleitung überzeugt
- Registrierung mit Rollenwahl

---

## Aktueller Status (2026-03-28)

### Bereits erledigt:
- ✅ CE 05 Neustrukturierung — 16 Lektionen, 7 Blöcke (A-G), 12-Punkte-Struktur
- ✅ LE 03 + LE 04 komplett — 4 Sessions, ~130 Steps, 2 Leitfälle
- ✅ Lern-Engine — 27 Step-Renderer, dynamisch, B1/C1-Toggle
- ✅ Content-Pipeline — 9-Rollen Didaktik-Loop v2, validiert
- ✅ KI-Features — `/api/ki-feedback`, `/api/ki-chat`, Sandwich-Feedback
- ✅ Gamification — XP, Streaks, Hearts, Confetti, Dashboard
- ✅ Persistenz — localStorage, Weitermachen-Dialog
- ✅ Adaptive Engine — Antwortzeit, Fehleranalyse, Lernprofil, Sequencer
- ✅ Fachbegriff-Tooltips — Bottom-Sheet mit DE/TR/AR
- ✅ TTS — Browser SpeechSynthesis (MVP)
- ✅ Mobile-First Shell — Sidebar, BottomNav, Dark Mode
- ✅ i18n-Grundgerüst — DE/AR/TR Routing
- ✅ CI/CD — vitest + tsc + build, 266 Tests grün
- ✅ Test-Infrastruktur — Content-Linter, Style-Checker, Render-Tests, E2E

### Was FEHLT (Schulleitung-Perspektive):
- ❌ 14 von 16 LEs in CE 05 haben keinen Content
- ❌ Keine Landing Page für Schulen (Preise, DSGVO, Demo)
- ❌ Umlaute fehlen in `messages/de.json`
- ❌ Keine Rollenwahl bei Registrierung
- ❌ Kein Lehrer-Dashboard
- ❌ Kein Einstufungstest
- ❌ Kein Lernzeit-Nachweis / PDF-Export
- ❌ Keine echte Datenbank (alles localStorage)
- ❌ Kein Offline-Modus

---

## Übersicht: 11 Sprints (Sprint 0 + 10)

```
Sprint 0  [SOFORT]     Demo-Ready      Umlaute + Landing Page + CE 05 Content + Rollen
Sprint 1  [Wo 1-2]     Fundament       DB-Schema + Auth + Rollen + Seed
Sprint 2  [Wo 3-4]     Lehrer-MVP      Ampel-Dashboard + Klassen + Schulleiter
Sprint 3  [Wo 5-6]     Einstufung      Zwei-Achsen-Test + Lernprofil + CE-Navigation
Sprint 4  [Wo 7-8]     KI-Didaktik     Fehleranalyse + Strategiewechsel + Lernprofil-DB
Sprint 5  [Wo 9-10]    Gamification+   Tages/Wochen-Summaries + Meilensteine + Lernziele
Sprint 6  [Wo 11-12]   Karteikarten    FSRS + Glossar-UI + Azure TTS
Sprint 7  [Wo 13-14]   Lehrer-Chat     In-App Chat + Themenreihenfolge + Freemium
Sprint 8  [Wo 15-16]   Content CE01/02 Inhalte + Branching + KI-Lernpfad
Sprint 9  [Wo 17-18]   Nachweise       Lernzeit-Tracking + PDF-Export + Prüfungsmodus
Sprint 10 [Wo 19-20]   Launch-Ready    PWA + Hetzner + Stripe + Offline + Polish
```

---

## Sprint 0 — Demo-Ready (SOFORT, vor Sprint 1)

**Ziel:** Eine Schulleitung öffnet die Seite und denkt: "Das könnte funktionieren."

| # | Task | Aufwand | Deliverable |
|---|------|---------|-------------|
| 0.1 | **Umlaute fixen in `messages/de.json`** — alle "ue"→"ü", "ae"→"ä", "oe"→"ö", "ss"→"ß" | S (30 Min) | Professionelle deutsche UI |
| 0.2 | **Umlaute fixen in `messages/ar.json` + `messages/tr.json`** — gleiche Prüfung | S (15 Min) | Konsistenz |
| 0.3 | **Landing Page für Schulen** — komplett neu: | M (2-3d) | `/` (Landing) |
|  | → Hero mit konkretem Versprechen ("Theorieunterricht, der funktioniert — auch ohne Lehrer") | | |
|  | → Problem/Lösung-Sektion (Lehrerausfall, heterogene Klassen, Sprachbarrieren) | | |
|  | → Feature-Showcase mit Screenshots/Mockups der Lern-Engine | | |
|  | → Lehrplan-Mapping: "Deckt CE 01-11 ab" mit Fortschrittsanzeige welche CEs fertig sind | | |
|  | → Preissektion: Schullizenz 149 EUR/Schüler/Jahr, monatlich kündbar | | |
|  | → DSGVO-Badge: "Server in Deutschland, keine Tracker, Löschrecht" | | |
|  | → Testimonial-Platzhalter (kommt nach Pilotschule) | | |
|  | → Kontaktformular "Für Schulen anfragen" (E-Mail-Weiterleitung) | | |
|  | → Demo-Video-Platzhalter oder interaktive Mini-Demo | | |
| 0.4 | **Registrierung mit Rollenwahl** — Dropdown: Schüler / Lehrer / Schulleiter | S (0.5d) | Rollen bei Registration |
| 0.5 | **CE 05 Content: LE 05-06 generieren** (RA: Therapie + Pflege) via Didaktik-Loop | L (2d) | 2 weitere LEs spielbar |
| 0.6 | **CE 05 Content: LE 01-02 generieren** (Grundlagen) via Didaktik-Loop | L (2d) | Block A komplett |
| 0.7 | **CE 05 Content: LE 07-08 generieren** (Gicht) via Didaktik-Loop | L (1.5d) | Block C komplett |
| 0.8 | **"Für Schulen"-Button** auf Landing Page → funktionierendes Kontaktformular oder mailto | S (0.5d) | Leads sammeln |
| 0.9 | **Deploy auf Vercel** | S (15 Min) | Live sichtbar |

**Abnahme:** Schulleitung öffnet Seite → sieht professionelle Landing Page → klickt "Demo ansehen" → spielt 8+ Lektionen durch → sieht Preise und DSGVO-Info → kann Kontakt aufnehmen.

**Content-Priorität CE 05 (nach Blöcken):**

```
Priorität 1 (Sprint 0):  Block A (LE 01-02) + Block B Rest (LE 05-06) = 4 neue LEs → 8 von 16
Priorität 2 (Sprint 0+): Block C (LE 07-08) = 2 neue LEs → 10 von 16
Priorität 3 (später):     Block D-G (LE 09-16) = 6 weitere LEs → 16 von 16

Ergebnis Sprint 0: Mindestens 8 spielbare LEs (statt 2)
```

---

## Sprint 1 — Fundament (Woche 1-2)

**Ziel:** Echte DB, Auth mit 4 Rollen, Migration von localStorage → PostgreSQL.

| # | Task | Aufwand | Deliverable |
|---|------|---------|-------------|
| 1.1 | **Drizzle-Schema komplett** (users, schools, classes, ce_units, learn_modules, user_progress, skill_mastery, spaced_repetition_queue, user_streaks, xp_log, learner_profiles, user_language_profiles, user_ce_knowledge, learning_events, learning_time_log, chat_messages) | 3d | Schema + Migrations |
| 1.2 | **Auth-System** (E-Mail + Passwort, 4 Rollen: Schüler/Lehrer/Schulleiter/Admin, JWT httpOnly) | 2d | Login/Register/Guards |
| 1.3 | **Schul-Verwaltung Basis** (Schule erstellen, Klasse erstellen, Einladungslink) | 1d | Admin-Seiten |
| 1.4 | **Seed-Daten** (2 Schulen, 3 Klassen, 10 Test-User, 11 CEs) | 0.5d | Seed-Script |
| 1.5 | **Migration localStorage → DB** (Lernfortschritt, XP, Streaks über API speichern) | 1.5d | API-Routes |

**Abnahme:** Login als alle 4 Rollen, Dashboard zeigt echte DB-Daten, CI grün.

---

## Sprint 2 — Lehrer-MVP (Woche 3-4) ← NEU VORGEZOGEN

**Ziel:** Ein Lehrer loggt sich ein und sieht sofort, was seine Klasse gemacht hat.

> **Warum vorgezogen?** Schulleitung-Feedback #2: "Schulen kaufen nur wenn Lehrer Kontrolle haben."
> Ohne Lehrer-Dashboard keine Pilotschule. Muss VOR Einstufung kommen.

| # | Task | Aufwand | Deliverable |
|---|------|---------|-------------|
| 2.1 | **Ampel-Dashboard: Tagesübersicht** (Grün/Gelb/Rot pro Schüler, 30-Sek-Überblick) | 1.5d | `/lehrer/dashboard` |
| 2.2 | **Klassen-Detail** (CE-Fortschritt, Ø-Score, Aktivität der letzten 7 Tage) | 1d | Klassen-Ansicht |
| 2.3 | **Einzel-Schüler-Profil** (Antwort-Historie, Schwachstellen, 2-Achsen-Profil) | 1d | Schüler-Detail |
| 2.4 | **Klassen-Verwaltung** (erstellen, Einladungslink, CSV-Import) | 1.5d | `/lehrer/klassen` |
| 2.5 | **Schulleiter-Ansicht** (sieht alle Klassen, alle Lehrer, Schul-Statistiken) | 0.5d | Schulleiter-View |
| 2.6 | **Lehrer-Onboarding** (3-Minuten Tour beim ersten Login) | 0.5d | Onboarding-Flow |
| 2.7 | **Lehrer kann Stunden pro LE festlegen** (für Lernzeit-Dokumentation) | 0.5d | Stunden-Config |

**Abnahme:** Lehrer sieht Ampel für Klasse in 30 Sekunden. Schulleiter sieht alle Klassen. CSV-Import funktioniert.

---

## Sprint 3 — Einstufung + CE-Navigation (Woche 5-6)

**Ziel:** Zwei-Achsen-Einstufungstest beim ersten Login. 11 CEs navigierbar.

| # | Task | Aufwand | Deliverable |
|---|------|---------|-------------|
| 3.1 | **Einstufungstest-Engine** (spielerisch, adaptiv, kein Prüfungsgefühl) | 2d | `/einstufung` |
| 3.2 | **Achse 1: Sprachkompetenz** (5-8 Fragen: Leseverständnis, Fachbegriffe) | 1d | Sprach-Einstufung |
| 3.3 | **Achse 2: Fachwissen** (5-8 Fragen pro CE, adaptiv schwerer) | 1d | Fach-Einstufung |
| 3.4 | **Antwortzeit-Messung** (unsichtbar, 5-Stufen-Klassifikation) | 0.5d | Antwortzeit-Engine |
| 3.5 | **Lernprofil anlegen** (aus Einstufung: Sprachniveau + Fachwissen pro CE) | 1d | Profil-Seite |
| 3.6 | **CE-Übersichtsseite** (11 Kacheln, Fortschritt, "Bald verfügbar") | 1.5d | `/lernpfad` |
| 3.7 | **CE-Detailseite** (Sessions/Lektionen, Bloom-Badge, Prüfungsrelevanz) | 1.5d | `/lernpfad/ce-05` |
| 3.8 | **Bloom-Taxonomie-Badges** (Stufe 1-6, farbcodiert) | 0.5d | Badge-Komponente |

**Abnahme:** Neuer User → Einstufungstest → Profil mit 2 Achsen → 11 CEs mit Empfehlung sichtbar.

---

## Sprint 4 — KI-Didaktik (Woche 7-8)

**Ziel:** KI erkennt WARUM ein Schüler falsch antwortet und wechselt die Strategie.

| # | Task | Aufwand | Deliverable | Status |
|---|------|---------|-------------|--------|
| 4.1 | **KI-Fehleranalyse-Engine** (4 Fehlertypen: Sprach-/Begriffs-/Konzept-/Rateproblem) | 2d | Fehlertyp-Klassifikation | ⏳ Offen |
| 4.2 | **Hybride Erkennung** (KI + optional Schüler fragen) | 1d | 2-Button-Dialog | ⏳ Offen |
| 4.3 | **3 Erklärungswege pro Lernziel** (Text, Bild/Grafik, Fallbeispiel) | 1d | Content-Struktur | ⏳ Offen |
| 4.4 | **Lernprofil-Update** (nach jeder Interaktion: was funktioniert?) | 1d | Profil-Logik | ⏳ Offen |
| 4.5 | **Aggregierte Erkenntnisse** ("73% scheitern an dieser Frage") | 1d | Admin-Analytics | ⏳ Offen |
| 4.6 | **KI-Kennzeichnung** ("Diese Erklärung wurde von KI generiert") | 0.5d | Label-Komponente | ⏳ Offen |
| — | ~~KI-API~~ | — | — | ✅ `/api/ki-feedback` |
| — | ~~Sandwich-Feedback~~ | — | — | ✅ Im System-Prompt |
| — | ~~KI-Chat~~ | — | — | ✅ `/api/ki-chat` |
| — | ~~Token-Sparstrategie~~ | — | — | ✅ Keyword-Fallback |

**Abnahme:** Schüler antwortet falsch → KI erkennt Fehlertyp → wechselt Strategie → Schüler versteht.

---

## Sprint 5 — Gamification + Zusammenfassungen (Woche 9-10)

**Ziel:** Tages-/Wochenzusammenfassung, Meilensteine, Lernziele.

| # | Task | Aufwand | Deliverable | Status |
|---|------|---------|-------------|--------|
| 5.1 | **Tages-Lernziel** (5/10/15/20 Min, Fortschrittsring) | 1d | Ziel-Setter | ⏳ Offen |
| 5.2 | **Tageszusammenfassung** ("Das hast du heute gelernt") | 1d | Tages-Summary | ⏳ Offen |
| 5.3 | **Wochenzusammenfassung** (Rückblick, Kompetenz-Entwicklung) | 0.5d | Wochen-Summary | ⏳ Offen |
| 5.4 | **Meilensteine** ("CE 05 abgeschlossen!" — Feier-Animation, Badge) | 0.5d | Milestone-Screen | ⏳ Offen |
| 5.5 | **Streak-Freeze** (2x/Woche, motivierende Verlust-Nachricht) | 0.5d | Freeze-Feature | ⏳ Offen |
| 5.6 | **16 Session-Abschluss-Formate** (Reflexion, Transfer, Motivation) | 1.5d | Abschluss-Screens | ⏳ Offen |
| — | ~~XP-System~~ | — | — | ✅ xpValue pro Step |
| — | ~~Streak-System~~ | — | — | ✅ Tagesstreak + Badge |
| — | ~~Dashboard~~ | — | — | ✅ Erledigt |
| — | ~~Kompetenz-Übersicht~~ | — | — | ✅ Balken-Chart |
| — | ~~Erfolgs-Animationen~~ | — | — | ✅ Confetti + Hearts |

**Abnahme:** Tages-/Wochenzusammenfassung sichtbar. Meilensteine feiern. Session-Enden abwechslungsreich.

---

## Sprint 6 — Karteikarten + Glossar + TTS (Woche 11-12)

| # | Task | Aufwand | Deliverable | Status |
|---|------|---------|-------------|--------|
| 6.1 | **FSRS-Algorithmus** (Stability, Difficulty, Rating, Intervall) | 2.5d | FSRS-Engine | ⏳ Offen |
| 6.2 | **Karteikarten-UI** (Flip, Swipe, 4 Rating-Buttons) | 1.5d | `/karteikarten` | ⏳ Offen |
| 6.3 | **Glossar-Datenmodell** (DE/AR/TR, Audio-URL) | 0.5d | DB + API | ⏳ Offen |
| 6.4 | **Glossar-UI** (Suche, A-Z, ohne Login, SEO) | 1.5d | `/glossar` | ⏳ Offen |
| 6.5 | **Glossar-Seed: 100 Begriffe CE 05** | 1d | Seed-Daten | ⏳ Offen |
| 6.6 | **TTS: Azure KatjaNeural** (Server-Route, Caching) | 1d | TTS-API | ⏳ Offen |
| — | ~~Fachbegriff-Tooltips~~ | — | — | ✅ Bottom-Sheet |
| — | ~~TTS Vorlesen-Button~~ | — | — | ✅ Browser SpeechSynthesis |

**Abnahme:** Karteikarten mit FSRS, Glossar dreisprachig, Fachbegriffe mit Azure-Stimme.

---

## Sprint 7 — Lehrer-Chat + Freemium (Woche 13-14)

| # | Task | Aufwand | Deliverable |
|---|------|---------|-------------|
| 7.1 | **Lehrer-Chat** (In-App, async, Lehrer sieht Lernkontext) | 2d | Chat-System |
| 7.2 | **Chat: Echtzeit-Option** (WebSocket, konfigurierbar pro Schule) | 1d | WebSocket-Chat |
| 7.3 | **Lehrer kann Themenreihenfolge konfigurieren** | 0.5d | Reihenfolge-Editor |
| 7.4 | **Freemium-Gate** (Probe-Tag kostenlos, Rest per Schullizenz/Abo) | 0.5d | Paywall |
| 7.5 | **Transparente Preisseite** (Jahresabo günstiger als Monatsabo) | 0.5d | `/preise` |

**Abnahme:** Lehrer-Chat funktioniert, Preisseite live, Freemium-Gate aktiv.

---

## Sprint 8 — Content CE 01 + CE 02 (Woche 15-16)

| # | Task | Aufwand | Deliverable |
|---|------|---------|-------------|
| 8.1 | **CE 01 Content** (Sessions + Erklärtext + Quiz via Loop) | 1.5d | Content-Seed |
| 8.2 | **CE 01 Quiz-Fragen** (50+ Fragen, alle Typen) | 1d | Fragen-Seed |
| 8.3 | **CE 02 Content** (Sessions + Erklärtexte) | 1.5d | Content-Seed |
| 8.4 | **CE 02 Quiz-Fragen** (50+ Fragen) | 1d | Fragen-Seed |
| 8.5 | **CE-übergreifende Fallvignetten** (4 Fälle) | 1d | Branching-Content |
| 8.6 | **KI-Lernpfad aktiv** (Schwierigkeitsanpassung via 2-Achsen-Profil) | 1d | Adaptiver Algorithmus |
| 8.7 | **Themen-Empfehlung** (schwache CEs verstärken) | 0.5d | Empfehlungs-Logik |

**Abnahme:** CE 01 + 02 + 05 durchspielbar. 3 von 11 CEs komplett.

---

## Sprint 9 — Nachweise + Prüfungsmodus (Woche 17-18)

| # | Task | Aufwand | Deliverable |
|---|------|---------|-------------|
| 9.1 | **Aktive Lernzeit messen** (Events, Pausen abziehen, nur aktive Zeit) | 1.5d | Tracking-System |
| 9.2 | **Lernzeit-Dashboard** (Stunden pro CE/LE/Tag/Woche) | 1d | `/lernzeit` |
| 9.3 | **PDF-Export** (A4, Schulname, Schüler, Stunden, KB I-V) | 1.5d | PDF-Generator |
| 9.4 | **Klassen-Export** (CSV + PDF für Schulleitung) | 0.5d | Export-Funktion |
| 9.5 | **Prüfungsmodus** (120 Min, keine Hilfen, fallbasiert) | 2d | `/pruefung` |
| 9.6 | **Prüfungsreife-Indikator** (Ampel: Grün/Gelb/Rot) | 1d | Ampel-Anzeige |
| 9.7 | **Disclaimer** ("Praktische Prüfungsreife kann digital nicht vollständig gemessen werden") | 0.5d | Hinweis-Banner |

**Abnahme:** Lernzeit messbar + PDF exportierbar. Prüfungsmodus spielbar. Ampel sichtbar.

---

## Sprint 10 — Launch-Ready (Woche 19-20)

| # | Task | Aufwand | Deliverable |
|---|------|---------|-------------|
| 10.1 | **PWA-Setup** (Service Worker, Manifest, Offline-Cache) | 1.5d | Installierbare PWA |
| 10.2 | **Offline-Sync** (IndexedDB via Dexie.js, Auto-Sync) | 1.5d | Offline-Modus |
| 10.3 | **Hetzner-Deployment** (VPS, PostgreSQL, SSL, Backups) | 1.5d | Produktions-Server |
| 10.4 | **Stripe-Integration** (Schullizenz 149 EUR/Jahr, monatlich kündbar) | 1.5d | Bezahlseite |
| 10.5 | **Performance** (Lighthouse 90+, Core Web Vitals) | 0.5d | Audit + Fixes |
| 10.6 | **E2E-Tests** (Login → Einstufung → Quiz → Dashboard → Chat → Export) | 1d | Test-Suite |
| 10.7 | **DSGVO-Paket** (Datenschutzerklärung, TOM, VVT, KI-Anonymisierung) | 0.5d | Compliance-Docs |
| 10.8 | **Bug-Fixing + Polish** | 1d | Release-Candidate |

**Abnahme:** Live auf Hetzner, PWA installierbar, Stripe aktiv, Lighthouse 90+, DSGVO-Paket fertig.

---

## Meilensteine + Go/No-Go

| Wann | Meilenstein | Kriterium | Schulleitung sieht... |
|------|-------------|-----------|----------------------|
| Sprint 0 | **Demo-Ready** | 8+ LEs spielbar, Landing Page, Umlaute | "Professionelle Plattform mit echtem Inhalt" |
| Wo 2 | **Fundament** | Auth + DB + 4 Rollen | "Echte Accounts, Daten bleiben" |
| Wo 4 | **Lehrer-Demo** | Ampel-Dashboard + Klassen | "Ich sehe was meine Schüler machen" |
| Wo 6 | **Einstufung** | 2-Achsen-Test, Profil | "Jeder Schüler wird individuell eingestuft" |
| Wo 8 | **KI aktiv** | Fehleranalyse + Strategiewechsel | "Die KI erklärt anders wenn's nicht klappt" |
| Wo 10 | **Beta intern** | Summaries + Meilensteine | "Schüler sehen ihren Fortschritt" |
| Wo 12 | **Glossar + TTS** | Dreisprachig, Vorlesen | "Fachbegriffe auf Türkisch, vorgelesen" |
| Wo 14 | **Chat + Preise** | Lehrer-Chat, Freemium | "Ich kann mit Schülern kommunizieren" |
| Wo 16 | **3 CEs komplett** | CE 01+02+05 spielbar | "3 CEs — genug für ein Semester" |
| Wo 18 | **Nachweise** | Lernzeit-PDF, Prüfungsmodus | "Ich kann Theoriestunden nachweisen" |
| Wo 20 | **MVP Launch** | Hetzner, PWA, Stripe | "Kann morgen losgehen" |

---

## Rollen-Matrix (4 Rollen)

| Funktion | Schüler | Lehrer | Schulleiter | Admin |
|----------|---------|--------|-------------|-------|
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

- Arabisch/Türkisch Erklärtexte (nur Glossar + UI)
- Virtual Patient Dialog (V1.1)
- Rangliste/Achievements (V1.1)
- Audio-Transkription / Rollenspiel-Dialog (V1.1)
- Aufgaben-Zuweisung mit Deadline (V1.1)
- KI-Tutor "Frag mich" (V2.0)
- Prüfungs-Generator PDF (V2.0)
- Fortbildungszertifikate (V2.0)
- Praxisanleiter-Rolle (V2.0)
- Eltern-Zugang (V2.0)
- Badge-System (V1.1)
- CE 03-11 Inhalte (nach Launch sukzessive)
- Whisper STT / Sprechübungen (V1.1)
- Wochen-/Semesterplanung automatisch (V1.1)
- Push-Notifications (V1.1)

---

## Content-Zeitplan (parallel)

| Sprint | Content-Ziel | Ergebnis |
|--------|-------------|----------|
| Sprint 0 | CE 05: LE 01-02, 05-08 via Loop generieren | 8/16 LEs spielbar |
| Sprint 0+ | CE 05: LE 09-16 nachziehen | 16/16 LEs = CE 05 komplett |
| Sprint 8 | CE 01 + CE 02 via Loop generieren | 3 CEs komplett |
| Nach Launch | CE 03, 04, 06-11 sukzessive | Alle 11 CEs |

---

## Risiken

| Risiko | Impact | Gegenmaßnahme |
|--------|--------|----------------|
| Content-Pipeline zu langsam | Sprint 0 verzögert | Loop parallelisieren (Agent Teams) |
| Schulen wollen mehr als 1 CE sehen | Sprint 0 reicht nicht | CE 05 komplett (16/16) als Ziel |
| Lehrer-Dashboard zu komplex | Sprint 2 verzögert | Fallback: Read-only Dashboard ohne Chat |
| DB-Migration bricht localStorage | Sprint 1 riskant | Migrations-Script + Backup |
| Pilotschule will sofort starten | Zeitdruck | Sprint 0 = Minimum Viable Demo |

---

## Budget (20 Wochen)

| Posten | Kosten |
|--------|--------|
| Hosting (Entwicklung) | 0 EUR (Vercel Hobby) |
| Nebius AI (Test) | ~10 EUR/Mo |
| Azure TTS (Entwicklung) | 0 EUR (Free Tier) |
| Domain | ~12 EUR/Jahr |
| Glossar-Übersetzung | ~5 EUR einmalig |
| **Gesamt 20 Wochen** | **~70 EUR** |
| Ab Launch (Hetzner + DB + AI + TTS) | ~20 EUR/Mo |

---

*Dieser Plan ersetzt Sprint-Plan v2.0. Kernänderung: Sprint 0 (Demo-Ready) vor Sprint 1 eingefügt.
Perspektive gewechselt von engineering-first zu sales-first.
Lehrer-Dashboard von Sprint 7 auf Sprint 2 vorgezogen.
Basiert auf VISION.md als Wahrheitsquelle + kritischer Schulleitung-Evaluierung.*
