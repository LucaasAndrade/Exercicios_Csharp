const readLine = require('prompt-sync')();

function maiorNumero(n1, n2) {
    if (isNaN(n1) || isNaN(n2))
        throw new Error('Digite apenas números');
    let msg = "";
    if (n1 > n2) {
        msg = "O número " + n1 + " é maior que o número " + n2;
    }
    else if (n1 < n2) {
        msg = "O número " + n2 + " é maior que o número " + n1;
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

        let c = maiorNumero(a, b);
        console.log(c)
    }catch(err){
        console.log(err.message)
    }
}

main();