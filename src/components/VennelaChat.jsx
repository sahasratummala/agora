import { useState } from 'react';

const messages = [
  { from: 'them', text: 'this was such a good well written essay you should be so proud of yourself and i\'m very proud of you 😊', react: '❤️' },
  { from: 'me', text: 'thank you venne!!', react: '❤️' },
  { from: 'them', text: 'it takes a lot of courage to be loud and well spoken about this kind of stuff nowadays and i\'m so proud to be related to someone who does' },
  { from: 'them', text: 'i hope u know that!!!', react: '❤️' },
  { from: 'them', text: 'ilym' },
  { from: 'me', text: 'i\'m so proud to be related to you too', react: '❤️' },
  { from: 'me', text: 'esp when you\'re arguing with a random thata about Serena Williams and DEI' },
  { from: 'them', text: 'HAHA what can i say it runs in the family clearly', react: '❤️' },
];

export default function VennelaChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="gc-teaser" onClick={() => setOpen(true)}>
        <div className="gc-avatar-circle">V</div>
        <div className="gc-teaser-body">
          <span className="gc-title">vennela</span>
          <span className="gc-preview">this was such a good well written essay...</span>
        </div>
        <span className="gc-open-hint">read ›</span>
      </button>

      {open && (
        <div className="gc-modal-overlay" onClick={() => setOpen(false)}>
          <div className="gc-modal" onClick={e => e.stopPropagation()}>
            <div className="gc-modal-header">
              <div className="gc-avatar-circle">V</div>
              <div className="gc-header-text">
                <span className="gc-title">vennela</span>
                <span className="gc-members">vennelamallampati</span>
              </div>
              <button className="gc-close-btn" onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="gc-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`gc-row gc-row-${msg.from}`}>
                  <div className={`gc-bubble gc-bubble-${msg.from}`}>{msg.text}</div>
                  {msg.react && <span className="gc-react">{msg.react}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
