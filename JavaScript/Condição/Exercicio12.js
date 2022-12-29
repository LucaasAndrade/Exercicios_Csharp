const readLine = require('prompt-sync')();

function calculadora(n1, n2, op)
{
    if(isNaN(n1) || isNaN(n2)) 
        throw new Error('Informe os números que deseja Calcular!');
    let resposta = 0;
    if (op == "soma") {
        resposta = n1 + n2;
    }
    else if (op == "subtração" || op == 'menos') {
        resposta = n1 - n2;
    }
    else if (op == "divisão" || op == 'divisao') {
        resposta = n1 / n2;
    }
    else if (op == "multiplicação") {
        resposta = n1 * n2;
    }
    else if (op == "potenciação") {
        resposta = Math.Pow(n1, n2);
    }
    else {
        throw new Error("Operação inválida");
    }

    return resposta;
}


function main() {
    try{
        console.log('Informe o primeiro número: ');
        let a = Number(readLine());

        console.log('Informe o segundo número: ');
        let b = Number(readLine());

        console.log('Informe a operação que deseja:')
        let c = readLine();

        let d = calculadora(a, b, c)
        console.log(d)
    }catch(err) {
        console.log(err.message);
    }
}

main();