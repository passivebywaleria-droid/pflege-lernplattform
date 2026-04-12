/**
 * Medical Image Generation via Gemini Web (Puppeteer)
 *
 * Generates multiple image candidates per slot using the free Gemini Web interface.
 * Images are saved as candidates for manual curation.
 *
 * Prerequisites:
 *   npm install puppeteer-extra puppeteer-extra-plugin-stealth commander
 *
 * Usage:
 *   npx tsx scripts/generate-medical-images.ts --login          # First: manual Google login
 *   npx tsx scripts/generate-medical-images.ts --le le-01       # Generate all queued images for LE-01
 *   npx tsx scripts/generate-medical-images.ts --le le-01 --count 5  # 5 variants per slot (default: 5)
 */

import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import * as fs from 'fs';
import * as path from 'path';
import { program } from 'commander';

puppeteer.use(StealthPlugin());

const PROJECT_ROOT = path.resolve(__dirname, '..');
const PROFILE_DIR = path.join(PROJECT_ROOT, '.chrome-profile');
const CANDIDATES_BASE = path.join(PROJECT_ROOT, 'public/images/content');

interface FotoQueueItem {
  stepId: string;
  slug: string;
  prompt: string;
  type: 'illustration' | 'anatomie' | 'situation' | 'geraet';
}

// CLI
program
  .option('--login', 'Launch browser for manual Google login')
  .option('--le <leId>', 'LE to process (e.g. le-01)')
  .option('--count <n>', 'Number of variants per slot', '5')
  .parse(process.argv);

const opts = program.opts();

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getPromptPrefix(type: string): string {
  switch (type) {
    case 'illustration':
      return 'Medical illustration, educational style, clean, labeled, professional, white background.';
    case 'anatomie':
      return 'Anatomical diagram, clean, labeled, educational, medical textbook style, white background.';
    case 'situation':
      return 'Professional nursing care scene, hospital setting, realistic, respectful, educational.';
    case 'geraet':
      return 'Medical equipment photograph, clean, white background, professional, labeled.';
    default:
      return 'Medical educational illustration, clean, professional.';
  }
}

async function loginMode(): Promise<void> {
  console.log('Starte Browser für manuellen Login...');
  console.log(`Profil: ${PROFILE_DIR}`);

  if (!fs.existsSync(PROFILE_DIR)) {
    fs.mkdirSync(PROFILE_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: PROFILE_DIR,
    defaultViewport: null,
    args: [
      '--no-sandbox',
      '--start-maximized',
      '--disable-blink-features=AutomationControlled',
    ],
    ignoreDefaultArgs: ['--enable-automation'],
  });

  const page = await browser.newPage();
  await page.goto('https://gemini.google.com', { waitUntil: 'networkidle2' });

  console.log('\nBitte jetzt manuell einloggen!');
  console.log('Browser bleibt 5 Minuten offen...');

  await delay(300_000);
  await browser.close();
  console.log('Login-Session gespeichert.');
}

async function generateImages(leId: string, count: number): Promise<void> {
  const queuePath = path.join(PROJECT_ROOT, 'content', leId, 'foto-queue.json');

  if (!fs.existsSync(queuePath)) {
    console.error(`Keine foto-queue.json gefunden: ${queuePath}`);
    process.exit(1);
  }

  const queue: FotoQueueItem[] = JSON.parse(fs.readFileSync(queuePath, 'utf-8'));
  console.log(`${queue.length} Bild-Slots in ${leId}, je ${count} Varianten`);

  const candidatesDir = path.join(CANDIDATES_BASE, leId, 'candidates');
  if (!fs.existsSync(candidatesDir)) {
    fs.mkdirSync(candidatesDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: PROFILE_DIR,
    defaultViewport: { width: 1280, height: 1024 },
    args: [
      '--no-sandbox',
      '--disable-blink-features=AutomationControlled',
    ],
    ignoreDefaultArgs: ['--enable-automation'],
  });

  const page = await browser.newPage();

  // Download-Verhalten
  const client = await page.target().createCDPSession();
  await client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: candidatesDir,
  });

  try {
    console.log('Navigiere zu Gemini...');
    await page.goto('https://gemini.google.com', { waitUntil: 'networkidle2' });
    await delay(3000);

    // Login prüfen
    const loginBtn = await page.$('a[href*="accounts.google.com"]');
    if (loginBtn) {
      console.error('Nicht eingeloggt! Erst --login ausführen.');
      await browser.close();
      process.exit(1);
    }

    for (const item of queue) {
      console.log(`\n--- ${item.slug} (${item.type}) ---`);

      for (let variant = 1; variant <= count; variant++) {
        const outputFile = path.join(candidatesDir, `${item.slug}-${variant}.png`);

        if (fs.existsSync(outputFile)) {
          console.log(`  Variante ${variant} existiert bereits, überspringe`);
          continue;
        }

        console.log(`  Variante ${variant}/${count}...`);

        // Neuen Chat starten
        await page.goto('https://gemini.google.com', { waitUntil: 'networkidle2' });
        await delay(2000);

        // Prompt eingeben
        const fullPrompt = `Generate an image: ${getPromptPrefix(item.type)} ${item.prompt} Variation ${variant} of ${count}.`;

        await page.waitForSelector('div[contenteditable="true"]', { timeout: 15000 });
        await page.click('div[contenteditable="true"]');
        await page.type('div[contenteditable="true"]', fullPrompt, { delay: 10 });
        await delay(500);

        // Absenden
        const sendBtn = await page.$('button[aria-label*="Send"], button[aria-label*="send"], button[class*="send"]');
        if (sendBtn) {
          await sendBtn.click();
        } else {
          await page.keyboard.press('Enter');
        }

        // Warten auf Generierung
        console.log(`    Warte auf Bildgenerierung...`);
        await delay(30000);

        // Screenshot als Fallback
        await page.screenshot({ path: outputFile, fullPage: false });
        console.log(`    Gespeichert: ${outputFile}`);

        // Kurze Pause zwischen Varianten
        await delay(2000);
      }
    }

    console.log('\nAlle Bilder generiert!');
    console.log(`Kandidaten in: ${candidatesDir}`);
    console.log('Nächster Schritt: Kurations-Seite öffnen → /admin/kuratieren');

  } catch (error) {
    console.error('Fehler:', error);
    await page.screenshot({
      path: path.join(candidatesDir, 'error-state.png'),
    });
  } finally {
    await browser.close();
  }
}

// Status-Tracking
function printStatus(leId: string): void {
  const candidatesDir = path.join(CANDIDATES_BASE, leId, 'candidates');
  if (!fs.existsSync(candidatesDir)) {
    console.log('Noch keine Kandidaten generiert.');
    return;
  }

  const files = fs.readdirSync(candidatesDir).filter(f => f.endsWith('.png'));
  const slugs = new Set(files.map(f => f.replace(/-\d+\.png$/, '')));

  console.log(`\n${leId} Status:`);
  console.log(`  ${files.length} Bilder in ${slugs.size} Slots`);
  for (const slug of slugs) {
    const variants = files.filter(f => f.startsWith(slug + '-'));
    console.log(`  ${slug}: ${variants.length} Varianten`);
  }
}

// Main
if (opts.login) {
  loginMode();
} else if (opts.le) {
  const count = parseInt(opts.count, 10) || 5;
  generateImages(opts.le, count);
} else {
  console.log('Usage:');
  console.log('  npx tsx scripts/generate-medical-images.ts --login');
  console.log('  npx tsx scripts/generate-medical-images.ts --le le-01');
  console.log('  npx tsx scripts/generate-medical-images.ts --le le-01 --count 5');
}
