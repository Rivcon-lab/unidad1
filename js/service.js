/**
 * Carga los servicios desde la API y los muestra en cards con íconos.
 */
function cargarDatos() {
    const loadingMsg = document.getElementById('loading-msg');
    const errorMsg = document.getElementById('error-msg');
    const servicesList = document.getElementById('services-list');

    // Verifica que los elementos existan
    if (!loadingMsg || !errorMsg || !servicesList) {
        console.error('Uno o más elementos necesarios no existen en el DOM.');
        return;
    }

    loadingMsg.style.display = 'block';
    errorMsg.style.display = 'none';
    servicesList.innerHTML = '';

    const headerParams = { 'Authorization': 'Bearer ciisa' };
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://ciisa.coningenio.cl/v1/services/";

    const iconMapping = {
        0: 'fa-solid fa-briefcase',
        1: 'fa-solid fa-earth-americas',
        2: 'fa-solid fa-cogs',
        3: 'fa-solid fa-code',
    };

    fetch(proxyUrl + apiUrl, {
        method: 'GET',
        headers: headerParams
    })
    .then(response => {
        if (!response.ok) throw new Error('Error en la respuesta de la API');
        return response.json();
    })
    .then(data => {
        loadingMsg.style.display = 'none';

        if (!data || !Array.isArray(data.data) || data.data.length === 0) {
            errorMsg.textContent = 'No hay servicios disponibles.';
            errorMsg.style.display = 'block';
            return;
        }

        data.data.forEach((item, index) => {
            if (!item.titulo || !item.titulo.esp || !item.descripcion || !item.descripcion.esp) {
                console.warn('Servicio con datos incompletos:', item);
                return;
            }

            const card = document.createElement('div');
            card.className = 'service-card';

            const iconClass = iconMapping[index];
            if (iconClass) {
                const icon = document.createElement('i');
                icon.className = iconClass;
                card.appendChild(icon);
            }

            const title = document.createElement('div');
            title.className = 'service-title';
            title.textContent = item.titulo.esp;

            const desc = document.createElement('div');
            desc.className = 'service-desc';
            desc.textContent = item.descripcion.esp;

            card.appendChild(title);
            card.appendChild(desc);

            servicesList.appendChild(card);
        });
    })
    .catch(error => {
        loadingMsg.style.display = 'none';
        errorMsg.textContent = `Error al cargar los datos: ${error.message}`;
        errorMsg.style.display = 'block';
        console.error('Error al cargar los datos:', error);
    });
}

// Ejecuta la función al cargar el DOM
document.addEventListener("DOMContentLoaded", cargarDatos);