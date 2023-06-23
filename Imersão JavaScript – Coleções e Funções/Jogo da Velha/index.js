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

  //linhas
  for(let i=0 ; i<3 ; i++){
    let soma=0;
    soma=tabuleiro[i][0]+tabuleiro[i][1]+tabuleiro[i][2];

    if(soma==3 || soma==-3)
     aviso.innerHTML="Jogador " + ((jogador)%2 + 1) + " ganhou! Linha " + (i+1) + " preenchida!";
   }


  //Colunas
  for(let i=0 ; i<3 ; i++){
    let soma=0;
    soma=tabuleiro[0][i]+tabuleiro[1][i]+tabuleiro[2][i];

    if(soma==3 || soma==-3)
     aviso.innerHTML="Jogador " + ((jogador)%2 + 1) + " ganhou! Coluna " + (i+1) + " preenchida!";
   }


    //Diagonal
     soma=0;
    soma = tabuleiro[0][0]+tabuleiro[1][1]+tabuleiro[2][2];
    if(soma==3 || soma==-3)
      aviso.innerHTML="Jogador " + ((jogador)%2 + 1) + " ganhou! Diagonal preenchida!";

    //Diagonal
     soma=0;
    soma = tabuleiro[0][2]+tabuleiro[1][1]+tabuleiro[2][0];
    if(soma==3 || soma==-3)
      aviso.innerHTML="Jogador " + ((jogador)%2 + 1) + " ganhou! Diagonal preenchida!";
}

function numeroJogador() {
  return jogador%2 + 1

}
