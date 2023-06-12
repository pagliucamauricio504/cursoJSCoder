let ingresarNumero = prompt("Ingrese su numero");
let resultado = 0;
ingresarNumero = parseInt(ingresarNumero);

for (let i = 1; i <= 10; i++) {
  let resultado = ingresarNumero * i;
  alert(ingresarNumero + " X " + i + " = " + resultado);
}
