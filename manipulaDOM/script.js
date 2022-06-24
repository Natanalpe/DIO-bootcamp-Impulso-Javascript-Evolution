var body = document.querySelector('body')
var footer = document.querySelector('footer')
var button = document.getElementById('mode-selector')
var h1 = document.querySelector('h1')
var arr = [body, footer, button, h1]

button.addEventListener('click', function () {
    arr.forEach(e => {
        e.classList.toggle('dark-mode')
    })
    if (button.classList.contains('dark-mode')) {
        button.innerHTML = "Light Mode"
        h1.innerHTML = 'Dark Mode ON'
    }else {
        button.innerHTML = "Dark Mode";
        h1.innerHTML = 'Light Mode ON'
    }
})