console.log(7/0)
console.log("10"/2)
// Qualquer número colocado entre as aspas será reconhecido como número e utilizado para a realiação da operação.
console.log('3' + 2)
// O resultado irá ser uma concatenação (.concat), pois o sinal de (+) faz sentido nessa operação como uma junção dos valores.
console.log("Show!" * 2)
// "Show!" não foi reconhecido como número e falhou a operação: NaN (not a number)
console.log(0.1 + 0.7)
// A operação será realizada, porém com várias casas decimais, gerando uma imprecisão.
console.log((0.1 + 0.7).toFixed(2))
// A operação será realizada com a restrição de 2 casas decimais: toFixed(2).
// console.log(10.toString())
console.log((10.345).toFixed(2))


