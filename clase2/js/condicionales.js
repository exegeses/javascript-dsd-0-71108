// ubicamos elementos dentro del DOM
const frase = document.querySelector('#frase');

/*
    - Hacerle una pregunta al usuario
    - Almacenar la respuesta en una variable
*/
let respuesta = prompt('¿qué seleccionado ganó la copa Qatar 2022?');

if( respuesta.toLowerCase() == 'argentina' ){
    frase.innerText = 'Correcto!';
}
else{
    frase.innerText = 'Incorrecto!';    
}