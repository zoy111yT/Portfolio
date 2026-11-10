const schedule = [
  { date:"20 Nov", mainMood:"good", path:["DORM","SCHOOL","DORM"], locationMoods: { DORM: "good", SCHOOL: "good" } },
  { date:"21 Nov", mainMood:"neutral", path:["DORM","STATION","DORM"], locationMoods: { DORM: "neutral", STATION: "neutral" } },
  { date:"22 Nov", mainMood:"neutral", path:["DORM"], locationMoods: { DORM: "neutral" } },
  { date:"23 Nov", mainMood:"neutral", path:["DORM"], locationMoods: { DORM: "neutral" } },
  { date:"24 Nov", mainMood:"anxious", path:["DORM","CITY","DORM"], locationMoods: { DORM: "neutral", CITY: "anxious" } },
  { date:"25 Nov", mainMood:"good", path:["DORM","SCHOOL","DORM"], locationMoods: { DORM: "good", SCHOOL: "good" } },
  { date:"26 Nov", mainMood:"good", path:["DORM","SCHOOL","DORM"], locationMoods: { DORM: "good", SCHOOL: "good" } }
];


const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
const container = document.getElementById('map-holder');
const infoPanel = document.getElementById('info-panel');
const summary = document.getElementById('mood-summary');
const toggle = document.getElementById('animation-toggle');
const days = document.getElementById('days-container');
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const zoneButtons = [...document.querySelectorAll('.zone-button')];
const P = { SCHOOL:[.15,.18], DORM:[.80,.12], STATION:[.56,.40], CITY:[.51,.78] };
const dormStation = [P.DORM,[.73,.15],[.67,.20],[.65,.28],[.60,.33],P.STATION];
const stationCity = [P.STATION,[.53,.48],[.55,.59],[.52,.68],P.CITY];
const citySchool = [P.CITY,[.45,.65],[.41,.54],[.34,.48],[.25,.42],[.21,.29],P.SCHOOL];
const wholeRoute = [...dormStation,...stationCity.slice(1),...citySchool.slice(1)];
const colors = { good:'#409e2c', neutral:'#a3a3a0', anxious:'#fa210f' };
let currentIndex = 4;
let selectedZone = null;
let previewZone = null;
let paused = motionPreference.matches;
let visible = false;
let frameId = null;
let width = 0, height = 0;
let phase = 0;
let lastTick = null;
let randomSeed = 24;
function random() { randomSeed = (randomSeed * 1664525 + 1013904223) >>> 0; return randomSeed / 4294967296; }
// Fixed normalized positions keep the composition and controls aligned at any size.
const particles = Array.from({length:1100}, (_, i) => {
  let x,y;
  if (i < 900) {
    const segment = Math.floor(random() * (wholeRoute.length - 1));
    const t = random();
    x = wholeRoute[segment][0]*(1-t)+wholeRoute[segment+1][0]*t;
    y = wholeRoute[segment][1]*(1-t)+wholeRoute[segment+1][1]*t;
    const angle = random()*Math.PI*2, radius = Math.pow(random(),1.8)*.13;
    x += Math.cos(angle)*radius; y += Math.sin(angle)*radius;
  } else { x=random(); y=random(); }
  return {x,y,size:i%17===0?9+random()*9:i%7===0?4+random()*5:.7+random()*2.3,phase:random()*Math.PI*2};
});
function routeForDay() {
  const path = schedule[currentIndex].path;
  if (path.includes('SCHOOL')) return wholeRoute;
  if (path.includes('CITY')) return [...dormStation,...stationCity.slice(1)];
  if (path.includes('STATION')) return dormStation;
  return [P.DORM];
}
function readState() {
  const params = new URL(location.href).searchParams;
  const day = Number(params.get('day'));
  currentIndex = Number.isInteger(day) && day>=1 && day<=7 ? day-1 : 4;
  selectedZone = Object.hasOwn(P,params.get('zone')) ? params.get('zone') : null;
  previewZone = null;
}
function saveState() {
  const url = new URL(location.href);
  url.searchParams.set('day',currentIndex+1);
  if(selectedZone)url.searchParams.set('zone',selectedZone); else url.searchParams.delete('zone');
  history.pushState(null,'',url);
}
function updateInfo() {
  const day=schedule[currentIndex];
  summary.textContent=`${day.date}: ${day.mainMood} mood. Route: ${day.path.join(' → ')}.`;
  document.getElementById('selected-date').textContent=day.date.toUpperCase();
  document.getElementById('selected-route').textContent=day.path.join(' → ');
  const mood=document.getElementById('selected-mood');
  mood.textContent=day.mainMood.toUpperCase();mood.dataset.mood=day.mainMood;mood.style.setProperty('--mood',colors[day.mainMood]);
  [...days.children].forEach((b,i)=>{b.classList.toggle('active',i===currentIndex);b.setAttribute('aria-pressed',String(i===currentIndex));});
  zoneButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.zone===selectedZone)));
  document.querySelectorAll('.mood-overprint .large').forEach(node=>{node.textContent=day.mainMood;});
  const zone=previewZone||selectedZone;
  infoPanel.hidden=!zone;
  if(zone){
    const mood=day.locationMoods[zone];
    document.getElementById('zone-name').textContent=zone;
    document.getElementById('location-mood').textContent=mood?`Mood: ${mood.toUpperCase()}`:'No visit recorded';
    document.getElementById('zone-story').textContent=mood?`${day.date} / ${zone} felt ${mood}.`:`${zone} was not part of the recorded route on ${day.date}.`;
  }
  drawFrame();
}
schedule.forEach((day,index)=>{
  const button=document.createElement('button');button.type='button';button.className='day-card';
  button.style.setProperty('--mood',colors[day.mainMood]);button.setAttribute('aria-controls','map-holder mood-summary');
  const date=document.createElement('span');date.className='day-date';date.textContent=day.date.toUpperCase();
  const mood=document.createElement('span');mood.className='day-main-mood';mood.textContent=day.mainMood;
  button.append(date,mood);
  button.addEventListener('click',()=>{currentIndex=index;previewZone=null;updateInfo();saveState();});days.append(button);
});
zoneButtons.forEach(button=>{
  const zone=button.dataset.zone;
  button.style.left=`${P[zone][0]*100}%`;button.style.top=`${P[zone][1]*100}%`;
  const preview=()=>{previewZone=zone;updateInfo();};
  const restore=()=>{previewZone=null;updateInfo();};
  button.addEventListener('pointerenter',preview);button.addEventListener('focus',preview);
  button.addEventListener('pointerleave',restore);button.addEventListener('blur',restore);
  button.addEventListener('click',()=>{selectedZone=selectedZone===zone?null:zone;previewZone=null;updateInfo();saveState();});
});
container.addEventListener('keydown',event=>{if(event.key==='Escape'){selectedZone=null;previewZone=null;updateInfo();saveState();}});
function strokeRoute(points,opacity,lineWidth) {
  ctx.globalAlpha=opacity;ctx.strokeStyle='#d5ff00';ctx.fillStyle='#d5ff00';ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=lineWidth;
  if(points.length===1){ctx.beginPath();ctx.arc(points[0][0]*width,points[0][1]*height,lineWidth*.85,0,Math.PI*2);ctx.fill();}
  else {ctx.beginPath();points.forEach(([x,y],i)=>{if(i===0)ctx.moveTo(x*width,y*height);else ctx.lineTo(x*width,y*height);});ctx.stroke();}
  ctx.globalAlpha=1;
}
function drawFrame() {
  if(!width||!height)return;
  ctx.clearRect(0,0,width,height);
  const scale=Math.max(.4,Math.min(width/1200,height/700));
  strokeRoute(wholeRoute,.18,43*scale);
  strokeRoute(routeForDay(),1,(42+Math.sin(phase*.6)*1.2)*scale);
  const zone=P[previewZone||selectedZone];
  ctx.fillStyle='#fa210f';
  for(const dot of particles){
    const x=(dot.x+Math.sin(phase*.3+dot.phase)*.0018)*width;
    const y=(dot.y+Math.cos(phase*.25+dot.phase)*.0018)*height;
    const nearby=zone?Math.hypot(dot.x-zone[0],dot.y-zone[1])<.15:false;
    const radius=Math.max(.6,dot.size*scale*(1+Math.sin(phase+dot.phase)*.055)*(nearby?1.25:1));
    ctx.globalAlpha=nearby?1:.84+Math.sin(dot.phase)*.13;
    ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.fill();
  }
  ctx.globalAlpha=1;
}
function tick(now) {
  frameId=null;
  phase+=lastTick===null?0:Math.min((now-lastTick)/1000,.05);
  lastTick=now;drawFrame();syncAnimation();
}
function syncAnimation() {
  const running=!paused&&visible&&!document.hidden;
  if(running&&frameId===null)frameId=requestAnimationFrame(tick);
  if(!running){if(frameId!==null){cancelAnimationFrame(frameId);frameId=null;}lastTick=null;}
  if(toggle.hasAttribute('aria-label')&&toggle.getAttribute('aria-pressed')===String(paused))return;
  toggle.replaceChildren(document.createTextNode(paused?'Play ':'Pause '));
  const icon=document.createElement('span');icon.className=`motion-icon ${paused?'play':'pause'}`;icon.setAttribute('aria-hidden','true');toggle.append(icon);
  toggle.setAttribute('aria-label',paused?'Resume animation':'Pause animation');toggle.setAttribute('aria-pressed',String(paused));
}
toggle.addEventListener('click',()=>{paused=!paused;syncAnimation();});
motionPreference.addEventListener('change',event=>{if(event.matches)paused=true;syncAnimation();});
document.addEventListener('visibilitychange',syncAnimation);
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;syncAnimation();}).observe(container);
new ResizeObserver(entries=>{
  ({width,height}=entries[0].contentRect);
  const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);drawFrame();
}).observe(container);
window.addEventListener('popstate',()=>{readState();updateInfo();});
readState();updateInfo();syncAnimation();
