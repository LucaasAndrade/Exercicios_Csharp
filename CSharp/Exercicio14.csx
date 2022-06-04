
public void Retangulo(int linha, int coluna)
{
    for(int i = 0; i < linha; i++)
    {
        for(int j = 0; j < coluna; j++)
        {
            Console.Write("* ");
        }
        Console.WriteLine(" ");
    }
}

Retangulo(5, 3);