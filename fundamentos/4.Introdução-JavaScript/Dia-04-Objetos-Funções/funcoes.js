// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false
function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        return true;
    } else {
        return false;
    }
}
//console.log(verificaPalindrome('arara')); //true
//console.log(verificaPalindrome('desenvolvimento')); //false

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.
function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
        if (numeros[indiceMaior] < numeros[indice]) {
            indiceMaior = indice;
        }
    }

    return indiceMaior;
}

//console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.
function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
        if (numeros[indiceMenor] > numeros[indice]) {
            indiceMenor = indice;
        }
    }

    return indiceMenor;
}

//console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.
function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
        if (maiorPalavra.length < palavras[indice].length) {
            maiorPalavra = palavras[indice];
        }
    }

    return maiorPalavra;
}

//console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.
function maisRepetido(numeros) {
    let num = {};

    for (let index = 0; index < numeros.length; index += 1) {
        let valor = numeros[index];
        if (num[valor] === undefined) {
            num[valor] = 1;
        } else {
            num[valor] = num[valor] + 1;
        }
    }

    let contRepetido = 0;
    let contNumero = 0;

    for (let prop in num) {
        if (contRepetido < num[prop]) {
            contRepetido = num[prop];
            contNumero = prop;
        }
    }

    return contNumero;
}

//console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2

// Crie uma função que receba um número natural(número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1 + 2 + 3 + 4 + 5 = 15.
function somaTodosNumeros(numeros) {
    let total = 0;

    for (let index = 1; index <= numeros; index += 1) {
        total = total + index;
    }
    return total;
}

//console.log(somaTodosNumeros(5)); //15

// Crie uma função que receba uma string word e outra string ending.Verifique se a string ending é o final da string word.Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false
function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split('').reverse().join('');
    let inversoFimPalavra = fimPalavra.split('').reverse().join('');
    let result;
    for (let index = 0; index < inversoFimPalavra.length; index += 1) {
        if (inversoPalavra[index] !== inversoFimPalavra[index]) {
            result = false;
            break;
            break; // O "break" serve para encerrar o loop.
        } else {
            result = true;
        }
    }

    return result;
}

//console.log(verificaFimPalavra('trybe', 'be')); //true
//console.log(verificaFimPalavra('joaofernando', 'fernan')); //false