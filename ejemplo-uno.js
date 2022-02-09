//crear archivo para ejecutarlo desde la terminal
// se aplica la modularización haciendo el llamado del array de frutas 
// Utilizando destructuring
// generar el package.json, contiene informacion de nuestro proyecto
// instalación de un paquete cowsay a traves del npm
const {frutas, dinero} = require('./frutas.js');
const cowsay = require("cowsay");

frutas.forEach((item)=>{
    console.log(item);
})

console.log (dinero);
console.log(cowsay.say({
    text : "hola bienvenidos",
    e : "oO",
    T : "U "
}));