const readLine = require('prompt-sync')();

function Jokenpow(j1, j2)
{
    if(j1 != 'pedra' || j1 != 'tesoura' || j1 != 'papel' || j2 != 'pedra' || j2 != 'tesoura' || j2 != 'papel')
        throw new Error('Jogue PEDRA, PAPEL ou TESOURA!')
    let msg = "";
    if (j1 == "papel" && j2 == "pedra"   || 
        j1 == "pedra" && j2 == "tesoura" ||
        j1 == "tesoura" && j2 == "papel")
    {
        msg = "Jogador 1 ganhou!";
    }
    else if (j2 == "papel"   && j1 == "pedra"   || 
             j2 == "pedra"   && j1 == "tesoura" ||
             j2 == "tesoura" && j1 == "papel")
    {
        msg = "Jogador 2 ganhou!";
    }
    else 
    {
        msg = "Empate!";
    }

    return msg;
}


function main() {
    try{
        console.log('Jogador 1 | Jogue pedra, papel ou tesoura: ');
        let a = readLine();

        console.log('Jogador 2 | Jogue pedra, papel ou tesoura: ');
        let b = readLine();

        let c = Jokenpow(a, b)
        console.log(c)
    }catch(err) {
        console.log(err.message);
    }
}

main();