function cargarDatos() {
    // Mostrar mensaje de carga y ocultar errores y lista
    document.getElementById('loading-msg').style.display = 'block';
    document.getElementById('error-msg').style.display = 'none';
    document.getElementById('services-list').innerHTML = '';

    const headerParams = { 'Authorization': 'Bearer ciisa' };
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://ciisa.coningenio.cl/v1/services/";

    fetch(proxyUrl + apiUrl, {
        method: 'GET',
        headers: headerParams
    })
    .then(response => {
        if (!response.ok) throw new Error('Error en la respuesta de la API');
        return response.json();
    })
    .then(data => {
        document.getElementById('loading-msg').style.display = 'none';

        if (!data.data || data.data.length === 0) {
            document.getElementById('error-msg').textContent = 'No hay servicios disponibles.';
            document.getElementById('error-msg').style.display = 'block';
            return;
        }

        const servicesList = document.getElementById('services-list');
        data.data.forEach(item => {
            // Crear la card
            const card = document.createElement('div');
            card.className = 'service-card';

            // Título atractivo
            const title = document.createElement('div');
            title.className = 'service-title';
            title.textContent = item.titulo.esp;

            // Descripción
            const desc = document.createElement('div');
            desc.className = 'service-desc';
            desc.textContent = item.descripcion.esp;

            // Agregar al card
            card.appendChild(title);
            card.appendChild(desc);

            // Agregar card a la lista
            servicesList.appendChild(card);
        });
    })
    .catch(error => {
        document.getElementById('loading-msg').style.display = 'none';
        document.getElementById('error-msg').textContent = 'Error al cargar los datos: ' + error.message;
        document.getElementById('error-msg').style.display = 'block';
    });
}

document.addEventListener("DOMContentLoaded", cargarDatos);