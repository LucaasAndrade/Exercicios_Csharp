
function verificadorDeSenha(password) {
    let contCaracter = 0;
    let contNumber = 0;
    let numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let caractersEspeciais = ["!", "@", "#", "$", "%", "&", "*"]
    for(let i = 0; i<=password.length-1; i++) {
        if(password.length >= 8) {
            if(numeros.indexOf(password[i]) > -1) {
                contNumber ++;
            }
            if(caractersEspeciais.indexOf(password[i]) > -1) {
                contCaracter ++;
            }
        }
    }
    if(contCaracter >= 2 && contNumber >= 2){
        return true;
    }
    else{
        return false
    }
}

console.log(verificadorDeSenha("lcuas123#@"))