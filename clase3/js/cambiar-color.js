// Ubicar elemento/s dentro del DOM
const caja = document.querySelector('#caja');

/* sin interactividad
caja.style.backgroundColor = 'hsl(230, 80%, 60% )';
caja.innerText = 'Azul';
*/

/* vamos a crear funciones para almacenar
 dentro toda una serie de acciones */

function pintarAzul()
{
    caja.style.backgroundColor = 'hsl(230, 80%, 60% )';
    caja.innerText = 'Azul';
}
function pintarNaranja()
{
    caja.style.backgroundColor = 'hsl(28, 80%, 70% )';
    caja.innerText = 'Naranja';
}
function pintarVerde()
{
    caja.style.backgroundColor = 'hsl(116, 80%, 60% )';
    caja.innerText = 'Verde';
}
