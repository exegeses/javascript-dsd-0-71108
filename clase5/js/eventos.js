const boton = document.querySelector('#boton');
const span = document.querySelector('#span');

//boton.addEventListener( 'evento', acción )

boton.addEventListener(
        'click',
        function(){
            span.innerText = 'hiciste click!';
        }
);
boton.addEventListener(
        'mouseover',
        function(){
            span.innerText = 'mouse sobre';
        }
);
boton.addEventListener(
        'mouseout',
        function(){
            span.innerText = 'mouse fuera';
        }
);

