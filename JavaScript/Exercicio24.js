
function triangulo(numero) {
    conta = 1;
    for(i=1; i<= numero; i++) {
        for(j=1; j<= i; j++){
            process.stdout.write(`${conta}`)
            conta++
        }
        console.log(" ")
    }
}

triangulo(4)