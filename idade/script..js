const pessoa1 = {
        nome: 'João',
        idade: 6,
    }

const pessoa2 = {
        nome: 'Sofia',
        idade: 16,
    }

const pessoa3 = {
        nome: 'Paulo',
        idade: 26,
    }



function calcAge(years) {
    return `Daqui a ${years} anos, ${this.nome} terá
        ${this.idade + years} anos de idade.`
}

console.log(calcAge.call(pessoa1, 2))
console.log(calcAge.call(pessoa2, 2))
console.log(calcAge.call(pessoa3, 2))

console.log(calcAge.call(pessoa1, [2]))
console.log(calcAge.call(pessoa2, [2]))
console.log(calcAge.call(pessoa3, [2]))
