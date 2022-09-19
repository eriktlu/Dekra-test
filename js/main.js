const main = document.querySelector("main");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const menu_1 = document.querySelectorAll(".nav-list li a")[0];
const menu_2 = document.querySelectorAll(".nav-list li a")[1];

let elementsArray = [navToggle, menu_1, menu_2]

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", !primaryNav.hasAttribute("data-visible"));
        primaryNav.toggleAttribute("data-visible");
        main.toggleAttribute("data-overlay");
    })
})

main.addEventListener("click", () => {
    if(main.hasAttribute("data-overlay")){
        navToggle.setAttribute("aria-expanded", !primaryNav.hasAttribute("data-visible"));
        primaryNav.toggleAttribute("data-visible");
        main.toggleAttribute("data-overlay");
    }
})

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    arrows: false,
    passive: true
});