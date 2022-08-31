const calculadora = (numero1, numero2, operacion) => {
    switch (operacion) {
      case "+":
        return numero1 + numero2;
        break;
      case "-":
        return numero1 - numero2;
        break;
      case "/":
        return numero1 / numero2;
        break;
      case "*":
        return numero1 * numero2;
        break;
      default:
        return "operacion no valida";
        break;
    }
  }

let numero1 = parseInt(prompt("ingrese numero 1"));
let numero2 = parseInt(prompt("ingrese numero 2"));
let operacion = prompt("Ingrese la operacion");
let resultado = calculadora(numero1, numero2, operacion);
alert(resultado);