// For clicking on navigation bar when the screen is mobile
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Change table size when the screen gets too small
let isMobile = false;
function tableResize(mediaSize) {
    if (mediaSize.matches) {
        $('#table__container').find('td').unwrap().wrap($('<tr/>'));
        isMobile = true;
    }else {
        if (isMobile) {
            location.reload();
            isMobile = false;
        }
    }
}

const mobile = window.matchMedia("(max-width: 960px)");
tableResize(mobile);
mobile.addEventListener("change", tableResize);
