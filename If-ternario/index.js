const n1 = Number(prompt("Digite a nota 1"))
const n2= Number(prompt("Digite a nota 2"))
const n3 = Number(prompt("Digite a nota 3"))
const n4 = Number(prompt("Digite a nota 4"))

const media = (n1 + n2 + n3 + n4)/4

console.log(`media final é: ${media}`)

// if (media >= 7) {
//   console.log("Aprovado")

// }else {
//   console.log("Reprovado")
// }
let mensagem = media >= 7 ? "Apovado" :  "Reprovado"

console.log(mensagem)
