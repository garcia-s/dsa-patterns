tweet = "How can mirrors be real if our eyes aren't real"

# Declaracion
def jadencase(text):
    #Separamos la frase en palabras
    words = text.split(" ")
    #Reemplazamos cada palabra con la version capitalizada
    for i, word in enumerate(words):
        words[i] = word.capitalize()
    #Unimos las cadenas de texto y devolvemos el resultado
    return " ".join(words)
    
def jadenCaseCopy(text):
    cadena = ""
    for i,letra in enumerate(text):
        if (i > 0 and text[i-1] == " "):
            cadena += letra.upper()
        else:
            cadena += letra
    return cadena


print(jadenCaseCopy(tweet))
