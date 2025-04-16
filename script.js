document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('open');
  });
});
// Cambiar entre tema día/noche
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
  });
}
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    document.documentElement.lang = currentLang === 'ESP' ? 'EN' : 'ESP';
    langToggle.textContent = currentLang === 'ESP' ? 'EN' : 'ESP';
  });
}




// Validar formulario y mostrar datos en la consola
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar que se recargue la página

    const nombre = document.getElementById('name').value.trim();
    const servicio = document.getElementById('service').value.trim();
    const mensaje = document.getElementById('message').value.trim();

    if (!nombre || !servicio || !mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    console.log('Formulario enviado:');
    console.log(`Nombre: ${nombre}`);
    console.log(`Servicio: ${servicio}`);
    console.log(`Mensaje: ${mensaje}`);

    contactForm.reset(); // Limpiar formulario
  });
}
