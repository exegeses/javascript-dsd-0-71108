const span = document.querySelector('#span');

let numero = 0;

function counter()
{
    numero++; // numero = numero + 1;
    span.innerText = numero;
}

counter()
/*  1 vez cada milésima de segundo */
//setInterval( counter );

/*  1 vez cada segundo */
setInterval( counter, 1000 );