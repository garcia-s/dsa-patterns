package main

//1- Cada producto puede tener una receta que se base en otros productos.

//2- Para calcular el stock de un producto en general se pude utilizar el stock de los productos que componen la receta
//Y calcular cuantos elementos son producibles a travez de la receta del producto de nivel superior

// 3- El precio se determina arbitrariamente por cada producto pero el coste, se determina por el coste de cada ingrediente de una receta de un producto.
type IProduct interface {
	getStock() int
	getCost() float64
}

type Producible struct {
	recipe []Product
	price  float64
}

type Product struct {
	cost  float64
	price float64
	stock int
}

func main() {

}
