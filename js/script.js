var jogadorNome;
var jogadorEscolha = 0;
var computadorEscolha = 0;

var jogadorPonto = 0
var computadorPonto = 0

function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto;
}

function definirNomeJogador(nome) {
    document.getElementById('jogador-nome').innerHTML = nome;
}

//sorteio entre 2 números
function sortear (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function somarPontoJogador() {
    jogadorPonto = jogadorPonto +1;
}

function somarPontoComputador() {
    computadorPonto = computadorPonto +1;
}

function calcularEscolha(jogador, computador) {
    
    if(jogador == 1 && computador == 1) {
        return 0;
    }
    else if(jogador == 1 && computador == 2){
        return 2;
    }
    else if(jogador == 1 && computador == 3){
        return 1;
    }
    
    else if(jogador == 2 && computador == 1) {
        return 1;
    }
    else if(jogador == 2 && computador == 2){
        return 0;
    }
    else if(jogador == 2 && computador == 3){
        return 2;
    }
    
    else if(jogador == 3 && computador == 1) {
        return 2;
    }
    else if(jogador == 3 && computador == 2){
        return 1;
    }
    else if(jogador == 3 && computador == 3){
        return 0;
    }
}

function selecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

function deselecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}


function jogar(escolha) {
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);
    
    computadorEscolha = sortear(1, 3);
    selecionar('computador', computadorEscolha);
    
    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);
    
    if (ganhador == 0) {
        mensagem('Empate');
    }
    else if (ganhador == 1) {
        mensagem('Ponto para ' + jogadorNome);
        somarPontoJogador();
        document.getElementById('jogador-pontos').innerHTML = jogadorPonto;
    }
    else if (ganhador == 2) {
        mensagem('Ponto para o Computador');
        somarPontoComputador();
        document.getElementById('computador-pontos').innerHTML = computadorPonto;
    }
    
    setTimeout(function(){
        deselecionar('jogador', jogadorEscolha);
        deselecionar('computador', computadorEscolha);
        
        mensagem(jogadorNome + ' escolha uma opção...');
    }, 1500);
    
}

document.getElementById('jogador-escolha-1').onclick = function() {
    jogar(1);
};
document.getElementById('jogador-escolha-2').onclick = function() {
    jogar(2);
};
document.getElementById('jogador-escolha-3').onclick = function() { 
    jogar(3);       
};

jogadorNome = prompt('Qual é o seu nome?');

document.getElementById('mensagem').innerHTML = 'Bem-vindo ' +jogadorNome + ' está preparado? Escolha uma opção';

definirNomeJogador(jogadorNome);