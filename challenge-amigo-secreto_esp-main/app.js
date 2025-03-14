// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* Se deben agregar amigos con el boton de agregar amigos, se almacenam en una array
Paracen los nombre de los amigos entre el boton ingresar amigo y sortear amigos
Se deben de valir dar datos ingresados, no se permiten vacios
Alerta cuando se  ingresa un nombre no valido
Al presionar  sortear amigo la aplicacion de mostrar un nombre aleatorio y mostrarlo en la pantalla
Con el mensaje "El amigo sorteado es: xxx"

*/
// Array para almacenar amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Obtener el valor del campo de texto
    const amigo = document.getElementById('amigo').value;

    // Validar que el campo no esté vacío
    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return; // Detener la ejecución si el nombre está vacío
    }

    // Añadir el nombre al array "amigos"
    amigos.push(amigo);

    // Limpiar el campo de texto
    document.getElementById('amigo').value = "";

    // Actualizar la lista de amigos en la página
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');

    // Limpiar el contenido anterior
    listaAmigosElement.innerHTML = "";

    // Recorrer el array "amigos" y mostrar cada nombre
    amigos.forEach((amigo, index) => {
        const parrafo = document.createElement('p'); 
        parrafo.textContent = `${amigo}`; 
        listaAmigosElement.appendChild(parrafo); // Añadir el párrafo al div
    });
}
// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        document.getElementById('resultado').innerHTML = "No hay amigos disponibles para sortear.";
        return; // Detener la ejecución si no hay amigos
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerHTML = `¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!`;
}
