// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const args = process.argv

// Inverte a string recebida por parâmetro
const reverseString = (string) => {
    let result = ""
    // Armazena o tamanho da string para ser utilizado como index
    let length = string.length - 1
    // Percorre a string de trás para frente utilizando o index de forma decrescente
    for(length; length >= 0; length--){
        result += string.charAt(length)
    }

    // Imprime a string original e seu valor inverso
    console.log(`${string} >> ${result}`)
}

if(args.length == 2) {
    console.error("É preciso informar pelo menos uma string.");
    return
}

for (let index = 2; index < args.length; index++) {
    reverseString(args[index])
}