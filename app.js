//Array para almacenar los nombres
let amigos = []
// Expresión regular para validar nombres
const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;

//Función para agregar un amigo a la lista
function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value.trim();
    
    //Validar entrada
    if (!nombreRegex.test(nombre)) {
        alert('Por favor, inserte un nombre válido.');
        //Detener función si se ingresa un nombre inválido
        return;
    }
    //Actualizar el array de Amigos
    amigos.push(nombre);

    //Limpiar campo de entrada
    inputAmigo.value = '';

    //Mostrar lista actualizada
    mostrarListaActualizada();
}

//Función para ver actualizar lista de Amigos
function mostrarListaActualizada() {
    //Obtener elemento de la lista
    let lista = document.getElementById('listaAmigos');

    //Limpiar la lista existente
    lista.innerHTML = '';

    //Iterar sobre el arreglo usando un bucle for
    for (let i = 0; i < amigos.length; i++) {
        let liAmigos = document.createElement('li');
        liAmigos.textContent = amigos[i];
        lista.appendChild(liAmigos);
    }
}


//Función para seleccionar el amigo secreto de forma aleatoria
function sortearAmigo() {
    //Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No se han ingresado amigos para sortear.');
        return;
    }
    
    //Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //Mostrar el resultado
    let resultadoAmigo = document.getElementById('resultado');
    resultadoAmigo.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

//Función para reiniciar la lista de amigos
function reiniciarListaDeAmigos() {
    //Vaciar array de nombres
    amigos = [];

    //Actualizar la lista
    mostrarListaActualizada();

    //Limpiar el resultado del sorteo
    document.getElementById('resultado').innerHTML = '';
}