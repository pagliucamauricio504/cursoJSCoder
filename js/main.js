let opcion = "";
while (opcion !== "4") {
  opcion = prompt(
    "Para ingresar, dime cuanto es 2 + 2, o quedaras atrapado en un bucle infinito (Cancelar no funciona muejeje)"
  );
  switch (opcion) {
    case "":
      alert("Lo siento, no podras ingresar si no escribes nada");
      break;

    case "4":
      alert("Bienvenido");
      break;
  }
}
alert("No era tan dificil");

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

if (nombre != "" && apellido != "") {
  alert(`Hola ${nombre} ${apellido}`);
} else if (nombre != "") {
  alert(`Hola ${nombre}, ya no me importa tu apellido`);
} else if (apellido != "") {
  alert(`Hola Sr.${apellido}, ya no me importa tu nombre`);
} else {
  alert("Hola desconocido");
}
