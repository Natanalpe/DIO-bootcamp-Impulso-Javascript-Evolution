// // types
// // interfaces

// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquatico';
//     domestico: boolean;
// }

// interface IFelino extends IAnimal {
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//     porte: 'pequeno' | 'medio' | 'grande';
// }

// type IDomestico = IFelino | ICanino;
// // type IDomestico = IFelino & ICanino;

// const animal: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     porte: 'medio',
//     tipo: 'terrestre',
// }
//////////////////////////////////////////////////////////////
// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) => {
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value)
// })

// function adicionarALista<NaoSei>(arr: NaoSei[], val: NaoSei) {
//     return arr.map(() => val)
// }

// adicionarALista(['a', 'b', 'c'], 'd')
// //////////////////////////////////////////////////////////
// interface IUsuario {
//     id: string;
//     email: string
//     cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';

// }


// function redirecione(usuario: IUsuario) {
//     if(usuario.cargo) {
//         // redirecionar(usuario.cargo);
//     }

//     // redirecionar area do usuario
// }
////////////////////////////////////////////////////////////

// interface Cachorro {
//     nome: string;
//     idade: number;
//     parqueFav?: string;
// }

// type CachorroSomenteLeitura = {
//     readonly [K in keyof Cachorro]-?: Cachorro[K]
// }

// class MeuCachorro implements CachorroSomenteLeitura {
//     idade;
//     nome;
//     parqueFav;

//     constructor(nome, idade) {
//         this.idade = idade;
//         this.nome = nome;
//     }
// }

// const cao = new MeuCachorro('Pandora', 14);
// cao.idade = 8

// console.log(cao.idade)
//////////////////////////////////////
import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Função chamada!')
    }
})
$('body').novaFuncao();