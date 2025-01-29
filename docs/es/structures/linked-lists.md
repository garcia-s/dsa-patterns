# Listas enlazadas

Las listas enlazadas son un tipo de estructura de datos usada para almacenar una secuencia de elementos. A diferencia de los arreglos, no se almacenan en de forma contigua en memoria; en vez, se utilizan __nodos__ que están conectados mediante punteros (o referencias).


Cada nodo en una lista enlazada generalmente consta de dos componentes:

1- Dato – El valor real almacenado en el nodo.
2- Puntero (o referencia) – Un enlace a otro nodo en la secuencia.

Ahora, dependiendo del __tipo__ de lista enlazada, podríamos tener una referencia al siguiente nodo y otra al nodo anterior, eso  permite moverse hacia adelante y/o hacia atrás. Las que tienen dos referencias se llaman __listas doblemente enlazadas__, y puedes encontrarlas [aquí](./doubly-linked-lists.md).


### Ventajas sobre los arreglos

- Tamaño Dinámico – Las listas enlazadas son dinámicas por naturaleza; crecen y se reducen según sea necesario.
- Inserciones y eliminaciones muy eficientes – La complejidad de tiempo para eliminar un elemento en una lista enlazada es __constante__ (O(1)), mientras que en los arreglos puede ser __lineal__ (O(N)).
- No se requiere preasignación de memoria – No es necesario solicitar memoria de antemano, como ocurre con un array dinámico o un ArrayList.

### Desventajas sobre los arreglos
- Se necesita más memoria – Cada nodo requiere un poco más de memoria debido a los punteros.
- No hay acceso aleatorio – En los arreglos, puedes usar ```arr[3]``` para acceder al cuarto elemento en __tiempo constante__ (O(1)). En una implementación estándar de una lista enlazada, acceder al tercer elemento requiere recorrer la lista, lo que toma __tiempo lineal__ (O(N)).

### Cuándo Usarlas

Las listas enlazadas realmente destacan cuando necesitas pocos accesos aleatorios pero muchas inserciones y eliminaciones al inicio o al final de la lista (ya que no es necesario recorrerla).

En mi experiencia, las he visto utilizadas principalmente en [colas](./queues.md) (una estructura de datos Primero en Entrar, Primero en Salir – FIFO) y en [pilas](./stacks.md) (una estructura de datos Primero en Entrar, Último en Salir – LIFO).

Se puede implementar acceso aleatorio mediante __tabulación__ para optimizar la velocidad de acceso, pero esto añade complejidad y requiere un caso de uso muy específico.

### Ejemplos:

- [Typescript](../../../typescript/src/structures/doubly_linked_list.ts)
- [Golang](../../../golang/pkg/structures/linked_list/linked_list.go)
