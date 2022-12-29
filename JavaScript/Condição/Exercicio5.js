const readLine = require('prompt-sync')();

function orcamentoFamiliar(ganhos, gastos) {
    if(isNaN(ganhos) || isNaN(gastos))
        throw new Error('Digite apenas números!')
    if(ganhos < 0 || gastos < 0) 
        throw new Error('Digite apenas números positivos!')
    if (ganhos > gastos) {
        return "Você está dentro do orçamento!";
    }
    else {
        return "Você está fora do orçamento! Não gaste mais!";
    }
}

function main() {
    try{
        console.log('Informe os ganhos de sua família: ');
        let a = Number(readLine());

        console.log('Informe os gastos: ');
        let b = Number(readLine());

        let c = orcamentoFamiliar(a, b);
        console.log(c);
    }catch(err){
        console.log(err.message);
    }
}

main();