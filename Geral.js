import {separarHangul, hangulConv} from "./Hangul.js";

window.conversor = function (){
    let input = document.querySelector("#entrada");
    let saida = document.querySelector("#saida");
    let texto = input.value;
    let codificado = "";

    let letras = separarHangul(texto);
    let palavra = hangulConv(letras);
    console.log(letras);
    console.log(palavra);

    palavra.map((letra) => {
        codificado += letra;
    })

    console.log(codificado);

    saida.innerText += codificado;

}