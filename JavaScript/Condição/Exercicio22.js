const readLine = require('prompt-sync')();

function MensalidadeFaculdade(curso, isento, desconto) {
    let valor = 0;
    if (isento == 'sim') {
        return 0.0;
    }
    else {
        if (curso == "SI")
            valor = 550.0;
        else if (curso == "ADS")
            valor = 750.0;
        else if (curso == "CS")
            valor = 1150.0;
        else if (curso == "EC")
            valor = 1300.0;
        else if (curso == "ES")
            valor = 950.0;
    }
    let valorDesc = valor * desconto / 100;
    let valorFinal = valor - valorDesc;

    return valorFinal;
}

function main() {
    try {
        console.log('Informe o curso: ');
        let a = readLine();

        console.log('É insento? ');
        let b = readLine();

        console.log('Informe a quantidade de desconto: ');
        let c = Number(readLine());

        let d = MensalidadeFaculdade(a, b, c)
        console.log(d)
    } catch (err) {
        console.log(err.message);
    }
}

main();


