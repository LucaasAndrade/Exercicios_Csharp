
function fatorial(numero) {
    let j = 1;
    for(i=numero; i>=1; i--) {
        process.stdout.write(`${i}`)
        if(i >= 2)
            process.stdout.write(` x `)
        else
            process.stdout.write(` => ${j}`)
        j *= i;
    }
}

fatorial(5)