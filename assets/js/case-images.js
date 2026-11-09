// Keep case-study images usable in embedded viewers and after transient failures.
for (const image of document.querySelectorAll('.case-study img')) {
  const source = image.src;
  const figure = image.closest('figure');
  let attempts = 0;
  let timer;
  let recovery;
  function reload() {
    const url = new URL(source);
    url.searchParams.set('retry', `${attempts}-${Date.now()}`);
    image.src = url.href;
  }
  function showRecovery() {
    if (recovery) return;
    recovery = document.createElement('p');
    recovery.className = 'image-recovery';
    const status = document.createElement('span');
    status.setAttribute('role', 'status');
    status.textContent = 'This image could not load.';
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Reload image';
    button.addEventListener('click', () => {
      attempts = 0;
      button.disabled = true;
      status.textContent = 'Loading image…';
      reload();
    });
    recovery.append(status, button);
    figure.append(recovery);
  }
  function retry() {
    clearTimeout(timer);
    if (attempts >= 2) {
      showRecovery();
      const button = recovery.querySelector('button');
      button.disabled = false;
      recovery.querySelector('[role="status"]').textContent = 'This image could not load.';
      return;
    }
    attempts += 1;
    timer = setTimeout(reload, attempts * 600);
  }
  image.addEventListener('error', retry);
  image.addEventListener('load', () => {
    clearTimeout(timer);
    attempts = 0;
    if (recovery) { recovery.remove(); recovery = undefined; }
  });
  if (image.complete && image.naturalWidth === 0) retry();
}
