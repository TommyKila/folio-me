import "./src/nav.js";

const slideUp = [...document.querySelectorAll('.slide-up')];

const intro = document.querySelector('.intro');

const introText = [...intro.querySelectorAll('span')];

document.addEventListener('DOMContentLoaded', function () {
    slideUp.forEach(function (items, index) {
        items.style.transform = 'translateY(0)';
        items.style.opacity = '1';
        items.style.transitionDelay = `${0 + index * 0.22}s`;
    });
    intro.style.height = `${introText[0].offsetHeight}px`;
});

window.addEventListener('mouseover', function () {
    intro.style.height = `${introText[0].offsetHeight}px`;
});

intro.addEventListener('mouseover', function (e) {
    const target = [...e.currentTarget.querySelectorAll('span')]
    target.forEach(function (items) {
        items.style.transitionDelay = '0';
        items.style.transition = '0.478s';
        items.style.transform = 'translateY(-100%)';
    });
});

intro.addEventListener('mouseout', function (e) {
    const target = [...e.currentTarget.querySelectorAll('span')]
    target.forEach(function (items) {
        items.style.transform = 'translateY(0)';
    });
});