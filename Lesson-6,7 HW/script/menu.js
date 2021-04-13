var menuButton = document.querySelector('.menu__image');
var closeButton = document.querySelector('.menu__close');
var promo = document.querySelector('.menu__closed');
var menuList = document.querySelector('.menu__items');

menuButton.onclick = function () {
    console.log('Нажата кнопка');
    promo.classList.toggle("hide");
    menuList.classList.toggle("hide");
    document.body.style.overflow = 'hidden';
};

closeButton.onclick = function () {
    console.log('Нажата кнопка');
    promo.classList.toggle("hide");
    menuList.classList.toggle("hide");
    document.body.style.overflow = 'visible';
};

promo.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('menu-items')) {
        e.stopPropagation();
    }
    document.body.style.overflow = 'visible';
    menuList.classList.remove('hide');
    promo.classList.remove("hide");
});