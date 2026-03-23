# Recherche-Index: Alle Erkenntnisse und Dokumente

> Zentrales Verzeichnis aller Recherchen, Entscheidungen und Specs fuer die Pflege-Lernplattform.
> **Stand:** 2026-03-21
> **Gesamtumfang:** 25 Dokumente, 12 Recherchen, 37+ Entscheidungen

---

## 1. Strategische Dokumente (Wahrheitsquellen)

| Dokument | Pfad | Inhalt | Status |
|---|---|---|---|
| **VISION.md** | `/VISION.md` | Produkt-Vision, Kernvision, Zwei-Achsen-Adaptivitaet | Wahrheitsquelle |
| **PROJEKTBRIEFING.md** | `/PROJEKTBRIEFING.md` | Recherche-Masterdokument v2.8, Business Model, DSGVO, Wettbewerb | Abgeschlossen |
| **SPRINT_PLAN.md** | `specs/SPRINT_PLAN.md` | Sprint-Plan v2.0 — 10 Sprints / 20 Wochen | Aktuell |
| **FEATURE_LISTE.md** | `specs/FEATURE_LISTE.md` | 38 Features (23 MVP, 10 V1.1, 5 V2.0) | Aktuell |
| **STRATEGIE_VERTICAL_SLICE.md** | `specs/STRATEGIE_VERTICAL_SLICE.md` | Vertical-Slice-Strategie, Phasen 0-3, Was nicht sofort gebaut wird | Aktuell |

---

## 2. Recherchen — Uebersicht

### 2.1 Paedagogik & Didaktik

| Recherche | Datei | Kernerkenntnisse |
|---|---|---|
| **Didaktisches Konzept** | `specs/didaktisches-konzept.md` | Situationsorientiertes Curriculum (Darmann-Finck), 3 Bildungsdimensionen (technisch/hermeneutisch/reflexiv), 6-Phasen-LE-Struktur, Constructive Alignment, Bloom fuer Pflege, B1/C1-Differenzierung, Pruefungsformate |
| **Kompetenzorientierung** | `specs/recherche-kompetenzorientierung.md` | PflAPrV 5 KB (I-V), Benner-Stufen 1-3 erreichbar, KMK Handlungskompetenz, Bloom + Anderson/Krathwohl fuer Pflege, OSCE/Key-Feature/SCT Pruefungsformate, Clinical Reasoning (Tanner 2006), EPAs adaptiert fuer Pflege, Spiralcurriculum ueber 3 AD, BKT + IRT fuer Kompetenz-Tracking |
| **Fragetypen** | `specs/recherche-fragetypen.md` | 25 Fragetypen identifiziert, 15 fuer MVP, inkl. Memory, Kreuzwortraetsel, Dosisrechnung, Branching Scenario, Timeline |
| **Pruefungsreife** | `specs/recherche-pruefungsreife.md` | Gewichteter Composite-Score (Faelle 30% + Bloom 25% + Abdeckung 20% + Retention 15% + MC 10%), worst exam day = overall |

### 2.2 Adaptivitaet & Lernanalytik

| Recherche | Datei | Kernerkenntnisse |
|---|---|---|
| **Antwortzeit** | `specs/recherche-antwortzeit.md` | 5-Stufen-Klassifikation (beherrscht/gewusst/unsicher/geraten/unbekannt), typabhaengige Schwellen (15s/35s/60s), B1-Faktor x1.5, MUSS unsichtbar bleiben |
| **Sprachentwicklung** | `specs/recherche-sprachentwicklung.md` | CAF-Framework (Complexity, Accuracy, Fluency), alle 3 Wochen neu berechnet, Fachsprache vs Allgemeinsprache getrennt |
| **Selbstlernende Plattform** | `specs/recherche-selbstlernende-plattform.md` | IRT (1PL/2PL), Duolingo Birdbrain/HLR, AMBOSS Schwierigkeitsmodell, Learning Analytics (8 Event-Typen), A/B-Testing, B1-Sprachfaktor dynamisch lernen, DSGVO-konforme Aggregation, Drizzle-Schema (7 Tabellen), naechtlicher Cron-Job |

### 2.3 Content & Curriculum

| Recherche | Datei | Kernerkenntnisse |
|---|---|---|
| **BIBB-Rahmenplan** | `specs/rahmenplan-bibb.md` | Alle 11 CEs mit LEs, Stunden, KB-Zuordnung. Gesamt: 1.540 Std., 38+ LEs. Rahmenplan ist EMPFEHLEND, Schulen haben eigene Curricula |
| **Content-Volumen** | `specs/recherche-content-volumen.md` | 1 Lernstunde = 7 Texte + 18 Fragen + 1.5 Faelle + 30 Cards. Gesamt: 87.010 Basis-Objekte, 217.525 mit Puffer. Zahlen gelten fuer Muttersprachler |
| **Content-Volumen-Plan** | `specs/content-volumen-plan.md` | Exakte Berechnung pro CE und LE mit korrigierten BIBB-Stundenzahlen |
| **Content-Loop-Prozess** | `specs/content-loop-prozess.md` | 7-Phasen-Prozess: BIBB → Didaktik → RECHERCHE → Generierung → B1 → Qualitaet → Export. Recherche ist PFLICHT vor Generierung |
| **Urheberrecht** | `specs/recherche-urheberrecht.md` | Paraphrase OK, nicht "vgl. I Care S.234" inline, AWMF frei zitierbar, Thieme hat konkurrierende Plattform → hoehere Risiko, Medienanwalt empfohlen (~400-800 EUR) |

### 2.4 Technische Recherchen

| Recherche | Datei | Kernerkenntnisse |
|---|---|---|
| **TTS** | `specs/recherche-tts.md` | ElevenLabs (MOS 4.14) fuer ~500 Fachbegriffe einmalig + MP3 cachen. Azure KatjaNeural (500K chars/Mo gratis) fuer laufenden Text. Multi-Account ElevenLabs gegen ToS |
| **Uebersetzung** | `specs/recherche-uebersetzung.md` | DeepL Pro fuer TR, Claude 3.5 fuer AR, tip doc Pflege Seed (134 Terme), WHO ICD-11 API, ~70-120 EUR |
| **Lernzeit-Nachweis** | `specs/recherche-lernzeit-nachweis.md` | PflBG erfordert 1.890/2.100h Minimum, aktive Zeit messen (Scroll + Tippen), PDF-Export mit KB I-V |
| **Animation/UI** | `specs/animation-ui-research.md` | 40+ UI-Animationsbibliotheken verglichen |
| **Qualitaet** | `specs/QUALITAET.md` | SaaS-Qualitaetswerkzeuge (Sentry, Plausible, etc.) |

---

## 3. Feature-Specs (Build-Vorlagen)

| Spec | Datei | Status | Aenderungen noetig? |
|---|---|---|---|
| **Lernmodul-Ansicht** | `specs/lernmodul-ansicht.md` | Geschrieben (vor VISION) | Ja — muss 6-Phasen-Struktur integrieren |
| **Quiz-System** | `specs/quiz-system.md` | Geschrieben (vor VISION) | Ja — nur 5 Typen, jetzt 15-25 |
| **Schueler-Dashboard** | `specs/dashboard-student.md` | Geschrieben | Ja — Kompetenz-Tracking fehlt |
| **Lehrer-Dashboard** | `specs/dashboard-teacher.md` | Geschrieben | Ja — Schulleiter-Rolle fehlt |
| **Gamification** | `specs/gamification.md` | Geschrieben | Minimal — Kern stimmt |
| **Mock-Daten** | `specs/mock-daten.md` | Geschrieben | Ja — muss 6-Phasen-LE-Struktur widerspiegeln |

---

## 4. Entscheidungen — Vollstaendige Liste

### 4.1 Aus 37-Fragen-Session (2026-03-21)

→ Vollstaendige Dokumentation: `memory/entscheidungen-37-fragen.md`

**Assessment & Adaptivitaet:**
- Einstufung beim Erstlogin + unsichtbare Hintergrund-Kalibrierung
- Antwortzeit als 5-Stufen-Signal, B1-Faktor x1.5, unsichtbar
- Sprachlevel alle 3 Wochen neu (CAF-Framework)

**KI-Didaktik:**
- REVIDIERT: Schueler NICHT fragen bei B1 → immer Doppel-Pfad (Sprache + Konzept)
- 3 vorbereitete Erklaerungspfade + KI-generierte ab Versuch 3
- Pro-Schueler-Profil + aggregierte Insights fuer Lehrer

**Content & Curriculum:**
- Content-Volumen fuer Muttersprachler als Benchmark, B1-Faktor dynamisch
- Paraphrasieren (Buch nicht offen!), kein Plagiat
- Medienanwalt empfohlen (~400-800 EUR)
- Fallbeispiele: Komplex, CE-uebergreifend, viele Entscheidungspunkte

**Sprache & Audio:**
- ElevenLabs fuer Fachbegriffe (1 Account, legal) + Azure fuer Rest
- Nur Deutsch

**Lehrer-Features:**
- Chat: Async + Echtzeit, Schule waehlt
- 4 Rollen: Schueler, Lehrer, Schulleiter, Admin
- MVP autonom, Lehrer kann auch zuweisen

**Business:**
- Probetag statt volle CE kostenlos (noch offen)
- Monatliche Kuendigung, Monatsabo teurer als Jahresabo

**Technisch:**
- Offline: IndexedDB via Dexie.js
- Demo-Seiten als UI-Template behalten

### 4.2 Nachtrags-Entscheidungen

**Selbstlernende Plattform:**
- IRT 1PL fuer Start, 2PL ab ~200 Antworten
- Naechtlicher Cron-Job fuer Analytics
- B1-Sprachfaktor dynamisch lernen
- DSGVO: Zwei-Strom-Architektur
- Zusatzkosten: 0-5 EUR/Monat

**Didaktik:**
- 6-Phasen-LE-Struktur (Ankommen → Situierung → Wissen → Anwendung → Reflexion → Transfer)
- 17 Steps pro LE, 15-25 Min
- Wissenschaftliche Recherche VOR Content-Generierung (PFLICHT)
- Mind. 5 Quellen pro LE (AWMF, DNQP, RKI, PubMed)
- Mind. 40% Anwendungsfragen (Bloom B3+)
- Jeder Step hat Fallbezug

**Architektur:**
- LE als atomare Einheit (nicht CE)
- CE-Zuordnung konfigurierbar pro Schule
- BIBB-Rahmenplan ist empfehlend, Schulen haben eigene Curricula

---

## 5. Technischer Stand (Codebase)

### Gebaut und funktionsfaehig:
- Auth-System (JWT, bcrypt, Guards, API-Routes)
- Layout-Shell (Sidebar, TopBar, BottomNav, Theme-Toggle)
- Landing Page + Auth-Formulare
- DB-Schema (13 von ~20 Tabellen, Drizzle ORM)
- Design-System (36 Komponenten: shadcn + Glass-UI)
- Demo-Seiten (Lektion 17 Steps + Dashboard)
- CI/CD Pipeline (GitHub Actions)
- i18n-Grundgeruest (DE/AR/TR)
- Middleware (JWT + Locale + Rollen-Guards)

### Noch nicht gebaut:
- Mock-Daten (`src/lib/mock/`)
- Produktive Seiten (Learn, Quiz, Dashboard, Settings)
- Lern-Komponenten (learn/, quiz/, dashboard/, gamification/)
- 7 zusaetzliche DB-Tabellen (learner_profiles, learning_events, etc.)
- Schulleiter-Rolle (Schema hat nur 3 Rollen)
- Tests (0 Tests existieren)
- KI-Integration (Nebius/Llama)
- Stripe-Integration
- TTS-Integration
- PWA/Offline

### Tech-Stack:
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4 + shadcn/ui + Glass-UI
- PostgreSQL + Drizzle ORM
- Zustand + TanStack Query
- Framer Motion + Recharts + DnD-Kit
- jose (JWT) + bcryptjs
- next-intl (i18n)
- Vitest + Playwright (konfiguriert, 0 Tests)

---

## 6. Offene Fragen / Noch zu klaeren

| Nr | Frage | Prioritaet | Status |
|---|---|---|---|
| 1 | Freemium-Modell: Probetag vs. andere Optionen | Mittel | Offen |
| 2 | Badge-System Design | Niedrig | Noch nicht begonnen |
| 3 | DNQP-Expertenstandards lizenzieren (~300 EUR) | Hoch | Entscheidung ausstehend |
| 4 | Medienanwalt konsultieren (~400-800 EUR) | Hoch | Empfohlen |
| 5 | Vertiefungsrichtungen 3. AD (3 Pfade) | Mittel | Architektur geplant |
| 6 | Eltern-Zugang fuer minderjaehrige Schueler | Niedrig | Spaeter |
| 7 | Praxisanleiter-Rolle | Niedrig | Nicht fuer MVP |

---

## 7. Kosten-Uebersicht

| Posten | Kosten | Frequenz |
|---|---|---|
| Hosting (Hetzner) | ~43 EUR | /Monat |
| KI (Nebius Llama 3.3) | ~5-15 EUR | /Monat (bei 100 Schuelern) |
| TTS (Azure + ElevenLabs) | ~1-5 EUR | /Monat |
| Uebersetzung (DeepL + Claude) | ~70-120 EUR | Einmalig |
| DNQP-Expertenstandards | ~300 EUR | Einmalig |
| Medienanwalt | ~400-800 EUR | Einmalig |
| Analytics/Alerting | ~0-5 EUR | /Monat |
| **Laufend gesamt** | **~50-70 EUR** | **/Monat** |
| **Einmalig gesamt** | **~770-1.220 EUR** | |

---

## 8. Dateiverzeichnis (alle Specs)

```
specs/
├── FEATURE_LISTE.md              # 38 Features (23 MVP, 10 V1.1, 5 V2.0)
├── SPRINT_PLAN.md                # Sprint-Plan v2.0 (10 Sprints / 20 Wochen)
├── QUALITAET.md                  # SaaS-Qualitaetswerkzeuge
├── RECHERCHE_INDEX.md            # ← DIESES DOKUMENT
│
├── # Feature-Specs
├── lernmodul-ansicht.md          # Lernmodul-UI (muss aktualisiert werden)
├── quiz-system.md                # Quiz-System (muss aktualisiert werden)
├── dashboard-student.md          # Schueler-Dashboard
├── dashboard-teacher.md          # Lehrer-Dashboard
├── gamification.md               # Gamification (Streaks, XP, Goals)
├── mock-daten.md                 # Mock-Daten-Struktur
├── animation-ui-research.md      # 40+ UI-Libraries verglichen
│
├── # Didaktik & Content
├── didaktisches-konzept.md       # Pflegedidaktik, 6-Phasen-LE, Pruefungen
├── content-loop-prozess.md       # 7-Phasen Content-Erstellung
├── content-volumen-plan.md       # Exakte Content-Berechnung pro CE/LE
├── rahmenplan-bibb.md            # BIBB Rahmenplan (11 CEs, 38+ LEs)
│
├── # Recherchen
├── recherche-antwortzeit.md      # Antwortzeit als Assessment-Signal
├── recherche-sprachentwicklung.md # CAF-Framework, Sprachlevel-Tracking
├── recherche-content-volumen.md  # Content-Mengen-Benchmarks
├── recherche-urheberrecht.md     # Copyright-Strategie
├── recherche-uebersetzung.md     # DeepL/Claude fuer TR/AR
├── recherche-tts.md              # Text-to-Speech (ElevenLabs + Azure)
├── recherche-pruefungsreife.md   # Pruefungsreife-Assessment
├── recherche-lernzeit-nachweis.md # Lernzeit-Dokumentation (PflBG)
├── recherche-fragetypen.md       # 25 interaktive Fragetypen
├── recherche-selbstlernende-plattform.md  # IRT, Analytics, A/B-Tests
└── recherche-kompetenzorientierung.md     # (In Arbeit)
```
