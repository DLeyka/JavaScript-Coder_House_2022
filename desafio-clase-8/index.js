let contenedor = document.getElementById("contenedor");

let seccion = prompt("ingresa la secciòn deseada");

if(seccion === "continentes"){
    contenedor.innerHTML = "Hola continentes"
    contenedor.className = "continentes"
} else if (seccion === "paises"){
    contenedor.innerHTML = "Hola paises"
    contenedor.className = "paises"
} else {
    contenedor.innerHTML = "Hola mundo"
    contenedor.className = "mundo"
};

