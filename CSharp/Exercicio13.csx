
public void Quadrado(int numero)
{
    for(int i = 0; i < numero; i++)
    {
        for(int j = 0; j < numero; j++)
        {
            Console.Write("* ");
        }
        Console.WriteLine(" ");
    }
}

Quadrado(5)