
public void Dobro(int numero)
{
    int i = 1;
    while(i <= numero)
    {
        Console.WriteLine($"O dobro de {i} é {i*2}");
        i++;
    }
}

Dobro(5);