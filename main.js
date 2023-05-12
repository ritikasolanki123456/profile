var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// SCROLL TOP TO BACK
function scrollTopBack(){
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function (){
        var scroll = document.documentElement.scrollTop;
        if(scroll >=250){
            scrollTopButton.classList.add('scrollActive');
        }else{
            scrollTopButton.classList.remove('scrollActive');
        }
    }
}
scrollTopBack();

// side navigation bar close while we click on navigation links
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})









