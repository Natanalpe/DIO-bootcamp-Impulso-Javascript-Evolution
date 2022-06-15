
window.addEventListener('load', (event) => {
    var nav = document.querySelector('#header')

    window.onscroll = function () {
        if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
            console.log('scrolled')
            nav.classList.add('scrolled')
            nav.classList.remove('noScrolled')
        } else {
            nav.classList.add('noScrolled')
            nav.classList.remove('scrolled')
        }
    }
})