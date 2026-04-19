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
        <h1 className="headline">agora</h1>
        <p className="subtitle">find your people. not your mirror.
        </p>
        <div className="byline">By Sahasra Tummala</div>
        <button className="begin-btn" onClick={handleNext}>scroll →</button>
      </div>
    </section>
  );
}
