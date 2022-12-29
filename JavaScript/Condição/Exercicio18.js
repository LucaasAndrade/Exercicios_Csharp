const readLine = require('prompt-sync')();

function IMC(altura, peso)
{   
    if (isNaN(altura) || isNaN(peso))
        throw new Error('Digite apenas números');
    if(altura <= 0 || peso <= 0)
    throw new Error('Digite apenas números positivos!');
    let imc = peso / (altura * altura);

    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do Peso";
    }
    else if (imc <= 24.9) {
        classificacao = "Peso Normal";
    }
    else if (imc <= 29.9) {
        classificacao = "Sobrepeso";
    }
    else if (imc <= 34.9) {
        classificacao = "Obesidade Grau I";
    }
    else if (imc <= 39.9) {
        classificacao = "Obesidade Grau II";
    }
    else {
        classificacao = "Obesidade Grau III";
    }
    
    return classificacao;
}


function main() {
    try{
        console.log('Informe sua altura: ');
        let a = Number(readLine());

        console.log('Informe seu peso: ');
        let b = Number(readLine());

        let c = IMC(a, b)
        console.log(c)
    }catch(err) {
        console.log(err.message);
    }
}

main();