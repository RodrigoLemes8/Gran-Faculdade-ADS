const pessoa = {
  nome: "Rrodrigo",
  telefone: "(21)96478-4456",
  endereco: "por ai"
}
// for in, navegando no objeto

for (let props in pessoa){
  console.log(`${props} -> ${pessoa[props]}`)

}


const carros = ["Gol", "Fusca", "Virtus", "Ka" ]

for(let carro of carros){
  console.log(carro)

}
