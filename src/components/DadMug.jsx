export default function DadMug() {
  return (
    <div className="dad-mug-sticker">
      <svg viewBox="0 0 132 124" width="126" height="118" aria-hidden="true">
        {/* Steam */}
        <path d="M34,22 Q29,14 34,7 Q39,0 34,-6" fill="none" stroke="rgba(140,140,140,0.4)" strokeWidth="2.5" strokeLinecap="round" className="mug-steam mug-steam-1"/>
        <path d="M57,20 Q52,11 57,4 Q62,-3 57,-9" fill="none" stroke="rgba(140,140,140,0.4)" strokeWidth="2.5" strokeLinecap="round" className="mug-steam mug-steam-2"/>
        <path d="M80,22 Q75,14 80,7 Q85,0 80,-6" fill="none" stroke="rgba(140,140,140,0.4)" strokeWidth="2.5" strokeLinecap="round" className="mug-steam mug-steam-3"/>
        {/* Mug body */}
        <rect x="6" y="28" width="88" height="78" rx="6" fill="white" stroke="#ccc" strokeWidth="1.5"/>
        {/* Handle — wider viewBox ensures no cutoff */}
        <path d="M94,46 Q118,46 118,68 Q118,90 94,90" fill="none" stroke="#ccc" strokeWidth="5.5" strokeLinecap="round"/>
        {/* Bottom rim */}
        <rect x="2" y="103" width="96" height="8" rx="4" fill="#e8e8e8" stroke="#ccc" strokeWidth="1"/>
        {/* Text */}
        <text x="50" y="60" textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="10.5" fill="#111" fontWeight="700" letterSpacing="0.05em">WORLD'S</text>
        <text x="50" y="75" textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="10.5" fill="#111" fontWeight="700" letterSpacing="0.05em">BEST</text>
        <text x="50" y="90" textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="10.5" fill="#111" fontWeight="700" letterSpacing="0.05em">DAD</text>
      </svg>
    </div>
  );
}
