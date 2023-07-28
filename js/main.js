var formulario = document.querySelector("form");
var listaDiv = document.querySelector(".lista");
var precioCheckboxes = document.querySelectorAll(".precio-checkbox");
var calcularPrecioBtn = document.querySelector(".calcular-precio-btn");
var costoFiestaH2 = document.getElementById("costo-fiesta");


//Sacar el default
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  var nombreInput = document.querySelector(".nombre-input");
  var apellidoInput = document.querySelector(".apellido-input");

  var nombre = nombreInput.value;
  var apellido = apellidoInput.value;

  var listItem = document.createElement("li");
  listItem.textContent = "Nombre: " + nombre + " - Apellido: " + apellido;

  // Crea botón "X"
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
    delete dataList[nombre + apellido]; 
    localStorage.setItem("datos", JSON.stringify(dataList));
  });

  listItem.appendChild(deleteBtn);
  listaDiv.appendChild(listItem);

  var datos = {
    nombre: nombre,
    apellido: apellido,
  };

  // Agrego al local
  var dataList = JSON.parse(localStorage.getItem("datos")) || {};
  dataList[nombre + apellido] = datos;
  localStorage.setItem("datos", JSON.stringify(dataList));

  formulario.reset(); 
});

var borrarTodoBtn = document.querySelector(".borrar-todo-btn");
borrarTodoBtn.addEventListener("click", function () {
  listaDiv.innerHTML = "";

  // para borrar todo
  localStorage.removeItem("datos");
});

calcularPrecioBtn.addEventListener("click", function () {
  var selectedPrice = 0;
  for (var i = 0; i < precioCheckboxes.length; i++) {
    if (precioCheckboxes[i].checked) {
      selectedPrice = parseInt(precioCheckboxes[i].value);
      break;
    }
  }

  var dataList = JSON.parse(localStorage.getItem("datos")) || {};
  var cantidadInvitados = Object.keys(dataList).length;
  var totalCost = selectedPrice * cantidadInvitados;
  costoFiestaH2.textContent = "Costo de la Fiesta: $" + totalCost;
});

// ACA SE RECUPERA DEL LOCAL 
var dataList = JSON.parse(localStorage.getItem("datos")) || {};
for (var key in dataList) {
  agregarInvitado(dataList[key].nombre, dataList[key].apellido);
}

// No me funciono con Ol, pero si con li
function agregarInvitado(nombre, apellido) {
  var listItem = document.createElement("li");
  listItem.textContent = "Nombre: " + nombre + " - Apellido: " + apellido;


  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
    delete dataList[nombre + apellido];
    localStorage.setItem("datos", JSON.stringify(dataList));
  });

  listItem.appendChild(deleteBtn);
  listaDiv.appendChild(listItem);
}
