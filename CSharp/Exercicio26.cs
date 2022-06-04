
public void PiramedeNumerica(int numero)
{
    for(int i = 1; i<= numero; i++)
    {
        int contador = numero;
        int contador2 = 2;
        for(int j = 1; j<=numero; j++)
        {
            if(j<=numero-i)
                Console.Write(" ");
            else
                Console.Write($"{contador}");
                Console.Write(" ");
                contador--;
        }
        for(int k = 2; k <= i; k++)
        {
            Console.Write($"{contador2}");
            Console.Write(" ");

            contador2++;
        }
        Console.WriteLine();
    }
}

PiramedeNumerica(5)