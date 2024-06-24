
var recuperarLink = document.getElementById('recuperarLink'); 
var modal = document.getElementById('myModal');
var closeModal = document.getElementById('closeModal');
var modalMensaje = document.getElementById('modalMensaje');

recuperarLink.addEventListener('click', function (event) {
    event.preventDefault();
    mostrarModal('Por favor revise su correo para la respectiva recuperación de clave.');
});

closeModal.addEventListener('click', function() {
    cerrarModal();
});

function mostrarModal(mensaje) {
    modalMensaje.innerText = mensaje;
    modal.style.display = 'block';
}

function cerrarModal() {
    modal.style.display = 'none';
}
