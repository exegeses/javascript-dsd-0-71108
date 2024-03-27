const thunder = document.querySelector('#thunder');
const sonido = new Audio( 'audio/thunder.mp3' );

window.addEventListener(
        'load',
        ()=>{
            sonido.play();
        }
);


