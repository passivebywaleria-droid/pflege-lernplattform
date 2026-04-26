// Dashboard V3 — Magic-UI-Heavy
// MasteryConstellation als Hero · AnimatedBeams · Marquee mit Lernsprüchen.
// Konzept: Du bist im Zentrum, deine Bausteine kreisen um dich.
//
// Tone: ambient, langsam, ruhig — keine grellen Animationen.

const D3C = window.MUC;
const D3F = "Inter, -apple-system, system-ui, sans-serif";

function Dashboard_V3_MagicUI({ onTab = () => {}, onContinue }) {
  const c = D3C;
  const greet = window.useTimeOfDayGreeting();

  // Konstellation aus Bausteinen — alle 5 + 4 verwandte Themen
  const nodes = [
    { id: 'b1', mastery: 4, label: 'Grundlagen' },
    { id: 'b2', mastery: 3, label: 'Anatomie' },
    { id: 'b3', mastery: 2, label: 'Schmerz' },
    { id: 'b4', mastery: 1, label: 'Medikation' },
    { id: 'b5', mastery: 0, label: 'Notfall' },
    { id: 't1', mastery: 4, label: '' },
    { id: 't2', mastery: 3, label: '' },
    { id: 't3', mastery: 2, label: '' },
    { id: 't4', mastery: 2, label: '' },
    { id: 't5', mastery: 1, label: '' },
    { id: 't6', mastery: 1, label: '' },
    { id: 't7', mastery: 0, label: '' },
    { id: 't8', mastery: 0, label: '' },
  ];

  const sprueche = [
    'Konstanz schlägt Intensität.',
    'Jeder Step ist ein Anker.',
    'Lernen ist Wiederholen mit Aufmerksamkeit.',
    'Was du heute übst, kannst du morgen anwenden.',
    'Pflege ist Wissen plus Haltung.',
    'Kleine Einheiten, regelmäßig.',
  ];

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: D3F, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />

      {/* Greeting */}
      <div style={{ padding: '10px 16px 8px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>
            {greet.text}
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2, marginTop: 2 }}>
            Lina
          </div>
        </div>
        <div style={{
          width: 38, height: 38, borderRadius: 19,
          background: `linear-gradient(135deg, ${c.accent} 0%, #1a6f5a 100%)`,
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 700,
        }}>L</div>
      </div>

      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* Hero: Konstellation */}
        <div style={{
          margin: '6px 16px 16px',
          background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #faf6f0 100%)',
          border: `1px solid ${c.border}`,
          borderRadius: 20, padding: '16px 12px 14px',
          boxShadow: '0 1px 2px rgba(26,24,21,0.04), 0 14px 32px -18px rgba(33,140,113,0.20)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '0 6px 6px' }}>
            <div>
              <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.7, textTransform: 'uppercase', fontWeight: 700 }}>
                Deine Lernkarte
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: c.text, marginTop: 2 }}>
                <window.AnimatedNumber to={3} duration={900} /> gemeistert · <window.AnimatedNumber to={5} duration={1000} delay={150} /> aktiv
              </div>
            </div>
            <div style={{
              fontSize: 10, color: c.accent, letterSpacing: 0.5, fontWeight: 700,
              padding: '4px 8px', borderRadius: 999, background: c.accentSoft,
            }}>LIVE</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
            <window.MasteryConstellation size={260} nodes={nodes} animate />
          </div>

          {/* Legende */}
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 4, padding: '0 8px' }}>
            {[
              { c: '#218C71', l: 'Gemeistert' },
              { c: '#3E5A6A', l: 'Sicher' },
              { c: '#B8A894', l: 'Vertraut' },
              { c: '#A09890', l: 'Neu' },
            ].map(x => (
              <div key={x.l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 6, height: 6, borderRadius: 3, background: x.c }} />
                <span style={{ fontSize: 9.5, color: c.text3, letterSpacing: 0.3 }}>{x.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Continue mit Border-Beam */}
        <div style={{ padding: '0 16px', marginBottom: 14 }}>
          <div onClick={onContinue} style={{
            position: 'relative', overflow: 'hidden',
            background: `linear-gradient(135deg, ${c.accent} 0%, #1a6f5a 100%)`,
            borderRadius: 16, padding: '16px 18px', color: '#fff', cursor: 'pointer',
            boxShadow: '0 8px 28px -8px rgba(33,140,113,0.40)',
          }}>
            <div style={{
              position: 'absolute', inset: -2, borderRadius: 18,
              background: 'conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.4) 25%, transparent 50%)',
              animation: 'mu-glow-rotate 6s linear infinite', pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', inset: 1, borderRadius: 15,
              background: `linear-gradient(135deg, ${c.accent} 0%, #1a6f5a 100%)`,
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 10, letterSpacing: 1.1, textTransform: 'uppercase', opacity: 0.85, fontWeight: 700 }}>
                Weiter wo du aufgehört hast
              </div>
              <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.25, marginTop: 6 }}>
                Schmerz und Bewegung
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
                <div style={{ fontSize: 11, opacity: 0.85 }}>
                  Schritt 5/9 · ~7 min
                </div>
                <div style={{
                  background: '#fff', color: c.accent, fontSize: 12, fontWeight: 700,
                  padding: '7px 14px', borderRadius: 999,
                }}>Fortsetzen ›</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live-Counter Strip */}
        <div style={{ display: 'flex', gap: 8, padding: '0 16px', marginBottom: 16 }}>
          {[
            { v: 12, sfx: '', l: 'Tage', acc: '#D4956A', icon: '🔥' },
            { v: 8,  sfx: '', l: 'Karten heute', acc: '#3E5A6A' },
            { v: 142, sfx: '', l: 'Karten total', acc: c.accent },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: '12px 8px', textAlign: 'center', borderRadius: 14,
              background: c.bgWhite, border: `1px solid ${c.border}`,
              boxShadow: '0 1px 2px rgba(26,24,21,0.04)',
            }}>
              <div style={{ fontSize: 19, fontWeight: 700, color: s.acc, fontVariantNumeric: 'tabular-nums', lineHeight: 1.1 }}>
                {s.icon ? <span style={{ marginRight: 3 }}>{s.icon}</span> : null}
                <window.AnimatedNumber to={s.v} duration={1400} delay={200 + i * 100} suffix={s.sfx} />
              </div>
              <div style={{ fontSize: 9.5, color: c.text3, letterSpacing: 0.4, textTransform: 'uppercase', marginTop: 4, fontWeight: 600 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Heute */}
        <div style={{ padding: '0 16px', marginBottom: 18 }}>
          <div style={{ fontSize: 11, color: c.text2, letterSpacing: 0.7, textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>
            Heute fällig
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{
              background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 14,
              padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                background: '#3E5A6A14', color: '#3E5A6A',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
              }}>🃏</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Karteikarten wiederholen</div>
                <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>
                  <window.AnimatedNumber to={8} duration={900} delay={400} /> Karten · ~5 min
                </div>
              </div>
              <div style={{ color: c.text3, fontSize: 16 }}>›</div>
            </div>
            <div style={{
              background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 14,
              padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                background: c.accentSoft, color: c.accent,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
              }}>📖</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Reflektion: gestern gelernt</div>
                <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>2 min · überfällig</div>
              </div>
              <div style={{
                padding: '4px 9px', borderRadius: 999, fontSize: 10, fontWeight: 700,
                background: 'rgba(201,107,92,0.12)', color: '#C96B5C', letterSpacing: 0.5,
                position: 'relative',
              }}>
                <span style={{
                  position: 'absolute', inset: 0, borderRadius: 999,
                  border: '1.5px solid #C96B5C', animation: 'd3-ripple 2s ease-out infinite',
                }} />
                JETZT
              </div>
            </div>
          </div>
        </div>

        {/* Marquee mit Lernsprüchen — am unteren Rand des Scroll-Bereichs */}
        <div style={{
          margin: '0 0 14px', padding: '14px 0',
          background: 'linear-gradient(180deg, transparent, #f3eee6 50%, transparent)',
        }}>
          <div style={{ fontSize: 9.5, color: c.text3, letterSpacing: 0.7, textTransform: 'uppercase', fontWeight: 700, marginBottom: 8, paddingLeft: 16 }}>
            Aus deinen Lernkarten
          </div>
          <window.Marquee speed={50} fade>
            {sprueche.map((s, i) => (
              <div key={i} style={{
                fontFamily: "'Fraunces', Georgia, serif", fontStyle: 'italic',
                fontSize: 13, color: c.text2, padding: '6px 14px',
                background: c.bgWhite, borderRadius: 999,
                border: `1px solid ${c.border}`,
                whiteSpace: 'nowrap',
              }}>
                „{s}"
              </div>
            ))}
          </window.Marquee>
        </div>
      </div>

      <style>{`
        @keyframes d3-ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>

      <window.TabBar active="home" onTab={onTab} />
    </div>
  );
}

Object.assign(window, { Dashboard_V3_MagicUI });
