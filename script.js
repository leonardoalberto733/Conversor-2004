import * as Hangul from 'https://cdn.jsdelivr.net/npm/hangul-js@0.2.6/+esm';

window.conversor = function (){
    let input = document.querySelector("#entrada");
    let texto = input.value;
    separarHangul(texto);
}


window.separarHangul = function (bruto){
    let letras = [];
    let letra = "";
    let comeco = 0;

    for(let x = 0; x <= bruto.length - 1; x++){
        if (bruto[x] === "-"){
            letra = bruto.slice(comeco, x);
            comeco = x + 1;
            letras.push(letra);
        };
    }

    letra = bruto.slice(comeco, bruto.length);
    letras.push(letra);

    console.log(letras);
}



window.hangulConv = function (partes) {
    let jamos = [];

    for(let x = 0; x <= partes.length - 1; x++){
        if(partes[x][0] == "a", partes[x][0] == "e", partes[x][0] == "i", partes[x][0] == "o", partes[x][0] == "u", partes[x][0] == "ã", partes[x][0] == "õ"){
            jamos[0] = "ㅁ";
            let som = "";

            if (partes[x][0] == "ã", partes[x][0] == "õ"){
                if(partes[x].length > 2){
                    som = partes[x].slice(1, 3);
                }else{
                    som = partes[x][1];
                }

                switch(som){
                    case "ã": jamos[1] = "ㅜ";
                    case "ãe": jamos[1] = "ㅛ";
                    case "õe": jamos[1] = "ㅠ";
                    case "ão": jamos[1] = "ㅗ";
                }
            }else{
                switch(jamo[1]){
                    case "a": jamos[1] = "ㅏ";
                    case "e": jamos[1] = "ㅑ";
                    case "i": jamos[1] = "ㅔ";
                    case "o": jamos[1] = "ㅐ";
                    case "u": jamos[1] = "ㅒ";
                }
            }
            
            if (!['a', 'e', 'i', 'o', 'u'].includes(partes[x][partes[x].lenght-1])){
                switch (partes[x][partes[x].lenght-1]){
                    case "b": jamos[2] = "ㄱ";
                    case "k": jamos[2] = "ㄷ";
                    case "d": jamos[2] = "ㅂ";
                    case "f": jamos[2] = "ㅅ";
                    case "g": jamos[2] = "ㅎ";
                    case "m": jamos[2] = "ㅍ";
                    case "n": jamos[2] = "ㅍ";
                    case "p": jamos[2] = "ㄱ";
                    case "r": jamos[2] = "ㅌ";
                    case "s": jamos[2] = "ㄹ";
                    case "t": jamos[2] = "ㅈ";
                }
            }
        }else{

        };

        console.log(jamos);
    }

    let conv = Hangul.assemble(['ㄱ', 'ㅑ', 'ㄹ']);
    console.log(conv);
}

