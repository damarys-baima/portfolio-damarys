const imgMenu = document.querySelector ('#img-menu');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const menuMobile = document.querySelector('.menu-hamburguer');
    button.classList.toggle('change');
    menuMobile.classList.toggle('show');
    if (menuMobile.classList.contains('show')) {
        imgMenu.src= 'assets/imgx.png'
    }
    else {
        imgMenu.src= 'assets/menu.png'
    }
}

