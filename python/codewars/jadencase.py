# Declaracion
def jadenCase(text):
    # Separamos la frase en palabras
    words = text.split(" ")
    # Reemplazamos cada palabra con la version capitalizada
    for i, word in enumerate(words):
        words[i] = word.capitalize()
    # Unimos las cadenas de texto y devolvemos el resultado
    return " ".join(words)
