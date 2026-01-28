const nav = document.querySelector('.nav');
const burgerButton = document.querySelector('.nav__burger');
const navMenu = document.querySelector('.nav__menu');
const navPhone = document.querySelector('.nav__phone');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.nav__menu-link');

function closeMenu() {
    nav.classList.remove('is-open');
    navPhone.classList.remove('is-close');
    navMenu.classList.remove('is-open');
    burgerButton.classList.remove('is-open');
    overlay.classList.remove('is-open');
}

burgerButton.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    navPhone.classList.toggle('is-close');
    navMenu.classList.toggle('is-open');
    burgerButton.classList.toggle('is-open');
    overlay.classList.toggle('is-open');
});

menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

overlay.addEventListener('click', closeMenu);
