function debugError(arr, num) {
    try {
        if (!arr && !num)
            throw new ReferenceError("Parametros estão em branco");

        if (typeof arr !== 'object')
            throw new TypeError("O array dever ser do tipo 'object'");

        if (typeof num !== 'number')
            throw new TypeError("O número enviado deve ser do tipo 'número'");

        if (arr.length !== num)
            throw new RangeError(`O Tamanho do array deve ser igual a ${num}`);

        return arr
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!' + '\n' + e.message)
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError!' + '\n' + e.message)
        } else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError!' + '\n' + e.message)
        } else {
            console.log("o Erro não foi esperado: \n" + e)
        }

    }
}

console.log(debugError([1, 2, 3, 4, 5], 5))