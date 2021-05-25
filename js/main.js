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

// ABOUT TABS
////////////////////////////////////////////////////////////////////////////////
function openTab(event, tabName) {
 
	var i, tabContent, tabLinks;
	tabContent = document.getElementsByClassName("tab-content");
	for (i = 0; i < tabContent.length; i++) {
	  tabContent[i].style.display = "none";
	}
	
	tabLinks = document.getElementsByClassName("tab-links");
	for (i = 0; i < tabLinks.length; i++) {
	  tabLinks[i].className = tabLinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
  }

// PORTFOLIO SIDEBAR FILTER
////////////////////////////////////////////////////////////////////////////////
const categoryTitle = document.querySelectorAll(".category-title");
const allCategoryPosts = document.querySelectorAll(".all");

for (let i = 0; i < categoryTitle.length; i++){
	categoryTitle[i].addEventListener("click", filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
	changeActivePosition(item);
	for (let i = 0; i < allCategoryPosts.length; i++){
		if(allCategoryPosts[i].classList.contains
			(item.attributes.id.value)){
				allCategoryPosts[i].style.display = "block";
			} else {
				allCategoryPosts[i].style.display = "none";
			}
	}
};

function changeActivePosition(activeItem){
	for (let i = 0; i < categoryTitle.length; i++){
		categoryTitle[i].classList.remove("category-active");
	}
	activeItem.classList.add("category-active");
}