let tela = document.querySelector("#tabuleiroCanvas2"); // Váriavel que seleciona a tela.
let pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.


function desenhaRetangulo(cor, xInicial, Yinicial, largura, altura) {

    pincel.fillStyle = cor;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.rect(xInicial, Yinicial, largura, altura);
    pincel.closePath();
    pincel.fill();
    pincel.stroke();

}
function desenhaGrid() {
    for (let linha = 0; linha <= 500;linha += 25) {
        for(let coluna = 0; coluna <= 500; coluna += 25) {
            pincel.rect(linha, coluna, 25, 25);
            if (coluna % 2 === 0) {
                desenhaRetangulo("purple", linha, coluna, 50, 50);
            }
           else {
            desenhaRetangulo("purple", linha, coluna, 50, 50);
           }

        }
    }
}

desenhaRetangulo("yellow", 0, 0, 25, 25);
desenhaGrid()

function desenharLetra() {

    pincel.fillStyle = "blue";
    pincel.strokeStyle = "blue";
    pincel.beginPath();
    pincel.rect(0, 0, 25, 25);
    pincel.rect(25, 0, 25, 25);
    pincel.rect(50, 0, 25, 25);
    pincel.rect(75, 0, 25, 25);
    pincel.rect(100, 0, 25, 25);
    pincel.rect(125, 0, 25, 25);
    pincel.rect(150, 0, 25, 25);
    pincel.rect(175, 0, 25, 25);
    pincel.rect(200, 0, 25, 25);

    pincel.rect(200, 25, 25, 25);
    pincel.rect(200, 50, 25, 25);
    pincel.rect(200, 75, 25, 25);
    pincel.rect(200, 100, 25, 25);
    pincel.rect(200, 125, 25, 25);
    pincel.rect(200, 150, 25, 25);

    pincel.rect(0, 25, 25, 25);
    pincel.rect(0, 50, 25, 25);
    pincel.rect(0, 75, 25, 25);
    pincel.rect(0, 100, 25, 25);
    pincel.rect(0, 125, 25, 25);
    pincel.rect(0, 150, 25, 25);
    pincel.rect(0, 175, 25, 25);

    pincel.rect(25, 175, 25, 25);
    pincel.rect(50, 175, 25, 25);
    pincel.rect(75, 175, 25, 25);
    pincel.rect(100, 175, 25, 25);
    pincel.rect(125, 175, 25, 25);
    pincel.rect(150, 175, 25, 25);
    pincel.rect(175, 175, 25, 25);
    pincel.rect(200, 175, 25, 25);

    pincel.rect(0, 200, 25, 25);
    pincel.rect(0, 225, 25, 25);
    pincel.rect(0, 250, 25, 25);
    pincel.rect(0, 275, 25, 25);
    pincel.rect(0, 300, 25, 25);
    pincel.rect(0, 325, 25, 25);
    pincel.rect(0, 350, 25, 25);

    pincel.closePath();
    pincel.fill();
    pincel.stroke();
}

desenharLetra();


/*// função que desenha o grid.
function desenharRetangulo(cor, xInicial, vIncial, largura, altura) {

    pincel.fillStyle = cor;
    pincel.strokeStyle = "Black";
    pincel.beginPath();
    pincel.rect(xInicial, vIncial, largura, altura);
    pincel.closePath();
    pincel.fill();
    pincel.stroke();


}*/

//Lista de cores
/*function desenhaGrid() {

    for (let linha = 0; linha <= 500; linha = linha + 25) {
        for (let coluna = 0; coluna <= 500; coluna = coluna + 25) {
            pincel.rect(linha, coluna, 25, 25);
            if(coluna%2 === 0){
                desenharRetangulo("yellow", linha, coluna, 25, 25);
            } else {
                desenharRetangulo("green", linha, coluna, 25, 25);
            }
        }
    }
}
//desenhaGrid()*/


/*//Desenhar letras
desenharRetangulo("blue", 0, 0, 25, 25);
desenharRetangulo("blue", 25, 0, 25, 25);
desenharRetangulo("blue", 50, 0, 25, 25);
desenharRetangulo("blue", 75, 0, 25, 25);
desenharRetangulo("blue", 100, 0, 25, 25);
desenharRetangulo("blue", 125, 0, 25, 25);
desenharRetangulo("blue", 150, 0, 25, 25);
desenharRetangulo("blue", 175, 0, 25, 25);
desenharRetangulo("blue", 200, 0, 25, 25);

desenharRetangulo("blue", 200, 25, 25, 25);
desenharRetangulo("blue", 200, 50, 25, 25);
desenharRetangulo("blue", 200, 75, 25, 25);
desenharRetangulo("blue", 200, 100, 25, 25);
desenharRetangulo("blue", 200, 125, 25, 25);
desenharRetangulo("blue", 200, 150, 25, 25);

desenharRetangulo("blue", 0, 25, 25, 25);
desenharRetangulo("blue", 0, 50, 25, 25);
desenharRetangulo("blue", 0, 75, 25, 25);
desenharRetangulo("blue", 0, 100, 25, 25);
desenharRetangulo("blue", 0, 125, 25, 25);
desenharRetangulo("blue", 0, 150, 25, 25);
desenharRetangulo("blue", 0, 175, 25, 25);

desenharRetangulo("blue", 25, 175, 25, 25);
desenharRetangulo("blue", 50, 175, 25, 25);
desenharRetangulo("blue", 75, 175, 25, 25);
desenharRetangulo("blue", 100, 175, 25, 25);
desenharRetangulo("blue", 125, 175, 25, 25);
desenharRetangulo("blue", 150, 175, 25, 25);
desenharRetangulo("blue", 175, 175, 25, 25);
desenharRetangulo("blue", 200, 175, 25, 25);

desenharRetangulo("blue", 0, 200, 25, 25);
desenharRetangulo("blue", 0, 225, 25, 25);
desenharRetangulo("blue", 0, 250, 25, 25);
desenharRetangulo("blue", 0, 275, 25, 25);
desenharRetangulo("blue", 0, 300, 25, 25);
desenharRetangulo("blue", 0, 325, 25, 25);
desenharRetangulo("blue", 0, 350, 25, 25);*/






/*let tela = document.querySelector("#tabuleiroCanvas");
let pincel = tela.getContext('2d');

function limpaTela() {

pincel.fillStyle = "green";
pincel.strokeStyle = "black";
pincel.beginPath();

for(let linha = 0; linha <= 500; linha += 25) {
    for(let coluna = 0; coluna <= 500; coluna += 25) {
        pincel.rect(linha, coluna, 25, 25);
    }
}
pincel.closePath();
pincel.fill();
pincel.stroke();
}
limpaTela();*/