# HANDOFF — Kontext-Schnappschuss

> Saat-Datei für neue Chats. Hält die wichtigen Entscheidungen & den Stand fest,
> damit jeder neue Tab praktisch aus diesem Kontext heraus startet — parallel,
> beliebig oft, ohne Kollision.
>
> Lesereihenfolge im neuen Chat: CLAUDE.md → memory/MEMORY.md → specs/MASTER-BUILDPLAN.md → diese Datei.
>
> Stand: 2026-06-29

---

## 1. Wo das Projekt steht (Kurzfassung)

- **CE-02:** fertig, voll (0 FEHLT, pflege-gehärtet, deployed).
- **CE-04:** Kommunikations-Welle fertig — 5 Themen (v2) + 2 Situationen
  (`ls-demir-diabetes`, `ls-wagner-konflikt`), 3 Review-Zyklen, 0 FEHLT, deployed.
  **Offen:** CE-04-LE2 Gesundheitsförderung (5 Situations-Ordner existieren als leere
  Stubs ohne `phases.ts`: bgf-projekt, impfberatung, jansen-rauchen, okafor-sids, ostrowski-sturz).
- **CE-01, 03, 05–11:** nur v1-Bausteine-Pläne (`.md`), keine Situationen, nicht verdrahtet.
- **Renderer ist jetzt phasen-modell-agnostisch** (nicht mehr auf Pflegeprozess hartcodiert)
  → alle SituationsTypen funktionieren. Diese Investition ist getan.

Details & Reihenfolge: `specs/MASTER-BUILDPLAN.md`.

---

## 2. Deployment-Stand (WICHTIG — geändert!)

- **Vercel ist PAUSIERT** — User hat auf Hobby-Plan gewechselt. „This deployment is temporarily paused."
  Vercel-Links funktionieren NICHT mehr.
- **Live läuft auf Hetzner** (DE, DSGVO, Auto-HTTPS via Caddy/Let's Encrypt):
  - Server: `178.105.176.161`, SSH: `ssh -i ~/.ssh/hetzner_key root@178.105.176.161`
  - Domain (nip.io-Provisorium, IP mit **Bindestrichen**): `178-105-176-161.nip.io`
  - Container: `deploy-app-1`, `deploy-caddy-1`, `deploy-db-1` (alle up)
  - Deploy: `rsync content/` (+ `src/`/`messages/` wenn geändert) →
    `cd /opt/pflege/deploy && docker compose --env-file .env up -d --build app`
  - Live-Links:
    - https://178-105-176-161.nip.io/de
    - https://178-105-176-161.nip.io/de/lernen/situation/ls-demir-diabetes?ce=ce-04
    - https://178-105-176-161.nip.io/de/lernen/situation/ls-wagner-konflikt?ce=ce-04
- **Offen/empfohlen:** echte Domain statt nip.io (nur DNS-Eintrag + ein Wert in `deploy/.env` `DOMAIN=`).

---

## 3. Strategische Entscheidungen aus diesem Chat

- **LE2 Gesundheitsförderung NICHT als Nächstes** — zahlt nicht auf den USP ein,
  generisches Thema, hoher Aufwand. Kommunikations-Welle ist der wertvolle Teil und fertig.
- **Empfohlener nächster Hebel:** nicht „mehr bauen", sondern **das Gebaute mit echten
  Schülern pilotieren** (2 CEs + USP reichen). Alternativ CE-06 Akut als Demo-Wow, falls
  ein Pitch ansteht.
- **Projekt in Chats aufteilen:** 1 Chat = 1 Job, gemeinsame Wirbelsäule
  (`MASTER-BUILDPLAN.md`), Boot-Satz pro Chat. CE-Bau-Chats seriell (Merge-Konflikte),
  Infra/Dozentin/Design-Chats dürfen parallel.
- **Zeit-Schätzung:** Pilot-Tiefe alle CEs ~4–6 Wochen; volle CE-02-Tiefe ~2–3 Monate;
  erste pilotfähige Ergebnisse ~2 Wochen. Flaschenhals = Grounding + Dozentin-Review +
  Pflege-Härtung (nicht die Generierung).

---

## 4. Harte Constraints (unverhandelbar, gelten in JEDEM Chat)

- **Kein erfundener Content** — alles pflegekonform + standardsbelegt (Verbatim aus `recherche/`).
- **Echte Umlaute** ä/ö/ü/ß — nie ae/oe/ue/ss.
- **Immer „du"-Anrede** — nie „Sie".
- **Alle 3 Sprachen** gleichzeitig: `messages/{de,ar,tr}.json`.
- **Dev-Server NIE über Claude starten.** Deploy nur über Hetzner-CLI (s. o.), nicht Vercel-Webhook.
- **git push funktioniert aus der Sandbox** (getestet 2026-06-29, SSH-Remote, Key ohne
  Passphrase, GitHub erreichbar). Frühere „hängt"-Notiz war Altlast. Falls es je hängt:
  git wartet auf einen Prompt — mit `BatchMode=yes` / `GIT_TERMINAL_PROMPT=0` bricht es
  stattdessen sofort ab.
- **Validierung vor Commit:** `npx tsc --noEmit && npx vitest run && npm run build`.
- **Hetzner-API-Token** steht im Chatverlauf → User sollte ihn rotieren.

---

## 5. Nächste sinnvolle Schritte (Auswahl je Chat)

1. **Chat 0 — Pipeline-Härtung v10** (zuerst): v2-Bausteine-Generator, Coverage-Validator +
   Inline-Wissen als feste Pipeline-Stufen. Siehe `specs/PLAN-INLINE-WISSEN-2026-04-26.md`.
2. **CE-06 Akut** (Demo-Wow) bauen nach CE-Rezept (`MASTER-BUILDPLAN.md` §4).
3. **CE-01** (leicht, 18 LE) bauen.
4. **Infra-Chat:** echte Domain einrichten.
5. **Pilot vorbereiten** mit CE-02 + CE-04.
