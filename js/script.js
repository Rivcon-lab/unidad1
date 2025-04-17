// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  // --- Menú hamburguesa: abrir/cerrar ---
  navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
  });

  // Cierra el menú al hacer click en cualquier enlace de navegación
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          navMenu.classList.remove('active');
      });
  });

  // Cierra el menú si se hace click fuera de él
  document.addEventListener('click', function(event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);
      if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
      }
  });

  // Asegura que el menú se oculte al redimensionar la ventana a escritorio
  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          navMenu.classList.remove('active');
      }
  });
});

// --- Validación y manejo del formulario de contacto ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío tradicional del formulario

    // Obtiene y limpia los valores de los campos
    const nombre = document.getElementById('name').value.trim();
    const servicio = document.getElementById('service').value.trim();
    const mensaje = document.getElementById('message').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validación básica de campos vacíos
    if (!nombre || !email || !servicio || !mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Muestra los datos en la consola (puedes reemplazar esto por un envío real)
    console.log('Formulario enviado:');
    console.log(`Nombre: ${nombre}`);
    console.log(`Email: ${email}`);
    console.log(`Servicio: ${servicio}`);
    console.log(`Mensaje: ${mensaje}`);

    contactForm.reset(); // Limpia el formulario tras el envío
  });
}

// --- Alternancia de tema claro/oscuro ---
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const logo = document.getElementById('logo');

  // Recupera el tema guardado o usa 'light' por defecto
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  logo.src = savedTheme === 'dark' ? 'img/logow.png' : 'img/logob.png';
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  // Cambia el tema y actualiza el logo e ícono del botón
  function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.setAttribute('data-theme', newTheme);
    logo.src = newTheme === 'dark' ? 'img/logow.png' : 'img/logob.png';
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', newTheme);
  }

  // Evento para alternar el tema al hacer click en el botón
  themeToggle.addEventListener('click', toggleTheme);
});