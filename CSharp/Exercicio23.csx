
public void PiramedeNumerica(int numero)
{
    for(int i= 1; i<= numero; i++)
    {
        for(int j = 1; j<=i; j++)
        {
            Console.Write($"{i} ");
        }
        Console.WriteLine(" ");
    }
}

PiramedeNumerica(5)