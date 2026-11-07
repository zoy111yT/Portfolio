const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
const container = document.getElementById('map-holder');
const infoPanel = document.getElementById('info-panel');
const summary = document.getElementById('mood-summary');
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const toggle = document.getElementById('animation-toggle');
const zoneButtons = Array.from(document.querySelectorAll('.zone-button'));
const schedule = [
  { date:"20 Nov", mainMood:"good", path:["DORM","SCHOOL","DORM"], locationMoods: { DORM: "good", SCHOOL: "good" } },
  { date:"21 Nov", mainMood:"neutral", path:["DORM","STATION","DORM"], locationMoods: { DORM: "neutral", STATION: "neutral" } },
  { date:"22 Nov", mainMood:"neutral", path:["DORM"], locationMoods: { DORM: "neutral" } },
  { date:"23 Nov", mainMood:"neutral", path:["DORM"], locationMoods: { DORM: "neutral" } },
  { date:"24 Nov", mainMood:"anxious", path:["DORM","CITY","DORM"], locationMoods: { DORM: "neutral", CITY: "anxious" } },
  { date:"25 Nov", mainMood:"good", path:["DORM","SCHOOL","DORM"], locationMoods: { DORM: "good", SCHOOL: "good" } },
  { date:"26 Nov", mainMood:"good", path:["DORM","SCHOOL","DORM"], locationMoods: { DORM: "good", SCHOOL: "good" } }
];

let currentIndex = 0;

const P = { 
  DORM: [0.75, 0.35], 
  SCHOOL: [0.45, 0.35], 
  CITY: [0.20, 0.80], 
  STATION: [0.15, 0.60] 
};

let mouse = { x: null, y: null, activeZone: null };
let particles = [];


class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.vx = (Math.random() - 0.5) * 0.7;
    this.vy = (Math.random() - 0.5) * 0.7;
    this.color = {r: 180, g: 180, b: 180};
    this.alpha = 0.15;
    this.angle = Math.random() * Math.PI * 2;
  }
  update() {
    if (mouse.activeZone) {
      const zone = mouse.activeZone;
      const tx = P[zone.name][0] * canvas.width;
      const ty = P[zone.name][1] * canvas.height;
      const dx = tx - this.x;
      const dy = ty - this.y;
      const dist = Math.hypot(dx, dy);

      if (dist < 180) { 
        const force = (180 - dist) / 180;
        this.x += dx * 0.08 + Math.cos(this.angle) * 1.2;
        this.y += dy * 0.08 + Math.sin(this.angle) * 1.2;
        this.angle += 0.04;

        const locMood = schedule[currentIndex].locationMoods[zone.name] || "neutral";
        let target = {r: 167, g: 215, b: 197}; 
        if (locMood === 'good') target = {r: 255, g: 154, b: 118};
        else if (locMood === 'anxious') target = {r: 125, g: 155, b: 185};
        
        this.color.r += (target.r - this.color.r) * 0.1;
        this.color.g += (target.g - this.color.g) * 0.1;
        this.color.b += (target.b - this.color.b) * 0.1;
        this.alpha = 0.7 * force;
      } else {
        this.x += this.vx; this.y += this.vy;
        this.alpha += (0.1 - this.alpha) * 0.05;
        this.color.r += (180 - this.color.r) * 0.05;
      }
    } else {
      this.x += this.vx; this.y += this.vy;
      this.alpha += (0.15 - this.alpha) * 0.05;
      this.color.r += (180 - this.color.r) * 0.05;
    }
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw() {
    ctx.fillStyle = `rgba(${this.color.r},${this.color.g},${this.color.b},${this.alpha})`;
    ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
  }
}


let selectedZone = null;
let paused = motionPreference.matches;
let visible = false;
let frameId = null;
const days = document.getElementById('days-container');

function readState() {
  const params = new URL(location.href).searchParams;
  const day = Number(params.get('day'));
  currentIndex = Number.isInteger(day) && day >= 1 && day <= schedule.length ? day - 1 : 0;
  selectedZone = Object.hasOwn(P, params.get('zone')) ? params.get('zone') : null;
  mouse.activeZone = selectedZone ? {name: selectedZone} : null;
}
function saveState() {
  const url = new URL(location.href);
  url.searchParams.set('day', currentIndex + 1);
  if (selectedZone) url.searchParams.set('zone', selectedZone);
  else url.searchParams.delete('zone');
  history.pushState(null, '', url);
}
function updateInfo() {
  const day = schedule[currentIndex];
  summary.textContent = `${day.date}: ${day.mainMood} mood. Route: ${day.path.join(' → ')}.`;
  Array.from(days.children).forEach((button, i) => {
    button.classList.toggle('active', i === currentIndex);
    button.setAttribute('aria-pressed', String(i === currentIndex));
  });
  zoneButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.zone === selectedZone)));
  const zone = mouse.activeZone?.name;
  infoPanel.style.display = zone ? 'block' : 'none';
  if (zone) {
    const mood = day.locationMoods[zone] || 'neutral';
    document.getElementById('zone-name').textContent = zone;
    document.getElementById('location-mood').textContent = `Mood: ${mood.toUpperCase()}`;
    document.getElementById('zone-story').textContent = `On this day, visiting ${zone} felt ${mood}.`;
  }
  drawFrame(false);
}

schedule.forEach((day, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'day-card';
  button.setAttribute('aria-controls', 'map-holder mood-summary');
  const mainColor = day.mainMood === 'good' ? 'var(--color-good)' : day.mainMood === 'anxious' ? 'var(--color-anxious)' : 'var(--color-neutral)';
  button.innerHTML = `<span class="day-date">${day.date}</span><span class="day-main-mood">Daily path: ${day.path.join(' → ')}</span><span class="mood-tag" style="background:${mainColor}">${day.mainMood}</span>`;
  button.addEventListener('click', () => {
    currentIndex = index;
    mouse.activeZone = selectedZone ? {name: selectedZone} : null;
    updateInfo();
    saveState();
  });
  days.appendChild(button);
});
zoneButtons.forEach(button => {
  const preview = () => { mouse.activeZone = {name: button.dataset.zone}; updateInfo(); };
  button.addEventListener('pointerenter', preview);
  button.addEventListener('focus', preview);
  button.addEventListener('click', () => {
    selectedZone = button.dataset.zone;
    mouse.activeZone = {name: selectedZone};
    updateInfo();
    saveState();
  });
  const restoreSelection = () => {
    mouse.activeZone = selectedZone ? {name: selectedZone} : null;
    updateInfo();
  };
  button.addEventListener('pointerleave', restoreSelection);
  button.addEventListener('blur', restoreSelection);
});

function drawFrame(advance) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const path = schedule[currentIndex].path;
  if (path.length >= 2) {
    ctx.strokeStyle = '#b1b9ad'; ctx.setLineDash([5, 8]); ctx.lineWidth = 1.5;
    ctx.beginPath();
    path.forEach((name, i) => {
      const x = P[name][0] * canvas.width, y = P[name][1] * canvas.height;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke(); ctx.setLineDash([]);
  }
  particles.forEach(particle => { if (advance) particle.update(); particle.draw(); });
}
function tick() {
  frameId = null;
  drawFrame(true);
  syncAnimation();
}
function syncAnimation() {
  const running = !paused && visible && !document.hidden;
  if (running && frameId === null) frameId = requestAnimationFrame(tick);
  if (!running && frameId !== null) { cancelAnimationFrame(frameId); frameId = null; }
  toggle.textContent = paused ? 'Resume animation' : 'Pause animation';
  toggle.setAttribute('aria-pressed', String(paused));
}
toggle.addEventListener('click', () => { paused = !paused; syncAnimation(); });
motionPreference.addEventListener('change', event => {
  if (event.matches) paused = true;
  syncAnimation();
});
document.addEventListener('visibilitychange', syncAnimation);
new IntersectionObserver(entries => { visible = entries[0].isIntersecting; syncAnimation(); }).observe(container);
new ResizeObserver(entries => {
  const {width, height} = entries[0].contentRect;
  canvas.width = Math.round(width);
  canvas.height = Math.round(height);
  particles = Array.from({length: width < 600 ? 450 : 1000}, () => new Particle());
  drawFrame(false);
}).observe(container);
window.addEventListener('popstate', () => { readState(); updateInfo(); });
readState(); updateInfo(); syncAnimation();
