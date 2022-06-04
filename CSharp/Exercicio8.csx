
public void ContarDecrescente(int fim, int inicio) 
{
    int i = inicio;
    while(i >= fim)
    {
        Console.WriteLine(i);
        i--;
    }
}

ContarDecrescente(1, 11);