const call = require('./src/call');

call.greet('Javier Serrano Lule');

call.withPromise("Javier", "Serrano").then((nombre) => {
    console.log(nombre);
});

//Usando async/await (Obtiene el mismo valor de arriba pero de manera sincrona esperando a resolverse)
async function callWithPromise()
{
    const fullName = await call.withPromise("Javier", "Serrano");
    console.log(fullName);
}

callWithPromise();