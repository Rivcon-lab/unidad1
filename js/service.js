function cargarDatos() {
    // Mostrar mensaje de carga y ocultar errores y lista
    document.getElementById('loading-msg').style.display = 'block';
    document.getElementById('error-msg').style.display = 'none';
    document.getElementById('services-list').innerHTML = '';

    const headerParams = { 'Authorization': 'Bearer ciisa' };
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://ciisa.coningenio.cl/v1/services/";

    // Mapeo local de íconos según el índice o identificador
    const iconMapping = {
        0: 'fa-solid fa-briefcase', // Ícono para el primer servicio
        1: 'fa-solid fa-mobile',   // Ícono para el segundo servicio
        2: 'fa-solid fa-cogs',     // Ícono para el tercer servicio
        3: 'fa-solid fa-code',     // Ícono para el cuarto servicio
        // Agrega más íconos según sea necesario
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
        document.getElementById('loading-msg').style.display = 'none';

        if (!data.data || data.data.length === 0) {
            document.getElementById('error-msg').textContent = 'No hay servicios disponibles.';
            document.getElementById('error-msg').style.display = 'block';
            return;
        }

        const servicesList = document.getElementById('services-list');
        data.data.forEach((item, index) => {
            // Crear la card
            const card = document.createElement('div');
            card.className = 'service-card';

            // Ícono (usando el mapeo local)
            const iconClass = iconMapping[index]; // Obtén la clase del ícono según el índice
            if (iconClass) {
                const icon = document.createElement('i'); // Crear un elemento <i> para Font Awesome
                icon.className = iconClass; // Asignar la clase del ícono
                card.appendChild(icon);
            }

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

document.addEventListener("DOMContentLoaded", cargarDatos);function cargarDatos() {
    // Mostrar mensaje de carga y ocultar errores y lista
    document.getElementById('loading-msg').style.display = 'block';
    document.getElementById('error-msg').style.display = 'none';
    document.getElementById('services-list').innerHTML = '';

    const headerParams = { 'Authorization': 'Bearer ciisa' };
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://ciisa.coningenio.cl/v1/services/";

    // Mapeo local de íconos según el índice o identificador
    const iconMapping = {
        0: 'fa-solid fa-briefcase', // Ícono para el primer servicio
        1: 'fa-solid fa-earth-americas',   // Ícono para el segundo servicio
        2: 'fa-solid fa-cogs',     // Ícono para el tercer servicio
        3: 'fa-solid fa-code',     // Ícono para el cuarto servicio
        // Agrega más íconos según sea necesario
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
        document.getElementById('loading-msg').style.display = 'none';

        if (!data.data || data.data.length === 0) {
            document.getElementById('error-msg').textContent = 'No hay servicios disponibles.';
            document.getElementById('error-msg').style.display = 'block';
            return;
        }

        const servicesList = document.getElementById('services-list');
        data.data.forEach((item, index) => {
            // Crear la card
            const card = document.createElement('div');
            card.className = 'service-card';

            // Ícono (usando el mapeo local)
            const iconClass = iconMapping[index]; // Obtén la clase del ícono según el índice
            if (iconClass) {
                const icon = document.createElement('i'); // Crear un elemento <i> para Font Awesome
                icon.className = iconClass; // Asignar la clase del ícono
                card.appendChild(icon);
            }

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