
const readLine = require('prompt-sync')();

function semaforoPedestre(cor) {
    if (cor != "vermelho" && cor != "verde")
        throw new Error("Semáforo inoperante");

    let msg = "Espere";
    if (cor == "verde") {
        msg = "Atravesse";
    }
    return msg;
}

function main() {
    try{
        console.log('Informe a cor do semáforo: ');
        let a = readLine();

        let b = semaforoPedestre(a)

        console.log(b)
    }catch(err){
        console.log(err.message);
    }
}

main();