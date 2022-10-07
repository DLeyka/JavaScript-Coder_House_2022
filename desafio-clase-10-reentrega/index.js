const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const productos = [
    {
        id: 1,
        nombre: "Conedwich",
        precio: 150,
        img: "./assets/img/img1.jpg",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Animal donuts",
        precio: 50,
        img: "./assets/img/img2.jpg",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Coneke",
        precio: 80,
        img: "./assets/img/img3.jpg",
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Comi-Oso",
        precio: 250,
        img: "./assets/img/img4.jpg",
        cantidad: 1
    },
    {
        id: 5,
        nombre: "Animatel",
        precio: 130,
        img: "./assets/img/img5.jpg",
        cantidad: 1
    },
    {
        id: 6,
        nombre: "Corneconio",
        precio: 75,
        img: "./assets/img/img6.jpg",
        cantidad: 1
    },
    {
        id: 7,
        nombre: "SopOso",
        precio: 300,
        img: "./assets/img/img7.jpg",
        cantidad: 1
    },
    {
        id: 8,
        nombre: "Malte-Toons",
        precio: 175,
        img: "./assets/img/img8.jpg",
        cantidad: 1
    },
    {
        id: 9,
        nombre: "Pokelate",
        precio: 180,
        img: "./assets/img/img9.jpg",
        cantidad: 1
    },
    {
        id: 10,
        nombre: "Normi-teada",
        precio: 150,
        img: "./assets/img/img10.jpg",
        cantidad: 1
    },
    {
        id: 11,
        nombre: "Delis-Oso",
        precio: 130,
        img: "./assets/img/img11.jpg",
        cantidad: 1
    },
    {
        id: 12,
        nombre: "CatBurger",
        precio: 180,
        img: "./assets/img/img12.jpg",
        cantidad: 1
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
        // para manejar las cantidades en el carrito
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        
        if(repeat) {
            carrito.map((prod) => { 
                if(prod.id === product.id) {
                    prod.cantidad++;
                };
            });
        }else {
            // pushear los objetos que quiere el ususario
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        };
        console.log(carrito);
        carritoCounter();
    });
});

// Carrito
const pintarCarrito = () => {
    // es para que se habra y cierre la ventana del carrito
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    // Header del carrito
    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader"
    modalHeader.innerHTML = `
        <h1 class="modalHeaderTitle">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    // botón de cierre del carrito
    const modalButton = document.createElement("button");
    modalButton.innerText = "x";
    modalButton.className = "modalHeaderButton";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    
    carrito.forEach((product) => {
        // productos que estan en el carrito
        let carritoContent = document.createElement("div");
        carritoContent.className = "modalCarritoContent";
        carritoContent.innerHTML = `
            <p class="cantidad">${product.cantidad}</p>
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <h5>Total: $${product.cantidad * product.precio} MXN</h5>
            <p>$${product.precio} MXN</p>
        `;

        modalContainer.append(carritoContent);

        // pintar eliminar productos 
        let eliminar = document.createElement("button");
        eliminar.innerText = "-";
        eliminar.className = "deleteProduct";

        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });

    // Total del precio de los productos del carrito
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuy = document.createElement("div");
    totalBuy.className = "totalContent";
    totalBuy.innerHTML = `Total a pagar: $${total} MXN`;

    modalContainer.append(totalBuy);
    
};

// Aparece el carrito al darle click al icono
verCarrito.addEventListener("click", pintarCarrito);

// Funcionalidad eliminar productos
const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    pintarCarrito();
};

// Ver cantidad de items que estan en el carrito
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
}