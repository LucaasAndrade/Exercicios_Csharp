
public void SomaImpares(int numero)
{
    int j = 0;
    for(int i =0; i<= numero; i++)
    {
        if(i % 2 != 0)
        {
            Console.Write($"{i} + ");
            j += i;
        }
    }
    Console.Write($"= {j}");
}

SomaImpares(5)