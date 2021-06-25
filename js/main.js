$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dot: true,
        dotsSpeed: 7,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        }
    );
});


// Also can pass in optional settings block


AOS.init({
    duration: 1200,
});


// Show menu

const burgerMenu = document.querySelector('.mobile__menu')
const topMenu = document.querySelector('.header__menu')

burgerMenu.addEventListener('click', () => {
    topMenu.classList.toggle('show')
})


// Hide menu when click nav links/btn

const menuLinks = document.querySelectorAll('.header__link')
menuLinks.forEach(item => item.addEventListener('click', () => {
    topMenu.classList.remove('show')
}))