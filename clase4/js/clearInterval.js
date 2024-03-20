const span = document.querySelector('#span');

let numero = 0;
let intervalo = '';

function incremento()
{
    numero++;
    span.innerText = numero;
    if( numero > 10  ){
        clearInterval( intervalo );
    }
    
}

incremento();
intervalo = setInterval( incremento, 1000 );

/* Para detener la actualización de un setInterval() 
tenemos la función clearInterval() */