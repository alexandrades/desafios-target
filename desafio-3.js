// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


const faturamento = require('./dados.json')

// Filtra os dados, permanecendo apenas os dias que possuem faturamento, desconsiderando assim os fins de semanas e feriados
const filteredFaturamento = faturamento.filter(dado => dado.valor > 0)

// Ordena os dados do menor para o maior levando em consideração o valor
filteredFaturamento.sort((a, b) => a.valor < b.valor ? -1 : a.valor > b.valor ? 1 : 0)

// Extrai o primeiro e último dado do array, sendo o maior e menor valor
const maior = filteredFaturamento.pop().valor
const menor = filteredFaturamento.shift().valor

// Calcula a média do faturamento mensal percorrendo os dados
let mediaFaturamento = 0
for (const dado of filteredFaturamento) {
    mediaFaturamento += dado.valor / filteredFaturamento.length
}

// Filtra os dados permanecendo apenas os que possuem o valor maior que a média de faturamento
const acimaMedia = filteredFaturamento.filter(dado => dado.valor > mediaFaturamento).length

// Imprime os valores no terminal
console.log("Maior faturamento: ", maior)
console.log("Menor faturamento", menor)
console.log("Quantidade de dias acima da média de faturamento", acimaMedia)