// ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');

// declaramos funciones de control
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
}

function ocultarMostrar()
{
    // si la caja se ve -> que no se vea
    if( caja.style.display == 'block' ){
        //caja.style.display = 'none';
        ocultar();
    }else{
        //caja.style.display = 'block';
        mostrar();
    }
}