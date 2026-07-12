# SPEC — B2C-Bezahlung (Freemium → Paywall → Stripe)

**Erstellt:** 2026-07-12
**Autor:** Senior-Product-Design-Durchgang (Claude)
**Scope:** NUR B2C (einzelner Schüler zahlt). Kein B2B in diesem Zug.
**Teil von:** `SPEC-PILOT-FLOW-produktreif.md` (Phasen G, H, I, J) — dieses
Dokument ist die vertiefte Ausarbeitung.

---

## 0. Entscheidungen (final, Gründerin 2026-07-12)

| Frage | Entscheidung |
|-------|--------------|
| Was schaltet die Bezahlung frei? | **Alles** — alle Situationen, alle CEs, alle Funktionen |
| Preis | **14,99 € / Monat** |
| Freemium-Grenze | erste **3 distinct Situationen** frei, 4. → Paywall |
| ≥ 18 Jahre | **Auto-Abo** (Stripe `mode: subscription`), monatlich, kündbar |
| 16–17 Jahre | **Einmalkauf 30 Tage** (Stripe `mode: payment`), keine Auto-Verlängerung |
| Checkout | **Stripe Hosted Checkout** (Redirect, PCI bei Stripe) |
| Zahler | einzelner Schüler (B2C) |

**Product-Hinweis (dokumentiert, nicht blockierend):** 14,99 € liegt am oberen
Ende für Azubi-B2C — kann die Conversion dämpfen. Bewusst so gewählt: klareres
Zahlungssignal. Der Preis ist eine Stripe-Produkt-Konfiguration und später
änderbar, ohne Code.

---

## 1. Die Erfahrung (6 Momente, mit Texten)

### Moment 1 — Grenze erreicht (kein Schock, ein Erfolg)
Der Schüler hat 3 Situationen begonnen und öffnet die 4. Statt der Situation
erscheint das **Paywall-Gate** (Vollbild-Overlay, wie `PlayGate`).
- Überschrift: „Du bist richtig drin — schalt alles frei."
- Subtext: „Du hast schon 3 Situationen gespielt. Mit Vollzugang lernst du
  ohne Grenze weiter — alle Fälle, alle Themen."
- Die bereits begonnenen 3 Situationen bleiben **immer** zugänglich (kein
  Aussperren aus Bezahltem-Gefühl).

### Moment 2 — Wert zeigen
- „Alles frei"-Liste: Alle Situationen (aktuell 19, wächst) · Alle CEs · Alle
  Fragetypen und Fallbeispiele · Dein Fortschritt bleibt gespeichert.
- Preis prominent: **14,99 € / Monat**.
- Vertrauen: „Server in Deutschland · Jederzeit kündbar" (bzw. für 16–17:
  „Kein Abo — du entscheidest jeden Monat neu").

### Moment 3 — Alters-Weiche (im Angebot, nicht als Hürde)
Anhand `users.birthYear`:
- **≥ 18:** Button „Für 14,99 €/Monat freischalten" · Zusatz „Jederzeit kündbar".
- **16–17:** Button „Für 14,99 € freischalten (30 Tage)" · Zusatz „Kein Abo,
  keine automatische Verlängerung — du entscheidest jeden Monat neu."
- Nie als „schlechter" framen; für Minderjährige ist der Einmalkauf ein
  Vorteil (kein Abo-Risiko).

### Moment 4 — Checkout (Stripe Hosted)
Klick → `POST /api/stripe/pilot-checkout` erstellt eine Stripe-Checkout-Session
(mode nach Alter) → Redirect zu Stripe → Zahlung → Redirect zurück.
- Kartendaten liegen NIE bei uns (PCI-Scope minimal).

### Moment 5 — Zurück in die Situation
`success_url` führt zurück zu der Situation, die der Schüler öffnen wollte
(`next`), mit `?checkout=success`. Kurze Bestätigung („Vollzugang aktiv!"),
dann direkt weiterspielen. NICHT ins Dashboard (Guard).

### Moment 6 — Zugangs-Status
- Sichtbar (z. B. auf `/fortschritt`): „Vollzugang aktiv" · bei Einmalkauf:
  „gültig bis TT.MM.JJJJ".
- Abo (≥18): kündbar über das bestehende Stripe-Portal (`/api/stripe/portal`).
- Einmalkauf (16–17): läuft aus, Schüler kauft aktiv neu (kein Portal nötig).

### Nicht-Zahlung
Der Schüler kann die 4. Situation nicht öffnen, aber die ersten 3 bleiben da.
Er kann jederzeit später freischalten. Keine Sackgasse.

---

## 2. Bestehende Infrastruktur (wird erweitert, nicht ersetzt)

- `src/lib/stripe/config.ts` — `STRIPE_PRICES` (schoolYearly, individualMonthly),
  `checkoutSchema` (school | individual).
- `src/app/api/stripe/checkout/route.ts` — Customer-Upsert, Session, **`mode`
  hardcoded `subscription`**, success → `/fortschritt`.
- `src/app/api/stripe/webhook/route.ts` — `checkout.session.completed`,
  `invoice.paid`, `subscription.updated/deleted`, `payment_failed` → pflegt
  `users.subscriptionStatus`.
- `src/app/api/stripe/portal/route.ts` — Kündigung/Verwaltung.
- `users`: `subscriptionStatus`, `stripeCustomerId`, `birthYear`.

**Vor dem Bauen prüfen:** Wo wird `type: "individual"` (bestehender Abo-
Checkout) heute aufgerufen? Damit die Alters-Weiche nichts Bestehendes bricht.
→ Deshalb eine **eigene** Pilot-Route statt Umbau der generischen.

---

## 3. Technische Architektur (Erweiterungen)

### 3.1 Schema
```
users.accessUntil  timestamp (nullable)   -- Zugangs-Ende beim Einmalkauf (30 Tage)
```
Abo-Zugang bleibt über `subscriptionStatus === "active"`; Einmalkauf über
`accessUntil > now`. (Braucht `db:push`.)

### 3.2 config.ts
```
STRIPE_PRICES.individualOneTime = env STRIPE_PRICE_INDIVIDUAL_ONETIME  -- 14,99 € one-time
```
`individualMonthly` (bestehend) = 14,99 € recurring/Monat.

### 3.3 Zugangs-Logik — `src/lib/billing/access.ts` (neu)
```
hasActiveAccess(user): boolean =
     user.subscriptionStatus === "active"          // Auto-Abo (≥18)
  || (user.accessUntil && user.accessUntil > now)  // Einmalkauf (16–17)
  || schoolLicense(user)                            // B2B-Fallback (bestehend)

FREE_SITUATION_LIMIT = 3

canOpenSituation(user, situationId, begonneneSituationen): boolean =
     hasActiveAccess(user)
  || begonneneSituationen.includes(situationId)     // schon begonnen → immer offen
  || begonneneSituationen.length < FREE_SITUATION_LIMIT
```
Begonnene Situationen = distinct `situationId` aus `situationFortschritt` des
Users.

### 3.4 Freemium-Check-API — `GET /api/billing/access` (neu)
Gibt zurück: `{ hasAccess, freeUsed, freeLimit, begonnene: string[] }`.
Der Player fragt das beim Laden einer Situation ab → Paywall-Gate oder Situation.

### 3.5 Pilot-Checkout — `POST /api/stripe/pilot-checkout` (neu)
- Auth-pflichtig. Lädt `birthYear`, Customer-Upsert (wie bestehend).
- Alters-Weiche: ≥18 → `mode: subscription` + `individualMonthly`;
  16–17 → `mode: payment` + `individualOneTime`.
- `next` (interner Pfad, Open-Redirect-Schutz) in `metadata` + `success_url`
  (`{origin}{next}?checkout=success`), `cancel_url` zurück zur Situation.
- `metadata.kind = "pilot_abo" | "pilot_einmal"` (für den Webhook).

### 3.6 Webhook-Erweiterung
- `checkout.session.completed`:
  - `metadata.kind === "pilot_abo"` → `subscriptionStatus = active`.
  - `metadata.kind === "pilot_einmal"` → `accessUntil = now + 30 Tage`.
- Bestehende school/individual-Zweige unverändert.
- `customer.subscription.deleted` (Abo gekündigt) → `subscriptionStatus = none`
  (bestehend).

### 3.7 Paywall-Gate-UI — `src/components/learn/paywall-gate.tsx` (neu)
Vollbild-Overlay (Muster wie `PlayGate`), Alters-Weiche im Button-Text, Preis,
„Alles frei"-Liste, Rechts-Links, „Vielleicht später" (zurück zu den freien
Situationen). Funnel: `paywall_gezeigt`, `paywall_konvertiert`.
→ **Braucht Design-Freigabe.**

### 3.8 Player-Integration
Beim Öffnen einer Situation: `GET /api/billing/access`. Wenn `!canOpen` →
Paywall-Gate statt Situation. Für Gäste greift weiterhin das Account-Gate
(Freemium betrifft nur eingeloggte User; Gäste haben keinen DB-Fortschritt).

---

## 4. Rechtstexte (Phase J) — Pflicht bei echtem Verkauf

Vier Seiten unter `/[locale]/(legal)/…`, public:
- **AGB** — Vertragsgegenstand, Abo vs. Einmalkauf, Laufzeit/Kündigung, Preis.
- **Widerrufsbelehrung** — Fernabsatz; Hinweis auf Erlöschen des Widerrufs bei
  sofortiger Freischaltung digitaler Inhalte (ausdrückliche Zustimmung nötig →
  Checkbox im Checkout-Vorlauf).
- **Datenschutz** — echter Datenfluss: Hetzner/Neon (DE/EU), Brevo (Mail),
  Stripe (Zahlung), erhobene Felder (E-Mail, Spitzname, Geburtsjahr,
  Fortschritt).
- **Impressum** — Anbieter-Angaben.

**Ich schreibe die fachlichen Entwürfe** (an den echten Datenfluss angepasst),
**Anwalt/Gründerin gibt frei**. Impressum + Verantwortlicher brauchen echte
Angaben (siehe offene Inputs) — die erfinde ich NICHT.

---

## 5. Bau-Reihenfolge

- **G1** Schema `accessUntil` + `db:push`-Notiz.
- **G2** `config.ts` Einmalkauf-Preis.
- **G3** `lib/billing/access.ts` (Zugangs-Logik) + `GET /api/billing/access`.
- **I1** `POST /api/stripe/pilot-checkout` (Alters-Weiche, next).
- **I2** Webhook-Erweiterung (accessUntil / subscriptionStatus nach kind).
- **H1** `paywall-gate.tsx` (nach Design).
- **H2** Player-Integration (access-Check → Gate).
- **J** Rechtstext-Seiten (nach Firmierungs-Daten) + Verlinkung.
- Nach jeder Stufe: `tsc && vitest && build`.

Reihenfolge-Logik: G+I (Backend/Logik, design-unabhängig) zuerst; H (UI) nach
Design; J nach Firmierungs-Daten.

---

## 6. Offene Inputs (blockieren bestimmte Phasen, nicht das Backend)

1. **Design** der Paywall (H) — Look/Ton, passend zur Landing der anderen
   Session. Du wolltest es zeigen.
2. **Stripe-Produkte** im Dashboard: zwei Preise anlegen →
   `STRIPE_PRICE_INDIVIDUAL_MONTHLY` (14,99 €/Monat, recurring) und
   `STRIPE_PRICE_INDIVIDUAL_ONETIME` (14,99 €, einmalig). Price-IDs in `.env`.
   Alternativ baue ich mit Env-Namen, du trägst die IDs nach.
3. **Impressums-/Datenschutz-Angaben** (J): Name/Firmierung, Anschrift,
   E-Mail/Kontakt, ggf. USt-IdNr. — echte Daten, kein Platzhalter.
4. **`STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET`** in Prod-Env (für echten
   Verkauf) — vermutlich vorhanden; vor Live prüfen.
