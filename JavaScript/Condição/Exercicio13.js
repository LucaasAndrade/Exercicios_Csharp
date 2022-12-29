const readLine = require('prompt-sync')();

function ingressosCinema(qtdMeia, qtdInteiras, dia) {
    let total = 0;
    if (dia == "quarta-feira") {
        total = (qtdMeia + qtdInteiras) * (28.5 / 2);
    }
    else {
        total = (qtdInteiras * 28.5) + (qtdMeia * 28.5 / 2);
    }

    return total;
}

function main() {
    try{
        console.log('Informe a quantidade de meias: ');
        let a = Number(readLine());

        console.log('Informe a quantidade de inteiras: ');
        let b = Number(readLine());

        console.log('Informe o dia da semana:');
        let c = readLine();

        let d = ingressosCinema(a, b, c)
        console.log(d)
    }catch(err) {
        console.log(err.message);
    }
}

main();
