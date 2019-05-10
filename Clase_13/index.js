const http = require('http');
const fs = require('fs');

//Instancia del servidor (request manipula las peticiones de entrada y respond las de salida)
const server = http.createServer((request, respond) => {

    //Lee el html
    fs.readFile("./resources/my_page.html", (error, datos) => {
        
        //Checa si hubo un error
        if(error)
        {
            console.error(error);
            return;
        }

        //Responde el servidor con los datos leidos
        respond.end(datos);
    });
});

//Enciende el servidor
server.listen(3000);
console.log("El servidor se ha encendido");