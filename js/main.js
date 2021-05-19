console.log('Welcome to my portfolio website!!');

// NAVBAR
////////////////////////////////////////////////////////////////////////////////
window.addEventListener(`scroll`, function(){
    let nav = document.querySelector(`nav`);
    nav.classList.toggle(`sticky`, window.scrollY > 0);
});

function toggleMenu(){
    let menuToggle = document.querySelector(`.toggle`);
    let menu = document.querySelector(`.menu`);
    menuToggle.classList.toggle(`active`);
    menu.classList.toggle(`active`);
} 

// Hover dropdown menu
let portfolio = document.querySelector("portfolio");
let dropdown = document.querySelector("dropdown");

portfolio.addEventListener("mouseover", function(ev){
	dropdown.style.visibility = "visible";
	dropdown.style.opacity = "1";
})
dropdown.addEventListener("mouseover", function(ev){
	dropdown.style.visibility = "visible";
	dropdown.style.opacity = "1";
})
portfolio.addEventListener("mouseout", function(ev){
	dropdown.style.visibility = "hidden";
	dropdown.style.opacity = "0";
})
dropdown.addEventListener("mouseout", function(ev){
	dropdown.style.visibility = "hidden";
	dropdown.style.opacity = "0";
})

// VANILLA-TILT
////////////////////////////////////////////////////////////////////////////////
VanillaTilt.init(document.querySelectorAll(".card"), {
	max: 25,
	speed: 400,
	glare: true,
	"max-glare": 1,
});

