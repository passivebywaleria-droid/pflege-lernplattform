# SPEC — Produktreifer Pilot-Flow (Play-then-Gate + OTP-Code)

**Erstellt:** 2026-07-11
**Autor:** Senior-Product-Design-Durchgang (Claude)
**Ziel:** Erster echter Schüler-Kontakt mit carovia.de. Eine Pflege-Klasse (bis ~25
Schüler, Handy, Schul-WLAN) spielt die Wagner-Reanimation an, konvertiert am
Play-then-Gate zu einem kostenlosen Account und lernt weiter — ohne dass der
Flow an einer Kante bricht.

> Dieses Dokument ist die verbindliche Bau-Grundlage. Es ersetzt den bisherigen
> Magic-Link-**Klick**-Ansatz durch einen **6-stelligen Code** (Entscheidung
> Gründerin, 2026-07-11) und schließt alle acht identifizierten Flow-Kanten.

---

## 0. Bewertung der uncommitteten Arbeit (aus paralleler Session)

Im Arbeitsverzeichnis lag bei Session-Start bereits Arbeit einer anderen Session
(uncommittet, aber **tsc-grün**). Bewertung als Senior PD — was bleibt, was wird
umgebaut, was fällt weg:

| Artefakt | Bewertung | Entscheidung |
|----------|-----------|--------------|
| Player-Merge-Logik (Gast→Account, localStorage→Server, Race-Vermeidung) | Sauber, gut kommentiert, idempotent | **BEHALTEN** — login-methoden-unabhängig |
| `/api/progress/situation` (GET/POST, Upsert, „einmal complete bleibt complete") | Solide, korrekt | **BEHALTEN** |
| `schema.ts`: `situationFortschritt.currentPhase` Enum→varchar, `resumeState`-JSONB | Richtig (phasenmodell-agnostisch) | **BEHALTEN** (braucht `db:push`) |
| `mail/send.ts` (Brevo-HTTP + Stub ohne Key) | Gut, wiederverwendbar | **BEHALTEN** |
| Anti-Enumeration in `/api/auth/magic/login` (neutrale Antwort) | Sicherheitsbewusst | **PRINZIP BEHALTEN**, auf Code umbauen |
| Rückkehrer-Login-Modus in `magic-signup-form.tsx` | Guter UX-Gedanke | **BEHALTEN**, Eingabe von Link auf Code umstellen |
| `magic-link.ts` Token-Utils (32-Byte-Link-Token) | Für Klick-Link gebaut | **ERGÄNZEN** um OTP-Code-Erzeugung |
| `magic/request` + `magic/verify` (GET-Redirect mit Token im Link) | Klick-Paradigma | **UMBAUEN** auf Code (`verify` wird POST) |
| `mail/templates/magic-link.ts` (Button „Jetzt anmelden") | Link-Vorlage | **UMBAUEN** zu Code-Vorlage |

**Fazit:** Der login-*unabhängige* Kern (Merge, Server-Persistenz, Mail-Transport)
ist gut und wird nicht neu gebaut. Der login-*abhängige* Teil (Link) wird auf
Code umgestellt. Nichts wird verschwendet.

---

## 1. Der komplette Soll-Journey (end-to-end)

Jede Station, wie sie sich für den Schüler anfühlen soll:

1. **Einstieg** — Schüler öffnet carovia.de (QR/Link von der Lehrerin). Der
   „Ausprobieren"-Button führt **direkt** in die Wagner-Reanimation
   (`/de/lernen/situation/ls-wagner-reanimation?ce=ce-06`), nicht in eine
   Zwischen-Übersicht.

2. **Gast-Spiel (Step 0)** — Wagner bricht zusammen. Schüler wertet die
   Schnappatmung (MC-Fallstrick), bekommt den **vollen Reveal** als Hook. Läuft
   ohne Login, Fortschritt in localStorage.

3. **Gate-Moment (Step 1 / 2. Step)** — Schüler beantwortet die Puls-Frage.
   **Bevor** das Feedback erscheint, kommt das soft-Gate: „Stark — du bist
   mittendrin! Sieh dein Ergebnis + die Erklärung und speichere deinen
   Fortschritt." Einmal wegtippbar („Später"), danach greift das harte Gate.

4. **Signup (`/mitmachen`)** — Spitzname + E-Mail + Geburtsjahr + ≥16-Häkchen.
   Absenden → **Code-Eingabe-Screen** (6 Ziffern). Der Schüler **verlässt die
   Seite nicht** — er liest den Code aus der Mail-Benachrichtigung und tippt ihn
   ein. (Kein App-Wechsel, keine WebView-Falle — siehe Abschnitt 2.)

5. **Verify + Merge** — Code korrekt → Session gesetzt → zurück in die Wagner-
   Situation. Der localStorage-Gaststand wird zum Account gemergt und
   server-seitig gespeichert. Der Schüler landet **genau da, wo er aufgehört
   hat**, und sieht endlich das zurückgehaltene Feedback.

6. **Weiterspielen** — Rest der Situation, Fortschritt läuft server-seitig mit.

7. **Abschluss** — „🎉 geschafft" + klarer Weiter-Weg (nächste Situation /
   Übersicht) statt Sackgasse.

8. **Wiederkehr (nächster Tag)** — Cookie hält 7 Tage. carovia.de erkennt die
   Session und bietet „Weiterlernen" statt der Warteliste.

9. **Rückkehr ohne Cookie (neues Gerät)** — `/mitmachen` → „Schon dabei?
   Einloggen" → nur E-Mail → Code → drin.

---

## 2. Login-Umbau: Magic-Link-Klick → 6-stelliger Code

### Warum (das „um die Ecke"-Argument)

Ein Magic-**Link** zwingt den Schüler, die App zu verlassen und den Link in der
Mail zu tippen. Öffnet die Gmail-/Outlook-App den Link in ihrem **In-App-Browser
(WebView)**, ist das ein *isolierter* Speicher-Kontext:
- Der Gast-localStorage liegt im ursprünglichen Browser → im WebView unsichtbar →
  **Merge scheitert, Fortschritt weg.**
- Die Session-Cookie landet im WebView → im ursprünglichen Browser ist der
  Schüler **weiterhin ausgeloggt.**

Ein **Code** bricht diese Falle: Der Schüler bleibt im Spiel-Tab, liest nur den
Code ab und tippt ihn ein. Kein Kontext-Wechsel → Merge und Session sind
garantiert im selben Browser.

### Schema-Ergänzung (`login_tokens`)

`login_tokens` bekommt zwei Felder für Brute-Force-Schutz (6 Ziffern = 1 Mio
Möglichkeiten → Online-Rateschutz Pflicht):

```
codeHash    varchar(255)   -- SHA-256 des 6-stelligen Codes (statt Link-Token)
attempts    integer NOT NULL DEFAULT 0   -- Fehlversuche; ab 5 → Token tot
```

`tokenHash` bleibt als Spalte (rückwärtskompatibel), wird aber nicht mehr genutzt.
Bindung Code↔E-Mail bleibt (Verify braucht **E-Mail + Code**) → man kann nicht
blind für Fremde raten.

### Routen

- `POST /api/auth/magic/request` (Signup) — wie bisher (≥16-Check vor DB, User
  idempotent), aber: erzeugt **6-stelligen Code**, speichert `codeHash`, mailt
  den **Code** (nicht den Link).
- `POST /api/auth/magic/login` (Rückkehrer) — analog, Anti-Enumeration bleibt.
- `POST /api/auth/magic/verify` (**neu: POST statt GET-Redirect**) — Body
  `{ email, code, next }`. Prüft: Token zur E-Mail existiert, nicht abgelaufen,
  nicht benutzt, `attempts < 5`. Bei Fehl-Code: `attempts++`, 401. Bei Erfolg:
  `usedAt` setzen, `createSession`, `{ ok: true, next }` zurück. **Kein
  Redirect** — die Client-Form navigiert selbst (`window.location.href = next`),
  damit der Player im selben Tab neu lädt und mergt.
- `GET /api/auth/magic/verify` (Alt-Link) — **entfällt.**

### Rate-Limiting

- Pro Token max. 5 Fehlversuche (`attempts`), dann invalide.
- Pro E-Mail max. N aktive Code-Anforderungen pro Zeitfenster (einfacher
  In-Memory- oder DB-Zähler; für den Pilot reicht: alte offene Tokens der
  E-Mail bei neuer Anforderung invalidieren + Cooldown 60 s clientseitig).
- Code-TTL: **15 Minuten** (kürzer als beim Link — man tippt ihn sofort).

### UI (`magic-signup-form.tsx`)

Nach `request`/`login`-Erfolg **nicht** „Mail geschickt, klick drauf", sondern
ein **Code-Eingabe-Screen**: 6 große Ziffernfelder (`inputMode="numeric"`,
`autocomplete="one-time-code"` → iOS/Android bieten den Code aus der SMS/Mail-
Benachrichtigung automatisch an), „Bestätigen"-Button, „Code erneut senden"
(Cooldown), „E-Mail ändern". Bei Erfolg → `window.location.href = next`.

---

## 3. Die acht Kanten — je mit konkreter Lösung

| # | Kante | Lösung |
|---|-------|--------|
| 1 | Einstieg fehlt | `demoHref` auf der Startseite von `/${locale}/lernen` → `/${locale}/lernen/situation/ls-wagner-reanimation?ce=ce-06`. (QR-Code erzeugt die Lehrerin aus dieser URL — kein Code nötig.) |
| 2 | Magic-Link-Reibung/WebView | Gelöst durch OTP-Code (Abschnitt 2). |
| 3 | Fehler-Sackgasse `/login` | Verify ist jetzt POST ohne Redirect → Fehler bleiben **im Code-Screen** („Code falsch/abgelaufen — neu senden"). Kein `/login`-Redirect mehr. |
| 4 | EinstufungsGuard wirft Pilot-Schüler auf `/einstufung` | Pilot-Modus per Env-Flag `NEXT_PUBLIC_PILOT_MODE=true` → `EinstufungsGuard` überspringt die Einstufung generell (LOCKED: kein Einstufungstest im ersten Pilot). Reversibel. |
| 5 | „Fortschritt speichern" einlösen | Server-Persistenz + Merge sind gebaut (behalten). OTP macht den Merge robust (Kante 2). |
| 6 | Post-Situation-Sackgasse | Abschluss-Karte bekommt klaren Weiter-CTA (Vorschlag: „Weiterlernen" → CE-06-Übersicht; später kuratierte Pilot-Reihenfolge). |
| 7 | Wiederkehr landet auf Warteliste | Startseite erkennt Session (server-seitig `getSession()`); eingeloggt → „Weiterlernen"-Button statt Warteliste-Fokus. `loginHref` für Rückkehrer → `/mitmachen` (Code), nicht `/login` (Passwort). |
| 8 | DSGVO: keine Datenschutz-/Impressum-Seite | Seiten anlegen + im `/mitmachen`-Formular + Footer verlinken. **Juristischer Text = Gründerin/Anwalt** (siehe offene Punkte). |

---

## 4. Bau-Reihenfolge (Phasen, jede für sich validierbar)

**Phase A — Fundament & Aufräumen**
- A1. `schema.ts`: `login_tokens.codeHash` + `attempts` ergänzen.
- A2. `magic-link.ts`: `generateOtpCode()` (6 Ziffern, kryptografisch) +
      `hashOtp()`. Link-Token-Utils bleiben ungenutzt bestehen.
- A3. Task-/Memory-Konsistenz.

**Phase B — OTP-Routen**
- B1. `request` + `login` auf Code umstellen (Code erzeugen, `codeHash` speichern).
- B2. `verify` → POST `{email, code, next}` mit `attempts`-Logik + `createSession`.
- B3. Alt-Link-`verify` (GET) entfernen.
- B4. Mail-Vorlage → Code (`otp-code.ts`).

**Phase C — OTP-UI**
- C1. Code-Eingabe-Screen in `magic-signup-form.tsx` (6 Felder, `one-time-code`).
- C2. „Erneut senden" (Cooldown) + „E-Mail ändern".
- C3. Erfolg → `window.location.href = next`.

**Phase D — Flow-Kanten**
- D1. Einstieg: `demoHref` → Wagner (Kante 1).
- D2. Guard-Bypass: `NEXT_PUBLIC_PILOT_MODE` im `EinstufungsGuard` (Kante 4).
- D3. Post-Situation-CTA in der Abschluss-Karte des Players (Kante 6).
- D4. Startseite session-aware + `loginHref`→`/mitmachen` (Kante 7).

**Phase E — DSGVO**
- E1. `/datenschutz` + `/impressum` Routen (public) anlegen.
- E2. Verlinkung im Signup-Formular + Footer.
- E3. Inhalt: siehe offene Punkte (nicht erfinden).

**Phase F — Validierung & Übergabe**
- F1. `npx tsc --noEmit && npx vitest run && npm run build`.
- F2. Lokaler Durchklick-Fahrplan (Gründerin) dokumentiert.
- F3. Externe To-dos zusammengefasst (`db:push`, Brevo-Key, Env, QR).

---

## 5. Validierung (Definition of Done)

- `tsc`, `vitest` (aktuell 564), `build` grün nach jeder Phase.
- Kein Platzhalter-Content, keine erfundenen Rechtstexte.
- Manuell nachvollziehbarer Durchklick im Stub-Modus (Code in Server-Konsole).

---

## 6. Externe To-dos (nicht Code)

- **`db:push`** gegen Neon (Auto-Mode blockt Live-DB) — Gründerin:
  `! npm run db:push -- --verbose`. Nötig für `login_tokens.codeHash/attempts`,
  `birthYear`, `auth_identities`, `situationFortschritt.resumeState`.
- **`BREVO_API_KEY`** + `MAIL_FROM_EMAIL`/`MAIL_FROM_NAME` in `.env.local`
  (lokal) und Hetzner-`.env` (Prod) — sonst Stub.
- **`NEXT_PUBLIC_SITE_URL=http://localhost:3000`** lokal (für korrekte Links).
- **`NEXT_PUBLIC_PILOT_MODE=true`** lokal + Prod.
- **QR-Code** aus der Wagner-URL (Lehrerin/Marketing).

---

## 7. Geklärte Entscheidungen (2026-07-11)

1. **Datenschutz + Impressum:** Ich baue Seiten + fachlichen Entwurf (echter
   Datenfluss: Hetzner/Neon, Brevo, Stripe, erhobene Felder), Gründerin/Anwalt
   gibt frei. Kein Copy-Paste-Generikum.
2. **Post-Situation:** Weiterlernen-CTA zur CE-06-Übersicht (zeigt „es gibt
   mehr"). Freemium-Grenze bestimmt, wann daraus die Paywall wird (Abschnitt 8).
3. **Wiederkehr:** Startseite session-aware, „Weiterlernen" statt Warteliste;
   Rückkehrer-Login → `/mitmachen` (Code), nicht `/login` (Passwort).
4. **Google-Login:** Phase 2, **nicht** Teil dieses Zugs.
5. **Pilot-Ziel:** Monetarisierung testen (echtes Geld) **+** Lern-Validierung.

---

## 8. Monetarisierung (Freemium → Bezahlung)

**Ziel:** Echte Zahlungsbereitschaft einzelner Schüler (B2C) messen, ohne das
Lern-Ziel zu sabotieren und ohne Minderjährigen-Recht zu verletzen.

### Freemium-Grenze
- **Frei:** die ersten **3 distinct Situationen**, die ein Nutzer *beginnt*
  (Wagner zählt als 1). Zählung = distinct `situationId` in
  `situationFortschritt` pro User (Gast-Wagner wird beim Merge mitgezählt).
- **Paywall:** Beim Öffnen der **4.** neuen Situation erscheint das
  Monetarisierungs-Gate statt der Situation. Bereits begonnene Situationen (1–3)
  bleiben immer zugänglich.
- „Begonnen" (nicht „abgeschlossen") zählt — sonst umgeht man die Grenze durch
  Nicht-Abschließen.

### Zahlungsmodell (altersabhängig — Geburtsjahr liegt vor)
- **≥ 18 Jahre:** Auto-Abo (Stripe `mode: 'subscription'`), monatlich, kündbar.
- **16–17 Jahre:** **monatlicher Einmalkauf** (Stripe `mode: 'payment'`, 30 Tage
  Vollzugang, KEINE automatische Verlängerung, KEINE gespeicherte Karte).
  Rechtlich robuster (§110 BGB, kein Dauerschuldverhältnis) — **anwaltlich zu
  bestätigen.** Nach Ablauf kauft der Nutzer aktiv neu.
- Alters-Weiche am Gate anhand `users.birthYear` / `isAtLeastPilotAge`-Logik
  (analog, aber Schwelle 18).

### Technik
- Stripe ist im Code vorhanden (`/api/stripe/checkout`, `/portal`, `/webhook`,
  `users.subscriptionStatus`, `stripeCustomerId`). Wird für beide Modi verdrahtet.
- **Preise/Produkte** = Stripe-Dashboard → Price-IDs in Env
  (`STRIPE_PRICE_ABO_MONAT`, `STRIPE_PRICE_EINMALKAUF_MONAT`). Der konkrete
  Preisbetrag ist Business-Input der Gründerin (offener Punkt unten).
- `subscriptionStatus` (bzw. ein Zugangs-Ende-Datum beim Einmalkauf) steuert, ob
  die Paywall greift. Webhook aktualisiert den Status.
- **Zugangs-Logik:** Paywall greift, wenn (distinct Situationen ≥ 3) UND (kein
  aktiver Zugang). Aktiver Zugang = Abo `active` ODER Einmalkauf-Ende in der
  Zukunft.

### Pflicht-Rechtstexte (bei echtem Verkauf zwingend)
- **AGB**, **Widerrufsbelehrung** (Fernabsatz), **Datenschutz** (inkl. Stripe-
  Datenfluss), **Impressum**. Fachlicher Entwurf durch mich, Freigabe Anwalt.

### Neue Bau-Phasen (nach dem kostenlosen Fundament)
- **Phase G — Freemium-Zähler:** distinct-Situationen-Zählung + Zugangs-Check
  (`hasActiveAccess(user)`), server- und clientseitig nutzbar.
- **Phase H — Paywall-Gate:** eigene Komponente (analog `PlayGate`), erscheint
  beim Öffnen der 4. Situation ohne Zugang. Alters-Weiche (Abo vs. Einmalkauf).
  Funnel-Events `paywall_gezeigt`, `paywall_konvertiert`.
- **Phase I — Stripe-Flows:** Checkout `mode` nach Alter, Webhook setzt
  Zugang/Ablauf, Success-Redirect zurück in die Situation.
- **Phase J — Rechtstexte:** `/agb`, `/widerruf`, `/datenschutz`, `/impressum`
  (public), Verlinkung in Signup + Checkout + Footer.

### Offene Business-Inputs (blockieren NUR die Zahl-Anzeige, nicht das Fundament)
- **Monatspreis** (z. B. 4,99 / 7,99 / 9,99 €) — Gründerin legt fest, ich setze
  ihn als Stripe-Preis/Env ein.
- **Stripe-Produkte** im Dashboard anlegen (Abo + Einmalkauf) → Price-IDs.
- **Rechtstext-Freigabe** (Anwalt) vor echtem Live-Verkauf.
