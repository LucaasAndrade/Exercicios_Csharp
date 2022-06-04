
public void SomaPares(int numero)
{
    int j = 0;
    for(int i = 1; i<= numero; i++)
    {
        if(i % 2 == 0)
        {
            Console.Write($"{i} + ");
            j += i;
        }
    }
    Console.Write($" = {j}");
}

SomaPares(5);