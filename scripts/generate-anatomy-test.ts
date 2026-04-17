#!/usr/bin/env npx tsx
/**
 * Generiert spezifische Anatomie-Testbilder direkt via Gemini Browser.
 * Usage: npx tsx scripts/generate-anatomy-test.ts
 */

import { chromium } from 'playwright'
import * as fs from 'fs'
import * as path from 'path'

const PROMPTS = [
  {
    id: 'venen-klappen-grosser-kreislauf',
    prompt: `Professional medical textbook illustration for nursing students, Frank Netter style with modern digital coloring.

Subject: Cross-section of a vein showing venous valves (Venenklappen) in the systemic circulation (großer Kreislauf).

Show clearly:
- A longitudinal section of a large vein (e.g., leg vein / Vena saphena magna)
- 2-3 venous valves (bicuspid semilunar valves) clearly visible as pocket-like flaps
- Direction of blood flow indicated by the valve orientation (toward the heart)
- The three layers of the vein wall: Tunica intima (inner, thin), Tunica media (middle, thinner than artery), Tunica adventitia (outer, thickest layer)
- Comparison detail: show a small section of an artery next to it for size comparison (thicker media layer)
- Venous blood in dark blue (#334499), vein wall in blue-gray tones
- One valve shown open (blood flowing toward heart) and one shown closed (preventing backflow)

Clinical relevance for nursing: This is what fails in varicose veins (Krampfadern) and chronic venous insufficiency. Nurses need to understand why compression therapy works.

Style: Clean medical textbook illustration, precise anatomical detail, watercolor-like shading. Standard medical colors (blue for venous blood, NOT pink or green). White background.
No text, no labels, no annotations, no written words anywhere.
Aspect ratio: 3:4 portrait.`,
  },
  {
    id: 'herz-querschnitt-frontal',
    prompt: `Professional medical textbook illustration for nursing students, Frank Netter style with modern digital coloring.

Subject: Frontal cross-section of the human heart (Herz-Querschnitt, Frontalschnitt).

Show clearly:
- All 4 chambers: right atrium (rechter Vorhof), right ventricle (rechte Kammer), left atrium (linker Vorhof), left ventricle (linke Kammer)
- Interventricular septum (Kammerscheidewand) clearly visible
- All 4 valves: tricuspid valve, pulmonary valve, mitral valve (bicuspid), aortic valve
- Great vessels: Aorta (red), Pulmonary artery (blue — carries deoxygenated blood!), Superior/inferior vena cava (blue), Pulmonary veins (red — carry oxygenated blood!)
- Myocardium (heart muscle) in natural dark reddish-brown, left ventricle wall visibly thicker than right
- Chordae tendineae (Sehnenfäden) visible on AV valves
- Papillary muscles visible

Use STANDARD MEDICAL COLORS:
- Oxygenated blood / left side / arteries: bright red (#CC3333)
- Deoxygenated blood / right side / veins: dark blue (#334499)
- Myocardium: dark reddish-brown
- Valves: pale yellowish-white
- Endocardium: smooth inner lining
- Pericardium: thin outer layer visible

Important: The pulmonary artery carries BLUE (deoxygenated) blood even though it's an artery. The pulmonary veins carry RED (oxygenated) blood even though they're veins. This is the most common student confusion — show it correctly!

Clinical relevance for nursing: Understanding blood flow direction, valve function (heart sounds S1/S2), and why left heart failure causes lung edema while right heart failure causes leg edema.

Style: Clean medical textbook illustration, precise anatomical detail, watercolor-like shading. Standard medical colors. White background.
No text, no labels, no annotations, no written words anywhere.
Aspect ratio: 3:4 portrait.`,
  },
]

async function generateImage(page: Awaited<ReturnType<typeof chromium.connectOverCDP>>['contexts'][0]['pages'][0], promptText: string, outputFile: string, label: string): Promise<boolean> {
  try {
    console.log(`  ${label}: Neuer Chat...`)
    await page.goto('https://gemini.google.com/app', { waitUntil: 'domcontentloaded', timeout: 30000 })
    await page.waitForTimeout(4000)

    // Cookie-Consent
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'))
      const btn = btns.find(b => (b.textContent?.trim().toLowerCase() || '').includes('alle akzeptieren') || (b.textContent?.trim().toLowerCase() || '').includes('accept all'))
      if (btn) btn.click()
    })
    await page.waitForTimeout(1500)

    // Baseline images
    const knownImages = await page.evaluate(() => {
      let c = 0
      document.querySelectorAll('img').forEach(img => {
        if ((img.naturalWidth || img.width) > 100 && (img.naturalHeight || img.height) > 100) c++
      })
      return c
    })

    // Prompt einfügen
    console.log(`  ${label}: Prompt einfügen (${promptText.length} Zeichen)...`)
    await page.locator('div[contenteditable="true"]').first().click()
    await page.waitForTimeout(500)
    await page.evaluate((text) => {
      const input = document.querySelector('div[contenteditable="true"]')
      if (input) {
        input.textContent = text
        input.dispatchEvent(new Event('input', { bubbles: true }))
      }
    }, promptText)
    await page.waitForTimeout(1000)

    // Senden
    const sendBtn = await page.locator('button[aria-label*="Send"], button[aria-label*="Senden"]').first()
    if (await sendBtn.count() > 0) {
      await sendBtn.click()
    } else {
      await page.keyboard.press('Enter')
    }

    // Warten
    console.log(`  ${label}: Warte auf Bild...`)
    await page.waitForTimeout(3000)
    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(2000)
      const currentImages = await page.evaluate(() => {
        let c = 0
        document.querySelectorAll('img').forEach(img => {
          if ((img.naturalWidth || img.width) > 100 && (img.naturalHeight || img.height) > 100) c++
        })
        return c
      })
      if (currentImages > knownImages) break
      if (i > 15) {
        const loading = await page.evaluate(() =>
          document.querySelectorAll('[role="progressbar"], mat-spinner, [aria-busy="true"]').length > 0
        )
        if (!loading) { await page.waitForTimeout(3000); break }
      }
    }

    // Bild extrahieren — mehrere Methoden
    const fullPath = path.join(process.cwd(), 'public/images/content/le-06', outputFile)
    fs.mkdirSync(path.dirname(fullPath), { recursive: true })

    // Methode 1: Canvas toDataURL
    let imageData = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'))
      const big = imgs.filter(img => (img.naturalWidth || img.width) > 100 && (img.naturalHeight || img.height) > 100)
      if (big.length === 0) return null
      const img = big[big.length - 1]
      try {
        const c = document.createElement('canvas')
        c.width = img.naturalWidth || img.width
        c.height = img.naturalHeight || img.height
        const ctx = c.getContext('2d')
        if (ctx) { ctx.drawImage(img, 0, 0); return c.toDataURL('image/png').split(',')[1] }
      } catch { /* CORS */ }
      if (img.src.startsWith('data:image')) return img.src.split(',')[1]
      return null
    })

    if (imageData) {
      fs.writeFileSync(fullPath, Buffer.from(imageData, 'base64'))
      console.log(`  ${label}: ✅ ${outputFile} (${(fs.statSync(fullPath).size / 1024).toFixed(0)} KB) [canvas]`)
      return true
    }

    // Methode 2: Fetch the image blob URL directly
    console.log(`  ${label}: Canvas CORS, versuche Blob-Fetch...`)
    imageData = await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('img'))
      const big = imgs.filter(img => (img.naturalWidth || img.width) > 100 && (img.naturalHeight || img.height) > 100)
      if (big.length === 0) return null
      const img = big[big.length - 1]
      const src = img.src
      if (!src) return null
      try {
        const resp = await fetch(src)
        const blob = await resp.blob()
        return new Promise<string | null>((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => {
            const result = reader.result as string
            resolve(result.split(',')[1] || null)
          }
          reader.readAsDataURL(blob)
        })
      } catch { return null }
    })

    if (imageData) {
      fs.writeFileSync(fullPath, Buffer.from(imageData, 'base64'))
      console.log(`  ${label}: ✅ ${outputFile} (${(fs.statSync(fullPath).size / 1024).toFixed(0)} KB) [fetch]`)
      return true
    }

    // Methode 3: Screenshot des Bild-Elements
    console.log(`  ${label}: Blob-Fetch fehlgeschlagen, versuche Screenshot...`)
    try {
      const imgElement = page.locator('img').last()
      const box = await imgElement.boundingBox()
      if (box && box.width > 100 && box.height > 100) {
        await imgElement.screenshot({ path: fullPath })
        console.log(`  ${label}: ✅ ${outputFile} (${(fs.statSync(fullPath).size / 1024).toFixed(0)} KB) [screenshot]`)
        return true
      }
    } catch { /* ignore */ }

    console.log(`  ${label}: ❌ Alle Extraktionsmethoden fehlgeschlagen`)
    return false
  } catch (e) {
    console.log(`  ${label}: ❌ ${(e as Error).message.substring(0, 100)}`)
    return false
  }
}

async function main() {
  const browser = await chromium.connectOverCDP('http://localhost:9222')
  const page = browser.contexts()[0].pages()[0] || await browser.contexts()[0].newPage()

  console.log('\n🫀 Anatomie-Test: Echte Lehrbuchfarben\n')

  for (const p of PROMPTS) {
    await generateImage(page, p.prompt, `${p.id}.png`, p.id)
    await page.waitForTimeout(3000)
  }

  console.log('\nFertig!')
}

main().catch(console.error)
