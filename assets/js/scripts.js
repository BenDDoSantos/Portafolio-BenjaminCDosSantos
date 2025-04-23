document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Por favor, completa todos los campos.';
        formMessage.style.color = 'red';
        return;
    }

    // Simula el envío del formulario
    formMessage.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';
    formMessage.style.color = 'green';

    // Limpia los campos del formulario
    document.getElementById('contactForm').reset();
});