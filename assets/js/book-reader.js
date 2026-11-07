const bookPages = [
  {src: '../assets/images/project01/zine01-01.jpg', alt: 'Ghost in the Machine zine cover'},
  {src: '../assets/images/project01/zine01-02.jpg', alt: 'Project overview and introduction to conditional design'}
];
const image = document.getElementById('book-image');
const previous = document.getElementById('book-previous');
const next = document.getElementById('book-next');
const status = document.getElementById('book-status');
const initialPage = Number(new URL(location.href).searchParams.get('page'));
let currentPage = Number.isInteger(initialPage) && initialPage >= 1 && initialPage <= bookPages.length ? initialPage - 1 : 0;
function showPage(updateUrl = false) {
  image.src = bookPages[currentPage].src;
  image.alt = bookPages[currentPage].alt;
  status.textContent = `Page ${currentPage + 1} of ${bookPages.length}`;
  previous.disabled = currentPage === 0;
  next.disabled = currentPage === bookPages.length - 1;
  if (updateUrl) {
    const url = new URL(location.href);
    url.searchParams.set('page', currentPage + 1);
    history.replaceState(null, '', url);
  }
}
previous.addEventListener('click', () => {
  currentPage -= 1; showPage(true);
  if (previous.disabled) next.focus();
});
next.addEventListener('click', () => {
  currentPage += 1; showPage(true);
  if (next.disabled) previous.focus();
});
showPage();
