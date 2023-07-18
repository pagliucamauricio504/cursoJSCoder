

const alerta = document.querySelector("#saludo");
alerta.addEventListener("click", mostrarAlerta);

function mostrarAlerta () {
  alert("Bienvenido");
}





var enviarBtn = document.getElementById("enviarBtn");
  enviarBtn.addEventListener("click", function(e) {
  e.preventDefault();
var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;


var listItem = document.createElement("li");
  listItem.textContent = "Nombre: " + nombre + " - Apellido: " + apellido;
  
var listaDiv = document.getElementById("lista");
  listaDiv.appendChild(listItem);

var datos = {
    nombre: nombre,
    apellido: apellido
            };
  localStorage.setItem("datos", JSON.stringify(datos));
                                                    });

var borrarTodoBtn = document.getElementById("borrarTodoBtn");
borrarTodoBtn.addEventListener("click", function() {
  
//esto me lo dio el ChatGPT
var listaDiv = document.getElementById("lista");
  listaDiv.innerHTML = "";
  localStorage.removeItem("datos");
                                                    });

