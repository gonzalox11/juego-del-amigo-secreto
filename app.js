let nombresAmigos = [];
let pepe = "pepe";





function agregarAmigo() {

    let nombre = document.querySelector("input").value;

    if (nombre == "") {
        alert('por favor, ingresa un nombre');
    } else {
        nombresAmigos.push(nombre);
        console.log(nombresAmigos);
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector("input").value = ''
}