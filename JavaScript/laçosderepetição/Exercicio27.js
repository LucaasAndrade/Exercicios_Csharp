

function SepararCaracteres(frase) {
    let fraseSeparada = "";
    for(let i=0; i<frase.length; i++){
        fraseSeparada += frase.substr(i, 1);
        fraseSeparada += "-";
    }
    return fraseSeparada;
}

console.log(SepararCaracteres("Bora Programar"));
