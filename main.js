const navToogle = document.querySelector('[area-controls="primary-nav"]')

const primaryNav = document.querySelector('#primary-nav')

navToogle.addEventListener('click', function toogle_nav_bar() {
    const navOpened = navToogle.getAttribute('area-expanded')

    if(navOpened == 'false'){
        navToogle.setAttribute('area-expanded','true')
    }else {
        navToogle.setAttribute('area-expanded','false')
    }
    console.log(navOpened)
})