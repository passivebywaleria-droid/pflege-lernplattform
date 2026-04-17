#!/usr/bin/env npx tsx
/**
 * Image Review Server — Carousel-Ansicht zum Auswählen der besten Variante
 *
 * Zeigt alle generierten Varianten als Carousel mit Nummern 1-5.
 * Klick auf eine Nummer wählt die Variante aus und kopiert sie als finale Version.
 *
 * Usage:
 *   npx tsx scripts/image-review-server.ts le-06
 *
 * Öffnet http://localhost:3456 mit der Review-Seite.
 */

import * as fs from 'fs'
import * as path from 'path'
import * as http from 'http'

const PORT = 3456

interface FotoPrompt {
  stepId: string
  session: string
  trigger: string
  beschreibung: string
  svgTyp: string
  prioritaet: string
  status: string
  outputPath: string
  variants?: string[]
  selectedVariant?: number
}

function main() {
  const leId = process.argv[2]
  if (!leId || !/^le-\d{2}$/.test(leId)) {
    console.log('Usage: npx tsx scripts/image-review-server.ts <le-id>')
    process.exit(1)
  }

  const queuePath = path.join(process.cwd(), 'content', leId, 'foto-queue.json')
  if (!fs.existsSync(queuePath)) {
    console.log(`${queuePath} nicht gefunden.`)
    process.exit(1)
  }

  const server = http.createServer((req, res) => {
    const url = new URL(req.url || '/', `http://localhost:${PORT}`)

    // Statische Bilder ausliefern
    if (url.pathname.startsWith('/images/')) {
      const imgPath = path.join(process.cwd(), 'public', url.pathname)
      if (fs.existsSync(imgPath)) {
        res.writeHead(200, { 'Content-Type': 'image/png' })
        fs.createReadStream(imgPath).pipe(res)
        return
      }
      res.writeHead(404)
      res.end('Not found')
      return
    }

    // API: Variante auswählen
    if (url.pathname === '/api/select' && req.method === 'POST') {
      let body = ''
      req.on('data', (chunk) => { body += chunk })
      req.on('end', () => {
        try {
          const { stepId, variant } = JSON.parse(body)
          const prompts: FotoPrompt[] = JSON.parse(fs.readFileSync(queuePath, 'utf-8'))
          const prompt = prompts.find((p) => p.stepId === stepId)
          if (!prompt || !prompt.variants) {
            res.writeHead(404)
            res.end(JSON.stringify({ error: 'Step nicht gefunden' }))
            return
          }

          const variantIdx = variant - 1
          if (variantIdx < 0 || variantIdx >= prompt.variants.length) {
            res.writeHead(400)
            res.end(JSON.stringify({ error: 'Ungültige Variante' }))
            return
          }

          // Variante als finale Version kopieren
          const srcPath = path.join(process.cwd(), 'public', prompt.variants[variantIdx])
          const dstPath = path.join(process.cwd(), 'public', prompt.outputPath)
          if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, dstPath)
          }

          prompt.selectedVariant = variant
          prompt.status = 'freigegeben'
          prompt.imageUrl = prompt.outputPath
          fs.writeFileSync(queuePath, JSON.stringify(prompts, null, 2), 'utf-8')

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ ok: true, stepId, variant }))
        } catch (e) {
          res.writeHead(500)
          res.end(JSON.stringify({ error: (e as Error).message }))
        }
      })
      return
    }

    // Hauptseite
    const prompts: FotoPrompt[] = JSON.parse(fs.readFileSync(queuePath, 'utf-8'))
    const withVariants = prompts.filter((p) => p.variants && p.variants.length > 0)
    const reviewed = withVariants.filter((p) => p.selectedVariant)
    const pending = withVariants.filter((p) => !p.selectedVariant)

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bild-Review: ${leId}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, system-ui, sans-serif; background: #fafaf9; color: #1d1d1f; padding: 20px; }
    h1 { font-size: 24px; margin-bottom: 8px; }
    .stats { color: #666; margin-bottom: 24px; font-size: 14px; }
    .step-card { background: white; border-radius: 16px; padding: 20px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .step-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
    .step-id { font-weight: 600; font-size: 14px; color: #C4877F; }
    .step-desc { font-size: 16px; font-weight: 500; }
    .step-meta { font-size: 12px; color: #999; }
    .carousel { display: flex; gap: 12px; overflow-x: auto; padding: 8px 0; scroll-snap-type: x mandatory; }
    .variant { flex: 0 0 280px; scroll-snap-align: start; position: relative; cursor: pointer; border-radius: 12px; overflow: hidden; border: 3px solid transparent; transition: all 0.2s; }
    .variant:hover { border-color: #C4877F; transform: translateY(-2px); }
    .variant.selected { border-color: #6B8F71; }
    .variant img { width: 100%; height: 180px; object-fit: cover; display: block; }
    .variant-number { position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); display: flex; gap: 4px; }
    .num-btn { width: 32px; height: 32px; border-radius: 50%; border: 2px solid white; background: rgba(0,0,0,0.5); color: white; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; }
    .num-btn:hover, .num-btn.active { background: #C4877F; border-color: #C4877F; transform: scale(1.1); }
    .num-btn.active { background: #6B8F71; border-color: #6B8F71; }
    .selected-badge { background: #6B8F71; color: white; font-size: 12px; padding: 4px 12px; border-radius: 20px; font-weight: 600; }
    .section-title { font-size: 18px; font-weight: 600; margin: 32px 0 16px; padding-bottom: 8px; border-bottom: 2px solid #E5DFD6; }
    .toast { position: fixed; bottom: 20px; right: 20px; background: #6B8F71; color: white; padding: 12px 20px; border-radius: 12px; font-weight: 500; opacity: 0; transition: opacity 0.3s; z-index: 100; }
    .toast.show { opacity: 1; }
  </style>
</head>
<body>
  <h1>Bild-Review: ${leId.toUpperCase()}</h1>
  <div class="stats">
    ${withVariants.length} Steps mit Varianten |
    ${reviewed.length} freigegeben |
    ${pending.length} ausstehend
  </div>

  ${pending.length > 0 ? `<div class="section-title">Ausstehend (${pending.length})</div>` : ''}
  ${pending.map((p) => renderStepCard(p, false)).join('\n')}

  ${reviewed.length > 0 ? `<div class="section-title">Freigegeben (${reviewed.length})</div>` : ''}
  ${reviewed.map((p) => renderStepCard(p, true)).join('\n')}

  <div class="toast" id="toast"></div>

  <script>
    async function selectVariant(stepId, variant) {
      const res = await fetch('/api/select', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stepId, variant }),
      })
      const data = await res.json()
      if (data.ok) {
        // Toast zeigen
        const toast = document.getElementById('toast')
        toast.textContent = stepId + ' — Variante ' + variant + ' ausgewählt'
        toast.classList.add('show')
        setTimeout(() => toast.classList.remove('show'), 2000)

        // Buttons updaten
        document.querySelectorAll('[data-step="' + stepId + '"] .num-btn').forEach(b => {
          b.classList.toggle('active', parseInt(b.dataset.v) === variant)
        })
      }
    }
  </script>
</body>
</html>`)
  })

  function renderStepCard(p: FotoPrompt, reviewed: boolean): string {
    const variants = p.variants || []
    return `
    <div class="step-card" data-step="${p.stepId}">
      <div class="step-header">
        <div>
          <div class="step-id">${p.stepId} · ${p.svgTyp}</div>
          <div class="step-desc">${p.beschreibung}</div>
          <div class="step-meta">${p.trigger} · ${p.prioritaet}</div>
        </div>
        ${reviewed ? `<span class="selected-badge">V${p.selectedVariant}</span>` : ''}
      </div>
      <div class="carousel">
        ${variants.map((v, i) => `
          <div class="variant ${p.selectedVariant === i + 1 ? 'selected' : ''}" onclick="selectVariant('${p.stepId}', ${i + 1})">
            <img src="${v}" alt="Variante ${i + 1}" loading="lazy">
            <div class="variant-number">
              <div class="num-btn ${p.selectedVariant === i + 1 ? 'active' : ''}" data-v="${i + 1}">${i + 1}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`
  }

  server.listen(PORT, '0.0.0.0', () => {
    const ip = require('os').networkInterfaces()?.en0?.find((i: any) => i.family === 'IPv4')?.address || '192.168.178.88'
    console.log(`\n${'═'.repeat(50)}`)
    console.log(`  Bild-Review Server`)
    console.log(`  Desktop:    http://localhost:${PORT}`)
    console.log(`  Smartphone: http://${ip}:${PORT}`)
    console.log(`  LE: ${leId}`)
    console.log(`${'═'.repeat(50)}\n`)
  })
}

main()
