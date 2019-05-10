const fs = require('fs');
const ops = require('./src/fileops');

//Lee un archivo
/*
let incValue;
fs.readFile('./resources/number.txt', 'utf-8', (error, datos) => {
    
    //Checa si hubo un error
    if(error)
        throw error;

    //Los separa en un array y los convierte a numeros
    const numbers = datos.split('\n').map((n) => Number(n));
    console.log(numbers);

    //Incrementa en 1
    incValue = ops.incrementValues(numbers);

    //Escribe en el archivo
    fs.writeFile('./resources/numbernew.txt', incValue.join("\n"), (error, datos) => {

        //Checa si hubo un error
        if(error)
            throw error;
    });
});
*/

//Ejercicio
fs.readFile('./resources/name.txt', 'utf-8', (error, datos) => {
    if(error)
        throw error;

    //Los separa en un arreglo
    const nombres = datos.split("\n");
    let nombresNuevos = ops.callNames(nombres);

    //Crea un archivo nuevo
    fs.writeFile('./resources/nombresnew.txt', nombresNuevos.join("\n"), (error, datos) => {
        if(error)
            throw error;
    });
});
