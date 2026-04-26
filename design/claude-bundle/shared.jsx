// Shared tokens + primitives for all variants of the Pflege-Lernplattform redesign.
// Warm palette: Dusty Rose #C4877F, Sage #6B8F71, warm off-whites.

const LERN = {
  rose: '#C4877F',
  sage: '#6B8F71',
  red: '#C96B5C',
  amber: '#D4956A',
  bg: '#FAF7F4',
  bgWhite: '#FFFFFF',
  text: '#2A2520',
  text2: '#6B5E52',
  text3: '#998B7E',
  border: 'rgba(196,135,127,0.15)',
  borderStrong: 'rgba(42,37,32,0.10)',
  // mastery
  m0: '#a09890', m1: '#D4956A', m2: '#BFA48E', m3: '#6B8F71', m4: '#C4877F',
};

// Dark variant
const LERN_DARK = {
  ...LERN,
  bg: '#1A1614',
  bgWhite: '#221D1A',
  text: '#F4EDE6',
  text2: '#B8A89A',
  text3: '#80706A',
  border: 'rgba(196,135,127,0.20)',
  borderStrong: 'rgba(244,237,230,0.10)',
};

// Striped photo placeholder — used where pflege-situation photos would go.
function PhotoPlaceholder({ label = 'patient', w = '100%', h = 120, dark = false, rose = false, sage = false, style = {} }) {
  const baseA = dark ? '#2A2320' : '#EDE3D9';
  const baseB = dark ? '#1E1917' : '#E3D5C8';
  const c1 = rose ? '#C4877F' : sage ? '#6B8F71' : baseA;
  const c2 = rose ? '#B07068' : sage ? '#597559' : baseB;
  return (
    <div style={{
      width: w, height: h, borderRadius: 10, overflow: 'hidden',
      background: `repeating-linear-gradient(135deg, ${c1} 0 10px, ${c2} 10px 20px)`,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
      padding: 8, fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 9,
      color: rose || sage ? 'rgba(255,255,255,0.85)' : (dark ? '#80706A' : '#6B5E52'),
      letterSpacing: 0.5, textTransform: 'uppercase',
      ...style,
    }}>
      <span style={{ background: 'rgba(0,0,0,0.25)', color: '#fff', padding: '2px 6px', borderRadius: 3 }}>
        {label}
      </span>
    </div>
  );
}

// 6-Phasen-Progress — spiral pflege model (Informieren, Planen, Entscheiden, Durchführen, Kontrollieren, Reflektieren)
const PHASES = ['Info', 'Plan', 'Entsch.', 'Durchf.', 'Kontr.', 'Refl.'];
const PHASES_FULL = ['Informieren', 'Planen', 'Entscheiden', 'Durchführen', 'Kontrollieren', 'Reflektieren'];

// Classic phasen bar (conservative)
function PhasenBar({ current = 2, completed = [0, 1], compact = false, dark = false }) {
  const colors = dark ? LERN_DARK : LERN;
  return (
    <div style={{ display: 'flex', gap: 4, width: '100%' }}>
      {PHASES.map((p, i) => {
        const done = completed.includes(i);
        const active = i === current;
        const bg = done ? colors.sage : active ? colors.rose : dark ? '#2E2724' : '#E8DFD5';
        return (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{
              height: compact ? 4 : 6, width: '100%', borderRadius: 999,
              background: bg,
              boxShadow: active ? `0 0 0 3px ${colors.rose}22` : 'none',
            }} />
            {!compact && (
              <div style={{
                fontSize: 9, letterSpacing: 0.3, fontWeight: active ? 600 : 400,
                color: active ? colors.rose : done ? colors.sage : colors.text3,
              }}>{p}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Spiral phasen — novel variant: dots around a spiral
function PhasenSpiral({ current = 2, completed = [0, 1], size = 88, dark = false }) {
  const colors = dark ? LERN_DARK : LERN;
  const cx = size / 2, cy = size / 2;
  // 6 points on a spiral
  const pts = PHASES.map((_, i) => {
    const t = i / 5;
    const angle = -Math.PI / 2 + t * Math.PI * 1.6;
    const r = 10 + t * (size / 2 - 16);
    return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r, t };
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path
        d={pts.map((p, i) => (i === 0 ? 'M' : 'L') + p.x.toFixed(1) + ' ' + p.y.toFixed(1)).join(' ')}
        stroke={dark ? '#3A2E28' : '#E8DFD5'} strokeWidth={1.5} fill="none" strokeDasharray="2 3"
      />
      {pts.map((p, i) => {
        const done = completed.includes(i);
        const active = i === current;
        const fill = done ? colors.sage : active ? colors.rose : dark ? '#3A2E28' : '#E8DFD5';
        const r = active ? 6 : done ? 4 : 3;
        return (
          <g key={i}>
            {active && <circle cx={p.x} cy={p.y} r={10} fill={colors.rose} opacity={0.15} />}
            <circle cx={p.x} cy={p.y} r={r} fill={fill} />
          </g>
        );
      })}
    </svg>
  );
}

// Phasen bloom — 6 petals, novel growth metaphor
function PhasenBloom({ current = 2, completed = [0, 1], size = 72, dark = false }) {
  const colors = dark ? LERN_DARK : LERN;
  const cx = size / 2, cy = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {PHASES.map((_, i) => {
        const done = completed.includes(i);
        const active = i === current;
        const angle = -Math.PI / 2 + (i / 6) * Math.PI * 2;
        const x = cx + Math.cos(angle) * 18;
        const y = cy + Math.sin(angle) * 18;
        const fill = done ? colors.sage : active ? colors.rose : dark ? '#3A2E28' : '#EDE3D9';
        return (
          <ellipse key={i} cx={x} cy={y} rx={9} ry={14}
            transform={`rotate(${(angle * 180) / Math.PI + 90} ${x} ${y})`}
            fill={fill} opacity={active ? 1 : done ? 0.9 : 0.7} />
        );
      })}
      <circle cx={cx} cy={cy} r={6} fill={dark ? colors.bg : '#FFF'} stroke={colors.rose} strokeWidth={1.5} />
    </svg>
  );
}

// Mastery pill
function MasteryPill({ level = 2, label = true, dark = false }) {
  const colors = dark ? LERN_DARK : LERN;
  const LEVELS = [
    { c: colors.m0, t: 'neu' },
    { c: colors.m1, t: 'versucht' },
    { c: colors.m2, t: 'vertraut' },
    { c: colors.m3, t: 'sicher' },
    { c: colors.m4, t: 'gemeistert' },
  ];
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
      <div style={{ display: 'flex', gap: 2 }}>
        {LEVELS.map((L, i) => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: 999,
            background: i <= level ? L.c : dark ? '#3A2E28' : '#E8DFD5',
          }} />
        ))}
      </div>
      {label && <span style={{ color: colors.text2, fontSize: 10 }}>{LEVELS[level].t}</span>}
    </div>
  );
}

// Status bar for iOS frame inner content
function StatusSpacer({ h = 44 }) { return <div style={{ height: h }} />; }

Object.assign(window, {
  LERN, LERN_DARK, PHASES, PHASES_FULL,
  PhotoPlaceholder, PhasenBar, PhasenSpiral, PhasenBloom, MasteryPill, StatusSpacer,
});
