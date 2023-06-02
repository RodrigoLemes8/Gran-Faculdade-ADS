const anoVotacao = Number(prompt(`Digite o ano da Elição?`))
const anoNascimento = Number(prompt(`Digite o ano de Nascimento`))
const idade = anoVotacao - anoNascimento

if (idade < 16) {
  console.log(`Você não tem idade mínima para votar, Idade: ${idade} anos!`)

} else if (idade >= 18 && idade < 65 ){
  console.log(`Você é obrigado a votar, Idade: ${idade} anos!`)

} else {
  console.log(`Voto facultativo, Idade: ${idade} anos!`)
}
