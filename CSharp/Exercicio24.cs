
public void Triangulo(int numero)
{
    int conta = 1;
    for(int i= 1; i<= numero; i++)
    {
        for(int j = 1; j<=i; j++)
        {
            Console.Write($"{conta} ");
            conta++;
        }
        Console.WriteLine(" ");
    }
}

Triangulo(4);