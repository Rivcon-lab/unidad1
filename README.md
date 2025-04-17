# ConIngenio: Consultoría y Desarrollo de Software
Este proyecto es una página web estática que incluye:
- Cambio de tema (claro/oscuro).
- Diseño responsivo.
- Validación de formularios.
- Carga dinámica de servicios desde una API.

## Estructura del Proyecto
- `index.html`: Página principal.
- `servicio.html`: Página de servicios.
- `nosotros.html`: Página "Nosotros".
- `contacto.html`: Página de contacto.
- `css/`: Archivos de estilos.
- `js/`: Archivos JavaScript.
- `img/`: Imágenes.

## Cómo Usar
1. Clona este repositorio.
2. Abre `index.html` en tu navegador.
3. Para el correcto funcionamiento de la API en modo de test es necesario ingresar a https://cors-anywhere.herokuapp.com/corsdemo y presionar el apartado `Request temporary access to the demo server.
4. Recargar pagina y utilizar secciones.


## Durante el desarrollo del proyecto, se realizaron pruebas de usuario y entrevistas breves para identificar oportunidades de mejora en la experiencia de usuario. A continuación, se describen algunos casos y las acciones tomadas:

Prueba 1: Navegación en dispositivos móviles
- Situación: A través de entrevistas y pruebas con usuarios en smartphones, se detectó que la navegación no era óptima en pantallas pequeñas.
- Mejora aplicada: Se ajustó el diseño responsivo y el menú de navegación tipo amburguesa, para asegurar una experiencia fluida en dispositivos móviles.
Prueba 2: Legibilidad de textos sobre imágenes
- Situación: Algunos usuarios reportaron dificultades para leer textos superpuestos a imágenes de fondo.
- Mejora aplicada: Se implementó un fondo semitransparente (overlay) detrás de los textos principales para mejorar el contraste y la legibilidad.
Prueba 3: Validación de formularios
- Situación: Algunos usuarios intentaron enviar el formulario de contacto sin completar todos los campos.
- Mejora aplicada: Se agregó validación en el frontend y mensajes de alerta para asegurar que todos los campos sean completados antes de enviar.
Prueba 4: Cambio de tema y visibilidad del logo
- Situación: Se detectó que el logo no era siempre visible o adecuado según el tema y el tamaño de pantalla.
- Mejora aplicada: Se implementó un cambio dinámico de logo según el tema (claro/oscuro) y el tamaño de la ventana, asegurando buena visibilidad en todos los casos.

## Estas acciones permitieron mejorar la usabilidad, accesibilidad y satisfacción de los usuarios finales, optimizando los procesos de interacción con la plataforma. ##