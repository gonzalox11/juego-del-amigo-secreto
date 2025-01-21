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

function sorteo() {
    let cantidadDeAmigos = nombresAmigos.length;
    let numeroRandom = Math.floor(Math.random()*cantidadDeAmigos);
    let amigoSorteado = nombresAmigos[numeroRandom];

    console.log(amigoSorteado);

    if (nombresAmigos == '') {
        alert('por favor, ingrese nombres')
    } else
    {
        let resultado = document.getElementById('resultado').innerHTML;
        resultado = "<li>"+'el amigo es: '+amigoSorteado+"</li>";
        document.getElementById("resultado").innerHTML = resultado;
        document.getElementById("listaAmigos").innerHTML = "";
        nombresAmigos = [];
    }
}

function limpiarCaja() {
    document.querySelector("input").value = ''
}