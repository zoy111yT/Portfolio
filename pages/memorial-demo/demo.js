'use strict';
const $=s=>document.querySelector(s);
const scenes={
 home:{title:'Memorial Grove',zh:'记忆之林',chapter:'garden',image:'petals',hint:'Choose a space to explore.',hintZh:'选择一个入口，开始探索。'},
 garden:{title:'My garden · Panorama',zh:'我的花园 · 全景',chapter:'garden',image:'garden-wide',wide:true,hint:'Tap a flower to revisit a memory, or move closer.',hintZh:'点击花朵回看记忆，或切换到近景。'},
 close:{title:'My garden · Close-up',zh:'我的花园 · 近景',chapter:'garden',image:'garden-close',wide:true,hint:'Explore the flower, then return to the full garden.',hintZh:'查看花朵记忆，再回到花园全景。'},
 petals:{title:'Collect petals',zh:'收集花瓣',chapter:'garden',image:'petals',hint:'Tap the flower to collect a memory.',hintZh:'点击花朵，收集一段记忆。'},
 memory:{title:'A memory to keep',zh:'想要留住的记忆',chapter:'garden',image:'petals',hint:'Plant this memory, or write one of your own.',hintZh:'种下这段记忆，也可以写下自己的回忆。'},
 calendar:{title:'Memory calendar',zh:'记忆日历',chapter:'calendar',image:'calendar',hint:'Tap the flowers on November 13, 15 or 27 to read their memories.',hintZh:'点击 11 月 13、15、27 日的花朵，查看记忆。'},
 'calendar-empty':{title:'Calendar · Date view',zh:'日历 · 日期视图',chapter:'calendar',image:'calendar-empty',hint:'Select November 13 to revisit its memory.',hintZh:'选择 11 月 13 日，回看当天的记忆。'},
 category:{title:'3D Scan · Categories',zh:'3D 扫描 · 分类',chapter:'scan',image:'scan-category',hint:'Open Building to explore your saved object, or start a scan.',hintZh:'打开 Building 查看已有物件，或进入扫描。'},
 scan:{title:'3D Scan · Camera',zh:'3D 扫描 · 相机',chapter:'scan',image:'scan-light',hint:'Try the scan preview, switch the theme, or open saved files.',hintZh:'体验扫描预览、切换明暗模式，或打开已保存文件。'},
 'scan-dark':{title:'3D Scan · Dark mode',zh:'3D 扫描 · 深色模式',chapter:'scan',image:'scan-dark',hint:'Tap the centre to preview scanning. No camera access is required.',hintZh:'点击中间预览扫描过程，无需开启相机。'},
 files:{title:'Saved objects',zh:'已保存的物件',chapter:'scan',image:'scan-category',hint:'Open the Slide object to explore its story.',hintZh:'打开滑梯物件，查看它的故事。'},
 object:{title:'Slide · Saved object',zh:'滑梯 · 物件详情',chapter:'scan',image:'object-light',hint:'Open Intro to read the story. Use the arrows to change the viewing angle.',hintZh:'点击 Intro 阅读故事，用左右箭头切换视角。'},
 'object-dark':{title:'Slide · Another view',zh:'滑梯 · 另一视角',chapter:'scan',image:'object-dark',hint:'Explore the object or read its introduction.',hintZh:'查看物件，或阅读它的介绍。'},
 'object-intro':{title:'Slide · The story',zh:'滑梯 · 记忆故事',chapter:'scan',image:'object-intro',hint:'Read the story, then return to the saved object.',hintZh:'阅读故事，再返回物件详情。'},
 'life-intro':{title:'Life path',zh:'生命轨迹',chapter:'life',image:'life-intro',hint:'Continue to explore the people and moments in this life.',hintZh:'继续查看生命中的人物与时刻。'},
 'life-people':{title:'Life path · People',zh:'生命轨迹 · 人物',chapter:'life',image:'life-people',hint:'Tap a memory card to read a moment from the timeline.',hintZh:'点击记忆卡片，阅读时间线中的片段。'},
 vr:{title:'VR · Memory place',zh:'VR · 记忆空间',chapter:'scan',image:'vr-camera',hint:'Enter the garden to explore the landscape scene.',hintZh:'进入花园，体验横版场景。'},
 'vr-garden':{title:'VR · Garden landscape',zh:'VR · 花园全景',chapter:'garden',image:'vr-garden',wide:true,hint:'Move between the garden views, or tap a memory marker.',hintZh:'切换花园视角，或点击记忆标记。'}
};
let current='home',language='en',trail=[],showTargets=false,timer;
let memories=[];try{memories=JSON.parse(localStorage.getItem('memorial-grove-memories')||'[]');if(!Array.isArray(memories))memories=[];}catch{}
const copy=(en,zh)=>language==='zh'?zh:en;
const samples={13:{title:'Strong in the morning',zh:'清晨的坚强',body:'I feel strong in the morning, but at night I miss Dad. Some things are hard to say aloud. Today, I want to give this memory a quiet place to grow.',bodyZh:'清晨时我觉得自己很坚强，到了夜晚却又想起爸爸。有些话很难说出口。今天，我想给这段记忆一个安静生长的地方。'},15:{title:'The way home',zh:'回家的路',body:'The path has changed, but I still remember walking beside you. A familiar corner can bring an ordinary afternoon back to life.',bodyZh:'那条路已经变了，但我仍记得和你并肩走过。一个熟悉的街角，就能让普通的午后重新浮现。'},27:{title:'Little things that stay',zh:'留下来的小事',body:'A flower, a place, a small moment together. I keep these little things because they remind me how much there is to remember.',bodyZh:'一朵花、一个地方、一段相处的时光。我留着这些小事，因为它们提醒我，还有许多值得记住的瞬间。'}};
function button(label,action,cls=''){const b=document.createElement('button');b.type='button';b.textContent=label;if(cls)b.className=cls;b.onclick=action;return b;}
function hit(label,x,y,w,h,action){const b=button(label,action,'hit');b.setAttribute('aria-label',label);Object.assign(b.style,{left:x+'%',top:y+'%',width:w+'%',height:h+'%'});$('#screen').append(b);return b;}
function to(id,record=true){if(!scenes[id])return;if(record&&id!==current)trail.push(current);current=id;history.replaceState(null,'','#'+id);render();}
function goBack(){to(trail.pop()||'home',false);}
function toast(value){$('#toast').textContent=value;$('#toast').classList.add('visible');clearTimeout(timer);timer=setTimeout(()=>$('#toast').classList.remove('visible'),3000);}
function openMemory(day=13,write=false){const m=samples[day]||samples[13];$('#memory-date').textContent=copy('NOVEMBER '+day+', 2023','2023 年 11 月 '+day+' 日');$('#memory-title').textContent=copy(m.title,m.zh);$('#memory-copy').textContent=copy(m.body,m.bodyZh);$('#memory-input').value='';$('#memory-input').hidden=!write;$('#write-label').hidden=!write;$('#plant').textContent=write?copy('Plant my memory','种下我的记忆'):copy('Plant this memory','种下这段记忆');$('#memory-dialog').showModal();}
function topControls(){const row=document.createElement('div');row.className='top-controls';row.append(button('←',goBack),button('⌂',()=>to('home')));$('#screen').append(row);}
function render(){
 const s=scenes[current],screen=$('#screen');screen.replaceChildren();$('#device').classList.toggle('landscape',!!s.wide);screen.classList.toggle('targets',showTargets);
 const img=document.createElement('img');img.src='assets/'+s.image+'.webp';img.alt=copy(s.title,s.zh)+' — '+copy('original design by Yuting Zhong','钟雨婷原始设计');img.className=current==='vr-garden'?'rotated-art':'scene-image';screen.append(img);
 $('#scene-name').textContent=copy(s.title,s.zh);$('#hint').textContent=copy(s.hint,s.hintZh);$('#scene-counter').textContent=String(Object.keys(scenes).indexOf(current)+1).padStart(2,'0')+' / '+Object.keys(scenes).length;$('#orientation').textContent=s.wide?copy('Landscape experience','横版体验'):copy('Portrait experience','竖版体验');
 const chapters=[['garden','01',copy('Garden','记忆花园'),'home'],['calendar','02',copy('Calendar','花朵日历'),'calendar'],['scan','03','3D Scan','category'],['life','04',copy('Life path','生命轨迹'),'life-intro']];$('#chapters').replaceChildren();
 for(const [key,n,label,id]of chapters){const b=button('',()=>to(id));const num=document.createElement('span');num.textContent=n;b.append(num,document.createTextNode(label));b.classList.toggle('active',key===s.chapter);b.setAttribute('aria-current',key===s.chapter?'page':'false');$('#chapters').append(b);}
 $('#language').textContent=copy('中文','EN');$('#show-targets').textContent=showTargets?copy('Hide tap areas','隐藏点击区域'):copy('Show where to tap','显示点击区域');$('#show-targets').setAttribute('aria-pressed',String(showTargets));$('#intro-copy').textContent=copy('A quiet place to remember, collect moments and revisit the people and places that stay with us.','一个安静的记忆空间，收集片刻，重访留在心中的人与地方。');$('#prototype-note').textContent=copy('Interactive concept · Sample memories. Scan and VR scenes are visual previews.','交互概念演示 · 示例记忆。扫描与 VR 为视觉预览。');
 const common=()=>{hit(copy('Back','返回'),0,4,12,7,goBack);hit(copy('Garden menu','花园菜单'),84,5,16,9,()=>to('home'));};
 if(current==='home'){
  const title=document.createElement('div');title.className='home-title';title.textContent='Memorial\nGrove';title.style.whiteSpace='pre-line';screen.append(title);
  const sub=document.createElement('p');sub.className='home-sub';sub.textContent=copy('Keep a moment. Give it a place to grow.','留住一个瞬间，给它一个生长的地方。');screen.append(sub);
  const actions=document.createElement('div');actions.className='home-actions';for(const [en,zh,id]of [['Enter my garden','进入我的花园','garden'],['Memory calendar','记忆日历','calendar'],['Collect petals','收集花瓣','petals'],['3D Scan','3D 扫描','category'],['Life path','生命轨迹','life-intro']])actions.append(button(copy(en,zh)+' ↗',()=>to(id)));screen.append(actions);
 }else if(s.wide){
  const controls=document.createElement('div');controls.className='landscape-controls';const right=document.createElement('div');controls.append(button('← '+copy('Garden menu','花园菜单'),()=>to('home')),right);right.append(button(copy('Panorama','全景'),()=>to('garden')),button(copy('Close-up','近景'),()=>to('close')),button('VR',()=>to('vr-garden')),button('▦',()=>to('calendar')));screen.append(controls);
  const cap=document.createElement('div');cap.className='landscape-caption';cap.textContent=copy('My garden · '+(3+memories.length)+' memories growing','我的花园 · '+(3+memories.length)+' 段记忆在生长');screen.append(cap);
  hit(copy('Read the flower memory','阅读花朵记忆'),35,17,31,57,()=>openMemory(15));hit(copy('Move through the garden','探索花园'),5,30,23,50,()=>to(current==='garden'?'close':'garden'));hit(copy('Read another memory','阅读另一段记忆'),74,23,23,56,()=>openMemory(27));
 }else if(current==='calendar'||current==='calendar-empty'){
  common();hit(copy('Change calendar view','切换日历视图'),5,14,28,5,()=>to(current==='calendar'?'calendar-empty':'calendar'));hit(copy('Memory on November 13','11 月 13 日的记忆'),17,40,13,9,()=>openMemory(13));hit(copy('Memory on November 15','11 月 15 日的记忆'),43,40,13,9,()=>openMemory(15));hit(copy('Memory on November 27','11 月 27 日的记忆'),17,52,13,8,()=>openMemory(27));hit(copy('Today’s garden','今天的花园'),0,93,30,7,()=>to('garden'));hit(copy('Write a memory','写下记忆'),34,93,33,7,()=>openMemory(13,true));hit(copy('Manage saved memories','管理已保存的记忆'),72,93,28,7,()=>{if(memories.length&&confirm(copy('Remove the last memory saved in this browser?','删除此浏览器最后保存的一段记忆？'))){memories.pop();save();toast(copy('Last memory removed','已删除最后一段记忆'));}else if(!memories.length)toast(copy('The three original memories are kept as examples.','三段原始记忆作为示例保留。'));});hit(copy('Find a memory','查找记忆'),70,9,14,7,()=>openMemory(13));
 }else if(current==='petals'){
  common();hit(copy('Collect a petal','收集一片花瓣'),2,20,96,68,()=>{toast(copy('A petal collected','已收集一片花瓣'));to('memory');});
 }else if(current==='memory'){
  topControls();const card=document.createElement('article');card.className='memory-card';const title=document.createElement('h2');title.textContent=copy(samples[13].title,samples[13].zh);const body=document.createElement('p');body.textContent=copy(samples[13].body,samples[13].bodyZh);card.append(title,body,button(copy('Plant this memory','种下这段记忆'),()=>{memories.push({text:copy(samples[13].body,samples[13].bodyZh),time:Date.now()});save();to('garden');toast(copy('Your memory has a place to grow.','你的记忆有了生长的地方。'));}),button(copy('Write my own','写下我的回忆'),()=>openMemory(13,true)));screen.append(card);
 }else if(current==='category'){
  common();hit('Building',56,41,34,14,()=>to('object'));for(const [label,x,y]of [['Food',54,25],['Place',14,35],['Goods',14,50],['Other',54,57]])hit(label,x,y,34,14,()=>{to('files');toast(copy(label+' · Browse the saved sample object',label+' · 浏览已保存的示例物件'));});
  const row=document.createElement('div');row.className='home-actions';row.append(button(copy('Start scanning','开始扫描'),()=>to('scan')),button(copy('Saved files','已存文件'),()=>to('files')));screen.append(row);
 }else if(current==='scan'||current==='scan-dark'){
  common();hit(copy('Switch light / dark','切换明暗模式'),42,62,17,7,()=>to(current==='scan'?'scan-dark':'scan'));hit(copy('Open saved files','打开已存文件'),83,80,17,8,()=>to('files'));hit(copy('My QR code','我的二维码'),0,80,35,8,()=>toast(copy('QR sharing is not connected in this concept preview.','概念预览暂未连接二维码分享。')));hit(copy('VR mode','VR 模式'),80,89,20,11,()=>to('vr'));hit(copy('Scan preview','扫描预览'),5,19,90,43,scanPreview);hit('SCAN',32,89,42,11,scanPreview);
 }else if(current==='files'){
  topControls();const list=document.createElement('div');list.className='object-list';const title=document.createElement('h2');title.textContent=copy('Saved objects','已保存的物件');const photo=document.createElement('img');photo.src='assets/object-light.webp';photo.alt='Slide';photo.className='photo-object';list.append(title,photo,button(copy('Slide · Building ↗','滑梯 · 建筑 ↗'),()=>to('object')),button(copy('Scan a new object','扫描新物件'),()=>to('scan')));screen.append(list);
 }else if(current==='object'||current==='object-dark'){
  common();hit(copy('Files','文件'),68,3,15,6,()=>to('files'));hit(copy('Read introduction','阅读介绍'),66,78,30,9,()=>to('object-intro'));hit(copy('Previous angle','上一视角'),0,44,17,10,()=>to(current==='object'?'object-dark':'object'));hit(copy('Next angle','下一视角'),83,44,17,10,()=>to(current==='object'?'object-dark':'object'));hit(copy('Scan an object','扫描物件'),36,76,29,14,()=>to('scan'));hit(copy('Remove object','删除物件'),4,79,29,8,()=>toast(copy('The original sample object is kept for this preview.','预览保留此原始示例物件。')));
 }else if(current==='object-intro'){
  common();hit(copy('Close introduction','关闭介绍'),0,73,20,11,()=>to('object'));hit(copy('Return to object','返回物件'),85,43,15,12,()=>to('object-dark'));
 }else if(current==='life-intro'){
  common();hit(copy('Explore life path','探索生命轨迹'),68,80,30,12,()=>to('life-people'));
 }else if(current==='life-people'){
  common();for(let i=0;i<4;i++)hit(copy('Read timeline memory ','阅读时间线记忆 ')+(i+1),4,37+i*15,91,14,()=>openMemory([13,15,27,13][i]));
 }else if(current==='vr'){
  common();hit(copy('Scan mode','扫描模式'),67,89,33,11,()=>to('scan'));hit(copy('Enter VR garden','进入 VR 花园'),7,18,87,59,()=>to('vr-garden'));hit('VR',25,90,35,10,()=>to('vr-garden'));hit(copy('Files','文件'),85,77,15,8,()=>to('files'));
 }
}
function scanPreview(){if($('#screen .scan-sweep'))return;const line=document.createElement('div');line.className='scan-sweep';$('#screen').append(line);const start=current;toast(copy('Previewing a scan…','正在演示扫描…'));setTimeout(()=>{if(current===start){to('files');toast(copy('Explore the saved sample object.','可继续查看已保存的示例物件。'));}},1900);}
function save(){try{localStorage.setItem('memorial-grove-memories',JSON.stringify(memories));}catch{toast(copy('Memory stays available for this visit.','记忆将在本次浏览期间保留。'));}}
$('#back').onclick=goBack;$('#restart').onclick=()=>to('home');$('#language').onclick=()=>{language=language==='en'?'zh':'en';document.documentElement.lang=language==='zh'?'zh-CN':'en';render();};$('#show-targets').onclick=()=>{showTargets=!showTargets;render();};$('#fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await $('.playground').requestFullscreen();}catch{toast(copy('Use your browser’s full-screen option to expand the view.','可使用浏览器的全屏选项放大体验。'));}};
$('#plant').onclick=()=>{const value=$('#memory-input').hidden?$('#memory-copy').textContent:$('#memory-input').value.trim();if(!value){$('#memory-input').focus();return;}memories.push({text:value,time:Date.now()});save();$('#memory-dialog').close();to('garden');toast(copy('Memory planted in your garden.','记忆已种进花园。'));};$('#open-memory').onclick=()=>{$('#memory-dialog').close();to('garden');};window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(scenes[id]&&id!==current)to(id);});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#memory-dialog').open)goBack();});
const initial=location.hash.slice(1);if(scenes[initial])current=initial;render();
