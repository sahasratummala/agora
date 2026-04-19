import { useEffect, useRef } from 'react';

export default function ActBreakPanel({ title = 'high school.', subtitle = '— part two —' }) {
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
    <section className="panel act-break visible" ref={panelRef}>
      <div>
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
    </section>
  );
}
