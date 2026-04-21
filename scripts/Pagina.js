let numeroImagem = 0;
let aberto = false;

function trocaImagem(){
    let total = 3;
    if(numeroImagem < total){
        numeroImagem ++;
    }else{
        numeroImagem = 1;
    }
    
    let fundo = document.querySelector('#corpo');
    fundo.style.backgroundImage = `url('imagens/img${numeroImagem}.jpg')`
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

window.trocaImagem = trocaImagem;
window.toggleMenu = toggleMenu;
window.transparencia = transparencia;

export { trocaImagem, toggleMenu, transparencia };