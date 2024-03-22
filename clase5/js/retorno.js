// Función para sumar dos números
function sumar( num1, num2 )
{
    let resultado = num1 + num2;
    return resultado;
}

/* función para agregar cero inicial
    Dado un número, 
    Si este número es menor que 10 
    que agregue un cero a la izquierda
*/
function agregarCero( numero )
{
    if( numero < 10 ){
        numero = '0' + numero;
    }
    return numero;
}


console.log( sumar(10, 20) );
console.log( agregarCero( 5 ) );
console.log( agregarCero( 3 ) );
console.log( agregarCero( 9 ) );
console.log( agregarCero( 25 ) );
