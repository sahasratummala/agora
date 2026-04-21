const messages = [
  { from: 'them', name: 'Shreya', text: 'did you see what sahasra posted 😭' },
  { from: 'me', text: 'WHAT' },
  { from: 'them', name: 'Shreya', text: 'sending the link rn' },
  { from: 'me', text: '💀💀' },
  { from: 'them', name: 'Ravi', text: 'bro she really did that' },
  { from: 'me', text: 'idk her 🫡' },
];

export default function BombSquadGC() {
  return (
    <div className="gc-mockup">
      <div className="gc-header">
        <span className="gc-emoji">💣</span>
        <div className="gc-header-text">
          <span className="gc-title">BOMB SQUAD</span>
          <span className="gc-members">6 members</span>
        </div>
      </div>
      <div className="gc-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`gc-row gc-row-${msg.from}`}>
            {msg.from === 'them' && <span className="gc-sender">{msg.name}</span>}
            <div className={`gc-bubble gc-bubble-${msg.from}`}>{msg.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
