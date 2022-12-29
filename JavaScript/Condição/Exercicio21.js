const readLine = require('prompt-sync')();

function mensalidadeFaculdade(valor, isento, desconto) {
    if(valor < 0)
        throw new Error('Digite apenas números positivos! ')
    if(isNaN(valor) || isNaN(desconto))
        throw new Error('Digite os valores corretos!')
    if (isento == 'sim'){
        return 0.0;
    }else{
        let valorDesc = valor * desconto / 100;
        let valorFinal = valor - valorDesc;
        return valorFinal;
    }
}

function main() {
    try{
        console.log('Informe o valor da mensalidade: ');
        let a = Number(readLine());

        console.log('É insento? ');
        let b = readLine();
    
        console.log('Informe a quantidade de desconto: ');
        let c = Number(readLine());

        let d = mensalidadeFaculdade(a, b, c)
        console.log(d)
    }catch(err) {
        console.log(err.message);
    }
}

main();
