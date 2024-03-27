// Ubicamos elementos dentro del DOM
//const contenedor = document.querySelector('#contenedor');
//console.log(contenedor)
const botones = document.querySelectorAll( '#contenedor img' );
console.log(botones);
const elemento = document.querySelectorAll('#contenedor span');
console.log(elemento)

const anterior = botones[0];
const siguiente = botones[1];
const span = elemento[0];

const marcas = [
    'Hermés','Zara','Boss',
    'Aeropostale','Kingping','Tommy',
    'Gola','Hollister','Old Navy',
    'Zorba', 'Nike', 'Armani'
];

/*¢¢¢ estodo inicial */
let llave = 3;

/*### _> contar elementos del array */
const cantidad = marcas.length;

// Mostramos una de las marcas dentro del span
span.innerText = marcas[ llave ];

siguiente.addEventListener(
        'click',
        ()=>{
            llave++; // llave = llave + 1;
            if( llave == cantidad ){
                llave = 0;
            }
            span.innerText = marcas[ llave ];
        }
);
anterior.addEventListener(
        'click',
        ()=>{
            llave--;
            if( llave < 0 ){
                llave = cantidad - 1;
            }
            span.innerText = marcas[ llave ];
        }
);