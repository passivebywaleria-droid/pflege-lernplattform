#!/usr/bin/env npx tsx
/**
 * Foto-Prompt-Generator: Identifiziert Steps die Bilder brauchen
 * und generiert optimierte Prompts für Bild-Generierung.
 *
 * Usage:
 *   npx tsx scripts/generate-foto-prompts.ts le-06          # Analyse + Prompts
 *   npx tsx scripts/generate-foto-prompts.ts le-06 --generate  # + Gemini API Generierung
 *
 * Output: content/le-{N}/foto-queue.json
 */

import * as fs from 'fs'
import * as path from 'path'

// ============================================================================
// Types
// ============================================================================

interface FotoPrompt {
  stepId: string
  session: string
  trigger: string
  beschreibung: string
  prompt: string
  promptEn: string
  svgTyp: 'positionen' | 'anatomy' | 'sequence' | 'process' | 'comparison' | 'scene' | 'device' | 'generic'
  bildkategorie: Bildkategorie
  /** Aspect Ratio für Gemini Imagen: 4:3 (Standard), 3:4 (Anatomie), 1:1 (Flashcard) */
  aspectRatio: '4:3' | '3:4' | '1:1' | '16:9'
  prioritaet: 'HOCH' | 'MITTEL' | 'NIEDRIG'
  status: 'offen' | 'generiert' | 'freigegeben'
  outputPath: string
  imageUrl?: string
  /** Pfad zum Referenzbild — Bot lädt es zusammen mit dem Prompt in Gemini hoch */
  referenzBild?: string
}

type Bildkategorie = 'szene' | 'anatomie' | 'prozedur' | 'geraet'

interface StepLike {
  stepId: string
  stepType: string
  bildhinweis?: string
  bildRef?: string
  bildkategorie?: Bildkategorie
  referenzBild?: string
  contentC1?: { body?: string; title?: string; fragetext?: string }
  contentB1?: { body?: string; title?: string; fragetext?: string }
  imageUrl?: string
  question?: {
    imageUrl?: string
    hotspot?: { imageUrl?: string }
    labelImage?: { imageUrl?: string }
    [key: string]: unknown
  }
  hotspot?: { imageUrl?: string }
  labelImage?: { imageUrl?: string }
  [key: string]: unknown
}

// ============================================================================
// Bild-Pflicht-Trigger (aus content-generator.md + didaktik-regisseur.md)
// ============================================================================

const BILD_PFLICHT_KEYWORDS: Record<string, { trigger: string; svgTyp: FotoPrompt['svgTyp']; prioritaet: FotoPrompt['prioritaet'] }> = {
  // Körperpositionen
  'Rückenlage': { trigger: 'Körperposition', svgTyp: 'positionen', prioritaet: 'HOCH' },
  'Bauchlage': { trigger: 'Körperposition', svgTyp: 'positionen', prioritaet: 'HOCH' },
  'Seitenlage': { trigger: 'Körperposition', svgTyp: 'positionen', prioritaet: 'HOCH' },
  'Oberkörperhochlage': { trigger: 'Körperposition', svgTyp: 'positionen', prioritaet: 'HOCH' },
  'Trendelenburg': { trigger: 'Körperposition', svgTyp: 'positionen', prioritaet: 'HOCH' },
  'Lagerung': { trigger: 'Körperposition', svgTyp: 'positionen', prioritaet: 'HOCH' },
  'Grundposition': { trigger: 'Körperposition', svgTyp: 'positionen', prioritaet: 'HOCH' },
  'Kinästhetik': { trigger: 'Körperposition', svgTyp: 'positionen', prioritaet: 'HOCH' },
  'Vierfüßlerstand': { trigger: 'Körperposition', svgTyp: 'positionen', prioritaet: 'HOCH' },
  'Schneidersitz': { trigger: 'Körperposition', svgTyp: 'positionen', prioritaet: 'HOCH' },

  // Anatomie
  'Anatomie': { trigger: 'Anatomie', svgTyp: 'anatomy', prioritaet: 'HOCH' },
  'Muskel': { trigger: 'Anatomie', svgTyp: 'anatomy', prioritaet: 'HOCH' },
  'Gelenk': { trigger: 'Anatomie', svgTyp: 'anatomy', prioritaet: 'MITTEL' },
  'Knochen': { trigger: 'Anatomie', svgTyp: 'anatomy', prioritaet: 'HOCH' },
  'Wirbelsäule': { trigger: 'Anatomie', svgTyp: 'anatomy', prioritaet: 'HOCH' },
  'Skelett': { trigger: 'Anatomie', svgTyp: 'anatomy', prioritaet: 'HOCH' },
  'Organ': { trigger: 'Anatomie', svgTyp: 'anatomy', prioritaet: 'HOCH' },

  // Wundstadien
  'Dekubitus': { trigger: 'Wundstadien', svgTyp: 'sequence', prioritaet: 'HOCH' },
  'Grad I': { trigger: 'Wundstadien', svgTyp: 'sequence', prioritaet: 'HOCH' },
  'Grad II': { trigger: 'Wundstadien', svgTyp: 'sequence', prioritaet: 'HOCH' },
  'Wundstadium': { trigger: 'Wundstadien', svgTyp: 'sequence', prioritaet: 'HOCH' },
  'Wundheilung': { trigger: 'Wundstadien', svgTyp: 'sequence', prioritaet: 'MITTEL' },

  // Bewegungsabläufe
  'Transfer': { trigger: 'Bewegungsablauf', svgTyp: 'sequence', prioritaet: 'HOCH' },
  'Mobilisation': { trigger: 'Bewegungsablauf', svgTyp: 'sequence', prioritaet: 'HOCH' },
  'Gehtraining': { trigger: 'Bewegungsablauf', svgTyp: 'sequence', prioritaet: 'MITTEL' },
  'Aufstehen': { trigger: 'Bewegungsablauf', svgTyp: 'sequence', prioritaet: 'MITTEL' },

  // Geräte
  'Rollator': { trigger: 'Gerät', svgTyp: 'device', prioritaet: 'MITTEL' },
  'Rollstuhl': { trigger: 'Gerät', svgTyp: 'device', prioritaet: 'MITTEL' },
  'Gehstock': { trigger: 'Gerät', svgTyp: 'device', prioritaet: 'MITTEL' },
  'Blutdruckmessgerät': { trigger: 'Gerät', svgTyp: 'device', prioritaet: 'MITTEL' },
  'Stethoskop': { trigger: 'Gerät', svgTyp: 'device', prioritaet: 'NIEDRIG' },

  // Prozesse
  'Pflegeprozess': { trigger: 'Prozess', svgTyp: 'process', prioritaet: 'MITTEL' },
  'Sturzprophylaxe': { trigger: 'Prozess', svgTyp: 'process', prioritaet: 'MITTEL' },
  'Kontrakturprophylaxe': { trigger: 'Prozess', svgTyp: 'process', prioritaet: 'MITTEL' },
  'Thromboseprophylaxe': { trigger: 'Prozess', svgTyp: 'process', prioritaet: 'MITTEL' },
}

// ============================================================================
// Prompt-Templates v2 — 4 Kategorie-spezifische Stile
// Quellen: Gemini Imagen Guide, Netter-Stil-Forschung, Tinystruggles (2025)
// ============================================================================

// Gemeinsamer Stil-Anker: Definiert die visuelle Identität über ALLE Kategorien
const STYLE_ANCHOR = `[VISUAL IDENTITY]
Color palette: dusty rose (#C4877F), sage green (#6B8F71), warm cream background (#fafaf9), warm gray contours (#78716c).
Status colors: success green (#6B8F71), warning amber (#D4956A), error coral (#C96B5C), info lavender (#9B7EA6).
All illustrations must feel warm, professional, and encouraging — like a trusted friend explaining medicine.
Absolutely no text, no labels, no annotations, no watermarks, no written words anywhere in the image.
High educational clarity, readable at mobile phone card size (4:3 aspect ratio).`

// Kategorie-spezifische Stil-Prefixe
const STYLE_PREFIXES: Record<Bildkategorie, string> = {
  szene: `Professional illustration for a nursing education mobile app.
Style: clean flat vector illustration with soft shadows and rounded shapes, modern educational app aesthetic (similar to Brilliant.org or Duolingo). Warm, friendly, approachable.
Characters have diverse appearances (different genders, skin tones, ages, body types, including hijab), simple expressive faces with warm eyes, professional nursing scrubs.
Soft natural window light, warm atmosphere, three-quarter camera angle.
${STYLE_ANCHOR}`,

  anatomie: `Professional medical textbook illustration, educational anatomy diagram for nursing students.
Style: Frank Netter-inspired with modern digital coloring — detailed but approachable. Color-coded anatomical layers with fine precise linework, slight watercolor-like shading for depth.
Use STANDARD MEDICAL TEXTBOOK COLORS (like Netter, Sobotta, I Care Anatomie):
- Arterial blood: bright red (#CC3333)
- Venous blood: dark blue (#334499)
- Muscles/soft tissue: salmon pink / reddish-brown
- Bones: ivory / pale yellow
- Cartilage: light blue-gray
- Nerves: yellow
- Organs: natural organ colors (liver brown, kidney dark red, lung pink, heart dark red)
- Fat tissue: warm yellow
- Connective tissue / fascia: white-gray
Do NOT use the app's design colors (no dusty rose, no sage green for anatomy). Use real anatomical colors as seen in medical textbooks.
Clean white background. Show the anatomy as a clear educational diagram — accurate proportions, correct spatial relationships.
Focus on what is clinically relevant for NURSING STUDENTS: functional anatomy, not deep surgical anatomy. Show structures that nurses need to understand for patient care, assessment, and documentation.
Absolutely no text, no labels, no annotations, no watermarks, no written words anywhere in the image.
High educational clarity, readable at mobile phone card size.
Aspect ratio: 3:4 (portrait, for anatomy diagrams).`,

  prozedur: `Professional step-by-step illustration for a nursing education app.
Style: clean flat vector illustration arranged as 3-4 sequential panels from left to right, connected by gentle curved arrows in sage green. Each panel shows one clear step of the procedure.
Characters: consistent nurse character across all panels — diverse, professional, wearing proper scrubs. Patient shown as active participant.
Small numbered circles (1, 2, 3, 4) in dusty rose mark each step. Clean white background per panel, slight rounded panel borders.
${STYLE_ANCHOR}`,

  geraet: `Technical product illustration of medical equipment for a nursing education app.
Style: clean isometric or three-quarter view, modern technical illustration with flat color fills and thin precise outlines. Light warm gray background (#f5f5f0).
Color-code functional parts using the warm palette: controls in dusty rose, support structures in sage green, safety features highlighted in amber.
Show the device clearly and completely. A friendly cartoon nurse character stands next to it for scale reference, demonstrating correct handling.
Think "IKEA instruction manual meets medical textbook" — simple, clear, approachable.
${STYLE_ANCHOR}`,
}

// Legacy: Einfacher Prefix für Abwärtskompatibilität
const STYLE_PREFIX = STYLE_PREFIXES.szene

// ============================================================================
// Pflege-Bild-Regeln: NUR POSITIV formuliert
// Quellen:
//   - Unfallkasse NRW: Rückengerechter Patiententransfer (GUV-I 8535)
//   - BGW: Rückengerecht arbeiten in der ambulanten Pflege
//   - RKI: Hygienerichtlinien (Schmuck, Haare, Hände)
//   - DGKH: Kleiderpapier (Dienstkleidung)
//   - CDC/NIOSH: Safe Patient Handling for Schools of Nursing
//   - AMN Healthcare: Body Language and Patients
//   - OJIN 2025: AI Images Portraying Nurses (Diversität)
//   - HEWI/Sicheres Krankenhaus: Patientenzimmer-Standards
//
// WICHTIG: KI-Bildgeneratoren ignorieren Negationen ("do NOT show X").
// Wenn man "keine verschränkten Arme" sagt, zeigt die KI verschränkte Arme.
// Deshalb: NUR beschreiben WAS zu sehen sein soll, NIE was nicht.
// ============================================================================

/**
 * Pflege-Qualitätsregeln — NUR positive Anweisungen.
 * Wird an jeden Prompt angehängt.
 * Aufgeteilt in 4 Blöcke: Pflegekraft, Patient, Raum, Interaktion.
 */
const CARE_QUALITY_RULES = `

CAREGIVER APPEARANCE (German hospital, realistic):
- Wears a short-sleeved Kasack (medical scrub top) in white, light blue, or sage green, paired with matching scrub pants. Clean, wrinkle-free, professional fit.
- Hair is tied back in a bun or braid (long hair always secured). Short hair neatly styled.
- Bare forearms: no wristwatch, no bracelet, no rings. Short, clean natural fingernails with no nail polish.
- Small ear studs are acceptable. No other visible jewelry.
- Bare hands during patient contact (gloves only during wound care, catheter care, or contact with bodily fluids).
- Comfortable, closed professional shoes (clogs or nursing shoes) in white or light colors.
- DIVERSITY: Show a mix of genders, skin tones, ages, and body types across images. Include male nurses, nurses wearing hijab (tucked into scrubs), nurses with different hair textures. Avoid only young, slim, white, female nurses.

PATIENT APPEARANCE:
- Wears a hospital gown (Patientenhemd) or comfortable personal clothing (T-shirt, sweatpants). Covered with a light blanket when lying in bed.
- Patients look like real people: elderly with wrinkles and gray hair, or younger adults. Various skin tones and body types.
- Patients are always shown as active participants — sitting up, reaching out, stepping, holding on to grab bars — with the caregiver guiding and encouraging, never carrying or dragging.
- Patients have dignified, calm, or gently smiling expressions. They look comfortable and safe.

ROOM SETTING (German hospital, realistic):
- Modern German hospital room: adjustable electric bed with side rails (lowered), bedside table (Nachttisch) with water glass and personal items.
- Overhead trapeze bar (Bettgalgen) above the bed for patient self-support.
- Call button (Rufknopf) clipped to the pillow or bed rail, within arm's reach.
- IV pole (Infusionsständer) nearby if medically relevant.
- Large window with daylight, cream or light-colored walls, clean linoleum floor.
- Grab handles on walls near the bed. Anti-slip mat on the floor beside the bed.
- Bathroom door visible in background. Room feels clean, bright, and calming — not sterile or cold.
- Mobility aids nearby when relevant: walker (Rollator), wheelchair, transfer board, standing aid.

INTERACTION STYLE:
- Caregivers always have an open, welcoming posture: arms relaxed at sides, or one hand gently on the patient's shoulder or hand.
- Caregivers always face the patient, making warm eye contact at the patient's eye level (bending knees or sitting down if patient is seated/lying).
- When helping a patient move: caregiver supports at the torso or hip with flat palms, knees bent, back straight. Use of transfer aids visible (slide sheet, transfer board, standing aid).
- Every touch is respectful: gentle flat-palm contact on shoulder, upper back, or hand.
- The mood is warm, safe, encouraging, and professional. Like a trusted friend helping, not a clinical procedure.`

/**
 * Begriffe die im bildhinweis erkannt werden → automatisch durch
 * pflegerisch korrekte POSITIVE Formulierung ersetzt.
 */
const BLACKLIST_PATTERNS: { pattern: RegExp; warnung: string; ersetzung: string }[] = [
  {
    pattern: /verschränkte[nr]?\s*Arme[n]?/i,
    warnung: 'Verschränkte Arme → offene Körpersprache',
    ersetzung: 'Hände locker an der Seite, eine Hand ermutigend auf der Schulter des Patienten',
  },
  {
    pattern: /unter\s*den?\s*Achseln?\s*(hoch|greif|zieh|heb)/i,
    warnung: 'Achselgriff → Rumpfunterstützung',
    ersetzung: 'stützt den Patienten am Rumpf mit flachen Händen, nutzt ein Transferbrett',
  },
  {
    pattern: /am\s*(Arm|Handgelenk|Hand)\s*(hoch|zieh|zerr)/i,
    warnung: 'Am Arm ziehen → Hand-in-Hand',
    ersetzung: 'gibt dem Patienten die Hand als Halt, der Patient zieht sich selbst hoch',
  },
  {
    pattern: /am\s*(Hals|Nacken|Kopf)\s*(hoch|zieh|greif|zerr)/i,
    warnung: 'Hals/Nacken-Griff → sanfte Kopfstütze',
    ersetzung: 'stützt den Kopf sanft mit flacher Hand unter dem Hinterkopf',
  },
  {
    pattern: /am\s*Hosenbund\s*(hoch|zieh|greif)/i,
    warnung: 'Hosenbund-Griff → Transferhilfe',
    ersetzung: 'nutzt einen Transfergurt um die Hüfte, der Patient hält sich am Bettgalgen fest',
  },
  {
    pattern: /Fixierung|fixiert|angebunden|festgebunden|gefesselt/i,
    warnung: 'Fixierung → Alternativen zeigen',
    ersetzung: 'Sturzmatte neben dem Bett, Niedrigbett auf Bodenhöhe, Sensormatte am Boden',
  },
  {
    pattern: /allein\s*(auf|am)\s*Boden|gestürzt\s*und\s*allein/i,
    warnung: 'Allein am Boden → Hilfe zeigen',
    ersetzung: 'eine Pflegekraft kniet neben dem Patienten am Boden und hilft beim Aufstehen',
  },
  {
    pattern: /nackt|unbekleidet|entblößt/i,
    warnung: 'Entblößt → bekleidet zeigen',
    ersetzung: 'trägt ein Krankenhaushemd und ist mit einer Decke zugedeckt',
  },
  {
    pattern: /Handschuhe/i,
    warnung: 'Handschuhe nur bei klinischer Tätigkeit',
    ersetzung: 'bare hands (with gloves only if performing wound care or handling bodily fluids)',
  },
  {
    pattern: /Rücken\s*zum\s*Patient|abgewandt/i,
    warnung: 'Abgewandt → zugewandt',
    ersetzung: 'steht dem Patienten zugewandt, mit freundlichem Blickkontakt',
  },
  {
    pattern: /Handy|Smartphone|Telefon\s*(schaut|tippt|guckt)/i,
    warnung: 'Handy bei Patient → volle Aufmerksamkeit',
    ersetzung: 'schenkt dem Patienten volle Aufmerksamkeit mit warmem Blickkontakt',
  },
  {
    pattern: /auf\s*den?\s*Kopf\s*(klopf|tätschel|streichel)/i,
    warnung: 'Kopf tätscheln → respektvolle Geste',
    ersetzung: 'legt ermutigend eine Hand auf die Schulter des Patienten',
  },
  // Hygiene-Verstöße
  {
    pattern: /Armbanduhr|Uhr\s*am\s*Handgelenk/i,
    warnung: 'Armbanduhr bei Patientenkontakt verboten (RKI)',
    ersetzung: 'Bare Unterarme ohne Uhr und Schmuck',
  },
  {
    pattern: /lange\s*Fingernägel|Nagellack|Gelnägel|künstliche\s*Nägel/i,
    warnung: 'Nagellack/Gelnägel verboten bei Patientenkontakt (RKI)',
    ersetzung: 'kurze, saubere Naturnägel ohne Nagellack',
  },
  {
    pattern: /offene\s*Haare|Haare\s*offen/i,
    warnung: 'Lange offene Haare sind im Krankenhaus verboten',
    ersetzung: 'Haare zusammengebunden in einem Dutt oder Zopf',
  },
  // Klischees
  {
    pattern: /Stethoskop\s*um\s*(den\s*)?(Hals|Nacken)/i,
    warnung: 'Stethoskop um Hals = Arzt-Klischee, nicht typisch für Pflegekräfte',
    ersetzung: 'Pflegekraft ohne Stethoskop (Stethoskop liegt ggf. auf dem Tisch)',
  },
  {
    pattern: /Häubchen|Schwesternhaube|Haube/i,
    warnung: 'Schwesternhaube ist ein veraltetes Klischee',
    ersetzung: 'moderner Kasack ohne Haube, professionelle Frisur',
  },
  // Gefährliche Transfertechniken
  {
    pattern: /hebt?\s*(den\s*)?Patient(en)?\s*(allein|ohne\s*Hilfe|manuell)/i,
    warnung: 'Manuelles Heben allein ist verboten',
    ersetzung: 'nutzt ein Transferbrett und bittet den Patienten zur Mithilfe, unterstützt am Rumpf',
  },
  {
    pattern: /durchgestreckte[nr]?\s*Beine[n]?\s*(beim\s*)?(Heben|Bücken)/i,
    warnung: 'Durchgestreckte Beine beim Heben → Rückenschaden',
    ersetzung: 'steht mit leicht gebeugten Knien in breitem Stand, Rücken gerade',
  },
]

// ============================================================================
// Prozedur-Checklisten — medizinisch korrekte Details pro Verfahren
// Werden bei bildkategorie='prozedur' automatisch an den Prompt angehängt.
// Jede Checkliste beschreibt POSITIV was zu sehen sein muss.
// ============================================================================

const PROCEDURE_CHECKLISTS: Record<string, string> = {
  verbandswechsel: `
PROCEDURE: Wound dressing change (Verbandswechsel)
- Caregiver wears disposable gloves (this is a clinical procedure — gloves required here).
- A kidney dish (Nierenschale) or disposal bag nearby for used dressings.
- Sterile dressing pack opened on a clean surface (sterile field with green cloth).
- Wound cleaning: saline solution bottle, sterile swabs, forceps (Pinzette).
- New dressing materials ready: gauze pads, adhesive tape, or transparent film dressing.
- Work direction: from clean to contaminated (from wound center outward).
- Patient is positioned comfortably, wound area exposed but rest of body covered.
- Hand disinfection bottle (Händedesinfektionsmittel) visible on the bedside table.`,

  blutdruckmessung: `
PROCEDURE: Blood pressure measurement (Blutdruckmessung)
- Cuff (Manschette) placed on the UPPER ARM (Oberarm), 2-3 cm above the elbow crease.
- Cuff sits snug but not tight — one finger fits underneath.
- Patient sits upright and relaxed, arm resting on a table at heart level, palm facing up.
- Patient's sleeve is rolled up above the cuff — no clothing under the cuff.
- Stethoscope placed at the inner elbow crease (Arteria brachialis).
- Caregiver holds the manometer or reads the digital display at eye level.
- If digital device: automatic cuff on upper arm, display showing numbers clearly.`,

  injektion: `
PROCEDURE: Injection (Injektion)
- Caregiver wears disposable gloves.
- Injection site is disinfected with a swab in circular motion, center outward, and allowed to air-dry.
- Syringe held like a pen (Schreibhaltung) between thumb and index finger.
- Subcutaneous (s.c.): needle at 45° angle, skin fold pinched gently with other hand.
- Intramuscular (i.m.): needle at 90° angle into the muscle (deltoid or vastus lateralis).
- Sharps container (Kanülenabwurfbox, yellow) clearly visible nearby — needle goes in immediately after use.
- Aspiration check visible: plunger pulled back slightly before injecting.
- Cotton swab ready for after the injection.`,

  katheter: `
PROCEDURE: Catheter care (Katheterpflege)
- Caregiver wears disposable gloves.
- Urine drainage bag (Urinbeutel) hangs BELOW bladder level on the bed frame — never on the floor.
- Catheter tube runs in a gentle curve, no kinks or loops — secured to the patient's thigh with a strap.
- Drainage bag has a measuring scale visible, with clear/yellow urine inside.
- Intimate area is covered as much as possible — only the catheter insertion site visible.
- Disinfection materials nearby for catheter care.
- Patient looks comfortable and dignified despite the catheter.`,

  sturzprophylaxe: `
PROCEDURE: Fall prevention (Sturzprophylaxe)
- Room is well-lit, no cables or obstacles on the floor.
- Anti-slip mat beside the bed.
- Bed is at its lowest height setting, close to the floor.
- Walking aids (Rollator, walking stick) within arm's reach of the patient.
- Patient wears non-slip shoes or socks with grip soles (ABS-Socken).
- Call button clipped to pillow or bed rail, easy to reach.
- Night light visible near the bathroom door.
- Grab handles (Haltegriffe) on the wall near the bed and in the bathroom.`,

  koerperpflege: `
PROCEDURE: Body care / personal hygiene (Körperpflege)
- Wash basin with warm water, washcloths, towels, soap/washing lotion on the bedside table.
- Privacy screen or curtain drawn around the bed.
- Patient is partially covered — only the body part being washed is exposed.
- Caregiver washes from clean to less clean: face first, then torso, arms, legs, intimate area last.
- Separate washcloths for face and intimate area (different colors).
- Skin care products (lotion, cream) visible for after washing.
- Patient participates as much as possible — holding washcloth, washing own face.`,

  lagerung: `
PROCEDURE: Positioning / repositioning (Lagerung / Positionierung)
- Positioning aids visible: pillows, wedge cushions (Lagerungskissen), rolled towels, foam wedges.
- 30° side position (Schräglage): patient tilted with pillow behind the back, legs slightly bent.
- Pressure points protected: heels elevated with pillow, sacrum off-loaded.
- Patient looks comfortable, body aligned naturally — no twisted spine.
- Bed rails lowered on the working side.
- Repositioning clock or schedule card visible on the wall (optional).
- If two caregivers: both on the same side, using a slide sheet (Gleitlaken) under the patient.`,

  vitalzeichen: `
PROCEDURE: Vital signs measurement (Vitalzeichenkontrolle)
- Thermometer: placed in the ear (ear thermometer) or under the armpit. Digital display visible.
- Pulse: caregiver's index and middle finger placed on the patient's radial artery (inner wrist, thumb side). Caregiver looks at a watch or clock.
- Respiration: caregiver observes the patient's chest movements while appearing to count the pulse (so patient breathes naturally).
- Pulse oximeter: small clip device on the patient's index finger, digital display showing SpO2 and pulse rate.
- Documentation: clipboard or digital tablet nearby to record values.`,

  medikamente: `
PROCEDURE: Medication administration (Medikamentengabe)
- Medication cup (Medikamentenbecher) or blister pack with pills visible.
- Glass of water for the patient to take oral medication.
- Caregiver checks medication against a prescription sheet or digital device (5-R-Regel).
- Patient is sitting upright (not lying flat) when taking oral medication.
- Patient swallows the medication while caregiver observes.
- If eye drops: patient tilts head back, caregiver gently pulls down lower eyelid, drop falls into conjunctival sac.
- Medication trolley (Medikamentenwagen) visible in background if on a ward round.`,
}

/**
 * Erkennt automatisch die passende Prozedur-Checkliste anhand von Keywords im Content.
 */
function detectProcedure(step: StepLike): string | null {
  const text = [
    step.bildhinweis,
    step.contentC1?.title,
    step.contentC1?.body,
    step.contentB1?.title,
    step.contentB1?.body,
  ].filter(Boolean).join(' ').toLowerCase()

  const mappings: [RegExp, string][] = [
    [/verbandswechsel|wundversorgung|wundauflage|verband\s*anlegen/i, 'verbandswechsel'],
    [/blutdruck|riva.rocci|rr.wert|manschette/i, 'blutdruckmessung'],
    [/injektion|spritze|subkutan|intramus|kanüle|impf/i, 'injektion'],
    [/katheter|blasenkatheter|dauerkatheter|urinbeutel/i, 'katheter'],
    [/sturzprophylaxe|sturzrisiko|sturzvermeidung|sturzprävent/i, 'sturzprophylaxe'],
    [/körperpflege|ganzkörperwäsche|wasch|grundpflege|intimp/i, 'koerperpflege'],
    [/lagerung|positionierung|umlagern|drehen|30.grad|dekubitusprophylaxe/i, 'lagerung'],
    [/vitalzeichen|puls|temperatur|atemfrequenz|blutdruck|spo2|pulsox/i, 'vitalzeichen'],
    [/medikament|tablette|arzneimittel|tropfen|augentropfen|5.r.regel/i, 'medikamente'],
  ]

  for (const [pattern, key] of mappings) {
    if (pattern.test(text)) return key
  }
  return null
}

/**
 * Prompt-Zusatz für Referenzbilder — Gemini soll das Referenzbild im App-Stil neu zeichnen.
 */
const REFERENCE_IMAGE_PROMPT = `

REFERENCE IMAGE INSTRUCTIONS:
The uploaded image is a medical REFERENCE — use it as anatomical guidance only.
Create a COMPLETELY NEW illustration from scratch in warm cartoon style (like Duolingo or Brilliant.org).
The new image must look totally different from the reference: soft rounded shapes, thick outlines, warm dusty rose and sage green colors, cream background.
Use the reference ONLY to get the anatomy right (correct positions, proportions, number of structures).
The final result should look like a page from a friendly illustrated science book — simple, colorful, approachable.
Think: "If a children's book illustrator redrew a medical textbook diagram."
IMPORTANT: The output must be a cartoon, not a copy of the reference.`

/**
 * Kategorie-spezifische Qualitäts-Zusatzregeln (an Prompt angehängt NACH dem Stil-Prefix).
 * Die Stil-Differenzierung passiert jetzt über STYLE_PREFIXES oben.
 * Hier stehen nur inhaltliche Qualitätsregeln.
 */
const CATEGORY_STYLE: Record<Bildkategorie, string> = {
  szene: '', // CARE_QUALITY_RULES reichen für Szenen

  anatomie: `
ANATOMICAL ACCURACY RULES:
- Proportions and spatial relationships must be anatomically correct.
- Color-code different tissue types consistently: muscle (dusty rose), organ parenchyma (sage green), bone (cream/ivory), arterial blood (coral #C96B5C), venous blood (teal #5A8A9A), nerve (lavender #9B7EA6), cartilage (light blue-gray), fat (warm yellow).
- If showing a body region: include surrounding structures for anatomical context.
- Show the relevant anatomical view clearly: anterior, posterior, lateral, cross-section, or sagittal as appropriate.
- Small colored dots or subtle numbered markers may indicate key structures (but absolutely no text labels).
- Include a subtle scale indicator if size matters for understanding.`,

  prozedur: `
CLINICAL PROCEDURE ACCURACY RULES:
- Each step must show the correct technique, hand position, and body mechanics.
- Work direction matters: always show clean-to-contaminated flow.
- Hand hygiene: disinfection bottle visible, gloves when clinically required.
- Waste disposal: sharps container (yellow), waste bags visible where relevant.
- The patient participates actively where possible — shown as a person, not just a passive body.
- Materials and instruments must be recognizable and in the correct position.`,

  geraet: `
MEDICAL DEVICE ACCURACY RULES:
- The device must be recognizable to nursing students who will use it in practice.
- All key components, controls, and safety features must be visible and correctly positioned.
- Include relevant accessories (cables, tubes, adapters, attachments) in their correct positions.
- Show any display screens, buttons, or adjustment mechanisms clearly.
- If the device connects to the patient: show the correct connection point and method.`,
}

/**
 * Erkennt die Bildkategorie aus svgTyp oder explizitem Feld.
 */
function detectKategorie(step: StepLike, svgTyp: FotoPrompt['svgTyp']): Bildkategorie {
  if (step.bildkategorie) return step.bildkategorie
  if (svgTyp === 'anatomy') return 'anatomie'
  if (svgTyp === 'device') return 'geraet'
  if (svgTyp === 'sequence' || svgTyp === 'process') {
    // Prüfe ob es eine medizinische Prozedur ist
    if (detectProcedure(step)) return 'prozedur'
  }
  return 'szene'
}

/**
 * Baut den Qualitäts-Anhang zusammen: Basis + Kategorie + Prozedur-Checkliste.
 */
function buildQualityRules(kategorie: Bildkategorie, step: StepLike): string {
  let rules = CARE_QUALITY_RULES
  const categoryExtra = CATEGORY_STYLE[kategorie]
  if (categoryExtra) rules += categoryExtra

  // Prozedur-Checkliste anhängen wenn erkannt
  if (kategorie === 'prozedur') {
    const proc = detectProcedure(step)
    if (proc && PROCEDURE_CHECKLISTS[proc]) {
      rules += PROCEDURE_CHECKLISTS[proc]
      console.log(`    📋 Prozedur erkannt: ${proc}`)
    }
  }

  // Referenzbild-Hinweis wenn vorhanden
  if (step.referenzBild) {
    rules += REFERENCE_IMAGE_PROMPT
    console.log(`    🖼️  Referenzbild: ${step.referenzBild}`)
  }

  return rules
}

function generatePrompt(step: StepLike, trigger: string, svgTyp: FotoPrompt['svgTyp']): { prompt: string; promptEn: string; bildkategorie: Bildkategorie; referenzBild?: string } {
  const title = step.contentC1?.title || step.contentB1?.title || step.stepId
  const kategorie = detectKategorie(step, svgTyp)
  const stylePrefix = STYLE_PREFIXES[kategorie]

  // PRIORITÄT: bildhinweis von der Dozentin → direkt als Prompt nutzen
  if (step.bildhinweis) {
    let cleanedHinweis = step.bildhinweis
    for (const rule of BLACKLIST_PATTERNS) {
      if (rule.pattern.test(cleanedHinweis)) {
        console.log(`    ⚠️  BLACKLIST [${step.stepId}]: ${rule.warnung}`)
        console.log(`       Ersetzung: ${rule.ersetzung}`)
        cleanedHinweis = cleanedHinweis.replace(rule.pattern, rule.ersetzung)
      }
    }
    const qualityRules = buildQualityRules(kategorie, step)
    const promptEn = `${stylePrefix}\n\n${cleanedHinweis}${qualityRules}`
    const prompt = `Pflege-Lehrbild (Dozentin): ${title}. ${cleanedHinweis}`
    return { prompt, promptEn, bildkategorie: kategorie, referenzBild: step.referenzBild }
  }

  const body = step.contentC1?.body || step.contentB1?.body || ''

  // Fallback: Automatisch aus Content extrahieren — KÜRZER + VISUELLER
  const rawBody = body
    .replace(/\*\*/g, '')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .substring(0, 250)
  const lastDot = rawBody.lastIndexOf('.')
  const cleanBody = lastDot > 50 ? rawBody.substring(0, lastDot + 1) : rawBody.substring(0, 150)

  // v2 Templates: Nutzen kategorie-spezifische Prefixe + narrative Beschreibung
  const templates: Record<string, (t: string, b: string) => string> = {
    positionen: (t, b) =>
      `${STYLE_PREFIXES.szene}\n\nScene: A nursing student demonstrates the body position "${t}" with an elderly patient in a modern German hospital room. ${b}. The nurse guides the patient gently, showing correct body mechanics. Camera angle: side view, showing the full body position clearly. The patient is actively participating, holding onto the bed rail or nurse's hand. Warm window light illuminates the room.`,

    anatomy: (t, b) =>
      `${STYLE_PREFIXES.anatomie}\n\nSubject: "${t}" — educational anatomical diagram. ${b}. Show a clear ${detectAnatomyView(b)} view with color-coded anatomical structures. Each tissue type uses a distinct warm color. The illustration should be detailed enough for nursing students to identify key structures, but approachable and warm — like a modern illustrated anatomy atlas, not a cold clinical diagram.`,

    sequence: (t, b) =>
      `${STYLE_PREFIXES.prozedur}\n\nProcedure: "${t}" shown as 3-4 sequential steps. ${b}. Panel 1 shows preparation, middle panels show the key actions, final panel shows the completed result. The nurse character is consistent across all panels. Each step is visually distinct and self-explanatory without text.`,

    process: (t, b) =>
      `${STYLE_PREFIXES.prozedur}\n\nProcess: "${t}" visualized as a flowing diagram. ${b}. Show 4-5 connected stages as rounded cards with small recognizable icons inside each one (clipboard, heart, hands, bed). Connected by gentle curved arrows in sage green. Clean top-to-bottom layout, each stage visually distinct through color and icon.`,

    comparison: (t, b) =>
      `${STYLE_PREFIXES.szene}\n\nComparison: "${t}" shown as a side-by-side illustration. ${b}. Left side and right side are divided by a subtle dotted line. Both sides feature the same patient character in different situations. Warmer tones (dusty rose) for the positive/correct side, cooler tones (teal gray) for the other. The visual contrast should be immediately obvious.`,

    scene: (t, b) =>
      `${STYLE_PREFIXES.szene}\n\nScene: "${t}" in a modern German hospital room. ${b}. A professional nurse interacts warmly with the patient. The room has natural daylight from a large window, warm cream walls, an adjustable hospital bed, and a bedside table. The mood is safe, warm, and encouraging. Three-quarter camera angle showing both characters' expressions.`,

    device: (t, b) =>
      `${STYLE_PREFIXES.geraet}\n\nDevice: "${t}" — medical equipment illustration. ${b}. Show the complete device from a clear three-quarter angle. A nurse character stands beside it demonstrating correct usage. Key functional parts are subtly highlighted through color coding. All controls, displays, and connection points are clearly visible.`,

    generic: (t, b) =>
      `${STYLE_PREFIXES.szene}\n\nSubject: "${t}" — educational nursing illustration. ${b}. Feature professional nursing characters in a clean, modern healthcare setting. The illustration communicates the concept visually without relying on text — through body language, positioning, and visual metaphors.`,
  }

  const qualityRules = buildQualityRules(kategorie, step)
  const promptEn = (templates[svgTyp] || templates.generic)(title, cleanBody) + qualityRules
  const prompt = `Pflege-Lehrbild (${kategorie}): ${title}. Trigger: ${trigger}. Typ: ${svgTyp}. Kontext: ${cleanBody}`

  return { prompt, promptEn, bildkategorie: kategorie, referenzBild: step.referenzBild }
}

/** Erkennt die passende anatomische Ansicht aus dem Content-Text */
function detectAnatomyView(text: string): string {
  const lower = text.toLowerCase()
  if (lower.includes('querschnitt') || lower.includes('cross-section')) return 'cross-section'
  if (lower.includes('frontal') || lower.includes('anterior') || lower.includes('vorne')) return 'anterior'
  if (lower.includes('lateral') || lower.includes('seitlich') || lower.includes('seite')) return 'lateral'
  if (lower.includes('posterior') || lower.includes('hinten') || lower.includes('dorsal')) return 'posterior'
  if (lower.includes('sagittal')) return 'sagittal'
  return 'anterior'  // Default
}

// ============================================================================
// Step-Analyse
// ============================================================================

function hatBereitsImage(step: StepLike): boolean {
  if (step.imageUrl && !step.imageUrl.startsWith('svg:')) return true
  if (step.question?.imageUrl) return true
  if (step.question?.hotspot?.imageUrl) return true
  if (step.question?.labelImage?.imageUrl) return true
  if (step.hotspot?.imageUrl) return true
  if (step.labelImage?.imageUrl) return true
  return false
}

function findeTriggersInStep(step: StepLike): { keyword: string; trigger: string; svgTyp: FotoPrompt['svgTyp']; prioritaet: FotoPrompt['prioritaet'] }[] {
  const texte = [
    step.contentC1?.title,
    step.contentC1?.body,
    step.contentC1?.fragetext,
    step.contentB1?.title,
    step.contentB1?.body,
    step.contentB1?.fragetext,
  ].filter(Boolean).join(' ')

  const gefunden: { keyword: string; trigger: string; svgTyp: FotoPrompt['svgTyp']; prioritaet: FotoPrompt['prioritaet'] }[] = []
  const seenTriggers = new Set<string>()

  for (const [keyword, config] of Object.entries(BILD_PFLICHT_KEYWORDS)) {
    if (texte.includes(keyword) && !seenTriggers.has(config.trigger)) {
      gefunden.push({ keyword, ...config })
      seenTriggers.add(config.trigger)
    }
  }

  return gefunden
}

// ============================================================================
// Main
// ============================================================================

function analyzeLE(leId: string): FotoPrompt[] {
  const lePath = path.join(process.cwd(), 'content', leId)
  if (!fs.existsSync(lePath)) {
    console.error(`❌ ${lePath} existiert nicht`)
    process.exit(1)
  }

  const stepFiles = fs.readdirSync(lePath).filter(f => f.startsWith('steps-s') && f.endsWith('.ts'))
  const prompts: FotoPrompt[] = []
  let totalSteps = 0
  let mitBild = 0
  let ohneBild = 0

  for (const file of stepFiles) {
    const session = file.replace('steps-', '').replace('.ts', '')
    try {
      const mod = require(path.join(lePath, file))
      const stepsKey = Object.keys(mod).find(k => k.startsWith('STEPS_'))
      if (!stepsKey) continue

      const steps = mod[stepsKey] as StepLike[]
      totalSteps += steps.length

      for (const step of steps) {
        if (hatBereitsImage(step)) {
          mitBild++
          continue
        }

        const triggers = findeTriggersInStep(step)
        if (triggers.length === 0) {
          ohneBild++
          continue
        }

        // Höchste Priorität nehmen
        const bestTrigger = triggers.sort((a, b) => {
          const order = { HOCH: 0, MITTEL: 1, NIEDRIG: 2 }
          return order[a.prioritaet] - order[b.prioritaet]
        })[0]

        const result = generatePrompt(step, bestTrigger.trigger, bestTrigger.svgTyp)

        // Aspect Ratio basierend auf Kategorie
        const aspectRatio: FotoPrompt['aspectRatio'] =
          result.bildkategorie === 'anatomie' ? '3:4' :
          result.bildkategorie === 'geraet' ? '4:3' :
          result.bildkategorie === 'prozedur' ? '16:9' : '4:3'

        prompts.push({
          stepId: step.stepId,
          session,
          trigger: `${bestTrigger.trigger} (${bestTrigger.keyword})`,
          beschreibung: `${step.bildRef ? step.bildRef + ': ' : ''}${(step.contentC1?.title || step.stepId).substring(0, 100)}`,
          prompt: result.prompt,
          promptEn: result.promptEn,
          svgTyp: bestTrigger.svgTyp,
          bildkategorie: result.bildkategorie,
          aspectRatio,
          prioritaet: bestTrigger.prioritaet,
          status: 'offen',
          outputPath: `/images/content/${leId}/${step.stepId}.png`,
          ...(result.referenzBild ? { referenzBild: result.referenzBild } : {}),
        })
      }
    } catch (e) {
      console.error(`  ⚠️ ${file}: ${(e as Error).message}`)
    }
  }

  // Zusammenfassung
  console.log(`\n${'═'.repeat(60)}`)
  console.log(`📸 Foto-Prompt-Generator: ${leId}`)
  console.log(`${'═'.repeat(60)}`)
  console.log(`  Steps gesamt:     ${totalSteps}`)
  console.log(`  Bereits mit Bild: ${mitBild}`)
  console.log(`  Kein Trigger:     ${ohneBild}`)
  console.log(`  Bild benötigt:    ${prompts.length}`)
  console.log()

  // Nach Priorität sortieren
  const sorted = [...prompts].sort((a, b) => {
    const order = { HOCH: 0, MITTEL: 1, NIEDRIG: 2 }
    return order[a.prioritaet] - order[b.prioritaet]
  })

  // Trigger-Zusammenfassung
  const triggerCounts: Record<string, number> = {}
  for (const p of sorted) {
    const t = p.trigger.split(' (')[0]
    triggerCounts[t] = (triggerCounts[t] || 0) + 1
  }
  console.log('  Trigger-Verteilung:')
  for (const [trigger, count] of Object.entries(triggerCounts)) {
    console.log(`    ${trigger}: ${count}`)
  }

  // Top 10 ausgeben
  console.log(`\n  Top ${Math.min(10, sorted.length)} Bild-Bedarf:`)
  for (const p of sorted.slice(0, 10)) {
    const icon = p.prioritaet === 'HOCH' ? '🔴' : p.prioritaet === 'MITTEL' ? '🟡' : '⚪'
    console.log(`    ${icon} [${p.prioritaet}] ${p.stepId}: ${p.beschreibung}`)
    console.log(`       Trigger: ${p.trigger} | Typ: ${p.svgTyp}`)
  }

  return sorted
}

// ============================================================================
// Gemini API Generation (optional)
// ============================================================================

async function generateWithGemini(prompts: FotoPrompt[], leId: string): Promise<void> {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY
  if (!apiKey) {
    console.log('\n⚠️ Kein GOOGLE_API_KEY gesetzt — nur Prompts generiert, keine Bilder.')
    console.log('   export GOOGLE_API_KEY="dein_key"')
    return
  }

  // Kategorie-Statistik
  const katStats: Record<string, number> = {}
  for (const p of prompts) {
    katStats[p.bildkategorie] = (katStats[p.bildkategorie] || 0) + 1
  }

  console.log(`\n🎨 Starte Gemini-Bildgenerierung (${prompts.length} Bilder)...`)
  console.log('   Modell: gemini-2.0-flash-exp (Imagen 3)')
  console.log(`   Kategorien: ${Object.entries(katStats).map(([k, v]) => `${k}(${v})`).join(', ')}`)

  const outputDir = path.join(process.cwd(), 'public', 'images', 'content', leId)
  fs.mkdirSync(outputDir, { recursive: true })

  let generated = 0
  let failed = 0

  for (const prompt of prompts) {
    if (prompt.status !== 'offen') continue

    const icon = { szene: '🏥', anatomie: '🫀', prozedur: '📋', geraet: '🔧' }[prompt.bildkategorie] || '🖼️'
    console.log(`\n  ${icon} ${prompt.stepId} [${prompt.bildkategorie}, ${prompt.aspectRatio}]...`)

    try {
      // Referenzbild laden wenn vorhanden
      const parts: { text?: string; inlineData?: { data: string; mimeType: string } }[] = []
      if (prompt.referenzBild) {
        const refPath = path.join(process.cwd(), prompt.referenzBild)
        if (fs.existsSync(refPath)) {
          const refData = fs.readFileSync(refPath).toString('base64')
          const mimeType = refPath.endsWith('.svg') ? 'image/svg+xml' : 'image/png'
          parts.push({ inlineData: { data: refData, mimeType } })
          console.log(`     📎 Referenzbild: ${prompt.referenzBild}`)
        }
      }
      parts.push({ text: prompt.promptEn })

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts }],
            generationConfig: {
              responseModalities: ['IMAGE', 'TEXT'],
            }
          })
        }
      )

      if (!response.ok) {
        const err = await response.text()
        console.log(`    ❌ API Error ${response.status}: ${err.substring(0, 150)}`)
        failed++
        continue
      }

      const data = await response.json()
      const respParts = data?.candidates?.[0]?.content?.parts || []
      const imagePart = respParts.find((p: { inlineData?: { data: string; mimeType: string } }) => p.inlineData)

      if (imagePart?.inlineData) {
        const buffer = Buffer.from(imagePart.inlineData.data, 'base64')
        const filename = `${prompt.stepId}.png`
        const filepath = path.join(outputDir, filename)
        fs.writeFileSync(filepath, buffer)
        prompt.status = 'generiert'
        prompt.imageUrl = `/images/content/${leId}/${filename}`
        generated++
        console.log(`    ✅ ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`)
      } else {
        // Prüfe ob Gemini Text-Feedback statt Bild zurückgegeben hat
        const textPart = respParts.find((p: { text?: string }) => p.text)
        if (textPart?.text) {
          console.log(`    ⚠️ Kein Bild — Gemini sagt: ${(textPart.text as string).substring(0, 100)}`)
        } else {
          console.log(`    ⚠️ Kein Bild in Response (möglicherweise Content-Filter)`)
        }
        failed++
      }

      // Rate Limit: ~2 Sekunden zwischen Requests
      await new Promise(r => setTimeout(r, 2000))

    } catch (e) {
      console.log(`    ❌ ${(e as Error).message}`)
      failed++
    }
  }

  console.log(`\n  Ergebnis: ${generated} generiert, ${failed} fehlgeschlagen`)
  if (failed > 0) {
    console.log(`  Tipp: Fehlgeschlagene Bilder erneut versuchen mit --generate`)
  }
}

// ============================================================================
// Prompt-Export (für Browser-Automatisierung / Gemini Chat)
// ============================================================================

function exportPrompts(prompts: FotoPrompt[], leId: string): void {
  const exportDir = path.join(process.cwd(), 'content', leId)

  // 1. Einzelne Prompts als nummerierte Textdateien
  const promptsDir = path.join(exportDir, 'foto-prompts')
  fs.mkdirSync(promptsDir, { recursive: true })

  // Gruppiere nach SVG-Typ für Batch-Generierung
  const byType: Record<string, FotoPrompt[]> = {}
  for (const p of prompts) {
    const key = p.svgTyp
    if (!byType[key]) byType[key] = []
    byType[key].push(p)
  }

  let totalFiles = 0

  for (const [typ, typePrompts] of Object.entries(byType)) {
    for (let i = 0; i < typePrompts.length; i++) {
      const p = typePrompts[i]
      const filename = `${String(totalFiles + 1).padStart(3, '0')}_${p.stepId}.txt`
      const content = [
        `Step: ${p.stepId}`,
        `Typ: ${p.svgTyp}`,
        `Trigger: ${p.trigger}`,
        `Beschreibung: ${p.beschreibung}`,
        `Priorität: ${p.prioritaet}`,
        `Output: ${p.outputPath}`,
        '',
        '--- PROMPT (English, für Gemini/DALL-E/fal.ai) ---',
        '',
        p.promptEn,
        '',
        '--- SPEICHERN ALS ---',
        p.outputPath.split('/').pop() || `${p.stepId}.png`,
      ].join('\n')

      fs.writeFileSync(path.join(promptsDir, filename), content, 'utf-8')
      totalFiles++
    }
  }

  // 2. Batch-Datei: Alle Prompts in einer Datei (für Copy-Paste)
  const batchContent = prompts.map((p, i) => [
    `=== ${i + 1}/${prompts.length}: ${p.stepId} (${p.svgTyp}) ===`,
    p.promptEn,
    `>>> Speichern als: ${p.outputPath.split('/').pop()}`,
    '',
  ].join('\n')).join('\n')

  const batchPath = path.join(exportDir, 'foto-prompts-batch.txt')
  fs.writeFileSync(batchPath, batchContent, 'utf-8')

  // 3. Zusammenfassung
  console.log(`\n📤 Prompts exportiert:`)
  console.log(`   ${totalFiles} Einzeldateien: content/${leId}/foto-prompts/`)
  console.log(`   1 Batch-Datei:     content/${leId}/foto-prompts-batch.txt`)
  console.log(`\n   Typen:`)
  for (const [typ, typePrompts] of Object.entries(byType)) {
    console.log(`     ${typ}: ${typePrompts.length} Prompts`)
  }
  console.log(`\n   Workflow:`)
  console.log(`   1. Öffne foto-prompts-batch.txt`)
  console.log(`   2. Kopiere Prompt in Gemini Chat / Browser-Automatisierung`)
  console.log(`   3. Speichere generiertes Bild unter public/images/content/${leId}/`)
  console.log(`   4. Aktualisiere foto-queue.json (status: "generiert")`)
}

// ============================================================================
// CLI
// ============================================================================

async function main() {
  const leId = process.argv[2]
  const shouldGenerate = process.argv.includes('--generate')
  const shouldExport = process.argv.includes('--export')

  if (!leId || !/^le-\d{2}$/.test(leId)) {
    console.log('Usage: npx tsx scripts/generate-foto-prompts.ts <le-id> [--export] [--generate]')
    console.log('  le-id:      z.B. le-06')
    console.log('  --export:   Prompts als Textdateien exportieren (für Browser-Automatisierung)')
    console.log('  --generate: Bilder via Gemini API generieren (braucht GOOGLE_API_KEY)')
    process.exit(1)
  }

  const prompts = analyzeLE(leId)

  // Speichere foto-queue.json
  const queuePath = path.join(process.cwd(), 'content', leId, 'foto-queue.json')
  fs.writeFileSync(queuePath, JSON.stringify(prompts, null, 2), 'utf-8')
  console.log(`\n💾 Foto-Queue gespeichert: ${queuePath}`)
  console.log(`   ${prompts.length} Prompts, davon ${prompts.filter(p => p.prioritaet === 'HOCH').length} HOCH`)

  if (shouldExport) {
    exportPrompts(prompts, leId)
  }

  if (shouldGenerate) {
    await generateWithGemini(prompts, leId)
    fs.writeFileSync(queuePath, JSON.stringify(prompts, null, 2), 'utf-8')
    console.log(`\n💾 Foto-Queue aktualisiert: ${queuePath}`)
  }

  if (!shouldExport && !shouldGenerate) {
    console.log('\n💡 Nächste Schritte:')
    console.log(`   --export:   npx tsx scripts/generate-foto-prompts.ts ${leId} --export`)
    console.log(`   --generate: npx tsx scripts/generate-foto-prompts.ts ${leId} --generate`)
  }

  console.log(`\n${'═'.repeat(60)}`)
}

main().catch(console.error)
