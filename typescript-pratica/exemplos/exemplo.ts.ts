let button = document.getElementById('button') as HTMLButtonElement
let input1 = document.getElementById('input1') as HTMLInputElement
let input2 = document.getElementById('input2') as HTMLInputElement

let printar = true
let frase: string
frase = 'O valor é: '
function soma(num1: number, num2: number, printar: boolean, frase: string) {
    let resultado =num1 + num2
    if(printar) {
        console.log(frase + resultado)
    }
    return num1 + num2
}

button.addEventListener('click', () => {
    soma(Number(input1.value), Number(input2.value), printar, frase)
})