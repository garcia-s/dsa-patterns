# El algoritmo quicksort

Quicksort es bastante fácil de entender. Utiliza la técnica de divide y vencerás para ordenar un arreglo.

Quicksort ordena los elementos in-place (en el mismo lugar), lo que puede tener ciertos beneficios, ya que solicitar memoria al sistema operativo mediante llamadas al sistema (syscalls) es una operación razonablemente costosa, incluso en lenguajes con recolección de basura. Pero primero, debes elegir un pivote.

### Elegir el pivote

El pivote es el elemento de la lista que vamos a utilizar para subdividirla y comenzar a resolver el problema. Estas son las estrategias comunes:

- Elegir siempre el primer o último elemento: Es bastante directo, simplemente escogemos el primer o último elemento.

- Elegir un elemento aleatorio: De nuevo, es fácil de entender, simplemente selecciona un elemento al azar. Este enfoque es bueno porque minimiza las posibilidades de encontrarse con un caso peor.

- Elegir el elemento medio: Este es un enfoque muy bueno, pero encontrar la media solo es posible en tiempo lineal, por lo que en promedio tomará más tiempo debido al costo adicional de calcularla.

- En este caso, vamos a usar la técnica de la media de tres, pero dependiendo de la situación, otra técnica de selección de pivote podría ofrecer mejores resultados.

### Particionamiento

Después, debemos reorganizar los elementos de modo que todos los elementos menores al pivote queden a un lado y todos los mayores queden al otro lado (dependiendo de cómo queramos ordenarlos).

Recursión o iteración
Después de realizar el particionamiento, podemos optar por usar recursión o iteración para procesar la lista. Es importante explicar algunas diferencias entre los dos enfoques.

- Iterativo: Para la versión iterativa, necesitamos introducir una estructura como una pila (stack) o lista enlazada para realizar un seguimiento durante la operación. Esto introduce un costo adicional de memoria y, dependiendo del rendimiento de la pila, podría ser más lento. Además, el enfoque iterativo es más complejo de escribir.

Este hilo en [Stack Overflow](https://stackoverflow.com/questions/12553238/quicksort-iterative-or-recursive) muestra cómo la versión iterativa parece depender del rendimiento de la pila.

- Recursivo: Esta solución es más simple (y generalmente más rápida). Sin embargo, la mayoría de los lenguajes tienen un límite en la profundidad de la recursión. Por lo tanto, al ordenar listas muy grandes con un enfoque recursivo, podría ocurrir un desbordamiento de pila (stack overflow), dependiendo del lenguaje. Esto suele suceder cuando la selección del pivote es deficiente y genera particionamientos desequilibrados de la lista.







