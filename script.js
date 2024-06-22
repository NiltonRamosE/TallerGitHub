// Aquí puedes agregar cualquier funcionalidad interactiva que desees, por ejemplo:

// Validación del formulario
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Validación simple
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor completa todos los campos.');
    } else {
        // Aquí podrías enviar los datos del formulario a tu servidor o realizar otra acción
        alert('Formulario enviado correctamente!');
        form.reset(); // Limpia el formulario
    }
});
