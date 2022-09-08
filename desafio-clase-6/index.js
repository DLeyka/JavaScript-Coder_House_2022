/* Array de productos de un e-commerce */

class Producto {
    constructor (nombre, categoria, id, stock, precio){
        this.nombre = nombre;
        this.categoria = categoria;
        this.id = id;
        this.stock = stock;
        this.precio = precio;
    }
}

let producto1 = new Producto ("Osimalteada", "Bebidas", 25, 50, 150);

const productos = [
    new Producto("Gatocake", "Postres", 10, 63, 200),
    new Producto("Rinolate", "Bbebidas", 15, 20, 150)
];

productos.push(producto1);
console.log(productos)

