let botao = document.getElementById('button')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')

function soma(num1, num2) {
    return Number(num1) + Number(num2)
}

botao.addEventListener('click', () =>{
    console.log(soma(input1.value, input2.value))
})