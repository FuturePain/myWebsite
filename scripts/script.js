// Nav bar actions
const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");

const brownName = document.querySelector("#brown");
const brownDisc = document.querySelector("#brownDisc");
const straightDisc = document.querySelector("#straight");
const dhaliDisc = document.querySelector("#dhali");

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

document.addEventListener("DOMContentLoaded", function() {
  if(viewportWidth < 450){
    brownName.style.fontSize = "25px";

    brownDisc.style.fontSize = "16px";
    straightDisc.style.fontSize = "16px";
    dhaliDisc.style.fontSize = "16px";
  }
});


const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);
