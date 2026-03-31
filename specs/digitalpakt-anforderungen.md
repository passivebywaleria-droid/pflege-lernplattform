# Digitalpakt 2.0 — Anforderungen an die Plattform

> Erstellt: 2026-03-28
> Zweck: Sicherstellen, dass die Plattform über den Digitalpakt 2.0 finanzierbar ist
> Quellen: BMBFSFJ, KMK, Länder-Förderrichtlinien, Verwaltungsvereinbarung

---

## Kontext

- **Digitalpakt 2.0**: 5 Mrd. EUR, 2026-2030, Bund + Länder je 50%
- **Pflegeschulen sind förderfähig** (PflBG-Schulen, auch private Träger)
- **NEU in 2.0**: Lernsoftware, Bildungsmedien und KI-Lernsysteme erstmals förderfähig
- **Rückwirkend ab 01.01.2025** abrechenbar
- **Antragsteller**: Schulträger (nicht wir) — wir liefern Software + Nachweise

---

## Harte Anforderungen (MUSS)

### 1. DSGVO-Konformität

| Anforderung | Umsetzung | Status |
|---|---|---|
| Server in Deutschland/EU | Hetzner Cloud DE | ✅ Geplant (Sprint 10) |
| Keine externen Tracker | Kein GA, kein FB Pixel | ✅ Umgesetzt |
| Datensparsamkeit | Nur lernrelevante Daten | ✅ Architektur |
| Löschrecht (Art. 17) | Account + Daten löschbar | ⚠️ UI fehlt noch |
| Auftragsverarbeitung (Art. 28) | AVV-Vorlage für Schulen | ❌ Fehlt |
| Datenschutzfolgenabschätzung | DSFA-Dokument | ❌ Fehlt |
| Verarbeitungsverzeichnis (VVT) | Technisches Dokument | ❌ Fehlt (Sprint 10) |
| Technisch-org. Maßnahmen (TOM) | Sicherheitskonzept | ❌ Fehlt (Sprint 10) |

### 2. Jugendschutz / Minderjährige

| Anforderung | Umsetzung | Status |
|---|---|---|
| Einwilligung unter 16 (Art. 8) | Eltern-Consent-Flow | ❌ Fehlt |
| Geschlossenes System | Keine externen Inhalte, kein Chat zwischen Schülern | ✅ Architektur |
| Altersverifikation | Geburtsdatum bei Registrierung | ❌ Fehlt |

### 3. KB-Stundennachweis (Killer-Feature für Schulen)

> **Warum kritisch:** Schulen müssen gegenüber der Landesbehörde nachweisen, wie viele Stunden pro Kompetenzbereich (KB I-V) ein Schüler gelernt hat. Ohne diesen Nachweis wird Lernzeit auf der Plattform NICHT als Theorieunterricht anerkannt.

| Anforderung | Umsetzung | Status |
|---|---|---|
| Aktive Lernzeit messen (nicht nur eingeloggt) | Event-basiertes Tracking | ❌ Sprint 9 |
| Zuordnung Step → LE → KB | LE→KB Mapping in `curriculum-55-le-struktur.md` | ✅ Mapping existiert |
| Aggregation pro KB (I.1 - V.2) | Dashboard + API | ❌ Sprint 9 |
| PDF-Export pro Schüler | A4, Schulname, KB-Stunden, Anlage 1/2 | ❌ Sprint 9 |
| PDF-Export pro Klasse | Übersicht für Schulleitung | ❌ Sprint 9 |
| Anlage 1 vs. Anlage 2 getrennt | Drittel 1+2 vs. Drittel 3 | ❌ Sprint 9 |

### 4. Inhaltsqualität

| Anforderung | Umsetzung | Status |
|---|---|---|
| Fachliche Korrektheit | Dozentin als Reviewerin, I Care als Primärquelle | ✅ Pipeline |
| Pädagogisches Konzept | Bloom-Taxonomie, Zwei-Achsen-Adaptivität | ✅ Umgesetzt |
| Lehrplan-Konformität | 55 LEs, 11 CEs, PflAPrV-Kompetenzbereiche | ✅ Struktur |
| KI-Kennzeichnung | "Von KI generiert" Label | ❌ Sprint 4 |

---

## Weiche Anforderungen (SOLL)

### 5. Interoperabilität

| Anforderung | Umsetzung | Status |
|---|---|---|
| Datenexport (CSV/JSON) | Lernfortschritt exportierbar | ❌ Offen |
| LMS-Anbindung (LTI/SCORM) | Moodle, LOGINEO etc. | ❌ V2.0 |
| Single Sign-On (SAML/OIDC) | Schul-Login-Systeme | ❌ V2.0 |

### 6. Barrierefreiheit (BITV 2.0)

| Anforderung | Umsetzung | Status |
|---|---|---|
| WCAG 2.1 Level AA | Grundlegend durch shadcn/ui | ⚠️ Nicht getestet |
| Screenreader-kompatibel | aria-Labels | ⚠️ Teilweise |
| Tastatur-Navigation | Focus-Management | ⚠️ Teilweise |
| Kontrast-Verhältnis 4.5:1 | Design-System | ⚠️ Nicht geprüft |
| Vorlesefunktion | TTS integriert | ✅ Umgesetzt |

### 7. KI-Transparenz

| Anforderung | Umsetzung | Status |
|---|---|---|
| KI-generierte Inhalte kennzeichnen | Label-Komponente | ❌ Sprint 4 |
| KI-Anfragen anonymisiert | Kein Name, keine User-ID an Nebius | ✅ Architektur |
| Kein autonomes Profiling | KI empfiehlt, Schüler entscheidet | ✅ Architektur |

---

## Digitalpakt-Datenblatt (für Schulen)

Schulen brauchen ein Dokument, das sie ihrem Förderantrag beilegen können:

### Inhalte des Datenblatts

1. **Produktbeschreibung**: Adaptive Lernplattform für generalistische Pflegeausbildung
2. **Pädagogisches Konzept**: Zwei-Achsen-Adaptivität, Bloom-Taxonomie, KI-Didaktik
3. **Lehrplan-Abdeckung**: 55 LEs, 11 CEs, alle 5 Kompetenzbereiche (PflAPrV)
4. **DSGVO-Konformität**:
   - Server: Hetzner Cloud, Frankfurt am Main
   - Keine externen Tracker
   - AVV bereitgestellt
   - DSFA durchgeführt
   - Löschrecht implementiert
5. **Technische Eckdaten**:
   - PWA (kein App-Store)
   - Offline-fähig
   - Responsive (Smartphone, Tablet, Desktop)
6. **Lernzeit-Dokumentation**:
   - Aktive Lernzeit pro KB I-V
   - PDF-Export für Landesbehörde
   - Anlage 1 + 2 getrennt ausweisbar
7. **Preismodell**: Schullizenz 149 EUR/Schüler/Jahr
8. **Support**: E-Mail + In-App

### Status: ❌ Noch nicht erstellt (Sprint 10)

---

## Zeitplan: Was wann fertig sein muss

| Sprint | Digitalpakt-relevante Deliverables |
|---|---|
| Sprint 0 | Landing Page mit DSGVO-Badge + Preisen |
| Sprint 1 | DB-Schema mit KB-Zuordnung pro LE |
| Sprint 2 | Lehrer-Dashboard (Schulen brauchen Kontrolle) |
| Sprint 4 | KI-Kennzeichnung |
| Sprint 9 | **KB-Stundennachweis + PDF-Export** (Killer-Feature) |
| Sprint 10 | DSGVO-Paket (AVV, DSFA, TOM, VVT) + Digitalpakt-Datenblatt |

---

## Risiken

| Risiko | Impact | Gegenmaßnahme |
|---|---|---|
| Länder-Förderrichtlinien noch nicht final | Kriterien können variieren | Auf Bundes-VV aufbauen, flexibel bleiben |
| educheck digital (Prüfverfahren der Länder) | Zertifizierung könnte Pflicht werden | Beobachten, Kontakt zu KMK |
| BITV 2.0 Barrierefreiheit | Könnte ab 2025 Pflicht für Bildungssoftware sein | A11y-Audit in Sprint 10 einplanen |
| AVV-Anforderungen pro Bundesland | Jedes Land will eigene AVV | Standard-AVV erstellen, anpassbar |

---

## Quellen

- [BMBFSFJ: Digitalpakt 2.0](https://www.digitalpaktschule.de/de/digitalpakt-2-0-1874.html)
- [Deutsches Schulportal: Digitalpakt 2.0](https://deutsches-schulportal.de/bildungswesen/was-hat-der-digitalpakt-schule-bislang-gebracht/)
- [Niedersachsen: Förderung der Pflegeschulen](https://digitaleschule.niedersachsen.de/startseite/zielgruppen/pflegeschulen/forderung-der-pflegeschulen-178815.html)
- [NRW: Digitalpakt 2.0 kommt](https://www.schulministerium.nrw/presse/pressemitteilungen/digitalpakt-20-kommt-18-12-2025)
- [Cornelsen: Förderfähige Bildungsmedien](https://www.cornelsen.de/empfehlungen/digitalpakt)
- [BIBB: DibAP — Digitalisierung Pflegeschulen](https://www.bibb.de/de/153557.php)
