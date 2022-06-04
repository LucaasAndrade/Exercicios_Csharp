
function retangulo(linha, coluna) {
    for(i=0; i< linha; i++) {
        for(j=0; j<coluna; j++) {
            process.stdout.write("* ");
        }
        console.log(" ");
    }
}

retangulo(5, 3);