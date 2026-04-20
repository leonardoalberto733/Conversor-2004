import * as Hangul from 'https://cdn.jsdelivr.net/npm/hangul-js@0.2.6/+esm';



function separarHangul (bruto){
    let letras = [];
    let letra = "";
    let comeco = 0;

    for(let x = 0; x <= bruto.length - 1; x++){
        if (bruto[x] === "."){
            letra = bruto.slice(comeco, x);
            comeco = x + 1;
            letras.push(letra);
        };
    }

    letra = bruto.slice(comeco, bruto.length);
    letras.push(letra);

    return letras;
}



function hangulConv(partes) {
    let jamos = [];
    let palavra = [];
    for(let x = 0; x <= partes.length - 1; x++){
        if(partes[x][0] == "a"|| partes[x][0] == "e"|| partes[x][0] == "i"|| partes[x][0] == "o"|| partes[x][0] == "u"|| partes[x][0] == "ã"|| partes[x][0] == "õ"){
            jamos[0] = "ㅁ";
            let som = "";

            if (partes[x][0] == "ã" || partes[x][0] == "õ"){
                som = partes[x][0];
                if(partes[x][1] == "e"){
                    som = som + "e";
                }
                if(partes[x][1] == "o"){
                    som = som + "o";
                }

                switch(som){
                    case "ã": jamos[1] = "ㅜ";
                    break;
                    case "ãe": jamos[1] = "ㅛ";
                    break;
                    case "õe": jamos[1] = "ㅠ";
                    break;
                    case "ão": jamos[1] = "ㅗ";
                    break;
                }
            }else{
                switch(partes[x][0]){
                    case "a": jamos[1] = "ㅏ";
                    break;
                    case "e": jamos[1] = "ㅑ";
                    break;
                    case "i": jamos[1] = "ㅔ";
                    break;
                    case "o": jamos[1] = "ㅐ";
                    break;
                    case "u": jamos[1] = "ㅒ";
                    break;
                }
            }
            
            if (!['a', 'e', 'i', 'o', 'u'].includes(partes[x][(partes[x].length - 1)])){
                switch (partes[x][(partes[x].length - 1)]){
                    case "b": jamos[2] = "ㅇ";
                    break;
                    case "k": jamos[2] = "ㄷ";
                    break;
                    case "d": jamos[2] = "ㅂ";
                    break;
                    case "f": jamos[2] = "ㅅ";
                    break;
                    case "g": jamos[2] = "ㅎ";
                    break;
                    case "m": jamos[2] = "ㅍ";
                    break;
                    case "n": jamos[2] = "ㅍ";
                    break;
                    case "p": jamos[2] = "ㄱ";
                    break;
                    case "r": jamos[2] = "ㅌ";
                    break;
                    case "s": jamos[2] = "ㄹ";
                    break;
                    case "t": jamos[2] = "ㅈ";
                    break;
                }
            }
        }else{ 
            if(['l', 'r', 's', 'm', 'n'].includes(partes[x][0]) && partes[x].length == 1){
                switch (partes[x][0]){
                    case "l" : jamos = ['ㅁ', 'ㅡ', 'ㅊ'];
                    break;
                    case "r" : jamos = ['ㅁ', 'ㅡ', 'ㅌ'];
                    break;
                    case "s" : jamos = ['ㅁ', 'ㅡ', 'ㄹ'];
                    break;
                    case "m" : jamos = ['ㅁ', 'ㅡ', 'ㅍ'];
                    break;
                    case "n" : jamos = ['ㅁ', 'ㅡ', 'ㅍ'];
                    break;
                }
                
            }else if(partes[x][0] == 'n' && partes[x][1] == 's'){
                jamos = ['ㅍ', 'ㅡ', 'ㄹ']
            }else if(partes[x].length == 1){
                 switch (partes[x][0]){
                    case "k" : jamos = ['ㄷ', 'ㅣ'];
                    break;
                    case "t" : jamos = ['ㅈ', 'ㅣ'];
                    break;
                    case "d" : jamos = ['ㅂ', 'ㅣ'];
                    break;
                    case "p" : jamos = ['ㄱ', 'ㅣ'];
                    break;
                    case "f" : jamos = ['ㅅ', 'ㅣ'];
                    break;
                    case "b" : jamos = ['ㅇ', 'ㅣ'];
                    break;
                    case "g" : jamos = ['ㅎ', 'ㅣ'];
                    break;
                    case "v" : jamos = ['ㅊ', 'ㅣ'];
                    break;
                   
                }
            }else{
                let sh = false;
                let posVogal = 0;

                if(partes[x][0] == "s" && partes[x][1] == "h"){
                    jamos[0] = "ㄸ";
                    sh = true;
                    posVogal = 2;
                    
                }else{
                    switch (partes[x][0]){
                        case "d" : jamos[0] = "ㅂ";
                        break;
                        case "t" : jamos[0] = "ㅈ";
                        break;
                        case "k" : jamos[0] = "ㄷ";
                        break;
                        case "p" : jamos[0] = "ㄱ";
                        break;
                        case "f" : jamos[0] = "ㅅ";
                        break;
                        case "r" : jamos[0] = "ㄴ";
                        break;
                        case "h" : jamos[0] = "ㅌ";
                        break;
                        case "b" : jamos[0] = "ㅇ";
                        break;
                        case "s" : jamos[0] = "ㄹ";
                        break;
                        case "ç" : jamos[0] = "ㄹ";
                        break;
                        case "g" : jamos[0] = "ㅎ";
                        break;
                        case "n" : jamos[0] = "ㅋ";
                        break;
                        case "r" : jamos[0] = "ㅌ";
                        break;
                        case "v" : jamos[0] = "ㅊ";
                        break;
                        case "m" : jamos[0] = "ㅍ";
                        break;
                        case "z" : jamos[0] = "ㅃ";
                        break;
                        case "j" : jamos[0] = "ㅉ";
                        break;
                        case "x" : jamos[0] = "ㄲ";
                        break;
                        case "l" : jamos[0] = "ㅆ";
                        break;
                    }
                    posVogal = 1;

                    if(['l','r', 'h'].includes(partes[x][1])){
                        switch (partes[x][1]){
                            case "l": jamos[2] = "ㅆ";
                            break;
                            case "r": jamos[2] = "ㄲ";
                            break;
                            case "h": jamos[2] = "ㅋ";
                            break;
                        }
                        posVogal = 2;
                    }
                }

                if(partes[x][posVogal] == "u" && ['a', 'e', 'i','o','u','ã','õ'].includes(partes[x][posVogal + 1])){
                    jamos[2] = "ㅂ";
                    posVogal = posVogal + 1;
                }

                if (partes[x][posVogal] == "ã" || partes[x][posVogal] == "õ"){
                    let som = "";
                    som = partes[x][posVogal];
                    if(partes[x][posVogal + 1] == "e"){
                        som = som + "e";
                    }
                    if(partes[x][posVogal + 1] == "o"){
                        som = som + "o";
                    }

                    switch(som){
                        case "ã": jamos[1] = "ㅜ";
                        break;
                        case "ãe": jamos[1] = "ㅛ";
                        break;
                        case "õe": jamos[1] = "ㅠ";
                        break;
                        case "ão": jamos[1] = "ㅗ";
                        break;
                    }
                }else{
                    switch(partes[x][posVogal]){
                        case "a": jamos[1] = "ㅏ";
                        break;
                        case "e": jamos[1] = "ㅑ";
                        break;
                        case "i": jamos[1] = "ㅔ";
                        break;
                        case "o": jamos[1] = "ㅐ";
                        break;
                        case "u": jamos[1] = "ㅒ";
                        break;
                    }
                }

                if(!['a', 'e', 'i','o','u', 'ã'].includes(partes[x][partes[x].length - 1])){
                    switch (partes[x][partes[x].length - 1]){
                        case "d": jamos[2] = "ㅂ";
                        break;
                        case "t": jamos[2] = "ㅈ";
                        break;
                        case "k": jamos[2] = "ㄷ";
                        break;
                        case "p": jamos[2] = "ㄱ";
                        break;
                        case "f": jamos[2] = "ㅅ";
                        break;
                        case "b": jamos[2] = "ㅇ";
                        break;
                        case "s": jamos[2] = "ㄹ";
                        break;
                        case "g": jamos[2] = "ㅎ";
                        break;
                        case "r": jamos[2] = "ㅌ";
                        break;
                        case "m": jamos[2] = "ㅍ";
                        break;
                        case "n": jamos[2] = "ㅍ";
                        break;
                    }
                }

            
            };
        }
        
         palavra.push(Hangul.assemble(jamos));
         jamos = [];
    }

    let palavraConcatenada = "";
    palavra.map((l) => {
        palavraConcatenada += l;
    })
    return palavraConcatenada;

}

window.separarHangul = separarHangul;
window.hangulConv = hangulConv;

export { separarHangul, hangulConv };