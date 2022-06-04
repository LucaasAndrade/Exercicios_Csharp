
function palindromoNumerico(numero) {
    numero = String(numero);
    let numeroInveverco = "";
    for(let i = numero.length-1; i>=0; i--) {
        numeroInveverco += numero[i];
    }
    return numero == numeroInveverco ? "É palindromo" : "Não é Palindromo";
}

console.log(palindromoNumerico(2222));