
function PiramedeNumerica(numero) {
    for(i=1; i<= numero; i++) {
        for(j=1; j<=i; j++) {
            process.stdout.write(`${i} `);
        }
        console.log(" ");
    }
}

PiramedeNumerica(5);