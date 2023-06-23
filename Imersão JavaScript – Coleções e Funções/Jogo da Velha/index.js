let tabuleiro
let borad
let aviso
let jogador
let linha
let coluna




function iniciar() {
  tabuleiro = []
  borad = document.getElementById("borad")
  aviso = document.getElementById("aviso")
  jogador = 1
  for (let i = 0; i < 3 ; i++) {
    tabuleiro[i] = [];
    for(let j = 0; j < 3; j++){
      tabuleiro[i][j] = 0

    }
  }
exibir()
}

function exibir() {
  let tabela = "<table cellpadding='10' border='1'>"
  for(let i=0; i<3; i++ ){
    tabela += "<tr>"

    for(let j = 0; j <3; j++){

      switch (tabuleiro[i][j]) {
        case -1: marcador = "X"; break;
        case 1: marcador = "O"; break;
        default: marcador = "_"
      }


      tabela += "<td>" + marcador + "</td>"
    }
    tabela += "</tr>"
  }

  tabela += "</table>"
  borad.innerHTML = tabela
}
function jogar() {
  aviso.innerHTML = "Vez do jogador: " + numeroJogador()

  linha = document.getElementById("linha").value -1
  coluna = document.getElementById("coluna").value -1

  if (tabuleiro[linha][coluna] == 0 ) {
    tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1
  } else {
    aviso.innerHTML = "Esse campo ja foi marcado"
  }



  jogador++
  exibir()
  checar()
}
function checar() {

}

function numeroJogador() {
  return jogador%2 + 1

}
