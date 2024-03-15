const span = document.querySelector('#span');

function mostrarMensaje()
{
    span.innerText = 'Han pasado sus 5 segundos!';
}

setTimeout( mostrarMensaje, 5000 );