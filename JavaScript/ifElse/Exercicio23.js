const readLine = require('prompt-sync')();

function classificacaoCandidato(nota, notaCorte, notaMinima) {
    if (nota < 0 || notaCorte < 0 || notaMinima < 0)
        throw new Error('Digite apenas números positivos! ')
    if (isNaN(nota) || isNaN(notaCorte) || isNaN(notaMinima))
        throw new Error('Digite os valores corretos!')
    if (nota > notaMinima)
        return "Candidato Aprovado!";
    else if (nota < notaCorte)
        return "Candidato Reprovado";
    else
        return "Candidato está na Lista de Espera";
}

function main() {
    try {
        console.log('Informe qual a nota do canditato: ');
        let a = Number(readLine());

        console.log('Informe a nota de corte: ');
        let b = Number(readLine());

        console.log('Informe a nota mínima ');
        let c = Number(readLine());

        let d = classificacaoCandidato(a, b, c)
        console.log(d)
    } catch (err) {
        console.log(err.message);
    }
}

main();


