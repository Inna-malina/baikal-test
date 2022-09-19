let burgerClose = document.querySelector('.burger-close');
let burger = document.querySelector('.main-burger');
let burgerMenu = document.querySelector('.main-burger__list');

burgerClose.addEventListener('click', function () {
    burgerMenu.classList.remove('active');
    burgerMenu.classList.add('disactive');
});

burger.addEventListener('click', function () {
    burgerMenu.classList.remove('disactive');
    burgerMenu.classList.add('active');
});