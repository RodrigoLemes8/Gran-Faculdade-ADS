const carros = [
  "Gol",
  "Fusca",
  "Virtus",
  "Ka"
]
//adiciona item do arrey
carros.push("Fiesta")
carros.unshift("Palio")

//console.table(carros)

// tira do final
//carros.pop()
//console.table(carros)

// tirar do inicio
//carros.shift()
//console.table(carros)


//Ele tira e pode colcoar em uma variavel
//const carro = carros.pop()
//console.table(carro)
//console.table(carros)

//Trirar exluir itens do arrey adicinar itens na posição e editar itens do arry

// aqui apaga um itens na posição 1
carros.splice(1, 1)
//console.table(carros)

//adicionar na posoção sem exluir ninguém
carros.splice(1, 0, "Uno")
//console.table(carros)

// adionar na posição exluindo um item

carros.splice(3, 1, "Chevete")
console.table(carros)

/* Splice serve para:


Excluir itens a partir de uma posição
ex: carros.splice(2, 3) -> exclui 3 itens a partir da posição 2

inserir itens a partir de uma posição
ex: carros.splice(3,0,"Uno") -> adionar o items "Uno" na posição 3

alterar itens a partir de uma posição
ex: carros.splice(1,1, Uno") -> adionar o items "Uno" na posição 1 após apagar o item que lã estava

*/

// Ordena por ordem alfabetica
carros.sort()
console.table(carros)
