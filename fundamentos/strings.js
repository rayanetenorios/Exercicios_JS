const escola = "Cod3r"

console.log(escola.charAt(4))
// Essa função mostra o caractere na posição selecionada (posição 4).
console.log(escola.charAt(5))
/* Quando ordenado que seja mostrado um caractere que não está dentro do número
de caracteres da string o js retornará um resultado em branco. */
console.log(escola.charCodeAt(3))
// Código relacionado à tabela Unicode do indice selecionado: O número 3 remete ao código 51 na tabela.
console.log(escola.indexOf('C'))
// Impreme o indice associado ao valor selecionado.
console.log(escola.substring(1))
// Imprime os valores à partir do índice selecionado.
console.log(escola.substring(0,3))
// Imprime à partir do indice x, com a quantidade de valores apontados no y.
console.log('Escola '.concat(escola).concat('!'))
/* (Concatenação) Imprime a variável com os literais (dado sem armazenar numa variável), na ordem escrita.
Pode ser substituido por (+). */
console.log(escola.replace(3, 'e'))
// Substitui o valor do índice selecionado (x), pelo valor (y).
console.log('Ana,Maria,Pedro'.split(','))
// Separador. Pega os valores e separa por vígula.


