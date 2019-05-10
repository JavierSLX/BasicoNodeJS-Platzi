const express = require("express");

//Instanciamos Express
const app = express();

//Ruta app
app.get('/app', (request, respond) => {
    respond.send("Estoy en la ruta app");
})

//HOME
app.get('/', (request, respond) => {
    respond.send("Estoy en la ruta HOME");
});

//Cuando no existe la ruta solicitada por el usuario
app.get('*', (request, respond) => {
    respond.send("No se donde estoy");
});

//Levanta el servidor
app.listen(3000, () => {
    console.log("El servidor Express está en escucha en puerto 3000");
});