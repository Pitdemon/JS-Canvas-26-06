
let tela = document.querySelector("#tabuleiroCanvas"); // Váriavel que seleciona a tela.
let pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

// Váriavel que define a posição do objeto.
let x = 12.5;
let y = 12.5;

// códigos do teclado
const esquerda = 37
const cima = 38
const direita = 39
const baixo = 40

// Quantidade de pixel que o objeto se movimenta.
const taxa = 25;

// função que cria o objeto.
function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = 'black'; //Metodo para desenhar
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
    pincel.closePath(); //Metodo para finalizar o desenho
}

// função que desenha o grid.
function limpaTela() {
    let linha = 0;
    while (linha <= 500) {
        for (let coluna = 0; coluna <= 500; coluna = coluna + 25) {
            pincel.fillStyle = "red"; //Cor do fundo
            pincel.strokeStyle = "black"; //Cor da borda
            pincel.beginPath();
            pincel.rect(coluna, linha, 25, 25);
            pincel.closePath();
            pincel.fill();
            pincel.stroke();
        }
        linha = linha + 25;
    }
}

// função para atualizar a tela, desenhando o grid e o objeto.
function atualizaTela() {

    limpaTela();

    desenhaCirculo(x, y, 10);

}

setInterval(atualizaTela, 20); // função para chamar o "atualizaTela" em um intervalo de tempo dado como segundo parâmetro.

// função que determina pra onde o objeto irá se movimentar.
function leDoTeclado(evento) {

    if (evento.keyCode == cima && y - taxa > 0) {
        y = y - taxa;

    } else if (evento.keyCode == baixo && y + taxa < 500) {
        y = y + taxa;

    } else if (evento.keyCode == esquerda && x - taxa > 0) {
        x = x - taxa;

    } else if (evento.keyCode == direita && x + taxa < 500) {
        x = x + taxa;
    }
}


document.onkeydown = leDoTeclado;