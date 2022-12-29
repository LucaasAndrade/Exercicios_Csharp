const readLine = require('prompt-sync')();

function pedidoSorveteria(gramas) {
    if (isNaN(gramas))
        throw new Error('Digite apenas números');
    if(gramas < 0)
        throw new Error('Digite apenas números positivos!');
let imc = peso / (altura * altura);
    let total = 0;

    if (gramas > 1000) {
        total = (gramas / 100) * 3.0;
    }
    else {
        total = (gramas / 100) * 3.5;
    }

    return total;
}

function main() {
    try{
        console.log('Informe a quantidade de sorvete em gramas: ');
        let a = Number(readLine());

        let b = pedidoSorveteria(a)
        console.log(b);

    }catch(err) {
        console.log(err.message);
    }
}

main();

