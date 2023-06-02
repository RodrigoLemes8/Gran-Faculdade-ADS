let contador = 1;
const qtd = prompt("Quantas notas?");
let soma = 0;
let notas = [];

while (contador <= qtd) {
  let nota;
  do {
    nota = Number(prompt(`Digite a Nota (0 a 10) ${contador}:`));
  } while (nota > 10);

  soma = soma + nota;
  notas.push(nota);
  contador++;
}

console.log(`Soma: ${soma}`);
console.log(`Notas: ${notas}`);
const media = soma / qtd;

const resultado = media >= 7 ? "Aprovado!" : "Reprovado!";
console.log(`Media: ${media}`);
console.log(`Resultado: ${resultado}`);
