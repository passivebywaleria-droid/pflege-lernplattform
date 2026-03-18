# Technik-Recherche: Kosten, DSGVO, Stack-Empfehlung
## Lernplattform Generalistische Pflegeausbildung

**Erstellt:** 2026-03-16
**Status:** Abgeschlossen
**Zielgruppe:** ~1.500 Pflegeschulen DE | Solo-Entwicklerin | Minimalbudget | DSGVO-Pflicht (Schülerdaten)

---

## 1. Kostenmatrix: Alle relevanten Services

| Service | Free Tier Umfang | Grenze: wann kostenpflichtig | Kosten danach | DSGVO-Status |
|---|---|---|---|---|
| **Vercel Hobby** | 100 GB Bandwidth/Monat, 150.000 Serverless-Invocations/Monat, 6.000 Build-Minuten/Monat, 12 Serverless Functions/Deployment | Bei Überschreitung eines der Limits; Hobby = nur nicht-kommerziell (!) — bei Schulen/Bezahlung sofort Pro nötig | Pro: $20/Monat — 1 TB Bandwidth, unlimitierte Invocations, 24h Log-Retention | DPA vorhanden, EU-US DPF zertifiziert, SCCs verfügbar. Server primär USA/Edge. Für Schülerdaten: **kritisch**, da kein EU-only Hosting. Risiko bleibt. |
| **Supabase Free** | 500 MB Datenbank, 1 GB Dateispeicher, 5 GB DB-Egress, 50.000 MAU (Monthly Active Users), max. 2 aktive Projekte | Projekt wird nach **7 Tagen Inaktivität pausiert**. Bei > 50.000 MAU oder > 500 MB DB sofort. | Pro: $25/Projekt/Monat — 8 GB Storage, 250 GB Bandwidth, 7-Tage-Backups, kein Auto-Pause | EU-Region Frankfurt wählbar (eu-central-1). DPA verfügbar und unterzeichenbar. RLS (Row Level Security) vorhanden. Mit EU-Region + DPA + RLS: **DSGVO-konform möglich**. |
| **Supabase Pro** | Alles aus Free + $10 Compute-Credit inklusive, 2-Core ARM Shared, 1 GB RAM, kein Auto-Pause | Pay-as-you-go über Inklusivleistungen hinaus | $25/Monat Basis + ~$10–50 Overages je nach Nutzung. Realwelt: $35–75/Monat für kleine Produktions-Apps | Wie Free, EU-Region Frankfurt. Empfohlen für Produktion. |
| **PocketBase (Self-hosted)** | Komplett kostenlos, Open Source, Single Go Binary, SQLite, Auth, Dateispeicher, Admin-Dashboard — alles inklusive | Kein Free-Tier-Limit, aber: Betreiber zahlt Hosting (VPS) | VPS ab $5–10/Monat (z.B. Hetzner CX11 in Deutschland). Keine SaaS-Kosten. | Vollständige Datenkontrolle. Hosting in Deutschland möglich (Hetzner). DSGVO: **bestes Profil** — kein Drittanbieter hat Datenzugriff. Erfordert eigene TOMs. |
| **Hetzner VPS (für PocketBase)** | Kein Free Tier. CX11: 1 vCPU, 2 GB RAM, 20 GB SSD | Ab erstem Tag kostenpflichtig | CX11: ~$4,51/Monat. CAX11 (ARM): ~$3,79/Monat. Standort: Nürnberg/Falkenstein/Helsinki | Rechenzentren in Deutschland und Finnland. DSGVO-konform, AV-Vertrag auf Anfrage. |
| **Exa AI API** | 2.000 einmalige Gratis-Suchen (Onboarding) | Nach Verbrauch der 2.000 Suchen sofort kostenpflichtig | $7 / 1.000 Anfragen (10 Ergebnisse inkl.). $12 / 1.000 für Exa Deep. $1 je 1.000 zusätzliche Ergebnisse. | US-Anbieter. Keine EU-Infrastruktur bekannt. Für Schülerdaten: **nicht verwenden** — nur für interne Tool-Recherche ohne personenbezogene Daten. |
| **next-intl (npm)** | Kostenlos, Open Source, MIT-Lizenz | Keine Limits | Kein Kostenfaktor | Kein Datentransfer — reine Client/Server-Bibliothek. DSGVO-neutral. |
| **Vercel Pro** | 1 TB Bandwidth, unlimitierte Serverless Invocations, 24h Logs, Team-Features | Bei > 1 TB Bandwidth oder Enterprise-Anforderungen | Enterprise: individuell | DPA verfügbar, EU-US DPF. Für Schülerdaten nach wie vor: Zusatz-AVV + SCCs empfohlen. |

**Quellen:**
- Vercel Hobby Limits: [Vercel Docs — Hobby Plan](https://vercel.com/docs/plans/hobby) | [Flexprice Vercel Pricing Breakdown 2025](https://flexprice.io/blog/vercel-pricing-breakdown)
- Vercel Serverless Limits: [Vercel Functions Limitations](https://vercel.com/docs/functions/limitations)
- Supabase Free Tier: [Supabase Pricing](https://supabase.com/pricing) | [UI Bakery Supabase Pricing 2026](https://uibakery.io/blog/supabase-pricing)
- Supabase Pause: [Medium — Prevent Supabase Free Tier Pausing](https://shadhujan.medium.com/how-to-keep-supabase-free-tier-projects-active-d60fd4a17263)
- Supabase Pro Kosten: [Metacto Supabase Pricing Guide](https://www.metacto.com/blogs/the-true-cost-of-supabase-a-comprehensive-guide-to-pricing-integration-and-maintenance)
- PocketBase vs Supabase: [Supadex Vergleich 2025](https://www.supadex.app/blog/supabase-vs-firebase-vs-pocketbase-which-one-should-you-choose-in-2025) | [Leanware Vergleich](https://www.leanware.co/insights/supabase-vs-pocketbase)
- Exa Pricing: [Exa.ai/pricing](https://exa.ai/pricing) | [BuildMVPFast Exa Calculator](https://www.buildmvpfast.com/tools/api-pricing-estimator/exa)
- Vercel DSGVO: [Vercel DPA](https://vercel.com/legal/dpa) | [Vercel EU-US DPF Zertifizierung](https://vercel.com/changelog/vercel-is-now-certified-under-the-eu-us-data-privacy-framework-dpf)
- Supabase DSGVO: [KontoCSV — Supabase DSGVO-konform 2025](https://www.kontocsv.de/en/ratgeber/supabase-dsgvo-konform) | [Supabase DPA](https://supabase.com/legal/dpa)

---

## 2. Upgrade-Trigger: Bei welcher Schüleranzahl muss gewechselt werden?

### Szenario-Annahmen
- Durchschnittliche Pflegeschule: 100–300 Schüler
- Plattform-Start: 3–10 Pilotschulen (~300–1.000 Schüler aktiv)
- Rollout: 50 Schulen (~5.000 Schüler)
- Vollausbau: 500 Schulen (~50.000 Schüler)

### Supabase — Upgrade-Trigger

| Phase | Schüler (MAU) | Supabase Plan | Monatliche Kosten |
|---|---|---|---|
| Pilot (0–3 Schulen) | < 300 MAU, < 500 MB DB | **Free** — kein Upgrade nötig | $0 |
| Early Traction (3–10 Schulen) | 300–1.000 MAU | **Free** ausreichend — **ABER**: Kein Auto-Pause akzeptabel für Schulbetrieb → Pro empfohlen | $0 → $25/Monat |
| Wachstum (10–50 Schulen) | 1.000–5.000 MAU | **Pro** zwingend (Stabilität, Backups) | $25–50/Monat |
| Scale (50–500 Schulen) | 5.000–50.000 MAU | **Pro** noch ausreichend | $25–75/Monat |
| Vollausbau (> 500 Schulen) | > 50.000 MAU | **Pro** oder **Team** ($599/Monat) | $599+/Monat |

**Kritischer Trigger Supabase Free:** Bereits ab **Schul-/Produktionsbetrieb** (nicht Hobbyprojekt) sollte auf Pro gewechselt werden, weil:
1. Auto-Pause nach 7 Tagen Inaktivität unterbricht Schulbetrieb
2. 500 MB DB reicht bei 1.000 Schülern mit Lernfortschritten, Quizantworten, etc. nur wenige Monate
3. Keine Backups im Free Tier

### Vercel — Upgrade-Trigger

| Phase | Traffic | Vercel Plan | Kosten |
|---|---|---|---|
| Pilot | < 5.000 Seitenaufrufe/Monat | **Hobby** — **ABER**: Nur bei nicht-kommerziellem Einsatz erlaubt | $0 |
| Jede kommerzielle Nutzung | Ab erstem zahlenden Kunden | **Pro** zwingend (ToS: Hobby = non-commercial only) | $20/Monat |
| Wachstum | > 100 GB Bandwidth/Monat | **Pro** notwendig | $20/Monat |

**Kritischer Trigger Vercel:** Sobald Schulen zahlen oder die Plattform im Schulbetrieb eingesetzt wird, ist **Pro verpflichtend** laut Vercel ToS (Hobby = personal/non-commercial only). Frühzeitig einplanen.

### Gesamtkosten-Prognose pro Phase

| Phase | Schüler | Vercel | Supabase | Gesamt/Monat |
|---|---|---|---|---|
| Pre-Launch / Entwicklung | 0 | $0 (Hobby) | $0 (Free) | **$0** |
| Pilot (3–5 Schulen) | 300–500 | $20 (Pro) | $25 (Pro) | **$45** |
| Early Stage (10–20 Schulen) | 1.000–2.000 | $20 | $25–35 | **$45–55** |
| Growth (50 Schulen) | 5.000 | $20 | $35–50 | **$55–70** |
| Scale (200 Schulen) | 20.000 | $20 | $50–75 | **$70–95** |
| Vollausbau (500+ Schulen) | 50.000+ | $20+ | $599 (Team) | **$620+** |

---

## 3. Tech-Stack-Empfehlung für Solo-Dev

### Option A: Next.js + Supabase (Cloud) — EMPFOHLEN für Start

**Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS + Supabase (Frankfurt, EU)

**Vorteile:**
- Managed Infrastructure — kein Server-Management
- Supabase Frankfurt-Region verfügbar: Postgres bleibt in EU
- Auth, RLS, Realtime, Storage alles out-of-the-box
- Große Community, exzellente Next.js-Integration (`@supabase/ssr`)
- DPA von Supabase unterschreibbar → DSGVO-Basis gegeben
- Vercel + Supabase = Zero-DevOps-Stack für Solo-Dev

**Nachteile:**
- Supabase Free: Auto-Pause Problem (lösbar mit GitHub Actions Ping oder direkt Pro)
- Vercel Hobby: Non-commercial only → Pro sobald erste Schule zahlt
- Kosten skalieren mit MAU bei Supabase Team Plan

**Empfohlene Konfiguration:**
```
Frontend:    Vercel Pro ($20/Monat) — ab erstem Kunden
Datenbank:   Supabase Pro, Region: eu-central-1 Frankfurt ($25/Monat)
Auth:        Supabase Auth (integriert, kostenlos)
Dateien:     Supabase Storage (PDF-Lehrmaterialien)
ORM:         Supabase SDK + Drizzle ORM optional
i18n:        next-intl (kostenlos, MIT)
```

**Monatliche Fixkosten ab Go-Live:** ~$45/Monat

---

### Option B: Next.js + PocketBase auf Hetzner — EMPFOHLEN für DSGVO-maximale Kontrolle

**Stack:** Next.js 15 (Vercel) + PocketBase auf Hetzner VPS (Deutschland)

**Vorteile:**
- Vollständige Datenkontrolle: Daten verlassen nie deutschen Boden (Hetzner Nürnberg)
- PocketBase: Single Binary, SQLite, Auth, Dateispeicher, Admin-UI — alles in einem
- Keine MAU-Limits, keine Datenbank-Größenlimits (nur VPS-Disk)
- DSGVO-Profil: Best in Class für Schülerdaten
- Hetzner ist günstigstes EU-Hosting: €3,79–$5/Monat VPS
- Kein Vendor Lock-in bei Datenbank

**Nachteile:**
- Mehr DevOps-Aufwand: VPS-Wartung, Backups manuell konfigurieren, SSL, Updates
- Kein Managed Failover (bei kleinem VPS: Single Point of Failure)
- PocketBase skaliert nicht horizontal (Single Server) — kein Problem bis ~10.000 gleichzeitige User
- Weniger Ecosystem als Supabase (kein Realtime so einfach)

**Empfohlene Konfiguration:**
```
Frontend:    Vercel Pro ($20/Monat)
Backend:     PocketBase auf Hetzner CX21 (2 vCPU, 4 GB RAM) ~$6/Monat
Standort:    Hetzner Nürnberg (Deutschland, DSGVO optimal)
Backup:      Hetzner Backup-Option +$1,20/Monat
Auth:        PocketBase Auth (integriert)
Dateien:     PocketBase Dateispeicher auf VPS-Disk
i18n:        next-intl (kostenlos)
```

**Monatliche Fixkosten ab Go-Live:** ~$27/Monat

---

### Empfehlung: Welche Option wählen?

| Kriterium | Option A (Supabase Cloud) | Option B (PocketBase Self-hosted) |
|---|---|---|
| Entwicklungszeit bis MVP | Schneller (Managed) | Etwas länger (VPS setup) |
| DSGVO-Sicherheit | Gut (mit DPA + Frankfurt) | Optimal (100% DE) |
| Kosten/Monat (Production) | ~$45 | ~$27 |
| DevOps-Aufwand | Minimal | Moderat |
| Skalierbarkeit | Hoch (managed scale) | Mittel (bis ~10k concurrent users) |
| Vendor Lock-in | Mittel (Supabase-spezifisch) | Niedrig (Standard SQLite/REST) |
| Empfehlung für Schulen-Pitch | "Cloud, EU-zertifiziert, DPA" | "Daten in Deutschland, volle Kontrolle" |

**Fazit:** Für Solo-Dev mit Zeitdruck: **Option A (Supabase)** für schnellen MVP. Für maximale DSGVO-Argumente im Schulen-Pitch: **Option B (PocketBase/Hetzner)**. Hybrid möglich: Supabase für Entwicklung/MVP, Migration zu PocketBase/Hetzner nach erstem Umsatz.

---

## 4. DSGVO-Compliance-Strategie

### Rechtliche Grundlage

Schülerdaten (Name, Lernfortschritt, Testergebnisse) sind **personenbezogene Daten** nach DSGVO Art. 4 Nr. 1. Pflegeschulen sind Verantwortliche (Controller). Die Lernplattform-Betreiberin ist **Auftragsverarbeiterin** (Processor).

**Pflichtdokumente:**
1. **Auftragsverarbeitungsvertrag (AVV)** nach DSGVO Art. 28 — mit jeder Pflegeschule
2. **Datenschutzerklärung** auf der Plattform (Schüler + Lehrer)
3. **Verzeichnis der Verarbeitungstätigkeiten** (intern, Art. 30)
4. **Technisch-organisatorische Maßnahmen (TOMs)** — Dokumentation der Sicherheitsmaßnahmen

### Service-spezifische Maßnahmen

**Supabase (Option A):**
- Region zwingend: `eu-central-1` (Frankfurt) — beim Projekt-Setup wählen
- DPA mit Supabase unterzeichnen: [supabase.com/legal/dpa](https://supabase.com/legal/dpa)
- Row Level Security (RLS) aktivieren: Schüler sehen nur eigene Daten
- Keine US-amerikanischen Supabase-Features nutzen, die Daten transferieren
- Logs-Retention: Pro Plan (7-Tage-Backups), Logs nach DSGVO löschen
- Subprocessor-Liste von Supabase einholen und prüfen

**Vercel (Option A/B):**
- DPA mit Vercel unterzeichnen: [vercel.com/legal/dpa](https://vercel.com/legal/dpa)
- EU-US DPF zertifiziert — angemessener Schutzniveau nach DSGVO Art. 46
- **Kritisch:** Vercel-Edge-Netzwerk verarbeitet Anfragen global (auch USA). Für reine Metadaten/Anfragen OK, aber **keine** personenbezogenen Daten in URL-Parametern, Logs etc.
- Speed Insights und Analytics deaktivieren oder DSGVO-konform einrichten
- Vercel Logs: nur 1h (Hobby) / 24h (Pro) — personenbezogene Daten sollen nicht in Logs auftauchen

**PocketBase auf Hetzner (Option B):**
- Hetzner AVV unterzeichnen (standardmäßig verfügbar)
- SSL/TLS zwingend (Let's Encrypt, kostenlos)
- Regelmäßige automatische Backups (Hetzner Backup-Feature oder Cron-Job)
- Zugang zum Admin-Dashboard absichern (starkes Passwort, IP-Whitelist optional)
- Kein US-CDN vorschalten (kein Cloudflare US-Routing wenn möglich)

### DSFA-Vorprüfung (Art. 35 DSGVO) — PFLICHT für diese Plattform

**Ergebnis der Schwellwertprüfung:** Eine Datenschutz-Folgenabschätzung (DSFA) ist für diese Lernplattform **sehr wahrscheinlich Pflicht** vor dem produktiven Betrieb mit Schülerdaten.

**Rechtsgrundlage:** DSGVO Art. 35 Abs. 1 — DSFA erforderlich, wenn Verarbeitung "voraussichtlich ein hohes Risiko für die Rechte und Freiheiten der betroffenen Personen" hat.

**Konkrete Bewertung nach WP 248 (2-Kriterien-Test):**

Die DSFA ist erforderlich, wenn mindestens 2 der 9 WP248-Kriterien erfüllt sind. Für diese Plattform gelten:

| Kriterium (WP 248) | Erfüllt? | Begründung |
|---|---|---|
| Automatisierte Entscheidungen mit signifikanter Wirkung | **JA** | Spaced-Repetition-Algorithmus entscheidet automatisch über nächsten Lerninhalt; Mastery-Threshold (80%) entscheidet über Lernpfad-Freischaltung |
| Schutzbedürftige Personen (Minderjährige) | **JA** | Pflegeazubis können unter 18 Jahren sein (selten, aber möglich); spezifische DSGVO Art. 8-Pflichten greifen |
| Umfangreiche Verarbeitung personenbezogener Daten | **JA** | Bei > 500 Schülern gilt die Verarbeitung als "umfangreich" im DSGVO-Sinne |
| Neue Technologien (KI-Systeme) | **JA** | Nebius AI + adaptiver Algorithmus = KI-gestützte Entscheidungen über Lernpfade |

**Ergebnis: 4 von 9 Kriterien erfüllt → DSFA nach Art. 35 DSGVO ist Pflicht.**

**Zusätzlich:** Die DSK-Orientierungshilfe für Online-Lernplattformen im Schulunterricht (26.04.2018) stellt fest, dass Online-Lernplattformen **"in aller Regel"** ein hohes Risiko darstellen und eine DSFA erfordern. Dies gilt damit auch ohne Scoring-Funktion — allein durch die Schüler-Datenspeicherung. Quelle: Datenschutzkonferenz (DSK) Orientierungshilfe Online-Lernplattformen, datenschutzkonferenz-online.de, 2018.

**Zeitpunkt:** DSFA muss VOR dem erstmaligen produktiven Einsatz mit echten Schülerdaten erstellt sein (nicht danach).

**Wer führt sie durch:** Die Schule als Verantwortliche (Controller) ist primär zuständig. Die Plattform-Betreiberin als Auftragsverarbeiterin (Processor) muss Informationen liefern (TOMs, Subprocessor-Liste, Architektur-Dokument). In der Praxis: Gemeinsam erstellen, Datenschutzbeauftragte der Schule einbeziehen.

**Umfang einer DSFA für diese Plattform (Mindeststruktur nach Art. 35 Abs. 7 DSGVO):**

1. **Beschreibung der Verarbeitung:** Welche Daten (Schülerprofile, Lernfortschritte, Quiz-Antworten, Spaced-Repetition-Queue), welche Zwecke (Lernunterstützung, Fortschrittsauswertung), welche Kategorien (keine besonderen Kategorien nach Art. 9, außer ggf. Gesundheitsdaten bei Praktikumsberichten)
2. **Erforderlichkeit und Verhältnismäßigkeit:** Warum ist die Verarbeitung notwendig? (Vertragserfüllung, Art. 6 Abs. 1 lit. b) Datensparsamkeit belegen (keine unnötigen Daten)
3. **Risikobewertung:** Schutzbedürftige Betroffene (Minderjährige, internationale Schüler), Profilbildung durch Lernalgorithmus, Datenverlust-Szenarien
4. **Maßnahmen zur Risikobehandlung:** Verschlüsselung, RLS, Pseudonymisierung, Löschfristen, TOMs
5. **Stellungnahme des Datenschutzbeauftragten** (falls Schule einen hat — bei > 20 regelmäßig Daten verarbeitenden Personen Pflicht)

**Praktischer Hinweis für MVP-Phase:**
- Phase 0 (Entwicklung, keine echten Schüler): Keine DSFA nötig
- Phase 1 (Pilot mit echter Schule, echten Schülern): DSFA vor erstem Schüler-Login abschließen
- Empfehlung: DSFA-Muster für Bildungsplattformen als Vorlage nutzen (LfDI-Muster der Bundesländer)

**Quellen:**
- Art. 35 DSGVO: [dsgvo-gesetz.de/art-35-dsgvo](https://dsgvo-gesetz.de/art-35-dsgvo/)
- DSK Orientierungshilfe Online-Lernplattformen (26.04.2018): [datenschutz.bremen.de DSK-OH_Lernplattformen](https://www.datenschutz.bremen.de/sixcms/media.php/13/DSK-OH_Lernplattformen.11354.pdf)
- WP 248 (Guidelines on DPIA): Artikel-29-Datenschutzgruppe, 4. Oktober 2017
- DSFA-Pflicht Kriterien: [ing-ism.de DSFA-Wann-Pflicht](https://www.ing-ism.de/magazin/datenschutz-folgenabschaetzung-dsfa-wann-ist-sie-pflicht/)

---

### Checkliste für ersten Schulen-Vertrag

- [ ] **DSFA abschließen** (vor erstem Schüler-Login — gemeinsam mit Schule/DSB erstellen)
- [ ] AVV-Vorlage erstellen (kann Muster-AVV des BSI verwenden als Basis)
- [ ] Datenschutzerklärung Plattform verfassen (Deutsch)
- [ ] Löschfristen definieren (z.B. Schülerdaten nach Ausbildungsende + 3 Jahre)
- [ ] Einwilligung oder Rechtsgrundlage für Verarbeitung klären (meist Art. 6 Abs. 1 lit. b DSGVO: Vertragserfüllung)
- [ ] Minderjährige Schüler: **DSGVO Art. 8 beachten** — Pflegeazubis können ab 16 Jahren selbst einwilligen; unter 16 Jahren (selten in Pflegeausbildung, aber moeglich bei Schulpraktika) braucht es Einwilligung der Erziehungsberechtigten. Deutschland hat keine nationale Absenkung unter 16 J. (im Gegensatz zu z.B. UK: 13 J.). Rechtsgrundlage: DSGVO Art. 8 Abs. 1. Praktische Loesung: Registrierungsformular fragt Geburtsdatum; unter-16-Schueler aktivieren automatisch Eltern-Einwilligungsflow (E-Mail an Erziehungsberechtigte via Resend).
- [ ] Datenpannen-Prozess festlegen (72h Meldepflicht an Aufsichtsbehörde, DSGVO Art. 33)

**Urheberrecht § 60a UrhG — Abgrenzung fuer kommerzielle Plattform:**
- § 60a UrhG (Unterricht und Lehre, ehemals UrhWissG) erlaubt bis zu 15% eines Werkes fuer Bildungseinrichtungen — aber **nur nichtkommerziell**
- Sobald die Lernplattform Einnahmen generiert (Abo, Schullizenzen), ist § 60a UrhG NICHT anwendbar
- Konsequenz: Ausschliesslich eigene Inhalte, OER (CC-Lizenz) oder lizenzierte Verlagsinhalte verwenden
- Quelle: [§ 60a UrhG — gesetze-im-internet.de](https://www.gesetze-im-internet.de/urhg/__60a.html)

**Landesspezifisch:** Jedes Bundesland hat eigene Bildungs-Datenschutzgesetze. Empfehlung: Zuerst Pilotschule in einem Bundesland, dortige Datenschutzbeauftragte frühzeitig einbeziehen.

---

## 5. RTL/Mehrsprachigkeits-Lösung

### Warum relevant
Pflegeausbildung in Deutschland hat hohen Anteil an Auszubildenden mit Migrationsbiografie (arabisch, türkisch, russisch, vietnamesisch sprachig). Mehrsprachige Plattform erhöht Lernerfolg und Marktpotenzial erheblich.

### Empfehlung: next-intl

**Bibliothek:** `next-intl` — kostenlos, MIT-Lizenz, offizielle Next.js App Router Unterstützung

**Installation:**
```bash
npm install next-intl
```

**RTL-Implementierung für Arabisch:**

```typescript
// app/[locale]/layout.tsx
import { getLocale } from 'next-intl/server';

export default async function LocaleLayout({ children, params }) {
  const locale = await getLocale();

  // Methode 1: Intl.Locale API (modern, Next.js 15+)
  const direction = new Intl.Locale(locale).textInfo?.direction ?? 'ltr';

  // Methode 2: Manuelle Map (Firefox-kompatibel)
  const rtlLocales = ['ar', 'he', 'fa', 'ur'];
  const dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>{children}</body>
    </html>
  );
}
```

**Tailwind CSS RTL:**
```css
/* tailwind.config.js */
// Tailwind 3+: RTL-Varianten mit rtl: Prefix
// Beispiel: rtl:text-right, rtl:flex-row-reverse
```

**Sprachdateien-Struktur:**
```
/messages
  de.json     (Deutsch — Hauptsprache)
  ar.json     (Arabisch — RTL)
  tr.json     (Türkisch)
  ru.json     (Russisch)
  en.json     (Englisch — Fallback)
```

**Locale Detection:**
- next-intl erkennt Browser-Sprache automatisch
- Fallback-Kette: Browser → Cookie → Default (de)
- URL-basierte Locales: `/de/lerneinheit/1`, `/ar/lerneinheit/1`

**DSGVO-Hinweis RTL:** next-intl speichert keine personenbezogenen Daten. Locale-Präferenz im localStorage oder Cookie (technisch notwendig, kein Consent erforderlich).

**Priorität der RTL-Sprachen für Pflegeausbildung:**
1. Arabisch (ar) — größte nicht-muttersprachliche Gruppe
2. Türkisch (tr) — zweitgrößte Gruppe
3. Dari/Farsi (fa) — RTL, wachsende Gruppe
4. Russisch (ru) — LTR, technisch einfach

**Aufwand-Schätzung:** Basis-i18n mit next-intl: 1–2 Tage Entwicklungszeit. Übersetzungen: Auslagern an Muttersprachler (Fiverr/DeepL Pro als Basis).

---

## 6. Zusammenfassung: Empfohlener Minimal-Stack

### Für MVP (0–10 Schulen, erste 16 Wochen Entwicklung + 12 Monate Betrieb)

```
Frontend:         Next.js 15 + TypeScript + Tailwind CSS
Hosting:          Vercel Pro ($20/Monat) — ab erstem Kunden
Datenbank/Auth:   Supabase Pro, Frankfurt eu-central-1 ($25/Monat)
Dateispeicher:    Supabase Storage (Lernmaterialien als PDF/MP4)
i18n/RTL:         next-intl (kostenlos)
Bezahlsystem:     Stripe (keine Monatskosten, 1,5% + 0,25€/Transaktion EU)
E-Mail:           Resend Free Tier (3.000 E-Mails/Monat kostenlos) oder Supabase SMTP
Monitoring:       Vercel Analytics (Pro inklusive, DSGVO-prüfen)
Gesamtfixkosten:  ~$45–50/Monat
```

### Upgrade-Pfad

```
Phase 1 (0–3 Schulen):   $0/Monat  — Hobby + Free (Entwicklung)
Phase 2 (3+ Schulen):    $45/Monat — Pro + Pro (Produktion)
Phase 3 (50+ Schulen):   $55–70/Monat — skaliert graduell
Phase 4 (500+ Schulen):  $620+/Monat — Supabase Team Plan
```

---

## 7. B2B-Schulen-Features (Pivot-Update 2026-03-16)

> **Kontext:** Nach dem Pivot von B2C (4,99 €/Mo Einzellizenz) zu B2B (149–199 €/Schüler/Jahr Schullizenz) braucht der Stack zusätzliche Features, die in der ursprünglichen 12-Wochen-Timeline NICHT enthalten waren. Diese Features sind essenziell für den B2B-Verkauf an Pflegeschulen.

### 7.1 Lehrer/Lernbegleiter-Dashboard

**Zweck:** Im Inverted-Classroom-Modell wird der Dozent zum Lernbegleiter. Er braucht eine Übersicht über den Lernstand aller Schüler, um gezielt eingreifen zu können.

**Funktionen:**
- **Schüler-Fortschrittsübersicht:** Tabelle aller Schüler einer Klasse mit CE-Fortschritt (% pro CE), letztem Login, aktuellem Mastery-Level
- **CE-Lücken-Erkennung:** Automatische Markierung von Schülern die bei einer CE unter dem Mastery-Threshold (80%) liegen → Rot/Gelb/Grün-Ampelsystem
- **Klassen-Übersicht:** Aggregierter Fortschritt pro Klasse (Durchschnitt, Median, Verteilung) als Charts
- **Alert-System:** Push-/E-Mail-Benachrichtigung wenn ein Schüler >7 Tage inaktiv ist oder bei einer CE unter 50% fällt
- **Export:** CSV/PDF-Export der Lernfortschritte für Schulberichterstattung und Akkreditierung

**Technische Umsetzung:**
```
Route:          /dashboard/teacher
Auth-Role:      teacher | learning_companion
DB-Queries:     Supabase RLS — Lehrer sehen nur Schüler ihrer zugeordneten Klassen
Charts:         Recharts oder Chart.js (lightweight, SSR-kompatibel)
Echtzeit:       Supabase Realtime für Live-Updates (optional Phase 2)
```

### 7.2 Klassen-Management

**Zweck:** Pflegeschulen haben mehrere Jahrgänge und Klassen. Lernbegleiter müssen Klassen verwalten und Schüler zuordnen können.

**Funktionen:**
- **Klassen erstellen/archivieren:** Name, Jahrgang, Ausbildungsbeginn, zugeordnete Lernbegleiter
- **Mehrere Klassen pro Schule:** Schule hat z.B. "Kurs 2024A", "Kurs 2024B", "Kurs 2025A"
- **Lernbegleiter-Zuordnung:** 1 Lernbegleiter kann mehreren Klassen zugeordnet sein; 1 Klasse kann mehrere Lernbegleiter haben (n:m)
- **Schüler-Import:** CSV-Upload für Massenregistrierung (Name, E-Mail, Klasse) — wichtig für Schuljahresbeginn
- **Gruppen-Aufgaben:** Lernpakete an ganze Klassen zuweisen (z.B. "CE 04 bis Freitag bearbeiten")

**Technische Umsetzung:**
```
Route:          /dashboard/teacher/classes
Auth-Role:      teacher | school_admin
CSV-Import:     Papa Parse (Client-side) → Supabase Batch-Insert
Zuordnung:      teacher_assignments Junction-Table (teacher_id ↔ class_id)
```

### 7.3 School-Admin-View

**Zweck:** Schulleitung braucht eine Management-Übersicht ohne ins Detail der Einzelschüler zu gehen. Entscheidend für den Einkaufsentscheid und die jährliche Vertragsverlängerung.

**Funktionen:**
- **Lizenz-Verwaltung:** Anzahl aktiver Lizenzen vs. gekaufte Lizenzen, Ablaufdatum, Verlängerungsstatus
- **Nutzungsstatistiken:** MAU, DAU, durchschnittliche Lernzeit/Schüler/Woche, aktive vs. inaktive Schüler
- **Gesamt-Lernstand:** Aggregierter CE-Fortschritt aller Klassen der Schule (Heatmap: welche CEs sind schulweit schwach?)
- **ROI-Dashboard:** "Ihre Schüler haben X Stunden auf der Plattform gelernt — das entspricht Y Dozentenstunden Entlastung"
- **Lehrer-Verwaltung:** Lernbegleiter anlegen/deaktivieren, Klassen-Zuordnungen verwalten

**Technische Umsetzung:**
```
Route:          /dashboard/admin
Auth-Role:      school_admin
DB-Queries:     Aggregations über alle Klassen der Schule (Supabase Views/Functions)
ROI-Berechnung: Server-side, basierend auf Lernzeit × Dozentenkostenäquivalent
```

### 7.4 Schüler-Gruppen-Feature (Lernpakete)

**Zweck:** Lernbegleiter müssen gezielt Aufgaben an Klassen oder Gruppen vergeben können — Kernstück des Inverted-Classroom-Modells.

**Funktionen:**
- **Lernpaket erstellen:** CEs/Module/Quiz auswählen → Deadline setzen → Klasse(n) zuweisen
- **Beispiel:** "CE 04: Gesundheit fördern — bis Freitag 18:00 bearbeiten"
- **Fortschritts-Tracking pro Lernpaket:** Welcher Schüler hat's erledigt, wer nicht?
- **Reminder:** Automatische Erinnerung 24h vor Deadline an Schüler die noch nicht fertig sind
- **Ergebnis-Übersicht:** Nach Deadline: Klassen-Ergebnis als Report (Durchschnitt, Verteilung, Problemstellen)

**Technische Umsetzung:**
```
Route:          /dashboard/teacher/packages
DB-Tabelle:     learning_packages (id, title, ce_ids[], deadline, class_id, created_by)
                learning_package_progress (package_id, student_id, status, completed_at)
Cron:           Supabase Edge Function für Deadline-Reminder (täglicher Check)
```

### 7.5 AVV-Onboarding-Prozess für B2B

**Zweck:** Schulen dürfen die Plattform erst produktiv nutzen, wenn ein Auftragsverarbeitungsvertrag (AVV) unterzeichnet ist (DSGVO Art. 28). Der Prozess muss digital und reibungslos sein.

**Prozess:**
1. Schulleitung registriert sich auf `/onboarding/school`
2. System generiert AVV-PDF (Vorlage mit vorausgefüllten Daten: Schulname, Ansprechpartner)
3. Digitale Signatur via DocuSign/SignWell ODER: PDF-Download → Unterschrift → Upload
4. Nach AVV-Bestätigung: School-Admin-Account wird freigeschaltet
5. Admin lädt Lernbegleiter ein → Lernbegleiter laden Schüler ein (oder CSV-Import)

**Technische Umsetzung:**
```
Signatur:       SignWell API ($24/Mo, DSGVO-konform, EU-Server)
                ODER: Einfacher PDF-Upload (kostenlos, manuell prüfen)
Workflow:       Supabase Edge Function → Status-Machine (pending → signed → active)
Templates:      AVV-Mustervorlage als MDX/HTML → PDF-Generierung (react-pdf)
```

**Kosten:** SignWell: $24/Monat (optional, erst ab 5+ Schulen sinnvoll). Alternative: manueller PDF-Prozess = $0.

### 7.6 SSO / LTI-Integration (Future Feature — Phase 2/3)

**Status:** Nicht für MVP nötig, aber wichtig für Enterprise-Schulen und Landeslizenzen.

- **SSO (Single Sign-On):** SAML 2.0 / OpenID Connect — Schulen mit eigenem Active Directory können Schüler automatisch authentifizieren. Supabase unterstützt SAML seit Pro Plan.
- **LTI (Learning Tools Interoperability):** LTI 1.3 Standard — Integration in bestehende Schul-LMS (Moodle, ILIAS). Pflegias hat LTI bereits; eigene Plattform sollte das bis Phase 3 auch bieten.
- **Schüler-Sync:** Automatischer Import/Deaktivierung von Schülern über Schulverwaltungssoftware-API (z.B. ASV Bayern, SchILD NRW) — langfristiges Feature.

**Zeitplan:** SSO ab ~20 Schulen relevant (Schule fragt aktiv danach), LTI ab ~50 Schulen oder Landeslizenz-Verhandlung.

---

### 7.7 Erweitertes DB-Schema für B2B

Das ursprüngliche Schema (Schüler, CE-Fortschritt, Quiz-Antworten) muss um folgende Tabellen erweitert werden:

```sql
-- ============================================
-- B2B-Schema-Erweiterung (Pivot 2026-03-16)
-- ============================================

-- Schulen
CREATE TABLE schools (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,                    -- "Pflegeschule Bethel Bielefeld"
  address       TEXT,
  city          TEXT,
  state         TEXT,                             -- Bundesland (wichtig für Landeslizenz)
  contact_name  TEXT NOT NULL,                    -- Ansprechpartner Schulleitung
  contact_email TEXT NOT NULL,
  license_type  TEXT DEFAULT 'trial',             -- trial | basic | premium
  license_start DATE,
  license_end   DATE,
  max_students  INTEGER DEFAULT 100,              -- Lizenzierte Schüleranzahl
  avv_signed    BOOLEAN DEFAULT FALSE,            -- AVV unterzeichnet?
  avv_signed_at TIMESTAMP,
  created_at    TIMESTAMP DEFAULT now(),
  updated_at    TIMESTAMP DEFAULT now()
);

-- Klassen
CREATE TABLE classes (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id     UUID REFERENCES schools(id) ON DELETE CASCADE,
  name          TEXT NOT NULL,                    -- "Kurs 2025A"
  cohort_year   INTEGER,                          -- Ausbildungsbeginn-Jahr
  start_date    DATE,
  status        TEXT DEFAULT 'active',            -- active | archived
  created_at    TIMESTAMP DEFAULT now()
);

-- Lehrer/Lernbegleiter-Zuordnung zu Klassen (n:m)
CREATE TABLE teacher_assignments (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id    UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  class_id      UUID REFERENCES classes(id) ON DELETE CASCADE,
  role          TEXT DEFAULT 'learning_companion', -- learning_companion | lead_teacher
  assigned_at   TIMESTAMP DEFAULT now(),
  UNIQUE(teacher_id, class_id)
);

-- Schüler-Klassen-Zuordnung
CREATE TABLE student_enrollments (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id    UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  class_id      UUID REFERENCES classes(id) ON DELETE CASCADE,
  enrolled_at   TIMESTAMP DEFAULT now(),
  status        TEXT DEFAULT 'active',            -- active | paused | graduated | dropped
  UNIQUE(student_id, class_id)
);

-- Lernpakete (Gruppen-Aufgaben)
CREATE TABLE learning_packages (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT NOT NULL,                    -- "CE 04 bis Freitag"
  description   TEXT,
  class_id      UUID REFERENCES classes(id) ON DELETE CASCADE,
  created_by    UUID REFERENCES auth.users(id),   -- Lernbegleiter
  ce_ids        TEXT[] NOT NULL,                  -- Array von CE-IDs
  module_ids    TEXT[],                           -- Optional: spezifische Module
  quiz_ids      TEXT[],                           -- Optional: spezifische Quizze
  deadline      TIMESTAMP NOT NULL,
  reminder_sent BOOLEAN DEFAULT FALSE,
  created_at    TIMESTAMP DEFAULT now()
);

-- Fortschritt pro Lernpaket pro Schüler
CREATE TABLE learning_package_progress (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  package_id    UUID REFERENCES learning_packages(id) ON DELETE CASCADE,
  student_id    UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  status        TEXT DEFAULT 'assigned',          -- assigned | in_progress | completed | overdue
  progress_pct  INTEGER DEFAULT 0,                -- 0-100
  completed_at  TIMESTAMP,
  UNIQUE(package_id, student_id)
);

-- Nutzerrollen erweitern (in auth.users Metadata oder eigene Tabelle)
CREATE TABLE user_roles (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  school_id     UUID REFERENCES schools(id),
  role          TEXT NOT NULL,                    -- student | teacher | school_admin | platform_admin
  UNIQUE(user_id, school_id, role)
);

-- RLS-Policies (Beispiele)
-- Lehrer sehen nur Schüler ihrer Klassen:
-- CREATE POLICY "teacher_sees_own_students" ON student_enrollments
--   FOR SELECT USING (
--     class_id IN (
--       SELECT class_id FROM teacher_assignments WHERE teacher_id = auth.uid()
--     )
--   );

-- School-Admin sieht alles seiner Schule:
-- CREATE POLICY "admin_sees_school" ON classes
--   FOR SELECT USING (
--     school_id IN (
--       SELECT school_id FROM user_roles WHERE user_id = auth.uid() AND role = 'school_admin'
--     )
--   );
```

**Schema-Diagramm (Relationen):**
```
schools (1) ──→ (n) classes
classes (1) ──→ (n) student_enrollments ←── (1) auth.users (Schüler)
classes (1) ──→ (n) teacher_assignments ←── (1) auth.users (Lehrer)
classes (1) ──→ (n) learning_packages
learning_packages (1) ──→ (n) learning_package_progress ←── (1) auth.users (Schüler)
schools (1) ──→ (n) user_roles ←── (1) auth.users
```

---

### 16-Wochen-Timeline: Stundenschaetzung fuer Solo-Dev (B2B-Pivot-Update)

> **PIVOT-UPDATE (2026-03-16):** Die ursprüngliche 12-Wochen-Timeline war für ein B2C-MVP kalkuliert. Der B2B-Pivot erfordert +4 Wochen für Lehrer-Dashboard, Klassen-Management, School-Admin-View und AVV-Onboarding. Neue Gesamtdauer: **16 Wochen**.

**Basis-Annahmen:**
- Solo-Entwicklerin, kompetent in Next.js + TypeScript + Supabase
- Kein Lernen der Grundlagen noetig (Erfahrung vorhanden)
- Content-Erstellung (Lerntexte, Quizfragen) ist NICHT Entwicklungsaufgabe — liegt bei Lehrerin
- Arbeitszeit: Vollzeit 40 Std/Woche ODER 20-25 Std/Woche (Teilzeit/Nebenberuf) = dann 32 statt 16 Wochen

| Sprint | Dauer | Stunden-Schätzung | Hauptaufgaben |
|--------|-------|-------------------|---------------|
| Sprint 1: Technisches Fundament + B2B-Schema | Woche 1–2 | 70–90 Std | Next.js Setup, Supabase Auth, **erweitertes DB-Schema (schools, classes, teacher_assignments, learning_packages)**, Vercel Deploy, next-intl Basis, Rollen-System (student/teacher/school_admin) |
| Sprint 2: CE-Struktur + erste Inhalte | Woche 3–4 | 70–90 Std | CE-Übersichtsseite, CE 01 vollstaendig, Glossar-Grundstruktur 50 Eintraege |
| Sprint 3: Adaptivitaet + Kernfunktionen | Woche 5–7 | 90–120 Std | Spaced-Repetition-Algorithmus, Mastery-Threshold, CE 02 vollstaendig, B1-Modus |
| Sprint 4: **Lehrer-Dashboard + Klassen-Management (NEU)** | Woche 8–9 | 80–100 Std | **Lehrer-Dashboard (Schüler-Fortschritt, CE-Lücken-Erkennung, Ampelsystem), Klassen-Verwaltung (erstellen/archivieren), Schüler-CSV-Import, Lernbegleiter-Zuordnung** |
| Sprint 5: **School-Admin + Lernpakete (NEU)** | Woche 10–11 | 70–90 Std | **School-Admin-View (Lizenz-Verwaltung, Nutzungsstatistiken, ROI-Dashboard), Lernpakete/Gruppen-Aufgaben, Deadline-Reminder** |
| Sprint 6: Monetarisierung + DSGVO | Woche 12–13 | 80–100 Std | Stripe-Integration (B2B-Rechnungen + B2C-Abo), **AVV-Onboarding-Prozess**, CE 05 + CE 06, DSGVO-Checkliste |
| Sprint 7: Polish + Launch | Woche 14–16 | 70–90 Std | Onboarding-Flow (Schule + Schüler), PWA offline, WCAG-AA-Check, Performance-Optimierung, **Pilotschule-Feedback-Einarbeitung** |
| **Gesamt** | **16 Wochen** | **530–680 Std** | **Durchschnitt: 33–43 Std/Woche** |

**Vergleich: Alt (12 Wochen B2C) vs. Neu (16 Wochen B2B):**

| Aspekt | 12 Wochen (alt, B2C) | 16 Wochen (neu, B2B) | Delta |
|--------|---------------------|---------------------|-------|
| Gesamt-Stunden | 360–470 Std | 530–680 Std | +170–210 Std |
| Neue Features | — | Lehrer-Dashboard, Klassen-Mgmt, School-Admin, Lernpakete, AVV-Flow | +4 Wochen |
| DB-Komplexität | 5 Tabellen | 11 Tabellen | +6 Tabellen |
| Auth-Rollen | 1 (student) | 4 (student, teacher, school_admin, platform_admin) | +3 Rollen |
| Risiko-Level | Mittel | Mittel-Hoch | Mehr Oberflächen zu testen |

**Realisierbarkeits-Einordnung:**
- 530–680 Stunden bei Vollzeit (40 Std/Woche) = **realistisch in 16 Wochen**, mit schmalem Puffer
- Professionelle Agenturen (2 Entwickler, Next.js + Supabase) liefern vergleichbare B2B-SaaS-MVPs in 6–8 Wochen (ca. 480–640 Stunden Team-total) — Quelle: MetaDesign Solutions, SlakeDesign, ApexWebMasters (2025)
- Kritisches Risiko 1: Sprint 3 (Adaptivitaet) bleibt komplex — Spaced-Repetition-Logik und adaptive Pfade koennen leicht 20–40% laenger dauern als geschaetzt
- Kritisches Risiko 2: **Sprint 4+5 (B2B-Dashboards)** — Lehrer-Dashboard mit Echtzeit-Fortschritt und CE-Lücken-Erkennung ist visuell und technisch anspruchsvoll. Empfehlung: MVP des Dashboards (Tabelle + Ampel) erst bauen, Charts/Reports in Phase 2
- Puffer einplanen: 16 Wochen sind als anspruchsvolle aber machbare Timeline zu sehen; realistischere Planung mit Puffer = **18–20 Wochen**
- **Empfehlung:** Sprint 4+5 (B2B-Features) NICHT skippen — ohne Lehrer-Dashboard und Klassen-Management kauft keine Schule. Das ist der Kernwert des B2B-Produkts.

**Quellen:**
- MetaDesign Solutions: "Launch SaaS MVP in 6 weeks with Supabase" — https://metadesignsolutions.com/launch-your-saas-mvp-in-6-weeks-with-supabase-backend/
- ShipAi: "MVP Launch Strategy 2025: Next.js, Vercel & Supabase" — https://www.shipai.dev/blog/mvp-launch-strategy-nextjs-vercel-supabase
- Supastarter: "developers saved 7+ months on their estimates using boilerplates" — https://supastarter.dev/

---

### Hauptrisiken

1. **DSGVO-Risiko Vercel:** Edge-Netzwerk verarbeitet Anfragen in USA — AVV + SCCs unterzeichnen, keine sensiblen Daten in URLs/Logs
2. **Supabase Free Auto-Pause:** Sofort auf Pro für Schulbetrieb — kein Bildungsanbieter toleriert Plattform-Ausfälle
3. **Skalierung MAU:** Bei > 50.000 MAU Supabase Team: $599/Monat — früh kalkulieren, Schulen entsprechend bepreisen
4. **Minderjährige Schüler:** Besondere DSGVO-Anforderungen — Rechtsberatung vor erstem Vertrag empfohlen
5. **B2B-Dashboard-Komplexität (NEU):** Lehrer-Dashboard mit Echtzeit-Lernfortschritt, CE-Lücken-Erkennung und Klassen-Management ist Feature-intensiv. Risiko: Scope-Creep durch Schulen-Feedback ("wir brauchen noch X"). Mitigation: MVP-Dashboard (Tabelle + Ampel) erst, Charts/Reports Phase 2.
6. **AVV-Prozess als Verkaufsbremse (NEU):** Schulen haben langsame Verwaltungsprozesse. AVV-Unterzeichnung kann 2–8 Wochen dauern. Mitigation: AVV-Vorlage standardisieren, digitale Signatur anbieten, Testphase ohne echte Schülerdaten ermöglichen.
7. **B2B-Rollen/RLS-Komplexität (NEU):** 4 Auth-Rollen (student/teacher/school_admin/platform_admin) mit Supabase RLS = viele Policies. Risiko: Sicherheitslücke bei falscher Policy. Mitigation: RLS-Policies automatisiert testen (pgTAP oder Supabase Test Helpers).

---

*Recherche-Quellen: Vercel Docs, Supabase Docs, KontoCSV DSGVO-Guide, Supadex Comparison 2025, next-intl Docs, Exa.ai Pricing, Hetzner Cloud Pricing*
*Alle Preisangaben: Stand März 2026. Regelmäßig auf Änderungen prüfen.*

---

## Nebius AI als LLM-Provider

**Recherche-Datum:** 2026-03-16
**Detaillierte Analyse:** `NEBIUS_RECHERCHE.md` (selbes Verzeichnis)
**Empfehlung:** BEDINGT JA — bester Preis-DSGVO-Kompromiss unter allen AI-Providern

---

### Was ist Nebius?

Nebius Group N.V. ist ein **niederländisches Unternehmen** (Amsterdam, NASDAQ: NBIS), das 2024 aus der internationalen Restrukturierung von Yandex entstand. Nebius betreibt eigene GPU-Rechenzentren in der EU (Finnland, Frankreich) und bietet über **Nebius AI Studio** Inference-as-a-Service für 60+ Open-Source-Modelle an. NVIDIA hat $2 Mrd. investiert.

---

### Preisvergleich: Input + Output pro 1 Million Tokens (Stand März 2026)

| Provider / Modell | Input $/1M | Output $/1M | Verhältnis zu Nebius 70B |
|---|---|---|---|
| **Nebius Llama 3.1 8B Base** | $0,02 | $0,06 | — |
| **Nebius Llama 3.3 70B Base** | $0,13 | $0,40 | Basis (1x) |
| **Nebius Llama 3.3 70B Batch** | $0,065 | $0,20 | 0,5x (Hälfte) |
| **Nebius DeepSeek V3 Base** | $0,50 | $1,50 | ~4x teurer |
| **Nebius Llama 3.1 405B Base** | $1,00 | $3,00 | ~7x teurer |
| OpenAI GPT-5 Nano | $0,05 | $0,40 | ähnlich Input, teurer Output |
| OpenAI GPT-5.2 | $1,75 | $14,00 | 13x–35x teurer |
| Google Gemini 3 Flash | $0,50 | $3,00 | 4x–7,5x teurer |
| Anthropic Claude Haiku 4.5 | $1,00 | $5,00 | 8x–12x teurer |
| Anthropic Claude Opus 4.6 | $5,00 | $25,00 | 38x–62x teurer |
| xAI Grok 4 | $3,00 | $15,00 | 23x–37x teurer |
| DeepSeek V3.2 (direkt) | $0,28 | $0,42 | 2x–1x (vergleichbar) |

**Ergebnis:** Nebius Llama 3.3 70B ist beim Output-Token-Preis **12x günstiger** als Claude Haiku und **62x günstiger** als Claude Opus. Für Routine-Lernaufgaben ist 70B qualitativ ausreichend.

---

### Kosten-Hochrechnung für die Pflege-Plattform

**Annahmen:** 20 AI-Anfragen/Session, 1.300 Tokens/Anfrage, 15 Sessions/Schüler/Monat
**Modell:** Llama 3.3 70B Base (~$0,29 gemischter Preis pro 1M Tokens)

| Schüler (aktiv) | Tokens/Monat | Nebius Kosten | Anteil bei €199/Schule (5 Schulen) |
|---|---|---|---|
| 100 Schüler | 39 Mio. | ~$11/Monat | < 1% der Einnahmen |
| 500 Schüler | 195 Mio. | ~$57/Monat | ~6% der Einnahmen |
| 2.000 Schüler | 780 Mio. | ~$226/Monat | — |
| **Mit Batch-Modus** (asynchrone Aufgaben): | | **ca. Hälfte** | — |

---

### DSGVO-Status

| Aspekt | Bewertung |
|---|---|
| Unternehmensrecht | EU (Niederlande, N.V.) — direkt DSGVO-unterworfen |
| Server-Standorte EU | Finnland (eu-north1), Frankreich (eu-west1) |
| ISO/IEC 27799 | Vorhanden — Informationssicherheit im Gesundheitswesen |
| SOC 2 Type II | Vorhanden |
| ISO 27001/27701 | Vorhanden |
| DPA | Custom DPA für Enterprise-Kunden verfügbar |
| Zero-Retention Inference | Für Enterprise: keine Datenspeicherung bei Inference |
| Vergleich zu OpenAI/Anthropic | **Besser** — US-Unternehmen mit primär US-Infrastruktur |

---

### Verfügbare Modelle (Auswahl, relevant für Pflege)

- **Llama 3.3 70B** — Allround, Erklärungen, Quiz, Feedback (empfohlen für Standard)
- **Llama 3.1 405B** — Komplexe Prüfungsvorbereitung, Lernpfad-Planung
- **DeepSeek R1** — Reasoning, Schritt-für-Schritt-Erklärungen
- **QwQ-32B** — Reasoning, komplexe Fragen
- **Qwen 2.5 72B** — Mehrsprachig stark (Arabisch, Türkisch, Russisch)
- **Gemma 3 27B** — 128K Kontext, lange Dokumente (Pflegeleitlinien)
- **Embedding-Modelle** — Semantische Suche in Lernmaterialien (RAG)

---

### Risiken (Zusammenfassung)

| Risiko | Level | Mitigation |
|---|---|---|
| Yandex-Herkunft / Reputationsrisiko bei Schulen | MITTEL | Zertifizierungen in den Vordergrund stellen |
| Vendor Lock-in | NIEDRIG | OpenAI-kompatible API, LiteLLM, Open-Source-Modelle |
| Startup-Stabilität | MITTEL | NVIDIA $2 Mrd. Investment, NASDAQ-gelistet |
| Modell-Qualität vs. GPT-5/Claude | NIEDRIG-MITTEL | 70B ausreichend für Pflege-Routine-Tasks |
| Schülerdaten in Prompts | MITTEL | Prompts anonymisieren — keine Namen/IDs via API |

---

### Implementierungs-Empfehlung

```
Phase 1 (MVP):       Nebius Llama 3.3 70B Fast für Echtzeit-Erklärungen
Phase 1 (Batch):     Nebius Llama 3.3 70B Batch für Quiz-Generierung (50% Rabatt)
Phase 2 (Mehrsprachig): Qwen 2.5 72B für AR/TR/RU Übersetzungen
Phase 2 (Premium):   DeepSeek R1 Base für komplexe Prüfungssimulationen
Abstraktionsschicht: LiteLLM (kein Provider Lock-in)
Datenschutz:         Nur anonymisierte Prompts, EU-Region, Custom DPA
```

**Fazit:** Nebius ist der empfohlene primäre LLM-Provider für die Pflege-Lernplattform — EU-konform, 7–60x günstiger als Anthropic/OpenAI, OpenAI-API-kompatibel, mit ISO 27799 (Gesundheitswesen) zertifiziert.

*Quellen: Nebius Token Factory Pricing, Nebius Trust Center, Artificial Analysis, IntuitionLabs LLM Pricing Comparison 2025*
