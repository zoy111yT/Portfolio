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
const P = { SCHOOL:[.55,.49], DORM:[.86,.20], STATION:[.13,.17], CITY:[.48,.73] };
const dormSchool = [P.DORM,[.77,.23],[.70,.28],[.64,.36],[.59,.42],P.SCHOOL];
const schoolCity = [P.SCHOOL,[.53,.56],[.52,.63],[.49,.67],P.CITY];
const cityStation = [P.CITY,[.42,.62],[.38,.52],[.29,.44],[.21,.32],P.STATION];
const wholeRoute = [...dormSchool,...schoolCity.slice(1),...cityStation.slice(1)];
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
// Categorical mood values drive an expressive intensity, not a measured score.
const moodEnergy = { neutral:.28, good:.72, anxious:1.15 };
let pointer = null;
const routeSegments = wholeRoute.slice(1).map((p,i)=>({start:wholeRoute[i],end:p,length:Math.hypot(p[0]-wholeRoute[i][0],p[1]-wholeRoute[i][1])}));
const routeLength = routeSegments.reduce((sum,segment)=>sum+segment.length,0);
function sampleRoute(t) {
  let distance=((t%1)+1)%1*routeLength;
  for(const segment of routeSegments){
    if(distance<=segment.length){
      const f=distance/segment.length;
      return {x:segment.start[0]+(segment.end[0]-segment.start[0])*f,y:segment.start[1]+(segment.end[1]-segment.start[1])*f,nx:-(segment.end[1]-segment.start[1])/segment.length,ny:(segment.end[0]-segment.start[0])/segment.length};
    }
    distance-=segment.length;
  }
  return {x:P.SCHOOL[0],y:P.SCHOOL[1],nx:0,ny:1};
}
const particles = Array.from({length:1100}, (_,i)=>{
  const t=random(),anchor=sampleRoute(t),angle=random()*Math.PI*2;
  const distance=Math.pow(random(),1.6)*.15;
  return {
    kind:i<760?'stream':i<980?'cloud':'ambient',
    x:i<980?anchor.x+Math.cos(angle)*distance:random(),
    y:i<980?anchor.y+Math.sin(angle)*distance:random(),
    t,band:(random()-.5)*Math.pow(random(),.7)*.15,
    speed:(.006+random()*.016)*(random()>.5?1:-1),
    size:i%37===0?9+random()*9:i%9===0?3+random()*5:.6+random()*2,
    phase:random()*Math.PI*2,rate:.65+random()*.8
  };
});
function particlePose(dot,time,energy,zone=null) {
  let x,y,opacity=1;
  if(dot.kind==='stream'){
    const progress=((dot.t+time*dot.speed*(.45+energy))%1+1)%1;
    const center=sampleRoute(progress);
    const band=dot.band*(.6+energy*.45)+Math.sin(time*dot.rate+dot.phase)*(.005+energy*.012);
    x=center.x+center.nx*band;
    y=center.y+center.ny*band;
    opacity=Math.min(1,progress*30,(1-progress)*30);
  }else{
    const excursion=dot.kind==='cloud'?.012+energy*.022:.018+energy*.032;
    x=dot.x+Math.sin(time*dot.rate*.5+dot.phase)*excursion+Math.sin(time*.3+dot.phase)*excursion*.4;
    y=dot.y+Math.cos(time*dot.rate*.4+dot.phase)*excursion;
  }
  if(zone){
    const dx=x-zone[0],dy=y-zone[1],distance=Math.hypot(dx,dy);
    const attraction=Math.max(0,1-distance/.23)*.3;
    x-=dx*attraction;y-=dy*attraction;
    x+=Math.cos(time+dot.phase)*attraction*.018;y+=Math.sin(time+dot.phase)*attraction*.018;
  }
  if(pointer){
    const dx=x-pointer[0],dy=y-pointer[1],distance=Math.hypot(dx,dy);
    if(distance>0&&distance<.10){const force=(1-distance/.10)*.045;x+=dx/distance*force;y+=dy/distance*force;}
  }
  const breath=1+Math.sin(time*dot.rate*(.65+energy*.65)+dot.phase)*(.16+energy*.17)+Math.sin(time*.48+dot.phase)*.09;
  return {x,y,radius:dot.size*(.7+energy*.4)*breath,opacity};
}
container.addEventListener('pointermove',event=>{
  if(event.pointerType==='touch')return;
  const bounds=container.getBoundingClientRect();pointer=[(event.clientX-bounds.left)/bounds.width,(event.clientY-bounds.top)/bounds.height];
  if(paused)drawFrame();
});
container.addEventListener('pointerleave',()=>{pointer=null;if(paused)drawFrame();});
function routeForDay() {
  const path = schedule[currentIndex].path;
  if (path.includes('STATION')) return wholeRoute;
  if (path.includes('CITY')) return [...dormSchool,...schoolCity.slice(1)];
  if (path.includes('SCHOOL')) return dormSchool;
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
  const energy=moodEnergy[schedule[currentIndex].mainMood];
  ctx.fillStyle='#fa210f';
  for(const dot of particles){
    const pose=particlePose(dot,phase,energy,zone);
    const radius=Math.max(.55,pose.radius*scale);
    ctx.globalAlpha=(.8+Math.sin(dot.phase)*.17)*pose.opacity;
    ctx.beginPath();ctx.arc(pose.x*width,pose.y*height,radius,0,Math.PI*2);ctx.fill();
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
