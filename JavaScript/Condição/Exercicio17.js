const readLine = require('prompt-sync')();

function classificacaoAluno(n1, n2, n3, qtdFaltas) {
    if (qtdFaltas > 30)
        return "Reprovado por faltas";

    let media = (n1 + n2 + n3) / 3;

    let classificacao = "";
    if (media > 8) {
        classificacao = "Aprovado com sucesso";
    }
    else if (media >= 5) {
        classificacao = "Aprovado";
    }
    else if (media >= 3) {
        classificacao = "Recuperação";
    }
    else if (media > 0) {
        classificacao = "Reprovado";
    }
    else {
        classificacao = "Desistente";
    }

    return classificacao;
}


function main() {
    try{
        console.log('Informe a primeria nota: ');
        let a = Number(readLine());

        console.log('Informe a segunda nota: ');
        let b = Number(readLine());

        console.log('Informe a terceira nota:');
        let c = Number(readLine());

        console.log('Informe a quantidade de faltas:');
        let d = Number(readLine());

        let e = classificacaoAluno(a, b, c, d);
        console.log(e);
    }catch(err) {
        console.log(err.message);
    }
}

main();