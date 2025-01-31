package linked_list

// En: A struct that represents the whole Linked List
//
// Es: Un struct que representa la lista enlazada
type LinkedList[T any] struct {
	///En: The first element of the list
	///Es: El primer elemento de la lista
	head *node[T]
	//En: We are going to use a tail too here, We use a tail because we are going to append too, And if we don't use a tail we'll have to traverse the list to Append making it O(n)
	//
	//Es: Vamos a usar una variable "cola" para guardar un pointer al ultimo elemento, para no tener que recorrer toda la lista para agregar un elemento al final en la funcion Append()
	tail *node[T]

	//En: We are going to save the length to make it easier to traverse
	//
	//Es: Guardamos el tamaño de la lista para poder recorrer más facil
	len int
}

// En: The node containing both the data and a pointer to the next item
//
// Es: Un nodo que contiene la data y un pointer al siguiente item
type node[T any] struct {
	data T
	next *node[T]
}

// En:Inserts data at the end of the list
//
// Es: Agrega la data al final de la lista
func (l *LinkedList[T]) Append(data T) {
	newNode := &node[T]{
		data: data,
	}
	//If its empty
	if l.head == nil {
		l.head = newNode
		l.tail = newNode
		l.len++
		return
	}

	l.tail.next = newNode
	l.tail = newNode
	l.len++
}

// En:Inserts data at the start of the list
//
// Es: Agrega la data al principio de la lista
func (l *LinkedList[T]) Prepend(data T) {
	newNode := &node[T]{
		data: data,
	}

	//If its empty
	if l.head == nil {
		l.head = newNode
		l.tail = newNode
		l.len++
		return
	}

	newNode.next = l.head
	l.head = newNode
	l.len++
}



// En: Removes and returns the last element of the Linked List.
// Since this is a Singly Linked List this operation will have to traverse the list, making it a O(n) deletion
//
// Es: Borra y retorna el ultimo valor de la Lista Enlazada.
// Como esta es una Lista Enlazada Simple, tendremos que recorrer la lista y eso convierte la complejidad de tiempo a O(n).
func (l *LinkedList[T]) Pop() (*T, bool) {
	if l.len == 0 {
		return nil, false
	}

	second := l.head
	if l.len == 1 {
		l.len--
		l.head = nil
		l.tail = nil
		return &second.data, true
	}

	for i := 0; i < l.len-2; i++ {
		second = second.next
	}

	val := second.next.data
	second.next = nil
	l.tail = second
	l.len--
	return &val, true
}

// En:Removes and returns the fist element on the list
//
// Es: Borra y retorna el primer elemento en la lista

func (l *LinkedList[T]) PopFirst() (*T, bool) {
	if l.len == 0 {
		return nil, false
	}

	val := &l.head.data
	l.head = l.head.next
	if l.len == 1 {
		l.tail = nil
	}
	l.len--
	return val, true
}
