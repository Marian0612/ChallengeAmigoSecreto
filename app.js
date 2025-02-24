
var listaDeAmigos = []

function sortearAmigo(){
    if (listaDeAmigos.length <= 2){
        alert('La cantidad de amigos debe ser de 2 o más');
    } else {
        let numeroAleatorio = getRandomInt(listaDeAmigos.length);
        asignarTexto('#resultado', 'El amigo sorteado es ' + listaDeAmigos[numeroAleatorio])
        asignarTexto('#listaAmigos', '');
    }
}

function agregarAmigo(){
    let amigoAgregado = document.getElementById('amigo').value;
    if (amigoAgregado == ''){
        alert('El campo no puede estar vacío')
    } else {
        document.getElementById('amigo').value = '';
        listaDeAmigos.push(amigoAgregado);
        let lista = document.getElementById('listaAmigos');
        let li = document.createElement('li');
        li.innerText = amigoAgregado;
        lista.appendChild(li);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * listaDeAmigos.length);
}

function asignarTexto(elemento, texto){
    let parrafo = document.querySelector(elemento);
    parrafo.innerHTML = texto;
    
}



