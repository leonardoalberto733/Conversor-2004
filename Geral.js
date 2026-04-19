import {separarHangul, hangulConv} from "./Hangul.js";
import Kanji from "./Kanji.js";


let input = document.querySelector("#entrada");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        conversor();
    }
});

input.addEventListener("keydown", function(event) {
    if (event.key === "Backspace" && event.ctrlKey) {
        console.log("Ctrl + Backspace pressionado!");
        apagar();
    }
});

window.apagar = function(){
    let conteudo = saida.innerText;
    saida.innerText = conteudo.slice(0, conteudo.length - 1)
}

window.conversor = function (){
    let saida = document.querySelector("#saida");
    let texto = input.value;
    let codificado = "";

    input.value = "";
    input.focus();

    codificado = triador(texto);

    saida.innerText += codificado;

}

window.triador = function(texto){
    let palavrasOrigninais = texto.trim().split(/\s+/);  
    let palavrasConvertidas = [];

    palavrasOrigninais.map((palavra) => {
        if (palavra[0] == "*"){
            console.log(hangulConv(separarHangul(palavra.slice(1, palavra.lenth))));
            let convertido = hangulConv(separarHangul(palavra.slice(1, palavra.lenth)));
            palavrasConvertidas += convertido;
        }else if (palavra[0] == "#"){
            
        }else{
            if(!["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "ç", "ã", "õ"].includes(palavra[0])){
                for(let x = 0; x <= Kanji.W.length - 1; x++){
                    if (Kanji.W[x].frente == palavra){
                        palavrasConvertidas += Kanji.W[x].verso;
                    } 
                }
            }else{
                let inicial = palavra.slice(0, 1).toUpperCase();
                console.log(inicial);
                for(let x = 0; x <= Kanji[inicial].length - 1; x++){
                    if (Kanji[inicial][x].frente == palavra){
                        palavrasConvertidas += Kanji[inicial][x].verso;
                    } 
                }
            }
        }
    })

    return palavrasConvertidas;
}