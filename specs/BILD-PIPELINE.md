# Bild-Pipeline — Referenz

> Wie Bilder für die Pflege-Lernplattform generiert werden.

## Architektur

```
Content-Step (bildhinweis/imageUrl)
        ↓
generate-foto-prompts.ts    ← Erkennt Kategorie, baut Prompt
        ↓
foto-queue.json             ← Queue mit Prompts + Status
        ↓
gemini-direct-bot.ts        ← Playwright → Gemini Web → Bild
        ↓
public/images/content/le-{N}/{stepId}.png
```

## Kommandos

```bash
# 1. Prompts generieren (analysiert Steps, erkennt Bildkategorie)
npx tsx scripts/generate-foto-prompts.ts le-06

# 2. Prompts als Textdateien exportieren (optional, für manuelles Copy-Paste)
npx tsx scripts/generate-foto-prompts.ts le-06 --export

# 3. Bilder generieren via Gemini Browser-Automatisierung
#    Voraussetzung: Chrome mit --remote-debugging-port=9222
npx tsx scripts/gemini-direct-bot.ts le-06 --limit 10

# 4. Spezifische Anatomie-Bilder generieren (manuell)
npx tsx scripts/generate-anatomy-test.ts
```

## 4 Bildkategorien

| Kategorie | Stil | Aspect Ratio | Farben |
|-----------|------|-------------|--------|
| **anatomie** | Frank Netter, Aquarell-Shading | 3:4 (Hochformat) | Echte Lehrbuchfarben |
| **szene** | Flat Vector, Brilliant.org-Stil | 4:3 | Plattform-Palette |
| **prozedur** | 3-4 Panel-Sequenz | 16:9 (Breit) | Plattform-Palette |
| **geraet** | Isometrisch, technisch | 4:3 | Plattform-Palette |

## Farbregeln

### Anatomie — Echte Lehrbuchfarben (Netter/Sobotta/I Care)

| Gewebe | Farbe |
|--------|-------|
| Arterielles Blut | Leuchtend rot (#CC3333) |
| Venöses Blut | Dunkelblau (#334499) |
| Muskulatur | Lachsrosa / Rotbraun |
| Knochen | Elfenbein / Blassgelb |
| Knorpel | Hellblaugrau |
| Nerven | Gelb |
| Organe | Natürliche Organfarben |
| Fettgewebe | Warmgelb |
| Bindegewebe / Faszien | Weißgrau |

**WICHTIG:** Anatomie-Bilder nutzen KEINE Plattform-Farben (kein Dusty Rose, kein Sage Green). Echte Lehrbuchfarben, damit Schüler die gleiche Farbcodierung wie in I Care, Netter und Sobotta sehen.

### Szene/Prozedur/Gerät — Plattform-Palette

| Element | Farbe |
|---------|-------|
| Akzent (primär) | Dusty Rose (#C4877F) |
| Akzent (sekundär) | Sage Green (#6B8F71) |
| Hintergrund | Warm Cream (#fafaf9) |
| Konturen | Warm Gray (#78716c) |
| Erfolg | #6B8F71 |
| Warnung | #D4956A |
| Fehler | #C96B5C |

## Prompt-Struktur

Jeder Prompt wird so aufgebaut:

```
[KATEGORIE-STIL-PREFIX]     ← Definiert den visuellen Stil
    ↓
[SZENE-BESCHREIBUNG]        ← Was genau zeigen? (narrativ, nicht Keywords)
    ↓
[QUALITÄTS-REGELN]           ← Pflege-spezifische Korrektheit
    ↓
[CARE QUALITY RULES]         ← Kleidung, Diversität, Raum (nur für szene)
```

### Anatomie-Prompt — Best Practices

1. **Echte Lehrbuchfarben** benennen, nicht App-Farben
2. **Klinische Relevanz** für Pflegeschüler betonen, nicht chirurgische Tiefe
3. **Ansicht spezifizieren**: anterior, lateral, cross-section, sagittal
4. **Strukturen auflisten** die sichtbar sein müssen
5. **"No text, no labels"** — Gemini generiert trotzdem manchmal Labels

### Szene-Prompt — Best Practices

1. **Narrativ beschreiben**, nicht Keyword-Listen
2. **Diversität** explizit fordern (Geschlecht, Hautfarbe, Hijab)
3. **Pflegekorrektheit**: Kasack, keine Ringe, Haare zusammen
4. **Patient als aktiver Teilnehmer**, nie passiv
5. **Kamerawinkel** angeben (three-quarter, side view, close-up)

## Browser-Bot (gemini-direct-bot.ts)

### Voraussetzungen

```bash
# Chrome mit Remote Debugging starten
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

### Funktionsweise

1. Verbindet sich mit Chrome via CDP (Port 9222)
2. Öffnet `gemini.google.com/app` als neuen Chat
3. Fügt Prompt via `contentEditable.textContent` ein (schneller als Tippen)
4. Wartet auf Bildgenerierung (Loading-Spinner verschwunden + neues Bild)
5. Extrahiert Bild (3 Methoden: Canvas → Blob-Fetch → Element-Screenshot)
6. Speichert als PNG unter `public/images/content/le-{N}/`

### Bild-Extraktion — 3 Methoden

| # | Methode | Wann |
|---|---------|------|
| 1 | Canvas `toDataURL()` | Standard, funktioniert meist |
| 2 | `fetch(img.src)` → Blob → FileReader | Bei CORS-blockiertem Canvas |
| 3 | Playwright `element.screenshot()` | Letzter Fallback |

### Rate Limits

- Gemini Web (mit Pro-Abo): ~100-500 Bilder/Tag
- Gemini API (Free Tier): 0 Bilder (seit Dez 2025)
- Gemini API (mit Billing): ~$0.04/Bild, unbegrenzt

## Dateien

| Datei | Zweck |
|-------|-------|
| `scripts/generate-foto-prompts.ts` | Prompt-Generator (Types, Templates, Queue) |
| `scripts/gemini-direct-bot.ts` | Browser-Bot (Playwright, kein API Key) |
| `scripts/generate-anatomy-test.ts` | Manuelle Anatomie-Tests |
| `scripts/gemini-image-bot.ts` | Alt: Stagehand-Bot (braucht Anthropic Key) |
| `content/le-{N}/foto-queue.json` | Bild-Queue mit Status |
| `content/le-{N}/foto-prompts/` | Exportierte Prompt-Textdateien |
| `content/le-{N}/foto-prompts-batch.txt` | Alle Prompts in einer Datei |

## Workflow: Neue LE mit Bildern

```bash
# 1. Content generieren (Steps mit bildhinweis)
# 2. Prompts generieren
npx tsx scripts/generate-foto-prompts.ts le-XX

# 3. Chrome starten
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222

# 4. Bot starten (alle offenen Bilder)
npx tsx scripts/gemini-direct-bot.ts le-XX

# 5. Review auf Vercel
npx vercel --prod --yes
# → https://pflege-lernplattform.vercel.app/images/content/index.html
```
