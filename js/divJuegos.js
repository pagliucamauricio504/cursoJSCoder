/*


const contenedorJuegos = document.querySelector ("#contenedorJuegos");
const botonesTipoJuegos = document.querySelectorAll (".botonJuegos");
let botonesQuiero = document.querySelectorAll (".agregaJuego");




function cargarJuegos (juegosSeleccion){
  contenedorJuegos.innerHTML = "";
  

  juegosSeleccion.forEach(juego => {

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
  })
  
  //me volvi loco con esto para ubicarlo correctamente
  corrigeAgregaJuego ();

}


cargarJuegos(juegos);



botonesTipoJuegos.forEach(boton => {
    boton.addEventListener("click", (e) => {
      botonesTipoJuegos.forEach(boton => boton.classList.remove("active"));
      e.currentTarget.classList.add("active");

      //aca me falto una "t" en e.currentTarget y ni el chatGPT encontro el error. Solo la consola lo advirtio. 
      if (e.currentTarget.id != "todosJuegos"){
        const juegosSelBoton = juegos.filter(juego => juego.categoria.id === e.currentTarget.id);
        cargarJuegos(juegosSelBoton);
      } else {
  cargarJuegos(juegos);
}
    
    })
})

*/

/*//ojo el orden aca
function corrigeAgregaJuego (){
  const botonesQuiero = document.querySelectorAll (".agregaJuego");
  botonesQuiero.forEach(boton => {
    boton.addEventListener("click", sumaJuegosTotal);
});
}


const juegosElegidos = [];

function sumaJuegosTotal(e) {

  const idQuiero = e.currentTarget.id;
  const juegoE = juegos.find(juego => juego.id === idQuiero);
  
  
   if(juegosElegidos.some(juego => juego.id === idQuiero)){

   }else {
    juegosElegidos.push(juegoE);

    e.currentTarget.disabled = true;
   }

   //console.log(juegosElegidos)
}
*/

//CODIGO CORREGIDO Y HASTA ACA FUNCIONA DE 10////////////////////////////////////////////////////////////////////////////////////////////
/*

const contenedorJuegos = document.querySelector("#contenedorJuegos");

function cargarJuegos(juegosSeleccion) {
  contenedorJuegos.innerHTML = "";

  juegosSeleccion.forEach(juego => {
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
}

function corrigeAgregaJuego() {
  const botonesQuiero = document.querySelectorAll(".agregaJuego");
  botonesQuiero.forEach(boton => {
    boton.addEventListener("click", sumaJuegosTotal);
  });

  const botonesNoQuiero = document.querySelectorAll(".eliminaJuego");
  botonesNoQuiero.forEach(boton => {
    boton.addEventListener("click", eliminaJuego);
  });
}

*/
/*
const juegosElegidos = [];

function sumaJuegosTotal(e) {
  const idQuiero = e.currentTarget.id;
  const juegoE = juegos.find(juego => juego.id === idQuiero);

  if (!juegosElegidos.some(juego => juego.id === idQuiero)) {
    juegosElegidos.push(juegoE);
    e.currentTarget.disabled = true;
  }
}*/

/*
function eliminaJuego(e) {
  const idNoQuiero = e.currentTarget.id;
  const index = juegosElegidos.findIndex(juego => juego.id === idNoQuiero);
  if (index !== -1) {
    juegosElegidos.splice(index, 1);
    const botonLoQuiero = document.querySelector(`#${idNoQuiero}`);
    botonLoQuiero.disabled = false;
  }
  //console.log(juegosElegidos)
}

cargarJuegos(juegos);



const juegosElegidos = [];

function imprimirJuegosElegidos() {
  const divJuegosElegidos = document.querySelector("#juegosElegidos");
  divJuegosElegidos.innerHTML = ""; // Limpia el contenido antes de imprimir

  // Crea una lista numerada para imprimir los juegos seleccionados
  const lista = document.createElement("ol");

  juegosElegidos.forEach(juego => {
    const listItem = document.createElement("li");
    listItem.textContent = juego.titulo; // Suponiendo que el título es el nombre del juego
    lista.appendChild(listItem);
  });

  divJuegosElegidos.appendChild(lista);
}

function sumaJuegosTotal(e) {
  const idQuiero = e.currentTarget.id;
  const juegoE = juegos.find(juego => juego.id === idQuiero);

  const botonQuiero = e.currentTarget;

  if (!juegosElegidos.some(juego => juego.id === idQuiero)) {
    juegosElegidos.push(juegoE);
    botonQuiero.disabled = true;
  } else {
    juegosElegidos.splice(
      juegosElegidos.findIndex(juego => juego.id === idQuiero),
      1
    );
    botonQuiero.disabled = false;
  }

  imprimirJuegosElegidos(); // Actualizar la impresión en ambos casos
}*/

//2DA CORRECCION///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const contenedorJuegos = document.querySelector("#contenedorJuegos");

function cargarJuegos(juegosSeleccion) {
  contenedorJuegos.innerHTML = "";

  juegosSeleccion.forEach(juego => {
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
  imprimirJuegosElegidos(); // Mostrar inicialmente la lista de juegos elegidos
}

function corrigeAgregaJuego() {
  const botonesQuiero = document.querySelectorAll(".agregaJuego");
  botonesQuiero.forEach(boton => {
    boton.addEventListener("click", sumaJuegosTotal);
  });

  const botonesNoQuiero = document.querySelectorAll(".eliminaJuego");
  botonesNoQuiero.forEach(boton => {
    boton.addEventListener("click", eliminaJuego);
  });
}

const juegosElegidos = [];

function imprimirJuegosElegidos() {
  const divJuegosElegidos = document.querySelector("#juegosElegidos");
  divJuegosElegidos.innerHTML = ""; // Limpia el contenido antes de imprimir

  // Crea una lista numerada para imprimir los juegos seleccionados
  const lista = document.createElement("ol");

  juegosElegidos.forEach(juego => {
    const listItem = document.createElement("li");
    listItem.textContent = juego.titulo; // Suponiendo que el título es el nombre del juego
    lista.appendChild(listItem);
  });

  divJuegosElegidos.appendChild(lista);
}

function sumaJuegosTotal(e) {
  const idQuiero = e.currentTarget.id;
  const juegoE = juegos.find(juego => juego.id === idQuiero);

  const botonQuiero = e.currentTarget;

  if (!juegosElegidos.some(juego => juego.id === idQuiero)) {
    juegosElegidos.push(juegoE);
    botonQuiero.disabled = true;
  } else {
    juegosElegidos.splice(
      juegosElegidos.findIndex(juego => juego.id === idQuiero),
      1
    );
    botonQuiero.disabled = false;
  }

  imprimirJuegosElegidos(); // Actualizar la impresión en ambos casos
}

function eliminaJuego(e) {
  const idNoQuiero = e.currentTarget.id;
  const index = juegosElegidos.findIndex(juego => juego.id === idNoQuiero);
  if (index !== -1) {
    juegosElegidos.splice(index, 1);
    const botonLoQuiero = document.querySelector(`#${idNoQuiero}`);
    botonLoQuiero.disabled = false;
  }
  imprimirJuegosElegidos(); // Actualizar la impresión al quitar un juego
}

cargarJuegos(juegos);
*/

/*
const juegos = [
{
  id: "inflable-01",
  titulo: "Inflable 01",
  imagen: "./img/inflables/inflable01.jpg",
  categoria: {
    nombre: "Inflables",
    id: "inflables"
  },
  precio: 7000
},

{
  id: "inflable-02",
  titulo: "Inflable 02",
  imagen: "./img/inflables/inflable02.jpg",
  categoria: {
    nombre: "Inflables",
    id: "inflables"
  },
  precio: 8000
},

{
  id: "inflable-03",
  titulo: "Inflable 03",
  imagen: "./img/inflables/inflable03.jpg",
  categoria: {
    nombre: "Inflables",
    id: "inflables"
  },
  precio: 9000
},

{
  id: "mesa-01",
  titulo: "Mesa 01",
  imagen: "./img/mesa/mesa01.jpg",
  categoria: {
    nombre: "Mesa",
    id: "mesa"
  },
  precio: 5000
},

{
  id: "mesa-02",
  titulo: "Mesa 02",
  imagen: "./img/mesa/mesa02.jpg",
  categoria: {
    nombre: "Mesa",
    id: "mesa"
  },
  precio: 5000
},

{
  id: "mesa-03",
  titulo: "Mesa 03",
  imagen: "./img/mesa/mesa03.jpg",
  categoria: {
    nombre: "Mesa",
    id: "mesa"
  },
  precio: 5000
},
];
*/
