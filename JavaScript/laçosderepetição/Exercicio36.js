
function converterString(palavra) {
    let codigo = "";
    for(let i = 0; i <=palavra.length-1; i++) {
        codigo += String(palavra.charCodeAt(i));
        codigo += " ";
    }
    return codigo;
}

console.log(converterString("Bruno"))