let nombresAmigos = [];

function agregarAmigo() {

    let nombre = document.querySelector("input").value;

    if (nombre == "") {
        alert('por favor, ingresa un nombre');
    } else {
        nombresAmigos.push(nombre);
        console.log(nombresAmigos);
        enumerarAmigos();
        limpiarCaja();
    }
}

function enumerarAmigos() {
    let amigos = document.getElementById('listaAmigos').innerHTML;
    amigos += "<li>"+nombresAmigos[nombresAmigos.length -1]+"</li>";
    document.getElementById("listaAmigos").innerHTML = amigos;
}

function limpiarCaja() {
    document.querySelector("input").value = ''
}