let boton = document.getElementById("boton");
boton.className = "varBoton"

let saludo = document.getElementById("saludo");
saludo.className = "uno"

boton.addEventListener("mousedown", () => {
    saludo.className = "dos";
});

boton.addEventListener("click", () => {
    saludo.className = "tres";
});

boton.addEventListener("mouseover", () => {
    saludo.className = "cuatro";
});