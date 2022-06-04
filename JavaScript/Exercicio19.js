
function somaImpares(numero) {
    let j = 0;
    for(i=1;i<=numero;i++) {
        if(i%2!=0){
            process.stdout.write(`${i} + `);
            j += i;
        }
    }
    process.stdout.write(`= ${j}`);
}

somaImpares(5)