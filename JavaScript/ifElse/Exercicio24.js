const readLine = require('prompt-sync')();

function TemperaturaCorporal(temperatura) {
    if (temperatura < 0)
        throw new Error('Digite apenas números positivos! ')
    if (isNaN(temperatura))
        throw new Error('Digite apenas números')
    let msg = "";
    if (temperatura < 37)
        msg = "Temperatura normal";
    else if (temperatura <= 37.5)
        msg = "Febrícola";
    else if (temperatura <= 38.5)
        msg = "Febre moderada";
    else
        msg = "Febre alta";

    return msg;
}

function main() {
    try {
        console.log('Informe a temperatura do paciente: ');
        let a = Number(readLine());

        let b = TemperaturaCorporal(a);
        console.log(b);
    } catch (err) {
        console.log(err.message);
    }
}

main();
