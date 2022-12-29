const readLine = require('prompt-sync')();

function maiorNumero(n1, n2, n3) 
{
    if (isNaN(n1) || isNaN(n2) || isNaN(n3))
        throw new Error('Digite apenas números');
    let msg = "";
    if (n1 > n2 && n1 > n3) {
        msg = "O número " + n1 + " é maior que o número " + n2 + " e " + n3;
    }   
    else if (n2 > n1 && n2 > n3) {
        msg = "O número " + n2 + " é maior que o número " + n1 + " e " + n3;
    }
    else if (n3 > n1 && n3 > n2) {
        msg = "O número " + n3 + " é maior que o número " + n1 + " e " + n2;
    }
    else {
        msg = "Números iguais";
    }
    return msg;
}

function main() {
    try{
        console.log('Digite um número: ');
        let a = Number(readLine());

        console.log('Digite outro número: ');
        let b = Number(readLine());

        console.log('Digite outro número: ')
        let c = Number(readLine());

        let d= maiorNumero(a, b, c);
        console.log(d);
    }catch(err){
        console.log(err.message);
    }
}

main();