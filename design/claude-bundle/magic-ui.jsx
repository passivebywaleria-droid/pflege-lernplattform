// Magic-UI-Primitives für Pflege-Lernplattform
// Bewusst zurückhaltend: warme Tone, langsame Easings, keine Shimmer/Glitter
//
// Bausteine:
// - AnimatedNumber({to, duration, prefix, suffix})       — zählt von 0 hoch beim Mount
// - StreakHeatmap({weeks, intensities})                  — GitHub-style Heatmap
// - MasteryConstellation({nodes, links})                 — kreisende Punkte mit Verbindungs-Beams
// - AnimatedBeam({fromRef, toRef, color})                — gestrichelte SVG-Linie zwischen 2 DOM-Punkten
// - Marquee({children, speed, fade})                     — endlos laufendes Band
// - ProgressRing({value, size, stroke, color, animate})  — Ring mit Sweep-Anim
// - BorderGlow({color, radius})                          — sanfter, langsam wandernder Rand
// - useTimeOfDayGreeting()                               — Tageszeit-passender Gruß

const MUC = {
  bg: '#F8F5F0', bgWhite: '#FFFFFF',
  text: '#1A1815', text2: '#4E4740', text3: '#8A8278',
  border: 'rgba(33,140,113,0.14)', borderStrong: 'rgba(26,24,21,0.10)',
  accent: '#218C71', accentSoft: 'rgba(33,140,113,0.10)',
  amber: '#D4956A', slate: '#3E5A6A',
};

// ─── AnimatedNumber ──────────────────────────────────
function AnimatedNumber({ to = 0, from = 0, duration = 1200, prefix = '', suffix = '', delay = 0, format }) {
  const [val, setVal] = React.useState(from);
  React.useEffect(() => {
    let raf, start;
    const t = setTimeout(() => {
      const animate = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(from + (to - from) * eased);
        if (p < 1) raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
    }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [to, from, duration, delay]);
  const display = format ? format(val) : Math.round(val).toLocaleString('de-DE');
  return <span style={{ fontVariantNumeric: 'tabular-nums' }}>{prefix}{display}{suffix}</span>;
}

// ─── ProgressRing ───────────────────────────────────
function ProgressRing({ value = 0.5, size = 48, stroke = 4, color, track, animate = true, duration = 1400, children }) {
  const c = color || MUC.accent;
  const t = track || 'rgba(0,0,0,0.06)';
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const [v, setV] = React.useState(animate ? 0 : value);
  React.useEffect(() => {
    if (!animate) return;
    let raf, start;
    const animate2 = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(value * eased);
      if (p < 1) raf = requestAnimationFrame(animate2);
    };
    raf = requestAnimationFrame(animate2);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, animate]);
  const dash = circ * v;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={t} strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={c} strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circ}`}
          style={{ transition: 'stroke-dasharray 0.3s' }}
        />
      </svg>
      {children && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </div>
      )}
    </div>
  );
}

// ─── StreakHeatmap ──────────────────────────────────
// Daten: 7 Reihen (Mo-So) × N Wochen, intensities[week][day] in 0..4
function StreakHeatmap({ weeks = 12, intensities, size = 9, gap = 3, color = MUC.accent, label = true, animate = true }) {
  // Default: random-ish realistic pattern, dichter rechts
  const data = React.useMemo(() => {
    if (intensities) return intensities;
    const result = [];
    for (let w = 0; w < weeks; w++) {
      const row = [];
      for (let d = 0; d < 7; d++) {
        const recent = w / weeks; // 0..1, neuer = höher
        const r = Math.random();
        let v = 0;
        if (r < 0.15 + recent * 0.4) v = 1;
        if (r < 0.05 + recent * 0.5) v = 2;
        if (r < 0.02 + recent * 0.4) v = 3;
        if (r < 0.005 + recent * 0.25) v = 4;
        // Wochenenden etwas seltener
        if (d === 5 || d === 6) v = Math.max(0, v - 1);
        row.push(v);
      }
      result.push(row);
    }
    return result;
  }, [weeks, intensities]);

  const colorAt = (v) => {
    if (v === 0) return 'rgba(0,0,0,0.05)';
    const opacities = [0, 0.22, 0.45, 0.70, 1];
    return `${color}${Math.round(opacities[v] * 255).toString(16).padStart(2, '0')}`;
  };

  const dayLabels = ['M', '', 'M', '', 'F', '', ''];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex', gap }}>
        {/* Day labels left */}
        <div style={{ display: 'flex', flexDirection: 'column', gap, marginRight: 4, paddingTop: 0 }}>
          {dayLabels.map((d, i) => (
            <div key={i} style={{
              width: 8, height: size, fontSize: 7, color: MUC.text3,
              display: 'flex', alignItems: 'center', justifyContent: 'flex-end', letterSpacing: 0.4,
            }}>{d}</div>
          ))}
        </div>
        {data.map((week, wi) => (
          <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap }}>
            {week.map((v, di) => {
              const delay = animate ? (wi * 7 + di) * 12 : 0;
              return (
                <div key={di} style={{
                  width: size, height: size, borderRadius: 2,
                  background: colorAt(v),
                  animation: animate ? `mu-fade-in 400ms ease ${delay}ms backwards` : 'none',
                }} />
              );
            })}
          </div>
        ))}
      </div>
      {label && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, fontSize: 9, color: MUC.text3, letterSpacing: 0.4 }}>
          <span>Weniger</span>
          {[0, 1, 2, 3, 4].map(v => (
            <div key={v} style={{ width: 8, height: 8, borderRadius: 2, background: colorAt(v) }} />
          ))}
          <span>Mehr</span>
        </div>
      )}
    </div>
  );
}

// ─── Marquee ────────────────────────────────────────
function Marquee({ children, speed = 60, fade = true, pauseOnHover = false, vertical = false, reverse = false }) {
  // children kann array oder fragment sein
  const items = React.Children.toArray(children);
  const dir = reverse ? 'reverse' : 'normal';
  const animName = vertical ? 'mu-marquee-y' : 'mu-marquee-x';
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      maskImage: fade ? (vertical
        ? 'linear-gradient(180deg, transparent, #000 12%, #000 88%, transparent)'
        : 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)') : 'none',
      WebkitMaskImage: fade ? (vertical
        ? 'linear-gradient(180deg, transparent, #000 12%, #000 88%, transparent)'
        : 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)') : 'none',
      width: '100%', height: vertical ? '100%' : 'auto',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
        gap: 16,
        animation: `${animName} ${speed}s linear infinite ${dir}`,
        width: vertical ? '100%' : 'fit-content',
        whiteSpace: vertical ? 'normal' : 'nowrap',
      }}
      onMouseEnter={pauseOnHover ? (e) => { e.currentTarget.style.animationPlayState = 'paused'; } : undefined}
      onMouseLeave={pauseOnHover ? (e) => { e.currentTarget.style.animationPlayState = 'running'; } : undefined}
      >
        {items}
        {items}
      </div>
    </div>
  );
}

// ─── MasteryConstellation ───────────────────────────
// Nodes auf konzentrischen Ringen, mit Verbindungs-Beams.
// Innerster Ring = mastered (5), äußerster = neu (1).
function MasteryConstellation({ size = 240, nodes, animate = true }) {
  // nodes: [{ id, mastery: 0..4, label, x?, y?, hue? }]
  const cx = size / 2, cy = size / 2;
  const placed = React.useMemo(() => {
    if (nodes.every(n => n.x !== undefined)) return nodes;
    // ring radii by mastery
    const radii = [size * 0.42, size * 0.34, size * 0.26, size * 0.18, size * 0.10];
    const groups = [[], [], [], [], []];
    nodes.forEach(n => groups[n.mastery].push(n));
    const result = [];
    groups.forEach((g, mi) => {
      g.forEach((n, i) => {
        const angle = (i / Math.max(g.length, 1)) * Math.PI * 2 + mi * 0.4;
        result.push({
          ...n,
          x: cx + Math.cos(angle) * radii[mi],
          y: cy + Math.sin(angle) * radii[mi],
        });
      });
    });
    return result;
  }, [nodes, size]);

  const masteryColors = ['#A09890', '#D4AE88', '#B8A894', '#3E5A6A', '#218C71'];

  // Beams: connect mastered (4) to others nearby (max 2 per node)
  const beams = React.useMemo(() => {
    const result = [];
    const masteredNodes = placed.filter(n => n.mastery >= 3);
    masteredNodes.forEach(m => {
      const others = placed
        .filter(o => o.id !== m.id)
        .map(o => ({ o, d: Math.hypot(o.x - m.x, o.y - m.y) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      others.forEach(({ o }) => result.push({ from: m, to: o }));
    });
    return result;
  }, [placed]);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      <defs>
        <radialGradient id="mc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={MUC.accent} stopOpacity="0.18" />
          <stop offset="60%" stopColor={MUC.accent} stopOpacity="0.04" />
          <stop offset="100%" stopColor={MUC.accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mc-beam" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={MUC.accent} stopOpacity="0" />
          <stop offset="50%" stopColor={MUC.accent} stopOpacity="0.6" />
          <stop offset="100%" stopColor={MUC.accent} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx={cx} cy={cy} r={size * 0.45} fill="url(#mc-glow)" />

      {/* Concentric guide rings */}
      {[0.10, 0.18, 0.26, 0.34, 0.42].map((r, i) => (
        <circle key={i} cx={cx} cy={cy} r={size * r} fill="none"
          stroke={MUC.text3} strokeOpacity="0.08" strokeWidth="0.5"
          strokeDasharray={i < 4 ? "2 4" : "none"}
        />
      ))}

      {/* Beams */}
      {beams.map((b, i) => (
        <line key={i} x1={b.from.x} y1={b.from.y} x2={b.to.x} y2={b.to.y}
          stroke={MUC.accent} strokeOpacity="0.18" strokeWidth="1"
          strokeDasharray="2 3"
          style={animate ? { animation: `mu-dash 6s linear infinite` } : {}}
        />
      ))}

      {/* Center label */}
      <text x={cx} y={cy + 3} textAnchor="middle"
        fontFamily={MUC.text}
        style={{ fontSize: 11, fontWeight: 700, fill: MUC.accent, letterSpacing: 0.5 }}>
        DU
      </text>

      {/* Nodes */}
      {placed.map((n, i) => {
        const r = n.mastery >= 3 ? 5.5 : n.mastery >= 1 ? 4 : 3;
        const fill = masteryColors[n.mastery];
        return (
          <g key={n.id} style={animate ? { animation: `mu-pop 600ms ease ${i * 60}ms backwards` } : {}}>
            {n.mastery >= 3 && (
              <circle cx={n.x} cy={n.y} r={r + 4}
                fill={fill} fillOpacity="0.18"
                style={animate ? { animation: 'mu-pulse 3s ease-in-out infinite' } : {}}
              />
            )}
            <circle cx={n.x} cy={n.y} r={r} fill={fill} stroke="#fff" strokeWidth="1.5" />
          </g>
        );
      })}
    </svg>
  );
}

// ─── AnimatedBeam ──────────────────────────────────
// Verbindet 2 Refs mit gestrichelter Linie. Container muss position:relative sein.
function AnimatedBeam({ containerRef, fromRef, toRef, color = MUC.accent, curvature = 30, dashed = true, opacity = 0.5 }) {
  const [coords, setCoords] = React.useState(null);
  React.useEffect(() => {
    const update = () => {
      if (!containerRef?.current || !fromRef?.current || !toRef?.current) return;
      const cb = containerRef.current.getBoundingClientRect();
      const fb = fromRef.current.getBoundingClientRect();
      const tb = toRef.current.getBoundingClientRect();
      setCoords({
        x1: fb.left + fb.width / 2 - cb.left,
        y1: fb.top + fb.height / 2 - cb.top,
        x2: tb.left + tb.width / 2 - cb.left,
        y2: tb.top + tb.height / 2 - cb.top,
        w: cb.width, h: cb.height,
      });
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', update);
    return () => { ro.disconnect(); window.removeEventListener('resize', update); };
  }, [containerRef, fromRef, toRef]);
  if (!coords) return null;
  const { x1, y1, x2, y2, w, h } = coords;
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 - curvature;
  const path = `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
  return (
    <svg width={w} height={h} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      <path d={path} fill="none" stroke={color} strokeOpacity={opacity}
        strokeWidth="1.2"
        strokeDasharray={dashed ? "3 4" : "none"}
        style={dashed ? { animation: 'mu-dash 4s linear infinite' } : {}}
      />
    </svg>
  );
}

// ─── Tageszeit-Greeting ─────────────────────────────
function useTimeOfDayGreeting() {
  // Wir simulieren feste Tageszeit für Demo — könnte aber new Date().getHours() sein
  const hour = (typeof window !== 'undefined' && window.__demoHour !== undefined)
    ? window.__demoHour
    : new Date().getHours();
  if (hour >= 5  && hour < 11) return { text: 'Guten Morgen',  sub: 'Frischer Start in den Tag', icon: 'sun-rise' };
  if (hour >= 11 && hour < 14) return { text: 'Hallo',          sub: 'Mittagszeit',                icon: 'sun' };
  if (hour >= 14 && hour < 18) return { text: 'Schön, dass du da bist', sub: 'Nachmittag',         icon: 'sun-low' };
  if (hour >= 18 && hour < 22) return { text: 'Guten Abend',    sub: 'Letzte Runde heute?',        icon: 'sun-set' };
  return { text: 'Spät dran', sub: 'Schlaf ist Lernen',      icon: 'moon' };
}

// ─── Inject keyframes once ──────────────────────────
(function injectMUStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('mu-styles')) return;
  const s = document.createElement('style');
  s.id = 'mu-styles';
  s.textContent = `
    @keyframes mu-marquee-x { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    @keyframes mu-marquee-y { from { transform: translateY(0); } to { transform: translateY(-50%); } }
    @keyframes mu-fade-in { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: scale(1); } }
    @keyframes mu-pop { from { opacity: 0; transform: scale(0); transform-origin: center; } to { opacity: 1; transform: scale(1); } }
    @keyframes mu-pulse { 0%, 100% { opacity: 0.4; transform-box: fill-box; transform-origin: center; transform: scale(1); } 50% { opacity: 0.15; transform: scale(1.4); } }
    @keyframes mu-dash { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -28; } }
    @keyframes mu-glow-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes mu-soft-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, {
  AnimatedNumber, ProgressRing, StreakHeatmap, Marquee,
  MasteryConstellation, AnimatedBeam, useTimeOfDayGreeting,
  MUC,
});
