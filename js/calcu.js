//debo investigar como mejorar los breaks
let primerNumero = Number(
  prompt("Ingresa un numero (si pones cualquier cosa, va a dar 0)")
);
let operacion = prompt(
  "Ingresa la operacion a realizar (+, -, * , /) (si pones cualquier cosa, va a dar 0)"
);
let segundoNumero = Number(
  prompt("Ingresa el otro numero (si pones cualquier cosa, va a dar 0)")
);

function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
      break;
    case "-":
      return primerNumero - segundoNumero;
      break;
    case "*":
      return primerNumero * segundoNumero;
      break;
    case "/":
      return primerNumero / segundoNumero;
      break;
    default:
      return 0;
      break;
  }
}
alert(
  `El resultado es: ${calculadora(
    primerNumero,
    segundoNumero,
    operacion
  )}. Fue facil.`
);
