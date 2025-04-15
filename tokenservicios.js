fetch('https://ciisa.coningenio.cl/v1/services/', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ciisa'
  }
})
  .then(response => response.json())
  .then(data => {
    const servicesList = document.getElementById('services-list');
    servicesList.innerHTML = ''; // Limpiar el mensaje de "Cargando servicios..."
    data.forEach(service => {
      // Ajusta los nombres de las propiedades según la respuesta real de la API
      const div = document.createElement('div');
      div.innerHTML = `<h2>${service.nombre}</h2><p>${service.descripcion}</p>`;
      servicesList.appendChild(div);
    });
  })
  .catch(error => {
    document.getElementById('services-list').textContent = 'Error al cargar los servicios.';
    console.error('Error al obtener los servicios:', error);
  });