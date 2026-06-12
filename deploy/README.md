# Deploy — Eigener Hetzner-VPS (DSGVO, DE)

Eigener dedizierter Server für die Pflege-Lernplattform. **Nicht** auf der lumeries-Box
mitlaufen (Minderjährigen-PII + gesundheitsnah + AVV mit Schulen → Isolation).

Stack: **Next.js standalone (app)** + **lokaler Postgres (db)** + **Caddy (Auto-SSL)**,
orchestriert per `docker compose`. KI läuft extern (Nebius), kein Google Analytics.

---

## 0. Voraussetzungen (einmalig, durch Betreiberin)

- **Hetzner-Cloud-Projekt** (eigenes, getrennte Billing/Firewall) + **API-Token**.
- **Server**: CX22 (2 vCPU, 4 GB, ~€4–5/Mon) reicht für den Pilot. Standort: **Nürnberg/Falkenstein (DE)**. Image: Ubuntu 24.04.
- **Domain** (z. B. `lernen.<schule>.de`) mit A-Record auf die Server-IP (und optional `www`).
- **SSH-Key** hinterlegt.

### Server provisionieren (Variante A: hcloud CLI)
```bash
brew install hcloud                      # lokal
hcloud context create pflege             # Token einfügen
hcloud server create \
  --name pflege-prod --type cx22 --image ubuntu-24.04 \
  --location nbg1 --ssh-key <dein-key-name>
```
(Variante B: in der Hetzner-Cloud-Console klicken — gleiches Ergebnis.)

### Firewall (Hetzner Cloud Firewall)
Eingehend nur: **22 (SSH), 80, 443**. Alles andere zu. Postgres (5432) **nie** öffentlich.

---

## 1. Server vorbereiten

```bash
ssh root@<SERVER_IP>
apt update && apt -y upgrade
# Docker + Compose-Plugin
curl -fsSL https://get.docker.com | sh
# Unattended-Security-Updates
apt -y install unattended-upgrades && dpkg-reconfigure -plow unattended-upgrades
```

## 2. Code + Konfiguration aufspielen

```bash
mkdir -p /opt/pflege && cd /opt/pflege
git clone <REPO_URL> .            # oder rsync vom lokalen Rechner
cp deploy/.env.example deploy/.env
# deploy/.env mit echten Werten füllen (Secrets generieren):
#   openssl rand -base64 48           -> JWT_SECRET, POSTGRES_PASSWORD
#   npx web-push generate-vapid-keys  -> VAPID-Schlüsselpaar
nano deploy/.env
```

## 3. Starten

```bash
cd /opt/pflege/deploy
docker compose --env-file .env up -d --build
docker compose ps
```
Caddy holt automatisch ein Let's-Encrypt-Zertifikat (A-Record muss vorher stehen).

## 4. Datenbank-Schema einspielen (erster Start)

Noch keine generierten Migrations vorhanden → Schema direkt pushen (einmalig):
```bash
# DATABASE_URL auf den laufenden db-Container zeigen lassen:
export DATABASE_URL="postgres://<USER>:<PW>@localhost:5432/<DB>"   # via temporär gemapptem Port
# ODER aus dem app-Container heraus, falls drizzle-kit verfügbar gemacht wird.
npm run db:push
```
> Sauberer für später: `npm run db:generate` (Migrationsdateien nach `drizzle/`) +
> `npm run db:migrate` im Deploy. Für den Pilot genügt `db:push`.

## 5. Validierung

```bash
curl -I https://<DOMAIN>            # 200 + gültiges TLS
docker compose logs -f app
```

---

## Updates ausrollen

```bash
cd /opt/pflege && git pull
cd deploy && docker compose --env-file .env up -d --build
```

## Backups (vor Pilot einrichten)

```bash
# Täglicher pg_dump (Cron):
docker compose exec -T db pg_dump -U <USER> <DB> | gzip > /opt/pflege/backups/$(date +%F).sql.gz
```

## Sicherheits-/DSGVO-Notizen
- Postgres nur im internen Docker-Netz (`expose`, kein `ports`-Mapping nach außen).
- Keine Tracker, kein GA. KI-Anfragen anonymisiert an Nebius (EU).
- `deploy/.env` enthält PII-relevante Secrets → nie committen, Dateirechte `chmod 600`.
- Server-Standort DE (Hetzner) — Daten verlassen DE nicht.
