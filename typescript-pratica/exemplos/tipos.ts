let anyDeVolta: any;
anyDeVolta = 3
anyDeVolta = '3'
anyDeVolta = true

let stringTeste: string = 'verify'
stringTeste = anyDeVolta

let unknownValor: unknown;
unknownValor = 3
unknownValor = '3'
unknownValor = true

let stringTeste2:string = 'verify2'
// stringTeste = unknownValor ERROR

if(typeof unknownValor === 'string') {
    stringTeste2 = unknownValor
}

function jogaErro(erro: string, codigo: number): never {
    throw{error: erro, code: codigo}
}

jogaErro('Deu erro', 500)