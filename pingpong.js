// Criar Bolinha
let raio = 7.5;
let xbolinha = 100;
let ybolinha = 200;
let diametro = raio * 2;

// Velocidade da bolinha 
let velocidadeXBolinha = 6;
let veloicdadeYBolinha = 6;

// Minha Raquete
let xRaquete = 5;
let yRaquete = 150;

// Raquete Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//Placar
let meusPontos = 0;
let pontosOponentes = 0;

function setup() {
   createCanvas(600,400);
}

function draw(){
  
}

function movimentoBolinha(){
  circle(xBolinha,yBolinha,diametro);

    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
    if(Bolinha + raio > width || xBolinha-raio < 0){
       velocidadexBolinha *= -1;
    }
    if(yBolinhan+ raio > height || yBolinha-raio < 0){
        velocidadeYbolinha *= -1} }
function raquetes(xRaquete,Yraquete){
    rect(Xraquete,yRaquete, 10,90)
}
