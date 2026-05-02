let numeroImagem = 0;
let aberto = false;

function trocaImagem(){
    let total = 9;
    if(numeroImagem < total){
        numeroImagem ++;
    }else{
        numeroImagem = 1;
    }
    
    let fundo = document.querySelector('#corpo');
    fundo.style.backgroundImage = `url('imagens/img${numeroImagem}.jpg')`;
    console.log(`url('imagens/img${numeroImagem}.jpg')`);
}


function toggleMenu() {
    const menu = document.getElementById("menu");
    const btnMenu = document.getElementById("btnMenu");

    if (aberto) {
        menu.style.left = "-250px";
        btnMenu.style.left = "30px";
    } else {
        menu.style.left = "0";
        btnMenu.style.left = "250px";

    }

    aberto = !aberto;
}

function transparencia(){
    const input = document.querySelector("#inputTransparencia");
    const saida = document.querySelector("#saida");
    let valor = Number(input.value) / 100;

    const numeros = saida.style.backgroundColor.match(/[\d.]+/g).map(Number);

    const r = numeros[0];
    const g = numeros[1];
    const b = numeros[2];

    saida.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${valor})`;
}

function mudarOrientacao() {
    const selecionado = document.querySelector('input[name="vert-hori"]:checked');
    const saida = document.querySelector("#saida");


    if (selecionado.id === "btnVertical") {
        saida.style.writingMode = 'vertical-lr';
        saida.style.textOrientation = 'upright';
        saida.style.maxHeight = "500px";
        saida.style.overflowX = "auto";
        saida.style.paddingRight = "150px";

    } else {
        saida.style.writingMode = 'horizontal-tb';
        saida.style.textOrientation = 'mixed';
        saida.style.maxHeight = "none";
        saida.style.overflowX = "visible";
        saida.style.paddingRight = "10px";
    }
}

function mudarCorLetra(){
    const corLetra = document.querySelector('#corLetra').value;
    const saida = document.querySelector('#saida');
    saida.style.color = corLetra;

    console.log(corLetra);
}

function mudarCorFundo(){
    const corFundo = document.querySelector('#corFundo').value;
    const saida = document.querySelector('#saida');

    const numeros = saida.style.backgroundColor.match(/[\d.]+/g).map(Number);

    const r = parseInt(corFundo.slice(1, 3), 16);
    const g = parseInt(corFundo.slice(3, 5), 16);
    const b = parseInt(corFundo.slice(5, 7), 16);

    saida.style.backgroundColor = (`rgba(${r}, ${g}, ${b}, ${numeros[3]})`);
}

window.trocaImagem = trocaImagem;
window.toggleMenu = toggleMenu;
window.transparencia = transparencia;
window.mudarOrientacao = mudarOrientacao;
window.mudarCorLetra = mudarCorLetra;
window.mudarCorFundo = mudarCorFundo;


export { trocaImagem, toggleMenu, transparencia, mudarOrientacao };