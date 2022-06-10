
function contarVogais(frase) {
    let vogais = 0;
    for(let i=0; i<frase.length; i++) {
        let letra = frase[i];
        if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
            vogais += 1;
        }
    }
    return vogais;
}

console.log(contarVogais("Bora Programar"));