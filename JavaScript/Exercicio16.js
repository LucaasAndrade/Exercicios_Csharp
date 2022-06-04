
function trianguloInvertido(numero) {
    for(i=1; i<=numero; i++) {
        for(j=numero; j >= i; j--) {
            process.stdout.write(" ");
        }
        for(k=1; k<=i; k ++){
            process.stdout.write("*");
        }
        console.log();
    }
}

trianguloInvertido(5);