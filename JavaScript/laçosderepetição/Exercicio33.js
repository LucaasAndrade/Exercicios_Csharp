
function ehPalindromo(frase) {
    let fraseInvertida = "";
    for(let i = frase.length-1; i >= 0; i--) {
        fraseInvertida += frase[i];
    }
    return frase == fraseInvertida ? "É Palindro" : "Não é Palindromo"; 
}

console.log(ehPalindromo("lucas"));