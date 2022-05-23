const menu = document.querySelector('#menu-celu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menu.Links.classList.toggle('active')
})