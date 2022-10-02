
let categoria = prompt("¿Buscas una categoría en especial?, escribela");
let categorias = categoria === "malteada" ?  alert("Si tenemos") : alert("No tenemos, lo sentimos");


let contenedor = document.getElementById("contenedor");
let productos = [
    {id: 1, nombre: "Conedwich", precio: 150},
    {id: 2, nombre: "Animal donuts", precio: 50},
    {id: 3, nombre: "Coneke", precio: 80},
    {id: 4, nombre: "Comi-Oso", precio: 250},
    {id: 5, nombre: "Animatel", precio: 130},
    {id: 6, nombre: "Corneconio", precio: 75},
    {id: 7, nombre: "SopOso", precio: 300},
    {id: 8, nombre: "Malte-Toons", precio: 175},
    {id: 9, nombre: "Pokelate", precio: 180},
    {id: 10, nombre: "Normi-teada", precio: 150},
    {id: 11, nombre: "Delis-Oso", precio: 130}
];
let precio = parseInt(prompt("Ingrese el valor minimo del producto"));
let filtrados = productos.filter(item => item.precio > precio);

for(const producto of filtrados){
  let div = document.createElement("div");
  div.innerHTML = `
    <h3>ID: ${producto.id}</h3>
    <h2>Producto: ${producto.nombre}</h2>
    <h3>$${producto.precio}</h3>
  `;
  contenedor.append(div);
}
