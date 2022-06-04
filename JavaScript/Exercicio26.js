
function piramedeNumerica(numero) {
    for(i=1; i<= numero; i++){
        let a = i;
        let b = 2;
        for(j=numero; j>=i; j--){
            process.stdout.write(" ");
        }
        for(k=i; k>= 1; k--){
            process.stdout.write(`${a--}`);
        }
        for(l=2; l<=i; l++) {
            process.stdout.write(`${b++}`);
        }
        console.log();
    }
}

piramedeNumerica(5);