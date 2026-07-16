# Start-Prompt — Pilot-UX v2: „Der Tutor wird spürbar"

> In den neuen Chat kopieren. Boot-Sequenz (CLAUDE.md) läuft eh; das hier ist der Resume-Anker.
> Details + Tooling: `memory/project_pilot_ux_haertung.md` (Resume-Anker im Memory-Index).

## Wo wir stehen (2026-07-16)

**CE-06 „Sahne-Pilot" ist live auf carovia.de und poliert.** Branch `feat/ce-06-wissens-tabs-redesign`
(gepusht, letzter Commit `da1bd1d`). Gestern/heute erledigt: B1 komplett + freigegeben, Arabisch-Glossar
(102 Begriffe DE/AR) + SpracheSheet (C1/B1 + Muttersprache im Player), Demo-Pfad = Wagner + Ríos, und
**12 UX-Fixes aus Dozentin-Review + Live-Walkthrough** (Feedback Rot→Amber + neutraler CTA, ehrliches
Lob ohne „nah dran", Frage-Dopplung entfernt, EINE step-genaue Fortschrittsleiste „1/17" mit
Phasen-Markern, Header entdoppelt, /mitmachen im App-Design, Phasen-i18n de/ar/tr). Alles deployed
+ per Screenshot verifiziert.

**Walkthrough-Tooling steht** (Memory: JWT-Session minten, lokale Prod-Instanz Port 3210+, Playwright
mit Tastatur-Steuerung wegen Glossar-Tap-Falle) — damit kann jeder Umbau sofort selbst durchgeklickt
und geprüft werden. Vorher/Nachher-Doku: https://claude.ai/code/artifact/ca41e484-61a0-4428-b359-48c541e7ad17

## Auftrag: 4 Wetten + 1 Architektur-Idee (Waleria hat alle freigegeben)

Reihenfolge-Empfehlung: **1 → 4 → 3 → 5 (Design zuerst) → 2**. Nach jedem Punkt: Walkthrough +
Screenshots an Waleria, Commit, Deploy nach Freigabe.

### 1. „Erklär mir das anders"-Button (USP-Moment, zuerst)
Auf dem AnswerSheet (Feedback nach falscher Antwort) ein Button, der via Nebius/Llama eine
ALTERNATIVE Erklärung generiert (andere Strategie: Analogie, einfachere Sprache, Schritt-für-Schritt —
VISION „Strategiewechsel"). **Pflicht:** RAG-gebunden an die CE-Inhalte (Kernfakten/Erklärungen der
Situation als Kontext mitgeben), anonymisiert (DSGVO: kein Name, keine User-ID — wie ki-chat),
ehrlicher Fallback („Das steht nicht in deinem Lernstoff — frag deine Lehrerin"), Loading/Fehler
graceful. Bestehende Anbindung: `src/app/api/ki-chat/route.ts` als Vorlage.

### 4. Klassenzimmer-Härtung (vor dem echten Pilot-Termin)
Szenario: 25 Phones, schlechtes Schul-WLAN. Kern-Loop (Situation durchspielen) muss OHNE Netz laufen:
Pilot-Situationen (Wagner, Ríos, ggf. alle CE-06) offline vorcachen (PWA/Service Worker existiert —
prüfen was er cached), KI-Features degradieren sauber (Button zeigt „gerade offline" statt Spinner),
Progress-Sync queued. Einmal mit gedrosseltem Netz (Playwright/DevTools throttling) testen.

### 3. Wiedereinstieg + Etappen
(a) Kehrt ein Schüler mitten in einer Situation zurück → Ein-Zeiler-Recap („Bisher: Stillstand erkannt,
Team alarmiert") statt kaltem Step 11. Quelle: durchlaufene Phasen + transition-Texte.
(b) An Phasengrenzen freundlicher Etappen-Moment („Phase 2 von 5 geschafft — kurz durchatmen oder
weiter?"). Lokaler State existiert (localStorage-Fortschritt).

### 5. Walerias Idee: Wissen IN die Steps statt Lese-Wand davor (ERST DESIGN, DANN CODE)
Heute: Wissens-Tab = eigener 215–327-Wörter-Lese-Step vor der Anwendung (gemessen „too much").
Idee: Wissen on-demand am Anwendungs-Step abrufbar (z. B. „Spickzettel"-Chip/Panel am Step, der den
zugehörigen inlineWissen-Baustein öffnet), spielerisch während der Situation lernen.
**Vorgehen:** 2–3 Design-Optionen als Mockup/Screenshot bauen (nicht live), Waleria entscheidet.
**Achtung:** berührt Didaktik (Wissen-vor-Anwendung-Prinzip in step-inline-wissen.tsx-Doku!),
Content-Pipeline (`.claude/rules/pipeline-sync.md` — 7 Stellen), Budget-Modell und ggf. Play-then-Gate
(Lese-Steps zählen nicht als Antwort-Steps). Kein Blindumbau — Plan mit Optionen vorlegen.

### 2. Eine echte adaptive Mechanik an Wagner (größte Wette, eigener Fokus)
Schnelle+richtige Antworten (Antwortzeit-Infra: `analysiereFehler`, Kompetenz-Register) → Skip-Angebot
(„Du kennst das — direkt zum schweren Fall?"); Kämpfen → Zwischenschritt oder aktives B1-Angebot.
Erst kurzen Plan vorlegen (welches Signal, welche Schwelle, welche Reaktion), dann bauen.

### Kleinere freigegebene Ideen (einstreuen, wo passend)
- Sprache proaktiv anbieten: bei `locale=ar` oder erkennbarem Kämpfen einmalig fragen (SpracheSheet öffnen).
- Analytics: Verweildauer pro Step + Abbruchpunkt (first-party, DSGVO, wie funnel/track).
- 1 Sprech-Moment pro Situation (TTS existiert; Whisper-STT prüfen).
- Dozentin-View „das hat die Klasse heute geschafft" (schlank).

## Offen aus voriger Session (nicht vergessen)
- **B**: Branching-Frage-Dopplung (context-Ende vs. fragetext) — Content-Batch, alle 11 Situationen.
- **ZIP design/steps-v1**: Entscheidung offen; Empfehlung Option A (Bundle-Stil bleibt, ZIP als
  Steinbruch für RTL-Fixes text-start/ms-, Abdimmen, Chip-Morph). Vergleich:
  https://claude.ai/code/artifact/7290fd17-4bd4-4049-9d5c-c6abd765ac93
- AR-Muttersprachler-Gegenlese + DSO-2024-Zahl (FRAGEN-GRUENDERIN, keine Blocker).
- Uncommitted im Working Tree (bewusst): .claude/settings.local.json, Löschungen design-paletten-*/ralph/*,
  4 untracked specs (CROSS-CE-KONZEPTREGISTER, DIDAKTIK-WISSENSNETZ, KI-DATENSATZ-STRATEGIE,
  KOMPETENZ-NACHWEIS-BEZIRKSREGIERUNG) — nicht Teil dieser Arbeit.

## Leitplanken
- Kein git push / Deploy ohne Waleria-Freigabe (Deploy: scripts/deploy-hetzner.sh, Verifikation per
  docker exec grep im Server-Build, NICHT curl+grep — Details im Memory).
- Dev-Server NIE über Claude starten — lokale Prod-Instanz-Methode nutzen (Memory).
- Gegroundeter Content (Kerntexte etc.) nur nach Abstimmung anfassen; echte Umlaute; „du"-Anrede;
  jede neue Komponente ≥1 Test; nach jedem Schritt: Walkthrough-Screenshots an Waleria.
- Validierung vor Commit: npx tsc --noEmit && npx vitest run && npm run build (Lint: nur keine NEUEN Errors).
