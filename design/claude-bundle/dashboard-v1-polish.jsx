// Dashboard V1 — Polish
// Bestehender Look, aber:
// - Layered Shadows + Hairline Borders (mehr Tiefe)
// - AnimatedNumber-Counter für alle Zahlen
// - ProgressRing animiert beim Mount (Sweep-Effekt)
// - Tageszeit-Greeting (Morgen / Mittag / Abend)
// - Subtile soft-rise Animationen beim Mount
// - Glass-Pill Stats-Strip
//
// Tone: ruhig, ernsthaft, warm — keine spielerischen Effekte.

const D1C = window.MUC;
const D1F = "Inter, -apple-system, system-ui, sans-serif";

function D1_Greeting() {
  const c = D1C;
  const greet = window.useTimeOfDayGreeting();
  const dayName = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'][new Date().getDay()];
  const time = new Date().toTimeString().slice(0, 5);
  return (
    <div style={{ padding: '10px 16px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, color: c.text3, letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>
          {dayName} · {time}
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2, marginTop: 2, animation: 'mu-soft-rise 600ms ease backwards' }}>
          {greet.text}, Lina
        </div>
      </div>
      <div style={{
        width: 40, height: 40, borderRadius: 20, flexShrink: 0,
        background: `linear-gradient(135deg, ${c.accent} 0%, #1a6f5a 100%)`,
        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 14, fontWeight: 700,
        boxShadow: '0 1px 2px rgba(0,0,0,0.06), 0 4px 12px rgba(33,140,113,0.20)',
      }}>L</div>
    </div>
  );
}

function D1_StatPill({ value, label, accent, delay = 0 }) {
  const c = D1C;
  return (
    <div style={{
      flex: 1, padding: '12px 8px', textAlign: 'center', borderRadius: 14,
      background: 'linear-gradient(180deg, #ffffff 0%, #fbf8f4 100%)',
      border: `1px solid ${c.border}`,
      boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 2px rgba(26,24,21,0.04), 0 8px 16px -10px rgba(26,24,21,0.10)',
      animation: `mu-soft-rise 700ms ease ${delay}ms backwards`,
    }}>
      <div style={{
        fontSize: 22, fontWeight: 700, color: accent || c.accent,
        fontVariantNumeric: 'tabular-nums', lineHeight: 1.1,
      }}>{value}</div>
      <div style={{ fontSize: 9.5, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase', marginTop: 4, fontWeight: 600 }}>
        {label}
      </div>
    </div>
  );
}

function D1_ContinueCard({ onContinue }) {
  const c = D1C;
  return (
    <div onClick={onContinue} style={{
      background: `linear-gradient(135deg, ${c.accent} 0%, #1a6f5a 100%)`,
      borderRadius: 18, padding: '18px 20px', color: '#fff',
      marginBottom: 16, position: 'relative', overflow: 'hidden', cursor: 'pointer',
      boxShadow: '0 1px 0 rgba(255,255,255,0.15) inset, 0 8px 28px -8px rgba(33,140,113,0.40), 0 2px 6px rgba(26,24,21,0.08)',
      animation: 'mu-soft-rise 800ms ease 100ms backwards',
    }}>
      {/* Layered concentric circles */}
      <svg width="180" height="180" viewBox="0 0 180 180" style={{ position: 'absolute', right: -36, top: -36, opacity: 0.18 }}>
        <circle cx="90" cy="90" r="86" fill="none" stroke="#fff" strokeWidth="0.8" />
        <circle cx="90" cy="90" r="62" fill="none" stroke="#fff" strokeWidth="0.8" />
        <circle cx="90" cy="90" r="38" fill="none" stroke="#fff" strokeWidth="0.8" />
        <circle cx="90" cy="90" r="14" fill="#fff" fillOpacity="0.10" />
      </svg>
      <div style={{ fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', opacity: 0.85, fontWeight: 700 }}>
        Weiter wo du aufgehört hast
      </div>
      <div style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.25, marginTop: 6, textWrap: 'pretty', maxWidth: 240 }}>
        Schmerz und Bewegung
      </div>
      <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>
        Baustein 03 · Schritt 5 von 9
      </div>
      <div style={{ marginTop: 14, height: 5, background: 'rgba(255,255,255,0.22)', borderRadius: 999, overflow: 'hidden' }}>
        <div style={{
          width: '44%', height: '100%', background: '#fff', borderRadius: 999,
          animation: 'd1-progress-grow 1400ms cubic-bezier(0.16, 1, 0.3, 1) 200ms backwards',
          transformOrigin: 'left',
        }} />
      </div>
      <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 11, opacity: 0.85 }}>~7 min noch</div>
        <div style={{
          background: '#fff', color: c.accent, fontSize: 12, fontWeight: 700,
          padding: '8px 16px', borderRadius: 999,
          boxShadow: '0 4px 12px -4px rgba(0,0,0,0.20)',
        }}>Fortsetzen ›</div>
      </div>
    </div>
  );
}

function D1_DueRow({ icon, title, sub, badge, badgeColor }) {
  const c = D1C;
  return (
    <div style={{
      background: c.bgWhite, borderRadius: 14,
      border: `1px solid ${c.border}`,
      boxShadow: '0 1px 2px rgba(26,24,21,0.03)',
      padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12,
    }}>
      {icon}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: c.text }}>{title}</div>
        <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>{sub}</div>
      </div>
      {badge && (
        <div style={{
          padding: '4px 9px', borderRadius: 999, fontSize: 10, fontWeight: 700,
          background: `${badgeColor || c.accent}1A`, color: badgeColor || c.accent, letterSpacing: 0.5,
        }}>{badge}</div>
      )}
      <div style={{ color: c.text3, fontSize: 16 }}>›</div>
    </div>
  );
}

function D1_SectionHeader({ kicker, action }) {
  const c = D1C;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 18, marginBottom: 10 }}>
      <div style={{ fontSize: 11, color: c.text2, letterSpacing: 0.7, textTransform: 'uppercase', fontWeight: 700 }}>
        {kicker}
      </div>
      {action && <div style={{ fontSize: 12, color: c.accent, fontWeight: 600, cursor: 'pointer' }}>{action} ›</div>}
    </div>
  );
}

function D1_ActiveBaustein({ b }) {
  const c = D1C;
  const isProgress = b.status === 'in-progress';
  const pct = isProgress ? (b.progress / b.steps) : 0;
  return (
    <div style={{
      background: c.bgWhite, borderRadius: 14,
      border: `1px solid ${c.border}`,
      boxShadow: '0 1px 2px rgba(26,24,21,0.03)',
      padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
    }}>
      <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
        <window.ProgressRing value={pct || (b.mastery / 4)} size={40} stroke={3}
          color={['#A09890','#D4AE88','#B8A894','#3E5A6A','#218C71'][b.mastery]} />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700, color: c.text2,
        }}>{b.nr}</div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: c.text, lineHeight: 1.3 }}>{b.titel}</div>
        <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>
          {isProgress
            ? <>{b.progress} / {b.steps} · <window.AnimatedNumber to={Math.round(pct*100)} duration={1100} suffix="%" /></>
            : `${window.MASTERY_LABELS[b.mastery]} · ${b.steps} Schritte`}
        </div>
      </div>
      <div style={{ color: c.text3, fontSize: 16 }}>›</div>
    </div>
  );
}

function Dashboard_V1_Polish({ onTab = () => {}, onContinue }) {
  const c = D1C;
  const aktive = window.BAUSTEINE_DATA.filter(b =>
    b.status === 'in-progress' || b.status === 'attempted'
  ).slice(0, 3);

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: D1F, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <style>{`@keyframes d1-progress-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
      <window.StatusSpacer />
      <D1_Greeting />
      <div style={{ flex: 1, overflow: 'auto', padding: '0 16px 16px' }}>
        <D1_ContinueCard onContinue={onContinue} />

        <div style={{ display: 'flex', gap: 10, marginBottom: 4 }}>
          <D1_StatPill
            value={<><span style={{ color: '#D4956A' }}>🔥 </span><window.AnimatedNumber to={12} duration={1200} delay={300} /></>}
            label="Tage Streak" delay={150}
          />
          <D1_StatPill
            value={<><window.AnimatedNumber to={2} duration={900} delay={300} />/5</>}
            label="Bausteine" delay={250}
          />
          <D1_StatPill
            value={<window.AnimatedNumber to={8} duration={1000} delay={300} />}
            label="Karten heute" accent="#3E5A6A" delay={350}
          />
        </div>

        <D1_SectionHeader kicker="Heute fällig" action="Alle anzeigen" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <D1_DueRow
            icon={
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: '#3E5A6A14', color: '#3E5A6A',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="4" width="13" height="16" rx="2" stroke="#3E5A6A" strokeWidth="1.6" />
                  <rect x="3" y="7" width="13" height="13" rx="2" fill="#fff" stroke="#3E5A6A" strokeWidth="1.6" />
                </svg>
              </div>
            }
            title="Karteikarten wiederholen"
            sub="8 Karten · ~5 min"
          />
          <D1_DueRow
            icon={
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: c.accentSoft, color: c.accent,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
              }}>📖</div>
            }
            title="Reflektion: gestern gelernt"
            sub="2 min · überfällig seit 1 Tag"
            badge="JETZT"
            badgeColor="#C96B5C"
          />
        </div>

        <D1_SectionHeader kicker="Du arbeitest gerade an" action="Mehr" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {aktive.map(b => <D1_ActiveBaustein key={b.id} b={b} />)}
        </div>

        <D1_SectionHeader kicker="Für dich empfohlen" />
        <div style={{
          background: `linear-gradient(180deg, ${c.bgWhite} 0%, ${c.accentSoft} 100%)`,
          borderRadius: 14, border: `1px solid ${c.border}`,
          boxShadow: '0 1px 2px rgba(26,24,21,0.03), 0 12px 24px -16px rgba(33,140,113,0.18)',
          padding: '14px 16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 17, flexShrink: 0,
              background: c.bgWhite, border: `1.5px solid ${c.accent}`,
              color: c.accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 700,
            }}>04</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.7, textTransform: 'uppercase', fontWeight: 600 }}>
                Nächster Baustein
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: c.text, lineHeight: 1.3 }}>
                Medikation sicher
              </div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: c.text2, lineHeight: 1.5, marginBottom: 10 }}>
            Baut auf „Schmerz und Bewegung" auf · WHO-Stufen-Schema, Bedarfsmedikation, Wechselwirkungen.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 11, color: c.text3 }}>8 Schritte · ~10 min</div>
            <div style={{ flex: 1 }} />
            <button style={{
              background: c.accent, color: '#fff', border: 'none', borderRadius: 10,
              padding: '7px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: D1F,
              boxShadow: '0 4px 10px -4px rgba(33,140,113,0.40)',
            }}>Vorschau</button>
          </div>
        </div>
      </div>
      <window.TabBar active="home" onTab={onTab} />
    </div>
  );
}

Object.assign(window, { Dashboard_V1_Polish });
