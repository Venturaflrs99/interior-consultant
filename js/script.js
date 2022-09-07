const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-mobile");

btnMenu.addEventListener('click',function(){
    nav.classList.toggle("open");
})

$(window).resize(function() {
    var $windowWidth = $(window).width();
    if($windowWidth>820) {
        if($('#nav-main').hasClass("open")){
            $('#nav-main').removeClass("open");
        }
    }
  }); 