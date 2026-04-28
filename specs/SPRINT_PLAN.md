# SPRINT-PLAN v4.0 — Von 90% Code zu Launch

> ⚠️ **STARK VERALTET (Stand 2026-04-26)** — dieser Plan ist vor der Pflege-Härtung
> und vor der Inline-Wissens-Architektur entstanden. Aktueller Plan steht in
> `specs/PLAN-INLINE-WISSEN-2026-04-26.md`. Punkte die hier noch gültig sind:
>
> - „Was FEHLT"-Liste Punkte 5-12 (DB nach DE, Stripe, VAPID, DSGVO-Doks, Lehrer-Onboarding) sind teilweise noch offen
> - „Bereits erledigt"-Liste ist im Großen korrekt, aber der Code-Stand ist seitdem signifikant gewachsen
>
> Was sich seit 2026-04-21 geändert hat:
> - LE-basierte Architektur → Situations-basierte Architektur (LEs nicht mehr sichtbar)
> - 10 CE-02-Situationen live, alle Pflege-validated
> - Inline-Wissens-Architektur (Schema + Renderer + Pilot in Frau-M.)
> - Doppelter Pflege-Check (Plan + Code)
> - Curriculum-Coverage-Audit-Skript
> - 13 Phase-7+-Erweiterungen identifiziert
>
> Vor nächstem Sprint-Plan-Schreiben: PLAN-INLINE-WISSEN-2026-04-26.md durchlesen.

**Erstellt:** 2026-04-18
**Letztes Update:** 2026-04-21 (UI-Refactor ergänzt)
**Ersetzt:** Sprint-Plan v3.0 (2026-03-31)
**Grundlage:** VISION.md + Ist-Zustand der Codebase
**Kontext:** Solo-Entwicklerin + Claude Code. Plattform-Code ~90% fertig.
**Sprint-Länge:** 2 Wochen
**Ziel:** Pilotfähiges MVP für 1 Pflegeschule (60 Schüler)

---

## Warum v4.0?

v3.0 war auf 10 Sprints (20 Wochen) ausgelegt. Durch intensive Entwicklung in den letzten Sessions sind **80% der geplanten Features bereits gebaut**. Stripe, Admin, Push, Fallverlauf, Lehrer-Dashboard, PWA, Whisper, Lernzeit — alles fertig. Der Plan wird von 10 auf 4 fokussierte Sprints reduziert.

---

## Aktueller Stand (18.04.2026)

### Codebase-Metriken
```
Pages:         35
API-Routes:    40
Komponenten:   134 (71 Lern-Komponenten)
Step-Typen:    42+
DB-Tabellen:   35
Hooks:         13
Tests:         387 (62 neue Unit-Tests)
i18n:          25 Namespaces (DE/AR/TR)
Content:       2/55 LEs live (LE-01 + LE-06)
Live:          https://pflege-lernplattform.vercel.app
```

### Bereits erledigt (NICHT nochmal bauen)

| Feature | Status | Commit/Details |
|---------|--------|----------------|
| Lern-Engine (42 Step-Typen, 6-Tab-Modell) | ✅ | Kern der Plattform |
| Adaptive Engine (Sequencer, 5 Strategien) | ✅ | `src/lib/adaptive/` |
| Auth (4 Rollen: Schüler/Lehrer/Schulleiter/Admin) | ✅ | JWT, httpOnly Cookies |
| DB-Schema (35 Tabellen) | ✅ | Drizzle ORM, PostgreSQL |
| Write-APIs (8 Progress-Routes + Sync) | ✅ | Dual-Write: localStorage + Server |
| Lehrer-Dashboard (echte API, nicht Mock) | ✅ | `285353e` |
| Lehrer-Chat (In-App mit Lernkontext) | ✅ | `lehrer-chat.tsx` |
| Stripe (Checkout, Webhook, Portal, Feature-Gating) | ✅ | `285353e` |
| Admin (Schulen, Klassen, Statistiken) | ✅ | `285353e` |
| Push-Notifications (VAPID, SW-Handler) | ✅ | `285353e` |
| Fallverlauf-Engine (Phasen-basierte Prüfung) | ✅ | `285353e` |
| Gamification (XP, Streaks, Confetti) | ✅ | Dashboard integriert |
| Glossar DE/AR/TR + Tooltips | ✅ | Bottom-Sheet |
| Karteikarten (FSRS, Flip-UI) | ✅ | `src/lib/fsrs/` |
| Prüfungsmodus (MC + Fallverlauf) | ✅ | 2 Modi, Timer, Ergebnis |
| Whisper (TTS + STT) | ✅ | `step-speech.tsx` |
| PWA/Offline (Service Worker, Download) | ✅ | Serwist + Manifest |
| Lernzeit-Nachweis (Tracking + PDF) | ✅ | 531 Zeilen |
| Wochenplan (automatisch) | ✅ | 5-Tage-Rotation |
| Landing Page (Pricing, DSGVO, Features) | ✅ | `/` |
| Content-Pipeline (4 Agenten, 11 Checks) | ✅ | Engine-Ready |
| Schulcode-Registrierung | ✅ | Register-Route |

### Was FEHLT

| # | Feature | Typ | Sprint |
|---|---------|-----|--------|
| 1 | **Einstufungstest-Onboarding** | Code | A |
| 2 | **KI-Fehleranalyse + Strategiewechsel** | Code | A |
| 3 | **Tests** (nur 7 aktuell, Ziel ≥30) | Code | A |
| 4 | **Content: 53 LEs** (nur 2/55 live) | Content | B |
| 5 | **DB nach Deutschland** (Neon eu-central-1) | Infra | C |
| 6 | **Stripe konfigurieren** (Produkte, Webhook) | Infra | C |
| 7 | **VAPID Keys** | Infra | C |
| 8 | **DSGVO-Dokumente** (Datenschutz, Impressum, AVV) | Code | C |
| 9 | **Tages-/Wochenzusammenfassung** | Code | D |
| 10 | **Meilensteine + Badges** | Code | D |
| 11 | **Lehrer-Onboarding-Tour** | Code | D |
| 12 | **CSV-Import (Schülerliste)** | Code | D |

---

## Übersicht: 4 Sprints

```
Sprint A  [Wo 1-2]   Code-Lücken    Einstufung + KI-Didaktik + Tests
Sprint B  [Wo 1-4]   Content        53 LEs durch Pipeline (parallel)
Sprint C  [Wo 3-4]   Infrastruktur  DB-DE + Stripe + DSGVO
Sprint D  [Wo 5-6]   Launch         Polish + Pilotschule
```

---

## Sprint A — Einstufung + KI-Didaktik (Woche 1-2)

**Ziel:** Die letzten 2 fehlenden VISION.md-Kernfeatures bauen + Testabdeckung.

| # | Task | Aufwand | Status |
|---|------|---------|--------|
| A.1 | **Einstufungstest-Onboarding** | 2-3d | ✅ Fertig |
|  | → Spielerischer Flow beim ersten Login | | |
|  | → 5-8 Fragen Sprache (Leseverständnis, Fachbegriffe) | | |
|  | → 5-8 Fragen Fachwissen (adaptiv schwerer) | | |
|  | → Antwortzeit-Messung (unsichtbar, 5 Stufen) | | |
|  | → Lernprofil anlegen aus Ergebnis | | |
|  | → EinstufungsGuard im Dashboard-Layout | | |
|  | → Fehler-Kategorisierung (raten/sprache/konzept/begriff) | | |
|  | → Mid-Test Persistenz (Resume bei Browser-Schließung) | | |
|  | → Accessibility (aria, Keyboard A-D/1-4, Focus) | | |
| A.2 | **KI-Fehleranalyse + Strategiewechsel** | 3d | ✅ Fertig |
|  | → 6 Strategietypen: einfach/analogie/vergleich/schrittweise/fallbeispiel/bild | | |
|  | → Fehler-Kategorie → Strategie-Ranking (STRATEGIE_MAP) | | |
|  | → Schüler-Präferenzen: Erfolgs-Rate pro Strategie | | |
|  | → Nie 2× dieselbe Strategie (bereitsVersucht-Filter) | | |
|  | → Sequencer R1/R3 reaktiviert mit waehleStrategie() | | |
|  | → Effektivitäts-Tracking: Retry nach Hilfe → strategieEffektiv? | | |
|  | → LernProfil.strategiePraeferenzen persistent | | |
| A.3 | **Tests erweitern** (≥30 Tests) | 2d | ✅ Fertig |
|  | → 62 neue Unit-Tests in 6 Dateien (strategie, fehler-analyse, antwortzeit, kompetenz-register, einstufung, lern-profil) | | |
|  | → Gesamt: 387 Tests grün (war: 314) | | |
| A.4 | **UI-Refactor: App-Layout + Step-Vereinheitlichung** | 1d | ✅ Fertig (2026-04-21) |
|  | → h-dvh flex-col Layout (kein Root-Scroll, Bottom-Tabs) | | |
|  | → 38 Step-Renderer: border-[1.5px], Farben, Hover vereinheitlicht | | |
|  | → BONE ersetzt durch ROSE 8%, --lern-divider angepasst | | |
|  | → Fall-Zeitleiste: doppelten Steckbrief entfernt | | |
|  | → LernSnackTab: Dedup-Fix für DB-Import-Duplikate | | |
|  | → Chat-Buttons über Bottom-Tabs positioniert | | |

**Existierende Dateien (wiederverwenden!):**
- `src/app/[locale]/einstufung/page.tsx` — UI existiert bereits
- `src/lib/einstufung/` — 5 Dateien mit Logik
- `src/lib/adaptive/sequencer.ts` — 721 Zeilen, 5 Strategien
- `src/hooks/use-adaptive-engine.ts` — hat Antwortzeit-Messung
- DB: `placementTestResults`, `userCeProfiles`, `userLernzielMastery`

**Abnahme:** Neuer User → Einstufungstest → Profil mit 2 Achsen → KI passt Schwierigkeit an → bei Fehler: Strategiewechsel. ≥30 Tests grün.

---

## Sprint B — Content-Produktion (Woche 1-4, parallel)

**Ziel:** Minimum 9 LEs live (1. Ausbildungsdrittel komplett).

| # | Task | Aufwand | Status |
|---|------|---------|--------|
| B.1 | **LE-02 bis LE-05** generieren (CE-01 Rest) | 4× Pipeline | ⏳ Offen |
| B.2 | **LE-07 bis LE-09** generieren (CE-02/CE-03) | 3× Pipeline | ⏳ Offen |
| B.3 | **Quality-Gate** für alle neuen LEs | je 30min | ⏳ Offen |
| B.4 | **Cross-LE-Patienten** aktualisieren | 1d | ⏳ Offen |

**Pipeline pro LE (~4-6h mit Agenten):**
```
Dozentin Phase 1  → Rohmaterial (existiert bereits für alle 55 LEs!)
Dozentin Phase 2  → 8 Plan-Dateien (~2h)
B1-Dozentin       → Inline B1 (~30min)
Generator         → 11 TypeScript-Dateien (~1h)
Quality-Gate      → 11 Checks (~30min)
KI-Prüfer         → 32 Kriterien (~1h)
Mensch            → status: "published"
```

**Parallelisierung:** 2-3 LEs gleichzeitig (Dozentin für LE-03 während Generator für LE-02).

**Kommandos:**
```bash
npx tsx scripts/validate-le.ts le-{NN}           # Naming-Check
npx tsx scripts/quality-gate.ts le-{NN}           # 11 Checks
npx tsx scripts/student-walkthrough.ts le-{NN}    # Flow-Simulation
npx tsx scripts/cross-le-checker.ts               # Konsistenz
```

**Abnahme:** ≥9 LEs auf `published`, Quality-Gate PASS für alle.

---

## Sprint C — Infrastruktur + DSGVO (Woche 3-4)

**Ziel:** Launch-Blocker beseitigen.

| # | Task | Aufwand | Typ | Status |
|---|------|---------|-----|--------|
| C.1 | **Neon DB → eu-central-1** (Frankfurt) | 1h | Manuell | ⏳ Offen |
| C.2 | **Stripe Dashboard konfigurieren** | 1h | Manuell | ⏳ Offen |
|  | → 2 Produkte: Schullizenz €149/J, Einzel €14,90/M | | | |
|  | → Webhook: `.../api/stripe/webhook` | | | |
|  | → Customer Portal aktivieren | | | |
|  | → ENV-Vars in Vercel | | | |
| C.3 | **VAPID Keys generieren** | 5min | Manuell | ⏳ Offen |
| C.4 | **DSGVO-Seiten bauen** | 2d | Code | ⏳ Offen |
|  | → `/datenschutz` (+ Stripe, Nebius erwähnen) | | | |
|  | → `/impressum` | | | |
|  | → AVV-Vorlage (PDF für Schulträger) | | | |
|  | → TOM-Dokument | | | |
| C.5 | **Hetzner statt Vercel** (optional) | 2d | Manuell | ⏳ Optional |
| C.6 | **Performance-Audit** (Lighthouse ≥90) | 0.5d | Code | ⏳ Offen |

**Abnahme:** DB in Frankfurt, Stripe-Testzahlung erfolgreich, DSGVO-Seiten live, Push funktioniert.

---

## Sprint D — Polish + Launch (Woche 5-6)

**Ziel:** Letzter Schliff, dann Pilotschule.

| # | Task | Aufwand | Status |
|---|------|---------|--------|
| D.1 | **Tageszusammenfassung** ("Das hast du heute gelernt") | 1d | ⏳ Offen |
| D.2 | **Wochenzusammenfassung** (Rückblick, Kompetenz-Entwicklung) | 0.5d | ⏳ Offen |
| D.3 | **Meilensteine** ("CE 01 abgeschlossen!" + Badge) | 0.5d | ⏳ Offen |
| D.4 | **Lehrer-Onboarding-Tour** (3 Schritte) | 0.5d | ⏳ Offen |
| D.5 | **CSV-Import** (Schülerliste für Lehrer) | 0.5d | ⏳ Offen |
| D.6 | **Bug-Fixing + Polish** | 2d | ⏳ Offen |
|  | → Fokus-Trap in Modals | | |
|  | → `100dvh` statt `100vh` | | |
|  | → `prefers-reduced-motion` | | |
|  | → iOS Safari Kompatibilität | | |
| D.7 | **Pilotschule starten** | — | ⏳ Offen |

**Abnahme:** Pilotschule nutzt Plattform aktiv. Feedback einarbeiten.

---

## Zeitplan

```
Woche 1:  Sprint A (Einstufung)     + Sprint B Start (Content LE-02)
Woche 2:  Sprint A (KI-Didaktik)    + Sprint B (Content LE-03, LE-04)
Woche 3:  Sprint C (Infra + DSGVO)  + Sprint B (Content LE-05, LE-07)
Woche 4:  Sprint C fertig           + Sprint B (Content LE-08, LE-09)
Woche 5:  Sprint D (Polish)
Woche 6:  Sprint D (Launch) → Pilotschule
```

---

## Meilensteine + Go/No-Go

| Wann | Meilenstein | Kriterium |
|------|-------------|-----------|
| Wo 2 | **Einstufung live** | 2-Achsen-Test funktioniert, KI wechselt Strategie |
| Wo 4 | **9 LEs + Infra** | 9 LEs published, DB in DE, Stripe aktiv |
| Wo 5 | **Beta** | Polish fertig, ≥30 Tests grün |
| Wo 6 | **Launch** | Pilotschule startet |

---

## Metriken für Launch-Ready

| Metrik | Ist | Ziel |
|--------|-----|------|
| LEs live | 2 | ≥ 9 |
| Tests | 7 | ≥ 30 |
| Lighthouse | ? | ≥ 90 |
| Quality-Gate | 1/2 PASS | PASS für alle |
| DSGVO-Seiten | 0 | 3 (Datenschutz, Impressum, AVV) |
| DB-Region | us-east-1 | eu-central-1 |
| Stripe | Code fertig | Testzahlung OK |
| Push | Code fertig | Erinnerung OK |

---

## Rollen-Matrix (unverändert)

| Funktion | Schüler | Lehrer | Schulleiter | Admin |
|----------|---------|--------|-------------|-------|
| Lernen + Quiz | ✅ | — | — | — |
| Eigenes Dashboard | ✅ | — | — | — |
| Chat mit Lehrer | ✅ senden | ✅ empfangen/senden | — | — |
| Klassen-Dashboard | — | ✅ eigene Klassen | ✅ alle Klassen | ✅ |
| PDF-Export | ✅ eigener | ✅ Klasse | ✅ Schule | ✅ |
| Schulen verwalten | — | — | — | ✅ |

---

## Risiken

| Risiko | Impact | Gegenmaßnahme |
|--------|--------|----------------|
| Content-Pipeline zu langsam | Launch verzögert | Agent Teams parallel, 2-3 LEs/Tag |
| Schulen brauchen >9 LEs | Pilot unsicher | 1. Drittel reicht für Evaluation |
| Neon eu-central-1 nicht verfügbar | DSGVO-Verstoß | Alternative: Hetzner VPS |
| Einstufungstest-Fragen unpassend | Falsche Profile | Pilotschule-Feedback, iterativ |

---

## Was NICHT im MVP ist (bewusst)

- CE 04-11 Inhalte (nach Launch sukzessive)
- Arabisch/Türkisch Erklärtexte (nur Glossar + UI)
- Video-Inhalte
- Chat zwischen Schülern
- Gruppenarbeit / Beamer-Modus
- Eltern-Zugang
- Prüfungs-Generator PDF

---

*Dieser Plan ersetzt Sprint-Plan v3.0. Kernänderung: Von 10 auf 4 Sprints reduziert weil 80% der Features bereits gebaut sind. Fokus auf Content-Produktion (der eigentliche Engpass) und Launch-Vorbereitung.*
