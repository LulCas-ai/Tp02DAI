let a = "Feliz dia ";
let b = "del amigo";

let palabra = a + b

let letras = palabra.split('');

letras = letras.reverse();
palabra = letras.join("");

console.log(palabra)