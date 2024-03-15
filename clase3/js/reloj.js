/*
    Crear un reloj digital formato
    hh:mm:ss   i.e. 20:26:34
*/
const span = document.querySelector('#span');

// declaramos función/es de control
function mostrarReloj()
{
    // creamos un objeto de fecha
    let fecha = new Date();

    // obtenemos el número correspondiente a las horas
    let horas = fecha.getHours();
    if( horas < 10 ){
        horas = '0' + horas;
    }

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0' + minutos;
    }

    // obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0' + segundos;
    }


    //imprimimos en el span
    // utilizando concatenación
    //span.innerText = horas + ' : ' + minutos + ' : ' + segundos;

    // Utilizando interpolación de variables ${}
    span.innerText = `${horas} : ${minutos} : ${segundos}`;
}

// invocamos la función mostrarReloj()
mostrarReloj();

// actualizamos el llamado a la función
setInterval( mostrarReloj, 1000 );