export default function FlightPath() {
  return (
    <div className="flight-sticker">
      <div className="sticker-route">
        <div className="sticker-city">
          <span className="sticker-code">DFW</span>
          <span className="sticker-name">dallas</span>
        </div>
        <div className="sticker-arc-wrap">
          <svg className="sticker-svg" viewBox="0 0 88 32" fill="none">
            <path
              d="M4,26 Q44,3 84,26"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeDasharray="4 3"
              strokeLinecap="round"
            />
          </svg>
          <div className="sticker-plane">✈</div>
        </div>
        <div className="sticker-city">
          <span className="sticker-code">MAA</span>
          <span className="sticker-name">chennai</span>
        </div>
      </div>
      <div className="sticker-footer">19 hrs · 8,730 mi</div>
    </div>
  );
}
