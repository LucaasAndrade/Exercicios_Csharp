
public void SomaNaturais(int numero){
    int j = 0;
    for(int i=1; i <= numero; i++)
    {
        Console.Write($"{i} + ");
        j += i;
    }
    Console.Write($"= {j}");
}

SomaNaturais(5);