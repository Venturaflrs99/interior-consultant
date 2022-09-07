const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-mobile");

btnMenu.addEventListener('click',function(){
    nav.classList.toggle("open");
})