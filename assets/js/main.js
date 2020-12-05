/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL PROJECTS*/
sr.reveal('.projects__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

// On Button//
const OnButton = document.querySelectorAll("a")[5];



//Binary text animation//
// Initialising the canvas
var canvas = document.querySelector('canvas'),
ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = '01';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
drops[i] = 1;
}

// Setting up the draw function
function draw() {
ctx.fillStyle = 'rgba(0, 0, 0, .1)';
ctx.fillRect(0, 0, canvas.width, canvas.height);
for (var i = 0; i < drops.length; i++) {
var text = letters[Math.floor(Math.random() * letters.length)];
ctx.fillStyle = '#fff';
ctx.fillText(text, i * fontSize, drops[i] * fontSize);
drops[i]++;
if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
  drops[i] = 0;
}
}
}
let interval;

// Power Button 
let toggle = false;
 OnButton.addEventListener("click", ()=> {
  toggle = !toggle;
  console.log(toggle);
  if (toggle === true){
    OnButton.classList.add("on");
    // // Section to show Media Player
    // if (toggle === true){
    // OnButton.classList.add("on");

    // Loop the animation
    interval = setInterval(draw, 33);
    // document.getElementsById("picchange").style.opacity = 1;
  } else {
    clearInterval(interval);
    OnButton.classList.remove("on");
    ctx.clearRect(0, 0, canvas.width, canvas.height)
//  Add hide media player instruction here
  }
})


