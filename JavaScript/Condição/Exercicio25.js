const readLine = require('prompt-sync')();

function signo(dia, mes) {
    let signo = "";

    if (mes == 01 && dia <= 20 ||
        mes == 12 && dia >= 22) {
        signo = "Capricórnio";
    }
    else if (mes == 01 && dia >= 21 ||
             mes == 02 && dia <= 18) {
        signo = "Aquário";
    }
    else if (mes == 02 && dia >= 19 ||
             mes == 03 && dia <= 20) {
        signo = "Peixes";
    }
    else if (mes == 03 && dia >= 21 ||
             mes == 04 && dia <= 20) {
        signo = "Áries";
    }
    else if (mes == 04 && dia >= 21 ||
             mes == 05 && dia <= 20) {
        signo = "Touro";
    }
    else if (mes == 05 && dia >= 21 ||
             mes == 06 && dia <= 20) {
        signo = "Gêmeos";
    }
    else if (mes == 06 && dia >= 21 ||
             mes == 07 && dia <= 22) {
        signo = "Câncer";
    }
    else if (mes == 07 && dia >= 23 ||
             mes == 08 && dia <= 22) {
        signo = "Leão";
    }
    else if (mes == 08 && dia >= 23 ||
             mes == 09 && dia <= 22) {
        signo = "Virgem";
    }
    else if (mes == 09 && dia >= 23 ||
             mes == 10 && dia <= 22) {
        signo = "Libra";
    }
    else if (mes == 10 && dia >= 23 ||
             mes == 11 && dia <= 21) {
        signo = "Escorpião";
    }
    else if (mes == 11 && dia >= 22 ||
             mes == 12 && dia <= 21) {
        signo = "Sagitário";
    }

    return signo;
}


function main() {
    try{
        console.log('Informe o dia de seu nascimento: ');
        let a = Number(readLine());

        console.log('Informe o mes de seu nascimento: ');
        let b = Number(readLine());

        let c = signo(a, b);
        console.log(c);
    }catch(err){
        console.log(err.message);
    }
}

main();
