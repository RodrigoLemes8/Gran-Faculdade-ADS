const nomes = [
    "Rodrigo",
    "Adriely",
    "Patricia",
    "junior"
]

const idades = [
  18,
  20,
  24,
  30
]

const notas = [
  [5, 10, 9 ,4],
  [6, 7, 2, 10],
  [8, 7, 2 ,10],
]

const pessoa = {nome: "Rodrigo Lemes", telefone: "(21)96478-4456", endereco: "ABC"}

const pessoas =  [
  {nome: "Rodrigo Lemes", telefone: "(21)96478-222", endereco: "ABC"},
  {nome: "Adriely", telefone: "(21)96478-3334", endereco: "GFC"},
  {nome: "Patricia", telefone: "(21)96478-4444", endereco: "GHJ"},
  {nome: "Junior", telefone: "(21)96478-5555", endereco: "VFG"},
]
console.log(notas[0][1])
console.table(pessoas)
console.table(pessoas[2])
console.table(pessoas[2].nome)
console.table(pessoas[3].telefone)

/*
console.log(nomes[0])
console.log(idades[3])
console.table(notas)

 */
