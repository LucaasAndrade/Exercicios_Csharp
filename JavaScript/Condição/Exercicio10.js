const readLine = require('prompt-sync')();

function orcamentoFamiliar(ganhos, gastos) {
    if(isNaN(ganhos) || isNaN(gastos))
        throw new Error('Informe apenas números!')
    if(ganhos < 0 || gastos < 0)
        throw new Error('Informe apenas números positivos!')
    let porcentagemGastos = gastos / ganhos * 100;

    let msg = "";
    if (porcentagemGastos < 30) {
        msg = "Parabéns, está gerenciando bem seu orçamento!";
    }
    else if (porcentagemGastos < 50) {
        msg = "Muito bem, seus gastos não ultrapassam metade dos ganhos!";
    }
    else if (porcentagemGastos < 80) {
        msg = "Atenção, melhor conter os gastos!";
    }
    else if (porcentagemGastos <= 100) {
        msg = "Cuidado, seu orçamento pode ficar comprometido!";
    }
    else {
        msg = "Orçamento comprometido! Hora de rever seus gastos!";
    }

    return msg;
}

function main() {
    try{
        console.log('Informe os ganhos de sua família: ');
        let a = Number(readLine());

        console.log('Informe os gastos: ');
        let b = Number(readLine());

        let c = orcamentoFamiliar(a, b);
        console.log(c);
    }catch(err) {
        console.log(err.message);
    }
}

main();