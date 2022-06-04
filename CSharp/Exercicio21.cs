
public void Potenciacao(int numero, int expoente)
{
    if(numero <= 0 || expoente <= 0)
        throw new Exception("Digite apenas números positivos.");
    int j = numero;
    for(int i = 2; i <= expoente; i++)
    {
        j *= numero;
    }
    Console.WriteLine($"O número {numero} elevado à sua {expoente} é igual a {j}");
}

Potenciacao(2, 4);