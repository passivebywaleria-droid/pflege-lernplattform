#!/usr/bin/env npx tsx
/**
 * Gemini Image Bot — Stagehand v3 + Claude
 *
 * Generiert N Varianten pro Step via Gemini Pro (waleriawatson@gmail.com /u/1/).
 * Bilder: public/images/content/le-{N}/{stepId}-v{1..5}.png
 *
 * Chrome mit Remote Debugging:
 *   /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
 *
 * Usage:
 *   npx tsx scripts/gemini-image-bot.ts le-06 --limit 1 --variants 5
 */

import { Stagehand } from '@browserbasehq/stagehand'
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
  prioritaet: string
  status: string
  outputPath: string
  imageUrl?: string
  referenzBild?: string
  variants?: string[]
  selectedVariant?: number
}

function loadAnthropicKey(): string {
  if (process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY
  const authPath = path.join(process.env.HOME || '', '.openclaw/agents/main/agent/auth-profiles.json')
  if (fs.existsSync(authPath)) {
    try {
      const auth = JSON.parse(fs.readFileSync(authPath, 'utf-8'))
      const token = auth?.profiles?.['anthropic:default']?.token
      if (token) return token
    } catch { /* ignore */ }
  }
  console.error('Kein ANTHROPIC_API_KEY gefunden.')
  process.exit(1)
}

const VARIANT_SUFFIXES = [
  '',
  ' Use a three-quarter camera angle.',
  ' Focus on a close-up detail crop.',
  ' Show a wider room perspective.',
  ' Use different character designs and hairstyles.',
]

// ============================================================================
// Einzelnes Bild generieren — NUR stagehand.act() + stagehand.context.activePage()
// Exakt das Pattern das beim ersten Test funktionierte.
// ============================================================================

async function generateSingleImage(
  stagehand: InstanceType<typeof Stagehand>,
  promptText: string,
  outputPath: string,
  label: string,
  referenzBild?: string,
): Promise<boolean> {
  // activePage() — Stagehand V3 Page (hat goto, evaluate, waitForTimeout)
  const page = stagehand.context.activePage()
  if (!page) {
    console.log(`      ${label}: Keine aktive Page`)
    return false
  }

  try {
    // 1. Neuen Gemini Chat öffnen (Pro-Account /u/1/)
    console.log(`      ${label}: Neuer Chat...`)
    await page.goto('https://gemini.google.com/u/1/app', {
      waitUntil: 'domcontentloaded',
      timeoutMs: 60000,
    })
    await page.waitForTimeout(5000)

    // 2. Cookie-Consent per JS
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'))
      const btn = btns.find((b) => {
        const t = b.textContent?.trim().toLowerCase() || ''
        return t.includes('alle akzeptieren') || t.includes('accept all')
      })
      if (btn) btn.click()
    })
    await page.waitForTimeout(2000)

    // 2b. Referenzbild hochladen wenn vorhanden
    if (referenzBild) {
      const absPath = path.resolve(process.cwd(), referenzBild)
      if (fs.existsSync(absPath)) {
        console.log(`      ${label}: Lade Referenzbild hoch...`)

        let uploaded = false

        // Methode 1: Playwright fileChooser über Stagehand-Internals
        try {
          // Zugriff auf den internen Playwright BrowserContext
          const ctx = (stagehand as unknown as { context: { context?: { pages?: () => unknown[] }; _page?: unknown } }).context
          // Versuche die echte Playwright Page zu finden
          let pwPage: { waitForEvent: (e: string) => Promise<{ setFiles: (f: string) => Promise<void> }>; locator: (s: string) => { setInputFiles: (f: string) => Promise<void> } } | null = null

          // Stagehand V3: context hat möglicherweise _page oder pages()
          if (ctx && typeof ctx === 'object') {
            const anyCtx = ctx as Record<string, unknown>
            // Versuch 1: _page direkt
            if (anyCtx._page && typeof (anyCtx._page as Record<string, unknown>).waitForEvent === 'function') {
              pwPage = anyCtx._page as unknown as typeof pwPage
            }
            // Versuch 2: context.context.pages()
            if (!pwPage && anyCtx.context && typeof anyCtx.context === 'object') {
              const innerCtx = anyCtx.context as Record<string, unknown>
              if (typeof innerCtx.pages === 'function') {
                const pages = (innerCtx.pages as () => unknown[])()
                if (pages.length > 0 && typeof (pages[0] as Record<string, unknown>).waitForEvent === 'function') {
                  pwPage = pages[0] as typeof pwPage
                }
              }
            }
          }

          if (pwPage) {
            // fileChooser-Event: Klick auf Upload-Button triggert den File-Dialog
            const [fileChooser] = await Promise.all([
              pwPage.waitForEvent('filechooser'),
              stagehand.act('Click the plus icon or attachment button at the bottom left of the chat input to upload a file'),
            ])
            await fileChooser.setFiles(absPath)
            uploaded = true
            console.log(`      ${label}: ✅ Referenzbild hochgeladen (fileChooser)`)
            await page.waitForTimeout(3000)
          } else {
            console.log(`      ${label}: Playwright Page nicht gefunden, versuche Locator...`)
          }
        } catch (e) {
          console.log(`      ${label}: fileChooser fehlgeschlagen: ${(e as Error).message.substring(0, 80)}`)
        }

        // Methode 2: Direkt input[type=file] per Locator setzen
        if (!uploaded) {
          try {
            // Erst Upload-Menü öffnen damit input[type=file] im DOM erscheint
            await stagehand.act('Click the plus icon or attachment button at the bottom left of the chat input to upload a file')
            await page.waitForTimeout(2000)
            await stagehand.act('Click on "Upload file" or "Datei hochladen" option in the menu that appeared')
            await page.waitForTimeout(1000)

            // Versuche über page.locator (falls Stagehand V3 Page es unterstützt)
            const anyPage = page as unknown as Record<string, unknown>
            if (typeof anyPage.locator === 'function') {
              const locator = (anyPage.locator as (s: string) => { setInputFiles: (f: string) => Promise<void> })('input[type="file"]')
              await locator.setInputFiles(absPath)
              uploaded = true
              console.log(`      ${label}: ✅ Referenzbild hochgeladen (locator)`)
              await page.waitForTimeout(3000)
            }
          } catch (e) {
            console.log(`      ${label}: Locator fehlgeschlagen: ${(e as Error).message.substring(0, 80)}`)
          }
        }

        // Methode 3: CDP-Ansatz — File über Chrome DevTools Protocol senden
        if (!uploaded) {
          try {
            // Finde den input[type=file] und setze Dateien via CDP
            const inputFound = await page.evaluate(() => {
              const inputs = document.querySelectorAll('input[type="file"]')
              return inputs.length
            })
            console.log(`      ${label}: ${inputFound} file-inputs gefunden`)

            if (inputFound > 0) {
              // Base64-Ansatz als letzter Versuch mit force-dispatch
              const imageBuffer = fs.readFileSync(absPath)
              const base64 = imageBuffer.toString('base64')
              await page.evaluate(({ b64, name }: { b64: string; name: string }) => {
                const byteStr = atob(b64)
                const ab = new ArrayBuffer(byteStr.length)
                const ia = new Uint8Array(ab)
                for (let i = 0; i < byteStr.length; i++) ia[i] = byteStr.charCodeAt(i)
                const file = new File([ab], name, { type: 'image/png' })
                const input = document.querySelector('input[type="file"]') as HTMLInputElement
                if (input) {
                  const dt = new DataTransfer()
                  dt.items.add(file)
                  input.files = dt.files
                  // Dispatch mehrere Events
                  input.dispatchEvent(new Event('input', { bubbles: true }))
                  input.dispatchEvent(new Event('change', { bubbles: true }))
                }
              }, { b64: base64, name: path.basename(absPath) })
              await page.waitForTimeout(3000)

              // Prüfe ob Upload erkannt wurde (Thumbnail sichtbar)
              const hasPreview = await page.evaluate(() => {
                // Suche nach Upload-Preview-Thumbnails
                const previews = document.querySelectorAll('img[src^="blob:"], img[src^="data:"], .upload-preview, [data-upload]')
                return previews.length > 0
              })
              if (hasPreview) {
                uploaded = true
                console.log(`      ${label}: ✅ Referenzbild hochgeladen (DataTransfer)`)
              }
            }
          } catch (e) {
            console.log(`      ${label}: CDP-Ansatz fehlgeschlagen: ${(e as Error).message.substring(0, 80)}`)
          }
        }

        if (!uploaded) {
          console.log(`      ${label}: ⚠️ Alle Upload-Methoden fehlgeschlagen.`)
          console.log(`      ${label}: Bitte manuell hochladen: ${absPath}`)
          console.log(`      ${label}: Generiere trotzdem mit Text-Prompt...`)
        }
      } else {
        console.log(`      ${label}: ⚠️ Referenzbild nicht gefunden: ${absPath}`)
      }
    }

    // 3. Baseline: Vorhandene Bilder zählen
    const knownImages = await page.evaluate(() => {
      const imgs = document.querySelectorAll('img')
      let count = 0
      imgs.forEach((img) => {
        const w = img.naturalWidth || img.width
        const h = img.naturalHeight || img.height
        const src = img.src || ''
        if (w > 100 && h > 100 && (src.startsWith('blob:') || src.startsWith('data:image') || src.includes('googleusercontent'))) {
          count++
        }
      })
      return count
    })

    // 4. Prompt senden via stagehand.act()
    console.log(`      ${label}: Tippe Prompt...`)
    await stagehand.act(
      `Type the following message into the Gemini chat input field: "${promptText}"`
    )
    await page.waitForTimeout(1000)

    // 5. Absenden
    console.log(`      ${label}: Sende ab...`)
    await stagehand.act('Click the send button to submit the message')

    // 6. Warte auf Bild
    console.log(`      ${label}: Warte auf Bild (max 120s)...`)
    let imageFound = false

    for (let attempt = 0; attempt < 60; attempt++) {
      await page.waitForTimeout(2000)

      const currentImages = await page.evaluate(() => {
        const imgs = document.querySelectorAll('img')
        let count = 0
        imgs.forEach((img) => {
          const w = img.naturalWidth || img.width
          const h = img.naturalHeight || img.height
          const src = img.src || ''
          if (w > 100 && h > 100 && (src.startsWith('blob:') || src.startsWith('data:image') || src.includes('googleusercontent'))) {
            count++
          }
        })
        return count
      })

      if (currentImages > knownImages) {
        imageFound = true
        break
      }

      if (attempt > 15) {
        const loading = await page.evaluate(() => {
          return document.querySelectorAll('[role="progressbar"], mat-spinner, [aria-busy="true"]').length > 0
        })
        if (!loading) {
          await page.waitForTimeout(3000)
          const finalCheck = await page.evaluate(() => {
            let count = 0
            document.querySelectorAll('img').forEach((img) => {
              if ((img.naturalWidth || img.width) > 100) count++
            })
            return count
          })
          if (finalCheck > knownImages) imageFound = true
          break
        }
      }
    }

    if (!imageFound) {
      console.log(`      ${label}: Kein Bild generiert`)
      return false
    }

    // 7. Bild als Base64 extrahieren + speichern
    const imageData = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'))
      const big = imgs.filter((img) =>
        (img.naturalWidth || img.width) > 100 && (img.naturalHeight || img.height) > 100
      )
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

    if (!imageData) {
      console.log(`      ${label}: Bild nicht extrahierbar`)
      return false
    }

    const fullPath = path.join(process.cwd(), 'public', outputPath)
    fs.mkdirSync(path.dirname(fullPath), { recursive: true })
    fs.writeFileSync(fullPath, Buffer.from(imageData, 'base64'))
    const size = fs.statSync(fullPath).size
    console.log(`      ${label}: ${outputPath} (${(size / 1024).toFixed(1)} KB)`)
    return true

  } catch (e) {
    console.log(`      ${label}: ${(e as Error).message}`)
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
  const variantsArg = process.argv.indexOf('--variants')
  const numVariants = variantsArg >= 0 ? parseInt(process.argv[variantsArg + 1]) : 5

  if (!leId || !/^le-\d{2}$/.test(leId)) {
    console.log('Usage: npx tsx scripts/gemini-image-bot.ts <le-id> [--limit N] [--variants N]')
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
  console.log(`Gemini Image Bot — ${numVariants} Varianten`)
  console.log(`${'═'.repeat(60)}`)
  console.log(`  LE: ${leId} | Offen: ${offene.length} | Limit: ${limit === Infinity ? 'alle' : limit}`)

  if (offene.length === 0) {
    console.log('  Fertig!')
    process.exit(0)
  }

  const apiKey = loadAnthropicKey()
  process.env.ANTHROPIC_API_KEY = apiKey

  // CDP verbinden
  let cdpUrl: string | undefined
  try {
    const res = await fetch('http://localhost:9222/json/version')
    const data = (await res.json()) as { webSocketDebuggerUrl: string }
    cdpUrl = data.webSocketDebuggerUrl.replace('0.0.0.0', 'localhost')
    console.log(`  CDP: OK`)
  } catch {
    console.log('  Kein Chrome auf Port 9222!')
    process.exit(1)
  }

  const stagehand = new Stagehand({
    env: 'LOCAL',
    model: 'anthropic/claude-haiku-4-5-20251001',
    localBrowserLaunchOptions: { cdpUrl, headless: false },
    verbose: 0,
  })

  await stagehand.init()
  console.log(`  Stagehand bereit\n`)

  const batch = offene.slice(0, limit)
  let totalImages = 0

  try {
    for (let i = 0; i < batch.length; i++) {
      const prompt = batch[i]
      console.log(`  [${i + 1}/${batch.length}] ${prompt.stepId}: "${prompt.beschreibung}"`)

      const baseDir = path.dirname(prompt.outputPath)
      const baseName = path.basename(prompt.outputPath, '.png')
      const generatedPaths: string[] = []

      for (let v = 0; v < numVariants; v++) {
        const suffix = VARIANT_SUFFIXES[v] || ''
        const variantPrompt = prompt.promptEn + suffix
        const variantPath = `${baseDir}/${baseName}-v${v + 1}.png`

        const success = await generateSingleImage(stagehand, variantPrompt, variantPath, `v${v + 1}`, prompt.referenzBild)
        if (success) generatedPaths.push(variantPath)

        if (v < numVariants - 1) await new Promise(r => setTimeout(r, 2000))
      }

      if (generatedPaths.length > 0) {
        prompt.status = 'varianten'
        prompt.variants = generatedPaths
        totalImages += generatedPaths.length
        console.log(`    ${generatedPaths.length}/${numVariants} OK`)
      }

      fs.writeFileSync(queuePath, JSON.stringify(prompts, null, 2), 'utf-8')
    }
  } finally {
    console.log('\n  Browser bleibt offen')
  }

  console.log(`\n  Bilder: ${totalImages} | Review: npx tsx scripts/image-review-server.ts ${leId}`)
}

main().catch(console.error)
