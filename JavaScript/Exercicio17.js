
function SomaNaturais(numero) {
    let j = 0;
    for(i=1; i<= numero; i++) {
        if(i < numero)
        process.stdout.write(`${i} + `)
        j += i;
    }
    process.stdout.write(`= ${j}`)
}

SomaNaturais(5);