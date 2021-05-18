const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá,
    ${nome}!`
    // reconnhece o parágrafo.
console.log(concatenacao, template)

// Expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
// A função chama a outra para realizar a ação descrita. No caso, o caractere maiúsculo.
