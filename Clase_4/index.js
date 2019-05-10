//Manipulación de módulos externos
//En consola (npm install) instala las dependencias que hacen falta y que están definidas en el package.json

//Referencia a módulo externo
const cowsay = require("cowsay");

//Le pasa un objeto a la función
console.log(cowsay.say({
    text: "Hola, soy CowSay!",
    e: "o0",
    T: "U"
}));