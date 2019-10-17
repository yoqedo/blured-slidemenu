
const menu = document.querySelector('.toggle');
const slide = document.querySelector('.slidemenu');
const close = document.querySelector('.toggle-close');
const header = document.querySelector('header');
const blur = document.querySelector('.blur');

menu.addEventListener('click', function () {
    slide.classList.add('slidein');
    header.classList.add('blur');
});

close.addEventListener('click', function () {
    slide.classList.remove('slidein');
    header.classList.remove('blur');

});