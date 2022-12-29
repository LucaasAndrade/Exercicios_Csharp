
function acharLetra(frase, letra) {
    for (let i in frase) {
        if (frase[i] === letra) return i;
    }
}

console.log(acharLetra("Bora programar", "a"));