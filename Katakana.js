function convKatakana(palavra) {
    let silabas = palavra.split(".");
    let convertido = ""

    silabas.map((s) => {
        for (let x = 0; x <= Katakana.length - 1; x++){
            if(s == Katakana[x].frente){
                convertido += Katakana[x].verso;
                break;
            }
        }
    })

    return convertido;
}


let Katakana = [
    {frente: "a", verso: "ア"},
    {frente: "i", verso: "イ"},
    {frente: "u", verso: "ウ"},
    {frente: "e", verso: "エ"},
    {frente: "o", verso: "オ"},

    {frente: "ka", verso: "カ"},
    {frente: "ki", verso: "キ"},
    {frente: "ku", verso: "ク"},
    {frente: "ke", verso: "ケ"},
    {frente: "ko", verso: "コ"},

    {frente: "sa", verso: "サ"},
    {frente: "si", verso: "シ"},
    {frente: "su", verso: "ス"},
    {frente: "se", verso: "セ"},
    {frente: "so", verso: "ソ"},

    {frente: "na", verso: "ナ"},
    {frente: "ni", verso: "ニ"},
    {frente: "nu", verso: "ヌ"},
    {frente: "ne", verso: "ネ"},
    {frente: "no", verso: "ノ"},

    {frente: "ha", verso: "ハ"},
    {frente: "hi", verso: "ヒ"},
    {frente: "hu", verso: "フ"}, 
    {frente: "he", verso: "ヘ"},
    {frente: "ho", verso: "ホ"},

    {frente: "ta", verso: "タ"},
    {frente: "te", verso: "チ"},
    {frente: "ti", verso: "ツ"},
    {frente: "tu", verso: "テ"},
    {frente: "to", verso: "ト"},

    {frente: "ma", verso: "マ"},
    {frente: "mi", verso: "ミ"},
    {frente: "mu", verso: "ム"},
    {frente: "me", verso: "メ"},
    {frente: "mo", verso: "モ"},

    {frente: "ra", verso: "ラ"},
    {frente: "ri", verso: "リ"},
    {frente: "ru", verso: "ル"},
    {frente: "re", verso: "レ"},
    {frente: "ro", verso: "ロ"},

    {frente: "ya", verso: "ヤ"},
    {frente: "yi", verso: "イィ"},
    {frente: "yu", verso: "ユ"},
    {frente: "ye", verso: "イェ"},
    {frente: "yo", verso: "ヨ"},

    {frente: "wa", verso: "ワ"},
    {frente: "wi", verso: "ウィ"},
    {frente: "wu", verso: "ウゥ"},
    {frente: "we", verso: "ウェ"},    
    {frente: "wo", verso: "ヲ"},

    {frente: "ga", verso: "ガ"},
    {frente: "gi", verso: "ギ"},
    {frente: "gu", verso: "グ"},
    {frente: "ge", verso: "ゲ"},
    {frente: "go", verso: "ゴ"},

    {frente: "za", verso: "ザ"},
    {frente: "zi", verso: "ジ"}, 
    {frente: "zu", verso: "ズ"},
    {frente: "ze", verso: "ゼ"},
    {frente: "zo", verso: "ゾ"},

    {frente: "da", verso: "ダ"},
    {frente: "di", verso: "ヂ"}, 
    {frente: "du", verso: "ヅ"}, 
    {frente: "de", verso: "デ"},
    {frente: "do", verso: "ド"},

    {frente: "ba", verso: "バ"},
    {frente: "bi", verso: "ビ"},
    {frente: "bu", verso: "ブ"},
    {frente: "be", verso: "ベ"},
    {frente: "bo", verso: "ボ"},

    {frente: "pa", verso: "パ"},
    {frente: "pi", verso: "ピ"},
    {frente: "pu", verso: "プ"},
    {frente: "pe", verso: "ペ"},
    {frente: "po", verso: "ポ"},

    {frente: "fa", verso: "巾ァ"},
    {frente: "fi", verso: "巾ィ"},
    {frente: "fu", verso: "巾ゥ"},
    {frente: "fe", verso: "巾ェ"},
    {frente: "fo", verso: "巾ォ"},

    {frente: "ja", verso: "乙ァ"},
    {frente: "ji", verso: "乙ィ"},
    {frente: "ju", verso: "乙ゥ"},
    {frente: "je", verso: "乙ェ"},
    {frente: "jo", verso: "乙ォ"},

    {frente: "la", verso: "几ァ"},
    {frente: "li", verso: "几ィ"},
    {frente: "lu", verso: "几ゥ"},
    {frente: "le", verso: "几ェ"},
    {frente: "lo", verso: "几ォ"},

    {frente: "va", verso: "ヴァ"},
    {frente: "vi", verso: "ヴィ"},
    {frente: "vu", verso: "ヴゥ"},
    {frente: "ve", verso: "ヴェ"},
    {frente: "vo", verso: "ヴォ"},


    {frente: "n", verso: "ン"},
    {frente: "s", verso: "久"},
    {frente: "l", verso: "几"},
    {frente: "r", verso: "攵"},
    {frente: "xl", verso: "ヮ"},
    {frente: "xr", verso: "ヶ"},
    {frente: "xrr", verso: "ヵ"},
    {frente: "ã", verso: "ュ"},
    {frente: "ão", verso: "ォ"},
    {frente: "ãe", verso: "ェ"},

    


]

window.convKatakana = convKatakana;

export {Katakana, convKatakana};