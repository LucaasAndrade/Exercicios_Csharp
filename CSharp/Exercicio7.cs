
public void ImparesDecrecentes(int numero)
{
    int i = numero;
    while(i >= 1)
    {
        if(i % 2 != 0)
            Console.WriteLine(i);
        i--;
    }
}

ImparesDecrecentes(10);