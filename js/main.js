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
  costoFiestaH2.textContent =
    "Costo del servicio de la fiesta segun cantidad de invitados: $" +
    totalCost;
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

//A DE JUEGOS (p/agregar a Json)

let juegos = [];

fetch("./js/juegos.json")
  .then((response) => response.json())
  .then((data) => {
    juegos = data;
    cargarJuegos(juegos);
  });

//3ERA CORRECCION/////////////////////////////////////////////////////////////////////////////////////////////////////////
const contenedorJuegos = document.querySelector("#contenedorJuegos");

function cargarJuegos(juegosSeleccion) {
  contenedorJuegos.innerHTML = "";

  juegosSeleccion.forEach((juego) => {
    const div = document.createElement("div");
    div.classList.add("juego");
    div.innerHTML = `
      <img class="juegoImagen" src="${juego.imagen}" alt="${juego.titulo}">
      <div class="juegoDatos">
        <h3 class="juegoTitulo">${juego.titulo}</h3>
        <p class="juegoPrecio">$${juego.precio}</p>
        <button class="agregaJuego" id="${juego.id}">Lo quiero</button>
        <button class="eliminaJuego" id="${juego.id}">No lo quiero</button>
      </div>
    `;

    contenedorJuegos.append(div);
  });

  corrigeAgregaJuego();
  imprimirJuegosElegidos();
}

function corrigeAgregaJuego() {
  const botonesQuiero = document.querySelectorAll(".agregaJuego");
  botonesQuiero.forEach((boton) => {
    boton.addEventListener("click", sumaJuegosTotal);
  });

  const botonesNoQuiero = document.querySelectorAll(".eliminaJuego");
  botonesNoQuiero.forEach((boton) => {
    boton.addEventListener("click", eliminaJuego);
  });
}

const juegosElegidos = [];

function imprimirJuegosElegidos() {
  const divJuegosElegidos = document.querySelector("#juegosElegidos");
  divJuegosElegidos.innerHTML = "";

  const lista = document.createElement("ol");

  juegosElegidos.forEach((juego) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${juego.titulo} - Precio: $${juego.precio}`;
    lista.appendChild(listItem);
  });

  divJuegosElegidos.appendChild(lista);
}

function sumaJuegosTotal(e) {
  Toastify({
    text: "Agregaste este juego",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, blue)",
      fontSize: "2rem",
    },
    onClick: function () {}, // Callback after click
  }).showToast();

  const idQuiero = e.currentTarget.id;
  const juegoE = juegos.find((juego) => juego.id === idQuiero);
  //todo esto me apoye en chatgpt, pero solo por optimizar el tiempo -no llego a la entrega-
  const botonQuiero = e.currentTarget;
  //sigo corrigiendo el uso de ! (me cuesta)
  if (!juegosElegidos.some((juego) => juego.id === idQuiero)) {
    juegosElegidos.push(juegoE);
    botonQuiero.disabled = true;
  } else {
    juegosElegidos.splice(
      juegosElegidos.findIndex((juego) => juego.id === idQuiero),
      1
    );
    botonQuiero.disabled = false;
  }

  imprimirJuegosElegidos();
}

function eliminaJuego(e) {
  Toastify({
    text: "Eliminaste este juego",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, red)",
      fontSize: "2rem",
    },
    onClick: function () {}, // Callback after click
  }).showToast();

  const idNoQuiero = e.currentTarget.id;
  const index = juegosElegidos.findIndex((juego) => juego.id === idNoQuiero);
  if (index !== -1) {
    juegosElegidos.splice(index, 1);
    const botonLoQuiero = document.querySelector(`#${idNoQuiero}`);
    botonLoQuiero.disabled = false;
  }
  imprimirJuegosElegidos();
}

cargarJuegos(juegos);

////parte final (de juegos)
var calcularPrecio2Btn = document.querySelector(".calcular-precio2-btn");
var costoJuegosTotalH2 = document.getElementById("costo-juegos-total");

calcularPrecio2Btn.addEventListener("click", function () {
  var costoTotalJuegos = 0;

  juegosElegidos.forEach((juego) => {
    costoTotalJuegos += juego.precio;
  });

  costoJuegosTotalH2.textContent = "Total Juegos: $" + costoTotalJuegos;
});

/////final total (correccion con ChatGPT en esto (/\d+/)[0]))

var calcularPrecioTBtn = document.querySelector(".calcular-precioT-btn");
var costoFiestaTotalH2 = document.getElementById("costo-fiesta-total");

calcularPrecioTBtn.addEventListener("click", function () {
  var costoFiesta = parseInt(costoFiestaH2.textContent.match(/\d+/)[0]);
  var costoJuegosTotal = parseInt(
    costoJuegosTotalH2.textContent.match(/\d+/)[0]
  );
  var costoFiestaTotal = costoFiesta + costoJuegosTotal;

  costoFiestaTotalH2.textContent = "Total Fiesta: $" + costoFiestaTotal;
});
