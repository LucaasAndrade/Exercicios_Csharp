
public void Pares(int numero)
{
    int i = 0;
    while(i <= numero)
    {
        if(i % 2 == 0)
            Console.WriteLine(i);
        i++;
    }
}

Pares(10);