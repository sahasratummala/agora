import { useEffect, useRef } from 'react';

export default function ClosingPanel() {
  const panelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.35,
    });

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => {
      if (panelRef.current) {
        observer.unobserve(panelRef.current);
      }
    };
  }, []);

  return (
    <section className="panel closing visible" ref={panelRef}>
      <div className="closing-content">
        <div className="stamp orange">CALL TO ACTION</div>
        <h2 className="question">who is in your <span className="highlight">agora</span>?</h2>
        <blockquote className="closing-quote">
          "echo chambers boost social polarization and extreme political views."
          <cite className="closing-cite">— Nature</cite>
        </blockquote>
        <p className="body-copy">the antidote to echo chambers isn't complicated. every person in this essay pushed me to think differently about politics, faith, and what it means to build a life. not because we agreed, but because we were willing to listen and discuss.</p>
        <p className="body-copy">an echo chamber isn't built by accident, and neither is a life like this one. talk to new people. hear them out. you'll be surprised by what you become and what you learn.</p>
        <p className="cta-note">— Sahasra Tummala</p>
      </div>
    </section>
  );
}
