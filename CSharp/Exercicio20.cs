
public void Fatorial(int numero)
{
    int j = 1;
    for(int i = numero; i>=1; i--)
    {
        Console.Write($" {i} ");
        if(i >= 2)
            Console.Write(" x ");
        else
            Console.Write($" => {j}");
        j *= i;
    }
}

Fatorial(5);