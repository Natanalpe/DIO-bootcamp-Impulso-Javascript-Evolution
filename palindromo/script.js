function Palindromo(string) {
    return string.split('').reverse().join('') === string
}

var nome = 'natan'
var palavra = 'asdfa'

console.log(Palindromo(nome))
console.log(Palindromo(palavra))