# Rechtstexte — Checkliste vor Live

> Reihenfolge: (A) füllen → (B) anwaltlich prüfen → (C) technisch einbauen.
> Entwürfe: impressum.md · datenschutz.md · agb.md · widerruf.md.
> Faktenbasis: DATENVERARBEITUNG-INVENTAR.md (bei Stack-Änderung mitpflegen!).

## A) Platzhalter füllen (Waleria)

- [ ] Impressum: Name, Anschrift, Kontakt-E-Mail, ggf. Telefon.
- [ ] USt: USt-IdNr. **oder** Kleinunternehmer-§19-Hinweis (mit Steuerberatung).
- [ ] Preise: Abo {PREIS}/Monat, Einmalzugang {PREIS}/30 Tage, Kündigungsfrist.
- [ ] Freemium-Grenze exakt benennen (aktuell: harter Gate nach 2. Antwort-Step).
- [ ] Kontakt-/Antwort-Adresse (siehe „No-Reply"-Thema: replyfähiges Postfach).

## B) Anwaltlich prüfen lassen (Entwurf ≠ Rechtsberatung)

- [ ] Minderjährigen-Konstruktion (Konto ab 16, Einmalkauf 16–17, Einwilligung
      Sorgeberechtigte) — heikelster Punkt, unbedingt prüfen.
- [ ] Widerruf digitaler Inhalte (§ 356 Abs. 5 BGB) — Formulierung + Checkout-Flow.
- [ ] Funnel-Events (rein lokal, anonym) — Consent-Banner nötig oder nicht?
- [ ] Stripe US-Transfer — SCC/Angemessenheit.
- [ ] Haftungs- und AGB-Änderungsklausel.
- [ ] EU-OS-Plattform-Hinweis noch aktuell? (zum 20.07.2025 eingestellt).

## C) Technische Folgeaufgaben (Haupt-Chat, nach Freigabe)

- [ ] Vier Seiten bauen: `/[locale]/(legal)/{impressum,datenschutz,agb,widerruf}`
      im Lern-Design, in Middleware `publicPaths` aufnehmen.
- [ ] **Footer-Links** auf allen Seiten (Landing, Login, Player-Rand) — existieren
      aktuell NICHT (verifiziert 2026-07-20).
- [ ] **Checkout-Checkbox** „Ich stimme dem sofortigen Beginn zu und weiß, dass
      mein Widerrufsrecht dadurch erlischt" — im Stripe-Flow, dokumentiert.
- [ ] **Kündigungs-Schaltfläche** (§ 312k BGB) im Konto — Stripe-Portal-Route
      existiert (`/api/stripe/portal`); als klar beschrifteten Button einbinden.
- [ ] i18n: Rechtstexte mindestens DE; AR/TR-Übersetzung mit menschlicher
      Gegenlese (Content-Regel) — ODER bewusst nur DE + Hinweis.
- [ ] Bei Aktivierung Azure-STT-Fallback / PostHog / Sentry: DSE-Passus + Inventar
      ergänzen, BEVOR live.

## Reihenfolge-Empfehlung (Sparring)

Impressum + Datenschutz sind **Pflicht ab der ersten öffentlichen Seite** (auch
für die Warteliste!) — die zuerst. AGB + Widerruf werden scharf, sobald echtes
Geld fließt (Paywall live). Für einen kostenlosen Pilot ohne Zahlung reichen
zunächst Impressum + Datenschutz + Footer-Links; AGB/Widerruf vor der ersten
Zahlung. So kommt der Pilot schneller sauber an den Start.
