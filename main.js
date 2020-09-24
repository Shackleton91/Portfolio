
// Hamburger Nav// 

var hamburger = document.querySelector('.navbar__hamburger');
var menuitem = document.querySelectorAll('.navbar__menuitem');
var icontop = document.querySelector('.navbar__hamburger-top');
var iconmiddle = document.querySelector('.navbar__hamburger-middle');
var iconbottom = document.querySelector('.navbar__hamburger-bottom');
// On Button//
const OnButton = document.querySelectorAll("a")[5];

console.log(OnButton)

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

// Loop the animation
setInterval(draw, 33);

// Power Button 
 OnButton.addEventListener("click", ()=> {
   OnButton.classList.add("on")
  //  add variables for button on i.e change color
  // variable.classlist.List.add
  
 }) 
  // Slider//
  var slider = {
  
    // Not sure if keeping element collections like this
    // together is useful or not.
    el: {
      slider: $("#slider"),
      allSlides: $(".slide"),
      sliderNav: $(".slider-nav"),
      allNavButtons: $(".slider-nav > a")
    },
    
    timing: 800,
    slideWidth: 300, 
    init: function() {
      this.bindUIEvents();
    },
    
    bindUIEvents: function() {
      // You can either manually scroll...
      this.el.slider.on("scroll", function(event) {
        slider.moveSlidePosition(event);
      });
      // ... or click a thing
      this.el.sliderNav.on("click", "a", function(event) {
        slider.handleNavClick(event, this);
      });
      // What would be cool is if it had touch
      // events where you could swipe but it
      // also kinda snapped into place.
    },
    
    moveSlidePosition: function(event) {
      // Magic Numbers =(
      this.el.allSlides.css({
        "background-position": $(event.target).scrollLeft()/6-100+ "px 0"
      });  
    },
    
    handleNavClick: function(event, el) {
      event.preventDefault();
      var position = $(el).attr("href").split("-").pop();
      
      this.el.slider.animate({
        scrollLeft: position * this.slideWidth
      }, this.timing);
      
      this.changeActiveNav(el);
    },
    
    changeActiveNav: function(el) {
      this.el.allNavButtons.removeClass("active");
      $(el).addClass("active");
    }
    
  };
  
  slider.init(); 

  // Contact Form