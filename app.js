const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
const popUpAccent = document.querySelector('#box');
const nav = document.querySelector('.nav-links');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hide');
    hamburger.classList.toggle('show');
    popUpAccent.classList.toggle('show');
    popUpAccent.classList.toggle('hide');
    cross.classList.toggle('show');
    cross.classList.toggle('hide');
    nav.classList.toggle('show-navbar');
});

cross.addEventListener('click', function () {
    nav.classList.toggle('show-navbar');
    popUpAccent.classList.toggle('show');
    popUpAccent.classList.toggle('hide');
    hamburger.classList.toggle('show');
    hamburger.classList.toggle('hide');
    cross.classList.toggle('show');
    cross.classList.toggle('hide');
})