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


// array
var datos = [];

var edadValida = false;
var telefonoValido = false;

//me costo (bastante) encontrarle la vuelta en esta condicion con el uso de operadores "!" y "||", y me ayude con el ChatGPT
while (!edadValida || !telefonoValido) {
  var edad = prompt("Ingrese su edad (en números):");
  var telefono = prompt("Ingrese su número de teléfono (al menos ocho dígitos):");
  var sugerencias = prompt("Ingrese sus sugerencias (opcional):");

  
  if (isNaN(edad)) {
    alert("Error: La edad ingresada no es un número válido.");
  } else {
    edadValida = true;
  }

  //uso de metodo lengh
  if (telefono.length < 8) {
    alert("Error: El número de teléfono debe tener al menos 8 dígitos.");
  } else {
    telefonoValido = true;
  }

  //uso de metodo push para agregar datos al array - me volvi loco con el parentesis en el push
  if (edadValida && telefonoValido) {
      datos.push({
      edad: parseInt(edad),
      telefono: telefono,
      sugerencias: sugerencias
    });

    
    var mensaje = "Tus datos ingresados son: Edad: " + datos[0].edad + ", Teléfono: " + datos[0].telefono;

    alert(mensaje);
  }
}
