export default function OpeningPanel() {
  function handleNext() {
    const container = document.querySelector('.scroll-container');
    if (container) {
      container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
  }

  return (
    <section className="panel opening visible">
      <div>
        <h1 className="headline">
          <span className="headline-tooltip-wrap">
            agora
            <span className="headline-tooltip">
              <span className="tooltip-word">a·go·ra</span>
              <span className="tooltip-pos">noun</span>
              a public open space used for assemblies and markets.
            </span>
          </span>
        </h1>
        <p className="subtitle">find your people. not your mirror.
        </p>
        <div className="byline">By Sahasra Tummala</div>
        <button className="begin-btn" onClick={handleNext}>scroll →</button>
      </div>
    </section>
  );
}
