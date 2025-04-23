document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
            
     // Reiniciar mensajes de error
    document.querySelectorAll('.error').forEach(error => {
        error.style.display = 'none';
    });

    let isValid = true;
            
    // Validar nombre
    const nombre = document.getElementById('nombre').value.trim();
    if (nombre.length < 3) {
        document.getElementById('nombreError').style.display = 'block';
        isValid = false;
    }

    // Validar email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validar teléfono
    const telefono = document.getElementById('telefono').value.trim();
    const telefonoRegex = /^\d{9,}$/;
    if (!telefonoRegex.test(telefono)) {
        document.getElementById('telefonoError').style.display = 'block';
        isValid = false;
    }

    // Validar mensaje
    const mensaje = document.getElementById('mensaje').value.trim();
    if (mensaje.length < 10) {
        document.getElementById('mensajeError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('¡Formulario enviado con éxito!');
        this.reset();
    }

});