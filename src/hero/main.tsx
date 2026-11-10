// Rubber Spheres by Originkit, adapted for Zoey Zhong's portfolio.
import React from 'react';
import {createRoot} from 'react-dom/client';
import RubberSpheres from './RubberSpheres';
const host=document.getElementById('skills-spheres');
const outer=host?.closest('.skills-collage') as HTMLElement;
const toggle=document.querySelector('.skills-toggle') as HTMLButtonElement;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
function pause(value:boolean){
 outer.dataset.paused=String(value);
 toggle.setAttribute('aria-pressed',String(value));
 toggle.setAttribute('aria-label',document.documentElement.lang==='zh-CN'?(value?'继续技能球动画':'暂停技能球动画'):(value?'Resume skill spheres':'Pause skill spheres'));
 toggle.textContent=value?'▷':'Ⅱ';
}
if(host){
 pause(reduced.matches);
 toggle.addEventListener('click',()=>pause(outer.dataset.paused!=='true'));
 reduced.addEventListener('change',e=>pause(e.matches));
 const names=['figma','photoshop','illustrator','indesign','procreate','after-effects','premiere','animate','cinema4d','maya','tvpaint','chatgpt','midjourney','deepseek'];
 createRoot(host).render(<RubberSpheres background="transparent" baseColor="#ffffff" colorMode="Multi" balloonColors={['#fff3dc','#a3ed12','#a475eb','#fff8ea','#202127']} density={24} dotSize={155} field={{spreadX:135,spreadY:145}} material={{roughness:20,gloss:100,transparency:0}} motion={{gravityAnchor:'Center',bounciness:65,mouseForce:55,parallax:0}} sourceMode="Images" images={names.map(name=>({image:`assets/images/skills/${name}.png`,fit:'Contain'}))}/>);
}
