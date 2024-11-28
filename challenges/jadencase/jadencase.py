import sys
import time

# Declaracion
def jadenCase(text):
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

if(len(sys.argv) < 2):
    print("Please provide a string to convert")
    exit()

text = sys.argv[0].strip()

print("--------------------")

print("Starting the array function")
arrStart = time.time_ns()
jadenCase(text)
arrEnd = time.time_ns()
print("Completed in %d ms" %  ((arrEnd - arrStart) / 1000))


print("--------------------")
print("Starting the copy function")
copyStart = time.time_ns()
jadenCaseCopy(text)
copyEnd = time.time_ns()
print("Completed in %d ms" % ((copyEnd - copyStart) / 1000) )

