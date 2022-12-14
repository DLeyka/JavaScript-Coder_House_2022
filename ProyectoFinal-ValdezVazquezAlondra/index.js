const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carritoStorage")) || [];

fetch("./productos.json")
    .then((response) => response.json())
    .then((productos) => {
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
                console.log(carrito.length);
                carritoCounter();
                saveLocal();
                // Alerta de SweetAlert
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Se ha añadido al carrito',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }); 
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
            <button class="restar"> - </button>
            <p class="cantidad">${product.cantidad}</p>
            <button class="sumar"> + </button>
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <h5>Total: $${product.cantidad * product.precio} MXN</h5>
            <p>$${product.precio} MXN</p>
        `;

        modalContainer.append(carritoContent);
        
        // boton de restar cantidades
        let restar = carritoContent.querySelector(".restar");

        restar.addEventListener("click", () => {
            if(product.cantidad !== 1) {
                product.cantidad--;
            }
            saveLocal();
            pintarCarrito();
        });

        // boton para sumar cantidades
        let sumar = carritoContent.querySelector(".sumar");

        sumar.addEventListener("click", () => {
            product.cantidad++;
            saveLocal();
            pintarCarrito();
        })

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
    saveLocal();
    pintarCarrito();
};

// Ver cantidad de items que estan en el carrito
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

carritoCounter();

// set item

const saveLocal = () => localStorage.setItem("carritoStorage", JSON.stringify(carrito));

// get item

/* JSON.parse(localStorage.getItem("carritoStorage")); */
  