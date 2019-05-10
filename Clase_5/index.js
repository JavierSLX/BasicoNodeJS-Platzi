//Fundamentos de asincronismo

const add = require("./src/addition");
const sim = require("./src/intensive");

//add.syncSum(1, 2);
//add.asyncSum(1, 2);

//Simula la carga en el procesador de manera sincrona
//sim.simulateSync();

//Simula la carga en el procesador de manera asincrona
sim.simulateAsync();