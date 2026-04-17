#!/usr/bin/env npx tsx
/**
 * Gemini Direct Bot — Playwright ohne Stagehand
 *
 * Generiert Bilder via Gemini Web (gemini.google.com) direkt mit Playwright-Selektoren.
 * Kein Anthropic API Key nötig!
 *
 * Voraussetzung: Chrome mit Remote Debugging:
 *   /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
 *
 * Usage:
 *   npx tsx scripts/gemini-direct-bot.ts le-06 --limit 5
 */

import { chromium, type Page } from 'playwright'
import * as fs from 'fs'
import * as path from 'path'

interface FotoPrompt {
  stepId: string
  session: string
  trigger: string
  beschreibung: string
  prompt: string
  promptEn: string
  svgTyp: string
  bildkategorie?: string
  aspectRatio?: string
  prioritaet: string
  status: string
  outputPath: string
  imageUrl?: string
  referenzBild?: string
}

// ============================================================================
// Gemini-Selektoren (Stand April 2026)
// ============================================================================

const SELECTORS = {
  // Chat Input — verschiedene Varianten die Gemini nutzt
  chatInput: [
    'div[contenteditable="true"][aria-label*="prompt"]',
    'div[contenteditable="true"][aria-label*="Enter"]',
    'div[contenteditable="true"][aria-label*="eingabe"]',
    'div.ql-editor[contenteditable="true"]',
    'rich-textarea div[contenteditable="true"]',
    'div[contenteditable="true"]',
  ],
  // Send Button
  sendButton: [
    'button[aria-label*="Send"]',
    'button[aria-label*="Senden"]',
    'button[aria-label*="submit"]',
    'button.send-button',
    'button[mattooltip*="Send"]',
    'button[mattooltip*="Senden"]',
  ],
  // Loading indicator
  loading: [
    'mat-spinner',
    '[role="progressbar"]',
    '.loading-indicator',
    '[aria-busy="true"]',
    '.response-streaming',
  ],
}

async function findElement(page: Page, selectors: string[]): Promise<string | null> {
  for (const sel of selectors) {
    const count = await page.locator(sel).count()
    if (count > 0) return sel
  }
  return null
}

async function waitForNoLoading(page: Page, maxWaitMs = 120000): Promise<void> {
  const start = Date.now()
  // Warte erstmal 3 Sekunden bis Loading startet
  await page.waitForTimeout(3000)

  while (Date.now() - start < maxWaitMs) {
    let isLoading = false
    for (const sel of SELECTORS.loading) {
      const count = await page.locator(sel).count()
      if (count > 0) {
        isLoading = true
        break
      }
    }
    if (!isLoading) {
      // Extra 2s warten für Bild-Rendering
      await page.waitForTimeout(2000)
      return
    }
    await page.waitForTimeout(2000)
  }
}

async function countLargeImages(page: Page): Promise<number> {
  return page.evaluate(() => {
    let count = 0
    document.querySelectorAll('img').forEach((img) => {
      const w = img.naturalWidth || img.width
      const h = img.naturalHeight || img.height
      const src = img.src || ''
      if (w > 100 && h > 100 && (src.startsWith('blob:') || src.startsWith('data:image') || src.includes('googleusercontent'))) {
        count++
      }
    })
    return count
  })
}

async function extractLastImage(page: Page): Promise<string | null> {
  return page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'))
    const big = imgs.filter((img) => {
      const w = img.naturalWidth || img.width
      const h = img.naturalHeight || img.height
      const src = img.src || ''
      return w > 100 && h > 100 && (src.startsWith('blob:') || src.startsWith('data:image') || src.includes('googleusercontent'))
    })
    if (big.length === 0) return null
    const img = big[big.length - 1]
    try {
      const c = document.createElement('canvas')
      c.width = img.naturalWidth || img.width
      c.height = img.naturalHeight || img.height
      const ctx = c.getContext('2d')
      if (ctx) {
        ctx.drawImage(img, 0, 0)
        return c.toDataURL('image/png').split(',')[1]
      }
    } catch { /* CORS */ }
    if (img.src.startsWith('data:image')) return img.src.split(',')[1]
    return null
  })
}

// ============================================================================
// Einzelnes Bild generieren
// ============================================================================

async function generateImage(page: Page, promptText: string, outputPath: string, label: string): Promise<boolean> {
  try {
    // 1. Neuen Gemini Chat öffnen
    console.log(`    ${label}: Neuer Chat...`)
    await page.goto('https://gemini.google.com/app', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    })
    await page.waitForTimeout(4000)

    // Cookie-Consent wegklicken
    const cookieBtn = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'))
      const btn = btns.find((b) => {
        const t = b.textContent?.trim().toLowerCase() || ''
        return t.includes('alle akzeptieren') || t.includes('accept all') || t.includes('i agree')
      })
      if (btn) { btn.click(); return true }
      return false
    })
    if (cookieBtn) await page.waitForTimeout(1500)

    // 2. Chat Input finden
    const inputSel = await findElement(page, SELECTORS.chatInput)
    if (!inputSel) {
      console.log(`    ${label}: Kein Chat-Input gefunden!`)
      // Debug: Screenshot machen
      await page.screenshot({ path: `debug-gemini-${Date.now()}.png` })
      return false
    }

    // 3. Baseline: Vorhandene Bilder zählen
    const knownImages = await countLargeImages(page)

    // 4. Prompt eingeben — Clipboard-Methode (schneller + zuverlässiger als tippen)
    console.log(`    ${label}: Prompt einfügen (${promptText.length} Zeichen)...`)

    // Fokus auf Input
    await page.locator(inputSel).first().click()
    await page.waitForTimeout(500)

    // Text via Clipboard einfügen (schnell + kein Zeichenlimit)
    await page.evaluate((text) => {
      const input = document.querySelector('div[contenteditable="true"]')
      if (input) {
        input.textContent = text
        input.dispatchEvent(new Event('input', { bubbles: true }))
      }
    }, promptText)
    await page.waitForTimeout(1000)

    // 5. Send Button finden und klicken
    const sendSel = await findElement(page, SELECTORS.sendButton)
    if (sendSel) {
      await page.locator(sendSel).first().click()
    } else {
      // Fallback: Enter drücken
      await page.keyboard.press('Enter')
    }

    // 6. Warte auf Antwort (Loading-Spinner verschwindet)
    console.log(`    ${label}: Warte auf Bild (max 120s)...`)
    await waitForNoLoading(page, 120000)

    // 7. Neues Bild suchen
    const newImages = await countLargeImages(page)
    if (newImages <= knownImages) {
      console.log(`    ${label}: Kein neues Bild generiert (${knownImages} → ${newImages})`)
      // Debug screenshot
      await page.screenshot({ path: `debug-no-image-${label}.png` })
      return false
    }

    // 8. Bild extrahieren — 3 Methoden (Canvas → Fetch → Screenshot)
    const fullPath = path.join(process.cwd(), 'public', outputPath)
    fs.mkdirSync(path.dirname(fullPath), { recursive: true })

    // Methode 1: Canvas toDataURL
    let imageData = await extractLastImage(page)
    if (imageData) {
      fs.writeFileSync(fullPath, Buffer.from(imageData, 'base64'))
      const size = fs.statSync(fullPath).size
      console.log(`    ${label}: ✅ ${outputPath} (${(size / 1024).toFixed(1)} KB)`)
      return true
    }

    // Methode 2: Fetch blob URL
    console.log(`    ${label}: Canvas CORS, versuche Blob-Fetch...`)
    imageData = await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('img'))
      const big = imgs.filter(img => (img.naturalWidth || img.width) > 100 && (img.naturalHeight || img.height) > 100)
      if (big.length === 0) return null
      const img = big[big.length - 1]
      try {
        const resp = await fetch(img.src)
        const blob = await resp.blob()
        return new Promise<string | null>((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve((reader.result as string).split(',')[1] || null)
          reader.readAsDataURL(blob)
        })
      } catch { return null }
    })
    if (imageData) {
      fs.writeFileSync(fullPath, Buffer.from(imageData, 'base64'))
      const size = fs.statSync(fullPath).size
      console.log(`    ${label}: ✅ ${outputPath} (${(size / 1024).toFixed(1)} KB) [fetch]`)
      return true
    }

    // Methode 3: Element-Screenshot
    console.log(`    ${label}: Blob-Fetch fehlgeschlagen, versuche Screenshot...`)
    try {
      const imgEl = page.locator('img').last()
      const box = await imgEl.boundingBox()
      if (box && box.width > 100 && box.height > 100) {
        await imgEl.screenshot({ path: fullPath })
        const size = fs.statSync(fullPath).size
        console.log(`    ${label}: ✅ ${outputPath} (${(size / 1024).toFixed(1)} KB) [screenshot]`)
        return true
      }
    } catch { /* ignore */ }

    console.log(`    ${label}: ❌ Alle Extraktionsmethoden fehlgeschlagen`)
    return false

  } catch (e) {
    console.log(`    ${label}: ❌ ${(e as Error).message.substring(0, 100)}`)
    return false
  }
}

// ============================================================================
// Main
// ============================================================================

async function main() {
  const leId = process.argv[2]
  const limitArg = process.argv.indexOf('--limit')
  const limit = limitArg >= 0 ? parseInt(process.argv[limitArg + 1]) : Infinity

  if (!leId || !/^le-\d{2}$/.test(leId)) {
    console.log('Usage: npx tsx scripts/gemini-direct-bot.ts <le-id> [--limit N]')
    process.exit(1)
  }

  const queuePath = path.join(process.cwd(), 'content', leId, 'foto-queue.json')
  if (!fs.existsSync(queuePath)) {
    console.log(`Erst: npx tsx scripts/generate-foto-prompts.ts ${leId}`)
    process.exit(1)
  }

  const prompts: FotoPrompt[] = JSON.parse(fs.readFileSync(queuePath, 'utf-8'))
  const offene = prompts.filter((p) => p.status === 'offen')

  console.log(`\n${'═'.repeat(60)}`)
  console.log(`🎨 Gemini Direct Bot (Playwright, kein Stagehand)`)
  console.log(`${'═'.repeat(60)}`)
  console.log(`  LE: ${leId} | Offen: ${offene.length} | Limit: ${limit === Infinity ? 'alle' : limit}`)

  if (offene.length === 0) {
    console.log('  Alle Bilder bereits generiert!')
    process.exit(0)
  }

  // Mit Chrome CDP verbinden
  let browser
  try {
    browser = await chromium.connectOverCDP('http://localhost:9222')
    console.log(`  Chrome verbunden ✅`)
  } catch {
    console.log('  ❌ Chrome nicht erreichbar auf Port 9222!')
    console.log('  Starte Chrome mit:')
    console.log('  /Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --remote-debugging-port=9222')
    process.exit(1)
  }

  // Ersten Browser-Context und Page nutzen
  const contexts = browser.contexts()
  if (contexts.length === 0) {
    console.log('  ❌ Kein Browser-Context gefunden')
    process.exit(1)
  }

  const pages = contexts[0].pages()
  let page: Page
  if (pages.length > 0) {
    page = pages[0]
  } else {
    page = await contexts[0].newPage()
  }

  console.log(`  Page bereit: ${page.url()}\n`)

  const batch = offene.slice(0, limit)
  let generated = 0
  let failed = 0

  for (let i = 0; i < batch.length; i++) {
    const prompt = batch[i]
    const icon = { szene: '🏥', anatomie: '🫀', prozedur: '📋', geraet: '🔧' }[prompt.bildkategorie || 'szene'] || '🖼️'
    console.log(`\n  ${icon} [${i + 1}/${batch.length}] ${prompt.stepId}: "${prompt.beschreibung}"`)

    const outputPath = `/images/content/${leId}/${prompt.stepId}.png`
    const success = await generateImage(page, prompt.promptEn, outputPath, prompt.stepId)

    if (success) {
      prompt.status = 'generiert'
      prompt.imageUrl = outputPath
      generated++
    } else {
      failed++
    }

    // Queue nach jedem Bild speichern
    fs.writeFileSync(queuePath, JSON.stringify(prompts, null, 2), 'utf-8')

    // Pause zwischen Bildern
    if (i < batch.length - 1) {
      await page.waitForTimeout(3000)
    }
  }

  console.log(`\n${'═'.repeat(60)}`)
  console.log(`  ✅ Generiert: ${generated} | ❌ Fehlgeschlagen: ${failed}`)
  console.log(`  Bilder in: public/images/content/${leId}/`)
  console.log(`${'═'.repeat(60)}`)
}

main().catch(console.error)
