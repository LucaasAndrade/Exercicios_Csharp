
function codigoBinario(nome) {
    let resposta = ""
    for (let i = 0; i <= nome.length-1; i++) {
        console.log(i);
        resposta += (nome.charCodeAt(i).toString(2) + " ");
    }
    return resposta
}

console.log(codigoBinario("Bruno"));