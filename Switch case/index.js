/*
Verificar o aumento de Sálrio de acrodo com os seguites cargos:
Estagiarios: 100%
Analista: 50%
Gerente 30%
Presidente 10%
*/
const salario = Number(prompt("Digite o Salario"))
const cargo = prompt("Digite um cargo")
let aumento = 0;

switch (cargo) {
  case "Estagiário":
    aumento = 1;
    break;

  case "Analista":
    aumento = 0.5;
    break;

  case "Gerente":
    aumento = 0.3;
    break;

  case "Presidente":
    aumento = 0.1;
    break;
  default: alert('Favor escolher um cargo valido!')
}

const novoSalario = salario + (salario*aumento)
console.log(`O novo salário é: R$ ${novoSalario}`)
