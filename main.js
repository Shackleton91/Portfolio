window.scrollTo(0,0);
// Hamburger Nav// 

var hamburger = document.querySelector('.navbar__hamburger');
var menuitem = document.querySelectorAll('.navbar__menuitem');
var icontop = document.querySelector('.navbar__hamburger-top');
var iconmiddle = document.querySelector('.navbar__hamburger-middle');
var iconbottom = document.querySelector('.navbar__hamburger-bottom');
// On Button//
const OnButton = document.querySelectorAll("a")[5];

// Opacity change function 
// const changePicBright =  document.getElementsById("picchange").style.opacity = 1; 
// const changePicDark =  // document.getElementsById("picchange").style.opacity = 0.6;

// Nav&Hamburger Nav
hamburger.addEventListener('click', function() {
    for (var i = 0; i < menuitem.length; i++) {
        menuitem[i].classList.toggle('navbar__menuitem--toggled');
    }
    hamburger.classList.toggle('navbar__hamburger--toggled');
    icontop.classList.toggle('navbar__hamburger-top--toggled');
    iconmiddle.classList.toggle('navbar__hamburger-middle--toggled');
    iconbottom.classList.toggle('navbar__hamburger-bottom--toggled');
});

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
    // Loop the animation
    interval = setInterval(draw, 33);
    // document.getElementsById("picchange").style.opacity = 1;
  } else {
    clearInterval(interval);
    OnButton.classList.remove("on");
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // document.getElementsById("picchange").style.opacity = 0.6;
  }
  
  //  OnButton.classList.remove("on")
 


  
  // variable.classlist.List.add
  

  
 }) 

//  ----------
//  Graph
// left = (i * 50 + 58) + "px";


// function makeGraph()
// {
//     var container = document.getElementById("graph");
//     var labels = document.getElementById("labels");
//     var dnl = container.getElementsByTagName("li");
//     for(var i = 0; i < dnl.length; i++)
//     {
//         var item = dnl.item(i);
//         var value = item.innerHTML;
//         var content = value.split(":");
//         value = content[0];
//         item.style.height=value + "px";
//         item.style.top=(199 - value) + "px";
//         item.style.left = (i * 50 + 20) + "px";
//         item.style.height = value + "px";
//         item.innerHTML = value;
//         item.style.visibility="visible";	
//         left = (i * 50 + 58) + "px";
//         labels.innerHTML = labels.innerHTML + 
//            "<span style='position:absolute;top:-16px;left:"+ 
//            left+";background:"+ color+"'>" + year + "</span>";
//     }	
// }

// window.onload=makeGraph;
 
    

  


  
  // Contact Form
  

  // Audio Player
  
