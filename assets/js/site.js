const ticker = document.querySelector('.ticker');
const tickerToggle = document.querySelector('.ticker-toggle');
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
if (ticker && tickerToggle) {
  let paused = motionPreference.matches;
  function updateTicker() {
    ticker.classList.toggle('is-paused', paused);
    tickerToggle.setAttribute('aria-pressed', String(paused));
    tickerToggle.disabled = motionPreference.matches;
    tickerToggle.textContent = motionPreference.matches ? 'Motion reduced' : paused ? 'Resume moving text' : 'Pause moving text';
  }
  tickerToggle.addEventListener('click', () => { paused = !paused; updateTicker(); });
  motionPreference.addEventListener('change', event => {
    if (event.matches) { paused = true; updateTicker(); }
  });
  updateTicker();
}
