// Ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');
const h1 = document.querySelector('h1');

let intervalo = '';

// declaramos funciones de control
function cuentaRegresiva()
{
    // creamos dos objetos de fecha
    let actual = new Date();
    let final = new Date( 2024, 2, 24 );

    // calculamos la diferencia de eventos
        // expresado en milisegundos
    let diferencia = final - actual;
    console.log( 'diferencia:', diferencia );

    /* Convertimos unidades de tiempo */
    // Obtenemos el tiempo expresado en segundos
        // y quetamos decimales
    let segundos = Math.trunc( diferencia/1000 );
    console.log('segundos:',segundos);
    // Obtenemos el tiempo expresado en minutos
    let minutos = Math.trunc(segundos/60);
    console.log( 'minutos:',minutos );
    // Obtenemos el tiempo expresado en horas
    let horas = Math.trunc( minutos/60 );
    console.log('horas:', horas);
    // Obtenemos el tiempo expresado en dias
    let dias = Math.trunc( horas/24 );
    console.log('dias:', dias);


    /*####  Calculamos los tiempos restantes de cada unidad de tiempo */
    segundos = segundos % 60;
    minutos = minutos % 60;
    horas = horas % 24;

/*####################
####  detenemos con cuenta regresiva 
#################### */
    if(
        dias <= 0 &&
        horas <= 0 &&
        minutos <= 0 &&
        segundos <= 0
    )
    { 
        h1.innerText = '¡Oferta finalizada!';
        clearInterval( intervalo );
     }


    // Agregar cero inicial para que sean dos dígitos
    if( segundos < 10 ){
        segundos = '0' + segundos;
    }
    if( minutos < 10 ){
        minutos = '0' + minutos;
    }
    if( horas < 10 ){
        horas = '0' + horas;
    }
    if( dias < 10 ){
        dias = '0' + dias;
    }

    /*####### imprimimos en las span */
    txtSegundos.innerText = segundos;
    txtMinutos.innerText = minutos;
    txtHoras.innerText = horas;
    txtDias.innerText = dias;
}

// Invocamos la función cuentaRegresiva()
cuentaRegresiva();
// Actualizamos el llamado a la función cuentaRegresiva()
intervalo = setInterval( cuentaRegresiva, 1000 );