const notas = []
const qtd = prompt(`Digite a Qauntidade de Notas`)


for(let i = 0; i<qtd; i++){
  let nota = prompt(`Digite a Nota`)
  notas.push(nota)
}


console.table(notas)
