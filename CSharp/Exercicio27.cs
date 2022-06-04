
public string SepararCaracteres(string frase) {
    string palavraSeparada = "";
    for(int i = 0; i<frase.Length; i++)
    {
        char letra = frase[i];
        palavraSeparada +=  letra;
        palavraSeparada += "-";
    }
    return palavraSeparada;
}

Console.WriteLine(SepararCaracteres("Bora Programar!"));
