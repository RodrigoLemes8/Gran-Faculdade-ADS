function somar () {
  const n1 = document.getElementById("n1").value
  const n2 = document.getElementById("n2").value

  const soma = parseFloat(n1) + parseFloat(n2)
  document.getElementById("resultadoSoma").innerHTML = "O resultado é: " + soma

}


function subtrair () {
  const n1 = document.getElementById("n1").value
  const n2 = document.getElementById("n2").value

  const subtração = parseFloat(n1) - parseFloat(n2)
  document.getElementById("resultadoSoma").innerHTML = "O resultado é: " + subtração

}

function multiplicar () {
  const n1 = document.getElementById("n1").value
  const n2 = document.getElementById("n2").value


  const muiltiplicação = parseFloat(n1) * parseFloat(n2)
  document.getElementById("resultadoSoma").innerHTML = "O resultado é: " + muiltiplicação

}

function dividir () {
  const n1 = document.getElementById("n1").value
  const n2 = document.getElementById("n2").value

  const divição = parseFloat(n1) / parseFloat(n2)
  document.getElementById("resultadoSoma").innerHTML = "O resultado é: " + divição

}
