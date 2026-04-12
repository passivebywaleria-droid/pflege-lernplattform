/**
 * SVG Updater — Warm Triad Palette + Poppins + CSS-Vars + Dark Mode
 *
 * Transforms all LE-01 SVGs:
 * 1. Remove solid background rect (#fafaf9)
 * 2. Replace hardcoded text colors with CSS custom properties
 * 3. Set font-family to 'Poppins', sans-serif
 * 4. Scale 600px viewBoxes down to 360px
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const SVG_DIR = join(__dirname, '../public/images/content/le-01');

// Color mappings: hardcoded → CSS variable with fallback
const COLOR_REPLACEMENTS: Array<{ pattern: RegExp; replacement: string }> = [
  // Text primary: #33302b, #2d2a26, #3a3530, #362D27 → var(--lern-text-primary)
  { pattern: /fill="(#33302b|#2d2a26|#3a3530|#362D27)"/g, replacement: 'fill="var(--lern-text-primary, #1d1d1f)"' },
  // Text with opacity as secondary
  { pattern: /fill="(#33302b|#2d2a26)" opacity="0\.6[05]?"/g, replacement: 'fill="var(--lern-text-secondary, #6e6e73)"' },
  { pattern: /fill="(#33302b|#2d2a26)" opacity="0\.[45]\d*"/g, replacement: 'fill="var(--lern-text-secondary, #6e6e73)"' },
  { pattern: /fill="(#33302b|#2d2a26)" opacity="0\.3[05]?"/g, replacement: 'fill="var(--lern-text-tertiary, #86868b)"' },
  // Stroke colors for dividers
  { pattern: /stroke="(#33302b|#2d2a26)" stroke-width="0\.[35]" stroke-opacity="0\.0[6-9]"/g, replacement: 'stroke="var(--lern-divider, #e8e8ed)" stroke-width="0.5"' },
  { pattern: /stroke="(#33302b|#2d2a26)" stroke-width="0\.\d+" stroke-opacity="0\.1[0-5]?"/g, replacement: 'stroke="var(--lern-divider, #e8e8ed)" stroke-width="0.5"' },
  // Card backgrounds: #E5DFD6 with opacity → var(--lern-card-bg)
  { pattern: /fill="#E5DFD6" opacity="0\.4[05]?"/g, replacement: 'fill="var(--lern-card-bg, #f5f5f7)" opacity="0.5"' },
  { pattern: /fill="#E5DFD6" opacity="0\.5"/g, replacement: 'fill="var(--lern-card-bg, #f5f5f7)" opacity="0.5"' },
  // Font families → Poppins
  { pattern: /font-family:['"]-apple-system[^"']*['"]/g, replacement: "font-family:'Poppins',sans-serif" },
  { pattern: /font-family="-apple-system[^"]*"/g, replacement: 'font-family="Poppins, sans-serif"' },
];

function processFile(filePath: string): boolean {
  let svg = readFileSync(filePath, 'utf-8');
  const original = svg;

  // 1. Remove background rect (first <rect> that fills the whole canvas with #fafaf9)
  svg = svg.replace(
    /\s*<rect width="\d+" height="\d+"[^>]*fill="#fafaf9"[^>]*\/>/,
    ''
  );

  // 2. Apply color replacements
  for (const { pattern, replacement } of COLOR_REPLACEMENTS) {
    svg = svg.replace(pattern, replacement);
  }

  // 3. Fix remaining fill="#33302b" (without opacity) that weren't caught
  // These are likely text labels - make them use CSS var
  svg = svg.replace(
    /fill="#33302b"(?! opacity)/g,
    'fill="var(--lern-text-primary, #1d1d1f)"'
  );

  // 4. Scale 600px SVGs to 360px
  const viewBoxMatch = svg.match(/viewBox="0 0 (\d+) (\d+)"/);
  if (viewBoxMatch && parseInt(viewBoxMatch[1]) === 600) {
    const oldW = 600;
    const h = parseInt(viewBoxMatch[2]);
    const scale = 360 / 600; // 0.6
    const newH = Math.round(h * scale);

    // Update viewBox
    svg = svg.replace(
      /viewBox="0 0 600 \d+"/,
      `viewBox="0 0 360 ${newH}"`
    );

    // Update width/height if present
    svg = svg.replace(/width="600"/, 'width="360"');
    svg = svg.replace(new RegExp(`height="${h}"`), `height="${newH}"`);

    // Wrap content in a scale transform group
    // Find the opening <svg...> tag end and closing </svg>
    const svgOpenEnd = svg.indexOf('>') + 1;
    const svgCloseStart = svg.lastIndexOf('</svg>');

    const before = svg.substring(0, svgOpenEnd);
    const content = svg.substring(svgOpenEnd, svgCloseStart);
    const after = svg.substring(svgCloseStart);

    svg = `${before}\n  <g transform="scale(${scale})">${content}</g>\n${after}`;
  }

  if (svg !== original) {
    writeFileSync(filePath, svg, 'utf-8');
    return true;
  }
  return false;
}

// Main
const files = readdirSync(SVG_DIR).filter(f => f.endsWith('.svg'));
let updated = 0;

for (const file of files) {
  const filePath = join(SVG_DIR, file);
  const changed = processFile(filePath);
  if (changed) {
    updated++;
    console.log(`✅ ${file}`);
  } else {
    console.log(`⏭️  ${file} (no changes)`);
  }
}

console.log(`\n${updated}/${files.length} SVGs updated.`);
