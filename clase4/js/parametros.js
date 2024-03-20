// mostrar mensaje en la Consola del navegador
console.log('este es mi mensaje');
/* Éste mensaje lo estamos generando nosotros para 
advertirnos si es que sucediera algo en nuestra aplicación */
console.warn('este es un mensaje de advertencia');
console.error('este es un mensaje de error que creamos nosotros');

/*----*/
// Un parámetro es información que ingresa a una función
function saludar( nombre )
{
    console.log('hola ', nombre);
}

saludar('Morty');
saludar('Rick');

//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

/* Función para pintar el artículo */
function pintar( codigoColor, nombreColor )
{
    caja.style.backgroundColor = codigoColor;
    caja.innerText = nombreColor;
}