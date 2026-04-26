// Globale Tab-Bar — iOS-style Bottom-Navigation
// 4 Tabs: Home, Lernen, Karten, Ich
// Reines Visual; activeTab als Prop, onTab als Callback.

const TBC = window.CGPT;
const TBF = "Inter, -apple-system, system-ui, sans-serif";

function TabIcon({ kind, active }) {
  const stroke = active ? TBC.accent : TBC.text3;
  const fill = active ? TBC.accentSoft : 'none';
  const sw = 1.6;
  if (kind === 'home') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill}>
      <path d="M4 11 L12 4 L20 11 V20 H14 V14 H10 V20 H4 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" fill={fill} />
    </svg>
  );
  if (kind === 'learn') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 6 L12 3 L21 6 L12 9 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" fill={fill} />
      <path d="M6 9 V14 Q12 17 18 14 V9" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" fill="none" />
      <line x1="21" y1="6" x2="21" y2="12" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
    </svg>
  );
  if (kind === 'cards') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="4" width="13" height="16" rx="2" stroke={stroke} strokeWidth={sw} fill={fill} />
      <rect x="3" y="7" width="13" height="13" rx="2" stroke={stroke} strokeWidth={sw} fill={active ? '#fff' : 'none'} />
    </svg>
  );
  if (kind === 'me') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="9" r="3.5" stroke={stroke} strokeWidth={sw} fill={fill} />
      <path d="M5 20 Q5 14 12 14 Q19 14 19 20" stroke={stroke} strokeWidth={sw} strokeLinecap="round" fill="none" />
    </svg>
  );
  return null;
}

function TabBar({ active = 'home', onTab }) {
  const c = TBC;
  const tabs = [
    { id: 'home',  label: 'Home',     kind: 'home' },
    { id: 'learn', label: 'Lernen',   kind: 'learn' },
    { id: 'cards', label: 'Karten',   kind: 'cards' },
    { id: 'me',    label: 'Ich',      kind: 'me' },
  ];
  return (
    <div style={{
      background: c.bgWhite,
      borderTop: `1px solid ${c.borderStrong}`,
      padding: '8px 12px 22px',
      display: 'flex',
      fontFamily: TBF,
      flexShrink: 0,
    }}>
      {tabs.map(t => {
        const isActive = active === t.id;
        return (
          <button key={t.id} onClick={() => onTab && onTab(t.id)} style={{
            flex: 1, background: 'transparent', border: 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            padding: '4px 0', cursor: 'pointer',
          }}>
            <TabIcon kind={t.kind} active={isActive} />
            <span style={{
              fontSize: 10, fontWeight: isActive ? 600 : 500,
              color: isActive ? c.accent : c.text3,
              letterSpacing: 0.2,
            }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { TabBar });
