/* Desafio complementario: Crear un algoritmo utilizando un ciclo */

/* let entrada = prompt("Ingresar un nombre").toUpperCase();

 while(entrada != "No" ){
    switch (entrada) {
        case "alondra":
            alert("Hola Alondra");
            break;
        case "emma":
            alert("Hola Emma");
            break;
        default:
           alert("¿Quién eres?")
           break;
    }
    entrada = prompt("Ingresar un nombre");
} */

let usuario = prompt("Ingrese su usuario");

while(usuario != "Alondra"){
  alert("Usuario incorrecto");
  usuario = prompt("Ingrese su usuario");
}
alert("Bienvenid@");

/* let numero = parseInt(prompt("ingrese un número"));

for(let i = 1; i <= 10; i++){
  let multiplicacion = numero * i;
  let mensaje = `${numero} * ${i} = ${multiplicacion}`;

  alert(mensaje);
} */