// Glossar — Pflege-Fachbegriffe Lexikon
// 3 Screens: Liste mit Suche+Filter · Detail-View · Empty-State (alphabetische Index-Bar)

const GLF = "Inter, -apple-system, system-ui, sans-serif";
const GLC = window.CGPT;

// ─── Daten ─────────────────────────────
const GLOSSAR = [
  { id: 1, begriff: 'Anamnese', kategorie: 'Diagnostik',
    kurz: 'Krankengeschichte durch gezieltes Befragen',
    lang: 'Die Anamnese ist die systematische Erhebung der Krankengeschichte. Sie umfasst aktuelle Beschwerden, frühere Erkrankungen, familiäre Vorbelastungen und psychosoziale Faktoren. In der Pflege oft Teil der Pflegeanamnese.',
    synonyme: ['Krankengeschichte', 'Vorgeschichte'],
    siehe: ['Befund', 'Pflegeanamnese'] },
  { id: 2, begriff: 'Apoplex', kategorie: 'Krankheitsbilder',
    kurz: 'Schlaganfall — akute Durchblutungsstörung im Gehirn',
    lang: 'Apoplex bezeichnet einen Schlaganfall. Unterschieden wird zwischen ischämischem (Gefäßverschluss, ~80%) und hämorrhagischem (Hirnblutung, ~20%) Insult. Symptome: FAST — Face, Arms, Speech, Time.',
    synonyme: ['Schlaganfall', 'Insult', 'Stroke'],
    siehe: ['FAST-Test', 'Hemiparese'] },
  { id: 3, begriff: 'Bradykardie', kategorie: 'Vitalzeichen',
    kurz: 'Verlangsamter Herzschlag unter 60/min',
    lang: 'Herzfrequenz unter 60 Schläge/min in Ruhe. Bei Sportlern physiologisch, sonst Hinweis auf z.B. Reizleitungsstörung, Hypothyreose oder Medikamenten-Wirkung (Betablocker).',
    synonyme: [],
    siehe: ['Tachykardie', 'EKG'] },
  { id: 4, begriff: 'Dekubitus', kategorie: 'Pflegekomplikation',
    kurz: 'Druckgeschwür durch anhaltenden Druck',
    lang: 'Lokal begrenzte Schädigung der Haut und/oder des Unterhautgewebes durch Druck oder Druck in Kombination mit Scherkräften. Stadien I-IV nach EPUAP. Prävention: Lagerung alle 2h, Hautpflege, Druckentlastung.',
    synonyme: ['Druckgeschwür', 'Wundliegen'],
    siehe: ['Lagerung', 'Braden-Skala', 'EPUAP'] },
  { id: 5, begriff: 'Exsikkose', kategorie: 'Pflegekomplikation',
    kurz: 'Austrocknung durch Flüssigkeitsmangel',
    lang: 'Mangel an Körperflüssigkeit, häufig bei älteren Patient:innen. Zeichen: stehende Hautfalten, trockene Schleimhäute, dunkler Urin, Verwirrtheit. Tagesbedarf: ~30 ml/kg KG.',
    synonyme: ['Dehydratation'],
    siehe: ['Trinkprotokoll', 'Bilanzierung'] },
  { id: 6, begriff: 'Hemiparese', kategorie: 'Krankheitsbilder',
    kurz: 'Halbseitige Lähmung',
    lang: 'Unvollständige Lähmung einer Körperhälfte. Häufig nach Apoplex. Pflege: Bobath-Konzept, Lagerung der gelähmten Seite, Sturzprophylaxe.',
    synonyme: ['Halbseitenlähmung'],
    siehe: ['Apoplex', 'Bobath'] },
  { id: 7, begriff: 'Hypertonie', kategorie: 'Vitalzeichen',
    kurz: 'Bluthochdruck (RR über 140/90)',
    lang: 'Blutdruck dauerhaft ≥140/90 mmHg. Häufigste Volkskrankheit. Risiko für Herzinfarkt, Schlaganfall, Niereninsuffizienz.',
    synonyme: ['Bluthochdruck'],
    siehe: ['Hypotonie', 'Antihypertensiva'] },
  { id: 8, begriff: 'Lagerung', kategorie: 'Pflegehandlung',
    kurz: 'Positionierung zur Prophylaxe und Therapie',
    lang: 'Gezielte Positionierung des Körpers. Zwecke: Dekubitus-Prophylaxe, Atemerleichterung, Schmerzlinderung. Häufige Formen: 30°-Schräglage, Mikrolagerung, V-A-T-I-Lagerung.',
    synonyme: ['Positionierung'],
    siehe: ['Dekubitus', 'Mobilisation'] },
  { id: 9, begriff: 'Mobilisation', kategorie: 'Pflegehandlung',
    kurz: 'Bewegungsförderung des Patienten',
    lang: 'Aktive oder passive Bewegung der Patient:in zur Erhaltung von Beweglichkeit, Kraft und Selbstständigkeit. Frühmobilisation reduziert Komplikationen wie Pneumonie und Thrombose.',
    synonyme: [],
    siehe: ['Lagerung', 'Frühmobilisation'] },
  { id: 10, begriff: 'NRS', kategorie: 'Skalen',
    kurz: 'Numerische Rating-Skala für Schmerz',
    lang: 'Numerische Rating-Skala — Patient:in bewertet Schmerz von 0 (kein) bis 10 (stärkster vorstellbar). Schnell, einfach, gut dokumentierbar. Alternative: VAS, FPS-R.',
    synonyme: ['Numerische Skala'],
    siehe: ['VAS', 'Schmerzskala', 'FPS-R'] },
  { id: 11, begriff: 'Pneumonie', kategorie: 'Krankheitsbilder',
    kurz: 'Lungenentzündung',
    lang: 'Akute oder chronische Entzündung der Lunge. Häufige Komplikation bei Immobilität. Pflege: Atemübungen, Mobilisation, ausreichende Flüssigkeitszufuhr.',
    synonyme: ['Lungenentzündung'],
    siehe: ['Atemtherapie', 'Aspiration'] },
  { id: 12, begriff: 'Tachykardie', kategorie: 'Vitalzeichen',
    kurz: 'Beschleunigter Herzschlag über 100/min',
    lang: 'Herzfrequenz über 100/min in Ruhe. Ursachen: Fieber, Schmerz, Angst, Hypovolämie, Schock. Wichtige Begleiterscheinung bei Sepsis.',
    synonyme: [],
    siehe: ['Bradykardie', 'Schock'] },
  { id: 13, begriff: 'VAS', kategorie: 'Skalen',
    kurz: 'Visuelle Analog-Skala für Schmerz',
    lang: 'Visuelle Analogskala. Patient:in markiert Schmerz auf einer 10cm-Linie zwischen "kein Schmerz" und "stärkster Schmerz". Gemessen wird der Abstand vom Nullpunkt.',
    synonyme: [],
    siehe: ['NRS', 'Schmerzskala'] },
];

const KATEGORIEN = [
  { id: 'alle',         label: 'Alle' },
  { id: 'Vitalzeichen', label: 'Vitalzeichen' },
  { id: 'Pflegehandlung', label: 'Pflegehandlung' },
  { id: 'Pflegekomplikation', label: 'Komplikation' },
  { id: 'Krankheitsbilder', label: 'Krankheitsbild' },
  { id: 'Skalen',       label: 'Skalen' },
  { id: 'Diagnostik',   label: 'Diagnostik' },
];

// ─── Glossar-Liste mit Suche ─────────────
function GlossarListe({ onOpen, initialFilter = 'alle', initialQuery = '' }) {
  const c = GLC;
  const [q, setQ] = React.useState(initialQuery);
  const [filter, setFilter] = React.useState(initialFilter);

  const gefiltert = GLOSSAR.filter(g => {
    const matchKat = filter === 'alle' || g.kategorie === filter;
    const matchQ = !q || g.begriff.toLowerCase().includes(q.toLowerCase())
                       || g.kurz.toLowerCase().includes(q.toLowerCase())
                       || g.synonyme.some(s => s.toLowerCase().includes(q.toLowerCase()));
    return matchKat && matchQ;
  });

  // Gruppe nach Anfangsbuchstaben
  const grouped = {};
  gefiltert.forEach(g => {
    const letter = g.begriff[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(g);
  });
  const letters = Object.keys(grouped).sort();
  const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: GLF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      {/* Header */}
      <div style={{ padding: '8px 16px 12px', background: c.bg, borderBottom: `1px solid ${c.borderStrong}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.4 }}>Glossar</div>
          <div style={{ fontSize: 11, color: c.text3, fontVariantNumeric: 'tabular-nums' }}>
            {gefiltert.length} {gefiltert.length === 1 ? 'Begriff' : 'Begriffe'}
          </div>
        </div>

        {/* Suche */}
        <div style={{ position: 'relative', marginBottom: 10 }}>
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Begriff oder Synonym suchen..."
            style={{
              width: '100%', padding: '10px 12px 10px 34px',
              background: c.bgWhite, border: `1px solid ${c.border}`,
              borderRadius: 10, fontSize: 14, fontFamily: GLF, color: c.text, outline: 'none',
            }}
          />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', left: 10, top: 12, opacity: 0.45 }}>
            <circle cx="11" cy="11" r="7" stroke={c.text2} strokeWidth="2" />
            <path d="M20 20 L16.5 16.5" stroke={c.text2} strokeWidth="2" strokeLinecap="round" />
          </svg>
          {q && (
            <button onClick={() => setQ('')} style={{
              position: 'absolute', right: 8, top: 8, background: 'transparent', border: 'none',
              fontSize: 16, color: c.text3, cursor: 'pointer', padding: 4,
            }}>×</button>
          )}
        </div>

        {/* Kategorie-Filter */}
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 2, marginRight: -16, paddingRight: 16 }}>
          {KATEGORIEN.map(k => (
            <button key={k.id} onClick={() => setFilter(k.id)} style={{
              padding: '5px 11px', fontSize: 12, fontWeight: 500, fontFamily: GLF,
              background: filter === k.id ? c.accent : c.bgWhite,
              color: filter === k.id ? '#fff' : c.text2,
              border: `1px solid ${filter === k.id ? c.accent : c.border}`,
              borderRadius: 999, whiteSpace: 'nowrap', cursor: 'pointer', flexShrink: 0,
            }}>{k.label}</button>
          ))}
        </div>
      </div>

      {/* Liste */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <div style={{ flex: 1, overflow: 'auto', paddingBottom: 20 }}>
          {gefiltert.length === 0 ? (
            <div style={{ padding: '40px 24px', textAlign: 'center', color: c.text3 }}>
              <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.4 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto' }}>
                  <circle cx="11" cy="11" r="7" stroke={c.text3} strokeWidth="1.5" />
                  <path d="M20 20 L16.5 16.5" stroke={c.text3} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ fontSize: 14, color: c.text2, fontWeight: 600, marginBottom: 4 }}>Nichts gefunden</div>
              <div style={{ fontSize: 12 }}>Versuch einen anderen Begriff oder andere Kategorie.</div>
            </div>
          ) : letters.map(letter => (
            <div key={letter}>
              <div id={`letter-${letter}`} style={{
                position: 'sticky', top: 0, background: c.bg,
                padding: '8px 16px 4px', fontSize: 11, fontWeight: 700,
                color: c.accent, letterSpacing: 1.2, textTransform: 'uppercase',
                borderBottom: `1px solid ${c.borderStrong}`, zIndex: 1,
              }}>{letter}</div>
              {grouped[letter].map(g => (
                <button key={g.id} onClick={() => onOpen && onOpen(g)} style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '12px 16px', background: 'transparent',
                  border: 'none', borderBottom: `1px solid ${c.borderStrong}`,
                  fontFamily: GLF, cursor: 'pointer',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: c.text }}>{g.begriff}</div>
                    <div style={{ fontSize: 9, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase', fontWeight: 600, flexShrink: 0 }}>
                      {g.kategorie}
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: c.text2, marginTop: 2, lineHeight: 1.4 }}>{g.kurz}</div>
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* A-Z Index-Bar */}
        {gefiltert.length > 0 && (
          <div style={{
            width: 18, padding: '8px 0', display: 'flex', flexDirection: 'column',
            justifyContent: 'space-around', alignItems: 'center', flexShrink: 0,
          }}>
            {allLetters.map(l => (
              <a key={l} href={`#letter-${l}`} onClick={e => {
                if (!letters.includes(l)) e.preventDefault();
              }} style={{
                fontSize: 9, fontWeight: 700, lineHeight: 1, textDecoration: 'none',
                color: letters.includes(l) ? c.accent : c.text3,
                opacity: letters.includes(l) ? 1 : 0.35,
              }}>{l}</a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Detail-View ──────────────────────────
function GlossarDetail({ eintrag = GLOSSAR[3], onBack, onJump }) {
  const c = GLC;
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: GLF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      <div style={{ padding: '8px 16px 10px', borderBottom: `1px solid ${c.borderStrong}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={onBack} style={{ background: 'transparent', border: 'none', color: c.text2, fontSize: 14, padding: '4px 0', cursor: 'pointer', fontFamily: GLF }}>
          ‹ Glossar
        </button>
        <button style={{ background: 'transparent', border: 'none', color: c.text2, fontSize: 18, cursor: 'pointer', padding: 4 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 4 L5 21 L12 17 L19 21 L19 4 Z" stroke={c.text2} strokeWidth="1.8" strokeLinejoin="round" fill="none" />
          </svg>
        </button>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '20px 18px 24px' }}>
        <div style={{ fontSize: 10, color: c.accent, letterSpacing: 1.2, textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>
          {eintrag.kategorie}
        </div>
        <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.6, lineHeight: 1.1, marginBottom: 4 }}>
          {eintrag.begriff}
        </div>
        <div style={{ fontSize: 15, color: c.text2, lineHeight: 1.45, marginBottom: 18 }}>
          {eintrag.kurz}
        </div>

        {/* Audio-Button (Aussprache, Placeholder) */}
        <button style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '8px 14px', background: c.accentSoft, color: c.accent,
          border: 'none', borderRadius: 999, fontSize: 12, fontWeight: 600,
          fontFamily: GLF, cursor: 'pointer', marginBottom: 22,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M11 5 L6 9 H3 V15 H6 L11 19 Z" fill={c.accent} />
            <path d="M15 9 Q17 12 15 15" stroke={c.accent} strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M17.5 7 Q21 12 17.5 17" stroke={c.accent} strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
          Aussprache anhören
        </button>

        {/* Beschreibung */}
        <div style={{ background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 12, padding: '14px 16px', marginBottom: 14 }}>
          <div style={{ fontSize: 10, color: c.text3, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>
            Beschreibung
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.55, color: c.text2 }}>{eintrag.lang}</div>
        </div>

        {/* Synonyme */}
        {eintrag.synonyme.length > 0 && (
          <div style={{ background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 12, padding: '14px 16px', marginBottom: 14 }}>
            <div style={{ fontSize: 10, color: c.text3, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>
              Synonyme
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {eintrag.synonyme.map(s => (
                <span key={s} style={{
                  padding: '4px 10px', background: c.bg, color: c.text2,
                  border: `1px solid ${c.border}`, borderRadius: 999, fontSize: 12,
                }}>{s}</span>
              ))}
            </div>
          </div>
        )}

        {/* Siehe auch */}
        {eintrag.siehe.length > 0 && (
          <div style={{ background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 12, padding: '14px 16px', marginBottom: 14 }}>
            <div style={{ fontSize: 10, color: c.text3, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>
              Siehe auch
            </div>
            {eintrag.siehe.map((s, i) => {
              const target = GLOSSAR.find(g => g.begriff === s);
              return (
                <button key={s} onClick={() => target && onJump && onJump(target)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  width: '100%', padding: '10px 0',
                  borderBottom: i < eintrag.siehe.length - 1 ? `1px solid ${c.borderStrong}` : 'none',
                  background: 'transparent', border: 'none', cursor: target ? 'pointer' : 'default',
                  fontFamily: GLF, textAlign: 'left',
                }}>
                  <span style={{ fontSize: 14, color: target ? c.accent : c.text3, fontWeight: 500 }}>{s}</span>
                  {target && <span style={{ fontSize: 14, color: c.accent }}>›</span>}
                </button>
              );
            })}
          </div>
        )}

        {/* Kontext-Hinweis */}
        <div style={{ padding: '12px 14px', background: c.accentSoft, borderRadius: 10, fontSize: 12, color: c.text2, lineHeight: 1.5 }}>
          <strong style={{ color: c.text }}>Kommt vor in:</strong> Pflege bei Hüft-TEP · Mobilisation nach Operation
        </div>
      </div>
    </div>
  );
}

// ─── Standalone-Wrapper ───────────────────
function GlossarListeStandalone() { return <GlossarListe />; }
function GlossarDetailStandalone() { return <GlossarDetail />; }
function GlossarLeerStandalone() { return <GlossarListe initialQuery="xyz123" />; }

// Voll-Flow
function GlossarFlow() {
  const [view, setView] = React.useState('liste');
  const [eintrag, setEintrag] = React.useState(null);
  if (view === 'detail' && eintrag) {
    return <GlossarDetail
      eintrag={eintrag}
      onBack={() => setView('liste')}
      onJump={(e) => setEintrag(e)}
    />;
  }
  return <GlossarListe onOpen={(g) => { setEintrag(g); setView('detail'); }} />;
}

Object.assign(window, {
  GLOSSAR, KATEGORIEN, GlossarListe, GlossarDetail, GlossarFlow,
  GlossarListeStandalone, GlossarDetailStandalone, GlossarLeerStandalone,
});
