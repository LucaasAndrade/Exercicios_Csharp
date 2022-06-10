const readLine = require('prompt-sync')();

function DiaSemana(dia) {
    if (dia < 0 || dia > 6)
        throw new Error("Dia da semana inválido");
        
    let diaSeamana = "";
    if (dia == 0)
        diaSeamana = "Domingo";
    else if (dia == 1)
        diaSeamana = "Segunda";
    else if (dia == 2)
        diaSeamana = "Terça";
    else if (dia == 3)
        diaSeamana = "Quarta";
    else if (dia == 4)
        diaSeamana = "Quinta";
    else if (dia == 5)
        diaSeamana = "Sexta";
    else if (dia == 6)
        diaSeamana = "Sábado";

    return diaSeamana;
}

function main() {
    try {
        console.log('Informe o dia da semana (em número de 0 à 6)')
        let a = Number(readLine());

        let b = DiaSemana(a);
        console.log(b)
        
    }catch(err) {
        console.log(err.message);
    }
}

main();
