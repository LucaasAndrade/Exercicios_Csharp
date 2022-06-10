
function exponenciacao(numero, expoente) {
    if(expoente == 0)
        return 1;
    if(numero <= 0 || expoente < 0)
        throw new Error("Use apenas números positivos!")
    let j = numero;
    for(i=2; i<= expoente; i++) {
        j *= numero;
    }
    console.log(`o numero ${numero} elevado à sua ${expoente} potênica é igual a ${j}`);
}

exponenciacao(2, 0)