/*const a = document.querySelector('a[href="https://www.astonmartin.com"]');

a.addEventListener(
    'click',
    (eveto)=>{
        alert('hiciste click');
        eveto.preventDefault();
    }
);*/
const span = document.querySelector('#span');
const marcas = [
                'Hermés','Zara','Boss',
                'Aeropostale','Kingping','Tommy',
                'Gola','Hollister','Old Navy',
                'Zorba'
            ];
console.log('marcas', marcas);
// mostrar el contenido del array en el span
span.innerText = marcas[3];
