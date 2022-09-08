/* Carrito de compras */

const productos = [
    {nombre: "Osimalteada", categoria: "Bebidas", id: 25, stock: 50, precio: 150},
    {nombre: "Gatocake", categoria: "Postres", id: 10, stock: 63, precio: 200},
    {nombre: "Rinolate", categoria: "Bbebidas", id: 15, stock: 20, precio: 150}
];

let total = productos.reduce((acumulador , item) => acumulador + item.precio, 0);
console.log(total);

/* Filtro */

let nombre = prompt("Ingrese el nombre del producto a buscar");
let producto = productos.find(item => item.nombre === nombre);
let mensaje = `
    nombre = ${producto.nombre}
    categoria = ${producto.categoria}
    id = ${producto.id}
    stock = ${producto.stock}
    precio = ${producto.precio}
    `;
alert(mensaje);