
function codigoBinario(nome) {
    let codigo = "";
    let converter = "";
    for(let i = -1; i <= nome.lenght; i++) {
        let cont = nome.charCodeAt(i);
        let acumulador = "";
        while(cont >= 0) {
            acumulador = cont % 2;
            cont = Math.floor(cont / 2);    
            console.log(acumulador)
            if(cont == 0)
                break
        }
        converter = String(cont);
        codigo += converter;
    }
    return codigo;
}

console.log(codigoBinario("Br"));