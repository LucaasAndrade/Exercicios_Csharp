public  string Palindromo(string palavra)
{
    string inverso = "";
    for(int i = palavra.Length-1; i >= 0; i --)
    {
        inverso += palavra[i];
    }
    return inverso == palavra ? "É Palindromo" : "Não é Palindromo";
}

public void Main()
{
    try
    {
        Console.WriteLine("=-=-=- Descrubra se uma palavra é um Palindromo =-=-=-=-");

        Console.WriteLine("Digite uma palavra: ");
        string usuario = Console.ReadLine();
        Console.WriteLine(Palindromo(usuario));
        

    }
    catch(Exception ex)
    {
        Console.WriteLine("Ops, algo deu errado!");
        Console.WriteLine(ex.Message);
    }
}

Main();