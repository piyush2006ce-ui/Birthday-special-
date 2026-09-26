
// Birthday access lock: opens at 21 October, 12:00 AM India time.
const birthdayGate = document.getElementById("birthdayGate");
const gateDays = document.getElementById("gateDays");
const gateHours = document.getElementById("gateHours");
const gateMinutes = document.getElementById("gateMinutes");
const gateSeconds = document.getElementById("gateSeconds");

function indiaNowParts() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hour12: false
  }).formatToParts(new Date());
  const out = {};
  for (const p of parts) if (p.type !== "literal") out[p.type] = Number(p.value);
  return out;
}

function updateBirthdayGate() {
  const n = indiaNowParts();
  let year = n.year;
  let targetMs = Date.UTC(year, 9, 20, 18, 30, 0); // 21 Oct 00:00 IST
  let nowMs = Date.now();

  if (nowMs >= targetMs) {
    birthdayGate.classList.add("open");
    document.body.style.overflow = "";
    return;
  }

  const diff = targetMs - nowMs;
  gateDays.textContent = Math.floor(diff / 86400000);
  gateHours.textContent = String(Math.floor(diff / 3600000) % 24).padStart(2, "0");
  gateMinutes.textContent = String(Math.floor(diff / 60000) % 60).padStart(2, "0");
  gateSeconds.textContent = String(Math.floor(diff / 1000) % 60).padStart(2, "0");
  document.body.style.overflow = "hidden";
}

updateBirthdayGate();
setInterval(updateBirthdayGate, 1000);

const intro=document.getElementById('intro');const enter=document.getElementById('enter');enter.onclick=()=>{intro.classList.add('hide');document.getElementById('main').scrollIntoView({behavior:'smooth'});setTimeout(()=>document.getElementById('audio').play().then(()=>document.getElementById('musicBtn').textContent='❚❚').catch(()=>{}),500)};const a=document.getElementById('audio'),music=document.getElementById('musicBtn');music.onclick=()=>{if(a.paused){a.play().then(()=>music.textContent='❚❚').catch(()=>alert('Add music/tu-hi-tu.mp3 in the music folder first ❤️'))}else{a.pause();music.textContent='♫'}};document.getElementById('open').onclick=()=>{document.getElementById('main').scrollIntoView({behavior:'smooth'});a.play().then(()=>music.textContent='❚❚').catch(()=>{})};document.getElementById('wish').onclick=()=>{document.getElementById('final').classList.remove('hide');for(let i=0;i<70;i++){let x=document.createElement('span');x.textContent=['❤️','💗','✨','🌸','🎉'][Math.floor(Math.random()*5)];x.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:-20px;font-size:${12+Math.random()*22}px;z-index:50;transition:3s`;document.body.appendChild(x);requestAnimationFrame(()=>x.style.transform=`translate(${(Math.random()-.5)*180}px,${100+Math.random()*100}vh) rotate(${Math.random()*720}deg)`);setTimeout(()=>x.remove(),3200)}};function cd(){let n=new Date(),t=new Date(n.getFullYear(),9,21);if(n>=t)t=new Date(n.getFullYear()+1,9,21);let x=t-n;d.textContent=Math.floor(x/864e5);h.textContent=String(Math.floor(x/36e5)%24).padStart(2,'0');m.textContent=String(Math.floor(x/6e4)%60).padStart(2,'0');s.textContent=String(Math.floor(x/1e3)%60).padStart(2,'0')}cd();setInterval(cd,1000);setInterval(()=>{let x=document.createElement('span');x.textContent='♥';x.style.left=Math.random()*100+'vw';x.style.animationDuration=5+Math.random()*5+'s';document.querySelector('.hearts').appendChild(x);setTimeout(()=>x.remove(),10000)},700);