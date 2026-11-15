import * as THREE from 'three';
import { audio } from './audio.js';

// Original arcade FPS simulation, built with Three.js and procedural sound.
const $ = id => document.getElementById(id);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x9bb7c4);
scene.fog = new THREE.Fog(0x9bb7c4, 38, 105);
const camera = new THREE.PerspectiveCamera(76, innerWidth / innerHeight, .06, 180);
const renderer = new THREE.WebGLRenderer({canvas:$('game'), antialias:true, powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.65)); renderer.setSize(innerWidth,innerHeight);
renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.outputColorSpace=THREE.SRGBColorSpace; renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.15;
const clock=new THREE.Clock(), raycaster=new THREE.Raycaster(), down=new THREE.Vector3(0,-1,0);
const mat=(color,roughness=.86,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,metalness});
const M={grass:mat(0x65785b),road:mat(0x303638),concrete:mat(0xaaa99a),cream:mat(0xd0c8b3),blue:mat(0x78939a),red:mat(0x9f6256),trim:mat(0xe4ddca),dark:mat(0x202728),wood:mat(0x76513a),leaf:mat(0x50684b),yellow:mat(0xc5a550),glass:mat(0x9ec4cb,.22,.18),metal:mat(0x515a58,.48,.55)};
const solids=[],bots=[],effects=[],keys=new Set();
const player={pos:new THREE.Vector3(0,1.72,12),vel:new THREE.Vector3(),yaw:0,pitch:0,health:100,alive:true,kills:0,deaths:0,score:0,shots:0,hits:0,streak:0,frag:2,aiming:false,sprint:false,reloading:false,respawn:0,fireAt:0,lastDamage:0};
const weapons=[
 {name:'MTAR',mode:'ASSAULT RIFLE',kind:'ar',magSize:30,mag:30,reserve:180,rate:.105,damage:34,reload:1.55,spread:.009,range:75},
 {name:'MSMC',mode:'SUBMACHINE GUN',kind:'smg',magSize:30,mag:30,reserve:180,rate:.075,damage:25,reload:1.35,spread:.015,range:52},
 {name:'DSR-50',mode:'BOLT-ACTION SNIPER',kind:'sniper',magSize:5,mag:5,reserve:40,rate:1,damage:100,reload:2.1,spread:.001,range:120},
 {name:'M1911',mode:'SIDEARM',kind:'pistol',magSize:12,mag:12,reserve:72,rate:.2,damage:28,reload:1.25,spread:.012,range:48}
];
let weaponIndex=0,selectedClass=0,active=false,paused=false,ended=false,matchTime=360,hudMatchSecond=-1,blueScore=0,redScore=0,lastMinimap=0,notifyTimer=0,killTimer=0,hitTimer=0,uavTimer=0,shotSpread=0,mouseHeld=false,grenadeCooldown=0,bobTime=0,damageFlash=0;
function box(parent,name,size,pos,material,options={}){
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(...size),material);mesh.name=name;mesh.position.set(...pos);mesh.castShadow=options.castShadow!==false;mesh.receiveShadow=options.receiveShadow!==false;if(options.rotation)mesh.rotation.set(...options.rotation);parent.add(mesh);
 if(options.solid){mesh.updateWorldMatrix(true,false);solids.push({mesh,box:new THREE.Box3().setFromObject(mesh)});}return mesh;
}
function cylinder(parent,radii,pos,material,segments=12,rotation=null){const mesh=new THREE.Mesh(new THREE.CylinderGeometry(...radii,segments),material);mesh.position.set(...pos);if(rotation)mesh.rotation.set(...rotation);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
function makeTexture(base,accent,label){const c=document.createElement('canvas');c.width=c.height=512;const x=c.getContext('2d');x.fillStyle=base;x.fillRect(0,0,512,512);for(let i=0;i<60;i++){x.fillStyle=`rgba(0,0,0,${Math.random()*.08})`;x.fillRect(Math.random()*512,Math.random()*512,Math.random()*100+10,Math.random()*7+1);}x.strokeStyle=accent;x.lineWidth=7;x.strokeRect(12,12,488,488);x.fillStyle=accent;x.font='900 48px Arial';x.textAlign='center';x.fillText(label,256,80);for(let i=0;i<8;i++){x.fillStyle='rgba(255,255,255,.07)';x.fillRect(30,120+i*44,452,2);}const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;}
function buildWorld(){
 scene.add(new THREE.HemisphereLight(0xdce9e8,0x59604d,2));const sun=new THREE.DirectionalLight(0xffe6c6,3.3);sun.position.set(-18,30,12);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-38;sun.shadow.camera.right=38;sun.shadow.camera.top=38;sun.shadow.camera.bottom=-38;sun.shadow.bias=-.0002;scene.add(sun);
 const ground=new THREE.Mesh(new THREE.PlaneGeometry(110,110),M.grass);ground.rotation.x=-Math.PI/2;ground.position.y=-.12;ground.receiveShadow=true;scene.add(ground);
 box(scene,'road',[15,.12,55],[0,-.045,0],M.road,{castShadow:false});box(scene,'sidewalk',[20,.18,4],[0,.02,0],M.concrete,{castShadow:false});for(const z of [-8,8])box(scene,'curb',[20,.24,.25],[0,.08,z],M.trim,{castShadow:false});for(let z=-25;z<=25;z+=7)box(scene,'lane dash',[.18,.025,3],[0,.03,z],M.yellow,{castShadow:false});
 buildHouse(-1,-18,M.cream,M.blue,'HAPPY HOME');buildHouse(1,18,mat(0xc9bca5),M.red,'FAMILY FIRST');buildVehicle(-4.3,1,-1,'bus');buildVehicle(4.5,.9,3.7,'car');
 for(const [x,z,w,d] of [[-8,-10,2,1.3],[8,10,2,1.3],[-7,6,1.7,1.4],[7,-6,1.7,1.4],[-3,14,2.2,1.1],[3,-14,2.2,1.1]]){box(scene,'road cover',[w,.95,d],[x,.48,z],M.concrete,{solid:true});box(scene,'cover stripe',[w+.03,.09,d+.03],[x,.92,z],M.yellow,{castShadow:false});}
 for(const [x,z] of [[-11,-26],[11,-24],[-11,25],[11,25],[-10,1],[10,-1]])buildTree(x,z);
 for(const side of [-1,1]){const x=side*10.4;for(let z=-28;z<=28;z+=2.2){if(Math.abs(z)<7)continue;box(scene,'fence post',[.12,1.15,.12],[x,.55,z],M.wood);}for(const y of [.35,.9])box(scene,'fence rail',[.14,.12,48],[x,y,0],M.wood);}
 for(let i=0;i<12;i++){const x=(i%2?1:-1)*(24+(i%3)*3),z=-28+Math.floor(i/2)*10,h=4+Math.random()*2;box(scene,'distant home',[9,h,8],[x,h/2,z],mat([0xbab4a2,0x8c9a94,0x9a8f7a,0x879ca0][i%4]),{castShadow:false});box(scene,'roof',[10,1,9],[x,h+.35,z],M.dark,{castShadow:false});}
 buildStreetProps();buildWeaponModel();
}
function buildHouse(side,z,wall,trim,label){const x=side*15.3,frontZ=z+(z<0?4.7:-4.7),w=12,depth=10;box(scene,'house body',[w,6,depth],[x,3,z],wall,{solid:true});const roof=mat(z<0?0x5c5144:0x55483e);box(scene,'roof front',[w+1,.32,depth*.58],[x,6.18,z-1.6],roof,{rotation:[.3,0,0]});box(scene,'roof rear',[w+1,.32,depth*.58],[x,6.18,z+1.6],roof,{rotation:[-.3,0,0]});box(scene,'eave',[w+.5,.34,.3],[x,5.75,frontZ],trim);box(scene,'front door',[1.45,3,.14],[x,1.5,frontZ+(z<0?-.08:.08)],mat(0x503b30));for(const dx of [-3.6,3.6]){box(scene,'window',[2.45,1.65,.18],[x+dx,3.45,frontZ+(z<0?-.12:.12)],M.glass);box(scene,'window divider',[.08,1.75,.2],[x+dx,3.45,frontZ+(z<0?-.22:.22)],trim);box(scene,'window sill',[2.7,.12,.32],[x+dx,2.58,frontZ],trim);}const gx=x+(side<0?5.1:-5.1);box(scene,'garage door',[.16,2.6,3.8],[gx,1.35,z],mat(0x9c9b8e));for(let i=0;i<5;i++)box(scene,'garage groove',[.05,.035,3.65],[gx+(side<0?-.11:.11),.38+i*.45,z],M.dark,{castShadow:false});box(scene,'yard',[12,.08,9],[x,-.01,z+(z<0?9:-9)],M.grass,{castShadow:false});const signMat=new THREE.MeshStandardMaterial({map:makeTexture('#d4cbb7','#634a36',label),roughness:.8});box(scene,'yard sign',[2.4,1.25,.12],[x,1,frontZ+(z<0?-2.8:2.8)],signMat);box(scene,'porch light',[.3,.4,.25],[x,4.7,frontZ+(z<0?-.2:.2)],M.yellow);box(scene,'mailbox',[.55,.65,.42],[x-side*8,.75,frontZ],M.dark);box(scene,'planter',[2,.55,.8],[x+side*7,.27,frontZ],M.wood);}
function buildVehicle(x,y,z,type){
 const bus=type==='bus',length=bus?8:4.7,width=bus?2.45:2.05,height=bus?3.15:1.55,body=bus?M.blue:mat(0x7f493b),g=new THREE.Group();g.position.set(x,y,z);scene.add(g);
 box(g,'vehicle body',[width,height,length],[0,height/2,0],body,{solid:true});box(g,'vehicle roof',[width+.06,.16,length-.2],[0,height+.06,0],bus?M.trim:mat(0x353b3b));
 if(bus){for(let zz of [-2.7,-1.45,-.2,1.05,2.3]){box(g,'bus window',[.05,.82,.95],[width/2+.035,2.25,zz],M.glass);box(g,'bus window far',[.05,.82,.95],[-width/2-.035,2.25,zz],M.glass);}box(g,'bus windshield',[width-.25,1.05,.06],[0,2.2,-length/2-.03],M.glass);box(g,'destination sign',[width-.4,.38,.07],[0,2.85,-length/2-.04],M.dark);}
 else {box(g,'car window',[width-.22,.68,length*.48],[0,1.58,-.12],M.glass);box(g,'hood',[width,.3,length*.35],[0,1.22,-length*.31],body);box(g,'trunk',[width,.3,length*.2],[0,1.22,length*.39],body);}
 for(const zz of [-length*.34,length*.34])for(const xx of [-width*.53,width*.53]){const wheel=cylinder(g,[.4,.4,.25],[xx,.47,zz],M.dark,16,[0,0,Math.PI/2]);wheel.rotation.z=Math.PI/2;}
 for(const zz of [-length/2-.03,length/2+.03])for(const xx of [-width*.32,width*.32])box(g,'lamp',[.24,.17,.04],[xx,bus?1.05:.95,zz],zz<0?M.yellow:mat(0x9b2821));
}
function buildTree(x,z){cylinder(scene,[.32,.42,3.8],[x,1.9,z],M.wood,9);const leaves=mat(0x52654b);for(const [dx,dy,dz,r] of [[0,4.7,0,2.1],[-1.1,4.1,.3,1.55],[1.2,4.25,-.3,1.6],[0,5.7,-.2,1.45]]){const crown=new THREE.Mesh(new THREE.IcosahedronGeometry(r,1),leaves);crown.position.set(x+dx,dy,z+dz);crown.castShadow=true;crown.receiveShadow=true;scene.add(crown);}}
function buildStreetProps(){
 for(const [x,z,c] of [[-8,-20,0x897755],[8,20,0x897755],[-9,15,0x855b49],[9,-15,0x855b49]]){box(scene,'trash bin',[.8,1.1,.8],[x,.55,z],mat(c),{solid:true});box(scene,'bin lid',[.9,.12,.9],[x,1.12,z],M.dark);}
 for(const z of [-24,24]){cylinder(scene,[.09,.12,7],[0,3.5,z],M.dark,10);box(scene,'street light arm',[2.2,.1,.1],[z<0?1:-1,6.6,z],M.dark);box(scene,'street light',[.5,.18,.35],[z<0?2:-2,6.45,z],M.yellow);}
 for(const z of [-11,11]){box(scene,'traffic barrier',[3,.85,.28],[0,.42,z],mat(0x9b4e39),{solid:true});for(let i=-1;i<=1;i++)box(scene,'barrier stripe',[.24,.88,.3],[i*.85,.43,z-.02],M.trim,{rotation:[0,0,.2]});}
}
const weaponRoot=new THREE.Group();
function buildWeaponModel(){
 weaponRoot.position.set(.28,-.3,-.55);camera.add(weaponRoot);scene.add(camera);const metal=mat(0x343b3c,.42,.55),poly=mat(0x202728,.72),wood=mat(0x554435);
 box(weaponRoot,'receiver',[.15,.16,.48],[0,0,0],metal);box(weaponRoot,'handguard',[.13,.14,.36],[0,-.005,-.4],poly);box(weaponRoot,'stock',[.12,.13,.28],[0,-.025,.34],poly);box(weaponRoot,'grip',[.12,.22,.13],[0,-.16,.11],wood,{rotation:[-.22,0,0]});box(weaponRoot,'barrel',[.055,.055,.38],[0,.025,-.75],metal);box(weaponRoot,'muzzle',[.085,.08,.08],[0,.025,-.96],M.dark);box(weaponRoot,'magazine',[.11,.25,.16],[0,-.2,-.08],poly,{rotation:[-.1,0,0]});box(weaponRoot,'sight base',[.12,.04,.16],[0,.105,-.2],M.dark);box(weaponRoot,'sight',[.035,.13,.045],[0,.18,-.21],M.yellow);
 const hand=mat(0xb27c5e);for(const side of [-1,1]){const palm=new THREE.Mesh(new THREE.SphereGeometry(.09,10,8),hand);palm.position.set(side*.13,-.11,side<0?-.38:.18);weaponRoot.add(palm);}
}
function buildBot(team,index){
 const g=new THREE.Group(),blue=team==='blue',cloth=mat(blue?0x3c6179:0x8e433b),pants=mat(blue?0x263e50:0x4c3432),skin=mat(0xb78768),gear=mat(0x303638);scene.add(g);
 box(g,'bot torso',[.57,.72,.34],[0,1.18,0],cloth);box(g,'plate carrier',[.59,.48,.09],[0,1.25,-.19],gear);box(g,'belt',[.59,.1,.35],[0,.8,0],gear);
 const head=new THREE.Mesh(new THREE.SphereGeometry(.2,12,10),skin);head.position.set(0,1.72,0);head.castShadow=true;g.add(head);const helmet=new THREE.Mesh(new THREE.SphereGeometry(.22,12,7,0,Math.PI*2,0,Math.PI*.56),gear);helmet.position.set(0,1.78,0);helmet.castShadow=true;g.add(helmet);
 const limbs=[];for(const side of [-1,1]){const arm=box(g,'arm',[.19,.56,.2],[side*.39,1.18,-.02],cloth);box(g,'leg',[.22,.62,.24],[side*.17,.39,0],pants);limbs.push(arm);box(g,'boot',[.25,.16,.34],[side*.17,.08,-.05],M.dark);}
 box(g,'bot rifle',[.12,.12,.72],[.18,1.14,-.38],metalForBot);g.userData={team,index,head,limbs,hp:100,alive:true,think:Math.random()*1.5,fire:1+Math.random()*2,phase:Math.random()*6,target:new THREE.Vector3(),name:['HAVOC','REAPER','GHOST','VIPER','WRAITH','NOMAD'][index%6]};bots.push(g);return g;
}
const metalForBot=mat(0x292f31,.45,.5);
function spawnBots(){bots.splice(0,bots.length);for(let i=0;i<6;i++)buildBot('red',i);for(let i=0;i<3;i++)buildBot('blue',i+6);bots.forEach((b,i)=>respawnBot(b,i));}
function respawnBot(bot,index){const blue=bot.userData.team==='blue',positions=blue?[[-7,-23],[-4,-20],[-8,-17]]:[[7,23],[4,20],[8,17],[7,-22],[5,-18],[8,-14]],p=positions[index%positions.length];bot.position.set(p[0]+(Math.random()-.5)*1.8,0,p[1]+(Math.random()-.5)*2);bot.rotation.y=blue?Math.PI:0;bot.visible=true;bot.userData.hp=100;bot.userData.alive=true;bot.userData.fire=.7+Math.random()*1.8;bot.userData.think=.2;}
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function notify(main,sub='',duration=1.8){$('notify').querySelector('.n-main').textContent=main;$('notify').querySelector('.n-sub').textContent=sub;$('notify').classList.add('show');notifyTimer=duration;}
function setWeapon(index){weaponIndex=index;const w=weapons[index];$('weaponName').textContent=w.name;$('weaponMode').textContent=w.mode;$('ammoMag').textContent=w.mag;$('ammoRes').textContent='/ '+w.reserve;$('wl1').classList.toggle('active',index!==3);$('wl2').classList.toggle('active',index===3);$('scope').classList.remove('on');$('crosshair').classList.remove('ads');player.aiming=false;camera.fov=76;camera.updateProjectionMatrix();audio.equip();}
function syncMatchTimer(){const seconds=Math.ceil(matchTime);if(seconds!==hudMatchSecond){hudMatchSecond=seconds;$('matchTimer').textContent=`${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;}}
function syncHud(){const w=weapons[weaponIndex];$('scoreBlue').textContent=blueScore;$('scoreRed').textContent=redScore;syncMatchTimer();$('healthfill').style.width=`${player.health}%`;$('hud').classList.toggle('hurt',player.health<35);$('ammoMag').textContent=w.mag;$('ammoMag').classList.toggle('low',w.mag<=Math.ceil(w.magSize*.2));$('ammoRes').textContent='/ '+w.reserve;$('fragCount').textContent='×'+player.frag;$('reloadHint').classList.toggle('show',player.reloading);}
function pushFeed(killer,victim,team='red'){const row=document.createElement('div');row.className='kf';row.innerHTML=`<b>${killer}</b><span> ELIMINATED </span><i>${victim}</i>`;$('killfeed').prepend(row);while($('killfeed').children.length>5)$('killfeed').lastChild.remove();setTimeout(()=>row.remove(),6500);}
function startMatch(){audio.init();audio.click();active=true;paused=false;ended=false;matchTime=360;hudMatchSecond=-1;blueScore=redScore=0;player.health=100;player.alive=true;player.kills=player.deaths=player.score=player.shots=player.hits=player.streak=0;player.frag=selectedClass===2?1:2;player.pos.set(0,1.72,12);player.vel.set(0,0,0);player.yaw=Math.PI;player.pitch=0;weapons.forEach(w=>{w.mag=w.magSize;w.reserve=w.kind==='sniper'?40:180;});weaponIndex=selectedClass===2?2:selectedClass===1?1:0;spawnBots();$('menu').classList.add('hidden');$('endscreen').classList.add('hidden');$('pause').classList.add('hidden');$('death').classList.remove('on');$('hud').classList.remove('hidden');$('clickcatch').classList.add('hidden');$('killfeed').innerHTML='';setWeapon(weaponIndex);syncHud();requestPointer();}
function requestPointer(){if(active&&!paused&&document.pointerLockElement!==$('game'))$('game').requestPointerLock?.();}
function pauseMatch(){if(!active||ended)return;paused=true;$('pause').classList.remove('hidden');document.exitPointerLock?.();}
function resumeMatch(){paused=false;$('pause').classList.add('hidden');requestPointer();}
function finishMatch(){ended=true;active=false;document.exitPointerLock?.();const win=blueScore>=redScore;$('endResult').textContent=win?'VICTORY':'DEFEAT';$('endResult').className=win?'win':'loss';$('esKills').textContent=player.kills;$('esDeaths').textContent=player.deaths;$('esKd').textContent=(player.kills/Math.max(1,player.deaths)).toFixed(2);$('esScore').textContent=player.score;$('esAcc').textContent=Math.round(player.hits/Math.max(1,player.shots)*100)+'%';$('endscreen').classList.remove('hidden');}
function startReload(){const w=weapons[weaponIndex];if(player.reloading||w.mag===w.magSize||w.reserve<=0)return;player.reloading=true;player.reloadAt=performance.now()/1000+w.reload;audio.reload(weaponIndex===1);syncHud();}
function completeReload(){const w=weapons[weaponIndex],need=w.magSize-w.mag,take=Math.min(need,w.reserve);w.mag+=take;w.reserve-=take;player.reloading=false;syncHud();}
function cameraForward(){return new THREE.Vector3(-Math.sin(player.yaw)*Math.cos(player.pitch),Math.sin(player.pitch),-Math.cos(player.yaw)*Math.cos(player.pitch));}
function getBotRoot(object){while(object&&object!==scene){if(bots.includes(object))return object;object=object.parent;}return null;}
function visibleTarget(target){const origin=camera.position.clone(),delta=target.clone().sub(origin),distance=delta.length();raycaster.set(origin,delta.normalize());const hits=raycaster.intersectObjects(solids.map(s=>s.mesh),false);return !hits.length||hits[0].distance>distance;}
function showHit(kill=false){$('hitmarker').classList.add('show');hitTimer=.16;if(kill){$('killconfirm').classList.add('show');killTimer=.85;}}
function damagePlayer(amount,source){if(!player.alive||!active)return;player.health-=amount;player.lastDamage=performance.now()/1000;damageFlash=.45;$('hurt').style.opacity='.78';audio.hurt();const arcs=$('dmgArcs');const arc=document.createElement('i');arc.className='arc';arc.style.transform=`rotate(${Math.random()*360}deg)`;arc.style.opacity='.9';arcs.appendChild(arc);setTimeout(()=>arc.remove(),650);if(player.health<=0)killPlayer(source);syncHud();}
function killPlayer(source){player.health=0;player.alive=false;player.deaths++;player.streak=0;player.respawn=3;player.respawnAt=performance.now()/1000+3;player.vel.set(0,0,0);$('deathKiller').textContent=source?.userData.name||'CELL SOLDIER';$('deathWeapon').textContent='MTAR';$('death').classList.add('on');$('spectateTag').classList.remove('hidden');audio.death();redScore++;syncHud();pushFeed(source?.userData.name||'CELL SOLDIER','YOU','red');}
function eliminateBot(bot,byPlayer=false){if(!bot.userData.alive)return;bot.userData.alive=false;bot.visible=false;bot.userData.respawnAt=performance.now()/1000+2.6;if(byPlayer){player.kills++;player.score+=100;player.streak++;blueScore++;audio.kill();showHit(true);pushFeed('YOU',bot.userData.name);if(player.streak===3||player.streak===4||player.streak===5){audio.streakReady();$('streak'+(player.streak-3))?.classList.add('ready');notify('SCORESTREAK READY',`PRESS ${player.streak} TO DEPLOY`);}}else{redScore++;pushFeed('BLACKOUT',bot.userData.name,'blue');}syncHud();if(blueScore>=50||redScore>=50)finishMatch();}
function fireWeapon(){if(!active||paused||!player.alive||player.reloading)return;const w=weapons[weaponIndex],now=performance.now()/1000;if(now<player.fireAt)return;if(w.mag<=0){audio.dry();startReload();return;}player.fireAt=now+w.rate;w.mag--;player.shots++;player.vel.addScaledVector(cameraForward(),weaponIndex===2?.06:.018);weaponRoot.position.z=-.55+.035;weaponRoot.rotation.x=-.04;audio.shot(w.kind);const spread=w.spread*(player.aiming?.42:1)*(player.sprint?1.8:1)+shotSpread;const dir=cameraForward();dir.x+=(Math.random()-.5)*spread;dir.y+=(Math.random()-.5)*spread;dir.z+=(Math.random()-.5)*spread;dir.normalize();raycaster.set(camera.position,dir);raycaster.far=w.range;const targets=[...solids.map(s=>s.mesh),...bots.filter(b=>b.userData.alive)];const hit=raycaster.intersectObjects(targets,true)[0];if(hit){const bot=getBotRoot(hit.object);if(bot&&bot.userData.team==='red'){player.hits++;const head=hit.object===bot.userData.head||hit.object.name==='';audio.hit(head);showHit(false);bot.userData.hp-=head?Math.max(100,w.damage*1.5):w.damage;if(bot.userData.hp<=0)eliminateBot(bot,true);}}shotSpread=Math.min(.025,shotSpread+.0025);syncHud();}
function knife(){if(!active||!player.alive)return;audio.noiseBurst(.08,.14,'bandpass',900,180,0,2);raycaster.set(camera.position,cameraForward());raycaster.far=2.3;const hit=raycaster.intersectObjects(bots.filter(b=>b.userData.alive),true)[0];const bot=hit&&getBotRoot(hit.object);if(bot&&bot.userData.team==='red'){player.hits++;bot.userData.hp=0;eliminateBot(bot,true);}}
function throwGrenade(){if(!active||!player.alive||player.frag<=0||grenadeCooldown>0)return;player.frag--;grenadeCooldown=1;const g=new THREE.Mesh(new THREE.SphereGeometry(.12,12,10),M.dark);g.position.copy(camera.position);g.userData={velocity:cameraForward().multiplyScalar(13).add(new THREE.Vector3(0,4,0)),fuse:1.55};scene.add(g);effects.push({type:'grenade',mesh:g});audio.click();syncHud();}
function explode(position){audio.explosion();const flash=new THREE.PointLight(0xff9a47,18,11,2);flash.position.copy(position);scene.add(flash);effects.push({type:'flash',light:flash,time:.3});const ring=new THREE.Mesh(new THREE.SphereGeometry(.2,12,8),new THREE.MeshBasicMaterial({color:0xff9a42,transparent:true,opacity:.8}));ring.position.copy(position);scene.add(ring);effects.push({type:'blast',mesh:ring,time:.4});for(const bot of bots){if(!bot.userData.alive||bot.userData.team!=='red')continue;const d=bot.position.distanceTo(position);if(d<7&&visibleTarget(bot.position.clone().add(new THREE.Vector3(0,1,0)))){bot.userData.hp-=Math.max(0,140-d*16);if(bot.userData.hp<=0)eliminateBot(bot,true);}}if(player.pos.distanceTo(position)<5)damagePlayer(35,'FRAG');}
function deployStreak(index){if(!active||player.streak<index+3)return;player.streak-=index+3;$('streak'+index)?.classList.remove('ready');audio.streakLaunch();if(index===0){uavTimer=12;notify('UAV ONLINE','ENEMY POSITIONS REVEALED',2);audio.uav();}else if(index===1){const targets=bots.filter(b=>b.userData.alive&&b.userData.team==='red').sort((a,b)=>a.position.distanceTo(player.pos)-b.position.distanceTo(player.pos)).slice(0,2);for(const b of targets)eliminateBot(b,true);notify('HUNTER KILLER','TARGETS ELIMINATED',2);}else{let hits=0;for(const b of bots.filter(x=>x.userData.alive&&x.userData.team==='red')){if(Math.random()<.72){eliminateBot(b,true);hits++;}}notify('LIGHTNING STRIKE',`${hits} TARGET${hits===1?'':'S'} HIT`,2.5);}syncHud();}
function collides(x,z){for(const s of solids){const b=s.box;if(player.pos.y< b.min.y-.1||player.pos.y-1.6>b.max.y+.3)continue;if(x>b.min.x-.34&&x<b.max.x+.34&&z>b.min.z-.34&&z<b.max.z+.34)return true;}return false;}
function movePlayer(dt){if(!player.alive)return;const forward=new THREE.Vector3(-Math.sin(player.yaw),0,-Math.cos(player.yaw)),right=new THREE.Vector3(Math.cos(player.yaw),0,-Math.sin(player.yaw));const wish=new THREE.Vector3();if(keys.has('KeyW'))wish.add(forward);if(keys.has('KeyS'))wish.sub(forward);if(keys.has('KeyD'))wish.add(right);if(keys.has('KeyA'))wish.sub(right);if(wish.lengthSq())wish.normalize();player.sprint=keys.has('ShiftLeft')||keys.has('ShiftRight');const crouch=keys.has('ControlLeft')||keys.has('ControlRight'),speed=player.sprint?9.2:crouch?3.1:6.3;const accel=wish.lengthSq()?38:28;player.vel.x+=(wish.x*speed-player.vel.x)*Math.min(1,accel*dt);player.vel.z+=(wish.z*speed-player.vel.z)*Math.min(1,accel*dt);const nx=clamp(player.pos.x+player.vel.x*dt,-9.6,9.6),nz=clamp(player.pos.z+player.vel.z*dt,-28,28);if(!collides(nx,player.pos.z))player.pos.x=nx;else player.vel.x=0;if(!collides(player.pos.x,nz))player.pos.z=nz;else player.vel.z=0;const ground= crouch?1.12:1.72;if(player.pos.y<=ground+.01){player.pos.y=ground;if(keys.has('Space'))player.vel.y=6.2;}else player.vel.y-=18*dt;player.pos.y=Math.max(ground,player.pos.y+player.vel.y*dt);if(player.pos.y===ground)player.vel.y=0;const moving=wish.lengthSq()>0;if(moving){bobTime+=dt*(player.sprint?14:9);audio.step();}else bobTime*=.92;camera.position.copy(player.pos);camera.position.y+=(moving?Math.sin(bobTime)*.035:0);camera.rotation.set(player.pitch,player.yaw,0,'YXZ');weaponRoot.position.y=-.3+Math.abs(Math.sin(bobTime))*.012;weaponRoot.position.x=.28+Math.sin(bobTime*.5)*.01;}
function updateBots(dt){const now=performance.now()/1000;for(let i=0;i<bots.length;i++){const b=bots[i],u=b.userData;if(!u.alive){if(active&&now>=u.respawnAt)respawnBot(b,i);continue;}let target=null,targetDist=1e9;if(u.team==='red'){if(player.alive){target=player.pos;targetDist=b.position.distanceTo(target);}for(const ally of bots){if(ally.userData.alive&&ally.userData.team==='blue'){const d=b.position.distanceTo(ally.position);if(d<targetDist){target=ally.position.clone().add(new THREE.Vector3(0,1,0));targetDist=d;}}}}else{for(const enemy of bots){if(enemy.userData.alive&&enemy.userData.team==='red'){const d=b.position.distanceTo(enemy.position);if(d<targetDist){target=enemy.position.clone().add(new THREE.Vector3(0,1,0));targetDist=d;}}}}if(!target)continue;const dx=target.x-b.position.x,dz=target.z-b.position.z,dist=Math.hypot(dx,dz),desired=Math.atan2(-dx,-dz);b.rotation.y=desired;u.think-=dt;if(dist>7&&u.think<=0){const pace=(u.team==='red'?1:0.72)*dt;b.position.x+=Math.sin(desired)*pace*3.1;b.position.z+=Math.cos(desired)*pace*3.1;b.position.x=clamp(b.position.x,-9,9);b.position.z=clamp(b.position.z,-27,27);u.phase+=dt*8;for(let j=0;j<u.limbs.length;j++)u.limbs[j].rotation.x=Math.sin(u.phase+(j%2)*Math.PI)*.35;}else u.limbs.forEach(l=>l.rotation.x=0);u.fire-=dt;if(dist<34&&u.fire<=0&&visibleTarget(target.clone().setY(target.y||1.3))){u.fire=.5+Math.random()*(u.team==='red'?.85:1.5);if(u.team==='red'&&player.alive&&Math.random()<.38)damagePlayer(6+Math.random()*9,b);else if(u.team==='blue'){const enemy=bots.filter(x=>x.userData.alive&&x.userData.team==='red').sort((a,c)=>a.position.distanceTo(b.position)-c.position.distanceTo(b.position))[0];if(enemy&&Math.random()<.4){enemy.userData.hp-=18;if(enemy.userData.hp<=0)eliminateBot(enemy,false);}}}if(u.team==='red'&&player.alive&&dist<1.6&&Math.random()<dt*1.5)damagePlayer(8,b);}}

let sensitivity=1,scoreboard=null;
function drawMinimap(now){
 const canvas=$('minimap'),ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height,cx=w/2,cy=h/2,scale=4.8;
 ctx.clearRect(0,0,w,h);ctx.fillStyle='rgba(16,23,21,.9)';ctx.fillRect(0,0,w,h);
 const px=(x)=>cx+(x-player.pos.x)*scale,py=(z)=>cy+(z-player.pos.z)*scale;
 ctx.save();ctx.translate(cx,cy);ctx.rotate(-player.yaw);ctx.translate(-cx,-cy);
 ctx.fillStyle='#414745';ctx.fillRect(px(-7.5),py(-29),15*scale,58*scale);
 ctx.fillStyle='#77776d';ctx.fillRect(px(-10),py(-2),20*scale,4*scale);
 ctx.fillStyle='#7d8175';ctx.fillRect(px(-21),py(-23),12*scale,10*scale);ctx.fillRect(px(9),py(13),12*scale,10*scale);
 for(const [x,z] of [[-8,-10],[8,10],[-7,6],[7,-6],[-3,14],[3,-14]]){ctx.fillStyle='#c1a757';ctx.fillRect(px(x)-4,py(z)-4,8,8);}
 for(const b of bots){if(!b.userData.alive)continue;const reveal=b.userData.team==='blue'||(uavTimer>0&&b.userData.team==='red');if(!reveal)continue;ctx.fillStyle=b.userData.team==='red'?'#ff6657':'#6db7ff';ctx.beginPath();ctx.arc(px(b.position.x),py(b.position.z),b.userData.team==='red'?5:4,0,Math.PI*2);ctx.fill();}
 ctx.restore();ctx.fillStyle='#f6f1dc';ctx.beginPath();ctx.moveTo(cx,cy-8);ctx.lineTo(cx-5,cy+6);ctx.lineTo(cx,cy+3);ctx.lineTo(cx+5,cy+6);ctx.closePath();ctx.fill();
 $('mmCompass').textContent=['N','E','S','W'][Math.round(((player.yaw%(Math.PI*2)+Math.PI*2)%(Math.PI*2))/(Math.PI/2))%4];
}
function showScoreboard(show){
 if(!scoreboard){scoreboard=document.createElement('div');scoreboard.id='scoreboard';scoreboard.style.cssText='position:fixed;z-index:24;left:50%;top:50%;transform:translate(-50%,-50%);min-width:330px;padding:20px 26px;background:rgba(5,8,9,.92);border:1px solid #87938a;color:#edf2e8;text-align:center;font:700 13px Arial,sans-serif;letter-spacing:.14em;pointer-events:none';document.body.appendChild(scoreboard);}
 scoreboard.innerHTML=`TEAM DEATHMATCH<br><br><span style="color:#84beff">BLACKOUT ${blueScore}</span> &nbsp;—&nbsp; <span style="color:#ff887a">CELL ${redScore}</span><br><br><span style="font-size:10px;color:#aab6ac">YOU  ${player.kills} KILLS / ${player.deaths} DEATHS</span>`;
 scoreboard.style.display=show?'block':'none';
}
function update(dt,now,realDt=dt){
 if(!active||paused||ended)return;
 matchTime-=realDt;if(matchTime<=0){matchTime=0;finishMatch();return;}syncMatchTimer();
 if(player.reloading&&now>=player.reloadAt)completeReload();
 if(!player.alive&&now>=player.respawnAt){player.alive=true;player.health=100;player.pos.set((Math.random()-.5)*8,1.72,Math.random()<.5?22:-22);player.vel.set(0,0,0);$('death').classList.remove('on');$('spectateTag').classList.add('hidden');notify('DEPLOYED','BACK IN THE FIGHT',1.2);syncHud();}
 if(player.alive)movePlayer(dt);
 updateBots(dt);
 for(let i=effects.length-1;i>=0;i--){const e=effects[i];if(e.type==='grenade'){
   e.mesh.userData.fuse-=dt;e.mesh.userData.velocity.y-=9.8*dt;e.mesh.position.addScaledVector(e.mesh.userData.velocity,dt);
   if(e.mesh.position.y<.14){e.mesh.position.y=.14;e.mesh.userData.velocity.y=Math.abs(e.mesh.userData.velocity.y)*.45;e.mesh.userData.velocity.x*=.72;e.mesh.userData.velocity.z*=.72;}
   for(const s of solids){if(s.box.containsPoint(e.mesh.position)){e.mesh.userData.velocity.multiplyScalar(-.45);e.mesh.position.addScaledVector(e.mesh.userData.velocity,dt);break;}}
   if(e.mesh.userData.fuse<=0){const p=e.mesh.position.clone();scene.remove(e.mesh);effects.splice(i,1);explode(p);}
  }else if(e.type==='flash'){e.time-=dt;e.light.intensity=Math.max(0,e.time*50);if(e.time<=0){scene.remove(e.light);effects.splice(i,1);}}
  else if(e.type==='blast'){e.time-=dt;e.mesh.scale.setScalar(1+(0.4-e.time)*12);e.mesh.material.opacity=Math.max(0,e.time*2);if(e.time<=0){scene.remove(e.mesh);e.mesh.geometry.dispose();e.mesh.material.dispose();effects.splice(i,1);}}
 }
 if(uavTimer>0)uavTimer=Math.max(0,uavTimer-dt);
 if(notifyTimer>0){notifyTimer-=dt;if(notifyTimer<=0)$('notify').classList.remove('show');}
 if(hitTimer>0){hitTimer-=dt;if(hitTimer<=0)$('hitmarker').classList.remove('show');}
 if(killTimer>0){killTimer-=dt;if(killTimer<=0)$('killconfirm').classList.remove('show');}
 if(damageFlash>0){damageFlash-=dt;if(damageFlash<=0)$('hurt').style.opacity='0';}
 shotSpread=Math.max(0,shotSpread-dt*.018);
 if(weaponRoot.position.z<-.55)weaponRoot.position.z=Math.min(-.55,weaponRoot.position.z+dt*.22);
 if(weaponRoot.rotation.x<0)weaponRoot.rotation.x=Math.min(0,weaponRoot.rotation.x+dt*.35);
 if(now-lastMinimap>.12){drawMinimap(now);lastMinimap=now;}
 $('pauseScore').textContent=`${blueScore} — ${redScore}`;
}
function frame(){requestAnimationFrame(frame);const realDt=clock.getDelta(),dt=Math.min(realDt,.05),now=performance.now()/1000;update(dt,now,realDt);renderer.render(scene,camera);}
function selectClass(index){selectedClass=index;document.querySelectorAll('.loadout').forEach((el,i)=>el.classList.toggle('active',i===index));audio.click();}
function setSensitivity(value){sensitivity=Number(value)/100;$('sensVal').textContent=sensitivity.toFixed(2);$('sensInput').value=value;$('pauseSens').value=value;}
$('loadouts').addEventListener('click',e=>{const card=e.target.closest('[data-loadout]');if(card)selectClass(Number(card.dataset.loadout));});
$('deployBtn').addEventListener('click',startMatch);$('resumeBtn').addEventListener('click',resumeMatch);
$('quitBtn').addEventListener('click',()=>{active=false;paused=false;document.exitPointerLock?.();$('pause').classList.add('hidden');$('hud').classList.add('hidden');$('menu').classList.remove('hidden');$('death').classList.remove('on');});
$('againBtn').addEventListener('click',startMatch);$('menuBtn').addEventListener('click',()=>{$('endscreen').classList.add('hidden');$('hud').classList.add('hidden');$('menu').classList.remove('hidden');});
$('sensInput').addEventListener('input',e=>setSensitivity(e.target.value));$('pauseSens').addEventListener('input',e=>setSensitivity(e.target.value));
$('game').addEventListener('click',()=>{if(active&&!paused&&document.pointerLockElement!==$('game'))requestPointer();});
document.addEventListener('pointerlockchange',()=>{if(document.pointerLockElement===$('game')){$('clickcatch').classList.add('hidden');}else if(active&&!paused&&!ended){$('clickcatch').classList.remove('hidden');}});
document.addEventListener('mousemove',e=>{if(!active||paused||!player.alive||document.pointerLockElement!==$('game'))return;player.yaw-=e.movementX*.0022*sensitivity;player.pitch=clamp(player.pitch-e.movementY*.0022*sensitivity,-1.45,1.45);});
document.addEventListener('mousedown',e=>{if(!active||paused)return;if(document.pointerLockElement!==$('game')){requestPointer();return;}if(e.button===0){mouseHeld=true;fireWeapon();}if(e.button===2){player.aiming=true;$('scope').classList.toggle('on',weaponIndex===2);$('crosshair').classList.toggle('ads',weaponIndex===2);camera.fov=weaponIndex===2?32:62;camera.updateProjectionMatrix();}});
document.addEventListener('mouseup',e=>{if(e.button===0)mouseHeld=false;if(e.button===2){player.aiming=false;$('scope').classList.remove('on');$('crosshair').classList.remove('ads');camera.fov=76;camera.updateProjectionMatrix();}});
document.addEventListener('contextmenu',e=>e.preventDefault());
document.addEventListener('keydown',e=>{
 if(['Space','Tab'].includes(e.code))e.preventDefault();keys.add(e.code);
 if(e.repeat)return;
 if(e.code==='Escape'){if(active&&!ended){if(paused)resumeMatch();else pauseMatch();}}
 if(e.code==='KeyR')startReload();if(e.code==='KeyG')throwGrenade();if(e.code==='KeyV')knife();
 if(e.code==='Digit1')setWeapon(weaponIndex===3?0:selectedClass===2?2:selectedClass===1?1:0);
 if(e.code==='Digit2')setWeapon(weaponIndex===3?0:3);
 if(e.code==='Digit3')deployStreak(0);if(e.code==='Digit4')deployStreak(1);if(e.code==='Digit5')deployStreak(2);
 if(e.code==='Tab')showScoreboard(true);
 if(e.code==='Space'&&player.alive)player.vel.y=Math.max(player.vel.y,6.2);
});
document.addEventListener('keyup',e=>{keys.delete(e.code);if(e.code==='Tab')showScoreboard(false);});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&active&&!paused)pauseMatch();});
window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(devicePixelRatio,1.65));});
function boot(){buildWorld();spawnBots();camera.position.copy(player.pos);camera.rotation.set(0,Math.PI,0,'YXZ');setWeapon(0);$('ldFill').style.width='100%';$('ldTxt').textContent='READY TO DEPLOY';setTimeout(()=>{$('loading').classList.add('gone');setTimeout(()=>$('loading').remove(),450);},350);frame();}
try{boot();}catch(error){console.error('BLACKOUT boot failed:',error);$('ldTxt').textContent='SIMULATION ERROR — SEE CONSOLE';}

