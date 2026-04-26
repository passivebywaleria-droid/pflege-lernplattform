// Background-Varianten: gleiche Accent-Paare (Terracotta+Teal & Rust+Stone),
// aber jeweils mit anderen Hintergrund-Treatments.

const PALETTES = [
  // Original v1 for compat
  { id: 'original', name: 'Original', sub: 'Rose + Sage',
    bg: '#FAF7F4', bgWhite: '#FFFFFF', text: '#2A2520', text2: '#6B5E52', text3: '#998B7E',
    border: 'rgba(196,135,127,0.15)', borderStrong: 'rgba(42,37,32,0.10)',
    accent: '#C4877F', success: '#6B8F71',
    m: ['#a09890', '#D4956A', '#BFA48E', '#6B8F71', '#C4877F'],
  },
];

// 8 Hintergrund-Varianten — 4 für Terracotta+Teal (A), 4 für Rust+Stone (F)
const PALETTES_BG = [
  // ───── Terracotta + Teal ─────
  {
    id: 'tt-cream', name: 'A1 · Terracotta/Teal · Cream',
    sub: 'warmes Creme #FAF6F1 — Original',
    bg: '#FAF6F1', bgWhite: '#FFFFFF',
    text: '#241E18', text2: '#5E5147', text3: '#998B7E',
    border: 'rgba(180,98,70,0.15)', borderStrong: 'rgba(36,30,24,0.10)',
    accent: '#B46246', success: '#2F7A78',
    m: ['#a09890', '#D4956A', '#C49A80', '#2F7A78', '#B46246'],
  },
  {
    id: 'tt-paper', name: 'A2 · Terracotta/Teal · Paper',
    sub: 'ungleichmäßiges Recycling-Papier #F2ECE2',
    bg: '#F2ECE2', bgWhite: '#FAF6EE',
    text: '#241E18', text2: '#5E5147', text3: '#998B7E',
    border: 'rgba(180,98,70,0.18)', borderStrong: 'rgba(36,30,24,0.12)',
    accent: '#B46246', success: '#2F7A78',
    m: ['#a09890', '#D4956A', '#C49A80', '#2F7A78', '#B46246'],
  },
  {
    id: 'tt-tinted', name: 'A3 · Terracotta/Teal · Tinted',
    sub: 'leicht peach #FBF1EA — Accent-gefärbt',
    bg: '#FBF1EA', bgWhite: '#FFFFFF',
    text: '#241E18', text2: '#5E5147', text3: '#998B7E',
    border: 'rgba(180,98,70,0.16)', borderStrong: 'rgba(36,30,24,0.10)',
    accent: '#B46246', success: '#2F7A78',
    m: ['#a09890', '#D4956A', '#C49A80', '#2F7A78', '#B46246'],
  },
  {
    id: 'tt-linen', name: 'A4 · Terracotta/Teal · Linen',
    sub: 'kühleres Leinen #EFEBE4, mehr Ruhe',
    bg: '#EFEBE4', bgWhite: '#F8F5EF',
    text: '#221E1A', text2: '#564A42', text3: '#928678',
    border: 'rgba(180,98,70,0.14)', borderStrong: 'rgba(34,30,26,0.10)',
    accent: '#B46246', success: '#2F7A78',
    m: ['#a09890', '#D4956A', '#C49A80', '#2F7A78', '#B46246'],
  },
  {
    id: 'tt-linen-light', name: 'A4b · Linen Light',
    sub: 'heller: #F5F2EC, weicher',
    bg: '#F5F2EC', bgWhite: '#FCFAF5',
    text: '#221E1A', text2: '#564A42', text3: '#928678',
    border: 'rgba(180,98,70,0.13)', borderStrong: 'rgba(34,30,26,0.09)',
    accent: '#B46246', success: '#2F7A78',
    m: ['#a09890', '#D4956A', '#C49A80', '#2F7A78', '#B46246'],
  },
  {
    id: 'tt-linen-lighter', name: 'A4c · Linen Lighter',
    sub: 'noch heller: #F9F6F0, sehr luftig',
    bg: '#F9F6F0', bgWhite: '#FFFFFF',
    text: '#221E1A', text2: '#564A42', text3: '#928678',
    border: 'rgba(180,98,70,0.13)', borderStrong: 'rgba(34,30,26,0.08)',
    accent: '#B46246', success: '#2F7A78',
    m: ['#a09890', '#D4956A', '#C49A80', '#2F7A78', '#B46246'],
  },
  {
    id: 'tt-linen-lightest', name: 'A4d · Linen Lightest',
    sub: 'hellstes Linen #FCFAF5 — fast weiß',
    bg: '#FCFAF5', bgWhite: '#FFFFFF',
    text: '#221E1A', text2: '#564A42', text3: '#928678',
    border: 'rgba(180,98,70,0.12)', borderStrong: 'rgba(34,30,26,0.07)',
    accent: '#B46246', success: '#2F7A78',
    m: ['#a09890', '#D4956A', '#C49A80', '#2F7A78', '#B46246'],
  },

  // ───── Rust + Stone ─────
  {
    id: 'rs-bone', name: 'F1 · Rust/Stone · Bone',
    sub: 'knochenweiß #F5F2ED — Original',
    bg: '#F5F2ED', bgWhite: '#FFFFFF',
    text: '#1C1A18', text2: '#524C46', text3: '#8A8279',
    border: 'rgba(170,90,66,0.14)', borderStrong: 'rgba(28,26,24,0.10)',
    accent: '#AA5A42', success: '#6B6258',
    m: ['#9E958C', '#BE8E70', '#B29C8E', '#6B6258', '#AA5A42'],
  },
  {
    id: 'rs-sand', name: 'F2 · Rust/Stone · Sand',
    sub: 'wärmerer Sand #F0EAE0',
    bg: '#F0EAE0', bgWhite: '#F8F4EC',
    text: '#1C1A18', text2: '#524C46', text3: '#8A8279',
    border: 'rgba(170,90,66,0.16)', borderStrong: 'rgba(28,26,24,0.12)',
    accent: '#AA5A42', success: '#6B6258',
    m: ['#9E958C', '#BE8E70', '#B29C8E', '#6B6258', '#AA5A42'],
  },
  {
    id: 'rs-mist', name: 'F3 · Rust/Stone · Mist',
    sub: 'kühler Nebel #EDEBE6 — neutraler',
    bg: '#EDEBE6', bgWhite: '#F7F5F0',
    text: '#1C1A18', text2: '#524C46', text3: '#8A8279',
    border: 'rgba(170,90,66,0.14)', borderStrong: 'rgba(28,26,24,0.10)',
    accent: '#AA5A42', success: '#6B6258',
    m: ['#9E958C', '#BE8E70', '#B29C8E', '#6B6258', '#AA5A42'],
  },
  {
    id: 'rs-pure', name: 'F4 · Rust/Stone · Pure White',
    sub: 'reines Weiß #FFFFFF, Cards in Sand',
    bg: '#FFFFFF', bgWhite: '#F5F0E8',
    text: '#1C1A18', text2: '#524C46', text3: '#8A8279',
    border: 'rgba(170,90,66,0.14)', borderStrong: 'rgba(28,26,24,0.08)',
    accent: '#AA5A42', success: '#6B6258',
    m: ['#9E958C', '#BE8E70', '#B29C8E', '#6B6258', '#AA5A42'],
  },
];

window.PALETTES = PALETTES;
window.PALETTES_BG = PALETTES_BG;
