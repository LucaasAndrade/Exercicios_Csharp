
public void ParesDecrecente(int numero)
{
    int i = numero;
    while(i >= 0)
    {
        if(i % 2 == 0)
            Console.WriteLine(i);
        i--;
    }
}

ParesDecrecente(10);