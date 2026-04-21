function MatchaCup() {
  return (
    <svg viewBox="0 0 80 88" width="72" height="80" aria-hidden="true">
      {/* Saucer */}
      <ellipse cx="40" cy="82" rx="34" ry="6" fill="#d4c090" stroke="#c0aa70" strokeWidth="1"/>
      {/* Cup body */}
      <path d="M16,38 Q14,72 40,76 Q66,72 64,38 Z" fill="#fffdf5" stroke="#d8cfa8" strokeWidth="1.5"/>
      {/* Cup rim ellipse */}
      <ellipse cx="40" cy="38" rx="24" ry="7" fill="#fffdf5" stroke="#d8cfa8" strokeWidth="1.5"/>
      {/* Matcha fill */}
      <ellipse cx="40" cy="38" rx="22" ry="6" fill="#6aaa5a"/>
      {/* Foam swirl */}
      <path d="M32,36 Q36,32 40,36 Q44,40 48,36" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
      {/* Handle */}
      <path d="M64,48 Q76,48 76,58 Q76,68 64,68" fill="none" stroke="#d8cfa8" strokeWidth="4" strokeLinecap="round"/>
      {/* Label */}
      <text x="40" y="96" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="13" fill="rgba(44,44,42,0.5)">matcha</text>
    </svg>
  );
}

function MochiBall() {
  return (
    <svg viewBox="0 0 80 90" width="72" height="80" aria-hidden="true">
      {/* Shadow */}
      <ellipse cx="40" cy="80" rx="22" ry="5" fill="rgba(0,0,0,0.07)"/>
      {/* Body */}
      <circle cx="40" cy="44" r="30" fill="#fde8ec"/>
      <circle cx="40" cy="44" r="30" fill="none" stroke="#f4bac6" strokeWidth="1.5"/>
      {/* Highlight */}
      <ellipse cx="30" cy="33" rx="10" ry="7" fill="rgba(255,255,255,0.6)" transform="rotate(-20,30,33)"/>
      {/* Eyes */}
      <circle cx="32" cy="42" r="3.5" fill="#2c1810"/>
      <circle cx="48" cy="42" r="3.5" fill="#2c1810"/>
      <circle cx="33.5" cy="40.5" r="1.2" fill="white"/>
      <circle cx="49.5" cy="40.5" r="1.2" fill="white"/>
      {/* Blush */}
      <ellipse cx="24" cy="49" rx="6" ry="3.5" fill="#f9a0b0" opacity="0.5"/>
      <ellipse cx="56" cy="49" rx="6" ry="3.5" fill="#f9a0b0" opacity="0.5"/>
      {/* Smile */}
      <path d="M32,53 Q40,60 48,53" fill="none" stroke="#2c1810" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Label */}
      <text x="40" y="88" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="13" fill="rgba(44,44,42,0.5)">mochi</text>
    </svg>
  );
}

export default function CafeExtras() {
  return (
    <div className="cafe-extras-sticker">
      <MatchaCup />
      <MochiBall />
    </div>
  );
}
