# QUALITAET.md — SaaS-Qualitaetswerkzeuge

**Erstellt:** 2026-03-20
**Kontext:** Solo-Entwicklerin, Minimalbudget, Next.js 15 + PostgreSQL auf Hetzner

---

## SaaS-Modell

Software as a Service: Schueler oeffnet eine URL im Browser, fertig. Keine Installation, kein App Store, keine Updates auf Endgeraeten. Eine Codebase fuer alle Geraete.

| Kriterium | SaaS (unser Modell) | Native App | On-Premise |
|---|---|---|---|
| Installation | Keine | App Store Review | Server bei der Schule |
| Updates | Sofort fuer alle | Nutzer muss updaten | Jede Schule einzeln |
| Geraete | Alle mit Browser | iOS + Android separat | Nur im Schulnetz |
| Kosten | 1x entwickeln | 2-3 Codebases | Pro Schule konfigurieren |
| DSGVO | Zentral steuerbar | App Store Policies | Schule verantwortlich |

---

## Stufe 1: Sofort beim Entwickeln (0 EUR)

### Code-Qualitaet (bereits vorhanden)

| Tool | Status |
|---|---|
| TypeScript strict mode | Aktiv |
| ESLint + Prettier | Aktiv |
| Vitest (Unit/Integration Tests) | Konfiguriert |
| GitHub Actions CI (Lint + Typecheck + Test) | Vorhanden |

### Accessibility (einmalig einrichten)

| Tool | Funktion | Setup |
|---|---|---|
| `eslint-plugin-jsx-a11y` | A11y-Regeln im Code | `npm install eslint-plugin-jsx-a11y` |
| `axe-core` | Automatisierte WCAG-Pruefung | `npm install @axe-core/playwright` |
| Lighthouse | Performance + A11y Score | Chrome DevTools (kostenlos) |
| WAVE | Manuelle Browser-Pruefung | Chrome Extension (kostenlos) |
| VoiceOver | Screenreader-Test | Auf macOS vorinstalliert |

**Minimale A11y-Checkliste:**
- Alle Bilder mit `alt`-Text
- Farbkontrast >= 4.5:1 (Hell- UND Dunkelmodus)
- Tastatur-Navigation fuer alle interaktiven Elemente
- Focus-Styles sichtbar
- Schriftgroesse in `rem` statt `px`
- Aria-Labels fuer Icons und Custom-Components

**Ziellevel:** WCAG 2.1 Level AA (EU-Standard, ab Juni 2025 auch fuer private Anbieter relevant via BFSG)

---

## Stufe 2: Vor Launch (0 EUR)

### Technisches Monitoring

| Tool | Funktion | Free Tier |
|---|---|---|
| **Sentry** | Error Tracking | 5.000 Errors/Monat |
| **Better Stack** | Uptime Monitoring | 50 Monitors |
| **Lighthouse CI** | Performance-Regression in CI/CD | Kostenlos (GitHub Action) |

**Sentry Setup:** Next.js SDK, 5 Minuten Integration, faengt alle Fehler im Frontend + Backend.
**Better Stack:** URL eingeben, prueft alle 5 Minuten ob Seite erreichbar, Alert per E-Mail.

### Technische Zielwerte

| Metrik | Zielwert | Bedeutung |
|---|---|---|
| Uptime | 99.5% (max 43h Ausfall/Jahr) | Ist die Plattform erreichbar? |
| TTFB (Time to First Byte) | < 200ms | Wie schnell antwortet der Server? |
| LCP (Largest Contentful Paint) | < 2.5s | Wann sieht der Nutzer Inhalt? |
| Error Rate | < 1% | Wie viele Anfragen scheitern? |
| Lighthouse Score | > 90 | Google-Gesamtbewertung |

### UX-Messung

| Metrik | Methode | Tool |
|---|---|---|
| **SUS (System Usability Scale)** | 10 Fragen, Ergebnis 0-100 (ueber 68 = gut) | Google Forms (kostenlos) |
| **In-App Feedback** | Daumen hoch/runter nach jeder Lektion | Selbst gebaut |
| **Schueler-Feedback-Button** | "Stimmt etwas nicht?" pro Lektion | Flag in DB |

### Learning Analytics (aus eigener DB)

Die wertvollsten Metriken kommen direkt aus PostgreSQL — keine externen Tools noetig:

| Metrik | Was es misst | SQL-Logik |
|---|---|---|
| **Completion Rate** | Wie viele schliessen eine Lektion ab? | `completed_at IS NOT NULL` |
| **Quiz-Accuracy** | Antwort-Richtigkeit pro Frage | `correct_answers / total_answers` |
| **Knowledge Retention** | Wissen nach 7/30 Tagen | Spaced-Repetition-Quizzes |
| **Time-on-Task** | Wie lange brauchen Schueler? | Timestamps in DB |
| **Struggle Points** | Wo brechen Schueler ab? | Funnel-Analyse pro Lektion |
| **Pre/Post-Test Delta** | Wissenszuwachs messen | Test vor und nach CE-Modul |
| **Active Learning Ratio** | Interaktion vs. passives Lesen | Klicks/Antworten pro Minute |
| **Antwortzeit** | Weiss der Schueler es wirklich? | Millisekunden pro Antwort |

**Datenmodell (Minimalversion):**

```sql
CREATE TABLE learning_events (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  lesson_id INT REFERENCES lessons(id),
  event_type VARCHAR(50),  -- 'started', 'completed', 'quiz_answered', 'hint_used', 'ki_feedback'
  correct BOOLEAN,
  duration_ms INT,          -- Antwortzeit in Millisekunden
  attempt_number INT,       -- Wievielter Versuch?
  created_at TIMESTAMP DEFAULT NOW()
);
```

### DSGVO-Compliance

| Massnahme | Umsetzung | Kosten |
|---|---|---|
| Server in Deutschland | Hetzner Cloud (DE) | Im Hosting enthalten |
| Datenschutzerklaerung | datenschutz-generator.de (RA Dr. Schwenke) | Kostenlos |
| AV-Vertrag Hetzner | Bei Bestellung automatisch | Kostenlos |
| HTTPS/SSL | Let's Encrypt auf Hetzner | Kostenlos |
| KI-Anonymisierung | Nur Frage + Antwort an Nebius, kein Name/ID | Im Code |
| Cookie-Banner | Nicht noetig wenn keine Tracking-Cookies | Kostenlos |
| Verarbeitungsverzeichnis | Einfache Tabelle (< 250 Mitarbeiter) | Kostenlos |
| DPIA | Noetig wenn KI personenbezogene Daten verarbeitet | Template von Behoerden |

### Content-Qualitaet

| Methode | Umsetzung |
|---|---|
| **Dozentin-Review** | Jeder Inhalt: Draft → Review → Published |
| **Quellen-Referenzierung** | Jede Lektion referenziert I Care + Seitenzahl |
| **Versionierung** | `content_version` Feld + `updated_at` |
| **PflBG 2020 Alignment** | Mapping-Tabelle: CE → Kompetenzen → Lektionen |
| **Jaehrlicher Review** | Alle Inhalte jaehrlich pruefen (Leitlinien aendern sich) |
| **Schueler-Feedback** | "Stimmt etwas nicht?" Button → Flag in DB |
| **KI-Kennzeichnung** | KI-generiertes Feedback als solches markieren |

---

## Stufe 3: Nach Launch (0-20 EUR/Monat)

| Tool | Funktion | Free Tier |
|---|---|---|
| **PostHog** | Product Analytics | 1 Mio Events/Monat (EU-hosted moeglich) |
| **Playwright** | E2E-Tests fuer kritische Flows | Kostenlos (OSS) |
| **NPS-Umfrage** | "Wuerdest du uns empfehlen?" | Google Forms quartalsweise |
| **Admin-Dashboard** | Learning Analytics visualisiert | Selbst gebaut (Next.js + SQL) |

### E2E-Tests (kritische Flows)

| Flow | Prioritaet |
|---|---|
| Login / Registrierung | Hoch |
| Quiz beantworten + Ergebnis sehen | Hoch |
| Lektion starten + abschliessen | Hoch |
| Einstufungstest durchlaufen | Hoch |
| Lehrer-Chat senden/empfangen | Mittel |
| Offline-Modus + Sync | Mittel |

---

## Stufe 4: Bei Wachstum (spaeter)

| Was | Wann |
|---|---|
| QM-Zertifizierung (Quality Matters) | Ab 50+ Schulen |
| Professioneller Penetration Test | Ab signifikantem Umsatz |
| Vollstaendige DPIA mit Berater | Wenn KI personalisiert wird |
| xAPI/SCORM (LMS-Integration) | Wenn Schulen es fordern |
| Professionelles Barrierefreiheits-Audit | Wenn BFSG-pflichtig |

---

## EdTech-Qualitaetsstandards (als interne Checkliste)

### QM Rubric (Quality Matters) — 8 Standards

Keine teure Zertifizierung noetig, aber als Designprinzipien nutzen:

1. **Kursuebersicht:** Schueler weiss sofort was ihn erwartet
2. **Lernziele:** Jede LE hat messbare Ziele (Bloom-Taxonomie)
3. **Bewertung:** Quiz/Tests pruefen genau das was die Lernziele versprechen
4. **Materialien:** Inhalte sind aktuell, korrekt, quellenreferenziert
5. **Aktivitaeten:** Verschiedene Fragetypen, nicht nur MC
6. **Technologie:** Funktioniert auf allen Geraeten, laed schnell
7. **Unterstuetzung:** KI-Tutor + Lehrer-Chat + Glossar
8. **Barrierefreiheit:** WCAG 2.1 AA, Vorlesefunktion, Kontrastmodus

### LORI (Learning Object Review Instrument) — 9 Dimensionen

Fuer Content-Review-Checkliste der Dozentin:

1. Content Quality — Fachlich korrekt?
2. Learning Goal Alignment — Passt zum Lernziel?
3. Feedback & Adaptation — Gibt es Erklaerungen?
4. Motivation — Macht es Spass?
5. Presentation — Gut lesbar und strukturiert?
6. Usability — Einfach zu bedienen?
7. Accessibility — Barrierefrei?
8. Reusability — Wiederverwendbar?
9. Standards Compliance — PflBG-konform?

---

## Zusammenfassung: Der Qualitaets-Stack fuer 0 EUR

```
Code:           TypeScript strict + ESLint + Vitest + Playwright
Accessibility:  axe-core + jsx-a11y + Lighthouse + VoiceOver
Monitoring:     Sentry Free + Better Stack Free
UX-Messung:     SUS (Google Forms) + In-App Daumen hoch/runter
Lern-Messung:   PostgreSQL (learning_events Tabelle)
DSGVO:          Hetzner DE + Anonymisierte KI + Generator-DSE
Content:        Dozentin-Review + Quellenreferenz + Feedback-Button
CI/CD:          GitHub Actions (Lint + Test + Build + Lighthouse)
```
