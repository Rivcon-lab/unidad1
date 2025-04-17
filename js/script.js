document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Función para toggle del menú
  navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
  });

  // Cerrar menú al hacer click en un enlace
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          navMenu.classList.remove('active');
      });
  });

  // Cerrar menú al hacer click fuera de él
  document.addEventListener('click', function(event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
      }
  });

  // Ajustar menú al redimensionar la ventana
  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          navMenu.classList.remove('active');
      }
  });
});
// Validar formulario y mostrar datos en la consola
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar que se recargue la página

    const nombre = document.getElementById('name').value.trim();
    const servicio = document.getElementById('service').value.trim();
    const mensaje = document.getElementById('message').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!nombre ||!email || !servicio || !mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    console.log('Formulario enviado:');
    console.log(`Nombre: ${nombre}`);
    console.log(`Mensaje: ${email}`);
    console.log(`Servicio: ${servicio}`);
    console.log(`Mensaje: ${mensaje}`);
    

    contactForm.reset(); // Limpiar formulario
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const logo = document.getElementById('logo');

  // Verificar si hay un tema guardado en localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  logo.src = savedTheme === 'dark' ? 'img/logow.png' : 'img/logob.png';
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  // Función para alternar el tema
  function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Actualizar el tema en el DOM
    document.body.setAttribute('data-theme', newTheme);

    // Cambiar el logo según el tema
    logo.src = newTheme === 'dark' ? 'img/logow.png' : 'img/logob.png';

    // Actualizar el ícono del botón
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';

    // Guardar el tema en localStorage
    localStorage.setItem('theme', newTheme);
  }

  // Evento click para el botón de tema
  themeToggle.addEventListener('click', toggleTheme);
});