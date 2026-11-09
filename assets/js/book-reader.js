const bookPages = [
  {
    "src": "../assets/images/project01/zine01-01.jpg",
    "alt": "Ghost in the Machine zine cover",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-02.jpg",
    "alt": "Ghost in the Machine zine page 2",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-03.jpg",
    "alt": "Ghost in the Machine zine page 3",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-04.jpg",
    "alt": "Ghost in the Machine zine page 4",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-05.jpg",
    "alt": "Ghost in the Machine zine page 5",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-06.jpg",
    "alt": "Ghost in the Machine zine page 6",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-07.jpg",
    "alt": "Ghost in the Machine zine page 7",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-08.jpg",
    "alt": "Ghost in the Machine zine page 8",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-09.jpg",
    "alt": "Ghost in the Machine zine page 9",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-10.jpg",
    "alt": "Ghost in the Machine zine page 10",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-11.jpg",
    "alt": "Ghost in the Machine zine page 11",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-12.jpg",
    "alt": "Ghost in the Machine zine page 12",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-13.jpg",
    "alt": "Ghost in the Machine zine page 13",
    "width": 437,
    "height": 612
  },
  {
    "src": "../assets/images/project01/zine01-14.jpg",
    "alt": "Ghost in the Machine zine page 14",
    "width": 437,
    "height": 612
  }
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
  image.width = bookPages[currentPage].width;
  image.height = bookPages[currentPage].height;
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
