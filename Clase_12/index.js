const greet = require('./src/greet');

//Un evento se produce
greet.emit("clap");

greet.emit("shout", "VIVA EL AMOR");

greet.emit("call", "Javier Serrano", (name) => {
    console.log(name);
})