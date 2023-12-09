// configurações do jogo
let tabuleiro;
let larguraTabuleiro = 360;
let alturaTabuleiro = 640;
let contexto;

// configurações do pássaro 
let larguraPassaro = 34;
let alturaPassaro = 24;
let posicaoXPassaro = 45;
let posicaoYPassaro = 320;
let imagemPassaro;

// objeto representando o pássaro
let passaro = {
    x: posicaoXPassaro,
    y: posicaoYPassaro,
    largura: larguraPassaro,
    altura: alturaPassaro
};

// configuração dos canos
let arrayCanos = [];
let larguraCano = 64;
let alturaCano = 512;
let posicaoXCano = larguraTabuleiro;
let posicaoYCano = 0;

let imagemCanoSuperior;
let imagemCanoInferior;

// configurações da física do jogo
let velocidadeX = -2; // velocidade de movimento dos canos para a esquerda
let velocidadeY = 0; // velocidade do salto do pássaro
let gravidade = 0.4; // gravidade aplicada ao pássaro

let jogoEncerrado = false;
let pontuacao = 0;