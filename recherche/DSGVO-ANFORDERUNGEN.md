# DSGVO-Anforderungen: Digitale Lernplattform fuer Pflegeschulen (NRW)

**Stand:** 2026-03-16
**Kontext:** B2B-SaaS-Lernplattform fuer generalistische Pflegeausbildung (PflBG 2020)
**Hauptmarkt:** NRW, perspektivisch alle ~1.500 Pflegeschulen DE

---

## 1. Erforderliche DSGVO-Dokumente fuer den Schulverkauf

### 1.1 AVV (Auftragsverarbeitungsvertrag) — PFLICHT

**Rechtsgrundlage:** Art. 28 DSGVO

Die Schule/der Traeger ist **Verantwortlicher**, wir als Plattform-Anbieter sind **Auftragsverarbeiter**. Ohne AVV darf keine Schule unsere Plattform nutzen.

**Pflichtinhalte nach Art. 28 Abs. 3 DSGVO:**
- Gegenstand und Dauer der Verarbeitung
- Art und Zweck der Verarbeitung
- Art der personenbezogenen Daten (konkret auflisten: Name, E-Mail, Lernfortschritt, Quiz-Ergebnisse etc.)
- Kategorien betroffener Personen (Schueler, Lehrkraefte)
- Pflichten und Rechte des Verantwortlichen (Schule)
- Weisungsgebundenheit des Auftragsverarbeiters
- Vertraulichkeitsverpflichtung der Mitarbeiter
- Technisch-organisatorische Massnahmen (TOM) als Anlage
- Regelung zu Unterauftragsverarbeitern (z.B. Hosting-Provider)
- Unterstuetzung bei Betroffenenrechten (Auskunft, Loeschung etc.)
- Loeschung/Rueckgabe der Daten nach Vertragsende
- Kontrollrechte des Auftraggebers (Schule)
- Informationspflicht bei Datenschutzverletzungen

**Wichtig:**
- Die **Schulleitung** muss den AVV persoenlich abschliessen (nicht einzelne Lehrkraefte)
- Elektronischer Abschluss reicht (Art. 28 Abs. 9 DSGVO), muss aber dokumentiert sein
- Cornelsen bietet ein Referenz-AVV unter: https://www.cornelsen.de/service/kundenservice/rechtliche-hinweise/avv
- Es gibt ein von mehreren Aufsichtsbehoerden abgestimmtes Muster-AVV (Berliner Datenschutzbehoerde)

**Unterauftragsverarbeiter muessen gelistet werden:**
- Hosting-Provider (z.B. Hetzner)
- Datenbank-Provider (z.B. Supabase)
- E-Mail-Dienst (z.B. Resend/Postmark)
- Ggf. CDN, Analytics, Error-Tracking

### 1.2 TOM (Technisch-Organisatorische Massnahmen) — PFLICHT

**Rechtsgrundlage:** Art. 32 DSGVO

Die TOM werden als Anlage zum AVV beigefuegt. Konkret erforderlich:

**Technische Massnahmen:**
- Verschluesselung der Daten bei Uebertragung (TLS 1.2+)
- Verschluesselung der Daten bei Speicherung (AES-256)
- Zugriffskontrolle (Rollenbasiert: Admin, Lehrer, Schueler)
- Firewall und Netzwerksicherheit
- Automatische Backups mit Verschluesselung
- Logging und Monitoring (Zugriffsprotokolle)
- Pseudonymisierung wo moeglich
- Sichere Authentifizierung (starke Passwoerter, optional 2FA)
- Automatische Session-Timeouts
- Regelmaessige Sicherheitsupdates und Patches

**Organisatorische Massnahmen:**
- Abgestufte Benutzerrechte (Lehrkraefte vs. Schueler vs. Admin)
- Vertraulichkeitsverpflichtung aller Mitarbeiter
- Regelmaessige Datenschutz-Schulungen
- Verfahren zur Loeschung von Zugaengen ausgeschiedener Nutzer
- Incident-Response-Verfahren bei Datenschutzverletzungen
- Dokumentiertes Loeschkonzept
- Regelmaessige Ueberpruefung der Massnahmen

### 1.3 DSFA (Datenschutz-Folgenabschaetzung)

**Rechtsgrundlage:** Art. 35 DSGVO

**Wichtige Differenzierung:**
- Die **DSK (Datenschutzkonferenz)** sagt: Online-Lernplattformen haben "in aller Regel" ein hohes Risiko fuer Rechte und Freiheiten -> DSFA grundsaetzlich empfohlen
- **NRW-Sonderregelung:** Fuer die Verarbeitung von Schueler- und Lehrerdaten fuer schulische Zwecke besteht in NRW **in der Regel keine DSFA-Pflicht** (Ausnahmen moeglich)
- Da Pflegeschulen aber NICHT dem SchulG NRW unterliegen (siehe Abschnitt 3), greift diese Ausnahme moeglicherweise NICHT

**Empfehlung:** DSFA durchfuehren, weil:
1. DSK empfiehlt es generell fuer Lernplattformen
2. Pflegeschulen fallen nicht klar unter die NRW-Schulgesetz-Ausnahme
3. Eine DSFA zeigt Professionalitaet gegenueber Traegern/DSB
4. Spaeter bei Skalierung ohnehin noetig

**Inhalt einer DSFA:**
- Systematische Beschreibung der Verarbeitungsvorgaenge
- Bewertung der Notwendigkeit und Verhaeltnismaessigkeit
- Bewertung der Risiken fuer Rechte und Freiheiten der Betroffenen
- Abhilfemassnahmen (unsere TOM)

### 1.4 VVT (Verzeichnis von Verarbeitungstaetigkeiten) — PFLICHT

**Rechtsgrundlage:** Art. 30 DSGVO

Wir muessen als Auftragsverarbeiter ein VVT fuehren (Art. 30 Abs. 2).

**Pflichtinhalte:**
- Name und Kontaktdaten des Auftragsverarbeiters (wir) und jedes Verantwortlichen (Schulen)
- Kategorien der Verarbeitungen (Lernplattform-Betrieb, Nutzerverwaltung, Fortschrittstracking)
- Ggf. Uebermittlungen an Drittlaender
- Allgemeine Beschreibung der TOM
- Name und Kontaktdaten unseres DSB (falls bestellt)

### 1.5 Datenschutzerklaerung fuer die Plattform — PFLICHT

**Rechtsgrundlage:** Art. 13/14 DSGVO

Muss auf der Plattform oeffentlich zugaenglich sein. Inhalt:
- Wer sind wir (Verantwortlicher im Sinne der Plattform-Website)
- Welche Daten werden erhoben
- Rechtsgrundlagen der Verarbeitung
- Speicherdauer
- Empfaenger der Daten (Unterauftragsverarbeiter)
- Betroffenenrechte (Auskunft, Berichtigung, Loeschung, Einschraenkung, Datenportabilitaet, Widerspruch)
- Beschwerderecht bei Aufsichtsbehoerde
- Hinweis auf Cookies/Tracking (falls verwendet)

### 1.6 Einwilligungserklaerungen — IN DER REGEL NICHT ERFORDERLICH

**Wichtige Klarstellung:**
- Im Rahmen der **Auftragsverarbeitung** (AVV) brauchen wir **keine separate Einwilligung** der Schueler
- Die Rechtsgrundlage fuer die Datenverarbeitung liegt bei der **Schule als Verantwortlichem**
- Die Schule stuetzt sich auf: Vertragserfuellung (Art. 6 Abs. 1 lit. b), berechtigtes Interesse (Art. 6 Abs. 1 lit. f), oder ggf. gesetzliche Grundlage (Schulgesetz/PflBG)
- **Ausnahme:** Einwilligung noetig fuer optionale Funktionen ausserhalb des Lernzwecks (z.B. Marketing-E-Mails, Newsletter, optionales Tracking)

---

## 2. Welche Daten verarbeiten wir — Kategorisierung

### 2.1 Datenkategorien

| Kategorie | Daten | Rechtsgrundlage |
|-----------|-------|-----------------|
| Schueler-Stammdaten | Name, E-Mail, Kurs-Zuordnung | Art. 6 Abs. 1 lit. b/f |
| Lehrerdaten | Name, E-Mail, Klassen-Zuordnung | Art. 6 Abs. 1 lit. b/f |
| Lernfortschrittsdaten | Modulfortschritt, Zeitstempel, Abschlussquoten | Art. 6 Abs. 1 lit. b/f |
| Pruefungsdaten | Quiz-Ergebnisse, Noten, Bewertungen | Art. 6 Abs. 1 lit. b/f |
| Technische Daten | IP-Adresse, Browser, Login-Zeiten | Art. 6 Abs. 1 lit. f |
| Nutzungsdaten | Klickverhalten, Seitenaufrufe (nur aggregiert) | Art. 6 Abs. 1 lit. f |

### 2.2 Sind Lernfortschrittsdaten "besondere Kategorien" (Art. 9)?

**Kurze Antwort: In der Regel NEIN.**

**Begruendung:**
- Art. 9 DSGVO schuetzt: rassische/ethnische Herkunft, politische Meinungen, religioese Ueberzeugungen, Gewerkschaftszugehoerigkeit, genetische Daten, biometrische Daten, **Gesundheitsdaten**, Sexualleben
- Lernfortschrittsdaten (welches Modul abgeschlossen, Quiz-Score) sind **Bildungsdaten**, keine Gesundheitsdaten
- Sie beschreiben das **Lernverhalten**, nicht den **Gesundheitszustand** der Schueler

**ABER ACHTUNG — Grauzone bei Pflegeausbildung:**
- Wenn Quiz-Fragen sich auf **eigene Gesundheitserfahrungen** der Schueler beziehen -> potentiell Art. 9
- Wenn Freitextantworten gesundheitsbezogene Informationen ueber die Schueler selbst enthalten -> potentiell Art. 9
- Der **EuGH legt Art. 9 weit aus** (Urteil C-184/20): Auch Daten, aus denen sich indirekt besondere Kategorien ableiten lassen, koennen unter Art. 9 fallen

**Empfehlung:**
1. Keine Freitext-Felder fuer persoenliche Gesundheitserfahrungen
2. Quiz-Fragen nur auf Fachwissen bezogen, nicht auf persoenliche Situation
3. In der Datenschutzerklaerung und im AVV transparent machen, dass keine Gesundheitsdaten verarbeitet werden
4. Falls doch noetig: Art. 9 Abs. 2 lit. j (wissenschaftliche Forschung) oder lit. g (oeffentliches Interesse) als Grundlage pruefen

### 2.3 Sind Pflegeschueler-Daten automatisch Gesundheitsdaten?

**Nein.** Die Tatsache, dass jemand eine Pflegeausbildung macht, ist **keine Gesundheitsinformation** ueber diese Person. Es ist eine Berufsausbildungsinformation. Erst wenn Daten den Gesundheitszustand des Schuelers selbst betreffen, greift Art. 9.

---

## 3. NRW-spezifische Anforderungen

### 3.1 Landesdatenschutzgesetz NRW (DSG NRW)

**Ja, das DSG NRW gilt zusaetzlich zur DSGVO.**
- Insbesondere § 10 DSG NRW zu technischen und organisatorischen Massnahmen
- LOGINEO NRW verweist explizit auf: DSGVO + DSG NRW + VO-DV I + VO-DV II + ADV (IT-Dienste-Richtlinie)

### 3.2 Schulgesetz NRW §§ 120-122 — GILT NICHT DIREKT

**Wichtige Erkenntnis:** Das Schulgesetz NRW (SchulG) gilt fuer **oeffentliche Schulen und Ersatzschulen** nach NRW-Schulrecht. Pflegeschulen sind aber:
- Geregelt durch das **PflBG (Pflegeberufegesetz)** auf Bundesebene
- In NRW konkretisiert durch die **DVO-PflBG NRW** (Durchfuehrungsverordnung)
- Sie sind **keine Schulen im Sinne des SchulG NRW** (es sei denn, die Pflegeausbildung findet an einem Berufskolleg statt)

**Konsequenzen:**
- Die speziellen Datenschutzregelungen des SchulG NRW (§§ 120-122) greifen **nicht automatisch**
- Die VO-DV I (Verordnung ueber Datenfuerdie Schueler) gilt nicht direkt
- Stattdessen gilt: DSGVO + DSG NRW + PflBG + DVO-PflBG NRW
- Allerdings orientieren sich viele Traeger trotzdem am Schulgesetz als **Best Practice**

### 3.3 LDI NRW (Landesbeauftragte fuer Datenschutz und Informationsfreiheit)

**Relevante Handreichungen:**
- "Digitaler Unterricht in Schulen - Der Grundstein ist gelegt" (LDI NRW)
- "Pandemie und Schule - Datenschutz mit Augenmass" (LDI NRW, 2021)
- Handreichung "Datenschutz an Schulen" (Bildungsportal NRW / Medienberatung NRW)
- Online unter: https://www.ldi.nrw.de/datenschutz/bildung

**Obwohl diese fuer allgemeinbildende Schulen gedacht sind, nutzen Pflegeschultraeger sie als Orientierung.**

### 3.4 LOGINEO NRW als Referenz-Standard

LOGINEO NRW setzt folgende Datenschutz-Standards, die als Benchmark dienen:
- Hosting in Deutschland / EU
- Verschluesselung bei Uebertragung und Speicherung
- Ende-zu-Ende-Verschluesselung (beim Messenger)
- Konformitaet mit DSGVO, DSG NRW, VO-DV I, VO-DV II
- Regelmaessige Sicherheitsupdates
- Keine Datenverarbeitung durch US-Firmen

**Empfehlung:** LOGINEO-Standards als Minimum-Benchmark fuer unsere Plattform uebernehmen.

---

## 4. Hosting-Anforderungen

### 4.1 Muss in EU/Deutschland gehostet werden?

**Rechtslage:**
- DSGVO verlangt **nicht zwingend** Hosting in der EU
- Drittstaat-Uebermittlung ist unter bestimmten Bedingungen erlaubt (Art. 44-49 DSGVO)
- **ABER:** Im Bildungsbereich / oeffentlichen Sektor ist die Erwartung **faktisch: EU-Hosting**
- Die DSK-Orientierungshilfe fuer Lernplattformen verlangt, dass die Schule "Herr der Daten" bleibt

**Faktische Anforderung von Schulen/Traegern:**
- **Minimum:** EU/EWR-Hosting
- **Bevorzugt:** Deutschland-Hosting
- **Dealbreaker:** Reine US-Hosting ohne EU-Server

### 4.2 Vercel (US-Firma, EU-Server) — PROBLEMATISCH

**Risiken:**
- Vercel Inc. hat Firmensitz in den USA -> unterliegt dem **US CLOUD Act**
- US-Behoerden koennen Herausgabe von Daten verlangen, auch wenn Server in der EU stehen
- **Vergabekammer Baden-Wuerttemberg (2022):** Cloud-Dienste von US-Firmen/Toechterfirmen sind nicht DSGVO-konform fuer oeffentliche Auftraege
- Vercel ist zwar nach Data Privacy Framework zertifiziert, aber viele Schultraeger und DSB lehnen US-Anbieter grundsaetzlich ab

**Vercel ist fuer den Frontend-Hosting einer Schul-Lernplattform ein erhebliches Verkaufshemmnis.**

### 4.3 Supabase — BEDINGT OK

**Vorteile:**
- Bietet EU-Region (Frankfurt) an
- Hat ein DPA (Data Processing Agreement) nach Art. 28 DSGVO
- Nutzt EU Standard Contractual Clauses (Art. 46 DSGVO)
- PostgreSQL-Daten liegen in Frankfurt

**Risiken:**
- Supabase Inc. hat Firmensitz in den USA -> CLOUD Act gilt
- Besser als Vercel (weil Daten in Frankfurt), aber US-Firmensitz bleibt Problem
- Fuer strengere Traeger/DSB moeglicherweise nicht akzeptabel

### 4.4 Empfohlene Hosting-Strategie

| Komponente | Empfehlung | Alternative |
|------------|-----------|-------------|
| **Frontend/App** | Hetzner Cloud (DE) | IONOS (DE) |
| **Datenbank** | Hetzner + selbst-gehostetes PostgreSQL/Supabase | Managed PostgreSQL bei Hetzner |
| **E-Mail** | Mailjet (FR/EU) | Eigener SMTP auf Hetzner |
| **CDN** | BunnyCDN (SI/EU) | Hetzner |
| **Backup** | Hetzner Storage Box | IONOS S3 |

**Kosten-Vergleich:**
- Hetzner Cloud CX22 (2 vCPU, 4 GB RAM): ca. 5-10 EUR/Monat
- Managed PostgreSQL: ca. 10-15 EUR/Monat
- **Gesamt: ca. 20-50 EUR/Monat** (vs. Vercel Pro 20 USD/Monat + Supabase Pro 25 USD/Monat)

**Fazit: EU-only Hosting ist nicht teurer und eliminiert das groesste Verkaufshemmnis.**

---

## 5. Was Schulen vor Vertragsabschluss von uns brauchen

### 5.1 Dokumente-Checkliste (was Schulen/Traeger typischerweise verlangen)

**MUSS (ohne diese kein Verkauf):**
- [ ] Auftragsverarbeitungsvertrag (AVV) — von uns vorbereiteter Entwurf
- [ ] Anlage TOM — konkrete technisch-organisatorische Massnahmen
- [ ] Anlage Unterauftragsverarbeiter — Liste aller Sub-Prozessoren mit Standort
- [ ] Datenschutzerklaerung der Plattform
- [ ] Verzeichnis von Verarbeitungstaetigkeiten (VVT) — Auszug
- [ ] Informationen zum Hosting-Standort (Nachweis EU/DE)

**SOLL (erhoeht Vertrauenswuerdigkeit signifikant):**
- [ ] Datenschutz-Folgenabschaetzung (DSFA)
- [ ] Loeschkonzept (wann werden Daten geloescht, wie)
- [ ] Berechtigungskonzept (welche Rolle sieht welche Daten)
- [ ] IT-Sicherheitskonzept (auch als Teil der TOM)
- [ ] Referenz: Bestehende Kunden die uns empfehlen

**NICE TO HAVE (beschleunigt Entscheidung):**
- [ ] ISO 27001 Zertifikat (oder Erklaerung, dass man darauf hinarbeitet)
- [ ] Penetrationstest-Bericht (extern)
- [ ] Cookie-Banner / Consent-Management Beschreibung
- [ ] Barrierefreiheitserklaerung nach BFSG

### 5.2 Standard-AVV-Templates

- Es gibt **kein einheitliches Template** das alle Schultraeger nutzen
- Manche Traeger bringen ein eigenes AVV-Muster mit
- Die **GDD (Gesellschaft fuer Datenschutz und Datensicherheit)** hat ein Muster-AVV
- Die **Berliner Datenschutzbehoerde** hat eine abgestimmte Checkliste zur AVV-Pruefung
- **Empfehlung:** Eigenes AVV nach Art. 28 vorbereiten, das Schulen einfach unterschreiben koennen (wie Cornelsen/Pflegias es macht)

### 5.3 Schulischer Datenschutzbeauftragter

- **Ja**, der schulische DSB muss in der Regel eingebunden werden
- Bei Pflegeschulen: Der Traeger (z.B. Krankenhaus, DRK, Diakonie) hat typischerweise einen DSB
- Dieser DSB prueft unseren AVV und unsere TOM **vor** Vertragsabschluss
- Die Schulleitung kann nicht eigenmaechtig Software einfuehren ohne DSB-Ruecksprache

### 5.4 Dauer der DSGVO-Pruefung

- **Kleine freie Traeger:** 2-4 Wochen (wenn DSB schnell reagiert)
- **Grosse Traeger (DRK, Diakonie, Caritas):** 4-12 Wochen
- **Oeffentliche Traeger / Berufskollegs:** 8-16 Wochen (Abstimmung mit Schultraeger/Kommune)
- **Tipp:** Alle Dokumente **vorab downloadbar** auf der Website bereitstellen -> beschleunigt den Prozess

---

## 6. Barrierefreiheit (BFSG / WCAG)

### 6.1 BFSG — Gilt das fuer Lernplattformen?

**Das BFSG gilt seit 28. Juni 2025.**

**Anwendungsbereich:**
- Das BFSG gilt fuer "Dienstleistungen im elektronischen Geschaeftsverkehr"
- Eine SaaS-Lernplattform, die online verkauft/bereitgestellt wird, faellt **hoechstwahrscheinlich** unter das BFSG
- Insbesondere wenn die Plattform Verbrauchern (Schuelern) zugaenglich ist
- B2B-Dienste sind grundsaetzlich ausgenommen, ABER: Die Endnutzer (Schueler) sind Verbraucher

**Zusaetzlich:** Die BITV 2.0 (Barrierefreie-Informationstechnik-Verordnung) gilt fuer oeffentliche Stellen. Wenn Berufskollegs (oeffentlich) unsere Plattform nutzen, muss sie BITV-konform sein.

### 6.2 WCAG 2.1 AA — Wichtigste Anforderungen

Die EN 301 549 (europaeischer Standard) referenziert WCAG 2.1 Level AA. Kernpunkte:

**Wahrnehmbar:**
- Textalternativen fuer Bilder (alt-Tags)
- Untertitel fuer Videos
- Kontrastverhaeus mindestens 4.5:1 (Text), 3:1 (grosse Schrift)
- Responsives Design (Zoom bis 200% ohne Informationsverlust)
- Keine rein visuelle Informationsvermittlung (Farbe allein reicht nicht)

**Bedienbar:**
- Vollstaendige Tastaturbedienbarkeit
- Keine Tastatur-Fallen
- Sichtbarer Fokus-Indikator
- Ausreichend Zeit fuer Interaktionen
- Navigierbare Seitenstruktur (Landmarks, Headings)
- Skip-Links

**Verstaendlich:**
- Sprache des Dokuments angeben
- Konsistente Navigation
- Fehlererkennung und -beschreibung in Formularen
- Hilfe bei Eingaben

**Robust:**
- Valider HTML-Code
- Kompatibilitaet mit Screenreadern (ARIA-Labels)
- Statusmeldungen programmatisch verfuegbar

### 6.3 Uebergangsfristen

- BFSG gilt seit **28. Juni 2025** — keine Uebergangsfrist fuer neue Produkte/Dienste
- Fuer **vor dem 28.06.2025 bestehende** Dienstleistungen gibt es eine Uebergangsfrist bis **28.06.2030**
- Da unsere Plattform NEU auf den Markt kommt, muss sie **ab Launch barrierefrei** sein
- Kleinstunternehmen (< 10 Mitarbeiter UND < 2 Mio Umsatz) sind **von Dienstleistungspflichten ausgenommen** — das trifft auf eine Startup-UG wahrscheinlich zu, ist aber kein Freifahrtschein gegenueber oeffentlichen Traegern

---

## 7. Zertifizierungen

### 7.1 ISO 27001

- **Kosten:** 10.000-18.000 EUR Erst-Zertifizierung + 4.000-7.000 EUR jaehrliche Audits
- **Zeitaufwand:** 6-12 Monate Vorbereitung
- **Brauchen wir das sofort?** NEIN. Kein Startup-Pflichtprogramm
- **Aber:** Groessere Traeger (Krankenhaus-Konzerne, Diakonie) fragen danach
- **Empfehlung:** Kommunizieren, dass man "nach ISO 27001 orientiert" arbeitet und Zertifizierung anstrebt

### 7.2 C5-Testat (BSI)

- **Kosten:** >200.000 EUR fuer Unternehmen ohne bestehendes ISMS
- **Fuer ein Startup voellig unrealistisch**
- C5 wird primaer fuer Cloud-Dienste im oeffentlichen Sektor / Gesundheitswesen verlangt
- Erst relevant wenn wir in den oeffentlichen Beschaffungsbereich gehen (z.B. Landeslizenzen)

### 7.3 Was Schulen/Traeger typischerweise fragen

| Zertifizierung | Wer fragt? | Pflicht? |
|---------------|-----------|---------|
| AVV vorhanden | Alle | Ja |
| TOM dokumentiert | Alle | Ja |
| Hosting in EU/DE | Fast alle | De facto ja |
| ISO 27001 | Grosse Traeger, Krankenhaeuser | Nein, aber gewuenscht |
| C5-Testat | Oeffentliche Vergabe, selten | Nein |
| Penetrationstest | Manche grosse Traeger | Nein, aber gewuenscht |
| DSGVO-Zertifizierung (Art. 42) | Theoretisch | Existiert noch nicht in der Praxis |

### 7.4 Realistisches Minimum fuer eine Startup-UG

**Phase 1 (Launch):**
1. AVV (eigenes Template, anwaltlich geprueft) — ca. 1.500-3.000 EUR Anwaltskosten
2. TOM-Dokumentation — selbst erstellen
3. VVT — selbst erstellen
4. Datenschutzerklaerung — ca. 500-1.000 EUR (Anwalt) oder Generator + Pruefung
5. Hosting auf Hetzner/IONOS (DE) — eliminiert 80% der Hosting-Diskussionen
6. Loeschkonzept — selbst erstellen
7. DSFA — selbst erstellen (Templates online verfuegbar)

**Phase 2 (nach den ersten 10 zahlenden Schulen):**
8. Externer DSB bestellen (ab ca. 200-500 EUR/Monat)
9. Externer Penetrationstest (ca. 3.000-8.000 EUR)
10. ISO 27001 Vorbereitung starten

**Phase 3 (Skalierung >50 Schulen):**
11. ISO 27001 Zertifizierung
12. Ggf. C5 Typ 1 Testat vorbereiten

**Geschaetzte Kosten Phase 1: ca. 3.000-5.000 EUR**
(Das ist der Preis fuer "darf an Schulen verkauft werden")

---

## 8. Zusammenfassung: Prioritaeten-Matrix

### SOFORT (vor erstem Schulverkauf)

| Prioritaet | Aufgabe | Aufwand |
|-----------|---------|--------|
| P0 | AVV erstellen (anwaltlich pruefen lassen) | 2-3 Wochen |
| P0 | TOM dokumentieren | 1 Woche |
| P0 | Datenschutzerklaerung | 1 Woche |
| P0 | VVT anlegen | 2-3 Tage |
| P0 | Hosting auf EU/DE-Provider migrieren | 1-2 Wochen |
| P1 | DSFA durchfuehren | 1 Woche |
| P1 | Loeschkonzept | 2-3 Tage |
| P1 | Berechtigungskonzept | 2-3 Tage |

### MITTELFRISTIG (erste 6 Monate)

| Prioritaet | Aufgabe | Aufwand |
|-----------|---------|--------|
| P2 | WCAG 2.1 AA Audit + Fixes | 2-4 Wochen |
| P2 | Externer Penetrationstest | 1-2 Wochen |
| P2 | DSB bestellen | Laufend |
| P3 | ISO 27001 Vorbereitung | 6-12 Monate |

---

## 9. Quellen und Referenzen

### Offizielle Quellen
- [LDI NRW - Bildung](https://www.ldi.nrw.de/datenschutz/bildung)
- [Handreichung Datenschutz an Schulen - Bildungsportal NRW](https://www.schulministerium.nrw/handreichung-datenschutz-schulen)
- [DSK Orientierungshilfe Online-Lernplattformen](https://www.datenschutzkonferenz-online.de/media/oh/20180426_oh_online_lernplattformen.pdf)
- [BfDI - DSK Orientierungshilfe Lernplattformen](https://www.bfdi.bund.de/SharedDocs/Downloads/DE/DSK/DSKEntschliessungen/91DSK_OHLernplattformen.html)
- [Art. 9 DSGVO - dejure.org](https://dejure.org/gesetze/DSGVO/9.html)
- [BFSG - Barrierefreiheitsstaerkungsgesetz](https://bfsg-gesetz.de/)
- [BSI C5 FAQ](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Kriterienkatalog-C5/C5-FAQ/kriterienkatalog-c5-faq_node.html)
- [PflBG - Gesetze im Internet](https://www.gesetze-im-internet.de/pflbg/)
- [DVO-PflBG NRW](https://recht.nrw.de/lmi/owa/br_text_anzeigen?v_id=01620200102091033016)

### Praxis-Referenzen
- [Cornelsen AVV](https://www.cornelsen.de/service/kundenservice/rechtliche-hinweise/avv)
- [Pflegias Datenschutz](https://demo.pflegias.cornelsen.de/local/impressum/datenschutz.php)
- [datenschutz-schule.info - Auftragsverarbeitung](https://datenschutz-schule.info/category/dsgvo/auftragsverarbeitung/)
- [LOGINEO NRW Datenschutz](https://www.logineo.schulministerium.nrw.de/LOGINEO-NRW/Informationssicherheit-und-Datenschutz/)
- [Datenschutz-Folgenabschaetzung in Schulen](https://datenschutz-schule.info/themen/spezialthemen/datenschutz-folgenabschaetzung-durchfuehren/)
- [TOM Checkliste Thueringen](https://bildung.thueringen.de/fileadmin/schule/medien/datenschutz-in-schulen/Datenschutz_Formular_19.pdf)
- [Dr. Datenschutz - IT-Tools in Schulen](https://www.dr-datenschutz.de/datenschutz-bei-it-tools-software-in-schulen/)
- [IQSH Medienberatung - Vollstaendige Pruefung](https://medienberatung.iqsh.de/pl-ds-vollstaendige-pruefung.html)
- [Hetzner Cloud](https://www.hetzner.com/de/cloud-made-in-germany)
- [Supabase DPA](https://supabase.com/legal/dpa)

### CLOUD Act und US-Dienste
- [Vergabekammer BW: US-Cloud nicht DSGVO-konform](https://dr-dsgvo.de/cloud-anbieter-in-den-usa-rechtswidrig-zum-beschluss-der-vergabekammer-baden-wuerttemberg/)
- [US Cloud Act vs. Datenschutz](https://blog.idgard.com/de/us-cloud-act-vs-datenschutz/)
- [LUTZ ABEL - Cloud Act Analyse](https://www.lutzabel.com/en/article/?tx_hphlawyers_articledetail%5Baction%5D=show&tx_hphlawyers_articledetail%5Barticle%5D=268)

---

**Hinweis:** Diese Recherche ist keine Rechtsberatung. Vor dem ersten Schulverkauf sollte ein auf Datenschutzrecht spezialisierter Anwalt den AVV und die TOM pruefen. Geschaetzte Kosten: 1.500-3.000 EUR.
