function cargarAbout() {
    document.getElementById('loading-msg').style.display = 'block';
    document.getElementById('error-msg').style.display = 'none';
    document.getElementById('about-list').innerHTML = '';

    const headerParams = { 'Authorization': 'Bearer ciisa' };
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://ciisa.coningenio.cl/v1/about-us/";

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
            document.getElementById('error-msg').textContent = 'No hay información disponible.';
            document.getElementById('error-msg').style.display = 'block';
            return;
        }

        const aboutList = document.getElementById('about-list');
        data.data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'about-card';

            // Título en español
            const title = document.createElement('div');
            title.className = 'about-title-card';
            title.textContent = item.titulo?.esp || '';
            card.appendChild(title);

            // Descripción en español
            const desc = document.createElement('div');
            desc.className = 'about-desc';
            desc.textContent = item.descripcion?.esp || '';
            card.appendChild(desc);

            aboutList.appendChild(card);
        });
    })
    .catch(error => {
        document.getElementById('loading-msg').style.display = 'none';
        document.getElementById('error-msg').textContent = 'Error al cargar los datos: ' + error.message;
        document.getElementById('error-msg').style.display = 'block';
    });
}

document.addEventListener("DOMContentLoaded", cargarAbout);