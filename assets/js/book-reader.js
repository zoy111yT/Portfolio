const bookPages = [
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-01.webp?v=b8caab395cac",
    "alt": "Ghost in the Machine zine cover",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-02.webp?v=423d402ac2fc",
    "alt": "Ghost in the Machine zine page 2",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-03.webp?v=d4491b363ff1",
    "alt": "Ghost in the Machine zine page 3",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-04.webp?v=8561f9311c61",
    "alt": "Ghost in the Machine zine page 4",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-05.webp?v=9a9413eeb517",
    "alt": "Ghost in the Machine zine page 5",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-06.webp?v=ae2837bcc54e",
    "alt": "Ghost in the Machine zine page 6",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-07.webp?v=374ada071a83",
    "alt": "Ghost in the Machine zine page 7",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-08.webp?v=135484443b7f",
    "alt": "Ghost in the Machine zine page 8",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-09.webp?v=702eef893fcb",
    "alt": "Ghost in the Machine zine page 9",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-10.webp?v=2bc3e1d653ab",
    "alt": "Ghost in the Machine zine page 10",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-11.webp?v=477d546fe334",
    "alt": "Ghost in the Machine zine page 11",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-12.webp?v=f88dac062bdc",
    "alt": "Ghost in the Machine zine page 12",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-13.webp?v=29e3b7a407e4",
    "alt": "Ghost in the Machine zine page 13",
    "width": 437,
    "height": 612
  },
  {
    "src": "https://zoy111yt.github.io/Portfolio/assets/images/book-reader/page-14.webp?v=7bfac2eb000f",
    "alt": "Ghost in the Machine zine page 14",
    "width": 437,
    "height": 612
  }
];
let image = document.getElementById('book-image');
const previous = document.getElementById('book-previous');
const next = document.getElementById('book-next');
const status = document.getElementById('book-status');
const message = document.getElementById('book-message');
const retry = document.getElementById('book-retry');
const reader = document.querySelector('.book-reader');
const original = document.getElementById('book-original');
const cache = new Map();
let currentPage = -1;
let pending = false;
let failedPage = 0;
const requested = Number(new URL(location.href).searchParams.get('page'));
const initialPage = Number.isInteger(requested) && requested >= 1 && requested <= bookPages.length ? requested - 1 : 0;

function preload(index, priority = 'low', refresh = false) {
  if (refresh) cache.delete(index);
  if (cache.has(index)) {
    cache.get(index).image.fetchPriority = priority;
    return cache.get(index).promise;
  }
  const data = bookPages[index];
  const loaded = new Image();
  loaded.alt = data.alt;
  loaded.width = data.width;
  loaded.height = data.height;
  loaded.decoding = 'async';
  loaded.fetchPriority = priority;
  const promise = new Promise((resolve, reject) => {
    loaded.onload = async () => {
      try { if (loaded.decode) await loaded.decode(); resolve(loaded); }
      catch (error) { reject(error); }
    };
    loaded.onerror = () => reject(new Error('Page image failed to load'));
    const url = new URL(data.src);
    if (refresh) url.searchParams.set('retry', Date.now());
    loaded.src = url.href;
  });
  cache.set(index, { image: loaded, promise });
  promise.catch(() => { if (cache.get(index)?.promise === promise) cache.delete(index); });
  return promise;
}

function updateControls() {
  previous.disabled = pending || currentPage <= 0;
  next.disabled = pending || currentPage < 0 || currentPage >= bookPages.length - 1;
  reader.setAttribute('aria-busy', String(pending));
}

async function showPage(index, updateUrl = false) {
  if (pending || index < 0 || index >= bookPages.length) return;
  pending = true;
  failedPage = index;
  retry.hidden = true;
  message.textContent = `Loading page ${index + 1}…`;
  if (currentPage < 0) { image.hidden = true; status.textContent = 'Loading book…'; }
  updateControls();
  try {
    let loaded;
    try { loaded = await preload(index, 'high'); }
    catch { loaded = await preload(index, 'high', true); }
    loaded.id = 'book-image';
    loaded.setAttribute('aria-describedby', 'book-status');
    loaded.hidden = false;
    if (loaded !== image) { image.replaceWith(loaded); image = loaded; }
    currentPage = index;
    original.href = `https://zoy111yt.github.io/Portfolio/assets/images/project01/zine01-${String(index + 1).padStart(2, '0')}.jpg`;
    status.textContent = `Page ${index + 1} of ${bookPages.length}`;
    message.textContent = '';
    if (updateUrl || initialPage !== 0) {
      const url = new URL(location.href);
      url.searchParams.set('page', index + 1);
      history.replaceState(null, '', url);
    }
    for (const neighbor of [index - 1, index + 1]) {
      if (neighbor >= 0 && neighbor < bookPages.length) preload(neighbor).catch(() => {});
    }
  } catch {
    message.textContent = `Page ${index + 1} could not load. Please try again.`;
    if (currentPage < 0) status.textContent = 'Book not loaded';
    retry.hidden = false;
  } finally {
    pending = false;
    updateControls();
  }
}
previous.addEventListener('click', async () => {
  const focused = document.activeElement === previous;
  await showPage(currentPage - 1, true);
  if (focused) (!previous.disabled ? previous : !next.disabled ? next : retry).focus();
});
next.addEventListener('click', async () => {
  const focused = document.activeElement === next;
  await showPage(currentPage + 1, true);
  if (focused) (!next.disabled ? next : !previous.disabled ? previous : retry).focus();
});
retry.addEventListener('click', async () => {
  cache.delete(failedPage);
  await showPage(failedPage, true);
  (!retry.hidden ? retry : !next.disabled ? next : previous).focus();
});
showPage(initialPage);
