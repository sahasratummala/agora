// Heart pattern on 5x5 LED grid
const HEART = [
  [0,1,0,1,0],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [0,1,1,1,0],
  [0,0,1,0,0],
];

export default function Microbit() {
  return (
    <div className="microbit-sticker">
      <svg viewBox="0 0 120 140" width="110" height="130" aria-hidden="true">
        {/* Board — lavender */}
        <rect x="5" y="12" width="110" height="116" rx="14" fill="#e0d7f5" stroke="#c4b4ee" strokeWidth="2"/>
        <rect x="10" y="17" width="100" height="106" rx="10" fill="none" stroke="rgba(180,160,240,0.35)" strokeWidth="2"/>
        {/* LED grid background — soft dark purple */}
        <rect x="18" y="24" width="84" height="84" rx="8" fill="#2e1f4f"/>
        {/* LEDs */}
        {HEART.map((row, ri) =>
          row.map((on, ci) => (
            <circle
              key={`${ri}-${ci}`}
              cx={28 + ci * 16}
              cy={34 + ri * 16}
              r="5.5"
              fill={on ? '#ff6eb4' : '#3d2b66'}
              className={on ? 'led-on' : ''}
            />
          ))
        )}
        {/* Button A */}
        <rect x="2" y="56" width="13" height="28" rx="4" fill="#c4b4ee" stroke="#a896d8" strokeWidth="1"/>
        <circle cx="8.5" cy="70" r="4" fill="#b0a0e0"/>
        {/* Button B */}
        <rect x="105" y="56" width="13" height="28" rx="4" fill="#c4b4ee" stroke="#a896d8" strokeWidth="1"/>
        <circle cx="111.5" cy="70" r="4" fill="#b0a0e0"/>
        {/* Edge connector */}
        {[18,30,42,54,66,78,90,102].map((x, i) => (
          <rect key={i} x={x} y="122" width="8" height="10" rx="2" fill="#c4b4ee" stroke="#a896d8" strokeWidth="1"/>
        ))}
        <text x="60" y="118" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="7" fill="rgba(44,44,42,0.4)" letterSpacing="1">micro:bit</text>
      </svg>
    </div>
  );
}
