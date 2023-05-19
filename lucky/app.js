let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click",function(){
    navbar.classList.toggle("active");
    menu.classList.toggle("bx-x");
})

window.addEventListener("scroll",function(){
    navbar.classList.remove("active");
    menu.classList.remove("bx-x");
})