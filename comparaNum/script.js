function Comparacao(n1, n2) {
    var iguais = `Os números ${n1} e ${n2} `
    var soma = n1 + n2
    var comparacao10 = ''
    var comparacao20

    n1 == n2 ? 
        iguais += 'são iguais' :
        iguais += 'não são iguais';

    soma > 10 ? comparacao10 = "maior" : comparacao10 = "menor"
    soma > 20 ? comparacao20 = "maior" : comparacao20 = "menor"

    return `${iguais} Sua soma é ${soma}, que é ${comparacao10} que 10 e ${comparacao20} que 20`
}

console.log(Comparacao(1, 2))