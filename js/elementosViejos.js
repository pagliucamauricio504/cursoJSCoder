/* CALCULADORA
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
*/

//MULTI
/*let resultado = 0;
let primerNumero = Number(prompt("ingrese su  numero"));
let segundoNumero = Number(prompt("multiplicado por..."));

function multiplicar(primerNumero, segundoNumero) {
  resultado = primerNumero * segundoNumero;
}
multiplicar(primerNumero, segundoNumero);
alert(`el resultado es: ${resultado}`);
*/

//TABLA MULTI
/*
let ingresarNumero = prompt("Ingrese su numero");
let resultado = 0;
ingresarNumero = parseInt(ingresarNumero);

for (let i = 1; i <= 10; i++) {
  let resultado = ingresarNumero * i;
  alert(ingresarNumero + " X " + i + " = " + resultado);
}
*/

//PRUEBAS DEL MAIN

//ESTE POR AHORA
/*
var formulario = document.getElementById("formulario");
  var listaDiv = document.getElementById("lista");

  //saco el default
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();


    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    // Validar que ambos campos no estén vacíos antes de agregar el listItem
    if (nombre === "" || apellido === "") {
      listaDiv.innerHTML = "<li>Error: Debes ingresar tanto el nombre como el apellido.</li>";
    } else {
      var listItem = document.createElement("li");
      listItem.textContent = "Nombre: " + nombre + " - Apellido: " + apellido;

      // Boton X como en lista de tareas
      var deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.addEventListener("click", function () {
        listItem.remove();

        // eliminar del localStorage
        var dataList = JSON.parse(localStorage.getItem("datos"));
        delete dataList[nombre + apellido];
        localStorage.setItem("datos", JSON.stringify(dataList));
      });

      listItem.appendChild(deleteBtn);
      listaDiv.appendChild(listItem);


      var datos = {
        nombre: nombre,
        apellido: apellido
      };

      // Agregar al local 
      var dataList = JSON.parse(localStorage.getItem("datos")) || {};
      dataList[nombre + apellido] = datos;
      localStorage.setItem("datos", JSON.stringify(dataList));

      formulario.reset(); // Limpiar el formulario después de enviarlo
    }
  });

  var borrarTodoBtn = document.getElementById("borrarTodoBtn");
  borrarTodoBtn.addEventListener("click", function () {
    listaDiv.innerHTML = "";


    // para borrar todo
    localStorage.removeItem("datos");
  });

  // Recuperar los datos del localStorage y mostrarlos en la lista al cargar la página
  var dataList = JSON.parse(localStorage.getItem("datos")) || {};
  for (var key in dataList) {
    var listItem = document.createElement("li");
    listItem.textContent = "Nombre: " + dataList[key].nombre + " - Apellido: " + dataList[key].apellido;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", function () {
      listItem.remove();
      delete dataList[key]; // Eliminar el dato del localStorage
      localStorage.setItem("datos", JSON.stringify(dataList));
    });

    listItem.appendChild(deleteBtn);

    listaDiv.appendChild(listItem);
  }
  */

//hasta aca funciona
/*var formulario = document.getElementById("formulario");
  var listaDiv = document.getElementById("lista");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    var listItem = document.createElement("li");
    listItem.textContent = "Nombre: " + nombre + " - Apellido: " + apellido;

    // Crear botón "X" para eliminar el input
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", function () {
      listItem.remove();
      delete dataList[nombre + apellido]; // Eliminar el dato del localStorage
      localStorage.setItem("datos", JSON.stringify(dataList));
    });

    listItem.appendChild(deleteBtn);

    listaDiv.appendChild(listItem);

    var datos = {
      nombre: nombre,
      apellido: apellido
    };

    // Agregar al localStorage
    var dataList = JSON.parse(localStorage.getItem("datos")) || {};
    dataList[nombre + apellido] = datos;
    localStorage.setItem("datos", JSON.stringify(dataList));

    formulario.reset(); // Limpiar el formulario después de enviarlo
  });

  var borrarTodoBtn = document.getElementById("borrarTodoBtn");
  borrarTodoBtn.addEventListener("click", function () {
    listaDiv.innerHTML = "";

    // Borrar todo del localStorage
    localStorage.removeItem("datos");
  });

  // Recuperar los datos del localStorage y mostrarlos en la lista al cargar la página
  var dataList = JSON.parse(localStorage.getItem("datos")) || {};
  for (var key in dataList) {
    agregarInvitado(dataList[key].nombre, dataList[key].apellido);
  }

  // Función para agregar invitados a la lista con el botón "X"
  function agregarInvitado(nombre, apellido) {
    var listItem = document.createElement("li");
    listItem.textContent = "Nombre: " + nombre + " - Apellido: " + apellido;

    // Crear botón "X" para eliminar el input
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", function () {
      listItem.remove();
      delete dataList[nombre + apellido]; // Eliminar el dato del localStorage
      localStorage.setItem("datos", JSON.stringify(dataList));
    });

    listItem.appendChild(deleteBtn);

    listaDiv.appendChild(listItem);
  }*/
