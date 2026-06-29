# Organic-Social-Strategie — Pflege-Lernplattform

> Stand: 2026-06-29 · Ziel: **Waitlist/E-Mail-Liste aufbauen** über IG / Pinterest / TikTok
> Leitidee: Der Lern-Content der Plattform IST der Marketing-Rohstoff
> (jeder Wissensbaustein → Reel/Pin/Short).

---

## 0. Die Eckdaten (aus dem Briefing)

| Frage | Antwort |
|-------|---------|
| Hauptziel (3 Monate) | **Waitlist / E-Mail-Liste** |
| Zielgruppe | Pflegeschüler **DE + TR/AR parallel** |
| Kapazität | **5–10 Std/Woche, allein** |
| Ton & Gesicht | **Jung-nahbar, mit Gesicht** |
| Accounts | **Noch keine** (alles neu) |
| repurpose.io | **Noch nicht eingerichtet** |
| Assets | **Fast nichts** (kein Logo, kein fixer Name) |
| Capture-Punkt | **Existiert nicht** (Landing-Page ist B2B/„Sie") |

---

## 1. Der kritische Blocker: Capture-Punkt fehlt

**Befund:** `src/app/[locale]/page.tsx` ist eine B2B-Schul-Landingpage (siezt, Preise,
`mailto`-Kontakt). Es gibt KEINE E-Mail-Sammlung. Bei Ziel „Waitlist" verpufft ohne
Capture-Punkt jeder Klick.

**Lösung (Reihenfolge — VOR dem ersten Post):**

1. **Markenname + Handle festlegen.** „Pflege-Lernplattform" ist als Social-Handle tot
   (generisch, nicht merkbar). Braucht einen kurzen, sprechbaren Namen.
   → eigene Entscheidung, blockiert sonst Account-Anlage.
2. **Eine schlanke Waitlist-Landingpage** unter eigener Route (z. B. `/[locale]/early` oder
   eine Subdomain). du-Anrede, jung, EIN Versprechen + EIN E-Mail-Feld. Kann auf der
   bestehenden Hetzner-App liegen (Next.js-Route + API → Tabelle in der Postgres-DB,
   `deploy-db-1` läuft schon). DSGVO-konform, Server DE — passt zur Vision.
3. **Lead-Magnet** als Eintauschwert für die E-Mail (siehe §6). Ohne Magnet trägt eine
   Waitlist solo kaum.
4. **Link-in-Bio-Tool** (eine Seite, mehrere Links): Beacons oder Linktree (free).
   Pinterest braucht ohnehin Direkt-Links pro Pin.
5. **E-Mail-Tool:** Brevo (free bis 300 Mails/Tag, EU/DSGVO) statt Mailchimp (US).

> Faustregel: Erst Capture-Punkt + Lead-Magnet, DANN posten. 1.000 Views ohne
> Sammelpunkt = 0 Abonnenten.

---

## 2. Content-Säulen (4)

Jede Säule speist sich direkt aus `content/`. Reihenfolge = Posting-Mix.

### Säule A — „Fachbegriff entschlüsselt" (USP-Träger, 30 %)
Ein Fachbegriff, einfach erklärt, **mit TR/AR-Übersetzung** aus dem Glossar.
- Hook: „Dein Prüfer fragt: Was ist ein **Dekubitus**?" → Auflösung + Bild + DE/TR/AR.
- Warum: Das ist der USP, den **kein anderer Anbieter** hat (mehrsprachiges Fachglossar).
- Quelle: `content/ce-*/themen/*/glossar.ts`, Karteikarten.
- Format: Faceless-Karte ODER Gesicht-zu-Kamera. Save-stark → Pinterest-Gold.

### Säule B — „Würdest du richtig handeln?" (Interaktion, 30 %)
Pflege-Szenario als Denkfrage → Pause → Auflösung. Direkt aus den **Bausteinen** (Stufe 1
Denkfrage ist der Hook, Stufe 2/3 die Auflösung).
- Hook: „Frau M., 78, liegt nachts am Boden. Was machst du ZUERST?"
- Warum: Kommentar-Treiber („B!" „nein, A!"), Stitch-/Duett-fähig, save-würdig.
- Quelle: `content/ce-02/situationen/*` + `bausteine.ts` (Stufe1 `frage`).

### Säule C — „Ehrlich über die Ausbildung" (Bindung, mit Gesicht, 25 %)
Persönlich, du vor der Kamera: Durchhalten, B1-Deutsch, Migration, Prüfungsangst, „warum
ich das baue". Trägt die parasoziale Bindung, die solo + Gesicht den Vorteil bringt.
- Warum: Reichweite ohne Gesicht skaliert, aber **Vertrauen/Abos** kommen über Persönlichkeit.
- Quelle: du selbst, Vision-Story, echte Schüler-Pains.

### Säule D — „Lern-Hack / Prüfungs-Tipp" (Waitlist-Treiber, 15 %)
Lernmethode, Spaced Repetition, Karteikarten, Prüfungsformat — und am Ende:
„Die App macht das automatisch für dich → Link in Bio".
- Warum: Höchste **Save-Rate** und natürlichster Übergang zum Lead-Magnet.
- Quelle: VISION.md (adaptiv, Spaced Repetition), `content/ce-02/pruefung/*`.

---

## 3. Kanal-Prioritäten

| Prio | Kanal | Rolle | Warum |
|:----:|-------|-------|-------|
| 1 | **TikTok** | **Master-Quelle** + Reichweite | Stärkste organische Reichweite ohne Follower, jung, du+Gesicht passt. Quelle für repurpose. |
| 1 | **Instagram Reels** | Reichweite + Bindung | Zweitkanal, gleiche Videos. Stories für Nähe, Bio-Link für Waitlist. |
| 2 | **Pinterest** | **Evergreen → Waitlist** | Jeder Pin trägt einen Direkt-Link. Säule A+D als statische Karten. Sucht-getrieben, lange Halbwertszeit. Treibt Waitlist passiv. |
| 3 | **RSS / Blog** | repurpose-Futter + SEO | Optional Phase 2: Bausteine als kurze Web-Artikel → RSS als Quelle für repurpose + Google-Sichtbarkeit. |

**TR/AR-Strategie (Start, nicht ab Tag 1 dritteln):**
- Phase 1 (Tag 1–30): **DE-Hauptkanal**, aber Säule A IMMER mit TR/AR-Wort im Bild/Untertitel
  → bedient den USP, ohne Aufwand zu verdreifachen.
- Phase 2 (ab Monat 2): Wenn DE-Kanal Traktion zeigt, **separater TR- bzw. AR-Kanal**, der
  die besten DE-Videos mit übersetztem Voiceover/Untertitel recycelt.

---

## 4. repurpose.io-Flow — eine Produktion → viele Kanäle

```
                 ┌─────────────────────────────┐
   DU filmst →   │  Upload zu TikTok (nativ)   │   ← der EINE Produktions-Akt
                 └──────────────┬──────────────┘
                                │  repurpose.io zieht das Video
                                │  (entfernt TikTok-Watermark)
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
  Instagram Reels         YouTube Shorts          Facebook Reels
   (auto-publish)          (auto-publish)          (optional)

  Pinterest = SEPARAT (statische Karten/Idea Pins, nicht aus dem Reel) —
  bestes Format dort sind Karten mit Text + Direkt-Link, manuell oder via Canva-Bulk.
```

**Setup-Schritte:**
1. repurpose.io-Account, Source = **TikTok-Profil** (zuverlässigste Quelle für Gesicht-Videos).
2. Destinations verbinden: IG (Reels), YouTube (Shorts), optional FB.
3. Regel: „Watermark entfernen", Caption-Template + Hashtag-Set pro Kanal.
4. **Pinterest NICHT** über repurpose-Video — dort separat statische Karten (Canva) posten,
   weil Pinterest Sucht-/Link-getrieben ist, nicht Reel-getrieben.
5. 1× wöchentlich Batch: 3–4 Videos filmen → über die Woche getaktet hochladen
   (TikTok nativer Scheduler ODER repurpose-Scheduling).

**Effekt:** 1 Filmtag/Woche (≈2–3 h) → ~4 Videos × 3 Kanäle = 12 Posts. Das passt in
5–10 Std/Woche inkl. Schnitt + Community-Antworten.

---

## 5. Wochen-Rhythmus (passt in 5–10 Std)

| Tag | Aktivität | Zeit |
|-----|-----------|------|
| Mo | **Filmtag**: 3–4 Reels (Säule A/B/C/D gemischt) batchen | 2,5–3 h |
| Mo | Schnitt + Untertitel (CapCut), TikTok-Upload + Scheduling | 1,5–2 h |
| Mo | repurpose.io verteilt automatisch → IG/Shorts | 0 h (auto) |
| Di–So | 1 Post/Tag geht live (geplant); täglich 15–20 Min Community (Kommentare, DMs) | ~2 h/Woche |
| Mi | 2–3 Pinterest-Karten (Säule A/D) aus Canva-Template | 0,5 h |
| So | 30-Min-Review: Was lief? Nächste Woche planen | 0,5 h |

**Frequenz-Ziel:** 1 Post/Tag pro Kanal (TikTok+IG), 3 Pins/Woche. Konstanz > Menge.

---

## 6. Lead-Magnet-Ideen (Eintauschwert für die E-Mail)

Direkt aus `content/` baubar — kein neuer Content nötig:
1. **„100 Pflege-Fachbegriffe DE/TR/AR als Karteikarten-PDF"** — aus Glossar generiert.
   Trifft USP + Zielgruppe exakt. **Top-Empfehlung.**
2. **„Prüfungs-Spickzettel: Die 7 wichtigsten Expertenstandards (DNQP)"** — aus CE-02.
3. **„Frühen Zugang sichern" (klassische Waitlist)** — Early-Access + gratis Premium-Monat
   bei Launch. Funktioniert nur MIT einem der PDFs als Sofort-Belohnung.

---

## 7. Welche Lern-Snacks zuerst recyceln (konkret, alle live)

Priorisiert nach Hook-Stärke + USP-Bezug:

| # | Snack/Baustein | Quelle | Säule | Hook |
|---|----------------|--------|-------|------|
| 1 | **Rogers: Angst vor OP** | `ce-04/themen/gespraechsfuehrung` | B/C | „Patient hat Angst vor der OP. Du denkst: 'Routine.' — Falsch. Mach DAS." |
| 2 | **Dekubitus erklärt + DE/TR/AR** | `ce-02/themen/dekubitus-prophylaxe` | A | „Dein Prüfer fragt: Was ist ein Dekubitus? (auf 3 Sprachen)" |
| 3 | **Frau M. nächtlicher Sturz** | `ce-02/situationen/frau-m-nacht-sturz` | B | „78, nachts am Boden. Was machst du ZUERST? A/B/C" |
| 4 | **Kultursensible Kommunikation** | `ce-04/themen/kultursensible-kommunikation` | A/C | Direkt an TR/AR-Zielgruppe — Spiegel-Effekt, hohe Bindung |
| 5 | **Konflikt-Deeskalation** | `ce-04/themen/konflikt-deeskalation` | B | „Angehöriger schreit dich an. 3 Sätze, die deeskalieren." |
| 6 | **Essen anreichen / Aspiration** | `ce-02/themen/essen-anreichen` | B | „Diesen 1 Fehler beim Essenanreichen macht fast jeder Azubi." |
| 7 | **Blasenkatheter steril** | `ce-02/themen/blasenkatheter` | A/B | „steril vs. unsteril — verwechselst du das, ist es vorbei." |

---

## 8. 30-Tage-Posting-Kalender (TikTok+IG, 1 Post/Tag)

> Legende Säule: A=Fachbegriff · B=Szenario · C=Gesicht/Story · D=Lern-Hack
> Pinterest: 3×/Woche separat (Mi/Sa A+D-Karten).

**Woche 0 (Vorbereitung, KEIN Post):** Name+Handle, Accounts anlegen, Waitlist-Seite +
Brevo + Link-in-Bio, Lead-Magnet-PDF #1 bauen, repurpose.io einrichten, 1. Filmtag.

| Tag | Säule | Thema (Snack) | CTA |
|:---:|:---:|----------------|-----|
| 1 | C | „Ich baue eine App, die den Theorieunterricht ersetzt — warum" (Story/Intro) | Folgen |
| 2 | A | Dekubitus DE/TR/AR | Save |
| 3 | B | Frau M. Sturz — was zuerst? | Kommentar A/B/C |
| 4 | D | „Warum du Karteikarten FALSCH nutzt" (Spaced Repetition) | Link in Bio (PDF) |
| 5 | A | Aspiration/Essen anreichen Begriff | Save |
| 6 | B | Rogers: Angst vor OP | Kommentar |
| 7 | C | „Pflegeschüler mit B1-Deutsch? Das ist dein Vorteil" | Folgen |
| 8 | A | Dyspnoe DE/TR/AR | Save |
| 9 | B | Konflikt-Deeskalation: Angehöriger schreit | Kommentar |
| 10 | D | „3 Lern-Hacks fürs Pflege-Examen" | Link in Bio |
| 11 | A | Sterilität Katheter | Save |
| 12 | B | Kultursensible Kommunikation (Mini-Szenario) | Teilen |
| 13 | C | „Das nervt mich an Pflegeschulen" (Pain/Haltung) | Folgen |
| 14 | A | Expertenstandard DNQP — 1 Begriff | Save |
| 15 | D | Lead-Magnet hart pushen: „100 Begriffe DE/TR/AR gratis" | Link in Bio |
| 16 | B | Frau M. — Fortsetzung/Konsequenz | Kommentar |
| 17 | A | Pneumonieprophylaxe Begriff | Save |
| 18 | C | „Mein Lerntag mit der App" (Behind-the-scenes Demo) | Folgen |
| 19 | B | Essen anreichen — der 1 Fehler | Kommentar |
| 20 | D | „So lernst du 11 CE ohne Lehrer" | Link in Bio |
| 21 | A | Thrombose vs. Embolie DE/TR/AR | Save |
| 22 | B | Rogers/Empathie Mini-Case | Kommentar |
| 23 | C | Q&A: häufigste Frage aus Kommentaren beantworten | Folgen |
| 24 | A | Vitalzeichen-Normwerte (Karte) | Save |
| 25 | B | Deeskalation Teil 2 | Teilen |
| 26 | D | „Prüfungsangst? 1 Methode" | Link in Bio |
| 27 | A | Obstipation/Begriff DE/TR/AR | Save |
| 28 | C | „30 Tage gepostet — das hab ich gelernt" (Meilenstein) | Folgen |
| 29 | B | Bestes Szenario aus Woche 1–3 neu aufgelegt (Top-Performer) | Kommentar |
| 30 | D | Waitlist-Sprint: „Letzte Plätze früher Zugang" | Link in Bio |

**Recycling-Prinzip:** Jedes Video = 1 TikTok + 1 Reel + 1 Short (auto via repurpose).
Top-Performer nach 2 Wochen mit neuem Hook re-posten (Tag 29). Säule-A-Videos zusätzlich
als Pinterest-Karte.

---

## 9. Erfolgs-Messung (wöchentlich, 30-Min-Review)

**Nordstern = Waitlist-Anmeldungen/Woche.** Nachgelagert:
- Bio-Link-Klicks (Beacons/Linktree-Statistik)
- Save-Rate (Indikator für Wert; Säule A/D sollten führen)
- Follower-Wachstum (sekundär — Abos ≠ Ziel, E-Mails sind das Ziel)
- Bester Hook-Typ → mehr davon produzieren

**Realistische Erwartung:** TikTok-Reichweite ist volatil; ein „Treffer" unter 20 Videos
ist normal. Konstanz 30 Tage durchziehen, DANN bewerten — nicht nach 5 Posts.

---

## 10. Offene Entscheidungen (du)

1. **Markenname + Handle** — blockiert Account-Anlage.
2. **Waitlist-Seite:** auf Hetzner-App integrieren (empfohlen, DSGVO+kostenlos) oder
   externes Tool (Carrd/Beacons)?
3. **Welcher Lead-Magnet zuerst** — Empfehlung: das DE/TR/AR-Karteikarten-PDF (#1).
4. **Gesicht-Umfang:** nur Säule C mit Gesicht (Rest faceless-Karten) ODER bei A/B auch?
