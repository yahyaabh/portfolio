let burger = document.getElementById("burger");
let nav =  document.getElementById("nav");
let navbar = document.getElementById("nav-bar");
burger.addEventListener("click", () => {
    nav.classList.toggle("show");
    if(navbar.style.height === "30vh"){
        navbar.style.height = "68px";
    }
    else {
        navbar.style.height = "30vh";
    }
});
/* elements*/
let hs = document.querySelectorAll("h2");
let span = document.querySelectorAll(".purple");
let logo = document.querySelector(".logo");
let links = document.querySelectorAll(".nav-bar-links");
let container = document.querySelectorAll(".container");
let project = document.querySelectorAll(".project");
let footer = document.getElementById("footer");
let btn = document.getElementById("switch-btn");
let about = document.getElementById("about-me");
let projects = document.getElementById("projects-box");
let laptop = document.getElementById("laptop");
let info = document.getElementById("info");
let burgerImg = document.getElementById("burger-img");



for(let i=0;i <links.length;i++){
    links[i].classList.remove("green-links")
}
logo.classList.remove("logo2");


btn.addEventListener("click",function(){
    for(let i=0;i<hs.length;i++){
        hs[i].classList.toggle("white-text")
    }


    for(let i=0;i<span.length;i++){
        span[i].classList.toggle("green-text")
    }


    logo.classList.toggle("green-text");

    for(let i=0;i<links.length;i++) {
        links[i].classList.toggle("white-text")
    }

 

    for(let i=0;i <links.length;i++){
        links[i].classList.toggle("green-links")
    }
    

    for(let i=0;i <container.length;i++){
        container[i].classList.toggle("black-bg")
    }


    for(let i=0;i <project.length;i++){
        project[i].classList.toggle("green-bg")
    }


    navbar.classList.toggle("black-bg");


    about.classList.toggle("black-bg");


    projects.classList.toggle("black-bg");


    footer.classList.toggle("black-bg");

    
    logo.classList.toggle("logo2");
    

    info.classList.toggle("white-text");

    document.body.classList.toggle("black-bg");

    burger.classList.toggle("green-bg");

    
})

