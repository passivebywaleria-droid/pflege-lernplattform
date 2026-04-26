// Home / Dashboard — der Screen, den Schüler:innen nach Login sehen.
// Sektionen: Greeting, Continue-Card (groß), Stats-Strip (Streak/Mastery/Karten),
// Heute fällig (Karteikarten + nächster Step), Aktive Bausteine, Empfohlen, Schnellzugriffe.

const HC = window.CGPT;
const HF = "Inter, -apple-system, system-ui, sans-serif";

// ─── Hilfs-Komponenten ─────────────────────────
function H_StatPill({ value, label, accent }) {
  const c = HC;
  return (
    <div style={{
      flex: 1, background: c.bgWhite, border: `1px solid ${c.border}`,
      borderRadius: 12, padding: '10px 8px', textAlign: 'center',
    }}>
      <div style={{
        fontSize: 18, fontWeight: 700, color: accent || c.accent,
        fontVariantNumeric: 'tabular-nums', lineHeight: 1.1,
      }}>{value}</div>
      <div style={{ fontSize: 9.5, color: c.text3, letterSpacing: 0.4, textTransform: 'uppercase', marginTop: 3, fontWeight: 600 }}>
        {label}
      </div>
    </div>
  );
}

function H_SectionHeader({ kicker, action }) {
  const c = HC;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10, marginTop: 4 }}>
      <div style={{ fontSize: 11, color: c.text2, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 700 }}>
        {kicker}
      </div>
      {action && <div style={{ fontSize: 12, color: c.accent, fontWeight: 600, cursor: 'pointer' }}>{action} ›</div>}
    </div>
  );
}

// ─── HOME ────────────────────────────────────────
// V1 Polish: Layered Shadows, AnimatedNumber, ProgressRing, Tageszeit-Greeting.
function HomeScreen({ onContinue, onTab, onJump }) {
  const c = HC;
  const aktiveBausteine = window.BAUSTEINE_DATA.filter(b =>
    b.status === 'in-progress' || b.status === 'attempted'
  ).slice(0, 3);
  const greet = (window.useTimeOfDayGreeting && window.useTimeOfDayGreeting()) || { text: 'Hi' };
  const dayName = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'][new Date().getDay()];
  const time = new Date().toTimeString().slice(0, 5);

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: HF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <style>{`@keyframes home-progress-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
      <window.StatusSpacer />

      {/* Top: Greeting + Avatar */}
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
        <button style={{
          width: 40, height: 40, borderRadius: 20, border: `1px solid ${c.border}`,
          background: c.bgWhite, position: 'relative', cursor: 'pointer',
          boxShadow: '0 1px 2px rgba(26,24,21,0.04)',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ display: 'block', margin: '0 auto' }}>
            <path d="M6 9 Q6 4 12 4 Q18 4 18 9 V13 L20 16 H4 L6 13 Z" stroke={c.text2} strokeWidth="1.6" strokeLinejoin="round" fill="none" />
            <path d="M10 19 Q10 21 12 21 Q14 21 14 19" stroke={c.text2} strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
          <div style={{
            position: 'absolute', top: 9, right: 10, width: 7, height: 7, borderRadius: 4,
            background: c.accent, border: `1.5px solid ${c.bgWhite}`,
          }} />
        </button>
      </div>

      {/* Scroll */}
      <div style={{ flex: 1, overflow: 'auto', padding: '0 16px 16px' }}>

        {/* Continue Card — Hero mit Tiefe */}
        <div onClick={onContinue} style={{
          background: `linear-gradient(135deg, ${c.accent} 0%, #1a6f5a 100%)`,
          borderRadius: 18, padding: '18px 20px', color: '#fff',
          marginBottom: 16, position: 'relative', overflow: 'hidden', cursor: 'pointer',
          boxShadow: '0 1px 0 rgba(255,255,255,0.15) inset, 0 8px 28px -8px rgba(33,140,113,0.40), 0 2px 6px rgba(26,24,21,0.08)',
          animation: 'mu-soft-rise 800ms ease 100ms backwards',
        }}>
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
              animation: 'home-progress-grow 1400ms cubic-bezier(0.16, 1, 0.3, 1) 200ms backwards',
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

        {/* Stats-Strip — Glass Pills mit AnimatedNumber */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
          {[
            { val: 12, label: 'Tage Streak', accent: '#D4956A', icon: '🔥', delay: 150 },
            { val: 2,  label: 'Bausteine',   accent: c.accent,  suffix: '/5', delay: 250 },
            { val: 8,  label: 'Karten heute', accent: '#3E5A6A', delay: 350 },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: '12px 8px', textAlign: 'center', borderRadius: 14,
              background: 'linear-gradient(180deg, #ffffff 0%, #fbf8f4 100%)',
              border: `1px solid ${c.border}`,
              boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 2px rgba(26,24,21,0.04), 0 8px 16px -10px rgba(26,24,21,0.10)',
              animation: `mu-soft-rise 700ms ease ${s.delay}ms backwards`,
            }}>
              <div style={{
                fontSize: 22, fontWeight: 700, color: s.accent,
                fontVariantNumeric: 'tabular-nums', lineHeight: 1.1,
              }}>
                {s.icon ? <span style={{ marginRight: 3 }}>{s.icon}</span> : null}
                {window.AnimatedNumber
                  ? <window.AnimatedNumber to={s.val} duration={1200} delay={s.delay + 200} suffix={s.suffix || ''} />
                  : <span>{s.val}{s.suffix || ''}</span>}
              </div>
              <div style={{ fontSize: 9.5, color: c.text3, letterSpacing: 0.5, textTransform: 'uppercase', marginTop: 4, fontWeight: 600 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Heute fällig */}
        <H_SectionHeader kicker="Heute fällig" action="Alle anzeigen" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18, animation: 'mu-soft-rise 700ms ease 400ms backwards' }}>
          <div style={{
            background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 14,
            padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12,
            boxShadow: '0 1px 2px rgba(26,24,21,0.04)',
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 8, flexShrink: 0,
              background: '#3E5A6A11', color: '#3E5A6A',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="4" width="13" height="16" rx="2" stroke="#3E5A6A" strokeWidth="1.6" />
                <rect x="3" y="7" width="13" height="13" rx="2" fill="#fff" stroke="#3E5A6A" strokeWidth="1.6" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: c.text }}>Karteikarten wiederholen</div>
              <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>8 Karten · ~5 min</div>
            </div>
            <div style={{ color: c.text3, fontSize: 16 }}>›</div>
          </div>

          <div style={{
            background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 14,
            padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12,
            boxShadow: '0 1px 2px rgba(26,24,21,0.04)',
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 8, flexShrink: 0,
              background: c.accentSoft, color: c.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16,
            }}>📖</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: c.text }}>Reflektion: gestern gelernt</div>
              <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>2 min · überfällig seit 1 Tag</div>
            </div>
            <div style={{
              padding: '4px 8px', borderRadius: 6, fontSize: 10, fontWeight: 700,
              background: 'rgba(201,107,92,0.12)', color: '#C96B5C', letterSpacing: 0.4,
            }}>JETZT</div>
          </div>
        </div>

        {/* Aktive Bausteine */}
        <H_SectionHeader kicker="Du arbeitest gerade an" action="Mehr" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18, animation: 'mu-soft-rise 700ms ease 500ms backwards' }}>
          {aktiveBausteine.map(b => {
            const isProgress = b.status === 'in-progress';
            const pct = isProgress ? Math.round((b.progress / b.steps) * 100) : 0;
            return (
              <div key={b.id} style={{
                background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 14,
                padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
                boxShadow: '0 1px 2px rgba(26,24,21,0.03)',
              }}>
                <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
                  {window.ProgressRing
                    ? <window.ProgressRing value={isProgress ? (b.progress / b.steps) : (b.mastery / 4)} size={40} stroke={3}
                        color={window.MASTERY_COLORS[b.mastery]} />
                    : <window.MasteryRing level={b.mastery} size={40} stroke={3} />}
                  <div style={{
                    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700, color: c.text2,
                  }}>{b.nr}</div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: c.text, lineHeight: 1.3 }}>
                    {b.titel}
                  </div>
                  <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>
                    {isProgress
                      ? <>{b.progress} / {b.steps} · {window.AnimatedNumber ? <window.AnimatedNumber to={pct} duration={1100} suffix="%" /> : `${pct}%`}</>
                      : `${window.MASTERY_LABELS[b.mastery]} · ${b.steps} Schritte`}
                  </div>
                </div>
                <div style={{ color: c.text3, fontSize: 16 }}>›</div>
              </div>
            );
          })}
        </div>

        {/* Empfohlen */}
        <H_SectionHeader kicker="Für dich empfohlen" />
        <div style={{
          background: `linear-gradient(180deg, ${c.bgWhite} 0%, ${c.accentSoft} 100%)`,
          border: `1px solid ${c.border}`, borderRadius: 14,
          padding: '14px', marginBottom: 18,
          boxShadow: '0 1px 2px rgba(26,24,21,0.04), 0 12px 24px -16px rgba(33,140,113,0.30)',
          animation: 'mu-soft-rise 700ms ease 600ms backwards',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 16, flexShrink: 0,
              background: c.bgWhite, border: `1.5px solid ${c.accent}`,
              color: c.accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700,
            }}>04</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, color: c.text3, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 600 }}>
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
              background: c.accent, color: '#fff', border: 'none', borderRadius: 8,
              padding: '6px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: HF,
            }}>Vorschau</button>
          </div>
        </div>

        {/* Schnellzugriff */}
        <H_SectionHeader kicker="Schnellzugriff" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, animation: 'mu-soft-rise 700ms ease 700ms backwards' }}>
          {[
            { icon: '🩺', label: 'Pflege-Situationen', sub: '4 Patient:innen', target: 'learn', delay: 0 },
            { icon: '📚', label: 'Glossar',           sub: '124 Begriffe',     target: 'glossar', delay: 50 },
            { icon: '🎯', label: 'Mastery-Karte',     sub: 'Deine Stärken',    target: 'me', delay: 100 },
            { icon: '🔍', label: 'Suche',             sub: 'Themen, Begriffe', target: 'glossar', delay: 150 },
          ].map(q => (
            <div key={q.label} onClick={() => onJump && onJump(q.target)} style={{
              background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 14,
              padding: '12px 14px', cursor: 'pointer',
              boxShadow: '0 1px 2px rgba(26,24,21,0.03), 0 6px 14px -10px rgba(26,24,21,0.10)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 1px 2px rgba(26,24,21,0.03), 0 10px 20px -10px rgba(26,24,21,0.16)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 1px 2px rgba(26,24,21,0.03), 0 6px 14px -10px rgba(26,24,21,0.10)'; }}
            >
              <div style={{ fontSize: 18, marginBottom: 6 }}>{q.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: c.text, lineHeight: 1.3 }}>{q.label}</div>
              <div style={{ fontSize: 10.5, color: c.text3, marginTop: 2 }}>{q.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <window.TabBar active="home" onTab={onTab} />
    </div>
  );
}

// ─── Variante: Lernen-Tab (nutzt CE-Übersicht) ─
function LearnScreen({ onTab, onOpenThema }) {
  const c = HC;
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: c.bg, overflow: 'hidden' }}>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <window.V1CECgpt />
      </div>
      <window.TabBar active="learn" onTab={onTab} />
    </div>
  );
}

// ─── Variante: Karten-Tab — Stub ─
function CardsScreen({ onTab, onStart }) {
  const c = HC;
  const stacks = [
    { titel: 'Schmerzmanagement', faellig: 8, total: 24 },
    { titel: 'Postoperative Aufnahme', faellig: 3, total: 18 },
    { titel: 'Mobilisation & Transfer', faellig: 0, total: 12 },
    { titel: 'Anatomie · Hüfte', faellig: 5, total: 16 },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: HF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      <div style={{ padding: '10px 16px 14px' }}>
        <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2 }}>Karteikarten</div>
        <div style={{ fontSize: 12, color: c.text3, marginTop: 4 }}>16 Karten heute fällig · 4 Stapel</div>
      </div>
      <div onClick={onStart} style={{
        margin: '0 16px 14px', padding: '14px',
        background: `linear-gradient(135deg, #3E5A6A 0%, #2a3f4d 100%)`,
        color: '#fff', borderRadius: 14, cursor: 'pointer',
      }}>
        <div style={{ fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.85, fontWeight: 700 }}>
          Heutige Wiederholung
        </div>
        <div style={{ fontSize: 18, fontWeight: 600, marginTop: 4 }}>16 Karten · ~10 min</div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          {[8, 5, 3].map((n, i) => (
            <div key={i} style={{
              flex: 1, padding: '6px', textAlign: 'center', borderRadius: 8,
              background: 'rgba(255,255,255,0.12)',
            }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{n}</div>
              <div style={{ fontSize: 9, opacity: 0.85, letterSpacing: 0.4, textTransform: 'uppercase' }}>
                {['Neu', 'Lernen', 'Reife'][i]}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 12, background: '#fff', color: '#3E5A6A',
          padding: '10px', borderRadius: 8, fontSize: 13, fontWeight: 700, textAlign: 'center',
        }}>Sitzung starten</div>
      </div>
      <div style={{ padding: '0 16px 16px', flex: 1, overflow: 'auto' }}>
        <div style={{ fontSize: 11, color: c.text2, letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>
          Stapel
        </div>
        {stacks.map(s => (
          <div key={s.titel} style={{
            background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 12,
            padding: '12px 14px', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{s.titel}</div>
              <div style={{ fontSize: 11, color: c.text3, marginTop: 2 }}>
                {s.faellig > 0 ? `${s.faellig} fällig · ` : 'Alle gelernt · '}{s.total} Karten
              </div>
            </div>
            {s.faellig > 0 && (
              <div style={{
                padding: '3px 8px', borderRadius: 999, fontSize: 11, fontWeight: 700,
                background: c.accentSoft, color: c.accent,
              }}>{s.faellig}</div>
            )}
            <div style={{ color: c.text3, fontSize: 16 }}>›</div>
          </div>
        ))}
      </div>
      <window.TabBar active="cards" onTab={onTab} />
    </div>
  );
}

// ─── Variante: Ich-Tab — Profil/Mastery ─
function MeScreen({ onTab }) {
  const c = HC;
  const masteryDistribution = [
    { level: 4, label: 'Gemeistert', count: 3 },
    { level: 3, label: 'Sicher',     count: 5 },
    { level: 2, label: 'Vertraut',   count: 4 },
    { level: 1, label: 'Versucht',   count: 2 },
    { level: 0, label: 'Neu',        count: 6 },
  ];
  const total = masteryDistribution.reduce((s, x) => s + x.count, 0);

  return (
    <div style={{ width: '100%', height: '100%', background: c.bg, fontFamily: HF, color: c.text, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <window.StatusSpacer />
      <div style={{ padding: '10px 16px 14px' }}>
        <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2 }}>Mein Fortschritt</div>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '0 16px 16px' }}>
        {/* Profil-Karte */}
        <div style={{
          background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 14,
          padding: '14px', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14,
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: 26,
            background: `linear-gradient(135deg, ${c.accent} 0%, #1a6f5a 100%)`,
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 700, flexShrink: 0,
          }}>L</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 16, fontWeight: 600 }}>Lina Bauer</div>
            <div style={{ fontSize: 12, color: c.text3, marginTop: 2 }}>Pflegeschule Mitte · 2. Lehrjahr</div>
          </div>
          <div style={{ fontSize: 16, color: c.text3 }}>›</div>
        </div>

        {/* Streak */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
          <H_StatPill value="🔥 12" label="Tage" accent="#D4956A" />
          <H_StatPill value="42h" label="Lernzeit" />
          <H_StatPill value="3" label="Gemeistert" accent="#218C71" />
        </div>

        {/* Mastery-Verteilung */}
        <H_SectionHeader kicker="Mastery-Verteilung" action="Detail" />
        <div style={{
          background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 12,
          padding: '14px', marginBottom: 18,
        }}>
          <div style={{ display: 'flex', height: 8, borderRadius: 999, overflow: 'hidden', marginBottom: 12, background: '#E8DFD5' }}>
            {masteryDistribution.map(m => (
              <div key={m.level} style={{
                width: `${(m.count / total) * 100}%`,
                background: window.MASTERY_COLORS[m.level],
              }} />
            ))}
          </div>
          {masteryDistribution.map(m => (
            <div key={m.level} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', fontSize: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: window.MASTERY_COLORS[m.level] }} />
              <div style={{ flex: 1, color: c.text2 }}>{m.label}</div>
              <div style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{m.count}</div>
            </div>
          ))}
        </div>

        <H_SectionHeader kicker="Einstellungen" />
        <div style={{ background: c.bgWhite, border: `1px solid ${c.border}`, borderRadius: 12, padding: '4px 0' }}>
          {['Erinnerungen', 'Darstellung', 'Audio & Aussprache', 'Hilfe & Support', 'Abmelden'].map((s, i, arr) => (
            <div key={s} style={{
              padding: '12px 14px', display: 'flex', alignItems: 'center',
              borderBottom: i < arr.length - 1 ? `1px solid ${c.borderStrong}` : 'none',
              fontSize: 13,
              color: s === 'Abmelden' ? '#C96B5C' : c.text,
            }}>
              <div style={{ flex: 1 }}>{s}</div>
              <div style={{ color: c.text3, fontSize: 14 }}>›</div>
            </div>
          ))}
        </div>
      </div>
      <window.TabBar active="me" onTab={onTab} />
    </div>
  );
}

// ─── Tab-App: integrierter Flow mit Bottom-Nav ──
function HomeTabApp() {
  const [tab, setTab] = React.useState('home');
  if (tab === 'home')  return <HomeScreen  onTab={setTab} onContinue={() => setTab('learn')} />;
  if (tab === 'learn') return <LearnScreen onTab={setTab} />;
  if (tab === 'cards') return <CardsScreen onTab={setTab} />;
  return <MeScreen onTab={setTab} />;
}

// Standalone-Wrappers
function HomeStandalone()  { return <HomeScreen  onTab={() => {}} />; }
function LearnStandalone() { return <LearnScreen onTab={() => {}} />; }
function CardsStandalone() { return <CardsScreen onTab={() => {}} />; }
function MeStandalone()    { return <MeScreen    onTab={() => {}} />; }

Object.assign(window, {
  HomeScreen, LearnScreen, CardsScreen, MeScreen,
  HomeTabApp, HomeStandalone, LearnStandalone, CardsStandalone, MeStandalone,
});
