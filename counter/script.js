window.addEventListener('load', function() {
    
    var tagContadorValor = document.getElementById('counter-value')

    var decreaseButton = document.getElementsByTagName('button')[0]
    var resetButton = document.getElementsByTagName('button')[1]
    var increaseButton = document.getElementsByTagName('button')[2]
    var currentNumber = 0

    function colorChanger() {
        if(currentNumber <= 0) {
            tagContadorValor.style.color = 'red'
        } else if(currentNumber == 1 || currentNumber >= 0) {
            tagContadorValor.style.color = '#1be600'
        }
    }

    decreaseButton.addEventListener('click', function() {
        colorChanger()
        currentNumber -= 1
        tagContadorValor.innerHTML = currentNumber
    })

    resetButton.addEventListener('click', function() {
        tagContadorValor.style.color = '#102a42'
        currentNumber = 0
        tagContadorValor.innerHTML = currentNumber
    })

    increaseButton.addEventListener('click', function() {
        colorChanger()
        currentNumber += 1
        tagContadorValor.innerHTML = currentNumber
    })

})