
public void Triangulo(int numero)
{
    for(int i=1; i<=numero; i++)
    {
        for(int j =numero; j>=i; j--)
        {
            Console.Write(" ");
        }
        for(int k = 1; k<=i; k++)
        {
            Console.Write($"{i} ");
        }
        Console.WriteLine(" ");
    }
}

Triangulo(5);