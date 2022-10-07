const shopContent = document.getElementById("shopContent");

const productos = [
    {
        id: 1,
        nombre: "Conedwich",
        precio: 150,
        img: "./assets/img/img1.jpg"
    },
    {
        id: 2,
        nombre: "Animal donuts",
        precio: 50,
        img: "./assets/img/img2.jpg"
    },
    {
        id: 3,
        nombre: "Coneke",
        precio: 80,
        img: "./assets/img/img3.jpg"
    },
    {
        id: 4,
        nombre: "Comi-Oso",
        precio: 250,
        img: "./assets/img/img4.jpg"
    },
    {
        id: 5,
        nombre: "Animatel",
        precio: 130,
        img: "./assets/img/img5.jpg"
    },
    {
        id: 6,
        nombre: "Corneconio",
        precio: 75,
        img: "./assets/img/img6.jpg"
    },
    {
        id: 7,
        nombre: "SopOso",
        precio: 300,
        img: "./assets/img/img7.jpg"
    },
    {
        id: 8,
        nombre: "Malte-Toons",
        precio: 175,
        img: "./assets/img/img8.jpg"
    },
    {
        id: 9,
        nombre: "Pokelate",
        precio: 180,
        img: "./assets/img/img9.jpg"
    },
    {
        id: 10,
        nombre: "Normi-teada",
        precio: 150,
        img: "./assets/img/img10.jpg"
    },
    {
        id: 11,
        nombre: "Delis-Oso",
        precio: 130,
        img: "./assets/img/img11.jpg"
    }    
];

let carrito = [];

productos.forEach((product) => {
    // contenedor de los productos (Cards)
    let content = document.createElement("div");
    // agregar estilos a la tarjeta
    content.className = "cards";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">$${product.precio} MXN</p>
    `;
    // Botón
    let add = document.createElement("button");
    add.innerText = "+"
    // agregar estilos al botón
    add.className = "addShop"
    //añadir Cards y botón al front
    shopContent.append(content);
    content.append(add);

    // Evento del boton
    add.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        add.Swal.fire({ position: 'top-end', 
        icon: 'success', 
        title: 'Se ha agregado al carrito', 
        showConfirmButton: false, 
        timer: 1500 })
        console.log(carrito);
    });
});
