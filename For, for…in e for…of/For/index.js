const qtd = prompt("Quantas notas?");
let soma = 0;
let notas = [];

// Inicializção
//condição
//incremento


for(let i = 1; i <= qtd; i++) {
  let nota
  nota = Number(prompt(`Digite a Nota (0 a 10) ${i}:`))
  soma = soma + nota
  notas.push(nota)

}
console.log(`Soma: ${soma}`);
console.log(`Notas: ${notas}`);
const media = soma / qtd;

const resultado = media >= 7 ? "Aprovado!" : "Reprovado!";
console.log(`Media: ${media}`);
console.log(`Resultado: ${resultado}`);
