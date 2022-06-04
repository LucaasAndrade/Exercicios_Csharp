
public void MostrarMultiplos(int multiplo, int fim)
{
    for(int i=0; i <= fim; i += multiplo)
    {
        Console.WriteLine(i);
    }
}

MostrarMultiplos(4, 10);