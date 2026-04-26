// Palette-Referenzen aus bekannten Apps (2026) + 4 neue Vorschläge für Pflege,
// die Motive aus populären Apps aufgreifen, aber eigenständig bleiben.

// Bekannte Apps mit ihren Signaturfarben (nur als Referenz, NICHT zum direkt-kopieren)
const APP_REFS = [
  // Lernen / Produktivität
  { id: 'duolingo', name: 'Duolingo', color: '#58CC02', bg: '#FFFFFF', note: 'Lern-Grün' },
  { id: 'quizlet', name: 'Quizlet', color: '#4257B2', bg: '#FFFFFF', note: 'Lern-Blau' },
  { id: 'anki', name: 'Anki', color: '#2F6FAF', bg: '#FAFAFA', note: 'Karteikarten-Blau' },
  { id: 'notion', name: 'Notion', color: '#2F3437', bg: '#FFFFFF', note: 'Monochrom Grau' },
  { id: 'linear', name: 'Linear', color: '#5E6AD2', bg: '#08090A', note: 'Dark + Violet' },
  { id: 'khan', name: 'Khan Academy', color: '#14BF96', bg: '#FFFFFF', note: 'Grün-Teal' },
  { id: 'chatgpt', name: 'ChatGPT', color: '#10A37F', bg: '#FFFFFF', note: 'Teal auf Weiß' },
  { id: 'claude', name: 'Claude', color: '#D97757', bg: '#F5F2EC', note: 'Terracotta + Cream' },
  // Social / Kommunikation
  { id: 'instagram', name: 'Instagram', color: '#E1306C', bg: '#FAFAFA', note: 'Rosa/Orange Gradient' },
  { id: 'tiktok', name: 'TikTok', color: '#25F4EE', bg: '#000000', note: 'Schwarz + Cyan/Magenta' },
  { id: 'threads', name: 'Threads', color: '#000000', bg: '#FFFFFF', note: 'Pure Monochrom' },
  { id: 'bereal', name: 'BeReal', color: '#000000', bg: '#FFFFFF', note: 'Komplett Schwarz/Weiß' },
  { id: 'whatsapp', name: 'WhatsApp', color: '#25D366', bg: '#F0F2F5', note: 'Grün auf Off-White' },
  { id: 'snapchat', name: 'Snapchat', color: '#FFFC00', bg: '#FFFFFF', note: 'Knall-Gelb' },
  { id: 'discord', name: 'Discord', color: '#5865F2', bg: '#313338', note: 'Blurple + Dark' },
  { id: 'signal', name: 'Signal', color: '#3A76F0', bg: '#FFFFFF', note: 'Ruhiges Blau' },
  // Medien / Streaming
  { id: 'spotify', name: 'Spotify', color: '#1DB954', bg: '#121212', note: 'Dark + Neon-Grün' },
  { id: 'youtube', name: 'YouTube', color: '#FF0033', bg: '#0F0F0F', note: 'Rot auf Dark' },
  { id: 'netflix', name: 'Netflix', color: '#E50914', bg: '#141414', note: 'Rot auf Schwarz' },
  // Lifestyle / Gesundheit
  { id: 'strava', name: 'Strava', color: '#FC4C02', bg: '#FFFFFF', note: 'Orange-Energie' },
  { id: 'calm', name: 'Calm', color: '#204F88', bg: '#E9F0F5', note: 'Ozean-Blau' },
  { id: 'headspace', name: 'Headspace', color: '#F4803F', bg: '#FFFBEA', note: 'Warmes Orange + Cream' },
  { id: 'apple-fitness', name: 'Apple Fitness', color: '#FB0F3E', bg: '#000000', note: 'Pink-Rot auf Dark' },
  // Payment / Finanzen
  { id: 'revolut', name: 'Revolut', color: '#0075EB', bg: '#FFFFFF', note: 'Clean Blau' },
  { id: 'paypal', name: 'PayPal', color: '#003087', bg: '#FFFFFF', note: 'Dunkelblau-Gelb' },
];

// 4 neue Pflege-Paletten, inspiriert von bekannten App-Patterns (aber eigenständig!)
const PALETTES_APP_INSPIRED = [
  {
    id: 'threads-warm', name: 'G · Threads-Style',
    sub: 'Pure Monochrom + warmer Off-White (wie Threads/BeReal, aber mit Wärme)',
    bg: '#FAF8F5', bgWhite: '#FFFFFF',
    text: '#0A0908', text2: '#4A4540', text3: '#8A8379',
    border: 'rgba(10,9,8,0.08)', borderStrong: 'rgba(10,9,8,0.12)',
    accent: '#0A0908', success: '#2F7A78',   // schwarz primär, teal für success
    m: ['#BEB6AC', '#8A8379', '#4A4540', '#2F7A78', '#0A0908'],
  },
  {
    id: 'chatgpt-style', name: 'H · ChatGPT-Teal',
    sub: 'Teal als Primary (wie ChatGPT), neutraler warmer BG',
    bg: '#F8F5F0', bgWhite: '#FFFFFF',
    text: '#1A1815', text2: '#4E4740', text3: '#8A8278',
    border: 'rgba(15,127,104,0.14)', borderStrong: 'rgba(26,24,21,0.10)',
    accent: '#0F7F68', success: '#3E5A6A',
    m: ['#9E958C', '#C4A088', '#AEA088', '#3E5A6A', '#0F7F68'],
  },
  {
    id: 'notion-quiet', name: 'I · Notion-Quiet',
    sub: 'Fast monochromes Warm-Grau, einzelner Akzent (wie Notion)',
    bg: '#F9F6F0', bgWhite: '#FFFFFF',
    text: '#191714', text2: '#504A42', text3: '#8C8478',
    border: 'rgba(25,23,20,0.10)', borderStrong: 'rgba(25,23,20,0.14)',
    accent: '#B75638', success: '#3F3A34',   // warmes Rot-Orange als einziger Akzent
    m: ['#A39A90', '#BC8E74', '#A09184', '#3F3A34', '#B75638'],
  },
  {
    id: 'quizlet-calm', name: 'J · Quizlet-Blue',
    sub: 'Ruhiges Lern-Blau (wie Quizlet), aber warmer BG statt weiß',
    bg: '#F6F3ED', bgWhite: '#FFFFFF',
    text: '#1A1816', text2: '#4E4740', text3: '#8A8278',
    border: 'rgba(62,82,140,0.14)', borderStrong: 'rgba(26,24,22,0.10)',
    accent: '#3E528C', success: '#A85A3C',
    m: ['#9E958C', '#C29080', '#A29484', '#A85A3C', '#3E528C'],
  },
];

window.APP_REFS = APP_REFS;
window.PALETTES_APP_INSPIRED = PALETTES_APP_INSPIRED;
