const readLine = require('prompt-sync')();

function ingressosCinema(qtdMeia, qtdInteiras, dia, pais) {
    let total = 0;

    if (pais == "nacional") {
        total = (qtdMeia + qtdInteiras) * 5.0;
    }
    else {
        if (dia == "quarta-feira") {
            total = (qtdMeia + qtdInteiras) * (28.5 / 2);
        }
        else {
            total = (qtdInteiras * 28.5) + (qtdMeia * 28.5 / 2);
        }
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

        console.log('Informe qual a nacionalidade no fillme: ');
        let d = readLine();

        let e = ingressosCinema(a, b, c, d)
        console.log(e)
    }catch(err) {
        console.log(err.message);
    }
}

main();
