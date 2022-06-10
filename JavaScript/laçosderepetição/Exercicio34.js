
function inverterNumero(numero) {
    numero = String(numero);
    let numeroInveverco = "";
    for(let i= numero.length-1; i>= 0; i--) {
        numeroInveverco += numero[i];
    }
    return Number(numeroInveverco);
}

console.log(inverterNumero(2004));