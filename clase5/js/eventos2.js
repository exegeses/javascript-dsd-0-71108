const dropdown = document.querySelector('#dropdown');
const entrada = document.querySelector('#entrada');
const frase = document.querySelector('#frase');


dropdown.addEventListener(
    'change',
    ()=>{
        //arrow function
        alert('seleccionaste algo!');
    }
);
entrada.addEventListener(
    'change',
    ()=>{
        //arrow function
        alert('modificaste el texto!');
    }
);
document.body.addEventListener(
    'contextmenu',
    (e)=>{
        //arrow function
        e.preventDefault();
        alert('olvidate de copiarlo!');
    }
);
