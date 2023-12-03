// Nav bar actions
const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");

const brownName = document.querySelector("#brown");
const brownDisc = document.querySelector("#brownDisc");
const straightDisc = document.querySelector("#straight");
const dhaliDisc = document.querySelector("#dhali");
const photo = document.querySelector("#headerPhoto");

const main = document.querySelector("#theMain");
const content = document.querySelector("#content");
const article = document.querySelector("#article");
const sidebar = document.querySelector("#sidebar");

const flowTxt = document.querySelector("#excessText");
const accessPoint = document.querySelector("#addPoint");

const testimonial = document.querySelector("#testimonal-carousel");
const testimonialCards = document.getElementsByClassName("testimonal-card");

let removed = false;


// document.addEventListener("DOMContentLoaded", function() {

// });

function fitContent(){
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth >= 1030){
    testimonial.style.flexDirection = "row";
    main.style.marginBottom = "50px";
    for(let i = 0; i < testimonialCards.length; i++){
      testimonialCards[i].style.flexDirection = "column";
      testimonialCards[i].style.width = "500px";
      testimonialCards[i].style.marginBottom = "0px";
      testimonialCards[i].childNodes[1].style.marginBottom = "20px";
      testimonialCards[i].childNodes[1].style.height = "150px";
      testimonialCards[i].childNodes[1].childNodes[1].style.transform = "translateY(0px)";
      testimonialCards[i].childNodes[1].childNodes[3].style.marginTop = "-25px";
      testimonialCards[i].childNodes[1].childNodes[3].style.fontSize = "20px";
    }
    if(removed){content.insertBefore(sidebar, article); article.insertBefore(flowTxt, accessPoint); removed = false;}
    main.style.padding = "0 6rem";
    content.style.width = "1000px";
    article.style.width = "80%";
    photo.style.width = "90vw";
    try{
      photo.style.width = "980px";
    }catch{}
    try{
      brownName.style.fontSize = "28";
      brownDisc.style.fontSize = "28px";
      straightDisc.style.fontSize = "28px";
      dhaliDisc.style.fontSize = "28px";
    }catch{}
  }
  else if(viewportWidth < 1030 && viewportWidth > 800){
    testimonial.style.flexDirection = "column";
    main.style.marginBottom = "25px";
    for(let i = 0; i < testimonialCards.length; i++){
      testimonialCards[i].style.flexDirection = "row";
      testimonialCards[i].style.width = "95%";
      testimonialCards[i].style.marginBottom = "20px";
      testimonialCards[i].childNodes[1].style.marginBottom = "0px";
      testimonialCards[i].childNodes[1].style.height = "150px";
      testimonialCards[i].childNodes[1].childNodes[1].style.transform = "translateY(0px)";
      testimonialCards[i].childNodes[1].childNodes[3].style.marginTop = "-25px";
      testimonialCards[i].childNodes[1].childNodes[3].style.fontSize = "20px";
    }
    main.style.padding = "0 1rem";
    content.style.width = "100%";
    article.style.width = "100%";
    photo.style.width = "90vw";
    sidebar.remove();
    flowTxt.remove();
    removed = true;
  }
  else{
    console.log("alive");
    testimonial.style.flexDirection = "column";
    main.style.marginBottom = "25px";
    for(let i = 0; i < testimonialCards.length; i++){
      testimonialCards[i].style.flexDirection = "column";
      testimonialCards[i].style.width = "95%";
      testimonialCards[i].style.marginBottom = "20px";
      testimonialCards[i].childNodes[1].style.marginBottom = "10px";
      testimonialCards[i].childNodes[1].style.height = "150px";
      testimonialCards[i].childNodes[1].childNodes[1].style.transform = "translateY(0px)";
      testimonialCards[i].childNodes[1].childNodes[3].style.marginTop = "-35px";
      testimonialCards[i].childNodes[1].childNodes[3].style.fontSize = "20px";
    }
    try{
      brownName.style.fontSize = "25px";
      brownDisc.style.fontSize = "16px";
      straightDisc.style.fontSize = "16px";
      dhaliDisc.style.fontSize = "16px";
    }catch{}
  }
}

document.addEventListener("DOMContentLoaded", fitContent);
window.addEventListener("resize", fitContent);

const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);
