var numeros = [1, 3, 4, 6, 80, 33, 23, 90]
var newArr = []

function trocandoNumeros(n) {
    for(let i = 0; i <= numeros.length - 1; i++) {
        if(numeros[i] % 2 === 0) {
            newArr.push(0)
        } else {
            newArr.push(numeros[i])
        }
    }
    console.log(newArr)
}

trocandoNumeros(numeros)