
function trianguloInvertido(numero) {
    for(i=1; i < numero; i++) {
        for(j=1 ; j < numero; j++) {
            if(j < numero-i)
                process.stdout.write(" ");
            else
                process.stdout.write("*");
        }
        console.log(" ");
    }
}

trianguloInvertido(5);