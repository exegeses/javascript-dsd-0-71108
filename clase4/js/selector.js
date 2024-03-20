/*
Capturar el texto escrito en el input con el id entrada
*/
const entrada = document.querySelector('#entrada');
const caja = document.querySelector('#caja');
const selector = document.querySelector('#selector');

function mostrarTexto()
{
    let texto = entrada.value; 
    console.log('texto ingresado: ', texto);
}
function pintar( codigoColor )
{
    caja.style.backgroundColor = codigoColor;
}
function colorear()
{
    // capturar el código seleccionado en el input de color
    let colorSeleccionado = selector.value;
    // llamar a la función pintar enviando ese código de color
    pintar( colorSeleccionado );
}