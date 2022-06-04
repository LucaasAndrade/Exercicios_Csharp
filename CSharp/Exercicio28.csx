
public int ContarVogais(string frase)
{
    int vogais = 0;
    for(int i =0; i<frase.Length; i++)
    {
        char letra = frase[i];
        if(letra == 'a'|| letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u')
        {
            vogais ++;
        }
    }
    return vogais;
}

Console.WriteLine(ContarVogais("Bora Programar"))