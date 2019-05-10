const math = require('./math');
const greet = require("./greetings");
const hello = require('./greetings/hello');

console.log(hello.sayHello("Javier"));
console.log(math.add(3, 4));
console.log(math.multiply(8, 6));

//Se refiere a un directorio y de ahí a una función
console.log(greet.greet("Javier"));