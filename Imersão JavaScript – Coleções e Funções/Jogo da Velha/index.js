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
      tabela += "<td>-</td>"
    }
    tabela += "</tr>"
  }

  tabela += "</table>"
  borad.innerHTML = tabela
}
function jogar() {
  aviso.innerHTML = "Vez do jogador: " + (jogador%2 + 1)

  linha = document.getElementById("linha").value -1
  coluna = document.getElementById("coluna").value -1
  tabuleiro[linha][coluna] = 1

  jogador++
}
function checar() {

}
