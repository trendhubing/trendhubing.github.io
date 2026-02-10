// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.onclick=e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  };
});

// CONFETTI
function confettiBurst(n=40){
  for(let i=0;i<n;i++){
    const c=document.createElement('div');
    c.className='confetti';
    c.style.left=Math.random()*100+'vw';
    c.style.background=`hsl(${Math.random()*360},100%,60%)`;
    c.style.animationDuration=(2+Math.random()*2)+'s';
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),4000);
  }
}
 

// CONFETTI ON LOAD
window.onload=()=>confettiBurst(60);

// HERO SPARKLES
const hero=document.querySelector('.hero');
for(let i=0;i<40;i++){
  const s=document.createElement('div');
  s.className='sparkleHero';
  s.style.left=Math.random()*100+'%';
  s.style.top=Math.random()*100+'%';
  s.style.width=2+Math.random()*4+'px';
  s.style.height=s.style.width;
  hero.appendChild(s);
}

// SEARCH BAR
const categories = [
{name:"Home", url:"../index.html"},
{name:"Adventures", url:"adventure.html"},
{name:"Anime", url:"anime.html"},
{name:"Black Pink", url:"bp.html"},
{name:"BTS", url:"bts.html"},
{name:"BTS Biography", url:"btsbiography.html"},
{name:"BTS Songs", url:"btssong.html"},
{name:"Cars", url:"car.html"},
{name:"Cartoon Movies", url:"cartoonmovie.html"},
{name:"Colors", url:"color.html"}, 
{name:"Cartoon Anime", url:"animatedcartoon.html"}, 
{name:"Comedy Anime", url:"comedyanime.html"},
{name:"Comedy Movies", url:"comedymovie.html"},
{name:"Desserts", url:"dessert.html"},
{name:"Electric Cars", url:"electriccar.html"},
{name:"Fashion", url:"fashion.html"},
{name:"Foods", url:"food.html"},
{name:"Games", url:"game.html"},
{name:"Indoor Games", url:"indoor.html"},
{name:"Jewelry", url:"jewelry.html"}, 
{name:"Kpop", url:"kpop.html"},   
{name:"Movies", url:"movie.html"},
{name:"Multiplayer Games", url:"multigame.html"},
{name:"Outdoor Games", url:"outdoor.html"},
{name:"PC Games", url:"pcgame.html"},
{name:"Rides", url:"ride.html"},
{name:"Spicy Foods", url:"spicyfood.html"},
{name:"Sport Cars", url:"sportcar.html"},
{name:"Sports", url:"sport.html"},
{name:"Travel", url:"travel.html"},
];

function livesearch() {
    const input = document.getElementById('searchinput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if(input === '') { resultsDiv.style.display = 'none'; return; }

    const filtered = categories.filter(cat => cat.name.toLowerCase().includes(input));
    if(filtered.length === 0) { resultsDiv.style.display = 'none'; return; }

    filtered.forEach(cat => {
        const div = document.createElement('div');
        div.textContent = cat.name;
        div.onclick = () => window.location.href = cat.url;
        resultsDiv.appendChild(div);
    });
    resultsDiv.style.display = 'block';
}

function searchfunction() {
    const query = document.getElementById('searchinput').value.toLowerCase().trim();
    const match = categories.find(cat => cat.name.toLowerCase() === query);
    if(match) {
        window.location.href = match.url;
    } else {
        alert("No results found for: " + query);
    }
}


// DOWNLOAD APP
let defferedPrompt;
const installBtn=document.getElementById("installBtn");
window.addEventListener("beforeinstallprompt",(e)=>{e.preventDefault();
defferedPrompt=e;installBtn.style.display="block";});
installBtn.addEventListener("click",()=>{defferedPrompt.prompt();
defferedPrompt.userChoice.then(()=>{installBtn.style.display="none";});
});

// SWIPE
document.addEventListener("DOMContentLoaded", () => {

  const bottomnav = document.getElementById("bottomnav");
  const swipeHint = document.getElementById("swipeHint");

  if (!bottomnav || !swipeHint) {
    console.error("Swipe hint elements not found");
    return;
  }

  let hintHidden = false;

  // Show hint only once
  if (!localStorage.getItem("swipeSeen")) {
    swipeHint.style.display = "block";

    setTimeout(() => {
      if (!hintHidden) {
        swipeHint.style.display = "none";
        localStorage.setItem("swipeSeen", "true");
        hintHidden = true;
      }
    }, 5000);
  }

  // Hide on swipe / scroll
  bottomnav.addEventListener("scroll", () => {
    if (!hintHidden) {
      swipeHint.style.display = "none";
      localStorage.setItem("swipeSeen", "true");
      hintHidden = true;
    }
  });

});;

// SHARE BUTTON
function copyLink() {
    navigator.clipboard.writeText('https://trendhubing-github.io').then(() => {
        alert('Link copied! You can paste it on Instagram bio or story.');
    });
}