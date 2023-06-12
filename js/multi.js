let resultado = 0;
let primerNumero = Number(prompt("ingrese su  numero"));
let segundoNumero = Number(prompt("multiplicado por..."));

function multiplicar(primerNumero, segundoNumero) {
  resultado = primerNumero * segundoNumero;
}
multiplicar(primerNumero, segundoNumero);
alert(`el resultado es: ${resultado}`);
