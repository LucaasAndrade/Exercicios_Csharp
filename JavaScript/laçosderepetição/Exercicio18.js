
function SomaPares(numero) {
    let j = 0;
    for(i=1; i<=numero; i++){
        if(i % 2 == 0){
            j += i;
            process.stdout.write(`${i} + `);
        }
    }
    process.stdout.write(`= ${j}`);
}

SomaPares(5)