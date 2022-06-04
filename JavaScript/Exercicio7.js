
function imparesDecrecente(numero) {
    let i = numero;
    while(i >= 1) {
        if(i % 2 != 0)
            console.log(i);
        i--;
    }
}

imparesDecrecente(10)