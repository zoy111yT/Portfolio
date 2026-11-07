const dialog = document.getElementById('overlay');
const detailImage = document.getElementById('overlay-img');
const note = document.getElementById('overlay-note');
const points = Array.from(document.querySelectorAll('.map-point'));
let opener;
points.forEach((point, index) => {
  point.addEventListener('click', () => {
    opener = point;
    detailImage.src = point.dataset.image;
    detailImage.alt = 'City photograph — coming soon';
    note.textContent = point.dataset.note;
    dialog.showModal();
    const url = new URL(location.href);
    url.searchParams.set('detail', index + 1);
    history.replaceState(null, '', url);
  });
});
document.getElementById('close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    // The close button is the only focusable control in this detail viewer.
    event.preventDefault();
    document.getElementById('close').focus();
  }
});
dialog.addEventListener('close', () => {
  const url = new URL(location.href);
  url.searchParams.delete('detail');
  history.replaceState(null, '', url);
  if (opener) opener.focus();
});
const detail = Number(new URL(location.href).searchParams.get('detail'));
if (Number.isInteger(detail) && detail >= 1 && detail <= points.length) points[detail - 1].click();
