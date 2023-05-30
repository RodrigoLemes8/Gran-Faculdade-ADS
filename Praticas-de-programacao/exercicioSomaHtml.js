function somar( ) {
  const n1 = document.getElementById("n1").value
  const n2 = document.getElementById("n2").value

  const soma = parseFloat(n1) + parseFloat(n2)
  document.getElementById("resultadoSoma").innerHTML = "O resultado é: " + soma

}


function subtrair () {
  const n3 = document.getElementById("n3").value
  const n4 = document.getElementById("n4").value

  const subtração = parseFloat(n3) - parseFloat(n4)
  document.getElementById("resultadoSub").innerHTML = "O resultado é:" + subtração

}

function multiplicar () {
  const n5 = document.getElementById("n5").value
  const n6 = document.getElementById("n6").value


  const muiltiplicação = parseFloat(n5) * parseFloat(n6)
  document.getElementById("resultadoMult").innerHTML = "O resultado é: " + muiltiplicação

}

function dividir () {
  const n7 = document.getElementById("n7").value
  const n8 = document.getElementById("n8").value

  const divição = parseFloat(n7) / parseFloat(n8)
  document.getElementById("resultadoDivi").innerHTML = "O resultado é: " + divição

}
