
// A - E - I - O - U

function verificarVogais(frase) {
    let vogais = "aeiou";
    let user = ""
    for (let i of vogais) {
        for (let j of frase) {
            if (i === j) {
                user += j;
                break;
            }
        }
    }
    return user === vogais
}

console.log(verificarVogais("eu avisei voce"));
