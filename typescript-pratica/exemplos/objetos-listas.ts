const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora'
}

pessoa.idade = 29;


const Andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
}

const Paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const Vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const Maria: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const Jessica: Estudante = {
    nome: 'Jessica',
    idade: 22,
    materias: ['Matemática', 'Programação']
}


function listar(lista: string[]) {
    for(const item of lista) {
        console.log('- ', item)
    }
}

listar(Jessica.materias)