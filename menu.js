const menuButton = document.querySelector('.nav__button')
const menu = document.querySelector('.nav__list')

document.addEventListener('click', (evt) => {
    if ((evt.target === menuButton) && !(menu.classList.contains('nav__show'))){
        menu.classList.add('nav__show');
    }
    else menu.classList.remove('nav__show')
})
