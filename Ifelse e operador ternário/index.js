const n1 = Number(prompt("Digite a nota 1"))
const n2= Number(prompt("Digite a nota 2"))
const n3 = Number(prompt("Digite a nota 3"))
const n4 = Number(prompt("Digite a nota 4"))

const media = (n1 + n2 + n3 + n4)/4

console.log(`media final é: ${media}`)

if (media >= 7) {
  alert(`Aprovado!\nMedia final é: ${media}`)

} else {
  alert(`Reprovado!\nMedia final é: ${media}`)

}


const n1b = Number(prompt("Digite a nota 1b"))
const n2b= Number(prompt("Digite a nota 2b"))
const n3b = Number(prompt("Digite a nota 3b"))
const n4b = Number(prompt("Digite a nota 4b"))

const mediab = (n1b + n2b + n3b + n4b)/4

console.log(`media final é: ${mediab}`)

if (media >= 7) {
    alert(`Aprovado!\nMedia final é: ${mediab}`)

}else if(media < 5)
  {
    alert(`Recuperação!\nMedia final é: ${mediab}`)

} else {
  alert(`Reprovado!\nMedia final é: ${mediab}`)

}
