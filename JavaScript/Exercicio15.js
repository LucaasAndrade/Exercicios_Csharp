
function triangulo(numero) {
    for(i=1; i<= numero; i++) {
        for(j=1; j<=i; j++){
            process.stdout.write("* ");
        }
        console.log(" ");
    }
}

triangulo(5)