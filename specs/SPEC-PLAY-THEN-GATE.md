# SPEC — Play-then-Gate (Soft-Gate in der Lern-Session)

> Stand: 2026-06-29 · Autor: Landing-Chat (remote-control)
> Status: **geplant, NICHT gebaut** — eigener Folge-Chat (berührt Lern-Engine, kollidiert mit Content-Chats → seriell).

---

## 1. Idee in einem Satz

Ein anonymer Besucher (von Social/SEO) spielt ein paar **echte** Steps einer Session
gratis und ohne Anmeldung — und an einer **spannenden Stelle** (Cliffhanger) erscheint
ein Overlay: „Melde dich an, um weiterzumachen." Das Produkt verkauft sich erst selbst,
**dann** wird nach der E-Mail gefragt.

Die Landing (`src/app/[locale]/page.tsx`) führt mit dem Primär-CTA „Kostenlos ausprobieren"
direkt in die Demo-Session — der Gate ist der eigentliche Conversion-Punkt dahinter.

---

## 2. Warum getrennt von der Landing

Der Gate sitzt **in der Lern-Engine**, nicht auf der Landing:
- `src/app/[locale]/lernen/[leId]/page.tsx` (LE-Runner)
- `src/app/[locale]/lernen/situation/[situationId]/page.tsx` (CE-Situation-Runner)
- ggf. neuer Wrapper/Komponente `src/components/learn/demo-gate.tsx`

Diese Dateien gehören den Content-/Engine-Chats → **eigener Chat, seriell** (Merge-Konflikte).

---

## 3. Mechanik

### Trigger
- **Anonym-Erkennung:** kein Auth-JWT-Cookie (vgl. `middleware.ts`; `/lernen` ist in `publicPaths`).
- **Zähler:** Anzahl abgeschlossener Steps für anonyme Nutzer mitzählen.
- **Gate-Punkt:** nach `gateAfterStep` (Default ~5–7), idealerweise **direkt vor** einem
  hochwertigen Moment (Branching-Szenario, KI-Feedback-Reveal, Fallauflösung) — nicht
  mitten in einer Trockenübung. Pro Situation konfigurierbar.
- **Persistenz:** `localStorage` `demoGate:{leId|situationId}` merkt sich, dass der Gate
  erreicht wurde (kein Reset bei Reload, kein erneutes Gratis-Spielen).

### Was am Gate passiert (Overlay)
Empfehlung **zwei Optionen** (A/B-fähig):
1. **Primär:** „Kostenlos weiterlernen" → `/register` (echter Account, Fortschritt wird
   gespeichert — wertvollster Lead).
2. **Sekundär:** „Nur E-Mail hinterlassen" → `WaitlistForm` mit
   `leadMagnet="gate"` + `source` aus URL (niedrigste Hürde).

Für den **Pilot** reicht zunächst Variante 2 (E-Mail), da Registrierung/Onboarding evtl.
noch nicht pilotfertig ist. Entscheidung mit Gründerin abstimmen.

### Nach Anmeldung
- Gate verschwindet, Session läuft an der Cliffhanger-Stelle weiter (Step-Index erhalten).
- `localStorage`-Flag auf „converted" → Gate erscheint nie wieder.

---

## 4. Wichtige Constraints

- **SEO darf nicht leiden:** Gate ist ein **Client-Overlay nach Interaktion** — der
  Session-Content bleibt server-gerendert/crawlbar. Kein Hard-Redirect, kein Server-Block.
- **Kein Tracker:** Conversion wird nur über `waitlist_signups.source`/`lead_magnet`
  gemessen (DSGVO, Server DE). Keine externen Analytics.
- **A11y:** Overlay mit Focus-Trap, `role="dialog"` + `aria-modal`, Esc schließt **nicht**
  (sonst Bypass). Hintergrund-Scroll sperren.
- **du-Anrede, echte Umlaute, alle 3 Sprachen** (`messages/{de,ar,tr}.json`, Namespace z. B. `gate`).

---

## 5. Offene Entscheidungen für den Gate-Chat

1. Gate-Punkt: fixer Step-Index vs. pro Situation kuratierter „bester Cliffhanger"?
2. Capture: nur E-Mail (Pilot) oder Account-Registrierung als Primär-CTA?
3. Wiederkehrer: anonymer Besucher, der schon konvertiert/abgelehnt hat — Gate sofort?
4. Content-Typ-Feld `gateAfterStep` in `content/_types.ts` (Pipeline-Sync 7 Stellen!)?

---

## 6. Bereits vorhandene Bausteine (wiederverwenden)

- `WaitlistForm` (`src/components/marketing/waitlist-form.tsx`) — `pdfHref`/`leadMagnet`
  optional, liest `source` clientseitig aus der URL. Direkt im Overlay einsetzbar.
- `POST /api/waitlist` + Tabelle `waitlist_signups` (E-Mail, language, source, leadMagnet) —
  in `middleware.ts` `apiPublicPaths` freigeschaltet.
