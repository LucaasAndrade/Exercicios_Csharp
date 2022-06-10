function tipoTriangulo(lado1, lado2, lado3) {
    if(isNaN(lado1) || isNaN(lado2) || isNaN(lado3))
        throw new Error('Informe apenas números! ');
    if(lado1 < 0 || lado2 < 0 || lado3 < 0)
        throw new Error('Informe apenas números positivos! ');

    let tipo = "";
    if (lado1 == lado2 && lado1 == lado3) {
        tipo = "Equilátero";
    }
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        tipo = "Isóceles";
    }
    else {
        tipo = "Escaleno";
    }

    return tipo;
}

function main() {
    try{
        console.log('Informe o comprimento do primeiro lado: ');
        let a = Number(readLine());
    
        console.log('Informe o comprimento do segundo lado: ');
        let b = Number(readLine());
    
        console.log('Informe o comprimento do terceiro lado: ');
        let c = Number(readLine());
    
        let d = tipoTriangulo(a, b, c);
        console.log(d);
                
    }catch(err) {
        console.log(err.message);
    }
}

main();