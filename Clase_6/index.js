//Callbacks y promesas

const call = require("./src/call");

//Funcion sincrona
console.log(call.sync("Javier"));

//Funcion con callback (asincrona)
call.withCallback("Javier", call.sync);

//Funcion con promesa (asincrona)
call.withPromise("Javier")
    .then(name => {
        console.log(call.sync(name));
    })
    .catch(() => {
        console.log("Error en la promesa");
    });