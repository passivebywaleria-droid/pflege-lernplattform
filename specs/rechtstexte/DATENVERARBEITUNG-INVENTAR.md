# Datenverarbeitungs-Inventar carovia.de — Stand 2026-07-20

> Faktische Grundlage der Datenschutzerklärung, aus dem echten Code verifiziert
> (nicht aus dem alten Prompt vom 19.07.). Bei jeder Stack-Änderung MITpflegen —
> sonst wird die Datenschutzerklärung falsch. Kein Rechtsdokument, sondern die
> Wahrheitsquelle für die Anwältin.

## Auftragsverarbeiter (Art. 28 DSGVO) — AVV nötig

| Dienst | Zweck | Welche Daten | Ort | Status AVV |
|--------|-------|--------------|-----|-----------|
| **Hetzner Online GmbH** | Hosting App + PostgreSQL-DB | alle serverseitig gespeicherten Daten | Deutschland | prüfen/abschließen |
| **Brevo (Sendinblue GmbH)** | Transaktions-Mails (Login-Code) | E-Mail-Adresse, 6-stelliger Code | EU (Domain em.carovia.de authentifiziert) | prüfen/abschließen |
| **Stripe** | Zahlungsabwicklung Abo/Einmalkauf | Zahlungsdaten, E-Mail, Kauf-Metadaten | EU/USA (Stripe = eigener Verantwortlicher f. Teile) | AVV + ggf. SCC |
| **Nebius (EU Amsterdam)** | KI-Tutor (Llama 3.3 70B): Erklär-anders, KI-Chat, KI-Feedback, Sprech-Bewertung | **nur Frage-/Antwort-/Transkript-TEXT — KEIN Name, KEINE User-ID** (Code-verifiziert) | EU (Amsterdam) | prüfen/abschließen |
| **Microsoft Azure Speech** | TTS (Vorlesen, aktiv) + STT (nur schlafender Server-Fallback, aktuell ohne Key inaktiv) | vorgelesener Lehrtext (TTS); Audio nur falls STT-Fallback aktiviert | EU-Region (germanywestcentral empfohlen) | AVV vor Aktivierung; SCC prüfen |

## KEINE Auftragsverarbeitung / kein Datenabfluss

- **On-Device-Spracherkennung (Whisper WASM):** Schüler-Audio wird
  ausschließlich im Browser verarbeitet und verlässt das Gerät NIE. Nur der
  fertige Transkript-TEXT geht (für die Bewertung) an Nebius. → starkes
  Datensparsamkeits-Argument, ausdrücklich benennen.
- **Exa (api.exa.ai):** rein serverseitiges Content-/Recherche-Werkzeug
  (Prüfungsfälle, interne Suche) — KEINE personenbezogenen Schülerdaten.
  In der DSE nur erwähnen, falls je in einem nutzerseitigen Feature genutzt.
- **Keine Tracker, keine Analytics-Dienste, keine Werbe-Cookies** (Google
  Analytics/Facebook Pixel etc. bewusst NICHT eingesetzt — VISION/security.md).
  PostHog/Sentry sind NUR RECHERCHIERT, noch NICHT integriert → NICHT in die
  DSE aufnehmen, bis eingebaut + DSGVO-Check.

## Cookies / lokale Speicherung

| Name | Art | Zweck | Rechtsgrundlage |
|------|-----|-------|-----------------|
| `pflege-session` | httpOnly, sameSite=lax, 7 Tage | Login-Session (JWT) | technisch notwendig (§ 25 Abs. 2 TDDDG) |
| `pflege-sprachlevel` | localStorage | gewählte Sprachstufe (C1/B1) | technisch notwendig / berechtigtes Interesse |
| `pflege-dark-mode` | localStorage | Design-Präferenz | technisch notwendig |
| `pflege-letzte-aktivitaet` | localStorage | Streak/Wiedereinstieg | technisch notwendig |
| `pflege:guest:{situationId}` | localStorage | Gast-Lernfortschritt (kein Konto) | technisch notwendig |
| `pflege:funnel` | localStorage | first-party Funnel-Events, anonym, kein Klarname | berechtigtes Interesse (§ 25 Abs. 2? — anwaltlich prüfen, da rein lokal) |
| `kernfakte:{situationId}` | localStorage | Adaptiv-Register (wackelige Fakten) | technisch notwendig |

→ **Kein Consent-Banner nötig**, solange ausschließlich technisch notwendige
lokale Speicherung + keine Tracker. Von Anwältin bestätigen lassen (die
Funnel-Events sind der einzige Graubereich — sie sind rein lokal, verlassen
das Gerät nur als aggregierte Konversionszahl ohne Personenbezug).

## Personenbezogene Daten im eigenen System (Hetzner-DB)

- Konto: E-Mail, Geburtsjahr (`birth_year` — für ≥16-Prüfung), Zugangsstatus
  (`access_until`), optional Passwort-Hash (bcrypt), Auth-Identitäten.
- Lernfortschritt: Situations-/Phasen-Stand, Antworten (richtig/falsch), XP.
- KEINE besonderen Kategorien (Art. 9) — Lernstände sind keine Gesundheitsdaten
  der Nutzer (es geht um Pflege-WISSEN, nicht um die Gesundheit des Schülers).

## Minderjährige (Art. 8 DSGVO)

- Registrierung erst **ab 16** (birth_year-Prüfung im Consent-Screen).
- Ab 16 ist die Argumentation: Einwilligung in Informationsdienste ab 16 wirksam
  (DE-Umsetzung Art. 8 Abs. 1: Altersgrenze 16). Unter 16 kein Konto.
- Einmalkauf-Sonderweg 16–17 (kein Auto-Abo) — in AGB spiegeln.

## Offene Punkte für die Anwältin

1. Funnel-Events (rein lokal) — Consent-pflichtig oder nicht?
2. Stripe USA-Transfer — SCC/Angemessenheit im aktuellen Stand.
3. Azure STT-Fallback: erst DSE-Passus, wenn aktiviert (aktuell inaktiv).
4. Auftragsverarbeiter-Liste mit tatsächlich abgeschlossenen AVV abgleichen.
