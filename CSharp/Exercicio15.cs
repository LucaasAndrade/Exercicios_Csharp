
public void Triangulo(int numero)
{
    for(int i = 1; i<=numero; i++)
    {
        for(int j=1; j<=i; j++)
        {
            Console.Write("* ");
        }
        Console.WriteLine(" ");
    }
}

Triangulo(5);