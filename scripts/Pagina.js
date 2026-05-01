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

    saida.style.backgroundColor = `rgba(255, 255, 255, ${valor})`
}

function mudarOrientacao() {
    const selecionado = document.querySelector('input[name="vert-hori"]:checked');
    const saida = document.querySelector("#saida");


    if (selecionado.id === "btnVertical") {
        saida.style.writingMode = 'vertical-lr';
        saida.style.textOrientation = 'upright';
        saida.style.maxHeight = "300px";
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

window.trocaImagem = trocaImagem;
window.toggleMenu = toggleMenu;
window.transparencia = transparencia;
window.mudarOrientacao = mudarOrientacao;

export { trocaImagem, toggleMenu, transparencia, mudarOrientacao };