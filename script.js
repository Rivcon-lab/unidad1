// Cambiar entre tema día/noche
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
  });
}

// Validar formulario y mostrar datos en la consola
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar que se recargue la página

    const name = document.getElementById('name').value.trim();
    const service = document.getElementById('service').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !service || !message) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    console.log('Formulario enviado:');
    console.log(`Nombre: ${name}`);
    console.log(`Servicio: ${service}`);
    console.log(`Mensaje: ${message}`);

    contactForm.reset(); // Limpiar formulario
  });
}