import { useEffect, useRef, useState } from 'react';
import FlightPath from './FlightPath';

export default function PhotoPanel({ id, src, theme, stamp, caption, note, page, position = 'center', decoration }) {
  const panelRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(src);
  const placeholderSrc = '/photo-placeholder.svg';

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
    <section className={`panel photo-panel theme-${theme} visible`} ref={panelRef}>
      <div className="panel-content">
        <div className="photo-half">
          <div className="polaroid">
            <img
              className="photo-image"
              src={imgSrc}
              alt={`Photo ${id}`}
              loading="lazy"
              style={{ objectPosition: position }}
              onError={() => {
                if (imgSrc !== placeholderSrc) {
                  setImgSrc(placeholderSrc);
                }
              }}
            />
            {decoration === 'flight' && <FlightPath />}
          </div>
        </div>
        <div className="text-half">
          <div className={`stamp ${theme}`}>{stamp}</div>
          <p className="caption" dangerouslySetInnerHTML={{ __html: caption }} />
          {note && <p className="note">{note}</p>}
          <div className="page-number">{page}</div>
        </div>
      </div>
    </section>
  );
}
