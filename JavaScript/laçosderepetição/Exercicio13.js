
function quadrado(numero) {
    for(i=0; i<numero; i++){
        for(j=0;j<numero;j++){
            process.stdout.write("* ");
        }
        console.log(" ");
    }
}

quadrado(5)