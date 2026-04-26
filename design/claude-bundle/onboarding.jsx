// Onboarding — Erstanmeldung Pflege-Lernplattform
// 6 Schritte: Welcome → Klasse → Bundesland → Lernziel → Selbsteinschätzung → Tagesziel → Fertig

const OBF = "Inter, -apple-system, system-ui, sans-serif";
const OBC = window.CGPT;

// ─── Daten ──────────────────────────────
const KLASSEN = [
  { id: 'pa1', label: 'Pflegeschule · 1. Ausbildungsjahr', sub: 'Generalistik' },
  { id: 'pa2', label: 'Pflegeschule · 2. Ausbildungsjahr', sub: 'Generalistik' },
  { id: 'pa3', label: 'Pflegeschule · 3. Ausbildungsjahr', sub: 'Vertiefung Akut/Pädiatrie/Altenpflege' },
  { id: 'studium', label: 'Studium', sub: 'Pflegewissenschaft / Hebammenwissenschaft' },
  { id: 'weiter', label: 'Weiterbildung', sub: 'Praxisanleitung / Wundmanagement / Palliativ' },
  { id: 'frei', label: 'Selbstlernen', sub: 'Ohne formale Ausbildung' },
];

const BUNDESLAND = ['Baden-Württemberg','Bayern','Berlin','Brandenburg','Bremen','Hamburg','Hessen','MV','Niedersachsen','NRW','Rheinland-Pfalz','Saarland','Sachsen','Sachsen-Anhalt','Schleswig-Holstein','Thüringen'];

const LERNZIELE = [
  { id: 'klausur', label: 'Klausur vorbereiten',     sub: 'Konkretes Datum, fokussiert üben',  icon: 'cal' },
  { id: 'examen',  label: 'Examen vorbereiten',      sub: 'Längerfristig, alle Themen',         icon: 'cap' },
  { id: 'praxis',  label: 'Praxiseinsatz vorbereiten', sub: 'Stations-spezifische Inhalte',     icon: 'heart' },
  { id: 'wissen',  label: 'Wissen auffrischen',      sub: 'Ohne festen Termin',                 icon: 'book' },
];

const ERFAHRUNG_BEREICHE = [
  { id: 'vital',  label: 'Vitalzeichen messen',           emoji: 'V' },
  { id: 'medi',   label: 'Medikamentengabe',              emoji: 'M' },
  { id: 'mob',    label: 'Mobilisation & Lagerung',       emoji: 'L' },
  { id: 'wund',   label: 'Wundversorgung',                emoji: 'W' },
  { id: 'hyg',    label: 'Hygiene & Infektionsschutz',    emoji: 'H' },
  { id: 'doku',   label: 'Dokumentation',                 emoji: 'D' },
  { id: 'komm',   label: 'Kommunikation mit Patient:innen', emoji: 'K' },
  { id: 'notfall',label: 'Notfallmanagement',             emoji: 'N' },
];

const TAGESZIELE = [
  { id: 5,  label: '5 min',  sub: 'Locker · 1 Step',         empfohlen: false },
  { id: 15, label: '15 min', sub: 'Solide · 2-3 Steps',      empfohlen: true },
  { id: 30, label: '30 min', sub: 'Ehrgeizig · 1 Baustein',  empfohlen: false },
  { id: 60, label: '60 min', sub: 'Intensiv · Klausur-Modus', empfohlen: false },
];

// ─── Layout-Bausteine ────────────────────
function ProgressDots({ step, total }) {
  const c = OBC;
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center', padding: '14px 0' }}>
      {Array.from({length: total}).map((_, i) => (
        <div key={i} style={{
          width: i === step ? 22 : 6, height: 6, borderRadius: 999,
          background: i <= step ? c.accent : '#E0D7CC',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }} />
      ))}
    </div>
  );
}

function StepHeader({ kicker, titel, sub }) {
  const c = OBC;
  return (
    <div style={{ marginBottom: 18 }}>
      {kicker && <div style={{ fontSize: 10, fontWeight: 700, color: c.accent, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 6 }}>{kicker}</div>}
      <div style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.4, color: c.text, marginBottom: 6 }}>{titel}</div>
      {sub && <div style={{ fontSize: 13, color: c.text2, lineHeight: 1.45 }}>{sub}</div>}
    </div>
  );
}

function PrimaryBtn({ children, onClick, disabled }) {
  const c = OBC;
  return (
    <button onClick={onClick} disabled={disabled} style={{
      width: '100%', background: disabled ? '#D8CFC4' : c.accent, color: '#fff',
      border: 'none', borderRadius: 12, padding: '14px',
      fontSize: 15, fontWeight: 600, fontFamily: OBF,
      cursor: disabled ? 'not-allowed' : 'pointer',
    }}>{children}</button>
  );
}

function GhostBtn({ children, onClick }) {
  const c = OBC;
  return (
    <button onClick={onClick} style={{
      background: 'transparent', color: c.text2, border: 'none',
      fontSize: 13, fontWeight: 500, padding: '10px', fontFamily: OBF, cursor: 'pointer',
    }}>{children}</button>
  );
}

function OBShell({ step, total, children, onBack, onSkip, primary, primaryLabel = 'Weiter', primaryDisabled }) {
  const c = OBC;
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: OBF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px 0' }}>
        {step > 0 ? (
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', fontSize: 22, color: c.text2, cursor: 'pointer', padding: '6px 10px' }}>‹</button>
        ) : <div style={{ width: 36 }} />}
        <ProgressDots step={step} total={total} />
        {onSkip ? <GhostBtn onClick={onSkip}>Überspringen</GhostBtn> : <div style={{ width: 80 }} />}
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '12px 22px 16px' }}>
        {children}
      </div>
      <div style={{ padding: '10px 22px 22px', borderTop: `1px solid ${c.borderStrong}`, background: c.bgWhite }}>
        <PrimaryBtn onClick={primary} disabled={primaryDisabled}>{primaryLabel}</PrimaryBtn>
      </div>
    </div>
  );
}

// ─── 1. Welcome ──────────────────────────
function OBWelcome({ onNext }) {
  const c = OBC;
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: OBF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      <div style={{ flex: 1, padding: '40px 28px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          width: 84, height: 84, borderRadius: 20, background: c.accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24, boxShadow: '0 10px 28px rgba(33,140,113,0.22)',
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M12 3 L12 21 M3 12 L21 12" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2.2" fill="none" />
          </svg>
        </div>
        <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.6, marginBottom: 12, textWrap: 'balance' }}>
          Willkommen.<br />
          <span style={{ color: c.accent }}>Lerne Pflege</span> in deinem Tempo.
        </div>
        <div style={{ fontSize: 15, color: c.text2, lineHeight: 1.5, textWrap: 'pretty' }}>
          Eine ruhige Lern-App für Pflegeschüler:innen — mit echten Situationen aus dem Alltag,
          klarem Feedback und Mastery-Tracking. Ohne Ablenkung. Ohne Werbung.
        </div>
      </div>
      <div style={{ padding: '10px 22px 22px' }}>
        <PrimaryBtn onClick={onNext}>Loslegen</PrimaryBtn>
        <div style={{ fontSize: 12, color: c.text3, textAlign: 'center', marginTop: 14 }}>
          Schon ein Konto? <a href="#" style={{ color: c.accent, textDecoration: 'none', fontWeight: 600 }}>Anmelden</a>
        </div>
      </div>
    </div>
  );
}

// ─── 2. Klasse ───────────────────────────
function OBKlasse({ onNext, onBack, value, onChange }) {
  const c = OBC;
  return (
    <OBShell step={0} total={5} onBack={onBack} primary={onNext} primaryDisabled={!value}>
      <StepHeader kicker="Schritt 1 von 5" titel="Wo stehst du gerade?" sub="So passen wir Inhalte und Schwierigkeitsgrad an." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {KLASSEN.map(k => {
          const sel = value === k.id;
          return (
            <button key={k.id} onClick={() => onChange(k.id)} style={{
              padding: '14px 16px', textAlign: 'left',
              background: sel ? c.accentSoft : c.bgWhite,
              border: `1.5px solid ${sel ? c.accent : c.border}`,
              borderRadius: 12, fontFamily: OBF, cursor: 'pointer',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: c.text }}>{k.label}</div>
                {sel && <div style={{ width: 18, height: 18, borderRadius: 9, background: c.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M5 12 L10 17 L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>}
              </div>
              <div style={{ fontSize: 12, color: c.text3 }}>{k.sub}</div>
            </button>
          );
        })}
      </div>
    </OBShell>
  );
}

// ─── 3. Lernziel ─────────────────────────
function OBLernziel({ onNext, onBack, value, onChange }) {
  const c = OBC;
  return (
    <OBShell step={1} total={5} onBack={onBack} primary={onNext} primaryDisabled={!value}>
      <StepHeader kicker="Schritt 2 von 5" titel="Was ist dein Ziel?" sub="Wir machen daraus einen passenden Lernplan." />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {LERNZIELE.map(z => {
          const sel = value === z.id;
          return (
            <button key={z.id} onClick={() => onChange(z.id)} style={{
              padding: '16px 12px 14px', textAlign: 'left',
              background: sel ? c.accentSoft : c.bgWhite,
              border: `1.5px solid ${sel ? c.accent : c.border}`,
              borderRadius: 12, fontFamily: OBF, cursor: 'pointer',
              minHeight: 130, display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, marginBottom: 10,
                background: sel ? c.accent : c.bg, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  {z.icon === 'cal' && <><rect x="3" y="5" width="18" height="16" rx="2" stroke={sel ? '#fff' : c.text2} strokeWidth="1.8" /><path d="M3 10 H21 M8 3 V7 M16 3 V7" stroke={sel ? '#fff' : c.text2} strokeWidth="1.8" strokeLinecap="round" /></>}
                  {z.icon === 'cap' && <><path d="M2 9 L12 4 L22 9 L12 14 Z" stroke={sel ? '#fff' : c.text2} strokeWidth="1.8" strokeLinejoin="round" fill="none" /><path d="M6 11 V16 Q6 19 12 19 Q18 19 18 16 V11" stroke={sel ? '#fff' : c.text2} strokeWidth="1.8" fill="none" /></>}
                  {z.icon === 'heart' && <path d="M12 20 L4 12 Q1 9 4 6 Q7 3 12 8 Q17 3 20 6 Q23 9 20 12 Z" stroke={sel ? '#fff' : c.text2} strokeWidth="1.8" strokeLinejoin="round" fill="none" />}
                  {z.icon === 'book' && <><path d="M4 4 V20 H20 V4" stroke={sel ? '#fff' : c.text2} strokeWidth="1.8" /><path d="M4 4 Q12 7 20 4" stroke={sel ? '#fff' : c.text2} strokeWidth="1.8" fill="none" /></>}
                </svg>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: c.text, marginBottom: 3, lineHeight: 1.3 }}>{z.label}</div>
              <div style={{ fontSize: 11, color: c.text3, lineHeight: 1.4 }}>{z.sub}</div>
            </button>
          );
        })}
      </div>
    </OBShell>
  );
}

// ─── 4. Selbsteinschätzung ──────────────
function OBSelbst({ onNext, onBack, values, onChange }) {
  const c = OBC;
  const farben = ['#A09890','#D4AE88','#B8A894','#3E5A6A',c.accent];
  const labels = ['neu', 'angefangen', 'okay', 'sicher', 'erfahren'];
  return (
    <OBShell step={2} total={5} onBack={onBack} onSkip={onNext} primary={onNext}>
      <StepHeader kicker="Schritt 3 von 5" titel="Wie sicher fühlst du dich?" sub="Tippe pro Bereich auf eine Stufe — beeinflusst, was zuerst kommt." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {ERFAHRUNG_BEREICHE.map(b => (
          <div key={b.id}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 6, background: c.accentSoft, color: c.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700,
                }}>{b.emoji}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: c.text }}>{b.label}</div>
              </div>
              <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>
                {values[b.id] !== undefined ? labels[values[b.id]] : '—'}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {[0,1,2,3,4].map(i => {
                const aktiv = values[b.id] !== undefined && i <= values[b.id];
                return (
                  <button key={i} onClick={() => onChange(b.id, i)} style={{
                    flex: 1, height: 24, borderRadius: 4,
                    background: aktiv ? farben[i] : '#E8DFD5',
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'background 0.2s',
                  }} />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </OBShell>
  );
}

// ─── 5. Tagesziel ───────────────────────
function OBTagesziel({ onNext, onBack, value, onChange }) {
  const c = OBC;
  return (
    <OBShell step={3} total={5} onBack={onBack} primary={onNext} primaryDisabled={!value}>
      <StepHeader kicker="Schritt 4 von 5" titel="Wie viel Zeit pro Tag?" sub="Du kannst das später jederzeit ändern." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {TAGESZIELE.map(t => {
          const sel = value === t.id;
          return (
            <button key={t.id} onClick={() => onChange(t.id)} style={{
              padding: '14px 16px', textAlign: 'left',
              background: sel ? c.accentSoft : c.bgWhite,
              border: `1.5px solid ${sel ? c.accent : c.border}`,
              borderRadius: 12, fontFamily: OBF, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: c.text, marginBottom: 2, fontVariantNumeric: 'tabular-nums' }}>
                  {t.label}
                  {t.empfohlen && <span style={{ marginLeft: 8, fontSize: 10, fontWeight: 600, padding: '2px 6px', background: c.accent, color: '#fff', borderRadius: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>Empfohlen</span>}
                </div>
                <div style={{ fontSize: 12, color: c.text3 }}>{t.sub}</div>
              </div>
              <div style={{
                width: 22, height: 22, borderRadius: 11, flexShrink: 0,
                background: sel ? c.accent : 'transparent',
                border: `1.5px solid ${sel ? c.accent : c.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {sel && <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12 L10 17 L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>}
              </div>
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: 18, padding: '12px 14px', background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke={c.accent} strokeWidth="1.8" />
          <path d="M12 7 V12 L15 14" stroke={c.accent} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <div style={{ fontSize: 12, color: c.text2, lineHeight: 1.4 }}>
          <strong style={{ color: c.text }}>Erinnerung um 18:00.</strong> Tippen zum Anpassen.
        </div>
      </div>
    </OBShell>
  );
}

// ─── 6. Fertig ──────────────────────────
function OBFertig({ onNext, klasse, ziel, tagesziel }) {
  const c = OBC;
  const klasseObj = KLASSEN.find(k => k.id === klasse);
  const zielObj = LERNZIELE.find(z => z.id === ziel);
  const zielTageMin = TAGESZIELE.find(t => t.id === tagesziel);
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: OBF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      <ProgressDots step={4} total={5} />
      <div style={{ flex: 1, overflow: 'auto', padding: '20px 22px 16px' }}>
        <div style={{
          width: 76, height: 76, borderRadius: '50%', background: c.accent,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px', boxShadow: '0 10px 28px rgba(33,140,113,0.25)',
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M5 12 L10 17 L19 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.4, textAlign: 'center', marginBottom: 8 }}>
          Alles bereit.
        </div>
        <div style={{ fontSize: 14, color: c.text2, textAlign: 'center', lineHeight: 1.5, marginBottom: 22 }}>
          Dein Lernplan ist erstellt. Hier die Zusammenfassung:
        </div>

        <div style={{ background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 12, overflow: 'hidden' }}>
          {[
            { label: 'Klasse',    value: klasseObj?.label || 'Pflegeschule · 2. Jahr' },
            { label: 'Lernziel',  value: zielObj?.label || 'Klausur vorbereiten' },
            { label: 'Tagesziel', value: `${zielTageMin?.label || '15 min'} · Erinnerung 18:00` },
            { label: 'Plan',      value: '14 Bausteine · ~28 Stunden' },
          ].map((row, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', padding: '12px 14px',
              borderBottom: i < 3 ? `1px solid ${c.borderStrong}` : 'none',
            }}>
              <div style={{ fontSize: 12, color: c.text3 }}>{row.label}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: c.text, textAlign: 'right' }}>{row.value}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, padding: '14px 16px', background: c.accentSoft, borderRadius: 12, fontSize: 13, color: c.text2, lineHeight: 1.5 }}>
          <strong style={{ color: c.text }}>Erster Schritt:</strong> Wir starten mit „Vitalzeichen messen" —
          dein schwächster Bereich aus der Selbsteinschätzung.
        </div>
      </div>
      <div style={{ padding: '10px 22px 22px', borderTop: `1px solid ${c.borderStrong}`, background: c.bgWhite }}>
        <PrimaryBtn onClick={onNext}>Jetzt starten</PrimaryBtn>
      </div>
    </div>
  );
}

// ─── Standalone-Wrapper ─────────────────
function OBWelcomeStandalone()    { return <OBWelcome />; }
function OBKlasseStandalone()     { return <OBKlasse value="pa2" onChange={() => {}} />; }
function OBLernzielStandalone()   { return <OBLernziel value="klausur" onChange={() => {}} />; }
function OBSelbstStandalone()     { return <OBSelbst values={{vital:1,medi:0,mob:2,wund:0,hyg:3,doku:2,komm:3,notfall:1}} onChange={() => {}} />; }
function OBTageszielStandalone()  { return <OBTagesziel value={15} onChange={() => {}} />; }
function OBFertigStandalone()     { return <OBFertig klasse="pa2" ziel="klausur" tagesziel={15} />; }

// Voll-Flow
function OnboardingFlow() {
  const [step, setStep] = React.useState(0);
  const [klasse, setKlasse] = React.useState('');
  const [ziel, setZiel] = React.useState('');
  const [tagesziel, setTagesziel] = React.useState(15);
  const [erfahrung, setErfahrung] = React.useState({});
  const setErf = (k, v) => setErfahrung({ ...erfahrung, [k]: v });

  if (step === 0) return <OBWelcome onNext={() => setStep(1)} />;
  if (step === 1) return <OBKlasse onBack={() => setStep(0)} onNext={() => setStep(2)} value={klasse} onChange={setKlasse} />;
  if (step === 2) return <OBLernziel onBack={() => setStep(1)} onNext={() => setStep(3)} value={ziel} onChange={setZiel} />;
  if (step === 3) return <OBSelbst onBack={() => setStep(2)} onNext={() => setStep(4)} values={erfahrung} onChange={setErf} />;
  if (step === 4) return <OBTagesziel onBack={() => setStep(3)} onNext={() => setStep(5)} value={tagesziel} onChange={setTagesziel} />;
  return <OBFertig onNext={() => setStep(0)} klasse={klasse} ziel={ziel} tagesziel={tagesziel} />;
}

Object.assign(window, {
  KLASSEN, LERNZIELE, ERFAHRUNG_BEREICHE, TAGESZIELE,
  OBWelcome, OBKlasse, OBLernziel, OBSelbst, OBTagesziel, OBFertig,
  OBWelcomeStandalone, OBKlasseStandalone, OBLernzielStandalone,
  OBSelbstStandalone, OBTageszielStandalone, OBFertigStandalone,
  OnboardingFlow,
});
