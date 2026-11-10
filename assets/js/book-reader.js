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

// Decode every visible page before replacing a spread, so a failed request never
// leaves the page count describing different artwork.
const reader = document.querySelector('.book-reader');
const spread = document.getElementById('book-spread');
const previous = document.getElementById('book-previous');
const next = document.getElementById('book-next');
const status = document.getElementById('book-status');
const message = document.getElementById('book-message');
const retry = document.getElementById('book-retry');
const originals = document.getElementById('book-originals');
const indexNav = document.querySelector('.book-index');
const portrait = matchMedia('(max-width: 640px)');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const cache = new Map();
let currentPage = -1;
let visiblePages = [];
let pending = false;
let failedPage = 0;
let layoutChanged = false;
const requested = Number(new URL(location.href).searchParams.get('page'));
const initialPage = Number.isInteger(requested) && requested >= 1 && requested <= bookPages.length
  ? requested - 1 : portrait.matches ? 0 : 1;

function pagesFor(page) {
  if (portrait.matches || page === 0 || page === bookPages.length - 1) return [page];
  const left = page % 2 ? page : page - 1;
  return [left, left + 1];
}
function preload(page, refresh = false) {
  if (refresh) cache.delete(page);
  if (cache.has(page)) return cache.get(page);
  const data = bookPages[page];
  const promise = new Promise((resolve, reject) => {
    const image = new Image(data.width, data.height);
    image.alt = data.alt;
    image.decoding = 'async';
    let timer = setTimeout(() => reject(new Error('Page request timed out')), 12000);
    image.onload = async () => {
      try { await image.decode(); clearTimeout(timer); resolve(image); }
      catch (error) { clearTimeout(timer); reject(error); }
    };
    image.onerror = () => { clearTimeout(timer); reject(new Error('Page unavailable')); };
    const url = new URL(data.src);
    if (refresh) url.searchParams.set('retry', Date.now());
    image.src = url.href;
  });
  cache.set(page, promise);
  promise.catch(() => { if (cache.get(page) === promise) cache.delete(page); });
  return promise;
}
function updateControls() {
  previous.disabled = pending || currentPage <= 0;
  next.disabled = pending || currentPage < 0 || visiblePages.at(-1) >= bookPages.length - 1;
  for (const button of indexNav.children) button.disabled = pending;
  reader.setAttribute('aria-busy', String(pending));
}
function leaf(image, page) {
  const node = document.createElement('div');
  node.className = 'book-leaf';
  node.dataset.page = page + 1;
  node.append(image.cloneNode());
  return node;
}
async function turn(sheets, direction, animate) {
  const old = spread.querySelector('.book-sheets');
  const oldLeaves = [...old.children];
  const newLeaves = [...sheets.children];
  old.replaceWith(sheets);
  if (!animate || reducedMotion.matches) return;
  // A lightweight two-sided leaf, with no external viewer dependency.
  if (oldLeaves.length === 2 && newLeaves.length === 2 && !portrait.matches) {
    const forward = direction > 0;
    const stationary = oldLeaves[forward ? 0 : 1].cloneNode(true);
    Object.assign(stationary.style, { position:'absolute', top:'0', left:forward ? '0' : '50%', height:'100%', zIndex:'1' });
    const turning = document.createElement('div');
    turning.className = `book-turn ${forward ? 'forward' : 'backward'}`;
    for (const node of [oldLeaves[forward ? 1 : 0], newLeaves[forward ? 0 : 1]]) {
      const face = document.createElement('div');
      face.append(node.querySelector('img').cloneNode());
      turning.append(face);
    }
    spread.append(stationary, turning);
    try { await turning.animate([{ transform:'rotateY(0deg)' }, { transform:`rotateY(${forward ? -180 : 180}deg)` }], { duration:520, easing:'cubic-bezier(.3,.05,.25,1)', fill:'forwards' }).finished; }
    finally { turning.remove(); stationary.remove(); }
  } else {
    await sheets.animate([{ opacity:.5, transform:`translateX(${direction * 8}px)` }, { opacity:1, transform:'translateX(0)' }], { duration:240, easing:'ease-out' }).finished;
  }
}
async function showPage(page, updateUrl = false, animate = true) {
  if (pending || page < 0 || page >= bookPages.length) return;
  pending = true;
  failedPage = page;
  retry.hidden = true;
  message.textContent = 'Opening pages…';
  updateControls();
  const pages = pagesFor(page);
  try {
    const images = await Promise.all(pages.map(async n => {
      try { return await preload(n); } catch { return await preload(n, true); }
    }));
    const sheets = document.createElement('div');
    sheets.className = 'book-sheets';
    images.forEach((image, i) => sheets.append(leaf(image, pages[i])));
    const canTurn = animate && visiblePages.length > 0 && pages.length === visiblePages.length;
    spread.classList.toggle('is-single', pages.length === 1);
    await turn(sheets, page >= currentPage ? 1 : -1, canTurn);
    currentPage = page;
    visiblePages = pages;
    const label = pages.length === 1 ? `Page ${pages[0] + 1} of 14` : `Pages ${pages[0] + 1}–${pages[1] + 1} of 14`;
    status.textContent = label;
    spread.setAttribute('aria-label', label);
    for (const button of indexNav.children) {
      if (pages.includes(Number(button.dataset.page))) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    }
    originals.replaceChildren(...pages.map(n => {
      const link = document.createElement('a');
      link.href = `https://zoy111yt.github.io/Portfolio/assets/images/project01/zine01-${String(n + 1).padStart(2, '0')}.jpg`;
      link.textContent = pages.length === 1 ? 'View full-size ↗' : `Page ${n + 1} ↗`;
      link.setAttribute('aria-label', `View page ${n + 1} full-size`);
      link.target = '_blank'; link.rel = 'noopener';
      return link;
    }));
    message.textContent = '';
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set('page', page + 1);
      history.replaceState(null, '', url);
    }
    for (const n of [pages[0] - 1, pages.at(-1) + 1]) {
      if (n >= 0 && n < bookPages.length) preload(n).catch(() => {});
    }
  } catch {
    message.textContent = 'These pages could not load. Your place has been kept.';
    if (currentPage < 0) status.textContent = 'Book not loaded';
    retry.hidden = false;
  } finally {
    pending = false;
    updateControls();
    if (layoutChanged) {
      layoutChanged = false;
      showPage(currentPage < 0 ? initialPage : currentPage, false, false);
    }
  }
}
function move(direction) {
  if (pending) return;
  const target = direction > 0 ? visiblePages.at(-1) + 1 : visiblePages[0] - 1;
  if (!Number.isInteger(target) || target < 0 || target >= bookPages.length) return;
  const focused = document.activeElement;
  showPage(target, true).then(() => {
    if (focused instanceof HTMLButtonElement && focused.disabled) spread.focus({ preventScroll:true });
  });
}
bookPages.forEach((_, n) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.page = n;
  button.textContent = String(n + 1).padStart(2, '0');
  button.setAttribute('aria-label', n === 0 ? 'Front cover' : n === 13 ? 'Back cover' : `Go to page ${n + 1}`);
  button.setAttribute('aria-controls', 'book-spread');
  button.addEventListener('click', () => showPage(n, true));
  indexNav.append(button);
});
previous.addEventListener('click', () => move(-1));
next.addEventListener('click', () => move(1));
retry.addEventListener('click', async () => {
  for (const n of pagesFor(failedPage)) cache.delete(n);
  await showPage(failedPage, true);
  if (retry.hidden) spread.focus({ preventScroll:true });
});
reader.addEventListener('keydown', event => {
  if (!['ArrowLeft','ArrowRight'].includes(event.key) || event.altKey || event.ctrlKey || event.metaKey) return;
  event.preventDefault();
  move(event.key === 'ArrowRight' ? 1 : -1);
});
let touchStart = null;
spread.addEventListener('touchstart', event => {
  touchStart = event.touches.length === 1 ? { x:event.touches[0].clientX, y:event.touches[0].clientY } : null;
}, { passive:true });
spread.addEventListener('touchend', event => {
  if (!touchStart || !event.changedTouches.length) return;
  const dx = event.changedTouches[0].clientX - touchStart.x;
  const dy = event.changedTouches[0].clientY - touchStart.y;
  touchStart = null;
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1);
}, { passive:true });
spread.addEventListener('touchcancel', () => { touchStart = null; }, { passive:true });
portrait.addEventListener('change', () => {
  if (pending) layoutChanged = true;
  else showPage(currentPage < 0 ? initialPage : currentPage, false, false);
});
showPage(initialPage, false, false);
