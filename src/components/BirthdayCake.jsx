export default function BirthdayCake() {
  return (
    <div className="birthday-cake-sticker">
      <svg viewBox="0 0 100 118" width="96" height="112" aria-hidden="true">
        {/* Plate */}
        <ellipse cx="50" cy="110" rx="44" ry="7" fill="#e8d5b8" stroke="#d4c0a0" strokeWidth="1"/>
        {/* Bottom layer */}
        <rect x="8" y="72" width="84" height="38" rx="8" fill="#f9c2cc" stroke="#f0aab8" strokeWidth="1.5"/>
        {/* Bottom frosting drip */}
        <path d="M8,72 Q14,63 20,72 Q26,63 32,72 Q38,63 44,72 Q50,63 56,72 Q62,63 68,72 Q74,63 80,72 Q86,63 92,72" fill="white" stroke="none"/>
        {/* Top layer */}
        <rect x="18" y="50" width="64" height="24" rx="6" fill="#fff0d4" stroke="#f5d88a" strokeWidth="1.5"/>
        {/* Top frosting drip */}
        <path d="M18,50 Q23,43 28,50 Q33,43 38,50 Q43,43 48,50 Q53,43 58,50 Q63,43 68,50 Q73,43 78,50 Q82,43 82,50" fill="white" stroke="none"/>
        {/* Sprinkles on bottom */}
        <line x1="22" y1="84" x2="28" y2="86" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="44" y1="80" x2="50" y2="82" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="62" y1="82" x2="68" y2="80" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="76" y1="86" x2="82" y2="84" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="34" y1="92" x2="40" y2="90" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="56" y1="90" x2="62" y2="92" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Candle */}
        <rect x="44" y="30" width="12" height="22" rx="4" fill="#93c5fd" stroke="#60a5fa" strokeWidth="1"/>
        {/* Candle stripes */}
        <line x1="44" y1="35" x2="56" y2="35" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <line x1="44" y1="40" x2="56" y2="40" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <line x1="44" y1="45" x2="56" y2="45" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        {/* Wick */}
        <line x1="50" y1="30" x2="50" y2="25" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Flame group */}
        <g className="candle-flame" style={{transformOrigin: '50px 24px'}}>
          <ellipse cx="50" cy="20" rx="6" ry="8" fill="#fb923c"/>
          <ellipse cx="50" cy="22" rx="3.5" ry="5.5" fill="#fde68a"/>
          <ellipse cx="50" cy="23.5" rx="1.5" ry="2.5" fill="rgba(255,255,255,0.8)"/>
        </g>
        {/* Smoke (visible after blow-out) */}
        <g className="candle-smoke">
          <circle cx="50" cy="20" r="3" fill="rgba(120,120,120,0.35)"/>
          <circle cx="47" cy="14" r="2.5" fill="rgba(120,120,120,0.25)"/>
          <circle cx="52" cy="8" r="2" fill="rgba(120,120,120,0.15)"/>
          <circle cx="48" cy="3" r="1.5" fill="rgba(120,120,120,0.1)"/>
        </g>
      </svg>
    </div>
  );
}
