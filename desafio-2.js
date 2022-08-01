// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;


const fibonacci_verify = (verify) => {
    let first = 0, second = 1, result = 0

    if(verify == 0) {
        console.log(`0 pertence à sequência de fibonacci na posição 0`)
        return
    }

    if(verify == 1) {
        console.log(`1 pertence à sequência de fibonacci nas posições 1 e 2`)
        return
    }

    for (let index = 2; result < verify; index++) {
        result = first + second
        first = second
        second = result
        
        if(result == verify) {
            console.log(`${verify} pertence à sequência de fibonacci na posição ${index}`)
        }
    }
}

const args = process.argv

if(args.length == 2) {
    console.error("É preciso informar um número para ser verificado.");
}

for (let index = 2; index < args.length; index++) {
    fibonacci_verify(parseInt(args[index]))
}