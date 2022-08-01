
const faturamento = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.88,
    es: 27165.48,
    outros: 19849.53
}

// Retorna a porcentagem de representação de um valor
const getPercent = (value) => {
    // Percorre os dados para saber o total de faturamento
    const total = Object.keys(faturamento).reduce((previous, current) => {
        return previous + faturamento[current]
    }, 0)

    // Aplica regra de três
    return (value * 100) / total

}

const result = {
    sp: getPercent(faturamento.sp),
    rj: getPercent(faturamento.rj),
    mg: getPercent(faturamento.mg),
    es: getPercent(faturamento.es),
    outros: getPercent(faturamento.outros)
}

console.log(`    SP: ${result.sp}%`)
console.log(`    RJ: ${result.rj}%`)
console.log(`    MG: ${result.mg}%`)
console.log(`    ES: ${result.es}%`)
console.log(`OUTROS: ${result.outros}%`)
