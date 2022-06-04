
public void TrianguloInverso(int numero)
{
    for(int i = 1; i<= numero; i++)
    {
        for(int j = numero; j>= i; j--)
        {
            Console.Write(" ");
        }
        for(int k = 1; k<= i; k++)
        {
            Console.Write("*");
        }
        Console.WriteLine(" ");
    }
}

TrianguloInverso(5);